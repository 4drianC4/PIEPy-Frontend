import PythonEditor from "@/components/python-runner";

export default function Bucles() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bucles en Python</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">While y For</h2>
        <p className="text-gray-700">
          Los bucles permiten ejecutar un bloque de código múltiples veces.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video explicativo</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0QeZhC7Y0-4"
            title="Bucles en Python"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Bucle while:</h3>
            <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
              <code>contador = 0</code>
              <br />
              <code>while contador {"<"} 5:</code>
              <br />
              <code className="ml-4">print(contador)</code>
              <br />
              <code className="ml-4">contador += 1</code>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Bucle for:</h3>
            <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
              <code>for i in range(5):</code>
              <br />
              <code className="ml-4">print(i)</code>
              <br />
              <br />
              <code>frutas = ["manzana", "banana"]</code>
              <br />
              <code>for fruta in frutas:</code>
              <br />
              <code className="ml-4">print(fruta)</code>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Practica con bucles</h2>
        <PythonEditor />
      </div>
    </div>
  );
}
