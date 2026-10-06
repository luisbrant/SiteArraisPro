import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Motonauta() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Motonauta: como se preparar para a prova | ArraisPro</title>
        <meta name="description" content="Prepare-se para a prova de Motonauta com simulados, questões comentadas e conteúdos de revisão para moto aquática." />
        <link rel="canonical" href="https://www.arraispro.com.br/motonauta" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <header className="bg-white border-b border-slate-200 shadow-sm py-4 md:py-6">
        <nav aria-label="Navegação principal" className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex gap-6 font-medium text-slate-600">
            <Link to="/arrais-amador" className="hover:text-blue-600">Arrais-Amador</Link>
            <Link to="/motonauta" className="text-blue-600">Motonauta</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          </div>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition">Baixar App</a>
        </nav>
      </header>

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2" href="#conteudo-principal">Ir para o conteúdo principal</a>

      <main id="conteudo-principal" className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Motonauta: como se preparar para a prova
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          Bem-vindo à página de apoio à preparação teórica para Motonauta. Nossos recursos ajudam você a revisar o conteúdo, mas lembre-se de que treinamento prático e requisitos oficiais não são substituídos por nenhum aplicativo.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">O que é a habilitação de Motonauta?</h2>
          <p className="text-slate-600 mb-4">
            Motonauta é a categoria de habilitação destinada exclusivamente à condução de motos aquáticas (jet skis) nos limites da navegação interior.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Temas para revisar</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
            <li>Regras de navegação aplicáveis</li>
            <li>Segurança na condução de motos aquáticas</li>
            <li>Equipamentos de segurança e conduta responsável</li>
            <li>Sinalização, balizamento e RIPEAM</li>
            <li>Responsabilidades do condutor</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Como estudar para Motonauta</h2>
          <p className="text-slate-600 mb-4">
            Você pode estudar revisando a teoria e respondendo a perguntas no aplicativo. A resolução de questões é uma das melhores formas de fixar regras de segurança e navegação antes do seu exame.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Simulado para Motonauta</h2>
          <p className="text-slate-600 mb-4">
            Quer praticar? Conheça os simulados no nosso aplicativo acessando a página sobre <Link to="/simulado-motonauta" className="text-blue-600 underline">simulado para Motonauta</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Guias relacionados</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600 mb-4">
            <li><Link to="/blog/seguranca-moto-aquatica" className="hover:underline">Segurança com moto aquática</Link></li>
            <li><Link to="/blog/habilitacao-motonauta" className="hover:underline">Habilitação de Motonauta: preparação teórica</Link></li>
            <li><Link to="/blog/balizamento-iala-regiao-b" className="hover:underline">Balizamento IALA Região B</Link></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-800">Preciso de Arrais-Amador para ser Motonauta?</h3>
              <p className="text-slate-600">Não, a habilitação de Motonauta possui seus próprios requisitos. No entanto, muitos candidatos optam por prestar as duas provas.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">O app ensina a pilotar moto aquática?</h3>
              <p className="text-slate-600">Não. O ArraisPro oferece conteúdo de apoio à teoria. A pilotagem exige prática em entidades de treinamento devidamente homologadas.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Onde vejo os requisitos oficiais?</h3>
              <p className="text-slate-600">Recomendamos acessar a página da Diretoria de Portos e Costas (DPC) ou a Capitania dos Portos da sua região, ou verificar a nossa seção de <Link to="/fontes-e-referencias" className="text-blue-600 underline">fontes e referências</Link>.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Estude com o ArraisPro</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Prepare-se para o seu exame praticando no seu smartphone com simulados organizados por tema.</p>
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
