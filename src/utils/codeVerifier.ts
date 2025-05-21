// This is a simple code verification utility that could be expanded with a proper Python parser
// For now, it uses regex patterns to check for specific code patterns

export interface VerificationResult {
  isCorrect: boolean;
  feedback: string;
  details?: string[];
}

export const verifyPythonCode = (userCode: string, expectedPattern: RegExp): VerificationResult => {
  if (expectedPattern.test(userCode)) {
    return {
      isCorrect: true,
      feedback: "¡Gran Trabajo! El código es Correcto."
    };
  }
  
  // Simple error detection
  const details: string[] = [];
  
  if (!/class\s+\w+/.test(userCode)) {
    details.push("No se encontró la definición de la clase.");
  } else if (!/def\s+__init__/.test(userCode)) {
    details.push("Falta el método __init__ en la clase.");
  } else if (!/self\./.test(userCode)) {
    details.push("No se está utilizando 'self' para asignar atributos.");
  }
  
  return {
    isCorrect: false,
    feedback: "Tu código no cumple con los requisitos.",
    details
  };
};

export const verifyChallenges = {
  circleClass: (code: string): VerificationResult => {
    // Check for a Circle class definition with an __init__ method that sets a radius
    // and creates an instance with radius 5
    const pattern = /class\s+Circle.*?def\s+__init__.*?self\.radius.*?circle\s*=\s*Circle\(\s*5\s*\)/s;
    return verifyPythonCode(code, pattern);
  }
};
