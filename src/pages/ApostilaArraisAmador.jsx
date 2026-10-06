import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ApostilaArraisAmador() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Apostila para Arrais-Amador | ArraisPro</title>
        <meta name="description" content="Conheça a Apostila ArraisPro: material digital de apoio com conteúdos para a preparação teórica de Arrais-Amador." />
        <link rel="canonical" href="https://www.arraispro.com.br/apostila-arrais-amador" />
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
          Apostila digital para Arrais-Amador
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          A Apostila ArraisPro é um material digital de apoio organizado para facilitar a compreensão dos temas exigidos na preparação teórica de Arrais-Amador.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">O que é a Apostila ArraisPro</h2>
          <p className="text-slate-600 mb-4">
            Apostila ArraisPro é um conteúdo teórico disponibilizado diretamente no aplicativo para quem precisa revisar ou entender melhor as regras de navegação antes de partir para as questões. Vale lembrar que não somos uma "apostila oficial" ou aprovada pela Marinha; somos um material de apoio educacional independente.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Temas abordados</h2>
          <p className="text-slate-600 mb-4">
            A apostila reúne resumos esquematizados de assuntos como RIPEAM, balizamento, segurança da navegação, primeiros socorros básicos, noções de sobrevivência e legislação.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Como usar a apostila com simulados e revisões</h2>
          <p className="text-slate-600 mb-4">
            A melhor estratégia não é apenas ler. Após concluir a leitura de um capítulo (por exemplo, Balizamento), recomendamos que você faça imediatamente um <Link to="/simulado-arrais-amador" className="text-blue-600 underline">simulado</Link> correspondente a esse assunto para fixar as informações e testar a compreensão.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Formato e acesso</h2>
          <p className="text-slate-600 mb-4">
            O material está embutido no aplicativo ArraisPro, permitindo que você estude pelo celular a qualquer hora. Parte do material pode estar disponível gratuitamente, enquanto o conteúdo integral faz parte da versão Pro do app.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limites do material</h2>
          <p className="text-slate-600 mb-4">
            A Apostila ArraisPro foca na parte teórica. Ler este material não garante aprovação, e o conteúdo de forma alguma substitui as aulas de treinamento prático e as determinações oficiais em vigor.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-800">Posso baixar a apostila em PDF?</h3>
              <p className="text-slate-600">Não. O material é acessado exclusivamente por dentro do aplicativo ArraisPro para melhor integração com as questões.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">O conteúdo é suficiente para passar?</h3>
              <p className="text-slate-600">Ele é um excelente guia de estudos, mas a dedicação do aluno na leitura e resolução de simulados é o que constrói o preparo. Não oferecemos garantias de aprovação.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Conheça a versão Pro</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Baixe o ArraisPro para acessar a apostila, recursos premium de simulados e ter sua preparação completa na palma da mão.</p>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg">
            Conhecer a Apostila ArraisPro no aplicativo
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
