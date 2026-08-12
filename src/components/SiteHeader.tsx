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
          ? "bg-[#0b1224]/85 backdrop-blur-xl py-3 shadow-lg"
          : "bg-[#0b1224] py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo and Brand Title */}
        <a
          href="#home"
          className="flex items-center gap-3 animate-slide-right group"
          onClick={() => setActiveLink("Home")}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white p-1 overflow-hidden transition-transform duration-500 group-hover:rotate-12 shadow-[0_0_15px_rgba(224,183,109,0.3)]">
            <img src="/logo.png" alt="Mani Abroad Logo" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-[1.05rem] font-bold tracking-[0.22em] text-white leading-none uppercase">
              Mani Abroad
            </span>
            <span className="font-sans text-[0.62rem] tracking-[0.38em] text-[var(--gold)] leading-none uppercase mt-1.5 font-medium">
              Consultancy
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l, index) => {
            const isActive = activeLink === l.label;
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setActiveLink(l.label)}
                className={`relative text-[0.78rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 pb-1.5 ${
                  isActive
                    ? "text-[var(--gold)]"
                    : "text-white/60 hover:text-white"
                } animate-slide-down`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {l.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[var(--gold)] rounded-full animate-line-grow" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Call To Action */}
        <div className="hidden md:flex animate-slide-left" style={{ animationDelay: "0.5s" }}>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg px-6 py-2.5 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#0b1224] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(224,183,109,0.4)]"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Plane className="h-3.5 w-3.5 -rotate-45" />
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center p-2 text-white/80 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b1224]/95 border-b border-primary-foreground/10 py-6 px-6 backdrop-blur-xl md:hidden animate-fade-rise">
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
              className="mt-2 flex items-center justify-center gap-2 rounded-lg py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1224]"
              style={{ background: "var(--gradient-gold)" }}
            >
              <Plane className="h-4 w-4 -rotate-45" />
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}