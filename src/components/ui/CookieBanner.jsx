import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/LangContext.jsx';
import { useConsent } from '../../hooks/useConsent.js';

export default function CookieBanner() {
  const { t } = useI18n();
  const { consent, acceptAll, rejectAll } = useConsent();
  const [forceShow, setForceShow] = useState(false);

  // Allow opening from anywhere via #cookie-preferences hash or "Preferenze cookie" link.
  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === '#cookie-preferences') {
        setForceShow(true);
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const visible = forceShow || !consent.decided;
  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-labelledby="cb-title">
      <div>
        <h2 id="cb-title">{t.cookie.bannerTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: t.cookie.bannerBody }} />
      </div>
      <div className="actions">
        <Link to="/cookie" className="link" onClick={() => setForceShow(false)}>{t.cookie.preferences}</Link>
        <button type="button" onClick={() => { rejectAll(); setForceShow(false); }}>{t.cookie.rejectAll}</button>
        <button type="button" className="primary" onClick={() => { acceptAll(); setForceShow(false); }}>{t.cookie.acceptAll}</button>
      </div>
    </div>
  );
}

export function CookieFab() {
  // Small floating reopener — required by EDPB guidance: consent must be as easy to
  // withdraw as to give. Hidden until user has decided once.
  const { consent } = useConsent();
  if (!consent.decided) return null;
  return (
    <button
      type="button"
      className="cookie-fab"
      aria-label="Cookie preferences"
      title="Cookie preferences"
      onClick={() => { window.location.hash = '#cookie-preferences'; }}
    >
      🍪
    </button>
  );
}
