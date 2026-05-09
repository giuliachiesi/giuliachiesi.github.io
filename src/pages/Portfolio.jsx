import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/LangContext.jsx';
import { PROJECTS } from '../data/projects.js';
import { THUMBS } from '../data/thumbs.jsx';
import { asset } from '../lib/asset.js';

const norm = (s) => s.toLowerCase().replace(/[\s/]/g, '');

export default function Portfolio() {
  const { t, lang } = useI18n();
  const nav = useNavigate();
  const [filter, setFilter] = useState(t.portfolio.filters[0]);

  const filtered = PROJECTS.filter((p) => {
    const f = norm(filter);
    if (f === 'tutti' || f === 'all') return true;
    return norm(p.cat) === f || p.tags.some((tag) => norm(tag) === f);
  });

  const open = (id) => nav(`/work/${id}`);

  return (
    <div className="page page-enter portfolio">
      <div className="portfolio-head">
        <div>
          <span className="section-eyebrow" style={{ marginBottom: 24, display: 'inline-flex' }}>◦ {t.portfolio.eyebrow}</span>
          <h1>{t.portfolio.title}</h1>
        </div>
        <div className="portfolio-filters" role="tablist" aria-label={t.portfolio.eyebrow}>
          {t.portfolio.filters.map((f) => (
            <button
              key={f}
              className={f === filter ? 'active' : ''}
              onClick={() => setFilter(f)}
              data-cursor="link"
              aria-pressed={f === filter}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {filtered.map((p, i) => (
          <article
            className="project-card"
            key={p.id}
            onClick={() => open(p.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter') open(p.id); }}
            data-cursor="link"
            data-cursor-label={lang === 'it' ? 'Apri →' : 'Open →'}
          >
            <div className="cover">
              <div className="placeholder">
                {p.cover
                  ? <img src={asset(p.cover)} alt={p.title[lang]} loading="lazy" decoding="async" />
                  : THUMBS[p.thumb]}
              </div>
              <div className="label-top">
                <span className="circle" />
                <span>{p.index} / {String(filtered.length).padStart(2, '0')}</span>
                <span>{p.cat}</span>
                <span>{p.year}</span>
              </div>
            </div>
            <div>
              <h3>{p.title[lang]}</h3>
              <div className="tags">
                {p.tags.map((tag) => <span key={tag}>◦ {tag}</span>)}
              </div>
              <div className="body">
                <span style={{ fontSize: 14, color: 'var(--mute)' }}>{p.sub[lang]}</span>
                <span className="go" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 13 L13 3 M6 3 H13 V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
