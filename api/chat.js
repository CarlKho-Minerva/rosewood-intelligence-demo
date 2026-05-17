export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).end(); return; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
    return;
  }

  const { messages } = req.body || {};
  if (!messages || !Array.isArray(messages)) {
    res.status(400).json({ error: 'messages array required' });
    return;
  }

  const SYSTEM = `You are the Rosewood Intelligence assistant at Rosewood Sand Hill.
Property context:
- 5-star boutique hotel in Menlo Park/Silicon Valley. 117 rooms. AAA Five Diamond.
- Current guest: Eliza Chen, 3rd stay, Vineyard Suite east-facing. Profile: no peanuts, coffee 7AM, winery interest, Stanford tour booked. Added spa tonight at arrival.
- Rate logic: Reventel base Saturday $1,420. Stanford Open House (May 18) in wiki event calendar. +14% recommended = $1,620. Projected weekend upside: +$28K vs default.
- Tickets: sink broken in room 417 (maintenance, ETA 11min), welcome water auto-routed to Ms. Chen, anniversary table for Dr. Adler (7th visit, 7PM dinner).
- Tomorrow: 5 returning guests, 3 east-facing rooms, coffee carts staged 7AM. Top 3 spend guests get Calistoga 2027 pre-opening letter.
- Internal wiki: F&B menus, room layouts, Calistoga 2027 pre-opening list.
Answer concisely in 2-4 sentences. Be specific, use names and numbers from the property context.`;

  try {
    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: SYSTEM,
        messages,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      res.status(upstream.status).json({ error: text.slice(0, 200) });
      return;
    }

    const data = await upstream.json();
    res.setHeader('cache-control', 'no-store');
    res.status(200).json({ text: data.content?.[0]?.text || '' });
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
}
