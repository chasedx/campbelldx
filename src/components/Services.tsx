const services = [
  {
    title: "AI & Automation",
    description:
      "Purpose-built AI tools and workflow automations that eliminate repetitive work, route information, and keep your operations running without manual intervention.",
  },
  {
    title: "Web Development",
    description:
      "Custom websites and web applications designed to convert — fast, responsive, and tailored to your brand and business goals.",
  },
  {
    title: "Marketing Strategy",
    description:
      "Data-backed campaigns and digital marketing that actually move the needle — SEO, paid media, email, and content that drives real results.",
  },
  {
    title: "Dashboards & Visualization",
    description:
      "Interactive dashboards that put your key metrics front and center. See what matters at a glance and make faster, smarter decisions.",
  },
  {
    title: "Reporting & Analytics",
    description:
      "Automated reporting pipelines that turn raw data into clear, actionable insights — delivered on schedule, not by request.",
  },
  {
    title: "Data Operations & Integrations",
    description:
      "From cleaning up messy files to building large-scale data pipelines and connecting your tools into one system — we handle the data work so you don't have to.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          What We Do
        </p>
        <h2 className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
          Full-stack solutions. Real results.
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-border bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-5 h-px w-10 bg-accent" />
              <h3 className="font-heading text-lg font-medium text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
