import React from 'react';
import { ArrowRight, CalendarDays, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CATEC_REGISTRATION_FORM_URL } from '../../constants/registration';

export const Registration: React.FC = () => {
  return (
    <section id="register" className="registration-section section-padding">
      <div className="container">
        <div className="registration-container">
          <Card className="registration-card" glowOnHover={true}>
            <div className="section-header-center registration-header">
              <span className="section-tag label-mono text-purple">// INSCRIPCIÓN OFICIAL</span>
              <h2 className="registration-title headline-lg">Únete a CATEC 2026-I</h2>
              <p className="registration-subtitle body-md">
                Una sola inscripción te da acceso a todas las ponencias del evento (presenciales y virtuales),
                del 1 al 5 de junio. Completa el formulario oficial de Google para confirmar tu participación.
              </p>
            </div>

            <ul className="registration-benefits">
              <li>
                <Users size={18} aria-hidden="true" />
                <span>Inscripción única para todo el cronograma</span>
              </li>
              <li>
                <CalendarDays size={18} aria-hidden="true" />
                <span>Ponencias presenciales y virtuales incluidas</span>
              </li>
            </ul>

            <div className="registration-actions">
              <Button
                variant="primary"
                href={CATEC_REGISTRATION_FORM_URL}
                external
                icon={<ArrowRight size={18} />}
                className="w-full registration-cta-btn"
              >
                Inscribirme en Google Forms
              </Button>
              <p className="registration-note label-mono">
                Se abrirá en una nueva pestaña · Formulario oficial CATEC
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
