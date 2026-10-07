import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ApostilaArraisAmador() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Apostila para Arrais-Amador | ArraisPro</title>
        <meta name="description" content="Conheça a Apostila ArraisPro: material digital de apoio com conteúdos para a preparação teórica de Arrais-Amador." />
        <link rel="canonical" href="https://www.arraispro.com.br/apostila-arrais-amador" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header variant="standard" />

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2" href="#conteudo-principal">Ir para o conteúdo principal</a>

      <main id="conteudo-principal" className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Apostila digital para Arrais-Amador
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          A <strong>apostila digital para Arrais-Amador</strong> do ArraisPro é um material de apoio organizado para facilitar a compreensão dos temas exigidos na preparação teórica.
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

      <Footer />
    </div>
  );
}
