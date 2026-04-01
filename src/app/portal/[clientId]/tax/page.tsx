export const metadata = { title: "Tax Dashboard" };

export default async function Tax({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await params;

  const taxItems = [
    { category: "Spain", items: [
      { name: "ITP (Transfer Tax)", amount: 68500, rate: "10%", status: "Due at signing" },
      { name: "AJD (Stamp Duty)", amount: 10275, rate: "1.5%", status: "Due at signing" },
      { name: "Plusvalía Municipal", amount: 2400, rate: "Variable", status: "Seller pays" },
      { name: "IBI (Annual Property Tax)", amount: 1850, rate: "~0.27%", status: "Annual" },
      { name: "Non-Resident Income Tax", amount: 3400, rate: "24%", status: "Annual" },
    ]},
    { category: "Netherlands", items: [
      { name: "Box 3 Wealth Tax", amount: 4100, rate: "~0.6%", status: "Annual declaration" },
      { name: "Double Tax Treaty", amount: 0, rate: "—", status: "NL-ES treaty applies" },
    ]},
  ];

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
        Cross-Border Tax Dashboard
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        NL → ES tax overview for Villa Mediterráneo (€685,000)
      </p>

      {taxItems.map((group) => (
        <div key={group.category} style={{ marginBottom: "var(--space-xl)" }}>
          <h2 style={{ fontSize: "var(--text-lg)", fontWeight: 600, marginBottom: "var(--space-md)", display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
            <span style={{ fontSize: 20 }}>{group.category === "Spain" ? "🇪🇸" : "🇳🇱"}</span>
            {group.category}
          </h2>
          <div
            style={{
              background: "var(--bg-card)",
              borderRadius: "var(--radius-xl)",
              border: "1px solid var(--border-subtle)",
              overflow: "hidden",
            }}
          >
            {group.items.map((item, i) => (
              <div
                key={item.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr 1fr 1fr",
                  padding: "var(--space-md) var(--space-xl)",
                  borderBottom: i < group.items.length - 1 ? "1px solid var(--border-subtle)" : "none",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{item.name}</span>
                <span style={{ fontSize: "var(--text-sm)", fontFamily: "var(--font-serif)", fontWeight: 600, color: item.amount > 0 ? "var(--terracotta)" : "var(--text-muted)" }}>
                  {item.amount > 0 ? `€${item.amount.toLocaleString()}` : "—"}
                </span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{item.rate}</span>
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Total */}
      <div
        style={{
          background: "var(--espresso)",
          borderRadius: "var(--radius-xl)",
          padding: "var(--space-xl)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ color: "var(--cream)", fontWeight: 600 }}>Estimated Total Tax Obligations (Year 1)</span>
        <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 600, color: "var(--gold)" }}>
          €90,525
        </span>
      </div>
    </div>
  );
}
