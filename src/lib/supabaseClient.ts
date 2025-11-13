// Placeholder for Supabase integration
// Uncomment and configure when ready to integrate Supabase

/*
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Example: Upload image to Supabase Storage
export const uploadImage = async (file: File, bucket: string = 'gallery') => {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${fileName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(filePath);

  return publicUrl;
};

// Example: Delete image from Supabase Storage
export const deleteImage = async (filePath: string, bucket: string = 'gallery') => {
  const { error } = await supabase.storage
    .from(bucket)
    .remove([filePath]);

  if (error) {
    throw error;
  }
};

// Example: Fetch gallery images from database
export const fetchGalleryImages = async () => {
  const { data, error } = await supabase
    .from('gallery_images')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};

// Example: Add gallery image to database
export const addGalleryImage = async (imageUrl: string, alt: string) => {
  const { data, error } = await supabase
    .from('gallery_images')
    .insert([{ image_url: imageUrl, alt_text: alt }]);

  if (error) {
    throw error;
  }

  return data;
};
*/

export {};
