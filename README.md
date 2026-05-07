# ZAP NOTAS — Landing Page

Landing page estática (HTML + CSS + JS puros, sem build).

## Estrutura

```
.
├── index.html         ← página única
├── config/
│   ├── buttons.js     ← TODAS as coordenadas dos botões (EDITE AQUI)
│   └── README.txt
├── assets/            ← imagens das 7 seções
└── video/
    └── video.mp4      ← coloque o vídeo da demonstração aqui
```

## Como rodar localmente

Basta abrir `index.html` em um servidor estático. Algumas opções:

```bash
npx serve .
# ou
python3 -m http.server 8000
```

> **Importante:** abrir o arquivo direto pelo `file://` impede o
> carregamento do `config/buttons.js`. Use sempre um servidor.

## Como ajustar os botões

Abra `config/buttons.js`. Toda a configuração está lá:

```js
window.ZAPNOTAS_CONFIG = {
  whatsapp: { number: "5561999999999", message: "Olá!..." },
  video:    "video/video.mp4",

  buttons: {
    futuro: {
      d: [ { wa: true, left: 80, top: 68, width: 18, height: 11 } ],
      m: [ { wa: true, left: 55, top: 89, width: 42, height: 5  } ]
    },
    // ... uma entrada para cada seção
  }
};
```

Cada botão tem 4 números, todos em **% da seção**:

| campo  | significado            |
|--------|------------------------|
| left   | distância da esquerda  |
| top    | distância do topo      |
| width  | largura                |
| height | altura                 |

Tipos de botão:

| campo          | o que faz                                          |
|----------------|----------------------------------------------------|
| `wa: true`     | abre o WhatsApp com a mensagem definida acima      |
| `play: true`   | abre o vídeo da pasta `video/`                     |
| `href: "url"`  | link normal (`#ancora`, `mailto:`, `tel:`, `http`) |

## Modo régua (debug)

Para ver a grade amarela (10%) e os retângulos vermelhos sobre cada
botão, abra a página com `?debug` na URL:

```
index.html?debug                    ← todas as seções
index.html?debug&section=futuro     ← isola uma seção
```

Passe o mouse para ver as coordenadas em tempo real, clique para copiá-las.

## Trocar o vídeo

Coloque um arquivo chamado **`video.mp4`** dentro da pasta `video/`.
Pronto — toca quando alguém clicar no botão de play.

Para usar outro nome, mude a linha `video: "video/video.mp4"` em
`config/buttons.js`.

## Deploy

### Vercel
1. Suba este diretório para um repositório no GitHub.
2. No Vercel: *Add New Project* → importe o repositório.
3. Framework Preset: **Other** · Root Directory: `.` · Build: vazio · Output: `.`
4. Deploy.

### GitHub Pages
1. Suba para um repositório.
2. *Settings → Pages → Source: main / root*.

### Qualquer servidor estático
Não há build, dependências ou backend. Basta servir os arquivos.
