import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ArraisAmador() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Arrais-Amador: como se preparar para a prova | ArraisPro</title>
        <meta name="description" content="Entenda os temas da preparação teórica para Arrais-Amador e pratique com simulados, questões comentadas e apostila digital." />
        <link rel="canonical" href="https://www.arraispro.com.br/arrais-amador" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <header className="bg-white border-b border-slate-200 shadow-sm py-4 md:py-6">
        <nav aria-label="Navegação principal" className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex gap-6 font-medium text-slate-600">
            <Link to="/arrais-amador" className="text-blue-600">Arrais-Amador</Link>
            <Link to="/motonauta" className="hover:text-blue-600">Motonauta</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          </div>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition">Baixar App</a>
        </nav>
      </header>

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2" href="#conteudo-principal">Ir para o conteúdo principal</a>

      <main id="conteudo-principal" className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Arrais-Amador: como se preparar para a prova
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          <strong>Arrais-Amador: como se preparar para a prova</strong> teórica? Esta página organiza recursos oferecidos no ArraisPro. Lembre-se: o aplicativo é um material de apoio e não substitui requisitos, exames ou orientações oficiais das autoridades competentes.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">O que é a habilitação de Arrais-Amador?</h2>
          <p className="text-slate-600 mb-4">
            Arrais-Amador é a categoria de habilitação destinada a conduzir embarcações de esporte e recreio nos limites da navegação interior. É importante destacar que essa habilitação não permite, por si só, a condução de motos aquáticas (que exige a categoria Motonauta).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Temas para revisar na preparação teórica</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
            <li>Legislação e responsabilidades do condutor</li>
            <li>RIPEAM, luzes, marcas e sinais</li>
            <li>Balizamento e auxílios à navegação</li>
            <li>Segurança, salvatagem e comunicações</li>
            <li>Meteorologia, marés e noções de navegação</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Como organizar os estudos</h2>
          <p className="text-slate-600 mb-4">
            Para uma preparação consistente, recomendamos focar na leitura da teoria, seguida pela prática intensa de questões. Revise seus erros com atenção e acompanhe seu progresso ao longo das semanas.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Simulados para Arrais-Amador</h2>
          <p className="text-slate-600 mb-4">
            A prática é fundamental. Você pode realizar simulados com questões comentadas diretamente no app. Para entender como funcionam, confira nossa página sobre o <Link to="/simulado-arrais-amador" className="text-blue-600 underline">simulado para Arrais-Amador</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Apostila digital para Arrais-Amador</h2>
          <p className="text-slate-600 mb-4">
            O ArraisPro disponibiliza um material digital focado nos temas cobrados. Saiba mais sobre a <Link to="/apostila-arrais-amador" className="text-blue-600 underline">apostila para Arrais-Amador</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Guias relacionados</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600 mb-4">
            <li><Link to="/blog/ripeam-regras-5-8" className="hover:underline">Regras 5 a 8 do RIPEAM</Link></li>
            <li><Link to="/blog/luzes-navegacao-ripeam" className="hover:underline">Luzes de navegação no RIPEAM</Link></li>
            <li><Link to="/blog/balizamento-iala-regiao-b" className="hover:underline">Balizamento IALA Região B</Link></li>
            <li><Link to="/blog/sinais-sonoros-ripeam" className="hover:underline">Sinais sonoros no RIPEAM</Link></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-800">O ArraisPro emite habilitação?</h3>
              <p className="text-slate-600">Não. O aplicativo é uma plataforma independente de apoio aos estudos e não emite carteiras, nem possui vínculo com a Marinha do Brasil.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">O simulado garante minha aprovação?</h3>
              <p className="text-slate-600">Não. A aprovação depende do seu esforço, dos seus conhecimentos e do cumprimento dos requisitos formais. O aplicativo é apenas uma ferramenta auxiliar.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Posso usar o aplicativo para aprender a pilotar?</h3>
              <p className="text-slate-600">Não. O ArraisPro oferece conteúdo focado na preparação teórica. Ele não substitui o treinamento prático obrigatório com um profissional ou escola habilitada.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Comece a estudar com o ArraisPro</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Baixe o aplicativo para ter acesso à apostila, simulados e questões de Arrais-Amador e Motonauta.</p>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg">
            Baixar o ArraisPro no Google Play
          </a>
        </div>
      </main>

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
