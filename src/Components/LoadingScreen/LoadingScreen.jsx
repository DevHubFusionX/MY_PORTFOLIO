import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';
// import load from "./Load.jsx"
import Loader from './Load.jsx';
const LoadingScreen = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Add no-scroll class to body when component mounts
    document.body.classList.add('no-scroll');

    // Add mouse move event listener for parallax effect
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const timer = setTimeout(() => {
      setIsExiting(true);
      // Wait for the animation to complete before removing from DOM
      setTimeout(() => {
        setIsVisible(false);
        // Remove no-scroll class from body when component unmounts
        document.body.classList.remove('no-scroll');
      }, 1000); // This should match the animation duration in CSS
    }, 3000); // 3 seconds delay

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      // Clean up: remove no-scroll class if component unmounts early
      document.body.classList.remove('no-scroll');
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${isExiting ? 'fade-out' : ''} ${className}`}>
      <div className="loading-content">
        <div className="text-3d">
          <span className="text-3d-inner">FRANKLYN</span>
        </div>
        <Loader/>
      </div>
    </div>
  );
};

export default LoadingScreen; 