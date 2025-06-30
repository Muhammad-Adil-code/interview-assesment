'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';

interface AddReviewFormProps {
  onClose: () => void;
  onReviewAdded: () => void;
}

export function AddReviewForm({ onClose, onReviewAdded }: AddReviewFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    review_text: '',
    rating: 5,
    image_url: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Test connection first
      const { data: testData, error: testError } = await supabase
        .from('reviews')
        .select('count')
        .limit(1);

      if (testError) {
        console.error('Supabase connection test failed:', testError);
        setError(`Connection failed: ${testError.message}`);
        return;
      }

      // Insert the review
      const reviewData = {
        name: formData.name.trim(),
        title: formData.title.trim(),
        review_text: formData.review_text.trim(),
        rating: formData.rating,
        image_url: formData.image_url.trim() || 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400',
        is_verified: true,
        is_featured: false // New reviews need approval
      };

      const { data, error } = await supabase
        .from('reviews')
        .insert([reviewData])
        .select();

      if (error) {
        console.error('Supabase request failed', error);
        setError(`Failed to submit review: ${error.message}`);
        return;
      }

      console.log('Review submitted successfully:', data);
      alert('Review submitted successfully! It will be reviewed before appearing on the site.');
      onReviewAdded();
      onClose();
    } catch (error) {
      console.error('Error adding review:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md max-h-[95vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-bold">Add Your Review</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {error && (
          <div className="mb-3 sm:mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Title (optional)</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="e.g., DR., MR., MS."
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Rating *</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="p-1 hover:scale-110 transition-transform"
                >
                  <Star
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${
                      star <= formData.rating
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300 hover:text-amber-200'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Your Review *</label>
            <textarea
              required
              value={formData.review_text}
              onChange={(e) => setFormData({ ...formData, review_text: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md h-20 sm:h-24 focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="Share your experience with CellTox..."
              minLength={10}
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-medium mb-1">Profile Image URL (optional)</label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              placeholder="https://example.com/your-photo.jpg"
            />
          </div>

          <div className="flex gap-2 pt-3 sm:pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 text-sm"
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={submitting || !formData.name.trim() || !formData.review_text.trim()}
              className="flex-1 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-sm"
            >
              {submitting ? 'Submitting...' : 'Submit Review'}
            </Button>
          </div>
        </form>

        <div className="mt-3 sm:mt-4 text-xs text-gray-500 text-center">
          Your review will be moderated before appearing on the website.
        </div>
      </div>
    </div>
  );
}