import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import gymLogo from '../assets/gym.jpg';

/**
 * Navbar Component
 * Renders a sticky navigation header that is fully responsive.
 * Features a logo, navigation links, and a drawer menu for mobile screens.
 */
export const Navbar: React.FC = () => {
  // State to manage the open/close status of the mobile navigation drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  
  // Hook to get the current routing path so we can close the drawer on navigation
  const location = useLocation();

  // Automatically close the mobile navigation drawer whenever the active page route changes
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling of the page when the mobile drawer overlay is active
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDrawerOpen]);

  // Toggle helper to switch drawer state between true and false
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar" id="main-navigation">
      <div className="container navbar-container">
        
        {/* Gymundo Brand Logo Link */}
        <Link to="/" className="logo" aria-label="Gymundo Home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={gymLogo} alt="Gymundo Logo" style={{ width: '42px', height: '42px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--accent-color)' }} />
          <span>GYM<span className="logo-accent">UNDO</span></span>
        </Link>

        {/* Desktop-only Navigation Links */}
        <ul className="nav-links">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/districts" className={({ isActive }) => isActive ? 'active' : ''}>
              Districts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-gym" className={({ isActive }) => isActive ? 'active' : ''}>
              Add Gym
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Call to Action Button (Desktop Only) */}
        <div className="nav-actions">
          <Link to="/add-gym" className="btn btn-accent-border" style={{ padding: '8px 16px', fontSize: '14px' }}>
            + Add Gym
          </Link>
          <Link to="/districts" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
            Explore Gyms
          </Link>
        </div>

        {/* Hamburger Menu Toggle Button (Visible on screens < 768px) */}
        <button 
          className="mobile-toggle" 
          onClick={toggleDrawer}
          aria-label={isDrawerOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={isDrawerOpen}
        >
          {isDrawerOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Overlay Background for Mobile Drawer */}
        {isDrawerOpen && (
          <div className="drawer-overlay" onClick={toggleDrawer} />
        )}

        {/* Mobile Navigation Drawer Panel */}
        <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-header">
            <Link to="/" className="logo" onClick={toggleDrawer} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={gymLogo} alt="Gymundo Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '1.5px solid var(--accent-color)' }} />
              <span>GYM<span className="logo-accent">UNDO</span></span>
            </Link>
            <button className="drawer-close" onClick={toggleDrawer} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <ul className="mobile-nav-links">
            <li className="mobile-nav-item">
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/districts" className={({ isActive }) => isActive ? 'active' : ''}>
                Districts
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/add-gym" className={({ isActive }) => isActive ? 'active' : ''}>
                Add Gym
              </NavLink>
            </li>
            <li className="mobile-nav-item">
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                Contact
              </NavLink>
            </li>
          </ul>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/add-gym" className="btn btn-accent-border" style={{ width: '100%' }} onClick={toggleDrawer}>
              + Add Gym
            </Link>
            <Link to="/districts" className="btn btn-primary" style={{ width: '100%' }} onClick={toggleDrawer}>
              Explore Gyms
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};
