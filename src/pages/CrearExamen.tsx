
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const CrearExamen = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Crear Examen</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Título del Examen</label>
                <Input placeholder="Ingrese título del examen..." />
              </div>
              
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Descripción</label>
                <Textarea placeholder="Ingrese descripción del examen..." className="h-32" />
              </div>
              
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Preguntas</label>
                <div className="border border-gray-300 p-4 rounded-md space-y-4">
                  <div className="space-y-2">
                    <Input placeholder="Pregunta 1" />
                    <Textarea placeholder="Opciones (una por línea)" className="h-24" />
                  </div>
                  
                  <Button className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200">
                    + Agregar Pregunta
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between pt-4">
                <Button onClick={() => navigate('/')} variant="outline">
                  Cancelar
                </Button>
                <Button className="bg-python-blue text-white hover:bg-blue-800">
                  Guardar Examen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearExamen;
