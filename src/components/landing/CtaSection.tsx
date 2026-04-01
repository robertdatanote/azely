"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { Reveal } from "@/components/ui/Reveal";
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
          maxWidth: 700,
          margin: "0 auto",
          padding: "0 var(--space-2xl)",
          textAlign: "center",
        }}
      >
        <Reveal direction="up">
          <span
            style={{
              fontSize: 11,
              fontWeight: 300,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--terracotta)",
              display: "block",
              marginBottom: "var(--space-xl)",
            }}
          >
            Get Started
          </span>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              marginBottom: "var(--space-lg)",
            }}
          >
            {cta.title}
          </h2>
        </Reveal>

        <Reveal direction="up" delay={200}>
          <p
            style={{
              fontSize: "var(--text-base)",
              fontWeight: 300,
              color: "var(--text-muted)",
              lineHeight: 1.8,
              marginBottom: "var(--space-2xl)",
            }}
          >
            {cta.subtitle}
          </p>
        </Reveal>

        <Reveal direction="up" delay={300}>
          <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-xl)", alignItems: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 40px",
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
                e.currentTarget.style.background = "var(--espresso)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--terracotta)";
              }}
            >
              {cta.button}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span
              style={{
                fontSize: 12,
                fontWeight: 300,
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
              }}
            >
              {cta.note}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
