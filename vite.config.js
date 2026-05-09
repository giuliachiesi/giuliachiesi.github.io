import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Default '/' for user Pages site (giuliachiesi.github.io). Override with
// BASE_PATH=/repo-name/ at build time only for project-Pages deploys.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    target: 'es2022',
  },
  server: { port: 5173, open: true },
});
