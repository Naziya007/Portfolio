import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's work together</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's build something amazing together!</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <HiMail />
                </div>
                <div className="contact-detail-text">
                  <span className="label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="value">{personalInfo.email}</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <HiPhone />
                </div>
                <div className="contact-detail-text">
                  <span className="label">Phone</span>
                  <a href={`tel:${personalInfo.phone}`} className="value">{personalInfo.phone}</a>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LeetCode">
                <SiLeetcode />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${name}&body=${message}%0A%0AFrom: ${name} (${email})`;
            }}
          >
            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input type="text" id="contact-name" name="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input type="email" id="contact-email" name="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea id="contact-message" name="message" placeholder="Tell me about your project..." rows="5" required />
            </div>
            <motion.button
              type="submit"
              className="btn-primary form-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message ✨
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
