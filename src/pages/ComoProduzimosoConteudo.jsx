import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function ComoProduzimosoConteudo() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Como o ArraisPro produz seus conteúdos</title>
        <meta name="description" content="Entenda as referências, o método editorial e os limites dos conteúdos educacionais do ArraisPro." />
        <link rel="canonical" href="https://www.arraispro.com.br/como-produzimos-o-conteudo" />
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
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Como produzimos o conteúdo do ArraisPro</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          O ArraisPro é uma ferramenta independente de apoio à preparação teórica para as categorias de Arrais-Amador e Motonauta. Nosso trabalho é organizar assuntos de navegação, segurança, legislação e sobrevivência no mar em materiais de estudo mais claros, como explicações, simulados, questões comentadas, flashcards e trilhas de revisão.
        </p>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Referências consultadas</h2>
            <p className="text-slate-600 leading-relaxed">
              Os conteúdos são preparados a partir do programa aplicável aos exames de amadores e de fontes públicas pertinentes ao tema. Conforme o assunto, as referências consultadas podem incluir normas da Autoridade Marítima, materiais públicos da Marinha do Brasil, legislação aplicável e outras fontes institucionais confiáveis.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Quando uma página usar referências específicas, elas são informadas na própria página ou em sua seção de fontes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Transformação didática</h2>
            <p className="text-slate-600 leading-relaxed">
              Normas, manuais e regulamentos podem ser extensos e técnicos. O papel do ArraisPro é estruturar esses conteúdos para estudo, com linguagem clara e recursos de prática.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              A simplificação didática não altera o sentido das fontes. Quando um tema depender de treinamento presencial, prática supervisionada ou decisão de autoridade competente, esse limite é informado ao leitor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Revisão e atualização</h2>
            <p className="text-slate-600 leading-relaxed">
              Os conteúdos são revisados periodicamente, especialmente quando há mudança em uma referência relevante. Cada guia, artigo ou tema técnico exibe uma data de última revisão sempre que possível.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Se for identificado um erro material, ele é corrigido e, quando necessário, a alteração é registrada. Identificou algo errado? <Link to="/suporte" className="text-blue-600 hover:text-blue-800 font-medium">Entre em contato pelo suporte</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Limites do material</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed mb-3">
                O ArraisPro não substitui curso prático, treinamento de segurança, atendimento médico, orientação jurídica ou instruções da Autoridade Marítima.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                O aplicativo não emite habilitações e não possui vínculo ou endosso da Marinha do Brasil.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/fontes-e-atualizacoes" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition">
            Ver fontes e atualizações &rarr;
          </Link>
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
