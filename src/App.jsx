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
import FontesEReferencias from './pages/FontesEReferencias';
import ArraisAmador from './pages/ArraisAmador';
import Motonauta from './pages/Motonauta';
import SimuladoArraisAmador from './pages/SimuladoArraisAmador';
import SimuladoMotonauta from './pages/SimuladoMotonauta';
import ApostilaArraisAmador from './pages/ApostilaArraisAmador';

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
          <Route path="/fontes-e-referencias" element={<FontesEReferencias />} />
          <Route path="/arrais-amador" element={<ArraisAmador />} />
          <Route path="/motonauta" element={<Motonauta />} />
          <Route path="/simulado-arrais-amador" element={<SimuladoArraisAmador />} />
          <Route path="/simulado-motonauta" element={<SimuladoMotonauta />} />
          <Route path="/apostila-arrais-amador" element={<ApostilaArraisAmador />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

