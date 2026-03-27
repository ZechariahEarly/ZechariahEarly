# PRD: zechariahearly.com — Personal Portfolio & Blog

## Overview

A personal portfolio site for **Zechariah Early**, a Senior Software Engineer at Capital One with experience at JPMorgan Chase and Citi, currently pursuing an MSCS (AI) at Georgia Tech. The site should function as a digital resume that feels alive — not a static PDF dump. It should communicate technical credibility while feeling approachable and personable.

**Live URL:** https://www.zechariahearly.com  
**Hosting:** Vercel  
**Domain:** Already owned (zechariahearly.com)

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Astro** (latest stable) | Fast static site, partial hydration, great DX |
| Styling | **Tailwind CSS v4** | Utility-first, pairs well with Astro |
| Blog content | **MDX** via `@astrojs/mdx` | Write posts in repo, commit-to-deploy |
| Animations | **CSS transitions + minimal JS** | No heavy animation libs; terminal aesthetic calls for subtle effects |
| Deployment | **Vercel** via `@astrojs/vercel` adapter | Zero-config Astro deploys |
| Package manager | **pnpm** | Fast, strict |

### Key Dependencies
- `astro` (latest)
- `@astrojs/mdx`
- `@astrojs/tailwind`
- `@astrojs/vercel`
- `@astrojs/sitemap`
- `sharp` (image optimization)

---

## Design System

### Visual Identity: "Dark Terminal"

The site should feel like a well-designed terminal / hacker workspace — not a gimmick, but a genuine reflection of an engineer's environment.

#### Color Palette

```
--bg-primary:      #0a0a0a    (near-black background)
--bg-secondary:    #111111    (card/section backgrounds)
--bg-tertiary:     #1a1a1a    (hover states, subtle elevation)
--text-primary:    #e0e0e0    (main body text)
--text-secondary:  #888888    (muted/supporting text)
--accent-green:    #00ff88    (primary accent — terminal green)
--accent-blue:     #00b4d8    (secondary accent — links, interactive)
--accent-orange:   #ff6b35    (tertiary — warnings, highlights)
--border:          #222222    (subtle borders)
--code-bg:         #0d1117    (code block backgrounds)
```

#### Typography

- **Headings:** `JetBrains Mono` (monospace, loaded via Google Fonts)
- **Body:** `Inter` (clean sans-serif, loaded via Google Fonts)
- **Code / terminal elements:** `JetBrains Mono`
- Base font size: 16px, line-height 1.6 for body

#### Recurring Visual Motifs

- **Cursor blink** — a blinking `_` or `▌` cursor after the hero tagline
- **Terminal prompt** — section headers prefixed with `~/` or `$` where it feels natural (don't overdo it)
- **Monospace labels** — metadata, dates, and tags in monospace
- **Subtle scan-line or noise texture** — very faint, on the background (CSS only, no images)
- **Green accent glow** — subtle `box-shadow` or `text-shadow` using the accent green on hover states
- **Dotted grid or subtle graph paper** — faint background pattern via CSS

#### Motion & Interaction

- Fade-in-up on scroll for sections (use `IntersectionObserver`, no library)
- Hover glow on cards and links
- Smooth underline animations on navigation links
- No page transitions needed (Astro MPA is fine)
- Keep all animations under 300ms, ease-out timing

---

## Pages & Components

### 1. Home / Index Page (`/`)

The landing page. Not a resume — a personal intro.

#### Hero Section
- Large heading: `Zechariah Early` in monospace
- Animated tagline with typing/cursor effect: something like `> building systems that scale_` (the underscore blinks)
- One-liner bio below: "Senior Software Engineer. Georgia Tech MSCS. Building at the intersection of distributed systems, ML, and financial infrastructure."
- Two CTA buttons: `[View Projects]` → scrolls to projects section, `[Read Blog]` → `/blog`
- Subtle background element — a faint animated grid, constellation dots, or matrix-rain (keep it tasteful and performant, CSS/canvas only)

#### About Section
- 2-3 short paragraphs, first-person, conversational tone. NOT resume bullets.
- Talk about: what drives you, what you're working on now (GlowLocal, Georgia Tech), your trajectory from Citi → JPMorgan → Capital One
- Include a professional photo if available (placeholder div if not — `aspect-square w-48 rounded-lg bg-bg-secondary` with initials "ZE")

#### Experience Section (Logo Parade)
- **No bullet points.** This is a visual section.
- Row of company logos: **Capital One**, **JPMorgan Chase**, **Citi**
- Each logo card shows:
  - Company logo (use placeholder SVG rectangles with company name text if real logos aren't available — DO NOT hotlink logos from company CDNs)
  - Role title
  - Date range
  - One short sentence (not a bullet) describing the domain: e.g., "Loan decisioning systems & streaming infrastructure" for Capital One
- On hover, the card gets the green glow treatment

#### Education Section
- Same logo-card treatment
- **Georgia Tech** — MSCS, AI specialization, 2026–2028 (in progress)
- **UT Dallas** — BS Computer Science, 2018–2021
- AWS Solutions Architect certification badge/mention

#### Tech Stack Section
- Visual grid of tech icons/labels grouped by category:
  - **Languages:** Python, Java, SQL, Terraform, GraphQL, Bash
  - **Cloud:** AWS, Kubernetes, Docker, Kafka, Airflow
  - **Backend:** Spring Boot, FastAPI, gRPC, REST
  - **Data/ML:** XGBoost, Scikit-learn, Pandas
  - **Databases:** PostgreSQL, Oracle, MongoDB, Redis, DynamoDB, Snowflake
- Use small pill/badge components with monospace text
- Subtle hover animation (glow or slight scale)

### 2. Projects / Demo Page (`/projects`)

Showcase page for projects with **live interactive snippets**.

#### Project Cards
Each project gets a card with:
- Project name + one-line description
- Tech stack pills
- Links: GitHub repo, live site (if applicable)
- **"Demo" section** — an embedded interactive snippet or visual

#### Required Projects

**GlowLocal**
- Description: "Direct mail marketing SaaS for med spas. Automated print-and-mail fulfillment with demographic-targeted mailing lists."
- Tech: Python, Next.js, Lob API
- Demo snippet: Show a mock postcard preview (styled card component showing front/back of a 6x9 postcard with placeholder spa branding, QR code placeholder, and merge variable indicators like `{{spa_name}}`)
- Link: glowlocal.co

**SwiftBits**
- Description: "CLI tool for document embedding and semantic retrieval. Local-first architecture exposed as an MCP server for AI assistant context augmentation."
- Tech: Python, ChromaDB, Click, MCP Server
- Demo snippet: Simulated terminal component showing a command like `$ swiftbits embed ./docs --collection notes` with animated terminal output showing chunking/embedding progress
- Link: GitHub repo

> **Note for Claude Code:** Each demo snippet should be a self-contained Astro component (`<ProjectDemo client:visible />`). They should be visually interesting but not require external APIs or real backends. Mock data and simulated interactions are fine.

#### Future-Proofing
- The project list should be defined in a `src/data/projects.ts` file as an array of objects so new projects can be added easily
- Each project entry should support an optional `demoComponent` field that references an Astro component

### 3. Blog Page (`/blog`)

A list page of all blog posts, sorted by date (newest first).

#### Blog Index (`/blog`)
- Page title: something like `$ cat ~/blog/*` or just "Blog"
- List of post cards showing:
  - Title
  - Date (monospace, formatted as `YYYY-MM-DD`)
  - Description/excerpt (from frontmatter)
  - Tags as pills
  - Estimated read time
- Filter by tag (client-side, simple JS)

#### Blog Post Layout (`/blog/[slug]`)
- Clean reading experience
- Post title, date, tags, read time at top
- MDX content area with styled prose (use Tailwind `@tailwindcss/typography` with dark mode overrides)
- Code blocks with syntax highlighting (use Astro's built-in Shiki, theme: `github-dark` or `one-dark-pro`)
- Table of contents sidebar on desktop (generated from headings)
- "Share on LinkedIn" button at bottom — generates a LinkedIn share URL with the post title and URL pre-filled
- Previous/Next post navigation at bottom

#### MDX Setup
Blog posts live in `src/content/blog/` as `.mdx` files. Frontmatter schema:

```yaml
---
title: "Post Title"
description: "Brief description for cards and SEO"
date: 2026-03-26
tags: ["astro", "web-dev"]
draft: false
---
```

Use Astro Content Collections with a Zod schema for type safety.

#### Starter Post
Include one starter blog post: `hello-world.mdx` — a short "Welcome to my blog" post that Zech can replace. It should demonstrate MDX features: a code block, a callout/aside component, and an inline component.

### 4. Layout & Navigation

#### Header / Nav
- Logo or name: "ZE" monogram or "zechariahearly" in monospace
- Nav links: Home, Projects, Blog
- Mobile: hamburger menu with slide-in drawer
- Nav should have a subtle backdrop blur when scrolling over content
- Active page indicator (green underline or dot)

#### Footer
- Social links: LinkedIn, GitHub, Email (use icons — Lucide or simple SVGs)
- "Built with Astro" or similar subtle credit
- Copyright line

---

## SEO & Meta

- Each page needs unique `<title>` and `<meta name="description">`
- Open Graph tags for LinkedIn sharing (especially blog posts):
  - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- Generate OG images automatically if possible (or use a default branded OG image)
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` allowing all
- Canonical URLs

---

## Project Structure

```
zechariahearly.com/
├── public/
│   ├── favicon.svg
│   ├── og-default.png          # Default OG image
│   └── images/
│       ├── headshot.jpg         # Placeholder or real photo
│       └── logos/               # Company/school logo placeholders
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ExperienceCard.astro
│   │   ├── EducationCard.astro
│   │   ├── TechGrid.astro
│   │   ├── ProjectCard.astro
│   │   ├── BlogPostCard.astro
│   │   ├── TableOfContents.astro
│   │   ├── TagFilter.astro       # Client-side tag filtering
│   │   ├── ShareButton.astro
│   │   └── demos/
│   │       ├── GlowLocalDemo.astro
│   │       └── SwiftBitsDemo.astro
│   ├── content/
│   │   └── blog/
│   │       └── hello-world.mdx
│   ├── data/
│   │   ├── experience.ts
│   │   ├── education.ts
│   │   ├── projects.ts
│   │   └── techStack.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML shell, meta, fonts
│   │   ├── PageLayout.astro      # Standard page with header/footer
│   │   └── BlogPostLayout.astro  # Blog post with TOC, share, nav
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css            # Tailwind imports + custom properties
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## Deployment & Configuration

### Vercel
- Use `@astrojs/vercel` adapter with `output: 'static'` (fully static, no SSR needed)
- Add `vercel.json` if custom headers or redirects are needed
- Domain: point `zechariahearly.com` and `www.zechariahearly.com` to Vercel

### Environment
- No environment variables needed for v1 (no CMS, no APIs)
- If OG image generation is added later, may need a serverless function

---

## Content Guidelines (for Zech to fill in)

These are placeholders Claude Code should create with realistic placeholder text. Zech will replace with real content.

1. **About section copy** — 2-3 paragraphs, first person. Placeholder should capture the tone: engineer who builds at scale, interested in ML/quant, building a startup on the side.
2. **Headshot** — placeholder div with initials. Zech will add `headshot.jpg` to `/public/images/`.
3. **Company logos** — use styled placeholder divs with company names. Zech can swap in real SVGs later.
4. **Project descriptions** — use the descriptions from the resume + GlowLocal/SwiftBits context.

---

## Non-Goals (v1)

- No CMS integration
- No comments on blog posts
- No analytics (can add Vercel Analytics later)
- No dark/light mode toggle (dark only)
- No contact form (email link is sufficient)
- No i18n
- No search (site is small enough to browse)

---

## Acceptance Criteria

- [ ] Site builds with `pnpm build` with zero errors
- [ ] All three pages render correctly: `/`, `/projects`, `/blog`
- [ ] Blog post at `/blog/hello-world` renders MDX with syntax-highlighted code blocks
- [ ] Mobile responsive (test at 375px, 768px, 1024px, 1440px)
- [ ] Lighthouse score ≥ 90 on all four categories (Performance, Accessibility, Best Practices, SEO)
- [ ] All external links open in new tab with `rel="noopener noreferrer"`
- [ ] LinkedIn share button generates correct share URL
- [ ] Tag filtering works on blog index
- [ ] Scroll animations fire correctly
- [ ] No horizontal scroll on any viewport
- [ ] Favicon renders
- [ ] OG tags present on all pages
- [ ] `sitemap.xml` generates at `/sitemap.xml`
