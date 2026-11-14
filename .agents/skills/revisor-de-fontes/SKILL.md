---
name: revisor-de-fontes
description: >-
  Revisa todas as matérias publicadas no blog do ArraisPro (src/data/blogPosts.js)
  e confronta cada afirmação técnica contra as fontes normativas oficiais
  (NORMAM-211/DPC, NORMAM-212/DPC, RIPEAM-72, IALA Região B, LESTA e RLESTA) e a
  Política Editorial do site.
---

# Agente Revisor de Fontes — ArraisPro

Use esta skill sempre que precisar auditar matérias já publicadas ou revisar novos artigos antes de publicá-los no blog (`src/data/blogPosts.js`).

## 1. Escopo da Auditoria

1. **Identificar matérias publicadas**:
   - Ler `src/data/blogPosts.js` e filtrar todos os objetos com `!post.draft` e data de publicação ativa.
2. **Confrontar contra as fontes oficiais**:
   - **NORMAM-211/DPC**: Habilitação de Arrais-Amador (navegação interior, exceto moto aquática), idade mínima (18 anos para Arrais-Amador; 8 anos para Veleiro), validade da CHA (10 anos), prova teórica (40 questões, 2h, nota mínima 5,0, Anexo 5-A), dispensa de atestado médico com CNH válida, atestado médico emitido há menos de 1 ano, comprovante de residência com vencimento até 120 dias ou declaração, classes de incêndio A, B e C e agentes extintores (item 4.27.2), classes de coletes salva-vidas (I, II, III, IV e V) e dispensa de boia salva-vidas para embarcações miúdas.
   - **NORMAM-212/DPC**: Habilitação de Motonauta (específica para moto aquática nos limites da navegação interior), idade mínima (18 anos), prova teórica quando realizada separadamente (20 questões, 1h30, nota mínima 5,0, Anexo 3-C), uso obrigatório de colete (Classe III ou V) e chave de segurança (*kill switch*), vedação de navegação noturna em regra geral (restrita entre o nascer e o pôr do sol), distância mínima de 200 metros da linha de base e trânsito perpendicular de entrada/saída abaixo de 3 nós.
   - **RIPEAM-72 (COLREG-72 — Decreto nº 80.068/1977)**:
     - Regras 5 a 8: vigilância visual e auditiva constante, velocidade de segurança, risco de abalroamento (marcação constante com redução de distância) e manobra franca/positiva com antecedência.
     - Regras 12 a 18: ultrapassagem (Regra 13), roda a roda (Regra 14 — ambas guinam para boreste), rumos cruzados (Regra 15 — quem avista por boreste manobra), ação da embarcação que mantém rumo/velocidade (Regra 17) e responsabilidades entre categorias (Regra 18).
     - Regras 20 a 31: luzes de navegação e setores horizontais (mastro 225° branca, bordos 112,5° verde a boreste e encarnada a bombordo, alcançado 135° branca) e embarcação a remo (Regra 25).
     - Regras 32 a 35: apito curto (~1s) e apito longo (4 a 6s); sinais de manobra no visual (1 curto = boreste, 2 curtos = bombordo, 3 curtos = operando propulsão a ré, 5+ curtos e rápidos = dúvida/advertência); sinais de ultrapassagem em canal estreito (2 longos + 1 curto = por boreste da alcançada, 2 longos + 2 curtos = por bombordo da alcançada, concordância = 1 longo + 1 curto + 1 longo + 1 curto).
   - **Balizamento IALA Região B**:
     - Sentido convencional do balizamento (vindo do mar para o interior do porto/rio).
     - Sinais laterais: bombordo (verde, cilíndrico) e boreste (encarnado/vermelho, cônico).
     - Canal preferencial: a bombordo (encarnado com faixa horizontal verde) e a boreste (verde com faixa horizontal encarnada).
     - Perigo isolado (preto com faixa(s) horizontal(is) encarnada(s), duas esferas pretas no tope) e águas seguras (faixas verticais encarnadas e brancas, uma esfera encarnada no tope).
   - **LESTA (Lei nº 9.537/1997) e RLESTA (Decreto nº 2.596/1998)**:
     - Art. 11 do RLESTA: conduzir embarcação ou contratar tripulante sem habilitação -> multa do Grupo E; medidas administrativas (apreensão/retirada de tráfego) aplicadas conforme o caso concreto.

## 2. Verificação Editorial e Técnica

- Grafia padronizada com hífen: `Arrais-Amador`.
- Declaração expressa de independência institucional (sem vínculo ou endosso da Marinha do Brasil) e ausência de promessas de aprovação.
- Links internos em sintaxe Markdown padrão `[texto](/rota)` (sem tags `<Link>` cruas em posts publicados).
- Presença de `description`, `date` no formato `YYYY-MM-DD` e inclusão correspondente em `public/sitemap.xml`.

