import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

function Hero({ title, subtitle }) {
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
    <section className="hero" aria-label="Hero section">
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
