import { useI18n } from '../../i18n/LangContext.jsx';

const LAST_UPDATE = '2026-05-05';

export default function Privacy() {
  const { lang, t } = useI18n();
  return lang === 'it' ? <It t={t} /> : <En t={t} />;
}

function It({ t }) {
  return (
    <div className="page page-enter">
      <article className="legal">
        <h1>{t.legal.privacy}</h1>
        <p className="meta">{t.legal.lastUpdate}: {LAST_UPDATE}</p>

        <p>
          La presente informativa è resa ai sensi degli articoli 13 e 14 del Regolamento (UE) 2016/679
          (di seguito “GDPR”) e del D.lgs. 196/2003 come modificato dal D.lgs. 101/2018 (Codice Privacy)
          a chiunque interagisca con il sito <strong>giuliachiesi.it</strong> (di seguito “Sito”).
        </p>

        <h2>1. Titolare del trattamento</h2>
        <p>
          Titolare del trattamento è <strong>Giulia Chiesi</strong>, con sede in Modena (Italia).
          Email di contatto: <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.
          Trattandosi di attività professionale individuale al di sotto delle soglie di legge,
          non è designato un Responsabile della Protezione dei Dati (DPO).
        </p>

        <h2>2. Tipologie di dati trattati</h2>
        <ul>
          <li><strong>Dati di navigazione</strong>: IP, user-agent, pagine visitate. Trattati solo in modo aggregato e per il tempo strettamente necessario alla diagnostica e alla sicurezza del Sito.</li>
          <li><strong>Dati forniti volontariamente</strong> contattando il Titolare via email: nome, indirizzo email e contenuto del messaggio inviato.</li>
          <li><strong>Cookie e identificatori</strong>: vedi la <a href="/cookie">Cookie policy</a> per il dettaglio.</li>
        </ul>

        <h2>3. Finalità e basi giuridiche</h2>
        <table>
          <thead><tr><th>Finalità</th><th>Base giuridica</th><th>Conservazione</th></tr></thead>
          <tbody>
            <tr><td>Erogazione del Sito e diagnostica tecnica</td><td>Legittimo interesse (art. 6.1.f GDPR)</td><td>Max 30 giorni</td></tr>
            <tr><td>Risposta a richieste di contatto</td><td>Esecuzione di misure precontrattuali (art. 6.1.b) e consenso (art. 6.1.a)</td><td>24 mesi dalla richiesta</td></tr>
            <tr><td>Adempimenti di legge (fiscali, contabili, difesa in giudizio)</td><td>Obbligo legale (art. 6.1.c) e legittimo interesse (art. 6.1.f)</td><td>10 anni</td></tr>
            <tr><td>Cookie tecnici essenziali</td><td>Legittimo interesse / esenzione art. 122 D.lgs. 196/2003</td><td>Sessione</td></tr>
            <tr><td>Cookie/strumenti non essenziali</td><td>Consenso (art. 6.1.a + art. 122 Codice Privacy)</td><td>Max 12 mesi</td></tr>
          </tbody>
        </table>

        <h2>4. Modalità del trattamento</h2>
        <p>
          I dati sono trattati con strumenti elettronici, con misure tecniche e organizzative adeguate ad assicurare
          riservatezza, integrità e disponibilità (art. 32 GDPR). Non è previsto alcun processo decisionale automatizzato,
          incluso profilazione, ai sensi dell’art. 22 GDPR.
        </p>

        <h2>5. Destinatari e trasferimenti</h2>
        <p>
          Il Sito è ospitato su <strong>GitHub Pages</strong> (Microsoft Corp.); i font sono caricati tramite
          <strong> Google Fonts</strong> (Google Ireland Ltd.). Questi soggetti agiscono come autonomi titolari o responsabili
          del trattamento dei rispettivi log tecnici. Eventuali trasferimenti extra‑UE avvengono in presenza di
          <em> Standard Contractual Clauses</em> (SCC) approvate dalla Commissione Europea o di decisioni di adeguatezza
          (es. EU‑US Data Privacy Framework).
        </p>

        <h2>6. Diritti dell’interessato</h2>
        <p>
          Hai diritto di chiedere accesso, rettifica, cancellazione, limitazione, opposizione e portabilità (artt. 15‑22 GDPR),
          nonché di revocare il consenso in qualsiasi momento senza pregiudicarne la liceità precedente.
          Per esercitarli scrivi a <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.
        </p>
        <p>
          Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
          (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>) o
          all’autorità del tuo Stato membro di residenza.
        </p>

        <h2>7. Conferimento dei dati</h2>
        <p>
          Il conferimento dei dati tramite email è facoltativo, ma necessario per ricevere risposta:
          il mancato conferimento impedisce il riscontro alla richiesta.
        </p>

        <h2>8. Modifiche</h2>
        <p>
          La presente informativa può essere aggiornata. La data in alto è sempre la data di vigenza.
          In caso di modifiche sostanziali sarà data evidenza in homepage.
        </p>
      </article>
    </div>
  );
}

function En({ t }) {
  return (
    <div className="page page-enter">
      <article className="legal">
        <h1>{t.legal.privacy}</h1>
        <p className="meta">{t.legal.lastUpdate}: {LAST_UPDATE}</p>

        <p>This notice is provided pursuant to articles 13 and 14 of Regulation (EU) 2016/679 (“GDPR”) and Italian
          Legislative Decree 196/2003 (as amended by Decree 101/2018) to anyone interacting with <strong>giuliachiesi.it</strong> (the “Site”).</p>

        <h2>1. Data controller</h2>
        <p>The controller is <strong>Giulia Chiesi</strong>, based in Modena (Italy). Contact: <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.
          Given the small-scale, individual nature of the activity, no Data Protection Officer (DPO) has been appointed.</p>

        <h2>2. Categories of data</h2>
        <ul>
          <li><strong>Navigation data</strong>: IP, user-agent, pages visited. Processed only in aggregate, strictly for diagnostics and security.</li>
          <li><strong>Data provided voluntarily</strong> by emailing the controller: name, email address and the content of the message.</li>
          <li><strong>Cookies and identifiers</strong>: see the <a href="/cookie">Cookie policy</a>.</li>
        </ul>

        <h2>3. Purposes and legal bases</h2>
        <table>
          <thead><tr><th>Purpose</th><th>Legal basis</th><th>Retention</th></tr></thead>
          <tbody>
            <tr><td>Site operation and technical diagnostics</td><td>Legitimate interest (Art. 6(1)(f))</td><td>≤ 30 days</td></tr>
            <tr><td>Reply to contact requests</td><td>Pre-contractual measures (Art. 6(1)(b)) and consent (Art. 6(1)(a))</td><td>24 months</td></tr>
            <tr><td>Legal obligations (tax, accounting, legal defence)</td><td>Legal obligation (Art. 6(1)(c)) and legitimate interest</td><td>10 years</td></tr>
            <tr><td>Strictly necessary cookies</td><td>Legitimate interest / Italian e-Privacy art. 122 exemption</td><td>Session</td></tr>
            <tr><td>Non-essential cookies/tools</td><td>Consent (Art. 6(1)(a) + art. 122)</td><td>≤ 12 months</td></tr>
          </tbody>
        </table>

        <h2>4. How data is processed</h2>
        <p>Data is processed with electronic tools and appropriate technical/organisational measures (Art. 32 GDPR).
          No automated decision-making, including profiling under Art. 22 GDPR.</p>

        <h2>5. Recipients and transfers</h2>
        <p>The Site is hosted on <strong>GitHub Pages</strong> (Microsoft Corp.); fonts are loaded via <strong>Google Fonts</strong> (Google Ireland Ltd.).
          They act as independent controllers or processors of their own technical logs. Extra-EU transfers are based on
          Standard Contractual Clauses (SCC) approved by the European Commission or adequacy decisions (e.g. EU‑US DPF).</p>

        <h2>6. Your rights</h2>
        <p>You have the right to access, rectify, erase, restrict, object to, and port your data (Arts. 15‑22 GDPR), and
          to withdraw consent at any time without affecting prior lawfulness. Email <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.</p>
        <p>You may also lodge a complaint with the Italian DPA (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>)
          or your local supervisory authority.</p>

        <h2>7. Provision of data</h2>
        <p>Providing data by email is optional but necessary to receive a reply.</p>

        <h2>8. Updates</h2>
        <p>This notice may be updated. The date above is the effective date.</p>
      </article>
    </div>
  );
}
