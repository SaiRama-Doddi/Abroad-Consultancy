import { Handshake, Headphones, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface StatPill {
  value: string;
  label: string;
  colorClass: string;
}

const stats: StatPill[] = [
  {
    value: "98% Success",
    label: "Visa Approval Rate",
    colorClass: "bg-orange-50 text-orange-700 border-orange-200/60 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/20"
  },
  {
    value: "5000+ Students",
    label: "Secured Admissions",
    colorClass: "bg-blue-50 text-blue-700 border-blue-200/60 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/20"
  },
  {
    value: "350+ Universities",
    label: "Global Tie-ups",
    colorClass: "bg-emerald-50 text-emerald-700 border-emerald-200/60 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20"
  },
  {
    value: "12+ Years",
    label: "Guiding Aspirants",
    colorClass: "bg-purple-50 text-purple-700 border-purple-200/60 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/20"
  },
  {
    value: "15+ Countries",
    label: "Global Partnerships",
    colorClass: "bg-indigo-50 text-indigo-700 border-indigo-200/60 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20"
  },
  {
    value: "Most Trusted",
    label: "Advisory in Hyderabad",
    colorClass: "bg-rose-50 text-rose-700 border-rose-200/60 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-500/20"
  }
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
    <section className="bg-background py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Why Choose Us</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Our Leadership & Achievements
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-12 items-center">
          
          {/* Left Column: Leadership Card & Pill Stats */}
          <div className="lg:col-span-6 space-y-6">
            {/* CEO Profile Card */}
            <ScrollReveal direction="left" delay={200}>
              <div className="group relative p-8 rounded-3xl border border-[var(--gold)]/20 bg-gradient-to-br from-[#0c1224] to-[#060a15] text-white shadow-[0_20px_50px_rgba(6,10,21,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="flex items-center gap-6">
                  <div className="relative h-20 w-20 shrink-0 rounded-full border-2 border-[var(--gold)] p-0.5 overflow-hidden shadow-[0_0_20px_rgba(224,183,109,0.3)] bg-slate-800">
                    <img 
                      src="/founder.png" 
                      alt="Mani Kumar" 
                      className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-wide text-white">Mani Kumar</h3>
                    <span className="block mt-1 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[var(--gold)]">
                      Founder & Managing Director
                    </span>
                  </div>
                </div>
                
                <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
                
                <p className="text-xs leading-relaxed text-white/70 italic relative z-10">
                  "Our mission is to shape clear, stress-free visa pathways and secure admissions in world-class institutions with absolute transparency and integrity."
                </p>
              </div>
            </ScrollReveal>

            {/* Achievement Stats Grid */}
            <ScrollReveal direction="left" delay={350}>
              <div className="grid gap-4 grid-cols-2 max-w-lg mx-auto lg:mx-0">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--gold)]/40 hover:shadow-[0_10px_25px_rgba(224,183,109,0.08)] overflow-hidden"
                    style={{ boxShadow: "var(--shadow-premium)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                    
                    <div className="relative z-10 flex flex-col">
                      <span className="font-display text-2xl font-extrabold tracking-tight bg-gradient-to-r from-[var(--gold-soft)] via-[var(--gold)] to-[var(--gold-soft)] bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-300">
                        {stat.value}
                      </span>
                      <span className="mt-2.5 text-[0.68rem] font-bold uppercase tracking-wider text-muted-foreground leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Why Trust Us Cards */}
          <div className="lg:col-span-6 space-y-8">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <ScrollReveal key={feat.title} direction="right" delay={150 + idx * 120}>
                  <div
                    className="group relative flex gap-6 rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_rgba(224,183,109,0.12)] overflow-hidden"
                    style={{ boxShadow: "var(--shadow-premium)" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    {/* Text Content with transition offset */}
                    <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                      <h3 className="font-sans text-base font-extrabold text-foreground tracking-wide uppercase mb-2">
                        {feat.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
