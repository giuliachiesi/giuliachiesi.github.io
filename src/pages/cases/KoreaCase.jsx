// Bespoke case-study layout for Libro ricette coreane — replicates the
// portfolio PDF spread 1:1 (hero + book interior). Reuses .gcase primitives.
import { asset } from '../../lib/asset.js';

export default function KoreaCase() {
  return (
    <div className="gcase kcase">
      {/* 1 — HERO */}
      <section className="gcase-hero">
        <div className="gcase-hero-top">
          <h1 className="gcase-title kcase-title">
            <span className="bk">Libro </span><span className="bl">ricette</span><br />
            <span className="bk">coreane</span>
          </h1>
          <div className="gcase-hero-art">
            <img className="book" src={asset('assets/cucina-coreana/mockup-libro-korean-home-cooking.webp')} alt="Libro Korean Home Cooking" loading="eager" decoding="async" />
          </div>
        </div>

        <div className="gcase-meta">
          <div className="mcol">
            <div className="pair"><span>Tipo di progetto</span><p>Progetto Individuale</p></div>
            <div className="pair"><span>Ambito</span><p>Editoriale</p></div>
          </div>
          <div className="mcol">
            <div className="pair"><span>Anno</span><p>2023—2024</p></div>
            <div className="pair"><span>Strumenti</span><p>InDesign, Photoshop</p></div>
          </div>
          <div className="mcol">
            <div className="pair">
              <span>Di cosa si tratta</span>
              <p>
                Ho realizzato un <b>libro</b> di <b>ricette coreane</b>, occupandomi
                dell'<b>impaginazione</b> e del <b>layout</b> per costruire un progetto
                editoriale ordinato, coerente e visivamente bilanciato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — SPREAD INTERNO */}
      <section className="kcase-spread">
        <img src={asset('assets/cucina-coreana/korean-home-cooking-libro-interno.webp')} alt="Pagine interne del libro" loading="lazy" decoding="async" />
      </section>
    </div>
  );
}
