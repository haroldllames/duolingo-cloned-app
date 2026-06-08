import logging
from pathlib import Path

from dotenv import load_dotenv
from vision_agents.core import Agent, Runner, User
from vision_agents.core.agents import AgentLauncher
from vision_agents.core.instructions import Instructions
from vision_agents.plugins import gemini, getstream

# Load env. The parent app's .env / .env.local is the source of truth for
# STREAM_API_KEY / STREAM_API_SECRET / OPENAI_API_KEY, so let it override any
# stale values exported in the parent shell.
load_dotenv(Path(__file__).parent.parent / ".env", override=True)
load_dotenv(Path(__file__).parent.parent / ".env.local", override=True)
load_dotenv(Path(__file__).parent / ".env", override=True)


logger = logging.getLogger(__name__)


# Fallback instructions used only if the call has no lesson-specific prompt
# attached. The mobile app always attaches the current lesson's
# `aiTeacherPrompt.systemPrompt` to the call's `custom` data, and we use that
# verbatim so the agent stays on-topic for the selected lesson.
DEFAULT_INSTRUCTIONS = (
    "You're Lingua, a warm, upbeat human-style language teacher. "
    "Talk like a real teacher sitting across from one student — friendly, curious, encouraging. "
    "Use natural English with contractions (I'll, you're, that's, let's). "
    "Keep replies to one or two short, conversational sentences. "
    "Wait for the learner to start the lesson and follow their lead."
)

DEFAULT_OPENING_LINE = (
    "Greet the learner warmly in one short sentence in English, like a real teacher saying hi. "
    "Then, in one more short sentence, invite them to start today's lesson together. "
    "Do not list options or ask multiple questions — keep it human and inviting."
)


async def create_agent(**kwargs) -> Agent:
    return Agent(
        edge=getstream.Edge(),
        agent_user=User(name="Lingua", id="ai-teacher"),
        instructions=DEFAULT_INSTRUCTIONS,
        llm=gemini.Realtime(),
    )


async def join_call(agent: Agent, call_type: str, call_id: str, **kwargs) -> None:
    call = await agent.create_call(call_type, call_id)

    # The mobile API attaches the current lesson's system prompt and opening
    # line to the call's `custom` data. Read it now and override the agent's
    # generic defaults so the teacher stays focused on this specific lesson
    # (e.g. counting in Japanese, greetings in French) instead of drifting to
    # whatever scenario the LLM defaults to.
    custom = getattr(call, "custom_data", None) or {}
    lesson_prompt = custom.get("lessonSystemPrompt") if isinstance(custom, dict) else None
    opening_prompt = custom.get("lessonOpeningLine") if isinstance(custom, dict) else None
    lesson_title = custom.get("lessonTitle") if isinstance(custom, dict) else None

    if lesson_prompt:
        # Replace both the agent's instructions and the LLM's cached copy.
        # The LLM caches `_instructions` at `_attach_agent` time, so updating
        # only `agent.instructions` would leave Gemini's config stale.
        agent.instructions = Instructions(input_text=lesson_prompt)
        agent.llm.set_instructions(agent.instructions)
        logger.info(
            "Loaded lesson prompt for call %s (lesson: %s)",
            call_id,
            lesson_title or custom.get("lessonId"),
        )
    else:
        logger.warning(
            "No lesson prompt on call %s — falling back to default instructions",
            call_id,
        )

    greeting_directive = (
        f"Open the lesson by saying this exact line, warmly and naturally: \"{opening_prompt}\""
        if opening_prompt
        else DEFAULT_OPENING_LINE
    )

    async with agent.join(call):
        await agent.simple_response(text=greeting_directive)
        await agent.finish()


runner = Runner(AgentLauncher(create_agent=create_agent, join_call=join_call))


if __name__ == "__main__":
    runner.cli()
