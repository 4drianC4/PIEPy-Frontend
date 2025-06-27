import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { Code, Shapes } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ProgramacionOO() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Programación <span className="text-purple-600">Orientada a Objetos</span>
            </h1>
            <p className="text-xl text-gray-600">
              Domina los pilares fundamentales de la POO con Python
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-purple-600 text-white p-2 rounded-full">
                <Shapes className="w-5 h-5" />
              </span>
              ¿Qué es la POO?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              La Programación Orientada a Objetos (POO) es un paradigma de programación que organiza el diseño de software alrededor de datos u objetos, en lugar de funciones y lógica. Python soporta completamente la POO con clases, herencia, polimorfismo y encapsulamiento.
            </p>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Pilares fundamentales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span><strong>Encapsulamiento:</strong> Ocultar detalles internos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span><strong>Abstracción:</strong> Modelar lo esencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span><strong>Herencia:</strong> Reutilizar y extender código</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 text-purple-800 p-1 rounded-full">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span><strong>Polimorfismo:</strong> Múltiples formas para métodos</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              🎥 Video explicativo
            </h2>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1YwP0PkGh6w"
                title="Programación Orientada a Objetos en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplo: Clases y objetos
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              En Python, las clases son plantillas para crear objetos. El método <code>__init__</code> es el constructor y <code>self</code> representa la instancia de la clase.
            </p>

            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg mb-6">
              <span className="text-purple-400">class</span> <span className="text-blue-400">Persona</span>:<br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-green-400">__init__</span>(<span className="text-yellow-300">self</span>, nombre, edad):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.nombre = nombre<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.edad = edad<br />
              <br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-green-400">presentarse</span>(<span className="text-yellow-300">self</span>):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-yellow-300">f"Soy Rodrigo y tengo 15 años"</span><br />
              <br />
              <span className="text-green-400">p</span> = <span className="text-blue-400">Persona</span>(<span className="text-yellow-300">"Ana"</span>, <span className="text-blue-400">30</span>)<br />
              <span className="text-green-400">print</span>(p.presentarse())
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2 text-gray-800">Salida esperada:</h4>
              <div className="bg-gray-100 p-3 rounded font-mono">
                Soy Ana y tengo 30 años
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con POO
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                Crea una clase <code>Vehiculo</code> con:<br />
                1. Atributos: marca, modelo, año<br />
                2. Método <code>descripcion()</code> que devuelva los detalles<br />
                3. Crea una subclase <code>Auto</code> que herede de Vehiculo y agregue el atributo <code>puertas</code><br />
                4. Crea instancias y prueba los métodos
              </p>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}