import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { LineChart, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function LibreriasGraficas() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-orange-600">Librerías Gráficas</span> en Python
            </h1>
            <p className="text-xl text-gray-600">
              Visualiza datos de manera efectiva con las mejores herramientas
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-orange-600 text-white p-2 rounded-full">
                <LineChart className="w-5 h-5" />
              </span>
              ¿Qué son las librerías gráficas?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Python ofrece potentes librerías para visualización de datos que permiten crear gráficos estáticos, interactivos y publicables. Estas herramientas son esenciales para análisis de datos, investigación científica y presentación de resultados.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Librerías principales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-800 p-1 rounded-full">
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
                  <span><strong>Matplotlib:</strong> Estándar para gráficos 2D</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-800 p-1 rounded-full">
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
                  <span><strong>Seaborn:</strong> Gráficos estadísticos avanzados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-800 p-1 rounded-full">
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
                  <span><strong>Plotly:</strong> Visualizaciones interactivas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-orange-100 text-orange-800 p-1 rounded-full">
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
                  <span><strong>Bokeh:</strong> Gráficos para la web</span>
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
                src="https://www.youtube.com/embed/3Xc3CA655Y4"
                title="Visualización de datos con Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplo: Gráfico con Matplotlib
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Matplotlib es la librería más utilizada para crear visualizaciones en Python. Su sintaxis es clara y ofrece gran flexibilidad para personalizar gráficos.
            </p>

            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg mb-4">
              <span className="text-gray-400"># Instalar primero: pip install matplotlib</span><br />
              <span className="text-purple-400">import</span> matplotlib.pyplot <span className="text-purple-400">as</span> plt<br /><br />
              <span className="text-green-400">x</span> = [<span className="text-blue-400">1</span>, <span className="text-blue-400">2</span>, <span className="text-blue-400">3</span>, <span className="text-blue-400">4</span>]<br />
              <span className="text-green-400">y</span> = [<span className="text-blue-400">1</span>, <span className="text-blue-400">4</span>, <span className="text-blue-400">9</span>, <span className="text-blue-400">16</span>]<br /><br />
              plt.<span className="text-blue-400">plot</span>(x, y)<br />
              plt.<span className="text-blue-400">xlabel</span>(<span className="text-yellow-300">'Eje X'</span>)<br />
              plt.<span className="text-blue-400">ylabel</span>(<span className="text-yellow-300">'Eje Y'</span>)<br />
              plt.<span className="text-blue-400">title</span>(<span className="text-yellow-300">'Gráfico de ejemplo'</span>)<br />
              plt.<span className="text-blue-400">show</span>()
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
              <p className="text-yellow-700 flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Los gráficos no se mostrarán en este editor, pero puedes probar el código en tu entorno local instalando matplotlib.</span>
              </p>
            </div>

            <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium mb-2 text-gray-800">Resultado esperado:</h4>
              <div className="bg-gray-100 p-3 rounded flex justify-center">
              <img
                className="w-full max-w-md"
                src="/matplotlib.png"
                alt="Ejemplo de gráfico matplotlib"
              />
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con visualización
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                Crea un gráfico de barras que muestre:<br />
                1. Productos: ["Manzanas", "Naranjas", "Plátanos", "Uvas"]<br />
                2. Ventas: [35, 25, 40, 30]<br />
                3. Personaliza colores, título y etiquetas<br />
                4. Agrega una leyenda
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                import matplotlib.pyplot as plt<br />
                # Usa plt.bar() para el gráfico de barras
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}