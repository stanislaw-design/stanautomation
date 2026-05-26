"use client";
import { useState } from "react";

const TEMPLATES = [
  { key: "confirmation", label: "Potwierdzenie", emoji: "✅", desc: "Do klienta — natychmiast po rejestracji" },
  { key: "notification", label: "Powiadomienie", emoji: "🔔", desc: "Do Ciebie — nowe spotkanie" },
  { key: "reminder24h", label: "Przypomnienie 24h", emoji: "📅", desc: "Do klienta — dzień wcześniej" },
  { key: "reminder1h", label: "Przypomnienie 1h", emoji: "⏰", desc: "Do klienta — godzinę przed" },
] as const;

type TemplateKey = (typeof TEMPLATES)[number]["key"];

interface Props {
  templates: Record<TemplateKey, string>;
}

export default function EmailPreviewClient({ templates }: Props) {
  const [active, setActive] = useState<TemplateKey>("confirmation");

  const current = TEMPLATES.find((t) => t.key === active)!;

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "system-ui, -apple-system, sans-serif", background: "#0f172a" }}>
      {/* Sidebar */}
      <nav
        style={{
          width: "240px",
          background: "#0f172a",
          borderRight: "1px solid #1e293b",
          padding: "24px 12px",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            color: "#64748b",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "0 10px 16px",
          }}
        >
          Email Preview
        </div>

        {TEMPLATES.map(({ key, label, emoji, desc }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            style={{
              background: active === key ? "#1e3a5f" : "transparent",
              border: active === key ? "1px solid #1d4ed8" : "1px solid transparent",
              color: active === key ? "#e2e8f0" : "#94a3b8",
              padding: "10px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              textAlign: "left",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "2px" }}>
              <span>{emoji}</span>
              <span style={{ fontWeight: 600 }}>{label}</span>
            </div>
            <div style={{ fontSize: "11px", opacity: 0.6, paddingLeft: "24px" }}>{desc}</div>
          </button>
        ))}

        <div
          style={{
            marginTop: "auto",
            borderTop: "1px solid #1e293b",
            paddingTop: "16px",
            color: "#475569",
            fontSize: "11px",
            lineHeight: "1.7",
            padding: "16px 10px 0",
          }}
        >
          <div style={{ fontWeight: 600, color: "#64748b", marginBottom: "4px" }}>Mock data</div>
          Jan Kowalski
          <br />
          Restauracja Morska
          <br />
          28.05.2026 · 11:00
        </div>
      </nav>

      {/* Preview area */}
      <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Topbar */}
        <div
          style={{
            background: "#0f172a",
            borderBottom: "1px solid #1e293b",
            padding: "14px 24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "16px" }}>{current.emoji}</span>
          <div>
            <span style={{ color: "#f1f5f9", fontSize: "14px", fontWeight: 600 }}>{current.label}</span>
            <span style={{ color: "#475569", fontSize: "13px", marginLeft: "10px" }}>{current.desc}</span>
          </div>
          <span
            style={{
              marginLeft: "auto",
              background: "#132033",
              color: "#38bdf8",
              fontSize: "11px",
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: "20px",
              letterSpacing: "0.5px",
            }}
          >
            DEV ONLY
          </span>
        </div>

        {/* Email iframe */}
        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: "32px",
            display: "flex",
            justifyContent: "center",
            background: "#1e293b",
          }}
        >
          <iframe
            key={active}
            srcDoc={templates[active]}
            style={{
              width: "100%",
              maxWidth: "620px",
              height: "100%",
              minHeight: "500px",
              border: "none",
              borderRadius: "12px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
            title={`Email preview: ${active}`}
          />
        </div>
      </main>
    </div>
  );
}
