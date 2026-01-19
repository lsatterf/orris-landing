export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
          About Orris
        </h1>
        <p className="mt-4 text-zinc-300 leading-relaxed">
          Orris is a reading clarity tool built for a world where information
          moves fast and language is engineered to move faster. Orris doesn't
          tell you what to believe. It makes the mechanics visible—so you can
          decide for yourself with more awareness.
        </p>
      </div>

      {/* What Orris is / isn't */}
      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">What Orris is</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed">
            <li>A neutral restatement for clarity ("Neutral Read").</li>
            <li>Quote-grounded signals that explain persuasive language.</li>
            <li>A simple distortion score to orient you quickly.</li>
            <li>User-initiated and privacy-first by design.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">What Orris isn't</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed">
            <li>A fact-checker or "truth engine."</li>
            <li>A political scoring system.</li>
            <li>A background tracker.</li>
            <li>An app that runs without your click.</li>
          </ul>
        </div>
      </section>

      {/* Founder note card */}
      <section className="mt-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(214,166,74,0.12),transparent_55%)]" />

          <div className="relative max-w-3xl">
            <h2 className="text-lg font-semibold text-white">
              A note from the founder
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              I built Orris because I don't think most people are confused —
              I think they're exhausted.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              The world is messy, incentives are warped, and the algorithms
              shaping what we see are getting very good at steering attention.
              A lot of what we read isn't outright false — it's framed,
              compressed, and emotionally tuned to move fast.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Orris isn't here to tell you what's true. It's here to make the
              mechanics visible — what's stated, what's implied, and what kind
              of language is doing the pushing.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              If you try Orris and something feels off, tell me. With enough
              real feedback from real people, we can build a companion that
              helps maintain clarity as the noise gets smarter.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-10 bg-[#c9a857]/60" />
              <div className="text-sm font-medium text-[#c9a857]">
                — Logan, Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <a
          href="/install"
          className="inline-flex items-center justify-center rounded-2xl bg-[#c9a857] px-6 py-3 text-sm font-semibold text-[#07070A] hover:bg-[#d4b76a]"
        >
          Install Orris →
        </a>
        <a
          href="/privacy"
          className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:border-white/20 hover:bg-white/10"
        >
          Privacy Policy
        </a>
      </section>
    </div>
  );
}
