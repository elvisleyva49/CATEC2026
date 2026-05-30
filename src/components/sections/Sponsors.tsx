import React from 'react';
import { Handshake } from 'lucide-react';

import p1 from '../../assets/patrocinadores1.png';
import p2 from '../../assets/patrocinadores2.png';
import p3 from '../../assets/patrocinadores3.png';
import p4 from '../../assets/patrocinadores4.png';
import p5 from '../../assets/patrocinadores5.png';
import p6 from '../../assets/patrocinadores6.png';
import p7 from '../../assets/patrocinadores7.png';
import p8 from '../../assets/patrocinadores8.png';
import p9 from '../../assets/patrocinadores9.png';
import p10 from '../../assets/patrocinadores10.png';
import p11 from '../../assets/patrocinadores11.png';
import p12 from '../../assets/patrocinadores12.png';
import p13 from '../../assets/patrocinadores13.png';
import p14 from '../../assets/patrocinadores14.png';

interface Partner {
  image: string;
  name: string;
}

const partners: Partner[] = [
  { image: p1, name: 'Leyva Cars' },
  { image: p2, name: 'Yogurt Artesanal Lola' },
  { image: p3, name: 'La Trilogía del Sabor' },
  { image: p4, name: 'NutriFit' },
  { image: p5, name: 'Magik Barber' },
  { image: p6, name: 'Natu Cakes' },
  { image: p7, name: 'Papa Express' },
  { image: p8, name: 'Librera - T' },
  { image: p9, name: 'La Pronta pizza' },
  { image: p10, name: 'Radio Taxi Paul' },
  { image: p11, name: 'Surgas' },
  { image: p12, name: 'Valladares & Choquecahua' },
  { image: p13, name: 'Terracor Inmobiliaria' },
  { image: p14, name: 'Fachi Home' },
];



interface PartnerLogoProps {
  partner: Partner;
  className?: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ partner, className = '' }) => (
  <figure className={`support-logo ${className}`.trim()}>
    <img
      src={partner.image}
      alt={partner.name}
      className="support-logo-img"
      loading="lazy"
      decoding="async"
    />
    <figcaption className="support-logo-name">{partner.name}</figcaption>
  </figure>
);



export const Sponsors: React.FC = () => {
  const COLS = 5;
  const remainder = partners.length % COLS;
  const fullRowPartners = remainder === 0 ? partners : partners.slice(0, partners.length - remainder);
  const lastRowPartners = remainder === 0 ? [] : partners.slice(-remainder);

  return (
    <section id="sponsors" className="support-section section-padding border-top" aria-labelledby="support-title">
      <div className="support-ambient" aria-hidden="true" />
      <div className="support-hub-glow" aria-hidden="true" />

      <div className="container">
        <header className="section-header-center support-header">
          <span className="section-tag label-mono text-purple">// APOYO INSTITUCIONAL</span>
          <h2 id="support-title" className="section-title headline-lg">
            Apoyo institucional
          </h2>
          <p className="support-intro body-md">
            Gracias a quienes confían en el talento de la UPT y hacen posible esta capacitación.
          </p>
        </header>

        <div className="support-body">
          <aside className="support-story">
            <div className="support-story-head">
              <div className="support-story-icon" aria-hidden="true">
                <Handshake size={28} strokeWidth={1.75} />
              </div>
              <div className="support-story-heading">
                <p className="support-story-lead">Patrocinadores que</p>
                <h3 className="support-story-title">
                  Impulsan el <span className="text-gradient-cyan-purple">CATEC 2026-I</span>
                </h3>
              </div>
            </div>
            <p className="support-story-text body-md">
              Cada organización aporta recursos, visibilidad y oportunidades reales para que nuestros estudiantes
              crezcan en tecnología, innovación y emprendimiento.
            </p>
            <ul className="support-story-list">
              <li>Respaldan el evento académico</li>
              <li>Conectan con la comunidad UPT</li>
              <li>Apuestan por el talento tacneño</li>
            </ul>
            <div className="support-stat" aria-label={`${partners.length} patrocinadores`}>
              <span className="support-stat-value">{String(partners.length).padStart(2, '0')}</span>
              <span className="support-stat-label label-mono">patrocinadores</span>
            </div>
          </aside>

          <div className="support-garden" role="list" aria-label="Organizaciones que apoyan el CATEC">
            {/* Filas completas en el grid */}
            {fullRowPartners.map((partner, index) => (
              <div
                key={partner.name}
                role="listitem"
                className="support-garden-cell"
                style={{ '--garden-i': index } as React.CSSProperties}
              >
                <PartnerLogo partner={partner} />
              </div>
            ))}

            {/* Última fila incompleta — centrada mediante flex */}
            {lastRowPartners.length > 0 && (
              <div className="support-garden-last-row">
                {lastRowPartners.map((partner, index) => (
                  <div
                    key={partner.name}
                    role="listitem"
                    className="support-garden-cell"
                    style={{ '--garden-i': fullRowPartners.length + index } as React.CSSProperties}
                  >
                    <PartnerLogo partner={partner} />
                  </div>
                ))}
              </div>
            )}

            <span className="support-garden-hub label-mono" aria-hidden="true">
              CATEC
            </span>
          </div>
        </div>


      </div>
    </section>
  );
};
