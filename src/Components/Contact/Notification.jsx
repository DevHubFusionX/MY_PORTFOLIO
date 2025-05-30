import React, { useEffect, useState } from 'react';
import './Notification.css';

/**
 * @function Notification
 * @description A React component that displays a notification message.
 * 
 * @component
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - The message to display in the notification
 * @param {string} props.type - The type of notification ('success' or 'error')
 * @param {boolean} props.show - Whether to show the notification
 * @param {function} props.onClose - Function to call when closing the notification
 * 
 * @returns {JSX.Element|null} The Notification component or null if not shown
 */
const Notification = ({ message, type, show, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    if (show) {
      // Auto-close notification after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  });
  
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      onClose();
    }, 300); // Match this with the CSS animation duration
  };
  
  if (!show) return null;
  
  return (
    <div className={`notification notification-${type} ${isExiting ? 'notification-exit' : ''}`}>
      <div className="notification-icon">
        {type === 'success' ? (
          <i className="bx bx-check-circle"></i>
        ) : (
          <i className="bx bx-error-circle"></i>
        )}
      </div>
      <div className="notification-message">{message}</div>
      <button className="notification-close" onClick={handleClose}>
        <i className="bx bx-x"></i>
      </button>
    </div>
  );
};

export default Notification;