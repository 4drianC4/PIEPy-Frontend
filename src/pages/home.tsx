import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Encabezado */}
      <header className="bg-purple-100 rounded-b-md shadow-md px-8 py-4 flex items-center justify-between">
        {/* Menú hamburguesa */}
        <div className="text-2xl font-bold cursor-pointer">
          ☰
        </div>

        {/* Navegación */}
        <nav className="flex space-x-8 text-sm text-blue-800">
          <a href="#" className="hover:underline">Home</a>
          <Link to="/Recursos" className="hover:underline">Recursos</Link>
          <Link to="/recorrido" className="hover:underline">Recorrido</Link>
          <Link to="/login" className="hover:underline">Log In</Link>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="flex items-center justify-center mt-20">
        <h1 className="text-2xl font-semibold text-black">GenSoft</h1>
      </main>

      {/* Decoración inferior derecha */}
      <div className="absolute bottom-0 right-0 w-64 h-64">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="160" cy="160" r="80" fill="#2563EB" fillOpacity="0.5" />
          <circle cx="140" cy="180" r="50" fill="#2563EB" fillOpacity="0.3" />
          <circle cx="180" cy="140" r="40" fill="#2563EB" fillOpacity="0.6" />
        </svg>
      </div>
    </div>
  );
}
