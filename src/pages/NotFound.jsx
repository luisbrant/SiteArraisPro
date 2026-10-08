import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Página não encontrada | ArraisPro</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Header variant="standard" />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Página não encontrada
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          A página que você está tentando acessar não existe, foi movida ou é um rascunho ainda não publicado.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg"
        >
          Voltar para a página inicial
        </Link>
      </main>

      <Footer />
    </div>
  );
}
