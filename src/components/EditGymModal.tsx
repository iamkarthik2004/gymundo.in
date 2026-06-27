import React, { useState, useEffect } from 'react';
import { X, Image as ImageIcon, Plus, Trash2, ShieldCheck, Dumbbell, MapPin, Save } from 'lucide-react';
import type { Gym } from '../interfaces/types';
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

interface EditGymModalProps {
  gym: Gym;
  isOpen: boolean;
  onClose: () => void;
}

export const EditGymModal: React.FC<EditGymModalProps> = ({ gym, isOpen, onClose }) => {
  const { updateGym } = useGyms();

  const [gymName, setGymName] = useState(gym.name);
  const [district, setDistrict] = useState(gym.district);
  const [address, setAddress] = useState(gym.address);
  const [phone, setPhone] = useState(gym.phone);
  const [email, setEmail] = useState(gym.email);
  const [mapUrl, setMapUrl] = useState(gym.mapUrl || '');
  const [latitude, setLatitude] = useState(gym.latitude.toString());
  const [longitude, setLongitude] = useState(gym.longitude.toString());
  const [description, setDescription] = useState(gym.description);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>(gym.facilities);
  
  const [hoursWeekdays, setHoursWeekdays] = useState(gym.openingHours.weekdays);
  const [hoursSaturday, setHoursSaturday] = useState(gym.openingHours.saturday);
  const [hoursSunday, setHoursSunday] = useState(gym.openingHours.sunday);

  const [logoUrl, setLogoUrl] = useState(gym.logo);
  const [images, setImages] = useState<string[]>(gym.images);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync state when modal opens or target gym changes
  useEffect(() => {
    if (isOpen && gym) {
      setGymName(gym.name);
      setDistrict(gym.district);
      setAddress(gym.address);
      setPhone(gym.phone);
      setEmail(gym.email);
      setMapUrl(gym.mapUrl || '');
      setLatitude(gym.latitude.toString());
      setLongitude(gym.longitude.toString());
      setDescription(gym.description);
      setSelectedFacilities(gym.facilities);
      setHoursWeekdays(gym.openingHours.weekdays);
      setHoursSaturday(gym.openingHours.saturday);
      setHoursSunday(gym.openingHours.sunday);
      setLogoUrl(gym.logo);
      setImages(gym.images);
      setNewImageUrl('');
    }
  }, [isOpen, gym]);

  if (!isOpen) return null;

  const handleFacilityToggle = (facility: string) => {
    if (selectedFacilities.includes(facility)) {
      setSelectedFacilities(selectedFacilities.filter(f => f !== facility));
    } else {
      setSelectedFacilities([...selectedFacilities, facility]);
    }
  };

  const handleAddImage = () => {
    const trimmed = newImageUrl.trim();
    if (trimmed !== '') {
      setImages([...images, trimmed]);
      setNewImageUrl('');
    }
  };

  const handleRemoveImage = (indexToRemove: number) => {
    setImages(images.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const latNum = parseFloat(latitude) || gym.latitude;
    const lngNum = parseFloat(longitude) || gym.longitude;

    const updatedGymData: Gym = {
      ...gym,
      name: gymName.trim(),
      district,
      address: address.trim(),
      phone: phone.trim(),
      email: email.trim(),
      mapUrl: mapUrl.trim() || undefined,
      latitude: latNum,
      longitude: lngNum,
      description: description.trim(),
      facilities: selectedFacilities.length > 0 ? selectedFacilities : gym.facilities,
      logo: logoUrl.trim() !== '' ? logoUrl.trim() : gym.logo,
      images: images.length > 0 ? images : gym.images,
      openingHours: {
        weekdays: hoursWeekdays,
        saturday: hoursSaturday,
        sunday: hoursSunday,
      },
    };

    setTimeout(() => {
      updateGym(updatedGymData);
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <div 
      className="modal-overlay" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 1000, 
        backgroundColor: 'rgba(0, 0, 0, 0.85)', 
        backdropFilter: 'blur(8px)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '20px' 
      }}
      onClick={onClose}
    >
      <div 
        className="modal-content glass-panel" 
        style={{ 
          maxWidth: '900px', 
          width: '100%', 
          maxHeight: '90vh', 
          overflowY: 'auto', 
          padding: '32px', 
          borderRadius: '20px', 
          position: 'relative',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '800', margin: 0, color: 'var(--text-primary)' }}>
              Edit Gym Profile
            </h2>
            <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Update profile details, operating hours, and photo gallery for {gym.name}
            </span>
          </div>
          <button 
            onClick={onClose}
            style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid var(--border-color)', 
              color: 'var(--text-primary)', 
              width: '36px', 
              height: '36px', 
              borderRadius: '50%', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Section 1: Basic Information */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <Dumbbell size={16} /> Basic Details
            </h3>
            
            <div>
              <label className="form-label">Gym Name</label>
              <input 
                type="text" 
                className="input-field" 
                value={gymName} 
                onChange={(e) => setGymName(e.target.value)} 
                required 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="form-label">District</label>
                <select 
                  className="sort-select" 
                  value={district} 
                  onChange={(e) => setDistrict(e.target.value)}
                  style={{ height: '48px', width: '100%', backgroundColor: 'var(--bg-tertiary)' }}
                >
                  {KERALA_DISTRICTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="input-field" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
            </div>

            <div>
              <label className="form-label">Contact Email</label>
              <input 
                type="email" 
                className="input-field" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <div>
              <label className="form-label">Description</label>
              <textarea 
                className="input-field" 
                rows={3} 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                style={{ resize: 'vertical' }}
              />
            </div>
          </div>

          <hr style={{ borderColor: 'var(--border-color)', margin: '4px 0', opacity: 0.3 }} />

          {/* Section 2: Location Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <MapPin size={16} /> Location Details
            </h3>

            <div>
              <label className="form-label">Full Address</label>
              <input 
                type="text" 
                className="input-field" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required 
              />
            </div>

            <div>
              <label className="form-label">Google Maps URL</label>
              <input 
                type="url" 
                className="input-field" 
                value={mapUrl} 
                onChange={(e) => setMapUrl(e.target.value)} 
                placeholder="https://maps.google.com/..." 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label className="form-label">Latitude</label>
                <input 
                  type="number" 
                  step="any" 
                  className="input-field" 
                  value={latitude} 
                  onChange={(e) => setLatitude(e.target.value)} 
                />
              </div>
              <div>
                <label className="form-label">Longitude</label>
                <input 
                  type="number" 
                  step="any" 
                  className="input-field" 
                  value={longitude} 
                  onChange={(e) => setLongitude(e.target.value)} 
                />
              </div>
            </div>
          </div>

          <hr style={{ borderColor: 'var(--border-color)', margin: '4px 0', opacity: 0.3 }} />

          {/* Section 3: Facilities & Opening Hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <ShieldCheck size={16} /> Facilities & Operating Hours
            </h3>

            <div>
              <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>Select Facilities</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '10px' }}>
                {POPULAR_FACILITIES.map(fac => (
                  <label key={fac} className="checkbox-label" style={{ fontSize: '13px' }}>
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

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '8px' }}>
              <div>
                <label className="form-label">Weekdays</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={hoursWeekdays} 
                  onChange={(e) => setHoursWeekdays(e.target.value)} 
                />
              </div>
              <div>
                <label className="form-label">Saturday</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={hoursSaturday} 
                  onChange={(e) => setHoursSaturday(e.target.value)} 
                />
              </div>
              <div>
                <label className="form-label">Sunday</label>
                <input 
                  type="text" 
                  className="input-field" 
                  value={hoursSunday} 
                  onChange={(e) => setHoursSunday(e.target.value)} 
                />
              </div>
            </div>
          </div>

          <hr style={{ borderColor: 'var(--border-color)', margin: '4px 0', opacity: 0.3 }} />

          {/* Section 4: Media & Photo Management */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px', margin: 0 }}>
              <ImageIcon size={16} /> Brand Logo & Photo Gallery Management
            </h3>

            <div>
              <label className="form-label">Brand Logo URL</label>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <input 
                  type="url" 
                  className="input-field" 
                  value={logoUrl} 
                  onChange={(e) => setLogoUrl(e.target.value)} 
                  style={{ flex: 1 }}
                />
                <div style={{ width: '44px', height: '44px', borderRadius: '8px', border: '1px solid var(--border-color)', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={logoUrl} alt="Logo preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.src = gym.logo; }} />
                </div>
              </div>
            </div>

            {/* Current Photos Gallery & Add New Photos */}
            <div>
              <label className="form-label" style={{ marginBottom: '8px', display: 'block' }}>Photo Gallery ({images.length} photos)</label>
              
              {/* Add new photo input */}
              <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                <input 
                  type="url" 
                  className="input-field" 
                  placeholder="Paste new photo web URL (e.g. Unsplash, Imgur, direct image link)..." 
                  value={newImageUrl} 
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  style={{ flex: 1 }}
                />
                <button 
                  type="button" 
                  onClick={handleAddImage}
                  className="btn btn-secondary" 
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap', padding: '0 18px' }}
                >
                  <Plus size={16} />
                  <span>Add Photo</span>
                </button>
              </div>

              {/* Photos Grid display */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
                {images.map((url, index) => (
                  <div key={index} style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', border: '1px solid var(--border-color)', aspectRatio: '4/3', backgroundColor: 'var(--bg-tertiary)' }}>
                    <img src={url} alt={`Gallery ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button 
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      style={{ 
                        position: 'absolute', 
                        top: '8px', 
                        right: '8px', 
                        backgroundColor: 'rgba(239, 68, 68, 0.9)', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '6px', 
                        padding: '6px', 
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s'
                      }}
                      title="Remove image"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Submit Actions */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
            <button 
              type="button" 
              onClick={onClose} 
              className="btn btn-secondary"
              style={{ padding: '12px 24px' }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ padding: '12px 28px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              disabled={isSubmitting}
            >
              <Save size={16} />
              <span>{isSubmitting ? 'Saving Changes...' : 'Save Changes'}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
