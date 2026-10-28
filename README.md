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

## Q-SYS and Lightware company-logo correction (28 Oct 2026)
Previously the QSC Q-SYS Cinema 101 and Lightware AV-over-IP Basics training entries displayed only styled text labels instead of the logo graphics. The website homepage and printable profile now render brand image references:
- **Q-SYS:** PNG image hosted by Lightware on its partner-assets system: `https://assets.prod.lwm.lightware.com/public/strapi/q_sys_logo_de43a9aac0.png`.
- **Lightware:** official current company SVG: `https://www.lightware.com/images/logo.svg`.

These assets are displayed solely to identify the training organizations, not as forged certificate seals. Mobile and print badges remain small and retain visible training details as text. Their HTTPS origins are allowlisted exclusively for image loading in CSP; no third-party scripts, analytics, trackers or styles were added. As externally hosted images, continued availability depends on the supplier and their brand rules; future authorized local assets would improve reliability.

## Scroll-reactive cinematic background (October 2026)
The public homepage now contains an original **SVG digital-cinema projector silhouette** plus restrained, optically aligned RGB/white beam, RGBW colour-bar test-card and framing-guide motifs.

- A single fixed, decorative `.projection-ambient` layer sits **behind page content**, with `pointer-events:none` and `aria-hidden=true` so it cannot obstruct links, interfere with reading/navigation, or clutter the accessibility tree.
- A single passive, `requestAnimationFrame`-throttled scroll listener uses document scroll progress: **hero = projector silhouette**, **early scrolling = red/green/white rays**, **mid page = test colour bands**, **later page = subtle framing/focus guide**. No heavy canvas, libraries, animation loops, external image requests or audio.
- All motifs have deliberately low opacity. Dark reading surfaces remain intact. At mobile breakpoints the projector is smaller, opacity reduces, and slow transitions are controlled by the operating system's `prefers-reduced-motion` setting. Motion preference also disables positional drift and CSS transitions.
- Print excludes the ambient visual completely; printable `resume.html` remains unchanged.
- Update the `index.html` stylesheet URL version if modifying ambient CSS to avoid stale mobile browser styles. Do not place foreground copy inside the visual layer.

## Mobile scroll-effect visibility correction (28 Oct 2026)
A phone-browser report confirmed that the static projector silhouette rendered but scrolling did not reveal noticeable RGB rays, colour bars or framing. Root cause assessment: earlier HTML versioned only the CSS URL, not the JavaScript; mobile cache could retain the pre-effect script. Independently, RGB opacity was too low behind near-opaque content and the SVG's test-pattern groups were partly offscreen on a narrow viewport.

Fix: version **both** CSS and JS URLs, switch scroll-phase thresholds to viewport-based milestones (rays after 32px, bars after 0.85 screen, framing after 2.05 screens), strengthen carefully bounded beam alpha, and move test patterns into the mobile viewport. Mobile uses `mix-blend-mode:screen` to preserve white text brightness, screen-only responsive opacity, and no pointer handling. Respect high-contrast and reduced-motion preferences; print remains effect-free. These adjustments are intended to make the effects noticeable without obscuring links or copy. Visual quality should also be confirmed on a real mobile browser; automated source/static tests cannot prove human-perceived contrast.

## Scroll-reactive rainbow projection v3 (28 Oct 2026)
Owner mobile feedback: projector and RGB calibration rectangles disappear under some sections, RGB bands look too sharp, and light should behave like a cinema dimmer — brighter in empty space, gradually softer over readable content while sliding continuously with scroll.

The v3 homepage design replaces abrupt fixed-phase colour bars with a **soft, continuous seven-colour rainbow beam** rendered in a single local `cinema-ambient.js` Canvas2D layer. Light originates near the existing hand-drawn SVG projector lens. Broad, blurred curved strokes with pastel red/orange/yellow/green/cyan/blue/violet are supported by faint radial glows over the entire viewport. Scroll progress causes smooth bounded movement; no perpetual animation when the user stops interacting.

The auto-dimmer uses Canvas2D `destination-out` with feathered masking over foreground article headings, text and content cards. These regions stay mostly dark, allowing text to remain readable while empty background space receives the rainbow. The projector remains fixed above page sections, with opacity automatically reduced rather than hidden when it overlaps a content block. Both canvas and projector visual layers use `pointer-events:none`, do not receive focus, and are `aria-hidden`. No page text or user data is rendered into the canvas.

Technical safeguards: one passive scroll handler, `requestAnimationFrame` scroll easing that terminates, a 1.5 maximum device-pixel ratio, browser reduced-motion and increased-contrast support, zero network requests and no external dependencies. Reduced-motion stops scroll gliding; print removes both visuals. CSP remains local-script only; mobile CSS/JS URLs are versioned to bypass stale caches. Existing portfolio content, certification issuer logos and social links are unchanged.

The old hard-edged SVG RGB bars/framing overlays are hidden and their legacy scroll handler removed. Visual results should be checked on physical Android/Chrome browsers; code checks and browser inspection cannot by themselves guarantee aesthetic appearance on every device.

## RGB projection responsive training-trigger update (28 October 2026)
Following owner feedback, the cinematic background now uses **only three saturated but soft RGB channels (red, green, blue)** originating from the optical center of the generic digital-cinema projector illustration.

**Portrait phone layout:** The SVG projector is cropped to its hardware region rather than retaining a wide scene canvas and displayed at bottom-centre, using a max-80vw responsive width. Its original lens geometry is translated into viewport coordinates so the beam origin aligns with the on-screen lens.

**Landscape and desktop:** The same bottom-centre projection illustration uses narrower responsive widths and identical RGB rendering. Mobile landscape, laptop, and desktop share the same scroll-driven training trigger, which is based on element geometry instead of whole-document percentage.

**Spread transition:** The previously present `Extended AV Training` block now has `id="extended-av-training"`. As it approaches and enters the viewport, RGB beams expand from three focused paths to a wide fan. Three broad colour-specific radial halos fill the **whole viewport** from that point onward (and reverse smoothly when scrolling upward). Within text and card areas, the established feathered `destination-out` focus mask preserves readability; unused background space receives richer light.

**Performance, accessibility and security:** The Canvas2D draw loop remains tied to passive scrolling and short requestAnimationFrame easing, terminating at rest. Pixel density stays capped at 1.5; no new external assets, model imagery, tracking, network calls, packages or libraries were introduced. Decorative layers retain `aria-hidden`, `pointer-events:none`, reduced motion, increased contrast and print exclusion. The printable `resume.html` does not gain the effect.

**QA:** Static checks and mocked Canvas2D scroll tests cover portrait (390×844), mobile landscape (844×390), and desktop (1440×900), including three RGB channels, full-screen spread and termination at rest. Device-specific visual balance still benefits from real handset review.

## Upward-facing RGB lens and non-narrowing full-width fan (28 October 2026)
Owner visual correction: the bottom-centre projector should physically face the **upward direction of its RGB light**. When scrolling upwards from Extended AV Training, the RGB beam must **not** contract into narrow bands; light should originate at the lens and spread across the screen from left to right all the way to the top.

- Rotate the generic projector SVG illustration clockwise by 90° using CSS, placing its former left-facing optical front at the **top**. Its body remains bottom-centre on portrait mobile, landscape phone and desktop; bottom offsets account for the rotated bounding footprint.
- Use `SVGSVGElement.getScreenCTM()` to map the real SVG lens coordinate `(876,456)` to viewport pixels **after CSS rotation**; use a safe top-centre fallback in engines lacking SVGPoint. This avoids beams emerging from the wrong part of the illustration.
- Replace variable-width Bézier strokes with **three feathered RGB cone-shaped fills**. All three channels share the lens origin; together their top boundaries reach past both left and right screen edges. **Cone geometry never depends on scroll position or training trigger**, so scrolling upward cannot narrow it.
- Extended AV Training still triggers enhanced red/green/blue halo illumination across the full viewport; scrolling upwards reduces only the halo's richness, not the RGB cone's width.
- Preserve text/card auto-dimming, noninteractive `aria-hidden` layers, user motion/contrast preferences, existing portfolio and printable resume. All assets use versioned URLs to avoid stale mobile JS/CSS.

## Mobile RGB emphasis and smaller projector (28 October 2026)
Owner phone feedback: projector hardware appeared oversized and drew attention away from the RGB light. To restore balance, on phone portrait the upward-facing bottom-centre projector is reduced from roughly 79vw (up to 320px) to **50vw (max 195px)**; landscape phone widths are capped at about **175px** or less, depending on viewport. Housing opacity and decorative shadow are lowered, but the lens remains physically upward-facing.

Only phone/compact landscape colour rendering receives a **1.52× RGB beam and training-halo alpha boost** (bounded below 1.0). Desktop RGB strength remains unchanged. The three-channel full-width cone, Extended AV Training brightness ramp, focus-aware automatic dimming, reduced-motion and high-contrast support continue unchanged. The user's original profile, career, logos and all social links are untouched; printable profile remains effect-free.

The homepage bumps CSS, app.js and cinema-ambient.js query versions so mobile caches fetch the new design. Source checks and Canvas2D simulations for 390×844 portrait, 844×390 landscape and 1440×900 desktop verify relative colour strength, projector alpha, auto-mask and idle frame termination. Physical device screenshot review remains useful for aesthetic tuning.

## Stationary bottom-centre projector; RGB-only scroll response (29 October 2026)
Owner explicitly requires that the digital-cinema projector must **stay stuck at the bottom of the viewport** rather than moving or changing with the page. Only its RGB projection rays, their scroll-responsive brightness/spread at Extended AV Training, and the existing focus-aware light dimmer should vary during scrolling.

V7 makes the upward-facing, bottom-centred projector SVG **fixed-positioned inside its fixed viewport overlay** with invariant CSS transform, size and opacity at each responsive breakpoint. The previous `cinema-ambient.js` logic that inspected text overlap and changed `--projector-alpha` on every scroll frame has been removed entirely. The same SVG screen-CTM lens point is used to anchor RGB beams; its visual position does not depend on scroll progress. The Canvas2D renderer continues using passive scroll and bounded requestAnimationFrame easing, with RGB light as the only changing decorative element.

Portrait mobile retains the compact 50vw/195px projector, upward-pointing lens, low-key visual weight, and the stronger red/green/blue colour settings from V6; responsive landscape/desktop layouts continue unchanged. Decorative layers remain noninteractive, reduced-motion/contrast preferences stay respected, and print still removes projection artwork. CSS/JS cache versions were updated for mobile browsers. Existing career, training, AI projects and social links were not modified.

## Projector anchored to Contact section only (29 October 2026)
Owner design change: the small upward-facing projector belongs with **“Let's build what's next.”** It should **not appear while scrolling through the rest of the site**. RGB scroll lighting remains throughout the website.

V8 physically moves the projector SVG from the global fixed decorative layer into the existing `#contact` section, below the social links, within its own small normal-flow decoration. The contact-scoped CSS overrides the legacy fixed-position projector declarations with a `position:relative` container and `position:absolute` centred rotated SVG. The projector therefore enters the viewport only when the reader reaches Contact and naturally leaves when scrolling away. It no longer sticks to the window. The mobile projector is further constrained to 43vw / 152px, with 162px maximum on mobile landscape.

The independent Canvas2D RGB light field is still fixed to the viewport, moving with scrolling and dimming behind content. Before Contact is visible it uses a bottom-centre **virtual light origin**; as the Contact illustration becomes visible, it smoothly blends its RGB light origin to the true upward-facing lens position via SVG screen transformation. Thus the effect is retained without inadvertently displaying the projector on every section. CSS and JS cache versions are bumped. Resume/print, project information, career data, logos and links are not changed.

## V9 professional dual-purpose portfolio redesign (29 Oct 2026)

**Goal:** Serve both international digital-cinema / AV technical recruiters and engineering-AI collaborators in one credible public portfolio. The site should prioritize verified professional experience and useful technical work, with a separate direct route for independent Cinema AI innovation.

### Homepage decisions
- **Recruiter-first hero:** "Engineering cinema systems. Building what's next." with current verified PVR INOX Manager – Sound & Projection role, dynamic experience since July 2011, Barco Series 4 Level 2 and direct Engineering Work / Cinema AI / printable-profile links.
- **Two pathways near the top:** Engineering Career and Innovation & AI are full keyboard-accessible anchor cards leading directly to the relevant sections; no separate landing pages or duplicate content.
- **Content order:** Hero → two pathways → Expertise → representative Engineering Work → OEM Certifications and additional AV training → Experience → Cinema AI / Regional PPM projects → Contact. The career path is easy to scan; AI remains one click away.
- **Engineering work:** Representative commissioning, fault-isolation, and show-control workflows, with explicitly labeled engineering steps and privacy disclaimer. No invented site-specific case outcomes, quantified reliability gains, client information or unaudited project claims.
- **Current achievements vs plans:** AI cards retain in-development labels and separate engineering foundation from pending work. All employer, certification, education, training and project statements remain at their verified existing scope.
- **Visual system:** Added `portfolio-v9.css` loaded only on `index.html` after shared styles.css. Navy/charcoal design, restrained cyan accent, calm metadata, compact photo, modern responsive cards, less dominant RGB overlay, and Contact-only decorative projector. `resume.html` remains on original shared styles, visually unaffected.
- **Accessibility & performance:** Native anchors and details navigation, visible focus, mobile tap targets, reduced motion, high contrast, no new JavaScript dependencies, fonts or trackers, original strict CSP. Page still uses only local existing scripts and image assets. Tablet hero stacks rather than squeezing text beside a large photo.
- **Deployment process:** Branch → static structural and cross-device source validation → reviewed PR and merge → successful GitHub Pages deployment → check live HTML/CSS/assets. Do not claim actual perceptual mobile balance has been verified without direct device evidence.

### Future content opportunity
Add **sanitized, verified engineering case studies** only after their actual problem, diagnostic steps, approved evidence and repair/commissioning outcome are corroborated and cleared for public use. In the meantime, the site uses representative technical workflows rather than fabricated achievements. If a direct-downloadable PDF CV becomes available, link to its verified public file instead of falsely advertising the printable HTML as PDF.

## V10 domestic and international resume redesign (29 October 2026)
The older public `resume.html` summary has become a **resume selector** offering two distinct role-oriented, single-column professional resumes:

- `resume-india.html`: India/domestic managerial, cinema technical operations and service leadership emphasis. Regional projection and sound operations, PPM, OEM/RMA coordination, installation and fault isolation.
- `resume-international.html`: International digital cinema service engineer, field support and technical operations emphasis. Cross-OEM Barco/Christie/NEC platforms, laser/optics, Dolby/GDC systems, commissioning and fault-isolation terminology. No assumptions about visa, foreign work authorisation or relocation approval.
- `resume.html`: Responsive, accessible choice page with separate clear calls to action and instructions for using browser **Print / Save as PDF**. Neither resume claims that a PDF is directly hosted; the user generates it locally via the browser print dialog.
- `resume-v10.css`: Standalone responsive single-column, text-first resume design with restrained navy screen navigation, white printable documents, A4 print margins, legible typography and hidden print controls. No external fonts, logos/photos, complex tables or graphics in the resumes themselves.
- `resume-actions.js`: Small first-party script for the Print / Save as PDF buttons; no analytics or data submission.
- Homepage links: hero, desktop/mobile navigation, credentials and contact now point to the same India/International resume chooser.

**Evidence and scope:** The resumes use established public employment history: PVR INOX Manager – Sound & Projection since 26 Dec 2024, Qube Team Coordinator (May 2023–Dec 2024), senior engineer (Jul 2015–Apr 2023), and engineer (Jul 2011–Jun 2015); verified Barco Series 4 Level 2 (2025), Series 2 LLU Level 1 (2023), Series 4 Level 1 (2022); Christie technical training, NEC, Dante Level 1, Q-SYS and Lightware training; the listed technical platforms and ongoing Cinema AI/PPM initiatives. No unverified commercial results, technical performance metrics, salaries, phone numbers, client details or unsupported immigration status are added. Existing website and resume contact addresses and LinkedIn URL are reused unchanged.

**ATS-conscious, not an ATS guarantee:** The downloadable representation is user-generated via browser Print/Save as PDF. Different hiring systems parse documents differently; final applications should be reviewed against the actual job description. Any new work-permit, phone, travel or relocation details should only be added after owner verification.

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

## Social links
Public homepage Contact links include LinkedIn, GitHub and the owner-provided Facebook share URL `https://www.facebook.com/share/1Jtk66hXDC/`. Facebook requires authentication to inspect the underlying profile in available anonymous browser tests; the website therefore preserves the exact user-supplied share URL without guessing a username/profile ID. No Facebook SDK, tracking widget or embedded script is installed.

## Contact
Email links use: mukesh.projection@gmail.com
