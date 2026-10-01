import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

export default function BlogList() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Blog ArraisPro | Dicas para Prova de Arrais Amador e Motonauta</title>
        <meta name="description" content="O guia definitivo para passar no exame da Marinha. Simulados, diferença entre Arrais e Motonauta, dicas práticas e conteúdo 100% atualizado." />
        <link rel="canonical" href="https://www.arraispro.com.br/blog" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Blog ArraisPro | Dicas para Prova de Arrais Amador e Motonauta" />
        <meta property="og:description" content="O guia definitivo para passar no exame da Marinha. Simulados, diferença entre Arrais e Motonauta, dicas práticas e conteúdo 100% atualizado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arraispro.com.br/blog" />
        <meta property="og:site_name" content="ArraisPro" />
        
        {/* Structured Data (JSON-LD) para o Google ler o Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog ArraisPro",
            "description": "O guia definitivo para passar no exame da Marinha. Simulados, dicas de Arrais Amador e Motonauta.",
            "url": "https://www.arraispro.com.br/blog",
            "publisher": {
              "@type": "Organization",
              "name": "ArraisPro",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.arraispro.com.br/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      {/* HEADER SIMPLES */}
      <header className="bg-white border-b border-slate-200 shadow-sm py-3">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-24 md:h-28 w-auto object-contain -my-4" />
          </Link>
          <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition">
            &larr; Voltar ao site
          </Link>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
          Blog ArraisPro: Preparação para Arrais Amador e Motonauta
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Guias, dicas exclusivas e tudo o que você precisa saber para passar de primeira no exame da Marinha e pilotar sua embarcação com segurança.
        </p>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <p className="text-sm text-slate-500 font-medium mb-3">
                {new Date(post.date + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {post.description}
              </p>
              <Link 
                to={`/blog/${post.slug}`} 
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition"
              >
                Ler matéria completa &rarr;
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* FOOTER SIMPLES */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-900 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <p>© 2026 ArraisPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
