import React, { useState } from 'react';
import catecLogo from '../../assets/logo_catec.png';
import { PrivacyModal } from '../ui/PrivacyModal';

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

const FacebookIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsappIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
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
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

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
            <img src={catecLogo} alt="CATEC Logo" className="header-logo-img" />
            <span className="logo-text">Catec <span className="text-muted">2026-I</span></span>
          </div>
          <p className="footer-description body-md">
            Impulsando el aprendizaje, la innovación y el desarrollo tecnológico en la nueva generación de profesionales del sur del Perú.
          </p>
        </div>

        <div className="footer-links-column">
          <h4 className="footer-heading label-caps text-purple">Enlaces</h4>
          <ul className="footer-links-list">
            <li><a href="https://www.facebook.com/CatecEpis" target="_blank" rel="noopener noreferrer" className="footer-link">Contacto</a></li>
            <li><button onClick={() => setIsPrivacyModalOpen(true)} className="footer-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>Política de privacidad</button></li>
            <li><a href="https://portal.upt.edu.pe/site/web/contenido/inicio" target="_blank" rel="noopener noreferrer" className="footer-link">Universidad Privada de Tacna</a></li>
          </ul>
        </div>

        <div className="footer-social-column">
          <h4 className="footer-heading label-caps text-purple">Social</h4>
          <div className="footer-social-icons">
            <a href="https://github.com/catec2026/catec2026.github.io.git" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.facebook.com/CatecEpis" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
              <FacebookIcon size={20} />
            </a>
            <a href="http://wa.me/51903002082" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="WhatsApp">
              <WhatsappIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright-text label-mono">
          © {currentYear} Evento organizado por la Escuela de Ingenieria de Sistemas de la Universidad Privada de Tacna. Todos los derechos reservados.
        </p>
      </div>

      <PrivacyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </footer>
  );
};
