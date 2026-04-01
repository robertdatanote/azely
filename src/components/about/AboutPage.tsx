"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import Link from "next/link";

const team = [
  { name: "Sofia van der Berg", role: "Founder & CEO", location: "Amsterdam", initials: "SB" },
  { name: "Carlos Martínez Ruiz", role: "Head of Spain Operations", location: "Jávea", initials: "CM" },
  { name: "Elena Kowalski", role: "Head of Client Success", location: "Marbella", initials: "EK" },
  { name: "Jan-Willem de Vries", role: "CTO", location: "Amsterdam", initials: "JW" },
  { name: "María García López", role: "Head of Compliance", location: "Barcelona", initials: "MG" },
  { name: "Thomas Andersson", role: "VP Business Development", location: "Lisbon", initials: "TA" },
];

const timeline = [
  { year: "2019", event: "Founded as Verhome Platform in Jávea, serving Dutch buyers on the Costa Blanca." },
  { year: "2021", event: "Expanded to Costa del Sol and Balearics. Reached 500 active clients." },
  { year: "2023", event: "Launched white-label engine. First agency partners in Amsterdam and Marbella." },
  { year: "2024", event: "Grew to 39 platform modules across 6 layers. Opened Lisbon operations." },
  { year: "2025", event: "Rebranded as Azely. Cross-border platform now active in 8 countries." },
];

export function AboutPage() {
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
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                About Azely
              </span>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--cream)", maxWidth: 700, marginBottom: "var(--space-xl)" }}>
                Redefining how Northern Europeans buy property in Southern Europe
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p style={{ fontSize: "var(--text-lg)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: 560 }}>
                Born from the Costa Blanca. Built for the world. Azely is the platform that turns the complexity of cross-border real estate into clarity.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4xl)", alignItems: "start" }} className="about-grid">
              <Reveal direction="up">
                <div>
                  <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                    Our Mission
                  </span>
                  <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "var(--space-xl)" }}>
                    Every year, thousands of Dutch, Belgian, and German families dream of owning a home in Spain.
                  </h2>
                </div>
              </Reveal>
              <Reveal direction="up" delay={200}>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
                  <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8 }}>
                    The reality? A labyrinth of NIE applications, notary appointments, tax obligations across two jurisdictions, renovation contractors who don&apos;t speak your language, and rental regulations that change by municipality.
                  </p>
                  <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8 }}>
                    Azely exists to simplify this journey. We give agencies the technology to guide their clients from first viewing to golden keys — and beyond, into renovation, rental management, and portfolio growth.
                  </p>
                  <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8 }}>
                    Not a portal. Not a CRM. A platform built specifically for the cross-border property corridor between Northern and Southern Europe.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "var(--space-4xl) 0", background: "#000" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)", textAlign: "center" }} className="about-stats">
            {[
              { end: 8, suffix: "", label: "Countries" },
              { end: 39, suffix: "", label: "Platform Modules" },
              { end: 3, suffix: "", label: "Languages" },
              { end: 6, suffix: "", label: "Offices" },
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

        {/* Timeline */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                Our Journey
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "var(--space-3xl)" }}>
                From Jávea to Europe
              </h2>
            </Reveal>

            <div style={{ borderTop: "1px solid var(--border-medium)" }}>
              {timeline.map((item, i) => (
                <Reveal key={item.year} direction="up" delay={i * 80}>
                  <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "var(--space-xl)", padding: "var(--space-lg) 0", borderBottom: "1px solid var(--border-subtle)" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 400, color: "var(--terracotta)" }}>
                      {item.year}
                    </span>
                    <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {item.event}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--espresso)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "var(--space-lg)" }}>
                Leadership
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--cream)", marginBottom: "var(--space-3xl)" }}>
                The Team Behind Azely
              </h2>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)" }} className="team-grid">
              {team.map((person, i) => (
                <Reveal key={person.name} direction="up" delay={i * 100}>
                  <div style={{ padding: "var(--space-xl)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(240,235,224,0.06)", transition: "border-color 0.3s" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(181,101,74,0.3)"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(240,235,224,0.06)"}
                  >
                    <div style={{ width: 56, height: 56, borderRadius: "var(--radius-full)", background: "var(--espresso-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--cream)", marginBottom: "var(--space-lg)", letterSpacing: "0.04em" }}>
                      {person.initials}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", fontWeight: 400, color: "var(--cream)", marginBottom: 4 }}>
                      {person.name}
                    </h3>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--terracotta)", marginBottom: 2 }}>
                      {person.role}
                    </p>
                    <p style={{ fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.25)", letterSpacing: "0.04em" }}>
                      {person.location}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)", textAlign: "center" }}>
          <Reveal direction="up">
            <div style={{ maxWidth: 500, margin: "0 auto", padding: "0 var(--space-2xl)" }}>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "var(--space-lg)" }}>
                Ready to join us?
              </h2>
              <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "var(--space-xl)" }}>
                Whether you&apos;re an agency looking for a platform or a buyer seeking clarity, we&apos;d love to hear from you.
              </p>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", background: "var(--terracotta)", color: "#fff", fontSize: "var(--text-sm)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 14, transition: "all 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "var(--espresso)"}
                onMouseLeave={(e) => e.currentTarget.style.background = "var(--terracotta)"}
              >
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </LocaleProvider>
  );
}
