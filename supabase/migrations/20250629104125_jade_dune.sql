/*
  # Create reviews table for CellTox testimonials

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text, reviewer name)
      - `title` (text, optional title like "DR." prefix)
      - `review_text` (text, the testimonial content)
      - `rating` (integer, 1-5 stars)
      - `image_url` (text, profile image URL)
      - `is_verified` (boolean, verified buyer status)
      - `is_featured` (boolean, show on homepage)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for public read access to featured reviews
    - Add policy for authenticated users to create reviews
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text DEFAULT '',
  review_text text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  image_url text DEFAULT '',
  is_verified boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access to featured reviews
CREATE POLICY "Public can read featured reviews"
  ON reviews
  FOR SELECT
  TO public
  USING (is_featured = true);

-- Allow authenticated users to create reviews
CREATE POLICY "Authenticated users can create reviews"
  ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Allow authenticated users to read all reviews
CREATE POLICY "Authenticated users can read all reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

-- Insert sample reviews data
INSERT INTO reviews (name, title, review_text, rating, image_url, is_verified, is_featured) VALUES
(
  'ROBERT D.',
  '',
  'Traditional treatments were taking a toll on me. After adding Celltox to my regimen, I started feeling better overall. My latest check-ups have been encouraging. I''m grateful to have found this natural support.',
  5,
  'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400',
  true,
  true
),
(
  'LINDA M.',
  '',
  'I was looking for ways to support my body''s natural defenses. A friend told me about Celltox and the research behind it. I''ve been taking it regularly and feel empowered about my health choices.',
  5,
  'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  true,
  true
),
(
  'JAMES WILSON',
  'DR.',
  'I''ve been recommending Celltox as a complementary support option, and I''m impressed with what I''m seeing. The scientific research behind these compounds is fascinating, and my patients report feeling great while taking it.',
  5,
  'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400',
  true,
  true
),
(
  'MARY T.',
  '',
  'After trying everything conventional medicine had to offer, I was running out of options. Within 3 weeks of starting this protocol, my CEA markers dropped for the first time in 18 months. My oncologist couldn''t explain it. I''m now 11 months in, and my latest scan showed significant tumor reduction.',
  5,
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
  true,
  true
),
(
  'JAMES R.',
  '',
  'When I was first diagnosed, they gave me 6 months. That was 18 months ago. Not only am I still here, but my latest scans show the tumor has stopped growing. My doctors are amazed. More importantly, I feel better than I have in years.',
  5,
  'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=400',
  true,
  true
),
(
  'PATRICIA CHEN',
  'DR.',
  'I was skeptical at first, but after seeing the results in several of my own patients, I can''t ignore the evidence. What''s most remarkable is how well they tolerate this compared to traditional treatments. They maintain their quality of life while fighting cancer.',
  5,
  'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=400',
  true,
  true
);