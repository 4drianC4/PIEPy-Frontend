
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const CrearEjercicio = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-6 overflow-y-auto bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Crear Ejercicio de Python</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Título del Ejercicio</label>
                <Input placeholder="Ingrese título del ejercicio..." />
              </div>
              
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Descripción del Problema</label>
                <Textarea placeholder="Describa el problema a resolver..." className="h-32" />
              </div>
              
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Plantilla de Código</label>
                <Textarea 
                  placeholder="# Código inicial que verá el estudiante
class Persona:
    # Define el constructor y métodos
    pass"
                  className="h-40 font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <label className="font-medium text-gray-700">Test Unitario</label>
                <Textarea 
                  placeholder="# Test unitario para verificar la solución
import unittest

class TestPersona(unittest.TestCase):
    def test_constructor(self):
        p = Persona('Juan', 25)
        self.assertEqual(p.nombre, 'Juan')
        self.assertEqual(p.edad, 25)"
                  className="h-40 font-mono"
                />
              </div>
              
              <div className="flex justify-between pt-4">
                <Button onClick={() => navigate('/')} variant="outline">
                  Cancelar
                </Button>
                <Button className="bg-python-blue text-white hover:bg-blue-800">
                  Guardar Ejercicio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearEjercicio;
