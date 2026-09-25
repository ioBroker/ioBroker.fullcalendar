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
import {t as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {a as t, n} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_emotion_mf_1_react__loadShare__.js-B0fvS0ao.js";
import {_ as r, b as i, d as a, f as o, g as s, i as c, p as l, r as u, s as d, u as f, w as p} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js";
import {n as m} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-dKY8wLF8.js";
import {a as h, c as g, i as _, o as v, r as ee, s as te, t as ne} from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-DYgqXpxG.js";
function y(e3, ...t2) {
  let n2 = new URL(`https://mui.com/production-error/?code=${e3}`);
  return t2.forEach((e4) => n2.searchParams.append(`args[]`, e4)), `Minified MUI error #${e3}; visit ${n2} for the full message.`;
}
var b = (e3) => {
  let t2 = Object.keys(e3).map((t3) => ({key: t3, val: e3[t3]})) || [];
  return t2.sort((e4, t3) => e4.val - t3.val), t2.reduce((e4, t3) => __spreadProps(__spreadValues({}, e4), {[t3.key]: t3.val}), {});
};
function re(e3) {
  let _a = e3, {values: t2 = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}, unit: n2 = `px`, step: r2 = 5} = _a, i2 = __objRest(_a, ["values", "unit", "step"]), a2 = b(t2), o2 = Object.keys(a2);
  function s2(e4) {
    return `@media (min-width:${typeof t2[e4] == `number` ? t2[e4] : e4}${n2})`;
  }
  function c2(e4) {
    return `@media (max-width:${(typeof t2[e4] == `number` ? t2[e4] : e4) - r2 / 100}${n2})`;
  }
  function l2(e4, i3) {
    let a3 = o2.indexOf(i3);
    return `@media (min-width:${typeof t2[e4] == `number` ? t2[e4] : e4}${n2}) and (max-width:${(a3 !== -1 && typeof t2[o2[a3]] == `number` ? t2[o2[a3]] : i3) - r2 / 100}${n2})`;
  }
  function u2(e4) {
    return o2.indexOf(e4) + 1 < o2.length ? l2(e4, o2[o2.indexOf(e4) + 1]) : s2(e4);
  }
  function d2(e4) {
    let t3 = o2.indexOf(e4);
    return t3 === 0 ? s2(o2[1]) : t3 === o2.length - 1 ? c2(o2[t3]) : l2(e4, o2[o2.indexOf(e4) + 1]).replace(`@media`, `@media not all and`);
  }
  let f2 = [];
  for (let e4 = 0; e4 < o2.length; e4 += 1)
    f2.push(s2(o2[e4]));
  return __spreadValues({keys: o2, values: a2, up: s2, down: c2, between: l2, only: u2, not: d2, unit: n2, internal_mediaKeys: f2}, i2);
}
var ie = e((e3) => {
  var t2 = Symbol.for(`react.fragment`), n2 = Symbol.for(`react.strict_mode`), r2 = Symbol.for(`react.profiler`), i2 = Symbol.for(`react.consumer`), a2 = Symbol.for(`react.context`), o2 = Symbol.for(`react.forward_ref`), s2 = Symbol.for(`react.suspense`), c2 = Symbol.for(`react.suspense_list`), l2 = Symbol.for(`react.memo`), u2 = Symbol.for(`react.lazy`), d2 = Symbol.for(`react.client.reference`);
  e3.isValidElementType = function(e4) {
    return !!(typeof e4 == `string` || typeof e4 == `function` || e4 === t2 || e4 === r2 || e4 === n2 || e4 === s2 || e4 === c2 || typeof e4 == `object` && e4 && (e4.$$typeof === u2 || e4.$$typeof === l2 || e4.$$typeof === a2 || e4.$$typeof === i2 || e4.$$typeof === o2 || e4.$$typeof === d2 || e4.getModuleId !== void 0));
  };
}), ae = e((e3, t2) => {
  t2.exports = ie();
})();
function x(e3) {
  if (typeof e3 != `object` || !e3)
    return false;
  let t2 = Object.getPrototypeOf(e3);
  return (t2 === null || t2 === Object.prototype || Object.getPrototypeOf(t2) === null) && !(Symbol.toStringTag in e3) && !(Symbol.iterator in e3);
}
function oe(e3) {
  if (d(e3) || (0, ae.isValidElementType)(e3) || !x(e3))
    return e3;
  let t2 = {};
  return Object.keys(e3).forEach((n2) => {
    t2[n2] = oe(e3[n2]);
  }), t2;
}
function S(e3, t2, n2 = {clone: true}) {
  let r2 = n2.clone ? __spreadValues({}, e3) : e3;
  return x(e3) && x(t2) && Object.keys(t2).forEach((i2) => {
    d(t2[i2]) || (0, ae.isValidElementType)(t2[i2]) ? r2[i2] = t2[i2] : x(t2[i2]) && Object.prototype.hasOwnProperty.call(e3, i2) && x(e3[i2]) ? r2[i2] = S(e3[i2], t2[i2], n2) : n2.clone ? r2[i2] = x(t2[i2]) ? oe(t2[i2]) : t2[i2] : r2[i2] = t2[i2];
  }), r2;
}
function se(e3, t2 = -(2 ** 53 - 1), n2 = 2 ** 53 - 1) {
  return Math.max(t2, Math.min(e3, n2));
}
function ce(e3, t2 = 0, n2 = 1) {
  return se(e3, t2, n2);
}
function le(e3) {
  e3 = e3.slice(1);
  let t2 = RegExp(`.{1,${e3.length >= 6 ? 2 : 1}}`, `g`), n2 = e3.match(t2);
  return n2 && n2[0].length === 1 && (n2 = n2.map((e4) => e4 + e4)), n2 ? `rgb${n2.length === 4 ? `a` : ``}(${n2.map((e4, t3) => t3 < 3 ? parseInt(e4, 16) : Math.round(parseInt(e4, 16) / 255 * 1e3) / 1e3).join(`, `)})` : ``;
}
function ue(e3) {
  let t2 = e3.toString(16);
  return t2.length === 1 ? `0${t2}` : t2;
}
function C(e3) {
  if (e3.type)
    return e3;
  if (e3.charAt(0) === `#`)
    return C(le(e3));
  let t2 = e3.indexOf(`(`), n2 = e3.substring(0, t2);
  if (![`rgb`, `rgba`, `hsl`, `hsla`, `color`].includes(n2))
    throw Error(y(9, e3));
  let r2 = e3.substring(t2 + 1, e3.length - 1), i2;
  if (n2 === `color`) {
    if (r2 = r2.split(` `), i2 = r2.shift(), r2.length === 4 && r2[3].charAt(0) === `/` && (r2[3] = r2[3].slice(1)), ![`srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec-2020`].includes(i2))
      throw Error(y(10, i2));
  } else
    r2 = r2.split(`,`);
  return r2 = r2.map((e4) => parseFloat(e4)), {type: n2, values: r2, colorSpace: i2};
}
var de = (e3) => {
  let t2 = C(e3);
  return t2.values.slice(0, 3).map((e4, n2) => t2.type.includes(`hsl`) && n2 !== 0 ? `${e4}%` : e4).join(` `);
}, fe = (e3, t2) => {
  try {
    return de(e3);
  } catch {
    return e3;
  }
};
function w(e3) {
  let {type: t2, colorSpace: n2} = e3, {values: r2} = e3;
  return t2.includes(`rgb`) ? r2 = r2.map((e4, t3) => t3 < 3 ? parseInt(e4, 10) : e4) : t2.includes(`hsl`) && (r2[1] = `${r2[1]}%`, r2[2] = `${r2[2]}%`), r2 = t2.includes(`color`) ? `${n2} ${r2.join(` `)}` : `${r2.join(`, `)}`, `${t2}(${r2})`;
}
function pe(e3) {
  if (e3.startsWith(`#`))
    return e3;
  let {values: t2} = C(e3);
  return `#${t2.map((e4, t3) => ue(t3 === 3 ? Math.round(255 * e4) : e4)).join(``)}`;
}
function me(e3) {
  e3 = C(e3);
  let {values: t2} = e3, n2 = t2[0], r2 = t2[1] / 100, i2 = t2[2] / 100, a2 = r2 * Math.min(i2, 1 - i2), o2 = (e4, t3 = (e4 + n2 / 30) % 12) => i2 - a2 * Math.max(Math.min(t3 - 3, 9 - t3, 1), -1), s2 = `rgb`, c2 = [Math.round(o2(0) * 255), Math.round(o2(8) * 255), Math.round(o2(4) * 255)];
  return e3.type === `hsla` && (s2 += `a`, c2.push(t2[3])), w({type: s2, values: c2});
}
function T(e3) {
  e3 = C(e3);
  let t2 = e3.type === `hsl` || e3.type === `hsla` ? C(me(e3)).values : e3.values;
  return t2 = t2.map((t3) => (e3.type !== `color` && (t3 /= 255), t3 <= 0.03928 ? t3 / 12.92 : ((t3 + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t2[0] + 0.7152 * t2[1] + 0.0722 * t2[2]).toFixed(3));
}
function he(e3, t2) {
  let n2 = T(e3), r2 = T(t2);
  return (Math.max(n2, r2) + 0.05) / (Math.min(n2, r2) + 0.05);
}
function ge(e3, t2) {
  return e3 = C(e3), t2 = ce(t2), (e3.type === `rgb` || e3.type === `hsl`) && (e3.type += `a`), e3.type === `color` ? e3.values[3] = `/${t2}` : e3.values[3] = t2, w(e3);
}
function _e(e3, t2, n2) {
  try {
    return ge(e3, t2);
  } catch {
    return e3;
  }
}
function ve(e3, t2) {
  if (e3 = C(e3), t2 = ce(t2), e3.type.includes(`hsl`))
    e3.values[2] *= 1 - t2;
  else if (e3.type.includes(`rgb`) || e3.type.includes(`color`))
    for (let n2 = 0; n2 < 3; n2 += 1)
      e3.values[n2] *= 1 - t2;
  return w(e3);
}
function ye(e3, t2, n2) {
  try {
    return ve(e3, t2);
  } catch {
    return e3;
  }
}
function be(e3, t2) {
  if (e3 = C(e3), t2 = ce(t2), e3.type.includes(`hsl`))
    e3.values[2] += (100 - e3.values[2]) * t2;
  else if (e3.type.includes(`rgb`))
    for (let n2 = 0; n2 < 3; n2 += 1)
      e3.values[n2] += (255 - e3.values[n2]) * t2;
  else if (e3.type.includes(`color`))
    for (let n2 = 0; n2 < 3; n2 += 1)
      e3.values[n2] += (1 - e3.values[n2]) * t2;
  return w(e3);
}
function xe(e3, t2, n2) {
  try {
    return be(e3, t2);
  } catch {
    return e3;
  }
}
function Se(e3, t2 = 0.15) {
  return T(e3) > 0.5 ? ve(e3, t2) : be(e3, t2);
}
function Ce(e3, t2, n2) {
  try {
    return Se(e3, t2);
  } catch {
    return e3;
  }
}
function we(e3, t2, n2, r2 = 1) {
  let i2 = (e4, t3) => Math.round((e4 ** (1 / r2) * (1 - n2) + t3 ** (1 / r2) * n2) ** r2), a2 = C(e3), o2 = C(t2);
  return w({type: `rgb`, values: [i2(a2.values[0], o2.values[0]), i2(a2.values[1], o2.values[1]), i2(a2.values[2], o2.values[2])]});
}
function Te(e3) {
  if (e3 == null)
    return true;
  for (let t2 in e3)
    return false;
  return true;
}
function E(e3, t2) {
  let n2 = Array.isArray(t2), r2 = Array.isArray(e3);
  return Ae(t2) ? t2 : je(e3) ? D(t2) : n2 && r2 ? Oe(e3, t2) : n2 === r2 ? Me(e3, t2) : D(t2);
}
function Ee(e3) {
  let t2 = 0, n2 = e3.length, r2 = Array(n2);
  for (t2 = 0; t2 < n2; t2 += 1)
    r2[t2] = D(e3[t2]);
  return r2;
}
function De(e3) {
  let t2 = {};
  for (let n2 in e3)
    n2 !== `__proto__` && n2 !== `constructor` && n2 !== `prototype` && (t2[n2] = D(e3[n2]));
  return t2;
}
function Oe(e3, t2) {
  let n2 = e3.length;
  for (let r2 = 0; r2 < t2.length; r2 += 1)
    e3[n2 + r2] = D(t2[r2]);
  return e3;
}
function ke(e3) {
  return typeof e3 == `object` && !!e3 && !(e3 instanceof RegExp) && !(e3 instanceof Date);
}
function Ae(e3) {
  return typeof e3 != `object` || !e3;
}
function je(e3) {
  return typeof e3 != `object` || !e3 || e3 instanceof RegExp || e3 instanceof Date;
}
function D(e3) {
  return ke(e3) ? Array.isArray(e3) ? Ee(e3) : De(e3) : e3;
}
function Me(e3, t2) {
  for (let n2 in t2)
    n2 !== `__proto__` && n2 !== `constructor` && n2 !== `prototype` && (e3[n2] = n2 in e3 ? E(e3[n2], t2[n2]) : D(t2[n2]));
  return e3;
}
var Ne = {clone: false};
function Pe(e3, t2) {
  return t2 ? S(e3, t2, Ne) : e3;
}
var Fe = /min-width:\s*([0-9.]+)/;
function Ie(e3, t2) {
  if (!e3.containerQueries || !Le(t2))
    return t2;
  let n2 = [];
  for (let e4 in t2)
    e4.startsWith(`@container`) && n2.push(e4);
  n2.sort((e4, t3) => +(e4.match(Fe)?.[1] || 0) - (t3.match(Fe)?.[1] || 0));
  let r2 = t2;
  for (let e4 = 0; e4 < n2.length; e4 += 1) {
    let t3 = n2[e4], i2 = r2[t3];
    delete r2[t3], r2[t3] = i2;
  }
  return r2;
}
function Le(e3) {
  for (let t2 in e3)
    if (t2.startsWith(`@container`))
      return true;
  return false;
}
function Re(e3, t2) {
  return t2 === `@` || t2.startsWith(`@`) && (e3.some((e4) => t2.startsWith(`@${e4}`)) || !!t2.match(/^@\d/));
}
function ze(e3, t2) {
  let n2 = t2.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n2)
    return null;
  let [, r2, i2] = n2, a2 = Number.isNaN(+r2) ? r2 || 0 : +r2;
  return e3.containerQueries(i2).up(a2);
}
function Be(e3) {
  let t2 = (e4, t3) => e4.replace(`@media`, t3 ? `@container ${t3}` : `@container`);
  function n2(n3, r3) {
    n3.up = (...n4) => t2(e3.breakpoints.up(...n4), r3), n3.down = (...n4) => t2(e3.breakpoints.down(...n4), r3), n3.between = (...n4) => t2(e3.breakpoints.between(...n4), r3), n3.only = (...n4) => t2(e3.breakpoints.only(...n4), r3), n3.not = (...n4) => {
      let i3 = t2(e3.breakpoints.not(...n4), r3);
      return i3.includes(`not all and`) ? i3.replace(`not all and `, ``).replace(`min-width:`, `width<`).replace(`max-width:`, `width>`).replace(`and`, `or`) : i3;
    };
  }
  let r2 = {}, i2 = (e4) => (n2(r2, e4), r2);
  return n2(i2), __spreadProps(__spreadValues({}, e3), {containerQueries: i2});
}
var Ve = {}, O = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}, k = re({values: O}), He = {containerQueries: (e3) => ({up: (t2) => {
  let n2 = typeof t2 == `number` ? t2 : O[t2] || t2;
  return typeof n2 == `number` && (n2 = `${n2}px`), e3 ? `@container ${e3} (min-width:${n2})` : `@container (min-width:${n2})`;
}})};
function A(e3, t2, n2) {
  let r2 = {};
  return j(r2, e3.theme, t2, (e4, t3, i2) => {
    let a2 = n2(t3, i2);
    e4 ? r2[e4] = a2 : E(r2, a2);
  });
}
function j(e3, t2, n2, r2) {
  if (t2 ?? (t2 = Ve), Array.isArray(n2)) {
    let i2 = t2.breakpoints ?? k;
    for (let t3 = 0; t3 < n2.length; t3 += 1)
      Ue(e3, i2.up(i2.keys[t3]), n2[t3], void 0, r2);
    return e3;
  }
  if (typeof n2 == `object`) {
    let i2 = t2.breakpoints ?? k, a2 = i2.values ?? O;
    for (let o2 in n2)
      if (Re(i2.keys, o2)) {
        let i3 = ze(t2.containerQueries ? t2 : He, o2);
        i3 && Ue(e3, i3, n2[o2], o2, r2);
      } else if (o2 in a2)
        Ue(e3, i2.up(o2), n2[o2], o2, r2);
      else {
        let t3 = o2;
        e3[t3] = n2[t3];
      }
    return e3;
  }
  return r2(void 0, n2), e3;
}
function Ue(e3, t2, n2, r2, i2) {
  e3[t2] ?? (e3[t2] = {}), i2(t2, n2, r2);
}
function We(e3) {
  let t2 = (t3) => {
    let n2 = t3.theme || {}, r2 = e3(t3), i2 = n2.breakpoints || k;
    return Pe(r2, i2.keys.reduce((r3, a2) => (t3[a2] && (r3 || (r3 = {}), r3[i2.up(a2)] = e3(__spreadValues({theme: n2}, t3[a2]))), r3), null));
  };
  return t2.propTypes = {}, t2.filterProps = [`xs`, `sm`, `md`, `lg`, `xl`, ...e3.filterProps], t2;
}
function Ge(e3 = k) {
  let {internal_mediaKeys: t2} = e3, n2 = {};
  for (let e4 = 0; e4 < t2.length; e4 += 1)
    n2[t2[e4]] = {};
  return n2;
}
function Ke(e3, t2) {
  let n2 = e3.internal_mediaKeys;
  for (let e4 = 0; e4 < n2.length; e4 += 1) {
    let r2 = n2[e4];
    Te(t2[r2]) && delete t2[r2];
  }
  return t2;
}
function qe(e3, ...t2) {
  return Ke(e3, [Ge(e3), ...t2].reduce((e4, t3) => S(e4, t3), {}));
}
function Je(e3, t2) {
  if (typeof e3 != `object`)
    return {};
  let n2 = {}, r2 = Object.keys(t2);
  return Array.isArray(e3) ? r2.forEach((t3, r3) => {
    r3 < e3.length && (n2[t3] = true);
  }) : r2.forEach((t3) => {
    e3[t3] != null && (n2[t3] = true);
  }), n2;
}
function Ye(e3) {
  let {values: t2, breakpoints: n2, base: r2} = e3, i2 = r2 || Je(t2, n2), a2 = Object.keys(i2);
  if (a2.length === 0)
    return t2;
  let o2;
  return a2.reduce((e4, n3, r3) => {
    if (Array.isArray(t2))
      e4[n3] = t2[r3] == null ? t2[o2] : t2[r3], o2 = r3;
    else if (typeof t2 == `object` && t2) {
      let r4 = t2;
      e4[n3] = r4[n3] == null ? r4[o2] : r4[n3], o2 = n3;
    } else
      e4[n3] = t2;
    return e4;
  }, {});
}
function Xe(e3, t2) {
  if (Array.isArray(t2))
    return true;
  if (typeof t2 == `object` && t2) {
    for (let n3 = 0; n3 < e3.keys.length; n3 += 1)
      if (e3.keys[n3] in t2)
        return true;
    let n2 = Object.keys(t2);
    for (let t3 = 0; t3 < n2.length; t3 += 1)
      if (Re(e3.keys, n2[t3]))
        return true;
  }
  return false;
}
function Ze(e3) {
  if (typeof e3 != `string`)
    throw Error(y(7));
  return e3.charAt(0).toUpperCase() + e3.slice(1);
}
function Qe(e3, t2, n2, r2 = n2) {
  let i2;
  return i2 = typeof e3 == `function` ? e3(n2) : Array.isArray(e3) ? e3[n2] || r2 : typeof n2 == `string` && M(e3, n2) || r2, t2 && (i2 = t2(i2, r2, e3)), i2;
}
function $e(e3, t2, n2, r2) {
  let i2;
  return i2 = typeof e3 == `function` ? e3(n2) : Array.isArray(e3) ? e3[n2] || n2 : typeof n2 == `string` && M(e3, n2, true, r2) || n2, t2 && (i2 = t2(i2, n2, e3)), i2;
}
function M(e3, t2, n2 = true, r2 = void 0) {
  if (!e3 || !t2)
    return null;
  let i2 = t2.split(`.`);
  if (e3.vars && n2) {
    let t3 = et(e3.vars, i2, r2);
    if (t3 != null)
      return t3;
  }
  return et(e3, i2, r2);
}
function et(e3, t2, n2 = void 0) {
  let r2, i2 = e3, a2 = 0;
  for (; a2 < t2.length; ) {
    if (i2 == null)
      return i2;
    r2 = i2, i2 = i2[t2[a2]], a2 += 1;
  }
  if (n2 && i2 === void 0) {
    let e4 = t2[t2.length - 1], i3 = `${n2}${e4 === "default" ? `` : Ze(e4)}`;
    return r2?.[i3];
  }
  return i2;
}
function N(e3) {
  let {prop: t2, cssProperty: n2 = e3.prop, themeKey: r2, transform: i2} = e3, a2 = (e4) => {
    if (e4[t2] == null)
      return null;
    let a3 = e4[t2], o2 = e4.theme, s2 = M(o2, r2) || {};
    return A(e4, a3, (e5) => {
      let r3 = $e(s2, i2, e5, t2);
      return n2 === false ? r3 : {[n2]: r3};
    });
  };
  return a2.propTypes = {}, a2.filterProps = [t2], a2;
}
var tt = {internal_cache: {}}, P = {m: `margin`, p: `padding`}, nt = {t: `Top`, r: `Right`, b: `Bottom`, l: `Left`, x: [`Left`, `Right`], y: [`Top`, `Bottom`]}, rt = {marginX: `mx`, marginY: `my`, paddingX: `px`, paddingY: `py`}, F = {};
for (let e3 in P)
  F[e3] = [P[e3]];
for (let e3 in P)
  for (let t2 in nt) {
    let n2 = P[e3], r2 = nt[t2], i2 = Array.isArray(r2) ? r2.map((e4) => n2 + e4) : [n2 + r2];
    F[e3 + t2] = i2;
  }
for (let e3 in rt)
  F[e3] = F[rt[e3]];
var I = new Set([`m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`, `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginX`, `marginY`, `marginInline`, `marginInlineStart`, `marginInlineEnd`, `marginBlock`, `marginBlockStart`, `marginBlockEnd`]), it = new Set([`p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingX`, `paddingY`, `paddingInline`, `paddingInlineStart`, `paddingInlineEnd`, `paddingBlock`, `paddingBlockStart`, `paddingBlockEnd`]), at = new Set([...I, ...it]);
function L(e3, t2, n2, r2) {
  let i2 = M(e3, t2, true) ?? n2;
  return typeof i2 == `number` || typeof i2 == `string` ? (e4) => typeof e4 == `string` ? e4 : typeof i2 == `string` ? i2.startsWith(`var(`) && e4 === 0 ? 0 : i2.startsWith(`var(`) && e4 === 1 ? i2 : `calc(${e4} * ${i2})` : i2 * e4 : Array.isArray(i2) ? (e4) => {
    if (typeof e4 == `string`)
      return e4;
    let t3 = i2[Math.abs(e4)];
    return e4 >= 0 ? t3 : typeof t3 == `number` ? -t3 : typeof t3 == `string` && t3.startsWith(`var(`) ? `calc(-1 * ${t3})` : `-${t3}`;
  } : typeof i2 == `function` ? i2 : () => void 0;
}
function ot(e3) {
  return L(e3, `spacing`, 8, `spacing`);
}
function R(e3, t2) {
  return typeof t2 == `string` || t2 == null ? t2 : e3(t2);
}
var st = [``];
function ct(e3, t2) {
  let n2 = e3.theme ?? tt, r2 = n2?.internal_cache?.unarySpacing ?? ot(n2), i2 = {};
  for (let n3 in e3) {
    if (!t2.has(n3))
      continue;
    let a2 = F[n3] ?? (st[0] = n3, st), o2 = e3[n3];
    j(i2, e3.theme, o2, (e4, t3) => {
      let n4 = e4 ? i2[e4] : i2;
      for (let e5 = 0; e5 < a2.length; e5 += 1)
        n4[a2[e5]] = R(r2, t3);
    });
  }
  return i2;
}
function lt(e3) {
  return ct(e3, I);
}
lt.propTypes = {}, lt.filterProps = I;
var z = lt;
function ut(e3) {
  return ct(e3, it);
}
ut.propTypes = {}, ut.filterProps = it;
var B = ut;
function dt(e3) {
  return ct(e3, at);
}
dt.propTypes = {}, dt.filterProps = at;
var ft = dt, pt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, mt = g(function(e3) {
  return pt.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
}), ht = function(e3) {
  return e3 !== `theme`;
}, gt = function(e3) {
  return typeof e3 == `string` && e3.charCodeAt(0) > 96 ? mt : ht;
}, _t = function(e3, t2, n2) {
  var r2;
  if (t2) {
    var i2 = t2.shouldForwardProp;
    r2 = e3.__emotion_forwardProp && i2 ? function(t3) {
      return e3.__emotion_forwardProp(t3) && i2(t3);
    } : i2;
  }
  return typeof r2 != `function` && n2 && (r2 = e3.__emotion_forwardProp), r2;
}, vt = function(e3) {
  var t2 = e3.cache, n2 = e3.serialized, r2 = e3.isStringTag;
  return v(t2, n2, r2), ne(function() {
    return h(t2, n2, r2);
  }), null;
}, yt = function e2(r2, i2) {
  var s2 = r2.__emotion_real === r2, l2 = s2 && r2.__emotion_base || r2, u2, d2;
  i2 !== void 0 && (u2 = i2.label, d2 = i2.target);
  var f2 = _t(r2, i2, s2), p2 = f2 || gt(l2), m2 = !p2(`as`);
  return function() {
    var h2 = arguments, g2 = s2 && r2.__emotion_styles !== void 0 ? r2.__emotion_styles.slice(0) : [];
    if (u2 !== void 0 && g2.push(`label:` + u2 + `;`), h2[0] == null || h2[0].raw === void 0)
      g2.push.apply(g2, h2);
    else {
      var v2 = h2[0];
      g2.push(v2[0]);
      for (var ne2 = h2.length, y2 = 1; y2 < ne2; y2++)
        g2.push(h2[y2], v2[y2]);
    }
    var b2 = t(function(e3, t2, r3) {
      var i3 = m2 && e3.as || l2, s3 = ``, u3 = [], h3 = e3;
      if (e3.theme == null) {
        for (var v3 in h3 = {}, e3)
          h3[v3] = e3[v3];
        h3.theme = a(n);
      }
      typeof e3.className == `string` ? s3 = _(t2.registered, u3, e3.className) : e3.className != null && (s3 = e3.className + ` `);
      var te2 = ee(g2.concat(u3), t2.registered, h3);
      s3 += t2.key + `-` + te2.name, d2 !== void 0 && (s3 += ` ` + d2);
      var ne3 = m2 && f2 === void 0 ? gt(i3) : p2, y3 = {};
      for (var b3 in e3)
        m2 && b3 === `as` || ne3(b3) && (y3[b3] = e3[b3]);
      return y3.className = s3, r3 && (y3.ref = r3), c(o, null, c(vt, {cache: t2, serialized: te2, isStringTag: typeof i3 == `string`}), c(i3, y3));
    });
    return b2.displayName = u2 === void 0 ? `Styled(` + (typeof l2 == `string` ? l2 : l2.displayName || l2.name || `Component`) + `)` : u2, b2.defaultProps = r2.defaultProps, b2.__emotion_real = b2, b2.__emotion_base = l2, b2.__emotion_styles = g2, b2.__emotion_forwardProp = f2, Object.defineProperty(b2, "toString", {value: function() {
      return `.` + d2;
    }}), b2.withComponent = function(t2, n2) {
      return e2(t2, te({}, i2, n2, {shouldForwardProp: _t(b2, n2, true)})).apply(void 0, g2);
    }, b2;
  };
}, bt = `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`), xt = yt.bind(null);
bt.forEach(function(e3) {
  xt[e3] = xt(e3);
});
function St(e3, t2) {
  return xt(e3, t2);
}
function Ct(e3, t2) {
  Array.isArray(e3.__emotion_styles) && (e3.__emotion_styles = t2(e3.__emotion_styles));
}
var wt = [];
function V(e3) {
  return wt[0] = e3, ee(wt);
}
var Tt = typeof window < `u` ? s : l;
function Et(e3) {
  return Object.keys(e3).length === 0;
}
function Dt(e3 = null) {
  let t2 = a(n);
  return !t2 || Et(t2) ? e3 : t2;
}
var Ot = u();
function kt(_a) {
  var _b = _a, {value: e3} = _b, t2 = __objRest(_b, ["value"]);
  return m(Ot.Provider, __spreadValues({value: e3 ?? true}, t2));
}
var At = () => a(Ot) ?? false;
function jt(e3) {
  var t2, n2, r2 = ``;
  if (typeof e3 == `string` || typeof e3 == `number`)
    r2 += e3;
  else if (typeof e3 == `object`) {
    if (Array.isArray(e3)) {
      var i2 = e3.length;
      for (t2 = 0; t2 < i2; t2++)
        e3[t2] && (n2 = jt(e3[t2])) && (r2 && (r2 += ` `), r2 += n2);
    } else
      for (n2 in e3)
        e3[n2] && (r2 && (r2 += ` `), r2 += n2);
  }
  return r2;
}
function Mt() {
  for (var e3, t2, n2 = 0, r2 = ``, i2 = arguments.length; n2 < i2; n2++)
    (e3 = arguments[n2]) && (t2 = jt(e3)) && (r2 && (r2 += ` `), r2 += t2);
  return r2;
}
function H(e3, t2, n2 = false) {
  let r2 = __spreadValues({}, t2);
  for (let i2 in e3)
    if (Object.prototype.hasOwnProperty.call(e3, i2)) {
      let a2 = i2;
      if (a2 === `components` || a2 === `slots`)
        r2[a2] = __spreadValues(__spreadValues({}, e3[a2]), r2[a2]);
      else if (a2 === `componentsProps` || a2 === `slotProps`) {
        let i3 = e3[a2], o2 = t2[a2];
        if (!o2)
          r2[a2] = i3 || {};
        else if (!i3)
          r2[a2] = o2;
        else {
          r2[a2] = __spreadValues({}, o2);
          for (let e4 in i3)
            if (Object.prototype.hasOwnProperty.call(i3, e4)) {
              let t3 = e4, s2 = i3[t3], c2 = o2[t3];
              typeof s2 == `function` || typeof c2 == `function` ? r2[a2][t3] = (...e5) => H((typeof s2 == `function` ? s2(...e5) : s2) ?? {}, (typeof c2 == `function` ? c2(...e5) : c2) ?? {}, n2) : r2[a2][t3] = H(s2 ?? {}, c2 ?? {}, n2);
            }
        }
      } else
        a2 === `className` && n2 && t2.className !== void 0 ? r2.className = Mt(e3?.className, t2?.className) : a2 === `style` && n2 && t2.style ? r2.style = __spreadValues(__spreadValues({}, e3?.style), t2?.style) : r2[a2] === void 0 && (r2[a2] = e3[a2]);
    }
  return r2;
}
var Nt = u(void 0);
function Pt({value: e3, children: t2}) {
  return m(Nt.Provider, {value: e3, children: t2});
}
function Ft(e3) {
  let {theme: t2, name: n2, props: r2} = e3;
  if (!t2 || !t2.components || !t2.components[n2])
    return r2;
  let i2 = t2.components[n2];
  return i2.defaultProps ? H(i2.defaultProps, r2, t2.components.mergeClassNameAndStyle) : !i2.styleOverrides && !i2.variants ? H(i2, r2, t2.components.mergeClassNameAndStyle) : r2;
}
function It({props: e3, name: t2}) {
  return Ft({props: e3, name: t2, theme: {components: a(Nt)}});
}
var Lt = 0;
function Rt(e3) {
  let [t2, n2] = i(e3), r2 = e3 || t2;
  return l(() => {
    t2 ?? (Lt += 1, n2(`mui-${Lt}`));
  }, [t2]), r2;
}
var zt = __spreadValues({}, p).useId;
function Bt(e3) {
  if (zt !== void 0) {
    let t2 = zt();
    return e3 ?? t2;
  }
  return Rt(e3);
}
var Vt = {borderRadius: 4};
function Ht(e3 = 8, t2 = ot({spacing: e3})) {
  if (e3.mui)
    return e3;
  let n2 = (...e4) => (e4.length === 0 ? [1] : e4).map((e5) => {
    let n3 = t2(e5);
    return typeof n3 == `number` ? `${n3}px` : n3;
  }).join(` `);
  return n2.mui = true, n2;
}
function U(...e3) {
  let t2 = e3.reduce((e4, t3) => (t3.filterProps.forEach((n3) => {
    e4[n3] = t3;
  }), e4), {}), n2 = (e4) => {
    let n3 = {};
    for (let r2 in e4)
      t2[r2] && E(n3, t2[r2](e4));
    return n3;
  };
  return n2.propTypes = {}, n2.filterProps = e3.reduce((e4, t3) => e4.concat(t3.filterProps), []), n2;
}
function W(e3) {
  return typeof e3 == `number` ? `${e3}px solid` : e3;
}
function G(e3, t2) {
  return N({prop: e3, themeKey: `borders`, transform: t2});
}
var Ut = G(`border`, W), Wt = G(`borderTop`, W), Gt = G(`borderRight`, W), Kt = G(`borderBottom`, W), qt = G(`borderLeft`, W), Jt = G(`borderColor`), Yt = G(`borderTopColor`), Xt = G(`borderRightColor`), Zt = G(`borderBottomColor`), Qt = G(`borderLeftColor`), $t = G(`outline`, W), en = G(`outlineColor`), K = (e3) => {
  if (e3.borderRadius !== void 0 && e3.borderRadius !== null) {
    let t2 = L(e3.theme, `shape.borderRadius`, 4, `borderRadius`);
    return A(e3, e3.borderRadius, (e4) => ({borderRadius: R(t2, e4)}));
  }
  return null;
};
K.propTypes = {}, K.filterProps = [`borderRadius`];
var tn = U(Ut, Wt, Gt, Kt, qt, Jt, Yt, Xt, Zt, Qt, K, $t, en), q = (e3) => {
  if (e3.gap !== void 0 && e3.gap !== null) {
    let t2 = L(e3.theme, `spacing`, 8, `gap`);
    return A(e3, e3.gap, (e4) => ({gap: R(t2, e4)}));
  }
  return null;
};
q.propTypes = {}, q.filterProps = [`gap`];
var J = (e3) => {
  if (e3.columnGap !== void 0 && e3.columnGap !== null) {
    let t2 = L(e3.theme, `spacing`, 8, `columnGap`);
    return A(e3, e3.columnGap, (e4) => ({columnGap: R(t2, e4)}));
  }
  return null;
};
J.propTypes = {}, J.filterProps = [`columnGap`];
var Y = (e3) => {
  if (e3.rowGap !== void 0 && e3.rowGap !== null) {
    let t2 = L(e3.theme, `spacing`, 8, `rowGap`);
    return A(e3, e3.rowGap, (e4) => ({rowGap: R(t2, e4)}));
  }
  return null;
};
Y.propTypes = {}, Y.filterProps = [`rowGap`];
var nn = N({prop: `gridColumn`}), rn = N({prop: `gridRow`}), an = N({prop: `gridAutoFlow`}), on = N({prop: `gridAutoColumns`}), sn = N({prop: `gridAutoRows`}), cn = N({prop: `gridTemplateColumns`}), ln = N({prop: `gridTemplateRows`}), un = N({prop: `gridTemplateAreas`}), dn = N({prop: `gridArea`}), fn = U(q, J, Y, nn, rn, an, on, sn, cn, ln, un, dn);
function X(e3, t2) {
  return t2 === `grey` ? t2 : e3;
}
var pn = N({prop: `color`, themeKey: `palette`, transform: X}), mn = N({prop: `bgcolor`, cssProperty: `backgroundColor`, themeKey: `palette`, transform: X}), hn = N({prop: `backgroundColor`, themeKey: `palette`, transform: X}), gn = U(pn, mn, hn), _n = O;
function Z(e3) {
  return e3 <= 1 && e3 !== 0 ? `${e3 * 100}%` : e3;
}
var vn = N({prop: `width`, transform: Z}), Q = (e3) => e3.maxWidth !== void 0 && e3.maxWidth !== null ? A(e3, e3.maxWidth, (t2) => {
  let n2 = e3.theme?.breakpoints?.values?.[t2] || _n[t2];
  return n2 ? e3.theme?.breakpoints?.unit === `px` ? {maxWidth: n2} : {maxWidth: `${n2}${e3.theme.breakpoints.unit}`} : {maxWidth: Z(t2)};
}) : null;
Q.filterProps = [`maxWidth`];
var yn = N({prop: `minWidth`, transform: Z}), bn = N({prop: `height`, transform: Z}), xn = N({prop: `maxHeight`, transform: Z}), Sn = N({prop: `minHeight`, transform: Z}), Cn = N({prop: `size`, cssProperty: `width`, transform: Z}), wn = N({prop: `size`, cssProperty: `height`, transform: Z}), Tn = N({prop: `boxSizing`}), En = U(vn, Q, yn, bn, xn, Sn, Tn), Dn = {border: {themeKey: `borders`, transform: W}, borderTop: {themeKey: `borders`, transform: W}, borderRight: {themeKey: `borders`, transform: W}, borderBottom: {themeKey: `borders`, transform: W}, borderLeft: {themeKey: `borders`, transform: W}, borderColor: {themeKey: `palette`}, borderTopColor: {themeKey: `palette`}, borderRightColor: {themeKey: `palette`}, borderBottomColor: {themeKey: `palette`}, borderLeftColor: {themeKey: `palette`}, outline: {themeKey: `borders`, transform: W}, outlineColor: {themeKey: `palette`}, borderRadius: {themeKey: `shape.borderRadius`, style: K}, color: {themeKey: `palette`, transform: X}, bgcolor: {themeKey: `palette`, cssProperty: `backgroundColor`, transform: X}, backgroundColor: {themeKey: `palette`, transform: X}, p: {style: B}, pt: {style: B}, pr: {style: B}, pb: {style: B}, pl: {style: B}, px: {style: B}, py: {style: B}, padding: {style: B}, paddingTop: {style: B}, paddingRight: {style: B}, paddingBottom: {style: B}, paddingLeft: {style: B}, paddingX: {style: B}, paddingY: {style: B}, paddingInline: {style: B}, paddingInlineStart: {style: B}, paddingInlineEnd: {style: B}, paddingBlock: {style: B}, paddingBlockStart: {style: B}, paddingBlockEnd: {style: B}, m: {style: z}, mt: {style: z}, mr: {style: z}, mb: {style: z}, ml: {style: z}, mx: {style: z}, my: {style: z}, margin: {style: z}, marginTop: {style: z}, marginRight: {style: z}, marginBottom: {style: z}, marginLeft: {style: z}, marginX: {style: z}, marginY: {style: z}, marginInline: {style: z}, marginInlineStart: {style: z}, marginInlineEnd: {style: z}, marginBlock: {style: z}, marginBlockStart: {style: z}, marginBlockEnd: {style: z}, displayPrint: {cssProperty: false, transform: (e3) => ({"@media print": {display: e3}})}, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: {style: q}, rowGap: {style: Y}, columnGap: {style: J}, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: {themeKey: `zIndex`}, top: {}, right: {}, bottom: {}, left: {}, boxShadow: {themeKey: `shadows`}, width: {transform: Z}, maxWidth: {style: Q}, minWidth: {transform: Z}, height: {transform: Z}, maxHeight: {transform: Z}, minHeight: {transform: Z}, boxSizing: {}, font: {themeKey: `font`}, fontFamily: {themeKey: `typography`}, fontSize: {themeKey: `typography`}, fontStyle: {themeKey: `typography`}, fontWeight: {themeKey: `typography`}, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: {cssProperty: false, themeKey: `typography`}}, On = {};
function kn() {
  function e3(t2) {
    if (!t2.sx)
      return null;
    let {sx: n2, theme: r2 = On, nested: i2} = t2, a2 = r2.unstable_sxConfig ?? Dn, o2 = {sx: null, theme: r2, nested: true};
    function s2(n3) {
      let s3 = n3;
      if (typeof n3 == `function`)
        s3 = n3(r2);
      else if (typeof n3 != `object`)
        return n3;
      if (!s3)
        return null;
      let c2 = r2.breakpoints ?? k, l2 = Ge(c2);
      for (let n4 in s3) {
        let i3 = Mn(s3[n4], r2);
        if (i3 != null) {
          if (typeof i3 != `object`) {
            jn(l2, n4, i3, r2, a2);
            continue;
          }
          if (a2[n4]) {
            jn(l2, n4, i3, r2, a2);
            continue;
          }
          Xe(c2, i3) ? j(l2, t2.theme, i3, (e4, t3) => {
            l2[e4][n4] = t3;
          }) : (o2.sx = i3, l2[n4] = e3(o2));
        }
      }
      return !i2 && r2.modularCssLayers ? {"@layer sx": Ie(r2, Ke(c2, l2))} : Ie(r2, Ke(c2, l2));
    }
    return Array.isArray(n2) ? n2.map(s2) : s2(n2);
  }
  return e3.filterProps = [`sx`], e3;
}
var An = kn();
function jn(e3, t2, n2, r2, i2) {
  let a2 = i2[t2];
  if (!a2) {
    e3[t2] = n2;
    return;
  }
  if (n2 == null)
    return;
  let {themeKey: o2} = a2;
  if (o2 === `typography` && n2 === `inherit`) {
    e3[t2] = n2;
    return;
  }
  let {style: s2} = a2;
  if (s2) {
    E(e3, s2({[t2]: n2, theme: r2}));
    return;
  }
  let {cssProperty: c2 = t2, transform: l2} = a2, u2 = M(r2, o2);
  j(e3, r2, n2, (n3, r3) => {
    let i3 = $e(u2, l2, r3, t2);
    c2 === false ? E(n3 ? e3[n3] : e3, i3) : n3 ? e3[n3][c2] = i3 : e3[c2] = i3;
  });
}
function Mn(e3, t2) {
  return typeof e3 == `function` ? e3(t2) : e3;
}
function Nn(e3, t2) {
  let n2 = this;
  if (n2.vars) {
    if (!n2.colorSchemes?.[e3] || typeof n2.getColorSchemeSelector != `function`)
      return {};
    let r2 = n2.getColorSchemeSelector(e3);
    return r2 === `&` ? t2 : ((r2.includes(`data-`) || r2.includes(`.`)) && (r2 = `*:where(${r2.replace(/\s*&$/, ``)}) &`), {[r2]: t2});
  }
  return n2.palette.mode === e3 ? t2 : {};
}
function Pn(e3 = {}, ...t2) {
  let _a = e3, {breakpoints: n2 = {}, palette: r2 = {}, spacing: i2, shape: a2 = {}} = _a, o2 = __objRest(_a, ["breakpoints", "palette", "spacing", "shape"]), s2 = re(n2), c2 = Ht(i2), l2 = S({breakpoints: s2, direction: `ltr`, components: {}, palette: __spreadValues({mode: `light`}, r2), spacing: c2, shape: __spreadValues(__spreadValues({}, Vt), a2)}, o2);
  return l2 = Be(l2), l2.applyStyles = Nn, l2 = t2.reduce((e4, t3) => S(e4, t3), l2), l2.unstable_sxConfig = __spreadValues(__spreadValues({}, Dn), o2?.unstable_sxConfig), l2.unstable_sx = function(e4) {
    return An({sx: e4, theme: this});
  }, l2.internal_cache = {}, l2;
}
var Fn = Pn();
function In(e3 = Fn) {
  return Dt(e3);
}
var Ln = new Set([`__proto__`, `constructor`, `prototype`]), Rn = (e3, t2, n2, r2 = []) => {
  let i2 = e3;
  for (let e4 = 0; e4 < t2.length; e4 += 1) {
    let a2 = t2[e4];
    if (Ln.has(a2))
      break;
    e4 === t2.length - 1 ? Array.isArray(i2) ? i2[Number(a2)] = n2 : i2 && typeof i2 == `object` && (i2[a2] = n2) : i2 && typeof i2 == `object` && (i2[a2] || (i2[a2] = r2.includes(a2) ? [] : {}), i2 = i2[a2]);
  }
}, zn = (e3, t2, n2) => {
  function r2(e4, i2 = [], a2 = []) {
    Object.entries(e4).forEach(([e5, o2]) => {
      (!n2 || n2 && !n2([...i2, e5])) && o2 != null && (typeof o2 == `object` && Object.keys(o2).length > 0 ? r2(o2, [...i2, e5], Array.isArray(o2) ? [...a2, e5] : a2) : t2([...i2, e5], o2, a2));
    });
  }
  r2(e3);
}, Bn = (e3, t2) => typeof t2 == `number` ? [`lineHeight`, `fontWeight`, `opacity`, `zIndex`].some((t3) => e3.includes(t3)) || e3[e3.length - 1].toLowerCase().includes(`opacity`) ? t2 : `${t2}px` : t2;
function Vn(e3, t2) {
  let {prefix: n2, shouldSkipGeneratingVar: r2} = t2 || {}, i2 = {}, a2 = {}, o2 = {};
  return zn(e3, (e4, t3, s2) => {
    if ((typeof t3 == `string` || typeof t3 == `number`) && (!r2 || !r2(e4, t3))) {
      let r3 = `--${n2 ? `${n2}-` : ``}${e4.join(`-`)}`, c2 = Bn(e4, t3);
      Object.assign(i2, {[r3]: c2}), Rn(a2, e4, `var(${r3})`, s2), Rn(o2, e4, `var(${r3}, ${c2})`, s2);
    }
  }, (e4) => e4[0] === `vars`), {css: i2, vars: a2, varsWithDefaults: o2};
}
function Hn(e3, t2 = {}) {
  let {getSelector: n2 = _2, disableCssColorScheme: r2, colorSchemeSelector: i2, enableContrastVars: a2} = t2, _a = e3, {colorSchemes: o2 = {}, components: s2, defaultColorScheme: c2 = `light`} = _a, l2 = __objRest(_a, ["colorSchemes", "components", "defaultColorScheme"]), {vars: u2, css: d2, varsWithDefaults: f2} = Vn(l2, t2), p2 = f2, m2 = {}, _b = o2, {[c2]: h2} = _b, g2 = __objRest(_b, [__restKey(c2)]);
  if (Object.entries(g2 || {}).forEach(([e4, n3]) => {
    let {vars: r3, css: i3, varsWithDefaults: a3} = Vn(n3, t2);
    p2 = S(p2, a3), m2[e4] = {css: i3, vars: r3};
  }), h2) {
    let {css: e4, vars: n3, varsWithDefaults: r3} = Vn(h2, t2);
    p2 = S(p2, r3), m2[c2] = {css: e4, vars: n3};
  }
  function _2(t3, n3) {
    let r3 = i2;
    if (i2 === `class` && (r3 = `.%s`), i2 === `data` && (r3 = `[data-%s]`), i2?.startsWith(`data-`) && !i2.includes(`%s`) && (r3 = `[${i2}="%s"]`), t3) {
      if (r3 === `media`)
        return e3.defaultColorScheme === t3 ? `:root` : {[`@media (prefers-color-scheme: ${o2[t3]?.palette?.mode || t3})`]: {":root": n3}};
      if (r3)
        return e3.defaultColorScheme === t3 ? `:root, ${r3.replace(`%s`, String(t3))}` : r3.replace(`%s`, String(t3));
    }
    return `:root`;
  }
  return {vars: p2, generateThemeVars: () => {
    let e4 = __spreadValues({}, u2);
    return Object.entries(m2).forEach(([, {vars: t3}]) => {
      e4 = S(e4, t3);
    }), e4;
  }, generateStyleSheets: () => {
    let t3 = [], i3 = e3.defaultColorScheme || `light`;
    function s3(e4, n3) {
      Object.keys(n3).length && t3.push(typeof e4 == `string` ? {[e4]: __spreadValues({}, n3)} : e4);
    }
    s3(n2(void 0, __spreadValues({}, d2)), d2);
    let _a2 = m2, {[i3]: c3} = _a2, l3 = __objRest(_a2, [__restKey(i3)]);
    if (c3) {
      let {css: e4} = c3, t4 = o2[i3]?.palette?.mode, a3 = !r2 && t4 ? __spreadValues({colorScheme: t4}, e4) : __spreadValues({}, e4);
      s3(n2(i3, __spreadValues({}, a3)), a3);
    }
    return Object.entries(l3).forEach(([e4, {css: t4}]) => {
      let i4 = o2[e4]?.palette?.mode, a3 = !r2 && i4 ? __spreadValues({colorScheme: i4}, t4) : __spreadValues({}, t4);
      s3(n2(e4, __spreadValues({}, a3)), a3);
    }), a2 && t3.push({":root": {"--__l-threshold": `0.7`, "--__l": `clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)`, "--__a": `clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)`}}), t3;
  }};
}
function Un(e3) {
  return function(t2) {
    return e3 === `media` ? `@media (prefers-color-scheme: ${t2})` : e3 ? e3.startsWith(`data-`) && !e3.includes(`%s`) ? `[${e3}="${t2}"] &` : e3 === `class` ? `.${t2} &` : e3 === `data` ? `[data-${t2}] &` : `${e3.replace(`%s`, t2)} &` : `&`;
  };
}
var Wn = (e3) => e3, Gn = (() => {
  let e3 = Wn;
  return {configure(t2) {
    e3 = t2;
  }, generate(t2) {
    return e3(t2);
  }, reset() {
    e3 = Wn;
  }};
})(), Kn = {active: `active`, checked: `checked`, completed: `completed`, disabled: `disabled`, error: `error`, expanded: `expanded`, focused: `focused`, focusVisible: `focusVisible`, open: `open`, readOnly: `readOnly`, required: `required`, selected: `selected`};
function qn(e3, t2, n2 = `Mui`) {
  let r2 = Kn[t2];
  return r2 ? `${n2}-${r2}` : `${Gn.generate(e3)}-${t2}`;
}
function Jn(e3, t2, n2 = `Mui`) {
  let r2 = {};
  return t2.forEach((t3) => {
    r2[t3] = qn(e3, t3, n2);
  }), r2;
}
function Yn(e3, t2, n2 = void 0) {
  let r2 = {};
  for (let i2 in e3) {
    let a2 = e3[i2], o2 = ``, s2 = true;
    for (let e4 = 0; e4 < a2.length; e4 += 1) {
      let r3 = a2[e4];
      r3 && (o2 += (s2 === true ? `` : ` `) + t2(r3), s2 = false, n2 && n2[r3] && (o2 += ` ` + n2[r3]));
    }
    r2[i2] = o2;
  }
  return r2;
}
function Xn(e3) {
  let _a = e3, {variants: t2} = _a, n2 = __objRest(_a, ["variants"]), r2 = {variants: t2, style: V(n2), isProcessed: true};
  return r2.style === n2 || t2 && t2.forEach((e4) => {
    typeof e4.style != `function` && (e4.style = V(e4.style));
  }), r2;
}
var Zn = Pn();
function Qn(e3) {
  return e3 !== `ownerState` && e3 !== `theme` && e3 !== `sx` && e3 !== `as`;
}
function $(e3, t2) {
  return t2 && e3 && typeof e3 == `object` && e3.styles && !e3.styles.startsWith(`@layer`) && (e3.styles = `@layer ${t2}{${String(e3.styles)}}`), e3;
}
function $n(e3) {
  return e3 ? (t2, n2) => n2[e3] : null;
}
function er(e3, t2, n2) {
  e3.theme = Te(e3.theme) ? n2 : e3.theme[t2] || e3.theme;
}
function tr(e3, t2, n2) {
  let r2 = typeof t2 == `function` ? t2(e3) : t2;
  if (Array.isArray(r2))
    return r2.flatMap((t3) => tr(e3, t3, n2));
  if (Array.isArray(r2?.variants)) {
    let t3;
    if (r2.isProcessed)
      t3 = n2 ? $(r2.style, n2) : r2.style;
    else {
      let _a = r2, {variants: e4} = _a, i2 = __objRest(_a, ["variants"]);
      t3 = n2 ? $(V(i2), n2) : i2;
    }
    return nr(e3, r2.variants, [t3], n2);
  }
  return r2?.isProcessed ? n2 ? $(V(r2.style), n2) : r2.style : n2 ? $(V(r2), n2) : r2;
}
function nr(e3, t2, n2 = [], r2 = void 0) {
  let i2;
  variantLoop:
    for (let a2 = 0; a2 < t2.length; a2 += 1) {
      let o2 = t2[a2];
      if (typeof o2.props == `function`) {
        if (i2 ?? (i2 = __spreadProps(__spreadValues(__spreadValues({}, e3), e3.ownerState), {ownerState: e3.ownerState})), !o2.props(i2))
          continue;
      } else
        for (let t3 in o2.props)
          if (e3[t3] !== o2.props[t3] && e3.ownerState?.[t3] !== o2.props[t3])
            continue variantLoop;
      typeof o2.style == `function` ? (i2 ?? (i2 = __spreadProps(__spreadValues(__spreadValues({}, e3), e3.ownerState), {ownerState: e3.ownerState})), n2.push(r2 ? $(V(o2.style(i2)), r2) : o2.style(i2))) : n2.push(r2 ? $(V(o2.style), r2) : o2.style);
    }
  return n2;
}
function rr(e3 = {}) {
  let {themeId: t2, defaultTheme: n2 = Zn, rootShouldForwardProp: r2 = Qn, slotShouldForwardProp: i2 = Qn} = e3;
  function a2(e4) {
    er(e4, t2, n2);
  }
  return (e4, t3 = {}) => {
    Ct(e4, (e5) => e5.filter((e6) => e6 !== An));
    let _a = t3, {name: n3, slot: o2, skipVariantsResolver: s2, skipSx: c2, overridesResolver: l2 = $n(ar(o2))} = _a, u2 = __objRest(_a, ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]), d2 = n3 && n3.startsWith(`Mui`) || o2 ? `components` : `custom`, f2 = s2 === void 0 ? o2 && o2 !== `Root` && o2 !== `root` || false : s2, p2 = c2 || false, m2 = Qn;
    o2 === `Root` || o2 === `root` ? m2 = r2 : o2 ? m2 = i2 : ir(e4) && (m2 = void 0);
    let h2 = St(e4, __spreadValues({shouldForwardProp: m2, label: void 0}, u2)), g2 = (e5) => {
      if (e5.__emotion_real === e5)
        return e5;
      if (typeof e5 == `function`)
        return function(t4) {
          return tr(t4, e5, t4.theme.modularCssLayers ? d2 : void 0);
        };
      if (x(e5)) {
        let t4 = Xn(e5);
        return function(e6) {
          return t4.variants ? tr(e6, t4, e6.theme.modularCssLayers ? d2 : void 0) : e6.theme.modularCssLayers ? $(t4.style, d2) : t4.style;
        };
      }
      return e5;
    }, _2 = (...t4) => {
      let r3 = [], i3 = t4.map(g2), o3 = [];
      if (r3.push(a2), n3 && l2 && o3.push(function(e5) {
        let t5 = e5.theme.components?.[n3]?.styleOverrides;
        if (!t5)
          return null;
        let r4 = {};
        for (let n4 in t5)
          r4[n4] = tr(e5, t5[n4], e5.theme.modularCssLayers ? `theme` : void 0);
        return l2(e5, r4);
      }), n3 && !f2 && o3.push(function(e5) {
        let t5 = e5.theme?.components?.[n3]?.variants;
        return t5 ? nr(e5, t5, [], e5.theme.modularCssLayers ? `theme` : void 0) : null;
      }), p2 || o3.push(An), Array.isArray(i3[0])) {
        let e5 = i3.shift(), t5 = Array(r3.length).fill(``), n4 = Array(o3.length).fill(``), a3;
        a3 = [...t5, ...e5, ...n4], a3.raw = [...t5, ...e5.raw, ...n4], r3.unshift(a3);
      }
      let s3 = [...r3, ...i3, ...o3], c3 = h2(...s3);
      return e4.muiName && (c3.muiName = e4.muiName), c3;
    };
    return h2.withConfig && (_2.withConfig = h2.withConfig), _2;
  };
}
function ir(e3) {
  return typeof e3 == `string` && e3.charCodeAt(0) > 96;
}
function ar(e3) {
  return e3 && e3.charAt(0).toLowerCase() + e3.slice(1);
}
function or(e3) {
  let {theme: t2, name: n2, props: r2} = e3;
  return !t2 || !t2.components || !t2.components[n2] || !t2.components[n2].defaultProps ? r2 : H(t2.components[n2].defaultProps, r2);
}
function sr(e3) {
  let {props: t2, name: n2, defaultTheme: r2, themeId: i2} = e3, a2 = In(r2);
  return i2 && (a2 = a2[i2] || a2), or({theme: a2, name: n2, props: t2});
}
function cr(e3, t2) {
  return d(e3) && t2.indexOf(e3.type.muiName ?? e3.type?._payload?.value?.muiName) !== -1;
}
function lr(e3, t2, n2, r2, a2) {
  let [o2, s2] = i(() => a2 && n2 ? n2(e3).matches : r2 ? r2(e3).matches : t2);
  return Tt(() => {
    if (!n2)
      return;
    let t3 = n2(e3), r3 = () => {
      s2(t3.matches);
    };
    return r3(), t3.addEventListener(`change`, r3), () => {
      t3.removeEventListener(`change`, r3);
    };
  }, [e3, n2]), o2;
}
var ur = __spreadValues({}, p).useSyncExternalStore;
function dr(e3, t2, n2, i2, a2) {
  let o2 = f(() => t2, [t2]), s2 = r(() => {
    if (a2 && n2)
      return () => n2(e3).matches;
    if (i2 !== null) {
      let {matches: t3} = i2(e3);
      return () => t3;
    }
    return o2;
  }, [o2, e3, i2, a2, n2]), [c2, l2] = r(() => {
    if (n2 === null)
      return [o2, () => () => {
      }];
    let t3 = n2(e3);
    return [() => t3.matches, (e4) => (t3.addEventListener(`change`, e4), () => {
      t3.removeEventListener(`change`, e4);
    })];
  }, [o2, n2, e3]);
  return ur(l2, c2, s2);
}
function fr(e3 = {}) {
  let {themeId: t2} = e3;
  return function(e4, n2 = {}) {
    let i2 = Dt();
    i2 && t2 && (i2 = i2[t2] || i2);
    let a2 = typeof window < `u` && window.matchMedia !== void 0 ? window.matchMedia : null, {defaultMatches: o2 = false, matchMedia: s2, ssrMatchMedia: c2 = null, noSsr: l2 = false} = or({name: `MuiUseMediaQuery`, props: n2, theme: i2}), u2 = r(() => s2 === void 0 ? a2 === null ? null : a2.bind(window) : s2, [s2, a2]), d2 = typeof e4 == `function` ? e4(i2) : e4;
    return d2 = d2.replace(/^@media( ?)/m, ``), d2.includes(`print`) && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", `Using the print media query to modify print styles can lead to unexpected results.`, "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (ur === void 0 ? lr : dr)(d2, o2, u2, c2, l2);
  };
}
var pr = fr();
export {
  Zt as $,
  be as $t,
  En as A,
  I as At,
  fn as B,
  Ye as Bt,
  bn as C,
  Tt as Ct,
  yn as D,
  L as Dt,
  Sn as E,
  ot as Et,
  pn as F,
  Qe as Ft,
  nn as G,
  de as Gt,
  on as H,
  Be as Ht,
  gn as I,
  N as It,
  cn as J,
  Se as Jt,
  rn as K,
  ve as Kt,
  X as L,
  Ze as Lt,
  vn as M,
  it as Mt,
  hn as N,
  ft as Nt,
  wn as O,
  R as Ot,
  mn as P,
  M as Pt,
  Kt as Q,
  me as Qt,
  J as R,
  A as Rt,
  Tn as S,
  Dt as St,
  Q as T,
  St as Tt,
  an as U,
  ge as Ut,
  dn as V,
  We as Vt,
  sn as W,
  we as Wt,
  Y as X,
  T as Xt,
  ln as Y,
  he as Yt,
  Ut as Z,
  le as Zt,
  In as _,
  It as _t,
  or as a,
  w as an,
  Xt as at,
  kn as b,
  kt as bt,
  Zn as c,
  S as cn,
  W as ct,
  Jn as d,
  y as dn,
  en as dt,
  _e as en,
  Jt as et,
  qn as f,
  U as ft,
  Vn as g,
  Pt as gt,
  Hn as h,
  Bt as ht,
  sr as i,
  xe as in,
  Gt as it,
  Z as j,
  B as jt,
  Cn as k,
  z as kt,
  Xn as l,
  x as ln,
  tn as lt,
  Un as m,
  Vt as mt,
  pr as n,
  ye as nn,
  Qt as nt,
  rr as o,
  pe as on,
  Wt as ot,
  Gn as p,
  Ht as pt,
  un as q,
  C as qt,
  cr as r,
  Ce as rn,
  K as rt,
  Qn as s,
  se as sn,
  Yt as st,
  fr as t,
  fe as tn,
  qt as tt,
  Yn as u,
  re as un,
  $t as ut,
  Pn as v,
  H as vt,
  xn as w,
  V as wt,
  Dn as x,
  At as xt,
  An as y,
  Mt as yt,
  q as z,
  qe as zt
};
