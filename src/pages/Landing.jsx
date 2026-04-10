import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import './Landing.css'

function Landing({ onProfileSelect }) {
  const navigate = useNavigate()
  const [hoveredProfile, setHoveredProfile] = useState(null)

  const handleProfileClick = (profileId) => {
    onProfileSelect(profileId)
    navigate(`/profile/${profileId}`)
  }

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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="landing">
      {/* Hero Background */}
      <div className="landing-hero">
        <div className="gradient-overlay"></div>

        <motion.div
          className="landing-content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo/Title */}
          <motion.div className="landing-header" variants={logoVariants}>
            <h1 className="landing-title">
              Kanagha Sivakumar
            </h1>
            <p className="landing-subtitle">AI Engineer • Researcher • Builder</p>
          </motion.div>

          {/* Tagline */}
          <motion.p className="landing-tagline" variants={itemVariants}>
            Who are you?
          </motion.p>

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
                <div className="profile-icon">{profile.icon}</div>
                <div className="profile-info">
                  <h2>{profile.name}</h2>
                  <p>{profile.description}</p>
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
    </div>
  )
}

export default Landing
