import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Auth is handled by middleware - no token check needed here

type Row = {
  id: string;
  created_at: string;
  tactic_name: string;
  category: string | null;
  severity: number | null;
  confidence: number | null;
  verdict: 'accurate' | 'off_base';
  domain: string | null;
  url_hash: string | null;
  session_id: string | null;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const days = Math.max(1, Math.min(90, Number(url.searchParams.get('days') ?? 30)));
  const sinceIso = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

  // Pull a bounded sample (enough for aggregates + recent list)
  const { data, error } = await supabaseAdmin
    .from('tactic_feedback')
    .select(
      'id,created_at,tactic_name,category,severity,confidence,verdict,domain,url_hash,session_id'
    )
    .gte('created_at', sinceIso)
    .order('created_at', { ascending: false })
    .limit(5000);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const rows = (data ?? []) as Row[];

  const summarize = <K extends string>(keyFn: (r: Row) => K, label: string) => {
    const map = new Map<K, { key: K; total: number; accurate: number; off_base: number }>();

    for (const r of rows) {
      const key = keyFn(r);
      if (!key) continue;

      if (!map.has(key)) map.set(key, { key, total: 0, accurate: 0, off_base: 0 });
      const agg = map.get(key)!;

      agg.total += 1;
      if (r.verdict === 'accurate') agg.accurate += 1;
      else agg.off_base += 1;
    }

    const out = Array.from(map.values())
      .map((x) => ({
        [label]: x.key,
        total: x.total,
        accurate: x.accurate,
        off_base: x.off_base,
        agree_rate: x.total ? x.accurate / x.total : 0,
      }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 30);

    return out;
  };

  const binFor = (c: number) => {
    if (c < 0.5) return '0–50%';
    if (c < 0.7) return '50–70%';
    if (c < 0.85) return '70–85%';
    return '85–100%';
  };

  const byDomain = summarize((r) => (r.domain ?? '').trim().toLowerCase() as any, 'domain');
  const byTactic = summarize((r) => r.tactic_name as any, 'tactic_name');
  const recent = rows.slice(0, 50);

  const totals = rows.reduce(
    (acc, r) => {
      acc.total += 1;
      if (r.verdict === 'accurate') acc.accurate += 1;
      else acc.off_base += 1;
      return acc;
    },
    { total: 0, accurate: 0, off_base: 0 }
  );

  const confidenceBinsMap = new Map<
    string,
    { bin: string; total: number; accurate: number; off_base: number }
  >();

  for (const r of rows) {
    if (typeof r.confidence !== 'number' || !Number.isFinite(r.confidence)) continue;
    const b = binFor(r.confidence);

    if (!confidenceBinsMap.has(b)) {
      confidenceBinsMap.set(b, { bin: b, total: 0, accurate: 0, off_base: 0 });
    }

    const agg = confidenceBinsMap.get(b)!;
    agg.total += 1;
    if (r.verdict === 'accurate') agg.accurate += 1;
    else agg.off_base += 1;
  }

  const confidenceBins = Array.from(confidenceBinsMap.values())
    .map((x) => ({
      bin: x.bin,
      total: x.total,
      accurate: x.accurate,
      off_base: x.off_base,
      agree_rate: x.total ? x.accurate / x.total : 0,
    }))
    .sort((a, b) => {
      const order = ['0–50%', '50–70%', '70–85%', '85–100%'];
      return order.indexOf(a.bin) - order.indexOf(b.bin);
    });

  return NextResponse.json({
    window_days: days,
    since: sinceIso,
    totals: {
      ...totals,
      agree_rate: totals.total ? totals.accurate / totals.total : 0,
    },
    byDomain,
    byTactic,
    confidenceBins,
    recent,
  });
}

