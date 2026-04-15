import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import './Navigation.css'

function Navigation({ currentProfile }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [showProfileMenu, setShowProfileMenu] = useState(false)

  const handleProfileChange = (profileId) => {
    navigate(`/profile/${profileId}`)
    setShowProfileMenu(false)
  }

  const handleHome = () => {
    navigate('/')
  }

  return (
    <nav className="navigation" aria-label="Main navigation">
      <div className="nav-container">
        {/* Logo/Home */}
        <button 
          className="nav-logo" 
          onClick={handleHome}
          aria-label="Go to home page"
        >
          KS
        </button>

        {/* Nav Links */}
        <div className="nav-links">
          {currentProfile && location.pathname.includes('/profile') && (
            <a href="/kanagha-portfolio/browse" className="nav-link">
              Browse
            </a>
          )}
        </div>

        {/* Profile Selector */}
        {currentProfile && (
          <div className="profile-selector">
            <button
              className="profile-button"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              aria-label={`Current profile: ${currentProfile}. Click to change`}
              aria-expanded={showProfileMenu}
              aria-haspopup="menu"
            >
              <span>{currentProfile}</span>
              <span className="chevron">▼</span>
            </button>

            {showProfileMenu && (
              <motion.menu
                className="profile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                role="menu"
              >
                {portfolioData.profiles.map((profile) => (
                  <button
                    key={profile.id}
                    className={`profile-menu-item ${currentProfile === profile.id ? 'active' : ''}`}
                    onClick={() => handleProfileChange(profile.id)}
                    role="menuitem"
                  >
                    <img 
                      src={profile.icon} 
                      alt={`${profile.name} icon`}
                      className="nav-profile-icon"
                    />
                    <span>{profile.name}</span>
                  </button>
                ))}
              </motion.menu>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation