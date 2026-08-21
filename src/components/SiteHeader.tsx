import { useState, useEffect } from "react";
import { Plane, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy logic
      const sections = links.map((link) => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            label: link.label,
            top: rect.top + window.scrollY,
            bottom: rect.bottom + window.scrollY,
          };
        }
        return null;
      });

      const scrollPosition = window.scrollY + 120; // offset for header height

      const currentSection = sections.find(
        (sec) => sec && scrollPosition >= sec.top && scrollPosition < sec.bottom
      );

      if (currentSection) {
        setActiveLink(currentSection.label);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 border-b border-primary-foreground/5 ${
        isScrolled
          ? "bg-[#0b1224]/85 backdrop-blur-xl py-2.5 shadow-lg"
          : "bg-[#0b1224] py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo and Brand Title */}
        <a
          href="#home"
          className="flex items-center gap-3 animate-slide-right group"
          onClick={() => setActiveLink("Home")}
        >
          <div className="flex h-10 w-16 sm:h-12 sm:w-20 shrink-0 items-center justify-center rounded-lg bg-white p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(166,106,33,0.25)]">
            <img src="/logo.png" alt="mcCoy Global Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[1.15rem] sm:text-[1.4rem] font-black tracking-[0.03em] text-white leading-none drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
              mcCoy <span className="animate-gold-shimmer font-black text-transparent bg-clip-text drop-shadow-[0_2px_10px_rgba(224,183,109,0.35)]">Global</span>
            </span>
            <span className="font-sans text-[0.55rem] sm:text-[0.68rem] tracking-[0.36em] text-[var(--gold)] font-bold leading-none uppercase mt-1.5 sm:mt-2.5 drop-shadow-[0_1px_5px_rgba(224,183,109,0.25)]">
              Consultancy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-4 lg:flex">
          {links.map((l, index) => {
            const isActive = activeLink === l.label;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActiveLink(l.label)}
                className={`relative text-[0.72rem] font-extrabold uppercase tracking-[0.18em] transition-all duration-300 py-2.5 flex items-center justify-center ${
                  isActive
                    ? "text-[#0b1224] px-7 gap-2"
                    : "text-white/70 hover:text-white hover:bg-white/5 rounded-lg px-5 gap-0"
                } animate-slide-down`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {isActive && (
                  <span className="absolute inset-0 active-flight-shape z-0" />
                )}
                {isActive && (
                  <Plane className="h-3.5 w-3.5 text-[#0b1224] animate-plane-wiggle relative z-10" />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden lg:flex animate-slide-left" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="flex items-center gap-2.5 rounded-lg border border-[var(--gold)] bg-[#0b1224] px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:scale-105 hover:bg-[var(--gold)] hover:text-[#0b1224] hover:shadow-[0_0_20px_rgba(166,106,33,0.45)] group"
          >
            <Plane className="h-3.5 w-3.5 -rotate-45 text-[var(--gold)] group-hover:text-[#0b1224] transition-colors" />
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center p-2 text-white/80 hover:text-white lg:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b1224]/95 border-b border-primary-foreground/10 py-6 px-6 backdrop-blur-xl lg:hidden animate-fade-rise">
          <nav className="flex flex-col gap-5">
            {links.map((l) => {
              const isActive = activeLink === l.label;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => {
                    setActiveLink(l.label);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs font-semibold uppercase tracking-[0.2em] transition-colors py-2 border-b border-white/5 ${
                    isActive ? "text-[var(--gold)]" : "text-white/75 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg py-3 text-xs font-bold uppercase tracking-[0.2em] text-white border border-[var(--gold)] bg-[#0b1224] hover:bg-[var(--gold)] hover:text-[#0b1224] transition-all duration-300 group"
            >
              <Plane className="h-4 w-4 -rotate-45 text-[var(--gold)] group-hover:text-[#0b1224] transition-colors" />
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}