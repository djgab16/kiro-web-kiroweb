# Kiro Hub

A community educational platform for learning about Kiro AI-powered development. Kiro Hub provides tutorials, resources, and community features to help developers integrate AI into their workflows.

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - UI library
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library

## Getting Started

### Prerequisites

- Node.js 22 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Run TypeScript type checking without emitting files |
| `npm run format` | Format all files with Prettier |
| `npm run format:check` | Check formatting without making changes |

## Project Structure

```
app/              - Application routes and pages (Next.js App Router)
app/components/   - Shared React components
app/lib/          - Utilities, constants, and shared types
docs/             - Project documentation
public/           - Static assets
```

## Image Optimization

This project currently uses only inline SVGs and vector assets. When adding raster images (PNG, JPG, WebP) in the future, follow these best practices:

- Use the `next/image` component instead of a raw `<img>` tag. It provides automatic lazy loading, responsive sizing, and format optimization.
- `next/image` sets `loading="lazy"` by default for off-screen images. Only override with `loading="eager"` for above-the-fold hero images or LCP elements.
- Provide explicit `width` and `height` props (or use `fill` with a sized parent) to prevent layout shift (CLS).
- Prefer modern formats (WebP, AVIF) for smaller file sizes. Next.js can serve optimized formats automatically when using the built-in image loader.
- Store large assets in `public/images/` and reference them with a leading `/images/` path.

## Contributing

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. Please follow this format when contributing:

```
type(scope): description
```

Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
