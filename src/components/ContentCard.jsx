import React from 'react'
import { motion } from 'framer-motion'
import './ContentCard.css'

function ContentCard({ item, type }) {
  const getContentIcon = () => {
    switch (type) {
      case 'read':
        return '📖'
      case 'watch':
        return '📺'
      case 'listen':
        return '🎧'
      case 'current':
        return '⚡'
      default:
        return '📌'
    }
  }

  const getTypeLabel = () => {
    if (item.type) return item.type
    switch (type) {
      case 'read':
        return 'Article'
      case 'watch':
        return 'Video'
      case 'listen':
        return 'Audio'
      case 'current':
        return 'Current'
      default:
        return 'Content'
    }
  }

  return (
    <motion.div
      className="content-card"
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="content-icon">{getContentIcon()}</div>

      <h3>{item.title}</h3>

      {item.author && (
        <p className="creator-name">{item.author}</p>
      )}

      {item.creator && (
        <p className="creator-name">{item.creator}</p>
      )}

      {item.host && (
        <p className="creator-name">{item.host}</p>
      )}

      {item.artist && (
        <p className="creator-name">{item.artist}</p>
      )}

      {(item.reason || item.description) && (
        <p className="content-description">
          {item.reason || item.description}
        </p>
      )}

      <div className="content-meta">
        <span className="type-badge">{getTypeLabel()}</span>
        {item.year && <span className="year">{item.year}</span>}
        {item.duration && <span className="duration">{item.duration}</span>}
        {item.episodes && <span className="episodes">{item.episodes}</span>}
      </div>

      {item.link && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="content-link" aria-label={`Link to ${item.title}`}>
          Explore →
        </a>
      )}
    </motion.div>
  )
}

export default ContentCard
