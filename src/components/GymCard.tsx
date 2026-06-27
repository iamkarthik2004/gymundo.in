import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Phone, ArrowRight, Edit } from 'lucide-react';
import type { Gym } from '../interfaces/types';
import { EditGymModal } from './EditGymModal';

/**
 * GymCardProps Interface
 * Defines the parameters for the GymCard component.
 */
interface GymCardProps {
  gym: Gym; // The gym object containing info to display
}

/**
 * GymCard Component
 * Displays a summary of a gym listing including image, ratings, facilities, and physical location.
 */
export const GymCard: React.FC<GymCardProps> = ({ gym }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <div className="gym-card glass-panel">
        
        {/* Gym Photo Banner Area with Rating Badge and Quick Edit Badge */}
        <div className="gym-card-img-wrapper">
          <img 
            src={gym.images[0]} 
            alt={`${gym.name} facility`} 
            className="gym-card-img"
            loading="lazy"
          />
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsEditOpen(true);
            }}
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: 'rgba(18, 18, 18, 0.85)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
              zIndex: 5,
              backdropFilter: 'blur(4px)',
              transition: 'all 0.2s ease'
            }}
            title="Edit gym details and photos"
          >
            <Edit size={12} style={{ color: 'var(--accent-color)' }} />
            <span>Edit Profile</span>
          </button>

          <div className="gym-card-rating">
            <Star size={14} fill="currentColor" />
            <span>{gym.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Gym Information Content */}
        <div className="gym-card-info">
          
          {/* District Tag */}
          <span className="gym-card-district">{gym.district}</span>
          
          {/* Gym Name Link */}
          <h3 className="gym-card-title">
            <Link to={`/gyms/${gym.id}`}>{gym.name}</Link>
          </h3>
          
          {/* Address with MapPin Icon */}
          <p className="gym-card-address">
            <span style={{ display: 'inline-flex', marginRight: '6px', color: 'var(--accent-color)' }}>
              <MapPin size={14} />
            </span>
            {gym.address}
          </p>

          {/* List of Facilities (Displaying up to 3 for clean layout fit) */}
          <div className="gym-card-facilities">
            {gym.facilities.slice(0, 3).map((facility, idx) => (
              <span key={idx} className="facility-badge">
                {facility}
              </span>
            ))}
            {gym.facilities.length > 3 && (
              <span className="facility-badge" style={{ color: 'var(--text-primary)' }}>
                +{gym.facilities.length - 3} more
              </span>
            )}
          </div>

          {/* Card Actions Footer */}
          <div className="gym-card-footer">
            {/* Quick Phone contact link */}
            <a 
              href={`tel:${gym.phone}`} 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontSize: '13px', 
                color: 'var(--text-secondary)' 
              }}
              onClick={(e) => e.stopPropagation()} // Prevent trigger page navigation
              aria-label={`Call ${gym.name}`}
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => setIsEditOpen(true)}
                className="btn btn-secondary"
                style={{ padding: '8px 12px', fontSize: '13px', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                title="Edit Gym"
              >
                <Edit size={13} />
                <span>Edit</span>
              </button>

              <Link to={`/gyms/${gym.id}`} className="btn btn-primary" style={{ padding: '8px 14px', fontSize: '13px', borderRadius: '8px' }}>
                <span>View Details</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

      </div>

      {/* Edit Gym Modal */}
      <EditGymModal 
        gym={gym}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />
    </>
  );
};

