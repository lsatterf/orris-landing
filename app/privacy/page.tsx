export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Privacy Policy
      </h1>

      <p className="mt-4 text-zinc-300 max-w-2xl">
        Orris is intentionally designed to be transparent, minimal, and
        privacy-first. We collect as little data as possible and only use it
        to provide the core feature: helping you understand how language
        influences perception.
      </p>

      <section className="mt-12 space-y-10">
        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            What Orris Does
          </h2>
          <ul className="mt-3 space-y-2 text-zinc-300 list-disc list-inside">
            <li>Analyzes text only when you click "Analyze."</li>
            <li>
              Sends the selected/article text securely for processing to
              generate a Neutral Read and evidence-grounded signals.
            </li>
            <li>
              Stores optional anonymous feedback ("accurate" or "off-base")
              used only to improve signal accuracy.
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            What Orris Does NOT Do
          </h2>
          <ul className="mt-3 space-y-2 text-zinc-300 list-disc list-inside">
            <li>No browsing history collection.</li>
            <li>No background scanning.</li>
            <li>No personal accounts required.</li>
            <li>No sale or sharing of personal data.</li>
            <li>No tracking across websites.</li>
            <li>No data used for advertising.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Data Retention
          </h2>
          <p className="mt-3 text-zinc-300">
            Orris does not store analyzed text permanently. Anonymous
            feedback data is kept only for accuracy improvements and is not
            linked to any identity.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Transparency
          </h2>
          <p className="mt-3 text-zinc-300">
            We will update this policy if new features require additional
            permissions. Orris will always remain user-initiated and
            privacy-first.
          </p>
        </div>
      </section>
    </div>
  );
}
