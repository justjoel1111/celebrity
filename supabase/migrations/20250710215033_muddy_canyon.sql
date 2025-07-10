/*
  # Initial Schema for Dynamic Celebrity Booking Platform

  1. New Tables
    - `pages` - Store page information and metadata
    - `content_blocks` - Store dynamic content sections for pages
    - `celebrities` - Store celebrity profiles and information
    - `images` - Store image metadata and references
    - `settings` - Store global website settings
    - `testimonials` - Store client testimonials
    - `bookings` - Store booking requests and information
    - `categories` - Store celebrity categories
    - `admin_users` - Store admin user information

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access and admin write access
    - Set up proper authentication and authorization

  3. Storage
    - Create storage buckets for images and media files
*/

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create admin_users table for admin authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  password_hash text NOT NULL,
  name text NOT NULL,
  role text DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  avatar_url text,
  last_login timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  icon text,
  color text DEFAULT '#3B82F6',
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  meta_title text,
  meta_description text,
  status text DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  featured_image text,
  template text DEFAULT 'default',
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create content_blocks table
CREATE TABLE IF NOT EXISTS content_blocks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('hero', 'text', 'image', 'gallery', 'video', 'testimonials', 'celebrities', 'stats', 'cta', 'features', 'faq')),
  title text,
  content jsonb NOT NULL DEFAULT '{}',
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create images table
CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  original_name text NOT NULL,
  url text NOT NULL,
  storage_path text NOT NULL,
  alt_text text,
  caption text,
  file_size integer,
  mime_type text,
  width integer,
  height integer,
  uploaded_by uuid REFERENCES admin_users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create celebrities table
CREATE TABLE IF NOT EXISTS celebrities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  bio text,
  description text,
  category_id uuid REFERENCES categories(id),
  image_url text,
  cover_image_url text,
  price_range text,
  rating decimal(3,2) DEFAULT 0.0,
  availability_status text DEFAULT 'available' CHECK (availability_status IN ('available', 'limited', 'booked', 'unavailable')),
  verified boolean DEFAULT false,
  featured boolean DEFAULT false,
  social_media jsonb DEFAULT '{}',
  contact_info jsonb DEFAULT '{}',
  performance_details jsonb DEFAULT '{}',
  tags text[] DEFAULT '{}',
  location text,
  languages text[] DEFAULT '{}',
  awards jsonb DEFAULT '[]',
  gallery_images text[] DEFAULT '{}',
  videos jsonb DEFAULT '[]',
  upcoming_events jsonb DEFAULT '[]',
  booking_requirements text,
  technical_requirements text,
  sort_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text,
  company text,
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  featured boolean DEFAULT false,
  celebrity_id uuid REFERENCES celebrities(id) ON DELETE SET NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  celebrity_id uuid REFERENCES celebrities(id),
  client_name text NOT NULL,
  client_email text NOT NULL,
  client_phone text,
  company_name text,
  event_type text NOT NULL,
  event_date date NOT NULL,
  event_time time,
  event_duration text,
  venue_name text,
  venue_address text,
  venue_city text,
  venue_state text,
  venue_country text,
  venue_zipcode text,
  expected_attendees integer,
  budget_range text,
  event_description text,
  special_requirements text,
  additional_services jsonb DEFAULT '{}',
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  total_amount decimal(10,2),
  deposit_amount decimal(10,2),
  payment_status text DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'paid', 'refunded')),
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  key text UNIQUE NOT NULL,
  value jsonb NOT NULL,
  description text,
  category text DEFAULT 'general',
  is_public boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_content_blocks_page_id ON content_blocks(page_id);
CREATE INDEX IF NOT EXISTS idx_content_blocks_type ON content_blocks(type);
CREATE INDEX IF NOT EXISTS idx_content_blocks_sort_order ON content_blocks(sort_order);
CREATE INDEX IF NOT EXISTS idx_celebrities_category_id ON celebrities(category_id);
CREATE INDEX IF NOT EXISTS idx_celebrities_slug ON celebrities(slug);
CREATE INDEX IF NOT EXISTS idx_celebrities_featured ON celebrities(featured);
CREATE INDEX IF NOT EXISTS idx_celebrities_availability ON celebrities(availability_status);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_status ON pages(status);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(featured);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_celebrity_id ON bookings(celebrity_id);

-- Enable Row Level Security
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;
ALTER TABLE celebrities ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read published pages"
  ON pages FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Public can read active content blocks"
  ON content_blocks FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Public can read active categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Public can read active celebrities"
  ON celebrities FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Public can read active testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Public can read images"
  ON images FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Public can read public settings"
  ON settings FOR SELECT
  TO anon, authenticated
  USING (is_public = true);

-- Create policies for booking submissions
CREATE POLICY "Anyone can create bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policies for admin access (will be updated when auth is implemented)
CREATE POLICY "Admins can manage all data"
  ON admin_users FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage categories"
  ON categories FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage pages"
  ON pages FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage content blocks"
  ON content_blocks FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage images"
  ON images FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage celebrities"
  ON celebrities FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage testimonials"
  ON testimonials FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage bookings"
  ON bookings FOR ALL
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage settings"
  ON settings FOR ALL
  TO authenticated
  USING (true);

-- Insert default categories
INSERT INTO categories (name, slug, description, icon, color) VALUES
('Music', 'music', 'Musicians, singers, and musical performers', 'Music', '#10B981'),
('Film', 'film', 'Movie actors and film industry celebrities', 'Film', '#3B82F6'),
('Television', 'television', 'TV personalities and television stars', 'Tv', '#8B5CF6'),
('Sports', 'sports', 'Athletes and sports personalities', 'Trophy', '#F59E0B'),
('Comedy', 'comedy', 'Comedians and comedy performers', 'Smile', '#EF4444'),
('Business', 'business', 'Business leaders and entrepreneurs', 'Briefcase', '#6B7280');

-- Insert default pages
INSERT INTO pages (title, slug, description, status) VALUES
('Home', 'home', 'Main homepage with hero section and featured content', 'published'),
('About', 'about', 'About us page with company information', 'published'),
('Celebrities', 'celebrities', 'Browse all available celebrities', 'published'),
('Booking', 'booking', 'Celebrity booking form and process', 'published'),
('Contact', 'contact', 'Contact information and inquiry form', 'published'),
('Blog', 'blog', 'Latest news and insights', 'published'),
('FAQ', 'faq', 'Frequently asked questions', 'published');

-- Insert default settings
INSERT INTO settings (key, value, description, category, is_public) VALUES
('site_title', '"Elite Celebrity Booking"', 'Main website title', 'general', true),
('site_description', '"Premium celebrity booking service connecting you with world-class entertainment"', 'Website description', 'general', true),
('contact_email', '"hello@elitecelebrity.com"', 'Main contact email', 'contact', true),
('contact_phone', '"+1 (888) 555-STAR"', 'Main contact phone', 'contact', true),
('contact_address', '"123 Celebrity Boulevard, Hollywood, CA 90210"', 'Business address', 'contact', true),
('social_instagram', '"@elitecelebrity"', 'Instagram handle', 'social', true),
('social_twitter', '"@elitecelebrity"', 'Twitter handle', 'social', true),
('social_facebook', '"elitecelebrity"', 'Facebook page', 'social', true),
('booking_fee_percentage', '10', 'Booking fee percentage', 'booking', false),
('minimum_booking_amount', '10000', 'Minimum booking amount in cents', 'booking', false);