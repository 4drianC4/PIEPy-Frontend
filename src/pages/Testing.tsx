import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { TestTube2, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Testing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-indigo-600">Testing</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Aprende a escribir pruebas automatizadas para código confiable
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-indigo-600 text-white p-2 rounded-full">
                <TestTube2 className="w-5 h-5" />
              </span>
              ¿Qué es el testing automatizado?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              El testing automatizado es una práctica esencial en desarrollo de software que permite verificar que el código funciona como se espera. Python ofrece varios frameworks para implementar pruebas unitarias, de integración y funcionales.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Beneficios del testing
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full">
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
                  <span><strong>Detectar errores temprano:</strong> Reduce costos de corrección</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full">
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
                  <span><strong>Documentación viva:</strong> Las pruebas explican el comportamiento esperado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full">
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
                  <span><strong>Refactorización segura:</strong> Permite modificar código con confianza</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-indigo-100 text-indigo-800 p-1 rounded-full">
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
                  <span><strong>Integración continua:</strong> Facilita la automatización de despliegues</span>
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
                src="https://www.youtube.com/embed/6tNS--WetLI"
                title="Testing en Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplo: Pruebas unitarias con unittest
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              El módulo <code>unittest</code> es parte de la biblioteca estándar de Python y sigue el estilo xUnit. Permite organizar pruebas en clases con métodos que verifican el comportamiento del código.
            </p>

            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg mb-6">
              <span className="text-purple-400">import</span> unittest<br /><br />
              <span className="text-purple-400">def</span> <span className="text-green-400">suma</span>(a, b):<br />
              &nbsp;&nbsp;<span className="text-purple-400">return</span> a + b<br /><br />
              <span className="text-purple-400">class</span> <span className="text-blue-400">TestSuma</span>(unittest.TestCase):<br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-green-400">test_suma_positivos</span>(<span className="text-yellow-300">self</span>):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.assertEqual(suma(<span className="text-blue-400">2</span>, <span className="text-blue-400">3</span>), <span className="text-blue-400">5</span>)<br /><br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span> <span className="text-green-400">test_suma_negativos</span>(<span className="text-yellow-300">self</span>):<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">self</span>.assertEqual(suma(<span className="text-blue-400">-1</span>, <span className="text-blue-400">-1</span>), <span className="text-blue-400">-2</span>)<br /><br />
              <span className="text-purple-400">if</span> <span className="text-yellow-300">__name__</span> == <span className="text-yellow-300">'__main__'</span>:<br />
              &nbsp;&nbsp;unittest.main()
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
              <p className="text-green-700 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Para ejecutar las pruebas, guarda el código en un archivo .py y ejecútalo con Python, o usa el comando <code>python -m unittest archivo.py</code></span>
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con testing
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                Implementa pruebas para una función <code>dividir(a, b)</code> que:<br />
                1. Devuelve la división de dos números<br />
                2. Maneja el error de división por cero<br />
                3. Incluye casos para:<br />
                &nbsp;&nbsp;- Números positivos<br />
                &nbsp;&nbsp;- Números negativos<br />
                &nbsp;&nbsp;- Cero como dividendo<br />
                &nbsp;&nbsp;- División por cero (debe lanzar una excepción)
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                import unittest<br /><br />
                def dividir(a, b):<br />
                &nbsp;&nbsp;# Implementa la función aquí<br /><br />
                class TestDivision(unittest.TestCase):<br />
                &nbsp;&nbsp;# Implementa las pruebas aquí<br /><br />
                if __name__ == '__main__':<br />
                &nbsp;&nbsp;unittest.main()
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}