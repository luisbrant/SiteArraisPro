import { StrictMode } from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root');
const isPrerendered = root.hasAttribute('data-prerendered');

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

if (isPrerendered) {
  hydrateRoot(root, app);
} else {
  // limpa o fallback antes de renderizar para evitar conflito de hidratação
  root.innerHTML = '';
  createRoot(root).render(app);
}
