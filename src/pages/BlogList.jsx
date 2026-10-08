import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

      <Header variant="simple" />

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
            .filter(post => {
              if (post.draft) return false;
              const postDate = new Date(post.date.length === 10 ? post.date + 'T12:00:00-03:00' : post.date);
              return postDate <= new Date();
            })
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
      <Footer />
    </div>
  );
}
