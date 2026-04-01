"use client";

import { LanguageToggle } from "@/i18n/LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import { mockNotifications } from "@/data/mockClients";

export function PortalHeader({ clientId }: { clientId: string }) {
  const { dict } = useLocale();
  const dashboard = dict.dashboard as Record<string, string>;
  const unread = mockNotifications.filter((n) => !n.read).length;

  return (
    <header
      style={{
        height: "var(--header-height)",
        borderBottom: "1px solid var(--border-subtle)",
        background: "rgba(250, 248, 244, 0.9)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 var(--space-xl)",
        position: "sticky",
        top: 0,
        zIndex: 40,
      }}
    >
      {/* Search */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-sm)",
          padding: "8px 16px",
          borderRadius: "var(--radius-full)",
          background: "var(--bg-elevated)",
          border: "1px solid var(--border-subtle)",
          width: 320,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ opacity: 0.4 }}>
          <circle cx="7" cy="7" r="5" stroke="var(--text-muted)" strokeWidth="1.5" />
          <path d="M11 11l3 3" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <span style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>
          {dict.common && (dict.common as Record<string, string>).search}...
        </span>
      </div>

      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)" }}>
        <LanguageToggle />

        {/* Notifications bell */}
        <button
          style={{
            position: "relative",
            width: 36,
            height: 36,
            borderRadius: "var(--radius-full)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-elevated)",
            transition: "background var(--duration-fast)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2a5 5 0 015 5c0 3 1 4 1 4H3s1-1 1-4a5 5 0 015-5z" stroke="var(--text-secondary)" strokeWidth="1.5" />
            <path d="M7 15a2 2 0 004 0" stroke="var(--text-secondary)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {unread > 0 && (
            <span
              style={{
                position: "absolute",
                top: 2,
                right: 2,
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--terracotta)",
                color: "white",
                fontSize: 10,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {unread}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
