# Agent Guidelines

## Core Rules

1. Make the smallest practical change.
   - Keep edits focused on the user's request.
   - Follow the existing project structure and style.
   - Avoid unrelated refactors, formatting churn, dependency changes, or generated file changes unless they are necessary.

2. Before any push, check for personal or sensitive information and warn the user.
   - Scan for API keys, tokens, passwords, private keys, secrets, phone numbers, government IDs, private addresses, and personal contact details.
   - Treat public-facing contact information, such as an email shown on the portfolio site, as personal information and explicitly remind the user that it will be public.
   - Do not push if high-risk secrets are found. Report the file and line, explain the risk, and wait for the user's decision.

3. Before any push, preview the site locally and share the local URL.
   - Run a production build first.
   - Start a local preview server.
   - Tell the user the exact local URL to open.
   - Ask the user to review the preview and confirm whether it looks OK before pushing.

4. Push only after the user confirms the preview and provides the push command.
   - The user should provide the exact push command they want run.
   - Before running it, verify that the command matches the intended branch and remote.
   - If the command would push unexpected commits or files, stop and explain the issue.

## Recommended Preview Flow

Use the bundled Node runtime if the system Node version is too old.

```bash
PATH=/Users/QL_olivia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH \
/Users/QL_olivia/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm run build
```

Then start the preview server:

```bash
PATH=/Users/QL_olivia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH \
/Users/QL_olivia/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm exec vite preview --host 127.0.0.1
```

If the default port is busy, use another port:

```bash
PATH=/Users/QL_olivia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH \
/Users/QL_olivia/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/pnpm exec vite preview --host 127.0.0.1 --port 4174
```

Report the URL shown by Vite, usually:

```text
http://127.0.0.1:4173/olivia-portfolio/
```

## Recommended Pre-Push Checks

Check the branch and pending changes:

```bash
git status --short --branch
git log --oneline --decorate -5
git diff --name-status origin/main...HEAD
```

Check the files that would be pushed:

```bash
git diff --name-only origin/main...HEAD
```

Scan for sensitive information:

```bash
rg -n --hidden -S "(api[_-]?key|secret|token|password|passwd|private[_-]?key|client[_-]?secret|access[_-]?token|refresh[_-]?token|BEGIN (RSA|OPENSSH|DSA|EC|PGP) PRIVATE KEY|sk-[A-Za-z0-9_-]{20,}|ghp_[A-Za-z0-9_]{20,}|github_pat_[A-Za-z0-9_]{20,}|AIza[0-9A-Za-z_-]{35}|AKIA[0-9A-Z]{16}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|\b\d{3}[-. ]?\d{2}[-. ]?\d{4}\b|\b\d{3}[-. ]?\d{3}[-. ]?\d{4}\b)" \
  --glob '!node_modules/**' \
  --glob '!dist/**' \
  --glob '!.git/**'
```

## Push Gate

Before pushing, summarize:

- What changed.
- What files will be pushed.
- Whether the local preview passed.
- Any personal or sensitive information found.
- The exact push command provided by the user.

Only run the push after the user confirms the preview and provides the push command.
