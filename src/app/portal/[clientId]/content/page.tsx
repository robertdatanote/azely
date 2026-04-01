export const metadata = { title: "Market Intelligence" };

export default async function Content({ params }: { params: Promise<{ clientId: string }> }) {
  await params;

  const articles = [
    { title: "Costa Blanca Property Market Q3 2025 Report", category: "Market Report", date: "Sep 2025", featured: true, excerpt: "Average prices in Jávea rose 8.3% year-over-year. Demand from Dutch buyers continues to outpace supply in the €500k–€800k segment." },
    { title: "Spain's Golden Visa Program: What Changes in 2026", category: "Regulation", date: "Sep 2025", featured: true, excerpt: "The Spanish government has announced modifications to the Golden Visa threshold. Here's what cross-border buyers need to know." },
    { title: "Non-Resident Tax Guide: Netherlands to Spain", category: "Tax Guide", date: "Aug 2025", featured: false, excerpt: "Complete guide to Box 3 implications, double tax treaty benefits, and optimal ownership structures for Dutch buyers." },
    { title: "Renovation ROI: Which Upgrades Add Most Value", category: "Investment", date: "Aug 2025", featured: false, excerpt: "Analysis of 200+ Costa Blanca renovations. Kitchen and pool upgrades deliver the highest returns at 140–180%." },
    { title: "Rental License Update: Valencia Region", category: "Regulation", date: "Jul 2025", featured: false, excerpt: "New tourist rental regulations in the Comunitat Valenciana. Existing licenses grandfathered, new applications require municipal approval." },
    { title: "Mortgage Rates in Spain: Trend Analysis", category: "Finance", date: "Jul 2025", featured: false, excerpt: "Fixed rates stabilizing around 3.0–3.5% for non-residents. Variable rates remain attractive at Euribor + 1.2–1.8%." },
  ];

  const categoryColors: Record<string, string> = {
    "Market Report": "var(--terracotta)",
    "Regulation": "var(--warning)",
    "Tax Guide": "var(--info)",
    "Investment": "var(--success)",
    "Finance": "var(--gold)",
  };

  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>Market Intelligence</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Curated insights for cross-border property buyers and investors.
      </p>

      {/* Featured */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-md)", marginBottom: "var(--space-xl)" }} className="featured-grid">
        {articles.filter(a => a.featured).map((article) => (
          <div key={article.title} style={{ background: "var(--espresso)", borderRadius: "var(--radius-xl)", padding: "var(--space-xl)", cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: categoryColors[article.category] ?? "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {article.category}
            </span>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", fontWeight: 500, color: "var(--cream)", margin: "var(--space-sm) 0 var(--space-md)", lineHeight: 1.3 }}>
              {article.title}
            </h3>
            <p style={{ fontSize: "var(--text-sm)", fontWeight: 300, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>
              {article.excerpt}
            </p>
            <span style={{ display: "block", marginTop: "var(--space-md)", fontSize: "var(--text-xs)", color: "rgba(255,255,255,0.25)" }}>{article.date}</span>
          </div>
        ))}
      </div>

      {/* All articles */}
      <div style={{ background: "var(--bg-card)", borderRadius: "var(--radius-xl)", border: "1px solid var(--border-subtle)", overflow: "hidden" }}>
        <div style={{ padding: "var(--space-xl) var(--space-xl) var(--space-md)" }}>
          <h3 style={{ fontSize: "var(--text-sm)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--text-muted)", fontFamily: "var(--font-sans)" }}>
            All Articles
          </h3>
        </div>
        {articles.filter(a => !a.featured).map((article, i) => (
          <div key={article.title} style={{ padding: "var(--space-md) var(--space-xl)", borderBottom: i < articles.filter(a => !a.featured).length - 1 ? "1px solid var(--border-subtle)" : "none", cursor: "pointer", transition: "background 0.2s" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--cream)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--space-lg)" }}>
              <div>
                <div style={{ display: "flex", gap: "var(--space-sm)", alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 500, color: categoryColors[article.category] ?? "var(--text-muted)" }}>{article.category}</span>
                  <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>· {article.date}</span>
                </div>
                <h4 style={{ fontSize: "var(--text-base)", fontWeight: 500, marginBottom: 4 }}>{article.title}</h4>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", lineHeight: 1.6 }}>{article.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`@media (max-width: 768px) { .featured-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
