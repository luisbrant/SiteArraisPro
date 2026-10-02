import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function FonteseAtualizacoes() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Fontes e Atualizações | ArraisPro</title>
        <meta name="description" content="Referências normativas e institucionais consultadas na elaboração dos conteúdos educacionais do ArraisPro." />
        <link rel="canonical" href="https://www.arraispro.com.br/fontes-e-atualizacoes" />
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
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Fontes e atualizações</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Nesta página, reunimos referências públicas consultadas na elaboração e revisão de conteúdos do ArraisPro. As referências são apresentadas para transparência e estudo. O ArraisPro não substitui as publicações oficiais, treinamentos práticos ou orientações das autoridades competentes.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Referências normativas e institucionais</h2>
          <div className="flex flex-col gap-4">
            {[
              {
                title: 'NORMAM-211/DPC',
                desc: 'Normas da Autoridade Marítima para Habilitação de Aquaviários — Habilitação de Amadores. Diretoria de Portos e Costas, Marinha do Brasil.',
              },
              {
                title: 'NORMAM-212/DPC',
                desc: 'Normas da Autoridade Marítima para Habilitação de Aquaviários — Motonautas e Motonáutica de Competição. Diretoria de Portos e Costas, Marinha do Brasil.',
              },
              {
                title: 'RIPEAM-72',
                desc: 'Regulamento Internacional para Evitar Abalroamentos no Mar, 1972 (COLREGS). Convenção Internacional adotada pelo Brasil.',
              },
              {
                title: 'LESTA e RLESTA',
                desc: 'Lei de Segurança do Tráfego Aquaviário e seu Regulamento — Lei nº 9.537/1997 e Decreto nº 2.596/1998.',
              },
            ].map((ref) => (
              <div key={ref.title} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <p className="font-bold text-slate-900 mb-1">{ref.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{ref.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Atualizações de conteúdo</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 font-semibold text-slate-700 rounded-tl-lg">Data</th>
                  <th className="p-3 font-semibold text-slate-700">Página ou tema</th>
                  <th className="p-3 font-semibold text-slate-700">Tipo</th>
                  <th className="p-3 font-semibold text-slate-700 rounded-tr-lg">Motivo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3 text-slate-600 whitespace-nowrap">Out/2026</td>
                  <td className="p-3 text-slate-600">Homepage</td>
                  <td className="p-3 text-slate-600">Revisão editorial</td>
                  <td className="p-3 text-slate-600">Ajuste de meta description e conteúdo SEO</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 text-slate-600 whitespace-nowrap">Out/2026</td>
                  <td className="p-3 text-slate-600">RIPEAM (artigo do blog)</td>
                  <td className="p-3 text-slate-600">Publicação inicial</td>
                  <td className="p-3 text-slate-600">Regras 5 a 8 explicadas para Arrais-Amador</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3 text-slate-600 whitespace-nowrap">Out/2026</td>
                  <td className="p-3 text-slate-600">Balizamento (artigo do blog)</td>
                  <td className="p-3 text-slate-600">Publicação inicial</td>
                  <td className="p-3 text-slate-600">Balizamento IALA Região B: cores e sinais</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-600 whitespace-nowrap">Out/2026</td>
                  <td className="p-3 text-slate-600">Páginas institucionais</td>
                  <td className="p-3 text-slate-600">Criação</td>
                  <td className="p-3 text-slate-600">Estrutura de transparência e autoridade editorial</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <p className="text-slate-700 font-medium leading-relaxed">
            O ArraisPro é uma plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta. Não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil.
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
