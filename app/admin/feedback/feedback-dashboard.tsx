'use client';

import React, { useEffect, useState } from 'react';

type AggRow = {
  domain?: string;
  tactic_name?: string;
  total: number;
  accurate: number;
  off_base: number;
  agree_rate: number;
};

type RecentRow = {
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

type ApiResponse = {
  window_days: number;
  since: string;
  totals: { total: number; accurate: number; off_base: number; agree_rate: number };
  byDomain: AggRow[];
  byTactic: AggRow[];
  confidenceBins: { bin: string; total: number; accurate: number; off_base: number; agree_rate: number }[];
  recent: RecentRow[];
};

function pct(n: number) {
  return `${Math.round(n * 100)}%`;
}

export default function FeedbackDashboard() {
  const [days, setDays] = useState(30);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/admin/feedback?days=${days}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || 'Failed to load');
      setData(json);
    } catch (e: any) {
      setErr(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
        <label style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ color: '#6b7280', fontSize: 12 }}>Window</span>
          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            style={{
              padding: 8,
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'rgba(255,255,255,0.06)',
              color: '#e5e5e5',
            }}
          >
            <option value={7}>Last 7 days</option>
            <option value={14}>Last 14 days</option>
            <option value={30}>Last 30 days</option>
            <option value={60}>Last 60 days</option>
            <option value={90}>Last 90 days</option>
          </select>
        </label>

        <button
          onClick={load}
          disabled={loading}
          style={{
            padding: '8px 10px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.06)',
            color: '#e5e5e5',
          }}
        >
          {loading ? 'Loading…' : 'Refresh'}
        </button>

        {data && (
          <div style={{ color: '#6b7280', fontSize: 12 }}>
            Total <b style={{ color: '#e5e5e5' }}>{data.totals.total}</b> · Agree{' '}
            <b style={{ color: '#e5e5e5' }}>{pct(data.totals.agree_rate)}</b> · Accurate{' '}
            <b style={{ color: '#22c55e' }}>{data.totals.accurate}</b> · Off base{' '}
            <b style={{ color: '#ef4444' }}>{data.totals.off_base}</b>
          </div>
        )}
      </div>

      {err && (
        <div style={{ color: '#ef4444', marginBottom: 10 }}>
          {err}
        </div>
      )}

      {data && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          <Card title="Top Domains">
            <AggTable rows={data.byDomain} nameKey="domain" emptyLabel="(no domain)" />
          </Card>

          <Card title="Top Tactics">
            <AggTable rows={data.byTactic} nameKey="tactic_name" emptyLabel="(unnamed)" />
          </Card>

          <Card title="Calibration by Confidence">
            <ConfidenceBinTable rows={data.confidenceBins} />
            <div style={{ marginTop: 8, color: '#6b7280', fontSize: 12 }}>
              If the 85–100% bin has low agreement, Orris is overconfident. Tune prompts or cap confidence.
            </div>
          </Card>

          <div style={{ gridColumn: '1 / -1' }}>
            <Card title="Recent Feedback (last 50)">
              <RecentTable rows={data.recent} />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        background: 'rgba(255,255,255,0.02)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: 12,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          fontWeight: 800,
          color: '#e5e5e5',
        }}
      >
        {title}
      </div>
      <div style={{ padding: 12 }}>{children}</div>
    </div>
  );
}

function AggTable({
  rows,
  nameKey,
  emptyLabel,
}: {
  rows: AggRow[];
  nameKey: 'domain' | 'tactic_name';
  emptyLabel: string;
}) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, color: '#e5e5e5' }}>
        <thead>
          <tr style={{ textAlign: 'left', color: '#6b7280' }}>
            <th style={{ padding: '8px 6px' }}>{nameKey === 'domain' ? 'Domain' : 'Tactic'}</th>
            <th style={{ padding: '8px 6px' }}>Agree</th>
            <th style={{ padding: '8px 6px' }}>Total</th>
            <th style={{ padding: '8px 6px' }}>Acc</th>
            <th style={{ padding: '8px 6px' }}>Off</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const name = (r as any)[nameKey] || emptyLabel;
            return (
              <tr key={`${name}-${i}`} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <td style={{ padding: '8px 6px', fontWeight: 700 }}>{name}</td>
                <td style={{ padding: '8px 6px' }}>{pct(r.agree_rate)}</td>
                <td style={{ padding: '8px 6px' }}>{r.total}</td>
                <td style={{ padding: '8px 6px', color: '#22c55e' }}>{r.accurate}</td>
                <td style={{ padding: '8px 6px', color: '#ef4444' }}>{r.off_base}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function RecentTable({ rows }: { rows: RecentRow[] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, color: '#e5e5e5' }}>
        <thead>
          <tr style={{ textAlign: 'left', color: '#6b7280' }}>
            <th style={{ padding: '8px 6px' }}>Time</th>
            <th style={{ padding: '8px 6px' }}>Domain</th>
            <th style={{ padding: '8px 6px' }}>Tactic</th>
            <th style={{ padding: '8px 6px' }}>Verdict</th>
            <th style={{ padding: '8px 6px' }}>Sev</th>
            <th style={{ padding: '8px 6px' }}>Conf</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <td style={{ padding: '8px 6px', whiteSpace: 'nowrap' }}>
                {new Date(r.created_at).toLocaleString()}
              </td>
              <td style={{ padding: '8px 6px' }}>{r.domain ?? '(none)'}</td>
              <td style={{ padding: '8px 6px', fontWeight: 700 }}>{r.tactic_name}</td>
              <td style={{ padding: '8px 6px' }}>
                <span
                  style={{
                    padding: '3px 8px',
                    borderRadius: 999,
                    border: '1px solid',
                    borderColor: r.verdict === 'accurate' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)',
                    background: r.verdict === 'accurate' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                    color: r.verdict === 'accurate' ? '#22c55e' : '#ef4444',
                    fontWeight: 700,
                  }}
                >
                  {r.verdict === 'accurate' ? 'Accurate' : 'Off base'}
                </span>
              </td>
              <td style={{ padding: '8px 6px' }}>{r.severity ?? '-'}</td>
              <td style={{ padding: '8px 6px' }}>
                {typeof r.confidence === 'number' ? `${Math.round(r.confidence * 100)}%` : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ConfidenceBinTable({
  rows,
}: {
  rows: { bin: string; total: number; accurate: number; off_base: number; agree_rate: number }[];
}) {
  if (!rows || rows.length === 0) {
    return <div style={{ color: '#6b7280', fontSize: 12 }}>No confidence data yet.</div>;
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, color: '#e5e5e5' }}>
        <thead>
          <tr style={{ textAlign: 'left', color: '#6b7280' }}>
            <th style={{ padding: '8px 6px' }}>Confidence</th>
            <th style={{ padding: '8px 6px' }}>Agree</th>
            <th style={{ padding: '8px 6px' }}>Total</th>
            <th style={{ padding: '8px 6px' }}>Acc</th>
            <th style={{ padding: '8px 6px' }}>Off</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.bin} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <td style={{ padding: '8px 6px', fontWeight: 800 }}>{r.bin}</td>
              <td style={{ padding: '8px 6px' }}>{pct(r.agree_rate)}</td>
              <td style={{ padding: '8px 6px' }}>{r.total}</td>
              <td style={{ padding: '8px 6px', color: '#22c55e' }}>{r.accurate}</td>
              <td style={{ padding: '8px 6px', color: '#ef4444' }}>{r.off_base}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

