import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    headers: {
      'Cache-Control': 'public, max-age=604800, immutable'
    }
  },
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
  build: {
    chunkSizeWarningLimit: 550,
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'next-ui': ['@nextui-org/react']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['@nextui-org/react']
  },
  plugins: [react()]
})
