export const metadata = { title: "Onboarding" };

export default async function Onboarding({ params }: { params: Promise<{ clientId: string }> }) {
  const { clientId } = await params;

  const steps = [
    { title: "Account Created", status: "completed", detail: "Profile verified via Clerk authentication" },
    { title: "Identity Verification", status: "completed", detail: "Passport uploaded and verified (NL)" },
    { title: "NIE Application", status: "completed", detail: "NIE X-1234567-Z obtained — Alicante office" },
    { title: "Spanish Bank Account", status: "active", detail: "CaixaBank non-resident account — awaiting confirmation" },
    { title: "Power of Attorney", status: "pending", detail: "Required for remote notary signing" },
    { title: "Tax Representative", status: "pending", detail: "Fiscal representative for non-resident tax obligations" },
    { title: "Preference Profile", status: "completed", detail: "Budget €500k–€750k · Costa Blanca · Villa · 4+ bed" },
    { title: "Agent Assignment", status: "completed", detail: "Assigned to Carlos Martínez — Jávea office" },
  ];

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Onboarding</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Complete these steps to get started with your property journey.
      </p>

      {/* Progress */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", padding: "var(--space-xl)", marginBottom: "var(--space-lg)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-sm)" }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>Onboarding Progress</span>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            {steps.filter(s => s.status === "completed").length}/{steps.length} completed
          </span>
        </div>
        <div style={{ height: 6, borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>
          <div style={{ height: "100%", width: `${(steps.filter(s => s.status === "completed").length / steps.length) * 100}%`, borderRadius: "var(--radius-full)", background: "linear-gradient(90deg, var(--success), var(--gold))" }} />
        </div>
      </div>

      {/* Steps */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
        {steps.map((step, i) => (
          <div key={step.title} style={{ display: "flex", alignItems: "center", gap: "var(--space-md)", padding: "var(--space-md) var(--space-xl)", borderBottom: i < steps.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              background: step.status === "completed" ? "var(--success)" : step.status === "active" ? "var(--terracotta)" : "var(--bg-elevated)",
              color: step.status === "pending" ? "var(--text-muted)" : "#fff",
              fontSize: 12, fontWeight: 600,
              boxShadow: step.status === "active" ? "0 0 0 3px rgba(181,101,74,0.15)" : "none",
            }}>
              {step.status === "completed" ? "✓" : step.status === "active" ? "●" : (i + 1)}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "var(--text-sm)", fontWeight: step.status === "active" ? 600 : 400, color: step.status === "pending" ? "var(--text-muted)" : "var(--text-primary)" }}>
                {step.title}
              </div>
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 2 }}>{step.detail}</div>
            </div>
            <span style={{
              padding: "3px 10px", borderRadius: "var(--radius-full)", fontSize: "var(--text-xs)", fontWeight: 600, textTransform: "capitalize",
              background: step.status === "completed" ? "var(--success-bg)" : step.status === "active" ? "rgba(181,101,74,0.1)" : "var(--bg-elevated)",
              color: step.status === "completed" ? "var(--success)" : step.status === "active" ? "var(--terracotta)" : "var(--text-muted)",
            }}>
              {step.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
