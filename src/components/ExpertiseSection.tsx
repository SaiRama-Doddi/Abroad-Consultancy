import React, { useState, useEffect, useRef } from "react";
import { 
  TargetIcon as Target, 
  GlobeIcon as Globe, 
  BriefcaseIcon as Briefcase, 
  GraduationCapIcon as GraduationCap, 
  FileCheckIcon as FileCheck, 
  AwardIcon as Award, 
  BookOpenIcon as BookOpen, 
  CoinsIcon as DollarSign, 
  CompassIcon as Compass, 
  PriceTagIcon as Tag,
  CoinsIcon as Coins,
  FileTextIcon as FileText,
  MessageSquareIcon as MessagesSquare,
  SparklesIcon as Sparkles
} from "./CustomIcons";
import { ScrollReveal } from "./ScrollReveal";

interface ExpertiseItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Personalized Guidance",
    description: "Tailored counseling sessions focusing on your unique career goals and migration plans.",
    icon: Target
  },
  {
    title: "Pre & Post-Landing Support",
    description: "End-to-end guidance from departure checks to setting up your life in your new country.",
    icon: Globe
  },
  {
    title: "Career Counseling",
    description: "Expert direction to map your academic strengths to high-growth global professions.",
    icon: Briefcase
  },
  {
    title: "Country/CourseSelection",
    description: "Data-driven matching to pair you with the right course and world-class universities.",
    icon: GraduationCap
  },
  {
    title: "Application Assistance",
    description: "Meticulous review of essays, letters of recommendation, and application submissions.",
    icon: FileCheck
  },
  {
    title: "Admission in Top Universities",
    description: "Direct advisory pathways to secure placements in prestigious global institutions.",
    icon: Award
  },
  {
    title: "Test Prep Coaching",
    description: "Structured test coaching with simulated mock exams and personalized strategy logs.",
    icon: BookOpen
  },
  {
    title: "Financial Advice",
    description: "Structured planning for tuition budgets, living expenses, and international transfers.",
    icon: DollarSign
  },
  {
    title: "Visa Counseling",
    description: "Strategic mock interviews and thorough documentation to maximize approval rates.",
    icon: Compass
  },
  {
    title: "Discounts & Exam Training",
    description: "Access to exclusive waivers, scholarships, and premium test prep discounts.",
    icon: Tag
  },
  {
    title: "Student Educational Loans",
    description: "Hassle-free loan processing with top banking partners at competitive interest rates.",
    icon: Coins
  },
  {
    title: "Documentation",
    description: "Expert compiling, formatting, and verification of all academic and visa records.",
    icon: FileText
  },
  {
    title: "Free Mock Interviews",
    description: "Simulated visa and admissions interviews with real-time feedback and evaluations.",
    icon: MessagesSquare
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
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

export function ExpertiseSection() {
  return (
    <section className="bg-[#090e1a] text-white pt-16 pb-16 relative overflow-hidden border-b border-slate-800">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient glows behind grid items */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.08)] mb-3.5">
              <Sparkles className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Core Competencies</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl font-black tracking-tight text-left">
              Our <span className="text-[var(--gold)]">Expertise</span>
            </h2>

            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4.5 text-[1.02rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              We don't just guide you; we ignite your career potential through dedicated end-to-end overseas migration counseling.
            </p>
          </div>
        </ScrollReveal>

        {/* Expertise Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 [perspective:1000px]">
          {expertiseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <FeatureCardReveal 
                key={item.title} 
                delay={(idx % 4) * 80}
                className="flex [transform-style:preserve-3d]"
              >
                <div
                  className="group relative flex flex-col items-start rounded-3xl border border-slate-800/80 bg-slate-950/40 p-6 transition-all duration-500 overflow-hidden w-full h-full select-none [transform-style:preserve-3d] hover:border-[var(--gold)]/50 hover:bg-slate-900/60 hover:[transform:rotateX(4deg)_rotateY(-6deg)_translateZ(12px)] hover:shadow-[0_20px_50px_rgba(184,123,44,0.12)]"
                >
                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  {/* Huge background progress number - lifts in 3D */}
                  <div className="absolute right-4 bottom-3 text-5xl font-black select-none pointer-events-none font-display z-0 text-slate-800/35 group-hover:text-[var(--gold)]/10 transition-colors duration-500 [transform:translateZ(25px)]">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Corner glow */}
                  <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gold)]/8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                  {/* Gold bar accent at the bottom of the card on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                  {/* Icon Container - lifts in 3D */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-400 group-hover:text-[var(--gold)] group-hover:border-[var(--gold)]/20 transition-all duration-500 shadow-sm z-20 [transform:translateZ(20px)]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>

                  {/* Title & Description wrapped to lift in 3D */}
                  <div className="z-20 [transform:translateZ(15px)]">
                    {/* Title */}
                    <h4 className="mt-4 font-sans text-[0.88rem] font-bold uppercase tracking-wider text-white group-hover:text-[var(--gold)] transition-colors duration-300">
                      {item.title}
                    </h4>

                    {/* Description text justified */}
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-slate-300 text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FeatureCardReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
