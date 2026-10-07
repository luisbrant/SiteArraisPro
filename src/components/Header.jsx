import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ variant = 'standard' }) {
  if (variant === 'simple') {
    return (
      <header className="bg-white border-b border-slate-200 shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro" className="h-16 sm:h-20 md:h-24 w-auto max-w-[220px] object-contain" />
          </Link>
          <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition">
            &larr; Voltar ao site
          </Link>
        </div>
      </header>
    );
  }

  // standard variant
  return (
    <header className="bg-white border-b border-slate-200 shadow-sm py-4 md:py-6">
      <nav aria-label="Navegação principal" className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <Link to="/">
          <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex gap-6 font-medium text-slate-600">
          <Link to="/" className="hover:text-blue-600">Início</Link>
          <Link to="/arrais-amador" className="hover:text-blue-600">Arrais-Amador</Link>
          <Link to="/motonauta" className="hover:text-blue-600">Motonauta</Link>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <Link to="/suporte" className="hover:text-blue-600">Suporte</Link>
        </div>
        <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition shadow">
          Baixar o app
        </a>
      </nav>
    </header>
  );
}
