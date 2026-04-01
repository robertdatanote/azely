"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import {
  getClientById,
  mockDealStages,
  mockDocuments,
  mockNotifications,
} from "@/data/mockClients";
import Link from "next/link";

export function DashboardPage({ clientId }: { clientId: string }) {
  const { dict } = useLocale();
  const dashboard = dict.dashboard as Record<string, string>;
  const portalDict = dict.portal as Record<string, string>;
  const client = getClientById(clientId);
  const property = client.property;
  const stages = mockDealStages[clientId] ?? [];
  const docs = mockDocuments[clientId] ?? [];
  const notifications = mockNotifications.slice(0, 4);

  const completedStages = stages.filter((s) => s.status === "completed").length;
  const totalStages = stages.length;
  const progress = totalStages > 0 ? Math.round((completedStages / totalStages) * 100) : 0;

  return (
    <div>
      {/* Greeting */}
      <div style={{ marginBottom: "var(--space-xl)" }}>
        <h1
          style={{
            fontSize: "var(--text-3xl)",
            fontWeight: 500,
            marginBottom: "var(--space-xs)",
          }}
        >
          {dashboard.greeting}, Jan
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "var(--text-base)" }}>
          {property
            ? `${property.name} — ${property.city}, ${property.region}`
            : "Your property journey awaits"}
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "var(--space-md)",
          marginBottom: "var(--space-xl)",
        }}
        className="dashboard-stats"
      >
        <StatCard label={dashboard.dealProgress} value={`${progress}%`} accent="var(--terracotta)" />
        <StatCard label={portalDict.documents} value={`${docs.filter(d => d.status === "verified").length}/${docs.length}`} accent="var(--success)" />
        <StatCard label={dashboard.notifications} value={`${notifications.filter(n => !n.read).length}`} accent="var(--warning)" />
        <StatCard
          label={portalDict.mortgage}
          value={property ? `€${(property.price / 1000).toFixed(0)}k` : "—"}
          accent="var(--gold)"
        />
      </div>

      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "var(--space-lg)",
        }}
        className="dashboard-grid"
      >
        {/* Deal Progress */}
        <Card title={dashboard.dealProgress}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
            {/* Progress bar */}
            <div
              style={{
                height: 6,
                borderRadius: "var(--radius-full)",
                background: "var(--bg-elevated)",
                marginBottom: "var(--space-md)",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  borderRadius: "var(--radius-full)",
                  background: "linear-gradient(90deg, var(--terracotta), var(--gold))",
                  transition: "width 0.6s var(--ease-out)",
                }}
              />
            </div>

            {stages.map((stage) => (
              <div
                key={stage.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-md)",
                  padding: "var(--space-sm) 0",
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background:
                      stage.status === "completed"
                        ? "var(--success)"
                        : stage.status === "active"
                        ? "var(--terracotta)"
                        : "var(--bg-elevated)",
                    color:
                      stage.status === "pending" ? "var(--text-muted)" : "white",
                    fontSize: 11,
                    fontWeight: 600,
                  }}
                >
                  {stage.status === "completed" ? "✓" : stage.status === "active" ? "●" : "○"}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "var(--text-sm)",
                      fontWeight: stage.status === "active" ? 600 : 400,
                      color: stage.status === "pending" ? "var(--text-muted)" : "var(--text-primary)",
                      textTransform: "capitalize",
                    }}
                  >
                    {stage.stage_key.replace(/_/g, " ")}
                  </div>
                  {stage.note && (
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 2 }}>
                      {stage.note}
                    </div>
                  )}
                </div>
                {stage.date && (
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
                    {stage.date}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Right column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
          {/* Notifications */}
          <Card title={dashboard.notifications}>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
              {notifications.map((notif) => (
                <Link
                  key={notif.id}
                  href={notif.link ?? "#"}
                  style={{
                    display: "flex",
                    gap: "var(--space-md)",
                    padding: "var(--space-sm)",
                    borderRadius: "var(--radius-md)",
                    background: notif.read ? "transparent" : "var(--warning-bg)",
                    transition: "background var(--duration-fast)",
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      marginTop: 6,
                      background: notif.read ? "transparent" : notifColor(notif.type),
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>
                      {notif.title}
                    </div>
                    <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: 2 }}>
                      {notif.body}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card title={dashboard.quickActions}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-sm)" }}>
              {[
                { label: portalDict.documents, href: `/portal/${clientId}/documents`, icon: "📄" },
                { label: portalDict.deal, href: `/portal/${clientId}/deal`, icon: "📊" },
                { label: portalDict.messages, href: `/portal/${clientId}/messages`, icon: "💬" },
                { label: portalDict.mortgage, href: `/portal/${clientId}/mortgage`, icon: "🏠" },
              ].map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--space-sm)",
                    padding: "var(--space-md)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                    transition: "all var(--duration-fast) var(--ease-out)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--terracotta)";
                    e.currentTarget.style.background = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <span>{action.icon}</span>
                  {action.label}
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Property card */}
      {property && (
        <div style={{ marginTop: "var(--space-lg)" }}>
          <Card title={dashboard.propertyDetails}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "var(--space-lg)",
              }}
            >
              <PropertyStat label="Type" value={property.type} />
              <PropertyStat label="Bedrooms" value={property.bedrooms.toString()} />
              <PropertyStat label="Bathrooms" value={property.bathrooms.toString()} />
              <PropertyStat label="Area" value={`${property.area_m2} m²`} />
              {property.plot_m2 && <PropertyStat label="Plot" value={`${property.plot_m2} m²`} />}
              <PropertyStat label="Price" value={`€${property.price.toLocaleString()}`} />
              <PropertyStat label="Energy" value={property.energy_rating ?? "—"} />
              <PropertyStat label="Year" value={property.year_built?.toString() ?? "—"} />
            </div>
          </Card>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .dashboard-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .dashboard-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .dashboard-stats { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--border-subtle)",
        padding: "var(--space-xl)",
      }}
    >
      <h3
        style={{
          fontSize: "var(--text-sm)",
          fontWeight: 600,
          letterSpacing: "var(--tracking-wide)",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: "var(--space-lg)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid var(--border-subtle)",
        padding: "var(--space-lg)",
      }}
    >
      <div
        style={{
          fontSize: "var(--text-xs)",
          fontWeight: 500,
          color: "var(--text-muted)",
          letterSpacing: "var(--tracking-wide)",
          textTransform: "uppercase",
          marginBottom: "var(--space-sm)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "var(--text-3xl)",
          fontWeight: 600,
          color: accent,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function PropertyStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        style={{
          fontSize: "var(--text-xs)",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          letterSpacing: "var(--tracking-wide)",
          marginBottom: 4,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "var(--text-base)",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function notifColor(type: string) {
  switch (type) {
    case "success": return "var(--success)";
    case "warning": return "var(--warning)";
    case "action": return "var(--terracotta)";
    case "deadline": return "var(--error)";
    default: return "var(--info)";
  }
}
