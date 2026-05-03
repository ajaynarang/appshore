# AppShore LLP Landing Page Redesign — Design Spec

**Date:** 2026-05-03
**Author:** Ajay Narang (with Claude)
**Status:** Draft, pending user review

---

## 1. Goal

Redesign the AppShore LLP landing page (`app/page.tsx`) so it reads as the home of a thoughtful AI products studio rather than a startup pitch. The page must:

- Showcase exactly four products: **Sally**, **Spec-Nexus**, **Oops! I Learn**, **Shelfy** — in that order.
- Match the visual language of `sally.appshore.in` (pure black/white, editorial typography, restrained motion) without literally cloning Sally's narrative-scroll structure.
- Hit a 9/10 professional bar: the kind of page a senior buyer at a serious company would forward without embarrassment.

The brand position is **"the umbrella"** — AppShore is the parent; the products are the headliners. The page expresses this by recessing the AppShore brand into a small, magazine-style masthead and giving each product a full-viewport editorial chapter.

## 2. Non-goals

- No changes to `app/about/page.tsx` or `app/contact/page.tsx`.
- No changes to `components/navigation.tsx` logic — only its appearance shifts via theme tokens.
- No new dependencies, no `package.json` edits, no Tailwind config edits.
- No analytics, scroll progress bars, page transitions, sticky elements, audio, or parallax.
- No mobile app, no marketing copy on engineering depth (e.g., MCP, model gateways, CAC/LTV) — those belong in product decks, not the LLP page.

## 3. Conceptual model

The page is a magazine masthead followed by four editorial product chapters and a quiet colophon.

```
┌──────────────────────────────────────────────┐
│  Navigation (existing, themed b&w)           │
├══════════════════════════════════════════════┤
│  SECTION 1 — Masthead                        │
│    APPSHORE wordmark                         │
│    PRODUCTS BY APPSHORE LLP. (caption)       │
│    01 / Sally                            ↗   │
│    02 / Spec-Nexus                       ↗   │
│    03 / Oops! I Learn                    ↗   │
│    04 / Shelfy                           ↗   │
│    SCROLL ↓                                  │
├══════════════════════════════════════════════┤
│  SECTION 2 — Chapter 01: Sally               │
│    [SVG mark]   01 / FOUR                    │
│                 Sally                        │
│                 Tagline                      │
│                 Body prose                   │
│                 VISIT sally.appshore.in →    │
├──────────────────────────────────────────────┤
│  SECTION 3 — Chapter 02: Spec-Nexus          │
│    (text left, SVG right — alternating)      │
├──────────────────────────────────────────────┤
│  SECTION 4 — Chapter 03: Oops! I Learn       │
├──────────────────────────────────────────────┤
│  SECTION 5 — Chapter 04: Shelfy              │
├══════════════════════════════════════════════┤
│  SECTION 6 — Colophon                        │
│    FOUR PRODUCTS. ONE STUDIO.                │
│    Have something to build with us?          │
│    [ Get in touch → ]                        │
│    Footer: products | links | © 2026         │
└──────────────────────────────────────────────┘
```

## 4. Visual system

### 4.1 Color tokens

The page is pure grayscale. The token names from the existing `globals.css` are preserved (so `components/ui/*` primitives keep working), but every value is remapped to grayscale. Values are HSL triples to match the existing rgb-triple syntax.

**Light mode** (`:root`):

| Token | Value | Meaning |
|---|---|---|
| `--background` | `255 255 255` | Page bg |
| `--foreground` | `23 23 23` | Text, wordmark, SVG |
| `--card` | `255 255 255` | Same as bg |
| `--card-foreground` | `23 23 23` | |
| `--primary` | `23 23 23` | Buttons fill |
| `--primary-foreground` | `250 250 250` | Buttons text |
| `--primary-dark` | `23 23 23` | Aliased to primary (no separate dark) |
| `--primary-light` | `64 64 64` | Aliased to a neutral gray |
| `--secondary` | `245 245 245` | Subtle surface (not used on this page) |
| `--secondary-foreground` | `23 23 23` | |
| `--muted` | `245 245 245` | |
| `--muted-foreground` | `115 115 115` | Captions, secondary text |
| `--accent` | `245 245 245` | |
| `--accent-foreground` | `23 23 23` | |
| `--border` | `229 229 229` | Hairlines |
| `--input` | `229 229 229` | |
| `--ring` | `23 23 23` | Focus rings |
| `--divider` | `229 229 229` | |
| `--popover` | `255 255 255` | |
| `--popover-foreground` | `23 23 23` | |

**Dark mode** (`.dark`):

| Token | Value |
|---|---|
| `--background` | `23 23 23` |
| `--foreground` | `250 250 250` |
| `--card` | `38 38 38` |
| `--card-foreground` | `250 250 250` |
| `--primary` | `250 250 250` |
| `--primary-foreground` | `23 23 23` |
| `--primary-dark` | `250 250 250` |
| `--primary-light` | `163 163 163` |
| `--secondary` | `38 38 38` |
| `--secondary-foreground` | `250 250 250` |
| `--muted` | `38 38 38` |
| `--muted-foreground` | `163 163 163` |
| `--accent` | `38 38 38` |
| `--accent-foreground` | `250 250 250` |
| `--border` | `64 64 64` |
| `--input` | `64 64 64` |
| `--ring` | `250 250 250` |
| `--divider` | `64 64 64` |
| `--popover` | `38 38 38` |
| `--popover-foreground` | `250 250 250` |

Sidebar/chart tokens that exist in the file are remapped to neutrals using the same scale; they are not used on this page but must continue to compile.

`--destructive` retains its red value (used by form components on other pages).

### 4.2 Typography

Fonts already loaded in `app/layout.tsx`: Geist Sans, Geist Mono. No additions.

| Role | Class composition |
|---|---|
| AppShore wordmark | `text-5xl md:text-6xl font-bold tracking-tight` |
| Product display name | `text-7xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter leading-none` |
| Tagline (chapter) | `text-lg md:text-xl text-muted-foreground` |
| Body prose | `text-base md:text-lg leading-relaxed` |
| Section h2 (colophon question) | `text-2xl md:text-3xl tracking-tight` |
| Tracked label / number / caption | `font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground` |
| Visit link | `font-mono text-xs tracking-[0.2em] uppercase underline-offset-4 hover:underline` |

### 4.3 Spacing & layout

- Container: `max-w-6xl mx-auto px-6 lg:px-12`.
- Sections: `min-h-screen` for masthead and chapters; `min-h-[60vh]` for colophon.
- Section internal padding: `py-32` (with `min-h-screen`, this is breath, not crowding).
- Vertical rhythm inside a chapter text block: number caption → 40px gap → display name → 24px gap → tagline → 48px gap → body → 40px gap → visit link.
- Between sections: a single `<div className="border-t border-border" />` hairline. No decorative pulse SVGs.

### 4.4 Borders & shapes

- All borders are 1px (`border`) using `border-border`. No 2px borders.
- Buttons and pill links: `rounded-full`. SVG marks: unconstrained.
- No drop shadows on the page surface.
- Focus rings: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2`.

## 5. Components

### 5.1 `app/page.tsx` — single document, all sections inline

```
'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { ProductMark } from '@/components/product-mark';

const PRODUCTS = [
  { id: 'sally',       name: 'Sally',          tagline: '…', body: '…',
    hint: 'Fleet AI',                       url: 'https://sally.appshore.in' },
  { id: 'spec-nexus',  name: 'Spec-Nexus',     tagline: '…', body: '…',
    hint: 'Governed AI development',        url: '#' /* TODO */ },
  { id: 'oops',        name: 'Oops! I Learn',  tagline: '…', body: '…',
    hint: 'Adaptive learning, K–12',        url: 'https://oopsilearn.appshore.in' },
  { id: 'shelfy',      name: 'Shelfy',         tagline: '…', body: '…',
    hint: 'Personal library intelligence',  url: 'https://shelfy.appshore.in' },
];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        <SectionMasthead />
        {PRODUCTS.map((p, i) => (
          <SectionChapter key={p.id} product={p} index={i} />
        ))}
        <SectionColophon />
      </main>
    </>
  );
}
```

`SectionMasthead`, `SectionChapter`, `SectionColophon` are defined as local function components in the same file. The products array sits at the top — readable cold.

### 5.2 `components/product-mark.tsx` — new file, sole new module

```
'use client';
type Props = { id: 'sally' | 'spec-nexus' | 'oops' | 'shelfy'; className?: string };

export function ProductMark({ id, className }: Props) {
  switch (id) {
    case 'sally':      return <SallyMark className={className} />;
    case 'spec-nexus': return <SpecNexusMark className={className} />;
    case 'oops':       return <OopsMark className={className} />;
    case 'shelfy':     return <ShelfyMark className={className} />;
  }
}
```

Each mark is an inline SVG, monochrome (`stroke="currentColor"`, `fill="none"` except where structure requires), 1.25px stroke. All use `w-full max-w-md aspect-square` sizing and a stroke-dashoffset draw-in animation triggered by `useInView` (1.2–1.5s, ease `[0.25, 0.1, 0.25, 1]`).

**Concepts** (final visuals to be drawn during implementation):

| Product | Concept |
|---|---|
| Sally | A roadway-style line that bends across the frame with small node dots branching off — a fleet route as a nervous system. |
| Spec-Nexus | A grid of geometric blocks linked by connector lines — structured collaboration around specifications. |
| Oops! I Learn | A path that takes a wrong turn, doubles back through a small loop, then continues forward — the "oops" that teaches. |
| Shelfy | Vertical bars of varying heights inside a frame — a bookshelf rendered as a barcode. |

### 5.3 `components/navigation.tsx` — untouched logic

The component continues to consume the theme tokens (`bg-background`, `text-foreground`, `bg-primary`, etc.). With the tokens remapped to grayscale, the nav becomes b&w automatically. No JSX change. The nav's existing `<Sparkles>` icon-in-rounded-square logo will visually shift to monochrome — that's correct.

### 5.4 `components/animated-gradient.tsx` — orphaned, not deleted

The landing page no longer imports it. We do not delete the file because `app/about/page.tsx` and `app/contact/page.tsx` may still import it; those files are out of scope. If a future cleanup pass confirms zero usages, the file can be removed.

## 6. Section-by-section design

### 6.1 Masthead (Section 1)

**Goal:** Establish AppShore as a quiet parent and preview the four products.

Layout: full viewport, content vertically centered.

```
APPSHORE                                  ← wordmark
PRODUCTS BY APPSHORE LLP.                 ← thesis (mono caption)
─────────────────────────────────
01    Sally                          ↗
─────────────────────────────────
02    Spec-Nexus                     ↗
─────────────────────────────────
03    Oops! I Learn                  ↗
─────────────────────────────────
04    Shelfy                         ↗
─────────────────────────────────
SCROLL ↓
```

**Masthead row markup pattern:**

```tsx
<a href="#sally" className="group flex items-center gap-8 py-6 border-b border-border">
  <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground w-12">01</span>
  <span className="text-2xl md:text-4xl font-bold tracking-tight flex-1">Sally</span>
  <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   md:block hidden">
    Fleet AI
  </span>
  <span className="text-foreground transition-transform duration-300 group-hover:translate-x-1">↗</span>
</a>
```

**Behaviors:**
- Default: number, name, arrow.
- Hover (desktop only): hint fades in, arrow shifts right 4px, bottom border darkens to `border-foreground`.
- Click: smooth-scrolls to chapter section (`#sally`, `#spec-nexus`, `#oops`, `#shelfy`).
- Mobile (< md): the hint is *always* visible below the name in muted text (no hover). The row becomes two visual lines, but stays a single `<a>` element.

**Entry animation:**

| Time | Element | Animation |
|---|---|---|
| 200ms | Wordmark | opacity 0→1, y +12 → 0, 0.7s |
| 600ms | Thesis caption | opacity 0→1, 0.8s |
| 1100ms | Masthead rows | stagger 80ms, each: opacity 0→1, y +8 → 0, 0.5s |
| 1700ms | Scroll cue | opacity 0→0.4, then `y: [0, 4, 0]` infinite over 6s |

### 6.2 Product chapters (Sections 2–5)

Each chapter is full viewport, 12-column grid on `lg`, single column below.

**Side alternation:**

| Chapter | SVG side | Text side |
|---|---|---|
| 01 Sally | cols 1–5 | cols 7–12 |
| 02 Spec-Nexus | cols 8–12 | cols 1–6 |
| 03 Oops! I Learn | cols 1–5 | cols 7–12 |
| 04 Shelfy | cols 8–12 | cols 1–6 |

**Text block contents** (top to bottom):
1. `01 / FOUR` — mono caption.
2. Display name.
3. Tagline.
4. Body paragraph (2–3 sentences).
5. `VISIT <domain> →` link to the product URL (opens in new tab via `target="_blank" rel="noopener noreferrer"`).

**No badges, no metric counters, no highlight pills.**

**Mobile order**: SVG always above the text block, regardless of desktop alternation.

**Scroll-into-view animation** (fires once per chapter, `triggerOnce: true, amount: 0.3`):

| Element | Animation | Delay |
|---|---|---|
| Number caption | opacity 0→1, y +8 → 0 | 0ms |
| Display name | opacity 0→1, blur 12px → 0 | 100ms |
| Tagline | opacity 0→1, y +8 → 0 | 300ms |
| Body | opacity 0→1, y +8 → 0 | 450ms |
| Visit link | opacity 0→1, y +8 → 0 | 600ms |
| SVG draw-in | stroke-dashoffset N → 0, 1.2–1.5s | 200ms |

Duration 0.7s, ease `[0.25, 0.1, 0.25, 1]`.

**Final chapter copy (verbatim):**

**Chapter 01 — Sally**
- Tagline: *An operating system for trucking fleets.*
- Body: *Most trucking software is a place to type things in. Sally is software that does the work. She dispatches drivers, plans routes that respect legal driving hours, reads rate confirmations, files invoices, and watches compliance — all from a conversation. The fleet runs; the owner supervises.*
- Hint: `Fleet AI`
- URL: `https://sally.appshore.in`

**Chapter 02 — Spec-Nexus**
- Tagline: *Governance for AI-native software teams.*
- Body: *AI can write code in seconds. Enterprises still need to know who approved what, and why. Spec-Nexus sits between product intent and implementation — turning specifications into executable contracts, with approval gates, role-based ownership, and a clean trace from requirement to code. The speed of AI, with the rigor enterprises require.*
- Hint: `Governed AI development`
- URL: `#` *(TODO: replace with real Spec-Nexus URL when available)*

**Chapter 03 — Oops! I Learn**
- Tagline: *A tutor that adapts to the child, not the syllabus.*
- Body: *Every child learns differently — but classroom teaching can't. Oops! I Learn is an AI study companion for grades 1 through 12 that matches its personality and method to each subject and each student. Parents see real progress. Children earn rewards their parents control. Worksheets stay on paper; intelligence reads them anyway.*
- Hint: `Adaptive learning, K–12`
- URL: `https://oopsilearn.appshore.in`

**Chapter 04 — Shelfy**
- Tagline: *Your bookshelf, finally legible to software.*
- Body: *Scan a barcode or a cover. Shelfy knows the book. Over time it learns your taste — what you've finished, what you've abandoned, what's next on the shelf — and quietly recommends what's worth your evening. A personal library, indexed and intelligent.*
- Hint: `Personal library intelligence`
- URL: `https://shelfy.appshore.in`

### 6.3 Colophon (Section 6)

Half-viewport (`min-h-[60vh]`), centered.

```
─────────────────────────────────                ← hairline above

FOUR PRODUCTS. ONE STUDIO.                       ← mono caption

Have something to build with us?                 ← centered question

[ Get in touch → ]                               ← single CTA, links to /contact

(generous gap)

─────────────────────────────────                ← footer hairline

APPSHORE LLP   |  Sally · Spec-Nexus ·          About · Contact
               |  Oops! I Learn · Shelfy
© 2026
```

**CTA button:**

```
<Link href="/contact">
  <button className="rounded-full px-8 py-4 bg-foreground text-background
                     font-mono text-xs tracking-[0.15em] uppercase
                     hover:opacity-90 transition-opacity">
    Get in touch →
  </button>
</Link>
```

No second button, no shadow.

**Footer:** below the CTA, separated by a `border-t border-border` hairline and `pt-12 mt-32` spacing. 3-column grid on `md+`:

- **Column 1:** `APPSHORE LLP` (mono, uppercase, foreground) above `© 2026` (mono, muted).
- **Column 2:** heading `PRODUCTS` (mono caption); list of the 4 products linked to their respective external URLs (or `#` for Spec-Nexus).
- **Column 3:** heading `COMPANY` (mono caption); links to `/about` and `/contact`.

Mobile (< md): stacks to single column, same order. The products column is generated from the same `PRODUCTS` array used by the masthead and chapters, so the two cannot drift apart.

## 7. Animation grammar (master rules)

Applies to every animation on the page.

| Rule | Value |
|---|---|
| Easing | `[0.25, 0.1, 0.25, 1]` |
| Reveal duration (prose) | 0.7s |
| Reveal duration (SVG draw) | 1.2–1.5s |
| Stagger between siblings | 80–150ms |
| Initial transform vocabulary | `opacity 0`, `y +8px`, or `blur 12px` (display names) |
| `triggerOnce` | `true` everywhere |
| `viewport.amount` | `0.3` |
| Hover transitions | 200–300ms, opacity/transform only |
| Hover transform max | `translate-x-1` (4px) for arrows; **no scale** anywhere on the page |

## 8. Accessibility

- `prefers-reduced-motion: reduce` block in `globals.css` reduces all animation/transition durations to 0.01ms (mirrors Sally's existing rule). Framer Motion respects it natively for most properties.
- Color contrast (light): `#171717` on `#FFFFFF` = 16.7:1 AAA. `#737373` on `#FFFFFF` = 4.9:1 AA for normal text.
- Color contrast (dark): `#FAFAFA` on `#171717` ≈ 16:1 AAA. `#A3A3A3` on `#171717` ≈ 6.5:1 AA.
- Focus rings on all interactive elements (masthead rows, visit links, CTA): `focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2`.
- Semantic markup: chapters are `<section id="..." aria-labelledby="...">` with the display name as the heading; masthead rows are `<a>` tags; CTA is a `<Link>` to `/contact`.
- No skip-to-content link added — `Navigation` is the first focusable element and the page is short and linear.

## 9. Files modified / created / left alone

**Modified:**
- `app/page.tsx` — full rewrite (masthead + 4 chapters + colophon).
- `app/globals.css` — token values remapped to grayscale (light + dark); `prefers-reduced-motion` block added if not present.

**Created (one new file):**
- `components/product-mark.tsx` — inline SVG marks per product.

**Untouched:**
- `app/about/page.tsx`, `app/contact/page.tsx`
- `components/navigation.tsx`, `components/theme-toggle.tsx`, `components/theme-provider.tsx`
- `components/animated-gradient.tsx` (orphaned but kept; flagged for later cleanup)
- `components/ui/*` primitives
- `lib/utils.ts`
- `next.config.ts`, `tsconfig.json`, `package.json`, Tailwind config

**Acknowledged side effects:**
- `app/about/page.tsx` and `app/contact/page.tsx` will visually shift to grayscale because they use the same theme tokens. This is acceptable per scope (the user has stated those pages are out of scope; we are not editing them, only their tokens).

## 10. Edge cases handled

| Case | Handling |
|---|---|
| User lands with `#sally` in URL | Browser smooth-scrolls; chapter still plays its scroll-in animation on first intersection. |
| Dark mode via `defaultTheme="system"` | All tokens invert via `.dark` class; SVGs follow `currentColor`. |
| Spec-Nexus URL unknown | `href="#"` with `// TODO` comment in `PRODUCTS` array. |
| Ultrawide screens (≥ 1920px) | `max-w-6xl` caps content at 1152px; SVGs proportional. |
| Narrow phones (< 375px) | Wordmark `text-4xl`; product names cap `text-6xl`. |
| Hydration mismatch (theme) | Existing `theme-toggle.tsx` already gates on `mounted`; nothing new required. |

## 11. Out of scope (explicitly deferred)

- Real Spec-Nexus URL (TODO marker in code).
- Refining product chapter copy beyond v1 (user has indicated more context is coming).
- Deleting `components/animated-gradient.tsx` (requires confirmation that `about` and `contact` no longer use it).
- Re-skinning the About and Contact pages (will cosmetically shift via tokens; intentional UI alignment is a separate task).
- Updating page metadata in `layout.tsx` (`title`, `description`) — separate copy task.

## 12. Acceptance criteria

The redesign is complete when:

1. Visiting `/` shows: Navigation → Masthead → 4 Chapters (in correct order: Sally, Spec-Nexus, Oops! I Learn, Shelfy) → Colophon.
2. The page is monochrome in both light and dark mode — no blue, purple, pink, cyan, or brown remains visible to a normal viewer.
3. All animations conform to the master grammar (Section 7).
4. Clicking a masthead row smooth-scrolls to the corresponding chapter.
5. Each chapter's `Visit →` link opens the product URL in a new tab (Spec-Nexus excepted, which uses `#` until a URL is provided).
6. The footer products list matches the four chapters exactly.
7. `npm run lint` introduces no new errors versus `main`.
8. Page is keyboard-navigable end-to-end with visible focus indicators on every interactive element.
9. `prefers-reduced-motion: reduce` disables animation as expected.
10. No new dependency was added to `package.json`.
