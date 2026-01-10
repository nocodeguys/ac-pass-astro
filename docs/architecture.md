# Architecture Documentation

## Project Overview

Mainline is a modern Astro 5 template that combines static site generation with React components, built for performance and developer experience.

## Technology Stack

### Core Framework
- **Astro 5**: Static site generator with islands architecture
- **React 19**: UI framework for interactive components
- **TypeScript**: Full type safety across the codebase

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS with Vite plugin
- **shadcn/ui**: Comprehensive component library
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets

### Content & Data
- **MDX**: Enhanced Markdown with React components
- **Zod**: Schema validation for content collections
- **RSS**: Automated feed generation

### Development Tools
- **ESLint**: Code linting with Astro-specific rules
- **Prettier**: Code formatting
- **Vite**: Build tooling and dev server

## Directory Structure

```
src/
├── components/
│   ├── blocks/              # Page-level components
│   │   ├── hero.tsx         # Homepage hero section
│   │   ├── navbar.tsx       # Navigation component
│   │   ├── footer.tsx       # Footer component
│   │   ├── features.tsx     # Features showcase
│   │   ├── pricing.tsx      # Pricing section
│   │   ├── testimonials.tsx # Customer testimonials
│   │   ├── faq.tsx         # FAQ accordion
│   │   └── ...             # Other page blocks
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx      # Button variants
│       ├── card.tsx        # Card components
│       ├── dialog.tsx      # Modal dialogs
│       └── ...             # Complete UI library
├── content/
│   ├── config.ts           # Content collections config
│   └── blog/               # Blog posts (MD/MDX)
├── hooks/
│   └── use-mobile.ts       # Mobile detection hook
├── layouts/
│   ├── DefaultLayout.astro # Main page layout
│   └── BasicLayout.astro   # Minimal layout
├── lib/
│   └── utils.ts            # Utility functions
├── pages/                  # File-based routing
│   ├── index.astro         # Homepage
│   ├── about.astro         # About page
│   ├── pricing.astro       # Pricing page
│   ├── blog/               # Blog routes
│   └── ...                 # Other pages
└── styles/
    └── global.css          # Global styles
```

## Component Architecture

### Page Composition Pattern
Pages are composed using reusable block components:

```typescript
// Example: Homepage composition
<DefaultLayout>
  <Background>
    <Hero />
    <Logos />
    <Features />
    <ResourceAllocation />
  </Background>
  <Testimonials />
  <Background variant="bottom">
    <Pricing />
    <FAQ />
  </Background>
</DefaultLayout>
```

### Component Types

1. **Blocks** (`src/components/blocks/`)
   - Page-level components
   - Complete sections (hero, pricing, etc.)
   - Self-contained with their own data

2. **UI Components** (`src/components/ui/`)
   - shadcn/ui component library
   - Reusable primitives (buttons, cards, etc.)
   - Design system consistency

3. **Layouts** (`src/layouts/`)
   - Astro layout components
   - HTML structure and metadata
   - Common page elements

### Hydration Strategy
Uses Astro's islands architecture:
- Static by default
- Interactive components hydrated with `client:*` directives
- Minimal JavaScript bundle size

## Content Management

### Blog System
- Content collections with Zod schema validation
- Support for both Markdown and MDX
- Frontmatter schema:
  ```typescript
  {
    title: string
    description: string
    pubDate: Date
    updatedDate?: Date
    image?: string
    authorImage?: string
    authorName?: string
  }
  ```

### Static Assets
- Images in `/public/` directory
- Optimized loading and responsive images
- WebP format for performance

## Styling System

### Tailwind Configuration
- Tailwind CSS 4 with Vite plugin
- Custom design tokens via shadcn/ui
- Dark/light theme support via `astro-themes`

### Component Styling
- Utility-first approach with Tailwind
- Component variants using `class-variance-authority`
- Consistent spacing and typography scales

## Build & Deployment

### Build Process
- Static site generation (SSG)
- Optimized for Vercel deployment
- Automated sitemap and RSS generation

### Performance Features
- Minimal JavaScript bundle
- Optimized images and assets
- Fast initial page load
- SEO-optimized output

## Development Workflow

### Code Quality
- ESLint with import ordering rules
- Prettier formatting
- TypeScript strict mode
- Git hooks for code quality

### Testing Strategy
- Component-driven development
- Static analysis via TypeScript
- Visual testing with Figma integration

## Key Design Decisions

1. **Static-First**: Prioritizes static generation for performance
2. **Component Composition**: Modular block-based architecture
3. **Type Safety**: Full TypeScript coverage
4. **Design System**: Consistent UI through shadcn/ui
5. **Content Collections**: Structured content with validation
6. **Islands Architecture**: Minimal client-side JavaScript