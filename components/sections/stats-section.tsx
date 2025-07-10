'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Users, Star, Calendar, Award, Globe, Shield, Zap } from 'lucide-react';

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const stats = [
    {
      icon: Star,
      number: '500+',
      label: 'Verified Celebrities',
      description: 'A-list performers ready to book',
      color: 'text-yellow-500',
    },
    {
      icon: Calendar,
      number: '15K+',
      label: 'Events Completed',
      description: 'Successful bookings worldwide',
      color: 'text-blue-500',
    },
    {
      icon: Users,
      number: '2.5M+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
      color: 'text-green-500',
    },
    {
      icon: Trophy,
      number: '99.8%',
      label: 'Success Rate',
      description: 'Guaranteed satisfaction',
      color: 'text-purple-500',
    },
    {
      icon: Globe,
      number: '85+',
      label: 'Countries',
      description: 'Global service coverage',
      color: 'text-orange-500',
    },
    {
      icon: Award,
      number: '150+',
      label: 'Award Winners',
      description: 'Grammy & Oscar recipients',
      color: 'text-red-500',
    },
    {
      icon: Shield,
      number: '$2B+',
      label: 'Secured Bookings',
      description: 'Total transaction value',
      color: 'text-indigo-500',
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance',
      color: 'text-pink-500',
    },
  ];

  return (
    <section className="py-24 section-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold font-playfair mb-6">
            <span className="gradient-text">Trusted by Thousands</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Experience the difference with our premium celebrity booking service. 
            These numbers represent years of excellence and countless unforgettable moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="luxury-card p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-800 dark:to-zinc-700 mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className={`text-5xl font-bold ${stat.color} mb-3`}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl font-semibold text-primary mb-2">{stat.label}</h3>
                <p className="text-muted text-sm leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-6">
              <div className="text-3xl font-bold text-green-500 mb-2">ISO 27001</div>
              <div className="text-sm text-secondary">Security Certified</div>
            </div>
            <div className="luxury-card p-6">
              <div className="text-3xl font-bold text-blue-500 mb-2">A+ Rating</div>
              <div className="text-sm text-secondary">Better Business Bureau</div>
            </div>
            <div className="luxury-card p-6">
              <div className="text-3xl font-bold text-purple-500 mb-2">5-Star</div>
              <div className="text-sm text-secondary">Average Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}