import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function Archivos() {
  return (
    <div className="p-6">
      <TopicDetail topic="Manejo de Archivos" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Ejemplo: Leer archivo</h3>
        <p className="mb-4">Python hace fácil trabajar con archivos:</p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`# Abrir y leer un archivo
with open('mi_archivo.txt', 'r') as file:
    contenido = file.read()
    print(contenido)`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
