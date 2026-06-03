import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LeadModal } from '@/components/LeadModal';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Hoisted mocks
vi.mock('@/lib/crm', () => ({
  sendLeadToCRM: vi.fn().mockResolvedValue({ success: true }),
}));

vi.mock('@/context/LeadContext', async () => {
  const actual = await vi.importActual<typeof import('@/context/LeadContext')>('@/context/LeadContext');
  return {
    ...actual,
    useLead: () => ({
      isOpen: true,
      closeModal: vi.fn(),
      openModal: vi.fn(),
      whatsappUrl: 'https://wa.me/5511975335025',
      tracking: { gclid: null, utm_source: null },
    }),
  };
});

describe('LeadModal', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
    sessionStorage.clear();
  });

  it('deve permitir submissão sem e-mail', async () => {
    render(<LeadModal />);

    const nomeInput = screen.getByLabelText(/Seu Nome Completo/i);
    const telefoneInput = screen.getByLabelText(/Seu Telefone ou WhatsApp/i);
    const submitButton = screen.getByRole('button', { name: /Solicitar Atendimento/i });

    await user.type(nomeInput, 'Usuário Teste');
    await user.type(telefoneInput, '11999999999');
    
    await user.click(submitButton);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith(
        expect.stringContaining('wa.me'),
        '_blank',
        'noopener,noreferrer'
      );
    }, { timeout: 3000 });
  });

  it('deve exibir erro se o nome for muito curto', async () => {
    render(<LeadModal />);
    
    const nomeInput = screen.getByLabelText(/Seu Nome Completo/i);
    const submitButton = screen.getByRole('button', { name: /Solicitar Atendimento/i });

    await user.type(nomeInput, 'Ab');
    await user.click(submitButton);

    expect(await screen.findByText(/O nome deve ter pelo menos 3 caracteres/i)).toBeInTheDocument();
  });
});
