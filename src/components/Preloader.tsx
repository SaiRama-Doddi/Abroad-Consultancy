import { useState, useEffect } from "react";
import { Plane } from "lucide-react";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after the flight takeoff completes (2.3s)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2300);

    // Completely unmount after transition completes (3s)
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060b13] transition-opacity duration-700 select-none ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* CSS Keyframes for Preloader Flight Takeoff Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes takeoff-flight-preload {
          0% {
            offset-distance: 0%;
            opacity: 0;
            transform: scale(0.6);
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
            transform: scale(1.15);
          }
          100% {
            offset-distance: 100%;
            opacity: 0;
            transform: scale(1.3);
          }
        }
        .animate-takeoff {
          animation: takeoff-flight-preload 2.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          offset-path: path('M -100 800 Q 720 380 1640 -50');
          offset-rotate: auto;
        }
        
        /* Sparkle trail particles */
        @keyframes particle-fade {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
        }
        .trail-particle {
          animation: particle-fade 1.5s ease-out forwards;
        }
      `}} />

      {/* Decorative Night Sky Background Stars */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#060b13] to-black opacity-80" />
      
      {/* Background Grid Lines for Technical Depth */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Subtle Golden Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[var(--gold)]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* =========================================================================
          CENTER CONTENT: McCoy Global Logo & Title with Circular Flight Orbit
          ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center select-none text-center">
        {/* Spinning Gold Dashed Orbit Rings */}
        <div className="absolute -inset-10 rounded-full border border-dashed border-[var(--gold)]/15 animate-[spin_60s_linear_infinite] pointer-events-none" />
        <div className="absolute -inset-20 rounded-full border border-slate-800/40 animate-[spin_90s_linear_infinite] pointer-events-none" />

        {/* Circular Flight Orbit (Clockwise Gliding Golden Jet) */}
        <div className="absolute w-[280px] h-[280px] animate-[spin_4.5s_linear_infinite] flex items-center justify-center z-20 pointer-events-none">
          <div className="absolute top-0 flex flex-col items-center">
            <svg 
              viewBox="0 0 64 64" 
              fill="none" 
              stroke="var(--gold)" 
              strokeWidth="2"
              className="h-8 w-8 text-[var(--gold)] drop-shadow-[0_0_10px_rgba(224,183,109,0.9)]"
              style={{ transform: "rotate(90deg)" }}
            >
              {/* Detailed Passenger Jet Silhouette */}
              <path 
                fill="var(--gold)" 
                d="M32 4 L35 18 L58 36 L58 41 L35 33 L35 52 L44 57 L44 60 L32 57 L20 60 L20 57 L29 52 L29 33 L6 41 L6 36 L29 18 Z" 
              />
            </svg>
            {/* Glowing Jet Stream Trail trailing along the orbit */}
            <div 
              className="w-[1.5px] h-12 bg-gradient-to-t from-transparent to-[var(--gold)] mt-0.5 opacity-80" 
              style={{ transform: "translateY(-4px)" }}
            />
          </div>
        </div>

        {/* Circular Logo Card */}
        <div className="relative z-10 flex h-28 w-44 items-center justify-center rounded-2xl bg-white p-4 shadow-[0_15px_50px_rgba(224,183,109,0.22)] border-2 border-[var(--gold)]/30 transition-transform duration-700 animate-[pulse_2s_infinite]">
          <img src="/logo.png" alt="mcCoy Global Logo" className="h-full w-full object-contain" />
        </div>

        {/* Slogan Title */}
        <h1 className="mt-8 font-display text-2xl tracking-[0.2em] font-extrabold uppercase text-white animate-[pulse_2.5s_infinite]">
          mcCoy Global
        </h1>
        <span className="text-[0.72rem] tracking-[0.42em] uppercase text-[var(--gold)] font-bold mt-2.5">
          Consultancy
        </span>
      </div>

    </div>
  );
}
