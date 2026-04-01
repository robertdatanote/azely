"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function HeroSection() {
  const { dict } = useLocale();
  const hero = dict.hero as Record<string, string>;

  return (
    <section
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: 700,
        overflow: "hidden",
      }}
    >
      {/* Full-bleed background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/hero-villa.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: "scale(1.02)",
        }}
      />

      {/* Gradient overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(28,22,16,0.6) 0%, rgba(28,22,16,0.2) 40%, rgba(28,22,16,0.5) 80%, rgba(28,22,16,0.85) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, rgba(28,22,16,0.7) 0%, transparent 50%)",
        }}
      />

      {/* Content — positioned bottom-left, O Group style */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 var(--space-2xl) var(--space-3xl)",
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
        }}
      >
        <Reveal direction="up" delay={200}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#fff",
              maxWidth: 700,
              marginBottom: "var(--space-lg)",
            }}
          >
            {hero.title}
          </h1>
        </Reveal>

        <Reveal direction="up" delay={400}>
          <p
            style={{
              fontSize: "var(--text-base)",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 520,
              marginBottom: "var(--space-xl)",
            }}
          >
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal direction="up" delay={600}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-xl)",
            }}
          >
            <Link
              href="/properties"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 36px",
                background: "var(--terracotta)",
                color: "#fff",
                fontSize: "var(--text-sm)",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: 0,
                borderBottomRightRadius: 14,
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "var(--terracotta)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--terracotta)";
                e.currentTarget.style.color = "#fff";
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
                fontSize: "var(--text-sm)",
                fontWeight: 300,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                borderBottom: "1px solid rgba(255,255,255,0.15)",
                paddingBottom: 4,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderBottomColor = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)";
              }}
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </Reveal>

        {/* Bottom stats strip */}
        <Reveal direction="up" delay={800}>
          <div
            style={{
              display: "flex",
              gap: "var(--space-3xl)",
              marginTop: "var(--space-3xl)",
              paddingTop: "var(--space-xl)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
            className="hero-stats"
          >
            <HeroStat value="€1.2B+" label="Transacted" />
            <HeroStat value="2,400+" label="Properties" />
            <HeroStat value="8" label="Countries" />
            <HeroStat value="39" label="Modules" />
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "var(--space-xl)",
          right: "var(--space-2xl)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(180deg, rgba(255,255,255,0.3), transparent)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats { gap: var(--space-xl) !important; flex-wrap: wrap; }
        }
      `}</style>
    </section>
  );
}

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-2xl)",
          fontWeight: 400,
          color: "#fff",
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 10,
          fontWeight: 300,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
