import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import { CountryFlag } from '../ui/CountryFlag';
import uptFondo from '../../assets/uptfondo.png';

export const Hero: React.FC = () => {
  const EVENT_START_PERU_MS = new Date('2026-06-01T18:00:00-05:00').getTime();
  const line1 = 'Capacitación';
  const line2 = 'tecnológica';
  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [phase, setPhase] = useState<'line1' | 'pause' | 'line2' | 'done'>('line1');
  const [countdown, setCountdown] = useState(() => {
    const diff = Math.max(0, EVENT_START_PERU_MS - Date.now());
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds, started: diff === 0 };
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'line1') {
      if (displayedLine1.length < line1.length) {
        timeout = setTimeout(() => {
          setDisplayedLine1(line1.slice(0, displayedLine1.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setPhase('pause'), 300);
      }
    } else if (phase === 'pause') {
      timeout = setTimeout(() => setPhase('line2'), 400);
    } else if (phase === 'line2') {
      if (displayedLine2.length < line2.length) {
        timeout = setTimeout(() => {
          setDisplayedLine2(line2.slice(0, displayedLine2.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setPhase('done'), 600);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedLine1, displayedLine2, phase]);

  useEffect(() => {
    const updateCountdown = () => {
      const diff = Math.max(0, EVENT_START_PERU_MS - Date.now());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds, started: diff === 0 });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [EVENT_START_PERU_MS]);

  const handleScrollTo = (id: string) => {
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
    <section id="home" className="hero-section section-padding">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-pills">
            <Chip variant="cyan" className="hero-chip">TACNA · PERÚ</Chip>
            <Chip variant="dates">Del 01 al 05 de junio</Chip>
            <Chip variant="edition">2026</Chip>
          </div>

          <h1 className="hero-title hero-title-flyer text-gradient-flyer">
            {displayedLine1}
            {phase === 'line1' && <span className="typewriter-cursor">|</span>}
            {displayedLine1.length > 0 && <br />}
            <span>
              {displayedLine2}
              {(phase === 'line2' || phase === 'pause') && <span className="typewriter-cursor">|</span>}
            </span>
          </h1>

          <p className="hero-description body-lg">
            Dirigido a estudiantes universitarios, profesionales y público interesado en innovación y tecnología aplicada. Una semana de conferencias, talleres y experiencias orientadas al aprendizaje y la transformación digital.
          </p>

          <div className="hero-countdown" role="status" aria-live="polite">
            {!countdown.started ? (
              <>
                <p className="hero-countdown-title label-mono">
                  <span className="hero-countdown-title-part hero-countdown-title-part--start">
                    Inicio: lunes 01 junio ·
                  </span>
                  <span className="hero-countdown-title-part hero-countdown-title-part--time">
                    18:00 (hora Perú)
                  </span>
                </p>
                <div className="hero-countdown-inline">
                  <span className="hero-countdown-segment">
                    <strong>{String(countdown.days).padStart(2, '0')}</strong> días
                  </span>
                  <span className="hero-countdown-divider" aria-hidden="true">:</span>
                  <span className="hero-countdown-segment">
                    <strong>{String(countdown.hours).padStart(2, '0')}</strong> horas
                  </span>
                  <span className="hero-countdown-divider" aria-hidden="true">:</span>
                  <span className="hero-countdown-segment">
                    <strong>{String(countdown.minutes).padStart(2, '0')}</strong> minutos
                  </span>
                  <span className="hero-countdown-divider" aria-hidden="true">:</span>
                  <span className="hero-countdown-segment">
                    <strong>{String(countdown.seconds).padStart(2, '0')}</strong> segundos
                  </span>
                </div>
                <div className="hero-audience-flags">
                  <div className="hero-flag-badges">
                    <span className="hero-flag-pill">
                      <CountryFlag code="pe" label="Perú" size={20} />
                      Perú
                    </span>
                    <span className="hero-flag-pill">
                      <CountryFlag code="co" label="Colombia" size={20} />
                      Colombia
                    </span>
                    <span className="hero-flag-pill">
                      <CountryFlag code="ar" label="Argentina" size={20} />
                      Argentina
                    </span>
                    <span className="hero-flag-pill">
                      <CountryFlag code="cl" label="Chile" size={20} />
                      Chile
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <p className="hero-countdown-live headline-md">CATEC 2026 ya comenzo.</p>
            )}
          </div>

          <div className="hero-actions">
            <Button
              variant="primary"
              icon={<ArrowRight size={18} />}
              href="https://docs.google.com/forms/d/e/1FAIpQLSduGx1jeJ6kbg_Rl4-IX4nY3f5H5lq7zYWO57wua7Io3_TiYw/viewform"
            >
              Inscribete
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleScrollTo('schedule')}
            >
              Ver Agenda
            </Button>
          </div>
        </div>

        <div className="hero-visual animated-float">
          <div className="hero-image-wrapper">
            <img
              src={uptFondo}
              alt="Estudiante programando en CATEC"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
