import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';

// Not `portfolio:theme` — v1 shares the origin and writes its dark default there.
const THEME_KEY = 'portfolio-pro:theme';

// Light first: only a visitor's own choice turns the dark theme on, never the
// system preference.
function readStoredTheme() {
  try {
    if (localStorage.getItem(THEME_KEY) === 'dark') return 'dark';
  } catch {
    /* storage blocked — light */
  }
  return 'light';
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

const subscribeScroll = (onChange) => {
  window.addEventListener('scroll', onChange, { passive: true });
  return () => window.removeEventListener('scroll', onChange);
};

/** `true` once the page has scrolled more than `px` pixels. */
export function useScrolledPast(px) {
  return useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > px,
    () => false,
  );
}

/**
 * Id of the element (from `ids`) crossing the middle of the viewport.
 * `ids` must be a stable array — define it at module level.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
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

// Starts the animation whose id is `startId` the first time the figure is in
// view. Observe the figure, not the svg: on phones the svg is wider than its
// scroll box, so its visible ratio never reaches the threshold.
export function useFlowOnView(startId) {
  const figureRef = useRef(null);

  useEffect(() => {
    const figure = figureRef.current;
    const start = figure?.querySelector(`#${startId}`);
    if (!start?.beginElement) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        start.beginElement();
      },
      { threshold: 0.6 },
    );
    observer.observe(figure);
    return () => observer.disconnect();
  }, [startId]);

  return figureRef;
}
