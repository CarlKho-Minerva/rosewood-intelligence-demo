# Pitch Scripts — Rosewood Intelligence

Two scripts:
- **60-second Loom voice-over** (for the submission video — slides only, no live demo) → use this first if you're under the gun.
- **3-minute live pitch** (for the judging room) → at the bottom of this file.

---

# 1-minute Loom voice-over (submission video)

Total: **60 seconds**. Read aloud at a calm pace (~165 wpm).
Walk: `slides/pre/p1.html` → arrow-key through to `slides/outro/p13.html`. Hit each beat below as the slide appears on screen. Don't pause for animations — just keep moving.

Word count is calibrated so each beat lands on its slide.

---

### 0:00 · P1 voice intake · 8s
*(slide shows: phone call left, profile filling right)*

> Anas, your finance director, told us this morning — only **one percent** of guests get true preference handling today. We made it one hundred.

### 0:08 · P2 research + rate · 8s
*(slide shows: OSM map + Stanford Stadium + rate loader)*

> Before they arrive, the guest just talks. ElevenLabs transcribes, Claude fills the profile, finds the events, sets the rate. **Sixteen-twenty for Saturday.**

### 0:16 · P5 Claude synthesis · 8s
*(slide shows: server video left, synthesis pill + telemetry right)*

> During the stay, the server gets a thinking partner — *heavy bags, looks dehydrated, send water now, mention it at checkout.* Not a transcript wall.

### 0:24 · P6 HVAC dial · 6s
*(slide shows: aircon video with click-step temp)*

> The aircon dials in to the welcome temperature — **sixty-seven** — from the profile. No guest had to ask.

### 0:30 · P9 server UI · 8s
*(slide shows: three-column server view)*

> One screen for the floor — **observations, itinerary, tickets, profile.** The spa got added live. The Stanford tour came from the call.

### 0:38 · P10 broken sink → admin · 10s
*(slide shows: "the sink is broken" → admin shell with ticket)*

> *"The sink is broken."* One sentence. Lands on the admin queue, routed to maintenance, ETA eleven minutes. **Voice → STT → routed action.** That's the operating surface Rosewood doesn't currently have — rate, tickets, guests, wiki, Claude chat.

### 0:48 · P12 newsletter · 8s
*(slide shows: email with the real photo + amenities)*

> After checkout — one photo, then a memory delivered back. Not a marketing blast. The same fingerprint travels to **Calistoga 2027 on day one.**

### 0:56 · P13 close · 4s
*(slide shows: architecture + thanks)*

> Effortless. Invisible. Anticipatory. That's Rosewood Intelligence.

---

## Loom recording checklist

1. Open the **deployed app**: `https://rosewood-intelligence-demo.vercel.app/slides/pre/p1.html` — videos load fast on Vercel.
2. Press `F` to fullscreen the slide.
3. Start Loom (screen-only, no webcam — keeps focus on the slides).
4. Read the script. Use **right-arrow** or **right-click** to advance through animations + slides.
5. On P6, three clicks = lands on 67°F. Time the clicks with "60 → 68 → 70 → 67."
6. On P10, the broken-text overlay needs **2 clicks**: one to make the line appear, one to slam it into the ticket.
7. End on P13's "Thank you." Stop recording.
8. Paste the Loom URL into the submission form's **Demo Video** field.

If you flub a line, just keep going — Loom takes are forgiving and the video doesn't need to be perfect, it needs to be *submitted*.

---

# 3-minute live pitch script

Target runtime: **2:40–2:55** (under the 3-min hard limit, leaves Q&A buffer).
Delivery: walk `/`, `/admin`, `/live`, then the flipbook in one screen-recorded take.

Stage notation: `[surface · what's visible]`

---

### 0:00 · Hook · 10s
`[/ landing visible]`

> Anas, your finance director, told us this morning: only **one percent** of Rosewood's guests get true preference handling today. We built the system that makes it **a hundred** — without adding any new hardware.

### 0:10 · The three doors · 12s
`[/ landing — three door cards visible]`

> Three doors. The demo flipbook walks the stay end-to-end. The admin surface is the operating layer Rosewood doesn't currently have. And the live capture is ElevenLabs Scribe v2 running in your browser.

### 0:22 · Admin operating surface · 28s
`[/admin]`

> Rate recommendation — Saturday is plus fourteen percent because Stanford Open House is in the wiki and Claude wove it into the override. Tickets queue — the sink-broken note, the welcome-water auto-route, the anniversary table — all human-in-the-loop. Guests, with the patterns the team should know. Internal wiki — F&B menus, room layouts, the Calistoga 2027 pre-opening list. And the chat.

> *(Type one question into chat: "Why is Saturday's rate up 14%?")*

> Claude reads the wiki and the guest memory and gives the operator the answer in their language.

### 0:50 · Live Scribe v2 · 20s
`[/live · press Start]`

> Press once. Speak.

> *(Say one sentence into the mic.)*

> Partial transcript appears in under a second. The committed transcript settles below. One click, the row lands on the stay stream. Same loop the staff uses inside the product. Single-use token, key never touches the client.

### 1:10 · Pre · voice intake · 22s
`[slides/pre/p1.html → step through]`

> Before the stay, the guest just talks. Wine? Stanford tour? Allergies? ElevenLabs transcribes, Claude fills the profile — king bed, two guests, May sixteenth.

> *(Advance to p2.)*

> Then Claude does the research — Stanford Open House, Fogarty Winery — and optimizes the rate against the Reventel base. Sixteen-twenty for Saturday. No form, no kiosk.

### 1:32 · During · synthesis · 30s
`[p5 → p6 → p7]`

> Server observes: heavy bags. Likely dehydrated. Instead of a transcript wall, Claude gives a thinking pill — *send water now, mention the bag offer at checkout.*

> *(Advance to p6.)*

> The aircon dials in on its own — sixty, sixty-eight, seventy, sixty-seven — the welcome temperature from the profile.

> *(Advance to p7.)*

> One screen for the floor: observations, itinerary, tickets. Server is the protagonist. The system is the copilot.

### 2:02 · During · admin moment · 18s
`[p10]`

> A ticket is one sentence. *"The sink is broken."* Lands center stage, then snaps into the admin ticket queue, routed to maintenance, ETA eleven minutes. Voice → STT → routed action. The motion is the architecture.

### 2:20 · Post · the loop · 18s
`[p11 → p12]`

> One photo at the booth. Days later, the newsletter inbox — not a blast. *"This was you a few days ago. Come back."* With the actual photo from the stay.

### 2:38 · Close · 15s
`[p13]`

> Three lanes. Pre. During. Post. One memory layer. Opera stays the system of record. When Rosewood Calistoga opens in 2027, day one already knows its regulars.

> Effortless. Invisible. Anticipatory — without being intrusive. That's Rosewood Intelligence.

> *(Pause. End.)*

---

## Delivery notes

- The `/admin` chat answer is the only beat that can drag — pre-clicked the suggestion button before the take so the response lands in ~1.2s.
- Skip the live mic if the venue is loud. Fallback is the simulated transcript; same visual, no risk.
- On P6, three clicks lands exactly on 67. Don't overrun — pause one beat after.
- The newsletter slide is the emotional close — let the photo breathe before clicking through to P13.

## If you're over time

- Drop the Pre voice-intake beat (slides P1–P2). Open admin → live → during → close.
- Cut the spa emphasis on P9.

## If you're under time

- Add Calistoga callout earlier in admin: "Notice the pre-opening list — that's the growth story."
- Re-show P12 newsletter at the end on top of P13.
