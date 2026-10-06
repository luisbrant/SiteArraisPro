import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';

export default function BlogList() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Blog ArraisPro | Arrais-Amador e Motonauta</title>
        <meta 
          name="description" 
          content="Guias e dicas para estudar para Arrais-Amador e Motonauta. Explore conteúdos sobre provas, navegação e segurança náutica no blog ArraisPro." 
        />
        <link rel="canonical" href="https://www.arraispro.com.br/blog" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Blog ArraisPro | Arrais-Amador e Motonauta" />
        <meta 
          property="og:description" 
          content="Conteúdos de apoio para estudar para Arrais-Amador e Motonauta." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.arraispro.com.br/blog" />
        <meta property="og:site_name" content="ArraisPro" />
        
        {/* Structured Data (JSON-LD) para o Google ler o Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog ArraisPro",
            "description": "Guias e dicas para estudar para Arrais-Amador e Motonauta. Explore conteúdos sobre provas, navegação e segurança náutica.",
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
      <header className="bg-white border-b border-slate-200 shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto max-w-[220px] sm:max-w-sm object-contain" />
          </Link>
          <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition">
            &larr; Voltar ao site
          </Link>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
          Blog ArraisPro: Preparação para Arrais-Amador e Motonauta
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Guias e dicas para estudar para Arrais-Amador e Motonauta, revisar temas da prova e conhecer assuntos de segurança da navegação.
        </p>

        <div className="grid gap-8">
          {blogPosts
            .filter(post => !post.draft)
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((post) => (
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

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 mt-auto">
        <div className="max-w-4xl mx-auto px-6 text-sm flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 justify-center text-center">
            <Link to="/sobre" className="hover:text-white">Sobre o ArraisPro</Link>
            <Link to="/como-produzimos-o-conteudo" className="hover:text-white">Como produzimos o conteúdo</Link>
            <Link to="/fontes-e-referencias" className="hover:text-white">Fontes e referências</Link>
            <Link to="/politica-editorial" className="hover:text-white">Política editorial</Link>
            <Link to="/politica-de-privacidade" className="hover:text-white">Política de privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white">Termos de uso</Link>
            <Link to="/suporte" className="hover:text-white">Suporte</Link>
          </div>
          <p className="text-center text-slate-500 border-t border-slate-800 pt-6">
            O ArraisPro é uma plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta. Não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil.
          </p>
        </div>
      </footer>
    </div>
  );
}
