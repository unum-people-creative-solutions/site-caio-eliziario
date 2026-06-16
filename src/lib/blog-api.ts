export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  contentS3Key?: string;
  content?: string;
  coverImage?: string;
  youtubeUrl?: string;
  tags: string[];
  status: string;
  publishedAt: string;
  metaTitle?: string;
  metaDescription?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || "https://api.unumpeople.com.br";
const TENANT_SLUG = process.env.NEXT_PUBLIC_TENANT_SLUG || "caio-eliziario";

export async function fetchBlogPosts(limit: number = 10, page: number = 1): Promise<BlogPost[]> {
  // In a real implementation we would pass limit and use lastKey, but for MVP we use basic limit.
  const url = `${API_BASE_URL.replace(/\/+$/, "")}/public/blog/${TENANT_SLUG}/posts?limit=${limit}`;
  
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 }, // Cache for 60 seconds
    });
    
    if (!res.ok) {
      if (res.status === 404) return []; // No posts or tenant found
      throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }
    
    const data = await res.json();
    const postsData = data.posts || [];
    
    return postsData.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      summary: post.excerpt || "",
      contentS3Key: post.content_s3_key,
      content: post.content_md,
      coverImage: post.cover_image_url,
      youtubeUrl: post.video_url,
      tags: post.tags || [],
      status: post.status,
      publishedAt: post.published_at,
      metaTitle: post.seo?.meta_title,
      metaDescription: post.seo?.meta_description
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const url = `${API_BASE_URL.replace(/\/+$/, "")}/public/blog/${TENANT_SLUG}/posts/${slug}`;
  
  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });
    
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }
    
    const post = await res.json();
    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      summary: post.excerpt || "",
      contentS3Key: post.content_s3_key,
      content: post.content_md,
      coverImage: post.cover_image_url,
      youtubeUrl: post.video_url,
      tags: post.tags || [],
      status: post.status,
      publishedAt: post.published_at,
      metaTitle: post.seo?.meta_title,
      metaDescription: post.seo?.meta_description
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}
