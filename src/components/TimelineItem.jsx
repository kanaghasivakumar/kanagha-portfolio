import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './TimelineItem.css'

function TimelineItem({ item }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="timeline-marker"></div>

      <div className="timeline-content">
        <button
          className="timeline-header"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label={`${item.role} at ${item.company}`}
        >
          <div className="timeline-title-section">
            <h3>{item.role}</h3>
            <p className="company">{item.company}</p>
          </div>

          <div className="timeline-meta">
            <span className="dates">{item.dates}</span>
            {item.location && <span className="location">{item.location}</span>}
            <span className={`chevron ${expanded ? 'open' : ''}`}>▼</span>
          </div>
        </button>

        {expanded && (
          <motion.div
            className="timeline-details"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="achievements">
              {item.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default TimelineItem
