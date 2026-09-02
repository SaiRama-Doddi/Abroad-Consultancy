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
  Sparkles 
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ExpertiseItem {
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  icon: React.ComponentType<any>;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Personalized Guidance",
    description: "Tailored counseling sessions focusing on your unique career goals, budget, and migration plans.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    imagePosition: "center 18%",
    icon: Target
  },
  {
    title: "Pre & Post-Landing Support",
    description: "End-to-end guidance from departure checks and forex to setting up accommodation in your new country.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80",
    icon: Globe
  },
  {
    title: "Career Counseling",
    description: "Expert direction to map your academic strengths and passions to high-growth global professions.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    icon: Briefcase
  },
  {
    title: "Country & Course Selection",
    description: "Data-driven matching to pair you with the right specialization and world-class accredited universities.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=700&q=80",
    icon: GraduationCap
  },
  {
    title: "Application Assistance",
    description: "Meticulous review and crafting of essays, SOPs, letters of recommendation, and fast-track submissions.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80",
    icon: FileCheck
  },
  {
    title: "Admission in Top Universities",
    description: "Direct advisory pathways to secure confirmed acceptance in world-ranked institutions across the globe.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80",
    icon: Award
  },
  {
    title: "Test Prep Coaching",
    description: "Structured coaching for IELTS, PTE, TOEFL, and GRE with simulated mock tests and strategy reviews.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=700&q=80",
    icon: BookOpen
  },
  {
    title: "Financial Advice",
    description: "Structured planning for tuition budgets, living fund requirements, blocked accounts, and forex transfers.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=700&q=80",
    icon: DollarSign
  },
  {
    title: "Visa Counseling",
    description: "Strategic embassy interview drills, checklist audits, and flawless filing to maximize approval rates.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=700&q=80",
    imagePosition: "center 18%",
    icon: Compass
  },
  {
    title: "Discounts & Exam Training",
    description: "Access exclusive application fee waivers, partner university scholarships, and exam test vouchers.",
    image: examImg,
    icon: Tag
  },
  {
    title: "Student Educational Loans",
    description: "Fast collateral and non-collateral loan sanctioning through top nationalized and private banking partners.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=700&q=80",
    icon: Coins
  },
  {
    title: "Documentation & Verification",
    description: "Precision compiling, apostille notarization, translation, and verification of all academic records.",
    image: docImg,
    icon: FileText
  },
  {
    title: "Free Mock Interviews",
    description: "Simulated 1-on-1 embassy and admissions interviews with real-time feedback from seasoned visa experts.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80",
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
    <section id="expertise" className="bg-[#090e1a] text-white pt-16 pb-20 relative overflow-hidden border-b border-slate-800">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient glows behind grid items */}
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-12 flex flex-col items-start">
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
                  className="group relative flex flex-col rounded-3xl border border-slate-800/80 bg-slate-950/50 p-3.5 sm:p-4 transition-all duration-500 overflow-hidden w-full h-full [transform-style:preserve-3d] hover:border-[var(--gold)]/60 hover:bg-slate-900/80 hover:[transform:rotateX(4deg)_rotateY(-5deg)_translateZ(14px)] hover:shadow-[0_22px_55px_rgba(184,123,44,0.18)]"
                >
                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  {/* Gold bar accent at the bottom of the card on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                  {/* Big Image Section with Left-Top Logo */}
                  <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-900 shrink-0 select-none [transform-style:preserve-3d]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 pointer-events-none"
                      style={{ objectPosition: item.imagePosition || "center" }}
                      loading="lazy"
                    />
                    
                    {/* Subtle dark gradient overlay at the bottom of the image for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Left Top Logo / Icon Box */}
                    <div className="absolute top-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950/85 backdrop-blur-md border border-[var(--gold)]/35 text-[var(--gold)] shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)] group-hover:text-slate-950 group-hover:border-[var(--gold)] z-20 [transform:translateZ(20px)]">
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                    </div>
                  </div>

                  {/* Followed by Content (Title & Description) - Fully Selectable & Copyable */}
                  <div className="flex flex-col flex-1 pt-4 pb-2 px-1.5 z-20 [transform:translateZ(15px)] select-text">
                    {/* Title */}
                    <h4 className="font-sans text-[0.92rem] sm:text-[0.98rem] font-bold uppercase tracking-wide text-white group-hover:text-[var(--gold)] transition-colors duration-300 leading-snug select-text cursor-text">
                      {item.title}
                    </h4>

                    {/* Description text */}
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-slate-300 text-justify select-text cursor-text">
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
