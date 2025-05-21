import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const topicsBasic = [
  "1. Introducción a Python (Teoría de historia, instalación, print())",
  "2. Variables y tipos (Teoría + ejemplos interactivos)",
  "3. Condicionales (if, else, elif)",
  "4. Bucles (Teoría de for y while)",
  "5. Funciones"
];

const topicsIntermed = [
  "1. Listas y tuplas (Teoría + ejercicios manipulando estructuras)",
  "2. Funciones avanzadas (args, kwargs)",
  "3. Módulos y paquetes",
  "4. Manejo de errores",
  "5. Lectura y escritura de archivos"
];

const topicsAdvanced = [
  "1. Programación orientada a objetos (OOP)",
  "2. API REST con requests",
  "3. Librerías gráficas (Tkinter o PyGame)",
  "4. Proyectos colaborativos (Git)",
  "5. Testing y buenas prácticas",
  "6. Certificado"
];

export function Sidebar({ onSelect }: { onSelect: (topic: string) => void }) {
  const [activeTopic, setActiveTopic] = useState("");
  const [openLevel, setOpenLevel] = useState<"basic" | "intermed" | "advanced" | null>(null);
  const [showLevels, setShowLevels] = useState(false);

  const handleClick = (topic: string) => {
    setActiveTopic(topic);
    onSelect(topic);
  };

  const toggleLevel = (level: "basic" | "intermed" | "advanced") => {
    setOpenLevel(prev => (prev === level ? null : level));
  };

  const renderTopics = (topics: string[]) => (
    <motion.ul
      className="space-y-2 mt-2 bg-[#71AFD9] text-black/70 rounded-md px-2 py-1"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {topics.map((topic) => (
        <li
          key={topic}
          className={`cursor-pointer p-2 rounded-md transition-colors ${
            activeTopic === topic
              ? "bg-[#71AFD9] text-white font-semibold"
              : "hover:bg-[#A3CEF1] text-white-900"
          }`}
          onClick={() => handleClick(topic)}
        >
          <a className="hover:underline">{topic}</a>
        </li>
      ))}
    </motion.ul>
  );

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

      <AnimatePresence>
        {showLevels && (
          <>
            <ul>
              <li
                className="cursor-pointer p-2 rounded-md font-semibold bg-[#274C77] hover:underline hover:bg-[#71AFD9] text-lg text-white"
                onClick={() => toggleLevel("basic")}
              >
                • Básico
              </li>
              <AnimatePresence>
                {openLevel === "basic" && renderTopics(topicsBasic)}
              </AnimatePresence>
            </ul>

            <ul className="mt-4">
              <li
                className="cursor-pointer p-2 rounded-md font-semibold bg-[#274C77] hover:underline hover:bg-[#71AFD9] text-lg text-white"
                onClick={() => toggleLevel("intermed")}
              >
                • Intermedio
              </li>
              <AnimatePresence>
                {openLevel === "intermed" && renderTopics(topicsIntermed)}
              </AnimatePresence>
            </ul>

            <ul className="mt-4">
              <li
                className="cursor-pointer p-2 rounded-md font-semibold bg-[#274C77] hover:underline hover:bg-[#71AFD9] text-lg text-white"
                onClick={() => toggleLevel("advanced")}
              >
                • Avanzado
              </li>
              <AnimatePresence>
                {openLevel === "advanced" && renderTopics(topicsAdvanced)}
              </AnimatePresence>
            </ul>
          </>
        )}
      </AnimatePresence>
    </aside>
  );
}
