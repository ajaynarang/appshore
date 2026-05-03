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
