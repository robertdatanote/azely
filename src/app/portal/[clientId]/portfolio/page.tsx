import { mockProperties } from "@/data/mockClients";

export const metadata = { title: "Portfolio" };

export default async function Portfolio({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const properties = mockProperties.slice(0, 3);
  const totalValue = properties.reduce((s, p) => s + p.price, 0);

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Portfolio</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Multi-property overview and performance tracking.
      </p>

      {/* Portfolio summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }} className="portfolio-stats">
        <SummaryCard label="Total Value" value={`€${(totalValue / 1000).toFixed(0)}k`} accent="var(--gold)" />
        <SummaryCard label="Properties" value={properties.length.toString()} accent="var(--terracotta)" />
        <SummaryCard label="Annual Yield" value="5.2%" accent="var(--success)" />
        <SummaryCard label="Occupancy" value="78%" accent="var(--info)" />
      </div>

      {/* Property list */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
        <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-md)" }}>
          <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            Properties
          </h3>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              {["Property", "Type", "Location", "Value", "Status"].map(h => (
                <th key={h} style={{ padding: "var(--space-sm) var(--space-xl)", textAlign: "left", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)", fontWeight: 500 }}>{p.name}</td>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)", textTransform: "capitalize" }}>{p.type}</td>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{p.city}</td>
                <td style={{ padding: "var(--space-md) var(--space-xl)", fontSize: "var(--text-sm)", fontFamily: "var(--font-serif)", fontWeight: 600, color: "var(--terracotta)" }}>€{p.price.toLocaleString()}</td>
                <td style={{ padding: "var(--space-md) var(--space-xl)" }}>
                  <span style={{
                    padding: "3px 10px", borderRadius: "var(--radius-full)", fontSize: "var(--text-xs)", fontWeight: 600, textTransform: "capitalize",
                    background: p.status === "available" ? "var(--success-bg)" : p.status === "reserved" ? "var(--warning-bg)" : p.status === "sold" ? "var(--error-bg)" : "var(--bg-elevated)",
                    color: p.status === "available" ? "var(--success)" : p.status === "reserved" ? "var(--warning)" : p.status === "sold" ? "var(--error)" : "var(--text-muted)",
                  }}>{p.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Performance chart placeholder */}
      <div style={{ marginTop: "var(--space-lg)", background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "var(--space-xl)" }}>
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "var(--space-lg)", fontFamily: "var(--font-sans)" }}>
          Portfolio Value Over Time
        </h3>
        <svg width="100%" height="180" viewBox="0 0 600 180" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--terracotta)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--terracotta)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 140 L100 120 L200 110 L300 95 L400 70 L500 55 L600 40 L600 180 L0 180Z" fill="url(#areaGrad)" />
          <path d="M0 140 L100 120 L200 110 L300 95 L400 70 L500 55 L600 40" fill="none" stroke="var(--terracotta)" strokeWidth="2" />
          {[0, 100, 200, 300, 400, 500, 600].map((x, i) => (
            <text key={x} x={x} y={175} textAnchor="middle" fontSize="10" fill="var(--text-muted)" fontFamily="var(--font-sans)">
              {["Jan", "Mar", "May", "Jul", "Sep", "Nov", "Jan"][i]}
            </text>
          ))}
        </svg>
      </div>

      <style>{`@media (max-width: 768px) { .portfolio-stats { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
    </div>
  );
}

function SummaryCard({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
      <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 600, color: accent, lineHeight: 1 }}>{value}</div>
    </div>
  );
}
