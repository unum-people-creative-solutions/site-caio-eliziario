import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BlogHighlights from '@/components/BlogHighlights';
import * as blogApi from '@/lib/blog-api';

// Mock the API calls
vi.mock('@/lib/blog-api', () => ({
  fetchBlogPosts: vi.fn(),
}));

describe('BlogHighlights Component', () => {
  it('should not render anything when there are no posts (T01)', async () => {
    // Arrange: API returns empty array
    vi.mocked(blogApi.fetchBlogPosts).mockResolvedValue([]);

    // Act: Render the async Server Component
    const Component = await BlogHighlights();
    const { container } = render(Component);

    // Assert: The container should be empty (null rendered)
    expect(container.firstChild).toBeNull();
  });

  it('should render exactly 3 posts and the section header (T02)', async () => {
    // Arrange: API returns 3 mock posts
    vi.mocked(blogApi.fetchBlogPosts).mockResolvedValue([
      { id: '1', title: 'Post 1', slug: 'post-1', summary: 'Summary 1', tags: ['Law'], publishedAt: '2026-06-16T12:00:00Z' },
      { id: '2', title: 'Post 2', slug: 'post-2', summary: 'Summary 2', tags: ['Tech'], publishedAt: '2026-06-15T12:00:00Z' },
      { id: '3', title: 'Post 3', slug: 'post-3', summary: 'Summary 3', tags: ['Business'], publishedAt: '2026-06-14T12:00:00Z' },
    ] as any);

    // Act
    const Component = await BlogHighlights();
    render(Component);

    // Assert
    // Check for the header (getByRole focus)
    const header = screen.getByRole('heading', { level: 2, name: /Artigos e Publicações/i });
    expect(header).toBeInTheDocument();

    // Check for 3 cards (assuming they are rendered as articles or have a specific role)
    // We can look for the titles
    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
    expect(screen.getByText('Post 3')).toBeInTheDocument();

    // Check for the Call-to-Action link
    const link = screen.getByRole('link', { name: /Acessar o Blog/i });
    expect(link).toHaveAttribute('href', '/blog');
  });
});
