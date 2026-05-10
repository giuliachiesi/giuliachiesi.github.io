import { useI18n } from '../../i18n/LangContext.jsx';

const LAST_UPDATE = '2026-05-10';

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
          a chiunque interagisca con il sito raggiungibile agli indirizzi
          {' '}<strong>giuliachiesi.github.io</strong> e, se attivato in futuro, <strong>giuliachiesi.it</strong> (di seguito “Sito”).
        </p>

        <h2>1. Titolare del trattamento</h2>
        <p>
          Titolare del trattamento è <strong>Giulia Chiesi</strong>, persona fisica residente a Modena (Italia),
          attualmente non titolare di partita IVA (attività professionale di natura preparatoria/portfolio,
          al di fuori dell’ambito di applicazione dell’art. 5 D.P.R. 633/1972).
          Email di contatto: <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.
          Per le comunicazioni postali è possibile richiedere l’indirizzo all’email indicata.
          Non ricorrono i presupposti dell’art. 37 GDPR per la nomina di un Responsabile della Protezione
          dei Dati (DPO).
        </p>

        <h2>2. Tipologie di dati trattati</h2>
        <ul>
          <li><strong>Dati di navigazione</strong>: IP, user-agent, pagine visitate. Tali dati possono essere registrati nei log tecnici del provider di hosting (GitHub Inc.) per finalità di sicurezza e diagnostica; non sono utilizzati dal Titolare per identificare gli utenti.</li>
          <li><strong>Dati forniti volontariamente</strong> contattando il Titolare via email: nome, indirizzo email e contenuto del messaggio inviato.</li>
          <li><strong>Cookie e identificatori</strong>: vedi la <a href="/cookie">Cookie policy</a> per il dettaglio.</li>
        </ul>

        <h2>3. Finalità e basi giuridiche</h2>
        <table>
          <thead><tr><th>Finalità</th><th>Base giuridica</th><th>Conservazione</th></tr></thead>
          <tbody>
            <tr><td>Erogazione del Sito e log tecnici di sicurezza (gestiti dal provider)</td><td>Legittimo interesse (art. 6.1.f GDPR)</td><td>Secondo le policy di GitHub Inc. (di norma ≤ 30 giorni)</td></tr>
            <tr><td>Risposta a richieste di contatto via email</td><td>Esecuzione di misure precontrattuali (art. 6.1.b) e/o consenso (art. 6.1.a)</td><td>24 mesi dall’ultima interazione</td></tr>
            <tr><td>Adempimenti fiscali, contabili o difesa in giudizio (solo in caso di rapporto contrattuale instaurato)</td><td>Obbligo legale (art. 6.1.c) e legittimo interesse (art. 6.1.f)</td><td>10 anni dalla chiusura del rapporto</td></tr>
            <tr><td>Cookie tecnici essenziali e localStorage di prima parte</td><td>Esenzione art. 122 D.lgs. 196/2003</td><td>Vedi <a href="/cookie">Cookie policy</a></td></tr>
          </tbody>
        </table>
        <p>
          La conservazione decennale si applica esclusivamente in presenza di un rapporto contrattuale
          o di obblighi documentali ex artt. 2214 e 2220 c.c.; in assenza di tale rapporto (es. semplice
          richiesta informativa via email senza seguito), si applica la conservazione breve indicata sopra.
        </p>

        <h2>4. Modalità del trattamento</h2>
        <p>
          I dati sono trattati con strumenti elettronici, con misure tecniche e organizzative adeguate ad assicurare
          riservatezza, integrità e disponibilità (art. 32 GDPR). Non è previsto alcun processo decisionale automatizzato,
          incluso profilazione, ai sensi dell’art. 22 GDPR.
        </p>

        <h2>5. Destinatari e trasferimenti</h2>
        <p>
          Il Sito è ospitato su <strong>GitHub Pages</strong> (GitHub Inc., gruppo Microsoft Corp.), che agisce come
          autonomo titolare/responsabile dei propri log tecnici. Eventuali trasferimenti extra‑UE avvengono in presenza
          di <em>Standard Contractual Clauses</em> (SCC) approvate dalla Commissione Europea o di decisioni di adeguatezza
          (es. EU‑US Data Privacy Framework). I font del Sito sono <strong>auto‑ospitati</strong>: nessun caricamento da
          Google Fonts o da altri CDN di terze parti; di conseguenza nessun indirizzo IP dell’utente è trasmesso a Google
          per il rendering tipografico.
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
          all’autorità di controllo dello Stato membro UE di residenza, lavoro o presunta violazione (art. 77 GDPR),
          nonché di proporre ricorso giurisdizionale effettivo nei confronti del Titolare o di un’autorità di controllo
          (artt. 78‑79 GDPR).
        </p>

        <h2>7. Minori</h2>
        <p>
          Il Sito non è rivolto a minori. Ai sensi dell’art. 8 GDPR e dell’art. 2‑quinquies del Codice Privacy,
          il consenso al trattamento dei dati personali nei servizi della società dell’informazione è valido
          se prestato da minore che abbia compiuto 14 anni; per i soggetti di età inferiore è richiesto il consenso
          dell’esercente la responsabilità genitoriale. Il Titolare invita i minori di 14 anni a non inviare dati
          personali tramite il Sito senza il consenso di chi esercita la responsabilità genitoriale.
        </p>

        <h2>8. Conferimento dei dati</h2>
        <p>
          Il conferimento dei dati tramite email è facoltativo, ma necessario per ricevere risposta:
          il mancato conferimento impedisce il riscontro alla richiesta.
        </p>

        <h2>9. Modifiche</h2>
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
          Legislative Decree 196/2003 (as amended by Decree 101/2018) to anyone interacting with the site reachable at
          {' '}<strong>giuliachiesi.github.io</strong> and, if later activated, <strong>giuliachiesi.it</strong> (the “Site”).</p>

        <h2>1. Data controller</h2>
        <p>The controller is <strong>Giulia Chiesi</strong>, a natural person resident in Modena (Italy),
          currently not registered for VAT (preparatory/portfolio activity outside the scope of art. 5 D.P.R. 633/1972).
          Contact: <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>; postal address available on request via email.
          The conditions of art. 37 GDPR for the appointment of a Data Protection Officer (DPO) are not met.</p>

        <h2>2. Categories of data</h2>
        <ul>
          <li><strong>Navigation data</strong>: IP, user-agent, pages visited, recorded in the hosting provider’s technical logs (GitHub Inc.) for security and diagnostics. Not used by the controller to identify users.</li>
          <li><strong>Data provided voluntarily</strong> by emailing the controller: name, email address and the content of the message.</li>
          <li><strong>Cookies and identifiers</strong>: see the <a href="/cookie">Cookie policy</a>.</li>
        </ul>

        <h2>3. Purposes and legal bases</h2>
        <table>
          <thead><tr><th>Purpose</th><th>Legal basis</th><th>Retention</th></tr></thead>
          <tbody>
            <tr><td>Site delivery and provider-side security logs</td><td>Legitimate interest (Art. 6(1)(f))</td><td>Per GitHub Inc. policies (typically ≤ 30 days)</td></tr>
            <tr><td>Reply to email contact requests</td><td>Pre-contractual measures (Art. 6(1)(b)) and/or consent (Art. 6(1)(a))</td><td>24 months from last interaction</td></tr>
            <tr><td>Tax / accounting / legal-defence obligations (only if a contractual relationship exists)</td><td>Legal obligation (Art. 6(1)(c)) and legitimate interest</td><td>10 years from end of relationship</td></tr>
            <tr><td>Strictly necessary cookies and first-party localStorage</td><td>Italian e-Privacy art. 122 exemption</td><td>See <a href="/cookie">Cookie policy</a></td></tr>
          </tbody>
        </table>
        <p>The 10-year retention applies only where a contractual relationship or accounting obligations under arts.
          2214 and 2220 of the Italian Civil Code exist; for simple email enquiries with no follow-up, the shorter
          retention above applies.</p>

        <h2>4. How data is processed</h2>
        <p>Data is processed with electronic tools and appropriate technical/organisational measures (Art. 32 GDPR).
          No automated decision-making, including profiling under Art. 22 GDPR.</p>

        <h2>5. Recipients and transfers</h2>
        <p>The Site is hosted on <strong>GitHub Pages</strong> (GitHub Inc., a Microsoft Corp. subsidiary), acting as an
          independent controller/processor of its own technical logs. Extra-EU transfers are based on Standard
          Contractual Clauses (SCC) approved by the European Commission or adequacy decisions (e.g. EU‑US DPF).
          Webfonts are <strong>self-hosted</strong>: there is no request to Google Fonts or any third-party CDN, and
          therefore no IP transfer to Google for typography rendering.</p>

        <h2>6. Your rights</h2>
        <p>You have the right to access, rectify, erase, restrict, object to, and port your data (Arts. 15‑22 GDPR), and
          to withdraw consent at any time without affecting prior lawfulness. Email <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.</p>
        <p>You may lodge a complaint with the Italian DPA (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>)
          or your local supervisory authority (Art. 77 GDPR), and seek effective judicial remedies against the controller
          or a supervisory authority (Arts. 78‑79 GDPR).</p>

        <h2>7. Minors</h2>
        <p>The Site is not directed at children. Under Art. 8 GDPR and art. 2-quinquies of the Italian Privacy Code,
          consent in information-society services is valid if given by a minor who has reached 14 years; for younger
          subjects, parental consent is required.</p>

        <h2>8. Provision of data</h2>
        <p>Providing data by email is optional but necessary to receive a reply.</p>

        <h2>9. Updates</h2>
        <p>This notice may be updated. The date above is the effective date.</p>
      </article>
    </div>
  );
}
