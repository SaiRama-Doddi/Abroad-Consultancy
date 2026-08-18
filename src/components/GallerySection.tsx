import { useState } from "react";
import { CheckCircle2, ShieldCheck, Globe, Trophy } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface SuccessStory {
  name: string;
  destination: string;
  countryCode: string;
  visaType: "student" | "mobility";
  visaLabel: string;
  pathwayInfo: string;
  image: string;
}

const successStories: SuccessStory[] = [
  {
    name: "Kiran Kumar",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "MS in Computer Science · UT Dallas",
    image: "/student-usa.png"
  },
  {
    name: "Ananya Reddy",
    destination: "Germany",
    countryCode: "de",
    visaType: "mobility",
    visaLabel: "Germany Opportunity Card",
    pathwayInfo: "IT Software Engineer Pathway",
    image: "/student-germany.png"
  },
  {
    name: "Vikram Malhotra",
    destination: "United Kingdom",
    countryCode: "gb",
    visaType: "mobility",
    visaLabel: "UK Youth Mobility Visa",
    pathwayInfo: "Marketing Analyst · London",
    image: "/student-uk.png"
  },
  {
    name: "Sneha Rao",
    destination: "Singapore",
    countryCode: "sg",
    visaType: "student",
    visaLabel: "Student Visa & Internship",
    pathwayInfo: "NSTC Logistics Management + AI",
    image: "/student-singapore.png"
  }
];

export function GallerySection() {
  const [filter, setFilter] = useState<"all" | "student" | "mobility">("all");

  const filteredStories = successStories.filter(
    (story) => filter === "all" || story.visaType === filter
  );

  return (
    <section id="gallery" className="bg-background py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Success Stories</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Visa Success Gallery
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
            <p className="mt-6 text-[1.02rem] text-muted-foreground leading-relaxed">
              Real approvals from ambitious students and professionals who achieved their dreams abroad with Mani Abroad Consultancy.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Filter Tabs */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex justify-center gap-2 mb-8">
            {(["all", "student", "mobility"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-full px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                  filter === type
                    ? "text-[#0b1224] shadow-[0_0_15px_rgba(224,183,109,0.3)] scale-105"
                    : "text-muted-foreground/80 hover:text-foreground hover:bg-muted bg-card/65 border border-border"
                }`}
                style={{
                  background: filter === type ? "var(--gradient-gold)" : undefined
                }}
              >
                {type === "all" && "All Approvals"}
                {type === "student" && "Student Visas"}
                {type === "mobility" && "Opportunity & Mobility"}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredStories.map((story, idx) => (
            <ScrollReveal 
              key={story.name} 
              direction="up" 
              delay={150 + (idx % 4) * 100} 
              className="flex"
            >
              <div
                className={`group relative flex flex-col justify-between rounded-3xl border overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-[var(--gold)]/60 hover:shadow-[0_20px_45px_rgba(224,183,109,0.2)] w-full ${
                  idx === 1 
                    ? "border-[var(--gold)] bg-gradient-to-b from-card via-card to-[var(--gold)]/5 shadow-[0_15px_35px_rgba(224,183,109,0.18)]" 
                    : "border-border bg-card shadow-premium"
                }`}
                style={{ boxShadow: idx === 1 ? "0 15px 35px rgba(224,183,109,0.18)" : "var(--shadow-premium)" }}
              >
                {/* Gold Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

                <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                  {/* Student Photo Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-muted">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Visa Approved Banner Badge */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-white shadow-lg">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Visa Approved</span>
                    </div>
                    {/* Special Highlighted Badge for 2nd Card */}
                    {idx === 1 && (
                      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 rounded-full bg-[var(--gold)] px-2.5 py-1.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-black shadow-lg">
                        <span>⭐ Highlighted</span>
                      </div>
                    )}
                  </div>

                  {/* Card Info Content */}
                  <div className="p-6">
                    {/* Country Flag & Name */}
                    <div className="flex items-center gap-2 mb-3">
                      <img 
                        src={`https://flagcdn.com/w40/${story.countryCode}.png`} 
                        width="20"
                        alt={`${story.destination} Flag`}
                        className="rounded-sm border border-border/40 shadow-sm"
                      />
                      <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[var(--gold)]">
                        {story.destination}
                      </span>
                    </div>

                    {/* Student Name */}
                    <h4 className="font-display text-xl text-foreground font-semibold group-hover:text-[var(--gold)] transition-colors mb-2">
                      {story.name}
                    </h4>

                    {/* Visa Label & Details */}
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                        <Trophy className="h-3.5 w-3.5 text-[var(--gold)] shrink-0" />
                        <span>{story.visaLabel}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/80 pl-5">
                        <span>{story.pathwayInfo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Decorative Edge */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
