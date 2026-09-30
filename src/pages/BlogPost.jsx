import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>{post.title} | Blog ArraisPro</title>
        <meta name="description" content={post.description} />
      </Helmet>

      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 shadow-sm py-4 md:py-6">
        <div className="max-w-3xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-8 md:h-10 w-auto" />
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
            <span>Por {post.author}</span>
            <span>•</span>
            <span>{new Date(post.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>

        {/* CONTEÚDO MARKDOWN (ESTILIZADO COM TAILWIND TYPOGRAPHY) */}
        <article className="prose prose-slate prose-lg md:prose-xl mx-auto prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-headings:font-black prose-img:rounded-xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>

        {/* CTA FINAL DO ARTIGO */}
        <div className="mt-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Pronto para passar de primeira?</h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">Baixe o aplicativo ArraisPro e tenha acesso ao maior banco de questões comentadas e simulados da Marinha.</p>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=blog_footer" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition shadow-lg w-full sm:w-auto">
            Baixar Grátis no Google Play
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-900 mt-auto">
        <div className="max-w-3xl mx-auto px-6">
          <p>© 2026 ArraisPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
