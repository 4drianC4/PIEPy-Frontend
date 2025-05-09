import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CrearSeccion from './CrearSeccion';
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

vi.mock('@/components/ContentSection', () => ({
  default: ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div data-testid={`content-section-${title}`}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}));

// Mock useIsMobile hook
vi.mock('@/hooks/use-mobile', () => ({
  useIsMobile: vi.fn().mockReturnValue(false)
}));

describe('CrearSeccion Page', () => {
  it('renders all content sections', () => {
    render(
      <BrowserRouter>
        <CrearSeccion />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('content-section-Texto')).toBeInTheDocument();
    expect(screen.getByTestId('content-section-Contenido de video')).toBeInTheDocument();
    expect(screen.getByTestId('content-section-Examen')).toBeInTheDocument();
    expect(screen.getByTestId('content-section-Agregar Ejercicio')).toBeInTheDocument();
  });
  
  it('navigates to crear-examen when Add Exam button is clicked', () => {
    render(
      <BrowserRouter>
        <CrearSeccion />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Añadir Examen'));
    expect(mockNavigate).toHaveBeenCalledWith('/crear-examen');
  });
  
  it('navigates to crear-ejercicio when Add Exercise button is clicked', () => {
    render(
      <BrowserRouter>
        <CrearSeccion />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Agregar ejercicio'));
    expect(mockNavigate).toHaveBeenCalledWith('/crear-ejercicio');
  });
});