import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'   // <== Importar o path
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ISSO É ESSENCIAL PARA O DEPLOY FUNCIONAR DIREITO
  plugins: [react(),  tailwindcss(),],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://agro-way-api.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
})
