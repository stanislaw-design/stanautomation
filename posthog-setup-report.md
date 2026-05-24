<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the StanAutomation Next.js 16 landing page. PostHog is initialized via `instrumentation-client.ts` (Next.js 15.3+ approach) with `opt_out_capturing_by_default: true` to respect GDPR/cookie consent. The `CookieBanner` component now calls `posthog.opt_in_capturing()` or `posthog.opt_out_capturing()` based on user choice, replacing the previous inline script snippet. A reverse proxy via Next.js rewrites routes PostHog traffic through `/ingest/*` to the EU endpoint.

| Event | Description | File |
|---|---|---|
| `hero_cta_demo_clicked` | User clicked "Zobacz demo →" in the Hero section | `src/components/sections/Hero.tsx` |
| `hero_cta_pricing_clicked` | User clicked "Sprawdź ceny" in the Hero section | `src/components/sections/Hero.tsx` |
| `demo_card_clicked` | User clicked "Zobacz demo →" on a demo card (with `city` + `restaurant_type` properties) | `src/components/sections/Demo.tsx` |
| `pricing_cta_clicked` | User clicked "Umów bezpłatną wycenę →" in the Pricing section (with `tables`, `bill`, `yearly_loss` properties) | `src/components/sections/Pricing.tsx` |
| `contact_email_copied` | User copied the contact email address | `src/components/sections/FinalCTA.tsx` |
| `contact_phone_clicked` | User clicked the phone number link | `src/components/sections/FinalCTA.tsx` |
| `navbar_cta_clicked` | User clicked "Umów demo" in the Navbar | `src/components/Navbar.tsx` |
| `cookie_consent_accepted` | User accepted cookie/analytics consent | `src/components/CookieBanner.tsx` |
| `cookie_consent_declined` | User declined cookie/analytics consent | `src/components/CookieBanner.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/701810)
- [All CTA clicks over time](/insights/qxLBrUvH)
- [Contact actions over time](/insights/CZzbqr5i)
- [Conversion funnel: Hero CTA → Contact](/insights/yeYYTYfS)
- [Cookie consent rate](/insights/5q6vGoRq)
- [Demo card clicks by city](/insights/ZRcyJ4KQ)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
