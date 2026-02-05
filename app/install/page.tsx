export default function InstallPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Install Orris
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-300">
        Orris runs only when you click Analyze. No account required.
      </p>

      <div className="mt-10 space-y-6">
        <div className="rounded-3xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">
            Chrome Extension
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Install Orris from the Chrome Web Store.
          </p>

          <div className="mt-5">
            <a
              href="https://chromewebstore.google.com/detail/orris/jkiealmpcbdjengdjlndcnocoggaalcj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#c9a857] px-6 py-3 text-sm font-semibold text-[#07070A] hover:bg-[#d4b76a]"
            >
              Install from Chrome Web Store →
            </a>
            <div className="mt-3 text-xs text-zinc-400">
              If you're reviewing the pre-release build, use "Load unpacked"
              in chrome://extensions.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">
            iPhone Companion (coming soon)
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Most people reach for clarity on their phone. Orris will expand
            into a companion experience designed for real-world moments.
          </p>
          <div className="mt-5 inline-flex items-center rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-zinc-300">
            Join early access soon.
          </div>
        </div>
      </div>
    </div>
  );
}
