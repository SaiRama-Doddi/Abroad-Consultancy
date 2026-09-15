import { useState, useEffect } from "react";

export function Preloader() {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after logo animation completes (~2s)
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("preloaderDone"));
      }
    }, 2000);

    // Completely unmount after transition completes (~2.7s)
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      id="site-preloader"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060b13] transition-opacity duration-700 select-none ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Flight Orbit Keyframes & Shimmer Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes preloader-pulse-glow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(224, 183, 109, 0.2), 0 0 50px rgba(224, 183, 109, 0.1);
          }
          50% {
            box-shadow: 0 0 45px rgba(224, 183, 109, 0.4), 0 0 80px rgba(224, 183, 109, 0.2);
          }
        }
      `,
        }}
      />

      {/* Decorative Night Sky Background Stars & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#060b13] to-black opacity-85" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient Golden Radial Glow */}
      <div className="absolute w-[450px] h-[450px] bg-[var(--gold)]/10 rounded-full blur-[110px] pointer-events-none animate-pulse" />

      {/* =========================================================================
          CENTER CONTENT: McCoy Global Logo & Title with Circular Flight Orbit
          ========================================================================= */}
      <div className="relative z-10 flex flex-col items-center select-none text-center px-4">
        {/* Spinning Gold Dashed Orbit Rings */}
        <div className="absolute -inset-10 rounded-full border border-dashed border-[var(--gold)]/20 animate-[spin_50s_linear_infinite] pointer-events-none" />
        <div className="absolute -inset-20 rounded-full border border-slate-800/50 animate-[spin_80s_linear_infinite] pointer-events-none" />

        {/* Circular Flight Orbit (Golden Passenger Jet Gliding around Logo) */}
        <div className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] animate-[spin_4s_linear_infinite] flex items-center justify-center z-20 pointer-events-none">
          <div className="absolute top-0 flex flex-col items-center">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="2"
              className="h-8 w-8 text-[var(--gold)] drop-shadow-[0_0_12px_rgba(224,183,109,0.9)]"
              style={{ transform: "rotate(90deg)" }}
            >
              {/* Passenger Jet Silhouette */}
              <path
                fill="var(--gold)"
                d="M32 4 L35 18 L58 36 L58 41 L35 33 L35 52 L44 57 L44 60 L32 57 L20 60 L20 57 L29 52 L29 33 L6 41 L6 36 L29 18 Z"
              />
            </svg>
            {/* Glowing Jet Stream Trail */}
            <div
              className="w-[2px] h-14 bg-gradient-to-t from-transparent via-[var(--gold)] to-[var(--gold)] mt-0.5 opacity-90 shadow-[0_0_8px_var(--gold)]"
              style={{ transform: "translateY(-4px)" }}
            />
          </div>
        </div>

        {/* Circular / Rounded Logo Card */}
        <div
          className="relative z-10 flex h-28 w-44 sm:h-32 sm:w-48 items-center justify-center rounded-2xl bg-white p-4 border-2 border-[var(--gold)]/40 transition-transform duration-700 backdrop-blur-xl shadow-[0_15px_50px_rgba(224,183,109,0.25)]"
          style={{ animation: "preloader-pulse-glow 2.5s ease-in-out infinite" }}
        >
          <img
            src="/logo.png"
            alt="McCoy Global Logo"
            className="h-full w-full object-contain"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Brand Title */}
        <h1 className="mt-8 font-display text-2xl sm:text-3xl tracking-[0.2em] font-extrabold uppercase text-white animate-pulse">
          McCoy Global
        </h1>
        <span className="text-xs sm:text-sm tracking-[0.45em] uppercase text-[var(--gold)] font-bold mt-2">
          Consultancy
        </span>
      </div>
    </div>
  );
}
