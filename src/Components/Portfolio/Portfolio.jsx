import React from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";
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

  const handleProjectClick = (projectId) => {
    navigate(`/blog/${projectId}`);
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

      <div className="portfolio__container container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
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
          {projectsData.map((project, index) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, }}
                transition={{ duration: 0.6, }}
                viewport={{ once: true }}
                className="portfolio__card"
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="portfolio__image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio__image"
                    loading="lazy"
                  />
                  <div className="portfolio__overlay">
                    <div className="portfolio__overlay-content">
                      <h3 className="portfolio__overlay-title">{project.title}</h3>
                      <p className="portfolio__overlay-category">{project.category}</p>
                      <div className="portfolio__overlay-tech">
                        {project.technologies.slice(0, 3).map(tech => (
                          <span key={tech} className="portfolio__tech-tag">{tech}</span>
                        ))}
                      </div>
                      <div className="portfolio__overlay-actions">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio__btn primary"
                        >
                          <i className="bx bx-link-external"></i>
                          Live Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio__btn secondary"
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
                  <p className="portfolio__description">{project.description}</p>
                  <div className="portfolio__meta">
                    <span className="portfolio__category">{project.category}</span>
                    <span className="portfolio__duration">{project.duration}</span>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;