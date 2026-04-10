import React from 'react'
import { motion } from 'framer-motion'
import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
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
