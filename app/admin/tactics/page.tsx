import TacticAdmin from './tactic-admin';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold text-zinc-100">
          Tactic Matrix Admin
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Add/edit tactics that Orris can detect. Keep output capped at 5 in the extension.
        </p>
        <div className="mt-6">
          <TacticAdmin />
        </div>
      </div>
    </div>
  );
}

