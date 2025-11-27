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
    id: 'shelfy',
    name: 'Shelfy',
    tagline: 'Your Personal Library Intelligence',
    description: 'Scan barcodes or book covers to build your home library. Get AI-powered recommendations and insights linked to your reading preferences.',
    icon: BookOpen,
    color: 'bg-primary',
    bgGradient: 'bg-secondary/30',
    highlights: ['Barcode Scanning', 'AI Recommendations', 'Reading Analytics', 'Cover Recognition'],
    metrics: { books: '5M+', scans: '250K+', accuracy: '98%' },
    url: 'https://shelfy.appshore.in',
    enabled: true
  },
  {
    id: 'oops-i-learn',
    name: 'Oops! I Learn',
    tagline: 'AI-Powered Personalized Learning',
    description: 'Revolutionary AI mentors that adapt their teaching style based on subjects - transforming education for grades 1-12 with gamification and offline integration.',
    icon: GraduationCap,
    color: 'bg-primary-dark',
    bgGradient: 'bg-secondary/30',
    highlights: ['Subject-Aware AI', 'Hybrid Learning', 'Oopsies Rewards', 'Multi-Board Support'],
    metrics: { users: '50K+', accuracy: '95%', satisfaction: '4.9/5' },
    url: 'https://oopsilearn.appshore.in',
    enabled: true
  },
  {
    id: 'truck-pilot',
    name: 'Truck Pilot',
    tagline: 'Intelligent Fleet Management',
    description: 'AI-powered ERP platform for trucking companies. Automate dispatch operations, optimize routes, and maximize profitability with intelligent load matching.',
    icon: Truck,
    color: 'bg-accent',
    bgGradient: 'bg-secondary/30',
    highlights: ['AI Dispatch', 'Real-time Tracking', 'Load Optimization', 'Profit Intelligence'],
    metrics: { efficiency: '+40%', savings: '$50K/yr', uptime: '99.9%' },
    url: 'https://truckpilot.appshore.in',
    enabled: true
  },
  {
    id: 'tourna-x',
    name: 'Tourna-X',
    tagline: 'Sports Tournament Revolution',
    description: 'Complete sports ecosystem for players, clubs, and communities. Organize tournaments, find groups, manage bookings, and gamify sports participation.',
    icon: Trophy,
    color: 'bg-primary-light',
    bgGradient: 'bg-secondary/30',
    highlights: ['Auto Fixtures', 'Player Rankings', 'Club Management', 'Quick Commerce'],
    metrics: { tournaments: '1K+', players: '25K+', clubs: '500+' },
    url: 'https://tournax.appshore.in',
    enabled: false
  },
  {
    id: 'parla',
    name: 'Parla',
    tagline: 'Commerce on Chat',
    description: 'WhatsApp-native commerce platform. Businesses manage shops through casual messages, customers order conversationally - all powered by AI.',
    icon: MessageCircle,
    color: 'bg-primary',
    bgGradient: 'bg-secondary/30',
    highlights: ['WhatsApp Native', 'Photo Menu OCR', 'Voice Orders', 'Smart Analytics'],
    metrics: { businesses: '2K+', orders: '100K+', response: '<30s' },
    url: 'https://parla.appshore.in',
    enabled: true
  },

  {
    id: 'nexacart',
    name: 'NexaCart',
    tagline: 'Next-Gen AI Commerce Platform',
    description: 'Revolutionary e-commerce platform leveraging AI for personalized shopping experiences, intelligent product discovery, and conversational checkout.',
    icon: ShoppingCart,
    color: 'bg-accent',
    bgGradient: 'bg-secondary/30',
    highlights: ['AI Shopping Assistant', 'Visual Search', 'Smart Personalization', 'Voice Commerce'],
    metrics: { conversion: '+85%', carts: '-60%', revenue: '+120%' },
    url: 'https://nexacart.appshore.in',
    enabled: false
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

      <main className="relative min-h-screen bg-background">
        {/* Hero Section */}
        <motion.section
          style={{ opacity, scale }}
          className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-secondary/30 opacity-50" />
          
          <div className="relative z-10 w-full text-center pt-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge className="mb-8 px-6 py-3 text-base bg-primary text-primary-foreground border-0 shadow-2xl shadow-primary/50">
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
              <span className="text-foreground block">
                Building the
              </span>
              <span className="text-primary block">
                Smart Experience
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              We don&apos;t just build apps. We architect intelligent ecosystems that learn, adapt, and transform industries through the power of AI.
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
                  className="rounded-full text-lg px-10 py-7 bg-primary hover:bg-primary-dark shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
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
                { icon: Brain, label: 'AI-Powered', value: '100%', color: 'text-primary' },
                { icon: Rocket, label: 'Products', value: '3+', color: 'text-primary-dark' },
                { icon: Users, label: 'User-Centric', value: 'Always', color: 'text-primary' },
                { icon: Award, label: 'Innovation', value: 'Core', color: 'text-primary-dark' }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card className="p-6 text-center bg-card/80 backdrop-blur-xl border-2 hover:border-primary hover:shadow-xl transition-all duration-300">
                    <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
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
        <section className="relative py-32 px-6 lg:px-12 bg-background">
          <AnimatedSection>
            <div className="w-full">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-secondary text-secondary-foreground border-border">
                  <Cpu className="w-4 h-4 mr-2" />
                  Technology Stack
                </Badge>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground">
                  Powered by AI Excellence
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Cutting-edge technologies
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {technologies.map((tech, idx) => (
                  <AnimatedSection key={idx}>
                    <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary bg-card group">
                      <tech.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold text-card-foreground">{tech.name}</h3>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Products Section */}
        <section id="products" className="relative py-32 px-6 lg:px-12 bg-secondary/20">
          <AnimatedSection>
            <div className="w-full">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-accent text-accent-foreground border-border">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Our Solutions
                </Badge>
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-foreground">
                  Products That Matter
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Each product is a masterpiece of AI engineering, designed to solve real-world challenges with unprecedented intelligence.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {products.filter(p => p.enabled).map((product) => (
                  <AnimatedSection key={product.id}>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <Card className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-500 h-full bg-card hover:shadow-2xl cursor-pointer">
                          <div className={`absolute inset-0 ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                          <div className="relative z-10 p-8">
                            <div className={`w-20 h-20 rounded-3xl ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                              <product.icon className="w-10 h-10 text-primary-foreground" />
                            </div>

                            <h3 className="text-4xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-base font-semibold text-muted-foreground mb-4">{product.tagline}</p>
                            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{product.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                              {product.highlights.map((highlight, idx) => (
                                <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                                  <Star className="w-3 h-3 mr-1" />
                                  {highlight}
                                </Badge>
                              ))}
                            </div>

                            {/* Metrics - keept it commented for now do not remove it */}
                            {/* <div className="flex gap-6 mb-6 pt-6 border-t border-divider">
                              {Object.entries(product.metrics).map(([key, value]) => (
                                <div key={key}>
                                  <div className="text-2xl font-bold text-primary">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                </div>
                              ))}
                            </div> */}

                            <a href={product.url} target="_blank" rel="noopener noreferrer" className="block w-full">
                              <Button
                                variant="ghost"
                                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-full"
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
              <Card className="relative overflow-hidden border-0 bg-primary p-12 sm:p-16 text-center shadow-2xl">
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
        <footer className="relative py-16 px-6 lg:px-12 border-t border-border bg-secondary/30">
          <div className="w-full">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <Link href="/" className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-bold text-foreground">AppShore</span>
                </Link>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Building intelligent solutions for tomorrow&apos;s challenges. We architect AI-driven platforms that transform industries and empower businesses.
                </p>
                <div className="flex gap-4">
                  <Code className="w-5 h-5 text-muted-foreground/50" />
                  <Database className="w-5 h-5 text-muted-foreground/50" />
                  <Network className="w-5 h-5 text-muted-foreground/50" />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Products</h3>
                <ul className="space-y-2">
                  {products.filter(p => p.enabled).map((product) => (
                    <li key={product.id}>
                      <a 
                        href={product.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {product.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-border text-center">
              <p className="text-muted-foreground">
                © 2025 AppShore LLP. All rights reserved. Building the future with AI.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
