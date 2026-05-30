import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Cerrar">
          <X size={24} />
        </button>
        
        <div className="modal-header">
          <h2>Política de Privacidad</h2>
          <p className="text-muted">Última actualización: Mayo 2026</p>
        </div>
        
        <div className="modal-body privacy-policy-content">
          <h3>1. Introducción</h3>
          <p>
            Bienvenido al sitio web del Congreso de Actualización Tecnológica (CATEC 2026-I), organizado por la 
            Escuela de Ingeniería de Sistemas de la Universidad Privada de Tacna. En CATEC nos comprometemos 
            a proteger su privacidad y garantizar el manejo adecuado de sus datos personales, en conformidad 
            con las leyes de protección de datos aplicables.
          </p>

          <h3>2. Información que Recopilamos</h3>
          <p>Podemos recopilar y procesar los siguientes datos personales cuando interactúa con nuestro sitio, completa el formulario de inscripción o participa en el evento:</p>
          <ul>
            <li><strong>Información de identificación y académica:</strong> Nombres y apellidos, DNI, edad, código de estudiante (para alumnos UPT), ocupación, institución a la que pertenece y ciclo académico.</li>
            <li><strong>Información de contacto:</strong> Dirección de correo electrónico y número de celular.</li>
            <li><strong>Información complementaria:</strong> Medio por el cual se enteró del seminario y su consentimiento explícito o declaración de aceptación.</li>
            <li><strong>Información técnica:</strong> Datos generados automáticamente al navegar por nuestra web, como dirección IP y estadísticas de uso.</li>
          </ul>

          <h3>3. Uso de la Información</h3>
          <p>La información recopilada se utiliza exclusivamente, conforme al consentimiento brindado en el formulario, para los siguientes fines:</p>
          <ul>
            <li>Gestionar su inscripción, acreditación, <strong>control de asistencia</strong> y participación en el evento CATEC 2026-I.</li>
            <li>Emitir constancias y/o certificados de participación (incluyendo créditos universitarios, aplicable para estudiantes UPT).</li>
            <li>Enviar comunicaciones importantes del evento, actualizaciones del cronograma y enlaces de transmisión.</li>
            <li>Realizar <strong>análisis con fines estadísticos</strong> internos estructurados por la universidad para evaluar el alcance del evento.</li>
          </ul>

          <h3>4. Compartición de Datos</h3>
          <p>
            Sus datos personales son tratados con estricta confidencialidad. <strong>No vendemos, alquilamos ni compartimos</strong> su información a terceros 
            para fines comerciales. La información únicamente será compartida bajo las siguientes circunstancias:
          </p>
          <ul>
            <li>Con las autoridades competentes, si es requerido por ley o normativa aplicable.</li>
            <li>Dentro de las instancias de la Universidad Privada de Tacna estrictamente necesarias para el procesamiento de certificados y créditos universitarios.</li>
          </ul>

          <h3>5. Seguridad de los Datos</h3>
          <p>
            Implementamos medidas de seguridad técnicas y organizativas razonables para evitar la pérdida, el mal uso, 
            la alteración o el acceso no autorizado a sus datos personales. Sin embargo, ninguna transmisión por Internet 
            es 100% segura, por lo que recomendamos tomar las precauciones necesarias al compartir información en línea.
          </p>

          <h3>6. Uso de Cookies</h3>
          <p>
            Nuestro sitio web utiliza cookies esenciales para asegurar el funcionamiento correcto de la plataforma y otras tecnológicas 
            para recolectar información analítica anónima y mejorar su navegación.
          </p>

          <h3>7. Sus Derechos (Derechos ARCO)</h3>
          <p>
            De acuerdo con la legislación vigente, usted tiene los derechos de Acceso, Rectificación, Cancelación y Oposición 
            sobre el uso de sus datos personales. Si desea ejercer alguno de estos derechos, puede ponerse en contacto con 
            nosotros a través de nuestros canales oficiales indicados en el pie de página o escribiéndonos directamente a nuestras redes sociales oficiales.
          </p>

          <h3>8. Cambios en la Política de Privacidad</h3>
          <p>
            Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará 
            en esta página, indicando la fecha de la última actualización en la parte superior del documento.
          </p>

          <h3>9. Contacto</h3>
          <p>
            Si tiene alguna duda o consulta sobre esta Política de Privacidad, por favor, comuníquese con la organización a través de nuestra 
            página oficial de Facebook de CATEC o los correos de la Escuela de Ingeniería de Sistemas de la Universidad Privada de Tacna.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};
