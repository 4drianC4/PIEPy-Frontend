import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home"
import Index from "./pages/Index";
import Login from "./pages/Login";
import CrearSeccion from "./pages/CrearSeccion";
import NotFound from "./pages/NotFound";
import CrearExamen from "./pages/CrearExamen";
import CrearEjercicio from "./pages/CrearEjercicio";
import Recursos from "./pages/Recursos";
import Lecciones from "./pages/Lecciones";
import LearningPath from "./pages/learning-path";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/recorrido" element={<LearningPath />} />
            <Route path="/crear-seccion" element={<CrearSeccion />} />
            <Route path="/crear-examen" element={<CrearExamen />} />
            <Route path="/crear-ejercicio" element={<CrearEjercicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/recursos" element={<Recursos />} />
            <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

