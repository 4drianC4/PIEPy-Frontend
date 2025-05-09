import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CrearEjercicio from './CrearEjercicio';
import { BrowserRouter } from 'react-router-dom';

// Mock the useNavigate hook
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

// Mock the Sidebar and Navbar components
vi.mock('@/components/Sidebar', () => ({
  default: () => <div data-testid="mock-sidebar">Sidebar</div>
}));

vi.mock('@/components/Navbar', () => ({
  default: () => <div data-testid="mock-navbar">Navbar</div>
}));

describe('CrearEjercicio Page', () => {
  it('renders the page title and form elements', () => {
    render(
      <BrowserRouter>
        <CrearEjercicio />
      </BrowserRouter>
    );
    
    expect(screen.getByText('Crear Ejercicio de Python')).toBeInTheDocument();
    expect(screen.getByText('Título del Ejercicio')).toBeInTheDocument();
    expect(screen.getByText('Descripción del Problema')).toBeInTheDocument();
    expect(screen.getByText('Plantilla de Código')).toBeInTheDocument();
    expect(screen.getByText('Test Unitario')).toBeInTheDocument();
    
    // Check for buttons
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Guardar Ejercicio')).toBeInTheDocument();
  });
});