import './Contact.css';
import { motion } from 'motion/react';
import emailjs from 'emailjs-com';
import React, { useState, useCallback, useMemo, useEffect } from 'react';
import Social from '../Hero/Social-fi copy';
import Notification from './Notification';


/**
 * @function Contact
 * @description A React component that renders a contact form and contact information.
 * It allows users to send a message via email using EmailJS.
 *
 * @component
 *
 * @returns {JSX.Element} The Contact component.
 *
 * @example
 * // Usage:
 * <Contact />
 *
 * @requires react
 * @requires emailjs-com
 * @requires framer-motion
 *
 * @state {boolean} loading - Indicates whether the form is currently submitting.
 * @state {boolean} success - Indicates whether the form submission was successful.
 * @state {string} error - Stores any error message that occurred during form submission.
 * @state {object} formData - Stores the form data (name, email, project).
 *
 * @method handleSubmit - Handles the form submission. Prevents default form submission behavior,
 * sets the loading state to true, and sends the form data via EmailJS. Updates the success or error state
 * based on the EmailJS response.
 * @param {object} e - The event object.
 *
 * @method handleChange - Handles changes to the form input fields. Updates the corresponding
 * field in the formData state.
 * @param {object} e - The event object.
 *
 * @property {string} formData.name - The name entered in the form.
 * @property {string} formData.email - The email entered in the form.
 * @property {string} formData.project - The project description entered in the form.
 *
 * @property {function} emailjs.send - The EmailJS function to send the email.
 * @param {string} REACT_APP_EMAILJS_SERVICE_ID - The EmailJS service ID from environment variables.
 * @param {string} REACT_APP_EMAILJS_TEMPLATE_ID - The EmailJS template ID from environment variables.
 * @param {object} sanitizedData - The sanitized parameters to pass to the EmailJS template.
 * @param {string} REACT_APP_EMAILJS_PUBLIC_KEY - The EmailJS public key from environment variables.
 *
 * @returns {JSX.Element} A section containing contact information and a form to submit project details.
 * Includes success and error messages based on form submission status.
 */
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });

  // Reset success state after 5 seconds
  useEffect(() => {
    if (success || error) {
      setShowNotification(true);
      setNotificationMessage(success ? 'Message sent successfully!' : error);
      setNotificationType(success ? 'success' : 'error');
      
      const timer = setTimeout(() => {
        setSuccess(false);
        setError('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [success, error]);

  const sanitizedData = useMemo(() => ({
    from_name: formData.name.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    from_email: formData.email.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
    project_description: formData.project.replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }), [formData]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.project.trim()) {
      setError('All fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Invalid email format.');
      return;
    }
    setLoading(true);
    setError('');

    emailjs.send(
      import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
      sanitizedData,
      `${import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY}`
    )
      .then(() => {
        setSuccess(true);
        setFormData({ name: '', email: '', project: '' });
      })
      .catch((err) => {
        setError('Failed to send message. Please check your internet connection.');
        console.error('Email sending failed', err);
      })
      .finally(() => setLoading(false));
  }, [sanitizedData, formData]);

  const handleChange = useCallback((e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }, [formData]);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="contact__info">
            <div className="contact__card">
              <i className="bx bx contact__card-icon"></i>
              <h3 className="contact__card-title"></h3>
              <span className="contact__card-data"></span>

              <a href="" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">fanyanyanwu@gmail.com</span>

              <a href="mailto:fanyanwu83@gmail.com" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">091-2739-1830</span>

              <a href="https://wa.me/2349127391830" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">messenger</h3>
              <span className="contact__card-data">FlynDev</span>

              <a href="" className="contact__button">
                write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="contact__card">
             <Social className=""></Social>
            </motion.div>
        
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20, duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
          className="contact__content">

          <h3 className="contact__title">write to me your project</h3>
          <form onSubmit={handleSubmit} id="contactForm" className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert Your Name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                placeholder="Insert Your Email"
                required
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">project</label>
              <textarea
                name="project"
                value={formData.project}
                onChange={handleChange}
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Input Your Project"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="button button--flex card"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'send message'}
              <i className="bx bxs-send"></i>
            </button>
          </form>
        </motion.div>
      </div>

      {/* Notification component */}
      <Notification 
        show={showNotification}
        type={notificationType}
        message={notificationMessage}
        onClose={handleCloseNotification}
      />
    </section>
  );
};

export default Contact;