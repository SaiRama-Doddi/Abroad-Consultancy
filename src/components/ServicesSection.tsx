import { useState } from "react";
import { GraduationCap, Plane, Globe, CheckCircle2, ChevronRight, BookOpen, Briefcase } from "lucide-react";
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
    description: "Travel the world with zero stress. Whether it is visiting family, exploring destinations, or business meetings, we manage your visa formalities quickly and transparently.",
    features: [
      "Fast-track visa processing options",
      "Detailed document checking",
      "Flight and itinerary guidance",
      "Travel insurance assistance"
    ]
  },
  {
    title: "Opportunity & Mobility Visas",
    icon: Briefcase,
    description: "Explore unique job-seeking and international youth schemes. We assess your eligibility, calculate points, and handle submissions for specialized visa programs.",
    features: [
      "Germany Opportunity Card (Chancenkarte)",
      "UK Youth Mobility Scheme guidance",
      "Points-based calculator & profile assessment",
      "Job search registry & cover support"
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

  const filteredCountries = countries.filter(
    (c) => selectedRegion === "all" || c.region === selectedRegion
  );

  return (
    <section id="services" className="bg-background/50 py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Our Services</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Visa Pathways & Destinations
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
            <p className="mt-6 text-[1.02rem] text-muted-foreground leading-relaxed">
              Mani Abroad Consultancy provides comprehensive solutions, from standard student visa arrangements to tourist visa facilitation across the globe.
            </p>
          </div>
        </ScrollReveal>

        {/* Visa Services Row */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
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
                  className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_rgba(224,183,109,0.12)] overflow-hidden w-full"
                  style={{ boxShadow: "var(--shadow-premium)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
                    </div>
                    
                    <p className="text-[0.98rem] leading-relaxed text-muted-foreground mb-8">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-3.5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Destinations Explorer Title */}
        <ScrollReveal direction="up" delay={150}>
          <div className="text-center mb-6">
            <h3 className="font-display text-3xl text-foreground">Explore Study Destinations</h3>
            <p className="mt-2 text-sm text-muted-foreground">Select a region to filter available countries and educational pathways</p>
          </div>
        </ScrollReveal>

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(["all", "hubs", "europe", "asia"] as const).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`rounded-full px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                selectedRegion === region
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
                className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/40 hover:shadow-[0_20px_40px_rgba(224,183,109,0.12)] overflow-hidden w-full"
                style={{ boxShadow: "var(--shadow-premium)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                  {/* Flag Image and Name Header */}
                  <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://flagcdn.com/w40/${country.code}.png`} 
                        srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
                        width="28"
                        alt={`${country.name} Flag`}
                        className="rounded-sm shadow-sm border border-border/40 object-cover h-4.5 w-6.5" 
                      />
                      <h4 className="font-display text-xl text-foreground font-semibold group-hover:text-[var(--gold)] transition-colors">
                        {country.name}
                      </h4>
                    </div>
                    <Globe className="h-4.5 w-4.5 text-muted-foreground/35 group-hover:rotate-12 transition-transform duration-500" />
                  </div>

                  {/* Eligibility Badge */}
                  {country.eligibility && (
                    <div className="mb-6 flex items-start gap-2 bg-[var(--gold)]/5 border border-[var(--gold)]/10 rounded-xl px-4 py-3 text-xs text-muted-foreground">
                      <span className="font-semibold text-[var(--gold)]">Eligibility:</span>
                      <span>{country.eligibility}</span>
                    </div>
                  )}

                  {/* Courses Offered */}
                  <div className="mb-6">
                    <span className="block text-[0.75rem] uppercase tracking-wider text-muted-foreground font-bold mb-3 flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5 text-[var(--gold)]" /> Featured Programs
                    </span>
                    <ul className="space-y-2">
                      {country.courses.map((course) => (
                        <li key={course} className="flex items-start gap-2 text-[0.82rem] text-muted-foreground/90">
                          <ChevronRight className="h-3.5 w-3.5 text-[var(--gold)] shrink-0 mt-0.5" />
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Highlights */}
                {country.highlights && country.highlights.length > 0 && (
                  <div className="mt-2 border-t border-border/40 pt-4">
                    <span className="block text-[0.75rem] uppercase tracking-wider text-[var(--gold)] font-bold mb-2.5">
                      Why Choose {country.name}?
                    </span>
                    <ul className="space-y-2">
                      {country.highlights.map((highlight) => (
                        <li key={highlight} className="text-[0.82rem] text-muted-foreground/80 leading-relaxed list-disc list-inside pl-1">
                          {highlight}
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
