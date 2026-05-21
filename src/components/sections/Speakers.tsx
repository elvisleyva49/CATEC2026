import React from 'react';
import { Card } from '../ui/Card';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}

export const Speakers: React.FC = () => {
  const speakersList: Speaker[] = [
    {
      name: 'Ing. Maycol Jesus Escobedo Pacheco',
      role: 'Cloud Architect',
      company: 'AWS',
      image: '/speakers/ponente1.jpg',
    },
    {
      name: 'Ing. Walter Edison Alanya Flores',
      role: 'Data Principal',
      company: 'Google',
      image: '/speakers/ponente2.png',
    },
    {
      name: 'Ing. Alex Francisco Choquecahua Ayna',
      role: 'Cybersecurity Lead',
      company: 'IBM',
      image: '/speakers/ponente3.png',
    },
    {
      name: 'Ing. Dr. Renzo Tazo Cohaila',
      role: 'AI Research',
      company: 'OpenAI',
      image: '/speakers/ponente4.png',
    },
    {
      name: 'Ing. Juan Sebastian González Sanabria',
      role: 'DevOps Engineer',
      company: 'Microsoft',
      image: '/speakers/ponente5.png',
    },
    {
      name: 'Ing. Alonso Godinez Salazar',
      role: 'Frontend Lead',
      company: 'Vercel',
      image: '/speakers/ponente6.png',
    },
    {
      name: 'Ing. Eduardo Lozano Zapata',
      role: 'Backend Architect',
      company: 'Meta',
      image: '/speakers/ponente7.png',
    },
  ];

  return (
    <section id="speakers" className="speakers-section section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag label-mono text-green">// LIDERAZGO TÉCNICO</span>
          <h2 className="section-title headline-lg">Ponentes de Élite</h2>
        </div>

        <div className="speakers-grid">
          {speakersList.map((speaker, index) => (
            <Card key={index} className="speaker-card" glowOnHover={true}>
              <div className="speaker-image-wrapper">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="speaker-image" 
                  onError={(e) => {
                    // Fallback to a placeholder in case of load issues
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-${index === 0 ? '1573496359142-b8d87734a5a2' : index === 1 ? '1507003211169-0a1dd7228f2d' : index === 2 ? '1500648767791-00dcc994a43e' : '1534528741775-53994a69daeb'}?w=400&h=400&fit=crop&q=80`;
                  }}
                />
                <div className="speaker-image-overlay"></div>
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name label-mono text-cyan">{speaker.name}</h3>
                <p className="speaker-role body-md">
                  {speaker.role} <span className="speaker-company text-muted">@ {speaker.company}</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="speaker-social-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
