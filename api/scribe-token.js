/**
 * GET /api/scribe-token
 *
 * Server-side issuer for ElevenLabs Scribe v2 Realtime single-use tokens.
 * Never expose ELEVENLABS_API_KEY to the client — this Vercel function holds
 * it in env and returns a short-lived token that the browser uses to open
 * the WebSocket directly.
 *
 * Env required (set via `vercel env add ELEVENLABS_API_KEY`):
 *   ELEVENLABS_API_KEY
 */
export default async function handler(req, res) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ELEVENLABS_API_KEY is not configured.' });
    return;
  }

  try {
    // ElevenLabs single-use token endpoint
    const upstream = await fetch(
      'https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=', // fallback unused
      { headers: { 'xi-api-key': apiKey } }
    ).catch(() => null);

    // Primary path: dedicated single-use token endpoint for realtime_scribe.
    // If your account/SDK version exposes a different path, swap below.
    const tokenRes = await fetch('https://api.elevenlabs.io/v1/speech-to-text/realtime/token', {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({ purpose: 'realtime_scribe' }),
    });

    if (!tokenRes.ok) {
      const text = await tokenRes.text().catch(() => '');
      res.status(tokenRes.status).json({ error: 'Failed to mint token', detail: text.slice(0, 200) });
      return;
    }

    const body = await tokenRes.json();
    res.setHeader('cache-control', 'no-store');
    res.status(200).json(body);
  } catch (err) {
    res.status(500).json({ error: String(err && err.message ? err.message : err) });
  }
}
