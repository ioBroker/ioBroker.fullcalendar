# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

ioBroker.fullcalendar is an ioBroker adapter that schedules state changes on devices using [FullCalendar](https://fullcalendar.io). Scheduling is evaluated entirely inside ioBroker — no external calendar services. The adapter also supports "simulations": recording state changes over a day/week and replaying them later.

## Architecture

Three cooperating pieces in this repo:

1. **Adapter runtime** (`main.js` + `lib/utils.js`) — the Node.js ioBroker adapter. Reads event objects from ioBroker's object DB, schedules them via `later` + `rrule` + `suncalc2`, subscribes/unsubscribes to foreign states when simulations are recording, and writes state values at trigger time. Translations for `ON`/`OFF` strings are inlined in `main.js` (`t()`).

2. **Admin UI** (`src-admin/`) — React app (Vite, MUI v6, `@iobroker/adapter-react-v5`) shown as the adapter's config tab. Entry: `src-admin/src/App.jsx` extending `GenericApp`. `Component/CalendarManager.jsx` is the top-level screen; calendars are stored as ioBroker objects and rendered via FullCalendar React plus custom event/simulation dialogs.

3. **vis-2 widget** (`src-widgets/`) — React widget federated into vis-2 using `@originjs/vite-plugin-federation`. Published into `widgets/fullcalendar/` at build time. Entry: `src-widgets/src/FullCalendar.jsx`.

### Shared component files (important!)

`src-widgets/src/Component/` and `src-admin/src/Component/` each contain their own copies of `Calendar.tsx`, `EventDialog.tsx`, `Utils.js`, and `styles.css`. `tasks.js` (`sync2files`) keeps them in sync by comparing mtimes at build time — newer wins, and the older copy is overwritten. **When editing any of these four files, edit one side and run the build (or a widget-build step) so the other side stays in sync.** Don't manually diverge them.

### Build output layout

- `admin/` — built admin UI, copied from `src-admin/build/` (minus hundreds of unused `@iobroker/type-detector` room/device SVGs that `tasks.js` explicitly excludes). Finally, `tasks.js` `patch()` renames `index.html` → `tab_m.html` and rewrites a socket.io `<script>` tag to load from `../../lib/js/socket.io.js`.
- `widgets/fullcalendar/` — built vis-2 widget bundle. `tasks.js` hand-picks several MUI/emotion chunk filename globs to copy over; if you upgrade MUI and chunk names change, update those globs.

## Commands

Install — both sub-projects have their own `node_modules`:

```
npm run npm                # installs root + src-admin + src-widgets
```

Full build (what `prepublishOnly` runs):

```
npm run build              # clean → build widgets → copy → build admin → copy → patch
npm run build-gui          # admin only
npm run widget-build       # widget only
```

Incremental admin steps (`0-clean`, `1-npm`, `2-build`, `3-copy`, `4-patch`) and widget steps (`0-widget-clean`, `1-widget-npm`, `2-widget-compile`, `3-widget-copy`) exist in `package.json` for when you only want to re-run part of the pipeline.

Dev servers:

```
cd src-admin && npm start   # Vite dev server for admin UI
cd src-widgets && npm start # Vite dev server for widget (port 4173)
```

Lint / typecheck (admin only — root `eslint.config.mjs` **ignores** `src-admin/`, `test/`, and `tasks.js`):

```
cd src-admin && npm run lint
cd src-admin && npm run check-ts
```

Tests (mocha; `--exit` required because the ioBroker test harness doesn't release handles):

```
npm test                   # *.engine.js — adapter startup/package integrity
npm run test-gui           # *.gui.js — puppeteer-driven admin/widget GUI tests
npx mocha test/testAdapter.engine.js --exit   # single test file
```

Release (alcalzone release-script, updates `io-package.json` news + `package.json`):

```
npm run release-patch      # or release-minor / release-major
```

## Conventions worth knowing

- Root ESLint uses `@iobroker/eslint-config` (flat config) with project-wide TS type-checking, but **only against root-level JS** — sub-project code is ignored at root and must be linted from inside `src-admin/`.
- Admin and widget both target `vite: true` via `@iobroker/build-tools`' `buildReact` (project migrated from CRA recently — commit `c7c7df3`).
- Event recurrence uses both `later` (legacy cron-style) and `rrule` (iCal RRULE strings) — existing events in the wild may be in either format, so don't drop either when touching scheduling code in `main.js`.
- GUI tests use `@iobroker/vis-2-widgets-testing` + puppeteer and spin up a real js-controller — they are slow (`timeout(600000)` on setup) and can't run on a machine without network access to npm.
