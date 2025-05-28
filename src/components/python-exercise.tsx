import React, { useState, useEffect } from "react";


const PythonExercise = ({ initialCode, expectedOutput }) => {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");


  useEffect(() => {
    const loadPyodide = async () => {
      const pyodideInstance = await loadPyodide();
      setPyodide(pyodideInstance);
    };
    loadPyodide();
  }, []);

  const runAndCheck = async () => {
    if (!pyodide) return;

    try {
      pyodide.setStdout({ batched: (text) => setOutput(text) });
      pyodide.setStderr({ batched: (text) => setOutput(text) });

      await pyodide.runPythonAsync(code);

      if (output.trim() === expectedOutput.trim()) {
        setResult("✅ ¡Correcto!");
      } else {
        setResult(`❌ Incorrecto. Esperado: "${expectedOutput}"`);
      }
    } catch (err) {
      setOutput(err.toString());
      setResult("❌ Error en el código.");
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <textarea
        className="w-full h-40 border p-2 font-mono text-sm"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={runAndCheck}
      >
        Ejecutar y validar
      </button>
      <div className="mt-3 text-sm">
        <p><strong>Salida:</strong> {output}</p>
        <p><strong>Resultado:</strong> {result}</p>
      </div>
    </div>
  );
};

export default PythonExercise;
