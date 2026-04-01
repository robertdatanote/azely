export const metadata = { title: "Utilities" };

export default async function Utilities({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const utilities = [
    { type: "Electricity", provider: "Iberdrola", status: "active", account: "ES-4521-8876", monthly: "€85" },
    { type: "Water", provider: "Aqualia", status: "active", account: "AQ-7823-001", monthly: "€35" },
    { type: "Gas", provider: "Naturgy", status: "setup", account: "Pending", monthly: "€45 est." },
    { type: "Internet + TV", provider: "Movistar Fibra", status: "active", account: "MV-334-2211", monthly: "€52" },
    { type: "Home Insurance", provider: "Mapfre", status: "active", account: "POL-889234", monthly: "€68" },
    { type: "Community Alarm", provider: "Securitas Direct", status: "pending", account: "—", monthly: "€42 est." },
  ];

  const statusStyles: Record<string, { bg: string; color: string }> = {
    active: { bg: "var(--success-bg)", color: "var(--success)" },
    setup: { bg: "var(--warning-bg)", color: "var(--warning)" },
    pending: { bg: "var(--bg-elevated)", color: "var(--text-muted)" },
  };

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Utilities Setup</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Track and manage all utility connections for your property.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "var(--space-md)" }}>
        {utilities.map((u) => {
          const s = statusStyles[u.status] ?? statusStyles.pending;
          return (
            <div key={u.type} style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", fontWeight: 500 }}>{u.type}</h3>
                <span style={{ padding: "3px 10px", borderRadius: "var(--radius-full)", fontSize: "var(--text-xs)", fontWeight: 600, background: s.bg, color: s.color, textTransform: "capitalize" }}>
                  {u.status}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-sm)" }}>
                <Detail label="Provider" value={u.provider} />
                <Detail label="Account" value={u.account} />
                <Detail label="Monthly" value={u.monthly} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{label}</div>
      <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{value}</div>
    </div>
  );
}
