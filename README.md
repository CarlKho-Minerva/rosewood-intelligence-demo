# Rosewood Intelligence — Demo Flipbook

End-to-end demo for **Hospitality 2030: A Rosewood Sand Hill Hackathon** (May 16, 2026).

Rosewood Intelligence is a calm AI memory layer for Rosewood — a guest fingerprint that takes the 1% VIP treatment and makes it the default for every guest, without adding new hardware. This repo is the **demo video flipbook**: 12 full-screen slides, each its own HTML file, that step through the **pre / during / post** stay.

## Run it

Open `index.html` in a browser, hit **Start the demo →**, then drive the deck with the keyboard or right-click.

| Key | Action |
| --- | --- |
| `→` / `Space` / `PageDown` / right-click / left-click | advance one step (or to next slide) |
| `←` / `PageUp` | regress one step (or to previous slide) |
| `F` | toggle fullscreen |
| `R` / `Home` | restart current slide from step 0 |
| `End` | jump to final step of current slide |

Recommended capture: fullscreen Chrome, screen-record via Loom or QuickTime, walk all 12 slides in one take.

## Storyboard

```
PRE                 DURING                          POST
─── P1 voice intake ─── P5 staff observation ─── P11 photo booth
    P2 research         P6 HVAC cools             P12 newsletter
    P3 profile formed   P7 server UI fade-in
    P4 hotel arrival    P8 itinerary builds
                        P9 server view · complete
                        P10 ticket → admin dashboard
```

| # | File | Phase | What happens |
| --- | --- | --- | --- |
| P1 | [pre/p1.html](pre/p1.html) | Pre | Left: video of guest on call · Right: profile form fills in three fields, one per right-click |
| P2 | [pre/p2.html](pre/p2.html) | Pre | Claude does context research — transcribes the call, finds local events, optimizes rate |
| P3 | [pre/p3.html](pre/p3.html) | Pre | Complete guest profile snaps into place |
| P4 | [pre/p4.html](pre/p4.html) | Pre | Full-bleed welcome video · guest arrives at Sand Hill |
| P5 | [during/p5.html](during/p5.html) | During | Server speech-note → telemetry stream gets two rows (heavy bags, F&B alerted) |
| P6 | [during/p6.html](during/p6.html) | During | HVAC auto-cools the room to 67°F per profile · sensor row joins the stream |
| P7 | [during/p7.html](during/p7.html) | During | First reveal of the three-panel server UI — telemetry panel fades in |
| P8 | [during/p8.html](during/p8.html) | During | Profile facts flow into itinerary · guest adds spa live |
| P9 | [during/p9.html](during/p9.html) | During | Server view, fully populated · observations + itinerary + tickets |
| P10 | [during/p10.html](during/p10.html) | During · Admin | "The sink is broken" overlay shrinks into a ticket card inside the admin dashboard (rate recommendation + ticket queue + guest list) |
| P11 | [post/p11.html](post/p11.html) | Post | Photo booth · complimentary drink with photo · shutter fires |
| P12 | [post/p12.html](post/p12.html) | Post | Personalized newsletter inbox · "this was you a few days ago. Come back." |

## How sponsors are used

This is a hackathon demo, so credit is precise. The sponsor stack referenced **inside the product** is:

- **Anthropic · Claude** — agentic research in the PRE phase ([pre/p2.html](pre/p2.html)): transcribes the call, looks up local events, optimizes the rate. Drives the personalization copy in the POST newsletter ([post/p12.html](post/p12.html)).
- **ElevenLabs · Speech-to-Text** — the *server capture* loop in the DURING phase ([during/p5.html](during/p5.html), [during/p10.html](during/p10.html)). Staff dictate one sentence; ElevenLabs STT transcribes; the row lands in the stay stream and tickets are routed.

Other systems referenced (not sponsors, but in scope for the pitch): **Opera** (system of record), **Reventel** (rate context).

## Repo layout

```
.
├── index.html              entry point with controls cheat-sheet + table of contents
├── shared/
│   ├── styles.css          design tokens (cream + tan + green, Manrope + Cormorant Garamond)
│   └── slide.js            navigation engine (keyboard, right-click, video hydration)
├── pre/    p1.html  p2.html  p3.html  p4.html
├── during/ p5.html  p6.html  p7.html  p8.html  p9.html  p10.html
├── post/   p11.html p12.html
└── assets/                  optional drop-in directory for video files
```

Each slide's `<body>` exposes:

- `data-steps="N"` — internal animation steps before the slide hands off
- `data-prev` / `data-next` — sibling slide URLs (relative)
- `data-mode="Server" | "Admin"` — flips the mode chip in the top-right
- `data-tag` / `data-phase` / `data-index` / `data-total` — chrome labels

The body picks up classes `.step-0` through `.step-N` as the viewer advances; CSS keys off `body.slide-pX.step-N selector { ... }` to choreograph each beat.

## Video placeholders

`P1`, `P4`, `P5`, `P8` carry `.video-slot[data-src]` placeholders. Drop a file path into the `data-src` attribute and `slide.js` hydrates a `<video autoplay muted playsinline loop>` automatically. Suggested clip sources: Pexels stock for the hotel-arrival and concierge shots.

```html
<div class="video-slot" data-src="../assets/p1-call.mp4">...</div>
```

## Design rules followed

- No emojis on the surfaces — type, spacing, borders, and motion carry the language.
- Cream/tan/green palette · Manrope body · Cormorant Garamond accents.
- One argument per slide. Animation is the second voice.
- The transcript wall is never the center stage — see P5/P10 for the discipline.

## Author

Built solo on May 16, 2026 at Rosewood Sand Hill. Project lives under [`md-cv/applications/051126_RosewoodSandHill_Hospitality2030Hackathon/`](https://github.com/CarlKho-Minerva) in the author's main notes vault; this repo is the public, judge-facing slice.
