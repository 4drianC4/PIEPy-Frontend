import PythonEditor from "@/components/python-runner";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function VariablesYTipos() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Variables y{" "}
              <span className="text-python-blue">Tipos de Datos</span>
            </h1>
            <p className="text-xl text-gray-600">
              Aprende a almacenar y manipular información en Python
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              Fundamentos de variables
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              En Python, las variables son como contenedores que almacenan
              valores de datos. A diferencia de otros lenguajes, no necesitas
              declarar el tipo de variable explícitamente - Python lo infiere
              automáticamente según el valor que le asignes.
            </p>
            <p className="text-lg text-gray-700">
              Los nombres de variables pueden contener letras, números y guiones
              bajos, pero no pueden comenzar con números. Python es{" "}
              <span className="font-semibold">case-sensitive</span>
              (diferencia mayúsculas y minúsculas) y usa{" "}
              <span className="font-semibold">snake_case</span>
              como convención para nombres de variables.
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
                src="https://www.youtube.com/embed/TbcEqkabAWU"
                title="Variables en Python"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              📊 Tipos de datos básicos
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Tipos principales
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Enteros (int)
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>edad = 25</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Flotantes (float)
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>altura = 1.75</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Cadenas (str)
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>nombre = "Python"</code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Booleanos (bool)
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>es_verdadero = True</code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Operaciones comunes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Conversión de tipos
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>
                        str(25) <span className="text-gray-400"># "25"</span>
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Concatenación
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>
                        "Hola " + "Mundo"{" "}
                        <span className="text-gray-400"># "Hola Mundo"</span>
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Verificar tipo
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>
                        type(edad){" "}
                        <span className="text-gray-400">
                          #{" "}
                          <span className="text-green-400">
                            {"<class 'int'>"}
                          </span>
                        </span>
                      </code>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-1">
                      Operaciones matemáticas
                    </h4>
                    <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
                      <code>
                        5 + 3 <span className="text-gray-400"># 8</span>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              💻 Practica con variables
            </h2>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Ejercicio
              </h3>
              <p className="text-gray-700 mb-4">
                Crea variables para almacenar tu información personal:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Tu nombre completo (cadena de texto)</li>
                <li>Tu edad (número entero)</li>
                <li>Tu altura en metros (número decimal)</li>
                <li>Si eres estudiante o no (valor booleano)</li>
              </ul>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}
