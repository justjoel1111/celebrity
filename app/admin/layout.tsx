'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Image, 
  Star, 
  MessageSquare, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Mock authentication check - replace with real auth
  useEffect(() => {
    const checkAuth = () => {
      const isAdmin = localStorage.getItem('admin_authenticated') === 'true';
      if (!isAdmin) {
        router.push('/admin/login');
      } else {
        setIsAuthenticated(true);
      }
    };
    
    checkAuth();
  }, [router]);

  const sidebarItems = [
    { 
      icon: LayoutDashboard, 
      label: 'Dashboard', 
      href: '/admin',
      badge: null
    },
    { 
      icon: FileText, 
      label: 'Pages', 
      href: '/admin/pages',
      badge: null
    },
    { 
      icon: Star, 
      label: 'Celebrities', 
      href: '/admin/celebrities',
      badge: '12'
    },
    { 
      icon: Users, 
      label: 'Categories', 
      href: '/admin/categories',
      badge: null
    },
    { 
      icon: MessageSquare, 
      label: 'Testimonials', 
      href: '/admin/testimonials',
      badge: null
    },
    { 
      icon: Calendar, 
      label: 'Bookings', 
      href: '/admin/bookings',
      badge: '3'
    },
    { 
      icon: Image, 
      label: 'Media', 
      href: '/admin/media',
      badge: null
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      href: '/admin/settings',
      badge: null
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated');
    router.push('/admin/login');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-800 shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-yellow-500" />
            <span className="text-xl font-bold font-playfair gradient-text">
              Admin Panel
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {sidebarItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center justify-between px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors group"
                  onClick={() => setSidebarOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-5 w-5 group-hover:text-yellow-500 transition-colors" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {item.badge && (
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-zinc-700">
          <Button
            variant="outline"
            className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 dark:text-red-400 dark:border-red-800 dark:hover:bg-red-900/20"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <div className="bg-white dark:bg-zinc-800 shadow-sm border-b border-gray-200 dark:border-zinc-700">
          <div className="flex items-center justify-between h-16 px-6">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Welcome back, Admin
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-semibold text-sm">A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}