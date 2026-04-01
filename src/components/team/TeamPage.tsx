"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { layers } from "@/data/modules";
import type { Module, Layer } from "@/data/modules";
import Link from "next/link";

const totalModules = layers.reduce((s, l) => s + l.modules.length, 0);

const tiers = [
  {
    name: "Starter",
    price: "€299",
    period: "/mo",
    description: "For independent agents starting cross-border.",
    includes: "L0 Foundation (6 modules)",
    features: ["Up to 25 active clients", "2 team members", "EN/NL/ES", "Email support"],
    accent: "var(--gold-wheat)",
    popular: false,
  },
  {
    name: "Professional",
    price: "€799",
    period: "/mo",
    description: "For growing agencies managing properties and clients.",
    includes: "L0 + L1 + L2 + L3 (26 modules)",
    features: ["Up to 100 active clients", "10 team members", "Custom branding", "Priority support", "API access"],
    accent: "var(--terracotta)",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established agencies and property groups at scale.",
    includes: "All 39 modules (L0–L5)",
    features: ["Unlimited clients & team", "Dedicated account manager", "Custom integrations", "SLA guarantee", "Multi-tenant deployment", "iOS app"],
    accent: "#fff",
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
          }}
        >
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={eyebrow("var(--terracotta)")}>For Real Estate Agencies</span>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--cream)", maxWidth: 700, marginBottom: "var(--space-xl)" }}>
                White-label the platform that&apos;s redefining cross-border real estate
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p style={{ fontSize: "var(--text-lg)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: 560, marginBottom: "var(--space-2xl)" }}>
                Deploy Azely under your own brand. {totalModules} modules, 6 layers, 3 languages. Start with what you need, scale as you grow. Every module listed here is live and production-ready.
              </p>
            </Reveal>
            <Reveal direction="up" delay={400}>
              <div style={{ display: "flex", gap: "var(--space-md)" }}>
                <Link href="/contact" style={ctaButton("var(--terracotta)", "#fff")}>
                  Request a Demo
                  <ArrowIcon />
                </Link>
                <Link href="#modules" style={ctaButtonOutline()}>
                  Explore Modules
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "var(--space-3xl) 0", background: "#000" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)", textAlign: "center" }} className="agency-stats">
            {[
              { end: 39, suffix: "", label: "Live Modules" },
              { end: 6, suffix: "", label: "Platform Layers" },
              { end: 3, suffix: "", label: "Languages" },
              { end: 21, suffix: "", label: "Portal Routes" },
            ].map((s, i) => (
              <Reveal key={s.label} direction="up" delay={i * 100}>
                <div>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#fff", lineHeight: 0.9, marginBottom: "var(--space-md)" }}>
                    <AnimatedCounter end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Architecture Overview */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={eyebrow("var(--terracotta)")}>Product Architecture · Modular Build</span>
              <h2 style={sectionTitle()}>
                {totalModules} modules — build what you need, nothing more
              </h2>
              <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 640, marginBottom: "var(--space-3xl)" }}>
                The platform is built from the ground up as composable building blocks. Start with the foundation — auth, branding, dashboard, documents — and stack the modules your agency needs. Each layer builds on the one below. No bloated packages, no features you never use.
              </p>
            </Reveal>

            {/* Layer stack visualization */}
            <Reveal direction="up" delay={200}>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[...layers].reverse().map((layer, i) => {
                  const widthPct = 60 + (([...layers].reverse().length - 1 - i) * (40 / ([...layers].reverse().length - 1)));
                  return (
                    <a
                      key={layer.id}
                      href={`#${layer.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: `${widthPct}%`,
                        marginLeft: "auto",
                        padding: "14px 20px",
                        background: layer.color,
                        borderRadius: "var(--radius-sm)",
                        color: "#fff",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateX(-4px)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateX(0)"; }}
                    >
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-base)", fontWeight: 500 }}>
                        {layer.id} — {layer.name}
                      </span>
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: 300, opacity: 0.7 }}>
                        {layer.modules.length}
                      </span>
                    </a>
                  );
                })}
              </div>
              <p style={{ textAlign: "center", marginTop: "var(--space-md)", fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                ▲ builds on top
              </p>
            </Reveal>
          </div>
        </section>

        {/* Module Detail Sections */}
        <section id="modules" style={{ background: "var(--bg-page)", paddingBottom: "var(--space-4xl)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            {layers.map((layer) => (
              <LayerSection key={layer.id} layer={layer} />
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--espresso)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <div style={{ textAlign: "center", marginBottom: "var(--space-3xl)" }}>
                <span style={eyebrow("var(--gold)")}>Pricing</span>
                <h2 style={{ ...sectionTitle(), color: "var(--cream)" }}>
                  Start small. Scale infinitely.
                </h2>
                <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto" }}>
                  Pick your starting layer. Add modules as your agency grows. No lock-in, no surprises.
                </p>
              </div>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)", alignItems: "stretch" }} className="pricing-grid">
              {tiers.map((tier, i) => (
                <Reveal key={tier.name} direction="up" delay={i * 120}>
                  <div
                    style={{
                      padding: "var(--space-2xl)",
                      border: tier.popular ? "1px solid var(--terracotta)" : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "var(--radius-lg)",
                      display: "flex",
                      flexDirection: "column",
                      position: "relative",
                      height: "100%",
                    }}
                  >
                    {tier.popular && (
                      <div style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", padding: "4px 16px", background: "var(--terracotta)", color: "#fff", fontSize: 10, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 8 }}>
                        Most Popular
                      </div>
                    )}
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 400, color: "var(--cream)", marginBottom: "var(--space-sm)" }}>
                      {tier.name}
                    </h3>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "rgba(255,255,255,0.35)", marginBottom: "var(--space-lg)" }}>
                      {tier.description}
                    </p>
                    <div style={{ marginBottom: "var(--space-lg)" }}>
                      <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-4xl)", fontWeight: 400, color: tier.accent }}>{tier.price}</span>
                      <span style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>{tier.period}</span>
                    </div>
                    <div style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--gold-wheat)", marginBottom: "var(--space-md)" }}>
                      {tier.includes}
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "var(--space-sm)", flex: 1 }}>
                      {tier.features.map((f) => (
                        <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "var(--text-sm)", fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 3 }}>
                            <path d="M3 7l3 3 5-5" stroke="var(--success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      style={{
                        display: "block", textAlign: "center", padding: "14px", marginTop: "var(--space-xl)",
                        background: tier.popular ? "var(--terracotta)" : "rgba(255,255,255,0.06)",
                        color: tier.popular ? "#fff" : "rgba(255,255,255,0.6)",
                        fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase",
                        borderRadius: 0, borderBottomRightRadius: 12, transition: "all 0.3s",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = tier.popular ? "#fff" : "rgba(255,255,255,0.1)"; e.currentTarget.style.color = tier.popular ? "var(--terracotta)" : "#fff"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = tier.popular ? "var(--terracotta)" : "rgba(255,255,255,0.06)"; e.currentTarget.style.color = tier.popular ? "#fff" : "rgba(255,255,255,0.6)"; }}
                    >
                      Get Started
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ padding: "var(--space-4xl) 0", background: "#000", textAlign: "center" }}>
          <Reveal direction="up">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#fff", marginBottom: "var(--space-md)" }}>
              Ready to transform your agency?
            </h2>
            <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "rgba(255,255,255,0.35)", marginBottom: "var(--space-xl)" }}>
              See Azely in action. No commitment required.
            </p>
            <Link href="/contact" style={ctaButton("var(--terracotta)", "#fff")}>
              Request a Demo
              <ArrowIcon />
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .agency-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; }
          .module-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </LocaleProvider>
  );
}

/* ── Layer Section ── */
function LayerSection({ layer }: { layer: Layer }) {
  return (
    <div id={layer.id} style={{ marginBottom: "var(--space-4xl)" }}>
      <Reveal direction="up">
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", marginBottom: "var(--space-sm)" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 40, height: 40, borderRadius: "var(--radius-full)",
              background: layer.color, color: "#fff",
              fontSize: "var(--text-xs)", fontWeight: 500, letterSpacing: "0.04em",
            }}
          >
            {layer.id}
          </span>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 500 }}>
            {layer.name}
          </h3>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-muted)" }}>
            {layer.modules.length} modules
          </span>
        </div>
        <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
          {layer.subtitle}
        </p>
      </Reveal>

      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-md)" }}
        className="module-grid"
      >
        {layer.modules.map((mod, i) => (
          <Reveal key={mod.name} direction="up" delay={i * 60}>
            <ModuleCard module={mod} layerColor={layer.color} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ── Module Card ── */
function ModuleCard({ module: mod, layerColor }: { module: Module; layerColor: string }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        padding: "var(--space-xl)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 220,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = layerColor; e.currentTarget.style.boxShadow = `0 4px 20px ${layerColor}15`; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div>
        <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-base)", fontWeight: 600, marginBottom: "var(--space-sm)" }}>
          {mod.name}
        </h4>
        <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7 }}>
          {mod.description}
        </p>
      </div>

      <div style={{ marginTop: "var(--space-lg)", display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
        {/* Dependencies */}
        {mod.dependencies?.map((dep) => (
          <span
            key={dep}
            style={{
              padding: "3px 10px", fontSize: 10, fontWeight: 400, color: "var(--terracotta)",
              border: "1px solid rgba(181,101,74,0.2)", borderRadius: "var(--radius-full)",
            }}
          >
            ← {dep}
          </span>
        ))}
        {/* Tags */}
        {mod.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "3px 10px", fontSize: 10, fontWeight: 300, color: "var(--text-muted)",
              border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-full)",
            }}
          >
            {tag}
          </span>
        ))}
        {/* Status */}
        <span
          style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            padding: "3px 10px", fontSize: 10, fontWeight: 500,
            color: mod.status === "live" ? "var(--success)" : mod.status === "beta" ? "var(--warning)" : "var(--text-muted)",
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: mod.status === "live" ? "var(--success)" : mod.status === "beta" ? "var(--warning)" : "var(--text-muted)" }} />
          {mod.status}
        </span>
      </div>
    </div>
  );
}

/* ── Shared Styles ── */
function eyebrow(color: string): React.CSSProperties {
  return { fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color, display: "block", marginBottom: "var(--space-lg)" };
}

function sectionTitle(): React.CSSProperties {
  return { fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: "var(--space-md)" };
}

function ctaButton(bg: string, color: string): React.CSSProperties {
  return { display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 36px", background: bg, color, fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 14, transition: "all 0.3s" };
}

function ctaButtonOutline(): React.CSSProperties {
  return { display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 14, transition: "all 0.3s" };
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
