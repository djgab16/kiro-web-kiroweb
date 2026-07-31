# Contributing to Kiro Hub

Thank you for your interest in contributing! This guide will help you get started.

## Prerequisites

- Node.js 22+ (see `.nvmrc`)
- npm 10+

## Getting Started

```bash
# Clone the repository
git clone https://github.com/djgab16/kiro-web-kiroweb.git
cd kiro-web-kiroweb

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Available Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the development server         |
| `npm run build`    | Create an optimized production build |
| `npm run start`    | Serve the production build           |
| `npm run lint`     | Run ESLint                           |
| `npm run type-check` | Run TypeScript type checking       |
| `npm run format`   | Format all files with Prettier       |
| `npm run format:check` | Check formatting without changes |
| `npm test`         | Run unit tests with Vitest           |
| `npm run test:watch` | Run tests in watch mode            |

## Project Structure

```
app/
  components/   # React client components
  lib/          # Shared utilities, types, and data
  api/          # API route handlers
  [route]/      # Page routes (App Router)
__tests__/      # Unit tests (mirrors app/ structure)
public/         # Static assets
```

## Code Style

- **TypeScript** for all source files
- **Tailwind CSS v4** for styling (utility-first, responsive classes)
- **Semantic HTML** for all layout sections
- **Framer Motion** for animations
- **Lucide React** for icons

### Conventions

- Use `"use client"` directive only in components that need client-side interactivity
- Export metadata from server component page files, not from client components
- Use the `PageHero` component for consistent hero sections across pages
- Follow existing naming patterns: `[Feature]Content.tsx` for page content components

## Making Changes

1. Create a feature branch from `main`
2. Make focused, atomic commits using [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` for new features
   - `fix:` for bug fixes
   - `refactor:` for code improvements
   - `docs:` for documentation changes
   - `style:` for formatting changes
   - `test:` for adding or updating tests
   - `chore:` for maintenance tasks
   - `perf:` for performance improvements
   - `ci:` for CI/CD changes
3. Ensure all checks pass before submitting:
   ```bash
   npm run lint
   npm run type-check
   npm run format:check
   npm test
   npm run build
   ```
4. Open a pull request against `main`

## Pull Requests

- Fill out the PR template
- Keep PRs focused on a single concern
- Ensure CI passes before requesting review
- Add tests for new functionality when applicable

## Reporting Issues

Use the [GitHub issue templates](https://github.com/djgab16/kiro-web-kiroweb/issues/new/choose) to report bugs or request features.

## Security

For security vulnerabilities, please refer to our [Security Policy](SECURITY.md) for responsible disclosure instructions.
