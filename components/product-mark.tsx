'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

export type ProductId = 'sally' | 'throughline' | 'oops' | 'shelfy' | 'tournax' | 'hydrobook';

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
    case 'throughline':
      return <ThroughlineMark className={cn(SVG_COMMON, className)} />;
    case 'oops':
      return <OopsMark className={cn(SVG_COMMON, className)} />;
    case 'shelfy':
      return <ShelfyMark className={cn(SVG_COMMON, className)} />;
    case 'tournax':
      return <TournaxMark className={cn(SVG_COMMON, className)} />;
    case 'hydrobook':
      return <HydrobookMark className={cn(SVG_COMMON, className)} />;
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
   Throughline: one thread from ticket to deploy,
   sealed at every gate a named human signs
   ────────────────────────────────────────────── */
function ThroughlineMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();

  // Intake → Spec → Design → Plan → Code → Review → Deploy.
  // Gated stages carry a seal; Intake and Code are run, not signed.
  const stages = [
    { x: 28, y: 110, gated: false },
    { x: 52, y: 84, gated: true },
    { x: 76, y: 116, gated: true },
    { x: 100, y: 88, gated: true },
    { x: 124, y: 120, gated: false },
    { x: 148, y: 90, gated: true },
    { x: 172, y: 100, gated: true },
  ];

  const thread =
    'M 28 110 C 38 96 42 84 52 84 S 66 116 76 116 S 90 88 100 88 ' +
    'S 114 120 124 120 S 138 90 148 90 S 164 100 172 100';

  const THREAD_DELAY = 0.2;
  const THREAD_DURATION = 1.8;

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

      {/* The thread itself, drawn once, end to end */}
      <motion.path
        d={thread}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: THREAD_DURATION, delay: THREAD_DELAY, ease: EASE }}
      />

      {/* Each stage lands as the thread reaches it */}
      {stages.map((st, i) => {
        const delay = THREAD_DELAY + (THREAD_DURATION * i) / (stages.length - 1);
        return st.gated ? (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.35, delay, ease: EASE }}
            style={{ transformOrigin: `${st.x}px ${st.y}px` }}
          >
            {/* Seal: a ring with a signed centre */}
            <circle cx={st.x} cy={st.y} r="6.5" className="fill-background" />
            <circle cx={st.x} cy={st.y} r="2.5" fill="currentColor" stroke="none" />
          </motion.g>
        ) : (
          <motion.circle
            key={i}
            cx={st.x}
            cy={st.y}
            r="2.75"
            className="fill-background"
            opacity={0.6}
            initial={{ scale: 0 }}
            animate={{ scale: inView ? 1 : 0 }}
            transition={{ duration: 0.3, delay, ease: EASE }}
            style={{ transformOrigin: `${st.x}px ${st.y}px` }}
          />
        );
      })}

      {/* The thread ends at a commit, not a shrug */}
      <motion.path
        d="M 172 100 L 172 140 M 166 140 L 178 140"
        opacity={0.5}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: THREAD_DELAY + THREAD_DURATION + 0.2, ease: EASE }}
      />
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
   TournaX: a knockout bracket collapsing to one champion
   ────────────────────────────────────────────── */
function TournaxMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();

  // Eight entrants on the left, resolving right through three rounds.
  // Seed y-positions are evenly spaced; each round averages its pair.
  const seedYs = [24, 48, 72, 96, 120, 144, 168, 192].map((y) => y * 0.86 + 14);

  // Round geometry: x where each round's brackets turn, and the x it feeds into.
  const rounds = [
    { from: 34, to: 76 },
    { from: 76, to: 118 },
    { from: 118, to: 160 },
  ];

  // Build the bracket rung-by-rung, halving the field each round.
  let ys = seedYs;
  const rungs: { d: string; round: number }[] = [];
  rounds.forEach((r, roundIndex) => {
    const next: number[] = [];
    for (let i = 0; i < ys.length; i += 2) {
      const [top, bottom] = [ys[i], ys[i + 1]];
      const mid = (top + bottom) / 2;
      // Two horizontal feeds + the vertical that joins them.
      rungs.push({ d: `M ${r.from} ${top} L ${r.to} ${top}`, round: roundIndex });
      rungs.push({ d: `M ${r.from} ${bottom} L ${r.to} ${bottom}`, round: roundIndex });
      rungs.push({ d: `M ${r.to} ${top} L ${r.to} ${bottom}`, round: roundIndex });
      next.push(mid);
    }
    ys = next;
  });

  const championY = ys[0];

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

      {/* Entrant dots */}
      {seedYs.map((y, i) => (
        <motion.circle
          key={i}
          cx="30"
          cy={y}
          r="2"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.35, delay: 0.15 + i * 0.05, ease: EASE }}
        />
      ))}

      {/* Bracket rungs — each round draws after the one that feeds it */}
      {rungs.map((rung, i) => (
        <motion.path
          key={i}
          d={rung.d}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6 + rung.round * 0.45,
            ease: EASE,
          }}
          opacity={0.45 + rung.round * 0.18}
        />
      ))}

      {/* Final feed to the champion */}
      <motion.path
        d={`M 160 ${championY} L 178 ${championY}`}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 2.0, ease: EASE }}
      />

      {/* Champion — the one filled node the whole draw resolves into */}
      <motion.circle
        cx="178"
        cy={championY}
        r="4.5"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.5, delay: 2.3, ease: EASE }}
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

/* ──────────────────────────────────────────────
   HydroBook: a test cylinder whose body is a ledger page
   ────────────────────────────────────────────── */
function HydrobookMark({ className }: { className?: string }) {
  const { ref, inView } = useDrawIn();

  // Ruled entries inside the cylinder, each a different length like real amounts.
  const rows = [
    { y: 82, w: 44 },
    { y: 100, w: 30 },
    { y: 118, w: 40 },
    { y: 136, w: 24 },
    { y: 154, w: 18 },
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
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="184" height="184" stroke="currentColor" opacity="0.15" />

      {/* Handwheel */}
      <motion.circle
        cx="100"
        cy="26"
        r="7"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
      />

      {/* Valve block with its side outlet */}
      <motion.path
        d="M 100 33 L 100 38 M 94 38 L 106 38 L 106 50 L 94 50 Z M 106 43 L 116 43 L 116 39"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
      />

      {/* Cylinder body: domed shoulder, straight walls, rounded base */}
      <motion.path
        d="M 94 50 C 70 52 62 62 62 76 L 62 166 C 62 176 70 182 80 182 L 120 182 C 130 182 138 176 138 166 L 138 76 C 138 62 130 52 106 50"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 1.1, delay: 0.4, ease: EASE }}
      />

      {/* Margin rule, as on a ledger page */}
      <motion.path
        d="M 78 70 L 78 170"
        opacity={0.35}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.3, ease: EASE }}
      />

      {/* Entries, written one after another */}
      {rows.map((r, i) => (
        <motion.path
          key={r.y}
          d={`M 86 ${r.y} L ${86 + r.w} ${r.y}`}
          opacity={0.6}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: inView ? 1 : 0 }}
          transition={{ duration: 0.35, delay: 1.5 + i * 0.18, ease: EASE }}
        />
      ))}

      {/* The tick: the day balances */}
      <motion.path
        d="M 112 154 L 118 160 L 130 146"
        strokeWidth="1.75"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: inView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 2.5, ease: EASE }}
      />
    </svg>
  );
}
