import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ContentCard from '../components/ContentCard'
import './Browse.css'

function Browse({ selectedProfile }) {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All', icon: '📺' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'research', label: 'Research', icon: '🔬' },
    { id: 'reads', label: 'Reads', icon: '📚' },
    { id: 'watches', label: 'Watches', icon: '🎬' },
    { id: 'listens', label: 'Listens', icon: '🎧' },
  ]

  // Get filtered content based on category
  const getContentByCategory = () => {
    const content = []

    if (selectedCategory === 'all' || selectedCategory === 'projects') {
      portfolioData.projects.forEach(p => {
        content.push({ ...p, contentType: 'project', category: 'projects' })
      })
    }

    if (selectedCategory === 'all' || selectedCategory === 'research') {
      portfolioData.research.forEach(r => {
        content.push({ ...r, contentType: 'research', category: 'research' })
      })
    }

    if (selectedCategory === 'all' || selectedCategory === 'reads') {
      portfolioData.reads.forEach(r => {
        content.push({ ...r, contentType: 'read', category: 'reads' })
      })
    }

    if (selectedCategory === 'all' || selectedCategory === 'watches') {
      portfolioData.watches.forEach(w => {
        content.push({ ...w, contentType: 'watch', category: 'watches' })
      })
    }

    if (selectedCategory === 'all' || selectedCategory === 'listens') {
      portfolioData.listens.forEach(l => {
        content.push({ ...l, contentType: 'listen', category: 'listens' })
      })
    }

    return content
  }

  const displayedContent = getContentByCategory()

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="browse">
      <Navigation />

      <Hero
        title="Browse Everything"
        subtitle="Explore projects, reads, watches, and more"
        profileId="recruiter"
      />

      <div className="browse-container">
        {/* Category Filter */}
        <nav className="category-filter" aria-label="Content categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`category-button ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              aria-current={selectedCategory === cat.id ? 'page' : undefined}
            >
              <span className="icon">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </nav>

        {/* Content Grid */}
        <motion.div
          className="browse-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {displayedContent.length > 0 ? (
            displayedContent.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                {item.contentType === 'project' ? (
                  <ProjectCard project={item} />
                ) : (
                  <ContentCard item={item} type={item.contentType} />
                )}
              </motion.div>
            ))
          ) : (
            <div className="empty-state">
              <p>No content in this category</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Browse