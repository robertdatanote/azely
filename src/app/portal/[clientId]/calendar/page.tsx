export const metadata = { title: "Calendar" };

export default async function Calendar({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonth = 9; // October (0-indexed)

  const events = [
    { date: "Oct 2", title: "Building survey — Villa Mediterráneo", type: "inspection", color: "var(--terracotta)" },
    { date: "Oct 8", title: "Mortgage documents deadline — ING", type: "deadline", color: "var(--error)" },
    { date: "Oct 15", title: "Tax advisor meeting — NL/ES structure", type: "meeting", color: "var(--info)" },
    { date: "Oct 22", title: "Renovation phase 3 review — Kitchen", type: "renovation", color: "var(--gold)" },
    { date: "Nov 5", title: "Energy certificate inspection", type: "inspection", color: "var(--terracotta)" },
    { date: "Nov 10", title: "Notary pre-signing review", type: "legal", color: "var(--success)" },
    { date: "Nov 15", title: "Notary signing — Escritura pública", type: "milestone", color: "var(--success)" },
    { date: "Dec 1", title: "IBI annual payment due", type: "deadline", color: "var(--error)" },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Compliance Calendar</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Deadlines, appointments, and milestones for your property journey.
      </p>

      {/* Upcoming events */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
        <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-md)" }}>
          <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            Upcoming
          </h3>
        </div>
        {events.map((event, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", padding: "var(--space-md) var(--space-xl)", borderBottom: i < events.length - 1 ? "1px solid var(--border-subtle)" : "none", transition: "background 0.2s", cursor: "default" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--cream)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ width: 4, height: 32, borderRadius: 2, background: event.color, flexShrink: 0 }} />
            <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", width: 70, flexShrink: 0, fontWeight: 500 }}>{event.date}</span>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 400, flex: 1 }}>{event.title}</span>
            <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "capitalize", padding: "2px 8px", borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>{event.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
