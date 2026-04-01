"use client";

import { mockMortgages } from "@/data/mockClients";
import type { MortgageOption } from "@/types";

const statusColors: Record<string, { bg: string; color: string }> = {
  approved: { bg: "var(--success-bg)", color: "var(--success)" },
  exploring: { bg: "var(--info-bg)", color: "var(--info)" },
  applied: { bg: "var(--warning-bg)", color: "var(--warning)" },
  rejected: { bg: "var(--error-bg)", color: "var(--error)" },
};

export function MortgagePage({ clientId }: { clientId: string }) {
  return (
    <div>
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
          Mortgage Comparison
        </h1>
        <p style={{ color: "var(--text-muted)" }}>Compare mortgage options from Spanish lenders</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "var(--space-lg)" }}>
        {mockMortgages.map((m) => (
          <MortgageCard key={m.id} mortgage={m} />
        ))}
      </div>
    </div>
  );
}

function MortgageCard({ mortgage }: { mortgage: MortgageOption }) {
  const status = statusColors[mortgage.status] ?? statusColors.exploring;

  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-xl)",
        border: mortgage.status === "approved" ? "2px solid var(--success)" : "1px solid var(--border-subtle)",
        padding: "var(--space-xl)",
        position: "relative",
      }}
    >
      {mortgage.status === "approved" && (
        <div
          style={{
            position: "absolute",
            top: -1,
            left: "var(--space-xl)",
            right: "var(--space-xl)",
            height: 3,
            background: "var(--success)",
            borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
          }}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-lg)" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 600, marginBottom: 4 }}>
            {mortgage.provider}
          </h3>
          <span
            style={{
              padding: "3px 10px",
              borderRadius: "var(--radius-full)",
              background: status.bg,
              color: status.color,
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {mortgage.status}
          </span>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", fontWeight: 600, color: "var(--terracotta)", lineHeight: 1 }}>
            {mortgage.rate}%
          </div>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "capitalize" }}>
            {mortgage.type}
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)" }}>
        <Detail label="Loan Amount" value={`€${mortgage.amount.toLocaleString()}`} />
        <Detail label="Term" value={`${mortgage.term_years} years`} />
        <Detail label="Monthly Payment" value={`€${mortgage.monthly_payment.toLocaleString()}`} />
        <Detail label="Total Cost" value={`€${mortgage.total_cost.toLocaleString()}`} />
        <Detail label="LTV" value={`${mortgage.ltv}%`} />
      </div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "var(--tracking-wide)", marginBottom: 2 }}>
        {label}
      </div>
      <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{value}</div>
    </div>
  );
}
