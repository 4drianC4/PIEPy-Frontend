import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Recursos from './Recursos';
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

// Mock the components
vi.mock('@/components/Sidebar', () => ({
  default: () => <div data-testid="mock-sidebar">Sidebar</div>
}));

vi.mock('@/components/Navbar', () => ({
  default: () => <div data-testid="mock-navbar">Navbar</div>
}));

// Mock the video thumbnails
vi.mock('@/assets/images/video-thumbnails', () => ({
  default: {
    intro: 'intro-thumbnail.jpg',
    functions: 'functions-thumbnail.jpg',
    oop: 'oop-thumbnail.jpg'
  }
}));

describe('Recursos Page', () => {
  it('renders the main sections and navigation', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    // Check main title
    expect(screen.getByText('Recursos de Aprendizaje')).toBeInTheDocument();
    
    // Check buttons
    expect(screen.getByText('Crear Ejercicio')).toBeInTheDocument();
    expect(screen.getByText('Añadir Recurso')).toBeInTheDocument();
    
    // Check section titles
    expect(screen.getByText('Videos Tutoriales')).toBeInTheDocument();
    expect(screen.getByText('Recursos Adicionales')).toBeInTheDocument();
  });

  it('displays all video cards with correct information', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    // Check video cards
    expect(screen.getByText('Introducción a Python')).toBeInTheDocument();
    expect(screen.getByText('Aprende los fundamentos básicos del lenguaje Python')).toBeInTheDocument();
    expect(screen.getByText('15:30')).toBeInTheDocument();
    expect(screen.getByText('Principiante')).toBeInTheDocument();
    
    expect(screen.getByText('Funciones en Python')).toBeInTheDocument();
    expect(screen.getByText('Programación Orientada a Objetos')).toBeInTheDocument();
    
    // Check all video buttons
    const videoButtons = screen.getAllByText('Ver Video');
    expect(videoButtons.length).toBe(3);
  });

  it('displays all resource items with correct information', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    // Check resource items
    expect(screen.getByText('Documentación Oficial de Python')).toBeInTheDocument();
    expect(screen.getByText('Guía completa de referencia para Python')).toBeInTheDocument();
    expect(screen.getByText('Documentación')).toBeInTheDocument();
    
    expect(screen.getByText('Cheat Sheet de Python')).toBeInTheDocument();
    expect(screen.getByText('Ejercicios prácticos')).toBeInTheDocument();
    
    // Check all visit links
    const visitLinks = screen.getAllByText('Visitar');
    expect(visitLinks.length).toBe(3);
  });

  it('navigates to crear-ejercicio when Crear Ejercicio button is clicked', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Crear Ejercicio'));
    expect(mockNavigate).toHaveBeenCalledWith('/crear-ejercicio');
  });

  it('navigates to video page when Ver Video button is clicked', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    const videoButtons = screen.getAllByText('Ver Video');
    fireEvent.click(videoButtons[0]);
    expect(mockNavigate).toHaveBeenCalledWith('/video/1');
  });

  it('has correct external links for resources', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    const visitLinks = screen.getAllByText('Visitar');
    expect(visitLinks[0]).toHaveAttribute('href', 'https://docs.python.org/3/');
    expect(visitLinks[0]).toHaveAttribute('target', '_blank');
    expect(visitLinks[0]).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders the sidebar and navbar', () => {
    render(
      <BrowserRouter>
        <Recursos />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
  });
});