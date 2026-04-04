# Contributing

Thank you for your interest in contributing to this project. Please follow the guidelines below to keep the workflow consistent.

## Contribution Workflow

1. Fork the repository and create your branch from `main`.
2. Make your changes, ensuring all tests pass and the linter reports no errors.
3. Commit your changes with a clear, descriptive commit message.
4. Push your branch and open a pull request targeting `main`.
5. Address any review feedback before the PR is merged.

All pull requests must pass the CI pipeline (lint, build) before they can be merged.

## Branch Naming Conventions

Use the following prefixes when naming branches:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feat/` | New feature | `feat/add-room-booking` |
| `fix/` | Bug fix | `fix/login-redirect` |
| `chore/` | Maintenance or tooling | `chore/update-dependencies` |
| `docs/` | Documentation changes | `docs/update-readme` |
| `refactor/` | Code refactoring (no behaviour change) | `refactor/extract-auth-hook` |
| `test/` | Adding or updating tests | `test/room-availability` |

Branch names should be lowercase and use hyphens to separate words.

## Code Style

This project uses [Biome](https://biomejs.dev/) for linting and formatting. Before committing, run:

```bash
npm run lint     # check for issues
npm run format   # auto-format code
```

A pre-commit hook will automatically run `biome check --apply` on staged files.

## Reporting Issues

Open a GitHub issue with a clear description of the problem, steps to reproduce, and the expected vs. actual behaviour.
