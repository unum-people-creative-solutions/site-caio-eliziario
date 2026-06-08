import { render, screen } from '@testing-library/react';
import Hero from '@/components/Hero';
import { vi, describe, it, expect } from 'vitest';

// Mock do useLead
vi.mock('@/context/LeadContext', () => ({
  useLead: () => ({
    openModal: vi.fn(),
  }),
}));

describe('Hero Component', () => {
  it('deve exibir a imagem de fundo bg-predios.jpg', () => {
    render(<Hero />);
    // O alt text definido no TECH-DESIGN é "Escritório Eliziário Advocacia"
    const backgroundImage = screen.getByAltText(/Escritório Eliziário Advocacia/i);
    expect(backgroundImage).toBeInTheDocument();
    // No Next.js, o src da imagem pode ser processado, então verificamos se contém o nome do arquivo
    expect(backgroundImage.getAttribute('src')).toContain('bg-predios.jpg');
  });

  it('não deve exibir a foto do profissional imagem-fundador.png', () => {
    render(<Hero />);
    // O alt text atual é "Caio Eliziario - Fundador"
    const professionalPhoto = screen.queryByAltText(/Caio Eliziario - Fundador/i);
    expect(professionalPhoto).not.toBeInTheDocument();
  });
});
