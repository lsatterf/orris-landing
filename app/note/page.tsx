export default function NotePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-3xl border border-[#c9a857]/25 bg-[#0B0B0F] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
          A note from the person behind Orris
        </h1>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-zinc-300 md:text-base">
          <p>
            If you feel like the world has gotten harder to understand,
            you're not alone.
          </p>

          <p>
            Much of what we read today isn't outright false. It's selectively
            framed, emotionally tuned, and optimized for speed through
            attention systems. That doesn't make everyone malicious, but it
            does make clarity harder to hold onto.
          </p>

          <p>
            I built Orris as a companion for moments when something doesn't
            sit right. When you want to slow down, separate facts from
            framing, and see the exact words doing the persuasive work.
          </p>

          <p>
            Orris doesn't fact-check and it doesn't tell you what to believe.
            It offers a neutral restatement and quote-grounded signals so you
            can form your own understanding with more awareness.
          </p>

          <p>
            This project will only get better through real use. If Orris is
            accurate, say so. If it's off-base, say that too. Every piece of
            feedback helps shape a tool meant to support clear thinking in a
            world that often profits from confusion.
          </p>

          <p>
            Thanks for being here, and for caring about clarity.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px w-12 bg-[#c9a857]/60" />
          <div className="text-sm font-medium text-[#c9a857]">
            Logan, Orris Founder
          </div>
        </div>
      </div>
    </div>
  );
}
