function Footer() {
  return (
    <footer className="bg-black text-white/40 px-5 sm:px-10 py-6 text-sm w-full max-md:text-center">
      <div className="max-w-9xl mx-auto">
        <p className="text-2xl text-white font-extrabold font-alegraya mb-2">
          Keeper
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-2">
          <p className="text-center sm:text-left">
            © 2026 Keeper is an unofficial, fan-made tool and is not affiliated
            with, sponsored, or endorsed by The Adventure Guild, LLC.
          </p>
          <p className="shrink-0">v1.0.0</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
