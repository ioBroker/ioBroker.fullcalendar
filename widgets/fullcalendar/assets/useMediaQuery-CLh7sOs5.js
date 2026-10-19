var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __restKey = (key) => typeof key === "symbol" ? key : key + "";
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import {A as e, C as t, E as n, I as r, M as i, N as a, O as o, S as s, X as c, b as l, d as u, et as d, f, g as p, h as m, it as h, k as g, n as _, o as v, ot as y, s as b, tt as x, u as S, v as C, x as w, y as T} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js";
import {$t as E, Ct as D, Et as O, Gt as k, Kt as A, Lt as j, Qt as M, Ut as N, Yt as P, _t as F, cn as I, d as L, dn as R, en as z, f as B, h as ee, ht as te, i as V, in as H, ln as ne, m as re, nn as U, o as W, r as ie, rn as ae, t as oe, tn as se, u as G, v as ce, vt as le, x as ue, xt as de, y as fe, yt as K} from "./useMediaQuery-Cm2kB8Te.js";
var pe = {black: `#000`, white: `#fff`}, me = {50: `#ffebee`, 100: `#ffcdd2`, 200: `#ef9a9a`, 300: `#e57373`, 400: `#ef5350`, 500: `#f44336`, 600: `#e53935`, 700: `#d32f2f`, 800: `#c62828`, 900: `#b71c1c`, A100: `#ff8a80`, A200: `#ff5252`, A400: `#ff1744`, A700: `#d50000`}, he = {50: `#f3e5f5`, 100: `#e1bee7`, 200: `#ce93d8`, 300: `#ba68c8`, 400: `#ab47bc`, 500: `#9c27b0`, 600: `#8e24aa`, 700: `#7b1fa2`, 800: `#6a1b9a`, 900: `#4a148c`, A100: `#ea80fc`, A200: `#e040fb`, A400: `#d500f9`, A700: `#aa00ff`}, ge = {50: `#e3f2fd`, 100: `#bbdefb`, 200: `#90caf9`, 300: `#64b5f6`, 400: `#42a5f5`, 500: `#2196f3`, 600: `#1e88e5`, 700: `#1976d2`, 800: `#1565c0`, 900: `#0d47a1`, A100: `#82b1ff`, A200: `#448aff`, A400: `#2979ff`, A700: `#2962ff`}, _e = {50: `#e1f5fe`, 100: `#b3e5fc`, 200: `#81d4fa`, 300: `#4fc3f7`, 400: `#29b6f6`, 500: `#03a9f4`, 600: `#039be5`, 700: `#0288d1`, 800: `#0277bd`, 900: `#01579b`, A100: `#80d8ff`, A200: `#40c4ff`, A400: `#00b0ff`, A700: `#0091ea`}, ve = {50: `#e8f5e9`, 100: `#c8e6c9`, 200: `#a5d6a7`, 300: `#81c784`, 400: `#66bb6a`, 500: `#4caf50`, 600: `#43a047`, 700: `#388e3c`, 800: `#2e7d32`, 900: `#1b5e20`, A100: `#b9f6ca`, A200: `#69f0ae`, A400: `#00e676`, A700: `#00c853`}, ye = {50: `#fff3e0`, 100: `#ffe0b2`, 200: `#ffcc80`, 300: `#ffb74d`, 400: `#ffa726`, 500: `#ff9800`, 600: `#fb8c00`, 700: `#f57c00`, 800: `#ef6c00`, 900: `#e65100`, A100: `#ffd180`, A200: `#ffab40`, A400: `#ff9100`, A700: `#ff6d00`}, be = {50: `#fafafa`, 100: `#f5f5f5`, 200: `#eeeeee`, 300: `#e0e0e0`, 400: `#bdbdbd`, 500: `#9e9e9e`, 600: `#757575`, 700: `#616161`, 800: `#424242`, 900: `#212121`, A100: `#f5f5f5`, A200: `#eeeeee`, A400: `#bdbdbd`, A700: `#616161`}, xe = `$$material`;
function Se() {
  return {text: {primary: `rgba(0, 0, 0, 0.87)`, secondary: `rgba(0, 0, 0, 0.6)`, disabled: `rgba(0, 0, 0, 0.38)`}, divider: `rgba(0, 0, 0, 0.12)`, background: {paper: pe.white, default: pe.white}, action: {active: `rgba(0, 0, 0, 0.54)`, hover: `rgba(0, 0, 0, 0.04)`, hoverOpacity: 0.04, selected: `rgba(0, 0, 0, 0.08)`, selectedOpacity: 0.08, disabled: `rgba(0, 0, 0, 0.26)`, disabledBackground: `rgba(0, 0, 0, 0.12)`, disabledOpacity: 0.38, focus: `rgba(0, 0, 0, 0.12)`, focusOpacity: 0.12, activatedOpacity: 0.12}};
}
var Ce = Se();
function we() {
  return {text: {primary: pe.white, secondary: `rgba(255, 255, 255, 0.7)`, disabled: `rgba(255, 255, 255, 0.5)`, icon: `rgba(255, 255, 255, 0.5)`}, divider: `rgba(255, 255, 255, 0.12)`, background: {paper: `#121212`, default: `#121212`}, action: {active: pe.white, hover: `rgba(255, 255, 255, 0.08)`, hoverOpacity: 0.08, selected: `rgba(255, 255, 255, 0.16)`, selectedOpacity: 0.16, disabled: `rgba(255, 255, 255, 0.3)`, disabledBackground: `rgba(255, 255, 255, 0.12)`, disabledOpacity: 0.38, focus: `rgba(255, 255, 255, 0.12)`, focusOpacity: 0.12, activatedOpacity: 0.24}};
}
var Te = we();
function Ee(e4, t2, n2, r2) {
  let i2 = r2.light || r2, a2 = r2.dark || r2 * 1.5;
  e4[t2] || (e4.hasOwnProperty(n2) ? e4[t2] = e4[n2] : t2 === `light` ? e4.light = E(e4.main, i2) : t2 === `dark` && (e4.dark = A(e4.main, a2)));
}
function De(e4, t2, n2, r2, i2) {
  let a2 = i2.light || i2, o2 = i2.dark || i2 * 1.5;
  t2[n2] || (t2.hasOwnProperty(r2) ? t2[n2] = t2[r2] : n2 === `light` ? t2.light = `color-mix(in ${e4}, ${t2.main}, #fff ${(a2 * 100).toFixed(0)}%)` : n2 === `dark` && (t2.dark = `color-mix(in ${e4}, ${t2.main}, #000 ${(o2 * 100).toFixed(0)}%)`));
}
function Oe(e4 = `light`) {
  return e4 === `dark` ? {main: ge[200], light: ge[50], dark: ge[400]} : {main: ge[700], light: ge[400], dark: ge[800]};
}
function ke(e4 = `light`) {
  return e4 === `dark` ? {main: he[200], light: he[50], dark: he[400]} : {main: he[500], light: he[300], dark: he[700]};
}
function Ae(e4 = `light`) {
  return e4 === `dark` ? {main: me[500], light: me[300], dark: me[700]} : {main: me[700], light: me[400], dark: me[800]};
}
function je(e4 = `light`) {
  return e4 === `dark` ? {main: _e[400], light: _e[300], dark: _e[700]} : {main: _e[700], light: _e[500], dark: _e[900]};
}
function Me(e4 = `light`) {
  return e4 === `dark` ? {main: ve[400], light: ve[300], dark: ve[700]} : {main: ve[800], light: ve[500], dark: ve[900]};
}
function Ne(e4 = `light`) {
  return e4 === `dark` ? {main: ye[400], light: ye[300], dark: ye[700]} : {main: `#ed6c02`, light: ye[500], dark: ye[900]};
}
function Pe(e4) {
  return `oklch(from ${e4} var(--__l) 0 h / var(--__a))`;
}
function Fe(e4) {
  let _a2 = e4, {mode: t2 = `light`, contrastThreshold: n2 = 3, tonalOffset: r2 = 0.2, colorSpace: i2} = _a2, a2 = __objRest(_a2, ["mode", "contrastThreshold", "tonalOffset", "colorSpace"]), o2 = e4.primary || Oe(t2), s2 = e4.secondary || ke(t2), c2 = e4.error || Ae(t2), l2 = e4.info || je(t2), u2 = e4.success || Me(t2), d2 = e4.warning || Ne(t2);
  function f2(e5) {
    return i2 ? Pe(e5) : P(e5, Te.text.primary) >= n2 ? Te.text.primary : Ce.text.primary;
  }
  let p2 = ({color: e5, name: t3, mainShade: n3 = 500, lightShade: a3 = 300, darkShade: o3 = 700}) => {
    if (e5 = __spreadValues({}, e5), !e5.main && e5[n3] && (e5.main = e5[n3]), !e5.hasOwnProperty(`main`))
      throw Error(R(11, t3 ? ` (${t3})` : ``, n3));
    if (typeof e5.main != `string`)
      throw Error(R(12, t3 ? ` (${t3})` : ``, JSON.stringify(e5.main)));
    return i2 ? (De(i2, e5, `light`, a3, r2), De(i2, e5, `dark`, o3, r2)) : (Ee(e5, `light`, a3, r2), Ee(e5, `dark`, o3, r2)), e5.contrastText || (e5.contrastText = f2(e5.main)), e5;
  }, m2;
  return t2 === `light` ? m2 = Se() : t2 === `dark` && (m2 = we()), I(__spreadValues({common: __spreadValues({}, pe), mode: t2, primary: p2({color: o2, name: `primary`}), secondary: p2({color: s2, name: `secondary`, mainShade: `A400`, lightShade: `A200`, darkShade: `A700`}), error: p2({color: c2, name: `error`}), warning: p2({color: d2, name: `warning`}), info: p2({color: l2, name: `info`}), success: p2({color: u2, name: `success`}), grey: be, contrastThreshold: n2, getContrastText: f2, augmentColor: p2, tonalOffset: r2}, m2), a2);
}
var Ie = `--_focusVisible-offset`, Le = `--_focusVisible-behavior`, Re = `--_focusVisible-shadow`, ze = `var(${Ie}, 1)`, Be = `var(${Le}, )`, Ve = {[Ie]: 1, [Le]: `initial`};
function He(e4) {
  return {[Re]: e4};
}
function Ue(e4) {
  return {[Ie]: -e4, [Le]: `inset`};
}
function We(e4, t2) {
  return t2.reduce((e5, t3) => t3 && `focusVisible` in t3 ? I(e5, {focusVisible: t3.focusVisible}) : e5, {focusVisible: e4}).focusVisible;
}
function Ge(e4) {
  return typeof e4 == `object` && !!e4 && typeof e4.outlineOffset == `string` && e4.outlineOffset.includes(Ie);
}
function Ke(e4, t2) {
  return qe(__spreadValues({outlineStyle: `solid`, outlineColor: t2, outlineWidth: 2, outlineOffset: 2, boxShadow: `var(${Re}, 0 0)`}, e4 === true ? null : e4));
}
function qe(e4) {
  let t2 = e4.outlineOffset ?? 0;
  (typeof t2 != `string` || !t2.includes(Ie)) && (e4.outlineOffset = `calc(${ze} * ${typeof t2 == `number` ? `${t2}px` : t2})`);
  let n2 = new Set([`none`, `initial`, `inherit`, `unset`, `revert`, `revert-layer`]);
  return typeof e4.boxShadow == `string` && !n2.has(e4.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e4.boxShadow) && !e4.boxShadow.includes(Le) && (e4.boxShadow = `${Be} ${e4.boxShadow}`), e4;
}
function Je(e4) {
  let t2 = {};
  return Object.entries(e4).forEach((e5) => {
    let [n2, r2] = e5;
    typeof r2 == `object` && (t2[n2] = `${r2.fontStyle ? `${r2.fontStyle} ` : ``}${r2.fontVariant ? `${r2.fontVariant} ` : ``}${r2.fontWeight ? `${r2.fontWeight} ` : ``}${r2.fontStretch ? `${r2.fontStretch} ` : ``}${r2.fontSize || ``}${r2.lineHeight ? `/${r2.lineHeight} ` : ``}${r2.fontFamily || ``}`);
  }), t2;
}
function Ye(e4, t2) {
  return __spreadValues({toolbar: {minHeight: 56, [e4.up(`xs`)]: {"@media (orientation: landscape)": {minHeight: 48}}, [e4.up(`sm`)]: {minHeight: 64}}}, t2);
}
function Xe(e4) {
  return Math.round(e4 * 1e5) / 1e5;
}
var Ze = {textTransform: `uppercase`}, Qe = `"Roboto", "Helvetica", "Arial", sans-serif`;
function $e(e4, t2) {
  let _a2 = typeof t2 == `function` ? t2(e4) : t2, {fontFamily: n2 = Qe, fontSize: r2 = 14, fontWeightLight: i2 = 300, fontWeightRegular: a2 = 400, fontWeightMedium: o2 = 500, fontWeightBold: s2 = 700, htmlFontSize: c2 = 16, allVariants: l2, pxToRem: u2} = _a2, d2 = __objRest(_a2, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]), f2 = r2 / 14, p2 = u2 || ((e5) => `${e5 / c2 * f2}rem`), m2 = (e5, t3, r3, i3, a3) => __spreadValues(__spreadValues(__spreadValues({fontFamily: n2, fontWeight: e5, fontSize: p2(t3), lineHeight: r3}, n2 === Qe ? {letterSpacing: `${Xe(i3 / t3)}em`} : {}), a3), l2), h2 = {h1: m2(i2, 96, 1.167, -1.5), h2: m2(i2, 60, 1.2, -0.5), h3: m2(a2, 48, 1.167, 0), h4: m2(a2, 34, 1.235, 0.25), h5: m2(a2, 24, 1.334, 0), h6: m2(o2, 20, 1.6, 0.15), subtitle1: m2(a2, 16, 1.75, 0.15), subtitle2: m2(o2, 14, 1.57, 0.1), body1: m2(a2, 16, 1.5, 0.15), body2: m2(a2, 14, 1.43, 0.15), button: m2(o2, 14, 1.75, 0.4, Ze), caption: m2(a2, 12, 1.66, 0.4), overline: m2(a2, 12, 2.66, 1, Ze), inherit: {fontFamily: `inherit`, fontWeight: `inherit`, fontSize: `inherit`, lineHeight: `inherit`, letterSpacing: `inherit`}};
  return I(__spreadValues({htmlFontSize: c2, pxToRem: p2, fontFamily: n2, fontSize: r2, fontWeightLight: i2, fontWeightRegular: a2, fontWeightMedium: o2, fontWeightBold: s2}, h2), d2, {clone: false});
}
var et = 0.2, tt = 0.14, nt = 0.12;
function q(...e4) {
  return [`${e4[0]}px ${e4[1]}px ${e4[2]}px ${e4[3]}px rgba(0,0,0,${et})`, `${e4[4]}px ${e4[5]}px ${e4[6]}px ${e4[7]}px rgba(0,0,0,${tt})`, `${e4[8]}px ${e4[9]}px ${e4[10]}px ${e4[11]}px rgba(0,0,0,${nt})`].join(`,`);
}
var rt = [`none`, q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], it = [`all`], at = {}, ot = {easeInOut: `cubic-bezier(0.4, 0, 0.2, 1)`, easeOut: `cubic-bezier(0.0, 0, 0.2, 1)`, easeIn: `cubic-bezier(0.4, 0, 1, 1)`, sharp: `cubic-bezier(0.4, 0, 0.6, 1)`}, st = {shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195};
function ct(e4) {
  return `${Math.round(e4)}ms`;
}
function lt(e4) {
  if (!e4)
    return 0;
  let t2 = e4 / 36;
  return Math.min(Math.round((4 + 15 * t2 ** 0.25 + t2 / 5) * 10), 3e3);
}
function ut(e4) {
  let t2 = __spreadValues({}, e4);
  delete t2.reducedMotion;
  let n2 = __spreadValues(__spreadValues({}, ot), t2.easing), r2 = __spreadValues(__spreadValues({}, st), t2.duration);
  return __spreadProps(__spreadValues({getAutoHeightDuration: lt, create: t2.create ?? ((e5 = it, t3 = at) => {
    let _a2 = t3, {duration: i2 = r2.standard, easing: a2 = n2.easeInOut, delay: o2 = 0} = _a2, s2 = __objRest(_a2, ["duration", "easing", "delay"]);
    return (Array.isArray(e5) ? e5 : [e5]).map((e6) => `${e6} ${typeof i2 == `string` ? i2 : ct(i2)} ${a2} ${typeof o2 == `string` ? o2 : ct(o2)}`).join(`,`);
  })}, t2), {easing: n2, duration: r2});
}
var dt = {};
function ft(e4 = dt) {
  return __spreadValues({reducedMotion: `never`}, e4);
}
var pt = {mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500};
function mt(e4) {
  return ne(e4) || e4 === void 0 || typeof e4 == `string` || typeof e4 == `boolean` || typeof e4 == `number` || Array.isArray(e4);
}
function ht(e4 = {}) {
  let t2 = __spreadValues({}, e4);
  function n2(e5) {
    let t3 = Object.entries(e5);
    for (let r2 = 0; r2 < t3.length; r2++) {
      let [i2, a2] = t3[r2];
      !mt(a2) || i2.startsWith(`unstable_`) || i2.startsWith(`internal_`) ? delete e5[i2] : ne(a2) && (e5[i2] = __spreadValues({}, a2), n2(e5[i2]));
    }
  }
  return n2(t2), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t2, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function gt(e4) {
  return typeof e4 == `number` ? `${(e4 * 100).toFixed(0)}%` : `calc((${e4}) * 100%)`;
}
var _t = (e4) => {
  if (!Number.isNaN(+e4))
    return +e4;
  let t2 = e4.match(/\d*\.?\d+/g);
  if (!t2)
    return 0;
  let n2 = 0;
  for (let e5 = 0; e5 < t2.length; e5 += 1)
    n2 += +t2[e5];
  return n2;
};
function vt(e4) {
  return e4.startsWith(`hsl`) ? M(e4) : e4;
}
function yt(e4, t2, n2 = ``) {
  let r2 = n2.trim();
  if (r2 && !r2.startsWith(`color(`))
    try {
      let e5 = k(vt(r2));
      if (e5.split(` `).length === 3 && !e5.includes(`NaN`))
        return `var(--${t2}Channel, ${e5})`;
    } catch {
    }
  return `var(--${t2}Channel)`;
}
function bt(e4) {
  Object.assign(e4, {alpha(t2, n2) {
    let r2 = this || e4;
    if (r2.colorSpace)
      return `oklch(from ${t2} l c h / ${typeof n2 == `string` ? `calc(${n2})` : n2})`;
    if (r2.vars) {
      let e5 = typeof n2 == `string` ? `calc(${n2})` : n2;
      return t2.startsWith(`color(`) ? t2.replace(/\s*(?:\/[^)]*)?\)$/, ` / ${e5})`) : `rgba(${t2.includes(`var(`) ? t2.replace(/var\(--([^,\s)]+)(?:,((?:[^()]|\([^()]*\))+)\)|(?:,[^)]+)?\)+)/g, yt) : se(vt(t2))} / ${e5})`;
    }
    return N(t2, _t(n2));
  }, lighten(t2, n2) {
    let r2 = this || e4;
    return r2.colorSpace ? `color-mix(in ${r2.colorSpace}, ${t2}, #fff ${gt(n2)})` : E(t2, n2);
  }, darken(t2, n2) {
    let r2 = this || e4;
    return r2.colorSpace ? `color-mix(in ${r2.colorSpace}, ${t2}, #000 ${gt(n2)})` : A(t2, n2);
  }});
}
function xt(e4 = {}, ...t2) {
  let _a2 = e4, {breakpoints: n2, mixins: r2 = {}, spacing: i2, palette: a2 = {}, motion: o2 = {}, transitions: s2 = {}, typography: c2 = {}, shape: l2, colorSpace: u2} = _a2, d2 = __objRest(_a2, ["breakpoints", "mixins", "spacing", "palette", "motion", "transitions", "typography", "shape", "colorSpace"]);
  if (e4.vars && e4.generateThemeVars === void 0)
    throw Error(R(22));
  let f2 = Fe(__spreadProps(__spreadValues({}, a2), {colorSpace: u2})), p2 = ce(e4), m2 = I(p2, {mixins: Ye(p2.breakpoints, r2), palette: f2, shadows: rt.slice(), typography: $e(f2, c2), motion: ft(o2), transitions: ut(s2), zIndex: __spreadValues({}, pt)});
  return m2 = I(m2, d2), m2 = t2.reduce((e5, t3) => I(e5, t3), m2), delete m2.transitions.reducedMotion, m2.focusVisible != null && m2.focusVisible !== false && (m2.focusVisible = Ke(m2.focusVisible, m2.palette.primary.main)), m2.unstable_sxConfig = __spreadValues(__spreadValues({}, ue), d2?.unstable_sxConfig), m2.unstable_sx = function(e5) {
    return fe({sx: e5, theme: this});
  }, m2.toRuntimeSource = ht, bt(m2), m2;
}
function St(e4) {
  let t2;
  return t2 = e4 < 1 ? 5.11916 * e4 ** 2 : 4.5 * Math.log(e4 + 1) + 2, Math.round(t2 * 10) / 1e3;
}
var Ct = [...Array(25)].map((e4, t2) => {
  if (t2 === 0)
    return `none`;
  let n2 = St(t2);
  return `linear-gradient(rgba(255 255 255 / ${n2}), rgba(255 255 255 / ${n2}))`;
});
function wt(e4) {
  return {inputPlaceholder: e4 === `dark` ? 0.5 : 0.42, inputUnderline: e4 === `dark` ? 0.7 : 0.42, switchTrackDisabled: e4 === `dark` ? 0.2 : 0.12, switchTrack: e4 === `dark` ? 0.3 : 0.38};
}
function Tt(e4) {
  return e4 === `dark` ? Ct : [];
}
function Et(e4) {
  let _a2 = e4, {palette: t2 = {mode: `light`}, opacity: n2, overlays: r2, colorSpace: i2} = _a2, a2 = __objRest(_a2, ["palette", "opacity", "overlays", "colorSpace"]), o2 = Fe(__spreadProps(__spreadValues({}, t2), {colorSpace: i2}));
  return __spreadValues({palette: o2, opacity: __spreadValues(__spreadValues({}, wt(o2.mode)), n2), overlays: r2 || Tt(o2.mode)}, a2);
}
function Dt(e4) {
  return e4[0] === `motion` || e4[0] === `focusVisible` || !!e4[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e4[0].match(/sxConfig$/) || e4[0] === `palette` && !!e4[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
var Ot = (e4) => [...[...Array(25)].map((t2, n2) => `--${e4 ? `${e4}-` : ``}overlays-${n2}`), `--${e4 ? `${e4}-` : ``}palette-AppBar-darkBg`, `--${e4 ? `${e4}-` : ``}palette-AppBar-darkColor`], kt = (e4) => (t2, n2) => {
  let r2 = e4.rootSelector || `:root`, i2 = e4.colorSchemeSelector, a2 = i2;
  if (i2 === `class` && (a2 = `.%s`), i2 === `data` && (a2 = `[data-%s]`), i2?.startsWith(`data-`) && !i2.includes(`%s`) && (a2 = `[${i2}="%s"]`), e4.defaultColorScheme === t2) {
    if (t2 === `dark`) {
      let i3 = {};
      return Ot(e4.cssVarPrefix).forEach((e5) => {
        i3[e5] = n2[e5], delete n2[e5];
      }), a2 === `media` ? {[r2]: n2, "@media (prefers-color-scheme: dark)": {[r2]: i3}} : a2 ? {[a2.replace(`%s`, t2)]: i3, [`${r2}, ${a2.replace(`%s`, t2)}`]: n2} : {[r2]: __spreadValues(__spreadValues({}, n2), i3)};
    }
    if (a2 && a2 !== `media`)
      return `${r2}, ${a2.replace(`%s`, String(t2))}`;
  } else if (t2) {
    if (a2 === `media`)
      return {[`@media (prefers-color-scheme: ${String(t2)})`]: {[r2]: n2}};
    if (a2)
      return a2.replace(`%s`, String(t2));
  }
  return r2;
};
function At(e4, t2) {
  t2.forEach((t3) => {
    e4[t3] || (e4[t3] = {});
  });
}
function J(e4, t2, n2) {
  !e4[t2] && n2 && (e4[t2] = n2);
}
function jt(e4) {
  return typeof e4 != `string` || !e4.startsWith(`hsl`) ? e4 : M(e4);
}
function Mt(e4, t2) {
  `${t2}Channel` in e4 || (e4[`${t2}Channel`] = se(jt(e4[t2]), `MUI: Can't create \`palette.${t2}Channel\` because \`palette.${t2}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t2}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Nt(e4) {
  return typeof e4 == `number` ? `${e4}px` : typeof e4 == `string` || typeof e4 == `function` || Array.isArray(e4) ? e4 : `8px`;
}
var Pt = (e4) => {
  try {
    return e4();
  } catch {
  }
}, Ft = (e4 = `mui`) => y(e4);
function It(e4, t2, n2, r2, i2) {
  if (!n2)
    return;
  n2 = n2 === true ? {} : n2;
  let a2 = i2 === `dark` ? `dark` : `light`;
  if (!r2) {
    t2[i2] = Et(__spreadProps(__spreadValues({}, n2), {palette: __spreadValues({mode: a2}, n2?.palette), colorSpace: e4}));
    return;
  }
  let _a2 = xt(__spreadProps(__spreadValues({}, r2), {palette: __spreadValues({mode: a2}, n2?.palette), colorSpace: e4})), {palette: o2} = _a2, s2 = __objRest(_a2, ["palette"]);
  return t2[i2] = __spreadProps(__spreadValues({}, n2), {palette: o2, opacity: __spreadValues(__spreadValues({}, wt(a2)), n2?.opacity), overlays: n2?.overlays || Tt(a2)}), s2;
}
function Lt(e4 = {}, ...t2) {
  let _a2 = e4, {colorSchemes: n2 = {light: true}, defaultColorScheme: r2, disableCssColorScheme: i2 = false, cssVarPrefix: a2 = `mui`, nativeColor: o2 = false, shouldSkipGeneratingVar: s2 = Dt, colorSchemeSelector: c2 = n2.light && n2.dark ? `media` : void 0, rootSelector: l2 = `:root`} = _a2, u2 = __objRest(_a2, ["colorSchemes", "defaultColorScheme", "disableCssColorScheme", "cssVarPrefix", "nativeColor", "shouldSkipGeneratingVar", "colorSchemeSelector", "rootSelector"]), f2 = Object.keys(n2)[0], p2 = r2 || (n2.light && f2 !== `light` ? `light` : f2), m2 = Ft(a2), _b = n2, {[p2]: h2, light: g2, dark: _2} = _b, v2 = __objRest(_b, [__restKey(p2), "light", "dark"]), y2 = __spreadValues({}, v2), b2 = h2;
  if ((p2 === `dark` && !(`dark` in n2) || p2 === `light` && !(`light` in n2)) && (b2 = true), !b2)
    throw Error(R(21, p2));
  let x2;
  o2 && (x2 = `oklch`);
  let S2 = It(x2, y2, b2, u2, p2);
  g2 && !y2.light && It(x2, y2, g2, void 0, `light`), _2 && !y2.dark && It(x2, y2, _2, void 0, `dark`);
  let C2 = __spreadProps(__spreadValues({defaultColorScheme: p2}, S2), {cssVarPrefix: a2, colorSchemeSelector: c2, rootSelector: l2, getCssVar: m2, colorSchemes: y2, font: __spreadValues(__spreadValues({}, Je(S2.typography)), S2.font), spacing: Nt(u2.spacing)});
  Object.keys(C2.colorSchemes).forEach((e5) => {
    let t3 = C2.colorSchemes[e5].palette, n3 = (e6) => {
      let n4 = e6.split(`-`), r4 = n4[1], i3 = n4[2];
      return m2(e6, t3[r4][i3]);
    };
    t3.mode === `light` && (J(t3.common, `background`, `#fff`), J(t3.common, `onBackground`, `#000`)), t3.mode === `dark` && (J(t3.common, `background`, `#000`), J(t3.common, `onBackground`, `#fff`)), o2 || Mt(t3.text, `primary`);
    function r3(e6, t4, n4) {
      if (x2) {
        let r4;
        return e6 === z && (r4 = `transparent ${((1 - n4) * 100).toFixed(0)}%`), e6 === U && (r4 = `#000 ${(n4 * 100).toFixed(0)}%`), e6 === H && (r4 = `#fff ${(n4 * 100).toFixed(0)}%`), `color-mix(in ${x2}, ${t4}, ${r4})`;
      }
      return e6(t4, n4);
    }
    if (At(t3, [`Alert`, `AppBar`, `Avatar`, `Button`, `Chip`, `FilledInput`, `Input`, `LinearProgress`, `Skeleton`, `Slider`, `SnackbarContent`, `SpeedDialAction`, `StepConnector`, `StepContent`, `Switch`, `TableCell`, `Tooltip`]), t3.mode === `light`) {
      J(t3.Alert, `errorColor`, r3(U, o2 ? m2(`palette-error-light`) : t3.error.light, 0.6)), J(t3.Alert, `infoColor`, r3(U, o2 ? m2(`palette-info-light`) : t3.info.light, 0.6)), J(t3.Alert, `successColor`, r3(U, o2 ? m2(`palette-success-light`) : t3.success.light, 0.6)), J(t3.Alert, `warningColor`, r3(U, o2 ? m2(`palette-warning-light`) : t3.warning.light, 0.6)), J(t3.Alert, `errorFilledBg`, n3(`palette-error-main`)), J(t3.Alert, `infoFilledBg`, n3(`palette-info-main`)), J(t3.Alert, `successFilledBg`, n3(`palette-success-main`)), J(t3.Alert, `warningFilledBg`, n3(`palette-warning-main`)), J(t3.Alert, `errorFilledColor`, Pt(() => t3.getContrastText(t3.error.main))), J(t3.Alert, `infoFilledColor`, Pt(() => t3.getContrastText(t3.info.main))), J(t3.Alert, `successFilledColor`, Pt(() => t3.getContrastText(t3.success.main))), J(t3.Alert, `warningFilledColor`, Pt(() => t3.getContrastText(t3.warning.main))), J(t3.Alert, `errorStandardBg`, r3(H, o2 ? m2(`palette-error-light`) : t3.error.light, 0.9)), J(t3.Alert, `infoStandardBg`, r3(H, o2 ? m2(`palette-info-light`) : t3.info.light, 0.9)), J(t3.Alert, `successStandardBg`, r3(H, o2 ? m2(`palette-success-light`) : t3.success.light, 0.9)), J(t3.Alert, `warningStandardBg`, r3(H, o2 ? m2(`palette-warning-light`) : t3.warning.light, 0.9)), J(t3.Alert, `errorIconColor`, n3(`palette-error-main`)), J(t3.Alert, `infoIconColor`, n3(`palette-info-main`)), J(t3.Alert, `successIconColor`, n3(`palette-success-main`)), J(t3.Alert, `warningIconColor`, n3(`palette-warning-main`)), J(t3.AppBar, `defaultBg`, n3(`palette-grey-100`)), J(t3.Avatar, `defaultBg`, n3(`palette-grey-400`)), J(t3.Button, `inheritContainedBg`, n3(`palette-grey-300`)), J(t3.Button, `inheritContainedHoverBg`, n3(`palette-grey-A100`)), J(t3.Chip, `defaultBorder`, n3(`palette-grey-400`)), J(t3.Chip, `defaultAvatarColor`, n3(`palette-grey-700`)), J(t3.Chip, `defaultIconColor`, n3(`palette-grey-700`)), J(t3.FilledInput, `bg`, `rgba(0, 0, 0, 0.06)`), J(t3.FilledInput, `hoverBg`, `rgba(0, 0, 0, 0.09)`), J(t3.FilledInput, `disabledBg`, `rgba(0, 0, 0, 0.12)`), J(t3.Input, `autofillWebkitBoxShadow`, `none`), J(t3.LinearProgress, `primaryBg`, r3(H, o2 ? m2(`palette-primary-main`) : t3.primary.main, 0.62)), J(t3.LinearProgress, `secondaryBg`, r3(H, o2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.62)), J(t3.LinearProgress, `errorBg`, r3(H, o2 ? m2(`palette-error-main`) : t3.error.main, 0.62)), J(t3.LinearProgress, `infoBg`, r3(H, o2 ? m2(`palette-info-main`) : t3.info.main, 0.62)), J(t3.LinearProgress, `successBg`, r3(H, o2 ? m2(`palette-success-main`) : t3.success.main, 0.62)), J(t3.LinearProgress, `warningBg`, r3(H, o2 ? m2(`palette-warning-light`) : t3.warning.main, 0.62)), J(t3.Skeleton, `bg`, x2 ? r3(z, o2 ? m2(`palette-text-primary`) : t3.text.primary, 0.11) : `rgba(${n3(`palette-text-primaryChannel`)} / 0.11)`), J(t3.Slider, `primaryTrack`, r3(H, o2 ? m2(`palette-primary-main`) : t3.primary.main, 0.62)), J(t3.Slider, `secondaryTrack`, r3(H, o2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.62)), J(t3.Slider, `errorTrack`, r3(H, o2 ? m2(`palette-error-main`) : t3.error.main, 0.62)), J(t3.Slider, `infoTrack`, r3(H, o2 ? m2(`palette-info-main`) : t3.info.main, 0.62)), J(t3.Slider, `successTrack`, r3(H, o2 ? m2(`palette-success-main`) : t3.success.main, 0.62)), J(t3.Slider, `warningTrack`, r3(H, o2 ? m2(`palette-warning-main`) : t3.warning.main, 0.62));
      let e6 = x2 ? r3(U, o2 ? m2(`palette-background-default`) : t3.background.default, 0.6825) : ae(t3.background.default, 0.8);
      J(t3.SnackbarContent, `bg`, e6), J(t3.SnackbarContent, `color`, Pt(() => x2 ? Te.text.primary : t3.getContrastText(e6))), J(t3.SpeedDialAction, `fabHoverBg`, ae(t3.background.paper, 0.15)), J(t3.StepConnector, `border`, n3(`palette-grey-400`)), J(t3.StepContent, `border`, n3(`palette-grey-400`)), J(t3.Switch, `defaultColor`, n3(`palette-common-white`)), J(t3.Switch, `defaultDisabledColor`, n3(`palette-grey-100`)), J(t3.Switch, `primaryDisabledColor`, r3(H, o2 ? m2(`palette-primary-main`) : t3.primary.main, 0.62)), J(t3.Switch, `secondaryDisabledColor`, r3(H, o2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.62)), J(t3.Switch, `errorDisabledColor`, r3(H, o2 ? m2(`palette-error-main`) : t3.error.main, 0.62)), J(t3.Switch, `infoDisabledColor`, r3(H, o2 ? m2(`palette-info-main`) : t3.info.main, 0.62)), J(t3.Switch, `successDisabledColor`, r3(H, o2 ? m2(`palette-success-main`) : t3.success.main, 0.62)), J(t3.Switch, `warningDisabledColor`, r3(H, o2 ? m2(`palette-warning-main`) : t3.warning.main, 0.62)), J(t3.TableCell, `border`, r3(H, z(o2 ? m2(`palette-divider`) : t3.divider, 1), 0.88)), J(t3.Tooltip, `bg`, r3(z, o2 ? m2(`palette-grey-700`) : t3.grey[700], 0.92));
    }
    if (t3.mode === `dark`) {
      J(t3.Alert, `errorColor`, r3(H, o2 ? m2(`palette-error-light`) : t3.error.light, 0.6)), J(t3.Alert, `infoColor`, r3(H, o2 ? m2(`palette-info-light`) : t3.info.light, 0.6)), J(t3.Alert, `successColor`, r3(H, o2 ? m2(`palette-success-light`) : t3.success.light, 0.6)), J(t3.Alert, `warningColor`, r3(H, o2 ? m2(`palette-warning-light`) : t3.warning.light, 0.6)), J(t3.Alert, `errorFilledBg`, n3(`palette-error-dark`)), J(t3.Alert, `infoFilledBg`, n3(`palette-info-dark`)), J(t3.Alert, `successFilledBg`, n3(`palette-success-dark`)), J(t3.Alert, `warningFilledBg`, n3(`palette-warning-dark`)), J(t3.Alert, `errorFilledColor`, Pt(() => t3.getContrastText(t3.error.dark))), J(t3.Alert, `infoFilledColor`, Pt(() => t3.getContrastText(t3.info.dark))), J(t3.Alert, `successFilledColor`, Pt(() => t3.getContrastText(t3.success.dark))), J(t3.Alert, `warningFilledColor`, Pt(() => t3.getContrastText(t3.warning.dark))), J(t3.Alert, `errorStandardBg`, r3(U, o2 ? m2(`palette-error-light`) : t3.error.light, 0.9)), J(t3.Alert, `infoStandardBg`, r3(U, o2 ? m2(`palette-info-light`) : t3.info.light, 0.9)), J(t3.Alert, `successStandardBg`, r3(U, o2 ? m2(`palette-success-light`) : t3.success.light, 0.9)), J(t3.Alert, `warningStandardBg`, r3(U, o2 ? m2(`palette-warning-light`) : t3.warning.light, 0.9)), J(t3.Alert, `errorIconColor`, n3(`palette-error-main`)), J(t3.Alert, `infoIconColor`, n3(`palette-info-main`)), J(t3.Alert, `successIconColor`, n3(`palette-success-main`)), J(t3.Alert, `warningIconColor`, n3(`palette-warning-main`)), J(t3.AppBar, `defaultBg`, n3(`palette-grey-900`)), J(t3.AppBar, `darkBg`, n3(`palette-background-paper`)), J(t3.AppBar, `darkColor`, n3(`palette-text-primary`)), J(t3.Avatar, `defaultBg`, n3(`palette-grey-600`)), J(t3.Button, `inheritContainedBg`, n3(`palette-grey-800`)), J(t3.Button, `inheritContainedHoverBg`, n3(`palette-grey-700`)), J(t3.Chip, `defaultBorder`, n3(`palette-grey-700`)), J(t3.Chip, `defaultAvatarColor`, n3(`palette-grey-300`)), J(t3.Chip, `defaultIconColor`, n3(`palette-grey-300`)), J(t3.FilledInput, `bg`, `rgba(255, 255, 255, 0.09)`), J(t3.FilledInput, `hoverBg`, `rgba(255, 255, 255, 0.13)`), J(t3.FilledInput, `disabledBg`, `rgba(255, 255, 255, 0.12)`), J(t3.Input, `autofillWebkitBoxShadow`, `0 0 0 100px #266798 inset`), J(t3.LinearProgress, `primaryBg`, r3(U, o2 ? m2(`palette-primary-main`) : t3.primary.main, 0.5)), J(t3.LinearProgress, `secondaryBg`, r3(U, o2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.5)), J(t3.LinearProgress, `errorBg`, r3(U, o2 ? m2(`palette-error-main`) : t3.error.main, 0.5)), J(t3.LinearProgress, `infoBg`, r3(U, o2 ? m2(`palette-info-main`) : t3.info.main, 0.5)), J(t3.LinearProgress, `successBg`, r3(U, o2 ? m2(`palette-success-main`) : t3.success.main, 0.5)), J(t3.LinearProgress, `warningBg`, r3(U, o2 ? m2(`palette-warning-main`) : t3.warning.main, 0.5)), J(t3.Skeleton, `bg`, x2 ? r3(z, o2 ? m2(`palette-text-primary`) : t3.text.primary, 0.13) : `rgba(${n3(`palette-text-primaryChannel`)} / 0.13)`), J(t3.Slider, `primaryTrack`, r3(U, o2 ? m2(`palette-primary-main`) : t3.primary.main, 0.5)), J(t3.Slider, `secondaryTrack`, r3(U, o2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.5)), J(t3.Slider, `errorTrack`, r3(U, o2 ? m2(`palette-error-main`) : t3.error.main, 0.5)), J(t3.Slider, `infoTrack`, r3(U, o2 ? m2(`palette-info-main`) : t3.info.main, 0.5)), J(t3.Slider, `successTrack`, r3(U, o2 ? m2(`palette-success-main`) : t3.success.main, 0.5)), J(t3.Slider, `warningTrack`, r3(U, o2 ? m2(`palette-warning-light`) : t3.warning.main, 0.5));
      let e6 = x2 ? r3(H, o2 ? m2(`palette-background-default`) : t3.background.default, 0.985) : ae(t3.background.default, 0.98);
      J(t3.SnackbarContent, `bg`, e6), J(t3.SnackbarContent, `color`, Pt(() => x2 ? Ce.text.primary : t3.getContrastText(e6))), J(t3.SpeedDialAction, `fabHoverBg`, ae(t3.background.paper, 0.15)), J(t3.StepConnector, `border`, n3(`palette-grey-600`)), J(t3.StepContent, `border`, n3(`palette-grey-600`)), J(t3.Switch, `defaultColor`, n3(`palette-grey-300`)), J(t3.Switch, `defaultDisabledColor`, n3(`palette-grey-600`)), J(t3.Switch, `primaryDisabledColor`, r3(U, o2 ? m2(`palette-primary-main`) : t3.primary.main, 0.55)), J(t3.Switch, `secondaryDisabledColor`, r3(U, o2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.55)), J(t3.Switch, `errorDisabledColor`, r3(U, o2 ? m2(`palette-error-main`) : t3.error.main, 0.55)), J(t3.Switch, `infoDisabledColor`, r3(U, o2 ? m2(`palette-info-main`) : t3.info.main, 0.55)), J(t3.Switch, `successDisabledColor`, r3(U, o2 ? m2(`palette-success-main`) : t3.success.main, 0.55)), J(t3.Switch, `warningDisabledColor`, r3(U, o2 ? m2(`palette-warning-light`) : t3.warning.main, 0.55)), J(t3.TableCell, `border`, r3(U, z(o2 ? m2(`palette-divider`) : t3.divider, 1), 0.68)), J(t3.Tooltip, `bg`, r3(z, o2 ? m2(`palette-grey-700`) : t3.grey[700], 0.92));
    }
    o2 || (Mt(t3.background, `default`), Mt(t3.background, `paper`), Mt(t3.common, `background`), Mt(t3.common, `onBackground`), Mt(t3, `divider`)), Object.keys(t3).forEach((e6) => {
      let n4 = t3[e6];
      e6 !== `tonalOffset` && !o2 && n4 && typeof n4 == `object` && (n4.main && J(t3[e6], `mainChannel`, se(jt(n4.main))), n4.light && J(t3[e6], `lightChannel`, se(jt(n4.light))), n4.dark && J(t3[e6], `darkChannel`, se(jt(n4.dark))), n4.contrastText && J(t3[e6], `contrastTextChannel`, se(jt(n4.contrastText))), e6 === `text` && (Mt(t3[e6], `primary`), Mt(t3[e6], `secondary`)), e6 === `action` && (n4.active && Mt(t3[e6], `active`), n4.selected && Mt(t3[e6], `selected`)));
    });
  }), C2 = t2.reduce((e5, t3) => I(e5, t3), C2);
  let w2 = We(e4.focusVisible, t2);
  w2 != null && w2 !== false && (C2.focusVisible = Ke(w2, m2(`palette-primary-main`)));
  let T2 = {prefix: a2, disableCssColorScheme: i2, shouldSkipGeneratingVar: s2, getSelector: kt(C2), enableContrastVars: o2}, {vars: E2, generateThemeVars: D2, generateStyleSheets: k2} = ee(C2, T2);
  return C2.vars = E2, Object.entries(C2.colorSchemes[C2.defaultColorScheme]).forEach(([e5, t3]) => {
    C2[e5] = t3;
  }), C2.generateThemeVars = D2, C2.generateStyleSheets = k2, C2.generateSpacing = function() {
    return d(u2.spacing, O(this));
  }, C2.getColorSchemeSelector = re(c2), C2.spacing = C2.generateSpacing(), C2.shouldSkipGeneratingVar = s2, C2.unstable_sxConfig = __spreadValues(__spreadValues({}, ue), u2?.unstable_sxConfig), C2.unstable_sx = function(e5) {
    return fe({sx: e5, theme: this});
  }, C2.internal_cache = {}, C2.toRuntimeSource = ht, C2;
}
function Rt(e4, t2, n2) {
  e4.colorSchemes && n2 && (e4.colorSchemes[t2] = __spreadProps(__spreadValues({}, n2 !== true && n2), {palette: Fe(__spreadProps(__spreadValues({}, n2 === true ? {} : n2.palette), {mode: t2}))}));
}
function zt(e4 = {}, ...t2) {
  let _a2 = e4, {palette: n2, cssVariables: r2 = false, colorSchemes: i2 = n2 ? void 0 : {light: true}, defaultColorScheme: a2 = n2?.mode} = _a2, o2 = __objRest(_a2, ["palette", "cssVariables", "colorSchemes", "defaultColorScheme"]), s2 = a2 || `light`, c2 = i2?.[s2], l2 = __spreadValues(__spreadValues({}, i2), n2 ? {[s2]: __spreadProps(__spreadValues({}, typeof c2 != `boolean` && c2), {palette: n2})} : void 0);
  if (r2 === false) {
    if (!(`colorSchemes` in e4))
      return xt(e4, ...t2);
    let r3 = n2;
    `palette` in e4 || l2[s2] && (l2[s2] === true ? s2 === `dark` && (r3 = {mode: `dark`}) : r3 = l2[s2].palette);
    let i3 = xt(__spreadProps(__spreadValues({}, e4), {palette: r3}), ...t2);
    if (i3.defaultColorScheme = s2, i3.colorSchemes = l2, i3.palette.mode === `light` && (i3.colorSchemes.light = __spreadProps(__spreadValues({}, l2.light !== true && l2.light), {palette: i3.palette}), Rt(i3, `dark`, l2.dark)), i3.palette.mode === `dark` && (i3.colorSchemes.dark = __spreadProps(__spreadValues({}, l2.dark !== true && l2.dark), {palette: i3.palette}), Rt(i3, `light`, l2.light)), i3.focusVisible != null && i3.focusVisible !== false) {
      let n3 = i3.focusVisible, r4 = We(e4.focusVisible, t2), a3 = r4 && typeof r4 == `object` ? r4.outlineColor : void 0;
      if (!a3 || Ge(r4) && a3 === i3.palette.primary.main) {
        let _b = n3, {outlineColor: e5} = _b, t3 = __objRest(_b, ["outlineColor"]);
        n3 = t3;
      }
      Object.keys(i3.colorSchemes).forEach((e5) => {
        let t3 = i3.colorSchemes?.[e5]?.palette;
        t3?.primary && (i3.colorSchemes[e5].focusVisible = Ke(n3, t3.primary.main));
      });
    }
    return i3;
  }
  return !n2 && !(`light` in l2) && s2 === `light` && (l2.light = true), Lt(__spreadValues(__spreadProps(__spreadValues({}, o2), {colorSchemes: l2, defaultColorScheme: s2}), typeof r2 != `boolean` && r2), ...t2);
}
function Bt(e4) {
  return typeof e4 == `string`;
}
function Vt(...e4) {
  let t2 = o(void 0), r2 = T((t3) => {
    let n2 = e4.map((e5) => {
      if (e5 == null)
        return null;
      if (typeof e5 == `function`) {
        let n3 = e5, r3 = n3(t3);
        return typeof r3 == `function` ? r3 : () => {
          n3(null);
        };
      }
      return e5.current = t3, () => {
        e5.current = null;
      };
    });
    return () => {
      n2.forEach((e5) => e5?.());
    };
  }, e4);
  return n(() => e4.every((e5) => e5 == null) ? null : (e5) => {
    t2.current && (t2.current = (t2.current(), void 0)), e5 != null && (t2.current = r2(e5));
  }, e4);
}
function Ht(e4) {
  let t2 = o(e4);
  return D(() => {
    t2.current = e4;
  }), o((...e5) => (0, t2.current)(...e5)).current;
}
function Ut(e4) {
  return e4 && e4.ownerDocument || document;
}
function Wt(e4) {
  return Ut(e4).defaultView || window;
}
var Gt = f(void 0);
function Kt() {
  return l(Gt);
}
function qt({props: e4, states: t2}) {
  let n2 = l(Gt), r2 = {};
  return t2.forEach((t3) => {
    let i2 = e4[t3];
    r2[t3] = i2 === void 0 && n2 ? n2[t3] : i2;
  }), [r2, n2];
}
var Jt = zt();
function Yt() {
  let e4 = x(Jt);
  return e4.$$material || e4;
}
function Xt(e4) {
  return e4 !== `ownerState` && e4 !== `theme` && e4 !== `sx` && e4 !== `as`;
}
var Zt = (e4) => Xt(e4) && e4 !== `classes`, Y = W({themeId: xe, defaultTheme: Jt, rootShouldForwardProp: Zt}), X = h;
function Z(e4) {
  return F(e4);
}
var Q = j, Qt = Vt, $t = D, en = Ut;
function tn(e4) {
  let t2 = e4.activeElement;
  for (; t2?.shadowRoot?.activeElement != null; )
    t2 = t2.shadowRoot.activeElement;
  return t2;
}
var nn = tn;
function rn(e4) {
  return e4 != null && !(Array.isArray(e4) && e4.length === 0);
}
function an(e4, t2 = false) {
  return e4 && (rn(e4.value) && e4.value !== `` || t2 && rn(e4.defaultValue) && e4.defaultValue !== ``);
}
function on(e4) {
  return e4.startAdornment;
}
var sn = {transition: `none`};
function cn(e4, t2) {
  return e4 === `always` ? t2 : e4 === `system` ? {"@media (prefers-reduced-motion: reduce)": t2} : null;
}
var ln = (e4) => e4.scrollTop, un = {offsetX: 0, offsetY: 0}, dn = {}, fn = [`all`], pn = {}, mn = {matrix: [4, 5], matrix3d: [12, 13], translate: [0, 1], translate3d: [0, 1], translateX: [0, null], translateY: [null, 0]};
function hn(e4) {
  let t2 = parseFloat(e4 ?? ``);
  return Number.isNaN(t2) ? 0 : t2;
}
function gn(e4) {
  let t2 = e4.match(/^(matrix|matrix3d|translate|translate3d|translateX|translateY)\((.+)\)$/);
  return t2 ? {type: t2[1], values: t2[2].split(`,`).map(hn)} : null;
}
function _n(e4, t2) {
  return t2 === null ? 0 : e4[t2] || 0;
}
function vn(e4) {
  if (!e4 || e4 === `none`)
    return un;
  let t2 = gn(e4);
  if (!t2)
    return un;
  let {type: n2, values: r2} = t2, i2 = mn[n2];
  return i2 ? {offsetX: _n(r2, i2[0]), offsetY: _n(r2, i2[1])} : un;
}
function yn(e4, t2) {
  return (n2) => {
    if (t2) {
      let r2 = e4.current;
      n2 === void 0 ? t2(r2) : t2(r2, n2);
    }
  };
}
function bn(e4, t2, n2, r2, i2, a2) {
  let o2 = e4 === `exited` && !t2 ? r2 : n2[e4] || n2.exited;
  return i2 || a2 ? __spreadValues(__spreadValues(__spreadValues({}, o2), i2), a2) : o2;
}
function xn(e4, t2) {
  let {timeout: n2, easing: r2, style: i2 = dn} = e4;
  return {duration: i2.transitionDuration ?? (typeof n2 == `number` ? n2 : n2[t2.mode] || 0), easing: i2.transitionTimingFunction ?? (typeof r2 == `object` ? r2[t2.mode] : r2), delay: i2.transitionDelay};
}
function Sn(e4, t2) {
  let n2 = t2 ?? sn;
  return cn(e4.motion?.reducedMotion, n2);
}
function Cn(e4, t2 = fn, n2 = pn) {
  let r2 = e4.transitions?.create?.(t2, n2), i2 = Sn(e4);
  if (r2 === void 0)
    return i2 ?? dn;
  let a2 = {transition: r2};
  return i2 ? __spreadValues(__spreadValues({}, a2), i2) : a2;
}
function wn(e4) {
  return B(`MuiFormHelperText`, e4);
}
var Tn = L(`MuiFormHelperText`, [`root`, `error`, `disabled`, `sizeSmall`, `sizeMedium`, `contained`, `focused`, `filled`, `required`]);
function En(e4) {
  return B(`MuiFormLabel`, e4);
}
var Dn = L(`MuiFormLabel`, [`root`, `colorSecondary`, `focused`, `disabled`, `error`, `filled`, `required`, `asterisk`]);
function On(e4) {
  return B(`MuiListItemButton`, e4);
}
var kn = L(`MuiListItemButton`, [`root`, `focusVisible`, `dense`, `alignItemsFlexStart`, `disabled`, `divider`, `gutters`, `selected`]);
function An(e4) {
  return B(`MuiMenuItem`, e4);
}
var jn = L(`MuiMenuItem`, [`root`, `focusVisible`, `dense`, `disabled`, `divider`, `gutters`, `selected`]);
function Mn({props: e4, name: t2}) {
  return V({props: e4, name: t2, defaultTheme: Jt, themeId: xe});
}
function Nn(...e4) {
  return e4.reduce((e5, t2) => t2 == null ? e5 : function(...n2) {
    e5.apply(this, n2), t2.apply(this, n2);
  }, () => {
  });
}
function Pn(e4) {
  return B(`MuiSvgIcon`, e4);
}
var Fn = L(`MuiSvgIcon`, [`root`, `colorPrimary`, `colorSecondary`, `colorAction`, `colorError`, `colorDisabled`, `fontSizeInherit`, `fontSizeSmall`, `fontSizeMedium`, `fontSizeLarge`]), In = (e4) => {
  let {color: t2, fontSize: n2, classes: r2} = e4, i2 = {root: [`root`, t2 !== `inherit` && `color${Q(t2)}`, `fontSize${Q(n2)}`]};
  return G(i2, Pn, r2);
}, Ln = Y(`svg`, {name: `MuiSvgIcon`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.color !== `inherit` && t2[`color${Q(n2.color)}`], t2[`fontSize${Q(n2.fontSize)}`]];
}})(X(({theme: e4}) => __spreadProps(__spreadValues({userSelect: `none`, width: `1em`, height: `1em`, display: `inline-block`, flexShrink: 0}, Cn(e4, `fill`, {duration: (e4.vars ?? e4).transitions?.duration?.shorter})), {variants: [{props: (e5) => !e5.hasSvgAsChild, style: {fill: `currentColor`}}, {props: {fontSize: `inherit`}, style: {fontSize: `inherit`}}, {props: {fontSize: `small`}, style: {fontSize: e4.typography?.pxToRem?.(20) || `1.25rem`}}, {props: {fontSize: `medium`}, style: {fontSize: e4.typography?.pxToRem?.(24) || `1.5rem`}}, {props: {fontSize: `large`}, style: {fontSize: e4.typography?.pxToRem?.(35) || `2.1875rem`}}, ...Object.entries((e4.vars ?? e4).palette).filter(([, e5]) => e5 && e5.main).map(([t2]) => ({props: {color: t2}, style: {color: (e4.vars ?? e4).palette?.[t2]?.main}})), {props: {color: `action`}, style: {color: (e4.vars ?? e4).palette?.action?.active}}, {props: {color: `disabled`}, style: {color: (e4.vars ?? e4).palette?.action?.disabled}}, {props: {color: `inherit`}, style: {color: void 0}}]}))), Rn = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiSvgIcon`}), _a2 = n2, {children: r2, className: i2, color: a2 = `inherit`, component: o2 = `svg`, fontSize: s2 = `medium`, htmlColor: c2, inheritViewBox: l2 = false, titleAccess: u2, viewBox: d2 = `0 0 24 24`} = _a2, f2 = __objRest(_a2, ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"]), m2 = p(r2) && r2.type === `svg`, h2 = __spreadProps(__spreadValues({}, n2), {color: a2, component: o2, fontSize: s2, instanceFontSize: e4.fontSize, inheritViewBox: l2, viewBox: d2, hasSvgAsChild: m2}), g2 = {};
  l2 || (g2.viewBox = d2);
  let _2 = In(h2);
  return b(Ln, __spreadProps(__spreadValues(__spreadValues(__spreadValues({as: o2, className: K(_2.root, i2), focusable: `false`, color: c2, "aria-hidden": !u2 || void 0, role: u2 ? `img` : void 0, ref: t2}, g2), f2), m2 && r2.props), {ownerState: h2, children: [m2 ? r2.props.children : r2, u2 ? v(`title`, {children: u2}) : null]}));
});
Rn.muiName = `SvgIcon`;
function zn(e4, t2) {
  function n2(t3, n3) {
    return v(Rn, __spreadProps(__spreadValues({"data-testid": void 0, ref: n3}, t3), {children: e4}));
  }
  return n2.muiName = Rn.muiName, C(m(n2));
}
var Bn = ie, Vn = Wt;
function Hn(e4, t2) {
  typeof e4 == `function` ? e4(t2) : e4 && (e4.current = t2);
}
var Un = te;
function Wn(e4) {
  let {controlled: t2, default: n2, name: r2, state: i2 = `value`} = e4, {current: a2} = o(t2 !== void 0), [s2, c2] = g(n2);
  return [a2 ? t2 : s2, T((e5) => {
    a2 || c2(e5);
  }, [])];
}
var Gn = Ht;
function Kn(e4, t2) {
  let n2 = e4.charCodeAt(2);
  return e4[0] === `o` && e4[1] === `n` && n2 >= 65 && n2 <= 90 && typeof t2 == `function`;
}
var qn = {};
function Jn(e4, t2) {
  let n2 = o(qn);
  return n2.current === qn && (n2.current = e4(t2)), n2;
}
function Yn(e4) {
  let t2 = Jn(() => Xn(e4)).current;
  return t2.next = e4, D(t2.effect), t2;
}
function Xn(e4) {
  let t2 = {current: e4, next: e4, effect: () => {
    t2.current = t2.next;
  }};
  return t2;
}
var Zn = i.createContext(null);
function Qn(e4) {
  if (e4 == null)
    return {appear: void 0, enter: void 0, exit: void 0};
  if (typeof e4 == `number`)
    return {appear: e4, enter: e4, exit: e4};
  let t2 = e4.enter, n2 = e4.exit;
  return {appear: e4.appear === void 0 ? t2 : e4.appear, enter: t2, exit: n2};
}
function $n(e4) {
  if (e4.autoTimeout != null)
    return e4.autoTimeout;
  let t2 = Qn(e4.timeout);
  return e4.currentStatus === `entering` ? e4.isAppearing ? t2.appear ?? t2.enter ?? null : t2.enter ?? null : t2.exit ?? null;
}
function er(e4) {
  let _a2 = e4, {in: t2 = false, appear: n2 = false, enter: r2 = true, exit: i2 = true, mountOnEnter: a2 = false, unmountOnExit: s2 = false, timeout: c2, addEndListener: u2, reduceMotion: d2 = false, getAutoTimeout: f2, nodeRef: p2, onEnter: m2, onEntering: h2, onEntered: _2, onExit: y2, onExiting: b2, onExited: x2, children: S2} = _a2, C2 = __objRest(_a2, ["in", "appear", "enter", "exit", "mountOnEnter", "unmountOnExit", "timeout", "addEndListener", "reduceMotion", "getAutoTimeout", "nodeRef", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "children"]), w2 = l(Zn), E2 = w2 && !w2.isMounting ? r2 : n2, [O2, k2] = g(() => t2 ? E2 ? `exited` : `entered` : a2 || s2 ? `unmounted` : `exited`), A2 = o(O2);
  A2.current = O2, t2 && O2 === `unmounted` && (A2.current = `exited`, k2(`exited`));
  let j2 = o(t2 && E2), M2 = o(false), N2 = o(null), P2 = o(O2), F2 = o(false), I2 = o(d2), L2 = Yn({timeout: c2, addEndListener: u2, reduceMotion: d2, getAutoTimeout: f2, onEnter: m2, onEntering: h2, onEntered: _2, onExit: y2, onExiting: b2, onExited: x2, enter: r2, exit: i2, mountOnEnter: a2, unmountOnExit: s2, nodeRef: p2, parentGroup: w2}), R2 = T(() => {
    N2.current !== null && (N2.current.cancel(), N2.current = null);
  }, []), z2 = T((e5) => {
    let t3 = true, n3 = () => {
      t3 && (t3 = false, N2.current = null, e5());
    };
    return n3.cancel = () => {
      t3 = false;
    }, N2.current = n3, n3;
  }, []), B2 = T((e5, t3) => {
    let n3, r3 = () => {
      n3 !== void 0 && (clearTimeout(n3), n3 = void 0);
    }, i3 = z2(() => {
      r3(), A2.current = e5, k2(e5);
    }), a3 = i3.cancel;
    i3.cancel = () => {
      r3(), a3();
    };
    let o2 = L2.current.nodeRef.current, s3 = L2.current.addEndListener, c3 = L2.current.getAutoTimeout !== void 0, l2 = L2.current.getAutoTimeout?.(), u3 = $n({currentStatus: t3, isAppearing: F2.current, timeout: L2.current.timeout, autoTimeout: l2}), d3 = I2.current, f3 = u3 ?? (d3 && c3 ? 0 : null), p3 = (e6) => {
      n3 = setTimeout(i3, e6);
    };
    o2 ? s3 ? (f3 != null && p3(d3 ? 0 : f3), s3.length >= 2 ? s3(o2, i3) : s3(i3)) : p3(d3 ? 0 : u3 ?? 0) : p3(0);
  }, [z2, L2]), ee2 = T((e5) => {
    let t3 = L2.current, n3 = t3.parentGroup ? t3.parentGroup.isMounting : e5;
    F2.current = n3, !e5 && !t3.enter ? (A2.current = `entered`, k2(`entered`)) : (I2.current = t3.reduceMotion, t3.onEnter?.(n3), A2.current = `entering`, k2(`entering`));
  }, [L2]), te2 = T(() => {
    let e5 = L2.current;
    e5.exit ? (I2.current = e5.reduceMotion, e5.onExit?.(), A2.current = `exiting`, k2(`exiting`)) : (A2.current = `exited`, k2(`exited`));
  }, [L2]), V2 = T((e5, t3) => {
    if (R2(), t3 === `entering`) {
      let t4 = L2.current;
      if (t4.mountOnEnter || t4.unmountOnExit) {
        let e6 = t4.nodeRef.current;
        e6 && ln(e6);
      }
      ee2(e5);
    } else
      te2();
  }, [R2, ee2, te2, L2]);
  return D(() => (M2.current = true, j2.current && (j2.current = false, V2(true, `entering`)), () => {
    M2.current = false, R2();
  }), [R2, V2]), D(() => {
    if (!M2.current)
      return;
    let e5 = A2.current;
    t2 ? e5 !== `entering` && e5 !== `entered` && V2(false, `entering`) : e5 === `entering` || e5 === `entered` ? V2(false, `exiting`) : e5 === `exited` && s2 && (A2.current = `unmounted`, k2(`unmounted`));
  }, [t2, O2, s2, V2]), D(() => {
    if (O2 === `unmounted` || P2.current === `unmounted`) {
      P2.current = O2;
      return;
    }
    let e5 = P2.current !== O2;
    e5 && (P2.current = O2);
    let t3 = L2.current;
    O2 === `entering` ? (e5 && t3.onEntering?.(F2.current), N2.current === null && A2.current === O2 && B2(`entered`, `entering`)) : O2 === `exiting` ? (e5 && t3.onExiting?.(), N2.current === null && A2.current === O2 && B2(`exited`, `exiting`)) : O2 === `entered` && e5 ? t3.onEntered?.(F2.current) : O2 === `exited` && e5 && t3.onExited?.();
  }, [L2, B2, O2]), O2 === `unmounted` ? null : v(Zn.Provider, {value: null, children: S2(O2, C2)});
}
var tr = `(prefers-reduced-motion: reduce)`, nr = 0, rr = `0ms`, ir = () => {
}, ar = () => false, or = () => true, sr = () => ir;
function cr(e4) {
  let [t2, n2] = g(() => ({enabled: e4, matches: e4 ? null : false})), r2 = t2.matches;
  return t2.enabled !== e4 && (r2 = null, e4 || (r2 = false)), D(() => {
    let r3 = (t3) => {
      n2((n3) => n3.enabled === e4 && n3.matches === t3 ? n3 : {enabled: e4, matches: t3});
    };
    if (!e4) {
      t2.enabled && r3(false);
      return;
    }
    if (typeof window > `u` || typeof window.matchMedia != `function`) {
      r3(false);
      return;
    }
    let i2 = window.matchMedia(tr), a2 = () => {
      r3(i2.matches);
    };
    return a2(), i2.addEventListener(`change`, a2), () => {
      i2.removeEventListener(`change`, a2);
    };
  }, [e4, t2.enabled]), r2;
}
var lr = __spreadValues({}, a).useSyncExternalStore;
function ur(e4) {
  let t2 = e4 ? or : ar, [r2, i2] = n(() => {
    if (!e4 || typeof window > `u` || typeof window.matchMedia != `function`)
      return [ar, sr];
    let t3 = window.matchMedia(tr);
    return [() => t3.matches, (e5) => (t3.addEventListener(`change`, e5), () => {
      t3.removeEventListener(`change`, e5);
    })];
  }, [e4]);
  return lr(i2, r2, t2);
}
var dr = lr === void 0 ? cr : ur;
function fr(e4, t2) {
  let r2 = dr(!t2 && e4 === `system`), i2 = !t2 && (e4 === `always` || e4 === `system` && r2 !== false);
  return n(() => ({shouldReduceMotion: i2, getTransitionTiming(e5) {
    return i2 ? {duration: nr, delay: rr} : e5;
  }}), [i2]);
}
function pr(e4, t2, n2) {
  return e4 === void 0 || Bt(e4) ? t2 : __spreadProps(__spreadValues({}, t2), {ownerState: __spreadValues(__spreadValues({}, t2.ownerState), n2)});
}
function mr(e4, t2, n2) {
  return typeof e4 == `function` ? e4(t2, n2) : e4;
}
function hr(e4) {
  if (e4 === void 0)
    return {};
  let t2 = {}, n2 = Object.keys(e4);
  for (let r2 = 0; r2 < n2.length; r2 += 1) {
    let i2 = n2[r2];
    Kn(i2, e4[i2]) && (t2[i2] = e4[i2]);
  }
  return t2;
}
function gr(e4) {
  if (e4 === void 0)
    return {};
  let t2 = {}, n2 = Object.keys(e4);
  for (let r2 = 0; r2 < n2.length; r2 += 1) {
    let i2 = n2[r2];
    Kn(i2, e4[i2]) || (t2[i2] = e4[i2]);
  }
  return t2;
}
function _r(e4) {
  let {getSlotProps: t2, additionalProps: n2, externalSlotProps: r2, externalForwardedProps: i2, className: a2} = e4;
  if (!t2) {
    let e5 = K(n2?.className, a2, i2?.className, r2?.className), t3 = __spreadValues(__spreadValues(__spreadValues({}, n2), i2), r2);
    if (e5.length > 0 && (t3.className = e5), n2?.style || i2?.style || r2?.style) {
      let e6 = __spreadValues(__spreadValues(__spreadValues({}, n2?.style), i2?.style), r2?.style);
      Object.keys(e6).length > 0 && (t3.style = e6);
    }
    return {props: t3, internalRef: void 0};
  }
  let o2 = hr(__spreadValues(__spreadValues({}, i2), r2)), s2 = gr(r2), c2 = gr(i2), l2 = t2(o2), u2 = K(l2?.className, n2?.className, a2, i2?.className, r2?.className), d2 = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, l2), n2), c2), s2);
  if (u2.length > 0 && (d2.className = u2), l2?.style || n2?.style || i2?.style || r2?.style) {
    let e5 = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, l2?.style), n2?.style), i2?.style), r2?.style);
    Object.keys(e5).length > 0 && (d2.style = e5);
  }
  return {props: d2, internalRef: l2.ref};
}
function vr(e4, t2) {
  let _a2 = t2, {className: n2, elementType: r2, ownerState: i2, externalForwardedProps: a2, internalForwardedProps: o2, shouldForwardComponentProp: s2 = false} = _a2, c2 = __objRest(_a2, ["className", "elementType", "ownerState", "externalForwardedProps", "internalForwardedProps", "shouldForwardComponentProp"]), _b = a2, {component: l2, slots: u2 = {[e4]: void 0}, slotProps: d2 = {[e4]: void 0}} = _b, f2 = __objRest(_b, ["component", "slots", "slotProps"]), p2 = u2[e4] || r2, m2 = mr(d2[e4], i2), _c2 = _r(__spreadProps(__spreadValues({className: n2}, c2), {externalForwardedProps: e4 === `root` ? f2 : void 0, externalSlotProps: m2})), {props: _d} = _c2, _e2 = _d, {component: h2} = _e2, g2 = __objRest(_e2, ["component"]), {internalRef: _2} = _c2, v2 = Vt(_2, m2?.ref, t2.ref), y2 = e4 === `root` ? h2 || l2 : h2;
  return [p2, pr(p2, __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, e4 === `root` && !l2 && !u2[e4] && o2), e4 !== `root` && !u2[e4] && o2), g2), y2 && !s2 && {as: y2}), y2 && s2 && {component: y2}), {ref: v2}), i2)];
}
function yr(e4) {
  return B(`MuiPaper`, e4);
}
var br = L(`MuiPaper`, `root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24`.split(`.`)), xr = (e4) => {
  let {square: t2, elevation: n2, variant: r2, classes: i2} = e4, a2 = {root: [`root`, r2, !t2 && `rounded`, r2 === `elevation` && `elevation${n2}`]};
  return G(a2, yr, i2);
}, Sr = Y(`div`, {name: `MuiPaper`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[n2.variant], !n2.square && t2.rounded, n2.variant === `elevation` && t2[`elevation${n2.elevation}`]];
}})(X(({theme: e4}) => __spreadProps(__spreadValues({backgroundColor: (e4.vars || e4).palette.background.paper, color: (e4.vars || e4).palette.text.primary}, Cn(e4, `box-shadow`)), {variants: [{props: ({ownerState: e5}) => !e5.square, style: {borderRadius: (e4.vars || e4).shape.borderRadius}}, {props: {variant: `outlined`}, style: {border: `1px solid ${(e4.vars || e4).palette.divider}`}}, {props: {variant: `elevation`}, style: {boxShadow: `var(--Paper-shadow)`, backgroundImage: `var(--Paper-overlay)`}}]}))), Cr = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiPaper`}), r2 = Yt(), _a2 = n2, {className: i2, component: a2 = `div`, elevation: o2 = 1, square: s2 = false, variant: c2 = `elevation`} = _a2, l2 = __objRest(_a2, ["className", "component", "elevation", "square", "variant"]), u2 = __spreadProps(__spreadValues({}, n2), {component: a2, elevation: o2, square: s2, variant: c2}), d2 = xr(u2);
  return v(Sr, __spreadProps(__spreadValues({as: a2, ownerState: u2, className: K(d2.root, i2), ref: t2}, l2), {style: __spreadValues(__spreadValues({}, c2 === `elevation` && __spreadValues(__spreadValues({"--Paper-shadow": (r2.vars || r2).shadows[o2]}, r2.vars && {"--Paper-overlay": r2.vars.overlays?.[o2]}), !r2.vars && r2.palette.mode === `dark` && {"--Paper-overlay": `linear-gradient(${N(`#fff`, St(o2))}, ${N(`#fff`, St(o2))})`})), l2.style)}));
});
function wr(e4) {
  try {
    return e4.matches(`:focus-visible`);
  } catch {
  }
  return false;
}
function Tr(e4) {
  let {focusableWhenDisabled: t2, disabled: r2, composite: i2 = false, tabIndex: a2 = 0, isNativeButton: o2} = e4, s2 = i2 && t2 !== false, c2 = i2 && t2 === false;
  return n(() => {
    let e5 = {onKeyDown(e6) {
      r2 && t2 && e6.key !== `Tab` && e6.preventDefault();
    }};
    return i2 || (e5.tabIndex = a2, !o2 && r2 && (e5.tabIndex = t2 ? a2 : -1)), (o2 && (t2 || s2) || !o2 && r2) && (e5[`aria-disabled`] = r2), o2 && (!t2 || c2) && (e5.disabled = r2), e5;
  }, [i2, r2, t2, s2, c2, o2, a2]);
}
var Er = {};
function Dr(e4) {
  let {nativeButton: t2, nativeButtonProp: r2, internalNativeButton: i2 = t2, allowInferredHostMismatch: a2 = false, disabled: s2, type: c2, hasFormAction: l2 = false, tabIndex: u2 = 0, focusableWhenDisabled: d2, stopEventPropagation: f2 = false, onBeforeKeyDown: p2, onBeforeKeyUp: m2} = e4, h2 = o(null), g2 = d2 === true, _2 = Tr({focusableWhenDisabled: g2, disabled: s2, isNativeButton: t2, tabIndex: u2}), v2 = T(() => {
    let e5 = h2.current;
    return e5 == null ? t2 : e5.tagName === `BUTTON` || !!(e5.tagName === `A` && e5.href);
  }, [t2]), y2 = n(() => {
    let e5 = g2 ? {} : {tabIndex: s2 ? -1 : u2};
    return t2 ? (e5.type = c2 === void 0 && !l2 ? `button` : c2, g2 || (e5.disabled = s2)) : (e5.role = `button`, !g2 && s2 && (e5[`aria-disabled`] = s2)), g2 ? __spreadValues(__spreadValues({}, e5), _2) : e5;
  }, [s2, g2, _2, l2, t2, u2, c2]);
  return {getButtonProps: T((e5 = Er) => {
    let _a2 = e5, {onClick: t3, onKeyDown: n2, onKeyUp: r3} = _a2, i3 = __objRest(_a2, ["onClick", "onKeyDown", "onKeyUp"]), a3 = (e6) => {
      f2 && e6.stopPropagation(), s2 ? e6.preventDefault() : t3?.(e6);
    }, o2 = (e6) => {
      g2 && _2.onKeyDown(e6), !s2 && (p2?.(e6), n2?.(e6), !(e6.target !== e6.currentTarget || v2()) && (e6.key === ` ` ? e6.preventDefault() : e6.key === `Enter` && (e6.preventDefault(), e6.currentTarget.click())));
    }, c3 = (e6) => {
      s2 || (m2?.(e6), r3?.(e6), e6.target === e6.currentTarget && !v2() && e6.key === ` ` && !e6.defaultPrevented && e6.currentTarget.click());
    };
    return __spreadProps(__spreadValues(__spreadValues({}, y2), i3), {onClick: a3, onKeyDown: o2, onKeyUp: c3});
  }, [y2, s2, g2, _2, v2, p2, m2, f2]), rootRef: h2};
}
var Or = class e2 {
  ref = {current: null};
  shouldMount = false;
  mounted = null;
  didMount = false;
  setShouldMount = null;
  static create() {
    return new e2();
  }
  static use() {
    let t2 = Jn(e2.create).current, [n2, r2] = g(false);
    return t2.shouldMount = n2, t2.setShouldMount = r2, s(t2.mountEffect, [n2]), t2;
  }
  mount() {
    return this.mounted || (this.mounted = Ar(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && (this.ref.current !== null && (this.didMount = true), this.mounted.resolve());
  };
  start(...e4) {
    this.mount().then(() => this.ref.current?.start(...e4));
  }
  stop(...e4) {
    this.mount().then(() => this.ref.current?.stop(...e4));
  }
  pulsate(...e4) {
    this.mount().then(() => this.ref.current?.pulsate(...e4));
  }
};
function kr() {
  return Or.use();
}
function Ar() {
  let e4, t2, n2 = new Promise((n3, r2) => {
    e4 = n3, t2 = r2;
  });
  return n2.resolve = e4, n2.reject = t2, n2;
}
var jr = [];
function Mr(e4) {
  s(e4, jr);
}
var Nr = class e3 {
  static create() {
    return new e3();
  }
  currentId = null;
  start(e4, t2) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, t2();
    }, e4);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
};
function Pr() {
  let e4 = Jn(Nr.create).current;
  return Mr(e4.disposeEffect), e4;
}
function Fr(e4) {
  let {className: t2, classes: n2, pulsate: r2 = false, rippleX: i2, rippleY: a2, rippleSize: c2, in: l2, onExited: u2, timeout: d2} = e4, [f2, p2] = g(false), m2 = Pr(), h2 = o(false), _2 = o(u2);
  _2.current = u2;
  let y2 = u2 != null, b2 = K(t2, n2.ripple, n2.rippleVisible, r2 && n2.ripplePulsate), x2 = {width: c2, height: c2, top: -(c2 / 2) + a2, left: -(c2 / 2) + i2}, S2 = K(n2.child, f2 && n2.childLeaving, r2 && n2.childPulsate);
  return !l2 && !f2 && p2(true), s(() => {
    !l2 && y2 ? h2.current || (h2.current = true, m2.start(d2, () => {
      h2.current = false, _2.current?.();
    })) : (h2.current = false, m2.clear());
  }, [m2, y2, l2, d2]), v(`span`, {className: b2, style: x2, children: v(`span`, {className: S2})});
}
function Ir(e4) {
  return B(`MuiTouchRipple`, e4);
}
var Lr = L(`MuiTouchRipple`, [`root`, `ripple`, `rippleVisible`, `ripplePulsate`, `child`, `childLeaving`, `childPulsate`]), Rr = 550, zr = {}, Br = [], Vr = () => {
};
function Hr(e4, t2) {
  let n2 = new Set(t2), r2 = new Map(), i2 = [];
  for (let t3 of e4)
    n2.has(t3) ? i2.length > 0 && (r2.set(t3, i2), i2 = []) : i2.push(t3);
  let a2 = [];
  for (let e5 of t2) {
    let t3 = r2.get(e5);
    t3 && a2.push(...t3), a2.push(e5);
  }
  return a2.push(...i2), a2;
}
function Ur({event: e4, element: t2, center: n2}) {
  let r2 = t2 ? t2.getBoundingClientRect() : {width: 0, height: 0, left: 0, top: 0}, i2, a2;
  if (n2 || e4 === void 0 || e4.clientX === 0 && e4.clientY === 0 || !e4.clientX && !e4.touches)
    i2 = Math.round(r2.width / 2), a2 = Math.round(r2.height / 2);
  else {
    let {clientX: t3, clientY: n3} = e4.touches && e4.touches.length > 0 ? e4.touches[0] : e4;
    i2 = Math.round(t3 - r2.left), a2 = Math.round(n3 - r2.top);
  }
  let o2;
  if (n2)
    o2 = Math.sqrt((2 * r2.width ** 2 + r2.height ** 2) / 3), o2 % 2 == 0 && (o2 += 1);
  else {
    let e5 = Math.max(Math.abs((t2 ? t2.clientWidth : 0) - i2), i2) * 2 + 2, n3 = Math.max(Math.abs((t2 ? t2.clientHeight : 0) - a2), a2) * 2 + 2;
    o2 = Math.sqrt(e5 ** 2 + n3 ** 2);
  }
  return {rippleX: i2, rippleY: a2, rippleSize: o2};
}
var Wr = c`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Gr = c`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Kr = c`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
function qr(e4) {
  if (e4.motion.reducedMotion === `always`)
    return null;
  let t2 = r`
    &.${Lr.rippleVisible} {
      animation-name: ${Wr};
      animation-duration: ${Rr}ms;
      animation-timing-function: ${e4.transitions.easing.easeInOut};
    }

    &.${Lr.ripplePulsate} {
      animation-duration: ${e4.transitions.duration.shorter}ms;
    }

    & .${Lr.childLeaving} {
      animation-name: ${Gr};
      animation-duration: ${Rr}ms;
      animation-timing-function: ${e4.transitions.easing.easeInOut};
    }

    & .${Lr.childPulsate} {
      animation-name: ${Kr};
      animation-duration: 2500ms;
      animation-timing-function: ${e4.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e4.motion.reducedMotion === `system` ? r`
      @media (prefers-reduced-motion: no-preference) {
        ${t2}
      }
    ` : t2;
}
var Jr = Y(`span`, {name: `MuiTouchRipple`, slot: `Root`})({overflow: `hidden`, pointerEvents: `none`, position: `absolute`, zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: `inherit`}), Yr = Y(Fr, {name: `MuiTouchRipple`, slot: `Ripple`})`
  opacity: 0;
  position: absolute;

  &.${Lr.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${Lr.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Lr.childLeaving} {
    opacity: 0;
  }

  & .${Lr.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme: e4}) => qr(e4)}
`, Xr = m(function(e4, n2) {
  let r2 = Z({props: e4, name: `MuiTouchRipple`}), i2 = fr(Yt().motion.reducedMotion, false), _a2 = r2, {center: a2 = false, classes: c2 = zr, className: l2} = _a2, u2 = __objRest(_a2, ["center", "classes", "className"]), [d2, f2] = g({items: Br, order: Br}), p2 = d2.items, m2 = o(0), h2 = o(null), _2 = o(false);
  Mr(() => (_2.current = true, () => {
    _2.current = false;
  })), s(() => {
    h2.current && (h2.current = (h2.current(), null));
  }, [p2]);
  let y2 = o(false), b2 = Pr(), x2 = o(null), S2 = o(null), C2 = Gn((e5) => {
    _2.current && f2((t2) => {
      let n3 = t2.items.filter((t3) => t3.key !== e5);
      return {items: n3, order: Hr(t2.order.filter((t3) => t3 !== e5), n3.filter((e6) => !e6.exiting).map((e6) => e6.key))};
    });
  }), w2 = Gn((e5) => {
    let {pulsate: t2, rippleX: n3, rippleY: r3, rippleSize: i3, cb: a3} = e5, o2 = m2.current;
    m2.current += 1, f2((e6) => {
      let a4 = [...e6.items, {key: o2, pulsate: t2, rippleX: n3, rippleY: r3, rippleSize: i3, exiting: false}];
      return {items: a4, order: Hr(e6.order, a4.filter((e7) => !e7.exiting).map((e7) => e7.key))};
    }), h2.current = a3;
  }), T2 = Gn((e5 = zr, t2 = zr, n3 = Vr) => {
    let {pulsate: r3 = false, center: i3 = a2 || t2.pulsate, fakeElement: o2 = false} = t2;
    if (e5?.type === `mousedown` && y2.current) {
      y2.current = false;
      return;
    }
    e5?.type === `touchstart` && (y2.current = true);
    let {rippleX: s2, rippleY: c3, rippleSize: l3} = Ur({event: e5, element: o2 ? null : S2.current, center: i3});
    e5?.touches ? x2.current === null && (x2.current = () => {
      w2({pulsate: r3, rippleX: s2, rippleY: c3, rippleSize: l3, cb: n3});
    }, b2.start(80, () => {
      x2.current && (x2.current = (x2.current(), null));
    })) : w2({pulsate: r3, rippleX: s2, rippleY: c3, rippleSize: l3, cb: n3});
  }), E2 = Gn(() => {
    T2(zr, {pulsate: true});
  }), D2 = Gn((e5, t2) => {
    b2.clear(), e5?.type === `touchend` && x2.current ? (x2.current(), x2.current = null, b2.start(0, () => {
      D2(e5, t2);
    })) : (x2.current = null, f2((e6) => {
      let t3 = e6.items.findIndex((e7) => !e7.exiting);
      if (t3 === -1)
        return e6;
      let n3 = e6.items.slice();
      return n3[t3] = __spreadProps(__spreadValues({}, n3[t3]), {exiting: true}), {items: n3, order: Hr(e6.order, n3.filter((e7) => !e7.exiting).map((e7) => e7.key))};
    }), h2.current = t2);
  });
  t(n2, () => ({pulsate: E2, start: T2, stop: D2}), [E2, T2, D2]);
  let O2 = new Map(p2.map((e5) => [e5.key, e5])), k2 = d2.order.map((e5) => O2.get(e5)).filter(Boolean);
  return v(Jr, __spreadProps(__spreadValues({className: K(Lr.root, c2.root, l2), ref: S2}, u2), {children: k2.map((e5) => v(Yr, {classes: {ripple: K(c2.ripple, Lr.ripple), rippleVisible: K(c2.rippleVisible, Lr.rippleVisible), ripplePulsate: K(c2.ripplePulsate, Lr.ripplePulsate), child: K(c2.child, Lr.child), childLeaving: K(c2.childLeaving, Lr.childLeaving), childPulsate: K(c2.childPulsate, Lr.childPulsate)}, timeout: i2.shouldReduceMotion ? 0 : Rr, pulsate: e5.pulsate, rippleX: e5.rippleX, rippleY: e5.rippleY, rippleSize: e5.rippleSize, in: !e5.exiting, onExited: () => C2(e5.key)}, e5.key))}));
});
function Zr(e4) {
  return B(`MuiButtonBase`, e4);
}
var Qr = L(`MuiButtonBase`, [`root`, `disabled`, `focusVisible`]), $r = (e4) => {
  let {disabled: t2, focusVisible: n2, focusVisibleClassName: r2, suppressFocusVisible: i2, classes: a2} = e4, o2 = G({root: [`root`, t2 && `disabled`, n2 && !i2 && `focusVisible`]}, Zr, a2);
  return n2 && !i2 && r2 && (o2.root += ` ${r2}`), o2;
}, ei = Y(`button`, {name: `MuiButtonBase`, slot: `Root`})(X(({theme: e4}) => ({display: `inline-flex`, alignItems: `center`, justifyContent: `center`, position: `relative`, boxSizing: `border-box`, WebkitTapHighlightColor: `transparent`, backgroundColor: `transparent`, outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: `pointer`, userSelect: `none`, verticalAlign: `middle`, MozAppearance: `none`, WebkitAppearance: `none`, textDecoration: `none`, color: `inherit`, "&::-moz-focus-inner": {borderStyle: `none`}, [`&.${Qr.disabled}`]: {pointerEvents: `none`, cursor: `default`}, "@media print": {colorAdjust: `exact`}, variants: [{props: {internalDisabledThemeFocusVisible: false}, style: e4.focusVisible && __spreadProps(__spreadValues({}, Ve), {[`&.${Qr.focusVisible}`]: e4.focusVisible})}]}))), ti = m(function(e4, n2) {
  let r2 = Z({props: e4, name: `MuiButtonBase`}), _a2 = r2, {action: i2, centerRipple: a2 = false, children: o2, className: c2, component: l2 = `button`, disabled: u2 = false, disableRipple: d2 = false, disableTouchRipple: f2 = false, focusRipple: p2 = false, focusVisibleClassName: m2, focusableWhenDisabled: h2, suppressFocusVisible: _2 = false, internalNativeButton: y2, internalDisabledThemeFocusVisible: x2 = false, LinkComponent: S2 = `a`, nativeButton: C2, onBlur: w2, onClick: T2, onContextMenu: E2, onDragLeave: D2, onFocus: O2, onFocusVisible: k2, onKeyDown: A2, onKeyUp: j2, onMouseDown: M2, onMouseLeave: N2, onMouseUp: P2, onTouchEnd: F2, onTouchMove: I2, onTouchStart: L2, tabIndex: R2 = 0, TouchRippleProps: z2, touchRippleRef: B2, type: ee2} = _a2, te2 = __objRest(_a2, ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "focusableWhenDisabled", "suppressFocusVisible", "internalNativeButton", "internalDisabledThemeFocusVisible", "LinkComponent", "nativeButton", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"]), V2 = !!(te2.href || te2.to), H2 = !!te2.formAction, ne2 = l2;
  ne2 === `button` && V2 && (ne2 = S2);
  let re2 = typeof ne2 == `string` ? ne2 === `button` : y2 ?? false, U2 = C2 ?? re2, W2 = kr(), ie2 = Qt(W2.ref, B2), [ae2, oe2] = g(false);
  (u2 || _2) && ae2 && oe2(false);
  let se2 = Gn((e5) => {
    p2 && !e5.repeat && ae2 && e5.key === ` ` && W2.stop(e5, () => {
      W2.start(e5);
    });
  }), G2 = Gn((e5) => {
    p2 && e5.key === ` ` && ae2 && !e5.defaultPrevented && W2.stop(e5, () => {
      W2.pulsate(e5);
    });
  }), {getButtonProps: ce2, rootRef: le2} = Dr({nativeButton: U2, nativeButtonProp: C2, internalNativeButton: re2, allowInferredHostMismatch: V2 || typeof ne2 == `string`, disabled: u2, type: ee2, hasFormAction: H2, tabIndex: R2, onBeforeKeyDown: se2, onBeforeKeyUp: G2}), _b = ce2({onClick: T2, onKeyDown: A2, onKeyUp: j2}), {onClick: ue2, onKeyDown: de2, onKeyUp: fe2} = _b, pe2 = __objRest(_b, ["onClick", "onKeyDown", "onKeyUp"]);
  t(i2, () => ({focusVisible: () => {
    oe2(true), le2.current.focus();
  }}), [le2]);
  let me2 = W2.shouldMount && !d2 && !u2;
  s(() => {
    ae2 && p2 && !d2 && W2.pulsate();
  }, [d2, p2, ae2, W2]);
  let he2 = ni(W2, `start`, M2, f2), ge2 = ni(W2, `stop`, E2, f2), _e2 = ni(W2, `stop`, D2, f2), ve2 = ni(W2, `stop`, P2, f2), ye2 = ni(W2, `stop`, (e5) => {
    ae2 && e5.preventDefault(), N2 && N2(e5);
  }, f2), be2 = ni(W2, `start`, L2, f2), xe2 = ni(W2, `stop`, F2, f2), Se2 = ni(W2, `stop`, I2, f2), Ce2 = ni(W2, `stop`, (e5) => {
    wr(e5.target) || oe2(false), w2 && w2(e5);
  }, false), we2 = Gn((e5) => {
    le2.current || (le2.current = e5.currentTarget), !_2 && wr(e5.target) && (oe2(true), k2 && k2(e5)), O2 && O2(e5);
  }), Te2 = {};
  V2 && (Te2.tabIndex = u2 ? -1 : R2, u2 && (Te2[`aria-disabled`] = u2), Te2.type = ee2);
  let Ee2 = Qt(n2, le2), De2 = __spreadProps(__spreadValues({}, r2), {centerRipple: a2, component: l2, disabled: u2, disableRipple: d2, disableTouchRipple: f2, focusRipple: p2, suppressFocusVisible: _2, tabIndex: R2, focusVisible: ae2, internalDisabledThemeFocusVisible: x2}), Oe2 = $r(De2);
  return b(ei, __spreadProps(__spreadValues(__spreadValues({as: ne2, className: K(Oe2.root, c2), ownerState: De2, onBlur: Ce2, onClick: ue2, onContextMenu: ge2, onFocus: we2, onKeyDown: de2, onKeyUp: fe2, onMouseDown: he2, onMouseLeave: ye2, onMouseUp: ve2, onDragLeave: _e2, onTouchEnd: xe2, onTouchMove: Se2, onTouchStart: be2, ref: Ee2}, V2 ? Te2 : pe2), te2), {children: [o2, me2 ? v(Xr, __spreadValues({ref: ie2, center: a2}, z2)) : null]}));
});
function ni(e4, t2, n2, r2 = false) {
  return Gn((i2) => (n2 && n2(i2), r2 || e4[t2](i2), true));
}
function ri(e4) {
  return typeof e4.main == `string`;
}
function ii(e4, t2 = []) {
  if (!ri(e4))
    return false;
  for (let n2 of t2)
    if (!e4.hasOwnProperty(n2) || typeof e4[n2] != `string`)
      return false;
  return true;
}
function ai(e4 = []) {
  return ([, t2]) => t2 && ii(t2, e4);
}
function oi(e4) {
  return B(`MuiCircularProgress`, e4);
}
var si = L(`MuiCircularProgress`, [`root`, `determinate`, `indeterminate`, `colorPrimary`, `colorSecondary`, `svg`, `track`, `circle`, `circleDisableShrink`]), ci = 44, li = c`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ui = c`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, di = typeof li == `string` ? null : r`
        animation: ${li} 1.4s linear infinite;
      `, fi = typeof ui == `string` ? null : r`
        animation: ${ui} 1.4s ease-in-out infinite;
      `, pi = (e4) => {
  let {classes: t2, variant: n2, color: r2, disableShrink: i2} = e4, a2 = {root: [`root`, n2, `color${Q(r2)}`], svg: [`svg`], track: [`track`], circle: [`circle`, i2 && `circleDisableShrink`]};
  return G(a2, oi, t2);
}, mi = Y(`span`, {name: `MuiCircularProgress`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[n2.variant], t2[`color${Q(n2.color)}`]];
}})(X(({theme: e4}) => {
  let t2 = Sn(e4, {animation: `none`});
  return {display: `inline-block`, variants: [{props: {variant: `determinate`}, style: __spreadValues({}, Cn(e4, `transform`))}, {props: {variant: `indeterminate`}, style: di || {animation: `${li} 1.4s linear infinite`}}, ...t2 ? [{props: {variant: `indeterminate`}, style: t2}] : [], ...Object.entries(e4.palette).filter(ai()).map(([t3]) => ({props: {color: t3}, style: {color: (e4.vars || e4).palette[t3].main}}))]};
})), hi = Y(`svg`, {name: `MuiCircularProgress`, slot: `Svg`})({display: `block`}), gi = Y(`circle`, {name: `MuiCircularProgress`, slot: `Circle`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.circle, n2.disableShrink && t2.circleDisableShrink];
}})(X(({theme: e4}) => {
  let t2 = Sn(e4, {animation: `none`});
  return {stroke: `currentColor`, variants: [{props: {variant: `determinate`}, style: __spreadValues({}, Cn(e4, `stroke-dashoffset`))}, {props: {variant: `indeterminate`}, style: {strokeDasharray: `80px, 200px`, strokeDashoffset: 0}}, {props: ({ownerState: e5}) => e5.variant === `indeterminate` && !e5.disableShrink, style: fi || {animation: `${ui} 1.4s ease-in-out infinite`}}, ...t2 ? [{props: ({ownerState: e5}) => e5.variant === `indeterminate` && !e5.disableShrink, style: t2}] : []]};
})), _i = Y(`circle`, {name: `MuiCircularProgress`, slot: `Track`})(X(({theme: e4}) => ({stroke: `currentColor`, opacity: (e4.vars || e4).palette.action.activatedOpacity}))), vi = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiCircularProgress`}), _a2 = n2, {className: r2, color: i2 = `primary`, disableShrink: a2 = false, enableTrackSlot: o2 = false, min: s2, max: c2, size: l2 = 40, style: u2, thickness: d2 = 3.6, value: f2 = n2.min ?? 0, variant: p2 = `indeterminate`} = _a2, m2 = __objRest(_a2, ["className", "color", "disableShrink", "enableTrackSlot", "min", "max", "size", "style", "thickness", "value", "variant"]), h2 = s2 ?? 0, g2 = c2 ?? 100, _2 = __spreadProps(__spreadValues({}, n2), {color: i2, disableShrink: a2, size: l2, thickness: d2, value: f2, variant: p2, enableTrackSlot: o2}), y2 = pi(_2), x2 = {}, S2 = {}, C2 = {};
  if (p2 === `determinate`) {
    let e5 = 2 * Math.PI * ((ci - d2) / 2), t3 = g2 - h2;
    x2.strokeDasharray = e5.toFixed(3), x2.strokeDashoffset = t3 > 0 ? `${((g2 - f2) / t3 * e5).toFixed(3)}px` : `${e5.toFixed(3)}px`, S2.transform = `rotate(-90deg)`, C2[`aria-valuenow`] = f2, C2[`aria-valuemin`] = h2, C2[`aria-valuemax`] = g2;
  }
  return v(mi, __spreadProps(__spreadValues(__spreadValues({className: K(y2.root, r2), style: __spreadValues(__spreadValues({width: l2, height: l2}, S2), u2), ownerState: _2, ref: t2, role: `progressbar`}, C2), m2), {children: b(hi, {className: y2.svg, ownerState: _2, viewBox: `${ci / 2} ${ci / 2} ${ci} ${ci}`, children: [o2 ? v(_i, {className: y2.track, ownerState: _2, cx: ci, cy: ci, r: (ci - d2) / 2, fill: `none`, strokeWidth: d2, "aria-hidden": `true`}) : null, v(gi, {className: y2.circle, style: x2, ownerState: _2, cx: ci, cy: ci, r: (ci - d2) / 2, fill: `none`, strokeWidth: d2})]})}));
});
function yi(e4) {
  return B(`MuiIconButton`, e4);
}
var bi = L(`MuiIconButton`, [`root`, `disabled`, `colorInherit`, `colorPrimary`, `colorSecondary`, `colorError`, `colorInfo`, `colorSuccess`, `colorWarning`, `edgeStart`, `edgeEnd`, `sizeSmall`, `sizeMedium`, `sizeLarge`, `loading`, `loadingIndicator`, `loadingWrapper`]), xi = (e4) => {
  let {classes: t2, disabled: n2, color: r2, edge: i2, size: a2, loading: o2} = e4, s2 = {root: [`root`, o2 && `loading`, n2 && `disabled`, r2 !== "default" && `color${Q(r2)}`, i2 && `edge${Q(i2)}`, `size${Q(a2)}`], loadingIndicator: [`loadingIndicator`], loadingWrapper: [`loadingWrapper`]};
  return G(s2, yi, t2);
}, Si = Y(ti, {name: `MuiIconButton`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.loading && t2.loading, n2.color !== "default" && t2[`color${Q(n2.color)}`], n2.edge && t2[`edge${Q(n2.edge)}`], t2[`size${Q(n2.size)}`]];
}})(X(({theme: e4}) => __spreadProps(__spreadValues({textAlign: `center`, flex: `0 0 auto`, fontSize: e4.typography.pxToRem(24), padding: 8, borderRadius: `50%`, color: (e4.vars || e4).palette.action.active}, Cn(e4, `background-color`, {duration: e4.transitions.duration.shortest})), {variants: [{props: (e5) => !e5.disableRipple, style: {"--IconButton-hoverBg": e4.alpha((e4.vars || e4).palette.action.active, (e4.vars || e4).palette.action.hoverOpacity), "&:hover": {backgroundColor: `var(--IconButton-hoverBg)`, "@media (hover: none)": {backgroundColor: `transparent`}}}}, {props: {edge: `start`}, style: {marginLeft: -12}}, {props: {edge: `start`, size: `small`}, style: {marginLeft: -3}}, {props: {edge: `end`}, style: {marginRight: -12}}, {props: {edge: `end`, size: `small`}, style: {marginRight: -3}}]})), X(({theme: e4}) => ({variants: [{props: {color: `inherit`}, style: {color: `inherit`}}, ...Object.entries(e4.palette).filter(ai()).map(([t2]) => ({props: {color: t2}, style: {color: (e4.vars || e4).palette[t2].main, "--IconButton-hoverBg": e4.alpha((e4.vars || e4).palette[t2].main, (e4.vars || e4).palette.action.hoverOpacity)}})), {props: {size: `small`}, style: {padding: 5, fontSize: e4.typography.pxToRem(18)}}, {props: {size: `large`}, style: {padding: 12, fontSize: e4.typography.pxToRem(28)}}], [`&.${bi.disabled}`]: {backgroundColor: `transparent`, color: (e4.vars || e4).palette.action.disabled}, [`&.${bi.loading}`]: {color: `transparent`}}))), Ci = Y(`span`, {name: `MuiIconButton`, slot: `LoadingIndicator`})(({theme: e4}) => ({display: `none`, position: `absolute`, visibility: `visible`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, color: (e4.vars || e4).palette.action.disabled, variants: [{props: {loading: true}, style: {display: `flex`}}]})), wi = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiIconButton`}), _a2 = n2, {edge: r2 = false, children: i2, className: a2, color: o2 = `default`, disabled: s2 = false, disableFocusRipple: c2 = false, size: l2 = `medium`, id: u2, loading: d2 = null, loadingIndicator: f2} = _a2, p2 = __objRest(_a2, ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size", "id", "loading", "loadingIndicator"]), m2 = Un(u2), h2 = f2 ?? v(vi, {"aria-labelledby": m2, color: `inherit`, size: 16}), g2 = __spreadProps(__spreadValues({}, n2), {edge: r2, color: o2, disabled: s2, disableFocusRipple: c2, loading: d2, loadingIndicator: h2, size: l2}), _2 = xi(g2);
  return b(Si, __spreadProps(__spreadValues({id: d2 ? m2 : u2, className: K(_2.root, a2), centerRipple: true, internalNativeButton: true, focusRipple: !c2, disabled: s2 || d2, ref: t2}, p2), {ownerState: g2, children: [typeof d2 == `boolean` && v(`span`, {className: _2.loadingWrapper, style: {display: `contents`}, children: v(Ci, {className: _2.loadingIndicator, ownerState: g2, children: d2 && h2})}), i2]}));
});
function Ti(e4) {
  return B(`MuiTypography`, e4);
}
var Ei = L(`MuiTypography`, [`root`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `inherit`, `button`, `caption`, `overline`, `alignLeft`, `alignRight`, `alignCenter`, `alignJustify`, `noWrap`, `gutterBottom`]), Di = (e4) => {
  let {align: t2, gutterBottom: n2, noWrap: r2, variant: i2, classes: a2} = e4, o2 = {root: [`root`, i2, e4.align !== `inherit` && `align${Q(t2)}`, n2 && `gutterBottom`, r2 && `noWrap`]};
  return G(o2, Ti, a2);
}, Oi = Y(`span`, {name: `MuiTypography`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.variant && t2[n2.variant], n2.align !== `inherit` && t2[`align${Q(n2.align)}`], n2.noWrap && t2.noWrap, n2.gutterBottom && t2.gutterBottom];
}})(X(({theme: e4}) => ({margin: 0, variants: [{props: {variant: `inherit`}, style: {font: `inherit`, lineHeight: `inherit`, letterSpacing: `inherit`}}, ...Object.entries(e4.typography).filter(([e5, t2]) => e5 !== `inherit` && t2 && typeof t2 == `object`).map(([e5, t2]) => ({props: {variant: e5}, style: t2})), ...Object.entries(e4.palette).filter(ai()).map(([t2]) => ({props: {color: t2}, style: {color: (e4.vars || e4).palette[t2].main}})), ...Object.entries(e4.palette?.text || {}).filter(([, e5]) => typeof e5 == `string`).map(([t2]) => ({props: {color: `text${Q(t2)}`}, style: {color: (e4.vars || e4).palette.text[t2]}})), {props: ({ownerState: e5}) => e5.align !== `inherit`, style: {textAlign: `var(--Typography-textAlign)`}}, {props: ({ownerState: e5}) => e5.noWrap, style: {overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap`}}, {props: ({ownerState: e5}) => e5.gutterBottom, style: {marginBottom: `0.35em`}}]}))), ki = {h1: `h1`, h2: `h2`, h3: `h3`, h4: `h4`, h5: `h5`, h6: `h6`, subtitle1: `h6`, subtitle2: `h6`, body1: `p`, body2: `p`, inherit: `p`}, Ai = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiTypography`}), _a2 = n2, {color: r2, align: i2 = `inherit`, className: a2, component: o2, gutterBottom: s2 = false, noWrap: c2 = false, variant: l2 = `body1`, variantMapping: u2 = ki} = _a2, d2 = __objRest(_a2, ["color", "align", "className", "component", "gutterBottom", "noWrap", "variant", "variantMapping"]), f2 = __spreadProps(__spreadValues({}, n2), {align: i2, color: r2, className: a2, component: o2, gutterBottom: s2, noWrap: c2, variant: l2, variantMapping: u2}), p2 = o2 || u2[l2] || ki[l2] || `span`, m2 = Di(f2);
  return v(Oi, __spreadProps(__spreadValues({as: p2, ref: t2, className: K(m2.root, a2)}, d2), {ownerState: f2, style: __spreadValues(__spreadValues({}, i2 !== `inherit` && {"--Typography-textAlign": i2}), d2.style)}));
});
function ji(e4, t2) {
  if (!e4 || !t2)
    return false;
  if (e4.contains(t2))
    return true;
  let n2 = t2.getRootNode?.();
  if (n2 && n2 instanceof ShadowRoot) {
    let n3 = t2;
    for (; n3; ) {
      if (e4 === n3)
        return true;
      n3 = n3.parentNode ?? n3.host ?? null;
    }
  }
  return false;
}
var Mi = `bottom`, Ni = `right`, Pi = `left`, Fi = `auto`, Ii = [`top`, Mi, Ni, Pi], Li = `start`, Ri = `clippingParents`, zi = `viewport`, Bi = `popper`, Vi = `reference`, Hi = Ii.reduce(function(e4, t2) {
  return e4.concat([t2 + `-` + Li, t2 + `-end`]);
}, []), Ui = [].concat(Ii, [Fi]).reduce(function(e4, t2) {
  return e4.concat([t2, t2 + `-` + Li, t2 + `-end`]);
}, []), Wi = [`beforeRead`, `read`, `afterRead`, `beforeMain`, `main`, `afterMain`, `beforeWrite`, `write`, `afterWrite`];
function Gi(e4) {
  return e4 ? (e4.nodeName || ``).toLowerCase() : null;
}
function Ki(e4) {
  if (e4 == null)
    return window;
  if (e4.toString() !== `[object Window]`) {
    var t2 = e4.ownerDocument;
    return t2 && t2.defaultView || window;
  }
  return e4;
}
function qi(e4) {
  return e4 instanceof Ki(e4).Element || e4 instanceof Element;
}
function Ji(e4) {
  return e4 instanceof Ki(e4).HTMLElement || e4 instanceof HTMLElement;
}
function Yi(e4) {
  return typeof ShadowRoot > `u` ? false : e4 instanceof Ki(e4).ShadowRoot || e4 instanceof ShadowRoot;
}
function Xi(e4) {
  var t2 = e4.state;
  Object.keys(t2.elements).forEach(function(e5) {
    var n2 = t2.styles[e5] || {}, r2 = t2.attributes[e5] || {}, i2 = t2.elements[e5];
    Ji(i2) && Gi(i2) && (Object.assign(i2.style, n2), Object.keys(r2).forEach(function(e6) {
      var t3 = r2[e6];
      t3 === false ? i2.removeAttribute(e6) : i2.setAttribute(e6, t3 === true ? `` : t3);
    }));
  });
}
function Zi(e4) {
  var t2 = e4.state, n2 = {popper: {position: t2.options.strategy, left: `0`, top: `0`, margin: `0`}, arrow: {position: `absolute`}, reference: {}};
  return Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow), function() {
    Object.keys(t2.elements).forEach(function(e5) {
      var r2 = t2.elements[e5], i2 = t2.attributes[e5] || {}, a2 = Object.keys(t2.styles.hasOwnProperty(e5) ? t2.styles[e5] : n2[e5]).reduce(function(e6, t3) {
        return e6[t3] = ``, e6;
      }, {});
      Ji(r2) && Gi(r2) && (Object.assign(r2.style, a2), Object.keys(i2).forEach(function(e6) {
        r2.removeAttribute(e6);
      }));
    });
  };
}
var Qi = {name: `applyStyles`, enabled: true, phase: `write`, fn: Xi, effect: Zi, requires: [`computeStyles`]};
function $i(e4) {
  return e4.split(`-`)[0];
}
var ea = Math.max, ta = Math.min, na = Math.round;
function ra() {
  var e4 = navigator.userAgentData;
  return e4 != null && e4.brands && Array.isArray(e4.brands) ? e4.brands.map(function(e5) {
    return e5.brand + `/` + e5.version;
  }).join(` `) : navigator.userAgent;
}
function ia() {
  return !/^((?!chrome|android).)*safari/i.test(ra());
}
function aa(e4, t2, n2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  var r2 = e4.getBoundingClientRect(), i2 = 1, a2 = 1;
  t2 && Ji(e4) && (i2 = e4.offsetWidth > 0 && na(r2.width) / e4.offsetWidth || 1, a2 = e4.offsetHeight > 0 && na(r2.height) / e4.offsetHeight || 1);
  var o2 = (qi(e4) ? Ki(e4) : window).visualViewport, s2 = !ia() && n2, c2 = (r2.left + (s2 && o2 ? o2.offsetLeft : 0)) / i2, l2 = (r2.top + (s2 && o2 ? o2.offsetTop : 0)) / a2, u2 = r2.width / i2, d2 = r2.height / a2;
  return {width: u2, height: d2, top: l2, right: c2 + u2, bottom: l2 + d2, left: c2, x: c2, y: l2};
}
function oa(e4) {
  var t2 = aa(e4), n2 = e4.offsetWidth, r2 = e4.offsetHeight;
  return Math.abs(t2.width - n2) <= 1 && (n2 = t2.width), Math.abs(t2.height - r2) <= 1 && (r2 = t2.height), {x: e4.offsetLeft, y: e4.offsetTop, width: n2, height: r2};
}
function sa(e4, t2) {
  var n2 = t2.getRootNode && t2.getRootNode();
  if (e4.contains(t2))
    return true;
  if (n2 && Yi(n2)) {
    var r2 = t2;
    do {
      if (r2 && e4.isSameNode(r2))
        return true;
      r2 = r2.parentNode || r2.host;
    } while (r2);
  }
  return false;
}
function ca(e4) {
  return Ki(e4).getComputedStyle(e4);
}
function la(e4) {
  return [`table`, `td`, `th`].indexOf(Gi(e4)) >= 0;
}
function ua(e4) {
  return ((qi(e4) ? e4.ownerDocument : e4.document) || window.document).documentElement;
}
function da(e4) {
  return Gi(e4) === `html` ? e4 : e4.assignedSlot || e4.parentNode || (Yi(e4) ? e4.host : null) || ua(e4);
}
function fa(e4) {
  return !Ji(e4) || ca(e4).position === `fixed` ? null : e4.offsetParent;
}
function pa(e4) {
  var t2 = /firefox/i.test(ra());
  if (/Trident/i.test(ra()) && Ji(e4) && ca(e4).position === `fixed`)
    return null;
  var n2 = da(e4);
  for (Yi(n2) && (n2 = n2.host); Ji(n2) && [`html`, `body`].indexOf(Gi(n2)) < 0; ) {
    var r2 = ca(n2);
    if (r2.transform !== `none` || r2.perspective !== `none` || r2.contain === `paint` || [`transform`, `perspective`].indexOf(r2.willChange) !== -1 || t2 && r2.willChange === `filter` || t2 && r2.filter && r2.filter !== `none`)
      return n2;
    n2 = n2.parentNode;
  }
  return null;
}
function ma(e4) {
  for (var t2 = Ki(e4), n2 = fa(e4); n2 && la(n2) && ca(n2).position === `static`; )
    n2 = fa(n2);
  return n2 && (Gi(n2) === `html` || Gi(n2) === `body` && ca(n2).position === `static`) ? t2 : n2 || pa(e4) || t2;
}
function ha(e4) {
  return [`top`, `bottom`].indexOf(e4) >= 0 ? `x` : `y`;
}
function ga(e4, t2, n2) {
  return ea(e4, ta(t2, n2));
}
function _a(e4, t2, n2) {
  var r2 = ga(e4, t2, n2);
  return r2 > n2 ? n2 : r2;
}
function va() {
  return {top: 0, right: 0, bottom: 0, left: 0};
}
function ya(e4) {
  return Object.assign({}, va(), e4);
}
function ba(e4, t2) {
  return t2.reduce(function(t3, n2) {
    return t3[n2] = e4, t3;
  }, {});
}
var xa = function(e4, t2) {
  return e4 = typeof e4 == `function` ? e4(Object.assign({}, t2.rects, {placement: t2.placement})) : e4, ya(typeof e4 == `number` ? ba(e4, Ii) : e4);
};
function Sa(e4) {
  var t2, n2 = e4.state, r2 = e4.name, i2 = e4.options, a2 = n2.elements.arrow, o2 = n2.modifiersData.popperOffsets, s2 = $i(n2.placement), c2 = ha(s2), l2 = [`left`, `right`].indexOf(s2) >= 0 ? `height` : `width`;
  if (a2 && o2) {
    var u2 = xa(i2.padding, n2), d2 = oa(a2), f2 = c2 === `y` ? `top` : Pi, p2 = c2 === `y` ? Mi : Ni, m2 = n2.rects.reference[l2] + n2.rects.reference[c2] - o2[c2] - n2.rects.popper[l2], h2 = o2[c2] - n2.rects.reference[c2], g2 = ma(a2), _2 = g2 ? c2 === `y` ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, v2 = m2 / 2 - h2 / 2, y2 = u2[f2], b2 = _2 - d2[l2] - u2[p2], x2 = _2 / 2 - d2[l2] / 2 + v2, S2 = ga(y2, x2, b2), C2 = c2;
    n2.modifiersData[r2] = (t2 = {}, t2[C2] = S2, t2.centerOffset = S2 - x2, t2);
  }
}
function Ca(e4) {
  var t2 = e4.state, n2 = e4.options.element, r2 = n2 === void 0 ? `[data-popper-arrow]` : n2;
  r2 != null && (typeof r2 == `string` && (r2 = t2.elements.popper.querySelector(r2), !r2) || sa(t2.elements.popper, r2) && (t2.elements.arrow = r2));
}
var wa = {name: `arrow`, enabled: true, phase: `main`, fn: Sa, effect: Ca, requires: [`popperOffsets`], requiresIfExists: [`preventOverflow`]};
function Ta(e4) {
  return e4.split(`-`)[1];
}
var Ea = {top: `auto`, right: `auto`, bottom: `auto`, left: `auto`};
function Da(e4, t2) {
  var n2 = e4.x, r2 = e4.y, i2 = t2.devicePixelRatio || 1;
  return {x: na(n2 * i2) / i2 || 0, y: na(r2 * i2) / i2 || 0};
}
function Oa(e4) {
  var t2, n2 = e4.popper, r2 = e4.popperRect, i2 = e4.placement, a2 = e4.variation, o2 = e4.offsets, s2 = e4.position, c2 = e4.gpuAcceleration, l2 = e4.adaptive, u2 = e4.roundOffsets, d2 = e4.isFixed, f2 = o2.x, p2 = f2 === void 0 ? 0 : f2, m2 = o2.y, h2 = m2 === void 0 ? 0 : m2, g2 = typeof u2 == `function` ? u2({x: p2, y: h2}) : {x: p2, y: h2};
  p2 = g2.x, h2 = g2.y;
  var _2 = o2.hasOwnProperty(`x`), v2 = o2.hasOwnProperty(`y`), y2 = Pi, b2 = `top`, x2 = window;
  if (l2) {
    var S2 = ma(n2), C2 = `clientHeight`, w2 = `clientWidth`;
    if (S2 === Ki(n2) && (S2 = ua(n2), ca(S2).position !== `static` && s2 === `absolute` && (C2 = `scrollHeight`, w2 = `scrollWidth`)), S2 = S2, i2 === `top` || (i2 === `left` || i2 === `right`) && a2 === `end`) {
      b2 = Mi;
      var T2 = d2 && S2 === x2 && x2.visualViewport ? x2.visualViewport.height : S2[C2];
      h2 -= T2 - r2.height, h2 *= c2 ? 1 : -1;
    }
    if (i2 === `left` || (i2 === `top` || i2 === `bottom`) && a2 === `end`) {
      y2 = Ni;
      var E2 = d2 && S2 === x2 && x2.visualViewport ? x2.visualViewport.width : S2[w2];
      p2 -= E2 - r2.width, p2 *= c2 ? 1 : -1;
    }
  }
  var D2 = Object.assign({position: s2}, l2 && Ea), O2 = u2 === true ? Da({x: p2, y: h2}, Ki(n2)) : {x: p2, y: h2};
  if (p2 = O2.x, h2 = O2.y, c2) {
    var k2;
    return Object.assign({}, D2, (k2 = {}, k2[b2] = v2 ? `0` : ``, k2[y2] = _2 ? `0` : ``, k2.transform = (x2.devicePixelRatio || 1) <= 1 ? `translate(` + p2 + `px, ` + h2 + `px)` : `translate3d(` + p2 + `px, ` + h2 + `px, 0)`, k2));
  }
  return Object.assign({}, D2, (t2 = {}, t2[b2] = v2 ? h2 + `px` : ``, t2[y2] = _2 ? p2 + `px` : ``, t2.transform = ``, t2));
}
function ka(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = n2.gpuAcceleration, i2 = r2 === void 0 || r2, a2 = n2.adaptive, o2 = a2 === void 0 || a2, s2 = n2.roundOffsets, c2 = s2 === void 0 || s2, l2 = {placement: $i(t2.placement), variation: Ta(t2.placement), popper: t2.elements.popper, popperRect: t2.rects.popper, gpuAcceleration: i2, isFixed: t2.options.strategy === `fixed`};
  t2.modifiersData.popperOffsets != null && (t2.styles.popper = Object.assign({}, t2.styles.popper, Oa(Object.assign({}, l2, {offsets: t2.modifiersData.popperOffsets, position: t2.options.strategy, adaptive: o2, roundOffsets: c2})))), t2.modifiersData.arrow != null && (t2.styles.arrow = Object.assign({}, t2.styles.arrow, Oa(Object.assign({}, l2, {offsets: t2.modifiersData.arrow, position: `absolute`, adaptive: false, roundOffsets: c2})))), t2.attributes.popper = Object.assign({}, t2.attributes.popper, {"data-popper-placement": t2.placement});
}
var Aa = {name: `computeStyles`, enabled: true, phase: `beforeWrite`, fn: ka, data: {}}, ja = {passive: true};
function Ma(e4) {
  var t2 = e4.state, n2 = e4.instance, r2 = e4.options, i2 = r2.scroll, a2 = i2 === void 0 || i2, o2 = r2.resize, s2 = o2 === void 0 || o2, c2 = Ki(t2.elements.popper), l2 = [].concat(t2.scrollParents.reference, t2.scrollParents.popper);
  return a2 && l2.forEach(function(e5) {
    e5.addEventListener(`scroll`, n2.update, ja);
  }), s2 && c2.addEventListener(`resize`, n2.update, ja), function() {
    a2 && l2.forEach(function(e5) {
      e5.removeEventListener(`scroll`, n2.update, ja);
    }), s2 && c2.removeEventListener(`resize`, n2.update, ja);
  };
}
var Na = {name: `eventListeners`, enabled: true, phase: `write`, fn: function() {
}, effect: Ma, data: {}}, Pa = {left: `right`, right: `left`, bottom: `top`, top: `bottom`};
function Fa(e4) {
  return e4.replace(/left|right|bottom|top/g, function(e5) {
    return Pa[e5];
  });
}
var Ia = {start: `end`, end: `start`};
function La(e4) {
  return e4.replace(/start|end/g, function(e5) {
    return Ia[e5];
  });
}
function Ra(e4) {
  var t2 = Ki(e4);
  return {scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset};
}
function za(e4) {
  return aa(ua(e4)).left + Ra(e4).scrollLeft;
}
function Ba(e4, t2) {
  var n2 = Ki(e4), r2 = ua(e4), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    var l2 = ia();
    (l2 || !l2 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  return {width: a2, height: o2, x: s2 + za(e4), y: c2};
}
function Va(e4) {
  var t2 = ua(e4), n2 = Ra(e4), r2 = e4.ownerDocument?.body, i2 = ea(t2.scrollWidth, t2.clientWidth, r2 ? r2.scrollWidth : 0, r2 ? r2.clientWidth : 0), a2 = ea(t2.scrollHeight, t2.clientHeight, r2 ? r2.scrollHeight : 0, r2 ? r2.clientHeight : 0), o2 = -n2.scrollLeft + za(e4), s2 = -n2.scrollTop;
  return ca(r2 || t2).direction === `rtl` && (o2 += ea(t2.clientWidth, r2 ? r2.clientWidth : 0) - i2), {width: i2, height: a2, x: o2, y: s2};
}
function Ha(e4) {
  var t2 = ca(e4), n2 = t2.overflow, r2 = t2.overflowX, i2 = t2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + i2 + r2);
}
function Ua(e4) {
  return [`html`, `body`, `#document`].indexOf(Gi(e4)) >= 0 ? e4.ownerDocument.body : Ji(e4) && Ha(e4) ? e4 : Ua(da(e4));
}
function Wa(e4, t2) {
  t2 === void 0 && (t2 = []);
  var n2 = Ua(e4), r2 = n2 === e4.ownerDocument?.body, i2 = Ki(n2), a2 = r2 ? [i2].concat(i2.visualViewport || [], Ha(n2) ? n2 : []) : n2, o2 = t2.concat(a2);
  return r2 ? o2 : o2.concat(Wa(da(a2)));
}
function Ga(e4) {
  return Object.assign({}, e4, {left: e4.x, top: e4.y, right: e4.x + e4.width, bottom: e4.y + e4.height});
}
function Ka(e4, t2) {
  var n2 = aa(e4, false, t2 === `fixed`);
  return n2.top += e4.clientTop, n2.left += e4.clientLeft, n2.bottom = n2.top + e4.clientHeight, n2.right = n2.left + e4.clientWidth, n2.width = e4.clientWidth, n2.height = e4.clientHeight, n2.x = n2.left, n2.y = n2.top, n2;
}
function qa(e4, t2, n2) {
  return t2 === `viewport` ? Ga(Ba(e4, n2)) : qi(t2) ? Ka(t2, n2) : Ga(Va(ua(e4)));
}
function Ja(e4) {
  var t2 = Wa(da(e4)), n2 = [`absolute`, `fixed`].indexOf(ca(e4).position) >= 0 && Ji(e4) ? ma(e4) : e4;
  return qi(n2) ? t2.filter(function(e5) {
    return qi(e5) && sa(e5, n2) && Gi(e5) !== `body`;
  }) : [];
}
function Ya(e4, t2, n2, r2) {
  var i2 = t2 === `clippingParents` ? Ja(e4) : [].concat(t2), a2 = [].concat(i2, [n2]), o2 = a2[0], s2 = a2.reduce(function(t3, n3) {
    var i3 = qa(e4, n3, r2);
    return t3.top = ea(i3.top, t3.top), t3.right = ta(i3.right, t3.right), t3.bottom = ta(i3.bottom, t3.bottom), t3.left = ea(i3.left, t3.left), t3;
  }, qa(e4, o2, r2));
  return s2.width = s2.right - s2.left, s2.height = s2.bottom - s2.top, s2.x = s2.left, s2.y = s2.top, s2;
}
function Xa(e4) {
  var t2 = e4.reference, n2 = e4.element, r2 = e4.placement, i2 = r2 ? $i(r2) : null, a2 = r2 ? Ta(r2) : null, o2 = t2.x + t2.width / 2 - n2.width / 2, s2 = t2.y + t2.height / 2 - n2.height / 2, c2;
  switch (i2) {
    case `top`:
      c2 = {x: o2, y: t2.y - n2.height};
      break;
    case Mi:
      c2 = {x: o2, y: t2.y + t2.height};
      break;
    case Ni:
      c2 = {x: t2.x + t2.width, y: s2};
      break;
    case Pi:
      c2 = {x: t2.x - n2.width, y: s2};
      break;
    default:
      c2 = {x: t2.x, y: t2.y};
  }
  var l2 = i2 ? ha(i2) : null;
  if (l2 != null) {
    var u2 = l2 === `y` ? `height` : `width`;
    switch (a2) {
      case Li:
        c2[l2] = c2[l2] - (t2[u2] / 2 - n2[u2] / 2);
        break;
      case `end`:
        c2[l2] = c2[l2] + (t2[u2] / 2 - n2[u2] / 2);
    }
  }
  return c2;
}
function Za(e4, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, i2 = r2 === void 0 ? e4.placement : r2, a2 = n2.strategy, o2 = a2 === void 0 ? e4.strategy : a2, s2 = n2.boundary, c2 = s2 === void 0 ? Ri : s2, l2 = n2.rootBoundary, u2 = l2 === void 0 ? zi : l2, d2 = n2.elementContext, f2 = d2 === void 0 ? Bi : d2, p2 = n2.altBoundary, m2 = p2 !== void 0 && p2, h2 = n2.padding, g2 = h2 === void 0 ? 0 : h2, _2 = ya(typeof g2 == `number` ? ba(g2, Ii) : g2), v2 = f2 === `popper` ? Vi : Bi, y2 = e4.rects.popper, b2 = e4.elements[m2 ? v2 : f2], x2 = Ya(qi(b2) ? b2 : b2.contextElement || ua(e4.elements.popper), c2, u2, o2), S2 = aa(e4.elements.reference), C2 = Xa({reference: S2, element: y2, strategy: `absolute`, placement: i2}), w2 = Ga(Object.assign({}, y2, C2)), T2 = f2 === `popper` ? w2 : S2, E2 = {top: x2.top - T2.top + _2.top, bottom: T2.bottom - x2.bottom + _2.bottom, left: x2.left - T2.left + _2.left, right: T2.right - x2.right + _2.right}, D2 = e4.modifiersData.offset;
  if (f2 === `popper` && D2) {
    var O2 = D2[i2];
    Object.keys(E2).forEach(function(e5) {
      var t3 = [`right`, `bottom`].indexOf(e5) >= 0 ? 1 : -1, n3 = [`top`, `bottom`].indexOf(e5) >= 0 ? `y` : `x`;
      E2[e5] += O2[n3] * t3;
    });
  }
  return E2;
}
function Qa(e4, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, i2 = n2.boundary, a2 = n2.rootBoundary, o2 = n2.padding, s2 = n2.flipVariations, c2 = n2.allowedAutoPlacements, l2 = c2 === void 0 ? Ui : c2, u2 = Ta(r2), d2 = u2 ? s2 ? Hi : Hi.filter(function(e5) {
    return Ta(e5) === u2;
  }) : Ii, f2 = d2.filter(function(e5) {
    return l2.indexOf(e5) >= 0;
  });
  f2.length === 0 && (f2 = d2);
  var p2 = f2.reduce(function(t3, n3) {
    return t3[n3] = Za(e4, {placement: n3, boundary: i2, rootBoundary: a2, padding: o2})[$i(n3)], t3;
  }, {});
  return Object.keys(p2).sort(function(e5, t3) {
    return p2[e5] - p2[t3];
  });
}
function $a(e4) {
  if ($i(e4) === `auto`)
    return [];
  var t2 = Fa(e4);
  return [La(e4), t2, La(t2)];
}
function eo(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = e4.name;
  if (!t2.modifiersData[r2]._skip) {
    for (var i2 = n2.mainAxis, a2 = i2 === void 0 || i2, o2 = n2.altAxis, s2 = o2 === void 0 || o2, c2 = n2.fallbackPlacements, l2 = n2.padding, u2 = n2.boundary, d2 = n2.rootBoundary, f2 = n2.altBoundary, p2 = n2.flipVariations, m2 = p2 === void 0 || p2, h2 = n2.allowedAutoPlacements, g2 = t2.options.placement, _2 = $i(g2) === g2, v2 = c2 || (_2 || !m2 ? [Fa(g2)] : $a(g2)), y2 = [g2].concat(v2).reduce(function(e5, n3) {
      return e5.concat($i(n3) === `auto` ? Qa(t2, {placement: n3, boundary: u2, rootBoundary: d2, padding: l2, flipVariations: m2, allowedAutoPlacements: h2}) : n3);
    }, []), b2 = t2.rects.reference, x2 = t2.rects.popper, S2 = new Map(), C2 = true, w2 = y2[0], T2 = 0; T2 < y2.length; T2++) {
      var E2 = y2[T2], D2 = $i(E2), O2 = Ta(E2) === Li, k2 = [`top`, Mi].indexOf(D2) >= 0, A2 = k2 ? `width` : `height`, j2 = Za(t2, {placement: E2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: l2}), M2 = k2 ? O2 ? Ni : Pi : O2 ? Mi : `top`;
      b2[A2] > x2[A2] && (M2 = Fa(M2));
      var N2 = Fa(M2), P2 = [];
      if (a2 && P2.push(j2[D2] <= 0), s2 && P2.push(j2[M2] <= 0, j2[N2] <= 0), P2.every(function(e5) {
        return e5;
      })) {
        w2 = E2, C2 = false;
        break;
      }
      S2.set(E2, P2);
    }
    if (C2)
      for (var F2 = m2 ? 3 : 1, I2 = function(e5) {
        var t3 = y2.find(function(t4) {
          var n3 = S2.get(t4);
          if (n3)
            return n3.slice(0, e5).every(function(e6) {
              return e6;
            });
        });
        if (t3)
          return w2 = t3, `break`;
      }, L2 = F2; L2 > 0 && I2(L2) !== `break`; L2--)
        ;
    t2.placement !== w2 && (t2.modifiersData[r2]._skip = true, t2.placement = w2, t2.reset = true);
  }
}
var to = {name: `flip`, enabled: true, phase: `main`, fn: eo, requiresIfExists: [`offset`], data: {_skip: false}};
function no(e4, t2, n2) {
  return n2 === void 0 && (n2 = {x: 0, y: 0}), {top: e4.top - t2.height - n2.y, right: e4.right - t2.width + n2.x, bottom: e4.bottom - t2.height + n2.y, left: e4.left - t2.width - n2.x};
}
function ro(e4) {
  return [`top`, Ni, Mi, Pi].some(function(t2) {
    return e4[t2] >= 0;
  });
}
function io(e4) {
  var t2 = e4.state, n2 = e4.name, r2 = t2.rects.reference, i2 = t2.rects.popper, a2 = t2.modifiersData.preventOverflow, o2 = Za(t2, {elementContext: `reference`}), s2 = Za(t2, {altBoundary: true}), c2 = no(o2, r2), l2 = no(s2, i2, a2), u2 = ro(c2), d2 = ro(l2);
  t2.modifiersData[n2] = {referenceClippingOffsets: c2, popperEscapeOffsets: l2, isReferenceHidden: u2, hasPopperEscaped: d2}, t2.attributes.popper = Object.assign({}, t2.attributes.popper, {"data-popper-reference-hidden": u2, "data-popper-escaped": d2});
}
var ao = {name: `hide`, enabled: true, phase: `main`, requiresIfExists: [`preventOverflow`], fn: io};
function oo(e4, t2, n2) {
  var r2 = $i(e4), i2 = [`left`, `top`].indexOf(r2) >= 0 ? -1 : 1, a2 = typeof n2 == `function` ? n2(Object.assign({}, t2, {placement: e4})) : n2, o2 = a2[0], s2 = a2[1];
  return o2 || (o2 = 0), s2 = (s2 || 0) * i2, [`left`, `right`].indexOf(r2) >= 0 ? {x: s2, y: o2} : {x: o2, y: s2};
}
function so(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = e4.name, i2 = n2.offset, a2 = i2 === void 0 ? [0, 0] : i2, o2 = Ui.reduce(function(e5, n3) {
    return e5[n3] = oo(n3, t2.rects, a2), e5;
  }, {}), s2 = o2[t2.placement], c2 = s2.x, l2 = s2.y;
  t2.modifiersData.popperOffsets != null && (t2.modifiersData.popperOffsets.x += c2, t2.modifiersData.popperOffsets.y += l2), t2.modifiersData[r2] = o2;
}
var co = {name: `offset`, enabled: true, phase: `main`, requires: [`popperOffsets`], fn: so};
function lo(e4) {
  var t2 = e4.state, n2 = e4.name;
  t2.modifiersData[n2] = Xa({reference: t2.rects.reference, element: t2.rects.popper, strategy: `absolute`, placement: t2.placement});
}
var uo = {name: `popperOffsets`, enabled: true, phase: `read`, fn: lo, data: {}};
function fo(e4) {
  return e4 === `x` ? `y` : `x`;
}
function po(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = e4.name, i2 = n2.mainAxis, a2 = i2 === void 0 || i2, o2 = n2.altAxis, s2 = o2 !== void 0 && o2, c2 = n2.boundary, l2 = n2.rootBoundary, u2 = n2.altBoundary, d2 = n2.padding, f2 = n2.tether, p2 = f2 === void 0 || f2, m2 = n2.tetherOffset, h2 = m2 === void 0 ? 0 : m2, g2 = Za(t2, {boundary: c2, rootBoundary: l2, padding: d2, altBoundary: u2}), _2 = $i(t2.placement), v2 = Ta(t2.placement), y2 = !v2, b2 = ha(_2), x2 = fo(b2), S2 = t2.modifiersData.popperOffsets, C2 = t2.rects.reference, w2 = t2.rects.popper, T2 = typeof h2 == `function` ? h2(Object.assign({}, t2.rects, {placement: t2.placement})) : h2, E2 = typeof T2 == `number` ? {mainAxis: T2, altAxis: T2} : Object.assign({mainAxis: 0, altAxis: 0}, T2), D2 = t2.modifiersData.offset ? t2.modifiersData.offset[t2.placement] : null, O2 = {x: 0, y: 0};
  if (S2) {
    if (a2) {
      var k2 = b2 === `y` ? `top` : Pi, A2 = b2 === `y` ? Mi : Ni, j2 = b2 === `y` ? `height` : `width`, M2 = S2[b2], N2 = M2 + g2[k2], P2 = M2 - g2[A2], F2 = p2 ? -w2[j2] / 2 : 0, I2 = v2 === `start` ? C2[j2] : w2[j2], L2 = v2 === `start` ? -w2[j2] : -C2[j2], R2 = t2.elements.arrow, z2 = p2 && R2 ? oa(R2) : {width: 0, height: 0}, B2 = t2.modifiersData[`arrow#persistent`] ? t2.modifiersData[`arrow#persistent`].padding : va(), ee2 = B2[k2], te2 = B2[A2], V2 = ga(0, C2[j2], z2[j2]), H2 = y2 ? C2[j2] / 2 - F2 - V2 - ee2 - E2.mainAxis : I2 - V2 - ee2 - E2.mainAxis, ne2 = y2 ? -C2[j2] / 2 + F2 + V2 + te2 + E2.mainAxis : L2 + V2 + te2 + E2.mainAxis, re2 = t2.elements.arrow && ma(t2.elements.arrow), U2 = re2 ? b2 === `y` ? re2.clientTop || 0 : re2.clientLeft || 0 : 0, W2 = D2?.[b2] ?? 0, ie2 = M2 + H2 - W2 - U2, ae2 = M2 + ne2 - W2, oe2 = ga(p2 ? ta(N2, ie2) : N2, M2, p2 ? ea(P2, ae2) : P2);
      S2[b2] = oe2, O2[b2] = oe2 - M2;
    }
    if (s2) {
      var se2 = b2 === `x` ? `top` : Pi, G2 = b2 === `x` ? Mi : Ni, ce2 = S2[x2], le2 = x2 === `y` ? `height` : `width`, ue2 = ce2 + g2[se2], de2 = ce2 - g2[G2], fe2 = [`top`, Pi].indexOf(_2) !== -1, K2 = D2?.[x2] ?? 0, pe2 = fe2 ? ue2 : ce2 - C2[le2] - w2[le2] - K2 + E2.altAxis, me2 = fe2 ? ce2 + C2[le2] + w2[le2] - K2 - E2.altAxis : de2, he2 = p2 && fe2 ? _a(pe2, ce2, me2) : ga(p2 ? pe2 : ue2, ce2, p2 ? me2 : de2);
      S2[x2] = he2, O2[x2] = he2 - ce2;
    }
    t2.modifiersData[r2] = O2;
  }
}
var mo = {name: `preventOverflow`, enabled: true, phase: `main`, fn: po, requiresIfExists: [`offset`]};
function ho(e4) {
  return {scrollLeft: e4.scrollLeft, scrollTop: e4.scrollTop};
}
function go(e4) {
  return e4 === Ki(e4) || !Ji(e4) ? Ra(e4) : ho(e4);
}
function _o(e4) {
  var t2 = e4.getBoundingClientRect(), n2 = na(t2.width) / e4.offsetWidth || 1, r2 = na(t2.height) / e4.offsetHeight || 1;
  return n2 !== 1 || r2 !== 1;
}
function vo(e4, t2, n2) {
  n2 === void 0 && (n2 = false);
  var r2 = Ji(t2), i2 = Ji(t2) && _o(t2), a2 = ua(t2), o2 = aa(e4, i2, n2), s2 = {scrollLeft: 0, scrollTop: 0}, c2 = {x: 0, y: 0};
  return (r2 || !r2 && !n2) && ((Gi(t2) !== `body` || Ha(a2)) && (s2 = go(t2)), Ji(t2) ? (c2 = aa(t2, true), c2.x += t2.clientLeft, c2.y += t2.clientTop) : a2 && (c2.x = za(a2))), {x: o2.left + s2.scrollLeft - c2.x, y: o2.top + s2.scrollTop - c2.y, width: o2.width, height: o2.height};
}
function yo(e4) {
  var t2 = new Map(), n2 = new Set(), r2 = [];
  e4.forEach(function(e5) {
    t2.set(e5.name, e5);
  });
  function i2(e5) {
    n2.add(e5.name), [].concat(e5.requires || [], e5.requiresIfExists || []).forEach(function(e6) {
      if (!n2.has(e6)) {
        var r3 = t2.get(e6);
        r3 && i2(r3);
      }
    }), r2.push(e5);
  }
  return e4.forEach(function(e5) {
    n2.has(e5.name) || i2(e5);
  }), r2;
}
function bo(e4) {
  var t2 = yo(e4);
  return Wi.reduce(function(e5, n2) {
    return e5.concat(t2.filter(function(e6) {
      return e6.phase === n2;
    }));
  }, []);
}
function xo(e4) {
  var t2;
  return function() {
    return t2 || (t2 = new Promise(function(n2) {
      Promise.resolve().then(function() {
        t2 = void 0, n2(e4());
      });
    })), t2;
  };
}
function So(e4) {
  var t2 = e4.reduce(function(e5, t3) {
    var n2 = e5[t3.name];
    return e5[t3.name] = n2 ? Object.assign({}, n2, t3, {options: Object.assign({}, n2.options, t3.options), data: Object.assign({}, n2.data, t3.data)}) : t3, e5;
  }, {});
  return Object.keys(t2).map(function(e5) {
    return t2[e5];
  });
}
var Co = {placement: `bottom`, modifiers: [], strategy: `absolute`};
function wo() {
  return ![...arguments].some(function(e4) {
    return !(e4 && typeof e4.getBoundingClientRect == `function`);
  });
}
function To(e4) {
  e4 === void 0 && (e4 = {});
  var t2 = e4, n2 = t2.defaultModifiers, r2 = n2 === void 0 ? [] : n2, i2 = t2.defaultOptions, a2 = i2 === void 0 ? Co : i2;
  return function(e5, t3, n3) {
    n3 === void 0 && (n3 = a2);
    var i3 = {placement: `bottom`, orderedModifiers: [], options: Object.assign({}, Co, a2), modifiersData: {}, elements: {reference: e5, popper: t3}, attributes: {}, styles: {}}, o2 = [], s2 = false, c2 = {state: i3, setOptions: function(n4) {
      var o3 = typeof n4 == `function` ? n4(i3.options) : n4;
      u2(), i3.options = Object.assign({}, a2, i3.options, o3), i3.scrollParents = {reference: qi(e5) ? Wa(e5) : e5.contextElement ? Wa(e5.contextElement) : [], popper: Wa(t3)};
      var s3 = bo(So([].concat(r2, i3.options.modifiers)));
      return i3.orderedModifiers = s3.filter(function(e6) {
        return e6.enabled;
      }), l2(), c2.update();
    }, forceUpdate: function() {
      if (!s2) {
        var e6 = i3.elements, t4 = e6.reference, n4 = e6.popper;
        if (wo(t4, n4)) {
          i3.rects = {reference: vo(t4, ma(n4), i3.options.strategy === `fixed`), popper: oa(n4)}, i3.reset = false, i3.placement = i3.options.placement, i3.orderedModifiers.forEach(function(e7) {
            return i3.modifiersData[e7.name] = Object.assign({}, e7.data);
          });
          for (var r3 = 0; r3 < i3.orderedModifiers.length; r3++)
            if (i3.reset === true)
              i3.reset = false, r3 = -1;
            else {
              var a3 = i3.orderedModifiers[r3], o3 = a3.fn, l3 = a3.options, u3 = l3 === void 0 ? {} : l3, d2 = a3.name;
              typeof o3 == `function` && (i3 = o3({state: i3, options: u3, name: d2, instance: c2}) || i3);
            }
        }
      }
    }, update: xo(function() {
      return new Promise(function(e6) {
        c2.forceUpdate(), e6(i3);
      });
    }), destroy: function() {
      u2(), s2 = true;
    }};
    if (!wo(e5, t3))
      return c2;
    c2.setOptions(n3).then(function(e6) {
      !s2 && n3.onFirstUpdate && n3.onFirstUpdate(e6);
    });
    function l2() {
      i3.orderedModifiers.forEach(function(e6) {
        var t4 = e6.name, n4 = e6.options, r3 = n4 === void 0 ? {} : n4, a3 = e6.effect;
        if (typeof a3 == `function`) {
          var s3 = a3({state: i3, name: t4, instance: c2, options: r3});
          o2.push(s3 || function() {
          });
        }
      });
    }
    function u2() {
      o2.forEach(function(e6) {
        return e6();
      }), o2 = [];
    }
    return c2;
  };
}
var Eo = To({defaultModifiers: [Na, uo, Aa, Qi, co, to, mo, wa, ao]});
function Do(e4) {
  let _a2 = e4, {elementType: t2, externalSlotProps: n2, ownerState: r2, skipResolvingSlotProps: i2 = false} = _a2, a2 = __objRest(_a2, ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"]), o2 = i2 ? {} : mr(n2, r2), {props: s2, internalRef: c2} = _r(__spreadProps(__spreadValues({}, a2), {externalSlotProps: o2})), l2 = Vt(c2, o2?.ref, e4.additionalProps?.ref);
  return pr(t2, __spreadProps(__spreadValues({}, s2), {ref: l2}), r2);
}
function Oo(t2) {
  return parseInt(e, 10) >= 19 ? t2?.props?.ref || null : t2?.ref || null;
}
function ko(e4) {
  return typeof e4 == `function` ? e4() : e4;
}
var Ao = m(function(e4, t2) {
  let {children: n2, container: r2, disablePortal: i2 = false} = e4, [a2, o2] = g(null), s2 = Vt(p(n2) ? Oo(n2) : null, t2);
  return D(() => {
    i2 || o2(ko(r2) || document.body);
  }, [r2, i2]), D(() => {
    if (a2 && !i2)
      return Hn(t2, a2), () => {
        Hn(t2, null);
      };
  }, [t2, a2, i2]), i2 ? p(n2) ? u(n2, {ref: s2}) : n2 : a2 && _(n2, a2);
});
function jo(e4) {
  return B(`MuiPopper`, e4);
}
var Mo = L(`MuiPopper`, [`root`]);
function No(e4, t2) {
  if (t2 === `ltr`)
    return e4;
  switch (e4) {
    case `bottom-end`:
      return `bottom-start`;
    case `bottom-start`:
      return `bottom-end`;
    case `top-end`:
      return `top-start`;
    case `top-start`:
      return `top-end`;
    default:
      return e4;
  }
}
function Po(e4) {
  return typeof e4 == `function` ? e4() : e4;
}
function Fo(e4) {
  return e4.nodeType !== void 0;
}
var Io = (e4) => {
  let {classes: t2} = e4;
  return G({root: [`root`]}, jo, t2);
}, Lo = {}, Ro = m(function(e4, r2) {
  let _a2 = e4, {anchorEl: i2, children: a2, direction: c2, disablePortal: l2, modifiers: u2, open: d2, placement: f2, popperOptions: p2, popperRef: m2, slotProps: h2 = {}, slots: _2 = {}, TransitionProps: y2, ownerState: b2} = _a2, x2 = __objRest(_a2, ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"]), S2 = o(null), C2 = Vt(S2, r2), w2 = o(null), T2 = Vt(w2, m2), E2 = o(T2);
  D(() => {
    E2.current = T2;
  }, [T2]), t(m2, () => w2.current, []);
  let O2 = No(f2, c2), [k2, A2] = g(O2), j2 = n(() => Po(i2), [i2]);
  s(() => {
    w2.current && w2.current.forceUpdate();
  }), D(() => {
    if (!j2 || !d2)
      return;
    let e5 = (e6) => {
      A2(e6.placement);
    }, t2 = [{name: `preventOverflow`, options: {altBoundary: l2}}, {name: `flip`, options: {altBoundary: l2}}, {name: `onUpdate`, enabled: true, phase: `afterWrite`, fn: ({state: t3}) => {
      e5(t3);
    }}];
    u2 != null && (t2 = t2.concat(u2)), p2 && p2.modifiers != null && (t2 = t2.concat(p2.modifiers));
    let n2 = Eo(j2, S2.current, __spreadProps(__spreadValues({placement: O2}, p2), {modifiers: t2}));
    E2.current(n2);
    let r3 = S2.current;
    return () => {
      if (r3) {
        let {style: e6} = r3, t3 = e6.position, i3 = e6.top, a3 = e6.left, o2 = e6.transform;
        n2.destroy(), e6.position = t3, e6.top = i3, e6.left = a3, e6.transform = o2;
      } else
        n2.destroy();
      E2.current(null);
    };
  }, [j2, l2, u2, d2, p2, O2]);
  let M2 = {placement: k2};
  y2 !== null && (M2.TransitionProps = y2);
  let N2 = Io(e4), P2 = _2.root ?? `div`, F2 = Do({elementType: P2, externalSlotProps: h2.root, externalForwardedProps: x2, additionalProps: {role: `tooltip`, ref: C2}, ownerState: e4, className: N2.root});
  return v(P2, __spreadProps(__spreadValues({}, F2), {children: typeof a2 == `function` ? a2(M2) : a2}));
}), zo = Y(m(function(e4, t2) {
  let _a2 = e4, {anchorEl: n2, children: r2, container: i2, direction: a2 = `ltr`, disablePortal: o2 = false, keepMounted: s2 = false, modifiers: c2, open: l2, placement: u2 = `bottom`, popperOptions: d2 = Lo, popperRef: f2, style: p2, transition: m2 = false, slotProps: h2 = {}, slots: _2 = {}} = _a2, y2 = __objRest(_a2, ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"]), [b2, x2] = g(true), S2 = () => {
    x2(false);
  }, C2 = () => {
    x2(true);
  };
  if (!s2 && !l2 && (!m2 || b2))
    return null;
  let w2;
  if (i2)
    w2 = i2;
  else if (n2) {
    let e5 = Po(n2);
    w2 = e5 && Fo(e5) ? Ut(e5).body : Ut(null).body;
  }
  let T2 = !l2 && s2 && (!m2 || b2) ? `none` : void 0, E2 = m2 ? {in: l2, onEnter: S2, onExited: C2} : void 0;
  return v(Ao, {disablePortal: o2, container: w2, children: v(Ro, __spreadProps(__spreadValues({anchorEl: n2, direction: a2, disablePortal: o2, modifiers: c2, ref: t2, open: m2 ? !b2 : l2, placement: u2, popperOptions: d2, popperRef: f2, slotProps: h2, slots: _2}, y2), {style: __spreadValues({position: `fixed`, top: 0, left: 0, display: T2}, p2), TransitionProps: E2, children: r2}))});
}), {name: `MuiPopper`, slot: `Root`})({}), Bo = m(function(e4, t2) {
  let n2 = de(), _a2 = Z({props: e4, name: `MuiPopper`}), {anchorEl: r2, component: i2, container: a2, disablePortal: o2, keepMounted: s2, modifiers: c2, open: l2, placement: u2, popperOptions: d2, popperRef: f2, transition: p2, slots: m2, slotProps: h2} = _a2, g2 = __objRest(_a2, ["anchorEl", "component", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"]), _2 = __spreadValues({anchorEl: r2, container: a2, disablePortal: o2, keepMounted: s2, modifiers: c2, open: l2, placement: u2, popperOptions: d2, popperRef: f2, transition: p2}, g2);
  return v(zo, __spreadProps(__spreadValues({as: i2, direction: n2 ? `rtl` : `ltr`, slots: m2, slotProps: h2}, _2), {ref: t2}));
}), Vo = zn(v(`path`, {d: `M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z`}), `Cancel`);
function Ho(e4) {
  return B(`MuiChip`, e4);
}
var $ = L(`MuiChip`, [`root`, `sizeSmall`, `sizeMedium`, `colorDefault`, `colorError`, `colorInfo`, `colorPrimary`, `colorSecondary`, `colorSuccess`, `colorWarning`, `disabled`, `clickable`, `deletable`, `outlined`, `filled`, `avatar`, `icon`, `label`, `deleteIcon`, `focusVisible`]), Uo = (e4) => {
  let {classes: t2, disabled: n2, size: r2, color: i2, onDelete: a2, clickable: o2, variant: s2} = e4, c2 = {root: [`root`, s2, n2 && `disabled`, `size${Q(r2)}`, `color${Q(i2)}`, o2 && `clickable`, a2 && `deletable`], label: [`label`], avatar: [`avatar`], icon: [`icon`], deleteIcon: [`deleteIcon`]};
  return G(c2, Ho, t2);
}, Wo = Y(`div`, {name: `MuiChip`, slot: `Root`, shouldForwardProp: (e4) => Zt(e4) && e4 !== `focusableWhenDisabled` && e4 !== `skipFocusWhenDisabled`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4, {color: r2, clickable: i2, onDelete: a2, size: o2, variant: s2} = n2;
  return [{[`& .${$.avatar}`]: t2.avatar}, {[`& .${$.icon}`]: t2.icon}, {[`& .${$.deleteIcon}`]: t2.deleteIcon}, t2.root, t2[`size${Q(o2)}`], t2[`color${Q(r2)}`], i2 && t2.clickable, a2 && t2.deletable, t2[s2]];
}})(X(({theme: e4}) => {
  let t2 = e4.palette.mode === `light` ? e4.palette.grey[700] : e4.palette.grey[300];
  return __spreadProps(__spreadValues({maxWidth: `100%`, fontFamily: e4.typography.fontFamily, fontSize: e4.typography.pxToRem(13), display: `inline-flex`, alignItems: `center`, justifyContent: `center`, height: 32, lineHeight: 1.5, color: (e4.vars || e4).palette.text.primary, backgroundColor: (e4.vars || e4).palette.action.selected, borderRadius: 16, whiteSpace: `nowrap`}, Cn(e4, [`background-color`, `box-shadow`])), {cursor: `unset`, outline: 0, textDecoration: `none`, border: 0, padding: 0, verticalAlign: `middle`, boxSizing: `border-box`, [`&.${$.disabled}`]: {opacity: (e4.vars || e4).palette.action.disabledOpacity, pointerEvents: `none`}, [`& .${$.avatar}`]: {marginLeft: 5, marginRight: -6, width: 24, height: 24, color: e4.vars ? e4.vars.palette.Chip.defaultAvatarColor : t2, fontSize: e4.typography.pxToRem(12)}, [`& .${$.icon}`]: {marginLeft: 5, marginRight: -6}, [`& .${$.deleteIcon}`]: {WebkitTapHighlightColor: `transparent`, color: e4.alpha((e4.vars || e4).palette.text.primary, 0.26), fontSize: 22, cursor: `pointer`, margin: `0 5px 0 -6px`, "&:hover": {color: e4.alpha((e4.vars || e4).palette.text.primary, 0.4)}}, variants: [{props: {color: `primary`}, style: {[`& .${$.avatar}`]: {color: (e4.vars || e4).palette.primary.contrastText, backgroundColor: (e4.vars || e4).palette.primary.dark}}}, {props: {color: `secondary`}, style: {[`& .${$.avatar}`]: {color: (e4.vars || e4).palette.secondary.contrastText, backgroundColor: (e4.vars || e4).palette.secondary.dark}}}, {props: {size: `small`}, style: {height: 24, [`& .${$.avatar}`]: {marginLeft: 4, marginRight: -4, width: 18, height: 18, fontSize: e4.typography.pxToRem(10)}, [`& .${$.icon}`]: {fontSize: 18, marginLeft: 4, marginRight: -4}, [`& .${$.deleteIcon}`]: {fontSize: 16, marginRight: 4, marginLeft: -4}}}, ...Object.entries(e4.palette).filter(ai([`contrastText`])).map(([t3]) => ({props: {color: t3}, style: {backgroundColor: (e4.vars || e4).palette[t3].main, color: (e4.vars || e4).palette[t3].contrastText, [`& .${$.deleteIcon}`]: {color: e4.alpha((e4.vars || e4).palette[t3].contrastText, 0.7), "&:hover, &:active": {color: (e4.vars || e4).palette[t3].contrastText}}}})), {props: (e5) => e5.iconColor === e5.color, style: {[`& .${$.icon}`]: {color: e4.vars ? e4.vars.palette.Chip.defaultIconColor : t2}}}, {props: (e5) => e5.iconColor === e5.color && e5.color !== "default", style: {[`& .${$.icon}`]: {color: `inherit`}}}, {props: {onDelete: true}, style: !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.action.selected, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.focusOpacity}`)}}}, ...Object.entries(e4.palette).filter(ai([`dark`])).map(([t3]) => ({props: {color: t3, onDelete: true}, style: !e4.focusVisible && {[`&.${$.focusVisible}`]: {background: (e4.vars || e4).palette[t3].dark}}})), {props: {clickable: true}, style: __spreadProps(__spreadValues({userSelect: `none`, WebkitTapHighlightColor: `transparent`, cursor: `pointer`, "&:hover": {backgroundColor: e4.alpha((e4.vars || e4).palette.action.selected, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.hoverOpacity}`)}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.action.selected, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.focusOpacity}`)}}), {"&:active": {boxShadow: (e4.vars || e4).shadows[1]}})}, ...Object.entries(e4.palette).filter(ai([`dark`])).map(([t3]) => ({props: {color: t3, clickable: true}, style: __spreadValues({"&:hover": {backgroundColor: (e4.vars || e4).palette[t3].dark}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: (e4.vars || e4).palette[t3].dark}})})), {props: {variant: `outlined`}, style: __spreadProps(__spreadValues({backgroundColor: `transparent`, border: e4.vars ? `1px solid ${e4.vars.palette.Chip.defaultBorder}` : `1px solid ${e4.palette.mode === `light` ? e4.palette.grey[400] : e4.palette.grey[700]}`, [`&.${$.clickable}:hover`]: {backgroundColor: (e4.vars || e4).palette.action.hover}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: (e4.vars || e4).palette.action.focus}}), {[`& .${$.avatar}`]: {marginLeft: 4}, [`& .${$.icon}`]: {marginLeft: 4}, [`& .${$.deleteIcon}`]: {marginRight: 5}})}, {props: {size: `small`, variant: `outlined`}, style: {[`& .${$.avatar}`]: {marginLeft: 2}, [`& .${$.icon}`]: {marginLeft: 2}, [`& .${$.deleteIcon}`]: {marginRight: 3}}}, ...Object.entries(e4.palette).filter(ai()).map(([t3]) => ({props: {variant: `outlined`, color: t3}, style: __spreadProps(__spreadValues({color: (e4.vars || e4).palette[t3].main, border: `1px solid ${e4.alpha((e4.vars || e4).palette[t3].main, 0.7)}`, [`&.${$.clickable}:hover`]: {backgroundColor: e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.hoverOpacity)}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.focusOpacity)}}), {[`& .${$.deleteIcon}`]: {color: e4.alpha((e4.vars || e4).palette[t3].main, 0.7), "&:hover, &:active": {color: (e4.vars || e4).palette[t3].main}}})}))]});
})), Go = Y(`span`, {name: `MuiChip`, slot: `Label`})({overflow: `hidden`, textOverflow: `ellipsis`, paddingLeft: 12, paddingRight: 12, whiteSpace: `nowrap`, variants: [{props: {variant: `outlined`}, style: {paddingLeft: 11, paddingRight: 11}}, {props: {size: `small`}, style: {paddingLeft: 8, paddingRight: 8}}, {props: {size: `small`, variant: `outlined`}, style: {paddingLeft: 7, paddingRight: 7}}]});
function Ko(e4) {
  return e4.key === `Backspace` || e4.key === `Delete`;
}
var qo = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiChip`}), _a2 = n2, {avatar: r2, className: i2, clickable: a2, color: s2 = `default`, component: c2, deleteIcon: l2, disabled: d2 = false, icon: f2, label: m2, onClick: h2, onDelete: g2, onKeyDown: _2, onKeyUp: y2, size: x2 = `medium`, variant: S2 = `filled`, tabIndex: C2, skipFocusWhenDisabled: w2 = false, slots: T2 = {}, slotProps: E2 = {}} = _a2, D2 = __objRest(_a2, ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled", "slots", "slotProps"]), _b = D2, {nativeButton: O2} = _b, k2 = __objRest(_b, ["nativeButton"]), A2 = Qt(o(null), t2), j2 = (e5) => {
    e5.stopPropagation(), g2(e5);
  }, M2 = (e5) => {
    e5.currentTarget === e5.target && Ko(e5) && e5.preventDefault(), _2 && _2(e5);
  }, N2 = (e5) => {
    e5.currentTarget === e5.target && g2 && Ko(e5) && g2(e5), y2 && y2(e5);
  }, P2 = a2 !== false && h2 ? true : a2, F2 = P2 || g2 ? ti : c2 || `div`, I2 = __spreadProps(__spreadValues({}, n2), {component: F2, disabled: d2, size: x2, color: s2, iconColor: p(f2) && f2.props.color || s2, onDelete: !!g2, clickable: P2, variant: S2}), L2 = Uo(I2), R2 = F2 === ti ? __spreadValues(__spreadValues({component: c2 || `div`, internalNativeButton: false, focusVisibleClassName: L2.focusVisible}, g2 && {disableRipple: true}), O2 !== void 0 && {nativeButton: O2}) : {}, z2 = null;
  g2 && (z2 = l2 && p(l2) ? u(l2, {className: K(l2.props.className, L2.deleteIcon), onClick: j2}) : v(Vo, {className: L2.deleteIcon, onClick: j2}));
  let B2 = null;
  r2 && p(r2) && (B2 = u(r2, {className: K(L2.avatar, r2.props.className)}));
  let ee2 = null;
  f2 && p(f2) && (ee2 = u(f2, {className: K(L2.icon, f2.props.className)}));
  let te2 = {slots: T2, slotProps: E2}, [V2, H2] = vr(`root`, {elementType: Wo, externalForwardedProps: __spreadValues(__spreadValues({}, te2), k2), ownerState: I2, shouldForwardComponentProp: true, ref: A2, className: K(L2.root, i2), additionalProps: __spreadValues({disabled: P2 && d2 ? true : void 0, tabIndex: w2 && d2 ? -1 : C2}, R2), getSlotProps: (e5) => __spreadProps(__spreadValues({}, e5), {onClick: (t3) => {
    e5.onClick?.(t3), h2?.(t3);
  }, onKeyDown: (t3) => {
    e5.onKeyDown?.(t3), M2(t3);
  }, onKeyUp: (t3) => {
    e5.onKeyUp?.(t3), N2(t3);
  }})}), [ne2, re2] = vr(`label`, {elementType: Go, externalForwardedProps: te2, ownerState: I2, className: L2.label});
  return b(V2, __spreadProps(__spreadValues({as: F2}, H2), {children: [B2 || ee2, v(ne2, __spreadProps(__spreadValues({}, re2), {children: m2})), z2]}));
}), Jo = {entering: {opacity: 1}, entered: {opacity: 1}, exiting: {opacity: 0}, exited: {opacity: 0}}, Yo = {opacity: 0, visibility: `hidden`}, Xo = m(function(e4, t2) {
  let n2 = Yt(), r2 = {enter: n2.transitions.duration.enteringScreen, exit: n2.transitions.duration.leavingScreen}, _a2 = e4, {addEndListener: i2, appear: a2 = true, children: s2, disablePrefersReducedMotion: c2 = false, easing: l2, in: d2, onEnter: f2, onEntered: p2, onEntering: m2, onExit: h2, onExited: g2, onExiting: _2, style: y2, timeout: b2 = r2} = _a2, x2 = __objRest(_a2, ["addEndListener", "appear", "children", "disablePrefersReducedMotion", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout"]), S2 = fr(n2.motion.reducedMotion, c2), C2 = o(null), w2 = Qt(C2, Oo(s2), t2), T2 = yn(C2, m2), E2 = yn(C2, (e5, t3) => {
    S2.shouldReduceMotion || ln(e5);
    let r3 = xn({style: y2, timeout: b2, easing: l2}, {mode: `enter`}), i3 = S2.getTransitionTiming({duration: r3.duration, delay: r3.delay});
    e5.style.transition = n2.transitions.create(`opacity`, {duration: i3.duration, easing: r3.easing, delay: i3.delay}), f2 && f2(e5, t3);
  }), D2 = yn(C2, p2), O2 = yn(C2, _2), k2 = yn(C2, (e5) => {
    let t3 = xn({style: y2, timeout: b2, easing: l2}, {mode: `exit`}), r3 = S2.getTransitionTiming({duration: t3.duration, delay: t3.delay});
    e5.style.transition = n2.transitions.create(`opacity`, {duration: r3.duration, easing: t3.easing, delay: r3.delay}), h2 && h2(e5);
  }), A2 = yn(C2, (e5) => {
    e5.style.transition = ``, g2 && g2(e5);
  });
  return v(er, __spreadProps(__spreadValues({appear: a2, in: d2, nodeRef: C2, onEnter: E2, onEntered: D2, onEntering: T2, onExit: k2, onExited: A2, onExiting: O2, addEndListener: i2 ? (e5) => {
    i2(C2.current, e5);
  } : void 0, reduceMotion: S2.shouldReduceMotion, timeout: b2}, x2), {children: (e5, _b) => {
    var _c2 = _b, {ownerState: t3} = _c2, n3 = __objRest(_c2, ["ownerState"]);
    let r3 = bn(e5, d2, Jo, Yo, y2, s2.props.style);
    return u(s2, __spreadValues({style: r3, ref: w2}, n3));
  }}));
});
function Zo(e4) {
  return B(`MuiBackdrop`, e4);
}
var Qo = L(`MuiBackdrop`, [`root`, `invisible`]), $o = (e4) => {
  let {classes: t2, invisible: n2} = e4;
  return G({root: [`root`, n2 && `invisible`]}, Zo, t2);
}, es = Y(`div`, {name: `MuiBackdrop`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.invisible && t2.invisible];
}})({position: `fixed`, display: `flex`, alignItems: `center`, justifyContent: `center`, right: 0, bottom: 0, top: 0, left: 0, backgroundColor: `rgba(0, 0, 0, 0.5)`, WebkitTapHighlightColor: `transparent`, variants: [{props: {invisible: true}, style: {backgroundColor: `transparent`}}]}), ts = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiBackdrop`}), _a2 = n2, {children: r2, className: i2, component: a2 = `div`, invisible: o2 = false, open: s2, slotProps: c2 = {}, slots: l2 = {}, transitionDuration: u2} = _a2, d2 = __objRest(_a2, ["children", "className", "component", "invisible", "open", "slotProps", "slots", "transitionDuration"]), f2 = __spreadProps(__spreadValues({}, n2), {component: a2, invisible: o2}), p2 = $o(f2), m2 = {component: a2, slots: l2, slotProps: c2}, [h2, g2] = vr(`root`, {elementType: es, externalForwardedProps: m2, className: K(p2.root, i2), ownerState: f2}), [_2, y2] = vr(`transition`, {elementType: Xo, externalForwardedProps: m2, ownerState: f2});
  return v(_2, __spreadProps(__spreadValues(__spreadValues({in: s2, timeout: u2}, d2), y2), {children: v(h2, __spreadProps(__spreadValues({}, g2), {ref: t2, children: r2}))}));
});
function ns(e4) {
  return B(`MuiButton`, e4);
}
var rs = L(`MuiButton`, `root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd`.split(`.`)), is = f({}), as = f(void 0), os = (e4) => {
  let {color: t2, disableElevation: n2, fullWidth: r2, size: i2, variant: a2, loading: o2, loadingPosition: s2, classes: c2} = e4, l2 = {root: [`root`, o2 && `loading`, a2, `size${Q(i2)}`, `color${Q(t2)}`, n2 && `disableElevation`, r2 && `fullWidth`, o2 && `loadingPosition${Q(s2)}`], startIcon: [`icon`, `startIcon`], endIcon: [`icon`, `endIcon`], loadingIndicator: [`loadingIndicator`], loadingWrapper: [`loadingWrapper`]}, u2 = G(l2, ns, c2);
  return __spreadValues(__spreadValues({}, c2), u2);
}, ss = [{props: {size: `small`}, style: {"& > *:nth-of-type(1)": {fontSize: 18}}}, {props: {size: `medium`}, style: {"& > *:nth-of-type(1)": {fontSize: 20}}}, {props: {size: `large`}, style: {"& > *:nth-of-type(1)": {fontSize: 22}}}], cs = Y(ti, {shouldForwardProp: (e4) => Zt(e4) || e4 === `classes`, name: `MuiButton`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[n2.variant], t2[`size${Q(n2.size)}`], n2.color === `inherit` && t2.colorInherit, n2.disableElevation && t2.disableElevation, n2.fullWidth && t2.fullWidth, n2.loading && t2.loading];
}})(X(({theme: e4}) => {
  let t2 = e4.palette.mode === `light` ? e4.palette.grey[300] : e4.palette.grey[800], n2 = e4.palette.mode === `light` ? e4.palette.grey.A100 : e4.palette.grey[700];
  return __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, e4.typography.button), {minWidth: 64, padding: `6px 16px`, border: 0, borderRadius: (e4.vars || e4).shape.borderRadius}), Cn(e4, [`background-color`, `box-shadow`, `border-color`, `color`], {duration: e4.transitions.duration.short})), {"&:hover": {textDecoration: `none`}, [`&.${rs.disabled}`]: {color: (e4.vars || e4).palette.action.disabled}, variants: [{props: {variant: `contained`}, style: {color: `var(--variant-containedColor)`, backgroundColor: `var(--variant-containedBg)`, boxShadow: (e4.vars || e4).shadows[2], "&:hover": {boxShadow: (e4.vars || e4).shadows[4], "@media (hover: none)": {boxShadow: (e4.vars || e4).shadows[2]}}, "&:active": {boxShadow: (e4.vars || e4).shadows[8]}, [`&.${rs.focusVisible}`]: __spreadProps(__spreadValues({}, e4.focusVisible), {boxShadow: e4.focusVisible?.boxShadow ? `${(e4.vars || e4).shadows[6]}, ${e4.focusVisible.boxShadow}` : (e4.vars || e4).shadows[6]}), [`&.${rs.disabled}`]: {color: (e4.vars || e4).palette.action.disabled, boxShadow: (e4.vars || e4).shadows[0], backgroundColor: (e4.vars || e4).palette.action.disabledBackground}}}, {props: {variant: `outlined`}, style: {padding: `5px 15px`, border: `1px solid currentColor`, borderColor: `var(--variant-outlinedBorder, currentColor)`, backgroundColor: `var(--variant-outlinedBg)`, color: `var(--variant-outlinedColor)`, [`&.${rs.disabled}`]: {border: `1px solid ${(e4.vars || e4).palette.action.disabledBackground}`}}}, {props: {variant: `text`}, style: {padding: `6px 8px`, color: `var(--variant-textColor)`, backgroundColor: `var(--variant-textBg)`}}, ...Object.entries(e4.palette).filter(ai()).map(([t3]) => ({props: {color: t3}, style: {"--variant-textColor": (e4.vars || e4).palette[t3].main, "--variant-outlinedColor": (e4.vars || e4).palette[t3].main, "--variant-outlinedBorder": e4.alpha((e4.vars || e4).palette[t3].main, 0.5), "--variant-containedColor": (e4.vars || e4).palette[t3].contrastText, "--variant-containedBg": (e4.vars || e4).palette[t3].main, "@media (hover: hover)": {"&:hover": {"--variant-containedBg": (e4.vars || e4).palette[t3].dark, "--variant-textBg": e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.hoverOpacity), "--variant-outlinedBorder": (e4.vars || e4).palette[t3].main, "--variant-outlinedBg": e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.hoverOpacity)}}}})), {props: {color: `inherit`}, style: {color: `inherit`, borderColor: `currentColor`, "--variant-containedBg": e4.vars ? e4.vars.palette.Button.inheritContainedBg : t2, "@media (hover: hover)": {"&:hover": {"--variant-containedBg": e4.vars ? e4.vars.palette.Button.inheritContainedHoverBg : n2, "--variant-textBg": e4.alpha((e4.vars || e4).palette.text.primary, (e4.vars || e4).palette.action.hoverOpacity), "--variant-outlinedBg": e4.alpha((e4.vars || e4).palette.text.primary, (e4.vars || e4).palette.action.hoverOpacity)}}}}, {props: {size: `small`, variant: `text`}, style: {padding: `4px 5px`, fontSize: e4.typography.pxToRem(13)}}, {props: {size: `large`, variant: `text`}, style: {padding: `8px 11px`, fontSize: e4.typography.pxToRem(15)}}, {props: {size: `small`, variant: `outlined`}, style: {padding: `3px 9px`, fontSize: e4.typography.pxToRem(13)}}, {props: {size: `large`, variant: `outlined`}, style: {padding: `7px 21px`, fontSize: e4.typography.pxToRem(15)}}, {props: {size: `small`, variant: `contained`}, style: {padding: `4px 10px`, fontSize: e4.typography.pxToRem(13)}}, {props: {size: `large`, variant: `contained`}, style: {padding: `8px 22px`, fontSize: e4.typography.pxToRem(15)}}, {props: {disableElevation: true}, style: {boxShadow: `none`, "&:hover": {boxShadow: `none`}, [`&.${rs.focusVisible}`]: {boxShadow: e4.focusVisible?.boxShadow ?? `none`}, "&:active": {boxShadow: `none`}, [`&.${rs.disabled}`]: {boxShadow: `none`}}}, {props: {fullWidth: true}, style: {width: `100%`}}, {props: {loading: true, loadingPosition: `center`}, style: __spreadProps(__spreadValues({}, Cn(e4, [`background-color`, `box-shadow`, `border-color`], {duration: e4.transitions.duration.short})), {[`&.${rs.loading}`]: {color: `transparent`}})}]});
})), ls = Y(`span`, {name: `MuiButton`, slot: `StartIcon`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.startIcon, n2.loading && t2.startIconLoadingStart];
}})(({theme: e4}) => ({display: `inherit`, alignItems: `center`, marginRight: 8, marginLeft: -4, "&::before": {content: `"\\200b"`, width: 0, overflow: `hidden`}, variants: [{props: {size: `small`}, style: {marginLeft: -2}}, {props: {loadingPosition: `start`, loading: true}, style: __spreadProps(__spreadValues({}, Cn(e4, [`opacity`], {duration: e4.transitions.duration.short})), {opacity: 0})}, {props: {loadingPosition: `start`, loading: true, fullWidth: true}, style: {marginRight: -8}}, ...ss]})), us = Y(`span`, {name: `MuiButton`, slot: `EndIcon`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.endIcon, n2.loading && t2.endIconLoadingEnd];
}})(({theme: e4}) => ({display: `inherit`, marginRight: -4, marginLeft: 8, variants: [{props: {size: `small`}, style: {marginRight: -2}}, {props: {loadingPosition: `end`, loading: true}, style: __spreadProps(__spreadValues({}, Cn(e4, [`opacity`], {duration: e4.transitions.duration.short})), {opacity: 0})}, {props: {loadingPosition: `end`, loading: true, fullWidth: true}, style: {marginLeft: -8}}, ...ss]})), ds = Y(`span`, {name: `MuiButton`, slot: `LoadingIndicator`})(({theme: e4}) => ({display: `none`, position: `absolute`, visibility: `visible`, variants: [{props: {loading: true}, style: {display: `flex`}}, {props: {loadingPosition: `start`}, style: {left: 14}}, {props: {loadingPosition: `start`, size: `small`}, style: {left: 10}}, {props: {variant: `text`, loadingPosition: `start`}, style: {left: 6}}, {props: {loadingPosition: `center`}, style: {left: `50%`, transform: `translate(-50%)`, color: (e4.vars || e4).palette.action.disabled}}, {props: {loadingPosition: `end`}, style: {right: 14}}, {props: {loadingPosition: `end`, size: `small`}, style: {right: 10}}, {props: {variant: `text`, loadingPosition: `end`}, style: {right: 6}}, {props: {loadingPosition: `start`, fullWidth: true}, style: {position: `relative`, left: -10}}, {props: {loadingPosition: `end`, fullWidth: true}, style: {position: `relative`, right: -10}}]})), fs = Y(`span`, {name: `MuiButton`, slot: `LoadingIconPlaceholder`})({display: `inline-block`, width: `1em`, height: `1em`}), ps = m(function(e4, t2) {
  let n2 = l(is), r2 = l(as), i2 = Z({props: le(n2, e4), name: `MuiButton`}), _a2 = i2, {children: a2, color: o2 = `primary`, component: s2 = `button`, className: c2, disabled: u2 = false, disableElevation: d2 = false, disableFocusRipple: f2 = false, endIcon: p2, focusVisibleClassName: m2, fullWidth: h2 = false, id: g2, loading: _2 = null, loadingIndicator: y2, loadingPosition: x2 = `center`, size: S2 = `medium`, startIcon: C2, type: w2, variant: T2 = `text`} = _a2, E2 = __objRest(_a2, ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "id", "loading", "loadingIndicator", "loadingPosition", "size", "startIcon", "type", "variant"]), D2 = Un(g2), O2 = y2 ?? v(vi, {"aria-labelledby": D2, color: `inherit`, size: 16}), k2 = __spreadProps(__spreadValues({}, i2), {color: o2, component: s2, disabled: u2, disableElevation: d2, disableFocusRipple: f2, fullWidth: h2, loading: _2, loadingIndicator: O2, loadingPosition: x2, size: S2, type: w2, variant: T2}), A2 = os(k2), j2 = (C2 || _2 && x2 === `start`) && v(ls, {className: A2.startIcon, ownerState: k2, children: C2 || v(fs, {className: A2.loadingIconPlaceholder, ownerState: k2})}), M2 = (p2 || _2 && x2 === `end`) && v(us, {className: A2.endIcon, ownerState: k2, children: p2 || v(fs, {className: A2.loadingIconPlaceholder, ownerState: k2})}), N2 = r2 || ``, P2 = typeof _2 == `boolean` ? v(`span`, {className: A2.loadingWrapper, style: {display: `contents`}, children: _2 && v(ds, {className: A2.loadingIndicator, ownerState: k2, children: O2})}) : null, _b = A2, {root: F2} = _b, I2 = __objRest(_b, ["root"]);
  return b(cs, __spreadProps(__spreadValues({ownerState: k2, className: K(n2.className, A2.root, c2, N2), component: s2, disabled: u2 || _2, focusRipple: !f2, focusVisibleClassName: K(A2.focusVisible, m2), ref: t2, internalNativeButton: true, type: w2, id: _2 ? D2 : g2}, E2), {classes: I2, children: [j2, x2 !== `end` && P2, a2, x2 === `end` && P2, M2]}));
});
function ms(e4 = window) {
  let t2 = e4.document.documentElement.clientWidth;
  return e4.innerWidth - t2;
}
function hs(e4) {
  let t2 = Ut(e4);
  return e4 === t2.body || e4 === t2.documentElement ? Wt(e4).innerWidth > t2.documentElement.clientWidth : e4.scrollHeight > e4.clientHeight;
}
function gs(e4, t2) {
  t2 ? e4.setAttribute(`aria-hidden`, `true`) : e4.removeAttribute(`aria-hidden`);
}
function _s(e4) {
  return parseFloat(Wt(e4).getComputedStyle(e4).paddingRight) || 0;
}
function vs(e4) {
  let t2 = [`TEMPLATE`, `SCRIPT`, `STYLE`, `LINK`, `MAP`, `META`, `NOSCRIPT`, `PICTURE`, `COL`, `COLGROUP`, `PARAM`, `SLOT`, `SOURCE`, `TRACK`].includes(e4.tagName), n2 = e4.tagName === `INPUT` && e4.getAttribute(`type`) === `hidden`;
  return t2 || n2;
}
function ys(e4, t2) {
  let n2 = new Set(), r2 = e4;
  for (; r2 && r2 !== t2; )
    n2.add(r2), r2 = r2.parentElement;
  return r2 === t2 ? n2 : new Set();
}
function bs(e4, t2, n2, r2) {
  [].forEach.call(e4.children, (e5) => {
    e5 === t2 || vs(e5) || (n2.has(e5) ? bs(e5, t2, n2, r2) : r2.add(e5));
  });
}
function xs(e4) {
  let {container: t2, modals: n2} = e4, r2 = n2[n2.length - 1].modalRef, i2 = new Set();
  bs(t2, r2, ys(r2, t2), i2), i2.forEach((t3) => {
    !e4.hiddenSet.has(t3) && t3.getAttribute(`aria-hidden`) === `true` && i2.delete(t3);
  }), e4.hiddenSet.forEach((e5) => {
    i2.has(e5) || gs(e5, false);
  }), i2.forEach((e5) => gs(e5, true)), r2 && gs(r2, false), e4.hiddenSet = i2;
}
function Ss(e4, t2) {
  let n2 = [], r2 = e4.container;
  if (!t2.disableScrollLock) {
    let e5;
    if (r2.parentNode instanceof DocumentFragment)
      e5 = Ut(r2).body;
    else {
      let t3 = r2.parentElement, n3 = Wt(r2);
      e5 = t3?.nodeName === `HTML` && n3.getComputedStyle(t3).overflowY === `scroll` ? t3 : r2;
    }
    if (hs(e5)) {
      let t3 = ms(Wt(e5));
      n2.push({value: e5.style.paddingRight, property: `padding-right`, el: e5}), e5.style.paddingRight = `${_s(e5) + t3}px`;
      let i2 = Ut(r2).querySelectorAll(`.mui-fixed`);
      [].forEach.call(i2, (e6) => {
        n2.push({value: e6.style.paddingRight, property: `padding-right`, el: e6}), e6.style.paddingRight = `${_s(e6) + t3}px`;
      });
    }
    n2.push({value: e5.style.overflow, property: `overflow`, el: e5}, {value: e5.style.overflowX, property: `overflow-x`, el: e5}, {value: e5.style.overflowY, property: `overflow-y`, el: e5}), e5.style.overflow = `hidden`;
  }
  return () => {
    n2.forEach(({value: e5, el: t3, property: n3}) => {
      e5 ? t3.style.setProperty(n3, e5) : t3.style.removeProperty(n3);
    });
  };
}
var Cs = class {
  containers = [];
  modals = [];
  add(e4, t2) {
    let n2 = this.modals.indexOf(e4);
    if (n2 !== -1)
      return n2;
    n2 = this.modals.length, this.modals.push(e4), e4.modalRef && gs(e4.modalRef, false);
    let r2 = this.containers.findIndex((e5) => e5.container === t2);
    if (r2 !== -1)
      return this.containers[r2].modals.push(e4), xs(this.containers[r2]), n2;
    let i2 = {modals: [e4], container: t2, restore: null, hiddenSet: new Set()};
    return this.containers.push(i2), xs(i2), n2;
  }
  mount(e4, t2) {
    let n2 = this.containers.findIndex((t3) => t3.modals.includes(e4)), r2 = this.containers[n2];
    r2.restore || (r2.restore = Ss(r2, t2));
  }
  remove(e4, t2 = true) {
    let n2 = this.modals.indexOf(e4);
    if (n2 === -1)
      return n2;
    let r2 = this.containers.findIndex((t3) => t3.modals.includes(e4)), i2 = this.containers[r2];
    return i2.modals.splice(i2.modals.indexOf(e4), 1), this.modals.splice(n2, 1), i2.modals.length === 0 ? (i2.restore && i2.restore(), e4.modalRef && gs(e4.modalRef, t2), i2.hiddenSet.forEach((e5) => gs(e5, false)), i2.hiddenSet.clear(), this.containers.splice(r2, 1)) : (xs(i2), e4.modalRef && gs(e4.modalRef, t2)), n2;
  }
  isTopModal(e4) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e4;
  }
}, ws = ji, Ts = `data-mui-focusable`;
function Es(e4) {
  return e4 ? e4.hasAttribute(`data-mui-focusable`) ? e4 : e4.querySelector(`[${Ts}]`) : null;
}
var Ds = [`input`, `select`, `textarea`, `a[href]`, `button`, `[tabindex]`, `audio[controls]`, `video[controls]`, `[contenteditable]:not([contenteditable="false"])`].join(`,`);
function Os(e4) {
  let t2 = parseInt(e4.getAttribute(`tabindex`) || ``, 10);
  return Number.isNaN(t2) ? e4.contentEditable === `true` || (e4.nodeName === `AUDIO` || e4.nodeName === `VIDEO` || e4.nodeName === `DETAILS`) && e4.getAttribute(`tabindex`) === null ? 0 : e4.tabIndex : t2;
}
function ks(e4) {
  if (e4.tagName !== `INPUT` || e4.type !== `radio` || !e4.name)
    return false;
  let t2 = (t3) => e4.ownerDocument.querySelector(`input[type="radio"]${t3}`), n2 = t2(`[name="${e4.name}"]:checked`);
  return n2 || (n2 = t2(`[name="${e4.name}"]`)), n2 !== e4;
}
function As(e4) {
  return !(e4.disabled || e4.tagName === `INPUT` && e4.type === `hidden` || ks(e4));
}
function js(e4) {
  let t2 = [], n2 = [];
  return Array.from(e4.querySelectorAll(Ds)).forEach((e5, r2) => {
    let i2 = Os(e5);
    i2 !== -1 && As(e5) && (i2 === 0 ? t2.push(e5) : n2.push({documentOrder: r2, tabIndex: i2, node: e5}));
  }), n2.sort((e5, t3) => e5.tabIndex === t3.tabIndex ? e5.documentOrder - t3.documentOrder : e5.tabIndex - t3.tabIndex).map((e5) => e5.node).concat(t2);
}
function Ms() {
  return true;
}
function Ns(e4) {
  let {children: t2, disableAutoFocus: n2 = false, disableEnforceFocus: r2 = false, disableRestoreFocus: i2 = false, getTabbable: a2 = js, isEnabled: c2 = Ms, open: l2} = e4, d2 = o(false), f2 = o(null), p2 = o(null), m2 = o(null), h2 = o(null), g2 = o(false), _2 = o(null), y2 = Vt(Oo(t2), _2), x2 = o(null);
  s(() => {
    l2 && _2.current && (g2.current = !n2);
  }, [n2, l2]), s(() => {
    if (d2.current = false, !l2 || !_2.current)
      return;
    let e5 = nn(Ut(_2.current)), t3 = Es(_2.current) ?? _2.current;
    return ws(_2.current, e5) || (t3.hasAttribute(`tabIndex`) || t3.setAttribute(`tabIndex`, `-1`), g2.current && t3.focus()), () => {
      !i2 && m2.current && (d2.current = true, m2.current.focus(), m2.current = null);
    };
  }, [l2]), s(() => {
    if (!l2 || !_2.current)
      return;
    let e5 = Ut(_2.current), t3 = (t4) => {
      if (x2.current = t4, r2 || !c2() || t4.key !== `Tab`)
        return;
      let n4 = _2.current, i4 = nn(e5);
      if (n4 === null)
        return;
      let o2 = Es(n4);
      if (i4 === n4 || i4 === o2) {
        let e6 = a2(n4);
        if (e6.length === 0)
          return;
        t4.preventDefault(), t4.shiftKey ? e6[e6.length - 1].focus() : e6[0].focus();
      } else if (ws(n4, i4)) {
        let e6 = a2(n4), r3 = e6.indexOf(i4);
        if (r3 === -1 || !e6.some((e7) => Os(e7) > 0))
          return;
        t4.preventDefault();
        let o3 = 0;
        o3 = t4.shiftKey ? r3 <= 0 ? e6.length - 1 : r3 - 1 : r3 === e6.length - 1 ? 0 : r3 + 1, e6[o3].focus();
      }
    }, n3 = () => {
      let t4 = _2.current;
      if (t4 === null)
        return;
      let n4 = nn(e5);
      if (!e5.hasFocus() || !c2() || d2.current) {
        d2.current = false;
        return;
      }
      if (ws(t4, n4) || r2 && n4 !== f2.current && n4 !== p2.current)
        return;
      if (n4 !== h2.current)
        h2.current = null;
      else if (h2.current !== null)
        return;
      if (!g2.current)
        return;
      let i4 = [];
      if ((n4 === f2.current || n4 === p2.current) && (i4 = a2(_2.current)), i4.length > 0) {
        let e6 = !!(x2.current?.shiftKey && x2.current?.key === `Tab`), t5 = i4[0], n5 = i4[i4.length - 1];
        typeof t5 != `string` && typeof n5 != `string` && (e6 ? n5.focus() : t5.focus());
      } else
        t4.focus();
    };
    e5.addEventListener(`focusin`, n3), e5.addEventListener(`keydown`, t3, true);
    let i3 = setInterval(() => {
      let t4 = nn(e5);
      t4 && t4.tagName === `BODY` && n3();
    }, 50);
    return () => {
      clearInterval(i3), e5.removeEventListener(`focusin`, n3), e5.removeEventListener(`keydown`, t3, true);
    };
  }, [n2, r2, i2, c2, l2, a2]);
  let S2 = (e5) => {
    m2.current === null && (m2.current = e5.relatedTarget), g2.current = true, h2.current = e5.target;
    let n3 = t2.props.onFocus;
    n3 && n3(e5);
  }, C2 = (e5) => {
    m2.current === null && (m2.current = e5.relatedTarget), g2.current = true;
  };
  return b(w, {children: [v(`div`, {tabIndex: l2 ? 0 : -1, onFocus: C2, ref: f2, "data-testid": `sentinelStart`}), u(t2, {ref: y2, onFocus: S2}), v(`div`, {tabIndex: l2 ? 0 : -1, onFocus: C2, ref: p2, "data-testid": `sentinelEnd`})]});
}
function Ps(e4) {
  return typeof e4 == `function` ? e4() : e4;
}
function Fs(e4) {
  return e4 ? e4.props.hasOwnProperty(`in`) : false;
}
var Is = () => {
}, Ls = new Cs();
function Rs(e4) {
  let {container: t2, disableScrollLock: n2 = false, closeAfterTransition: r2 = false, onTransitionEnter: i2, onTransitionExited: a2, children: c2, onClose: l2, open: u2, rootRef: d2} = e4, f2 = o({}), p2 = o(null), m2 = o(null), h2 = o(null), _2 = Vt(h2, d2), [v2, y2] = g(!u2), b2 = Fs(c2), x2 = true;
  (e4[`aria-hidden`] === `false` || e4[`aria-hidden`] === false) && (x2 = false);
  let S2 = () => Ut(p2.current), C2 = () => (f2.current.modalRef = h2.current, f2.current.mount = p2.current, f2.current), w2 = () => {
    Ls.mount(C2(), {disableScrollLock: n2}), h2.current && (h2.current.scrollTop = 0);
  }, E2 = Ht(() => {
    let e5 = Ps(t2) || S2().body;
    Ls.add(C2(), e5), h2.current && w2();
  }), D2 = () => Ls.isTopModal(C2()), O2 = Ht((e5) => {
    p2.current = e5, e5 && (m2.current = e5, u2 && D2() ? w2() : h2.current && gs(h2.current, x2));
  }), k2 = T(() => {
    Ls.remove(C2(), x2);
  }, [x2]);
  s(() => () => {
    k2();
  }, [k2]), s(() => {
    u2 ? E2() : (!b2 || !r2) && k2();
  }, [u2, k2, b2, r2, E2]);
  let A2 = (e5) => (t3) => {
    e5.onKeyDown?.(t3), t3.key === `Escape` && t3.which !== 229 && D2() && (t3.stopPropagation(), l2 && l2(t3, `escapeKeyDown`));
  }, j2 = (e5) => (t3) => {
    e5.onClick?.(t3), t3.target === t3.currentTarget && l2 && l2(t3, `backdropClick`);
  };
  return {getRootProps: (t3 = {}) => {
    let n3 = hr(e4);
    delete n3.onTransitionEnter, delete n3.onTransitionExited;
    let r3 = __spreadValues(__spreadValues({}, n3), t3);
    return __spreadProps(__spreadValues({role: `presentation`}, r3), {onKeyDown: A2(r3), ref: _2});
  }, getBackdropProps: (e5 = {}) => {
    let t3 = e5;
    return __spreadProps(__spreadValues({"aria-hidden": true}, t3), {onClick: j2(t3), open: u2});
  }, getTransitionProps: () => ({onEnter: Nn(() => {
    y2(false), i2 && i2();
  }, c2?.props.onEnter ?? Is), onExited: Nn(() => {
    y2(true), a2 && a2(), r2 && k2();
  }, c2?.props.onExited ?? Is)}), rootRef: _2, portalRef: O2, portalContainer: !u2 && b2 && !v2 ? m2.current ?? t2 : t2, isTopModal: D2, exited: v2, hasTransition: b2};
}
function zs(e4) {
  return B(`MuiModal`, e4);
}
var Bs = L(`MuiModal`, [`root`, `hidden`, `backdrop`]), Vs = (e4) => {
  let {open: t2, exited: n2, classes: r2} = e4;
  return G({root: [`root`, !t2 && n2 && `hidden`], backdrop: [`backdrop`]}, zs, r2);
}, Hs = Y(`div`, {name: `MuiModal`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, !n2.open && n2.exited && t2.hidden];
}})(X(({theme: e4}) => ({position: `fixed`, zIndex: (e4.vars || e4).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{props: ({ownerState: e5}) => !e5.open && e5.exited, style: {visibility: `hidden`}}]}))), Us = Y(ts, {name: `MuiModal`, slot: `Backdrop`})({zIndex: -1}), Ws = m(function(e4, t2) {
  let n2 = Z({name: `MuiModal`, props: e4}), _a2 = n2, {classes: r2, className: i2, closeAfterTransition: a2 = false, children: o2, container: s2, component: c2, disableAutoFocus: l2 = false, disableEnforceFocus: d2 = false, disablePortal: f2 = false, disableRestoreFocus: p2 = false, disableScrollLock: m2 = false, hideBackdrop: h2 = false, keepMounted: g2 = false, onClose: _2, onTransitionEnter: y2, onTransitionExited: x2, open: S2, slotProps: C2 = {}, slots: w2 = {}, theme: T2} = _a2, E2 = __objRest(_a2, ["classes", "className", "closeAfterTransition", "children", "container", "component", "disableAutoFocus", "disableEnforceFocus", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"]), D2 = __spreadProps(__spreadValues({}, n2), {closeAfterTransition: a2, disableAutoFocus: l2, disableEnforceFocus: d2, disablePortal: f2, disableRestoreFocus: p2, disableScrollLock: m2, hideBackdrop: h2, keepMounted: g2}), {getRootProps: O2, getBackdropProps: k2, getTransitionProps: A2, portalRef: j2, portalContainer: M2, isTopModal: N2, exited: P2, hasTransition: F2} = Rs(__spreadProps(__spreadValues({}, D2), {rootRef: t2})), I2 = __spreadProps(__spreadValues({}, D2), {exited: P2}), L2 = Vs(I2), R2 = {};
  if (o2.props.tabIndex === void 0 && (R2.tabIndex = `-1`), F2) {
    let {onEnter: e5, onExited: t3} = A2();
    R2.onEnter = e5, R2.onExited = t3;
  }
  let z2 = {slots: w2, slotProps: C2}, [B2, ee2] = vr(`root`, {ref: t2, elementType: Hs, externalForwardedProps: __spreadProps(__spreadValues(__spreadValues({}, z2), E2), {component: c2}), getSlotProps: O2, ownerState: I2, className: K(i2, L2?.root, !I2.open && I2.exited && L2?.hidden)}), [te2, V2] = vr(`backdrop`, {elementType: Us, externalForwardedProps: z2, shouldForwardComponentProp: true, getSlotProps: (e5) => k2(__spreadProps(__spreadValues({}, e5), {onClick: (t3) => {
    e5?.onClick && e5.onClick(t3);
  }})), className: L2?.backdrop, ownerState: I2});
  return !g2 && !S2 && (!F2 || P2) ? null : v(Ao, {ref: j2, container: M2, disablePortal: f2, children: b(B2, __spreadProps(__spreadValues({}, ee2), {children: [h2 ? null : v(te2, __spreadValues({}, V2)), v(Ns, {disableEnforceFocus: d2, disableAutoFocus: l2, disableRestoreFocus: p2, isEnabled: N2, open: S2, children: u(o2, R2)})]}))});
});
function Gs(e4) {
  return B(`MuiDialog`, e4);
}
var Ks = L(`MuiDialog`, [`root`, `backdrop`, `scrollPaper`, `scrollBody`, `container`, `paper`, `paperWidthFalse`, `paperWidthXs`, `paperWidthSm`, `paperWidthMd`, `paperWidthLg`, `paperWidthXl`, `paperFullWidth`, `paperFullScreen`]), qs = f({}), Js = Y(ts, {name: `MuiDialog`, slot: `Backdrop`})({zIndex: -1}), Ys = (e4) => {
  let {classes: t2, scroll: n2, maxWidth: r2, fullWidth: i2, fullScreen: a2} = e4, o2 = {root: [`root`], backdrop: [`backdrop`], container: [`container`, `scroll${Q(n2)}`], paper: [`paper`, `paperWidth${Q(String(r2))}`, i2 && `paperFullWidth`, a2 && `paperFullScreen`]};
  return G(o2, Gs, t2);
}, Xs = Y(Ws, {name: `MuiDialog`, slot: `Root`})({"@media print": {position: `absolute !important`}}), Zs = Y(`div`, {name: `MuiDialog`, slot: `Container`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.container, t2[`scroll${Q(n2.scroll)}`]];
}})({height: `100%`, "@media print": {height: `auto`}, outline: 0, variants: [{props: {scroll: `paper`}, style: {display: `flex`, justifyContent: `center`, alignItems: `center`}}, {props: {scroll: `body`}, style: {overflowY: `auto`, overflowX: `hidden`, textAlign: `center`, "&::after": {content: `""`, display: `inline-block`, verticalAlign: `middle`, height: `100%`, width: `0`}}}]}), Qs = Y(Cr, {name: `MuiDialog`, slot: `Paper`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.paper, t2[`paperWidth${Q(String(n2.maxWidth))}`], n2.fullWidth && t2.paperFullWidth, n2.fullScreen && t2.paperFullScreen];
}})(X(({theme: e4}) => ({margin: 32, position: `relative`, overflowY: `auto`, outline: 0, "@media print": {overflowY: `visible`, boxShadow: `none`}, variants: [{props: {scroll: `paper`}, style: {display: `flex`, flexDirection: `column`, maxHeight: `calc(100% - 64px)`}}, {props: {scroll: `body`}, style: {display: `inline-block`, verticalAlign: `middle`, textAlign: `initial`}}, {props: ({ownerState: e5}) => !e5.maxWidth, style: {maxWidth: `calc(100% - 64px)`}}, {props: {maxWidth: `xs`}, style: {maxWidth: e4.breakpoints.unit === `px` ? Math.max(e4.breakpoints.values.xs, 444) : `max(${e4.breakpoints.values.xs}${e4.breakpoints.unit}, 444px)`}}, {props: {maxWidth: `xs`, scroll: `body`}, style: {[e4.breakpoints.down(Math.max(e4.breakpoints.values.xs, 444) + 64)]: {maxWidth: `calc(100% - 64px)`}}}, ...Object.keys(e4.breakpoints.values).filter((e5) => e5 !== `xs`).map((t2) => ({props: {maxWidth: t2}, style: {maxWidth: `${e4.breakpoints.values[t2]}${e4.breakpoints.unit}`}})), ...Object.keys(e4.breakpoints.values).filter((e5) => e5 !== `xs`).map((t2) => ({props: {maxWidth: t2, scroll: `body`}, style: {[e4.breakpoints.down(e4.breakpoints.values[t2] + 64)]: {maxWidth: `calc(100% - 64px)`}}})), {props: ({ownerState: e5}) => e5.fullWidth, style: {width: `calc(100% - 64px)`}}, {props: ({ownerState: e5}) => e5.fullScreen, style: {margin: 0, width: `100%`, maxWidth: `100%`, height: `100%`, maxHeight: `none`, borderRadius: 0}}, {props: ({ownerState: e5}) => e5.fullScreen && e5.scroll === `body`, style: {margin: 0, maxWidth: `100%`}}]}))), $s = m(function(e4, t2) {
  let r2 = Z({props: e4, name: `MuiDialog`}), i2 = Yt(), a2 = {enter: i2.transitions.duration.enteringScreen, exit: i2.transitions.duration.leavingScreen}, _a2 = r2, {"aria-describedby": s2, "aria-labelledby": c2, "aria-modal": l2 = true, children: u2, className: d2, fullScreen: f2 = false, fullWidth: p2 = false, maxWidth: m2 = `sm`, onClick: h2, onClose: g2, open: _2, PaperComponent: y2 = Cr, role: b2 = `dialog`, scroll: x2 = `paper`, slots: S2 = {}, slotProps: C2 = {}, transitionDuration: w2 = a2} = _a2, T2 = __objRest(_a2, ["aria-describedby", "aria-labelledby", "aria-modal", "children", "className", "fullScreen", "fullWidth", "maxWidth", "onClick", "onClose", "open", "PaperComponent", "role", "scroll", "slots", "slotProps", "transitionDuration"]), E2 = __spreadProps(__spreadValues({}, r2), {fullScreen: f2, fullWidth: p2, maxWidth: m2, scroll: x2}), D2 = Ys(E2), O2 = o(), k2 = (e5) => {
    O2.current = e5.target === e5.currentTarget;
  }, A2 = (e5) => {
    h2 && h2(e5), O2.current && (O2.current = null, g2 && g2(e5, `backdropClick`));
  }, j2 = te(c2), M2 = n(() => ({titleId: j2}), [j2]), N2 = {slots: S2, slotProps: C2}, [P2, F2] = vr(`root`, {elementType: Xs, shouldForwardComponentProp: true, externalForwardedProps: N2, ownerState: E2, className: K(D2.root, d2), ref: t2}), [I2, L2] = vr(`backdrop`, {elementType: Js, shouldForwardComponentProp: true, externalForwardedProps: N2, ownerState: E2, className: D2.backdrop}), [R2, z2] = vr(`paper`, {elementType: Qs, shouldForwardComponentProp: true, externalForwardedProps: N2, ownerState: E2, className: D2.paper, additionalProps: {elevation: 24, role: b2, "aria-describedby": s2, "aria-labelledby": j2, "aria-modal": l2, tabIndex: -1, [Ts]: ``}}), [B2, ee2] = vr(`container`, {elementType: Zs, externalForwardedProps: N2, ownerState: E2, className: D2.container}), [V2, H2] = vr(`transition`, {elementType: Xo, externalForwardedProps: N2, ownerState: E2, additionalProps: {appear: true, in: _2, timeout: w2, role: `presentation`}});
  return v(P2, __spreadProps(__spreadValues(__spreadValues({closeAfterTransition: true, slots: {backdrop: I2}, slotProps: {backdrop: __spreadValues({transitionDuration: w2}, L2)}, onClose: g2, open: _2, onClick: A2}, F2), T2), {children: v(V2, __spreadProps(__spreadValues({}, H2), {children: v(B2, __spreadProps(__spreadValues({onMouseDown: k2}, ee2), {children: v(R2, __spreadProps(__spreadValues({as: y2}, z2), {children: v(qs.Provider, {value: M2, children: u2})}))}))}))}));
});
function ec(e4) {
  return B(`MuiDialogActions`, e4);
}
var tc = L(`MuiDialogActions`, [`root`, `spacing`]), nc = (e4) => {
  let {classes: t2, disableSpacing: n2} = e4;
  return G({root: [`root`, !n2 && `spacing`]}, ec, t2);
}, rc = Y(`div`, {name: `MuiDialogActions`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, !n2.disableSpacing && t2.spacing];
}})({display: `flex`, alignItems: `center`, padding: 8, justifyContent: `flex-end`, flex: `0 0 auto`, variants: [{props: ({ownerState: e4}) => !e4.disableSpacing, style: {"& > :not(style) ~ :not(style)": {marginLeft: 8}}}]}), ic = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiDialogActions`}), _a2 = n2, {className: r2, disableSpacing: i2 = false} = _a2, a2 = __objRest(_a2, ["className", "disableSpacing"]), o2 = __spreadProps(__spreadValues({}, n2), {disableSpacing: i2}), s2 = nc(o2);
  return v(rc, __spreadValues({className: K(s2.root, r2), ownerState: o2, ref: t2}, a2));
});
function ac(e4) {
  return B(`MuiDialogContent`, e4);
}
var oc = L(`MuiDialogContent`, [`root`, `dividers`]);
function sc(e4) {
  return B(`MuiDialogTitle`, e4);
}
var cc = L(`MuiDialogTitle`, [`root`]), lc = (e4) => {
  let {classes: t2, dividers: n2} = e4;
  return G({root: [`root`, n2 && `dividers`]}, ac, t2);
}, uc = Y(`div`, {name: `MuiDialogContent`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.dividers && t2.dividers];
}})(X(({theme: e4}) => __spreadProps(__spreadValues({flex: `1 1 auto`, WebkitOverflowScrolling: `touch`, overflowY: `auto`, padding: `20px 24px`}, e4.focusVisible && {"&:focus-visible": __spreadValues(__spreadValues({}, Ue(1)), e4.focusVisible)}), {variants: [{props: ({ownerState: e5}) => e5.dividers, style: {padding: `16px 24px`, borderTop: `1px solid ${(e4.vars || e4).palette.divider}`, borderBottom: `1px solid ${(e4.vars || e4).palette.divider}`}}, {props: ({ownerState: e5}) => !e5.dividers, style: {[`.${cc.root} + &`]: {paddingTop: 0}}}]}))), dc = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiDialogContent`}), _a2 = n2, {className: r2, dividers: i2 = false} = _a2, a2 = __objRest(_a2, ["className", "dividers"]), o2 = __spreadProps(__spreadValues({}, n2), {dividers: i2}), s2 = lc(o2);
  return v(uc, __spreadValues({className: K(s2.root, r2), ownerState: o2, ref: t2}, a2));
});
function fc(e4) {
  return B(`MuiDivider`, e4);
}
var pc = L(`MuiDivider`, [`root`, `absolute`, `fullWidth`, `inset`, `middle`, `flexItem`, `vertical`, `withChildren`, `textAlignRight`, `textAlignLeft`, `wrapper`, `wrapperVertical`]);
function mc(e4) {
  return B(`MuiFormControl`, e4);
}
var hc = L(`MuiFormControl`, [`root`, `marginNone`, `marginNormal`, `marginDense`, `fullWidth`, `disabled`]), gc = (e4) => {
  let {classes: t2, margin: n2, fullWidth: r2} = e4, i2 = {root: [`root`, n2 !== `none` && `margin${Q(n2)}`, r2 && `fullWidth`]};
  return G(i2, mc, t2);
}, _c = Y(`div`, {name: `MuiFormControl`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[`margin${Q(n2.margin)}`], n2.fullWidth && t2.fullWidth];
}})({display: `inline-flex`, flexDirection: `column`, position: `relative`, minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: `top`, variants: [{props: {margin: `normal`}, style: {marginTop: 16, marginBottom: 8}}, {props: {margin: `dense`}, style: {marginTop: 8, marginBottom: 4}}, {props: {fullWidth: true}, style: {width: `100%`}}]}), vc = m(function(e4, t2) {
  let r2 = Z({props: e4, name: `MuiFormControl`}), _a2 = r2, {children: i2, className: a2, color: s2 = `primary`, component: c2 = `div`, disabled: l2 = false, error: u2 = false, focused: d2, fullWidth: f2 = false, hiddenLabel: p2 = false, margin: m2 = `none`, required: h2 = false, size: _2 = `medium`, variant: y2 = `outlined`} = _a2, b2 = __objRest(_a2, ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"]), x2 = __spreadProps(__spreadValues({}, r2), {color: s2, component: c2, disabled: l2, error: u2, fullWidth: f2, hiddenLabel: p2, margin: m2, required: h2, size: _2, variant: y2}), C2 = gc(x2), [w2, E2] = g(() => {
    let e5 = false;
    return i2 && S.forEach(i2, (t3) => {
      if (!Bn(t3, [`Input`, `Select`]))
        return;
      let n2 = Bn(t3, [`Select`]) ? t3.props.input : t3;
      n2 && on(n2.props) && (e5 = true);
    }), e5;
  }), [D2, O2] = g(() => {
    let e5 = false;
    return i2 && S.forEach(i2, (t3) => {
      Bn(t3, [`Input`, `Select`]) && (an(t3.props, true) || an(t3.props.inputProps, true)) && (e5 = true);
    }), e5;
  }), [k2, A2] = g(false);
  l2 && k2 && A2(false);
  let j2 = d2 !== void 0 && !l2 ? d2 : k2, M2;
  o(false);
  let N2 = T(() => {
    O2(true);
  }, []), P2 = T(() => {
    O2(false);
  }, []), F2 = n(() => ({adornedStart: w2, setAdornedStart: E2, color: s2, disabled: l2, error: u2, filled: D2, focused: j2, fullWidth: f2, hiddenLabel: p2, size: _2, onBlur: () => {
    A2(false);
  }, onFocus: () => {
    A2(true);
  }, onEmpty: P2, onFilled: N2, registerEffect: M2, required: h2, variant: y2}), [w2, s2, l2, u2, D2, j2, f2, p2, M2, P2, N2, h2, _2, y2]);
  return v(Gt.Provider, {value: F2, children: v(_c, __spreadProps(__spreadValues({as: c2, ownerState: x2, className: K(C2.root, a2), ref: t2}, b2), {children: i2}))});
}), yc, bc = (e4) => {
  let {classes: t2, contained: n2, size: r2, disabled: i2, error: a2, filled: o2, focused: s2, required: c2} = e4, l2 = {root: [`root`, i2 && `disabled`, a2 && `error`, r2 && `size${Q(r2)}`, n2 && `contained`, s2 && `focused`, o2 && `filled`, c2 && `required`]};
  return G(l2, wn, t2);
}, xc = Y(`p`, {name: `MuiFormHelperText`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.size && t2[`size${Q(n2.size)}`], n2.contained && t2.contained, n2.filled && t2.filled];
}})(X(({theme: e4}) => __spreadProps(__spreadValues({color: (e4.vars || e4).palette.text.secondary}, e4.typography.caption), {textAlign: `left`, marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0, [`&.${Tn.disabled}`]: {color: (e4.vars || e4).palette.text.disabled}, [`&.${Tn.error}`]: {color: (e4.vars || e4).palette.error.main}, variants: [{props: {size: `small`}, style: {marginTop: 4}}, {props: ({ownerState: e5}) => e5.contained, style: {marginLeft: 14, marginRight: 14}}]}))), Sc = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiFormHelperText`}), _a2 = n2, {children: r2, className: i2, component: a2 = `p`, disabled: o2, error: s2, filled: c2, focused: l2, margin: u2, required: d2, variant: f2} = _a2, p2 = __objRest(_a2, ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]), [m2] = qt({props: n2, states: [`variant`, `size`, `disabled`, `error`, `filled`, `focused`, `required`]}), h2 = __spreadProps(__spreadValues({}, n2), {component: a2, contained: m2.variant === `filled` || m2.variant === `outlined`, variant: m2.variant, size: m2.size, disabled: m2.disabled, error: m2.error, filled: m2.filled, focused: m2.focused, required: m2.required});
  delete h2.ownerState;
  let g2 = bc(h2);
  return v(xc, __spreadProps(__spreadValues({as: a2, className: K(g2.root, i2), ref: t2}, p2), {ownerState: h2, children: r2 === ` ` ? yc || (yc = v(`span`, {className: `notranslate`, "aria-hidden": true, children: `\u200B`})) : r2}));
}), Cc = (e4) => {
  let {classes: t2, color: n2, focused: r2, disabled: i2, error: a2, filled: o2, required: s2} = e4, c2 = {root: [`root`, `color${Q(n2)}`, i2 && `disabled`, a2 && `error`, o2 && `filled`, r2 && `focused`, s2 && `required`], asterisk: [`asterisk`, a2 && `error`]};
  return G(c2, En, t2);
}, wc = Y(`label`, {name: `MuiFormLabel`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.color === `secondary` && t2.colorSecondary, n2.filled && t2.filled];
}})(X(({theme: e4}) => __spreadProps(__spreadValues({color: (e4.vars || e4).palette.text.secondary}, e4.typography.body1), {lineHeight: `1.4375em`, padding: 0, position: `relative`, variants: [...Object.entries(e4.palette).filter(ai()).map(([t2]) => ({props: {color: t2}, style: {[`&.${Dn.focused}`]: {color: (e4.vars || e4).palette[t2].main}}})), {props: {}, style: {[`&.${Dn.disabled}`]: {color: (e4.vars || e4).palette.text.disabled}, [`&.${Dn.error}`]: {color: (e4.vars || e4).palette.error.main}}}]}))), Tc = Y(`span`, {name: `MuiFormLabel`, slot: `Asterisk`})(X(({theme: e4}) => ({[`&.${Dn.error}`]: {color: (e4.vars || e4).palette.error.main}}))), Ec = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiFormLabel`}), _a2 = n2, {children: r2, className: i2, color: a2, component: o2 = `label`, disabled: s2, error: c2, filled: l2, focused: u2, required: d2} = _a2, f2 = __objRest(_a2, ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]), [p2] = qt({props: n2, states: [`color`, `required`, `focused`, `disabled`, `error`, `filled`]}), m2 = __spreadProps(__spreadValues({}, n2), {color: p2.color || `primary`, component: o2, disabled: p2.disabled, error: p2.error, filled: p2.filled, focused: p2.focused, required: p2.required}), h2 = Cc(m2);
  return b(wc, __spreadProps(__spreadValues({as: o2, ownerState: m2, className: K(h2.root, i2), ref: t2}, f2), {children: [r2, p2.required && b(Tc, {ownerState: m2, "aria-hidden": true, className: h2.asterisk, children: [`\u2009`, `*`]})]}));
});
function Dc(e4) {
  return `scale(${e4}, ${e4 ** 2})`;
}
var Oc = {entering: {opacity: 1, transform: Dc(1)}, entered: {opacity: 1, transform: `none`}, exiting: {opacity: 0, transform: Dc(0.75)}, exited: {opacity: 0, transform: Dc(0.75)}}, kc = {opacity: 0, transform: Dc(0.75), visibility: `hidden`}, Ac = m(function(e4, t2) {
  let _a2 = e4, {addEndListener: n2, appear: r2 = true, children: i2, disablePrefersReducedMotion: a2 = false, easing: s2, in: c2, onEnter: l2, onEntered: d2, onEntering: f2, onExit: p2, onExited: m2, onExiting: h2, style: g2, timeout: _2 = `auto`} = _a2, y2 = __objRest(_a2, ["addEndListener", "appear", "children", "disablePrefersReducedMotion", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout"]), b2 = o(null), x2 = Yt(), S2 = fr(x2.motion.reducedMotion, a2), C2 = o(null), w2 = Qt(C2, Oo(i2), t2), T2 = yn(C2, f2), E2 = yn(C2, (e5, t3) => {
    S2.shouldReduceMotion || ln(e5);
    let {duration: n3, delay: r3, easing: i3} = xn({style: g2, timeout: _2, easing: s2}, {mode: `enter`}), a3;
    _2 === `auto` && !S2.shouldReduceMotion ? (a3 = x2.transitions.getAutoHeightDuration(e5.clientHeight), b2.current = a3) : (a3 = n3, b2.current = null);
    let o2 = S2.getTransitionTiming({duration: a3, delay: r3});
    e5.style.transition = [x2.transitions.create(`opacity`, {duration: o2.duration, delay: o2.delay}), x2.transitions.create(`transform`, {duration: typeof o2.duration == `string` ? o2.duration : o2.duration * 0.666, delay: o2.delay, easing: i3})].join(`,`), l2 && l2(e5, t3);
  }), D2 = yn(C2, d2), O2 = yn(C2, h2), k2 = yn(C2, (e5) => {
    let {duration: t3, delay: n3, easing: r3} = xn({style: g2, timeout: _2, easing: s2}, {mode: `exit`}), i3;
    _2 === `auto` && !S2.shouldReduceMotion ? (i3 = x2.transitions.getAutoHeightDuration(e5.clientHeight), b2.current = i3) : (i3 = t3, b2.current = null);
    let a3 = S2.getTransitionTiming({duration: i3, delay: n3});
    e5.style.transition = [x2.transitions.create(`opacity`, {duration: a3.duration, delay: a3.delay}), x2.transitions.create(`transform`, {duration: typeof a3.duration == `string` ? a3.duration : a3.duration * 0.666, delay: a3.delay || (typeof a3.duration == `string` ? a3.duration : a3.duration * 0.333), easing: r3})].join(`,`), e5.style.opacity = 0, e5.style.transform = Dc(0.75), p2 && p2(e5);
  }), A2 = yn(C2, (e5) => {
    e5.style.transition = ``, m2 && m2(e5);
  });
  return v(er, __spreadProps(__spreadValues({appear: r2, in: c2, nodeRef: C2, onEnter: E2, onEntered: D2, onEntering: T2, onExit: k2, onExited: A2, onExiting: O2, addEndListener: n2 ? (e5) => {
    n2(C2.current, e5);
  } : void 0, getAutoTimeout: _2 === `auto` ? () => b2.current : void 0, reduceMotion: S2.shouldReduceMotion, timeout: _2 === `auto` ? null : _2}, y2), {children: (e5, _b) => {
    var _c2 = _b, {ownerState: t3} = _c2, n3 = __objRest(_c2, ["ownerState"]);
    let r3 = bn(e5, c2, Oc, kc, g2, i2.props.style);
    return u(i2, __spreadValues({style: r3, ref: w2}, n3));
  }}));
});
Ac && (Ac.muiSupportAuto = true);
function jc(e4) {
  return B(`MuiInputLabel`, e4);
}
var Mc = L(`MuiInputLabel`, [`root`, `focused`, `disabled`, `error`, `required`, `asterisk`, `formControl`, `sizeSmall`, `shrink`, `animated`, `standard`, `filled`, `outlined`]);
function Nc(e4) {
  return B(`MuiInputAdornment`, e4);
}
var Pc = L(`MuiInputAdornment`, [`root`, `filled`, `standard`, `outlined`, `positionStart`, `positionEnd`, `disablePointerEvents`, `hiddenLabel`, `sizeSmall`]), Fc, Ic = (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[`position${Q(n2.position)}`], n2.disablePointerEvents === true && t2.disablePointerEvents, t2[n2.variant]];
}, Lc = (e4) => {
  let {classes: t2, disablePointerEvents: n2, hiddenLabel: r2, position: i2, size: a2, variant: o2} = e4, s2 = {root: [`root`, n2 && `disablePointerEvents`, i2 && `position${Q(i2)}`, o2, r2 && `hiddenLabel`, a2 && `size${Q(a2)}`]};
  return G(s2, Nc, t2);
}, Rc = Y(`div`, {name: `MuiInputAdornment`, slot: `Root`, overridesResolver: Ic})(X(({theme: e4}) => ({display: `flex`, maxHeight: `2em`, alignItems: `center`, whiteSpace: `nowrap`, color: (e4.vars || e4).palette.action.active, variants: [{props: {variant: `filled`}, style: {[`&.${Pc.positionStart}&:not(.${Pc.hiddenLabel})`]: {marginTop: 16}}}, {props: {position: `start`}, style: {marginRight: 8}}, {props: {position: `end`}, style: {marginLeft: 8}}, {props: {disablePointerEvents: true}, style: {pointerEvents: `none`}}]}))), zc = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiInputAdornment`}), _a2 = n2, {children: r2, className: i2, component: a2 = `div`, disablePointerEvents: o2 = false, disableTypography: s2 = false, position: c2, variant: l2} = _a2, u2 = __objRest(_a2, ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]), d2 = Kt() || {}, f2 = l2;
  l2 && d2.variant, d2 && !f2 && (f2 = d2.variant);
  let p2 = __spreadProps(__spreadValues({}, n2), {hiddenLabel: d2.hiddenLabel, size: d2.size, disablePointerEvents: o2, position: c2, variant: f2}), m2 = Lc(p2);
  return v(Gt.Provider, {value: null, children: v(Rc, __spreadProps(__spreadValues({as: a2, ownerState: p2, className: K(m2.root, i2), ref: t2}, u2), {children: typeof r2 == `string` && !s2 ? v(Ai, {color: `textSecondary`, children: r2}) : b(w, {children: [c2 === `start` ? Fc || (Fc = v(`span`, {className: `notranslate`, "aria-hidden": true, children: `\u200B`})) : null, r2]})}))});
}), Bc = (e4) => {
  let {classes: t2, formControl: n2, size: r2, shrink: i2, disableAnimation: a2, variant: o2, required: s2} = e4, c2 = {root: [`root`, n2 && `formControl`, !a2 && `animated`, i2 && `shrink`, r2 && r2 !== `medium` && `size${Q(r2)}`, o2], asterisk: [s2 && `asterisk`]}, l2 = G(c2, jc, t2);
  return __spreadValues(__spreadValues({}, t2), l2);
}, Vc = Y(Ec, {shouldForwardProp: (e4) => Zt(e4) || e4 === `classes`, name: `MuiInputLabel`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [{[`& .${Dn.asterisk}`]: t2.asterisk}, t2.root, n2.formControl && t2.formControl, n2.size === `small` && t2.sizeSmall, n2.shrink && t2.shrink, !n2.disableAnimation && t2.animated, n2.focused && t2.focused, t2[n2.variant]];
}})(X(({theme: e4}) => ({display: `block`, transformOrigin: `top left`, whiteSpace: `nowrap`, overflow: `hidden`, textOverflow: `ellipsis`, maxWidth: `100%`, variants: [{props: ({ownerState: e5}) => e5.formControl, style: {position: `absolute`, left: 0, top: 0, transform: `translate(0, 20px) scale(1)`}}, {props: {size: `small`}, style: {transform: `translate(0, 17px) scale(1)`}}, {props: ({ownerState: e5}) => e5.shrink, style: {transform: `translate(0, -1.5px) scale(0.75)`, transformOrigin: `top left`, maxWidth: `133%`}}, {props: ({ownerState: e5}) => !e5.disableAnimation, style: __spreadValues({}, Cn(e4, [`color`, `transform`, `max-width`], {duration: e4.transitions.duration.shorter, easing: e4.transitions.easing.easeOut}))}, {props: {variant: `filled`}, style: {zIndex: 1, pointerEvents: `none`, transform: `translate(12px, 16px) scale(1)`, maxWidth: `calc(100% - 24px)`}}, {props: {variant: `filled`, size: `small`}, style: {transform: `translate(12px, 13px) scale(1)`}}, {props: ({variant: e5, ownerState: t2}) => e5 === `filled` && t2.shrink, style: {userSelect: `none`, pointerEvents: `auto`, transform: `translate(12px, 7px) scale(0.75)`, maxWidth: `calc(133% - 24px)`}}, {props: ({variant: e5, ownerState: t2, size: n2}) => e5 === `filled` && t2.shrink && n2 === `small`, style: {transform: `translate(12px, 4px) scale(0.75)`}}, {props: {variant: `outlined`}, style: {zIndex: 1, pointerEvents: `none`, transform: `translate(14px, 16px) scale(1)`, maxWidth: `calc(100% - 24px)`}}, {props: {variant: `outlined`, size: `small`}, style: {transform: `translate(14px, 9px) scale(1)`}}, {props: ({variant: e5, ownerState: t2}) => e5 === `outlined` && t2.shrink, style: {userSelect: `none`, pointerEvents: `auto`, maxWidth: `calc(133% - 32px)`, transform: `translate(14px, -9px) scale(0.75)`}}]}))), Hc = m(function(e4, t2) {
  let n2 = Z({name: `MuiInputLabel`, props: e4}), _a2 = n2, {disableAnimation: r2 = false, margin: i2, shrink: a2, variant: o2, className: s2} = _a2, c2 = __objRest(_a2, ["disableAnimation", "margin", "shrink", "variant", "className"]), [l2, u2] = qt({props: n2, states: [`size`, `variant`, `required`, `focused`]}), d2 = a2;
  d2 === void 0 && u2 && (d2 = u2.filled || u2.focused || u2.adornedStart);
  let f2 = __spreadProps(__spreadValues({}, n2), {disableAnimation: r2, formControl: u2, shrink: d2, size: l2.size, variant: l2.variant, required: l2.required, focused: l2.focused}), p2 = Bc(f2);
  return v(Vc, __spreadProps(__spreadValues({"data-shrink": d2, ref: t2, className: K(p2.root, s2)}, c2), {ownerState: f2, classes: p2}));
}), Uc = f({});
function Wc(e4) {
  return B(`MuiList`, e4);
}
var Gc = L(`MuiList`, [`root`, `padding`, `dense`, `subheader`]), Kc = (e4) => {
  let {classes: t2, disablePadding: n2, dense: r2, subheader: i2} = e4;
  return G({root: [`root`, !n2 && `padding`, r2 && `dense`, i2 && `subheader`]}, Wc, t2);
}, qc = Y(`ul`, {name: `MuiList`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, !n2.disablePadding && t2.padding, n2.dense && t2.dense, n2.subheader && t2.subheader];
}})({listStyle: `none`, margin: 0, padding: 0, position: `relative`, variants: [{props: ({ownerState: e4}) => !e4.disablePadding, style: {paddingTop: 8, paddingBottom: 8}}, {props: ({ownerState: e4}) => e4.subheader, style: {paddingTop: 0, isolation: `isolate`}}]}), Jc = m(function(e4, t2) {
  let r2 = Z({props: e4, name: `MuiList`}), _a2 = r2, {children: i2, className: a2, component: o2 = `ul`, dense: s2 = false, disablePadding: c2 = false, subheader: l2} = _a2, u2 = __objRest(_a2, ["children", "className", "component", "dense", "disablePadding", "subheader"]), d2 = n(() => ({dense: s2}), [s2]), f2 = __spreadProps(__spreadValues({}, r2), {component: o2, dense: s2, disablePadding: c2}), p2 = Kc(f2);
  return v(Uc.Provider, {value: d2, children: b(qc, __spreadProps(__spreadValues({as: o2, className: K(p2.root, a2), ref: t2, ownerState: f2}, u2), {children: [l2, i2]}))});
});
function Yc(e4) {
  return B(`MuiListItem`, e4);
}
var Xc = L(`MuiListItem`, [`root`, `dense`, `alignItemsFlexStart`, `divider`, `gutters`, `padding`, `secondaryAction`]);
function Zc(e4) {
  return B(`MuiListItemSecondaryAction`, e4);
}
var Qc = L(`MuiListItemSecondaryAction`, [`root`, `disableGutters`]), $c = (e4) => {
  let {disableGutters: t2, classes: n2} = e4;
  return G({root: [`root`, t2 && `disableGutters`]}, Zc, n2);
}, el = Y(`div`, {name: `MuiListItemSecondaryAction`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.disableGutters && t2.disableGutters];
}})({position: `absolute`, right: 16, top: `50%`, transform: `translateY(-50%)`, variants: [{props: ({ownerState: e4}) => e4.disableGutters, style: {right: 0}}]}), tl = m(function(e4, t2) {
  let n2 = Z({props: e4, name: `MuiListItemSecondaryAction`}), _a2 = n2, {className: r2, component: i2} = _a2, a2 = __objRest(_a2, ["className", "component"]), o2 = l(Uc), s2 = __spreadProps(__spreadValues({}, n2), {disableGutters: o2.disableGutters}), c2 = $c(s2);
  return v(el, __spreadValues({as: i2, className: K(c2.root, r2), ownerState: s2, ref: t2}, a2));
});
tl.muiName = `ListItemSecondaryAction`;
var nl = (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.dense && t2.dense, n2.alignItems === `flex-start` && t2.alignItemsFlexStart, n2.divider && t2.divider, !n2.disableGutters && t2.gutters, !n2.disablePadding && t2.padding];
}, rl = (e4) => {
  let {alignItems: t2, classes: n2, dense: r2, disableGutters: i2, disablePadding: a2, divider: o2} = e4;
  return G({root: [`root`, r2 && `dense`, !i2 && `gutters`, !a2 && `padding`, o2 && `divider`, t2 === `flex-start` && `alignItemsFlexStart`], secondaryAction: [`secondaryAction`]}, Yc, n2);
}, il = Y(`div`, {name: `MuiListItem`, slot: `Root`, overridesResolver: nl})(X(({theme: e4}) => ({display: `flex`, justifyContent: `flex-start`, alignItems: `center`, position: `relative`, textDecoration: `none`, width: `100%`, boxSizing: `border-box`, textAlign: `left`, variants: [{props: ({ownerState: e5}) => !e5.disablePadding, style: {paddingTop: 8, paddingBottom: 8}}, {props: ({ownerState: e5}) => !e5.disablePadding && e5.dense, style: {paddingTop: 4, paddingBottom: 4}}, {props: ({ownerState: e5}) => !e5.disablePadding && !e5.disableGutters, style: {paddingLeft: 16, paddingRight: 16}}, {props: ({ownerState: e5}) => !e5.disablePadding && !!e5.secondaryAction, style: {paddingRight: 48}}, {props: ({ownerState: e5}) => !!e5.secondaryAction, style: {[`& > .${kn.root}`]: {paddingRight: 48}}}, {props: {alignItems: `flex-start`}, style: {alignItems: `flex-start`}}, {props: ({ownerState: e5}) => e5.divider, style: {borderBottom: `1px solid ${(e4.vars || e4).palette.divider}`, backgroundClip: `padding-box`}}, {props: ({ownerState: e5}) => e5.button, style: __spreadProps(__spreadValues({}, Cn(e4, `background-color`, {duration: e4.transitions.duration.shortest})), {"&:hover": {textDecoration: `none`, backgroundColor: (e4.vars || e4).palette.action.hover, "@media (hover: none)": {backgroundColor: `transparent`}}})}]}))), al = Y(tl, {name: `MuiListItem`, slot: `secondaryAction`})({}), ol = m(function(e4, t2) {
  let r2 = Z({props: e4, name: `MuiListItem`}), _a2 = r2, {alignItems: i2 = `center`, children: a2, className: o2, component: s2 = `li`, dense: c2 = false, disableGutters: u2 = false, disablePadding: d2 = false, divider: f2 = false, secondaryAction: p2, slotProps: m2 = {}, slots: h2 = {}} = _a2, g2 = __objRest(_a2, ["alignItems", "children", "className", "component", "dense", "disableGutters", "disablePadding", "divider", "secondaryAction", "slotProps", "slots"]), _2 = l(Uc), y2 = n(() => ({dense: c2 || _2.dense || false, alignItems: i2, disableGutters: u2}), [i2, _2.dense, c2, u2]), x2 = __spreadProps(__spreadValues({}, r2), {alignItems: i2, dense: y2.dense, disableGutters: u2, disablePadding: d2, divider: f2, secondaryAction: p2}), S2 = rl(x2), C2 = {slots: h2, slotProps: m2}, [w2, T2] = vr(`root`, {ref: t2, elementType: il, externalForwardedProps: __spreadValues(__spreadValues({component: s2}, C2), g2), ownerState: x2, className: K(S2.root, o2)}), [E2, D2] = vr(`secondaryAction`, {elementType: al, shouldForwardComponentProp: true, externalForwardedProps: C2, ownerState: x2, className: S2.secondaryAction});
  return v(Uc.Provider, {value: y2, children: b(w2, __spreadProps(__spreadValues({}, T2), {children: [a2, p2 && v(E2, __spreadProps(__spreadValues({}, D2), {children: p2}))]}))});
});
function sl(e4) {
  return B(`MuiListItemIcon`, e4);
}
var cl = L(`MuiListItemIcon`, [`root`, `alignItemsFlexStart`]);
function ll(e4) {
  return B(`MuiListItemText`, e4);
}
var ul = L(`MuiListItemText`, [`root`, `multiline`, `dense`, `inset`, `primary`, `secondary`]), dl = f(void 0);
function fl() {
  let e4 = l(dl);
  if (e4 === void 0)
    throw Error(`MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.`);
  return e4;
}
var pl = Object.is;
function ml(e4, t2) {
  if (e4 === t2)
    return true;
  if (!(e4 instanceof Object) || !(t2 instanceof Object))
    return false;
  let n2 = 0, r2 = 0;
  for (let r3 in e4)
    if (n2 += 1, !pl(e4[r3], t2[r3]) || !(r3 in t2))
      return false;
  for (let e5 in t2)
    r2 += 1;
  return n2 === r2;
}
var hl = [`ArrowRight`, `ArrowLeft`, `ArrowUp`, `ArrowDown`, `Home`, `End`];
function gl(e4) {
  let {activeItemId: t2, getDefaultActiveItemId: r2, orientation: i2, isRtl: a2 = false, isItemFocusable: s2 = Al, wrap: c2 = true} = e4, [l2, u2] = g(t2), [d2, f2] = g(t2), p2 = l2;
  t2 !== d2 && (f2(t2), t2 !== void 0 && t2 !== l2 && (p2 = t2, u2(t2)));
  let m2 = o(null), h2 = o(new Map()), [_2, v2] = g(0), y2 = n(() => Dl(h2.current), [_2]), b2 = vl(p2, y2, s2, r2), x2 = o(b2);
  x2.current = b2;
  let S2 = T(() => {
    let e5 = Dl(h2.current);
    return wl(e5, vl(x2.current, e5, s2, r2));
  }, [r2, s2]), C2 = T(() => h2.current, []), w2 = Ht((e5) => {
    ml(h2.current.get(e5.id) ?? null, e5) || (h2.current.set(e5.id, e5), v2((e6) => e6 + 1));
  }), E2 = Ht((e5) => {
    h2.current.delete(e5) && v2((e6) => e6 + 1);
  }), D2 = Ht((e5) => {
    u2(e5);
  }), O2 = T((e5) => x2.current === e5, []), k2 = T((e5, t3, n2, r3) => {
    let i3 = Sl(Ol(h2.current), e5, t3, n2, r3 ?? s2);
    return i3 ? (i3.element?.focus(), u2(i3.id), i3) : null;
  }, [s2]), A2 = T((e5, t3, n2) => ({onFocus: (e6) => {
    t3?.(e6);
    let n3 = Ol(h2.current), r3 = El(n3, e6.target);
    r3 !== -1 && u2(n3[r3].id);
  }, onKeyDown: (e6) => {
    if (n2?.(e6), e6.defaultPrevented || e6.altKey || e6.shiftKey || e6.ctrlKey || e6.metaKey || !hl.includes(e6.key))
      return;
    let t4 = i2 === `horizontal` ? `ArrowLeft` : `ArrowUp`, r3 = i2 === `horizontal` ? `ArrowRight` : `ArrowDown`;
    i2 === `horizontal` && a2 && (t4 = `ArrowRight`, r3 = `ArrowLeft`);
    let o2 = Ol(h2.current), s3 = tn(Ut(m2.current)), l3 = s3 === m2.current, u3 = xl(o2, s3, x2.current), d3 = `next`;
    switch (e6.key) {
      case t4:
        d3 = `previous`, e6.preventDefault(), l3 && (u3 = o2.length);
        break;
      case r3:
        e6.preventDefault(), l3 && (u3 = -1);
        break;
      case `Home`:
        e6.preventDefault(), u3 = -1;
        break;
      case `End`:
        e6.preventDefault(), d3 = `previous`, u3 = o2.length;
        break;
      default:
        return;
    }
    k2(u3, d3, c2);
  }, ref: Nl(e5, (e6) => {
    m2.current = e6;
  })}), [k2, a2, i2, c2]), j2 = T((e5) => {
    let t3 = Ol(h2.current), n2 = tn(Ut(m2.current)), r3 = n2 === m2.current ? -1 : xl(t3, n2, x2.current);
    return k2(r3, `next`, true, e5)?.id ?? null;
  }, [k2]);
  return n(() => ({activeItemId: b2, focusNext: j2, getActiveItem: S2, getContainerProps: A2, getItemMap: C2, isItemActive: O2, registerItem: w2, setActiveItemId: D2, unregisterItem: E2}), [b2, j2, S2, A2, C2, O2, w2, D2, E2]);
}
function _l(e4) {
  let {activeItemId: t2, registerItem: r2, unregisterItem: i2} = fl(), a2 = o(null), s2 = n(() => ({disabled: e4.disabled ?? false, element: null, focusableWhenDisabled: e4.focusableWhenDisabled ?? false, id: e4.id, selected: e4.selected ?? false, textValue: e4.textValue}), [e4.disabled, e4.focusableWhenDisabled, e4.id, e4.selected, e4.textValue]), c2 = o(s2);
  c2.current = s2;
  let l2 = T((t3) => {
    a2.current = t3, t3 == null ? queueMicrotask(() => {
      a2.current ?? i2(e4.id);
    }) : r2(__spreadProps(__spreadValues({}, c2.current), {element: t3}));
  }, [e4.id, r2, i2]), u2 = Vt(e4.ref, l2);
  return D(() => {
    a2.current && r2(__spreadProps(__spreadValues({}, s2), {element: a2.current}));
  }, [s2, r2]), D(() => {
    let t3 = e4.id;
    return () => {
      i2(t3);
    };
  }, [e4.id, i2]), {ref: u2, tabIndex: t2 === e4.id ? 0 : -1};
}
function vl(e4, t2, n2, r2) {
  return e4 == null ? bl(t2, n2, r2) : yl(e4, t2, n2);
}
function yl(e4, t2, n2) {
  let r2 = Tl(t2, e4);
  return r2 === -1 ? Cl(t2, n2) : n2(t2[r2]) ? t2[r2].id : Sl(t2, r2, `next`, false, n2)?.id ?? null;
}
function bl(e4, t2, n2) {
  let r2 = n2?.(e4);
  if (r2 != null) {
    let n3 = wl(e4, r2);
    if (n3 && t2(n3))
      return n3.id;
  }
  return Cl(e4, t2);
}
function xl(e4, t2, n2) {
  if (t2) {
    let n3 = El(e4, t2);
    if (n3 !== -1)
      return n3;
  }
  return Tl(e4, n2);
}
function Sl(e4, t2, n2, r2, i2) {
  let a2 = e4.length - 1;
  if (a2 === -1)
    return null;
  let o2 = false, s2 = kl(t2, a2, n2, r2), c2 = s2;
  for (; s2 !== -1; ) {
    if (s2 === c2) {
      if (o2)
        return null;
      o2 = true;
    }
    let t3 = e4[s2];
    if (!t3 || !i2(t3))
      s2 = kl(s2, a2, n2, r2);
    else
      return t3;
  }
  return null;
}
function Cl(e4, t2) {
  return e4.find((e5) => t2(e5))?.id ?? null;
}
function wl(e4, t2) {
  return t2 == null ? null : e4.find((e5) => e5.id === t2) ?? null;
}
function Tl(e4, t2) {
  return t2 == null ? -1 : e4.findIndex((e5) => e5.id === t2);
}
function El(e4, t2) {
  return t2 ? e4.findIndex((e5) => e5.element === t2 || e5.element?.contains(t2)) : -1;
}
function Dl(e4) {
  let t2 = Array.from(e4.values());
  if (t2.every((e5) => e5.element == null))
    return t2;
  let n2 = t2.filter(jl).sort((e5, t3) => Ml(e5.element, t3.element)), r2 = t2.filter((e5) => !jl(e5));
  return [...n2, ...r2];
}
function Ol(e4) {
  return Dl(e4).filter(jl);
}
function kl(e4, t2, n2, r2 = true) {
  return n2 === `next` ? e4 === t2 ? r2 ? 0 : -1 : e4 + 1 : e4 === 0 ? r2 ? t2 : -1 : e4 - 1;
}
function Al(e4) {
  return e4.element ? e4.focusableWhenDisabled ? true : !e4.disabled && !e4.element.hasAttribute(`disabled`) && e4.element.getAttribute(`aria-disabled`) !== `true` && e4.element.hasAttribute(`tabindex`) : false;
}
function jl(e4) {
  return e4.element != null && e4.element.isConnected;
}
function Ml(e4, t2) {
  if (e4 === t2)
    return 0;
  let n2 = e4.compareDocumentPosition(t2);
  return n2 & Node.DOCUMENT_POSITION_FOLLOWING || n2 & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING || n2 & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function Nl(...e4) {
  return (t2) => {
    e4.forEach((e5) => {
      Hn(e5 ?? null, t2);
    });
  };
}
var Pl = ms;
function Fl(e4, t2) {
  if (t2 == null)
    e4.focus();
  else
    try {
      e4.focus({focusVisible: t2 === `keyboard`});
    } catch {
      e4.focus();
    }
}
var Il = f(null);
function Ll() {
  return l(Il);
}
var Rl = Il.Provider, zl = f(void 0);
function Bl() {
  let e4 = l(zl);
  if (e4 === void 0)
    throw Error(`MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.`);
  return e4;
}
function Vl(e4) {
  let t2 = e4?.element ?? e4;
  if (!t2)
    return ``;
  if (e4?.textValue !== void 0)
    return e4.textValue;
  let n2 = t2.innerText;
  return n2 === void 0 && (n2 = t2.textContent), n2 ?? ``;
}
function Hl(e4, t2) {
  if (t2 === void 0)
    return true;
  let n2 = Vl(e4);
  return n2 = n2.trim().toLowerCase(), n2.length === 0 ? false : t2.repeating ? n2[0] === t2.keys[0] : n2.startsWith(t2.keys.join(``));
}
function Ul(e4, t2) {
  return Hl(e4, t2) ? Al(e4) : false;
}
function Wl(e4, t2) {
  Fl(e4, t2);
}
var Gl = m(function(e4, r2) {
  let _a2 = Z({props: e4, name: `MuiMenuList`}), {actions: i2, autoFocus: a2 = false, autoFocusItem: s2 = false, children: c2, className: l2, disabledItemsFocusable: u2 = false, disableListWrap: d2 = false, onKeyDown: f2, variant: p2 = `selectedMenu`} = _a2, m2 = __objRest(_a2, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]), h2 = o(null), _2 = o(false), [y2, b2] = g(false), x2 = Ll(), S2 = o({keys: [], repeating: true, previousKeyMatched: true, lastTime: null}), C2 = gl({activeItemId: void 0, getDefaultActiveItemId: T((e5) => p2 === `selectedMenu` ? e5.find((e6) => e6.selected && Al(e6))?.id ?? e5.find((e6) => Al(e6))?.id ?? null : e5.find((e6) => Al(e6))?.id ?? null, [p2]), orientation: `vertical`, wrap: !d2}), {activeItemId: w2, focusNext: E2, getActiveItem: D2, getContainerProps: O2, getItemMap: k2} = C2, A2 = Gn((e5 = false) => {
    if (!h2.current || !e5 && _2.current)
      return null;
    if (s2) {
      let e6 = D2();
      if (e6?.element) {
        let t2 = Array.from(k2().values()).some((e7) => e7.selected), n2 = p2 === `menu` && t2 && !e6.selected && x2 == null;
        return b2(n2), Wl(e6.element, x2), _2.current = true, e6.element;
      }
      return a2 ? (b2(false), h2.current.focus(), h2.current) : null;
    }
    return a2 ? (b2(false), h2.current.focus(), _2.current = true, h2.current) : (b2(false), null);
  });
  $t(() => {
    !a2 && !s2 ? (_2.current = false, b2(false)) : A2();
  }, [w2, s2, a2, A2]), t(i2, () => ({adjustStyleForScrollbar: (e5, {direction: t2}) => {
    let n2 = !h2.current.style.width;
    if (e5.clientHeight < h2.current.clientHeight && n2) {
      let n3 = Vn(e5), r3 = Pl(n3);
      if (r3 > 0) {
        let e6 = `${r3}px`, i3 = t2 === `rtl` ? `paddingLeft` : `paddingRight`, a3 = parseFloat(n3.getComputedStyle(h2.current)[i3]) || 0;
        h2.current.style[i3] = `${a3 + r3}px`, h2.current.style.width = `calc(100% + ${e6})`;
      }
    }
    return h2.current;
  }, focusInitialTarget: () => {
    if (!h2.current)
      return null;
    let e5 = nn(en(h2.current));
    return e5 && ws(h2.current, e5) ? e5 : A2(true);
  }}), [A2]);
  let j2 = O2(void 0, m2.onFocus), M2 = Qt(h2, j2.ref, r2), N2 = n(() => ({itemsFocusableWhenDisabled: u2, suppressInitialFocusVisible: y2, variant: p2}), [u2, y2, p2]), P2 = Gn((e5) => {
    if (y2 && b2(false), (e5.ctrlKey || e5.metaKey || e5.altKey) && f2)
      f2(e5);
    else {
      if (j2.onKeyDown(e5), e5.key.length === 1) {
        let t2 = S2.current, n2 = e5.key.toLowerCase(), r3 = performance.now();
        t2.keys.length > 0 && (r3 - t2.lastTime > 500 ? (t2.keys = [], t2.repeating = true, t2.previousKeyMatched = true) : t2.repeating && n2 !== t2.keys[0] && (t2.repeating = false)), t2.lastTime = r3, t2.keys.push(n2);
        let i3 = nn(en(h2.current)), a3 = i3 && !t2.repeating && Hl(i3, t2);
        t2.previousKeyMatched && (a3 || E2((e6) => Ul(e6, t2)) != null) ? e5.preventDefault() : t2.previousKeyMatched = false;
      }
      f2 && f2(e5);
    }
  });
  return v(Jc, __spreadProps(__spreadValues({role: `menu`, ref: M2, className: l2, onKeyDown: P2, tabIndex: -1}, m2), {onFocus: j2.onFocus, children: v(zl.Provider, {value: N2, children: v(dl.Provider, {value: C2, children: c2})})}));
}), Kl = (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.dense && t2.dense, n2.divider && t2.divider, !n2.disableGutters && t2.gutters];
}, ql = (e4) => {
  let {disabled: t2, dense: n2, divider: r2, disableGutters: i2, selected: a2, classes: o2} = e4, s2 = G({root: [`root`, n2 && `dense`, t2 && `disabled`, !i2 && `gutters`, r2 && `divider`, a2 && `selected`]}, An, o2);
  return __spreadValues(__spreadValues({}, o2), s2);
}, Jl = Y(ti, {shouldForwardProp: (e4) => Zt(e4) || e4 === `classes`, name: `MuiMenuItem`, slot: `Root`, overridesResolver: Kl})(X(({theme: e4}) => __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, e4.typography.body1), {display: `flex`, justifyContent: `flex-start`, alignItems: `center`, position: `relative`, textDecoration: `none`, minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: `border-box`, whiteSpace: `nowrap`, "&:hover": {textDecoration: `none`, backgroundColor: (e4.vars || e4).palette.action.hover, "@media (hover: none)": {backgroundColor: `transparent`}}, [`&.${jn.selected}`]: __spreadValues({backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, (e4.vars || e4).palette.action.selectedOpacity)}, !e4.focusVisible && {[`&.${jn.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.focusOpacity}`)}}), [`&.${jn.selected}:hover`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.hoverOpacity}`), "@media (hover: none)": {backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, (e4.vars || e4).palette.action.selectedOpacity)}}}), e4.focusVisible ? Ue(1) : {[`&.${jn.focusVisible}`]: {backgroundColor: (e4.vars || e4).palette.action.focus}}), {[`&.${jn.disabled}`]: {opacity: (e4.vars || e4).palette.action.disabledOpacity}, [`& + .${pc.root}`]: {marginTop: e4.spacing(1), marginBottom: e4.spacing(1)}, [`& + .${pc.inset}`]: {marginLeft: 52}, [`& .${ul.root}`]: {marginTop: 0, marginBottom: 0}, [`& .${ul.inset}`]: {paddingLeft: 36}, [`& .${cl.root}`]: {minWidth: 36}, variants: [{props: ({ownerState: e5}) => !e5.disableGutters, style: {paddingLeft: 16, paddingRight: 16}}, {props: ({ownerState: e5}) => e5.divider, style: {borderBottom: `1px solid ${(e4.vars || e4).palette.divider}`, backgroundClip: `padding-box`}}, {props: ({ownerState: e5}) => !e5.dense, style: {[e4.breakpoints.up(`sm`)]: {minHeight: `auto`}}}, {props: ({ownerState: e5}) => e5.dense, style: __spreadProps(__spreadValues({minHeight: 32, paddingTop: 4, paddingBottom: 4}, e4.typography.body2), {[`& .${cl.root} svg`]: {fontSize: `1.25rem`}})}]}))), Yl = m(function(e4, t2) {
  let r2 = Z({props: e4, name: `MuiMenuItem`}), _a2 = r2, {autoFocus: i2 = false, component: a2 = `li`, dense: s2 = false, divider: c2 = false, disableGutters: u2 = false, focusVisibleClassName: d2, role: f2 = `menuitem`, tabIndex: p2, className: m2} = _a2, h2 = __objRest(_a2, ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"]), g2 = f2 === `menuitemcheckbox` || f2 === `menuitemradio` ? !!r2.selected : void 0, _2 = Ll(), y2 = l(Uc), b2 = n(() => ({dense: s2 || y2.dense || false, disableGutters: u2}), [y2.dense, s2, u2]), x2 = Bl(), S2 = Un(), C2 = x2.suppressInitialFocusVisible, w2 = x2.itemsFocusableWhenDisabled, T2 = o(null);
  $t(() => {
    i2 && T2.current && Fl(T2.current, _2);
  }, [i2]);
  let E2 = __spreadProps(__spreadValues({}, r2), {dense: b2.dense, divider: c2, disableGutters: u2}), D2 = ql(r2), _b = D2, {root: O2} = _b, k2 = __objRest(_b, ["root"]), A2 = _l({id: S2, ref: t2, disabled: r2.disabled, focusableWhenDisabled: w2, selected: r2.selected}), j2 = Qt(T2, A2.ref), M2;
  return p2 === void 0 ? x2.variant === `selectedMenu` ? M2 = A2.tabIndex : (!r2.disabled || w2) && (M2 = -1) : M2 = p2, v(Uc.Provider, {value: b2, children: v(Jl, __spreadProps(__spreadValues({ref: j2, role: f2, "aria-checked": g2, tabIndex: M2, component: a2, internalNativeButton: false, focusableWhenDisabled: w2, suppressFocusVisible: C2, focusVisibleClassName: K(D2.focusVisible, d2), className: K(D2.root, m2)}, h2), {ownerState: E2, classes: k2}))});
}), Xl = {border: 0, clipPath: `inset(50%)`, height: `1px`, margin: `-1px`, overflow: `hidden`, padding: 0, position: `absolute`, whiteSpace: `nowrap`, width: `1px`}, Zl = oe({themeId: xe});
export {
  zs as $,
  ot as $n,
  Un as $t,
  Mc as A,
  Z as An,
  vi as At,
  dc as B,
  Wt as Bn,
  Pr as Bt,
  Gc as C,
  ln as Cn,
  ji as Ct,
  Nc as D,
  $t as Dn,
  wi as Dt,
  zc as E,
  en as En,
  Ei as Et,
  vc as F,
  Yt as Fn,
  Qr as Ft,
  ic as G,
  zt as Gn,
  vr as Gt,
  sc as H,
  Ht as Hn,
  Cr as Ht,
  hc as I,
  Jt as In,
  Zr as It,
  $s as J,
  Dt as Jn,
  fr as Jt,
  tc as K,
  Lt as Kn,
  hr as Kt,
  mc as L,
  Kt as Ln,
  Ir as Lt,
  Ec as M,
  Y as Mn,
  oi as Mt,
  wc as N,
  Zt as Nn,
  ai as Nt,
  Pc as O,
  Qt as On,
  yi as Ot,
  Sc as P,
  Xt as Pn,
  ti as Pt,
  Ws as Q,
  st as Qn,
  Wn as Qt,
  pc as R,
  qt as Rn,
  Lr as Rt,
  Wc as S,
  yn as Sn,
  Do as St,
  Hc as T,
  nn as Tn,
  Ti as Tt,
  oc as U,
  Vt as Un,
  yr as Ut,
  cc as V,
  Ut as Vn,
  wr as Vt,
  ac as W,
  Bt as Wn,
  br as Wt,
  Ks as X,
  St as Xn,
  Kn as Xt,
  qs as Y,
  Et as Yn,
  er as Yt,
  Gs as Z,
  ut as Zn,
  Gn as Zt,
  Zc as _,
  Sn as _n,
  Bo as _t,
  Rl as a,
  Pn as an,
  xe as ar,
  ps as at,
  Xc as b,
  Cn as bn,
  Ao as bt,
  gl as c,
  Mn as cn,
  ve as cr,
  rs as ct,
  ll as d,
  On as dn,
  he as dr,
  Qo as dt,
  Hn as en,
  $e as er,
  Bs as et,
  ul as f,
  kn as fn,
  me as fr,
  Zo as ft,
  tl as g,
  wn as gn,
  Ho as gt,
  ol as h,
  Tn as hn,
  $ as ht,
  Gl as i,
  Rn as in,
  Ve as ir,
  Cs as it,
  Ac as j,
  X as jn,
  si as jt,
  jc as k,
  Q as kn,
  bi as kt,
  dl as l,
  An as ln,
  _e as lr,
  ns as lt,
  cl as m,
  En as mn,
  qo as mt,
  Xl as n,
  Bn as nn,
  He as nr,
  Ts as nt,
  Ll as o,
  Fn as on,
  be as or,
  as as ot,
  sl as p,
  Dn as pn,
  pe as pr,
  Xo as pt,
  ec as q,
  Ot as qn,
  mr as qt,
  Yl as r,
  zn as rn,
  Ue as rr,
  ws as rt,
  _l as s,
  Nn as sn,
  ye as sr,
  is as st,
  Zl as t,
  Vn as tn,
  Ye as tr,
  Ns as tt,
  fl as u,
  jn as un,
  ge as ur,
  ts as ut,
  Qc as v,
  bn as vn,
  jo as vt,
  Uc as w,
  an as wn,
  Ai as wt,
  Jc as x,
  vn as xn,
  Oo as xt,
  Yc as y,
  xn as yn,
  Mo as yt,
  fc as z,
  Gt as zn,
  Nr as zt
};
