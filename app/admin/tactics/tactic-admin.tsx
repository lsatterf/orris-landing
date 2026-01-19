'use client';

import React, { useEffect, useMemo, useState } from 'react';

type TacticRow = {
  id: string;
  tactic_name: string;
  category: string;
  pattern_hint: string | null;
  example: string | null;
  severity_weight: number;
  active: boolean;
  created_at?: string;
};

export default function TacticAdmin() {
  const [rows, setRows] = useState<TacticRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [form, setForm] = useState({
    tactic_name: '',
    category: '',
    pattern_hint: '',
    example: '',
    severity_weight: 3,
    active: true,
  });

  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState<TacticRow | null>(null);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const r of rows) if (r.category) set.add(r.category);
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [rows]);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch('/api/admin/tactics');
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to load');
      setRows(data.tactics || []);
    } catch (e: any) {
      setErr(e.message || String(e));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function create() {
    setErr(null);
    try {
      const res = await fetch('/api/admin/tactics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          pattern_hint: form.pattern_hint.trim() || null,
          example: form.example.trim() || null,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Create failed');
      setForm({
        tactic_name: '',
        category: '',
        pattern_hint: '',
        example: '',
        severity_weight: 3,
        active: true,
      });
      await load();
    } catch (e: any) {
      setErr(e.message || String(e));
    }
  }

  async function update(id: string, patch: Partial<TacticRow>) {
    setErr(null);
    try {
      const res = await fetch('/api/admin/tactics', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...patch }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Update failed');
      await load();
    } catch (e: any) {
      setErr(e.message || String(e));
    }
  }

  async function remove(id: string) {
    setErr(null);
    try {
      const res = await fetch(`/api/admin/tactics?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Delete failed');
      await load();
    } catch (e: any) {
      setErr(e.message || String(e));
    }
  }

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = !q
      ? rows
      : rows.filter((r) => {
          const hay = [
            r.tactic_name,
            r.category,
            r.pattern_hint ?? '',
            r.example ?? '',
          ]
            .join(' ')
            .toLowerCase();
          return hay.includes(q);
        });

    const map = new Map<string, TacticRow[]>();
    for (const r of filtered) {
      const k = r.category || 'Uncategorized';
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(r);
    }

    for (const [, arr] of Array.from(map.entries()))
      arr.sort((a, b) => a.tactic_name.localeCompare(b.tactic_name));

    return {
      groups: Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0])),
      filteredCount: filtered.length,
      totalCount: rows.length,
    };
  }, [rows, query]);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    color: '#e5e5e5',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 4,
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <div style={{ color: '#e5e5e5', boxSizing: 'border-box' }}>
      {/* Add Form */}
      <div style={{ marginBottom: 32 }}>
        <h2
          style={{
            margin: '0 0 16px',
            fontSize: 13,
            fontWeight: 600,
            color: '#c9a857',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Add a tactic
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
          <label>
            <div style={labelStyle}>Tactic name *</div>
            <input
              value={form.tactic_name}
              onChange={(e) => setForm((f) => ({ ...f, tactic_name: e.target.value }))}
              style={inputStyle}
              placeholder="e.g., Straw Man"
            />
          </label>

          <label>
            <div style={labelStyle}>Category *</div>
            <input
              list="category-suggestions"
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
              style={inputStyle}
              placeholder="e.g., Logical Fallacy"
            />
            <datalist id="category-suggestions">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </label>

          <label>
            <div style={labelStyle}>Severity weight (1–5)</div>
            <input
              type="number"
              min={1}
              max={5}
              value={form.severity_weight}
              onChange={(e) => setForm((f) => ({ ...f, severity_weight: Number(e.target.value) }))}
              style={inputStyle}
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 20 }}>
            <input
              type="checkbox"
              checked={form.active}
              onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked }))}
              style={{ width: 16, height: 16, accentColor: '#c9a857' }}
            />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Active</span>
          </label>

          <label style={{ gridColumn: '1 / -1' }}>
            <div style={labelStyle}>Pattern hint</div>
            <input
              value={form.pattern_hint}
              onChange={(e) => setForm((f) => ({ ...f, pattern_hint: e.target.value }))}
              style={inputStyle}
              placeholder='"everyone knows", "no real X would…"'
            />
          </label>

          <label style={{ gridColumn: '1 / -1' }}>
            <div style={labelStyle}>Example</div>
            <input
              value={form.example}
              onChange={(e) => setForm((f) => ({ ...f, example: e.target.value }))}
              style={inputStyle}
              placeholder='"No true patriot would question this."'
            />
          </label>
        </div>

        <button
          onClick={create}
          disabled={!form.tactic_name.trim() || !form.category.trim()}
          style={{
            marginTop: 16,
            padding: '12px 20px',
            borderRadius: 8,
            border: 'none',
            background: '#c9a857',
            color: '#0c0c0e',
            fontWeight: 700,
            cursor: 'pointer',
            opacity: !form.tactic_name.trim() || !form.category.trim() ? 0.4 : 1,
          }}
        >
          Add tactic
        </button>

        {err && <div style={{ color: '#ef4444', marginTop: 12 }}>{err}</div>}
      </div>

      {/* Search & Controls */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, alignItems: 'center' }}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search tactics…"
          style={{
            ...inputStyle,
            flex: 1,
          }}
        />
        <button
          onClick={() => setQuery('')}
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Clear
        </button>
        <button
          onClick={load}
          disabled={loading}
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? 'Loading…' : 'Refresh'}
        </button>
        <div style={{ color: '#6b7280', fontSize: 12 }}>
          Showing <b>{grouped.filteredCount}</b> of <b>{grouped.totalCount}</b>
        </div>
      </div>

      {/* Tactic List */}
      {grouped.groups.map(([cat, items]) => (
        <div key={cat} style={{ marginBottom: 24 }}>
          <h3
            style={{
              margin: '0 0 12px',
              fontSize: 13,
              fontWeight: 600,
              color: '#c9a857',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {cat}
          </h3>

          <div
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {items.map((r: TacticRow, idx: number) => (
              <div
                key={r.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto auto',
                  gap: 16,
                  padding: '14px 16px',
                  borderTop: idx > 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  background: r.active ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.2)',
                  alignItems: 'center',
                  opacity: r.active ? 1 : 0.6,
                }}
              >
                {/* Details */}
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 2 }}>
                    {r.tactic_name}
                  </div>
                  {r.pattern_hint && (
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
                      {r.pattern_hint}
                    </div>
                  )}
                  {r.example && (
                    <div
                      style={{
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.35)',
                        fontStyle: 'italic',
                      }}
                    >
                      {r.example}
                    </div>
                  )}
                </div>

                {/* Weight + Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      padding: '4px 10px',
                      borderRadius: 6,
                      background: 'rgba(255,255,255,0.06)',
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    W{r.severity_weight}
                  </div>
                  <button
                    onClick={() => update(r.id, { active: !r.active })}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 999,
                      border: 'none',
                      background: r.active ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.2)',
                      color: r.active ? '#22c55e' : '#ef4444',
                      fontSize: 11,
                      fontWeight: 600,
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                    }}
                  >
                    {r.active ? 'On' : 'Off'}
                  </button>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    onClick={() => setEditing(r)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 6,
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'transparent',
                      color: 'rgba(255,255,255,0.7)',
                      cursor: 'pointer',
                      fontSize: 12,
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => remove(r.id)}
                    style={{
                      padding: '6px 12px',
                      borderRadius: 6,
                      border: '1px solid rgba(239,68,68,0.3)',
                      background: 'transparent',
                      color: 'rgba(239,68,68,0.8)',
                      cursor: 'pointer',
                      fontSize: 12,
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {editing && (
        <EditModal
          row={editing}
          categories={categories}
          onClose={() => setEditing(null)}
          onSave={async (patch) => {
            await update(editing.id, patch);
            setEditing(null);
          }}
        />
      )}
    </div>
  );
}

function EditModal({
  row,
  categories,
  onClose,
  onSave,
}: {
  row: TacticRow;
  categories: string[];
  onClose: () => void;
  onSave: (patch: Partial<TacticRow>) => void | Promise<void>;
}) {
  const [draft, setDraft] = useState({
    tactic_name: row.tactic_name,
    category: row.category,
    severity_weight: row.severity_weight,
    active: row.active,
    pattern_hint: row.pattern_hint ?? '',
    example: row.example ?? '',
  });

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px 12px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 8,
    color: '#e5e5e5',
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    color: 'rgba(255,255,255,0.5)',
    marginBottom: 4,
    display: 'block',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(640px, 100%)',
          background: 'rgba(20,20,24,0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: 16,
          border: '1px solid rgba(255,255,255,0.1)',
          padding: 24,
          color: '#e5e5e5',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div>
            <div style={{ fontWeight: 600, fontSize: 18, color: '#c9a857' }}>Edit tactic</div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, marginTop: 2 }}>
              Update details for "{row.tactic_name}"
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'transparent',
              borderRadius: 8,
              padding: '6px 12px',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
          <label>
            <div style={labelStyle}>Name</div>
            <input
              value={draft.tactic_name}
              onChange={(e) => setDraft((d) => ({ ...d, tactic_name: e.target.value }))}
              style={inputStyle}
            />
          </label>

          <label>
            <div style={labelStyle}>Category</div>
            <input
              list="category-suggestions-modal"
              value={draft.category}
              onChange={(e) => setDraft((d) => ({ ...d, category: e.target.value }))}
              style={inputStyle}
            />
            <datalist id="category-suggestions-modal">
              {categories.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
          </label>

          <label>
            <div style={labelStyle}>Severity weight (1–5)</div>
            <input
              type="number"
              min={1}
              max={5}
              value={draft.severity_weight}
              onChange={(e) => setDraft((d) => ({ ...d, severity_weight: Number(e.target.value) }))}
              style={inputStyle}
            />
          </label>

          <label style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 20 }}>
            <input
              type="checkbox"
              checked={draft.active}
              onChange={(e) => setDraft((d) => ({ ...d, active: e.target.checked }))}
              style={{ width: 16, height: 16, accentColor: '#c9a857' }}
            />
            <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>Active</span>
          </label>

          <label style={{ gridColumn: '1 / -1' }}>
            <div style={labelStyle}>Pattern hint</div>
            <textarea
              value={draft.pattern_hint}
              onChange={(e) => setDraft((d) => ({ ...d, pattern_hint: e.target.value }))}
              style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
              placeholder='"everyone knows", "no real X would…"'
            />
          </label>

          <label style={{ gridColumn: '1 / -1' }}>
            <div style={labelStyle}>Example</div>
            <textarea
              value={draft.example}
              onChange={(e) => setDraft((d) => ({ ...d, example: e.target.value }))}
              style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
              placeholder='"No true patriot would question this."'
            />
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 20 }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 16px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.1)',
              background: 'transparent',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={() =>
              onSave({
                tactic_name: draft.tactic_name.trim(),
                category: draft.category.trim(),
                severity_weight: draft.severity_weight,
                active: draft.active,
                pattern_hint: draft.pattern_hint.trim() || null,
                example: draft.example.trim() || null,
              })
            }
            style={{
              padding: '10px 20px',
              borderRadius: 8,
              border: 'none',
              background: '#c9a857',
              color: '#0c0c0e',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}

