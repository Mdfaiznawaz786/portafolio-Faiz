import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portafolio-Faiz/',
  plugins: [react()],
  build: { outDir: 'docs', emptyOutDir: true },
});
