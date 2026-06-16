import Link from 'next/link';
import { fetchBlogPosts } from '@/lib/blog-api';
import { getYouTubeThumbnail } from '@/lib/youtube';

export default async function BlogHighlights() {
  const posts = await fetchBlogPosts(3);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-4">
            Artigos e Publicações
          </h2>
          <div className="w-16 h-[1px] bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article 
              key={post.id} 
              className="group relative bg-white flex flex-col h-full border border-gray-200 hover:border-secondary transition-all duration-500 hover:shadow-xl cursor-pointer"
            >
              {/* Optional Image Area - placeholder for MVP */}
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
                
                <h3 className="text-xl font-medium text-primary mb-3 transition-colors duration-300 group-hover:text-secondary">
                  <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 line-clamp-3 text-sm flex-grow">
                  {post.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/blog" 
            className="inline-flex items-center justify-center border border-secondary text-xs font-bold tracking-widest uppercase py-4 px-8 text-secondary bg-transparent hover:bg-secondary hover:text-white transition-colors duration-300"
          >
            Acessar o Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
