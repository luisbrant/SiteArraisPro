import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Política de Privacidade | ArraisPro</title>
        <meta name="description" content="Política de privacidade e proteção de dados do ArraisPro." />
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
        <h1 className="text-3xl font-black text-slate-900 mb-6">Política de Privacidade</h1>
        <p className="text-sm text-slate-500 mb-8">Última atualização: Outubro de 2026</p>

        <p className="mb-4 text-slate-600">A sua privacidade é importante para nós. É política do ArraisPro respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site e aplicativo.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">1. Coleta de Dados</h2>
        <p className="mb-4 text-slate-600">Solicitamos informações pessoais, como seu endereço de e-mail, apenas quando realmente precisamos delas para lhe fornecer um serviço (como o envio da amostra grátis da apostila). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
        <p className="mb-4 text-slate-600">No aplicativo Android, não exigimos criação de conta ou login para estudar. Todo o seu progresso nos simulados é salvo localmente no seu dispositivo.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Uso de Dados</h2>
        <p className="mb-4 text-slate-600">Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Os dados de e-mail capturados não são vendidos ou compartilhados com terceiros, sendo utilizados exclusivamente para comunicação sobre o ArraisPro e envio de materiais.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Serviços de Terceiros</h2>
        <p className="mb-4 text-slate-600">O pagamento da versão Pro é processado inteiramente pela Google Play Store, que possui suas próprias políticas de segurança e privacidade. O ArraisPro não tem acesso a dados sensíveis de pagamento (como número de cartão de crédito).</p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Contato</h2>
        <p className="mb-4 text-slate-600">Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco através do nosso e-mail de suporte.</p>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm border-t border-slate-900 mt-auto">
        <div className="max-w-4xl mx-auto px-6">
          <p>© 2026 ArraisPro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
