import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set BASE_PATH at deploy time. For user/organization Pages site (giuliachiesi.github.io)
// leave it as '/'. For project Pages (USER.github.io/portfolio_giulia/) set '/portfolio_giulia/'.
const base = process.env.BASE_PATH || '/portfolio_giulia/';

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
