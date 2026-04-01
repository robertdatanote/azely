export const metadata = { title: "Messages" };

export default async function Messages({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  await params;
  return (
    <div>
      <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 500, marginBottom: "var(--space-xs)" }}>
        Messages
      </h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-xl)" }}>
        Communicate with your agent and team in real-time.
      </p>
      <div
        style={{
          background: "var(--bg-card)",
          borderRadius: "var(--radius-xl)",
          border: "1px solid var(--border-subtle)",
          padding: "var(--space-3xl)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 48, marginBottom: "var(--space-md)", opacity: 0.3 }}>💬</div>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", marginBottom: "var(--space-sm)" }}>
          Messaging Coming Soon
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>
          Secure, real-time messaging with your agent, notary, and team.
        </p>
      </div>
    </div>
  );
}
