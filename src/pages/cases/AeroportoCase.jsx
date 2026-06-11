// Bespoke case-study layout for Aeroporto G. Marconi — replicates the
// portfolio PDF spread 1:1 (hero / mascotte / sito / manifesti / poster).
// Reuses the .gcase primitives from gradly-case.css plus .acase sections.
import { asset } from '../../lib/asset.js';

const MANIFESTI = [
  'manifesto-gate-partenza',
  'manifesto-terminal',
  'manifesto-bagno',
  'manifesto-stato-volo',
  'manifesto-passaggio-bus',
  'manifesto-bar-ristoranti',
  'manifesto-bagaglio-smarrito',
  'manifesto-parcheggio',
];

export default function AeroportoCase() {
  return (
    <div className="gcase acase">
      {/* 1 — HERO */}
      <section className="gcase-hero">
        <div className="gcase-hero-top">
          <h1 className="gcase-title">
            <span className="bk">Aeroporto G.&nbsp;Marconi</span>
            <span className="bl">Rebranding</span>
          </h1>
          <div className="gcase-hero-art">
            <img className="bird" src={asset('assets/aeroporto/mascotte-rondine-dorme.webp')} alt="Mascotte Will che dorme" loading="eager" decoding="async" />
          </div>
        </div>

        <div className="gcase-meta">
          <div className="mcol">
            <div className="pair"><span>Tipo di progetto</span><p>Progetto di Gruppo</p></div>
            <div className="pair"><span>Ambito</span><p>Branding e Comunicazione</p></div>
          </div>
          <div className="mcol">
            <div className="pair"><span>Anno</span><p>2025—2026</p></div>
            <div className="pair"><span>Strumenti</span><p>Figma, Photoshop</p></div>
          </div>
          <div className="mcol">
            <div className="pair">
              <span>Brief di progetto</span>
              <p>
                Il progetto, svolto in gruppo, riguarda il rebranding di un canale di{' '}
                <b>assistenza clienti</b> come servizio digitale con una <b>propria identità</b> e{' '}
                <b>strategia comunicativa</b>. In questo contesto mi sono occupata dell'<b>analisi</b>,
                della <b>campagna</b>, progettando <b>sito</b>, <b>manifesti</b> e <b>sticker</b>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — IDEAZIONE MASCOTTE */}
      <section className="gcase-masc">
        <div className="gcase-masc-head">
          <h2 className="gcase-title sm">
            <span className="bk">Ideazione</span>
            <span className="bl">Mascotte</span>
          </h2>
          <p className="gcase-masc-desc">
            Per il progetto dell'Aeroporto di Bologna ho ideato e disegnato Will,
            una mascotte ispirata alla rondine. Attraverso <b>sketch</b> e iterazioni,
            ho creato un personaggio che rappresenta movimento, viaggio e ritorno,{' '}
            <b>rafforzando l'identità del brand</b>.
          </p>
        </div>
        <div className="gcase-masc-labels">
          <span>Primi Sketch</span>
          <span>Mascotte definitiva</span>
        </div>
        <div className="gcase-masc-row">
          <div className="sketches">
            <img src={asset('assets/aeroporto/schizzi-mascotte-rondine.webp')} alt="Primi sketch della mascotte" loading="lazy" decoding="async" />
          </div>
          <div className="finals">
            <img src={asset('assets/aeroporto/mascotte-rondine-finali.webp')} alt="Mascotte definitiva" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* 3 — SITO (MacBook) */}
      <section className="acase-laptop">
        <img src={asset('assets/aeroporto/mockup-macbook-sito-aeroporto.webp')} alt="Sito Aeroporto di Bologna" loading="lazy" decoding="async" />
      </section>

      {/* 4 — MANIFESTI + STICKER */}
      <section className="acase-posters">
        <div className="acase-posters-grid">
          {MANIFESTI.map((m) => (
            <img key={m} src={asset(`assets/aeroporto/${m}.webp`)} alt={m.replace(/-/g, ' ')} loading="lazy" decoding="async" />
          ))}
        </div>
        <div className="acase-stickers">
          <img src={asset('assets/aeroporto/sticker-sedia-aiuto-giallo.webp')} alt="Sticker aiuto" loading="lazy" decoding="async" />
          <img src={asset('assets/aeroporto/sticker-sedia-aiuto-arancione.webp')} alt="Sticker aiuto" loading="lazy" decoding="async" />
          <img src={asset('assets/aeroporto/sticker-sedia-aiuto-blu.webp')} alt="Sticker aiuto" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* 5 — POSTER BAGAGLIO */}
      <section className="acase-poster">
        <img src={asset('assets/aeroporto/mockup-manifesto-bagaglio.webp')} alt="Manifesto bagaglio smarrito" loading="lazy" decoding="async" />
      </section>
    </div>
  );
}
