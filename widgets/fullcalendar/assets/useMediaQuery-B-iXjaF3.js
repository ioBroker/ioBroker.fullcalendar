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
import {C as e, T as t, b as n, h as r, t as i, y as a} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare___mf_0_mui_mf_1_system__loadShare__.js-C-9KfFsI.js";
import {C as o, T as s, _ as c, b as l, c as u, d, f, m as p, n as m, o as h, p as g, r as _, s as v, t as y, u as b, w as x, x as S, y as C} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js";
import {n as w, r as T} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CE8M302w.js";
import {t as E} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_2_dom__loadShare__.js-CLA8in1C.js";
import {Ct as D, Ft as O, Kt as k, Qt as A, _n as j, _t as M, bn as N, cn as P, d as F, dn as I, f as L, fn as R, h as ee, ht as te, i as ne, in as re, ln as z, m as ie, o as ae, pn as B, r as oe, sn as V, t as se, tn as ce, u as H, un as le, v as ue, vn as de, vt as fe, x as pe, xt as me, y as he, yt as U} from "./useMediaQuery-H8Q1C5b6.js";
s();
var ge = {black: `#000`, white: `#fff`}, _e = {50: `#ffebee`, 100: `#ffcdd2`, 200: `#ef9a9a`, 300: `#e57373`, 400: `#ef5350`, 500: `#f44336`, 600: `#e53935`, 700: `#d32f2f`, 800: `#c62828`, 900: `#b71c1c`, A100: `#ff8a80`, A200: `#ff5252`, A400: `#ff1744`, A700: `#d50000`}, ve = {50: `#f3e5f5`, 100: `#e1bee7`, 200: `#ce93d8`, 300: `#ba68c8`, 400: `#ab47bc`, 500: `#9c27b0`, 600: `#8e24aa`, 700: `#7b1fa2`, 800: `#6a1b9a`, 900: `#4a148c`, A100: `#ea80fc`, A200: `#e040fb`, A400: `#d500f9`, A700: `#aa00ff`}, ye = {50: `#e3f2fd`, 100: `#bbdefb`, 200: `#90caf9`, 300: `#64b5f6`, 400: `#42a5f5`, 500: `#2196f3`, 600: `#1e88e5`, 700: `#1976d2`, 800: `#1565c0`, 900: `#0d47a1`, A100: `#82b1ff`, A200: `#448aff`, A400: `#2979ff`, A700: `#2962ff`}, be = {50: `#e1f5fe`, 100: `#b3e5fc`, 200: `#81d4fa`, 300: `#4fc3f7`, 400: `#29b6f6`, 500: `#03a9f4`, 600: `#039be5`, 700: `#0288d1`, 800: `#0277bd`, 900: `#01579b`, A100: `#80d8ff`, A200: `#40c4ff`, A400: `#00b0ff`, A700: `#0091ea`}, xe = {50: `#e8f5e9`, 100: `#c8e6c9`, 200: `#a5d6a7`, 300: `#81c784`, 400: `#66bb6a`, 500: `#4caf50`, 600: `#43a047`, 700: `#388e3c`, 800: `#2e7d32`, 900: `#1b5e20`, A100: `#b9f6ca`, A200: `#69f0ae`, A400: `#00e676`, A700: `#00c853`}, Se = {50: `#fff3e0`, 100: `#ffe0b2`, 200: `#ffcc80`, 300: `#ffb74d`, 400: `#ffa726`, 500: `#ff9800`, 600: `#fb8c00`, 700: `#f57c00`, 800: `#ef6c00`, 900: `#e65100`, A100: `#ffd180`, A200: `#ffab40`, A400: `#ff9100`, A700: `#ff6d00`}, Ce = {50: `#fafafa`, 100: `#f5f5f5`, 200: `#eeeeee`, 300: `#e0e0e0`, 400: `#bdbdbd`, 500: `#9e9e9e`, 600: `#757575`, 700: `#616161`, 800: `#424242`, 900: `#212121`, A100: `#f5f5f5`, A200: `#eeeeee`, A400: `#bdbdbd`, A700: `#616161`}, we = `$$material`;
function Te() {
  return {text: {primary: `rgba(0, 0, 0, 0.87)`, secondary: `rgba(0, 0, 0, 0.6)`, disabled: `rgba(0, 0, 0, 0.38)`}, divider: `rgba(0, 0, 0, 0.12)`, background: {paper: ge.white, default: ge.white}, action: {active: `rgba(0, 0, 0, 0.54)`, hover: `rgba(0, 0, 0, 0.04)`, hoverOpacity: 0.04, selected: `rgba(0, 0, 0, 0.08)`, selectedOpacity: 0.08, disabled: `rgba(0, 0, 0, 0.26)`, disabledBackground: `rgba(0, 0, 0, 0.12)`, disabledOpacity: 0.38, focus: `rgba(0, 0, 0, 0.12)`, focusOpacity: 0.12, activatedOpacity: 0.12}};
}
var Ee = Te();
function De() {
  return {text: {primary: ge.white, secondary: `rgba(255, 255, 255, 0.7)`, disabled: `rgba(255, 255, 255, 0.5)`, icon: `rgba(255, 255, 255, 0.5)`}, divider: `rgba(255, 255, 255, 0.12)`, background: {paper: `#121212`, default: `#121212`}, action: {active: ge.white, hover: `rgba(255, 255, 255, 0.08)`, hoverOpacity: 0.08, selected: `rgba(255, 255, 255, 0.16)`, selectedOpacity: 0.16, disabled: `rgba(255, 255, 255, 0.3)`, disabledBackground: `rgba(255, 255, 255, 0.12)`, disabledOpacity: 0.38, focus: `rgba(255, 255, 255, 0.12)`, focusOpacity: 0.12, activatedOpacity: 0.24}};
}
var Oe = De();
function ke(e4, t2, n2, r2) {
  let i2 = r2.light || r2, a2 = r2.dark || r2 * 1.5;
  e4[t2] || (e4.hasOwnProperty(n2) ? e4[t2] = e4[n2] : t2 === `light` ? e4.light = P(e4.main, i2) : t2 === `dark` && (e4.dark = ce(e4.main, a2)));
}
function Ae(e4, t2, n2, r2, i2) {
  let a2 = i2.light || i2, o2 = i2.dark || i2 * 1.5;
  t2[n2] || (t2.hasOwnProperty(r2) ? t2[n2] = t2[r2] : n2 === `light` ? t2.light = `color-mix(in ${e4}, ${t2.main}, #fff ${(a2 * 100).toFixed(0)}%)` : n2 === `dark` && (t2.dark = `color-mix(in ${e4}, ${t2.main}, #000 ${(o2 * 100).toFixed(0)}%)`));
}
function je(e4 = `light`) {
  return e4 === `dark` ? {main: ye[200], light: ye[50], dark: ye[400]} : {main: ye[700], light: ye[400], dark: ye[800]};
}
function Me(e4 = `light`) {
  return e4 === `dark` ? {main: ve[200], light: ve[50], dark: ve[400]} : {main: ve[500], light: ve[300], dark: ve[700]};
}
function Ne(e4 = `light`) {
  return e4 === `dark` ? {main: _e[500], light: _e[300], dark: _e[700]} : {main: _e[700], light: _e[400], dark: _e[800]};
}
function Pe(e4 = `light`) {
  return e4 === `dark` ? {main: be[400], light: be[300], dark: be[700]} : {main: be[700], light: be[500], dark: be[900]};
}
function Fe(e4 = `light`) {
  return e4 === `dark` ? {main: xe[400], light: xe[300], dark: xe[700]} : {main: xe[800], light: xe[500], dark: xe[900]};
}
function Ie(e4 = `light`) {
  return e4 === `dark` ? {main: Se[400], light: Se[300], dark: Se[700]} : {main: `#ed6c02`, light: Se[500], dark: Se[900]};
}
function Le(e4) {
  return `oklch(from ${e4} var(--__l) 0 h / var(--__a))`;
}
function Re(e4) {
  let _a2 = e4, {mode: t2 = `light`, contrastThreshold: n2 = 3, tonalOffset: r2 = 0.2, colorSpace: i2} = _a2, a2 = __objRest(_a2, ["mode", "contrastThreshold", "tonalOffset", "colorSpace"]), o2 = e4.primary || je(t2), s2 = e4.secondary || Me(t2), c2 = e4.error || Ne(t2), l2 = e4.info || Pe(t2), u2 = e4.success || Fe(t2), d2 = e4.warning || Ie(t2);
  function f2(e5) {
    return i2 ? Le(e5) : re(e5, Oe.text.primary) >= n2 ? Oe.text.primary : Ee.text.primary;
  }
  let p2 = ({color: e5, name: t3, mainShade: n3 = 500, lightShade: a3 = 300, darkShade: o3 = 700}) => {
    if (e5 = __spreadValues({}, e5), !e5.main && e5[n3] && (e5.main = e5[n3]), !e5.hasOwnProperty(`main`))
      throw Error(N(11, t3 ? ` (${t3})` : ``, n3));
    if (typeof e5.main != `string`)
      throw Error(N(12, t3 ? ` (${t3})` : ``, JSON.stringify(e5.main)));
    return i2 ? (Ae(i2, e5, `light`, a3, r2), Ae(i2, e5, `dark`, o3, r2)) : (ke(e5, `light`, a3, r2), ke(e5, `dark`, o3, r2)), e5.contrastText || (e5.contrastText = f2(e5.main)), e5;
  }, m2;
  return t2 === `light` ? m2 = Te() : t2 === `dark` && (m2 = De()), j(__spreadValues({common: __spreadValues({}, ge), mode: t2, primary: p2({color: o2, name: `primary`}), secondary: p2({color: s2, name: `secondary`, mainShade: `A400`, lightShade: `A200`, darkShade: `A700`}), error: p2({color: c2, name: `error`}), warning: p2({color: d2, name: `warning`}), info: p2({color: l2, name: `info`}), success: p2({color: u2, name: `success`}), grey: Ce, contrastThreshold: n2, getContrastText: f2, augmentColor: p2, tonalOffset: r2}, m2), a2);
}
var ze = `--_focusVisible-offset`, Be = `--_focusVisible-behavior`, Ve = `--_focusVisible-shadow`, He = `var(${ze}, 1)`, Ue = `var(${Be}, )`, We = {[ze]: 1, [Be]: `initial`};
function Ge(e4) {
  return {[Ve]: e4};
}
function Ke(e4) {
  return {[ze]: -e4, [Be]: `inset`};
}
function qe(e4, t2) {
  return t2.reduce((e5, t3) => t3 && `focusVisible` in t3 ? j(e5, {focusVisible: t3.focusVisible}) : e5, {focusVisible: e4}).focusVisible;
}
function Je(e4) {
  return typeof e4 == `object` && !!e4 && typeof e4.outlineOffset == `string` && e4.outlineOffset.includes(ze);
}
function Ye(e4, t2) {
  return Xe(__spreadValues({outlineStyle: `solid`, outlineColor: t2, outlineWidth: 2, outlineOffset: 2, boxShadow: `var(${Ve}, 0 0)`}, e4 === true ? null : e4));
}
function Xe(e4) {
  let t2 = e4.outlineOffset ?? 0;
  (typeof t2 != `string` || !t2.includes(ze)) && (e4.outlineOffset = `calc(${He} * ${typeof t2 == `number` ? `${t2}px` : t2})`);
  let n2 = new Set([`none`, `initial`, `inherit`, `unset`, `revert`, `revert-layer`]);
  return typeof e4.boxShadow == `string` && !n2.has(e4.boxShadow.trim().toLowerCase()) && !/\binset\b/.test(e4.boxShadow) && !e4.boxShadow.includes(Be) && (e4.boxShadow = `${Ue} ${e4.boxShadow}`), e4;
}
function Ze(e4) {
  let t2 = {};
  return Object.entries(e4).forEach((e5) => {
    let [n2, r2] = e5;
    typeof r2 == `object` && (t2[n2] = `${r2.fontStyle ? `${r2.fontStyle} ` : ``}${r2.fontVariant ? `${r2.fontVariant} ` : ``}${r2.fontWeight ? `${r2.fontWeight} ` : ``}${r2.fontStretch ? `${r2.fontStretch} ` : ``}${r2.fontSize || ``}${r2.lineHeight ? `/${r2.lineHeight} ` : ``}${r2.fontFamily || ``}`);
  }), t2;
}
function Qe(e4, t2) {
  return __spreadValues({toolbar: {minHeight: 56, [e4.up(`xs`)]: {"@media (orientation: landscape)": {minHeight: 48}}, [e4.up(`sm`)]: {minHeight: 64}}}, t2);
}
function $e(e4) {
  return Math.round(e4 * 1e5) / 1e5;
}
var et = {textTransform: `uppercase`}, tt = `"Roboto", "Helvetica", "Arial", sans-serif`;
function nt(e4, t2) {
  let _a2 = typeof t2 == `function` ? t2(e4) : t2, {fontFamily: n2 = tt, fontSize: r2 = 14, fontWeightLight: i2 = 300, fontWeightRegular: a2 = 400, fontWeightMedium: o2 = 500, fontWeightBold: s2 = 700, htmlFontSize: c2 = 16, allVariants: l2, pxToRem: u2} = _a2, d2 = __objRest(_a2, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]), f2 = r2 / 14, p2 = u2 || ((e5) => `${e5 / c2 * f2}rem`), m2 = (e5, t3, r3, i3, a3) => __spreadValues(__spreadValues(__spreadValues({fontFamily: n2, fontWeight: e5, fontSize: p2(t3), lineHeight: r3}, n2 === tt ? {letterSpacing: `${$e(i3 / t3)}em`} : {}), a3), l2), h2 = {h1: m2(i2, 96, 1.167, -1.5), h2: m2(i2, 60, 1.2, -0.5), h3: m2(a2, 48, 1.167, 0), h4: m2(a2, 34, 1.235, 0.25), h5: m2(a2, 24, 1.334, 0), h6: m2(o2, 20, 1.6, 0.15), subtitle1: m2(a2, 16, 1.75, 0.15), subtitle2: m2(o2, 14, 1.57, 0.1), body1: m2(a2, 16, 1.5, 0.15), body2: m2(a2, 14, 1.43, 0.15), button: m2(o2, 14, 1.75, 0.4, et), caption: m2(a2, 12, 1.66, 0.4), overline: m2(a2, 12, 2.66, 1, et), inherit: {fontFamily: `inherit`, fontWeight: `inherit`, fontSize: `inherit`, lineHeight: `inherit`, letterSpacing: `inherit`}};
  return j(__spreadValues({htmlFontSize: c2, pxToRem: p2, fontFamily: n2, fontSize: r2, fontWeightLight: i2, fontWeightRegular: a2, fontWeightMedium: o2, fontWeightBold: s2}, h2), d2, {clone: false});
}
var rt = 0.2, it = 0.14, at = 0.12;
function W(...e4) {
  return [`${e4[0]}px ${e4[1]}px ${e4[2]}px ${e4[3]}px rgba(0,0,0,${rt})`, `${e4[4]}px ${e4[5]}px ${e4[6]}px ${e4[7]}px rgba(0,0,0,${it})`, `${e4[8]}px ${e4[9]}px ${e4[10]}px ${e4[11]}px rgba(0,0,0,${at})`].join(`,`);
}
var ot = [`none`, W(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), W(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), W(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), W(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), W(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), W(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), W(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), W(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), W(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), W(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), W(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), W(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), W(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), W(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), W(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), W(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), W(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), W(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), W(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), W(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), W(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), W(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), W(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), W(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], st = [`all`], ct = {}, lt = {easeInOut: `cubic-bezier(0.4, 0, 0.2, 1)`, easeOut: `cubic-bezier(0.0, 0, 0.2, 1)`, easeIn: `cubic-bezier(0.4, 0, 1, 1)`, sharp: `cubic-bezier(0.4, 0, 0.6, 1)`}, ut = {shortest: 150, shorter: 200, short: 250, standard: 300, complex: 375, enteringScreen: 225, leavingScreen: 195};
function dt(e4) {
  return `${Math.round(e4)}ms`;
}
function ft(e4) {
  if (!e4)
    return 0;
  let t2 = e4 / 36;
  return Math.min(Math.round((4 + 15 * t2 ** 0.25 + t2 / 5) * 10), 3e3);
}
function pt(e4) {
  let t2 = __spreadValues({}, e4);
  delete t2.reducedMotion;
  let n2 = __spreadValues(__spreadValues({}, lt), t2.easing), r2 = __spreadValues(__spreadValues({}, ut), t2.duration);
  return __spreadProps(__spreadValues({getAutoHeightDuration: ft, create: t2.create ?? ((e5 = st, t3 = ct) => {
    let _a2 = t3, {duration: i2 = r2.standard, easing: a2 = n2.easeInOut, delay: o2 = 0} = _a2, s2 = __objRest(_a2, ["duration", "easing", "delay"]);
    return (Array.isArray(e5) ? e5 : [e5]).map((e6) => `${e6} ${typeof i2 == `string` ? i2 : dt(i2)} ${a2} ${typeof o2 == `string` ? o2 : dt(o2)}`).join(`,`);
  })}, t2), {easing: n2, duration: r2});
}
var mt = {};
function ht(e4 = mt) {
  return __spreadValues({reducedMotion: `never`}, e4);
}
var gt = {mobileStepper: 1e3, fab: 1050, speedDial: 1050, appBar: 1100, drawer: 1200, modal: 1300, snackbar: 1400, tooltip: 1500};
function _t(e4) {
  return de(e4) || e4 === void 0 || typeof e4 == `string` || typeof e4 == `boolean` || typeof e4 == `number` || Array.isArray(e4);
}
function vt(e4 = {}) {
  let t2 = __spreadValues({}, e4);
  function n2(e5) {
    let t3 = Object.entries(e5);
    for (let r2 = 0; r2 < t3.length; r2++) {
      let [i2, a2] = t3[r2];
      !_t(a2) || i2.startsWith(`unstable_`) || i2.startsWith(`internal_`) ? delete e5[i2] : de(a2) && (e5[i2] = __spreadValues({}, a2), n2(e5[i2]));
    }
  }
  return n2(t2), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t2, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.motion = { reducedMotion: 'never', ...theme.motion };
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function yt(e4) {
  return typeof e4 == `number` ? `${(e4 * 100).toFixed(0)}%` : `calc((${e4}) * 100%)`;
}
var bt = (e4) => {
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
function xt(e4) {
  Object.assign(e4, {alpha(t2, n2) {
    let r2 = this || e4;
    return r2.colorSpace ? `oklch(from ${t2} l c h / ${typeof n2 == `string` ? `calc(${n2})` : n2})` : r2.vars ? `rgba(${t2.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, `var(--$1Channel)`)} / ${typeof n2 == `string` ? `calc(${n2})` : n2})` : A(t2, bt(n2));
  }, lighten(t2, n2) {
    let r2 = this || e4;
    return r2.colorSpace ? `color-mix(in ${r2.colorSpace}, ${t2}, #fff ${yt(n2)})` : P(t2, n2);
  }, darken(t2, n2) {
    let r2 = this || e4;
    return r2.colorSpace ? `color-mix(in ${r2.colorSpace}, ${t2}, #000 ${yt(n2)})` : ce(t2, n2);
  }});
}
function St(e4 = {}, ...t2) {
  let _a2 = e4, {breakpoints: n2, mixins: r2 = {}, spacing: i2, palette: a2 = {}, motion: o2 = {}, transitions: s2 = {}, typography: c2 = {}, shape: l2, colorSpace: u2} = _a2, d2 = __objRest(_a2, ["breakpoints", "mixins", "spacing", "palette", "motion", "transitions", "typography", "shape", "colorSpace"]);
  if (e4.vars && e4.generateThemeVars === void 0)
    throw Error(N(22));
  let f2 = Re(__spreadProps(__spreadValues({}, a2), {colorSpace: u2})), p2 = ue(e4), m2 = j(p2, {mixins: Qe(p2.breakpoints, r2), palette: f2, shadows: ot.slice(), typography: nt(f2, c2), motion: ht(o2), transitions: pt(s2), zIndex: __spreadValues({}, gt)});
  return m2 = j(m2, d2), m2 = t2.reduce((e5, t3) => j(e5, t3), m2), delete m2.transitions.reducedMotion, m2.focusVisible != null && m2.focusVisible !== false && (m2.focusVisible = Ye(m2.focusVisible, m2.palette.primary.main)), m2.unstable_sxConfig = __spreadValues(__spreadValues({}, pe), d2?.unstable_sxConfig), m2.unstable_sx = function(e5) {
    return he({sx: e5, theme: this});
  }, m2.toRuntimeSource = vt, xt(m2), m2;
}
function Ct(e4) {
  let t2;
  return t2 = e4 < 1 ? 5.11916 * e4 ** 2 : 4.5 * Math.log(e4 + 1) + 2, Math.round(t2 * 10) / 1e3;
}
var wt = [...Array(25)].map((e4, t2) => {
  if (t2 === 0)
    return `none`;
  let n2 = Ct(t2);
  return `linear-gradient(rgba(255 255 255 / ${n2}), rgba(255 255 255 / ${n2}))`;
});
function Tt(e4) {
  return {inputPlaceholder: e4 === `dark` ? 0.5 : 0.42, inputUnderline: e4 === `dark` ? 0.7 : 0.42, switchTrackDisabled: e4 === `dark` ? 0.2 : 0.12, switchTrack: e4 === `dark` ? 0.3 : 0.38};
}
function Et(e4) {
  return e4 === `dark` ? wt : [];
}
function Dt(e4) {
  let _a2 = e4, {palette: t2 = {mode: `light`}, opacity: n2, overlays: r2, colorSpace: i2} = _a2, a2 = __objRest(_a2, ["palette", "opacity", "overlays", "colorSpace"]), o2 = Re(__spreadProps(__spreadValues({}, t2), {colorSpace: i2}));
  return __spreadValues({palette: o2, opacity: __spreadValues(__spreadValues({}, Tt(o2.mode)), n2), overlays: r2 || Et(o2.mode)}, a2);
}
function Ot(e4) {
  return e4[0] === `motion` || e4[0] === `focusVisible` || !!e4[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e4[0].match(/sxConfig$/) || e4[0] === `palette` && !!e4[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
var kt = (e4) => [...[...Array(25)].map((t2, n2) => `--${e4 ? `${e4}-` : ``}overlays-${n2}`), `--${e4 ? `${e4}-` : ``}palette-AppBar-darkBg`, `--${e4 ? `${e4}-` : ``}palette-AppBar-darkColor`], At = (e4) => (t2, n2) => {
  let r2 = e4.rootSelector || `:root`, i2 = e4.colorSchemeSelector, a2 = i2;
  if (i2 === `class` && (a2 = `.%s`), i2 === `data` && (a2 = `[data-%s]`), i2?.startsWith(`data-`) && !i2.includes(`%s`) && (a2 = `[${i2}="%s"]`), e4.defaultColorScheme === t2) {
    if (t2 === `dark`) {
      let i3 = {};
      return kt(e4.cssVarPrefix).forEach((e5) => {
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
function jt(e4, t2) {
  t2.forEach((t3) => {
    e4[t3] || (e4[t3] = {});
  });
}
function G(e4, t2, n2) {
  !e4[t2] && n2 && (e4[t2] = n2);
}
function Mt(e4) {
  return typeof e4 != `string` || !e4.startsWith(`hsl`) ? e4 : V(e4);
}
function Nt(e4, t2) {
  `${t2}Channel` in e4 || (e4[`${t2}Channel`] = le(Mt(e4[t2]), `MUI: Can't create \`palette.${t2}Channel\` because \`palette.${t2}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t2}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Pt(e4) {
  return typeof e4 == `number` ? `${e4}px` : typeof e4 == `string` || typeof e4 == `function` || Array.isArray(e4) ? e4 : `8px`;
}
var Ft = (e4) => {
  try {
    return e4();
  } catch {
  }
}, It = (e4 = `mui`) => t(e4);
function Lt(e4, t2, n2, r2, i2) {
  if (!n2)
    return;
  n2 = n2 === true ? {} : n2;
  let a2 = i2 === `dark` ? `dark` : `light`;
  if (!r2) {
    t2[i2] = Dt(__spreadProps(__spreadValues({}, n2), {palette: __spreadValues({mode: a2}, n2?.palette), colorSpace: e4}));
    return;
  }
  let _a2 = St(__spreadProps(__spreadValues({}, r2), {palette: __spreadValues({mode: a2}, n2?.palette), colorSpace: e4})), {palette: o2} = _a2, s2 = __objRest(_a2, ["palette"]);
  return t2[i2] = __spreadProps(__spreadValues({}, n2), {palette: o2, opacity: __spreadValues(__spreadValues({}, Tt(a2)), n2?.opacity), overlays: n2?.overlays || Et(a2)}), s2;
}
function Rt(e4 = {}, ...t2) {
  let _a2 = e4, {colorSchemes: n2 = {light: true}, defaultColorScheme: r2, disableCssColorScheme: i2 = false, cssVarPrefix: o2 = `mui`, nativeColor: s2 = false, shouldSkipGeneratingVar: c2 = Ot, colorSchemeSelector: l2 = n2.light && n2.dark ? `media` : void 0, rootSelector: u2 = `:root`} = _a2, d2 = __objRest(_a2, ["colorSchemes", "defaultColorScheme", "disableCssColorScheme", "cssVarPrefix", "nativeColor", "shouldSkipGeneratingVar", "colorSchemeSelector", "rootSelector"]), f2 = Object.keys(n2)[0], p2 = r2 || (n2.light && f2 !== `light` ? `light` : f2), m2 = It(o2), _b = n2, {[p2]: h2, light: g2, dark: _2} = _b, v2 = __objRest(_b, [__restKey(p2), "light", "dark"]), y2 = __spreadValues({}, v2), b2 = h2;
  if ((p2 === `dark` && !(`dark` in n2) || p2 === `light` && !(`light` in n2)) && (b2 = true), !b2)
    throw Error(N(21, p2));
  let x2;
  s2 && (x2 = `oklch`);
  let S2 = Lt(x2, y2, b2, d2, p2);
  g2 && !y2.light && Lt(x2, y2, g2, void 0, `light`), _2 && !y2.dark && Lt(x2, y2, _2, void 0, `dark`);
  let C2 = __spreadProps(__spreadValues({defaultColorScheme: p2}, S2), {cssVarPrefix: o2, colorSchemeSelector: l2, rootSelector: u2, getCssVar: m2, colorSchemes: y2, font: __spreadValues(__spreadValues({}, Ze(S2.typography)), S2.font), spacing: Pt(d2.spacing)});
  Object.keys(C2.colorSchemes).forEach((e5) => {
    let t3 = C2.colorSchemes[e5].palette, n3 = (e6) => {
      let n4 = e6.split(`-`), r4 = n4[1], i3 = n4[2];
      return m2(e6, t3[r4][i3]);
    };
    t3.mode === `light` && (G(t3.common, `background`, `#fff`), G(t3.common, `onBackground`, `#000`)), t3.mode === `dark` && (G(t3.common, `background`, `#000`), G(t3.common, `onBackground`, `#fff`));
    function r3(e6, t4, n4) {
      if (x2) {
        let r4;
        return e6 === z && (r4 = `transparent ${((1 - n4) * 100).toFixed(0)}%`), e6 === I && (r4 = `#000 ${(n4 * 100).toFixed(0)}%`), e6 === B && (r4 = `#fff ${(n4 * 100).toFixed(0)}%`), `color-mix(in ${x2}, ${t4}, ${r4})`;
      }
      return e6(t4, n4);
    }
    if (jt(t3, [`Alert`, `AppBar`, `Avatar`, `Button`, `Chip`, `FilledInput`, `LinearProgress`, `Skeleton`, `Slider`, `SnackbarContent`, `SpeedDialAction`, `StepConnector`, `StepContent`, `Switch`, `TableCell`, `Tooltip`]), t3.mode === `light`) {
      G(t3.Alert, `errorColor`, r3(I, s2 ? m2(`palette-error-light`) : t3.error.light, 0.6)), G(t3.Alert, `infoColor`, r3(I, s2 ? m2(`palette-info-light`) : t3.info.light, 0.6)), G(t3.Alert, `successColor`, r3(I, s2 ? m2(`palette-success-light`) : t3.success.light, 0.6)), G(t3.Alert, `warningColor`, r3(I, s2 ? m2(`palette-warning-light`) : t3.warning.light, 0.6)), G(t3.Alert, `errorFilledBg`, n3(`palette-error-main`)), G(t3.Alert, `infoFilledBg`, n3(`palette-info-main`)), G(t3.Alert, `successFilledBg`, n3(`palette-success-main`)), G(t3.Alert, `warningFilledBg`, n3(`palette-warning-main`)), G(t3.Alert, `errorFilledColor`, Ft(() => t3.getContrastText(t3.error.main))), G(t3.Alert, `infoFilledColor`, Ft(() => t3.getContrastText(t3.info.main))), G(t3.Alert, `successFilledColor`, Ft(() => t3.getContrastText(t3.success.main))), G(t3.Alert, `warningFilledColor`, Ft(() => t3.getContrastText(t3.warning.main))), G(t3.Alert, `errorStandardBg`, r3(B, s2 ? m2(`palette-error-light`) : t3.error.light, 0.9)), G(t3.Alert, `infoStandardBg`, r3(B, s2 ? m2(`palette-info-light`) : t3.info.light, 0.9)), G(t3.Alert, `successStandardBg`, r3(B, s2 ? m2(`palette-success-light`) : t3.success.light, 0.9)), G(t3.Alert, `warningStandardBg`, r3(B, s2 ? m2(`palette-warning-light`) : t3.warning.light, 0.9)), G(t3.Alert, `errorIconColor`, n3(`palette-error-main`)), G(t3.Alert, `infoIconColor`, n3(`palette-info-main`)), G(t3.Alert, `successIconColor`, n3(`palette-success-main`)), G(t3.Alert, `warningIconColor`, n3(`palette-warning-main`)), G(t3.AppBar, `defaultBg`, n3(`palette-grey-100`)), G(t3.Avatar, `defaultBg`, n3(`palette-grey-400`)), G(t3.Button, `inheritContainedBg`, n3(`palette-grey-300`)), G(t3.Button, `inheritContainedHoverBg`, n3(`palette-grey-A100`)), G(t3.Chip, `defaultBorder`, n3(`palette-grey-400`)), G(t3.Chip, `defaultAvatarColor`, n3(`palette-grey-700`)), G(t3.Chip, `defaultIconColor`, n3(`palette-grey-700`)), G(t3.FilledInput, `bg`, `rgba(0, 0, 0, 0.06)`), G(t3.FilledInput, `hoverBg`, `rgba(0, 0, 0, 0.09)`), G(t3.FilledInput, `disabledBg`, `rgba(0, 0, 0, 0.12)`), G(t3.LinearProgress, `primaryBg`, r3(B, s2 ? m2(`palette-primary-main`) : t3.primary.main, 0.62)), G(t3.LinearProgress, `secondaryBg`, r3(B, s2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.62)), G(t3.LinearProgress, `errorBg`, r3(B, s2 ? m2(`palette-error-main`) : t3.error.main, 0.62)), G(t3.LinearProgress, `infoBg`, r3(B, s2 ? m2(`palette-info-main`) : t3.info.main, 0.62)), G(t3.LinearProgress, `successBg`, r3(B, s2 ? m2(`palette-success-main`) : t3.success.main, 0.62)), G(t3.LinearProgress, `warningBg`, r3(B, s2 ? m2(`palette-warning-light`) : t3.warning.main, 0.62)), G(t3.Skeleton, `bg`, x2 ? r3(z, s2 ? m2(`palette-text-primary`) : t3.text.primary, 0.11) : `rgba(${n3(`palette-text-primaryChannel`)} / 0.11)`), G(t3.Slider, `primaryTrack`, r3(B, s2 ? m2(`palette-primary-main`) : t3.primary.main, 0.62)), G(t3.Slider, `secondaryTrack`, r3(B, s2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.62)), G(t3.Slider, `errorTrack`, r3(B, s2 ? m2(`palette-error-main`) : t3.error.main, 0.62)), G(t3.Slider, `infoTrack`, r3(B, s2 ? m2(`palette-info-main`) : t3.info.main, 0.62)), G(t3.Slider, `successTrack`, r3(B, s2 ? m2(`palette-success-main`) : t3.success.main, 0.62)), G(t3.Slider, `warningTrack`, r3(B, s2 ? m2(`palette-warning-main`) : t3.warning.main, 0.62));
      let e6 = x2 ? r3(I, s2 ? m2(`palette-background-default`) : t3.background.default, 0.6825) : R(t3.background.default, 0.8);
      G(t3.SnackbarContent, `bg`, e6), G(t3.SnackbarContent, `color`, Ft(() => x2 ? Oe.text.primary : t3.getContrastText(e6))), G(t3.SpeedDialAction, `fabHoverBg`, R(t3.background.paper, 0.15)), G(t3.StepConnector, `border`, n3(`palette-grey-400`)), G(t3.StepContent, `border`, n3(`palette-grey-400`)), G(t3.Switch, `defaultColor`, n3(`palette-common-white`)), G(t3.Switch, `defaultDisabledColor`, n3(`palette-grey-100`)), G(t3.Switch, `primaryDisabledColor`, r3(B, s2 ? m2(`palette-primary-main`) : t3.primary.main, 0.62)), G(t3.Switch, `secondaryDisabledColor`, r3(B, s2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.62)), G(t3.Switch, `errorDisabledColor`, r3(B, s2 ? m2(`palette-error-main`) : t3.error.main, 0.62)), G(t3.Switch, `infoDisabledColor`, r3(B, s2 ? m2(`palette-info-main`) : t3.info.main, 0.62)), G(t3.Switch, `successDisabledColor`, r3(B, s2 ? m2(`palette-success-main`) : t3.success.main, 0.62)), G(t3.Switch, `warningDisabledColor`, r3(B, s2 ? m2(`palette-warning-main`) : t3.warning.main, 0.62)), G(t3.TableCell, `border`, r3(B, z(s2 ? m2(`palette-divider`) : t3.divider, 1), 0.88)), G(t3.Tooltip, `bg`, r3(z, s2 ? m2(`palette-grey-700`) : t3.grey[700], 0.92));
    }
    if (t3.mode === `dark`) {
      G(t3.Alert, `errorColor`, r3(B, s2 ? m2(`palette-error-light`) : t3.error.light, 0.6)), G(t3.Alert, `infoColor`, r3(B, s2 ? m2(`palette-info-light`) : t3.info.light, 0.6)), G(t3.Alert, `successColor`, r3(B, s2 ? m2(`palette-success-light`) : t3.success.light, 0.6)), G(t3.Alert, `warningColor`, r3(B, s2 ? m2(`palette-warning-light`) : t3.warning.light, 0.6)), G(t3.Alert, `errorFilledBg`, n3(`palette-error-dark`)), G(t3.Alert, `infoFilledBg`, n3(`palette-info-dark`)), G(t3.Alert, `successFilledBg`, n3(`palette-success-dark`)), G(t3.Alert, `warningFilledBg`, n3(`palette-warning-dark`)), G(t3.Alert, `errorFilledColor`, Ft(() => t3.getContrastText(t3.error.dark))), G(t3.Alert, `infoFilledColor`, Ft(() => t3.getContrastText(t3.info.dark))), G(t3.Alert, `successFilledColor`, Ft(() => t3.getContrastText(t3.success.dark))), G(t3.Alert, `warningFilledColor`, Ft(() => t3.getContrastText(t3.warning.dark))), G(t3.Alert, `errorStandardBg`, r3(I, s2 ? m2(`palette-error-light`) : t3.error.light, 0.9)), G(t3.Alert, `infoStandardBg`, r3(I, s2 ? m2(`palette-info-light`) : t3.info.light, 0.9)), G(t3.Alert, `successStandardBg`, r3(I, s2 ? m2(`palette-success-light`) : t3.success.light, 0.9)), G(t3.Alert, `warningStandardBg`, r3(I, s2 ? m2(`palette-warning-light`) : t3.warning.light, 0.9)), G(t3.Alert, `errorIconColor`, n3(`palette-error-main`)), G(t3.Alert, `infoIconColor`, n3(`palette-info-main`)), G(t3.Alert, `successIconColor`, n3(`palette-success-main`)), G(t3.Alert, `warningIconColor`, n3(`palette-warning-main`)), G(t3.AppBar, `defaultBg`, n3(`palette-grey-900`)), G(t3.AppBar, `darkBg`, n3(`palette-background-paper`)), G(t3.AppBar, `darkColor`, n3(`palette-text-primary`)), G(t3.Avatar, `defaultBg`, n3(`palette-grey-600`)), G(t3.Button, `inheritContainedBg`, n3(`palette-grey-800`)), G(t3.Button, `inheritContainedHoverBg`, n3(`palette-grey-700`)), G(t3.Chip, `defaultBorder`, n3(`palette-grey-700`)), G(t3.Chip, `defaultAvatarColor`, n3(`palette-grey-300`)), G(t3.Chip, `defaultIconColor`, n3(`palette-grey-300`)), G(t3.FilledInput, `bg`, `rgba(255, 255, 255, 0.09)`), G(t3.FilledInput, `hoverBg`, `rgba(255, 255, 255, 0.13)`), G(t3.FilledInput, `disabledBg`, `rgba(255, 255, 255, 0.12)`), G(t3.LinearProgress, `primaryBg`, r3(I, s2 ? m2(`palette-primary-main`) : t3.primary.main, 0.5)), G(t3.LinearProgress, `secondaryBg`, r3(I, s2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.5)), G(t3.LinearProgress, `errorBg`, r3(I, s2 ? m2(`palette-error-main`) : t3.error.main, 0.5)), G(t3.LinearProgress, `infoBg`, r3(I, s2 ? m2(`palette-info-main`) : t3.info.main, 0.5)), G(t3.LinearProgress, `successBg`, r3(I, s2 ? m2(`palette-success-main`) : t3.success.main, 0.5)), G(t3.LinearProgress, `warningBg`, r3(I, s2 ? m2(`palette-warning-main`) : t3.warning.main, 0.5)), G(t3.Skeleton, `bg`, x2 ? r3(z, s2 ? m2(`palette-text-primary`) : t3.text.primary, 0.13) : `rgba(${n3(`palette-text-primaryChannel`)} / 0.13)`), G(t3.Slider, `primaryTrack`, r3(I, s2 ? m2(`palette-primary-main`) : t3.primary.main, 0.5)), G(t3.Slider, `secondaryTrack`, r3(I, s2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.5)), G(t3.Slider, `errorTrack`, r3(I, s2 ? m2(`palette-error-main`) : t3.error.main, 0.5)), G(t3.Slider, `infoTrack`, r3(I, s2 ? m2(`palette-info-main`) : t3.info.main, 0.5)), G(t3.Slider, `successTrack`, r3(I, s2 ? m2(`palette-success-main`) : t3.success.main, 0.5)), G(t3.Slider, `warningTrack`, r3(I, s2 ? m2(`palette-warning-light`) : t3.warning.main, 0.5));
      let e6 = x2 ? r3(B, s2 ? m2(`palette-background-default`) : t3.background.default, 0.985) : R(t3.background.default, 0.98);
      G(t3.SnackbarContent, `bg`, e6), G(t3.SnackbarContent, `color`, Ft(() => x2 ? Ee.text.primary : t3.getContrastText(e6))), G(t3.SpeedDialAction, `fabHoverBg`, R(t3.background.paper, 0.15)), G(t3.StepConnector, `border`, n3(`palette-grey-600`)), G(t3.StepContent, `border`, n3(`palette-grey-600`)), G(t3.Switch, `defaultColor`, n3(`palette-grey-300`)), G(t3.Switch, `defaultDisabledColor`, n3(`palette-grey-600`)), G(t3.Switch, `primaryDisabledColor`, r3(I, s2 ? m2(`palette-primary-main`) : t3.primary.main, 0.55)), G(t3.Switch, `secondaryDisabledColor`, r3(I, s2 ? m2(`palette-secondary-main`) : t3.secondary.main, 0.55)), G(t3.Switch, `errorDisabledColor`, r3(I, s2 ? m2(`palette-error-main`) : t3.error.main, 0.55)), G(t3.Switch, `infoDisabledColor`, r3(I, s2 ? m2(`palette-info-main`) : t3.info.main, 0.55)), G(t3.Switch, `successDisabledColor`, r3(I, s2 ? m2(`palette-success-main`) : t3.success.main, 0.55)), G(t3.Switch, `warningDisabledColor`, r3(I, s2 ? m2(`palette-warning-light`) : t3.warning.main, 0.55)), G(t3.TableCell, `border`, r3(I, z(s2 ? m2(`palette-divider`) : t3.divider, 1), 0.68)), G(t3.Tooltip, `bg`, r3(z, s2 ? m2(`palette-grey-700`) : t3.grey[700], 0.92));
    }
    s2 || (Nt(t3.background, `default`), Nt(t3.background, `paper`), Nt(t3.common, `background`), Nt(t3.common, `onBackground`), Nt(t3, `divider`)), Object.keys(t3).forEach((e6) => {
      let n4 = t3[e6];
      e6 !== `tonalOffset` && !s2 && n4 && typeof n4 == `object` && (n4.main && G(t3[e6], `mainChannel`, le(Mt(n4.main))), n4.light && G(t3[e6], `lightChannel`, le(Mt(n4.light))), n4.dark && G(t3[e6], `darkChannel`, le(Mt(n4.dark))), n4.contrastText && G(t3[e6], `contrastTextChannel`, le(Mt(n4.contrastText))), e6 === `text` && (Nt(t3[e6], `primary`), Nt(t3[e6], `secondary`)), e6 === `action` && (n4.active && Nt(t3[e6], `active`), n4.selected && Nt(t3[e6], `selected`)));
    });
  }), C2 = t2.reduce((e5, t3) => j(e5, t3), C2);
  let w2 = qe(e4.focusVisible, t2);
  w2 != null && w2 !== false && (C2.focusVisible = Ye(w2, m2(`palette-primary-main`)));
  let T2 = {prefix: o2, disableCssColorScheme: i2, shouldSkipGeneratingVar: c2, getSelector: At(C2), enableContrastVars: s2}, {vars: E2, generateThemeVars: D2, generateStyleSheets: k2} = ee(C2, T2);
  return C2.vars = E2, Object.entries(C2.colorSchemes[C2.defaultColorScheme]).forEach(([e5, t3]) => {
    C2[e5] = t3;
  }), C2.generateThemeVars = D2, C2.generateStyleSheets = k2, C2.generateSpacing = function() {
    return a(d2.spacing, O(this));
  }, C2.getColorSchemeSelector = ie(l2), C2.spacing = C2.generateSpacing(), C2.shouldSkipGeneratingVar = c2, C2.unstable_sxConfig = __spreadValues(__spreadValues({}, pe), d2?.unstable_sxConfig), C2.unstable_sx = function(e5) {
    return he({sx: e5, theme: this});
  }, C2.internal_cache = {}, C2.toRuntimeSource = vt, C2;
}
function zt(e4, t2, n2) {
  e4.colorSchemes && n2 && (e4.colorSchemes[t2] = __spreadProps(__spreadValues({}, n2 !== true && n2), {palette: Re(__spreadProps(__spreadValues({}, n2 === true ? {} : n2.palette), {mode: t2}))}));
}
function Bt(e4 = {}, ...t2) {
  let _a2 = e4, {palette: n2, cssVariables: r2 = false, colorSchemes: i2 = n2 ? void 0 : {light: true}, defaultColorScheme: a2 = n2?.mode} = _a2, o2 = __objRest(_a2, ["palette", "cssVariables", "colorSchemes", "defaultColorScheme"]), s2 = a2 || `light`, c2 = i2?.[s2], l2 = __spreadValues(__spreadValues({}, i2), n2 ? {[s2]: __spreadProps(__spreadValues({}, typeof c2 != `boolean` && c2), {palette: n2})} : void 0);
  if (r2 === false) {
    if (!(`colorSchemes` in e4))
      return St(e4, ...t2);
    let r3 = n2;
    `palette` in e4 || l2[s2] && (l2[s2] === true ? s2 === `dark` && (r3 = {mode: `dark`}) : r3 = l2[s2].palette);
    let i3 = St(__spreadProps(__spreadValues({}, e4), {palette: r3}), ...t2);
    if (i3.defaultColorScheme = s2, i3.colorSchemes = l2, i3.palette.mode === `light` && (i3.colorSchemes.light = __spreadProps(__spreadValues({}, l2.light !== true && l2.light), {palette: i3.palette}), zt(i3, `dark`, l2.dark)), i3.palette.mode === `dark` && (i3.colorSchemes.dark = __spreadProps(__spreadValues({}, l2.dark !== true && l2.dark), {palette: i3.palette}), zt(i3, `light`, l2.light)), i3.focusVisible != null && i3.focusVisible !== false) {
      let n3 = i3.focusVisible, r4 = qe(e4.focusVisible, t2), a3 = r4 && typeof r4 == `object` ? r4.outlineColor : void 0;
      if (!a3 || Je(r4) && a3 === i3.palette.primary.main) {
        let _b = n3, {outlineColor: e5} = _b, t3 = __objRest(_b, ["outlineColor"]);
        n3 = t3;
      }
      Object.keys(i3.colorSchemes).forEach((e5) => {
        let t3 = i3.colorSchemes?.[e5]?.palette;
        t3?.primary && (i3.colorSchemes[e5].focusVisible = Ye(n3, t3.primary.main));
      });
    }
    return i3;
  }
  return !n2 && !(`light` in l2) && s2 === `light` && (l2.light = true), Rt(__spreadValues(__spreadProps(__spreadValues({}, o2), {colorSchemes: l2, defaultColorScheme: s2}), typeof r2 != `boolean` && r2), ...t2);
}
function Vt(e4) {
  return typeof e4 == `string`;
}
function Ht(...e4) {
  let t2 = C(void 0), n2 = b((t3) => {
    let n3 = e4.map((e5) => {
      if (e5 == null)
        return null;
      if (typeof e5 == `function`) {
        let n4 = e5, r2 = n4(t3);
        return typeof r2 == `function` ? r2 : () => {
          n4(null);
        };
      }
      return e5.current = t3, () => {
        e5.current = null;
      };
    });
    return () => {
      n3.forEach((e5) => e5?.());
    };
  }, e4);
  return c(() => e4.every((e5) => e5 == null) ? null : (e5) => {
    t2.current && (t2.current = (t2.current(), void 0)), e5 != null && (t2.current = n2(e5));
  }, e4);
}
s();
function Ut(e4) {
  let t2 = C(e4);
  return D(() => {
    t2.current = e4;
  }), C((...e5) => (0, t2.current)(...e5)).current;
}
function K(e4) {
  return e4 && e4.ownerDocument || document;
}
function Wt(e4) {
  return K(e4).defaultView || window;
}
s();
var Gt = _(void 0);
s();
function Kt() {
  return d(Gt);
}
function qt({props: e4, states: t2}) {
  let n2 = d(Gt), r2 = {};
  return t2.forEach((t3) => {
    let i2 = e4[t3];
    r2[t3] = i2 === void 0 && n2 ? n2[t3] : i2;
  }), [r2, n2];
}
var Jt = Bt();
s();
function Yt() {
  let e4 = n(Jt);
  return e4.$$material || e4;
}
function Xt(e4) {
  return e4 !== `ownerState` && e4 !== `theme` && e4 !== `sx` && e4 !== `as`;
}
var Zt = (e4) => Xt(e4) && e4 !== `classes`, q = ae({themeId: we, defaultTheme: Jt, rootShouldForwardProp: Zt}), J = e;
s();
function Y(e4) {
  return M(e4);
}
var X = k, Qt = Ht, $t = D, en = K;
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
  return L(`MuiFormHelperText`, e4);
}
var Tn = F(`MuiFormHelperText`, [`root`, `error`, `disabled`, `sizeSmall`, `sizeMedium`, `contained`, `focused`, `filled`, `required`]);
function En(e4) {
  return L(`MuiFormLabel`, e4);
}
var Dn = F(`MuiFormLabel`, [`root`, `colorSecondary`, `focused`, `disabled`, `error`, `filled`, `required`, `asterisk`]);
function On(e4) {
  return L(`MuiListItemButton`, e4);
}
var kn = F(`MuiListItemButton`, [`root`, `focusVisible`, `dense`, `alignItemsFlexStart`, `disabled`, `divider`, `gutters`, `selected`]);
function An(e4) {
  return L(`MuiMenuItem`, e4);
}
var jn = F(`MuiMenuItem`, [`root`, `focusVisible`, `dense`, `disabled`, `divider`, `gutters`, `selected`]);
function Mn({props: e4, name: t2}) {
  return ne({props: e4, name: t2, defaultTheme: Jt, themeId: we});
}
function Nn(...e4) {
  return e4.reduce((e5, t2) => t2 == null ? e5 : function(...n2) {
    e5.apply(this, n2), t2.apply(this, n2);
  }, () => {
  });
}
function Pn(e4) {
  return L(`MuiSvgIcon`, e4);
}
var Fn = F(`MuiSvgIcon`, [`root`, `colorPrimary`, `colorSecondary`, `colorAction`, `colorError`, `colorDisabled`, `fontSizeInherit`, `fontSizeSmall`, `fontSizeMedium`, `fontSizeLarge`]);
s();
var In = (e4) => {
  let {color: t2, fontSize: n2, classes: r2} = e4, i2 = {root: [`root`, t2 !== `inherit` && `color${X(t2)}`, `fontSize${X(n2)}`]};
  return H(i2, Pn, r2);
}, Ln = q(`svg`, {name: `MuiSvgIcon`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.color !== `inherit` && t2[`color${X(n2.color)}`], t2[`fontSize${X(n2.fontSize)}`]];
}})(J(({theme: e4}) => __spreadProps(__spreadValues({userSelect: `none`, width: `1em`, height: `1em`, display: `inline-block`, flexShrink: 0}, Cn(e4, `fill`, {duration: (e4.vars ?? e4).transitions?.duration?.shorter})), {variants: [{props: (e5) => !e5.hasSvgAsChild, style: {fill: `currentColor`}}, {props: {fontSize: `inherit`}, style: {fontSize: `inherit`}}, {props: {fontSize: `small`}, style: {fontSize: e4.typography?.pxToRem?.(20) || `1.25rem`}}, {props: {fontSize: `medium`}, style: {fontSize: e4.typography?.pxToRem?.(24) || `1.5rem`}}, {props: {fontSize: `large`}, style: {fontSize: e4.typography?.pxToRem?.(35) || `2.1875rem`}}, ...Object.entries((e4.vars ?? e4).palette).filter(([, e5]) => e5 && e5.main).map(([t2]) => ({props: {color: t2}, style: {color: (e4.vars ?? e4).palette?.[t2]?.main}})), {props: {color: `action`}, style: {color: (e4.vars ?? e4).palette?.action?.active}}, {props: {color: `disabled`}, style: {color: (e4.vars ?? e4).palette?.action?.disabled}}, {props: {color: `inherit`}, style: {color: void 0}}]}))), Rn = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiSvgIcon`}), _a2 = n2, {children: r2, className: i2, color: a2 = `inherit`, component: o2 = `svg`, fontSize: s2 = `medium`, htmlColor: c2, inheritViewBox: l2 = false, titleAccess: u2, viewBox: d2 = `0 0 24 24`} = _a2, f2 = __objRest(_a2, ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"]), p2 = v(r2) && r2.type === `svg`, m2 = __spreadProps(__spreadValues({}, n2), {color: a2, component: o2, fontSize: s2, instanceFontSize: e4.fontSize, inheritViewBox: l2, viewBox: d2, hasSvgAsChild: p2}), h2 = {};
  l2 || (h2.viewBox = d2);
  let g2 = In(m2);
  return T(Ln, __spreadProps(__spreadValues(__spreadValues(__spreadValues({as: o2, className: U(g2.root, i2), focusable: `false`, color: c2, "aria-hidden": !u2 || void 0, role: u2 ? `img` : void 0, ref: t2}, h2), f2), p2 && r2.props), {ownerState: m2, children: [p2 ? r2.props.children : r2, u2 ? w(`title`, {children: u2}) : null]}));
});
Rn.muiName = `SvgIcon`, s();
function zn(e4, t2) {
  function n2(t3, n3) {
    return w(Rn, __spreadProps(__spreadValues({"data-testid": void 0, ref: n3}, t3), {children: e4}));
  }
  return n2.muiName = Rn.muiName, u(h(n2));
}
var Bn = oe, Vn = Wt;
function Hn(e4, t2) {
  typeof e4 == `function` ? e4(t2) : e4 && (e4.current = t2);
}
var Un = te;
s();
function Wn(e4) {
  let {controlled: t2, default: n2, name: r2, state: i2 = `value`} = e4, {current: a2} = C(t2 !== void 0), [o2, s2] = l(n2);
  return [a2 ? t2 : o2, b((e5) => {
    a2 || s2(e5);
  }, [])];
}
var Gn = Ut;
function Kn(e4, t2) {
  let n2 = e4.charCodeAt(2);
  return e4[0] === `o` && e4[1] === `n` && n2 >= 65 && n2 <= 90 && typeof t2 == `function`;
}
s();
var qn = {};
function Jn(e4, t2) {
  let n2 = C(qn);
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
s();
var Zn = o.createContext(null);
s();
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
  let _a2 = e4, {in: t2 = false, appear: n2 = false, enter: r2 = true, exit: i2 = true, mountOnEnter: a2 = false, unmountOnExit: o2 = false, timeout: s2, addEndListener: c2, reduceMotion: u2 = false, getAutoTimeout: f2, nodeRef: p2, onEnter: m2, onEntering: h2, onEntered: g2, onExit: _2, onExiting: v2, onExited: y2, children: x2} = _a2, S2 = __objRest(_a2, ["in", "appear", "enter", "exit", "mountOnEnter", "unmountOnExit", "timeout", "addEndListener", "reduceMotion", "getAutoTimeout", "nodeRef", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "children"]), T2 = d(Zn), E2 = T2 && !T2.isMounting ? r2 : n2, [O2, k2] = l(() => t2 ? E2 ? `exited` : `entered` : a2 || o2 ? `unmounted` : `exited`), A2 = C(O2);
  A2.current = O2, t2 && O2 === `unmounted` && (A2.current = `exited`, k2(`exited`));
  let j2 = C(t2 && E2), M2 = C(false), N2 = C(null), P2 = C(O2), F2 = C(false), I2 = C(u2), L2 = Yn({timeout: s2, addEndListener: c2, reduceMotion: u2, getAutoTimeout: f2, onEnter: m2, onEntering: h2, onEntered: g2, onExit: _2, onExiting: v2, onExited: y2, enter: r2, exit: i2, mountOnEnter: a2, unmountOnExit: o2, nodeRef: p2, parentGroup: T2}), R2 = b(() => {
    N2.current !== null && (N2.current.cancel(), N2.current = null);
  }, []), ee2 = b((e5) => {
    let t3 = true, n3 = () => {
      t3 && (t3 = false, N2.current = null, e5());
    };
    return n3.cancel = () => {
      t3 = false;
    }, N2.current = n3, n3;
  }, []), te2 = b((e5, t3) => {
    let n3, r3 = () => {
      n3 !== void 0 && (clearTimeout(n3), n3 = void 0);
    }, i3 = ee2(() => {
      r3(), A2.current = e5, k2(e5);
    }), a3 = i3.cancel;
    i3.cancel = () => {
      r3(), a3();
    };
    let o3 = L2.current.nodeRef.current, s3 = L2.current.addEndListener, c3 = L2.current.getAutoTimeout !== void 0, l2 = L2.current.getAutoTimeout?.(), u3 = $n({currentStatus: t3, isAppearing: F2.current, timeout: L2.current.timeout, autoTimeout: l2}), d2 = I2.current, f3 = u3 ?? (d2 && c3 ? 0 : null), p3 = (e6) => {
      n3 = setTimeout(i3, e6);
    };
    if (!o3) {
      p3(0);
      return;
    }
    if (s3) {
      f3 != null && p3(d2 ? 0 : f3), s3.length >= 2 ? s3(o3, i3) : s3(i3);
      return;
    }
    p3(d2 ? 0 : u3 ?? 0);
  }, [ee2, L2]), ne2 = b((e5) => {
    let t3 = L2.current, n3 = t3.parentGroup ? t3.parentGroup.isMounting : e5;
    if (F2.current = n3, !e5 && !t3.enter) {
      A2.current = `entered`, k2(`entered`);
      return;
    }
    I2.current = t3.reduceMotion, t3.onEnter?.(n3), A2.current = `entering`, k2(`entering`);
  }, [L2]), re2 = b(() => {
    let e5 = L2.current;
    if (!e5.exit) {
      A2.current = `exited`, k2(`exited`);
      return;
    }
    I2.current = e5.reduceMotion, e5.onExit?.(), A2.current = `exiting`, k2(`exiting`);
  }, [L2]), z2 = b((e5, t3) => {
    if (R2(), t3 === `entering`) {
      let t4 = L2.current;
      if (t4.mountOnEnter || t4.unmountOnExit) {
        let e6 = t4.nodeRef.current;
        e6 && ln(e6);
      }
      ne2(e5);
    } else
      re2();
  }, [R2, ne2, re2, L2]);
  return D(() => (M2.current = true, j2.current && (j2.current = false, z2(true, `entering`)), () => {
    M2.current = false, R2();
  }), [R2, z2]), D(() => {
    if (!M2.current)
      return;
    let e5 = A2.current;
    t2 ? e5 !== `entering` && e5 !== `entered` && z2(false, `entering`) : e5 === `entering` || e5 === `entered` ? z2(false, `exiting`) : e5 === `exited` && o2 && (A2.current = `unmounted`, k2(`unmounted`));
  }, [t2, O2, o2, z2]), D(() => {
    if (O2 === `unmounted` || P2.current === `unmounted`) {
      P2.current = O2;
      return;
    }
    let e5 = P2.current !== O2;
    e5 && (P2.current = O2);
    let t3 = L2.current;
    O2 === `entering` ? (e5 && t3.onEntering?.(F2.current), N2.current === null && A2.current === O2 && te2(`entered`, `entering`)) : O2 === `exiting` ? (e5 && t3.onExiting?.(), N2.current === null && A2.current === O2 && te2(`exited`, `exiting`)) : O2 === `entered` && e5 ? t3.onEntered?.(F2.current) : O2 === `exited` && e5 && t3.onExited?.();
  }, [L2, te2, O2]), O2 === `unmounted` ? null : w(Zn.Provider, {value: null, children: x2(O2, S2)});
}
s();
var tr = `(prefers-reduced-motion: reduce)`, nr = 0, rr = `0ms`, ir = () => {
}, ar = () => false, or = () => true, sr = () => ir;
function cr(e4) {
  let [t2, n2] = l(() => ({enabled: e4, matches: e4 ? null : false})), r2 = t2.matches;
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
var lr = __spreadValues({}, x).useSyncExternalStore;
function ur(e4) {
  let t2 = e4 ? or : ar, [n2, r2] = c(() => {
    if (!e4 || typeof window > `u` || typeof window.matchMedia != `function`)
      return [ar, sr];
    let t3 = window.matchMedia(tr);
    return [() => t3.matches, (e5) => (t3.addEventListener(`change`, e5), () => {
      t3.removeEventListener(`change`, e5);
    })];
  }, [e4]);
  return lr(r2, n2, t2);
}
var dr = lr === void 0 ? cr : ur;
function fr(e4, t2) {
  let n2 = dr(!t2 && e4 === `system`), r2 = !t2 && (e4 === `always` || e4 === `system` && n2 !== false);
  return c(() => ({shouldReduceMotion: r2, getTransitionTiming(e5) {
    return r2 ? {duration: nr, delay: rr} : e5;
  }}), [r2]);
}
function pr(e4, t2, n2) {
  return e4 === void 0 || Vt(e4) ? t2 : __spreadProps(__spreadValues({}, t2), {ownerState: __spreadValues(__spreadValues({}, t2.ownerState), n2)});
}
function mr(e4, t2, n2) {
  return typeof e4 == `function` ? e4(t2, n2) : e4;
}
function hr(e4) {
  if (e4 === void 0)
    return {};
  let t2 = {};
  for (let n2 of Object.keys(e4))
    Kn(n2, e4[n2]) && (t2[n2] = e4[n2]);
  return t2;
}
function gr(e4) {
  if (e4 === void 0)
    return {};
  let t2 = {};
  return Object.keys(e4).filter((t3) => !(t3.match(/^on[A-Z]/) && typeof e4[t3] == `function`)).forEach((n2) => {
    t2[n2] = e4[n2];
  }), t2;
}
function _r(e4) {
  let {getSlotProps: t2, additionalProps: n2, externalSlotProps: r2, externalForwardedProps: i2, className: a2} = e4;
  if (!t2) {
    let e5 = U(n2?.className, a2, i2?.className, r2?.className), t3 = __spreadValues(__spreadValues(__spreadValues({}, n2?.style), i2?.style), r2?.style), o3 = __spreadValues(__spreadValues(__spreadValues({}, n2), i2), r2);
    return e5.length > 0 && (o3.className = e5), Object.keys(t3).length > 0 && (o3.style = t3), {props: o3, internalRef: void 0};
  }
  let o2 = hr(__spreadValues(__spreadValues({}, i2), r2)), s2 = gr(r2), c2 = gr(i2), l2 = t2(o2), u2 = U(l2?.className, n2?.className, a2, i2?.className, r2?.className), d2 = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, l2?.style), n2?.style), i2?.style), r2?.style), f2 = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, l2), n2), c2), s2);
  return u2.length > 0 && (f2.className = u2), Object.keys(d2).length > 0 && (f2.style = d2), {props: f2, internalRef: l2.ref};
}
function Z(e4, t2) {
  let _a2 = t2, {className: n2, elementType: r2, ownerState: i2, externalForwardedProps: a2, internalForwardedProps: o2, shouldForwardComponentProp: s2 = false} = _a2, c2 = __objRest(_a2, ["className", "elementType", "ownerState", "externalForwardedProps", "internalForwardedProps", "shouldForwardComponentProp"]), _b = a2, {component: l2, slots: u2 = {[e4]: void 0}, slotProps: d2 = {[e4]: void 0}} = _b, f2 = __objRest(_b, ["component", "slots", "slotProps"]), p2 = u2[e4] || r2, m2 = mr(d2[e4], i2), _c2 = _r(__spreadProps(__spreadValues({className: n2}, c2), {externalForwardedProps: e4 === `root` ? f2 : void 0, externalSlotProps: m2})), {props: _d} = _c2, _e2 = _d, {component: h2} = _e2, g2 = __objRest(_e2, ["component"]), {internalRef: _2} = _c2, v2 = Ht(_2, m2?.ref, t2.ref), y2 = e4 === `root` ? h2 || l2 : h2;
  return [p2, pr(p2, __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, e4 === `root` && !l2 && !u2[e4] && o2), e4 !== `root` && !u2[e4] && o2), g2), y2 && !s2 && {as: y2}), y2 && s2 && {component: y2}), {ref: v2}), i2)];
}
function vr(e4) {
  return L(`MuiPaper`, e4);
}
var yr = F(`MuiPaper`, `root.rounded.outlined.elevation.elevation0.elevation1.elevation2.elevation3.elevation4.elevation5.elevation6.elevation7.elevation8.elevation9.elevation10.elevation11.elevation12.elevation13.elevation14.elevation15.elevation16.elevation17.elevation18.elevation19.elevation20.elevation21.elevation22.elevation23.elevation24`.split(`.`));
s();
var br = (e4) => {
  let {square: t2, elevation: n2, variant: r2, classes: i2} = e4, a2 = {root: [`root`, r2, !t2 && `rounded`, r2 === `elevation` && `elevation${n2}`]};
  return H(a2, vr, i2);
}, xr = q(`div`, {name: `MuiPaper`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[n2.variant], !n2.square && t2.rounded, n2.variant === `elevation` && t2[`elevation${n2.elevation}`]];
}})(J(({theme: e4}) => __spreadProps(__spreadValues({backgroundColor: (e4.vars || e4).palette.background.paper, color: (e4.vars || e4).palette.text.primary}, Cn(e4, `box-shadow`)), {variants: [{props: ({ownerState: e5}) => !e5.square, style: {borderRadius: e4.shape.borderRadius}}, {props: {variant: `outlined`}, style: {border: `1px solid ${(e4.vars || e4).palette.divider}`}}, {props: {variant: `elevation`}, style: {boxShadow: `var(--Paper-shadow)`, backgroundImage: `var(--Paper-overlay)`}}]}))), Sr = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiPaper`}), r2 = Yt(), _a2 = n2, {className: i2, component: a2 = `div`, elevation: o2 = 1, square: s2 = false, variant: c2 = `elevation`} = _a2, l2 = __objRest(_a2, ["className", "component", "elevation", "square", "variant"]), u2 = __spreadProps(__spreadValues({}, n2), {component: a2, elevation: o2, square: s2, variant: c2}), d2 = br(u2);
  return w(xr, __spreadProps(__spreadValues({as: a2, ownerState: u2, className: U(d2.root, i2), ref: t2}, l2), {style: __spreadValues(__spreadValues({}, c2 === `elevation` && __spreadValues(__spreadValues({"--Paper-shadow": (r2.vars || r2).shadows[o2]}, r2.vars && {"--Paper-overlay": r2.vars.overlays?.[o2]}), !r2.vars && r2.palette.mode === `dark` && {"--Paper-overlay": `linear-gradient(${A(`#fff`, Ct(o2))}, ${A(`#fff`, Ct(o2))})`})), l2.style)}));
});
function Cr(e4) {
  try {
    return e4.matches(`:focus-visible`);
  } catch {
  }
  return false;
}
s();
function wr(e4) {
  let {focusableWhenDisabled: t2, disabled: n2, composite: r2 = false, tabIndex: i2 = 0, isNativeButton: a2} = e4, o2 = r2 && t2 !== false, s2 = r2 && t2 === false;
  return c(() => {
    let e5 = {onKeyDown(e6) {
      n2 && t2 && e6.key !== `Tab` && e6.preventDefault();
    }};
    return r2 || (e5.tabIndex = i2, !a2 && n2 && (e5.tabIndex = t2 ? i2 : -1)), (a2 && (t2 || o2) || !a2 && n2) && (e5[`aria-disabled`] = n2), a2 && (!t2 || s2) && (e5.disabled = n2), e5;
  }, [r2, n2, t2, o2, s2, a2, i2]);
}
s();
var Tr = {};
function Er(e4) {
  let {nativeButton: t2, nativeButtonProp: n2, internalNativeButton: r2 = t2, allowInferredHostMismatch: i2 = false, disabled: a2, type: o2, hasFormAction: s2 = false, tabIndex: l2 = 0, focusableWhenDisabled: u2, stopEventPropagation: d2 = false, onBeforeKeyDown: f2, onBeforeKeyUp: p2} = e4, m2 = C(null), h2 = u2 === true, g2 = wr({focusableWhenDisabled: h2, disabled: a2, isNativeButton: t2, tabIndex: l2}), _2 = b(() => {
    let e5 = m2.current;
    return e5 == null ? t2 : e5.tagName === `BUTTON` || !!(e5.tagName === `A` && e5.href);
  }, [t2]), v2 = c(() => {
    let e5 = h2 ? {} : {tabIndex: a2 ? -1 : l2};
    return t2 ? (e5.type = o2 === void 0 && !s2 ? `button` : o2, h2 || (e5.disabled = a2)) : (e5.role = `button`, !h2 && a2 && (e5[`aria-disabled`] = a2)), h2 ? __spreadValues(__spreadValues({}, e5), g2) : e5;
  }, [a2, h2, g2, s2, t2, l2, o2]);
  return {getButtonProps: b((e5 = Tr) => {
    let _a2 = e5, {onClick: t3, onKeyDown: n3, onKeyUp: r3} = _a2, i3 = __objRest(_a2, ["onClick", "onKeyDown", "onKeyUp"]), o3 = (e6) => {
      if (d2 && e6.stopPropagation(), a2) {
        e6.preventDefault();
        return;
      }
      t3?.(e6);
    }, s3 = (e6) => {
      if (h2 && g2.onKeyDown(e6), !a2 && (f2?.(e6), n3?.(e6), !(e6.target !== e6.currentTarget || _2()))) {
        if (e6.key === ` `) {
          e6.preventDefault();
          return;
        }
        e6.key === `Enter` && (e6.preventDefault(), e6.currentTarget.click());
      }
    }, c2 = (e6) => {
      a2 || (p2?.(e6), r3?.(e6), e6.target === e6.currentTarget && !_2() && e6.key === ` ` && !e6.defaultPrevented && e6.currentTarget.click());
    };
    return __spreadProps(__spreadValues(__spreadValues({}, v2), i3), {onClick: o3, onKeyDown: s3, onKeyUp: c2});
  }, [v2, a2, h2, g2, _2, f2, p2, d2]), rootRef: m2};
}
s();
var Dr = class e2 {
  static create() {
    return new e2();
  }
  static use() {
    let t2 = Jn(e2.create).current, [n2, r2] = l(false);
    return t2.shouldMount = n2, t2.setShouldMount = r2, f(t2.mountEffect, [n2]), t2;
  }
  constructor() {
    this.ref = {current: null}, this.mounted = null, this.didMount = false, this.shouldMount = false, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = kr(), this.shouldMount = true, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = true, this.mounted.resolve());
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
function Or() {
  return Dr.use();
}
function kr() {
  let e4, t2, n2 = new Promise((n3, r2) => {
    e4 = n3, t2 = r2;
  });
  return n2.resolve = e4, n2.reject = t2, n2;
}
s();
var Ar = [];
function jr(e4) {
  f(e4, Ar);
}
var Mr = class e3 {
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
function Nr() {
  let e4 = Jn(Mr.create).current;
  return jr(e4.disposeEffect), e4;
}
s();
function Pr(e4) {
  let {className: t2, classes: n2, pulsate: r2 = false, rippleX: i2, rippleY: a2, rippleSize: o2, in: s2, onExited: c2, timeout: u2} = e4, [d2, p2] = l(false), m2 = Nr(), h2 = C(false), g2 = C(c2);
  g2.current = c2;
  let _2 = c2 != null, v2 = U(t2, n2.ripple, n2.rippleVisible, r2 && n2.ripplePulsate), y2 = {width: o2, height: o2, top: -(o2 / 2) + a2, left: -(o2 / 2) + i2}, b2 = U(n2.child, d2 && n2.childLeaving, r2 && n2.childPulsate);
  return !s2 && !d2 && p2(true), f(() => {
    !s2 && _2 ? h2.current || (h2.current = true, m2.start(u2, () => {
      h2.current = false, g2.current?.();
    })) : (h2.current = false, m2.clear());
  }, [m2, _2, s2, u2]), w(`span`, {className: v2, style: y2, children: w(`span`, {className: b2})});
}
function Fr(e4) {
  return L(`MuiTouchRipple`, e4);
}
var Q = F(`MuiTouchRipple`, [`root`, `ripple`, `rippleVisible`, `ripplePulsate`, `child`, `childLeaving`, `childPulsate`]);
s();
var Ir = 550, Lr = {}, Rr = [], zr = () => {
};
function Br(e4, t2) {
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
function Vr({event: e4, element: t2, center: n2}) {
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
var Hr = r`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Ur = r`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Wr = r`
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
function Gr(e4) {
  if (e4.motion.reducedMotion === `always`)
    return null;
  let t2 = i`
    &.${Q.rippleVisible} {
      animation-name: ${Hr};
      animation-duration: ${Ir}ms;
      animation-timing-function: ${e4.transitions.easing.easeInOut};
    }

    &.${Q.ripplePulsate} {
      animation-duration: ${e4.transitions.duration.shorter}ms;
    }

    & .${Q.childLeaving} {
      animation-name: ${Ur};
      animation-duration: ${Ir}ms;
      animation-timing-function: ${e4.transitions.easing.easeInOut};
    }

    & .${Q.childPulsate} {
      animation-name: ${Wr};
      animation-duration: 2500ms;
      animation-timing-function: ${e4.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;
  return e4.motion.reducedMotion === `system` ? i`
      @media (prefers-reduced-motion: no-preference) {
        ${t2}
      }
    ` : t2;
}
var Kr = q(`span`, {name: `MuiTouchRipple`, slot: `Root`})({overflow: `hidden`, pointerEvents: `none`, position: `absolute`, zIndex: 0, top: 0, right: 0, bottom: 0, left: 0, borderRadius: `inherit`}), qr = q(Pr, {name: `MuiTouchRipple`, slot: `Ripple`})`
  opacity: 0;
  position: absolute;

  &.${Q.rippleVisible} {
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
  & .${Q.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Q.childLeaving} {
    opacity: 0;
  }

  & .${Q.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme: e4}) => Gr(e4)}
`, Jr = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiTouchRipple`}), r2 = fr(Yt().motion.reducedMotion, false), _a2 = n2, {center: i2 = false, classes: a2 = Lr, className: o2} = _a2, s2 = __objRest(_a2, ["center", "classes", "className"]), [c2, u2] = l({items: Rr, order: Rr}), d2 = c2.items, m2 = C(0), h2 = C(null), g2 = C(false);
  jr(() => (g2.current = true, () => {
    g2.current = false;
  })), f(() => {
    h2.current && (h2.current = (h2.current(), null));
  }, [d2]);
  let _2 = C(false), v2 = Nr(), y2 = C(null), b2 = C(null), x2 = Gn((e5) => {
    g2.current && u2((t3) => {
      let n3 = t3.items.filter((t4) => t4.key !== e5);
      return {items: n3, order: Br(t3.order.filter((t4) => t4 !== e5), n3.filter((e6) => !e6.exiting).map((e6) => e6.key))};
    });
  }), S2 = Gn((e5) => {
    let {pulsate: t3, rippleX: n3, rippleY: r3, rippleSize: i3, cb: a3} = e5, o3 = m2.current;
    m2.current += 1, u2((e6) => {
      let a4 = [...e6.items, {key: o3, pulsate: t3, rippleX: n3, rippleY: r3, rippleSize: i3, exiting: false}];
      return {items: a4, order: Br(e6.order, a4.filter((e7) => !e7.exiting).map((e7) => e7.key))};
    }), h2.current = a3;
  }), T2 = Gn((e5 = Lr, t3 = Lr, n3 = zr) => {
    let {pulsate: r3 = false, center: a3 = i2 || t3.pulsate, fakeElement: o3 = false} = t3;
    if (e5?.type === `mousedown` && _2.current) {
      _2.current = false;
      return;
    }
    e5?.type === `touchstart` && (_2.current = true);
    let {rippleX: s3, rippleY: c3, rippleSize: l2} = Vr({event: e5, element: o3 ? null : b2.current, center: a3});
    e5?.touches ? y2.current === null && (y2.current = () => {
      S2({pulsate: r3, rippleX: s3, rippleY: c3, rippleSize: l2, cb: n3});
    }, v2.start(80, () => {
      y2.current && (y2.current = (y2.current(), null));
    })) : S2({pulsate: r3, rippleX: s3, rippleY: c3, rippleSize: l2, cb: n3});
  }), E2 = Gn(() => {
    T2(Lr, {pulsate: true});
  }), D2 = Gn((e5, t3) => {
    if (v2.clear(), e5?.type === `touchend` && y2.current) {
      y2.current(), y2.current = null, v2.start(0, () => {
        D2(e5, t3);
      });
      return;
    }
    y2.current = null, u2((e6) => {
      let t4 = e6.items.findIndex((e7) => !e7.exiting);
      if (t4 === -1)
        return e6;
      let n3 = e6.items.slice();
      return n3[t4] = __spreadProps(__spreadValues({}, n3[t4]), {exiting: true}), {items: n3, order: Br(e6.order, n3.filter((e7) => !e7.exiting).map((e7) => e7.key))};
    }), h2.current = t3;
  });
  p(t2, () => ({pulsate: E2, start: T2, stop: D2}), [E2, T2, D2]);
  let O2 = new Map(d2.map((e5) => [e5.key, e5])), k2 = c2.order.map((e5) => O2.get(e5)).filter(Boolean);
  return w(Kr, __spreadProps(__spreadValues({className: U(Q.root, a2.root, o2), ref: b2}, s2), {children: k2.map((e5) => w(qr, {classes: {ripple: U(a2.ripple, Q.ripple), rippleVisible: U(a2.rippleVisible, Q.rippleVisible), ripplePulsate: U(a2.ripplePulsate, Q.ripplePulsate), child: U(a2.child, Q.child), childLeaving: U(a2.childLeaving, Q.childLeaving), childPulsate: U(a2.childPulsate, Q.childPulsate)}, timeout: r2.shouldReduceMotion ? 0 : Ir, pulsate: e5.pulsate, rippleX: e5.rippleX, rippleY: e5.rippleY, rippleSize: e5.rippleSize, in: !e5.exiting, onExited: () => x2(e5.key)}, e5.key))}));
});
function Yr(e4) {
  return L(`MuiButtonBase`, e4);
}
var Xr = F(`MuiButtonBase`, [`root`, `disabled`, `focusVisible`]);
s();
var Zr = (e4) => {
  let {disabled: t2, focusVisible: n2, focusVisibleClassName: r2, suppressFocusVisible: i2, classes: a2} = e4, o2 = H({root: [`root`, t2 && `disabled`, n2 && !i2 && `focusVisible`]}, Yr, a2);
  return n2 && !i2 && r2 && (o2.root += ` ${r2}`), o2;
}, Qr = q(`button`, {name: `MuiButtonBase`, slot: `Root`})(J(({theme: e4}) => ({display: `inline-flex`, alignItems: `center`, justifyContent: `center`, position: `relative`, boxSizing: `border-box`, WebkitTapHighlightColor: `transparent`, backgroundColor: `transparent`, outline: 0, border: 0, margin: 0, borderRadius: 0, padding: 0, cursor: `pointer`, userSelect: `none`, verticalAlign: `middle`, MozAppearance: `none`, WebkitAppearance: `none`, textDecoration: `none`, color: `inherit`, "&::-moz-focus-inner": {borderStyle: `none`}, [`&.${Xr.disabled}`]: {pointerEvents: `none`, cursor: `default`}, "@media print": {colorAdjust: `exact`}, variants: [{props: {internalDisabledThemeFocusVisible: false}, style: e4.focusVisible && __spreadProps(__spreadValues({}, We), {[`&.${Xr.focusVisible}`]: e4.focusVisible})}]}))), $r = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiButtonBase`}), _a2 = n2, {action: r2, centerRipple: i2 = false, children: a2, className: o2, component: s2 = `button`, disabled: c2 = false, disableRipple: u2 = false, disableTouchRipple: d2 = false, focusRipple: m2 = false, focusVisibleClassName: h2, focusableWhenDisabled: g2, suppressFocusVisible: _2 = false, internalNativeButton: v2, internalDisabledThemeFocusVisible: y2 = false, LinkComponent: b2 = `a`, nativeButton: x2, onBlur: S2, onClick: C2, onContextMenu: E2, onDragLeave: D2, onFocus: O2, onFocusVisible: k2, onKeyDown: A2, onKeyUp: j2, onMouseDown: M2, onMouseLeave: N2, onMouseUp: P2, onTouchEnd: F2, onTouchMove: I2, onTouchStart: L2, tabIndex: R2 = 0, TouchRippleProps: ee2, touchRippleRef: te2, type: ne2} = _a2, re2 = __objRest(_a2, ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "focusableWhenDisabled", "suppressFocusVisible", "internalNativeButton", "internalDisabledThemeFocusVisible", "LinkComponent", "nativeButton", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"]), z2 = !!(re2.href || re2.to), ie2 = !!re2.formAction, ae2 = s2;
  ae2 === `button` && z2 && (ae2 = b2);
  let B2 = typeof ae2 == `string` ? ae2 === `button` : v2 ?? false, oe2 = x2 ?? B2, V2 = Or(), se2 = Qt(V2.ref, te2), [ce2, H2] = l(false);
  (c2 || _2) && ce2 && H2(false);
  let le2 = Gn((e5) => {
    m2 && !e5.repeat && ce2 && e5.key === ` ` && V2.stop(e5, () => {
      V2.start(e5);
    });
  }), ue2 = Gn((e5) => {
    m2 && e5.key === ` ` && ce2 && !e5.defaultPrevented && V2.stop(e5, () => {
      V2.pulsate(e5);
    });
  }), {getButtonProps: de2, rootRef: fe2} = Er({nativeButton: oe2, nativeButtonProp: x2, internalNativeButton: B2, allowInferredHostMismatch: z2 || typeof ae2 == `string`, disabled: c2, type: ne2, hasFormAction: ie2, tabIndex: R2, onBeforeKeyDown: le2, onBeforeKeyUp: ue2}), _b = de2({onClick: C2, onKeyDown: A2, onKeyUp: j2}), {onClick: pe2, onKeyDown: me2, onKeyUp: he2} = _b, ge2 = __objRest(_b, ["onClick", "onKeyDown", "onKeyUp"]);
  p(r2, () => ({focusVisible: () => {
    H2(true), fe2.current.focus();
  }}), [fe2]);
  let _e2 = V2.shouldMount && !u2 && !c2;
  f(() => {
    ce2 && m2 && !u2 && V2.pulsate();
  }, [u2, m2, ce2, V2]);
  let ve2 = ei(V2, `start`, M2, d2), ye2 = ei(V2, `stop`, E2, d2), be2 = ei(V2, `stop`, D2, d2), xe2 = ei(V2, `stop`, P2, d2), Se2 = ei(V2, `stop`, (e5) => {
    ce2 && e5.preventDefault(), N2 && N2(e5);
  }, d2), Ce2 = ei(V2, `start`, L2, d2), we2 = ei(V2, `stop`, F2, d2), Te2 = ei(V2, `stop`, I2, d2), Ee2 = ei(V2, `stop`, (e5) => {
    Cr(e5.target) || H2(false), S2 && S2(e5);
  }, false), De2 = Gn((e5) => {
    fe2.current || (fe2.current = e5.currentTarget), !_2 && Cr(e5.target) && (H2(true), k2 && k2(e5)), O2 && O2(e5);
  }), Oe2 = {};
  z2 && (Oe2.tabIndex = c2 ? -1 : R2, c2 && (Oe2[`aria-disabled`] = c2), Oe2.type = ne2);
  let ke2 = Qt(t2, fe2), Ae2 = __spreadProps(__spreadValues({}, n2), {centerRipple: i2, component: s2, disabled: c2, disableRipple: u2, disableTouchRipple: d2, focusRipple: m2, suppressFocusVisible: _2, tabIndex: R2, focusVisible: ce2, internalDisabledThemeFocusVisible: y2}), je2 = Zr(Ae2);
  return T(Qr, __spreadProps(__spreadValues(__spreadValues({as: ae2, className: U(je2.root, o2), ownerState: Ae2, onBlur: Ee2, onClick: pe2, onContextMenu: ye2, onFocus: De2, onKeyDown: me2, onKeyUp: he2, onMouseDown: ve2, onMouseLeave: Se2, onMouseUp: xe2, onDragLeave: be2, onTouchEnd: we2, onTouchMove: Te2, onTouchStart: Ce2, ref: ke2}, z2 ? Oe2 : ge2), re2), {children: [a2, _e2 ? w(Jr, __spreadValues({ref: se2, center: i2}, ee2)) : null]}));
});
function ei(e4, t2, n2, r2 = false) {
  return Gn((i2) => (n2 && n2(i2), r2 || e4[t2](i2), true));
}
function ti(e4) {
  return typeof e4.main == `string`;
}
function ni(e4, t2 = []) {
  if (!ti(e4))
    return false;
  for (let n2 of t2)
    if (!e4.hasOwnProperty(n2) || typeof e4[n2] != `string`)
      return false;
  return true;
}
function ri(e4 = []) {
  return ([, t2]) => t2 && ni(t2, e4);
}
function ii(e4) {
  return L(`MuiCircularProgress`, e4);
}
var ai = F(`MuiCircularProgress`, [`root`, `determinate`, `indeterminate`, `colorPrimary`, `colorSecondary`, `svg`, `track`, `circle`, `circleDisableShrink`]);
s();
var oi = 44, si = r`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, ci = r`
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
`, li = typeof si == `string` ? null : i`
        animation: ${si} 1.4s linear infinite;
      `, ui = typeof ci == `string` ? null : i`
        animation: ${ci} 1.4s ease-in-out infinite;
      `, di = (e4) => {
  let {classes: t2, variant: n2, color: r2, disableShrink: i2} = e4, a2 = {root: [`root`, n2, `color${X(r2)}`], svg: [`svg`], track: [`track`], circle: [`circle`, i2 && `circleDisableShrink`]};
  return H(a2, ii, t2);
}, fi = q(`span`, {name: `MuiCircularProgress`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[n2.variant], t2[`color${X(n2.color)}`]];
}})(J(({theme: e4}) => {
  let t2 = Sn(e4, {animation: `none`});
  return {display: `inline-block`, variants: [{props: {variant: `determinate`}, style: __spreadValues({}, Cn(e4, `transform`))}, {props: {variant: `indeterminate`}, style: li || {animation: `${si} 1.4s linear infinite`}}, ...t2 ? [{props: {variant: `indeterminate`}, style: t2}] : [], ...Object.entries(e4.palette).filter(ri()).map(([t3]) => ({props: {color: t3}, style: {color: (e4.vars || e4).palette[t3].main}}))]};
})), pi = q(`svg`, {name: `MuiCircularProgress`, slot: `Svg`})({display: `block`}), mi = q(`circle`, {name: `MuiCircularProgress`, slot: `Circle`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.circle, n2.disableShrink && t2.circleDisableShrink];
}})(J(({theme: e4}) => {
  let t2 = Sn(e4, {animation: `none`});
  return {stroke: `currentColor`, variants: [{props: {variant: `determinate`}, style: __spreadValues({}, Cn(e4, `stroke-dashoffset`))}, {props: {variant: `indeterminate`}, style: {strokeDasharray: `80px, 200px`, strokeDashoffset: 0}}, {props: ({ownerState: e5}) => e5.variant === `indeterminate` && !e5.disableShrink, style: ui || {animation: `${ci} 1.4s ease-in-out infinite`}}, ...t2 ? [{props: ({ownerState: e5}) => e5.variant === `indeterminate` && !e5.disableShrink, style: t2}] : []]};
})), hi = q(`circle`, {name: `MuiCircularProgress`, slot: `Track`})(J(({theme: e4}) => ({stroke: `currentColor`, opacity: (e4.vars || e4).palette.action.activatedOpacity}))), gi = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiCircularProgress`}), _a2 = n2, {className: r2, color: i2 = `primary`, disableShrink: a2 = false, enableTrackSlot: o2 = false, min: s2, max: c2, size: l2 = 40, style: u2, thickness: d2 = 3.6, value: f2 = n2.min ?? 0, variant: p2 = `indeterminate`} = _a2, m2 = __objRest(_a2, ["className", "color", "disableShrink", "enableTrackSlot", "min", "max", "size", "style", "thickness", "value", "variant"]), h2 = s2 ?? 0, g2 = c2 ?? 100, _2 = __spreadProps(__spreadValues({}, n2), {color: i2, disableShrink: a2, size: l2, thickness: d2, value: f2, variant: p2, enableTrackSlot: o2}), v2 = di(_2), y2 = {}, b2 = {}, x2 = {};
  if (p2 === `determinate`) {
    let e5 = 2 * Math.PI * ((oi - d2) / 2), t3 = g2 - h2;
    y2.strokeDasharray = e5.toFixed(3), y2.strokeDashoffset = t3 > 0 ? `${((g2 - f2) / t3 * e5).toFixed(3)}px` : `${e5.toFixed(3)}px`, b2.transform = `rotate(-90deg)`, x2[`aria-valuenow`] = f2, x2[`aria-valuemin`] = h2, x2[`aria-valuemax`] = g2;
  }
  return w(fi, __spreadProps(__spreadValues(__spreadValues({className: U(v2.root, r2), style: __spreadValues(__spreadValues({width: l2, height: l2}, b2), u2), ownerState: _2, ref: t2, role: `progressbar`}, x2), m2), {children: T(pi, {className: v2.svg, ownerState: _2, viewBox: `${oi / 2} ${oi / 2} ${oi} ${oi}`, children: [o2 ? w(hi, {className: v2.track, ownerState: _2, cx: oi, cy: oi, r: (oi - d2) / 2, fill: `none`, strokeWidth: d2, "aria-hidden": `true`}) : null, w(mi, {className: v2.circle, style: y2, ownerState: _2, cx: oi, cy: oi, r: (oi - d2) / 2, fill: `none`, strokeWidth: d2})]})}));
});
function _i(e4) {
  return L(`MuiIconButton`, e4);
}
var vi = F(`MuiIconButton`, [`root`, `disabled`, `colorInherit`, `colorPrimary`, `colorSecondary`, `colorError`, `colorInfo`, `colorSuccess`, `colorWarning`, `edgeStart`, `edgeEnd`, `sizeSmall`, `sizeMedium`, `sizeLarge`, `loading`, `loadingIndicator`, `loadingWrapper`]);
s();
var yi = (e4) => {
  let {classes: t2, disabled: n2, color: r2, edge: i2, size: a2, loading: o2} = e4, s2 = {root: [`root`, o2 && `loading`, n2 && `disabled`, r2 !== "default" && `color${X(r2)}`, i2 && `edge${X(i2)}`, `size${X(a2)}`], loadingIndicator: [`loadingIndicator`], loadingWrapper: [`loadingWrapper`]};
  return H(s2, _i, t2);
}, bi = q($r, {name: `MuiIconButton`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.loading && t2.loading, n2.color !== "default" && t2[`color${X(n2.color)}`], n2.edge && t2[`edge${X(n2.edge)}`], t2[`size${X(n2.size)}`]];
}})(J(({theme: e4}) => __spreadProps(__spreadValues({textAlign: `center`, flex: `0 0 auto`, fontSize: e4.typography.pxToRem(24), padding: 8, borderRadius: `50%`, color: (e4.vars || e4).palette.action.active}, Cn(e4, `background-color`, {duration: e4.transitions.duration.shortest})), {variants: [{props: (e5) => !e5.disableRipple, style: {"--IconButton-hoverBg": e4.alpha((e4.vars || e4).palette.action.active, (e4.vars || e4).palette.action.hoverOpacity), "&:hover": {backgroundColor: `var(--IconButton-hoverBg)`, "@media (hover: none)": {backgroundColor: `transparent`}}}}, {props: {edge: `start`}, style: {marginLeft: -12}}, {props: {edge: `start`, size: `small`}, style: {marginLeft: -3}}, {props: {edge: `end`}, style: {marginRight: -12}}, {props: {edge: `end`, size: `small`}, style: {marginRight: -3}}]})), J(({theme: e4}) => ({variants: [{props: {color: `inherit`}, style: {color: `inherit`}}, ...Object.entries(e4.palette).filter(ri()).map(([t2]) => ({props: {color: t2}, style: {color: (e4.vars || e4).palette[t2].main, "--IconButton-hoverBg": e4.alpha((e4.vars || e4).palette[t2].main, (e4.vars || e4).palette.action.hoverOpacity)}})), {props: {size: `small`}, style: {padding: 5, fontSize: e4.typography.pxToRem(18)}}, {props: {size: `large`}, style: {padding: 12, fontSize: e4.typography.pxToRem(28)}}], [`&.${vi.disabled}`]: {backgroundColor: `transparent`, color: (e4.vars || e4).palette.action.disabled}, [`&.${vi.loading}`]: {color: `transparent`}}))), xi = q(`span`, {name: `MuiIconButton`, slot: `LoadingIndicator`})(({theme: e4}) => ({display: `none`, position: `absolute`, visibility: `visible`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`, color: (e4.vars || e4).palette.action.disabled, variants: [{props: {loading: true}, style: {display: `flex`}}]})), Si = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiIconButton`}), _a2 = n2, {edge: r2 = false, children: i2, className: a2, color: o2 = `default`, disabled: s2 = false, disableFocusRipple: c2 = false, size: l2 = `medium`, id: u2, loading: d2 = null, loadingIndicator: f2} = _a2, p2 = __objRest(_a2, ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size", "id", "loading", "loadingIndicator"]), m2 = Un(u2), h2 = f2 ?? w(gi, {"aria-labelledby": m2, color: `inherit`, size: 16}), g2 = __spreadProps(__spreadValues({}, n2), {edge: r2, color: o2, disabled: s2, disableFocusRipple: c2, loading: d2, loadingIndicator: h2, size: l2}), _2 = yi(g2);
  return T(bi, __spreadProps(__spreadValues({id: d2 ? m2 : u2, className: U(_2.root, a2), centerRipple: true, internalNativeButton: true, focusRipple: !c2, disabled: s2 || d2, ref: t2}, p2), {ownerState: g2, children: [typeof d2 == `boolean` && w(`span`, {className: _2.loadingWrapper, style: {display: `contents`}, children: w(xi, {className: _2.loadingIndicator, ownerState: g2, children: d2 && h2})}), i2]}));
});
function Ci(e4) {
  return L(`MuiTypography`, e4);
}
var wi = F(`MuiTypography`, [`root`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `subtitle1`, `subtitle2`, `body1`, `body2`, `inherit`, `button`, `caption`, `overline`, `alignLeft`, `alignRight`, `alignCenter`, `alignJustify`, `noWrap`, `gutterBottom`]);
s();
var Ti = (e4) => {
  let {align: t2, gutterBottom: n2, noWrap: r2, variant: i2, classes: a2} = e4, o2 = {root: [`root`, i2, e4.align !== `inherit` && `align${X(t2)}`, n2 && `gutterBottom`, r2 && `noWrap`]};
  return H(o2, Ci, a2);
}, Ei = q(`span`, {name: `MuiTypography`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.variant && t2[n2.variant], n2.align !== `inherit` && t2[`align${X(n2.align)}`], n2.noWrap && t2.noWrap, n2.gutterBottom && t2.gutterBottom];
}})(J(({theme: e4}) => ({margin: 0, variants: [{props: {variant: `inherit`}, style: {font: `inherit`, lineHeight: `inherit`, letterSpacing: `inherit`}}, ...Object.entries(e4.typography).filter(([e5, t2]) => e5 !== `inherit` && t2 && typeof t2 == `object`).map(([e5, t2]) => ({props: {variant: e5}, style: t2})), ...Object.entries(e4.palette).filter(ri()).map(([t2]) => ({props: {color: t2}, style: {color: (e4.vars || e4).palette[t2].main}})), ...Object.entries(e4.palette?.text || {}).filter(([, e5]) => typeof e5 == `string`).map(([t2]) => ({props: {color: `text${X(t2)}`}, style: {color: (e4.vars || e4).palette.text[t2]}})), {props: ({ownerState: e5}) => e5.align !== `inherit`, style: {textAlign: `var(--Typography-textAlign)`}}, {props: ({ownerState: e5}) => e5.noWrap, style: {overflow: `hidden`, textOverflow: `ellipsis`, whiteSpace: `nowrap`}}, {props: ({ownerState: e5}) => e5.gutterBottom, style: {marginBottom: `0.35em`}}]}))), Di = {h1: `h1`, h2: `h2`, h3: `h3`, h4: `h4`, h5: `h5`, h6: `h6`, subtitle1: `h6`, subtitle2: `h6`, body1: `p`, body2: `p`, inherit: `p`}, Oi = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiTypography`}), _a2 = n2, {color: r2, align: i2 = `inherit`, className: a2, component: o2, gutterBottom: s2 = false, noWrap: c2 = false, variant: l2 = `body1`, variantMapping: u2 = Di} = _a2, d2 = __objRest(_a2, ["color", "align", "className", "component", "gutterBottom", "noWrap", "variant", "variantMapping"]), f2 = __spreadProps(__spreadValues({}, n2), {align: i2, color: r2, className: a2, component: o2, gutterBottom: s2, noWrap: c2, variant: l2, variantMapping: u2}), p2 = o2 || u2[l2] || Di[l2] || `span`, m2 = Ti(f2);
  return w(Ei, __spreadProps(__spreadValues({as: p2, ref: t2, className: U(m2.root, a2)}, d2), {ownerState: f2, style: __spreadValues(__spreadValues({}, i2 !== `inherit` && {"--Typography-textAlign": i2}), d2.style)}));
});
function ki(e4, t2) {
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
var Ai = `bottom`, ji = `right`, Mi = `left`, Ni = `auto`, Pi = [`top`, Ai, ji, Mi], Fi = `start`, Ii = `clippingParents`, Li = `viewport`, Ri = `popper`, zi = `reference`, Bi = Pi.reduce(function(e4, t2) {
  return e4.concat([t2 + `-` + Fi, t2 + `-end`]);
}, []), Vi = [].concat(Pi, [Ni]).reduce(function(e4, t2) {
  return e4.concat([t2, t2 + `-` + Fi, t2 + `-end`]);
}, []), Hi = [`beforeRead`, `read`, `afterRead`, `beforeMain`, `main`, `afterMain`, `beforeWrite`, `write`, `afterWrite`];
function Ui(e4) {
  return e4 ? (e4.nodeName || ``).toLowerCase() : null;
}
function Wi(e4) {
  if (e4 == null)
    return window;
  if (e4.toString() !== `[object Window]`) {
    var t2 = e4.ownerDocument;
    return t2 && t2.defaultView || window;
  }
  return e4;
}
function Gi(e4) {
  return e4 instanceof Wi(e4).Element || e4 instanceof Element;
}
function Ki(e4) {
  return e4 instanceof Wi(e4).HTMLElement || e4 instanceof HTMLElement;
}
function qi(e4) {
  return typeof ShadowRoot > `u` ? false : e4 instanceof Wi(e4).ShadowRoot || e4 instanceof ShadowRoot;
}
function Ji(e4) {
  var t2 = e4.state;
  Object.keys(t2.elements).forEach(function(e5) {
    var n2 = t2.styles[e5] || {}, r2 = t2.attributes[e5] || {}, i2 = t2.elements[e5];
    Ki(i2) && Ui(i2) && (Object.assign(i2.style, n2), Object.keys(r2).forEach(function(e6) {
      var t3 = r2[e6];
      t3 === false ? i2.removeAttribute(e6) : i2.setAttribute(e6, t3 === true ? `` : t3);
    }));
  });
}
function Yi(e4) {
  var t2 = e4.state, n2 = {popper: {position: t2.options.strategy, left: `0`, top: `0`, margin: `0`}, arrow: {position: `absolute`}, reference: {}};
  return Object.assign(t2.elements.popper.style, n2.popper), t2.styles = n2, t2.elements.arrow && Object.assign(t2.elements.arrow.style, n2.arrow), function() {
    Object.keys(t2.elements).forEach(function(e5) {
      var r2 = t2.elements[e5], i2 = t2.attributes[e5] || {}, a2 = Object.keys(t2.styles.hasOwnProperty(e5) ? t2.styles[e5] : n2[e5]).reduce(function(e6, t3) {
        return e6[t3] = ``, e6;
      }, {});
      Ki(r2) && Ui(r2) && (Object.assign(r2.style, a2), Object.keys(i2).forEach(function(e6) {
        r2.removeAttribute(e6);
      }));
    });
  };
}
var Xi = {name: `applyStyles`, enabled: true, phase: `write`, fn: Ji, effect: Yi, requires: [`computeStyles`]};
function Zi(e4) {
  return e4.split(`-`)[0];
}
var Qi = Math.max, $i = Math.min, ea = Math.round;
function ta() {
  var e4 = navigator.userAgentData;
  return e4 != null && e4.brands && Array.isArray(e4.brands) ? e4.brands.map(function(e5) {
    return e5.brand + `/` + e5.version;
  }).join(` `) : navigator.userAgent;
}
function na() {
  return !/^((?!chrome|android).)*safari/i.test(ta());
}
function ra(e4, t2, n2) {
  t2 === void 0 && (t2 = false), n2 === void 0 && (n2 = false);
  var r2 = e4.getBoundingClientRect(), i2 = 1, a2 = 1;
  t2 && Ki(e4) && (i2 = e4.offsetWidth > 0 && ea(r2.width) / e4.offsetWidth || 1, a2 = e4.offsetHeight > 0 && ea(r2.height) / e4.offsetHeight || 1);
  var o2 = (Gi(e4) ? Wi(e4) : window).visualViewport, s2 = !na() && n2, c2 = (r2.left + (s2 && o2 ? o2.offsetLeft : 0)) / i2, l2 = (r2.top + (s2 && o2 ? o2.offsetTop : 0)) / a2, u2 = r2.width / i2, d2 = r2.height / a2;
  return {width: u2, height: d2, top: l2, right: c2 + u2, bottom: l2 + d2, left: c2, x: c2, y: l2};
}
function ia(e4) {
  var t2 = ra(e4), n2 = e4.offsetWidth, r2 = e4.offsetHeight;
  return Math.abs(t2.width - n2) <= 1 && (n2 = t2.width), Math.abs(t2.height - r2) <= 1 && (r2 = t2.height), {x: e4.offsetLeft, y: e4.offsetTop, width: n2, height: r2};
}
function aa(e4, t2) {
  var n2 = t2.getRootNode && t2.getRootNode();
  if (e4.contains(t2))
    return true;
  if (n2 && qi(n2)) {
    var r2 = t2;
    do {
      if (r2 && e4.isSameNode(r2))
        return true;
      r2 = r2.parentNode || r2.host;
    } while (r2);
  }
  return false;
}
function oa(e4) {
  return Wi(e4).getComputedStyle(e4);
}
function sa(e4) {
  return [`table`, `td`, `th`].indexOf(Ui(e4)) >= 0;
}
function ca(e4) {
  return ((Gi(e4) ? e4.ownerDocument : e4.document) || window.document).documentElement;
}
function la(e4) {
  return Ui(e4) === `html` ? e4 : e4.assignedSlot || e4.parentNode || (qi(e4) ? e4.host : null) || ca(e4);
}
function ua(e4) {
  return !Ki(e4) || oa(e4).position === `fixed` ? null : e4.offsetParent;
}
function da(e4) {
  var t2 = /firefox/i.test(ta());
  if (/Trident/i.test(ta()) && Ki(e4) && oa(e4).position === `fixed`)
    return null;
  var n2 = la(e4);
  for (qi(n2) && (n2 = n2.host); Ki(n2) && [`html`, `body`].indexOf(Ui(n2)) < 0; ) {
    var r2 = oa(n2);
    if (r2.transform !== `none` || r2.perspective !== `none` || r2.contain === `paint` || [`transform`, `perspective`].indexOf(r2.willChange) !== -1 || t2 && r2.willChange === `filter` || t2 && r2.filter && r2.filter !== `none`)
      return n2;
    n2 = n2.parentNode;
  }
  return null;
}
function fa(e4) {
  for (var t2 = Wi(e4), n2 = ua(e4); n2 && sa(n2) && oa(n2).position === `static`; )
    n2 = ua(n2);
  return n2 && (Ui(n2) === `html` || Ui(n2) === `body` && oa(n2).position === `static`) ? t2 : n2 || da(e4) || t2;
}
function pa(e4) {
  return [`top`, `bottom`].indexOf(e4) >= 0 ? `x` : `y`;
}
function ma(e4, t2, n2) {
  return Qi(e4, $i(t2, n2));
}
function ha(e4, t2, n2) {
  var r2 = ma(e4, t2, n2);
  return r2 > n2 ? n2 : r2;
}
function ga() {
  return {top: 0, right: 0, bottom: 0, left: 0};
}
function _a(e4) {
  return Object.assign({}, ga(), e4);
}
function va(e4, t2) {
  return t2.reduce(function(t3, n2) {
    return t3[n2] = e4, t3;
  }, {});
}
var ya = function(e4, t2) {
  return e4 = typeof e4 == `function` ? e4(Object.assign({}, t2.rects, {placement: t2.placement})) : e4, _a(typeof e4 == `number` ? va(e4, Pi) : e4);
};
function ba(e4) {
  var t2, n2 = e4.state, r2 = e4.name, i2 = e4.options, a2 = n2.elements.arrow, o2 = n2.modifiersData.popperOffsets, s2 = Zi(n2.placement), c2 = pa(s2), l2 = [`left`, `right`].indexOf(s2) >= 0 ? `height` : `width`;
  if (a2 && o2) {
    var u2 = ya(i2.padding, n2), d2 = ia(a2), f2 = c2 === `y` ? `top` : Mi, p2 = c2 === `y` ? Ai : ji, m2 = n2.rects.reference[l2] + n2.rects.reference[c2] - o2[c2] - n2.rects.popper[l2], h2 = o2[c2] - n2.rects.reference[c2], g2 = fa(a2), _2 = g2 ? c2 === `y` ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, v2 = m2 / 2 - h2 / 2, y2 = u2[f2], b2 = _2 - d2[l2] - u2[p2], x2 = _2 / 2 - d2[l2] / 2 + v2, S2 = ma(y2, x2, b2), C2 = c2;
    n2.modifiersData[r2] = (t2 = {}, t2[C2] = S2, t2.centerOffset = S2 - x2, t2);
  }
}
function xa(e4) {
  var t2 = e4.state, n2 = e4.options.element, r2 = n2 === void 0 ? `[data-popper-arrow]` : n2;
  r2 != null && (typeof r2 == `string` && (r2 = t2.elements.popper.querySelector(r2), !r2) || aa(t2.elements.popper, r2) && (t2.elements.arrow = r2));
}
var Sa = {name: `arrow`, enabled: true, phase: `main`, fn: ba, effect: xa, requires: [`popperOffsets`], requiresIfExists: [`preventOverflow`]};
function Ca(e4) {
  return e4.split(`-`)[1];
}
var wa = {top: `auto`, right: `auto`, bottom: `auto`, left: `auto`};
function Ta(e4, t2) {
  var n2 = e4.x, r2 = e4.y, i2 = t2.devicePixelRatio || 1;
  return {x: ea(n2 * i2) / i2 || 0, y: ea(r2 * i2) / i2 || 0};
}
function Ea(e4) {
  var t2, n2 = e4.popper, r2 = e4.popperRect, i2 = e4.placement, a2 = e4.variation, o2 = e4.offsets, s2 = e4.position, c2 = e4.gpuAcceleration, l2 = e4.adaptive, u2 = e4.roundOffsets, d2 = e4.isFixed, f2 = o2.x, p2 = f2 === void 0 ? 0 : f2, m2 = o2.y, h2 = m2 === void 0 ? 0 : m2, g2 = typeof u2 == `function` ? u2({x: p2, y: h2}) : {x: p2, y: h2};
  p2 = g2.x, h2 = g2.y;
  var _2 = o2.hasOwnProperty(`x`), v2 = o2.hasOwnProperty(`y`), y2 = Mi, b2 = `top`, x2 = window;
  if (l2) {
    var S2 = fa(n2), C2 = `clientHeight`, w2 = `clientWidth`;
    if (S2 === Wi(n2) && (S2 = ca(n2), oa(S2).position !== `static` && s2 === `absolute` && (C2 = `scrollHeight`, w2 = `scrollWidth`)), S2 = S2, i2 === `top` || (i2 === `left` || i2 === `right`) && a2 === `end`) {
      b2 = Ai;
      var T2 = d2 && S2 === x2 && x2.visualViewport ? x2.visualViewport.height : S2[C2];
      h2 -= T2 - r2.height, h2 *= c2 ? 1 : -1;
    }
    if (i2 === `left` || (i2 === `top` || i2 === `bottom`) && a2 === `end`) {
      y2 = ji;
      var E2 = d2 && S2 === x2 && x2.visualViewport ? x2.visualViewport.width : S2[w2];
      p2 -= E2 - r2.width, p2 *= c2 ? 1 : -1;
    }
  }
  var D2 = Object.assign({position: s2}, l2 && wa), O2 = u2 === true ? Ta({x: p2, y: h2}, Wi(n2)) : {x: p2, y: h2};
  if (p2 = O2.x, h2 = O2.y, c2) {
    var k2;
    return Object.assign({}, D2, (k2 = {}, k2[b2] = v2 ? `0` : ``, k2[y2] = _2 ? `0` : ``, k2.transform = (x2.devicePixelRatio || 1) <= 1 ? `translate(` + p2 + `px, ` + h2 + `px)` : `translate3d(` + p2 + `px, ` + h2 + `px, 0)`, k2));
  }
  return Object.assign({}, D2, (t2 = {}, t2[b2] = v2 ? h2 + `px` : ``, t2[y2] = _2 ? p2 + `px` : ``, t2.transform = ``, t2));
}
function Da(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = n2.gpuAcceleration, i2 = r2 === void 0 || r2, a2 = n2.adaptive, o2 = a2 === void 0 || a2, s2 = n2.roundOffsets, c2 = s2 === void 0 || s2, l2 = {placement: Zi(t2.placement), variation: Ca(t2.placement), popper: t2.elements.popper, popperRect: t2.rects.popper, gpuAcceleration: i2, isFixed: t2.options.strategy === `fixed`};
  t2.modifiersData.popperOffsets != null && (t2.styles.popper = Object.assign({}, t2.styles.popper, Ea(Object.assign({}, l2, {offsets: t2.modifiersData.popperOffsets, position: t2.options.strategy, adaptive: o2, roundOffsets: c2})))), t2.modifiersData.arrow != null && (t2.styles.arrow = Object.assign({}, t2.styles.arrow, Ea(Object.assign({}, l2, {offsets: t2.modifiersData.arrow, position: `absolute`, adaptive: false, roundOffsets: c2})))), t2.attributes.popper = Object.assign({}, t2.attributes.popper, {"data-popper-placement": t2.placement});
}
var Oa = {name: `computeStyles`, enabled: true, phase: `beforeWrite`, fn: Da, data: {}}, ka = {passive: true};
function Aa(e4) {
  var t2 = e4.state, n2 = e4.instance, r2 = e4.options, i2 = r2.scroll, a2 = i2 === void 0 || i2, o2 = r2.resize, s2 = o2 === void 0 || o2, c2 = Wi(t2.elements.popper), l2 = [].concat(t2.scrollParents.reference, t2.scrollParents.popper);
  return a2 && l2.forEach(function(e5) {
    e5.addEventListener(`scroll`, n2.update, ka);
  }), s2 && c2.addEventListener(`resize`, n2.update, ka), function() {
    a2 && l2.forEach(function(e5) {
      e5.removeEventListener(`scroll`, n2.update, ka);
    }), s2 && c2.removeEventListener(`resize`, n2.update, ka);
  };
}
var ja = {name: `eventListeners`, enabled: true, phase: `write`, fn: function() {
}, effect: Aa, data: {}}, Ma = {left: `right`, right: `left`, bottom: `top`, top: `bottom`};
function Na(e4) {
  return e4.replace(/left|right|bottom|top/g, function(e5) {
    return Ma[e5];
  });
}
var Pa = {start: `end`, end: `start`};
function Fa(e4) {
  return e4.replace(/start|end/g, function(e5) {
    return Pa[e5];
  });
}
function Ia(e4) {
  var t2 = Wi(e4);
  return {scrollLeft: t2.pageXOffset, scrollTop: t2.pageYOffset};
}
function La(e4) {
  return ra(ca(e4)).left + Ia(e4).scrollLeft;
}
function Ra(e4, t2) {
  var n2 = Wi(e4), r2 = ca(e4), i2 = n2.visualViewport, a2 = r2.clientWidth, o2 = r2.clientHeight, s2 = 0, c2 = 0;
  if (i2) {
    a2 = i2.width, o2 = i2.height;
    var l2 = na();
    (l2 || !l2 && t2 === `fixed`) && (s2 = i2.offsetLeft, c2 = i2.offsetTop);
  }
  return {width: a2, height: o2, x: s2 + La(e4), y: c2};
}
function za(e4) {
  var t2 = ca(e4), n2 = Ia(e4), r2 = e4.ownerDocument?.body, i2 = Qi(t2.scrollWidth, t2.clientWidth, r2 ? r2.scrollWidth : 0, r2 ? r2.clientWidth : 0), a2 = Qi(t2.scrollHeight, t2.clientHeight, r2 ? r2.scrollHeight : 0, r2 ? r2.clientHeight : 0), o2 = -n2.scrollLeft + La(e4), s2 = -n2.scrollTop;
  return oa(r2 || t2).direction === `rtl` && (o2 += Qi(t2.clientWidth, r2 ? r2.clientWidth : 0) - i2), {width: i2, height: a2, x: o2, y: s2};
}
function Ba(e4) {
  var t2 = oa(e4), n2 = t2.overflow, r2 = t2.overflowX, i2 = t2.overflowY;
  return /auto|scroll|overlay|hidden/.test(n2 + i2 + r2);
}
function Va(e4) {
  return [`html`, `body`, `#document`].indexOf(Ui(e4)) >= 0 ? e4.ownerDocument.body : Ki(e4) && Ba(e4) ? e4 : Va(la(e4));
}
function Ha(e4, t2) {
  t2 === void 0 && (t2 = []);
  var n2 = Va(e4), r2 = n2 === e4.ownerDocument?.body, i2 = Wi(n2), a2 = r2 ? [i2].concat(i2.visualViewport || [], Ba(n2) ? n2 : []) : n2, o2 = t2.concat(a2);
  return r2 ? o2 : o2.concat(Ha(la(a2)));
}
function Ua(e4) {
  return Object.assign({}, e4, {left: e4.x, top: e4.y, right: e4.x + e4.width, bottom: e4.y + e4.height});
}
function Wa(e4, t2) {
  var n2 = ra(e4, false, t2 === `fixed`);
  return n2.top += e4.clientTop, n2.left += e4.clientLeft, n2.bottom = n2.top + e4.clientHeight, n2.right = n2.left + e4.clientWidth, n2.width = e4.clientWidth, n2.height = e4.clientHeight, n2.x = n2.left, n2.y = n2.top, n2;
}
function Ga(e4, t2, n2) {
  return t2 === `viewport` ? Ua(Ra(e4, n2)) : Gi(t2) ? Wa(t2, n2) : Ua(za(ca(e4)));
}
function Ka(e4) {
  var t2 = Ha(la(e4)), n2 = [`absolute`, `fixed`].indexOf(oa(e4).position) >= 0 && Ki(e4) ? fa(e4) : e4;
  return Gi(n2) ? t2.filter(function(e5) {
    return Gi(e5) && aa(e5, n2) && Ui(e5) !== `body`;
  }) : [];
}
function qa(e4, t2, n2, r2) {
  var i2 = t2 === `clippingParents` ? Ka(e4) : [].concat(t2), a2 = [].concat(i2, [n2]), o2 = a2[0], s2 = a2.reduce(function(t3, n3) {
    var i3 = Ga(e4, n3, r2);
    return t3.top = Qi(i3.top, t3.top), t3.right = $i(i3.right, t3.right), t3.bottom = $i(i3.bottom, t3.bottom), t3.left = Qi(i3.left, t3.left), t3;
  }, Ga(e4, o2, r2));
  return s2.width = s2.right - s2.left, s2.height = s2.bottom - s2.top, s2.x = s2.left, s2.y = s2.top, s2;
}
function Ja(e4) {
  var t2 = e4.reference, n2 = e4.element, r2 = e4.placement, i2 = r2 ? Zi(r2) : null, a2 = r2 ? Ca(r2) : null, o2 = t2.x + t2.width / 2 - n2.width / 2, s2 = t2.y + t2.height / 2 - n2.height / 2, c2;
  switch (i2) {
    case `top`:
      c2 = {x: o2, y: t2.y - n2.height};
      break;
    case Ai:
      c2 = {x: o2, y: t2.y + t2.height};
      break;
    case ji:
      c2 = {x: t2.x + t2.width, y: s2};
      break;
    case Mi:
      c2 = {x: t2.x - n2.width, y: s2};
      break;
    default:
      c2 = {x: t2.x, y: t2.y};
  }
  var l2 = i2 ? pa(i2) : null;
  if (l2 != null) {
    var u2 = l2 === `y` ? `height` : `width`;
    switch (a2) {
      case Fi:
        c2[l2] = c2[l2] - (t2[u2] / 2 - n2[u2] / 2);
        break;
      case `end`:
        c2[l2] = c2[l2] + (t2[u2] / 2 - n2[u2] / 2);
    }
  }
  return c2;
}
function Ya(e4, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, i2 = r2 === void 0 ? e4.placement : r2, a2 = n2.strategy, o2 = a2 === void 0 ? e4.strategy : a2, s2 = n2.boundary, c2 = s2 === void 0 ? Ii : s2, l2 = n2.rootBoundary, u2 = l2 === void 0 ? Li : l2, d2 = n2.elementContext, f2 = d2 === void 0 ? Ri : d2, p2 = n2.altBoundary, m2 = p2 !== void 0 && p2, h2 = n2.padding, g2 = h2 === void 0 ? 0 : h2, _2 = _a(typeof g2 == `number` ? va(g2, Pi) : g2), v2 = f2 === `popper` ? zi : Ri, y2 = e4.rects.popper, b2 = e4.elements[m2 ? v2 : f2], x2 = qa(Gi(b2) ? b2 : b2.contextElement || ca(e4.elements.popper), c2, u2, o2), S2 = ra(e4.elements.reference), C2 = Ja({reference: S2, element: y2, strategy: `absolute`, placement: i2}), w2 = Ua(Object.assign({}, y2, C2)), T2 = f2 === `popper` ? w2 : S2, E2 = {top: x2.top - T2.top + _2.top, bottom: T2.bottom - x2.bottom + _2.bottom, left: x2.left - T2.left + _2.left, right: T2.right - x2.right + _2.right}, D2 = e4.modifiersData.offset;
  if (f2 === `popper` && D2) {
    var O2 = D2[i2];
    Object.keys(E2).forEach(function(e5) {
      var t3 = [`right`, `bottom`].indexOf(e5) >= 0 ? 1 : -1, n3 = [`top`, `bottom`].indexOf(e5) >= 0 ? `y` : `x`;
      E2[e5] += O2[n3] * t3;
    });
  }
  return E2;
}
function Xa(e4, t2) {
  t2 === void 0 && (t2 = {});
  var n2 = t2, r2 = n2.placement, i2 = n2.boundary, a2 = n2.rootBoundary, o2 = n2.padding, s2 = n2.flipVariations, c2 = n2.allowedAutoPlacements, l2 = c2 === void 0 ? Vi : c2, u2 = Ca(r2), d2 = u2 ? s2 ? Bi : Bi.filter(function(e5) {
    return Ca(e5) === u2;
  }) : Pi, f2 = d2.filter(function(e5) {
    return l2.indexOf(e5) >= 0;
  });
  f2.length === 0 && (f2 = d2);
  var p2 = f2.reduce(function(t3, n3) {
    return t3[n3] = Ya(e4, {placement: n3, boundary: i2, rootBoundary: a2, padding: o2})[Zi(n3)], t3;
  }, {});
  return Object.keys(p2).sort(function(e5, t3) {
    return p2[e5] - p2[t3];
  });
}
function Za(e4) {
  if (Zi(e4) === `auto`)
    return [];
  var t2 = Na(e4);
  return [Fa(e4), t2, Fa(t2)];
}
function Qa(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = e4.name;
  if (!t2.modifiersData[r2]._skip) {
    for (var i2 = n2.mainAxis, a2 = i2 === void 0 || i2, o2 = n2.altAxis, s2 = o2 === void 0 || o2, c2 = n2.fallbackPlacements, l2 = n2.padding, u2 = n2.boundary, d2 = n2.rootBoundary, f2 = n2.altBoundary, p2 = n2.flipVariations, m2 = p2 === void 0 || p2, h2 = n2.allowedAutoPlacements, g2 = t2.options.placement, _2 = Zi(g2) === g2, v2 = c2 || (_2 || !m2 ? [Na(g2)] : Za(g2)), y2 = [g2].concat(v2).reduce(function(e5, n3) {
      return e5.concat(Zi(n3) === `auto` ? Xa(t2, {placement: n3, boundary: u2, rootBoundary: d2, padding: l2, flipVariations: m2, allowedAutoPlacements: h2}) : n3);
    }, []), b2 = t2.rects.reference, x2 = t2.rects.popper, S2 = new Map(), C2 = true, w2 = y2[0], T2 = 0; T2 < y2.length; T2++) {
      var E2 = y2[T2], D2 = Zi(E2), O2 = Ca(E2) === Fi, k2 = [`top`, Ai].indexOf(D2) >= 0, A2 = k2 ? `width` : `height`, j2 = Ya(t2, {placement: E2, boundary: u2, rootBoundary: d2, altBoundary: f2, padding: l2}), M2 = k2 ? O2 ? ji : Mi : O2 ? Ai : `top`;
      b2[A2] > x2[A2] && (M2 = Na(M2));
      var N2 = Na(M2), P2 = [];
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
var $a = {name: `flip`, enabled: true, phase: `main`, fn: Qa, requiresIfExists: [`offset`], data: {_skip: false}};
function eo(e4, t2, n2) {
  return n2 === void 0 && (n2 = {x: 0, y: 0}), {top: e4.top - t2.height - n2.y, right: e4.right - t2.width + n2.x, bottom: e4.bottom - t2.height + n2.y, left: e4.left - t2.width - n2.x};
}
function to(e4) {
  return [`top`, ji, Ai, Mi].some(function(t2) {
    return e4[t2] >= 0;
  });
}
function no(e4) {
  var t2 = e4.state, n2 = e4.name, r2 = t2.rects.reference, i2 = t2.rects.popper, a2 = t2.modifiersData.preventOverflow, o2 = Ya(t2, {elementContext: `reference`}), s2 = Ya(t2, {altBoundary: true}), c2 = eo(o2, r2), l2 = eo(s2, i2, a2), u2 = to(c2), d2 = to(l2);
  t2.modifiersData[n2] = {referenceClippingOffsets: c2, popperEscapeOffsets: l2, isReferenceHidden: u2, hasPopperEscaped: d2}, t2.attributes.popper = Object.assign({}, t2.attributes.popper, {"data-popper-reference-hidden": u2, "data-popper-escaped": d2});
}
var ro = {name: `hide`, enabled: true, phase: `main`, requiresIfExists: [`preventOverflow`], fn: no};
function io(e4, t2, n2) {
  var r2 = Zi(e4), i2 = [`left`, `top`].indexOf(r2) >= 0 ? -1 : 1, a2 = typeof n2 == `function` ? n2(Object.assign({}, t2, {placement: e4})) : n2, o2 = a2[0], s2 = a2[1];
  return o2 || (o2 = 0), s2 = (s2 || 0) * i2, [`left`, `right`].indexOf(r2) >= 0 ? {x: s2, y: o2} : {x: o2, y: s2};
}
function ao(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = e4.name, i2 = n2.offset, a2 = i2 === void 0 ? [0, 0] : i2, o2 = Vi.reduce(function(e5, n3) {
    return e5[n3] = io(n3, t2.rects, a2), e5;
  }, {}), s2 = o2[t2.placement], c2 = s2.x, l2 = s2.y;
  t2.modifiersData.popperOffsets != null && (t2.modifiersData.popperOffsets.x += c2, t2.modifiersData.popperOffsets.y += l2), t2.modifiersData[r2] = o2;
}
var oo = {name: `offset`, enabled: true, phase: `main`, requires: [`popperOffsets`], fn: ao};
function so(e4) {
  var t2 = e4.state, n2 = e4.name;
  t2.modifiersData[n2] = Ja({reference: t2.rects.reference, element: t2.rects.popper, strategy: `absolute`, placement: t2.placement});
}
var co = {name: `popperOffsets`, enabled: true, phase: `read`, fn: so, data: {}};
function lo(e4) {
  return e4 === `x` ? `y` : `x`;
}
function uo(e4) {
  var t2 = e4.state, n2 = e4.options, r2 = e4.name, i2 = n2.mainAxis, a2 = i2 === void 0 || i2, o2 = n2.altAxis, s2 = o2 !== void 0 && o2, c2 = n2.boundary, l2 = n2.rootBoundary, u2 = n2.altBoundary, d2 = n2.padding, f2 = n2.tether, p2 = f2 === void 0 || f2, m2 = n2.tetherOffset, h2 = m2 === void 0 ? 0 : m2, g2 = Ya(t2, {boundary: c2, rootBoundary: l2, padding: d2, altBoundary: u2}), _2 = Zi(t2.placement), v2 = Ca(t2.placement), y2 = !v2, b2 = pa(_2), x2 = lo(b2), S2 = t2.modifiersData.popperOffsets, C2 = t2.rects.reference, w2 = t2.rects.popper, T2 = typeof h2 == `function` ? h2(Object.assign({}, t2.rects, {placement: t2.placement})) : h2, E2 = typeof T2 == `number` ? {mainAxis: T2, altAxis: T2} : Object.assign({mainAxis: 0, altAxis: 0}, T2), D2 = t2.modifiersData.offset ? t2.modifiersData.offset[t2.placement] : null, O2 = {x: 0, y: 0};
  if (S2) {
    if (a2) {
      var k2 = b2 === `y` ? `top` : Mi, A2 = b2 === `y` ? Ai : ji, j2 = b2 === `y` ? `height` : `width`, M2 = S2[b2], N2 = M2 + g2[k2], P2 = M2 - g2[A2], F2 = p2 ? -w2[j2] / 2 : 0, I2 = v2 === `start` ? C2[j2] : w2[j2], L2 = v2 === `start` ? -w2[j2] : -C2[j2], R2 = t2.elements.arrow, ee2 = p2 && R2 ? ia(R2) : {width: 0, height: 0}, te2 = t2.modifiersData[`arrow#persistent`] ? t2.modifiersData[`arrow#persistent`].padding : ga(), ne2 = te2[k2], re2 = te2[A2], z2 = ma(0, C2[j2], ee2[j2]), ie2 = y2 ? C2[j2] / 2 - F2 - z2 - ne2 - E2.mainAxis : I2 - z2 - ne2 - E2.mainAxis, ae2 = y2 ? -C2[j2] / 2 + F2 + z2 + re2 + E2.mainAxis : L2 + z2 + re2 + E2.mainAxis, B2 = t2.elements.arrow && fa(t2.elements.arrow), oe2 = B2 ? b2 === `y` ? B2.clientTop || 0 : B2.clientLeft || 0 : 0, V2 = D2?.[b2] ?? 0, se2 = M2 + ie2 - V2 - oe2, ce2 = M2 + ae2 - V2, H2 = ma(p2 ? $i(N2, se2) : N2, M2, p2 ? Qi(P2, ce2) : P2);
      S2[b2] = H2, O2[b2] = H2 - M2;
    }
    if (s2) {
      var le2 = b2 === `x` ? `top` : Mi, ue2 = b2 === `x` ? Ai : ji, de2 = S2[x2], fe2 = x2 === `y` ? `height` : `width`, pe2 = de2 + g2[le2], me2 = de2 - g2[ue2], he2 = [`top`, Mi].indexOf(_2) !== -1, U2 = D2?.[x2] ?? 0, ge2 = he2 ? pe2 : de2 - C2[fe2] - w2[fe2] - U2 + E2.altAxis, _e2 = he2 ? de2 + C2[fe2] + w2[fe2] - U2 - E2.altAxis : me2, ve2 = p2 && he2 ? ha(ge2, de2, _e2) : ma(p2 ? ge2 : pe2, de2, p2 ? _e2 : me2);
      S2[x2] = ve2, O2[x2] = ve2 - de2;
    }
    t2.modifiersData[r2] = O2;
  }
}
var fo = {name: `preventOverflow`, enabled: true, phase: `main`, fn: uo, requiresIfExists: [`offset`]};
function po(e4) {
  return {scrollLeft: e4.scrollLeft, scrollTop: e4.scrollTop};
}
function mo(e4) {
  return e4 === Wi(e4) || !Ki(e4) ? Ia(e4) : po(e4);
}
function ho(e4) {
  var t2 = e4.getBoundingClientRect(), n2 = ea(t2.width) / e4.offsetWidth || 1, r2 = ea(t2.height) / e4.offsetHeight || 1;
  return n2 !== 1 || r2 !== 1;
}
function go(e4, t2, n2) {
  n2 === void 0 && (n2 = false);
  var r2 = Ki(t2), i2 = Ki(t2) && ho(t2), a2 = ca(t2), o2 = ra(e4, i2, n2), s2 = {scrollLeft: 0, scrollTop: 0}, c2 = {x: 0, y: 0};
  return (r2 || !r2 && !n2) && ((Ui(t2) !== `body` || Ba(a2)) && (s2 = mo(t2)), Ki(t2) ? (c2 = ra(t2, true), c2.x += t2.clientLeft, c2.y += t2.clientTop) : a2 && (c2.x = La(a2))), {x: o2.left + s2.scrollLeft - c2.x, y: o2.top + s2.scrollTop - c2.y, width: o2.width, height: o2.height};
}
function _o(e4) {
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
function vo(e4) {
  var t2 = _o(e4);
  return Hi.reduce(function(e5, n2) {
    return e5.concat(t2.filter(function(e6) {
      return e6.phase === n2;
    }));
  }, []);
}
function yo(e4) {
  var t2;
  return function() {
    return t2 || (t2 = new Promise(function(n2) {
      Promise.resolve().then(function() {
        t2 = void 0, n2(e4());
      });
    })), t2;
  };
}
function bo(e4) {
  var t2 = e4.reduce(function(e5, t3) {
    var n2 = e5[t3.name];
    return e5[t3.name] = n2 ? Object.assign({}, n2, t3, {options: Object.assign({}, n2.options, t3.options), data: Object.assign({}, n2.data, t3.data)}) : t3, e5;
  }, {});
  return Object.keys(t2).map(function(e5) {
    return t2[e5];
  });
}
var xo = {placement: `bottom`, modifiers: [], strategy: `absolute`};
function So() {
  return ![...arguments].some(function(e4) {
    return !(e4 && typeof e4.getBoundingClientRect == `function`);
  });
}
function Co(e4) {
  e4 === void 0 && (e4 = {});
  var t2 = e4, n2 = t2.defaultModifiers, r2 = n2 === void 0 ? [] : n2, i2 = t2.defaultOptions, a2 = i2 === void 0 ? xo : i2;
  return function(e5, t3, n3) {
    n3 === void 0 && (n3 = a2);
    var i3 = {placement: `bottom`, orderedModifiers: [], options: Object.assign({}, xo, a2), modifiersData: {}, elements: {reference: e5, popper: t3}, attributes: {}, styles: {}}, o2 = [], s2 = false, c2 = {state: i3, setOptions: function(n4) {
      var o3 = typeof n4 == `function` ? n4(i3.options) : n4;
      u2(), i3.options = Object.assign({}, a2, i3.options, o3), i3.scrollParents = {reference: Gi(e5) ? Ha(e5) : e5.contextElement ? Ha(e5.contextElement) : [], popper: Ha(t3)};
      var s3 = vo(bo([].concat(r2, i3.options.modifiers)));
      return i3.orderedModifiers = s3.filter(function(e6) {
        return e6.enabled;
      }), l2(), c2.update();
    }, forceUpdate: function() {
      if (!s2) {
        var e6 = i3.elements, t4 = e6.reference, n4 = e6.popper;
        if (So(t4, n4)) {
          i3.rects = {reference: go(t4, fa(n4), i3.options.strategy === `fixed`), popper: ia(n4)}, i3.reset = false, i3.placement = i3.options.placement, i3.orderedModifiers.forEach(function(e7) {
            return i3.modifiersData[e7.name] = Object.assign({}, e7.data);
          });
          for (var r3 = 0; r3 < i3.orderedModifiers.length; r3++) {
            if (i3.reset === true) {
              i3.reset = false, r3 = -1;
              continue;
            }
            var a3 = i3.orderedModifiers[r3], o3 = a3.fn, l3 = a3.options, u3 = l3 === void 0 ? {} : l3, d2 = a3.name;
            typeof o3 == `function` && (i3 = o3({state: i3, options: u3, name: d2, instance: c2}) || i3);
          }
        }
      }
    }, update: yo(function() {
      return new Promise(function(e6) {
        c2.forceUpdate(), e6(i3);
      });
    }), destroy: function() {
      u2(), s2 = true;
    }};
    if (!So(e5, t3))
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
var wo = Co({defaultModifiers: [ja, co, Oa, Xi, oo, $a, fo, Sa, ro]});
function To(e4) {
  let _a2 = e4, {elementType: t2, externalSlotProps: n2, ownerState: r2, skipResolvingSlotProps: i2 = false} = _a2, a2 = __objRest(_a2, ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"]), o2 = i2 ? {} : mr(n2, r2), {props: s2, internalRef: c2} = _r(__spreadProps(__spreadValues({}, a2), {externalSlotProps: o2})), l2 = Ht(c2, o2?.ref, e4.additionalProps?.ref);
  return pr(t2, __spreadProps(__spreadValues({}, s2), {ref: l2}), r2);
}
s();
function Eo(e4) {
  return parseInt(S, 10) >= 19 ? e4?.props?.ref || null : e4?.ref || null;
}
s();
function Do(e4) {
  return typeof e4 == `function` ? e4() : e4;
}
var Oo = h(function(e4, t2) {
  let {children: n2, container: r2, disablePortal: i2 = false} = e4, [a2, o2] = l(null), s2 = Ht(v(n2) ? Eo(n2) : null, t2);
  return D(() => {
    i2 || o2(Do(r2) || document.body);
  }, [r2, i2]), D(() => {
    if (a2 && !i2)
      return Hn(t2, a2), () => {
        Hn(t2, null);
      };
  }, [t2, a2, i2]), i2 ? v(n2) ? m(n2, {ref: s2}) : n2 : a2 && E(n2, a2);
});
function ko(e4) {
  return L(`MuiPopper`, e4);
}
var Ao = F(`MuiPopper`, [`root`]);
s();
function jo(e4, t2) {
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
function Mo(e4) {
  return typeof e4 == `function` ? e4() : e4;
}
function No(e4) {
  return e4.nodeType !== void 0;
}
var Po = (e4) => {
  let {classes: t2} = e4;
  return H({root: [`root`]}, ko, t2);
}, Fo = {}, Io = h(function(e4, t2) {
  let _a2 = e4, {anchorEl: n2, children: r2, direction: i2, disablePortal: a2, modifiers: o2, open: s2, placement: u2, popperOptions: d2, popperRef: m2, slotProps: h2 = {}, slots: g2 = {}, TransitionProps: _2, ownerState: v2} = _a2, y2 = __objRest(_a2, ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"]), b2 = C(null), x2 = Ht(b2, t2), S2 = C(null), T2 = Ht(S2, m2), E2 = C(T2);
  D(() => {
    E2.current = T2;
  }, [T2]), p(m2, () => S2.current, []);
  let O2 = jo(u2, i2), [k2, A2] = l(O2), j2 = c(() => Mo(n2), [n2]);
  f(() => {
    S2.current && S2.current.forceUpdate();
  }), D(() => {
    if (!j2 || !s2)
      return;
    let e5 = (e6) => {
      A2(e6.placement);
    }, t3 = [{name: `preventOverflow`, options: {altBoundary: a2}}, {name: `flip`, options: {altBoundary: a2}}, {name: `onUpdate`, enabled: true, phase: `afterWrite`, fn: ({state: t4}) => {
      e5(t4);
    }}];
    o2 != null && (t3 = t3.concat(o2)), d2 && d2.modifiers != null && (t3 = t3.concat(d2.modifiers));
    let n3 = wo(j2, b2.current, __spreadProps(__spreadValues({placement: O2}, d2), {modifiers: t3}));
    E2.current(n3);
    let r3 = b2.current;
    return () => {
      if (r3) {
        let {style: e6} = r3, t4 = e6.position, i3 = e6.top, a3 = e6.left, o3 = e6.transform;
        n3.destroy(), e6.position = t4, e6.top = i3, e6.left = a3, e6.transform = o3;
      } else
        n3.destroy();
      E2.current(null);
    };
  }, [j2, a2, o2, s2, d2, O2]);
  let M2 = {placement: k2};
  _2 !== null && (M2.TransitionProps = _2);
  let N2 = Po(e4), P2 = g2.root ?? `div`, F2 = To({elementType: P2, externalSlotProps: h2.root, externalForwardedProps: y2, additionalProps: {role: `tooltip`, ref: x2}, ownerState: e4, className: N2.root});
  return w(P2, __spreadProps(__spreadValues({}, F2), {children: typeof r2 == `function` ? r2(M2) : r2}));
}), Lo = h(function(e4, t2) {
  let _a2 = e4, {anchorEl: n2, children: r2, container: i2, direction: a2 = `ltr`, disablePortal: o2 = false, keepMounted: s2 = false, modifiers: c2, open: u2, placement: d2 = `bottom`, popperOptions: f2 = Fo, popperRef: p2, style: m2, transition: h2 = false, slotProps: g2 = {}, slots: _2 = {}} = _a2, v2 = __objRest(_a2, ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"]), [y2, b2] = l(true), x2 = () => {
    b2(false);
  }, S2 = () => {
    b2(true);
  };
  if (!s2 && !u2 && (!h2 || y2))
    return null;
  let C2;
  if (i2)
    C2 = i2;
  else if (n2) {
    let e5 = Mo(n2);
    C2 = e5 && No(e5) ? K(e5).body : K(null).body;
  }
  let T2 = !u2 && s2 && (!h2 || y2) ? `none` : void 0, E2 = h2 ? {in: u2, onEnter: x2, onExited: S2} : void 0;
  return w(Oo, {disablePortal: o2, container: C2, children: w(Io, __spreadProps(__spreadValues({anchorEl: n2, direction: a2, disablePortal: o2, modifiers: c2, ref: t2, open: h2 ? !y2 : u2, placement: d2, popperOptions: f2, popperRef: p2, slotProps: g2, slots: _2}, v2), {style: __spreadValues({position: `fixed`, top: 0, left: 0, display: T2}, m2), TransitionProps: E2, children: r2}))});
});
s();
var Ro = q(Lo, {name: `MuiPopper`, slot: `Root`})({}), zo = h(function(e4, t2) {
  let n2 = me(), _a2 = Y({props: e4, name: `MuiPopper`}), {anchorEl: r2, component: i2, container: a2, disablePortal: o2, keepMounted: s2, modifiers: c2, open: l2, placement: u2, popperOptions: d2, popperRef: f2, transition: p2, slots: m2, slotProps: h2} = _a2, g2 = __objRest(_a2, ["anchorEl", "component", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"]), _2 = __spreadValues({anchorEl: r2, container: a2, disablePortal: o2, keepMounted: s2, modifiers: c2, open: l2, placement: u2, popperOptions: d2, popperRef: f2, transition: p2}, g2);
  return w(Ro, __spreadProps(__spreadValues({as: i2, direction: n2 ? `rtl` : `ltr`, slots: m2, slotProps: h2}, _2), {ref: t2}));
}), Bo = zn(w(`path`, {d: `M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z`}), `Cancel`);
function Vo(e4) {
  return L(`MuiChip`, e4);
}
var $ = F(`MuiChip`, [`root`, `sizeSmall`, `sizeMedium`, `colorDefault`, `colorError`, `colorInfo`, `colorPrimary`, `colorSecondary`, `colorSuccess`, `colorWarning`, `disabled`, `clickable`, `deletable`, `outlined`, `filled`, `avatar`, `icon`, `label`, `deleteIcon`, `focusVisible`]);
s();
var Ho = (e4) => {
  let {classes: t2, disabled: n2, size: r2, color: i2, onDelete: a2, clickable: o2, variant: s2} = e4, c2 = {root: [`root`, s2, n2 && `disabled`, `size${X(r2)}`, `color${X(i2)}`, o2 && `clickable`, a2 && `deletable`], label: [`label`], avatar: [`avatar`], icon: [`icon`], deleteIcon: [`deleteIcon`]};
  return H(c2, Vo, t2);
}, Uo = q(`div`, {name: `MuiChip`, slot: `Root`, shouldForwardProp: (e4) => Zt(e4) && e4 !== `focusableWhenDisabled` && e4 !== `skipFocusWhenDisabled`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4, {color: r2, clickable: i2, onDelete: a2, size: o2, variant: s2} = n2;
  return [{[`& .${$.avatar}`]: t2.avatar}, {[`& .${$.icon}`]: t2.icon}, {[`& .${$.deleteIcon}`]: t2.deleteIcon}, t2.root, t2[`size${X(o2)}`], t2[`color${X(r2)}`], i2 && t2.clickable, a2 && t2.deletable, t2[s2]];
}})(J(({theme: e4}) => {
  let t2 = e4.palette.mode === `light` ? e4.palette.grey[700] : e4.palette.grey[300];
  return __spreadProps(__spreadValues({maxWidth: `100%`, fontFamily: e4.typography.fontFamily, fontSize: e4.typography.pxToRem(13), display: `inline-flex`, alignItems: `center`, justifyContent: `center`, height: 32, lineHeight: 1.5, color: (e4.vars || e4).palette.text.primary, backgroundColor: (e4.vars || e4).palette.action.selected, borderRadius: 16, whiteSpace: `nowrap`}, Cn(e4, [`background-color`, `box-shadow`])), {cursor: `unset`, outline: 0, textDecoration: `none`, border: 0, padding: 0, verticalAlign: `middle`, boxSizing: `border-box`, [`&.${$.disabled}`]: {opacity: (e4.vars || e4).palette.action.disabledOpacity, pointerEvents: `none`}, [`& .${$.avatar}`]: {marginLeft: 5, marginRight: -6, width: 24, height: 24, color: e4.vars ? e4.vars.palette.Chip.defaultAvatarColor : t2, fontSize: e4.typography.pxToRem(12)}, [`& .${$.icon}`]: {marginLeft: 5, marginRight: -6}, [`& .${$.deleteIcon}`]: {WebkitTapHighlightColor: `transparent`, color: e4.alpha((e4.vars || e4).palette.text.primary, 0.26), fontSize: 22, cursor: `pointer`, margin: `0 5px 0 -6px`, "&:hover": {color: e4.alpha((e4.vars || e4).palette.text.primary, 0.4)}}, variants: [{props: {color: `primary`}, style: {[`& .${$.avatar}`]: {color: (e4.vars || e4).palette.primary.contrastText, backgroundColor: (e4.vars || e4).palette.primary.dark}}}, {props: {color: `secondary`}, style: {[`& .${$.avatar}`]: {color: (e4.vars || e4).palette.secondary.contrastText, backgroundColor: (e4.vars || e4).palette.secondary.dark}}}, {props: {size: `small`}, style: {height: 24, [`& .${$.avatar}`]: {marginLeft: 4, marginRight: -4, width: 18, height: 18, fontSize: e4.typography.pxToRem(10)}, [`& .${$.icon}`]: {fontSize: 18, marginLeft: 4, marginRight: -4}, [`& .${$.deleteIcon}`]: {fontSize: 16, marginRight: 4, marginLeft: -4}}}, ...Object.entries(e4.palette).filter(ri([`contrastText`])).map(([t3]) => ({props: {color: t3}, style: {backgroundColor: (e4.vars || e4).palette[t3].main, color: (e4.vars || e4).palette[t3].contrastText, [`& .${$.deleteIcon}`]: {color: e4.alpha((e4.vars || e4).palette[t3].contrastText, 0.7), "&:hover, &:active": {color: (e4.vars || e4).palette[t3].contrastText}}}})), {props: (e5) => e5.iconColor === e5.color, style: {[`& .${$.icon}`]: {color: e4.vars ? e4.vars.palette.Chip.defaultIconColor : t2}}}, {props: (e5) => e5.iconColor === e5.color && e5.color !== "default", style: {[`& .${$.icon}`]: {color: `inherit`}}}, {props: {onDelete: true}, style: !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.action.selected, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.focusOpacity}`)}}}, ...Object.entries(e4.palette).filter(ri([`dark`])).map(([t3]) => ({props: {color: t3, onDelete: true}, style: !e4.focusVisible && {[`&.${$.focusVisible}`]: {background: (e4.vars || e4).palette[t3].dark}}})), {props: {clickable: true}, style: __spreadProps(__spreadValues({userSelect: `none`, WebkitTapHighlightColor: `transparent`, cursor: `pointer`, "&:hover": {backgroundColor: e4.alpha((e4.vars || e4).palette.action.selected, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.hoverOpacity}`)}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.action.selected, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.focusOpacity}`)}}), {"&:active": {boxShadow: (e4.vars || e4).shadows[1]}})}, ...Object.entries(e4.palette).filter(ri([`dark`])).map(([t3]) => ({props: {color: t3, clickable: true}, style: __spreadValues({"&:hover": {backgroundColor: (e4.vars || e4).palette[t3].dark}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: (e4.vars || e4).palette[t3].dark}})})), {props: {variant: `outlined`}, style: __spreadProps(__spreadValues({backgroundColor: `transparent`, border: e4.vars ? `1px solid ${e4.vars.palette.Chip.defaultBorder}` : `1px solid ${e4.palette.mode === `light` ? e4.palette.grey[400] : e4.palette.grey[700]}`, [`&.${$.clickable}:hover`]: {backgroundColor: (e4.vars || e4).palette.action.hover}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: (e4.vars || e4).palette.action.focus}}), {[`& .${$.avatar}`]: {marginLeft: 4}, [`& .${$.icon}`]: {marginLeft: 4}, [`& .${$.deleteIcon}`]: {marginRight: 5}})}, {props: {size: `small`, variant: `outlined`}, style: {[`& .${$.avatar}`]: {marginLeft: 2}, [`& .${$.icon}`]: {marginLeft: 2}, [`& .${$.deleteIcon}`]: {marginRight: 3}}}, ...Object.entries(e4.palette).filter(ri()).map(([t3]) => ({props: {variant: `outlined`, color: t3}, style: __spreadProps(__spreadValues({color: (e4.vars || e4).palette[t3].main, border: `1px solid ${e4.alpha((e4.vars || e4).palette[t3].main, 0.7)}`, [`&.${$.clickable}:hover`]: {backgroundColor: e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.hoverOpacity)}}, !e4.focusVisible && {[`&.${$.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.focusOpacity)}}), {[`& .${$.deleteIcon}`]: {color: e4.alpha((e4.vars || e4).palette[t3].main, 0.7), "&:hover, &:active": {color: (e4.vars || e4).palette[t3].main}}})}))]});
})), Wo = q(`span`, {name: `MuiChip`, slot: `Label`})({overflow: `hidden`, textOverflow: `ellipsis`, paddingLeft: 12, paddingRight: 12, whiteSpace: `nowrap`, variants: [{props: {variant: `outlined`}, style: {paddingLeft: 11, paddingRight: 11}}, {props: {size: `small`}, style: {paddingLeft: 8, paddingRight: 8}}, {props: {size: `small`, variant: `outlined`}, style: {paddingLeft: 7, paddingRight: 7}}]});
function Go(e4) {
  return e4.key === `Backspace` || e4.key === `Delete`;
}
var Ko = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiChip`}), _a2 = n2, {avatar: r2, className: i2, clickable: a2, color: o2 = `default`, component: s2, deleteIcon: c2, disabled: l2 = false, icon: u2, label: d2, onClick: f2, onDelete: p2, onKeyDown: h2, onKeyUp: g2, size: _2 = `medium`, variant: y2 = `filled`, tabIndex: b2, skipFocusWhenDisabled: x2 = false, slots: S2 = {}, slotProps: E2 = {}} = _a2, D2 = __objRest(_a2, ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled", "slots", "slotProps"]), _b = D2, {nativeButton: O2} = _b, k2 = __objRest(_b, ["nativeButton"]), A2 = Qt(C(null), t2), j2 = (e5) => {
    e5.stopPropagation(), p2(e5);
  }, M2 = (e5) => {
    e5.currentTarget === e5.target && Go(e5) && e5.preventDefault(), h2 && h2(e5);
  }, N2 = (e5) => {
    e5.currentTarget === e5.target && p2 && Go(e5) && p2(e5), g2 && g2(e5);
  }, P2 = a2 !== false && f2 ? true : a2, F2 = P2 || p2 ? $r : s2 || `div`, I2 = __spreadProps(__spreadValues({}, n2), {component: F2, disabled: l2, size: _2, color: o2, iconColor: v(u2) && u2.props.color || o2, onDelete: !!p2, clickable: P2, variant: y2}), L2 = Ho(I2), R2 = F2 === $r ? __spreadValues(__spreadValues({component: s2 || `div`, internalNativeButton: false, focusVisibleClassName: L2.focusVisible}, p2 && {disableRipple: true}), O2 !== void 0 && {nativeButton: O2}) : {}, ee2 = null;
  p2 && (ee2 = c2 && v(c2) ? m(c2, {className: U(c2.props.className, L2.deleteIcon), onClick: j2}) : w(Bo, {className: L2.deleteIcon, onClick: j2}));
  let te2 = null;
  r2 && v(r2) && (te2 = m(r2, {className: U(L2.avatar, r2.props.className)}));
  let ne2 = null;
  u2 && v(u2) && (ne2 = m(u2, {className: U(L2.icon, u2.props.className)}));
  let re2 = {slots: S2, slotProps: E2}, [z2, ie2] = Z(`root`, {elementType: Uo, externalForwardedProps: __spreadValues(__spreadValues({}, re2), k2), ownerState: I2, shouldForwardComponentProp: true, ref: A2, className: U(L2.root, i2), additionalProps: __spreadValues({disabled: P2 && l2 ? true : void 0, tabIndex: x2 && l2 ? -1 : b2}, R2), getSlotProps: (e5) => __spreadProps(__spreadValues({}, e5), {onClick: (t3) => {
    e5.onClick?.(t3), f2?.(t3);
  }, onKeyDown: (t3) => {
    e5.onKeyDown?.(t3), M2(t3);
  }, onKeyUp: (t3) => {
    e5.onKeyUp?.(t3), N2(t3);
  }})}), [ae2, B2] = Z(`label`, {elementType: Wo, externalForwardedProps: re2, ownerState: I2, className: L2.label});
  return T(z2, __spreadProps(__spreadValues({as: F2}, ie2), {children: [te2 || ne2, w(ae2, __spreadProps(__spreadValues({}, B2), {children: d2})), ee2]}));
});
s();
var qo = {entering: {opacity: 1}, entered: {opacity: 1}, exiting: {opacity: 0}, exited: {opacity: 0}}, Jo = {opacity: 0, visibility: `hidden`}, Yo = h(function(e4, t2) {
  let n2 = Yt(), r2 = {enter: n2.transitions.duration.enteringScreen, exit: n2.transitions.duration.leavingScreen}, _a2 = e4, {addEndListener: i2, appear: a2 = true, children: o2, disablePrefersReducedMotion: s2 = false, easing: c2, in: l2, onEnter: u2, onEntered: d2, onEntering: f2, onExit: p2, onExited: h2, onExiting: g2, style: _2, timeout: v2 = r2} = _a2, y2 = __objRest(_a2, ["addEndListener", "appear", "children", "disablePrefersReducedMotion", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout"]), b2 = fr(n2.motion.reducedMotion, s2), x2 = C(null), S2 = Qt(x2, Eo(o2), t2), T2 = yn(x2, f2), E2 = yn(x2, (e5, t3) => {
    b2.shouldReduceMotion || ln(e5);
    let r3 = xn({style: _2, timeout: v2, easing: c2}, {mode: `enter`}), i3 = b2.getTransitionTiming({duration: r3.duration, delay: r3.delay});
    e5.style.transition = n2.transitions.create(`opacity`, {duration: i3.duration, easing: r3.easing, delay: i3.delay}), u2 && u2(e5, t3);
  }), D2 = yn(x2, d2), O2 = yn(x2, g2), k2 = yn(x2, (e5) => {
    let t3 = xn({style: _2, timeout: v2, easing: c2}, {mode: `exit`}), r3 = b2.getTransitionTiming({duration: t3.duration, delay: t3.delay});
    e5.style.transition = n2.transitions.create(`opacity`, {duration: r3.duration, easing: t3.easing, delay: r3.delay}), p2 && p2(e5);
  }), A2 = yn(x2, (e5) => {
    e5.style.transition = ``, h2 && h2(e5);
  });
  return w(er, __spreadProps(__spreadValues({appear: a2, in: l2, nodeRef: x2, onEnter: E2, onEntered: D2, onEntering: T2, onExit: k2, onExited: A2, onExiting: O2, addEndListener: i2 ? (e5) => {
    i2(x2.current, e5);
  } : void 0, reduceMotion: b2.shouldReduceMotion, timeout: v2}, y2), {children: (e5, _b) => {
    var _c2 = _b, {ownerState: t3} = _c2, n3 = __objRest(_c2, ["ownerState"]);
    let r3 = bn(e5, l2, qo, Jo, _2, o2.props.style);
    return m(o2, __spreadValues({style: r3, ref: S2}, n3));
  }}));
});
function Xo(e4) {
  return L(`MuiBackdrop`, e4);
}
var Zo = F(`MuiBackdrop`, [`root`, `invisible`]);
s();
var Qo = (e4) => {
  let {classes: t2, invisible: n2} = e4;
  return H({root: [`root`, n2 && `invisible`]}, Xo, t2);
}, $o = q(`div`, {name: `MuiBackdrop`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.invisible && t2.invisible];
}})({position: `fixed`, display: `flex`, alignItems: `center`, justifyContent: `center`, right: 0, bottom: 0, top: 0, left: 0, backgroundColor: `rgba(0, 0, 0, 0.5)`, WebkitTapHighlightColor: `transparent`, variants: [{props: {invisible: true}, style: {backgroundColor: `transparent`}}]}), es = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiBackdrop`}), _a2 = n2, {children: r2, className: i2, component: a2 = `div`, invisible: o2 = false, open: s2, slotProps: c2 = {}, slots: l2 = {}, transitionDuration: u2} = _a2, d2 = __objRest(_a2, ["children", "className", "component", "invisible", "open", "slotProps", "slots", "transitionDuration"]), f2 = __spreadProps(__spreadValues({}, n2), {component: a2, invisible: o2}), p2 = Qo(f2), m2 = {component: a2, slots: l2, slotProps: c2}, [h2, g2] = Z(`root`, {elementType: $o, externalForwardedProps: m2, className: U(p2.root, i2), ownerState: f2}), [_2, v2] = Z(`transition`, {elementType: Yo, externalForwardedProps: m2, ownerState: f2});
  return w(_2, __spreadProps(__spreadValues(__spreadValues({in: s2, timeout: u2}, d2), v2), {children: w(h2, __spreadProps(__spreadValues({}, g2), {ref: t2, children: r2}))}));
});
function ts(e4) {
  return L(`MuiButton`, e4);
}
var ns = F(`MuiButton`, `root.text.outlined.contained.disableElevation.focusVisible.disabled.colorInherit.colorPrimary.colorSecondary.colorSuccess.colorError.colorInfo.colorWarning.sizeMedium.sizeSmall.sizeLarge.fullWidth.startIcon.endIcon.icon.loading.loadingWrapper.loadingIconPlaceholder.loadingIndicator.loadingPositionCenter.loadingPositionStart.loadingPositionEnd`.split(`.`));
s();
var rs = _({});
s();
var is = _(void 0);
s();
var as = (e4) => {
  let {color: t2, disableElevation: n2, fullWidth: r2, size: i2, variant: a2, loading: o2, loadingPosition: s2, classes: c2} = e4, l2 = {root: [`root`, o2 && `loading`, a2, `size${X(i2)}`, `color${X(t2)}`, n2 && `disableElevation`, r2 && `fullWidth`, o2 && `loadingPosition${X(s2)}`], startIcon: [`icon`, `startIcon`], endIcon: [`icon`, `endIcon`], loadingIndicator: [`loadingIndicator`], loadingWrapper: [`loadingWrapper`]}, u2 = H(l2, ts, c2);
  return __spreadValues(__spreadValues({}, c2), u2);
}, os = [{props: {size: `small`}, style: {"& > *:nth-of-type(1)": {fontSize: 18}}}, {props: {size: `medium`}, style: {"& > *:nth-of-type(1)": {fontSize: 20}}}, {props: {size: `large`}, style: {"& > *:nth-of-type(1)": {fontSize: 22}}}], ss = q($r, {shouldForwardProp: (e4) => Zt(e4) || e4 === `classes`, name: `MuiButton`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[n2.variant], t2[`size${X(n2.size)}`], n2.color === `inherit` && t2.colorInherit, n2.disableElevation && t2.disableElevation, n2.fullWidth && t2.fullWidth, n2.loading && t2.loading];
}})(J(({theme: e4}) => {
  let t2 = e4.palette.mode === `light` ? e4.palette.grey[300] : e4.palette.grey[800], n2 = e4.palette.mode === `light` ? e4.palette.grey.A100 : e4.palette.grey[700];
  return __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, e4.typography.button), {minWidth: 64, padding: `6px 16px`, border: 0, borderRadius: (e4.vars || e4).shape.borderRadius}), Cn(e4, [`background-color`, `box-shadow`, `border-color`, `color`], {duration: e4.transitions.duration.short})), {"&:hover": {textDecoration: `none`}, [`&.${ns.disabled}`]: {color: (e4.vars || e4).palette.action.disabled}, variants: [{props: {variant: `contained`}, style: {color: `var(--variant-containedColor)`, backgroundColor: `var(--variant-containedBg)`, boxShadow: (e4.vars || e4).shadows[2], "&:hover": {boxShadow: (e4.vars || e4).shadows[4], "@media (hover: none)": {boxShadow: (e4.vars || e4).shadows[2]}}, "&:active": {boxShadow: (e4.vars || e4).shadows[8]}, [`&.${ns.focusVisible}`]: __spreadProps(__spreadValues({}, e4.focusVisible), {boxShadow: e4.focusVisible?.boxShadow ? `${(e4.vars || e4).shadows[6]}, ${e4.focusVisible.boxShadow}` : (e4.vars || e4).shadows[6]}), [`&.${ns.disabled}`]: {color: (e4.vars || e4).palette.action.disabled, boxShadow: (e4.vars || e4).shadows[0], backgroundColor: (e4.vars || e4).palette.action.disabledBackground}}}, {props: {variant: `outlined`}, style: {padding: `5px 15px`, border: `1px solid currentColor`, borderColor: `var(--variant-outlinedBorder, currentColor)`, backgroundColor: `var(--variant-outlinedBg)`, color: `var(--variant-outlinedColor)`, [`&.${ns.disabled}`]: {border: `1px solid ${(e4.vars || e4).palette.action.disabledBackground}`}}}, {props: {variant: `text`}, style: {padding: `6px 8px`, color: `var(--variant-textColor)`, backgroundColor: `var(--variant-textBg)`}}, ...Object.entries(e4.palette).filter(ri()).map(([t3]) => ({props: {color: t3}, style: {"--variant-textColor": (e4.vars || e4).palette[t3].main, "--variant-outlinedColor": (e4.vars || e4).palette[t3].main, "--variant-outlinedBorder": e4.alpha((e4.vars || e4).palette[t3].main, 0.5), "--variant-containedColor": (e4.vars || e4).palette[t3].contrastText, "--variant-containedBg": (e4.vars || e4).palette[t3].main, "@media (hover: hover)": {"&:hover": {"--variant-containedBg": (e4.vars || e4).palette[t3].dark, "--variant-textBg": e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.hoverOpacity), "--variant-outlinedBorder": (e4.vars || e4).palette[t3].main, "--variant-outlinedBg": e4.alpha((e4.vars || e4).palette[t3].main, (e4.vars || e4).palette.action.hoverOpacity)}}}})), {props: {color: `inherit`}, style: {color: `inherit`, borderColor: `currentColor`, "--variant-containedBg": e4.vars ? e4.vars.palette.Button.inheritContainedBg : t2, "@media (hover: hover)": {"&:hover": {"--variant-containedBg": e4.vars ? e4.vars.palette.Button.inheritContainedHoverBg : n2, "--variant-textBg": e4.alpha((e4.vars || e4).palette.text.primary, (e4.vars || e4).palette.action.hoverOpacity), "--variant-outlinedBg": e4.alpha((e4.vars || e4).palette.text.primary, (e4.vars || e4).palette.action.hoverOpacity)}}}}, {props: {size: `small`, variant: `text`}, style: {padding: `4px 5px`, fontSize: e4.typography.pxToRem(13)}}, {props: {size: `large`, variant: `text`}, style: {padding: `8px 11px`, fontSize: e4.typography.pxToRem(15)}}, {props: {size: `small`, variant: `outlined`}, style: {padding: `3px 9px`, fontSize: e4.typography.pxToRem(13)}}, {props: {size: `large`, variant: `outlined`}, style: {padding: `7px 21px`, fontSize: e4.typography.pxToRem(15)}}, {props: {size: `small`, variant: `contained`}, style: {padding: `4px 10px`, fontSize: e4.typography.pxToRem(13)}}, {props: {size: `large`, variant: `contained`}, style: {padding: `8px 22px`, fontSize: e4.typography.pxToRem(15)}}, {props: {disableElevation: true}, style: {boxShadow: `none`, "&:hover": {boxShadow: `none`}, [`&.${ns.focusVisible}`]: {boxShadow: e4.focusVisible?.boxShadow ?? `none`}, "&:active": {boxShadow: `none`}, [`&.${ns.disabled}`]: {boxShadow: `none`}}}, {props: {fullWidth: true}, style: {width: `100%`}}, {props: {loadingPosition: `center`}, style: __spreadProps(__spreadValues({}, Cn(e4, [`background-color`, `box-shadow`, `border-color`], {duration: e4.transitions.duration.short})), {[`&.${ns.loading}`]: {color: `transparent`}})}]});
})), cs = q(`span`, {name: `MuiButton`, slot: `StartIcon`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.startIcon, n2.loading && t2.startIconLoadingStart];
}})(({theme: e4}) => ({display: `inherit`, alignItems: `center`, marginRight: 8, marginLeft: -4, "&::before": {content: `"\\200b"`, width: 0, overflow: `hidden`}, variants: [{props: {size: `small`}, style: {marginLeft: -2}}, {props: {loadingPosition: `start`, loading: true}, style: __spreadProps(__spreadValues({}, Cn(e4, [`opacity`], {duration: e4.transitions.duration.short})), {opacity: 0})}, {props: {loadingPosition: `start`, loading: true, fullWidth: true}, style: {marginRight: -8}}, ...os]})), ls = q(`span`, {name: `MuiButton`, slot: `EndIcon`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.endIcon, n2.loading && t2.endIconLoadingEnd];
}})(({theme: e4}) => ({display: `inherit`, marginRight: -4, marginLeft: 8, variants: [{props: {size: `small`}, style: {marginRight: -2}}, {props: {loadingPosition: `end`, loading: true}, style: __spreadProps(__spreadValues({}, Cn(e4, [`opacity`], {duration: e4.transitions.duration.short})), {opacity: 0})}, {props: {loadingPosition: `end`, loading: true, fullWidth: true}, style: {marginLeft: -8}}, ...os]})), us = q(`span`, {name: `MuiButton`, slot: `LoadingIndicator`})(({theme: e4}) => ({display: `none`, position: `absolute`, visibility: `visible`, variants: [{props: {loading: true}, style: {display: `flex`}}, {props: {loadingPosition: `start`}, style: {left: 14}}, {props: {loadingPosition: `start`, size: `small`}, style: {left: 10}}, {props: {variant: `text`, loadingPosition: `start`}, style: {left: 6}}, {props: {loadingPosition: `center`}, style: {left: `50%`, transform: `translate(-50%)`, color: (e4.vars || e4).palette.action.disabled}}, {props: {loadingPosition: `end`}, style: {right: 14}}, {props: {loadingPosition: `end`, size: `small`}, style: {right: 10}}, {props: {variant: `text`, loadingPosition: `end`}, style: {right: 6}}, {props: {loadingPosition: `start`, fullWidth: true}, style: {position: `relative`, left: -10}}, {props: {loadingPosition: `end`, fullWidth: true}, style: {position: `relative`, right: -10}}]})), ds = q(`span`, {name: `MuiButton`, slot: `LoadingIconPlaceholder`})({display: `inline-block`, width: `1em`, height: `1em`}), fs = h(function(e4, t2) {
  let n2 = d(rs), r2 = d(is), i2 = Y({props: fe(n2, e4), name: `MuiButton`}), _a2 = i2, {children: a2, color: o2 = `primary`, component: s2 = `button`, className: c2, disabled: l2 = false, disableElevation: u2 = false, disableFocusRipple: f2 = false, endIcon: p2, focusVisibleClassName: m2, fullWidth: h2 = false, id: g2, loading: _2 = null, loadingIndicator: v2, loadingPosition: y2 = `center`, size: b2 = `medium`, startIcon: x2, type: S2, variant: C2 = `text`} = _a2, E2 = __objRest(_a2, ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "id", "loading", "loadingIndicator", "loadingPosition", "size", "startIcon", "type", "variant"]), D2 = Un(g2), O2 = v2 ?? w(gi, {"aria-labelledby": D2, color: `inherit`, size: 16}), k2 = __spreadProps(__spreadValues({}, i2), {color: o2, component: s2, disabled: l2, disableElevation: u2, disableFocusRipple: f2, fullWidth: h2, loading: _2, loadingIndicator: O2, loadingPosition: y2, size: b2, type: S2, variant: C2}), A2 = as(k2), j2 = (x2 || _2 && y2 === `start`) && w(cs, {className: A2.startIcon, ownerState: k2, children: x2 || w(ds, {className: A2.loadingIconPlaceholder, ownerState: k2})}), M2 = (p2 || _2 && y2 === `end`) && w(ls, {className: A2.endIcon, ownerState: k2, children: p2 || w(ds, {className: A2.loadingIconPlaceholder, ownerState: k2})}), N2 = r2 || ``, P2 = typeof _2 == `boolean` ? w(`span`, {className: A2.loadingWrapper, style: {display: `contents`}, children: _2 && w(us, {className: A2.loadingIndicator, ownerState: k2, children: O2})}) : null, _b = A2, {root: F2} = _b, I2 = __objRest(_b, ["root"]);
  return T(ss, __spreadProps(__spreadValues({ownerState: k2, className: U(n2.className, A2.root, c2, N2), component: s2, disabled: l2 || _2, focusRipple: !f2, focusVisibleClassName: U(A2.focusVisible, m2), ref: t2, internalNativeButton: true, type: S2, id: _2 ? D2 : g2}, E2), {classes: I2, children: [j2, y2 !== `end` && P2, a2, y2 === `end` && P2, M2]}));
});
function ps(e4 = window) {
  let t2 = e4.document.documentElement.clientWidth;
  return e4.innerWidth - t2;
}
function ms(e4) {
  let t2 = K(e4);
  return e4 === t2.body || e4 === t2.documentElement ? Wt(e4).innerWidth > t2.documentElement.clientWidth : e4.scrollHeight > e4.clientHeight;
}
function hs(e4, t2) {
  t2 ? e4.setAttribute(`aria-hidden`, `true`) : e4.removeAttribute(`aria-hidden`);
}
function gs(e4) {
  return parseFloat(Wt(e4).getComputedStyle(e4).paddingRight) || 0;
}
function _s(e4) {
  let t2 = [`TEMPLATE`, `SCRIPT`, `STYLE`, `LINK`, `MAP`, `META`, `NOSCRIPT`, `PICTURE`, `COL`, `COLGROUP`, `PARAM`, `SLOT`, `SOURCE`, `TRACK`].includes(e4.tagName), n2 = e4.tagName === `INPUT` && e4.getAttribute(`type`) === `hidden`;
  return t2 || n2;
}
function vs(e4, t2, n2, r2, i2) {
  let a2 = [t2, n2, ...r2];
  [].forEach.call(e4.children, (e5) => {
    let t3 = !a2.includes(e5), n3 = !_s(e5);
    t3 && n3 && hs(e5, i2);
  });
}
function ys(e4, t2) {
  let n2 = [], r2 = e4.container;
  if (!t2.disableScrollLock) {
    let e5;
    if (r2.parentNode instanceof DocumentFragment)
      e5 = K(r2).body;
    else {
      let t3 = r2.parentElement, n3 = Wt(r2);
      e5 = t3?.nodeName === `HTML` && n3.getComputedStyle(t3).overflowY === `scroll` ? t3 : r2;
    }
    if (ms(e5)) {
      let t3 = ps(Wt(e5));
      n2.push({value: e5.style.paddingRight, property: `padding-right`, el: e5}), e5.style.paddingRight = `${gs(e5) + t3}px`;
      let i2 = K(r2).querySelectorAll(`.mui-fixed`);
      [].forEach.call(i2, (e6) => {
        n2.push({value: e6.style.paddingRight, property: `padding-right`, el: e6}), e6.style.paddingRight = `${gs(e6) + t3}px`;
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
function bs(e4) {
  let t2 = [];
  return [].forEach.call(e4.children, (e5) => {
    e5.getAttribute(`aria-hidden`) === `true` && t2.push(e5);
  }), t2;
}
var xs = class {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(e4, t2) {
    let n2 = this.modals.indexOf(e4);
    if (n2 !== -1)
      return n2;
    n2 = this.modals.length, this.modals.push(e4), e4.modalRef && hs(e4.modalRef, false);
    let r2 = bs(t2);
    vs(t2, e4.mount, e4.modalRef, r2, true);
    let i2 = this.containers.findIndex((e5) => e5.container === t2);
    return i2 === -1 ? (this.containers.push({modals: [e4], container: t2, restore: null, hiddenSiblings: r2}), n2) : (this.containers[i2].modals.push(e4), n2);
  }
  mount(e4, t2) {
    let n2 = this.containers.findIndex((t3) => t3.modals.includes(e4)), r2 = this.containers[n2];
    r2.restore || (r2.restore = ys(r2, t2));
  }
  remove(e4, t2 = true) {
    let n2 = this.modals.indexOf(e4);
    if (n2 === -1)
      return n2;
    let r2 = this.containers.findIndex((t3) => t3.modals.includes(e4)), i2 = this.containers[r2];
    if (i2.modals.splice(i2.modals.indexOf(e4), 1), this.modals.splice(n2, 1), i2.modals.length === 0)
      i2.restore && i2.restore(), e4.modalRef && hs(e4.modalRef, t2), vs(i2.container, e4.mount, e4.modalRef, i2.hiddenSiblings, false), this.containers.splice(r2, 1);
    else {
      let e5 = i2.modals[i2.modals.length - 1];
      e5.modalRef && hs(e5.modalRef, false);
    }
    return n2;
  }
  isTopModal(e4) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e4;
  }
}, Ss = ki, Cs = `data-mui-focusable`;
function ws(e4) {
  return e4 ? e4.hasAttribute(`data-mui-focusable`) ? e4 : e4.querySelector(`[${Cs}]`) : null;
}
s();
var Ts = [`input`, `select`, `textarea`, `a[href]`, `button`, `[tabindex]`, `audio[controls]`, `video[controls]`, `[contenteditable]:not([contenteditable="false"])`].join(`,`);
function Es(e4) {
  let t2 = parseInt(e4.getAttribute(`tabindex`) || ``, 10);
  return Number.isNaN(t2) ? e4.contentEditable === `true` || (e4.nodeName === `AUDIO` || e4.nodeName === `VIDEO` || e4.nodeName === `DETAILS`) && e4.getAttribute(`tabindex`) === null ? 0 : e4.tabIndex : t2;
}
function Ds(e4) {
  if (e4.tagName !== `INPUT` || e4.type !== `radio` || !e4.name)
    return false;
  let t2 = (t3) => e4.ownerDocument.querySelector(`input[type="radio"]${t3}`), n2 = t2(`[name="${e4.name}"]:checked`);
  return n2 || (n2 = t2(`[name="${e4.name}"]`)), n2 !== e4;
}
function Os(e4) {
  return !(e4.disabled || e4.tagName === `INPUT` && e4.type === `hidden` || Ds(e4));
}
function ks(e4) {
  let t2 = [], n2 = [];
  return Array.from(e4.querySelectorAll(Ts)).forEach((e5, r2) => {
    let i2 = Es(e5);
    i2 !== -1 && Os(e5) && (i2 === 0 ? t2.push(e5) : n2.push({documentOrder: r2, tabIndex: i2, node: e5}));
  }), n2.sort((e5, t3) => e5.tabIndex === t3.tabIndex ? e5.documentOrder - t3.documentOrder : e5.tabIndex - t3.tabIndex).map((e5) => e5.node).concat(t2);
}
function As() {
  return true;
}
function js(e4) {
  let {children: t2, disableAutoFocus: n2 = false, disableEnforceFocus: r2 = false, disableRestoreFocus: i2 = false, getTabbable: a2 = ks, isEnabled: o2 = As, open: s2} = e4, c2 = C(false), l2 = C(null), u2 = C(null), d2 = C(null), p2 = C(null), h2 = C(false), _2 = C(null), v2 = Ht(Eo(t2), _2), y2 = C(null);
  f(() => {
    s2 && _2.current && (h2.current = !n2);
  }, [n2, s2]), f(() => {
    if (c2.current = false, !s2 || !_2.current)
      return;
    let e5 = nn(K(_2.current)), t3 = ws(_2.current) ?? _2.current;
    return Ss(_2.current, e5) || (t3.hasAttribute(`tabIndex`) || t3.setAttribute(`tabIndex`, `-1`), h2.current && t3.focus()), () => {
      !i2 && d2.current && (c2.current = true, d2.current.focus(), d2.current = null);
    };
  }, [s2]), f(() => {
    if (!s2 || !_2.current)
      return;
    let e5 = K(_2.current), t3 = (t4) => {
      if (y2.current = t4, r2 || !o2() || t4.key !== `Tab`)
        return;
      let n4 = _2.current, i4 = nn(e5);
      if (n4 === null)
        return;
      let s3 = ws(n4);
      if (i4 === n4 || i4 === s3) {
        let e6 = a2(n4);
        if (e6.length === 0)
          return;
        t4.preventDefault(), t4.shiftKey ? e6[e6.length - 1].focus() : e6[0].focus();
        return;
      }
      if (Ss(n4, i4)) {
        let e6 = a2(n4), r3 = e6.indexOf(i4);
        if (r3 === -1 || !e6.some((e7) => Es(e7) > 0))
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
      if (!e5.hasFocus() || !o2() || c2.current) {
        c2.current = false;
        return;
      }
      if (Ss(t4, n4) || r2 && n4 !== l2.current && n4 !== u2.current)
        return;
      if (n4 !== p2.current)
        p2.current = null;
      else if (p2.current !== null)
        return;
      if (!h2.current)
        return;
      let i4 = [];
      if ((n4 === l2.current || n4 === u2.current) && (i4 = a2(_2.current)), i4.length > 0) {
        let e6 = !!(y2.current?.shiftKey && y2.current?.key === `Tab`), t5 = i4[0], n5 = i4[i4.length - 1];
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
  }, [n2, r2, i2, o2, s2, a2]);
  let b2 = (e5) => {
    d2.current === null && (d2.current = e5.relatedTarget), h2.current = true, p2.current = e5.target;
    let n3 = t2.props.onFocus;
    n3 && n3(e5);
  }, x2 = (e5) => {
    d2.current === null && (d2.current = e5.relatedTarget), h2.current = true;
  };
  return T(g, {children: [w(`div`, {tabIndex: s2 ? 0 : -1, onFocus: x2, ref: l2, "data-testid": `sentinelStart`}), m(t2, {ref: v2, onFocus: b2}), w(`div`, {tabIndex: s2 ? 0 : -1, onFocus: x2, ref: u2, "data-testid": `sentinelEnd`})]});
}
s();
function Ms(e4) {
  return typeof e4 == `function` ? e4() : e4;
}
function Ns(e4) {
  return e4 ? e4.props.hasOwnProperty(`in`) : false;
}
var Ps = () => {
}, Fs = new xs();
function Is(e4) {
  let {container: t2, disableScrollLock: n2 = false, closeAfterTransition: r2 = false, onTransitionEnter: i2, onTransitionExited: a2, children: o2, onClose: s2, open: c2, rootRef: u2} = e4, d2 = C({}), p2 = C(null), m2 = C(null), h2 = C(null), g2 = Ht(h2, u2), [_2, v2] = l(!c2), y2 = Ns(o2), x2 = true;
  (e4[`aria-hidden`] === `false` || e4[`aria-hidden`] === false) && (x2 = false);
  let S2 = () => K(p2.current), w2 = () => (d2.current.modalRef = h2.current, d2.current.mount = p2.current, d2.current), T2 = () => {
    Fs.mount(w2(), {disableScrollLock: n2}), h2.current && (h2.current.scrollTop = 0);
  }, E2 = Ut(() => {
    let e5 = Ms(t2) || S2().body;
    Fs.add(w2(), e5), h2.current && T2();
  }), D2 = () => Fs.isTopModal(w2()), O2 = Ut((e5) => {
    p2.current = e5, e5 && (m2.current = e5, c2 && D2() ? T2() : h2.current && hs(h2.current, x2));
  }), k2 = b(() => {
    Fs.remove(w2(), x2);
  }, [x2]);
  f(() => () => {
    k2();
  }, [k2]), f(() => {
    c2 ? E2() : (!y2 || !r2) && k2();
  }, [c2, k2, y2, r2, E2]);
  let A2 = (e5) => (t3) => {
    e5.onKeyDown?.(t3), t3.key === `Escape` && t3.which !== 229 && D2() && (t3.stopPropagation(), s2 && s2(t3, `escapeKeyDown`));
  }, j2 = (e5) => (t3) => {
    e5.onClick?.(t3), t3.target === t3.currentTarget && s2 && s2(t3, `backdropClick`);
  };
  return {getRootProps: (t3 = {}) => {
    let n3 = hr(e4);
    delete n3.onTransitionEnter, delete n3.onTransitionExited;
    let r3 = __spreadValues(__spreadValues({}, n3), t3);
    return __spreadProps(__spreadValues({role: `presentation`}, r3), {onKeyDown: A2(r3), ref: g2});
  }, getBackdropProps: (e5 = {}) => {
    let t3 = e5;
    return __spreadProps(__spreadValues({"aria-hidden": true}, t3), {onClick: j2(t3), open: c2});
  }, getTransitionProps: () => ({onEnter: Nn(() => {
    v2(false), i2 && i2();
  }, o2?.props.onEnter ?? Ps), onExited: Nn(() => {
    v2(true), a2 && a2(), r2 && k2();
  }, o2?.props.onExited ?? Ps)}), rootRef: g2, portalRef: O2, portalContainer: !c2 && y2 && !_2 ? m2.current ?? t2 : t2, isTopModal: D2, exited: _2, hasTransition: y2};
}
function Ls(e4) {
  return L(`MuiModal`, e4);
}
var Rs = F(`MuiModal`, [`root`, `hidden`, `backdrop`]);
s();
var zs = (e4) => {
  let {open: t2, exited: n2, classes: r2} = e4;
  return H({root: [`root`, !t2 && n2 && `hidden`], backdrop: [`backdrop`]}, Ls, r2);
}, Bs = q(`div`, {name: `MuiModal`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, !n2.open && n2.exited && t2.hidden];
}})(J(({theme: e4}) => ({position: `fixed`, zIndex: (e4.vars || e4).zIndex.modal, right: 0, bottom: 0, top: 0, left: 0, variants: [{props: ({ownerState: e5}) => !e5.open && e5.exited, style: {visibility: `hidden`}}]}))), Vs = q(es, {name: `MuiModal`, slot: `Backdrop`})({zIndex: -1}), Hs = h(function(e4, t2) {
  let n2 = Y({name: `MuiModal`, props: e4}), _a2 = n2, {classes: r2, className: i2, closeAfterTransition: a2 = false, children: o2, container: s2, component: c2, disableAutoFocus: l2 = false, disableEnforceFocus: u2 = false, disablePortal: d2 = false, disableRestoreFocus: f2 = false, disableScrollLock: p2 = false, hideBackdrop: h2 = false, keepMounted: g2 = false, onClose: _2, onTransitionEnter: v2, onTransitionExited: y2, open: b2, slotProps: x2 = {}, slots: S2 = {}, theme: C2} = _a2, E2 = __objRest(_a2, ["classes", "className", "closeAfterTransition", "children", "container", "component", "disableAutoFocus", "disableEnforceFocus", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"]), D2 = __spreadProps(__spreadValues({}, n2), {closeAfterTransition: a2, disableAutoFocus: l2, disableEnforceFocus: u2, disablePortal: d2, disableRestoreFocus: f2, disableScrollLock: p2, hideBackdrop: h2, keepMounted: g2}), {getRootProps: O2, getBackdropProps: k2, getTransitionProps: A2, portalRef: j2, portalContainer: M2, isTopModal: N2, exited: P2, hasTransition: F2} = Is(__spreadProps(__spreadValues({}, D2), {rootRef: t2})), I2 = __spreadProps(__spreadValues({}, D2), {exited: P2}), L2 = zs(I2), R2 = {};
  if (o2.props.tabIndex === void 0 && (R2.tabIndex = `-1`), F2) {
    let {onEnter: e5, onExited: t3} = A2();
    R2.onEnter = e5, R2.onExited = t3;
  }
  let ee2 = {slots: S2, slotProps: x2}, [te2, ne2] = Z(`root`, {ref: t2, elementType: Bs, externalForwardedProps: __spreadProps(__spreadValues(__spreadValues({}, ee2), E2), {component: c2}), getSlotProps: O2, ownerState: I2, className: U(i2, L2?.root, !I2.open && I2.exited && L2?.hidden)}), [re2, z2] = Z(`backdrop`, {elementType: Vs, externalForwardedProps: ee2, shouldForwardComponentProp: true, getSlotProps: (e5) => k2(__spreadProps(__spreadValues({}, e5), {onClick: (t3) => {
    e5?.onClick && e5.onClick(t3);
  }})), className: L2?.backdrop, ownerState: I2});
  return !g2 && !b2 && (!F2 || P2) ? null : w(Oo, {ref: j2, container: M2, disablePortal: d2, children: T(te2, __spreadProps(__spreadValues({}, ne2), {children: [h2 ? null : w(re2, __spreadValues({}, z2)), w(js, {disableEnforceFocus: u2, disableAutoFocus: l2, disableRestoreFocus: f2, isEnabled: N2, open: b2, children: m(o2, R2)})]}))});
});
function Us(e4) {
  return L(`MuiDialog`, e4);
}
var Ws = F(`MuiDialog`, [`root`, `backdrop`, `scrollPaper`, `scrollBody`, `container`, `paper`, `paperWidthFalse`, `paperWidthXs`, `paperWidthSm`, `paperWidthMd`, `paperWidthLg`, `paperWidthXl`, `paperFullWidth`, `paperFullScreen`]);
s();
var Gs = _({});
s();
var Ks = q(es, {name: `MuiDialog`, slot: `Backdrop`})({zIndex: -1}), qs = (e4) => {
  let {classes: t2, scroll: n2, maxWidth: r2, fullWidth: i2, fullScreen: a2} = e4, o2 = {root: [`root`], backdrop: [`backdrop`], container: [`container`, `scroll${X(n2)}`], paper: [`paper`, `paperWidth${X(String(r2))}`, i2 && `paperFullWidth`, a2 && `paperFullScreen`]};
  return H(o2, Us, t2);
}, Js = q(Hs, {name: `MuiDialog`, slot: `Root`})({"@media print": {position: `absolute !important`}}), Ys = q(`div`, {name: `MuiDialog`, slot: `Container`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.container, t2[`scroll${X(n2.scroll)}`]];
}})({height: `100%`, "@media print": {height: `auto`}, outline: 0, variants: [{props: {scroll: `paper`}, style: {display: `flex`, justifyContent: `center`, alignItems: `center`}}, {props: {scroll: `body`}, style: {overflowY: `auto`, overflowX: `hidden`, textAlign: `center`, "&::after": {content: `""`, display: `inline-block`, verticalAlign: `middle`, height: `100%`, width: `0`}}}]}), Xs = q(Sr, {name: `MuiDialog`, slot: `Paper`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.paper, t2[`paperWidth${X(String(n2.maxWidth))}`], n2.fullWidth && t2.paperFullWidth, n2.fullScreen && t2.paperFullScreen];
}})(J(({theme: e4}) => ({margin: 32, position: `relative`, overflowY: `auto`, outline: 0, "@media print": {overflowY: `visible`, boxShadow: `none`}, variants: [{props: {scroll: `paper`}, style: {display: `flex`, flexDirection: `column`, maxHeight: `calc(100% - 64px)`}}, {props: {scroll: `body`}, style: {display: `inline-block`, verticalAlign: `middle`, textAlign: `initial`}}, {props: ({ownerState: e5}) => !e5.maxWidth, style: {maxWidth: `calc(100% - 64px)`}}, {props: {maxWidth: `xs`}, style: {maxWidth: e4.breakpoints.unit === `px` ? Math.max(e4.breakpoints.values.xs, 444) : `max(${e4.breakpoints.values.xs}${e4.breakpoints.unit}, 444px)`}}, {props: {maxWidth: `xs`, scroll: `body`}, style: {[e4.breakpoints.down(Math.max(e4.breakpoints.values.xs, 444) + 64)]: {maxWidth: `calc(100% - 64px)`}}}, ...Object.keys(e4.breakpoints.values).filter((e5) => e5 !== `xs`).map((t2) => ({props: {maxWidth: t2}, style: {maxWidth: `${e4.breakpoints.values[t2]}${e4.breakpoints.unit}`}})), ...Object.keys(e4.breakpoints.values).filter((e5) => e5 !== `xs`).map((t2) => ({props: {maxWidth: t2, scroll: `body`}, style: {[e4.breakpoints.down(e4.breakpoints.values[t2] + 64)]: {maxWidth: `calc(100% - 64px)`}}})), {props: ({ownerState: e5}) => e5.fullWidth, style: {width: `calc(100% - 64px)`}}, {props: ({ownerState: e5}) => e5.fullScreen, style: {margin: 0, width: `100%`, maxWidth: `100%`, height: `100%`, maxHeight: `none`, borderRadius: 0}}, {props: ({ownerState: e5}) => e5.fullScreen && e5.scroll === `body`, style: {margin: 0, maxWidth: `100%`}}]}))), Zs = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiDialog`}), r2 = Yt(), i2 = {enter: r2.transitions.duration.enteringScreen, exit: r2.transitions.duration.leavingScreen}, _a2 = n2, {"aria-describedby": a2, "aria-labelledby": o2, "aria-modal": s2 = true, children: l2, className: u2, fullScreen: d2 = false, fullWidth: f2 = false, maxWidth: p2 = `sm`, onClick: m2, onClose: h2, open: g2, PaperComponent: _2 = Sr, role: v2 = `dialog`, scroll: y2 = `paper`, slots: b2 = {}, slotProps: x2 = {}, transitionDuration: S2 = i2} = _a2, T2 = __objRest(_a2, ["aria-describedby", "aria-labelledby", "aria-modal", "children", "className", "fullScreen", "fullWidth", "maxWidth", "onClick", "onClose", "open", "PaperComponent", "role", "scroll", "slots", "slotProps", "transitionDuration"]), E2 = __spreadProps(__spreadValues({}, n2), {fullScreen: d2, fullWidth: f2, maxWidth: p2, scroll: y2}), D2 = qs(E2), O2 = C(), k2 = (e5) => {
    O2.current = e5.target === e5.currentTarget;
  }, A2 = (e5) => {
    m2 && m2(e5), O2.current && (O2.current = null, h2 && h2(e5, `backdropClick`));
  }, j2 = te(o2), M2 = c(() => ({titleId: j2}), [j2]), N2 = {slots: b2, slotProps: x2}, [P2, F2] = Z(`root`, {elementType: Js, shouldForwardComponentProp: true, externalForwardedProps: N2, ownerState: E2, className: U(D2.root, u2), ref: t2}), [I2, L2] = Z(`backdrop`, {elementType: Ks, shouldForwardComponentProp: true, externalForwardedProps: N2, ownerState: E2, className: D2.backdrop}), [R2, ee2] = Z(`paper`, {elementType: Xs, shouldForwardComponentProp: true, externalForwardedProps: N2, ownerState: E2, className: D2.paper, additionalProps: {elevation: 24, role: v2, "aria-describedby": a2, "aria-labelledby": j2, "aria-modal": s2, tabIndex: -1, [Cs]: ``}}), [ne2, re2] = Z(`container`, {elementType: Ys, externalForwardedProps: N2, ownerState: E2, className: D2.container}), [z2, ie2] = Z(`transition`, {elementType: Yo, externalForwardedProps: N2, ownerState: E2, additionalProps: {appear: true, in: g2, timeout: S2, role: `presentation`}});
  return w(P2, __spreadProps(__spreadValues(__spreadValues({closeAfterTransition: true, slots: {backdrop: I2}, slotProps: {backdrop: __spreadValues({transitionDuration: S2}, L2)}, onClose: h2, open: g2, onClick: A2}, F2), T2), {children: w(z2, __spreadProps(__spreadValues({}, ie2), {children: w(ne2, __spreadProps(__spreadValues({onMouseDown: k2}, re2), {children: w(R2, __spreadProps(__spreadValues({as: _2}, ee2), {children: w(Gs.Provider, {value: M2, children: l2})}))}))}))}));
});
function Qs(e4) {
  return L(`MuiDialogActions`, e4);
}
var $s = F(`MuiDialogActions`, [`root`, `spacing`]);
s();
var ec = (e4) => {
  let {classes: t2, disableSpacing: n2} = e4;
  return H({root: [`root`, !n2 && `spacing`]}, Qs, t2);
}, tc = q(`div`, {name: `MuiDialogActions`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, !n2.disableSpacing && t2.spacing];
}})({display: `flex`, alignItems: `center`, padding: 8, justifyContent: `flex-end`, flex: `0 0 auto`, variants: [{props: ({ownerState: e4}) => !e4.disableSpacing, style: {"& > :not(style) ~ :not(style)": {marginLeft: 8}}}]}), nc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiDialogActions`}), _a2 = n2, {className: r2, disableSpacing: i2 = false} = _a2, a2 = __objRest(_a2, ["className", "disableSpacing"]), o2 = __spreadProps(__spreadValues({}, n2), {disableSpacing: i2}), s2 = ec(o2);
  return w(tc, __spreadValues({className: U(s2.root, r2), ownerState: o2, ref: t2}, a2));
});
function rc(e4) {
  return L(`MuiDialogContent`, e4);
}
var ic = F(`MuiDialogContent`, [`root`, `dividers`]);
function ac(e4) {
  return L(`MuiDialogTitle`, e4);
}
var oc = F(`MuiDialogTitle`, [`root`]);
s();
var sc = (e4) => {
  let {classes: t2, dividers: n2} = e4;
  return H({root: [`root`, n2 && `dividers`]}, rc, t2);
}, cc = q(`div`, {name: `MuiDialogContent`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.dividers && t2.dividers];
}})(J(({theme: e4}) => ({flex: `1 1 auto`, WebkitOverflowScrolling: `touch`, overflowY: `auto`, padding: `20px 24px`, variants: [{props: ({ownerState: e5}) => e5.dividers, style: {padding: `16px 24px`, borderTop: `1px solid ${(e4.vars || e4).palette.divider}`, borderBottom: `1px solid ${(e4.vars || e4).palette.divider}`}}, {props: ({ownerState: e5}) => !e5.dividers, style: {[`.${oc.root} + &`]: {paddingTop: 0}}}]}))), lc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiDialogContent`}), _a2 = n2, {className: r2, dividers: i2 = false} = _a2, a2 = __objRest(_a2, ["className", "dividers"]), o2 = __spreadProps(__spreadValues({}, n2), {dividers: i2}), s2 = sc(o2);
  return w(cc, __spreadValues({className: U(s2.root, r2), ownerState: o2, ref: t2}, a2));
});
function uc(e4) {
  return L(`MuiDivider`, e4);
}
var dc = F(`MuiDivider`, [`root`, `absolute`, `fullWidth`, `inset`, `middle`, `flexItem`, `vertical`, `withChildren`, `textAlignRight`, `textAlignLeft`, `wrapper`, `wrapperVertical`]);
function fc(e4) {
  return L(`MuiFormControl`, e4);
}
var pc = F(`MuiFormControl`, [`root`, `marginNone`, `marginNormal`, `marginDense`, `fullWidth`, `disabled`]);
s();
var mc = (e4) => {
  let {classes: t2, margin: n2, fullWidth: r2} = e4, i2 = {root: [`root`, n2 !== `none` && `margin${X(n2)}`, r2 && `fullWidth`]};
  return H(i2, fc, t2);
}, hc = q(`div`, {name: `MuiFormControl`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[`margin${X(n2.margin)}`], n2.fullWidth && t2.fullWidth];
}})({display: `inline-flex`, flexDirection: `column`, position: `relative`, minWidth: 0, padding: 0, margin: 0, border: 0, verticalAlign: `top`, variants: [{props: {margin: `normal`}, style: {marginTop: 16, marginBottom: 8}}, {props: {margin: `dense`}, style: {marginTop: 8, marginBottom: 4}}, {props: {fullWidth: true}, style: {width: `100%`}}]}), gc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiFormControl`}), _a2 = n2, {children: r2, className: i2, color: a2 = `primary`, component: o2 = `div`, disabled: s2 = false, error: u2 = false, focused: d2, fullWidth: f2 = false, hiddenLabel: p2 = false, margin: m2 = `none`, required: h2 = false, size: g2 = `medium`, variant: _2 = `outlined`} = _a2, v2 = __objRest(_a2, ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"]), x2 = __spreadProps(__spreadValues({}, n2), {color: a2, component: o2, disabled: s2, error: u2, fullWidth: f2, hiddenLabel: p2, margin: m2, required: h2, size: g2, variant: _2}), S2 = mc(x2), [T2, E2] = l(() => {
    let e5 = false;
    return r2 && y.forEach(r2, (t3) => {
      if (!Bn(t3, [`Input`, `Select`]))
        return;
      let n3 = Bn(t3, [`Select`]) ? t3.props.input : t3;
      n3 && on(n3.props) && (e5 = true);
    }), e5;
  }), [D2, O2] = l(() => {
    let e5 = false;
    return r2 && y.forEach(r2, (t3) => {
      Bn(t3, [`Input`, `Select`]) && (an(t3.props, true) || an(t3.props.inputProps, true)) && (e5 = true);
    }), e5;
  }), [k2, A2] = l(false);
  s2 && k2 && A2(false);
  let j2 = d2 !== void 0 && !s2 ? d2 : k2, M2;
  C(false);
  let N2 = b(() => {
    O2(true);
  }, []), P2 = b(() => {
    O2(false);
  }, []), F2 = c(() => ({adornedStart: T2, setAdornedStart: E2, color: a2, disabled: s2, error: u2, filled: D2, focused: j2, fullWidth: f2, hiddenLabel: p2, size: g2, onBlur: () => {
    A2(false);
  }, onFocus: () => {
    A2(true);
  }, onEmpty: P2, onFilled: N2, registerEffect: M2, required: h2, variant: _2}), [T2, a2, s2, u2, D2, j2, f2, p2, M2, P2, N2, h2, g2, _2]);
  return w(Gt.Provider, {value: F2, children: w(hc, __spreadProps(__spreadValues({as: o2, ownerState: x2, className: U(S2.root, i2), ref: t2}, v2), {children: r2}))});
});
s();
var _c, vc = (e4) => {
  let {classes: t2, contained: n2, size: r2, disabled: i2, error: a2, filled: o2, focused: s2, required: c2} = e4, l2 = {root: [`root`, i2 && `disabled`, a2 && `error`, r2 && `size${X(r2)}`, n2 && `contained`, s2 && `focused`, o2 && `filled`, c2 && `required`]};
  return H(l2, wn, t2);
}, yc = q(`p`, {name: `MuiFormHelperText`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.size && t2[`size${X(n2.size)}`], n2.contained && t2.contained, n2.filled && t2.filled];
}})(J(({theme: e4}) => __spreadProps(__spreadValues({color: (e4.vars || e4).palette.text.secondary}, e4.typography.caption), {textAlign: `left`, marginTop: 3, marginRight: 0, marginBottom: 0, marginLeft: 0, [`&.${Tn.disabled}`]: {color: (e4.vars || e4).palette.text.disabled}, [`&.${Tn.error}`]: {color: (e4.vars || e4).palette.error.main}, variants: [{props: {size: `small`}, style: {marginTop: 4}}, {props: ({ownerState: e5}) => e5.contained, style: {marginLeft: 14, marginRight: 14}}]}))), bc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiFormHelperText`}), _a2 = n2, {children: r2, className: i2, component: a2 = `p`, disabled: o2, error: s2, filled: c2, focused: l2, margin: u2, required: d2, variant: f2} = _a2, p2 = __objRest(_a2, ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]), [m2] = qt({props: n2, states: [`variant`, `size`, `disabled`, `error`, `filled`, `focused`, `required`]}), h2 = __spreadProps(__spreadValues({}, n2), {component: a2, contained: m2.variant === `filled` || m2.variant === `outlined`, variant: m2.variant, size: m2.size, disabled: m2.disabled, error: m2.error, filled: m2.filled, focused: m2.focused, required: m2.required});
  delete h2.ownerState;
  let g2 = vc(h2);
  return w(yc, __spreadProps(__spreadValues({as: a2, className: U(g2.root, i2), ref: t2}, p2), {ownerState: h2, children: r2 === ` ` ? _c || (_c = w(`span`, {className: `notranslate`, "aria-hidden": true, children: `\u200B`})) : r2}));
});
s();
var xc = (e4) => {
  let {classes: t2, color: n2, focused: r2, disabled: i2, error: a2, filled: o2, required: s2} = e4, c2 = {root: [`root`, `color${X(n2)}`, i2 && `disabled`, a2 && `error`, o2 && `filled`, r2 && `focused`, s2 && `required`], asterisk: [`asterisk`, a2 && `error`]};
  return H(c2, En, t2);
}, Sc = q(`label`, {name: `MuiFormLabel`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.color === `secondary` && t2.colorSecondary, n2.filled && t2.filled];
}})(J(({theme: e4}) => __spreadProps(__spreadValues({color: (e4.vars || e4).palette.text.secondary}, e4.typography.body1), {lineHeight: `1.4375em`, padding: 0, position: `relative`, variants: [...Object.entries(e4.palette).filter(ri()).map(([t2]) => ({props: {color: t2}, style: {[`&.${Dn.focused}`]: {color: (e4.vars || e4).palette[t2].main}}})), {props: {}, style: {[`&.${Dn.disabled}`]: {color: (e4.vars || e4).palette.text.disabled}, [`&.${Dn.error}`]: {color: (e4.vars || e4).palette.error.main}}}]}))), Cc = q(`span`, {name: `MuiFormLabel`, slot: `Asterisk`})(J(({theme: e4}) => ({[`&.${Dn.error}`]: {color: (e4.vars || e4).palette.error.main}}))), wc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiFormLabel`}), _a2 = n2, {children: r2, className: i2, color: a2, component: o2 = `label`, disabled: s2, error: c2, filled: l2, focused: u2, required: d2} = _a2, f2 = __objRest(_a2, ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]), [p2] = qt({props: n2, states: [`color`, `required`, `focused`, `disabled`, `error`, `filled`]}), m2 = __spreadProps(__spreadValues({}, n2), {color: p2.color || `primary`, component: o2, disabled: p2.disabled, error: p2.error, filled: p2.filled, focused: p2.focused, required: p2.required}), h2 = xc(m2);
  return T(Sc, __spreadProps(__spreadValues({as: o2, ownerState: m2, className: U(h2.root, i2), ref: t2}, f2), {children: [r2, p2.required && T(Cc, {ownerState: m2, "aria-hidden": true, className: h2.asterisk, children: [`\u2009`, `*`]})]}));
});
s();
function Tc(e4) {
  return `scale(${e4}, ${e4 ** 2})`;
}
var Ec = {entering: {opacity: 1, transform: Tc(1)}, entered: {opacity: 1, transform: `none`}, exiting: {opacity: 0, transform: Tc(0.75)}, exited: {opacity: 0, transform: Tc(0.75)}}, Dc = {opacity: 0, transform: Tc(0.75), visibility: `hidden`}, Oc = h(function(e4, t2) {
  let _a2 = e4, {addEndListener: n2, appear: r2 = true, children: i2, disablePrefersReducedMotion: a2 = false, easing: o2, in: s2, onEnter: c2, onEntered: l2, onEntering: u2, onExit: d2, onExited: f2, onExiting: p2, style: h2, timeout: g2 = `auto`} = _a2, _2 = __objRest(_a2, ["addEndListener", "appear", "children", "disablePrefersReducedMotion", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout"]), v2 = C(null), y2 = Yt(), b2 = fr(y2.motion.reducedMotion, a2), x2 = C(null), S2 = Qt(x2, Eo(i2), t2), T2 = yn(x2, u2), E2 = yn(x2, (e5, t3) => {
    b2.shouldReduceMotion || ln(e5);
    let {duration: n3, delay: r3, easing: i3} = xn({style: h2, timeout: g2, easing: o2}, {mode: `enter`}), a3;
    g2 === `auto` && !b2.shouldReduceMotion ? (a3 = y2.transitions.getAutoHeightDuration(e5.clientHeight), v2.current = a3) : (a3 = n3, v2.current = null);
    let s3 = b2.getTransitionTiming({duration: a3, delay: r3});
    e5.style.transition = [y2.transitions.create(`opacity`, {duration: s3.duration, delay: s3.delay}), y2.transitions.create(`transform`, {duration: typeof s3.duration == `string` ? s3.duration : s3.duration * 0.666, delay: s3.delay, easing: i3})].join(`,`), c2 && c2(e5, t3);
  }), D2 = yn(x2, l2), O2 = yn(x2, p2), k2 = yn(x2, (e5) => {
    let {duration: t3, delay: n3, easing: r3} = xn({style: h2, timeout: g2, easing: o2}, {mode: `exit`}), i3;
    g2 === `auto` && !b2.shouldReduceMotion ? (i3 = y2.transitions.getAutoHeightDuration(e5.clientHeight), v2.current = i3) : (i3 = t3, v2.current = null);
    let a3 = b2.getTransitionTiming({duration: i3, delay: n3});
    e5.style.transition = [y2.transitions.create(`opacity`, {duration: a3.duration, delay: a3.delay}), y2.transitions.create(`transform`, {duration: typeof a3.duration == `string` ? a3.duration : a3.duration * 0.666, delay: a3.delay || (typeof a3.duration == `string` ? a3.duration : a3.duration * 0.333), easing: r3})].join(`,`), e5.style.opacity = 0, e5.style.transform = Tc(0.75), d2 && d2(e5);
  }), A2 = yn(x2, (e5) => {
    e5.style.transition = ``, f2 && f2(e5);
  });
  return w(er, __spreadProps(__spreadValues({appear: r2, in: s2, nodeRef: x2, onEnter: E2, onEntered: D2, onEntering: T2, onExit: k2, onExited: A2, onExiting: O2, addEndListener: n2 ? (e5) => {
    n2(x2.current, e5);
  } : void 0, getAutoTimeout: g2 === `auto` ? () => v2.current : void 0, reduceMotion: b2.shouldReduceMotion, timeout: g2 === `auto` ? null : g2}, _2), {children: (e5, _b) => {
    var _c2 = _b, {ownerState: t3} = _c2, n3 = __objRest(_c2, ["ownerState"]);
    let r3 = bn(e5, s2, Ec, Dc, h2, i2.props.style);
    return m(i2, __spreadValues({style: r3, ref: S2}, n3));
  }}));
});
Oc && (Oc.muiSupportAuto = true);
function kc(e4) {
  return L(`MuiInputLabel`, e4);
}
var Ac = F(`MuiInputLabel`, [`root`, `focused`, `disabled`, `error`, `required`, `asterisk`, `formControl`, `sizeSmall`, `shrink`, `animated`, `standard`, `filled`, `outlined`]);
function jc(e4) {
  return L(`MuiInputAdornment`, e4);
}
var Mc = F(`MuiInputAdornment`, [`root`, `filled`, `standard`, `outlined`, `positionStart`, `positionEnd`, `disablePointerEvents`, `hiddenLabel`, `sizeSmall`]);
s();
var Nc, Pc = (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, t2[`position${X(n2.position)}`], n2.disablePointerEvents === true && t2.disablePointerEvents, t2[n2.variant]];
}, Fc = (e4) => {
  let {classes: t2, disablePointerEvents: n2, hiddenLabel: r2, position: i2, size: a2, variant: o2} = e4, s2 = {root: [`root`, n2 && `disablePointerEvents`, i2 && `position${X(i2)}`, o2, r2 && `hiddenLabel`, a2 && `size${X(a2)}`]};
  return H(s2, jc, t2);
}, Ic = q(`div`, {name: `MuiInputAdornment`, slot: `Root`, overridesResolver: Pc})(J(({theme: e4}) => ({display: `flex`, maxHeight: `2em`, alignItems: `center`, whiteSpace: `nowrap`, color: (e4.vars || e4).palette.action.active, variants: [{props: {variant: `filled`}, style: {[`&.${Mc.positionStart}&:not(.${Mc.hiddenLabel})`]: {marginTop: 16}}}, {props: {position: `start`}, style: {marginRight: 8}}, {props: {position: `end`}, style: {marginLeft: 8}}, {props: {disablePointerEvents: true}, style: {pointerEvents: `none`}}]}))), Lc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiInputAdornment`}), _a2 = n2, {children: r2, className: i2, component: a2 = `div`, disablePointerEvents: o2 = false, disableTypography: s2 = false, position: c2, variant: l2} = _a2, u2 = __objRest(_a2, ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"]), d2 = Kt() || {}, f2 = l2;
  l2 && d2.variant, d2 && !f2 && (f2 = d2.variant);
  let p2 = __spreadProps(__spreadValues({}, n2), {hiddenLabel: d2.hiddenLabel, size: d2.size, disablePointerEvents: o2, position: c2, variant: f2}), m2 = Fc(p2);
  return w(Gt.Provider, {value: null, children: w(Ic, __spreadProps(__spreadValues({as: a2, ownerState: p2, className: U(m2.root, i2), ref: t2}, u2), {children: typeof r2 == `string` && !s2 ? w(Oi, {color: `textSecondary`, children: r2}) : T(g, {children: [c2 === `start` ? Nc || (Nc = w(`span`, {className: `notranslate`, "aria-hidden": true, children: `\u200B`})) : null, r2]})}))});
});
s();
var Rc = (e4) => {
  let {classes: t2, formControl: n2, size: r2, shrink: i2, disableAnimation: a2, variant: o2, required: s2} = e4, c2 = {root: [`root`, n2 && `formControl`, !a2 && `animated`, i2 && `shrink`, r2 && r2 !== `medium` && `size${X(r2)}`, o2], asterisk: [s2 && `asterisk`]}, l2 = H(c2, kc, t2);
  return __spreadValues(__spreadValues({}, t2), l2);
}, zc = q(wc, {shouldForwardProp: (e4) => Zt(e4) || e4 === `classes`, name: `MuiInputLabel`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [{[`& .${Dn.asterisk}`]: t2.asterisk}, t2.root, n2.formControl && t2.formControl, n2.size === `small` && t2.sizeSmall, n2.shrink && t2.shrink, !n2.disableAnimation && t2.animated, n2.focused && t2.focused, t2[n2.variant]];
}})(J(({theme: e4}) => ({display: `block`, transformOrigin: `top left`, whiteSpace: `nowrap`, overflow: `hidden`, textOverflow: `ellipsis`, maxWidth: `100%`, variants: [{props: ({ownerState: e5}) => e5.formControl, style: {position: `absolute`, left: 0, top: 0, transform: `translate(0, 20px) scale(1)`}}, {props: {size: `small`}, style: {transform: `translate(0, 17px) scale(1)`}}, {props: ({ownerState: e5}) => e5.shrink, style: {transform: `translate(0, -1.5px) scale(0.75)`, transformOrigin: `top left`, maxWidth: `133%`}}, {props: ({ownerState: e5}) => !e5.disableAnimation, style: __spreadValues({}, Cn(e4, [`color`, `transform`, `max-width`], {duration: e4.transitions.duration.shorter, easing: e4.transitions.easing.easeOut}))}, {props: {variant: `filled`}, style: {zIndex: 1, pointerEvents: `none`, transform: `translate(12px, 16px) scale(1)`, maxWidth: `calc(100% - 24px)`}}, {props: {variant: `filled`, size: `small`}, style: {transform: `translate(12px, 13px) scale(1)`}}, {props: ({variant: e5, ownerState: t2}) => e5 === `filled` && t2.shrink, style: {userSelect: `none`, pointerEvents: `auto`, transform: `translate(12px, 7px) scale(0.75)`, maxWidth: `calc(133% - 24px)`}}, {props: ({variant: e5, ownerState: t2, size: n2}) => e5 === `filled` && t2.shrink && n2 === `small`, style: {transform: `translate(12px, 4px) scale(0.75)`}}, {props: {variant: `outlined`}, style: {zIndex: 1, pointerEvents: `none`, transform: `translate(14px, 16px) scale(1)`, maxWidth: `calc(100% - 24px)`}}, {props: {variant: `outlined`, size: `small`}, style: {transform: `translate(14px, 9px) scale(1)`}}, {props: ({variant: e5, ownerState: t2}) => e5 === `outlined` && t2.shrink, style: {userSelect: `none`, pointerEvents: `auto`, maxWidth: `calc(133% - 32px)`, transform: `translate(14px, -9px) scale(0.75)`}}]}))), Bc = h(function(e4, t2) {
  let n2 = Y({name: `MuiInputLabel`, props: e4}), _a2 = n2, {disableAnimation: r2 = false, margin: i2, shrink: a2, variant: o2, className: s2} = _a2, c2 = __objRest(_a2, ["disableAnimation", "margin", "shrink", "variant", "className"]), [l2, u2] = qt({props: n2, states: [`size`, `variant`, `required`, `focused`]}), d2 = a2;
  d2 === void 0 && u2 && (d2 = u2.filled || u2.focused || u2.adornedStart);
  let f2 = __spreadProps(__spreadValues({}, n2), {disableAnimation: r2, formControl: u2, shrink: d2, size: l2.size, variant: l2.variant, required: l2.required, focused: l2.focused}), p2 = Rc(f2);
  return w(zc, __spreadProps(__spreadValues({"data-shrink": d2, ref: t2, className: U(p2.root, s2)}, c2), {ownerState: f2, classes: p2}));
});
s();
var Vc = _({});
function Hc(e4) {
  return L(`MuiList`, e4);
}
var Uc = F(`MuiList`, [`root`, `padding`, `dense`, `subheader`]);
s();
var Wc = (e4) => {
  let {classes: t2, disablePadding: n2, dense: r2, subheader: i2} = e4;
  return H({root: [`root`, !n2 && `padding`, r2 && `dense`, i2 && `subheader`]}, Hc, t2);
}, Gc = q(`ul`, {name: `MuiList`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, !n2.disablePadding && t2.padding, n2.dense && t2.dense, n2.subheader && t2.subheader];
}})({listStyle: `none`, margin: 0, padding: 0, position: `relative`, variants: [{props: ({ownerState: e4}) => !e4.disablePadding, style: {paddingTop: 8, paddingBottom: 8}}, {props: ({ownerState: e4}) => e4.subheader, style: {paddingTop: 0, isolation: `isolate`}}]}), Kc = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiList`}), _a2 = n2, {children: r2, className: i2, component: a2 = `ul`, dense: o2 = false, disablePadding: s2 = false, subheader: l2} = _a2, u2 = __objRest(_a2, ["children", "className", "component", "dense", "disablePadding", "subheader"]), d2 = c(() => ({dense: o2}), [o2]), f2 = __spreadProps(__spreadValues({}, n2), {component: a2, dense: o2, disablePadding: s2}), p2 = Wc(f2);
  return w(Vc.Provider, {value: d2, children: T(Gc, __spreadProps(__spreadValues({as: a2, className: U(p2.root, i2), ref: t2, ownerState: f2}, u2), {children: [l2, r2]}))});
});
function qc(e4) {
  return L(`MuiListItem`, e4);
}
var Jc = F(`MuiListItem`, [`root`, `dense`, `alignItemsFlexStart`, `divider`, `gutters`, `padding`, `secondaryAction`]);
function Yc(e4) {
  return L(`MuiListItemSecondaryAction`, e4);
}
var Xc = F(`MuiListItemSecondaryAction`, [`root`, `disableGutters`]);
s();
var Zc = (e4) => {
  let {disableGutters: t2, classes: n2} = e4;
  return H({root: [`root`, t2 && `disableGutters`]}, Yc, n2);
}, Qc = q(`div`, {name: `MuiListItemSecondaryAction`, slot: `Root`, overridesResolver: (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.disableGutters && t2.disableGutters];
}})({position: `absolute`, right: 16, top: `50%`, transform: `translateY(-50%)`, variants: [{props: ({ownerState: e4}) => e4.disableGutters, style: {right: 0}}]}), $c = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiListItemSecondaryAction`}), _a2 = n2, {className: r2, component: i2} = _a2, a2 = __objRest(_a2, ["className", "component"]), o2 = d(Vc), s2 = __spreadProps(__spreadValues({}, n2), {disableGutters: o2.disableGutters}), c2 = Zc(s2);
  return w(Qc, __spreadValues({as: i2, className: U(c2.root, r2), ownerState: s2, ref: t2}, a2));
});
$c.muiName = `ListItemSecondaryAction`, s();
var el = (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.dense && t2.dense, n2.alignItems === `flex-start` && t2.alignItemsFlexStart, n2.divider && t2.divider, !n2.disableGutters && t2.gutters, !n2.disablePadding && t2.padding];
}, tl = (e4) => {
  let {alignItems: t2, classes: n2, dense: r2, disableGutters: i2, disablePadding: a2, divider: o2} = e4;
  return H({root: [`root`, r2 && `dense`, !i2 && `gutters`, !a2 && `padding`, o2 && `divider`, t2 === `flex-start` && `alignItemsFlexStart`], secondaryAction: [`secondaryAction`]}, qc, n2);
}, nl = q(`div`, {name: `MuiListItem`, slot: `Root`, overridesResolver: el})(J(({theme: e4}) => ({display: `flex`, justifyContent: `flex-start`, alignItems: `center`, position: `relative`, textDecoration: `none`, width: `100%`, boxSizing: `border-box`, textAlign: `left`, variants: [{props: ({ownerState: e5}) => !e5.disablePadding, style: {paddingTop: 8, paddingBottom: 8}}, {props: ({ownerState: e5}) => !e5.disablePadding && e5.dense, style: {paddingTop: 4, paddingBottom: 4}}, {props: ({ownerState: e5}) => !e5.disablePadding && !e5.disableGutters, style: {paddingLeft: 16, paddingRight: 16}}, {props: ({ownerState: e5}) => !e5.disablePadding && !!e5.secondaryAction, style: {paddingRight: 48}}, {props: ({ownerState: e5}) => !!e5.secondaryAction, style: {[`& > .${kn.root}`]: {paddingRight: 48}}}, {props: {alignItems: `flex-start`}, style: {alignItems: `flex-start`}}, {props: ({ownerState: e5}) => e5.divider, style: {borderBottom: `1px solid ${(e4.vars || e4).palette.divider}`, backgroundClip: `padding-box`}}, {props: ({ownerState: e5}) => e5.button, style: __spreadProps(__spreadValues({}, Cn(e4, `background-color`, {duration: e4.transitions.duration.shortest})), {"&:hover": {textDecoration: `none`, backgroundColor: (e4.vars || e4).palette.action.hover, "@media (hover: none)": {backgroundColor: `transparent`}}})}]}))), rl = q($c, {name: `MuiListItem`, slot: `secondaryAction`})({}), il = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiListItem`}), _a2 = n2, {alignItems: r2 = `center`, children: i2, className: a2, component: o2 = `li`, dense: s2 = false, disableGutters: l2 = false, disablePadding: u2 = false, divider: f2 = false, secondaryAction: p2, slotProps: m2 = {}, slots: h2 = {}} = _a2, g2 = __objRest(_a2, ["alignItems", "children", "className", "component", "dense", "disableGutters", "disablePadding", "divider", "secondaryAction", "slotProps", "slots"]), _2 = d(Vc), v2 = c(() => ({dense: s2 || _2.dense || false, alignItems: r2, disableGutters: l2}), [r2, _2.dense, s2, l2]), y2 = __spreadProps(__spreadValues({}, n2), {alignItems: r2, dense: v2.dense, disableGutters: l2, disablePadding: u2, divider: f2, secondaryAction: p2}), b2 = tl(y2), x2 = {slots: h2, slotProps: m2}, [S2, C2] = Z(`root`, {ref: t2, elementType: nl, externalForwardedProps: __spreadValues(__spreadValues({component: o2}, x2), g2), ownerState: y2, className: U(b2.root, a2)}), [E2, D2] = Z(`secondaryAction`, {elementType: rl, shouldForwardComponentProp: true, externalForwardedProps: x2, ownerState: y2, className: b2.secondaryAction});
  return w(Vc.Provider, {value: v2, children: T(S2, __spreadProps(__spreadValues({}, C2), {children: [i2, p2 && w(E2, __spreadProps(__spreadValues({}, D2), {children: p2}))]}))});
});
function al(e4) {
  return L(`MuiListItemIcon`, e4);
}
var ol = F(`MuiListItemIcon`, [`root`, `alignItemsFlexStart`]);
function sl(e4) {
  return L(`MuiListItemText`, e4);
}
var cl = F(`MuiListItemText`, [`root`, `multiline`, `dense`, `inset`, `primary`, `secondary`]);
s();
var ll = _(void 0);
function ul() {
  let e4 = d(ll);
  if (e4 === void 0)
    throw Error(`MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.`);
  return e4;
}
var dl = Object.is;
function fl(e4, t2) {
  if (e4 === t2)
    return true;
  if (!(e4 instanceof Object) || !(t2 instanceof Object))
    return false;
  let n2 = 0, r2 = 0;
  for (let r3 in e4)
    if (n2 += 1, !dl(e4[r3], t2[r3]) || !(r3 in t2))
      return false;
  for (let e5 in t2)
    r2 += 1;
  return n2 === r2;
}
s();
var pl = [`ArrowRight`, `ArrowLeft`, `ArrowUp`, `ArrowDown`, `Home`, `End`];
function ml(e4) {
  let {activeItemId: t2, getDefaultActiveItemId: n2, orientation: r2, isRtl: i2 = false, isItemFocusable: a2 = Ol, wrap: o2 = true} = e4, [s2, u2] = l(t2), [d2, f2] = l(t2), p2 = s2;
  t2 !== d2 && (f2(t2), t2 !== void 0 && t2 !== s2 && (p2 = t2, u2(t2)));
  let m2 = C(null), h2 = C(new Map()), [g2, _2] = l(0), v2 = c(() => Tl(h2.current), [g2]), y2 = gl(p2, v2, a2, n2), x2 = C(y2);
  x2.current = y2;
  let S2 = b(() => {
    let e5 = Tl(h2.current);
    return Sl(e5, gl(x2.current, e5, a2, n2));
  }, [n2, a2]), w2 = b(() => h2.current, []), T2 = Ut((e5) => {
    fl(h2.current.get(e5.id) ?? null, e5) || (h2.current.set(e5.id, e5), _2((e6) => e6 + 1));
  }), E2 = Ut((e5) => {
    h2.current.delete(e5) && _2((e6) => e6 + 1);
  }), D2 = Ut((e5) => {
    u2(e5);
  }), O2 = b((e5) => x2.current === e5, []), k2 = b((e5, t3, n3, r3) => {
    let i3 = bl(El(h2.current), e5, t3, n3, r3 ?? a2);
    return i3 ? (i3.element?.focus(), u2(i3.id), i3) : null;
  }, [a2]), A2 = b((e5, t3, n3) => ({onFocus: (e6) => {
    t3?.(e6);
    let n4 = El(h2.current), r3 = wl(n4, e6.target);
    r3 !== -1 && u2(n4[r3].id);
  }, onKeyDown: (e6) => {
    if (n3?.(e6), e6.defaultPrevented || e6.altKey || e6.shiftKey || e6.ctrlKey || e6.metaKey || !pl.includes(e6.key))
      return;
    let t4 = r2 === `horizontal` ? `ArrowLeft` : `ArrowUp`, a3 = r2 === `horizontal` ? `ArrowRight` : `ArrowDown`;
    r2 === `horizontal` && i2 && (t4 = `ArrowRight`, a3 = `ArrowLeft`);
    let s3 = El(h2.current), c2 = tn(K(m2.current)), l2 = c2 === m2.current, u3 = yl(s3, c2, x2.current), d3 = `next`;
    switch (e6.key) {
      case t4:
        d3 = `previous`, e6.preventDefault(), l2 && (u3 = s3.length);
        break;
      case a3:
        e6.preventDefault(), l2 && (u3 = -1);
        break;
      case `Home`:
        e6.preventDefault(), u3 = -1;
        break;
      case `End`:
        e6.preventDefault(), d3 = `previous`, u3 = s3.length;
        break;
      default:
        return;
    }
    k2(u3, d3, o2);
  }, ref: jl(e5, (e6) => {
    m2.current = e6;
  })}), [k2, i2, r2, o2]), j2 = b((e5) => {
    let t3 = El(h2.current), n3 = tn(K(m2.current)), r3 = n3 === m2.current ? -1 : yl(t3, n3, x2.current);
    return k2(r3, `next`, true, e5)?.id ?? null;
  }, [k2]);
  return c(() => ({activeItemId: y2, focusNext: j2, getActiveItem: S2, getContainerProps: A2, getItemMap: w2, isItemActive: O2, registerItem: T2, setActiveItemId: D2, unregisterItem: E2}), [y2, j2, S2, A2, w2, O2, T2, D2, E2]);
}
function hl(e4) {
  let {activeItemId: t2, registerItem: n2, unregisterItem: r2} = ul(), i2 = C(null), a2 = c(() => ({disabled: e4.disabled ?? false, element: null, focusableWhenDisabled: e4.focusableWhenDisabled ?? false, id: e4.id, selected: e4.selected ?? false, textValue: e4.textValue}), [e4.disabled, e4.focusableWhenDisabled, e4.id, e4.selected, e4.textValue]), o2 = C(a2);
  o2.current = a2;
  let s2 = b((t3) => {
    if (i2.current = t3, t3 == null) {
      queueMicrotask(() => {
        i2.current ?? r2(e4.id);
      });
      return;
    }
    n2(__spreadProps(__spreadValues({}, o2.current), {element: t3}));
  }, [e4.id, n2, r2]), l2 = Ht(e4.ref, s2);
  return D(() => {
    i2.current && n2(__spreadProps(__spreadValues({}, a2), {element: i2.current}));
  }, [a2, n2]), D(() => {
    let t3 = e4.id;
    return () => {
      r2(t3);
    };
  }, [e4.id, r2]), {ref: l2, tabIndex: t2 === e4.id ? 0 : -1};
}
function gl(e4, t2, n2, r2) {
  return e4 == null ? vl(t2, n2, r2) : _l(e4, t2, n2);
}
function _l(e4, t2, n2) {
  let r2 = Cl(t2, e4);
  return r2 === -1 ? xl(t2, n2) : n2(t2[r2]) ? t2[r2].id : bl(t2, r2, `next`, false, n2)?.id ?? null;
}
function vl(e4, t2, n2) {
  let r2 = n2?.(e4);
  if (r2 != null) {
    let n3 = Sl(e4, r2);
    if (n3 && t2(n3))
      return n3.id;
  }
  return xl(e4, t2);
}
function yl(e4, t2, n2) {
  if (t2) {
    let n3 = wl(e4, t2);
    if (n3 !== -1)
      return n3;
  }
  return Cl(e4, n2);
}
function bl(e4, t2, n2, r2, i2) {
  let a2 = e4.length - 1;
  if (a2 === -1)
    return null;
  let o2 = false, s2 = Dl(t2, a2, n2, r2), c2 = s2;
  for (; s2 !== -1; ) {
    if (s2 === c2) {
      if (o2)
        return null;
      o2 = true;
    }
    let t3 = e4[s2];
    if (!t3 || !i2(t3))
      s2 = Dl(s2, a2, n2, r2);
    else
      return t3;
  }
  return null;
}
function xl(e4, t2) {
  return e4.find((e5) => t2(e5))?.id ?? null;
}
function Sl(e4, t2) {
  return t2 == null ? null : e4.find((e5) => e5.id === t2) ?? null;
}
function Cl(e4, t2) {
  return t2 == null ? -1 : e4.findIndex((e5) => e5.id === t2);
}
function wl(e4, t2) {
  return t2 ? e4.findIndex((e5) => e5.element === t2 || e5.element?.contains(t2)) : -1;
}
function Tl(e4) {
  let t2 = Array.from(e4.values());
  if (t2.every((e5) => e5.element == null))
    return t2;
  let n2 = t2.filter(kl).sort((e5, t3) => Al(e5.element, t3.element)), r2 = t2.filter((e5) => !kl(e5));
  return [...n2, ...r2];
}
function El(e4) {
  return Tl(e4).filter(kl);
}
function Dl(e4, t2, n2, r2 = true) {
  return n2 === `next` ? e4 === t2 ? r2 ? 0 : -1 : e4 + 1 : e4 === 0 ? r2 ? t2 : -1 : e4 - 1;
}
function Ol(e4) {
  return e4.element ? e4.focusableWhenDisabled ? true : !e4.disabled && !e4.element.hasAttribute(`disabled`) && e4.element.getAttribute(`aria-disabled`) !== `true` && e4.element.hasAttribute(`tabindex`) : false;
}
function kl(e4) {
  return e4.element != null && e4.element.isConnected;
}
function Al(e4, t2) {
  if (e4 === t2)
    return 0;
  let n2 = e4.compareDocumentPosition(t2);
  return n2 & Node.DOCUMENT_POSITION_FOLLOWING || n2 & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING || n2 & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0;
}
function jl(...e4) {
  return (t2) => {
    e4.forEach((e5) => {
      Hn(e5 ?? null, t2);
    });
  };
}
var Ml = ps;
function Nl(e4, t2) {
  if (t2 == null) {
    e4.focus();
    return;
  }
  try {
    e4.focus({focusVisible: t2 === `keyboard`});
  } catch {
    e4.focus();
  }
}
s();
var Pl = _(null);
function Fl() {
  return d(Pl);
}
var Il = Pl.Provider;
s();
var Ll = _(void 0);
function Rl() {
  let e4 = d(Ll);
  if (e4 === void 0)
    throw Error(`MUI: MenuListContext is missing. MenuItems must be placed within Menu or MenuList.`);
  return e4;
}
s();
function zl(e4) {
  let t2 = e4?.element ?? e4;
  if (!t2)
    return ``;
  if (e4?.textValue !== void 0)
    return e4.textValue;
  let n2 = t2.innerText;
  return n2 === void 0 && (n2 = t2.textContent), n2 ?? ``;
}
function Bl(e4, t2) {
  if (t2 === void 0)
    return true;
  let n2 = zl(e4);
  return n2 = n2.trim().toLowerCase(), n2.length === 0 ? false : t2.repeating ? n2[0] === t2.keys[0] : n2.startsWith(t2.keys.join(``));
}
function Vl(e4, t2) {
  return Bl(e4, t2) ? Ol(e4) : false;
}
function Hl(e4, t2) {
  Nl(e4, t2);
}
var Ul = h(function(e4, t2) {
  let _a2 = e4, {actions: n2, autoFocus: r2 = false, autoFocusItem: i2 = false, children: a2, className: o2, disabledItemsFocusable: s2 = false, disableListWrap: u2 = false, onKeyDown: d2, variant: f2 = `selectedMenu`} = _a2, m2 = __objRest(_a2, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]), h2 = C(null), g2 = C(false), [_2, v2] = l(false), y2 = Fl(), x2 = C({keys: [], repeating: true, previousKeyMatched: true, lastTime: null}), S2 = ml({activeItemId: void 0, getDefaultActiveItemId: b((e5) => f2 === `selectedMenu` ? e5.find((e6) => e6.selected && Ol(e6))?.id ?? e5.find((e6) => Ol(e6))?.id ?? null : e5.find((e6) => Ol(e6))?.id ?? null, [f2]), orientation: `vertical`, wrap: !u2}), {activeItemId: T2, focusNext: E2, getActiveItem: D2, getContainerProps: O2, getItemMap: k2} = S2, A2 = Gn((e5 = false) => {
    if (!h2.current || !e5 && g2.current)
      return null;
    if (i2) {
      let e6 = D2();
      if (e6?.element) {
        let t3 = Array.from(k2().values()).some((e7) => e7.selected), n3 = f2 === `menu` && t3 && !e6.selected && y2 == null;
        return v2(n3), Hl(e6.element, y2), g2.current = true, e6.element;
      }
      return r2 ? (v2(false), h2.current.focus(), h2.current) : null;
    }
    return r2 ? (v2(false), h2.current.focus(), g2.current = true, h2.current) : (v2(false), null);
  });
  $t(() => {
    if (!r2 && !i2) {
      g2.current = false, v2(false);
      return;
    }
    A2();
  }, [T2, i2, r2, A2]), p(n2, () => ({adjustStyleForScrollbar: (e5, {direction: t3}) => {
    let n3 = !h2.current.style.width;
    if (e5.clientHeight < h2.current.clientHeight && n3) {
      let n4 = Vn(e5), r3 = Ml(n4);
      if (r3 > 0) {
        let e6 = `${r3}px`, i3 = t3 === `rtl` ? `paddingLeft` : `paddingRight`, a3 = parseFloat(n4.getComputedStyle(h2.current)[i3]) || 0;
        h2.current.style[i3] = `${a3 + r3}px`, h2.current.style.width = `calc(100% + ${e6})`;
      }
    }
    return h2.current;
  }, focusInitialTarget: () => {
    if (!h2.current)
      return null;
    let e5 = nn(en(h2.current));
    return e5 && Ss(h2.current, e5) ? e5 : A2(true);
  }}), [A2]);
  let j2 = O2(void 0, m2.onFocus), M2 = Qt(h2, j2.ref, t2), N2 = c(() => ({itemsFocusableWhenDisabled: s2, suppressInitialFocusVisible: _2, variant: f2}), [s2, _2, f2]), P2 = Gn((e5) => {
    if (_2 && v2(false), (e5.ctrlKey || e5.metaKey || e5.altKey) && d2) {
      d2(e5);
      return;
    }
    if (j2.onKeyDown(e5), e5.key.length === 1) {
      let t3 = x2.current, n3 = e5.key.toLowerCase(), r3 = performance.now();
      t3.keys.length > 0 && (r3 - t3.lastTime > 500 ? (t3.keys = [], t3.repeating = true, t3.previousKeyMatched = true) : t3.repeating && n3 !== t3.keys[0] && (t3.repeating = false)), t3.lastTime = r3, t3.keys.push(n3);
      let i3 = nn(en(h2.current)), a3 = i3 && !t3.repeating && Bl(i3, t3);
      t3.previousKeyMatched && (a3 || E2((e6) => Vl(e6, t3)) != null) ? e5.preventDefault() : t3.previousKeyMatched = false;
    }
    d2 && d2(e5);
  });
  return w(Kc, __spreadProps(__spreadValues({role: `menu`, ref: M2, className: o2, onKeyDown: P2, tabIndex: -1}, m2), {onFocus: j2.onFocus, children: w(Ll.Provider, {value: N2, children: w(ll.Provider, {value: S2, children: a2})})}));
});
s();
var Wl = (e4, t2) => {
  let {ownerState: n2} = e4;
  return [t2.root, n2.dense && t2.dense, n2.divider && t2.divider, !n2.disableGutters && t2.gutters];
}, Gl = (e4) => {
  let {disabled: t2, dense: n2, divider: r2, disableGutters: i2, selected: a2, classes: o2} = e4, s2 = H({root: [`root`, n2 && `dense`, t2 && `disabled`, !i2 && `gutters`, r2 && `divider`, a2 && `selected`]}, An, o2);
  return __spreadValues(__spreadValues({}, o2), s2);
}, Kl = q($r, {shouldForwardProp: (e4) => Zt(e4) || e4 === `classes`, name: `MuiMenuItem`, slot: `Root`, overridesResolver: Wl})(J(({theme: e4}) => __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, e4.typography.body1), {display: `flex`, justifyContent: `flex-start`, alignItems: `center`, position: `relative`, textDecoration: `none`, minHeight: 48, paddingTop: 6, paddingBottom: 6, boxSizing: `border-box`, whiteSpace: `nowrap`, "&:hover": {textDecoration: `none`, backgroundColor: (e4.vars || e4).palette.action.hover, "@media (hover: none)": {backgroundColor: `transparent`}}, [`&.${jn.selected}`]: __spreadValues({backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, (e4.vars || e4).palette.action.selectedOpacity)}, !e4.focusVisible && {[`&.${jn.focusVisible}`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.focusOpacity}`)}}), [`&.${jn.selected}:hover`]: {backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, `${(e4.vars || e4).palette.action.selectedOpacity} + ${(e4.vars || e4).palette.action.hoverOpacity}`), "@media (hover: none)": {backgroundColor: e4.alpha((e4.vars || e4).palette.primary.main, (e4.vars || e4).palette.action.selectedOpacity)}}}), e4.focusVisible ? Ke(1) : {[`&.${jn.focusVisible}`]: {backgroundColor: (e4.vars || e4).palette.action.focus}}), {[`&.${jn.disabled}`]: {opacity: (e4.vars || e4).palette.action.disabledOpacity}, [`& + .${dc.root}`]: {marginTop: e4.spacing(1), marginBottom: e4.spacing(1)}, [`& + .${dc.inset}`]: {marginLeft: 52}, [`& .${cl.root}`]: {marginTop: 0, marginBottom: 0}, [`& .${cl.inset}`]: {paddingLeft: 36}, [`& .${ol.root}`]: {minWidth: 36}, variants: [{props: ({ownerState: e5}) => !e5.disableGutters, style: {paddingLeft: 16, paddingRight: 16}}, {props: ({ownerState: e5}) => e5.divider, style: {borderBottom: `1px solid ${(e4.vars || e4).palette.divider}`, backgroundClip: `padding-box`}}, {props: ({ownerState: e5}) => !e5.dense, style: {[e4.breakpoints.up(`sm`)]: {minHeight: `auto`}}}, {props: ({ownerState: e5}) => e5.dense, style: __spreadProps(__spreadValues({minHeight: 32, paddingTop: 4, paddingBottom: 4}, e4.typography.body2), {[`& .${ol.root} svg`]: {fontSize: `1.25rem`}})}]}))), ql = h(function(e4, t2) {
  let n2 = Y({props: e4, name: `MuiMenuItem`}), _a2 = n2, {autoFocus: r2 = false, component: i2 = `li`, dense: a2 = false, divider: o2 = false, disableGutters: s2 = false, focusVisibleClassName: l2, role: u2 = `menuitem`, tabIndex: f2, className: p2} = _a2, m2 = __objRest(_a2, ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"]), h2 = u2 === `menuitemcheckbox` || u2 === `menuitemradio` ? !!n2.selected : void 0, g2 = Fl(), _2 = d(Vc), v2 = c(() => ({dense: a2 || _2.dense || false, disableGutters: s2}), [_2.dense, a2, s2]), y2 = Rl(), b2 = Un(), x2 = y2.suppressInitialFocusVisible, S2 = y2.itemsFocusableWhenDisabled, T2 = C(null);
  $t(() => {
    r2 && T2.current && Nl(T2.current, g2);
  }, [r2]);
  let E2 = __spreadProps(__spreadValues({}, n2), {dense: v2.dense, divider: o2, disableGutters: s2}), D2 = Gl(n2), _b = D2, {root: O2} = _b, k2 = __objRest(_b, ["root"]), A2 = hl({id: b2, ref: t2, disabled: n2.disabled, focusableWhenDisabled: S2, selected: n2.selected}), j2 = Qt(T2, A2.ref), M2;
  return f2 === void 0 ? y2.variant === `selectedMenu` ? M2 = A2.tabIndex : (!n2.disabled || S2) && (M2 = -1) : M2 = f2, w(Vc.Provider, {value: v2, children: w(Kl, __spreadProps(__spreadValues({ref: j2, role: u2, "aria-checked": h2, tabIndex: M2, component: i2, internalNativeButton: false, focusableWhenDisabled: S2, suppressFocusVisible: x2, focusVisibleClassName: U(D2.focusVisible, l2), className: U(D2.root, p2)}, m2), {ownerState: E2, classes: k2}))});
}), Jl = {border: 0, clipPath: `inset(50%)`, height: `1px`, margin: `-1px`, overflow: `hidden`, padding: 0, position: `absolute`, whiteSpace: `nowrap`, width: `1px`}, Yl = se({themeId: we});
export {
  Ls as $,
  lt as $n,
  Un as $t,
  Ac as A,
  Y as An,
  gi as At,
  lc as B,
  Wt as Bn,
  Nr as Bt,
  Uc as C,
  ln as Cn,
  ki as Ct,
  jc as D,
  $t as Dn,
  Si as Dt,
  Lc as E,
  en as En,
  wi as Et,
  gc as F,
  Yt as Fn,
  Xr as Ft,
  nc as G,
  Bt as Gn,
  Z as Gt,
  ac as H,
  Ut as Hn,
  Sr as Ht,
  pc as I,
  Jt as In,
  Yr as It,
  Zs as J,
  Ot as Jn,
  fr as Jt,
  $s as K,
  Rt as Kn,
  hr as Kt,
  fc as L,
  Kt as Ln,
  Fr as Lt,
  wc as M,
  q as Mn,
  ii as Mt,
  Sc as N,
  Zt as Nn,
  ri as Nt,
  Mc as O,
  Qt as On,
  _i as Ot,
  bc as P,
  Xt as Pn,
  $r as Pt,
  Hs as Q,
  ut as Qn,
  Wn as Qt,
  dc as R,
  qt as Rn,
  Q as Rt,
  Hc as S,
  yn as Sn,
  To as St,
  Bc as T,
  nn as Tn,
  Ci as Tt,
  ic as U,
  Ht as Un,
  vr as Ut,
  oc as V,
  K as Vn,
  Cr as Vt,
  rc as W,
  Vt as Wn,
  yr as Wt,
  Ws as X,
  Ct as Xn,
  Kn as Xt,
  Gs as Y,
  Dt as Yn,
  er as Yt,
  Us as Z,
  pt as Zn,
  Gn as Zt,
  Yc as _,
  Sn as _n,
  zo as _t,
  Il as a,
  Pn as an,
  we as ar,
  fs as at,
  Jc as b,
  Cn as bn,
  Oo as bt,
  ml as c,
  Mn as cn,
  xe as cr,
  ns as ct,
  sl as d,
  On as dn,
  ve as dr,
  Zo as dt,
  Hn as en,
  nt as er,
  Rs as et,
  cl as f,
  kn as fn,
  _e as fr,
  Xo as ft,
  $c as g,
  wn as gn,
  Vo as gt,
  il as h,
  Tn as hn,
  $ as ht,
  Ul as i,
  Rn as in,
  We as ir,
  xs as it,
  Oc as j,
  J as jn,
  ai as jt,
  kc as k,
  X as kn,
  vi as kt,
  ll as l,
  An as ln,
  be as lr,
  ts as lt,
  ol as m,
  En as mn,
  Ko as mt,
  Jl as n,
  Bn as nn,
  Ge as nr,
  Cs as nt,
  Fl as o,
  Fn as on,
  Ce as or,
  is as ot,
  al as p,
  Dn as pn,
  ge as pr,
  Yo as pt,
  Qs as q,
  kt as qn,
  mr as qt,
  ql as r,
  zn as rn,
  Ke as rr,
  Ss as rt,
  hl as s,
  Nn as sn,
  Se as sr,
  rs as st,
  Yl as t,
  Vn as tn,
  Qe as tr,
  js as tt,
  ul as u,
  jn as un,
  ye as ur,
  es as ut,
  Xc as v,
  bn as vn,
  ko as vt,
  Vc as w,
  an as wn,
  Oi as wt,
  Kc as x,
  vn as xn,
  Eo as xt,
  qc as y,
  xn as yn,
  Ao as yt,
  uc as z,
  Gt as zn,
  Mr as zt
};
