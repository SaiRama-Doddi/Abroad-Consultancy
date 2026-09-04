import React, { useState, useEffect, useRef } from "react";
import { 
  GraduationCap, 
  Plane, 
  Globe, 
  CheckCircle2, 
  Briefcase, 
  Ticket, 
  Landmark,
  ChevronRight,
  ChevronLeft,
  Sparkles
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const visaServices = [
  {
    title: "Student Visa",
    icon: GraduationCap,
    image: "/service-student.jpg",
    description: "Unlock global educational opportunities. We guide you from choosing the right university to submission and approval. Access quality education with high visa success rates.",
    features: [
      "End-to-end admission counseling",
      "IELTS / Duolingo / English prep support",
      "SOP writing & documentation guidance",
      "Mock visa interview sessions"
    ]
  },
  {
    title: "Tourism & Visitor Visa",
    icon: Plane,
    image: "/service-tourist.jpg",
    description: "Travel the world with zero stress. Whether it is visiting family, exploring destinations, or business meetings, we manage your visa formalities quickly and transparently.",
    features: [
      "Fast-track visa processing options",
      "Detailed document checking",
      "Flight and itinerary guidance",
      "Travel insurance assistance"
    ]
  },
  {
    title: "Opportunity Card Germany",
    countryCode: "de",
    icon: Briefcase,
    image: "/service-germany.jpg",
    description: "Explore Germany's points-based job-seeking visa (Chancenkarte). We assess your eligibility, calculate points, and handle submissions for specialized visa programs.",
    features: [
      "Germany Opportunity Card (Chancenkarte)",
      "Points-based calculator & profile assessment",
      "Job search registry & cover support",
      "Unrestricted search visa advisory"
    ]
  },
  {
    title: "Youth Mobility Visa UK",
    countryCode: "gb",
    icon: Globe,
    image: "/service-uk.jpg",
    description: "Live and work in the United Kingdom for up to 2 years. Our advisors help you navigate the qualifying criteria, age limits, financial requirements, and biometric registrations.",
    features: [
      "Age 18-30 Eligibility Assessment",
      "Financial maintenance proof guidance",
      "Biometric slot booking & document checklist",
      "2-year stay and unrestricted work permit support"
    ]
  },
  {
    title: "Flight Ticket Booking",
    icon: Ticket,
    image: "/service-flight.jpg",
    description: "Fly out with ease and comfort. We secure the best routes, optimal flight schedules, and special student discount fares for your flights to any global destination.",
    features: [
      "Student baggage allowance deals",
      "Flexible ticket date-change options",
      "Transit visa assistance if needed",
      "Pre-departure travel checklist"
    ]
  },
  {
    title: "Education Loan Assistance",
    icon: Landmark,
    image: "/service-loan.jpg",
    description: "Finance your overseas education stress-free. We partner with leading financial institutions to secure quick approvals, low-interest student loans, and collateral-free options.",
    features: [
      "Pre-visa approval loan letters",
      "Collateral & collateral-free options",
      "Special student interest rates",
      "Fast-track documentation support"
    ]
  }
];

// Custom 3D Parallax repeatable reveal component
function FeatureCardReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${className} ${
        isVisible 
          ? "opacity-100 translate-y-0 [transform:rotateX(0deg)_scale(1)]" 
          : "opacity-0 translate-y-16 [transform:rotateX(12deg)_scale(0.94)]"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetPauseTimeout = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Auto-scroll loop for mobile cards (speed tuned to 1400ms)
  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth < 1024 && !isPaused && scrollRef.current) {
        const container = scrollRef.current;
        const card = container.querySelector('.service-item-card') as HTMLElement;
        const cardWidth = card ? card.offsetWidth : 320;
        const scrollAmount = cardWidth + 16;
        
        const nextIndex = (activeIndex + 1) % visaServices.length;
        container.scrollTo({
          left: nextIndex * scrollAmount,
          behavior: 'smooth'
        });
      }
    }, 1400);

    return () => {
      clearInterval(interval);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [activeIndex, isPaused]);

  const scroll = (direction: 'left' | 'right') => {
    resetPauseTimeout();
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector('.service-item-card') as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 320;
      const scrollAmount = cardWidth + 16;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.querySelector('.service-item-card') as HTMLElement;
      const cardWidth = card ? card.offsetWidth : 320;
      const index = Math.round(container.scrollLeft / (cardWidth + 16));
      setActiveIndex(Math.min(Math.max(0, index), visaServices.length - 1));
    }
  };

  const highlightTitle = (title: string) => {
    if (title.includes("Germany")) {
      return (
        <>
          Opportunity Card <span className="text-[var(--gold)]">Germany</span>
        </>
      );
    }
    if (title.includes("UK")) {
      return (
        <>
          Youth Mobility Visa <span className="text-[var(--gold)]">UK</span>
        </>
      );
    }
    return title;
  };

  return (
    <section id="services" className="bg-[#090e1a] text-white pt-16 pb-20 relative overflow-hidden border-b border-slate-800">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient lighting glows behind sections */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">

        {/* Section Header (Visa Services) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 sm:mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.08)] mb-3.5">
              <Sparkles className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Our Services</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl leading-tight text-white font-black tracking-tight text-left">
              Visa <span className="text-[var(--gold)]">Pathways</span> & Solutions
            </h2>

            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4.5 text-[1.02rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              McCoy Global Consultancy provides comprehensive solutions, from standard student visa arrangements to tourist visa facilitation across the globe.
            </p>

            {/* Mobile Scroll Controls & Status (Only on small screens) */}
            <div className="flex lg:hidden items-center justify-between w-full mt-6 pt-3 border-t border-slate-800/60">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-[var(--gold)]">{activeIndex + 1}</span>
                <span className="text-slate-500">/</span>
                <span className="text-slate-400 font-medium">{visaServices.length}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  disabled={activeIndex === 0}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 disabled:opacity-30 disabled:pointer-events-none hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors active:scale-95 shadow-sm"
                  aria-label="Previous visa service card"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={activeIndex === visaServices.length - 1}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/90 text-slate-300 disabled:opacity-30 disabled:pointer-events-none hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors active:scale-95 shadow-sm"
                  aria-label="Next visa service card"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Visa Services Grid / Mobile Horizontal Snap Scroll */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onTouchStart={resetPauseTimeout}
          onMouseEnter={resetPauseTimeout}
          className="flex lg:grid lg:grid-cols-2 gap-4 sm:gap-8 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 px-1 lg:px-0 snap-x snap-mandatory lg:snap-none scroll-smooth scrollbar-none [perspective:1000px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {visaServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <FeatureCardReveal
                key={service.title}
                delay={150 + index * 80}
                className="service-item-card shrink-0 w-[86vw] max-w-[360px] sm:max-w-[420px] lg:w-auto lg:shrink snap-center lg:snap-align-none flex [transform-style:preserve-3d]"
              >
                <div
                  className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 sm:p-7 lg:p-8 transition-all duration-500 overflow-hidden w-full [transform-style:preserve-3d] hover:border-[var(--gold)]/50 hover:bg-slate-900/60 hover:[transform:rotateX(3deg)_rotateY(-3deg)_translateZ(10px)] hover:shadow-[0_20px_50px_rgba(184,123,44,0.12)] select-text"
                >
                  {/* Top gold bar accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                  {/* Huge background progress number - lifts in 3D */}
                  <div className="absolute right-4 sm:right-6 bottom-4 sm:bottom-5 text-5xl sm:text-7xl font-black select-none pointer-events-none font-display z-0 text-slate-800/25 group-hover:text-[var(--gold)]/10 transition-colors duration-500 [transform:translateZ(25px)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                  <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-stretch w-full h-full relative z-10">
                    {/* Left panel: text and details - lifts in 3D */}
                    <div className="flex flex-col justify-between flex-1 pr-0 md:pr-4 [transform:translateZ(15px)]">
                      <div>
                        {/* Icon & Title */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-5">
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border border-slate-800 bg-slate-900 text-slate-400 group-hover:text-[var(--gold)] group-hover:border-[var(--gold)]/20 transition-all duration-500 shadow-sm">
                            <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                          </div>
                          <h3 className="font-display text-lg sm:text-xl font-black text-white group-hover:text-[var(--gold)] transition-colors duration-300 tracking-tight leading-snug">
                            {highlightTitle(service.title)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[0.76rem] sm:text-[0.82rem] leading-relaxed text-slate-300 mb-4 sm:mb-6 text-justify">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 sm:space-y-3">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-2.5 sm:gap-3 group/li">
                              <div className="flex h-4.5 w-4.5 sm:h-5 sm:w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-300 group-hover/li:bg-[var(--gold)] group-hover/li:text-black mt-0.5 shadow-sm">
                                <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                              </div>
                              <span className="text-[0.74rem] sm:text-[0.82rem] font-bold text-slate-300 transition-colors duration-300 group-hover/li:text-white leading-snug">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Action Details Link */}
                      <div 
                        onClick={() => {
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-5 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-800 flex items-center justify-between text-[0.66rem] sm:text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--gold)] group-hover:text-[var(--gold)]/90 cursor-pointer"
                      >
                        <span>Enquire Details</span>
                        <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    {/* Right panel: Image wrapper - lifts in 3D */}
                    <div className="relative w-full md:w-[160px] lg:w-[220px] h-[140px] sm:h-[180px] md:h-auto rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border border-slate-800 group-hover:border-[var(--gold)]/40 transition-colors duration-500 shadow-sm self-stretch flex [transform:translateZ(20px)] mt-2 md:mt-0">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Top-Right Country Flag Badge overlay */}
                      {service.countryCode && (
                        <div className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 z-30 transition-all duration-500 group-hover:scale-110 shadow-lg border border-slate-800 rounded-lg overflow-hidden shrink-0 group-hover:border-[var(--gold)]">
                          <img
                            src={`https://flagcdn.com/w80/${service.countryCode}.png`}
                            className="h-6 w-9 sm:h-8 sm:w-12 object-cover"
                            alt="Country Flag"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FeatureCardReveal>
            );
          })}
        </div>

        {/* Mobile Pagination Indicator Dots */}
        <div className="flex lg:hidden justify-center items-center gap-1.5 mt-4">
          {visaServices.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => {
                if (scrollRef.current) {
                  const container = scrollRef.current;
                  const card = container.querySelector('.service-item-card') as HTMLElement;
                  const cardWidth = card ? card.offsetWidth : 320;
                  container.scrollTo({
                    left: dotIdx * (cardWidth + 16),
                    behavior: 'smooth'
                  });
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                dotIdx === activeIndex 
                  ? 'w-6 bg-[var(--gold)]' 
                  : 'w-1.5 bg-slate-800'
              }`}
              aria-label={`Go to service slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
