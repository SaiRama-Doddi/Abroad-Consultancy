import { useState, useEffect } from "react";
import { Calendar, Globe, FileText, Shield, Handshake } from "lucide-react";

function renderLetterByLetter(
  text: string,
  baseDelay: number,
  charStagger: number,
  animateClass: string,
  active: boolean,
  startIndex: number = 0
) {
  let charIndex = startIndex;
  return text.split(" ").map((word, wi) => {
    const wordChars = word.split("");
    return (
      <span key={wi} className="mr-[0.24em] inline-block whitespace-nowrap">
        {wordChars.map((ch, ci) => {
          const delay = baseDelay + charIndex * charStagger;
          charIndex++;
          return (
            <span
              key={ci}
              className={`${active ? animateClass : "opacity-0"} inline-block`}
              style={{ animationDelay: `${delay}s` }}
            >
              {ch}
            </span>
          );
        })}
      </span>
    );
  });
}

const HIGHLIGHT_CARDS = [
  {
    icon: Globe,
    title: "Global Opportunities",
    description: "Access premier universities, top study destinations, and high-demand global career pathways worldwide.",
    color: {
      bg: "bg-gradient-to-br from-cyan-500/25 via-blue-500/20 to-sky-600/30",
      border: "border-cyan-400/40",
      text: "text-cyan-300",
      shadow: "shadow-[0_0_20px_rgba(6,182,212,0.35)]",
      hoverBg: "group-hover:bg-cyan-500/30",
      hoverBorder: "group-hover:border-cyan-300/70"
    }
  },
  {
    icon: FileText,
    title: "Expert Guidance",
    description: "Personalized end-to-end counseling covering university shortlisting, documentation, and visa approvals.",
    color: {
      bg: "bg-gradient-to-br from-amber-500/25 via-yellow-500/20 to-orange-600/30",
      border: "border-amber-400/40",
      text: "text-amber-300",
      shadow: "shadow-[0_0_20px_rgba(245,158,11,0.35)]",
      hoverBg: "group-hover:bg-amber-500/30",
      hoverBorder: "group-hover:border-amber-300/70"
    }
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "Transparent and ethical advisory with accredited institutional partnerships you can always depend on.",
    color: {
      bg: "bg-gradient-to-br from-emerald-500/25 via-teal-500/20 to-green-600/30",
      border: "border-emerald-400/40",
      text: "text-emerald-300",
      shadow: "shadow-[0_0_20px_rgba(16,185,129,0.35)]",
      hoverBg: "group-hover:bg-emerald-500/30",
      hoverBorder: "group-hover:border-emerald-300/70"
    }
  },
  {
    icon: Handshake,
    title: "End-to-End Support",
    description: "Comprehensive assistance from profile assessment to pre-departure, accommodation, and airport reception.",
    color: {
      bg: "bg-gradient-to-br from-purple-500/25 via-fuchsia-500/20 to-indigo-600/30",
      border: "border-purple-400/40",
      text: "text-purple-300",
      shadow: "shadow-[0_0_20px_rgba(168,85,247,0.35)]",
      hoverBg: "group-hover:bg-purple-500/30",
      hoverBorder: "group-hover:border-purple-300/70"
    }
  }
];

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(true);

  return (
    <section
      id="home"
      className="relative flex min-h-[72vh] lg:min-h-[68vh] items-center overflow-hidden pt-24 sm:pt-28 lg:pt-24 pb-4 sm:pb-6 bg-[#060a15]"
    >
      {/* Background Video with high clarity & vibrancy */}
      <video
        className="absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 animate-slow-pan"
        style={{
          opacity: 0.85,
          maxHeight: "640px"
        }}
        src="/hero-cheerful-graduates-toss.mp4"
        poster="/hero-graduation.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlaying={() => setVideoPlaying(true)}
      />

      {/* Smooth bottom fade into the page body */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to top, #060a15 20%, rgba(6, 10, 21, 0.6) 65%, transparent 100%)"
        }}
      />

      {/* Focused text legibility gradient on the left side only - leaves video crystal clear on center & right */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(6, 10, 21, 0.95) 0%, rgba(6, 10, 21, 0.82) 32%, rgba(6, 10, 21, 0.35) 55%, transparent 75%)"
        }}
      />


      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:max-w-3xl">
          {/* Top small header with flight path animation */}
          <div className="flex items-center gap-4 animate-slide-right">
            <span
              className="text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.22em] sm:tracking-[0.35em] md:tracking-[0.45em] text-[var(--gold)] whitespace-nowrap"
              style={{ textShadow: "0 1px 4px rgba(6, 10, 21, 0.9), 0 2px 10px rgba(6, 10, 21, 0.8)" }}
            >
              Study &nbsp;&middot;&nbsp; Work &nbsp;&middot;&nbsp; Migrate
            </span>
            <div className="relative w-36 h-8 overflow-visible hidden sm:block">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 120 30" fill="none">
                <path
                  id="flight-path"
                  d="M10,24 C40,4 80,8 110,12"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeDasharray="4 4"
                  className="opacity-70"
                />
                <path
                  d="M-5,-3 L5,0 L-5,3 L-2,0 Z"
                  fill="var(--gold)"
                  className="animate-plane-fly"
                  style={{ animationDelay: "0.2s" }}
                />
              </svg>
            </div>
          </div>

          {/* Main Title heading (Serif + Italic Gold font as shown in screenshot) */}
          <h1 className="mt-4 font-serif text-[2.35rem] xs:text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.5rem] leading-[1.08] tracking-tight">
            <span
              className="block font-semibold text-white whitespace-nowrap"
              style={{ textShadow: "0 2px 12px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" }}
            >
              {renderLetterByLetter("McCoy Global", 0.1, 0.04, "animate-letter-in", videoPlaying, 0)}
            </span>
            <span
              className="block mt-1 sm:mt-2 text-[var(--gold)] font-normal italic"
              style={{ textShadow: "0 2px 12px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" }}
            >
              {renderLetterByLetter("Consultancy", 0.1, 0.04, "animate-letter-in", videoPlaying, 12)}
            </span>
          </h1>


          {/* Subtitle description */}
          <p
            className="mt-4 max-w-xl text-base leading-relaxed text-white animate-fade-rise opacity-0 sm:text-lg"
            style={{
              animationDelay: "0.7s",
              textShadow: "0 2px 10px rgba(6, 10, 21, 0.95), 0 1px 3px rgba(6, 10, 21, 0.9)"
            }}
          >
            Your journey beyond borders, guided end to end – from choosing the
            right country to boarding the flight with confidence.
          </p>

          {/* CTA Action Button */}
          <div
            className="mt-5 flex flex-col sm:flex-row flex-wrap gap-4 animate-fade-rise opacity-0"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2.5 rounded-lg px-7 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(166,106,33,0.45)] w-full sm:w-auto"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Calendar className="h-4 w-4" />
              Free Consultation
            </a>
          </div>
        </div>

        {/* Bottom Highlights - Aligned & Justified Cards */}
        <div
          className="mt-6 w-full rounded-2xl border border-white/10 bg-[#060a15]/75 p-4 sm:p-5 backdrop-blur-xl animate-slide-up opacity-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {HIGHLIGHT_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between h-full rounded-xl border border-white/5 bg-white/[0.025] p-4 sm:p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.06] hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                >
                  <div>
                    {/* Consistent Height Header: Colorful Icons and Titles perfectly aligned */}
                    <div className="flex items-center gap-3.5 min-h-[48px]">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${card.color.bg} ${card.color.text} border ${card.color.border} transition-all duration-500 group-hover:rotate-6 ${card.color.hoverBg} ${card.color.hoverBorder} group-hover:scale-110 ${card.color.shadow}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-sans text-xs sm:text-[0.88rem] font-bold tracking-wider text-white uppercase leading-snug">
                        {card.title}
                      </h3>
                    </div>

                    {/* Justified Description Text */}
                    <p
                      className="mt-3.5 text-xs sm:text-[0.84rem] leading-relaxed text-white/80 group-hover:text-white transition-colors"
                      style={{ textAlign: "justify", textJustify: "inter-word" }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
