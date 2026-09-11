import { useState, useEffect, useRef } from "react";
import { Calendar, Globe, FileText, Shield, Handshake } from "lucide-react";

function renderLetterByLetter(
  text: string,
  baseDelay: number,
  charStagger: number,
  animateClass: string,
  active: boolean,
  startIndex: number = 0,
  extraCharClass: string = ""
) {
  let charIndex = startIndex;
  return text.split(" ").map((word, wi) => {
    const wordChars = word.split("");
    return (
      <span key={wi} className="mr-[0.24em] inline-block whitespace-nowrap">
        {wordChars.map((ch, ci) => {
          const delay = baseDelay + charIndex * charStagger;
          charIndex++;
          return (
            <span
              key={ci}
              className={`${active ? animateClass : "opacity-0"} ${extraCharClass} inline-block`}
              style={{ animationDelay: `${delay}s` }}
            >
              {ch}
            </span>
          );
        })}
      </span>
    );
  });
}

const HIGHLIGHT_CARDS = [
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Access premier universities, top study destinations, and high-demand global career pathways worldwide.",
    color: {
      bg: "bg-gradient-to-br from-cyan-500/25 via-blue-500/20 to-sky-600/30",
      border: "border-cyan-400/40",
      text: "text-cyan-300",
      shadow: "shadow-[0_0_20px_rgba(6,182,212,0.35)]",
      hoverBg: "group-hover:bg-cyan-500/30",
      hoverBorder: "group-hover:border-cyan-300/70"
    }
  },
  {
    icon: FileText,
    title: "Expert Guidance",
    description: "Personalized end-to-end counseling covering university shortlisting, documentation, and visa approvals.",
    color: {
      bg: "bg-gradient-to-br from-amber-500/25 via-yellow-500/20 to-orange-600/30",
      border: "border-amber-400/40",
      text: "text-amber-300",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.35)]",
      hoverBg: "group-hover:bg-amber-500/30",
      hoverBorder: "group-hover:border-amber-300/70"
    }
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Transparent and ethical advisory with accredited institutional partnerships you can always depend on.",
    color: {
      bg: "bg-gradient-to-br from-emerald-500/25 via-teal-500/20 to-green-600/30",
      border: "border-emerald-400/40",
      text: "text-emerald-300",
      shadow: "shadow-[0_0_20px_rgba(16,185,129,0.35)]",
      hoverBg: "group-hover:bg-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-300/70"
    }
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description: "Comprehensive assistance from profile assessment to pre-departure, accommodation, and airport reception.",
    color: {
      bg: "bg-gradient-to-br from-purple-500/25 via-fuchsia-500/20 to-indigo-600/30",
      border: "border-purple-400/40",
      text: "text-purple-300",
      shadow: "shadow-[0_0_20px_rgba(168,85,247,0.35)]",
      hoverBg: "group-hover:bg-purple-500/30",
      hoverBorder: "group-hover:border-purple-300/70"
    }
  }
];

function HighlightCardItem({
  card,
  idx,
  parentReady = false,
}: {
  card: (typeof HIGHLIGHT_CARDS)[0];
  idx: number;
  parentReady?: boolean;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.innerWidth < 640) {
      setIsVisible(true);
      return;
    }

    // Dynamically transitions both when scrolling down and when scrolling up
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.06,
        rootMargin: "25px 0px -25px 0px",
      }
    );

    observer.observe(el);

    // Initial check on mount so cards are visible immediately if in viewport
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    return () => observer.disconnect();
  }, [parentReady]);

  const Icon = card.icon;

  // Alternating transition: Even cards slide Left to Right, Odd cards drop Top to Bottom
  const isLeftToRight = idx % 2 === 0;

  const transitionClasses = isVisible
    ? "translate-x-0 translate-y-0 opacity-100 scale-100"
    : isLeftToRight
    ? "-translate-x-7 sm:-translate-x-12 translate-y-0 opacity-0 scale-[0.97]"
    : "translate-x-0 -translate-y-6 sm:-translate-y-9 opacity-0 scale-[0.97]";

  return (
    <div
      ref={cardRef}
      className={`group flex flex-col justify-between h-full rounded-xl border border-white/10 bg-white/[0.035] p-3.5 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-[420ms] ease-out hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-1 active:scale-[0.98] will-change-transform will-change-[opacity] ${transitionClasses}`}
      style={{
        transitionDelay: `${idx * 65}ms`,
      }}
    >
      <div>
        {/* Consistent Height Header: Responsive Icons and Titles */}
        <div className="flex items-center gap-3 sm:gap-3.5 min-h-[44px] sm:min-h-[48px]">
          <div
            className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl ${card.color.bg} ${card.color.text} border ${card.color.border} transition-all duration-500 group-hover:rotate-6 ${card.color.hoverBg} ${card.color.hoverBorder} group-hover:scale-110 ${card.color.shadow}`}
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <h3 className="font-sans text-xs sm:text-[0.88rem] font-bold tracking-wider text-white uppercase leading-snug">
            {card.title}
          </h3>
        </div>

        {/* Responsive Description Text */}
        <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-[0.84rem] leading-relaxed text-white/80 group-hover:text-white transition-colors text-left sm:text-justify">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetPauseTimeout = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  const scrollToHighlightCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.querySelectorAll('.hero-highlight-card');
      const targetCard = cards[index] as HTMLElement;
      if (targetCard) {
        const targetLeft = targetCard.offsetLeft - container.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;
        container.scrollTo({
          left: Math.max(0, targetLeft),
          behavior: 'smooth'
        });
      }
    }
  };

  const handleHighlightScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.querySelectorAll('.hero-highlight-card');
      if (cards.length === 0) return;
      
      const containerCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((cardEl, idx) => {
        const el = cardEl as HTMLElement;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const dist = Math.abs(containerCenter - cardCenter);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = idx;
        }
      });

      setActiveCardIndex(closestIdx);
    }
  };

  // Auto-scroll loop for mobile highlight cards
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth < 640 && !isPaused && scrollRef.current) {
        const container = scrollRef.current;
        const rect = container.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const nextIndex = (activeCardIndex + 1) % HIGHLIGHT_CARDS.length;
        scrollToHighlightCard(nextIndex);
      }
    }, 3800);

    return () => {
      clearInterval(interval);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [activeCardIndex, isPaused]);

  useEffect(() => {
    const handlePreloaderDone = () => {
      setAnimationStarted(true);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("preloaderDone", handlePreloaderDone);
    }

    // Snappy fallback so mobile heading starts promptly with fast preloader (0.95s)
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 950);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("preloaderDone", handlePreloaderDone);
      }
      clearTimeout(timer);
    };
  }, []);

  const handleConsultationClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
    <section
      id="home"
      className="relative flex min-h-[72vh] lg:min-h-[68vh] items-center overflow-hidden pt-24 sm:pt-28 lg:pt-24 pb-4 sm:pb-6 bg-[#060a15]"
    >
      {/* Background Video with high clarity & vibrancy */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 animate-slow-pan"
        style={{
          opacity: 0.85,
          maxHeight: "640px"
        }}
        src="/hero-cheerful-graduates-toss.mp4"
        poster="/hero-graduation.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlaying={() => setVideoPlaying(true)}
      />

      {/* Smooth bottom fade into the page body */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to top, #060a15 20%, rgba(6, 10, 21, 0.6) 65%, transparent 100%)"
        }}
      />

      {/* Focused text legibility gradient on the left side only - leaves video crystal clear on center & right */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(6, 10, 21, 0.95) 0%, rgba(6, 10, 21, 0.82) 32%, rgba(6, 10, 21, 0.35) 55%, transparent 75%)"
        }}
      />


      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:max-w-3xl">
          {/* Top small header with flight path animation */}
          <div className="flex items-center gap-4 animate-slide-right">
            <span
              className="text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.22em] sm:tracking-[0.35em] md:tracking-[0.45em] text-[var(--gold)] whitespace-nowrap"
              style={{ textShadow: "0 1px 4px rgba(6, 10, 21, 0.9), 0 2px 10px rgba(6, 10, 21, 0.8)" }}
            >
              Study &nbsp;&middot;&nbsp; Work &nbsp;&middot;&nbsp; Migrate
            </span>
            <div className="relative w-36 h-8 overflow-visible hidden sm:block">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 120 30" fill="none">
                <path
                  id="flight-path"
                  d="M10,24 C40,4 80,8 110,12"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
                <path
                  d="M-5,-3 L5,0 L-5,3 L-2,0 Z"
                  fill="var(--gold)"
                  className="animate-plane-fly"
                  style={{ animationDelay: "0.2s" }}
                />
              </svg>
            </div>
          </div>

          {/* Main Title heading (Each letter of McCoy Global falls down, Consultancy with decreased shade) */}
          <h1 className="mt-4 font-serif text-[2.35rem] xs:text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem] leading-[1.08] tracking-tight">
            <span
              className="block font-semibold text-white whitespace-nowrap"
              style={{ textShadow: "0 2px 14px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" }}
            >
              {renderLetterByLetter("McCoy Global", 0.04, 0.08, "animate-letter-drop", animationStarted, 0)}
            </span>
            <span 
              className="relative inline-block mt-1 sm:mt-2 font-normal italic animate-gold-glow select-none"
              style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.35)" }}
            >
              {renderLetterByLetter(
                "Consultancy",
                0.95,
                0.05,
                "animate-letter-drop-gold",
                animationStarted,
                11,
                "text-gold-metallic"
              )}
              {/* Luxury Accent Sparkles */}
              <span className="absolute -top-1 -right-4 sm:-right-6 pointer-events-none" aria-hidden="true">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200 animate-sparkle-1 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.95)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </span>
              <span className="absolute -top-2 left-2 sm:left-3 pointer-events-none" aria-hidden="true">
                <svg
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-100 animate-sparkle-2 filter drop-shadow-[0_0_6px_rgba(254,240,138,0.9)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
                </svg>
              </span>
            </span>
          </h1>


          {/* Subtitle description */}
          <p
            className={`mt-4 max-w-xl text-base leading-relaxed text-white sm:text-lg transition-all duration-700 ${
              animationStarted ? "animate-fade-rise opacity-100" : "opacity-0"
            }`}
            style={{
              animationDelay: "1.55s",
              textShadow: "0 2px 10px rgba(6, 10, 21, 0.95), 0 1px 3px rgba(6, 10, 21, 0.9)"
            }}
          >
            Your journey beyond borders, guided end to end – from choosing the
            right country to boarding the flight with confidence.
          </p>

          {/* CTA Action Button */}
          <div
            className={`mt-5 flex flex-col sm:flex-row flex-wrap gap-4 transition-all duration-700 ${
              animationStarted ? "animate-fade-rise opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "1.75s" }}
          >
            <a
              href="#contact"
              onClick={handleConsultationClick}
              className="flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(166,106,33,0.45)] w-full sm:w-auto cursor-pointer"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Calendar className="h-4 w-4" />
              Free Consultation
            </a>
          </div>
        </div>

        {/* Bottom Highlights - Responsive Horizontal Carousel on Mobile / 4-Col Grid on Desktop */}
        <div className="mt-6 sm:mt-8 w-full rounded-2xl border border-white/10 bg-[#060a15]/80 p-3 sm:p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
          
          {/* Edge fade gradients for mobile horizontal overflow hint */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-[#060a15] to-transparent z-20 sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-[#060a15] to-transparent z-20 sm:hidden" />

          {/* Cards Track */}
          <div
            ref={scrollRef}
            onScroll={handleHighlightScroll}
            onTouchStart={resetPauseTimeout}
            onMouseEnter={resetPauseTimeout}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 items-stretch overflow-x-auto sm:overflow-x-visible pb-1 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0 snap-x snap-mandatory sm:snap-none scroll-smooth scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {HIGHLIGHT_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="hero-highlight-card shrink-0 w-[84vw] xs:w-[290px] sm:w-auto sm:shrink snap-center sm:snap-align-none flex flex-col"
              >
                <HighlightCardItem
                  card={card}
                  idx={idx}
                  parentReady={animationStarted}
                />
              </div>
            ))}
          </div>

          {/* Mobile Pagination Indicator Dots */}
          <div className="flex sm:hidden justify-center items-center gap-1.5 mt-3">
            {HIGHLIGHT_CARDS.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  resetPauseTimeout();
                  scrollToHighlightCard(dotIdx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === activeCardIndex 
                    ? 'w-6 bg-[var(--gold)] shadow-[0_0_8px_rgba(224,183,109,0.5)]' 
                    : 'w-1.5 bg-white/20'
                }`}
                aria-label={`Go to highlight card ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
