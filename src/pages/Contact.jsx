import { useI18n } from '../i18n/LangContext.jsx';

export default function Contact() {
  const { t } = useI18n();
  const email = t.contact.mail;

  return (
    <div className="page page-enter contact">
      <div>
        <div style={{ paddingTop: 24 }}>
          <span className="section-eyebrow">◦ {t.contact.eyebrow}</span>
        </div>
        <div className="contact-hero">
          <h1>{t.contact.h1_1}<br /><em>{t.contact.h1_em}</em></h1>
          <p className="contact-intro">{t.contact.intro}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-main">
            <a className="contact-mail" href={`mailto:${email}`} data-cursor="link">
              {email}
              <span aria-hidden="true"> →</span>
            </a>
          </div>

          <div className="contact-side">
            {t.contact.blocks.map((b, i) => (
              <div className="contact-block" key={i}>
                <h5>{b.h}</h5>
                {b.lines.map((l, k) => {
                  const lower = b.h.toLowerCase();
                  if (lower === 'email') {
                    return <a key={k} href={`mailto:${l}`} data-cursor="link">{l}</a>;
                  }
                  if (lower === 'social') {
                    const url = l === 'Behance' ? 'https://www.behance.net/'
                      : l === 'Instagram' ? 'https://www.instagram.com/'
                      : 'https://www.linkedin.com/';
                    return <a key={k} href={url} target="_blank" rel="noopener noreferrer" data-cursor="link">{l} ↗</a>;
                  }
                  return <p key={k}>{l}</p>;
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
