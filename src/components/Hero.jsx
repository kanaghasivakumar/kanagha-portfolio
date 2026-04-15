import React from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import './Hero.css'

function Hero({ title, subtitle, profileId }) {
  const profile = portfolioData.profiles.find(p => p.id === profileId)
  const backgroundImage = profile?.heroImage || 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=80&w=1200&h=600&fit=crop'

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
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.3) 100%), url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
      aria-label="Hero section"
    >
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