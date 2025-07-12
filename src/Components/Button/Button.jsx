import React from 'react';
import { motion } from 'framer-motion';
import './Button.css';

const Button = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="button-wrapper"
    >
      <motion.a
        href="#contact"
        className="cta-button"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <span className="cta-button__text">Lets Collaborate</span>
        <motion.div 
          className="cta-button__icon"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </motion.div>
        <div className="cta-button__shine"></div>
      </motion.a>
      
      <div className="cta-subtitle">
        Ready to bring your vision to life
      </div>
    </motion.div>
  );
};

export default Button;