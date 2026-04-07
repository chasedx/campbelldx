export default function Hero() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-40">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Web Development &middot; Marketing &middot; Data &amp; Analytics
        </p>
        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-bold leading-[1.08] text-white sm:text-6xl lg:text-[5.25rem]">
          We build what drives your business forward.
        </h1>
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-white/70">
          From custom websites and marketing strategy to dashboards,
          reporting, and large-scale data operations — Campbell Digital
          Solutions gives you the tools and visibility to grow with
          confidence.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Get Started
          </a>
          <a
            href="#services"
            className="border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-navy"
          >
            What We Do
          </a>
        </div>
      </div>
    </section>
  );
}
