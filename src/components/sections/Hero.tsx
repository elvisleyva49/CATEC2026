import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';
import { Chip } from '../ui/Chip';

export const Hero: React.FC = () => {
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
            Sistemas UPT:<br />
            <span className="text-gradient-cyan-green">Innovación en Tacna</span>
          </h1>
          
          <p className="hero-description body-lg">
            Conferencia de Ingeniería de Sistemas 2024. Redefiniendo los límites de la ingeniería y la tecnología aplicada.
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
