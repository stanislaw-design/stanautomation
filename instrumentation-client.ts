import posthog from "posthog-js";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN!, {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  opt_out_capturing_by_default: true,
  debug: process.env.NODE_ENV === "development",
  autocapture: false, // Disable automatic click tracking to reduce bundle and CPU usage
  disable_surveys: true, // Disable surveys.js download
  capture_performance: false, // Disable web-vitals.js download
  disable_session_recording: true, // Disable session recording.js download
});
