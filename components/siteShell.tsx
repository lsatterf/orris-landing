import Link from "next/link";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#07070A] text-zinc-100">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(214,166,74,0.16),transparent)] blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-220px] h-[420px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent)] blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07070A]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/orris-iris.png" alt="Orris" className="h-8 w-8" />
            <span className="text-sm font-semibold tracking-tight text-white">
              Orris
            </span>
          </Link>

          <nav className="flex items-center gap-4">
            <Link
              href="/features"
              className="hidden text-sm text-zinc-300 hover:text-white md:inline"
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className="hidden text-sm text-zinc-300 hover:text-white md:inline"
            >
              Privacy
            </Link>
            <Link
              href="/faq"
              className="hidden text-sm text-zinc-300 hover:text-white md:inline"
            >
              FAQ
            </Link>
            <Link
              href="/install"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-white/20 hover:bg-white/10"
            >
              Install
            </Link>
          </nav>
        </div>
      </header>

      {/* Page */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-zinc-400">
              <span className="text-white/90">Orris</span> — Reading clarity, by
              design.
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link className="text-zinc-400 hover:text-white" href="/about">
                About
              </Link>
              <Link className="text-zinc-400 hover:text-white" href="/features">
                Features
              </Link>
              <Link className="text-zinc-400 hover:text-white" href="/privacy">
                Privacy
              </Link>
              <Link className="text-zinc-400 hover:text-white" href="/terms">
                Terms
              </Link>
              <Link className="text-zinc-400 hover:text-white" href="/faq">
                FAQ
              </Link>
              <Link className="text-zinc-400 hover:text-white" href="/press">
                Press
              </Link>
            </div>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            Orris does not fact-check or judge opinions. It helps you see how
            language shapes perception.
          </div>
        </div>
      </footer>
    </div>
  );
}
