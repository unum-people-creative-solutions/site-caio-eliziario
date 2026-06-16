import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BlogPage from '@/app/blog/page';
import * as blogApi from '@/lib/blog-api';

vi.mock('@/lib/blog-api', () => ({
  fetchBlogPosts: vi.fn(),
}));

describe('Blog Hub Page', () => {
  it('should render the hero section and blog posts (T03)', async () => {
    // Arrange
    vi.mocked(blogApi.fetchBlogPosts).mockResolvedValue([
      { id: '1', title: 'Test Post', slug: 'test-post', summary: 'Summary', tags: [], publishedAt: '2026-06-16T12:00:00Z', status: 'published' }
    ]);

    // Act
    const PageComponent = await BlogPage({ searchParams: { page: '1' } });
    render(PageComponent);

    // Assert Hero
    const heroTitle = screen.getByRole('heading', { level: 1, name: /Blog \/ Artigos/i });
    expect(heroTitle).toBeInTheDocument();

    // Assert Post
    expect(screen.getByText('Test Post')).toBeInTheDocument();
  });
});
