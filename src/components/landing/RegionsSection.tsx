"use client";

import { useLocale } from "@/i18n/LocaleProvider";

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
          padding: "0 var(--space-xl)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: "var(--space-md)",
          }}
        >
          <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Regions
          </span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "var(--cream)",
            marginBottom: "var(--space-3xl)",
            maxWidth: 520,
          }}
        >
          {reg.title}
        </h2>

        {/* Region rows */}
        <div style={{ borderTop: "1px solid rgba(240, 235, 224, 0.06)" }}>
          {regions.map((r) => (
            <div
              key={r.key}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto",
                gap: "var(--space-xl)",
                padding: "var(--space-lg) 0",
                borderBottom: "1px solid rgba(240, 235, 224, 0.06)",
                alignItems: "center",
                cursor: "default",
                transition: "padding var(--duration-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.paddingLeft = "var(--space-md)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.paddingLeft = "0";
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-2xl)",
                    fontWeight: 400,
                    color: "var(--cream)",
                    transition: "color var(--duration-fast)",
                  }}
                >
                  {reg[r.key]}
                </span>
                <span
                  style={{
                    marginLeft: "var(--space-md)",
                    fontSize: "var(--text-sm)",
                    color: "rgba(217, 206, 175, 0.3)",
                  }}
                >
                  {r.tagline}
                </span>
              </div>
              <span
                style={{
                  fontSize: "var(--text-sm)",
                  color: "var(--gold-wheat)",
                  opacity: 0.5,
                }}
              >
                {r.properties} properties
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ opacity: 0.3 }}>
                <path d="M6 4l8 6-8 6" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
