/* ═══════════════════════════════════════════════════
   AZELY — Core Type Definitions
   ═══════════════════════════════════════════════════ */

// ── Auth & Identity ──
export type UserRole = "client" | "agent" | "team_lead" | "admin" | "investor";

export interface Profile {
  id: string;
  clerk_user_id: string;
  role: UserRole;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  avatar_url?: string;
  language: Locale;
  created_at: string;
}

// ── i18n ──
export type Locale = "en" | "nl" | "es";

// ── Properties ──
export type PropertyType = "villa" | "apartment" | "townhouse" | "finca" | "penthouse" | "plot";
export type PropertyStatus = "available" | "reserved" | "sold" | "off_market";

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  status: PropertyStatus;
  address: string;
  city: string;
  region: string;
  country: string;
  bedrooms: number;
  bathrooms: number;
  area_m2: number;
  plot_m2?: number;
  price: number;
  price_reduced?: number;
  currency: string;
  description?: string;
  features: string[];
  images: string[];
  coordinates?: { lat: number; lng: number };
  energy_rating?: string;
  year_built?: number;
  created_at: string;
}

// ── Clients ──
export type DealStage =
  | "inquiry"
  | "viewing"
  | "offer"
  | "negotiation"
  | "accepted"
  | "due_diligence"
  | "notary"
  | "completed";

export interface Client {
  id: string;
  profile_id: string;
  property_id?: string;
  property?: Property;
  agent_id?: string;
  deal_stage: DealStage;
  active_features: string[];
  budget_min?: number;
  budget_max?: number;
  preferred_regions: string[];
  nationality: string;
  created_at: string;
}

export interface DealStageEntry {
  id: string;
  client_id: string;
  stage_key: DealStage;
  status: "pending" | "active" | "completed" | "skipped";
  date?: string;
  note?: string;
}

// ── Documents ──
export type DocumentCategory =
  | "identity"
  | "financial"
  | "legal"
  | "property"
  | "tax"
  | "insurance"
  | "contract"
  | "other";

export type DocumentStatus = "pending" | "uploaded" | "verified" | "rejected" | "expired";

export interface Document {
  id: string;
  client_id: string;
  name: string;
  category: DocumentCategory;
  status: DocumentStatus;
  storage_path?: string;
  file_size?: number;
  mime_type?: string;
  uploaded_at?: string;
  verified_at?: string;
  expires_at?: string;
}

// ── Renovation ──
export type PhaseStatus = "planned" | "in_progress" | "completed" | "on_hold";

export interface RenovationProject {
  id: string;
  property_id: string;
  client_id: string;
  name: string;
  budget: number;
  spent: number;
  completion: number;
  project_manager?: string;
  start_date?: string;
  end_date?: string;
}

export interface RenovationPhase {
  id: string;
  project_id: string;
  name: string;
  status: PhaseStatus;
  budget: number;
  spent: number;
  progress: number;
  order: number;
}

// ── Rental ──
export interface RentalProjection {
  id: string;
  property_id: string;
  status: "draft" | "active" | "paused";
  platforms: string[];
  nightly_low: number;
  nightly_high: number;
  occupancy_target: number;
  annual_revenue_estimate: number;
  licence_number?: string;
}

export interface RentalMonth {
  id: string;
  property_id: string;
  month: string;
  revenue: number;
  occupancy: number;
  bookings: number;
}

// ── Notifications ──
export type NotificationType = "info" | "success" | "warning" | "action" | "deadline";

export interface Notification {
  id: string;
  profile_id: string;
  title: string;
  body: string;
  type: NotificationType;
  read: boolean;
  link?: string;
  created_at: string;
}

// ── Team / CRM ──
export interface TeamMember {
  id: string;
  profile_id: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  avatar_url?: string;
  active_deals: number;
  closed_this_month: number;
  revenue_this_month: number;
}

export interface DealPipeline {
  stage: DealStage;
  label: string;
  deals: PipelineDeal[];
}

export interface PipelineDeal {
  id: string;
  client_name: string;
  property_name: string;
  value: number;
  stage: DealStage;
  agent: string;
  last_activity: string;
  probability: number;
}

// ── Mortgage ──
export interface MortgageOption {
  id: string;
  provider: string;
  type: "fixed" | "variable" | "mixed";
  amount: number;
  rate: number;
  term_years: number;
  monthly_payment: number;
  total_cost: number;
  ltv: number;
  status: "exploring" | "applied" | "approved" | "rejected";
}

// ── Fund / Investment ──
export interface Fund {
  id: string;
  name: string;
  size: number;
  nav: number;
  status: "raising" | "active" | "closed";
  properties: number;
  investors: number;
  irr_target: number;
}

export interface Participation {
  id: string;
  fund_id: string;
  profile_id: string;
  amount: number;
  units: number;
  date: string;
}
