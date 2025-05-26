import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  className?: string;
  onSelect?: (topic: string) => void;
}

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
  "5. Testing y buenas prácticas"
];

const Sidebar: React.FC<SidebarProps> = ({ className, onSelect }) => {
  const isMobile = useIsMobile();
  const [activeTopic, setActiveTopic] = useState("");
  const [openLevel, setOpenLevel] = useState<"basic" | "intermed" | "advanced" | null>(null);
  const [showLevels, setShowLevels] = useState(false);

  if (isMobile) return null;

  const handleClick = (topic: string) => {
    setActiveTopic(topic);
    onSelect?.(topic);
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
    <div className={cn("w-64 bg-python-blue text-white min-h-screen p-6", className)}>
      
      <div className="flex flex items-center space-x-2 mb-8">
        
        <div className="w-12 h-12 rounded-full bg-black"></div>
      
      </div>

      <h2 className="text-xl font-semibold mb-4 cursor-pointer hover:underline" onClick={() => setShowLevels(!showLevels)}>
        Niveles
      </h2>

      <AnimatePresence>
        {showLevels && (
          <>
            <ul className="space-y-2 text-md font-semibold">
              <li onClick={() => toggleLevel("basic")} className="cursor-pointer hover:underline hover:bg-[#71AFD9] rounded-md px-2 py-1">
                • Básico
              </li>
              <AnimatePresence>{openLevel === "basic" && renderTopics(topicsBasic)}</AnimatePresence>

              <li onClick={() => toggleLevel("intermed")} className="cursor-pointer hover:underline hover:bg-[#71AFD9] rounded-md px-2 py-1">
                • Intermedio
              </li>
              <AnimatePresence>{openLevel === "intermed" && renderTopics(topicsIntermed)}</AnimatePresence>

              <li onClick={() => toggleLevel("advanced")} className="cursor-pointer hover:underline hover:bg-[#71AFD9] rounded-md px-2 py-1">
                • Avanzado
              </li>
              <AnimatePresence>{openLevel === "advanced" && renderTopics(topicsAdvanced)}</AnimatePresence>
            </ul>
          </>
        )}
      </AnimatePresence>
      
    </div>
  );
};

export default Sidebar;
