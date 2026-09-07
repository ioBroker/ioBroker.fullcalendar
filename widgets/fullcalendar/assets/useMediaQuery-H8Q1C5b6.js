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
import {t as e} from "./rolldown-runtime-C0FnF6B9.js";
import {T as t, _ as n, b as r, d as i, f as a, g as o, h as s, i as c, o as l, p as u, r as d, s as f, u as p, w as m} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js";
import {n as h} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CE8M302w.js";
function g(e3, ...t2) {
  let n2 = new URL(`https://mui.com/production-error/?code=${e3}`);
  return t2.forEach((e4) => n2.searchParams.append(`args[]`, e4)), `Minified MUI error #${e3}; visit ${n2} for the full message.`;
}
t();
var _ = (e3) => {
  let t2 = Object.keys(e3).map((t3) => ({key: t3, val: e3[t3]})) || [];
  return t2.sort((e4, t3) => e4.val - t3.val), t2.reduce((e4, t3) => __spreadProps(__spreadValues({}, e4), {[t3.key]: t3.val}), {});
};
function v(e3) {
  let _a = e3, {values: t2 = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}, unit: n2 = `px`, step: r2 = 5} = _a, i2 = __objRest(_a, ["values", "unit", "step"]), a2 = _(t2), o2 = Object.keys(a2);
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
var y = e((e3) => {
  var t2 = Symbol.for(`react.fragment`), n2 = Symbol.for(`react.strict_mode`), r2 = Symbol.for(`react.profiler`), i2 = Symbol.for(`react.consumer`), a2 = Symbol.for(`react.context`), o2 = Symbol.for(`react.forward_ref`), s2 = Symbol.for(`react.suspense`), c2 = Symbol.for(`react.suspense_list`), l2 = Symbol.for(`react.memo`), u2 = Symbol.for(`react.lazy`), d2 = Symbol.for(`react.client.reference`);
  e3.isValidElementType = function(e4) {
    return !!(typeof e4 == `string` || typeof e4 == `function` || e4 === t2 || e4 === r2 || e4 === n2 || e4 === s2 || e4 === c2 || typeof e4 == `object` && e4 && (e4.$$typeof === u2 || e4.$$typeof === l2 || e4.$$typeof === a2 || e4.$$typeof === i2 || e4.$$typeof === o2 || e4.$$typeof === d2 || e4.getModuleId !== void 0));
  };
}), b = e((e3, t2) => {
  t2.exports = y();
})();
function x(e3) {
  if (typeof e3 != `object` || !e3)
    return false;
  let t2 = Object.getPrototypeOf(e3);
  return (t2 === null || t2 === Object.prototype || Object.getPrototypeOf(t2) === null) && !(Symbol.toStringTag in e3) && !(Symbol.iterator in e3);
}
function S(e3) {
  if (f(e3) || (0, b.isValidElementType)(e3) || !x(e3))
    return e3;
  let t2 = {};
  return Object.keys(e3).forEach((n2) => {
    t2[n2] = S(e3[n2]);
  }), t2;
}
function C(e3, t2, n2 = {clone: true}) {
  let r2 = n2.clone ? __spreadValues({}, e3) : e3;
  return x(e3) && x(t2) && Object.keys(t2).forEach((i2) => {
    f(t2[i2]) || (0, b.isValidElementType)(t2[i2]) ? r2[i2] = t2[i2] : x(t2[i2]) && Object.prototype.hasOwnProperty.call(e3, i2) && x(e3[i2]) ? r2[i2] = C(e3[i2], t2[i2], n2) : n2.clone ? r2[i2] = x(t2[i2]) ? S(t2[i2]) : t2[i2] : r2[i2] = t2[i2];
  }), r2;
}
function ee(e3, t2 = -(2 ** 53 - 1), n2 = 2 ** 53 - 1) {
  return Math.max(t2, Math.min(e3, n2));
}
function te(e3, t2 = 0, n2 = 1) {
  return ee(e3, t2, n2);
}
function ne(e3) {
  e3 = e3.slice(1);
  let t2 = RegExp(`.{1,${e3.length >= 6 ? 2 : 1}}`, `g`), n2 = e3.match(t2);
  return n2 && n2[0].length === 1 && (n2 = n2.map((e4) => e4 + e4)), n2 ? `rgb${n2.length === 4 ? `a` : ``}(${n2.map((e4, t3) => t3 < 3 ? parseInt(e4, 16) : Math.round(parseInt(e4, 16) / 255 * 1e3) / 1e3).join(`, `)})` : ``;
}
function re(e3) {
  let t2 = e3.toString(16);
  return t2.length === 1 ? `0${t2}` : t2;
}
function w(e3) {
  if (e3.type)
    return e3;
  if (e3.charAt(0) === `#`)
    return w(ne(e3));
  let t2 = e3.indexOf(`(`), n2 = e3.substring(0, t2);
  if (![`rgb`, `rgba`, `hsl`, `hsla`, `color`].includes(n2))
    throw Error(g(9, e3));
  let r2 = e3.substring(t2 + 1, e3.length - 1), i2;
  if (n2 === `color`) {
    if (r2 = r2.split(` `), i2 = r2.shift(), r2.length === 4 && r2[3].charAt(0) === `/` && (r2[3] = r2[3].slice(1)), ![`srgb`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec-2020`].includes(i2))
      throw Error(g(10, i2));
  } else
    r2 = r2.split(`,`);
  return r2 = r2.map((e4) => parseFloat(e4)), {type: n2, values: r2, colorSpace: i2};
}
var ie = (e3) => {
  let t2 = w(e3);
  return t2.values.slice(0, 3).map((e4, n2) => t2.type.includes(`hsl`) && n2 !== 0 ? `${e4}%` : e4).join(` `);
}, ae = (e3, t2) => {
  try {
    return ie(e3);
  } catch {
    return e3;
  }
};
function T(e3) {
  let {type: t2, colorSpace: n2} = e3, {values: r2} = e3;
  return t2.includes(`rgb`) ? r2 = r2.map((e4, t3) => t3 < 3 ? parseInt(e4, 10) : e4) : t2.includes(`hsl`) && (r2[1] = `${r2[1]}%`, r2[2] = `${r2[2]}%`), r2 = t2.includes(`color`) ? `${n2} ${r2.join(` `)}` : `${r2.join(`, `)}`, `${t2}(${r2})`;
}
function oe(e3) {
  if (e3.startsWith(`#`))
    return e3;
  let {values: t2} = w(e3);
  return `#${t2.map((e4, t3) => re(t3 === 3 ? Math.round(255 * e4) : e4)).join(``)}`;
}
function se(e3) {
  e3 = w(e3);
  let {values: t2} = e3, n2 = t2[0], r2 = t2[1] / 100, i2 = t2[2] / 100, a2 = r2 * Math.min(i2, 1 - i2), o2 = (e4, t3 = (e4 + n2 / 30) % 12) => i2 - a2 * Math.max(Math.min(t3 - 3, 9 - t3, 1), -1), s2 = `rgb`, c2 = [Math.round(o2(0) * 255), Math.round(o2(8) * 255), Math.round(o2(4) * 255)];
  return e3.type === `hsla` && (s2 += `a`, c2.push(t2[3])), T({type: s2, values: c2});
}
function ce(e3) {
  e3 = w(e3);
  let t2 = e3.type === `hsl` || e3.type === `hsla` ? w(se(e3)).values : e3.values;
  return t2 = t2.map((t3) => (e3.type !== `color` && (t3 /= 255), t3 <= 0.03928 ? t3 / 12.92 : ((t3 + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t2[0] + 0.7152 * t2[1] + 0.0722 * t2[2]).toFixed(3));
}
function le(e3, t2) {
  let n2 = ce(e3), r2 = ce(t2);
  return (Math.max(n2, r2) + 0.05) / (Math.min(n2, r2) + 0.05);
}
function ue(e3, t2) {
  return e3 = w(e3), t2 = te(t2), (e3.type === `rgb` || e3.type === `hsl`) && (e3.type += `a`), e3.type === `color` ? e3.values[3] = `/${t2}` : e3.values[3] = t2, T(e3);
}
function de(e3, t2, n2) {
  try {
    return ue(e3, t2);
  } catch {
    return e3;
  }
}
function fe(e3, t2) {
  if (e3 = w(e3), t2 = te(t2), e3.type.includes(`hsl`))
    e3.values[2] *= 1 - t2;
  else if (e3.type.includes(`rgb`) || e3.type.includes(`color`))
    for (let n2 = 0; n2 < 3; n2 += 1)
      e3.values[n2] *= 1 - t2;
  return T(e3);
}
function pe(e3, t2, n2) {
  try {
    return fe(e3, t2);
  } catch {
    return e3;
  }
}
function me(e3, t2) {
  if (e3 = w(e3), t2 = te(t2), e3.type.includes(`hsl`))
    e3.values[2] += (100 - e3.values[2]) * t2;
  else if (e3.type.includes(`rgb`))
    for (let n2 = 0; n2 < 3; n2 += 1)
      e3.values[n2] += (255 - e3.values[n2]) * t2;
  else if (e3.type.includes(`color`))
    for (let n2 = 0; n2 < 3; n2 += 1)
      e3.values[n2] += (1 - e3.values[n2]) * t2;
  return T(e3);
}
function he(e3, t2, n2) {
  try {
    return me(e3, t2);
  } catch {
    return e3;
  }
}
function ge(e3, t2 = 0.15) {
  return ce(e3) > 0.5 ? fe(e3, t2) : me(e3, t2);
}
function _e(e3, t2, n2) {
  try {
    return ge(e3, t2);
  } catch {
    return e3;
  }
}
function ve(e3, t2, n2, r2 = 1) {
  let i2 = (e4, t3) => Math.round((e4 ** (1 / r2) * (1 - n2) + t3 ** (1 / r2) * n2) ** r2), a2 = w(e3), o2 = w(t2);
  return T({type: `rgb`, values: [i2(a2.values[0], o2.values[0]), i2(a2.values[1], o2.values[1]), i2(a2.values[2], o2.values[2])]});
}
function ye(e3) {
  if (e3 == null)
    return true;
  for (let t2 in e3)
    return false;
  return true;
}
function be(e3, t2) {
  let n2 = Array.isArray(t2), r2 = Array.isArray(e3);
  return Te(t2) ? t2 : Ee(e3) ? E(t2) : n2 && r2 ? Ce(e3, t2) : n2 === r2 ? De(e3, t2) : E(t2);
}
function xe(e3) {
  let t2 = 0, n2 = e3.length, r2 = Array(n2);
  for (t2 = 0; t2 < n2; t2 += 1)
    r2[t2] = E(e3[t2]);
  return r2;
}
function Se(e3) {
  let t2 = {};
  for (let n2 in e3)
    n2 !== `__proto__` && n2 !== `constructor` && n2 !== `prototype` && (t2[n2] = E(e3[n2]));
  return t2;
}
function Ce(e3, t2) {
  let n2 = e3.length;
  for (let r2 = 0; r2 < t2.length; r2 += 1)
    e3[n2 + r2] = E(t2[r2]);
  return e3;
}
function we(e3) {
  return typeof e3 == `object` && !!e3 && !(e3 instanceof RegExp) && !(e3 instanceof Date);
}
function Te(e3) {
  return typeof e3 != `object` || !e3;
}
function Ee(e3) {
  return typeof e3 != `object` || !e3 || e3 instanceof RegExp || e3 instanceof Date;
}
function E(e3) {
  return we(e3) ? Array.isArray(e3) ? xe(e3) : Se(e3) : e3;
}
function De(e3, t2) {
  for (let n2 in t2)
    n2 !== `__proto__` && n2 !== `constructor` && n2 !== `prototype` && (e3[n2] = n2 in e3 ? be(e3[n2], t2[n2]) : E(t2[n2]));
  return e3;
}
var Oe = {clone: false};
function ke(e3, t2) {
  return t2 ? C(e3, t2, Oe) : e3;
}
var Ae = /min-width:\s*([0-9.]+)/;
function je(e3, t2) {
  if (!e3.containerQueries || !Me(t2))
    return t2;
  let n2 = [];
  for (let e4 in t2)
    e4.startsWith(`@container`) && n2.push(e4);
  n2.sort((e4, t3) => +(e4.match(Ae)?.[1] || 0) - (t3.match(Ae)?.[1] || 0));
  let r2 = t2;
  for (let e4 = 0; e4 < n2.length; e4 += 1) {
    let t3 = n2[e4], i2 = r2[t3];
    delete r2[t3], r2[t3] = i2;
  }
  return r2;
}
function Me(e3) {
  for (let t2 in e3)
    if (t2.startsWith(`@container`))
      return true;
  return false;
}
function Ne(e3, t2) {
  return t2 === `@` || t2.startsWith(`@`) && (e3.some((e4) => t2.startsWith(`@${e4}`)) || !!t2.match(/^@\d/));
}
function Pe(e3, t2) {
  let n2 = t2.match(/^@([^/]+)?\/?(.+)?$/);
  if (!n2)
    return null;
  let [, r2, i2] = n2, a2 = Number.isNaN(+r2) ? r2 || 0 : +r2;
  return e3.containerQueries(i2).up(a2);
}
function Fe(e3) {
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
var Ie = {}, Le = {xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536}, Re = v({values: Le}), ze = {containerQueries: (e3) => ({up: (t2) => {
  let n2 = typeof t2 == `number` ? t2 : Le[t2] || t2;
  return typeof n2 == `number` && (n2 = `${n2}px`), e3 ? `@container ${e3} (min-width:${n2})` : `@container (min-width:${n2})`;
}})};
function D(e3, t2, n2) {
  let r2 = {};
  return Be(r2, e3.theme, t2, (e4, t3, i2) => {
    let a2 = n2(t3, i2);
    e4 ? r2[e4] = a2 : be(r2, a2);
  });
}
function Be(e3, t2, n2, r2) {
  if (t2 ?? (t2 = Ie), Array.isArray(n2)) {
    let i2 = t2.breakpoints ?? Re;
    for (let t3 = 0; t3 < n2.length; t3 += 1)
      Ve(e3, i2.up(i2.keys[t3]), n2[t3], void 0, r2);
    return e3;
  }
  if (typeof n2 == `object`) {
    let i2 = t2.breakpoints ?? Re, a2 = i2.values ?? Le;
    for (let o2 in n2)
      if (Ne(i2.keys, o2)) {
        let i3 = Pe(t2.containerQueries ? t2 : ze, o2);
        i3 && Ve(e3, i3, n2[o2], o2, r2);
      } else if (o2 in a2)
        Ve(e3, i2.up(o2), n2[o2], o2, r2);
      else {
        let t3 = o2;
        e3[t3] = n2[t3];
      }
    return e3;
  }
  return r2(void 0, n2), e3;
}
function Ve(e3, t2, n2, r2, i2) {
  e3[t2] ?? (e3[t2] = {}), i2(t2, n2, r2);
}
function He(e3) {
  let t2 = (t3) => {
    let n2 = t3.theme || {}, r2 = e3(t3), i2 = n2.breakpoints || Re;
    return ke(r2, i2.keys.reduce((r3, a2) => (t3[a2] && (r3 || (r3 = {}), r3[i2.up(a2)] = e3(__spreadValues({theme: n2}, t3[a2]))), r3), null));
  };
  return t2.propTypes = {}, t2.filterProps = [`xs`, `sm`, `md`, `lg`, `xl`, ...e3.filterProps], t2;
}
function Ue(e3 = Re) {
  let {internal_mediaKeys: t2} = e3, n2 = {};
  for (let e4 = 0; e4 < t2.length; e4 += 1)
    n2[t2[e4]] = {};
  return n2;
}
function We(e3, t2) {
  let n2 = e3.internal_mediaKeys;
  for (let e4 = 0; e4 < n2.length; e4 += 1) {
    let r2 = n2[e4];
    ye(t2[r2]) && delete t2[r2];
  }
  return t2;
}
function Ge(e3, ...t2) {
  return We(e3, [Ue(e3), ...t2].reduce((e4, t3) => C(e4, t3), {}));
}
function Ke(e3, t2) {
  if (typeof e3 != `object`)
    return {};
  let n2 = {}, r2 = Object.keys(t2);
  return Array.isArray(e3) ? r2.forEach((t3, r3) => {
    r3 < e3.length && (n2[t3] = true);
  }) : r2.forEach((t3) => {
    e3[t3] != null && (n2[t3] = true);
  }), n2;
}
function qe(e3) {
  let {values: t2, breakpoints: n2, base: r2} = e3, i2 = r2 || Ke(t2, n2), a2 = Object.keys(i2);
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
function Je(e3, t2) {
  if (Array.isArray(t2))
    return true;
  if (typeof t2 == `object` && t2) {
    for (let n3 = 0; n3 < e3.keys.length; n3 += 1)
      if (e3.keys[n3] in t2)
        return true;
    let n2 = Object.keys(t2);
    for (let t3 = 0; t3 < n2.length; t3 += 1)
      if (Ne(e3.keys, n2[t3]))
        return true;
  }
  return false;
}
function Ye(e3) {
  if (typeof e3 != `string`)
    throw Error(g(7));
  return e3.charAt(0).toUpperCase() + e3.slice(1);
}
function Xe(e3, t2, n2, r2 = n2) {
  let i2;
  return i2 = typeof e3 == `function` ? e3(n2) : Array.isArray(e3) ? e3[n2] || r2 : typeof n2 == `string` && O(e3, n2) || r2, t2 && (i2 = t2(i2, r2, e3)), i2;
}
function Ze(e3, t2, n2, r2) {
  let i2;
  return i2 = typeof e3 == `function` ? e3(n2) : Array.isArray(e3) ? e3[n2] || n2 : typeof n2 == `string` && O(e3, n2, true, r2) || n2, t2 && (i2 = t2(i2, n2, e3)), i2;
}
function O(e3, t2, n2 = true, r2 = void 0) {
  if (!e3 || !t2)
    return null;
  let i2 = t2.split(`.`);
  if (e3.vars && n2) {
    let t3 = Qe(e3.vars, i2, r2);
    if (t3 != null)
      return t3;
  }
  return Qe(e3, i2, r2);
}
function Qe(e3, t2, n2 = void 0) {
  let r2, i2 = e3, a2 = 0;
  for (; a2 < t2.length; ) {
    if (i2 == null)
      return i2;
    r2 = i2, i2 = i2[t2[a2]], a2 += 1;
  }
  if (n2 && i2 === void 0) {
    let e4 = t2[t2.length - 1], i3 = `${n2}${e4 === "default" ? `` : Ye(e4)}`;
    return r2?.[i3];
  }
  return i2;
}
function k(e3) {
  let {prop: t2, cssProperty: n2 = e3.prop, themeKey: r2, transform: i2} = e3, a2 = (e4) => {
    if (e4[t2] == null)
      return null;
    let a3 = e4[t2], o2 = e4.theme, s2 = O(o2, r2) || {};
    return D(e4, a3, (e5) => {
      let r3 = Ze(s2, i2, e5, t2);
      return n2 === false ? r3 : {[n2]: r3};
    });
  };
  return a2.propTypes = {}, a2.filterProps = [t2], a2;
}
var $e = {internal_cache: {}}, et = {m: `margin`, p: `padding`}, tt = {t: `Top`, r: `Right`, b: `Bottom`, l: `Left`, x: [`Left`, `Right`], y: [`Top`, `Bottom`]}, nt = {marginX: `mx`, marginY: `my`, paddingX: `px`, paddingY: `py`}, rt = {};
for (let e3 in et)
  rt[e3] = [et[e3]];
for (let e3 in et)
  for (let t2 in tt) {
    let n2 = et[e3], r2 = tt[t2], i2 = Array.isArray(r2) ? r2.map((e4) => n2 + e4) : [n2 + r2];
    rt[e3 + t2] = i2;
  }
for (let e3 in nt)
  rt[e3] = rt[nt[e3]];
var it = new Set([`m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`, `margin`, `marginTop`, `marginRight`, `marginBottom`, `marginLeft`, `marginX`, `marginY`, `marginInline`, `marginInlineStart`, `marginInlineEnd`, `marginBlock`, `marginBlockStart`, `marginBlockEnd`]), at = new Set([`p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`, `padding`, `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`, `paddingX`, `paddingY`, `paddingInline`, `paddingInlineStart`, `paddingInlineEnd`, `paddingBlock`, `paddingBlockStart`, `paddingBlockEnd`]), ot = new Set([...it, ...at]);
function A(e3, t2, n2, r2) {
  let i2 = O(e3, t2, true) ?? n2;
  return typeof i2 == `number` || typeof i2 == `string` ? (e4) => typeof e4 == `string` ? e4 : typeof i2 == `string` ? i2.startsWith(`var(`) && e4 === 0 ? 0 : i2.startsWith(`var(`) && e4 === 1 ? i2 : `calc(${e4} * ${i2})` : i2 * e4 : Array.isArray(i2) ? (e4) => {
    if (typeof e4 == `string`)
      return e4;
    let t3 = i2[Math.abs(e4)];
    return e4 >= 0 ? t3 : typeof t3 == `number` ? -t3 : typeof t3 == `string` && t3.startsWith(`var(`) ? `calc(-1 * ${t3})` : `-${t3}`;
  } : typeof i2 == `function` ? i2 : () => void 0;
}
function st(e3) {
  return A(e3, `spacing`, 8, `spacing`);
}
function j(e3, t2) {
  return typeof t2 == `string` || t2 == null ? t2 : e3(t2);
}
var ct = [``];
function lt(e3, t2) {
  let n2 = e3.theme ?? $e, r2 = n2?.internal_cache?.unarySpacing ?? st(n2), i2 = {};
  for (let n3 in e3) {
    if (!t2.has(n3))
      continue;
    let a2 = rt[n3] ?? (ct[0] = n3, ct), o2 = e3[n3];
    Be(i2, e3.theme, o2, (e4, t3) => {
      let n4 = e4 ? i2[e4] : i2;
      for (let e5 = 0; e5 < a2.length; e5 += 1)
        n4[a2[e5]] = j(r2, t3);
    });
  }
  return i2;
}
function ut(e3) {
  return lt(e3, it);
}
ut.propTypes = {}, ut.filterProps = it;
var M = ut;
function dt(e3) {
  return lt(e3, at);
}
dt.propTypes = {}, dt.filterProps = at;
var N = dt;
function ft(e3) {
  return lt(e3, ot);
}
ft.propTypes = {}, ft.filterProps = ot;
var pt = ft;
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        ({}).hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
    }
    return e3;
  }, mt.apply(null, arguments);
}
function ht(e3) {
  if (e3.sheet)
    return e3.sheet;
  for (var t2 = 0; t2 < document.styleSheets.length; t2++)
    if (document.styleSheets[t2].ownerNode === e3)
      return document.styleSheets[t2];
}
function gt(e3) {
  var t2 = document.createElement(`style`);
  return t2.setAttribute(`data-emotion`, e3.key), e3.nonce !== void 0 && t2.setAttribute(`nonce`, e3.nonce), t2.appendChild(document.createTextNode(``)), t2.setAttribute(`data-s`, ``), t2;
}
var _t = function() {
  function e3(e4) {
    var t3 = this;
    this._insertTag = function(e5) {
      var n2 = t3.tags.length === 0 ? t3.insertionPoint ? t3.insertionPoint.nextSibling : t3.prepend ? t3.container.firstChild : t3.before : t3.tags[t3.tags.length - 1].nextSibling;
      t3.container.insertBefore(e5, n2), t3.tags.push(e5);
    }, this.isSpeedy = e4.speedy === void 0 || e4.speedy, this.tags = [], this.ctr = 0, this.nonce = e4.nonce, this.key = e4.key, this.container = e4.container, this.prepend = e4.prepend, this.insertionPoint = e4.insertionPoint, this.before = null;
  }
  var t2 = e3.prototype;
  return t2.hydrate = function(e4) {
    e4.forEach(this._insertTag);
  }, t2.insert = function(e4) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(gt(this));
    var t3 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var n2 = ht(t3);
      try {
        n2.insertRule(e4, n2.cssRules.length);
      } catch {
      }
    } else
      t3.appendChild(document.createTextNode(e4));
    this.ctr++;
  }, t2.flush = function() {
    this.tags.forEach(function(e4) {
      return e4.parentNode?.removeChild(e4);
    }), this.tags = [], this.ctr = 0;
  }, e3;
}(), P = `-ms-`, vt = `-moz-`, F = `-webkit-`, yt = `comm`, bt = `rule`, xt = `decl`, St = `@import`, Ct = `@keyframes`, wt = `@layer`, Tt = Math.abs, Et = String.fromCharCode, Dt = Object.assign;
function Ot(e3, t2) {
  return L(e3, 0) ^ 45 ? (((t2 << 2 ^ L(e3, 0)) << 2 ^ L(e3, 1)) << 2 ^ L(e3, 2)) << 2 ^ L(e3, 3) : 0;
}
function kt(e3) {
  return e3.trim();
}
function At(e3, t2) {
  return (e3 = t2.exec(e3)) ? e3[0] : e3;
}
function I(e3, t2, n2) {
  return e3.replace(t2, n2);
}
function jt(e3, t2) {
  return e3.indexOf(t2);
}
function L(e3, t2) {
  return e3.charCodeAt(t2) | 0;
}
function Mt(e3, t2, n2) {
  return e3.slice(t2, n2);
}
function R(e3) {
  return e3.length;
}
function Nt(e3) {
  return e3.length;
}
function Pt(e3, t2) {
  return t2.push(e3), e3;
}
function Ft(e3, t2) {
  return e3.map(t2).join(``);
}
var It = 1, Lt = 1, Rt = 0, z = 0, B = 0, V = ``;
function zt(e3, t2, n2, r2, i2, a2, o2) {
  return {value: e3, root: t2, parent: n2, type: r2, props: i2, children: a2, line: It, column: Lt, length: o2, return: ``};
}
function Bt(e3, t2) {
  return Dt(zt(``, null, null, ``, null, null, 0), e3, {length: -e3.length}, t2);
}
function Vt() {
  return B;
}
function Ht() {
  return B = z > 0 ? L(V, --z) : 0, Lt--, B === 10 && (Lt = 1, It--), B;
}
function H() {
  return B = z < Rt ? L(V, z++) : 0, Lt++, B === 10 && (Lt = 1, It++), B;
}
function U() {
  return L(V, z);
}
function Ut() {
  return z;
}
function Wt(e3, t2) {
  return Mt(V, e3, t2);
}
function Gt(e3) {
  switch (e3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Kt(e3) {
  return It = Lt = 1, Rt = R(V = e3), z = 0, [];
}
function qt(e3) {
  return V = ``, e3;
}
function Jt(e3) {
  return kt(Wt(z - 1, Zt(e3 === 91 ? e3 + 2 : e3 === 40 ? e3 + 1 : e3)));
}
function Yt(e3) {
  for (; (B = U()) && B < 33; )
    H();
  return Gt(e3) > 2 || Gt(B) > 3 ? `` : ` `;
}
function Xt(e3, t2) {
  for (; --t2 && H() && !(B < 48 || B > 102 || B > 57 && B < 65 || B > 70 && B < 97); )
    ;
  return Wt(e3, Ut() + (t2 < 6 && U() == 32 && H() == 32));
}
function Zt(e3) {
  for (; H(); )
    switch (B) {
      case e3:
        return z;
      case 34:
      case 39:
        e3 !== 34 && e3 !== 39 && Zt(B);
        break;
      case 40:
        e3 === 41 && Zt(e3);
        break;
      case 92:
        H();
    }
  return z;
}
function Qt(e3, t2) {
  for (; H() && e3 + B !== 57 && (e3 + B !== 84 || U() !== 47); )
    ;
  return `/*` + Wt(t2, z - 1) + `*` + Et(e3 === 47 ? e3 : H());
}
function $t(e3) {
  for (; !Gt(U()); )
    H();
  return Wt(e3, z);
}
function en(e3) {
  return qt(tn(``, null, null, null, [``], e3 = Kt(e3), 0, [0], e3));
}
function tn(e3, t2, n2, r2, i2, a2, o2, s2, c2) {
  for (var l2 = 0, u2 = 0, d2 = o2, f2 = 0, p2 = 0, m2 = 0, h2 = 1, g2 = 1, _2 = 1, v2 = 0, y2 = ``, b2 = i2, x2 = a2, S2 = r2, C2 = y2; g2; )
    switch (m2 = v2, v2 = H()) {
      case 40:
        if (m2 != 108 && L(C2, d2 - 1) == 58) {
          jt(C2 += I(Jt(v2), `&`, `&\f`), `&\f`) != -1 && (_2 = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C2 += Jt(v2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C2 += Yt(m2);
        break;
      case 92:
        C2 += Xt(Ut() - 1, 7);
        continue;
      case 47:
        switch (U()) {
          case 42:
          case 47:
            Pt(rn(Qt(H(), Ut()), t2, n2), c2);
            break;
          default:
            C2 += `/`;
        }
        break;
      case 123 * h2:
        s2[l2++] = R(C2) * _2;
      case 125 * h2:
      case 59:
      case 0:
        switch (v2) {
          case 0:
          case 125:
            g2 = 0;
          case 59 + u2:
            _2 == -1 && (C2 = I(C2, /\f/g, ``)), p2 > 0 && R(C2) - d2 && Pt(p2 > 32 ? an(C2 + `;`, r2, n2, d2 - 1) : an(I(C2, ` `, ``) + `;`, r2, n2, d2 - 2), c2);
            break;
          case 59:
            C2 += `;`;
          default:
            if (Pt(S2 = nn(C2, t2, n2, l2, u2, i2, s2, y2, b2 = [], x2 = [], d2), a2), v2 === 123) {
              if (u2 === 0)
                tn(C2, t2, S2, S2, b2, a2, d2, s2, x2);
              else
                switch (f2 === 99 && L(C2, 3) === 110 ? 100 : f2) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tn(e3, S2, S2, r2 && Pt(nn(e3, S2, S2, 0, 0, i2, s2, y2, i2, b2 = [], d2), x2), i2, x2, d2, s2, r2 ? b2 : x2);
                    break;
                  default:
                    tn(C2, S2, S2, S2, [``], x2, 0, s2, x2);
                }
            }
        }
        l2 = u2 = p2 = 0, h2 = _2 = 1, y2 = C2 = ``, d2 = o2;
        break;
      case 58:
        d2 = 1 + R(C2), p2 = m2;
      default:
        if (h2 < 1) {
          if (v2 == 123)
            --h2;
          else if (v2 == 125 && h2++ == 0 && Ht() == 125)
            continue;
        }
        switch (C2 += Et(v2), v2 * h2) {
          case 38:
            _2 = u2 > 0 ? 1 : (C2 += `\f`, -1);
            break;
          case 44:
            s2[l2++] = (R(C2) - 1) * _2, _2 = 1;
            break;
          case 64:
            U() === 45 && (C2 += Jt(H())), f2 = U(), u2 = d2 = R(y2 = C2 += $t(Ut())), v2++;
            break;
          case 45:
            m2 === 45 && R(C2) == 2 && (h2 = 0);
        }
    }
  return a2;
}
function nn(e3, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2) {
  for (var d2 = i2 - 1, f2 = i2 === 0 ? a2 : [``], p2 = Nt(f2), m2 = 0, h2 = 0, g2 = 0; m2 < r2; ++m2)
    for (var _2 = 0, v2 = Mt(e3, d2 + 1, d2 = Tt(h2 = o2[m2])), y2 = e3; _2 < p2; ++_2)
      (y2 = kt(h2 > 0 ? f2[_2] + ` ` + v2 : I(v2, /&\f/g, f2[_2]))) && (c2[g2++] = y2);
  return zt(e3, t2, n2, i2 === 0 ? bt : s2, c2, l2, u2);
}
function rn(e3, t2, n2) {
  return zt(e3, t2, n2, yt, Et(Vt()), Mt(e3, 2, -2), 0);
}
function an(e3, t2, n2, r2) {
  return zt(e3, t2, n2, xt, Mt(e3, 0, r2), Mt(e3, r2 + 1, -1), r2);
}
function W(e3, t2) {
  for (var n2 = ``, r2 = Nt(e3), i2 = 0; i2 < r2; i2++)
    n2 += t2(e3[i2], i2, e3, t2) || ``;
  return n2;
}
function on(e3, t2, n2, r2) {
  switch (e3.type) {
    case wt:
      if (e3.children.length)
        break;
    case St:
    case xt:
      return e3.return = e3.return || e3.value;
    case yt:
      return ``;
    case Ct:
      return e3.return = e3.value + `{` + W(e3.children, r2) + `}`;
    case bt:
      e3.value = e3.props.join(`,`);
  }
  return R(n2 = W(e3.children, r2)) ? e3.return = e3.value + `{` + n2 + `}` : ``;
}
function sn(e3) {
  var t2 = Nt(e3);
  return function(n2, r2, i2, a2) {
    for (var o2 = ``, s2 = 0; s2 < t2; s2++)
      o2 += e3[s2](n2, r2, i2, a2) || ``;
    return o2;
  };
}
function cn(e3) {
  return function(t2) {
    t2.root || (t2 = t2.return) && e3(t2);
  };
}
function ln(e3) {
  var t2 = Object.create(null);
  return function(n2) {
    return t2[n2] === void 0 && (t2[n2] = e3(n2)), t2[n2];
  };
}
var un = function(e3, t2, n2) {
  for (var r2 = 0, i2 = 0; r2 = i2, i2 = U(), r2 === 38 && i2 === 12 && (t2[n2] = 1), !Gt(i2); )
    H();
  return Wt(e3, z);
}, dn = function(e3, t2) {
  var n2 = -1, r2 = 44;
  do
    switch (Gt(r2)) {
      case 0:
        r2 === 38 && U() === 12 && (t2[n2] = 1), e3[n2] += un(z - 1, t2, n2);
        break;
      case 2:
        e3[n2] += Jt(r2);
        break;
      case 4:
        if (r2 === 44) {
          e3[++n2] = U() === 58 ? `&\f` : ``, t2[n2] = e3[n2].length;
          break;
        }
      default:
        e3[n2] += Et(r2);
    }
  while (r2 = H());
  return e3;
}, fn = function(e3, t2) {
  return qt(dn(Kt(e3), t2));
}, pn = new WeakMap(), mn = function(e3) {
  if (!(e3.type !== `rule` || !e3.parent || e3.length < 1)) {
    for (var t2 = e3.value, n2 = e3.parent, r2 = e3.column === n2.column && e3.line === n2.line; n2.type !== `rule`; )
      if (n2 = n2.parent, !n2)
        return;
    if ((e3.props.length !== 1 || t2.charCodeAt(0) === 58 || pn.get(n2)) && !r2) {
      pn.set(e3, true);
      for (var i2 = [], a2 = fn(t2, i2), o2 = n2.props, s2 = 0, c2 = 0; s2 < a2.length; s2++)
        for (var l2 = 0; l2 < o2.length; l2++, c2++)
          e3.props[c2] = i2[s2] ? a2[s2].replace(/&\f/g, o2[l2]) : o2[l2] + ` ` + a2[s2];
    }
  }
}, hn = function(e3) {
  if (e3.type === `decl`) {
    var t2 = e3.value;
    t2.charCodeAt(0) === 108 && t2.charCodeAt(2) === 98 && (e3.return = ``, e3.value = ``);
  }
};
function gn(e3, t2) {
  switch (Ot(e3, t2)) {
    case 5103:
      return F + `print-` + e3 + e3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return F + e3 + e3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return F + e3 + vt + e3 + P + e3 + e3;
    case 6828:
    case 4268:
      return F + e3 + P + e3 + e3;
    case 6165:
      return F + e3 + P + `flex-` + e3 + e3;
    case 5187:
      return F + e3 + I(e3, /(\w+).+(:[^]+)/, F + `box-$1$2` + P + `flex-$1$2`) + e3;
    case 5443:
      return F + e3 + P + `flex-item-` + I(e3, /flex-|-self/, ``) + e3;
    case 4675:
      return F + e3 + P + `flex-line-pack` + I(e3, /align-content|flex-|-self/, ``) + e3;
    case 5548:
      return F + e3 + P + I(e3, `shrink`, `negative`) + e3;
    case 5292:
      return F + e3 + P + I(e3, `basis`, `preferred-size`) + e3;
    case 6060:
      return F + `box-` + I(e3, `-grow`, ``) + F + e3 + P + I(e3, `grow`, `positive`) + e3;
    case 4554:
      return F + I(e3, /([^-])(transform)/g, `$1` + F + `$2`) + e3;
    case 6187:
      return I(I(I(e3, /(zoom-|grab)/, F + `$1`), /(image-set)/, F + `$1`), e3, ``) + e3;
    case 5495:
    case 3959:
      return I(e3, /(image-set\([^]*)/, F + "$1$`$1");
    case 4968:
      return I(I(e3, /(.+:)(flex-)?(.*)/, F + `box-pack:$3` + P + `flex-pack:$3`), /s.+-b[^;]+/, `justify`) + F + e3 + e3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return I(e3, /(.+)-inline(.+)/, F + `$1$2`) + e3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (R(e3) - 1 - t2 > 6)
        switch (L(e3, t2 + 1)) {
          case 109:
            if (L(e3, t2 + 4) !== 45)
              break;
          case 102:
            return I(e3, /(.+:)(.+)-([^]+)/, `$1` + F + `$2-$3$1` + vt + (L(e3, t2 + 3) == 108 ? `$3` : `$2-$3`)) + e3;
          case 115:
            return ~jt(e3, `stretch`) ? gn(I(e3, `stretch`, `fill-available`), t2) + e3 : e3;
        }
      break;
    case 4949:
      if (L(e3, t2 + 1) !== 115)
        break;
    case 6444:
      switch (L(e3, R(e3) - 3 - (~jt(e3, `!important`) && 10))) {
        case 107:
          return I(e3, `:`, `:` + F) + e3;
        case 101:
          return I(e3, /(.+:)([^;!]+)(;|!.+)?/, `$1` + F + (L(e3, 14) === 45 ? `inline-` : ``) + `box$3$1` + F + `$2$3$1` + P + `$2box$3`) + e3;
      }
      break;
    case 5936:
      switch (L(e3, t2 + 11)) {
        case 114:
          return F + e3 + P + I(e3, /[svh]\w+-[tblr]{2}/, `tb`) + e3;
        case 108:
          return F + e3 + P + I(e3, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e3;
        case 45:
          return F + e3 + P + I(e3, /[svh]\w+-[tblr]{2}/, `lr`) + e3;
      }
      return F + e3 + P + e3 + e3;
  }
  return e3;
}
var _n = [function(e3, t2, n2, r2) {
  if (e3.length > -1 && !e3.return)
    switch (e3.type) {
      case xt:
        e3.return = gn(e3.value, e3.length);
        break;
      case Ct:
        return W([Bt(e3, {value: I(e3.value, `@`, `@` + F)})], r2);
      case bt:
        if (e3.length)
          return Ft(e3.props, function(t3) {
            switch (At(t3, /(::plac\w+|:read-\w+)/)) {
              case `:read-only`:
              case `:read-write`:
                return W([Bt(e3, {props: [I(t3, /:(read-\w+)/, `:` + vt + `$1`)]})], r2);
              case `::placeholder`:
                return W([Bt(e3, {props: [I(t3, /:(plac\w+)/, `:` + F + `input-$1`)]}), Bt(e3, {props: [I(t3, /:(plac\w+)/, `:` + vt + `$1`)]}), Bt(e3, {props: [I(t3, /:(plac\w+)/, P + `input-$1`)]})], r2);
            }
            return ``;
          });
    }
}], vn = function(e3) {
  var t2 = e3.key;
  if (t2 === `css`) {
    var n2 = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
    Array.prototype.forEach.call(n2, function(e4) {
      e4.getAttribute(`data-emotion`).indexOf(` `) !== -1 && (document.head.appendChild(e4), e4.setAttribute(`data-s`, ``));
    });
  }
  var r2 = e3.stylisPlugins || _n, i2 = {}, a2, o2 = [];
  a2 = e3.container || document.head, Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="` + t2 + ` "]`), function(e4) {
    for (var t3 = e4.getAttribute(`data-emotion`).split(` `), n3 = 1; n3 < t3.length; n3++)
      i2[t3[n3]] = true;
    o2.push(e4);
  });
  var s2, c2 = [mn, hn], l2, u2 = [on, cn(function(e4) {
    l2.insert(e4);
  })], d2 = sn(c2.concat(r2, u2)), f2 = function(e4) {
    return W(en(e4), d2);
  };
  s2 = function(e4, t3, n3, r3) {
    l2 = n3, f2(e4 ? e4 + `{` + t3.styles + `}` : t3.styles), r3 && (p2.inserted[t3.name] = true);
  };
  var p2 = {key: t2, sheet: new _t({key: t2, container: a2, nonce: e3.nonce, speedy: e3.speedy, prepend: e3.prepend, insertionPoint: e3.insertionPoint}), nonce: e3.nonce, inserted: i2, registered: {}, insert: s2};
  return p2.sheet.hydrate(o2), p2;
};
function yn(e3, t2, n2) {
  var r2 = ``;
  return n2.split(` `).forEach(function(n3) {
    e3[n3] === void 0 ? n3 && (r2 += n3 + ` `) : t2.push(e3[n3] + `;`);
  }), r2;
}
var bn = function(e3, t2, n2) {
  var r2 = e3.key + `-` + t2.name;
  n2 === false && e3.registered[r2] === void 0 && (e3.registered[r2] = t2.styles);
}, xn = function(e3, t2, n2) {
  bn(e3, t2, n2);
  var r2 = e3.key + `-` + t2.name;
  if (e3.inserted[t2.name] === void 0) {
    var i2 = t2;
    do
      e3.insert(t2 === i2 ? `.` + r2 : ``, i2, e3.sheet, true), i2 = i2.next;
    while (i2 !== void 0);
  }
};
function Sn(e3) {
  for (var t2 = 0, n2, r2 = 0, i2 = e3.length; i2 >= 4; ++r2, i2 -= 4)
    n2 = e3.charCodeAt(r2) & 255 | (e3.charCodeAt(++r2) & 255) << 8 | (e3.charCodeAt(++r2) & 255) << 16 | (e3.charCodeAt(++r2) & 255) << 24, n2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16), n2 ^= n2 >>> 24, t2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16) ^ (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  switch (i2) {
    case 3:
      t2 ^= (e3.charCodeAt(r2 + 2) & 255) << 16;
    case 2:
      t2 ^= (e3.charCodeAt(r2 + 1) & 255) << 8;
    case 1:
      t2 ^= e3.charCodeAt(r2) & 255, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  }
  return t2 ^= t2 >>> 13, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16), ((t2 ^ t2 >>> 15) >>> 0).toString(36);
}
var Cn = {animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1}, wn = /[A-Z]|^ms/g, Tn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, En = function(e3) {
  return e3.charCodeAt(1) === 45;
}, Dn = function(e3) {
  return e3 != null && typeof e3 != `boolean`;
}, On = ln(function(e3) {
  return En(e3) ? e3 : e3.replace(wn, `-$&`).toLowerCase();
}), kn = function(e3, t2) {
  switch (e3) {
    case `animation`:
    case `animationName`:
      if (typeof t2 == `string`)
        return t2.replace(Tn, function(e4, t3, n2) {
          return G = {name: t3, styles: n2, next: G}, t3;
        });
  }
  return Cn[e3] !== 1 && !En(e3) && typeof t2 == `number` && t2 !== 0 ? t2 + `px` : t2;
};
function An(e3, t2, n2) {
  if (n2 == null)
    return ``;
  var r2 = n2;
  if (r2.__emotion_styles !== void 0)
    return r2;
  switch (typeof n2) {
    case `boolean`:
      return ``;
    case `object`:
      var i2 = n2;
      if (i2.anim === 1)
        return G = {name: i2.name, styles: i2.styles, next: G}, i2.name;
      var a2 = n2;
      if (a2.styles !== void 0) {
        var o2 = a2.next;
        if (o2 !== void 0)
          for (; o2 !== void 0; )
            G = {name: o2.name, styles: o2.styles, next: G}, o2 = o2.next;
        return a2.styles + `;`;
      }
      return jn(e3, t2, n2);
    case `function`:
      if (e3 !== void 0) {
        var s2 = G, c2 = n2(e3);
        return G = s2, An(e3, t2, c2);
      }
  }
  var l2 = n2;
  if (t2 == null)
    return l2;
  var u2 = t2[l2];
  return u2 === void 0 ? l2 : u2;
}
function jn(e3, t2, n2) {
  var r2 = ``;
  if (Array.isArray(n2))
    for (var i2 = 0; i2 < n2.length; i2++)
      r2 += An(e3, t2, n2[i2]) + `;`;
  else
    for (var a2 in n2) {
      var o2 = n2[a2];
      if (typeof o2 != `object`) {
        var s2 = o2;
        t2 != null && t2[s2] !== void 0 ? r2 += a2 + `{` + t2[s2] + `}` : Dn(s2) && (r2 += On(a2) + `:` + kn(a2, s2) + `;`);
      } else if (Array.isArray(o2) && typeof o2[0] == `string` && (t2 == null || t2[o2[0]] === void 0))
        for (var c2 = 0; c2 < o2.length; c2++)
          Dn(o2[c2]) && (r2 += On(a2) + `:` + kn(a2, o2[c2]) + `;`);
      else {
        var l2 = An(e3, t2, o2);
        switch (a2) {
          case `animation`:
          case `animationName`:
            r2 += On(a2) + `:` + l2 + `;`;
            break;
          default:
            r2 += a2 + `{` + l2 + `}`;
        }
      }
    }
  return r2;
}
var Mn = /label:\s*([^\s;{]+)\s*(;|$)/g, G;
function Nn(e3, t2, n2) {
  if (e3.length === 1 && typeof e3[0] == `object` && e3[0] !== null && e3[0].styles !== void 0)
    return e3[0];
  var r2 = true, i2 = ``;
  G = void 0;
  var a2 = e3[0];
  a2 == null || a2.raw === void 0 ? (r2 = false, i2 += An(n2, t2, a2)) : i2 += a2[0];
  for (var o2 = 1; o2 < e3.length; o2++)
    i2 += An(n2, t2, e3[o2]), r2 && (i2 += a2[o2]);
  Mn.lastIndex = 0;
  for (var s2 = ``, c2; (c2 = Mn.exec(i2)) !== null; )
    s2 += `-` + c2[1];
  return {name: Sn(i2) + s2, styles: i2, next: G};
}
t();
var Pn = function(e3) {
  return e3();
}, Fn = s || false, In = Fn || Pn, Ln = Fn || o;
t();
var Rn = d(typeof HTMLElement < `u` ? vn({key: `css`}) : null), zn = Rn.Provider, Bn = function(e3) {
  return l(function(t2, n2) {
    return e3(t2, i(Rn), n2);
  });
}, Vn = d({}), Hn = {}.hasOwnProperty, Un = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`, Wn = function(e3, t2) {
  var n2 = {};
  for (var r2 in t2)
    Hn.call(t2, r2) && (n2[r2] = t2[r2]);
  return n2[Un] = e3, n2;
}, Gn = function(e3) {
  var t2 = e3.cache, n2 = e3.serialized, r2 = e3.isStringTag;
  return bn(t2, n2, r2), In(function() {
    return xn(t2, n2, r2);
  }), null;
}, Kn = Bn(function(e3, t2, n2) {
  var r2 = e3.css;
  typeof r2 == `string` && t2.registered[r2] !== void 0 && (r2 = t2.registered[r2]);
  var a2 = e3[Un], o2 = [r2], s2 = ``;
  typeof e3.className == `string` ? s2 = yn(t2.registered, o2, e3.className) : e3.className != null && (s2 = e3.className + ` `);
  var l2 = Nn(o2, void 0, i(Vn));
  s2 += t2.key + `-` + l2.name;
  var d2 = {};
  for (var f2 in e3)
    Hn.call(e3, f2) && f2 !== `css` && f2 !== Un && (d2[f2] = e3[f2]);
  return d2.className = s2, n2 && (d2.ref = n2), c(u, null, c(Gn, {cache: t2, serialized: l2, isStringTag: typeof a2 == `string`}), c(a2, d2));
}), qn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Jn = ln(function(e3) {
  return qn.test(e3) || e3.charCodeAt(0) === 111 && e3.charCodeAt(1) === 110 && e3.charCodeAt(2) < 91;
});
t();
var Yn = Jn, Xn = function(e3) {
  return e3 !== `theme`;
}, Zn = function(e3) {
  return typeof e3 == `string` && e3.charCodeAt(0) > 96 ? Yn : Xn;
}, Qn = function(e3, t2, n2) {
  var r2;
  if (t2) {
    var i2 = t2.shouldForwardProp;
    r2 = e3.__emotion_forwardProp && i2 ? function(t3) {
      return e3.__emotion_forwardProp(t3) && i2(t3);
    } : i2;
  }
  return typeof r2 != `function` && n2 && (r2 = e3.__emotion_forwardProp), r2;
}, $n = function(e3) {
  var t2 = e3.cache, n2 = e3.serialized, r2 = e3.isStringTag;
  return bn(t2, n2, r2), In(function() {
    return xn(t2, n2, r2);
  }), null;
}, er = function e2(t2, n2) {
  var r2 = t2.__emotion_real === t2, a2 = r2 && t2.__emotion_base || t2, o2, s2;
  n2 !== void 0 && (o2 = n2.label, s2 = n2.target);
  var l2 = Qn(t2, n2, r2), d2 = l2 || Zn(a2), f2 = !d2(`as`);
  return function() {
    var p2 = arguments, m2 = r2 && t2.__emotion_styles !== void 0 ? t2.__emotion_styles.slice(0) : [];
    if (o2 !== void 0 && m2.push(`label:` + o2 + `;`), p2[0] == null || p2[0].raw === void 0)
      m2.push.apply(m2, p2);
    else {
      var h2 = p2[0];
      m2.push(h2[0]);
      for (var g2 = p2.length, _2 = 1; _2 < g2; _2++)
        m2.push(p2[_2], h2[_2]);
    }
    var v2 = Bn(function(e3, t3, n3) {
      var r3 = f2 && e3.as || a2, o3 = ``, p3 = [], h3 = e3;
      if (e3.theme == null) {
        for (var g3 in h3 = {}, e3)
          h3[g3] = e3[g3];
        h3.theme = i(Vn);
      }
      typeof e3.className == `string` ? o3 = yn(t3.registered, p3, e3.className) : e3.className != null && (o3 = e3.className + ` `);
      var _3 = Nn(m2.concat(p3), t3.registered, h3);
      o3 += t3.key + `-` + _3.name, s2 !== void 0 && (o3 += ` ` + s2);
      var v3 = f2 && l2 === void 0 ? Zn(r3) : d2, y2 = {};
      for (var b2 in e3)
        f2 && b2 === `as` || v3(b2) && (y2[b2] = e3[b2]);
      return y2.className = o3, n3 && (y2.ref = n3), c(u, null, c($n, {cache: t3, serialized: _3, isStringTag: typeof r3 == `string`}), c(r3, y2));
    });
    return v2.displayName = o2 === void 0 ? `Styled(` + (typeof a2 == `string` ? a2 : a2.displayName || a2.name || `Component`) + `)` : o2, v2.defaultProps = t2.defaultProps, v2.__emotion_real = v2, v2.__emotion_base = a2, v2.__emotion_styles = m2, v2.__emotion_forwardProp = l2, Object.defineProperty(v2, "toString", {value: function() {
      return `.` + s2;
    }}), v2.withComponent = function(t3, r3) {
      return e2(t3, mt({}, n2, r3, {shouldForwardProp: Qn(v2, r3, true)})).apply(void 0, m2);
    }, v2;
  };
};
t();
var tr = `a.abbr.address.area.article.aside.audio.b.base.bdi.bdo.big.blockquote.body.br.button.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.keygen.label.legend.li.link.main.map.mark.marquee.menu.menuitem.meta.meter.nav.noscript.object.ol.optgroup.option.output.p.param.picture.pre.progress.q.rp.rt.ruby.s.samp.script.section.select.small.source.span.strong.style.sub.summary.sup.table.tbody.td.textarea.tfoot.th.thead.time.title.tr.track.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.foreignObject.g.image.line.linearGradient.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.text.tspan`.split(`.`), nr = er.bind(null);
tr.forEach(function(e3) {
  nr[e3] = nr(e3);
});
function rr(e3) {
  for (var t2 = 0, n2, r2 = 0, i2 = e3.length; i2 >= 4; ++r2, i2 -= 4)
    n2 = e3.charCodeAt(r2) & 255 | (e3.charCodeAt(++r2) & 255) << 8 | (e3.charCodeAt(++r2) & 255) << 16 | (e3.charCodeAt(++r2) & 255) << 24, n2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16), n2 ^= n2 >>> 24, t2 = (n2 & 65535) * 1540483477 + ((n2 >>> 16) * 59797 << 16) ^ (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  switch (i2) {
    case 3:
      t2 ^= (e3.charCodeAt(r2 + 2) & 255) << 16;
    case 2:
      t2 ^= (e3.charCodeAt(r2 + 1) & 255) << 8;
    case 1:
      t2 ^= e3.charCodeAt(r2) & 255, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16);
  }
  return t2 ^= t2 >>> 13, t2 = (t2 & 65535) * 1540483477 + ((t2 >>> 16) * 59797 << 16), ((t2 ^ t2 >>> 15) >>> 0).toString(36);
}
var ir = {animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1};
function ar(e3) {
  var t2 = Object.create(null);
  return function(n2) {
    return t2[n2] === void 0 && (t2[n2] = e3(n2)), t2[n2];
  };
}
var or = /[A-Z]|^ms/g, sr = /_EMO_([^_]+?)_([^]*?)_EMO_/g, cr = function(e3) {
  return e3.charCodeAt(1) === 45;
}, lr = function(e3) {
  return e3 != null && typeof e3 != `boolean`;
}, ur = ar(function(e3) {
  return cr(e3) ? e3 : e3.replace(or, `-$&`).toLowerCase();
}), dr = function(e3, t2) {
  switch (e3) {
    case `animation`:
    case `animationName`:
      if (typeof t2 == `string`)
        return t2.replace(sr, function(e4, t3, n2) {
          return K = {name: t3, styles: n2, next: K}, t3;
        });
  }
  return ir[e3] !== 1 && !cr(e3) && typeof t2 == `number` && t2 !== 0 ? t2 + `px` : t2;
};
function fr(e3, t2, n2) {
  if (n2 == null)
    return ``;
  var r2 = n2;
  if (r2.__emotion_styles !== void 0)
    return r2;
  switch (typeof n2) {
    case `boolean`:
      return ``;
    case `object`:
      var i2 = n2;
      if (i2.anim === 1)
        return K = {name: i2.name, styles: i2.styles, next: K}, i2.name;
      var a2 = n2;
      if (a2.styles !== void 0) {
        var o2 = a2.next;
        if (o2 !== void 0)
          for (; o2 !== void 0; )
            K = {name: o2.name, styles: o2.styles, next: K}, o2 = o2.next;
        return a2.styles + `;`;
      }
      return pr(e3, t2, n2);
    case `function`:
      if (e3 !== void 0) {
        var s2 = K, c2 = n2(e3);
        return K = s2, fr(e3, t2, c2);
      }
  }
  var l2 = n2;
  if (t2 == null)
    return l2;
  var u2 = t2[l2];
  return u2 === void 0 ? l2 : u2;
}
function pr(e3, t2, n2) {
  var r2 = ``;
  if (Array.isArray(n2))
    for (var i2 = 0; i2 < n2.length; i2++)
      r2 += fr(e3, t2, n2[i2]) + `;`;
  else
    for (var a2 in n2) {
      var o2 = n2[a2];
      if (typeof o2 != `object`) {
        var s2 = o2;
        t2 != null && t2[s2] !== void 0 ? r2 += a2 + `{` + t2[s2] + `}` : lr(s2) && (r2 += ur(a2) + `:` + dr(a2, s2) + `;`);
      } else if (Array.isArray(o2) && typeof o2[0] == `string` && (t2 == null || t2[o2[0]] === void 0))
        for (var c2 = 0; c2 < o2.length; c2++)
          lr(o2[c2]) && (r2 += ur(a2) + `:` + dr(a2, o2[c2]) + `;`);
      else {
        var l2 = fr(e3, t2, o2);
        switch (a2) {
          case `animation`:
          case `animationName`:
            r2 += ur(a2) + `:` + l2 + `;`;
            break;
          default:
            r2 += a2 + `{` + l2 + `}`;
        }
      }
    }
  return r2;
}
var mr = /label:\s*([^\s;{]+)\s*(;|$)/g, K;
function hr(e3, t2, n2) {
  if (e3.length === 1 && typeof e3[0] == `object` && e3[0] !== null && e3[0].styles !== void 0)
    return e3[0];
  var r2 = true, i2 = ``;
  K = void 0;
  var a2 = e3[0];
  a2 == null || a2.raw === void 0 ? (r2 = false, i2 += fr(n2, t2, a2)) : i2 += a2[0];
  for (var o2 = 1; o2 < e3.length; o2++)
    i2 += fr(n2, t2, e3[o2]), r2 && (i2 += a2[o2]);
  mr.lastIndex = 0;
  for (var s2 = ``, c2; (c2 = mr.exec(i2)) !== null; )
    s2 += `-` + c2[1];
  return {name: rr(i2) + s2, styles: i2, next: K};
}
function gr(e3, t2) {
  return nr(e3, t2);
}
function _r(e3, t2) {
  Array.isArray(e3.__emotion_styles) && (e3.__emotion_styles = t2(e3.__emotion_styles));
}
var vr = [];
function q(e3) {
  return vr[0] = e3, hr(vr);
}
t();
var yr = typeof window < `u` ? o : a;
t();
function br(e3) {
  return Object.keys(e3).length === 0;
}
function xr(e3 = null) {
  let t2 = i(Vn);
  return !t2 || br(t2) ? e3 : t2;
}
t();
var Sr = d();
function Cr(_a) {
  var _b = _a, {value: e3} = _b, t2 = __objRest(_b, ["value"]);
  return h(Sr.Provider, __spreadValues({value: e3 ?? true}, t2));
}
var wr = () => i(Sr) ?? false;
function Tr(e3) {
  var t2, n2, r2 = ``;
  if (typeof e3 == `string` || typeof e3 == `number`)
    r2 += e3;
  else if (typeof e3 == `object`) {
    if (Array.isArray(e3)) {
      var i2 = e3.length;
      for (t2 = 0; t2 < i2; t2++)
        e3[t2] && (n2 = Tr(e3[t2])) && (r2 && (r2 += ` `), r2 += n2);
    } else
      for (n2 in e3)
        e3[n2] && (r2 && (r2 += ` `), r2 += n2);
  }
  return r2;
}
function Er() {
  for (var e3, t2, n2 = 0, r2 = ``, i2 = arguments.length; n2 < i2; n2++)
    (e3 = arguments[n2]) && (t2 = Tr(e3)) && (r2 && (r2 += ` `), r2 += t2);
  return r2;
}
function J(e3, t2, n2 = false) {
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
              typeof s2 == `function` || typeof c2 == `function` ? r2[a2][t3] = (...e5) => J((typeof s2 == `function` ? s2(...e5) : s2) ?? {}, (typeof c2 == `function` ? c2(...e5) : c2) ?? {}, n2) : r2[a2][t3] = J(s2 ?? {}, c2 ?? {}, n2);
            }
        }
      } else
        a2 === `className` && n2 && t2.className !== void 0 ? r2.className = Er(e3?.className, t2?.className) : a2 === `style` && n2 && t2.style ? r2.style = __spreadValues(__spreadValues({}, e3?.style), t2?.style) : r2[a2] === void 0 && (r2[a2] = e3[a2]);
    }
  return r2;
}
t();
var Dr = d(void 0);
function Or({value: e3, children: t2}) {
  return h(Dr.Provider, {value: e3, children: t2});
}
function kr(e3) {
  let {theme: t2, name: n2, props: r2} = e3;
  if (!t2 || !t2.components || !t2.components[n2])
    return r2;
  let i2 = t2.components[n2];
  return i2.defaultProps ? J(i2.defaultProps, r2, t2.components.mergeClassNameAndStyle) : !i2.styleOverrides && !i2.variants ? J(i2, r2, t2.components.mergeClassNameAndStyle) : r2;
}
function Ar({props: e3, name: t2}) {
  return kr({props: e3, name: t2, theme: {components: i(Dr)}});
}
t();
var jr = 0;
function Mr(e3) {
  let [t2, n2] = r(e3), i2 = e3 || t2;
  return a(() => {
    t2 ?? (jr += 1, n2(`mui-${jr}`));
  }, [t2]), i2;
}
var Nr = __spreadValues({}, m).useId;
function Pr(e3) {
  if (Nr !== void 0) {
    let t2 = Nr();
    return e3 ?? t2;
  }
  return Mr(e3);
}
var Fr = {borderRadius: 4};
function Ir(e3 = 8, t2 = st({spacing: e3})) {
  if (e3.mui)
    return e3;
  let n2 = (...e4) => (e4.length === 0 ? [1] : e4).map((e5) => {
    let n3 = t2(e5);
    return typeof n3 == `number` ? `${n3}px` : n3;
  }).join(` `);
  return n2.mui = true, n2;
}
function Lr(...e3) {
  let t2 = e3.reduce((e4, t3) => (t3.filterProps.forEach((n3) => {
    e4[n3] = t3;
  }), e4), {}), n2 = (e4) => {
    let n3 = {};
    for (let r2 in e4)
      t2[r2] && be(n3, t2[r2](e4));
    return n3;
  };
  return n2.propTypes = {}, n2.filterProps = e3.reduce((e4, t3) => e4.concat(t3.filterProps), []), n2;
}
function Y(e3) {
  return typeof e3 == `number` ? `${e3}px solid` : e3;
}
function X(e3, t2) {
  return k({prop: e3, themeKey: `borders`, transform: t2});
}
var Rr = X(`border`, Y), zr = X(`borderTop`, Y), Br = X(`borderRight`, Y), Vr = X(`borderBottom`, Y), Hr = X(`borderLeft`, Y), Ur = X(`borderColor`), Wr = X(`borderTopColor`), Gr = X(`borderRightColor`), Kr = X(`borderBottomColor`), qr = X(`borderLeftColor`), Jr = X(`outline`, Y), Yr = X(`outlineColor`), Xr = (e3) => {
  if (e3.borderRadius !== void 0 && e3.borderRadius !== null) {
    let t2 = A(e3.theme, `shape.borderRadius`, 4, `borderRadius`);
    return D(e3, e3.borderRadius, (e4) => ({borderRadius: j(t2, e4)}));
  }
  return null;
};
Xr.propTypes = {}, Xr.filterProps = [`borderRadius`];
var Zr = Lr(Rr, zr, Br, Vr, Hr, Ur, Wr, Gr, Kr, qr, Xr, Jr, Yr), Qr = (e3) => {
  if (e3.gap !== void 0 && e3.gap !== null) {
    let t2 = A(e3.theme, `spacing`, 8, `gap`);
    return D(e3, e3.gap, (e4) => ({gap: j(t2, e4)}));
  }
  return null;
};
Qr.propTypes = {}, Qr.filterProps = [`gap`];
var $r = (e3) => {
  if (e3.columnGap !== void 0 && e3.columnGap !== null) {
    let t2 = A(e3.theme, `spacing`, 8, `columnGap`);
    return D(e3, e3.columnGap, (e4) => ({columnGap: j(t2, e4)}));
  }
  return null;
};
$r.propTypes = {}, $r.filterProps = [`columnGap`];
var ei = (e3) => {
  if (e3.rowGap !== void 0 && e3.rowGap !== null) {
    let t2 = A(e3.theme, `spacing`, 8, `rowGap`);
    return D(e3, e3.rowGap, (e4) => ({rowGap: j(t2, e4)}));
  }
  return null;
};
ei.propTypes = {}, ei.filterProps = [`rowGap`];
var ti = k({prop: `gridColumn`}), ni = k({prop: `gridRow`}), ri = k({prop: `gridAutoFlow`}), ii = k({prop: `gridAutoColumns`}), ai = k({prop: `gridAutoRows`}), oi = k({prop: `gridTemplateColumns`}), si = k({prop: `gridTemplateRows`}), ci = k({prop: `gridTemplateAreas`}), li = k({prop: `gridArea`}), ui = Lr(Qr, $r, ei, ti, ni, ri, ii, ai, oi, si, ci, li);
function Z(e3, t2) {
  return t2 === `grey` ? t2 : e3;
}
var di = k({prop: `color`, themeKey: `palette`, transform: Z}), fi = k({prop: `bgcolor`, cssProperty: `backgroundColor`, themeKey: `palette`, transform: Z}), pi = k({prop: `backgroundColor`, themeKey: `palette`, transform: Z}), mi = Lr(di, fi, pi), hi = Le;
function Q(e3) {
  return e3 <= 1 && e3 !== 0 ? `${e3 * 100}%` : e3;
}
var gi = k({prop: `width`, transform: Q}), _i = (e3) => e3.maxWidth !== void 0 && e3.maxWidth !== null ? D(e3, e3.maxWidth, (t2) => {
  let n2 = e3.theme?.breakpoints?.values?.[t2] || hi[t2];
  return n2 ? e3.theme?.breakpoints?.unit === `px` ? {maxWidth: n2} : {maxWidth: `${n2}${e3.theme.breakpoints.unit}`} : {maxWidth: Q(t2)};
}) : null;
_i.filterProps = [`maxWidth`];
var vi = k({prop: `minWidth`, transform: Q}), yi = k({prop: `height`, transform: Q}), bi = k({prop: `maxHeight`, transform: Q}), xi = k({prop: `minHeight`, transform: Q}), Si = k({prop: `size`, cssProperty: `width`, transform: Q}), Ci = k({prop: `size`, cssProperty: `height`, transform: Q}), wi = k({prop: `boxSizing`}), Ti = Lr(gi, _i, vi, yi, bi, xi, wi), Ei = {border: {themeKey: `borders`, transform: Y}, borderTop: {themeKey: `borders`, transform: Y}, borderRight: {themeKey: `borders`, transform: Y}, borderBottom: {themeKey: `borders`, transform: Y}, borderLeft: {themeKey: `borders`, transform: Y}, borderColor: {themeKey: `palette`}, borderTopColor: {themeKey: `palette`}, borderRightColor: {themeKey: `palette`}, borderBottomColor: {themeKey: `palette`}, borderLeftColor: {themeKey: `palette`}, outline: {themeKey: `borders`, transform: Y}, outlineColor: {themeKey: `palette`}, borderRadius: {themeKey: `shape.borderRadius`, style: Xr}, color: {themeKey: `palette`, transform: Z}, bgcolor: {themeKey: `palette`, cssProperty: `backgroundColor`, transform: Z}, backgroundColor: {themeKey: `palette`, transform: Z}, p: {style: N}, pt: {style: N}, pr: {style: N}, pb: {style: N}, pl: {style: N}, px: {style: N}, py: {style: N}, padding: {style: N}, paddingTop: {style: N}, paddingRight: {style: N}, paddingBottom: {style: N}, paddingLeft: {style: N}, paddingX: {style: N}, paddingY: {style: N}, paddingInline: {style: N}, paddingInlineStart: {style: N}, paddingInlineEnd: {style: N}, paddingBlock: {style: N}, paddingBlockStart: {style: N}, paddingBlockEnd: {style: N}, m: {style: M}, mt: {style: M}, mr: {style: M}, mb: {style: M}, ml: {style: M}, mx: {style: M}, my: {style: M}, margin: {style: M}, marginTop: {style: M}, marginRight: {style: M}, marginBottom: {style: M}, marginLeft: {style: M}, marginX: {style: M}, marginY: {style: M}, marginInline: {style: M}, marginInlineStart: {style: M}, marginInlineEnd: {style: M}, marginBlock: {style: M}, marginBlockStart: {style: M}, marginBlockEnd: {style: M}, displayPrint: {cssProperty: false, transform: (e3) => ({"@media print": {display: e3}})}, display: {}, overflow: {}, textOverflow: {}, visibility: {}, whiteSpace: {}, flexBasis: {}, flexDirection: {}, flexWrap: {}, justifyContent: {}, alignItems: {}, alignContent: {}, order: {}, flex: {}, flexGrow: {}, flexShrink: {}, alignSelf: {}, justifyItems: {}, justifySelf: {}, gap: {style: Qr}, rowGap: {style: ei}, columnGap: {style: $r}, gridColumn: {}, gridRow: {}, gridAutoFlow: {}, gridAutoColumns: {}, gridAutoRows: {}, gridTemplateColumns: {}, gridTemplateRows: {}, gridTemplateAreas: {}, gridArea: {}, position: {}, zIndex: {themeKey: `zIndex`}, top: {}, right: {}, bottom: {}, left: {}, boxShadow: {themeKey: `shadows`}, width: {transform: Q}, maxWidth: {style: _i}, minWidth: {transform: Q}, height: {transform: Q}, maxHeight: {transform: Q}, minHeight: {transform: Q}, boxSizing: {}, font: {themeKey: `font`}, fontFamily: {themeKey: `typography`}, fontSize: {themeKey: `typography`}, fontStyle: {themeKey: `typography`}, fontWeight: {themeKey: `typography`}, letterSpacing: {}, textTransform: {}, lineHeight: {}, textAlign: {}, typography: {cssProperty: false, themeKey: `typography`}}, Di = {};
function Oi() {
  function e3(t2) {
    if (!t2.sx)
      return null;
    let {sx: n2, theme: r2 = Di, nested: i2} = t2, a2 = r2.unstable_sxConfig ?? Ei, o2 = {sx: null, theme: r2, nested: true};
    function s2(n3) {
      let s3 = n3;
      if (typeof n3 == `function`)
        s3 = n3(r2);
      else if (typeof n3 != `object`)
        return n3;
      if (!s3)
        return null;
      let c2 = r2.breakpoints ?? Re, l2 = Ue(c2);
      for (let n4 in s3) {
        let i3 = ji(s3[n4], r2);
        if (i3 != null) {
          if (typeof i3 != `object`) {
            Ai(l2, n4, i3, r2, a2);
            continue;
          }
          if (a2[n4]) {
            Ai(l2, n4, i3, r2, a2);
            continue;
          }
          Je(c2, i3) ? Be(l2, t2.theme, i3, (e4, t3) => {
            l2[e4][n4] = t3;
          }) : (o2.sx = i3, l2[n4] = e3(o2));
        }
      }
      return !i2 && r2.modularCssLayers ? {"@layer sx": je(r2, We(c2, l2))} : je(r2, We(c2, l2));
    }
    return Array.isArray(n2) ? n2.map(s2) : s2(n2);
  }
  return e3.filterProps = [`sx`], e3;
}
var ki = Oi();
function Ai(e3, t2, n2, r2, i2) {
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
    be(e3, s2({[t2]: n2, theme: r2}));
    return;
  }
  let {cssProperty: c2 = t2, transform: l2} = a2, u2 = O(r2, o2);
  Be(e3, r2, n2, (n3, r3) => {
    let i3 = Ze(u2, l2, r3, t2);
    c2 === false ? be(n3 ? e3[n3] : e3, i3) : n3 ? e3[n3][c2] = i3 : e3[c2] = i3;
  });
}
function ji(e3, t2) {
  return typeof e3 == `function` ? e3(t2) : e3;
}
function Mi(e3, t2) {
  let n2 = this;
  if (n2.vars) {
    if (!n2.colorSchemes?.[e3] || typeof n2.getColorSchemeSelector != `function`)
      return {};
    let r2 = n2.getColorSchemeSelector(e3);
    return r2 === `&` ? t2 : ((r2.includes(`data-`) || r2.includes(`.`)) && (r2 = `*:where(${r2.replace(/\s*&$/, ``)}) &`), {[r2]: t2});
  }
  return n2.palette.mode === e3 ? t2 : {};
}
function Ni(e3 = {}, ...t2) {
  let _a = e3, {breakpoints: n2 = {}, palette: r2 = {}, spacing: i2, shape: a2 = {}} = _a, o2 = __objRest(_a, ["breakpoints", "palette", "spacing", "shape"]), s2 = v(n2), c2 = Ir(i2), l2 = C({breakpoints: s2, direction: `ltr`, components: {}, palette: __spreadValues({mode: `light`}, r2), spacing: c2, shape: __spreadValues(__spreadValues({}, Fr), a2)}, o2);
  return l2 = Fe(l2), l2.applyStyles = Mi, l2 = t2.reduce((e4, t3) => C(e4, t3), l2), l2.unstable_sxConfig = __spreadValues(__spreadValues({}, Ei), o2?.unstable_sxConfig), l2.unstable_sx = function(e4) {
    return ki({sx: e4, theme: this});
  }, l2.internal_cache = {}, l2;
}
var Pi = Ni();
function Fi(e3 = Pi) {
  return xr(e3);
}
var Ii = new Set([`__proto__`, `constructor`, `prototype`]), Li = (e3, t2, n2, r2 = []) => {
  let i2 = e3;
  for (let e4 = 0; e4 < t2.length; e4 += 1) {
    let a2 = t2[e4];
    if (Ii.has(a2))
      break;
    e4 === t2.length - 1 ? Array.isArray(i2) ? i2[Number(a2)] = n2 : i2 && typeof i2 == `object` && (i2[a2] = n2) : i2 && typeof i2 == `object` && (i2[a2] || (i2[a2] = r2.includes(a2) ? [] : {}), i2 = i2[a2]);
  }
}, Ri = (e3, t2, n2) => {
  function r2(e4, i2 = [], a2 = []) {
    Object.entries(e4).forEach(([e5, o2]) => {
      (!n2 || n2 && !n2([...i2, e5])) && o2 != null && (typeof o2 == `object` && Object.keys(o2).length > 0 ? r2(o2, [...i2, e5], Array.isArray(o2) ? [...a2, e5] : a2) : t2([...i2, e5], o2, a2));
    });
  }
  r2(e3);
}, zi = (e3, t2) => typeof t2 == `number` ? [`lineHeight`, `fontWeight`, `opacity`, `zIndex`].some((t3) => e3.includes(t3)) || e3[e3.length - 1].toLowerCase().includes(`opacity`) ? t2 : `${t2}px` : t2;
function Bi(e3, t2) {
  let {prefix: n2, shouldSkipGeneratingVar: r2} = t2 || {}, i2 = {}, a2 = {}, o2 = {};
  return Ri(e3, (e4, t3, s2) => {
    if ((typeof t3 == `string` || typeof t3 == `number`) && (!r2 || !r2(e4, t3))) {
      let r3 = `--${n2 ? `${n2}-` : ``}${e4.join(`-`)}`, c2 = zi(e4, t3);
      Object.assign(i2, {[r3]: c2}), Li(a2, e4, `var(${r3})`, s2), Li(o2, e4, `var(${r3}, ${c2})`, s2);
    }
  }, (e4) => e4[0] === `vars`), {css: i2, vars: a2, varsWithDefaults: o2};
}
function Vi(e3, t2 = {}) {
  let {getSelector: n2 = _2, disableCssColorScheme: r2, colorSchemeSelector: i2, enableContrastVars: a2} = t2, _a = e3, {colorSchemes: o2 = {}, components: s2, defaultColorScheme: c2 = `light`} = _a, l2 = __objRest(_a, ["colorSchemes", "components", "defaultColorScheme"]), {vars: u2, css: d2, varsWithDefaults: f2} = Bi(l2, t2), p2 = f2, m2 = {}, _b = o2, {[c2]: h2} = _b, g2 = __objRest(_b, [__restKey(c2)]);
  if (Object.entries(g2 || {}).forEach(([e4, n3]) => {
    let {vars: r3, css: i3, varsWithDefaults: a3} = Bi(n3, t2);
    p2 = C(p2, a3), m2[e4] = {css: i3, vars: r3};
  }), h2) {
    let {css: e4, vars: n3, varsWithDefaults: r3} = Bi(h2, t2);
    p2 = C(p2, r3), m2[c2] = {css: e4, vars: n3};
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
      e4 = C(e4, t3);
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
function Hi(e3) {
  return function(t2) {
    return e3 === `media` ? `@media (prefers-color-scheme: ${t2})` : e3 ? e3.startsWith(`data-`) && !e3.includes(`%s`) ? `[${e3}="${t2}"] &` : e3 === `class` ? `.${t2} &` : e3 === `data` ? `[data-${t2}] &` : `${e3.replace(`%s`, t2)} &` : `&`;
  };
}
var Ui = (e3) => e3, Wi = (() => {
  let e3 = Ui;
  return {configure(t2) {
    e3 = t2;
  }, generate(t2) {
    return e3(t2);
  }, reset() {
    e3 = Ui;
  }};
})(), Gi = {active: `active`, checked: `checked`, completed: `completed`, disabled: `disabled`, error: `error`, expanded: `expanded`, focused: `focused`, focusVisible: `focusVisible`, open: `open`, readOnly: `readOnly`, required: `required`, selected: `selected`};
function Ki(e3, t2, n2 = `Mui`) {
  let r2 = Gi[t2];
  return r2 ? `${n2}-${r2}` : `${Wi.generate(e3)}-${t2}`;
}
function qi(e3, t2, n2 = `Mui`) {
  let r2 = {};
  return t2.forEach((t3) => {
    r2[t3] = Ki(e3, t3, n2);
  }), r2;
}
function Ji(e3, t2, n2 = void 0) {
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
function Yi(e3) {
  let _a = e3, {variants: t2} = _a, n2 = __objRest(_a, ["variants"]), r2 = {variants: t2, style: q(n2), isProcessed: true};
  return r2.style === n2 || t2 && t2.forEach((e4) => {
    typeof e4.style != `function` && (e4.style = q(e4.style));
  }), r2;
}
var Xi = Ni();
function Zi(e3) {
  return e3 !== `ownerState` && e3 !== `theme` && e3 !== `sx` && e3 !== `as`;
}
function $(e3, t2) {
  return t2 && e3 && typeof e3 == `object` && e3.styles && !e3.styles.startsWith(`@layer`) && (e3.styles = `@layer ${t2}{${String(e3.styles)}}`), e3;
}
function Qi(e3) {
  return e3 ? (t2, n2) => n2[e3] : null;
}
function $i(e3, t2, n2) {
  e3.theme = ye(e3.theme) ? n2 : e3.theme[t2] || e3.theme;
}
function ea(e3, t2, n2) {
  let r2 = typeof t2 == `function` ? t2(e3) : t2;
  if (Array.isArray(r2))
    return r2.flatMap((t3) => ea(e3, t3, n2));
  if (Array.isArray(r2?.variants)) {
    let t3;
    if (r2.isProcessed)
      t3 = n2 ? $(r2.style, n2) : r2.style;
    else {
      let _a = r2, {variants: e4} = _a, i2 = __objRest(_a, ["variants"]);
      t3 = n2 ? $(q(i2), n2) : i2;
    }
    return ta(e3, r2.variants, [t3], n2);
  }
  return r2?.isProcessed ? n2 ? $(q(r2.style), n2) : r2.style : n2 ? $(q(r2), n2) : r2;
}
function ta(e3, t2, n2 = [], r2 = void 0) {
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
      typeof o2.style == `function` ? (i2 ?? (i2 = __spreadProps(__spreadValues(__spreadValues({}, e3), e3.ownerState), {ownerState: e3.ownerState})), n2.push(r2 ? $(q(o2.style(i2)), r2) : o2.style(i2))) : n2.push(r2 ? $(q(o2.style), r2) : o2.style);
    }
  return n2;
}
function na(e3 = {}) {
  let {themeId: t2, defaultTheme: n2 = Xi, rootShouldForwardProp: r2 = Zi, slotShouldForwardProp: i2 = Zi} = e3;
  function a2(e4) {
    $i(e4, t2, n2);
  }
  return (e4, t3 = {}) => {
    _r(e4, (e5) => e5.filter((e6) => e6 !== ki));
    let _a = t3, {name: n3, slot: o2, skipVariantsResolver: s2, skipSx: c2, overridesResolver: l2 = Qi(ia(o2))} = _a, u2 = __objRest(_a, ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]), d2 = n3 && n3.startsWith(`Mui`) || o2 ? `components` : `custom`, f2 = s2 === void 0 ? o2 && o2 !== `Root` && o2 !== `root` || false : s2, p2 = c2 || false, m2 = Zi;
    o2 === `Root` || o2 === `root` ? m2 = r2 : o2 ? m2 = i2 : ra(e4) && (m2 = void 0);
    let h2 = gr(e4, __spreadValues({shouldForwardProp: m2, label: void 0}, u2)), g2 = (e5) => {
      if (e5.__emotion_real === e5)
        return e5;
      if (typeof e5 == `function`)
        return function(t4) {
          return ea(t4, e5, t4.theme.modularCssLayers ? d2 : void 0);
        };
      if (x(e5)) {
        let t4 = Yi(e5);
        return function(e6) {
          return t4.variants ? ea(e6, t4, e6.theme.modularCssLayers ? d2 : void 0) : e6.theme.modularCssLayers ? $(t4.style, d2) : t4.style;
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
          r4[n4] = ea(e5, t5[n4], e5.theme.modularCssLayers ? `theme` : void 0);
        return l2(e5, r4);
      }), n3 && !f2 && o3.push(function(e5) {
        let t5 = e5.theme?.components?.[n3]?.variants;
        return t5 ? ta(e5, t5, [], e5.theme.modularCssLayers ? `theme` : void 0) : null;
      }), p2 || o3.push(ki), Array.isArray(i3[0])) {
        let e5 = i3.shift(), t5 = Array(r3.length).fill(``), n4 = Array(o3.length).fill(``), a3;
        a3 = [...t5, ...e5, ...n4], a3.raw = [...t5, ...e5.raw, ...n4], r3.unshift(a3);
      }
      let s3 = [...r3, ...i3, ...o3], c3 = h2(...s3);
      return e4.muiName && (c3.muiName = e4.muiName), c3;
    };
    return h2.withConfig && (_2.withConfig = h2.withConfig), _2;
  };
}
function ra(e3) {
  return typeof e3 == `string` && e3.charCodeAt(0) > 96;
}
function ia(e3) {
  return e3 && e3.charAt(0).toLowerCase() + e3.slice(1);
}
function aa(e3) {
  let {theme: t2, name: n2, props: r2} = e3;
  return !t2 || !t2.components || !t2.components[n2] || !t2.components[n2].defaultProps ? r2 : J(t2.components[n2].defaultProps, r2);
}
function oa(e3) {
  let {props: t2, name: n2, defaultTheme: r2, themeId: i2} = e3, a2 = Fi(r2);
  return i2 && (a2 = a2[i2] || a2), aa({theme: a2, name: n2, props: t2});
}
t();
function sa(e3, t2) {
  return f(e3) && t2.indexOf(e3.type.muiName ?? e3.type?._payload?.value?.muiName) !== -1;
}
t();
function ca(e3, t2, n2, i2, a2) {
  let [o2, s2] = r(() => a2 && n2 ? n2(e3).matches : i2 ? i2(e3).matches : t2);
  return yr(() => {
    if (!n2)
      return;
    let t3 = n2(e3), r2 = () => {
      s2(t3.matches);
    };
    return r2(), t3.addEventListener(`change`, r2), () => {
      t3.removeEventListener(`change`, r2);
    };
  }, [e3, n2]), o2;
}
var la = __spreadValues({}, m).useSyncExternalStore;
function ua(e3, t2, r2, i2, a2) {
  let o2 = p(() => t2, [t2]), s2 = n(() => {
    if (a2 && r2)
      return () => r2(e3).matches;
    if (i2 !== null) {
      let {matches: t3} = i2(e3);
      return () => t3;
    }
    return o2;
  }, [o2, e3, i2, a2, r2]), [c2, l2] = n(() => {
    if (r2 === null)
      return [o2, () => () => {
      }];
    let t3 = r2(e3);
    return [() => t3.matches, (e4) => (t3.addEventListener(`change`, e4), () => {
      t3.removeEventListener(`change`, e4);
    })];
  }, [o2, r2, e3]);
  return la(l2, c2, s2);
}
function da(e3 = {}) {
  let {themeId: t2} = e3;
  return function(e4, r2 = {}) {
    let i2 = xr();
    i2 && t2 && (i2 = i2[t2] || i2);
    let a2 = typeof window < `u` && window.matchMedia !== void 0 ? window.matchMedia : null, {defaultMatches: o2 = false, matchMedia: s2, ssrMatchMedia: c2 = null, noSsr: l2 = false} = aa({name: `MuiUseMediaQuery`, props: r2, theme: i2}), u2 = n(() => s2 === void 0 ? a2 === null ? null : a2.bind(window) : s2, [s2, a2]), d2 = typeof e4 == `function` ? e4(i2) : e4;
    return d2 = d2.replace(/^@media( ?)/m, ``), d2.includes(`print`) && console.warn(["MUI: You have provided a `print` query to the `useMediaQuery` hook.", `Using the print media query to modify print styles can lead to unexpected results.`, "Consider using the `displayPrint` field in the `sx` prop instead.", "More information about `displayPrint` on our docs: https://mui.com/system/display/#display-in-print."].join(`
`)), (la === void 0 ? ca : ua)(d2, o2, u2, c2, l2);
  };
}
var fa = da();
export {
  Kr as $,
  ve as $t,
  Ti as A,
  Hn as At,
  ui as B,
  N as Bt,
  yi as C,
  yr as Ct,
  vi as D,
  Kn as Dt,
  xi as E,
  zn as Et,
  di as F,
  st as Ft,
  ti as G,
  k as Gt,
  ii as H,
  pt as Ht,
  mi as I,
  A as It,
  oi as J,
  Ge as Jt,
  ni as K,
  Ye as Kt,
  Z as L,
  j as Lt,
  gi as M,
  Ln as Mt,
  pi as N,
  Nn as Nt,
  Ci as O,
  Vn as Ot,
  fi as P,
  xn as Pt,
  Vr as Q,
  ue as Qt,
  $r as R,
  M as Rt,
  wi as S,
  xr as St,
  _i as T,
  gr as Tt,
  ri as U,
  O as Ut,
  li as V,
  at as Vt,
  ai as W,
  Xe as Wt,
  ei as X,
  He as Xt,
  si as Y,
  qe as Yt,
  Rr as Z,
  Fe as Zt,
  Fi as _,
  C as _n,
  Ar as _t,
  aa as a,
  ce as an,
  Gr as at,
  Oi as b,
  g as bn,
  Cr as bt,
  Xi as c,
  me as cn,
  Y as ct,
  qi as d,
  pe as dn,
  Yr as dt,
  ie as en,
  Ur as et,
  Ki as f,
  _e as fn,
  Lr as ft,
  Bi as g,
  ee as gn,
  Or as gt,
  Vi as h,
  oe as hn,
  Pr as ht,
  oa as i,
  le as in,
  Br as it,
  Q as j,
  Bn as jt,
  Si as k,
  Wn as kt,
  Yi as l,
  de as ln,
  Zr as lt,
  Hi as m,
  T as mn,
  Fr as mt,
  fa as n,
  w as nn,
  qr as nt,
  na as o,
  ne as on,
  zr as ot,
  Wi as p,
  he as pn,
  Ir as pt,
  ci as q,
  D as qt,
  sa as r,
  ge as rn,
  Xr as rt,
  Zi as s,
  se as sn,
  Wr as st,
  da as t,
  fe as tn,
  Hr as tt,
  Ji as u,
  ae as un,
  Jr as ut,
  Ni as v,
  x as vn,
  J as vt,
  bi as w,
  q as wt,
  Ei as x,
  wr as xt,
  ki as y,
  v as yn,
  Er as yt,
  Qr as z,
  it as zt
};
