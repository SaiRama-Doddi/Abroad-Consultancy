import { useState, useRef } from "react";
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Testimonial {
  name: string;
  location: string;
  countryCode: string;
  program: string;
  rating: number;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Kurapati",
    location: "USA",
    countryCode: "us",
    program: "Masters in Computer Science",
    rating: 5,
    quote: "mcCoy Global Consultancy made my dream of studying in the US a reality. They helped me choose the right university, guided me through the SOP drafting, and prepped me for the visa interview. The support was outstanding!",
    initials: "RK"
  },
  {
    name: "Aisha Mohammed",
    location: "Singapore",
    countryCode: "sg",
    program: "Diploma in Logistics Management (NSTC)",
    rating: 5,
    quote: "The Singapore 6+6 package (6 months study + 6 months paid internship) recommended by mcCoy Global was a game-changer. They managed the visa process seamlessly and guided me all the way to check-in.",
    initials: "AM"
  },
  {
    name: "Dr. Sandeep Yadav",
    location: "Georgia",
    countryCode: "ge",
    program: "MBBS (Doctor of Medicine)",
    rating: 5,
    quote: "Getting admission for my MBBS in Georgia was simple and stress-free with their NEET-free counseling process. They guided me through translations, foreign registrations, and even helped with flight ticketing.",
    initials: "SY"
  },
  {
    name: "Priya Sharma",
    location: "Canada",
    countryCode: "ca",
    program: "Postgraduate in Project Management",
    rating: 5,
    quote: "mcCoy Global helped me secure my admission in Canada and guided me through the SDS visa process. Their step-by-step assistance in documentation and GIC setup made the process completely stress-free!",
    initials: "PS"
  },
  {
    name: "Rohan Das",
    location: "Australia",
    countryCode: "au",
    program: "Bachelor of Business Info Systems",
    rating: 5,
    quote: "Extremely thankful to mcCoy for guiding me through my Australian Subclass 500 visa. The visa grant was so fast! Their mock interview sessions prepared me perfectly for the GTE requirements.",
    initials: "RD"
  },
  {
    name: "Fatima Al-Sayed",
    location: "United Kingdom",
    countryCode: "gb",
    program: "MSc in Data Science · Manchester",
    rating: 5,
    quote: "Securing my UK student visa was super easy with mcCoy. They checked all my financial documentation, helped with the VFS process, and followed up at every step until I landed in Manchester.",
    initials: "FA"
  }
];

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75; // Scroll 75% of container width
      const targetScroll = direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: "smooth"
      });
      setScrollPosition(targetScroll);
    }
  };

  return (
    <section id="testimonials" className="bg-[#fcfbf9] pt-6 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header with Slider Navigation Controls */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 w-full">
            <div className="text-left flex flex-col items-start max-w-2xl">
              {/* Premium Capsule Subtitle Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
                <Quote className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
                <span>Testimonials</span>
              </div>
              
              <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left">
                What Our <span className="text-[var(--gold)] font-bold">Clients</span> Say
              </h2>

              <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

              <p className="mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
                Real success stories from students and professionals who successfully migrated, studied, and advanced their careers overseas.
              </p>
            </div>

            {/* Premium Navigation Controls */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() => handleScroll("left")}
                className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white hover:border-[var(--gold)] text-slate-500 hover:text-[var(--gold)] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-x-0.5"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="flex items-center justify-center h-10 w-10 rounded-full border border-slate-200 bg-white hover:border-[var(--gold)] text-slate-500 hover:text-[var(--gold)] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:translate-x-0.5"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials Slider Wrapper with Gradient Fade Overlays */}
        <div className="relative w-full overflow-visible">
          {/* Left Edge Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-[#fcfbf9] to-transparent pointer-events-none z-20" />
          
          {/* Right Edge Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-[#fcfbf9] to-transparent pointer-events-none z-20" />

          {/* Draggable/Scrollable Row */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-2 px-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, index) => (
              <div 
                key={t.name}
                className="snap-start shrink-0 w-[290px] sm:w-[350px] md:w-[380px] group relative flex flex-col justify-between rounded-3xl border border-slate-150/70 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden"
              >
                {/* Thick vertical left-border gold highlight */}
                <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[var(--gold)]/20 group-hover:bg-[var(--gold)] transition-colors duration-300 z-20" />

                {/* Top gold bar accent panel */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Shine effect overlay */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none z-20" />

                {/* Faint Background Watermark Quote Icon */}
                <div className="absolute top-8 right-6 text-7xl font-display font-black text-slate-50/50 select-none pointer-events-none transition-colors duration-500 group-hover:text-[var(--gold)]/5 z-0">
                  ”
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Header Row: Stars & Verified Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex gap-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4.5 w-4.5 fill-[var(--gold)] text-[var(--gold)] drop-shadow-sm" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-widest text-emerald-600 shadow-sm">
                        <ShieldCheck className="h-3 w-3" /> Verified
                      </span>
                    </div>

                    {/* Quote Content */}
                    <p className="text-[0.92rem] leading-relaxed text-slate-600 italic mb-8 text-justify pr-2 font-light">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* User Meta Row */}
                  <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                    {/* Avatar Ring Badge */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-[#0b1224] tracking-wider uppercase border border-[var(--gold)]/30 shadow-inner group-hover:border-[var(--gold)] transition-colors duration-300" style={{ background: "var(--gradient-gold)" }}>
                      {t.initials}
                    </div>
                    <div className="text-left">
                      <h4 className="font-display text-sm font-extrabold text-slate-800 tracking-wide uppercase leading-none group-hover:text-[var(--gold)] transition-colors duration-300">
                        {t.name}
                      </h4>
                      <span className="block mt-2 text-[0.72rem] text-slate-500 leading-none">
                        {t.program} &middot; <strong className="text-[var(--gold)] font-bold flex items-center gap-1 mt-1">
                          <img 
                            src={`https://flagcdn.com/w40/${t.countryCode}.png`} 
                            width="14"
                            alt="flag"
                            className="rounded-sm shadow-sm"
                          />
                          {t.location}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Faint Background Indexing Watermark */}
                <div className="absolute right-3 bottom-1 text-7xl font-display font-black text-slate-100/55 select-none pointer-events-none transition-colors duration-500 group-hover:text-[var(--gold)]/5 z-0">
                  {`0${index + 1}`}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
