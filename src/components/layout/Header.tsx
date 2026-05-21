import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

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
          <Cpu className="logo-icon text-cyan" size={24} />
          <span className="logo-text">
            UPT <span className="text-muted">Systems Engineering</span>
          </span>
        </div>

        <nav className="desktop-nav">
          <span 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </span>
          <span 
            className={`nav-link ${activeSection === 'speakers' ? 'active' : ''}`}
            onClick={() => scrollToSection('speakers')}
          >
            Speakers
          </span>
          <span 
            className={`nav-link ${activeSection === 'schedule' ? 'active' : ''}`}
            onClick={() => scrollToSection('schedule')}
          >
            Schedule
          </span>
          <span 
            className={`nav-link ${activeSection === 'register' ? 'active' : ''}`}
            onClick={() => scrollToSection('register')}
          >
            Register
          </span>
        </nav>

        <div className="header-actions">
          <Button 
            variant="secondary" 
            className="register-now-btn"
            onClick={() => scrollToSection('register')}
          >
            Register Now
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
              About
            </span>
            <span 
              className={`mobile-nav-link ${activeSection === 'speakers' ? 'active' : ''}`}
              onClick={() => scrollToSection('speakers')}
            >
              Speakers
            </span>
            <span 
              className={`mobile-nav-link ${activeSection === 'schedule' ? 'active' : ''}`}
              onClick={() => scrollToSection('schedule')}
            >
              Schedule
            </span>
            <span 
              className={`mobile-nav-link ${activeSection === 'register' ? 'active' : ''}`}
              onClick={() => scrollToSection('register')}
            >
              Register
            </span>
            <Button 
              variant="primary" 
              className="w-full mt-4"
              onClick={() => scrollToSection('register')}
            >
              Register Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
