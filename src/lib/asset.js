// Resolve a public/ asset URL respecting Vite's `base` (so it works under
// `/portfolio_giulia/` on GitHub Pages and `/` in dev).
const BASE = import.meta.env.BASE_URL || '/';
export const asset = (path) => `${BASE}${path.replace(/^\/+/, '')}`;
