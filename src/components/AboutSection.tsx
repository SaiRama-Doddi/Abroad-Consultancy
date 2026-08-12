import { Eye, Target, GraduationCap, Globe, Sparkles, Briefcase, FileText } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: "12+", label: "Years guiding travellers" },
  { value: "4,800+", label: "Visas processed" },
  { value: "18", label: "Countries covered" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-5 sm:py-6">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
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
              className="overflow-hidden rounded-[2rem] border border-border"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#060a15] group/globe flex items-center justify-center">
                
                {/* Rotating Globe Video Background */}
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-screen"
                  src="/about-globe.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-hidden="true"
                />
                
                {/* Radial gold gradient back glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,183,109,0.12)_0%,transparent_75%)] pointer-events-none" />
                
                {/* Dark overlay blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a15]/90 via-transparent to-[#060a15]/20 pointer-events-none" />

                {/* Floating Thematic Badges */}
                {/* Badge 1: University Admissions & Cap */}
                <div 
                  className="absolute top-8 left-6 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#0c1224]/85 border border-[var(--gold)]/20 backdrop-blur-md shadow-lg"
                  style={{ animation: "float-slow 7s ease-in-out infinite" }}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20">
                    <GraduationCap className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <span className="block text-[0.58rem] font-extrabold uppercase tracking-wider text-muted-foreground">Study Abroad</span>
                    <span className="block text-[0.68rem] font-bold text-foreground mt-0.5">Admissions & Visas</span>
                  </div>
                </div>

                {/* Badge 2: Germany Opportunity Card (Migrate) */}
                <div 
                  className="absolute bottom-16 right-6 flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#0c1224]/85 border border-[var(--gold)]/20 backdrop-blur-md shadow-lg"
                  style={{ animation: "float-medium 6s ease-in-out infinite" }}
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block text-[0.58rem] font-extrabold uppercase tracking-wider text-muted-foreground">Work & Migrate</span>
                    <span className="block text-[0.68rem] font-bold text-foreground mt-0.5">Opportunity Card Route</span>
                  </div>
                </div>

                {/* Badge 3: World Flags Orbit */}
                <div 
                  className="absolute top-1/2 left-6 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#0c1224]/75 border border-border/40 backdrop-blur-md shadow-md"
                  style={{ animation: "float-fast 5s ease-in-out infinite" }}
                >
                  <div className="flex -space-x-1.5">
                    <img src="https://flagcdn.com/w40/gb.png" className="h-3.5 w-5 rounded-sm object-cover border border-border/40" alt="UK" />
                    <img src="https://flagcdn.com/w40/de.png" className="h-3.5 w-5 rounded-sm object-cover border border-border/40" alt="Germany" />
                    <img src="https://flagcdn.com/w40/us.png" className="h-3.5 w-5 rounded-sm object-cover border border-border/40" alt="USA" />
                  </div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground">Global Visas</span>
                </div>

              </div>
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card px-6 py-5 sm:block" style={{ boxShadow: "var(--shadow-premium)" }}>
              <p className="font-display text-3xl text-primary">98%</p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
                Approval rate
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={300}>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">About Us</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              From your first question to the check-in counter
            </h2>
            <div className="mt-6 h-px w-24" style={{ background: "var(--gradient-gold)" }} />
            <p className="mt-7 text-[1.02rem] leading-relaxed text-muted-foreground">
              Mani Abroad Consultancy is a boutique overseas advisory built on one
              simple belief: a visa is not paperwork, it is a life decision. We sit
              with you, understand your profile, and shape a route that actually
              fits — study, skilled work, or family migration.
            </p>
            <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
              Documentation, applications, interview prep, tickets and pre-departure
              briefing — every step is handled by a named consultant who stays with
              you until you walk through that terminal with your passport in hand.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-primary">{s.value}</dt>
                  <dd className="mt-2 text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </ScrollReveal>
      </div>

      {/* Vision & Mission Cards Row */}
      <div className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <ScrollReveal direction="up" delay={150}>
            <div 
              className="group relative rounded-3xl border border-border bg-card p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(224,183,109,0.15)] overflow-hidden"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              {/* Soft decorative background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-foreground">Our Vision</h3>
              </div>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                To be the most trusted and client-centric global advisory, recognized for bridging the gap between local talent and international opportunities. We envision a world where borderless career and academic pursuits are seamless, straightforward, and accessible to every ambitious mind.
              </p>
            </div>
          </ScrollReveal>

          {/* Mission Card */}
          <ScrollReveal direction="up" delay={300}>
            <div 
              className="group relative rounded-3xl border border-border bg-card p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(224,183,109,0.15)] overflow-hidden"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              {/* Soft decorative background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-transform duration-500 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl text-foreground">Our Mission</h3>
              </div>
              <p className="mt-6 text-[0.98rem] leading-relaxed text-muted-foreground">
                To empower students and professionals with honest, transparent, and tailored counseling. We commit to supporting our clients at every touchpoint—from counseling and documentation to application tracking, visa training, and final check-in, maintaining a 98% approval rate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}