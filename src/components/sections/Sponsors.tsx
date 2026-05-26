import React from 'react';

import p1 from '../../assets/patrocinadores1.png';
import p2 from '../../assets/patrocinadores2.png';
import p3 from '../../assets/patrocinadores3.png';
import p4 from '../../assets/patrocinadores4.png';
import p5 from '../../assets/patrocinadores5.png';
import p6 from '../../assets/patrocinadores6.png';
import p7 from '../../assets/patrocinadores7.png';
import p8 from '../../assets/patrocinadores8.png';
import p9 from '../../assets/patrocinadores9.png';

export const Sponsors: React.FC = () => {
  const sponsors = [
    { image: p1, name: 'Leyva Cars' },
    { image: p2, name: 'Yogurt Artesanal Lola' },
    { image: p3, name: 'La Trilogía del Sabor' },
    { image: p4, name: 'NutriFit' },
    { image: p5, name: 'Magik Barber' },
    { image: p6, name: 'Natu Cakes' },
    { image: p7, name: 'Papa Express' },
    { image: p8, name: 'Librera - T' },
    { image: p9, name: 'La Pronta pizza' }
  ];
  const infiniteSponsors = [...sponsors, ...sponsors];

  return (
    <section id="sponsors" className="sponsors-section section-padding border-top" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="section-tag label-mono text-purple" style={{ marginBottom: '10px', display: 'inline-block' }}>
          // APOYO INSTITUCIONAL
        </span>
        <h2 className="section-title headline-lg" style={{ marginBottom: '15px' }}>
          Auspician
        </h2>
        <p className="section-desc body-md" style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-on-surface-variant)' }}>
          El CATEC 2026-I es posible gracias al valioso aporte de estas instituciones y empresas que apuestan por el desarrollo tecnológico y la educación de nuestros estudiantes.
        </p>
      </div>

      <div className="container">
        <div className="sponsors-band">
          <div className="sponsors-band__head">Patrocinadores oficiales</div>
          <div className="sponsors-band__body">
            <div className="sponsors-marquee-wrapper">
              <div className="sponsors-marquee">
                {infiniteSponsors.map((sponsor, index) => (
                  <div key={index} className="sponsor-logo-card">
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="sponsor-logo-img"
                    />
                    <h3 className="sponsor-name">{sponsor.name}</h3>
                    <div className="sponsor-socials">
                      <a href="https://wa.me/numerodeejemplo" target="_blank" rel="noopener noreferrer" className="sponsor-social-icon" aria-label="WhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.638-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="sponsor-social-icon" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="sponsor-social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
