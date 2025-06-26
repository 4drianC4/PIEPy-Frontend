import PythonEditor from "@/components/python-runner";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function IntroduccionPython() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Introducción a Python</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">¿Qué es Python?</h2>
        <p className="text-gray-700">
          Python es un lenguaje de programación interpretado, de alto nivel y
          con una sintaxis clara y legible. Es multiparadigma, soportando
          programación orientada a objetos, imperativa y funcional.
        </p>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Características principales:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Sintaxis simple y fácil de aprender</li>
            <li>Tipado dinámico</li>
            <li>Multiplataforma</li>
            <li>Gran cantidad de librerías</li>
            <li>Comunidad activa</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video explicativo</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/_uQrJ0TkZlc"
            title="Introducción a Python"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Primer programa en Python</h2>
        <p className="text-gray-700">
          El clásico "Hola Mundo" es el primer programa que se escribe al
          aprender un nuevo lenguaje:
        </p>

        <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono">
          <code>print("¡Hola Mundo!")</code>
        </div>

        <div className="flex justify-end">
          <Button className="gap-2">
            <Play className="w-4 h-4" />
            Ejecutar código
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Practica lo aprendido</h2>
        {/* Mostramos el ejemplo como texto antes del editor */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-medium mb-2">Ejemplo:</p>
          <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
            print("¡Hola Mundo!")
          </div>
        </div>

        {/* Editor sin prop defaultCode */}
        <PythonEditor />
      </div>
    </div>
  );
}
