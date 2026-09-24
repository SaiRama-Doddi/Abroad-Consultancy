import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { 
  ShieldCheck, 
  Trophy, 
  X, 
  Clock, 
  FileCheck, 
  PlaneTakeoff,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface SuccessStory {
  name: string;
  destination: string;
  countryCode: string;
  visaType: "student" | "mobility";
  visaLabel: string;
  pathwayInfo: string;
  image: string;
  imagePosition?: string;
  visaImage?: string;
  approvalTime: string;
  serial: string;
  testimonial: string;
  milestones: string[];
}

const successStories: SuccessStory[] = [
  {
    name: "Praveen Goud Cherlapally",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "University of North Texas · USA",
    image: "/story-3.webp",
    imagePosition: "center 22%",
    visaImage: "/visa-praveen.webp",
    approvalTime: "10 Days",
    serial: "MCC-US-4278",
    testimonial: "Securing my US F-1 student visa for University of North Texas was a dream come true! Mr. B. Rohith personally prepared me for the consular interview and ensured my financial documentation was airtight.",
    milestones: ["I-20 from UNT", "DS-160 & SEVIS Paid", "Consular Mock Interview", "F-1 Visa Approved"]
  },
  {
    name: "Nivedhita Burgula",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "Saint Peter's University · USA",
    image: "/story-2.webp",
    imagePosition: "center 25%",
    visaImage: "/visa-nivedhita.webp",
    approvalTime: "9 Days",
    serial: "MCC-US-2751",
    testimonial: "Securing my US F-1 visa for Saint Peter's University was a breeze with McCoy Global Consultancy. Mr. B. Rohith personally reviewed my documentation and conducted thorough mock interviews.",
    milestones: ["I-20 from Saint Peter's", "DS-160 & SEVIS Filing", "Consular Mock Interview", "F-1 Visa Approved"]
  },
  {
    name: "Abhishek Bouchula",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "Oklahoma City University · USA",
    image: "/story-4.webp",
    imagePosition: "center 20%",
    visaImage: "/visa-abhishek.webp",
    approvalTime: "10 Days",
    serial: "MCC-US-1469",
    testimonial: "Securing my US F-1 visa for Oklahoma City University was seamless with McCoy Global. Mr. B. Rohith’s personalized interview strategies and documentation guidance were top-notch!",
    milestones: ["I-20 from Oklahoma City Univ", "DS-160 & SEVIS Paid", "Consular Mock Preparation", "F-1 Visa Approved"]
  },
  {
    name: "Kavya Garkapogula",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "Murray State University · USA",
    image: "/story-1.webp",
    imagePosition: "center 25%",
    visaImage: "/visa-kavya.webp",
    approvalTime: "8 Days",
    serial: "MCC-US-0271",
    testimonial: "Securing my US F-1 student visa for Murray State University was seamless with McCoy Global Consultancy. Mr. B. Rohith’s interview prep and documentation support were exceptional!",
    milestones: ["I-20 from Murray State", "DS-160 & SEVIS Paid", "Consular Interview Prep", "F-1 Visa Approved"]
  },
  {
    name: "Swaroop Samuel Sangaveera",
    destination: "United States",
    countryCode: "us",
    visaType: "student",
    visaLabel: "Student Visa (F-1)",
    pathwayInfo: "Oklahoma City University · USA",
    image: "/story-5.webp",
    imagePosition: "center 18%",
    visaImage: "/visa-swaroop.webp",
    approvalTime: "8 Days",
    serial: "MCC-US-5952",
    testimonial: "Securing my US F-1 student visa for Oklahoma City University was seamless with McCoy Global Consultancy. Mr. B. Rohith personally reviewed my documentation and conducted thorough consular mock interviews.",
    milestones: ["I-20 from Oklahoma City Univ", "DS-160 & SEVIS Filing", "Consular Mock Preparation", "F-1 Visa Approved"]
  }
];

export function GallerySection() {
  const [filter, setFilter] = useState<"all" | "student" | "mobility">("all");
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null);
  const [modalTab, setModalTab] = useState<"photo" | "visa">("visa");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelectStory = (story: SuccessStory) => {
    setSelectedStory(story);
    setModalTab(story.visaImage ? "visa" : "photo");
  };

  const filteredStories = successStories.filter(
    (story) => filter === "all" || story.visaType === filter
  );

  const handleStartSuccessClick = (story: SuccessStory) => {
    setSelectedStory(null);

    if (story.countryCode && typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("select-country", { detail: { countryCode: story.countryCode } })
      );
    }

    setTimeout(() => {
      const formElement =
        document.getElementById("free-assessment") || document.getElementById("contact");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          const nameInput = document.getElementById("name");
          if (nameInput) nameInput.focus();
        }, 450);
      }
    }, 150);
  };

  return (
    <section id="gallery" className="bg-[#fcfbf9] pt-6 pb-12 sm:pt-10 sm:pb-16 relative overflow-hidden border-b border-slate-100">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.06] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-3 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-left w-full mb-6 sm:mb-8 flex flex-col items-start">
            {/* Premium Capsule Subtitle Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b1224] border border-amber-400/50 px-4 py-1.5 text-[0.72rem] sm:text-[0.75rem] font-black uppercase tracking-[0.22em] text-amber-300 shadow-[0_4px_16px_rgba(11,18,36,0.18)] mb-3">
              <Trophy className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400 animate-pulse" />
              <span className="text-amber-300 tracking-[0.22em] font-extrabold">Success Stories</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-slate-800 text-left">
              Visa <span className="text-[var(--gold)] font-bold">Success</span> Gallery
            </h2>

            <div className="mt-3 sm:mt-3.5 h-0.5 w-20 bg-gradient-to-r from-[var(--gold)] to-transparent" />

            <p className="mt-3.5 sm:mt-4 text-[0.92rem] sm:text-[1.02rem] text-slate-500 leading-relaxed text-left w-full md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
              Real approvals from ambitious students and professionals who achieved their dreams abroad with McCoy Global Consultancy.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Filter Tabs */}
        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-wrap items-center justify-start gap-2 mb-6 sm:mb-8">
            {(["all", "student", "mobility"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-full px-3.5 sm:px-5 py-1.5 sm:py-2.5 text-[0.66rem] sm:text-[0.72rem] font-extrabold uppercase tracking-[0.14em] sm:tracking-[0.2em] transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  filter === type
                    ? "text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 border border-emerald-400/30 shadow-[0_4px_14px_rgba(16,185,129,0.35)] ring-1 ring-emerald-400/40"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 bg-white border border-slate-200/80 shadow-sm"
                }`}
              >
                {type === "all" && "All Approvals"}
                {type === "student" && "Student Visas"}
                {type === "mobility" && "Opportunity & Mobility"}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid: 1 col on mobile, 2 on wide mobile/small tablet, 3 on tablet, 5 on desktop */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {filteredStories.map((story, idx) => (
            <ScrollReveal 
              key={story.name} 
              direction="up" 
              delay={150 + (idx % 5) * 70} 
              className="flex"
            >
              <div
                onClick={() => handleSelectStory(story)}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-150/70 bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-[var(--gold)] hover:shadow-[0_20px_40px_rgba(184,123,44,0.12),0_0_15px_rgba(184,123,44,0.06)] w-full cursor-pointer"
              >
                {/* Top gold bar accent panel */}
                <div className="absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/80 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

                {/* Shine effect overlay */}
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine pointer-events-none z-20" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Photo Container */}
                  <div className="relative h-60 min-[480px]:h-52 sm:h-56 md:h-64 w-full overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.name}
                      width={384}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: story.imagePosition || "center center" }}
                    />
                    
                    {/* Visa Approved pill */}
                    <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20 flex items-center gap-1 sm:gap-1.5 rounded-full bg-emerald-500/90 backdrop-blur-sm px-2 py-0.5 sm:px-3.5 sm:py-1.5 text-[0.52rem] sm:text-[0.62rem] font-extrabold uppercase tracking-wider text-white shadow-md">
                      <ShieldCheck className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                      <span>Approved</span>
                    </div>

                    {/* Visa Foil Attached Badge if present */}
                    {story.visaImage ? (
                      <div className="absolute bottom-1.5 left-2 sm:bottom-3 sm:left-3 z-20 flex items-center gap-1 rounded-full bg-slate-900/90 backdrop-blur-md px-2 py-0.5 text-[0.5rem] sm:text-[0.6rem] font-extrabold text-amber-300 border border-amber-400/40 shadow-sm">
                        <Sparkles className="h-2.5 w-2.5 text-amber-400" />
                        <span>Visa Card</span>
                      </div>
                    ) : null}

                    {/* Serial watermark label */}
                    <div className="absolute bottom-1.5 right-2 sm:bottom-3 sm:right-4 z-20 font-mono text-[7px] sm:text-[9px] font-semibold text-white/70 bg-black/35 backdrop-blur-sm px-1.5 py-0.5 rounded">
                      {story.serial}
                    </div>
                  </div>

                  {/* Info Panel with security watermark */}
                  <div className="p-3 sm:p-5 md:p-6 relative flex-grow flex flex-col justify-between">
                    {/* Faint 'PASSPORT' Watermark in background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                      <span className="font-display font-black text-4xl sm:text-6xl tracking-widest uppercase">VISA</span>
                    </div>

                    <div>
                      {/* Country info */}
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3.5">
                        <img 
                          src={`https://flagcdn.com/w40/${story.countryCode}.png`} 
                          alt={`${story.destination} Flag`}
                          width={22}
                          height={15}
                          loading="lazy"
                          decoding="async"
                          className="w-4 sm:w-5.5 rounded-sm border border-slate-100 shadow-sm"
                        />
                        <span className="text-[0.58rem] sm:text-[0.68rem] font-extrabold uppercase tracking-wider text-[var(--gold)]">
                          {story.destination}
                        </span>
                      </div>

                      {/* Name */}
                      <h4 className="font-display text-[0.88rem] sm:text-[1.05rem] md:text-[1.15rem] text-slate-800 font-extrabold group-hover:text-[var(--gold)] transition-colors duration-300 leading-tight line-clamp-1">
                        {story.name}
                      </h4>

                      {/* Visa Label */}
                      <p className="mt-1 sm:mt-2 text-[0.68rem] sm:text-[0.82rem] text-slate-500 leading-snug line-clamp-2">
                        {story.pathwayInfo}
                      </p>
                    </div>

                    {/* Footer Row */}
                    <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-slate-100/80 flex items-center justify-between">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <Clock className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 text-slate-400" />
                        <span className="text-[0.58rem] sm:text-[0.72rem] font-bold text-slate-500">{story.approvalTime}</span>
                      </div>
                      
                      <span className="text-[0.58rem] sm:text-[0.7rem] font-extrabold uppercase tracking-wider text-[var(--gold)] group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-0.5 sm:gap-1">
                        View <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Faint Background Indexing Watermark */}
                <div className="absolute right-2 bottom-0 text-4xl sm:text-7xl font-display font-black text-slate-100/55 select-none pointer-events-none transition-colors duration-500 group-hover:text-[var(--gold)]/5 z-0">
                  {`0${idx + 1}`}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* PASSPORT DETAIL MODAL */}
        {selectedStory && isClient && createPortal(
          <div className="fixed inset-0 z-[100] p-3 sm:p-6 flex items-center justify-center overflow-y-auto sm:overflow-hidden">
            {/* Backdrop Blur */}
            <div 
              className="fixed inset-0 bg-[#0b1224]/85 backdrop-blur-sm animate-fade-in z-0"
              onClick={() => setSelectedStory(null)}
            />
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedStory(null)}
              className="fixed top-3 right-3 sm:top-5 sm:right-5 z-[110] bg-slate-900/90 hover:bg-slate-800 text-white p-2.5 sm:p-3 rounded-full transition-all duration-300 cursor-pointer shadow-lg border border-white/10"
              aria-label="Close modal"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            {/* Modal Box */}
            <div className="relative bg-white rounded-3xl border border-slate-100 w-full max-w-4xl shadow-2xl z-10 animate-slide-up duration-500 grid md:grid-cols-2 overflow-hidden my-auto max-h-[94vh] md:max-h-none overflow-y-auto md:overflow-y-visible">

              {/* Left Side: Passport Page Photo, Visa Card & Info */}
              <div className="relative bg-slate-50 p-4 sm:p-6 flex flex-col justify-between border-r border-slate-200/50">
                <div className="absolute inset-0 bg-[radial-gradient(#e0b76d_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-[0.04] pointer-events-none" />
                
                <div>
                  {/* Passport Header Title */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-3">
                    <span className="font-mono text-[11px] font-bold text-slate-400">PASSPORT CONTROL</span>
                    <span className="font-mono text-[11px] font-extrabold text-[var(--gold)]">{selectedStory.serial}</span>
                  </div>

                  {/* Switcher Tab between Photo and Visa Card */}
                  {selectedStory.visaImage && (
                    <div className="flex items-center justify-center gap-1 p-0.5 bg-slate-200/80 rounded-lg mb-3 border border-slate-300/60">
                      <button
                        type="button"
                        onClick={() => setModalTab("photo")}
                        className={`flex-1 py-1 px-2 rounded-md text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                          modalTab === "photo"
                            ? "bg-white text-slate-800 shadow-sm"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        Student Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalTab("visa")}
                        className={`flex-1 py-1 px-2 rounded-md text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                          modalTab === "visa"
                            ? "bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 text-white shadow-sm ring-1 ring-emerald-400/40"
                            : "text-slate-500 hover:text-slate-800"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Verified Visa Card
                      </button>
                    </div>
                  )}

                  {/* Visual Display Container */}
                  <div className="flex flex-col items-center justify-center mb-3.5">
                    {modalTab === "visa" && selectedStory.visaImage ? (
                      <div className="relative w-full p-1.5 bg-white rounded-xl shadow border border-emerald-500/30">
                        <img 
                          src={selectedStory.visaImage} 
                          alt={`${selectedStory.name} Visa Card`}
                          className="w-full h-36 sm:h-44 object-contain rounded-lg bg-slate-900/5"
                        />
                        <div className="absolute -bottom-2 right-2.5 bg-emerald-600 text-white px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-wider flex items-center gap-1 shadow border border-emerald-300/40">
                          <ShieldCheck className="h-2.5 w-2.5" /> US Visa Granted
                        </div>
                      </div>
                    ) : (
                      <div className="relative p-1.5 bg-white rounded-xl shadow border border-slate-200 rotate-[-1deg]">
                        <img 
                          src={selectedStory.image} 
                          alt={selectedStory.name}
                          className="w-36 h-36 sm:w-40 sm:h-44 object-cover rounded-lg grayscale-[10%] filter"
                          style={{ objectPosition: selectedStory.imagePosition || "center center" }}
                        />
                        <div className="absolute -bottom-2.5 -right-2.5 w-11 h-11 rounded-full border border-dashed border-[var(--gold)] bg-white flex items-center justify-center shadow rotate-12">
                          <div className="w-9 h-9 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)] flex flex-col items-center justify-center">
                            <span className="font-display font-black text-[6px] text-[var(--gold)] tracking-widest leading-none">APPROVED</span>
                            <span className="font-display font-black text-[5px] text-[var(--gold)]">MCCOY</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Thumbnail Switcher */}
                    {selectedStory.visaImage && (
                      <div className="flex items-center gap-1.5 mt-2.5">
                        <button
                          type="button"
                          onClick={() => setModalTab("photo")}
                          className={`w-9 h-9 rounded-md overflow-hidden border transition-all p-0.5 cursor-pointer ${
                            modalTab === "photo" ? "border-[var(--gold)] scale-105 shadow-sm" : "border-slate-200 opacity-60 hover:opacity-100"
                          }`}
                          title="Candidate Photo"
                        >
                          <img 
                            src={selectedStory.image} 
                            alt="Photo" 
                            className="w-full h-full object-cover rounded" 
                            style={{ objectPosition: selectedStory.imagePosition || "center center" }}
                          />
                        </button>
                        <button
                          type="button"
                          onClick={() => setModalTab("visa")}
                          className={`w-12 h-9 rounded-md overflow-hidden border transition-all p-0.5 cursor-pointer ${
                            modalTab === "visa" ? "border-emerald-500 scale-105 shadow-sm" : "border-slate-200 opacity-60 hover:opacity-100"
                          }`}
                          title="Visa Card"
                        >
                          <img src={selectedStory.visaImage} alt="Visa Foil" className="w-full h-full object-contain rounded bg-slate-100" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Identity Grid */}
                  <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-left">
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Given Name</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800 truncate block">{selectedStory.name}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Destination</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-800 flex items-center gap-1.5 truncate">
                        <img 
                          src={`https://flagcdn.com/w40/${selectedStory.countryCode}.png`} 
                          width="14"
                          alt="Flag"
                          className="rounded-sm"
                        />
                        {selectedStory.destination}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Visa Type</span>
                      <span className="text-[11px] font-bold text-slate-700 bg-slate-200/60 px-1.5 py-0.5 rounded truncate block">{selectedStory.visaLabel}</span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider">Speed of Issue</span>
                      <span className="text-[11px] font-bold text-slate-700 flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5 text-[var(--gold)]" /> {selectedStory.approvalTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-200 pt-2 text-center">
                  <span className="font-mono text-[8px] text-slate-400">P&lt;INDMCC&lt;&lt;{selectedStory.name.replace(/\s+/g, "&lt;&lt;").toUpperCase()}&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</span>
                </div>
              </div>

              {/* Right Side: Milestones & Testimonial Case Study */}
              <div className="p-4 sm:p-6 flex flex-col justify-between bg-white">
                <div>
                  <div className="inline-flex items-center gap-1 text-[var(--gold)] font-bold text-[10px] uppercase tracking-widest mb-1.5">
                    <FileCheck className="h-3.5 w-3.5" />
                    <span>Case Verification</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight text-left mb-2.5">
                    Journey Details
                  </h3>

                  {/* Quote / Testimonial Box */}
                  <div className="bg-[var(--gold)]/5 border-l-3 border-[var(--gold)] p-3 rounded-r-xl mb-3.5 relative">
                    <span className="absolute top-1 right-3 text-3xl font-display font-black text-[var(--gold)]/20 leading-none">“</span>
                    <p className="text-[0.8rem] sm:text-[0.84rem] text-slate-600 leading-relaxed italic text-justify pr-2">
                      {selectedStory.testimonial}
                    </p>
                  </div>

                  {/* Application Timeline Milestones */}
                  <div>
                    <span className="block text-[9px] font-bold text-slate-400 uppercase tracking-wider mb-2 text-left">Processing Milestones</span>
                    <div className="space-y-2">
                      {selectedStory.milestones.map((m, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center shrink-0">
                            <span className="text-[9px] font-extrabold text-emerald-600">✓</span>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-700">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button 
                    type="button"
                    onClick={() => handleStartSuccessClick(selectedStory)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--gold)] to-[var(--gold)]/90 hover:to-[var(--gold)] text-[#0b1224] text-[11px] font-extrabold uppercase tracking-widest py-3 px-5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    Start Your Success Story <PlaneTakeoff className="h-3.5 w-3.5" />
                  </button>
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
