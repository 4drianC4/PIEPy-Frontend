import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';
import { toast } from 'react-hot-toast';
import { Evaluacion } from '@/types/evaluaciones';
import { Certificacion } from '@/types/certificaciones';
import { Curso } from '@/types/curso';
import { createCertificacion } from '@/api/certificaciones';
import { createEvaluacion } from '@/api/evaluaciones';
import { createCurso } from '@/api/cursos';

interface CursoForm {
  nombre: string;
  descripcion: string;
  certificacion: Certificacion;
  evaluacion: Evaluacion;
}

const CrearCurso: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [formData, setFormData] = useState<CursoForm>({
    nombre: '',
    descripcion: '',
    certificacion: {
      nombre: '',
      descripcion: ''
    },
    evaluacion: {
      contenido: '',
      titulo: ''
    }
  });

  // Estado para controlar qué sección mostrar
  const [currentStep, setCurrentStep] = useState<'certificacion' | 'evaluacion' | 'curso'>('certificacion');

  // Estados de error
  const [errors, setErrors] = useState({
    certificacionNombre: false,
    certificacionDescripcion: false,
    evaluacionTitulo: false,
    evaluacionContenido: false,
    cursoNombre: false,
    cursoDescripcion: false
  });

  // IDs generados (simulados)
  const [generatedIds, setGeneratedIds] = useState({
    idCertificacion: 0,
    idEvaluacion: 0
  });

  // Validar sección actual
  const validateCurrentStep = (): boolean => {
    if (currentStep === 'certificacion') {
      const newErrors = {
        certificacionNombre: !formData.certificacion.nombre.trim(),
        certificacionDescripcion: !formData.certificacion.descripcion.trim()
      };
      setErrors(prev => ({ ...prev, ...newErrors }));
      return !Object.values(newErrors).some(error => error);
    }

    if (currentStep === 'evaluacion') {
      const newErrors = {
        evaluacionTitulo: !formData.evaluacion.titulo.trim(),
        evaluacionContenido: !formData.evaluacion.contenido.trim()
      };
      setErrors(prev => ({ ...prev, ...newErrors }));
      return !Object.values(newErrors).some(error => error);
    }

    if (currentStep === 'curso') {
      const newErrors = {
        cursoNombre: !formData.nombre.trim(),
        cursoDescripcion: !formData.descripcion.trim()
      };
      setErrors(prev => ({ ...prev, ...newErrors }));
      return !Object.values(newErrors).some(error => error);
    }

    return false;
  };

  // Manejar cambio de paso
  const handleNextStep = () => {
    if (!validateCurrentStep()) {
      toast.error('Por favor complete todos los campos obligatorios');
      return;
    }

    if (currentStep === 'certificacion') {
      // Simular creación de certificación y obtener ID
      
      setCurrentStep('evaluacion');
      toast.success('Certificación guardada');
    } else if (currentStep === 'evaluacion') {
      // Simular creación de evaluación y obtener ID
      setCurrentStep('curso');
      toast.success('Evaluación guardada');
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitCurso = async () => {
    if (!validateCurrentStep()) {
      toast.error('Por favor complete todos los campos obligatorios');
      return;
    }

    setIsSubmitting(true);
    let certificacion, evaluacion;
    try {
      // 1. Crear certificación
      certificacion = await createCertificacion({
        nombre: formData.certificacion.nombre,
        descripcion: formData.certificacion.descripcion
      });
    } catch (error) {
      console.error('Error al crear certificacion:', error);
      toast.error('Error al crear el curso. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
    try{
      // 2. Crear evaluación
      evaluacion = await createEvaluacion({
        titulo: formData.evaluacion.titulo,
        contenido: formData.evaluacion.contenido
      });
    } catch (error) {
      console.error('Error al crear evaluacion:', error);
      toast.error('Error al crear el curso. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
    try{
      // 3. Crear curso con los IDs generados
      const nuevoCurso = await createCurso({
        nombre: formData.nombre,
        descripcion: formData.descripcion,
        idCertificacion: certificacion.id,
        idEvaluacion: evaluacion.id
      });

      toast.success('Curso creado exitosamente');
      navigate('/recursos');
      
    } catch (error) {
      console.error('Error al crear curso:', error);
      toast.error('Error al crear el curso. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Manejar cambios en los campos
  const handleChange = (field: keyof CursoForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setErrors(prev => ({ ...prev, [`curso${field.charAt(0).toUpperCase() + field.slice(1)}`]: false }));
  };

  const handleCertificacionChange = (field: keyof Certificacion, value: string) => {
    setFormData(prev => ({
      ...prev,
      certificacion: {
        ...prev.certificacion,
        [field]: value
      }
    }));
    setErrors(prev => ({ ...prev, [`certificacion${field.charAt(0).toUpperCase() + field.slice(1)}`]: false }));
  };

  const handleEvaluacionChange = (field: keyof Evaluacion, value: string) => {
    setFormData(prev => ({
      ...prev,
      evaluacion: {
        ...prev.evaluacion,
        [field]: value
      }
    }));
    setErrors(prev => ({ ...prev, [`evaluacion${field.charAt(0).toUpperCase() + field.slice(1)}`]: false }));
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-3 md:p-6 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Crear Nuevo Curso</h1>
            
            {/* Indicador de pasos */}
            <div className="flex mb-6">
              <div 
                className={`flex-1 py-2 text-center border-b-2 ${currentStep === 'certificacion' ? 'border-blue-500 font-medium' : 'border-gray-300'}`}
              >
                Certificación
              </div>
              <div 
                className={`flex-1 py-2 text-center border-b-2 ${currentStep === 'evaluacion' ? 'border-blue-500 font-medium' : 'border-gray-300'}`}
              >
                Evaluación
              </div>
              <div 
                className={`flex-1 py-2 text-center border-b-2 ${currentStep === 'curso' ? 'border-blue-500 font-medium' : 'border-gray-300'}`}
              >
                Curso
              </div>
            </div>

            {/* Formulario de Certificación */}
            {currentStep === 'certificacion' && (
              <ContentSection title="Crear Certificación">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de la Certificación <span className="text-red-500">*</span>
                      {errors.certificacionNombre && <span className="ml-2 text-red-500 text-sm">Este campo es requerido</span>}
                    </label>
                    <Input 
                      placeholder="Ingrese el nombre de la certificación" 
                      className={`w-full bg-gray-100 text-gray-800 ${errors.certificacionNombre ? 'border-red-500' : ''}`}
                      value={formData.certificacion.nombre}
                      onChange={(e) => handleCertificacionChange('nombre', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción <span className="text-red-500">*</span>
                      {errors.certificacionDescripcion && <span className="ml-2 text-red-500 text-sm">Este campo es requerido</span>}
                    </label>
                    <Textarea 
                      placeholder="Ingrese la descripción de la certificación" 
                      className={`w-full h-24 md:h-32 bg-gray-100 p-2 md:p-3 text-gray-800 ${errors.certificacionDescripcion ? 'border-red-500' : ''}`}
                      value={formData.certificacion.descripcion}
                      onChange={(e) => handleCertificacionChange('descripcion', e.target.value)}
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button 
                      onClick={handleNextStep}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Siguiente (Crear Evaluación)
                    </Button>
                  </div>
                </div>
              </ContentSection>
            )}

            {/* Formulario de Evaluación */}
            {currentStep === 'evaluacion' && (
              <ContentSection title="Crear Evaluación">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Título <span className="text-red-500">*</span>
                      {errors.evaluacionTitulo && <span className="ml-2 text-red-500 text-sm">Este campo es requerido</span>}
                    </label>
                    <Input 
                      placeholder="Ingrese el título de la evaluación" 
                      className={`w-full bg-gray-100 text-gray-800 ${errors.evaluacionTitulo ? 'border-red-500' : ''}`}
                      value={formData.evaluacion.titulo}
                      onChange={(e) => handleEvaluacionChange('titulo', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contenido <span className="text-red-500">*</span>
                      {errors.evaluacionContenido && <span className="ml-2 text-red-500 text-sm">Este campo es requerido</span>}
                    </label>
                    <Textarea 
                      placeholder="Ingrese el contenido de la evaluación" 
                      className={`w-full h-24 md:h-32 bg-gray-100 p-2 md:p-3 text-gray-800 ${errors.evaluacionContenido ? 'border-red-500' : ''}`}
                      value={formData.evaluacion.contenido}
                      onChange={(e) => handleEvaluacionChange('contenido', e.target.value)}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button 
                      onClick={() => setCurrentStep('certificacion')}
                      className="bg-gray-300 text-gray-700 hover:bg-gray-400"
                    >
                      Anterior
                    </Button>
                    <Button 
                      onClick={handleNextStep}
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Siguiente (Crear Curso)
                    </Button>
                  </div>
                </div>
              </ContentSection>
            )}

            {/* Formulario de Curso */}
            {currentStep === 'curso' && (
              <ContentSection title="Crear Curso">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre del Curso <span className="text-red-500">*</span>
                      {errors.cursoNombre && <span className="ml-2 text-red-500 text-sm">Este campo es requerido</span>}
                    </label>
                    <Input 
                      placeholder="Ingrese el nombre del curso" 
                      className={`w-full bg-gray-100 text-gray-800 ${errors.cursoNombre ? 'border-red-500' : ''}`}
                      value={formData.nombre}
                      onChange={(e) => handleChange('nombre', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Descripción <span className="text-red-500">*</span>
                      {errors.cursoDescripcion && <span className="ml-2 text-red-500 text-sm">Este campo es requerido</span>}
                    </label>
                    <Textarea 
                      placeholder="Ingrese la descripción del curso" 
                      className={`w-full h-24 md:h-32 bg-gray-100 p-2 md:p-3 text-gray-800 ${errors.cursoDescripcion ? 'border-red-500' : ''}`}
                      value={formData.descripcion}
                      onChange={(e) => handleChange('descripcion', e.target.value)}
                    />
                  </div>

                  <div className="bg-gray-100 p-4 rounded-md">
                    <h3 className="font-medium mb-2">Certificación asociada:</h3>
                    <p><strong>Nombre:</strong> {formData.certificacion.nombre}</p>
                    <p><strong>Descripción:</strong> {formData.certificacion.descripcion}</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-md mt-4">
                    <h3 className="font-medium mb-2">Evaluación asociada:</h3>
                    <p><strong>Título:</strong> {formData.evaluacion.titulo}</p>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button 
                      onClick={() => setCurrentStep('evaluacion')}
                      className="bg-gray-300 text-gray-700 hover:bg-gray-400"
                    >
                      Anterior
                    </Button>
                    <Button 
                      onClick={handleSubmitCurso}
                      className="bg-green-600 text-white hover:bg-green-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Creando...' : 'Crear Curso'}
                    </Button>
                  </div>
                </div>
              </ContentSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearCurso;