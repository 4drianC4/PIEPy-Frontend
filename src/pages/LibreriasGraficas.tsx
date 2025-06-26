import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function LibreriasGraficas() {
  return (
    <div className="p-6">
      <TopicDetail topic="Librerías Gráficas" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Ejemplo: Gráfico simple con Matplotlib
        </h3>
        <p className="mb-4">
          Matplotlib es la librería más popular para visualización:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`# Necesitarás instalar: pip install matplotlib
import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [1, 4, 9, 16]

plt.plot(x, y)
plt.xlabel('Eje X')
plt.ylabel('Eje Y')
plt.title('Gráfico de ejemplo')
plt.show()`}</pre>
        </div>
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="text-yellow-700">
            Nota: Los gráficos no se mostrarán en este editor, pero puedes
            probar el código en tu entorno local.
          </p>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
