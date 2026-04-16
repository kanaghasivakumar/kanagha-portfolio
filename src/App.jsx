import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import ProfileView from './pages/ProfileView'
import Browse from './pages/Browse'
import './App.css'

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');
    if (redirectPath) {
      // Navigate to the actual path (e.g., /browse)
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
}

function App() {
  const [selectedProfile, setSelectedProfile] = useState(() => {
    return localStorage.getItem('selectedProfile') || null;
  });

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId)
    localStorage.setItem('selectedProfile', profileId)
  }

  return (
    <Router basename="/kanagha-portfolio">
      <RedirectHandler />
      <div className="app">
        <Routes>
          <Route 
            path="/" 
            element={<Landing onProfileSelect={handleProfileSelect} />} 
          />
          <Route 
            path="/profile/:profileId" 
            element={<ProfileView selectedProfile={selectedProfile} />} 
          />
          <Route 
            path="/browse" 
            element={<Browse selectedProfile={selectedProfile} />} 
          />
          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App