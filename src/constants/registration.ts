/** Formulario oficial de inscripción CATEC 2026-I (Google Forms) */
export const CATEC_REGISTRATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSduGx1jeJ6kbg_Rl4-IX4nY3f5H5lq7zYWO57wua7Io3_TiYw/viewform';

export const openRegistrationForm = () => {
  window.open(CATEC_REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
};
