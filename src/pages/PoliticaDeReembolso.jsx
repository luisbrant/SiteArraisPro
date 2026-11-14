import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function PoliticaDeReembolso() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans text-slate-200 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      <Helmet>
        <title>Política de Reembolso — ArraisPro Premium | ArraisPro</title>
        <meta
          name="description"
          content="Política de Reembolso do ArraisPro Premium: prazos, direito de arrependimento (Art. 49 do CDC), solicitação pelo Google Play e suporte oficial."
        />
        <link rel="canonical" href="https://www.arraispro.com.br/politica-de-reembolso" />
      </Helmet>

      {/* Cabeçalho dedicado ArraisPro Premium */}
      <header className="bg-[#0f172a]/90 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-black text-lg shadow-sm">
                ⚓
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-black text-white text-base sm:text-lg tracking-tight group-hover:text-emerald-400 transition">
                    ArraisPro
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-amber-400/15 text-amber-400 border border-amber-400/30">
                    Premium
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 hidden sm:block">
                  Documentação Legal Oficial
                </p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <Link
              to="/termos-de-compra"
              className="text-slate-300 hover:text-emerald-400 font-medium px-2.5 py-1.5 rounded-lg hover:bg-slate-800/60 transition"
            >
              Termos de Compra
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-semibold px-3 py-1.5 rounded-lg border border-slate-700 transition"
            >
              <span>&larr;</span>
              <span>Início</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        {/* Hero Card do Documento */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-5 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400"></div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <span>★ ArraisPro Premium</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            Política de Reembolso
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            Regras, prazos e procedimentos para solicitação de reembolso de compras realizadas no aplicativo <strong>ArraisPro</strong> para Android (preparação teórica para <strong>Arrais-Amador</strong> e <strong>Motonauta</strong>).
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 pt-3 border-t border-slate-800/80">
            <span>
              <strong className="text-slate-300">Última atualização:</strong> 14 de novembro de 2026
            </span>
            <span>
              <strong className="text-slate-300">Aplicativo:</strong> ArraisPro (Android / Google Play)
            </span>
          </div>
        </div>

        {/* Seções */}
        <div className="space-y-6">
          {/* 1. Pagamentos Processados pelo Google Play */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Pagamentos Processados pelo Google Play
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Todas as compras realizadas no aplicativo <strong className="text-white">ArraisPro</strong> para Android (tanto o <strong className="text-emerald-400">Passe de 7 dias</strong> quanto o <strong className="text-amber-400">Acesso vitalício</strong>) são processadas diretamente pelo <strong className="text-white">Google Play</strong>. Qualquer estorno financeiro é restituído pelo Google Play para o mesmo meio de pagamento utilizado na compra (cartão de crédito, PIX ou saldo Google Play).
            </p>
          </section>

          {/* 2. Prazos e Direito de Arrependimento */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Prazos e Direito de Arrependimento
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0b1120] border border-slate-800 rounded-xl p-4 sm:p-5">
                <h3 className="text-base font-bold text-emerald-400 mb-2">
                  Solicitação direta no Google Play (até 48 horas)
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
                  Nas primeiras 48 horas após a compra, o usuário pode solicitar o reembolso diretamente pelo histórico de pedidos da sua conta no Google Play.
                </p>
                <a
                  href="https://support.google.com/googleplay/answer/2479637?hl=pt-BR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 underline break-all"
                >
                  <span>Solicitar reembolso na Central de Ajuda do Google Play</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>

              <div className="bg-[#0b1120] border border-amber-400/30 rounded-xl p-4 sm:p-5">
                <h3 className="text-base font-bold text-amber-400 mb-2">
                  Direito de arrependimento (até 7 dias corridos — Art. 49 do CDC)
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Em conformidade com o Art. 49 do Código de Defesa do Consumidor (Lei nº 8.078/1990), o consumidor residente no Brasil pode exercer o direito de arrependimento em até 7 (sete) dias corridos a contar da data da compra, caso não consiga concluir a solicitação diretamente pelo fluxo automático do Google Play.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Como Solicitar Reembolso pelo Suporte do ArraisPro */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Como Solicitar Reembolso pelo Suporte do ArraisPro
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Se você estiver dentro do prazo de arrependimento de 7 (sete) dias corridos e precisar solicitar o estorno diretamente com a nossa equipe, siga o passo a passo abaixo:
            </p>

            <ol className="space-y-3 mb-5">
              <li className="flex items-start gap-3 bg-[#0b1120] border border-slate-800 rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  1
                </span>
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Localize o recibo enviado por e-mail pelo Google Play no momento da compra;
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#0b1120] border border-slate-800 rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  2
                </span>
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Anote o <strong className="text-white">número do pedido</strong> (formato <code className="text-amber-300 bg-slate-900 px-1.5 py-0.5 rounded break-all">GPA.xxxx-xxxx-xxxx-xxxxx</code>) ou o e-mail da conta Google utilizada na compra;
                </span>
              </li>
              <li className="flex items-start gap-3 bg-[#0b1120] border border-slate-800 rounded-xl p-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center mt-0.5">
                  3
                </span>
                <span className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  Envie um e-mail para{' '}
                  <a
                    href="mailto:contato@arraispro.com.br?subject=Solicita%C3%A7%C3%A3o%20de%20Reembolso"
                    className="text-emerald-400 hover:text-emerald-300 underline font-semibold break-all"
                  >
                    contato@arraispro.com.br
                  </a>{' '}
                  com o assunto <strong className="text-white">"Solicitação de Reembolso"</strong> e o número do pedido.
                </span>
              </li>
            </ol>

            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 text-xs sm:text-sm text-emerald-200 leading-relaxed">
              <strong className="text-emerald-400">Prazo de atendimento:</strong> Nossa equipe analisa e processa o estorno no painel do Google Play Console em até <strong className="text-white">2 (dois) dias úteis</strong> após o recebimento da solicitação.
            </div>
          </section>

          {/* 4. Passe de 7 Dias (Sem Renovação Automática) */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                4
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Passe de 7 Dias (Sem Renovação Automática)
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O <strong className="text-white">Passe de 7 dias</strong> (<code className="text-slate-300">assinatura_semanal:semanal-base</code>) é um plano pré-pago e <strong className="text-emerald-400">não possui renovação automática</strong>. Portanto, não é necessário realizar procedimento de cancelamento de assinatura para evitar cobranças futuras: o acesso encerra-se automaticamente após os 7 (sete) dias corridos, sem qualquer nova cobrança.
            </p>
          </section>

          {/* 5. Revogação do Acesso após Reembolso */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                5
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Revogação do Acesso após Reembolso
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Assim que o reembolso ou cancelamento da compra é confirmado pelo Google Play, o acesso ao <strong className="text-white">ArraisPro Premium</strong> é revogado automaticamente e o aplicativo retorna à versão gratuita.
            </p>
          </section>
        </div>

        {/* Barra de alternância rápida no rodapé do documento */}
        <nav
          aria-label="Navegação entre páginas legais"
          className="mt-10 bg-[#0f172a] border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <a
              href="/termos-de-compra.html"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-emerald-300 border border-slate-700 font-semibold transition"
            >
              &larr; Termos de Compra
            </a>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
              Política de Reembolso (atual)
            </span>
          </div>
          <Link
            to="/"
            className="text-slate-400 hover:text-white font-semibold transition text-center sm:text-right"
          >
            Voltar para a página inicial (arraispro.com.br)
          </Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
