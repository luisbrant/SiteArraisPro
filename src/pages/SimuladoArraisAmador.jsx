import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function SimuladoArraisAmador() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Simulado para Arrais-Amador | ArraisPro</title>
        <meta name="description" content="Pratique para Arrais-Amador com simulados por tema, questões comentadas e acompanhamento de desempenho no ArraisPro." />
        <link rel="canonical" href="https://www.arraispro.com.br/simulado-arrais-amador" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <header className="bg-white border-b border-slate-200 shadow-sm py-4 md:py-6">
        <nav aria-label="Navegação principal" className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 w-auto object-contain" />
          </Link>
          <div className="hidden md:flex gap-6 font-medium text-slate-600">
            <Link to="/arrais-amador" className="hover:text-blue-600">Arrais-Amador</Link>
            <Link to="/motonauta" className="hover:text-blue-600">Motonauta</Link>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          </div>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition">Baixar App</a>
        </nav>
      </header>

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2" href="#conteudo-principal">Ir para o conteúdo principal</a>

      <main id="conteudo-principal" className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Simulado para Arrais-Amador
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          Pratique conteúdos relacionados à preparação teórica para Arrais-Amador com os simulados disponíveis no aplicativo ArraisPro.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Como os simulados ajudam na preparação</h2>
          <p className="text-slate-600 mb-4">
            Realizar exercícios é uma das formas mais eficazes de fixar o conhecimento. Nossos simulados ajudam a identificar seus pontos fracos antes de você fazer qualquer exame. Eles estão disponíveis dentro do nosso aplicativo.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pratique por tema e acompanhe seu desempenho</h2>
          <p className="text-slate-600 mb-4">
            No aplicativo, você pode filtrar as questões por assuntos específicos, como luzes, balizamento ou segurança, além de poder verificar comentários e explicações sobre alternativas erradas, o que facilita o aprendizado.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Revise os erros e retome a teoria</h2>
          <p className="text-slate-600 mb-4">
            Com as estatísticas do aplicativo, você descobre facilmente onde está errando mais e pode direcionar seus estudos para aqueles assuntos, retomando as referências teóricas adequadas.
          </p>
          <p className="text-slate-600 mb-4">
            <strong>Como começar:</strong><br/>
            1. Baixe o ArraisPro no Google Play.<br/>
            2. Selecione a categoria Arrais-Amador.<br/>
            3. Escolha um simulado ou tema disponível.<br/>
            4. Revise os resultados e retome os conteúdos que exigem mais atenção.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conteúdos relacionados para Arrais-Amador</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600 mb-4">
            <li><Link to="/arrais-amador" className="hover:underline">Página inicial de preparação Arrais-Amador</Link></li>
            <li><Link to="/apostila-arrais-amador" className="hover:underline">Apostila digital para Arrais-Amador</Link></li>
            <li><Link to="/blog/ripeam-regras-5-8" className="hover:underline">Regras 5 a 8 do RIPEAM</Link></li>
            <li><Link to="/blog/balizamento-iala-regiao-b" className="hover:underline">Balizamento IALA Região B</Link></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-800">O simulado é gratuito?</h3>
              <p className="text-slate-600">O aplicativo possui uma versão gratuita com vários exercícios liberados, mas também inclui opções Pro para desbloqueio completo de simulados.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Essas são as questões exatas da prova oficial?</h3>
              <p className="text-slate-600">Não. As questões do ArraisPro são elaboradas e selecionadas por nós com base no programa exigido, para apoiar os seus estudos.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Baixe o ArraisPro</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Leve a preparação teórica no seu bolso e pratique com o simulador direto no celular.</p>
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
