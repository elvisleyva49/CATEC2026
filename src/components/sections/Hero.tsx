import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';
import hologramImg from '../../assets/glowing_cybernetic_core.png';

export const Hero: React.FC = () => {
  const line1 = 'CATEC 2026 - I:';
  const line2 = 'Forjando líderes';
  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [phase, setPhase] = useState<'line1' | 'pause' | 'line2' | 'done'>('line1');

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
          <div className="hero-badge-wrapper">
            <Chip variant="cyan" className="hero-chip">
              TACNA · 2026 · SYSTEMS ENGINEERING
            </Chip>
          </div>

          <h1 className="hero-title headline-xl">
            {displayedLine1}
            {phase === 'line1' && <span className="typewriter-cursor">|</span>}
            {displayedLine1.length > 0 && <br />}
            <span className="text-gradient-cyan-green">
              {displayedLine2}
              {(phase === 'line2' || phase === 'pause') && <span className="typewriter-cursor">|</span>}
            </span>
          </h1>

          <p className="hero-description body-lg">
            Capacitación Tecnológica dirigida a estudiantes universitarios e interesados
          </p>

          <div className="hero-actions">
            <Button
              variant="primary"
              icon={<ArrowRight size={18} />}
              onClick={() => handleScrollTo('register')}
            >
              Asegura tu Cupo
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
          <div className="hologram-backdrop-wrapper">
            <img src={hologramImg} alt="UPT Systems Cyber Core" className="hero-hologram-img" />
          </div>
          <div className="code-editor-window glass-container">
            <div className="editor-header">
              <div className="editor-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="editor-title label-caps"><Terminal size={12} className="inline mr-1" /> systems.cpp</span>
            </div>
            <div className="editor-body">
              <pre className="code-block label-mono">
                <code>
                  <span className="code-keyword">void</span> <span className="code-function">systems</span>() &#123;
                  core.<span className="code-method">connect</span>(NODE_PRIMARY);
                  uplink.status = SYNC_COMPLETE;

                  <span className="code-keyword">while</span>(event.active) &#123;
                  <span className="code-function">processStream</span>();
                  <span className="code-function">innovate</span>(Tacna_00110);
                  &#125;
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
