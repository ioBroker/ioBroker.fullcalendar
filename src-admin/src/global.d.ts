// Module augmentations for the admin UI.
// (Ambient declarations for untyped packages live in their own *.d.ts files,
// because a file with a top-level export cannot host them.)

declare module '@mui/material/styles' {
    // `theme.ts` adds two adapter specific text colors to the palette
    interface TypeText {
        danger: { color: string };
        success: { color: string };
    }
}

declare global {
    interface Window {
        sentryDSN: string | undefined;
    }
}

export {};
