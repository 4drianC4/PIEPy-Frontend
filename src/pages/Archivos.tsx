import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Archivos() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Manejo de <span className="text-blue-600">Archivos</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Aprende a leer, escribir y manipular archivos con Python
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-blue-600 text-white p-2 rounded-full">
                <FileText className="w-5 h-5" />
              </span>
              ¿Qué es el manejo de archivos?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Python proporciona funciones integradas para trabajar con archivos, permitiendo leer, escribir y manipular datos almacenados en el sistema de archivos. El manejo adecuado de archivos es esencial para aplicaciones que necesitan persistencia de datos o procesamiento de información almacenada.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Modos de apertura de archivos
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span><strong>'r'</strong>: Solo lectura (default)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span><strong>'w'</strong>: Escritura (sobrescribe)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span><strong>'a'</strong>: Append (agrega al final)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span><strong>'r+'</strong>: Lectura y escritura</span>
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
                src="https://www.youtube.com/embed/Uh2ebFW8OYM"
                title="Manejo de archivos en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplo: Leer y escribir archivos
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Python utiliza la función <code>open()</code> para trabajar con archivos. Es recomendable usar el contexto <code>with</code> que se encarga de cerrar el archivo automáticamente.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium mb-2 text-gray-800">Lectura de archivos:</h4>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                  <span className="text-purple-400">with</span> <span className="text-green-400">open</span>(<span className="text-yellow-300">'datos.txt'</span>, <span className="text-yellow-300">'r'</span>) <span className="text-purple-400">as</span> archivo:<br />
                  &nbsp;&nbsp;contenido = archivo.<span className="text-green-400">read</span>()<br />
                  &nbsp;&nbsp;<span className="text-green-400">print</span>(contenido)
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2 text-gray-800">Escritura de archivos:</h4>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                  <span className="text-purple-400">with</span> <span className="text-green-400">open</span>(<span className="text-yellow-300">'registro.log'</span>, <span className="text-yellow-300">'w'</span>) <span className="text-purple-400">as</span> archivo:<br />
                  &nbsp;&nbsp;archivo.<span className="text-green-400">write</span>(<span className="text-yellow-300">'Nueva entrada de log\\n'</span>)
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con archivos
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                Crea un programa que:<br />
                1. Cree un archivo llamado 'notas.txt' si no existe<br />
                2. Permita agregar nuevas líneas con notas<br />
                3. Muestre todo el contenido al final<br />
                4. Maneje posibles errores (permisos, archivo no encontrado)
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                # Tu código aquí<br />
                # Usa 'a' para append y maneja los errores adecuadamente
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}