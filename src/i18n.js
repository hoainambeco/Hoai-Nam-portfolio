import { createContext, useContext } from 'react'

export const LANGS = ['en', 'vi']
const STORAGE_KEY = 'lang'

// Content values are either plain (same in every language) or { en, vi }
export function translate(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && 'en' in value) {
    return value[lang] ?? value.en
  }
  return value
}

export function detectInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(saved)) return saved
  } catch {
    // storage blocked (private mode, sandbox) — fall back to the browser language
  }
  return navigator.language?.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

export function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // storage blocked — the choice just won't persist
  }
}

export const LangContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (value) => translate(value, 'en'),
})

export const useLang = () => useContext(LangContext)
