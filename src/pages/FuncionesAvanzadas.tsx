import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { Code, Zap, ArrowRight, ChevronRight, FunctionSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function FuncionesAvanzadas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-python-blue">Funciones Avanzadas</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Potencia tu código con funciones lambda, map, filter y reduce
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-python-blue text-white p-2 rounded-full">
                <FunctionSquare className="w-5 h-5" />
              </span>
              Funciones Lambda (Anónimas)
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Las funciones lambda son funciones pequeñas y anónimas que pueden tener cualquier número de argumentos, pero solo una expresión. Son útiles para operaciones simples que se pueden escribir en una sola línea.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Características principales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span>No tienen nombre (anónimas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span>Sintaxis: <code className="bg-gray-100 px-1 rounded">lambda argumentos: expresión</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span>Útiles como argumentos para funciones de orden superior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <span>Limitadas a una sola expresión</span>
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
                src="https://www.youtube.com/embed/25ovCm9jKfA"
                title="Funciones Avanzadas en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplos de funciones avanzadas
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Funciones Lambda
                </h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                  <span className="text-blue-400"># Función lambda para elevar al cuadrado</span><br />
                  <span className="text-green-400">cuadrado</span> = <span className="text-blue-400">lambda</span> <span className="text-purple-400">x</span>: <span className="text-purple-400">x</span> ** <span className="text-purple-400">2</span><br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">cuadrado</span>(<span className="text-purple-400">5</span>))  <span className="text-gray-500"># Output: 25</span><br /><br />
                  
                  <span className="text-blue-400"># Lambda con múltiples parámetros</span><br />
                  <span className="text-green-400">suma</span> = <span className="text-blue-400">lambda</span> <span className="text-purple-400">a, b</span>: <span className="text-purple-400">a</span> + <span className="text-purple-400">b</span><br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">suma</span>(<span className="text-purple-400">3</span>, <span className="text-purple-400">7</span>))  <span className="text-gray-500"># Output: 10</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-500" />
                  Funciones Map, Filter y Reduce
                </h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                  <span className="text-blue-400"># map: aplica función a cada elemento</span><br />
                  <span className="text-green-400">numeros</span> = [<span className="text-purple-400">1</span>, <span className="text-purple-400">2</span>, <span className="text-purple-400">3</span>, <span className="text-purple-400">4</span>]<br />
                  <span className="text-green-400">cuadrados</span> = <span className="text-blue-400">list</span>(<span className="text-blue-400">map</span>(<span className="text-blue-400">lambda</span> <span className="text-purple-400">x</span>: <span className="text-purple-400">x</span>**<span className="text-purple-400">2</span>, <span className="text-green-400">numeros</span>))<br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">cuadrados</span>)  <span className="text-gray-500"># [1, 4, 9, 16]</span><br /><br />
                  
                  <span className="text-blue-400"># filter: filtra elementos</span><br />
                  <span className="text-green-400">pares</span> = <span className="text-blue-400">list</span>(<span className="text-blue-400">filter</span>(<span className="text-blue-400">lambda</span> <span className="text-purple-400">x</span>: <span className="text-purple-400">x</span> % <span className="text-purple-400">2</span> == <span className="text-purple-400">0</span>, <span className="text-green-400">numeros</span>))<br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">pares</span>)  <span className="text-gray-500"># [2, 4]</span><br /><br />
                  
                  <span className="text-blue-400"># reduce: acumula resultado (requiere import)</span><br />
                  <span className="text-blue-400">from</span> <span className="text-green-400">functools</span> <span className="text-blue-400">import</span> <span className="text-green-400">reduce</span><br />
                  <span className="text-green-400">suma_total</span> = <span className="text-blue-400">reduce</span>(<span className="text-blue-400">lambda</span> <span className="text-purple-400">a, b</span>: <span className="text-purple-400">a</span> + <span className="text-purple-400">b</span>, <span className="text-green-400">numeros</span>)<br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">suma_total</span>)  <span className="text-gray-500"># 10</span>
                </div>
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
                1. Crea una función lambda que multiplique un número por 3<br />
                2. Usa <code className="font-mono bg-gray-200 px-2 py-1 rounded">map</code> para aplicar esta función a la lista [1, 2, 3, 4]<br />
                3. Filtra los números mayores que 5 usando <code className="font-mono bg-gray-200 px-2 py-1 rounded">filter</code><br />
                4. Usa <code className="font-mono bg-gray-200 px-2 py-1 rounded">reduce</code> para calcular el producto de todos los números<br />
                5. Imprime los resultados en cada paso
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono text-sm">
                # Ejemplo de solución esperada<br />
                from functools import reduce<br /><br />
                
                # Paso 1: Función lambda<br />
                triple = lambda x: x * 3<br /><br />
                
                # Paso 2: Map<br />
                numeros = [1, 2, 3, 4]<br />
                triples = list(map(triple, numeros))<br />
                print(triples)  # [3, 6, 9, 12]<br /><br />
                
                # Paso 3: Filter<br />
                mayores = list(filter(lambda x: x mayor 5, triples))<br />
                print(mayores)  # [6, 9, 12]<br /><br />
                
                # Paso 4: Reduce<br />
                producto = reduce(lambda a, b: a * b, mayores)<br />
                print(producto)  # 648
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}