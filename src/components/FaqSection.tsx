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
    question: "Does Mani Abroad Consultancy assist with university scholarships and waivers?",
    answer: "Yes, absolutely! We match your academic profile, credentials, and standardized language scores (IELTS, PTE, TOEFL) with active merit-based university scholarships, fee waivers, and assistantship packages to minimize your study costs."
  },
  {
    question: "What post-landing services do you offer once my visa is approved?",
    answer: "We support you even after you arrive! Our comprehensive post-landing services include arranging airport pickup transfers, assisting with student housing or shared accommodation bookings, setting up local bank accounts & SIM cards, and guiding you on local work rights."
  },
  {
    question: "What is the average timeline for securing a student visa?",
    answer: "University admissions typically take 2 to 6 weeks, while visa processing takes an additional 3 to 8 weeks depending on the destination (e.g., fast-track routes for the UK and USA). We advise starting your application process at least 4 to 6 months before your intended intake."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-background py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Got Questions?</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal 
                key={index} 
                direction="up" 
                delay={100 + index * 80}
              >
                <div 
                  className={`group rounded-2xl border transition-all duration-300 bg-card/45 overflow-hidden ${
                    isOpen 
                      ? "border-[var(--gold)]/40 shadow-[0_10px_25px_rgba(224,183,109,0.06)]" 
                      : "border-border hover:border-border-hover"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left p-6 gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`h-5 w-5 shrink-0 transition-colors duration-300 ${
                        isOpen ? "text-[var(--gold)]" : "text-muted-foreground/60"
                      }`} />
                      <span className={`text-[0.92rem] font-bold uppercase tracking-wider ${
                        isOpen ? "text-[var(--gold)]" : "text-foreground"
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[var(--gold)]" : "group-hover:text-foreground"
                    }`} />
                  </button>

                  {/* Animated Accordion Height Wrapper using grid-rows */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out px-6 ${
                      isOpen 
                        ? "grid-rows-[1fr] opacity-100 pb-6" 
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="my-3 h-px w-full bg-border/40" />
                      <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
