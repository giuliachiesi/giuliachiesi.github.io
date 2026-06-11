// Image paths are resolved through `asset()` (see src/lib/asset.js) so they
// work both in dev (`/`) and under the GitHub Pages base path.
//
// Each project carries its own `meta` (Tipo / Anno / Ambito / Strumenti) and
// `brief`, rendered per-project in the case study (see CaseStudy.jsx).
export const PROJECTS = [
  {
    id: 'gradly', index: '01', cat: 'UI/UX', year: '2026',
    title: { it: 'Applicazione Gradly', en: 'Gradly app' },
    sub: { it: 'App EdTech per la Maturità', en: 'EdTech app for final exams' },
    tags: ['UI/UX', 'Branding', 'Social'], thumb: 'gradly',
    cover: 'assets/gradly/mockup-app-gradly-mano.webp',
    // Gradly uses a bespoke layout (see GradlyCase.jsx); gallery kept for
    // completeness/fallback only.
    gallery: [
      'assets/gradly/app-store-gradly.webp',
      'assets/gradly/wireframe-app-gradly.webp',
      'assets/gradly/schizzi-mascotte-gufo.webp',
      'assets/gradly/mascotte-gufo-finali.webp',
      'assets/gradly/mockup-post-social-gradly.webp',
    ],
    meta: {
      it: [
        { k: 'Tipo', v: 'Progetto individuale' },
        { k: 'Anno', v: '2025—2026' },
        { k: 'Ambito', v: 'Product Design (UX/UI), Branding, Social Strategy' },
        { k: 'Strumenti', v: 'Figma, Photoshop, Illustrator' },
      ],
      en: [
        { k: 'Type', v: 'Individual project' },
        { k: 'Year', v: '2025—2026' },
        { k: 'Scope', v: 'Product Design (UX/UI), Branding, Social Strategy' },
        { k: 'Tools', v: 'Figma, Photoshop, Illustrator' },
      ],
    },
    brief: {
      it: "Un'app EdTech progettata per supportare gli studenti nella preparazione alla Maturità. Ho curato ricerca, UX/UI design, brand identity e coordinamento dello sviluppo del prodotto fino alla pubblicazione su App Store e Google Play.",
      en: 'An EdTech app built to support students preparing for their final exams. I led research, UX/UI design, brand identity and product coordination through to release on the App Store and Google Play.',
    },
  },
  {
    id: 'aeroporto', index: '02', cat: 'Branding', year: '2026',
    title: { it: 'Aeroporto G. Marconi', en: 'G. Marconi Airport' },
    sub: { it: 'Rebranding e campagna', en: 'Rebranding and campaign' },
    tags: ['UI/UX', 'Branding', 'Illustration'], thumb: 'robot',
    cover: 'assets/aeroporto/mockup-macbook-sito-aeroporto.webp',
    gallery: [
      'assets/aeroporto/mascotte-rondine-pose.webp',
      'assets/aeroporto/schizzi-mascotte-rondine.webp',
      'assets/aeroporto/mockup-manifesto-bagaglio.webp',
      'assets/aeroporto/manifesto-terminal.webp',
      'assets/aeroporto/manifesto-parcheggio.webp',
      'assets/aeroporto/manifesto-bagaglio-smarrito.webp',
      'assets/aeroporto/sticker-sedia-aiuto-giallo.webp',
      'assets/aeroporto/mascotte-rondine-dorme.webp',
    ],
    meta: {
      it: [
        { k: 'Tipo', v: 'Progetto di gruppo' },
        { k: 'Anno', v: '2025—2026' },
        { k: 'Ambito', v: 'Branding e Comunicazione' },
        { k: 'Strumenti', v: 'Figma, Photoshop' },
      ],
      en: [
        { k: 'Type', v: 'Group project' },
        { k: 'Year', v: '2025—2026' },
        { k: 'Scope', v: 'Branding and Communication' },
        { k: 'Tools', v: 'Figma, Photoshop' },
      ],
    },
    brief: {
      it: "Rebranding del canale di assistenza clienti dell'Aeroporto di Bologna come servizio digitale, con una propria identità e strategia comunicativa. Mi sono occupata dell'analisi e della campagna, progettando sito, manifesti, sticker e la mascotte Will, ispirata alla rondine — simbolo di movimento, viaggio e ritorno.",
      en: 'Rebranding of Bologna Airport customer-care channel as a digital service with its own identity and communication strategy. I handled analysis and campaign, designing the site, posters, stickers and the mascot Will — a swallow symbolising movement, travel and return.',
    },
  },
  {
    id: 'virginactive', index: '03', cat: 'Illustration', year: '2024',
    title: { it: 'Manifesto Virgin Active', en: 'Virgin Active poster' },
    sub: { it: 'Run for Fun — running marathon', en: 'Run for Fun — running marathon' },
    tags: ['Illustration', 'Branding'], thumb: 'runforfun',
    cover: 'assets/virgin-active/mockup-poster-run-for-fun.webp',
    gallery: [
      'assets/virgin-active/poster-run-for-fun.webp',
    ],
    meta: {
      it: [
        { k: 'Tipo', v: 'Progetto individuale' },
        { k: 'Anno', v: '2023—2024' },
        { k: 'Ambito', v: 'Branding' },
        { k: 'Strumenti', v: 'Photoshop, Illustrator' },
      ],
      en: [
        { k: 'Type', v: 'Individual project' },
        { k: 'Year', v: '2023—2024' },
        { k: 'Scope', v: 'Branding' },
        { k: 'Tools', v: 'Photoshop, Illustrator' },
      ],
    },
    brief: {
      it: "Manifesto per Run for Fun, la maratona Virgin Active pensata per promuovere il benessere e il piacere dell'attività fisica, traducendo i valori dell'evento in una comunicazione visiva coinvolgente e dinamica.",
      en: 'Poster for Run for Fun, the Virgin Active marathon promoting wellbeing and the joy of physical activity, translating the event values into a vivid, dynamic visual language.',
    },
  },
  {
    id: 'robot', index: '04', cat: 'Branding', year: '2024',
    title: { it: 'Robot Festival', en: 'Robot Festival' },
    sub: { it: 'Manifesto e identità evento', en: 'Event poster and identity' },
    tags: ['Branding', 'Poster'], thumb: 'robot',
    cover: 'assets/mockup-robot-festival-scaled.webp',
    gallery: [
      'assets/robot/poster-robot-festival.webp',
      'assets/mockup-borsa-robot-scaled.webp',
      'assets/robot2.webp',
    ],
    meta: {
      it: [
        { k: 'Tipo', v: 'Progetto di coppia' },
        { k: 'Anno', v: '2023—2024' },
        { k: 'Ambito', v: 'Branding' },
        { k: 'Strumenti', v: 'Photoshop, Illustrator' },
      ],
      en: [
        { k: 'Type', v: 'Pair project' },
        { k: 'Year', v: '2023—2024' },
        { k: 'Scope', v: 'Branding' },
        { k: 'Tools', v: 'Photoshop, Illustrator' },
      ],
    },
    brief: {
      it: "Progetto di branding per il Robot Festival di Bologna: poster, manifesto e shopper per costruire un'identità visiva coerente e riconoscibile per l'evento.",
      en: 'Branding project for the Robot Festival in Bologna: poster, flyer and tote bag building a coherent, recognisable visual identity for the event.',
    },
  },
  {
    id: 'korea', index: '05', cat: 'Editorial', year: '2024',
    title: { it: 'Libro ricette coreane', en: 'Korean Home Cooking' },
    sub: { it: 'Progetto editoriale', en: 'Editorial project' },
    tags: ['Editorial'], thumb: 'korea',
    cover: 'assets/cucina-coreana/mockup-libro-korean-home-cooking.webp',
    gallery: [
      'assets/cucina-coreana/korean-home-cooking-libro-interno.webp',
    ],
    meta: {
      it: [
        { k: 'Tipo', v: 'Progetto individuale' },
        { k: 'Anno', v: '2023—2024' },
        { k: 'Ambito', v: 'Editoriale' },
        { k: 'Strumenti', v: 'InDesign, Photoshop' },
      ],
      en: [
        { k: 'Type', v: 'Individual project' },
        { k: 'Year', v: '2023—2024' },
        { k: 'Scope', v: 'Editorial' },
        { k: 'Tools', v: 'InDesign, Photoshop' },
      ],
    },
    brief: {
      it: "Libro di ricette coreane: impaginazione e layout per un progetto editoriale ordinato, coerente e visivamente bilanciato.",
      en: 'A Korean recipe book: layout and pagination for a clean, coherent and visually balanced editorial project.',
    },
  },
];
