import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function ProgramacionOO() {
  return (
    <div className="p-6">
      <TopicDetail topic="Programación Orientada a Objetos" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Ejemplo: Clase simple</h3>
        <p className="mb-4">POO en Python es poderosa y flexible:</p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
    
    def presentarse(self):
        return f"Soy {self.nombre} y tengo {self.edad} años"

p = Persona("Ana", 30)
print(p.presentarse())`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
