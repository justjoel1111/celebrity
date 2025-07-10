
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Users, Calendar, Trophy, Award, Shield, Heart, Zap, Globe, Target, CheckCircle, ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AboutPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true });

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10,000+', color: 'text-blue-500' },
    { icon: Star, label: 'Celebrity Partners', value: '500+', color: 'text-yellow-500' },
    { icon: Calendar, label: 'Events Booked', value: '25,000+', color: 'text-green-500' },
    { icon: Trophy, label: 'Awards Won', value: '50+', color: 'text-purple-500' }
  ];

  const team = [
    {
      name: 'Alexandra Stone',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former Hollywood agent with 15+ years connecting brands with A-list talent.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Talent Relations',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Celebrity relationship expert with an exclusive network of top entertainers.'
    },
    {
      name: 'Sofia Rodriguez',
      role: 'Event Coordination Director',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Luxury event specialist ensuring flawless celebrity experiences worldwide.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Every booking is secured with comprehensive contracts and insurance coverage.'
    },
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We go above and beyond to create unforgettable celebrity experiences.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Quick response times and efficient booking processes for time-sensitive events.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide network of celebrities and international event coordination.'
    }
  ];

  return (
    <div className="min-h-screen page-background pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 section-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              About Elite Celebrity
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
              <span className="text-primary">Connecting Dreams with</span>
              <br />
              <span className="gradient-text">Celebrity Reality</span>
            </h1>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
              For over a decade, we've been the bridge between extraordinary events and world-class entertainment, 
              making the impossible possible with our exclusive celebrity network.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="luxury-card p-8 text-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Celebrity Event"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <Button
                  size="lg"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-yellow-500 hover:bg-yellow-600 text-black shadow-xl"
                >
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Watch our story: From startup to industry leader
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 section-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white to-gray-100 dark:from-zinc-800 dark:to-zinc-900 shadow-lg mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={statsInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-3xl font-bold text-primary mb-2"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-secondary font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold font-playfair mb-6">
                <span className="text-primary">Our</span> <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-secondary leading-relaxed">
                <p>
                  Founded in 2010 by entertainment industry veterans, Elite Celebrity began with a simple yet 
                  ambitious vision: to democratize access to A-list talent while maintaining the highest 
                  standards of professionalism and exclusivity.
                </p>
                <p>
                  What started as a boutique agency in Beverly Hills has evolved into the world's most trusted 
                  celebrity booking platform, serving clients across six continents and facilitating over 
                  25,000 successful celebrity engagements.
                </p>
                <p>
                  Today, we're proud to be the bridge between dreamers and stars, making the extraordinary 
                  accessible to those who dare to think beyond the ordinary.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                {['2010 Founded', '2015 Global Expansion', '2020 Digital Platform', '2024 Industry Leader'].map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-effect px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {milestone}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="luxury-card p-8">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Our Journey"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Milestone Moments</h3>
                    <p className="text-secondary">From our first celebrity booking to industry recognition</p>
                  </div>
                  <Trophy className="h-12 w-12 text-yellow-500" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <span className="text-primary">Our</span> <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              The principles that guide every interaction, every booking, and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="luxury-card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair mb-6">
              <span className="text-primary">Meet Our</span> <span className="gradient-text">Dream Team</span>
            </h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              The passionate professionals who make celebrity dreams come true, one booking at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="luxury-card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-br from-yellow-400/20 to-purple-500/20 group-hover:from-yellow-400/40 group-hover:to-purple-500/40 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{member.name}</h3>
                <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-4">{member.role}</p>
                <p className="text-secondary leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
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
              Ready to Work with <span className="gradient-text">the Best?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join thousands of satisfied clients who trust us with their most important events. 
              Let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="premium-button">
                <Link href="/booking">
                  Start Your Booking <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
