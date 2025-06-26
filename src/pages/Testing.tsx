import { TopicDetail } from "../components/learning-module/topic-detail";
import PythonEditor from "../components/python-runner";

export default function Testing() {
  return (
    <div className="p-6">
      <TopicDetail topic="Testing en Python" />
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">
          Ejemplo: Prueba unitaria con unittest
        </h3>
        <p className="mb-4">
          Python incluye el módulo unittest para pruebas automatizadas:
        </p>
        <div className="bg-gray-100 p-4 rounded mb-4">
          <pre>{`import unittest

def suma(a, b):
    return a + b

class TestSuma(unittest.TestCase):
    def test_suma_positivos(self):
        self.assertEqual(suma(2, 3), 5)

    def test_suma_negativos(self):
        self.assertEqual(suma(-1, -1), -2)

if __name__ == '__main__':
    unittest.main()`}</pre>
        </div>
        <PythonEditor />
      </div>
    </div>
  );
}
