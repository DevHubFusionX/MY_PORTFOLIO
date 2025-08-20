import React, { useState, useCallback, useMemo } from "react";
import "./Portfolio.css";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { projectsData } from "./Data";

const Portfolio = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projectsData.map(project => project.category))];
    return ["All", ...uniqueCategories];
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (filter === "All") return projectsData;
    return projectsData.filter(project => project.category === filter);
  }, [filter]);

  const handleProjectClick = useCallback((projectId) => {
    setIsLoading(true);
    // Add a small delay to show loading state
    setTimeout(() => {
      navigate(`/blog/${projectId}`);
      setIsLoading(false);
    }, 300);
  }, [navigate]);

  const handleFilterChange = useCallback((category) => {
    setFilter(category);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="portfolio section" id="Portfolio">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">Featured Projects</h2>
        <span className="section__subtitle">Showcasing innovation through code</span>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div 
        className="portfolio__filters"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`portfolio__filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
            disabled={isLoading}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <div className="portfolio__container container">
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={30}
              loop={filteredProjects.length > 3}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ 
                delay: 4000, 
                disableOnInteraction: false,
                pauseOnMouseEnter: true 
              }}
              className="portfolio-swiper"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 25
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={`${project.id}-${filter}`}>
                  <motion.div
                    variants={cardVariants}
                    className="portfolio__card"
                    onClick={() => handleProjectClick(project.id)}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="portfolio__image-container">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.category} project`}
                        className="portfolio__image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="portfolio__image-fallback" style={{ display: 'none' }}>
                        <i className="bx bx-image-alt"></i>
                        <span>Image not available</span>
                      </div>
                      <div className="portfolio__overlay">
                        <div className="portfolio__overlay-content">
                          <h3 className="portfolio__overlay-title">{project.title}</h3>
                          <p className="portfolio__overlay-category">{project.category}</p>
                          <div className="portfolio__overlay-tech">
                            {project.technologies.slice(0, 3).map(tech => (
                              <span key={tech} className="portfolio__tech-tag">{tech}</span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="portfolio__tech-tag more">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>
                          <div className="portfolio__overlay-actions">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="portfolio__btn primary"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`View live demo of ${project.title}`}
                            >
                              <i className="bx bx-link-external"></i>
                              Live Demo
                            </a>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="portfolio__btn secondary"
                              onClick={(e) => e.stopPropagation()}
                              aria-label={`View source code of ${project.title}`}
                            >
                              <i className="bx bxl-github"></i>
                              Code
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="portfolio__content">
                      <h3 className="portfolio__title">{project.title}</h3>
                      <p className="portfolio__description">
                        {project.description.length > 120 
                          ? `${project.description.substring(0, 120)}...` 
                          : project.description
                        }
                      </p>
                      <div className="portfolio__meta">
                        <span className="portfolio__category">{project.category}</span>
                        <span className="portfolio__duration">{project.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>

        {/* Loading Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="portfolio__loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="portfolio__spinner"></div>
              <span>Loading project details...</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="portfolio__empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="bx bx-folder-open"></i>
            <h3>No projects found</h3>
            <p>No projects match the selected category. Try selecting a different filter.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;