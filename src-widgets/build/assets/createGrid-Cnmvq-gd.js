import { N as e, d as t, g as n, h as r, o as i, u as a } from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-oRrqkiS5.js";
import { _ as o, f as s, i as c, o as l, r as u, u as d, v as f, yt as p } from "./useMediaQuery-C07Y22na.js";
var m = `mode`, h = `color-scheme`, g = `data-color-scheme`, _ = { ...e }.useSyncExternalStore, v = () => () => {
};
function y(e2) {
  return JSON.stringify(e2).replace(/</g, `\\u003c`).replace(/\u2028/g, `\\u2028`).replace(/\u2029/g, `\\u2029`);
}
function b(e2, t2) {
  let n2 = e2.split(`%s`), r2 = [];
  for (let e3 = 0; e3 < n2.length; e3 += 1) e3 > 0 && r2.push(t2), n2[e3] && r2.push(y(n2[e3]));
  return r2.join(` + `) || `""`;
}
function x() {
  return _ === void 0 || _(v, () => false, () => true);
}
function S(e2) {
  let { defaultMode: t2 = `system`, defaultLightColorScheme: n2 = `light`, defaultDarkColorScheme: r2 = `dark`, modeStorageKey: a2 = m, colorSchemeStorageKey: o2 = h, attribute: s2 = g, colorSchemeNode: c2 = `document.documentElement`, nonce: l2 } = e2 || {}, u2 = ``, d2 = s2;
  if (s2 === `class` && (d2 = `.%s`), s2 === `data` && (d2 = `[data-%s]`), d2.startsWith(`.`)) {
    let e3 = d2.substring(1);
    u2 += `${c2}.classList.remove(${b(e3, `light`)}, ${b(e3, `dark`)});
      ${c2}.classList.add(${b(e3, `colorScheme`)});`;
  }
  let f2 = d2.match(/\[([^[\]]+)\]/);
  if (f2) {
    let e3 = f2[1].indexOf(`=`), t3 = e3 === -1 ? f2[1] : f2[1].slice(0, e3), n3 = e3 === -1 ? void 0 : f2[1].slice(e3 + 1);
    n3 || (u2 += `${c2}.removeAttribute(${b(t3, `light`)});
      ${c2}.removeAttribute(${b(t3, `dark`)});`);
    let r3 = n3 ? b(n3.replace(/^(['"])(.*)\1$/, `$2`), `colorScheme`) : `""`;
    u2 += `
      ${c2}.setAttribute(${b(t3, `colorScheme`)}, ${r3});`;
  } else d2.startsWith(`.`) || (u2 += `${c2}.setAttribute(${y(d2)}, colorScheme);`);
  return i(`script`, { suppressHydrationWarning: true, nonce: typeof window > `u` ? l2 : ``, dangerouslySetInnerHTML: { __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem(${y(a2)}) || ${y(t2)};
  const dark = localStorage.getItem(${y(`${o2}-dark`)}) || ${y(r2)};
  const light = localStorage.getItem(${y(`${o2}-light`)}) || ${y(n2)};
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
} catch(e){}})();` } }, `mui-color-scheme-init`);
}
function C(e2) {
  return x() ? S(e2) : null;
}
var w = l(), T = (e2, t2) => e2.filter((e3) => t2.includes(e3)), E = (e2, t2, n2) => {
  let r2 = e2.keys[0];
  Array.isArray(t2) ? t2.forEach((t3, r3) => {
    n2((t4, n3) => {
      r3 <= e2.keys.length - 1 && (r3 === 0 ? Object.assign(t4, n3) : t4[e2.up(e2.keys[r3])] = n3);
    }, t3);
  }) : t2 && typeof t2 == `object` ? (Object.keys(t2).length > e2.keys.length ? e2.keys : T(e2.keys, Object.keys(t2))).forEach((i2) => {
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
function D(e2) {
  return `--Grid-${e2}Spacing`;
}
function O(e2) {
  return `--Grid-parent-${e2}Spacing`;
}
var k = `--Grid-columns`, A = `--Grid-parent-columns`, j = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return E(e2.breakpoints, t2.size, (e3, t3) => {
    let r2 = {};
    t3 === `grow` && (r2 = { flexBasis: 0, flexGrow: 1, maxWidth: `100%` }), t3 === `auto` && (r2 = { flexBasis: `auto`, flexGrow: 0, flexShrink: 0, maxWidth: `none`, width: `auto` }), typeof t3 == `number` && (r2 = { flexGrow: 0, flexBasis: `auto`, width: `calc(100% * ${t3} / var(${A}) - (var(${A}) - ${t3}) * (var(${O(`column`)}) / var(${A})))` }), e3(n2, r2);
  }), n2;
}, M = ({ theme: e2, ownerState: t2 }) => {
  let n2 = {};
  return E(e2.breakpoints, t2.offset, (e3, t3) => {
    let r2 = {};
    t3 === `auto` && (r2 = { marginLeft: `auto` }), typeof t3 == `number` && (r2 = { marginLeft: t3 === 0 ? `0px` : `calc(100% * ${t3} / var(${A}) + var(${O(`column`)}) * ${t3} / var(${A}))` }), e3(n2, r2);
  }), n2;
}, N = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = { [k]: 12 };
  return E(e2.breakpoints, t2.columns, (e3, t3) => {
    let r2 = t3 ?? 12;
    e3(n2, { [k]: r2, "> *": { [A]: r2 } });
  }), n2;
}, P = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return E(e2.breakpoints, t2.rowSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [D(`row`)]: i2, "> *": { [O(`row`)]: i2 } });
  }), n2;
}, F = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return E(e2.breakpoints, t2.columnSpacing, (t3, r2) => {
    var _a;
    let i2 = typeof r2 == `string` ? r2 : (_a = e2.spacing) == null ? void 0 : _a.call(e2, r2);
    t3(n2, { [D(`column`)]: i2, "> *": { [O(`column`)]: i2 } });
  }), n2;
}, I = ({ theme: e2, ownerState: t2 }) => {
  if (!t2.container) return {};
  let n2 = {};
  return E(e2.breakpoints, t2.direction, (e3, t3) => {
    e3(n2, { flexDirection: t3 });
  }), n2;
}, L = ({ ownerState: e2 }) => ({ minWidth: 0, boxSizing: `border-box`, ...e2.container && { display: `flex`, flexWrap: `wrap`, ...e2.wrap && e2.wrap !== `wrap` && { flexWrap: e2.wrap }, gap: `var(${D(`row`)}) var(${D(`column`)})` } }), R = (e2) => {
  let t2 = [];
  return Object.entries(e2).forEach(([e3, n2]) => {
    n2 !== false && n2 !== void 0 && t2.push(`grid-${e3}-${String(n2)}`);
  }), t2;
}, z = (e2, t2 = `xs`) => {
  function n2(e3) {
    return e3 === void 0 ? false : typeof e3 == `string` && !Number.isNaN(Number(e3)) || typeof e3 == `number` && e3 > 0;
  }
  if (n2(e2)) return [`spacing-${t2}-${String(e2)}`];
  if (typeof e2 == `object` && !Array.isArray(e2)) {
    let t3 = [];
    return Object.entries(e2).forEach(([e3, r2]) => {
      n2(r2) && t3.push(`spacing-${e3}-${String(r2)}`);
    }), t3;
  }
  return [];
}, B = (e2) => e2 === void 0 ? [] : typeof e2 == `object` ? Object.entries(e2).map(([e3, t2]) => `direction-${e3}-${t2}`) : [`direction-xs-${String(e2)}`], V = f(), H = w(`div`, { name: `MuiGrid`, slot: `Root` });
function U(e2) {
  return c({ props: e2, name: `MuiGrid`, defaultTheme: V });
}
function W(e2 = {}) {
  let { createStyledComponent: c2 = H, useThemeProps: l2 = U, useTheme: f2 = o, componentName: m2 = `MuiGrid` } = e2, h2 = (e3, t2) => {
    let { container: n2, direction: r2, spacing: i2, wrap: a2, size: o2 } = e3, c3 = { root: [`root`, n2 && `container`, a2 !== `wrap` && `wrap-xs-${String(a2)}`, ...B(r2), ...R(o2), ...n2 ? z(i2, t2.breakpoints.keys[0]) : []] };
    return d(c3, (e4) => s(m2, e4), {});
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
  let _2 = c2(N, F, P, j, I, L, M), v2 = r(function(e3, r2) {
    let o2 = f2(), s2 = l2(e3), { className: c3, children: d2, columns: m3 = 12, container: v3 = false, component: y2 = `div`, direction: b2 = `row`, wrap: x2 = `wrap`, size: S2 = {}, offset: C2 = {}, spacing: w2 = 0, rowSpacing: T2 = w2, columnSpacing: E2 = w2, unstable_level: D2 = 0, ...O2 } = s2, k2 = g2(S2, o2.breakpoints, (e4) => e4 !== false), A2 = g2(C2, o2.breakpoints), j2 = e3.columns ?? (D2 ? void 0 : m3), M2 = e3.spacing ?? (D2 ? void 0 : w2), N2 = e3.rowSpacing ?? e3.spacing ?? (D2 ? void 0 : T2), P2 = e3.columnSpacing ?? e3.spacing ?? (D2 ? void 0 : E2), F2 = { ...s2, level: D2, columns: j2, container: v3, direction: b2, wrap: x2, spacing: M2, rowSpacing: N2, columnSpacing: P2, size: k2, offset: A2 }, I2 = h2(F2, o2);
    return i(_2, { ref: r2, as: y2, ownerState: F2, className: p(I2.root, c3), ...O2, children: a.map(d2, (e4) => {
      var _a;
      return n(e4) && u(e4, [`Grid`]) && v3 && e4.props.container ? t(e4, { unstable_level: ((_a = e4.props) == null ? void 0 : _a.unstable_level) ?? D2 + 1 }) : e4;
    }) });
  });
  return v2.muiName = `Grid`, v2;
}
export {
  E as a,
  h as c,
  S as d,
  z as i,
  m as l,
  B as n,
  w as o,
  R as r,
  g as s,
  W as t,
  C as u
};
