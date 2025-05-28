import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

// 👉 Agregamos este tipo para que TypeScript no se queje
interface LoadPyodideOptions {
  indexURL: string;
}

interface PyodideInterface {
  runPython: (code: string) => any;
  runPythonAsync: (code: string) => Promise<any>;
}

declare global {
  interface Window {
    loadPyodide: (options: LoadPyodideOptions) => Promise<PyodideInterface>;
  }
}


const PythonEditor = () => {
  const [code, setCode] = useState("# Escribe tu código Python aquí 🐍\n");
  const [output, setOutput] = useState("⏳ Cargando Pyodide...");
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadPyodide = async () => {
      setOutput("⏳ Cargando Pyodide...");
      try {
        const pyodideInstance = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/",
        });
        setPyodide(pyodideInstance);
        setOutput("✅ Pyodide listo. ¡Escribe y ejecuta tu código!");
      } catch (err) {
        setOutput(`❌ Error cargando Pyodide: ${String(err)}`);
      }
    };

    if (!window.loadPyodide) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";
      script.onload = loadPyodide;
      document.body.appendChild(script);
    } else {
      loadPyodide();
    }
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput("⚠️ Pyodide aún no está listo...");
      return;
    }

    try {
      setOutput("▶️ Ejecutando código...");

      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = sys.stdout
      `);

      await pyodide.runPythonAsync(code);

      const outputText = pyodide.runPython("sys.stdout.getvalue()");
      setOutput(`✅ Resultado:\n${outputText || "(sin salida)"}`);
    } catch (err) {
      setOutput(`❌ Error de ejecución:\n${String(err)}`);
    }

    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  };

  const clearEditor = () => {
    setCode("");
    setOutput("🧼 Editor y consola limpiados.");
  };

  return (
    <div className="flex flex-col mx-auto bg-purple-100 dark:bg-gray-800 rounded-2xl p-4 shadow-lg transition-all">
      <Editor
        height="300px"
        defaultLanguage="python"
        value={code}
        onChange={(value: string | undefined) => setCode(value || "")}
        className="w-full border border-gray-300 rounded-md font-mono text-sm"
        theme="vs-dark"
      />
      <div className="flex gap-4 mt-2">
        <button
          onClick={runCode}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Ejecutar código
        </button>
        <button
          onClick={clearEditor}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
        >
          Limpiar editor
        </button>
      </div>
      <div
        ref={outputRef}
        className="mt-4 p-4 bg-black text-green-400 rounded h-40 overflow-auto font-mono"
      >
        <pre className="whitespace-pre-wrap">{output}</pre>
      </div>
    </div>
  );
};

export default PythonEditor;
