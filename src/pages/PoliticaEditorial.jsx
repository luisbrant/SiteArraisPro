import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function PoliticaEditorial() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Política Editorial e de Correções | ArraisPro</title>
        <meta name="description" content="Entenda como os conteúdos do ArraisPro são elaborados, revisados, corrigidos e atualizados." />
        <link rel="canonical" href="https://www.arraispro.com.br/politica-editorial" />
      </Helmet>

      <header className="bg-white border-b border-slate-200 shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro" className="h-16 sm:h-20 md:h-24 w-auto max-w-[220px] object-contain" />
          </Link>
          <Link to="/sobre" className="text-blue-600 font-bold hover:text-blue-800 transition">
            &larr; Sobre o ArraisPro
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Política editorial e de correções</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          O ArraisPro produz conteúdos educacionais de apoio aos estudos para Arrais-Amador e Motonauta. Esta política explica como os materiais são elaborados, revisados e corrigidos.
        </p>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Fontes e verificabilidade</h2>
            <p className="text-slate-600 leading-relaxed">
              Em conteúdos técnicos, normativos ou relacionados à segurança, consultamos fontes públicas e confiáveis pertinentes ao assunto. As fontes específicas utilizadas são identificadas sempre que forem relevantes para compreender ou verificar uma afirmação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Linguagem e finalidade</h2>
            <p className="text-slate-600 leading-relaxed">
              Os materiais são escritos para facilitar a preparação teórica. Eles não substituem a leitura das normas aplicáveis, o treinamento prático, a instrução profissional ou a orientação das autoridades competentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Revisões</h2>
            <p className="text-slate-600 leading-relaxed">
              Os conteúdos podem ser atualizados para corrigir erros, esclarecer termos, melhorar a didática ou acompanhar mudanças nas referências consultadas. Artigos técnicos exibem data de última revisão sempre que possível.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Correções</h2>
            <p className="text-slate-600 leading-relaxed">
              Se você identificar uma possível imprecisão, envie-nos a referência e a descrição do problema pelo canal de suporte oficial. Avaliaremos o apontamento e faremos a correção cabível.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contato editorial</h2>
            <div className="bg-slate-100 rounded-xl p-6">
              <p className="text-slate-700 mb-3">Para reportar imprecisões ou problemas com o conteúdo:</p>
              <a href="mailto:contato@arraispro.com.br" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                contato@arraispro.com.br
              </a>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-slate-700 font-medium leading-relaxed">
            O ArraisPro não possui vínculo, homologação ou endosso da Marinha do Brasil.
          </p>
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
