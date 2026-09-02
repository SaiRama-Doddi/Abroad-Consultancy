import { useState } from "react";
import { GraduationCap, Globe, CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Destination {
  name: string;
  shortName?: string;
  code: string;
  image: string;
  courses: string[];
  eligibility?: string;
}

const destinations: Destination[] = [
  {
    name: "United States",
    shortName: "USA",
    code: "us",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters & MBA Programs"],
    eligibility: "Intermediate / Bachelors Pass"
  },
  {
    name: "United Kingdom",
    shortName: "UK",
    code: "gb",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate / Bachelors Pass"
  },
  {
    name: "Australia",
    shortName: "Australia",
    code: "au",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate / Bachelors Pass"
  },
  {
    name: "Canada",
    shortName: "Canada",
    code: "ca",
    image: "https://images.unsplash.com/photo-1507992781348-3102450a5daa?auto=format&fit=crop&w=600&q=80",
    courses: ["Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate / Bachelors Pass"
  },
  {
    name: "Germany",
    shortName: "Germany",
    code: "de",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅"
  },
  {
    name: "Poland",
    shortName: "Poland",
    code: "pl",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅"
  },
  {
    name: "Netherlands",
    shortName: "Netherlands",
    code: "nl",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅"
  },
  {
    name: "Italy",
    shortName: "Italy",
    code: "it",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅"
  },
  {
    name: "France",
    shortName: "France",
    code: "fr",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅"
  },
  {
    name: "Cyprus",
    shortName: "Cyprus",
    code: "cy",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=600&q=80",
    courses: ["Foundation Course", "Bachelors Degrees", "Masters Programs"],
    eligibility: "Intermediate Pass students can apply ✅"
  },
  {
    name: "United Arab Emirates",
    shortName: "Dubai",
    code: "ae",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80",
    courses: ["Diploma Courses", "Hotel Management", "Bachelors & Masters"],
    eligibility: "Intermediate / Graduate / Age 18+"
  },
  {
    name: "Singapore",
    shortName: "Singapore",
    code: "sg",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
    courses: ["Diploma Courses", "Hotel Management Specializations"],
    eligibility: "10th Class pass students can apply ✅"
  },
  {
    name: "Malaysia",
    shortName: "Malaysia",
    code: "my",
    image: "https://images.unsplash.com/photo-1542044896530-05d85be9b11a?auto=format&fit=crop&w=600&q=80",
    courses: ["Hotel Management Courses", "Hospitality Diplomas"],
    eligibility: "10th / 12th Pass"
  },
  {
    name: "Mauritius",
    shortName: "Mauritius",
    code: "mu",
    image: "https://images.unsplash.com/photo-1589979482837-e74f2e145060?auto=format&fit=crop&w=600&q=80",
    courses: ["Diploma in Business Management", "Hospitality & Tourism Management"],
    eligibility: "10th Class pass students can apply ✅"
  }
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="bg-white text-slate-800 pt-12 pb-14 relative overflow-hidden border-b border-slate-100">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[var(--gold)]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Title */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center flex flex-col items-center mb-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-2.5">
              <Globe className="h-3.5 w-3.5 shrink-0 animate-pulse text-[var(--gold)]" />
              <span>Study Destinations</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Choose Your <span className="text-[var(--gold)]">Global Path</span>
            </h2>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-slate-500">
              We guide you from standard application enrollment to arrival. Choose from top universities across major English-speaking hubs, Europe, and Asia.
            </p>
          </div>
        </ScrollReveal>

        {/* Style tag to create smooth infinite scrolling marquee effect */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes infinite-scroll-up {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-50%);
            }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
          .animate-infinite-scroll-up {
            animation: infinite-scroll-up 32s linear infinite;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />

        {/* Desktop/Laptop View: Premium horizontal infinite scrolling track */}
        <div className="hidden md:block">
          <ScrollReveal direction="up" delay={200}>
            <div className="relative w-full -mx-6 px-6 overflow-hidden">
              {/* Scrollable Row (Infinite loop) */}
              <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] w-max select-none">
                
                {/* Track 1 (Original List) */}
                <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
                  {destinations.map((country) => (
                    <div key={`${country.code}-track1`} className="w-[180px] sm:w-[220px] md:w-[280px] shrink-0">
                      {/* Card Container (Perfect Square) */}
                      <div className="group relative flex flex-col justify-end aspect-square w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.15)] transition-all duration-500 bg-slate-900">
                        
                        {/* Background Destination Flag (Full Card) */}
                        <img 
                          src={`https://flagcdn.com/w640/${country.code}.png`} 
                          alt={`${country.name} Flag`} 
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Subtle dark gradient mask for high legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />

                        {/* Country Pill Badge Overlay at the bottom */}
                        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg border border-slate-100 min-w-[100px] sm:min-w-[155px] justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                          <div className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0">
                            <img 
                              src={`https://flagcdn.com/w40/${country.code}.png`} 
                              className="h-full w-full object-cover scale-125" 
                              alt={`${country.name} Flag`} 
                            />
                          </div>
                          <span className="text-[0.6rem] sm:text-[0.72rem] font-black text-slate-800 uppercase tracking-wider">{country.shortName || country.name}</span>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                {/* Track 2 (Identical Copy for Seamless Infinite Scrolling Loop) */}
                <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
                  {destinations.map((country) => (
                    <div key={`${country.code}-track2`} className="w-[180px] sm:w-[220px] md:w-[280px] shrink-0">
                      {/* Card Container (Perfect Square) */}
                      <div className="group relative flex flex-col justify-end aspect-square w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.15)] transition-all duration-500 bg-slate-900">
                        
                        {/* Background Destination Flag (Full Card) */}
                        <img 
                          src={`https://flagcdn.com/w640/${country.code}.png`} 
                          alt={`${country.name} Flag`} 
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        />

                        {/* Subtle dark gradient mask for high legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />

                        {/* Country Pill Badge Overlay at the bottom */}
                        <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg border border-slate-100 min-w-[100px] sm:min-w-[155px] justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                          <div className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0">
                            <img 
                              src={`https://flagcdn.com/w40/${country.code}.png`} 
                              className="h-full w-full object-cover scale-125" 
                              alt={`${country.name} Flag`} 
                            />
                          </div>
                          <span className="text-[0.6rem] sm:text-[0.72rem] font-black text-slate-800 uppercase tracking-wider">{country.shortName || country.name}</span>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Mobile View: Vertical Upward Infinite Scrolling Marquee (smooth continuous loop) */}
        <div className="block md:hidden">
          <ScrollReveal direction="up" delay={200}>
            <div className="relative w-full h-[460px] xs:h-[500px] overflow-hidden">
              {/* Vertical Upward Moving Container */}
              <div className="flex flex-col animate-infinite-scroll-up hover:[animation-play-state:paused] active:[animation-play-state:paused] select-none">
                {/* Track 1 (Original List) */}
                <div className="grid grid-cols-2 gap-2.5 xs:gap-3 pb-2.5 xs:pb-3">
                  {destinations.map((country) => (
                    <div
                      key={`${country.code}-mobile-track1`}
                      className="group relative flex flex-col justify-end aspect-square w-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] bg-slate-900"
                    >
                      {/* Background Destination Flag (Full Card) */}
                      <img
                        src={`https://flagcdn.com/w320/${country.code}.png`}
                        alt={`${country.name} Flag`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle dark gradient mask for high legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />

                      {/* Country Pill Badge Overlay at the bottom */}
                      <div className="absolute bottom-2.5 xs:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white px-2 py-1 xs:px-2.5 xs:py-1.5 rounded-full shadow-lg border border-slate-100 min-w-[80px] xs:min-w-[100px] max-w-[90%] justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                        <div className="h-3.5 w-3.5 xs:h-4.5 xs:w-4.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0">
                          <img
                            src={`https://flagcdn.com/w40/${country.code}.png`}
                            className="h-full w-full object-cover scale-125"
                            alt={`${country.name} Flag`}
                          />
                        </div>
                        <span className="text-[0.55rem] xs:text-[0.6rem] font-black text-slate-800 uppercase tracking-wider truncate">
                          {country.shortName || country.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Track 2 (Identical Duplicate for Seamless Infinite Loop) */}
                <div className="grid grid-cols-2 gap-2.5 xs:gap-3 pb-2.5 xs:pb-3" aria-hidden="true">
                  {destinations.map((country) => (
                    <div
                      key={`${country.code}-mobile-track2`}
                      className="group relative flex flex-col justify-end aspect-square w-full rounded-2xl overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.03)] bg-slate-900"
                    >
                      {/* Background Destination Flag (Full Card) */}
                      <img
                        src={`https://flagcdn.com/w320/${country.code}.png`}
                        alt={`${country.name} Flag`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Subtle dark gradient mask for high legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent z-10" />

                      {/* Country Pill Badge Overlay at the bottom */}
                      <div className="absolute bottom-2.5 xs:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white px-2 py-1 xs:px-2.5 xs:py-1.5 rounded-full shadow-lg border border-slate-100 min-w-[80px] xs:min-w-[100px] max-w-[90%] justify-center z-10 transition-transform duration-300 group-hover:scale-105">
                        <div className="h-3.5 w-3.5 xs:h-4.5 xs:w-4.5 rounded-full overflow-hidden border border-slate-100 flex items-center justify-center shrink-0">
                          <img
                            src={`https://flagcdn.com/w40/${country.code}.png`}
                            className="h-full w-full object-cover scale-125"
                            alt={`${country.name} Flag`}
                          />
                        </div>
                        <span className="text-[0.55rem] xs:text-[0.6rem] font-black text-slate-800 uppercase tracking-wider truncate">
                          {country.shortName || country.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
