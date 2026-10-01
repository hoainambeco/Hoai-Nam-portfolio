import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import cvPdf from './cv-pdf-plugin.js'

export default defineConfig({
  plugins: [react(), cvPdf()],
  base: '/Hoai-Nam-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        cv: fileURLToPath(new URL('./cv.html', import.meta.url)),
      },
    },
  },
})
