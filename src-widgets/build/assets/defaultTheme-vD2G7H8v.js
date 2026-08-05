import { d as E, j as pe, f as j, l as he, b as me, k as ee, m as be, n as te, s as re, p as f, o as g, q as R, r as G, t as H, u as ye, v as Se, w as Ce, x as ke, __tla as __tla_0 } from "./getColorSchemeSelector-bFPhxf4L.js";
import { b as Ae, A as we, __tla as __tla_1 } from "./__mfe_internal__fullcalendar__loadShare___mf_0_mui_mf_1_system__loadShare__.js-CWZ1l9AA.js";
let it, Pe, tt, rt, L, W, V, Be, We, Je, ot, Ge, P, Me, Ue, z, F, _e, _, Qe, Ke, st;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  it = "$$material";
  W = {
    black: "#000",
    white: "#fff"
  };
  Be = {
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
  F = {
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
  _ = {
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
  L = {
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
  P = {
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
  V = {
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
  function ae() {
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
  const Te = ae();
  function ne() {
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
  const J = ne();
  function K(t, a, n, s) {
    const l = s.light || s, i = s.dark || s * 1.5;
    t[a] || (t.hasOwnProperty(n) ? t[a] = t[n] : a === "light" ? t.light = he(t.main, l) : a === "dark" && (t.dark = me(t.main, i)));
  }
  function $e(t = "light") {
    return t === "dark" ? {
      main: L[200],
      light: L[50],
      dark: L[400]
    } : {
      main: L[700],
      light: L[400],
      dark: L[800]
    };
  }
  function xe(t = "light") {
    return t === "dark" ? {
      main: F[200],
      light: F[50],
      dark: F[400]
    } : {
      main: F[500],
      light: F[300],
      dark: F[700]
    };
  }
  function ve(t = "light") {
    return t === "dark" ? {
      main: _[500],
      light: _[300],
      dark: _[700]
    } : {
      main: _[700],
      light: _[400],
      dark: _[800]
    };
  }
  function Oe(t = "light") {
    return t === "dark" ? {
      main: P[400],
      light: P[300],
      dark: P[700]
    } : {
      main: P[700],
      light: P[500],
      dark: P[900]
    };
  }
  function De(t = "light") {
    return t === "dark" ? {
      main: V[400],
      light: V[300],
      dark: V[700]
    } : {
      main: V[800],
      light: V[500],
      dark: V[900]
    };
  }
  function Ie(t = "light") {
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
  function q(t) {
    const { mode: a = "light", contrastThreshold: n = 3, tonalOffset: s = 0.2, ...l } = t, i = t.primary || $e(a), c = t.secondary || xe(a), d = t.error || ve(a), w = t.info || Oe(a), u = t.success || De(a), k = t.warning || Ie(a);
    function p(b) {
      return pe(b, J.text.primary) >= n ? J.text.primary : Te.text.primary;
    }
    const y = ({ color: b, name: $, mainShade: B = 500, lightShade: O = 300, darkShade: D = 700 }) => {
      if (b = {
        ...b
      }, !b.main && b[B] && (b.main = b[B]), !b.hasOwnProperty("main")) throw new Error(j(11, $ ? ` (${$})` : "", B));
      if (typeof b.main != "string") throw new Error(j(12, $ ? ` (${$})` : "", JSON.stringify(b.main)));
      return K(b, "light", O, s), K(b, "dark", D, s), b.contrastText || (b.contrastText = p(b.main)), b;
    };
    let T;
    return a === "light" ? T = ae() : a === "dark" && (T = ne()), E({
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
      grey: Be,
      contrastThreshold: n,
      getContrastText: p,
      augmentColor: y,
      tonalOffset: s,
      ...T
    }, l);
  }
  function Fe(t) {
    const a = {};
    return Object.entries(t).forEach((s) => {
      const [l, i] = s;
      typeof i == "object" && (a[l] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
    }), a;
  }
  _e = function(t, a) {
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
  function Le(t) {
    return Math.round(t * 1e5) / 1e5;
  }
  const Q = {
    textTransform: "uppercase"
  }, X = '"Roboto", "Helvetica", "Arial", sans-serif';
  Pe = function(t, a) {
    const { fontFamily: n = X, fontSize: s = 14, fontWeightLight: l = 300, fontWeightRegular: i = 400, fontWeightMedium: c = 500, fontWeightBold: d = 700, htmlFontSize: w = 16, allVariants: u, pxToRem: k, ...p } = typeof a == "function" ? a(t) : a, y = s / 14, T = k || (($) => `${$ / w * y}rem`), S = ($, B, O, D, m) => ({
      fontFamily: n,
      fontWeight: $,
      fontSize: T(B),
      lineHeight: O,
      ...n === X ? {
        letterSpacing: `${Le(D / B)}em`
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
    }, p, {
      clone: false
    });
  };
  const Ve = 0.2, Ee = 0.14, ze = 0.12;
  function h(...t) {
    return [
      `${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${Ve})`,
      `${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${Ee})`,
      `${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${ze})`
    ].join(",");
  }
  let He;
  He = [
    "none",
    h(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    h(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    h(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    h(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    h(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    h(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    h(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    h(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    h(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    h(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    h(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    h(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    h(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    h(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    h(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    h(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    h(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    h(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    h(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    h(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    h(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    h(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    h(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    h(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)
  ];
  Me = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  };
  We = {
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
  function Re(t) {
    if (!t) return 0;
    const a = t / 36;
    return Math.min(Math.round((4 + 15 * a ** 0.25 + a / 5) * 10), 3e3);
  }
  Ge = function(t) {
    const a = {
      ...Me,
      ...t.easing
    }, n = {
      ...We,
      ...t.duration
    };
    return {
      getAutoHeightDuration: Re,
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
  const je = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };
  function Ne(t) {
    return ee(t) || typeof t > "u" || typeof t == "string" || typeof t == "boolean" || typeof t == "number" || Array.isArray(t);
  }
  function ie(t = {}) {
    const a = {
      ...t
    };
    function n(s) {
      const l = Object.entries(s);
      for (let i = 0; i < l.length; i++) {
        const [c, d] = l[i];
        !Ne(d) || c.startsWith("unstable_") ? delete s[c] : ee(d) && (s[c] = {
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
    const k = q(i), p = be(t);
    let y = E(p, {
      mixins: _e(p.breakpoints, s),
      palette: k,
      shadows: He.slice(),
      typography: Pe(k, d),
      transitions: Ge(c),
      zIndex: {
        ...je
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
    }, y.toRuntimeSource = ie, y;
  }
  ot = function(...t) {
    return N(...t);
  };
  Ue = function(t) {
    let a;
    return t < 1 ? a = 5.11916 * t ** 2 : a = 4.5 * Math.log(t + 1) + 2, Math.round(a * 10) / 1e3;
  };
  const qe = [
    ...Array(25)
  ].map((t, a) => {
    if (a === 0) return "none";
    const n = Ue(a);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
  function oe(t) {
    return {
      inputPlaceholder: t === "dark" ? 0.5 : 0.42,
      inputUnderline: t === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: t === "dark" ? 0.2 : 0.12,
      switchTrack: t === "dark" ? 0.3 : 0.38
    };
  }
  function se(t) {
    return t === "dark" ? qe : [];
  }
  Je = function(t) {
    const { palette: a = {
      mode: "light"
    }, opacity: n, overlays: s, ...l } = t, i = q(a);
    return {
      palette: i,
      opacity: {
        ...oe(i.mode),
        ...n
      },
      overlays: s || se(i.mode),
      ...l
    };
  };
  Ke = function(t) {
    var _a;
    return !!t[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!t[0].match(/sxConfig$/) || t[0] === "palette" && !!((_a = t[1]) == null ? void 0 : _a.match(/(mode|contrastThreshold|tonalOffset)/));
  };
  let Xe;
  Qe = (t) => [
    ...[
      ...Array(25)
    ].map((a, n) => `--${t ? `${t}-` : ""}overlays-${n}`),
    `--${t ? `${t}-` : ""}palette-AppBar-darkBg`,
    `--${t ? `${t}-` : ""}palette-AppBar-darkColor`
  ];
  Xe = (t) => (a, n) => {
    const s = t.rootSelector || ":root", l = t.colorSchemeSelector;
    let i = l;
    if (l === "class" && (i = ".%s"), l === "data" && (i = "[data-%s]"), (l == null ? void 0 : l.startsWith("data-")) && !l.includes("%s") && (i = `[${l}="%s"]`), t.defaultColorScheme === a) {
      if (a === "dark") {
        const c = {};
        return Qe(t.cssVarPrefix).forEach((d) => {
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
  function Ye(t, a) {
    a.forEach((n) => {
      t[n] || (t[n] = {});
    });
  }
  function r(t, a, n) {
    !t[a] && n && (t[a] = n);
  }
  function M(t) {
    return typeof t != "string" || !t.startsWith("hsl") ? t : ke(t);
  }
  function v(t, a) {
    `${a}Channel` in t || (t[`${a}Channel`] = H(M(t[a])));
  }
  function Ze(t) {
    return typeof t == "number" ? `${t}px` : typeof t == "string" || typeof t == "function" || Array.isArray(t) ? t : "8px";
  }
  const x = (t) => {
    try {
      return t();
    } catch {
    }
  }, et = (t = "mui") => we(t);
  function U(t, a, n, s) {
    if (!a) return;
    a = a === true ? {} : a;
    const l = s === "dark" ? "dark" : "light";
    if (!n) {
      t[s] = Je({
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
        ...oe(l),
        ...a == null ? void 0 : a.opacity
      },
      overlays: (a == null ? void 0 : a.overlays) || se(l)
    }, c;
  }
  tt = function(t = {}, ...a) {
    const { colorSchemes: n = {
      light: true
    }, defaultColorScheme: s, disableCssColorScheme: l = false, cssVarPrefix: i = "mui", shouldSkipGeneratingVar: c = Ke, colorSchemeSelector: d = n.light && n.dark ? "media" : void 0, rootSelector: w = ":root", ...u } = t, k = Object.keys(n)[0], p = s || (n.light && k !== "light" ? "light" : k), y = et(i), { [p]: T, light: S, dark: b, ...$ } = n, B = {
      ...$
    };
    let O = T;
    if ((p === "dark" && !("dark" in n) || p === "light" && !("light" in n)) && (O = true), !O) throw new Error(j(21, p));
    const D = U(B, O, u, p);
    S && !B.light && U(B, S, void 0, "light"), b && !B.dark && U(B, b, void 0, "dark");
    let m = {
      defaultColorScheme: p,
      ...D,
      cssVarPrefix: i,
      colorSchemeSelector: d,
      rootSelector: w,
      getCssVar: y,
      colorSchemes: B,
      font: {
        ...Fe(D.typography),
        ...D.font
      },
      spacing: Ze(u.spacing)
    };
    Object.keys(m.colorSchemes).forEach((I) => {
      const e = m.colorSchemes[I].palette, o = (C) => {
        const A = C.split("-"), ge = A[1], ue = A[2];
        return y(C, e[ge][ue]);
      };
      if (e.mode === "light" && (r(e.common, "background", "#fff"), r(e.common, "onBackground", "#000")), e.mode === "dark" && (r(e.common, "background", "#000"), r(e.common, "onBackground", "#fff")), Ye(e, [
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
    const le = {
      prefix: i,
      disableCssColorScheme: l,
      shouldSkipGeneratingVar: c,
      getSelector: Xe(m)
    }, { vars: ce, generateThemeVars: de, generateStyleSheets: fe } = ye(m, le);
    return m.vars = ce, Object.entries(m.colorSchemes[m.defaultColorScheme]).forEach(([I, e]) => {
      m[I] = e;
    }), m.generateThemeVars = de, m.generateStyleSheets = fe, m.generateSpacing = function() {
      return Ae(u.spacing, Se(this));
    }, m.getColorSchemeSelector = Ce(d), m.spacing = m.generateSpacing(), m.shouldSkipGeneratingVar = c, m.unstable_sxConfig = {
      ...te,
      ...u == null ? void 0 : u.unstable_sxConfig
    }, m.unstable_sx = function(e) {
      return re({
        sx: e,
        theme: this
      });
    }, m.toRuntimeSource = ie, m;
  };
  function Z(t, a, n) {
    t.colorSchemes && n && (t.colorSchemes[a] = {
      ...n !== true && n,
      palette: q({
        ...n === true ? {} : n.palette,
        mode: a
      })
    });
  }
  rt = function(t = {}, ...a) {
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
      const p = N({
        ...t,
        palette: k
      }, ...a);
      return p.defaultColorScheme = d, p.colorSchemes = u, p.palette.mode === "light" && (p.colorSchemes.light = {
        ...u.light !== true && u.light,
        palette: p.palette
      }, Z(p, "dark", u.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
        ...u.dark !== true && u.dark,
        palette: p.palette
      }, Z(p, "light", u.light)), p;
    }
    return !n && !("light" in u) && d === "light" && (u.light = true), tt({
      ...c,
      colorSchemes: u,
      defaultColorScheme: d,
      ...typeof s != "boolean" && s
    }, ...a);
  };
  st = rt();
});
export {
  it as T,
  __tla,
  Pe as a,
  tt as b,
  rt as c,
  L as d,
  W as e,
  V as f,
  Be as g,
  We as h,
  Je as i,
  ot as j,
  Ge as k,
  P as l,
  Me as m,
  Ue as n,
  z as o,
  F as p,
  _e as q,
  _ as r,
  Qe as s,
  Ke as t,
  st as u
};
