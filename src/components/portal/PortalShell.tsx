"use client";

import { LocaleProvider } from "@/i18n/LocaleProvider";
import { PortalSidebar } from "./PortalSidebar";
import { PortalHeader } from "./PortalHeader";
import { getClientById } from "@/data/mockClients";
import type { ReactNode } from "react";

export function PortalShell({
  clientId,
  children,
}: {
  clientId: string;
  children: ReactNode;
}) {
  const client = getClientById(clientId);

  return (
    <LocaleProvider>
      <div style={{ display: "flex", minHeight: "100dvh" }}>
        <PortalSidebar clientId={clientId} activeFeatures={client.active_features} />
        <div
          style={{
            flex: 1,
            marginLeft: "var(--sidebar-width)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <PortalHeader clientId={clientId} />
          <main
            style={{
              flex: 1,
              padding: "var(--space-xl) var(--space-xl) var(--space-2xl)",
              maxWidth: "var(--max-content)",
              width: "100%",
            }}
          >
            {children}
          </main>
        </div>
      </div>
    </LocaleProvider>
  );
}
