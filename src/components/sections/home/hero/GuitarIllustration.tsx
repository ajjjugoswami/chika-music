import styles from "./GuitarIllustration.module.css";

const FRETS = [92, 116, 138, 158, 176, 193, 208, 222, 235, 247, 258, 268, 277, 286, 294, 302, 309, 316, 323, 330, 336];
const MARKERS = [127, 167, 200, 229, 272];
const STRINGS = [
  { top: 99, bottom: 88, width: 1.7 },
  { top: 103.4, bottom: 96.8, width: 1.5 },
  { top: 107.8, bottom: 105.6, width: 1.3 },
  { top: 112.2, bottom: 114.4, width: 1.1 },
  { top: 116.6, bottom: 123.2, width: 0.9 },
  { top: 121, bottom: 132, width: 0.75 },
];
const PEGS = [20, 36, 52];

export function GuitarIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 520" aria-hidden className={className}>
      <defs>
        <linearGradient id="guitar-wood" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#f6c27d" />
          <stop offset="0.55" stopColor="#e08a34" />
          <stop offset="1" stopColor="#b2500f" />
        </linearGradient>
        <radialGradient id="guitar-glow" cx="0.35" cy="0.3" r="0.7">
          <stop offset="0" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="guitar-neck" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a2416" />
          <stop offset="0.5" stopColor="#4d3020" />
          <stop offset="1" stopColor="#2b1a10" />
        </linearGradient>
      </defs>

      <g>
        {PEGS.map((y) => (
          <g key={y}>
            <rect x="80" y={y - 1.5} width="16" height="3" rx="1.5" fill="#9ca3af" />
            <rect x="124" y={y - 1.5} width="16" height="3" rx="1.5" fill="#9ca3af" />
            <circle cx="80" cy={y} r="5.5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
            <circle cx="140" cy={y} r="5.5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
          </g>
        ))}
      </g>
      <path d="M90 10Q110 2 130 10L131 64Q110 70 89 64Z" fill="url(#guitar-neck)" />

      <path
        d="M110 282C70 282 40 300 40 335c0 23 15 33 12 50-3 17-34 30-34 65 0 38 40 62 92 62s92-24 92-62c0-35-31-48-34-65-3-17 12-27 12-50 0-35-30-53-70-53Z"
        fill="url(#guitar-wood)"
        stroke="#5b3415"
        strokeWidth="3"
      />
      <path
        d="M110 282C70 282 40 300 40 335c0 23 15 33 12 50-3 17-34 30-34 65 0 38 40 62 92 62s92-24 92-62c0-35-31-48-34-65-3-17 12-27 12-50 0-35-30-53-70-53Z"
        fill="url(#guitar-glow)"
      />
      <path d="M130 396c22-4 34 13 30 33-4 15-23 17-30 5Z" fill="#3b2416" opacity="0.85" />
      <circle cx="110" cy="380" r="35" fill="none" stroke="#8a5a2b" strokeWidth="1.2" />
      <circle cx="110" cy="380" r="31" fill="none" stroke="#5b3415" strokeWidth="2.5" />
      <circle cx="110" cy="380" r="26" fill="#1c1007" />

      <rect x="95" y="64" width="30" height="290" rx="2" fill="url(#guitar-neck)" />
      <rect x="93" y="63" width="34" height="4" rx="1" fill="#f5f0e6" />
      {FRETS.map((y) => (
        <line key={y} x1="95" x2="125" y1={y} y2={y} stroke="#cbb89c" strokeWidth="1.3" />
      ))}
      {MARKERS.map((y) => (
        <circle key={y} cx="110" cy={y} r="2.4" fill="#efe7da" />
      ))}

      <rect x="78" y="450" width="64" height="13" rx="4" fill="#2b1a10" />
      <line x1="85" x2="135" y1="454" y2="454" stroke="#f5f0e6" strokeWidth="2" strokeLinecap="round" />

      <g className={styles.strings}>
        {STRINGS.map((string) => (
          <line
            key={string.top}
            className={styles.string}
            x1={string.top}
            y1="65"
            x2={string.bottom}
            y2="455"
            stroke="#f3efe6"
            strokeWidth={string.width}
          />
        ))}
      </g>
    </svg>
  );
}
