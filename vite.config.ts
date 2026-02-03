import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno basadas en el modo actual (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss()],
    // Configurar la base URL de la aplicación usando la variable de entorno
    base: env.VITE_APP_BASE_URL || '/',
  }
})
