'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HeroSection } from './sections/hero-section';
import { FeaturedCelebrities } from './sections/featured-celebrities';
import { ServicesSection } from './sections/services-section';
import { TestimonialsSection } from './sections/testimonials-section';
import { StatsSection } from './sections/stats-section';
import { CTASection } from './sections/cta-section';

interface DynamicContentBlockProps {
  block: {
    id: string;
    type: string;
    title?: string;
    content: any;
    sort_order: number;
  };
  index: number;
}

export function DynamicContentBlock({ block, index }: DynamicContentBlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const renderBlock = () => {
    switch (block.type) {
      case 'hero':
        return <HeroSection />;
      
      case 'stats':
        return <StatsSection />;
      
      case 'celebrities':
        return <FeaturedCelebrities />;
      
      case 'features':
        return <ServicesSection />;
      
      case 'testimonials':
        return <TestimonialsSection />;
      
      case 'cta':
        return <CTASection />;
      
      case 'text':
        return (
          <section className="py-20 section-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="prose prose-lg max-w-none dark:prose-invert"
              >
                {block.title && (
                  <h2 className="text-4xl font-bold font-playfair text-primary mb-8">
                    {block.title}
                  </h2>
                )}
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: block.content.html || block.content.text || '' 
                  }} 
                />
              </motion.div>
            </div>
          </section>
        );
      
      case 'image':
        return (
          <section className="py-20 section-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                {block.title && (
                  <h2 className="text-4xl font-bold font-playfair text-primary mb-8">
                    {block.title}
                  </h2>
                )}
                <img
                  src={block.content.url}
                  alt={block.content.alt || block.title || ''}
                  className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
                />
                {block.content.caption && (
                  <p className="text-secondary mt-4 italic">
                    {block.content.caption}
                  </p>
                )}
              </motion.div>
            </div>
          </section>
        );
      
      case 'gallery':
        return (
          <section className="py-20 section-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                {block.title && (
                  <h2 className="text-4xl font-bold font-playfair text-primary mb-8 text-center">
                    {block.title}
                  </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {block.content.images?.map((image: any, imgIndex: number) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: imgIndex * 0.1 }}
                      className="aspect-square rounded-lg overflow-hidden shadow-lg"
                    >
                      <img
                        src={image.url}
                        alt={image.alt || `Gallery image ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        );
      
      case 'video':
        return (
          <section className="py-20 section-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                {block.title && (
                  <h2 className="text-4xl font-bold font-playfair text-primary mb-8">
                    {block.title}
                  </h2>
                )}
                <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src={block.content.url}
                    title={block.title || 'Video'}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                {block.content.description && (
                  <p className="text-secondary mt-6 max-w-2xl mx-auto">
                    {block.content.description}
                  </p>
                )}
              </motion.div>
            </div>
          </section>
        );
      
      default:
        return null;
    }
  };

  return renderBlock();
}