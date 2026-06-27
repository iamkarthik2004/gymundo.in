import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { GymCard } from '../components/GymCard';
import { MapComponent } from '../components/MapComponent';
import { useGyms } from '../context/GymContext';

/**
 * Home Page Component
 * Renders the homepage dashboard including branding hero, search routing,
 * statistics counters, featured gyms, popular cities, and a map preview.
 */
export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { gyms, districts } = useGyms();
  
  // State for tracking search queries typed by the user in the main hero search bar
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle search submission by routing users to the districts page with the search text as a query parameter
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/districts?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/districts');
    }
  };

  // Extract featured gyms (with ratings of 4.8 and higher)
  const featuredGyms = gyms.filter((gym) => gym.rating >= 4.8).slice(0, 3);

  // Set the default geographic center of the map to Kerala.
  const keralaCenter: [number, number] = [10.5, 76.5];

  return (
    <div className="home-page-container">
      
      {/* 1. HERO SECTION */}
      <header className="hero">
        <div className="container hero-content">
          <div className="hero-badge">
            <TrendingUp size={14} />
            <span>Kerala's Premier Fitness Finder</span>
          </div>
          
          <h1 className="hero-title">
            Find the Best Gyms<br />
            Across <span>Kerala</span>
          </h1>
          
          <p className="hero-subtitle">
            Explore gyms district-wise across Kerala with maps, ratings, facilities, and contact information.
          </p>

          {/* Large Reusable Search Bar Form */}
          <form onSubmit={handleSearchSubmit} className="hero-search-wrapper">
            <SearchBar
              placeholder="Search by district or gym name (e.g., Kottayam, Eranakulam)..."
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery('')}
            />
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ marginTop: '16px', padding: '14px 32px', fontSize: '16px' }}
            >
              Search Gyms Now
            </button>
          </form>
        </div>
      </header>

      {/* 2. STATISTICS COUNTERS SECTION */}
      <section className="container" style={{ position: 'relative' }}>
        <div className="stats-bar glass-panel">
          <div className="stat-item">
            <span className="stat-number">{gyms.length}</span>
            <span className="stat-label">Premium Gyms</span>
          </div>
          <div className="stat-item" style={{ borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', padding: '0 40px' }}>
            <span className="stat-number">{districts.length}</span>
            <span className="stat-label">Districts Covered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8★</span>
            <span className="stat-label">Average Rating</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED GYMS SECTION */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Elite Clubs</span>
            <h2 className="section-title">Featured Premium Gyms</h2>
          </div>

          {/* Grid display for featured gym listings */}
          <div className="grid-3">
            {featuredGyms.map((gym) => (
              <GymCard key={gym.id} gym={gym} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={() => navigate('/districts')} 
              className="btn btn-primary"
            >
              Explore All listings
            </button>
          </div>
        </div>
      </section>

      {/* 4. LISTING CTA SECTION */}
      <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="glass-panel" style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 500px', textAlign: 'left' }}>
              <span className="section-subtitle" style={{ display: 'inline', margin: 0 }}>Own a Gym in Kerala?</span>
              <h2 style={{ fontSize: '28px', fontWeight: '800', marginTop: '8px', marginBottom: '8px' }}>Register Your Fitness Center on Gymundo</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                Join Kerala's premier gym network. Let customers search your amenities, contact you directly, find you on Google Maps, and write verified reviews. Listing is completely free.
              </p>
            </div>
            <div style={{ flex: '0 0 auto' }}>
              <button onClick={() => navigate('/add-gym')} className="btn btn-primary" style={{ padding: '14px 28px' }}>
                List Your Gym Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE MAP PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Fitness Map</span>
            <h2 className="section-title">Interactive Gym Finder</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '10px' }}>
              Pan and click on markers across Kerala to discover gym details instantly.
            </p>
          </div>

          {/* Leaflet map displaying pins for ALL gyms */}
          <div className="home-map-preview">
            <MapComponent 
              gyms={gyms} 
              center={keralaCenter} 
              zoom={7} 
              height="450px" 
            />
          </div>
        </div>
      </section>

    </div>
  );
};
