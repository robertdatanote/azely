"use client";

export function StatsBar() {
  return (
    <section
      style={{
        background: "var(--bg-page)",
        padding: "var(--space-3xl) 0",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-wide)",
          margin: "0 auto",
          padding: "0 var(--space-xl)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "var(--space-2xl)",
          flexWrap: "wrap",
        }}
      >
        {/* Logos / trust strip */}
        <span
          style={{
            fontSize: "var(--text-sm)",
            color: "var(--text-muted)",
            letterSpacing: "var(--tracking-wide)",
          }}
        >
          Trusted by agencies in
        </span>
        {["Amsterdam", "Jávea", "Marbella", "Lisbon", "Barcelona"].map((city) => (
          <span
            key={city}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-lg)",
              fontWeight: 500,
              color: "var(--text-secondary)",
              opacity: 0.45,
            }}
          >
            {city}
          </span>
        ))}
      </div>
    </section>
  );
}
