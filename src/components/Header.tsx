export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-heading text-xl text-navy">
          Campbell Digital Solutions
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-navy transition hover:text-accent"
        >
          Get in touch &rarr;
        </a>
      </div>
    </header>
  );
}
