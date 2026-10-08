import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Motonauta() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Motonauta: como se preparar para a prova | ArraisPro</title>
        <meta name="description" content="Prepare-se para a prova de Motonauta com simulados, questões comentadas e conteúdos de revisão para moto aquática." />
        <link rel="canonical" href="https://www.arraispro.com.br/motonauta" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Motonauta: como se preparar para a prova | ArraisPro" />
        <meta property="og:description" content="Revise temas da preparação teórica para Motonauta e pratique com os recursos do ArraisPro." />
        <meta property="og:url" content="https://www.arraispro.com.br/motonauta" />
        <meta property="og:site_name" content="ArraisPro" />
        <meta property="og:image" content="https://www.arraispro.com.br/og-motonauta.jpg" />
      </Helmet>

      <Header variant="standard" />

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2" href="#conteudo-principal">Ir para o conteúdo principal</a>

      <main id="conteudo-principal" className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-16 w-full bg-white shadow-sm border border-slate-200 rounded-3xl my-8">
        
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">Início</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li aria-current="page" className="font-medium text-slate-800">
              Motonauta
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Motonauta: como se preparar para a prova
        </h1>
        <div className="text-lg text-slate-600 mb-10 space-y-4">
          <p>
            Vai fazer a prova de Motonauta? O ArraisPro reúne simulados, questões comentadas, apostila digital, flashcards e uma trilha de estudos para ajudar você a revisar os conteúdos da habilitação para condução de moto aquática.
          </p>
          <p>
            Organize seus estudos com materiais voltados a temas como segurança da navegação, navegação interior, balizamento, RIPEAM, equipamentos, condução responsável de moto aquática e legislação aplicável à categoria.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recursos para estudar Motonauta</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Simulados e questões comentadas</h3>
              <p className="text-slate-600">Pratique questões organizadas por assunto e dificuldade, veja comentários e identifique quais conteúdos precisam de mais revisão.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Apostila digital e flashcards</h3>
              <p className="text-slate-600">Revise conceitos importantes de maneira estruturada e retome os assuntos em que você apresentar mais dificuldade.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Trilha de estudos</h3>
              <p className="text-slate-600">Acompanhe o ritmo da sua preparação, registre a evolução e estude com mais organização antes da prova.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Conteúdos para sua preparação</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-600 font-medium">
            <li><Link to="/blog/diferenca-arrais-amador-e-motonauta" className="hover:underline">Qual é a diferença entre Arrais-Amador e Motonauta?</Link></li>
            <li><Link to="/blog/multa-pilotar-barco-sem-habilitacao" className="hover:underline">Posso pilotar barco ou jet ski sem habilitação?</Link></li>
            <li><Link to="/blog/questoes-mais-reprovam-prova-arrais-motonauta" className="hover:underline">Questões que exigem mais atenção na prova de Arrais e Motonauta</Link></li>
            <li><Link to="/blog/ripeam-descomplicado-regras-ouro" className="hover:underline">RIPEAM para Arrais-Amador e Motonauta: regras explicadas</Link></li>
            <li><Link to="/blog/o-que-estudar-vespera-prova-marinha" className="hover:underline">O que estudar na véspera da prova?</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Motonauta ou Arrais-Amador?</h2>
          <p className="text-slate-600 mb-4">As habilitações atendem a objetivos diferentes. Se você quer comparar as categorias antes de começar a estudar, consulte o guia:</p>
          <Link to="/blog/diferenca-arrais-amador-e-motonauta" className="inline-block text-blue-600 font-bold hover:text-blue-800 transition">
            Entenda a diferença entre Arrais-Amador e Motonauta &rarr;
          </Link>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center mt-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Pratique com simulados de Motonauta no aplicativo</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Faça simulados, revise os conteúdos e acompanhe o seu progresso no aplicativo ArraisPro.</p>
          <Link to="/simulado-motonauta" className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full border border-blue-200 hover:bg-blue-50 transition mb-4 mx-2">
            Ver página de simulados
          </Link>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg mb-6">
            Baixar o ArraisPro na Google Play
          </a>
          <div className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed border-t border-slate-200 pt-4 text-justify">
            O ArraisPro é uma plataforma independente de apoio aos estudos. Não possui vínculo, homologação ou endosso da Marinha do Brasil, das Capitanias dos Portos ou de órgãos governamentais.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
