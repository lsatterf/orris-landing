import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

// Auth is handled by middleware - no token check needed here

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from('tactic_matrix')
    .select('*')
    .order('category', { ascending: true })
    .order('tactic_name', { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tactics: data ?? [] });
}

export async function POST(req: Request) {
  const body = await req.json();

  const payload = {
    tactic_name: String(body.tactic_name ?? '').trim(),
    category: String(body.category ?? '').trim(),
    pattern_hint: body.pattern_hint ? String(body.pattern_hint) : null,
    example: body.example ? String(body.example) : null,
    severity_weight: Number(body.severity_weight ?? 1),
    active: Boolean(body.active ?? true),
  };

  if (!payload.tactic_name || !payload.category) {
    return NextResponse.json(
      { error: 'tactic_name and category are required' },
      { status: 400 }
    );
  }

  // Clamp weight to 1–5
  payload.severity_weight = Math.max(1, Math.min(5, payload.severity_weight));

  const { data, error } = await supabaseAdmin
    .from('tactic_matrix')
    .insert(payload)
    .select('*')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tactic: data });
}

export async function PATCH(req: Request) {
  const body = await req.json();
  const id = String(body.id ?? '').trim();
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const updates: Record<string, unknown> = {};
  if (body.tactic_name !== undefined) updates.tactic_name = String(body.tactic_name).trim();
  if (body.category !== undefined) updates.category = String(body.category).trim();
  if (body.pattern_hint !== undefined)
    updates.pattern_hint = body.pattern_hint ? String(body.pattern_hint) : null;
  if (body.example !== undefined) updates.example = body.example ? String(body.example) : null;
  if (body.severity_weight !== undefined)
    updates.severity_weight = Math.max(1, Math.min(5, Number(body.severity_weight)));
  if (body.active !== undefined) updates.active = Boolean(body.active);

  const { data, error } = await supabaseAdmin
    .from('tactic_matrix')
    .update(updates)
    .eq('id', id)
    .select('*')
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ tactic: data });
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const { error } = await supabaseAdmin.from('tactic_matrix').delete().eq('id', id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

