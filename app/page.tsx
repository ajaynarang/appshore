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
      'Every child learns differently — but classroom teaching can\'t. Oops! I Learn is an AI study companion for grades 1 through 12 that matches its personality and method to each subject and each student. Parents see real progress. Children earn rewards their parents control. Worksheets stay on paper; intelligence reads them anyway.',
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
      'Scan a barcode or a cover. Shelfy knows the book. Over time it learns your taste — what you\'ve finished, what you\'ve abandoned, what\'s next on the shelf — and quietly recommends what\'s worth your evening. A personal library, indexed and intelligent.',
    url: 'https://shelfy.appshore.in',
    visitLabel: 'shelfy.appshore.in',
  },
];

const EASE = [0.25, 0.1, 0.25, 1] as const;

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

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        <SectionMasthead />
        {PRODUCTS.map((p, i) => (
          <SectionChapter key={p.id} product={p} index={i} />
        ))}
      </main>
    </>
  );
}
