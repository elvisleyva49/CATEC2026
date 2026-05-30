import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CATEC2026', // <-- IMPORTANTE: Si tu repo en GitHub tiene otro nombre, cambialo aqui
})
