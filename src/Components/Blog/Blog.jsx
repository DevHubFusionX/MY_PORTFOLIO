import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../Portfolio/Data';
import './Blog.css';

const Blog = () => {
  const { projectId } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (projectId) {
      const project = projectsData.find(p => p.id === parseInt(projectId));
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [projectId]);

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="blog section" id="blog">
      <div className="blog__header">
        <Link to="/" className="blog__back-btn">
          <i className="bx bx-arrow-back"></i>
          Back to Home
        </Link>
        <h2 className="section__title">Project Insights</h2>
        <span className="section__subtitle">Deep dive into my development journey</span>
      </div>

      <div className="blog__container container">
        <div className="blog__filters">
          {categories.map(category => (
            <button
              key={category}
              className={`blog__filter ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="blog__grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="blog__card"
              onClick={() => setSelectedProject(project)}
            >
              <div className="blog__card-image">
                <img src={project.image} alt={project.title} />
                <div className="blog__card-overlay">
                  <span className="blog__card-category">{project.category}</span>
                </div>
              </div>
              <div className="blog__card-content">
                <h3 className="blog__card-title">{project.title}</h3>
                <p className="blog__card-description">{project.description}</p>
                <div className="blog__card-tech">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="blog__tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="blog__card-meta">
                  <span className="blog__card-duration">{project.duration}</span>
                  <span className="blog__card-role">{project.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="blog__modal"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="blog__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="blog__modal-close"
                onClick={() => setSelectedProject(null)}
              >
                <i className="bx bx-x"></i>
              </button>
              
              <div className="blog__modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className="blog__modal-info">
                  <h2>{selectedProject.title}</h2>
                  <span className="blog__modal-category">{selectedProject.category}</span>
                  <p>{selectedProject.longDescription}</p>
                </div>
              </div>

              <div className="blog__modal-body">
                <div className="blog__modal-section">
                  <h3>Technologies Used</h3>
                  <div className="blog__tech-list">
                    {selectedProject.technologies.map(tech => (
                      <span key={tech} className="blog__tech-item">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="blog__modal-section">
                  <h3>Key Features</h3>
                  <ul className="blog__features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="blog__modal-section">
                  <h3>Challenge & Solution</h3>
                  <div className="blog__challenge-solution">
                    <div className="blog__challenge">
                      <h4>Challenge</h4>
                      <p>{selectedProject.challenges}</p>
                    </div>
                    <div className="blog__solution">
                      <h4>Solution</h4>
                      <p>{selectedProject.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="blog__modal-actions">
                  <a 
                    href={selectedProject.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog__action-btn primary"
                  >
                    <i className="bx bx-link-external"></i>
                    Live Demo
                  </a>
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="blog__action-btn secondary"
                  >
                    <i className="bx bxl-github"></i>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;