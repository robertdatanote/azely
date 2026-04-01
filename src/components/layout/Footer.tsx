"use client";

import { AzelyLogo } from "@/components/brand/AzelyLogo";
import { useLocale } from "@/i18n/LocaleProvider";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";

export function Footer() {
  const { dict } = useLocale();
  const footer = dict.footer as Record<string, string>;
  const nav = dict.nav as Record<string, string>;

  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        padding: "var(--space-4xl) 0 var(--space-2xl)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
          padding: "0 var(--space-2xl)",
        }}
      >
        {/* Top — logo + nav */}
        <Reveal direction="up">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingBottom: "var(--space-3xl)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              flexWrap: "wrap",
              gap: "var(--space-2xl)",
            }}
          >
            <div>
              <AzelyLogo size="md" color="light" />
              <p
                style={{
                  marginTop: "var(--space-lg)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.8,
                  maxWidth: 340,
                }}
              >
                {footer.description}
              </p>
            </div>

            {/* Nav columns */}
            <div style={{ display: "flex", gap: "var(--space-4xl)" }} className="footer-nav">
              <FooterCol
                title={footer.platform}
                links={[
                  { label: nav.properties, href: "/properties" },
                  { label: nav.marketplace, href: "/marketplace" },
                  { label: nav.portal, href: "/portal/client-1/dashboard" },
                  { label: nav.team, href: "/team" },
                ]}
              />
              <FooterCol
                title={footer.company}
                links={[
                  { label: footer.about },
                  { label: footer.careers },
                  { label: footer.blog },
                ]}
              />
              <FooterCol
                title={footer.legal}
                links={[
                  { label: footer.privacy },
                  { label: footer.terms },
                  { label: footer.cookies },
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* Bottom */}
        <div
          style={{
            paddingTop: "var(--space-xl)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "var(--space-md)",
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 300,
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.04em",
            }}
          >
            {footer.copyright}
          </span>
          <div style={{ display: "flex", gap: "var(--space-xl)" }}>
            {["Amsterdam", "Jávea", "Marbella"].map((city) => (
              <span
                key={city}
                style={{
                  fontSize: 11,
                  fontWeight: 300,
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.15)",
                  textTransform: "uppercase",
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
          .footer-nav { flex-direction: column; gap: var(--space-xl) !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href?: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          fontSize: 11,
          fontWeight: 400,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.25)",
          marginBottom: "var(--space-lg)",
          fontFamily: "var(--font-sans)",
        }}
      >
        {title}
      </h4>
      <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
        {links.map((link) =>
          link.href ? (
            <Link
              key={link.label}
              href={link.href}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
            >
              {link.label}
            </Link>
          ) : (
            <span
              key={link.label}
              style={{
                fontSize: "var(--text-sm)",
                fontWeight: 300,
                color: "rgba(255,255,255,0.45)",
                cursor: "default",
              }}
            >
              {link.label}
            </span>
          )
        )}
      </nav>
    </div>
  );
}
