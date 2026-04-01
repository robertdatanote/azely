"use client";

interface AzelyLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "full" | "mark" | "wordmark";
  color?: "light" | "dark";
}

const sizes = {
  sm: { icon: 24, text: 18, gap: 8 },
  md: { icon: 32, text: 24, gap: 10 },
  lg: { icon: 44, text: 34, gap: 14 },
  xl: { icon: 64, text: 48, gap: 18 },
};

export function AzelyLogo({
  size = "md",
  variant = "full",
  color = "dark",
}: AzelyLogoProps) {
  const s = sizes[size];
  const textColor = color === "light" ? "var(--cream)" : "var(--espresso)";
  const subtitleColor = color === "light" ? "var(--gold-wheat)" : "var(--text-muted)";

  const mark = (
    <svg
      width={s.icon}
      height={s.icon}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bottom-left: Terracotta */}
      <rect x="4" y="28" width="26" height="26" rx="6" fill="#B5654A" />
      {/* Middle: Gold */}
      <rect x="16" y="16" width="26" height="26" rx="6" fill="#C9A251" opacity="0.9" />
      {/* Top-right: Cream */}
      <rect x="28" y="4" width="26" height="26" rx="6" fill="#DDD5BC" opacity="0.85" />
    </svg>
  );

  if (variant === "mark") return mark;

  const wordmark = (
    <span
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: s.text,
        fontWeight: 500,
        letterSpacing: "0.14em",
        color: textColor,
        lineHeight: 1,
      }}
    >
      AZELY
    </span>
  );

  if (variant === "wordmark") return wordmark;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: s.gap }}>
      {mark}
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {wordmark}
        {size !== "sm" && (
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: s.text * 0.35,
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: subtitleColor,
              textTransform: "uppercase",
            }}
          >
            Project Clarity, By Design
          </span>
        )}
      </div>
    </div>
  );
}
