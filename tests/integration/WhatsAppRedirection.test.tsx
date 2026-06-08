import { render, screen, fireEvent } from '@testing-library/react';
import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';
import { LeadProvider } from '@/context/LeadContext';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock do window.open
window.open = vi.fn();

describe('WhatsApp Redirection Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Hero "Agendar Reunião" deve redirecionar diretamente para o WhatsApp', () => {
    render(
      <LeadProvider>
        <Hero />
      </LeadProvider>
    );

    const button = screen.getByRole('button', { name: /Agendar Reunião/i });
    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me'),
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('WhatsAppButton deve redirecionar diretamente para o WhatsApp', () => {
    render(
      <LeadProvider>
        <WhatsAppButton />
      </LeadProvider>
    );

    const button = screen.getByRole('button', { name: /Fale conosco pelo WhatsApp/i });
    fireEvent.click(button);

    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining('wa.me'),
      '_blank',
      'noopener,noreferrer'
    );
  });
});
