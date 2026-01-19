export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Terms of Use
      </h1>
      <p className="mt-3 text-sm text-zinc-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="mt-8 space-y-10 rounded-3xl border border-white/10 bg-[#0B0B0F] p-8 md:p-12">
        <section>
          <h2 className="text-xl font-semibold text-white">What Orris is</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Orris is a reading clarity tool. It produces a neutral restatement
            of text and identifies language patterns that may shape perception.
            Orris is designed to support thoughtful reading—not to tell you
            what to believe.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">What Orris is not</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed">
            <li>Orris is not a fact-checker or truth oracle.</li>
            <li>Orris does not provide legal, medical, or financial advice.</li>
            <li>Orris does not guarantee accuracy or completeness.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Your responsibility</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            You are responsible for how you use Orris and how you interpret
            any output. Use your own judgment and consult primary sources when
            needed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Acceptable use</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-zinc-300 leading-relaxed">
            <li>Do not use Orris to harass, defame, or target individuals.</li>
            <li>Do not attempt to reverse engineer or abuse the service.</li>
            <li>Do not use Orris for automated bulk scraping or surveillance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Changes</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            These terms may be updated as Orris evolves. If changes are
            significant, we'll update this page and revise the "Last updated"
            date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            Questions? Email:{" "}
            <span className="text-[#c9a857]">support@getorris.com</span>
          </p>
        </section>
      </div>
    </div>
  );
}
