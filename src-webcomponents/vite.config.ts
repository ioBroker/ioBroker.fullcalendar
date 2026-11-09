import { checkManifest, type WebComponentText } from '@iobroker/web-components';
import { readFileSync } from 'node:fs';
import type { Plugin } from 'vite';

// with the extension: Vite may load its config natively, without a bundler that would add it
import { buildManifest, MANIFEST_FILE, MODULE_FILE } from './src/manifest.ts';
import { VIS_WORDS } from './src/words.ts';

/**
 * The web component `<iob-fullcalendar>`: one ES module, `admin/webcomponents/fullcalendar.js`, and its manifest
 * `fullcalendar.json` next to it (`common.webComponents`). Every host - vis-2, devices, Aura, admin - reads them
 * from `/adapter/fullcalendar/webcomponents/`. No module federation and no React: the module brings FullCalendar
 * (with its own Preact) and shares nothing with the host but the socket.
 */

const LANGUAGES: ioBroker.Languages[] = ['en', 'de', 'ru', 'pt', 'nl', 'fr', 'it', 'es', 'pl', 'uk', 'zh-cn'];

/** The dictionary of the vis-2 widget, whose words the component takes over */
const VIS_I18N = '../src-widgets/src/i18n';

function readJson<T>(path: string): T {
    return JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8')) as T;
}

/** The dictionary of the vis-2 widget in every language */
function readDictionary(): Record<ioBroker.Languages, Record<string, string>> {
    return Object.fromEntries(
        LANGUAGES.map(lang => [lang, readJson<Record<string, string>>(`${VIS_I18N}/${lang}.json`)]),
    ) as Record<ioBroker.Languages, Record<string, string>>;
}

/**
 * A word of the vis-2 widget, which must be there in every language
 *
 * @param words the dictionary
 * @param key the key, without the prefix `full_calendar_`
 */
function visWord(words: Record<ioBroker.Languages, Record<string, string>>, key: string): WebComponentText {
    const text: Partial<Record<ioBroker.Languages, string>> = {};
    for (const lang of LANGUAGES) {
        if (!words[lang][key]) {
            throw new Error(`${VIS_I18N}/${lang}.json has no "${key}"`);
        }
        text[lang] = words[lang][key];
    }
    return text as WebComponentText;
}

/**
 * The words of the vis-2 widget the element shows, per language in the order of `VIS_WORDS` - only those, not the
 * whole dictionary
 */
function pickVisWords(): Record<string, string[]> {
    const words = readDictionary();
    const texts = VIS_WORDS.map(key => visWord(words, key) as Record<string, string>);
    return Object.fromEntries(LANGUAGES.map(lang => [lang, texts.map(text => text[lang])]));
}

/** Writes `fullcalendar.json` next to the module, checked like a host checks it */
function manifestFile(): Plugin {
    return {
        name: 'fullcalendar-web-component-manifest',
        generateBundle() {
            let manifest;
            try {
                const words = readDictionary();
                manifest = buildManifest(key => visWord(words, key));
            } catch (e) {
                this.error(`${MANIFEST_FILE}: ${(e as Error).message}`);
            }
            const problem = checkManifest(manifest);
            if (problem) {
                this.error(`${MANIFEST_FILE}: ${problem}`);
            }
            this.emitFile({
                type: 'asset',
                fileName: MANIFEST_FILE,
                source: `${JSON.stringify(manifest, null, 4)}\n`,
            });
        },
    };
}

/**
 * FullCalendar puts its CSS into the `<head>` of the page as soon as it is loaded, and into every shadow root a
 * calendar is rendered in, which it keeps in a global map. The element needs it in its own shadow root only, and
 * the host page should stay as it is: this keeps the CSS where `injectStyles()` collects it
 * (`injectStyles.styleTexts`, read by `src/styles.ts`) and drops the two places that insert it.
 *
 * The icon font of FullCalendar goes as well: a font face in a shadow root is not loaded, the icons are masks there.
 *
 * Fails the build if FullCalendar changed and a replacement finds nothing.
 */
function fullCalendarStyles(): Plugin {
    const replacements: [RegExp | string, string, string][] = [
        ['registerStylesRoot(document);', '', 'the styles in the <head> of the page'],
        ['registerStylesRoot(el.getRootNode());', '', 'the styles in the root of a calendar'],
        [/@font-face\{font-family:fcicons;[^}]*\}/, '', 'the icon font'],
    ];
    return {
        name: 'fullcalendar-shadow-styles',
        transform(code, id) {
            if (!/[\\/]@fullcalendar[\\/]core[\\/]internal-common\.js$/.test(id.split('?')[0])) {
                return null;
            }
            let result = code;
            for (const [search, replace, what] of replacements) {
                const next = result.replace(search, replace);
                if (next === result) {
                    this.error(`@fullcalendar/core changed: cannot remove ${what}`);
                }
                result = next;
            }
            if (!result.includes('const styleTexts = [];')) {
                this.error('@fullcalendar/core changed: cannot find the collected styles');
            }
            return { code: `${result}\ninjectStyles.styleTexts = styleTexts;\n`, map: null };
        },
    };
}

export default {
    plugins: [fullCalendarStyles(), manifestFile()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        __FC_VIS_WORDS__: JSON.stringify(pickVisWords()),
    },
    build: {
        target: 'es2022',
        outDir: './build',
        emptyOutDir: true,
        lib: {
            entry: './src/index.ts',
            formats: ['es'],
            fileName: (): string => MODULE_FILE,
        },
        rollupOptions: {
            output: {
                // one file: a host imports exactly one URL
                codeSplitting: false,
                // library mode keeps whitespace for the bundler of a consumer; this module is loaded as it is
                minify: true,
            },
        },
    },
};
