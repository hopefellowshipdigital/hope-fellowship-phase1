/**
 * HOMEPAGE IMAGE CONFIGURATION
 * -----------------------------
 * Every homepage image reference lives here. Hope Fellowship currently
 * has one authorized photo in the project (the sanctuary/stage setup,
 * used below as `sanctuaryPhoto`). Everywhere else a real photo is
 * genuinely needed, `recommended` documents exactly what to shoot or
 * source so a real image can drop in later — just replace the `src`
 * (or set `photo` from null to a path) and nothing else needs to change.
 */

export interface HomepagePhoto {
  src: string;
  alt: string;
  /** Where on the image the important content sits — keeps faces/subjects
   *  from being cropped awkwardly at different aspect ratios. */
  focalPosition: string;
}

export interface RecommendedPhoto {
  photo: HomepagePhoto | null;
  /** What to shoot or source when a real photo is ready to replace this slot. */
  recommended: string;
}

// The one authorized Hope Fellowship photo currently in the project.
const sanctuaryPhoto: HomepagePhoto = {
  src: "/images/congregation.jpg",
  alt: "The Hope Fellowship Church sanctuary set up for worship",
  focalPosition: "center 35%",
};

export const homepageImages = {
  hero: {
    photo: sanctuaryPhoto,
    recommended:
      "A wide, energetic shot of the congregation mid-worship — hands raised, room full, warm natural light.",
  } satisfies RecommendedPhoto,

  welcomeLarge: {
    photo: sanctuaryPhoto,
    recommended:
      "A warm shot of the welcome team greeting visitors at the door, or the pastor engaging with the congregation.",
  } satisfies RecommendedPhoto,

  welcomeCandidOne: {
    photo: null,
    recommended: "A candid close-up of fellowship after service — conversation, laughter, connection.",
  } satisfies RecommendedPhoto,

  welcomeCandidTwo: {
    photo: null,
    recommended: "Children's ministry or youth group in action.",
  } satisfies RecommendedPhoto,

  transformation: {
    photo: null,
    recommended:
      "A photo from a recent community outreach, food drive, or service project reflecting Hope Fellowship's social impact.",
  } satisfies RecommendedPhoto,

  churchLifeOne: {
    photo: null,
    recommended: "A candid photo from a recent Sunday service.",
  } satisfies RecommendedPhoto,

  churchLifeTwo: {
    photo: null,
    recommended: "A photo from a recent church event, small group, or community gathering.",
  } satisfies RecommendedPhoto,

  finalInvitation: {
    photo: sanctuaryPhoto,
    recommended: "A warm, wide shot of the sanctuary or congregation to close the page on an inviting note.",
  } satisfies RecommendedPhoto,
};
