// Image paths are resolved through `asset()` (see src/lib/asset.js) so they
// work both in dev (`/`) and under the GitHub Pages base path.
export const PROJECTS = [
  {
    id: 'gradly', index: '01', cat: 'UI / UX', year: '2026',
    title: { it: 'Applicazione Gradly', en: 'Gradly app' },
    sub: { it: 'Gestione obiettivi di studio', en: 'Study goals tracking' },
    tags: ['UI/UX', 'Mobile'], thumb: 'gradly',
    cover: 'assets/projects/gradly-cover.webp',
    gallery: ['assets/projects/gradly-cover.webp', 'assets/projects/gradly-2.webp'],
  },
  { id: 'korea', index: '02', cat: 'Editorial', year: '2025', title: { it: 'Korean Home Cooking', en: 'Korean Home Cooking' }, sub: { it: 'Libro di ricette coreane', en: 'Korean cookbook' }, tags: ['Editorial', 'Illustration'], thumb: 'korea' },
  { id: 'runforfun', index: '03', cat: 'Illustration', year: '2025', title: { it: 'Run for Fun', en: 'Run for Fun' }, sub: { it: 'Poster illustrato', en: 'Illustrated poster' }, tags: ['Illustration', 'Poster'], thumb: 'runforfun' },
  { id: 'dorian', index: '04', cat: 'Editorial', year: '2025', title: { it: 'Dorian Gray', en: 'Dorian Gray' }, sub: { it: 'Rivisitazione contemporanea', en: 'Contemporary revisit' }, tags: ['Poster', 'Typography'], thumb: 'dorian' },
  { id: 'lennon', index: '05', cat: 'Packaging', year: '2025', title: { it: 'Walls and Bridges', en: 'Walls and Bridges' }, sub: { it: "Copertina dell'album", en: 'Album cover' }, tags: ['Packaging', 'Music'], thumb: 'lennon' },
  { id: 'wine', index: '06', cat: 'Packaging', year: '2025', title: { it: "Lacrima di Morro d'Alba", en: "Lacrima di Morro d'Alba" }, sub: { it: 'Etichetta illustrata', en: 'Illustrated label' }, tags: ['Packaging', 'Illustration'], thumb: 'wine' },
  {
    id: 'robot', index: '07', cat: 'Branding', year: '2025',
    title: { it: 'Robot Festival', en: 'Robot Festival' },
    sub: { it: 'Poster per il festival di Bologna', en: 'Festival poster, Bologna' },
    tags: ['Branding', 'Poster'], thumb: 'robot',
    cover: 'assets/projects/robot-cover.webp',
    gallery: ['assets/projects/robot-cover.webp', 'assets/projects/robot-2.webp'],
  },
  {
    id: 'playnmatch', index: '08', cat: 'Branding', year: '2025',
    title: { it: "Play n' Match", en: "Play n' Match" },
    sub: { it: 'Identità visiva e comunicazione', en: 'Visual identity and communication' },
    tags: ['Branding', 'Illustration'], thumb: 'gradly',
    cover: 'assets/projects/playnmatch-cover.webp',
    gallery: ['assets/projects/playnmatch-cover.webp', 'assets/projects/playnmatch-post.webp'],
  },
];
