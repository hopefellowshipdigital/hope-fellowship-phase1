/**
 * VISITOR CONFIGURATION
 * -----------------------
 * Visitor-specific settings not already covered by src/config/site.ts.
 * Fields left as an empty string are genuinely unconfirmed — components
 * reading this file must treat an empty value as "not yet available"
 * and fall back to visitor-friendly language ("contact the church team"),
 * never a bracket placeholder.
 */
export const visitorConfig = {
  serviceDay: "Sunday",
  serviceTime: "9:00 AM",
  registrationRequired: false,
  arrivalGuidance: "",
  parkingInformation: "",
  publicTransportInformation: "",
  childrenInformation: "",
  accessibilityInformation: "",
  dressGuidance: "Come as you are — there's no dress code.",
};
