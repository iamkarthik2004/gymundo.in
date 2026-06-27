import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { DistrictCard } from '../components/DistrictCard';
import { useGyms } from '../context/GymContext';

/**
 * DistrictList Page Component
 * Displays a searchable directory of all Kerala districts containing gyms.
 * Pulls initial queries from URL search parameters to sync search input state.
 */
export const DistrictList: React.FC = () => {
  // Hook to read/write URL query parameters (e.g. ?search=kochi)
  const [searchParams, setSearchParams] = useSearchParams();
  const { gyms, districts } = useGyms();
  
  // Local state for tracking the user's active search text input
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Extract search terms from the URL parameters on initial component load or URL change
  useEffect(() => {
    const urlQuery = searchParams.get('search');
    if (urlQuery) {
      setSearchQuery(urlQuery);
    }
  }, [searchParams]);

  // Synchronize URL query parameters as the user types in the search bar
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.trim() !== '') {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  // Filter districts based on query matching the district name, state, or gyms inside that district
  const filteredDistricts = districts.filter((district) => {
    const query = searchQuery.toLowerCase().trim();
    if (query === '') return true;

    // Check if query matches district name or state name
    const matchesDistrict = district.name.toLowerCase().includes(query) ||
                            district.state.toLowerCase().includes(query);

    // Also check if any gyms inside this district match the search query name
    const matchesGymInDistrict = gyms.some(
      (gym) => gym.district.toLowerCase() === district.name.toLowerCase() && 
               gym.name.toLowerCase().includes(query)
    );

    return matchesDistrict || matchesGymInDistrict;
  });

  return (
    <div className="district-list-page" style={{ padding: '60px 0' }}>
      <div className="container">
        
        {/* Header and Reusable Search Input */}
        <div className="search-header-container">
          <div style={{ textAlign: 'center' }}>
            <span className="section-subtitle">Locations Directory</span>
            <h1 className="section-title" style={{ fontSize: '42px', marginBottom: '12px' }}>
              Explore Gyms District-Wise
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
              Select a district or search directly to browse local world-class facilities, map coordinates, and customer ratings.
            </p>
          </div>

          {/* SearchBar Input */}
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <SearchBar
              placeholder="Search by district or gym name..."
              value={searchQuery}
              onChange={handleSearchChange}
              onClear={() => handleSearchChange('')}
            />
          </div>
        </div>

        {/* Districts Grid Layout */}
        {filteredDistricts.length > 0 ? (
          <div className="grid-3">
            {filteredDistricts.map((district) => (
              <DistrictCard key={district.id} district={district} />
            ))}
          </div>
        ) : (
          /* EMPTY STATE (No results match query) */
          <div className="empty-state glass-panel" style={{ padding: '80px 24px', marginTop: '30px' }}>
            <MapPin size={48} strokeWidth={1.5} style={{ color: 'var(--accent-color)', marginBottom: '16px' }} />
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>
              No Districts Found
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px auto' }}>
              We couldn't find any locations or gyms matching "{searchQuery}". Try searching for popular districts like "Ernakulam", "Kozhikode", or "Thiruvananthapuram".
            </p>
            <button 
              onClick={() => handleSearchChange('')} 
              className="btn btn-primary"
            >
              Reset Search Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
