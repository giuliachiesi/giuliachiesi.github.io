// Bespoke case-study layout for Gradly — replicates the portfolio PDF spread
// 1:1 (hero / wireframe / mascotte / social), section stacked. The global nav
// (Chi sono · Progetti · Contatti) lives in the layout and is intentionally
// not repeated here.
import { asset } from '../../lib/asset.js';

export default function GradlyCase() {
  return (
    <div className="gcase">
      {/* 1 — HERO */}
      <section className="gcase-hero">
        <div className="gcase-hero-top">
          <h1 className="gcase-title">
            <span className="bk">Applicazione</span>
            <span className="bl">Gradly</span>
          </h1>
          <div className="gcase-hero-art">
            <img className="card" src={asset('assets/gradly/app-store-gradly.webp')} alt="Gradly su App Store" loading="eager" decoding="async" />
          </div>
        </div>

        <div className="gcase-meta">
          <div className="mcol">
            <div className="pair"><span>Tipo di progetto</span><p>Progetto Individuale</p></div>
            <div className="pair"><span>Ambito</span><p>Product Design (UX/UI), Branding e Comunicazione, Social Strategy</p></div>
          </div>
          <div className="mcol">
            <div className="pair"><span>Anno</span><p>2025—2026</p></div>
            <div className="pair"><span>Strumenti</span><p>Figma, Photoshop, Illustrator</p></div>
          </div>
          <div className="mcol">
            <div className="pair">
              <span>Di cosa si tratta</span>
              <p>
                Un'<b>app EdTech</b> progettata per supportare gli studenti nella
                preparazione alla Maturità. Ho curato <b>ricerca</b>, <b>UX/UI design</b>,{' '}
                <b>brand identity</b> e <b>coordinamento</b> dello sviluppo del <b>prodotto</b>{' '}
                fino alla pubblicazione su <b>App Store</b> e <b>Google Play</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — WIREFRAME & PROTOTIPE */}
      <section className="gcase-wire">
        <div className="gcase-wire-left">
          <h2 className="gcase-title sm">
            <span className="bk">Wire<br />frame &</span>
            <span className="bl">Prototipe</span>
          </h2>
          <span className="gcase-cap">Primi Schizzi</span>
          <div className="gcase-wirebox">
            <img src={asset('assets/gradly/wireframe-app-gradly.webp')} alt="Wireframe Gradly" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="gcase-wire-right">
          <img src={asset('assets/gradly/mockup-app-gradly-mano.webp')} alt="Prototipo Gradly in mano" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* 3 — IDEAZIONE MASCOTTE */}
      <section className="gcase-masc">
        <div className="gcase-masc-head">
          <h2 className="gcase-title sm">
            <span className="bk">Ideazione</span>
            <span className="bl">Mascotte</span>
          </h2>
          <p className="gcase-masc-desc">
            Partendo dal barbagianni del logo, ho <b>progettato la mascotte</b> di
            Gradly attraverso <b>sketch</b> e iterazioni, creando un personaggio
            pensato per <b>rafforzare l'identità</b> del brand e coinvolgere il
            pubblico più giovane all'interno dell'<b>app</b> e sui <b>social</b>.
          </p>
        </div>
        <div className="gcase-masc-labels">
          <span>Primi Sketch</span>
          <span>Mascotte definitiva</span>
        </div>
        <div className="gcase-masc-row">
          <div className="sketches">
            <img src={asset('assets/gradly/schizzi-mascotte-gufo.webp')} alt="Primi sketch della mascotte" loading="lazy" decoding="async" />
          </div>
          <div className="finals">
            <img src={asset('assets/gradly/mascotte-gufo-pose.webp')} alt="Mascotte definitiva" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 4 — SOCIAL */}
      <section className="gcase-social">
        <img src={asset('assets/gradly/mockup-post-social-gradly.webp')} alt="Post social Gradly" loading="lazy" decoding="async" />
      </section>
    </div>
  );
}
