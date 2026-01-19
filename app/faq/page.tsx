function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B0B0F] p-6">
      <div className="text-base font-semibold text-white">{q}</div>
      <div className="mt-2 text-sm leading-relaxed text-zinc-300">{a}</div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">FAQ</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">
        Orris helps you read with more awareness by making writing mechanics
        visible—without telling you what to think.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <FAQItem
          q="Does Orris fact-check?"
          a="No. Orris does not verify truth. It provides a neutral restatement and highlights language patterns that may influence perception."
        />
        <FAQItem
          q="Does Orris judge political viewpoints?"
          a="No. Orris avoids political scoring. It focuses on mechanics: framing, emotional loading, certainty cues, and quote-grounded signals."
        />
        <FAQItem
          q="When does Orris run?"
          a="Only when you click Analyze. Orris does not scan automatically and does not run in the background."
        />
        <FAQItem
          q="Do I need an account?"
          a="No. Orris works without accounts. Optional feedback helps improve accuracy."
        />
        <FAQItem
          q="What data does Orris collect?"
          a={
            <>
              Orris is privacy-first. See the{" "}
              <a href="/privacy" className="text-[#c9a857] hover:text-[#d4b76a]">
                Privacy Policy
              </a>{" "}
              for details.
            </>
          }
        />
        <FAQItem
          q="Why does Orris only show the top 5 signals?"
          a="To keep the read usable. Orris scans for many signals, then shows the most relevant ones. Deeper tools and filters are coming."
        />
        <FAQItem
          q="Can Orris be wrong?"
          a="Yes. Orris is a tool, not an authority. That's why detections are quote-grounded and why feedback exists."
        />
        <FAQItem
          q="What's coming next?"
          a="Saved scans, deeper filtering, better clustering, and companion experiences for mobile—built with the same privacy guardrails."
        />
      </div>
    </div>
  );
}
