'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Search, 
  Filter, 
  Star, 
  Edit, 
  Trash2, 
  Eye,
  MoreHorizontal,
  Music,
  Film,
  Tv
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { AdminApiService } from '@/lib/api';

export default function AdminCelebrities() {
  const [celebrities, setCelebrities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadCelebrities();
  }, []);

  const loadCelebrities = async () => {
    try {
      const data = await AdminApiService.getAllCelebrities();
      setCelebrities(data);
    } catch (error) {
      console.error('Error loading celebrities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this celebrity?')) {
      try {
        await AdminApiService.deleteCelebrity(id);
        setCelebrities(celebrities.filter(c => c.id !== id));
      } catch (error) {
        console.error('Error deleting celebrity:', error);
      }
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

  const getAvailabilityColor = (status: string) => {
    switch (status) {
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

  const filteredCelebrities = celebrities.filter(celebrity =>
    celebrity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    celebrity.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 dark:bg-zinc-700 rounded w-48 animate-pulse"></div>
          <div className="h-10 bg-gray-200 dark:bg-zinc-700 rounded w-32 animate-pulse"></div>
        </div>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 bg-gray-200 dark:bg-zinc-700 rounded animate-pulse"></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-gray-900 dark:text-white">
            Celebrities
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Manage your celebrity roster and profiles
          </p>
        </div>
        <Button className="premium-button">
          <Plus className="h-4 w-4 mr-2" />
          Add Celebrity
        </Button>
      </div>

      {/* Filters */}
      <Card className="luxury-card">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search celebrities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-2xl font-bold">{celebrities.length}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Featured</p>
                <p className="text-2xl font-bold">
                  {celebrities.filter(c => c.featured).length}
                </p>
              </div>
              <Star className="h-8 w-8 text-blue-500 fill-current" />
            </div>
          </CardContent>
        </Card>
        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Available</p>
                <p className="text-2xl font-bold">
                  {celebrities.filter(c => c.availability_status === 'available').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            </div>
          </CardContent>
        </Card>
        <Card className="luxury-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Verified</p>
                <p className="text-2xl font-bold">
                  {celebrities.filter(c => c.verified).length}
                </p>
              </div>
              <Badge className="bg-green-500">✓</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Celebrities Table */}
      <Card className="luxury-card">
        <CardHeader>
          <CardTitle>All Celebrities ({filteredCelebrities.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Celebrity</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Price Range</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCelebrities.map((celebrity, index) => {
                  const CategoryIcon = getCategoryIcon(celebrity.categories?.name);
                  return (
                    <motion.tr
                      key={celebrity.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-gray-50 dark:hover:bg-zinc-800/50"
                    >
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <img
                            src={celebrity.image_url || 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'}
                            alt={celebrity.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {celebrity.name}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {celebrity.location || 'Location not set'}
                            </p>
                            <div className="flex items-center space-x-2 mt-1">
                              {celebrity.verified && (
                                <Badge className="bg-green-500 text-white text-xs">
                                  Verified
                                </Badge>
                              )}
                              {celebrity.featured && (
                                <Badge className="bg-yellow-500 text-black text-xs">
                                  Featured
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <CategoryIcon className="h-4 w-4 text-gray-500" />
                          <span>{celebrity.categories?.name || 'Uncategorized'}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${getAvailabilityColor(celebrity.availability_status)}`}></div>
                          <span className="capitalize">{celebrity.availability_status}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span>{celebrity.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium text-green-600">
                          {celebrity.price_range || 'Not set'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem 
                              className="text-red-600"
                              onClick={() => handleDelete(celebrity.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </motion.tr>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          {filteredCelebrities.length === 0 && (
            <div className="text-center py-12">
              <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No celebrities found
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {searchTerm ? 'Try adjusting your search terms.' : 'Get started by adding your first celebrity.'}
              </p>
              <Button className="premium-button">
                <Plus className="h-4 w-4 mr-2" />
                Add Celebrity
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}