import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from '@/components/Contact';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock do sendLeadToCRM
vi.mock('@/lib/crm', () => ({
  sendLeadToCRM: vi.fn().mockResolvedValue({ success: true }),
}));

// Mock do useLead
vi.mock('@/context/LeadContext', async () => {
  const actual = await vi.importActual<typeof import('@/context/LeadContext')>('@/context/LeadContext');
  return {
    ...actual,
    useLead: () => ({
      openModal: vi.fn(),
      tracking: { gclid: 'test-gclid', utm_source: 'google' },
    }),
  };
});

describe('Contact Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('deve exibir erros de validação se campos obrigatórios estiverem vazios', async () => {
    render(<Contact />);
    
    const submitButton = screen.getByRole('button', { name: /Enviar Solicitação/i });
    await user.click(submitButton);

    expect(await screen.findByText(/O nome deve ter pelo menos 3 caracteres/i)).toBeInTheDocument();
    expect(await screen.findByText(/E-mail inválido/i)).toBeInTheDocument();
    expect(await screen.findByText(/Telefone incompleto/i)).toBeInTheDocument();
    expect(await screen.findByText(/A mensagem deve ter pelo menos 5 caracteres/i)).toBeInTheDocument();
  });

  it('deve submeter com sucesso quando todos os campos estiverem preenchidos', async () => {
    // Aumenta o timeout para este teste específico devido ao processamento do form
    vi.setConfig({ testTimeout: 10000 });

    // Mock do fetch para o FormSubmit
    const fetchMock = vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);

    render(<Contact />);

    const nomeInput = screen.getByLabelText(/Seu Nome Completo/i);
    const emailInput = screen.getByLabelText(/Seu E-mail/i);
    const telefoneInput = screen.getByLabelText(/Seu Telefone ou WhatsApp/i);
    const mensagemInput = screen.getByLabelText(/Sua Mensagem/i);
    const submitButton = screen.getByRole('button', { name: /Enviar Solicitação/i });

    await user.type(nomeInput, 'Cliente Teste');
    await user.type(emailInput, 'teste@exemplo.com');
    await user.type(telefoneInput, '11999999999');
    await user.type(mensagemInput, 'Gostaria de uma consultoria estratégica.');

    await user.click(submitButton);

    // Verifica se a mensagem de sucesso aparece
    // Usamos um texto mais específico para evitar conflito com o título "Mensagem" que está sempre visível
    await waitFor(() => {
      expect(screen.getByText(/Recebemos sua solicitação com sucesso/i)).toBeInTheDocument();
    }, { timeout: 8000 });

    // Verifica se o fetch do FormSubmit foi chamado
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('formsubmit.co/ajax'),
      expect.any(Object)
    );
  }, 15000); // Timeout adicional no nível do teste
});
