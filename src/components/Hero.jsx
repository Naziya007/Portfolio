import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { HiDownload, HiArrowDown } from 'react-icons/hi';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={childVariants}>
          👋 Hello, I'm
        </motion.p>

        <motion.h1 className="hero-name" variants={childVariants}>
          Naziya <span className="highlight">Parveen</span>
        </motion.h1>

        <motion.div className="hero-role" variants={childVariants}>
          <span>{displayText}</span>
          <span className="cursor">|</span>
        </motion.div>

        <motion.p className="hero-tagline" variants={childVariants}>
          {personalInfo.tagline}
        </motion.p>

        <motion.div className="hero-cta" variants={childVariants}>
          <a href="#contact" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Let's Connect
          </a>
          <a href="#projects" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={childVariants}>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
            <SiLeetcode />
          </a>
        </motion.div>

        <motion.div
          className="hero-scroll-indicator"
          variants={childVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
