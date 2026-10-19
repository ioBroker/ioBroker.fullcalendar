// Ambient declaration for the side-effect imports of `moment/locale/*`.
// moment ships no typings for its locale files, and TypeScript 6 checks
// side-effect imports by default (`noUncheckedSideEffectImports`).
// Must stay free of top-level import/export (see suncalc2.d.ts).

declare module 'moment/locale/*';
