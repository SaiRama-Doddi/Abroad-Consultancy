import { GraduationCap, Briefcase } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveGlobe } from "./InteractiveGlobe";
import { AnimatedCounter } from "./AnimatedCounter";

// 1. Colorful Multi-Tone Icon: 12+ Years Guiding Travellers
function TravelersColorIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="trav-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="trav-indigo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
        <linearGradient id="gold-star" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Background Traveler Figure */}
      <circle cx="33" cy="15" r="5.5" fill="url(#trav-indigo)" opacity="0.9" />
      <path d="M 23 37 C 23 30, 28 26.5, 34 26.5 C 40 26.5, 45 30, 45 37" fill="url(#trav-indigo)" opacity="0.8" />
      
      {/* Foreground Main Traveler Figure */}
      <circle cx="17" cy="17" r="7" fill="url(#trav-blue)" />
      <circle cx="15" cy="15" r="1.8" fill="#ffffff" opacity="0.7" />
      <path d="M 5 39 C 5 30, 10.5 27, 18 27 C 25.5 27, 31 30, 31 39 Z" fill="url(#trav-blue)" />

      {/* Guide Star badge on top right */}
      <path d="M 37 5 L 38.5 9 L 42.5 10.5 L 38.5 12 L 37 16 L 35.5 12 L 31.5 10.5 L 35.5 9 Z" fill="url(#gold-star)" style={{ filter: "drop-shadow(0 0 3px rgba(245,158,11,0.85))" }} />
    </svg>
  );
}

// 2. Colorful Multi-Tone Icon: 4,800+ Visas Processed
function VisaApprovedColorIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="doc-gold-crest" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
        <linearGradient id="doc-emerald-stamp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      {/* Background Passport Document Sheet */}
      <rect x="7" y="6" width="28" height="36" rx="3.5" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.2" />
      {/* Passport Dark Blue Header Band */}
      <path d="M 7 9 C 7 7.3, 8.3 6, 10 6 L 32 6 C 33.7 6, 35 7.3, 35 9 L 35 15 L 7 15 Z" fill="#0f172a" />
      {/* Emblem in passport header */}
      <circle cx="21" cy="10.5" r="2.2" fill="url(#doc-gold-crest)" />
      
      {/* Passport Document Text lines */}
      <rect x="11" y="19" width="14" height="2" rx="1" fill="#94a3b8" />
      <rect x="11" y="24" width="18" height="2" rx="1" fill="#cbd5e1" />
      <rect x="11" y="29" width="11" height="2" rx="1" fill="#cbd5e1" />
      
      {/* Official Emerald Green Approved Stamp with Checkmark */}
      <circle cx="33" cy="33" r="11" fill="url(#doc-emerald-stamp)" style={{ filter: "drop-shadow(0 3px 6px rgba(4,120,87,0.35))" }} />
      <circle cx="33" cy="33" r="9.5" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 1.5" />
      <path d="M 28.5 33 L 31.5 36 L 37.5 30" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 3. Colorful Multi-Tone Icon: 18 Countries Covered
function GlobeColorIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="globe-deep-ocean" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="45%" stopColor="#0284c7" />
          <stop offset="90%" stopColor="#034e7b" />
          <stop offset="100%" stopColor="#082f49" />
        </radialGradient>
        <linearGradient id="globe-emerald-land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="50%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        <linearGradient id="globe-flight-trail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      {/* Atmosphere Glow Ring */}
      <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.5" />
      
      {/* 3D Ocean Sphere */}
      <circle cx="24" cy="24" r="19" fill="url(#globe-deep-ocean)" />
      
      {/* Lat/Long Grid Curves */}
      <ellipse cx="24" cy="24" rx="10" ry="19" fill="none" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.8" />
      <line x1="5" y1="24" x2="43" y2="24" stroke="rgba(255, 255, 255, 0.25)" strokeWidth="0.8" />
      <ellipse cx="24" cy="24" rx="19" ry="8" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.8" />

      {/* Vibrant Continents */}
      <path d="M 12 12 C 14 11, 17 13, 16 16 C 15 19, 11 20, 13 24 C 15 28, 17 31, 15 36 C 14 38, 11 36, 10 32 C 9 28, 9 20, 12 12 Z" fill="url(#globe-emerald-land)" />
      <path d="M 23 11 C 26 10, 29 13, 27 16 C 25 18, 29 20, 27 25 C 25 30, 29 33, 26 37 C 23 37, 21 33, 22 28 C 23 23, 20 20, 21 16 Z" fill="url(#globe-emerald-land)" />
      <path d="M 28 11 C 32 9, 38 12, 39 16 C 40 20, 34 23, 33 27 C 32 25, 30 22, 31 18 Z" fill="url(#globe-emerald-land)" />

      {/* Golden Orbital Flight Curve */}
      <path d="M 6 32 C 10 38, 24 43, 38 31 C 44 26, 45 18, 41 12" fill="none" stroke="url(#globe-flight-trail)" strokeWidth="1.5" strokeDasharray="2.5 2" />
      
      {/* Miniature Gold Jet */}
      <g transform="translate(39, 12) rotate(-35) scale(0.6)">
        <path d="M 0 -7 L 7 0 L 2 2 L 2 7 L -2 7 L -2 2 L -7 0 Z" fill="#fef08a" style={{ filter: "drop-shadow(0 0 3px #f59e0b)" }} />
      </g>
    </svg>
  );
}

// 4. Colorful Multi-Tone Icon: Zero Fee Consultation
function HandshakeColorIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="hs-vibrant-purple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <linearGradient id="hs-vibrant-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
        <linearGradient id="hs-warm-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fed7aa" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      
      {/* Left Suit Sleeve (Rich Purple) */}
      <path d="M 4 19 L 14 15 L 18 28 L 7 32 Z" fill="url(#hs-vibrant-purple)" />
      <rect x="14" y="15" width="3" height="14" rx="1" fill="#ffffff" transform="rotate(5 14 15)" />

      {/* Right Suit Sleeve (Warm Gold) */}
      <path d="M 44 20 L 34 16 L 30 29 L 41 33 Z" fill="url(#hs-vibrant-gold)" />
      <rect x="31" y="17" width="3" height="14" rx="1" fill="#ffffff" transform="rotate(-5 31 17)" />

      {/* Shaking Hands Interlocking */}
      <path d="M 17 21 C 19 18, 23 18, 26 21 C 28 23, 31 23, 33 23 C 35 23, 36 21, 35 20 C 32 18, 27 16, 23 16 C 19 16, 16 18, 15 21 Z" fill="url(#hs-warm-skin)" />
      <path d="M 21 22 C 23 22, 25 24, 25 26 C 25 28, 23 29, 21 29 C 19 29, 18 28, 18 26 C 18 24, 19 22, 21 22 Z" fill="url(#hs-warm-skin)" />
      <path d="M 22 25 C 24 25, 26 27, 26 29 C 26 31, 24 32, 22 32 C 20 32, 19 31, 19 29 C 19 27, 20 25, 22 25 Z" fill="url(#hs-warm-skin)" />

      {/* Right Hand Clasp */}
      <path d="M 33 21 C 31 19, 28 18, 24 18 C 21 18, 19 19, 18 22 L 21 26 C 23 24, 25 23, 27 23 C 29 23, 31 25, 32 26 L 33 21 Z" fill="url(#hs-vibrant-gold)" />
      <path d="M 25 24 C 24 26, 23 28, 24 30 C 26 31, 28 30, 29 28 C 29 27, 27 25, 25 24 Z" fill="url(#hs-vibrant-gold)" />

      {/* Sparkle of Trust & Zero Fee */}
      <path d="M 24 6 L 25.5 10.5 L 30 12 L 25.5 13.5 L 24 18 L 22.5 13.5 L 18 12 L 22.5 10.5 Z" fill="#fbbf24" style={{ filter: "drop-shadow(0 0 4px #f59e0b)" }} />
    </svg>
  );
}

// 5. Colorful Multi-Tone Icon: Our Vision
function VisionColorIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="vis-iris" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <linearGradient id="vis-eyelid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      {/* Outer Eyelid Arc with Glow */}
      <path d="M 4 24 C 12 9, 36 9, 44 24 C 36 39, 12 39, 4 24 Z" fill="#ffffff" stroke="url(#vis-eyelid)" strokeWidth="2.8" style={{ filter: "drop-shadow(0 2px 6px rgba(2,132,199,0.25))" }} />
      {/* Glowing Outer Iris Ring */}
      <circle cx="24" cy="24" r="11" fill="none" stroke="#67e8f9" strokeWidth="1.2" strokeDasharray="3 1.5" />
      {/* Blue Iris */}
      <circle cx="24" cy="24" r="9" fill="url(#vis-iris)" />
      {/* Pupil */}
      <circle cx="24" cy="24" r="4.5" fill="#0f172a" />
      {/* Specular Glint Reflection */}
      <circle cx="21.5" cy="21.5" r="2.2" fill="#ffffff" />
      <circle cx="26" cy="26" r="1" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

// 6. Colorful Multi-Tone Icon: Our Mission
function MissionColorIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="target-crimson" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="60%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#9f1239" />
        </radialGradient>
        <linearGradient id="target-gold-dart" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>
      </defs>
      {/* Outer Crimson Ring */}
      <circle cx="24" cy="24" r="21" fill="url(#target-crimson)" style={{ filter: "drop-shadow(0 3px 6px rgba(225,29,72,0.3))" }} />
      {/* White Ring */}
      <circle cx="24" cy="24" r="15.5" fill="#ffffff" />
      {/* Inner Crimson Ring */}
      <circle cx="24" cy="24" r="10.5" fill="url(#target-crimson)" />
      {/* Center Golden Bullseye */}
      <circle cx="24" cy="24" r="5" fill="url(#target-gold-dart)" />

      {/* Gold Dart Arrow Piercing Bullseye */}
      <g transform="translate(3, -2)">
        <path d="M 40 8 L 34 14 L 37 17 L 43 11 Z" fill="url(#target-gold-dart)" />
        <line x1="35" y1="13" x2="22.5" y2="24.5" stroke="#fef08a" strokeWidth="2.8" strokeLinecap="round" />
        <polygon points="21,26 25,23 23,27" fill="#fef08a" />
      </g>
    </svg>
  );
}

const stats = [
  { 
    value: "12+", 
    label: "Years Guiding Travellers", 
    icon: TravelersColorIcon,
    badgeBg: "bg-blue-50/90 border-blue-200/90 shadow-[0_4px_16px_rgba(37,99,235,0.12)]",
  },
  { 
    value: "4,800+", 
    label: "Visas Processed", 
    icon: VisaApprovedColorIcon,
    badgeBg: "bg-emerald-50/90 border-emerald-200/90 shadow-[0_4px_16px_rgba(16,185,129,0.12)]",
  },
  { 
    value: "18", 
    label: "Countries Covered", 
    icon: GlobeColorIcon,
    badgeBg: "bg-sky-50/90 border-sky-200/90 shadow-[0_4px_16px_rgba(14,165,233,0.12)]",
  },
  { 
    value: "Free", 
    label: "Zero Fee Consultation", 
    icon: HandshakeColorIcon,
    badgeBg: "bg-purple-50/90 border-purple-200/90 shadow-[0_4px_16px_rgba(168,85,247,0.12)]",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white text-slate-800 pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Globe & Interactive Badges */}
          <ScrollReveal direction="left" delay={150}>
            <div className="relative">
              {/* Custom Animations Style Tag */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float-slow {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-12px) rotate(2deg); }
                }
                @keyframes float-medium {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(12px) rotate(-2deg); }
                }
                @keyframes float-fast {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
              `}} />

              <div
                className="overflow-hidden rounded-[2.5rem] border border-[var(--gold)]/20 bg-slate-50/50 backdrop-blur-md"
                style={{ boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.05), 0 0 50px rgba(184, 123, 44, 0.02)" }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 group/globe flex items-center justify-center">
                  
                  {/* Interactive 3D Golden Rotating Globe Component */}
                  <div className="absolute inset-0 w-full h-full z-[1]">
                    <InteractiveGlobe />
                  </div>

                  {/* Skyline Silhouette Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-[2] opacity-[0.12]">
                    <svg className="w-full h-full text-[var(--gold)]" viewBox="0 0 400 100" fill="currentColor" preserveAspectRatio="none">
                      <rect x="10" y="30" width="15" height="70" />
                      <rect x="30" y="10" width="18" height="90" />
                      <rect x="52" y="40" width="14" height="60" />
                      <rect x="70" y="20" width="22" height="80" />
                      <path d="M 120 100 C 120 70, 135 60, 150 100 Z" />
                      <path d="M 140 100 C 140 65, 158 55, 175 100 Z" />
                      <path d="M 165 100 C 165 75, 180 70, 195 100 Z" />
                      <path d="M 185 100 C 185 85, 195 80, 205 100 Z" />
                      <path d="M 230 100 Q 280 40 330 100" stroke="currentColor" strokeWidth="2.5" fill="none" />
                      <path d="M 235 100 Q 280 45 325 100" stroke="currentColor" strokeWidth="1" fill="none" />
                      <rect x="350" y="30" width="16" height="70" />
                      <rect x="370" y="15" width="20" height="85" />
                    </svg>
                  </div>

                  {/* Flying Airplane Overlay */}
                  <div 
                    className="absolute top-28 right-12 z-[2] pointer-events-none opacity-40 rotate-[25deg]"
                    style={{ animation: "float-medium 6.5s ease-in-out infinite" }}
                  >
                    <svg className="w-8 h-8 text-[var(--gold)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  </div>

                  {/* Floating Thematic Badges (Desktop Only) */}
                  {/* Badge 1: Study Abroad (Top Left) */}
                  <div 
                    className="hidden sm:flex sm:absolute top-6 left-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-slow 7s ease-in-out infinite" }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--gold)]">Study Abroad</span>
                      <span className="block text-[0.82rem] font-black text-slate-800 uppercase tracking-wide mt-0.5">Admissions & Visas</span>
                    </div>
                  </div>

                  {/* Badge 2: Global Visas (Middle Left) */}
                  <div 
                    className="hidden sm:flex sm:absolute top-[46%] left-6 z-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-fast 5s ease-in-out infinite" }}
                  >
                    <div className="flex -space-x-1.5">
                      <img src="https://flagcdn.com/w40/gb.png" className="h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm" alt="UK" />
                      <img src="https://flagcdn.com/w40/de.png" className="h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm" alt="Germany" />
                      <img src="https://flagcdn.com/w40/us.png" className="h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm" alt="USA" />
                    </div>
                    <span className="text-[0.72rem] font-extrabold uppercase tracking-widest text-slate-800">Global Visas</span>
                  </div>

                  {/* Badge 3: Work & Migrate (Bottom Left) */}
                  <div 
                    className="hidden sm:flex sm:absolute bottom-6 left-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-medium 6s ease-in-out infinite" }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 shadow-sm">
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--gold)]">Work & Migrate</span>
                      <span className="block text-[0.82rem] font-black text-slate-800 uppercase tracking-wide mt-0.5">Opportunities</span>
                    </div>
                  </div>

                  {/* Badge 4: 98% Approval (Bottom Right) */}
                  <div 
                    className="hidden sm:flex sm:absolute bottom-6 right-6 z-10 flex flex-col items-center justify-center text-center px-5 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-slow 7.5s ease-in-out infinite" }}
                  >
                    <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[var(--gold)] leading-none">98%</span>
                    <span className="block text-[0.65rem] sm:text-[0.72rem] font-extrabold uppercase tracking-widest text-slate-700 mt-1 leading-none">
                      Approval Rate
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Premium Text Content */}
          <ScrollReveal direction="right" delay={300}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] self-start">
                <span>About Us</span>
                <span className="text-xs shrink-0 select-none">✈️</span>
              </div>
              
              <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl">
                From your first question to the <span className="text-[var(--gold)] font-bold">check-in counter</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" />
              
              <p className="text-[1.02rem] leading-relaxed text-slate-600 text-justify">
                McCoy Global Consultancy is a boutique overseas advisory built on one
                simple belief: a visa is not paperwork, it is a <span className="text-[var(--gold)] font-semibold animate-pulse">life decision</span>. We sit
                with you, understand your profile, and shape a route that actually
                fits — study, skilled work, or family migration.
              </p>
              <p className="text-[1.02rem] leading-relaxed text-slate-600 text-justify">
                Documentation, applications, interview prep, tickets and pre-departure
                briefing — <span className="text-[var(--gold)] font-semibold">every step</span> is handled by a named consultant who stays with
                you until you walk through that terminal with your passport in hand.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Horizontal Curved Stats Block */}
        <ScrollReveal direction="up" delay={200}>
          <div 
            className="mt-16 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center"
          >
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={s.label} 
                  className={`flex items-center gap-4 ${
                    idx > 0 ? "pt-4 lg:pt-0 border-slate-100" : ""
                  } ${
                    idx === 1 || idx === 3 ? "sm:pl-6 sm:border-l lg:pl-8 lg:border-l border-slate-100" : ""
                  } ${
                    idx === 2 ? "sm:border-l-0 lg:pl-8 lg:border-l border-slate-100" : ""
                  } ${
                    idx >= 2 ? "pt-4 sm:pt-4 lg:pt-0 sm:border-t lg:border-t-0 border-slate-100" : ""
                  }`}
                >
                  <div className={`flex h-13 w-13 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-2xl ${s.badgeBg} border transition-transform duration-300 hover:scale-110`}>
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <div>
                    <span className="block font-display text-3xl font-extrabold text-[var(--gold)] leading-none">
                      <AnimatedCounter value={s.value} />
                    </span>
                    <span className="block text-[0.72rem] sm:text-[0.78rem] uppercase font-bold tracking-widest text-slate-500 mt-2 leading-none">
                      {s.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>

      {/* Vision & Mission Cards Row */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-8 sm:mt-12">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-6">
          {/* Vision Card */}
          <ScrollReveal direction="up" delay={150} className="h-full">
            <div 
              className="group relative h-full flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200/85 bg-white p-3.5 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-300/80 hover:shadow-[0_15px_35px_rgba(2,132,199,0.08)] overflow-hidden"
              style={{ boxShadow: "0 10px 30px -15px rgba(6, 10, 21, 0.07)" }}
            >
              {/* Left edge sky-blue gradient accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-gradient-to-b from-sky-400 to-blue-600 transition-all duration-500 group-hover:w-[5px]" />
              
              {/* Soft decorative background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5">
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-sky-50 to-blue-100/80 border border-sky-200/80 shadow-[0_4px_14px_rgba(2,132,199,0.15)] transition-all duration-300 group-hover:scale-105">
                    <VisionColorIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <span className="block text-[0.52rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sky-600 mb-0.5 leading-none">Our Identity</span>
                    <h3 className="font-display text-sm sm:text-xl font-bold text-slate-800 leading-tight">Our Vision</h3>
                  </div>
                </div>

                {/* Mobile concise text */}
                <p className="mt-2.5 text-[0.72rem] leading-snug text-slate-500 text-justify sm:hidden">
                  Connecting ambitious students with premier global universities & overseas careers.
                </p>

                {/* Desktop concise text */}
                <p className="mt-3 text-[0.88rem] leading-relaxed text-slate-500 text-justify hidden sm:block">
                  To connect local talent with top global universities and international career pathways, making borderless education seamless, transparent, and accessible.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal direction="up" delay={300} className="h-full">
            <div 
              className="group relative h-full flex flex-col justify-between rounded-xl sm:rounded-2xl border border-slate-200/85 bg-white p-3.5 sm:p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rose-300/80 hover:shadow-[0_15px_35px_rgba(225,29,72,0.08)] overflow-hidden"
              style={{ boxShadow: "0 10px 30px -15px rgba(6, 10, 21, 0.07)" }}
            >
              {/* Left edge crimson-amber gradient accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-gradient-to-b from-rose-500 to-amber-500 transition-all duration-500 group-hover:w-[5px]" />
              
              {/* Soft decorative background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3.5">
                  <div className="flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-rose-50 to-orange-100/80 border border-rose-200/80 shadow-[0_4px_14px_rgba(225,29,72,0.15)] transition-all duration-300 group-hover:scale-105">
                    <MissionColorIcon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>
                  <div>
                    <span className="block text-[0.52rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.18em] text-rose-600 mb-0.5 leading-none">Our Commitment</span>
                    <h3 className="font-display text-sm sm:text-xl font-bold text-slate-800 leading-tight">Our Mission</h3>
                  </div>
                </div>

                {/* Mobile concise text */}
                <p className="mt-2.5 text-[0.72rem] leading-snug text-slate-500 text-justify sm:hidden">
                  Providing honest counseling and end-to-end visa guidance with a proven 98% success rate.
                </p>

                {/* Desktop concise text */}
                <p className="mt-3 text-[0.88rem] leading-relaxed text-slate-500 text-justify hidden sm:block">
                  To empower students with tailored counseling, flawless documentation, and expert visa assistance, consistently maintaining a 98% approval rate.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}