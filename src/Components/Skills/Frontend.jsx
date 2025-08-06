/** @format */

import React from "react";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const skillsData = [
  { name: "HTML5", level: "Advanced", proficiency: 95, icon: <FaHtml5 color="#e34c26" size={28} /> },
  { name: "CSS3", level: "Advanced", proficiency: 90, icon: <FaCss3Alt color="#2965f1" size={28} /> },
  { name: "JavaScript", level: "Advanced", proficiency: 85, icon: <FaJs color="#f7df1e" size={28} /> },
  { name: "React", level: "Advanced", proficiency: 88, icon: <FaReact color="#61dafb" size={28} /> },
  { name: "TypeScript", level: "Intermediate", proficiency: 75, icon: <SiTypescript color="#3178c6" size={28} /> },
  { name: "Tailwind CSS", level: "Advanced", proficiency: 80, icon: <SiTailwindcss color="#38bdf8" size={28} /> }
];

const Frontend = () => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="skills__content"
    >
      <div className="skills__header">
        <div className="skills__icon-wrapper">
          <i className="bx bx-code-alt skills__main-icon"></i>
        </div>
        <div className="skills__title-group">
          <h3 className="skills__title">Frontend Development</h3>
          <p className="skills__subtitle">
            User interface design & interactive experiences
          </p>
        </div>
      </div>

      <div className="skills__box">
        <div className="skills__group skills__group--compact">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="skills__data skills__data--compact"
            >
              <div className="skills__data-icon">{skill.icon}</div>
              <div className="skills__data-content">
                <h4 className="skills__name">{skill.name}</h4>
                <div className="skills__progress-container">
                  <div className="skills__progress">
                    <motion.div
                      className="skills__progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.01 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                  <span className="skills__percentage">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Frontend;