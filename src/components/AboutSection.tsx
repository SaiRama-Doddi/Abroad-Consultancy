const stats = [
  { value: "12+", label: "Years guiding travellers" },
  { value: "4,800+", label: "Visas processed" },
  { value: "18", label: "Countries covered" },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <div
            className="overflow-hidden rounded-[2rem] border border-border"
            style={{ boxShadow: "var(--shadow-premium)" }}
          >
            <video
              className="aspect-[4/5] w-full object-cover"
              src="/about-airport.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-card px-6 py-5 sm:block" style={{ boxShadow: "var(--shadow-premium)" }}>
            <p className="font-display text-3xl text-primary">98%</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              Approval rate
            </p>
          </div>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.4em] text-accent">About Us</p>
          <h2 className="mt-5 font-display text-4xl leading-tight text-foreground sm:text-5xl">
            From your first question to the check-in counter
          </h2>
          <div className="mt-6 h-px w-24" style={{ background: "var(--gradient-gold)" }} />
          <p className="mt-7 text-[1.02rem] leading-relaxed text-muted-foreground">
            Mani Abroad Consultancy is a boutique overseas advisory built on one
            simple belief: a visa is not paperwork, it is a life decision. We sit
            with you, understand your profile, and shape a route that actually
            fits — study, skilled work, or family migration.
          </p>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-muted-foreground">
            Documentation, applications, interview prep, tickets and pre-departure
            briefing — every step is handled by a named consultant who stays with
            you until you walk through that terminal with your passport in hand.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl text-primary">{s.value}</dt>
                <dd className="mt-2 text-[0.72rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}