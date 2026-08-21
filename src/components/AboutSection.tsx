import { Eye, Target, GraduationCap, Globe, Sparkles, Briefcase, FileText, Users, Award, Handshake } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { InteractiveGlobe } from "./InteractiveGlobe";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: "12+", label: "Years Guiding Travellers", icon: Users },
  { value: "4,800+", label: "Visas Processed", icon: FileText },
  { value: "18", label: "Countries Covered", icon: Globe },
  { value: "Free", label: "Zero Fee Consultation", icon: Handshake },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white text-slate-800 pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Globe & Interactive Badges */}
          <ScrollReveal direction="left" delay={150}>
            <div className="relative">
              {/* Custom Animations Style Tag */}
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes float-slow {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-12px) rotate(2deg); }
                }
                @keyframes float-medium {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(12px) rotate(-2deg); }
                }
                @keyframes float-fast {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
              `}} />

              <div
                className="overflow-hidden rounded-[2.5rem] border border-[var(--gold)]/20 bg-slate-50/50 backdrop-blur-md"
                style={{ boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.05), 0 0 50px rgba(184, 123, 44, 0.02)" }}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 group/globe flex items-center justify-center">
                  
                  {/* Interactive 3D Golden Rotating Globe Component */}
                  <div className="absolute inset-0 w-full h-full z-[1]">
                    <InteractiveGlobe />
                  </div>

                  {/* Skyline Silhouette Overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-[2] opacity-[0.12]">
                    <svg className="w-full h-full text-[var(--gold)]" viewBox="0 0 400 100" fill="currentColor" preserveAspectRatio="none">
                      <rect x="10" y="30" width="15" height="70" />
                      <rect x="30" y="10" width="18" height="90" />
                      <rect x="52" y="40" width="14" height="60" />
                      <rect x="70" y="20" width="22" height="80" />
                      <path d="M 120 100 C 120 70, 135 60, 150 100 Z" />
                      <path d="M 140 100 C 140 65, 158 55, 175 100 Z" />
                      <path d="M 165 100 C 165 75, 180 70, 195 100 Z" />
                      <path d="M 185 100 C 185 85, 195 80, 205 100 Z" />
                      <path d="M 230 100 Q 280 40 330 100" stroke="currentColor" strokeWidth="2.5" fill="none" />
                      <path d="M 235 100 Q 280 45 325 100" stroke="currentColor" strokeWidth="1" fill="none" />
                      <rect x="350" y="30" width="16" height="70" />
                      <rect x="370" y="15" width="20" height="85" />
                    </svg>
                  </div>

                  {/* Flying Airplane Overlay */}
                  <div 
                    className="absolute top-28 right-12 z-[2] pointer-events-none opacity-40 rotate-[25deg]"
                    style={{ animation: "float-medium 6.5s ease-in-out infinite" }}
                  >
                    <svg className="w-8 h-8 text-[var(--gold)]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                    </svg>
                  </div>

                  {/* Floating Thematic Badges */}
                  {/* Badge 1: Study Abroad (Top Left) */}
                  <div 
                    className="absolute top-6 left-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-slow 7s ease-in-out infinite" }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 shadow-sm">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--gold)]">Study Abroad</span>
                      <span className="block text-[0.82rem] font-black text-slate-800 uppercase tracking-wide mt-0.5">Admissions & Visas</span>
                    </div>
                  </div>

                  {/* Badge 2: Global Visas (Middle Left) */}
                  <div 
                    className="absolute top-[46%] left-6 z-10 flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-fast 5s ease-in-out infinite" }}
                  >
                    <div className="flex -space-x-1.5">
                      <img src="https://flagcdn.com/w40/gb.png" className="h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm" alt="UK" />
                      <img src="https://flagcdn.com/w40/de.png" className="h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm" alt="Germany" />
                      <img src="https://flagcdn.com/w40/us.png" className="h-4 w-6 rounded-sm object-cover border border-white/10 shadow-sm" alt="USA" />
                    </div>
                    <span className="text-[0.72rem] font-extrabold uppercase tracking-widest text-slate-800">Global Visas</span>
                  </div>

                  {/* Badge 3: Work & Migrate (Bottom Left) */}
                  <div 
                    className="absolute bottom-6 left-6 z-10 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-medium 6s ease-in-out infinite" }}
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 shadow-sm">
                      <Briefcase className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-[var(--gold)]">Work & Migrate</span>
                      <span className="block text-[0.82rem] font-black text-slate-800 uppercase tracking-wide mt-0.5">Opportunities</span>
                    </div>
                  </div>

                  {/* Badge 4: 98% Approval (Bottom Right) */}
                  <div 
                    className="absolute bottom-6 right-6 z-10 flex flex-col items-center justify-center text-center px-5 py-3 rounded-2xl bg-white/95 border border-[var(--gold)]/20 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
                    style={{ animation: "float-slow 7.5s ease-in-out infinite" }}
                  >
                    <span className="block font-display text-2xl sm:text-3xl font-extrabold text-[var(--gold)] leading-none">98%</span>
                    <span className="block text-[0.65rem] sm:text-[0.72rem] font-extrabold uppercase tracking-widest text-slate-700 mt-1 leading-none">
                      Approval Rate
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Premium Text Content */}
          <ScrollReveal direction="right" delay={300}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] self-start">
                <span>About Us</span>
                <span className="text-xs shrink-0 select-none">✈️</span>
              </div>
              
              <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl">
                From your first question to the <span className="text-[var(--gold)] font-bold">check-in counter</span>
              </h2>
              <div className="h-px w-24 bg-gradient-to-r from-[var(--gold)] to-transparent" />
              
              <p className="text-[1.02rem] leading-relaxed text-slate-600 text-justify">
                mcCoy Global Consultancy is a boutique overseas advisory built on one
                simple belief: a visa is not paperwork, it is a <span className="text-[var(--gold)] font-semibold animate-pulse">life decision</span>. We sit
                with you, understand your profile, and shape a route that actually
                fits — study, skilled work, or family migration.
              </p>
              <p className="text-[1.02rem] leading-relaxed text-slate-600 text-justify">
                Documentation, applications, interview prep, tickets and pre-departure
                briefing — <span className="text-[var(--gold)] font-semibold">every step</span> is handled by a named consultant who stays with
                you until you walk through that terminal with your passport in hand.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Horizontal Curved Stats Block */}
        <ScrollReveal direction="up" delay={200}>
          <div 
            className="mt-16 rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center"
          >
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div 
                  key={s.label} 
                  className={`flex items-center gap-4 ${
                    idx > 0 ? "pt-4 lg:pt-0 border-slate-100" : ""
                  } ${
                    idx === 1 || idx === 3 ? "sm:pl-6 sm:border-l lg:pl-8 lg:border-l border-slate-100" : ""
                  } ${
                    idx === 2 ? "sm:border-l-0 lg:pl-8 lg:border-l border-slate-100" : ""
                  } ${
                    idx >= 2 ? "pt-4 sm:pt-4 lg:pt-0 sm:border-t lg:border-t-0 border-slate-100" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <div>
                    <span className="block font-display text-3xl font-extrabold text-[var(--gold)] leading-none">
                      <AnimatedCounter value={s.value} />
                    </span>
                    <span className="block text-[0.72rem] sm:text-[0.78rem] uppercase font-bold tracking-widest text-slate-500 mt-2 leading-none">
                      {s.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

      </div>

      {/* Vision & Mission Cards Row */}
      <div className="mx-auto max-w-7xl px-6 mt-12 sm:mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <ScrollReveal direction="up" delay={150}>
            <div 
              className="group relative rounded-3xl border border-slate-200/85 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)]/25 hover:shadow-[0_25px_50px_rgba(224,183,109,0.08)] overflow-hidden"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              {/* Left edge gold accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--gold)]/30 group-hover:bg-[var(--gold)] transition-colors duration-500" />
              
              {/* Soft decorative background gradient and glowing top-right flare on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--gold)]/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_20px_rgba(224,183,109,0.05)]">
                  <Eye className="h-6.5 w-6.5" />
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] mb-1 leading-none">Our Identity</span>
                  <h3 className="font-display text-2xl text-slate-800 leading-none">Our Vision</h3>
                </div>
              </div>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-slate-500 text-justify">
                To be the most trusted and client-centric global advisory, recognized for bridging the gap between local talent and international opportunities. We envision a world where borderless career and academic pursuits are seamless, straightforward, and accessible to every ambitious mind.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal direction="up" delay={300}>
            <div 
              className="group relative rounded-3xl border border-slate-200/85 bg-white p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--gold)]/25 hover:shadow-[0_25px_50px_rgba(224,183,109,0.08)] overflow-hidden"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              {/* Left edge gold accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--gold)]/30 group-hover:bg-[var(--gold)] transition-colors duration-500" />
              
              {/* Soft decorative background gradient and glowing top-right flare on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[var(--gold)]/6 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_20px_rgba(224,183,109,0.05)]">
                  <Target className="h-6.5 w-6.5" />
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] mb-1 leading-none">Our Commitment</span>
                  <h3 className="font-display text-2xl text-slate-800 leading-none">Our Mission</h3>
                </div>
              </div>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-slate-500 text-justify">
                To empower students and professionals with honest, transparent, and tailored counseling. We commit to supporting our clients at every touchpoint—from counseling and documentation to application tracking, visa training, and final check-in, maintaining a 98% approval rate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}