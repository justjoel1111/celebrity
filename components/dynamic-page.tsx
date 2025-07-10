'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ApiService } from '@/lib/api';
import { DynamicContentBlock } from './dynamic-content-block';

interface DynamicPageProps {
  slug: string;
}

export function DynamicPage({ slug }: DynamicPageProps) {
  const [page, setPage] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPage();
  }, [slug]);

  const loadPage = async () => {
    try {
      setLoading(true);
      const pageData = await ApiService.getPageBySlug(slug);
      setPage(pageData);
    } catch (err) {
      console.error('Error loading page:', err);
      setError('Page not found');
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

  if (error || !page) {
    return (
      <div className="min-h-screen page-background pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-secondary">The page you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-background pt-16">
      {/* Page Header */}
      {page.featured_image && (
        <section className="relative h-64 overflow-hidden">
          <img
            src={page.featured_image}
            alt={page.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl font-bold font-playfair mb-4">{page.title}</h1>
              {page.description && (
                <p className="text-xl max-w-2xl mx-auto">{page.description}</p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Content Blocks */}
      <div className="space-y-0">
        {page.content_blocks
          ?.filter((block: any) => block.is_active)
          ?.sort((a: any, b: any) => a.sort_order - b.sort_order)
          ?.map((block: any, index: number) => (
            <DynamicContentBlock
              key={block.id}
              block={block}
              index={index}
            />
          ))}
      </div>

      {/* Default content if no blocks */}
      {(!page.content_blocks || page.content_blocks.length === 0) && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-playfair text-primary mb-6">
                {page.title}
              </h1>
              {page.description && (
                <p className="text-xl text-secondary max-w-3xl mx-auto">
                  {page.description}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}