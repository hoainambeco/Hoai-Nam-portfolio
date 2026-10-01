import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { LANGS, localize } from '../data/localize';
import { UI } from '../data/ui';

const LANG_KEY = 'portfolio-pro:lang';

// ?lang= wins (shareable links), then the visitor's last choice, then the browser.
function readLang() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    /* storage blocked — fall through to the browser language */
  }
  return navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en';
}

/** Language state for the portfolio: persisted, mirrored to <html lang> and ?lang=. */
export function useLangState() {
  const [lang, setLang] = useState(readLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = UI[lang].title;
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* ignore */
    }
    const url = new URL(window.location.href);
    if (lang === 'en') url.searchParams.delete('lang');
    else url.searchParams.set('lang', lang);
    window.history.replaceState(null, '', url);
  }, [lang]);

  const toggleLang = useCallback(() => setLang((l) => (l === 'vi' ? 'en' : 'vi')), []);

  return { lang, t: UI[lang], data: localize(lang), toggleLang };
}

export const LangContext = createContext(null);

/** `{ lang, t, data, toggleLang }` — interface strings and localized profile data. */
export function useI18n() {
  return useContext(LangContext);
}
