'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Users, Calendar, Trophy, Award, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden page-background">
      {/* Background Video/Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-black dark:via-zinc-900 dark:to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />
      </div>

      {/* Floating Interactive Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { icon: Star, color: 'text-yellow-500', top: '20%', left: '10%', delay: 1, rotation: 0 },
          { icon: Music, color: 'text-purple-500', top: '30%', right: '15%', delay: 1.2, rotation: 45 },
          { icon: Trophy, color: 'text-green-500', bottom: '30%', left: '15%', delay: 1.4, rotation: -30 },
          { icon: Award, color: 'text-blue-500', top: '60%', right: '20%', delay: 1.6, rotation: 20 },
          { icon: Users, color: 'text-red-500', bottom: '20%', right: '10%', delay: 1.8, rotation: -15 },
          { icon: Calendar, color: 'text-indigo-500', top: '40%', left: '5%', delay: 2, rotation: 60 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 1], 
              scale: [0.5, 1.2, 1, 1], 
              rotate: [0, item.rotation, item.rotation * 0.8, item.rotation],
              y: [0, -10, 0, -5, 0]
            }}
            transition={{ 
              delay: item.delay, 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="absolute glass-effect rounded-full p-4 backdrop-blur-md pointer-events-auto hover:scale-110 transition-transform cursor-pointer"
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

        {/* Animated Background Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-sm font-medium backdrop-blur-sm"
          >
            <Star className="h-4 w-4 mr-2" />
            #1 Premium Celebrity Booking Platform Worldwide
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-playfair leading-tight">
            <span className="text-primary">Book</span>{' '}
            <span className="gradient-text">World-Class</span>
            <br />
            <span className="text-primary">Celebrities</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Connect with A-list celebrities, Grammy winners, Oscar nominees, and global superstars for your most important events. 
            Experience luxury entertainment booking with white-glove service and guaranteed satisfaction.
          </p>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-secondary"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Verified A-List Talent</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Instant Availability Check</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Secure Payment Processing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>24/7 Concierge Support</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="premium-button group text-lg px-10 py-6">
              <Link href="/celebrities" className="flex items-center">
                Browse Celebrities
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="glass-effect-light text-primary border-gray-300 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 group text-lg px-10 py-6">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-200 dark:border-white/10"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-sm text-muted">Verified Celebrities</div>
              <div className="text-xs text-muted mt-1">Grammy & Oscar Winners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">15K+</div>
              <div className="text-sm text-muted">Events Completed</div>
              <div className="text-xs text-muted mt-1">Worldwide Success</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">85+</div>
              <div className="text-sm text-muted">Countries Served</div>
              <div className="text-xs text-muted mt-1">Global Reach</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">99.8%</div>
              <div className="text-sm text-muted">Success Rate</div>
              <div className="text-xs text-muted mt-1">Guaranteed Satisfaction</div>
            </div>
          </motion.div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="mt-16"
          >
            <p className="text-sm text-muted mb-8">Trusted by Fortune 500 companies and luxury brands worldwide</p>
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="text-2xl font-bold text-muted">NETFLIX</div>
              <div className="text-2xl font-bold text-muted">APPLE</div>
              <div className="text-2xl font-bold text-muted">GOOGLE</div>
              <div className="text-2xl font-bold text-muted">TESLA</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 dark:bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}