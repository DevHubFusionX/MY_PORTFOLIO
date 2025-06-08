/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useState, memo } from 'react'
import { motion, } from "motion/react"

import "./Services.css";

const ServiceModal = memo(({ isOpen, onClose, title, description, services }) => (
  <div className={isOpen ? "services__modal active-modal " : "services__modal"}>
    <div className="services__modal-content">
      <i onClick={onClose} className="uil uil-times services__modal-close"></i>
      <h3 className="services__modal-title">{title}</h3>
      <p className="services__modal-description">{description}</p>
      <ul className="services__modal-services grid">
        {services.map((service, index) => (
          <li key={index} className="services__modal-service">
            <i className="ul uil-check-circle services__modal-icon"></i>
            <p className="services__modal-info">{service}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
));

const ServiceCard = memo(({ icon, title, index, isActive, onToggle, description, services }) => (
  <motion.div
    initial={{ opacity: 0, y: index - 100 }}
    inherit={{ opacity: 0 }}
    animate={{ once: true, opacity: 1, y: 0, }}
    transition={{
      duration: 0.5, delay: index * 0.1,
      type: 'spring',
      stiffness: '200',
      damping: '20'
    }}
    className="service__content card">
    <div className="shine"></div>

    <div>
      <i className={`uil ${icon} services__icon`}></i>
      <h3 className='services__title'>{title}</h3>
    </div>
    <span className="services__button" onClick={() => onToggle(index)}>
      View More <i className="uil uil-arrow-right services__button-icon"></i>
    </span>
    <ServiceModal
      isOpen={isActive}
      onClose={() => onToggle(0)}
      title={title}
      description={description}
      services={services}
    />
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
    setActiveTab(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            index={index + 1}
            isActive={activeTab === index + 1}
            onToggle={toggleTab}
            description={service.description}
            services={service.services}
          />
        ))}
      </div>
    </section>
  )
}

export default memo(Service)

