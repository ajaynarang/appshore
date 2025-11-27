'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { AnimatedGradient } from '@/components/animated-gradient';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  HelpCircle,
  Rocket,
  CheckCircle2,
  Linkedin,
  Calendar,
  X
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email anytime',
    value: 'admin@appshore.in',
    link: 'mailto:admin@appshore.in',
    color: 'bg-primary'
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Fri from 9am to 6pm',
    value: '+91 (XXX) XXX-XXXX',
    link: 'tel:+91XXXXXXXXXX',
    color: 'bg-accent'
  },
//   {
//     icon: MapPin,
//     title: 'Visit Us',
//     description: 'Come say hello',
//     value: 'India',
//     link: '#',
//     color: 'bg-primary-dark'
//   },
//   {
//     icon: Calendar,
//     title: 'Schedule a Call',
//     description: 'Book a consultation',
//     value: 'Schedule Now',
//     link: '#',
//     color: 'bg-primary-light'
//   }
];

const inquiryTypes = [
  { value: 'general', label: 'General Inquiry', icon: HelpCircle },
  { value: 'product', label: 'Product Demo', icon: Rocket },
//   { value: 'partnership', label: 'Partnership', icon: Briefcase },
//   { value: 'career', label: 'Career Opportunities', icon: Users },
  { value: 'support', label: 'Technical Support', icon: MessageSquare }
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', link: '#' },
  { icon: X, label: 'X', link: '#' },
//   { icon: Github, label: 'Github', link: '#' }
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
                <MessageSquare className="w-5 h-5 mr-2" />
                Let&apos;s Connect
              </Badge>

              <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-8 leading-tight">
                <span className="text-foreground">
                  Get in
                </span>
                <br />
                <span className="text-primary">
                  Touch
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
                Have a project in mind? Want to learn more about our products?
                We&apos;d love to hear from you. Let&apos;s build something amazing together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <AnimatedSection>
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {contactMethods.map((method, idx) => (
                  <motion.a
                    key={idx}
                    href={method.link}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary bg-card group cursor-pointer">
                      <div className={`w-14 h-14 rounded-2xl ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <method.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-card-foreground">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      <p className="text-sm font-semibold text-card-foreground">{method.value}</p>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Contact Form Section */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <AnimatedSection>
                <Card className="p-8 sm:p-12 border-2 shadow-xl bg-card">
                  <h2 className="text-4xl font-bold mb-3 text-card-foreground">Send us a message</h2>
                  <p className="text-muted-foreground mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary-light/20 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-card-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground text-center">Thank you for reaching out. We&apos;ll be in touch soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => handleChange('company', e.target.value)}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 XXX XXX XXXX"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">What can we help you with? *</Label>
                        <Select required value={formData.inquiryType} onValueChange={(value) => handleChange('inquiryType', value)}>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex items-center gap-2">
                                  <type.icon className="w-4 h-4" />
                                  {type.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your project or inquiry..."
                          required
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          className="min-h-32 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full rounded-full text-lg py-6 bg-primary text-primary-foreground hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </Card>
              </AnimatedSection>

              {/* Info Section */}
              <div className="space-y-8">
                <AnimatedSection>
                  <Card className="p-8 border-2 bg-secondary/30">
                    <Rocket className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-3 text-card-foreground">Ready to Start?</h3>
                    <p className="text-card-foreground mb-6 leading-relaxed">
                      Whether you&apos;re looking to transform your business with AI, explore our products,
                      or discuss a partnership opportunity, we&apos;re here to help.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-card-foreground">Free initial consultation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-card-foreground">24-48 hours response time</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-card-foreground">Custom solution proposals</span>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

              

                <AnimatedSection>
                  <Card className="p-8 border-2 bg-card">
                    <h3 className="text-xl font-bold mb-4 text-card-foreground">Follow Us</h3>
                    <p className="text-muted-foreground mb-6">Stay updated with our latest products and innovations.</p>
                    <div className="flex gap-3">
                      {socialLinks.map((social, idx) => (
                        <a
                          key={idx}
                          href={social.link}
                          className={`w-12 h-12 rounded-xl bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300`}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <HelpCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Check out our frequently asked questions or reach out directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 border-2">
                  View FAQ
                  <HelpCircle className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-primary text-primary-foreground">
                  Schedule a Call
                  <Calendar className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </main>
    </>
  );
}

