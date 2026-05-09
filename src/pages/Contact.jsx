import { useState } from 'react';
import { useI18n } from '../i18n/LangContext.jsx';

export default function Contact() {
  const { t, lang } = useI18n();
  const [sent, setSent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      setError(t.contact.form.consentRequired);
      return;
    }
    setError('');
    // GDPR-friendly: form is fully client-side. To enable real delivery, plug a
    // privacy-respecting endpoint here (e.g. Formspree EU, your own API). Until then
    // we open the user's mail client with a prefilled mailto.
    const fd = new FormData(e.currentTarget);
    const body = `${fd.get('name')}\n\n${fd.get('subject')}\n\n${fd.get('message')}`;
    const subject = encodeURIComponent(`[Portfolio] ${fd.get('subject') || 'Contatto'}`);
    window.location.href = `mailto:ciao@giuliachiesi.it?subject=${subject}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

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
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="cf-name">{t.contact.form.name}</label>
              <input id="cf-name" name="name" type="text" autoComplete="name" placeholder={lang === 'it' ? 'Il tuo nome' : 'Your name'} required />
            </div>
            <div className="field">
              <label htmlFor="cf-email">{t.contact.form.email}</label>
              <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="nome@dominio.com" required />
            </div>
            <div className="field">
              <label htmlFor="cf-subject">{t.contact.form.subject}</label>
              <input id="cf-subject" name="subject" type="text" placeholder={lang === 'it' ? 'Branding, sito, editoriale…' : 'Branding, site, editorial…'} />
            </div>
            <div className="field">
              <label htmlFor="cf-message">{t.contact.form.message}</label>
              <textarea id="cf-message" name="message" rows="5" placeholder={lang === 'it' ? 'Obiettivi, tempistiche, budget indicativo…' : 'Goals, timeline, rough budget…'} required />
            </div>

            <label className="consent-row">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                aria-describedby="consent-error"
              />
              <span dangerouslySetInnerHTML={{ __html: t.contact.form.consent }} />
            </label>
            {error && <p id="consent-error" role="alert" style={{ color: '#c84c3a', fontSize: 13, marginTop: 8 }}>{error}</p>}

            <button className="submit-btn" type="submit" data-cursor="link" disabled={sent}>
              {sent ? t.contact.form.sent : t.contact.form.send}
              <span aria-hidden="true">{sent ? '✓' : '→'}</span>
            </button>
          </form>

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
