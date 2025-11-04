'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Navigation } from '@/components/navigation';
import { AnimatedGradient } from '@/components/animated-gradient';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Sparkles,
  Truck,
  BookOpen,
  Trophy,
  MessageCircle,
  ShoppingCart,
  GraduationCap,
  ChevronRight,
  Brain,
  Target,
  Users,
  BarChart3,
  Star,
  ArrowRight,
  Rocket,
  Globe,
  Cpu,
  Lightbulb,
  Shield,
  Award,
  Code,
  Database,
  Network,
  TrendingUp
} from 'lucide-react';

const products = [
  {
    id: 'oops-i-learn',
    name: 'Oops! I Learn',
    tagline: 'AI-Powered Personalized Learning',
    description: 'Revolutionary AI mentors that adapt their teaching style based on subjects - transforming education for grades 1-12 with gamification and offline integration.',
    icon: GraduationCap,
    color: 'from-purple-500 via-pink-500 to-rose-500',
    bgGradient: 'from-purple-50 to-pink-50',
    highlights: ['Subject-Aware AI', 'Hybrid Learning', 'Oopsies Rewards', 'Multi-Board Support'],
    metrics: { users: '50K+', accuracy: '95%', satisfaction: '4.9/5' },
    url: 'https://oopsilearn.appshore.in' // Update with your actual URL
  },
  {
    id: 'truck-pilot',
    name: 'Truck Pilot',
    tagline: 'Intelligent Fleet Management',
    description: 'AI-powered ERP platform for trucking companies. Automate dispatch operations, optimize routes, and maximize profitability with intelligent load matching.',
    icon: Truck,
    color: 'from-blue-500 via-cyan-500 to-teal-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    highlights: ['AI Dispatch', 'Real-time Tracking', 'Load Optimization', 'Profit Intelligence'],
    metrics: { efficiency: '+40%', savings: '$50K/yr', uptime: '99.9%' },
    url: 'https://truckpilot.appshore.in' // Update with your actual URL
  },
  {
    id: 'tourna-x',
    name: 'Tourna-X',
    tagline: 'Sports Tournament Revolution',
    description: 'Complete sports ecosystem for players, clubs, and communities. Organize tournaments, find groups, manage bookings, and gamify sports participation.',
    icon: Trophy,
    color: 'from-orange-500 via-red-500 to-pink-500',
    bgGradient: 'from-orange-50 to-red-50',
    highlights: ['Auto Fixtures', 'Player Rankings', 'Club Management', 'Quick Commerce'],
    metrics: { tournaments: '1K+', players: '25K+', clubs: '500+' },
    url: 'https://tournax.appshore.in' // Update with your actual URL
  },
  {
    id: 'parla',
    name: 'Parla',
    tagline: 'Commerce on Chat',
    description: 'WhatsApp-native commerce platform. Businesses manage shops through casual messages, customers order conversationally - all powered by AI.',
    icon: MessageCircle,
    color: 'from-green-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-50 to-emerald-50',
    highlights: ['WhatsApp Native', 'Photo Menu OCR', 'Voice Orders', 'Smart Analytics'],
    metrics: { businesses: '2K+', orders: '100K+', response: '<30s' },
    url: 'https://parla.appshore.in' // Update with your actual URL
  },
  {
    id: 'shelfy',
    name: 'Shelfy',
    tagline: 'Your Personal Library Intelligence',
    description: 'Scan barcodes or book covers to build your home library. Get AI-powered recommendations and insights linked to your reading preferences.',
    icon: BookOpen,
    color: 'from-amber-500 via-yellow-500 to-orange-500',
    bgGradient: 'from-amber-50 to-yellow-50',
    highlights: ['Barcode Scanning', 'AI Recommendations', 'Reading Analytics', 'Cover Recognition'],
    metrics: { books: '5M+', scans: '250K+', accuracy: '98%' },
    url: 'https://shelfy.appshore.in' // Update with your actual URL
  },
  {
    id: 'nexacart',
    name: 'NexaCart',
    tagline: 'Next-Gen AI Commerce Platform',
    description: 'Revolutionary e-commerce platform leveraging AI for personalized shopping experiences, intelligent product discovery, and conversational checkout.',
    icon: ShoppingCart,
    color: 'from-indigo-500 via-purple-500 to-pink-500',
    bgGradient: 'from-indigo-50 to-purple-50',
    highlights: ['AI Shopping Assistant', 'Visual Search', 'Smart Personalization', 'Voice Commerce'],
    metrics: { conversion: '+85%', carts: '-60%', revenue: '+120%' },
    url: 'https://nexacart.appshore.in' // Update with your actual URL
  }
];

const technologies = [
  // { name: 'Machine Learning', icon: Brain },
  { name: 'Natural Language Processing', icon: MessageCircle },
  { name: 'Computer Vision', icon: Target },
  { name: 'Cloud Infrastructure', icon: Globe },
  { name: 'Real-time Analytics', icon: BarChart3 },
  { name: 'Predictive AI', icon: TrendingUp },
];

function AnimatedSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <>
      <Navigation />
      <AnimatedGradient />

      <main className="relative min-h-screen dark:bg-gray-950">
        {/* Hero Section */}
        <motion.section
          style={{ opacity, scale }}
          className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 opacity-50" />
          
          <div className="relative z-10 w-full text-center pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge className="mb-8 px-6 py-3 text-base bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white border-0 shadow-2xl shadow-purple-500/50">
                <Sparkles className="w-5 h-5 mr-2" />
                Next-Generation AI-Driven Solutions
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 leading-none"
            >
              <span className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 dark:from-gray-100 dark:via-purple-100 dark:to-blue-100 bg-clip-text text-transparent block">
                Building the
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                AI Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              We don&apos;t just build apps. We architect intelligent ecosystems that learn, adapt, and transform industries through the power of artificial intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="#products">
                <Button
                  size="lg"
                  className="rounded-full text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
                >
                  Explore Products
                  <Rocket className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full text-lg px-10 py-7 border-2 hover:bg-gray-50"
                >
                  Our Story
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-24 max-w-5xl mx-auto"
            >
              {[
                { icon: Brain, label: 'AI-Powered', value: '100%', color: 'text-purple-600 dark:text-purple-400' },
                { icon: Rocket, label: 'Products', value: '6+', color: 'text-blue-600 dark:text-blue-400' },
                { icon: Users, label: 'User-Centric', value: 'Always', color: 'text-pink-600 dark:text-pink-400' },
                { icon: Award, label: 'Innovation', value: 'Core', color: 'text-indigo-600 dark:text-indigo-400' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="p-6 text-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-2 hover:border-purple-200 dark:hover:border-purple-800 hover:shadow-xl transition-all duration-300">
                    <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-gray-400 rounded-full" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Technologies Section */}
        <section className="relative py-32 px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <AnimatedSection>
            <div className="w-full">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                  <Cpu className="w-4 h-4 mr-2" />
                  Technology Stack
                </Badge>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  Powered by AI Excellence
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Cutting-edge technologies that make the impossible, possible.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {technologies.map((tech, idx) => (
                  <AnimatedSection key={idx}>
                    <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 dark:hover:border-purple-800 bg-white dark:bg-gray-900 group">
                      <tech.icon className="w-12 h-12 mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{tech.name}</h3>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Products Section */}
        <section id="products" className="relative py-32 px-6 lg:px-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <AnimatedSection>
            <div className="w-full">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Our Solutions
                </Badge>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  Products That Matter
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Each product is a masterpiece of AI engineering, designed to solve real-world challenges with unprecedented intelligence.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {products.map((product) => (
                  <AnimatedSection key={product.id}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Card className="group relative overflow-hidden border-2 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-500 h-full bg-white dark:bg-gray-900 hover:shadow-2xl cursor-pointer">
                          <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} dark:opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                          <div className="relative z-10 p-8">
                            <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                              <product.icon className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-4xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-base font-semibold text-gray-500 dark:text-gray-400 mb-4">{product.tagline}</p>
                            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">{product.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {product.highlights.map((highlight, idx) => (
                                <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                                  <Star className="w-3 h-3 mr-1" />
                                  {highlight}
                                </Badge>
                              ))}
                            </div>

                            {/* Metrics - keept it commented for now do not remove it */}
                            {/* <div className="flex gap-6 mb-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                              {Object.entries(product.metrics).map(([key, value]) => (
                                <div key={key}>
                                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{value}</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">{key}</div>
                                </div>
                              ))}
                            </div> */}

                            <a href={product.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                              <Button
                                variant="ghost"
                                className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 w-full dark:text-gray-300"
                              >
                                Visit Product
                                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                              </Button>
                            </a>
                          </div>
                        </Card>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80" side="top">
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold">Quick Stats</h4>
                          <p className="text-sm text-gray-600">
                            {product.description.slice(0, 100)}...
                          </p>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-6 lg:px-12">
          <AnimatedSection>
            <div className="w-full max-w-6xl mx-auto">
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 sm:p-16 text-center shadow-2xl">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="relative z-10">
                  <Shield className="w-20 h-20 mx-auto mb-6 text-white" />
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    Ready to Transform Your Business?
                  </h2>
                  <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                    Join the AI revolution. Let&apos;s build something extraordinary together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/about">
                      <Button
                        size="lg"
                        className="rounded-full text-lg px-10 py-7 bg-white/10 border-2 hover:bg-white/20 text-white"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </section>

        {/* Footer */}
        <footer className="relative py-16 px-6 lg:px-12 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
          <div className="w-full">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">AppShore</span>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Building intelligent solutions for tomorrow&apos;s challenges. We architect AI-driven platforms that transform industries and empower businesses.
                </p>
                <div className="flex gap-4">
                  <Code className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <Database className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                  <Network className="w-5 h-5 text-gray-400 dark:text-gray-600" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Products</h3>
                <ul className="space-y-2">
                  {products.slice(0, 4).map((product) => (
                    <li key={product.id}>
                      <a 
                        href={product.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © 2025 AppShore LLP. All rights reserved. Building the future with AI.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
