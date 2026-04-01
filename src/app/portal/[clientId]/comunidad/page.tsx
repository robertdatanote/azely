export const metadata = { title: "Community" };

export default async function Comunidad({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Community Management</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Comunidad de Propietarios — Villa Mediterráneo, Jávea
      </p>

      {/* Overview cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }} className="comunidad-stats">
        <StatCard label="Monthly Fee" value="€185" sub="Paid quarterly — next: Jan 2026" />
        <StatCard label="Reserve Fund" value="€12,400" sub="Community pool: 24 units" />
        <StatCard label="Next Meeting" value="Mar 15" sub="AGM — Sala Municipal, Jávea" />
      </div>

      {/* Recent items */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "var(--space-lg)", fontFamily: "var(--font-sans)" }}>
          Community Updates
        </h3>
        {[
          { date: "2025-09-15", title: "Pool maintenance completed", type: "maintenance" },
          { date: "2025-09-10", title: "Q4 fees invoice received", type: "billing" },
          { date: "2025-08-28", title: "Garden irrigation system upgrade approved", type: "vote" },
          { date: "2025-08-15", title: "Fire safety inspection passed", type: "compliance" },
          { date: "2025-07-20", title: "New security camera installation", type: "maintenance" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", padding: "var(--space-sm) 0", borderBottom: i < 4 ? "1px solid var(--border-subtle)" : "none" }}>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", width: 80, flexShrink: 0 }}>{item.date}</span>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 400 }}>{item.title}</span>
            <span style={{ marginLeft: "auto", fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "capitalize", padding: "2px 8px", borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>{item.type}</span>
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "var(--space-xl)" }}>
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", marginBottom: "var(--space-lg)", fontFamily: "var(--font-sans)" }}>
          Key Contacts
        </h3>
        {[
          { name: "María López", role: "President", phone: "+34 612 345 678" },
          { name: "Gestión Costa Blanca", role: "Administrator", phone: "+34 965 789 012" },
          { name: "Fernando García", role: "Maintenance", phone: "+34 622 456 789" },
        ].map((contact, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", padding: "var(--space-sm) 0", borderBottom: i < 2 ? "1px solid var(--border-subtle)" : "none" }}>
            <div style={{ width: 32, height: 32, borderRadius: "var(--radius-full)", background: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "var(--espresso)" }}>
              {contact.name[0]}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{contact.name}</div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{contact.role}</div>
            </div>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{contact.phone}</span>
          </div>
        ))}
      </div>

      <style>{`@media (max-width: 768px) { .comunidad-stats { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
      <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{sub}</div>
    </div>
  );
}
