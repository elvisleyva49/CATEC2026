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
      name: 'Dr. Elena Rodriguez',
      role: 'Cloud Architect',
      company: 'AWS',
      image: '/speakers/elena.png',
    },
    {
      name: 'Ing. Mateo Aurelio',
      role: 'Data Principal',
      company: 'Google',
      image: '/speakers/mateo.png',
    },
    {
      name: 'MSc. David Chen',
      role: 'Cybersecurity Lead',
      company: 'IBM',
      image: '/speakers/david.png',
    },
    {
      name: 'Dra. Sofia Mendez',
      role: 'AI Research',
      company: 'OpenAI',
      image: '/speakers/sofia.png',
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
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
