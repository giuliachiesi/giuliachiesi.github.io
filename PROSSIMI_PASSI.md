# Prossimi passi — checklist a costo 0 (deploy manuale)

Tutto quello che ti rimane da fare per portare il portfolio online. **Zero costi**: GitHub Pages è gratis, deploy manuale via `gh-pages` CLI.

---

## 1. Verifica locale (5 min)

```bash
cd /Users/federicovellani/repositories/portfolio_giulia
npm run dev
```

Apri `http://localhost:5173/` e controlla:

- [ ] Home, About, Progetti, Contatti caricano
- [ ] Click su un progetto → case study si apre
- [ ] Switch IT/EN funziona, lingua persistita dopo refresh
- [ ] Banner cookie compare al primo accesso → "Rifiuta tutti" / "Accetta tutti" / "Preferenze"
- [ ] Footer → click "Privacy", "Cookie policy", "Termini e condizioni" → pagine legali OK
- [ ] Pulsante 🍪 in basso a sinistra riapre il banner
- [ ] Form contatti senza checkbox consenso → mostra errore
- [ ] Mobile (DevTools → 375px e 768px): nav diventa hamburger, grid si adatta

Per fermare il server: `Ctrl+C`.

---

## 2. Crea repo GitHub e collega (10 min)

### 2.1 Crea account GitHub (se non ce l'hai)
- https://github.com/signup → gratis

### 2.2 Crea il repo
- https://github.com/new
- **Repository name**: `portfolio_giulia` (deve essere identico)
- **Public** (richiesto per GitHub Pages gratis)
- NON inizializzare con README/license
- Click "Create repository"

### 2.3 Push del codice sorgente

Dal terminale, dentro `portfolio_giulia`:

```bash
git init
git add .
git commit -m "Init portfolio Vite + React + GDPR"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/portfolio_giulia.git
git push -u origin main
```

Sostituisci `TUO-USERNAME` con il tuo username GitHub.

> **Nota**: questo branch `main` contiene il sorgente. Il sito buildato finirà su un branch separato `gh-pages` creato automaticamente al primo deploy.

---

## 3. Primo deploy manuale (2 min)

Dal terminale, dentro la cartella del progetto:

```bash
npm run deploy
```

Cosa fa:
1. Esegue `npm run build` → genera `dist/`
2. Spinge il contenuto di `dist/` sul branch `gh-pages` del tuo repo

Al primo deploy ti potrebbe chiedere le credenziali GitHub. Se hai 2FA usa un Personal Access Token al posto della password (https://github.com/settings/tokens → "Generate new token (classic)" → spunta `repo` → copia il token e usalo come password).

---

## 4. Attiva GitHub Pages (1 min, una volta sola)

Sul repo GitHub:

1. **Settings** (in alto a destra)
2. Sidebar → **Pages**
3. **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` / `/ (root)`
4. Click **Save**

Aspetta 1-2 min. Sito live su:

```
https://TUO-USERNAME.github.io/portfolio_giulia/
```

---

## 5. Aggiornamenti successivi (workflow di tutti i giorni)

Ogni volta che modifichi qualcosa (testi, progetti, immagini):

```bash
# 1. Salva il sorgente su main
git add .
git commit -m "Aggiorna progetti"
git push

# 2. Pubblica la versione buildata
npm run deploy
```

Dopo 30-60 secondi GitHub Pages serve la nuova versione. Se non vedi cambiamenti: cache browser → `Cmd+Shift+R` (hard refresh).

> **Importante**: `git push` da solo NON aggiorna il sito. Devi sempre lanciare `npm run deploy` dopo per vedere le modifiche online.

---

## 6. Test online (5 min, dopo il primo deploy)

Sull'URL live verifica:

- [ ] Tutte le pagine caricano (anche con refresh diretto su `/about`, `/work/korea`, `/privacy`)
- [ ] I font Google si caricano
- [ ] Le immagini (ritratto) si vedono
- [ ] Banner cookie compare
- [ ] Lighthouse (DevTools → Lighthouse): punteggi Performance/Accessibility/SEO ≥ 90

---

## 7. (Opzionale) Dominio personalizzato

Anche con dominio custom, **GitHub Pages resta gratis**. Il dominio sì costa (≈ 8-15 €/anno se lo compri tu su Namecheap/Cloudflare/Aruba), ma **non è obbligatorio**.

Se NON vuoi dominio custom → salta a §8.

Se ce l'hai già (es. `giuliachiesi.it`):

1. Crea `public/CNAME` con dentro la sola riga `giuliachiesi.it`
2. In `vite.config.js` cambia il default `base = process.env.BASE_PATH || '/portfolio_giulia/';` → `base = process.env.BASE_PATH || '/';`
3. Sul provider DNS aggiungi:
   - 4 record A su `@` verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - 1 record CNAME su `www` verso `TUO-USERNAME.github.io.`
4. Su GitHub Settings → Pages → "Custom domain" → inserisci `giuliachiesi.it` → "Enforce HTTPS"
5. `npm run deploy`
6. In 5-30 min HTTPS attivo (Let's Encrypt automatico, gratis)

---

## 8. Aggiornamenti contenuti

### Aggiungere/modificare un progetto
File: `src/data/projects.js` — aggiungi un oggetto. Per la thumbnail SVG, file: `src/data/thumbs.jsx`.

### Modificare testi (bio, servizi, ecc.)
File: `src/i18n/index.js` — sezioni `it` e `en`.

### Cambiare immagine ritratto
Sostituisci `public/assets/giulia-portrait.jpg` mantenendo lo stesso nome.

### Pubblicare le modifiche
```bash
git add . && git commit -m "Aggiorna progetti" && git push
npm run deploy
```

---

## 9. Personalizzazioni legali consigliate (importante!)

Apri questi file e adatta i dati identificativi reali:

- [ ] `src/pages/legal/Privacy.jsx` — sezione "Titolare del trattamento": aggiungi indirizzo completo, eventuale P.IVA, codice fiscale
- [ ] `src/pages/legal/Terms.jsx` — sezione "Oggetto" e "Foro competente": stessi dati
- [ ] `src/i18n/index.js` → `contact.mail` e `footer`: verifica email reale
- [ ] Aggiorna la costante `LAST_UPDATE` nei tre file legali quando li modifichi

Se in futuro aggiungi:
- Newsletter / mailing list → serve consenso aggiuntivo + DPA col provider
- Analytics (anche self-hosted come Umami/Plausible) → aggiorna Cookie policy + abilita toggle "analytics" nel banner
- Form con backend (Formspree, EmailJS, ecc.) → serve DPA + aggiornare Privacy

---

## 10. SEO (10 min, gratis)

- [ ] **Google Search Console**: https://search.google.com/search-console → aggiungi proprietà → verifica con tag HTML (mettilo in `index.html` dentro `<head>`) → re-deploy
- [ ] **Bing Webmaster Tools**: https://www.bing.com/webmasters/ — stessa cosa
- [ ] Quando avrai un'immagine social (1200x630px), mettila in `public/assets/og-image.jpg` e aggiungi in `index.html`:
  ```html
  <meta property="og:image" content="https://TUO-USERNAME.github.io/portfolio_giulia/assets/og-image.jpg" />
  ```

---

## 11. Backup e versioning

- Il backup del vecchio sito è in `_legacy_index.html.bak` (escluso da git via `.gitignore`)
- GitHub stesso è il backup: ogni `git push` è una snapshot
- Consigliato: ogni tanto crea una "release" (Releases → Draft new release → tag `v1.0.0`)

---

## 12. Cose che NON ti servono (per restare a 0 €)

- ❌ **Iubenda / Cookiebot / OneTrust**: utili ma costosi (50-150 €/anno). Il banner in-house basta finché non aggiungi tracker terze parti.
- ❌ **Hosting a pagamento**: GitHub Pages copre il caso d'uso.
- ❌ **CDN extra (Cloudflare)**: GitHub Pages serve già da CDN globale.
- ❌ **Email server**: per i contatti basta `mailto:` (già configurato) — l'utente apre il client di posta.

---

## TL;DR — comandi che ti servono ogni giorno

```bash
# Sviluppo locale
npm run dev

# Pubblica modifiche (deploy manuale)
git add . && git commit -m "msg" && git push   # salva sorgente
npm run deploy                                  # builda + pubblica
```

Tempo per il primo deploy completo: **20 minuti**. Costo: **0 €**.
