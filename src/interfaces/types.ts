/**
 * Gymundo TypeScript Interfaces
 * Defines data structures used across the application.
 */

/**
 * User Interface
 * Represents a user of the platform (e.g., reviewers).
 */
export interface User {
  id: string;        // Unique identifier for the user
  name: string;      // User's display name
  avatar?: string;   // Optional URL to the user's profile picture
}

/**
 * Review Interface
 * Represents a rating and comment left by a user for a specific gym.
 */
export interface Review {
  id: string;        // Unique identifier for the review
  gymId: number;     // The ID of the gym being reviewed
  userName: string;  // Name of the person who reviewed
  userAvatar?: string;// Optional profile picture of the reviewer
  rating: number;    // Rating score (1 to 5 stars)
  comment: string;   // Review description text
  date: string;      // Date string when review was posted (e.g., "YYYY-MM-DD")
}

/**
 * Gym Interface
 * Represents a fitness center, its metadata, geo-coordinates, hours, and features.
 */
export interface Gym {
  id: number;                   // Unique identifier for the gym
  name: string;                 // Gym name
  district: string;             // District/City where the gym is located
  address: string;              // Full physical address
  latitude: number;             // Geo latitude for map plotting
  longitude: number;            // Geo longitude for map plotting
  rating: number;               // Average star rating
  phone: string;                // Contact telephone number
  email: string;                // Contact email address
  mapUrl?: string;              // Optional Google Maps URL
  logo: string;                 // URL to the gym's brand logo icon
  images: string[];             // Array of URLs for the gym's photo gallery
  facilities: string[];         // Array of facilities (e.g., "Cardio", "Pool", "Steam Bath")
  description: string;          // Overview of the gym services and culture
  openingHours: {
    weekdays: string;           // Weekdays schedule (e.g., "6:00 AM - 10:00 PM")
    saturday: string;           // Saturday schedule
    sunday: string;             // Sunday schedule
  };
}

/**
 * District Interface
 * Represents a geographic district/city in India containing registered gyms.
 */
export interface District {
  id: string;          // Unique string key (e.g., "mumbai")
  name: string;        // District display name (e.g., "Mumbai")
  state: string;       // State name (e.g., "Maharashtra")
  image: string;       // Background/hero image URL for the district
  description: string; // Brief summary of the fitness scene in the district
  gymCount: number;    // Total number of gyms registered in this district
}
