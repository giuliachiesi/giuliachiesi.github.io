import { createContext, useContext, useEffect, useState } from 'react';
import { I18N } from './index.js';

const LangContext = createContext(null);
const STORAGE_KEY = 'gc.lang';

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'it';
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'it' || stored === 'en') return stored;
    const nav = navigator.language?.slice(0, 2);
    return nav === 'en' ? 'en' : 'it';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = (l) => setLangState(l === 'en' ? 'en' : 'it');
  const t = I18N[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useI18n must be used within LangProvider');
  return ctx;
}
