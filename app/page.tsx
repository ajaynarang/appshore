'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Truck, 
  BookOpen, 
  Trophy, 
  MessageCircle, 
  ShoppingCart,
  GraduationCap,
  ChevronRight,
  Zap,
  Brain,
  Target,
  Users,
  BarChart3,
  Star
} from 'lucide-react';

const products = [
  {
    id: 'oops-i-learn',
    name: 'Oops! I Learn',
    tagline: 'AI-Powered Personalized Learning',
    description: 'Revolutionary AI mentors that adapt their teaching style based on subjects - transforming education for grades 1-12 with gamification and offline integration.',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
    highlights: ['Subject-Aware AI', 'Hybrid Learning', 'Oopsies Rewards', 'Multi-Board Support']
  },
  {
    id: 'truck-pilot',
    name: 'Truck Pilot',
    tagline: 'Intelligent Fleet Management',
    description: 'AI-powered ERP platform for trucking companies. Automate dispatch operations, optimize routes, and maximize profitability with intelligent load matching.',
    icon: Truck,
    color: 'from-blue-500 to-cyan-500',
    highlights: ['AI Dispatch', 'Real-time Tracking', 'Load Optimization', 'Profit Intelligence']
  },
  {
    id: 'tourna-x',
    name: 'Tourna-X',
    tagline: 'Sports Tournament Revolution',
    description: 'Complete sports ecosystem for players, clubs, and communities. Organize tournaments, find groups, manage bookings, and gamify sports participation.',
    icon: Trophy,
    color: 'from-orange-500 to-red-500',
    highlights: ['Auto Fixtures', 'Player Rankings', 'Club Management', 'Quick Commerce']
  },
  {
    id: 'parla',
    name: 'Parla',
    tagline: 'Commerce on Chat',
    description: 'WhatsApp-native commerce platform. Businesses manage shops through casual messages, customers order conversationally - all powered by AI.',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-500',
    highlights: ['WhatsApp Native', 'Photo Menu OCR', 'Voice Orders', 'Smart Analytics']
  },
  {
    id: 'shelfy',
    name: 'Shelfy',
    tagline: 'Your Personal Library Intelligence',
    description: 'Scan barcodes or book covers to build your home library. Get AI-powered recommendations and insights linked to your reading preferences.',
    icon: BookOpen,
    color: 'from-amber-500 to-yellow-500',
    highlights: ['Barcode Scanning', 'AI Recommendations', 'Reading Analytics', 'Cover Recognition']
  },
  {
    id: 'nexgen-commerce',
    name: 'NexaCart',
    tagline: 'Next-Gen AI Commerce Platform',
    description: 'Revolutionary e-commerce platform leveraging AI for personalized shopping experiences, intelligent product discovery, and conversational checkout.',
    icon: ShoppingCart,
    color: 'from-indigo-500 to-purple-500',
    highlights: ['AI Shopping Assistant', 'Visual Search', 'Smart Personalization', 'Voice Commerce']
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              AppShore
            </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Products
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <Button className="rounded-full bg-gray-900 hover:bg-gray-800">
              Contact Us
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              <Zap className="w-4 h-4 mr-2" />
              Building the Future, One App at a Time
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight"
            {...fadeInUp}
          >
            Innovation
            <br />
            Meets Purpose
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We craft intelligent applications and platforms that solve real-world challenges. 
            From AI-driven learning to fleet management, we're building solutions that matter.
          </motion.p>

          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-gray-900 hover:bg-gray-800">
              Explore Our Products
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Feature Stats */}
        <motion.div 
          className="max-w-5xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { icon: Brain, label: 'AI-Powered', value: '100%' },
            { icon: Target, label: 'Purpose-Built', value: '6+' },
            { icon: Users, label: 'User-Focused', value: 'Always' },
            { icon: BarChart3, label: 'Data-Driven', value: 'Core' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-gray-400" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each solution designed with precision, powered by AI, and built to exceed expectations.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Card className="group relative overflow-hidden border-2 hover:border-gray-300 transition-all duration-300 h-full bg-white hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
                       style={{ backgroundImage: `linear-gradient(to bottom right, ${product.color})` }} />
                  
                  <div className="p-8 relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">{product.tagline}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="group-hover:bg-gray-900 group-hover:text-white transition-all duration-300"
                    >
                      Learn More
                      <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">AppShore LLP</span>
          </div>
          <p className="text-gray-600 mb-8">
            Building intelligent solutions for tomorrow's challenges
          </p>
          <p className="text-sm text-gray-500">
            © 2025 AppShore LLP. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
