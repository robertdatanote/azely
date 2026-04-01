export const metadata = { title: "Compliance" };

export default async function Compliance({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await params;
  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
        Regulatory Compliance
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Navigate Spanish property regulations with confidence.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-md)" }}>
        {[
          { title: "NIE Number", status: "Obtained", detail: "X-1234567-Z", color: "var(--success)" },
          { title: "Nota Simple", status: "Requested", detail: "Registro de la Propiedad — Jávea", color: "var(--warning)" },
          { title: "ITP (Transfer Tax)", status: "Pending", detail: "10% of purchase price (Valencia region)", color: "var(--text-muted)" },
          { title: "AJD (Stamp Duty)", status: "Pending", detail: "1.5% for new builds", color: "var(--text-muted)" },
          { title: "Plusvalía Municipal", status: "Pending", detail: "Municipal capital gains tax", color: "var(--text-muted)" },
          { title: "Anti-Money Laundering", status: "Verified", detail: "KYC documentation complete", color: "var(--success)" },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "var(--bg-card)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-subtle)",
              padding: "var(--space-lg)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-sm)" }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-base)", fontWeight: 600 }}>
                {item.title}
              </h3>
              <span
                style={{
                  padding: "3px 10px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                  color: item.color,
                  background: item.color === "var(--success)" ? "var(--success-bg)" : item.color === "var(--warning)" ? "var(--warning-bg)" : "var(--bg-elevated)",
                }}
              >
                {item.status}
              </span>
            </div>
            <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
