# Database Setup Instructions

## Issue
The project is showing 404 errors when trying to fetch reviews from Supabase because the `reviews` table doesn't exist in the database.

## Solution
You need to run the database setup script in your Supabase dashboard.

### Steps:

1. **Go to your Supabase Dashboard**
   - Visit: https://supabase.com/dashboard
   - Sign in to your account
   - Select your project: `dolwaaepqsccdnlfilug`

2. **Open the SQL Editor**
   - In the left sidebar, click on "SQL Editor"
   - Click "New query"

3. **Run the Setup Script**
   - Copy the contents of `setup-database.sql` file
   - Paste it into the SQL Editor
   - Click "Run" to execute the script

4. **Verify the Setup**
   - The script will create the `reviews` table
   - Insert 6 sample reviews
   - Show a count of total and featured reviews

### Alternative Method (if you prefer manual setup):

1. **Create Table Manually**
   - Go to "Table Editor" in Supabase
   - Click "New table"
   - Name: `reviews`
   - Add columns:
     - `id` (uuid, primary key)
     - `name` (text, not null)
     - `title` (text)
     - `review_text` (text, not null)
     - `rating` (integer, 1-5)
     - `image_url` (text)
     - `is_verified` (boolean, default true)
     - `is_featured` (boolean, default false)
     - `created_at` (timestamp, default now())
     - `updated_at` (timestamp, default now())

2. **Set up Row Level Security**
   - Enable RLS on the table
   - Add policies for public read access to featured reviews
   - Add policies for authenticated users

3. **Insert Sample Data**
   - Use the INSERT statements from the setup script

## After Setup
Once you've run the setup script, refresh your Next.js application and the 404 errors should be resolved. The reviews section should display the sample testimonials.

## Troubleshooting
- If you still see errors, check the browser console for specific error messages
- Verify that the Supabase URL and API key in `lib/supabase.ts` are correct
- Make sure the table was created successfully in the Supabase dashboard 