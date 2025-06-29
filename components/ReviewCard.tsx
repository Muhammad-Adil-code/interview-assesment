import { Star, CheckCircle } from 'lucide-react';
import { Review } from '@/lib/supabase';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-md">
      {/* Reviewer Image */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
        <img 
          src={review.image_url || 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400'} 
          alt={`${review.name} testimonial`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Star Rating */}
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-4 w-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-gray-700 text-center mb-4 leading-relaxed">
        "{review.review_text}"
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-800">
        <span>— {review.title}{review.name}</span>
        <span className="text-gray-400">•</span>
        {review.is_verified && (
          <>
            <div className="w-3 h-3 bg-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="h-2 w-2 text-white" />
            </div>
            <span>VERIFIED BUYER</span>
          </>
        )}
      </div>
    </div>
  );
}