import React from "react";
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
  MessagesSquare,
  Sparkles
} from "lucide-react";
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

export function ExpertiseSection() {
  return (
    <section className="bg-white pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <Sparkles className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Core Competencies</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left">
              Our <span className="text-[var(--gold)] font-bold">Expertise</span>
            </h2>

            <div className="mt-3 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              We don't just guide you; we ignite your career potential through dedicated end-to-end overseas migration counseling.
            </p>
          </div>
        </ScrollReveal>

        {/* Expertise Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {expertiseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal 
                key={item.title} 
                direction="up" 
                delay={100 + (idx % 4) * 100}
                className="flex"
              >
                <div
                  className="group relative flex flex-col items-start rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden w-full h-full"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
                >
                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                  
                  {/* Huge background progress number */}
                  <div className="absolute right-4 bottom-3 text-5xl font-black text-slate-100/50 select-none pointer-events-none font-display z-0 group-hover:text-[var(--gold)]/5 transition-colors duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  
                  {/* Corner glow */}
                  <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gold)]/8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                  {/* Gold bar accent at the bottom of the card on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                  {/* Icon Container */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-sm z-20">
                    <Icon className="h-5.5 w-5.5" />
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-sans text-[0.88rem] font-bold uppercase tracking-wider text-slate-800 group-hover:text-[var(--gold)] transition-colors duration-300 z-20">
                    {item.title}
                  </h4>

                  {/* Description text justified */}
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-slate-500 text-justify z-20">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
