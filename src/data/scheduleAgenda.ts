import type { CountryCode } from '../components/ui/CountryFlag';

export type Modality = 'presencial' | 'virtual';

/** Estado de la transmisión (se calcula por horario; usa override para forzar en el día del evento). */
export type StreamStatus = 'none' | 'upcoming' | 'live' | 'ended';

export interface Talk {
  number: number;
  time: string;
  title: string;
  speaker: string;
  countryCode?: CountryCode;
  countryLabel?: string;
  modality: Modality;
  image: string;
  /** ISO 8601, hora Perú (UTC-5), ej. 2026-06-01T18:00:00-05:00 */
  startsAt: string;
  endsAt: string;
  /** Enlace YouTube / Meet / Zoom — reemplazar con el enlace real */
  streamUrl: string;
  /** Opcional: forzar estado (útil el día del evento si hace falta). */
  streamStatusOverride?: StreamStatus;
}

export interface ScheduleDay {
  weekday: string;
  date: string;
  dayModality: string;
  talks: Talk[];
}

export const scheduleDays: ScheduleDay[] = [
  {
    weekday: 'Lunes',
    date: '1 de junio',
    dayModality: 'Presencial',
    talks: [
      {
        number: 1,
        time: '6:00 pm – 7:00 pm',
        title: 'Arquitectura Estructural para Simulaciones a Escala de un Millón de Agentes',
        speaker: 'Dr. Renzo Alberto Taco Coayla',
        countryCode: 'pe',
        countryLabel: 'Perú',
        modality: 'presencial',
        image: '/speakers/ponencia1.png',
        startsAt: '2026-06-01T18:00:00-05:00',
        endsAt: '2026-06-01T19:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-1',
      },
      {
        number: 2,
        time: '7:00 pm – 8:00 pm',
        title: 'Marca Personal y LinkedIn para Estudiantes',
        speaker: 'Adm. Maycol Jesus Escobedo Pacheco',
        countryCode: 'pe',
        countryLabel: 'Perú',
        modality: 'presencial',
        image: '/speakers/ponencia2.jpg',
        startsAt: '2026-06-01T19:00:00-05:00',
        endsAt: '2026-06-01T20:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-2',
      },
    ],
  },
  {
    weekday: 'Martes',
    date: '2 de junio',
    dayModality: 'Virtual',
    talks: [
      {
        number: 3,
        time: '10:00 am – 11:00 am',
        title: 'Ética y Responsabilidad en el Desarrollo de Algoritmos de I.A.',
        speaker: 'Ing. Juan Sebastián González Sanabria',
        countryCode: 'co',
        countryLabel: 'Colombia',
        modality: 'virtual',
        image: '/speakers/ponencia3.png',
        startsAt: '2026-06-02T10:00:00-05:00',
        endsAt: '2026-06-02T11:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-3',
      },
    ],
  },
  {
    weekday: 'Miércoles',
    date: '3 de junio',
    dayModality: 'Virtual',
    talks: [
      {
        number: 4,
        time: '3:00 pm – 4:00 pm',
        title: 'SASE: Acceso Seguro, desde Cualquier Lugar',
        speaker: 'Ing. Eduardo Lozano Zapata',
        countryCode: 'pe',
        countryLabel: 'Perú',
        modality: 'virtual',
        image: '/speakers/ponencia4.jpg',
        startsAt: '2026-06-03T15:00:00-05:00',
        endsAt: '2026-06-03T16:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-4',
      },
      {
        number: 5,
        time: '6:00 pm – 7:00 pm',
        title: 'Uso de IDEs con Inteligencia Artificial Embebida para el Desarrollo de Software',
        speaker: 'Mag. Ing. Eduardo Nicolas Campazzo',
        countryCode: 'ar',
        countryLabel: 'Argentina',
        modality: 'virtual',
        image: '/speakers/ponencia5.png',
        startsAt: '2026-06-03T18:00:00-05:00',
        endsAt: '2026-06-03T19:00:00-05:00',
        streamUrl: 'https://meet.google.com/ejemplo-catec-ponencia-5',
      },
    ],
  },
  {
    weekday: 'Jueves',
    date: '4 de junio',
    dayModality: 'Virtual y presencial',
    talks: [
      {
        number: 6,
        time: '11:00 am – 12:00 pm',
        title: 'Agentes de IA en Producción: Hype, Realidad y Lecciones Difíciles',
        speaker: 'Ing. Alonso Godinez Salazar',
        countryCode: 'pe',
        countryLabel: 'Perú',
        modality: 'virtual',
        image: '/speakers/ponencia6.png',
        startsAt: '2026-06-04T11:00:00-05:00',
        endsAt: '2026-06-04T12:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-6',
      },
      {
        number: 7,
        time: '6:00 pm – 7:00 pm',
        title: 'Responsabilidad Legal en el Uso de Datos Personales por Sistemas de IA e Implicancias Legales',
        speaker: 'Dr. Alex Francisco Choquecahua Ayna',
        countryCode: 'pe',
        countryLabel: 'Perú',
        modality: 'presencial',
        image: '/speakers/ponencia7.png',
        startsAt: '2026-06-04T18:00:00-05:00',
        endsAt: '2026-06-04T19:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-7',
      },
    ],
  },
  {
    weekday: 'Viernes',
    date: '5 de junio',
    dayModality: 'Presencial',
    talks: [
      {
        number: 8,
        time: '5:00 pm – 6:00 pm',
        title: 'Transformación Digital: Alineando Estrategia y Tecnología para una Gestión Eficiente',
        speaker: 'Ing. Walter Edison Alanya Flores',
        countryCode: 'pe',
        countryLabel: 'Perú',
        modality: 'presencial',
        image: '/speakers/ponencia8.png',
        startsAt: '2026-06-05T17:00:00-05:00',
        endsAt: '2026-06-05T18:00:00-05:00',
        streamUrl: 'https://www.youtube.com/watch?v=ejemplo-catec-ponencia-8',
      },
    ],
  },
];

/** Calcula si la transmisión está por iniciar, en vivo o finalizada (hora Perú en startsAt/endsAt). */
export function resolveStreamStatus(talk: Talk, nowMs: number = Date.now()): StreamStatus {
  if (talk.streamStatusOverride) {
    return talk.streamStatusOverride;
  }
  const start = new Date(talk.startsAt).getTime();
  const end = new Date(talk.endsAt).getTime();
  if (Number.isNaN(start) || Number.isNaN(end)) {
    return 'upcoming';
  }
  if (nowMs >= start && nowMs <= end) {
    return 'live';
  }
  if (nowMs < start) {
    return 'upcoming';
  }
  return 'ended';
}

export const modalityLabel: Record<Modality, string> = {
  presencial: 'Presencial',
  virtual: 'Virtual',
};
