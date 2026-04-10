import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './SkillsSection.css'

function SkillsSection({ skills }) {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.div
      className="skills-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((skillGroup, index) => (
        <motion.div key={index} className="skill-category" variants={itemVariants}>
          <h3>{skillGroup.category}</h3>

          <div className="skills-grid">
            {skillGroup.items.map((skill, idx) => (
              <motion.button
                key={idx}
                className="skill-tag"
                onMouseEnter={() => setHoveredSkill(`${index}-${idx}`)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default SkillsSection
