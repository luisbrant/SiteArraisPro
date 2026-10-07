import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <Helmet>
        <title>Termos de Uso | ArraisPro</title>
        <meta name="description" content="Termos de uso e condições do aplicativo ArraisPro." />
      </Helmet>

      <Header variant="simple" />

      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 w-full prose prose-slate">
        <h1 className="text-3xl font-black text-slate-900 mb-6">Termos de Uso — ArraisPro</h1>
        <p className="text-sm text-slate-500 mb-8"><strong>Última atualização:</strong> outubro de 2026</p>

        <h2 className="text-xl font-bold mt-8 mb-4">1. Aceitação dos termos</h2>
        <p className="mb-4 text-slate-600">Ao acessar o site ou utilizar o aplicativo ArraisPro, você concorda com estes Termos de Uso. Se não concordar, não utilize os serviços.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">2. Finalidade educacional</h2>
        <p className="mb-4 text-slate-600">O ArraisPro oferece recursos independentes de apoio aos estudos para Arrais-Amador e Motonauta. O aplicativo, o site, os simulados e a apostila não substituem os procedimentos, documentos, cursos ou exames exigidos pelos órgãos competentes.</p>
        <p className="mb-4 text-slate-600">O ArraisPro não possui vínculo institucional, autorização ou endosso da Marinha do Brasil ou das Capitanias dos Portos. O uso dos materiais não garante aprovação em exames oficiais.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">3. Acesso gratuito e versão Pro</h2>
        <p className="mb-4 text-slate-600">O aplicativo pode ser baixado gratuitamente. Alguns conteúdos e funcionalidades exigem o desbloqueio da versão Pro, conforme a oferta apresentada no aplicativo no momento da compra.</p>
        <p className="mb-4 text-slate-600">Se a versão Pro for oferecida mediante pagamento único, essa condição deverá estar indicada com clareza antes da confirmação da compra. O pagamento não significa aprovação no exame nem aquisição de direitos sobre os materiais do ArraisPro.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">4. Pagamentos, suporte e reembolsos</h2>
        <p className="mb-4 text-slate-600">As compras realizadas dentro do aplicativo são processadas pela Google Play. Solicitações relacionadas a pagamentos e reembolsos podem ser apresentadas pelos canais disponibilizados pela Google Play.</p>
        <p className="mb-4 text-slate-600">Para problemas de acesso ao conteúdo adquirido ou dúvidas sobre o funcionamento do aplicativo, o usuário também pode entrar em contato com o suporte do ArraisPro pelo canal informado no site ou na página do aplicativo.</p>
        <p className="mb-4 text-slate-600">A análise de solicitações de reembolso observará as políticas aplicáveis da Google Play e os direitos assegurados pela legislação brasileira. Nenhuma disposição destes Termos limita direitos que não possam ser afastados por contrato.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">5. Uso permitido e direitos autorais</h2>
        <p className="mb-4 text-slate-600">Os textos, questões, comentários, apostilas, elementos visuais e demais conteúdos originais do ArraisPro são disponibilizados para uso pessoal do usuário, conforme as condições de acesso apresentadas no aplicativo.</p>
        <p className="mb-4 text-slate-600">Não é permitida a reprodução, distribuição, disponibilização pública ou revenda não autorizada desses materiais, inclusive do PDF da apostila. Essa restrição não abrange conteúdos de terceiros ou materiais públicos sobre os quais o ArraisPro não detenha direitos.</p>

        <h2 className="text-xl font-bold mt-8 mb-4">6. Contato</h2>
        <p className="mb-4 text-slate-600">Para dúvidas sobre estes Termos ou sobre o acesso ao aplicativo, entre em contato diretamente com a nossa equipe através do e-mail <strong>contato@arraispro.com.br</strong> ou na nossa página oficial na Google Play.</p>
      </main>

      <Footer />
    </div>
  );
}
