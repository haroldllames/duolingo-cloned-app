import { useAuth } from "@clerk/expo";
import {
  Call,
  CallingState,
  useStreamVideoClient,
} from "@stream-io/video-react-native-sdk";
import { useCallback, useEffect, useRef, useState } from "react";

import { createAuthedFetch, createLessonAudioCall } from "@/lib/stream";

/**
 * Stream's Publisher clones the microphone track before adding it to the
 * RTCRtpSender (see `Publisher.publish` -> `cloneTrack`). Toggling `enabled`
 * on the source track in `microphone.state.mediaStream` does NOT propagate to
 * the clone that's actually being sent over the wire — we have to reach into
 * the publisher and toggle the published tracks directly.
 */
function applyEnabledToCall(call: Call, enabled: boolean) {
  // Local source track (kept in sync for any local listeners / SDK internals).
  const sourceTrack = call.microphone.state.mediaStream?.getAudioTracks?.()[0];
  if (sourceTrack) sourceTrack.enabled = enabled;

  // The cloned, published tracks living in the publisher's transceivers.
  // This is the one the SFU (and the agent) actually receives.
  const publishedTracks = call.publisher?.getPublishedTracks?.() ?? [];
  for (const track of publishedTracks) {
    if (track.kind === "audio") track.enabled = enabled;
  }
}

export type AudioCallStatus =
  | "idle"
  | "starting"
  | "connecting"
  | "joined"
  | "ended"
  | "error";

type StartArgs = {
  lessonId: string;
  languageCode: string;
  lessonTitle?: string;
};

export function useLessonAudioCall() {
  const client = useStreamVideoClient();
  const { getToken } = useAuth();

  const [call, setCall] = useState<Call | null>(null);
  const [status, setStatus] = useState<AudioCallStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const startedRef = useRef(false);
  // Desired PTT state. Re-applied whenever the underlying audio track is
  // (re)created — e.g. when join() renegotiates the publish — so Stream
  // can't accidentally un-mute us between presses.
  const pttActiveRef = useRef(false);

  const start = useCallback(
    async ({ lessonId, languageCode, lessonTitle }: StartArgs) => {
      if (!client) {
        setStatus("error");
        setErrorMessage("Voice service is not ready yet — try again in a moment.");
        return;
      }
      if (startedRef.current) return;
      startedRef.current = true;

      setStatus("starting");
      setErrorMessage(null);

      try {
        const authedFetch = createAuthedFetch(() => getToken());
        const { callId, callType } = await createLessonAudioCall(authedFetch, {
          lessonId,
          languageCode,
          lessonTitle,
        });

        const newCall = client.call(callType, callId, { reuseInstance: true });
        newCall.setDisconnectionTimeout(120);
        // Audio-only: camera off, mic enabled so the audio track stays published.
        // PTT mutes by toggling the underlying WebRTC track's `enabled` flag (see
        // setPushToTalkActive below) rather than calling microphone.disable(), which
        // unpublishes the track and forces a slow republish on every press.
        await newCall.camera.disable().catch(() => undefined);
        await newCall.microphone.enable().catch(() => undefined);
        setCall(newCall);
        setStatus("connecting");

        await newCall.join({ create: false, maxJoinRetries: 2 });

        // Default to muted: the user must hold PTT to be heard.
        pttActiveRef.current = false;
        applyEnabledToCall(newCall, false);
      } catch (err) {
        startedRef.current = false;
        console.error("[stream] failed to start audio call", err);
        setStatus("error");
        setErrorMessage(
          err instanceof Error ? err.message : "Could not start the call."
        );
      }
    },
    [client, getToken]
  );

  const setPushToTalkActive = useCallback(
    (active: boolean) => {
      pttActiveRef.current = active;
      if (!call) return;
      applyEnabledToCall(call, active);
    },
    [call]
  );

  // Re-apply the desired PTT state when the source mic stream is (re)created —
  // ICE restarts / republish cycles can swap the underlying track.
  useEffect(() => {
    if (!call) return;
    const sub = call.microphone.state.mediaStream$.subscribe(() => {
      applyEnabledToCall(call, pttActiveRef.current);
    });
    return () => sub.unsubscribe();
  }, [call]);

  const leave = useCallback(async () => {
    if (!call) return;
    try {
      if (call.state.callingState !== CallingState.LEFT) {
        await call.leave();
      }
    } catch (err) {
      console.error("[stream] failed to leave call", err);
    } finally {
      setStatus("ended");
      setCall(null);
      startedRef.current = false;
    }
  }, [call]);

  useEffect(() => {
    return () => {
      const c = call;
      if (c && c.state.callingState !== CallingState.LEFT) {
        c.leave().catch((err) => console.error(err));
      }
    };
  }, [call]);

  return { call, status, errorMessage, start, leave, setPushToTalkActive };
}
