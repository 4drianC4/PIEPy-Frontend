import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Comunidad = () => {
  const navigate = useNavigate();

  const discussions = [
    {
      id: 1,
      title: 'Cómo optimizar bucles en Python',
      author: 'Ana Martínez',
      replies: 12,
      lastActivity: '2h ago'
    },
    {
      id: 2,
      title: 'Dudas sobre POO en Python',
      author: 'Carlos López',
      replies: 5,
      lastActivity: '5h ago'
    },
    {
      id: 3,
      title: 'Mejores prácticas para proyectos grandes',
      author: 'María González',
      replies: 8,
      lastActivity: '1d ago'
    }
  ];

  const activeUsers = [
    { name: 'Ana Martínez', role: 'Experta' },
    { name: 'Carlos López', role: 'Intermedio' },
    { name: 'María González', role: 'Avanzada' },
    { name: 'Juan Pérez', role: 'Principiante' }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Comunidad Python Academy</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Discusiones Recientes</h2>
                  <div className="space-y-4">
                    {discussions.map((discussion) => (
                      <div key={discussion.id} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-medium text-lg mb-1 hover:text-python-blue cursor-pointer">
                          {discussion.title}
                        </h3>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Por {discussion.author}</span>
                          <span>{discussion.replies} respuestas · {discussion.lastActivity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="mt-4 text-python-blue hover:underline"
                    onClick={() => navigate('/recursos')}
                  >
                    Ver todas las discusiones →
                  </button>
                </Card>
              </div>

              <div>
                <Card className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Usuarios Activos</h2>
                  <div className="space-y-4">
                    {activeUsers.map((user, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6 mt-6">
                  <h2 className="text-xl font-semibold mb-4">Iniciar Nueva Discusión</h2>
                  <textarea 
                    className="w-full border rounded p-2 mb-4" 
                    rows={3}
                    placeholder="¿Qué quieres preguntar o compartir?"
                  />
                  <button 
                    className="bg-python-blue text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                    onClick={() => navigate('/lecciones')}
                  >
                    Publicar
                  </button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comunidad;