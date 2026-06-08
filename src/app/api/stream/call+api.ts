import { createHash } from "crypto";

import { getLessonById } from "@/data/units";
import {
  authenticateClerkRequest,
  streamServerClient,
} from "@/lib/stream-server";

const CALL_TYPE = "default";
const AI_TEACHER_USER_ID = "ai-teacher";
const VISION_AGENT_URL =
  process.env.VISION_AGENT_URL ?? "http://127.0.0.1:8000";

async function dispatchVisionAgent(callId: string) {
  const url = `${VISION_AGENT_URL}/calls/${callId}/sessions`;
  console.log(`[stream] dispatching vision agent -> ${url}`);

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ call_type: CALL_TYPE }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `Vision agent dispatch failed (${response.status}): ${detail || response.statusText}`
    );
  }

  console.log(`[stream] vision agent dispatch ok for call ${callId}`);
}

function shortHash(input: string, length = 8) {
  return createHash("sha1").update(input).digest("hex").slice(0, length);
}

export async function POST(request: Request) {
  const user = await authenticateClerkRequest(request);
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: { lessonId?: string; languageCode?: string; lessonTitle?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { lessonId, languageCode, lessonTitle } = body;
  if (!lessonId || !languageCode) {
    return Response.json(
      { error: "lessonId and languageCode are required" },
      { status: 400 }
    );
  }

  try {
    await streamServerClient.upsertUsers([
      {
        id: AI_TEACHER_USER_ID,
        name: "AI Teacher",
        role: "user",
      },
    ]);

    // Stream call ids are capped at 64 chars. Clerk user ids alone are ~33
    // chars, so hash the user id and timestamp into short tokens.
    const userHash = shortHash(user.id);
    const stamp = Date.now().toString(36);
    const callId = `lesson-${lessonId}-${userHash}-${stamp}`.slice(0, 64);

    const call = streamServerClient.video.call(CALL_TYPE, callId);

    const lesson = getLessonById(lessonId);
    const teacherPrompt = lesson?.aiTeacherPrompt;

    await call.getOrCreate({
      data: {
        created_by_id: user.id,
        members: [
          { user_id: user.id, role: "user" },
          { user_id: AI_TEACHER_USER_ID, role: "user" },
        ],
        custom: {
          lessonId,
          languageCode,
          lessonTitle: lessonTitle ?? lesson?.title ?? null,
          lessonTopicFocus: teacherPrompt?.topicFocus ?? null,
          lessonTeachingStyle: teacherPrompt?.teachingStyle ?? null,
          lessonSystemPrompt: teacherPrompt?.systemPrompt ?? null,
          lessonOpeningLine: teacherPrompt?.openingLine ?? null,
        },
      },
    });

    try {
      await dispatchVisionAgent(callId);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("[stream] vision agent dispatch failed", err);
      return Response.json(
        { error: "Vision agent dispatch failed", message },
        { status: 502 }
      );
    }

    return Response.json({ callId, callType: CALL_TYPE });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[stream] GetOrCreateCall failed", err);
    return Response.json(
      { error: "GetOrCreateCall failed", message },
      { status: 500 }
    );
  }
}
