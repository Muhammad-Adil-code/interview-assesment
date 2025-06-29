-- Fix RLS Policies for Reviews Table
-- Run this in your Supabase SQL Editor to allow anonymous users to add reviews

-- Drop existing policies
DROP POLICY IF EXISTS "Authenticated users can create reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can read all reviews" ON reviews;

-- Create new policy that allows both authenticated and anonymous users to create reviews
CREATE POLICY "Anyone can create reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy that allows authenticated users to read all reviews
CREATE POLICY "Authenticated users can read all reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

-- Verify the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'reviews'; 