You are building the **frontend only** of a premium, cinematic, real-time world intelligence dashboard web app called **BIRDSEYEVIEW** (working title). This is a **high-end SaaS UI prototype** that should feel like a fusion of:

* a global live map
* a newsroom control room
* a markets terminal
* a sports dashboard
* a social/viral trends monitor
* a culture/fashion/music/film pulse board

The goal is **not** to build the backend yet.
The goal is to build a **beautiful, polished, highly interactive frontend prototype** with **realistic mock data**, reusable components, strong architecture, and clear extension points so real APIs can be connected later.

## Core instructions

Build this as a **production-quality frontend codebase**, not a throwaway mockup.

Priorities:

1. **UI/UX excellence**
2. **Clean component architecture**
3. **Theme system**
4. **Internationalization**
5. **Responsive design**
6. **Smooth interactions**
7. **Mock real-time behavior**
8. **Future-ready structure for real APIs**

## Build mode and expectations

Start in a **frontend/design-first mindset**:

* create the full visual shell
* create reusable components
* create mock data sources
* simulate real-time updates
* make the app feel alive
* do not waste time building backend APIs yet
* do not add a database yet
* do not block on third-party integrations
* use **local mock JSON / TypeScript data**, plus timers and state updates to simulate live feeds

If needed, create lightweight placeholder adapter files like:

* `newsAdapter.ts`
* `marketsAdapter.ts`
* `sportsAdapter.ts`
* `socialAdapter.ts`

These should return mocked data for now, but be structured so real APIs can replace them later.

## Tech stack to use

Build with:

* **Next.js (App Router)**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Motion for React**
* **MapLibre GL JS** for the 2D map
* a modular UI approach with reusable components
* clean CSS variables / design tokens
* optional icon library for clean system icons

Do **not** use a bloated, messy setup.
Keep the codebase clean, typed, and easy to scale.

## Product concept

This app is a **live world operating system**.

It is not just “news.”
It is a single interface that makes the world feel queryable, explorable, and alive.

It must cover these content domains visually in the interface:

1. **World events / conflict / international law**
2. **Finance / economy / markets**
3. **Sports** (all major sports)
4. **Social / viral / internet culture**
5. **Fashion / luxury / streetwear**
6. **Music industry**
7. **Film / TV / cinema**
8. **Culture / history / education**
9. **Arts / design / architecture / real estate**

Even though the data is mocked, the app should look like it is processing all of these domains in real time.

## Information architecture

Create the app with **multiple major modes/views**.
These should feel like branded product surfaces, not generic tabs.

Use these views:

### 1. **ATLAS** — Main world map

This is the primary world page.

It should include:

* a large interactive world map
* glowing event markers
* severity-based clusters
* hover tooltips
* click-to-open event drawer
* heatmap-style visual emphasis for hotspots
* optional “GPS / coordinate” style readout
* filter chips for domains and severity
* time range switcher (1h / 6h / 24h / 7d)
* live pulse effects for newly updated locations

This page should feel like the center of the product.

### 2. **CURRENT** — Grid-based live dashboard

This is the “everything in real time” rectangular grid concept.

It should show:

* a responsive grid of modular tiles/cards
* each tile is a live stream of one category
* examples: world alerts, markets movers, live scores, viral topics, fashion drops, music releases, film headlines
* cards can be expanded, collapsed, pinned, muted, and reordered
* cards should support compact and comfortable density modes

This is the “control room” view.

### 3. **ORBITAL** — Globe mode

A separate globe/world mode.

This can be:

* a stylized “3D globe-like” scene
* or a 2D map presented as a globe-inspired experience if true 3D is too heavy for the first pass

It should include:

* rotating or subtly animated globe presentation
* highlighted hotspots
* animated arcs / link lines between related regions
* “world activity” cluster counts
* ability to focus by category
* a cinematic feel

This is not the same as ATLAS.
ATLAS = operational map
ORBITAL = immersive global visualization

### 4. **PULSESTREAM** — Editorial wall replacement

This is the replacement for “The Wall” but with a fresher name.

It should be:

* a full-screen editorial live board
* masonry / grid / magazine-style layout
* hero stories + secondary story cards
* mixed card sizes
* headline-first visual storytelling
* supports articles, short clips, image-led cards, and explainer cards
* filter row by category
* infinite scroll feel
* can switch between:

  * Breaking
  * Analysis
  * Visual
  * Watch
  * On This Day

This should feel modern, premium, and dramatic.

### 5. **MY WORLD** — Personalized mode

A saved/personalized experience.

It should include:

* saved watchlists
* followed regions
* followed teams
* followed markets
* followed creators/trends
* pinned topics
* custom quick-access widgets
* a “for you” dashboard
* a “friends” tab placeholder
* saved layouts

This should feel like a user’s private command center.

### 6. **BROADCAST** — Live channels mode

A live media / channels view.

It should include channel cards or tabs for:

* Bloomberg
* CNN
* BBC World
* Al Jazeera
* ESPN
* CNBC
* TikTok / Viral
* YouTube Trending
* a generic “Live Feed” channel
* optional “Friends” / creator streams placeholder

Important:

* use **mocked or legal placeholder embed shells**
* do **not** build illegal restreaming behavior
* it is okay to create realistic video preview cards, fake live indicators, thumbnails, and channel containers
* support picture-in-picture style UI frame (visual only)
* support a 2-up and 4-up multi-stream layout

### 7. **RIPPLES** — Cross-domain impact view

This is the extra standout concept.

This mode should show:

* one major event and what it affects
* e.g. conflict event -> oil -> airlines -> sports travel -> social chatter
* linked cards/nodes
* visual relationship lines
* “why this matters” explanations
* timeline pulses showing what changed in the last few minutes

This is a core differentiator and should look smart, not gimmicky.

### 8. **SIGNALS** — Alerts panel

A live alert-focused interface.

It should include:

* critical / high / elevated / low statuses
* signal cards
* timestamps
* source count
* severity color
* quick filter toggles
* a compact feed that feels like a radar system
* ability to click into more context

## Global app shell

Build a premium app shell with:

### Top command bar

Include:

* app logo / wordmark
* global search bar
* mode tabs
* live connection indicator
* current time (UTC/local toggle placeholder)
* quick filters
* profile/settings button
* theme switcher
* language switcher

### Left vertical rail

Include icon-based navigation for:

* Atlas
* Current
* Orbital
* Pulsestream
* Broadcast
* My World
* Signals
* Settings

It should feel elegant, minimal, and docked.

### Bottom live ticker

Create a continuous ticker with:

* breaking headlines
* market mini updates
* sports score snippets
* trend labels
* pulsing live indicator
* hover pause
* subtle animation

### Right contextual panel / drawer

Used for:

* event details
* article preview
* map marker detail
* related entities
* quick stats
* source list
* “why it matters” explanation
* watchlist actions

Should be closable and support stacked detail states.

## Top category tabs on world pages

On the main world page and key views, allow **addable / customizable top tabs**.

Include built-in tabs such as:

* For You
* Friends
* World
* Law / Conflict
* Markets
* Sports
* TikTok / Viral
* Fashion
* Music
* Film / TV
* Culture
* Art / Design
* On This Day

These tabs should:

* be draggable/reorderable
* be pinnable
* allow users to add or remove tabs
* visually indicate active state
* feel like modular content surfaces

Build the UI so more tabs can be added later without redesigning the layout.

## Themes and visual modes

This app must have a **serious theme system** with multiple fully supported interface modes.

Create a theme switcher with at least these themes:

### 1. Tactical Neon

* army green / neon green
* black background
* radar / surveillance energy
* glowing outlines
* terminal-inspired typography accents

### 2. Paper Mode

* warm off-white / editorial paper tone
* newspaper / magazine feel
* dark text
* subtle texture
* cleaner contrast, less glow

### 3. Obsidian

* pure black / charcoal / graphite
* minimal color
* ultra-clean premium terminal look

### 4. Bright Studio

* white / soft gray / selective color accents
* Apple-like clarity
* cleaner professional dashboard feel

### 5. Robotic

* steel / cyan / white-blue accents
* machine-interface feel
* crisp panels and futuristic lines

### 6.
