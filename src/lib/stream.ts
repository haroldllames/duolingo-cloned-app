import Constants from "expo-constants";

export type StreamSession = {
  apiKey: string;
  token: string;
  userId: string;
  userName: string;
  userImage?: string;
};

export type StreamCallInfo = {
  callId: string;
  callType: string;
};

export const STREAM_API_KEY: string | undefined = (
  Constants.expoConfig?.extra as { streamApiKey?: string } | undefined
)?.streamApiKey;

type AuthedFetch = (path: string, init?: RequestInit) => Promise<Response>;

async function readJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Request to ${res.url} failed: ${res.status} ${res.statusText} ${text}`
    );
  }
  return res.json() as Promise<T>;
}

export function createAuthedFetch(getClerkToken: () => Promise<string | null>): AuthedFetch {
  return async (path, init = {}) => {
    const token = await getClerkToken();
    if (!token) throw new Error("Not signed in");

    const headers = new Headers(init.headers);
    headers.set("authorization", `Bearer ${token}`);
    if (init.body && !headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }

    return fetch(path, { ...init, headers });
  };
}

export async function fetchStreamSession(
  authedFetch: AuthedFetch
): Promise<StreamSession> {
  const res = await authedFetch("/api/stream/token", { method: "POST" });
  return readJson<StreamSession>(res);
}

export async function createLessonAudioCall(
  authedFetch: AuthedFetch,
  payload: { lessonId: string; languageCode: string; lessonTitle?: string }
): Promise<StreamCallInfo> {
  const res = await authedFetch("/api/stream/call", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return readJson<StreamCallInfo>(res);
}
