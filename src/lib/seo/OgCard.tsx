import { siteConfig } from "@/content/site";

export const OG_SIZE = { width: 1200, height: 630 };

interface OgCardProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export function OgCard({ eyebrow, title, subtitle }: OgCardProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "radial-gradient(circle at 85% 20%, rgba(234,88,12,0.35), transparent 55%), #0a0a0a",
        color: "#f5f5f5",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="52" height="78" viewBox="14 4 82 124">
          <g fill="#f5f5f5">
            <path d="M42.5 8h16l-1.2 11.5L55 23.5h-9l-2.3-4z" />
            <path fillRule="evenodd" d="M46 23h9v87h-9zM48.4 28h.8v76h-.8zM50.9 28h.8v76h-.8z" />
            <path d="M55 33.5c3 3.6 7 5.4 12 7.4l19 7.4c4.2 1.6 4.4 6.6.4 9.2-2.8 1.8-6 2.2-8.6 1.2L55 50.5z" />
            <path d="M60 60l22.5 8.2c3 1.1 3.2 3.4.8 5.8l-3.6 3.6c-2 2-4.6 2.6-7 1.6L60 74.1z" />
            <path d="M47 40C44.5 43 41 44.5 37.5 46.2 32 49 29 54 29 60c0 5.5 3.2 8.6 5 11.4 1.6 2.6 1.4 5.4-.8 8.2-2.8 3.4-7.6 6.8-10.6 11-3 4.2-4.6 8.8-4.6 13.6 0 11.4 9.2 20.6 21 20.6 7.2 0 13.4-3 17-7.6-4 2-8.4 2.6-12.6 1.8C35.2 117.4 26 112 26 104c0-4.4 1.8-8.6 5.4-12.4 3-3.2 6.4-6 7.8-9.8 1.2-3.2.6-6.2-1.2-9C36.4 70.2 34.6 68 34.6 64.4c0-4.6 3.2-8.6 7-10.6 2-1 3.6-1.4 5.4-1.8z" />
          </g>
          <ellipse cx="48.8" cy="110" rx="7.4" ry="6.9" transform="rotate(-18 48.8 110)" fill="#ea580c" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -1 }}>Future Music</span>
          <span style={{ fontSize: 16, letterSpacing: 6, color: "#a3a3a3" }}>ACADEMY</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 26, color: "#ff8a50", fontWeight: 600 }}>{eyebrow}</span>
        <span style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, marginTop: 12 }}>
          {title}
        </span>
        <span style={{ fontSize: 30, color: "#a3a3a3", marginTop: 20 }}>{subtitle}</span>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#d4d4d4" }}>
        <span>
          {siteConfig.address.locality}, {siteConfig.address.city}
        </span>
        <span>{siteConfig.contact.phoneDisplay}</span>
      </div>
    </div>
  );
}
