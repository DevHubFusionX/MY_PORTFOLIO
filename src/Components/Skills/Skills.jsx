import React from 'react'
import './Skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import { motion } from "motion/react"

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
      className='skills section'
      id='Skills'
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical expertise</span>
      </motion.div>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </motion.section>
  )
}

export default Skills
