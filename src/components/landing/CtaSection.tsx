"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";

export function CtaSection() {
  const { dict } = useLocale();
  const cta = dict.cta as Record<string, string>;

  return (
    <section
      style={{
        padding: "var(--space-4xl) 0",
        background: "var(--bg-page)",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 var(--space-xl)",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "var(--space-3xl)",
          alignItems: "center",
        }}
        className="cta-grid"
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
              Get started
            </span>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "var(--space-md)",
            }}
          >
            {cta.title}
          </h2>
          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "var(--space-xl)",
            }}
          >
            {cta.subtitle}
          </p>
          <div style={{ display: "flex", gap: "var(--space-md)", alignItems: "center" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 30px",
                borderRadius: "var(--radius-full)",
                background: "var(--terracotta)",
                color: "#fff",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "all var(--duration-normal) var(--ease-out)",
              }}
            >
              {cta.button}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
              {cta.note}
            </span>
          </div>
        </div>

        {/* Abstract visual — three overlapping property cards */}
        <div style={{ position: "relative", height: 280 }}>
          {[
            { rotate: -6, y: 0, opacity: 0.15 },
            { rotate: -2, y: -8, opacity: 0.3 },
            { rotate: 2, y: -16, opacity: 1 },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${card.rotate}deg) translateY(${card.y}px)`,
                width: 220,
                height: 160,
                borderRadius: "var(--radius-xl)",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-lg)",
                opacity: card.opacity,
                padding: "var(--space-lg)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {i === 2 && (
                <>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-sm)", fontWeight: 500, marginBottom: 4 }}>
                      Villa Mediterráneo
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Jávea, Costa Blanca</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-base)", fontWeight: 600, color: "var(--terracotta)" }}>
                      €685k
                    </span>
                    <span style={{ fontSize: 10, color: "var(--text-muted)" }}>4 bed · 240 m²</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-grid > :last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
