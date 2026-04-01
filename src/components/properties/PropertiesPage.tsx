"use client";

import { useState } from "react";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { mockProperties } from "@/data/mockClients";
import Link from "next/link";
import type { Property } from "@/types";

type FilterType = "all" | "villa" | "apartment" | "finca" | "penthouse" | "townhouse";
type FilterRegion = "all" | "Costa Blanca" | "Costa del Sol" | "Mallorca";

export function PropertiesPage() {
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [regionFilter, setRegionFilter] = useState<FilterRegion>("all");

  const filtered = mockProperties.filter((p) => {
    if (typeFilter !== "all" && p.type !== typeFilter) return false;
    if (regionFilter !== "all" && p.region !== regionFilter) return false;
    return true;
  });

  const available = mockProperties.filter((p) => p.status === "available").length;

  return (
    <LocaleProvider>
      <Header />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "calc(var(--header-height) + var(--space-4xl))",
            paddingBottom: "var(--space-3xl)",
            background: "var(--espresso)",
          }}
        >
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            <Reveal direction="up">
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "var(--terracotta)",
                  display: "block",
                  marginBottom: "var(--space-lg)",
                }}
              >
                Portfolio — {available} Available
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "var(--cream)",
                  maxWidth: 600,
                  marginBottom: "var(--space-lg)",
                }}
              >
                Exceptional properties across the Mediterranean
              </h1>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p
                style={{
                  fontSize: "var(--text-base)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.4)",
                  maxWidth: 480,
                }}
              >
                Curated by our agents in Jávea, Marbella, and Mallorca. Every listing verified. Every detail confirmed.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Filters */}
        <section
          style={{
            background: "#000",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            position: "sticky",
            top: "var(--header-height)",
            zIndex: 30,
          }}
        >
          <div
            style={{
              maxWidth: "var(--max-content)",
              margin: "0 auto",
              padding: "var(--space-md) var(--space-2xl)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-xl)",
              flexWrap: "wrap",
            }}
          >
            {/* Type filters */}
            <div style={{ display: "flex", gap: 4 }}>
              {(["all", "villa", "apartment", "finca", "penthouse", "townhouse"] as FilterType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  style={{
                    padding: "8px 18px",
                    fontSize: 11,
                    fontWeight: typeFilter === t ? 500 : 300,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: typeFilter === t ? "#fff" : "rgba(255,255,255,0.35)",
                    background: typeFilter === t ? "var(--terracotta)" : "transparent",
                    borderRadius: 0,
                    borderBottomRightRadius: typeFilter === t ? 8 : 0,
                    transition: "all 0.25s ease",
                  }}
                >
                  {t === "all" ? "All" : t}
                </button>
              ))}
            </div>

            {/* Region filters */}
            <div style={{ display: "flex", gap: 4 }}>
              {(["all", "Costa Blanca", "Costa del Sol", "Mallorca"] as FilterRegion[]).map((r) => (
                <button
                  key={r}
                  onClick={() => setRegionFilter(r)}
                  style={{
                    padding: "8px 16px",
                    fontSize: 11,
                    fontWeight: regionFilter === r ? 500 : 300,
                    letterSpacing: "0.08em",
                    color: regionFilter === r ? "var(--gold)" : "rgba(255,255,255,0.25)",
                    background: "transparent",
                    borderBottom: regionFilter === r ? "1px solid var(--gold)" : "1px solid transparent",
                    transition: "all 0.25s ease",
                  }}
                >
                  {r === "all" ? "All Regions" : r}
                </button>
              ))}
            </div>

            {/* Count */}
            <span
              style={{
                fontSize: 11,
                fontWeight: 300,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.25)",
              }}
            >
              {filtered.length} {filtered.length === 1 ? "property" : "properties"}
            </span>
          </div>
        </section>

        {/* Listings */}
        <section style={{ padding: "var(--space-3xl) 0 var(--space-4xl)", background: "var(--bg-page)" }}>
          <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-2xl)" }}>
            {/* Featured — first property large */}
            {filtered.length > 0 && (
              <Reveal direction="up">
                <FeaturedCard property={filtered[0]} />
              </Reveal>
            )}

            {/* Grid — remaining */}
            {filtered.length > 1 && (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "var(--space-lg)",
                  marginTop: "var(--space-xl)",
                }}
                className="property-grid"
              >
                {filtered.slice(1).map((property, i) => (
                  <Reveal key={property.id} direction="up" delay={i * 80}>
                    <PropertyCard property={property} />
                  </Reveal>
                ))}
              </div>
            )}

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "var(--space-4xl) 0" }}>
                <p style={{ fontSize: "var(--text-lg)", fontWeight: 300, color: "var(--text-muted)" }}>
                  No properties match your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 1024px) {
          .property-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .featured-card { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .property-grid { grid-template-columns: 1fr !important; }
        }
        a:hover .card-img,
        a:hover .featured-img {
          transform: scale(1.05);
        }
      `}</style>
    </LocaleProvider>
  );
}

/* ── Featured (Large) Card ── */
function FeaturedCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      style={{
        display: "grid",
        gridTemplateColumns: "1.4fr 1fr",
        background: "var(--espresso)",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}
      className="featured-card"
      onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
    >
      {/* Image area */}
      <div
        style={{
          minHeight: 380,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: property.images[0]
              ? `url(${property.images[0]}) center/cover no-repeat`
              : "linear-gradient(135deg, var(--espresso-mid) 0%, var(--espresso-light) 100%)",
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          }}
          className="featured-img"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, transparent 60%, var(--espresso) 100%)" }} />
        <StatusBadge status={property.status} style={{ position: "absolute", top: 20, left: 20 }} />
      </div>

      {/* Content */}
      <div style={{ padding: "var(--space-2xl)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 300,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--terracotta)",
            marginBottom: "var(--space-md)",
          }}
        >
          Featured · {property.type}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-3xl)",
            fontWeight: 400,
            color: "var(--cream)",
            lineHeight: 1.1,
            marginBottom: "var(--space-sm)",
          }}
        >
          {property.name}
        </h2>
        <p
          style={{
            fontSize: "var(--text-sm)",
            fontWeight: 300,
            color: "rgba(255,255,255,0.35)",
            marginBottom: "var(--space-xl)",
          }}
        >
          {property.city}, {property.region}
        </p>

        {/* Specs */}
        <div style={{ display: "flex", gap: "var(--space-2xl)", marginBottom: "var(--space-xl)" }}>
          <SpecLight label="Bedrooms" value={property.bedrooms.toString()} />
          <SpecLight label="Bathrooms" value={property.bathrooms.toString()} />
          <SpecLight label="Area" value={`${property.area_m2} m²`} />
          {property.plot_m2 && <SpecLight label="Plot" value={`${property.plot_m2} m²`} />}
        </div>

        {/* Features */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "var(--space-xl)" }}>
          {property.features.slice(0, 4).map((f) => (
            <span
              key={f}
              style={{
                padding: "4px 12px",
                fontSize: 10,
                fontWeight: 300,
                letterSpacing: "0.06em",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--radius-full)",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "var(--space-md)" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-3xl)",
              fontWeight: 400,
              color: "var(--gold)",
            }}
          >
            €{property.price.toLocaleString()}
          </span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>
            €{Math.round(property.price / property.area_m2).toLocaleString()}/m²
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ── Standard Card ── */
function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.id}`}
      style={{
        display: "block",
        background: "var(--bg-card)",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        borderRadius: 0,
        borderBottomRightRadius: "var(--radius-xl)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(28,22,16,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div
        style={{
          height: 260,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: property.images[0]
              ? `url(${property.images[0]}) center/cover no-repeat`
              : "linear-gradient(135deg, #1a1510 0%, #2a2018 100%)",
            transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
          }}
          className="card-img"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(0,0,0,0.3) 0%, transparent 50%)" }} />
        <StatusBadge status={property.status} style={{ position: "absolute", top: 16, right: 16 }} />
        <span
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            fontSize: 10,
            fontWeight: 300,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {property.type}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "var(--space-lg) var(--space-lg) var(--space-xl)" }}>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-lg)",
            fontWeight: 400,
            marginBottom: 4,
            lineHeight: 1.25,
          }}
        >
          {property.name}
        </h3>
        <p
          style={{
            fontSize: 12,
            fontWeight: 300,
            color: "var(--text-muted)",
            letterSpacing: "0.04em",
            marginBottom: "var(--space-lg)",
          }}
        >
          {property.city}, {property.region}
        </p>

        {/* Specs row */}
        <div
          style={{
            display: "flex",
            gap: "var(--space-lg)",
            paddingBottom: "var(--space-md)",
            marginBottom: "var(--space-md)",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <Spec label="Bed" value={property.bedrooms.toString()} />
          <Spec label="Bath" value={property.bathrooms.toString()} />
          <Spec label="m²" value={property.area_m2.toString()} />
          {property.energy_rating && <Spec label="Energy" value={property.energy_rating} />}
        </div>

        {/* Price */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-xl)",
              fontWeight: 400,
              color: "var(--espresso)",
            }}
          >
            €{property.price.toLocaleString()}
          </span>
          <span style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.04em" }}>
            €{Math.round(property.price / property.area_m2).toLocaleString()}/m²
          </span>
        </div>
      </div>
    </Link>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 300, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{value}</div>
    </div>
  );
}

function SpecLight({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 9, fontWeight: 300, color: "rgba(255,255,255,0.25)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: "var(--text-base)", fontWeight: 400, color: "var(--cream)" }}>{value}</div>
    </div>
  );
}

function StatusBadge({ status, style }: { status: string; style?: React.CSSProperties }) {
  const config: Record<string, { bg: string; color: string }> = {
    available: { bg: "rgba(74,124,89,0.9)", color: "#fff" },
    reserved: { bg: "rgba(201,162,81,0.9)", color: "#fff" },
    sold: { bg: "rgba(181,74,74,0.85)", color: "#fff" },
    off_market: { bg: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" },
  };
  const c = config[status] ?? config.available;

  return (
    <span
      style={{
        ...style,
        padding: "5px 14px",
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: c.color,
        background: c.bg,
        backdropFilter: "blur(8px)",
        borderRadius: 0,
        borderBottomRightRadius: 8,
      }}
    >
      {status === "off_market" ? "Off Market" : status}
    </span>
  );
}
