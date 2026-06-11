// Bespoke case-study layout for Manifesto Robot Festival — replicates the
// portfolio PDF spread 1:1 (hero + poster/shopper split). Reuses .gcase.
import { asset } from '../../lib/asset.js';

export default function RobotCase() {
  return (
    <div className="gcase rcase">
      {/* 1 — HERO */}
      <section className="gcase-hero">
        <div className="gcase-hero-top">
          <h1 className="gcase-title">
            <span className="bk">Manifesto</span>
            <span className="bl">Robot Festival</span>
          </h1>
          <div className="gcase-hero-art">
            <img className="poster" src={asset('assets/robot2.webp')} alt="Manifesto Robot Festival" loading="eager" decoding="async" />
          </div>
        </div>

        <div className="gcase-meta">
          <div className="mcol">
            <div className="pair"><span>Tipo di progetto</span><p>Progetto di coppia</p></div>
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
                Ho realizzato un progetto di <b>branding</b> per il <b>Robot Festival</b>,
                sviluppando <b>poster</b>, <b>manifesto</b> e <b>shopper</b>, con l'obiettivo di
                creare un'identità visiva coerente e riconoscibile per l'evento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — POSTER + SHOPPER */}
      <section className="rcase-split">
        <img src={asset('assets/mockup-robot-festival-scaled.webp')} alt="Poster Robot Festival arrotolati" loading="lazy" decoding="async" />
        <img src={asset('assets/projects/robot-2.webp')} alt="Shopper Robot Festival" loading="lazy" decoding="async" />
      </section>
    </div>
  );
}
