"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "€299",
    period: "/mo",
    description: "For independent agents starting their cross-border journey.",
    features: [
      "L0 Foundation (Auth, i18n, Dashboard)",
      "L1 Client Journey (5 modules)",
      "Up to 25 active clients",
      "2 team members",
      "Email support",
    ],
    accent: "var(--gold-wheat)",
    popular: false,
  },
  {
    name: "Professional",
    price: "€799",
    period: "/mo",
    description: "For growing agencies managing multiple properties and clients.",
    features: [
      "Everything in Starter",
      "L2 Property Operations (8 modules)",
      "L3 Intelligence & Compliance (5 modules)",
      "Up to 100 active clients",
      "10 team members",
      "Priority support",
      "Custom branding",
    ],
    accent: "var(--terracotta)",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established agencies and property groups at scale.",
    features: [
      "All 39 modules",
      "L4 Team & CRM (6 modules)",
      "L5 Scale & Invest (7 modules)",
      "Unlimited clients & team",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "Multi-tenant deployment",
    ],
    accent: "var(--espresso)",
    popular: false,
  },
];

export function TeamPage() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "calc(var(--header-height) + var(--space-4xl))",
            paddingBottom: "var(--space-4xl)",
            background: "var(--espresso)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 var(--space-lg)" }}>
            <div
              style={{
                display: "inline-flex",
                padding: "6px 16px",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(201, 162, 81, 0.25)",
                background: "rgba(201, 162, 81, 0.08)",
                marginBottom: "var(--space-xl)",
              }}
            >
              <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "var(--tracking-wider)", textTransform: "uppercase", color: "var(--gold-wheat)" }}>
                For Real Estate Agencies
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 500, color: "var(--cream)", marginBottom: "var(--space-md)", lineHeight: "var(--leading-tight)" }}>
              White-Label Platform for Cross-Border Agencies
            </h1>
            <p style={{ fontSize: "var(--text-lg)", color: "var(--linen)", opacity: 0.7, marginBottom: "var(--space-xl)" }}>
              Deploy Azely under your own brand. 39 modules, 6 layers, 3 languages. Start with what you need, scale as you grow.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-lg)" }}>
            <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
              <h2 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-sm)" }}>
                Simple, Transparent Pricing
              </h2>
              <p style={{ color: "var(--text-muted)", fontSize: "var(--text-lg)" }}>
                Pick your layer. Add modules as you grow.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)", alignItems: "stretch" }} className="pricing-grid">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  style={{
                    background: "var(--bg-card)",
                    borderRadius: "var(--radius-xl)",
                    border: tier.popular ? "2px solid var(--terracotta)" : "1px solid var(--border-subtle)",
                    padding: "var(--space-xl)",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {tier.popular && (
                    <div
                      style={{
                        position: "absolute",
                        top: -12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        padding: "4px 16px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--terracotta)",
                        color: "white",
                        fontSize: "var(--text-xs)",
                        fontWeight: 700,
                        letterSpacing: "var(--tracking-wide)",
                        textTransform: "uppercase",
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, marginBottom: "var(--space-sm)" }}>
                    {tier.name}
                  </h3>
                  <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-lg)" }}>
                    {tier.description}
                  </p>

                  <div style={{ marginBottom: "var(--space-lg)" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: 600, color: tier.accent }}>
                      {tier.price}
                    </span>
                    <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{tier.period}</span>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-sm)", flex: 1 }}>
                    {tier.features.map((f) => (
                      <li key={f} style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: "var(--space-sm)" }}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                          <path d="M4 8l3 3 5-6" stroke="var(--success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "12px",
                      borderRadius: "var(--radius-full)",
                      background: tier.popular ? "var(--terracotta)" : "var(--bg-elevated)",
                      color: tier.popular ? "white" : "var(--text-primary)",
                      fontWeight: 600,
                      fontSize: "var(--text-sm)",
                      marginTop: "var(--space-lg)",
                      transition: "all var(--duration-fast) var(--ease-out)",
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 1024px) {
              .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
            }
          `}</style>
        </section>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
