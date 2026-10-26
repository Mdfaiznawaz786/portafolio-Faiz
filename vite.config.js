import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portafolio-Faiz/',
  plugins: [
    react(),
    {
      name: 'portfolio-csp',
      apply: 'build',
      transformIndexHtml() {
        return [{
          tag: 'meta',
          attrs: {
            'http-equiv': 'Content-Security-Policy',
            content: "default-src 'none'; base-uri 'self'; connect-src 'self'; font-src 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; style-src 'self'; form-action 'none'; frame-src 'none'",
          },
          injectTo: 'head-prepend',
        }];
      },
    },
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
