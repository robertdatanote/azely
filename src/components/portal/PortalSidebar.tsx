"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AzelyLogo } from "@/components/brand/AzelyLogo";
import { useLocale } from "@/i18n/LocaleProvider";

interface NavItem {
  key: string;
  href: string;
  icon: React.ReactNode;
  layer: string;
}

const ALWAYS_SHOW = ["dashboard", "deal", "documents", "messages"];

function buildNavItems(clientId: string): NavItem[] {
  const base = `/portal/${clientId}`;
  return [
    // L0 Foundation
    { key: "dashboard", href: `${base}/dashboard`, layer: "L0", icon: <DashboardIcon /> },
    // L1 Client Journey
    { key: "deal", href: `${base}/deal`, layer: "L1", icon: <DealIcon /> },
    { key: "onboarding", href: `${base}/onboarding`, layer: "L1", icon: <OnboardingIcon /> },
    { key: "documents", href: `${base}/documents`, layer: "L0", icon: <DocumentsIcon /> },
    { key: "messages", href: `${base}/messages`, layer: "L1", icon: <MessagesIcon /> },
    { key: "mortgage", href: `${base}/mortgage`, layer: "L1", icon: <MortgageIcon /> },
    // L2 Property Operations
    { key: "renovation", href: `${base}/renovation`, layer: "L2", icon: <RenovationIcon /> },
    { key: "rental", href: `${base}/rental`, layer: "L2", icon: <RentalIcon /> },
    { key: "pricing", href: `${base}/pricing`, layer: "L2", icon: <PricingIcon /> },
    { key: "contractors", href: `${base}/contractors`, layer: "L2", icon: <ContractorsIcon /> },
    { key: "utilities", href: `${base}/utilities`, layer: "L2", icon: <UtilitiesIcon /> },
    { key: "comunidad", href: `${base}/comunidad`, layer: "L2", icon: <ComunidadIcon /> },
    // L3 Intelligence
    { key: "compliance", href: `${base}/compliance`, layer: "L3", icon: <ComplianceIcon /> },
    { key: "tax", href: `${base}/tax`, layer: "L3", icon: <TaxIcon /> },
    { key: "costOfOwnership", href: `${base}/cost-of-ownership`, layer: "L3", icon: <CalculatorIcon /> },
    { key: "calendar", href: `${base}/calendar`, layer: "L3", icon: <CalendarIcon /> },
    { key: "content", href: `${base}/content`, layer: "L3", icon: <ContentIcon /> },
    // L5 Scale
    { key: "portfolio", href: `${base}/portfolio`, layer: "L5", icon: <PortfolioIcon /> },
  ];
}

export function PortalSidebar({
  clientId,
  activeFeatures,
}: {
  clientId: string;
  activeFeatures: string[];
}) {
  const pathname = usePathname();
  const { dict } = useLocale();
  const portal = dict.portal as Record<string, string>;

  const navItems = buildNavItems(clientId);
  const visible = navItems.filter(
    (item) =>
      ALWAYS_SHOW.includes(item.key) ||
      activeFeatures.includes(item.key) ||
      activeFeatures.includes(item.href.split("/").pop() ?? "")
  );

  return (
    <aside
      style={{
        width: "var(--sidebar-width)",
        height: "100dvh",
        position: "fixed",
        top: 0,
        left: 0,
        background: "var(--bg-sidebar)",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(240, 235, 224, 0.06)",
        zIndex: 50,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "var(--space-lg) var(--space-lg)",
          borderBottom: "1px solid rgba(240, 235, 224, 0.06)",
        }}
      >
        <Link href="/">
          <AzelyLogo size="sm" color="light" />
        </Link>
      </div>

      {/* Navigation */}
      <nav
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "var(--space-md) var(--space-sm)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {visible.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.key}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "var(--space-md)",
                padding: "10px var(--space-md)",
                borderRadius: "var(--radius-md)",
                fontSize: "var(--text-sm)",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "var(--cream)" : "rgba(240, 235, 224, 0.55)",
                background: isActive ? "var(--bg-sidebar-hover)" : "transparent",
                transition: "all var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "var(--bg-sidebar-hover)";
                  e.currentTarget.style.color = "rgba(240, 235, 224, 0.85)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "rgba(240, 235, 224, 0.55)";
                }
              }}
            >
              <span style={{ width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", opacity: isActive ? 1 : 0.6 }}>
                {item.icon}
              </span>
              <span>{portal[item.key] ?? item.key}</span>
              {isActive && (
                <span
                  style={{
                    marginLeft: "auto",
                    width: 4,
                    height: 16,
                    borderRadius: 2,
                    background: "var(--terracotta)",
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User area */}
      <div
        style={{
          padding: "var(--space-md) var(--space-lg)",
          borderTop: "1px solid rgba(240, 235, 224, 0.06)",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-md)",
        }}
      >
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: "var(--radius-full)",
            background: "var(--terracotta)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "var(--text-sm)",
            fontWeight: 600,
            color: "var(--white)",
          }}
        >
          JB
        </div>
        <div>
          <div style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--cream)" }}>
            Jan Bergman
          </div>
          <div style={{ fontSize: "var(--text-xs)", color: "var(--gold-wheat)", opacity: 0.6 }}>
            Client
          </div>
        </div>
      </div>
    </aside>
  );
}

// ── SVG Icons (20x20) ──
function DashboardIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="2" y="2" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function DealIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 10h16M2 10l4-4M2 10l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function OnboardingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 18c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DocumentsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M5 2h7l5 5v10a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 2v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MessagesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1H6l-3 3V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function MortgageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l8 6v9a1 1 0 01-1 1H3a1 1 0 01-1-1V8l8-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 18v-5h6v5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function RenovationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11 2l7 7-9 9-7-7 9-9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RentalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="6" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 6V4a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function PricingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2v16M6 6l4-4 4 4M6 14l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ContractorsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 18h16M4 18V8l6-5 6 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="8" y="12" width="4" height="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function UtilitiesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 2v3M10 15v3M2 10h3M15 10h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ComunidadIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="13" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 18c0-3 2-5 5-5s5 2 5 5M8 18c0-3 2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ComplianceIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TaxIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="6" y="4" width="8" height="4" rx="1" stroke="currentColor" strokeWidth="1" />
      <circle cx="7.5" cy="12" r="1" fill="currentColor" />
      <circle cx="10" cy="12" r="1" fill="currentColor" />
      <circle cx="12.5" cy="12" r="1" fill="currentColor" />
      <circle cx="7.5" cy="15" r="1" fill="currentColor" />
      <circle cx="10" cy="15" r="1" fill="currentColor" />
      <circle cx="12.5" cy="15" r="1" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 8h14M7 2v4M13 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 4h14M3 8h10M3 12h14M3 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17V7l7-5 7 5v10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M1 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="7" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
