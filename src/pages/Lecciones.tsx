// src/pages/Lecciones.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import LessonCard from '@/components/LessonCard';

const Lecciones: React.FC = () => {
  // Example code to show
  const dogClassExample = `class Dog:
    def __init__(self, name):
        self.name = name
        
my_dog = Dog("Buddy")`;

  // Initial code for the user
  const initialCode = `class Dog:
    def __init__(self, name):
        self.name = name
        
my_dog = Dog("Buddy")`;

  // Expected solution
  const expectedSolution = `class Circle:
    def __init__(self, radius):
        self.radius = radius
        
circle = Circle(5)`;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-3xl mx-auto">
            <LessonCard 
              title="Clases y Objetos"
              description="En Python, se puede definir una clase con la palabra clave 'class'. Posteriormente, se pueden crear objetos a partir de esa clase."
              exampleCode={dogClassExample}
              exerciseDescription="Define una clase llamada Circle con un método __init__ que inicializa el atributo radio. Luego, crea un objeto llamado circle con un radio de 5."
              initialCode={initialCode}
              expectedSolution={expectedSolution}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Lecciones;