export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Features
      </h1>

      <p className="mt-4 text-zinc-300 max-w-2xl">
        Orris is designed to help you make sense of complex information by
        separating what's written from how it's framed — without telling you
        what to think. Below is a clear breakdown of what Orris does today and
        what's coming next.
      </p>

      {/* Section */}
      <section className="mt-12 grid gap-10">
        {/* Feature 1 */}
        <div className="rounded-2xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">Neutral Read</h2>
          <p className="mt-3 text-zinc-300">
            Orris rewrites articles in calm, neutral language to help you see
            what's stated without emotional or speculative framing. No
            opinions, no judgments — just a clearer version of the text.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="rounded-2xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">
            Evidence-Grounded Signals
          </h2>
          <p className="mt-3 text-zinc-300">
            Orris highlights specific phrases that influence perception. Each
            signal is anchored to an exact quote so you always understand the
            "why" behind the detection.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="rounded-2xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">Distortion Score</h2>
          <p className="mt-3 text-zinc-300">
            A simple score (0–100) gives you a quick sense of how much the
            text leans on emotional, rhetorical, or framing devices.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="rounded-2xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">Privacy-First Design</h2>
          <p className="mt-3 text-zinc-300">
            Orris runs only when you click "Analyze." No browsing history is
            collected, no hidden behavior runs in the background, and no
            personal account is required.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="rounded-2xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8">
          <h2 className="text-xl font-semibold text-white">
            Coming Soon: Deep Dive Mode
          </h2>
          <p className="mt-3 text-zinc-300">
            Filter signals by category, compare sources, explore all detected
            tactics, and save scans. These tools will always be optional and
            built with the same privacy guardrails.
          </p>
        </div>
      </section>
    </div>
  );
}
