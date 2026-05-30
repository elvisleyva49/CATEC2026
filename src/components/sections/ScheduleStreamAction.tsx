import React from 'react';
import { Radio } from 'lucide-react';
import type { Talk } from '../../data/scheduleAgenda';
import { resolveStreamStatus } from '../../data/scheduleAgenda';

interface ScheduleStreamActionProps {
  talk: Talk;
  nowMs: number;
}

export const ScheduleStreamAction: React.FC<ScheduleStreamActionProps> = ({ talk, nowMs }) => {
  const status = resolveStreamStatus(talk, nowMs);

  if (status === 'live') {
    return (
      <div className="schedule-stream">
        <a
          href={talk.streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="schedule-stream-btn schedule-stream-btn--live"
        >
          <Radio size={16} aria-hidden="true" />
          Ver transmisión en vivo
        </a>
      </div>
    );
  }

  if (status === 'upcoming') {
    return (
      <div className="schedule-stream">
        <button type="button" className="schedule-stream-btn" disabled>
          Ver transmisión
        </button>
      </div>
    );
  }

  return (
    <div className="schedule-stream">
      <button type="button" className="schedule-stream-btn" disabled>
        Transmisión finalizada
      </button>
    </div>
  );
};
