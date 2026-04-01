export const metadata = { title: "Contractors" };

export default async function Contractors({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const contractors = [
    { name: "Construcciones García", specialty: "General Construction", rating: 4.8, reviews: 42, location: "Jávea", verified: true },
    { name: "Fontanería Costa Blanca", specialty: "Plumbing & Heating", rating: 4.6, reviews: 28, location: "Dénia", verified: true },
    { name: "ElectriSol Mediterranean", specialty: "Electrical & Solar", rating: 4.9, reviews: 35, location: "Jávea", verified: true },
    { name: "Cocinas & Baños Moderno", specialty: "Kitchen & Bathroom", rating: 4.7, reviews: 19, location: "Calpe", verified: true },
    { name: "PiscinasPro Alicante", specialty: "Pool Construction & Maintenance", rating: 4.5, reviews: 23, location: "Altea", verified: false },
    { name: "Jardines del Sur", specialty: "Landscaping & Irrigation", rating: 4.4, reviews: 15, location: "Jávea", verified: true },
    { name: "Pinturas Mediterráneo", specialty: "Interior & Exterior Painting", rating: 4.6, reviews: 31, location: "Moraira", verified: false },
    { name: "Muebles a Medida", specialty: "Custom Furniture & Carpentry", rating: 4.8, reviews: 12, location: "Jávea", verified: true },
  ];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-xl)" }}>
        <div>
          <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Contractor Marketplace</h1>
          <p style={{ color: "var(--text-muted)" }}>Vetted contractors in the Costa Blanca region.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "var(--space-md)" }}>
        {contractors.map((c) => (
          <div key={c.name} style={{ background: "var(--bg-card)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-subtle)", padding: "var(--space-lg)", transition: "all 0.2s", cursor: "pointer" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--terracotta)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-md)" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)" }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-base)", fontWeight: 500 }}>{c.name}</h3>
                  {c.verified && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="7" fill="var(--success)" />
                      <path d="M4 7l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: 2 }}>{c.specialty}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "var(--text-lg)", fontFamily: "var(--font-serif)", fontWeight: 600, color: "var(--gold)" }}>{c.rating}</div>
                <div style={{ fontSize: 10, color: "var(--text-muted)" }}>{c.reviews} reviews</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{c.location}</span>
              <button style={{ padding: "6px 16px", borderRadius: "var(--radius-full)", fontSize: "var(--text-xs)", fontWeight: 500, background: "var(--cream)", color: "var(--text-primary)", border: "1px solid var(--border-subtle)" }}>
                Contact
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
