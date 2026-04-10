import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import ProfileView from './pages/ProfileView'
import Browse from './pages/Browse'
import './App.css'

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  const handleProfileSelect = (profileId) => {
    setSelectedProfile(profileId)
  }

  return (
    <Router basename="/kanagha-portfolio">
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
