'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Music, Film, Tv, Calendar, Users, Award, Play, Heart, Share2, MapPin, Clock, DollarSign, CheckCircle, ArrowRight, Instagram, Twitter, Youtube, Globe, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function ClientCelebrityProfile({ slug }: { slug: string }) {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data - in real app, fetch based on slug
  const celebrity = {
    id: 1,
    name: 'Taylor Swift',
    slug: 'taylor-swift',
    category: 'Music',
    genre: 'Pop',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
    coverImage: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop',
    rating: 4.9,
    price: '$500,000+',
    verified: true,
    availability: 'Available',
    location: 'Nashville, TN',
    languages: ['English', 'Spanish'],
    tags: ['Pop', 'Country', 'Concert', 'Awards', 'Private Events'],
    description: 'Global superstar with 200+ million albums sold worldwide. Taylor Swift is one of the most influential artists of our time, with numerous Grammy Awards and a dedicated fanbase spanning the globe.',
    longDescription: `Taylor Swift is an American singer-songwriter who has achieved unprecedented success in the music industry. Known for her narrative songwriting, which often draws from her personal life, she has received widespread media coverage and critical praise. Swift's discography spans multiple genres, and her artistic reinventions and re-recordings have received critical acclaim and media attention.

    Born and raised in Pennsylvania, Swift moved to Nashville at age 14 to pursue a career in country music. She signed with Big Machine Records in 2005 and achieved prominence as a country pop singer with her first two studio albums, which contained crossover success on country and pop radio formats.`,
    followers: '89M',
    events: 150,
    awards: [
      { name: 'Grammy Awards', count: 12 },
      { name: 'American Music Awards', count: 34 },
      { name: 'Billboard Music Awards', count: 25 },
      { name: 'Country Music Awards', count: 8 },
    ],
    socialMedia: {
      instagram: '@taylorswift',
      twitter: '@taylorswift13',
      youtube: 'TaylorSwiftVEVO',
      website: 'taylorswift.com'
    },
    gallery: [
      'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      'https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop',
    ],
    videos: [
      { title: 'Live Performance at Madison Square Garden', thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', duration: '4:32' },
      { title: 'Behind the Scenes: Music Video', thumbnail: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', duration: '6:15' },
      { title: 'Acoustic Session', thumbnail: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', duration: '3:45' },
    ],
    upcomingEvents: [
      { date: '2024-03-15', venue: 'Madison Square Garden', city: 'New York, NY', type: 'Concert' },
      { date: '2024-03-22', venue: 'Hollywood Bowl', city: 'Los Angeles, CA', type: 'Private Event' },
      { date: '2024-04-05', venue: 'Royal Albert Hall', city: 'London, UK', type: 'Charity Gala' },
    ],
    reviews: [
      {
        name: 'Sarah Johnson',
        role: 'Event Coordinator',
        rating: 5,
        comment: 'Taylor was absolutely incredible at our corporate event. Professional, engaging, and truly made the night unforgettable.',
        date: '2024-01-15'
      },
      {
        name: 'Michael Chen',
        role: 'Wedding Planner',
        rating: 5,
        comment: 'Exceeded all expectations. The performance was flawless and the guests were thrilled.',
        date: '2024-01-08'
      },
      {
        name: 'Emma Rodriguez',
        role: 'Charity Director',
        rating: 5,
        comment: 'Taylor helped us raise over $2M for our cause. Her dedication and talent are unmatched.',
        date: '2023-12-20'
      },
    ],
    bookingInfo: {
      minimumNotice: '30 days',
      travelRadius: 'Worldwide',
      performanceDuration: '60-90 minutes',
      technicalRequirements: 'Full production team available',
      cancellationPolicy: '48 hours notice required'
    }
  };

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

  const CategoryIcon = getCategoryIcon(celebrity.category);

  return (
    <div className="min-h-screen page-background pt-16">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${celebrity.coverImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <div className="flex items-end space-x-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-32 h-32 rounded-xl object-cover border-4 border-white shadow-2xl"
                />
                {celebrity.verified && (
                  <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                )}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Badge className="bg-green-500 text-white">
                    <CategoryIcon className="h-3 w-3 mr-1" />
                    {celebrity.category}
                  </Badge>
                  <Badge variant="outline" className="border-white text-white">
                    {celebrity.availability}
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold text-white font-playfair mb-2">{celebrity.name}</h1>
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{celebrity.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{celebrity.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{celebrity.followers} followers</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-white text-white hover:bg-white hover:text-black">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button className="premium-button">
                  <Link href={`/booking?celebrity=${celebrity.slug}`}>
                    Book Now - {celebrity.price}
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card className="luxury-card">
                    <CardHeader>
                      <CardTitle className="text-primary">About {celebrity.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-secondary leading-relaxed">{celebrity.description}</p>
                      <p className="text-secondary leading-relaxed">{celebrity.longDescription}</p>
                      <div className="flex flex-wrap gap-2">
                        {celebrity.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="border-yellow-500 text-yellow-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="luxury-card">
                    <CardHeader>
                      <CardTitle className="text-primary">Awards & Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        {celebrity.awards.map((award, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Award className="h-5 w-5 text-yellow-500" />
                              <span className="text-primary font-medium">{award.name}</span>
                            </div>
                            <Badge className="bg-yellow-500 text-black">{award.count}</Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="luxury-card">
                    <CardHeader>
                      <CardTitle className="text-primary">Social Media</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Instagram className="h-5 w-5 text-pink-500" />
                          <span className="text-primary">{celebrity.socialMedia.instagram}</span>
                        </div>
                        <Button variant="ghost" size="sm">Follow</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Twitter className="h-5 w-5 text-blue-500" />
                          <span className="text-primary">{celebrity.socialMedia.twitter}</span>
                        </div>
                        <Button variant="ghost" size="sm">Follow</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Youtube className="h-5 w-5 text-red-500" />
                          <span className="text-primary">{celebrity.socialMedia.youtube}</span>
                        </div>
                        <Button variant="ghost" size="sm">Subscribe</Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Globe className="h-5 w-5 text-green-500" />
                          <span className="text-primary">{celebrity.socialMedia.website}</span>
                        </div>
                        <Button variant="ghost" size="sm">Visit</Button>
                      </div>
                      <Button className="w-full premium-button-outline">
                        <Link href={`/booking?celebrity=${celebrity.slug}`} className="w-full">
                          Book Now - {celebrity.price}
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="media">
              {/* Media Tab Content */}
              <div className="space-y-8">
                <Card className="luxury-card">
                  <CardHeader>
                    <CardTitle className="text-primary">Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {celebrity.videos.map((video, index) => (
                        <div key={index} className="group relative rounded-lg overflow-hidden">
                          <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url(${video.thumbnail})` }} />
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button size="icon" className="rounded-full bg-white/20 hover:bg-white/30">
                              <Play className="h-6 w-6 text-white" />
                            </Button>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white text-sm font-medium">{video.title}</p>
                            <p className="text-white/70 text-xs">{video.duration}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gallery">
              {/* Gallery Tab Content */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-primary">Photo Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {celebrity.gallery.map((image, index) => (
                      <div key={index} className="aspect-[3/4] rounded-lg overflow-hidden">
                        <img src={image} alt={`${celebrity.name} gallery ${index+1}`} className="w-full h-full object-cover transition-transform hover:scale-105" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              {/* Events Tab Content */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-primary">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {celebrity.upcomingEvents.map((event, index) => (
                      <div key={index} className="flex flex-col md:flex-row justify-between p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="flex flex-col items-center justify-center w-14 h-14 bg-yellow-500/10 text-yellow-600 rounded-lg">
                            <span className="text-lg font-bold">{new Date(event.date).getDate()}</span>
                            <span className="text-xs">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                          </div>
                          <div>
                            <h4 className="font-medium text-primary">{event.venue}</h4>
                            <p className="text-sm text-secondary">{event.city}</p>
                          </div>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                          <Badge variant="outline" className="mr-4">{event.type}</Badge>
                          <Button variant="outline">Details</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              {/* Reviews Tab Content */}
              <Card className="luxury-card">
                <CardHeader>
                  <CardTitle className="text-primary">Client Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {celebrity.reviews.map((review, index) => (
                      <div key={index} className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-medium text-primary">{review.name}</h4>
                            <p className="text-sm text-secondary">{review.role}</p>
                          </div>
                          <div className="flex items-center">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-secondary italic mb-4">"{review.comment}"</p>
                        <p className="text-xs text-secondary">{review.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="booking">
              {/* Booking Tab Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="luxury-card">
                    <CardHeader>
                      <CardTitle className="text-primary">Booking Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                          <span className="text-xs text-secondary mb-1">Minimum Notice</span>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium text-primary">{celebrity.bookingInfo.minimumNotice}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                          <span className="text-xs text-secondary mb-1">Travel Radius</span>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium text-primary">{celebrity.bookingInfo.travelRadius}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                          <span className="text-xs text-secondary mb-1">Performance Duration</span>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium text-primary">{celebrity.bookingInfo.performanceDuration}</span>
                          </div>
                        </div>
                        <div className="flex flex-col p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                          <span className="text-xs text-secondary mb-1">Technical Requirements</span>
                          <div className="flex items-center space-x-2">
                            <Music className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium text-primary">{celebrity.bookingInfo.technicalRequirements}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-secondary">
                        To book {celebrity.name} for your event, please fill out our booking form with all the details of your event. 
                        Our team will review your request and provide you with a custom quote based on your specific requirements.
                      </p>
                      <div className="flex items-center justify-between p-4 bg-yellow-500/10 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <DollarSign className="h-6 w-6 text-yellow-600" />
                          <div>
                            <p className="font-medium text-primary">Starting from {celebrity.price}</p>
                            <p className="text-sm text-secondary">Final price depends on event details</p>
                          </div>
                        </div>
                        <Button className="premium-button">
                          <Link href={`/booking?celebrity=${celebrity.slug}`} className="flex items-center">
                            Book Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="luxury-card">
                    <CardHeader>
                      <CardTitle className="text-primary">Need Help?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-secondary">
                        Our celebrity booking experts are available to help you with any questions you may have.
                      </p>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <Phone className="h-5 w-5 text-yellow-500" />
                        <span className="text-primary">+1 (888) 555-1234</span>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg">
                        <Mail className="h-5 w-5 text-yellow-500" />
                        <span className="text-primary">bookings@celebritybolt.com</span>
                      </div>
                      <Button variant="outline" className="w-full">Contact Us</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}  
