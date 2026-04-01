export type Complexity = "low" | "medium" | "high";

export interface Module {
  name: string;
  description: string;
  tags: string[];
  dependencies?: string[];
  status: "live" | "beta" | "coming";
  hours: number;
  complexity: Complexity;
  implementationFee: number;
  monthlyFee: number;
}

export interface Layer {
  id: string;
  name: string;
  subtitle: string;
  color: string;
  modules: Module[];
}

// Rate: €95/hr implementation, monthly = complexity-based recurring
export const layers: Layer[] = [
  {
    id: "L0",
    name: "Foundation",
    subtitle: "Required base — every implementation starts here",
    color: "#0d1f3c",
    modules: [
      {
        name: "Auth & Identity",
        description: "Authentication, role-based access (client/team/admin/investor), row-level security. The identity layer everything else connects to.",
        tags: ["security", "multi-tenant"],
        status: "live",
        hours: 40, complexity: "high", implementationFee: 3800, monthlyFee: 195,
      },
      {
        name: "White-Label Engine",
        description: "CSS variable theming — swap brand colors, fonts, logo and the entire platform adapts. No code changes for a visual rebrand.",
        tags: ["theming", "branding"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 125,
      },
      {
        name: "Multi-Language (i18n)",
        description: "400+ translated strings (EN/NL/ES). Cookie-based language switching, server + client support. Add DE/FR/PT by uploading a JSON file.",
        tags: ["NL/EN/ES", "extensible"],
        status: "live",
        hours: 20, complexity: "medium", implementationFee: 1900, monthlyFee: 95,
      },
      {
        name: "Client Dashboard",
        description: "The home screen every client sees. Journey stepper, property card, KPI summary. The shell where all other modules render.",
        tags: ["responsive", "entry point"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 175,
      },
      {
        name: "Document Vault",
        description: "Upload, categorize, track status. The central document store that deal tracking, compliance, and e-signatures depend on.",
        tags: ["storage", "categories"],
        status: "live",
        hours: 28, complexity: "medium", implementationFee: 2660, monthlyFee: 145,
      },
      {
        name: "Notification System",
        description: "Type-specific alerts with urgency levels. The messaging backbone that pushes agent reminders, deal updates, and compliance alerts.",
        tags: ["push-ready", "real-time"],
        status: "live",
        hours: 20, complexity: "medium", implementationFee: 1900, monthlyFee: 115,
      },
    ],
  },
  {
    id: "L1",
    name: "Client Journey",
    subtitle: "The core transaction lifecycle — plug in the stages your agency covers",
    color: "#1a3a5c",
    modules: [
      {
        name: "Onboarding Automation",
        description: "5-step structured intake: personal, financial, legal, property, and communication preferences. Auto-fills downstream forms.",
        tags: ["intake", "workflow"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 28, complexity: "medium", implementationFee: 2660, monthlyFee: 145,
      },
      {
        name: "Deal & Acquisition Tracker",
        description: "Complete purchase timeline from inquiry to notary handover. Bid status, legal milestones, key contacts — the backbone of every transaction.",
        tags: ["timeline", "milestones"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 40, complexity: "high", implementationFee: 3800, monthlyFee: 195,
      },
      {
        name: "NIE & Administrative Flow",
        description: "8-step Spanish bureaucracy tracker: NIE, bank account, fiscal representative, power of attorney, Nota Simple, tax registration, Padron.",
        tags: ["compliance", "Spain-specific"],
        dependencies: ["Deal & Acquisition Tracker"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 125,
      },
      {
        name: "Financial Calculator Suite",
        description: "4-tab calculator: purchase costs (ITP/IVA), mortgage simulation, annual running costs, rental ROI. Embeddable on any page.",
        tags: ["calculator", "multi-tab"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 32, complexity: "high", implementationFee: 3040, monthlyFee: 155,
      },
      {
        name: "Mortgage Comparison",
        description: "Side-by-side comparison of NL vs. ES mortgage options: LTV limits, rates, terms, monthly payments, total costs. Feeds cost-of-ownership.",
        tags: ["comparison", "NL-ES"],
        dependencies: ["Financial Calculator Suite"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 125,
      },
      {
        name: "E-Signature Flow",
        description: "3-step signing modal: review → sign → confirmed. Audit trail with timestamps and method. Integrates with the Document Vault.",
        tags: ["signing", "audit trail"],
        dependencies: ["Document Vault"],
        status: "live",
        hours: 20, complexity: "medium", implementationFee: 1900, monthlyFee: 115,
      },
      {
        name: "Messaging & Activity Feed",
        description: "Slack-style threaded messaging between client, agent, and team. Activity timeline for every deal event, document upload, and status change.",
        tags: ["chat", "activity log"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 175,
      },
    ],
  },
  {
    id: "L2",
    name: "Property Operations",
    subtitle: "Post-purchase value — renovation, rental, and property management",
    color: "#8B5E3C",
    modules: [
      {
        name: "Renovation Management",
        description: "Phase-based project tracking: budget vs. spent, progress bars, photo uploads per phase, contractor assignment. Full project visibility.",
        tags: ["phases", "budget tracking"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 175,
      },
      {
        name: "Contractor Marketplace",
        description: "Vetted regional contractors with ratings, reviews, specialties. Request quotes, compare, assign to renovation phases.",
        tags: ["marketplace", "ratings"],
        dependencies: ["Renovation Management"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 125,
      },
      {
        name: "Rental Revenue Dashboard",
        description: "Monthly revenue, occupancy rates, booking counts, platform breakdown. SVG charts — zero chart library dependencies.",
        tags: ["analytics", "SVG charts"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 175,
      },
      {
        name: "Rental Management Suite",
        description: "Booking calendar, guest management, cleaning schedules, check-in/out instructions. Multi-platform sync (Airbnb, Booking, Vrbo).",
        tags: ["bookings", "multi-platform"],
        dependencies: ["Rental Revenue Dashboard"],
        status: "live",
        hours: 32, complexity: "medium", implementationFee: 3040, monthlyFee: 165,
      },
      {
        name: "Tourist Licence Tracker",
        description: "Municipality-specific licence requirements, application status, renewal dates. Auto-alerts before expiry.",
        tags: ["Valencia-specific", "real-time"],
        dependencies: ["Rental Revenue Dashboard"],
        status: "live",
        hours: 20, complexity: "medium", implementationFee: 1900, monthlyFee: 95,
      },
      {
        name: "Dynamic Pricing Engine",
        description: "Seasonal pricing recommendations based on demand, competitor rates, and occupancy targets. Monthly rate tables with low/high ranges.",
        tags: ["pricing", "seasonal"],
        dependencies: ["Rental Revenue Dashboard"],
        status: "live",
        hours: 32, complexity: "high", implementationFee: 3040, monthlyFee: 165,
      },
      {
        name: "Utilities Setup Tracker",
        description: "Provider-by-provider setup status: electricity, water, gas, internet, insurance, alarm. Account numbers, monthly costs, contact details.",
        tags: ["providers", "status tracking"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 12, complexity: "low", implementationFee: 1140, monthlyFee: 65,
      },
      {
        name: "Comunidad Management",
        description: "Community fees, reserve fund, meeting calendar, key contacts, maintenance updates. The HOA module for Spanish property owners.",
        tags: ["HOA", "fees"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 12, complexity: "low", implementationFee: 1140, monthlyFee: 65,
      },
    ],
  },
  {
    id: "L3",
    name: "Intelligence & Compliance",
    subtitle: "The smart layer — regulation, tax, cost analysis, and market data",
    color: "#7a8a9a",
    modules: [
      {
        name: "Regulatory Compliance Engine",
        description: "Per-municipality risk profiles, moratorium tracking, co-owner rules, NRUA monitoring. No competitor offers this.",
        tags: ["risk profiles", "automated"],
        status: "live",
        hours: 40, complexity: "high", implementationFee: 3800, monthlyFee: 215,
      },
      {
        name: "Cross-Border Tax Dashboard",
        description: "NL↔ES dual jurisdiction view: IRNR, ITP, Box 3, DTT offsets, Modelo 210 quarterly filings. The tax command center.",
        tags: ["multi-jurisdiction", "NL-ES"],
        dependencies: ["Financial Calculator Suite"],
        status: "live",
        hours: 44, complexity: "high", implementationFee: 4180, monthlyFee: 225,
      },
      {
        name: "Cost of Ownership Calculator",
        description: "Real annual P&L: mortgage, IBI, comunidad, insurance, IRNR — offset with rental income. Break-even analysis and scenario modeling.",
        tags: ["P&L", "scenario modeling"],
        dependencies: ["Cross-Border Tax Dashboard", "Rental Revenue Dashboard"],
        status: "live",
        hours: 28, complexity: "high", implementationFee: 2660, monthlyFee: 155,
      },
      {
        name: "Compliance Calendar",
        description: "Per-client deadline timeline: IRNR filings, IBI, insurance renewals, licence data, inspections. Auto-derived from other modules.",
        tags: ["automated", "reminders"],
        dependencies: ["Regulatory Compliance Engine", "Cross-Border Tax Dashboard"],
        status: "live",
        hours: 20, complexity: "medium", implementationFee: 1900, monthlyFee: 115,
      },
      {
        name: "Content & Market Intelligence",
        description: "Price data per municipality, editorial articles, regulation updates, rental insights. Positions you as an authority.",
        tags: ["content", "market data"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 135,
      },
    ],
  },
  {
    id: "L4",
    name: "Team & Operations",
    subtitle: "Internal tools — CRM, pipeline, tasks, reporting. Runs the agency.",
    color: "#C4A96A",
    modules: [
      {
        name: "Team Dashboard & KPIs",
        description: "Pipeline value, managed properties, rental YTD, conversion ratios. Alerts, activity feed, quick client links.",
        tags: ["analytics", "real-time"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 195,
      },
      {
        name: "Deal Pipeline (Kanban)",
        description: "8-stage visual pipeline from inquiry to sale. Days-in-stage, urgent/stale flags. Connected to every client deal tracker.",
        tags: ["kanban", "workflow"],
        dependencies: ["Deal & Acquisition Tracker"],
        status: "live",
        hours: 32, complexity: "high", implementationFee: 3040, monthlyFee: 175,
      },
      {
        name: "Contact Management (CRM)",
        description: "Activity timeline: calls, meetings, emails, documents, notes. Tags, lifecycle stages, linked deals.",
        tags: ["CRM", "timeline"],
        dependencies: ["Team Dashboard & KPIs"],
        status: "live",
        hours: 40, complexity: "high", implementationFee: 3800, monthlyFee: 195,
      },
      {
        name: "Task Management",
        description: "Assignable tasks with due dates, priorities, and deal/client linking. Team-wide task board with filters.",
        tags: ["tasks", "assignments"],
        dependencies: ["Team Dashboard & KPIs"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 125,
      },
      {
        name: "Reporting & Analytics",
        description: "Monthly/quarterly reports: revenue, deal velocity, agent performance, client satisfaction. Export to PDF.",
        tags: ["reports", "PDF export"],
        dependencies: ["Team Dashboard & KPIs"],
        status: "live",
        hours: 32, complexity: "high", implementationFee: 3040, monthlyFee: 175,
      },
      {
        name: "Property Marketplace",
        description: "Public-facing property listings with search, filters, and inquiry forms. SEO-optimized, integrated with deal pipeline.",
        tags: ["public-facing", "SEO"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 185,
      },
    ],
  },
  {
    id: "L5",
    name: "Scale",
    subtitle: "Growth infrastructure — portfolios, funds, investors, and the mobile app",
    color: "#C9A251",
    modules: [
      {
        name: "Multi-Property Portfolio",
        description: "Aggregate view across all owned properties: total value, yield, occupancy. Performance charts over time.",
        tags: ["portfolio", "analytics"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 28, complexity: "medium", implementationFee: 2660, monthlyFee: 155,
      },
      {
        name: "Fund Dashboard & NAV",
        description: "Fund-level management: NAV tracking, investor allocations, distribution history. For agencies managing pooled investments.",
        tags: ["funds", "NAV"],
        dependencies: ["Multi-Property Portfolio"],
        status: "live",
        hours: 40, complexity: "high", implementationFee: 3800, monthlyFee: 225,
      },
      {
        name: "Investor Portal",
        description: "Dedicated portal for fund investors: participation details, returns, distributions, quarterly reports.",
        tags: ["investors", "reporting"],
        dependencies: ["Fund Dashboard & NAV"],
        status: "live",
        hours: 36, complexity: "high", implementationFee: 3420, monthlyFee: 195,
      },
      {
        name: "Property Comparison Tool",
        description: "Side-by-side property comparison: price, yield, costs, features, location scores. Decision support for buyers.",
        tags: ["comparison", "decision support"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 20, complexity: "medium", implementationFee: 1900, monthlyFee: 95,
      },
      {
        name: "Returns Calculator",
        description: "IRR, cash-on-cash, cap rate projections with adjustable assumptions. Monte Carlo scenarios for risk-adjusted returns.",
        tags: ["IRR", "projections"],
        dependencies: ["Financial Calculator Suite"],
        status: "live",
        hours: 28, complexity: "high", implementationFee: 2660, monthlyFee: 155,
      },
      {
        name: "Investment Trip Manager",
        description: "Organize property viewing trips: flights, hotels, viewings schedule, participant management. Application flow for group trips.",
        tags: ["trips", "scheduling"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 24, complexity: "medium", implementationFee: 2280, monthlyFee: 125,
      },
      {
        name: "Progressive Web App",
        description: "Installable PWA with offline support, push notifications, and native-feel navigation. Works on any device.",
        tags: ["PWA", "offline"],
        dependencies: ["Client Dashboard"],
        status: "live",
        hours: 32, complexity: "high", implementationFee: 3040, monthlyFee: 175,
      },
    ],
  },
];
