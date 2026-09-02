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
  { value: "98% Success", label: "Visa Approval Rate", icon: Trophy },
  { value: "5000+ Students", label: "Secured Admissions", icon: GraduationCap },
  { value: "1500+ Universities", label: "Global Tie-ups", icon: Landmark },
  { value: "30+ Countries", label: "Global Partnerships", icon: Globe },
  { value: "12+ Years", label: "Guiding Aspirants", icon: Calendar },
  { value: "Most Trusted", label: "Advisory in Hyderabad", icon: ShieldCheck }
];

const features = [
  {
    title: "Trusted Customers",
    description: "Thousands of students trust our guidance and have successfully secured admissions in top global universities.",
    icon: Handshake
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is available 24/7 to assist with applications, documentation, and your entire abroad journey.",
    icon: Headphones
  },
  {
    title: "Trusted Consultant",
    description: "Certified counselors with years of industry expertise guiding you through every step of the visa process.",
    icon: CheckCircle2
  }
];

// Custom 3D Parallax scrolling reveal component
function FeatureCardReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
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
    <section className="bg-[#090e1a] text-white pt-16 pb-16 relative overflow-hidden border-b border-slate-800">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient glows behind cards */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.08)] mb-3.5">
              <Star className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl font-black tracking-tight text-left">
              Our <span className="text-[var(--gold)]">Leadership</span> & Achievements
            </h2>

            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4.5 text-[1.02rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Expert leadership and certified advisors backing your international education and visa journey.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Two Column Layout: CEO Profile (Left) & Features Vertical List (Right) */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch mb-12">
          
          {/* Left Column: CEO Profile Card */}
          <div className="lg:col-span-7 flex">
            <FeatureCardReveal delay={150} className="w-full flex">
              <div className="group w-full relative rounded-3xl border border-slate-800/80 bg-slate-950/60 p-6 sm:p-8 pb-8 sm:pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(184,123,44,0.15)] hover:border-slate-700/80 flex flex-col sm:flex-row items-center gap-8 overflow-hidden">
                {/* Accent gold light glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Gold bar accent at the bottom of the card */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" />

                {/* Mr B. Rohit Portrait circular frame */}
                <div className="relative h-44 w-44 sm:h-48 sm:w-48 shrink-0 rounded-full border-4 border-[var(--gold)]/20 p-1.5 bg-slate-900 flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                  <div className="h-full w-full rounded-full overflow-hidden bg-slate-950">
                    <img 
                      src={founderImg} 
                      alt="Mr B. Rohit" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  {/* Decorative curved gold ring accent overlay */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[var(--gold)]/40 animate-[spin_40s_linear_infinite] pointer-events-none" />
                </div>

                {/* CEO Info & Quote */}
                <div className="flex flex-col justify-center flex-1 text-center sm:text-left z-10">
                  {/* Capsule Highlight Badge */}
                  <div className="inline-flex items-center gap-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[var(--gold)] mb-4 self-center sm:self-start shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-[var(--gold)]" />
                    <span>Top Advisory Leadership</span>
                  </div>

                  <h3 className="font-display text-3xl font-black text-white tracking-tight leading-none">Mr B. Rohit</h3>
                  <span className="block mt-2.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--gold)] leading-none">
                    Founder & Managing Director
                  </span>

                  {/* Divider line */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-slate-800 via-[var(--gold)]/20 to-slate-800" />

                  {/* Quote text block */}
                  <div className="relative">
                    <span className="absolute -top-3.5 -left-3.5 font-serif text-4xl text-[var(--gold)]/35 select-none">“</span>
                    <p className="text-[0.88rem] leading-relaxed text-slate-300 italic relative z-10 px-2 text-justify">
                      Our mission is to shape clear, stress-free visa pathways and secure admissions in world-class institutions with absolute transparency and integrity.
                    </p>
                    <span className="absolute -bottom-5 -right-1.5 font-serif text-4xl text-[var(--gold)]/35 select-none">”</span>
                  </div>
                </div>
              </div>
            </FeatureCardReveal>
          </div>

          {/* Right Column: Why Trust Us Feature Cards (Stacked Vertically on both Mobile and Desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4 [perspective:1000px]">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <FeatureCardReveal key={feat.title} delay={200 + idx * 150} className="w-full flex [transform-style:preserve-3d]">
                  <div
                    className="group relative flex gap-4 sm:gap-5 rounded-2xl border border-slate-800/80 bg-slate-950/40 hover:border-[var(--gold)]/50 hover:bg-slate-900/60 p-5 sm:p-6 transition-all duration-500 overflow-hidden w-full [transform-style:preserve-3d] hover:[transform:rotateX(4deg)_rotateY(-6deg)_translateZ(12px)] hover:shadow-[0_20px_50px_rgba(184,123,44,0.12)] select-text"
                  >
                    {/* Hover light overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Background card number - lifts in 3D */}
                    <div className="absolute right-4 top-2 text-4xl font-extrabold select-none pointer-events-none font-display text-slate-800/30 group-hover:text-[var(--gold)]/10 transition-all duration-500 [transform:translateZ(30px)]">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Icon container in gold circle - lifts in 3D */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 group-hover:text-[var(--gold)] group-hover:border-[var(--gold)]/20 transition-all duration-500 shadow-sm [transform:translateZ(20px)]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    
                    {/* Text Content - lifts in 3D */}
                    <div className="flex-1 [transform:translateZ(15px)]">
                      <h3 className="font-sans text-[0.88rem] font-bold text-white tracking-wider uppercase mb-1.5 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-[0.82rem] leading-relaxed text-slate-300 text-justify">
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
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-[var(--gold)] border border-slate-800/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--gold)]/10 group-hover:border-[var(--gold)]/20 shadow-sm">
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
