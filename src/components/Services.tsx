const services = [
  {
    title: "Workflow Automation",
    description:
      "Replace repetitive manual processes with reliable automations that run in the background, so your team can focus on real work.",
  },
  {
    title: "AI-Driven Reporting",
    description:
      "Get clear, actionable reports generated automatically from your existing data — no more pulling numbers by hand.",
  },
  {
    title: "Custom Integrations",
    description:
      "Connect the tools you already use into one cohesive system. No more copying data between platforms.",
  },
  {
    title: "AI Assistants",
    description:
      "Purpose-built AI tools that handle intake, answer questions, and route information — trained on your business.",
  },
  {
    title: "Client Data Portals",
    description:
      "Give your clients a clean, branded portal to access their information, documents, and status updates in real time.",
  },
  {
    title: "Done-For-You Setup",
    description:
      "We handle the full build — architecture, implementation, testing, and handoff. You stay focused on running your business.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          What We Build
        </p>
        <h2 className="mt-4 font-heading text-3xl font-semibold text-navy sm:text-4xl">
          Systems that actually work.
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
