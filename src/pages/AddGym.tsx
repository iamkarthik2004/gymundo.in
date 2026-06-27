import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Image as ImageIcon, MapPin, CheckCircle, Info, Dumbbell, ShieldCheck, HelpCircle } from 'lucide-react';
import { useGyms } from '../context/GymContext';

const KERALA_DISTRICTS = [
  'Alappuzha', 'Ernakulam', 'Idukki', 'Kannur', 'Kasaragod',
  'Kollam', 'Kottayam', 'Kozhikode', 'Malappuram', 'Palakkad',
  'Pathanamthitta', 'Thiruvananthapuram', 'Thrissur', 'Wayanad'
];

const POPULAR_FACILITIES = [
  'Strength Training', 'Cardio Deck', 'Personal Trainers', 'Steam Bath',
  'Locker & Shower', 'Zumba Studio', 'Crossfit Rig', 'Yoga Rooftop',
  'Swimming Pool', 'Cafe', 'MMA Ring', 'Parking Space'
];

const DISTRICT_COORDINATES: Record<string, { lat: number; lng: number }> = {
  'Alappuzha': { lat: 9.4981, lng: 76.3388 },
  'Ernakulam': { lat: 9.9816, lng: 76.2999 },
  'Idukki': { lat: 10.0118, lng: 77.0617 },
  'Kannur': { lat: 11.8745, lng: 75.3704 },
  'Kasaragod': { lat: 12.5103, lng: 74.9852 },
  'Kollam': { lat: 8.8932, lng: 76.6141 },
  'Kottayam': { lat: 9.5916, lng: 76.5222 },
  'Kozhikode': { lat: 11.2588, lng: 75.7804 },
  'Malappuram': { lat: 11.0720, lng: 76.0740 },
  'Palakkad': { lat: 10.7867, lng: 76.6547 },
  'Pathanamthitta': { lat: 9.2648, lng: 76.7870 },
  'Thiruvananthapuram': { lat: 8.5241, lng: 76.9366 },
  'Thrissur': { lat: 10.5276, lng: 76.2144 },
  'Wayanad': { lat: 11.6854, lng: 76.1320 },
};

// Default image fallbacks in case user doesn't specify URLs or URLs fail to load
const DEFAULT_LOGO = 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop';
const DEFAULT_IMAGES = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
];

export const AddGym: React.FC = () => {
  const { addGym } = useGyms();

  // --- FORM FIELD STATES ---
  const [gymName, setGymName] = useState('');
  const [district, setDistrict] = useState('Ernakulam');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [mapUrl, setMapUrl] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  
  // Hours
  const [hoursWeekdays, setHoursWeekdays] = useState('05:00 AM - 10:00 PM');
  const [hoursSaturday, setHoursSaturday] = useState('06:00 AM - 09:00 PM');
  const [hoursSunday, setHoursSunday] = useState('Closed');

  // Images
  const [logoUrl, setLogoUrl] = useState('');
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [imageUrl3, setImageUrl3] = useState('');

  // UI Flow states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdGymId, setCreatedGymId] = useState<number | null>(null);

  // Auto-fill latitude/longitude based on district selection
  useEffect(() => {
    if (district && DISTRICT_COORDINATES[district]) {
      const coords = DISTRICT_COORDINATES[district];
      // Inject a tiny randomized offset so gyms inside the same district don't overlay exactly on map
      const randomOffsetLat = (Math.random() - 0.5) * 0.012;
      const randomOffsetLng = (Math.random() - 0.5) * 0.012;
      
      setLatitude((coords.lat + randomOffsetLat).toFixed(4));
      setLongitude((coords.lng + randomOffsetLng).toFixed(4));
    }
  }, [district]);

  // Toggle facility checks
  const handleFacilityToggle = (facility: string) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  // Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare arrays and values with fallbacks
    const logo = logoUrl.trim() !== '' ? logoUrl.trim() : DEFAULT_LOGO;
    
    const images: string[] = [];
    if (imageUrl1.trim() !== '') images.push(imageUrl1.trim());
    if (imageUrl2.trim() !== '') images.push(imageUrl2.trim());
    if (imageUrl3.trim() !== '') images.push(imageUrl3.trim());
    
    // Ensure we have at least one gallery image fallback
    if (images.length === 0) {
      images.push(...DEFAULT_IMAGES);
    }

    const facilities = selectedFacilities.length > 0 ? selectedFacilities : ['Strength Training', 'Cardio Deck'];
    const latNum = parseFloat(latitude) || DISTRICT_COORDINATES[district]?.lat || 10.0;
    const lngNum = parseFloat(longitude) || DISTRICT_COORDINATES[district]?.lng || 76.5;

    const gymData = {
      name: gymName.trim(),
      district,
      address: address.trim(),
      latitude: latNum,
      longitude: lngNum,
      phone: phone.trim() || '+91 94470 12345',
      email: email.trim() || `info@${gymName.toLowerCase().replace(/[^a-z0-9]/g, '')}.in`,
      mapUrl: mapUrl.trim() || undefined,
      logo,
      images,
      facilities,
      description: description.trim() || `${gymName} is a premier training facility in ${district}, Kerala offering modern fitness equipment and customized programs.`,
      openingHours: {
        weekdays: hoursWeekdays,
        saturday: hoursSaturday,
        sunday: hoursSunday
      }
    };

    // Save using context
    setTimeout(() => {
      try {
        const createdGym = addGym(gymData);
        setCreatedGymId(createdGym.id);
        setIsSubmitting(false);
      } catch (err) {
        console.error('Failed to create gym listing', err);
        setIsSubmitting(false);
        alert('An error occurred while creating the gym. Please try again.');
      }
    }, 800); // Small timeout to show premium submission loader
  };

  if (createdGymId) {
    return (
      <div className="add-gym-success-page" style={{ padding: '80px 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div className="glass-panel" style={{ padding: '48px 32px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div className="success-icon-wrapper" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(74, 222, 128, 0.1)', border: '2px dashed #4ade80' }}>
              <CheckCircle size={48} style={{ color: '#4ade80' }} />
            </div>
            
            <h1 style={{ fontSize: '32px', fontWeight: '800', letterSpacing: '-0.5px', margin: '0' }}>Gym Registered!</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', margin: '0 0 16px 0' }}>
              Congratulations! <strong>{gymName}</strong> is now registered on Gymundo. It has been integrated into maps, listings, and search results.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <Link to={`/gyms/${createdGymId}`} className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
                View Listing Profile
              </Link>
              <Link to="/districts" className="btn btn-secondary" style={{ width: '100%', padding: '14px' }}>
                Browse All Districts
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="add-gym-page" style={{ padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '950px' }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontSize: '14px', fontWeight: '600' }}>
            <ArrowLeft size={16} /> Back to Homepage
          </Link>
        </div>

        {/* Header Title */}
        <div style={{ marginBottom: '40px' }}>
          <span className="section-subtitle">Gym Registration Portal</span>
          <h1 style={{ fontSize: '42px', fontWeight: '800', margin: '8px 0 12px 0', letterSpacing: '-1px' }}>
            Add Your Fitness Center
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Fill out the form below to register a new gym on Gymundo. Users will be able to discover your facility, view interactive pins, and post reviews.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="add-gym-form-grid" style={{ display: 'grid', gridTemplateColumns: '1.8fr 1.2fr', gap: '32px' }}>
          
          {/* Left Side: Form Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Section 1: Basic Information */}
            <div className="form-card glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="form-section-title" style={{ fontSize: '18px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Dumbbell size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Basic Details</span>
              </h2>

              <div>
                <label className="form-label" htmlFor="gym-name">Gym Name <span style={{ color: 'var(--accent-color)' }}>*</span></label>
                <input 
                  type="text" 
                  id="gym-name"
                  className="input-field" 
                  placeholder="e.g. Golds Gym Unisex Fit" 
                  value={gymName} 
                  onChange={(e) => setGymName(e.target.value)} 
                  required 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="form-label" htmlFor="gym-district">District <span style={{ color: 'var(--accent-color)' }}>*</span></label>
                  <select 
                    id="gym-district"
                    className="sort-select" 
                    value={district} 
                    onChange={(e) => setDistrict(e.target.value)}
                    style={{ height: '50px', backgroundColor: 'var(--bg-tertiary)' }}
                  >
                    {KERALA_DISTRICTS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="form-label" htmlFor="gym-phone">Contact Phone</label>
                  <input 
                    type="tel" 
                    id="gym-phone"
                    className="input-field" 
                    placeholder="e.g. +91 94470 00000" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                  />
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="gym-email">Contact Email</label>
                <input 
                  type="email" 
                  id="gym-email"
                  className="input-field" 
                  placeholder="e.g. contact@yourgym.com" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>

              <div>
                <label className="form-label" htmlFor="gym-desc">Gym Description <span style={{ color: 'var(--accent-color)' }}>*</span></label>
                <textarea 
                  id="gym-desc"
                  className="input-field" 
                  placeholder="Write a brief paragraph detailing your equipment, training culture, and unique programs..." 
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ resize: 'vertical' }}
                  required
                />
              </div>
            </div>

            {/* Section 2: Location and Coordinates */}
            <div className="form-card glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="form-section-title" style={{ fontSize: '18px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Location details</span>
              </h2>

              <div>
                <label className="form-label" htmlFor="gym-address">Full Physical Address <span style={{ color: 'var(--accent-color)' }}>*</span></label>
                <input 
                  type="text" 
                  id="gym-address"
                  className="input-field" 
                  placeholder="e.g. 1st Floor, Building Block, Main Road, Kochi, Kerala 682001" 
                  value={address} 
                  onChange={(e) => setAddress(e.target.value)} 
                  required 
                />
              </div>

              <div>
                <label className="form-label" htmlFor="gym-maps">Google Maps Location Link</label>
                <input 
                  type="url" 
                  id="gym-maps"
                  className="input-field" 
                  placeholder="e.g. https://maps.app.goo.gl/..." 
                  value={mapUrl} 
                  onChange={(e) => setMapUrl(e.target.value)} 
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label className="form-label" htmlFor="gym-lat" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Latitude</span>
                    <span title="Auto-filled based on district. Adjust if you have exact coordinates."><HelpCircle size={14} style={{ color: 'var(--text-muted)' }} /></span>
                  </label>
                  <input 
                    type="number" 
                    id="gym-lat"
                    step="any"
                    className="input-field" 
                    placeholder="e.g. 9.9816" 
                    value={latitude} 
                    onChange={(e) => setLatitude(e.target.value)} 
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="gym-lng" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>Longitude</span>
                    <span title="Auto-filled based on district. Adjust if you have exact coordinates."><HelpCircle size={14} style={{ color: 'var(--text-muted)' }} /></span>
                  </label>
                  <input 
                    type="number" 
                    id="gym-lng"
                    step="any"
                    className="input-field" 
                    placeholder="e.g. 76.2999" 
                    value={longitude} 
                    onChange={(e) => setLongitude(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Facilities and Hours */}
            <div className="form-card glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="form-section-title" style={{ fontSize: '18px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Facilities & Hours</span>
              </h2>

              <div>
                <label className="form-label" style={{ marginBottom: '12px', display: 'block' }}>Select Gym Facilities</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '12px' }}>
                  {POPULAR_FACILITIES.map(fac => (
                    <label key={fac} className="checkbox-label" style={{ padding: '6px 0' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedFacilities.includes(fac)}
                        onChange={() => handleFacilityToggle(fac)}
                      />
                      <span>{fac}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '12px' }}>
                <div>
                  <label className="form-label" htmlFor="hours-weekdays">Weekdays</label>
                  <input 
                    type="text" 
                    id="hours-weekdays"
                    className="input-field" 
                    placeholder="e.g. 05:00 AM - 10:00 PM" 
                    value={hoursWeekdays} 
                    onChange={(e) => setHoursWeekdays(e.target.value)} 
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="hours-saturday">Saturday</label>
                  <input 
                    type="text" 
                    id="hours-saturday"
                    className="input-field" 
                    placeholder="e.g. 06:00 AM - 09:00 PM" 
                    value={hoursSaturday} 
                    onChange={(e) => setHoursSaturday(e.target.value)} 
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="hours-sunday">Sunday</label>
                  <input 
                    type="text" 
                    id="hours-sunday"
                    className="input-field" 
                    placeholder="e.g. Closed" 
                    value={hoursSunday} 
                    onChange={(e) => setHoursSunday(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            {/* Submit Actions */}
            <div>
              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '16px', fontSize: '16px' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registering Gym listing...' : 'Register Gym on Gymundo'}
              </button>
            </div>

          </div>

          {/* Right Side: Media (Image URL Uploads & Live Previews) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '100px', height: 'fit-content' }}>
            
            {/* Image URLs Input panel */}
            <div className="form-card glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 className="form-section-title" style={{ fontSize: '18px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ImageIcon size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Gym Media</span>
              </h2>

              <div className="info-box" style={{ display: 'flex', gap: '10px', backgroundColor: 'rgba(255,59,59,0.05)', borderLeft: '3px solid var(--accent-color)', padding: '12px', borderRadius: '4px', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <Info size={24} style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Online Images Only:</strong> Provide web image URLs from Google Photos shared albums, Unsplash, Imgur, or gym websites. Leave blank to use premium stock fallbacks.
                </div>
              </div>

              <div>
                <label className="form-label" htmlFor="gym-logo">Brand Logo URL</label>
                <input 
                  type="url" 
                  id="gym-logo"
                  className="input-field" 
                  placeholder="Paste brand logo link..." 
                  value={logoUrl} 
                  onChange={(e) => setLogoUrl(e.target.value)} 
                />
              </div>

              <div>
                <label className="form-label">Gallery Images (Direct Links)</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <input 
                    type="url" 
                    className="input-field" 
                    placeholder="Gallery Image Link 1 (Primary)..." 
                    value={imageUrl1} 
                    onChange={(e) => setImageUrl1(e.target.value)} 
                  />
                  <input 
                    type="url" 
                    className="input-field" 
                    placeholder="Gallery Image Link 2..." 
                    value={imageUrl2} 
                    onChange={(e) => setImageUrl2(e.target.value)} 
                  />
                  <input 
                    type="url" 
                    className="input-field" 
                    placeholder="Gallery Image Link 3..." 
                    value={imageUrl3} 
                    onChange={(e) => setImageUrl3(e.target.value)} 
                  />
                </div>
              </div>
            </div>

            {/* Live Media Preview Panel */}
            <div className="form-card glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: '700', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                Live Media Preview
              </h3>
              
              {/* Logo Preview */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {logoUrl.trim() !== '' ? (
                    <img src={logoUrl} alt="Logo preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = DEFAULT_LOGO; }} />
                  ) : (
                    <Dumbbell size={20} style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>
                <div>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block' }}>Logo Thumbnail</span>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>{gymName || 'Gym Brand Logo'}</span>
                </div>
              </div>

              {/* Gallery Previews Grid */}
              <div>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px' }}>Gallery Grid Previews</span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', height: '70px' }}>
                  {[imageUrl1, imageUrl2, imageUrl3].map((url, i) => (
                    <div key={i} style={{ borderRadius: '6px', border: '1px solid var(--border-color)', overflow: 'hidden', backgroundColor: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                      {url.trim() !== '' ? (
                        <img src={url} alt={`Gallery preview ${i+1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                      ) : (
                        <ImageIcon size={16} style={{ color: 'var(--text-muted)' }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
};
