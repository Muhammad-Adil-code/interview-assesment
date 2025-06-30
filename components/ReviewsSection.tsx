'use client';

import { useState, useEffect } from 'react';
import { supabase, Review } from '@/lib/supabase';
import { ReviewCard } from './ReviewCard';

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setError(null);
      
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_featured', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error);
        setError('Failed to load reviews');
        return;
      }

      console.log('Fetched reviews:', data);
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setError('Network error loading reviews');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-6 sm:h-8 bg-gray-200 rounded w-64 sm:w-96 mx-auto mb-8 sm:mb-12"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-lg p-4 sm:p-6 shadow-md">
                    <div className="w-full h-32 sm:h-48 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-16 sm:h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="h-3 sm:h-4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-600 uppercase tracking-wide mb-6 sm:mb-8">
              THOUSANDS OF PEOPLE LOVE CELLTOX
            </h2>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
              {error}. Please refresh the page to try again.
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 uppercase tracking-wide">
            THOUSANDS OF PEOPLE LOVE CELLTOX
          </h2>
        </div>

        {/* Reviews Grid */}
        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">No reviews available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}