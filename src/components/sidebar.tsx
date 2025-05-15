import { useState } from "react";

const topics = [
  "1. Introducción a Python (Teoría de historia, instalación, print())",
  "2. Variables y tipos (Teoría + ejemplos interactivos)",
  "3. Condicionales (if, else, elif)",
  "4. Bucles (Teoría de for y while)",
  "5. Funciones"
];

export function Sidebar({ onSelect }: { onSelect: (topic: string) => void }) {
  const [active, setActive] = useState("");
  const [showBasic, setShowBasic] = useState(false);
  const [showLevels, setShowLevels] = useState(false);

  const handleClick = (topic: string) => {
    setActive(topic);
    onSelect(topic);
  };

  return (
    <aside className="w-64 min-h-screen bg-[#274C77] p-4 shadow-md text-blue-900 font-medium">
      <ul>
        <li
          className="cursor-pointer p-2 rounded-md font-bold text-white text-xl hover:underline hover:bg-[#71AFD9]"
          onClick={() => setShowLevels(!showLevels)}
        >
          Nivel
        </li>
      </ul>

      {showLevels && (
        <>
          <ul>
            <li
              className="cursor-pointer p-2 rounded-md font-semibold bg-[#274C77] hover:underline hover:bg-[#71AFD9] text-lg text-white"
              onClick={() => setShowBasic(!showBasic)}
            >
              • Básico
            </li>
          </ul>

          {showBasic && (
            <ul className="space-y-2 mt-2 bg-[#71AFD9] text-black/70">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className={`cursor-pointer p-2 rounded-md transition-colors ${
                    active === topic
                      ? "bg-[#71AFD9] text-white font-semibold"
                      : "hover:bg-[#A3CEF1] text-white-900"
                  }`}
                  onClick={() => handleClick(topic)}
                >
                  <a className="hover:underline">{topic}</a>
                </li>
              ))}
            </ul>
          )}
          
          <ul className="mt-4 space-y-1">
            <li className="cursor-pointer p-2 rounded-md font-semibold hover:underline hover:bg-[#71AFD9] text-lg text-white">
              • Intermedio
            </li>
            <li className="cursor-pointer p-2 rounded-md font-semibold hover:underline hover:bg-[#71AFD9] text-lg text-white">
              • Avanzado
            </li>
          </ul>
        </>
      )}
    </aside>
  );
}
