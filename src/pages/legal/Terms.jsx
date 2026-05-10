import { useI18n } from '../../i18n/LangContext.jsx';

const LAST_UPDATE = '2026-05-10';

export default function Terms() {
  const { lang, t } = useI18n();
  return lang === 'it' ? <It t={t} /> : <En t={t} />;
}

function It({ t }) {
  return (
    <div className="page page-enter">
      <article className="legal">
        <h1>{t.legal.terms}</h1>
        <p className="meta">{t.legal.lastUpdate}: {LAST_UPDATE}</p>

        <h2>1. Oggetto e dati identificativi</h2>
        <p>I presenti Termini disciplinano l’accesso e l’uso del sito raggiungibile agli indirizzi
          {' '}<strong>giuliachiesi.github.io</strong> e, se attivato in futuro, <strong>giuliachiesi.it</strong> (di seguito “Sito”),
          gestito da <strong>Giulia Chiesi</strong>, persona fisica residente a Modena (Italia).
          Ai sensi dell’art. 7 D.lgs. 70/2003 si comunica che il gestore del Sito non è attualmente titolare
          di partita IVA né iscritto ad albi professionali; per comunicazioni: <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.
          L’accesso al Sito implica l’accettazione integrale dei presenti Termini, accessibili in ogni momento dal footer.
          In caso di disaccordo, ti invitiamo a non utilizzare il Sito.</p>

        <h2>2. Natura dei contenuti</h2>
        <p>Il Sito ha finalità informative e di presentazione di un portfolio professionale. I contenuti sono offerti
          “così come sono” e possono essere modificati senza preavviso. Non costituiscono offerta contrattuale né garanzia
          di servizi specifici, salvo quanto eventualmente concordato per iscritto.</p>

        <h2>3. Proprietà intellettuale</h2>
        <p>Tutti i contenuti pubblicati (testi, immagini, illustrazioni, codice, layout) sono protetti dalla legge sul
          diritto d’autore (L. 633/1941) e dalle norme UE applicabili. Sono di proprietà di Giulia Chiesi o dei rispettivi
          aventi diritto. È vietata la riproduzione, anche parziale, senza autorizzazione scritta. I marchi citati di
          terzi appartengono ai rispettivi titolari.</p>

        <h2>4. Licenza d’uso del Sito</h2>
        <p>Ti è concessa una licenza personale, non esclusiva, non trasferibile e revocabile per consultare il Sito a fini
          non commerciali. Sono vietati: scraping massivo, reverse engineering, uso automatizzato che pregiudichi la stabilità
          del Sito, e qualsiasi attività illecita.</p>

        <h2>5. Link a siti terzi</h2>
        <p>Il Sito può contenere link a risorse di terzi (es. Behance, Instagram, LinkedIn). Giulia Chiesi non controlla né
          è responsabile dei contenuti, delle policy e della disponibilità di tali siti.</p>

        <h2>6. Limitazione di responsabilità</h2>
        <p>Nei limiti consentiti dalla legge, Giulia Chiesi non è responsabile per danni indiretti, consequenziali, perdita
          di dati o di profitto derivanti dall’uso o impossibilità d’uso del Sito. Restano ferme le responsabilità inderogabili
          di legge a tutela del consumatore (D.lgs. 206/2005).</p>

        <h2>7. Diritti dei consumatori e ADR</h2>
        <p>I presenti Termini non limitano i diritti che ti sono riconosciuti come consumatore dal Codice del Consumo italiano
          (D.lgs. 206/2005) e dalla normativa UE applicabile. Per la risoluzione extragiudiziale delle controversie è possibile
          rivolgersi agli organismi ADR iscritti negli elenchi tenuti dal Ministero delle Imprese e del Made in Italy
          (<a href="https://www.mimit.gov.it" target="_blank" rel="noopener noreferrer">mimit.gov.it</a>) e dall’Autorità per
          le Garanzie nelle Comunicazioni, ove competenti.</p>

        <h2>8. Privacy</h2>
        <p>Il trattamento dei dati personali è descritto nella <a href="/privacy">Privacy policy</a> e nella <a href="/cookie">Cookie policy</a>.</p>

        <h2>9. Modifiche</h2>
        <p>I presenti Termini possono essere aggiornati. La data in alto è la data di vigenza. L’uso continuato del Sito dopo
          la pubblicazione delle modifiche costituisce accettazione delle stesse.</p>

        <h2>10. Legge applicabile e foro competente</h2>
        <p>I presenti Termini sono regolati dalla legge italiana. Per i consumatori, il foro competente è quello del luogo di
          residenza o domicilio. Per gli altri rapporti, è competente in via esclusiva il foro di Modena.</p>
      </article>
    </div>
  );
}

function En({ t }) {
  return (
    <div className="page page-enter">
      <article className="legal">
        <h1>{t.legal.terms}</h1>
        <p className="meta">{t.legal.lastUpdate}: {LAST_UPDATE}</p>

        <h2>1. Scope and identification</h2>
        <p>These Terms govern access to and use of the site reachable at
          {' '}<strong>giuliachiesi.github.io</strong> and, if later activated, <strong>giuliachiesi.it</strong> (the “Site”),
          operated by <strong>Giulia Chiesi</strong>, a natural person resident in Modena (Italy).
          Pursuant to art. 7 D.lgs. 70/2003 the Site operator is not currently registered for VAT nor enrolled in any
          professional register; contact: <a href="mailto:ciao@giuliachiesi.it">ciao@giuliachiesi.it</a>.
          Accessing the Site implies acceptance of these Terms, always available from the footer.</p>

        <h2>2. Nature of content</h2>
        <p>The Site is informational and showcases a professional portfolio. Content is provided “as is” and can change
          without notice. It is not a contractual offer or warranty of services, unless otherwise agreed in writing.</p>

        <h2>3. Intellectual property</h2>
        <p>All published content (text, images, illustrations, code, layout) is protected by Italian Law 633/1941 and
          applicable EU rules. Reproduction, even partial, is forbidden without written authorization. Third-party trademarks
          belong to their respective owners.</p>

        <h2>4. Licence</h2>
        <p>You are granted a personal, non-exclusive, non-transferable, revocable licence to browse the Site for
          non-commercial purposes. Mass scraping, reverse engineering, automation impairing stability, and any illegal
          activity are forbidden.</p>

        <h2>5. Third-party links</h2>
        <p>The Site may contain links to third-party resources (e.g. Behance, Instagram, LinkedIn). Giulia Chiesi has no
          control over and is not responsible for their content, policies or availability.</p>

        <h2>6. Limitation of liability</h2>
        <p>To the maximum extent permitted by law, Giulia Chiesi is not liable for indirect or consequential damages, loss of
          data or profits arising from use of or inability to use the Site. Mandatory consumer protections remain unaffected.</p>

        <h2>7. Consumer rights and ADR</h2>
        <p>These Terms do not limit rights granted to you as a consumer under the Italian Consumer Code and applicable EU law.
          For out-of-court dispute resolution you may contact ADR bodies listed by the Italian Ministry of Enterprise and Made
          in Italy (<a href="https://www.mimit.gov.it" target="_blank" rel="noopener noreferrer">mimit.gov.it</a>) and, where
          competent, the Italian Communications Authority (AGCOM).</p>

        <h2>8. Privacy</h2>
        <p>Personal-data processing is described in the <a href="/privacy">Privacy policy</a> and <a href="/cookie">Cookie policy</a>.</p>

        <h2>9. Updates</h2>
        <p>These Terms can be updated. The date above is the effective date. Continued use after publication is acceptance.</p>

        <h2>10. Governing law and venue</h2>
        <p>Italian law applies. Consumers may sue in their place of residence. For other relations, the courts of Modena have exclusive jurisdiction.</p>
      </article>
    </div>
  );
}
