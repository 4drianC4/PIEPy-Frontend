
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "@/components/Navbar";

export default function LearningPath() {
  const [selectedTopic, setSelectedTopic] = useState("Introduccion");
  const navigate = useNavigate();
   const [openLevel, setOpenLevel] = useState<"basic" | "intermed" | "advanced" | null>(null);
  const toggleLevel = (level: "basic" | "intermed" | "advanced") => {
    setOpenLevel((prev) => (prev === level ? null : level));
  };


  const handleStartAdventure = () => {
    navigate("/introduccion-python"); 
  };

  return (
<div className="flex h-screen bg-gradient-to-b from-[#5f84e3] to-[#a4b4fe]">
      <Sidebar onSelect={setSelectedTopic} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-8 overflow-y-auto pt-16 md:pt-24">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            ¡Inicia tu aventura en Python!
          </h1>

          <div className="w-full max-w-lg md:max-w-2xl">
            <img
              src="/public/recorrido.png"
              alt="Python Adventure"
              className="rounded-xl shadow-lg w-full object-cover max-h-[400px] md:max-h-[500px]"
            />
          </div>

          <p className="max-w-2xl text-lg md:text-xl text-white/90 px-4">
            <strong>¡Inicia esta aventura!</strong> Aprende paso a paso, explora temas desde lo más básico hasta avanzado,
            desbloquea logros y obtén tu <span className="font-bold">certificación oficial</span>.
          </p>

          <div className="max-w-2xl bg-white/20 backdrop-blur-lg rounded-lg p-6 text-left text-white space-y-3 shadow-md mx-4">
            <h2 className="text-2xl font-bold mb-2">📜 En esta ruta aprenderás:</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ Variables, tipos y estructuras de control</li>
              <li>✅ Funciones y módulos</li>
              <li>✅ Manejo de errores y archivos</li>
              <li>✅ Programación Orientada a Objetos</li>
              <li>✅ APIs y librerías gráficas</li>
              <li>✅ Buenas prácticas y testing</li>
            </ul>
            <p className="mt-3 text-white/90">
              Al completar esta aventura, recibirás una <strong>certificación digital</strong> para mostrar tus logros.
            </p>
          </div>
          {/* <button
            onClick={() => toggleLevel("basic")}
                    className="mt-6 px-6 py-3 bg-white text-[#3B82F6] font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            ¡Que comience la aventura!
          </button> */}
        </div>
      </div>
    </div>
  );
}
