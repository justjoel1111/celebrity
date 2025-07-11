'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Calendar, Trophy, Award, Music, Shield, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="hero-background relative overflow-hidden">
      {/* Enhanced Background with better light mode support */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-zinc-900 dark:to-black" />
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-[0.08] dark:opacity-20" />
        <div className="hero-overlay" />
        
        {/* Enhanced geometric patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/10 dark:bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-48 h-48 bg-purple-400/10 dark:bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-32 w-80 h-80 bg-blue-400/10 dark:bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-green-400/10 dark:bg-green-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400/5 dark:bg-pink-400/15 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Enhanced floating interactive elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: Star, color: 'text-yellow-500', top: '15%', left: '8%', delay: 1, rotation: 0 },
          { icon: Music, color: 'text-purple-500', top: '25%', right: '12%', delay: 1.2, rotation: 45 },
          { icon: Trophy, color: 'text-green-500', bottom: '25%', left: '10%', delay: 1.4, rotation: -30 },
          { icon: Award, color: 'text-blue-500', top: '55%', right: '15%', delay: 1.6, rotation: 20 },
          { icon: Users, color: 'text-red-500', bottom: '15%', right: '8%', delay: 1.8, rotation: -15 },
          { icon: Calendar, color: 'text-indigo-500', top: '35%', left: '3%', delay: 2, rotation: 60 },
          { icon: Shield, color: 'text-orange-500', top: '70%', left: '5%', delay: 2.2, rotation: -45 },
          { icon: Zap, color: 'text-pink-500', bottom: '40%', right: '5%', delay: 2.4, rotation: 30 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ 
              opacity: [0, 0.9, 0.9, 0.9], 
              scale: [0.5, 1.3, 1, 1], 
              rotate: [0, item.rotation, item.rotation * 0.8, item.rotation],
              y: [0, -20, 0, -10, 0]
            }}
            transition={{ 
              delay: item.delay, 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute glass-effect rounded-2xl p-4 backdrop-blur-xl pointer-events-auto hover:scale-110 transition-transform cursor-pointer shadow-xl border border-gray-300/60 dark:border-white/20"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right
            }}
          >
            <item.icon className={`h-6 w-6 ${item.color}`} />
          </motion.div>
        ))}

        {/* Enhanced background particles */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Enhanced content */}
      <div className="relative z-10 responsive-container responsive-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8 max-w-6xl mx-auto"
        >
          {/* Enhanced badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400/30 to-yellow-600/30 border-2 border-yellow-500/50 text-yellow-700 dark:text-yellow-400 text-sm font-bold backdrop-blur-xl shadow-2xl"
          >
            <Star className="h-5 w-5 mr-3 animate-pulse" />
            #1 Premium Celebrity Booking Platform Worldwide
          </motion.div>

          {/* Enhanced main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-playfair leading-tight">
            <span className="light-mode-text dark-mode-text">Book</span>{' '}
            <span className="gradient-text">World-Class</span>
            <br />
            <span className="light-mode-text dark-mode-text">Celebrities</span>
          </h1>

          {/* Enhanced subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl light-mode-subtext dark-mode-subtext max-w-5xl mx-auto leading-relaxed font-medium">
            Connect with A-list celebrities, Grammy winners, Oscar nominees, and global superstars for your most important events. 
            Experience luxury entertainment booking with white-glove service and guaranteed satisfaction.
          </p>

          {/* Enhanced features list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base light-mode-muted dark-mode-muted"
          >
            {[
              { text: 'Verified A-List Talent', color: 'bg-green-500' },
              { text: 'Instant Availability Check', color: 'bg-blue-500' },
              { text: 'Secure Payment Processing', color: 'bg-purple-500' },
              { text: '24/7 Concierge Support', color: 'bg-orange-500' }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/90 dark:bg-black/50 px-4 py-3 rounded-full backdrop-blur-sm shadow-lg border border-gray-300/60 dark:border-white/20">
                <div className={`w-3 h-3 ${feature.color} rounded-full animate-pulse`}></div>
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Enhanced CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button size="lg" className="premium-button group text-lg px-12 py-6 shadow-2xl">
              <Link href="/celebrities" className="flex items-center">
                Browse Celebrities
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="glass-effect light-mode-text dark-mode-text border-2 border-gray-400 dark:border-white/40 hover:bg-gray-100 dark:hover:bg-white/10 group text-lg px-12 py-6 shadow-xl">
              <Play className="mr-3 h-6 w-6" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Enhanced trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-20 pt-16 border-t-2 border-gray-300/60 dark:border-white/20"
          >
            {[
              { number: '500+', label: 'Verified Celebrities', sublabel: 'Grammy & Oscar Winners' },
              { number: '15K+', label: 'Events Completed', sublabel: 'Worldwide Success' },
              { number: '85+', label: 'Countries Served', sublabel: 'Global Reach' },
              { number: '99.8%', label: 'Success Rate', sublabel: 'Guaranteed Satisfaction' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-500 mb-3 font-playfair">{stat.number}</div>
                <div className="text-sm sm:text-base light-mode-text dark-mode-text font-bold">{stat.label}</div>
                <div className="text-xs sm:text-sm light-mode-muted dark-mode-muted mt-1">{stat.sublabel}</div>
              </div>
            ))}
          </motion.div>

          {/* Enhanced client logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-20"
          >
            <p className="text-sm light-mode-muted dark-mode-muted mb-10 font-semibold">Trusted by Fortune 500 companies and luxury brands worldwide</p>
            <div className="flex justify-center items-center space-x-8 sm:space-x-16 opacity-70 hover:opacity-100 transition-opacity">
              {['NETFLIX', 'APPLE', 'GOOGLE', 'TESLA'].map((brand, index) => (
                <div key={index} className="text-xl sm:text-2xl font-bold light-mode-muted dark-mode-muted hover:text-yellow-500 transition-colors cursor-pointer">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-gray-500 dark:border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/30 dark:bg-black/30">
          <div className="w-2 h-4 bg-gray-700 dark:bg-white/70 rounded-full mt-3 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}