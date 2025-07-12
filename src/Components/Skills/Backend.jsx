/** @format */

import React from "react";
import { motion } from 'framer-motion';

const skillsData = [
  { name: "Node.js", level: "Advanced", proficiency: 85, icon: "bxl-nodejs" },
  { name: "Python", level: "Intermediate", proficiency: 70, icon: "bxl-python" },
  { name: "Express.js", level: "Advanced", proficiency: 80, icon: "bx-server" },
  { name: "MongoDB", level: "Intermediate", proficiency: 75, icon: "bx-data" },
  { name: "PostgreSQL", level: "Intermediate", proficiency: 70, icon: "bx-cylinder" },
  { name: "REST APIs", level: "Advanced", proficiency: 90, icon: "bx-transfer" }
];

const Backend = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="skills__content"
    >
      <div className="skills__header">
        <div className="skills__icon-wrapper">
          <i className="bx bx-server skills__main-icon"></i>
        </div>
        <div className="skills__title-group">
          <h3 className="skills__title">Backend Development</h3>
          <p className="skills__subtitle">Server-side architecture & database management</p>
        </div>
      </div>
      
      <div className="skills__box">
        <div className="skills__group skills__group--compact">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 + (index * 0.05) }}
              viewport={{ once: true }}
              className="skills__data skills__data--compact"
            >
              <div className="skills__data-icon">
                <i className={`bx ${skill.icon}`}></i>
              </div>
              <div className="skills__data-content">
                <h4 className="skills__name">{skill.name}</h4>
                <div className="skills__progress-container">
                  <div className="skills__progress">
                    <motion.div 
                      className="skills__progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + (index * 0.05) }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <span className="skills__percentage">{skill.proficiency}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Backend;