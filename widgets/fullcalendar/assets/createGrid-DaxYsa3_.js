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
import {T as e, n as t, o as n, s as r, t as i, w as a} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js";
import {n as o} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CE8M302w.js";
import {_ as s, f as c, i as l, o as u, r as d, u as f, v as p, yt as m} from "./useMediaQuery-H8Q1C5b6.js";
e();
var h = `mode`, g = `color-scheme`, _ = `data-color-scheme`, v = __spreadValues({}, a).useSyncExternalStore, y = () => () => {
};
function b() {
  return v === void 0 || v(y, () => false, () => true);
}
function x(e2) {
  let {defaultMode: t2 = `system`, defaultLightColorScheme: n2 = `light`, defaultDarkColorScheme: r2 = `dark`, modeStorageKey: i2 = h, colorSchemeStorageKey: a2 = g, attribute: s2 = _, colorSchemeNode: c2 = `document.documentElement`, nonce: l2} = e2 || {}, u2 = ``, d2 = s2;
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
  return o(`script`, {suppressHydrationWarning: true, nonce: typeof window > `u` ? l2 : ``, dangerouslySetInnerHTML: {__html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i2}') || '${t2}';
  const dark = localStorage.getItem('${a2}-dark') || '${r2}';
  const light = localStorage.getItem('${a2}-light') || '${n2}';
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
function S(e2) {
  return b() ? x(e2) : null;
}
var C = u(), w = (e2, t2) => e2.filter((e3) => t2.includes(e3)), T = (e2, t2, n2) => {
  let r2 = e2.keys[0];
  Array.isArray(t2) ? t2.forEach((t3, r3) => {
    n2((t4, n3) => {
      r3 <= e2.keys.length - 1 && (r3 === 0 ? Object.assign(t4, n3) : t4[e2.up(e2.keys[r3])] = n3);
    }, t3);
  }) : t2 && typeof t2 == `object` ? (Object.keys(t2).length > e2.keys.length ? e2.keys : w(e2.keys, Object.keys(t2))).forEach((i2) => {
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
function E(e2) {
  return `--Grid-${e2}Spacing`;
}
function D(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
var O = `--Grid-columns`, k = `--Grid-parent-columns`, A = ({theme: e2, ownerState: t2}) => {
  let n2 = {};
  return T(e2.breakpoints, t2.size, (e3, t3) => {
    let r2 = {};
    t3 === `grow` && (r2 = {flexBasis: 0, flexGrow: 1, maxWidth: `100%`}), t3 === `auto` && (r2 = {flexBasis: `auto`, flexGrow: 0, flexShrink: 0, maxWidth: `none`, width: `auto`}), typeof t3 == `number` && (r2 = {flexGrow: 0, flexBasis: `auto`, width: `calc(100% * ${t3} / var(${k}) - (var(${k}) - ${t3}) * (var(${D(`column`)}) / var(${k})))`}), e3(n2, r2);
  }), n2;
}, j = ({theme: e2, ownerState: t2}) => {
  let n2 = {};
  return T(e2.breakpoints, t2.offset, (e3, t3) => {
    let r2 = {};
    t3 === `auto` && (r2 = {marginLeft: `auto`}), typeof t3 == `number` && (r2 = {marginLeft: t3 === 0 ? `0px` : `calc(100% * ${t3} / var(${k}) + var(${D(`column`)}) * ${t3} / var(${k}))`}), e3(n2, r2);
  }), n2;
}, M = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {[O]: 12};
  return T(e2.breakpoints, t2.columns, (e3, t3) => {
    let r2 = t3 ?? 12;
    e3(n2, {[O]: r2, "> *": {[k]: r2}});
  }), n2;
}, N = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {};
  return T(e2.breakpoints, t2.rowSpacing, (t3, r2) => {
    let i2 = typeof r2 == `string` ? r2 : e2.spacing?.(r2);
    t3(n2, {[E(`row`)]: i2, "> *": {[D(`row`)]: i2}});
  }), n2;
}, P = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {};
  return T(e2.breakpoints, t2.columnSpacing, (t3, r2) => {
    let i2 = typeof r2 == `string` ? r2 : e2.spacing?.(r2);
    t3(n2, {[E(`column`)]: i2, "> *": {[D(`column`)]: i2}});
  }), n2;
}, F = ({theme: e2, ownerState: t2}) => {
  if (!t2.container)
    return {};
  let n2 = {};
  return T(e2.breakpoints, t2.direction, (e3, t3) => {
    e3(n2, {flexDirection: t3});
  }), n2;
}, I = ({ownerState: e2}) => __spreadValues({minWidth: 0, boxSizing: `border-box`}, e2.container && __spreadProps(__spreadValues({display: `flex`, flexWrap: `wrap`}, e2.wrap && e2.wrap !== `wrap` && {flexWrap: e2.wrap}), {gap: `var(${E(`row`)}) var(${E(`column`)})`})), L = (e2) => {
  let t2 = [];
  return Object.entries(e2).forEach(([e3, n2]) => {
    n2 !== false && n2 !== void 0 && t2.push(`grid-${e3}-${String(n2)}`);
  }), t2;
}, R = (e2, t2 = `xs`) => {
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
}, z = (e2) => e2 === void 0 ? [] : typeof e2 == `object` ? Object.entries(e2).map(([e3, t2]) => `direction-${e3}-${t2}`) : [`direction-xs-${String(e2)}`];
e();
var B = p(), V = C(`div`, {name: `MuiGrid`, slot: `Root`});
function H(e2) {
  return l({props: e2, name: `MuiGrid`, defaultTheme: B});
}
function U(e2 = {}) {
  let {createStyledComponent: a2 = V, useThemeProps: l2 = H, useTheme: u2 = s, componentName: p2 = `MuiGrid`} = e2, h2 = (e3, t2) => {
    let {container: n2, direction: r2, spacing: i2, wrap: a3, size: o2} = e3, s2 = {root: [`root`, n2 && `container`, a3 !== `wrap` && `wrap-xs-${String(a3)}`, ...z(r2), ...L(o2), ...n2 ? R(i2, t2.breakpoints.keys[0]) : []]};
    return f(s2, (e4) => c(p2, e4), {});
  };
  function g2(e3, t2, n2 = () => true) {
    let r2 = {};
    return e3 === null || (Array.isArray(e3) ? e3.forEach((e4, i2) => {
      e4 !== null && n2(e4) && t2.keys[i2] && (r2[t2.keys[i2]] = e4);
    }) : typeof e3 == `object` ? Object.keys(e3).forEach((t3) => {
      let i2 = e3[t3];
      i2 != null && n2(i2) && (r2[t3] = i2);
    }) : r2[t2.keys[0]] = e3), r2;
  }
  let _2 = a2(M, P, N, A, F, I, j), v2 = n(function(e3, n2) {
    let a3 = u2(), s2 = l2(e3), _a = s2, {className: c2, children: f2, columns: p3 = 12, container: v3 = false, component: y2 = `div`, direction: b2 = `row`, wrap: x2 = `wrap`, size: S2 = {}, offset: C2 = {}, spacing: w2 = 0, rowSpacing: T2 = w2, columnSpacing: E2 = w2, unstable_level: D2 = 0} = _a, O2 = __objRest(_a, ["className", "children", "columns", "container", "component", "direction", "wrap", "size", "offset", "spacing", "rowSpacing", "columnSpacing", "unstable_level"]), k2 = g2(S2, a3.breakpoints, (e4) => e4 !== false), A2 = g2(C2, a3.breakpoints), j2 = e3.columns ?? (D2 ? void 0 : p3), M2 = e3.spacing ?? (D2 ? void 0 : w2), N2 = e3.rowSpacing ?? e3.spacing ?? (D2 ? void 0 : T2), P2 = e3.columnSpacing ?? e3.spacing ?? (D2 ? void 0 : E2), F2 = __spreadProps(__spreadValues({}, s2), {level: D2, columns: j2, container: v3, direction: b2, wrap: x2, spacing: M2, rowSpacing: N2, columnSpacing: P2, size: k2, offset: A2}), I2 = h2(F2, a3);
    return o(_2, __spreadProps(__spreadValues({ref: n2, as: y2, ownerState: F2, className: m(I2.root, c2)}, O2), {children: i.map(f2, (e4) => r(e4) && d(e4, [`Grid`]) && v3 && e4.props.container ? t(e4, {unstable_level: e4.props?.unstable_level ?? D2 + 1}) : e4)}));
  });
  return v2.muiName = `Grid`, v2;
}
export {
  T as a,
  g as c,
  x as d,
  R as i,
  h as l,
  z as n,
  C as o,
  L as r,
  _ as s,
  U as t,
  S as u
};
