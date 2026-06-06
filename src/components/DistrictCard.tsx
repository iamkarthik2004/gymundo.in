import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { District } from '../interfaces/types';

/**
 * DistrictCardProps Interface
 * Defines properties expected by the DistrictCard component.
 */
interface DistrictCardProps {
  district: District; // The district entity containing name, image, count, etc.
}

/**
 * DistrictCard Component
 * Renders a card displaying district name, state, background image and registered gyms count.
 * Leverages premium dark hover styles and image zoom effect.
 */
export const DistrictCard: React.FC<DistrictCardProps> = ({ district }) => {
  return (
    <Link 
      to={`/districts/${district.id}`} 
      className="district-card"
      aria-label={`Explore gyms in ${district.name}`}
    >
      {/* Background Image of the District/City */}
      <img 
        src={district.image} 
        alt={`Fitness gyms in ${district.name}`} 
        className="district-card-img"
        loading="lazy"
      />

      {/* Text details overlaid on the background image */}
      <div className="district-card-content">
        <span className="district-card-state">{district.state}</span>
        
        <h3 className="district-card-name">
          <span>{district.name}</span>
          <span className="district-card-count">
            {district.gymCount} {district.gymCount === 1 ? 'Gym' : 'Gyms'}
          </span>
        </h3>

        {/* Small interaction cue */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px', 
            fontSize: '13px', 
            color: 'var(--accent-color)', 
            marginTop: '8px',
            fontWeight: '600'
          }}
        >
          <span>View Listings</span>
          <ChevronRight size={14} />
        </div>
      </div>
    </Link>
  );
};
