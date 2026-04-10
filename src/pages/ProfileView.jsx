import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import ContentCard from '../components/ContentCard'
import TimelineItem from '../components/TimelineItem'
import SkillsSection from '../components/SkillsSection'
import './ProfileView.css'

function ProfileView({ selectedProfile }) {
  const { profileId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  const profile = portfolioData.profiles.find(p => p.id === profileId)

  if (!profile) {
    return (
      <div className="profile-error">
        <p>Profile not found. <a href="/kanagha-portfolio/">Go back</a></p>
      </div>
    )
  }

  // Filter content based on profile
  const getFilteredContent = () => {
    const content = {
      projects: portfolioData.projects.filter(p => p.showInProfiles.includes(profileId)),
      experience: portfolioData.experience.filter(e => e.showInProfiles.includes(profileId)),
      research: portfolioData.research.filter(r => r.showInProfiles.includes(profileId)),
      reads: portfolioData.reads.filter(r => r.showInProfiles.includes(profileId)),
      watches: portfolioData.watches.filter(w => w.showInProfiles.includes(profileId)),
      listens: portfolioData.listens.filter(l => l.showInProfiles.includes(profileId)),
      currently: portfolioData.currently.filter(c => c.showInProfiles.includes(profileId)),
    }
    return content
  }

  const filteredContent = getFilteredContent()

  // Profile-specific hero messages
  const heroMessages = {
    recruiter: {
      title: "Let's Build Something Great",
      subtitle: "AI Engineer with Production Impact",
    },
    developer: {
      title: "Code. Research. Build.",
      subtitle: "Deep Technical Work",
    },
    friend: {
      title: "Get to Know Me",
      subtitle: "Interests, Reading, and Life",
    },
    stalker: {
      title: "Everything (and More)",
      subtitle: "The Complete Picture",
    },
  }

  const message = heroMessages[profileId]

  // Tabs based on profile
  const getTabs = () => {
    const allTabs = ['overview', 'projects', 'research', 'reads', 'watches', 'listens', 'contact']
    
    if (profileId === 'recruiter') {
      return ['overview', 'projects', 'contact']
    } else if (profileId === 'developer') {
      return ['overview', 'projects', 'research', 'contact']
    } else if (profileId === 'friend') {
      return ['overview', 'reads', 'watches', 'listens', 'contact']
    } else if (profileId === 'stalker') {
      return allTabs
    }
    return ['overview']
  }

  const tabs = getTabs()

  return (
    <div className={`profile-view ${profileId}`}>
      <Navigation currentProfile={profileId} />
      
      <Hero 
        title={message.title}
        subtitle={message.subtitle}
        profileId={profileId}
      />

      <div className="profile-container">
        {/* Tab Navigation */}
        <nav className="tabs-navigation" aria-label="Profile sections">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
              aria-current={activeTab === tab ? 'page' : undefined}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>

        {/* Content Sections */}
        <motion.div
          className="profile-content"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <section className="overview-section" aria-label="Overview">
              {/* Currently Working On */}
              {filteredContent.currently.length > 0 && (
                <div className="content-block">
                  <h2>Currently</h2>
                  <div className="currently-grid">
                    {filteredContent.currently.map((item) => (
                      <ContentCard key={item.id} item={item} type="current" />
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Timeline */}
              {filteredContent.experience.length > 0 && (
                <div className="content-block">
                  <h2>Experience</h2>
                  <div className="timeline">
                    {filteredContent.experience.map((item) => (
                      <TimelineItem key={item.id} item={item} />
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              <div className="content-block">
                <h2>Skills</h2>
                <SkillsSection skills={portfolioData.skills} />
              </div>
            </section>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <section className="projects-section" aria-label="Projects">
              <div className="projects-grid">
                {filteredContent.projects.length > 0 ? (
                  filteredContent.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                ) : (
                  <p className="empty-state">No projects to show in this view.</p>
                )}
              </div>
            </section>
          )}

          {/* Research Tab */}
          {activeTab === 'research' && (
            <section className="research-section" aria-label="Research">
              <div className="research-list">
                {filteredContent.research.length > 0 ? (
                  filteredContent.research.map((item) => (
                    <div key={item.id} className="research-item">
                      <h3>{item.title}</h3>
                      <p className="status">{item.status}</p>
                      <p>{item.description}</p>
                      <p className="focus">{item.focus}</p>
                    </div>
                  ))
                ) : (
                  <p className="empty-state">No research to show in this view.</p>
                )}
              </div>
            </section>
          )}

          {/* Reads Tab */}
          {activeTab === 'reads' && (
            <section className="reads-section" aria-label="Reads">
              <div className="content-grid">
                {filteredContent.reads.length > 0 ? (
                  filteredContent.reads.map((read) => (
                    <ContentCard key={read.id} item={read} type="read" />
                  ))
                ) : (
                  <p className="empty-state">No reads to show in this view.</p>
                )}
              </div>
            </section>
          )}

          {/* Watches Tab */}
          {activeTab === 'watches' && (
            <section className="watches-section" aria-label="Watches">
              <div className="content-grid">
                {filteredContent.watches.length > 0 ? (
                  filteredContent.watches.map((watch) => (
                    <ContentCard key={watch.id} item={watch} type="watch" />
                  ))
                ) : (
                  <p className="empty-state">No watches to show in this view.</p>
                )}
              </div>
            </section>
          )}

          {/* Listens Tab */}
          {activeTab === 'listens' && (
            <section className="listens-section" aria-label="Listens">
              <div className="content-grid">
                {filteredContent.listens.length > 0 ? (
                  filteredContent.listens.map((listen) => (
                    <ContentCard key={listen.id} item={listen} type="listen" />
                  ))
                ) : (
                  <p className="empty-state">No listens to show in this view.</p>
                )}
              </div>
            </section>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <section className="contact-section" aria-label="Contact">
              <div className="contact-content">
                <h2>Let's Connect</h2>
                <p>I'm always interested in talking about AI, research, and building things that matter.</p>
                
                <div className="contact-methods">
                  <a href={`mailto:${portfolioData.personal.email}`} className="contact-button">
                    Email
                  </a>
                  <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-button">
                    LinkedIn
                  </a>
                  <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="contact-button">
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProfileView