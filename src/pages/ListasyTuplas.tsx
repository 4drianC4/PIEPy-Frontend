import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function ListasTuplas() {
  return (
    <div className="p-6">
      <TopicDetail topic="Listas y Tuplas" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Ejemplo: Operaciones con listas
        </h3>
        <p className="mb-4">
          Las listas son mutables mientras que las tuplas son inmutables:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`# Lista (mutable)
numeros = [1, 2, 3]
numeros.append(4)

# Tupla (inmutable)
colores = ('rojo', 'verde', 'azul')`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
