import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { getCursos } from '@/api/cursos';
import { toast } from 'react-hot-toast';
import { getCurso } from '@/types/curso';

const Recursos = () => {
  const navigate = useNavigate();

  const [cursos, setCursos] = useState<getCurso[]>([]);
  const [loading, setLoading] = useState(true);

  // Obtener cursos de la API
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const cursosData = await getCursos();
        setCursos(cursosData);
      } catch (error) {
        console.error('Error al obtener cursos:', error);
        toast.error('Error al cargar los cursos');
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);
  
  // Datos de ejemplo para videos y recursos
  const videos = [
    {
      id: 1,
      title: 'Introducción a Python',
      description: 'Aprende los fundamentos básicos del lenguaje Python',
      duration: '15:30',
      level: 'Principiante',
      thumbnail: 'https://i.ytimg.com/vi/_uQrJ0TkZlc/maxresdefault.jpg'
    },
    {
      id: 2,
      title: 'Funciones en Python',
      description: 'Cómo crear y usar funciones en Python',
      duration: '22:45',
      level: 'Intermedio',
      thumbnail: 'https://i.ytimg.com/vi/9Os0o3wzS_I/maxresdefault.jpg'
    },
    {
      id: 3,
      title: 'Programación Orientada a Objetos',
      description: 'Clases, objetos y herencia en Python',
      duration: '35:10',
      level: 'Avanzado',
      thumbnail: 'https://i.ytimg.com/vi/ZDa-Z5JzLYM/maxresdefault.jpg'
    }
  ];

  const recursos = [
    {
      id: 1,
      title: 'Documentación Oficial de Python',
      description: 'Guía completa de referencia para Python',
      type: 'Documentación',
      link: 'https://docs.python.org/3/'
    },
    {
      id: 2,
      title: 'Cheat Sheet de Python',
      description: 'Resumen de sintaxis y funciones principales',
      type: 'Guía rápida',
      link: 'https://www.pythoncheatsheet.org/'
    },
    {
      id: 3,
      title: 'Ejercicios prácticos',
      description: 'Colección de ejercicios para practicar Python',
      type: 'Ejercicios',
      link: 'https://www.w3resource.com/python-exercises/'
    }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Recursos de Aprendizaje</h2>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => navigate('/crear-ejercicio')}>
                  Crear Ejercicio
                </Button>
                <Button className="bg-python-blue text-white hover:bg-blue-800"
                    onClick={() => navigate('/crear-curso')}>
                  Añadir Curso
                </Button>
              </div>
            </div>
            <section className="mb-12">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                Cursos Disponibles
              </h3>
              
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <p>Cargando cursos...</p>
                </div>
              ) : cursos.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No hay cursos disponibles</p>
                  <Button 
                    className="mt-4 bg-python-blue text-white hover:bg-blue-800"
                    onClick={() => navigate('/crear-curso')}
                  >
                    Crear Primer Curso
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cursos.map((curso) => (
                    <div 
                      key={curso.id} 
                      className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                    >
                      <div className="p-4">
                        <h4 className="font-bold text-lg mb-2">{curso.nombre}</h4>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {curso.descripcion}
                        </p>
                        <Button 
                          variant="outline" 
                          className="w-full border-python-blue text-python-blue hover:bg-python-lightblue hover:text-white"
                          onClick={() => navigate(`/curso/${curso.id}`)}
                        >
                          Ver Curso
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
            {/* Sección de Videos */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                Videos Tutoriales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </span>
                      <span className="absolute top-2 left-2 bg-python-blue text-white text-xs px-2 py-1 rounded">
                        {video.level}
                      </span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-lg mb-2">{video.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-python-blue text-python-blue hover:bg-python-lightblue hover:text-white"
                        onClick={() => navigate(`/video/${video.id}`)}
                      >
                        Ver Video
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Sección de Recursos */}
            <section>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                Recursos Adicionales
              </h3>
              <div className="space-y-4">
                {recursos.map((recurso) => (
                  <div key={recurso.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-lg mb-1">{recurso.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{recurso.description}</p>
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {recurso.type}
                        </span>
                      </div>
                      <a 
                        href={recurso.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-python-blue hover:text-python-darkblue font-medium"
                      >
                        Visitar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recursos;