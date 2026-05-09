# Portfolio — Giulia Chiesi

Sito portfolio personale di Giulia Chiesi, graphic designer (Modena / Bologna).
Stack: **Vite + React 19 + React Router 7**, deploy su **GitHub Pages**.

## Struttura

```
.
├── public/                # asset statici copiati così come sono
│   ├── assets/            # immagini (ritratto, ecc.)
│   ├── 404.html           # SPA fallback per GitHub Pages
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/        # Nav, Footer
│   │   └── ui/            # Cursor, CookieBanner, Arrow…
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   ├── CaseStudy.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   └── legal/         # Privacy, Cookie, Terms
│   ├── data/              # PROJECTS + SVG thumbnails
│   ├── i18n/              # IT/EN strings + LangContext
│   ├── hooks/             # useConsent (GDPR consent store)
│   ├── lib/               # asset() helper
│   ├── styles/            # tokens.css + per-section CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Sviluppo locale

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # output in ./dist
npm run preview
```

## Deploy su GitHub Pages (manuale)

1. Crea il repo `portfolio_giulia` su GitHub e fai push del sorgente sul branch `main`.
2. Sul tuo Mac: `npm run deploy` — builda e spinge `dist/` sul branch `gh-pages`.
3. Su GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `gh-pages` / `(root)`**.
4. Sito disponibile su `https://<utente>.github.io/portfolio_giulia/`.

Per ogni aggiornamento successivo: `npm run deploy` (rilancia il build e ripubblica).

### Dominio personalizzato (es. giuliachiesi.it)

1. Crea il file `public/CNAME` con dentro `giuliachiesi.it`.
2. In `vite.config.js` cambia il default a `base = process.env.BASE_PATH || '/';`.
3. Configura il DNS (4 record A verso `185.199.108-111.153`, CNAME `www` su `<utente>.github.io.`).
4. Settings → Pages → Custom domain.
5. `npm run deploy`.

### Sito utente/organizzazione

Se il repo si chiama `<utente>.github.io`, in `vite.config.js` imposta `base = '/'`.

## GDPR / Privacy

- **Niente analytics né tracker pubblicitari** di default.
- Il banner cookie raccoglie consenso granulare (preferenze, analytics, marketing) salvato in
  `localStorage` (`gc.consent.v1`) e revocabile in qualsiasi momento dalla pagina `/cookie` o
  dal pulsante 🍪 in basso a sinistra (requisito EDPB: revoca facile quanto il consenso).
- Il modulo contatti richiede consenso esplicito al trattamento (art. 6 GDPR) prima dell’invio.
- Pagine legali fornite in IT/EN: `/privacy`, `/cookie`, `/termini` (`/terms` alias).
- Tabella retention, base giuridica per ciascuna finalità, riferimenti al Garante (linee guida cookie 2021),
  diritto di reclamo e foro competente già inseriti.

> **Nota**: i testi sono un *template* di riferimento già allineato a GDPR + ePrivacy + linee guida del
> Garante. Prima di mettere in produzione su dominio commerciale, far rivedere a un legale i dati
> identificativi del titolare (eventuale P.IVA, indirizzo completo) e qualsiasi servizio aggiuntivo
> (newsletter, analytics, embed esterni) che possa cambiare il quadro delle finalità.

## Accessibilità & responsive

- Layout responsive: breakpoint 600px e 900px su tutte le sezioni.
- `prefers-reduced-motion`: animazioni silenziate.
- Skip link, aria-label sui controlli interattivi, focus state preservati.
- Cursor custom disattivato su touch e su `pointer: coarse`.

## Internazionalizzazione

Italiano (default) + Inglese, switch dalla nav. La lingua è persistita in `localStorage` (`gc.lang`).

## Licenza

I contenuti (testi, immagini, illustrazioni) sono © Giulia Chiesi. Il codice sorgente, salvo diversa indicazione,
è rilasciato per uso personale. Per riuso commerciale contattare l’autrice.
