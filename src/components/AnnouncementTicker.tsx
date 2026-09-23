import { Plane } from "lucide-react";

export function AnnouncementTicker() {
  const handleNavigate = () => {
    const el = document.getElementById("free-assessment") || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const nameInput = document.getElementById("name");
        if (nameInput) nameInput.focus();
      }, 450);
    }
  };

  return (
    <div
      onClick={handleNavigate}
      className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:brightness-105 text-[#0b1224] py-2 sm:py-2.5 overflow-hidden cursor-pointer select-none border-y border-amber-600/40 shadow-[0_4px_16px_rgba(184,123,44,0.18)] transition-all relative z-20 group"
      title="Click to Enroll for 2025 - 2026 Intake"
    >
      <div className="animate-headline-marquee flex items-center whitespace-nowrap text-[11px] sm:text-[13px] font-black uppercase tracking-[0.15em]">
        {[1, 2, 3, 4].map((setIndex) => (
          <div key={setIndex} className="flex items-center shrink-0">
            <span className="text-[#0b1224] font-black tracking-wider drop-shadow-sm">
              2025 - 2026 INTAKE
            </span>
            <Plane className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0b1224] -rotate-45 mx-3 sm:mx-5 shrink-0 fill-[#0b1224]" />
            <span className="bg-[#0b1224] text-amber-300 px-3 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black tracking-widest shadow-sm group-hover:scale-105 transition-transform inline-flex items-center gap-1">
              ENROLL NOW
            </span>
            <Plane className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0b1224] -rotate-45 mx-3 sm:mx-5 shrink-0 fill-[#0b1224]" />
            <span className="text-[#0b1224] font-black tracking-wider">
              98% VISA SUCCESS RATE · USA · UK · CANADA · GERMANY · AUSTRALIA
            </span>
            <Plane className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0b1224] -rotate-45 mx-3 sm:mx-5 shrink-0 fill-[#0b1224]" />
            <span className="text-[#0b1224] font-black tracking-wider">
              FREE PROFILE ASSESSMENT &amp; SCHOLARSHIP GUIDANCE
            </span>
            <Plane className="inline-block h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0b1224] -rotate-45 mx-3 sm:mx-5 shrink-0 fill-[#0b1224]" />
          </div>
        ))}
      </div>
    </div>
  );
}
