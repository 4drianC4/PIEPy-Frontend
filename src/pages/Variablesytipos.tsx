import PythonEditor from "@/components/python-runner";

export default function VariablesYTipos() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Variables y Tipos de Datos</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">¿Qué son las variables?</h2>
        <p className="text-gray-700">
          En Python, las variables son contenedores para almacenar valores de
          datos. No necesitas declarar el tipo de variable, Python lo infiere
          automáticamente.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video explicativo</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/TbcEqkabAWU"
            title="Variables en Python"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tipos básicos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Ejemplos:</h3>
            <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono space-y-2">
              <code>entero = 42</code>
              <br />
              <code>flotante = 3.14</code>
              <br />
              <code>texto = "Hola"</code>
              <br />
              <code>booleano = True</code>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Operaciones comunes:</h3>
            <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono space-y-2">
              <code>suma = 5 + 3</code>
              <br />
              <code>concatenacion = "Hola" + " Mundo"</code>
              <br />
              <code>type(entero) # Devuelve tipo</code>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Practica con variables</h2>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="font-medium mb-2">
            Intenta crear diferentes variables:
          </p>
          <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
            nombre = "TuNombre"
            <br />
            edad = 25
            <br />
            altura = 1.75
            <br />
            estudiante = True
          </div>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
