# Vision Agent — Lingua

Python service that joins Stream calls as the AI language teacher.

## Setup

```bash
cd vision-agent
uv sync
```

Required env vars (loaded from `../.env`, `../.env.local`, then `./.env`):

- `STREAM_API_KEY`
- `STREAM_API_SECRET`
- `OPENAI_API_KEY`

## Run as HTTP server (used by the mobile app)

```bash
uv run main.py serve --host 127.0.0.1 --port 8000
```

The Expo API route at `src/app/api/stream/call+api.ts` POSTs to
`POST /calls/{call_id}/sessions` on this server whenever a learner starts a
lesson, which dispatches Lingua into the Stream call.

Make sure `VISION_AGENT_URL` in the app's `.env` matches the server's host/port.

## Run a one-off agent in the console

For local testing without the mobile app:

```bash
uv run main.py run
```
