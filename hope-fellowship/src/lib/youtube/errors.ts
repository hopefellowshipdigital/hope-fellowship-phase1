// Custom error types for the YouTube integration. Keeping these distinct
// lets the higher-level broadcast resolver decide how to fall back
// (missing config vs. quota vs. a plain network failure are all handled
// differently) without parsing error message strings.

/** Thrown when required configuration (API key, channel identifier) is
 *  missing. This is a setup problem, not a transient failure. */
export class YouTubeConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "YouTubeConfigError";
  }
}

/** Thrown when the YouTube Data API itself returns an error response. */
export class YouTubeApiError extends Error {
  status?: number;
  reason?: string;

  constructor(message: string, status?: number, reason?: string) {
    super(message);
    this.name = "YouTubeApiError";
    this.status = status;
    this.reason = reason;
  }
}

/** Thrown specifically when the API indicates the daily quota has been
 *  exceeded, so callers can back off rather than retry immediately. */
export class YouTubeQuotaError extends YouTubeApiError {
  constructor(message: string) {
    super(message, 403, "quotaExceeded");
    this.name = "YouTubeQuotaError";
  }
}

/** True when a caught error's reason indicates quota exhaustion. */
export function isQuotaError(error: unknown): error is YouTubeQuotaError {
  return error instanceof YouTubeApiError && error.reason === "quotaExceeded";
}
