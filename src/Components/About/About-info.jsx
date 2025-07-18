import React from 'react'
import { motion } from 'motion/react'

const AboutInfo = () => {
  const stats = [
    { icon: "bx bx-award", title: "Experience", subtitle: "2+ Years of Crafting" },
    { icon: "bx bx-briefcase-alt", title: "Portfolio", subtitle: "15+ Successful Projects" },
    { icon: "bx bx-support", title: "Availability", subtitle: "Always Responsive" }
  ];

  return (
    <div className='about__info'>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5 + (index * 0.1),
            ease: "easeOut"
          }}
          whileHover={{
            y: -5,
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          viewport={{ once: true }}
          className="about__box"
        >
          <i className={`${stat.icon} about__icon`}></i>
          <h3 className="about__title">{stat.title}</h3>
          <span className="about__subtitle">{stat.subtitle}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default AboutInfo
