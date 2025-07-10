'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Search, Filter, Star, Music, Film, Tv, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ApiService } from '@/lib/api';
import Link from 'next/link';

export default function CelebritiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [celebrities, setCelebrities] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [celebritiesData, categoriesData] = await Promise.all([
        ApiService.getCelebrities(),
        ApiService.getCategories()
      ]);
      
      setCelebrities(celebritiesData);
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading data:', error);
      // Fallback data
      setCelebrities([
        {
          id: '1',
          name: 'Taylor Swift',
          slug: 'taylor-swift',
          categories: { name: 'Music', icon: 'Music', color: '#10B981' },
          image_url: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
          rating: 4.9,
          price_range: '$500K+',
          verified: true,
          availability_status: 'available',
          tags: ['Pop', 'Concert', 'Awards'],
          description: 'Global superstar with 200+ million albums sold worldwide',
          location: 'Nashville, TN'
        },
        {
          id: '2',
          name: 'Dwayne Johnson',
          slug: 'dwayne-johnson',
          categories: { name: 'Film', icon: 'Film', color: '#3B82F6' },
          image_url: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
          rating: 4.8,
          price_range: '$750K+',
          verified: true,
          availability_status: 'limited',
          tags: ['Action', 'Comedy', 'Speaking'],
          description: 'Hollywood A-lister and highest-paid actor',
          location: 'Los Angeles, CA'
        }
      ]);
      setCategories([
        { id: '1', name: 'All Categories', slug: 'all' },
        { id: '2', name: 'Music', slug: 'music' },
        { id: '3', name: 'Film', slug: 'film' },
        { id: '4', name: 'Television', slug: 'television' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName?.toLowerCase()) {
      case 'music':
        return Music;
      case 'film':
        return Film;
      case 'television':
        return Tv;
      default:
        return Star;
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available':
        return 'bg-green-500';
      case 'limited':
        return 'bg-yellow-500';
      case 'booked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesSearch = celebrity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         celebrity.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || celebrity.categories?.slug === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-black pt-16">
        <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="animate-pulse">
                <div className="h-12 bg-gray-300 dark:bg-zinc-700 rounded w-96 mx-auto mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded w-128 mx-auto"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="luxury-card overflow-hidden">
                  <div className="animate-pulse">
                    <div className="h-64 bg-gray-300 dark:bg-zinc-700"></div>
                    <div className="p-6 space-y-4">
                      <div className="h-6 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                      <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded"></div>
                      <div className="h-10 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
              <span className="gradient-text">Our Celebrity Roster</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover and book from our exclusive collection of verified A-list celebrities, 
              musicians, actors, and entertainers for your next event.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 mb-12"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search celebrities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 h-12"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.slug}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>

          {/* Results Count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 mb-8"
          >
            Showing {filteredCelebrities.length} celebrities
          </motion.p>
        </div>
      </section>

      {/* Celebrities Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCelebrities.map((celebrity, index) => {
              const CategoryIcon = getCategoryIcon(celebrity.categories?.name);
              return (
                <motion.div
                  key={celebrity.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="luxury-card overflow-hidden hover:scale-105 transition-all duration-300 group">
                    <CardHeader className="p-0">
                      <div className="relative">
                        <img
                          src={celebrity.image_url}
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
                            {celebrity.categories?.name}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(celebrity.availability_status)}`} />
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center space-x-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-white text-sm font-medium">{celebrity.rating}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{celebrity.name}</h3>
                        <span className="text-yellow-500 font-bold">{celebrity.price_range}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">{celebrity.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {celebrity.tags?.map((tag: string, tagIndex: number) => (
                          <Badge key={tagIndex} variant="outline" className="border-gray-600 text-gray-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{celebrity.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${getAvailabilityColor(celebrity.availability_status)}`} />
                          <span className="capitalize">{celebrity.availability_status}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="flex gap-2 w-full">
                        <Button 
                          asChild
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black"
                          disabled={celebrity.availability_status === 'booked'}
                        >
                          <Link href={`/celebrities/${celebrity.slug}`} className="flex items-center justify-center">
                            View Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button 
                          asChild
                          variant="outline" 
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                          disabled={celebrity.availability_status === 'booked'}
                        >
                          <Link href={`/booking?celebrity=${celebrity.slug}`}>
                            Book Now
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredCelebrities.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">No celebrities found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black"
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}