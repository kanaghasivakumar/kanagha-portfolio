import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import './Hero.css'

function Hero({ title, subtitle, profileId }) {
  // Get the profile data to retrieve heroImage
  const profile = portfolioData.profiles.find(p => p.id === profileId)
  const backgroundImage = profile?.heroImage || 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section 
      className="hero"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Hero section"
    >
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          {title}
        </motion.h1>
        <motion.p variants={itemVariants}>
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Hero