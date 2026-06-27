import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Gym, District, Review } from '../interfaces/types';
import { mockGyms, mockDistricts, mockReviews } from '../data/mockData';

interface GymContextType {
  gyms: Gym[];
  districts: District[];
  reviews: Review[];
  addGym: (gym: Omit<Gym, 'id' | 'rating'>) => Gym;
<<<<<<< HEAD
  updateGym: (updatedGym: Gym) => void;
=======
>>>>>>> 16137da963556a103be0c0af0a4fe6a10fa67512
  addReview: (review: Review) => void;
}

const GymContext = createContext<GymContextType | undefined>(undefined);

/**
 * GymProvider Component
 * Manages the global state of gyms, reviews, and computed district statistics.
 * Persists data inside local storage for frontend-only state preservation.
 */
export const GymProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load initial data from localStorage or fall back to mock data
  useEffect(() => {
    const storedGyms = localStorage.getItem('gymundo_gyms');
    let loadedGyms = mockGyms;
    if (storedGyms) {
      try {
        const parsedGyms = JSON.parse(storedGyms);
        if (Array.isArray(parsedGyms)) {
<<<<<<< HEAD
          // Map stored gyms by ID to retain user edits to mock gyms
          const parsedGymMap = new Map(parsedGyms.map((g: Gym) => [g.id, g]));
          const mergedMockGyms = mockGyms.map(g => parsedGymMap.get(g.id) || g);
          const mockGymIds = new Set(mockGyms.map(g => g.id));
          const userAddedGyms = parsedGyms.filter((g: Gym) => !mockGymIds.has(g.id));
          // Merge mockGyms with user-added gyms
          loadedGyms = [...mergedMockGyms, ...userAddedGyms];
=======
          // Identify user-added gyms (gyms whose IDs are not in mockGyms)
          const mockGymIds = new Set(mockGyms.map(g => g.id));
          const userAddedGyms = parsedGyms.filter(g => !mockGymIds.has(g.id));
          // Merge mockGyms with user-added gyms
          loadedGyms = [...mockGyms, ...userAddedGyms];
>>>>>>> 16137da963556a103be0c0af0a4fe6a10fa67512
          // Update localStorage with the merged result to sync it
          localStorage.setItem('gymundo_gyms', JSON.stringify(loadedGyms));
        }
      } catch (e) {
        console.error('Failed to parse gyms from localStorage', e);
      }
    } else {
      localStorage.setItem('gymundo_gyms', JSON.stringify(mockGyms));
    }
    setGyms(loadedGyms);

    const storedReviews = localStorage.getItem('gymundo_reviews');
    let loadedReviews = mockReviews;
    if (storedReviews) {
      try {
        const parsedReviews = JSON.parse(storedReviews);
        if (Array.isArray(parsedReviews)) {
          const mockReviewIds = new Set(mockReviews.map(r => r.id));
<<<<<<< HEAD
          const userReviews = parsedReviews.filter((r: Review) => !mockReviewIds.has(r.id));
=======
          const userReviews = parsedReviews.filter(r => !mockReviewIds.has(r.id));
>>>>>>> 16137da963556a103be0c0af0a4fe6a10fa67512
          loadedReviews = [...mockReviews, ...userReviews];
          localStorage.setItem('gymundo_reviews', JSON.stringify(loadedReviews));
        }
      } catch (e) {
        console.error('Failed to parse reviews from localStorage', e);
      }
    } else {
      localStorage.setItem('gymundo_reviews', JSON.stringify(mockReviews));
    }
    setReviews(loadedReviews);
    setIsLoaded(true);
  }, []);

  const addGym = (gymData: Omit<Gym, 'id' | 'rating'>) => {
    // Generate new unique sequential ID
    const nextId = gyms.length > 0 ? Math.max(...gyms.map(g => g.id)) + 1 : 101;
    const newGym: Gym = {
      ...gymData,
      id: nextId,
      rating: 5.0, // Default perfect rating for new listings
    };

    const updatedGyms = [...gyms, newGym];
    setGyms(updatedGyms);
    localStorage.setItem('gymundo_gyms', JSON.stringify(updatedGyms));
    return newGym;
  };

<<<<<<< HEAD
  const updateGym = (updatedGym: Gym) => {
    const updatedGyms = gyms.map(g => (g.id === updatedGym.id ? updatedGym : g));
    setGyms(updatedGyms);
    localStorage.setItem('gymundo_gyms', JSON.stringify(updatedGyms));
  };

=======
>>>>>>> 16137da963556a103be0c0af0a4fe6a10fa67512
  const addReview = (newReview: Review) => {
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('gymundo_reviews', JSON.stringify(updatedReviews));

    // Dynamically calculate and update gym rating
    const gymReviews = updatedReviews.filter(r => r.gymId === newReview.gymId);
    const avgRating = gymReviews.reduce((sum, r) => sum + r.rating, 0) / gymReviews.length;
    const roundedRating = Math.round(avgRating * 10) / 10;

    const updatedGyms = gyms.map(g => {
      if (g.id === newReview.gymId) {
        return { ...g, rating: roundedRating };
      }
      return g;
    });
    setGyms(updatedGyms);
    localStorage.setItem('gymundo_gyms', JSON.stringify(updatedGyms));
  };

  // Recalculate district gym counts dynamically
  const districts = mockDistricts.map(district => {
    const gymCount = gyms.filter(
      gym => gym.district.toLowerCase() === district.name.toLowerCase()
    ).length;
    return {
      ...district,
      gymCount
    };
  });

  // Render a simple loading screen or wait until state is loaded from localStorage
  if (!isLoaded) {
    return null;
  }

  return (
<<<<<<< HEAD
    <GymContext.Provider value={{ gyms, districts, reviews, addGym, updateGym, addReview }}>
=======
    <GymContext.Provider value={{ gyms, districts, reviews, addGym, addReview }}>
>>>>>>> 16137da963556a103be0c0af0a4fe6a10fa67512
      {children}
    </GymContext.Provider>
  );
};

export const useGyms = () => {
  const context = useContext(GymContext);
  if (!context) {
    throw new Error('useGyms must be used within a GymProvider');
  }
  return context;
};
