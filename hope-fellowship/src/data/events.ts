import type { EventSummary } from "@/types";

// No real Hope Fellowship events have been supplied yet. This stays an
// empty array rather than invented sample dates/programmes — the
// homepage and Events page both show a polished "nothing yet" panel
// instead. The EventSummary shape and EventCard-ready structure are kept
// so real events can be added here directly once confirmed, with no
// further component changes needed.
export const upcomingEvents: EventSummary[] = [];
