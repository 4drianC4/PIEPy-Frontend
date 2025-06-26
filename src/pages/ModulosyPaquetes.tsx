import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { Package, Box, Import, FileText, Download, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ModulosPaquetes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-python-blue">Módulos y Paquetes</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Organiza y reutiliza tu código eficientemente
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-python-blue text-white p-2 rounded-full">
                <Package className="w-5 h-5" />
              </span>
              ¿Qué son módulos y paquetes?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              En Python, los módulos son archivos que contienen definiciones y declaraciones de Python. Los paquetes son una forma de organizar módulos relacionados en directorios. Juntos forman la base para organizar y reutilizar código en Python.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Características principales
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Módulos
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span>Archivos con extensión <code className="bg-gray-100 px-1 rounded">.py</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span>Contienen funciones, clases y variables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span>Se importan con <code className="bg-gray-100 px-1 rounded">import</code></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <Box className="w-5 h-5 text-green-600" />
                    Paquetes
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span>Directorios que contienen módulos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span>Incluyen un archivo <code className="bg-gray-100 px-1 rounded">__init__.py</code></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
                        <ChevronRight className="w-4 h-4" />
                      </span>
                      <span>Permiten estructura jerárquica</span>
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
                src="https://www.youtube.com/embed/WymSnrLIpD4"
                title="Módulos y Paquetes en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplos prácticos
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Import className="w-5 h-5 text-purple-500" />
                  Importar módulos
                </h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                  <span className="text-blue-400"># Importar un módulo completo</span><br />
                  <span className="text-blue-400">import</span> <span className="text-green-400">math</span><br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">math</span>.<span className="text-yellow-400">sqrt</span>(<span className="text-purple-400">16</span>))  <span className="text-gray-500"># 4.0</span><br /><br />
                  
                  <span className="text-blue-400"># Importar con alias</span><br />
                  <span className="text-blue-400">import</span> <span className="text-green-400">matplotlib.pyplot</span> <span className="text-blue-400">as</span> <span className="text-green-400">plt</span><br /><br />
                  
                  <span className="text-blue-400"># Importar solo lo necesario</span><br />
                  <span className="text-blue-400">from</span> <span className="text-green-400">datetime</span> <span className="text-blue-400">import</span> <span className="text-green-400">datetime</span><br />
                  <span className="text-blue-400">print</span>(<span className="text-green-400">datetime</span>.<span className="text-yellow-400">now</span>())  <span className="text-gray-500"># Fecha y hora actual</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2">
                  <Download className="w-5 h-5 text-blue-500" />
                  Crear y usar paquetes
                </h3>
                <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg">
                  <span className="text-blue-400"># Estructura de directorios</span><br />
                  <span className="text-gray-500"># mi_paquete/</span><br />
                  <span className="text-gray-500"># │  __init__.py</span><br />
                  <span className="text-gray-500"># │  modulo1.py</span><br />
                  <span className="text-gray-500"># └── subpaquete/</span><br />
                  <span className="text-gray-500">#      │  __init__.py</span><br />
                  <span className="text-gray-500">#      │  modulo2.py</span><br /><br />
                  
                  <span className="text-blue-400"># Contenido de modulo1.py</span><br />
                  <span className="text-blue-400">def</span> <span className="text-yellow-400">saludar</span>():<br />
                  &nbsp;&nbsp;<span className="text-blue-400">return</span> <span className="text-yellow-300">"Hola desde modulo1"</span><br /><br />
                  
                  <span className="text-blue-400"># Uso desde otro archivo</span><br />
                  <span className="text-blue-400">from</span> <span className="text-green-400">mi_paquete</span> <span className="text-blue-400">import</span> <span className="text-green-400">modulo1</span><br />
                  <span className="text-blue-400">from</span> <span className="text-green-400">mi_paquete.subpaquete</span> <span className="text-blue-400">import</span> <span className="text-green-400">modulo2</span><br /><br />
                  
                  <span className="text-blue-400">print</span>(<span className="text-green-400">modulo1</span>.<span className="text-yellow-400">saludar</span>())
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
                1. Crea un módulo llamado <code className="font-mono bg-gray-200 px-2 py-1 rounded">calculadora.py</code> con funciones para sumar, restar y multiplicar<br />
                2. Crea un paquete llamado <code className="font-mono bg-gray-200 px-2 py-1 rounded">matematicas</code> y mueve allí el módulo<br />
                3. Importa las funciones en otro script y realiza operaciones<br />
                4. Usa el módulo <code className="font-mono bg-gray-200 px-2 py-1 rounded">random</code> estándar para generar números aleatorios<br />
                5. Combina ambos en un programa que realice operaciones con números aleatorios
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono text-sm">
                <span className="text-gray-500"># Estructura esperada</span><br />
                matematicas/<br />
                │  __init__.py<br />
                │  calculadora.py<br /><br />
                
                <span className="text-gray-500"># calculadora.py</span><br />
                def sumar(a, b):<br />
                &nbsp;&nbsp;return a + b<br /><br />
                
                <span className="text-gray-500"># main.py</span><br />
                from matematicas.calculadora import sumar<br />
                import random<br /><br />
                
                numero1 = random.randint(1, 10)<br />
                numero2 = random.randint(1, 10)<br />
                print(f"numero1 + numero2 = sumar(numero1, numero2)")
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}