import { defineConfig } from 'vite';
import path, { resolve } from 'node:path';

export default defineConfig({
  appType: 'spa',
  base: process.env.DEPLOY_BASE_URL,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});


