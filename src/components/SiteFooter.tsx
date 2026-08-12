import { MapPin, Phone, Clock } from "lucide-react";

const columns = [
  { title: "Explore", items: ["Home", "About", "Services", "Gallery", "Contact"] },
  { title: "Services", items: ["Student Visa", "Work Visa", "PR & Migration", "Tourist Visa", "Air Ticketing"] },
];

export function SiteFooter() {
  return (
    <footer className="text-primary-foreground" style={{ background: "var(--gradient-ink)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 overflow-hidden shadow-[0_0_15px_rgba(224,183,109,0.3)]">
                <img src="/logo.png" alt="Mani Abroad Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-xl tracking-[0.16em] uppercase">Mani Abroad</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              Licensed overseas education and migration consultancy. Honest advice,
              transparent fees, and a consultant who answers the phone.
            </p>
            <div className="mt-8 h-px w-28" style={{ background: "var(--gradient-gold)" }} />
          </div>

          {columns.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().split(" ")[0]}`}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-gold">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[0.62rem] uppercase tracking-wider text-gold/60 font-semibold">Address</span>
                  <span className="text-white text-xs">Hyderabad, India</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[0.62rem] uppercase tracking-wider text-gold/60 font-semibold">WhatsApp</span>
                  <a 
                    href="https://wa.me/919849920961" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gold transition-colors text-xs flex items-center gap-1"
                  >
                    +91 98499 20961
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[0.62rem] uppercase tracking-wider text-gold/60 font-semibold">Working Hours</span>
                  <span className="text-white text-xs">10:00 AM - 7:00 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-[0.75rem] uppercase tracking-[0.16em] text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mani Abroad Consultancy</p>
          <p>Hyderabad &nbsp;·&nbsp; +91 98499 20961</p>
        </div>
      </div>
    </footer>
  );
}