import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { Globe, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ApiRest() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-green-600">APIs REST</span> con Python
            </h1>
            <p className="text-xl text-gray-600">
              Aprende a interactuar con servicios web usando Python
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-green-600 text-white p-2 rounded-full">
                <Globe className="w-5 h-5" />
              </span>
              ¿Qué son las APIs REST?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Las APIs REST (Representational State Transfer) son interfaces que permiten la comunicación entre sistemas a través de HTTP. Python ofrece varias librerías para consumir y crear APIs REST, siendo <code>requests</code> la más popular para el consumo.
            </p>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Métodos HTTP principales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full">
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
                  <span><strong>GET:</strong> Obtener recursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full">
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
                  <span><strong>POST:</strong> Crear recursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full">
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
                  <span><strong>PUT/PATCH:</strong> Actualizar recursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-green-100 text-green-800 p-1 rounded-full">
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
                  <span><strong>DELETE:</strong> Eliminar recursos</span>
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
                src="https://www.youtube.com/embed/7YcW25PHnAA"
                title="APIs REST con Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              📝 Ejemplo: Consumir una API REST
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La librería <code>requests</code> es el estándar de facto para hacer peticiones HTTP en Python. Aquí mostramos cómo consumir una API pública:
            </p>

            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg mb-4">
              <span className="text-gray-400"># Instalar primero: pip install requests</span><br />
              <span className="text-purple-400">import</span> requests<br /><br />
              <span className="text-green-400">response</span> = requests.<span className="text-blue-400">get</span>(<span className="text-yellow-300">'https://jsonplaceholder.typicode.com/todos/1'</span>)<br />
              <span className="text-purple-400">if</span> response.status_code == <span className="text-blue-400">200</span>:<br />
              &nbsp;&nbsp;<span className="text-green-400">data</span> = response.<span className="text-blue-400">json</span>()<br />
              &nbsp;&nbsp;<span className="text-green-400">print</span>(<span className="text-yellow-300">f"Título: data['title']"</span>)<br />
              <span className="text-purple-400">else</span>:<br />
              &nbsp;&nbsp;<span className="text-green-400">print</span>(<span className="text-yellow-300">f"Error: response.status_code"</span>)
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
              <p className="text-blue-700 flex items-start gap-2">
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
                <span>Este código hace una petición real a una API pública de prueba. Puedes ejecutarlo para ver el resultado.</span>
              </p>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con APIs REST
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio guiado
              </h3>
              <p className="text-gray-700 mb-4">
                Usa la API de JSONPlaceholder para:<br />
                1. Obtener todos los posts (GET /posts)<br />
                2. Filtrar los posts de un usuario específico (userId = 1)<br />
                3. Crear un nuevo post (POST /posts)<br />
                4. Manejar posibles errores (timeout, status codes)
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                import requests<br />
                # Usa requests.get() y requests.post()
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}