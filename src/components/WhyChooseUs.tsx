import React, { useState, useEffect, useRef } from "react";
import founderImg from "../assets/Founder.jpeg";
import { 
  Handshake, 
  Headphones, 
  CheckCircle2, 
  Trophy, 
  GraduationCap, 
  Landmark, 
  Globe, 
  Calendar, 
  ShieldCheck, 
  Star 
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { 
    value: "98% Success", 
    label: "Visa Approval Rate", 
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-500/15 border-amber-400/30 shadow-[0_0_15px_rgba(251,191,36,0.25)]",
  },
  { 
    value: "5000+ Students", 
    label: "Secured Admissions", 
    icon: GraduationCap,
    color: "text-sky-400",
    bg: "bg-sky-500/15 border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.25)]",
  },
  { 
    value: "1500+ Universities", 
    label: "Global Tie-ups", 
    icon: Landmark,
    color: "text-rose-400",
    bg: "bg-rose-500/15 border-rose-400/30 shadow-[0_0_15px_rgba(244,63,94,0.25)]",
  },
  { 
    value: "30+ Countries", 
    label: "Global Partnerships", 
    icon: Globe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-400/30 shadow-[0_0_15px_rgba(52,211,153,0.25)]",
  },
  { 
    value: "12+ Years", 
    label: "Guiding Aspirants", 
    icon: Calendar,
    color: "text-purple-400",
    bg: "bg-purple-500/15 border-purple-400/30 shadow-[0_0_15px_rgba(192,132,252,0.25)]",
  },
  { 
    value: "Most Trusted", 
    label: "Advisory in Hyderabad", 
    icon: ShieldCheck,
    color: "text-orange-400",
    bg: "bg-orange-500/15 border-orange-400/30 shadow-[0_0_15px_rgba(249,115,22,0.25)]",
  }
];

const features = [
  {
    title: "Trusted Customers",
    description: "Thousands of students trust our guidance to secure top global university admissions.",
    mobileDesc: "Thousands guided to top global universities.",
    icon: Handshake,
    color: "text-sky-400",
    bg: "bg-sky-500/15 border-sky-400/35 shadow-[0_0_18px_rgba(56,189,248,0.25)] group-hover:bg-sky-500/25 group-hover:border-sky-400/60",
    numColor: "text-sky-400/20 group-hover:text-sky-400/40"
  },
  {
    title: "24/7 Support",
    description: "Dedicated 24/7 team assisting with applications, documentation, and visas.",
    mobileDesc: "24/7 team assisting applications & visas.",
    icon: Headphones,
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-400/35 shadow-[0_0_18px_rgba(52,211,153,0.25)] group-hover:bg-emerald-500/25 group-hover:border-emerald-400/60",
    numColor: "text-emerald-400/20 group-hover:text-emerald-400/40"
  },
  {
    title: "Trusted Consultant",
    description: "Certified counselors with years of expertise guiding your entire visa process.",
    mobileDesc: "Certified counselors for complete visa guidance.",
    icon: CheckCircle2,
    color: "text-purple-400",
    bg: "bg-purple-500/15 border-purple-400/35 shadow-[0_0_18px_rgba(192,132,252,0.25)] group-hover:bg-purple-500/25 group-hover:border-purple-400/60",
    numColor: "text-purple-400/20 group-hover:text-purple-400/40"
  }
];

// Custom 3D Parallax scrolling reveal component
function FeatureCardReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

return (
  <div
    ref={ref}
    className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${className} ${
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

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#090e1a] text-white pt-12 sm:pt-16 pb-12 sm:pb-16 relative overflow-hidden border-b border-slate-800 scroll-mt-20">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient glows behind cards */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 sm:mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1224] border border-amber-400/50 px-4 py-1.5 text-[0.72rem] sm:text-[0.75rem] font-black uppercase tracking-[0.22em] text-amber-300 shadow-[0_4px_16px_rgba(11,18,36,0.18)] mb-3">
              <Star className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400 animate-pulse" />
              <span className="text-amber-300 tracking-[0.22em] font-extrabold">Why Choose Us</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white text-left">
              Our <span className="text-[var(--gold)]">Leadership</span> & Achievements
            </h2>

            <div className="mt-3.5 sm:mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-3.5 sm:mt-4.5 text-[0.92rem] sm:text-[1.02rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Expert leadership and certified advisors backing your international education and visa journey.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Two Column Layout: CEO Profile (Left) & Features Vertical List (Right) */}
        <div className="grid gap-5 sm:gap-8 lg:grid-cols-12 items-stretch mb-8 sm:mb-12">
          
          {/* Left Column: CEO Profile Card */}
          <div className="lg:col-span-7 flex">
            <FeatureCardReveal delay={150} className="w-full flex">
              <div className="group w-full relative rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-8 pb-5 sm:pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(184,123,44,0.15)] hover:border-slate-700/80 flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-8 overflow-hidden">
                {/* Accent gold light glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Gold bar accent at the bottom of the card */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" />

                {/* Mr. B. Rohith Portrait: Large prominent square/rectangle frame */}
                <div className="relative w-full sm:w-60 md:w-72 h-52 sm:h-72 md:h-80 shrink-0 rounded-xl sm:rounded-3xl border-2 border-[var(--gold)]/30 p-1 bg-slate-900 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:border-[var(--gold)]/60 transition-all duration-500 select-none">
                  <div className="h-full w-full rounded-lg sm:rounded-2xl overflow-hidden bg-slate-950 relative">
                    <img 
                      src={founderImg} 
                      alt="Mr. B. Rohith - Founder & Managing Director" 
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                  {/* Gold corner badge */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-lg bg-slate-950/85 backdrop-blur-md border border-[var(--gold)]/35 px-2.5 py-1 text-[0.62rem] font-bold text-[var(--gold)] shadow-md">
                    <Star className="h-2.5 w-2.5 fill-[var(--gold)]" />
                    <span>Founder</span>
                  </div>
                </div>

                {/* CEO Info & Quote */}
                <div className="flex flex-col justify-center flex-1 text-center sm:text-left z-10">
                  {/* Capsule Highlight Badge */}
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-[#0b1224] border border-amber-400/50 px-3.5 py-1 text-[0.64rem] sm:text-[0.68rem] font-black uppercase tracking-wider text-amber-300 mb-2.5 sm:mb-3 self-center sm:self-start shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                    <span className="text-amber-300">Top Advisory Leadership</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.1rem] font-black text-white tracking-normal leading-tight drop-shadow-sm">
                    Mr. B. Rohith
                  </h3>
                  <span className="block mt-1.5 sm:mt-2 text-[0.74rem] sm:text-[0.78rem] font-extrabold uppercase tracking-[0.18em] text-[var(--gold)] leading-none">
                    Founder & Managing Director
                  </span>

                  {/* Divider line */}
                  <div className="my-3.5 sm:my-5 h-px w-full bg-gradient-to-r from-slate-800 via-[var(--gold)]/20 to-slate-800" />

                  {/* Quote text block */}
                  <div className="relative">
                    <span className="absolute -top-3.5 -left-3.5 font-serif text-3xl sm:text-4xl text-[var(--gold)]/35 select-none">“</span>
                    <p className="text-[0.74rem] sm:text-[0.88rem] leading-snug sm:leading-relaxed text-slate-300 italic relative z-10 px-2 text-justify select-text">
                      <span className="sm:hidden">
                        Our mission is to shape stress-free visa pathways & top admissions with transparency.
                      </span>
                      <span className="hidden sm:inline">
                        Our mission is to shape clear, stress-free visa pathways and secure admissions in world-class institutions with absolute transparency and integrity.
                      </span>
                    </p>
                    <span className="absolute -bottom-4.5 sm:-bottom-5 -right-1.5 font-serif text-3xl sm:text-4xl text-[var(--gold)]/35 select-none">”</span>
                  </div>
                </div>
              </div>
            </FeatureCardReveal>
          </div>

          {/* Right Column: Why Trust Us Feature Cards (Stacked Vertically on both Mobile and Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 sm:gap-4 [perspective:1000px]">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <FeatureCardReveal key={feat.title} delay={200 + idx * 150} className="w-full flex [transform-style:preserve-3d]">
                  <div
                    className="group relative flex items-center sm:items-start gap-3 sm:gap-5 rounded-xl sm:rounded-2xl border border-slate-800/80 bg-slate-950/40 hover:border-[var(--gold)]/50 hover:bg-slate-900/60 p-3 sm:p-5 lg:p-6 transition-all duration-500 overflow-hidden w-full [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-6deg)_translateZ(12px)] hover:shadow-[0_20px_50px_rgba(184,123,44,0.12)] select-text"
                  >
                    {/* Hover light overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Background card number - lifts in 3D */}
                    <div className={`absolute right-3 sm:right-4 top-1 sm:top-2 text-2xl sm:text-4xl font-extrabold select-none pointer-events-none font-display ${feat.numColor} transition-all duration-500 [transform:translateZ(30px)]`}>
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Icon container in colorful rounded box - lifts in 3D */}
                    <div className={`flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl border ${feat.bg} ${feat.color} transition-all duration-500 shadow-sm [transform:translateZ(20px)]`}>
                      <Icon className="h-4.5 w-4.5 sm:h-6 sm:w-6" />
                    </div>
                    
                    {/* Text Content - lifts in 3D */}
                    <div className="flex-1 min-w-0 [transform:translateZ(15px)] pr-6 sm:pr-8">
                      <h3 className="font-sans text-[0.82rem] sm:text-[0.88rem] font-bold text-white tracking-wider uppercase mb-0 sm:mb-1 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="hidden sm:block text-[0.82rem] leading-relaxed text-slate-300 text-justify mt-1">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </FeatureCardReveal>
              );
            })}
          </div>

        </div>

        {/* Bottom Achievements Stats Grid Row in Dark Glassmorphism container */}
        <div className="bg-slate-950/40 border border-slate-800/60 rounded-3xl p-6 sm:p-8 mt-6">
          <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center [perspective:1000px]">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <FeatureCardReveal key={s.label} delay={idx * 60} className="w-full flex [transform-style:preserve-3d]">
                  <div className="flex items-center gap-3.5 group min-w-0 [transform-style:preserve-3d] hover:[transform:translateZ(10px)] transition-transform duration-300">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${s.bg} ${s.color} transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block font-display text-[1.12rem] font-black text-white leading-none">
                        <AnimatedCounter value={s.value} />
                      </span>
                      <span className="block text-[0.62rem] font-bold uppercase tracking-widest text-slate-400 mt-2 leading-tight">
                        {s.label}
                      </span>
                    </div>
                  </div>
                </FeatureCardReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
