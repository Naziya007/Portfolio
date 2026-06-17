import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Naziya Parveen. Built with <FaHeart className="heart-icon" /> and React.
          </p>
          <div className="footer-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
