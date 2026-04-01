"use client";

import { useState, useEffect } from "react";
import { AzelyLogo } from "@/components/brand/AzelyLogo";
import { LanguageToggle } from "@/i18n/LanguageToggle";
import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";

export function Header() {
  const { dict } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const nav = dict.nav as Record<string, string>;
  const common = dict.common as Record<string, string>;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        background: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(240, 235, 224, 0.06)" : "none",
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
          padding: "0 var(--space-2xl)",
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
            gap: "var(--space-2xl)",
          }}
          className="desktop-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 12,
                fontWeight: 300,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)" }}>
          <LanguageToggle variant="dark" />

          <Link
            href="/portal/client-1/dashboard"
            style={{
              padding: "10px 24px",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 0,
              borderBottomRightRadius: 10,
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--terracotta)";
              e.currentTarget.style.borderColor = "var(--terracotta)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            {common.login}
          </Link>

          {/* Mobile menu */}
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
            <span style={{ width: 22, height: 1, background: "#fff", transition: "all 0.3s" }} />
            <span style={{ width: 22, height: 1, background: "#fff", transition: "all 0.3s" }} />
            <span style={{ width: 15, height: 1, background: "#fff", transition: "all 0.3s" }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--header-height)",
            left: 0,
            right: 0,
            background: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(20px)",
            padding: "var(--space-xl) var(--space-2xl) var(--space-2xl)",
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-lg)",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                fontWeight: 300,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.7)",
                paddingBottom: "var(--space-lg)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
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
