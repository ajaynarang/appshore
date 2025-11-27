'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { AnimatedGradient } from '@/components/animated-gradient';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Target,
  Eye,
  Heart,
  Users,
  Rocket,
  Brain,
  Code,
  Globe,
  Zap,
  Award,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lightbulb
} from 'lucide-react';

const values = [
  {
    icon: Brain,
    title: 'AI-First Mindset',
    description: 'We believe artificial intelligence is not just a tool, but the foundation of next-generation solutions.',
    color: 'bg-primary'
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Every pixel, every interaction, every feature is crafted with the end-user experience at its core.',
    color: 'bg-accent'
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We don&apos;t follow trends—we create them. Our products push boundaries and redefine possibilities.',
    color: 'bg-primary-dark'
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'Excellence is non-negotiable. We build systems that are robust, secure, and built to last.',
    color: 'bg-primary-light'
  }
];

const timeline = [
  {
    year: '2024',
    title: 'The Genesis',
    description: 'AppShore LLP was founded with a vision to build AI-driven solutions that transform industries.',
    icon: Sparkles
  },
  {
    year: '2024',
    title: 'First Products',
    description: 'Launched Oops! I Learn and Truck Pilot, revolutionizing education and fleet management.',
    icon: Rocket
  },
  {
    year: '2025',
    title: 'Expansion',
    description: 'Introduced Tourna-X, Parla, Shelfy, and NexaCart, expanding our AI ecosystem.',
    icon: TrendingUp
  },
  {
    year: 'Future',
    title: 'Global Impact',
    description: 'Scaling our solutions globally, touching millions of lives with intelligent technology.',
    icon: Globe
  }
];

const stats = [
  { label: 'AI Products', value: '6+', icon: Brain },
  { label: 'Industries Transformed', value: '5+', icon: Target },
  { label: 'Innovation Score', value: '10/10', icon: Award },
  { label: 'Code Quality', value: 'AAA', icon: Code }
];

const expertise = [
  'Natural Language Processing',
  'Computer Vision & OCR',
  'Predictive Analytics',
  'Real-time Data Processing',
  'Cloud Architecture & DevOps',
  'Mobile & Web Development',
  'UI/UX Design Excellence'
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

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AnimatedGradient />

      <main className="relative min-h-screen pt-20 bg-background">
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-secondary/30 opacity-50" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 px-6 py-3 text-base bg-primary text-primary-foreground border-0 shadow-xl">
                <Heart className="w-5 h-5 mr-2" />
                Our Story
              </Badge>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight">
                <span className="text-foreground">
                  Building Tomorrow,
                </span>
                <br />
                <span className="text-primary">
                  Today
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                We&apos;re a team of visionaries, engineers, and designers united by a single mission:
                to harness the power of AI to solve real-world problems and create products that truly matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full text-lg px-10 py-7 bg-primary text-primary-foreground hover:bg-primary-dark shadow-xl">
                    Join Our Mission
                    <Rocket className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/#products">
                  <Button size="lg" variant="outline" className="rounded-full text-lg px-10 py-7 border-2">
                    See Our Work
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-primary bg-card">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl font-bold text-card-foreground mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-1 gap-12">
              <AnimatedSection>
                <Card className="p-12 h-full border-2 hover:border-primary hover:shadow-2xl transition-all duration-500 bg-secondary/30">
                  <Target className="w-16 h-16 text-primary mb-6" />
                  <h2 className="text-4xl font-bold mb-6 text-card-foreground">Our Mission</h2>
                  <p className="text-xl text-card-foreground leading-relaxed">
                  Technology should speak your language. We&apos;re democratizing digital experiences by making AI-powered interfaces that understand you whether you type, talk, or show. No learning curve. No technical barriers. Just natural interaction that puts the power of technology in everyone&apos;s hands.
                  </p>

                  <p className="text-xl text-card-foreground leading-relaxed">
                  Everyone should be able to interact with digital tools as naturally as having a conversation with a neighbor.
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-secondary text-secondary-foreground border-border">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Core Values
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                  What Drives Us
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our values are the compass that guides every decision, every line of code, and every product we build.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, idx) => (
                  <AnimatedSection key={idx}>
                    <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary bg-card group">
                      <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-card-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Timeline */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-accent text-accent-foreground border-border">
                  <Zap className="w-4 h-4 mr-2" />
                  Our Journey
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                  The Road So Far
                </h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary" />

                <div className="space-y-12">
                  {timeline.map((item, idx) => (
                    <AnimatedSection key={idx}>
                      <div className="relative pl-20">
                        <div className="absolute left-0 w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-xl">
                          <item.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary bg-card">
                          <Badge className="mb-4 bg-secondary text-primary border-0">
                            {item.year}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-3 text-card-foreground">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </Card>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Expertise */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-primary-light text-primary-foreground border-border">
                  <Brain className="w-4 h-4 mr-2" />
                  Technical Excellence
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                  Our Expertise
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  World-class capabilities in cutting-edge technologies that power next-generation solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {expertise.map((skill, idx) => (
                  <AnimatedSection key={idx}>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary bg-card group">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-card-foreground font-medium">{skill}</span>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center">
              <Card className="p-16 border-0 bg-primary shadow-2xl">
                <Users className="w-20 h-20 mx-auto mb-6 text-primary-foreground" />
                <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
                  Want to Build the Future With Us?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                  We&apos;re always looking for talented individuals who share our passion for innovation and AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full text-lg px-10 py-7 bg-card text-foreground hover:bg-secondary shadow-xl">
                      Get In Touch
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/#products">
                    <Button size="lg" className="rounded-full text-lg px-10 py-7 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                      View Our Products
                      <Rocket className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </>
  );
}

