import { toast } from "sonner";
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Plane, 
  Mail
} from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Destinations", href: "#destinations" },
  { name: "Services", href: "#services" },
  { name: "Our Expertise", href: "#expertise" },
  { name: "Contact", href: "#contact" }
];

const serviceLinks = [
  { name: "Student Visa", href: "#services" },
  { name: "Tourism & Visitor Visa", href: "#services" },
  { name: "Opportunity Card Germany", href: "#services" },
  { name: "Youth Mobility Visa UK", href: "#services" },
  { name: "Flight Ticket Booking", href: "#services" },
  { name: "Education Loans", href: "#services" }
];

const usefulLinks = [
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQs", href: "#faq" },
  { name: "Free Assessment", href: "#free-assessment" }
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden pt-0 pb-28 sm:pb-12 text-white border-t border-slate-800" style={{ background: "var(--gradient-ink)" }}>
      
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
      <div className="relative w-full h-[1px] bg-slate-800/80 overflow-hidden mb-6 sm:mb-10">
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

      <div className="mx-auto max-w-7xl px-5 sm:px-6 relative z-10">
        
        {/* =========================================================================
            MIDDLE SECTION: Responsive Grid (Brand, Explore, Useful Links, Services, Contact)
            ========================================================================= */}
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-12 xl:grid-cols-12 py-6 sm:py-10 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info & Social Links */}
          <div className="flex flex-col items-start text-left gap-4 col-span-2 md:col-span-12 xl:col-span-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-18 items-center justify-center rounded-xl bg-white p-1.5 overflow-hidden shadow-[0_4px_20px_rgba(224,183,109,0.15)] border border-[var(--gold)]/20 shrink-0">
                <img src="/logo.png" alt="McCoy Global Logo" className="h-full w-full object-contain" />
              </div>
              <div className="text-left">
                <span className="font-display text-lg tracking-[0.16em] font-extrabold uppercase text-white block leading-none">McCoy Global</span>
                <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[var(--gold)] font-bold block mt-1">Consultancy</span>
              </div>
            </div>
            <p className="text-[0.84rem] leading-relaxed text-slate-300 text-left pr-2 font-medium max-w-xl">
              Licensed overseas education and migration consultancy. Honest advice,
              transparent fees, and a consultant who answers the phone.
            </p>
            
            {/* Social Media Links - Authentic Official Brand Icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(24,119,242,0.35)] hover:shadow-[0_6px_18px_rgba(24,119,242,0.5)] cursor-pointer shrink-0"
                aria-label="Facebook"
                title="Follow us on Facebook"
              >
                <svg className="h-4.5 w-4.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(214,36,159,0.35)] hover:shadow-[0_6px_18px_rgba(214,36,159,0.5)] cursor-pointer overflow-hidden shrink-0"
                style={{
                  background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)"
                }}
                aria-label="Instagram"
                title="Follow us on Instagram"
              >
                <svg className="h-4.5 w-4.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 shadow-[0_4px_12px_rgba(10,102,194,0.35)] hover:shadow-[0_6px_18px_rgba(10,102,194,0.5)] cursor-pointer shrink-0"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
              >
                <svg className="h-4.5 w-4.5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="text-left col-span-1 md:col-span-4 xl:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-black">Explore</h3>
            </div>
            <ul className="space-y-2 font-bold">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[0.82rem] text-slate-300 hover:text-[var(--gold)] transition-all duration-200 py-0.5 leading-relaxed"
                  >
                    <span className="text-[var(--gold)]/40 text-xs font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--gold)]">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="text-left col-span-1 md:col-span-4 xl:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-black">Useful Links</h3>
            </div>
            <ul className="space-y-2 font-bold">
              {usefulLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[0.82rem] text-slate-300 hover:text-[var(--gold)] transition-all duration-200 py-0.5 leading-relaxed"
                  >
                    <span className="text-[var(--gold)]/40 text-xs font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--gold)]">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div className="text-left col-span-2 md:col-span-4 xl:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-black">Services</h3>
            </div>
            {/* 2-column subgrid on mobile, 1 column on tablet & desktop */}
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2 font-bold">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-1.5 text-[0.82rem] text-slate-300 hover:text-[var(--gold)] transition-all duration-200 py-0.5 leading-relaxed"
                  >
                    <span className="text-[var(--gold)]/40 text-xs font-bold transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--gold)]">›</span>
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Details - Responsive 3-Card Strip on Tablet, Vertical Stack on Desktop */}
          <div className="text-left col-span-2 md:col-span-12 xl:col-span-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
              <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] font-black">Contact Us</h3>
            </div>
            
            {/* Unified Sleek Container */}
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800/90 p-3 sm:p-4 shadow-md w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-3 sm:gap-3.5">
              
              {/* Item 1: Address */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500/15 border border-rose-400/35 text-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.15)]">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[0.58rem] uppercase tracking-wider text-rose-400/90 font-black">Address</span>
                  <span className="text-white mt-0.5 block text-[0.82rem] font-semibold whitespace-nowrap">Hyderabad, India</span>
                </div>
              </div>

              {/* Item 2: WhatsApp / Phone with direct Chat badge */}
              <a 
                href="https://wa.me/918886368886" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70 group hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all duration-200 cursor-pointer"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/35 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="block text-[0.58rem] uppercase tracking-wider text-emerald-400/90 font-black whitespace-nowrap">WhatsApp & Call</span>
                    <span className="text-[0.55rem] bg-emerald-500/20 text-emerald-400 border border-emerald-500/35 px-1.5 py-0.2 rounded-full font-bold uppercase tracking-wider shrink-0 transition-transform group-hover:scale-105">
                      Chat
                    </span>
                  </div>
                  <span className="text-white group-hover:text-emerald-400 transition-colors mt-0.5 block text-[0.82rem] font-bold tracking-wide whitespace-nowrap">
                    +91 88863 68886
                  </span>
                </div>
              </a>

              {/* Item 3: Working Hours */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/70">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-400/35 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.15)]">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[0.58rem] uppercase tracking-wider text-amber-400/90 font-black">Working Hours</span>
                  <span className="text-white mt-0.5 block text-[0.82rem] font-semibold whitespace-nowrap">
                    Mon – Sat: 10AM – 6:30PM
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* =========================================================================
            NEWSLETTER SECTION: Stay Updated Panel
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 py-6 border-b border-slate-800/85 text-left relative z-10">
          {/* Stay Updated Title */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400 border border-sky-400/35 shadow-[0_0_15px_rgba(56,189,248,0.25)]">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-display text-sm font-black uppercase text-white tracking-widest">Stay Updated</h4>
              <p className="text-xs font-medium text-slate-400 mt-0.5">Subscribe to get the latest overseas visa updates and alerts.</p>
            </div>
          </div>

          {/* Form Box */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Subscribed successfully! Thank you for staying updated.");
            }}
            className="flex flex-col sm:flex-row items-stretch w-full lg:w-auto gap-2.5 sm:gap-3"
          >
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-slate-900/70 border border-slate-800 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 sm:py-2.5 w-full lg:w-80 focus:border-[var(--gold)] focus:outline-none transition-all duration-300 font-semibold text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-[var(--gold)] hover:bg-[var(--gold)]/90 text-slate-950 px-6 py-3 sm:py-2.5 rounded-xl font-bold uppercase tracking-widest text-[0.72rem] flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-[1.02] shadow-sm hover:shadow active:scale-95 shrink-0"
            >
              <span>Subscribe</span>
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>

        {/* =========================================================================
            BOTTOM ROW: Copyright, Accreditations & Scroll to Top
            ========================================================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6 text-[0.68rem] uppercase tracking-widest text-slate-400 font-bold">
          
          {/* Copyright */}
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} McCoy Global Consultancy. All Rights Reserved.
          </p>

          {/* Accredited Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {/* ICEF badge */}
            <div className="flex items-center gap-2 text-slate-400 font-bold border border-slate-800 bg-slate-950/40 px-3 py-1.5 rounded-xl shadow-sm hover:border-[var(--gold)]/30 hover:text-white transition-all duration-300 select-none">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/15 text-blue-400 text-[10px] font-black tracking-tighter">
                IC
              </div>
              <div className="text-left leading-none font-sans">
                <span className="block text-[10px] font-black text-white tracking-widest uppercase">ICEF</span>
                <span className="block text-[8px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">Accredited Agency</span>
              </div>
            </div>
            
            {/* AAERI badge */}
            <div className="flex items-center gap-2 text-slate-400 font-bold border border-slate-800 bg-slate-950/40 px-3 py-1.5 rounded-xl shadow-sm hover:border-[var(--gold)]/30 hover:text-white transition-all duration-300 select-none">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-black tracking-tighter">
                AA
              </div>
              <div className="text-left leading-none font-sans">
                <span className="block text-[10px] font-black text-white tracking-widest uppercase">AAERI</span>
                <span className="block text-[8px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">Registered Consultant</span>
              </div>
            </div>
          </div>

          {/* Scroll to Top button - desktop only (on mobile the floating widget handles it) */}
          <div className="hidden md:flex items-center justify-center">
            <span className="text-[9px] text-slate-500/80 mr-3 hidden lg:block tracking-widest">DESIGNED WITH 💛 FOR GLOBAL DREAMERS</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[#0b1224] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
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