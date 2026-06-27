import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GymProvider } from './context/GymContext';

// Page imports
import { Home } from './pages/Home';
import { DistrictList } from './pages/DistrictList';
import { DistrictDetail } from './pages/DistrictDetail';
import { GymDetail } from './pages/GymDetail';
import { Contact } from './pages/Contact';
import { AddGym } from './pages/AddGym';

/**
 * ScrollToTop Component
 * Listens to location changes in React Router and scrolls window viewport back to top.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Main App Component
 * Bootstraps the application shell, mounts navigation components, and handles client-side routing.
 */
function App() {
  return (
    <GymProvider>
      <Router>
        {/* Reset window viewport scroll coordinates on page routing changes */}
        <ScrollToTop />
        
        {/* Application Layout Wrap */}
        <div 
          style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)'
          }}
        >
          {/* Sticky Header */}
          <Navbar />

          {/* Dynamic Route Viewport */}
          <div style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/districts" element={<DistrictList />} />
              <Route path="/districts/:districtId" element={<DistrictDetail />} />
              <Route path="/gyms/:gymId" element={<GymDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/add-gym" element={<AddGym />} />
              
              {/* Fallback route: Redirect all unknown paths to Home page */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Site-wide Footer */}
          <Footer />
        </div>
      </Router>
    </GymProvider>
  );
}

export default App;
