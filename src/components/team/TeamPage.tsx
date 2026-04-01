"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { layers } from "@/data/modules";
import type { Module, Layer, Complexity } from "@/data/modules";
import Link from "next/link";

const totalModules = layers.reduce((s, l) => s + l.modules.length, 0);
const totalImplementation = layers.reduce((s, l) => s + l.modules.reduce((a, m) => a + m.implementationFee, 0), 0);
const totalMonthly = layers.reduce((s, l) => s + l.modules.reduce((a, m) => a + m.monthlyFee, 0), 0);
const totalHours = layers.reduce((s, l) => s + l.modules.reduce((a, m) => a + m.hours, 0), 0);

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

        {/* Pricing — Module-Based */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={eyebrow("var(--terracotta)")}>Pricing · Module-Based</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-3xl)", marginBottom: "var(--space-3xl)", alignItems: "end" }} className="pricing-header">
                <div>
                  <h2 style={sectionTitle()}>
                    Pay for what you use. Build what you need.
                  </h2>
                  <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 480 }}>
                    Every module has a one-time implementation fee and a monthly platform fee. Start with L0 Foundation, add layers as your agency grows. No lock-in contracts.
                  </p>
                </div>
                {/* Summary card */}
                <div style={{ background: "var(--espresso)", borderRadius: "var(--radius-lg)", padding: "var(--space-xl)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--space-lg)", textAlign: "center" }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-wheat)", opacity: 0.6, marginBottom: 6 }}>Full Platform</div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 400, color: "var(--cream)" }}>€{totalImplementation.toLocaleString()}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>implementation</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-wheat)", opacity: 0.6, marginBottom: 6 }}>Monthly</div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 400, color: "var(--cream)" }}>€{totalMonthly.toLocaleString()}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>/month</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-wheat)", opacity: 0.6, marginBottom: 6 }}>Total Hours</div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 400, color: "var(--cream)" }}>{totalHours.toLocaleString()}</div>
                      <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 2 }}>hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Per-layer pricing tables */}
            {layers.map((layer) => (
              <PricingLayerTable key={layer.id} layer={layer} />
            ))}
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
          .module-grid { grid-template-columns: 1fr !important; }
          .pricing-header { grid-template-columns: 1fr !important; }
          .pricing-row { grid-template-columns: 1fr auto !important; }
          .pricing-row > :nth-child(2),
          .pricing-row > :nth-child(3) { display: none !important; }
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

/* ── Pricing Layer Table ── */
function PricingLayerTable({ layer }: { layer: Layer }) {
  const layerHours = layer.modules.reduce((s, m) => s + m.hours, 0);
  const layerImpl = layer.modules.reduce((s, m) => s + m.implementationFee, 0);
  const layerMonthly = layer.modules.reduce((s, m) => s + m.monthlyFee, 0);

  return (
    <Reveal direction="up">
      <div style={{ marginBottom: "var(--space-2xl)" }}>
        {/* Layer header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-md)", flexWrap: "wrap", gap: "var(--space-sm)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "var(--radius-full)", background: layer.color, color: "#fff", fontSize: 11, fontWeight: 500 }}>
              {layer.id}
            </span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 500 }}>
              {layer.name}
            </h3>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-muted)" }}>
              {layer.modules.length} modules · {layerHours} hours
            </span>
          </div>
          <div style={{ display: "flex", gap: "var(--space-xl)", alignItems: "baseline" }}>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", fontWeight: 300 }}>
              €{layerMonthly.toLocaleString()}/mo
            </span>
            <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 500 }}>
              €{layerImpl.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Module rows */}
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
          {layer.modules.map((mod, i) => (
            <div
              key={mod.name}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto auto auto",
                gap: "var(--space-lg)",
                alignItems: "center",
                padding: "var(--space-md) var(--space-xl)",
                borderBottom: i < layer.modules.length - 1 ? "1px solid var(--border-subtle)" : "none",
                transition: "background 0.2s",
              }}
              className="pricing-row"
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--cream)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              {/* Name + description */}
              <div>
                <div style={{ fontSize: "var(--text-base)", fontWeight: 600, marginBottom: 2, fontFamily: "var(--font-sans)" }}>
                  {mod.name}
                </div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", fontWeight: 300 }}>
                  {mod.tags.join(", ")}
                </div>
              </div>

              {/* Complexity */}
              <ComplexityBadge complexity={mod.complexity} />

              {/* Hours */}
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", fontWeight: 300, minWidth: 55, textAlign: "right" }}>
                {mod.hours} hrs
              </span>

              {/* Prices */}
              <div style={{ textAlign: "right", minWidth: 130 }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-base)", fontWeight: 600 }}>
                  €{mod.implementationFee.toLocaleString()}
                </span>
                <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 300, marginLeft: 8 }}>
                  + €{mod.monthlyFee}/mo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ── Complexity Badge ── */
function ComplexityBadge({ complexity }: { complexity: Complexity }) {
  const config: Record<Complexity, { color: string; bg: string }> = {
    low: { color: "var(--success)", bg: "var(--success-bg)" },
    medium: { color: "var(--warning)", bg: "var(--warning-bg)" },
    high: { color: "var(--error)", bg: "var(--error-bg)" },
  };
  const c = config[complexity];
  return (
    <span style={{ padding: "3px 12px", borderRadius: "var(--radius-full)", fontSize: 11, fontWeight: 500, color: c.color, background: c.bg, textTransform: "capitalize" }}>
      {complexity}
    </span>
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
