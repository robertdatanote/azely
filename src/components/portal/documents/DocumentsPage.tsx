"use client";

import { mockDocuments } from "@/data/mockClients";

const statusStyles: Record<string, { bg: string; color: string; label: string }> = {
  verified: { bg: "var(--success-bg)", color: "var(--success)", label: "Verified" },
  uploaded: { bg: "var(--info-bg)", color: "var(--info)", label: "Uploaded" },
  pending: { bg: "var(--warning-bg)", color: "var(--warning)", label: "Pending" },
  rejected: { bg: "var(--error-bg)", color: "var(--error)", label: "Rejected" },
  expired: { bg: "var(--error-bg)", color: "var(--error)", label: "Expired" },
};

const categoryIcons: Record<string, string> = {
  identity: "🪪",
  financial: "💰",
  legal: "⚖️",
  property: "🏠",
  tax: "📋",
  insurance: "🛡️",
  contract: "📝",
  other: "📎",
};

export function DocumentsPage({ clientId }: { clientId: string }) {
  const docs = mockDocuments[clientId] ?? [];

  const verified = docs.filter((d) => d.status === "verified").length;
  const pending = docs.filter((d) => d.status === "pending").length;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "var(--space-xl)" }}>
        <div>
          <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
            Document Vault
          </h1>
          <p style={{ color: "var(--text-muted)" }}>
            {verified} verified · {pending} pending · {docs.length} total
          </p>
        </div>
        <button
          style={{
            padding: "10px 24px",
            borderRadius: "var(--radius-full)",
            background: "var(--terracotta)",
            color: "var(--white)",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
          }}
        >
          Upload Document
        </button>
      </div>

      {/* Progress bar */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-subtle)",
          padding: "var(--space-lg)",
          marginBottom: "var(--space-lg)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-sm)" }}>
          <span style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>Document Completion</span>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
            {Math.round((verified / docs.length) * 100)}%
          </span>
        </div>
        <div style={{ height: 6, borderRadius: "var(--radius-full)", background: "var(--bg-elevated)" }}>
          <div
            style={{
              height: "100%",
              width: `${(verified / docs.length) * 100}%`,
              borderRadius: "var(--radius-full)",
              background: "linear-gradient(90deg, var(--success), var(--gold))",
            }}
          />
        </div>
      </div>

      {/* Document list */}
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          overflow: "hidden",
        }}
      >
        {docs.map((doc, i) => {
          const status = statusStyles[doc.status] ?? statusStyles.pending;
          return (
            <div
              key={doc.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-md)",
                padding: "var(--space-md) var(--space-xl)",
                borderBottom: i < docs.length - 1 ? "1px solid var(--border-subtle)" : "none",
                transition: "background var(--duration-fast)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              {/* Category icon */}
              <span style={{ fontSize: 20 }}>
                {categoryIcons[doc.category] ?? "📎"}
              </span>

              {/* Name & category */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{doc.name}</div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", textTransform: "capitalize" }}>
                  {doc.category}
                </div>
              </div>

              {/* Date */}
              {doc.uploaded_at && (
                <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                  {new Date(doc.uploaded_at).toLocaleDateString()}
                </span>
              )}

              {/* Status badge */}
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: "var(--radius-full)",
                  background: status.bg,
                  color: status.color,
                  fontSize: "var(--text-xs)",
                  fontWeight: 600,
                }}
              >
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
