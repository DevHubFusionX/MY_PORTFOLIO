import React from "react";
import "./home.css";
import Social from "./Social-fi.jsx";
import Data from "./Data";
import ScrollDown from "./ScrollDown.jsx";
import { motion } from "framer-motion";
import Switch from "../Button/Switch";

const Hero = () => {
  return (
    <section className="home section" id="home">
      <Switch />
      
      <div className="home__container container">
        <div className="home__content">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="home__social-wrapper"
          >
            <Social />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="home__data-wrapper"
          >
            <Data />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="home__image-wrapper"
          >
            <div className="home__img">
              <div className="home__img-overlay"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ScrollDown />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;