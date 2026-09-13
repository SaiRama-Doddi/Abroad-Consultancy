import { useState, useEffect, useRef, useCallback } from "react";
import { Maximize2, Minimize2, Rocket, Sparkles, ShieldCheck } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  opacity: number;
}

function FlagUSA({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 480" className={`${className} rounded-[2.5px] shadow-sm overflow-hidden shrink-0 inline-block border border-white/20`} aria-label="USA Flag">
      <rect width="640" height="480" fill="#bd3d44"/>
      <path stroke="#fff" strokeWidth="37" d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"/>
      <rect width="260" height="259" fill="#192f5d"/>
      <g fill="#fff">
        {[
          [30,30],[75,30],[120,30],[165,30],[210,30],
          [52,65],[97,65],[142,65],[187,65],[232,65],
          [30,100],[75,100],[120,100],[165,100],[210,100],
          [52,135],[97,135],[142,135],[187,135],[232,135],
          [30,170],[75,170],[120,170],[165,170],[210,170],
          [52,205],[97,205],[142,205],[187,205],[232,205],
          [30,240],[75,240],[120,240],[165,240],[210,240]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="6" />
        ))}
      </g>
    </svg>
  );
}

function FlagUK({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 30" className={`${className} rounded-[2.5px] shadow-sm overflow-hidden shrink-0 inline-block border border-white/20`} aria-label="UK Flag">
      <rect width="60" height="30" fill="#012169"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
      <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="2"/>
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
    </svg>
  );
}

function FlagCanada({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 500" className={`${className} rounded-[2.5px] shadow-sm overflow-hidden shrink-0 inline-block border border-white/20`} aria-label="Canada Flag">
      <rect width="250" height="500" fill="#d80621"/>
      <rect x="250" width="500" height="500" fill="#fff"/>
      <rect x="750" width="250" height="500" fill="#d80621"/>
      <path fill="#d80621" d="M500 90l24 72 67-26-23 74 70 2-38 52 40 44-78 4 12 66-74-40v50h-12v-50l-74 40 12-66-78-4 40-44-38-52 70-2-23-74 67 26z"/>
    </svg>
  );
}

function FlagAustralia({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 600" className={`${className} rounded-[2.5px] shadow-sm overflow-hidden shrink-0 inline-block border border-white/20`} aria-label="Australia Flag">
      <rect width="1200" height="600" fill="#012169"/>
      <g transform="scale(10 10)">
        <rect width="60" height="30" fill="#012169"/>
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6"/>
        <path d="M0 0l60 30m0-30L0 30" stroke="#C8102E" strokeWidth="2"/>
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
      <g fill="#fff">
        <circle cx="300" cy="450" r="48"/>
        <circle cx="900" cy="500" r="28"/>
        <circle cx="780" cy="340" r="24"/>
        <circle cx="900" cy="130" r="24"/>
        <circle cx="1000" cy="250" r="24"/>
        <circle cx="950" cy="370" r="16"/>
      </g>
    </svg>
  );
}

function FlagGermany({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 5 3" className={`${className} rounded-[2.5px] shadow-sm overflow-hidden shrink-0 inline-block border border-white/20`} aria-label="Germany Flag">
      <rect width="5" height="1" fill="#000" y="0"/>
      <rect width="5" height="1" fill="#dd0000" y="1"/>
      <rect width="5" height="1" fill="#ffce00" y="2"/>
    </svg>
  );
}

function FlagEurope({ className = "w-5 h-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 810 540" className={`${className} rounded-[2.5px] shadow-sm overflow-hidden shrink-0 inline-block border border-white/20`} aria-label="European Union Flag">
      <rect width="810" height="540" fill="#003399"/>
      <g fill="#ffcc00" transform="translate(405,270)">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 155 * Math.sin(rad);
          const y = -155 * Math.cos(rad);
          return <circle key={angle} cx={x} cy={y} r="18"/>;
        })}
      </g>
    </svg>
  );
}

export function Preloader() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [launchCountdown, setLaunchCountdown] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Fullscreen state listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    try {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    } catch {
      // Ignore if blocked
    }
  };

  // Play celebratory inaugural audio chime via Web Audio API (100% offline, zero asset dependencies)
  const playLaunchSound = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      // Ceremonial ascending fanfare notes: C4 -> G4 -> C5 -> E5 -> G5
      const notes = [261.63, 392.0, 523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + i * 0.12);

        gain.gain.setValueAtTime(0.001, now + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.22, now + i * 0.12 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.12 + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + i * 0.12);
        osc.stop(now + i * 0.12 + 1.3);
      });

      // Jet Liftoff Sub-bass & Wind Sweep
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(1800, now + 1.8);
      filter.Q.setValueAtTime(2, now);

      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.001, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.18, now + 0.6);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.0);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      whiteNoise.start(now);
      whiteNoise.stop(now + 2.1);
    } catch {
      // Audio autoplay policy fallback
    }
  }, []);

  // Launch Confetti Animation
  const startConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#E0B76D", // Gold
      "#F3E0A5", // Soft Gold
      "#38BDF8", // Cyan
      "#818CF8", // Indigo
      "#FFFFFF", // Pure White
      "#34D399", // Emerald
      "#F43F5E", // Rose
    ];

    const particles: Particle[] = [];
    const count = 180;
    const originX = canvas.width / 2;
    const originY = canvas.height * 0.68;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 18 + 8;
      particles.push({
        x: originX,
        y: originY,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)] ?? "#E0B76D",
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - Math.random() * 12,
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        opacity: 1,
      });
    }

    particlesRef.current = particles;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let aliveCount = 0;
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.38; // gravity
        p.vx *= 0.985; // drag
        p.rotation += p.vRot;
        p.opacity -= 0.007;

        if (p.opacity > 0 && p.y < canvas.height + 50) {
          aliveCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        }
      });

      if (aliveCount > 0) {
        animationFrameRef.current = requestAnimationFrame(render);
      }
    };

    render();
  }, []);

  // Trigger Launch
  const handleLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    // Play fanfare audio
    playLaunchSound();

    // Start celebratory confetti
    startConfetti();

    // Start 3-2-1 instant pulse
    setLaunchCountdown(3);

    const c2 = setTimeout(() => setLaunchCountdown(2), 350);
    const c1 = setTimeout(() => setLaunchCountdown(1), 700);
    const c0 = setTimeout(() => setLaunchCountdown(0), 1050);

    // Complete launch reveal sequence
    const completeTimer = setTimeout(() => {
      // Dispatch preloaderDone event so HeroSection and site initiate their animations
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("preloaderDone"));
      }

      // Fade out launch overlay
      setIsLaunched(true);
    }, 1500);

    return () => {
      clearTimeout(c2);
      clearTimeout(c1);
      clearTimeout(c0);
      clearTimeout(completeTimer);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  };

  // If launch sequence finished and overlay faded out, unmount
  if (isLaunched) {
    return null;
  }

  return (
    <div
      id="grand-launch-screen"
      className={`fixed inset-0 z-[99999] w-screen h-screen flex flex-col justify-between bg-[#040813] text-white select-none overflow-hidden transition-all duration-1000 ${
        isLaunching && launchCountdown === 0
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 35%, rgba(224, 183, 109, 0.14) 0%, transparent 60%),
          radial-gradient(circle at 20% 80%, rgba(30, 58, 138, 0.25) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.3) 0%, transparent 50%)
        `,
      }}
    >
      {/* Dynamic Confetti & Fireworks Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-50 w-full h-full"
      />

      {/* Background Animated Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0b76d08_1px,transparent_1px),linear-gradient(to_bottom,#e0b76d08_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Floating Starlight Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 bg-[var(--gold)] rounded-full animate-ping opacity-60" />
        <div className="absolute top-1/3 right-1/5 w-2 h-2 bg-sky-400 rounded-full animate-pulse opacity-70" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-50" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse opacity-80" />
      </div>

      {/* =========================================================================
          TOP BAR: Ceremony Status & Fullscreen Controls
          ========================================================================= */}
      <header className="relative z-20 w-full px-6 py-5 flex items-center justify-between border-b border-[#e0b76d]/15 bg-black/30 backdrop-blur-md">
        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 shadow-[0_0_12px_#10b981]" />
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-emerald-400">
              System Ready • Inaugural Protocol
            </span>
            <span className="text-[9px] text-slate-400 tracking-wider">
              OFFICIAL LAUNCH CEREMONY
            </span>
          </div>
        </div>

        {/* Center Badge for Event */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 text-[var(--gold)] shadow-[0_0_20px_rgba(224,183,109,0.15)]">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
          <span className="text-[11px] font-extrabold tracking-[0.25em] uppercase">
            Official Grand Launch
          </span>
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
        </div>

        {/* Fullscreen Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-xs font-medium shadow-sm hover:border-[var(--gold)]/40 hover:shadow-[0_0_15px_rgba(224,183,109,0.2)] cursor-pointer"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen (Ideal for Projectors/Large Displays)"}
          >
            {isFullscreen ? (
              <>
                <Minimize2 className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="hidden sm:inline">Exit Fullscreen</span>
              </>
            ) : (
              <>
                <Maximize2 className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="hidden sm:inline">Full Screen</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* =========================================================================
          CENTER CONTENT: McCoy Global Emblem, Headings & Orbiting Flight Jet
          ========================================================================= */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 py-6 max-w-4xl mx-auto w-full">
        {/* Orbiting Supersonic Jet & Celestial Rings */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Outer Dashed Orbit */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 rounded-full border border-dashed border-[var(--gold)]/20 animate-[spin_45s_linear_infinite] pointer-events-none" />
          <div className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-slate-800/60 animate-[spin_80s_linear_infinite] pointer-events-none" />

          {/* Orbiting Golden Airplane Silhouette */}
          <div className="absolute w-64 h-64 sm:w-72 sm:h-72 animate-[spin_4s_linear_infinite] flex items-center justify-center pointer-events-none">
            <div className="absolute top-0 flex flex-col items-center">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2"
                className="h-7 w-7 sm:h-8 sm:w-8 text-[var(--gold)] drop-shadow-[0_0_12px_rgba(224,183,109,0.95)]"
                style={{ transform: "rotate(90deg)" }}
              >
                <path
                  fill="var(--gold)"
                  d="M32 4 L35 18 L58 36 L58 41 L35 33 L35 52 L44 57 L44 60 L32 57 L20 60 L20 57 L29 52 L29 33 L6 41 L6 36 L29 18 Z"
                />
              </svg>
              {/* Jet Stream Trail */}
              <div
                className="w-[2px] h-12 bg-gradient-to-t from-transparent via-[var(--gold)] to-[var(--gold)] opacity-90 shadow-[0_0_8px_var(--gold)]"
                style={{ transform: "translateY(-3px)" }}
              />
            </div>
          </div>

          {/* Glowing Insignia Shield */}
          <div
            className={`relative z-10 flex h-28 w-44 sm:h-32 sm:w-48 items-center justify-center rounded-2xl bg-white/95 p-4 shadow-[0_20px_60px_rgba(224,183,109,0.35)] border-2 border-[var(--gold)]/50 transition-all duration-700 backdrop-blur-xl ${
              isLaunching ? "scale-110 shadow-[0_0_80px_rgba(224,183,109,0.8)] -translate-y-4" : "hover:scale-105"
            }`}
          >
            <img
              src="/logo.png"
              alt="McCoy Global Logo"
              className="h-full w-full object-contain filter drop-shadow"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>

        {/* Grand Typography */}
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-[var(--gold)]" />
            <span>Welcome to the Official Portal</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            McCoy Global <span className="text-[var(--gold)] italic">Consultancy</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Hyderabad&apos;s Premier Overseas Education &amp; Global Visa Advisory
          </p>

          {/* Key Global Visa Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 pt-2 text-[11px] sm:text-xs text-slate-200 font-semibold">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm hover:border-[var(--gold)]/50 transition-colors">
              <FlagUSA className="w-5 h-3.5" />
              <span>USA</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm hover:border-[var(--gold)]/50 transition-colors">
              <FlagUK className="w-5 h-3.5" />
              <span>UK</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm hover:border-[var(--gold)]/50 transition-colors">
              <FlagCanada className="w-5 h-3.5" />
              <span>Canada</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm hover:border-[var(--gold)]/50 transition-colors">
              <FlagAustralia className="w-5 h-3.5" />
              <span>Australia</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm hover:border-[var(--gold)]/50 transition-colors">
              <FlagGermany className="w-5 h-3.5" />
              <span>Germany Chancenkarte</span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm hover:border-[var(--gold)]/50 transition-colors">
              <FlagEurope className="w-5 h-3.5" />
              <span>Europe Schengen</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            THE CEREMONIAL LAUNCH BUTTON
            ========================================================================= */}
        <div className="relative mt-8 sm:mt-10 flex flex-col items-center">
          {/* Outer Pulsing Aura Ring */}
          <div
            className={`absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-r from-amber-400/40 via-[var(--gold)]/50 to-emerald-400/40 blur-xl opacity-75 transition-transform duration-1000 pointer-events-none ${
              isLaunching ? "scale-150 opacity-100 animate-ping" : "animate-pulse"
            }`}
          />

          {/* Launch Trigger Button */}
          <button
            type="button"
            id="commence-launch-button"
            onClick={handleLaunch}
            disabled={isLaunching}
            className={`relative group flex items-center justify-center gap-4 px-8 sm:px-14 py-4 sm:py-5 rounded-full font-display font-extrabold text-base sm:text-xl uppercase tracking-[0.18em] cursor-pointer transition-all duration-300 shadow-[0_15px_40px_rgba(224,183,109,0.45)] active:scale-95 ${
              isLaunching
                ? "bg-gradient-to-r from-emerald-500 to-teal-400 text-white scale-105 shadow-[0_0_60px_#10b981]"
                : "bg-gradient-to-r from-[#e0b76d] via-[#f7d98c] to-[#c99846] text-[#060b13] hover:shadow-[0_20px_55px_rgba(224,183,109,0.65)] hover:scale-105 border-2 border-white/60"
            }`}
          >
            {isLaunching ? (
              <>
                <Rocket className="w-6 h-6 animate-bounce text-white" />
                <span>
                  {launchCountdown !== null && launchCountdown > 0
                    ? `LAUNCHING IN ${launchCountdown}...`
                    : "PORTAL LAUNCHED!"}
                </span>
                <Sparkles className="w-6 h-6 animate-spin text-white" />
              </>
            ) : (
              <>
                <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-[#060b13] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                <span className="drop-shadow-sm">LAUNCH WEBSITE</span>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#060b13] transition-transform group-hover:rotate-45" />
              </>
            )}

            {/* Glowing Shimmer Sheen */}
            <span className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <span className="absolute top-0 left-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
            </span>
          </button>

          {/* Explanatory Subtitle */}
          <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
            <span>Click to inaugurate the website and commence the official portal</span>
          </div>
        </div>
      </main>

      {/* =========================================================================
          FOOTER: Ceremony Note & Instructions
          ========================================================================= */}
      <footer className="relative z-20 w-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-t border-[#e0b76d]/15 bg-black/40 backdrop-blur-md text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[var(--gold)] font-bold">McCoy Global</span>
          <span>• 98% Visa Success Rate • Hyderabad City Central</span>
        </div>
        <div className="text-[11px] text-slate-500">
          Tip: Reloading this page at any time restarts the launch screen for ceremony demonstrations.
        </div>
      </footer>
    </div>
  );
}
