import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const ActivityEditor: React.FC = () => {
  const [code, setCode] = useState<string>("# Escribe tu código Python aquí");

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || "");
  };

  return (
    <div className="p-4 w-full h-[500px] bg-white shadow rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Editor de Código (Python)</h2>
      <Editor
        height="400px"
        defaultLanguage="python"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default ActivityEditor;
