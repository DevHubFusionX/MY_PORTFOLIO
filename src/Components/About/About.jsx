import React from 'react'
import './About.css'
import AboutImg from "../../assets/Aboutimage.jpg"
import AboutInfo from './About-info.jsx'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="about section"
      id="About"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">The story behind my journey</span>
      </motion.div>

      <div className="about__container container">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="about__image-container"
        >
          <div className="about__image-wrapper">
            <img src={AboutImg} alt="About me" className="about__img" />
            <div className="about__image-overlay"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="about__content"
        >
          <AboutInfo />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="about__description"
          >
            I'm a passionate frontend developer who loves bringing creative ideas to life through code. 
            With a keen eye for design and a dedication to crafting intuitive user experiences, 
            I transform concepts into beautiful, functional websites that leave a lasting impression. 
            My approach combines technical expertise with artistic sensibility to create digital 
            experiences that truly connect with users.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            download=""
            href="https://1drv.ms/w/s!AomcZBq8dYxnfNoudAnbIQiO5vQ?e=rZLjWI"
            className="button button--flex about__cta"
          >
            <i className="uil uil-download-alt button__icon"></i>
            View My Resume
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
