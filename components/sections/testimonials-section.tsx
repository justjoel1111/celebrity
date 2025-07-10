'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getTestimonials } from '@/lib/supabase';
import type { Testimonial } from '@/lib/supabase';

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const data = await getTestimonials(true); // Get featured testimonials
      setTestimonials(data);
    } catch (error) {
      console.error('Error loading testimonials:', error);
      // Fallback data
      setTestimonials([
        {
          id: '1',
          name: 'Sarah Johnson',
          role: 'Event Director, Fortune 500 Company',
          image_url: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          rating: 5,
          content: "Elite Celebrity Booking made our corporate event unforgettable. The professionalism and attention to detail were exceptional. Our celebrity guest was perfectly matched to our audience.",
          featured: true,
          created_at: '',
          updated_at: '',
        },
        {
          id: '2',
          name: 'Michael Chen',
          role: 'Wedding Planner, Luxury Weddings',
          image_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          rating: 5,
          content: "I've worked with many booking agencies, but none compare to Elite Celebrity. Their network of verified celebrities and seamless booking process is unmatched in the industry.",
          featured: true,
          created_at: '',
          updated_at: '',
        },
        {
          id: '3',
          name: 'Emma Rodriguez',
          role: 'Charity Foundation Director',
          image_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          rating: 5,
          content: "Thanks to Elite Celebrity Booking, our charity gala exceeded all expectations. The celebrity appearance elevated our event and helped us raise 300% more than previous years.",
          featured: true,
          created_at: '',
          updated_at: '',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length > 1) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [testimonials.length]);

  if (loading) {
    return (
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 dark:bg-zinc-700 rounded w-96 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded w-128 mx-auto"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="luxury-card p-8">
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                  <div className="h-20 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gray-300 dark:bg-zinc-700 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-24"></div>
                      <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded w-32"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black dark:via-transparent dark:to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
            <span className="text-zinc-900 dark:text-white">What Our Clients</span>
            <br />
            <span className="gradient-text">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients who've experienced the magic
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 overflow-hidden rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="glass-effect p-8 rounded-2xl max-w-3xl mx-auto text-center">
                  <Quote className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonial.image_url || 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                      <div className="flex space-x-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md hover:bg-yellow-500 hover:text-black transition-all"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md hover:bg-yellow-500 hover:text-black transition-all"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-yellow-500 scale-110'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}