import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

// Helper to define gradients globally, but each SVG can also declare its local definitions.
export function CustomIconsDefs() {
  return (
    <svg style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }} aria-hidden="true">
      <defs>
        {/* Core Premium Gold Gradient */}
        <linearGradient id="premium-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d08b" />
          <stop offset="50%" stopColor="#e0b76d" />
          <stop offset="100%" stopColor="#9a712c" />
        </linearGradient>

        {/* Glossy Sky/Deep Blue Gradient */}
        <linearGradient id="premium-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#034875" />
        </linearGradient>
        
        {/* Dark Navy Accent Gradient */}
        <linearGradient id="premium-navy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Soft Drop Shadow Filter for SVGs */}
        <filter id="premium-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
        </filter>
      </defs>
    </svg>
  );
}

// 1. Globe Icon: High quality multi-layered globe with atmosphere, grid lines, and gradient continents
export function GlobeIcon({ className, size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size || "100%"}
      height={size || "100%"}
      className={className}
      {...props}
    >
      <defs>
        {/* Realistic 3D Sphere Ocean Gradient */}
        <radialGradient id="real-earth-ocean" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="40%" stopColor="#2563eb" />
          <stop offset="85%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
        {/* Realistic Land Gradient */}
        <linearGradient id="real-earth-land" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86efac" />
          <stop offset="60%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#15803d" />
        </linearGradient>
        {/* 3D Sphere Shading Overlay */}
        <radialGradient id="sphere-shading" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
          <stop offset="50%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.6)" />
        </radialGradient>
      </defs>

      {/* Atmospheric Glow */}
      <circle cx="32" cy="32" r="30" fill="none" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="2.5" style={{ filter: "drop-shadow(0 0 5px rgba(96, 165, 250, 0.5))" }} />

      {/* Ocean Base */}
      <circle cx="32" cy="32" r="28" fill="url(#real-earth-ocean)" stroke="url(#premium-gold)" strokeWidth="1.5" />

      {/* Lat/Long Grid Lines (Subtle White) */}
      <path d="M 4 32 A 28 28 0 0 0 60 32 A 28 28 0 0 0 4 32" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8" />
      <path d="M 32 4 A 28 28 0 0 0 32 60 A 28 28 0 0 0 32 4" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8" />
      <ellipse cx="32" cy="32" rx="14" ry="28" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.8" />
      <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.8" />

      {/* Detailed Continents (Realistic shapes) */}
      {/* North America */}
      <path d="M 12 15 C 14 14, 16 17, 18 16 C 20 15, 22 17, 24 16 C 26 15, 28 19, 26 22 C 24 25, 21 22, 19 25 C 17 27, 15 32, 19 33 C 22 34, 23 30, 25 32 C 26 33, 25 36, 21 38 C 18 40, 19 43, 22 45 C 24 47, 21 50, 19 51 M 14 19 C 13 22, 11 25, 12 28 C 13 30, 12 32, 10 30 C 8 28, 7 22, 9 18 Z" fill="url(#real-earth-land)" />
      {/* Greenland */}
      <path d="M 24 6 C 27 6, 29 8, 28 11 C 26 13, 22 12, 21 10 C 20 8, 22 6, 24 6 Z" fill="#eff6ff" opacity="0.9" /> {/* Snowy Greenland */}
      {/* South America */}
      <path d="M 19 33 C 21 33, 24 37, 26 40 C 28 43, 26 48, 24 51 C 22 53, 20 53, 19 51 C 18 49, 16 43, 17 39 C 18 37, 16 35, 19 33 Z" fill="url(#real-earth-land)" />
      {/* Eurasia */}
      <path d="M 34 10 C 37 8, 42 10, 44 13 C 46 16, 50 12, 52 16 C 54 20, 48 23, 46 24 C 44 25, 49 28, 45 32 C 41 36, 40 32, 36 32 C 34 32, 32 36, 29 34 C 27 32, 25 26, 27 22 C 29 18, 26 12, 30 10 Z" fill="url(#real-earth-land)" />
      {/* India & SE Asia */}
      <path d="M 45 32 L 47 36 L 49 33 Z" fill="url(#real-earth-land)" />
      {/* Japan */}
      <path d="M 54 20 C 55 22, 55 24, 54 26" fill="none" stroke="url(#real-earth-land)" strokeWidth="1.5" strokeLinecap="round" />
      {/* Africa */}
      <path d="M 32 34 C 36 34, 40 37, 42 40 C 44 43, 42 48, 39 51 C 36 54, 33 52, 31 49 C 29 46, 26 44, 28 40 C 29 36, 29 34, 32 34 Z" fill="url(#real-earth-land)" />
      {/* Madagascar */}
      <path d="M 42 48 C 43 49, 43 51, 42 52" fill="none" stroke="url(#real-earth-land)" strokeWidth="1.2" />
      {/* Australia */}
      <path d="M 47 44 C 51 44, 54 46, 55 49 C 53 52, 49 53, 46 51 C 44 49, 45 46, 47 44 Z" fill="url(#real-earth-land)" />

      {/* Cloud Layers (Highly realistic white atmospheric textures) */}
      <path d="M 12 20 Q 18 16, 24 24 T 36 18 T 48 26" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.32" style={{ filter: "blur(0.5px)" }} />
      <path d="M 16 38 Q 24 44, 32 36 T 48 40" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.28" style={{ filter: "blur(0.5px)" }} />
      <path d="M 28 48 Q 36 52, 44 46" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" opacity="0.25" style={{ filter: "blur(0.5px)" }} />

      {/* Spherical Shadow Overlay (Makes it 3D) */}
      <circle cx="32" cy="32" r="28" fill="url(#sphere-shading)" />

      {/* Flight Orbit */}
      <path d="M 6 44 A 28 20 40 0 1 58 20" fill="none" stroke="url(#premium-gold)" strokeWidth="1.5" strokeDasharray="3 3" />
      <g transform="translate(48, 22) rotate(-15)">
        <path d="M 0 -4 L 4 0 L 1 1 L 1 4 L -1 4 L -1 1 L -4 0 Z" fill="#ffffff" style={{ filter: "drop-shadow(0 0 4px #e0b76d)" }} />
      </g>
    </svg>
  );
}

// 2. Handshake Icon: Detailed two hands shaking in cooperation (Gold & Blue gradients)
export function HandshakeIcon({ className, size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size || "100%"}
      height={size || "100%"}
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="hand-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#e0b76d" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <linearGradient id="hand-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="50%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      
      {/* Background Soft Glow */}
      <circle cx="32" cy="32" r="28" fill="rgba(224, 183, 109, 0.05)" stroke="rgba(224, 183, 109, 0.15)" strokeWidth="1.5" />

      {/* LEFT ARM / SUIT SLEEVE */}
      <path d="M 4 22 L 18 18 L 22 36 L 8 40 Z" fill="url(#premium-gold)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* White shirt cuff */}
      <rect x="18" y="17" width="4" height="20" rx="1" fill="#ffffff" transform="rotate(5, 18, 17)" />

      {/* RIGHT ARM / SUIT SLEEVE */}
      <path d="M 60 24 L 46 20 L 42 38 L 56 42 Z" fill="url(#premium-navy)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* White shirt cuff */}
      <rect x="44" y="19" width="4" height="20" rx="1" fill="#ffffff" transform="rotate(-5, 44, 19)" />

      {/* SHAKING HANDS - Bold, clear vector paths for high legibility */}
      {/* Left Hand (Gold Gradient) */}
      <path d="M 22 26 C 24 23, 29 23, 32 26 C 35 29, 38 29, 41 29 C 43 29, 45 27, 43 25 C 40 23, 34 20, 29 20 C 24 20, 21 23, 20 26 Z" fill="url(#hand-gold-grad)" />
      {/* Left Hand fingers locking */}
      <path d="M 27 28 C 30 28, 32 30, 32 32 C 32 34, 29 35, 27 35 C 25 35, 23 34, 23 32 C 23 30, 25 28, 27 28 Z" fill="url(#hand-gold-grad)" />
      <path d="M 28 32 C 31 32, 33 34, 33 36 C 33 38, 30 39, 28 39 C 26 39, 24 38, 24 36 C 24 34, 26 32, 28 32 Z" fill="url(#hand-gold-grad)" />
      <path d="M 29 36 C 32 36, 34 38, 34 40 C 34 42, 31 43, 29 43 C 27 43, 25 42, 25 40 C 25 38, 27 36, 29 36 Z" fill="url(#hand-gold-grad)" opacity="0.9" />

      {/* Right Hand (Blue/Sky Gradient) clasping from top */}
      <path d="M 44 26 C 42 23, 38 22, 33 22 C 29 22, 25 24, 23 27 L 27 32 C 29 30, 31 29, 33 29 C 36 29, 39 31, 41 33 L 44 26 Z" fill="url(#hand-blue-grad)" />
      {/* Right Hand fingers overlay */}
      <path d="M 33 30 C 31 32, 29 34, 31 36 C 33 38, 36 37, 37 35 C 38 33, 36 31, 33 30 Z" fill="url(#hand-blue-grad)" />
      <path d="M 36 33 C 34 35, 32 37, 34 39 C 36 41, 39 40, 40 38 C 41 36, 39 34, 36 33 Z" fill="url(#hand-blue-grad)" />
      
      {/* Success/Trust Sparkle Badge */}
      <path d="M 32 8 L 34 13 L 39 15 L 34 17 L 32 22 L 30 17 L 25 15 L 30 13 Z" fill="url(#premium-gold)" style={{ filter: "drop-shadow(0 0 5px rgba(224,183,109,0.95))" }} />
    </svg>
  );
}

// 3. Plane / Plane Takeoff Icon: Stylized high-speed supersonic flight jet
export function PlaneIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Exhaust Fire Trail */}
      <path d="M 4 52 C 12 48, 20 40, 26 36 L 20 30 C 14 34, 8 42, 4 52 Z" fill="url(#premium-gold)" opacity="0.6" />
      <path d="M 8 50 C 14 47, 21 41, 25 38 L 22 34 C 18 37, 12 43, 8 50 Z" fill="#ffffff" opacity="0.8" />

      {/* Plane Body */}
      {/* Wings */}
      <path d="M 14 32 L 28 12 L 34 14 L 30 30 Z" fill="url(#premium-blue)" />
      <path d="M 30 38 L 44 54 L 50 52 L 36 36 Z" fill="url(#premium-navy)" />

      {/* Fuselage (Main Body) */}
      <path d="M 18 42 C 22 41, 30 38, 38 34 C 46 30, 54 24, 60 16 C 52 22, 44 26, 38 28 C 30 30, 26 32, 22 34 L 18 42 Z" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      {/* Cabin Windows (Tiny gold/white dots) */}
      <circle cx="42" cy="27" r="0.8" fill="#ffffff" />
      <circle cx="46" cy="25" r="0.8" fill="#ffffff" />
      <circle cx="50" cy="23" r="0.8" fill="#ffffff" />

      {/* Tail Fin */}
      <path d="M 22 34 L 12 28 L 10 32 L 18 42 Z" fill="url(#premium-blue)" />
    </svg>
  );
}

export function PlaneTakeoffIcon({ className, size = 24, ...props }: IconProps) {
  return <PlaneIcon className={className} size={size} {...props} />;
}

// 4. Graduation Cap Icon: Elite academic cap with detailed tassel & base
export function GraduationCapIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Background circular shadow */}
      <circle cx="32" cy="32" r="28" fill="rgba(224, 183, 109, 0.02)" />

      {/* Cap Skull Base */}
      <path d="M 18 32 L 18 42 C 18 48, 46 48, 46 42 L 46 32 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1" />
      <path d="M 22 43 C 22 46, 42 46, 42 43" fill="none" stroke="rgba(224, 183, 109, 0.3)" strokeWidth="1" />

      {/* Mortarboard Diamond Top */}
      <polygon points="32,10 60,24 32,38 4,24" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      <polygon points="32,12 56,24 32,36 8,24" fill="url(#premium-navy)" />

      {/* Center Button */}
      <ellipse cx="32" cy="24" rx="2.5" ry="1.5" fill="url(#premium-gold)" />

      {/* Tassel Hanging down */}
      <path d="M 32 24 C 36 25, 46 29, 48 33 L 48 44" fill="none" stroke="url(#premium-gold)" strokeWidth="1.5" />
      {/* Tassel Fringe */}
      <polygon points="46,44 50,44 48,52" fill="url(#premium-gold)" />
      
      {/* Star / Sparkle representing educational merit */}
      <path d="M 14 12 L 15 14 L 17 15 L 15 16 L 14 18 L 13 16 L 11 15 L 13 14 Z" fill="url(#premium-gold)" />
    </svg>
  );
}

// 5. Briefcase Icon: Professional traveler's suitcase / leather briefcase
export function BriefcaseIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Handle */}
      <path d="M 24 16 L 24 10 C 24 8, 26 6, 28 6 L 36 6 C 38 6, 40 8, 40 10 L 40 16" fill="none" stroke="url(#premium-gold)" strokeWidth="3" strokeLinecap="round" />
      
      {/* Main Bag Body */}
      <rect x="8" y="16" width="48" height="38" rx="6" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Horizontal Gold Design Strip */}
      <rect x="8" y="28" width="48" height="6" fill="url(#premium-gold)" opacity="0.85" />
      
      {/* Straps and Metal Clasps */}
      <rect x="18" y="16" width="4" height="38" fill="rgba(224, 183, 109, 0.2)" />
      <rect x="42" y="16" width="4" height="38" fill="rgba(224, 183, 109, 0.2)" />

      {/* Gold Buckles */}
      <rect x="17" y="32" width="6" height="8" rx="1" fill="url(#premium-gold)" />
      <rect x="41" y="32" width="6" height="8" rx="1" fill="url(#premium-gold)" />

      {/* Corner Protectors */}
      <path d="M 8 22 L 14 16 L 8 16 Z" fill="url(#premium-gold)" />
      <path d="M 56 22 L 50 16 L 56 16 Z" fill="url(#premium-gold)" />
      <path d="M 8 48 L 14 54 L 8 54 Z" fill="url(#premium-gold)" />
      <path d="M 56 48 L 50 54 L 56 54 Z" fill="url(#premium-gold)" />
    </svg>
  );
}

// 6. Calendar Icon: Interactive scheduling card
export function CalendarIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Backplate sheet */}
      <rect x="8" y="12" width="48" height="44" rx="6" fill="url(#premium-navy)" stroke="rgba(224, 183, 109, 0.2)" strokeWidth="1" />
      
      {/* Header bar (Gold Gradient) */}
      <path d="M 8 18 C 8 14.7, 10.7 12, 14 12 L 50 12 C 53.3 12, 56 14.7, 56 18 L 56 24 L 8 24 Z" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Spiral Bind Rings */}
      <rect x="16" y="6" width="4" height="10" rx="2" fill="url(#premium-blue)" />
      <rect x="30" y="6" width="4" height="10" rx="2" fill="url(#premium-blue)" />
      <rect x="44" y="6" width="4" height="10" rx="2" fill="url(#premium-blue)" />

      {/* Calendar Grid Days */}
      <circle cx="18" cy="32" r="2.5" fill="rgba(224, 183, 109, 0.6)" />
      <circle cx="32" cy="32" r="2.5" fill="rgba(224, 183, 109, 0.6)" />
      <circle cx="46" cy="32" r="2.5" fill="rgba(224, 183, 109, 0.6)" />

      <circle cx="18" cy="42" r="2.5" fill="rgba(224, 183, 109, 0.6)" />
      {/* Current/Target Day highlighted in white/blue */}
      <circle cx="32" cy="42" r="4.5" fill="url(#premium-blue)" style={{ filter: "drop-shadow(0 0 3px #38bdf8)" }} />
      <circle cx="46" cy="42" r="2.5" fill="rgba(224, 183, 109, 0.6)" />

      <circle cx="18" cy="50" r="2.5" fill="rgba(224, 183, 109, 0.6)" />
      <circle cx="32" cy="50" r="2.5" fill="rgba(224, 183, 109, 0.6)" />
      <circle cx="46" cy="50" r="2.5" fill="rgba(224, 183, 109, 0.6)" />
    </svg>
  );
}

// 7. Users / User Icon: Modern client avatars
export function UsersIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Background User */}
      <circle cx="22" cy="24" r="8" fill="url(#premium-blue)" opacity="0.65" />
      <path d="M 6 48 C 6 40, 14 38, 22 38 C 30 38, 38 40, 38 48" fill="url(#premium-blue)" opacity="0.5" />

      {/* Foreground User */}
      <circle cx="42" cy="22" r="9" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      <path d="M 24 50 C 24 40, 32 38, 42 38 C 52 38, 60 40, 60 50 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1.5" />
    </svg>
  );
}

export function UserIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <circle cx="32" cy="20" r="12" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      <path d="M 12 52 C 12 40, 20 36, 32 36 C 44 36, 52 40, 52 52 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" />
    </svg>
  );
}

// 8. Shield Check Icon: Premium metallic security shield with checkmark
export function ShieldCheckIcon({ className, size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size || "100%"}
      height={size || "100%"}
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="shield-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#e0b76d" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
      </defs>
      
      {/* Shield Outer Plate (Bold thick gold trim) */}
      <path d="M 32 4 C 46 4, 56 8, 56 24 C 56 42, 44 54, 32 60 C 20 54, 8 42, 8 24 C 8 8, 18 4, 32 4 Z" fill="url(#premium-navy)" stroke="url(#shield-rim)" strokeWidth="3" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Inner Rim Line (Glow effect) */}
      <path d="M 32 8 C 42 8, 51 11.5, 51 24 C 51 38, 41 49, 32 54 C 23 49, 13 38, 13 24 C 13 11.5, 22 8, 32 8 Z" fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2.5" />

      {/* Gold Checkmark (Large, glossy, and prominent) */}
      <path d="M 20 30 L 28 38 L 46 18" fill="none" stroke="url(#premium-gold)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 5px rgba(224, 183, 109, 0.85))" }} />
    </svg>
  );
}

export function ShieldIcon({ className, size, ...props }: IconProps) {
  return <ShieldCheckIcon className={className} size={size} {...props} />;
}

// 9. File Text Icon: Detailed visa application document with checkmark
export function FileTextIcon({ className, size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size || "100%"}
      height={size || "100%"}
      className={className}
      {...props}
    >
      {/* Document Sheet (With gold border) */}
      <path d="M 12 4 L 42 4 L 54 16 L 54 58 C 54 60.2, 52.2 62, 50 62 L 14 62 C 11.8 62, 10 60.2, 10 58 L 10 8 C 10 5.8, 11.8 4, 12 4 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2.5" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Blue Header block inside document */}
      <path d="M 13 6 L 40 6 L 40 16 L 13 16 Z" fill="url(#premium-blue)" opacity="0.8" />

      {/* Folded Corner */}
      <path d="M 40 4 L 40 16 L 54 16 Z" fill="url(#premium-gold)" />

      {/* Document Content Text Lines (Highly visible gold text bars) */}
      <line x1="18" y1="24" x2="36" y2="24" stroke="url(#premium-gold)" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="32" x2="46" y2="32" stroke="rgba(224, 183, 109, 0.6)" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="40" x2="46" y2="40" stroke="rgba(224, 183, 109, 0.6)" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="48" x2="34" y2="48" stroke="rgba(224, 183, 109, 0.6)" strokeWidth="3" strokeLinecap="round" />

      {/* Gold Seal / Badge stamp in bottom right */}
      <circle cx="44" cy="48" r="6" fill="url(#premium-gold)" style={{ filter: "drop-shadow(0 0 3px rgba(224, 183, 109, 0.8))" }} />
      <path d="M 42 52 L 40 58 L 44 56 L 48 58 L 46 52 Z" fill="url(#premium-gold)" />
    </svg>
  );
}

export function FileCheckIcon({ className, size, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size || "100%"}
      height={size || "100%"}
      className={className}
      {...props}
    >
      <path d="M 12 4 L 42 4 L 54 16 L 54 58 C 54 60.2, 52.2 62, 50 62 L 14 62 C 11.8 62, 10 60.2, 10 58 L 10 8 C 10 5.8, 11.8 4, 12 4 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2.5" />
      <path d="M 40 4 L 40 16 L 54 16 Z" fill="url(#premium-gold)" />
      
      <line x1="18" y1="24" x2="36" y2="24" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="3" strokeLinecap="round" />
      <line x1="18" y1="32" x2="46" y2="32" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="3" strokeLinecap="round" />
      
      {/* Big golden check inside the document */}
      <path d="M 20 46 L 28 54 L 44 34" fill="none" stroke="url(#premium-gold)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: "drop-shadow(0 0 4px rgba(224, 183, 109, 0.8))" }} />
    </svg>
  );
}

// 10. Trophy Icon: Glowing champion cup
export function TrophyIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Glowing Backdrop */}
      <circle cx="32" cy="24" r="16" fill="rgba(224, 183, 109, 0.1)" />

      {/* Handles */}
      <path d="M 16 18 C 10 18, 10 28, 18 30" fill="none" stroke="url(#premium-gold)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 48 18 C 54 18, 54 28, 46 30" fill="none" stroke="url(#premium-gold)" strokeWidth="3" strokeLinecap="round" />

      {/* Cup Bowl */}
      <path d="M 18 10 L 46 10 L 44 28 C 44 36, 20 36, 20 28 Z" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      <path d="M 22 12 L 42 12 L 40 26 C 40 32, 24 32, 24 26 Z" fill="url(#premium-navy)" />

      {/* Stem */}
      <path d="M 32 32 L 32 46" fill="none" stroke="url(#premium-gold)" strokeWidth="5" />

      {/* Base */}
      <path d="M 20 48 L 44 48 L 46 54 L 18 54 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" />
      
      {/* Decorative Star inside cup */}
      <polygon points="32,16 34,20 38,20 35,23 36,27 32,25 28,27 29,23 26,20 30,20" fill="url(#premium-gold)" />
    </svg>
  );
}

// 11. Landmark Icon: Classical university pillar building
export function LandmarkIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Roof Pediment (Triangle) */}
      <polygon points="32,6 60,18 4,18" fill="url(#premium-gold)" style={{ filter: "url(#premium-shadow)" }} />
      <polygon points="32,10 54,18 10,18" fill="url(#premium-navy)" />

      {/* Architrave (Beam) */}
      <rect x="8" y="18" width="48" height="4" fill="url(#premium-gold)" />

      {/* Pillars */}
      <rect x="12" y="22" width="4" height="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1" />
      <rect x="22" y="22" width="4" height="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1" />
      <rect x="38" y="22" width="4" height="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1" />
      <rect x="48" y="22" width="4" height="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1" />

      {/* Center Crest/Gate (Star emblem) */}
      <polygon points="32,30 33.5,33 36.5,33 34,35 35,38 32,36 29,38 30,35 27.5,33 30.5,33" fill="url(#premium-gold)" />

      {/* Foundation Steps */}
      <rect x="6" y="50" width="52" height="4" fill="url(#premium-gold)" />
      <rect x="2" y="54" width="60" height="4" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1" />
    </svg>
  );
}

// 12. Headphones Icon: Support consultant headset
export function HeadphonesIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Headband arch */}
      <path d="M 12 32 C 12 14, 52 14, 52 32" fill="none" stroke="url(#premium-gold)" strokeWidth="3" strokeLinecap="round" />
      <path d="M 15 28 C 15 17, 49 17, 49 28" fill="none" stroke="rgba(224, 183, 109, 0.2)" strokeWidth="1" />

      {/* Left Ear Cushion */}
      <rect x="6" y="28" width="10" height="16" rx="5" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1.5" style={{ filter: "url(#premium-shadow)" }} />
      <rect x="8" y="32" width="2" height="8" rx="1" fill="url(#premium-gold)" />

      {/* Right Ear Cushion */}
      <rect x="48" y="28" width="10" height="16" rx="5" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1.5" style={{ filter: "url(#premium-shadow)" }} />
      <rect x="54" y="32" width="2" height="8" rx="1" fill="url(#premium-gold)" />

      {/* Microphone Arm */}
      <path d="M 12 40 Q 22 52, 34 50" fill="none" stroke="url(#premium-gold)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="36" cy="50" r="3.5" fill="url(#premium-blue)" style={{ filter: "drop-shadow(0 0 2px #38bdf8)" }} />
    </svg>
  );
}

// 13. Book Open Icon: Detailed study textbook
export function BookOpenIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Outer book cover edges */}
      <path d="M 4 52 L 32 46 L 60 52 M 4 16 L 32 10 L 60 16" fill="none" stroke="url(#premium-gold)" strokeWidth="2" />
      
      {/* Left Page (White/Slate gradient) */}
      <path d="M 6 15 Q 18 10, 32 14 L 32 49 Q 18 45, 6 50 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1.5" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Right Page */}
      <path d="M 58 15 Q 46 10, 32 14 L 32 49 Q 46 45, 58 50 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="1.5" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Center Spine */}
      <line x1="32" y1="10" x2="32" y2="52" stroke="url(#premium-gold)" strokeWidth="2.5" />

      {/* Text Lines Left */}
      <line x1="12" y1="20" x2="26" y2="22" stroke="rgba(224, 183, 109, 0.5)" strokeWidth="2" />
      <line x1="12" y1="28" x2="24" y2="30" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="2" />
      <line x1="12" y1="36" x2="26" y2="38" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="2" />

      {/* Text Lines Right */}
      <line x1="38" y1="22" x2="52" y2="20" stroke="rgba(224, 183, 109, 0.5)" strokeWidth="2" />
      <line x1="40" y1="30" x2="52" y2="28" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="2" />
      <line x1="38" y1="38" x2="50" y2="36" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="2" />
    </svg>
  );
}

// 14. Ticket Icon: Boarding pass coupon
export function TicketIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <defs>
        <clipPath id="ticket-clip">
          {/* Creating notches on the ticket sides */}
          <path d="M 0 0 L 64 0 L 64 18 A 6 6 0 0 0 64 30 L 64 48 L 0 48 L 0 30 A 6 6 0 0 0 0 18 Z" />
        </clipPath>
      </defs>
      
      {/* Boarding Pass Body */}
      <g clipPath="url(#ticket-clip)">
        <rect x="0" y="4" width="64" height="42" rx="4" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
        
        {/* Top gold boarding strip */}
        <rect x="0" y="4" width="64" height="12" fill="url(#premium-gold)" />
        <text x="32" y="13" fill="#0b1224" fontSize="7" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">BOARDING PASS</text>
        
        {/* Perforation Line */}
        <line x1="46" y1="16" x2="46" y2="46" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Flight Logo (Mini Jet Silhouette) */}
        <path d="M 12 28 L 22 25 L 24 28 L 18 31 Z" fill="url(#premium-blue)" />
        
        {/* Ticket details placeholders */}
        <rect x="26" y="22" width="14" height="3" rx="1" fill="rgba(224, 183, 109, 0.3)" />
        <rect x="26" y="28" width="8" height="3" rx="1" fill="rgba(224, 183, 109, 0.3)" />

        {/* barcode representation */}
        <line x1="50" y1="22" x2="50" y2="38" stroke="url(#premium-gold)" strokeWidth="1.5" />
        <line x1="53" y1="22" x2="53" y2="38" stroke="url(#premium-gold)" strokeWidth="0.8" />
        <line x1="56" y1="22" x2="56" y2="38" stroke="url(#premium-gold)" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

// 15. Eye Icon: Foresight and Vision
export function EyeIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Eye Outline shape */}
      <path d="M 4 32 C 16 12, 48 12, 60 32 C 48 52, 16 52, 4 32 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2.5" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Iris */}
      <circle cx="32" cy="32" r="11" fill="url(#premium-blue)" stroke="rgba(224, 183, 109, 0.3)" strokeWidth="1" />
      
      {/* Pupil */}
      <circle cx="32" cy="32" r="5" fill="#ffffff" />
      
      {/* Gloss Highlight */}
      <circle cx="29" cy="29" r="2" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

// 16. Target Icon: Bullseye center & Golden Dart
export function TargetIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Outer Target Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Second Circle */}
      <circle cx="32" cy="32" r="20" fill="none" stroke="rgba(224, 183, 109, 0.35)" strokeWidth="1.5" />
      
      {/* Third Circle */}
      <circle cx="32" cy="32" r="12" fill="url(#premium-blue)" opacity="0.3" stroke="url(#premium-blue)" strokeWidth="1.5" />
      
      {/* Bullseye center (Solid Gold) */}
      <circle cx="32" cy="32" r="5" fill="url(#premium-gold)" />

      {/* Golden Dart/Arrow hitting center */}
      <path d="M 52 12 L 44 20 L 48 24 L 56 16 Z" fill="url(#premium-gold)" />
      <line x1="46" y1="18" x2="33.5" y2="30.5" stroke="url(#premium-gold)" strokeWidth="2.5" />
      <polygon points="32,32 36,29 29,36" fill="url(#premium-gold)" />
    </svg>
  );
}

// 17. Star Icon: 3D Glossy Gold Star
export function StarIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <defs>
        <radialGradient id="star-gloss" cx="35%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#e0b76d" />
          <stop offset="100%" stopColor="#9a712c" />
        </radialGradient>
      </defs>
      
      {/* Star Path */}
      <path
        d="M 32 4 L 40 20 L 58 22 L 44 34 L 48 52 L 32 43 L 16 52 L 20 34 L 6 22 L 24 20 Z"
        fill="url(#star-gloss)"
        stroke="url(#premium-gold)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 2px 5px rgba(224,183,109,0.35))" }}
      />
    </svg>
  );
}

// 18. Coins Icon: Stacked golden wealth/currency coins
export function CoinsIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Coin 1 (Back left stack) */}
      <g opacity="0.7">
        <ellipse cx="20" cy="42" rx="14" ry="6" fill="url(#premium-gold)" stroke="#b87b2c" strokeWidth="1" />
        <path d="M 6 42 L 6 48 A 14 6 0 0 0 34 48 L 34 42 Z" fill="url(#premium-gold)" stroke="#b87b2c" strokeWidth="1" />
      </g>
      
      {/* Coin 2 (Middle Left stack) */}
      <g opacity="0.85">
        <ellipse cx="20" cy="30" rx="14" ry="6" fill="url(#premium-gold)" stroke="#b87b2c" strokeWidth="1" />
        <path d="M 6 30 L 6 36 A 14 6 0 0 0 34 36 L 34 30 Z" fill="url(#premium-gold)" stroke="#b87b2c" strokeWidth="1" />
      </g>
      
      {/* Coin 3 (Main front stack) */}
      <g>
        <ellipse cx="44" cy="38" rx="15" ry="6" fill="url(#premium-gold)" stroke="#9a712c" strokeWidth="1" style={{ filter: "url(#premium-shadow)" }} />
        <path d="M 29 38 L 29 46 A 15 6 0 0 0 59 46 L 59 38 Z" fill="url(#premium-gold)" stroke="#9a712c" strokeWidth="1" />
        <ellipse cx="44" cy="46" rx="15" ry="6" fill="none" stroke="rgba(255,255,255,0.2)" />
        {/* Currency detail (Dollar symbol inside main front coin) */}
        <path d="M 44 35 C 42 35, 41 36, 41 37.5 C 41 39, 47 38.5, 47 40.5 C 47 41.5, 45 42, 44 42 C 42.5 42, 41.5 41.5, 41 41 M 44 33.5 L 44 43.5" fill="none" stroke="#9a712c" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// 19. Award Icon: Medallion ribbons seal
export function AwardIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Hanging Ribbons */}
      <path d="M 24 32 L 18 58 L 28 52 L 32 58 L 28 32" fill="url(#premium-blue)" opacity="0.8" />
      <path d="M 40 32 L 46 58 L 36 52 L 32 58 L 36 32" fill="url(#premium-blue)" />

      {/* Outer Wavy Seal */}
      <circle cx="32" cy="24" r="20" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Inner Scalloped Gold border */}
      <circle cx="32" cy="24" r="16" fill="none" stroke="url(#premium-gold)" strokeWidth="1" strokeDasharray="4 2" />

      {/* Center Circle */}
      <circle cx="32" cy="24" r="12" fill="url(#premium-gold)" />
      
      {/* Star emblem inside seal */}
      <polygon points="32,17 34,21 38,21 35,24 36,28 32,26 28,28 29,24 26,21 30,21" fill="url(#premium-navy)" />
    </svg>
  );
}

// 20. Message Square Icon: Glossy communication speech bubbles
export function MessageSquareIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Background Bubble */}
      <path d="M 38 12 L 52 12 C 57 12, 60 15, 60 19 L 60 31 C 60 35, 57 38, 52 38 L 48 38 L 44 44 L 44 38 L 38 38 C 33 38, 30 35, 30 31 L 30 19 C 30 15, 33 12, 38 12 Z" fill="url(#premium-blue)" opacity="0.6" />

      {/* Foreground Bubble */}
      <path d="M 26 20 L 12 20 C 7 20, 4 23, 4 27 L 4 39 C 4 43, 7 46, 12 46 L 16 46 L 20 52 L 20 46 L 26 46 C 31 46, 34 43, 34 39 L 34 27 C 34 23, 31 20, 26 20 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Conversation text dots inside bubble */}
      <circle cx="12" cy="33" r="2" fill="url(#premium-gold)" />
      <circle cx="19" cy="33" r="2" fill="url(#premium-gold)" />
      <circle cx="26" cy="33" r="2" fill="url(#premium-gold)" />
    </svg>
  );
}

// 21. Compass Icon: Detailed active direction finder compass
export function CompassIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Outer Dial Circle */}
      <circle cx="32" cy="32" r="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2.5" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Inner tick marks ring */}
      <circle cx="32" cy="32" r="23" fill="none" stroke="rgba(224, 183, 109, 0.2)" strokeWidth="1" strokeDasharray="2 4" />

      {/* Direction indicators */}
      <text x="32" y="16" fill="url(#premium-gold)" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">N</text>
      <text x="32" y="54" fill="url(#premium-gold)" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">S</text>
      <text x="50" y="34" fill="url(#premium-gold)" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">E</text>
      <text x="14" y="34" fill="url(#premium-gold)" fontSize="6" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">W</text>

      {/* Active Needle (Northeast direction) */}
      {/* North Pointer (Blue Gradient) */}
      <polygon points="32,32 30,30 44,18 34,28" fill="url(#premium-blue)" />
      {/* South Pointer (Gold Gradient) */}
      <polygon points="32,32 34,34 20,46 30,36" fill="url(#premium-gold)" />
      
      {/* Center Pivot Pin */}
      <circle cx="32" cy="32" r="3.5" fill="#ffffff" stroke="url(#premium-gold)" strokeWidth="1" />
    </svg>
  );
}

// 22. Price Tag Icon: Modern discount marketing label
export function PriceTagIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Diagonal Tag Body */}
      <path d="M 12 16 L 36 12 L 56 32 L 32 52 L 12 32 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2.5" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Hole representing tag string loop */}
      <circle cx="22" cy="22" r="3" fill="#0b1224" stroke="url(#premium-gold)" strokeWidth="1.5" />
      <path d="M 22 19 C 20 15, 14 14, 10 18" fill="none" stroke="url(#premium-gold)" strokeWidth="1.5" />

      {/* Star / Percent promo engraving */}
      <polygon points="38,32 40,35 44,35 41,37 42,41 38,39 34,41 35,37 32,35 36,35" fill="url(#premium-gold)" />
    </svg>
  );
}

// 23. Sparkles / Stars Icon
export function SparklesIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" fill="url(#premium-gold)" stroke="url(#premium-gold)" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5.5 5 3Z" fill="url(#premium-blue)" stroke="url(#premium-blue)" opacity="0.8" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" fill="url(#premium-blue)" stroke="url(#premium-blue)" opacity="0.8" />
    </svg>
  );
}

// 24. Checklist / CheckCircle2 Icon
export function CheckCircleIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Circle Backdrop */}
      <circle cx="32" cy="32" r="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Checkmark */}
      <path d="M 20 32 L 28 40 L 46 22" fill="none" stroke="url(#premium-gold)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 25. General Envelope/Mail Icon
export function MailIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <rect x="6" y="14" width="52" height="36" rx="6" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Flap lines */}
      <path d="M 6 16 L 32 34 L 58 16" fill="none" stroke="url(#premium-gold)" strokeWidth="2" />
      <path d="M 6 48 L 24 32" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="1.5" />
      <path d="M 58 48 L 40 32" stroke="rgba(224, 183, 109, 0.4)" strokeWidth="1.5" />
    </svg>
  );
}

// 26. Phone Call Icon
export function PhoneIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Phone Receiver shape tilted */}
      <path d="M 12 10 C 16 6, 22 10, 24 14 L 28 22 C 29 25, 26 27, 24 28 C 26 32, 32 38, 36 40 C 37 38, 39 35, 42 36 L 50 40 C 54 42, 58 48, 54 52 C 48 58, 34 58, 20 44 C 6 30, 6 16, 12 10 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Audio waves emitting */}
      <path d="M 44 14 A 16 16 0 0 1 50 26" fill="none" stroke="url(#premium-gold)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 48 8 A 24 24 0 0 1 58 26" fill="none" stroke="url(#premium-blue)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

// 27. Map Pin Location Icon
export function MapPinIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {/* Pin Drop Shadow */}
      <ellipse cx="32" cy="56" rx="10" ry="3" fill="rgba(0,0,0,0.2)" />

      {/* Pin Body (Teardrop shape) */}
      <path d="M 32 4 C 18 4, 12 16, 12 28 C 12 44, 32 58, 32 58 C 32 58, 52 44, 52 28 C 52 16, 46 4, 32 4 Z" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Center hole detailing (Globe-like inner circle or simple white circular window) */}
      <circle cx="32" cy="24" r="8" fill="url(#premium-gold)" />
      <circle cx="32" cy="24" r="4" fill="#0b1224" />
    </svg>
  );
}

// 28. Paper Airplane Send Icon
export function SendIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <polygon points="60,4 4,30 24,38 48,16 28,42 36,60" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      <polygon points="60,4 28,42 24,38 48,16" fill="url(#premium-gold)" />
    </svg>
  );
}

// 29. Clock / Time Icon
export function ClockIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      {...props}
    >
      <circle cx="32" cy="32" r="28" fill="url(#premium-navy)" stroke="url(#premium-gold)" strokeWidth="2" style={{ filter: "url(#premium-shadow)" }} />
      
      {/* Hour/Minute hands */}
      <path d="M 32 14 L 32 32 L 46 32" fill="none" stroke="url(#premium-gold)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Center cap */}
      <circle cx="32" cy="32" r="2" fill="#ffffff" />
    </svg>
  );
}

// 30. Menu Bar Icon (Structural control)
export function MenuIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <line x1="4" x2="20" y1="12" y2="12" stroke="url(#premium-gold)" strokeWidth="2.5" />
      <line x1="4" x2="20" y1="6" y2="6" stroke="url(#premium-gold)" strokeWidth="2.5" />
      <line x1="4" x2="20" y1="18" y2="18" stroke="url(#premium-gold)" strokeWidth="2.5" />
    </svg>
  );
}

// 31. Close X Icon (Structural control)
export function CloseIcon({ className, size = 24, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 6 6 18" stroke="url(#premium-gold)" strokeWidth="2.5" />
      <path d="m6 6 12 12" stroke="url(#premium-gold)" strokeWidth="2.5" />
    </svg>
  );
}
