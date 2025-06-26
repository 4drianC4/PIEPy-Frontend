import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function ApiRest() {
  return (
    <div className="p-6">
      <TopicDetail topic="APIs REST con Python" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Ejemplo: Cliente API con requests
        </h3>
        <p className="mb-4">
          La librería requests es estándar para consumir APIs REST:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`# Necesitarás instalar: pip install requests
import requests

response = requests.get('https://jsonplaceholder.typicode.com/todos/1')
if response.status_code == 200:
    data = response.json()
    print(f"Título: {data['title']}")
else:
    print(f"Error: {response.status_code}")`}</pre>
        </div>
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mb-4">
          <p className="text-blue-700">
            Nota: Este código hace una petición real a una API pública. Puedes
            ejecutarlo para ver el resultado.
          </p>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
