import { supabase } from './supabase-client';
import type { Tables, Inserts, Updates } from './supabase-client';

// Generic CRUD operations
export class ApiService {
  // Pages
  static async getPages() {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('status', 'published')
      .order('sort_order');
    
    if (error) throw error;
    return data;
  }

  static async getPageBySlug(slug: string) {
    const { data, error } = await supabase
      .from('pages')
      .select(`
        *,
        content_blocks (
          id,
          type,
          title,
          content,
          sort_order,
          is_active
        )
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .single();
    
    if (error) throw error;
    return data;
  }

  // Content Blocks
  static async getContentBlocks(pageId: string) {
    const { data, error } = await supabase
      .from('content_blocks')
      .select('*')
      .eq('page_id', pageId)
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) throw error;
    return data;
  }

  // Categories
  static async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');
    
    if (error) throw error;
    return data;
  }

  // Celebrities
  static async getCelebrities(filters?: {
    category?: string;
    featured?: boolean;
    limit?: number;
    search?: string;
  }) {
    let query = supabase
      .from('celebrities')
      .select(`
        *,
        categories (
          id,
          name,
          slug,
          color,
          icon
        )
      `)
      .eq('is_active', true);

    if (filters?.category) {
      query = query.eq('categories.slug', filters.category);
    }

    if (filters?.featured) {
      query = query.eq('featured', true);
    }

    if (filters?.search) {
      query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
    }

    if (filters?.limit) {
      query = query.limit(filters.limit);
    }

    query = query.order('sort_order').order('created_at', { ascending: false });

    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  }

  static async getCelebrityBySlug(slug: string) {
    const { data, error } = await supabase
      .from('celebrities')
      .select(`
        *,
        categories (
          id,
          name,
          slug,
          color,
          icon
        )
      `)
      .eq('slug', slug)
      .eq('is_active', true)
      .single();
    
    if (error) throw error;
    return data;
  }

  // Testimonials
  static async getTestimonials(featured?: boolean) {
    let query = supabase
      .from('testimonials')
      .select('*')
      .eq('is_active', true);

    if (featured !== undefined) {
      query = query.eq('featured', featured);
    }

    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;
    
    if (error) throw error;
    return data;
  }

  // Settings
  static async getSettings(category?: string) {
    let query = supabase
      .from('settings')
      .select('*')
      .eq('is_public', true);

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;
    
    if (error) throw error;
    
    // Convert to key-value object
    const settings: Record<string, any> = {};
    data?.forEach(setting => {
      settings[setting.key] = setting.value;
    });
    
    return settings;
  }

  // Bookings
  static async createBooking(booking: Inserts<'bookings'>) {
    const { data, error } = await supabase
      .from('bookings')
      .insert(booking)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  // Images
  static async uploadImage(file: File, bucket: string = 'images') {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${bucket}/${fileName}`;

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('media')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    // Save image metadata to database
    const { data: imageData, error: imageError } = await supabase
      .from('images')
      .insert({
        filename: fileName,
        original_name: file.name,
        url: publicUrl,
        storage_path: filePath,
        file_size: file.size,
        mime_type: file.type,
      })
      .select()
      .single();

    if (imageError) throw imageError;

    return imageData;
  }
}

// Admin API functions (require authentication)
export class AdminApiService {
  // Pages Management
  static async getAllPages() {
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .order('sort_order');
    
    if (error) throw error;
    return data;
  }

  static async createPage(page: Inserts<'pages'>) {
    const { data, error } = await supabase
      .from('pages')
      .insert(page)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updatePage(id: string, updates: Updates<'pages'>) {
    const { data, error } = await supabase
      .from('pages')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async deletePage(id: string) {
    const { error } = await supabase
      .from('pages')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Content Blocks Management
  static async createContentBlock(contentBlock: Inserts<'content_blocks'>) {
    const { data, error } = await supabase
      .from('content_blocks')
      .insert(contentBlock)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updateContentBlock(id: string, updates: Updates<'content_blocks'>) {
    const { data, error } = await supabase
      .from('content_blocks')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async deleteContentBlock(id: string) {
    const { error } = await supabase
      .from('content_blocks')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Categories Management
  static async getAllCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('sort_order');
    
    if (error) throw error;
    return data;
  }

  static async createCategory(category: Inserts<'categories'>) {
    const { data, error } = await supabase
      .from('categories')
      .insert(category)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updateCategory(id: string, updates: Updates<'categories'>) {
    const { data, error } = await supabase
      .from('categories')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async deleteCategory(id: string) {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Celebrities Management
  static async getAllCelebrities() {
    const { data, error } = await supabase
      .from('celebrities')
      .select(`
        *,
        categories (
          id,
          name,
          slug,
          color,
          icon
        )
      `)
      .order('sort_order');
    
    if (error) throw error;
    return data;
  }

  static async createCelebrity(celebrity: Inserts<'celebrities'>) {
    const { data, error } = await supabase
      .from('celebrities')
      .insert(celebrity)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updateCelebrity(id: string, updates: Updates<'celebrities'>) {
    const { data, error } = await supabase
      .from('celebrities')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async deleteCelebrity(id: string) {
    const { error } = await supabase
      .from('celebrities')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Testimonials Management
  static async getAllTestimonials() {
    const { data, error } = await supabase
      .from('testimonials')
      .select(`
        *,
        celebrities (
          id,
          name,
          slug
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }

  static async createTestimonial(testimonial: Inserts<'testimonials'>) {
    const { data, error } = await supabase
      .from('testimonials')
      .insert(testimonial)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async updateTestimonial(id: string, updates: Updates<'testimonials'>) {
    const { data, error } = await supabase
      .from('testimonials')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  static async deleteTestimonial(id: string) {
    const { error } = await supabase
      .from('testimonials')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  }

  // Bookings Management
  static async getAllBookings() {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        celebrities (
          id,
          name,
          slug,
          image_url
        )
      `)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }

  static async updateBooking(id: string, updates: Updates<'bookings'>) {
    const { data, error } = await supabase
      .from('bookings')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  // Settings Management
  static async getAllSettings() {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .order('category', { ascending: true })
      .order('key', { ascending: true });
    
    if (error) throw error;
    return data;
  }

  static async updateSetting(key: string, value: any) {
    const { data, error } = await supabase
      .from('settings')
      .upsert({
        key,
        value,
        updated_at: new Date().toISOString()
      })
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }

  // Images Management
  static async getAllImages() {
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }

  static async deleteImage(id: string) {
    // First get the image to delete from storage
    const { data: image, error: fetchError } = await supabase
      .from('images')
      .select('storage_path')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // Delete from storage
    const { error: storageError } = await supabase.storage
      .from('media')
      .remove([image.storage_path]);

    if (storageError) throw storageError;

    // Delete from database
    const { error: dbError } = await supabase
      .from('images')
      .delete()
      .eq('id', id);

    if (dbError) throw dbError;
  }
}