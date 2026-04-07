export default function Contact() {
  return (
    <section id="contact" className="bg-background py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold text-navy sm:text-4xl">
            Let&apos;s build something that works.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">
            Whether you need a new website, a marketing engine, a
            reporting dashboard, or a system that handles data at
            scale — tell us what would make the biggest difference.
            We&apos;ll respond same day with a straight answer — no
            pitch decks, no runaround.
          </p>
        </div>
        <form className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-navy"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-accent"
                placeholder="First name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-navy"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-accent"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-navy"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-accent"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-navy"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-accent"
                placeholder="(555) 000-0000"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="bottleneck"
              className="block text-sm font-medium text-navy"
            >
              What Do You Need?
            </label>
            <select
              id="bottleneck"
              name="bottleneck"
              className="mt-1.5 w-full appearance-none border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-accent"
              defaultValue=""
            >
              <option value="" disabled>
                Select one...
              </option>
              <option>I need a website or web app</option>
              <option>Marketing &amp; lead generation</option>
              <option>Dashboards &amp; data visualization</option>
              <option>Reporting &amp; analytics</option>
              <option>Large-scale data handling</option>
              <option>Process automation &amp; integrations</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-navy"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1.5 w-full border border-border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-accent"
              placeholder="Tell us about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-navy py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90"
          >
            Send it &rarr;
          </button>
        </form>
      </div>
    </section>
  );
}
