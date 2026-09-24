import React from "react";
import { 
  GraduationCap, 
  Plane, 
  Globe, 
  CheckCircle2, 
  Briefcase, 
  Ticket, 
  Landmark,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const visaServices = [
  {
    title: "Student Visa",
    icon: GraduationCap,
    image: "/service-student.jpg",
    color: "text-sky-400",
    bg: "bg-sky-500/15 border-sky-400/35 shadow-[0_0_18px_rgba(56,189,248,0.22)] group-hover:bg-sky-500/25 group-hover:border-sky-400/60",
    description: "Unlock global educational opportunities. We guide you from choosing the right university to submission and approval. Access quality education with high visa success rates.",
    features: [
      "End-to-end admission counseling",
      "IELTS / Duolingo / English prep support",
      "SOP writing & documentation guidance",
      "Mock visa interview sessions"
    ]
  },
  {
    title: "Tourism & Visitor Visa",
    icon: Plane,
    image: "/service-tourist.jpg",
    color: "text-cyan-400",
    bg: "bg-cyan-500/15 border-cyan-400/35 shadow-[0_0_18px_rgba(6,182,212,0.22)] group-hover:bg-cyan-500/25 group-hover:border-cyan-400/60",
    description: "Travel the world with zero stress. Whether it is visiting family, exploring destinations, or business meetings, we manage your visa formalities quickly and transparently.",
    features: [
      "Fast-track visa processing options",
      "Detailed document checking",
      "Flight and itinerary guidance",
      "Travel insurance assistance"
    ]
  },
  {
    title: "Opportunity Card Germany",
    countryCode: "de",
    icon: Briefcase,
    image: "/service-germany.jpg",
    color: "text-amber-400",
    bg: "bg-amber-500/15 border-amber-400/35 shadow-[0_0_18px_rgba(245,158,11,0.22)] group-hover:bg-amber-500/25 group-hover:border-amber-400/60",
    description: "Explore Germany's points-based job-seeking visa (Chancenkarte). We assess your eligibility, calculate points, and handle submissions for specialized visa programs.",
    features: [
      "Germany Opportunity Card (Chancenkarte)",
      "Points-based calculator & profile assessment",
      "Job search registry & cover support",
      "Unrestricted search visa advisory"
    ]
  },
  {
    title: "Youth Mobility Visa UK",
    countryCode: "gb",
    icon: Globe,
    image: "/service-uk.jpg",
    color: "text-rose-400",
    bg: "bg-rose-500/15 border-rose-400/35 shadow-[0_0_18px_rgba(244,63,94,0.22)] group-hover:bg-rose-500/25 group-hover:border-rose-400/60",
    description: "Live and work in the United Kingdom for up to 2 years. Our advisors help you navigate the qualifying criteria, age limits, financial requirements, and biometric registrations.",
    features: [
      "Age 18-30 Eligibility Assessment",
      "Financial maintenance proof guidance",
      "Biometric slot booking & document checklist",
      "2-year stay and unrestricted work permit support"
    ]
  },
  {
    title: "Flight Ticket Booking",
    icon: Ticket,
    image: "/service-flight.jpg",
    color: "text-purple-400",
    bg: "bg-purple-500/15 border-purple-400/35 shadow-[0_0_18px_rgba(192,132,252,0.22)] group-hover:bg-purple-500/25 group-hover:border-purple-400/60",
    description: "Fly out with ease and comfort. We secure the best routes, optimal flight schedules, and special student discount fares for your flights to any global destination.",
    features: [
      "Student baggage allowance deals",
      "Flexible ticket date-change options",
      "Transit visa assistance if needed",
      "Pre-departure travel checklist"
    ]
  },
  {
    title: "Education Loan Assistance",
    icon: Landmark,
    image: "/service-loan.jpg",
    color: "text-emerald-400",
    bg: "bg-emerald-500/15 border-emerald-400/35 shadow-[0_0_18px_rgba(52,211,153,0.22)] group-hover:bg-emerald-500/25 group-hover:border-emerald-400/60",
    description: "Finance your overseas education stress-free. We partner with leading financial institutions to secure quick approvals, low-interest student loans, and collateral-free options.",
    features: [
      "Pre-visa approval loan letters",
      "Collateral & collateral-free options",
      "Special student interest rates",
      "Fast-track documentation support"
    ]
  }
];

export function ServicesSection() {
  const highlightTitle = (title: string) => {
    if (title.includes("Germany")) {
      return (
        <>
          Opportunity Card <span className="text-[var(--gold)]">Germany</span>
        </>
      );
    }
    if (title.includes("UK")) {
      return (
        <>
          Youth Mobility Visa <span className="text-[var(--gold)]">UK</span>
        </>
      );
    }
    return title;
  };

  const handleServiceClick = (service: (typeof visaServices)[0]) => {
    if (
      service.title.toLowerCase().includes("tourism") ||
      service.title.toLowerCase().includes("visitor") ||
      service.title.toLowerCase().includes("destination")
    ) {
      const el = document.getElementById("destinations");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }

    if (service.countryCode && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("select-country", { detail: { countryCode: service.countryCode } }));
    }

    const el = document.getElementById("free-assessment") || document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        const nameInput = document.getElementById("name");
        if (nameInput) nameInput.focus();
      }, 450);
    }
  };

  return (
    <section id="services" className="bg-[#090e1a] text-white pt-10 sm:pt-16 pb-14 sm:pb-20 relative overflow-hidden border-b border-slate-800 scroll-mt-20 sm:scroll-mt-24">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient lighting glows behind sections */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 relative z-10">

        {/* Section Header (Visa Services) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-6 sm:mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1224] border border-amber-400/50 px-3.5 sm:px-4 py-1.5 text-[0.70rem] sm:text-[0.75rem] font-black uppercase tracking-[0.22em] text-amber-300 shadow-[0_4px_16px_rgba(11,18,36,0.18)] mb-3">
              <Sparkles className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400 animate-pulse" />
              <span className="text-amber-300 tracking-[0.22em] font-extrabold">Our Services</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl leading-tight text-white font-black tracking-tight text-left">
              Visa <span className="text-[var(--gold)]">Pathways</span> & Solutions
            </h2>

            <div className="mt-3.5 sm:mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-3 sm:mt-4.5 text-[0.90rem] sm:text-[1.02rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              McCoy Global Consultancy provides comprehensive solutions, from standard student visa arrangements to tourist visa facilitation across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Visa Services 1 Card Per Row Seamless Stack */}
        <ScrollReveal direction="up" delay={150}>
          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl border border-slate-800/80 bg-slate-950/60 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm divide-y divide-slate-800/80">
            {visaServices.map((service, index) => {
              const Icon = service.icon;
              const isTourOrMap = service.title.toLowerCase().includes("tourism") || service.title.toLowerCase().includes("visitor");

              return (
                <div
                  key={service.title}
                  onClick={() => handleServiceClick(service)}
                  className="group relative flex flex-col justify-between p-3.5 sm:p-5 lg:p-6 transition-all duration-300 cursor-pointer select-none bg-slate-950/40 hover:bg-slate-900/80 overflow-hidden"
                >
                  {/* Left gold accent bar on hover */}
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-300 z-20" />

                  {/* Subtle background progress number watermark */}
                  <div className="absolute right-3 sm:right-6 bottom-2 sm:bottom-3 text-3xl sm:text-6xl lg:text-7xl font-black select-none pointer-events-none font-display z-0 text-slate-800/20 group-hover:text-[var(--gold)]/10 transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

                  <div className="flex flex-col sm:flex-row gap-3.5 sm:gap-5 lg:gap-7 items-stretch w-full relative z-10">
                    {/* Left/Main content section */}
                    <div className="flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        {/* Icon & Title Row */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5 mb-1.5 sm:mb-2">
                          <div className={`flex h-7 w-7 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg sm:rounded-xl border ${service.bg} ${service.color} transition-all duration-300 shadow-sm`}>
                            <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
                          </div>
                          <h3 className="font-display text-sm sm:text-lg lg:text-xl font-bold text-white group-hover:text-[var(--gold)] transition-colors duration-300 tracking-tight leading-tight">
                            {highlightTitle(service.title)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl mb-2.5 sm:mb-3">
                          {service.description}
                        </p>

                        {/* All Features (Responsive 1-col on tiny mobile, 2-col on mobile, 4-col on tablet/desktop) */}
                        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-4 gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
                          {service.features.map((feat) => (
                            <div 
                              key={feat} 
                              className="flex items-center gap-1.5 text-[0.68rem] sm:text-xs text-slate-300 bg-slate-900/80 border border-slate-800/80 px-2 py-1 rounded-md group-hover:border-[var(--gold)]/30 transition-colors"
                            >
                              <CheckCircle2 className="h-3 w-3 text-[var(--gold)] shrink-0" />
                              <span className="font-medium truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Details Link */}
                      <div 
                        className="mt-auto pt-2 border-t border-slate-800/60 flex items-center justify-between text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-[var(--gold)] group-hover:text-amber-300"
                      >
                        <span className="flex items-center gap-1">
                          {isTourOrMap ? "Explore Destinations" : "Enquire Details"}
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Right panel: Side photo thumbnail (stacked above text on mobile, on right side on sm:) */}
                    <div className="relative w-full sm:w-44 md:w-56 lg:w-64 h-32 sm:h-auto min-h-[120px] rounded-lg sm:rounded-xl overflow-hidden shrink-0 border border-slate-800 group-hover:border-[var(--gold)]/40 transition-colors shadow-sm self-stretch order-first sm:order-last">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Country Flag Badge overlay */}
                      {service.countryCode && (
                        <div className="absolute top-2 right-2 z-20 shadow-md border border-slate-800 rounded overflow-hidden">
                          <img
                            src={`https://flagcdn.com/w80/${service.countryCode}.png`}
                            className="h-4 w-6 sm:h-5 sm:w-7.5 object-cover"
                            alt="Country Flag"
                          />
                        </div>
                      )}
                    </div>
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
