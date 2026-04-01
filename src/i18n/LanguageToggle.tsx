"use client";

import { useLocale } from "./LocaleProvider";
import type { Locale } from "@/types";

const labels: Record<Locale, string> = {
  en: "EN",
  nl: "NL",
  es: "ES",
};

export function LanguageToggle({
  variant = "pill",
}: {
  variant?: "pill" | "dropdown" | "dark";
}) {
  const { locale, setLocale } = useLocale();
  const locales: Locale[] = ["en", "nl", "es"];

  if (variant === "dark") {
    return (
      <div
        style={{
          display: "flex",
          gap: 1,
          background: "rgba(240, 235, 224, 0.06)",
          borderRadius: "var(--radius-full)",
          padding: 2,
        }}
      >
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            style={{
              padding: "5px 10px",
              borderRadius: "var(--radius-full)",
              fontSize: 11,
              fontWeight: locale === l ? 600 : 400,
              letterSpacing: "0.06em",
              background: locale === l ? "rgba(240, 235, 224, 0.12)" : "transparent",
              color: locale === l ? "var(--cream)" : "rgba(240, 235, 224, 0.35)",
              transition: "all var(--duration-fast) var(--ease-out)",
            }}
          >
            {labels[l]}
          </button>
        ))}
      </div>
    );
  }

  if (variant === "pill") {
    return (
      <div
        style={{
          display: "flex",
          gap: 2,
          background: "var(--border-subtle)",
          borderRadius: "var(--radius-full)",
          padding: 2,
        }}
      >
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            style={{
              padding: "6px 12px",
              borderRadius: "var(--radius-full)",
              fontSize: "var(--text-xs)",
              fontWeight: locale === l ? 600 : 400,
              letterSpacing: "0.04em",
              background: locale === l ? "var(--bg-card)" : "transparent",
              color: locale === l ? "var(--text-primary)" : "var(--text-muted)",
              boxShadow: locale === l ? "var(--shadow-xs)" : "none",
              transition: "all var(--duration-fast) var(--ease-out)",
            }}
          >
            {labels[l]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <select
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
      style={{
        padding: "6px 10px",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--border-medium)",
        background: "var(--bg-card)",
        fontSize: "var(--text-sm)",
        color: "var(--text-primary)",
      }}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {labels[l]}
        </option>
      ))}
    </select>
  );
}
