"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    key: "journey",
    number: "01",
    modules: "Onboarding · Deal Tracker · NIE Flow · Mortgage · E-Sign",
  },
  {
    key: "operations",
    number: "02",
    modules: "Renovation · Rental · Pricing · Contractors · Utilities",
  },
  {
    key: "compliance",
    number: "03",
    modules: "Tax Dashboard · Compliance · Cost Calculator · Market Intel",
  },
  {
    key: "team",
    number: "04",
    modules: "Pipeline · Contacts · KPIs · Reporting · Marketplace",
  },
  {
    key: "scale",
    number: "05",
    modules: "Portfolio · Fund Management · Investor Portal · Returns",
  },
  {
    key: "foundation",
    number: "06",
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
          padding: "0 var(--space-2xl)",
        }}
      >
        {/* Header */}
        <Reveal direction="up">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--space-3xl)",
              marginBottom: "var(--space-3xl)",
              alignItems: "end",
            }}
            className="features-header"
          >
            <div>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  display: "block",
                  marginBottom: "var(--space-lg)",
                }}
              >
                The Platform
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                }}
              >
                {title}
              </h2>
            </div>
            <p
              style={{
                fontSize: "var(--text-base)",
                fontWeight: 300,
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: 440,
              }}
            >
              {subtitle}
            </p>
          </div>
        </Reveal>

        {/* Feature rows */}
        <div style={{ borderTop: "1px solid var(--border-medium)" }}>
          {features.map((feat, i) => {
            const fd = featureDict[feat.key] as Record<string, string> | undefined;
            return (
              <Reveal key={feat.key} direction="up" delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "60px 1.2fr 1.8fr 1.2fr",
                    gap: "var(--space-xl)",
                    padding: "var(--space-lg) 0",
                    borderBottom: "1px solid var(--border-subtle)",
                    alignItems: "center",
                    cursor: "default",
                    transition: "all 0.3s ease",
                  }}
                  className="feature-row"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = "var(--space-md)";
                    e.currentTarget.style.borderBottomColor = "var(--terracotta)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = "0";
                    e.currentTarget.style.borderBottomColor = "var(--border-subtle)";
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--text-sm)",
                      fontWeight: 300,
                      color: "var(--terracotta)",
                    }}
                  >
                    {feat.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "var(--text-xl)",
                      fontWeight: 400,
                    }}
                  >
                    {fd?.title ?? feat.key}
                  </h3>
                  <p
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: 300,
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {fd?.description ?? ""}
                  </p>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 300,
                      color: "var(--text-muted)",
                      opacity: 0.5,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {feat.modules}
                  </span>
                </div>
              </Reveal>
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
