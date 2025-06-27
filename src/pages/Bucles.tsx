import PythonEditor from "@/components/python-runner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Bucles() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Bucles en <span className="text-python-blue">Python</span>
            </h1>
            <p className="text-xl text-gray-600">
              Automatiza tareas repetitivas y procesa colecciones de datos
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </span>
              While y For
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Los bucles permiten ejecutar un bloque de código múltiples veces,
              lo que es esencial para automatizar tareas repetitivas. Python
              ofrece dos tipos principales de bucles:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold mb-2 text-gray-800">
                  Bucle while
                </h3>
                <p className="text-gray-700">
                  Repite un bloque mientras una condición sea verdadera. Útil
                  cuando no sabes cuántas iteraciones necesitas.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold mb-2 text-gray-800">Bucle for</h3>
                <p className="text-gray-700">
                  Itera sobre los elementos de una secuencia (lista, cadena,
                  rango, etc.). Ideal para recorrer colecciones.
                </p>
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
                src="https://www.youtube.com/embed/0QeZhC7Y0-4"
                title="Bucles en Python"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              🔄 Ejemplos de bucles
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Bucle while
                </h3>
                <p className="text-gray-700 mb-4">Contador del 0 al 4:</p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-pink-400">contador</span> ={" "}
                  <span className="text-yellow-300">0</span>
                  <br />
                  <span className="text-blue-400">while</span> contador{" "}
                  <span className="text-pink-400">{"<"}</span>{" "}
                  <span className="text-yellow-300">5</span>:<br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(contador)
                  </span>
                  <br />
                  <span className="ml-4">
                    contador <span className="text-pink-400">+=</span>{" "}
                    <span className="text-yellow-300">1</span>{" "}
                    <span className="text-gray-400">
                      # Incrementa el contador
                    </span>
                  </span>
                  <br />
                  <span className="text-gray-400"># Salida: 0 1 2 3 4</span>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  ⚠️ Importante: Asegúrate que la condición eventualmente sea
                  falsa para evitar bucles infinitos.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Bucle for
                </h3>
                <p className="text-gray-700 mb-4">
                  Recorrer una lista de frutas:
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-pink-400">frutas</span> = [
                  <span className="text-yellow-300">"manzana"</span>,{" "}
                  <span className="text-yellow-300">"banana"</span>,{" "}
                  <span className="text-yellow-300">"naranja"</span>]<br />
                  <span className="text-blue-400">for</span> fruta{" "}
                  <span className="text-blue-400">in</span> frutas:
                  <br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(fruta)
                  </span>
                  <br />
                  <span className="text-gray-400">
                    # Salida: manzana banana naranja
                  </span>
                  <br />
                  <br />
                  <span className="text-blue-400">for</span> i{" "}
                  <span className="text-blue-400">in</span>{" "}
                  <span className="text-green-400">range</span>(
                  <span className="text-yellow-300">3</span>):
                  <br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(i)
                  </span>
                  <br />
                  <span className="text-gray-400"># Salida: 0 1 2</span>
                </div>
                <p className="text-gray-700 mt-4 text-sm">
                  range(n) genera una secuencia de números desde 0 hasta n-1
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con bucles
            </h2>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicios
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    1. Suma de números
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Escribe un programa que sume todos los números del 1 al 10
                    usando un bucle for.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    2. Adivina el número
                  </h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Crea un juego donde el usuario deba adivinar un número
                    secreto (por ejemplo, 7). Usa un bucle while para seguir
                    pidiendo al usuario que adivine hasta que acierte.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    3. Tabla de multiplicar
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Muestra la tabla de multiplicar del 5 (del 1 al 10) usando
                    un bucle for.
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
