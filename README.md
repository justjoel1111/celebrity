# Elite Celebrity Booking Platform

A dynamic, full-stack celebrity booking platform built with Next.js, TypeScript, and Supabase.

## 🚀 Features

- **Dynamic Content Management**: Admin-controlled pages, celebrities, and content
- **Admin Panel**: Complete administrative interface for managing all aspects of the site
- **Celebrity Management**: Full CRUD operations for celebrity profiles
- **Booking System**: Handle celebrity booking requests with status tracking
- **Image Management**: Upload and manage images through Supabase Storage
- **Testimonials**: Client testimonials management
- **Settings Management**: Global site configuration
- **Authentication**: Secure admin authentication system

## 🛠️ Tech Stack

- **Frontend**: Next.js 13, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **UI Components**: Radix UI, shadcn/ui
- **Styling**: Tailwind CSS with custom design system

## 📋 Setup Instructions

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to your project dashboard
3. Navigate to **SQL Editor**
4. Copy and paste the contents of `supabase/migrations/20250110000000_initial_setup.sql`
5. Click **Run** to execute the migration
6. Go to **Settings > API** and copy your:
   - Project URL
   - Anon public key

### 2. Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Storage Setup

1. In your Supabase dashboard, go to **Storage**
2. Create a new bucket called `media`
3. Set the bucket to **Public** for image access

### 4. Run the Application

```bash
npm install
npm run dev
```

## 🔐 Admin Access

- **URL**: `/admin/login`
- **Demo Credentials**: 
  - Email: `admin@elitecelebrity.com`
  - Password: `admin123`

## 📁 Project Structure

```
├── app/
│   ├── admin/           # Admin panel pages
│   ├── celebrities/     # Celebrity pages
│   ├── booking/         # Booking system
│   └── ...             # Other public pages
├── components/
│   ├── ui/             # Reusable UI components
│   ├── sections/       # Page sections
│   └── ...
├── lib/
│   ├── api.ts          # API functions
│   ├── supabase-client.ts  # Supabase client
│   └── utils.ts
└── supabase/
    └── migrations/     # Database migrations
```

## 🎯 Admin Panel Features

### Dashboard
- Overview statistics
- Recent bookings
- Featured celebrities
- Quick actions

### Celebrity Management
- Add/edit/delete celebrities
- Upload celebrity photos
- Manage availability status
- Set pricing and categories

### Content Management
- Dynamic page content
- Content blocks system
- Image gallery management
- SEO settings

### Booking Management
- View all booking requests
- Update booking status
- Manage payments
- Client communication

### Media Management
- Upload images
- Organize media files
- Image optimization
- Alt text management

### Settings
- Site configuration
- Contact information
- Social media links
- Global preferences

## 🔄 Database Schema

The application uses a comprehensive PostgreSQL schema with the following main tables:

- `pages` - Website pages and metadata
- `content_blocks` - Dynamic content sections
- `celebrities` - Celebrity profiles and information
- `categories` - Celebrity categories
- `testimonials` - Client testimonials
- `bookings` - Booking requests and management
- `images` - Image metadata and storage
- `settings` - Global site settings
- `admin_users` - Admin authentication

## 🚀 Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service. Make sure to:

1. Set up environment variables in your hosting platform
2. Configure your Supabase project for production
3. Update CORS settings in Supabase if needed

## 📝 License

This project is licensed under the MIT License.