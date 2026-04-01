"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";

export function HeroSection() {
  const { dict } = useLocale();
  const hero = dict.hero as Record<string, string>;

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100dvh",
        background: "var(--espresso)",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        paddingTop: "var(--header-height)",
      }}
      className="hero-section"
    >
      {/* Left — Copy */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "var(--space-4xl) var(--space-3xl) var(--space-4xl) var(--space-3xl)",
          maxWidth: 680,
          marginLeft: "auto",
        }}
        className="hero-copy"
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: "var(--space-xl)",
            alignSelf: "flex-start",
          }}
        >
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
            Cross-Border Real Estate
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.25rem, 4.5vw, 4rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--cream)",
            marginBottom: "var(--space-lg)",
          }}
        >
          {hero.title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: 1.7,
            color: "rgba(217, 206, 175, 0.55)",
            maxWidth: 480,
            marginBottom: "var(--space-2xl)",
          }}
        >
          {hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-md)",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/properties"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "15px 32px",
              borderRadius: "var(--radius-full)",
              background: "var(--terracotta)",
              color: "#fff",
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "all var(--duration-normal) var(--ease-out)",
            }}
          >
            {hero.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <Link
            href="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 28px",
              fontSize: "var(--text-sm)",
              fontWeight: 400,
              color: "rgba(240, 235, 224, 0.5)",
              letterSpacing: "0.02em",
              transition: "color var(--duration-fast)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240, 235, 224, 0.5)")}
          >
            {hero.ctaSecondary}
          </Link>
        </div>

        {/* Trust indicators */}
        <div
          style={{
            marginTop: "var(--space-3xl)",
            display: "flex",
            gap: "var(--space-2xl)",
            borderTop: "1px solid rgba(240, 235, 224, 0.06)",
            paddingTop: "var(--space-xl)",
          }}
        >
          <TrustStat value="2,400+" label="Properties" />
          <TrustStat value="8" label="Countries" />
          <TrustStat value="€1.2B" label="Transacted" />
        </div>
      </div>

      {/* Right — Photo */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-image"
      >
        {/* The villa image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/hero-villa.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Gradient overlays for blending into dark left side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(90deg, var(--espresso) 0%, transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, var(--espresso) 0%, transparent 25%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(28, 22, 16, 0.15)",
          }}
        />

        {/* Property card floating overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "var(--space-2xl)",
            right: "var(--space-xl)",
            background: "rgba(28, 22, 16, 0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderRadius: "var(--radius-xl)",
            padding: "var(--space-lg) var(--space-xl)",
            border: "1px solid rgba(240, 235, 224, 0.08)",
            minWidth: 260,
          }}
          className="hero-floating-card"
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "var(--tracking-widest)",
              textTransform: "uppercase",
              color: "var(--terracotta)",
              marginBottom: 8,
            }}
          >
            Featured
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-lg)",
              fontWeight: 500,
              color: "var(--cream)",
              marginBottom: 4,
            }}
          >
            Villa Mediterráneo
          </div>
          <div
            style={{
              fontSize: "var(--text-sm)",
              color: "rgba(217, 206, 175, 0.5)",
              marginBottom: 12,
            }}
          >
            Jávea, Costa Blanca
          </div>
          <div style={{ display: "flex", gap: "var(--space-lg)", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-xl)",
                fontWeight: 600,
                color: "var(--gold)",
              }}
            >
              €685,000
            </span>
            <span style={{ fontSize: 11, color: "rgba(217, 206, 175, 0.35)" }}>
              4 bed · 3 bath · 240 m²
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-copy {
            padding: var(--space-3xl) var(--space-lg) var(--space-2xl) !important;
            max-width: 100% !important;
            margin-left: 0 !important;
          }
          .hero-image {
            height: 50vh;
            min-height: 360px;
          }
          .hero-floating-card {
            bottom: var(--space-lg) !important;
            right: var(--space-lg) !important;
            left: var(--space-lg) !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

function TrustStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-2xl)",
          fontWeight: 500,
          color: "var(--cream)",
          lineHeight: 1,
          marginBottom: 4,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 400,
          color: "rgba(217, 206, 175, 0.35)",
          letterSpacing: "var(--tracking-wide)",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
