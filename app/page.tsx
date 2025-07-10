'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedCelebrities } from '@/components/sections/featured-celebrities';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <StatsSection />
        <FeaturedCelebrities />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </motion.div>
    </div>
  );
}