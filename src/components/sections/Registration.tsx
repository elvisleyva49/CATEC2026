import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendanceType: 'Presencial (Cupos Limitados)',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'El nombre completo es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Formato de correo inválido';
    } else if (!formData.email.endsWith('@upt.edu.pe') && formData.attendanceType.includes('Presencial')) {
      // Academic email preference warning or constraint
      newErrors.email = 'Se requiere correo institucional (@upt.edu.pe) para cupos presenciales';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate high-tech registration delay
      setTimeout(() => {
        setLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };

  return (
    <section id="register" className="registration-section section-padding">
      <div className="container">
        <div className="registration-container">
          <Card className="registration-card" glowOnHover={!isSubmitted}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="registration-form">
                <div className="section-header-center">
                  <h2 className="registration-title headline-lg">Regístrate Aquí</h2>
                  <p className="registration-subtitle body-md text-muted">
                    Completa el formulario para asegurar tu acceso presencial o virtual.
                  </p>
                </div>

                <div className="form-fields-wrapper">
                  {/* Name field */}
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label label-caps text-purple">
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      id="fullName"
                      name="fullName"
                      placeholder="Ej. Juan Pérez"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`form-input body-md ${errors.fullName ? 'input-error' : ''}`}
                    />
                    {errors.fullName && (
                      <span className="error-message label-mono"><ShieldAlert size={12} className="inline mr-1" /> {errors.fullName}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label label-caps text-purple">
                      Email Académico
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      placeholder="usuario@upt.edu.pe"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input body-md ${errors.email ? 'input-error' : ''}`}
                    />
                    {errors.email && (
                      <span className="error-message label-mono"><ShieldAlert size={12} className="inline mr-1" /> {errors.email}</span>
                    )}
                  </div>

                  {/* Attendance Select field */}
                  <div className="form-group">
                    <label htmlFor="attendanceType" className="form-label label-caps text-purple">
                      Tipo de Asistencia
                    </label>
                    <select
                      id="attendanceType"
                      name="attendanceType"
                      value={formData.attendanceType}
                      onChange={handleInputChange}
                      className="form-input form-select body-md"
                    >
                      <option value="Presencial (Cupos Limitados)">Presencial (Cupos Limitados)</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                  </div>

                  {/* Submit button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full submit-btn mt-4"
                    disabled={loading}
                  >
                    {loading ? 'PROCESANDO REGISTRO...' : 'ENVIAR REGISTRO'}
                  </Button>
                </div>
              </form>
            ) : (
              <div className="registration-success-screen animated-float">
                <CheckCircle2 className="success-icon text-success" size={64} />
                <h3 className="success-title headline-lg">¡Registro Exitoso!</h3>
                <p className="success-subtitle body-md text-muted">
                  Tu cupo para la conferencia ha sido confirmado en nuestro sistema.
                </p>

                <div className="ticket-details glass-container">
                  <div className="ticket-header border-bottom">
                    <span className="ticket-brand label-mono text-cyan">UPT SYSTEMS ENGINEERING 2024</span>
                    <span className="ticket-id label-mono text-cyan">ID: #{(Math.floor(100000 + Math.random() * 900000))}</span>
                  </div>
                  <div className="ticket-body">
                    <div className="ticket-row">
                      <span className="ticket-label label-caps">Asistente</span>
                      <span className="ticket-value body-md">{formData.fullName}</span>
                    </div>
                    <div className="ticket-row">
                      <span className="ticket-label label-caps">Contacto</span>
                      <span className="ticket-value body-md">{formData.email}</span>
                    </div>
                    <div className="ticket-row">
                      <span className="ticket-label label-caps">Modalidad</span>
                      <span className="ticket-value body-md text-cyan">{formData.attendanceType}</span>
                    </div>
                  </div>
                  <div className="ticket-footer">
                    <span className="label-mono text-muted">MUESTRA ESTE TICKET AL INGRESAR</span>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Registrar otra persona
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
