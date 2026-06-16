import { render, screen } from '@testing-library/react';
import Header from '@/components/Header';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { usePathname } from 'next/navigation';
import { LeadProvider } from '@/context/LeadContext';

// Mock do next/navigation
vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}));

describe('Header Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderHeader = (hasBlog = true) => {
    render(
      <LeadProvider>
        <Header hasBlog={hasBlog} />
      </LeadProvider>
    );
  };

  it('deve apontar para âncoras na mesma página quando estiver na raiz (/)', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    renderHeader(true);
    
    // Testa nav Desktop (pode haver links mobile tbm, pegamos todos)
    const inicioLinks = screen.getAllByRole('link', { name: /início/i });
    expect(inicioLinks[0].getAttribute('href')).toBe('#inicio');

    const blogLinks = screen.getAllByRole('link', { name: /blog/i });
    expect(blogLinks[0].getAttribute('href')).toBe('#blog');
  });

  it('deve usar rotas absolutas para homepage quando não estiver na raiz', () => {
    vi.mocked(usePathname).mockReturnValue('/blog/algum-post');
    renderHeader(true);
    
    const inicioLinks = screen.getAllByRole('link', { name: /início/i });
    expect(inicioLinks[0].getAttribute('href')).toBe('/#inicio');
    
    const areasLinks = screen.getAllByRole('link', { name: /áreas de atuação/i });
    expect(areasLinks[0].getAttribute('href')).toBe('/#areas');
  });

  it('o link do blog deve direcionar para /blog quando não estiver na raiz', () => {
    vi.mocked(usePathname).mockReturnValue('/blog/algum-post');
    renderHeader(true);
    
    const blogLinks = screen.getAllByRole('link', { name: /blog/i });
    expect(blogLinks[0].getAttribute('href')).toBe('/blog');
  });

  it('não deve exibir o link do blog se hasBlog for falso', () => {
    vi.mocked(usePathname).mockReturnValue('/');
    renderHeader(false);
    
    const blogLinks = screen.queryAllByRole('link', { name: /blog/i });
    expect(blogLinks).toHaveLength(0);
  });
});
