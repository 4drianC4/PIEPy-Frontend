import PythonEditor from "@/components/python-runner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Condicionales() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Estructuras{" "}
              <span className="text-python-blue">Condicionales</span>
            </h1>
            <p className="text-xl text-gray-600">
              Controla el flujo de tu programa tomando decisiones
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              If, elif, else
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Las estructuras condicionales permiten que tu programa tome
              decisiones y ejecute diferentes bloques de código según si una
              condición es verdadera (True) o falsa (False). Python usa
              indentación (sangría) para definir los bloques de código, lo que
              lo hace muy legible.
            </p>
            <p className="text-lg text-gray-700">
              La estructura básica comienza con{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                if
              </span>
              , puede incluir múltiples condiciones con{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                elif
              </span>
              , y terminar con un bloque opcional{" "}
              <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                else
              </span>
              que se ejecuta cuando ninguna condición previa fue verdadera.
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
                src="https://www.youtube.com/embed/8ext9G7xspg"
                title="Condicionales en Python"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              📝 Ejemplos prácticos
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Condicional simple
                </h3>
                <p className="text-gray-700 mb-4">
                  Verifica si una persona es mayor de edad:
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-pink-400">edad</span> ={" "}
                  <span className="text-yellow-300">20</span>
                  <br />
                  <span className="text-blue-400">if</span> edad{" "}
                  <span className="text-pink-400">{">="}</span>{" "}
                  <span className="text-yellow-300">18</span>:<br />
                  <span className="text-gray-400 ml-4">
                    # Bloque que se ejecuta si la condición es True
                  </span>
                  <br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(
                    <span className="text-yellow-300">"Mayor de edad"</span>)
                  </span>
                  <br />
                  <span className="text-blue-400">else</span>:<br />
                  <span className="text-gray-400 ml-4">
                    # Bloque que se ejecuta si la condición es False
                  </span>
                  <br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(
                    <span className="text-yellow-300">"Menor de edad"</span>)
                  </span>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Múltiples condiciones
                </h3>
                <p className="text-gray-700 mb-4">
                  Clasifica una nota en letras (A, B, C, etc.):
                </p>
                <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                  <span className="text-pink-400">nota</span> ={" "}
                  <span className="text-yellow-300">85</span>
                  <br />
                  <span className="text-blue-400">if</span> nota{" "}
                  <span className="text-pink-400">{">="}</span>{" "}
                  <span className="text-yellow-300">90</span>:<br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(
                    <span className="text-yellow-300">"A"</span>)
                  </span>
                  <br />
                  <span className="text-blue-400">elif</span> nota{" "}
                  <span className="text-pink-400">{">="}</span>{" "}
                  <span className="text-yellow-300">80</span>:<br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(
                    <span className="text-yellow-300">"B"</span>)
                  </span>
                  <br />
                  <span className="text-blue-400">elif</span> nota{" "}
                  <span className="text-pink-400">{">="}</span>{" "}
                  <span className="text-yellow-300">70</span>:<br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(
                    <span className="text-yellow-300">"C"</span>)
                  </span>
                  <br />
                  <span className="text-blue-400">else</span>:<br />
                  <span className="ml-4">
                    <span className="text-green-400">print</span>(
                    <span className="text-yellow-300">"Reprobado"</span>)
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Crea tus propias condiciones
            </h2>

            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio
              </h3>
              <p className="text-gray-700 mb-4">Escribe un programa que:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>
                  Pida al usuario su edad (puedes usar{" "}
                  <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                    input()
                  </span>
                  )
                </li>
                <li>
                  Verifique si es mayor de 18 años y muestre un mensaje
                  apropiado
                </li>
                <li>
                  Si es menor, que indique cuántos años faltan para ser mayor de
                  edad
                </li>
              </ul>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}
