/**
 * Mukesh Kumar - AV & Cinema Projection Engineer Portfolio
 * Interactive Architecture, DCI Calculator, Diagnostic Log Terminal & UI Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initLucide();
  initNavigation();
  initDciCalculator();
  initBarcoLensCalculator();
  initSignalFlow();
  initCertificationsFilter();
  initAudioSynthesizer();
  initDiagnosticLogs();
  initContactForm();
  initStatsCounter();
});

/* -------------------------------------------------------------------------- */
/* 1. Lucide Icons Helper                                                      */
/* -------------------------------------------------------------------------- */
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* -------------------------------------------------------------------------- */
/* 2. Navigation & Smooth Scrolling                                           */
/* -------------------------------------------------------------------------- */
function initNavigation() {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg');
    } else {
      header.classList.remove('bg-slate-950/90', 'backdrop-blur-md', 'border-b', 'border-slate-800/80', 'shadow-lg');
    }
  });

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* -------------------------------------------------------------------------- */
/* 3. DCI Cinema Screen & Lumens / Foot-Lambert Calculator                     */
/* -------------------------------------------------------------------------- */
function initDciCalculator() {
  const screenWidthInput = document.getElementById('calc-width');
  const widthValDisplay = document.getElementById('calc-width-val');
  const aspectRatioSelect = document.getElementById('calc-aspect');
  const screenGainInput = document.getElementById('calc-gain');
  const gainValDisplay = document.getElementById('calc-gain-val');
  const targetModeSelect = document.getElementById('calc-mode');

  const resultArea = document.getElementById('calc-result-area');
  const resultLumens = document.getElementById('calc-result-lumens');
  const resultFl = document.getElementById('calc-result-fl');
  const resultRecommendation = document.getElementById('calc-result-rec');

  if (!screenWidthInput || !resultLumens) return;

  function calculateDCI() {
    const widthFt = parseFloat(screenWidthInput.value);
    const aspect = aspectRatioSelect.value;
    const gain = parseFloat(screenGainInput.value);
    const mode = targetModeSelect.value;

    widthValDisplay.textContent = `${widthFt} ft (${(widthFt * 0.3048).toFixed(1)} m)`;
    gainValDisplay.textContent = `${gain.toFixed(1)}x`;

    const ratioValue = aspect === 'scope' ? 2.39 : 1.85;
    const heightFt = widthFt / ratioValue;
    const areaSqFt = widthFt * heightFt;

    const targetFL = mode === '2d' ? 14.0 : 4.5;
    const requiredCenterLumens = (targetFL * areaSqFt * Math.PI) / gain;
    const recommendedOperatingLumens = Math.round(requiredCenterLumens * 1.18);

    resultArea.textContent = `${Math.round(areaSqFt)} sq ft (${(areaSqFt * 0.0929).toFixed(1)} m²)`;
    resultLumens.textContent = `${recommendedOperatingLumens.toLocaleString()} ANSI Lumens`;
    resultFl.textContent = `${targetFL.toFixed(1)} fL (DCI SMPTE 431-1)`;

    let rec = '';
    if (recommendedOperatingLumens < 12000) {
      rec = 'NEC NC1202L / NC1402L Laser or Barco SP4K-12 (Ideal for boutique/standard screens)';
    } else if (recommendedOperatingLumens < 20000) {
      rec = 'Barco Series 4 SP4K-20 / Christie CP4415-RGB RealLaser (Medium Auditoriums)';
    } else if (recommendedOperatingLumens < 32000) {
      rec = 'Barco SP4K-27 / SP4K-35 or Christie CP4425-RGB / CP4435-RGB RealLaser';
    } else {
      rec = 'Barco SP4K-40 / SP4K-55 High-Luminance Laser or Christie CP4450-RGB Premium Large Format (PLF)';
    }

    resultRecommendation.textContent = rec;
  }

  [screenWidthInput, aspectRatioSelect, screenGainInput, targetModeSelect].forEach(el => {
    el.addEventListener('input', calculateDCI);
  });

  calculateDCI();
}

/* -------------------------------------------------------------------------- */
/* 3.5. Barco Cinema Lens & Throw Ratio Calculator                            */
/* -------------------------------------------------------------------------- */
function initBarcoLensCalculator() {
  const widthInput = document.getElementById('barco-width');
  const widthValDisplay = document.getElementById('barco-width-val');
  const distInput = document.getElementById('barco-dist');
  const distValDisplay = document.getElementById('barco-dist-val');

  const resultRatio = document.getElementById('barco-result-ratio');
  const resultLens = document.getElementById('barco-result-lens');
  const resultNote = document.getElementById('barco-result-note');

  if (!widthInput || !distInput || !resultRatio) return;

  function calculateBarcoLens() {
    const widthFt = parseFloat(widthInput.value);
    const distFt = parseFloat(distInput.value);

    widthValDisplay.textContent = `${widthFt} ft (${(widthFt * 0.3048).toFixed(1)} m)`;
    distValDisplay.textContent = `${distFt} ft (${(distFt * 0.3048).toFixed(1)} m)`;

    const throwRatio = distFt / widthFt;
    resultRatio.textContent = `${throwRatio.toFixed(2)}:1`;

    let lensName = '';
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
    resultNote.textContent = opticalNote;
  }

  [widthInput, distInput].forEach(el => {
    el.addEventListener('input', calculateBarcoLens);
  });

  calculateBarcoLens();
}

/* -------------------------------------------------------------------------- */
/* 4. Interactive Cinema Signal Flow Architecture Simulator                   */
/* -------------------------------------------------------------------------- */
const signalDetailsData = {
  ingest: {
    title: '1. Ingest, Storage & Security Key Management',
    subtitle: 'DCP Content Ingest, CRU HDD / Gigabit LAN, and SMPTE Key Delivery Messages (KDMs)',
    hardware: 'Dolby DSS / Qube XP / GDC SR-1000 Ingest Systems',
    specs: '1000Base-T, USB 3.0, CRU DataPort, SMPTE 429-7 DCI Packaging, 128-bit AES Encryption',
    details: 'Digital Cinema Packages (DCPs) are securely transferred via gigabit network or physical CRU high-speed drive bays. Mukesh manages TLS certificate validation, KDM validity window timing, CPL (Composition Playlist) integrity, and automated scheduling synchronizations across 80+ multiplex screens.',
    diagnostics: 'Common fault resolution: KDM hash mismatch, certificate chain expiration, SHA-1 vs SHA-256 validation failure, damaged MXF payload detection.'
  },
  imb: {
    title: '2. Integrated Media Block (IMB) & Decryption',
    subtitle: 'FIPS 140-2 Level 3 Hardware Security, Real-Time AES Decryption & JPEG 2000 Decoding',
    hardware: 'Barco Alchemy ICMP-X / Dolby IMS3000 / GDC IMB',
    specs: 'PCIe / Enigma DCI Slot, Dual 12G-SDI, HFR 120fps 2K / 60fps 4K, 16-Channel AES3 Audio Out',
    details: 'The IMB decrypts encrypted video and audio tracks in real time inside a tamper-proof hardware security module. It unpacks XYZ color space JPEG 2000 frames at up to 500 Mbps and splits multi-channel digital audio with nanosecond-accurate SMPTE lip-sync timestamps.',
    diagnostics: 'Common fault resolution: Marriage tamper alarms, battery RTC reset, PCIe lane handshake dropouts, marriage token key re-initialization.'
  },
  optics: {
    title: '3. Light Engine, Laser Phosphor / RGB & Optical Path',
    subtitle: '3-Chip DLP Cinema 0.98"/1.2" DMDs, Laser Light Upgrades (LLU) & Convergence Alignment',
    hardware: 'Barco Series 2/4 (SP4K/DP4K), Christie RealLaser / CineLife, NEC NC Series',
    specs: 'DCI-P3 Color Gamut, 2000:1 to 6000:1 Contrast, Scheimpflug Optical Tilt, Active Liquid Chiller Loop',
    details: 'Laser light sources pass through precision optical integrator rods and dichroic mirrors onto 3 independent Red, Green, and Blue DLP DMD chips. Mukesh performs precision convergence calibration, laser chiller loop flow monitoring, fold mirror cleaning, and DCI-P3 / Rec.709 colorimetry profiling.',
    diagnostics: 'Common fault resolution: DMD convergence drift, laser diode driver fault, chiller flow rate interlock trip, light engine temperature delta alarms.'
  },
  sound: {
    title: '4. Digital Audio Routing, Dante & DSP Processing',
    subtitle: '16-Channel AES3, Dante Networked AV-over-IP & Q-SYS Cinema DSP Processing',
    hardware: 'Q-SYS Core 110c / 510c, Dolby CP950 / CP850 Cinema Audio Processors, Dante Audio-over-IP',
    specs: '48kHz / 96kHz 24-bit PCM, Low Latency (<1ms), Cat6 Gigabit Audio, Room EQ FIR/IIR Filters',
    details: 'Digital audio streams from the IMB via AES/EBU or Dante network into Q-SYS / Dolby cinema sound processors. The DSP handles 1/3-octave RTA acoustic tuning, parametric EQ, subwoofer bass management, delay alignment across screen channels, and Dolby Atmos rendering.',
    diagnostics: 'Common fault resolution: Clock master drift, Dante PTP packet jitter, audio ground loop hum, digital clipping, channel routing matrix misalignment.'
  },
  speakers: {
    title: '5. Power Amplification & Cinema B-Chain Acoustic Output',
    subtitle: 'Multi-Channel Class-D Power Amplifiers & 7.1 / Dolby Atmos Auditorium Acoustic Coverage',
    hardware: 'QSC DCA / DPA-Q Series, Crown DSi, JBL / Christie / K.C.S. Cinema Speakers',
    specs: '85 dBC Reference SPL, +20dB Peak Headroom, 115 dBC Subwoofer LFE, Impedance Monitored Lines',
    details: 'High-power cinema amplifiers drive screen Left, Center, Right high-frequency horn/compression drivers, 18-inch dual subwoofers, and distributed auditorium surrounds. Routine testing verifies driver impedance, amplifier rail voltage, limiter thresholds, and SMPTE ST 202 B-chain response curves.',
    diagnostics: 'Common fault resolution: Blown HF compression diaphragms, amplifier protect mode trips, speaker crossover distortion, phase inversion.'
  }
};

function initSignalFlow() {
  const nodes = document.querySelectorAll('.signal-node');
  const titleEl = document.getElementById('flow-detail-title');
  const subEl = document.getElementById('flow-detail-sub');
  const hwEl = document.getElementById('flow-detail-hw');
  const specsEl = document.getElementById('flow-detail-specs');
  const descEl = document.getElementById('flow-detail-desc');
  const diagEl = document.getElementById('flow-detail-diag');

  if (!nodes.length || !titleEl) return;

  function selectNode(key) {
    const data = signalDetailsData[key];
    if (!data) return;

    nodes.forEach(n => {
      if (n.getAttribute('data-node') === key) {
        n.classList.add('active', 'border-cyan-400', 'bg-cyan-950/40');
      } else {
        n.classList.remove('active', 'border-cyan-400', 'bg-cyan-950/40');
      }
    });

    titleEl.textContent = data.title;
    subEl.textContent = data.subtitle;
    hwEl.textContent = data.hardware;
    specsEl.textContent = data.specs;
    descEl.textContent = data.details;
    diagEl.textContent = data.diagnostics;
  }

  nodes.forEach(node => {
    node.addEventListener('click', () => {
      const key = node.getAttribute('data-node');
      selectNode(key);
    });
  });

  selectNode('optics');
}

/* -------------------------------------------------------------------------- */
/* 5. OEM Certifications Filter & Real-Time Search                            */
/* -------------------------------------------------------------------------- */
function initCertificationsFilter() {
  const filterBtns = document.querySelectorAll('.cert-filter-btn');
  const searchInput = document.getElementById('cert-search');
  const certCards = document.querySelectorAll('.cert-card');
  const certCountDisplay = document.getElementById('cert-count-badge');

  if (!filterBtns.length || !certCards.length) return;

  let currentCategory = 'all';
  let searchTerm = '';

  function applyFilter() {
    let visibleCount = 0;

    certCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const textContent = card.textContent.toLowerCase();

      const matchesCategory = (currentCategory === 'all' || cardCategory.includes(currentCategory));
      const matchesSearch = searchTerm === '' || textContent.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('hidden');
        card.classList.add('flex');
        visibleCount++;
      } else {
        card.classList.add('hidden');
        card.classList.remove('flex');
      }
    });

    if (certCountDisplay) {
      certCountDisplay.textContent = `Showing ${visibleCount} of ${certCards.length} Verified Certifications`;
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-semibold');
        b.classList.add('bg-slate-800/80', 'text-slate-300');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-300');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-semibold');

      currentCategory = btn.getAttribute('data-filter') || 'all';
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      applyFilter();
    });
  }

  applyFilter();
}

/* -------------------------------------------------------------------------- */
/* 6. Web Audio API Cinema Ambience & Acoustic Test Tone Generator            */
/* -------------------------------------------------------------------------- */
function initAudioSynthesizer() {
  const playBtn = document.getElementById('audio-play-btn');
  const toneSelect = document.getElementById('audio-tone-select');
  const volumeSlider = document.getElementById('audio-volume');
  const canvas = document.getElementById('audio-canvas');
  const statusLabel = document.getElementById('audio-status-label');

  if (!playBtn || !canvas) return;

  let audioCtx = null;
  let oscillator = null;
  let noiseNode = null;
  let gainNode = null;
  let analyser = null;
  let isPlaying = false;
  let animationFrameId = null;

  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight || 120;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function startAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const volume = parseFloat(volumeSlider.value);
    const selectedTone = toneSelect.value;

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(Math.max(volume, 0.001), audioCtx.currentTime + 0.1);

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    if (selectedTone === '1khz') {
      oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
      oscillator.connect(gainNode);
      oscillator.start();
      statusLabel.textContent = 'Active: 1 kHz Reference Test Tone (Cinema Alignment standard)';
    } else if (selectedTone === 'lfe40hz') {
      oscillator = audioCtx.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(40, audioCtx.currentTime);
      oscillator.connect(gainNode);
      oscillator.start();
      statusLabel.textContent = 'Active: 40 Hz Subwoofer LFE Resonance Tone';
    } else if (selectedTone === 'pinknoise') {
      const bufferSize = audioCtx.sampleRate * 2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      }

      noiseNode = audioCtx.createBufferSource();
      noiseNode.buffer = buffer;
      noiseNode.loop = true;
      noiseNode.connect(gainNode);
      noiseNode.start();
      statusLabel.textContent = 'Active: Pink Noise for RTA Spectrum Room Calibration';
    }

    gainNode.connect(analyser);
    analyser.connect(audioCtx.destination);

    isPlaying = true;
    playBtn.innerHTML = '<i data-lucide="square" class="w-4 h-4"></i> Stop Tone';
    playBtn.classList.remove('bg-cyan-500', 'hover:bg-cyan-400');
    playBtn.classList.add('bg-red-500', 'hover:bg-red-400');
    initLucide();

    drawVisualizer();
  }

  function stopAudio() {
    if (!isPlaying) return;

    if (gainNode && audioCtx) {
      gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
      setTimeout(() => {
        if (oscillator) {
          try { oscillator.stop(); oscillator.disconnect(); } catch (e) {}
          oscillator = null;
        }
        if (noiseNode) {
          try { noiseNode.stop(); noiseNode.disconnect(); } catch (e) {}
          noiseNode = null;
        }
        if (gainNode) {
          gainNode.disconnect();
          gainNode = null;
        }
      }, 90);
    }

    isPlaying = false;
    playBtn.innerHTML = '<i data-lucide="play" class="w-4 h-4"></i> Play Test Tone';
    playBtn.classList.remove('bg-red-500', 'hover:bg-red-400');
    playBtn.classList.add('bg-cyan-500', 'hover:bg-cyan-400');
    statusLabel.textContent = 'Oscillator Idle (Click Play to emit reference calibration tone)';
    initLucide();

    drawIdleVisualizer();
  }

  function drawVisualizer() {
    if (!isPlaying || !analyser) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.2;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const barHeight = (dataArray[i] / 255) * canvas.height * 0.9;

      const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.2)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.8)');
      gradient.addColorStop(1, 'rgba(245, 158, 11, 0.9)');

      ctx.fillStyle = gradient;
      ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);

      x += barWidth + 1;
    }

    animationFrameId = requestAnimationFrame(drawVisualizer);
  }

  function drawIdleVisualizer() {
    if (isPlaying) return;
    if (animationFrameId) cancelAnimationFrame(animationFrameId);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    const sliceWidth = canvas.width / 100;
    let x = 0;
    for (let i = 0; i < 100; i++) {
      const y = (canvas.height / 2) + Math.sin(i * 0.15) * 6;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      x += sliceWidth;
    }
    ctx.stroke();
  }

  playBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  });

  volumeSlider.addEventListener('input', (e) => {
    if (gainNode && audioCtx && isPlaying) {
      const vol = parseFloat(e.target.value);
      gainNode.gain.setValueAtTime(Math.max(vol, 0.001), audioCtx.currentTime);
    }
  });

  toneSelect.addEventListener('change', () => {
    if (isPlaying) {
      stopAudio();
      setTimeout(startAudio, 100);
    }
  });

  drawIdleVisualizer();
}

/* -------------------------------------------------------------------------- */
/* 7. Interactive Diagnostic Log Terminal (Barco, Dante, Q-SYS, DCI)         */
/* -------------------------------------------------------------------------- */
const rawDiagnosticLogs = [
  // BARCO LOGS
  { system: 'barco', level: 'INFO', text: '[BARCO-SERIES4] Communicator v4.12.0 connected via 192.168.100.10:8000. Handshake established.' },
  { system: 'barco', level: 'INFO', text: '[BARCO-OPTICS] Laser Module Bank (1-8) operational. Current: 14.82A. Total Output: 24,500 lm (100.2% Target).' },
  { system: 'barco', level: 'INFO', text: '[BARCO-THERMAL] Chiller Inflow: 18.2°C | Return: 23.1°C | Flow Rate: 3.45 L/min [Nominal Range].' },
  { system: 'barco', level: 'SEC', text: '[BARCO-ICMP] FIPS 140-2 Level 3 Secure Marriage Verified. Token ID: 0x9E4B218F. Tamper: CLEAR.' },
  { system: 'barco', level: 'INFO', text: '[BARCO-COLOR] Target Gamut loaded: DCI-P3 (SMPTE 431-1). Measured Center Luminance: 14.04 fL.' },
  { system: 'barco', level: 'INFO', text: '[BARCO-DMD] 3-Chip DLP (R/G/B 0.98") Convergence Check: Max delta 0.07 pixels. Sub-pixel alignment LOCKED.' },
  { system: 'barco', level: 'WARN', text: '[BARCO-PM] Air intake particulate filter differential pressure: 12 Pa (Next PM cycle scheduled in 450 hrs).' },

  // DANTE LOGS
  { system: 'dante', level: 'PTP', text: '[DANTE-PTP] IEEE 1588-2008 PTP v2 Grandmaster Election complete. Master Clock: QSYS-Core-110c (00:1d:9e:ab:44:12).' },
  { system: 'dante', level: 'INFO', text: '[DANTE-CLOCK] PTP Jitter: 0.14 µs. Frequency Offset: < 5 ppb. Clock synchronization state: MUTEX LOCKED.' },
  { system: 'dante', level: 'INFO', text: '[DANTE-ROUTING] Subscribed 16-channel AES67 uncompressed PCM audio from IMB to Q-SYS Core (Tx: IMB_AES_01-16 -> Rx: QSYS_DSP_01-16).' },
  { system: 'dante', level: 'INFO', text: '[DANTE-NET] Multicast IGMPv3 stream 239.254.1.1:5004 active on Cat6 1Gbps link. Latency: 0.25 ms (0 packet drops).' },
  { system: 'dante', level: 'INFO', text: '[DANTE-QOS] DSCP Priority Expedited Forwarding (EF-46) verified on Cisco Cinema Switch Port Gi1/0/12.' },

  // Q-SYS LOGS
  { system: 'qsys', level: 'INFO', text: '[QSYS-CORE] Q-SYS Core 110c Cinema Engine initialized. Firmware: v9.8.2. DSP Load: 18.4% | Memory: 22%.' },
  { system: 'qsys', level: 'INFO', text: '[QSYS-AUDIO] 7.1 Surround & Dolby Atmos Master B-Chain acoustic tuning profile loaded.' },
  { system: 'qsys', level: 'INFO', text: '[QSYS-AMP] QSC DCA / DPA-Q 4-Channel Cinema Amplifier Line Telemetry Polling:' },
  { system: 'qsys', level: 'INFO', text: '  ├─ CH 1 (Screen Left Horn/LF): 4.22 Ω | Temp: 48.0°C | Rail: 72.4V | Limiting: 0.0 dB' },
  { system: 'qsys', level: 'INFO', text: '  ├─ CH 2 (Screen Center Horn/LF): 4.15 Ω | Temp: 48.8°C | Rail: 72.4V | Limiting: 0.0 dB' },
  { system: 'qsys', level: 'INFO', text: '  ├─ CH 3 (Screen Right Horn/LF): 4.28 Ω | Temp: 47.9°C | Rail: 72.4V | Limiting: 0.0 dB' },
  { system: 'qsys', level: 'INFO', text: '  └─ CH 4 (LFE 18" Dual Sub): 3.82 Ω | Temp: 51.5°C | Rail: 74.1V | Headroom: +18.4 dB' },
  { system: 'qsys', level: 'INFO', text: '[QSYS-EQ] SMPTE ST 202 B-Chain FIR Room Equalization active. 1/3-octave flatness: ±0.7 dB (31.5 Hz to 16 kHz).' },
  { system: 'qsys', level: 'INFO', text: '[QSYS-SPL] Reference Pink Noise Calibration: Continuous SPL = 85.0 dBC @ seating reference position.' },

  // DCI SECURITY LOGS
  { system: 'dci', level: 'SEC', text: '[DCI-KDM] SMPTE 430-1 KDM Ingest verified. CPL UUID: urn:uuid:7f3a9e22-8b44-41d9-9c12-334188bca120.' },
  { system: 'dci', level: 'SEC', text: '[DCI-CERTS] Leaf certificate validated against DCI Root CA. Validity Window: 2026-09-01T00:00:00Z -> 2026-09-30T23:59:59Z.' },
  { system: 'dci', level: 'INFO', text: '[DCI-PLAYOUT] 4K DCI Composition (4096x2160 @ 24.000 fps) armed for scheduled playback. Video Buffer: 100% full.' }
];

function initDiagnosticLogs() {
  const terminalBody = document.getElementById('terminal-log-body');
  const filterBtns = document.querySelectorAll('.log-filter-btn');
  const streamToggleBtn = document.getElementById('log-stream-toggle');
  const clearBtn = document.getElementById('log-clear-btn');
  const downloadBtn = document.getElementById('log-download-btn');
  const cmdInput = document.getElementById('terminal-cmd-input');
  const statusIndicator = document.getElementById('terminal-status-indicator');

  if (!terminalBody) return;

  let currentFilter = 'all';
  let isStreaming = true;
  let streamInterval = null;
  let logHistory = [...rawDiagnosticLogs];

  function getTimestamp() {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
  }

  function renderLogEntry(entry, animate = true) {
    const row = document.createElement('div');
    row.className = `log-entry text-xs font-mono ${animate ? '' : ''}`;
    row.setAttribute('data-system', entry.system);

    let badgeClass = 'log-badge-barco';
    if (entry.system === 'dante') badgeClass = 'log-badge-dante';
    else if (entry.system === 'qsys') badgeClass = 'log-badge-qsys';
    else if (entry.system === 'dci') badgeClass = 'log-badge-dci';

    let levelColor = 'text-slate-400';
    if (entry.level === 'WARN') levelColor = 'text-amber-400';
    if (entry.level === 'SEC') levelColor = 'text-purple-400 font-semibold';
    if (entry.level === 'PTP') levelColor = 'text-sky-400 font-semibold';

    row.innerHTML = `
      <span class="text-slate-600 shrink-0 select-none">${getTimestamp()}</span>
      <span class="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase shrink-0 ${badgeClass}">${entry.system}</span>
      <span class="shrink-0 ${levelColor}">[${entry.level}]</span>
      <span class="text-slate-300 break-all">${escapeHtml(entry.text)}</span>
    `;

    terminalBody.appendChild(row);

    if (isStreaming) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function applyLogFilter() {
    const entries = terminalBody.querySelectorAll('.log-entry');
    entries.forEach(entry => {
      const sys = entry.getAttribute('data-system');
      if (currentFilter === 'all' || sys === currentFilter) {
        entry.style.display = 'flex';
      } else {
        entry.style.display = 'none';
      }
    });
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  function loadInitialLogs() {
    terminalBody.innerHTML = '';
    logHistory.forEach(item => {
      renderLogEntry(item, false);
    });
    applyLogFilter();
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-bold');
        b.classList.add('bg-slate-900', 'text-slate-400');
      });
      btn.classList.remove('bg-slate-900', 'text-slate-400');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-bold');

      currentFilter = btn.getAttribute('data-log-system') || 'all';
      applyLogFilter();
    });
  });

  // Simulated Live Heartbeat Ticks
  const liveTickOptions = [
    { system: 'barco', level: 'INFO', text: '[BARCO-TELEMETRY] Laser Bank Power: 24,480 lm | Chiller Flow: 3.44 L/min | DMD Temp: 34.2°C [STABLE]' },
    { system: 'dante', level: 'PTP', text: '[DANTE-HEARTBEAT] PTP v2 Clock Offset: +0.08 µs | Multicast Packet Ingest Rate: 1,536 pkts/sec (0 errors)' },
    { system: 'qsys', level: 'INFO', text: '[QSYS-MONITOR] DCA Cinema Amps: Impedance Load verified on Left/Center/Right channels [4.19 Ω Nominal]' },
    { system: 'barco', level: 'INFO', text: '[BARCO-LIGHT] Integrated Light Sensor feedback: 14.02 fL on screen center (Optical target 100% met)' },
    { system: 'dci', level: 'INFO', text: '[DCI-SECURITY] Periodic Marriage Integrity Check: Hardware crypto tokens verified across PCIe enclosure.' }
  ];

  function startLiveStream() {
    if (streamInterval) clearInterval(streamInterval);
    streamInterval = setInterval(() => {
      if (!isStreaming) return;
      const randomEntry = liveTickOptions[Math.floor(Math.random() * liveTickOptions.length)];
      logHistory.push(randomEntry);
      renderLogEntry(randomEntry, true);
      applyLogFilter();
    }, 3200);
  }

  if (streamToggleBtn) {
    streamToggleBtn.addEventListener('click', () => {
      isStreaming = !isStreaming;
      if (isStreaming) {
        streamToggleBtn.innerHTML = '<i data-lucide="pause" class="w-3.5 h-3.5"></i> Pause Stream';
        statusIndicator.className = 'w-2 h-2 rounded-full bg-emerald-400 live-indicator';
      } else {
        streamToggleBtn.innerHTML = '<i data-lucide="play" class="w-3.5 h-3.5"></i> Resume Stream';
        statusIndicator.className = 'w-2 h-2 rounded-full bg-amber-400';
      }
      initLucide();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      terminalBody.innerHTML = '';
      const clearedNotice = { system: 'dci', level: 'INFO', text: '--- Console cleared by engineer Mukesh Kumar ---' };
      renderLogEntry(clearedNotice, false);
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const logText = logHistory.map(l => `[${getTimestamp()}] [${l.system.toUpperCase()}] [${l.level}] ${l.text}`).join('\n');
      const blob = new Blob([logText], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Mukesh_Kumar_AV_Cinema_Diagnostics_${Date.now()}.log`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  }

  if (cmdInput) {
    cmdInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = cmdInput.value.trim().toLowerCase();
        cmdInput.value = '';

        if (!cmd) return;

        // Render command prompt line
        const promptLine = { system: 'dci', level: 'CMD', text: `$ ${cmd}` };
        renderLogEntry(promptLine, false);

        // Process CLI command
        if (cmd === 'help') {
          renderLogEntry({ system: 'dci', level: 'INFO', text: 'Available commands: barco, dante, qsys, dci, status, clear, uptime' }, false);
        } else if (cmd === 'barco') {
          renderLogEntry({ system: 'barco', level: 'INFO', text: 'Barco Series 4 SP4K-20 | Laser Phosphor | Status: ACTIVE | Flow: 3.44 L/min | Output: 24,500 lm | DCI-P3 14 fL' }, false);
        } else if (cmd === 'dante') {
          renderLogEntry({ system: 'dante', level: 'INFO', text: 'Dante AoIP | Grandmaster: QSYS-Core-110c | PTP Jitter: 0.14 µs | Channels: 16-Ch Uncompressed AES67' }, false);
        } else if (cmd === 'qsys') {
          renderLogEntry({ system: 'qsys', level: 'INFO', text: 'Q-SYS Core 110c Cinema DSP | ST 202 B-Chain Active | Amps: 4-Ch DCA Nominal (4.2 Ω) | 85 dBC Ref' }, false);
        } else if (cmd === 'status' || cmd === 'uptime') {
          renderLogEntry({ system: 'dci', level: 'INFO', text: 'Master Fleet: 80+ Screens | Uptime: 99.2% | Lead Engineer: Mukesh Kumar (PVR INOX)' }, false);
        } else if (cmd === 'clear') {
          terminalBody.innerHTML = '';
        } else {
          renderLogEntry({ system: 'dci', level: 'WARN', text: `Unknown command "${cmd}". Type "help" for a list of diagnostics commands.` }, false);
        }

        applyLogFilter();
      }
    });
  }

  loadInitialLogs();
  startLiveStream();
}

/* -------------------------------------------------------------------------- */
/* 8. Animated Statistics Counter on Viewport Scroll                          */
/* -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute('data-target') || '0', 10);
          const suffix = stat.getAttribute('data-suffix') || '';
          let current = 0;
          const increment = Math.ceil(target / 40);
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            stat.textContent = `${current}${suffix}`;
          }, 35);
        });
      }
    });
  }, { threshold: 0.3 });

  const statSection = document.getElementById('stats-section');
  if (statSection) observer.observe(statSection);
}

/* -------------------------------------------------------------------------- */
/* 9. Contact Form Handler & Toast Notification                               */
/* -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyPhoneBtn = document.getElementById('copy-phone-btn');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.remove('hidden', 'translate-y-12', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-12', 'opacity-0');
      setTimeout(() => toast.classList.add('hidden'), 300);
    }, 4000);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('mukesh0792@outlook.com').then(() => {
        showToast('Email address copied to clipboard: mukesh0792@outlook.com');
      }).catch(() => {
        showToast('Email: mukesh0792@outlook.com');
      });
    });
  }

  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+91 8279717884').then(() => {
        showToast('Phone number copied to clipboard: +91 8279717884');
      }).catch(() => {
        showToast('Phone: +91 8279717884');
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name')?.value || 'Inquirer';
      const email = document.getElementById('form-email')?.value || '';
      const subject = document.getElementById('form-subject')?.value || 'Cinema AV Engineering Inquiry';
      const message = document.getElementById('form-message')?.value || '';

      const mailtoUrl = `mailto:mukesh0792@outlook.com?subject=${encodeURIComponent(`[AV Engineering Inquiry] ${subject}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

      window.location.href = mailtoUrl;
      showToast('Opening default email client to send message to Mukesh Kumar...');
      form.reset();
    });
  }
}
