import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import catecLogo from '../../assets/logo_catec.png';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      setIsScrolled(window.scrollY > 20);

      // Scrollspy logic
      const sections = ['home', 'about', 'speakers', 'schedule', 'register'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-wrapper" onClick={() => scrollToSection('home')}>
          <img src={catecLogo} alt="CATEC Logo" className="header-logo-img" />
          <span className="logo-text">
            CATEC <span className="text-muted">2026-I</span>
          </span>
        </div>

        <nav className="desktop-nav">
          <span
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            Acerca de
          </span>
          <span
            className={`nav-link ${activeSection === 'speakers' ? 'active' : ''}`}
            onClick={() => scrollToSection('speakers')}
          >
            Ponentes
          </span>
          <span
            className={`nav-link ${activeSection === 'schedule' ? 'active' : ''}`}
            onClick={() => scrollToSection('schedule')}
          >
            Calendario
          </span>
          <span
            className={`nav-link ${activeSection === 'register' ? 'active' : ''}`}
            onClick={() => scrollToSection('register')}
          >
            Registro
          </span>
        </nav>

        <div className="header-actions">
          <Button
            variant="secondary"
            className="register-now-btn"
            onClick={() => scrollToSection('register')}
          >
            Regístrate Ahora
          </Button>

          <button
            className="mobile-menu-toggle text-cyan"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-menu glass-container">
          <nav className="mobile-nav-links">
            <span
              className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              Acerca de
            </span>
            <span
              className={`mobile-nav-link ${activeSection === 'speakers' ? 'active' : ''}`}
              onClick={() => scrollToSection('speakers')}
            >
              Ponentes
            </span>
            <span
              className={`mobile-nav-link ${activeSection === 'schedule' ? 'active' : ''}`}
              onClick={() => scrollToSection('schedule')}
            >
              Calendario
            </span>
            <span
              className={`mobile-nav-link ${activeSection === 'register' ? 'active' : ''}`}
              onClick={() => scrollToSection('register')}
            >
              Registro
            </span>
            <Button
              variant="primary"
              className="w-full mt-4"
              onClick={() => scrollToSection('register')}
            >
              Regístrate Ahora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
