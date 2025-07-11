'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Users, Shield, Headphones, Star, CheckCircle, Zap, Globe, Award, Music } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const services = [
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'Full-service event coordination with celebrity booking integration',
      features: ['Venue coordination', 'Timeline management', 'Technical requirements', 'Logistics planning'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20',
    },
    {
      icon: Users,
      title: 'Talent Management',
      description: 'Professional talent coordination and management services',
      features: ['Celebrity liaison', 'Contract negotiation', 'Performance coordination', 'VIP handling'],
      color: 'text-green-500',
      bgColor: 'bg-green-500/20',
    },
    {
      icon: Shield,
      title: 'Secure Booking',
      description: 'Protected transactions with verified celebrity availability',
      features: ['Verified celebrities', 'Secure payments', 'Insurance coverage', 'Legal protection'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/20',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your booking needs',
      features: ['Live chat support', 'Emergency hotline', 'Personal account manager', 'Post-event support'],
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide celebrity booking and event coordination',
      features: ['International bookings', 'Multi-language support', 'Local partnerships', 'Cultural expertise'],
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/20',
    },
    {
      icon: Award,
      title: 'Premium Experience',
      description: 'Luxury service with attention to every detail',
      features: ['White-glove service', 'Concierge support', 'Custom packages', 'VIP treatment'],
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/20',
    },
  ];

  return (
    <section className="py-24 section-background-alt relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="responsive-container relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-playfair mb-8">
            <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-xl sm:text-2xl light-mode-subtext dark-mode-subtext max-w-4xl mx-auto leading-relaxed">
            Comprehensive celebrity booking services tailored to make your event extraordinary
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="service-card h-full">
                <div className={`flex items-center justify-center w-20 h-20 rounded-2xl ${service.bgColor} mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <service.icon className={`h-10 w-10 ${service.color}`} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold light-mode-text dark-mode-text mb-4">{service.title}</h3>
                <p className="light-mode-subtext dark-mode-subtext mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center light-mode-muted dark-mode-muted text-sm sm:text-base">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30">
            <Star className="h-6 w-6 text-yellow-500 mr-3" />
            <span className="text-yellow-600 dark:text-yellow-400 font-bold text-lg">
              Trusted by Fortune 500 companies and A-list celebrities
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}