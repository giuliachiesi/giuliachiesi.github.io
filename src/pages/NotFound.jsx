import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/LangContext.jsx';

export default function NotFound() {
  const { t, lang } = useI18n();
  return (
    <div className="page page-enter">
      <article className="legal">
        <h1>404</h1>
        <p className="meta">{lang === 'it' ? 'Pagina non trovata' : 'Page not found'}</p>
        <p>
          {lang === 'it'
            ? 'La pagina richiesta non esiste o è stata spostata. Torna alla '
            : "The page you requested doesn't exist or has been moved. Go back to "}
          <Link to="/">{t.nav.home}</Link>.
        </p>
      </article>
    </div>
  );
}
