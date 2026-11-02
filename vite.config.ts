import react from '@vitejs/plugin-react'
import path from 'path';
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],

    // Development Environment port
    server: {
      port: env.VITE_PORT ? Number(env.VITE_PORT) : 3000,
      strictPort: true,
      proxy: {},
    },

    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      }
    }
  }
})
