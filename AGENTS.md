# Repository Guidelines

## Project Structure & Module Organization

This repository publishes `@ntnyq/prettier-config`, a small TypeScript package for sharing a Prettier configuration. The public source lives in `src/index.ts`; keep exported config helpers and defaults there unless the module grows enough to justify splitting files. Tests live in `tests/`, with sample inputs in `tests/fixtures/`. Build output is generated into `dist/` by tsdown and should not be edited by hand. Root config files such as `tsdown.config.ts`, `vitest.config.ts`, `eslint.config.mjs`, and `prettier.config.mjs` define the toolchain.

## Build, Test, and Development Commands

Use `pnpm` with the version declared in `package.json`.

- `pnpm run dev`: starts tsdown in watch mode.
- `pnpm run build`: builds `dist/index.js` and declaration files.
- `pnpm run lint`: runs ESLint with `@ntnyq/eslint-config`.
- `pnpm run typecheck`: runs `tsgo --noEmit`.
- `pnpm test`: runs Vitest once.
- `pnpm run release:check`: runs lint, typecheck, and tests before release work.

## Coding Style & Naming Conventions

Follow `.editorconfig`: UTF-8, LF endings, final newline, two-space indentation, and no trailing whitespace. TypeScript uses ESM, named exports, single quotes, no semicolons, trailing commas, and 80-column Prettier defaults. Keep option objects sorted when marked with `// @keep-sorted`. Prefer descriptive exported names such as `DEFAULT_CONFIG` and `defineConfig`.

## Testing Guidelines

Vitest is the test framework. Add behavior tests in `tests/index.test.ts` or nearby `*.test.ts` files if the suite expands. Use fixtures in `tests/fixtures/` to verify Prettier output across parsers, and update inline snapshots intentionally when defaults change. Run `pnpm test` before submitting changes; run `pnpm run release:check` for release-impacting edits.

## Commit & Pull Request Guidelines

History follows Conventional Commits, for example `feat: bump prettier to v3.9.0`, `chore: bump pnpm to v11`, and `chore(deps): update all non-major dependencies (#60)`. Keep commits scoped and imperative. Pull requests should describe the change, note affected config defaults or fixtures, link related issues, and include the commands run locally.

## Agent-Specific Instructions

When working from the local Codex environment, prefix shell commands with `rtk`, for example `rtk pnpm test` or `rtk git status`. Do not hand-edit generated files in `dist/`; change `src/` and rebuild instead.
