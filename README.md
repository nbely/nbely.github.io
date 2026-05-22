# Handoff: Nick Bely Portfolio (GBA / Pokémon-inspired)

## Overview
A personal developer portfolio with strong Pokémon Gen 1–3 GBA aesthetic. The site frames itself like a single-player game: a title screen, a side-nav "pause menu", a Prof-Oak-style **PLAY** dialogue intro, a **DEV-DEX** of projects, a flippable **TRAINER CARD** résumé, and a **LINK UP** contact page. Throughout, the visitor can summon an in-character "companion" Nick (PLAY toggle) and trigger pixel `!` **QUEST** markers that surface story beats behind specific projects/roles.

The design must read as warm, casual, and a little cheesy without ever using literal Pokémon names or characters. The "trainer", "dex", "badges", "link up" are the load-bearing references — not specific creatures.

## About the Design Files
The files in this bundle are **design references created in HTML/React + plain CSS** — prototypes showing intended look and behavior. They are **not production code to copy directly**. The task is to recreate these designs in the target codebase's chosen stack (e.g. Next.js + Tailwind, Astro + vanilla CSS, SvelteKit, etc.) using that stack's established patterns and libraries.

The single-file bundled `index.html` is the canonical visual reference (run it in any browser). The `src/` and `styles/` folders contain the same code split into modules — useful for reading the logic of each screen, not as a literal import target.

## Fidelity
**High-fidelity** for the four implemented surfaces (Title, PLAY, DEV-DEX, TRAINER CARD, LINK UP). Final colors, typography, spacing, copy, and interactions are pinned. The visitor should land at pixel-equivalence with the prototype on a 1280×900 desktop window.

There is one explicit "next pass" idea documented but not built: an **About Me** block + a **Quests Completed** summary on the back of the Trainer Card. See the *Roadmap* section.

---

## Tech & dependencies
- **React 18.3.1** (development build via UMD in the prototype). In production: pick any framework.
- **No build tooling in the prototype.** Babel-standalone transpiles JSX inline; the prototype bundles all source into one `index.html` via a script. In a real repo, use a normal bundler.
- **No third-party UI libraries.** Everything is custom CSS.
- **Three Google Fonts**, loaded together:
  - `'Press Start 2P'` — pixel headings, nav, labels, buttons
  - `'VT323'` — CRT-style body copy in dialogue boxes, stats, descriptions
  - `'DM Mono'` — monospaced metadata, timestamps, "computer" text
  - `'DM Sans'` — fallback / system body (used very lightly; almost everything is pixel or CRT)
- **localStorage** — persists state under key `nbely-portfolio-v1`.

---

## Design Tokens

### Colors (light/day mode is the default)

| Token | Hex | Usage |
|---|---|---|
| `--bg`        | `#e8e0c4` | Page background (warm parchment) |
| `--bg-grid`   | `#d9cfa8` | Background grid lines (1px squares on 32px) |
| `--paper`     | `#f3ecd1` | Primary surface fill (cards, rails) |
| `--paper-2`   | `#fff7df` | Secondary/raised surface |
| `--ink`       | `#1b1e15` | Primary text + all borders + shadows |
| `--ink-soft`  | `#55604a` | Secondary text |
| `--ink-muted` | `#8a8f7a` | Tertiary text / hints |
| `--emerald`       | `#1fa463` | Brand accent (active states, primary buttons) |
| `--emerald-deep`  | `#166c45` | Headings in dialogue/sections |
| `--emerald-light` | `#7dd4a5` | Grass band in PLAY scene |
| `--gold`       | `#f2c230` | Featured Dev-Dex band, "senior" badges |
| `--gold-soft`  | `#efd98a` | Night-mode gold band |
| `--quest`      | `#ffb400` | `!` quest marker fill |
| `--ruby`       | `#c4463b` | Validation errors |

### Night-mode tokens (applied via `body.night` class)
| Token | Hex |
|---|---|
| `--bg`        | `#14201a` |
| `--bg-grid`   | `#1c2a22` |
| `--paper`     | `#1f2d25` |
| `--paper-2`   | `#27382d` |
| `--ink`       | `#e3e8d6` |
| `--ink-soft`  | `#a6b49a` |
| `--ink-muted` | `#7a8774` |
| `--emerald`       | `#3bd68a` |
| `--emerald-deep`  | `#1fa463` |
| `--emerald-light` | `#a9e8c2` |
| `--gold`       | `#ffd95e` |
| `--gold-soft`  | `#c9a940` |
| `--quest`      | `#ffcf45` |
| `--ruby`       | `#ff7d70` |

### Shadows (hard, pixel-style — no blur)
- `--shadow-hard`: `4px 4px 0 var(--ink)`
- `--shadow-hard-lg`: `6px 6px 0 var(--ink)`
- Night: shadow color is `#0a110d` instead of `--ink`.

### Borders
- All borders are solid black (`--ink`), either **2px** (most things) or **3px** (cards, the page-level "card on card" hierarchy).
- Inside cards there's frequently a 1px ink border `inset 5–8px` from the outer edge — gives the "Game Boy bezel within bezel" look. Implemented via `::before { content: ''; position: absolute; inset: 6px; border: 1px solid var(--ink); }`.
- **No border-radius anywhere.** Pixel = square.

### Typography scale
| Use | Family | Size | Weight | Letter-spacing |
|---|---|---|---|---|
| Page title (H2) | Press Start 2P | 16px | n/a | 2px |
| Section label | Press Start 2P | 10–11px | n/a | 1.5px |
| Pixel button | Press Start 2P | 9–13px | n/a | 1–2px |
| Page subtitle (under H2) | DM Mono | 12px | 400 | 1px |
| Body copy in dialogue/desc | VT323 | 18–22px | 400 | normal |
| Stat values | VT323 | 17–20px | 400 | normal |
| Metadata (years, IDs) | DM Mono | 11–13px | 400 | 1px |
| Body fallback | DM Sans | 14–16px | 400 | normal |

### Spacing
- App outer padding: `28px 28px 32px` (desktop), `18px 16px 24px` (mobile).
- Card padding: `14–22px` depending on density.
- Gap between cards in a list: `12–18px`.
- Side-nav width: `220px` expanded, `64px` collapsed, `min(88vw, 360px)` on mobile (as a slide-in drawer).

### Background grid (decorative, on `<body>`)
```css
background-image:
  linear-gradient(var(--bg-grid) 1px, transparent 1px),
  linear-gradient(90deg, var(--bg-grid) 1px, transparent 1px);
background-size: 32px 32px;
```

---

## App Shell

### Persistent side-nav ("Pause Menu")
- Lives sticky on the left at all viewport heights ≥ 821px. On smaller viewports it becomes a slide-in drawer toggled by a `☰ MENU` button in a mobile topbar.
- Width: 220px expanded · 64px collapsed · `min(88vw, 360px)` mobile drawer.
- Sections, top to bottom:
  1. **Brand block** — 28×28 pokéball-ish mark (emerald disc + ink waist-line + paper center button) + two-line wordmark `NICK / BELY` in Press Start 2P 11px.
  2. **"☰ MENU" label** — Press Start 2P 9px, ink-soft.
  3. **Nav buttons** — 4 items, each: `cursor (▶) · icon · label`. Items use VT323 20px.
  4. **Toggles block** (bottom-pinned): PLAY · QUESTS · NIGHT (NIGHT desktop only — mobile has it in topbar). Each row: pixel-font label, pxswitch, "on"/"off" hint (right-aligned, `min-width: 26px` so it doesn't shift between states).
  5. **`« COLLAPSE` button** at the very bottom. When collapsed, the button becomes `»` and is the same button (no separate "expand" affordance — same control, mirrors the collapse position).

### Nav items
| Id | Label | Icon |
|---|---|---|
| `play` | PLAY | `▶` glyph (Press Start 2P) |
| `dex` | DEV-DEX | Custom monochrome **Dex Device** SVG (handheld console outline + filled screen + d-pad + button) |
| `card` | TRAINER CARD | Custom monochrome **ID Card** SVG (paper outline + filled portrait box + filled text lines) |
| `link` | LINK UP | `⇄` glyph (trade-cable arrows) |

Icon SVGs use `fill="currentColor"` and `stroke="currentColor"` so they invert correctly when their nav item is the active one (paper-on-emerald). Exact SVG paths are in `src/shell/PauseMenu.jsx`.

### Active state
The active nav item has: emerald background, paper text, 2px ink border, `3px 3px 0 ink` hard shadow, and translates `-1px, -1px`. The `▶` cursor goes from `opacity: 0` → `1`.

### Toggle "pxswitch"
A pixel-styled toggle: 26×14px (desktop) / 56×30px (mobile), 2px ink border, paper bg. The "thumb" is a `7×7` ink square that snaps from `left: 1px` → `left: 14px` (or `3 → 33` mobile) via `transition: left 120ms steps(3)`. Active state: emerald bg + paper thumb. **Use `steps(3)` for the transition — gives the pixel-y "tick tick" feel.**

### Mobile topbar (≤820px)
A 14×18px-padded bar above the main column: `☰ MENU` button (left), `NICK BELY` wordmark (center), night-mode toggle button (right). 3px bottom border, paper bg.

---

## Screens

### 1. Title Screen
Path: `route === 'title' && !state.visited`. Once the user clicks "PRESS START", `visited` is set to `true` in localStorage and they go to PLAY. **Future visits skip the title entirely.**

**Layout:**
- Full-viewport centered. CRT bezel: `width: min(860px, 100%)`, 4px ink border, `8px 8px 0 ink` shadow, 56px top padding, 48px sides, paper bg.
- Inside the bezel:
  1. Logo: `NICK BELY` in Press Start 2P, `clamp(28px, 5.5vw, 52px)`, letter-spacing 2px. `NICK` is emerald-deep with a 2px ink text-stroke; `BELY` is plain ink.
  2. Version line: `ver. 2.0 — new game` (DM Mono 12px, ink-muted, letter-spacing 2px).
  3. Tagline (28px top margin): `full-stack dev · open-source author` / `tells stories, ships weird useful things`. VT323 22px, ink-soft, centered, max-width 520px.
  4. `▶ PRESS START` button: Press Start 2P 14px, 14×24 padding, paper-2 bg, 3px ink border, `5px 5px 0 ink` shadow. Animates with `@keyframes ps-blink { 50% { opacity: 0.4; } }` at `1.3s steps(2) infinite`. Hover: emerald bg, paper text, no animation.
  5. Decorative row of 8 ten-px emerald squares with ink borders (gives "Game Boy bezel buttons" feel).
  6. Footer meta strip: `© NICK BELY · {YEAR}` left, `emerald edition` right. 1px dashed ink top border.
- A floating night-mode toggle pill in the top-right (`☀ DAY` / `☾ NIGHT`).
- Two faint repeating-gradient scanline overlays inside the bezel for CRT feel:
  ```css
  background: repeating-linear-gradient(0deg, transparent 0 3px, rgba(27,30,21,0.04) 3px 4px);
  ```

**Future:** docstring in `TitleScreen.jsx` notes that an idle-timeout animation (sprite walks across screen, types on laptop, gives a hidden quest) is a planned addition. Not implemented yet.

### 2. PLAY (home)
The "Professor Oak" intro screen. Lives at `route === 'play'`.

**Layout:**
- Grid: `1fr auto`, `min-height: 480px`. Top row: the "stage". Bottom row: the dialogue box.
- **Stage:** linear-gradient day/night sky → grass band at 65%. 3px ink border, hard shadow. Inside:
  - A subtle radial-dot pattern for the sky portion (3 dot positions, 80–120px spacing, 0.08 alpha).
  - A 3px solid ink horizon line at the 65% mark.
  - A grass band (`emerald-light` day, `#1c5a3a` night) with vertical stripe pattern: `repeating-linear-gradient(90deg, transparent 0 14px, rgba(27,30,21,0.12) 14px 15px)`.
  - **Trainer sprite** centered horizontally, anchored to the grass band. ~144×192 px (scale 6 on a 24×32 base). See *Sprites* below.
  - **Quest tags** (only visible when QUESTS toggle is on): a vertical stack pinned top-right of the stage. Each row: 6×8 padding, paper bg, 2px ink border, holds a 16×16 mini quest-mk and a small Press Start 2P 9px label. Two tags total: `ASK ABOUT FLOWCORD` and `ASK ABOUT POKÉSANDBOX`.

- **Dialogue box** (see *Dialogue System* below). On PLAY home it shows the trainer's portrait (mouth-moves while typing), Prof-Oak intro line, and 5 choice chips.

**Intro dialogue tree** (`PLAY_INTRO`, in PlayScreen.jsx):
- `root`: "Hey! Glad you made it. I'm Nick — I build open-source tools for Discord communities, and I like telling good stories with code. Want the tour?"
  - choices: SHOW ME AROUND → tour · WHAT ARE YOU BUILDING? → projects · OPEN DEV-DEX (route change) · OPEN TRAINER CARD (route change) · SKIP → skip
- `tour`: explains side-nav + `!` markers + QUESTS toggle.
  - choices: WHAT ABOUT YOUR PROJECTS? · GOT IT — OPEN DEV-DEX · SKIP
- `projects`: pitches Flowcord + PokéSandbox in one paragraph.
  - choices: SHOW ME THE DEV-DEX · TELL ME ABOUT YOU → about · SKIP
- `about`: warm one-paragraph self-intro.
  - choices: OPEN TRAINER CARD · OPEN DEV-DEX · LINK UP
- `skip`: brief acknowledgement + reminder about menu.

**Returning visitor variant** (`PLAY_RETURN`): triggered when `state.visited && state.dialogueLog.length > 0`.
- `root`: "Hey, you're back! Good to see you. Where to this time?" — 4 choices route to DEV-DEX / TRAINER CARD / LINK UP, or fire the intro again.

### 3. DEV-DEX
The projects listing. `route === 'dex'`.

**Header row** (`flex justify-between, align-items: flex-start, padding-bottom: 16px, border-bottom: 2px dashed ink`):
- Left: H2 `DEV-DEX` (Press Start 2P 16px) + subtitle `No. NNN / NNN entries` (DM Mono 12px, ink-soft, 8px top margin).
- Right: a filter dropdown — `<select>` styled custom with:
  - 240px min-width, paper bg, 2px ink border, `3px 3px 0 ink` shadow.
  - 20px VT323 text inside.
  - A fixed `FILTER ·` Press Start 2P 9px prefix on the left, absolutely positioned, ink-soft, pointer-events: none. The select's text starts after a 78px left padding to clear it.
  - A 16px `▾` caret in Press Start 2P pinned to the right.

**Entry list** (`flex-direction: column, gap: 14px`):
Each entry is an `<article>` 3px ink-bordered card. Structure:
- **dex-head** (top band): 14×18 padding, 2px solid ink bottom border, `overflow: hidden`. Contains the entry ID (top-right absolute, DM Mono 10px), name (Press Start 2P 16px), and type chips (8px top margin). On **featured** entries (Flowcord, PokéSandbox) this band has a solid **gold** fill (`--gold` light / `--gold-soft` night) so it reads like a Pokédex entry header. Names on featured entries are forced to dark ink for contrast.
- **dex-row** (16×18 padding, `grid-template-columns: 120px 1fr, gap: 18px`):
  - **dex-art**: 120×120 ink-bordered square with paper-2 bg containing a custom monochrome SVG (see *Pixel Art* below). On mobile: 80×80, padding tightens.
  - **dex-content**: description (VT323 18px), stats row, then actions row.
- **stats**: a horizontal flex row, `margin-top: 16px, padding-top: 12px, border-top: 1px dashed ink-muted`. Each stat is `<b>KEY</b> value` with `<b>` in Press Start 2P 9px and the value in DM Mono 11px.
- **actions**: 10px gap. Each is a Press Start 2P 9px chip, 2px ink border, paper bg. The "primary" action gets emerald bg + paper text + `2px 2px 0 ink` shadow. Hover state: emerald fill + shadow.

**Quest markers**: when QUESTS toggle is on AND the entry has a quest, render a 22×22 quest-mk pinned to the top-left of the entry root (`position: absolute, top: -10px, left: -10px, z-index: 4`). The marker overflows above the entry's gold band — the band itself has `overflow: hidden` to clip its own content, but the entry root doesn't, so the marker hangs cleanly outside.

**Real-content entries:**
1. **FLOWCORD** (No. 001, featured)
   - Types: OSS · DISCORD.JS · TYPESCRIPT
   - Desc: "A UI state-menu framework for Discord.js bots. Declarative menus, shared state, less boilerplate — build complex interactive bot UIs without the usual mess of listener spaghetti."
   - Stats: ROLE = Creator · STATUS = Active · LINK = flowcord.dev
   - Actions: READ DOCS (primary, https://flowcord.dev/) · GITHUB ↗ (https://github.com/flowcord-dev/flowcord-core)
   - Quest: "Why build another Discord framework?" → 2 dialogue lines (see DevDex.jsx for exact copy).
2. **POKÉSANDBOX** (No. 002, featured)
   - Types: FANGAME-ENGINE · BOT · NODE
   - Desc: "A Pokémon fangame creation engine: Discord servers can design, manage and deploy their own custom regions as playable games, all run through a bot. Catching, battling, progression — server-native."
   - Stats: ROLE = Creator · STATUS = In development · LINK = github.com/nbely/pokesandbox
   - Actions: GITHUB ↗ (primary, https://github.com/nbely/pokesandbox)
   - Quest: "What's the origin story?" → 2 dialogue lines.
3. **SIDE QUEST 03** (No. 003) — placeholder card. Types WEB · REACT.
4. **SIDE QUEST 04** (No. 004) — placeholder card. Types CLI · GO.

**Type chips**: Press Start 2P 8px, 4×7 padding, 2px ink border, line-height 1, letter-spacing 0.5px. Three color variants used:
- Default chip: paper bg, ink text, ink border.
- `.emerald`: emerald bg, paper text.
- `.gold`: gold bg, ink text (forced dark in both themes), ink border.

For each Dev-Dex entry, the type chips are colored by index: first chip is `.emerald`, second is `.gold`, rest are default.

**Docked dialogue** at the bottom of Dev-Dex: when PLAY toggle is on OR a quest is active, render the dialogue box with `position: sticky, bottom: 0`. To prevent content showing through it, the dock has a full-bleed background (negative `margin: 0 -28px` on desktop / `-16px` on mobile to escape the main-col padding), 3px ink top border, and the column's own `bg` color as backdrop. The dialogue box inside has its `4px 4px 0 ink` shadow as usual.

### 4. TRAINER CARD
A 2-sided card. `route === 'card'`.

**Header**: `↻ FLIP CARD` button (Press Start 2P 10px, paper-2 bg, ink border, hard shadow) on the right; H2 `TRAINER CARD` + subtitle "FRONT · stats & badges" or "BACK · work history" on the left.

**Card transition**: conditional render (NOT a 3D flip — we tried, the 3D approach is fragile across browsers). On `side` state change, the new face mounts with a 340ms `cubic-bezier(0.6, 0, 0.4, 1)` rotate-Y entrance animation (`90deg → 0deg`, opacity `0 → 1` over the first 60%). The wrapper passes `key={side}` to force a remount.

#### Front
- 3px ink border, hard-lg shadow, paper bg, 22×24 padding, 1px inset ink frame (the GBA bezel-within-bezel).
- **tc-front-top**: grid `160px 1fr, gap: 22px`. 2px solid ink bottom border + 16px margin under it.
  - **tc-portrait**: 160-wide ink-bordered paper-2 box, padding 16, hard shadow. Contains the Portrait component (80×80 px scale, ink border 2px) and a `NICK` label (Press Start 2P 9px, letter-spacing 2px).
  - **tc-stats**: a `<dl>` of stat rows. Each row is `grid: 100px 1fr, gap 12px, baseline-aligned, bottom 1px dotted ink-muted, 4px bottom padding`. Labels: Press Start 2P 9px emerald-deep (emerald in night). Values: VT323 20px ink.
- **Stats** (5 total):
  | Label | Value |
  |---|---|
  | NAME | NICK BELY |
  | CLASS | FULL-STACK DEV |
  | HOME | NEW YORK CITY |
  | PLAYTIME | 5+ YEARS |
  | TYPE | TS / NODE / REACT |

- **tc-badge-case**:
  - Section label: `BADGES · 5` (Press Start 2P 11px emerald-deep, 1px dashed ink-muted bottom border, 6px bottom padding). **NOT** styled as a button.
  - **tc-badge-grid**: `auto-fit, minmax(180px, 1fr), gap 12px`.
  - Each badge: `grid: 52px 1fr, gap 10, 10×12 padding, paper-2 bg, 2px ink border, 2px 2px 0 ink shadow`.
    - **tc-badge-disc**: 44×44 circle, 2px ink border, `inset 0 -3px 0 rgba(0,0,0,0.18)` for shading, plus an `::after` highlight pixel at top-left for "shiny badge" feel. Variants: `.emerald`, `.gold`, `.ruby` (gold has forced dark ink text).
    - **tc-badge-meta**: name (Press Start 2P 9px), org (VT323 15px ink-soft), year (DM Mono 10px ink-muted).
  - **5 real badges + 3 LOCKED slots** = 8-slot Pokémon badge case feel. LOCKED slots: hashed paper bg, dashed ink border, ink-muted "?" letter, name "LOCKED", org "future role", year "— —".

  **Real badge entries** (chronological):
  | letter | label | org | year | color |
  |---|---|---|---|---|
  | I | ENGINEER I | LAUNCH BY NTT DATA | 2020 | emerald |
  | II | ENGINEER II | LAUNCH BY NTT DATA | 2021 | emerald |
  | S | SENIOR ENGINEER I | LAUNCH BY NTT DATA | 2022 | gold |
  | M | MID-LEVEL ENGINEER | NOVATA | 2023 | emerald |
  | S | SENIOR ENGINEER I | NOVATA | 2024 | gold |

- **tc-footer-meta**: 14px top margin, 12px top padding, 1px dashed ink border. DM Mono 11px ink-soft. Centered. Text: `ID No. 00042 · CARTRIDGE: EMERALD · LAST SAVED {locale date}`.

#### Back
- Same border/padding/inset-frame as front.
- Section label `WORK HISTORY` (same emerald-deep underlined treatment).
- **tc-jobs**: vertical flex, 18px gap.
- **tc-job** (per company): 2px ink border, paper-2 bg, 14×16 padding, 2px hard shadow.
  - `<header>`: company name (Press Start 2P 12px) + period (ink-soft 11px). 1px dashed ink-muted bottom border, 8px bottom padding, 10px bottom margin.
  - **blurb**: VT323 18px paragraph.
  - **role-list**: vertical list of sub-roles. Each row: `grid: 22px 1fr auto, gap 10px`. Bullet is a `▸` in Press Start 2P 14px emerald-deep (emerald in night). Title VT323 17px. Period DM Mono 13px ink-soft.
  - **stack**: chip row.
- **Real work-history entries:**
  1. **NOVATA** (2023 — PRESENT). Blurb: "ESG data platform for private markets. Shipped reporting, data ingestion, and internal tooling work." Roles: Senior Engineer I (2024 — PRESENT) · Mid-Level Engineer (2023 — 2024). Stack chips: TYPESCRIPT · REACT · NODE · POSTGRES.
  2. **LAUNCH BY NTT DATA** (2020 — 2023). Blurb: "Consulting agency. Built and shipped client products across multiple stacks — first dev role out of school." Roles: Senior Engineer I (2022 — 2023) · Engineer II (2021 — 2022) · Engineer I (2020 — 2021). Stack chips: ANGULAR · REACT · NODE · JAVA · AWS.

- **Footer meta:** `ID No. 00042 · 2 ORGS · 5 ROLES · STILL PLAYING`.

### 5. LINK UP
Contact page. `route === 'link'`.

**Header**: H2 `LINK UP` + subtitle "trade info · open a channel". 2px dashed bottom border, 16px padding-bottom.

**lu-socials**: 4-up grid `repeat(auto-fit, minmax(220px, 1fr)), gap 12px`. Each card:
- `<a>` (semantic) with `target="_blank" rel="noopener noreferrer"`.
- Grid: `44px 1fr, gap 12px`.
- 12×14 padding, paper bg, 2px ink border, `3px 3px 0 ink` shadow.
- Hover: translate `-1px -1px`, shadow grows to `4px 4px 0 ink`.
- **lu-social-mark** (36×36 square, 2px ink border, Press Start 2P 13px, single-letter label `G`/`L`/`E`/`D`). Variants: `.emerald` (GitHub), `.gold` (LinkedIn), default paper-2 (Email, Discord).
- **lu-social-body**: label (Press Start 2P 9px) + handle (DM Mono 12px ink-soft).
- A `title` tooltip on hover surfaces the action: "Tap to copy …", "Open mail to …", or "X: handle (opens in new tab)".

**Real socials:**
| label | handle | href | action |
|---|---|---|---|
| GITHUB | nbely | https://github.com/nbely | open new tab |
| LINKEDIN | nbely | https://www.linkedin.com/in/nbely/ | open new tab |
| EMAIL | nicholas.bely@gmail.com | mailto:nicholas.bely@gmail.com | open mail client (via `window.open(href, '_blank')` for iframe-safety) |
| DISCORD | _chronicler_ | — | copy `_chronicler_` to clipboard, briefly swap handle to "✓ COPIED" |

**Iframe-safety**: the prototype runs in a sandboxed iframe so it uses `window.open(href, '_blank')` for `mailto:` (with a `window.top.location` fallback), and falls back to `document.execCommand('copy')` if `navigator.clipboard` is unavailable. In a normal site you can drop the `window.open` workaround for mailto, but **keep the `execCommand` clipboard fallback** for older browsers.

**lu-form** (contact form):
- 3px ink border, paper bg, hard-lg shadow, 20×22 padding. 1px inset frame.
- **form head**: section label `SEND A MESSAGE` (Press Start 2P 11px emerald-deep, 1px dashed ink-muted bottom border, 10px bottom padding — same treatment as Trainer Card section labels, **NOT** a button) + right-aligned hint `opens in your mail client` (DM Mono 11px ink-soft).
- **lu-grid**: 2-column on desktop, 1-column on mobile, gap `14 18`.
- **Fields:**
  | Field | Type | Validation |
  |---|---|---|
  | NAME | text | required, must be non-empty trimmed |
  | EMAIL | email | required, must match `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
  | REASON | segmented radio (WORK / OPPORTUNITY · COLLAB / OSS · JUST CHAT · OTHER) | always has a value, defaults to `work` |
  | SUBJECT | text (full-width) | required |
  | MESSAGE | textarea, 5 rows (full-width) | required, min 8 chars trimmed |

  - Labels: Press Start 2P 9px ink, 1.5px letter-spacing.
  - Inputs/textareas: VT323 20px, paper-2 bg, 2px ink border, 8×10 padding. Focus state: 2px emerald outline at 2px offset. Invalid state: border becomes ruby.
  - Error text: DM Mono 11px ruby. Appears below the field.
  - REASON pills (lu-radio): Press Start 2P 9px, 8×10 padding, 2px ink border, paper-2 bg. Active: emerald bg + paper text + `2px 2px 0 ink` shadow + `translate(-1px -1px)`.
- **Submit button**: Press Start 2P 11px, `12 18` padding, emerald bg, paper text, 2px ink border, `4px 4px 0 ink` shadow. Hover: `-1px -1px` translate + bigger shadow.
- **Submit behavior**: validates → builds a `mailto:` URL with prefix `[REASON LABEL] subject` and body templated as:
  ```
  Hi Nick,

  {message}

  —
  From: {name}
  Reply-to: {email}
  ```
  Opens via `window.open` for iframe-safety. On success, button label flips to `OPEN MAIL CLIENT AGAIN` and a small `your mail client should be open now` note appears.

---

## Dialogue System (cross-cutting)

A reusable `<DialogueBox>` component (see `src/lib/dialogue.jsx`). Used in PLAY home and as a dock on Dev-Dex during quest interactions.

**Anatomy of the box:**
- 3px ink border, paper-2 bg, `4px 4px 0 ink` shadow, 14×18 padding (42px bottom for the advance indicator), 1px inset ink frame.
- **Head row** (10px bottom margin): `[portrait 52×52]  [speaker name]  …  [controls right-aligned]`.
  - Portrait: 2px ink border, contains the Portrait pixel-art SVG. When `speaking=true` (typewriter still going), the mouth pixel toggles open/closed every 140ms.
  - Speaker name: Press Start 2P 11px emerald-deep (emerald in night), letter-spacing 1px.
  - Controls: `▤ LOG`, optional `▽` (minimize), optional `×` (close). Each is a Press Start 2P 8px button with paper bg + 2px ink border. Hover: emerald fill, paper text.
- **Text** (VT323 22px, line-height 1.3, min-height 82px) — typewriter-revealed character-by-character at ~14ms/char. Clicking or pressing Enter/Space/A finishes it immediately. A blinking 10×18 ink caret follows the last revealed character while typing (animation `0.6s steps(2)`).
- **Choices** (only shown once text is fully revealed): horizontal flex-wrap, 8px gap. Each is a Press Start 2P-aside VT323 19px button: 2px ink border, paper bg. Hover/selected: emerald fill, paper text, `3px 3px 0 ink` shadow, `-1px -1px` translate.
- **Keyboard nav**: Enter/Space/A finishes typewriter or fires the selected choice. ↑↓←→ cycles selection (`Math.max/min` wraps).
- **Advance indicator** (`▼ CLICK TO CONTINUE`): pinned bottom-right, Press Start 2P 10px, bobs `to { transform: translateY(3px) }` over 1s alternate.
- **Dialogue log overlay**: opens above the box on `▤ LOG` click. Pixel panel, max-height 220px scrollable. Renders the persisted log (newest first), each entry `[WHO]: text`. Close + Clear buttons.

**Logging persistence**: every fully-revealed dialogue line plus every chosen player option goes into `state.dialogueLog` (kept at last 80 entries) and persists in localStorage. This is what powers the "returning visitor" detection in PLAY home.

---

## Quest System

A "quest" is a `!` marker placed next to specific Dev-Dex entries (and could later be placed next to Trainer Card jobs). Clicking it opens a 2-line dialogue tree explaining the story behind that thing.

- **Quest marker visual**: 22×22 circle, 2px ink border, `--quest` (yellow) fill, `2px 2px 0 ink` shadow, Press Start 2P 11px ink `!` glyph. Default state: gently bobbing animation. Hover: nothing extra (it's already inviting).
- **Completed state** (`.done` class): bg shifts to `#c6c0ab` (light) / `#3a4a3f` (night), opacity drops to 0.55, animation off, `!` is hidden and replaced by an `::after { content: '✓' }` mark. Hover swaps back to the active style — `:hover::before { content: '!' }` plus full opacity — so completed quests can be re-engaged.
- **Visibility coupling**: independent toggles. Turning PLAY on auto-enables QUESTS. Turning PLAY off preserves the user's last QUESTS state. Both persist in localStorage.

**Completed-quests log**: `state.completedQuests` is a unique array of quest ids. On quest open it gets pushed (idempotent — never duplicates).

---

## Pixel Art

Two custom SVG art systems live in `src/lib/sprites.jsx`. **No external image assets** — everything is inline SVG rendered with `shape-rendering: crispEdges` and `image-rendering: pixelated`.

### `<TrainerSprite scale={6} idle={true} />`
- 24×32 base pixel grid. The "dev trainer" sprite: dark hair, peach skin face with eyes/mouth, emerald shirt with arms, brown belt with a small ruby+paper pokéball, dark blue pants, ink shoes. He holds a small laptop (cream body, emerald screen) in front of his torso.
- `idle` mode adds a 1-px vertical bob synced to a sine wave (1.4 Hz, amplitude 0.5 → rounded to integer pixels).
- Outline pixels follow the silhouette but are sparse; the shapes themselves carry most of the read.

### `<Portrait speaking={…} scale={3} />`
- 16×16 base. Bust shot: hair, face with eyes, mouth pixel, shirt with darker collar/shading.
- Mouth animates open/closed when `speaking=true` (alternates every 140ms between a 2×1 ink mouth and a 2×1 ink with 2×1 deeper-tone "mouth inside" pixel).
- Used inside the dialogue box (52×52 framed slot) and on the Trainer Card front (80×80 framed slot).

### `<DexArt kind={'flowcord'|'pokesandbox'|'generic'} />`
- 16×16 base. Themed art per project:
  - **flowcord**: emerald speech bubble with 3 inner paper dots and a tail.
  - **pokesandbox**: pokéball over green pixel terrain with a gold sparkle.
  - **generic**: outlined box with a "?" glyph (used for placeholder Dev-Dex entries).

### Palette used in sprites
```js
{
  outline:     '#1b1e15',
  skin:        '#f2c28e',
  skinShadow:  '#c08a5f',
  hairA:       '#2a2421',
  hairB:       '#4a3f34',
  shirt:       '#1fa463',
  shirtShadow: '#14723f',
  pants:       '#3a3a55',
  pantsShadow: '#25253d',
  shoes:       '#1b1e15',
  laptop:      '#c8c0a8',
  laptopScreen:'#78d4a0',
  belt:        '#3a2a1f',
  ball:        '#c4463b',
  ballW:       '#f3ecd1',
}
```

In a production codebase you can either keep these as inline SVGs **or** export them as PNG sprite sheets. PNGs let you swap in higher-quality custom art (commission GBA pixel artist) without changing the layout.

---

## Animations / Motion
- **Typewriter** dialogue: ~14 ms/char, `requestAnimationFrame`-driven with multi-character catch-up if frames are slow.
- **Caret blink**: `0.6s steps(2) infinite`.
- **Press Start blink**: `1.3s steps(2) infinite, 0.4 opacity at 50%`.
- **Advance arrow bob**: `1s ease-in-out alternate, translateY(3px)`.
- **Quest marker bob**: `1s ease-in-out alternate, translateY(-3px)`.
- **Card flip (Trainer Card)**: 340ms `cubic-bezier(0.6, 0, 0.4, 1)` rotateY from 90→0deg, opacity 0→1 over first 60%. Triggered via React `key={side}` remount.
- **Pxswitch thumb slide**: `120ms steps(3)`.
- **Card hover**: 120ms ease transform + box-shadow.

Everything is purposely jittery/stepped, never smooth-spring. The Pokémon Gen 3 era didn't have easing curves — that's the look.

---

## State Management

A `useApp()` hook (React Context) backed by `localStorage` (key `nbely-portfolio-v1`). State shape:
```ts
{
  visited: boolean,                   // for title-screen gating
  route: 'title'|'play'|'dex'|'card'|'link',
  playMode: boolean,                  // companion dialogue dock visible
  questsVisible: boolean,             // `!` markers shown
  night: boolean,                     // theme
  menuCollapsed: boolean,             // desktop sidebar collapsed
  mobileMenuOpen: boolean,            // mobile drawer (not persisted)
  completedQuests: string[],          // ids of quests the user has engaged
  dialogueLog: { who: string, text: string, at: number }[],  // capped at 80
}
```

Actions: `update(patch)`, `go(route)`, `markVisited()`, `togglePlay()`, `toggleQuests()`, `completeQuest(id)`, `logDialogue(entry)`, `clearLog()`.

A custom `nav-go` window event is fired by some dialogue-choice handlers; the shell listens for it and routes accordingly. (You can drop this when porting to a router with imperative navigation — it's a quirk of the prototype.)

---

## Responsive Behavior
**Breakpoint**: `820px` (single break).

Mobile changes:
- Side-nav becomes a slide-in drawer (`min(88vw, 360px)`, transform-x animation, backdrop dim).
- Mobile topbar shows: `☰ MENU` · `NICK BELY` · night toggle.
- NIGHT toggle hidden inside the sidebar on mobile (it's redundant with the topbar one).
- COLLAPSE button hidden on mobile (the drawer either is or isn't open).
- Toggles (PLAY/QUESTS) get bigger touch targets (56×30 pxswitch).
- Dev-Dex `dex-row` shrinks to `80px 1fr` columns; art is 80×80.
- Docked dialogue extends to `-16px` left/right (matches mobile main-col padding).
- Trainer Card front collapses to single-column (portrait full-width above stats), card min-height bumps to 720px.
- Link Up form goes single-column.
- Trainer Card work-history role rows collapse `period` onto its own row under the title.

---

## Accessibility notes
- All nav buttons and toggles have proper `aria-label` / `aria-checked` / `role="switch"`.
- Form fields have visible labels (Press Start 2P 9px) wired via `<label>` element.
- Form fields show `aria-invalid="true"` when validation fails.
- Quest markers are clickable buttons (semantically `<span>` with onClick — **fix on port**: use `<button>` for correct keyboard activation).
- Dialogue keyboard: Enter/Space/A advance or select; arrows cycle choices.
- Color contrast: All ink-on-paper combos meet WCAG AA. The emerald-on-paper and gold-on-ink combos were specifically checked. Forced dark-ink overrides on gold chips and featured-entry names are intentional — gold + paper text fails contrast.

---

## Roadmap (not built, but designed)

The user (Nick) explicitly called these out as plausible v2 additions; the prototype's TrainerCard.jsx mentions them. If you want to ship them on day one in the real codebase:

1. **About Me block** — below Work History on the Trainer Card back. Two-column on desktop. Left: a short casual paragraph (max 60–80 words) in Nick's voice. Right: a TYPE/SKILLS chip grid + a tiny "now playing" row (current learning, current reading, current side quest). Keeps it personal without becoming a wall.

2. **Quests Completed summary** — a compact panel below About Me. Aggregate count ("3/5 stories heard"), list of completed quest titles, and one or two **teased** remaining quests in greyscale to nudge return visits to Dev-Dex.

3. **Title-screen idle animation** — on the Title screen, if user is idle for ~20s the dev-trainer sprite walks across the floor below the PRESS START button, occasionally stops to type on the laptop, and (rarely) hands the visitor a hidden quest (mounted directly to Dev-Dex when started).

---

## Files in this handoff

```
design_handoff_portfolio/
├── README.md                  ← this document
├── index.html                 ← the fully-bundled prototype (open in any browser)
├── src/
│   ├── app.jsx                ← app root + router + mobile topbar
│   ├── lib/
│   │   ├── store.jsx          ← AppContext + localStorage persistence + actions
│   │   ├── dialogue.jsx       ← DialogueBox + useTypewriter hook
│   │   └── sprites.jsx        ← TrainerSprite, Portrait, DexArt SVG components
│   ├── shell/
│   │   └── PauseMenu.jsx      ← side-nav (incl. SVG icons + toggles)
│   └── screens/
│       ├── TitleScreen.jsx
│       ├── PlayScreen.jsx     ← dialogue trees: PLAY_INTRO + PLAY_RETURN
│       ├── DevDex.jsx         ← ENTRIES, QUEST_TREE, filter, marker logic
│       ├── TrainerCard.jsx    ← TRAINER_STATS, BADGES, WORK_HISTORY
│       └── LinkUp.jsx         ← REASONS, SOCIALS, form + mailto handler
└── styles/
    ├── app.css                ← tokens + global + shell + dialogue + quest-mk
    ├── screens.css            ← title + play + dev-dex + responsive media query
    └── trainer-link.css       ← trainer card + link up
```

The `index.html` in this folder is the **single-file built artifact** generated from the modules. Use it for visual reference / running the prototype. Source modules in `src/` and `styles/` are for **reading the logic** — don't try to import them as-is in your stack.

---

## Implementation checklist (suggested)

1. **Set up the design tokens first.** Recreate the `:root` + `body.night` variable blocks in your CSS layer (or Tailwind config / panda preset / styled-system / etc.). Verify the four typeface imports load.
2. **Build the shell**: side-nav, mobile drawer, mobile topbar, route enum, persistent localStorage store. Get all 4 routes wired with placeholder content first.
3. **Build the DialogueBox primitive** — typewriter + portrait + log overlay + keyboard nav. Verify it works in isolation before plugging into screens.
4. **Title Screen** — easiest standalone screen. Get the bezel, the blink, the night-toggle pill working.
5. **PLAY home** — wire DialogueBox + TrainerSprite into the stage layout. Implement both intro trees (`PLAY_INTRO` + `PLAY_RETURN`). Wire choice handlers (some advance dialogue, some change route via your router).
6. **DEV-DEX** — entry list + filter dropdown + featured-band styling + quest markers. Wire the in-place quest dialogue handoff. Verify gold band sizing on narrow widths.
7. **TRAINER CARD** — flip mechanic (conditional render + remount animation, not 3D), front/back content, badge case, footer meta.
8. **LINK UP** — social cards (with iframe-safe email/copy fallbacks if applicable), contact form with validation + mailto submit.
9. **Night mode** — flip the body class, audit every screen with all three toggles on/off.
10. **Mobile pass** — drawer behavior, larger touch targets, layout collapse on all five screens.
11. **(Optional)** roadmap items: idle title animation, About Me + Quests Completed on Trainer Card.

---

## Assets / Brand notes
- No external image assets. All artwork is inline SVG pixel art.
- The two main project external links — **Flowcord** (https://flowcord.dev/, https://github.com/flowcord-dev/flowcord-core) and **PokéSandbox** (https://github.com/nbely/pokesandbox) — should keep working as-is.
- Real contact info baked into the prototype:
  - Email: `nicholas.bely@gmail.com`
  - GitHub: `nbely` — https://github.com/nbely
  - LinkedIn: `nbely` — https://www.linkedin.com/in/nbely/
  - Discord handle: `_chronicler_`

---

## Questions for the developer to consider on port
- **Router choice**: the prototype uses a custom `route` string in context. In a real codebase you probably want Next.js App Router / React Router / TanStack Router — each route mapping to one of the four screens, with the title-screen gate handled via a layout wrapper or middleware.
- **Where to source the trainer sprite long-term**: keep inline SVG, switch to commissioned PNG sprite sheets, or move to a 64×64 higher-fidelity art set. Current inline art is good-enough but recognizably "designer-drew-a-sprite".
- **Email submit**: the mailto: handoff is intentionally lo-tech. If you want server-side delivery (e.g. Resend, Postmark, or a serverless function), swap the submit handler — keep the form validation and the "opens in your mail client" hint copy, just route it through your backend.
- **localStorage schema migration**: the prototype dumps everything under one key (`nbely-portfolio-v1`). If you change the shape, version-gate the parse so old visitors don't blow up.

— end —
