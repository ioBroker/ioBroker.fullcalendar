import { d as E, j as pe, f as j, l as me, a as be, k as ee, m as ye, n as te, s as re, p as f, o as g, q as R, r as G, t as H, u as Se, v as Ce, w as ke, x as Ae, __tla as __tla_0 } from "./getColorSchemeSelector-C1WqGkJ4.js";
import { f as we } from "./fullcalendar__mf_v__runtimeInit__mf_v__-CdxiMOBu.js";
let lt, ze, nt, it, V, W, ae, xe, P, je, Xe, ct, L, qe, Ge, z, D, Ke, F, Pe, Ze, Ye, dt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  let Be, Te, $e;
  lt = "$$material";
  ({ initPromise: Be } = we);
  Te = Be.then((t) => t.loadShare("@mui/system", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  }));
  $e = await Te.then((t) => t());
  ae = $e;
  W = {
    black: "#000",
    white: "#fff"
  };
  xe = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  };
  D = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  };
  F = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  };
  z = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  };
  V = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  };
  L = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  };
  P = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  };
  function ne() {
    return {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)"
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: {
        paper: W.white,
        default: W.white
      },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const ve = ne();
  function ie() {
    return {
      text: {
        primary: W.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: {
        paper: "#121212",
        default: "#121212"
      },
      action: {
        active: W.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const J = ie();
  function K(t, a, n, s) {
    const l = s.light || s, i = s.dark || s * 1.5;
    t[a] || (t.hasOwnProperty(n) ? t[a] = t[n] : a === "light" ? t.light = me(t.main, l) : a === "dark" && (t.dark = be(t.main, i)));
  }
  function _e(t = "light") {
    return t === "dark" ? {
      main: V[200],
      light: V[50],
      dark: V[400]
    } : {
      main: V[700],
      light: V[400],
      dark: V[800]
    };
  }
  function Oe(t = "light") {
    return t === "dark" ? {
      main: D[200],
      light: D[50],
      dark: D[400]
    } : {
      main: D[500],
      light: D[300],
      dark: D[700]
    };
  }
  function Ie(t = "light") {
    return t === "dark" ? {
      main: F[500],
      light: F[300],
      dark: F[700]
    } : {
      main: F[700],
      light: F[400],
      dark: F[800]
    };
  }
  function De(t = "light") {
    return t === "dark" ? {
      main: L[400],
      light: L[300],
      dark: L[700]
    } : {
      main: L[700],
      light: L[500],
      dark: L[900]
    };
  }
  function Fe(t = "light") {
    return t === "dark" ? {
      main: P[400],
      light: P[300],
      dark: P[700]
    } : {
      main: P[800],
      light: P[500],
      dark: P[900]
    };
  }
  function Ve(t = "light") {
    return t === "dark" ? {
      main: z[400],
      light: z[300],
      dark: z[700]
    } : {
      main: "#ed6c02",
      light: z[500],
      dark: z[900]
    };
  }
  function U(t) {
    const { mode: a = "light", contrastThreshold: n = 3, tonalOffset: s = 0.2, ...l } = t, i = t.primary || _e(a), c = t.secondary || Oe(a), d = t.error || Ie(a), w = t.info || De(a), u = t.success || Fe(a), k = t.warning || Ve(a);
    function h(b) {
      return pe(b, J.text.primary) >= n ? J.text.primary : ve.text.primary;
    }
    const y = ({ color: b, name: $, mainShade: B = 500, lightShade: _ = 300, darkShade: O = 700 }) => {
      if (b = {
        ...b
      }, !b.main && b[B] && (b.main = b[B]), !b.hasOwnProperty("main")) throw new Error(j(11, $ ? ` (${$})` : "", B));
      if (typeof b.main != "string") throw new Error(j(12, $ ? ` (${$})` : "", JSON.stringify(b.main)));
      return K(b, "light", _, s), K(b, "dark", O, s), b.contrastText || (b.contrastText = h(b.main)), b;
    };
    let T;
    return a === "light" ? T = ne() : a === "dark" && (T = ie()), E({
      common: {
        ...W
      },
      mode: a,
      primary: y({
        color: i,
        name: "primary"
      }),
      secondary: y({
        color: c,
        name: "secondary",
        mainShade: "A400",
        lightShade: "A200",
        darkShade: "A700"
      }),
      error: y({
        color: d,
        name: "error"
      }),
      warning: y({
        color: k,
        name: "warning"
      }),
      info: y({
        color: w,
        name: "info"
      }),
      success: y({
        color: u,
        name: "success"
      }),
      grey: xe,
      contrastThreshold: n,
      getContrastText: h,
      augmentColor: y,
      tonalOffset: s,
      ...T
    }, l);
  }
  function Le(t) {
    const a = {};
    return Object.entries(t).forEach((s) => {
      const [l, i] = s;
      typeof i == "object" && (a[l] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
    }), a;
  }
  Pe = function(t, a) {
    return {
      toolbar: {
        minHeight: 56,
        [t.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: 48
          }
        },
        [t.up("sm")]: {
          minHeight: 64
        }
      },
      ...a
    };
  };
  function Ee(t) {
    return Math.round(t * 1e5) / 1e5;
  }
  const Q = {
    textTransform: "uppercase"
  }, X = '"Roboto", "Helvetica", "Arial", sans-serif';
  ze = function(t, a) {
    const { fontFamily: n = X, fontSize: s = 14, fontWeightLight: l = 300, fontWeightRegular: i = 400, fontWeightMedium: c = 500, fontWeightBold: d = 700, htmlFontSize: w = 16, allVariants: u, pxToRem: k, ...h } = typeof a == "function" ? a(t) : a, y = s / 14, T = k || (($) => `${$ / w * y}rem`), S = ($, B, _, O, m) => ({
      fontFamily: n,
      fontWeight: $,
      fontSize: T(B),
      lineHeight: _,
      ...n === X ? {
        letterSpacing: `${Ee(O / B)}em`
      } : {},
      ...m,
      ...u
    }), b = {
      h1: S(l, 96, 1.167, -1.5),
      h2: S(l, 60, 1.2, -0.5),
      h3: S(i, 48, 1.167, 0),
      h4: S(i, 34, 1.235, 0.25),
      h5: S(i, 24, 1.334, 0),
      h6: S(c, 20, 1.6, 0.15),
      subtitle1: S(i, 16, 1.75, 0.15),
      subtitle2: S(c, 14, 1.57, 0.1),
      body1: S(i, 16, 1.5, 0.15),
      body2: S(i, 14, 1.43, 0.15),
      button: S(c, 14, 1.75, 0.4, Q),
      caption: S(i, 12, 1.66, 0.4),
      overline: S(i, 12, 2.66, 1, Q),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
    return E({
      htmlFontSize: w,
      pxToRem: T,
      fontFamily: n,
      fontSize: s,
      fontWeightLight: l,
      fontWeightRegular: i,
      fontWeightMedium: c,
      fontWeightBold: d,
      ...b
    }, h, {
      clone: false
    });
  };
  const He = 0.2, Me = 0.14, We = 0.12;
  function p(...t) {
    return [
      `${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${He})`,
      `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${Me})`,
      `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${We})`
    ].join(",");
  }
  let Re;
  Re = [
    "none",
    p(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    p(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    p(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    p(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    p(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    p(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    p(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    p(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    p(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    p(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    p(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    p(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    p(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    p(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    p(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    p(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    p(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    p(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    p(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    p(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    p(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    p(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    p(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    p(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  Ge = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  je = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };
  function Y(t) {
    return `${Math.round(t)}ms`;
  }
  function Ne(t) {
    if (!t) return 0;
    const a = t / 36;
    return Math.min(Math.round((4 + 15 * a ** 0.25 + a / 5) * 10), 3e3);
  }
  qe = function(t) {
    const a = {
      ...Ge,
      ...t.easing
    }, n = {
      ...je,
      ...t.duration
    };
    return {
      getAutoHeightDuration: Ne,
      create: (l = [
        "all"
      ], i = {}) => {
        const { duration: c = n.standard, easing: d = a.easeInOut, delay: w = 0, ...u } = i;
        return (Array.isArray(l) ? l : [
          l
        ]).map((k) => `${k} ${typeof c == "string" ? c : Y(c)} ${d} ${typeof w == "string" ? w : Y(w)}`).join(",");
      },
      ...t,
      easing: a,
      duration: n
    };
  };
  const Ue = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function Je(t) {
    return ee(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t);
  }
  function oe(t = {}) {
    const a = {
      ...t
    };
    function n(s) {
      const l = Object.entries(s);
      for (let i = 0; i < l.length; i++) {
        const [c, d] = l[i];
        !Je(d) || c.startsWith("unstable_") ? delete s[c] : ee(d) && (s[c] = {
          ...d
        }, n(s[c]));
      }
    }
    return n(a), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(a, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }
  function N(t = {}, ...a) {
    const { breakpoints: n, mixins: s = {}, spacing: l, palette: i = {}, transitions: c = {}, typography: d = {}, shape: w, ...u } = t;
    if (t.vars && t.generateThemeVars === void 0) throw new Error(j(20));
    const k = U(i), h = ye(t);
    let y = E(h, {
      mixins: Pe(h.breakpoints, s),
      palette: k,
      shadows: Re.slice(),
      typography: ze(k, d),
      transitions: qe(c),
      zIndex: {
        ...Ue
      }
    });
    return y = E(y, u), y = a.reduce((T, S) => E(T, S), y), y.unstable_sxConfig = {
      ...te,
      ...u == null ? void 0 : u.unstable_sxConfig
    }, y.unstable_sx = function(S) {
      return re({
        sx: S,
        theme: this
      });
    }, y.toRuntimeSource = oe, y;
  }
  ct = function(...t) {
    return N(...t);
  };
  Ke = function(t) {
    let a;
    return t < 1 ? a = 5.11916 * t ** 2 : a = 4.5 * Math.log(t + 1) + 2, Math.round(a * 10) / 1e3;
  };
  const Qe = [
    ...Array(25)
  ].map((t, a) => {
    if (a === 0) return "none";
    const n = Ke(a);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
  function se(t) {
    return {
      inputPlaceholder: t === "dark" ? 0.5 : 0.42,
      inputUnderline: t === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
      switchTrack: t === "dark" ? 0.3 : 0.38
    };
  }
  function le(t) {
    return t === "dark" ? Qe : [];
  }
  Xe = function(t) {
    const { palette: a = {
      mode: "light"
    }, opacity: n, overlays: s, ...l } = t, i = U(a);
    return {
      palette: i,
      opacity: {
        ...se(i.mode),
        ...n
      },
      overlays: s || le(i.mode),
      ...l
    };
  };
  Ye = function(t) {
    var _a;
    return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || t[0] === "palette" && !!((_a = t[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
  };
  let et;
  Ze = (t) => [
    ...[
      ...Array(25)
    ].map((a, n) => `--${t ? `${t}-` : ""}overlays-${n}`),
    `--${t ? `${t}-` : ""}palette-AppBar-darkBg`,
    `--${t ? `${t}-` : ""}palette-AppBar-darkColor`
  ];
  et = (t) => (a, n) => {
    const s = t.rootSelector || ":root", l = t.colorSchemeSelector;
    let i = l;
    if (l === "class" && (i = ".%s"), l === "data" && (i = "[data-%s]"), (l == null ? void 0 : l.startsWith("data-")) && !l.includes("%s") && (i = `[${l}="%s"]`), t.defaultColorScheme === a) {
      if (a === "dark") {
        const c = {};
        return Ze(t.cssVarPrefix).forEach((d) => {
          c[d] = n[d], delete n[d];
        }), i === "media" ? {
          [s]: n,
          "@media (prefers-color-scheme: dark)": {
            [s]: c
          }
        } : i ? {
          [i.replace("%s", a)]: c,
          [`${s}, ${i.replace("%s", a)}`]: n
        } : {
          [s]: {
            ...n,
            ...c
          }
        };
      }
      if (i && i !== "media") return `${s}, ${i.replace("%s", String(a))}`;
    } else if (a) {
      if (i === "media") return {
        [`@media (prefers-color-scheme: ${String(a)})`]: {
          [s]: n
        }
      };
      if (i) return i.replace("%s", String(a));
    }
    return s;
  };
  function tt(t, a) {
    a.forEach((n) => {
      t[n] || (t[n] = {});
    });
  }
  function r(t, a, n) {
    !t[a] && n && (t[a] = n);
  }
  function M(t) {
    return typeof t != "string" || !t.startsWith("hsl") ? t : Ae(t);
  }
  function v(t, a) {
    `${a}Channel` in t || (t[`${a}Channel`] = H(M(t[a])));
  }
  function rt(t) {
    return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px";
  }
  const x = (t) => {
    try {
      return t();
    } catch {
    }
  }, at = (t = "mui") => ae.unstable_createGetCssVar(t);
  function q(t, a, n, s) {
    if (!a) return;
    a = a === true ? {} : a;
    const l = s === "dark" ? "dark" : "light";
    if (!n) {
      t[s] = Xe({
        ...a,
        palette: {
          mode: l,
          ...a == null ? void 0 : a.palette
        }
      });
      return;
    }
    const { palette: i, ...c } = N({
      ...n,
      palette: {
        mode: l,
        ...a == null ? void 0 : a.palette
      }
    });
    return t[s] = {
      ...a,
      palette: i,
      opacity: {
        ...se(l),
        ...a == null ? void 0 : a.opacity
      },
      overlays: (a == null ? void 0 : a.overlays) || le(l)
    }, c;
  }
  nt = function(t = {}, ...a) {
    const { colorSchemes: n = {
      light: true
    }, defaultColorScheme: s, disableCssColorScheme: l = false, cssVarPrefix: i = "mui", shouldSkipGeneratingVar: c = Ye, colorSchemeSelector: d = n.light && n.dark ? "media" : void 0, rootSelector: w = ":root", ...u } = t, k = Object.keys(n)[0], h = s || (n.light && k !== "light" ? "light" : k), y = at(i), { [h]: T, light: S, dark: b, ...$ } = n, B = {
      ...$
    };
    let _ = T;
    if ((h === "dark" && !("dark" in n) || h === "light" && !("light" in n)) && (_ = true), !_) throw new Error(j(21, h));
    const O = q(B, _, u, h);
    S && !B.light && q(B, S, void 0, "light"), b && !B.dark && q(B, b, void 0, "dark");
    let m = {
      defaultColorScheme: h,
      ...O,
      cssVarPrefix: i,
      colorSchemeSelector: d,
      rootSelector: w,
      getCssVar: y,
      colorSchemes: B,
      font: {
        ...Le(O.typography),
        ...O.font
      },
      spacing: rt(u.spacing)
    };
    Object.keys(m.colorSchemes).forEach((I) => {
      const e = m.colorSchemes[I].palette, o = (C) => {
        const A = C.split("-"), ue = A[1], he = A[2];
        return y(C, e[ue][he]);
      };
      if (e.mode === "light" && (r(e.common, "background", "#fff"), r(e.common, "onBackground", "#000")), e.mode === "dark" && (r(e.common, "background", "#000"), r(e.common, "onBackground", "#fff")), tt(e, [
        "Alert",
        "AppBar",
        "Avatar",
        "Button",
        "Chip",
        "FilledInput",
        "LinearProgress",
        "Skeleton",
        "Slider",
        "SnackbarContent",
        "SpeedDialAction",
        "StepConnector",
        "StepContent",
        "Switch",
        "TableCell",
        "Tooltip"
      ]), e.mode === "light") {
        r(e.Alert, "errorColor", f(e.error.light, 0.6)), r(e.Alert, "infoColor", f(e.info.light, 0.6)), r(e.Alert, "successColor", f(e.success.light, 0.6)), r(e.Alert, "warningColor", f(e.warning.light, 0.6)), r(e.Alert, "errorFilledBg", o("palette-error-main")), r(e.Alert, "infoFilledBg", o("palette-info-main")), r(e.Alert, "successFilledBg", o("palette-success-main")), r(e.Alert, "warningFilledBg", o("palette-warning-main")), r(e.Alert, "errorFilledColor", x(() => e.getContrastText(e.error.main))), r(e.Alert, "infoFilledColor", x(() => e.getContrastText(e.info.main))), r(e.Alert, "successFilledColor", x(() => e.getContrastText(e.success.main))), r(e.Alert, "warningFilledColor", x(() => e.getContrastText(e.warning.main))), r(e.Alert, "errorStandardBg", g(e.error.light, 0.9)), r(e.Alert, "infoStandardBg", g(e.info.light, 0.9)), r(e.Alert, "successStandardBg", g(e.success.light, 0.9)), r(e.Alert, "warningStandardBg", g(e.warning.light, 0.9)), r(e.Alert, "errorIconColor", o("palette-error-main")), r(e.Alert, "infoIconColor", o("palette-info-main")), r(e.Alert, "successIconColor", o("palette-success-main")), r(e.Alert, "warningIconColor", o("palette-warning-main")), r(e.AppBar, "defaultBg", o("palette-grey-100")), r(e.Avatar, "defaultBg", o("palette-grey-400")), r(e.Button, "inheritContainedBg", o("palette-grey-300")), r(e.Button, "inheritContainedHoverBg", o("palette-grey-A100")), r(e.Chip, "defaultBorder", o("palette-grey-400")), r(e.Chip, "defaultAvatarColor", o("palette-grey-700")), r(e.Chip, "defaultIconColor", o("palette-grey-700")), r(e.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), r(e.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), r(e.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), r(e.LinearProgress, "primaryBg", g(e.primary.main, 0.62)), r(e.LinearProgress, "secondaryBg", g(e.secondary.main, 0.62)), r(e.LinearProgress, "errorBg", g(e.error.main, 0.62)), r(e.LinearProgress, "infoBg", g(e.info.main, 0.62)), r(e.LinearProgress, "successBg", g(e.success.main, 0.62)), r(e.LinearProgress, "warningBg", g(e.warning.main, 0.62)), r(e.Skeleton, "bg", `rgba(${o("palette-text-primaryChannel")} / 0.11)`), r(e.Slider, "primaryTrack", g(e.primary.main, 0.62)), r(e.Slider, "secondaryTrack", g(e.secondary.main, 0.62)), r(e.Slider, "errorTrack", g(e.error.main, 0.62)), r(e.Slider, "infoTrack", g(e.info.main, 0.62)), r(e.Slider, "successTrack", g(e.success.main, 0.62)), r(e.Slider, "warningTrack", g(e.warning.main, 0.62));
        const C = R(e.background.default, 0.8);
        r(e.SnackbarContent, "bg", C), r(e.SnackbarContent, "color", x(() => e.getContrastText(C))), r(e.SpeedDialAction, "fabHoverBg", R(e.background.paper, 0.15)), r(e.StepConnector, "border", o("palette-grey-400")), r(e.StepContent, "border", o("palette-grey-400")), r(e.Switch, "defaultColor", o("palette-common-white")), r(e.Switch, "defaultDisabledColor", o("palette-grey-100")), r(e.Switch, "primaryDisabledColor", g(e.primary.main, 0.62)), r(e.Switch, "secondaryDisabledColor", g(e.secondary.main, 0.62)), r(e.Switch, "errorDisabledColor", g(e.error.main, 0.62)), r(e.Switch, "infoDisabledColor", g(e.info.main, 0.62)), r(e.Switch, "successDisabledColor", g(e.success.main, 0.62)), r(e.Switch, "warningDisabledColor", g(e.warning.main, 0.62)), r(e.TableCell, "border", g(G(e.divider, 1), 0.88)), r(e.Tooltip, "bg", G(e.grey[700], 0.92));
      }
      if (e.mode === "dark") {
        r(e.Alert, "errorColor", g(e.error.light, 0.6)), r(e.Alert, "infoColor", g(e.info.light, 0.6)), r(e.Alert, "successColor", g(e.success.light, 0.6)), r(e.Alert, "warningColor", g(e.warning.light, 0.6)), r(e.Alert, "errorFilledBg", o("palette-error-dark")), r(e.Alert, "infoFilledBg", o("palette-info-dark")), r(e.Alert, "successFilledBg", o("palette-success-dark")), r(e.Alert, "warningFilledBg", o("palette-warning-dark")), r(e.Alert, "errorFilledColor", x(() => e.getContrastText(e.error.dark))), r(e.Alert, "infoFilledColor", x(() => e.getContrastText(e.info.dark))), r(e.Alert, "successFilledColor", x(() => e.getContrastText(e.success.dark))), r(e.Alert, "warningFilledColor", x(() => e.getContrastText(e.warning.dark))), r(e.Alert, "errorStandardBg", f(e.error.light, 0.9)), r(e.Alert, "infoStandardBg", f(e.info.light, 0.9)), r(e.Alert, "successStandardBg", f(e.success.light, 0.9)), r(e.Alert, "warningStandardBg", f(e.warning.light, 0.9)), r(e.Alert, "errorIconColor", o("palette-error-main")), r(e.Alert, "infoIconColor", o("palette-info-main")), r(e.Alert, "successIconColor", o("palette-success-main")), r(e.Alert, "warningIconColor", o("palette-warning-main")), r(e.AppBar, "defaultBg", o("palette-grey-900")), r(e.AppBar, "darkBg", o("palette-background-paper")), r(e.AppBar, "darkColor", o("palette-text-primary")), r(e.Avatar, "defaultBg", o("palette-grey-600")), r(e.Button, "inheritContainedBg", o("palette-grey-800")), r(e.Button, "inheritContainedHoverBg", o("palette-grey-700")), r(e.Chip, "defaultBorder", o("palette-grey-700")), r(e.Chip, "defaultAvatarColor", o("palette-grey-300")), r(e.Chip, "defaultIconColor", o("palette-grey-300")), r(e.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), r(e.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), r(e.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), r(e.LinearProgress, "primaryBg", f(e.primary.main, 0.5)), r(e.LinearProgress, "secondaryBg", f(e.secondary.main, 0.5)), r(e.LinearProgress, "errorBg", f(e.error.main, 0.5)), r(e.LinearProgress, "infoBg", f(e.info.main, 0.5)), r(e.LinearProgress, "successBg", f(e.success.main, 0.5)), r(e.LinearProgress, "warningBg", f(e.warning.main, 0.5)), r(e.Skeleton, "bg", `rgba(${o("palette-text-primaryChannel")} / 0.13)`), r(e.Slider, "primaryTrack", f(e.primary.main, 0.5)), r(e.Slider, "secondaryTrack", f(e.secondary.main, 0.5)), r(e.Slider, "errorTrack", f(e.error.main, 0.5)), r(e.Slider, "infoTrack", f(e.info.main, 0.5)), r(e.Slider, "successTrack", f(e.success.main, 0.5)), r(e.Slider, "warningTrack", f(e.warning.main, 0.5));
        const C = R(e.background.default, 0.98);
        r(e.SnackbarContent, "bg", C), r(e.SnackbarContent, "color", x(() => e.getContrastText(C))), r(e.SpeedDialAction, "fabHoverBg", R(e.background.paper, 0.15)), r(e.StepConnector, "border", o("palette-grey-600")), r(e.StepContent, "border", o("palette-grey-600")), r(e.Switch, "defaultColor", o("palette-grey-300")), r(e.Switch, "defaultDisabledColor", o("palette-grey-600")), r(e.Switch, "primaryDisabledColor", f(e.primary.main, 0.55)), r(e.Switch, "secondaryDisabledColor", f(e.secondary.main, 0.55)), r(e.Switch, "errorDisabledColor", f(e.error.main, 0.55)), r(e.Switch, "infoDisabledColor", f(e.info.main, 0.55)), r(e.Switch, "successDisabledColor", f(e.success.main, 0.55)), r(e.Switch, "warningDisabledColor", f(e.warning.main, 0.55)), r(e.TableCell, "border", f(G(e.divider, 1), 0.68)), r(e.Tooltip, "bg", G(e.grey[700], 0.92));
      }
      v(e.background, "default"), v(e.background, "paper"), v(e.common, "background"), v(e.common, "onBackground"), v(e, "divider"), Object.keys(e).forEach((C) => {
        const A = e[C];
        C !== "tonalOffset" && A && typeof A == "object" && (A.main && r(e[C], "mainChannel", H(M(A.main))), A.light && r(e[C], "lightChannel", H(M(A.light))), A.dark && r(e[C], "darkChannel", H(M(A.dark))), A.contrastText && r(e[C], "contrastTextChannel", H(M(A.contrastText))), C === "text" && (v(e[C], "primary"), v(e[C], "secondary")), C === "action" && (A.active && v(e[C], "active"), A.selected && v(e[C], "selected")));
      });
    }), m = a.reduce((I, e) => E(I, e), m);
    const ce = {
      prefix: i,
      disableCssColorScheme: l,
      shouldSkipGeneratingVar: c,
      getSelector: et(m)
    }, { vars: de, generateThemeVars: fe, generateStyleSheets: ge } = Se(m, ce);
    return m.vars = de, Object.entries(m.colorSchemes[m.defaultColorScheme]).forEach(([I, e]) => {
      m[I] = e;
    }), m.generateThemeVars = fe, m.generateStyleSheets = ge, m.generateSpacing = function() {
      return ae.createSpacing(u.spacing, Ce(this));
    }, m.getColorSchemeSelector = ke(d), m.spacing = m.generateSpacing(), m.shouldSkipGeneratingVar = c, m.unstable_sxConfig = {
      ...te,
      ...u == null ? void 0 : u.unstable_sxConfig
    }, m.unstable_sx = function(e) {
      return re({
        sx: e,
        theme: this
      });
    }, m.toRuntimeSource = oe, m;
  };
  function Z(t, a, n) {
    t.colorSchemes && n && (t.colorSchemes[a] = {
      ...n !== true && n,
      palette: U({
        ...n === true ? {} : n.palette,
        mode: a
      })
    });
  }
  it = function(t = {}, ...a) {
    const { palette: n, cssVariables: s = false, colorSchemes: l = n ? void 0 : {
      light: true
    }, defaultColorScheme: i = n == null ? void 0 : n.mode, ...c } = t, d = i || "light", w = l == null ? void 0 : l[d], u = {
      ...l,
      ...n ? {
        [d]: {
          ...typeof w != "boolean" && w,
          palette: n
        }
      } : void 0
    };
    if (s === false) {
      if (!("colorSchemes" in t)) return N(t, ...a);
      let k = n;
      "palette" in t || u[d] && (u[d] !== true ? k = u[d].palette : d === "dark" && (k = {
        mode: "dark"
      }));
      const h = N({
        ...t,
        palette: k
      }, ...a);
      return h.defaultColorScheme = d, h.colorSchemes = u, h.palette.mode === "light" && (h.colorSchemes.light = {
        ...u.light !== true && u.light,
        palette: h.palette
      }, Z(h, "dark", u.dark)), h.palette.mode === "dark" && (h.colorSchemes.dark = {
        ...u.dark !== true && u.dark,
        palette: h.palette
      }, Z(h, "light", u.light)), h;
    }
    return !n && !("light" in u) && d === "light" && (u.light = true), nt({
      ...c,
      colorSchemes: u,
      defaultColorScheme: d,
      ...typeof s != "boolean" && s
    }, ...a);
  };
  dt = it();
});
export {
  lt as T,
  __tla,
  ze as a,
  nt as b,
  it as c,
  V as d,
  W as e,
  ae as f,
  xe as g,
  P as h,
  je as i,
  Xe as j,
  ct as k,
  L as l,
  qe as m,
  Ge as n,
  z as o,
  D as p,
  Ke as q,
  F as r,
  Pe as s,
  Ze as t,
  Ye as u,
  dt as v
};
