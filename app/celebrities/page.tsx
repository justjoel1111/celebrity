'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Filter, Star, Music, Film, Tv, Users, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';

export default function CelebritiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const celebrities = [
    {
      id: 1,
      name: 'Taylor Swift',
      slug: 'taylor-swift',
      category: 'Music',
      genre: 'Pop',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.9,
      price: '$500K+',
      verified: true,
      availability: 'Available',
      tags: ['Pop', 'Concert', 'Awards'],
      description: 'Global superstar with 200+ million albums sold worldwide',
      followers: '89M',
      events: 150,
    },
    {
      id: 2,
      name: 'Dwayne Johnson',
      slug: 'dwayne-johnson',
      category: 'Film',
      genre: 'Action',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.8,
      price: '$750K+',
      verified: true,
      availability: 'Limited',
      tags: ['Action', 'Comedy', 'Speaking'],
      description: 'Hollywood A-lister and highest-paid actor',
      followers: '67M',
      events: 89,
    },
    {
      id: 3,
      name: 'Oprah Winfrey',
      slug: 'oprah-winfrey',
      category: 'TV',
      genre: 'Talk Show',
      image: 'https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 5.0,
      price: '$1M+',
      verified: true,
      availability: 'Booked',
      tags: ['Speaking', 'Inspiration', 'Media'],
      description: 'Media mogul and inspirational speaker',
      followers: '45M',
      events: 234,
    },
    {
      id: 4,
      name: 'Ed Sheeran',
      slug: 'ed-sheeran',
      category: 'Music',
      genre: 'Pop',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.9,
      price: '$400K+',
      verified: true,
      availability: 'Available',
      tags: ['Pop', 'Acoustic', 'Songwriting'],
      description: 'Singer-songwriter with billions of streams',
      followers: '52M',
      events: 178,
    },
    {
      id: 5,
      name: 'Emma Stone',
      slug: 'emma-stone',
      category: 'Film',
      genre: 'Drama',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.7,
      price: '$300K+',
      verified: true,
      availability: 'Available',
      tags: ['Drama', 'Comedy', 'Awards'],
      description: 'Academy Award-winning actress',
      followers: '23M',
      events: 67,
    },
    {
      id: 6,
      name: 'John Legend',
      slug: 'john-legend',
      category: 'Music',
      genre: 'R&B',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      rating: 4.8,
      price: '$350K+',
      verified: true,
      availability: 'Available',
      tags: ['R&B', 'Soul', 'Piano'],
      description: 'EGOT winner and Grammy-nominated artist',
      followers: '34M',
      events: 145,
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Music', label: 'Music' },
    { value: 'Film', label: 'Film' },
    { value: 'TV', label: 'TV' },
    { value: 'Sports', label: 'Sports' },
    { value: 'Comedy', label: 'Comedy' },
  ];

  const genres = [
    { value: 'all', label: 'All Genres' },
    { value: 'Pop', label: 'Pop' },
    { value: 'Rock', label: 'Rock' },
    { value: 'Hip-Hop', label: 'Hip-Hop' },
    { value: 'R&B', label: 'R&B' },
    { value: 'Action', label: 'Action' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Comedy', label: 'Comedy' },
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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-500';
      case 'Limited':
        return 'bg-yellow-500';
      case 'Booked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const filteredCelebrities = celebrities.filter(celebrity => {
    const matchesSearch = celebrity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         celebrity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || celebrity.category === selectedCategory;
    const matchesGenre = selectedGenre === 'all' || celebrity.genre === selectedGenre;
    
    return matchesSearch && matchesCategory && matchesGenre;
  });

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
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger className="w-full md:w-48 bg-white/10 border-white/20 text-white h-12">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                {genres.map(genre => (
                  <SelectItem key={genre.value} value={genre.value}>
                    {genre.label}
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
              const CategoryIcon = getCategoryIcon(celebrity.category);
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
                        <div className="absolute top-4 right-4">
                          <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(celebrity.availability)}`} />
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
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{celebrity.followers}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{celebrity.events} events</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${getAvailabilityColor(celebrity.availability)}`} />
                          <span>{celebrity.availability}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <div className="flex gap-2 w-full">
                        <Button 
                          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-black"
                          disabled={celebrity.availability === 'Booked'}
                        >
                          <Link href={`/celebrities/${celebrity.slug}`} className="flex items-center">
                            View Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                          disabled={celebrity.availability === 'Booked'}
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
                  setSelectedGenre('all');
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