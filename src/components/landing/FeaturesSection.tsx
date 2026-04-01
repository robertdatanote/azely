"use client";

import { useLocale } from "@/i18n/LocaleProvider";

const features = [
  {
    key: "journey",
    number: "01",
    layer: "Client Journey",
    modules: "Onboarding · Deal Tracker · NIE Flow · Mortgage · E-Sign",
  },
  {
    key: "operations",
    number: "02",
    layer: "Property Operations",
    modules: "Renovation · Rental · Pricing · Contractors · Utilities",
  },
  {
    key: "compliance",
    number: "03",
    layer: "Intelligence",
    modules: "Tax Dashboard · Compliance · Cost Calculator · Market Intel",
  },
  {
    key: "team",
    number: "04",
    layer: "Team & CRM",
    modules: "Pipeline · Contacts · KPIs · Reporting · Marketplace",
  },
  {
    key: "scale",
    number: "05",
    layer: "Scale & Invest",
    modules: "Portfolio · Fund Management · Investor Portal · Returns",
  },
  {
    key: "foundation",
    number: "06",
    layer: "Foundation",
    modules: "Auth · White-Label · i18n · Dashboard · Documents · Notifications",
  },
];

export function FeaturesSection() {
  const { dict } = useLocale();
  const featureDict = dict.features as Record<string, unknown>;
  const title = featureDict.title as string;
  const subtitle = featureDict.subtitle as string;

  return (
    <section
      style={{
        padding: "var(--space-4xl) 0",
        background: "var(--bg-page)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-content)",
          margin: "0 auto",
          padding: "0 var(--space-xl)",
        }}
      >
        {/* Section header — left-aligned, editorial */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "var(--space-2xl)",
            marginBottom: "var(--space-3xl)",
            alignItems: "end",
          }}
          className="features-header"
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "var(--space-md)" }}>
              <div style={{ width: 32, height: 1, background: "var(--terracotta)" }} />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "var(--tracking-widest)",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                }}
              >
                Platform
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h2>
          </div>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: 440,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Feature rows — clean, no cards */}
        <div style={{ borderTop: "1px solid var(--border-subtle)" }}>
          {features.map((feat) => {
            const fd = featureDict[feat.key] as Record<string, string> | undefined;
            return (
              <div
                key={feat.key}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 1.2fr 1.5fr",
                  gap: "var(--space-xl)",
                  padding: "var(--space-xl) 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  alignItems: "baseline",
                  transition: "background var(--duration-fast)",
                  cursor: "default",
                }}
                className="feature-row"
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(181, 101, 74, 0.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-sm)",
                    color: "var(--terracotta)",
                    fontWeight: 500,
                  }}
                >
                  {feat.number}
                </span>

                {/* Layer name */}
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "var(--text-xl)",
                    fontWeight: 500,
                    color: "var(--text-primary)",
                  }}
                >
                  {fd?.title ?? feat.layer}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {fd?.description ?? ""}
                </p>

                {/* Module list */}
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--text-muted)",
                    opacity: 0.6,
                    letterSpacing: "0.01em",
                  }}
                >
                  {feat.modules}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-header { grid-template-columns: 1fr !important; }
          .feature-row { grid-template-columns: 40px 1fr !important; }
          .feature-row > :nth-child(3),
          .feature-row > :nth-child(4) { display: none !important; }
        }
      `}</style>
    </section>
  );
}
