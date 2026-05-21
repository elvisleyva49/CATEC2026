import React from 'react';
import { Cpu, Users } from 'lucide-react';
import { Card } from '../ui/Card';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-grid">
        <div className="about-left">
          <span className="section-tag label-mono text-green">// SOBRE EL EVENTO</span>
          <h2 className="section-title headline-lg">
            Conectando la Academia con la Vanguardia Industrial
          </h2>
          <p className="section-desc body-md">
            Este evento es el epicentro de la ingeniería de sistemas en el sur del país. Buscamos trascender la teoría universitaria para sumergir a los estudiantes en desafíos reales, metodologías ágiles y las tecnologías que están moldeando el futuro global.
          </p>
          
          <div className="stats-row">
            <Card className="stat-card" glowOnHover={false}>
              <h3 className="stat-number headline-lg text-cyan">500+</h3>
              <p className="stat-label label-mono">Participantes</p>
            </Card>
            <Card className="stat-card" glowOnHover={false}>
              <h3 className="stat-number headline-lg text-cyan">15+</h3>
              <p className="stat-label label-mono">Workshops</p>
            </Card>
          </div>
        </div>

        <div className="about-right">
          <Card className="tech-feature-card">
            <div className="feature-icon-wrapper text-cyan">
              <Cpu size={24} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title headline-md">Deep Tech</h3>
              <p className="feature-desc body-md">
                Exploración profunda en IA, Ciberseguridad y Computación en la Nube.
              </p>
            </div>
          </Card>

          <Card className="tech-feature-card">
            <div className="feature-icon-wrapper text-green">
              <Users size={24} />
            </div>
            <div className="feature-content">
              <h3 className="feature-title headline-md">Networking</h3>
              <p className="feature-desc body-md">
                Conexiones directas con líderes de la industria tecnológica local e internacional.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
