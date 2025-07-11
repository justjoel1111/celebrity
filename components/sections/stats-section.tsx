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
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: Calendar,
      number: '15K+',
      label: 'Events Completed',
      description: 'Successful bookings worldwide',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Users,
      number: '2.5M+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: Trophy,
      number: '99.8%',
      label: 'Success Rate',
      description: 'Guaranteed satisfaction',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Globe,
      number: '85+',
      label: 'Countries',
      description: 'Global service coverage',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Award,
      number: '150+',
      label: 'Award Winners',
      description: 'Grammy & Oscar recipients',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: Shield,
      number: '$2B+',
      label: 'Secured Bookings',
      description: 'Total transaction value',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
  ];

  return (
    <section className="py-24 section-background relative overflow-hidden">
      {/* FIXED: Background Elements with better light mode visibility */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/5 dark:bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/5 dark:bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/3 dark:bg-blue-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="responsive-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold font-playfair mb-8">
            <span className="gradient-text">Trusted by Thousands</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Experience the difference with our premium celebrity booking service. 
            These numbers represent years of excellence and countless unforgettable moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="stats-card">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-2xl ${stat.bgColor} mb-8 group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className={`h-12 w-12 ${stat.color}`} />
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className={`text-5xl sm:text-6xl font-bold ${stat.color} mb-4 font-playfair`}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3">{stat.label}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FIXED: Additional Trust Indicators with better styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-8">
              <div className="text-3xl font-bold text-green-500 mb-2">ISO 27001</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Security Certified</div>
            </div>
            <div className="luxury-card p-8">
              <div className="text-3xl font-bold text-blue-500 mb-2">A+ Rating</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Better Business Bureau</div>
            </div>
            <div className="luxury-card p-8">
              <div className="text-3xl font-bold text-purple-500 mb-2">5-Star</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Average Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}