import { useState, useEffect } from "react";
import { Eye, X, Sparkles, MessageCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function BudgetFriendlySection() {
  const [activeFlyer, setActiveFlyer] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveFlyer(null);
      }
    };
    if (activeFlyer) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeFlyer]);

  return (
    <section id="budget-friendly" className="bg-white text-slate-800 pt-8 pb-14 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--gold)]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center flex flex-col items-center mb-6 sm:mb-8">
            <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Budget Friendly <span className="text-[var(--gold)]">Countries</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-[0.95rem] leading-relaxed text-slate-500 text-center sm:whitespace-nowrap">
              Click on any flyer below to expand and view the full admission guide, courses, and fee structure.
            </p>
          </div>
        </ScrollReveal>

        {/* Both Cards in ONE Row */}
        <ScrollReveal direction="up" delay={120}>
          <div className="grid grid-cols-2 gap-3.5 sm:gap-6 max-w-4xl mx-auto">
            {/* Card 1: Cyprus */}
            <div
              onClick={() =>
                setActiveFlyer({
                  src: "/study-in-cyprus.webp",
                  title: "Study in Cyprus (Europe)"
                })
              }
              className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border-2 border-slate-200/90 bg-white p-1 sm:p-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl flex flex-col items-center"
            >
              <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src="/study-in-cyprus.webp"
                  alt="Study in Cyprus"
                  width={400}
                  height={560}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-blue-950/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-blue-950 shadow-md">
                    <Eye className="h-3.5 w-3.5 text-blue-600" />
                    Click to View
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Mauritius */}
            <div
              onClick={() =>
                setActiveFlyer({
                  src: "/study-in-mauritius.webp",
                  title: "Study in Mauritius"
                })
              }
              className="group relative cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl border-2 border-slate-200/90 bg-white p-1 sm:p-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl flex flex-col items-center"
            >
              <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src="/study-in-mauritius.webp"
                  alt="Study in Mauritius"
                  width={400}
                  height={560}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-emerald-950/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="flex items-center gap-1.5 rounded-lg bg-white/95 px-3 py-1.5 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-emerald-950 shadow-md">
                    <Eye className="h-3.5 w-3.5 text-emerald-600" />
                    Click to View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal for Full Poster View */}
      {activeFlyer && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-fade-in"
          onClick={() => setActiveFlyer(null)}
        >
          <div
            className="relative max-w-xl max-h-[92vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="w-full flex items-center justify-between text-white pb-2.5 px-1">
              <span className="text-xs sm:text-sm font-bold tracking-wide flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                {activeFlyer.title}
              </span>
              <button
                type="button"
                onClick={() => setActiveFlyer(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Poster Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-white/20 shadow-2xl max-h-[80vh] overflow-y-auto w-full flex justify-center">
              <img
                src={activeFlyer.src}
                alt={activeFlyer.title}
                className="w-auto h-auto max-h-[78vh] object-contain"
              />
            </div>

            {/* Modal Footer Quick Actions */}
            <div className="mt-3 flex items-center justify-center">
              <a
                href="https://wa.me/919849920961"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-sm transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Chat on WhatsApp (9849920961)
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
