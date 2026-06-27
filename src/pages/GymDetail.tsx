import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Phone, Mail, Clock, ShieldCheck, Edit } from 'lucide-react';
import { MapComponent } from '../components/MapComponent';
import { useGyms } from '../context/GymContext';
import { EditGymModal } from '../components/EditGymModal';

/**
 * GymDetail Page Component
 * Renders full profile details of a gym. Features galleries, opening schedules,
 * contact detail cards, and map widgets.
 */
export const GymDetail: React.FC = () => {
  // Extract dynamic gymId URL param (e.g., /gyms/101)
  const { gymId } = useParams<{ gymId: string }>();
  const parsedGymId = parseInt(gymId || '0', 10);

  const { gyms } = useGyms();
  const [isEditOpen, setIsEditOpen] = useState(false);

  // Retrieve gym object matching the URL ID
  const gym = gyms.find((g) => g.id === parsedGymId);

  // Construct Google Maps search or location link
  const googleMapsUrl = useMemo(() => {
    if (!gym) return '';
    return gym.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.name + ', ' + gym.address)}`;
  }, [gym]);

  // If gym ID is invalid, show a fallback warning block
  if (!gym) {
    return (
      <div className="container section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <MapPin size={48} style={{ color: 'var(--accent-color)', marginBottom: '16px' }} />
        <h2>Gym Listing Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '12px 0 24px 0' }}>The gym profile page you are requesting could not be loaded.</p>
        <Link to="/districts" className="btn btn-primary">
          <ArrowLeft size={16} /> Explore All Gyms
        </Link>
      </div>
    );
  }

  return (
    <div className="gym-detail-page" style={{ paddingBottom: '80px' }}>
      
      {/* 1. BREADCRUMBS HEADER */}
      <div className="container" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link 
          to={`/districts/${gym.district.toLowerCase().replace(/\s+/g, '')}`} 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontSize: '14px', fontWeight: '600' }}
        >
          <ArrowLeft size={16} /> Back to {gym.district} Gyms
        </Link>
        
        <button 
          onClick={() => setIsEditOpen(true)}
          className="btn btn-secondary"
          style={{ padding: '8px 16px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '13px', borderRadius: '8px' }}
        >
          <Edit size={14} style={{ color: 'var(--accent-color)' }} />
          <span>Edit Profile & Photos</span>
        </button>
      </div>

      {/* 2. PHOTO GALLERY GRID */}
      <div className="container">
        <div className="gym-gallery" style={{ position: 'relative' }}>
          {/* Main Large Photo */}
          <img src={gym.images[0]} alt={`${gym.name} interior`} className="gallery-main" />
          
          {/* Right Thumbnails Column (if photos exist) */}
          <div className="gallery-thumbs">
            <img src={gym.images[1] || gym.images[0]} alt={`${gym.name} cardio deck`} className="gallery-thumb" />
            <img src={gym.images[2] || gym.images[0]} alt={`${gym.name} facility`} className="gallery-thumb" />
          </div>
        </div>
      </div>

      {/* 3. CORE PAGE COLUMNS LAYOUT */}
      <div className="container">
        <div className="gym-details-grid">
          
          {/* LEFT COLUMN: MAIN PROFILE DETAILS */}
          <main className="gym-main-info">
            
            {/* Header Block with Brand Logo */}
            <div className="gym-header-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <img src={gym.logo} alt={`${gym.name} logo`} className="gym-large-logo" />
                <div className="gym-title-meta">
                  <h1 style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-0.5px' }}>{gym.name}</h1>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px' }}>
                    <span style={{ color: 'var(--accent-color)', fontWeight: '600', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>
                      {gym.district} District
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', fontWeight: '600' }}>
                      <Star size={16} fill="var(--accent-color)" color="var(--accent-color)" />
                      <span>{gym.rating.toFixed(1)} Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setIsEditOpen(true)}
                className="btn btn-primary"
                style={{ padding: '10px 20px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', borderRadius: '10px', flexShrink: 0 }}
              >
                <Edit size={16} />
                <span>Edit Gym</span>
              </button>
            </div>

            {/* Description Text */}
            <div className="gym-desc-box">
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
                About the Facility
              </h2>
              <p>{gym.description}</p>
            </div>

            {/* Facilities Badges Block */}
            <div className="gym-facility-section">
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)' }}>
                Available Facilities
              </h2>
              <div className="facilities-large-badges">
                {gym.facilities.map((fac, index) => (
                  <span key={index} className="facility-large-badge">
                    <ShieldCheck size={16} style={{ color: 'var(--accent-color)' }} />
                    <span>{fac}</span>
                  </span>
                ))}
              </div>
            </div>

          </main>

          {/* RIGHT COLUMN: STICKY CONTACT & OPENING HOURS */}
          <aside className="gym-sidebar-cards">
            
            {/* Opening Hours Info Card */}
            <div className="sidebar-info-card glass-panel">
              <h3 className="sidebar-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} style={{ color: 'var(--accent-color)' }} />
                <span>Opening Hours</span>
              </h3>
              <ul className="hours-list">
                <li className="hours-row">
                  <span className="hours-day">Weekdays</span>
                  <span className="hours-time">{gym.openingHours.weekdays}</span>
                </li>
                <li className="hours-row">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">{gym.openingHours.saturday}</span>
                </li>
                <li className="hours-row">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">{gym.openingHours.sunday}</span>
                </li>
              </ul>
            </div>

            {/* Contact Details Info Card */}
            <div className="sidebar-info-card glass-panel">
              <h3 className="sidebar-card-title">Contact & Location</h3>
              <ul className="contact-info-list">
                <li className="contact-info-item">
                  <MapPin size={16} />
                  <a 
                    href={googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseOver={(e) => (e.currentTarget.style.color = 'var(--accent-color)')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {gym.address}
                  </a>
                </li>
                <li className="contact-info-item">
                  <Phone size={16} />
                  <a href={`tel:${gym.phone}`} style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
                    {gym.phone}
                  </a>
                </li>
                <li className="contact-info-item">
                  <Mail size={16} />
                  <a href={`mailto:${gym.email}`} style={{ color: 'var(--text-secondary)' }}>
                    {gym.email}
                  </a>
                </li>
              </ul>

              {/* Localized Map centered on the gym pin */}
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                title="Click to open in Google Maps"
                style={{ display: 'block', textDecoration: 'none', marginTop: '16px' }}
              >
                <div className="sidebar-map-box" style={{ pointerEvents: 'none', transition: 'border-color 0.2s' }}
                     onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--accent-color)')}
                     onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border-color)')}>
                  <MapComponent 
                    gyms={[gym]} 
                    center={[gym.latitude, gym.longitude]} 
                    zoom={15} 
                    height="200px"
                    activeGymId={gym.id}
                  />
                </div>
              </a>

              {/* CTA call action button */}
              <a 
                href={`tel:${gym.phone}`} 
                className="btn btn-primary" 
                style={{ width: '100%', marginTop: '20px' }}
              >
                Call Front Desk
              </a>
            </div>

          </aside>

        </div>
      </div>

      {/* Edit Gym Modal */}
      <EditGymModal 
        gym={gym}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />

    </div>
  );
};

