import { Link } from 'react-router-dom';
import { useI18n } from '../../i18n/LangContext.jsx';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <h3>{t.footer.big}</h3>
        <Link to="/contact" className="big-mail" data-cursor="link">
          ciao@giuliachiesi.it
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 15 L15 5 M8 5 H15 V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      <div className="footer-col">
        <h5>{t.footer.sitemap}</h5>
        <ul>
          <li><Link to="/" data-cursor="link">{t.nav.home}</Link></li>
          <li><Link to="/about" data-cursor="link">{t.nav.about}</Link></li>
          <li><Link to="/work" data-cursor="link">{t.nav.work}</Link></li>
          <li><Link to="/contact" data-cursor="link">{t.nav.contact}</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h5>{t.footer.social}</h5>
        <ul>
          <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" data-cursor="link">Behance ↗</a></li>
          <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" data-cursor="link">Instagram ↗</a></li>
          <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" data-cursor="link">LinkedIn ↗</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h5>{t.footer.legal}</h5>
        <ul>
          {t.footer.legalLinks.map((l) =>
            l.href.startsWith('#') ? (
              <li key={l.href}><a href={l.href} data-cursor="link">{l.label}</a></li>
            ) : (
              <li key={l.href}><Link to={l.href} data-cursor="link">{l.label}</Link></li>
            ),
          )}
        </ul>
      </div>

      <div className="footer-bottom">
        <span>© {year} Giulia Chiesi — {t.footer.copy.split('—')[1]?.trim() || 'All rights reserved'}</span>
        <span className="legal">
          <span>{t.footer.built}</span>
        </span>
      </div>
    </footer>
  );
}
