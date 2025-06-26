import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ManejoErrores() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Manejo de <span className="text-red-600">Errores</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Aprende a controlar y gestionar errores en tus programas de manera elegante
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-red-600 text-white p-2 rounded-full">
                <AlertTriangle className="w-5 h-5" />
              </span>
              ¿Qué es el manejo de errores?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              En programación, los errores son inevitables. Python proporciona herramientas para manejar estos errores de manera controlada, evitando que el programa se detenga abruptamente y permitiendo tomar acciones correctivas. El manejo de errores es esencial para crear aplicaciones robustas y confiables.
            </p>

            <div className="bg-red-50 p-6 rounded-lg border border-red-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Conceptos clave
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-red-100 text-red-800 p-1 rounded-full">
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
                  <span><strong>Excepciones:</strong> Errores que ocurren durante la ejecución</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-red-100 text-red-800 p-1 rounded-full">
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
                  <span><strong>Try/Except:</strong> Bloque para capturar y manejar excepciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-red-100 text-red-800 p-1 rounded-full">
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
                  <span><strong>Finally:</strong> Código que siempre se ejecuta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-red-100 text-red-800 p-1 rounded-full">
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
                  <span><strong>Raise:</strong> Lanzar excepciones manualmente</span>
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
                src="https://www.youtube.com/embed/NIWwJbo-9_8"
                title="Manejo de errores en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplo: Try/Except
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La estructura básica para manejar errores en Python utiliza los bloques <code>try</code> y <code>except</code>. El código dentro de <code>try</code> se ejecuta normalmente, pero si ocurre un error, el flujo salta al bloque <code>except</code> correspondiente.
            </p>

            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg mb-6">
              <span className="text-purple-400">try</span>:<br />
              &nbsp;&nbsp;<span className="text-green-400">print</span>(<span className="text-yellow-300">"Inicio del bloque try"</span>)<br />
              &nbsp;&nbsp;resultado = <span className="text-blue-400">10</span> / <span className="text-blue-400">0</span><br />
              <span className="text-purple-400">except</span> <span className="text-red-400">ZeroDivisionError</span>:<br />
              &nbsp;&nbsp;<span className="text-green-400">print</span>(<span className="text-yellow-300">"¡Error: División por cero!"</span>)<br />
              <span className="text-purple-400">finally</span>:<br />
              &nbsp;&nbsp;<span className="text-green-400">print</span>(<span className="text-yellow-300">"Este bloque siempre se ejecuta"</span>)
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica el manejo de errores
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                Modifica el siguiente código para que:<br />
                1. Intente convertir un input a número<br />
                2. Maneje el error si el input no es numérico (ValueError)<br />
                3. Muestre un mensaje apropiado en cada caso
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                numero = input("Ingresa un número: ")<br />
                # Tu código aquí
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}