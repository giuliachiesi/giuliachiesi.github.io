// Bespoke case-study layout for Manifesto Virgin Active — replicates the
// portfolio PDF spread 1:1 (hero + street mockup). Reuses .gcase primitives.
import { asset } from '../../lib/asset.js';

export default function VirginActiveCase() {
  return (
    <div className="gcase vacase">
      {/* 1 — HERO */}
      <section className="gcase-hero">
        <div className="gcase-hero-top">
          <h1 className="gcase-title">
            <span className="bk">Manifesto</span>
            <span className="bl">Virgin Active</span>
          </h1>
          <div className="gcase-hero-art">
            <img className="poster" src={asset('assets/virgin-active/poster-run-for-fun.webp')} alt="Manifesto Run for Fun" loading="eager" decoding="async" />
          </div>
        </div>

        <div className="gcase-meta">
          <div className="mcol">
            <div className="pair"><span>Tipo di progetto</span><p>Progetto Individuale</p></div>
            <div className="pair"><span>Ambito</span><p>Branding</p></div>
          </div>
          <div className="mcol">
            <div className="pair"><span>Anno</span><p>2023—2024</p></div>
            <div className="pair"><span>Strumenti</span><p>Photoshop, Illustrator</p></div>
          </div>
          <div className="mcol">
            <div className="pair">
              <span>Di cosa si tratta</span>
              <p>
                Per Virgin Active ho sviluppato il <b>manifesto</b> di <b>Run for Fun</b>,
                una maratona pensata per promuovere il benessere e il piacere di fare
                attività fisica, traducendo i valori dell'evento in una{' '}
                <b>comunicazione visiva coinvolgente</b> e <b>dinamica</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — MOCKUP STRADA */}
      <section className="vacase-street">
        <img src={asset('assets/virgin-active/mockup-poster-run-for-fun.webp')} alt="Manifesto Run for Fun affisso in strada" loading="lazy" decoding="async" />
      </section>
    </div>
  );
}
