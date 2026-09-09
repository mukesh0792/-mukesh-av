# Copilot Instructions for this repository

## Repository state
- The current workspace is effectively empty: there are no application source files, no `README.md`, and no existing AI guidance files such as `AGENTS.md`, `CLAUDE.md`, or `copilot-instructions.md` to inherit from.
- Treat this as a blank repo until real project files appear. Do not infer a framework, service architecture, or dependency stack that is not present.
- Prefer the minimal possible change set and keep new files organized in the conventional root layout (`src/`, `tests/`, `config/`, `docs/` only when needed).

## Working style
- Follow the principle of least surprise: preserve existing structure, naming, and code style when files exist; if the repo is empty, default to clear, simple, explicit code rather than introducing a custom architecture.
- Do not add new dependencies or scaffolding unless a project file already indicates they are required.
- Keep commands and scripts aligned with the repo's actual tooling (for example `package.json`, `pyproject.toml`, `requirements.txt`, `Makefile`, `docker-compose.yml`) instead of inventing project-specific workflows.

## Validation and workflow
- Before proposing or running build/test commands, inspect the root for the project manifest and conventions. Common examples: `package.json`, `pyproject.toml`, `requirements.txt`, `Cargo.toml`, `go.mod`, `pom.xml`, or `Makefile`.
- Use the repository-native command set rather than generic commands. For example, prefer `npm test`, `pytest`, `cargo test`, `go test`, or a project Make target over ad hoc shell scripts.
- If there is no manifest yet, avoid claiming the project is ready to build; describe the missing setup and keep the changes scoped.

## Architecture expectations
- Since no app code is present, do not assume service boundaries, message queues, APIs, databases, or deployment pipelines.
- When the repo grows, prefer explicit module boundaries and simple data flow over hidden cross-cutting behavior.
- Keep integrations obvious: configuration, network clients, and external services should be isolated and easy to replace.

## Changes to make in this repo
- Prefer small, readable edits.
- Add tests only when a project manifest or project conventions already indicate they are expected.
- When in doubt, ask for clarification instead of inventing framework-specific patterns that are not evidenced by the repository.

## Good defaults for a new project
- If creating a new project structure, keep it conventional and easy to reason about: one clear entry point, config at the root, and tests adjacent to the code they validate.
- Document any new workflow in the repo immediately so future agents can follow it.
