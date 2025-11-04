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
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Every pixel, every interaction, every feature is crafted with the end-user experience at its core.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We don&apos;t follow trends—we create them. Our products push boundaries and redefine possibilities.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Shield,
    title: 'Quality & Reliability',
    description: 'Excellence is non-negotiable. We build systems that are robust, secure, and built to last.',
    color: 'from-green-500 to-emerald-500'
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

      <main className="relative min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 opacity-50" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 px-6 py-3 text-base bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-xl">
                <Heart className="w-5 h-5 mr-2" />
                Our Story
              </Badge>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
                  Building Tomorrow,
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Today
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                We&apos;re a team of visionaries, engineers, and designers united by a single mission: 
                to harness the power of AI to solve real-world problems and create products that truly matter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full text-lg px-10 py-7 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-xl">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                  <Card key={idx} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedSection>
                <Card className="p-12 h-full border-2 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-pink-50">
                  <Target className="w-16 h-16 text-purple-600 mb-6" />
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To democratize access to intelligent technology by building AI-powered solutions 
                    that are intuitive, powerful, and accessible to everyone. We believe technology 
                    should empower, not complicate.
                  </p>
                </Card>
              </AnimatedSection>

              <AnimatedSection>
                <Card className="p-12 h-full border-2 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <Eye className="w-16 h-16 text-blue-600 mb-6" />
                  <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    To be the world&apos;s most innovative AI product company, creating solutions that 
                    transform industries, enrich lives, and push the boundaries of what&apos;s possible 
                    with artificial intelligence.
                  </p>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-purple-100 text-purple-700 border-purple-200">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Core Values
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  What Drives Us
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our values are the compass that guides every decision, every line of code, and every product we build.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, idx) => (
                  <AnimatedSection key={idx}>
                    <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 group">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Timeline */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
                  <Zap className="w-4 h-4 mr-2" />
                  Our Journey
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  The Road So Far
                </h2>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-blue-600 to-pink-600" />

                <div className="space-y-12">
                  {timeline.map((item, idx) => (
                    <AnimatedSection key={idx}>
                      <div className="relative pl-20">
                        <div className="absolute left-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl">
                          <item.icon className="w-8 h-8 text-white" />
                        </div>
                        <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
                          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-0">
                            {item.year}
                          </Badge>
                          <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <Badge className="mb-6 px-4 py-2 bg-green-100 text-green-700 border-green-200">
                  <Brain className="w-4 h-4 mr-2" />
                  Technical Excellence
                </Badge>
                <h2 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Our Expertise
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  World-class capabilities in cutting-edge technologies that power next-generation solutions.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {expertise.map((skill, idx) => (
                  <AnimatedSection key={idx}>
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200 group">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-900 font-medium">{skill}</span>
                      </div>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto text-center">
              <Card className="p-16 border-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 shadow-2xl">
                <Users className="w-20 h-20 mx-auto mb-6 text-white" />
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Want to Build the Future With Us?
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                  We&apos;re always looking for talented individuals who share our passion for innovation and AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" className="rounded-full text-lg px-10 py-7  shadow-xl">
                      Get In Touch
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/#products">
                    <Button size="lg" className="rounded-full text-lg px-10 py-7 border-2 border-white ">
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

