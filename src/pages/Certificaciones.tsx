import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';

const Certificaciones = () => {
  const navigate = useNavigate();

  const certifications = [
    {
      id: 1,
      title: 'Python Básico',
      description: 'Domina los fundamentos de Python y programación estructurada.',
      progress: 85,
      status: 'En progreso'
    },
    {
      id: 2,
      title: 'Python Intermedio',
      description: 'Estructuras de datos avanzadas y programación funcional.',
      progress: 30,
      status: 'No iniciado'
    },
    {
      id: 3,
      title: 'Python Avanzado',
      description: 'POO, patrones de diseño y desarrollo profesional.',
      progress: 0,
      status: 'Bloqueado'
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Certificaciones Python</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certifications.map((cert) => (
                <Card key={cert.id} className="p-6 flex flex-col">
                  <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{cert.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progreso: {cert.progress}%</span>
                      <span>{cert.status}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-python-blue h-2.5 rounded-full" 
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <button 
                    className={`mt-auto w-full py-2 rounded ${
                      cert.status === 'Bloqueado' 
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : 'bg-python-blue text-white hover:bg-blue-800'
                    }`}
                    disabled={cert.status === 'Bloqueado'}
                    onClick={() => navigate('/recorrido')}
                  >
                    {cert.status === 'Bloqueado' ? 'Disponible pronto' : 'Continuar'}
                  </button>
                </Card>
              ))}
            </div>

            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Preparación para Certificación</h2>
              <p className="mb-4">
                Completa al menos el 80% de cada nivel y aprueba el examen final para obtener tu certificado oficial de Python Academy.
              </p>
              <div className="flex space-x-4">
                <button 
                  className="bg-python-blue text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                  onClick={() => navigate('/recorrido')}
                >
                  Practicar Ahora
                </button>
                <button 
                  className="border border-python-blue text-python-blue px-4 py-2 rounded hover:bg-blue-50 transition"
                  onClick={() => navigate('/recursos')}
                >
                  Material de Estudio
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificaciones;