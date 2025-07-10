'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Users, Shield, Headphones, Star, CheckCircle } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const services = [
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'Full-service event coordination with celebrity booking integration',
      features: ['Venue coordination', 'Timeline management', 'Technical requirements', 'Logistics planning'],
    },
    {
      icon: Users,
      title: 'Talent Management',
      description: 'Professional talent coordination and management services',
      features: ['Celebrity liaison', 'Contract negotiation', 'Performance coordination', 'VIP handling'],
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Protected transactions with verified celebrity availability',
      features: ['Verified celebrities', 'Secure payments', 'Insurance coverage', 'Legal protection'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your booking needs',
      features: ['Live chat support', 'Emergency hotline', 'Personal account manager', 'Post-event support'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-playfair mb-4">
            <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive celebrity booking services tailored to make your event extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="luxury-card p-8 h-full hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/10 mb-6 group-hover:bg-yellow-500/20 transition-colors">
                  <service.icon className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-500/20">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-yellow-500 font-medium">
              Trusted by Fortune 500 companies and A-list celebrities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}