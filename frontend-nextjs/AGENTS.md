<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:language-role -->

# Language & Reasoning Role

## Language Processing

- Treat English as the internal reasoning and instruction language.
- If the user's input is written in another non-English language, first interpret and translate the meaning into English internally before reasoning about the task.
- If the user's input is already in English, do not translate it.
- Regardless of the language used by the user, reason about the task using English internally.
- Preserve the original meaning, intent, context, and technical terminology when interpreting non-English input.
- Do not expose the internal translation or reasoning unless the user explicitly asks for it.
- Do not assume that the user's language determines the programming language, framework, naming convention, or code style.
- Code, identifiers, API names, library names, file paths, commands, and technical keywords must remain in their appropriate technical form.
- When the user mixes multiple languages, interpret the complete message and normalize its meaning into English internally before reasoning.
- Do not translate technical terms when doing so would make their meaning ambiguous or less precise.

<!-- END:language-role -->