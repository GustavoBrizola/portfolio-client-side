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
        'api': path.resolve(import.meta.dirname, './src/api'),
        'assets': path.resolve(import.meta.dirname, './src/assets'),
        'components': path.resolve(import.meta.dirname, './src/components'),
        'config': path.resolve(import.meta.dirname, './src/config'),
        'hooks': path.resolve(import.meta.dirname, './src/hooks'),
        'pages': path.resolve(import.meta.dirname, './src/pages'),
        'services': path.resolve(import.meta.dirname, './src/services'),
        'types': path.resolve(import.meta.dirname, './src/types'),
        'util': path.resolve(import.meta.dirname, './src/util'),
      }
    }
  }
})
