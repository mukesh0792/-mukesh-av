# Mukesh Kumar - Professional AV & Digital Cinema Projection Engineer Website

A state-of-the-art, dark-themed portfolio and technical engineering showcase built for **Mukesh Kumar** (Senior AV & Cinema Projection Engineer, Sound & Projection Manager).

---

## 🌟 Key Features & Highlights

- **Authentic Engineering Profile**: Features real-world data from 14+ years of experience across **PVR INOX Limited** (80+ screens, 99%+ uptime) and **Qube Cinema Technologies** (13+ years of installations & laser retrofits).
- **OEM Projector & Laser Systems**: Covers certified expertise across **Barco (Series 2 & 4, LLU, Level 2 Diagnostics)**, **Christie (RealLaser, CineLife, Series I & II)**, and **NEC (NC1202/1402)**.
- **Interactive DCI Cinema Screen & Lumens Calculator**: Computes required ANSI lumens, surface area, and recommended OEM projector models using SMPTE DCI 14.0 fL (2D) and 4.5 fL (3D) standards.
- **Interactive DCI Signal Flow Simulator**: Deep interactive exploration of the 5-stage cinema signal path (Ingest & KDM -> IMB Decryption -> 3-Chip DLP Optics -> Dante/Q-SYS Audio DSP -> Amplification & B-Chain).
- **Web Audio API Acoustic Tone Studio**: Real-time calibration tone generator (1 kHz Reference Sine, 40 Hz Subwoofer LFE resonance, and Pink Noise for RTA acoustic room tuning) with a live canvas visualizer.
- **Verified OEM Certifications Matrix**: Filterable & searchable credentials grid covering Dante Level 1, Q-SYS Cinema 101, Lightware AV-over-IP, Barco Level 2 Diagnostics, Christie, NEC, and computer networking.
- **Direct Contact & Print-to-PDF**: Direct copy buttons for email/phone, responsive contact form, and dedicated print stylesheet for clean one-click PDF portfolio export.

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or serve it using Python or Node:

### Option 1: Double-click to Open
Simply double-click `index.html` to open it in Chrome, Edge, Firefox, or Safari.

### Option 2: Run with Python Local Server
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Option 3: Run with Node.js / npx serve
```bash
npx serve .
```

---

## 📁 File Structure

```
Free Claude/
├── index.html        # Main semantic HTML5 markup & Tailwind setup
├── styles.css        # Cinema HUD dark theme, glow effects & print styles
├── app.js            # DCI calculator, audio visualizer, signal flow & filters
├── resume.pdf        # Original Resume document
└── README.md         # Documentation & guide
```

---

## 🌐 Deploying Online (Free)

### GitHub Pages:
1. Initialize git and commit files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Mukesh Kumar AV & Cinema Engineer Website"
   ```
2. Create a GitHub repository and push your code.
3. In GitHub repo settings -> **Pages** -> Select **Branch: main** / Root folder -> Save.

### Vercel / Netlify:
- Drag and drop this folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com) for instant global deployment.
