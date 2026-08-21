import React from "react";
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

export function WhyChooseUs() {
  return (
    <section className="bg-[#fcfbf9] pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#e0b76d_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <Star className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Why Choose Us</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left">
              Our <span className="text-[var(--gold)] font-bold">Leadership</span> & Achievements
            </h2>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Expert leadership and certified advisors backing your international education and visa journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Two Column Layout: CEO Profile (Left) & Features (Right) */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: CEO Profile Card */}
          <div className="lg:col-span-7 flex">
            <ScrollReveal direction="left" delay={200} className="w-full flex">
              <div className="group w-full relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 pb-8 sm:pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(224,183,109,0.08)] flex flex-col sm:flex-row items-center gap-8 overflow-hidden">
                {/* Accent gold light glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Gold bar accent at the bottom of the card */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--gold)]" />

                {/* Mani Kumar Portrait circular frame */}
                <div className="relative h-44 w-44 sm:h-48 sm:w-48 shrink-0 rounded-full border-4 border-[var(--gold)]/20 p-1.5 bg-slate-50 flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.04)]">
                  <div className="h-full w-full rounded-full overflow-hidden bg-slate-100">
                    <img 
                      src="/founder.png" 
                      alt="Mani Kumar" 
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  {/* Decorative curved gold ring accent overlay */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-[var(--gold)]/40 animate-[spin_40s_linear_infinite] pointer-events-none" />
                </div>

                {/* CEO Info & Quote */}
                <div className="flex flex-col justify-center flex-1 text-center sm:text-left">
                  {/* Capsule Highlight Badge */}
                  <div className="inline-flex items-center gap-1 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/20 px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[var(--gold)] mb-4 self-center sm:self-start shadow-sm">
                    <Star className="h-2.5 w-2.5 fill-[var(--gold)]" />
                    <span>Top Advisory Leadership</span>
                  </div>

                  <h3 className="font-display text-3xl font-extrabold text-slate-800 tracking-tight leading-none">Mani Kumar</h3>
                  <span className="block mt-2.5 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--gold)] leading-none">
                    Founder & Managing Director
                  </span>

                  {/* Divider line */}
                  <div className="my-5 h-px w-full bg-gradient-to-r from-slate-100 via-[var(--gold)]/20 to-slate-100" />

                  {/* Quote text block */}
                  <div className="relative">
                    <span className="absolute -top-3.5 -left-3.5 font-serif text-4xl text-[var(--gold)]/35 select-none">“</span>
                    <p className="text-[0.88rem] leading-relaxed text-slate-500 italic relative z-10 px-2 text-justify">
                      Our mission is to shape clear, stress-free visa pathways and secure admissions in world-class institutions with absolute transparency and integrity.
                    </p>
                    <span className="absolute -bottom-5 -right-1.5 font-serif text-4xl text-[var(--gold)]/35 select-none">”</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Why Trust Us Feature Stack */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={feat.title} direction="right" delay={150 + idx * 120} className="w-full">
                  <div
                    className="group relative flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(224,183,109,0.08)] overflow-hidden"
                  >
                    {/* Hover light overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Background card number */}
                    <div className="absolute right-4 top-2 text-4xl font-extrabold text-slate-100/60 select-none pointer-events-none font-display group-hover:text-[var(--gold)]/10 transition-colors duration-500">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    
                    {/* Icon container in gold circle */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-transform duration-300 group-hover:scale-105 shadow-sm">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="font-sans text-[0.88rem] font-bold text-slate-800 tracking-wider uppercase mb-1.5 leading-snug">
                        {feat.title}
                      </h3>
                      <p className="text-[0.82rem] leading-relaxed text-slate-500 text-justify">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

        {/* Bottom Achievements Stats Grid Row */}
        <ScrollReveal direction="up" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center border-t border-slate-100/90 pt-6 mt-8">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-3.5 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/10 transition-transform duration-300 group-hover:scale-110 shadow-sm">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block font-display text-[1.12rem] font-extrabold text-slate-800 leading-none">
                      <AnimatedCounter value={s.value} />
                    </span>
                    <span className="block text-[0.65rem] font-bold uppercase tracking-widest text-slate-400 mt-1.5 leading-none">
                      {s.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
