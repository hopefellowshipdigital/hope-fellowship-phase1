import type { RecommendedPhoto } from "@/data/homepage-images";

/**
 * VISIT PAGE IMAGE CONFIGURATION
 * --------------------------------
 * Same pattern as src/data/homepage-images.ts: every image position is
 * documented here so a real photo can drop in later by changing only
 * this file. Nothing here is a real Hope Fellowship photo yet — every
 * slot renders the refined branded fallback until one is added, per the
 * instruction not to reuse the sanctuary photo where it wouldn't fit.
 */
export const visitImages = {
  hero: {
    photo: null,
    recommended:
      "A warm, wide shot of the welcome team or entrance greeting visitors as they arrive.",
  } satisfies RecommendedPhoto,

  whatToExpect: {
    photo: null,
    recommended: "A candid photo of the congregation during worship, showing the room and atmosphere.",
  } satisfies RecommendedPhoto,
};
