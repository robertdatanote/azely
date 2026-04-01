export const metadata = { title: "Dynamic Pricing" };

export default async function Pricing({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const months = [
    { month: "Jan", low: 90, high: 150, occupancy: 35 },
    { month: "Feb", low: 95, high: 160, occupancy: 40 },
    { month: "Mar", low: 110, high: 180, occupancy: 55 },
    { month: "Apr", low: 130, high: 210, occupancy: 65 },
    { month: "May", low: 150, high: 240, occupancy: 75 },
    { month: "Jun", low: 180, high: 280, occupancy: 85 },
    { month: "Jul", low: 220, high: 350, occupancy: 95 },
    { month: "Aug", low: 230, high: 360, occupancy: 98 },
    { month: "Sep", low: 170, high: 260, occupancy: 80 },
    { month: "Oct", low: 130, high: 200, occupancy: 60 },
    { month: "Nov", low: 95, high: 155, occupancy: 38 },
    { month: "Dec", low: 110, high: 190, occupancy: 50 },
  ];

  const maxHigh = Math.max(...months.map(m => m.high));

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Dynamic Pricing</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Optimal nightly rates based on seasonality, demand, and competitor analysis.
      </p>

      {/* Chart */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "var(--space-lg)", fontFamily: "var(--font-sans)" }}>
          Recommended Nightly Rates (€)
        </h3>
        <svg width="100%" height="220" viewBox="0 0 700 220" preserveAspectRatio="xMidYMid meet">
          {months.map((m, i) => {
            const barW = 40;
            const gap = (700 - months.length * barW) / (months.length + 1);
            const x = gap + i * (barW + gap);
            const lowH = (m.low / maxHigh) * 160;
            const highH = (m.high / maxHigh) * 160;

            return (
              <g key={m.month}>
                {/* High bar */}
                <rect x={x} y={180 - highH} width={barW} height={highH} rx={4} fill="var(--terracotta)" opacity={0.2} />
                {/* Low bar */}
                <rect x={x + 8} y={180 - lowH} width={barW - 16} height={lowH} rx={3} fill="var(--terracotta)" />
                {/* Labels */}
                <text x={x + barW / 2} y={195} textAnchor="middle" fontSize="10" fill="var(--text-muted)" fontFamily="var(--font-sans)">{m.month}</text>
                <text x={x + barW / 2} y={180 - highH - 6} textAnchor="middle" fontSize="9" fill="var(--text-muted)" fontFamily="var(--font-sans)">€{m.high}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Rate table */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
              {["Month", "Low Season", "High Season", "Recommended", "Occupancy"].map(h => (
                <th key={h} style={{ padding: "var(--space-md) var(--space-xl)", textAlign: "left", fontSize: "var(--text-xs)", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {months.map(m => (
              <tr key={m.month} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                <td style={{ padding: "var(--space-sm) var(--space-xl)", fontSize: "var(--text-sm)", fontWeight: 500 }}>{m.month}</td>
                <td style={{ padding: "var(--space-sm) var(--space-xl)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>€{m.low}</td>
                <td style={{ padding: "var(--space-sm) var(--space-xl)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>€{m.high}</td>
                <td style={{ padding: "var(--space-sm) var(--space-xl)", fontSize: "var(--text-sm)", fontFamily: "var(--font-serif)", fontWeight: 600, color: "var(--terracotta)" }}>€{Math.round((m.low + m.high) / 2)}</td>
                <td style={{ padding: "var(--space-sm) var(--space-xl)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                    <div style={{ width: 50, height: 4, borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>
                      <div style={{ height: "100%", width: `${m.occupancy}%`, borderRadius: "var(--radius-full)", background: m.occupancy > 80 ? "var(--success)" : m.occupancy > 50 ? "var(--gold)" : "var(--text-muted)" }} />
                    </div>
                    <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{m.occupancy}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
