
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Star, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    budget: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Mon-Fri 9am-6pm PST',
      contact: '+1 (888) 555-STAR',
      action: 'Call Now',
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'We respond within 2 hours',
      contact: 'hello@elitecelebrity.com',
      action: 'Send Email',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      subtitle: 'Available 24/7',
      contact: 'Start instant conversation',
      action: 'Chat Now',
      color: 'bg-purple-500'
    },
    {
      icon: Calendar,
      title: 'Book Consultation',
      subtitle: 'Free 30-min strategy call',
      contact: 'Schedule with our experts',
      action: 'Book Now',
      color: 'bg-yellow-500'
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking 4-6 weeks in advance for major celebrities, though we can often accommodate last-minute requests.'
    },
    {
      question: 'What is included in the booking fee?',
      answer: 'Our fee includes talent coordination, contract negotiation, logistics support, and on-site event management.'
    },
    {
      question: 'Do you handle international bookings?',
      answer: 'Yes, we coordinate celebrity bookings worldwide with full visa, travel, and accommodation support.'
    },
    {
      question: 'What if a celebrity cancels?',
      answer: 'We provide backup options and full insurance coverage for all confirmed bookings.'
    }
  ];

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
              Get in Touch
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
              <span className="text-primary">Let's Create Something</span>
              <br />
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
              Ready to bring A-list talent to your event? Our celebrity booking experts are here to make 
              your vision a reality with personalized service and exclusive access.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 section-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair mb-6">
              <span className="text-primary">Choose Your</span> <span className="gradient-text">Connection</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Multiple ways to reach our celebrity booking specialists, each designed for your convenience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="luxury-card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${method.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{method.title}</h3>
                <p className="text-sm text-secondary mb-4">{method.subtitle}</p>
                <p className="text-secondary font-medium mb-6">{method.contact}</p>
                <Button className="w-full premium-button group-hover:shadow-lg">
                  {method.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair">
                    Start Your <span className="gradient-text">Celebrity Booking</span>
                  </CardTitle>
                  <p className="text-secondary">Tell us about your event and we'll connect you with the perfect celebrity talent.</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-primary mb-2">Message Sent!</h3>
                      <p className="text-secondary">Our team will respond within 2 hours with celebrity options for your event.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventDate">Event Date</Label>
                          <Input
                            id="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label>Event Type</Label>
                          <Select value={formData.eventType} onValueChange={(value) => setFormData({...formData, eventType: value})}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select event type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="corporate">Corporate Event</SelectItem>
                              <SelectItem value="wedding">Wedding</SelectItem>
                              <SelectItem value="private">Private Party</SelectItem>
                              <SelectItem value="launch">Product Launch</SelectItem>
                              <SelectItem value="charity">Charity Event</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label>Budget Range</Label>
                          <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                            <SelectTrigger className="mt-2">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                              <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                              <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                              <SelectItem value="500k+">$500K+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Tell us about your event *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Describe your event, preferred celebrities, venue details, and any special requirements..."
                          className="mt-2"
                        />
                      </div>

                      <Button type="submit" className="w-full premium-button">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Office Info */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-2" />
                    Our Offices
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Los Angeles Headquarters</h4>
                    <p className="text-secondary">123 Celebrity Boulevard<br />Hollywood, CA 90210</p>
                    <div className="flex items-center mt-2 text-sm text-secondary">
                      <Clock className="h-4 w-4 mr-2" />
                      Mon-Fri: 9AM-6PM PST
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">New York Office</h4>
                    <p className="text-secondary">456 Broadway Suite 2000<br />New York, NY 10013</p>
                    <div className="flex items-center mt-2 text-sm text-secondary">
                      <Clock className="h-4 w-4 mr-2" />
                      Mon-Fri: 9AM-6PM EST
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-yellow-500 pl-4"
                    >
                      <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                      <p className="text-secondary text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="luxury-card bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-red-700 dark:text-red-400">
                    Emergency Booking Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 dark:text-red-300 mb-4">
                    Need a celebrity for an urgent event? Our emergency team is available 24/7.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Call Emergency Line: +1 (888) 911-STAR
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6 text-white">
              Ready to <span className="gradient-text">Book Your Celebrity?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join over 10,000 satisfied clients who trust Elite Celebrity for their most important events.
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-500 mr-2" />
                <span>500+ Celebrities</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>25,000+ Events</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-blue-500 mr-2" />
                <span>2hr Response Time</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
