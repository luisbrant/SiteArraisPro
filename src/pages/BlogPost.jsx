import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams, Link } from 'react-router-dom';
import NotFound from './NotFound';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  
  const now = new Date();
  
  // Procura o post pelo slug, verifica se não é rascunho e se a data já chegou
  const post = blogPosts.find((p) => {
    if (p.slug !== slug) return false;
    if (p.draft) return false;
    
    // Tratamento seguro para data
    const postDate = new Date(p.date.length === 10 ? p.date + 'T12:00:00-03:00' : p.date);
    return postDate <= now;
  });

  // Se não encontrou o post, se for um rascunho, ou se for post futuro, exibe tela de não encontrado
  if (!post) {
    return <NotFound />;
  }


  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>{`${post.title} | Blog ArraisPro`}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={`https://www.arraispro.com.br/blog/${post.slug}`} />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content={`${post.title} | Blog ArraisPro`} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.arraispro.com.br/blog/${post.slug}`} />
        <meta property="og:site_name" content="ArraisPro" />
        
        {/* Structured Data (JSON-LD) para Artigo */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.description,
            "author": {
              "@type": "Person",
              "name": post.author || "ArraisPro"
            },
            "publisher": {
              "@type": "Organization",
              "name": "ArraisPro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.arraispro.com.br/logo.png"
              }
            },
            "datePublished": `${post.date}T12:00:00-03:00`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.arraispro.com.br/blog/${post.slug}`
            }
          })}
        </script>
      </Helmet>

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 shadow-sm py-4 md:py-6">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto max-w-[220px] sm:max-w-sm object-contain" />
          </Link>
          <Link to="/blog" className="text-blue-600 font-bold hover:text-blue-800 transition text-sm md:text-base">
            &larr; Voltar para o Blog
          </Link>
        </div>
      </header>

      {/* ARTIGO */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 w-full">
        <div className="mb-10 text-center">
          <p className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">Náutica & Preparação</p>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500 font-medium">
            <span>Por {post.author || "ArraisPro"}</span>
            <span>•</span>
            <span>{new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>

        {/* CONTEÚDO MARKDOWN (ESTILIZADO COM TAILWIND TYPOGRAPHY) */}
        <article className="prose prose-slate prose-lg md:prose-xl mx-auto prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-headings:font-black prose-img:rounded-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* CTA FINAL DO ARTIGO */}
        <div className="mt-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Pronto para testar seus conhecimentos?</h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">Baixe o aplicativo ArraisPro e tenha acesso a milhares de questões comentadas e simulados para sua preparação.</p>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=blog_footer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition shadow-lg w-full sm:w-auto">
            Baixar o ArraisPro grátis no Google Play
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
