const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/10 bg-ink/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-ink" style={{ background: "var(--gradient-gold)" }}>
            MA
          </span>
          <span className="font-display text-lg tracking-[0.18em] text-primary-foreground uppercase">
            Mani Abroad
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[0.78rem] uppercase tracking-[0.2em] text-primary-foreground/75 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-gold/50 px-5 py-2 text-[0.72rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          Enquire
        </a>
      </div>
    </header>
  );
}