import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Login from './Login';
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

// Mock the logo image
vi.mock('@/assets/images/Logo.png', () => ({
  default: 'test-logo-path.png'
}));

describe('Login Page', () => {
  it('renders the login form with all elements', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    // Check logo is rendered
    const logo = screen.getByAltText('Logo de la aplicación');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'test-logo-path.png');
    
    // Check title
    expect(screen.getByText('Log In')).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa tu email')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ingresa tu contraseña')).toBeInTheDocument();
    
    // Check additional options
    expect(screen.getByLabelText('Recordarme')).toBeInTheDocument();
    expect(screen.getByText('¿Olvidaste tu contraseña?')).toBeInTheDocument();
    
    // Check submit button
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
  });

  it('navigates to home page when form is submitted', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    const submitButton = screen.getByRole('button', { name: 'Ingresar' });
    fireEvent.click(submitButton);
    
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('validates form fields', async () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    const submitButton = screen.getByRole('button', { name: 'Ingresar' });
    fireEvent.click(submitButton);
    
    // Check validation errors
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Contraseña');
    
    expect(emailInput).toBeInvalid();
    expect(passwordInput).toBeInvalid();
  });

  it('allows typing in form fields', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    
    const emailInput = screen.getByLabelText('Email') as HTMLInputElement;
    const passwordInput = screen.getByLabelText('Contraseña') as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    
    expect(emailInput.value).toBe('test@example.com');
    expect(passwordInput.value).toBe('password123');
  });
});