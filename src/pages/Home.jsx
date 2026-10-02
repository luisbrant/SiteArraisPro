import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import '../App.css'; // ajustado import

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 md:py-6 flex justify-between items-center">
        
        <div className="flex items-center">
          {/* Logo corrigido para não vazar a tela no mobile */}
          <img src="/logo.png" alt="ArraisPro Logo" className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto max-w-[220px] sm:max-w-sm object-contain" />
        </div>
        
        {/* Menu Desktop */}
        <nav className="hidden lg:flex gap-8 xl:gap-12 font-semibold text-slate-700 text-lg items-center">
          <a href="#recursos" className="hover:text-blue-600 transition">Recursos</a>
          <a href="#bonus" className="hover:text-blue-600 transition">Apostila</a>
          <a href="#preco" className="hover:text-blue-600 transition">Preço</a>
          <a href="#faq" className="hover:text-blue-600 transition">Dúvidas</a>
          <a href="/blog" className="text-blue-600 font-bold hover:text-blue-800 transition">Blog</a>
          {/* Botão de CTA no desktop movido para dentro da nav para melhor alinhamento */}
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=header_cta" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-full transition shadow-md whitespace-nowrap ml-4">
            Baixar o ArraisPro grátis no Google Play
          </a>
        </nav>
        
        {/* Hamburger Icon para Mobile */}
        <button 
          className="lg:hidden p-2 text-slate-800 hover:text-blue-600 focus:outline-none transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl flex flex-col py-4 px-6 gap-3 font-semibold text-slate-700 text-lg max-h-[80vh] overflow-y-auto z-50">
          <a href="#recursos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition block py-2 border-b border-slate-100">Recursos</a>
          <a href="#bonus" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition block py-2 border-b border-slate-100">Apostila</a>
          <a href="#preco" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition block py-2 border-b border-slate-100">Preço</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-blue-600 transition block py-2 border-b border-slate-100">Dúvidas</a>
          <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-blue-600 font-bold hover:text-blue-800 transition block py-2">Blog ArraisPro</a>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=header_cta" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-center text-white font-bold py-3.5 px-6 rounded-xl mt-4 shadow-lg active:scale-95 transition-transform">
            Baixar o ArraisPro grátis no Google Play
          </a>
        </div>
      )}
    </header>
  );
};

export default function Home() {
  const [email, setEmail] = useState('');
  const [leadStatus, setLeadStatus] = useState('idle'); // idle, loading, success

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLeadStatus('loading');
    
    try {
      // Envia silenciosamente o e-mail coletado para o contato@arraispro.com.br
      await fetch("https://formsubmit.co/ajax/contato@arraispro.com.br", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            _subject: "Novo Lead - Amostra Grátis (ArraisPro)",
            email: email,
            _captcha: "false"
        })
      });
    } catch (error) {
      console.error("Erro ao salvar lead:", error);
      // O fluxo de download não é bloqueado caso o serviço externo falhe
    }

    setLeadStatus('success');
    // Dispara o download da amostra no navegador do usuário
    const link = document.createElement('a');
    link.href = '/Apostila_ArraisPro_Modulo1.pdf';
    link.download = 'Apostila_ArraisPro_Modulo1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      <Helmet>
        <title>Simulados para Arrais-Amador e Motonauta | ArraisPro</title>
        <meta name="description" content="Estude para Arrais-Amador e Motonauta com simulados, questões comentadas, apostila e trilha de estudos. Baixe o ArraisPro." />
      </Helmet>

      <a href="#conteudo-principal" className="sr-only focus:not-sr-only bg-blue-600 text-white p-4 absolute z-[100] left-0 top-0">Ir para o conteúdo principal</a>

      {/* 1. HEADER - OTIMIZADO PARA DESKTOP E MOBILE */}
      <Header />

      <main id="conteudo-principal">
        {/* 2. HERO SECTION */}
        <section className="bg-slate-900 text-white pt-16 pb-20 md:pt-24 md:pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center relative z-10">
          
          <div className="flex flex-col gap-5 md:gap-6 text-center md:text-left relative">
            {/* Background Glow */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse pointer-events-none"></div>
            
            <p className="text-xs sm:text-sm text-blue-300 font-medium mb-3 relative z-10 uppercase tracking-widest">
              Escolha sua categoria, revise os principais temas da prova e acompanhe sua evolução pelo celular com o ArraisPro.
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tighter relative z-10">
              Estude para a prova de{' '}
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">Arrais-Amador e Motonauta</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto md:mx-0 mt-4 relative z-10">
              Prepare-se com simulados, questões comentadas, trilha de estudos e apostila digital de apoio para sua habilitação náutica. Conteúdo organizado com base no programa de estudos oficial <span className="whitespace-nowrap text-blue-300 font-medium">(NORMAM-211 e 212/DPC)</span>.
            </p>
            
            <div className="flex flex-col gap-3 mt-6 w-full items-center md:items-start relative z-10">
              <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
                <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=hero_cta" target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 shadow-xl shadow-blue-500/40 w-full sm:w-auto text-lg overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                  <svg className="w-6 h-6 relative z-10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2.5v19l15.5-9.5L5 2.5zm2 3.8l9.8 5.7-9.8 5.7V6.3z"/></svg>
                  <span className="relative z-10">Baixar o ArraisPro grátis</span>
                </a>
                <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=hero_badge" target="_blank" rel="noopener noreferrer" className="hidden sm:block hover:scale-105 transition-transform duration-300">
                  <img alt="Disponível no Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/pt-br_badge_web_generic.png" className="h-[68px]" />
                </a>
              </div>
              <p className="text-[11px] text-slate-400 text-center md:text-left px-2 sm:px-4 mt-2 font-medium"><span className="text-blue-400 font-bold">Leve, rápido e sem compromisso.</span> Comece em 30 segundos.</p>
              <p className="text-[11px] text-slate-400 text-center md:text-left px-2 sm:px-4 mt-1">Escolha entre Arrais Amador e Motonauta • Estude pelo celular • Conteúdo organizado por temas</p>
            </div>
            
            {/* Prova Social / Encorajamento inicial */}
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-xs sm:text-sm text-slate-400 flex-wrap">
              <div className="flex text-amber-400 text-base sm:text-lg">
                ★★★★★
              </div>
              <p><strong>Estude. Simule. Revise. Navegue preparado.</strong></p>
            </div>
          </div>

          {/* Mockup do App — Altura reduzida no mobile */}
          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="w-64 md:w-72 h-[420px] md:h-[540px] bg-[#0F172A] rounded-[3rem] border-[10px] border-slate-800 shadow-2xl flex flex-col overflow-hidden relative ring-1 ring-white/10 ring-inset">
              
              {/* App Header */}
              <div className="pt-6 md:pt-8 pb-3 md:pb-4 px-5 md:px-6 flex justify-between items-center bg-slate-900 border-b border-slate-800">
                <div className="font-bold text-white text-lg md:text-xl flex items-center gap-2">
                  <div className="w-5 md:w-6 h-5 md:h-6 rounded-full bg-blue-500"></div> ArraisPro
                </div>
                <div className="flex gap-2 md:gap-3 text-xs md:text-sm font-bold">
                  <div className="flex items-center gap-1 text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full"><span className="text-base md:text-lg leading-none">🔥</span> 12</div>
                  <div className="flex items-center gap-1 text-red-500 bg-red-500/10 px-2 py-1 rounded-full"><span className="text-base md:text-lg leading-none">❤️</span> 5</div>
                </div>
              </div>

              {/* App Content */}
              <div className="flex-1 bg-[#0F172A] p-4 md:p-5 flex flex-col gap-3 md:gap-4 overflow-y-auto">
                <div className="text-slate-400 text-xs md:text-sm font-medium mt-1 md:mt-2">Sua Trilha de Estudos</div>
                
                {/* Modulo 1 */}
                <div className="bg-slate-800 p-3 md:p-4 rounded-2xl border border-slate-700 shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Módulo 1</p>
                      <p className="font-bold text-white text-base md:text-lg">Legislação Náutica</p>
                    </div>
                    <div className="w-7 md:w-8 h-7 md:h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold text-sm">✓</div>
                  </div>
                  <p className="text-xs md:text-sm text-slate-400 mb-3 md:mb-4">Concluído. Revisão liberada.</p>
                  <div className="w-full bg-slate-900 h-2 rounded-full"><div className="bg-green-500 w-full h-2 rounded-full"></div></div>
                </div>

                {/* Modulo 2 */}
                <div className="bg-blue-900/40 p-3 md:p-4 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-900/20 relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Módulo 2</p>
                      <p className="font-bold text-white text-base md:text-lg">Marinharia e RIPEAM</p>
                    </div>
                    <div className="w-7 md:w-8 h-7 md:h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <svg className="w-3 md:w-4 h-3 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 mb-3 md:mb-4">Próxima aula: Luzes de Navegação</p>
                  <div className="w-full bg-slate-900 h-2 rounded-full"><div className="bg-blue-500 w-1/3 h-2 rounded-full"></div></div>
                </div>

                {/* Modulo 3 */}
                <div className="bg-slate-800/50 p-3 md:p-4 rounded-2xl border border-slate-700/50 opacity-70">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Módulo 3</p>
                  <p className="font-bold text-slate-300 text-base md:text-lg flex items-center gap-2">Balizamento <svg className="w-4 h-4 text-slate-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm9 13H6v-8h12v8z"/></svg></p>
                </div>
              </div>
            </div>
            
            {/* Elemento de decoração flutuante — animação sutil */}
            <div className="absolute -right-6 top-1/4 bg-slate-800 p-3 rounded-xl border border-slate-700 shadow-xl hidden md:flex items-center gap-3 animate-pulse">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">🔥</div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase">Ofensiva</p>
                <p className="text-white font-black text-sm">12 Dias seguidos</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* 2.5 NÚMEROS DE IMPACTO */}
      <section className="bg-blue-600 py-12 px-4 sm:px-6 relative z-20 shadow-xl border-y border-blue-700">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-blue-500/50">
          <div className="px-4 py-2 sm:py-0">
            <p className="text-3xl md:text-4xl font-black text-white mb-2">+1.000</p>
            <p className="text-xs md:text-sm text-blue-100 font-medium">Questões para praticar</p>
          </div>
          <div className="px-4 py-2 sm:py-0">
            <p className="text-3xl md:text-4xl font-black text-white mb-2">Programa</p>
            <p className="text-xs md:text-sm text-blue-100 font-medium">Baseado nas NORMAM-211 e 212</p>
          </div>
          <div className="px-4 py-2 sm:py-0">
            <p className="text-3xl md:text-4xl font-black text-white mb-2">15</p>
            <p className="text-xs md:text-sm text-blue-100 font-medium">Temas para revisar</p>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA / SOLUÇÃO - GARANTIA */}
      <section className="py-20 px-4 sm:px-6 bg-blue-50 text-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <div className="inline-flex items-center justify-center gap-2 text-blue-600 bg-blue-100 px-4 py-1.5 rounded-full text-sm font-bold w-max mx-auto mb-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.642 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.358-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" /></svg>
            Transparência Total
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 text-balance tracking-tighter">
            Estude por temas e acompanhe seu progresso
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6 text-pretty">
            Cansado de materiais pouco claros e questões espalhadas em arquivos confusos? O ArraisPro ajuda na sua preparação organizando os estudos em uma sequência lógica: você lê a teoria de apoio (com base nas normas <span className="whitespace-nowrap">NORMAM-211 e 212/DPC</span>), pratica com simulados, reforça a memória com <em>flashcards</em> e revisa os pontos em que errou. Nossa plataforma abrange as habilitações de Arrais-Amador e Motonauta.
          </p>
          <div className="mt-8">
            <a href="#recursos" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition group">
              Conheça os recursos 
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section id="recursos" className="py-24 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-16 tracking-tight">Simulados e questões para sua preparação</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-blue-100">📖</div>
              <h3 className="font-black text-xl mb-4 text-slate-800 tracking-tight">Apostila Guiada</h3>
              <p className="text-slate-600 leading-relaxed">Conteúdo organizado em módulos, com explicações, alertas sobre os exames e dicas práticas para que você compreenda a matéria em uma sequência lógica.</p>
            </div>

            <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-blue-100">🎯</div>
              <h3 className="font-black text-xl mb-4 text-slate-800 tracking-tight">Simulados</h3>
              <p className="text-slate-600 leading-relaxed">Mais de 1.000 questões, com filtros por tema e por nível de dificuldade. Pratique com questões organizadas por tema e acompanhe seu desempenho.</p>
            </div>

            <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-blue-100">⚡</div>
              <h3 className="font-black text-xl mb-4 text-slate-800 tracking-tight">Flashcards</h3>
              <p className="text-slate-600 leading-relaxed">Revisões dinâmicas para você reforçar a memorização de luzes, sinais, regras, limites e os conceitos essenciais da navegação de forma prática.</p>
            </div>

            <div className="bg-white p-10 rounded-xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-3xl shadow-inner border border-blue-100">📈</div>
              <h3 className="font-black text-xl mb-4 text-slate-800 tracking-tight">Progresso</h3>
              <p className="text-slate-600 leading-relaxed">Acompanhe o seu progresso de leitura e a sua taxa de acertos, e identifique exatamente quais temas precisam de reforço antes do grande dia.</p>
            </div>

          </div>
        </div>
      </section>


      {/* 5. A GRANDE OFERTA (BÔNUS) */}
      <section id="bonus" className="py-24 px-6 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center perspective-1000">
             {/* Capa real da apostila com efeito 3D */}
            {/* Capa real da apostila com efeito 3D (Refatorado para 3D real) */}
            <div className="relative w-56 md:w-64 group">
              <div className="relative preserve-3d book-cover shadow-2xl rounded-r-lg transition-transform duration-700">
                {/* Capa (imagem real) */}
                <img 
                  src="/capa-apostila.jpg" 
                  alt="Apostila Preparatória ArraisPro — Edição 2026" 
                  className="relative z-20 w-full h-auto rounded-r-lg rounded-l-sm"
                />
                
                {/* Páginas (Borda Direita Efeito 3D) */}
                <div className="absolute top-[1%] left-full w-6 h-[98%] bg-gradient-to-r from-slate-100 to-slate-200 book-pages flex flex-col justify-evenly py-4 border-r border-y border-slate-300 shadow-inner">
                  <div className="w-full h-px bg-slate-300/60"></div>
                  <div className="w-full h-px bg-slate-300/60"></div>
                  <div className="w-full h-px bg-slate-300/60"></div>
                  <div className="w-full h-px bg-slate-300/60"></div>
                  <div className="w-full h-px bg-slate-300/60"></div>
                  <div className="w-full h-px bg-slate-300/60"></div>
                </div>
                
                {/* Lombada/Sombra lateral (Opcional, atrás da capa à esquerda) */}
                <div className="absolute inset-0 bg-black/10 z-30 rounded-r-lg shadow-[inset_4px_0_10px_rgba(255,255,255,0.2)] pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <div className="inline-block bg-gradient-to-r from-blue-900/50 to-blue-800/30 border border-blue-400/50 text-blue-300 px-5 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest w-max shadow-lg shadow-blue-900/20 backdrop-blur-sm">
              Bônus Exclusivo da Versão Pro
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-balance tracking-tighter">
              Apostila digital ArraisPro
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed text-pretty">
              O conteúdo é essencial para a sua preparação. Por isso, ao desbloquear o acesso Pro, você ganha o download da <strong>Apostila ArraisPro</strong>. São 152 páginas, divididas em 8 módulos, que abrangem legislação, manobras, RIPEAM, balizamento, segurança, primeiros socorros e meteorologia. Estruturada com base no programa de estudos oficial do exame, ela é o complemento ideal para os simulados do aplicativo. Juntos, esses recursos formam o ecossistema de estudos que vai te apoiar no seu aprendizado.
            </p>
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section id="preco" className="py-24 px-6 bg-slate-50 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4 tracking-tighter">Baixe o ArraisPro</h2>
            <p className="text-slate-600 text-lg">Sem taxas de assinatura ou mensalidades. Pague apenas uma vez e obtenha acesso ilimitado a todo o ecossistema: simulados, gamificação e apostila completa.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card Freemium */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Versão Grátis</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-slate-800">R$ 0</span>
              </div>
              <ul className="flex flex-col gap-4 text-slate-600 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span> Acesso aos primeiros módulos da apostila
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span> Simulado diagnóstico e flashcards introdutórios
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 font-bold">✓</span> Resultado por tema com pontos para reforço
                </li>
              </ul>
              <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=pricing_free" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all shadow-sm">
                Baixe Grátis e Comece
              </a>
            </div>

            {/* Card Premium */}
            <div className="bg-gradient-to-b from-[#0A2540] to-blue-900 rounded-3xl p-8 border-2 border-blue-500 shadow-2xl shadow-blue-900/40 flex flex-col relative transform md:-translate-y-4 ring-4 ring-blue-500/10 mt-6 md:mt-0">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="bg-amber-500 text-amber-950 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-amber-500/30 flex items-center gap-2 whitespace-nowrap">
                  <span>★ ESCOLHA COMPLETA</span>
                </div>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 mt-2">Versão Pro</h3>
              <div className="flex items-baseline gap-1 mb-2 text-white">
                <span className="text-xl font-medium text-blue-300">R$</span>
                <span className="text-6xl font-black tracking-tight">39,90</span>
                <span className="text-blue-300 font-medium ml-2 text-lg">/ único</span>
              </div>
              {/* Ancoragem de preço */}
              <p className="text-blue-300 text-sm font-medium mb-8">Acesso definitivo e sem anúncios.</p>
              
              <ul className="flex flex-col gap-4 text-blue-100 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <span>Apostila integral: 152 páginas, 8 módulos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <span>1.000+ Questões comentadas de Arrais e Motonauta</span>
                </li>
                <li className="flex items-start gap-3 font-bold text-white bg-blue-800/40 p-3 rounded-xl border border-blue-500/20">
                  <span className="text-amber-400 text-xl flex-shrink-0">🎁</span> 
                  <span>Simulados ilimitados + Modo Revisão de Erros</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">✓</div>
                  <span>Atualizações automáticas inclusas</span>
                </li>
              </ul>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-blue-200 text-center mb-1 font-medium">Desbloqueie todo o conteúdo agora:</p>
                <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=pricing_pro" target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-xl shadow-blue-500/40 hover:scale-[1.02] text-lg uppercase tracking-wide">
                  Desbloquear Versão Pro
                </a>
                <p className="text-center text-xs text-blue-300 font-medium flex items-center justify-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3-11.5a1 1 0 00-1.414 0L10.5 11.586l-1.586-1.586A1 1 0 107.5 11.414l2.293 2.293a1 1 0 001.414 0l4.293-4.293A1 1 0 0015 8.5z"/></svg>
                  Pagamento 100% seguro na Play Store
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. CAPTURA DE LEADS (ISCA DIGITAL) — DEPOIS do Pricing */}
      <section className="bg-blue-600 py-16 px-6 text-center shadow-inner">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl font-black mb-4 tracking-tight">Gostaria de uma amostra do nosso material?</h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100 leading-relaxed">
            Baixe, gratuitamente, o <span className="font-bold text-white">1º Módulo da nossa Apostila ArraisPro</span>. É um material direto ao ponto para que você ateste a qualidade do conteúdo de apoio antes de tomar a sua decisão.
          </p>
          {leadStatus === 'success' ? (
            <div className="bg-blue-700/50 p-6 rounded-2xl border border-blue-400 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-white mb-2">Tudo certo! 🎉</h3>
              <p className="text-blue-100">
                O download da sua apostila já começou!<br />
                Bom proveito e ótimos estudos.
              </p>
              <a href="/Apostila_ArraisPro_Modulo1.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-white font-bold underline hover:text-blue-200">
                Clique aqui para baixar manualmente
              </a>
            </div>
          ) : (
            <>
              <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto" onSubmit={handleLeadSubmit}>
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={leadStatus === 'loading'}
                  className="px-5 py-4 rounded-xl text-slate-900 w-full focus:outline-none focus:ring-4 focus:ring-blue-400/50 shadow-lg font-medium disabled:opacity-50"
                />
                <button 
                  type="submit" 
                  disabled={leadStatus === 'loading'}
                  className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-wait"
                >
                  {leadStatus === 'loading' ? 'Enviando...' : 'Quero minha amostra grátis'}
                </button>
              </form>
              <p className="text-sm mt-5 text-blue-200 font-medium flex items-center justify-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" /></svg>
                O arquivo é disponibilizado imediatamente. Prometemos não enviar spam.
              </p>
            </>
          )}
        </div>
      </section>

      {/* 7.5 COMO O ARRAISPRO AJUDA (Conteúdo adicional SEO) */}
      <section className="py-24 px-6 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-8 tracking-tighter text-center">Como o ArraisPro ajuda na sua preparação</h2>
          <div className="flex flex-col gap-6 text-lg text-slate-600 leading-relaxed text-justify">
            <p>
              O ArraisPro reúne os recursos necessários para organizar a sua preparação para as provas teóricas de Arrais-Amador e Motonauta. Em vez de depender de materiais espalhados, você pode combinar simulados, questões comentadas, apostila digital e uma trilha de estudos gamificada para revisar os temas no seu próprio ritmo e identificar rapidamente quais assuntos merecem mais atenção antes do exame.
            </p>
            <p>
              Use os simulados categorizados para praticar os conhecimentos adquiridos, consulte os comentários detalhados para entender o motivo de cada resposta e retome os módulos da apostila sempre que precisar revisar um conceito de marinharia ou legislação. O ecossistema foi desenvolvido para proporcionar confiança real. Vale ressaltar que o ArraisPro é uma plataforma totalmente independente de apoio aos estudos e não possui vínculo, homologação ou endosso da Marinha do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className="py-24 px-6 bg-white scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Perguntas frequentes</h2>
          <div className="flex flex-col gap-6">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-lg text-slate-800 mb-2">O aplicativo cobra alguma mensalidade?</h4>
              <p className="text-slate-600 text-justify">Não! Você investe R$ 39,90 uma única vez, de forma segura pela Play Store, e desbloqueia todo o ecossistema: simulados ilimitados, gamificação completa e o download da nossa apostila de 152 páginas. O acesso é seu para sempre.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-lg text-slate-800 mb-2">O material serve também para a prova de Motonauta?</h4>
              <p className="text-slate-600 text-justify">Sim! Todo o nosso ecossistema — simulados, trilha de estudos gamificada e apostila — engloba o conteúdo programático das provas de Arrais Amador <span className="whitespace-nowrap">(NORMAM-211)</span> e de Motonauta <span className="whitespace-nowrap">(NORMAM-212)</span>, incluindo as regras específicas para moto aquática (jet ski).</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-lg text-slate-800 mb-2">O que a apostila aborda exatamente?</h4>
              <p className="text-slate-600 text-justify">O material possui 152 páginas, distribuídas em 8 módulos e 18 capítulos. Os temas incluem: trâmites para habilitação e prova, legislação náutica (LESTA/RLESTA), terminologia e manobra, motores e segurança, RIPEAM (com luzes e marcas), balizamento, comunicações, meteorologia e marés. Além disso, disponibilizamos um checklist para a véspera da prova e um glossário náutico de A a Z. O arquivo é um PDF digital com download imediato logo após a ativação da versão Pro.</p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h4 className="font-bold text-lg text-slate-800 mb-2">Como e onde eu realizo o pagamento?</h4>
              <p className="text-slate-600 text-justify">Todo o processo é feito de forma segura pela Google Play Store. Você baixa o ArraisPro gratuitamente, experimenta os simulados básicos e conhece a nossa gamificação. Quando se sentir confortável, pode desbloquear a versão Pro diretamente pelo aplicativo. Em apenas um clique, você libera os simulados ilimitados e a apostila completa.</p>
            </div>

          </div>

          {/* Mini-CTA após FAQ */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">Ainda restam dúvidas? Teste você mesmo.</p>
            <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=faq_cta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition shadow-lg shadow-blue-500/20">
              Experimente →
            </a>
          </div>
        </div>
      </section>

      {/* 9. CTA FINAL — Última chamada antes do Footer */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Pronto para se preparar de <span className="text-blue-400">verdade</span> para o seu exame?
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Tenha acesso imediato a simulados, trilhas gamificadas e a uma apostila completa de 8 módulos, elaborada como material independente de apoio, com referência aos conteúdos aplicáveis às provas de Arrais-Amador e Motonauta — tudo na palma da sua mão. Baixe gratuitamente e comece agora mesmo.
          </p>
          <a href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=final_cta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full shadow-xl shadow-blue-600/30 transition text-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2.5v19l15.5-9.5L5 2.5zm2 3.8l9.8 5.7-9.8 5.7V6.3z"/></svg>
            Baixar o ArraisPro grátis no Google Play
          </a>
        </div>
      </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 pt-12 pb-24 md:pb-12 px-6 text-sm border-t border-slate-900">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <img src="/logo.png" alt="ArraisPro" className="h-10 opacity-60 hover:opacity-100 transition" />
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link to="/sobre" className="hover:text-white transition">Sobre o ArraisPro</Link>
            <Link to="/como-produzimos-o-conteudo" className="hover:text-white transition">Como produzimos o conteúdo</Link>
            <Link to="/politica-editorial" className="hover:text-white transition">Política Editorial</Link>
            <Link to="/fontes-e-atualizacoes" className="hover:text-white transition">Fontes e Atualizações</Link>
            <Link to="/politica-de-privacidade" className="hover:text-white transition">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:text-white transition">Termos de Uso</Link>
            <Link to="/suporte" className="hover:text-white transition">Suporte</Link>
          </div>
          <p className="max-w-xl mx-auto mt-2 text-xs text-center opacity-60 leading-relaxed">
            O ArraisPro é uma plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta. Não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil.
          </p>
          <p className="text-xs opacity-50">© 2026 ArraisPro. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* FLOATING CTA — Botão fixo no rodapé (Mobile Only, definido em App.css) */}
      <div className="floating-cta md:hidden">
        <a 
          href="https://play.google.com/store/apps/details?id=br.com.arraispro.app&utm_source=website&utm_medium=organic&utm_campaign=sticky_cta" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition text-base w-full"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M5 2.5v19l15.5-9.5L5 2.5zm2 3.8l9.8 5.7-9.8 5.7V6.3z"/></svg>
          Baixar o ArraisPro grátis no Google Play
        </a>
      </div>

    </div>
  );
}
