import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Termos de Uso | ArraisPro</title>
        <meta name="description" content="Termos de uso e condições do aplicativo ArraisPro." />
      </Helmet>

      <header className="bg-white border-b border-slate-200 shadow-sm py-6">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/">
            <img src="/logo.png" alt="ArraisPro" className="h-10 w-auto object-contain" />
          </Link>
          <Link to="/" className="text-blue-600 font-bold hover:text-blue-800 transition">
            &larr; Voltar
          </Link>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full prose prose-slate">
        <h1 className="text-3xl font-black text-slate-900 mb-6">Termos de Uso</h1>
        <p className="text-sm text-slate-500 mb-8">Última atualização: Outubro de 2026</p>

        <h2 className="text-xl font-bold mt-8 mb-4">1. Aceitação dos Termos</h2>
        <p className="mb-4 text-slate-600">Ao acessar e utilizar o aplicativo e o site ArraisPro, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Natureza Educacional e Isenção de Vínculo</h2>
        <p className="mb-4 text-slate-600">O ArraisPro é um material independente de apoio aos estudos. <strong>Não possuímos qualquer vínculo governamental com a Marinha do Brasil</strong> nem com qualquer Capitania dos Portos. O uso do aplicativo não garante aprovação nos exames oficiais, sendo uma ferramenta complementar de estudo baseada nos editais públicos.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Compras e Assinaturas</h2>
        <p className="mb-4 text-slate-600">A versão PRO do aplicativo é desbloqueada mediante um pagamento único (sem mensalidades) processado exclusivamente pela Google Play Store. Todo o suporte a reembolsos e pagamentos é regido pelas políticas padrão da loja de aplicativos do Google.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Direitos Autorais</h2>
        <p className="mb-4 text-slate-600">Todo o conteúdo presente no aplicativo e site, incluindo questões comentadas, apostilas, design e gamificação, é protegido por leis de direitos autorais. É proibida a cópia, reprodução ou distribuição não autorizada do material (incluindo a revenda do PDF da apostila).</p>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-900 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <p>© 2026 ArraisPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
