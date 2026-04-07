export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Campbell Digital Solutions
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-white/80 transition hover:text-white"
        >
          Get in touch &rarr;
        </a>
      </div>
    </header>
  );
}
