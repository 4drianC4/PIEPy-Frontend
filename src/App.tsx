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
import IntroduccionPython from "./pages/IntroduccionPython";
import Variablesytipos from "./pages/Variablesytipos";
import Condicionales from "./pages/Condicionales";
import Bucles from "./pages/Bucles";
import Funciones from "./pages/Funciones";
import ListasyTuplas from "./pages/ListasyTuplas";
import FuncionesAvanzadas from "./pages/FuncionesAvanzadas";
import ModulosyPaquetes from "./pages/ModulosyPaquetes";
import ManejodeErrores from "./pages/ManejodeErrores";
import Archivos from "./pages/Archivos";
import ProgramacionOO from "./pages/ProgramacionOO";
import Apirest from "./pages/Apirest";
import LibreriasGraficas from "./pages/LibreriasGraficas";
import Git from "./pages/Git";
import Testing from "./pages/Testing";
import CrearCurso from "./pages/CrearCurso";

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
          <Route path="/crear-curso" element={<CrearCurso />} />
          <Route path="/crear-seccion" element={<CrearSeccion />} />
          <Route path="/crear-examen" element={<CrearExamen />} />
          <Route path="/crear-ejercicio" element={<CrearEjercicio />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/progreso" element={<Progreso />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/certificaciones" element={<Certificaciones />} />

          {/* Rutas de lecciones básicas */}
          <Route path="/introduccion-python" element={<IntroduccionPython />} />
          <Route path="/variables-y-tipos" element={<Variablesytipos />} />
          <Route path="/condicionales" element={<Condicionales />} />
          <Route path="/bucles" element={<Bucles />} />
          <Route path="/funciones" element={<Funciones />} />

          {/* Rutas de lecciones intermedias */}
          <Route path="/listas-y-tuplas" element={<ListasyTuplas />} />
          <Route path="/funciones-avanzadas" element={<FuncionesAvanzadas />} />
          <Route path="/modulos-y-paquetes" element={<ModulosyPaquetes />} />
          <Route path="/manejo-de-errores" element={<ManejodeErrores />} />
          <Route path="/archivos" element={<Archivos />} />

          {/* Rutas de lecciones avanzadas */}
          <Route path="/programacion-oo" element={<ProgramacionOO />} />
          <Route path="/api-rest" element={<Apirest />} />
          <Route path="/librerias-graficas" element={<LibreriasGraficas />} />
          <Route path="/git" element={<Git />} />
          <Route path="/testing" element={<Testing />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
