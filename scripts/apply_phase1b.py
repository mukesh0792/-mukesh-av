from pathlib import Path

index = Path('index.html')
html = index.read_text(encoding='utf-8')
old_resume = '''        <button onclick="window.print()" class="px-3.5 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-amber-500 text-slate-950 font-bold rounded-lg hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5">
          <i data-lucide="printer" class="w-3.5 h-3.5"></i>
          PDF Resume
        </button>'''
new_resume = '''        <a href="resume.pdf" target="_blank" rel="noopener" class="px-3.5 py-2 text-xs font-mono font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-amber-500 text-slate-950 font-bold rounded-lg hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5">
          <i data-lucide="file-text" class="w-3.5 h-3.5"></i>
          PDF Resume
        </a>'''
if html.count(old_resume) != 1:
    raise SystemExit(f'Expected exactly 1 desktop PDF Resume button, found {html.count(old_resume)}')
index.write_text(html.replace(old_resume, new_resume, 1), encoding='utf-8')

app = Path('app.js')
js = app.read_text(encoding='utf-8')
old_block = '''    let lensName = '';
    let opticalNote = '';

    if (throwRatio < 1.20) {
      lensName = 'Barco Ultra-Short Throw DCI Lens (0.80 - 1.16:1)';
      opticalNote = 'Ultra short throw booth configuration. Requires precision Scheimpflug optical plane adjustment to eliminate corner chromatic aberration.';
    } else if (throwRatio >= 1.20 && throwRatio < 1.45) {
      lensName = 'Barco High-Brightness Motorized Lens (1.20 - 1.70:1)';
      opticalNote = 'High light efficiency optical path (>86% transmission). Optimal for short-to-medium auditorium depths with wide viewing angles.';
    } else if (throwRatio >= 1.45 && throwRatio < 2.05) {
      lensName = 'Barco High-Performance Zoom Lens (1.38 - 2.05:1)';
      opticalNote = 'Standard commercial cinema configuration (PVR INOX reference). Ample zoom range for Flat (1.85) to Scope (2.39) motorized lens memory recall.';
    } else if (throwRatio >= 2.05 && throwRatio < 2.60) {
      lensName = 'Barco High-Contrast Cinema Lens (1.70 - 2.50:1)';
      opticalNote = 'Ideal optical formulation for medium-to-large auditoriums. Excellent native contrast ratio retention across the entire DMD optical path.';
    } else if (throwRatio >= 2.60 && throwRatio < 3.30) {
      lensName = 'Barco Long-Throw Motorized Lens (2.20 - 3.20:1)';
      opticalNote = 'Long throw geometry. Recommend Barco Series 4 high-output laser engines (SP4K-27 / SP4K-35) with high-gain screen surface to meet SMPTE 14.0 fL.';
    } else if (throwRatio >= 3.30 && throwRatio < 4.40) {
      lensName = 'Barco Extra-Long Throw Cinema Lens (3.00 - 4.30:1)';
      opticalNote = 'Deep auditorium booth placement. Requires rigid optical mounting and low-vibration port window glass to prevent focal plane shift.';
    } else {
      lensName = 'Barco Ultra-Long Throw Optical System (4.30 - 6.00:1)';
      opticalNote = 'Maximum auditorium throw envelope. Requires high-power laser illumination and periodic laser optical alignment checks.';
    }

    resultLens.textContent = lensName;
    resultNote.textContent = opticalNote;'''
new_block = '''    let lensName = '';
    let opticalNote = '';

    // Match only the throw-ratio ranges currently displayed by this calculator.
    // These ranges are not presented as independently validated official Barco specifications.
    const supportedLensRanges = [
      { min: 0.80, max: 1.16, name: 'Barco Ultra-Short Throw DCI Lens (0.80 - 1.16:1)', note: 'Ultra short throw booth configuration. Requires precision Scheimpflug optical plane adjustment to eliminate corner chromatic aberration.' },
      { min: 1.20, max: 1.70, name: 'Barco High-Brightness Motorized Lens (1.20 - 1.70:1)', note: 'High light efficiency optical path (>86% transmission). Optimal for short-to-medium auditorium depths with wide viewing angles.' },
      { min: 1.38, max: 2.05, name: 'Barco High-Performance Zoom Lens (1.38 - 2.05:1)', note: 'Standard commercial cinema configuration (PVR INOX reference). Ample zoom range for Flat (1.85) to Scope (2.39) motorized lens memory recall.' },
      { min: 1.70, max: 2.50, name: 'Barco High-Contrast Cinema Lens (1.70 - 2.50:1)', note: 'Ideal optical formulation for medium-to-large auditoriums. Excellent native contrast ratio retention across the entire DMD optical path.' },
      { min: 2.20, max: 3.20, name: 'Barco Long-Throw Motorized Lens (2.20 - 3.20:1)', note: 'Long throw geometry. Recommend Barco Series 4 high-output laser engines (SP4K-27 / SP4K-35) with high-gain screen surface to meet SMPTE 14.0 fL.' },
      { min: 3.00, max: 4.30, name: 'Barco Extra-Long Throw Cinema Lens (3.00 - 4.30:1)', note: 'Deep auditorium booth placement. Requires rigid optical mounting and low-vibration port window glass to prevent focal plane shift.' },
      { min: 4.30, max: 6.00, name: 'Barco Ultra-Long Throw Optical System (4.30 - 6.00:1)', note: 'Maximum auditorium throw envelope. Requires high-power laser illumination and periodic laser optical alignment checks.' }
    ];

    const matchedLens = supportedLensRanges.find(range => throwRatio >= range.min && throwRatio <= range.max);

    if (matchedLens) {
      lensName = matchedLens.name;
      opticalNote = matchedLens.note;
    } else {
      lensName = 'No Supported Barco Lens Match';
      opticalNote = 'Calculated throw ratio is outside the supported ranges currently displayed by this calculator. Verify projector/lens compatibility using the applicable Barco documentation before installation.';
    }

    resultLens.textContent = lensName;
    resultNote.textContent = opticalNote;'''
if old_block not in js:
    raise SystemExit('Barco recommendation block not found; aborting.')
js = js.replace(old_block, new_block, 1)
app.write_text(js, encoding='utf-8')
