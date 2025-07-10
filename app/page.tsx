'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ApiService } from '@/lib/api';
import { DynamicPage } from '@/components/dynamic-page';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturedCelebrities } from '@/components/sections/featured-celebrities';
import { ServicesSection } from '@/components/sections/services-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { StatsSection } from '@/components/sections/stats-section';
import { CTASection } from '@/components/sections/cta-section';

export default function Home() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHomePage();
  }, []);

  const loadHomePage = async () => {
    try {
      // Try to load dynamic home page content
      const page = await ApiService.getPageBySlug('home');
      setPageData(page);
    } catch (error) {
      console.error('Error loading home page:', error);
      // Fall back to static content if no dynamic page exists
      setPageData(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen page-background pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  // If we have dynamic page data with content blocks, use DynamicPage
  if (pageData && pageData.content_blocks && pageData.content_blocks.length > 0) {
    return <DynamicPage slug="home" />;
  }

  // Otherwise, use the original static layout
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