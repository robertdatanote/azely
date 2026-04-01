export const metadata = { title: "Rental Management" };

export default async function RentalManagement({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const bookings = [
    { guest: "Familie Jansen", dates: "Oct 5–12", nights: 7, revenue: 1960, platform: "Airbnb", status: "confirmed" },
    { guest: "Smith Family", dates: "Oct 18–25", nights: 7, revenue: 1820, platform: "Booking.com", status: "confirmed" },
    { guest: "Müller & Co", dates: "Nov 1–8", nights: 7, revenue: 1540, platform: "Vrbo", status: "pending" },
    { guest: "Van Dijk", dates: "Nov 15–22", nights: 7, revenue: 1400, platform: "Direct", status: "inquiry" },
    { guest: "Cleaning Block", dates: "Oct 12–13", nights: 1, revenue: 0, platform: "—", status: "blocked" },
  ];

  const statusStyles: Record<string, { bg: string; color: string }> = {
    confirmed: { bg: "var(--success-bg)", color: "var(--success)" },
    pending: { bg: "var(--warning-bg)", color: "var(--warning)" },
    inquiry: { bg: "var(--info-bg)", color: "var(--info)" },
    blocked: { bg: "var(--bg-elevated)", color: "var(--text-muted)" },
  };

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Rental Management</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Booking calendar, guest management, and operational tasks.
      </p>

      {/* Quick stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }} className="rental-mgmt-stats">
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>This Month</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--terracotta)" }}>€3,780</div>
        </div>
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>Upcoming Bookings</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--gold)" }}>{bookings.filter(b => b.status !== "blocked").length}</div>
        </div>
        <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)" }}>
          <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>Occupancy Rate</div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-2xl)", fontWeight: 600, color: "var(--success)" }}>78%</div>
        </div>
      </div>

      {/* Bookings list */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
        <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-md)" }}>
          <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            Upcoming Bookings
          </h3>
        </div>
        {bookings.map((b, i) => {
          const s = statusStyles[b.status] ?? statusStyles.pending;
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 0.5fr 0.8fr 0.8fr 0.6fr", alignItems: "center", padding: "var(--space-md) var(--space-xl)", borderBottom: i < bookings.length - 1 ? "1px solid var(--border-subtle)" : "none", gap: "var(--space-md)" }}>
              <span style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{b.guest}</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{b.dates}</span>
              <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{b.nights}n</span>
              <span style={{ fontSize: "var(--text-sm)", fontFamily: "var(--font-serif)", fontWeight: 500 }}>{b.revenue > 0 ? `€${b.revenue}` : "—"}</span>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{b.platform}</span>
              <span style={{ padding: "3px 10px", borderRadius: "var(--radius-full)", fontSize: "var(--text-xs)", fontWeight: 600, background: s.bg, color: s.color, textTransform: "capitalize", textAlign: "center" }}>{b.status}</span>
            </div>
          );
        })}
      </div>

      <style>{`@media (max-width: 768px) { .rental-mgmt-stats { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
