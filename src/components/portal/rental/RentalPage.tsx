"use client";

import { mockRentalProjection, mockRentalMonths } from "@/data/mockClients";

export function RentalPage({ clientId }: { clientId: string }) {
  const projection = mockRentalProjection;
  const months = mockRentalMonths;
  const maxRevenue = Math.max(...months.map((m) => m.revenue));

  return (
    <div>
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
          Rental Dashboard
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          Licence: {projection.licence_number ?? "Pending"} · Platforms: {projection.platforms.join(", ")}
        </p>
      </div>

      {/* Stats */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }}
        className="rental-stats"
      >
        <StatCard label="Est. Annual Revenue" value={`€${projection.annual_revenue_estimate.toLocaleString()}`} accent="var(--gold)" />
        <StatCard label="Nightly Rate" value={`€${projection.nightly_low}–${projection.nightly_high}`} accent="var(--terracotta)" />
        <StatCard label="Target Occupancy" value={`${projection.occupancy_target}%`} accent="var(--success)" />
        <StatCard label="Platforms" value={`${projection.platforms.length}`} accent="var(--info)" />
      </div>

      {/* Revenue chart (SVG bar chart) */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          padding: "var(--space-xl)",
          marginBottom: "var(--space-lg)",
        }}
      >
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", marginBottom: "var(--space-lg)", fontFamily: "var(--font-sans)" }}>
          Monthly Revenue
        </h3>

        <svg width="100%" height="200" viewBox="0 0 600 200" preserveAspectRatio="xMidYMid meet">
          {months.map((m, i) => {
            const barWidth = 60;
            const gap = (600 - months.length * barWidth) / (months.length + 1);
            const x = gap + i * (barWidth + gap);
            const barHeight = (m.revenue / maxRevenue) * 150;
            const y = 170 - barHeight;
            const monthLabel = m.month.split("-")[1];

            return (
              <g key={m.id}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  rx={6}
                  fill="url(#barGrad)"
                  opacity={0.9}
                />
                {/* Value label */}
                <text
                  x={x + barWidth / 2}
                  y={y - 8}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--text-muted)"
                  fontFamily="var(--font-sans)"
                >
                  €{(m.revenue / 1000).toFixed(1)}k
                </text>
                {/* Month label */}
                <text
                  x={x + barWidth / 2}
                  y={192}
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--text-muted)"
                  fontFamily="var(--font-sans)"
                >
                  {monthLabel}
                </text>
              </g>
            );
          })}
          <defs>
            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--terracotta)" />
              <stop offset="100%" stopColor="var(--gold)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Occupancy table */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          overflow: "hidden",
        }}
      >
        <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-md)" }}>
          <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            Monthly Breakdown
          </h3>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              {["Month", "Revenue", "Occupancy", "Bookings"].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: "var(--space-sm) var(--space-xl)",
                    textAlign: "left",
                    fontSize: "var(--text-xs)",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "var(--tracking-wide)",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {months.map((m) => (
              <tr key={m.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)", fontWeight: 500 }}>
                  {m.month}
                </td>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)" }}>
                  €{m.revenue.toLocaleString()}
                </td>
                <td style={{ padding: "var(--space-md) var(--space-xl)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <div style={{ width: 60, height: 4, borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>
                      <div style={{ height: "100%", width: `${m.occupancy}%`, borderRadius: "var(--radius-full)", background: m.occupancy > 80 ? "var(--success)" : "var(--gold)" }} />
                    </div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{m.occupancy}%</span>
                  </div>
                </td>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                  {m.bookings}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .rental-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

function StatCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
      <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>
        {label}
      </div>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: accent, lineHeight: 1 }}>
        {value}
      </div>
    </div>
  );
}
