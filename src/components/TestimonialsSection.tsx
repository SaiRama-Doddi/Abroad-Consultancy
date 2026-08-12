import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Testimonial {
  name: string;
  location: string;
  program: string;
  rating: number;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Kurapati",
    location: "USA",
    program: "Masters in Computer Science",
    rating: 5,
    quote: "Mani Abroad Consultancy made my dream of studying in the US a reality. They helped me choose the right university, guided me through the SOP drafting, and prepped me for the visa interview. The support was outstanding!",
    initials: "RK"
  },
  {
    name: "Aisha Mohammed",
    location: "Singapore",
    program: "Diploma in Logistics Management (NSTC)",
    rating: 5,
    quote: "The Singapore 6+6 package (6 months study + 6 months paid internship) recommended by Mani Abroad was a game-changer. They managed the visa process seamlessly and guided me all the way to check-in.",
    initials: "AM"
  },
  {
    name: "Dr. Sandeep Yadav",
    location: "Georgia",
    program: "MBBS (Doctor of Medicine)",
    rating: 5,
    quote: "Getting admission for my MBBS in Georgia was simple and stress-free with their NEET-free counseling process. They guided me through translations, foreign registrations, and even helped with flight ticketing.",
    initials: "SY"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-b from-background to-muted/40 py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Testimonials</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              What Our Clients Say
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
            <p className="mt-6 text-[1.02rem] text-muted-foreground leading-relaxed">
              Real success stories from students and professionals who successfully migrated, studied, and advanced their careers overseas.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <ScrollReveal 
              key={t.name} 
              direction="up" 
              delay={200 + index * 150} 
              className="flex"
            >
              <div 
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_rgba(224,183,109,0.12)] overflow-hidden w-full"
                style={{ boxShadow: "var(--shadow-premium)" }}
              >
                {/* Soft decorative background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                  {/* Quote Icon & Stars */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[var(--gold)] text-[var(--gold)]" />
                      ))}
                    </div>
                    <Quote className="h-7 w-7 text-[var(--gold)]/20 group-hover:text-[var(--gold)]/35 transition-colors duration-300" />
                  </div>

                  {/* Quote Content */}
                  <p className="text-sm leading-relaxed text-muted-foreground italic mb-8 relative z-10">
                    "{t.quote}"
                  </p>
                </div>

                {/* User Meta */}
                <div className="flex items-center gap-4 mt-auto border-t border-border/40 pt-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-[#0b1224] tracking-wider uppercase" style={{ background: "var(--gradient-gold)" }}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-extrabold text-foreground tracking-wide uppercase leading-none">
                      {t.name}
                    </h4>
                    <span className="block mt-1.5 text-xs text-muted-foreground">
                      {t.program} &middot; <strong className="text-[var(--gold)] font-medium">{t.location}</strong>
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
