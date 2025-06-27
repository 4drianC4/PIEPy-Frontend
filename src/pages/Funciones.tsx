import PythonEditor from "@/components/python-runner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Funciones() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Funciones en <span className="text-python-blue">Python</span>
            </h1>
            <p className="text-xl text-gray-600">
              Organiza tu código en bloques reutilizables
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-python-blue text-white p-2 rounded-full">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 9h6m-5 4h5m4-9v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h6l2 2h6a2 2 0 012 2z"
                  />
                </svg>
              </span>
              ¿Qué son las funciones?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Las funciones son bloques de código organizados y reutilizables
              que realizan una acción específica. Permiten dividir programas
              complejos en partes más pequeñas y manejables, evitando la
              repetición de código y facilitando el mantenimiento.
            </p>
            <p className="text-lg text-gray-700">
              En Python, las funciones se definen con la palabra clave{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                def
              </span>
              , pueden recibir parámetros y devolver valores con{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                return
              </span>
              . Python también soporta funciones lambda (anónimas) para
              operaciones simples.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              🎥 Video explicativo
            </h2>
            <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9Os0o3wzS_I"
                title="Funciones en Python"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              📦 Tipos de funciones
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Función básica
                </h3>
                <p className="text-gray-700 mb-4">
                  Función sin parámetros que devuelve un saludo:
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-blue-400">def</span>{" "}
                  <span className="text-green-400">saludar</span>():
                  <br />
                  <span className="ml-4">
                    <span className="text-blue-400">return</span>{" "}
                    <span className="text-yellow-300">"¡Hola Mundo!"</span>
                  </span>
                  <br />
                  <br />
                  <span className="text-green-400">print</span>(saludar()){" "}
                  <span className="text-gray-400"># ¡Hola Mundo!</span>
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Función con parámetros
                </h3>
                <p className="text-gray-700 mb-4">
                  Función que recibe un nombre y devuelve un saludo
                  personalizado:
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-blue-400">def</span>{" "}
                  <span className="text-green-400">saludar_personalizado</span>
                  (nombre):
                  <br />
                  <br />
                  <br />
                  <span className="text-green-400">print</span>
                  (saludar_personalizado(
                  <span className="text-yellow-300">"Ana"</span>)){" "}
                  <span className="text-gray-400"># ¡Hola Ana!</span>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Función con valor por defecto
                </h3>
                <p className="text-gray-700 mb-4">
                  Parámetros con valores predeterminados:
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-blue-400">def</span>{" "}
                  <span className="text-green-400">potencia</span>(base,
                  exponente=
                  <span className="text-yellow-300">2</span>):
                  <br />
                  <span className="ml-4">
                    <span className="text-blue-400">return</span> base{" "}
                    <span className="text-pink-400">**</span> exponente
                  </span>
                  <br />
                  <br />
                  <span className="text-green-400">print</span>(potencia(
                  <span className="text-yellow-300">3</span>)){" "}
                  <span className="text-gray-400"># 9 (3^2)</span>
                  <br />
                  <span className="text-green-400">print</span>(potencia(
                  <span className="text-yellow-300">3</span>,{" "}
                  <span className="text-yellow-300">3</span>)){" "}
                  <span className="text-gray-400"># 27 (3^3)</span>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Función lambda
                </h3>
                <p className="text-gray-700 mb-4">
                  Función anónima para operaciones simples:
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-pink-400">duplicar</span> ={" "}
                  <span className="text-blue-400">lambda</span> x: x{" "}
                  <span className="text-pink-400">*</span>{" "}
                  <span className="text-yellow-300">2</span>
                  <br />
                  <span className="text-green-400">print</span>(duplicar(
                  <span className="text-yellow-300">5</span>)){" "}
                  <span className="text-gray-400"># 10</span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con funciones
            </h2>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicios
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    1. Calculadora básica
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Crea una función{" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      calculadora
                    </span>{" "}
                    que reciba dos números y una operación ("suma", "resta",
                    etc.) y devuelva el resultado.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    2. Factorial
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Implementa una función{" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      factorial
                    </span>
                    que calcule el factorial de un número (n! = n × (n-1) × ...
                    × 1).
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    3. Filtro de palabras
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Escribe una función{" "}
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      filtrar_palabras
                    </span>
                    que reciba una lista de palabras y un número n, y devuelva
                    solo las palabras con más de n caracteres.
                  </p>
                </div>
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}
