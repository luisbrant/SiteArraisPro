import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Sobre o ArraisPro | Apoio aos estudos náuticos</title>
        <meta name="description" content="Conheça o ArraisPro, plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta." />
        <link rel="canonical" href="https://www.arraispro.com.br/sobre" />
      </Helmet>

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

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Sobre o ArraisPro</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          O ArraisPro é uma plataforma independente de tecnologia educacional criada para apoiar a preparação teórica de candidatos às habilitações de Arrais-Amador e Motonauta.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          Nosso objetivo é transformar conteúdos extensos de navegação, segurança e regulamentação em uma jornada de estudos mais clara e organizada. Para isso, reunimos recursos como apostila digital, simulados, questões comentadas, flashcards e trilhas de revisão, conforme a disponibilidade no aplicativo.
        </p>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          O ArraisPro foi desenvolvido para ajudar o aluno a praticar, retomar conceitos e identificar os assuntos que merecem mais atenção durante a preparação. O aplicativo não substitui o treinamento prático, os requisitos formais para habilitação nem as orientações da Autoridade Marítima.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4">Nossa proposta</h2>
        <p className="text-slate-600 leading-relaxed mb-10">
          Estudar para uma habilitação náutica envolve temas técnicos, regras de navegação, segurança, sinalização e responsabilidades do condutor. O ArraisPro organiza esses assuntos em recursos de estudo que ajudam o candidato a avançar no próprio ritmo, sem depender de materiais espalhados ou difíceis de encontrar.
        </p>

        <h2 className="text-2xl font-bold text-slate-800 mb-4">Independência e limites</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-10">
          <p className="text-slate-700 leading-relaxed mb-3">
            O ArraisPro não emite habilitações, não realiza exames oficiais e não substitui cursos, treinamentos práticos ou instruções das autoridades competentes.
          </p>
          <p className="text-slate-700 leading-relaxed font-medium">
            O ArraisPro não possui vínculo, homologação ou endosso da Marinha do Brasil.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/como-produzimos-o-conteudo" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition">
            Como produzimos o conteúdo &rarr;
          </Link>
          <Link to="/politica-editorial" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition">
            Política editorial e de correções &rarr;
          </Link>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-900 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-3">O ArraisPro é uma plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta. Não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil.</p>
          <p>© 2026 ArraisPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
