
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CodeEditorProps {
  className?: string;
  initialCode: string;
  expectedSolution: string;
  onCheck: (isCorrect: boolean, userCode: string) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  className,
  initialCode,
  expectedSolution,
  onCheck
}) => {
  const [code, setCode] = useState('');

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const checkCode = () => {
    // Simple solution verification - this would be replaced with a more robust parser in a real app
    const userCodeNormalized = code.replace(/\s+/g, ' ').trim();
    
    // Extract core pattern for Circle class with __init__ and radius
    const hasCircleClass = /class\s+Circle/.test(userCodeNormalized);
    const hasInitMethod = /__init__/.test(userCodeNormalized);
    const hasRadiusAssignment = /self\.radius/.test(userCodeNormalized);
    const hasCircleInstance = /circle\s*=\s*Circle\(\s*5\s*\)/.test(userCodeNormalized);
    
    const isCorrect = hasCircleClass && hasInitMethod && hasRadiusAssignment && hasCircleInstance;
    
    onCheck(isCorrect, code);
  };

  return (
    <div className={cn("rounded-md", className)}>
      <textarea
        className="w-full p-3 bg-white text-gray-800 rounded-md shadow-inner code-editor font-mono text-sm min-h-[150px]"
        value={code}
        onChange={handleCodeChange}
        placeholder="Ingrese código aquí..."
      />
      <div className="flex justify-end mt-2">
        <Button 
          onClick={checkCode}
          className="bg-blue-500 hover:bg-blue-600 text-white uppercase font-medium text-sm px-4"
        >
          RUN CODE
        </Button>
      </div>
    </div>
  );
};

export default CodeEditor;
