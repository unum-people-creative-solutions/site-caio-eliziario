import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BlogPost, { generateMetadata } from '@/app/blog/[slug]/page';
import * as blogApi from '@/lib/blog-api';

vi.mock('@/lib/blog-api', () => ({
  fetchBlogPostBySlug: vi.fn(),
}));

describe('Blog Post Page (T04)', () => {
  const mockPost = {
    id: '1',
    title: 'Meu Primeiro Post',
    slug: 'meu-primeiro-post',
    summary: 'Resumo do post.',
    content: '# Hello World\nEste é um **teste**.',
    tags: ['Testes'],
    publishedAt: '2026-06-16T12:00:00Z',
    status: 'published',
    metaTitle: 'Meu Primeiro Post - SEO',
    metaDescription: 'Description SEO'
  };

  it('should render the post content properly', async () => {
    vi.mocked(blogApi.fetchBlogPostBySlug).mockResolvedValue(mockPost);

    const PageComponent = await BlogPost({ params: { slug: 'meu-primeiro-post' } });
    render(PageComponent);

    const title = screen.getByRole('heading', { level: 1, name: /Meu Primeiro Post/i });
    expect(title).toBeInTheDocument();
  });

  it('should generate correct metadata', async () => {
    vi.mocked(blogApi.fetchBlogPostBySlug).mockResolvedValue(mockPost);

    const metadata = await generateMetadata({ params: { slug: 'meu-primeiro-post' } });
    
    expect(metadata.title).toBe('Meu Primeiro Post - SEO');
    expect(metadata.description).toBe('Description SEO');
  });
});
