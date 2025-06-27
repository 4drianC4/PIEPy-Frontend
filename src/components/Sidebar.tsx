import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, FileCode, BarChart2, Users, Award } from "lucide-react";

interface SidebarProps {
  className?: string;
  onSelect?: (topic: string) => void;
}

const topicsBasic = [
  { title: "1. Introducción a Python", path: "/introduccion-python" },
  { title: "2. Variables y tipos", path: "/variables-y-tipos" },
  { title: "3. Condicionales", path: "/condicionales" },
  { title: "4. Bucles", path: "/bucles" },
  { title: "5. Funciones", path: "/funciones" },
];

const topicsIntermed = [
  { title: "1. Listas y tuplas", path: "/listas-y-tuplas" },
  { title: "2. Funciones avanzadas", path: "/funciones-avanzadas" },
  { title: "3. Módulos y paquetes", path: "/modulos-y-paquetes" },
  { title: "4. Manejo de errores", path: "/manejo-de-errores" },
  { title: "5. Archivos", path: "/archivos" },
];

const topicsAdvanced = [
  { title: "1. Programación orientada a objetos", path: "/programacion-oo" },
  { title: "2. API REST", path: "/api-rest" },
  { title: "3. Librerías gráficas", path: "/librerias-graficas" },
  { title: "4. Git", path: "/git" },
  { title: "5. Testing", path: "/testing" },
];

const Sidebar: React.FC<SidebarProps> = ({ className, onSelect }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [activeTopic, setActiveTopic] = useState("");
  const [openLevel, setOpenLevel] = useState<"basic" | "intermed" | "advanced" | null>(null);
  const [showOpenLevels, setShowLevels] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showCommunity, setShowCommunity] = useState(false);

  useEffect(() => {
    const isCreationRoute = [
      "/crear-seccion",
      "/crear-ejercicio",
      "/crear-examen",
    ].includes(location.pathname);

    const isCommunityRoute = [
      "/comunidad",
      "/progreso",
      "/certificaciones",
    ].includes(location.pathname);

    setShowTools(isCreationRoute);
    setShowCommunity(isCommunityRoute);

  }, [location.pathname]);

  if (isMobile) return null;

  const handleClick = (topic: string) => {
    setActiveTopic(topic);
    onSelect?.(topic);
  };

  const toggleLevel = (level: "basic" | "intermed" | "advanced") => {
    setOpenLevel((prev) => (prev === level ? null : level));
  };

  const isActive = (path: string) => location.pathname === path;

  const renderTopics = (topics: typeof topicsBasic) => (
    <motion.ul
      className="space-y-2 mt-2 bg-[#71AFD9] text-black/70 rounded-md px-2 py-1"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {topics.map((topic) => (
        <li
          key={topic.path}
          className={`cursor-pointer p-2 rounded-md transition-colors ${
            isActive(topic.path)
              ? "bg-[#71AFD9] text-white font-semibold"
              : "hover:bg-[#A3CEF1] text-white-900"
          }`}
          onClick={() => handleClick(topic.title)}
        >
          <Link to={topic.path} className="hover:underline block">
            {topic.title}
          </Link>
        </li>
      ))}
    </motion.ul>
  );

  return (
    <div
      className={cn(
        "w-64 bg-python-blue text-white min-h-screen p-6 flex flex-col fixed top-0 left-0 bottom-0 z-20 overflow-y-auto",
        className
      )}
    >
      <div className="flex items-center space-x-2 mb-8 sticky top-0 bg-python-blue pt-2 pb-4 z-10">
        <div className="w-12 h-12 rounded-full bg-black"></div>
        <span className="font-bold">Python Academy</span>
      </div>

      <div className="flex-1 space-y-6 pb-6">

        {/* Navegación Principal */}
        <div>
          <Link
            to="/"
            className={`flex items-center py-2 px-3 rounded-md mb-2 ${
              isActive("/") ? "bg-[#71AFD9] font-semibold" : "hover:bg-[#71AFD9]"
            }`}
          >
            Inicio
          </Link>
          <Link
            to="/recursos"
            className={`flex items-center py-2 px-3 rounded-md ${
              isActive("/recursos") ? "bg-[#71AFD9] font-semibold" : "hover:bg-[#71AFD9]"
            }`}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Recursos
          </Link>
        </div>

        {/* Comunidad y Progreso */}
        <div>
          <button
            className={`flex items-center justify-between w-full py-2 px-3 rounded-md ${
              showCommunity ? "bg-[#71AFD9]" : "hover:bg-[#71AFD9]"
            }`}
            onClick={() => setShowCommunity(!showCommunity)}
          >
            <span className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Comunidad
            </span>
            <span>{showCommunity ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {showCommunity && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 mt-2 space-y-2"
              >
                <Link to="/comunidad" className={`block py-2 px-3 rounded-md ${isActive("/comunidad") ? "bg-[#A3CEF1] font-semibold" : "hover:bg-[#A3CEF1]"}`}>
                  Foro Comunitario
                </Link>
                <Link to="/progreso" className={`block py-2 px-3 rounded-md ${isActive("/progreso") ? "bg-[#A3CEF1] font-semibold" : "hover:bg-[#A3CEF1]"}`}>
                  <BarChart2 className="inline w-4 h-4 mr-2" /> Mi Progreso
                </Link>
                <Link to="/certificaciones" className={`block py-2 px-3 rounded-md ${isActive("/certificaciones") ? "bg-[#A3CEF1] font-semibold" : "hover:bg-[#A3CEF1]"}`}>
                  <Award className="inline w-4 h-4 mr-2" /> Certificaciones
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Herramientas de Creación */}
        <div>
          <button
            className={`flex items-center justify-between w-full py-2 px-3 rounded-md ${
              showTools ? "bg-[#71AFD9]" : "hover:bg-[#71AFD9]"
            }`}
            onClick={() => setShowTools(!showTools)}
          >
            <span className="flex items-center">
              <FileCode className="w-5 h-5 mr-2" />
              Crear Contenido
            </span>
            <span>{showTools ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {showTools && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="ml-8 mt-2 space-y-2"
              >
                <Link to="/crear-seccion" className={`block py-2 px-3 rounded-md ${isActive("/crear-seccion") ? "bg-[#A3CEF1] font-semibold" : "hover:bg-[#A3CEF1]"}`}>
                  Nueva Sección
                </Link>
                <Link to="/crear-ejercicio" className={`block py-2 px-3 rounded-md ${isActive("/crear-ejercicio") ? "bg-[#A3CEF1] font-semibold" : "hover:bg-[#A3CEF1]"}`}>
                  Nuevo Ejercicio
                </Link>
                <Link to="/crear-examen" className={`block py-2 px-3 rounded-md ${isActive("/crear-examen") ? "bg-[#A3CEF1] font-semibold" : "hover:bg-[#A3CEF1]"}`}>
                  Nuevo Examen
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Ruta de Aprendizaje */}
        <div>
          <button
            className={`flex items-center justify-between w-full py-2 px-3 rounded-md mb-2 ${
              showOpenLevels ? "bg-[#71AFD9]" : "hover:bg-[#71AFD9]"
            }`}
            onClick={() => setShowLevels(!showOpenLevels)}
          >
            <span>Ruta de Aprendizaje</span>
            <span>{showOpenLevels ? "−" : "+"}</span>
          </button>

          <AnimatePresence>
            {showOpenLevels && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="space-y-2 text-md font-semibold mt-2">
                  <li
                    onClick={() => toggleLevel("basic")}
                    className="cursor-pointer hover:underline hover:bg-[#71AFD9] rounded-md px-2 py-1"
                  >
                    • Básico
                  </li>
                  <AnimatePresence>
                    {openLevel === "basic" && renderTopics(topicsBasic)}
                  </AnimatePresence>

                  <li
                    onClick={() => toggleLevel("intermed")}
                    className="cursor-pointer hover:underline hover:bg-[#71AFD9] rounded-md px-2 py-1"
                  >
                    • Intermedio
                  </li>
                  <AnimatePresence>
                    {openLevel === "intermed" && renderTopics(topicsIntermed)}
                  </AnimatePresence>

                  <li
                    onClick={() => toggleLevel("advanced")}
                    className="cursor-pointer hover:underline hover:bg-[#71AFD9] rounded-md px-2 py-1"
                  >
                    • Avanzado
                  </li>
                  <AnimatePresence>
                    {openLevel === "advanced" && renderTopics(topicsAdvanced)}
                  </AnimatePresence>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
