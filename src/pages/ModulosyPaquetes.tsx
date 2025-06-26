import { TopicDetail } from "../components/learning-module/topic-detail";

export default function ModulosPaquetes() {
  return (
    <div className="p-6">
      <TopicDetail topic="Módulos y Paquetes" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Ejemplo: Importar módulo</h3>
        <p className="mb-4">Python viene con muchos módulos estándar:</p>
        <div className="bg-gray-100 p-4 rounded">
          <pre>{`# Importar módulo math
import math

print(math.sqrt(16))  # Output: 4.0`}</pre>
        </div>
      </div>
    </div>
  );
}
