import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function TermosDeCompra() {
  return (
    <div className="min-h-screen bg-[#0b1120] font-sans text-slate-200 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-200">
      <Helmet>
        <title>Termos de Compra — ArraisPro Premium | ArraisPro</title>
        <meta
          name="description"
          content="Termos de Compra do ArraisPro Premium: modalidades de acesso (Passe de 7 dias e Acesso vitalício), processamento pelo Google Play, restauração e suporte."
        />
        <link rel="canonical" href="https://www.arraispro.com.br/termos-de-compra" />
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
              to="/politica-de-reembolso"
              className="text-slate-300 hover:text-emerald-400 font-medium px-2.5 py-1.5 rounded-lg hover:bg-slate-800/60 transition"
            >
              Política de Reembolso
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
            Termos de Compra
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
            Condições comerciais aplicáveis à contratação de acesso aos recursos pagos do aplicativo educacional <strong>ArraisPro</strong> para Android.
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
          {/* 1. Objeto e Recursos do ArraisPro Premium */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Objeto e Recursos do ArraisPro Premium
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Estes Termos de Compra regulam a aquisição de acesso aos recursos pagos (<strong className="text-white">ArraisPro Premium</strong>) no aplicativo educacional <strong className="text-white">ArraisPro</strong>, voltado à preparação teórica para os exames de <strong className="text-emerald-400">Arrais-Amador</strong> e <strong className="text-emerald-400">Motonauta</strong>.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              Durante a vigência do plano contratado, ambos os planos concedem acesso integral a:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <li className="flex items-start gap-2.5 bg-[#0b1120] border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-sm text-slate-200">
                  Apostila preparatória completa no aplicativo e em PDF;
                </span>
              </li>
              <li className="flex items-start gap-2.5 bg-[#0b1120] border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-sm text-slate-200">
                  Simulados com mais de 900 questões comentadas;
                </span>
              </li>
              <li className="flex items-start gap-2.5 bg-[#0b1120] border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-sm text-slate-200">
                  Trilhas de estudo e mais de 450 flashcards interativos;
                </span>
              </li>
              <li className="flex items-start gap-2.5 bg-[#0b1120] border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-sm text-slate-200">
                  Experiência sem anúncios para estudar com foco.
                </span>
              </li>
            </ul>
          </section>

          {/* 2. Modalidades de Acesso e Condições de Cobrança */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Modalidades de Acesso e Condições de Cobrança
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
              O <strong className="text-white">ArraisPro Premium</strong> é disponibilizado nas duas modalidades abaixo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {/* Passe de 7 dias */}
              <div className="bg-[#0b1120] border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Passe de 7 dias
                    </h3>
                    <span className="text-emerald-400 font-black text-lg">
                      R$ 9,99
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mb-3 break-all">
                    ID: <code>assinatura_semanal:semanal-base</code> · Preço de referência: R$ 9,99
                  </p>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
                    Acesso Premium por 7 dias · Sem renovação automática
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Plano pré-pago com duração fixa de 7 (sete) dias corridos a contar da confirmação do pagamento. Não possui renovação automática: ao final dos 7 dias, o acesso retorna ao modo gratuito sem qualquer nova cobrança.
                  </p>
                </div>
              </div>

              {/* Acesso vitalício */}
              <div className="bg-[#0b1120] border border-amber-400/30 rounded-xl p-5 flex flex-col justify-between relative">
                <div>
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      Acesso vitalício
                    </h3>
                    <span className="text-amber-400 font-black text-lg">
                      R$ 39,90
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mb-3 break-all">
                    ID: <code>lifetime_compra</code> · Preço de referência: R$ 39,90
                  </p>
                  <div className="inline-block px-2.5 py-1 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-semibold mb-3">
                    Pagamento único · Sem mensalidade
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Compra de pagamento único, sem cobranças recorrentes ou mensalidades, garantindo acesso contínuo aos recursos do ArraisPro Premium vinculado à conta Google Play utilizada na compra.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-400/10 border border-amber-400/30 rounded-xl p-4 text-xs sm:text-sm text-amber-200 leading-relaxed">
              <strong className="text-amber-400">Importante sobre preços:</strong> Os valores acima são preços de referência em reais (BRL). Prevalece sempre o preço localizado exibido na tela de checkout oficial do Google Play no momento da compra.
            </div>
          </section>

          {/* 3. Processamento pelo Google Play e Liberação de Acesso */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Processamento pelo Google Play e Liberação de Acesso
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-3">
              Todas as compras no aplicativo Android são processadas exclusivamente pelo sistema de faturamento oficial do <strong className="text-white">Google Play (Google Play Billing)</strong>. O ArraisPro não coleta nem armazena dados de cartão de crédito ou credenciais bancárias.
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O acesso Premium é liberado somente após a confirmação válida do pagamento pelo Google Play. Pagamentos pendentes aguardam compensação pela loja antes da liberação.
            </p>
          </section>

          {/* 4. Restauração de Acesso e Troca de Aparelho */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                4
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Restauração de Acesso e Troca de Aparelho
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O direito de acesso fica vinculado à conta do Google Play utilizada na compra. Em caso de reinstalação ou troca de aparelho Android, basta entrar com a mesma conta Google e tocar em <strong className="text-emerald-400">"Já comprou? Restaurar acesso"</strong> na tela do ArraisPro Premium.
            </p>
          </section>

          {/* 5. Cancelamento e Reembolso */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                5
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Cancelamento e Reembolso
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              As solicitações de cancelamento e reembolso seguem as regras e prazos detalhados em nossa{' '}
              <a
                href="/politica-de-reembolso.html"
                className="text-emerald-400 hover:text-emerald-300 underline font-semibold transition"
              >
                Política de Reembolso (/politica-de-reembolso.html)
              </a>
              . Em caso de reembolso ou estorno confirmado pelo Google Play, o acesso aos recursos Premium é revogado automaticamente no aplicativo, que retorna ao modo gratuito.
            </p>
          </section>

          {/* 6. Independência Institucional */}
          <section className="bg-[#0f172a] border border-amber-400/25 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-amber-400/15 border border-amber-400/30 text-amber-400 font-black text-sm flex items-center justify-center">
                6
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Independência Institucional
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O <strong className="text-white">ArraisPro</strong> é uma plataforma privada e independente de apoio pedagógico, sem vínculo oficial, filiação, endosso ou homologação da Marinha do Brasil, da Diretoria de Portos e Costas (DPC) ou das Capitanias dos Portos, e não promete ou garante aprovação nos exames oficiais.
            </p>
          </section>

          {/* 7. Suporte e Contato */}
          <section className="bg-[#0f172a] border border-slate-800/90 rounded-2xl p-5 sm:p-7 shadow-md">
            <div className="flex items-start gap-3 mb-4">
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-sm flex items-center justify-center">
                7
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                Suporte e Contato
              </h2>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              Em caso de dúvidas sobre a compra, problemas de liberação ou restauração de acesso no aplicativo, entre em contato com o nosso suporte oficial:
            </p>
            <a
              href="mailto:contato@arraispro.com.br"
              className="inline-flex items-center gap-2 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/40 font-bold px-4 py-2.5 rounded-xl text-sm sm:text-base transition break-all"
            >
              <span>✉️</span>
              <span>contato@arraispro.com.br</span>
            </a>
          </section>
        </div>

        {/* Barra de alternância rápida no rodapé do documento */}
        <nav
          aria-label="Navegação entre páginas legais"
          className="mt-10 bg-[#0f172a] border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
              Termos de Compra (atual)
            </span>
            <a
              href="/politica-de-reembolso.html"
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-emerald-300 border border-slate-700 font-semibold transition"
            >
              Política de Reembolso &rarr;
            </a>
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

