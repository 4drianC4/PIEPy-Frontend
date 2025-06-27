import React from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  return (
    <nav className="bg-python-blue text-white h-16 px-4 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        {isMobile && (
          <Menu className="mr-3 md:hidden" />
        )}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white font-medium hover:underline">Inicio</Link>
          <Link to="/recorrido" className="text-white font-medium hover:underline">Ruta de Aprendizaje</Link>
          {/* <Link to="/recursos" className="text-white font-medium hover:underline">Recursos</Link> */}
          {/* <Link to="/lecciones" className="text-white font-medium hover:underline">Lecciones</Link> */}
        </div>
        {isMobile && (
          <Link to="/" className="text-white font-medium">Python Academy</Link>
        )}
      </div>
      <div className="flex items-center space-x-4">
        <Button 
          variant="outline" 
          className="bg-blue-100 text-python-blue hover:bg-blue-200"
          onClick={() => navigate('/crear-seccion')}
        >
          Crear Contenido
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;