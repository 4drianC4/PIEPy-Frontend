import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { List, ListOrdered, Lock, Unlock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ListasTuplas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-python-blue">Listas y Tuplas</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Estructuras fundamentales para almacenar colecciones de datos
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-python-blue text-white p-2 rounded-full">
                <List className="w-5 h-5" />
              </span>
              ¿Qué son las listas y tuplas?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              En Python, tanto las listas como las tuplas son estructuras de datos que permiten almacenar colecciones de elementos. La principal diferencia es que las listas son mutables (pueden modificarse después de su creación) mientras que las tuplas son inmutables (no pueden modificarse una vez creadas).
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Características principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <Unlock className="w-5 h-5 text-green-600" />
                    Listas (mutables)
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Se definen con corchetes: <code className="bg-gray-100 px-1 rounded">[]</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Pueden modificarse después de su creación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Métodos como <code className="bg-gray-100 px-1 rounded">append()</code>, <code className="bg-gray-100 px-1 rounded">remove()</code>, etc.</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-red-600" />
                    Tuplas (inmutables)
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Se definen con paréntesis: <code className="bg-gray-100 px-1 rounded">()</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>No pueden modificarse después de su creación</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>Más eficientes en memoria que las listas</span>
                    </li>
                  </ul>
                </div>
              </div>
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
                src="https://www.youtube.com/embed/9OeznAkyQz4"
                title="Listas y Tuplas en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplos básicos
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Veamos cómo se definen y manipulan las listas y tuplas en Python:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                <span className="text-blue-400"># Lista (mutable)</span><br />
                <span className="text-green-400">frutas</span> = [<span className="text-yellow-300">"manzana"</span>, <span className="text-yellow-300">"banana"</span>, <span className="text-yellow-300">"naranja"</span>]<br />
                <span className="text-green-400">frutas</span>.<span className="text-blue-400">append</span>(<span className="text-yellow-300">"uva"</span>) <span className="text-gray-500"># Añadir elemento</span><br />
                <span className="text-green-400">frutas</span>[<span className="text-purple-400">1</span>] = <span className="text-yellow-300">"pera"</span> <span className="text-gray-500"># Modificar elemento</span><br />
                <span className="text-blue-400">print</span>(<span className="text-green-400">frutas</span>) <span className="text-gray-500"># ['manzana', 'pera', 'naranja', 'uva']</span>
              </div>
              <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                <span className="text-blue-400"># Tupla (inmutable)</span><br />
                <span className="text-green-400">coordenadas</span> = (<span className="text-purple-400">10.5</span>, <span className="text-purple-400">20.3</span>)<br />
                <span className="text-gray-500"># coordenadas[0] = 15.0 → Error! No se puede modificar</span><br /><br />
                <span className="text-blue-400"># Desempaquetado</span><br />
                <span className="text-green-400">x</span>, <span className="text-green-400">y</span> = <span className="text-green-400">coordenadas</span><br />
                <span className="text-blue-400">print</span>(<span className="text-green-400">x</span>) <span className="text-gray-500"># 10.5</span><br />
                <span className="text-blue-400">print</span>(<span className="text-green-400">y</span>) <span className="text-gray-500"># 20.3</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica lo aprendido
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                1. Crea una lista llamada <code className="font-mono bg-gray-200 px-2 py-1 rounded">numeros</code> con los valores 5, 10 y 15.<br />
                2. Añade el número 20 al final de la lista.<br />
                3. Crea una tupla llamada <code className="font-mono bg-gray-200 px-2 py-1 rounded">colores</code> con los valores "rojo", "verde" y "azul".<br />
                4. Intenta modificar el primer elemento de la tupla (debería dar error).<br />
                5. Imprime ambos elementos al final.
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono text-sm">
                # Ejemplo de solución esperada<br />
                numeros = [5, 10, 15]<br />
                numeros.append(20)<br />
                colores = ("rojo", "verde", "azul")<br />
                # colores[0] = "amarillo" → Esto dará error<br />
                print(numeros)<br />
                print(colores)
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}