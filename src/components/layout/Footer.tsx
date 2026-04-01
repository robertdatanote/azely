"use client";

import { AzelyLogo } from "@/components/brand/AzelyLogo";
import { useLocale } from "@/i18n/LocaleProvider";
import Link from "next/link";

export function Footer() {
  const { dict } = useLocale();
  const footer = dict.footer as Record<string, string>;
  const nav = dict.nav as Record<string, string>;

  return (
    <footer
      style={{
        background: "var(--espresso)",
        color: "var(--text-inverse)",
        padding: "var(--space-4xl) 0 var(--space-2xl)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
          padding: "0 var(--space-lg)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "var(--space-3xl)",
            marginBottom: "var(--space-3xl)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <AzelyLogo size="md" color="light" />
            <p
              style={{
                marginTop: "var(--space-lg)",
                fontSize: "var(--text-sm)",
                color: "var(--gold-wheat)",
                lineHeight: "var(--leading-relaxed)",
                maxWidth: 320,
              }}
            >
              {footer.description}
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "var(--space-lg)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {footer.platform}
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
              {[
                { href: "/properties", label: nav.properties },
                { href: "/marketplace", label: nav.marketplace },
                { href: "/portal/client-1/dashboard", label: nav.portal },
                { href: "/team", label: nav.team },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--linen)",
                    opacity: 0.7,
                    transition: "opacity var(--duration-fast)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "var(--space-lg)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {footer.company}
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
              {[footer.about, footer.careers, footer.blog].map((label) => (
                <span
                  key={label}
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--linen)",
                    opacity: 0.7,
                    cursor: "pointer",
                  }}
                >
                  {label}
                </span>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                fontSize: "var(--text-xs)",
                fontWeight: 600,
                letterSpacing: "var(--tracking-widest)",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "var(--space-lg)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {footer.legal}
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
              {[footer.privacy, footer.terms, footer.cookies].map((label) => (
                <span
                  key={label}
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--linen)",
                    opacity: 0.7,
                    cursor: "pointer",
                  }}
                >
                  {label}
                </span>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(240, 235, 224, 0.1)",
            paddingTop: "var(--space-lg)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>
            {footer.copyright}
          </span>
          <div style={{ display: "flex", gap: "var(--space-lg)" }}>
            {["Amsterdam", "Jávea", "Marbella"].map((city) => (
              <span
                key={city}
                style={{
                  fontSize: "var(--text-xs)",
                  color: "var(--gold-wheat)",
                  opacity: 0.6,
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
