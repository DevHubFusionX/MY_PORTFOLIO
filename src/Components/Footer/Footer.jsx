import React from 'react'
import './Footer.css'
import { motion } from 'motion/react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: 'bx bxl-facebook', href: '#', label: 'Facebook' },
    { icon: 'bx bxl-instagram', href: '#', label: 'Instagram' },
    { icon: 'bx bxl-twitter', href: '#', label: 'Twitter' },
    { icon: 'bx bxl-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'bx bxl-github', href: '#', label: 'GitHub' }
  ]

  const quickLinks = [
    { name: 'About', href: '#About' },
    { name: 'Skills', href: '#Skills' },
    { name: 'Services', href: '#Services' },
    { name: 'Portfolio', href: '#Portfolio' },
    { name: 'Contact', href: '#Contact' }
  ]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="footer"
    >
      <div className="footer__container container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="footer__content"
        >
          <div className="footer__info">
            <h2 className="footer__title">Anyanwu Franklin</h2>
            <p className="footer__description">
              Frontend Developer creating amazing web experiences
            </p>
          </div>

          <div className="footer__links">
            <h3 className="footer__links-title">Quick Links</h3>
            <ul className="footer__list">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <a href={link.href} className="footer__link">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h3 className="footer__social-title">Follow Me</h3>
            <div className="footer__social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    transition: { duration: 0.2 } 
                  }}
                  viewport={{ once: true }}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="footer__bottom"
        >
          <p className="footer__copy">
            © {currentYear} Anyanwu Franklin. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer