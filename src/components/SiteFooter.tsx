const columns = [
  { title: "Explore", items: ["Home", "About", "Services", "Gallery", "Contact"] },
  { title: "Services", items: ["Student Visa", "Work Visa", "PR & Migration", "Tourist Visa", "Air Ticketing"] },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="text-primary-foreground" style={{ background: "var(--gradient-ink)" }}>
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-ink" style={{ background: "var(--gradient-gold)" }}>
                MA
              </span>
              <span className="font-display text-xl tracking-[0.16em] uppercase">Mani Abroad</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              Licensed overseas education and migration consultancy. Honest advice,
              transparent fees, and a consultant who answers the phone.
            </p>
            <div className="mt-8 h-px w-28" style={{ background: "var(--gradient-gold)" }} />
          </div>

          {columns.map((col) => (
            <div key={col.title}>
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
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-[0.75rem] uppercase tracking-[0.16em] text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mani Abroad Consultancy</p>
          <p>hello@maniabroad.com &nbsp;·&nbsp; +91 98000 00000</p>
        </div>
      </div>
    </footer>
  );
}