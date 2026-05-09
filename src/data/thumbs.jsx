// Generative SVG thumbnails — distinctive per project, no asset deps.
const Thumb = ({ children }) => (
  <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="thumb-p" preserveAspectRatio="xMidYMid slice">
    {children}
  </svg>
);

export const THUMBS = {
  gradly: (
    <Thumb>
      <defs>
        <linearGradient id="g-gradly" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffe7b5" />
          <stop offset="1" stopColor="#ffb185" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#g-gradly)" />
      <rect x="100" y="40" width="200" height="220" rx="28" fill="#1a1a1a" />
      <rect x="112" y="52" width="176" height="196" rx="22" fill="#faf7ef" />
      <circle cx="200" cy="64" r="4" fill="#1a1a1a" opacity=".3" />
      <rect x="128" y="84" width="60" height="8" rx="4" fill="#1a1a1a" />
      <rect x="128" y="100" width="140" height="4" rx="2" fill="#1a1a1a" opacity=".2" />
      <rect x="128" y="110" width="100" height="4" rx="2" fill="#1a1a1a" opacity=".2" />
      <rect x="128" y="130" width="144" height="60" rx="10" fill="#ff8a65" />
      <circle cx="156" cy="160" r="16" fill="#faf7ef" opacity=".9" />
      <rect x="128" y="200" width="80" height="8" rx="4" fill="#1a1a1a" />
      <rect x="128" y="214" width="120" height="4" rx="2" fill="#1a1a1a" opacity=".2" />
      <rect x="128" y="224" width="60" height="4" rx="2" fill="#1a1a1a" opacity=".2" />
    </Thumb>
  ),
  korea: (
    <Thumb>
      <rect width="400" height="300" fill="#e8dac3" />
      <rect x="60" y="40" width="130" height="220" fill="#c84c3a" />
      <rect x="210" y="40" width="130" height="220" fill="#1a1a1a" />
      <text x="125" y="260" textAnchor="middle" fontFamily="serif" fontSize="18" fill="#faf7ef">Korean</text>
      <text x="275" y="90" textAnchor="middle" fontFamily="serif" fontSize="18" fill="#faf7ef">Home</text>
      <text x="275" y="180" textAnchor="middle" fontFamily="serif" fontSize="44" fill="#c84c3a" fontStyle="italic">요리</text>
      <text x="275" y="240" textAnchor="middle" fontFamily="serif" fontSize="18" fill="#faf7ef">Cooking</text>
      <circle cx="125" cy="140" r="50" fill="none" stroke="#faf7ef" strokeWidth="2" />
      <circle cx="125" cy="140" r="30" fill="#faf7ef" opacity=".3" />
    </Thumb>
  ),
  runforfun: (
    <Thumb>
      <rect width="400" height="300" fill="#f4b942" />
      <g transform="translate(60,80)">
        <path d="M 40 80 Q 60 20, 120 40 T 220 50" stroke="#1a1a1a" strokeWidth="4" fill="none" />
        <circle cx="50" cy="80" r="14" fill="#1a1a1a" />
        <rect x="46" y="92" width="3" height="28" fill="#1a1a1a" />
        <rect x="54" y="92" width="3" height="28" fill="#1a1a1a" />
        <rect x="40" y="94" width="18" height="3" fill="#1a1a1a" transform="rotate(-20 49 96)" />
      </g>
      <text x="200" y="230" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="36" fill="#1a1a1a">RUN</text>
      <text x="200" y="265" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="24" fill="#c84c3a">FOR FUN</text>
    </Thumb>
  ),
  dorian: (
    <Thumb>
      <rect width="400" height="300" fill="#1a1a1a" />
      <defs>
        <radialGradient id="d-face" cx=".5" cy=".4">
          <stop offset="0" stopColor="#d4a574" />
          <stop offset="1" stopColor="#1a1a1a" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="130" rx="90" ry="120" fill="url(#d-face)" opacity=".8" />
      <ellipse cx="180" cy="130" rx="90" ry="120" fill="url(#d-face)" opacity=".5" transform="rotate(-8 180 130)" />
      <text x="200" y="270" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="28" fill="#faf7ef">Dorian Gray</text>
    </Thumb>
  ),
  lennon: (
    <Thumb>
      <rect width="400" height="300" fill="#2b4a7a" />
      <rect x="0" y="160" width="400" height="140" fill="#d8b54a" />
      <path d="M 100 160 L 160 100 L 240 100 L 300 160 Z" fill="#c84c3a" />
      <rect x="180" y="100" width="40" height="80" fill="#1a1a1a" />
      <circle cx="100" cy="60" r="24" fill="#faf7ef" />
      <text x="200" y="245" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="22" fill="#1a1a1a">Walls & Bridges</text>
    </Thumb>
  ),
  wine: (
    <Thumb>
      <rect width="400" height="300" fill="#faf1e7" />
      <rect x="160" y="40" width="80" height="240" rx="40" fill="#4a1220" />
      <rect x="170" y="120" width="60" height="90" fill="#faf1e7" />
      <text x="200" y="150" textAnchor="middle" fontFamily="serif" fontSize="10" fill="#4a1220">LACRIMA</text>
      <text x="200" y="175" textAnchor="middle" fontFamily="serif" fontSize="8" fill="#4a1220">DI MORRO</text>
      <text x="200" y="195" textAnchor="middle" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#4a1220">d'Alba</text>
      <circle cx="200" cy="60" r="6" fill="#4a1220" />
    </Thumb>
  ),
  robot: (
    <Thumb>
      <rect width="400" height="300" fill="#1a1a1a" />
      <g transform="translate(140,60)" stroke="#00e0b8" strokeWidth="2" fill="none">
        <rect x="0" y="0" width="120" height="140" rx="8" />
        <circle cx="40" cy="40" r="10" fill="#00e0b8" />
        <circle cx="80" cy="40" r="10" fill="#00e0b8" />
        <rect x="30" y="80" width="60" height="8" fill="#00e0b8" />
        <rect x="-20" y="60" width="20" height="40" />
        <rect x="120" y="60" width="20" height="40" />
        <rect x="30" y="140" width="20" height="40" />
        <rect x="70" y="140" width="20" height="40" />
      </g>
      <text x="200" y="260" textAnchor="middle" fontFamily="monospace" fontSize="14" fill="#00e0b8">ROBOT_FESTIVAL</text>
    </Thumb>
  ),
};
