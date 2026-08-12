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
  Tag 
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ExpertiseItem {
  title: string;
  icon: React.ComponentType<any>;
}

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Personalized Guidance",
    icon: Target
  },
  {
    title: "Pre & Post-Landing Support",
    icon: Globe
  },
  {
    title: "Career Counseling",
    icon: Briefcase
  },
  {
    title: "Country/Course/University Selection",
    icon: GraduationCap
  },
  {
    title: "Application Assistance",
    icon: FileCheck
  },
  {
    title: "Admission in Top Universities",
    icon: Award
  },
  {
    title: "GRE, TOEFL, IELTS, Duolingo, PTE Prep",
    icon: BookOpen
  },
  {
    title: "Financial Advice",
    icon: DollarSign
  },
  {
    title: "Visa Counseling",
    icon: Compass
  },
  {
    title: "Discounts & Exam Training",
    icon: Tag
  }
];

export function ExpertiseSection() {
  return (
    <section className="bg-background/40 py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Core Competencies</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Our Expertise
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
            <p className="mt-6 text-[1.02rem] text-muted-foreground leading-relaxed">
              We don't just guide you; we ignite your career potential through dedicated end-to-end overseas migration counseling.
            </p>
          </div>
        </ScrollReveal>

        {/* Expertise Grid */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {expertiseItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal 
                key={item.title} 
                direction="up" 
                delay={100 + (idx % 5) * 100}
                className="flex"
              >
                <div
                  className="group relative flex flex-col items-center justify-between text-center rounded-2xl border border-border bg-card/45 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:bg-gradient-to-b hover:from-[var(--gold)]/15 hover:to-[var(--gold)]/5 hover:border-[var(--gold)]/45 overflow-hidden min-h-[190px] hover:shadow-[0_15px_30px_rgba(224,183,109,0.15)] w-full"
                  style={{ boxShadow: "var(--shadow-premium)" }}
                >
                  {/* Background gold tint glow for hovered state */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 z-10" />

                  {/* Icon Container */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border bg-background text-[var(--gold)] border-border/80 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-[var(--gold)]/20 group-hover:border-[var(--gold)]/40 group-hover:shadow-[0_0_15px_rgba(224,183,109,0.3)] z-20">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title with translation on hover */}
                  <h4 className="mt-4 font-sans text-xs font-bold uppercase tracking-wider text-foreground leading-relaxed group-hover:text-[var(--gold)] group-hover:translate-y-[-2px] transition-all duration-300 z-20">
                    {item.title}
                  </h4>

                  {/* Fine Decorative Bottom Line visible on hover */}
                  <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-[var(--gold)] rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
