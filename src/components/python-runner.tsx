import { Editor } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Sk: {
      configure: (options: {
        output: (text: string) => void;
        read: (x: string) => string;
      }) => void;
      importMainWithBody: (
        name: string,
        async: boolean,
        code: string,
        auto: boolean
      ) => Promise<void>;
      builtinFiles: {
        files: {
          [key: string]: string;
        };
      };
      pre?: string;
      onAfterImport?: () => void;
    };
  }
}

const PythonEditor = () => {
  const [code, setCode] = useState("# escribe tu código aquí\n");
  const [output, setOutput] = useState("");
  const [skulptReady, setSkulptReady] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadSkulpt = async () => {
      const script1 = document.createElement("script");
      script1.src = "https://cdn.jsdelivr.net/npm/skulpt@1.2.0/skulpt.min.js";
      script1.async = true;
      script1.onload = () => console.log("✅ skulpt.min.js cargado");

      const script2 = document.createElement("script");
      script2.src = "https://cdn.jsdelivr.net/npm/skulpt@1.2.0/skulpt-stdlib.js";
      script2.async = true;
      script2.onload = () => console.log("✅ skulpt-stdlib.js cargado");

      document.body.appendChild(script1);
      document.body.appendChild(script2);

      const interval = setInterval(() => {
        const Sk = window.Sk;
        if (Sk && Sk.configure) {
          Sk.configure({
            read: (x: string) => Sk.builtinFiles["files"][x],
            output: () => {},
          });
          Sk.pre = "output";
          Sk.onAfterImport = () => {
            clearInterval(interval);
            setSkulptReady(true);
            console.log("✅ Skulpt totalmente listo");
          };
          Sk.importMainWithBody("<stdin>", false, "print('ready')", true);
        }
      }, 300);
    };

    loadSkulpt();
  }, []);

  const runCode = () => {
    setOutput("");

    const Sk = window.Sk;

    if (!Sk || !Sk.configure) {
      setOutput("⚠️ Skulpt aún no está cargado.");
      return;
    }

    Sk.configure({
      output: (text: string) => {
        setOutput((prev) => prev + text);
      },
      read: (x: string) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
          throw new Error(`Archivo no encontrado: '${x}'`);
        }
        return Sk.builtinFiles["files"][x];
      },
    });

    Sk.importMainWithBody("<stdin>", false, code, true).catch((err: unknown) => {
      setOutput((prev) => prev + `\n❌ Error: ${String(err)}`);
    });
  };

  const clearEditor = () => {
    setCode("");
    setOutput("");
  };

  return (
    <div className="flex flex-col mx-auto bg-blue-200 rounded-2xl p-4 shadow-lg">
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
      <div className="mt-4 p-4 bg-black text-green-400 rounded h-40 overflow-auto font-mono">
        <pre className="bg-gray-900 text-green-300 p-4 rounded overflow-x-auto min-h-[100px] whitespace-pre-wrap">
          {output || "Salida aquí..."}
        </pre>
      </div>
    </div>
  );
};

export default PythonEditor;
