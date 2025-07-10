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

  // Auto-rotate testimonials
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
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-900" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fbbf24' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium mb-6"
          >
            <Quote className="h-4 w-4 mr-2" />
            Client Success Stories
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients who've experienced the magic
          </p>
        </motion.div>

        {/* Desktop View - Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="luxury-card p-8 card-hover bg-zinc-900 border-zinc-800 h-full">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-yellow-500/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-4 mt-auto">
                  <motion.img
                    src={testimonial.image_url || 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/20"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="luxury-card p-8 bg-zinc-900 border-zinc-800"
            >
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-8 w-8 text-yellow-500/30" />
                <div className="flex items-center space-x-1">
                  {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                "{testimonials[currentIndex]?.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex]?.image_url || 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'}
                  alt={testimonials[currentIndex]?.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/20"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonials[currentIndex]?.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[currentIndex]?.role}</p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-yellow-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-yellow-500/20 text-yellow-500 hover:bg-yellow-500/10"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-6 bg-zinc-900 border-zinc-800">
              <div className="text-3xl font-bold text-green-500 mb-2">4.9/5</div>
              <div className="text-sm text-gray-300">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            <div className="luxury-card p-6 bg-zinc-900 border-zinc-800">
              <div className="text-3xl font-bold text-blue-500 mb-2">2,500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="luxury-card p-6 bg-zinc-900 border-zinc-800">
              <div className="text-3xl font-bold text-purple-500 mb-2">99.8%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}