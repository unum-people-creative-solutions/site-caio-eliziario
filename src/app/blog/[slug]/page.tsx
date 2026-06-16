import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { fetchBlogPostBySlug } from '@/lib/blog-api';
import { getYouTubeEmbedUrl } from '@/lib/youtube';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Artigo não encontrado',
    };
  }
  
  return {
    title: post.metaTitle || `${post.title} | Blog`,
    description: post.metaDescription || post.summary,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.summary,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await fetchBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-secondary mb-4">
            {post.tags && post.tags.length > 0 && <span>{post.tags[0]}</span>}
            {post.tags && post.tags.length > 0 && <span className="text-gray-300">&bull;</span>}
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-6">
            {post.title}
          </h1>
          <div className="w-16 h-[1px] bg-secondary mx-auto mb-8"></div>
          {post.coverImage && (
            <div className="mt-8 overflow-hidden">
              <img src={post.coverImage} alt={post.title} className="w-full h-auto object-cover" />
            </div>
          )}
          {post.youtubeUrl && !post.coverImage && (
            <div className="mt-8 aspect-video overflow-hidden bg-black flex items-center justify-center rounded-lg shadow-lg">
              <iframe 
                className="w-full h-full"
                src={getYouTubeEmbedUrl(post.youtubeUrl) as string} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          )}
        </header>

        <div className="prose prose-lg prose-neutral max-w-none prose-a:text-secondary prose-a:no-underline hover:prose-a:underline prose-headings:font-light prose-headings:text-primary prose-blockquote:border-l-secondary prose-blockquote:italic prose-blockquote:text-gray-700">
          <ReactMarkdown>
            {post.content || '*O conteúdo deste post está vazio.*'}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
