import "./TechStack.css";
import { motion } from "framer-motion";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

const TechStack = () => {
  const techItems = [
    { icon: <FaHtml5 size={40} />, name: "HTML", color: "#e34c26" },
    { icon: <FaCss3Alt size={40} />, name: "CSS", color: "#2965f1" },
    { icon: <FaJs size={40} />, name: "JavaScript", color: "#f7df1e" },
    { icon: <FaReact size={40} />, name: "React", color: "#61dafb" },
    { icon: <FaNodeJs size={40} />, name: "Node.js", color: "#3c873a" },
    { icon: <FaPhp size={40} />, name: "PHP", color: "#777bb4" },
    { icon: <SiMysql size={40} />, name: "MySQL", color: "#00758f" },
    { icon: <SiTailwindcss size={40} />, name: "Tailwind", color: "#38bdf8" },
  ];

  return (
    <motion.section
      className="tech__section section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">Tech Stack</h2>
        <span className="section__subtitle">Technologies I work with</span>
      </motion.div>

      <div className="tech__container container">
        <div className="tech__grid">
          {techItems.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="tech__card"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + (index * 0.1),
                ease: "easeOut"
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
            >
              <div className="tech__icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <h3 className="tech__name">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TechStack;