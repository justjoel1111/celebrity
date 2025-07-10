'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Eye,
  MessageSquare,
  Image,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AdminApiService } from '@/lib/api';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalCelebrities: 0,
    totalBookings: 0,
    totalTestimonials: 0,
    totalRevenue: 0,
    recentBookings: [],
    popularCelebrities: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load dashboard statistics
      const [celebrities, bookings, testimonials] = await Promise.all([
        AdminApiService.getAllCelebrities(),
        AdminApiService.getAllBookings(),
        AdminApiService.getAllTestimonials()
      ]);

      // Calculate revenue from bookings
      const totalRevenue = bookings
        .filter(booking => booking.payment_status === 'paid')
        .reduce((sum, booking) => sum + (booking.total_amount || 0), 0);

      // Get recent bookings (last 5)
      const recentBookings = bookings.slice(0, 5);

      // Get popular celebrities (featured ones)
      const popularCelebrities = celebrities
        .filter(celebrity => celebrity.featured)
        .slice(0, 5);

      setStats({
        totalCelebrities: celebrities.length,
        totalBookings: bookings.length,
        totalTestimonials: testimonials.length,
        totalRevenue: totalRevenue / 100, // Convert from cents
        recentBookings,
        popularCelebrities
      });
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Celebrities',
      value: stats.totalCelebrities,
      icon: Star,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      change: '+12%',
      changeType: 'positive'
    },
    {
      title: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      change: '+23%',
      changeType: 'positive'
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      change: '+18%',
      changeType: 'positive'
    },
    {
      title: 'Testimonials',
      value: stats.totalTestimonials,
      icon: MessageSquare,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      change: '+8%',
      changeType: 'positive'
    }
  ];

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-6">
                <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 dark:bg-zinc-700 rounded w-1/2"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Welcome to your admin dashboard. Here's what's happening with your platform.
          </p>
        </div>
        <Button className="premium-button">
          <Eye className="h-4 w-4 mr-2" />
          View Site
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="luxury-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  {stat.changeType === 'positive' ? (
                    <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    from last month
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Bookings</span>
              <Badge variant="secondary">{stats.recentBookings.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentBookings.length > 0 ? (
                stats.recentBookings.map((booking: any, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-black" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {booking.client_name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {booking.event_type} • {new Date(booking.event_date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant={booking.status === 'confirmed' ? 'default' : 'secondary'}
                      className={booking.status === 'confirmed' ? 'bg-green-500' : ''}
                    >
                      {booking.status}
                    </Badge>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                  No recent bookings
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Popular Celebrities */}
        <Card className="luxury-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Featured Celebrities</span>
              <Badge variant="secondary">{stats.popularCelebrities.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.popularCelebrities.length > 0 ? (
                stats.popularCelebrities.map((celebrity: any, index) => (
                  <motion.div
                    key={celebrity.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-zinc-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={celebrity.image_url || 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'}
                        alt={celebrity.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {celebrity.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {celebrity.categories?.name || 'Uncategorized'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{celebrity.rating}</span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-center py-8">
                  No featured celebrities
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="luxury-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Star className="h-6 w-6" />
              <span>Add Celebrity</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <MessageSquare className="h-6 w-6" />
              <span>Add Testimonial</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2">
              <Image className="h-6 w-6" />
              <span>Upload Media</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}