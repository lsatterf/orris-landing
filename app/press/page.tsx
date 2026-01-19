function PressCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="block rounded-3xl border border-white/10 bg-[#0B0B0F] p-7 hover:border-white/20 hover:bg-white/5"
    >
      <div className="text-lg font-semibold text-white">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-zinc-300">{desc}</div>
      <div className="mt-4 text-sm font-medium text-[#c9a857]">
        Download →
      </div>
    </a>
  );
}

export default function PressPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-semibold tracking-tight text-white">Press</h1>
      <p className="mt-3 max-w-2xl text-zinc-300">
        Orris is a reading clarity tool that makes writing mechanics visible.
        It offers a neutral restatement and quote-grounded signals—without
        telling you what to think.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <PressCard
          title="Press Kit (coming soon)"
          desc="Logos, screenshots, and a short product summary."
          href="#"
        />
        <PressCard
          title="One-paragraph description"
          desc="A ready-to-paste description for newsletters and writeups."
          href="#"
        />
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-[#0B0B0F] p-8">
        <h2 className="text-xl font-semibold text-white">Contact</h2>
        <p className="mt-2 text-sm text-zinc-300">
          For media or partnerships:{" "}
          <span className="text-[#c9a857]">press@getorris.com</span>
        </p>
      </div>
    </div>
  );
}
