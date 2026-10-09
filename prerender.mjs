import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { blogPosts } from './src/data/blogPosts.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routesSeo = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/routesSeo.json'), 'utf-8'));

const routes = [
  '/',
  '/arrais-amador',
  '/motonauta',
  '/simulado-arrais-amador',
  '/simulado-motonauta',
  '/apostila-arrais-amador',
  '/sobre',
  '/como-produzimos-o-conteudo',
  '/fontes-e-referencias',
  '/politica-editorial',
  '/politica-de-privacidade',
  '/termos-de-uso',
  '/suporte',
  '/blog',
  '/404'
];

const now = new Date();
for (const post of blogPosts) {
  if (!post.draft) {
    const postDate = new Date(post.date.length === 10 ? post.date + 'T12:00:00-03:00' : post.date);
    if (postDate <= now) {
      routes.push(`/blog/${post.slug}`);
    }
  }
}

const templatePath = path.resolve(__dirname, 'dist/index.html');
const template = fs.readFileSync(templatePath, 'utf-8');

// Import server bundle
const { render } = await import('./dist-server/entry-server.js');

for (const url of routes) {
  // Use HelmetContext merely to prevent warnings, but don't rely on it
  const helmetContext = {};
  let { html } = render(url, helmetContext);

  // React 19 Native Hoisting faz com que tags SEO do componente sejam anexadas na string do renderToString.
  // Como as injetamos manualmente na <head>, removemos do html do <body> para evitar tag duplicada.
  html = html.replace(/<title[^>]*>.*?<\/title>/gi, '');
  html = html.replace(/<meta\s+(?:name|property)=["'](?:description|robots|og:[^"']+)["'][^>]*>/gi, '');
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, '');
  
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  console.log(`[DEBUG] ${url} -> H1: ${h1Match ? h1Match[1] : 'NONE'}`);

  let finalHtml = template;
  let seo = null;

  if (url.startsWith('/blog/')) {
    const slug = url.split('/')[2];
    const post = blogPosts.find(p => p.slug === slug);
    if (post) {
      seo = {
        title: `${post.title} | Blog ArraisPro`,
        desc: post.description,
        ogTitle: `${post.title} | Blog ArraisPro`,
        ogDesc: post.description,
        ogType: 'article',
        ogImage: 'https://www.arraispro.com.br/og-image.jpg',
        canonical: `https://www.arraispro.com.br/blog/${post.slug}`
      };
    }
  } else if (url === '/404') {
    seo = {
      is404: true,
      title: 'Página não encontrada | ArraisPro',
      desc: 'A página que você procura não existe.'
    };
  } else {
    seo = routesSeo[url];
    if (seo) {
      if (!seo.canonical) seo.canonical = `https://www.arraispro.com.br${url === '/' ? '' : url}`;
    }
  }

  if (seo) {
    let helmetTags = '';
    if (seo.is404) {
      helmetTags = `
    <title>${seo.title}</title>
    <meta name="robots" content="noindex,nofollow" />
    `;
    } else {
      helmetTags = `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.desc}" />
    <link rel="canonical" href="${seo.canonical}" />
    <meta property="og:title" content="${seo.ogTitle || seo.title}" />
    <meta property="og:description" content="${seo.ogDesc || seo.desc}" />
    <meta property="og:type" content="${seo.ogType || 'website'}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:image" content="${seo.ogImage || 'https://www.arraispro.com.br/og-image.jpg'}" />
    <meta property="og:site_name" content="ArraisPro" />
    <meta name="robots" content="index,follow" />
    `;
    }
    
    // Remove o bloco de SEO antigo
    finalHtml = finalHtml.replace(
      /<!-- SEO-START -->[\s\S]*?<!-- SEO-END -->/i,
      ''
    );
    
    // Injeta tags customizadas no HEAD
    finalHtml = finalHtml.replace('</head>', `<!-- Inject SEO -->\n${helmetTags}\n  </head>`);
  }

  // Substitui a div root inteira pela renderizada
  finalHtml = finalHtml.replace(
    /<div id="root">[\s\S]*?(?=<script|<\/body>)/i,
    `<div id="root" data-prerendered="true">${html}</div>\n    `
  );

  // Se não for a raiz, cria a pasta e salva como index.html para rota amigável (exceto 404)
  let filePath;
  if (url === '/') {
    filePath = path.join(__dirname, 'dist', 'index.html');
  } else if (url === '/404') {
    filePath = path.join(__dirname, 'dist', '404.html');
  } else {
    filePath = path.join(__dirname, 'dist', `${url}/index.html`);
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, finalHtml);
}

console.log('Prerender concluído.');
