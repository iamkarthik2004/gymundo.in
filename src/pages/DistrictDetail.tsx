import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Filter, SlidersHorizontal, MapPin } from 'lucide-react';
import { GymCard } from '../components/GymCard';
import { MapComponent } from '../components/MapComponent';
import { useGyms } from '../context/GymContext';

/**
 * DistrictDetail Page Component
 * Renders gyms belonging to a specific district. Includes interactive maps,
 * sorting by rating or alphabetical name, and filtering by facilities and star scores.
 */
export const DistrictDetail: React.FC = () => {
  // Grab the districtId from URL parameters (e.g., /districts/mumbai)
  const { districtId } = useParams<{ districtId: string }>();
  const { gyms, districts } = useGyms();

  // Find the selected district object based on URL id parameter
  const district = districts.find((d) => d.id === districtId);

  // If district ID is invalid, show a friendly fallback message
  if (!district) {
    return (
      <div className="container section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <MapPin size={48} style={{ color: 'var(--accent-color)', marginBottom: '16px' }} />
        <h2>District Not Found</h2>
        <p style={{ color: 'var(--text-secondary)', margin: '12px 0 24px 0' }}>The location you are looking for does not exist or has been removed.</p>
        <Link to="/districts" className="btn btn-primary">
          <ArrowLeft size={16} /> Back to Districts
        </Link>
      </div>
    );
  }

  // Retrieve all gyms belonging to this specific district
  const districtGyms = useMemo(() => {
    return gyms.filter((gym) => gym.district.toLowerCase() === district.name.toLowerCase());
  }, [gyms, district.name]);

  // Extract all unique facilities across all gyms in this district to build the filter options dynamically
  const availableFacilities = useMemo(() => {
    const facilitiesSet = new Set<string>();
    districtGyms.forEach((gym) => {
      gym.facilities.forEach((facility) => facilitiesSet.add(facility));
    });
    return Array.from(facilitiesSet);
  }, [districtGyms]);

  // --- FILTER & SORT STATE ---
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>('rating-desc'); // default sort: rating high to low

  // Toggle facility filter selection
  const handleFacilityToggle = (facilityName: string) => {
    if (selectedFacilities.includes(facilityName)) {
      setSelectedFacilities(selectedFacilities.filter((f) => f !== facilityName));
    } else {
      setSelectedFacilities([...selectedFacilities, facilityName]);
    }
  };

  // Reset all active filters to default states
  const handleResetFilters = () => {
    setSelectedFacilities([]);
    setMinRating(0);
    setSortBy('rating-desc');
  };

  // --- FILTERING & SORTING COMPUTATION ---
  const processedGyms = useMemo(() => {
    let result = [...districtGyms];

    // 1. Filter by Minimum Star Rating
    if (minRating > 0) {
      result = result.filter((gym) => gym.rating >= minRating);
    }

    // 2. Filter by Selected Facilities (gym must have ALL selected facilities)
    if (selectedFacilities.length > 0) {
      result = result.filter((gym) =>
        selectedFacilities.every((fac) => gym.facilities.includes(fac))
      );
    }

    // 3. Apply Sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'rating-asc':
          return a.rating - b.rating;
        case 'rating-desc':
        default:
          return b.rating - a.rating; // default
      }
    });

    return result;
  }, [districtGyms, selectedFacilities, minRating, sortBy]);

  // Compute geographical center of gyms in the district to center Leaflet map correctly
  const mapCenter = useMemo((): [number, number] => {
    if (districtGyms.length === 0) {
      return [10.5, 76.5]; // Default center of Kerala if empty
    }
    const totalLat = districtGyms.reduce((sum, g) => sum + g.latitude, 0);
    const totalLng = districtGyms.reduce((sum, g) => sum + g.longitude, 0);
    return [totalLat / districtGyms.length, totalLng / districtGyms.length];
  }, [districtGyms]);

  return (
    <div className="district-detail-page">
      
      {/* 1. DISTRICT HERO HEADER BANNER */}
      <section className="district-hero">
        <img 
          src={district.image} 
          alt={district.name} 
          className="district-hero-bg"
        />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <Link to="/districts" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontSize: '14px', fontWeight: '600', marginBottom: '16px' }}>
            <ArrowLeft size={16} /> Back to Districts
          </Link>
          <h1 className="district-hero-title">{district.name} Listings</h1>
          <p className="district-hero-desc">{district.description}</p>
        </div>
      </section>

      <div className="container">
        
        {/* 2. PAGE LAYOUT: SIDEBAR + LISTINGS */}
        <div className="district-layout">
          
          {/* LEFT SIDEBAR: FILTERS PANEL */}
          <aside className="filters-sidebar">
            
            {/* Sort Selector Wrapper */}
            <div className="filter-section glass-panel">
              <h3 className="filter-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SlidersHorizontal size={16} />
                <span>Sort Listings</span>
              </h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="sort-select"
                aria-label="Sort gyms list"
              >
                <option value="rating-desc">Rating: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="name-asc">Alphabetical: A - Z</option>
                <option value="name-desc">Alphabetical: Z - A</option>
              </select>
            </div>

            {/* Facilities Filter Panel */}
            <div className="filter-section glass-panel">
              <h3 className="filter-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={16} />
                <span>Facilities</span>
              </h3>
              <div className="filter-group">
                {availableFacilities.map((facility) => (
                  <label key={facility} className="checkbox-label">
                    <input 
                      type="checkbox" 
                      checked={selectedFacilities.includes(facility)}
                      onChange={() => handleFacilityToggle(facility)}
                    />
                    <span>{facility}</span>
                  </label>
                ))}
                {availableFacilities.length === 0 && (
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>No facilities registered.</span>
                )}
              </div>
            </div>

            {/* Star Ratings Filter Panel */}
            <div className="filter-section glass-panel">
              <h3 className="filter-title">Minimum Rating</h3>
              <div className="filter-group">
                {[4.9, 4.7, 4.5, 0].map((stars) => (
                  <label key={stars} className="checkbox-label" style={{ fontSize: '14px' }}>
                    <input 
                      type="radio" 
                      name="min-rating-radio"
                      checked={minRating === stars}
                      onChange={() => setMinRating(stars)}
                      style={{ accentColor: 'var(--accent-color)' }}
                    />
                    <span>{stars === 0 ? 'All Ratings' : `${stars.toFixed(1)}★ & Above`}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Reset Filter Button */}
            <button 
              onClick={handleResetFilters} 
              className="btn btn-secondary"
              style={{ width: '100%', padding: '12px' }}
            >
              Reset All Filters
            </button>

          </aside>

          {/* RIGHT VIEW: MAP AND DYNAMIC CARD LISTINGS */}
          <main className="gym-listings-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Map pane displaying active results */}
            <div className="district-map-container">
              <MapComponent 
                gyms={processedGyms} 
                center={mapCenter} 
                zoom={12} 
                height="300px" 
              />
            </div>

            {/* Section Header with result statistics */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
              <span style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '500' }}>
                Showing {processedGyms.length} of {districtGyms.length} gyms in {district.name}
              </span>
            </div>

            {/* Gyms Grid Display */}
            {processedGyms.length > 0 ? (
              <div className="grid-2">
                {processedGyms.map((gym) => (
                  <GymCard key={gym.id} gym={gym} />
                ))}
              </div>
            ) : (
              /* EMPTY FILTER STATE FALLBACK */
              <div className="empty-state glass-panel" style={{ padding: '60px 24px', textAlign: 'center' }}>
                <Filter size={40} style={{ color: 'var(--text-muted)', marginBottom: '16px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
                  No Gyms Match Filters
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px', maxWidth: '350px', margin: '0 auto 16px auto' }}>
                  Try relaxing your facilities checks or minimum rating filters to see available gyms in {district.name}.
                </p>
                <button onClick={handleResetFilters} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                  Clear Filters
                </button>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
