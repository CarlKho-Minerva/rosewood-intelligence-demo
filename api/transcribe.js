export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).end(); return; }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ELEVENLABS_API_KEY not configured' });
    return;
  }

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const buf = Buffer.concat(chunks);
    const mimeType = req.headers['content-type'] || 'audio/webm';

    const form = new FormData();
    form.append('file', new Blob([buf], { type: mimeType }), 'audio.webm');
    form.append('model_id', 'scribe_v2');
    form.append('language_code', 'eng');

    const upstream = await fetch('https://api.elevenlabs.io/v1/speech-to-text', {
      method: 'POST',
      headers: { 'xi-api-key': apiKey },
      body: form,
    });

    if (!upstream.ok) {
      const err = await upstream.text().catch(() => '');
      res.status(upstream.status).json({ error: err.slice(0, 300) });
      return;
    }

    const data = await upstream.json();
    res.setHeader('cache-control', 'no-store');
    res.status(200).json({ text: data.text || '' });
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
}
