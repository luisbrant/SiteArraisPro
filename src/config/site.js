// Configuração central do site ArraisPro.
// Arquivo em JavaScript puro (sem JSX) para poder ser importado tanto pelo app
// React quanto pelo plugin de pré-renderização executado no build (vite.config.js).

export const SITE_URL = 'https://www.arraispro.com.br';
export const SITE_NAME = 'ArraisPro';

export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=br.com.arraispro.app';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61595228090694';
export const INSTAGRAM_URL = 'https://www.instagram.com/arraispro/';
export const CONTACT_EMAIL = 'contato@arraispro.com.br';

export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT = 'ArraisPro: simulados para Arrais-Amador e Motonauta';

export const DEFAULT_OG_TITLE = 'ArraisPro: simulados para Arrais-Amador e Motonauta';
export const DEFAULT_OG_DESCRIPTION =
  'Estude para Arrais-Amador e Motonauta com simulados, questões comentadas, apostila digital e trilha de estudos.';

export const ORGANIZATION_DESCRIPTION =
  'Plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta.';

export const INDEPENDENCE_DISCLAIMER =
  'O ArraisPro é uma plataforma independente de apoio aos estudos para Arrais-Amador e Motonauta. ' +
  'Não emite habilitações e não possui vínculo, homologação ou endosso da Marinha do Brasil, ' +
  'das Capitanias dos Portos ou de órgãos governamentais.';

/** Link da Google Play com parâmetros UTM para medir a origem do clique. */
export function playStoreUrl(campaign = 'website') {
  return `${PLAY_STORE_URL}&utm_source=website&utm_medium=organic&utm_campaign=${encodeURIComponent(campaign)}`;
}

/** Converte um caminho interno ("/motonauta") em URL absoluta canônica. */
export function absoluteUrl(path = '/') {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
