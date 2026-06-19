import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CV from './pages/cv'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CV />
  </StrictMode>
)
