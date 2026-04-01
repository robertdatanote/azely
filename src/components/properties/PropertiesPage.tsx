"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { mockProperties } from "@/data/mockClients";
import Link from "next/link";
import type { Property } from "@/types";

const typeColors: Record<string, string> = {
  villa: "var(--terracotta)",
  apartment: "var(--info)",
  finca: "var(--gold)",
  penthouse: "var(--success)",
  townhouse: "var(--terracotta-dim)",
  plot: "var(--text-muted)",
};

const statusBadge: Record<string, { bg: string; color: string }> = {
  available: { bg: "var(--success-bg)", color: "var(--success)" },
  reserved: { bg: "var(--warning-bg)", color: "var(--warning)" },
  sold: { bg: "var(--error-bg)", color: "var(--error)" },
  off_market: { bg: "var(--bg-elevated)", color: "var(--text-muted)" },
};

export function PropertiesPage() {
  return (
    <LocaleProvider>
      <Header />
      <main style={{ paddingTop: "calc(var(--header-height) + var(--space-2xl))", paddingBottom: "var(--space-4xl)" }}>
        <div style={{ maxWidth: "var(--max-content)", margin: "0 auto", padding: "0 var(--space-lg)" }}>
          <div style={{ marginBottom: "var(--space-2xl)" }}>
            <h1 style={{ fontSize: "var(--text-4xl)", fontWeight: 500, marginBottom: "var(--space-sm)" }}>
              Properties
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "var(--text-lg)" }}>
              Discover exceptional properties across Spain&apos;s most coveted coastal regions.
            </p>
          </div>

          {/* Filter bar */}
          <div
            style={{
              display: "flex",
              gap: "var(--space-sm)",
              marginBottom: "var(--space-xl)",
              flexWrap: "wrap",
            }}
          >
            {["All", "Villa", "Apartment", "Finca", "Penthouse"].map((type) => (
              <button
                key={type}
                style={{
                  padding: "8px 20px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  background: type === "All" ? "var(--espresso)" : "var(--bg-card)",
                  color: type === "All" ? "var(--cream)" : "var(--text-secondary)",
                  border: type === "All" ? "none" : "1px solid var(--border-medium)",
                  transition: "all var(--duration-fast) var(--ease-out)",
                }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Property grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "var(--space-lg)",
            }}
          >
            {mockProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </LocaleProvider>
  );
}

function PropertyCard({ property }: { property: Property }) {
  const status = statusBadge[property.status] ?? statusBadge.available;
  const typeColor = typeColors[property.type] ?? "var(--text-muted)";

  return (
    <Link
      href={`/portal/client-1/dashboard`}
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-subtle)",
        overflow: "hidden",
        transition: "all var(--duration-normal) var(--ease-out)",
        display: "block",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "var(--shadow-xl)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: 220,
          background: `linear-gradient(135deg, var(--espresso-mid) 0%, var(--espresso-light) 100%)`,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Abstract property visualization */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity={0.3}>
          <rect x="10" y="30" width="60" height="40" rx="4" stroke="var(--cream)" strokeWidth="1.5" />
          <path d="M5 35L40 10L75 35" stroke="var(--cream)" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="30" y="45" width="20" height="25" rx="2" stroke="var(--cream)" strokeWidth="1.5" />
        </svg>

        {/* Status badge */}
        <span
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            padding: "4px 12px",
            borderRadius: "var(--radius-full)",
            background: status.bg,
            color: status.color,
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {property.status}
        </span>

        {/* Type badge */}
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            padding: "4px 12px",
            borderRadius: "var(--radius-full)",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            color: "var(--cream)",
            fontSize: "var(--text-xs)",
            fontWeight: 600,
            textTransform: "capitalize",
          }}
        >
          {property.type}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "var(--space-lg)" }}>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-xl)",
            fontWeight: 600,
            marginBottom: 4,
          }}
        >
          {property.name}
        </h3>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginBottom: "var(--space-md)" }}>
          {property.city}, {property.region}
        </p>

        {/* Features row */}
        <div style={{ display: "flex", gap: "var(--space-lg)", marginBottom: "var(--space-md)" }}>
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
              fontSize: "var(--text-2xl)",
              fontWeight: 600,
              color: typeColor,
            }}
          >
            €{property.price.toLocaleString()}
          </span>
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
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
      <div style={{ fontSize: 10, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </div>
      <div style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>{value}</div>
    </div>
  );
}
