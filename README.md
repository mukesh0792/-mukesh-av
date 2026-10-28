# Mukesh Kumar — Digital Cinema & AV Engineering Portfolio

Original, responsive professional portfolio site for Mukesh Kumar. Hosted on GitHub Pages.

## Custom-domain reliability hold
The DNSExit free subdomain `mukeshkumar.work.gd` is registered and returns four correct GitHub Pages A records on Google Public DNS, but visitors on regular mobile-carrier DNS encountered NXDOMAIN. The owner confirmed the same website opens when Android Private DNS is changed to `dns.google`. This strongly implicates carrier-side DNS resolution/cache/filtering, but the exact cause is not yet proven.

To avoid requiring visitors to modify their DNS settings, the main site is hosted at the standard GitHub Pages project URL. Do not re-add the custom-domain `CNAME` file until the hostname is confirmed accessible on ordinary mobile networks and Wi-Fi without DNS changes. Keep DNSExit account and DNS records intact; no mailbox should be advertised until mail delivery is verified.

## Production site
https://mukesh0792.github.io/-mukesh-av/

## Verified employment progression
Professional history is presented as separate roles rather than an undifferentiated Qube appointment:
- **Engineer**, Qube Cinema Technologies (Real Image), July 2011–June 2015
- **Senior Engineer**, Qube, July 2015–April 2023
- **Team Coordinator**, Qube, May 2023–December 2024
- **Manager – Sound & Projection**, PVR INOX Rajasthan, 26 December 2024–present

Promotion months and role titles confirmed by the portfolio owner on 28 October 2026. Month-end boundaries between promotions are inferred from successive promotion dates; exact days of the Qube role changes and resignation are not asserted. The dynamic experience counter remains anchored to July 2011.

## Public AI Learning & Projects content (October 2026 snapshot)
The homepage contains a new **AI & Projects** section at \`#ai-lab\`, focused on applied AI engineering rather than general-purpose AI marketing.

**Cinema AI** is an *independent digital cinema diagnostic application in development*. The public description distinguishes an early diagnostic/retrieval foundation from outstanding work: document ingestion and provenance, exact model/firmware matching, trustworthy citation and quote checks, bounded web research, approved engineer-feedback learning, regression/safety controls and end-to-end acceptance. Do not claim proprietary foundational model training, autonomous production learning, validated live web browsing, or completed general deployment without new evidence.

**Rajasthan Regional Projector PPM Bot** is a separate region-focused preventive maintenance automation effort. Site/status/review and verified-data workflow foundations exist, while **enhanced projector PPM report drafts**, comparisons, follow-ups and controlled delivery remain development goals. Do not claim enhanced reporting, automated email sends, unapproved report production or operational performance metrics are complete.

Do not publish internal infrastructure endpoints, tokens, client documentation, identifiable field logs, private incident data, manufacturer manuals or proprietary PPM reports. Public project summaries are separate from employer product or vendor endorsements. Update the status date and check each claim against current owner-approved evidence when milestones close.

## Architecture
- Plain HTML5, CSS and a small JavaScript enhancement. **No package installation, frameworks, analytics, trackers, cookies, servers or forms.**
- Locally served stylesheet, favicon, photo, JS. Fonts use operating system fonts.
- Dynamic experience is derived from July 2011 using calendar months in Asia/Kolkata on both pages. Since the exact joining day is not documented, the text clearly says approximate; HTML without JavaScript falls back to a timeless “since July 2011”. It updates on page load, visibility return, and hourly for long-open tabs. LinkedIn and GitHub are ordinary outbound links.
- Public professional summary at \`resume.html\` (print-friendly); existing \`resume.pdf\` is **not linked** until its content is reviewed for currency.
- Semantically structured headings, responsive layout, skip navigation, keyboard focus, reduced-motion support, explicit text labels and meaningful image alt text.

## Security review
- Document-level Content Security Policy (CSP) restricts scripts, images, CSS, forms, framing, third-party fetches, embedded objects and base URLs.
- IMPORTANT: Meta CSP is not equivalent to **HTTP response security headers**. GitHub Pages does not permit custom response headers for project Pages. Directives such as \`frame-ancestors\` and \`sandbox\` **cannot be enforced through HTML meta CSP**; to enforce headers use a reverse proxy/CDN with header support, then verify browser response headers.
- Untrusted user data is never rendered into HTML; minimal JS only sets year, copies a fixed public contact email and closes the mobile menu.
- Contact button invokes the visitor's email client; this is intentionally **not represented as a server-side enquiry form**. There is no outbound API collection.
- No API keys, credentials or production/internal operational logs should be committed. Avoid uploading confidential site photos, identifiable equipment serial numbers or sensitive documents.
- Static site cannot guarantee protection against hosting-account compromise; secure GitHub account with 2FA/passkeys, restrict repo writers, protect \`main\` and review dependencies/changes.
- Existing legacy assets (including the old PDF and optional OEM logos) remain in repository history; audit and remove or replace when appropriate. Deleting from HEAD does not erase Git history.

## Design references (principles, not copies)
- Brittany Chiang: readable engineering experience and project hierarchy (https://brittanychiang.com)
- Lee Robinson: concise professional identity and focused information architecture (https://leerob.com)
- Industrial design concept: impactful headline, disciplined engineering visual tone (Dribbble shot 27070066)
- Architecture/editorial portfolios: numbered project descriptions and generous spacing

All HTML/CSS/JS code is original, not copied from these references.

## Update guidance
1. Create a branch and open a PR rather than editing \`main\` directly.
2. Validate that all local links and resources load from the GitHub Pages **project base path** \`/-mukesh-av/\`.
3. Verify desktop, mobile, browser console, keyboard navigation, printing, meta CSP and link opening.
4. Never invent quantitative performance claims, certifications, location names or employment dates; review the website's contents with the owner.
5. Use GitHub Pages Deployment/Actions status and check live pages after merging.

## Contact
Email links use: mukesh.projection@gmail.com
