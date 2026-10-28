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

**Regional Projector PPM Bot** is a separate region-focused preventive maintenance automation effort. Site/status/review and verified-data workflow foundations exist, while **enhanced projector PPM report drafts**, comparisons, follow-ups and controlled delivery remain development goals. Do not claim enhanced reporting, automated email sends, unapproved report production or operational performance metrics are complete.

Do not publish internal infrastructure endpoints, tokens, client documentation, identifiable field logs, private incident data, manufacturer manuals or proprietary PPM reports. Public project summaries are separate from employer product or vendor endorsements. Update the status date and check each claim against current owner-approved evidence when milestones close.

## Employer and OEM logo identification (October 2026)
The Career timeline and printable profile display PVR INOX and Qube Cinema employer logos next to the corresponding verified roles. The Credentials section displays the actual Barco and Christie logo images, **not generated certificate seals**. Logo marks are descriptive references to employing/training organizations, not a claim of employer endorsement, official certificate authenticity checking, or partnership.

Logo source inventory:
- **PVR INOX:** the homepage and printable profile now use a typographic `PVR ★ INOX` identification treatment, based on the company's observed star-separated wordmark in its May 11, 2026 exchange-filed investor presentation (https://nsearchives.nseindia.com/corporate/PVRINOXLTD_11052026140830_PVRINOXInvestorPresentation11052026.pdf). This is a CSS/text representation, **not an official logo asset or certificate seal**. The document itself is not copied into the site.
- **Qube Cinema:** the company’s own logo at https://www.qubecinema.com/sites/default/files/u76/qube_logo_new.png (trademarked)
- **Barco:** existing in-repository `BARCO_logo.png` (local asset; retain original color/proportions)
- **Christie:** existing in-repository `Christie-Logo.JPG` (local asset with ®; retain original color/proportions)

The Qube employer image is the only externally hosted visual and is allowlisted as a specific HTTPS origin in the image-only CSP policy. No scripts, analytics, or external styles were added. External image requests may disclose visitor IPs to the source host, even with `referrerpolicy="no-referrer"`. If owner-authorized local Qube art becomes available, host that instead for stronger privacy and offline resilience. Barco and Christie publish strict logo-use guidelines, which should be respected in public presentation. Logos are never described as digitally verified certificates.

## Resume comparison and public-content reconciliation (28 Oct 2026)
Audited the 2-page owner-uploaded PDF `Kumar Cinema Service Technician & AV.pdf` against `index.html` and `resume.html`. Changes include:
- Added **Dante Level 1, 3rd Edition (2026)**, **QSC Q-SYS Cinema 101 training (2026)**, **NEC NC1202/NC1402 laser projector training (2024)**, and **Lightware Visuals India AV-over-IP Basics Level 1** (year not supplied).
- Expanded **Christie 2025 training** wording to identify Series I/II maintenance, RealLaser/CineLife light-source and safety, and projector/lamp safety rather than implying a single standardized certificate.
- Expanded related AV skills and *explicitly marked networking, multicast and AV-over-IP as learning-stage exposure*.
- Added the source CV's **Outlook email address** as a secondary contact, keeping the existing publicly published Gmail contact. Owner's **personal mobile phone number was intentionally not published**.
- Preserved owner-corrected Qube progression: Engineer (Jul 2011), Senior Engineer (Jul 2015), Team Coordinator (May 2023), with PVR INOX from 26 Dec 2024. The source PDF's combined Team Coordinator tenure conflicts with these newer direct confirmations.
- The PDF states 14+ years; the website retains **automatically calculated experience starting July 2011** instead of the stale rounded figure.
- The PDF reports **80+ screens** and **99%+ uptime**, but these were *not* added as public quantitative performance claims because the source alone does not provide independent evidence or defined measurement periods.
- Website retains Diploma in Computer Hardware & Networking (IHT Moradabad, 2010); earlier-school qualifications, passport status and 30-day notice are omitted from evergreen public portfolio content because they are less important or may become stale.
- The user's uploaded source PDF is **not** copied or linked on the public website.

## Architecture
- Plain HTML5, CSS and a small JavaScript enhancement. **No package installation, frameworks, analytics, trackers, cookies, servers or forms.**
- Locally served stylesheet, favicon, portrait, JavaScript, plus in-repo Barco, Christie, Dante and NEC logo files. A single Qube Cinema employer-logo image is hosted externally; PVR INOX uses text/CSS to show its star-separated wordmark. Fonts use operating system fonts.
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
