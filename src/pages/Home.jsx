import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/LangContext.jsx';
import { PROJECTS } from '../data/projects.js';
import { THUMBS } from '../data/thumbs.jsx';
import { asset } from '../lib/asset.js';
const portrait = asset('assets/giulia-portrait.jpg');

export default function Home() {
  const { t, lang } = useI18n();
  const nav = useNavigate();
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  };
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.7), behavior: 'smooth' });
  };

  const featured = PROJECTS.slice(0, 5);

  return (
    <div className="page page-enter">
      <section className="hero">
        <div className="hero-meta">
          <span>{t.hero.tagline}</span>
          <span>{t.hero.loc}</span>
          <span className="dot-live">{t.hero.status}</span>
        </div>

        <div className="hero-grid">
          <h1 className="hero-title">
            {t.hero.greet}<br />
            <em>Giulia</em>,<br />
            <span className="strike">graphic</span><br />
            designer.
          </h1>
          <div className="hero-portrait" data-cursor="big" data-cursor-label={t.hero.scrolldown}>
            <img src={portrait} alt={t.hero.portraitCaption} loading="eager" decoding="async" />
            <div className="hero-portrait-caption">
              <span aria-hidden="true">◦</span>
              <span>{t.hero.portraitCaption}</span>
            </div>
          </div>
        </div>

        <div className="hero-sub">
          <p>{t.hero.role}<br />{t.hero.role2}</p>
          <div>
            <div className="role">{t.hero.job}</div>
            <div style={{ marginTop: 6 }}>{t.hero.loc2}</div>
          </div>
        </div>
      </section>

      <section className="marquee" data-cursor="big" aria-hidden="true">
        <div className="marquee-track">
          {[...t.marquee, ...t.marquee, ...t.marquee].map((w, i) => (
            <span className="marquee-item" key={i}>
              <span>{w}</span>
              <span className="star">✱</span>
            </span>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-head">
          <span className="section-eyebrow">◦ {t.services.eyebrow}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <span className="section-count">04 — {lang === 'it' ? 'aree' : 'areas'}</span>
        </div>
        <div className="service-list">
          {t.services.list.map((s, i) => (
            <div className="service-row" key={i} data-cursor="link">
              <span className="num">0{i + 1}</span>
              <span className="name">{s.name}</span>
              <span className="desc">{s.desc}</span>
              <span className="arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="work">
        <div className="section-head">
          <span className="section-eyebrow">◦ {t.work.eyebrow}</span>
          <h2 className="section-title">{t.work.title}</h2>
          <Link to="/work" className="section-count" data-cursor="link">{t.work.all} →</Link>
        </div>
        <div
          className="work-scroller"
          ref={scrollerRef}
          onScroll={onScroll}
          data-cursor="big"
          data-cursor-label={t.portfolio.drag}
        >
          {featured.map((p) => (
            <article
              key={p.id}
              className="work-card"
              onClick={() => nav(`/work/${p.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') nav(`/work/${p.id}`); }}
              data-cursor="link"
              data-cursor-label={t.work.cta}
            >
              <div className="thumb">
                <div className="thumb-inner">{THUMBS[p.thumb]}</div>
                <span className="thumb-index">◦ {p.index}</span>
                <span className="thumb-cta">{t.work.cta} <span aria-hidden="true">→</span></span>
              </div>
              <div className="meta">
                <span className="cat">{p.cat}</span>
                <span className="year">{p.year}</span>
              </div>
              <h3 className="title">{p.title[lang]}</h3>
              <p className="sub">{p.sub[lang]}</p>
            </article>
          ))}
        </div>
        <div className="work-controls">
          <button className="circle-btn" onClick={() => scrollBy(-1)} disabled={progress < 0.02} data-cursor="link" aria-label="Precedente">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 3 L4 8 L10 13" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="progress"><div className="fill" style={{ width: `${progress * 100}%` }} /></div>
          <button className="circle-btn" onClick={() => scrollBy(1)} disabled={progress > 0.98} data-cursor="link" aria-label="Successivo">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 3 L12 8 L6 13" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>

      <section className="ticker">
        <p className="big">{t.ticker.big}</p>
        <p className="small">{t.ticker.small}</p>
      </section>
    </div>
  );
}
