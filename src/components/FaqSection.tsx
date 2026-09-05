import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
  mobileAnswer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is the Germany Opportunity Card (Chancenkarte) and how do I qualify?",
    answer: "The Opportunity Card is a points-based job-seeker visa that lets skilled professionals move to Germany for up to 12 months to seek employment. Qualification requires a minimum of 6 points, scored across categories like recognized university degrees or vocational qualifications, work experience, age (under 35 or 40), and language proficiency (German A1 or English B2).",
    mobileAnswer: "A points-based job-seeker visa allowing skilled professionals to stay in Germany for 12 months. Requires 6 points across recognized degrees, work experience, age, and language proficiency."
  },
  {
    question: "Am I eligible for the UK Youth Mobility Scheme Visa?",
    answer: "The UK Youth Mobility Scheme Visa is open to young professionals (typically aged 18 to 30) from participating countries and eligible passport arrangements (including Indian nationals with qualified degrees). It provides a 2-year visa allowing you to work in any job sector in the UK without requiring a local employer sponsorship.",
    mobileAnswer: "Open to eligible professionals aged 18–30. Grants a 2-year unrestricted UK work permit with no mandatory local employer sponsorship needed."
  },
  {
    question: "Does McCoy Global assist with university scholarships and waivers?",
    answer: "Yes, absolutely! We match your academic profile, credentials, and standardized language scores (IELTS, PTE, TOEFL) with active merit-based university scholarships, fee waivers, and assistantship packages to minimize your study costs.",
    mobileAnswer: "Yes! We match your academic profile and language scores (IELTS/PTE/TOEFL) with active university merit scholarships and tuition fee waivers."
  },
  {
    question: "What post-landing services do you offer once my visa is approved?",
    answer: "We support you even after you arrive! Our comprehensive post-landing services include arranging airport pickup transfers, assisting with student housing or shared accommodation bookings, setting up local bank accounts & SIM cards, and guiding you on local work rights.",
    mobileAnswer: "We assist with airport pickups, student housing bookings, local bank account setup, SIM cards, and post-arrival work guidance."
  },
  {
    question: "What is the average timeline for securing a student visa?",
    answer: "University admissions typically take 2 to 6 weeks, while visa processing takes an additional 3 to 8 weeks depending on the destination (e.g., fast-track routes for the UK and USA). We advise starting your application process at least 4 to 6 months before your intended intake.",
    mobileAnswer: "Admissions take 2–6 weeks and visa processing takes 3–8 weeks. We recommend starting 4–6 months ahead of your intended intake."
  },
  {
    question: "Can I work part-time while studying abroad?",
    answer: "Yes, most study destinations permit international students to work part-time. For instance, the UK, Australia, and Germany generally allow students to work up to 20 hours per week during term time and full-time during semester breaks. We guide you on local work regulations for your specific country.",
    mobileAnswer: "Yes! Major destinations (UK, Australia, Germany) allow students to work up to 20 hrs/week during terms and full-time during vacations."
  }
];

export function FaqSection() {
  const [isMasterOpen, setIsMasterOpen] = useState(true);
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleMaster = () => {
    setIsMasterOpen(!isMasterOpen);
  };

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="bg-[#fcfbf9] pt-6 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3.5 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1224] border border-amber-400/50 px-4 py-1.5 text-[0.72rem] sm:text-[0.75rem] font-black uppercase tracking-[0.22em] text-amber-300 shadow-[0_4px_16px_rgba(11,18,36,0.18)] mb-3">
              <HelpCircle className="h-3.5 w-3.5 shrink-0 fill-amber-400/20 text-amber-400 animate-pulse" />
              <span className="text-amber-300 tracking-[0.22em] font-extrabold">Got Questions?</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-800 text-left">
              Frequently Asked <span className="text-[var(--gold)] font-bold">Questions</span>
            </h2>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[0.92rem] sm:text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Find quick answers to common queries regarding admissions, visas, application timelines, and loan assistance.
            </p>
          </div>
        </ScrollReveal>

        {/* Master FAQ Open/Close Card Model */}
        <ScrollReveal direction="up" delay={150}>
          <div className="relative rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden max-w-4xl mx-auto w-full transition-all duration-500">
            
            {/* Master Header Accordion Button */}
            <button
              onClick={toggleMaster}
              className="w-full flex items-center justify-between p-4.5 sm:p-6 bg-gradient-to-r from-slate-900 to-[#0b1224] text-white cursor-pointer focus:outline-none relative z-10 transition-colors duration-300 select-none"
              aria-expanded={isMasterOpen}
            >
              <div className="flex items-center gap-3 sm:gap-4 text-left">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/30 shadow-md">
                  <MessageCircleQuestion className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[var(--gold)]">
                      FAQ Knowledge Base
                    </span>
                    <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-500" />
                    <span className="text-[0.62rem] sm:text-[0.68rem] font-bold text-slate-400">
                      {faqs.length} Key Topics
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-white tracking-tight leading-snug mt-0.5">
                    Click to {isMasterOpen ? "Close" : "Open"} FAQ Questions
                  </h3>
                </div>
              </div>

              {/* Master Open/Close Indicator & Arrow */}
              <div className="flex items-center gap-2.5">
                <span className="hidden xs:inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-200 border border-white/15 backdrop-blur-sm">
                  {isMasterOpen ? "Collapse All" : "Expand All"}
                </span>
                <div className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/15 text-[var(--gold)] transition-transform duration-500 shadow-sm ${
                  isMasterOpen ? "rotate-180 bg-[var(--gold)] text-slate-950" : ""
                }`}>
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>
            </button>

            {/* Master Body Wrapper containing Sub-FAQs */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                isMasterOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden divide-y divide-slate-100 bg-white">
                {faqs.map((faq, index) => {
                  const isOpen = openIndices.includes(index);
                  return (
                    <div 
                      key={index} 
                      className={`group relative transition-colors duration-300 ${
                        isOpen ? "bg-slate-50/70" : "hover:bg-slate-50/40"
                      }`}
                    >
                      {/* Active left-edge gold bar for sub-question */}
                      <div className={`absolute top-0 bottom-0 left-0 w-[3.5px] transition-all duration-300 z-20 ${
                        isOpen ? "bg-[var(--gold)]" : "bg-transparent group-hover:bg-[var(--gold)]/30"
                      }`} />

                      {/* Sub-question Header Button with Open/Close Arrow Mark */}
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between text-left p-4 sm:p-5 md:p-6 gap-3 sm:gap-4 cursor-pointer focus:outline-none relative z-10 select-none"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5 pr-2">
                          <span className={`flex h-6 w-6 sm:h-7 sm:w-7 shrink-0 items-center justify-center rounded-lg text-[0.65rem] sm:text-xs font-black transition-all duration-300 mt-0.5 sm:mt-0 ${
                            isOpen 
                              ? "bg-[var(--gold)] text-slate-950 shadow-sm" 
                              : "bg-slate-100 text-slate-500 group-hover:bg-[var(--gold)]/15 group-hover:text-[var(--gold)]"
                          }`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className={`text-[0.8rem] sm:text-[0.92rem] font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                            isOpen ? "text-[var(--gold)]" : "text-slate-800 group-hover:text-slate-900"
                          }`}>
                            {faq.question}
                          </span>
                        </div>

                        {/* Sub FAQ Open/Close Arrow Mark */}
                        <div className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen 
                            ? "border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] rotate-180" 
                            : "border-slate-200 bg-white text-slate-400 group-hover:text-slate-700 group-hover:border-slate-300 shadow-sm"
                        }`}>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </button>

                      {/* Sub-question Answer Accordion Wrapper with Justified & Mobile-Decreased Content */}
                      <div 
                        className={`grid transition-all duration-300 ease-in-out px-4 sm:px-6 relative z-10 ${
                          isOpen 
                            ? "grid-rows-[1fr] opacity-100 pb-4.5 sm:pb-6" 
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <div className="mb-2.5 sm:mb-3 h-px w-full bg-slate-200/70" />
                          <p className="text-[0.78rem] sm:text-sm text-slate-600 leading-relaxed pl-7 sm:pl-10 text-justify">
                            <span className="sm:hidden">{faq.mobileAnswer}</span>
                            <span className="hidden sm:inline">{faq.answer}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
