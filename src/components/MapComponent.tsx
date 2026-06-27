import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';
import type { Gym } from '../interfaces/types';

/**
 * MapComponentProps Interface
 * Defines values passed into the MapComponent.
 */
interface MapComponentProps {
  gyms: Gym[];                    // List of gym listings to map as marker pins
  center: [number, number];       // Latitude/Longitude coordinate array for map view
  zoom: number;                  // Zoom magnification level
  height?: string;                // Height of map element container
  activeGymId?: number;           // If specified, zooms in/highlights this particular gym
}

/**
 * MapComponent
 * Renders an interactive Leaflet Map using OpenStreetMap / CartoDB dark tiles.
 * Bypasses common React-Leaflet version conflicts by using standard Leaflet operations on a DOM Ref.
 */
export const MapComponent: React.FC<MapComponentProps> = ({
  gyms,
  center,
  zoom,
  height: _height = '400px',
  activeGymId
}) => {
  const navigate = useNavigate();
  
  // HTML Ref for Leaflet to mount its viewport onto
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  // References to preserve map and marker instances across re-renders
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);

  // Effect 1: Initialize the Map on mount
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Create the map object centered at specified coordinates
    const map = L.map(mapContainerRef.current, {
      center: center,
      zoom: zoom,
      scrollWheelZoom: false, // Prevent zoom on scrolling past the map
    });

    mapInstanceRef.current = map;

    // Load CartoDB Positron light tiles for a clean white map aesthetic
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 20,
    }).addTo(map);

    // Clean up map instance on component unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Run only once when the component mounts

  // Effect 2: Update center and zoom when they change
  useEffect(() => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  // Effect 3: Render marker pins dynamically whenever the gyms list changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clear existing markers from the map first
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Create custom HTML divIcon for markers (avoids missing asset path bugs in bundlers)
    const customIcon = L.divIcon({
      html: '<div class="custom-map-marker"><div class="marker-pin"></div></div>',
      className: 'custom-leaflet-icon',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
    });

    // Populate markers for each gym
    gyms.forEach((gym) => {
      const marker = L.marker([gym.latitude, gym.longitude], { icon: customIcon });

      // Create a popup DOM element with navigation action button
      const popupDiv = document.createElement('div');
      popupDiv.style.minWidth = '160px';
      
      const gymName = document.createElement('h4');
      gymName.style.margin = '0 0 4px 0';
      gymName.style.fontSize = '14px';
      gymName.style.fontWeight = '700';
      gymName.style.color = 'var(--text-primary)';
      gymName.innerText = gym.name;
      
      const gymAddr = document.createElement('p');
      gymAddr.style.margin = '0 0 10px 0';
      gymAddr.style.fontSize = '11px';
      gymAddr.style.color = 'var(--text-secondary)';
      gymAddr.innerText = gym.district;

      const viewBtn = document.createElement('button');
      viewBtn.innerText = 'View Gym Details';
      viewBtn.className = 'btn btn-primary';
      viewBtn.style.padding = '4px 8px';
      viewBtn.style.fontSize = '11px';
      viewBtn.style.borderRadius = '4px';
      viewBtn.style.width = '100%';
      viewBtn.style.cursor = 'pointer';
      
      // Hook up React Router navigate to prevent hard page loads
      viewBtn.addEventListener('click', () => {
        navigate(`/gyms/${gym.id}`);
      });

      const mapsLink = document.createElement('a');
      mapsLink.innerText = 'Open in Google Maps';
      mapsLink.href = gym.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gym.name + ', ' + gym.address)}`;
      mapsLink.target = '_blank';
      mapsLink.rel = 'noopener noreferrer';
      mapsLink.className = 'btn btn-secondary';
      mapsLink.style.display = 'block';
      mapsLink.style.textAlign = 'center';
      mapsLink.style.padding = '4px 8px';
      mapsLink.style.fontSize = '11px';
      mapsLink.style.borderRadius = '4px';
      mapsLink.style.marginTop = '6px';
      mapsLink.style.width = '100%';
      mapsLink.style.textDecoration = 'none';
      mapsLink.style.color = 'var(--text-primary)';
      mapsLink.style.cursor = 'pointer';

      popupDiv.appendChild(gymName);
      popupDiv.appendChild(gymAddr);
      popupDiv.appendChild(viewBtn);
      popupDiv.appendChild(mapsLink);

      marker.bindPopup(popupDiv);
      marker.addTo(map);

      // Keep reference to this marker to clear later or highlight
      markersRef.current.push(marker);

      // If activeGymId is specified, auto open its popup
      if (activeGymId && gym.id === activeGymId) {
        map.setView([gym.latitude, gym.longitude], Math.max(zoom, 14));
        marker.openPopup();
      }
    });

    // If there are multiple gyms and no single active one, fit bounds to show all markers
    if (gyms.length > 1 && !activeGymId) {
      const group = L.featureGroup(markersRef.current);
      map.fitBounds(group.getBounds().pad(0.15));
    }

  }, [gyms, activeGymId, navigate]);

  return (
    <div 
      ref={mapContainerRef} 
      style={{ 
        height: '100%', 
        width: '100%', 
        position: 'relative', 
        zIndex: 1 
      }} 
    />
  );
};
