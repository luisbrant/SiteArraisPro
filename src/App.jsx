import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import Suporte from './pages/Suporte';
import Sobre from './pages/Sobre';
import ComoProduzimosoConteudo from './pages/ComoProduzimosoConteudo';
import PoliticaEditorial from './pages/PoliticaEditorial';
import FonteseAtualizacoes from './pages/FonteseAtualizacoes';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/como-produzimos-o-conteudo" element={<ComoProduzimosoConteudo />} />
          <Route path="/politica-editorial" element={<PoliticaEditorial />} />
          <Route path="/fontes-e-atualizacoes" element={<FonteseAtualizacoes />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

