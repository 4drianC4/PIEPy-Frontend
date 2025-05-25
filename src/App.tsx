// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import CrearSeccion from "./pages/CrearSeccion";
import NotFound from "./pages/NotFound";
import CrearExamen from "./pages/CrearExamen";
import CrearEjercicio from "./pages/CrearEjercicio";
import Lecciones from "./pages/Lecciones";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lecciones" element={<Lecciones />} />
          <Route path="/crear-seccion" element={<CrearSeccion />} />
          <Route path="/crear-examen" element={<CrearExamen />} />
          <Route path="/crear-ejercicio" element={<CrearEjercicio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
