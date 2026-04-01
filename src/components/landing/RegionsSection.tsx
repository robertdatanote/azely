"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Reveal } from "@/components/ui/Reveal";

const regions = [
  { key: "costaBlanca", properties: "840+", tagline: "Where Dutch buyers lead" },
  { key: "costaSol", properties: "620+", tagline: "Year-round sunshine" },
  { key: "balearics", properties: "380+", tagline: "Island luxury" },
  { key: "algarve", properties: "290+", tagline: "Portugal's golden coast" },
  { key: "coteDazur", properties: "180+", tagline: "French riviera prestige" },
];

export function RegionsSection() {
  const { dict } = useLocale();
  const reg = dict.regions as Record<string, string>;

  return (
    <section
      style={{
        padding: "var(--space-4xl) 0",
        background: "var(--espresso)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-content)",
          margin: "0 auto",
          padding: "0 var(--space-2xl)",
        }}
      >
        <Reveal direction="up">
          <span
            style={{
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--gold)",
              display: "block",
              marginBottom: "var(--space-lg)",
            }}
          >
            Regions
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "var(--cream)",
              marginBottom: "var(--space-3xl)",
              maxWidth: 520,
            }}
          >
            {reg.title}
          </h2>
        </Reveal>

        <div style={{ borderTop: "1px solid rgba(240, 235, 224, 0.08)" }}>
          {regions.map((r, i) => (
            <Reveal key={r.key} direction="left" delay={i * 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  gap: "var(--space-xl)",
                  padding: "var(--space-lg) 0",
                  borderBottom: "1px solid rgba(240, 235, 224, 0.05)",
                  alignItems: "center",
                  cursor: "default",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.paddingLeft = "var(--space-lg)";
                  e.currentTarget.style.borderBottomColor = "rgba(181, 101, 74, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.paddingLeft = "0";
                  e.currentTarget.style.borderBottomColor = "rgba(240, 235, 224, 0.05)";
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-lg)" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                      fontWeight: 300,
                      color: "var(--cream)",
                    }}
                  >
                    {reg[r.key]}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 300,
                      color: "rgba(217, 206, 175, 0.25)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {r.tagline}
                  </span>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 300,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--gold-wheat)",
                    opacity: 0.4,
                  }}
                >
                  {r.properties}
                </span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ opacity: 0.2 }}>
                  <path d="M5 3l8 6-8 6" stroke="var(--cream)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
