import { useState, useEffect, useRef } from "react";
import { Eye, X, Sparkles, MessageCircle, ChevronLeft, ChevronRight, Globe, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface BudgetFlyer {
  id: string;
  country: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  title: string;
  subtitle: string;
  src: string;
  alt: string;
  borderClass: string;
  hoverBorderClass: string;
  overlayBg: string;
  buttonClass: string;
  highlights: string[];
}

const FLYERS: BudgetFlyer[] = [
  {
    id: "cyprus",
    country: "Cyprus (Europe)",
    badge: "EU / Schengen Pathway",
    badgeBg: "bg-blue-50/90 border-blue-200/80 text-blue-800",
    badgeText: "text-blue-700",
    title: "Study in Cyprus (Europe)",
    subtitle: "Affordable EU education with high visa success rate",
    src: "/study-in-cyprus.webp",
    alt: "Study in Cyprus Admission Flyer",
    borderClass: "border-slate-200/90 hover:border-blue-500",
    hoverBorderClass: "group-hover:border-blue-500",
    overlayBg: "bg-blue-950/35",
    buttonClass: "text-blue-950",
    highlights: ["European Standards", "Budget-Friendly Tuition", "Fast Visa Processing"],
  },
  {
    id: "mauritius",
    country: "Mauritius",
    badge: "Top Island Destination",
    badgeBg: "bg-emerald-50/90 border-emerald-200/80 text-emerald-800",
    badgeText: "text-emerald-700",
    title: "Study in Mauritius",
    subtitle: "Globally recognized degrees & low living expenses",
    src: "/study-in-mauritius.webp",
    alt: "Study in Mauritius Admission Flyer",
    borderClass: "border-slate-200/90 hover:border-emerald-500",
    hoverBorderClass: "group-hover:border-emerald-500",
    overlayBg: "bg-emerald-950/35",
    buttonClass: "text-emerald-950",
    highlights: ["No IELTS Mandatory", "Part-Time Work Rights", "Dual Degree Programs"],
  },
];

export function BudgetFriendlySection() {
  const [activeFlyer, setActiveFlyer] = useState<{ src: string; title: string } | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const handleScrollUpdate = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.clientWidth * 0.8;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex >= 0 && newIndex < FLYERS.length && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = container.children;
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const scrollLeft = card.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: "smooth",
        });
        setCurrentIndex(index);
      }
    }
  };

  return (
    <section id="budget-friendly" className="bg-white text-slate-800 pt-8 pb-14 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--gold)]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal direction="up" delay={50}>
          <div className="text-center flex flex-col items-center mb-6 sm:mb-8">
            {/* Subtle Pill Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 px-3 py-1 text-[0.72rem] sm:text-[0.76rem] font-bold uppercase tracking-[0.2em] text-amber-700 mb-2.5">
              <Globe className="h-3 w-3 text-amber-600 animate-pulse" />
              <span>Affordable Global Opportunities</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Budget Friendly <span className="text-[var(--gold)]">Countries</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-[0.95rem] leading-relaxed text-slate-500 text-center sm:whitespace-nowrap">
              Click on any flyer below to expand and view the full admission guide, courses, and fee structure.
            </p>
          </div>
        </ScrollReveal>

        {/* Scrollable Container on Mobile, 2-Column Grid on Tablet/Desktop */}
        <ScrollReveal direction="up" delay={120}>
          <div className="relative max-w-4xl mx-auto">
            {/* Mobile Navigation Arrows (Visible only on small screens) */}
            <div className="flex sm:hidden items-center justify-between mb-3 px-1">
              <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                <span>👈 Swipe cards to explore 👉</span>
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
                  disabled={currentIndex === 0}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-all ${
                    currentIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:border-[var(--gold)] text-slate-700 active:scale-95 cursor-pointer"
                  }`}
                  aria-label="Previous flyer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToIndex(Math.min(FLYERS.length - 1, currentIndex + 1))}
                  disabled={currentIndex === FLYERS.length - 1}
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xs transition-all ${
                    currentIndex === FLYERS.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:border-[var(--gold)] text-slate-700 active:scale-95 cursor-pointer"
                  }`}
                  aria-label="Next flyer"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Cards List: Horizontal Scroll on Mobile, Side-by-Side on Desktop */}
            <div
              ref={scrollContainerRef}
              onScroll={handleScrollUpdate}
              className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible pb-4 pt-1 px-4 sm:px-0 -mx-4 sm:mx-0 snap-x snap-mandatory sm:snap-none scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {FLYERS.map((flyer, idx) => (
                <div
                  key={flyer.id}
                  onClick={() =>
                    setActiveFlyer({
                      src: flyer.src,
                      title: flyer.title,
                    })
                  }
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 ${flyer.borderClass} bg-white p-1.5 sm:p-2.5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col items-center shrink-0 w-[82vw] max-w-[340px] sm:w-auto sm:max-w-none sm:shrink snap-center sm:snap-align-none`}
                >
                  {/* Top Badge Overlay */}
                  <div className="w-full flex items-center justify-between px-2 pt-1.5 pb-2">
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold ${flyer.badgeBg}`}>
                      <CheckCircle2 className="h-3 w-3 shrink-0" />
                      {flyer.badge}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {flyer.country}
                    </span>
                  </div>

                  {/* Flyer Poster Container */}
                  <div className="relative w-full overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={flyer.src}
                      alt={flyer.alt}
                      width={400}
                      height={560}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Hover & Tap Overlay */}
                    <div className={`absolute inset-0 ${flyer.overlayBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <span className={`flex items-center gap-1.5 rounded-lg bg-white/95 px-3.5 py-2 text-xs font-extrabold uppercase tracking-wider ${flyer.buttonClass} shadow-md transform transition-transform duration-300 group-hover:scale-105`}>
                        <Eye className="h-3.5 w-3.5" />
                        Click to View Full Flyer
                      </span>
                    </div>
                  </div>

                  {/* Highlights Footer */}
                  <div className="w-full mt-2.5 px-1 pb-1">
                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                      {flyer.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-block rounded-md bg-slate-100/90 text-slate-600 text-[10px] sm:text-[11px] font-semibold px-2 py-0.5"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel Indicator Dots */}
            <div className="flex sm:hidden items-center justify-center gap-2 mt-2">
              {FLYERS.map((flyer, idx) => (
                <button
                  key={flyer.id}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? "w-7 bg-[var(--gold)]" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to ${flyer.country} slide`}
                />
              ))}
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
