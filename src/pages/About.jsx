import { useI18n } from '../i18n/LangContext.jsx';
import { asset } from '../lib/asset.js';
const portrait = asset('assets/giulia-portrait.webp');

export default function About() {
  const { t, lang } = useI18n();
  const [first, second] = t.about.title.split(',');

  return (
    <div className="page page-enter">
      <section className="about">
        <div className="about-hero">
          <div className="about-img" data-cursor="big">
            <img src={portrait} alt={t.about.title} loading="lazy" decoding="async" />
            <span className="frame-label">◦ {t.hero.portraitCaption}</span>
          </div>
          <div className="about-copy">
            <div style={{ marginBottom: 32 }}>
              <span className="section-eyebrow">◦ {t.about.eyebrow}</span>
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(36px, 6vw, 80px)', marginBottom: 40 }}>
              {first},<br />
              <em>{second?.trim()}</em>
            </h1>
            <p dangerouslySetInnerHTML={{ __html: t.about.bio1 }} />
            <p>{t.about.bio2}</p>
            <p>{t.about.bio3}</p>
          </div>
        </div>

        <div className="values">
          {t.about.values.map((v, i) => (
            <div className="value" key={i}>
              <div className="num">{v.n} / 04</div>
              <h4>{v.h}</h4>
              <p>{v.p}</p>
            </div>
          ))}
        </div>

        <div className="timeline">
          <div className="section-head" style={{ marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
            <span className="section-eyebrow">◦ {lang === 'it' ? 'Percorso' : 'Path'}</span>
            <h2 className="section-title">{t.about.timelineTitle}</h2>
            <span className="section-count">04</span>
          </div>
          {t.about.timeline.map((r, i) => (
            <div className="timeline-row" key={i} data-cursor="link">
              <span className="year">{r.year}</span>
              <h4>{r.h}</h4>
              <p>{r.p}</p>
              <span className="tag">{r.tag}</span>
            </div>
          ))}
        </div>

        <div className="skills">
          <div className="section-head" style={{ marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}>
            <span className="section-eyebrow">◦ Software</span>
            <h2 className="section-title">{t.about.skillsTitle}</h2>
            <span className="section-count">06</span>
          </div>
          <div className="skill-grid">
            {t.about.skills.map((s, i) => (
              <div className="skill" key={i}>
                <span className="label">{s.label}</span>
                <span className="value-num">{s.val}%</span>
                <div className="bar">
                  <div className="fill" style={{ '--pct': s.val / 100 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
