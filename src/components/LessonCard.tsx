// src/components/LessonCard.tsx
import React, { useState } from 'react';
import CodeEditor from './CodeEditor';

interface LessonCardProps {
  title: string;
  description: string;
  exampleCode: string;
  exerciseDescription: string;
  initialCode: string;
  expectedSolution: string;
}

const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  exampleCode,
  exerciseDescription,
  initialCode,
  expectedSolution
}) => {
  const [feedback, setFeedback] = useState<{message: string, isCorrect: boolean} | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const handleCodeCheck = (isCorrect: boolean, userCode: string) => {
    if (isCorrect) {
      setFeedback({
        message: "¡Gran Trabajo! El código es Correcto.",
        isCorrect: true
      });
      setShowSolution(false);
    } else {
      setFeedback({
        message: "El código no es correcto. Inténtalo de nuevo o revisa la solución.",
        isCorrect: false
      });
      setShowSolution(true);
    }
  };

  return (
    <div className="bg-blue-200 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>
      
      <div className="bg-gray-50 p-4 rounded-md mb-6">
        <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">{exampleCode}</pre>
      </div>
      
      <div className="mb-4 text-gray-700">
        <p>{exerciseDescription}</p>
      </div>
      
      <CodeEditor 
        initialCode={initialCode}
        expectedSolution={expectedSolution}
        onCheck={handleCodeCheck}
      />
      
      {feedback && (
        <div className={`mt-4 p-3 rounded ${feedback.isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
          <p className={feedback.isCorrect ? 'text-green-800' : 'text-red-800'}>
            {feedback.message}
          </p>
          
          {showSolution && (
            <div className="mt-2">
              <details>
                <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                  Ver solución
                </summary>
                <div className="mt-2 p-3 bg-white rounded">
                  <pre className="whitespace-pre-wrap font-mono text-sm text-gray-800">{expectedSolution}</pre>
                </div>
              </details>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LessonCard; // Asegúrate de que tiene export default