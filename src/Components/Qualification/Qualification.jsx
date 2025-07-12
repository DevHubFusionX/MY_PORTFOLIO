/** @format */

import React, { useState } from "react";
import "./Qualification.css";
import { motion, AnimatePresence } from "motion/react";
import { qualificationData } from "../../data/qualificationData";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="qualification section"
    >
      <motion.h2 variants={itemVariants} className="section__title">
        Qualification
      </motion.h2>
      <motion.span variants={itemVariants} className="section__subtitle">
        My personal journey
      </motion.span>

      <motion.div variants={itemVariants} className="qualification__container container">
        <div className="qualification__tabs">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </motion.div>
        </div>

        <div className="qualification__sections">
          <AnimatePresence mode="wait">
            {toggleState === 1 && (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="qualification__content qualification__content-active"
              >
                {qualificationData.education.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="qualification__data"
                  >
                    {item.position === "left" ? (
                      <>
                        <div>
                          <h3 className="qualification__title">{item.title}</h3>
                          <span className="qualification__subtitle">{item.subtitle}</span>
                          <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>{item.period}
                          </div>
                        </div>
                        <div>
                          <span className="qualification__rounder"></span>
                          {index < qualificationData.education.length - 1 && <span className="qualification__line"></span>}
                        </div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div>
                          <span className="qualification__rounder"></span>
                          {index < qualificationData.education.length - 1 && <span className="qualification__line"></span>}
                        </div>
                        <div>
                          <h3 className="qualification__title">{item.title}</h3>
                          <span className="qualification__subtitle">{item.subtitle}</span>
                          <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>{item.period}
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {toggleState === 2 && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.4 }}
                className="qualification__content qualification__content-active"
              >
                {qualificationData.experience.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="qualification__data"
                  >
                    {item.position === "left" ? (
                      <>
                        <div>
                          <h3 className="qualification__title">{item.title}</h3>
                          <span className="qualification__subtitle">{item.subtitle}</span>
                          <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>{item.period}
                          </div>
                        </div>
                        <div>
                          <span className="qualification__rounder"></span>
                          {index < qualificationData.experience.length - 1 && <span className="qualification__line"></span>}
                        </div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div>
                          <span className="qualification__rounder"></span>
                          {index < qualificationData.experience.length - 1 && <span className="qualification__line"></span>}
                        </div>
                        <div>
                          <h3 className="qualification__title">{item.title}</h3>
                          <span className="qualification__subtitle">{item.subtitle}</span>
                          <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>{item.period}
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Qualification;
