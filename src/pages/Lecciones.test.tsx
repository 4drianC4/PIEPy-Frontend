import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Lecciones from '@/pages/Lecciones';
import { BrowserRouter } from 'react-router-dom';

// Mock the components
vi.mock('@/components/Navbar', () => ({
  default: () => <div data-testid="mock-navbar">Navbar</div>
}));

vi.mock('@/components/Sidebar', () => ({
  default: () => <div data-testid="mock-sidebar">Sidebar</div>
}));

vi.mock('@/components/LessonCard', () => ({
  default: ({ 
    title,
    description,
    exampleCode,
    exerciseDescription,
    initialCode,
    expectedSolution
  }: any) => (
    <div data-testid="lesson-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <pre>{exampleCode}</pre>
      <p>{exerciseDescription}</p>
      <pre>{initialCode}</pre>
      <pre>{expectedSolution}</pre>
    </div>
  )
}));

describe('Lecciones Page', () => {
  it('renders the Navbar and Sidebar', () => {
    render(
      <BrowserRouter>
        <Lecciones />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-sidebar')).toBeInTheDocument();
  });

  it('has correct layout structure', () => {
    render(
      <BrowserRouter>
        <Lecciones />
      </BrowserRouter>
    );
    
    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('flex-1');
    expect(mainElement).toHaveClass('p-6');
    expect(mainElement).toHaveClass('overflow-auto');
    
    const container = screen.getByTestId('lesson-card').parentElement;
    expect(container).toHaveClass('max-w-3xl');
    expect(container).toHaveClass('mx-auto');
  });
});