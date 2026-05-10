import { useI18n } from '../../i18n/LangContext.jsx';
import { useConsent } from '../../hooks/useConsent.js';

const LAST_UPDATE = '2026-05-10';

const CATEGORIES = {
  it: [
    { key: 'necessary', label: 'Tecnici essenziali', desc: 'Strettamente necessari al funzionamento del sito (memorizzazione lingua e preferenze cookie). Esenti da consenso ai sensi dell’art. 122 D.lgs. 196/2003.', locked: true },
    { key: 'preferences', label: 'Preferenze', desc: 'Memorizzano scelte non essenziali (es. tema, layout) per migliorare la tua esperienza.' },
    { key: 'analytics', label: 'Statistica', desc: 'Misurazione anonima del traffico, in forma aggregata. Attualmente non utilizziamo strumenti analytics: questo toggle è predisposto per future integrazioni.' },
    { key: 'marketing', label: 'Marketing', desc: 'Strumenti di tracciamento pubblicitario o profilazione cross‑sito. Attualmente non in uso.' },
  ],
  en: [
    { key: 'necessary', label: 'Strictly necessary', desc: 'Required for site operation (stored language and cookie preferences). Exempt from consent under EU e-Privacy.', locked: true },
    { key: 'preferences', label: 'Preferences', desc: 'Store non-essential choices (theme, layout) to improve your experience.' },
    { key: 'analytics', label: 'Analytics', desc: 'Aggregate, anonymous traffic measurement. We currently use no analytics: this toggle is here for future integrations.' },
    { key: 'marketing', label: 'Marketing', desc: 'Cross-site advertising or profiling tools. Currently not in use.' },
  ],
};

export default function CookiePage() {
  const { t, lang } = useI18n();
  const { consent, update, acceptAll, rejectAll } = useConsent();
  const cats = CATEGORIES[lang];

  return (
    <div className="page page-enter">
      <article className="legal">
        <h1>{t.legal.cookie}</h1>
        <p className="meta">{t.legal.lastUpdate}: {LAST_UPDATE}</p>

        {lang === 'it' ? (
          <>
            <p>Questa Cookie policy descrive le tipologie di cookie e tecnologie simili (es. localStorage) utilizzate dal Sito,
              le finalità e le modalità per gestire o revocare il consenso, in conformità a GDPR (Reg. UE 2016/679),
              Direttiva ePrivacy e <a href="https://www.garanteprivacy.it/cookie" target="_blank" rel="noopener noreferrer">linee guida del Garante</a> di luglio 2021.</p>

            <h2>Cosa sono i cookie</h2>
            <p>Piccoli file di testo che il Sito invia al tuo dispositivo per memorizzare informazioni utili al funzionamento o
              alle tue preferenze. Possono essere di prima parte (gestiti da noi) o di terze parti.</p>

            <h2>Quali cookie utilizziamo</h2>
          </>
        ) : (
          <>
            <p>This Cookie policy describes the cookies and similar technologies (e.g. localStorage) used by the Site,
              the purposes and how to manage or revoke consent, in compliance with the GDPR, the ePrivacy Directive and
              the Italian DPA guidelines (July 2021).</p>

            <h2>What cookies are</h2>
            <p>Small text files the Site sends to your device to store information useful for operation or your preferences.
              They can be first‑party (managed by us) or third‑party.</p>

            <h2>What cookies we use</h2>
          </>
        )}

        <table>
          <thead>
            <tr>
              <th>{lang === 'it' ? 'Nome' : 'Name'}</th>
              <th>{lang === 'it' ? 'Tipo' : 'Type'}</th>
              <th>{lang === 'it' ? 'Finalità' : 'Purpose'}</th>
              <th>{lang === 'it' ? 'Durata' : 'Duration'}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>gc.lang</td><td>localStorage / first-party</td><td>{lang === 'it' ? 'Memorizza la lingua scelta. Dato locale al browser, mai trasmesso ad alcun server.' : 'Stores chosen language. Browser-local data, never transmitted to any server.'}</td><td>12 {lang === 'it' ? 'mesi' : 'months'}</td></tr>
            <tr><td>gc.consent.v1</td><td>localStorage / first-party</td><td>{lang === 'it' ? 'Memorizza le tue preferenze sui cookie' : 'Stores your cookie preferences'}</td><td>12 {lang === 'it' ? 'mesi' : 'months'}</td></tr>
          </tbody>
        </table>

        <p>
          {lang === 'it'
            ? 'Il Sito non installa cookie di profilazione, analytics di terze parti, social plugin né strumenti pubblicitari. I font tipografici sono auto‑ospitati direttamente sul dominio del Sito: nessun caricamento da Google Fonts o da altri CDN di terze parti, e di conseguenza nessun trasferimento dell’indirizzo IP dell’utente verso fornitori esterni per finalità di rendering tipografico. L’unico provider esterno coinvolto è il fornitore di hosting (GitHub Pages), che riceve la richiesta HTTP necessaria a servire le pagine ed eventualmente conserva log tecnici di sicurezza secondo le proprie policy.'
            : 'The Site does not install profiling cookies, third-party analytics, social plugins or advertising tools. Webfonts are self-hosted on the Site’s own origin: no requests to Google Fonts or any third-party CDN, hence no IP transfer to external providers for typography rendering. The only external provider involved is the hosting provider (GitHub Pages), which receives the HTTP request needed to serve pages and may retain technical security logs per its own policies.'}
        </p>

        <div id="cookie-preferences" className="preferences">
          <h2>{lang === 'it' ? 'Le tue preferenze' : 'Your preferences'}</h2>
          {cats.map((c) => (
            <div key={c.key} className="pref-row">
              <div className="info">
                <strong>{c.label}</strong>
                <span>{c.desc}</span>
              </div>
              <button
                type="button"
                className={`toggle ${consent[c.key] ? 'on' : ''} ${c.locked ? 'locked' : ''}`}
                onClick={() => !c.locked && update({ [c.key]: !consent[c.key] })}
                aria-pressed={!!consent[c.key]}
                disabled={c.locked}
              >
                {c.locked ? (lang === 'it' ? 'Sempre attivi' : 'Always on') : (consent[c.key] ? (lang === 'it' ? 'Attivi' : 'On') : (lang === 'it' ? 'Disattivati' : 'Off'))}
              </button>
            </div>
          ))}
          <div className="pref-actions">
            <button type="button" className="secondary" onClick={rejectAll}>{t.cookie.rejectAll}</button>
            <button type="button" className="primary" onClick={acceptAll}>{t.cookie.acceptAll}</button>
          </div>
        </div>

        <h2>{lang === 'it' ? 'Come revocare il consenso' : 'How to withdraw consent'}</h2>
        <p>
          {lang === 'it'
            ? 'Puoi modificare o revocare le tue preferenze in qualsiasi momento da questa pagina o dal pulsante "🍪" in basso a sinistra. Puoi inoltre cancellare i cookie dal tuo browser tramite le impostazioni di privacy.'
            : 'You can update or withdraw your preferences at any time from this page or from the "🍪" button at the bottom-left. You can also delete cookies from your browser via its privacy settings.'}
        </p>
      </article>
    </div>
  );
}
