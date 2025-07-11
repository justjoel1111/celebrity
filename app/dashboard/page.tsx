'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Star, 
  Users, 
  CreditCard, 
  Bell, 
  Settings, 
  LogOut,
  Heart,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Music,
  Film,
  Tv,
  ArrowRight,
  Plus,
  Search,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication
    const isAuthenticated = localStorage.getItem('user_authenticated');
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    // Load user data
    const userData = {
      name: localStorage.getItem('user_name') || 'John Doe',
      email: localStorage.getItem('user_email') || 'user@example.com',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      memberSince: '2024',
      totalBookings: 12,
      totalSpent: 2500000,
      favoriteCategories: ['Music', 'Film'],
      upcomingEvents: 3,
      completedEvents: 9
    };

    setUser(userData);
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user_authenticated');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    router.push('/');
  };

  const recentBookings = [
    {
      id: 1,
      celebrity: 'Taylor Swift',
      event: 'Corporate Gala',
      date: '2024-02-15',
      status: 'confirmed',
      amount: 500000,
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      celebrity: 'Dwayne Johnson',
      event: 'Product Launch',
      date: '2024-01-28',
      status: 'completed',
      amount: 750000,
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      celebrity: 'Ed Sheeran',
      event: 'Private Party',
      date: '2024-03-10',
      status: 'pending',
      amount: 400000,
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const favoritesCelebrities = [
    {
      id: 1,
      name: 'Taylor Swift',
      category: 'Music',
      price: '$500K+',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Emma Stone',
      category: 'Film',
      price: '$300K+',
      availability: 'Limited',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'John Legend',
      category: 'Music',
      price: '$350K+',
      availability: 'Available',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen page-background pt-16 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen page-background pt-16">
      <div className="responsive-container responsive-padding">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
                Welcome back, {user.name.split(' ')[0]}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Member since {user.memberSince} • {user.totalBookings} bookings completed
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.totalBookings}</p>
                  </div>
                  <Calendar className="h-8 w-8 text-blue-500" />
                </div>
                <div className="mt-4">
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">75% increase from last year</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${(user.totalSpent / 1000).toFixed(0)}K</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-green-500" />
                </div>
                <div className="mt-4">
                  <Progress value={60} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Premium member benefits</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Events</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.upcomingEvents}</p>
                  </div>
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <div className="mt-4">
                  <Badge className="bg-orange-500/10 text-orange-600">Next: Feb 15</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="luxury-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Favorites</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{favoritesCelebrities.length}</p>
                  </div>
                  <Heart className="h-8 w-8 text-red-500" />
                </div>
                <div className="mt-4">
                  <Badge className="bg-red-500/10 text-red-600">Saved celebrities</Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card className="luxury-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-gray-900 dark:text-white">Recent Bookings</CardTitle>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentBookings.map((booking, index) => (
                    <motion.div
                      key={booking.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={booking.image}
                          alt={booking.celebrity}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">{booking.celebrity}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{booking.event}</p>
                          <p className="text-xs text-gray-500">{booking.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={booking.status === 'confirmed' ? 'default' : booking.status === 'completed' ? 'secondary' : 'outline'}
                          className={
                            booking.status === 'confirmed' ? 'bg-green-500' : 
                            booking.status === 'completed' ? 'bg-blue-500' : 
                            'border-yellow-500 text-yellow-600'
                          }
                        >
                          {booking.status}
                        </Badge>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                          ${(booking.amount / 1000).toFixed(0)}K
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full premium-button" asChild>
                  <Link href="/celebrities">
                    <Search className="mr-2 h-4 w-4" />
                    Browse Celebrities
                  </Link>
                </Button>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/booking">
                    <Plus className="mr-2 h-4 w-4" />
                    New Booking
                  </Link>
                </Button>
                <Button className="w-full" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
              </CardContent>
            </Card>

            {/* Favorite Celebrities */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Favorite Celebrities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {favoritesCelebrities.map((celebrity, index) => (
                    <motion.div
                      key={celebrity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-zinc-800 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={celebrity.image}
                          alt={celebrity.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h5 className="font-medium text-gray-900 dark:text-white text-sm">{celebrity.name}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{celebrity.category}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium text-yellow-600">{celebrity.price}</p>
                        <div className={`w-2 h-2 rounded-full ${
                          celebrity.availability === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="luxury-card">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20">
                    <h5 className="font-medium text-gray-900 dark:text-white text-sm mb-1">Premium Package</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Save 20% on your next booking</p>
                    <Button size="sm" className="premium-button text-xs">
                      Learn More
                    </Button>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                    <h5 className="font-medium text-gray-900 dark:text-white text-sm mb-1">VIP Concierge</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">24/7 dedicated support</p>
                    <Button size="sm" variant="outline" className="text-xs">
                      Upgrade
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}