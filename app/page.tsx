// app/page.tsx  (Next.js + Tailwind)
// Drop-in landing page markup for getorris.com using your golden/dark Orris aesthetic.

import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07070A] text-zinc-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(218,170,74,0.18),transparent_55%),radial-gradient(800px_circle_at_80%_30%,rgba(218,170,74,0.10),transparent_60%),radial-gradient(700px_circle_at_50%_90%,rgba(255,255,255,0.05),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      {/* Top Nav */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#07070A]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Orris iris logo */}
            <div>
              <img src="/orris-iris.png" alt="Orris" className="h-8 w-8" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide text-[#D6A64A]">
                Orris
              </div>
              <div className="text-xs text-zinc-400">Make sense of the world</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#features"
              className="hidden text-sm text-zinc-300 hover:text-white md:inline"
            >
              Features
            </a>
            <a
              href="#privacy"
              className="hidden text-sm text-zinc-300 hover:text-white md:inline"
            >
              Privacy
            </a>
            <a
              href="#install"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:border-white/20 hover:bg-white/10"
            >
              Install Extension
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D6A64A]" />
              Quote-grounded. Neutral restatement. No preaching.
            </div>

            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
              Make sense of the world{" "}
              <span className="text-[#D6A64A]">without being told what to think</span>.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-300 md:text-lg">
              Orris is a companion that rewrites articles neutrally and shows how language shapes
              perception so you can see through the noise and decide for yourself.
            </p>

            <div id="install" className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                // Replace with Chrome Web Store URL when live
                href="#"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D6A64A] px-6 py-3 text-sm font-semibold text-[#07070A] shadow-[0_18px_50px_rgba(214,166,74,0.22)] hover:bg-[#E3B457]"
              >
                🧭 Install the Chrome Extension
                <span className="translate-x-0 text-[#07070A]/70 transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>

              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10"
              >
                See how it works
              </a>
            </div>

            <div className="mt-3 text-xs text-zinc-400">
              Free • No account required • Privacy-first
            </div>
          </div>

          {/* “Extension-style” demo card (matches your UI vibe) */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3">
                <div>
                  <img src="/orris-iris.png" alt="Orris" className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#D6A64A]">Orris Scan</div>
                  <div className="text-xs text-zinc-400">Paste or analyze the current article</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-[#0B0B0F] p-4">
                <div className="text-xs text-zinc-400">Neutral Read</div>
                <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-zinc-200">
                  A calm restatement of what the text says—without the spin. Evidence cards below
                  show the exact phrases influencing interpretation.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-300">
                    Certainty language
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-300">
                    Appeal to fear
                  </span>
                  <span className="rounded-full border border-[#D6A64A]/25 bg-[#D6A64A]/10 px-2 py-1 text-[11px] text-[#D6A64A]">
                    Fact-Anchored Distortion
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <button className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10">
                  Analyze
                </button>
                <button className="rounded-2xl bg-[#D6A64A] px-4 py-3 text-sm font-semibold text-[#07070A] hover:bg-[#E3B457]">
                  Analyze Article
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] bg-[radial-gradient(60%_60%_at_50%_20%,rgba(214,166,74,0.25),transparent_60%)] blur-2xl" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl border border-white/8 bg-white/4 p-7 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Clarity in three steps
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
            Orris doesn’t argue with the article. It separates what’s said from how it’s framed, then
            shows evidence so you can judge for yourself.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StepCard
              n="01"
              title="Neutral Read"
              desc="A calm restatement of the text that reduces spin and speculation."
            />
            <StepCard
              n="02"
              title="Evidence Cards"
              desc="Quote-grounded highlights of phrases doing persuasive work."
            />
            <StepCard
              n="03"
              title="Framing Signals"
              desc="Detects patterns like certainty language, fear priming, and truth-sandwich structures."
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Feature highlights
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
              Built for real-world news reading: fast, transparent, and focused on helping you think.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <FeatureCard
            title="Neutral restatement"
            desc="Get a plain-language version first, before emotions take the wheel."
            tag="Neutral Read"
          />
          <FeatureCard
            title="Quote-grounded evidence"
            desc="No vague claims. Orris points to the exact phrases that shape perception."
            tag="Evidence"
          />
          <FeatureCard
            title="Truth-sandwich detection"
            desc="Catches when true elements are used to smuggle implied conclusions."
            tag="Fact-Anchored Distortion"
            accent
          />
        </div>
      </section>

      {/* Is / Isn't */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/8 bg-white/4 p-7 md:p-10">
            <h3 className="text-lg font-semibold text-white">Orris is</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-[#D6A64A]">✓</span>
                A companion for thinking clearly
              </li>
              <li className="flex gap-2">
                <span className="text-[#D6A64A]">✓</span>
                Transparent and quote-grounded
              </li>
              <li className="flex gap-2">
                <span className="text-[#D6A64A]">✓</span>
                Designed for real-world confusion
              </li>
              <li className="flex gap-2">
                <span className="text-[#D6A64A]">✓</span>
                Privacy-first by default
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/8 bg-white/4 p-7 md:p-10">
            <h3 className="text-lg font-semibold text-white">Orris is not</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="text-zinc-500">—</span>
                A fact-checker or truth oracle
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-500">—</span>
                A political scoring engine
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-500">—</span>
                Something that runs automatically
              </li>
              <li className="flex gap-2">
                <span className="text-zinc-500">—</span>
                A replacement for your judgment
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border border-white/8 bg-white/4 p-7 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Privacy-first by design
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
                Orris analyzes text only when you click Analyze. No accounts required. No browsing
                history tracking.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10"
            >
              Read privacy details
            </a>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MiniCard title="User-triggered" desc="Only runs when you click Analyze." />
            <MiniCard title="No accounts" desc="Use Orris without creating a profile." />
            <MiniCard title="Transparent" desc="Quote-based evidence shows the 'why.'" />
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-[#D6A64A]/25 bg-[#0B0B0F] p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(214,166,74,0.12),transparent_55%)]" />

          <div className="relative max-w-3xl">
            <h3 className="text-lg font-semibold text-white">
              A note from the founder
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              I built Orris because I don't think most people are confused, I think
              they're exhausted.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              The world is loud, the incentives are messy, and the algorithms shaping
              what we see are getting very good at steering attention. Most of what we
              read isn't outright false, it's framed, compressed, and emotionally
              tuned to move fast.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              Orris isn't here to tell you what's true. It's here to make the mechanics
              visible, what's stated, what's implied, and what kind of language is
              doing the pushing, so you can decide for yourself.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              If you try it and something feels off, tell me. With real feedback from
              real people, we can build tools that help maintain clarity as the noise
              gets smarter.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-10 bg-[#D6A64A]/60" />
              <div className="text-sm font-medium text-[#D6A64A]">
                Logan, Orris Founder
              </div>
            </div>

            <div className="mt-6">
              <a
                href="/note"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#D6A64A] hover:text-[#E3B457]"
              >
                Read the full note
                <span className="opacity-70">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-[#D6A64A]/20 bg-[linear-gradient(180deg,rgba(214,166,74,0.10),rgba(255,255,255,0.03))] p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Clarity is a click away.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200 md:text-base">
              Install Orris and get a calm, quote-grounded read of what you’re looking at—before you
              react to it.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl bg-[#D6A64A] px-6 py-3 text-sm font-semibold text-[#07070A] hover:bg-[#E3B457]"
              >
                Install the Chrome Extension
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/20 hover:bg-white/10"
              >
                Join early access for iPhone
              </a>
            </div>

            <div className="mt-3 text-xs text-zinc-300/80">
              Companion apps for mobile coming soon.
            </div>
          </div>

          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(214,166,74,0.35),transparent_60%)] blur-3xl" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Orris. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a className="text-zinc-400 hover:text-white" href="#">
              Privacy
            </a>
            <a className="text-zinc-400 hover:text-white" href="#">
              Contact
            </a>
            <a className="text-zinc-400 hover:text-white" href="#features">
              Features
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function StepCard({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold text-[#D6A64A]">STEP {n}</div>
        <div className="h-2 w-2 rounded-full bg-[#D6A64A]/80" />
      </div>
      <div className="mt-3 text-base font-semibold text-white">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</p>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  tag,
  accent,
}: {
  title: string;
  desc: string;
  tag: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between">
        <span
          className={[
            "rounded-full border px-2.5 py-1 text-[11px]",
            accent
              ? "border-[#D6A64A]/25 bg-[#D6A64A]/10 text-[#D6A64A]"
              : "border-white/10 bg-white/5 text-zinc-300",
          ].join(" ")}
        >
          {tag}
        </span>
        <span className="text-[#D6A64A]/70">✦</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</p>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0B0B0F] p-6">
      <div className="text-sm font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm text-zinc-300">{desc}</div>
    </div>
  );
}
