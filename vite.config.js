import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';

const spaFallback = () => ({
  name: 'spa-fallback-404',
  closeBundle() {
    const dist = resolve(process.cwd(), 'dist');
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
  },
});

export default defineConfig({
  plugins: [react(), tailwindcss(), spaFallback()],
  base: '/',
});
