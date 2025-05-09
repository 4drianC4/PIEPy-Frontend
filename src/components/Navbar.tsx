
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <nav className="bg-python-blue text-white h-16 px-4 flex items-center justify-between">
      <div className="flex items-center">
        {isMobile && (
          <Menu className="mr-3 md:hidden" />
        )}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white font-medium">Crear Curso</Link>
          <Link to="/" className="text-white font-medium">Apoyo Estudiantil</Link>
          <Link to="/" className="text-white font-medium">Evaluacion</Link>
          <Link to="/" className="text-white font-medium">Certificacion</Link>
        </div>
        {isMobile && (
          <Link to="/" className="text-white font-medium">Python Academy</Link>
        )}
      </div>
      <Button variant="outline" className="bg-blue-100 text-python-blue hover:bg-blue-200">
        Guardar
      </Button>
    </nav>
  );
};

export default Navbar;
