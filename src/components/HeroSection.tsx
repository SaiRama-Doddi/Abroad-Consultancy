import { useState, useEffect } from "react";
import { Calendar, User, Globe, FileText, Shield, Handshake } from "lucide-react";

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

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoPlaying(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-10 sm:pb-12 lg:pb-16"
      style={{
        background: "linear-gradient(100deg, #060a15 0%, #060a15 35%, #0c4a6e 55%, #0284c7 75%, #38bdf8 100%)"
      }}
    >
      {/* Background Video blended with the sky-blue gradient */}
      <video
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000"
        style={{
          filter: "grayscale(100%) brightness(1.2) contrast(1.15)",
          mixBlendMode: "screen",
          opacity: 0.95
        }}
        src="/hero-flight.mp4"
        poster="/hero-fallback.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlaying={() => setVideoPlaying(true)}
      />

      {/* Smooth bottom fade into the page body */}
      <div 
        className="absolute inset-x-0 bottom-0 h-48 pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(to top, #060a15 0%, rgba(6, 10, 21, 0.4) 40%, transparent 100%)"
        }}
      />


      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col lg:max-w-3xl">
          {/* Top small header with flight path animation */}
          <div className="flex items-center gap-4 animate-slide-right">
            <span 
              className="text-[0.72rem] font-bold uppercase tracking-[0.45em] text-[var(--gold)]"
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

          {/* Main Title heading (Serif + Sky Blue font with letter-to-letter animation) */}
          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-white sm:text-7xl lg:text-[5.5rem] tracking-tight">
            <span 
              className="block"
              style={{ textShadow: "0 2px 12px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" }}
            >
              {renderLetterByLetter("Mani Abroad", 0.3, 0.1, "animate-letter-in", videoPlaying, 0)}
            </span>
            <span 
              className="block mt-2 text-[var(--gold)] font-semibold"
              style={{ textShadow: "0 2px 12px rgba(6, 10, 21, 0.95), 0 4px 30px rgba(6, 10, 21, 0.8), 0 1px 2px rgba(6, 10, 21, 0.95)" }}
            >
              {renderLetterByLetter("Consultancy", 0.3, 0.1, "animate-letter-in", videoPlaying, 11)}
            </span>
          </h1>


          {/* Subtitle description */}
          <p
            className="mt-8 max-w-xl text-base leading-relaxed text-white animate-fade-rise opacity-0 sm:text-lg"
            style={{ 
              animationDelay: "0.7s",
              textShadow: "0 2px 10px rgba(6, 10, 21, 0.95), 0 1px 3px rgba(6, 10, 21, 0.9)"
            }}
          >
            Your journey beyond borders, guided end to end – from choosing the
            right country to boarding the flight with confidence.
          </p>

          {/* CTA Action Buttons */}
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-rise opacity-0"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="#contact"
              className="flex items-center gap-2.5 rounded-lg px-8 py-4 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-[#0b1224] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(224,183,109,0.4)]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Calendar className="h-4 w-4" />
              Free Consultation
            </a>
            <a
              href="#about"
              className="flex items-center gap-2.5 rounded-lg border border-white/30 bg-[#060a15]/30 backdrop-blur-sm px-8 py-4 text-[0.75rem] font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:border-[var(--gold)] hover:text-[var(--gold)] hover:bg-[var(--gold)]/10 hover:scale-105"
              style={{ textShadow: "0 1px 3px rgba(6, 10, 21, 0.8)" }}
            >
              <User className="h-4 w-4" />
              About Us
            </a>
          </div>
        </div>

        {/* Bottom Cards wrapped in glassmorphic box */}
        <div
          className="mt-10 w-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-md md:p-8 animate-slide-up opacity-0"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="group transition-all duration-500 hover:-translate-y-1.5">
              <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/20 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Globe className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-sans text-[0.8rem] font-extrabold tracking-[0.15em] text-white uppercase">
                    Global Opportunities
                  </h3>
                </div>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  Access top study, work and migration destinations worldwide.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group transition-all duration-500 hover:-translate-y-1.5">
              <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/20 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <FileText className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-sans text-[0.8rem] font-extrabold tracking-[0.15em] text-white uppercase">
                    Expert Guidance
                  </h3>
                </div>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  Personalized support from application to visa and beyond.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group transition-all duration-500 hover:-translate-y-1.5">
              <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/20 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Shield className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-sans text-[0.8rem] font-extrabold tracking-[0.15em] text-white uppercase">
                    Trusted & Reliable
                  </h3>
                </div>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  Transparent process with ethical advice you can always count on.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group transition-all duration-500 hover:-translate-y-1.5">
              <div className="group-hover:translate-y-[-2px] transition-transform duration-300">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/20 transition-all duration-500 group-hover:rotate-6 group-hover:bg-[var(--gold)]/20 group-hover:scale-110 shadow-[0_0_15px_rgba(224,183,109,0.15)]">
                    <Handshake className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-sans text-[0.8rem] font-extrabold tracking-[0.15em] text-white uppercase">
                    End-to-End Support
                  </h3>
                </div>
                <p className="mt-4 text-[0.82rem] leading-relaxed text-white/50 group-hover:text-white/70 transition-colors">
                  We're with you at every step of your journey, until you reach your destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}