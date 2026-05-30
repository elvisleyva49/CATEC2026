import React from 'react';
import { Card } from '../ui/Card';

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedin?: string;
}

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Speakers: React.FC = () => {
  const speakersList: Speaker[] = [
    {
      name: 'Adm. Maycol Jesus Escobedo Pacheco',
      role: 'International Speaker & Business Innovation',
      company: 'LATAM / Europa',
      image: '/speakers/ponente1.jpg',
      linkedin: 'https://www.linkedin.com/in/maycol-jesus-escobedo-pacheco-9a2a45224/',
    },
    {
      name: 'Ing. Walter Edison Alanya Flores',
      role: 'Technology Specialist',
      company: 'TRANCONSULT',
      image: '/speakers/ponente2.png',
      linkedin: 'https://www.linkedin.com/in/walter-edison-alanya-flores-021121a8/',
    },
    {
      name: 'Alex Choquecahua A.',
      role: 'Criminal Law Director',
      company: 'Valladares & Choquecahua',
      image: '/speakers/ponente3.png',
      linkedin: 'https://www.linkedin.com/in/alex-choquecahua-a-43243578/',
    },
    {
      name: 'Dr. Renzo Alberto Taco Coayla',
      role: 'Cybersecurity & IT Specialist',
      company: 'Universidad Privada de Tacna',
      image: '/speakers/ponente4.png',
      linkedin: 'https://www.linkedin.com/in/drrenzotaco/',
    },
    {
      name: 'Ing. Juan Sebastián González Sanabria',
      role: 'AI & Data Science Researcher',
      company: 'UPTC Colombia',
      image: '/speakers/ponente5.png',
      linkedin: 'https://www.linkedin.com/in/juan-sebasti%C3%A1n-gonz%C3%A1lez-sanabria-69b3a542/',
    },
    {
      name: 'Ing. Alonso Godinez Salazar',
      role: 'Frontend Engineer II',
      company: 'Amazon',
      image: '/speakers/ponente6.png',
      linkedin: 'https://www.linkedin.com/in/alonso-g-0662299a/',
    },
    {
      name: 'Ing. Eduardo Francisco Lozano Zapata',
      role: 'Systems Engineer',
      company: 'Fortinet',
      image: '/speakers/ponente7.png',
      linkedin: 'https://www.linkedin.com/in/eduardo-francisco-lozano-zapata-b00a7196/',
    },
    {
      name: 'Eduardo Nicolás Campazzo',
      role: 'Innovation Coordinator',
      company: 'Ministerio de Trabajo — La Rioja, Argentina',
      image: '/speakers/ponente8.png',
      linkedin: 'https://www.linkedin.com/in/campazzo/',
    },
  ];

  return (
    <section id="speakers" className="speakers-section section-padding">
      <div className="container">
        <div className="section-header-center speakers-header">
          <span className="section-tag label-mono text-purple">// EXPERTOS INVITADOS</span>
          <h2 className="section-title headline-lg">Ponentes</h2>
          <p className="speakers-intro body-md">
            Profesionales de tecnología, innovación y seguridad que compartirán experiencia con la comunidad UPT.
          </p>
        </div>

        <div className="speakers-grid">
          {speakersList.map((speaker) => (
            <Card key={speaker.name} className="speaker-card" glowOnHover={true}>
              <div className="speaker-image-wrapper">
                <img
                  src={`${import.meta.env.BASE_URL}${speaker.image.replace(/^\//, '')}`}
                  alt={speaker.name}
                  className="speaker-image"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0.4';
                  }}
                />
                <div className="speaker-image-overlay" aria-hidden="true" />
                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="speaker-linkedin"
                    aria-label={`LinkedIn de ${speaker.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
              <div className="speaker-info">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-company">{speaker.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
