import React, { useState, useEffect, useRef } from "react";
import docImg from "../assets/Document and Verification.jpg";
import examImg from "../assets/Exam and training.png";
import { 
  Target, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  FileCheck, 
  Award, 
  BookOpen, 
  DollarSign, 
  Compass, 
  Tag, 
  Coins, 
  FileText, 
  MessageSquare as MessagesSquare, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ExpertiseItem {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  icon: React.ComponentType<any>;
  color?: string;
  bg?: string;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Personalized Guidance",
    description: "Tailored counseling sessions focusing on your unique career goals, budget, and migration plans.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    imagePosition: "center 18%",
    icon: Target,
    color: "text-sky-400",
    bg: "bg-sky-500/15 border-sky-400/35 shadow-[0_0_15px_rgba(56,189,248,0.22)] group-hover:bg-sky-500/25 group-hover:border-sky-400/60"
  },
  {
    title: "Pre & Post-Landing Support",
    description: "End-to-end guidance from departure checks and forex to setting up accommodation in your new country.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80",
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-400/35 shadow-[0_0_15px_rgba(52,211,153,0.22)] group-hover:bg-emerald-500/25 group-hover:border-emerald-400/60"
  },
  {
    title: "Career Counseling",
    description: "Expert direction to map your academic strengths and passions to high-growth global professions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    icon: Briefcase,
    color: "text-amber-400",
    bg: "bg-amber-500/15 border-amber-400/35 shadow-[0_0_15px_rgba(245,158,11,0.22)] group-hover:bg-amber-500/25 group-hover:border-amber-400/60"
  },
  {
    title: "Country & Course Selection",
    description: "Data-driven matching to pair you with the right specialization and world-class accredited universities.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80",
    icon: GraduationCap,
    color: "text-purple-400",
    bg: "bg-purple-500/15 border-purple-400/35 shadow-[0_0_15px_rgba(192,132,252,0.22)] group-hover:bg-purple-500/25 group-hover:border-purple-400/60"
  },
  {
    title: "Application Assistance",
    description: "Meticulous review and crafting of essays, SOPs, letters of recommendation, and fast-track submissions.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
    icon: FileCheck,
    color: "text-rose-400",
    bg: "bg-rose-500/15 border-rose-400/35 shadow-[0_0_15px_rgba(244,63,94,0.22)] group-hover:bg-rose-500/25 group-hover:border-rose-400/60"
  },
  {
    title: "Admission in Top Universities",
    description: "Direct advisory pathways to secure confirmed acceptance in world-ranked institutions across the globe.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
    icon: Award,
    color: "text-yellow-400",
    bg: "bg-yellow-500/15 border-yellow-400/35 shadow-[0_0_15px_rgba(250,204,21,0.22)] group-hover:bg-yellow-500/25 group-hover:border-yellow-400/60"
  },
  {
    title: "Test Prep Coaching",
    description: "Structured coaching for IELTS, PTE, TOEFL, and GRE with simulated mock tests and strategy reviews.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
    icon: BookOpen,
    color: "text-blue-400",
    bg: "bg-blue-500/15 border-blue-400/35 shadow-[0_0_15px_rgba(59,130,246,0.22)] group-hover:bg-blue-500/25 group-hover:border-blue-400/60"
  },
  {
    title: "Financial Advice",
    description: "Structured planning for tuition budgets, living fund requirements, blocked accounts, and forex transfers.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    icon: DollarSign,
    color: "text-teal-400",
    bg: "bg-teal-500/15 border-teal-400/35 shadow-[0_0_15px_rgba(45,212,191,0.22)] group-hover:bg-teal-500/25 group-hover:border-teal-400/60"
  },
  {
    title: "Visa Counseling",
    description: "Strategic embassy interview drills, checklist audits, and flawless filing to maximize approval rates.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80",
    imagePosition: "center 18%",
    icon: Compass,
    color: "text-orange-400",
    bg: "bg-orange-500/15 border-orange-400/35 shadow-[0_0_15px_rgba(249,115,22,0.22)] group-hover:bg-orange-500/25 group-hover:border-orange-400/60"
  },
  {
    title: "Discounts & Exam Training",
    description: "Access exclusive application fee waivers, partner university scholarships, and exam test vouchers.",
    image: examImg,
    icon: Tag,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/15 border-fuchsia-400/35 shadow-[0_0_15px_rgba(217,70,239,0.22)] group-hover:bg-fuchsia-500/25 group-hover:border-fuchsia-400/60"
  },
  {
    title: "Student Educational Loans",
    description: "Fast collateral and non-collateral loan sanctioning through top nationalized and private banking partners.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=700&q=80",
    icon: Coins,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-400/35 shadow-[0_0_15px_rgba(16,185,129,0.22)] group-hover:bg-emerald-500/25 group-hover:border-emerald-400/60"
  },
  {
    title: "Documentation & Verification",
    description: "Precision compiling, apostille notarization, translation, and verification of all academic records.",
    image: docImg,
    icon: FileText,
    color: "text-cyan-400",
    bg: "bg-cyan-500/15 border-cyan-400/35 shadow-[0_0_15px_rgba(6,182,212,0.22)] group-hover:bg-cyan-500/25 group-hover:border-cyan-400/60"
  },
  {
    title: "Free Mock Interviews",
    description: "Simulated 1-on-1 embassy and admissions interviews with real-time feedback from seasoned visa experts.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
    icon: MessagesSquare,
    color: "text-violet-400",
    bg: "bg-violet-500/15 border-violet-400/35 shadow-[0_0_15px_rgba(139,92,246,0.22)] group-hover:bg-violet-500/25 group-hover:border-violet-400/60"
  }
];

function ExpertiseCard({ item }: { item: ExpertiseItem }) {
  const Icon = item.icon;

  const handleNavigateToAssessment = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const el = document.getElementById("free-assessment") || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const nameInput = document.getElementById("name");
        if (nameInput) nameInput.focus();
      }, 600);
    }
  };

  return (
    <div
      onClick={handleNavigateToAssessment}
      className="group relative flex flex-col rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-950/60 p-3.5 sm:p-4 transition-all duration-500 overflow-hidden w-[280px] sm:w-[320px] md:w-[340px] shrink-0 h-[395px] sm:h-[415px] select-none hover:border-[var(--gold)]/60 hover:bg-slate-900/90 hover:shadow-[0_20px_50px_rgba(184,123,44,0.18)] hover:-translate-y-2 cursor-pointer"
    >
      {/* Accent gold light glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
      
      {/* Gold bar accent at the bottom of the card on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

      {/* Big Image Section with Left-Top Logo */}
      <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shrink-0 select-none">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
          style={{ objectPosition: item.imagePosition || "center" }}
          loading="lazy"
        />
        
        {/* Subtle dark gradient overlay at the bottom of the image for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Left Top Logo / Icon Box */}
        <div className={`absolute top-2.5 sm:top-3 left-2.5 sm:left-3 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl backdrop-blur-md border ${item.bg || "bg-slate-950/85 border-[var(--gold)]/35"} ${item.color || "text-[var(--gold)]"} shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-110 z-20`}>
          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:rotate-6" />
        </div>
      </div>

      {/* Followed by Content (Title & Description) - Fully Selectable & Copyable */}
      <div className="flex flex-col flex-1 pt-3.5 sm:pt-4 pb-1 sm:pb-1.5 px-1 sm:px-1.5 z-20 justify-between select-text">
        <div>
          {/* Title */}
          <h4 className="font-sans text-[0.88rem] sm:text-[0.98rem] font-bold uppercase tracking-wide text-white group-hover:text-[var(--gold)] transition-colors duration-300 leading-snug">
            {item.title}
          </h4>

          {/* Description text */}
          <p className="mt-2 text-[0.78rem] sm:text-[0.82rem] leading-relaxed text-slate-300 line-clamp-3 text-justify">
            {item.description}
          </p>
        </div>

        {/* Card footer detail - click to navigate to Free Confidential Assessment */}
        <a
          href="#free-assessment"
          onClick={handleNavigateToAssessment}
          className="pt-3 flex items-center justify-between border-t border-slate-800/70 text-[0.74rem] font-semibold text-slate-400 group-hover:text-[var(--gold)] hover:text-[var(--gold)] transition-colors cursor-pointer"
          title="Navigate to Free Confidential Assessment"
        >
          <span className="group-hover:underline underline-offset-4">Explore Guidance</span>
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 font-bold text-[var(--gold)]">→</span>
        </a>
      </div>
    </div>
  );
}

export function ExpertiseSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"normal" | "reverse">("normal");

  return (
    <section id="expertise" className="bg-[#090e1a] text-white pt-3 sm:pt-14 pb-14 sm:pb-20 relative overflow-hidden border-b border-slate-800">
      {/* Inline styles for continuous infinite horizontal scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes expertise-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-expertise-scroll {
          animation: expertise-scroll 32s linear infinite;
        }
      `}} />

      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient glows behind items */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full mb-6 sm:mb-14 gap-6">
            <div className="flex flex-col items-start max-w-2xl">
              {/* Premium Capsule Subtitle Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1224] border border-amber-400/50 px-4 py-1.5 text-[0.72rem] sm:text-[0.75rem] font-black uppercase tracking-[0.22em] text-amber-300 shadow-[0_4px_16px_rgba(11,18,36,0.18)] mb-2.5 sm:mb-3.5">
                <Sparkles className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400 animate-pulse" />
                <span className="text-amber-300 tracking-[0.22em] font-extrabold">Core Competencies</span>
              </div>
              
              <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl font-black tracking-tight text-left">
                Our <span className="text-[var(--gold)]">Expertise</span>
              </h2>

              <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

              <p className="mt-3.5 sm:mt-4.5 text-[0.92rem] sm:text-[1.02rem] text-slate-400 leading-relaxed text-justify">
                We don't just guide you; we ignite your career potential through dedicated end-to-end overseas migration counseling.
              </p>
            </div>

            {/* Interactive Scrolling Controls - Compact Single-Row Pill on Mobile */}
            <div className="flex items-center gap-1.5 sm:gap-3 self-start lg:self-end bg-slate-950/80 border border-slate-800/90 rounded-full px-2.5 sm:px-4 py-1 sm:py-2 backdrop-blur-md shadow-md max-w-full overflow-x-auto shrink-0">
              {/* Live Auto-Scroll Status Indicator */}
              <div className="flex items-center gap-1.5 sm:gap-2 pr-2 sm:pr-3 border-r border-slate-800 shrink-0">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  {!isPaused && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  )}
                  <span className={`relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 ${isPaused ? 'bg-amber-400' : 'bg-emerald-500'}`} />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-slate-300 whitespace-nowrap">
                  <span className="sm:hidden">{isPaused ? "Paused" : "Flow"}</span>
                  <span className="hidden sm:inline">{isPaused ? "Paused" : "Continuous Flow"}</span>
                </span>
              </div>

              {/* Pause / Resume button */}
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-[var(--gold)] hover:text-amber-300 transition-colors cursor-pointer px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md hover:bg-slate-900 shrink-0"
                title={isPaused ? "Resume continuous auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? <Play className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" /> : <Pause className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />}
                <span>{isPaused ? "Resume" : "Pause"}</span>
              </button>

              {/* Left / Right Direction Controls */}
              <div className="flex items-center gap-0.5 sm:gap-1 pl-1.5 sm:pl-2 border-l border-slate-800 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setScrollDirection("reverse");
                    setIsPaused(false);
                  }}
                  className={`p-1 sm:p-1.5 rounded-full transition-all cursor-pointer ${
                    scrollDirection === "reverse" && !isPaused
                      ? "bg-[var(--gold)] text-slate-950 shadow-sm" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                  }`}
                  title="Scroll Right"
                  aria-label="Scroll right"
                >
                  <ChevronLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setScrollDirection("normal");
                    setIsPaused(false);
                  }}
                  className={`p-1 sm:p-1.5 rounded-full transition-all cursor-pointer ${
                    scrollDirection === "normal" && !isPaused
                      ? "bg-[var(--gold)] text-slate-950 shadow-sm" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                  }`}
                  title="Scroll Left"
                  aria-label="Scroll left"
                >
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Horizontal Continuous Infinite Scrolling Track */}
      <ScrollReveal direction="up" delay={200}>
        <div className="relative w-full overflow-hidden py-4">
          {/* Left & Right gradient fade masks for smooth seamless edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-[#090e1a] via-[#090e1a]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-[#090e1a] via-[#090e1a]/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Row */}
          <div 
            className="flex w-max select-none cursor-grab active:cursor-grabbing hover:[animation-play-state:paused]"
            style={{
              animationName: "expertise-scroll",
              animationDuration: "32s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationPlayState: isPaused ? "paused" : "running",
              animationDirection: scrollDirection === "reverse" ? "reverse" : "normal",
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 2500);
            }}
          >
            {/* Track 1: Original 13 Expertise Cards */}
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
              {expertiseItems.map((item) => (
                <ExpertiseCard key={`track1-${item.title}`} item={item} />
              ))}
            </div>

            {/* Track 2: Duplicate for seamless gapless loop */}
            <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0" aria-hidden="true">
              {expertiseItems.map((item) => (
                <ExpertiseCard key={`track2-${item.title}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Helper caption below marquee */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-6">
        <p className="text-center text-xs text-slate-500 font-medium tracking-wide">
          ✦ Hover or tap any competency card to pause & explore in detail
        </p>
      </div>
    </section>
  );
}
