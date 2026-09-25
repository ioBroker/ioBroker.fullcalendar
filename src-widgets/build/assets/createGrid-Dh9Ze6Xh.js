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
import {n as e, o as t, s as n, t as r, w as i} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js";
import {n as a} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-dKY8wLF8.js";
import {_ as o, f as s, i as c, o as l, r as u, u as d, v as f, yt as p} from "./useMediaQuery-iAz86eG4.js";
var m = `mode`, h = `color-scheme`, g = `data-color-scheme`, _ = __spreadValues({}, i).useSyncExternalStore, v = () => () => {
};
function y() {
  return _ === void 0 || _(v, () => false, () => true);
}
function b(e2) {
  let {defaultMode: t2 = `system`, defaultLightColorScheme: n2 = `light`, defaultDarkColorScheme: r2 = `dark`, modeStorageKey: i2 = m, colorSchemeStorageKey: o2 = h, attribute: s2 = g, colorSchemeNode: c2 = `document.documentElement`, nonce: l2} = e2 || {}, u2 = ``, d2 = s2;
  if (s2 === `class` && (d2 = `.%s`), s2 === `data` && (d2 = `[data-%s]`), d2.startsWith(`.`)) {
    let e3 = d2.substring(1);
    u2 += `${c2}.classList.remove('${e3}'.replace('%s', light), '${e3}'.replace('%s', dark));
      ${c2}.classList.add('${e3}'.replace('%s', colorScheme));`;
  }
  let f2 = d2.match(/\[([^[\]]+)\]/);
  if (f2) {
    let [e3, t3] = f2[1].split(`=`);
    t3 || (u2 += `${c2}.removeAttribute('${e3}'.replace('%s', light));
      ${c2}.removeAttribute('${e3}'.replace('%s', dark));`), u2 += `
      ${c2}.setAttribute('${e3}'.replace('%s', colorScheme), ${t3 ? `${t3}.replace('%s', colorScheme)` : `""`});`;
  } else
    d2 !== `.%s` && (u2 += `${c2}.setAttribute('${d2}', colorScheme);`);
  return a(`script`, {suppressHydrationWarning: true, nonce: typeof window > `u` ? l2 : ``, dangerouslySetInnerHTML: {__html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i2}') || '${t2}';
  const dark = localStorage.getItem('${o2}-dark') || '${r2}';
  const light = localStorage.getItem('${o2}-light') || '${n2}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u2}
  }
} catch(e){}})();`}}, `mui-color-scheme-init`);
}
function x(e2) {
  return y() ? b(e2) : null;
}
var S = l(), C = (e2, t2) => e2.filter((e3) => t2.includes(e3)), w = (e2, t2, n2) => {
  let r2 = e2.keys[0];
  Array.isArray(t2) ? t2.forEach((t3, r3) => {
    n2((t4, n3) => {
      r3 <= e2.keys.length - 1 && (r3 === 0 ? Object.assign(t4, n3) : t4[e2.up(e2.keys[r3])] = n3);
    }, t3);
  }) : t2 && typeof t2 == `object` ? (Object.keys(t2).length > e2.keys.length ? e2.keys : C(e2.keys, Object.keys(t2))).forEach((i2) => {
    if (e2.keys.includes(i2)) {
      let a2 = t2[i2];
      a2 !== void 0 && n2((t3, n3) => {
        r2 === i2 ? Object.assign(t3, n3) : t3[e2.up(i2)] = n3;
      }, a2);
    }
  }) : (typeof t2 == `number` || typeof t2 == `string`) && n2((e3, t3) => {
    Object.assign(e3, t3);
  }, t2);
};
function T(e2) {
  return `--Grid-${e2}Spacing`;
}
function E(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
var D = `--Grid-columns`, O = `--Grid-parent-columns`, k = ({theme: e2, ownerState: t2}) => {
  let n2 = {};
  return w(e2.breakpoints, t2.size, (e3, t3) => {
    let r2 = {};
    t3 === `grow` && (r2 = {flexBasis: 0, flexGrow: 1, maxWidth: `100%`}), t3 === `auto` && (r2 = {flexBasis: `auto`, flexGrow: 0, flexShrink: 0, maxWidth: `none`, width: `auto`}), typeof t3 == `number` && (r2 = {flexGrow: 0, flexBasis: `auto`, width: `calc(100% * ${t3} / var(${O}) - (var(${O}) - ${t3}) * (var(${E(`column`)}) / var(${O})))`}), e3(n2, r2);
  }), n2;
}, A = ({theme: e2, ownerState: t2}) => {
  let n2 = {};
  return w(e2.breakpoints, t2.offset, (e3, t3) => {
    let r2 = {};
    t3 === `auto` && (r2 = {marginLeft: `auto`}), typeof t3 == `number` && (r2 = {marginLeft: t3 === 0 ? `0px` : `calc(100% * ${t3} / var(${O}) + var(${E(`column`)}) * ${t3} / var(${O}))`}), e3(n2, r2);
  }), n2;
}, j = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {[D]: 12};
  return w(e2.breakpoints, t2.columns, (e3, t3) => {
    let r2 = t3 ?? 12;
    e3(n2, {[D]: r2, "> *": {[O]: r2}});
  }), n2;
}, M = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {};
  return w(e2.breakpoints, t2.rowSpacing, (t3, r2) => {
    let i2 = typeof r2 == `string` ? r2 : e2.spacing?.(r2);
    t3(n2, {[T(`row`)]: i2, "> *": {[E(`row`)]: i2}});
  }), n2;
}, N = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {};
  return w(e2.breakpoints, t2.columnSpacing, (t3, r2) => {
    let i2 = typeof r2 == `string` ? r2 : e2.spacing?.(r2);
    t3(n2, {[T(`column`)]: i2, "> *": {[E(`column`)]: i2}});
  }), n2;
}, P = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {};
  return w(e2.breakpoints, t2.direction, (e3, t3) => {
    e3(n2, {flexDirection: t3});
  }), n2;
}, F = ({ownerState: e2}) => __spreadValues({minWidth: 0, boxSizing: `border-box`}, e2.container && __spreadProps(__spreadValues({display: `flex`, flexWrap: `wrap`}, e2.wrap && e2.wrap !== `wrap` && {flexWrap: e2.wrap}), {gap: `var(${T(`row`)}) var(${T(`column`)})`})), I = (e2) => {
  let t2 = [];
  return Object.entries(e2).forEach(([e3, n2]) => {
    n2 !== false && n2 !== void 0 && t2.push(`grid-${e3}-${String(n2)}`);
  }), t2;
}, L = (e2, t2 = `xs`) => {
  function n2(e3) {
    return e3 === void 0 ? false : typeof e3 == `string` && !Number.isNaN(Number(e3)) || typeof e3 == `number` && e3 > 0;
  }
  if (n2(e2))
    return [`spacing-${t2}-${String(e2)}`];
  if (typeof e2 == `object` && !Array.isArray(e2)) {
    let t3 = [];
    return Object.entries(e2).forEach(([e3, r2]) => {
      n2(r2) && t3.push(`spacing-${e3}-${String(r2)}`);
    }), t3;
  }
  return [];
}, R = (e2) => e2 === void 0 ? [] : typeof e2 == `object` ? Object.entries(e2).map(([e3, t2]) => `direction-${e3}-${t2}`) : [`direction-xs-${String(e2)}`], z = f(), B = S(`div`, {name: `MuiGrid`, slot: `Root`});
function V(e2) {
  return c({props: e2, name: `MuiGrid`, defaultTheme: z});
}
function H(i2 = {}) {
  let {createStyledComponent: c2 = B, useThemeProps: l2 = V, useTheme: f2 = o, componentName: m2 = `MuiGrid`} = i2, h2 = (e2, t2) => {
    let {container: n2, direction: r2, spacing: i3, wrap: a2, size: o2} = e2, c3 = {root: [`root`, n2 && `container`, a2 !== `wrap` && `wrap-xs-${String(a2)}`, ...R(r2), ...I(o2), ...n2 ? L(i3, t2.breakpoints.keys[0]) : []]};
    return d(c3, (e3) => s(m2, e3), {});
  };
  function g2(e2, t2, n2 = () => true) {
    let r2 = {};
    return e2 === null || (Array.isArray(e2) ? e2.forEach((e3, i3) => {
      e3 !== null && n2(e3) && t2.keys[i3] && (r2[t2.keys[i3]] = e3);
    }) : typeof e2 == `object` ? Object.keys(e2).forEach((t3) => {
      let i3 = e2[t3];
      i3 != null && n2(i3) && (r2[t3] = i3);
    }) : r2[t2.keys[0]] = e2), r2;
  }
  let _2 = c2(j, N, M, k, P, F, A), v2 = t(function(t2, i3) {
    let o2 = f2(), s2 = l2(t2), _a = s2, {className: c3, children: d2, columns: m3 = 12, container: v3 = false, component: y2 = `div`, direction: b2 = `row`, wrap: x2 = `wrap`, size: S2 = {}, offset: C2 = {}, spacing: w2 = 0, rowSpacing: T2 = w2, columnSpacing: E2 = w2, unstable_level: D2 = 0} = _a, O2 = __objRest(_a, ["className", "children", "columns", "container", "component", "direction", "wrap", "size", "offset", "spacing", "rowSpacing", "columnSpacing", "unstable_level"]), k2 = g2(S2, o2.breakpoints, (e2) => e2 !== false), A2 = g2(C2, o2.breakpoints), j2 = t2.columns ?? (D2 ? void 0 : m3), M2 = t2.spacing ?? (D2 ? void 0 : w2), N2 = t2.rowSpacing ?? t2.spacing ?? (D2 ? void 0 : T2), P2 = t2.columnSpacing ?? t2.spacing ?? (D2 ? void 0 : E2), F2 = __spreadProps(__spreadValues({}, s2), {level: D2, columns: j2, container: v3, direction: b2, wrap: x2, spacing: M2, rowSpacing: N2, columnSpacing: P2, size: k2, offset: A2}), I2 = h2(F2, o2);
    return a(_2, __spreadProps(__spreadValues({ref: i3, as: y2, ownerState: F2, className: p(I2.root, c3)}, O2), {children: r.map(d2, (t3) => n(t3) && u(t3, [`Grid`]) && v3 && t3.props.container ? e(t3, {unstable_level: t3.props?.unstable_level ?? D2 + 1}) : t3)}));
  });
  return v2.muiName = `Grid`, v2;
}
export {
  w as a,
  h as c,
  b as d,
  L as i,
  m as l,
  R as n,
  S as o,
  I as r,
  g as s,
  H as t,
  x as u
};
