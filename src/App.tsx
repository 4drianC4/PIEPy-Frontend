import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import Login from "./pages/Login";
import CrearSeccion from "./pages/CrearSeccion";
import NotFound from "./pages/NotFound";
import CrearExamen from "./pages/CrearExamen";
import CrearEjercicio from "./pages/CrearEjercicio";
import Recursos from "./pages/Recursos";
import LearningPath from "./pages/learning-path";
import Lecciones from "./pages/Lecciones";
import Progreso from "./pages/Progreso";
import Comunidad from "./pages/Comunidad";
import Certificaciones from "./pages/Certificaciones";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recorrido" element={<LearningPath />} />
          <Route path="/lecciones" element={<Lecciones />} />
          <Route path="/crear-seccion" element={<CrearSeccion />} />
          <Route path="/crear-examen" element={<CrearExamen />} />
          <Route path="/crear-ejercicio" element={<CrearEjercicio />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/progreso" element={<Progreso />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;