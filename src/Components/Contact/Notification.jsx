import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Notification.css';

/**
 * @function Notification
 * @description Modern notification component with smooth animations
 * @param {Object} props - Component props
 * @param {string} props.message - The message to display
 * @param {string} props.type - 'success' or 'error'
 * @param {boolean} props.show - Whether to show the notification
 * @param {function} props.onClose - Close handler
 * @returns {JSX.Element|null} Animated notification component
 */
const Notification = ({ message, type, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ x: 400, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 400, opacity: 0, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30,
            duration: 0.5
          }}
          className={`notification notification-${type}`}
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 400 }}
            className="notification-icon"
          >
            {type === 'success' ? (
              <i className="bx bx-check-circle"></i>
            ) : (
              <i className="bx bx-error-circle"></i>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="notification-message"
          >
            {message}
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="notification-close" 
            onClick={onClose}
          >
            <i className="bx bx-x"></i>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;