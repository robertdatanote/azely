"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { mockProperties } from "@/data/mockClients";
import Link from "next/link";

export function PropertyDetailPage({ propertyId }: { propertyId: string }) {
  const property = mockProperties.find((p) => p.id === propertyId) ?? mockProperties[0];

  return (
    <LocaleProvider>
      <Header />
      <main>
        {/* Hero — full-bleed dark with property image area */}
        <section
          style={{
            paddingTop: "var(--header-height)",
            background: "var(--espresso)",
            minHeight: "70vh",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
          className="detail-hero"
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: property.images[0] ? `url(${property.images[0]})` : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                background: property.images[0] ? undefined : "linear-gradient(135deg, #1a1510 0%, #2a2018 100%)",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 50%, rgba(28,22,16,0.6) 100%)" }} />

            {/* Back link */}
            <Link
              href="/properties"
              style={{
                position: "absolute",
                top: "var(--space-xl)",
                left: "var(--space-xl)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: 11,
                fontWeight: 300,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#fff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 7H1m0 0l5 5M1 7l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </Link>
          </div>

          {/* Details */}
          <div style={{ padding: "var(--space-3xl)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Reveal direction="up">
              <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-md)" }}>
                {property.type} · {property.region}
              </span>
              <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-0.03em", color: "var(--cream)", marginBottom: "var(--space-sm)" }}>
                {property.name}
              </h1>
              <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "rgba(255,255,255,0.35)", marginBottom: "var(--space-2xl)" }}>
                {property.address} · {property.city}
              </p>
            </Reveal>

            <Reveal direction="up" delay={150}>
              {/* Price */}
              <div style={{ marginBottom: "var(--space-2xl)" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "var(--gold)" }}>
                  €{property.price.toLocaleString()}
                </span>
                <span style={{ marginLeft: "var(--space-md)", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
                  €{Math.round(property.price / property.area_m2).toLocaleString()}/m²
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              {/* Key specs */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-xl)", paddingTop: "var(--space-xl)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <DetailSpec label="Bedrooms" value={property.bedrooms.toString()} />
                <DetailSpec label="Bathrooms" value={property.bathrooms.toString()} />
                <DetailSpec label="Living Area" value={`${property.area_m2} m²`} />
                {property.plot_m2 ? <DetailSpec label="Plot" value={`${property.plot_m2} m²`} /> : <DetailSpec label="Energy" value={property.energy_rating ?? "—"} />}
              </div>
            </Reveal>

            <Reveal direction="up" delay={350}>
              <div style={{ marginTop: "var(--space-2xl)", display: "flex", gap: "var(--space-md)" }}>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px",
                    background: "var(--terracotta)", color: "#fff", fontSize: 12, fontWeight: 400,
                    letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 12,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--terracotta)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "var(--terracotta)"; e.currentTarget.style.color = "#fff"; }}
                >
                  Schedule Viewing
                </Link>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 10, padding: "14px 32px",
                    border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", fontSize: 12, fontWeight: 300,
                    letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 12,
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "#fff"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                >
                  Request Info
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Features + Details */}
        <section style={{ padding: "var(--space-4xl) 0", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4xl)" }} className="detail-grid">
              {/* Features */}
              <Reveal direction="up">
                <div>
                  <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                    Features
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-sm)" }}>
                    {property.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex", alignItems: "center", gap: "var(--space-sm)",
                          padding: "var(--space-sm) 0",
                          borderBottom: "1px solid var(--border-subtle)",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7l3 3 5-5" stroke="var(--terracotta)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-secondary)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Property details */}
              <Reveal direction="up" delay={150}>
                <div>
                  <span style={{ fontSize: 11, fontWeight: 300, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "var(--space-lg)" }}>
                    Property Details
                  </span>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {[
                      { label: "Type", value: property.type },
                      { label: "City", value: property.city },
                      { label: "Region", value: property.region },
                      { label: "Living Area", value: `${property.area_m2} m²` },
                      ...(property.plot_m2 ? [{ label: "Plot Size", value: `${property.plot_m2} m²` }] : []),
                      { label: "Bedrooms", value: property.bedrooms.toString() },
                      { label: "Bathrooms", value: property.bathrooms.toString() },
                      { label: "Energy Rating", value: property.energy_rating ?? "Not rated" },
                      { label: "Year Built", value: property.year_built?.toString() ?? "Unknown" },
                      { label: "Status", value: property.status },
                    ].map((d) => (
                      <div key={d.label} style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) 0", borderBottom: "1px solid var(--border-subtle)" }}>
                        <span style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "var(--text-muted)" }}>{d.label}</span>
                        <span style={{ fontSize: "var(--text-sm)", fontWeight: 500, textTransform: "capitalize" }}>{d.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "var(--space-3xl) 0", background: "#000", textAlign: "center" }}>
          <Reveal direction="up">
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 400, color: "#fff", marginBottom: "var(--space-md)" }}>
              Interested in {property.name}?
            </h2>
            <p style={{ fontSize: "var(--text-base)", fontWeight: 300, color: "rgba(255,255,255,0.35)", marginBottom: "var(--space-xl)" }}>
              Our agents in {property.city} are ready to arrange a viewing.
            </p>
            <Link
              href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 40px", background: "var(--terracotta)", color: "#fff", fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", borderRadius: 0, borderBottomRightRadius: 14, transition: "all 0.3s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--terracotta)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--terracotta)"; e.currentTarget.style.color = "#fff"; }}
            >
              Contact Agent
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12m0 0L8 2m5 5L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .detail-hero { grid-template-columns: 1fr !important; }
          .detail-hero > :first-child { min-height: 300px; }
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </LocaleProvider>
  );
}

function DetailSpec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 300, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 400, color: "var(--cream)" }}>
        {value}
      </div>
    </div>
  );
}
