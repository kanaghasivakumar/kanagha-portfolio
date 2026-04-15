import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import './Landing.css'

function Landing({ onProfileSelect }) {
  const navigate = useNavigate()
  const [showProfiles, setShowProfiles] = useState(false)
  const [hoveredProfile, setHoveredProfile] = useState(null)

  useEffect(() => {
    // Timeline for Netflix-style animation:
    // 0-0.6s: Logo scales from 0.1 to 1 (grow)
    // 0.6-2.6s: Logo holds at full size (2 second pause)
    // 2.6-3.0s: Logo shrinks and fades out
    // 3.0+: Profiles fade in
    const timer = setTimeout(() => {
      setShowProfiles(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleProfileClick = (profileId) => {
    onProfileSelect(profileId)
    navigate(`/profile/${profileId}`)
  }

  // Netflix-style logo animation sequence
  const logoAnimation = {
    initial: { opacity: 0, scale: 0.1 },
    animate: {
      opacity: [0, 1, 1, 0],
      scale: [0.1, 1, 1, 0.5],
      transition: {
        duration: 3,
        times: [0, 0.2, 0.87, 1],
        ease: [
          "easeOut",    // Grow phase: 0-0.2
          "linear",     // Hold phase: 0.2-0.87
          "easeIn"      // Exit phase: 0.87-1
        ],
      },
    },
  }

  // Stagger animation for profile cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const whoVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="landing">
      {/* Phase 1: Logo Animation */}
      {!showProfiles && (
        <div className="landing-logo-phase">
          <div className="landing-logo-container">
            <motion.h1 
              className="landing-logo"
              initial="initial"
              animate="animate"
              variants={logoAnimation}
            >
              KANAGHA SIVAKUMAR
            </motion.h1>
          </div>
        </div>
      )}

      {/* Phase 2: Profile Selection */}
      {showProfiles && (
        <motion.div
          className="landing-profiles-phase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="landing-hero">
            <div className="gradient-overlay"></div>

            <motion.div
              className="landing-content"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Tagline */}
              <motion.h2 className="landing-tagline" variants={whoVariants}>
                Who's watching?
              </motion.h2>

              {/* Profile Selection Grid */}
              <motion.div
                className="profiles-grid"
                variants={containerVariants}
              >
                {portfolioData.profiles.map((profile) => (
                  <motion.button
                    key={profile.id}
                    className={`profile-card ${hoveredProfile === profile.id ? 'hovered' : ''}`}
                    onClick={() => handleProfileClick(profile.id)}
                    onMouseEnter={() => setHoveredProfile(profile.id)}
                    onMouseLeave={() => setHoveredProfile(null)}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    aria-label={`View as ${profile.name}`}
                  >
                    <div className="profile-avatar">
                      <img 
                        src={profile.icon} 
                        alt={`${profile.name} icon`}
                        className="profile-icon-gif"
                      />
                    </div>
                    <div className="profile-info">
                      <h3>{profile.name}</h3>
                    </div>
                  </motion.button>
                ))}
              </motion.div>

              {/* Quick Links */}
              <motion.div className="landing-links" variants={itemVariants}>
                <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
                  GitHub
                </a>
                <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
                  LinkedIn
                </a>
                <a href={`mailto:${portfolioData.personal.email}`} aria-label="Send email">
                  Email
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Landing