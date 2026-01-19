import FeedbackDashboard from './feedback-dashboard';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-2xl font-semibold text-zinc-100">Feedback Dashboard</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Anonymous "Accurate / Off base" telemetry from the extension.
        </p>
        <div className="mt-6">
          <FeedbackDashboard />
        </div>
      </div>
    </div>
  );
}

