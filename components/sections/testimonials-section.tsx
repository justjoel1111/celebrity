'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Director, Fortune 500 Company',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      content: "Elite Celebrity Booking made our corporate event unforgettable. The professionalism and attention to detail were exceptional. Our celebrity guest was perfectly matched to our audience.",
    },
    {
      name: 'Michael Chen',
      role: 'Wedding Planner, Luxury Weddings',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      content: "I've worked with many booking agencies, but none compare to Elite Celebrity. Their network of verified celebrities and seamless booking process is unmatched in the industry.",
    },
    {
      name: 'Emma Rodriguez',
      role: 'Charity Foundation Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      content: "Thanks to Elite Celebrity Booking, our charity gala exceeded all expectations. The celebrity appearance elevated our event and helped us raise 300% more than previous years.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients who've experienced the magic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="luxury-card p-8 hover:scale-105 transition-transform duration-300 h-full">
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-8 w-8 text-yellow-500/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
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
      </div>
    </section>
  );
}