import { render, screen, fireEvent } from '@testing-library/react';
import AreasAtuacao from '@/components/AreasAtuacao';
import { vi, describe, it, expect } from 'vitest';

// Mock do useLead context
vi.mock('@/context/LeadContext', () => ({
  useLead: () => ({
    openModal: vi.fn(),
  }),
}));

describe('AreasAtuacao Component', () => {
  it('deve renderizar os cards na ordem correta, incluindo Direito à Saúde na segunda posição', () => {
    render(<AreasAtuacao />);
    
    // Busca todos os títulos de seção (h3) dentro do grid de áreas
    const titles = screen.getAllByRole('heading', { level: 3 });
    const titleTexts = titles.map(t => t.textContent);

    expect(titleTexts[0]).toBe('Direito Civil');
    expect(titleTexts[1]).toBe('Direito à Saúde');
    expect(titleTexts[2]).toBe('Direito Imobiliário');
    expect(titleTexts[3]).toBe('Direito do Consumidor');
  });

  it('deve abrir a modal com o conteúdo correto ao clicar no card Direito à Saúde', () => {
    render(<AreasAtuacao />);
    
    const card = screen.getByText('Direito à Saúde');
    fireEvent.click(card);

    // Verifica se o título na modal está correto
    // Na modal o título também é h3, mas está dentro de um contexto específico
    const modalTitle = screen.getAllByText('Direito à Saúde').find(el => el.closest('.fixed'));
    expect(modalTitle).toBeInTheDocument();

    // Verifica se uma das frentes de atuação está presente
    expect(screen.getByText(/Atuação em processos judiciais e administrativos envolvendo planos de saúde/i)).toBeInTheDocument();
  });
});
