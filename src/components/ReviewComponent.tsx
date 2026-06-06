import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from '../interfaces/types';

/**
 * ReviewComponentProps Interface
 * Defines variables required to render a user review.
 */
interface ReviewComponentProps {
  review: Review; // Individual review item containing rating, author name, comments etc.
}

/**
 * ReviewComponent
 * Renders a stylized card for a single user review, including star scores and user avatars.
 */
export const ReviewComponent: React.FC<ReviewComponentProps> = ({ review }) => {
  
  // Renders 5 star icons representing the numeric rating score
  const renderStars = (ratingScore: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      return (
        <Star
          key={index}
          size={16}
          // Highlight stars up to the rating score, leave the rest unhighlighted
          fill={starNumber <= ratingScore ? 'var(--accent-color)' : 'none'}
          color={starNumber <= ratingScore ? 'var(--accent-color)' : 'var(--text-muted)'}
          style={{ marginRight: '2px' }}
        />
      );
    });
  };

  return (
    <div className="review-card glass-panel">
      
      {/* Reviewer Meta Information Header */}
      <div className="review-header">
        
        <div className="review-user-info">
          {/* User Profile Avatar Image (using a fallback if avatar URL is missing) */}
          <img 
            src={review.userAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100'} 
            alt={`${review.userName} profile`} 
            className="review-avatar"
            loading="lazy"
          />
          <div>
            <span className="review-username">{review.userName}</span>
            {/* Display review date */}
            <div className="review-date">{review.date}</div>
          </div>
        </div>

        {/* Highlighted Star Rating Score */}
        <div className="review-rating-stars" aria-label={`Rated ${review.rating} stars out of 5`}>
          {renderStars(review.rating)}
        </div>

      </div>

      {/* Review Content Comments text */}
      <p className="review-comment">
        "{review.comment}"
      </p>

    </div>
  );
};
