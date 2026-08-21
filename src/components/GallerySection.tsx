import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ShieldCheck, Trophy, X, Clock, FileCheck, ArrowRight, PlaneTakeoff } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface SuccessStory {
  name: string;
  destination: string;
  countryCode: string;
  visaType: "student" | "mobility";
  visaLabel: string;
  pathwayInfo: string;
  image: string;
  approvalTime: string;
  serial: string;
  testimonial: string;
  milestones: string[];
}

const successStories: SuccessStory[] = [
  {
    name: "Kiran Kumar",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "MS in Computer Science · UT Dallas",
    image: "/student-usa.png",
    approvalTime: "12 Days",
    serial: "MCC-US-8924",
    testimonial: "mcCoy Global made my dream of studying in the USA a reality. Their expert guidance on SOP drafting and visa interview prep was flawless. Highly recommended!",
    milestones: ["Profile Evaluated", "I-20 Received", "Visa Slot Booked", "Visa Approved"]
  },
  {
    name: "Ananya Reddy",
    destination: "Germany",
    countryCode: "de",
    visaType: "mobility",
    visaLabel: "Germany Opportunity Card",
    pathwayInfo: "IT Software Engineer Pathway",
    image: "/student-germany.png",
    approvalTime: "18 Days",
    serial: "MCC-DE-4412",
    testimonial: "Securing my Germany Opportunity Card was seamless thanks to mcCoy. They helped me with point calculation and document verification. Best consultancy ever!",
    milestones: ["Points Audited", "Anabin Certified", "Embassy Interview", "Card Issued"]
  },
  {
    name: "Vikram Malhotra",
    destination: "United Kingdom",
    countryCode: "gb",
    visaType: "mobility",
    visaLabel: "UK Youth Mobility Visa",
    pathwayInfo: "Marketing Analyst · London",
    image: "/student-uk.png",
    approvalTime: "10 Days",
    serial: "MCC-UK-1092",
    testimonial: "Extremely professional team. They handled my Youth Mobility Visa smoothly, and I arrived in London within weeks. Truly hassle-free!",
    milestones: ["VFS Lodgement", "Biometrics Done", "Decision Received", "Visa Endorsed"]
  },
  {
    name: "Sneha Rao",
    destination: "Singapore",
    countryCode: "sg",
    visaType: "student",
    visaLabel: "Student Visa & Internship",
    pathwayInfo: "NSTC Logistics Management + AI",
    image: "/student-singapore.png",
    approvalTime: "14 Days",
    serial: "MCC-SG-3810",
    testimonial: "Thanks to mcCoy, I got my Singapore student visa and an internship placement at a leading logistics firm. Their guidance changed my career.",
    milestones: ["University Offer", "ICA Application", "STP Approval", "Entry Granted"]
  }
];

export function GallerySection() {
  const [filter, setFilter] = useState<"all" | "student" | "mobility">("all");
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredStories = successStories.filter(
    (story) => filter === "all" || story.visaType === filter
  );

  return (
    <section id="gallery" className="bg-[#fcfbf9] pt-6 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/25 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.25em] text-[var(--gold)] shadow-[0_0_15px_rgba(224,183,109,0.1)] mb-3">
              <Trophy className="h-3.5 w-3.5 shrink-0 fill-[var(--gold)]/20 animate-pulse text-[var(--gold)]" />
              <span>Success Stories</span>
            </div>
            
            <h2 className="font-display text-4xl leading-tight text-slate-800 sm:text-5xl font-extrabold tracking-tight text-left">
              Visa <span className="text-[var(--gold)] font-bold">Success</span> Gallery
            </h2>

            <div className="mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-4 text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Real approvals from ambitious students and professionals who achieved their dreams abroad with mcCoy Global Consultancy.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Filter Tabs (Left-aligned to match design guidelines) */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex justify-start gap-2 mb-8 overflow-x-auto pb-2 scrollbar-thin">
            {(["all", "student", "mobility"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-full px-5 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  filter === type
                    ? "text-[#0b1224] shadow-[0_4px_12px_rgba(224,183,109,0.25)] scale-105"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50 bg-white border border-slate-100"
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
                onClick={() => setSelectedStory(story)}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-150/70 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] w-full cursor-pointer"
              >
                {/* Top gold bar accent panel */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Shine effect overlay */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none z-20" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Photo Container */}
                  <div className="relative h-64 w-full overflow-hidden bg-slate-50">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Visa Approved pill */}
                    <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm px-3.5 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-widest text-white shadow-md">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Approved</span>
                    </div>

                    {/* Serial watermark label */}
                    <div className="absolute bottom-3 right-4 z-20 font-mono text-[9px] font-semibold text-white/70 bg-black/35 backdrop-blur-sm px-2 py-0.5 rounded">
                      {story.serial}
                    </div>
                  </div>

                  {/* Info Panel with security watermark */}
                  <div className="p-6 relative flex-grow flex flex-col justify-between">
                    {/* Faint 'PASSPORT' Watermark in background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                      <span className="font-display font-black text-6xl tracking-widest uppercase">VISA</span>
                    </div>

                    <div>
                      {/* Country info */}
                      <div className="flex items-center gap-2 mb-3.5">
                        <img 
                          src={`https://flagcdn.com/w40/${story.countryCode}.png`} 
                          width="22"
                          alt={`${story.destination} Flag`}
                          className="rounded-sm border border-slate-100 shadow-sm"
                        />
                        <span className="text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--gold)]">
                          {story.destination}
                        </span>
                      </div>

                      {/* Name */}
                      <h4 className="font-display text-[1.15rem] text-slate-800 font-extrabold group-hover:text-[var(--gold)] transition-colors duration-300">
                        {story.name}
                      </h4>

                      {/* Visa Label */}
                      <p className="mt-2 text-[0.82rem] text-slate-500 leading-snug">
                        {story.pathwayInfo}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-5 pt-4 border-t border-slate-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-slate-400" />
                        <span className="text-[0.72rem] font-bold text-slate-500">{story.approvalTime}</span>
                      </div>
                      
                      <span className="text-[0.7rem] font-extrabold uppercase tracking-wider text-[var(--gold)] group-hover:translate-x-1.5 transition-transform duration-300 flex items-center gap-1">
                        View Case <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Faint Background Indexing Watermark */}
                <div className="absolute right-3 bottom-1 text-7xl font-display font-black text-slate-100/55 select-none pointer-events-none transition-colors duration-500 group-hover:text-[var(--gold)]/5 z-0">
                  {`0${idx + 1}`}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* PASSPORT DETAIL MODAL */}
        {selectedStory && isClient && createPortal(
          <div className="fixed inset-0 z-[100] overflow-y-auto p-4 sm:p-6 md:p-10 flex items-start justify-center md:items-center">
            {/* Backdrop Blur */}
            <div 
              className="fixed inset-0 bg-[#0b1224]/85 backdrop-blur-sm animate-fade-in z-0"
              onClick={() => setSelectedStory(null)}
            />
            
            {/* Close Button - Fixed in viewport top-right for mobile & scroll-proof accessibility */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] bg-slate-900/90 hover:bg-slate-800 text-white p-3 rounded-full transition-all duration-300 cursor-pointer shadow-[0_5px_20px_rgba(0,0,0,0.4)] border border-white/10"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Box - Scrollable internally on tiny heights to prevent cutoffs */}
            <div className="relative bg-white rounded-[28px] border border-slate-100 w-full max-w-4xl shadow-2xl z-10 animate-slide-up duration-500 grid md:grid-cols-2 my-auto max-h-[90vh] md:max-h-[85vh] overflow-y-auto">

              {/* Left Side: Passport Page Photo & Info */}
              <div className="relative bg-slate-50 p-8 flex flex-col justify-between border-r border-slate-200/50">
                <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none" />
                
                <div>
                  {/* Passport Header Title */}
                  <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4 mb-6">
                    <span className="font-mono text-xs font-bold text-slate-400">PASSPORT CONTROL</span>
                    <span className="font-mono text-xs font-extrabold text-[var(--gold)]">{selectedStory.serial}</span>
                  </div>

                  {/* Photo framed like a real passport attachment */}
                  <div className="flex justify-center mb-6">
                    <div className="relative p-2 bg-white rounded-2xl shadow-md border border-slate-200 rotate-[-1.5deg]">
                      <img 
                        src={selectedStory.image} 
                        alt={selectedStory.name}
                        className="w-48 h-56 object-cover rounded-xl grayscale-[15%] filter"
                      />
                      {/* Round Gold Holographic Seal overlay */}
                      <div className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full border-2 border-dashed border-[var(--gold)] bg-white flex items-center justify-center shadow-lg rotate-12">
                        <div className="w-11 h-11 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)] flex flex-col items-center justify-center">
                          <span className="font-display font-black text-[7px] text-[var(--gold)] tracking-widest leading-none">APPROVED</span>
                          <span className="font-display font-black text-[6px] text-[var(--gold)]">MCCOY</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Identity Grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-left">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Given Name</span>
                      <span className="text-sm font-extrabold text-slate-800">{selectedStory.name}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Destination</span>
                      <span className="text-sm font-extrabold text-slate-800 flex items-center gap-1.5">
                        <img 
                          src={`https://flagcdn.com/w40/${selectedStory.countryCode}.png`} 
                          width="16"
                          alt="Flag"
                          className="rounded-sm"
                        />
                        {selectedStory.destination}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Visa Type</span>
                      <span className="text-xs font-bold text-slate-700 bg-slate-200/60 px-2 py-0.5 rounded">{selectedStory.visaLabel}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Speed of Issue</span>
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
                        <Clock className="h-3 w-3 text-[var(--gold)]" /> {selectedStory.approvalTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-4 text-center">
                  <span className="font-mono text-[9px] text-slate-400">P&lt;INDMCC&lt;&lt;{selectedStory.name.replace(" ", "&lt;").toUpperCase()}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span>
                </div>
              </div>

              {/* Right Side: Milestones & Testimonial Case Study */}
              <div className="p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="inline-flex items-center gap-1 text-[var(--gold)] font-bold text-xs uppercase tracking-widest mb-3">
                    <FileCheck className="h-4 w-4" />
                    <span>Case Verification</span>
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-slate-800 tracking-tight text-left mb-4">
                    Journey Details
                  </h3>

                  {/* Quote / Testimonial Box */}
                  <div className="bg-[var(--gold)]/5 border-l-4 border-[var(--gold)] p-4 rounded-r-2xl mb-6 relative">
                    <span className="absolute top-2 right-4 text-4xl font-display font-black text-[var(--gold)]/20 leading-none">“</span>
                    <p className="text-[0.88rem] text-slate-600 leading-relaxed italic text-justify pr-2">
                      {selectedStory.testimonial}
                    </p>
                  </div>

                  {/* Application Timeline Milestones */}
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 text-left">Processing Milestones</span>
                    <div className="space-y-3.5">
                      {selectedStory.milestones.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                            <span className="text-[10px] font-extrabold text-emerald-600">✓</span>
                          </div>
                          <span className="text-xs font-semibold text-slate-700">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a 
                    href="#contact"
                    onClick={() => setSelectedStory(null)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/90 hover:to-[var(--gold)] text-[#0b1224] text-xs font-extrabold uppercase tracking-widest py-3.5 px-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Start Your Success Story <PlaneTakeoff className="h-4 w-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>,
          document.body
        )}

      </div>
    </section>
  );
}
