import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  location: string;
  tagType: 'cyan' | 'green';
}

export const Schedule: React.FC = () => {
  const [activeSlot, setActiveSlot] = useState<number>(0);

  const scheduleList: ScheduleItem[] = [
    {
      time: '08:00 AM',
      title: 'Keynote: Futuro de la IA Generativa',
      description: 'Apertura oficial y visión estratégica sobre el impacto de la IA en la ingeniería de software moderna.',
      location: 'AUDITORIO',
      tagType: 'cyan',
    },
    {
      time: '10:30 AM',
      title: 'Workshop: DevSecOps In-Depth',
      description: 'Taller práctico sobre la integración de seguridad en pipelines de CI/CD utilizando herramientas de código abierto.',
      location: 'LAB 01',
      tagType: 'green',
    },
    {
      time: '01:00 PM',
      title: 'Networking Lunch',
      description: 'Espacio de integración entre ponentes, patrocinadores y estudiantes en la terraza central.',
      location: 'TERRAZA',
      tagType: 'cyan',
    },
  ];

  return (
    <section id="schedule" className="schedule-section section-padding">
      <div className="container">
        <div className="section-header-center">
          <span className="section-tag label-mono text-green">// CRONOGRAMA TÉCNICO</span>
          <h2 className="section-title headline-lg">Calendario del Evento</h2>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {scheduleList.map((item, index) => {
            const isActive = activeSlot === index;
            return (
              <div 
                key={index} 
                className={`timeline-item ${isActive ? 'active' : ''}`}
                onClick={() => setActiveSlot(index)}
              >
                {/* Time Indicator column */}
                <div className="timeline-time label-caps text-muted">
                  {item.time}
                </div>

                {/* Circuit node indicator */}
                <div className="timeline-node-wrapper">
                  <div className={`timeline-node ${isActive ? 'node-glowing' : ''}`}></div>
                </div>

                {/* Event Description Card */}
                <Card className="timeline-card">
                  <h3 className="event-title headline-md">{item.title}</h3>
                  <p className="event-desc body-md">{item.description}</p>
                  <div className="event-meta">
                    <Chip variant={item.tagType}>{item.location}</Chip>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
