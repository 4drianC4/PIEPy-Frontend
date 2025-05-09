
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import ContentSection from '@/components/ContentSection';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const CrearSeccion = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [courseText, setCourseText] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [unitTest, setUnitTest] = useState('');

  const handleAddExam = () => {
    navigate('/crear-examen');
  };

  const handleAddExercise = () => {
    navigate('/crear-ejercicio');
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-3 md:p-6 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto">
            <ContentSection title="Texto">
              <Textarea 
                placeholder="Ingrese contenido del curso aquí..." 
                className="w-full h-24 md:h-32 bg-gray-100 p-2 md:p-3 text-gray-800"
                value={courseText}
                onChange={(e) => setCourseText(e.target.value)}
              />
            </ContentSection>

            <ContentSection title="Contenido de video">
              <Input 
                placeholder="Ingrese link del video de youtube del curso aquí..." 
                className="w-full bg-gray-100 text-gray-800"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
              />
            </ContentSection>

            <ContentSection title="Examen">
              <Button 
                onClick={handleAddExam}
                className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              >
                Añadir Examen
              </Button>
            </ContentSection>

            <ContentSection title="Agregar Ejercicio">
              <div className="space-y-2 md:space-y-4">
                <Button 
                  onClick={handleAddExercise}
                  className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                >
                  Agregar ejercicio
                </Button>
                <p className="text-gray-700 text-sm md:text-base">Ingrese un test unitario para el ejercicio</p>
                <Textarea 
                  placeholder="Ingrese código del test unitario aquí..." 
                  className="w-full h-24 md:h-32 bg-gray-100 p-2 md:p-3 text-gray-800"
                  value={unitTest}
                  onChange={(e) => setUnitTest(e.target.value)}
                />
              </div>
            </ContentSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearSeccion;
