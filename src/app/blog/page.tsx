import Link from 'next/link';
import { fetchBlogPosts } from '@/lib/blog-api';
import { getYouTubeThumbnail } from '@/lib/youtube';

export const metadata = {
  title: 'Blog | Artigos e Insights',
  description: 'Leia os artigos e publicações mais recentes.',
};

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  // Pass the page parameter in the future if API is extended, currently using limit
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || '1', 10);
  const posts = await fetchBlogPosts(50, page);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Blog / Artigos</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Insights, análises e perspectivas sobre os principais temas da nossa área de atuação.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="group relative flex flex-col h-full bg-white border border-gray-200 hover:border-secondary transition-all duration-500 hover:shadow-xl cursor-pointer"
              >
                <div className="h-48 bg-gray-50 overflow-hidden relative">
                  {(post.coverImage || getYouTubeThumbnail(post.youtubeUrl)) ? (
                    <img src={post.coverImage || getYouTubeThumbnail(post.youtubeUrl) as string} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                      Sem Imagem
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                    {post.tags && post.tags.length > 0 && <span>{post.tags[0]}</span>}
                    {post.tags && post.tags.length > 0 && <span className="text-gray-300">&bull;</span>}
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </time>
                  </div>
                  
                  <h2 className="text-xl font-medium text-primary mb-3 transition-colors duration-300 group-hover:text-secondary">
                    <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 line-clamp-3 text-sm flex-grow">
                    {post.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            Nenhum artigo publicado ainda.
          </div>
        )}
      </section>
    </div>
  );
}
