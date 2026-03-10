# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

eDrive — a marketing/branding website for a luxury JetCar manufacturer based in the UAE. Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion.

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `npm run lint` — ESLint (next/core-web-vitals + next/typescript)
- `npm start` — serve production build

## Architecture

**App Router structure** — all pages live under `app/` using Next.js file-based routing. No `src/` directory.

**Component organization** (`app/components/`):
- `layout/` — persistent chrome: Header, Footer, Menu (fullscreen overlay), SocialSidebar
- `sections/` — homepage sections: HeroSection, ConfiguratorPreview, ModelsShowcase, NewsSection, etc.
- `ui/` — reusable primitives: Button, FeatureCard, FormField, NewsCard, SectionHeader

**Pages** — `app/page.tsx` composes the homepage from layout + section components. Subpages (models, news, careers, company, etc.) each have their own route directory with `page.tsx`.

**Path alias** — `@/*` maps to project root (configured in tsconfig.json).

## Design System

Defined in `app/globals.css` with CSS custom properties extracted from Figma. Key points:

- **Brand color**: Tiffany (`#81D8D0`) — primary accent throughout the site
- **Dark theme**: black (`#0B0B0B`) background, white foreground
- **Fonts**: Nunito Sans (headings/body), Ubuntu (nav), Inter (forms), Roboto (display). Loaded via `next/font/google` in `app/layout.tsx` as CSS variables (`--font-nunito`, `--font-ubuntu`, `--font-inter`, `--font-roboto`).
- **Tailwind v4**: Colors/fonts/easings registered via `@theme inline` block in globals.css — use Tailwind classes like `bg-tiffany`, `text-tiffany`, `font-nav`, etc.
- **Typography classes**: Use the utility classes from globals.css (`.text-hero`, `.text-h1`, `.text-h2`, `.text-h3`, `.text-nav`, `.text-subline`, `.text-cta`, etc.) rather than ad-hoc font sizing.
- **Button variants**: Use the `Button` component (`app/components/ui/Button.tsx`) with `variant` prop (`primary` | `dark` | `outline` | `ghost`).
- **Custom easings**: `--ease-out-expo`, `--ease-out-quart`, `--ease-smooth` available as Tailwind utilities.

## Key Conventions

- All interactive components use `'use client'` directive — server components are the default.
- Animations use Framer Motion (`motion`, `useScroll`, `useTransform`, `AnimatePresence`).
- Inline SVGs are used for icons rather than an icon library.
- Images are served from `public/` (including `public/images/` and `public/hero section/`). Large videos are gitignored.
- No test framework is currently configured.
- No API routes — this is a static marketing site.
