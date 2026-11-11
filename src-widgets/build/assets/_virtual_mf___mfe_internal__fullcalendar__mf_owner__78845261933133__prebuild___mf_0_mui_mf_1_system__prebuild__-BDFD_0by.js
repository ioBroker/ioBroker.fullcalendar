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
import {n as e} from "./rolldown-runtime-COiEfhsA.js";
import {E as t, Gt as n, Jt as r, Kt as i, O as a, S as o, Xt as s, b as c, d as l, f as u, h as d, k as f, lt as p, o as m, qt as h, s as g, u as _, ut as v, x as y, y as b} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js";
import {n as x, t as S} from "./emotion-cache.browser.esm--RCZvsJA.js";
import {$ as C, $t as w, A as T, At as E, B as D, Bt as O, C as ee, Ct as te, D as ne, Dt as re, E as ie, Et as k, F as ae, Ft as A, G as j, Gt as oe, H as se, Ht as M, I as N, It as P, J as F, Jt as ce, K as I, Kt as le, L as ue, Lt as de, M as fe, Mt as pe, N as me, Nt as L, O as he, Ot as R, P as z, Pt as B, Q as V, Qt as H, R as U, Rt as W, S as G, St as K, T as ge, Tt as _e, U as ve, Ut as ye, V as be, Vt as xe, W as Se, Wt as Ce, X as we, Xt as Te, Y as Ee, Yt as De, Z as Oe, Zt as ke, _ as Ae, a as je, an as Me, at as Ne, b as Pe, bt as Fe, c as Ie, cn as Le, ct as Re, d as q, dn as ze, dt as Be, en as Ve, et as He, f as J, ft as Y, g as Ue, gt as We, h as Ge, ht as Ke, i as qe, in as Je, it as Ye, j as Xe, jt as Ze, k as Qe, kt as $e, l as et, ln as tt, lt as nt, m as rt, mt as it, n as at, nn as ot, nt as st, o as ct, on as lt, ot as ut, p as dt, pt as ft, q as pt, qt as mt, rn as ht, rt as gt, s as _t, st as vt, tn as yt, tt as bt, u as xt, un as St, ut as Ct, v as wt, w as Tt, wt as Et, x as Dt, xt as Ot, y as kt, yt as At, z as jt, zt as Mt} from "./useMediaQuery-Cm2kB8Te.js";
import {a as Nt, c as Pt, d as Ft, i as It, l as Lt, n as Rt, o as zt, r as Bt, s as Vt, t as Ht} from "./createGrid-B_cMcaaY.js";
var Ut = {}, X = new Map(), Wt = {insert: void 0}, Gt = (e2, t2) => {
  let n2 = S(e2);
  return n2.sheet = new t2({key: n2.key, nonce: n2.sheet.nonce, container: n2.sheet.container, speedy: n2.sheet.isSpeedy, prepend: n2.sheet.prepend, insertionPoint: n2.sheet.insertionPoint}), n2;
}, Z;
if (typeof document == `object` && (Z = document.querySelector(`[name="emotion-insertion-point"]`), !Z)) {
  Z = document.createElement(`meta`), Z.setAttribute(`name`, `emotion-insertion-point`), Z.setAttribute(`content`, ``);
  let e2 = document.querySelector(`head`);
  e2 && e2.prepend(Z);
}
function Kt(e2, t2) {
  if (e2 || t2) {
    class n2 extends x {
      insert(e3, t3) {
        return Wt.insert ? Wt.insert(e3, t3) : (this.key && this.key.endsWith(`global`) && (this.before = Z), super.insert(e3, t3));
      }
    }
    let r2 = Gt({key: t2 ? `mui` : `css`, insertionPoint: e2 ? Z : void 0}, n2);
    if (t2) {
      let e3 = r2.insert;
      r2.insert = (...t3) => (t3[1].styles.match(/^@layer\s+[^{]*$/) || (t3[1].styles = `@layer mui {${t3[1].styles}}`), e3(...t3));
    }
    return r2;
  }
}
function qt(e2) {
  let {injectFirst: r2, enableCssLayer: i2, children: a2} = e2, o2 = t(() => {
    let e3 = `${r2}-${i2}`;
    if (typeof document == `object` && X.has(e3))
      return X.get(e3);
    let t2 = Kt(r2, i2);
    return X.set(e3, t2), t2;
  }, [r2, i2]);
  return o2 ? m(n, {value: o2, children: a2}) : a2;
}
function Jt(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function Yt(e2) {
  let {styles: t2, defaultTheme: n2 = {}} = e2;
  return m(s, {styles: typeof t2 == `function` ? (e3) => t2(Jt(e3) ? n2 : e3) : t2});
}
function Xt(e2) {
  let t2 = Et(e2);
  return e2 !== t2 && t2.styles ? (t2.styles.match(/^@layer\s+[^{]*$/) || (t2.styles = `@layer global{${t2.styles}}`), t2) : e2;
}
function Zt({styles: e2, themeId: t2, defaultTheme: n2 = {}}) {
  let r2 = Ae(n2), i2 = t2 && r2[t2] || r2, a2 = typeof e2 == `function` ? e2(i2) : e2;
  return i2.modularCssLayers && (a2 = Array.isArray(a2) ? a2.map((e3) => Xt(typeof e3 == `function` ? e3(i2) : e3)) : Xt(a2)), m(Yt, {styles: a2});
}
function Qt(e2) {
  let t2 = K(), n2 = Ke() || ``, {modularCssLayers: r2} = e2, i2 = `mui.global, mui.components, mui.theme, mui.custom, mui.sx`;
  return i2 = !r2 || t2 !== null ? `` : typeof r2 == `string` ? r2.replace(/mui(?!\.)/g, i2) : `@layer ${i2};`, te(() => {
    let e3 = document.querySelector(`head`);
    if (!e3)
      return;
    let t3 = e3.firstChild;
    if (i2) {
      if (t3 && t3.hasAttribute?.(`data-mui-layer-order`) && t3.getAttribute(`data-mui-layer-order`) === n2)
        return;
      let r3 = document.createElement(`style`);
      r3.setAttribute(`data-mui-layer-order`, n2), r3.textContent = i2, e3.prepend(r3);
    } else
      e3.querySelector(`style[data-mui-layer-order="${n2}"]`)?.remove();
  }, [i2, n2]), i2 ? m(Zt, {styles: i2}) : null;
}
var $t = {};
function en(e2, n2, r2, i2 = false) {
  return t(() => {
    let t2 = e2 && n2[e2] || n2;
    if (typeof r2 == `function`) {
      let a2 = r2(t2), o2 = e2 ? __spreadProps(__spreadValues({}, n2), {[e2]: a2}) : a2;
      return i2 ? () => o2 : o2;
    }
    return e2 ? __spreadProps(__spreadValues({}, n2), {[e2]: r2}) : __spreadValues(__spreadValues({}, n2), r2);
  }, [e2, n2, r2, i2]);
}
function tn(e2) {
  let {children: t2, theme: n2, themeId: r2} = e2, a2 = K($t), o2 = v() || $t, s2 = en(r2, a2, n2), c2 = en(r2, o2, n2, true), l2 = (r2 ? s2[r2] : s2).direction === `rtl`, u2 = Qt(s2);
  return m(p, {theme: c2, children: m(i.Provider, {value: s2, children: m(Fe, {value: l2, children: g(We, {value: r2 ? s2[r2].components : s2.components, children: [u2, t2]})})})});
}
function nn() {
}
var rn = ({key: e2, storageWindow: t2}) => (!t2 && typeof window < `u` && (t2 = window), {get(n2) {
  if (typeof window > `u`)
    return;
  if (!t2)
    return n2;
  let r2;
  try {
    r2 = t2.localStorage.getItem(e2);
  } catch {
  }
  return r2 || n2;
}, set: (n2) => {
  if (t2)
    try {
      t2.localStorage.setItem(e2, n2);
    } catch {
    }
}, subscribe: (n2) => {
  if (!t2)
    return nn;
  let r2 = (t3) => {
    let r3 = t3.newValue;
    t3.key === e2 && n2(r3);
  };
  return t2.addEventListener(`storage`, r2), () => {
    t2.removeEventListener(`storage`, r2);
  };
}});
function an() {
}
function on(e2) {
  if (typeof window < `u` && typeof window.matchMedia == `function` && e2 === `system`)
    return window.matchMedia(`(prefers-color-scheme: dark)`).matches ? `dark` : `light`;
}
function sn(e2, t2) {
  if (e2.mode === `light` || e2.mode === `system` && e2.systemMode === `light`)
    return t2(`light`);
  if (e2.mode === `dark` || e2.mode === `system` && e2.systemMode === `dark`)
    return t2(`dark`);
}
function cn(e2) {
  return sn(e2, (t2) => {
    if (t2 === `light`)
      return e2.lightColorScheme;
    if (t2 === `dark`)
      return e2.darkColorScheme;
  });
}
function ln(e2) {
  let {defaultMode: n2 = `light`, defaultLightColorScheme: r2, defaultDarkColorScheme: i2, supportedColorSchemes: s2 = [], modeStorageKey: c2 = Lt, colorSchemeStorageKey: l2 = Pt, storageWindow: u2 = typeof window > `u` ? void 0 : window, storageManager: d2 = rn, noSsr: p2 = false} = e2, m2 = s2.join(`,`), h2 = s2.length > 1, g2 = t(() => d2?.({key: c2, storageWindow: u2}), [d2, c2, u2]), _2 = t(() => d2?.({key: `${l2}-light`, storageWindow: u2}), [d2, l2, u2]), v2 = t(() => d2?.({key: `${l2}-dark`, storageWindow: u2}), [d2, l2, u2]), [y2, x2] = f(() => {
    let e3 = g2?.get(n2) || n2, t2 = _2?.get(r2) || r2, a2 = v2?.get(i2) || i2;
    return {mode: e3, systemMode: on(e3), lightColorScheme: t2, darkColorScheme: a2};
  }), [S2, C2] = f(p2 || !h2);
  o(() => {
    C2(true);
  }, []);
  let w2 = cn(y2), T2 = b((e3) => {
    x2((t2) => {
      if (e3 === t2.mode)
        return t2;
      let r3 = e3 ?? n2;
      return g2?.set(r3), __spreadProps(__spreadValues({}, t2), {mode: r3, systemMode: on(r3)});
    });
  }, [g2, n2]), E2 = b((e3) => {
    e3 ? typeof e3 == `string` ? e3 && !m2.includes(e3) ? console.error(`\`${e3}\` does not exist in \`theme.colorSchemes\`.`) : x2((t2) => {
      let n3 = __spreadValues({}, t2);
      return sn(t2, (t3) => {
        t3 === `light` && (_2?.set(e3), n3.lightColorScheme = e3), t3 === `dark` && (v2?.set(e3), n3.darkColorScheme = e3);
      }), n3;
    }) : x2((t2) => {
      let n3 = __spreadValues({}, t2), a2 = e3.light === null ? r2 : e3.light, o2 = e3.dark === null ? i2 : e3.dark;
      return a2 && (m2.includes(a2) ? (n3.lightColorScheme = a2, _2?.set(a2)) : console.error(`\`${a2}\` does not exist in \`theme.colorSchemes\`.`)), o2 && (m2.includes(o2) ? (n3.darkColorScheme = o2, v2?.set(o2)) : console.error(`\`${o2}\` does not exist in \`theme.colorSchemes\`.`)), n3;
    }) : x2((e4) => (_2?.set(r2), v2?.set(i2), __spreadProps(__spreadValues({}, e4), {lightColorScheme: r2, darkColorScheme: i2})));
  }, [m2, _2, v2, r2, i2]), D2 = b((e3) => {
    y2.mode === `system` && x2((t2) => {
      let n3 = e3?.matches ? `dark` : `light`;
      return t2.systemMode === n3 ? t2 : __spreadProps(__spreadValues({}, t2), {systemMode: n3});
    });
  }, [y2.mode]), O2 = a(D2);
  return O2.current = D2, o(() => {
    if (typeof window.matchMedia != `function` || !h2)
      return;
    let e3 = (...e4) => O2.current(...e4), t2 = window.matchMedia(`(prefers-color-scheme: dark)`);
    return t2.addListener(e3), e3(t2), () => {
      t2.removeListener(e3);
    };
  }, [h2]), o(() => {
    if (h2) {
      let e3 = g2?.subscribe((e4) => {
        (!e4 || [`light`, `dark`, `system`].includes(e4)) && T2(e4 || n2);
      }) || an, t2 = _2?.subscribe((e4) => {
        (!e4 || m2.match(e4)) && E2({light: e4});
      }) || an, r3 = v2?.subscribe((e4) => {
        (!e4 || m2.match(e4)) && E2({dark: e4});
      }) || an;
      return () => {
        e3(), t2(), r3();
      };
    }
  }, [E2, T2, m2, n2, u2, h2, g2, _2, v2]), __spreadProps(__spreadValues({}, y2), {mode: S2 ? y2.mode : void 0, systemMode: S2 ? y2.systemMode : void 0, colorScheme: S2 ? w2 : void 0, setMode: T2, setColorScheme: E2});
}
var un = `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function dn(e2) {
  let {themeId: n2, theme: r2 = {}, modeStorageKey: i2 = Lt, colorSchemeStorageKey: s2 = Pt, disableTransitionOnChange: l2 = false, defaultColorScheme: d2, resolveTheme: f2} = e2, p2 = {allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0}, h2 = u(void 0), _2 = () => c(h2) || p2, b2 = {}, x2 = {};
  function S2(e3) {
    let {children: u2, theme: p3, modeStorageKey: _3 = i2, colorSchemeStorageKey: S3 = s2, disableTransitionOnChange: C3 = l2, storageManager: w3, storageWindow: T2 = typeof window > `u` ? void 0 : window, documentNode: E2 = typeof document > `u` ? void 0 : document, colorSchemeNode: D2 = typeof document > `u` ? void 0 : document.documentElement, disableNestedContext: O2 = false, disableStyleSheetGeneration: ee2 = false, defaultMode: ne2 = `system`, forceThemeRerender: re2 = false, noSsr: ie2} = e3, k2 = a(false), ae2 = v(), A2 = c(h2), j2 = !!A2 && !O2, oe2 = t(() => p3 || (typeof r2 == `function` ? r2() : r2), [p3]), se2 = oe2[n2], M2 = se2 || oe2, {colorSchemes: N2 = b2, components: P2 = x2, cssVarPrefix: F2} = M2, ce2 = Object.keys(N2).filter((e4) => !!N2[e4]).join(`,`), I2 = t(() => ce2.split(`,`), [ce2]), le2 = typeof d2 == `string` ? d2 : d2.light, ue2 = typeof d2 == `string` ? d2 : d2.dark, {mode: de2, setMode: fe2, systemMode: pe2, lightColorScheme: me2, darkColorScheme: L2, colorScheme: he2, setColorScheme: R2} = ln({supportedColorSchemes: I2, defaultLightColorScheme: le2, defaultDarkColorScheme: ue2, modeStorageKey: _3, colorSchemeStorageKey: S3, defaultMode: N2[le2] && N2[ue2] ? ne2 : N2[M2.defaultColorScheme]?.palette?.mode || M2.palette?.mode, storageManager: w3, storageWindow: T2, noSsr: ie2}), z2 = de2, B2 = he2;
    j2 && (z2 = A2.mode, B2 = A2.colorScheme);
    let V2 = B2 || M2.defaultColorScheme;
    M2.vars && !re2 && (V2 = M2.defaultColorScheme);
    let H2 = t(() => {
      let e4 = M2.generateThemeVars?.() || M2.vars, t2 = __spreadProps(__spreadValues({}, M2), {components: P2, colorSchemes: N2, cssVarPrefix: F2, vars: e4});
      if (typeof t2.generateSpacing == `function` && (t2.spacing = t2.generateSpacing()), V2) {
        let e5 = N2[V2];
        e5 && typeof e5 == `object` && Object.keys(e5).forEach((n3) => {
          e5[n3] && typeof e5[n3] == `object` ? t2[n3] = __spreadValues(__spreadValues({}, t2[n3]), e5[n3]) : t2[n3] = e5[n3];
        });
      }
      return f2 ? f2(t2) : t2;
    }, [M2, V2, P2, N2, F2]), U2 = M2.colorSchemeSelector;
    te(() => {
      if (B2 && D2 && U2 && U2 !== `media`) {
        let e4 = U2, t2 = U2;
        if (e4 === `class` && (t2 = `.%s`), e4 === `data` && (t2 = `[data-%s]`), e4?.startsWith(`data-`) && !e4.includes(`%s`) && (t2 = `[${e4}="%s"]`), t2.startsWith(`.`))
          D2.classList.remove(...I2.map((e5) => t2.substring(1).replace(`%s`, e5))), D2.classList.add(t2.substring(1).replace(`%s`, B2));
        else {
          let e5 = t2.replace(`%s`, B2).match(/\[([^\]]+)\]/);
          if (e5) {
            let [t3, n3] = e5[1].split(`=`);
            n3 || I2.forEach((e6) => {
              D2.removeAttribute(t3.replace(B2, e6));
            }), D2.setAttribute(t3, n3 ? n3.replace(/"|'/g, ``) : ``);
          } else
            D2.setAttribute(t2, B2);
        }
      }
    }, [B2, U2, D2, I2]), o(() => {
      let e4;
      if (C3 && k2.current && E2) {
        let t2 = E2.createElement(`style`);
        t2.appendChild(E2.createTextNode(un)), E2.head.appendChild(t2), window.getComputedStyle(E2.body), e4 = setTimeout(() => {
          E2.head.removeChild(t2);
        }, 1);
      }
      return () => {
        clearTimeout(e4);
      };
    }, [B2, C3, E2]), o(() => (k2.current = true, () => {
      k2.current = false;
    }), []);
    let W2 = t(() => ({allColorSchemes: I2, colorScheme: B2, darkColorScheme: L2, lightColorScheme: me2, mode: z2, setColorScheme: R2, setMode: fe2, systemMode: pe2}), [I2, B2, L2, me2, z2, R2, fe2, pe2, H2.colorSchemeSelector]), G2 = true;
    (ee2 || M2.cssVariables === false || j2 && ae2?.cssVarPrefix === F2) && (G2 = false);
    let K2 = g(y, {children: [m(tn, {themeId: se2 ? n2 : void 0, theme: H2, children: u2}), G2 && m(Yt, {styles: H2.generateStyleSheets?.() || []})]});
    return j2 ? K2 : m(h2.Provider, {value: W2, children: K2});
  }
  let C2 = typeof d2 == `string` ? d2 : d2.light, w2 = typeof d2 == `string` ? d2 : d2.dark;
  return {CssVarsProvider: S2, useColorScheme: _2, getInitColorSchemeScript: (e3) => Ft(__spreadValues({colorSchemeStorageKey: s2, defaultLightColorScheme: C2, defaultDarkColorScheme: w2, modeStorageKey: i2}, e3))};
}
function fn(_a2) {
  var _b = _a2, {colorSchemeSelector: e2 = `[${Vt}="%s"]`} = _b, t2 = __objRest(_b, ["colorSchemeSelector"]);
  let n2 = t2, r2 = Ge(n2, __spreadProps(__spreadValues({}, t2), {prefix: t2.cssVarPrefix, colorSchemeSelector: e2}));
  return n2.vars = r2.vars, n2.generateThemeVars = r2.generateThemeVars, n2.generateStyleSheets = r2.generateStyleSheets, n2.colorSchemeSelector = e2, n2.getColorSchemeSelector = rt(e2), n2.internal_cache = {}, n2;
}
var pn = (e2) => {
  let t2 = {systemProps: {}, otherProps: {}}, n2 = e2?.theme?.unstable_sxConfig ?? Dt;
  return Object.keys(e2).forEach((r2) => {
    n2[r2] ? t2.systemProps[r2] = e2[r2] : t2.otherProps[r2] = e2[r2];
  }), t2;
};
function mn(e2) {
  let _a2 = e2, {sx: t2} = _a2, n2 = __objRest(_a2, ["sx"]), {systemProps: r2, otherProps: i2} = pn(n2), a2;
  return a2 = Array.isArray(t2) ? [r2, ...t2] : typeof t2 == `function` ? (...e3) => {
    let n3 = t2(...e3);
    return tt(n3) ? __spreadValues(__spreadValues({}, r2), n3) : r2;
  } : __spreadValues(__spreadValues({}, r2), t2), __spreadProps(__spreadValues({}, i2), {sx: a2});
}
var hn = Ht();
function gn(e2) {
  return J(`MuiGrid`, e2);
}
var _n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vn = [`column-reverse`, `column`, `row-reverse`, `row`], yn = [`nowrap`, `wrap-reverse`, `wrap`], Q = [`auto`, `grow`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], bn = q(`MuiGrid`, [`root`, `container`, `item`, ..._n.map((e2) => `spacing-xs-${e2}`), ...vn.map((e2) => `direction-xs-${e2}`), ...yn.map((e2) => `wrap-xs-${e2}`), ...Q.map((e2) => `grid-xs-${e2}`), ...Q.map((e2) => `grid-sm-${e2}`), ...Q.map((e2) => `grid-md-${e2}`), ...Q.map((e2) => `grid-lg-${e2}`), ...Q.map((e2) => `grid-xl-${e2}`)]), xn = P({prop: `displayPrint`, cssProperty: false, transform: (e2) => ({"@media print": {display: e2}})}), Sn = P({prop: `display`}), Cn = P({prop: `overflow`}), wn = P({prop: `textOverflow`}), Tn = P({prop: `visibility`}), En = P({prop: `whiteSpace`}), Dn = Y(xn, Sn, Cn, wn, Tn, En), On = P({prop: `flexBasis`}), kn = P({prop: `flexDirection`}), An = P({prop: `flexWrap`}), jn = P({prop: `justifyContent`}), Mn = P({prop: `alignItems`}), Nn = P({prop: `alignContent`}), Pn = P({prop: `order`}), Fn = P({prop: `flex`}), In = P({prop: `flexGrow`}), Ln = P({prop: `flexShrink`}), Rn = P({prop: `alignSelf`}), zn = P({prop: `justifyItems`}), Bn = P({prop: `justifySelf`}), Vn = Y(On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn), Hn = P({prop: `position`}), Un = P({prop: `zIndex`, themeKey: `zIndex`}), Wn = P({prop: `top`}), Gn = P({prop: `right`}), Kn = P({prop: `bottom`}), qn = P({prop: `left`}), Jn = Y(Hn, Un, Wn, Gn, Kn, qn), Yn = P({prop: `boxShadow`, themeKey: `shadows`}), Xn = P({prop: `fontFamily`, themeKey: `typography`}), Zn = P({prop: `fontSize`, themeKey: `typography`}), Qn = P({prop: `fontStyle`, themeKey: `typography`}), $n = P({prop: `fontWeight`, themeKey: `typography`}), er = P({prop: `letterSpacing`}), tr = P({prop: `textTransform`}), nr = P({prop: `lineHeight`}), rr = P({prop: `textAlign`}), ir = P({prop: `typography`, cssProperty: false, themeKey: `typography`}), ar = Y(ir, Xn, Zn, Qn, $n, er, nr, rr, tr), or = {borders: nt, display: Dn, flexbox: Vn, grid: D, positions: Jn, palette: N, shadows: Yn, sizing: T, spacing: L, typography: ar}, sr = Object.keys(or).reduce((e2, t2) => {
  let n2 = or[t2];
  for (let t3 of n2.filterProps)
    e2[t3] = n2;
  return e2;
}, {});
function cr(e2, t2, n2) {
  let r2 = {[e2]: t2, theme: n2}, i2 = sr[e2];
  return i2 ? i2(r2) : {[e2]: t2};
}
function lr(e2 = {}) {
  let {themeId: t2, defaultTheme: n2, defaultClassName: r2 = `MuiBox-root`, generateClassName: i2} = e2, a2 = _e(`div`, {shouldForwardProp: (e3) => e3 !== `theme` && e3 !== `sx` && e3 !== `as`})(kt);
  return d(function(e3, o2) {
    let s2 = Ae(n2), _a2 = e3, {className: c2, component: l2 = `div`} = _a2, u2 = __objRest(_a2, ["className", "component"]);
    return m(a2, __spreadValues({as: l2, ref: o2, className: At(c2, i2 ? i2(r2) : r2), theme: t2 && s2[t2] || s2}, u2));
  });
}
var ur = q(`MuiBox`, [`root`]), dr = lr({defaultClassName: ur.root, generateClassName: dt.generate}), fr = {theme: void 0};
function pr(e2) {
  let t2, n2;
  return function(r2) {
    let i2 = t2;
    return (i2 === void 0 || r2.theme !== n2) && (fr.theme = r2.theme, i2 = et(e2(fr)), t2 = i2, n2 = r2.theme), i2;
  };
}
function mr(e2 = ``) {
  function t2(...n2) {
    if (!n2.length)
      return ``;
    let r2 = n2[0];
    return typeof r2 == `string` && !r2.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ``}${r2}${t2(...n2.slice(1))})` : `, ${r2}`;
  }
  return (n2, ...r2) => `var(--${e2 ? `${e2}-` : ``}${n2}${t2(...r2)})`;
}
var hr = `9.5.0`, gr = wt(), _r = zt(`div`, {name: `MuiContainer`, slot: `Root`, overridesResolver: (e2, t2) => {
  let {ownerState: n2} = e2;
  return [t2.root, t2[`maxWidth${de(String(n2.maxWidth))}`], n2.fixed && t2.fixed, n2.disableGutters && t2.disableGutters];
}}), vr = (e2) => qe({props: e2, name: `MuiContainer`, defaultTheme: gr}), yr = (e2, t2) => {
  let n2 = (e3) => J(t2, e3), {classes: r2, fixed: i2, disableGutters: a2, maxWidth: o2} = e2, s2 = {root: [`root`, o2 && `maxWidth${de(String(o2))}`, i2 && `fixed`, a2 && `disableGutters`]};
  return xt(s2, n2, r2);
};
function br(e2 = {}) {
  let {createStyledComponent: t2 = _r, useThemeProps: n2 = vr, componentName: r2 = `MuiContainer`} = e2, i2 = t2(({theme: e3, ownerState: t3}) => __spreadValues({width: `100%`, marginLeft: `auto`, boxSizing: `border-box`, marginRight: `auto`}, !t3.disableGutters && {paddingLeft: e3.spacing(2), paddingRight: e3.spacing(2), [e3.breakpoints.up(`sm`)]: {paddingLeft: e3.spacing(3), paddingRight: e3.spacing(3)}}), ({theme: e3, ownerState: t3}) => t3.fixed && Object.keys(e3.breakpoints.values).reduce((t4, n3) => {
    let r3 = n3, i3 = e3.breakpoints.values[r3];
    return i3 !== 0 && (t4[e3.breakpoints.up(r3)] = {maxWidth: `${i3}${e3.breakpoints.unit}`}), t4;
  }, {}), ({theme: e3, ownerState: t3}) => __spreadValues(__spreadValues({}, t3.maxWidth === `xs` && {[e3.breakpoints.up(`xs`)]: {maxWidth: Math.max(e3.breakpoints.values.xs, 444)}}), t3.maxWidth && t3.maxWidth !== `xs` && {[e3.breakpoints.up(t3.maxWidth)]: {maxWidth: `${e3.breakpoints.values[t3.maxWidth]}${e3.breakpoints.unit}`}}));
  return d(function(e3, t3) {
    let a2 = n2(e3), _a2 = a2, {className: o2, component: s2 = `div`, disableGutters: c2 = false, fixed: l2 = false, maxWidth: u2 = `lg`, classes: d2} = _a2, f2 = __objRest(_a2, ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"]), p2 = __spreadProps(__spreadValues({}, a2), {component: s2, disableGutters: c2, fixed: l2, maxWidth: u2}), h2 = yr(p2, r2);
    return m(i2, __spreadValues({as: s2, ownerState: p2, className: At(h2.root, o2), ref: t3}, f2));
  });
}
var xr = br();
function Sr(e2) {
  return J(`MuiContainer`, e2);
}
var Cr = q(`MuiContainer`, [`root`, `disableGutters`, `fixed`, `maxWidthXs`, `maxWidthSm`, `maxWidthMd`, `maxWidthLg`, `maxWidthXl`]), wr = wt(), Tr = zt(`div`, {name: `MuiStack`, slot: `Root`});
function Er(e2) {
  return qe({props: e2, name: `MuiStack`, defaultTheme: wr});
}
function Dr(e2, t2) {
  let n2 = _.toArray(e2).filter(Boolean);
  return n2.reduce((e3, r2, i2) => (e3.push(r2), i2 < n2.length - 1 && e3.push(l(t2, {key: `separator-${i2}`})), e3), []);
}
var Or = (e2) => ({row: `Left`, "row-reverse": `Right`, column: `Top`, "column-reverse": `Bottom`})[e2], kr = ({ownerState: e2, theme: t2}) => {
  let n2 = __spreadValues({display: `flex`, flexDirection: `column`}, W({theme: t2}, O({values: e2.direction, breakpoints: t2.breakpoints.values}), (e3) => ({flexDirection: e3})));
  if (e2.spacing) {
    let r2 = k(t2), i2 = Object.keys(t2.breakpoints.values).reduce((t3, n3) => ((typeof e2.spacing == `object` && e2.spacing[n3] != null || typeof e2.direction == `object` && e2.direction[n3] != null) && (t3[n3] = true), t3), {}), a2 = O({values: e2.direction, base: i2}), o2 = O({values: e2.spacing, base: i2});
    typeof a2 == `object` && Object.keys(a2).forEach((e3, t3, n3) => {
      if (!a2[e3]) {
        let r3 = t3 > 0 ? a2[n3[t3 - 1]] : `column`;
        a2[e3] = r3;
      }
    }), n2 = Le(n2, W({theme: t2}, o2, (t3, n3) => e2.useFlexGap ? {gap: R(r2, t3)} : {"& > :not(style):not(style)": {margin: 0}, "& > :not(style) ~ :not(style)": {[`margin${Or(n3 ? a2[n3] : e2.direction)}`]: R(r2, t3)}}));
  }
  return n2 = Mt(t2.breakpoints, n2), n2;
};
function Ar(e2 = {}) {
  let {createStyledComponent: t2 = Tr, useThemeProps: n2 = Er, componentName: r2 = `MuiStack`} = e2, i2 = () => xt({root: [`root`]}, (e3) => J(r2, e3), {}), a2 = t2(kr);
  return d(function(e3, t3) {
    let _a2 = n2(e3), {component: r3 = `div`, direction: o2 = `column`, spacing: s2 = 0, divider: c2, children: l2, className: u2, useFlexGap: d2 = false} = _a2, f2 = __objRest(_a2, ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"]), p2 = {direction: o2, spacing: s2, useFlexGap: d2}, h2 = i2();
    return m(a2, __spreadProps(__spreadValues({as: r3, ownerState: p2, ref: t3, className: At(h2.root, u2)}, f2), {children: c2 ? Dr(l2, c2) : l2}));
  });
}
var jr = Ar();
function Mr(e2) {
  return J(`MuiStack`, e2);
}
var Nr = q(`MuiStack`, [`root`]), Pr = e({Box: () => dr, Container: () => xr, GlobalStyles: () => Zt, Grid: () => hn, RtlProvider: () => Fe, Stack: () => jr, StyledEngineProvider: () => qt, ThemeProvider: () => tn, alignContent: () => Nn, alignItems: () => Mn, alignSelf: () => Rn, alpha: () => ye, backgroundColor: () => me, bgcolor: () => z, blend: () => Ce, border: () => Oe, borderBottom: () => V, borderBottomColor: () => C, borderColor: () => He, borderLeft: () => bt, borderLeftColor: () => st, borderRadius: () => gt, borderRight: () => Ye, borderRightColor: () => Ne, borderTop: () => ut, borderTopColor: () => vt, borderTransform: () => Re, borders: () => nt, bottom: () => Kn, boxClasses: () => ur, boxSizing: () => G, breakpoints: () => xe, color: () => ae, colorChannel: () => oe, columnGap: () => U, compose: () => Y, containerClasses: () => Cr, createBox: () => lr, createBreakpoints: () => St, createContainer: () => br, createGrid: () => Ht, createSpacing: () => ft, createStack: () => Ar, createStyled: () => ct, createTheme: () => wt, createUnarySpacing: () => k, createUnaryUnit: () => re, css: () => h, cssContainerQueries: () => M, darken: () => le, decomposeColor: () => mt, display: () => Dn, emphasize: () => ce, experimental_sx: () => Fr, flex: () => Fn, flexBasis: () => On, flexDirection: () => kn, flexGrow: () => In, flexShrink: () => Ln, flexWrap: () => An, flexbox: () => Vn, fontFamily: () => Xn, fontSize: () => Zn, fontStyle: () => Qn, fontWeight: () => $n, gap: () => jt, getContainerUtilityClass: () => Sr, getContrastRatio: () => De, getGridUtilityClass: () => gn, getLuminance: () => Te, getPath: () => B, getStackUtilityClass: () => Mr, getStyleValue: () => A, getThemeProps: () => je, getValue: () => R, grid: () => D, gridArea: () => be, gridAutoColumns: () => se, gridAutoFlow: () => ve, gridAutoRows: () => Se, gridClasses: () => bn, gridColumn: () => j, gridRow: () => I, gridTemplateAreas: () => pt, gridTemplateColumns: () => F, gridTemplateRows: () => Ee, handleBreakpoints: () => W, height: () => ee, hexToRgb: () => ke, hslToRgb: () => H, justifyContent: () => jn, justifyItems: () => zn, justifySelf: () => Bn, keyframes: () => r, left: () => qn, letterSpacing: () => er, lighten: () => w, lineHeight: () => nr, major: () => 9, margin: () => $e, marginKeys: () => E, maxHeight: () => Tt, maxWidth: () => ge, mergeBreakpointsInOrder: () => Mt, minHeight: () => ie, minWidth: () => ne, minor: () => 5, order: () => Pn, outline: () => Ct, outlineColor: () => Be, padding: () => Ze, paddingKeys: () => pe, palette: () => N, paletteTransform: () => ue, patch: () => 0, position: () => Hn, positions: () => Jn, prerelease: () => void 0, private_safeAlpha: () => Ve, private_safeColorChannel: () => yt, private_safeDarken: () => ot, private_safeEmphasize: () => ht, private_safeLighten: () => Je, recomposeColor: () => Me, responsivePropType: () => Ut, rgbToHex: () => lt, right: () => Gn, rowGap: () => we, shadows: () => Yn, shape: () => it, shouldForwardProp: () => _t, sizeHeight: () => he, sizeWidth: () => Qe, sizing: () => T, sizingTransform: () => Xe, spacing: () => L, stackClasses: () => Nr, style: () => P, styled: () => zt, systemDefaultTheme: () => Ie, textAlign: () => rr, textTransform: () => tr, top: () => Wn, typography: () => ar, typographyVariant: () => ir, unstable_createCssVarsProvider: () => dn, unstable_createCssVarsTheme: () => fn, unstable_createGetCssVar: () => mr, unstable_createStyleFunctionSx: () => Pe, unstable_cssVarsParser: () => Ue, unstable_defaultSxConfig: () => Dt, unstable_extendSxProp: () => mn, unstable_generateDirectionClasses: () => Rt, unstable_generateSizeClassNames: () => Bt, unstable_generateSpacingClassNames: () => It, unstable_getThemeValue: () => cr, unstable_memoTheme: () => pr, unstable_prepareCssVars: () => Ge, unstable_resolveBreakpointValues: () => O, unstable_styleFunctionSx: () => kt, unstable_traverseBreakpoints: () => Nt, useMediaQuery: () => at, useRtl: () => Ot, useTheme: () => Ae, useThemeProps: () => qe, useThemeWithoutDefault: () => K, version: () => hr, width: () => fe, zIndex: () => Un});
function Fr() {
  throw Error(ze(19));
}
var $ = Pr, Ir = $.experimental_sx, Lr = $.css, Rr = $.keyframes, zr = $.StyledEngineProvider, Br = $.GlobalStyles, Vr = $.borders, Hr = $.breakpoints, Ur = $.cssContainerQueries, Wr = $.handleBreakpoints, Gr = $.mergeBreakpointsInOrder, Kr = $.unstable_resolveBreakpointValues, qr = $.compose, Jr = $.display, Yr = $.flexbox, Xr = $.grid, Zr = $.palette, Qr = $.positions, $r = $.shadows, ei = $.sizing, ti = $.spacing, ni = $.style, ri = $.getPath, ii = $.getStyleValue, ai = $.typography, oi = $.unstable_styleFunctionSx, si = $.unstable_createStyleFunctionSx, ci = $.unstable_extendSxProp, li = $.unstable_defaultSxConfig, ui = $.unstable_getThemeValue, di = $.Box, fi = $.createBox, pi = $.createStyled, mi = $.styled, hi = $.createTheme, gi = $.createBreakpoints, _i = $.createSpacing, vi = $.shape, yi = $.useThemeProps, bi = $.getThemeProps, xi = $.useTheme, Si = $.useThemeWithoutDefault, Ci = $.useMediaQuery, wi = $.ThemeProvider, Ti = $.unstable_memoTheme, Ei = $.unstable_createCssVarsProvider, Di = $.unstable_createGetCssVar, Oi = $.unstable_cssVarsParser, ki = $.unstable_prepareCssVars, Ai = $.unstable_createCssVarsTheme, ji = $.responsivePropType, Mi = $.RtlProvider, Ni = $.createContainer, Pi = $.Container, Fi = $.Grid, Ii = $.Stack, Li = $.borderTransform, Ri = $.border, zi = $.borderTop, Bi = $.borderRight, Vi = $.borderBottom, Hi = $.borderLeft, Ui = $.borderColor, Wi = $.borderTopColor, Gi = $.borderRightColor, Ki = $.borderBottomColor, qi = $.borderLeftColor, Ji = $.outline, Yi = $.outlineColor, Xi = $.borderRadius, Zi = $.flexBasis, Qi = $.flexDirection, $i = $.flexWrap, ea = $.justifyContent, ta = $.alignItems, na = $.alignContent, ra = $.order, ia = $.flex, aa = $.flexGrow, oa = $.flexShrink, sa = $.alignSelf, ca = $.justifyItems, la = $.justifySelf, ua = $.gap, da = $.columnGap, fa = $.rowGap, pa = $.gridColumn, ma = $.gridRow, ha = $.gridAutoFlow, ga = $.gridAutoColumns, _a = $.gridAutoRows, va = $.gridTemplateColumns, ya = $.gridTemplateRows, ba = $.gridTemplateAreas, xa = $.gridArea, Sa = $.paletteTransform, Ca = $.color, wa = $.bgcolor, Ta = $.backgroundColor, Ea = $.position, Da = $.zIndex, Oa = $.top, ka = $.right, Aa = $.bottom, ja = $.left, Ma = $.sizingTransform, Na = $.width, Pa = $.maxWidth, Fa = $.minWidth, Ia = $.height, La = $.maxHeight, Ra = $.minHeight, za = $.sizeWidth, Ba = $.sizeHeight, Va = $.boxSizing, Ha = $.marginKeys, Ua = $.paddingKeys, Wa = $.createUnaryUnit, Ga = $.createUnarySpacing, Ka = $.getValue, qa = $.margin, Ja = $.padding, Ya = $.fontFamily, Xa = $.fontSize, Za = $.fontStyle, Qa = $.fontWeight, $a = $.letterSpacing, eo = $.textTransform, to = $.lineHeight, no = $.textAlign, ro = $.typographyVariant, io = $.boxClasses, ao = $.systemDefaultTheme, oo = $.shouldForwardProp, so = $.hexToRgb, co = $.decomposeColor, lo = $.colorChannel, uo = $.private_safeColorChannel, fo = $.recomposeColor, po = $.rgbToHex, mo = $.hslToRgb, ho = $.getLuminance, go = $.getContrastRatio, _o = $.alpha, vo = $.private_safeAlpha, yo = $.darken, bo = $.private_safeDarken, xo = $.lighten, So = $.private_safeLighten, Co = $.emphasize, wo = $.private_safeEmphasize, To = $.blend, Eo = $.useRtl, Do = $.version, Oo = $.major, ko = $.minor, Ao = $.patch, jo = $.prerelease, Mo = $.containerClasses, No = $.getContainerUtilityClass, Po = $.createGrid, Fo = $.gridClasses, Io = $.unstable_traverseBreakpoints, Lo = $.unstable_generateDirectionClasses, Ro = $.unstable_generateSizeClassNames, zo = $.unstable_generateSpacingClassNames, Bo = $.getGridUtilityClass, Vo = $.createStack, Ho = $.stackClasses, Uo = $.getStackUtilityClass, Wo = Reflect.get(Pr, `default`) ?? Pr;
export {
  di as Box,
  Pi as Container,
  Br as GlobalStyles,
  Fi as Grid,
  Mi as RtlProvider,
  Ii as Stack,
  zr as StyledEngineProvider,
  wi as ThemeProvider,
  na as alignContent,
  ta as alignItems,
  sa as alignSelf,
  _o as alpha,
  Ta as backgroundColor,
  wa as bgcolor,
  To as blend,
  Ri as border,
  Vi as borderBottom,
  Ki as borderBottomColor,
  Ui as borderColor,
  Hi as borderLeft,
  qi as borderLeftColor,
  Xi as borderRadius,
  Bi as borderRight,
  Gi as borderRightColor,
  zi as borderTop,
  Wi as borderTopColor,
  Li as borderTransform,
  Vr as borders,
  Aa as bottom,
  io as boxClasses,
  Va as boxSizing,
  Hr as breakpoints,
  Ca as color,
  lo as colorChannel,
  da as columnGap,
  qr as compose,
  Mo as containerClasses,
  fi as createBox,
  gi as createBreakpoints,
  Ni as createContainer,
  Po as createGrid,
  _i as createSpacing,
  Vo as createStack,
  pi as createStyled,
  hi as createTheme,
  Ga as createUnarySpacing,
  Wa as createUnaryUnit,
  Lr as css,
  Ur as cssContainerQueries,
  yo as darken,
  co as decomposeColor,
  Wo as default,
  Jr as display,
  Co as emphasize,
  Ir as experimental_sx,
  ia as flex,
  Zi as flexBasis,
  Qi as flexDirection,
  aa as flexGrow,
  oa as flexShrink,
  $i as flexWrap,
  Yr as flexbox,
  Ya as fontFamily,
  Xa as fontSize,
  Za as fontStyle,
  Qa as fontWeight,
  ua as gap,
  No as getContainerUtilityClass,
  go as getContrastRatio,
  Bo as getGridUtilityClass,
  ho as getLuminance,
  ri as getPath,
  Uo as getStackUtilityClass,
  ii as getStyleValue,
  bi as getThemeProps,
  Ka as getValue,
  Xr as grid,
  xa as gridArea,
  ga as gridAutoColumns,
  ha as gridAutoFlow,
  _a as gridAutoRows,
  Fo as gridClasses,
  pa as gridColumn,
  ma as gridRow,
  ba as gridTemplateAreas,
  va as gridTemplateColumns,
  ya as gridTemplateRows,
  Wr as handleBreakpoints,
  Ia as height,
  so as hexToRgb,
  mo as hslToRgb,
  ea as justifyContent,
  ca as justifyItems,
  la as justifySelf,
  Rr as keyframes,
  ja as left,
  $a as letterSpacing,
  xo as lighten,
  to as lineHeight,
  Oo as major,
  qa as margin,
  Ha as marginKeys,
  La as maxHeight,
  Pa as maxWidth,
  Gr as mergeBreakpointsInOrder,
  Ra as minHeight,
  Fa as minWidth,
  ko as minor,
  ra as order,
  Ji as outline,
  Yi as outlineColor,
  Ja as padding,
  Ua as paddingKeys,
  Zr as palette,
  Sa as paletteTransform,
  Ao as patch,
  Ea as position,
  Qr as positions,
  jo as prerelease,
  vo as private_safeAlpha,
  uo as private_safeColorChannel,
  bo as private_safeDarken,
  wo as private_safeEmphasize,
  So as private_safeLighten,
  fo as recomposeColor,
  ji as responsivePropType,
  po as rgbToHex,
  ka as right,
  fa as rowGap,
  $r as shadows,
  vi as shape,
  oo as shouldForwardProp,
  Ba as sizeHeight,
  za as sizeWidth,
  ei as sizing,
  Ma as sizingTransform,
  ti as spacing,
  Ho as stackClasses,
  ni as style,
  mi as styled,
  ao as systemDefaultTheme,
  no as textAlign,
  eo as textTransform,
  Oa as top,
  ai as typography,
  ro as typographyVariant,
  Ei as unstable_createCssVarsProvider,
  Ai as unstable_createCssVarsTheme,
  Di as unstable_createGetCssVar,
  si as unstable_createStyleFunctionSx,
  Oi as unstable_cssVarsParser,
  li as unstable_defaultSxConfig,
  ci as unstable_extendSxProp,
  Lo as unstable_generateDirectionClasses,
  Ro as unstable_generateSizeClassNames,
  zo as unstable_generateSpacingClassNames,
  ui as unstable_getThemeValue,
  Ti as unstable_memoTheme,
  ki as unstable_prepareCssVars,
  Kr as unstable_resolveBreakpointValues,
  oi as unstable_styleFunctionSx,
  Io as unstable_traverseBreakpoints,
  Ci as useMediaQuery,
  Eo as useRtl,
  xi as useTheme,
  yi as useThemeProps,
  Si as useThemeWithoutDefault,
  Do as version,
  Na as width,
  Da as zIndex
};
