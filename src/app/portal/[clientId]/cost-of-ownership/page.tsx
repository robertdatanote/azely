export const metadata = { title: "Cost of Ownership" };

export default async function CostOfOwnership({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const purchasePrice = 685000;

  const costs = {
    purchase: [
      { item: "Purchase Price", amount: purchasePrice },
      { item: "ITP (Transfer Tax — 10%)", amount: 68500 },
      { item: "Notary Fees", amount: 1800 },
      { item: "Land Registry", amount: 1200 },
      { item: "Legal Fees", amount: 4500 },
      { item: "Mortgage Arrangement", amount: 2400 },
    ],
    annual: [
      { item: "IBI (Property Tax)", amount: 1850 },
      { item: "Basura (Waste Collection)", amount: 180 },
      { item: "Community Fees", amount: 2220 },
      { item: "Home Insurance", amount: 820 },
      { item: "Non-Resident Income Tax", amount: 3400 },
      { item: "NL Box 3 (Wealth Tax)", amount: 4100 },
      { item: "Utilities (est.)", amount: 3600 },
      { item: "Maintenance Reserve", amount: 3000 },
    ],
  };

  const purchaseTotal = costs.purchase.reduce((s, c) => s + c.amount, 0);
  const annualTotal = costs.annual.reduce((s, c) => s + c.amount, 0);

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Cost of Ownership</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Complete cost breakdown for Villa Mediterráneo, Jávea (€{purchasePrice.toLocaleString()})
      </p>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }} className="cost-summary">
        <div style={{ background: "var(--espresso)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-wheat)", opacity: 0.6, marginBottom: "var(--space-sm)" }}>Total Purchase</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 500, color: "var(--cream)" }}>€{purchaseTotal.toLocaleString()}</div>
        </div>
        <div style={{ background: "var(--espresso)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-wheat)", opacity: 0.6, marginBottom: "var(--space-sm)" }}>Annual Running</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 500, color: "var(--cream)" }}>€{annualTotal.toLocaleString()}</div>
        </div>
        <div style={{ background: "var(--espresso)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 400, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-wheat)", opacity: 0.6, marginBottom: "var(--space-sm)" }}>Monthly Cost</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 500, color: "var(--cream)" }}>€{Math.round(annualTotal / 12).toLocaleString()}</div>
        </div>
      </div>

      {/* Purchase costs */}
      <CostTable title="Purchase Costs (One-Time)" items={costs.purchase} total={purchaseTotal} />

      <div style={{ height: "var(--space-lg)" }} />

      {/* Annual costs */}
      <CostTable title="Annual Running Costs" items={costs.annual} total={annualTotal} />

      <style>{`@media (max-width: 768px) { .cost-summary { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function CostTable({ title, items, total }: { title: string; items: { item: string; amount: number }[]; total: number }) {
  return (
    <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
      <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-md)" }}>
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
          {title}
        </h3>
      </div>
      {items.map((cost, i) => (
        <div key={cost.item} style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-sm) var(--space-xl)", borderBottom: "1px solid var(--border-subtle)" }}>
          <span style={{ fontSize: "var(--text-sm)" }}>{cost.item}</span>
          <span style={{ fontSize: "var(--text-sm)", fontFamily: "var(--font-serif)", fontWeight: 500 }}>€{cost.amount.toLocaleString()}</span>
        </div>
      ))}
      <div style={{ display: "flex", justifyContent: "space-between", padding: "var(--space-md) var(--space-xl)", background: "var(--cream)" }}>
        <span style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>Total</span>
        <span style={{ fontSize: "var(--text-base)", fontFamily: "var(--font-serif)", fontWeight: 700, color: "var(--terracotta)" }}>€{total.toLocaleString()}</span>
      </div>
    </div>
  );
}
