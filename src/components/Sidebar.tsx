
import React from 'react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  // If on mobile, don't render the sidebar by default (will be controlled by a menu toggle)
  if (isMobile) {
    return null;
  }
  
  return (
    <div className={cn("w-64 bg-python-blue text-white min-h-screen p-6", className)}>
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-12 h-12 rounded-full bg-black"></div>
      </div>
      
      <h2 className="text-xl font-semibold mb-6">Configuracion del Modulo</h2>
      
      <ul className="space-y-4 text-lg">
        <li className="flex items-center space-x-2">
          <span>•</span>
          <span>Informacion General</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>•</span>
          <span>Recursos</span>
        </li>
        <li className="flex items-center space-x-2">
          <span>•</span>
          <span>Configuracion</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
