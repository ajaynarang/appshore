'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export type ProductId = 'sally' | 'spec-nexus' | 'oops' | 'shelfy';

type Props = {
  id: ProductId;
  className?: string;
};

const SVG_COMMON =
  'w-full max-w-md aspect-square text-foreground';

export function ProductMark({ id, className }: Props) {
  switch (id) {
    case 'sally':
      return <SallyMark className={cn(SVG_COMMON, className)} />;
    case 'spec-nexus':
      return <SpecNexusMark className={cn(SVG_COMMON, className)} />;
    case 'oops':
      return <OopsMark className={cn(SVG_COMMON, className)} />;
    case 'shelfy':
      return <ShelfyMark className={cn(SVG_COMMON, className)} />;
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
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
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
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: EASE }}
        opacity="0.4"
      />
      <motion.line
        x1="60" y1="150" x2="60" y2="180"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
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
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: b.delay, ease: EASE }}
        />
      ))}

      {connectors.map((c, i) => (
        <motion.path
          key={i}
          d={c.d}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
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
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
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
   04 — Shelfy: a row of books that also reads as a barcode
   ────────────────────────────────────────────── */
function ShelfyMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();

  // Mix of thin paperbacks and a few thicker hardcovers, varied heights.
  // Widths add the book-shaped rhythm; varied heights preserve the barcode read.
  const books = [
    { x: 28,  w: 7,  h: 105, detail: 'band' },
    { x: 37,  w: 5,  h: 88 },
    { x: 44,  w: 9,  h: 112, detail: 'band' },
    { x: 55,  w: 6,  h: 78 },
    { x: 63,  w: 7,  h: 98 },
    { x: 72,  w: 11, h: 118, detail: 'hardcover' },
    { x: 85,  w: 5,  h: 84 },
    { x: 92,  w: 7,  h: 96, detail: 'band' },
    { x: 101, w: 6,  h: 108 },
    { x: 109, w: 10, h: 92, detail: 'hardcover' },
    { x: 121, w: 5,  h: 102 },
    { x: 128, w: 8,  h: 86, detail: 'band' },
    { x: 138, w: 6,  h: 110 },
    { x: 146, w: 9,  h: 78, detail: 'hardcover' },
    { x: 157, w: 5,  h: 100 },
    { x: 164, w: 7,  h: 90, detail: 'band' },
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
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="184" height="184" stroke="currentColor" opacity="0.15" />

      {books.map((b, i) => {
        const top = shelfY - b.h;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: EASE }}
          >
            {/* Book spine */}
            <rect x={b.x} y={top} width={b.w} height={b.h} />

            {/* Title band — a horizontal stripe near the top of the spine */}
            {b.detail === 'band' && (
              <line
                x1={b.x + 1}
                y1={top + 14}
                x2={b.x + b.w - 1}
                y2={top + 14}
                opacity="0.55"
              />
            )}

            {/* Hardcover — double rule at top and bottom, the classic clothbound look */}
            {b.detail === 'hardcover' && (
              <>
                <line x1={b.x + 1} y1={top + 6} x2={b.x + b.w - 1} y2={top + 6} opacity="0.55" />
                <line x1={b.x + 1} y1={shelfY - 6} x2={b.x + b.w - 1} y2={shelfY - 6} opacity="0.55" />
              </>
            )}
          </motion.g>
        );
      })}

      {/* Shelf line — sits flush under all books */}
      <motion.line
        x1="20" y1={shelfY} x2="180" y2={shelfY}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
      />

      {/* Shelf supports — short verticals at each end, like a real shelf */}
      <motion.line
        x1="20" y1={shelfY} x2="20" y2={shelfY + 6}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.9, ease: EASE }}
        opacity="0.6"
      />
      <motion.line
        x1="180" y1={shelfY} x2="180" y2={shelfY + 6}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4, delay: 0.9, ease: EASE }}
        opacity="0.6"
      />
    </svg>
  );
}
