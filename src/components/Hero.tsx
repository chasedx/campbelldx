export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-40">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          AI &amp; Automation &middot; Web Development &middot; Data &amp; Analytics
        </p>
        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.08] text-navy sm:text-6xl lg:text-[5.25rem]">
          We build what drives your business forward.
        </h1>
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted">
          From custom websites and marketing strategy to dashboards,
          reporting, and large-scale data operations — Campbell Digital
          Solutions gives you the tools and visibility to grow with
          confidence.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-navy px-8 py-4 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border border-navy px-8 py-4 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            What We Do
          </a>
        </div>
      </div>
    </section>
  );
}
