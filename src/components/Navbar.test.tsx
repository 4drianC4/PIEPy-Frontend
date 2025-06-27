import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

// Mock the useIsMobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: vi.fn().mockReturnValue(false)
}));

describe('Navbar Component', () => {
  it('renders navigation links when not on mobile', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Ruta de Aprendizaje')).toBeInTheDocument();
    expect(screen.getByText('Crear Contenido')).toBeInTheDocument();
    expect(screen.getByText('Guardar')).toBeInTheDocument();
  });
});