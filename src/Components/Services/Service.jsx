/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, memo } from 'react'
import { motion, AnimatePresence } from "motion/react"

import "./Services.css";

const ServiceModal = memo(({ isOpen, onClose, title, description, services }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div 
        className="services__modal"
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="services__modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <i onClick={onClose} className="uil uil-times services__modal-close"></i>
          <h3 className="services__modal-title">{title}</h3>
          <p className="services__modal-description">{description}</p>
          <ul className="services__modal-services">
            {services.map((service, index) => (
              <li 
                key={index} 
                className="services__modal-service"
              >
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">{service}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
));

const ServiceCard = memo(({ icon, title, index, isActive, onToggle, description, services }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.4,
      delay: index * 0.1
    }}
    className="service__content"
  >
    <div className="service__icon-wrapper">
      <i className={`uil ${icon} services__icon`}></i>
    </div>
    
    <div className="service__text">
      <h3 className='services__title'>{title}</h3>
      <p className="services__preview">{description.substring(0, 60)}...</p>
    </div>
    
    <span 
      className="services__button" 
      onClick={() => onToggle(index + 1)}
    >
      View More 
      <i className="uil uil-arrow-right services__button-icon"></i>
    </span>
  </motion.div>
));

const Service = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: "uil-web-grid",
      title: "Responsive Web Design",
      description: "Creating beautiful, responsive websites that work perfectly on all devices",
      services: [
        "Mobile-first responsive design implementation",
        "Cross-browser compatibility testing",
        "Flexible grid layouts and media queries",
        "Optimized images and assets for different screen sizes",
        "Touch-friendly interface design"
      ]
    },
    {
      icon: "uil-arrow",
      title: "UI/UX Implementation",
      description: "Transforming designs into interactive and user-friendly interfaces",
      services: [
        "Interactive prototype development",
        "User flow optimization",
        "Accessibility implementation",
        "Animation and transition effects",
        "User testing and feedback integration"
      ]
    },
    {
      icon: "uil-edit",
      title: "Custom Web Development",
      description: "Building tailored web solutions to meet your specific business needs",
      services: [
        "Custom functionality development",
        "API integration and development",
        "Database design and implementation",
        "Performance optimization",
        "Security implementation and best practices"
      ]
    }
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? 0 : index);
  };

  return (
    <section className="services section" id="services">
      <div>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>
      </div>
      
      <div className="services__container container">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            index={index}
            isActive={activeTab === index + 1}
            onToggle={toggleTab}
            description={service.description}
            services={service.services}
          />
        ))}
      </div>
      
      {services.map((service, index) => (
        <ServiceModal
          key={`modal-${index}`}
          isOpen={activeTab === index + 1}
          onClose={() => toggleTab(0)}
          title={service.title}
          description={service.description}
          services={service.services}
        />
      ))}
    </section>
  )
}

export default memo(Service)

