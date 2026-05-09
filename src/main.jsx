import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';
import { LangProvider } from './i18n/LangContext.jsx';
import './styles/index.css';

// HashRouter avoids 404s on GitHub Pages refresh/deep-links without server config.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <LangProvider>
        <App />
      </LangProvider>
    </HashRouter>
  </StrictMode>,
);
