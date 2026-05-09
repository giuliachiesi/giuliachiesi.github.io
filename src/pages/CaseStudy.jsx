import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useI18n } from '../i18n/LangContext.jsx';
import { PROJECTS } from '../data/projects.js';
import { THUMBS } from '../data/thumbs.jsx';
import { asset } from '../lib/asset.js';

export default function CaseStudy() {
  const { id } = useParams();
  const { t, lang } = useI18n();
  const nav = useNavigate();

  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  useEffect(() => { window.scrollTo({ top: 0 }); }, [id]);

  return (
    <div className="page page-enter case">
      <div className="case-hero">
        <div className="case-breadcrumb">
          <Link to="/work" data-cursor="link">{t.caseStudy.backToWork}</Link>
          <span aria-hidden="true">/</span>
          <span>{project.title[lang]}</span>
        </div>
        <h1>{project.title[lang]}</h1>
        <div className="case-meta">
          {t.caseStudy.meta.map((m, i) => {
            const override = i === 1 ? project.year : i === 2 ? project.cat : null;
            return (
              <div key={i}>
                <span>{m.k}</span>
                <strong>{override || m.v}</strong>
              </div>
            );
          })}
        </div>
      </div>

      <div className="case-cover">
        <div style={{ position: 'absolute', inset: 0 }}>
          {project.cover
            ? <img src={asset(project.cover)} alt={project.title[lang]} loading="eager" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : THUMBS[project.thumb]}
        </div>
        <span className="label" style={{ position: 'relative', zIndex: 2, background: 'rgba(0,0,0,.4)', padding: '8px 14px', borderRadius: 2 }}>
          ◦ Cover
        </span>
      </div>

      <div className="process">
        <h2>{t.caseStudy.processTitle}</h2>
        <div className="process-steps">
          {t.caseStudy.steps.map((s, i) => (
            <div className="step" key={i}>
              <span className="n">{s.n}</span>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <div className="artifacts">
                  {[0, 1, 2].map((k) => (
                    <div className="artifact" key={k} data-cursor="big">
                      ◦ {t.caseStudy.artifact} / 0{i + 1}.{k + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery">
        {(project.gallery && project.gallery.length > 0) ? (
          project.gallery.map((src, i) => (
            <div className={`g g-${i + 1}`} key={src} data-cursor="big">
              <img
                src={asset(src)}
                alt={`${project.title[lang]} — ${i + 1}`}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))
        ) : (
          <>
            <div className="g g-1" data-cursor="big">
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>{THUMBS[project.thumb]}</div>
            </div>
            <div className="g g-2" data-cursor="big" />
            <div className="g g-3" data-cursor="big" />
            <div className="g g-4" data-cursor="big" />
            <div className="g g-5" data-cursor="big" />
          </>
        )}
      </div>

      <div
        className="next-project"
        onClick={() => nav(`/work/${next.id}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') nav(`/work/${next.id}`); }}
        data-cursor="link"
        data-cursor-label={lang === 'it' ? 'Prossimo' : 'Next'}
      >
        <span className="label">◦ {t.caseStudy.nextLabel}</span>
        <h3>{next.title[lang]}</h3>
        <span className="arr" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </div>
  );
}
