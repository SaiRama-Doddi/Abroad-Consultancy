import { useEffect, useState } from "react";

export function BackgroundFlight() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[5] select-none">
      {/* CSS Keyframes for Background 3D Corner-to-Corner Flight */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bg-corner-to-corner {
          0% {
            left: -180px;
            top: 95%;
            transform: scale(0.35) rotate(-38deg) rotateX(15deg);
            opacity: 0;
          }
          8% {
            opacity: 0.22;
          }
          50% {
            transform: scale(1.15) rotate(-35deg) rotateX(15deg);
            opacity: 0.38; /* Faint overlay presence to preserve readability */
          }
          92% {
            opacity: 0.22;
          }
          100% {
            left: 108vw;
            top: -12%;
            transform: scale(0.4) rotate(-32deg) rotateX(15deg);
            opacity: 0;
          }
        }
        .animate-bg-flight {
          animation: bg-corner-to-corner 16s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        }
      `}} />

      {/* Golden Commercial Passenger Jet Silhouette */}
      <div className="absolute animate-bg-flight" style={{ left: "-180px", top: "95%" }}>
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          stroke="var(--gold)" 
          strokeWidth="1.5"
          className="h-20 w-20 text-[var(--gold)]/40 drop-shadow-[0_20px_40px_rgba(224,183,109,0.35)]"
        >
          {/* Detailed Commercial Passenger Jet */}
          <path 
            fill="var(--gold)" 
            fillOpacity="0.25"
            d="M32 4 L35 18 L58 36 L58 41 L35 33 L35 52 L44 57 L44 60 L32 57 L20 60 L20 57 L29 52 L29 33 L6 41 L6 36 L29 18 Z" 
          />
        </svg>
        {/* Soft gold jet stream tail trail line */}
        <div 
          className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[var(--gold)]/30 opacity-70 origin-top" 
          style={{ transform: "rotate(180deg) translateY(-2px)" }}
        />
      </div>
    </div>
  );
}
