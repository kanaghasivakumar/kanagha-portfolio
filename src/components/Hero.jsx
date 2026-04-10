import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const heroImages = {
  recruiter: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop',
  developer: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=500&fit=crop',
  friend: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=500&fit=crop',
  stalker: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8a42f?w=1200&h=500&fit=crop',
}

function Hero({ title, subtitle, profileId }) {
  const backgroundImage = heroImages[profileId] || heroImages.recruiter

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