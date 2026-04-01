"use client";

import { mockRenovation, mockRenovationPhases } from "@/data/mockClients";

const phaseStatusColors: Record<string, { bg: string; color: string }> = {
  completed: { bg: "var(--success-bg)", color: "var(--success)" },
  in_progress: { bg: "rgba(181, 101, 74, 0.1)", color: "var(--terracotta)" },
  planned: { bg: "var(--bg-elevated)", color: "var(--text-muted)" },
  on_hold: { bg: "var(--warning-bg)", color: "var(--warning)" },
};

export function RenovationPage({ clientId }: { clientId: string }) {
  const project = mockRenovation;
  const phases = mockRenovationPhases;
  const budgetUsed = Math.round((project.spent / project.budget) * 100);

  return (
    <div>
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
          Renovation Management
        </h1>
        <p style={{ color: "var(--text-muted)" }}>{project.name}</p>
      </div>

      {/* Overview cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-md)",
          marginBottom: "var(--space-xl)",
        }}
        className="reno-stats"
      >
        <OverviewCard label="Total Budget" value={`€${project.budget.toLocaleString()}`} />
        <OverviewCard label="Spent" value={`€${project.spent.toLocaleString()}`} sub={`${budgetUsed}% of budget`} />
        <OverviewCard label="Completion" value={`${project.completion}%`} />
        <OverviewCard label="Project Manager" value={project.project_manager ?? "—"} />
      </div>

      {/* Budget bar */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          padding: "var(--space-xl)",
          marginBottom: "var(--space-lg)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-md)" }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)" }}>
            Budget Progress
          </span>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            €{project.spent.toLocaleString()} / €{project.budget.toLocaleString()}
          </span>
        </div>
        <div style={{ height: 10, borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>
          <div
            style={{
              height: "100%",
              width: `${budgetUsed}%`,
              borderRadius: "var(--radius-full)",
              background: budgetUsed > 90 ? "var(--error)" : "linear-gradient(90deg, var(--gold), var(--terracotta))",
              transition: "width 0.6s var(--ease-out)",
            }}
          />
        </div>
      </div>

      {/* Phases */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          padding: "var(--space-xl)",
        }}
      >
        <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", color: "var(--text-muted)", marginBottom: "var(--space-lg)", fontFamily: "var(--font-sans)" }}>
          Phases
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {phases.map((phase) => {
            const statusStyle = phaseStatusColors[phase.status] ?? phaseStatusColors.planned;
            return (
              <div
                key={phase.id}
                style={{
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-lg)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-md)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", fontWeight: 600 }}>
                      {phase.name}
                    </span>
                    <span
                      style={{
                        padding: "3px 10px",
                        borderRadius: "var(--radius-full)",
                        background: statusStyle.bg,
                        color: statusStyle.color,
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        textTransform: "capitalize",
                      }}
                    >
                      {phase.status.replace(/_/g, " ")}
                    </span>
                  </div>
                  <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
                    €{phase.spent.toLocaleString()} / €{phase.budget.toLocaleString()}
                  </span>
                </div>

                {/* Phase progress bar */}
                <div style={{ height: 6, borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${phase.progress}%`,
                      borderRadius: "var(--radius-full)",
                      background: phase.status === "completed" ? "var(--success)" : "var(--terracotta)",
                      transition: "width 0.4s var(--ease-out)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reno-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}

function OverviewCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        padding: "var(--space-lg)",
      }}
    >
      <div style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", marginBottom: "var(--space-sm)" }}>
        {label}
      </div>
      <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600 }}>
        {value}
      </div>
      {sub && <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 4 }}>{sub}</div>}
    </div>
  );
}
