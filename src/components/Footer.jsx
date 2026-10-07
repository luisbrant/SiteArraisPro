import React from 'react';
import { Link } from 'react-router-dom';
import { INDEPENDENCE_DISCLAIMER } from '../config/site';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-12 pb-24 md:pb-12 px-6 text-sm border-t border-slate-900 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <img src="/logo.png" alt="ArraisPro" className="h-10 opacity-60 hover:opacity-100 transition" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-4xl text-left border-b border-slate-800 pb-10 mb-2">
          
          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Estude no ArraisPro</h3>
            <ul className="space-y-3">
              <li><Link to="/arrais-amador" className="hover:text-white transition">Simulado para Arrais-Amador</Link></li>
              <li><Link to="/motonauta" className="hover:text-white transition">Simulado para Motonauta</Link></li>
              <li><Link to="/blog/diferenca-arrais-amador-e-motonauta" className="hover:text-white transition">Diferença entre Arrais-Amador e Motonauta</Link></li>
              <li><Link to="/blog/passo-a-passo-carteira-arrais-amador-2026" className="hover:text-white transition">Como tirar a carteira de Arrais-Amador</Link></li>
              <li><Link to="/blog/simulado-arrais-amador-gratis-atualizado" className="hover:text-white transition">Simulado Arrais-Amador</Link></li>
              <li><Link to="/blog/ripeam-descomplicado-regras-ouro" className="hover:text-white transition">RIPEAM para Arrais-Amador</Link></li>
              <li><Link to="/suporte" className="hover:text-white transition">Suporte</Link></li>
              <li><Link to="/politica-de-privacidade" className="hover:text-white transition">Política de Privacidade</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Institucional</h3>
            <ul className="space-y-3">
              <li><Link to="/sobre" className="hover:text-white transition">Sobre o ArraisPro</Link></li>
              <li><Link to="/como-produzimos-o-conteudo" className="hover:text-white transition">Como produzimos o conteúdo</Link></li>
              <li><Link to="/politica-editorial" className="hover:text-white transition">Política Editorial</Link></li>
              <li><Link to="/fontes-e-referencias" className="hover:text-white transition">Fontes e Referências</Link></li>
              <li><Link to="/termos-de-uso" className="hover:text-white transition">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Redes oficiais</h3>
            <ul className="space-y-3">
              <li><a href="https://www.instagram.com/arraispro/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram do ArraisPro</a></li>
              <li><a href="https://www.facebook.com/profile.php?id=61595228090694" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Facebook do ArraisPro</a></li>
            </ul>
          </div>

        </div>
        <p className="max-w-xl mx-auto mt-2 text-xs text-center opacity-60 leading-relaxed">
          {INDEPENDENCE_DISCLAIMER}
        </p>
        <p className="text-xs opacity-50">© {new Date().getFullYear()} ArraisPro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
