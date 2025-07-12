import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setIsVisible(scrolled > 300);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg className="back-to-top__progress" viewBox="0 0 36 36">
            <path
              className="back-to-top__progress-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <motion.path
              className="back-to-top__progress-fill"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: scrollProgress / 100 }}
              transition={{ duration: 0.1 }}
            />
          </svg>
          <motion.i 
            className="bx bx-up-arrow-alt back-to-top__icon"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;