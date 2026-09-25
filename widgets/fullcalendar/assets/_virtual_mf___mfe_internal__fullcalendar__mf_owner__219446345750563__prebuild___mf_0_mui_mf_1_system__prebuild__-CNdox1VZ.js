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
import {n as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {i as t, n, o as r, r as i, t as a} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_emotion_mf_1_react__loadShare__.js-B0fvS0ao.js";
import {n as o, t as s} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_mui_mf_1_private_mf_2_theming__loadShare__.js-BMorIdcT.js";
import {_ as c, b as l, d as u, f as d, n as f, o as p, p as m, r as h, t as g, u as _, y as ee} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js";
import {n as v, r as y} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-dKY8wLF8.js";
import {n as b, t as x} from "./emotion-cache.browser.esm--RCZvsJA.js";
import {$ as S, $t as C, A as w, At as T, B as E, Bt as D, C as te, Ct as ne, D as re, Dt as ie, E as ae, Et as O, F as oe, Ft as k, G as A, Gt as j, H as se, Ht as M, I as N, It as P, J as F, Jt as ce, K as I, Kt as le, L as ue, Lt as de, M as fe, Mt as pe, N as L, Nt as R, O as me, Ot as z, P as B, Pt as V, Q as H, Qt as U, R as W, Rt as G, S as he, St as K, T as ge, Tt as _e, U as ve, Ut as ye, V as be, Vt as xe, W as Se, Wt as Ce, X as we, Xt as Te, Y as Ee, Yt as De, Z as Oe, Zt as ke, _ as Ae, a as je, an as Me, at as Ne, b as Pe, bt as Fe, c as Ie, cn as Le, ct as Re, d as q, dn as ze, dt as Be, en as Ve, et as He, f as J, ft as Y, g as Ue, gt as We, h as Ge, ht as Ke, i as qe, in as Je, it as Ye, j as Xe, jt as Ze, k as Qe, kt as $e, l as et, ln as tt, lt as nt, m as rt, mt as it, n as at, nn as ot, nt as st, o as ct, on as lt, ot as ut, p as dt, pt as ft, q as pt, qt as mt, rn as ht, rt as gt, s as _t, st as vt, tn as yt, tt as bt, u as xt, un as St, ut as Ct, v as wt, w as Tt, wt as Et, x as Dt, xt as Ot, y as kt, yt as At, z as jt, zt as Mt} from "./useMediaQuery-iAz86eG4.js";
import {a as Nt, c as Pt, d as Ft, i as It, l as Lt, n as Rt, o as X, r as zt, s as Bt, t as Vt} from "./createGrid-Dh9Ze6Xh.js";
var Ht = {}, Ut = new Map(), Wt = {insert: void 0}, Gt = (e2, t2) => {
  let n2 = x(e2);
  return n2.sheet = new t2({key: n2.key, nonce: n2.sheet.nonce, container: n2.sheet.container, speedy: n2.sheet.isSpeedy, prepend: n2.sheet.prepend, insertionPoint: n2.sheet.insertionPoint}), n2;
}, Z;
if (typeof document == `object` && (Z = document.querySelector(`[name="emotion-insertion-point"]`), !Z)) {
  Z = document.createElement(`meta`), Z.setAttribute(`name`, `emotion-insertion-point`), Z.setAttribute(`content`, ``);
  let e2 = document.querySelector(`head`);
  e2 && e2.prepend(Z);
}
function Kt(e2, t2) {
  if (e2 || t2) {
    class n2 extends b {
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
  let {injectFirst: t2, enableCssLayer: n2, children: r2} = e2, i2 = c(() => {
    let e3 = `${t2}-${n2}`;
    if (typeof document == `object` && Ut.has(e3))
      return Ut.get(e3);
    let r3 = Kt(t2, n2);
    return Ut.set(e3, r3), r3;
  }, [t2, n2]);
  return i2 ? v(a, {value: i2, children: r2}) : r2;
}
function Jt(e2) {
  return e2 == null || Object.keys(e2).length === 0;
}
function Yt(e2) {
  let {styles: t2, defaultTheme: n2 = {}} = e2;
  return v(r, {styles: typeof t2 == `function` ? (e3) => t2(Jt(e3) ? n2 : e3) : t2});
}
function Xt(e2) {
  let t2 = Et(e2);
  return e2 !== t2 && t2.styles ? (t2.styles.match(/^@layer\s+[^{]*$/) || (t2.styles = `@layer global{${t2.styles}}`), t2) : e2;
}
function Zt({styles: e2, themeId: t2, defaultTheme: n2 = {}}) {
  let r2 = Ae(n2), i2 = t2 && r2[t2] || r2, a2 = typeof e2 == `function` ? e2(i2) : e2;
  return i2.modularCssLayers && (a2 = Array.isArray(a2) ? a2.map((e3) => Xt(typeof e3 == `function` ? e3(i2) : e3)) : Xt(a2)), v(Yt, {styles: a2});
}
function Qt(e2) {
  let t2 = K(), n2 = Ke() || ``, {modularCssLayers: r2} = e2, i2 = `mui.global, mui.components, mui.theme, mui.custom, mui.sx`;
  return i2 = !r2 || t2 !== null ? `` : typeof r2 == `string` ? r2.replace(/mui(?!\.)/g, i2) : `@layer ${i2};`, ne(() => {
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
  }, [i2, n2]), i2 ? v(Zt, {styles: i2}) : null;
}
var $t = {};
function en(e2, t2, n2, r2 = false) {
  return c(() => {
    let i2 = e2 && t2[e2] || t2;
    if (typeof n2 == `function`) {
      let a2 = n2(i2), o2 = e2 ? __spreadProps(__spreadValues({}, t2), {[e2]: a2}) : a2;
      return r2 ? () => o2 : o2;
    }
    return e2 ? __spreadProps(__spreadValues({}, t2), {[e2]: n2}) : __spreadValues(__spreadValues({}, t2), n2);
  }, [e2, t2, n2, r2]);
}
function tn(e2) {
  let {children: t2, theme: r2, themeId: i2} = e2, a2 = K($t), c2 = o() || $t, l2 = en(i2, a2, r2), u2 = en(i2, c2, r2, true), d2 = (i2 ? l2[i2] : l2).direction === `rtl`, f2 = Qt(l2);
  return v(s, {theme: u2, children: v(n.Provider, {value: l2, children: v(Fe, {value: d2, children: y(We, {value: i2 ? l2[i2].components : l2.components, children: [f2, t2]})})})});
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
  let {defaultMode: t2 = `light`, defaultLightColorScheme: n2, defaultDarkColorScheme: r2, supportedColorSchemes: i2 = [], modeStorageKey: a2 = Lt, colorSchemeStorageKey: o2 = Pt, storageWindow: s2 = typeof window > `u` ? void 0 : window, storageManager: u2 = rn, noSsr: d2 = false} = e2, f2 = i2.join(`,`), p2 = i2.length > 1, h2 = c(() => u2?.({key: a2, storageWindow: s2}), [u2, a2, s2]), g2 = c(() => u2?.({key: `${o2}-light`, storageWindow: s2}), [u2, o2, s2]), v2 = c(() => u2?.({key: `${o2}-dark`, storageWindow: s2}), [u2, o2, s2]), [y2, b2] = l(() => {
    let e3 = h2?.get(t2) || t2, i3 = g2?.get(n2) || n2, a3 = v2?.get(r2) || r2;
    return {mode: e3, systemMode: on(e3), lightColorScheme: i3, darkColorScheme: a3};
  }), [x2, S2] = l(d2 || !p2);
  m(() => {
    S2(true);
  }, []);
  let C2 = cn(y2), w2 = _((e3) => {
    b2((n3) => {
      if (e3 === n3.mode)
        return n3;
      let r3 = e3 ?? t2;
      return h2?.set(r3), __spreadProps(__spreadValues({}, n3), {mode: r3, systemMode: on(r3)});
    });
  }, [h2, t2]), T2 = _((e3) => {
    e3 ? typeof e3 == `string` ? e3 && !f2.includes(e3) ? console.error(`\`${e3}\` does not exist in \`theme.colorSchemes\`.`) : b2((t3) => {
      let n3 = __spreadValues({}, t3);
      return sn(t3, (t4) => {
        t4 === `light` && (g2?.set(e3), n3.lightColorScheme = e3), t4 === `dark` && (v2?.set(e3), n3.darkColorScheme = e3);
      }), n3;
    }) : b2((t3) => {
      let i3 = __spreadValues({}, t3), a3 = e3.light === null ? n2 : e3.light, o3 = e3.dark === null ? r2 : e3.dark;
      return a3 && (f2.includes(a3) ? (i3.lightColorScheme = a3, g2?.set(a3)) : console.error(`\`${a3}\` does not exist in \`theme.colorSchemes\`.`)), o3 && (f2.includes(o3) ? (i3.darkColorScheme = o3, v2?.set(o3)) : console.error(`\`${o3}\` does not exist in \`theme.colorSchemes\`.`)), i3;
    }) : b2((e4) => (g2?.set(n2), v2?.set(r2), __spreadProps(__spreadValues({}, e4), {lightColorScheme: n2, darkColorScheme: r2})));
  }, [f2, g2, v2, n2, r2]), E2 = _((e3) => {
    y2.mode === `system` && b2((t3) => {
      let n3 = e3?.matches ? `dark` : `light`;
      return t3.systemMode === n3 ? t3 : __spreadProps(__spreadValues({}, t3), {systemMode: n3});
    });
  }, [y2.mode]), D2 = ee(E2);
  return D2.current = E2, m(() => {
    if (typeof window.matchMedia != `function` || !p2)
      return;
    let e3 = (...e4) => D2.current(...e4), t3 = window.matchMedia(`(prefers-color-scheme: dark)`);
    return t3.addListener(e3), e3(t3), () => {
      t3.removeListener(e3);
    };
  }, [p2]), m(() => {
    if (p2) {
      let e3 = h2?.subscribe((e4) => {
        (!e4 || [`light`, `dark`, `system`].includes(e4)) && w2(e4 || t2);
      }) || an, n3 = g2?.subscribe((e4) => {
        (!e4 || f2.match(e4)) && T2({light: e4});
      }) || an, r3 = v2?.subscribe((e4) => {
        (!e4 || f2.match(e4)) && T2({dark: e4});
      }) || an;
      return () => {
        e3(), n3(), r3();
      };
    }
  }, [T2, w2, f2, t2, s2, p2, h2, g2, v2]), __spreadProps(__spreadValues({}, y2), {mode: x2 ? y2.mode : void 0, systemMode: x2 ? y2.systemMode : void 0, colorScheme: x2 ? C2 : void 0, setMode: w2, setColorScheme: T2});
}
var un = `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`;
function dn(e2) {
  let {themeId: t2, theme: n2 = {}, modeStorageKey: r2 = Lt, colorSchemeStorageKey: i2 = Pt, disableTransitionOnChange: a2 = false, defaultColorScheme: s2, resolveTheme: l2} = e2, f2 = {allColorSchemes: [], colorScheme: void 0, darkColorScheme: void 0, lightColorScheme: void 0, mode: void 0, setColorScheme: () => {
  }, setMode: () => {
  }, systemMode: void 0}, p2 = h(void 0), g2 = () => u(p2) || f2, _2 = {}, b2 = {};
  function x2(e3) {
    let {children: f3, theme: h2, modeStorageKey: g3 = r2, colorSchemeStorageKey: x3 = i2, disableTransitionOnChange: S3 = a2, storageManager: C3, storageWindow: w2 = typeof window > `u` ? void 0 : window, documentNode: T2 = typeof document > `u` ? void 0 : document, colorSchemeNode: E2 = typeof document > `u` ? void 0 : document.documentElement, disableNestedContext: D2 = false, disableStyleSheetGeneration: te2 = false, defaultMode: re2 = `system`, forceThemeRerender: ie2 = false, noSsr: ae2} = e3, O2 = ee(false), oe2 = o(), k2 = u(p2), A2 = !!k2 && !D2, j2 = c(() => h2 || (typeof n2 == `function` ? n2() : n2), [h2]), se2 = j2[t2], M2 = se2 || j2, {colorSchemes: N2 = _2, components: P2 = b2, cssVarPrefix: F2} = M2, ce2 = Object.keys(N2).filter((e4) => !!N2[e4]).join(`,`), I2 = c(() => ce2.split(`,`), [ce2]), le2 = typeof s2 == `string` ? s2 : s2.light, ue2 = typeof s2 == `string` ? s2 : s2.dark, {mode: de2, setMode: fe2, systemMode: pe2, lightColorScheme: L2, darkColorScheme: R2, colorScheme: me2, setColorScheme: z2} = ln({supportedColorSchemes: I2, defaultLightColorScheme: le2, defaultDarkColorScheme: ue2, modeStorageKey: g3, colorSchemeStorageKey: x3, defaultMode: N2[le2] && N2[ue2] ? re2 : N2[M2.defaultColorScheme]?.palette?.mode || M2.palette?.mode, storageManager: C3, storageWindow: w2, noSsr: ae2}), B2 = de2, V2 = me2;
    A2 && (B2 = k2.mode, V2 = k2.colorScheme);
    let H2 = V2 || M2.defaultColorScheme;
    M2.vars && !ie2 && (H2 = M2.defaultColorScheme);
    let U2 = c(() => {
      let e4 = M2.generateThemeVars?.() || M2.vars, t3 = __spreadProps(__spreadValues({}, M2), {components: P2, colorSchemes: N2, cssVarPrefix: F2, vars: e4});
      if (typeof t3.generateSpacing == `function` && (t3.spacing = t3.generateSpacing()), H2) {
        let e5 = N2[H2];
        e5 && typeof e5 == `object` && Object.keys(e5).forEach((n3) => {
          e5[n3] && typeof e5[n3] == `object` ? t3[n3] = __spreadValues(__spreadValues({}, t3[n3]), e5[n3]) : t3[n3] = e5[n3];
        });
      }
      return l2 ? l2(t3) : t3;
    }, [M2, H2, P2, N2, F2]), W2 = M2.colorSchemeSelector;
    ne(() => {
      if (V2 && E2 && W2 && W2 !== `media`) {
        let e4 = W2, t3 = W2;
        if (e4 === `class` && (t3 = `.%s`), e4 === `data` && (t3 = `[data-%s]`), e4?.startsWith(`data-`) && !e4.includes(`%s`) && (t3 = `[${e4}="%s"]`), t3.startsWith(`.`))
          E2.classList.remove(...I2.map((e5) => t3.substring(1).replace(`%s`, e5))), E2.classList.add(t3.substring(1).replace(`%s`, V2));
        else {
          let e5 = t3.replace(`%s`, V2).match(/\[([^\]]+)\]/);
          if (e5) {
            let [t4, n3] = e5[1].split(`=`);
            n3 || I2.forEach((e6) => {
              E2.removeAttribute(t4.replace(V2, e6));
            }), E2.setAttribute(t4, n3 ? n3.replace(/"|'/g, ``) : ``);
          } else
            E2.setAttribute(t3, V2);
        }
      }
    }, [V2, W2, E2, I2]), m(() => {
      let e4;
      if (S3 && O2.current && T2) {
        let t3 = T2.createElement(`style`);
        t3.appendChild(T2.createTextNode(un)), T2.head.appendChild(t3), window.getComputedStyle(T2.body), e4 = setTimeout(() => {
          T2.head.removeChild(t3);
        }, 1);
      }
      return () => {
        clearTimeout(e4);
      };
    }, [V2, S3, T2]), m(() => (O2.current = true, () => {
      O2.current = false;
    }), []);
    let G2 = c(() => ({allColorSchemes: I2, colorScheme: V2, darkColorScheme: R2, lightColorScheme: L2, mode: B2, setColorScheme: z2, setMode: fe2, systemMode: pe2}), [I2, V2, R2, L2, B2, z2, fe2, pe2, U2.colorSchemeSelector]), he2 = true;
    (te2 || M2.cssVariables === false || A2 && oe2?.cssVarPrefix === F2) && (he2 = false);
    let K2 = y(d, {children: [v(tn, {themeId: se2 ? t2 : void 0, theme: U2, children: f3}), he2 && v(Yt, {styles: U2.generateStyleSheets?.() || []})]});
    return A2 ? K2 : v(p2.Provider, {value: G2, children: K2});
  }
  let S2 = typeof s2 == `string` ? s2 : s2.light, C2 = typeof s2 == `string` ? s2 : s2.dark;
  return {CssVarsProvider: x2, useColorScheme: g2, getInitColorSchemeScript: (e3) => Ft(__spreadValues({colorSchemeStorageKey: i2, defaultLightColorScheme: S2, defaultDarkColorScheme: C2, modeStorageKey: r2}, e3))};
}
function fn(_a2) {
  var _b = _a2, {colorSchemeSelector: e2 = `[${Bt}="%s"]`} = _b, t2 = __objRest(_b, ["colorSchemeSelector"]);
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
var hn = Vt();
function gn(e2) {
  return J(`MuiGrid`, e2);
}
var _n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], vn = [`column-reverse`, `column`, `row-reverse`, `row`], yn = [`nowrap`, `wrap-reverse`, `wrap`], Q = [`auto`, `grow`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], bn = q(`MuiGrid`, [`root`, `container`, `item`, ..._n.map((e2) => `spacing-xs-${e2}`), ...vn.map((e2) => `direction-xs-${e2}`), ...yn.map((e2) => `wrap-xs-${e2}`), ...Q.map((e2) => `grid-xs-${e2}`), ...Q.map((e2) => `grid-sm-${e2}`), ...Q.map((e2) => `grid-md-${e2}`), ...Q.map((e2) => `grid-lg-${e2}`), ...Q.map((e2) => `grid-xl-${e2}`)]), xn = P({prop: `displayPrint`, cssProperty: false, transform: (e2) => ({"@media print": {display: e2}})}), Sn = P({prop: `display`}), Cn = P({prop: `overflow`}), wn = P({prop: `textOverflow`}), Tn = P({prop: `visibility`}), En = P({prop: `whiteSpace`}), Dn = Y(xn, Sn, Cn, wn, Tn, En), On = P({prop: `flexBasis`}), kn = P({prop: `flexDirection`}), An = P({prop: `flexWrap`}), jn = P({prop: `justifyContent`}), Mn = P({prop: `alignItems`}), Nn = P({prop: `alignContent`}), Pn = P({prop: `order`}), Fn = P({prop: `flex`}), In = P({prop: `flexGrow`}), Ln = P({prop: `flexShrink`}), Rn = P({prop: `alignSelf`}), zn = P({prop: `justifyItems`}), Bn = P({prop: `justifySelf`}), Vn = Y(On, kn, An, jn, Mn, Nn, Pn, Fn, In, Ln, Rn, zn, Bn), Hn = P({prop: `position`}), Un = P({prop: `zIndex`, themeKey: `zIndex`}), Wn = P({prop: `top`}), Gn = P({prop: `right`}), Kn = P({prop: `bottom`}), qn = P({prop: `left`}), Jn = Y(Hn, Un, Wn, Gn, Kn, qn), Yn = P({prop: `boxShadow`, themeKey: `shadows`}), Xn = P({prop: `fontFamily`, themeKey: `typography`}), Zn = P({prop: `fontSize`, themeKey: `typography`}), Qn = P({prop: `fontStyle`, themeKey: `typography`}), $n = P({prop: `fontWeight`, themeKey: `typography`}), er = P({prop: `letterSpacing`}), tr = P({prop: `textTransform`}), nr = P({prop: `lineHeight`}), rr = P({prop: `textAlign`}), ir = P({prop: `typography`, cssProperty: false, themeKey: `typography`}), ar = Y(ir, Xn, Zn, Qn, $n, er, nr, rr, tr), or = {borders: nt.filterProps, display: Dn.filterProps, flexbox: Vn.filterProps, grid: E.filterProps, positions: Jn.filterProps, palette: N.filterProps, shadows: Yn.filterProps, sizing: w.filterProps, spacing: R.filterProps, typography: ar.filterProps}, sr = {borders: nt, display: Dn, flexbox: Vn, grid: E, positions: Jn, palette: N, shadows: Yn, sizing: w, spacing: R, typography: ar}, cr = Object.keys(or).reduce((e2, t2) => {
  for (let n2 of or[t2])
    e2[n2] = sr[t2];
  return e2;
}, {});
function lr(e2, t2, n2) {
  let r2 = {[e2]: t2, theme: n2}, i2 = cr[e2];
  return i2 ? i2(r2) : {[e2]: t2};
}
function ur(e2 = {}) {
  let {themeId: t2, defaultTheme: n2, defaultClassName: r2 = `MuiBox-root`, generateClassName: i2} = e2, a2 = _e(`div`, {shouldForwardProp: (e3) => e3 !== `theme` && e3 !== `sx` && e3 !== `as`})(kt);
  return p(function(e3, o2) {
    let s2 = Ae(n2), _a2 = e3, {className: c2, component: l2 = `div`} = _a2, u2 = __objRest(_a2, ["className", "component"]);
    return v(a2, __spreadValues({as: l2, ref: o2, className: At(c2, i2 ? i2(r2) : r2), theme: t2 && s2[t2] || s2}, u2));
  });
}
var dr = q(`MuiBox`, [`root`]), fr = ur({defaultClassName: dr.root, generateClassName: dt.generate}), pr = {theme: void 0};
function mr(e2) {
  let t2, n2;
  return function(r2) {
    let i2 = t2;
    return (i2 === void 0 || r2.theme !== n2) && (pr.theme = r2.theme, i2 = et(e2(pr)), t2 = i2, n2 = r2.theme), i2;
  };
}
function hr(e2 = ``) {
  function t2(...n2) {
    if (!n2.length)
      return ``;
    let r2 = n2[0];
    return typeof r2 == `string` && !r2.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e2 ? `${e2}-` : ``}${r2}${t2(...n2.slice(1))})` : `, ${r2}`;
  }
  return (n2, ...r2) => `var(--${e2 ? `${e2}-` : ``}${n2}${t2(...r2)})`;
}
var gr = `9.4.0`, _r = wt(), vr = X(`div`, {name: `MuiContainer`, slot: `Root`, overridesResolver: (e2, t2) => {
  let {ownerState: n2} = e2;
  return [t2.root, t2[`maxWidth${de(String(n2.maxWidth))}`], n2.fixed && t2.fixed, n2.disableGutters && t2.disableGutters];
}}), yr = (e2) => qe({props: e2, name: `MuiContainer`, defaultTheme: _r}), br = (e2, t2) => {
  let n2 = (e3) => J(t2, e3), {classes: r2, fixed: i2, disableGutters: a2, maxWidth: o2} = e2, s2 = {root: [`root`, o2 && `maxWidth${de(String(o2))}`, i2 && `fixed`, a2 && `disableGutters`]};
  return xt(s2, n2, r2);
};
function xr(e2 = {}) {
  let {createStyledComponent: t2 = vr, useThemeProps: n2 = yr, componentName: r2 = `MuiContainer`} = e2, i2 = t2(({theme: e3, ownerState: t3}) => __spreadValues({width: `100%`, marginLeft: `auto`, boxSizing: `border-box`, marginRight: `auto`}, !t3.disableGutters && {paddingLeft: e3.spacing(2), paddingRight: e3.spacing(2), [e3.breakpoints.up(`sm`)]: {paddingLeft: e3.spacing(3), paddingRight: e3.spacing(3)}}), ({theme: e3, ownerState: t3}) => t3.fixed && Object.keys(e3.breakpoints.values).reduce((t4, n3) => {
    let r3 = n3, i3 = e3.breakpoints.values[r3];
    return i3 !== 0 && (t4[e3.breakpoints.up(r3)] = {maxWidth: `${i3}${e3.breakpoints.unit}`}), t4;
  }, {}), ({theme: e3, ownerState: t3}) => __spreadValues(__spreadValues({}, t3.maxWidth === `xs` && {[e3.breakpoints.up(`xs`)]: {maxWidth: Math.max(e3.breakpoints.values.xs, 444)}}), t3.maxWidth && t3.maxWidth !== `xs` && {[e3.breakpoints.up(t3.maxWidth)]: {maxWidth: `${e3.breakpoints.values[t3.maxWidth]}${e3.breakpoints.unit}`}}));
  return p(function(e3, t3) {
    let a2 = n2(e3), _a2 = a2, {className: o2, component: s2 = `div`, disableGutters: c2 = false, fixed: l2 = false, maxWidth: u2 = `lg`, classes: d2} = _a2, f2 = __objRest(_a2, ["className", "component", "disableGutters", "fixed", "maxWidth", "classes"]), p2 = __spreadProps(__spreadValues({}, a2), {component: s2, disableGutters: c2, fixed: l2, maxWidth: u2}), m2 = br(p2, r2);
    return v(i2, __spreadValues({as: s2, ownerState: p2, className: At(m2.root, o2), ref: t3}, f2));
  });
}
var Sr = xr();
function Cr(e2) {
  return J(`MuiContainer`, e2);
}
var wr = q(`MuiContainer`, [`root`, `disableGutters`, `fixed`, `maxWidthXs`, `maxWidthSm`, `maxWidthMd`, `maxWidthLg`, `maxWidthXl`]), Tr = wt(), Er = X(`div`, {name: `MuiStack`, slot: `Root`});
function Dr(e2) {
  return qe({props: e2, name: `MuiStack`, defaultTheme: Tr});
}
function Or(e2, t2) {
  let n2 = g.toArray(e2).filter(Boolean);
  return n2.reduce((e3, r2, i2) => (e3.push(r2), i2 < n2.length - 1 && e3.push(f(t2, {key: `separator-${i2}`})), e3), []);
}
var kr = (e2) => ({row: `Left`, "row-reverse": `Right`, column: `Top`, "column-reverse": `Bottom`})[e2], Ar = ({ownerState: e2, theme: t2}) => {
  let n2 = __spreadValues({display: `flex`, flexDirection: `column`}, G({theme: t2}, D({values: e2.direction, breakpoints: t2.breakpoints.values}), (e3) => ({flexDirection: e3})));
  if (e2.spacing) {
    let r2 = O(t2), i2 = Object.keys(t2.breakpoints.values).reduce((t3, n3) => ((typeof e2.spacing == `object` && e2.spacing[n3] != null || typeof e2.direction == `object` && e2.direction[n3] != null) && (t3[n3] = true), t3), {}), a2 = D({values: e2.direction, base: i2}), o2 = D({values: e2.spacing, base: i2});
    typeof a2 == `object` && Object.keys(a2).forEach((e3, t3, n3) => {
      if (!a2[e3]) {
        let r3 = t3 > 0 ? a2[n3[t3 - 1]] : `column`;
        a2[e3] = r3;
      }
    }), n2 = Le(n2, G({theme: t2}, o2, (t3, n3) => e2.useFlexGap ? {gap: z(r2, t3)} : {"& > :not(style):not(style)": {margin: 0}, "& > :not(style) ~ :not(style)": {[`margin${kr(n3 ? a2[n3] : e2.direction)}`]: z(r2, t3)}}));
  }
  return n2 = Mt(t2.breakpoints, n2), n2;
};
function jr(e2 = {}) {
  let {createStyledComponent: t2 = Er, useThemeProps: n2 = Dr, componentName: r2 = `MuiStack`} = e2, i2 = () => xt({root: [`root`]}, (e3) => J(r2, e3), {}), a2 = t2(Ar);
  return p(function(e3, t3) {
    let _a2 = n2(e3), {component: r3 = `div`, direction: o2 = `column`, spacing: s2 = 0, divider: c2, children: l2, className: u2, useFlexGap: d2 = false} = _a2, f2 = __objRest(_a2, ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"]), p2 = {direction: o2, spacing: s2, useFlexGap: d2}, m2 = i2();
    return v(a2, __spreadProps(__spreadValues({as: r3, ownerState: p2, ref: t3, className: At(m2.root, u2)}, f2), {children: c2 ? Or(l2, c2) : l2}));
  });
}
var Mr = jr();
function Nr(e2) {
  return J(`MuiStack`, e2);
}
var Pr = q(`MuiStack`, [`root`]), Fr = e({Box: () => fr, Container: () => Sr, GlobalStyles: () => Zt, Grid: () => hn, RtlProvider: () => Fe, Stack: () => Mr, StyledEngineProvider: () => qt, ThemeProvider: () => tn, alignContent: () => Nn, alignItems: () => Mn, alignSelf: () => Rn, alpha: () => ye, backgroundColor: () => L, bgcolor: () => B, blend: () => Ce, border: () => Oe, borderBottom: () => H, borderBottomColor: () => S, borderColor: () => He, borderLeft: () => bt, borderLeftColor: () => st, borderRadius: () => gt, borderRight: () => Ye, borderRightColor: () => Ne, borderTop: () => ut, borderTopColor: () => vt, borderTransform: () => Re, borders: () => nt, bottom: () => Kn, boxClasses: () => dr, boxSizing: () => he, breakpoints: () => xe, color: () => oe, colorChannel: () => j, columnGap: () => W, compose: () => Y, containerClasses: () => wr, createBox: () => ur, createBreakpoints: () => St, createContainer: () => xr, createGrid: () => Vt, createSpacing: () => ft, createStack: () => jr, createStyled: () => ct, createTheme: () => wt, createUnarySpacing: () => O, createUnaryUnit: () => ie, css: () => i, cssContainerQueries: () => M, darken: () => le, decomposeColor: () => mt, display: () => Dn, emphasize: () => ce, experimental_sx: () => Ir, flex: () => Fn, flexBasis: () => On, flexDirection: () => kn, flexGrow: () => In, flexShrink: () => Ln, flexWrap: () => An, flexbox: () => Vn, fontFamily: () => Xn, fontSize: () => Zn, fontStyle: () => Qn, fontWeight: () => $n, gap: () => jt, getContainerUtilityClass: () => Cr, getContrastRatio: () => De, getGridUtilityClass: () => gn, getLuminance: () => Te, getPath: () => V, getStackUtilityClass: () => Nr, getStyleValue: () => k, getThemeProps: () => je, getValue: () => z, grid: () => E, gridArea: () => be, gridAutoColumns: () => se, gridAutoFlow: () => ve, gridAutoRows: () => Se, gridClasses: () => bn, gridColumn: () => A, gridRow: () => I, gridTemplateAreas: () => pt, gridTemplateColumns: () => F, gridTemplateRows: () => Ee, handleBreakpoints: () => G, height: () => te, hexToRgb: () => ke, hslToRgb: () => U, justifyContent: () => jn, justifyItems: () => zn, justifySelf: () => Bn, keyframes: () => t, left: () => qn, letterSpacing: () => er, lighten: () => C, lineHeight: () => nr, major: () => 9, margin: () => $e, marginKeys: () => T, maxHeight: () => Tt, maxWidth: () => ge, mergeBreakpointsInOrder: () => Mt, minHeight: () => ae, minWidth: () => re, minor: () => 4, order: () => Pn, outline: () => Ct, outlineColor: () => Be, padding: () => Ze, paddingKeys: () => pe, palette: () => N, paletteTransform: () => ue, patch: () => 0, position: () => Hn, positions: () => Jn, prerelease: () => void 0, private_safeAlpha: () => Ve, private_safeColorChannel: () => yt, private_safeDarken: () => ot, private_safeEmphasize: () => ht, private_safeLighten: () => Je, recomposeColor: () => Me, responsivePropType: () => Ht, rgbToHex: () => lt, right: () => Gn, rowGap: () => we, shadows: () => Yn, shape: () => it, shouldForwardProp: () => _t, sizeHeight: () => me, sizeWidth: () => Qe, sizing: () => w, sizingTransform: () => Xe, spacing: () => R, stackClasses: () => Pr, style: () => P, styled: () => X, systemDefaultTheme: () => Ie, textAlign: () => rr, textTransform: () => tr, top: () => Wn, typography: () => ar, typographyVariant: () => ir, unstable_createCssVarsProvider: () => dn, unstable_createCssVarsTheme: () => fn, unstable_createGetCssVar: () => hr, unstable_createStyleFunctionSx: () => Pe, unstable_cssVarsParser: () => Ue, unstable_defaultSxConfig: () => Dt, unstable_extendSxProp: () => mn, unstable_generateDirectionClasses: () => Rt, unstable_generateSizeClassNames: () => zt, unstable_generateSpacingClassNames: () => It, unstable_getThemeValue: () => lr, unstable_memoTheme: () => mr, unstable_prepareCssVars: () => Ge, unstable_resolveBreakpointValues: () => D, unstable_styleFunctionSx: () => kt, unstable_traverseBreakpoints: () => Nt, useMediaQuery: () => at, useRtl: () => Ot, useTheme: () => Ae, useThemeProps: () => qe, useThemeWithoutDefault: () => K, version: () => gr, width: () => fe, zIndex: () => Un});
function Ir() {
  throw Error(ze(19));
}
var $ = Fr, Lr = $.experimental_sx, Rr = $.css, zr = $.keyframes, Br = $.StyledEngineProvider, Vr = $.GlobalStyles, Hr = $.borders, Ur = $.breakpoints, Wr = $.cssContainerQueries, Gr = $.handleBreakpoints, Kr = $.mergeBreakpointsInOrder, qr = $.unstable_resolveBreakpointValues, Jr = $.compose, Yr = $.display, Xr = $.flexbox, Zr = $.grid, Qr = $.palette, $r = $.positions, ei = $.shadows, ti = $.sizing, ni = $.spacing, ri = $.style, ii = $.getPath, ai = $.getStyleValue, oi = $.typography, si = $.unstable_styleFunctionSx, ci = $.unstable_createStyleFunctionSx, li = $.unstable_extendSxProp, ui = $.unstable_defaultSxConfig, di = $.unstable_getThemeValue, fi = $.Box, pi = $.createBox, mi = $.createStyled, hi = $.styled, gi = $.createTheme, _i = $.createBreakpoints, vi = $.createSpacing, yi = $.shape, bi = $.useThemeProps, xi = $.getThemeProps, Si = $.useTheme, Ci = $.useThemeWithoutDefault, wi = $.useMediaQuery, Ti = $.ThemeProvider, Ei = $.unstable_memoTheme, Di = $.unstable_createCssVarsProvider, Oi = $.unstable_createGetCssVar, ki = $.unstable_cssVarsParser, Ai = $.unstable_prepareCssVars, ji = $.unstable_createCssVarsTheme, Mi = $.responsivePropType, Ni = $.RtlProvider, Pi = $.createContainer, Fi = $.Container, Ii = $.Grid, Li = $.Stack, Ri = $.borderTransform, zi = $.border, Bi = $.borderTop, Vi = $.borderRight, Hi = $.borderBottom, Ui = $.borderLeft, Wi = $.borderColor, Gi = $.borderTopColor, Ki = $.borderRightColor, qi = $.borderBottomColor, Ji = $.borderLeftColor, Yi = $.outline, Xi = $.outlineColor, Zi = $.borderRadius, Qi = $.flexBasis, $i = $.flexDirection, ea = $.flexWrap, ta = $.justifyContent, na = $.alignItems, ra = $.alignContent, ia = $.order, aa = $.flex, oa = $.flexGrow, sa = $.flexShrink, ca = $.alignSelf, la = $.justifyItems, ua = $.justifySelf, da = $.gap, fa = $.columnGap, pa = $.rowGap, ma = $.gridColumn, ha = $.gridRow, ga = $.gridAutoFlow, _a = $.gridAutoColumns, va = $.gridAutoRows, ya = $.gridTemplateColumns, ba = $.gridTemplateRows, xa = $.gridTemplateAreas, Sa = $.gridArea, Ca = $.paletteTransform, wa = $.color, Ta = $.bgcolor, Ea = $.backgroundColor, Da = $.position, Oa = $.zIndex, ka = $.top, Aa = $.right, ja = $.bottom, Ma = $.left, Na = $.sizingTransform, Pa = $.width, Fa = $.maxWidth, Ia = $.minWidth, La = $.height, Ra = $.maxHeight, za = $.minHeight, Ba = $.sizeWidth, Va = $.sizeHeight, Ha = $.boxSizing, Ua = $.marginKeys, Wa = $.paddingKeys, Ga = $.createUnaryUnit, Ka = $.createUnarySpacing, qa = $.getValue, Ja = $.margin, Ya = $.padding, Xa = $.fontFamily, Za = $.fontSize, Qa = $.fontStyle, $a = $.fontWeight, eo = $.letterSpacing, to = $.textTransform, no = $.lineHeight, ro = $.textAlign, io = $.typographyVariant, ao = $.boxClasses, oo = $.systemDefaultTheme, so = $.shouldForwardProp, co = $.hexToRgb, lo = $.decomposeColor, uo = $.colorChannel, fo = $.private_safeColorChannel, po = $.recomposeColor, mo = $.rgbToHex, ho = $.hslToRgb, go = $.getLuminance, _o = $.getContrastRatio, vo = $.alpha, yo = $.private_safeAlpha, bo = $.darken, xo = $.private_safeDarken, So = $.lighten, Co = $.private_safeLighten, wo = $.emphasize, To = $.private_safeEmphasize, Eo = $.blend, Do = $.useRtl, Oo = $.version, ko = $.major, Ao = $.minor, jo = $.patch, Mo = $.prerelease, No = $.containerClasses, Po = $.getContainerUtilityClass, Fo = $.createGrid, Io = $.gridClasses, Lo = $.unstable_traverseBreakpoints, Ro = $.unstable_generateDirectionClasses, zo = $.unstable_generateSizeClassNames, Bo = $.unstable_generateSpacingClassNames, Vo = $.getGridUtilityClass, Ho = $.createStack, Uo = $.stackClasses, Wo = $.getStackUtilityClass, Go = Reflect.get(Fr, `default`) ?? Fr;
export {
  fi as Box,
  Fi as Container,
  Vr as GlobalStyles,
  Ii as Grid,
  Ni as RtlProvider,
  Li as Stack,
  Br as StyledEngineProvider,
  Ti as ThemeProvider,
  ra as alignContent,
  na as alignItems,
  ca as alignSelf,
  vo as alpha,
  Ea as backgroundColor,
  Ta as bgcolor,
  Eo as blend,
  zi as border,
  Hi as borderBottom,
  qi as borderBottomColor,
  Wi as borderColor,
  Ui as borderLeft,
  Ji as borderLeftColor,
  Zi as borderRadius,
  Vi as borderRight,
  Ki as borderRightColor,
  Bi as borderTop,
  Gi as borderTopColor,
  Ri as borderTransform,
  Hr as borders,
  ja as bottom,
  ao as boxClasses,
  Ha as boxSizing,
  Ur as breakpoints,
  wa as color,
  uo as colorChannel,
  fa as columnGap,
  Jr as compose,
  No as containerClasses,
  pi as createBox,
  _i as createBreakpoints,
  Pi as createContainer,
  Fo as createGrid,
  vi as createSpacing,
  Ho as createStack,
  mi as createStyled,
  gi as createTheme,
  Ka as createUnarySpacing,
  Ga as createUnaryUnit,
  Rr as css,
  Wr as cssContainerQueries,
  bo as darken,
  lo as decomposeColor,
  Go as default,
  Yr as display,
  wo as emphasize,
  Lr as experimental_sx,
  aa as flex,
  Qi as flexBasis,
  $i as flexDirection,
  oa as flexGrow,
  sa as flexShrink,
  ea as flexWrap,
  Xr as flexbox,
  Xa as fontFamily,
  Za as fontSize,
  Qa as fontStyle,
  $a as fontWeight,
  da as gap,
  Po as getContainerUtilityClass,
  _o as getContrastRatio,
  Vo as getGridUtilityClass,
  go as getLuminance,
  ii as getPath,
  Wo as getStackUtilityClass,
  ai as getStyleValue,
  xi as getThemeProps,
  qa as getValue,
  Zr as grid,
  Sa as gridArea,
  _a as gridAutoColumns,
  ga as gridAutoFlow,
  va as gridAutoRows,
  Io as gridClasses,
  ma as gridColumn,
  ha as gridRow,
  xa as gridTemplateAreas,
  ya as gridTemplateColumns,
  ba as gridTemplateRows,
  Gr as handleBreakpoints,
  La as height,
  co as hexToRgb,
  ho as hslToRgb,
  ta as justifyContent,
  la as justifyItems,
  ua as justifySelf,
  zr as keyframes,
  Ma as left,
  eo as letterSpacing,
  So as lighten,
  no as lineHeight,
  ko as major,
  Ja as margin,
  Ua as marginKeys,
  Ra as maxHeight,
  Fa as maxWidth,
  Kr as mergeBreakpointsInOrder,
  za as minHeight,
  Ia as minWidth,
  Ao as minor,
  ia as order,
  Yi as outline,
  Xi as outlineColor,
  Ya as padding,
  Wa as paddingKeys,
  Qr as palette,
  Ca as paletteTransform,
  jo as patch,
  Da as position,
  $r as positions,
  Mo as prerelease,
  yo as private_safeAlpha,
  fo as private_safeColorChannel,
  xo as private_safeDarken,
  To as private_safeEmphasize,
  Co as private_safeLighten,
  po as recomposeColor,
  Mi as responsivePropType,
  mo as rgbToHex,
  Aa as right,
  pa as rowGap,
  ei as shadows,
  yi as shape,
  so as shouldForwardProp,
  Va as sizeHeight,
  Ba as sizeWidth,
  ti as sizing,
  Na as sizingTransform,
  ni as spacing,
  Uo as stackClasses,
  ri as style,
  hi as styled,
  oo as systemDefaultTheme,
  ro as textAlign,
  to as textTransform,
  ka as top,
  oi as typography,
  io as typographyVariant,
  Di as unstable_createCssVarsProvider,
  ji as unstable_createCssVarsTheme,
  Oi as unstable_createGetCssVar,
  ci as unstable_createStyleFunctionSx,
  ki as unstable_cssVarsParser,
  ui as unstable_defaultSxConfig,
  li as unstable_extendSxProp,
  Ro as unstable_generateDirectionClasses,
  zo as unstable_generateSizeClassNames,
  Bo as unstable_generateSpacingClassNames,
  di as unstable_getThemeValue,
  Ei as unstable_memoTheme,
  Ai as unstable_prepareCssVars,
  qr as unstable_resolveBreakpointValues,
  si as unstable_styleFunctionSx,
  Lo as unstable_traverseBreakpoints,
  wi as useMediaQuery,
  Do as useRtl,
  Si as useTheme,
  bi as useThemeProps,
  Ci as useThemeWithoutDefault,
  Oo as version,
  Pa as width,
  Oa as zIndex
};
