import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Suporte() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Suporte | ArraisPro</title>
        <meta name="description" content="Entre em contato com a equipe de suporte do ArraisPro." />
      </Helmet>

      <Header variant="simple" />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-20 w-full text-center">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">💬</div>
          <h1 className="text-3xl font-black text-slate-900 mb-4">Como podemos ajudar?</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
            Tem alguma dúvida, encontrou um problema no app ou quer enviar uma sugestão? Fale diretamente com a nossa equipe!
          </p>
          
          <a href="mailto:contato@arraispro.com.br" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-blue-600/30 transition text-lg mb-6">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            contato@arraispro.com.br
          </a>
          
          <p className="text-sm text-slate-500">
            Tempo médio de resposta: 24 horas úteis.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
