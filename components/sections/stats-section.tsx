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
      bgColor: 'bg-yellow-500/20',
    },
    {
      icon: Calendar,
      number: '15K+',
      label: 'Events Completed',
      description: 'Successful bookings worldwide',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
    },
    {
      icon: Users,
      number: '2.5M+',
      label: 'Happy Clients',
      description: 'Satisfied customers globally',
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
    },
    {
      icon: Trophy,
      number: '99.8%',
      label: 'Success Rate',
      description: 'Guaranteed satisfaction',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20',
    },
    {
      icon: Globe,
      number: '85+',
      label: 'Countries',
      description: 'Global service coverage',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
    },
    {
      icon: Award,
      number: '150+',
      label: 'Award Winners',
      description: 'Grammy & Oscar recipients',
      color: 'text-red-500',
      bgColor: 'bg-red-500/20',
    },
    {
      icon: Shield,
      number: '$2B+',
      label: 'Secured Bookings',
      description: 'Total transaction value',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/20',
    },
    {
      icon: Zap,
      number: '24/7',
      label: 'Support Available',
      description: 'Round-the-clock assistance',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/20',
    },
  ];

  return (
    <section className="py-24 section-background relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/5 dark:bg-blue-400/15 rounded-full blur-3xl"></div>
      </div>

      <div className="responsive-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair mb-8">
            <span className="gradient-text">Trusted by Thousands</span>
          </h2>
          <p className="text-xl sm:text-2xl light-mode-subtext dark-mode-subtext max-w-4xl mx-auto leading-relaxed">
            Experience the difference with our premium celebrity booking service. 
            These numbers represent years of excellence and countless unforgettable moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="stats-card">
                <div className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${stat.bgColor} mb-6 sm:mb-8 group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className={`h-10 w-10 sm:h-12 sm:w-12 ${stat.color}`} />
                </div>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${stat.color} mb-4 font-playfair`}
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold light-mode-text dark-mode-text mb-3">{stat.label}</h3>
                <p className="light-mode-muted dark-mode-muted leading-relaxed text-sm sm:text-base">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="luxury-card p-6 sm:p-8">
              <div className="text-2xl sm:text-3xl font-bold text-green-500 mb-2">ISO 27001</div>
              <div className="text-sm light-mode-muted dark-mode-muted">Security Certified</div>
            </div>
            <div className="luxury-card p-6 sm:p-8">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2">A+ Rating</div>
              <div className="text-sm light-mode-muted dark-mode-muted">Better Business Bureau</div>
            </div>
            <div className="luxury-card p-6 sm:p-8">
              <div className="text-2xl sm:text-3xl font-bold text-purple-500 mb-2">5-Star</div>
              <div className="text-sm light-mode-muted dark-mode-muted">Average Client Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}