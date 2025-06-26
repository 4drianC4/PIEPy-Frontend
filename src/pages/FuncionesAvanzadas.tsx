import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function FuncionesAvanzadas() {
  return (
    <div className="p-6">
      <TopicDetail topic="Funciones Avanzadas" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Ejemplo: Funciones lambda
        </h3>
        <p className="mb-4">
          Funciones anónimas útiles para operaciones simples:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`# Función lambda para elevar al cuadrado
cuadrado = lambda x: x ** 2
print(cuadrado(5))  # Output: 25`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
