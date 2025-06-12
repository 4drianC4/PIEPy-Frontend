import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CrearExamen from './CrearExamen';
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

vi.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, variant, className }) => (
    <button 
      onClick={onClick}
      data-testid={variant === 'outline' ? 'outline-button' : 'primary-button'}
      className={className}
    >
      {children}
    </button>
  )
}));

vi.mock('@/components/ui/textarea', () => ({
  Textarea: ({ placeholder, className }) => (
    <textarea 
      data-testid="textarea"
      placeholder={placeholder}
      className={className}
    />
  )
}));

vi.mock('@/components/ui/input', () => ({
  Input: ({ placeholder }) => (
    <input 
      data-testid="input"
      placeholder={placeholder}
    />
  )
}));

describe('CrearExamen Page', () => {
  it('renders the exam creation form with all elements', () => {
    render(
      <BrowserRouter>
        <CrearExamen />
      </BrowserRouter>
    );
    
    // Check title
    expect(screen.getByText('Crear Examen')).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByPlaceholderText('Ingrese título del examen...')).toBeInTheDocument();
    
    expect(screen.getByPlaceholderText('Ingrese descripción del examen...')).toBeInTheDocument();
    
    expect(screen.getByPlaceholderText('Pregunta 1')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Opciones (una por línea)')).toBeInTheDocument();
    
    // Check buttons
    expect(screen.getByText('+ Agregar Pregunta')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Guardar Examen')).toBeInTheDocument();
  });

  it('navigates to home when Cancel button is clicked', () => {
    render(
      <BrowserRouter>
        <CrearExamen />
      </BrowserRouter>
    );
    
    fireEvent.click(screen.getByText('Cancelar'));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('allows typing in input fields', () => {
    render(
      <BrowserRouter>
        <CrearExamen />
      </BrowserRouter>
    );
    
    const titleInput = screen.getByPlaceholderText('Ingrese título del examen...') as HTMLInputElement;
    const descriptionTextarea = screen.getByPlaceholderText('Ingrese descripción del examen...') as HTMLTextAreaElement;
    const questionInput = screen.getByPlaceholderText('Pregunta 1') as HTMLInputElement;
    const optionsTextarea = screen.getByPlaceholderText('Opciones (una por línea)') as HTMLTextAreaElement;
    
    fireEvent.change(titleInput, { target: { value: 'Examen Final' } });
    fireEvent.change(descriptionTextarea, { target: { value: 'Examen sobre conceptos avanzados' } });
    fireEvent.change(questionInput, { target: { value: '¿Qué es Python?' } });
    fireEvent.change(optionsTextarea, { target: { value: 'Un lenguaje\nUn animal\nUn país' } });
    
    expect(titleInput.value).toBe('Examen Final');
    expect(descriptionTextarea.value).toBe('Examen sobre conceptos avanzados');
    expect(questionInput.value).toBe('¿Qué es Python?');
    expect(optionsTextarea.value).toBe('Un lenguaje\nUn animal\nUn país');
  });

  it('renders the sidebar and navbar', () => {
    render(
      <BrowserRouter>
        <CrearExamen />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
  });

  it('has correct styling for buttons', () => {
    render(
      <BrowserRouter>
        <CrearExamen />
      </BrowserRouter>
    );
    
    const cancelButton = screen.getByText('Cancelar');
    const saveButton = screen.getByText('Guardar Examen');
    const addButton = screen.getByText('+ Agregar Pregunta');
    
    // Check class names contain expected styles
    expect(saveButton.className).toContain('bg-python-blue');
    expect(addButton.className).toContain('bg-gray-100');
  });
});