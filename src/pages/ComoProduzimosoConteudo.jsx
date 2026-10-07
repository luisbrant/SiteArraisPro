import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ComoProduzimosoConteudo() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Como o ArraisPro produz seus conteúdos</title>
        <meta name="description" content="Entenda as referências, o método editorial e os limites dos conteúdos educacionais do ArraisPro." />
        <link rel="canonical" href="https://www.arraispro.com.br/como-produzimos-o-conteudo" />
      </Helmet>

      <Header variant="simple" />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Como produzimos o conteúdo do ArraisPro</h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-4">
          O ArraisPro é uma plataforma independente de apoio à preparação teórica para as categorias de Arrais-Amador e Motonauta.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          Nosso trabalho é organizar temas de navegação, segurança, legislação e sobrevivência no mar em materiais de estudo mais claros, como explicações, simulados, questões comentadas, flashcards e trilhas de revisão.
        </p>

        <div className="flex flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Referências consultadas</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Os conteúdos são elaborados a partir do programa aplicável aos exames de amadores e de fontes públicas pertinentes a cada tema. Conforme o assunto, as referências podem incluir normas da Autoridade Marítima, materiais públicos da Marinha do Brasil, legislação aplicável e outras fontes institucionais confiáveis.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Quando um conteúdo utilizar referências específicas, elas poderão ser indicadas na própria página ou em sua seção de fontes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Transformação didática</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Normas, manuais e regulamentos podem ser extensos e técnicos. O papel do ArraisPro é organizar esses conteúdos para estudo, com linguagem clara e recursos de prática.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Buscamos preservar o sentido das fontes consultadas ao simplificar e estruturar os temas para fins educacionais. Quando um assunto depender de treinamento presencial, prática supervisionada, atendimento profissional ou decisão de autoridade competente, esse limite será informado ao leitor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Revisão e atualização</h2>
            <p className="text-slate-600 leading-relaxed mb-3">
              Os conteúdos passam por revisão periódica, especialmente quando há alteração em uma referência relevante ou quando identificamos oportunidade de melhoria editorial.
            </p>
            <p className="text-slate-600 leading-relaxed mb-3">
              Guias, artigos e temas técnicos podem exibir uma data de última revisão quando isso for relevante para a compreensão do conteúdo. Caso seja identificado um erro material, ele será analisado e corrigido quando confirmado.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Identificou uma possível imprecisão, referência desatualizada ou link incorreto?{' '}
              <Link to="/suporte" className="text-blue-600 font-medium hover:text-blue-800 transition">Entre em contato com o suporte</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Limites do material</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-slate-700 leading-relaxed mb-3">
                O ArraisPro não substitui cursos práticos, treinamento de segurança, atendimento médico, orientação jurídica ou instruções da Autoridade Marítima.
              </p>
              <p className="text-slate-700 font-medium leading-relaxed">
                O aplicativo não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/fontes-e-atualizacoes" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition">
            Ver fontes e referências &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
