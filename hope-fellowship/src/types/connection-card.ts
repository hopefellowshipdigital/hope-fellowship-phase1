/**
 * CONNECTION CARD — FUTURE DATA SHAPE
 * -------------------------------------
 * These types describe the connection-card record as outlined in the
 * master project brief (Section 11). Nothing here is wired to a form or
 * database yet — this is preparation so the real form (planned for a
 * later phase, alongside Supabase) can be built against an already-
 * agreed shape rather than inventing one from scratch at that point.
 */

export type AttendanceMode = "online" | "in-person";

export type PreferredContactMethod = "phone" | "email" | "whatsapp";

export type ConnectionNextStep =
  | "learn-more"
  | "become-member"
  | "accepted-christ"
  | "recommitted"
  | "baptism"
  | "prayer"
  | "pastoral-support"
  | "join-ministry"
  | "children-youth-info"
  | "volunteer"
  | "church-updates";

export interface ConnectionCardSubmission {
  firstName: string;
  lastName: string;
  mobileOrWhatsapp: string;
  email: string;
  parishOrLocation?: string;
  preferredContactMethod: PreferredContactMethod;
  attendanceMode: AttendanceMode;
  serviceAttended?: string;
  howHeard?: string;
  isFirstTimeVisitor: boolean;
  areasOfInterest: ConnectionNextStep[];
  message?: string;
  contactConsent: boolean;
}
