// George voice — warm, British, perfect for luxury hospitality
const VOICE_ID = 'JBFqnCBsd6RMkjVDRZzb';

export default async function handler(req, res) {
  if (req.method !== 'POST') { res.status(405).end(); return; }

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ELEVENLABS_API_KEY not configured' });
    return;
  }

  const { text, voiceId = VOICE_ID } = req.body || {};
  if (!text) {
    res.status(400).json({ error: 'text required' });
    return;
  }

  try {
    const upstream = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'content-type': 'application/json',
        'accept': 'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2',
        output_format: 'mp3_44100_128',
        voice_settings: {
          stability: 0.55,
          similarity_boost: 0.75,
          style: 0.08,
          use_speaker_boost: true,
        },
      }),
    });

    if (!upstream.ok) {
      const err = await upstream.text().catch(() => '');
      res.status(upstream.status).json({ error: err.slice(0, 200) });
      return;
    }

    const buf = Buffer.from(await upstream.arrayBuffer());
    res.setHeader('content-type', 'audio/mpeg');
    res.setHeader('cache-control', 'no-store');
    res.status(200).send(buf);
  } catch (err) {
    res.status(500).json({ error: String(err?.message || err) });
  }
}
