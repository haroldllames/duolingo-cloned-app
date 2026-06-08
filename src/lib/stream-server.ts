import { createClerkClient } from "@clerk/backend";
import { StreamClient } from "@stream-io/node-sdk";

const streamApiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
const streamApiSecret = process.env.STREAM_API_SECRET;
const clerkSecretKey = process.env.CLERK_SECRET_KEY;
const clerkPublishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!streamApiKey || !streamApiSecret) {
  throw new Error(
    "Missing EXPO_PUBLIC_STREAM_API_KEY or STREAM_API_SECRET — add them to your .env"
  );
}

if (!clerkSecretKey || !clerkPublishableKey) {
  throw new Error(
    "Missing CLERK_SECRET_KEY or EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY — add them to your .env"
  );
}

export const streamServerClient = new StreamClient(
  streamApiKey,
  streamApiSecret
);

const clerk = createClerkClient({
  secretKey: clerkSecretKey,
  publishableKey: clerkPublishableKey,
});

export type AuthedClerkUser = {
  id: string;
  name: string;
  image?: string;
};

export async function authenticateClerkRequest(
  request: Request
): Promise<AuthedClerkUser | null> {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace(/^Bearer\s+/i, "").trim();
  if (!token) return null;

  try {
    const { verifyToken } = await import("@clerk/backend");
    const payload = await verifyToken(token, { secretKey: clerkSecretKey });
    if (!payload.sub) return null;

    const user = await clerk.users.getUser(payload.sub);
    const name =
      [user.firstName, user.lastName].filter(Boolean).join(" ") ||
      user.username ||
      user.primaryEmailAddress?.emailAddress ||
      user.id;

    return {
      id: user.id,
      name,
      image: user.imageUrl,
    };
  } catch {
    return null;
  }
}
