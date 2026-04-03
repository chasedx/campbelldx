export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="text-sm text-white/70">
          &copy; {new Date().getFullYear()} Campbell Digital Solutions
        </p>
        <a
          href="mailto:chase@campbelldx.com"
          className="text-sm text-white/70 transition hover:text-white"
        >
          chase@campbelldx.com
        </a>
      </div>
    </footer>
  );
}
