"use client";

import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsBar() {
  return (
    <section
      style={{
        background: "#000",
        padding: "var(--space-4xl) 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
          padding: "0 var(--space-2xl)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-xl)",
        }}
        className="counter-grid"
      >
        {[
          { end: 5.3, prefix: "€", suffix: "B+", decimals: 1, label: "Property Value Managed" },
          { end: 2400, suffix: "+", decimals: 0, label: "Properties Listed" },
          { end: 1200, suffix: "+", decimals: 0, label: "Clients Served" },
          { end: 39, suffix: "", decimals: 0, label: "Platform Modules" },
        ].map((stat, i) => (
          <Reveal key={stat.label} direction="up" delay={i * 150}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontWeight: 300,
                  color: "#fff",
                  lineHeight: 0.9,
                  marginBottom: "var(--space-md)",
                }}
              >
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix ?? ""}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .counter-grid { grid-template-columns: repeat(2, 1fr) !important; gap: var(--space-2xl) !important; }
        }
      `}</style>
    </section>
  );
}
