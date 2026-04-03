export default function Hero() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:py-36">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Business Process Automation &middot; AI &middot; Integration
        </p>
        <h1 className="mt-6 max-w-2xl font-heading text-5xl font-semibold leading-[1.15] text-navy sm:text-6xl lg:text-7xl">
          Your business, running smarter.
        </h1>
        <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted">
          We build the digital systems behind your business — process
          automations, AI tools, and integrations that eliminate hours of
          manual computer work and give you clear visibility into
          what&apos;s actually happening across your operations.
        </p>
        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="bg-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            Let&apos;s Talk
          </a>
          <a
            href="#services"
            className="border border-navy px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white"
          >
            See what we do
          </a>
        </div>
      </div>
    </section>
  );
}
