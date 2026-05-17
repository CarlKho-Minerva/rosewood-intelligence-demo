export default async function handler(req, res) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'ELEVENLABS_API_KEY is not configured.' });
    return;
  }
  res.setHeader('cache-control', 'no-store');
  res.status(200).json({ token: apiKey });
}
