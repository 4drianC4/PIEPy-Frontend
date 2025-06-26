import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function Funciones() {
  return (
    <div className="p-6">
      <TopicDetail topic="Funciones en Python" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Ejemplo: Función básica</h3>
        <p className="mb-4">
          Las funciones permiten organizar y reutilizar código. Aquí un ejemplo
          simple:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`def saludar(nombre):
    return f"Hola {nombre}!"

print(saludar("Ana"))`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
