import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Progreso = () => {
  const navigate = useNavigate();

  const progressData = [
    { name: 'Básico', value: 85 },
    { name: 'Intermedio', value: 45 },
    { name: 'Avanzado', value: 15 }
  ];

  const weeklyActivity = [
    { day: 'Lun', ejercicios: 3 },
    { day: 'Mar', ejercicios: 5 },
    { day: 'Mié', ejercicios: 4 },
    { day: 'Jue', ejercicios: 6 },
    { day: 'Vie', ejercicios: 2 },
    { day: 'Sáb', ejercicios: 1 },
    { day: 'Dom', ejercicios: 0 }
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Mi Progreso</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Progreso General</h2>
                {progressData.map((item, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span>{item.name}</span>
                      <span>{item.value}%</span>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </Card>

              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Actividad Semanal</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="ejercicios" fill="#3B82F6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>

            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Logros Recientes</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Python Básico', '10 Ejercicios', '5 Días seguidos', 'Primer Proyecto'].map((achievement, i) => (
                  <div key={i} className="border rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600">✓</span>
                    </div>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex justify-end">
              <button 
                onClick={() => navigate('/recorrido')}
                className="bg-python-blue text-white px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                Continuar Aprendiendo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progreso;