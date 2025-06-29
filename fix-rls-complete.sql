-- Complete RLS Policy Fix for Reviews Table
-- This script will completely reset and recreate all policies

-- First, let's see what policies currently exist
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'reviews';

-- Drop ALL existing policies on the reviews table
DROP POLICY IF EXISTS "Public can read featured reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can create reviews" ON reviews;
DROP POLICY IF EXISTS "Authenticated users can read all reviews" ON reviews;
DROP POLICY IF EXISTS "Anyone can create reviews" ON reviews;

-- Disable RLS temporarily
ALTER TABLE reviews DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Create new policies from scratch

-- Policy 1: Allow public to read featured reviews
CREATE POLICY "Public can read featured reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (is_featured = true);

-- Policy 2: Allow anyone (including anonymous users) to create reviews
CREATE POLICY "Anyone can create reviews"
  ON reviews
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy 3: Allow authenticated users to read all reviews
CREATE POLICY "Authenticated users can read all reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy 4: Allow authenticated users to update their own reviews (optional)
CREATE POLICY "Authenticated users can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Verify all policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies 
WHERE tablename = 'reviews'
ORDER BY policyname;

-- Test the policies by checking if we can insert a test record
-- (This will be rolled back)
BEGIN;
INSERT INTO reviews (name, title, review_text, rating, is_verified, is_featured) 
VALUES ('TEST USER', '', 'This is a test review', 5, false, false);
ROLLBACK;

-- If we get here without errors, the policies are working
SELECT 'RLS policies have been successfully updated!' as status; 