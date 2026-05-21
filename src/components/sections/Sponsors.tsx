import React from 'react';
import { BookOpen, Code, Cloud, Shield } from 'lucide-react';

interface Sponsor {
  name: string;
  icon: React.ReactNode;
}

export const Sponsors: React.FC = () => {
  const sponsorsList: Sponsor[] = [
    {
      name: 'UPT',
      icon: <BookOpen size={24} />,
    },
    {
      name: 'CODERO',
      icon: <Code size={24} />,
    },
    {
      name: 'SKYNET',
      icon: <Cloud size={24} />,
    },
    {
      name: 'SHIELD',
      icon: <Shield size={24} />,
    },
  ];

  return (
    <section className="sponsors-section section-padding border-top">
      <div className="container">
        <h4 className="sponsors-title label-caps text-center text-muted">
          Nuestros Patrocinadores
        </h4>
        <div className="sponsors-grid">
          {sponsorsList.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <span className="sponsor-icon text-muted">{sponsor.icon}</span>
              <span className="sponsor-name label-mono text-muted">{sponsor.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
