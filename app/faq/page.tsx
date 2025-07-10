
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Clock, DollarSign, Shield, Calendar, Users, Star, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Link from 'next/link';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<string[]>(['general-1']);

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: HelpCircle,
      color: 'bg-blue-500',
      faqs: [
        {
          id: 'general-1',
          question: 'How does Elite Celebrity Booking work?',
          answer: 'Elite Celebrity Booking connects you with world-class celebrities for your events. Simply tell us about your event, budget, and preferred talent, and our expert team will handle all negotiations, contracts, and logistics to secure your perfect celebrity appearance.'
        },
        {
          id: 'general-2',
          question: 'What types of events do you serve?',
          answer: 'We serve all types of events including corporate functions, private parties, weddings, product launches, charity galas, grand openings, brand activations, and more. No event is too big or too small for our team.'
        },
        {
          id: 'general-3',
          question: 'How far in advance should I book?',
          answer: 'We recommend booking 4-6 weeks in advance for major A-list celebrities. However, our team can often accommodate last-minute requests with 1-2 weeks notice, depending on celebrity availability and event requirements.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Payment',
      icon: DollarSign,
      color: 'bg-green-500',
      faqs: [
        {
          id: 'pricing-1',
          question: 'How much does it cost to book a celebrity?',
          answer: 'Celebrity fees vary widely based on their popularity, availability, event type, location, and duration. Fees can range from $10,000 for emerging talent to $1M+ for A-list superstars. We provide transparent pricing and work within your budget to find the perfect match.'
        },
        {
          id: 'pricing-2',
          question: 'What is included in the booking fee?',
          answer: 'Our booking fee includes talent negotiation, contract drafting, logistics coordination, travel arrangements, technical requirements management, on-site event support, and full insurance coverage. There are no hidden fees.'
        },
        {
          id: 'pricing-3',
          question: 'When do I need to pay?',
          answer: 'Typically, we require a 50% deposit upon contract signing and the remaining 50% two weeks before the event. We accept wire transfers, certified checks, and can accommodate custom payment schedules for larger bookings.'
        }
      ]
    },
    {
      id: 'booking',
      title: 'Booking Process',
      icon: Calendar,
      color: 'bg-purple-500',
      faqs: [
        {
          id: 'booking-1',
          question: 'What information do you need to get started?',
          answer: 'We need your event date, location, type of event, budget range, preferred celebrities, expected audience size, and any special requirements. The more details you provide, the better we can match you with suitable talent.'
        },
        {
          id: 'booking-2',
          question: 'Can you guarantee a specific celebrity will be available?',
          answer: 'While we cannot guarantee availability until we check with the celebrity\'s representatives, our extensive network and relationships give us the best chance of securing your preferred talent. We always provide backup options.'
        },
        {
          id: 'booking-3',
          question: 'What happens if a celebrity cancels?',
          answer: 'All our bookings include comprehensive insurance coverage. If a celebrity cancels due to illness or emergency, we immediately work to secure a suitable replacement or provide a full refund according to our cancellation policy.'
        }
      ]
    },
    {
      id: 'logistics',
      title: 'Event Logistics',
      icon: Users,
      color: 'bg-orange-500',
      faqs: [
        {
          id: 'logistics-1',
          question: 'Do you handle travel and accommodation?',
          answer: 'Yes, we coordinate all travel arrangements including flights, ground transportation, and luxury accommodations. We ensure celebrities arrive refreshed and ready to deliver an outstanding performance.'
        },
        {
          id: 'logistics-2',
          question: 'What technical requirements are needed?',
          answer: 'Technical requirements vary by celebrity and performance type. Our team provides detailed technical riders covering sound, lighting, staging, security, and backstage requirements. We coordinate with your venue to ensure everything is perfect.'
        },
        {
          id: 'logistics-3',
          question: 'Do you provide on-site event management?',
          answer: 'Absolutely! Our experienced event coordinators will be on-site to manage celebrity arrivals, coordinate with your event team, handle any last-minute changes, and ensure the celebrity appearance exceeds expectations.'
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Legal',
      icon: Shield,
      color: 'bg-red-500',
      faqs: [
        {
          id: 'security-1',
          question: 'How do you ensure contract compliance?',
          answer: 'All our contracts are drafted by entertainment lawyers and include detailed performance requirements, cancellation policies, and protection clauses. We monitor compliance throughout the booking process.'
        },
        {
          id: 'security-2',
          question: 'What security measures are in place?',
          answer: 'We coordinate with professional security teams, venue security, and local law enforcement as needed. Security requirements are outlined in celebrity contracts and implemented according to their specific needs.'
        },
        {
          id: 'security-3',
          question: 'How do you protect client confidentiality?',
          answer: 'All client information and celebrity bookings are covered by strict confidentiality agreements. We never disclose client details or event information without explicit permission from all parties involved.'
        }
      ]
    }
  ];

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="min-h-screen page-background pt-16">
      {/* Hero Section */}
      <section className="py-20 section-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-500/20 text-blue-700 dark:text-blue-400 border-blue-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
              <span className="text-primary">Get Your</span>
              <br />
              <span className="gradient-text">Questions Answered</span>
            </h1>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about booking celebrities, our process, pricing, and more. 
              Can't find what you're looking for? Our team is here to help.
            </p>
          </motion.div>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg glass-effect"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 section-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold font-playfair text-center mb-12">
              <span className="text-primary">Browse by</span> <span className="gradient-text">Category</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {faqCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="luxury-card p-6 text-center group hover:shadow-xl transition-all duration-300"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{category.title}</h3>
                  <p className="text-secondary text-sm">{category.faqs.length} questions</p>
                </motion.div>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${category.color} mr-4`}>
                      <category.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-playfair text-primary">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: faqIndex * 0.1 }}
                      >
                        <Collapsible
                          open={openItems.includes(faq.id)}
                          onOpenChange={() => toggleItem(faq.id)}
                        >
                          <CollapsibleTrigger asChild>
                            <Card className="luxury-card cursor-pointer hover:shadow-lg transition-all duration-300 group">
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                  <h4 className="text-lg font-semibold text-primary group-hover:text-yellow-600 transition-colors">
                                    {faq.question}
                                  </h4>
                                  <ChevronDown 
                                    className={`h-5 w-5 text-secondary transition-transform duration-300 ${
                                      openItems.includes(faq.id) ? 'transform rotate-180' : ''
                                    }`} 
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-2">
                            <Card className="glass-effect border-l-4 border-yellow-500">
                              <CardContent className="p-6">
                                <p className="text-secondary leading-relaxed">{faq.answer}</p>
                              </CardContent>
                            </Card>
                          </CollapsibleContent>
                        </Collapsible>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">No FAQs found</h3>
                  <p className="text-secondary">Try adjusting your search terms or browse all categories.</p>
                </div>
                <Button onClick={() => setSearchTerm('')} variant="outline">
                  Clear Search
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6 text-white">
              Still Have <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Our celebrity booking experts are available 24/7 to answer your questions and help you 
              plan the perfect celebrity experience for your event.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                subtitle: 'Speak with an expert',
                action: 'Call Now',
                contact: '+1 (888) 555-STAR',
                color: 'bg-blue-500'
              },
              {
                icon: MessageCircle,
                title: 'Live Chat',
                subtitle: 'Instant support',
                action: 'Start Chat',
                contact: 'Available 24/7',
                color: 'bg-green-500'
              },
              {
                icon: Calendar,
                title: 'Book Consultation',
                subtitle: 'Free strategy session',
                action: 'Schedule Now',
                contact: '30-minute call',
                color: 'bg-purple-500'
              }
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-effect p-8 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{method.subtitle}</p>
                <p className="text-gray-400 font-medium mb-6">{method.contact}</p>
                <Button asChild className="premium-button w-full">
                  <Link href="/contact">{method.action}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
