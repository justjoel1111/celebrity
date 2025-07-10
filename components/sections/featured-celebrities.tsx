'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Music, Film, Tv, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export function FeaturedCelebrities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const celebrities = [
    {
      name: 'Taylor Swift',
      category: 'Music',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.9,
      price: '$500K+',
      verified: true,
      tags: ['Pop', 'Concert', 'Awards'],
      description: 'Global superstar with 200+ million albums sold worldwide',
    },
    {
      name: 'Dwayne Johnson',
      category: 'Film',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.8,
      price: '$750K+',
      verified: true,
      tags: ['Action', 'Comedy', 'Speaking'],
      description: 'Hollywood A-lister and highest-paid actor',
    },
    {
      name: 'Oprah Winfrey',
      category: 'TV',
      image: 'https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 5.0,
      price: '$1M+',
      verified: true,
      tags: ['Speaking', 'Inspiration', 'Media'],
      description: 'Media mogul and inspirational speaker',
    },
    {
      name: 'Ed Sheeran',
      category: 'Music',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.9,
      price: '$400K+',
      verified: true,
      tags: ['Pop', 'Acoustic', 'Songwriting'],
      description: 'Singer-songwriter with billions of streams',
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Music':
        return Music;
      case 'Film':
        return Film;
      case 'TV':
        return Tv;
      default:
        return Star;
    }
  };

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
            <span className="gradient-text">Featured Celebrities</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our hand-picked selection of world-class entertainers available for your next event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {celebrities.map((celebrity, index) => {
            const CategoryIcon = getCategoryIcon(celebrity.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="luxury-card overflow-hidden hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={celebrity.image}
                      alt={celebrity.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      {celebrity.verified && (
                        <Badge className="bg-green-500 text-white">
                          <Star className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        <CategoryIcon className="h-3 w-3 mr-1" />
                        {celebrity.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-white text-sm font-medium">{celebrity.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{celebrity.name}</h3>
                      <span className="text-yellow-500 font-bold">{celebrity.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{celebrity.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {celebrity.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                      View Profile
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="glass-effect text-white border-white/20 hover:bg-white/10 group">
            <Link href="/celebrities" className="flex items-center">
              View All Celebrities
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}