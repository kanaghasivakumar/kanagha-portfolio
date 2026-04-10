import React from 'react'
import { motion } from 'framer-motion'
import './ProjectCard.css'

// Unsplash image URLs for project cards
const projectImages = {
  codenames: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop',
  wildfire: 'https://images.unsplash.com/photo-1577720643272-265f434b0af8?w=500&h=300&fit=crop',
  ocr: 'https://images.unsplash.com/photo-1516534775068-bb57e9b4a484?w=500&h=300&fit=crop',
  steg: 'https://images.unsplash.com/photo-1512941691920-25bda36dc6f2?w=500&h=300&fit=crop',
}

function ProjectCard({ project }) {
  const backgroundImage = projectImages[project.id] || projectImages.codenames

  return (
    <motion.div
      className="project-card"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        {project.highlight && <span className="highlight-badge">Featured</span>}
      </div>

      <p className="project-tagline">{project.tagline}</p>
      <p className="project-description">{project.description}</p>

      {project.impact && (
        <div className="project-impact">
          <span className="impact-label">Impact:</span> {project.impact}
        </div>
      )}

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-footer">
        <span className="year">{project.year}</span>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>
              GitHub →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard