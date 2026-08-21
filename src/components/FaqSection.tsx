import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is the Germany Opportunity Card (Chancenkarte) and how do I qualify?",
    answer: "The Opportunity Card is a points-based job-seeker visa that lets skilled professionals move to Germany for up to 12 months to seek employment. Qualification requires a minimum of 6 points, scored across categories like recognized university degrees or vocational qualifications, work experience, age (under 35 or 40), and language proficiency (German A1 or English B2)."
  },
  {
    question: "Am I eligible for the UK Youth Mobility Scheme Visa?",
    answer: "The UK Youth Mobility Scheme Visa is open to young professionals (typically aged 18 to 30) from participating countries and eligible passport arrangements (including Indian nationals with qualified degrees). It provides a 2-year visa allowing you to work in any job sector in the UK without requiring a local employer sponsorship."
  },
  {
    question: "Does mcCoy Global assist with university scholarships and waivers?",
    answer: "Yes, absolutely! We match your academic profile, credentials, and standardized language scores (IELTS, PTE, TOEFL) with active merit-based university scholarships, fee waivers, and assistantship packages to minimize your study costs."
  },
  {
    question: "What post-landing services do you offer once my visa is approved?",
    answer: "We support you even after you arrive! Our comprehensive post-landing services include arranging airport pickup transfers, assisting with student housing or shared accommodation bookings, setting up local bank accounts & SIM cards, and guiding you on local work rights."
  },
  {
    question: "What is the average timeline for securing a student visa?",
    answer: "University admissions typically take 2 to 6 weeks, while visa processing takes an additional 3 to 8 weeks depending on the destination (e.g., fast-track routes for the UK and USA). We advise starting your application process at least 4 to 6 months before your intended intake."
  },
  {
    question: "Can I work part-time while studying abroad?",
    answer: "Yes, most study destinations permit international students to work part-time. For instance, the UK, Australia, and Germany generally allow students to work up to 20 hours per week during term time and full-time during semester breaks. We guide you on local work regulations for your specific country."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Helper to render a column of FAQs to avoid row-height alignment gaps on expand
  const renderFaqColumn = (items: typeof faqs, startIndexOffset: number, step: number) => {
    return (
      <div className="flex flex-col gap-6 w-full">
        {items.map((faq, relativeIdx) => {
          const actualIndex = relativeIdx * step + startIndexOffset;
          const isOpen = openIndex === actualIndex;
          return (
            <ScrollReveal 
              key={actualIndex} 
              direction="up" 
              delay={100 + actualIndex * 80}
              className="flex"
            >
              <div 
                className={`group relative rounded-2xl border transition-all duration-500 bg-white overflow-hidden w-full ${
                  isOpen 
                    ? "border-[var(--gold)] shadow-[0_15px_30px_rgba(184,123,44,0.08)]" 
                    : "border-slate-150/70 hover:border-[var(--gold)]/60 hover:shadow-[0_10px_20px_rgba(0,0,0,0.03)]"
                }`}
              >
                {/* Left-edge gold highlight bar */}
                <div className={`absolute top-0 bottom-0 left-0 w-[4px] transition-colors duration-300 z-20 ${
                  isOpen ? "bg-[var(--gold)]" : "bg-[var(--gold)]/20 group-hover:bg-[var(--gold)]"
                }`} />

                <button
                  onClick={() => toggleFaq(actualIndex)}
                  className="w-full flex items-center justify-between text-left p-6 gap-4 cursor-pointer focus:outline-none relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
                      isOpen ? "text-[var(--gold)]" : "text-slate-400 group-hover:text-[var(--gold)]"
                    }`} />
                    <span className={`text-[0.88rem] font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                      isOpen ? "text-[var(--gold)]" : "text-slate-700 group-hover:text-slate-800"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                    isOpen ? "rotate-180 text-[var(--gold)]" : "text-slate-450 group-hover:text-slate-700"
                  }`} />
                </button>

                {/* Animated Accordion Height Wrapper */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out px-6 relative z-10 ${
                    isOpen 
                      ? "grid-rows-[1fr] opacity-100 pb-6" 
                      : "grid-rows-[0fr] opacity-0"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="my-3 h-px w-full bg-slate-100" />
                    <p className="text-sm text-slate-500 leading-relaxed pl-8 text-justify">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    );
  };

  // Filter items for Left Column (Odd indices: 0, 2, 4) and Right Column (Even indices: 1, 3, 5)
  const leftFaqs = faqs.filter((_, idx) => idx % 2 === 0);
  const rightFaqs = faqs.filter((_, idx) => idx % 2 === 1);

  return (
    <section id="faq" className="bg-[#fcfbf9] pt-6 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background Dot Matrix Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <HelpCircle className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Got Questions?</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left">
              Frequently Asked <span className="text-[var(--gold)] font-bold">Questions</span>
            </h2>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Find quick answers to common queries regarding admissions, visas, application timelines, and loan assistance.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion Grid - 2 Column Masonry-style Layout */}
        <div className="grid gap-6 md:grid-cols-2 items-start">
          {renderFaqColumn(leftFaqs, 0, 2)}
          {renderFaqColumn(rightFaqs, 1, 2)}
        </div>

      </div>
    </section>
  );
}
