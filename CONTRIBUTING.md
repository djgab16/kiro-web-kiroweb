# Contributing to Kiro Hub

Thank you for your interest in contributing to Kiro Hub! This document provides guidelines and instructions for contributing.

## Development Setup

### Prerequisites

- Node.js 22 or later
- npm

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/djgab16/kiro-web-kiroweb.git
   cd kiro-web-kiroweb
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Commit Conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/). Every commit message must follow this format:

```
type(scope): description
```

### Commit Types

| Type       | Description                                       |
| ---------- | ------------------------------------------------- |
| `feat`     | A new feature                                     |
| `fix`      | A bug fix                                         |
| `docs`     | Documentation only changes                        |
| `style`    | Changes that do not affect the meaning of code    |
| `refactor` | A code change that neither fixes a bug nor adds a feature |
| `test`     | Adding or correcting tests                        |
| `chore`    | Changes to build process or auxiliary tools       |
| `perf`     | A code change that improves performance           |
| `ci`       | Changes to CI configuration files and scripts     |
| `build`    | Changes that affect the build system or external dependencies |

### Examples

```
feat: add user authentication page
fix: resolve hydration mismatch on features page
docs: update README with new scripts
test: add unit tests for animation utilities
ci: add test job to workflow
```

## Branching Strategy

- `main` is the production branch and should always be in a deployable state.
- Create feature branches from `main` using the naming convention: `type/short-description` (e.g., `feat/add-auth-page`, `fix/nav-styling`).
- Keep branches focused on a single change.
- Rebase on `main` before merging to keep a clean history.

## Code Quality Requirements

Before submitting a contribution, ensure all checks pass locally:

```bash
# TypeScript type checking
npm run type-check

# Linting
npm run lint

# Code formatting check
npm run format:check

# Run tests
npm run test

# Production build
npm run build
```

### Formatting

This project uses Prettier for code formatting. To auto-format your code:

```bash
npm run format
```

### Linting

ESLint is configured with Next.js recommended rules. Fix lint issues before committing:

```bash
npm run lint
```

## Submitting Contributions

1. Create a feature branch from `main`.
2. Make your changes following the project conventions.
3. Ensure all code quality checks pass (see above).
4. Commit your changes using Conventional Commits.
5. Push your branch and open a Pull Request against `main`.
6. Provide a clear description of your changes in the PR.
7. Address any review feedback.

## Project Structure

```
app/              - Application routes and pages (Next.js App Router)
app/components/   - Shared React components
app/lib/          - Utility functions and constants
docs/             - Project documentation
public/           - Static assets
```

## Tech Stack

- **Next.js 16** with App Router
- **React 19** for UI
- **TypeScript 5** for type safety
- **Tailwind CSS v4** for styling (utility-first, responsive)
- **Framer Motion** for animations
- **Lucide React** for icons
- **Vitest** for testing
