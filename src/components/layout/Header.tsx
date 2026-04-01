"use client";

import { useState } from "react";
import { AzelyLogo } from "@/components/brand/AzelyLogo";
import { LanguageToggle } from "@/i18n/LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";

export function Header() {
  const { dict } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = dict.nav as Record<string, string>;
  const common = dict.common as Record<string, string>;

  const links = [
    { href: "/properties", label: nav.properties },
    { href: "/about", label: nav.about },
    { href: "/services", label: nav.services },
    { href: "/team", label: nav.team },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "var(--header-height)",
        background: "var(--espresso)",
        borderBottom: "1px solid rgba(240, 235, 224, 0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
          padding: "0 var(--space-xl)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <AzelyLogo size="sm" variant="full" color="light" />
        </Link>

        {/* Desktop nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-xl)",
          }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 400,
                color: "rgba(240, 235, 224, 0.6)",
                letterSpacing: "0.02em",
                transition: "color var(--duration-fast) var(--ease-out)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(240, 235, 224, 0.6)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-md)" }}>
          <LanguageToggle variant="dark" />

          <Link
            href="/portal/client-1/dashboard"
            style={{
              padding: "9px 22px",
              borderRadius: "var(--radius-full)",
              fontSize: "var(--text-sm)",
              fontWeight: 500,
              color: "var(--espresso)",
              background: "var(--cream)",
              transition: "all var(--duration-fast) var(--ease-out)",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--terracotta)";
              e.currentTarget.style.color = "var(--white)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--cream)";
              e.currentTarget.style.color = "var(--espresso)";
            }}
          >
            {common.login}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              padding: 8,
            }}
            aria-label="Toggle menu"
          >
            <span style={{ width: 20, height: 1.5, background: "var(--cream)", borderRadius: 1, transition: "all 0.3s" }} />
            <span style={{ width: 20, height: 1.5, background: "var(--cream)", borderRadius: 1, transition: "all 0.3s" }} />
            <span style={{ width: 14, height: 1.5, background: "var(--cream)", borderRadius: 1, transition: "all 0.3s" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            background: "var(--espresso)",
            borderBottom: "1px solid rgba(240, 235, 224, 0.06)",
            padding: "var(--space-lg) var(--space-xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-md)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "var(--text-lg)",
                fontWeight: 400,
                color: "var(--cream)",
                padding: "var(--space-sm) 0",
                borderBottom: "1px solid rgba(240, 235, 224, 0.04)",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
