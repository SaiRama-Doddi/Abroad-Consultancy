import { useState, useEffect } from "react";

const title = "Mani Abroad Consultancy";

export function HeroSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    // Fallback timer: start animations after 3s in case the video is slow or autoplay fails
    const timer = setTimeout(() => {
      setVideoPlaying(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-flight.mp4"
        poster="/hero-fallback.jpg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlaying={() => setVideoPlaying(true)}
      />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--ink), transparent 55%)" }} />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28">
        <p 
          className={`${videoPlaying ? "animate-fade-rise" : "opacity-0"} text-[0.7rem] uppercase tracking-[0.42em] text-gold`}
          style={{ animationDelay: "0.4s" }}
        >
          Study &nbsp;/&nbsp; Work &nbsp;/&nbsp; Migrate
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-sky-400 sm:text-7xl lg:text-8xl">
          {title.split(" ").map((word, wi) => (
            <span key={wi} className="mr-[0.28em] inline-block whitespace-nowrap">
              {word.split("").map((ch, ci) => (
                <span
                  key={ci}
                  className={`${videoPlaying ? "animate-letter-in" : "opacity-0"} inline-block`}
                  style={{ animationDelay: `${0.8 + wi * 0.22 + ci * 0.045}s` }}
                >
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div 
          className={`${videoPlaying ? "animate-line-grow" : "scale-x-0"} mt-8 h-px w-56`} 
          style={{ background: "var(--gradient-gold)", animationDelay: "2.0s" }} 
        />

        <p
          className={`${videoPlaying ? "animate-fade-rise" : "opacity-0"} mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/75`}
          style={{ animationDelay: "2.4s" }}
        >
          Your journey beyond borders, guided end to end — from choosing the right
          country to boarding the flight with confidence.
        </p>

        <div 
          className={`${videoPlaying ? "animate-fade-rise" : "opacity-0"} mt-10 flex flex-wrap gap-4 pb-24`} 
          style={{ animationDelay: "2.8s" }}
        >
          <a
            href="#contact"
            className="rounded-full px-8 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.22em] text-ink"
            style={{ background: "var(--gradient-gold)" }}
          >
            Free Consultation
          </a>
          <a
            href="#about"
            className="rounded-full border border-primary-foreground/30 px-8 py-3 text-[0.75rem] uppercase tracking-[0.22em] text-primary-foreground/85 transition-colors hover:border-gold hover:text-gold"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  );
}