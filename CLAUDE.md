# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:4321)
pnpm build      # Production build → dist/
pnpm preview    # Preview production build locally
```

No linter or test runner is configured.

## Architecture

Astro 6 static site (personal portfolio + MDX blog) deployed on Vercel. Three pages: Home (`/`), Projects (`/projects`), Blog (`/blog` + `/blog/[slug]`).

### Tailwind v4 Setup

Uses `@tailwindcss/vite` plugin — **not** the deprecated `@astrojs/tailwind` integration. There is no `tailwind.config.mjs`. All design tokens (colors, fonts) are defined via `@theme` in `src/styles/global.css`. The typography plugin is loaded via `@plugin "@tailwindcss/typography"` in CSS.

### Content Layer (Blog)

Config lives at `src/content.config.ts` (not `src/content/config.ts`). Uses Astro's Content Layer API with `glob()` loader from `astro/loaders`. Blog posts are `.mdx` files in `src/content/blog/`. Frontmatter schema: `title`, `description`, `date`, `tags`, `draft`.

### Layout Hierarchy

`BaseLayout` (HTML shell, meta/OG tags, fonts, IntersectionObserver script) → `PageLayout` (adds Header + Footer) for standard pages. Blog posts use `BlogPostLayout` which wraps `BaseLayout` directly with a two-column layout (content + sticky TOC sidebar).

### Data-Driven Sections

Experience, education, tech stack, and projects are defined in `src/data/*.ts` and rendered by corresponding components. To add/edit entries, modify the data files — the pages consume them automatically.

### Key Patterns

- Scroll animations: elements with class `fade-in-up` are animated by an IntersectionObserver in `BaseLayout`
- Blog tag filtering: client-side via `data-tags` attributes on `BlogPostCard` elements, toggled by `TagFilter` component
- Read time: `Math.ceil(body.split(/\s+/).length / 200)` — computed in both blog index and slug pages
- Interactive demos: `src/components/demos/` contains project-specific demo components rendered conditionally in the Projects page by `project.id`
