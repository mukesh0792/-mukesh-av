# Mukesh Kumar — Digital Cinema & AV Engineering Portfolio

Original, responsive professional portfolio site for Mukesh Kumar. Hosted on GitHub Pages.

## Production site
https://mukesh0792.github.io/-mukesh-av/

## Architecture
- Plain HTML5, CSS and a small JavaScript enhancement. **No package installation, frameworks, analytics, trackers, cookies, servers or forms.**
- Locally served stylesheet, favicon, photo, JS. Fonts use operating system fonts. LinkedIn and GitHub are ordinary outbound links.
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
