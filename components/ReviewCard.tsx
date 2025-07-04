import { Star, CheckCircle } from 'lucide-react';
import { Review } from '@/lib/supabase';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-gray-100 rounded-lg  sm:p-6 shadow-md">
      {/* Reviewer Image */}
      <div style={{height:'185px'}} className="w-full sm:h-48 mb-3 sm:mb-4 overflow-hidden rounded-lg">
        <img 
          src={review.image_url || 'https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400'} 
          alt={`${review.name} testimonial`}
          className="w-full h-full object-cover"
        />
      </div>
        <div className='p-4'>
      {/* Star Rating */}
      <div className="flex justify-center mb-3  sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
            style={{ width: '17px', height: '17px', opacity: 1, transform: 'rotate(0deg)' }}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote style={{
        fontFamily: 'HarmoniaSansW01-Regular, Arial, sans-serif',
        fontWeight: 540,
        fontStyle: 'normal',
        fontSize: '15px',
        lineHeight: '150%',
        letterSpacing: '0px',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'black',
        marginBottom: '16px',
      }}>
        "{review.review_text}"
      </blockquote>

      {/* Attribution */}
      <div style={{transform:'scalY(1.5)', fontSize:'13px' ,width:'300px'}} className="flex items-center justify-center gap-1 sm:gap-2 text-xs font-bold text-gray-800">
        <span>— {review.title}{review.name}</span>
        <span className="text-gray-400">•</span>
        {review.is_verified && (
          <>
            <div style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="/images/sealcheck.png" alt="Verified Seal" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
            </div>
            <span className="text-xs">VERIFIED BUYER</span>
          </>
        )}
      </div>
      </div>
    </div>
  );
}