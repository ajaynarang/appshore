# AppShore LLP Landing Page Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-skin and restructure `app/page.tsx` as a monochrome editorial masthead + 4 product chapters + colophon, matching the Sally aesthetic (b&w, restrained motion).

**Architecture:** Single-page rewrite. The four products live in a const array at the top of `app/page.tsx`. Three local components (`SectionMasthead`, `SectionChapter`, `SectionColophon`) compose the page. One new module `components/product-mark.tsx` holds four inline-SVG marks. Theme tokens in `app/globals.css` are remapped from the warm-brown palette to grayscale so existing `components/ui/*` primitives keep working without edits.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind v4, Framer Motion 12, `react-intersection-observer`, Geist Sans/Mono (already loaded in `app/layout.tsx`).

**Spec:** `docs/superpowers/specs/2026-05-03-appshore-llp-redesign-design.md`

**Verification model:** This project has no test runner (no jest/vitest/playwright in `package.json`). Each task ends with three gates:
1. `npm run lint` — no new errors versus `main`.
2. Dev-server smoke check at three viewports: **375px, 768px, 1440px** in **both light and dark mode**.
3. Explicit "what you should see" checklist per task.

**Working directory:** `/Users/ajay-admin/code/appshore` (run all commands from here unless stated).

---

## Task 1: Remap theme tokens in `app/globals.css` to grayscale

**Files:**
- Modify: `app/globals.css` (lines 53–152, the `:root` and `.dark` blocks)

The existing CSS uses warm brown values for `--background`, `--foreground`, `--primary`, etc. We replace those with grayscale per spec §4.1, keeping every token *name* so `components/ui/*` and the existing `Navigation`, `about/page.tsx`, and `contact/page.tsx` continue to compile and render coherently. Sidebar and chart tokens are remapped to neutral grays (they aren't used on this page but must continue to compile). `--destructive` is preserved as-is (form components still use red).

- [ ] **Step 1: Open and read `app/globals.css`**

Read the full file. Note the structure: `:root` block (lines 53–101), `.dark` block (lines 104–151), and an `@layer base` + `@layer utilities` block at the bottom (lines 154–186) which we will NOT change in this task.

- [ ] **Step 2: Replace the `:root` block**

Replace the contents of `:root` (lines 53–101) with the grayscale values below. Keep `--radius: 0.625rem` as-is. Keep the `--destructive` and `--chart-*` values intact unless explicitly listed.

```css
:root {
  --radius: 0.625rem;

  /* AppShore monochrome — Light mode */
  --background: 255 255 255;
  --surface: 255 255 255;
  --surface-secondary: 245 245 245;
  --foreground: 23 23 23;
  --text-secondary: 64 64 64;
  --text-tertiary: 115 115 115;

  /* Primary = near-black */
  --primary: 23 23 23;
  --primary-dark: 23 23 23;
  --primary-light: 64 64 64;
  --primary-foreground: 250 250 250;

  /* UI elements */
  --card: 255 255 255;
  --card-foreground: 23 23 23;
  --popover: 255 255 255;
  --popover-foreground: 23 23 23;
  --secondary: 245 245 245;
  --secondary-foreground: 23 23 23;
  --muted: 245 245 245;
  --muted-foreground: 115 115 115;
  --accent: 245 245 245;
  --accent-foreground: 23 23 23;
  --destructive: oklch(0.577 0.245 27.325);
  --border: 229 229 229;
  --input: 229 229 229;
  --ring: 23 23 23;
  --divider: 229 229 229;

  /* Charts (kept as-is, unused on this page) */
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);

  /* Sidebar (remapped to neutrals) */
  --sidebar: 255 255 255;
  --sidebar-foreground: 23 23 23;
  --sidebar-primary: 23 23 23;
  --sidebar-primary-foreground: 250 250 250;
  --sidebar-accent: 245 245 245;
  --sidebar-accent-foreground: 23 23 23;
  --sidebar-border: 229 229 229;
  --sidebar-ring: 23 23 23;
}
```

- [ ] **Step 3: Replace the `.dark` block**

Replace the contents of `.dark` (lines 104–151) with:

```css
.dark {
  /* AppShore monochrome — Dark mode */
  --background: 23 23 23;
  --surface: 38 38 38;
  --surface-secondary: 38 38 38;
  --foreground: 250 250 250;
  --text-secondary: 212 212 212;
  --text-tertiary: 163 163 163;

  /* Primary = white (inverted) */
  --primary: 250 250 250;
  --primary-dark: 250 250 250;
  --primary-light: 163 163 163;
  --primary-foreground: 23 23 23;

  /* UI elements */
  --card: 38 38 38;
  --card-foreground: 250 250 250;
  --popover: 38 38 38;
  --popover-foreground: 250 250 250;
  --secondary: 38 38 38;
  --secondary-foreground: 250 250 250;
  --muted: 38 38 38;
  --muted-foreground: 163 163 163;
  --accent: 38 38 38;
  --accent-foreground: 250 250 250;
  --destructive: oklch(0.704 0.191 22.216);
  --border: 64 64 64;
  --input: 64 64 64;
  --ring: 250 250 250;
  --divider: 64 64 64;

  /* Charts (kept as-is) */
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);

  /* Sidebar (remapped to neutrals) */
  --sidebar: 38 38 38;
  --sidebar-foreground: 250 250 250;
  --sidebar-primary: 250 250 250;
  --sidebar-primary-foreground: 23 23 23;
  --sidebar-accent: 38 38 38;
  --sidebar-accent-foreground: 250 250 250;
  --sidebar-border: 64 64 64;
  --sidebar-ring: 250 250 250;
}
```

- [ ] **Step 4: Add the `prefers-reduced-motion` block**

Append this rule to the bottom of `app/globals.css` (after the existing `@layer utilities` block):

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

- [ ] **Step 5: Run lint**

Run: `npm run lint`
Expected: passes with no new errors. (Pre-existing warnings in `about/page.tsx` and `contact/page.tsx` are out of scope.)

- [ ] **Step 6: Visual verification**

Run: `npm run dev`
Open `http://localhost:3000` in a browser. The page is still the OLD page structure (we haven't rewritten `app/page.tsx` yet). Confirm:
- Background is white in light mode, near-black in dark mode.
- Text is dark gray in light, near-white in dark.
- Buttons that were "blue/purple gradient" are now black (light) or white (dark).
- Toggle theme; both modes render without color cast.
- Visit `/about` and `/contact` — they should also render in monochrome (with old layouts intact). No crashes.

- [ ] **Step 7: Commit**

```bash
git add app/globals.css
git commit -m "feat: remap theme tokens to grayscale for monochrome redesign

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 2: Create `components/product-mark.tsx` with four monochrome SVG marks

**Files:**
- Create: `components/product-mark.tsx`

A single module exporting `<ProductMark id="..." />`. Each mark is an inline SVG using `stroke="currentColor"` and `fill="none"` so it inherits the foreground color in both themes. All four marks share: 1.25px stroke, square aspect ratio, and a `viewBox="0 0 200 200"`. Each mark animates its primary path on first viewport entry via stroke-dashoffset transitioning from a large value to 0 over 1.4s.

- [ ] **Step 1: Create the file**

Create `components/product-mark.tsx` with this content:

```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export type ProductId = 'sally' | 'spec-nexus' | 'oops' | 'shelfy';

type Props = {
  id: ProductId;
  className?: string;
};

const SVG_COMMON =
  'w-full max-w-md aspect-square text-foreground';

export function ProductMark({ id, className = '' }: Props) {
  switch (id) {
    case 'sally':
      return <SallyMark className={`${SVG_COMMON} ${className}`} />;
    case 'spec-nexus':
      return <SpecNexusMark className={`${SVG_COMMON} ${className}`} />;
    case 'oops':
      return <OopsMark className={`${SVG_COMMON} ${className}`} />;
    case 'shelfy':
      return <ShelfyMark className={`${SVG_COMMON} ${className}`} />;
  }
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

function useDrawIn() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return { ref, inView };
}

/* ──────────────────────────────────────────────
   01 — Sally: a route line with branching nodes
   ────────────────────────────────────────────── */
function SallyMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();
  const pathLength = 600;
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Frame */}
      <rect x="8" y="8" width="184" height="184" stroke="currentColor" opacity="0.15" />

      {/* Main route */}
      <motion.path
        d="M 20 150 Q 60 150 80 110 T 140 70 Q 165 55 180 30"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: inView ? 0 : pathLength }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
      />

      {/* Branch nodes */}
      {[
        { cx: 60, cy: 150, r: 2.5, delay: 1.0 },
        { cx: 100, cy: 95, r: 2.5, delay: 1.2 },
        { cx: 140, cy: 70, r: 2.5, delay: 1.4 },
        { cx: 180, cy: 30, r: 3.5, delay: 1.6 },
      ].map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: n.delay, ease: EASE }}
        />
      ))}

      {/* Branch lines */}
      <motion.line
        x1="100" y1="95" x2="100" y2="60"
        strokeDasharray={50}
        initial={{ strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: inView ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        opacity="0.4"
      />
      <motion.line
        x1="60" y1="150" x2="60" y2="180"
        strokeDasharray={50}
        initial={{ strokeDashoffset: 50 }}
        animate={{ strokeDashoffset: inView ? 0 : 50 }}
        transition={{ duration: 0.6, delay: 1.5, ease: EASE }}
        opacity="0.4"
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   02 — Spec-Nexus: linked geometric blocks
   ────────────────────────────────────────────── */
function SpecNexusMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();

  const blocks = [
    { x: 30, y: 30, w: 50, h: 30, delay: 0.2 },
    { x: 120, y: 30, w: 50, h: 30, delay: 0.35 },
    { x: 30, y: 90, w: 50, h: 30, delay: 0.5 },
    { x: 120, y: 90, w: 50, h: 30, delay: 0.65 },
    { x: 75, y: 145, w: 50, h: 30, delay: 0.8 },
  ];

  const connectors = [
    { d: 'M 80 45 L 120 45', delay: 1.0 },
    { d: 'M 55 60 L 55 90', delay: 1.1 },
    { d: 'M 145 60 L 145 90', delay: 1.2 },
    { d: 'M 55 120 L 80 145', delay: 1.3 },
    { d: 'M 145 120 L 120 145', delay: 1.4 },
  ];

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="184" height="184" stroke="currentColor" opacity="0.15" />

      {blocks.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x} y={b.y} width={b.w} height={b.h}
          initial={{ opacity: 0, y: b.y - 8 }}
          animate={inView ? { opacity: 1, y: b.y } : { opacity: 0, y: b.y - 8 }}
          transition={{ duration: 0.5, delay: b.delay, ease: EASE }}
        />
      ))}

      {connectors.map((c, i) => (
        <motion.path
          key={i}
          d={c.d}
          strokeDasharray={60}
          initial={{ strokeDashoffset: 60 }}
          animate={{ strokeDashoffset: inView ? 0 : 60 }}
          transition={{ duration: 0.6, delay: c.delay, ease: EASE }}
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

/* ──────────────────────────────────────────────
   03 — Oops! I Learn: a path that loops then continues
   ────────────────────────────────────────────── */
function OopsMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();
  const pathLength = 700;
  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="184" height="184" stroke="currentColor" opacity="0.15" />

      {/* Path: forward, doubles back through loop, then forward again */}
      <motion.path
        d="M 20 100 L 70 100 Q 95 100 95 75 Q 95 50 75 50 Q 55 50 55 75 Q 55 100 80 110 L 130 110 Q 165 110 180 100"
        strokeDasharray={pathLength}
        initial={{ strokeDashoffset: pathLength }}
        animate={{ strokeDashoffset: inView ? 0 : pathLength }}
        transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
      />

      {/* Start dot */}
      <motion.circle
        cx="20" cy="100" r="3" fill="currentColor"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      />

      {/* End arrow */}
      <motion.path
        d="M 175 95 L 182 100 L 175 105"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3, delay: 1.7 }}
      />
    </svg>
  );
}

/* ──────────────────────────────────────────────
   04 — Shelfy: a bookshelf as barcode
   ────────────────────────────────────────────── */
function ShelfyMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();

  // Heights chosen to read like books on a shelf
  const books = [
    { x: 30, h: 110 }, { x: 42, h: 90 }, { x: 54, h: 105 },
    { x: 66, h: 80 },  { x: 78, h: 100 }, { x: 90, h: 115 },
    { x: 102, h: 85 }, { x: 114, h: 95 }, { x: 126, h: 110 },
    { x: 138, h: 75 }, { x: 150, h: 100 }, { x: 162, h: 90 },
  ];
  const shelfY = 150;

  return (
    <svg
      ref={ref}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="184" height="184" stroke="currentColor" opacity="0.15" />

      {books.map((b, i) => (
        <motion.rect
          key={i}
          x={b.x}
          y={shelfY - b.h}
          width="8"
          height={b.h}
          initial={{ opacity: 0, y: shelfY - b.h + 12 }}
          animate={
            inView
              ? { opacity: 1, y: shelfY - b.h }
              : { opacity: 0, y: shelfY - b.h + 12 }
          }
          transition={{ duration: 0.4, delay: 0.2 + i * 0.05, ease: EASE }}
        />
      ))}

      {/* Shelf line */}
      <motion.line
        x1="20" y1={shelfY} x2="180" y2={shelfY}
        strokeDasharray={160}
        initial={{ strokeDashoffset: 160 }}
        animate={{ strokeDashoffset: inView ? 0 : 160 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
      />
    </svg>
  );
}
```

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: passes. If TypeScript flags `useInView` ref typing, the existing project already uses this pattern in `app/page.tsx` and `app/about/page.tsx`, so no new typing work is needed.

- [ ] **Step 3: Commit**

```bash
git add components/product-mark.tsx
git commit -m "feat: add monochrome SVG marks for the four products

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 3: Rewrite `app/page.tsx` skeleton with `PRODUCTS` array and Navigation

**Files:**
- Modify: `app/page.tsx` (full rewrite)

This task replaces the old page with a minimal skeleton: imports, the `PRODUCTS` array, and a default export that renders only `<Navigation />` + an empty `<main>`. The next three tasks add the masthead, chapters, and colophon. Splitting it this way lets each section be verified in isolation.

- [ ] **Step 1: Replace `app/page.tsx` entirely**

Overwrite the file with:

```tsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { ProductMark, type ProductId } from '@/components/product-mark';

type Product = {
  id: ProductId;
  number: string;
  name: string;
  hint: string;
  tagline: string;
  body: string;
  url: string;
  visitLabel: string;
};

const PRODUCTS: Product[] = [
  {
    id: 'sally',
    number: '01',
    name: 'Sally',
    hint: 'Fleet AI',
    tagline: 'An operating system for trucking fleets.',
    body:
      'Most trucking software is a place to type things in. Sally is software that does the work. She dispatches drivers, plans routes that respect legal driving hours, reads rate confirmations, files invoices, and watches compliance — all from a conversation. The fleet runs; the owner supervises.',
    url: 'https://sally.appshore.in',
    visitLabel: 'sally.appshore.in',
  },
  {
    id: 'spec-nexus',
    number: '02',
    name: 'Spec-Nexus',
    hint: 'Governed AI development',
    tagline: 'Governance for AI-native software teams.',
    body:
      'AI can write code in seconds. Enterprises still need to know who approved what, and why. Spec-Nexus sits between product intent and implementation — turning specifications into executable contracts, with approval gates, role-based ownership, and a clean trace from requirement to code. The speed of AI, with the rigor enterprises require.',
    // TODO: replace with the real Spec-Nexus URL when available
    url: '#',
    visitLabel: 'spec-nexus',
  },
  {
    id: 'oops',
    number: '03',
    name: 'Oops! I Learn',
    hint: 'Adaptive learning, K–12',
    tagline: 'A tutor that adapts to the child, not the syllabus.',
    body:
      'Every child learns differently — but classroom teaching can’t. Oops! I Learn is an AI study companion for grades 1 through 12 that matches its personality and method to each subject and each student. Parents see real progress. Children earn rewards their parents control. Worksheets stay on paper; intelligence reads them anyway.',
    url: 'https://oopsilearn.appshore.in',
    visitLabel: 'oopsilearn.appshore.in',
  },
  {
    id: 'shelfy',
    number: '04',
    name: 'Shelfy',
    hint: 'Personal library intelligence',
    tagline: 'Your bookshelf, finally legible to software.',
    body:
      'Scan a barcode or a cover. Shelfy knows the book. Over time it learns your taste — what you’ve finished, what you’ve abandoned, what’s next on the shelf — and quietly recommends what’s worth your evening. A personal library, indexed and intelligent.',
    url: 'https://shelfy.appshore.in',
    visitLabel: 'shelfy.appshore.in',
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        {/* Masthead, chapters, and colophon land here in subsequent tasks */}
      </main>
    </>
  );
}
```

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: passes. (`motion`, `useInView`, `Link`, and other imports are unused but ESLint in this project does not error on unused imports — it only warns. If your config errors, prefix with underscores or remove temporarily; they are restored in subsequent tasks.)

If lint *errors* on unused imports, adjust step 1 to remove the unused imports for now:

```tsx
import { Navigation } from '@/components/navigation';
import type { ProductId } from '@/components/product-mark';
```

You will re-add the others in Tasks 4–6.

- [ ] **Step 3: Visual verification**

Run: `npm run dev`
Visit `http://localhost:3000`. Expected:
- Navigation bar at top, monochrome.
- Empty page below the nav.
- No console errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: reset landing page to skeleton with PRODUCTS array

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 4: Add the `SectionMasthead` component

**Files:**
- Modify: `app/page.tsx` (add `SectionMasthead` component, render it from `Home`)

The masthead is the first viewport: AppShore wordmark, thesis caption, four masthead rows (clickable links to `#sally`, `#spec-nexus`, `#oops`, `#shelfy`), and a scroll cue. Animations stagger in over ~2.2s.

- [ ] **Step 1: Add the `SectionMasthead` component to `app/page.tsx`**

Add this component definition *below* the `EASE` constant and *above* `export default function Home()`:

```tsx
function SectionMasthead() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-12">
      <div className="w-full max-w-6xl mx-auto">
        {/* Wordmark */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-center"
        >
          APPSHORE
        </motion.h1>

        {/* Thesis caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mt-12 text-center font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground"
        >
          Products by AppShore LLP.
        </motion.p>

        {/* Masthead rows */}
        <div className="mt-32 border-t border-border">
          {PRODUCTS.map((p, i) => (
            <motion.a
              key={p.id}
              href={`#${p.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.1 + i * 0.08,
                ease: EASE,
              }}
              className="group flex items-center gap-4 md:gap-8 py-5 md:py-6 border-b border-border hover:border-foreground transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground w-8 md:w-12 shrink-0">
                {p.number}
              </span>
              <div className="flex-1 min-w-0">
                <span className="block text-2xl md:text-4xl font-bold tracking-tight">
                  {p.name}
                </span>
                <span className="md:hidden mt-1 block font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                  {p.hint}
                </span>
              </div>
              <span className="hidden md:block font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.hint}
              </span>
              <span className="text-foreground transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                ↗
              </span>
            </motion.a>
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 4, 0] }}
          transition={{
            opacity: { duration: 1, delay: 1.7, ease: EASE },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2.7 },
          }}
          className="mt-16 text-center font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Render `SectionMasthead` from `Home`**

Replace the `<main>` body in the `Home` component with:

```tsx
      <main className="bg-background text-foreground">
        <SectionMasthead />
      </main>
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: passes.

- [ ] **Step 4: Visual verification**

Run: `npm run dev` (or refresh if already running).

Check **at 1440px (desktop)**:
- "APPSHORE" wordmark centered, large bold sans-serif.
- "PRODUCTS BY APPSHORE LLP." caption below in tracked-out mono.
- Four masthead rows separated by hairlines: `01 Sally ↗`, `02 Spec-Nexus ↗`, `03 Oops! I Learn ↗`, `04 Shelfy ↗`.
- Hover a row: hint text ("Fleet AI", etc.) fades in on the right; arrow shifts right by ~4px; bottom border darkens.
- "SCROLL ↓" caption at bottom; gently oscillating.
- Reveal animation runs in sequence (~2.2s total).

Check **at 375px (mobile)**:
- Wordmark slightly smaller.
- Each row is 2 lines: name on top, hint always visible below in muted text.
- Arrow stays on the right.

Check **dark mode** (toggle via nav):
- White text on near-black background; everything inverts cleanly.

Click each masthead row: nothing should happen yet (the chapter sections don't exist; the browser will jump to top of page or do nothing). That's expected at this stage.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add masthead section with wordmark, thesis, and product rows

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 5: Add the `SectionChapter` component and render four chapters

**Files:**
- Modify: `app/page.tsx` (add `SectionChapter`, render four chapters from `Home`)

Each chapter is a full-viewport section with a 12-column grid (text on one side, SVG on the other, alternating per chapter). On mobile (`< lg`), SVG sits above text in a single column. Animations fire on scroll-into-view, once.

- [ ] **Step 1: Add the `SectionChapter` component**

Add this below `SectionMasthead` and above `Home`:

```tsx
function SectionChapter({ product, index }: { product: Product; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const svgOnLeft = index % 2 === 0; // chapters 0 & 2 have SVG on the left (cols 1-5)
  const total = PRODUCTS.length;

  return (
    <section
      id={product.id}
      ref={ref}
      aria-labelledby={`${product.id}-name`}
      className="relative min-h-screen flex items-center px-6 lg:px-12 py-32 border-t border-border"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* SVG */}
        <div
          className={`flex justify-center ${
            svgOnLeft ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5 lg:col-start-8'
          } ${svgOnLeft ? 'lg:order-1' : 'lg:order-2'} order-1`}
        >
          <ProductMark id={product.id} />
        </div>

        {/* Text block */}
        <div
          className={`${
            svgOnLeft ? 'lg:col-span-6 lg:col-start-7' : 'lg:col-span-6 lg:col-start-1'
          } ${svgOnLeft ? 'lg:order-2' : 'lg:order-1'} order-2`}
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            {product.number} / {String(total).padStart(2, '0')}
          </motion.p>

          <motion.h2
            id={`${product.id}-name`}
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            animate={
              inView
                ? { opacity: 1, filter: 'blur(0px)' }
                : { opacity: 0, filter: 'blur(12px)' }
            }
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="mt-10 text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none"
          >
            {product.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mt-6 text-lg md:text-xl text-muted-foreground"
          >
            {product.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mt-12 text-base md:text-lg leading-relaxed max-w-xl"
          >
            {product.body}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="mt-10"
          >
            <a
              href={product.url}
              target={product.url.startsWith('http') ? '_blank' : undefined}
              rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs tracking-[0.2em] uppercase underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Visit {product.visitLabel} →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Render the four chapters from `Home`**

Update `Home`'s `<main>` body to:

```tsx
      <main className="bg-background text-foreground">
        <SectionMasthead />
        {PRODUCTS.map((p, i) => (
          <SectionChapter key={p.id} product={p} index={i} />
        ))}
      </main>
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: passes.

- [ ] **Step 4: Visual verification**

Run: `npm run dev`. Scroll the page from top to bottom.

Check **at 1440px (desktop)**:
- After the masthead, four full-viewport chapters appear in order: Sally, Spec-Nexus, Oops!, Shelfy.
- Sally: SVG on the **left**, text on the right.
- Spec-Nexus: text on the **left**, SVG on the right.
- Oops! I Learn: SVG on the left, text on the right.
- Shelfy: text on the left, SVG on the right.
- Each chapter's text reveals on scroll: number caption → display name (with brief blur fade) → tagline → body → "VISIT … →" link.
- Each SVG draws itself in (Sally's route, Spec-Nexus' blocks + connectors, Oops!'s loop path, Shelfy's books rising).
- Hairline divider between sections.

Check **at 768px (tablet)**:
- Single-column layout: SVG above, text below, same content.

Check **at 375px (mobile)**:
- Single column. Display name caps at `text-6xl` (no horizontal overflow).
- SVG fills the column width up to `max-w-md`.

Check **clicking masthead rows**:
- From the masthead, clicking `01 Sally` smooth-scrolls to the Sally chapter. (Smooth scroll is enabled via the existing `html { scroll-behavior: smooth }` rule in `globals.css`.)
- Same for the other three.

Check **clicking Visit links**:
- Sally → opens `https://sally.appshore.in` in a new tab.
- Spec-Nexus → href is `#`; clicking jumps to the top of the page (this is intentional placeholder behavior).
- Oops! → opens `https://oopsilearn.appshore.in` in a new tab.
- Shelfy → opens `https://shelfy.appshore.in` in a new tab.

Check **dark mode**:
- All text and SVGs invert correctly via `currentColor`.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add four product chapters with alternating layout

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 6: Add the `SectionColophon` component

**Files:**
- Modify: `app/page.tsx` (add `SectionColophon`, render it from `Home`)

The colophon closes the page: a quiet "FOUR PRODUCTS. ONE STUDIO." caption, a centered question, a single CTA to `/contact`, and a 3-column footer (AppShore + copyright | products list | About/Contact).

- [ ] **Step 1: Add the `SectionColophon` component**

Add below `SectionChapter` and above `Home`:

```tsx
function SectionColophon() {
  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 lg:px-12 py-24 border-t border-border">
      <div className="w-full max-w-6xl mx-auto">
        {/* Closing block */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground"
        >
          Four products. One studio.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mt-12 text-center text-2xl md:text-3xl tracking-tight"
        >
          Have something to build with us?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/contact"
            className="rounded-full px-8 py-4 bg-foreground text-background font-mono text-xs tracking-[0.15em] uppercase hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get in touch →
          </Link>
        </motion.div>

        {/* Footer */}
        <div className="mt-32 pt-12 border-t border-border grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase">
              AppShore LLP
            </p>
            <p className="mt-2 font-mono text-xs tracking-[0.2em] text-muted-foreground">
              © 2026
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Products
            </p>
            <ul className="mt-3 space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target={p.url.startsWith('http') ? '_blank' : undefined}
                    rel={p.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm hover:underline underline-offset-4"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              Company
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:underline underline-offset-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm hover:underline underline-offset-4"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Render `SectionColophon` from `Home`**

Update `Home`'s `<main>` to its final form:

```tsx
      <main className="bg-background text-foreground">
        <SectionMasthead />
        {PRODUCTS.map((p, i) => (
          <SectionChapter key={p.id} product={p} index={i} />
        ))}
        <SectionColophon />
      </main>
```

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: passes.

- [ ] **Step 4: Visual verification**

Run: `npm run dev`. Scroll all the way down.

Check **at 1440px (desktop)**:
- Below Shelfy chapter: hairline → "FOUR PRODUCTS. ONE STUDIO." caption (centered, mono, muted).
- "Have something to build with us?" centered, larger.
- Filled black pill button "GET IN TOUCH →"; hover dims slightly.
- Below: 3-column footer. Left column: APPSHORE LLP / © 2026. Middle: PRODUCTS heading + 4 product links. Right: COMPANY heading + About / Contact links.

Check **at 375px (mobile)**:
- Same content, single column. Footer stacks: brand → products → company.

Check **dark mode**:
- CTA becomes white pill with black text. Footer text inverts cleanly.

Check **CTA**:
- Click "Get in touch →" navigates to `/contact`.

Check **footer links**:
- Each product link opens in new tab (Spec-Nexus jumps to top — placeholder).
- About and Contact navigate within the site.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add colophon section with CTA and footer

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## Task 7: Final pass — accessibility, full-page verification, lint

**Files:** No code changes unless verification reveals issues.

This task is a verification gate, not a code task. Only modify files if a check fails.

- [ ] **Step 1: Run lint and capture baseline**

Run: `npm run lint`
Expected: zero new errors versus the state before this redesign. If errors are reported in `app/page.tsx` or `components/product-mark.tsx`, fix them. Pre-existing errors/warnings in other files are out of scope.

- [ ] **Step 2: Keyboard navigation test**

Run: `npm run dev`. Open `http://localhost:3000`. Press `Tab` repeatedly from page load:

Expected focus order:
1. Skip target (browser default — no skip link added)
2. Logo link in nav (`AppShore`)
3. Each nav item: Home, Products, About, Contact
4. Theme toggle button
5. "Get Started" nav button
6. Each masthead row: 01 Sally, 02 Spec-Nexus, 03 Oops! I Learn, 04 Shelfy
7. Each chapter's "Visit … →" link (4 of them)
8. "Get in touch →" CTA
9. Each footer link: 4 product links + About + Contact

Every focused element must show a visible ring (white-on-dark or dark-on-white, 2px, with 2px offset). If any interactive element lacks a focus ring, add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background` to its className.

- [ ] **Step 3: Reduced-motion verification**

In your OS, enable "Reduce motion" (System Settings → Accessibility on macOS; equivalent on other systems). Reload the page.

Expected: animations are essentially instant (durations 0.01ms). Content still appears in correct positions; nothing is invisible. Disable reduced motion when done.

- [ ] **Step 4: Light/dark mode parity**

Toggle the theme via the nav theme toggle.

Expected: every element on the page (wordmark, masthead rows, chapter SVGs, body text, CTA, footer) inverts cleanly. No element should be invisible (e.g., black text on black background) or have a colored cast remaining.

- [ ] **Step 5: Cross-viewport check**

Use browser dev tools device emulation. For each viewport:

| Viewport | Check |
|---|---|
| 375 × 667 | Wordmark fits without wrapping. Masthead rows are 2-line with hint always visible. Chapter SVGs and text stack vertically. CTA and footer stack. |
| 768 × 1024 | Layout still single-column for chapters (lg breakpoint not yet active). Footer is 3-column. |
| 1024 × 768 | Chapters now show alternating 12-col layout. |
| 1440 × 900 | Full editorial layout. Content centered within `max-w-6xl`. |
| 1920 × 1080 | Content width caps at 1152px; lots of negative space on each side. No layout breaks. |

- [ ] **Step 6: Verify no regression in About / Contact pages**

Visit `/about` and `/contact`.

Expected: pages render without crashes. Their visual treatment is now grayscale because they share theme tokens — this is the documented side effect from spec §9. No layout breakage.

- [ ] **Step 7: Final commit (if any fixes were applied)**

If steps 1–6 surfaced issues that required code changes, commit them:

```bash
git add -A
git commit -m "fix: accessibility and viewport polish for landing page redesign

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

If no changes were needed, skip this step.

- [ ] **Step 8: Summary report**

Report to the user:
- Files modified: `app/globals.css`, `app/page.tsx`
- Files created: `components/product-mark.tsx`
- All 4 products render in correct order with alternating layout.
- Lint clean.
- Light + dark mode verified at 375 / 768 / 1440px.
- Keyboard navigation works with visible focus rings.
- Reduced-motion respected.
- Spec-Nexus URL is the only outstanding TODO.

---

## Acceptance check (cross-reference to spec §12)

| Spec criterion | Verified in |
|---|---|
| 1. Page renders nav + masthead + 4 chapters in order + colophon | Tasks 4, 5, 6 |
| 2. Monochrome in both modes | Task 1 + Task 7 step 4 |
| 3. Animations conform to master grammar | Tasks 4, 5, 6 (durations + ease values match spec §7) |
| 4. Masthead row click smooth-scrolls to chapter | Task 5 step 4 |
| 5. Each chapter `Visit →` opens product URL in new tab | Task 5 step 4 |
| 6. Footer products list matches the 4 chapters | Task 6 (uses same `PRODUCTS` array) |
| 7. `npm run lint` introduces no new errors | Task 7 step 1 |
| 8. Keyboard navigable with focus indicators | Task 7 step 2 |
| 9. `prefers-reduced-motion: reduce` disables animation | Task 1 step 4 + Task 7 step 3 |
| 10. No new dependency added | (No `package.json` edits anywhere in plan) |
