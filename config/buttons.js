/* ════════════════════════════════════════════════════════════════════
   COORDENADAS DOS BOTÕES — edite SOMENTE este arquivo.
   --------------------------------------------------------------------
   Cada botão tem 4 números (em % da seção):
     left  → distância da esquerda
     top   → distância do topo
     width → largura
     height→ altura

   Tipos:
     wa:   true       → abre o WhatsApp (número + mensagem definidos abaixo)
     play: true       → abre o vídeo da pasta /video/
     href: "url"      → link normal (#ancora, mailto:, tel:, http...)

   Para visualizar a régua amarela e os retângulos vermelhos:
     index.html?debug
     index.html?debug&section=futuro
   ════════════════════════════════════════════════════════════════════ */
window.ZAPNOTAS_CONFIG = {

  whatsapp: {
    number:  "5561999231379",                                       // DDI+DDD+número, sem espaços
    message: "Oi! Quero testar a emissão de nota pelo WhatsApp"    // mensagem pré-preenchida
  },

  // Cole aqui o link de compartilhamento do Google Drive (o vídeo precisa estar público)
  // Formato: https://drive.google.com/file/d/ID_DO_ARQUIVO/view?usp=sharing
  video: "https://drive.google.com/file/d/13o8f-6243J8j4qiOf9pa3oK1RNK0NkLS/preview",

  buttons: {

    // ── SEÇÃO 1: HERO ─────────────────────────────────────────────
    hero: {
      d: [
        { href: "#futuro",   left: 21,  top: 2,   width: 14,   height: 5.5 },
        { href: "#features", left: 39,  top: 2,   width: 7.5,  height: 5.5 },
        { href: "#stats",    left: 50,  top: 2,   width: 15,   height: 5.5 },
        { href: "#demo",     left: 66,  top: 2,   width: 11.5, height: 5.5 },
        { href: "#cta",      left: 81,  top: 2,   width: 7,    height: 5.5 },
        { wa: true,          left: 32,  top: 86,  width: 14,   height: 11  }
      ],
      m: [
        { href: "#futuro",   left: 17,  top: 0.5, width: 20,   height: 4.5 },
        { href: "#features", left: 38,  top: 0.5, width: 11,   height: 4.5 },
        { href: "#stats",    left: 49,  top: 0.5, width: 15,   height: 4.5 },
        { href: "#demo",     left: 64,  top: 0.5, width: 15,   height: 4.5 },
        { href: "#cta",      left: 79,  top: 0.5, width: 14,   height: 4.5 },
        { wa: true,          left: 4,   top: 91,  width: 92,   height: 5   }
      ]
    },

    // ── SEÇÃO 2: PASSADO vs FUTURO ────────────────────────────────
    futuro: {
      d: [ { wa: true, left: 80, top: 68, width: 18, height: 11 } ],
      m: [ { wa: true, left: 55, top: 89, width: 42, height: 5  } ]
    },

    // ── SEÇÃO 3: FUNCIONALIDADES ──────────────────────────────────
    features: {
      d: [],
      m: [ { wa: true, left: 2, top: 91, width: 96, height: 6 } ]
    },

    // ── SEÇÃO 4: ESTATÍSTICAS + VÍDEO ─────────────────────────────
    stats: {
      d: [
        { play: true, left: 20, top: 28, width: 18, height: 27 },
        { wa:   true, left: 64, top: 70, width: 31, height: 13 }
      ],
      m: [
        { play: true, left: 37, top: 18, width: 19, height: 13 },
        { wa:   true, left: 38, top: 82, width: 58, height: 8  }
      ]
    },

    // ── SEÇÃO 5: TESTE GRÁTIS ─────────────────────────────────────
    demo: {
      d: [ { wa: true, left: 2, top: 83, width: 37, height: 13 } ],
      m: [ { wa: true, left: 2, top: 91, width: 96, height: 6  } ]
    },

    // ── SEÇÃO 6: CTA FINAL ────────────────────────────────────────
    cta: {
      d: [ { wa: true, left: 30, top: 70, width: 36, height: 16 } ],
      m: [ { wa: true, left: 5,  top: 60, width: 90, height: 10 } ]
    },

    // ── SEÇÃO 7: RODAPÉ ───────────────────────────────────────────
    // Sem botões. Se quiser adicionar contatos clicáveis depois,
    // copie um item dos exemplos acima e ajuste left/top/width/height.
    footer: {
      d: [],
      m: []
    }

  }
};
