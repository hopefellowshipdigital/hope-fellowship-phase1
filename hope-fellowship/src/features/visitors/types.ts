/**
 * PLAN YOUR VISIT — FUTURE FORM DATA SHAPE
 * -------------------------------------------
 * Describes the fields a future "Plan Your Visit" form will collect, once
 * built against Supabase in a later phase. Nothing here is wired to a
 * real form yet — see components/ in this folder for the current
 * visitor-assistance call to action used in its place.
 */

export type PreferredContactMethod = "phone" | "email" | "whatsapp";

export interface PlanYourVisitSubmission {
  firstName: string;
  lastName: string;
  email: string;
  mobileOrWhatsapp: string;
  proposedVisitDate?: string;
  numberOfAdults: number;
  children: { count: number; ages?: string }[];
  questions?: string;
  preferredContactMethod: PreferredContactMethod;
  contactConsent: boolean;
}
