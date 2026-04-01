"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

const buyerServices = [
  { title: "Property Search & Viewings", desc: "Curated property selection across Costa Blanca, Costa del Sol, Balearics, and beyond. Virtual and in-person viewings with bilingual agents.", icon: "01" },
  { title: "NIE & Administrative Support", desc: "Full guidance through NIE applications, tax number registration, and Spanish bureaucracy. We handle the paperwork, you focus on finding your home.", icon: "02" },
  { title: "Mortgage Brokerage", desc: "Compare offers from ING Spain, CaixaBank, Sabadell, and more. Non-resident mortgage specialists who understand cross-border financing.", icon: "03" },
  { title: "Legal & Notary Coordination", desc: "Independent legal review, due diligence, Nota Simple verification, and notary appointment management. Every document verified.", icon: "04" },
  { title: "Cross-Border Tax Advisory", desc: "NL–ES, BE–ES, DE–ES tax optimization. Box 3, ITP, Plusvalía, double tax treaty navigation. Structured to minimize obligations.", icon: "05" },
  { title: "Post-Purchase Support", desc: "Utilities setup, insurance, community fees, property management — everything you need after the keys are in your hand.", icon: "06" },
];

const agencyServices = [
  { title: "White-Label Platform", desc: "Deploy Azely under your own brand, domain, and colors. Your clients see your agency — powered by our technology." },
  { title: "Modular Architecture", desc: "39 modules across 6 layers. Activate only what you need — from basic client portals to full investment management." },
  { title: "CRM & Deal Pipeline", desc: "Kanban-style deal tracking, contact management, KPI dashboards, and automated reporting. Run your agency like a machine." },
  { title: "Multi-Language Support", desc: "Built-in EN/NL/ES with extensible i18n. Add any language your clients speak without code changes." },
  { title: "Compliance Engine", desc: "Automated regulatory tracking across jurisdictions. Stay compliant without the overhead of a dedicated compliance team." },
  { title: "API & Integrations", desc: "Connect to your existing tools — IDX feeds, CRM systems, payment processors, document signing services." },
];

export function ServicesPage() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        {/* Hero */}
        <section style={{ paddingTop: "calc(var(--header-height) + var(--space-4xl))", paddingBottom: "var(--space-4xl)", background: "var(--espresso)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                Services
              </span>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--cream)", maxWidth: 700, marginBottom: "var(--space-xl)" }}>
                End-to-end real estate services for buyers and agencies
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p style={{ fontSize: "var(--text-lg)", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.45)", maxWidth: 540 }}>
                Whether you&apos;re buying your dream villa or scaling your cross-border agency, Azely provides the infrastructure and expertise to make it happen.
              </p>
            </Reveal>
          </div>
        </section>

        {/* For Buyers */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                For Buyers
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "var(--space-md)" }}>
                Your Property Journey, Handled
              </h2>
              <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 520, marginBottom: "var(--space-3xl)" }}>
                From first inquiry to post-purchase management — every step of buying property in Spain, guided and tracked.
              </p>
            </Reveal>

            <div style={{ borderTop: "1px solid var(--border-medium)" }}>
              {buyerServices.map((service, i) => (
                <Reveal key={service.title} direction="up" delay={i * 80}>
                  <div
                    style={{ display: "grid", gridTemplateColumns: "60px 1fr 1.5fr", gap: "var(--space-xl)", padding: "var(--space-lg) 0", borderBottom: "1px solid var(--border-subtle)", alignItems: "start", transition: "all 0.3s ease", cursor: "default" }}
                    className="service-row"
                    onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = "var(--space-md)"; e.currentTarget.style.borderBottomColor = "var(--terracotta)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = "0"; e.currentTarget.style.borderBottomColor = "var(--border-subtle)"; }}
                  >
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--terracotta)" }}>
                      {service.icon}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 400 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.7 }}>
                      {service.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* For Agencies */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--espresso)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", display: "block", marginBottom: "var(--space-lg)" }}>
                For Agencies
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--cream)", marginBottom: "var(--space-md)" }}>
                Your Brand, Our Technology
              </h2>
              <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, maxWidth: 520, marginBottom: "var(--space-3xl)" }}>
                White-label the platform that&apos;s redefining cross-border real estate. 39 modules. 6 layers. Your clients, your way.
              </p>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-lg)" }} className="agency-grid">
              {agencyServices.map((service, i) => (
                <Reveal key={service.title} direction="up" delay={i * 100}>
                  <div
                    style={{ padding: "var(--space-xl)", border: "1px solid rgba(240,235,224,0.06)", borderRadius: "var(--radius-lg)", transition: "border-color 0.3s" }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(181,101,74,0.3)"}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(240,235,224,0.06)"}
                  >
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", fontWeight: 400, color: "var(--cream)", marginBottom: "var(--space-sm)" }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
                      {service.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section style={{ padding: "var(--space-4xl) 0", background: "#000" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                How It Works
              </span>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", marginBottom: "var(--space-3xl)", maxWidth: 500 }}>
                Four steps to your Spanish property
              </h2>
            </Reveal>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)" }} className="process-grid">
              {[
                { step: "01", title: "Discovery", desc: "Share your vision — budget, region, lifestyle. We curate a shortlist of properties that match." },
                { step: "02", title: "Viewing & Offer", desc: "Visit in person or virtually. When you find the one, we negotiate and manage the offer process." },
                { step: "03", title: "Due Diligence", desc: "Legal checks, surveys, mortgage approval, tax structuring — all coordinated through your Azely portal." },
                { step: "04", title: "Keys & Beyond", desc: "Sign at the notary. Receive your keys. Then let us handle renovation, rental, and ongoing management." },
              ].map((step, i) => (
                <Reveal key={step.step} direction="up" delay={i * 150}>
                  <div>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "var(--terracotta)", lineHeight: 0.9, display: "block", marginBottom: "var(--space-lg)" }}>
                      {step.step}
                    </span>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 400, color: "#fff", marginBottom: "var(--space-sm)" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
                      {step.desc}
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
                Let&apos;s start your journey
              </h2>
              <div style={{ display: "flex", justifyContent: "center", gap: "var(--space-lg)", flexWrap: "wrap" }}>
                <Link href="/properties" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 36px", background: "var(--terracotta)", color: "#fff", fontSize: "var(--text-sm)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 14, transition: "all 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--espresso)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "var(--terracotta)"}
                >
                  Browse Properties
                </Link>
                <Link href="/team" style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 36px", border: "1px solid var(--border-medium)", color: "var(--text-primary)", fontSize: "var(--text-sm)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 14, transition: "all 0.3s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--terracotta)"; e.currentTarget.style.color = "var(--terracotta)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-medium)"; e.currentTarget.style.color = "var(--text-primary)"; }}
                >
                  For Agencies
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .service-row { grid-template-columns: 40px 1fr !important; }
          .service-row > :nth-child(3) { grid-column: 2; }
          .agency-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .agency-grid { grid-template-columns: 1fr !important; }
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </LocaleProvider>
  );
}
