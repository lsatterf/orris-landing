export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Get in touch
      </h1>
      <p className="mt-4 text-zinc-300">
        Have an idea for how to make Orris better? Found something off? Or just want to drop a line?
      </p>

      <div className="mt-10">
        <a
          href="mailto:connect@getorris.com"
          className="inline-flex items-center justify-center rounded-2xl bg-[#c9a857] px-8 py-4 text-base font-semibold text-[#07070A] hover:bg-[#d4b76a]"
        >
          connect@getorris.com
        </a>
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        I read every message.
      </p>
    </div>
  );
}
