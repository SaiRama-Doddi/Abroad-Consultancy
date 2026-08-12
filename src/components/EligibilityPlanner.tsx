import { useState } from "react";
import { 
  BookOpen, 
  Briefcase, 
  Compass, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Phone, 
  CheckCircle2, 
  GraduationCap,
  Sparkles,
  MapPin
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { toast } from "sonner";

interface OptionCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

const goals: OptionCard[] = [
  { id: "study", title: "Study Abroad", description: "Get degree admissions and student visas in top international universities", icon: GraduationCap },
  { id: "migrate", title: "Work & Migrate", description: "Unlock work permits, job seeker visas, and residency opportunities", icon: Briefcase },
  { id: "visit", title: "Tourist / Visit", description: "Fast-track visitor visa applications for vacations or business trips", icon: Compass },
];

const countries = [
  { id: "US", name: "United States", code: "us", visa: "F-1 Student Visa / Tourist Visa" },
  { id: "GB", name: "United Kingdom", code: "gb", visa: "Tier 4 Student Visa / Youth Mobility Visa" },
  { id: "AU", name: "Australia", code: "au", visa: "Subclass 500 Student Visa / Work Rights" },
  { id: "DE", name: "Germany", code: "de", visa: "Opportunity Card (Chancenkarte) / Student Visa" },
  { id: "CA", name: "Canada", code: "ca", visa: "Study Permit / Express Entry" },
  { id: "SG", name: "Singapore", code: "sg", visa: "Student Pass / Training Work Permit" },
];

const educations = [
  { id: "intermediate", title: "Intermediate / 12th Pass", description: "Eligible for Bachelors degree enrollments and youth mobility schemes" },
  { id: "bachelors", title: "Bachelors Degree Completed", description: "Eligible for Masters/MBA admissions and global job-seeker work visas" },
  { id: "masters", title: "Masters Degree Completed", description: "Eligible for doctoral research and advanced professional skilled migration" },
];

export function EligibilityPlanner() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [education, setEducation] = useState<string | null>(null);
  
  // Lead form state
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) {
      if (step === 4) setIsSubmitted(false);
      setStep(step - 1);
    }
  };

  const getMatchedPathway = () => {
    const countryObj = countries.find(c => c.id === selectedCountry);
    const countryName = countryObj ? countryObj.name : "";
    
    if (goal === "study") {
      if (selectedCountry === "GB") {
        return {
          title: "UK Higher Education & Youth Mobility Route",
          desc: `Based on your selection, you match both the UK Student Visa and the UK Youth Mobility Visa. You can apply for admissions in top UK universities or live and work in the UK for up to 2 years.`,
          features: ["2-Year Graduate Post-Study Work Route", "No sponsorships required for Youth Mobility", "Admission support in 150+ UK universities"]
        };
      }
      return {
        title: `Student Visa Admission Route (${countryName})`,
        desc: `You are eligible for direct Bachelors or Masters admission pathways in the ${countryName}. Mani Abroad Consultancy will handle your university matching, documentation, and visa filing.`,
        features: ["Priority scholarship application assistance", "Post-study work permit arrangement (up to 3 years)", "Complete pre-departure briefings"]
      };
    } else if (goal === "migrate") {
      if (selectedCountry === "DE") {
        return {
          title: "Germany Opportunity Card (Chancenkarte)",
          desc: "Excellent! You qualify for Germany's points-based Opportunity Card. This visa allows skilled professionals to live and seek job opportunities in Germany without a pre-existing job offer.",
          features: ["Live & look for work in Germany for up to 1 year", "Points based on qualification, age, and language skills", "Part-time work permitted up to 20 hours/week"]
        };
      } else if (selectedCountry === "GB") {
        return {
          title: "UK Youth Mobility Visa Route",
          desc: "You are eligible for the UK Youth Mobility Scheme. This allows young professionals to live, work, and travel in the United Kingdom without requiring job sponsorship.",
          features: ["Work in any job sector in the UK", "Stay up to 2 years with flexible extensions", "Fast-track processing & direct filing"]
        };
      }
      return {
        title: `Skilled Visa & Direct Work Permits (${countryName})`,
        desc: `You qualify to explore skilled migration pathways, professional job placement routes, or direct tourist-to-work permit transitions for the ${countryName}.`,
        features: ["Official credential evaluation advisory", "Employer matchmaking assistance", "Comprehensive visa filing support"]
      };
    } else {
      return {
        title: `Fast-Track Tourist & Visitor Visa (${countryName})`,
        desc: `You are set for a fast-track visitor or tourist visa pathway for the ${countryName}. We ensure error-free documentation checks to ensure high success rates.`,
        features: ["Sponsor document verification checks", "Interview preparation guides", "Hotel and flight booking itinerary drafts"]
      };
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Enquiry submitted successfully! A consultant will contact you shortly.");
    }, 1200);
  };

  const pathway = getMatchedPathway();

  return (
    <section id="eligibility-planner" className="bg-background py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">Interactive Tool</p>
            <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Visa Eligibility Planner
            </h2>
            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent mx-auto" />
            <p className="mt-6 text-[1.02rem] text-muted-foreground leading-relaxed">
              Answer 3 simple questions to instantly match with your dream destinations and evaluate your visa eligibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Wizard Main Card */}
        <ScrollReveal direction="up" delay={200}>
          <div 
            className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 sm:p-10"
            style={{ boxShadow: "var(--shadow-premium)" }}
          >
            {/* Step Progress Indicators */}
            <div className="mb-10 flex items-center justify-between border-b border-border/40 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Step {step} of 4
              </span>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === step 
                        ? "w-8 bg-[var(--gold)]" 
                        : i < step 
                        ? "w-4 bg-[var(--gold)]/40" 
                        : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* STEP 1: CHOOSE GOAL */}
            {step === 1 && (
              <div className="animate-fade-in duration-300">
                <h3 className="font-display text-2xl text-foreground mb-6">What is your primary goal?</h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  {goals.map((g) => {
                    const Icon = g.icon;
                    const isSelected = goal === g.id;
                    return (
                      <button
                        key={g.id}
                        onClick={() => {
                          setGoal(g.id);
                          handleNext();
                        }}
                        className={`group relative flex flex-col justify-between text-left p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                          isSelected 
                            ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_10px_25px_rgba(224,183,109,0.12)]" 
                            : "border-border bg-card/45 hover:border-border-hover hover:bg-card"
                        }`}
                      >
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 mb-6 ${
                          isSelected 
                            ? "bg-[var(--gold)] text-[#0b1224]" 
                            : "bg-[var(--gold)]/10 text-[var(--gold)] group-hover:bg-[var(--gold)]/20"
                        }`}>
                          <Icon className="h-5.5 w-5.5" />
                        </div>
                        <div>
                          <h4 className={`font-sans text-sm font-bold uppercase tracking-wider ${
                            isSelected ? "text-[var(--gold)]" : "text-foreground"
                          }`}>
                            {g.title}
                          </h4>
                          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                            {g.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: CHOOSE DESTINATION */}
            {step === 2 && (
              <div className="animate-fade-in duration-300">
                <h3 className="font-display text-2xl text-foreground mb-6">Select your preferred destination</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {countries.map((c) => {
                    const isSelected = selectedCountry === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => {
                          setSelectedCountry(c.id);
                          handleNext();
                        }}
                        className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left ${
                          isSelected 
                            ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_5px_15px_rgba(224,183,109,0.08)]" 
                            : "border-border bg-card/45 hover:border-border-hover hover:bg-card"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={`https://flagcdn.com/w40/${c.code}.png`} 
                            width="24"
                            alt={`${c.name} Flag`}
                            className="rounded-sm border border-border/40 object-cover h-4 w-5.5"
                          />
                          <div>
                            <span className={`text-sm font-semibold ${isSelected ? "text-[var(--gold)]" : "text-foreground"}`}>
                              {c.name}
                            </span>
                            <span className="block text-[0.62rem] text-muted-foreground uppercase mt-0.5">
                              {c.visa.split(" / ")[0]}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
                          isSelected ? "translate-x-1 text-[var(--gold)]" : "group-hover:translate-x-0.5"
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 3: CHOOSE EDUCATION */}
            {step === 3 && (
              <div className="animate-fade-in duration-300">
                <h3 className="font-display text-2xl text-foreground mb-6">What is your highest education level completed?</h3>
                <div className="grid gap-5">
                  {educations.map((e) => {
                    const isSelected = education === e.id;
                    return (
                      <button
                        key={e.id}
                        onClick={() => {
                          setEducation(e.id);
                          handleNext();
                        }}
                        className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 text-left ${
                          isSelected 
                            ? "border-[var(--gold)] bg-[var(--gold)]/5 shadow-[0_5px_15px_rgba(224,183,109,0.08)]" 
                            : "border-border bg-card/45 hover:border-border-hover hover:bg-card"
                        }`}
                      >
                        <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isSelected ? "bg-[var(--gold)] text-[#0b1224]" : "bg-[var(--gold)]/10 text-[var(--gold)]"
                        }`}>
                          <GraduationCap className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className={`text-sm font-bold uppercase tracking-wider ${
                            isSelected ? "text-[var(--gold)]" : "text-foreground"
                          }`}>
                            {e.title}
                          </h4>
                          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                            {e.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 4: RESULT & LEAD FORM */}
            {step === 4 && (
              <div className="animate-fade-in duration-300">
                <div className="grid gap-8 lg:grid-cols-12 items-start">
                  
                  {/* Results Side */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-2 text-emerald-500 font-display text-lg">
                      <Sparkles className="h-5 w-5 animate-pulse" />
                      <span>Matching Pathway Found!</span>
                    </div>
                    
                    <div>
                      <h4 className="font-display text-2xl text-foreground leading-snug">
                        {pathway.title}
                      </h4>
                      <p className="mt-4 text-xs leading-relaxed text-muted-foreground leading-relaxed">
                        {pathway.desc}
                      </p>
                    </div>

                    <ul className="space-y-3">
                      {pathway.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lead Capture Form Side */}
                  <div className="lg:col-span-6 border-t border-border lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8">
                    {!isSubmitted ? (
                      <form onSubmit={handleLeadSubmit} className="space-y-4">
                        <div className="mb-4">
                          <h4 className="font-sans text-xs font-extrabold text-foreground uppercase tracking-wider">Book Priority Consultation</h4>
                          <p className="mt-1 text-xs text-muted-foreground">Submit your contact info to secure a priority assessment callback.</p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <label htmlFor="lead-name" className="text-[0.62rem] font-extrabold uppercase tracking-wider text-muted-foreground">Your Name *</label>
                          <div className="relative">
                            <input 
                              type="text" 
                              id="lead-name"
                              value={leadName}
                              onChange={(e) => setLeadName(e.target.value)}
                              placeholder="e.g. John Doe"
                              className="w-full rounded-xl border border-border bg-background/50 pl-10 pr-4 py-3 text-xs text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors"
                              required
                            />
                            <User className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/60" />
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="lead-phone" className="text-[0.62rem] font-extrabold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                          <div className="relative">
                            <input 
                              type="tel" 
                              id="lead-phone"
                              value={leadPhone}
                              onChange={(e) => setLeadPhone(e.target.value)}
                              placeholder="e.g. +91 88863 68886"
                              className="w-full rounded-xl border border-border bg-background/50 pl-10 pr-4 py-3 text-xs text-foreground focus:border-[var(--gold)] focus:outline-none transition-colors"
                              required
                            />
                            <Phone className="absolute left-3.5 top-3 h-4 w-4 text-muted-foreground/60" />
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0b1224] transition-all duration-300 disabled:opacity-75 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(224,183,109,0.3)] cursor-pointer"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          {isSubmitting ? "Submitting..." : "Get Free Assessment Callback"}
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-10 space-y-4 animate-fade-in">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 mx-auto">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <div>
                          <h4 className="font-display text-xl text-foreground font-semibold">Priority Booking Confirmed!</h4>
                          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                            Thank you, <strong className="text-foreground">{leadName}</strong>. A dedicated specialist for your {countries.find(c => c.id === selectedCountry)?.name} pathway will call you at <strong className="text-foreground">{leadPhone}</strong> within 24 business hours.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            )}

            {/* Navigation Buttons Container */}
            <div className="mt-8 flex justify-between border-t border-border/40 pt-6">
              {step > 1 ? (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-2 px-4 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 && (
                <button
                  onClick={handleNext}
                  disabled={
                    (step === 1 && !goal) ||
                    (step === 2 && !selectedCountry) ||
                    (step === 3 && !education)
                  }
                  className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#0b1224] bg-foreground px-6 py-2.5 rounded-xl hover:bg-foreground/90 disabled:opacity-35 transition-all cursor-pointer"
                  style={{
                    background: 
                      (step === 1 && goal) || 
                      (step === 2 && selectedCountry) || 
                      (step === 3 && education) 
                        ? "var(--gradient-gold)" 
                        : undefined
                  }}
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
