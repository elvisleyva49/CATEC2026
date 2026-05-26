import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../ui/Card';

import img1 from '../../assets/img1.webp';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.webp';
import img4 from '../../assets/img4.webp';
import img5 from '../../assets/img5.webp';
import img6 from '../../assets/img6.webp';
import img7 from '../../assets/img7.webp';
import img8 from '../../assets/img8.webp';
import img9 from '../../assets/img9.webp';
import img10 from '../../assets/img10.webp';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    // Al depender de currentImageIndex, el timer se reinicia cada vez que cambia la imagen
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section id="about" className="about-section section-padding">
      <div className="container about-grid">
        <div className="about-left">
          <span className="section-tag label-mono text-purple">// SOBRE EL EVENTO</span>
          <h2 className="section-title headline-lg">
            Un evento hecho por estudiantes, para estudiantes
          </h2>
          <p className="section-desc body-md">
            Las conferencias de CATEC son realizadas cada año con el fin de aumentar el conocimiento a estudiantes de la Universidad Privada de Tacna, por el medio tecnológico los estudiantes de último año son convocados para realizar el evento donde se presentan expositores de todo el mundo para hablar de temas en tendencia sobre tecnología.
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
          <div className="carousel-card" style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
            {images.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`CATEC event gallery ${idx + 1}`} 
                style={{ 
                  position: 'absolute',
                  maxWidth: '100%', 
                  maxHeight: '100%', 
                  objectFit: 'contain', 
                  borderRadius: '12px',
                  opacity: currentImageIndex === idx ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  zIndex: currentImageIndex === idx ? 1 : 0
                }}
              />
            ))}
            
            <button 
              onClick={prevImage}
              style={{
                position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', border: 'none',
                padding: '10px', borderRadius: '50%', cursor: 'pointer', zIndex: 10
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextImage}
              style={{
                position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', border: 'none',
                padding: '10px', borderRadius: '50%', cursor: 'pointer', zIndex: 10
              }}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
            
            <div style={{ position: 'absolute', bottom: '15px', left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {images.map((_, idx) => (
                <div 
                  key={idx} 
                  style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    backgroundColor: idx === currentImageIndex ? '#00e5ff' : 'rgba(255, 255, 255, 0.4)',
                    transition: 'background-color 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
