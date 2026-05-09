import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useI18n } from '../../i18n/LangContext.jsx';

export default function Nav() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const items = [
    { to: '/', end: true, label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/work', label: t.nav.work },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <nav className="nav" aria-label="Principale">
        <Link to="/" className="nav-brand" data-cursor="link" data-cursor-label="Home">
          <span className="dot" />
          GIULIA CHIESI
        </Link>
        <div className="nav-menu">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              data-cursor="link"
            >
              {it.label}
            </NavLink>
          ))}
        </div>
        <div className="nav-right">
          <div className="lang-switch" data-cursor="link" role="group" aria-label="Lingua">
            <button className={lang === 'it' ? 'active' : ''} onClick={() => setLang('it')} aria-pressed={lang === 'it'}>IT</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
          </div>
          <button
            className="mobile-menu-btn"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-drawer" className={`mobile-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        {items.map((it) => (
          <NavLink key={it.to} to={it.to} end={it.end} onClick={() => setOpen(false)}>
            {it.label}
          </NavLink>
        ))}
        <div className="legal-links">
          {t.footer.legalLinks.filter((l) => l.href.startsWith('/')).map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      </div>
    </>
  );
}
