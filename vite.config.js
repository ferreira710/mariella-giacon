import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        chunkSizeWarningLimit: 550,
        sourcemap: true,
        minify: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    'aws-sdk': ['@aws-sdk/client-s3'],
                    'next-ui': ['@nextui-org/react'],
                },
            },
        },
    },
    optimizeDeps: {
        include: ['@aws-sdk/client-s3', '@nextui-org/react'],
    },
    plugins: [react()],
})
