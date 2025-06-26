import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function ManejoErrores() {
  return (
    <div className="p-6">
      <TopicDetail topic="Manejo de Errores" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Ejemplo: Try/Except</h3>
        <p className="mb-4">Manejo elegante de excepciones:</p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("¡No se puede dividir por cero!")`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
