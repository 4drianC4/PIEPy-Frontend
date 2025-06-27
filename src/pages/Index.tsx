import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { RocketIcon, BookOpenIcon, FileCodeIcon, BarChartIcon, UsersIcon, AwardIcon } from 'lucide-react';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      title: "Ruta de Aprendizaje",
      description: "Domina Python con nuestro plan de estudios estructurado desde básico hasta avanzado.",
      icon: <RocketIcon className="w-8 h-8 mb-4 text-python-blue" />,
      action: () => navigate('/recorrido'),
      color: "bg-blue-50 hover:bg-blue-100"
    },
    {
      title: "Crear Contenido",
      description: "Diseña lecciones, ejercicios y exámenes para enriquecer la plataforma.",
      icon: <BookOpenIcon className="w-8 h-8 mb-4 text-green-600" />,
      action: () => navigate('/crear-seccion'),
      color: "bg-green-50 hover:bg-green-100"
    },
    {
      title: "Recursos",
      description: "Biblioteca completa de materiales, ejemplos y proyectos prácticos.",
      icon: <FileCodeIcon className="w-8 h-8 mb-4 text-purple-600" />,
      action: () => navigate('/recursos'),
      color: "bg-purple-50 hover:bg-purple-100"
    },
    {
      title: "Mi Progreso",
      description: "Visualiza tu avance, logros y áreas de oportunidad.",
      icon: <BarChartIcon className="w-8 h-8 mb-4 text-orange-600" />,
      action: () => navigate('/progreso'),
      color: "bg-orange-50 hover:bg-orange-100"
    },
    {
      title: "Comunidad",
      description: "Conéctate con otros aprendices y resuelve dudas colaborativamente.",
      icon: <UsersIcon className="w-8 h-8 mb-4 text-red-600" />,
      action: () => navigate('/comunidad'),
      color: "bg-red-50 hover:bg-red-100"
    },
    {
      title: "Certificaciones",
      description: "Prepara tu examen y obtén certificación oficial Python Academy.",
      icon: <AwardIcon className="w-8 h-8 mb-4 text-yellow-600" />,
      action: () => navigate('/certificaciones'),
      color: "bg-yellow-50 hover:bg-yellow-100"
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10 text-center md:text-left">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Bienvenido a <span className="text-python-blue">Python Academy</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                La plataforma definitiva para aprender Python de manera interactiva y profesional
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {features.map((feature, index) => (
                <Card 
                  key={index}
                  className={`p-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] ${feature.color}`}
                  onClick={feature.action}
                >
                  <div className="flex flex-col h-full">
                    {feature.icon}
                    <h2 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
                    <button 
                      className="mt-auto w-fit text-python-blue hover:underline font-medium"
                    >
                      Explorar →
                    </button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">¿Listo para comenzar tu viaje Python?</h2>
                  <p className="text-gray-600 mb-6">
                    Únete a miles de estudiantes que están transformando sus carreras con nuestro método de aprendizaje práctico.
                  </p>
                  <div className="flex space-x-4">
                    <button 
                      className="bg-python-blue text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                      onClick={() => navigate('/recorrido')}
                    >
                      Empezar ahora
                    </button>
                    <button 
                      className="border border-python-blue text-python-blue px-4 py-2 rounded hover:bg-blue-50 transition"
                      onClick={() => navigate('/recursos')}
                    >
                      Ver recursos
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="bg-gradient-to-r from-python-blue to-blue-400 rounded-lg p-1 w-full max-w-md">
                    <div className="bg-white rounded-md p-4 h-full">
                      <pre className="text-xs md:text-sm font-mono text-gray-800">
                        <code>
                          {`# Tu primer código Python\n`}
                          <span className="text-python-blue">def</span> <span className="text-green-600">bienvenida</span>():<br/>
                          {`    `}<span className="text-purple-600">print</span>(<span className="text-yellow-600">"¡Bienvenido a Python Academy!"</span>)<br/><br/>
                          <span className="text-green-600">bienvenida</span>()
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;