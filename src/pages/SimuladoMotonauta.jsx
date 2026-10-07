import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SimuladoMotonauta() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Simulado para Motonauta | ArraisPro</title>
        <meta name="description" content="Pratique para a prova de Motonauta com simulados, questões comentadas e recursos de revisão no ArraisPro." />
        <link rel="canonical" href="https://www.arraispro.com.br/simulado-motonauta" />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <Header variant="standard" />

      <a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2" href="#conteudo-principal">Ir para o conteúdo principal</a>

      <main id="conteudo-principal" className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-20 w-full">
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
          Simulado para Motonauta
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10">
          Fazer um <strong>simulado para Motonauta</strong> é a melhor forma de praticar os conteúdos da preparação teórica com os recursos disponíveis no aplicativo ArraisPro.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Pratique a preparação teórica para Motonauta</h2>
          <p className="text-slate-600 mb-4">
            Testar seus conhecimentos antes do exame pode ajudar a identificar dúvidas sobre normas importantes de pilotagem e segurança de motos aquáticas. Todo o ambiente de simulação ocorre dentro do app ArraisPro.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questões por tema e revisão de erros</h2>
          <p className="text-slate-600 mb-4">
            No aplicativo, você tem acesso a simulados divididos por categorias de estudo. Se errar uma pergunta sobre balizamento, por exemplo, o aplicativo mostra comentários e o histórico para você conseguir melhorar o seu desempenho nas próximas tentativas.
          </p>
          <p className="text-slate-600 mb-4">
            <strong>Como começar:</strong><br/>
            1. Baixe o ArraisPro no Google Play.<br/>
            2. Selecione a categoria Motonauta.<br/>
            3. Escolha um simulado ou tema disponível.<br/>
            4. Revise seus resultados e retome os conteúdos necessários.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Segurança e regras de navegação</h2>
          <p className="text-slate-600 mb-4">
            Lembre-se de dar atenção especial às questões focadas em regras de navegação, distanciamento e uso de colete salva-vidas, pois elas são indispensáveis na rotina do Motonauta.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conteúdos relacionados</h2>
          <ul className="list-disc pl-6 space-y-2 text-blue-600 mb-4">
            <li><Link to="/motonauta" className="hover:underline">Página inicial de preparação Motonauta</Link></li>
            <li><Link to="/blog/seguranca-moto-aquatica" className="hover:underline">Segurança com moto aquática</Link></li>
            <li><Link to="/blog/habilitacao-motonauta" className="hover:underline">Preparação teórica para Motonauta</Link></li>
            <li><Link to="/blog/balizamento-iala-regiao-b" className="hover:underline">Balizamento IALA Região B</Link></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Perguntas frequentes</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-slate-800">Preciso pagar para usar o simulado?</h3>
              <p className="text-slate-600">O app oferece modalidades gratuitas e pagas. As modalidades pagas desbloqueiam ainda mais perguntas e o acompanhamento avançado de desempenho.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">O simulado cobre a parte prática?</h3>
              <p className="text-slate-600">Não. O aplicativo foca inteiramente na preparação teórica. A instrução prática deve ser feita com profissionais nas escolas náuticas.</p>
            </div>
          </div>
        </section>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Baixe o ArraisPro</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Instale o app e pratique as perguntas teóricas de Motonauta de qualquer lugar.</p>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition shadow-lg">
            Baixar o ArraisPro no Google Play
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
