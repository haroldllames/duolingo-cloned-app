import { useAuth, useUser } from "@clerk/expo";
import {
  StreamVideo,
  StreamVideoClient,
  type DeepPartial,
  type Theme,
  type User,
} from "@stream-io/video-react-native-sdk";
import { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  STREAM_API_KEY,
  createAuthedFetch,
  fetchStreamSession,
} from "@/lib/stream";

type Props = { children: React.ReactNode };

export function StreamVideoProvider({ children }: Props) {
  const { isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [client, setClient] = useState<StreamVideoClient>();

  // Keep a stable ref to getToken so the effect below doesn't re-run whenever
  // Clerk hands back a new function identity. Re-running tears down the
  // WebSocket and hammers Stream's connect endpoint -> RateLimitError.
  const getTokenRef = useRef(getToken);
  getTokenRef.current = getToken;

  const userId = user?.id;

  useEffect(() => {
    if (!isSignedIn || !userId || !STREAM_API_KEY) {
      setClient(undefined);
      return;
    }

    let cancelled = false;
    let active: StreamVideoClient | undefined;

    const authedFetch = createAuthedFetch(() => getTokenRef.current());

    (async () => {
      try {
        const session = await fetchStreamSession(authedFetch);
        if (cancelled) return;

        const streamUser: User = {
          id: session.userId,
          name: session.userName,
          image: session.userImage,
        };

        const tokenProvider = async () => {
          const fresh = await fetchStreamSession(authedFetch);
          return fresh.token;
        };

        active = StreamVideoClient.getOrCreateInstance({
          apiKey: session.apiKey,
          user: streamUser,
          token: session.token,
          tokenProvider,
        });

        if (!cancelled) setClient(active);
      } catch (err) {
        console.error("[stream] failed to initialize video client", err);
      }
    })();

    return () => {
      cancelled = true;
      active?.disconnectUser().catch((err) => console.error(err));
      setClient(undefined);
    };
  }, [isSignedIn, userId]);

  if (!client) return <>{children}</>;
  return <VideoWithInsets client={client}>{children}</VideoWithInsets>;
}

function VideoWithInsets({
  client,
  children,
}: {
  client: StreamVideoClient;
  children: React.ReactNode;
}) {
  const { top, right, bottom, left } = useSafeAreaInsets();
  const theme = {
    variants: { insets: { top, right, bottom, left } },
  } as DeepPartial<Theme>;
  return (
    <StreamVideo client={client} style={theme}>
      {children}
    </StreamVideo>
  );
}
