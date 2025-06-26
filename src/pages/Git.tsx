import { GitBranch, GitCommit, GitMerge, Code } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Git() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              <span className="text-orange-600">Control de Versiones</span> con Git
            </h1>
            <p className="text-xl text-gray-600">
              Domina las herramientas esenciales para el desarrollo colaborativo
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-orange-600 text-white p-2 rounded-full">
                <Code className="w-5 h-5" />
              </span>
              ¿Qué es Git?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Git es un sistema de control de versiones distribuido que permite gestionar y registrar el historial de cambios en archivos de un proyecto. Es esencial para el desarrollo colaborativo de software, permitiendo a múltiples desarrolladores trabajar en paralelo.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Beneficios clave
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
                  <span><strong>Historial completo:</strong> Registro de todos los cambios</span>
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
                  <span><strong>Trabajo en equipo:</strong> Colaboración sin conflictos</span>
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
                  <span><strong>Ramas:</strong> Desarrollo paralelo de features</span>
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
                  <span><strong>Seguridad:</strong> Datos respaldados y verificados</span>
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
                src="https://www.youtube.com/embed/udNxQj-DQhE"
                title="Introducción a Git"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <GitCommit className="text-orange-600" />
              Comandos básicos
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Configuración inicial:</h3>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono space-y-2">
                  <div><span className="text-green-400">git config</span> <span className="text-blue-400">--global</span> user.name <span className="text-yellow-300">"Tu Nombre"</span></div>
                  <div><span className="text-green-400">git config</span> <span className="text-blue-400">--global</span> user.email <span className="text-yellow-300">"tu@email.com"</span></div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Flujo básico de trabajo:</h3>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono space-y-2">
                  <div><span className="text-green-400">git init</span> <span className="text-gray-400"># Inicializa repositorio</span></div>
                  <div><span className="text-green-400">git add</span> <span className="text-blue-400">.</span> <span className="text-gray-400"># Prepara cambios</span></div>
                  <div><span className="text-green-400">git commit</span> <span className="text-blue-400">-m</span> <span className="text-yellow-300">"Mensaje descriptivo"</span></div>
                  <div><span className="text-green-400">git push</span> origin main <span className="text-gray-400"># Sube cambios</span></div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Trabajo con ramas:</h3>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono space-y-2">
                  <div><span className="text-green-400">git branch</span> <span className="text-blue-400">nombre-rama</span> <span className="text-gray-400"># Crea rama</span></div>
                  <div><span className="text-green-400">git checkout</span> <span className="text-blue-400">nombre-rama</span> <span className="text-gray-400"># Cambia a rama</span></div>
                  <div><span className="text-green-400">git merge</span> <span className="text-blue-400">nombre-rama</span> <span className="text-gray-400"># Fusiona ramas</span></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <GitMerge className="text-orange-600" />
              Buenas prácticas
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mt-1">
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
                <span><strong>Commits atómicos:</strong> Cambios pequeños y enfocados con mensajes descriptivos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mt-1">
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
                <span><strong>Flujo de ramas:</strong> Usar <code>main</code> para producción y ramas separadas para desarrollo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mt-1">
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
                <span><strong>.gitignore:</strong> Excluir archivos generados (node_modules, .env, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mt-1">
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
                <span><strong>Sincronización frecuente:</strong> Hacer <code>pull</code> antes de empezar a trabajar y antes de hacer <code>push</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-orange-100 text-orange-800 p-1 rounded-full mt-1">
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
                <span><strong>Convenciones:</strong> Seguir estándares como Conventional Commits para mensajes claros</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}