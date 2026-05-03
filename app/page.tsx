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
