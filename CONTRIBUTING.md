# Contributing to Kiro Hub

Thank you for your interest in contributing to Kiro Hub! This guide will help you get started.

## Prerequisites

- **Node.js 22** or later (see `.nvmrc`)
- **npm** (comes with Node.js)
- **Git**

## Setup

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

## Coding Standards

### TypeScript

- Use strict TypeScript for all source files.
- Export explicit types and interfaces for shared data structures.
- Avoid `any` - prefer `unknown` or proper typing.

### Tailwind CSS

- Use responsive utility classes with the mobile-first breakpoint pattern (`sm:`, `md:`, `lg:`).
- Use the project's design tokens (defined in `app/globals.css`) for colors: `text-foreground`, `text-muted`, `bg-surface`, `border-border`, `text-accent`, etc.
- Prefer semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<main>`) for all layout.

### Components

- Page routes live in `app/<route>/page.tsx` as server components that export `metadata`.
- Interactive UI lives in `app/components/<Name>Content.tsx` as client components (`"use client"`).
- Shared data and utilities live in `app/lib/`.
- Use `framer-motion` for animations in client components.
- Use `lucide-react` for icons.

### Commit Messages

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): short description
```

Common types:

| Type       | Purpose                                 |
| ---------- | --------------------------------------- |
| `feat`     | A new feature                           |
| `fix`      | A bug fix                               |
| `docs`     | Documentation only changes              |
| `style`    | Formatting, missing semicolons, etc.    |
| `refactor` | Code change with no feature or fix      |
| `test`     | Adding or updating tests                |
| `chore`    | Build process or auxiliary tool changes |
| `perf`     | Performance improvement                 |

## Pull Request Guidelines

1. Create a feature branch from `main`:

   ```bash
   git checkout -b feat/my-feature
   ```

2. Make your changes and verify they pass all checks:

   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

3. Write a clear PR description explaining the change and its motivation.

4. Keep PRs focused - one logical change per pull request.

5. Ensure the build passes before requesting review.

## Useful Commands

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `npm run dev`         | Start the development server         |
| `npm run build`       | Create a production build            |
| `npm run lint`        | Run ESLint                           |
| `npm run type-check`  | Run TypeScript type checking         |
| `npm run format`      | Format all files with Prettier       |
| `npm run format:check`| Check formatting without changes     |
