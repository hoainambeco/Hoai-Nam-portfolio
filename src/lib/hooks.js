import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';

const THEME_KEY = 'portfolio:theme';

function readStoredTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch {
    /* storage blocked — fall through to the system preference */
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

/** Theme persisted per visitor, applied as `data-theme` on <html>. */
export function useTheme() {
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  );

  return { theme, setTheme, toggleTheme };
}

export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const nextFrame = (state, words) => {
  const word = words[state.index % words.length];
  if (!state.erasing) {
    return state.text === word
      ? { ...state, erasing: true }
      : { ...state, text: word.slice(0, state.text.length + 1) };
  }
  return state.text === ''
    ? { index: (state.index + 1) % words.length, text: '', erasing: false }
    : { ...state, text: word.slice(0, state.text.length - 1) };
};

/** Types each word out, holds, erases it, then moves to the next one. */
export function useTypewriter(words, { type = 70, erase = 34, hold = 1700 } = {}) {
  const [state, setState] = useState({ index: 0, text: '', erasing: false });

  useEffect(() => {
    const word = words[state.index % words.length];
    const settled = !state.erasing && state.text === word;
    const delay = settled ? hold : state.erasing ? erase : type;
    const timer = setTimeout(() => setState((s) => nextFrame(s, words)), delay);
    return () => clearTimeout(timer);
  }, [state, words, type, erase, hold]);

  return state.text;
}

/** `true` for a short moment after `fire()` — used for copy confirmations. */
export function useFlash(ms = 1800) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!on) return;
    const t = setTimeout(() => setOn(false), ms);
    return () => clearTimeout(t);
  }, [on, ms]);

  return [on, () => setOn(true)];
}

export async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    return false;
  }
}
