
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp, Clock, Eye, Heart, Share2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'celebrity-news', name: 'Celebrity News', count: 8 },
    { id: 'event-planning', name: 'Event Planning', count: 6 },
    { id: 'success-stories', name: 'Success Stories', count: 5 },
    { id: 'industry-insights', name: 'Industry Insights', count: 5 }
  ];

  const featuredPost = {
    id: 1,
    title: 'How We Booked Taylor Swift for a Corporate Event: A Behind-the-Scenes Look',
    excerpt: 'An exclusive look at how our team coordinated one of the most successful celebrity bookings of 2024...',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: 'Sarah Johnson',
    authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Success Stories',
    views: 12500,
    likes: 486
  };

  const blogPosts = [
    {
      id: 2,
      title: '10 Celebrity Event Trends That Will Dominate 2024',
      excerpt: 'From virtual appearances to eco-friendly celebrity partnerships, discover what\'s trending in celebrity bookings...',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Marcus Chen',
      authorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-12',
      readTime: '5 min read',
      category: 'Industry Insights',
      views: 8230,
      likes: 312
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Celebrity Wedding Entertainment',
      excerpt: 'Planning a wedding? Learn how A-list performers can make your special day truly unforgettable...',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Emily Rodriguez',
      authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Event Planning',
      views: 15600,
      likes: 728
    },
    {
      id: 4,
      title: 'Breaking: Grammy Winners Available for Private Events',
      excerpt: 'Exclusive access to this year\'s Grammy winners for corporate events, private parties, and brand activations...',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'David Park',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Celebrity News',
      views: 22100,
      likes: 1205
    },
    {
      id: 5,
      title: 'Corporate Event ROI: The Celebrity Booking Investment',
      excerpt: 'Data-driven analysis of how celebrity appearances impact brand awareness, lead generation, and revenue...',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Lisa Wong',
      authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Industry Insights',
      views: 9850,
      likes: 423
    },
    {
      id: 6,
      title: 'From Planning to Performance: A Million-Dollar Gala Success Story',
      excerpt: 'How we orchestrated a star-studded charity gala that raised $2.5 million with A-list entertainment...',
      image: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      author: 'Michael Torres',
      authorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Success Stories',
      views: 18300,
      likes: 892
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category.toLowerCase().replace(' ', '-') === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen page-background pt-16">
      {/* Hero Section */}
      <section className="py-20 section-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Celebrity Insights
            </Badge>
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
              <span className="text-primary">Stories, Insights &</span>
              <br />
              <span className="gradient-text">Industry News</span>
            </h1>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
              Discover the latest trends in celebrity booking, behind-the-scenes stories, and expert insights 
              from the entertainment industry's leading professionals.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles, stories, and insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg glass-effect"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id 
                      ? "premium-button" 
                      : "glass-effect hover:bg-yellow-500/10 hover:border-yellow-500"
                  }`}
                >
                  {category.name} <Badge variant="secondary" className="ml-2">{category.count}</Badge>
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 section-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold font-playfair">
                <span className="text-primary">Featured</span> <span className="gradient-text">Story</span>
              </h2>
              <div className="flex items-center space-x-2 text-sm text-secondary">
                <TrendingUp className="h-4 w-4" />
                <span>Trending Now</span>
              </div>
            </div>

            <Card className="luxury-card overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-yellow-500 text-black">
                    <Tag className="w-3 h-3 mr-1" />
                    {featuredPost.category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold font-playfair text-primary mb-4 group-hover:text-yellow-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-secondary leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <img
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-primary">{featuredPost.author}</p>
                        <div className="flex items-center space-x-4 text-sm text-secondary">
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(featuredPost.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-secondary">
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views.toLocaleString()}
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {featuredPost.likes}
                      </span>
                    </div>
                  </div>
                  <Button className="premium-button w-fit">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold font-playfair">
                <span className="text-primary">Latest</span> <span className="gradient-text">Articles</span>
              </h2>
              <p className="text-secondary">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="luxury-card overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-secondary text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div>
                            <p className="text-sm font-medium text-primary">{post.author}</p>
                            <p className="text-xs text-secondary">
                              {new Date(post.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-secondary">
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {post.readTime}
                          </span>
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {(post.views / 1000).toFixed(1)}K
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" className="group-hover:border-yellow-500 group-hover:text-yellow-600">
                          Read More
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm" className="text-secondary hover:text-red-500">
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-secondary hover:text-blue-500">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">No articles found</h3>
                  <p className="text-secondary">Try adjusting your search terms or category filter.</p>
                </div>
                <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }} variant="outline">
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6 text-white">
              Never Miss a <span className="gradient-text">Celebrity Story</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Get exclusive insights, behind-the-scenes stories, and industry news delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20"
              />
              <Button className="premium-button whitespace-nowrap">
                Subscribe <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Join 50,000+ industry professionals. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
