import { toast } from "sonner";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Send, 
  Plane,
  Mail
} from "lucide-react";

const columns = [
  { title: "Explore", items: ["Home", "About", "Services", "Gallery", "Contact"] },
  { title: "Services", items: ["Student Visa", "Tourism & Visitor Visa", "Opportunity Card Germany", "Youth Mobility Visa UK", "Flight Ticket Booking", "Education Loan Assistance"] },
  { title: "Useful Links", items: ["Blog", "FAQs", "Privacy Policy", "Terms & Conditions"] }
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden pt-0 pb-8 text-white border-t border-slate-800" style={{ background: "var(--gradient-ink)" }}>
      
      {/* CSS Keyframe Animation for Background Airplane along path */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fly-bg-path {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }
        .animate-flight-bg {
          animation: fly-bg-path 25s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          offset-path: path('M -100 280 Q 720 120 1540 50');
          offset-rotate: auto;
        }
      `}} />

      {/* =========================================================================
          BACKGROUND ANIMATED FLIGHT PATH (Night Sky Theme Moving Flight)
          ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full text-[var(--gold)]/10" viewBox="0 0 1440 350" fill="none" preserveAspectRatio="none">
          {/* Main flight path Q-curve */}
          <path 
            d="M -100 280 Q 720 120 1540 50" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeDasharray="6 8" 
            strokeLinecap="round"
          />
          {/* Loop return path */}
          <path 
            d="M 1540 50 Q 800 250 -100 280" 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeDasharray="4 6" 
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>

        {/* Tiny golden airplane moving along the background path */}
        <div className="absolute flex items-center text-[var(--gold)]/90 pointer-events-none animate-flight-bg" style={{ left: 0, top: 0 }}>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent to-[var(--gold)]/80 mr-1" />
          <Plane className="h-5 w-5 rotate-90 fill-[var(--gold)]" />
        </div>
      </div>

      {/* Subtle Background Lighting Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--gold)]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* =========================================================================
          GOLDEN FLIGHT SEPARATOR LINE (Top border)
          ========================================================================= */}
      <div className="relative w-full h-[1px] bg-slate-800/80 overflow-hidden mb-10">
        <div 
          className="absolute top-1/2 -translate-y-1/2 flex items-center text-[var(--gold)] animate-[fly-across-line_20s_linear_infinite] pointer-events-none"
          style={{ left: "-150px" }}
        >
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fly-across-line {
              0% { left: -150px; }
              100% { left: calc(100% + 150px); }
            }
          `}} />
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[var(--gold)] mr-1" />
          <Plane className="h-3.5 w-3.5 rotate-90 fill-[var(--gold)]/20" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* =========================================================================
            MIDDLE SECTION: 5-Column Grid (About, Explore, Services, Links, Contact)
            ========================================================================= */}
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 py-6 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Social Links */}
          <div className="flex flex-col items-start text-left gap-4 col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-18 items-center justify-center rounded-xl bg-white p-1.5 overflow-hidden shadow-[0_4px_20px_rgba(224,183,109,0.15)] border border-[var(--gold)]/20">
                <img src="/logo.png" alt="mcCoy Global Logo" className="h-full w-full object-contain" />
              </div>
              <div className="text-left">
                <span className="font-display text-lg tracking-[0.16em] font-extrabold uppercase text-white block leading-none">mcCoy Global</span>
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--gold)] font-bold block mt-1">Consultancy</span>
              </div>
            </div>
            <p className="text-[0.82rem] leading-relaxed text-slate-300 text-justify pr-2 font-medium">
              Licensed overseas education and migration consultancy. Honest advice,
              transparent fees, and a consultant who answers the phone.
            </p>
            
            {/* Social Media Links */}
            <div className="mt-2 flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/75 transition-all duration-300 hover:scale-110 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 fill-current" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/75 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white hover:shadow-[0_0_15px_rgba(238,42,123,0.4)] cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-8.5 w-8.5 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/75 transition-all duration-300 hover:scale-110 hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white hover:shadow-[0_0_15px_rgba(0,119,181,0.4)] cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 fill-current" />
              </a>
            </div>
          </div>

          {/* Dynamic Navigation Columns */}
          {columns.map((col) => (
            <div key={col.title} className="text-left">
              <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-black">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 font-bold">
                {col.items.map((item) => {
                  const href = col.title === "Services" 
                    ? "#services" 
                    : `#${item.toLowerCase().split(" ")[0] === "home" ? "" : item.toLowerCase().split(" ")[0]}`;
                  return (
                    <li key={item}>
                      <a
                        href={href}
                        className="text-[0.82rem] text-slate-300 hover:text-[var(--gold)] transition-all duration-300 hover:translate-x-1 block leading-relaxed"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Contact Details Column */}
          <div className="text-left col-span-2 lg:col-span-1">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[var(--gold)] font-black">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-[0.82rem] text-slate-305 font-bold">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[0.58rem] uppercase tracking-wider text-[var(--gold)]/60 font-black">Address</span>
                  <span className="text-white mt-0.5 block">Hyderabad, India</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[0.58rem] uppercase tracking-wider text-[var(--gold)]/60 font-black">WhatsApp</span>
                  <a 
                    href="https://wa.me/918886368886" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-[var(--gold)] transition-colors mt-0.5 block"
                  >
                    +91 88863 68886
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4.5 w-4.5 text-[var(--gold)] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[0.58rem] uppercase tracking-wider text-[var(--gold)]/60 font-black">Working Hours</span>
                  <span className="text-white mt-0.5 block">Mon - Sat: 10:00 AM - 6:30 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* =========================================================================
            NEWSLETTER SECTION: Stay Updated Panel (Clean Light Minimal Design)
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-6 border-b border-slate-800/85 text-left relative z-10">
          {/* Stay Updated Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--gold)]/10 text-[var(--gold)] border border-[var(--gold)]/15">
              <Mail className="h-4.5 w-4.5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-black uppercase text-white tracking-widest">Stay Updated</h4>
              <p className="text-xs font-semibold text-slate-400 mt-0.5">Subscribe to get the latest updates and offers.</p>
            </div>
          </div>

          {/* Form Box */}
          <div className="flex flex-col sm:flex-row items-stretch w-full lg:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-slate-900/60 border border-slate-800 text-white placeholder:text-slate-500 rounded-xl px-4 py-2.5 w-full lg:w-80 focus:border-[var(--gold)] focus:outline-none transition-all duration-300 font-semibold text-sm"
              required
            />
            <button 
              type="button" 
              onClick={() => toast.success("Subscribed successfully! Thank you for staying updated.")}
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-slate-950 px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[0.68rem] flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow"
            >
              <span>Subscribe</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM ROW: Copyright, ICEF/AAERI Accreditations, & Floating Scroll Top
            ========================================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 text-[0.68rem] uppercase tracking-widest text-slate-500 font-bold">
          
          {/* Copyright */}
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} mcCoy Global Consultancy. All Rights Reserved.
          </p>

          {/* Accredited Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* ICEF badge */}
            <div className="flex items-center gap-2 text-slate-400 font-bold border border-slate-800 bg-slate-950/20 px-3.5 py-1.5 rounded-xl shadow-sm hover:border-[var(--gold)]/30 hover:text-white transition-all duration-300 select-none">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black tracking-tighter">
                IC
              </div>
              <div className="text-left leading-none font-sans">
                <span className="block text-[10px] font-black text-white tracking-widest uppercase">ICEF</span>
                <span className="block text-[8px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">Accredited Agency</span>
              </div>
            </div>
            
            {/* AAERI badge */}
            <div className="flex items-center gap-2 text-slate-400 font-bold border border-slate-800 bg-slate-950/20 px-3.5 py-1.5 rounded-xl shadow-sm hover:border-[var(--gold)]/30 hover:text-white transition-all duration-300 select-none">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black tracking-tighter">
                AA
              </div>
              <div className="text-left leading-none font-sans">
                <span className="block text-[10px] font-black text-white tracking-widest uppercase">AAERI</span>
                <span className="block text-[8px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">Registered Consultant</span>
              </div>
            </div>
          </div>

          {/* Floating Scroll to Top button with rotating airplane */}
          <div className="flex items-center justify-center">
            <span className="text-[9px] text-slate-500/80 mr-3 hidden lg:block tracking-widest">DESIGNED WITH 💛 FOR GLOBAL DREAMERS</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0b1224] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              aria-label="Scroll to top"
            >
              <Plane className="h-4.5 w-4.5 rotate-45 transition-transform duration-500 hover:rotate-[405deg]" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}