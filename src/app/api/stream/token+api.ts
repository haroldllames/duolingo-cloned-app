import {
  authenticateClerkRequest,
  streamServerClient,
} from "@/lib/stream-server";

export async function POST(request: Request) {
  const user = await authenticateClerkRequest(request);
  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  await streamServerClient.upsertUsers([
    { id: user.id, name: user.name, image: user.image, role: "user" },
  ]);

  const validityInSeconds = 60 * 60 * 4;
  const token = streamServerClient.generateUserToken({
    user_id: user.id,
    validity_in_seconds: validityInSeconds,
  });

  return Response.json({
    apiKey: process.env.EXPO_PUBLIC_STREAM_API_KEY,
    token,
    userId: user.id,
    userName: user.name,
    userImage: user.image,
  });
}
