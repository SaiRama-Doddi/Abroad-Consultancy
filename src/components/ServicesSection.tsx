import { useState } from "react";
import { GraduationCap, Plane, Globe, CheckCircle2, ChevronRight, BookOpen, Briefcase, Ticket, Landmark } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Country {
  name: string;
  code: string;
  region: "hubs" | "europe" | "asia";
  eligibility?: string;
  courses: string[];
  highlights?: string[];
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
    name: "United States",
    code: "us",
    region: "hubs",
    courses: ["Bachelors Degrees", "Masters & MBA Programs", "STEM Specializations"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Top-tier Ivy League & State Universities", "Optional Practical Training (OPT) up to 3 years"]
  },
  {
    name: "United Kingdom",
    code: "gb",
    region: "hubs",
    courses: [
      "Foundation & Undergraduate Degrees",
      "Postgraduate (Masters) Programs",
      "UK Youth Mobility Visa Scheme ✅"
    ],
    eligibility: "Intermediate / Bachelors / Age 18-30",
    highlights: [
      "Youth Mobility Scheme: Live & work in the UK up to 2 years",
      "2-Year Post Study Work (PSW) Visa"
    ]
  },
  {
    name: "Australia",
    code: "au",
    region: "hubs",
    courses: ["Vocational VET Courses", "Bachelors Programs", "Masters & PhD Research"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Post-Study Work rights (up to 4+ years)", "High standard of living and student cities"]
  },
  {
    name: "Canada",
    code: "ca",
    region: "hubs",
    courses: ["Post-Graduate Diplomas", "Bachelors Degrees", "Masters (Co-op pathways)"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Post-Graduation Work Permit (PGWP)", "Straightforward pathways to Permanent Residency (PR)"]
  },

  // Europe
  {
    name: "Germany",
    code: "de",
    region: "europe",
    courses: [
      "English-Taught Bachelors & Masters",
      "Germany Opportunity Card (Chancenkarte) ✅",
      "MBA & Engineering Programs"
    ],
    eligibility: "Intermediate / Bachelors / Points-based System",
    highlights: [
      "Opportunity Card: Job search without a pre-existing job offer",
      "Zero tuition fees at public universities"
    ]
  },
  {
    name: "Poland",
    code: "pl",
    region: "europe",
    courses: ["Bachelors & Masters Degrees", "Engineering & IT Specializations"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Affordable tuition fees and low cost of living", "Schengen area access for easy travel"]
  },
  {
    name: "Netherlands",
    code: "nl",
    region: "europe",
    courses: ["Bachelors Programs", "Research & Applied Sciences Masters"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Highly innovative education system", "1-year orientation year visa for graduates"]
  },
  {
    name: "Italy",
    code: "it",
    region: "europe",
    courses: ["Art, Design & Fashion Degrees", "Bachelors & Masters in English"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["Regional scholarships and fee waivers", "Rich cultural heritage and historic universities"]
  },
  {
    name: "France",
    code: "fr",
    region: "europe",
    courses: ["Grandes Écoles Masters", "Luxury & Culinary Arts", "Business & Engineering"],
    eligibility: "Intermediate / Bachelors Pass",
    highlights: ["5-year short-stay visa for PG graduates", "Partial housing subsidies (CAF) available"]
  },
  {
    name: "Cyprus",
    code: "cy",
    region: "europe",
    courses: ["Foundation Courses", "Bachelors & Masters Degrees"],
    eligibility: "Intermediate Pass students can apply ✅",
    highlights: ["No IELTS options available", "Affordable European educational standard"]
  },
  {
    name: "Georgia",
    code: "ge",
    region: "europe",
    courses: ["MBBS / Doctor of Medicine", "Bachelors of Medicine"],
    eligibility: "Intermediate Pass (BiPC stream preferred)",
    highlights: ["WHO & NMC recognized medical degrees", "Direct admission without NEET competitive score rules"]
  },

  // Asia & Middle East
  {
    name: "United Arab Emirates (Dubai)",
    code: "ae",
    region: "asia",
    courses: ["Undergraduate Diplomas", "Hotel Management Specializations", "Bachelors & Masters Degrees", "Other Professional Degrees"],
    eligibility: "10th / 12th / Graduate Pass",
    highlights: ["Thriving hospitality and business hub", "Easy visa processing with study-to-work transfer"]
  },
  {
    name: "Singapore",
    code: "sg",
    region: "asia",
    courses: [
      "Diploma in Leisure, Events & Lifestyle Management",
      "Diploma in Logistics Management with AI Applications",
      "Diploma Courses & Hotel Management"
    ],
    eligibility: "10th Grade / Secondary Pass can apply ✅",
    highlights: ["6 Months Study + 6 Months Paid Internship (NSTC Package)", "Highly safe global financial capital"]
  },
  {
    name: "Malaysia",
    code: "my",
    region: "asia",
    courses: ["Hotel Management Courses", "Hospitality Diplomas", "Dual-Degree Programs"],
    eligibility: "10th / 12th Pass",
    highlights: ["Cost-effective Asian study hub", "Easy transfer pathways to UK and Australia universities"]
  },
  {
    name: "Mauritius",
    code: "mu",
    region: "asia",
    courses: ["Diploma in Business Management", "Diploma in Hospitality & Tourism Management"],
    eligibility: "10th Pass (Eligibility) ✅",
    highlights: ["Stunning island country with growing education hubs", "No IELTS requirement, work part-time while studying"]
  }
];

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
    <section id="services" className="bg-background/50 pt-6 pb-8 sm:pt-8 sm:pb-12 relative overflow-hidden border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <Globe className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Our Services</span>
            </div>

            <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left">
              Visa <span className="text-[var(--gold)] font-bold">Pathways</span> & Destinations
            </h2>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              mcCoy Global Consultancy provides comprehensive solutions, from standard student visa arrangements to tourist visa facilitation across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Visa Services Row */}
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mb-8">
          {visaServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.title}
                direction="up"
                delay={200 + index * 150}
                className="flex"
              >
                <div
                  className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden w-full"
                  style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
                >
                  {/* Top gold bar accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                  {/* Huge background progress number */}
                  <div className="absolute right-6 bottom-5 text-7xl font-black text-slate-100/50 select-none pointer-events-none font-display z-0 group-hover:text-[var(--gold)]/5 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Accent gold light glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                  <div className="flex flex-col md:flex-row gap-6 items-stretch w-full h-full relative z-10">
                    {/* Left panel: text and details */}
                    <div className="flex flex-col justify-between flex-1 pr-0 md:pr-4">
                      <div>
                        {/* Icon & Title */}
                        <div className="flex items-center gap-4 mb-5">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/5 text-[var(--gold)] border border-[var(--gold)]/15 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105 shadow-sm">
                            <Icon className="h-5.5 w-5.5" />
                          </div>
                          <h3 className="font-display text-xl font-extrabold text-slate-900 group-hover:text-[var(--gold)] transition-colors duration-300 tracking-tight leading-snug">
                            {highlightTitle(service.title)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[0.82rem] leading-relaxed text-slate-700 mb-6 text-justify font-medium">
                          {service.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-3">
                          {service.features.map((feat) => (
                            <li key={feat} className="flex items-start gap-3 group/li">
                              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15 transition-all duration-300 group-hover/li:bg-[var(--gold)] group-hover/li:text-white mt-0.5 shadow-sm">
                                <CheckCircle2 className="h-3 w-3" />
                              </div>
                              <span className="text-[0.82rem] font-bold text-slate-800 transition-colors duration-300 group-hover/li:text-slate-950 leading-snug">
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
                        className="mt-8 pt-4 border-t border-slate-50 flex items-center justify-between text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--gold)] group-hover:text-[var(--gold)]/90 cursor-pointer"
                      >
                        <span>Enquire Details</span>
                        <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>

                    {/* Right panel: Image wrapper */}
                    <div className="relative w-full md:w-[180px] lg:w-[220px] h-[180px] md:h-auto rounded-2xl overflow-hidden shrink-0 border border-slate-150/70 group-hover:border-[var(--gold)]/40 transition-colors duration-500 shadow-sm self-stretch flex">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Top-Right Country Flag Badge overlay */}
                      {service.countryCode && (
                        <div className="absolute top-3 right-3 z-30 transition-all duration-500 group-hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border-2 border-white rounded-lg overflow-hidden shrink-0 group-hover:border-[var(--gold)] group-hover:shadow-[0_0_20px_rgba(184,123,44,0.5)]">
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
              </ScrollReveal>
            );
          })}
        </div>

        {/* Destinations Explorer Title */}
        <ScrollReveal direction="up" delay={150}>
          <div className="text-left w-full mb-8 flex flex-col items-start pt-8 border-t border-slate-100/80">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <Globe className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Global Opportunities</span>
            </div>

            <h3 className="font-display text-3xl leading-tight text-slate-800 font-extrabold tracking-tight text-left">
              Explore Study <span className="text-[var(--gold)] font-bold">Destinations</span>
            </h3>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[0.98rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Select a region below to filter available countries and explore educational pathways.
            </p>
          </div>
        </ScrollReveal>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-start gap-2 mb-8">
          {(["all", "hubs", "europe", "asia"] as const).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`rounded-full px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${selectedRegion === region
                  ? "text-[#0b1224] shadow-[0_0_15px_rgba(224,183,109,0.3)] scale-105"
                  : "text-muted-foreground/80 hover:text-foreground hover:bg-muted bg-card/65 border border-border"
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

        {/* Countries Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCountries.map((country, idx) => (
            <ScrollReveal
              key={country.name}
              direction="up"
              delay={100 + (idx % 3) * 120}
              className="flex"
            >
              <div
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] overflow-hidden w-full"
                style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}
              >
                {/* Top gold bar accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--gold)] transition-colors duration-500 z-10" />

                {/* Huge background progress number */}
                <div className="absolute right-6 bottom-5 text-7xl font-black text-slate-100/50 select-none pointer-events-none font-display z-0 group-hover:text-[var(--gold)]/5 transition-colors duration-500">
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Accent gold light glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
                
                {/* Corner glow */}
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[var(--gold)]/8 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

                <div className="group-hover:translate-y-[-2px] transition-transform duration-300 z-20 relative">
                  {/* Flag Image and Name Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative overflow-hidden rounded-md border border-slate-100 shadow-sm shrink-0 h-6 w-9 transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--gold)]">
                        <img
                          src={`https://flagcdn.com/w40/${country.code}.png`}
                          srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                          className="h-full w-full object-cover"
                          alt={`${country.name} Flag`}
                        />
                      </div>
                      <h4 className="font-display text-xl text-slate-800 font-extrabold tracking-tight group-hover:text-[var(--gold)] transition-colors duration-300">
                        {country.name}
                      </h4>
                    </div>
                    <Globe className="h-5 w-5 text-slate-300 group-hover:text-[var(--gold)] group-hover:rotate-45 transition-all duration-500 shrink-0" />
                  </div>

                  {/* Eligibility Badge */}
                  {country.eligibility && (
                    <div className="mb-6 flex items-center gap-2.5 bg-[var(--gold)]/5 border border-[var(--gold)]/10 rounded-2xl px-4 py-3 text-[0.82rem] text-slate-600">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[var(--gold)] shrink-0" />
                      <div className="leading-snug">
                        <span className="font-bold text-slate-800">Eligibility: </span>
                        <span>{country.eligibility}</span>
                      </div>
                    </div>
                  )}

                  {/* Courses Offered */}
                  <div className="mb-6">
                    <span className="block text-[0.75rem] uppercase tracking-wider text-slate-500 font-bold mb-3 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-[var(--gold)]" /> Featured Programs
                    </span>
                    <ul className="space-y-2.5">
                      {country.courses.map((course) => (
                        <li key={course} className="flex items-start gap-2.5 text-[0.82rem] text-slate-600 group/course">
                          <ChevronRight className="h-3.5 w-3.5 text-[var(--gold)] shrink-0 mt-0.5 transition-transform duration-300 group-hover/course:translate-x-1" />
                          <span className="group-hover/course:text-slate-800 transition-colors">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Highlights */}
                {country.highlights && country.highlights.length > 0 && (
                  <div className="mt-2 border-t border-slate-100 pt-4 z-20 relative">
                    <span className="block text-[0.75rem] uppercase tracking-wider text-[var(--gold)] font-bold mb-2.5">
                      Why Choose {country.name}?
                    </span>
                    <ul className="space-y-2">
                      {country.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2.5 text-[0.82rem] text-slate-500 leading-relaxed group/highlight">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0 mt-2 transition-transform duration-300 group-hover/highlight:scale-125" />
                          <span className="flex-1 text-justify">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
