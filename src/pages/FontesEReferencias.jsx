import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const referencias = [
  {
    id: 'normam-211',
    sigla: 'NORMAM-211/DPC',
    titulo: 'Normas da Autoridade Marítima para Embarcações Empregadas na Navegação de Esporte e/ou Recreio.',
    descricao: 'Publicação da Diretoria de Portos e Costas, da Marinha do Brasil. A norma reúne regras aplicáveis a embarcações de esporte e recreio, incluindo disposições sobre habilitação de amadores, documentação, equipamentos, segurança e navegação.',
    url: 'https://www.marinha.mil.br/dpc/normas',
    urlLabel: 'Consultar fonte oficial',
  },
  {
    id: 'normam-212',
    sigla: 'NORMAM-212/DPC',
    titulo: 'Normas da Autoridade Marítima para Atividades de Esporte e/ou Recreio com Motos Aquáticas.',
    descricao: 'Publicação da Diretoria de Portos e Costas, da Marinha do Brasil. A norma trata das atividades de esporte e recreio com motos aquáticas, responsabilidades de condutores e instruções relacionadas à habilitação na categoria de Motonauta.',
    url: 'https://www.marinha.mil.br/dpc/normas',
    urlLabel: 'Consultar fonte oficial',
  },
  {
    id: 'ripeam',
    sigla: 'RIPEAM-72',
    titulo: 'Regulamento Internacional para Evitar Abalroamentos no Mar, 1972.',
    descricao: 'O RIPEAM, conhecido internacionalmente como COLREG-72, estabelece regras internacionais para prevenir colisões no mar. No Brasil, a Convenção foi promulgada pelo Decreto nº 80.068, de 2 de agosto de 1977. A edição de referência consultada deve ser indicada nos conteúdos que utilizarem esse regulamento. Em caso de dúvida sobre interpretação ou vigência, consulte a publicação oficial aplicável.',
    url: 'https://www.marinha.mil.br/dpc/normas',
    urlLabel: 'Consultar publicação da Diretoria de Portos e Costas',
  },
  {
    id: 'lesta',
    sigla: 'LESTA',
    titulo: 'Lei nº 9.537, de 11 de dezembro de 1997 — Lei de Segurança do Tráfego Aquaviário em Águas sob Jurisdição Nacional.',
    descricao: 'A LESTA dispõe sobre a segurança do tráfego aquaviário em águas sob jurisdição nacional. Ela estabelece definições, competências da Autoridade Marítima, responsabilidades e medidas relacionadas à segurança da navegação.',
    url: 'https://www.planalto.gov.br/ccivil_03/leis/l9537.htm',
    urlLabel: 'Consultar texto oficial',
  },
  {
    id: 'rlesta',
    sigla: 'RLESTA',
    titulo: 'Decreto nº 2.596, de 18 de maio de 1998 — Regulamento de Segurança do Tráfego Aquaviário em Águas sob Jurisdição Nacional.',
    descricao: 'O RLESTA regulamenta a Lei nº 9.537/1997 e apresenta regras, infrações, penalidades e outras disposições relacionadas à segurança do tráfego aquaviário.',
    url: 'https://www.planalto.gov.br/ccivil_03/decreto/d2596.htm',
    urlLabel: 'Consultar texto oficial',
  },
];

export default function FontesEReferencias() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Fontes e Referências | ArraisPro</title>
        <meta name="description" content="Referências normativas e institucionais consultadas na elaboração dos conteúdos educacionais do ArraisPro: NORMAM-211, NORMAM-212, RIPEAM-72, LESTA e RLESTA." />
        <link rel="canonical" href="https://www.arraispro.com.br/fontes-e-referencias" />
      </Helmet>

      <Header variant="simple" />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Fontes e referências</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          Nesta página, reunimos referências públicas consultadas na elaboração e revisão de conteúdos do ArraisPro.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-12">
          <p className="text-slate-700 text-sm leading-relaxed">
            As referências são apresentadas para fins de transparência e estudo. O ArraisPro não substitui publicações oficiais, treinamentos práticos ou orientações das autoridades competentes. <strong>Em caso de divergência, prevalecem os textos oficiais vigentes e as determinações da Autoridade Marítima.</strong>
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Referências normativas e institucionais</h2>
          <div className="flex flex-col gap-6">
            {referencias.map((ref) => (
              <div key={ref.id} id={ref.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{ref.sigla}</h3>
                <p className="text-sm font-semibold text-blue-700 mb-3">{ref.titulo}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{ref.descricao}</p>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-bold hover:text-blue-800 transition"
                >
                  {ref.urlLabel}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Como usamos estas referências</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            O ArraisPro utiliza referências públicas para elaborar materiais educacionais de apoio aos estudos. O conteúdo pode resumir, organizar ou explicar temas presentes nas fontes consultadas, sem substituir a leitura de normas, leis, regulamentos ou manuais oficiais.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Quando um artigo depender de uma referência específica, a fonte utilizada poderá ser indicada na própria página, especialmente em temas de segurança, regras de navegação, legislação e habilitação.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Revisão do conteúdo</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Normas, leis, regulamentos e materiais institucionais podem ser revisados, substituídos ou atualizados. Por isso, os conteúdos do ArraisPro passam por revisão periódica.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Caso identifique uma referência desatualizada, um link incorreto ou uma possível imprecisão, entre em contato pelo{' '}
            <Link to="/suporte" className="text-blue-600 font-medium hover:text-blue-800 transition">canal oficial de suporte do ArraisPro</Link>.
          </p>
        </section>

        <div className="border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500 leading-relaxed">
            O ArraisPro é uma plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta. Não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
