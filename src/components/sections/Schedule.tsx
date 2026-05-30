import React, { useEffect, useState } from 'react';
import { Chip } from '../ui/Chip';
import { Button } from '../ui/Button';
import { CountryFlag } from '../ui/CountryFlag';
import { CATEC_REGISTRATION_FORM_URL } from '../../constants/registration';
import { modalityLabel, resolveStreamStatus, scheduleDays } from '../../data/scheduleAgenda';
import { ScheduleStreamAction } from './ScheduleStreamAction';

export const Schedule: React.FC = () => {
  const assetBase = import.meta.env.BASE_URL;
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNowMs(Date.now()), 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="schedule" className="schedule-section section-padding">
      <div className="container">
        <div className="section-header-center schedule-header">
          <span className="section-tag label-mono text-purple">// AGENDA CATEC 2026-I</span>
          <h2 className="section-title headline-lg">Cronograma</h2>
          <p className="schedule-intro body-md">
            Del 1 al 5 de junio. Ponencias presenciales y virtuales con especialistas nacionales e internacionales.
          </p>
          <Button
            variant="primary"
            href={CATEC_REGISTRATION_FORM_URL}
            external
            className="schedule-register-btn"
          >
            Inscríbete aquí
          </Button>
        </div>

        <div className="schedule-agenda">
          {scheduleDays.map((day) => (
            <section key={day.date} className="schedule-day" aria-labelledby={`schedule-day-${day.date.replace(/\s/g, '-')}`}>
              <header className="schedule-day-header" id={`schedule-day-${day.date.replace(/\s/g, '-')}`}>
                <div className="schedule-day-heading">
                  <span className="schedule-day-weekday label-mono text-cyan">{day.weekday}</span>
                  <h3 className="schedule-day-date">{day.date}</h3>
                </div>
                <Chip variant="edition">{day.dayModality}</Chip>
              </header>

              <ul className="schedule-talks">
                {day.talks.map((talk) => {
                  const streamStatus = resolveStreamStatus(talk, nowMs);
                  const isLive = streamStatus === 'live';

                  return (
                    <li key={talk.number}>
                      <article className={`schedule-talk${isLive ? ' schedule-talk--live' : ''}`}>
                        <div className="schedule-talk-thumb">
                          <img
                            src={`${assetBase}${talk.image.replace(/^\//, '')}`}
                            alt={`Ponencia ${talk.number}: ${talk.title}`}
                            className="schedule-talk-image"
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                          <div className="schedule-talk-thumb-fallback" aria-hidden="true">
                            <span className="label-mono">Ponencia {talk.number}</span>
                          </div>
                        </div>

                        <div className="schedule-talk-content">
                          <div className="schedule-talk-meta">
                            <span className="schedule-talk-badge label-mono">Ponencia {talk.number}</span>
                            <time className="schedule-talk-time">{talk.time}</time>
                            <Chip variant={talk.modality === 'presencial' ? 'cyan' : 'purple'}>
                              {modalityLabel[talk.modality]}
                            </Chip>
                            {isLive && (
                              <span className="schedule-live-badge label-mono">En vivo</span>
                            )}
                          </div>
                          <h4 className="schedule-talk-title">{talk.title}</h4>
                          <p className="schedule-talk-speaker">
                            <span className="schedule-talk-speaker-label">Ponente:</span>
                            <span className="schedule-talk-speaker-line">
                              <span className="schedule-talk-speaker-name">{talk.speaker}</span>
                              {talk.countryCode && talk.countryLabel && (
                                <CountryFlag
                                  code={talk.countryCode}
                                  label={talk.countryLabel}
                                  size={18}
                                  className="schedule-talk-speaker-flag"
                                />
                              )}
                            </span>
                          </p>
                          <ScheduleStreamAction talk={talk} nowMs={nowMs} />
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
