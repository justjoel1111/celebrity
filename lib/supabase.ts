
// Mock Supabase types and functions for development
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image_url: string | null;
  rating: number;
  content: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
}

// Mock function for testimonials
export async function getTestimonials(featured?: boolean): Promise<Testimonial[]> {
  // Return mock data for development
  const mockTestimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Event Director, Fortune 500 Company',
      image_url: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      content: "Elite Celebrity Booking made our corporate event unforgettable. The professionalism and attention to detail were exceptional. Our celebrity guest was perfectly matched to our audience.",
      featured: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Wedding Planner, Luxury Weddings',
      image_url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      content: "I've worked with many booking agencies, but none compare to Elite Celebrity. Their network of verified celebrities and seamless booking process is unmatched in the industry.",
      featured: true,
      created_at: '',
      updated_at: '',
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      role: 'Charity Foundation Director',
      image_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      content: "Thanks to Elite Celebrity Booking, our charity gala exceeded all expectations. The celebrity appearance elevated our event and helped us raise 300% more than previous years.",
      featured: true,
      created_at: '',
      updated_at: '',
    },
  ];

  if (featured !== undefined) {
    return mockTestimonials.filter(testimonial => testimonial.featured === featured);
  }

  return mockTestimonials;
}
