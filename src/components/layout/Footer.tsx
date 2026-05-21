import React from 'react';
import { Cpu, Globe, MessageSquare } from 'lucide-react';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        <div className="footer-brand-column">
          <div className="logo-wrapper footer-logo" onClick={scrollToTop}>
            <Cpu className="logo-icon text-cyan" size={24} />
            <span className="logo-text">UPT <span className="text-muted">Systems Engineering</span></span>
          </div>
          <p className="footer-description body-md">
            Empoderando a la próxima generación de ingenieros en el sur del Perú a través de la excelencia técnica.
          </p>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-heading label-caps text-green">Enlaces</h4>
          <ul className="footer-links-list">
            <li><a href="#about" className="footer-link">Contact</a></li>
            <li><a href="#about" className="footer-link">Privacy Policy</a></li>
            <li><a href="#about" className="footer-link">University Credits</a></li>
          </ul>
        </div>

        <div className="footer-social-column">
          <h4 className="footer-heading label-caps text-green">Social</h4>
          <div className="footer-social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://upt.edu.pe" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Website">
              <Globe size={20} />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Discord">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p className="copyright-text label-mono">
          © {currentYear} UPT Systems Engineering Event. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
