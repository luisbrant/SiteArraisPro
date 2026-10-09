import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ArraisAmador() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Arrais-Amador: como se preparar para a prova | ArraisPro</title>
        <meta name="description" content="Entenda os temas da preparação teórica para Arrais-Amador e pratique com simulados, questões comentadas e apostila digital." />
        <link rel="canonical" href="https://www.arraispro.com.br/arrais-amador" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Arrais-Amador: como se preparar para a prova | ArraisPro" />
        <meta property="og:description" content="Conheça os principais temas de estudo para Arrais-Amador e organize sua preparação com o ArraisPro." />
        <meta property="og:url" content="https://www.arraispro.com.br/arrais-amador" />
        <meta property="og:site_name" content="ArraisPro" />
        <meta property="og:image" content="https://www.arraispro.com.br/og-arrais.jpg" />
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
              Arrais-Amador
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Arrais-Amador: como se preparar para a prova
        </h1>
        <div className="text-lg text-slate-600 mb-10 space-y-4">
          <p>
            Está se preparando para a prova de Arrais-Amador? No ArraisPro, você encontra simulados, questões comentadas, apostila digital, flashcards e uma trilha de estudos para revisar os principais conteúdos da habilitação de forma organizada.
          </p>
          <p>
            A preparação pode envolver temas como regras de navegação, balizamento, RIPEAM, segurança da navegação, equipamentos, primeiros socorros, marinharia e legislação aplicável à categoria.
          </p>
          <p>
            O ArraisPro permite que você pratique no seu ritmo, acompanhe o desempenho e identifique os temas que precisam de reforço antes da prova.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Recursos para estudar Arrais-Amador</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Simulados e questões comentadas</h3>
              <p className="text-slate-600">Pratique questões por tema e dificuldade, revise os erros e use os comentários para compreender melhor cada resposta.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Apostila digital e flashcards</h3>
              <p className="text-slate-600">Revise conteúdos de forma estruturada e retome conceitos importantes sempre que precisar.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Trilha de estudos</h3>
              <p className="text-slate-600">Acompanhe a evolução dos seus estudos e organize a revisão antes da prova.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Conteúdos para sua preparação</h2>
          <ul className="list-disc pl-6 space-y-3 text-blue-600 font-medium">
            <li><Link to="/blog/como-e-a-prova-da-marinha-arrais-amador" className="hover:underline">Como é a prova de Arrais-Amador?</Link></li>
            <li><Link to="/blog/passo-a-passo-carteira-arrais-amador-2026" className="hover:underline">Passo a passo para tirar a carteira de Arrais-Amador</Link></li>
            <li><Link to="/blog/simulado-arrais-amador-gratis-atualizado" className="hover:underline">Simulado Arrais-Amador: como praticar melhor</Link></li>
            <li><Link to="/blog/ripeam-descomplicado-regras-ouro" className="hover:underline">RIPEAM para Arrais-Amador: regras explicadas</Link></li>
            <li><Link to="/blog/entendendo-o-balizamento-maritimo" className="hover:underline">Entendendo o balizamento marítimo: IALA B</Link></li>
            <li><Link to="/blog/questoes-mais-reprovam-prova-arrais-motonauta" className="hover:underline">Questões que exigem mais atenção na prova de Arrais e Motonauta</Link></li>
            <li><Link to="/blog/diferenca-arrais-amador-e-motonauta" className="hover:underline">Qual é a diferença entre Arrais-Amador e Motonauta?</Link></li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Arrais-Amador ou Motonauta?</h2>
          <p className="text-slate-600 mb-4">Se você quer entender qual habilitação atende ao seu objetivo, leia o guia comparativo:</p>
          <Link to="/blog/diferenca-arrais-amador-e-motonauta" className="inline-block text-blue-600 font-bold hover:text-blue-800 transition">
            Entenda a diferença entre Arrais-Amador e Motonauta &rarr;
          </Link>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center mt-12">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Pratique com simulados de Arrais-Amador no aplicativo</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Faça simulados, revise os conteúdos e acompanhe seu progresso no aplicativo ArraisPro.</p>
          <Link to="/simulado-arrais-amador" className="inline-block bg-white text-blue-600 font-bold py-3 px-6 rounded-full border border-blue-200 hover:bg-blue-50 transition mb-4 mx-2">
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
