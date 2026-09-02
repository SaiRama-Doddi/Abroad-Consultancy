import React, { useState, useEffect, useRef } from "react";
import { 
  GraduationCap, 
  Plane, 
  Globe, 
  CheckCircle2, 
  BookOpen, 
  Briefcase, 
  Ticket, 
  Landmark,
  ChevronRight 
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Country {
  name: string;
  code: string;
  region: "hubs" | "europe" | "asia";
  courses: string[];
  eligibility?: string;
  highlights?: string[];
  bgImage: string;
}

const visaServices = [
  {
    title: "Student Visa",
    icon: GraduationCap,
    image: "/service-student.jpg",
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
    description: "Finance your overseas education stress-free. We partner with leading financial institutions to secure quick approvals, low-interest student loans, and collateral-free options.",
    features: [
      "Pre-visa approval loan letters",
      "Collateral & collateral-free options",
      "Special student interest rates",
      "Fast-track documentation support"
    ]
  }
];

const countries: Country[] = [
  // Major English-Speaking Hubs
  {
    name: "USA",
    code: "us",
    region: "hubs",
    courses: ["MS", "MBA", "Engineering", "Computer Science"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["OPT work opportunities", "World-class research", "500+ universities"],
    bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "United Kingdom",
    code: "gb",
    region: "hubs",
    courses: ["Undergraduate Degrees", "Postgraduate Masters", "Youth Mobility Scheme"],
    eligibility: "Intermediate / Bachelors / Age 18-30",
    highlights: ["Live & work up to 2 years", "2-Year Post Study Work (PSW) Visa"],
    bgImage: "https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Australia",
    code: "au",
    region: "hubs",
    courses: ["Vocational VET", "Bachelors Programs", "Masters & PhD Research"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Post-Study Work rights (up to 4+ years)", "High standard of living and student cities"],
    bgImage: "https://images.unsplash.com/photo-1524413840003-058746736ef1?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Canada",
    code: "ca",
    region: "hubs",
    courses: ["Post-Graduate Diplomas", "Bachelors Degrees", "Masters (Co-op)"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Post-Graduation Work Permit (PGWP)", "Straightforward pathways to PR"],
    bgImage: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=600&q=80"
  },

  // Europe
  {
    name: "Germany",
    code: "de",
    region: "europe",
    courses: ["Bachelors & Masters", "Opportunity Card (Chancenkarte)", "MBA & Engineering"],
    eligibility: "Intermediate / Bachelors / Points-based System",
    highlights: ["Opportunity Card: Job search permit", "Zero tuition fees at public universities"],
    bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Poland",
    code: "pl",
    region: "europe",
    courses: ["Bachelors & Masters Degrees", "Engineering & IT Specializations"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Affordable tuition fees", "Low cost of living", "Schengen area access"],
    bgImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Netherlands",
    code: "nl",
    region: "europe",
    courses: ["Bachelors Programs", "Research & Applied Sciences Masters"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Highly innovative education system", "1-year orientation visa for graduates"],
    bgImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Italy",
    code: "it",
    region: "europe",
    courses: ["Art & Design Degrees", "Bachelors & Masters in English"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Regional scholarships & fee waivers", "Rich cultural heritage & historic universities"],
    bgImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "France",
    code: "fr",
    region: "europe",
    courses: ["Grandes Écoles Masters", "Luxury & Culinary Arts", "Business & Engineering"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["5-year short-stay visa for PG graduates", "Partial housing subsidies (CAF)"],
    bgImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Cyprus",
    code: "cy",
    region: "europe",
    courses: ["Foundation Courses", "Bachelors & Masters Degrees"],
    eligibility: "Intermediate Pass",
    highlights: ["No IELTS options available", "Affordable European educational standard"],
    bgImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Georgia",
    code: "ge",
    region: "europe",
    courses: ["MBBS / Doctor of Medicine", "Bachelors of Medicine"],
    eligibility: "Intermediate Pass (BiPC stream)",
    highlights: ["WHO & NMC recognized medical degrees", "Direct admission without NEET score requirements"],
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
  },

  // Asia & Middle East
  {
    name: "Dubai",
    code: "ae",
    region: "asia",
    courses: ["Undergraduate Diplomas", "Hotel Management", "Bachelors & Masters Degrees"],
    eligibility: "10th / 12th / Graduate Pass",
    highlights: ["Thriving hospitality & business hub", "Easy visa with study-to-work transfer"],
    bgImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Singapore",
    code: "sg",
    region: "asia",
    courses: ["Leisure & Events Management", "Logistics Management with AI", "Hotel Management"],
    eligibility: "10th Grade / Secondary Pass",
    highlights: ["6 Months Study + 6 Months Paid Internship", "Highly safe global financial capital"],
    bgImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Malaysia",
    code: "my",
    region: "asia",
    courses: ["Hotel Management", "Hospitality Diplomas", "Dual-Degree Programs"],
    eligibility: "10th / 12th Pass",
    highlights: ["Cost-effective Asian study hub", "Easy transfer pathways to UK and Australia"],
    bgImage: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Mauritius",
    code: "mu",
    region: "asia",
    courses: ["Business Management", "Hospitality & Tourism Management"],
    eligibility: "10th Pass (Eligibility)",
    highlights: ["No IELTS requirement", "Work part-time while studying", "Stunning island country"],
    bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
  }
];

// Custom 3D Parallax repeatable reveal component
function FeatureCardReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] [transform-style:preserve-3d] ${className} ${
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

export function ServicesSection() {
  const [selectedRegion, setSelectedRegion] = useState<"all" | "hubs" | "europe" | "asia">("all");

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

  const filteredCountries = countries.filter(
    (c) => selectedRegion === "all" || c.region === selectedRegion
  );

  return (
    <section id="services" className="bg-[#090e1a] text-white pt-16 pb-16 relative overflow-hidden border-b border-slate-800">
      {/* Decorative background grid elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#e0b76d_1.2px,transparent_1.2px)] [background-size:24px_24px]" />
      
      {/* Ambient lighting glows behind sections */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--gold)]/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">

        {/* Destinations Explorer Title (Global Opportunities) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-10 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.08)] mb-3.5">
              <Globe className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Global Opportunities</span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl font-black tracking-tight text-left">
              Explore Study <span className="text-[var(--gold)]">Destinations</span>
            </h2>

            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4.5 text-[1.02rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Select a region below to filter available countries and explore educational pathways.
            </p>
          </div>
        </ScrollReveal>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-start gap-2.5 mb-10">
          {(["all", "hubs", "europe", "asia"] as const).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`rounded-full px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 border ${selectedRegion === region
                  ? "text-[#0b1224] border-transparent shadow-[0_0_15px_rgba(224,183,109,0.3)] scale-105"
                  : "text-slate-400 hover:text-white bg-slate-950/40 border-slate-800"
                }`}
              style={{
                background: selectedRegion === region ? "var(--gradient-gold)" : undefined
              }}
            >
              {region === "all" && "All Countries"}
              {region === "hubs" && "Major Hubs"}
              {region === "europe" && "Europe"}
              {region === "asia" && "Asia & Middle East"}
            </button>
          ))}
        </div>

        {/* Countries Grid: 5 columns on desktop, responsive across all screen sizes */}
        <div className="grid gap-4 sm:gap-5 lg:gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-16 [perspective:1000px]">
          {filteredCountries.map((country, idx) => (
            <FeatureCardReveal
              key={country.name}
              delay={80 + (idx % 5) * 60}
              className="flex [transform-style:preserve-3d]"
            >
              <div
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/40 transition-all duration-500 overflow-hidden w-full [transform-style:preserve-3d] hover:border-[var(--gold)]/55 hover:bg-slate-900/60 hover:[transform:rotateX(4deg)_rotateY(-4deg)_translateZ(12px)] hover:shadow-[0_20px_50px_rgba(184,123,44,0.12)] select-text"
              >
                {/* Accent gold light glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                {/* Top Half: Full Country Flag Background with name overlay */}
                <div className="h-32 sm:h-36 md:h-38 relative overflow-hidden w-full flex items-center justify-center rounded-t-2xl border-b border-slate-800/80">
                  {/* Full Flag background - occupies the entire top half */}
                  <img 
                    src={`https://flagcdn.com/w640/${country.code}.png`}
                    className="absolute inset-0 w-full h-full object-cover brightness-[0.45] group-hover:scale-105 transition-transform duration-700 pointer-events-none" 
                    alt={`${country.name} Flag Background`}
                  />
                  {/* Country Name overlay - lifts in 3D */}
                  <div className="relative z-10 [transform:translateZ(25px)] text-center px-2">
                    <span className="font-display text-base sm:text-lg md:text-xl font-black text-white tracking-tight uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {country.name}
                    </span>
                  </div>
                </div>

                {/* Bottom Half: Details content */}
                <div className="p-4 sm:p-4.5 flex flex-col flex-1 justify-between bg-slate-950/20 [transform:translateZ(15px)] z-20">
                  <div>
                    {/* Popular courses */}
                    <div className="text-[0.75rem] sm:text-[0.78rem] font-bold text-slate-300 leading-snug">
                      <span className="text-[var(--gold)] uppercase tracking-wider text-[0.64rem] block mb-1">Popular programs</span>
                      <p className="line-clamp-2">{country.courses.join(", ")}</p>
                    </div>

                    {/* Highlights */}
                    {country.highlights && country.highlights.length > 0 && (
                      <p className="mt-2.5 text-[0.70rem] leading-snug text-slate-400 font-medium line-clamp-2">
                        {country.highlights.join(" · ")}
                      </p>
                    )}

                    {/* Eligibility details */}
                    {country.eligibility && (
                      <div className="mt-2.5 text-[0.65rem] text-slate-400 font-bold uppercase tracking-wider leading-none truncate">
                        Eligibility: <span className="text-white">{country.eligibility}</span>
                      </div>
                    )}
                  </div>

                  {/* View Guide link with right arrow */}
                  <div 
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1 text-[0.70rem] font-black uppercase tracking-wider text-[var(--gold)] hover:text-[var(--gold)]/90 cursor-pointer self-start"
                  >
                    <span>View Guide</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            </FeatureCardReveal>
          ))}
        </div>

        {/* Section Header (Visa Services) */}
        <ScrollReveal direction="up" delay={150}>
          <div className="text-left w-full mb-10 flex flex-col items-start pt-10 border-t border-slate-800">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.08)] mb-3.5">
              <Globe className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Our Services</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl leading-tight text-white font-black tracking-tight text-left">
              Visa <span className="text-[var(--gold)]">Pathways</span> & Solutions
            </h3>

            <div className="mt-4 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4.5 text-[0.98rem] text-slate-400 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              McCoy Global Consultancy provides comprehensive solutions, from standard student visa arrangements to tourist visa facilitation across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Visa Services Row */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 [perspective:1000px]">
          {visaServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <FeatureCardReveal
                key={service.title}
                delay={200 + index * 100}
                className="flex [transform-style:preserve-3d]"
              >
                <div
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-950/40 p-6 sm:p-8 transition-all duration-500 overflow-hidden w-full [transform-style:preserve-3d] hover:border-[var(--gold)]/50 hover:bg-slate-900/60 hover:[transform:rotateX(3deg)_rotateY(-3deg)_translateZ(10px)] hover:shadow-[0_20px_50px_rgba(184,123,44,0.12)] select-text"
                >
                  {/* Top gold bar accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                  {/* Huge background progress number - lifts in 3D */}
                  <div className="absolute right-6 bottom-5 text-7xl font-black select-none pointer-events-none font-display z-0 text-slate-800/35 group-hover:text-[var(--gold)]/10 transition-colors duration-500 [transform:translateZ(25px)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                  <div className="flex flex-col md:flex-row gap-6 items-stretch w-full h-full relative z-10">
                    {/* Left panel: text and details - lifts in 3D */}
                    <div className="flex flex-col justify-between flex-1 pr-0 md:pr-4 [transform:translateZ(15px)]">
                      <div>
                        {/* Icon & Title */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-450 group-hover:text-[var(--gold)] group-hover:border-[var(--gold)]/20 transition-all duration-500 shadow-sm">
                            <Icon className="h-5.5 w-5.5" />
                          </div>
                          <h3 className="font-display text-xl font-black text-white group-hover:text-[var(--gold)] transition-colors duration-305 tracking-tight leading-snug">
                            {highlightTitle(service.title)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[0.82rem] leading-relaxed text-slate-350 mb-6 text-justify">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-3 group/li">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-300 group-hover/li:bg-[var(--gold)] group-hover/li:text-black mt-0.5 shadow-sm">
                                <CheckCircle2 className="h-3 w-3" />
                              </div>
                              <span className="text-[0.82rem] font-bold text-slate-300 transition-colors duration-300 group-hover/li:text-white leading-snug">
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Action Details Link */}
                      <div 
                        onClick={() => {
                          const el = document.getElementById("contact");
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--gold)] group-hover:text-[var(--gold)]/90 cursor-pointer"
                      >
                        <span>Enquire Details</span>
                        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    {/* Right panel: Image wrapper - lifts in 3D */}
                    <div className="relative w-full md:w-[180px] lg:w-[220px] h-[180px] md:h-auto rounded-2xl overflow-hidden shrink-0 border border-slate-800 group-hover:border-[var(--gold)]/40 transition-colors duration-500 shadow-sm self-stretch flex [transform:translateZ(20px)]">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Top-Right Country Flag Badge overlay */}
                      {service.countryCode && (
                        <div className="absolute top-3 right-3 z-30 transition-all duration-500 group-hover:scale-110 shadow-lg border border-slate-800 rounded-lg overflow-hidden shrink-0 group-hover:border-[var(--gold)]">
                          <img
                            src={`https://flagcdn.com/w80/${service.countryCode}.png`}
                            className="h-8 w-12 object-cover"
                            alt="Country Flag"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </FeatureCardReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
