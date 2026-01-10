# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mainline is an Astro 5 template built with shadcn/ui, Tailwind CSS 4, and React 19. This is a modern static site generator project with a comprehensive UI component library and TypeScript support.

## Development Commands

```bash
# Install dependencies
npm install

# Development server (runs on http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code and auto-fix issues
npm run lint

# Format code with Prettier
npm run format
```

## Architecture

### Core Technology Stack
- **Astro 5**: Static site generator with React integration
- **React 19**: UI framework for interactive components
- **TypeScript**: Full TypeScript support across the codebase
- **Tailwind CSS 4**: Utility-first CSS framework with Vite plugin
- **shadcn/ui**: Comprehensive UI component library

### Directory Structure
```
src/
├── components/
│   ├── blocks/          # Page-level components (hero, navbar, footer, etc.)
│   └── ui/              # shadcn/ui components (button, card, dialog, etc.)
├── content/
│   └── blog/            # Blog posts (Markdown/MDX)
├── hooks/               # React custom hooks
├── layouts/             # Astro layout components
├── lib/                 # Utility functions
├── pages/               # Astro pages and routing
└── styles/              # Global CSS styles
```

### Component Architecture
- **Blocks**: Page-level components in `src/components/blocks/` (e.g., hero, pricing, testimonials)
- **UI Components**: shadcn/ui components in `src/components/ui/` 
- **Layouts**: Astro layout components for page structure
- **Content**: Blog collection with schema validation using Zod

### Key Configuration Files
- `astro.config.mjs`: Astro configuration with MDX, sitemap, and React integrations
- `eslint.config.mjs`: ESLint configuration with import ordering and Astro-specific rules
- `src/content.config.ts`: Content collection schemas for blog posts
- `package.json`: Dependencies and scripts

### Content Management
- Blog posts are managed through Astro's content collections
- Uses schema validation for frontmatter (title, description, dates, images, author info)
- Supports both Markdown (.md) and MDX (.mdx) files

### Styling Approach
- Tailwind CSS 4 with Vite plugin integration
- shadcn/ui component system with consistent design tokens
- Dark/light theme support via `astro-themes`
- Utility classes and component-based styling

### Important Notes
- ESLint ignores `src/components/ui/**` directory (shadcn/ui components)
- Import ordering is enforced: React first, then external deps, then internal imports
- Static output configuration for deployment