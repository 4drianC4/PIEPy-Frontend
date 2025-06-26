import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function IntroduccionPython() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-4xl mx-auto py-8 px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">
              Introducción a <span className="text-python-blue">Python</span>
            </h1>
            <p className="text-xl text-gray-600">
              Descubre el lenguaje de programación más versátil y popular del
              mundo
            </p>
          </div>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-python-blue text-white p-2 rounded-full">
                <Play className="w-5 h-5" />
              </span>
              ¿Qué es Python?
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Python es un lenguaje de programación interpretado de alto nivel,
              conocido por su sintaxis clara y legible que se asemeja al inglés.
              Es multiparadigma, soportando programación orientada a objetos,
              imperativa y funcional. Creado por Guido van Rossum en 1991,
              Python se ha convertido en uno de los lenguajes más populares en
              áreas como ciencia de datos, inteligencia artificial, desarrollo
              web y automatización.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                ✨ Características principales
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span>Sintaxis simple y fácil de aprender</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span>Tipado dinámico (no declaras tipos)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span>Multiplataforma (Windows, Mac, Linux)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-blue-100 text-blue-800 p-1 rounded-full">
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
                  <span>Gran ecosistema de librerías (más de 300,000)</span>
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
                src="https://www.youtube.com/embed/_uQrJ0TkZlc"
                title="Introducción a Python"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </section>

          <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              👋 Tu primer programa
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La tradición en programación es comenzar con un simple "Hola
              Mundo". En Python, esto es increíblemente sencillo gracias a su
              sintaxis minimalista.
            </p>

            <div className="bg-gray-800 text-gray-100 p-6 rounded-lg font-mono text-lg mb-6">
              <span className="text-green-400">print</span>(
              <span className="text-yellow-300">"¡Hola Mundo!"</span>)
            </div>

            <div className="flex justify-end">
              <Button className="gap-2 bg-python-blue hover:bg-blue-700">
                <Play className="w-4 h-4" />
                Ejecutar código
              </Button>
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
                Modifica el código para que muestre tu nombre en lugar de
                "Mundo". Por ejemplo:{" "}
                <span className="font-mono bg-gray-200 px-2 py-1 rounded">
                  print("¡Hola Ana!")
                </span>
              </p>
              <div className="bg-gray-800 text-gray-100 p-4 rounded font-mono">
                print("¡Hola Mundo!")
              </div>
            </div>

            <PythonEditor />
          </section>
        </div>
      </div>
    </div>
  );
}
