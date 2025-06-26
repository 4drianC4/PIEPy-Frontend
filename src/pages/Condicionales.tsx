import PythonEditor from "@/components/python-runner";

export default function Condicionales() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Estructuras Condicionales</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">If, elif, else</h2>
        <p className="text-gray-700">
          Las condicionales permiten ejecutar bloques de código sólo si se
          cumple cierta condición.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video explicativo</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/8ext9G7xspg"
            title="Condicionales en Python"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Ejemplos prácticos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Condicional simple:</h3>
            <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
              <code>if edad {">="} 18:</code>
              <br />
              <code className="ml-4">print("Mayor de edad")</code>
              <br />
              <code>else:</code>
              <br />
              <code className="ml-4">print("Menor de edad")</code>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Múltiples condiciones:</h3>
            <div className="bg-gray-800 text-gray-100 p-3 rounded font-mono">
              <code>if nota {">="} 90:</code>
              <br />
              <code className="ml-4">print("A")</code>
              <br />
              <code>elif nota {">="} 80:</code>
              <br />
              <code className="ml-4">print("B")</code>
              <br />
              <code>else:</code>
              <br />
              <code className="ml-4">print("Reprobado")</code>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Crea tus propias condiciones</h2>
        <PythonEditor />
      </div>
    </div>
  );
}
