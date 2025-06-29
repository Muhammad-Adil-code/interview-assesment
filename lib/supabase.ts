import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://dolwaaepqsccdnlfilug.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvbHdhYWVwcXNjY2RubGZpbHVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNTg1NzksImV4cCI6MjA2NjczNDU3OX0.R9Yz0akDNoU5iCgtdxIyPUI91BVaU7yBgT8w7VVbQhs';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false
  }
});

export type Review = {
  id: string;
  name: string;
  title: string;
  review_text: string;
  rating: number;
  image_url: string;
  is_verified: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
};