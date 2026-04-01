"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { getClientById, mockDealStages } from "@/data/mockClients";

const stageLabels: Record<string, { en: string; nl: string; es: string }> = {
  inquiry: { en: "Initial Inquiry", nl: "Eerste aanvraag", es: "Consulta inicial" },
  viewing: { en: "Property Viewing", nl: "Bezichtiging", es: "Visita" },
  offer: { en: "Offer Submitted", nl: "Bod ingediend", es: "Oferta enviada" },
  negotiation: { en: "Negotiation", nl: "Onderhandeling", es: "Negociación" },
  accepted: { en: "Offer Accepted", nl: "Bod geaccepteerd", es: "Oferta aceptada" },
  due_diligence: { en: "Due Diligence", nl: "Due diligence", es: "Diligencia debida" },
  notary: { en: "Notary Signing", nl: "Notaris", es: "Firma notarial" },
  completed: { en: "Keys Handed Over", nl: "Sleutels overgedragen", es: "Entrega de llaves" },
};

export function DealPage({ clientId }: { clientId: string }) {
  const { locale } = useLocale();
  const client = getClientById(clientId);
  const stages = mockDealStages[clientId] ?? [];

  return (
    <div>
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
          Deal Tracker
        </h1>
        <p style={{ color: "var(--text-muted)" }}>
          {client.property?.name ?? "Property"} — {client.deal_stage.replace(/_/g, " ")}
        </p>
      </div>

      {/* Timeline */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          padding: "var(--space-xl)",
        }}
      >
        <div style={{ position: "relative" }}>
          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            const label = stageLabels[stage.stage_key]?.[locale] ?? stage.stage_key;

            return (
              <div
                key={stage.id}
                style={{
                  display: "flex",
                  gap: "var(--space-lg)",
                  position: "relative",
                  paddingBottom: isLast ? 0 : "var(--space-xl)",
                }}
              >
                {/* Timeline line */}
                {!isLast && (
                  <div
                    style={{
                      position: "absolute",
                      left: 17,
                      top: 36,
                      bottom: 0,
                      width: 2,
                      background:
                        stage.status === "completed"
                          ? "var(--success)"
                          : "var(--border-subtle)",
                    }}
                  />
                )}

                {/* Dot */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    background:
                      stage.status === "completed"
                        ? "var(--success)"
                        : stage.status === "active"
                        ? "var(--terracotta)"
                        : "var(--bg-elevated)",
                    color: stage.status === "pending" ? "var(--text-muted)" : "white",
                    fontSize: 14,
                    fontWeight: 600,
                    boxShadow:
                      stage.status === "active"
                        ? "0 0 0 4px rgba(181, 101, 74, 0.15)"
                        : "none",
                  }}
                >
                  {stage.status === "completed" ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M4 8l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : stage.status === "active" ? (
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "white" }} />
                  ) : (
                    <span style={{ fontSize: 12 }}>{i + 1}</span>
                  )}
                </div>

                {/* Content */}
                <div style={{ flex: 1, paddingTop: 4 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: 4,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "var(--text-base)",
                        fontWeight: stage.status === "active" ? 700 : 500,
                        color: stage.status === "pending" ? "var(--text-muted)" : "var(--text-primary)",
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {label}
                    </h3>
                    {stage.date && (
                      <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                        {stage.date}
                      </span>
                    )}
                  </div>
                  {stage.note && (
                    <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: "var(--leading-relaxed)" }}>
                      {stage.note}
                    </p>
                  )}
                  {stage.status === "active" && (
                    <div
                      style={{
                        marginTop: "var(--space-sm)",
                        display: "inline-flex",
                        padding: "4px 12px",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(181, 101, 74, 0.1)",
                        fontSize: "var(--text-xs)",
                        fontWeight: 600,
                        color: "var(--terracotta)",
                      }}
                    >
                      Current Stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
