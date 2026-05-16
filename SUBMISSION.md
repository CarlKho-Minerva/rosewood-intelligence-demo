# Rosewood Intelligence — Hackathon Submission

**Hospitality 2030: A Rosewood Sand Hill Hackathon · May 16, 2026**

Submission form fields are ready to paste at the bottom of this file.

---

## Project description

**Rosewood Intelligence** is a calm AI memory layer for Rosewood — a guest fingerprint that takes the 1% VIP treatment and makes it the default for every guest, without adding new hardware. It sits *above* the systems Rosewood already runs (Opera for guest data, Reventel for rates), and turns three currently-disconnected sources — room signals, staff observations, and market context — into one operating surface. A `Server` view (stay stream + itinerary + tickets) for the floor, an `Admin` view (rate recommendation + ticket queue + guests + internal wiki + Claude chat) for ops, and a post-stay loop that closes with a personalized newsletter instead of a marketing blast. The live capture loop runs on ElevenLabs Scribe v2 Realtime; the synthesis, research, and personalization run on Claude.

## Problem statements addressed

- **The Invisible Concierge** — staff get a thinking partner ("Heavy bags + warm afternoon — likely dehydrated. Send chilled water before guest enters.") so the right service happens without the guest having to ask.
- **Post-Stay Relationship Continuity / Hyper-Personalized Guest Memory Engine** — the photo-booth → newsletter loop on slide P11/P12, plus the cross-property fingerprint that ports to Calistoga 2027.
- **Hyper-Personalized Arrival Orchestration (secondary)** — voice-first intake on slide P1 plus the Claude research beat on P2 that finds local events, sets rate, and pre-fills the guest profile.

## Judging-criteria answers

### Impact Potential — 20%

The Sand Hill finance director told us this morning that **only 1% of guests get true preference handling today**. That number was self-reported by Anas Nabulsi. This system turns that 1% into 100% by routing what the room and the staff already know into one fingerprint.

- **No new hardware**: every signal we use (thermostat, blinds, minibar, tablets, Opera, Reventel) is already in the building. We add a software layer, not a sensor.
- **Cross-property by design**: when Rosewood Calistoga opens in 2027, day one isn't a cold start — the fingerprints of repeat Sand Hill guests travel with them. We surface this directly in the admin internal wiki and outro slide P13.
- **Revenue tie-in**: Reventel currently requires manual overrides for local events. The admin dashboard's rate recommendation module folds in event signals automatically — Stanford Open House + winery weekend = +14% Saturday upside, ~$28K projected against the default baseline.
- **People, not replacement**: every Claude synthesis is paired with a human-in-the-loop ticket. The server stays the protagonist; the AI is a copilot, not a chatbot.

### Live Demo — 45%

What was built today, all visible in the deployed app:

- **Demo flipbook · 13 slides, each its own HTML file** — `pre/p1–p4`, `during/p5–p10`, `post/p11–p12`, `outro/p13`. Right-click or arrow keys step through each slide's animations, then advance. Four real demo videos wired in (P1 phone-call, P4 hotel arrival, P5 server speech, P6 2030 aircon control). Black-and-white + warm-multiply grade applied to every video via CSS so the language stays cohesive.
- **Admin operating surface** — `/admin` — full property dashboard with five live modules: rate recommendation, ticket queue, guests, internal property wiki, and a **Claude chat module** at the bottom that answers grounded questions about specific guests and operations. This is "the app that wasn't even there" — Rosewood does not currently have these surfaces unified.
- **Live ElevenLabs Scribe v2 Realtime** — `/live` — press once, speak, see partial transcripts arrive within ~1s and committed transcripts settle below. Single-use token issued by a Vercel function (`api/scribe-token.js`) so the API key never touches the client. Falls back to a simulated transcript when the token endpoint isn't configured so the demo never goes dark on stage.
- **Landing** — `/` — three clear doors into the work (slides / admin / live) so judges can pick where to start.

### Creativity and Originality — 35%

Five beats nobody else built today:

1. **Voice-first intake replaces the form** (P1). The guest answers three questions on a call; ElevenLabs transcribes; Claude fills the profile. No web form, no kiosk.
2. **Claude synthesis pill between observations** (P5). The server gets a *thinking partner*, not a transcript wall: "Heavy bags + warm afternoon — likely dehydrated. Send water now. Mention the bag offer at checkout."
3. **Click-step HVAC at 2030** (P6). The aircon control is a real physical-interaction video; the temperature dials 60 → 68 → 70 → 67 on each click. Profile-driven welcome temperature without the guest touching anything.
4. **Broken-text → ticket motion** (P10). "The sink is broken" lands centered on screen, then shrinks and animates into a ticket card inside the admin queue. The motion *is* the system architecture: voice → STT → routed ticket.
5. **Photo-booth → personalized newsletter loop** (P11 → P12). Guest takes one photo; days later the newsletter inbox says "this was you a few days ago. Come back." with the *actual* photo from the stay (built using the photo the team took with judges to prove the work was original). One of many cards in a universal Rosewood app, made visible on P13.

The product is not "AI for hotels." It is the calm memory layer Rosewood specifically described in their welcome remarks — "effortless, invisible, anticipatory without feeling intrusive."

## Partner technologies used

### Anthropic · Claude

- **PRE phase research (slide P2)** — Claude transcribes the call, pulls local context (OpenStreetMap + Bay Area event calendar), and optimizes the rate against the Reventel base. The step-3 overlay shows the search → result UI explicitly.
- **DURING phase synthesis (slide P5)** — the "hmmm" pill between observation rows. Claude synthesizes the room signals + staff note into a concrete *now* action and a *later* checkout action.
- **POST phase personalization (slide P12)** — the newsletter copy is written for the specific guest, drawing on the stay's actual events (spa, tour, Calistoga ask).
- **Admin chat module (`/admin`)** — Claude answers grounded operations questions, retrieving from the property's internal wiki + guest memory.

### ElevenLabs · Scribe v2 Realtime

- **Staff capture loop (slides P5, P10)** — the speech-note from the server, the "sink is broken" line that becomes a ticket — all wired through Scribe v2 STT in the product narrative.
- **Live transcription page (`/live`)** — actually working real-time mic → partial transcripts → committed transcripts. Single-use token via `/api/scribe-token` Vercel function (`ELEVENLABS_API_KEY` lives in Vercel env, never in the repo).
- **Falls back gracefully** — when the token endpoint isn't available, the page simulates the transcript stream so the demo still tells the story.

## Form fields (copy-paste)

| Field | Value |
| --- | --- |
| Team name | `Rosewood Intelligence` |
| Team members | Carl Vincent Kho (`Carl_NotANerd`) — solo build |
| Project description | (use the **Project description** section above; if a short version is needed, the next line works) |
| One-line description | A calm AI memory layer for Rosewood — voice intake, three-panel server view, admin operating surface, and a post-stay loop. Anthropic + ElevenLabs. No new hardware. |
| Public GitHub repository | `https://github.com/CarlKho-Minerva/rosewood-intelligence-demo` |
| Deployed app | `https://rosewood-intelligence-demo.vercel.app` |
| Demo video | (Loom URL — Carl to record + paste) |
| Partner technologies used | `Anthropic`, `ElevenLabs` |

## Submission checklist

- [x] Repo is public
- [x] Demo built today, clearly attributed
- [x] Maps to at least one official problem statement (it maps to three)
- [x] Anthropic + ElevenLabs both used inside the product, not just credited
- [x] No API keys in the repo (rotated via `vercel env`)
- [ ] Demo video uploaded to Loom / YouTube / Drive
- [ ] Submission form filled before 5:00 PM

## One-minute demo video outline (Loom take)

Target: ~55s.

1. (0:00 – 0:08) Land on `/` — say "Rosewood already has the signals; they just don't live in one place. Here are the three doors."
2. (0:08 – 0:22) Open `/admin` — scroll through rate / tickets / guests / wiki, type a question into Claude chat ("Why is Saturday's rate up 14%?"), let the response land.
3. (0:22 – 0:36) Open `/live` — press Start, say one sentence, watch it transcribe and commit. Press Save to stream — the row appears in the right panel.
4. (0:36 – 0:55) Cut to the flipbook — P1 fills the profile, P10 the broken-text → ticket beat, P12 the newsletter inbox, P13 closes with "Effortless, invisible, anticipatory — that's Rosewood Intelligence."

## Notes for the live 3-min pitch

The full pitch script is in [PITCH_SCRIPT.md](PITCH_SCRIPT.md). The demo video above is a tighter cut of the same beats.
