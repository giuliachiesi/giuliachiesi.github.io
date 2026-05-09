// Lightweight in-house GDPR consent store.
// We don't load any third-party tracking by default, so this is a "future-proof"
// gate: any optional integration (analytics, embedded fonts beyond Google Fonts CSS,
// social embeds) should check `consent.analytics` or `consent.marketing` before loading.
// Only essential cookies/local-storage entries are used regardless of consent.
import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'gc.consent.v1';
const CONSENT_VERSION = 1;

export const DEFAULT_CONSENT = {
  version: CONSENT_VERSION,
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
  timestamp: 0,
  decided: false,
};

function read() {
  if (typeof window === 'undefined') return DEFAULT_CONSENT;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONSENT;
    const parsed = JSON.parse(raw);
    if (parsed?.version !== CONSENT_VERSION) return DEFAULT_CONSENT;
    return { ...DEFAULT_CONSENT, ...parsed, necessary: true };
  } catch {
    return DEFAULT_CONSENT;
  }
}

function write(c) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent('gc:consent-change', { detail: c }));
}

export function useConsent() {
  const [consent, setConsent] = useState(read);

  useEffect(() => {
    const onChange = (e) => setConsent(e.detail);
    window.addEventListener('gc:consent-change', onChange);
    return () => window.removeEventListener('gc:consent-change', onChange);
  }, []);

  const update = useCallback((patch) => {
    const next = { ...read(), ...patch, necessary: true, version: CONSENT_VERSION, decided: true, timestamp: Date.now() };
    write(next);
    setConsent(next);
  }, []);

  const acceptAll = useCallback(() => {
    update({ preferences: true, analytics: true, marketing: true });
  }, [update]);

  const rejectAll = useCallback(() => {
    update({ preferences: false, analytics: false, marketing: false });
  }, [update]);

  const revoke = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConsent(DEFAULT_CONSENT);
    window.dispatchEvent(new CustomEvent('gc:consent-change', { detail: DEFAULT_CONSENT }));
  }, []);

  return { consent, update, acceptAll, rejectAll, revoke };
}
