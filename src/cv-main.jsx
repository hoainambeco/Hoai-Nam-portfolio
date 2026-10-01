import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CV from './pages/cv'

// cv.html and cv-vi.html share this entry; the page's <html lang> picks the language.
const lang = document.documentElement.lang === 'vi' ? 'vi' : 'en'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CV lang={lang} />
  </StrictMode>
)
