import { _ as F, j as D, g as wt, a as St, c as Rt, b as mt, __tla as __tla_0 } from "./createStyled-CeU44wOQ.js";
import { _ as Hw, a as jw, b as vi, c as Vw, d as bh, e as Re, f as wh, g as Oe, h as Kn, i as gt, j as Je, k as _r, l as _t, m as Ww, n as Sh, __tla as __tla_1 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js-Bs1ZpPYs.js";
import { _ as Uw, a as Bw, b as zw, c as $w, d as wa, e as wn, __tla as __tla_2 } from "./__mfe_internal__fullcalendar__loadShare___mf_0_iobroker_mf_1_adapter_mf_2_react_mf_2_v5__loadShare__.js-DRmeJBNx.js";
import { _ as _d, a as Gw, __tla as __tla_3 } from "./__mfe_internal__fullcalendar__loadShare__react_mf_2_dom__loadShare__.js-DyNN_6vl.js";
import { _ as fc, a as on, b as ue } from "./tslib.es6-Cr7qirsg.js";
import { _ as Zw, a as qw, b as Qw, c as ol, d as Hn, e as cr, f as ur, g as Wn, h as Un, i as us, j as Dd, k as la, l as ds, m as Xw, n as Jw, __tla as __tla_4 } from "./__mfe_internal__fullcalendar__loadShare___mf_0_mui_mf_1_material__loadShare__.js-BhItiDwM.js";
import { _ as Kw, a as eS, b as tS, __tla as __tla_5 } from "./__mfe_internal__fullcalendar__loadShare___mf_0_mui_mf_1_icons_mf_2_material__loadShare__.js-CXIOiTr5.js";
import { _ as Ne, u as ct, a as lt, T as oo, I as Oi, b as Oa, c as Ee, d as Zt, M as _h, e as Dh, f as kh, g as lo, v as nS, h as rS, F as sS, i as iS, j as aS, k as Th, l as xh, G as oS, m as lS, o as ll, P as cS, n as uS, B as li, D as dS, L as fS, p as hS, C as mS, q as pS, r as kd, s as gS, t as Mh, __tla as __tla_6 } from "./Dialog-CGdYf7_J.js";
import { P as $, __tla as __tla_7 } from "./__mfe_internal__fullcalendar__loadShare__prop_mf_2_types__loadShare__.js-DBhwUaK5.js";
import { u as xr, a as Rs, b as Ii, __tla as __tla_8 } from "./useMediaQuery-C_yfHz9r.js";
import { c as Mr, s as _e, __tla as __tla_9 } from "./createSvgIcon-C9tg3jZF.js";
import { _ as Ia, a as yS, __tla as __tla_10 } from "./__mfe_internal__fullcalendar__loadShare___mf_0_mui_mf_1_system__loadShare__.js-CWZ1l9AA.js";
import { c as vS, __tla as __tla_11 } from "./getColorSchemeSelector-bFPhxf4L.js";
import { __tla as __tla_12 } from "./defaultTheme-vD2G7H8v.js";
import { __tla as __tla_13 } from "./useTheme-DdQHkjMx.js";
let ui;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_6;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_7;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_8;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_9;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_10;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_11;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_12;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_13;
    } catch {
    }
  })()
]).then(async () => {
  function Xr(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
  }
  const Tt = [];
  for (let t = 0; t < 256; ++t) Tt.push((t + 256).toString(16).slice(1));
  function bS(t, e = 0) {
    return (Tt[t[e + 0]] + Tt[t[e + 1]] + Tt[t[e + 2]] + Tt[t[e + 3]] + "-" + Tt[t[e + 4]] + Tt[t[e + 5]] + "-" + Tt[t[e + 6]] + Tt[t[e + 7]] + "-" + Tt[t[e + 8]] + Tt[t[e + 9]] + "-" + Tt[t[e + 10]] + Tt[t[e + 11]] + Tt[t[e + 12]] + Tt[t[e + 13]] + Tt[t[e + 14]] + Tt[t[e + 15]]).toLowerCase();
  }
  let cl;
  const wS = new Uint8Array(16);
  function SS() {
    if (!cl) {
      if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      cl = crypto.getRandomValues.bind(crypto);
    }
    return cl(wS);
  }
  const _S = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Td = {
    randomUUID: _S
  };
  function ca(t, e, n) {
    var _a2;
    if (Td.randomUUID && !t) return Td.randomUUID();
    t = t || {};
    const r = t.random ?? ((_a2 = t.rng) == null ? void 0 : _a2.call(t)) ?? SS();
    if (r.length < 16) throw new Error("Random bytes length must be >= 16");
    return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, bS(r);
  }
  var co, xe, Eh, Ch, Os, Vr, xd, Ah, Rh, Pa = {}, Oh = [], DS = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function fr(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function Ih(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function M(t, e, n) {
    var r, s, i, a = {};
    for (i in e) i == "key" ? r = e[i] : i == "ref" ? s = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? co.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return Sa(t, a, r, s, null);
  }
  function Sa(t, e, n, r, s) {
    var i = {
      type: t,
      props: e,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: s ?? ++Eh
    };
    return s == null && xe.vnode != null && xe.vnode(i), i;
  }
  function Ft() {
    return {
      current: null
    };
  }
  function Ze(t) {
    return t.children;
  }
  function kS(t, e, n, r, s) {
    var i;
    for (i in n) i === "children" || i === "key" || i in e || Na(t, i, null, n[i], r);
    for (i in e) s && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || Na(t, i, e[i], n[i], r);
  }
  function Md(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || DS.test(e) ? n : n + "px";
  }
  function Na(t, e, n, r, s) {
    var i;
    e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
    else {
      if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || Md(t.style, e, "");
      if (n) for (e in n) r && n[e] === r[e] || Md(t.style, e, n[e]);
    }
    else if (e[0] === "o" && e[1] === "n") i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? Cd : Ed, i) : t.removeEventListener(e, i ? Cd : Ed, i);
    else if (e !== "dangerouslySetInnerHTML") {
      if (s) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in t) try {
        t[e] = n ?? "";
        break e;
      } catch {
      }
      typeof n == "function" || (n == null || n === false && e.indexOf("-") == -1 ? t.removeAttribute(e) : t.setAttribute(e, n));
    }
  }
  function Ed(t) {
    Os = true;
    try {
      return this.l[t.type + false](xe.event ? xe.event(t) : t);
    } finally {
      Os = false;
    }
  }
  function Cd(t) {
    Os = true;
    try {
      return this.l[t.type + true](xe.event ? xe.event(t) : t);
    } finally {
      Os = false;
    }
  }
  function Ut(t, e) {
    this.props = t, this.context = e;
  }
  function bi(t, e) {
    if (e == null) return t.__ ? bi(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
    return typeof t.type == "function" ? bi(t) : null;
  }
  function Ph(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
      return Ph(t);
    }
  }
  function TS(t) {
    Os ? setTimeout(t) : Ah(t);
  }
  function Ll(t) {
    (!t.__d && (t.__d = true) && Vr.push(t) && !La.__r++ || xd !== xe.debounceRendering) && ((xd = xe.debounceRendering) || TS)(La);
  }
  function La() {
    var t, e, n, r, s, i, a, l;
    for (Vr.sort(function(c, d) {
      return c.__v.__b - d.__v.__b;
    }); t = Vr.shift(); ) t.__d && (e = Vr.length, r = void 0, s = void 0, a = (i = (n = t).__v).__e, (l = n.__P) && (r = [], (s = fr({}, i)).__v = i.__v + 1, hc(l, i, s, n.__n, l.ownerSVGElement !== void 0, i.__h != null ? [
      a
    ] : null, r, a ?? bi(i), i.__h), Hh(r, i), i.__e != a && Ph(i)), Vr.length > e && Vr.sort(function(c, d) {
      return c.__v.__b - d.__v.__b;
    }));
    La.__r = 0;
  }
  function Nh(t, e, n, r, s, i, a, l, c, d) {
    var f, m, g, y, v, S, b, _ = r && r.__k || Oh, E = _.length;
    for (n.__k = [], f = 0; f < e.length; f++) if ((y = n.__k[f] = (y = e[f]) == null || typeof y == "boolean" ? null : typeof y == "string" || typeof y == "number" || typeof y == "bigint" ? Sa(null, y, null, null, y) : Array.isArray(y) ? Sa(Ze, {
      children: y
    }, null, null, null) : y.__b > 0 ? Sa(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v) : y) != null) {
      if (y.__ = n, y.__b = n.__b + 1, (g = _[f]) === null || g && y.key == g.key && y.type === g.type) _[f] = void 0;
      else for (m = 0; m < E; m++) {
        if ((g = _[m]) && y.key == g.key && y.type === g.type) {
          _[m] = void 0;
          break;
        }
        g = null;
      }
      hc(t, y, g = g || Pa, s, i, a, l, c, d), v = y.__e, (m = y.ref) && g.ref != m && (b || (b = []), g.ref && b.push(g.ref, null, y), b.push(m, y.__c || v, y)), v != null ? (S == null && (S = v), typeof y.type == "function" && y.__k === g.__k ? y.__d = c = Lh(y, c, t) : c = Yh(t, y, g, _, v, c), typeof n.type == "function" && (n.__d = c)) : c && g.__e == c && c.parentNode != t && (c = bi(g));
    }
    for (n.__e = S, f = E; f--; ) _[f] != null && (typeof n.type == "function" && _[f].__e != null && _[f].__e == n.__d && (n.__d = Fh(r).nextSibling), Vh(_[f], _[f]));
    if (b) for (f = 0; f < b.length; f++) jh(b[f], b[++f], b[++f]);
  }
  function Lh(t, e, n) {
    for (var r, s = t.__k, i = 0; s && i < s.length; i++) (r = s[i]) && (r.__ = t, e = typeof r.type == "function" ? Lh(r, e, n) : Yh(n, r, r, s, r.__e, e));
    return e;
  }
  function Ya(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
      Ya(n, e);
    }) : e.push(t)), e;
  }
  function Yh(t, e, n, r, s, i) {
    var a, l, c;
    if (e.__d !== void 0) a = e.__d, e.__d = void 0;
    else if (n == null || s != i || s.parentNode == null) e: if (i == null || i.parentNode !== t) t.appendChild(s), a = null;
    else {
      for (l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 1) if (l == s) break e;
      t.insertBefore(s, i), a = i;
    }
    return a !== void 0 ? a : s.nextSibling;
  }
  function Fh(t) {
    var e, n, r;
    if (t.type == null || typeof t.type == "string") return t.__e;
    if (t.__k) {
      for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (r = Fh(n))) return r;
    }
    return null;
  }
  function hc(t, e, n, r, s, i, a, l, c) {
    var d, f, m, g, y, v, S, b, _, E, R, T, x, N, I, O = e.type;
    if (e.constructor !== void 0) return null;
    n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, i = [
      l
    ]), (d = xe.__b) && d(e);
    try {
      e: if (typeof O == "function") {
        if (b = e.props, _ = (d = O.contextType) && r[d.__c], E = d ? _ ? _.props.value : d.__ : r, n.__c ? S = (f = e.__c = n.__c).__ = f.__E : ("prototype" in O && O.prototype.render ? e.__c = f = new O(b, E) : (e.__c = f = new Ut(b, E), f.constructor = O, f.render = MS), _ && _.sub(f), f.props = b, f.state || (f.state = {}), f.context = E, f.__n = r, m = f.__d = true, f.__h = [], f._sb = []), f.__s == null && (f.__s = f.state), O.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = fr({}, f.__s)), fr(f.__s, O.getDerivedStateFromProps(b, f.__s))), g = f.props, y = f.state, f.__v = e, m) O.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), f.componentDidMount != null && f.__h.push(f.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && b !== g && f.componentWillReceiveProps != null && f.componentWillReceiveProps(b, E), !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(b, f.__s, E) === false || e.__v === n.__v) {
            for (e.__v !== n.__v && (f.props = b, f.state = f.__s, f.__d = false), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(J) {
              J && (J.__ = e);
            }), R = 0; R < f._sb.length; R++) f.__h.push(f._sb[R]);
            f._sb = [], f.__h.length && a.push(f);
            break e;
          }
          f.componentWillUpdate != null && f.componentWillUpdate(b, f.__s, E), f.componentDidUpdate != null && f.__h.push(function() {
            f.componentDidUpdate(g, y, v);
          });
        }
        if (f.context = E, f.props = b, f.__P = t, T = xe.__r, x = 0, "prototype" in O && O.prototype.render) {
          for (f.state = f.__s, f.__d = false, T && T(e), d = f.render(f.props, f.state, f.context), N = 0; N < f._sb.length; N++) f.__h.push(f._sb[N]);
          f._sb = [];
        } else do
          f.__d = false, T && T(e), d = f.render(f.props, f.state, f.context), f.state = f.__s;
        while (f.__d && ++x < 25);
        f.state = f.__s, f.getChildContext != null && (r = fr(fr({}, r), f.getChildContext())), m || f.getSnapshotBeforeUpdate == null || (v = f.getSnapshotBeforeUpdate(g, y)), I = d != null && d.type === Ze && d.key == null ? d.props.children : d, Nh(t, Array.isArray(I) ? I : [
          I
        ], e, n, r, s, i, a, l, c), f.base = e.__e, e.__h = null, f.__h.length && a.push(f), S && (f.__E = f.__ = null), f.__e = false;
      } else i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = xS(n.__e, e, n, r, s, i, a, c);
      (d = xe.diffed) && d(e);
    } catch (J) {
      e.__v = null, (c || i != null) && (e.__e = l, e.__h = !!c, i[i.indexOf(l)] = null), xe.__e(J, e, n);
    }
  }
  function Hh(t, e) {
    xe.__c && xe.__c(e, t), t.some(function(n) {
      try {
        t = n.__h, n.__h = [], t.some(function(r) {
          r.call(n);
        });
      } catch (r) {
        xe.__e(r, n.__v);
      }
    });
  }
  function xS(t, e, n, r, s, i, a, l) {
    var c, d, f, m = n.props, g = e.props, y = e.type, v = 0;
    if (y === "svg" && (s = true), i != null) {
      for (; v < i.length; v++) if ((c = i[v]) && "setAttribute" in c == !!y && (y ? c.localName === y : c.nodeType === 3)) {
        t = c, i[v] = null;
        break;
      }
    }
    if (t == null) {
      if (y === null) return document.createTextNode(g);
      t = s ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, g.is && g), i = null, l = false;
    }
    if (y === null) m === g || l && t.data === g || (t.data = g);
    else {
      if (i = i && co.call(t.childNodes), d = (m = n.props || Pa).dangerouslySetInnerHTML, f = g.dangerouslySetInnerHTML, !l) {
        if (i != null) for (m = {}, v = 0; v < t.attributes.length; v++) m[t.attributes[v].name] = t.attributes[v].value;
        (f || d) && (f && (d && f.__html == d.__html || f.__html === t.innerHTML) || (t.innerHTML = f && f.__html || ""));
      }
      if (kS(t, g, m, s, l), f) e.__k = [];
      else if (v = e.props.children, Nh(t, Array.isArray(v) ? v : [
        v
      ], e, n, r, s && y !== "foreignObject", i, a, i ? i[0] : n.__k && bi(n, 0), l), i != null) for (v = i.length; v--; ) i[v] != null && Ih(i[v]);
      l || ("value" in g && (v = g.value) !== void 0 && (v !== t.value || y === "progress" && !v || y === "option" && v !== m.value) && Na(t, "value", v, m.value, false), "checked" in g && (v = g.checked) !== void 0 && v !== t.checked && Na(t, "checked", v, m.checked, false));
    }
    return t;
  }
  function jh(t, e, n) {
    try {
      typeof t == "function" ? t(e) : t.current = e;
    } catch (r) {
      xe.__e(r, n);
    }
  }
  function Vh(t, e, n) {
    var r, s;
    if (xe.unmount && xe.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || jh(r, null, e)), (r = t.__c) != null) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (i) {
        xe.__e(i, e);
      }
      r.base = r.__P = null, t.__c = void 0;
    }
    if (r = t.__k) for (s = 0; s < r.length; s++) r[s] && Vh(r[s], e, n || typeof t.type != "function");
    n || t.__e == null || Ih(t.__e), t.__ = t.__e = t.__d = void 0;
  }
  function MS(t, e, n) {
    return this.constructor(t, n);
  }
  function wi(t, e, n) {
    var r, s, i;
    xe.__ && xe.__(t, e), s = (r = false) ? null : e.__k, i = [], hc(e, t = e.__k = M(Ze, null, [
      t
    ]), s || Pa, Pa, e.ownerSVGElement !== void 0, s ? null : e.firstChild ? co.call(e.childNodes) : null, i, s ? s.__e : e.firstChild, r), Hh(i, t);
  }
  function ES(t, e) {
    var n = {
      __c: e = "__cC" + Rh++,
      __: t,
      Consumer: function(r, s) {
        return r.children(s);
      },
      Provider: function(r) {
        var s, i;
        return this.getChildContext || (s = [], (i = {})[e] = this, this.getChildContext = function() {
          return i;
        }, this.shouldComponentUpdate = function(a) {
          this.props.value !== a.value && s.some(function(l) {
            l.__e = true, Ll(l);
          });
        }, this.sub = function(a) {
          s.push(a);
          var l = a.componentWillUnmount;
          a.componentWillUnmount = function() {
            s.splice(s.indexOf(a), 1), l && l.call(a);
          };
        }), r.children;
      }
    };
    return n.Provider.__ = n.Consumer.contextType = n;
  }
  co = Oh.slice, xe = {
    __e: function(t, e, n, r) {
      for (var s, i, a; e = e.__; ) if ((s = e.__c) && !s.__) try {
        if ((i = s.constructor) && i.getDerivedStateFromError != null && (s.setState(i.getDerivedStateFromError(t)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, r || {}), a = s.__d), a) return s.__E = s;
      } catch (l) {
        t = l;
      }
      throw t;
    }
  }, Eh = 0, Ch = function(t) {
    return t != null && t.constructor === void 0;
  }, Os = false, Ut.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = fr({}, this.state), typeof t == "function" && (t = t(fr({}, n), this.props)), t && fr(n, t), t != null && this.__v && (e && this._sb.push(e), Ll(this));
  }, Ut.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = true, t && this.__h.push(t), Ll(this));
  }, Ut.prototype.render = Ze, Vr = [], Ah = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, La.__r = 0, Rh = 0;
  var Sn, ul, Ad, Wh = [], dl = [], Rd = xe.__b, Od = xe.__r, Id = xe.diffed, Pd = xe.__c, Nd = xe.unmount;
  function CS() {
    for (var t; t = Wh.shift(); ) if (t.__P && t.__H) try {
      t.__H.__h.forEach(_a), t.__H.__h.forEach(Yl), t.__H.__h = [];
    } catch (e) {
      t.__H.__h = [], xe.__e(e, t.__v);
    }
  }
  xe.__b = function(t) {
    Sn = null, Rd && Rd(t);
  }, xe.__r = function(t) {
    Od && Od(t);
    var e = (Sn = t.__c).__H;
    e && (ul === Sn ? (e.__h = [], Sn.__h = [], e.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.__V = dl, n.__N = n.i = void 0;
    })) : (e.__h.forEach(_a), e.__h.forEach(Yl), e.__h = [])), ul = Sn;
  }, xe.diffed = function(t) {
    Id && Id(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (Wh.push(e) !== 1 && Ad === xe.requestAnimationFrame || ((Ad = xe.requestAnimationFrame) || AS)(CS)), e.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== dl && (n.__ = n.__V), n.i = void 0, n.__V = dl;
    })), ul = Sn = null;
  }, xe.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.forEach(_a), n.__h = n.__h.filter(function(r) {
          return !r.__ || Yl(r);
        });
      } catch (r) {
        e.some(function(s) {
          s.__h && (s.__h = []);
        }), e = [], xe.__e(r, n.__v);
      }
    }), Pd && Pd(t, e);
  }, xe.unmount = function(t) {
    Nd && Nd(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
      try {
        _a(r);
      } catch (s) {
        e = s;
      }
    }), n.__H = void 0, e && xe.__e(e, n.__v));
  };
  var Ld = typeof requestAnimationFrame == "function";
  function AS(t) {
    var e, n = function() {
      clearTimeout(r), Ld && cancelAnimationFrame(e), setTimeout(t);
    }, r = setTimeout(n, 100);
    Ld && (e = requestAnimationFrame(n));
  }
  function _a(t) {
    var e = Sn, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), Sn = e;
  }
  function Yl(t) {
    var e = Sn;
    t.__c = t.__(), Sn = e;
  }
  function RS(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function Yd(t, e) {
    for (var n in t) if (n !== "__source" && !(n in e)) return true;
    for (var r in e) if (r !== "__source" && t[r] !== e[r]) return true;
    return false;
  }
  function Fd(t) {
    this.props = t;
  }
  (Fd.prototype = new Ut()).isPureReactComponent = true, Fd.prototype.shouldComponentUpdate = function(t, e) {
    return Yd(this.props, t) || Yd(this.state, e);
  };
  var Hd = xe.__b;
  xe.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Hd && Hd(t);
  };
  var OS = xe.__e;
  xe.__e = function(t, e, n, r) {
    if (t.then) {
      for (var s, i = e; i = i.__; ) if ((s = i.__c) && s.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), s.__c(t, e);
    }
    OS(t, e, n, r);
  };
  var jd = xe.unmount;
  function Uh(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
      typeof r.__c == "function" && r.__c();
    }), t.__c.__H = null), (t = RS({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
      return Uh(r, e, n);
    })), t;
  }
  function Bh(t, e, n) {
    return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
      return Bh(r, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = true, t.__c.__P = n)), t;
  }
  function fl() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function zh(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function ua() {
    this.u = null, this.o = null;
  }
  xe.unmount = function(t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && t.__h === true && (t.type = null), jd && jd(t);
  }, (fl.prototype = new Ut()).__c = function(t, e) {
    var n = e.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var s = zh(r.__v), i = false, a = function() {
      i || (i = true, n.__R = null, s ? s(l) : l());
    };
    n.__R = a;
    var l = function() {
      if (!--r.__u) {
        if (r.state.__a) {
          var d = r.state.__a;
          r.__v.__k[0] = Bh(d, d.__c.__P, d.__c.__O);
        }
        var f;
        for (r.setState({
          __a: r.__b = null
        }); f = r.t.pop(); ) f.forceUpdate();
      }
    }, c = e.__h === true;
    r.__u++ || c || r.setState({
      __a: r.__b = r.__v.__k[0]
    }), t.then(a, a);
  }, fl.prototype.componentWillUnmount = function() {
    this.t = [];
  }, fl.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = Uh(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var s = e.__a && M(Ze, null, t.fallback);
    return s && (s.__h = null), [
      M(Ze, null, e.__a ? null : t.children),
      s
    ];
  };
  var Vd = function(t, e, n) {
    if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      t.u = n = n[2];
    }
  };
  function IS(t) {
    return this.getChildContext = function() {
      return t.context;
    }, t.children;
  }
  function PS(t) {
    var e = this, n = t.i;
    e.componentWillUnmount = function() {
      wi(null, e.l), e.l = null, e.i = null;
    }, e.i && e.i !== n && e.componentWillUnmount(), t.__v ? (e.l || (e.i = n, e.l = {
      nodeType: 1,
      parentNode: n,
      childNodes: [],
      appendChild: function(r) {
        this.childNodes.push(r), e.i.appendChild(r);
      },
      insertBefore: function(r, s) {
        this.childNodes.push(r), e.i.appendChild(r);
      },
      removeChild: function(r) {
        this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r);
      }
    }), wi(M(IS, {
      context: e.context
    }, t.__v), e.l)) : e.l && e.componentWillUnmount();
  }
  function NS(t, e) {
    var n = M(PS, {
      __v: t,
      i: e
    });
    return n.containerInfo = e, n;
  }
  (ua.prototype = new Ut()).__a = function(t) {
    var e = this, n = zh(e.__v), r = e.o.get(t);
    return r[0]++, function(s) {
      var i = function() {
        e.props.revealOrder ? (r.push(s), Vd(e, t, r)) : s();
      };
      n ? n(i) : i();
    };
  }, ua.prototype.render = function(t) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var e = Ya(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; ) this.o.set(e[n], this.u = [
      1,
      0,
      this.u
    ]);
    return t.children;
  }, ua.prototype.componentDidUpdate = ua.prototype.componentDidMount = function() {
    var t = this;
    this.o.forEach(function(e, n) {
      Vd(t, n, e);
    });
  };
  var LS = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, YS = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, FS = typeof document < "u", HS = function(t) {
    return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
  };
  Ut.prototype.isReactComponent = {}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
  ].forEach(function(t) {
    Object.defineProperty(Ut.prototype, t, {
      configurable: true,
      get: function() {
        return this["UNSAFE_" + t];
      },
      set: function(e) {
        Object.defineProperty(this, t, {
          configurable: true,
          writable: true,
          value: e
        });
      }
    });
  });
  var Wd = xe.event;
  function jS() {
  }
  function VS() {
    return this.cancelBubble;
  }
  function WS() {
    return this.defaultPrevented;
  }
  xe.event = function(t) {
    return Wd && (t = Wd(t)), t.persist = jS, t.isPropagationStopped = VS, t.isDefaultPrevented = WS, t.nativeEvent = t;
  };
  var Ud = {
    configurable: true,
    get: function() {
      return this.class;
    }
  }, Bd = xe.vnode;
  xe.vnode = function(t) {
    var e = t.type, n = t.props, r = n;
    if (typeof e == "string") {
      var s = e.indexOf("-") === -1;
      for (var i in r = {}, n) {
        var a = n[i];
        FS && i === "children" && e === "noscript" || i === "value" && "defaultValue" in n && a == null || (i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === true ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + e) && !HS(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : s && YS.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), r[i] && (i = "oninputCapture")), r[i] = a);
      }
      e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Ya(n.children).forEach(function(l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1;
      })), e == "select" && r.defaultValue != null && (r.value = Ya(n.children).forEach(function(l) {
        l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
      })), t.props = r, n.class != n.className && (Ud.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Ud));
    }
    t.$$typeof = LS, Bd && Bd(t);
  };
  var zd = xe.__r;
  xe.__r = function(t) {
    zd && zd(t), t.__c;
  };
  const $h = [], Fl = /* @__PURE__ */ new Map();
  function uo(t) {
    $h.push(t), Fl.forEach((e) => {
      Zh(e, t);
    });
  }
  function US(t) {
    t.isConnected && t.getRootNode && Gh(t.getRootNode());
  }
  function Gh(t) {
    let e = Fl.get(t);
    if (!e || !e.isConnected) {
      if (e = t.querySelector("style[data-fullcalendar]"), !e) {
        e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
        const n = zS();
        n && (e.nonce = n);
        const r = t === document ? document.head : t, s = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
        r.insertBefore(e, s);
      }
      Fl.set(t, e), BS(e);
    }
  }
  function BS(t) {
    for (const e of $h) Zh(t, e);
  }
  function Zh(t, e) {
    const { sheet: n } = t, r = n.cssRules.length;
    e.split("}").forEach((s, i) => {
      s = s.trim(), s && n.insertRule(s + "}", r + i);
    });
  }
  let hl;
  function zS() {
    return hl === void 0 && (hl = $S()), hl;
  }
  function $S() {
    const t = document.querySelector('meta[name="csp-nonce"]');
    if (t && t.hasAttribute("content")) return t.getAttribute("content");
    const e = document.querySelector("script[nonce]");
    return e && e.nonce || "";
  }
  typeof document < "u" && Gh(document);
  var GS = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
  uo(GS);
  class mc {
    constructor(e) {
      this.drainedOption = e, this.isRunning = false, this.isDirty = false, this.pauseDepths = {}, this.timeoutId = 0;
    }
    request(e) {
      this.isDirty = true, this.isPaused() || (this.clearTimeout(), e == null ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e));
    }
    pause(e = "") {
      let { pauseDepths: n } = this;
      n[e] = (n[e] || 0) + 1, this.clearTimeout();
    }
    resume(e = "", n) {
      let { pauseDepths: r } = this;
      e in r && (n ? delete r[e] : (r[e] -= 1, r[e] <= 0 && delete r[e]), this.tryDrain());
    }
    isPaused() {
      return Object.keys(this.pauseDepths).length;
    }
    tryDrain() {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = true; this.isDirty; ) this.isDirty = false, this.drained();
        this.isRunning = false;
      }
    }
    clear() {
      this.clearTimeout(), this.isDirty = false, this.pauseDepths = {};
    }
    clearTimeout() {
      this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0);
    }
    drained() {
      this.drainedOption && this.drainedOption();
    }
  }
  function pc(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function At(t, e) {
    if (t.closest) return t.closest(e);
    if (!document.documentElement.contains(t)) return null;
    do {
      if (qh(t, e)) return t;
      t = t.parentElement || t.parentNode;
    } while (t !== null && t.nodeType === 1);
    return null;
  }
  function qh(t, e) {
    return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
  }
  function ZS(t, e) {
    let n = t instanceof HTMLElement ? [
      t
    ] : t, r = [];
    for (let s = 0; s < n.length; s += 1) {
      let i = n[s].querySelectorAll(e);
      for (let a = 0; a < i.length; a += 1) r.push(i[a]);
    }
    return r;
  }
  const qS = /(top|left|right|bottom|width|height)$/i;
  function di(t, e) {
    for (let n in e) Qh(t, n, e[n]);
  }
  function Qh(t, e, n) {
    n == null ? t.style[e] = "" : typeof n == "number" && qS.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
  }
  function Xh(t) {
    var e, n;
    return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
  }
  let $d = 0;
  function wr() {
    return $d += 1, "fc-dom-" + $d;
  }
  function fo(t) {
    t.preventDefault();
  }
  function QS(t, e) {
    return (n) => {
      let r = At(n.target, t);
      r && e.call(r, n, r);
    };
  }
  function Jh(t, e, n, r) {
    let s = QS(n, r);
    return t.addEventListener(e, s), () => {
      t.removeEventListener(e, s);
    };
  }
  function XS(t, e, n, r) {
    let s;
    return Jh(t, "mouseover", e, (i, a) => {
      if (a !== s) {
        s = a, n(i, a);
        let l = (c) => {
          s = null, r(c, a), a.removeEventListener("mouseleave", l);
        };
        a.addEventListener("mouseleave", l);
      }
    });
  }
  const Gd = [
    "webkitTransitionEnd",
    "otransitionend",
    "oTransitionEnd",
    "msTransitionEnd",
    "transitionend"
  ];
  function JS(t, e) {
    let n = (r) => {
      e(r), Gd.forEach((s) => {
        t.removeEventListener(s, n);
      });
    };
    Gd.forEach((r) => {
      t.addEventListener(r, n);
    });
  }
  function Kh(t) {
    return Object.assign({
      onClick: t
    }, em(t));
  }
  function em(t) {
    return {
      tabIndex: 0,
      onKeyDown(e) {
        (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
      }
    };
  }
  let Zd = 0;
  function Jr() {
    return Zd += 1, String(Zd);
  }
  function ho() {
    document.body.classList.add("fc-not-allowed");
  }
  function mo() {
    document.body.classList.remove("fc-not-allowed");
  }
  function KS(t) {
    t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", fo);
  }
  function e_(t) {
    t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", fo);
  }
  function t_(t) {
    t.addEventListener("contextmenu", fo);
  }
  function n_(t) {
    t.removeEventListener("contextmenu", fo);
  }
  function r_(t) {
    let e = [], n = [], r, s;
    for (typeof t == "string" ? n = t.split(/\s*,\s*/) : typeof t == "function" ? n = [
      t
    ] : Array.isArray(t) && (n = t), r = 0; r < n.length; r += 1) s = n[r], typeof s == "string" ? e.push(s.charAt(0) === "-" ? {
      field: s.substring(1),
      order: -1
    } : {
      field: s,
      order: 1
    }) : typeof s == "function" && e.push({
      func: s
    });
    return e;
  }
  function s_(t, e, n) {
    let r, s;
    for (r = 0; r < n.length; r += 1) if (s = i_(t, e, n[r]), s) return s;
    return 0;
  }
  function i_(t, e, n) {
    return n.func ? n.func(t, e) : a_(t[n.field], e[n.field]) * (n.order || 1);
  }
  function a_(t, e) {
    return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
  }
  function Ds(t, e) {
    let n = String(t);
    return "000".substr(0, e - n.length) + n;
  }
  function fi(t, e, n) {
    return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, s, i) => r.replace("$" + i, s || ""), t) : n;
  }
  function o_(t, e) {
    return t - e;
  }
  function Da(t) {
    return t % 1 === 0;
  }
  function l_(t) {
    let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!e) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return t.getBoundingClientRect().width - e.getBoundingClientRect().width + n.getBoundingClientRect().width;
  }
  const qd = [
    "years",
    "months",
    "days",
    "milliseconds"
  ], c_ = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function Pe(t, e) {
    return typeof t == "string" ? u_(t) : typeof t == "object" && t ? Qd(t) : typeof t == "number" ? Qd({
      [e || "milliseconds"]: t
    }) : null;
  }
  function u_(t) {
    let e = c_.exec(t);
    if (e) {
      let n = e[1] ? -1 : 1;
      return {
        years: 0,
        months: 0,
        days: n * (e[2] ? parseInt(e[2], 10) : 0),
        milliseconds: n * ((e[3] ? parseInt(e[3], 10) : 0) * 60 * 60 * 1e3 + (e[4] ? parseInt(e[4], 10) : 0) * 60 * 1e3 + (e[5] ? parseInt(e[5], 10) : 0) * 1e3 + (e[6] ? parseInt(e[6], 10) : 0))
      };
    }
    return null;
  }
  function Qd(t) {
    let e = {
      years: t.years || t.year || 0,
      months: t.months || t.month || 0,
      days: t.days || t.day || 0,
      milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
    }, n = t.weeks || t.week;
    return n && (e.days += n * 7, e.specifiedWeeks = true), e;
  }
  function d_(t, e) {
    return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
  }
  function Hl(t, e) {
    return {
      years: t.years + e.years,
      months: t.months + e.months,
      days: t.days + e.days,
      milliseconds: t.milliseconds + e.milliseconds
    };
  }
  function f_(t, e) {
    return {
      years: t.years - e.years,
      months: t.months - e.months,
      days: t.days - e.days,
      milliseconds: t.milliseconds - e.milliseconds
    };
  }
  function h_(t, e) {
    return {
      years: t.years * e,
      months: t.months * e,
      days: t.days * e,
      milliseconds: t.milliseconds * e
    };
  }
  function m_(t) {
    return ks(t) / 365;
  }
  function p_(t) {
    return ks(t) / 30;
  }
  function ks(t) {
    return sn(t) / 864e5;
  }
  function sn(t) {
    return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
  }
  function gc(t, e) {
    let n = null;
    for (let r = 0; r < qd.length; r += 1) {
      let s = qd[r];
      if (e[s]) {
        let i = t[s] / e[s];
        if (!Da(i) || n !== null && n !== i) return null;
        n = i;
      } else if (t[s]) return null;
    }
    return n;
  }
  function jl(t) {
    let e = t.milliseconds;
    if (e) {
      if (e % 1e3 !== 0) return {
        unit: "millisecond",
        value: e
      };
      if (e % (1e3 * 60) !== 0) return {
        unit: "second",
        value: e / 1e3
      };
      if (e % (1e3 * 60 * 60) !== 0) return {
        unit: "minute",
        value: e / (1e3 * 60)
      };
      if (e) return {
        unit: "hour",
        value: e / (1e3 * 60 * 60)
      };
    }
    return t.days ? t.specifiedWeeks && t.days % 7 === 0 ? {
      unit: "week",
      value: t.days / 7
    } : {
      unit: "day",
      value: t.days
    } : t.months ? {
      unit: "month",
      value: t.months
    } : t.years ? {
      unit: "year",
      value: t.years
    } : {
      unit: "millisecond",
      value: 0
    };
  }
  function Dr(t, e, n) {
    if (t === e) return true;
    let r = t.length, s;
    if (r !== e.length) return false;
    for (s = 0; s < r; s += 1) if (!(n ? n(t[s], e[s]) : t[s] === e[s])) return false;
    return true;
  }
  const g_ = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
  ];
  function Xd(t, e) {
    let n = hr(t);
    return n[2] += e * 7, Vt(n);
  }
  function ut(t, e) {
    let n = hr(t);
    return n[2] += e, Vt(n);
  }
  function kr(t, e) {
    let n = hr(t);
    return n[6] += e, Vt(n);
  }
  function y_(t, e) {
    return Er(t, e) / 7;
  }
  function Er(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
  }
  function v_(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
  }
  function b_(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60);
  }
  function w_(t, e) {
    return (e.valueOf() - t.valueOf()) / 1e3;
  }
  function S_(t, e) {
    let n = Xe(t), r = Xe(e);
    return {
      years: 0,
      months: 0,
      days: Math.round(Er(n, r)),
      milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
    };
  }
  function __(t, e) {
    let n = Fa(t, e);
    return n !== null && n % 7 === 0 ? n / 7 : null;
  }
  function Fa(t, e) {
    return mr(t) === mr(e) ? Math.round(Er(t, e)) : null;
  }
  function Xe(t) {
    return Vt([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ]);
  }
  function D_(t) {
    return Vt([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours()
    ]);
  }
  function k_(t) {
    return Vt([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours(),
      t.getUTCMinutes()
    ]);
  }
  function T_(t) {
    return Vt([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours(),
      t.getUTCMinutes(),
      t.getUTCSeconds()
    ]);
  }
  function x_(t, e, n) {
    let r = t.getUTCFullYear(), s = ml(t, r, e, n);
    if (s < 1) return ml(t, r - 1, e, n);
    let i = ml(t, r + 1, e, n);
    return i >= 1 ? Math.min(s, i) : s;
  }
  function ml(t, e, n, r) {
    let s = Vt([
      e,
      0,
      1 + M_(e, n, r)
    ]), i = Xe(t), a = Math.round(Er(s, i));
    return Math.floor(a / 7) + 1;
  }
  function M_(t, e, n) {
    let r = 7 + e - n;
    return -((7 + Vt([
      t,
      0,
      r
    ]).getUTCDay() - e) % 7) + r - 1;
  }
  function Jd(t) {
    return [
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    ];
  }
  function Kd(t) {
    return new Date(t[0], t[1] || 0, t[2] == null ? 1 : t[2], t[3] || 0, t[4] || 0, t[5] || 0);
  }
  function hr(t) {
    return [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours(),
      t.getUTCMinutes(),
      t.getUTCSeconds(),
      t.getUTCMilliseconds()
    ];
  }
  function Vt(t) {
    return t.length === 1 && (t = t.concat([
      0
    ])), new Date(Date.UTC(...t));
  }
  function tm(t) {
    return !isNaN(t.valueOf());
  }
  function mr(t) {
    return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
  }
  function nm(t, e, n = false) {
    let r = t.toISOString();
    return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", yc(e, true)))), r;
  }
  function Pi(t) {
    return t.toISOString().replace(/T.*$/, "");
  }
  function E_(t) {
    return t.toISOString().match(/^\d{4}-\d{2}/)[0];
  }
  function C_(t) {
    return Ds(t.getUTCHours(), 2) + ":" + Ds(t.getUTCMinutes(), 2) + ":" + Ds(t.getUTCSeconds(), 2);
  }
  function yc(t, e = false) {
    let n = t < 0 ? "-" : "+", r = Math.abs(t), s = Math.floor(r / 60), i = Math.round(r % 60);
    return e ? `${n + Ds(s, 2)}:${Ds(i, 2)}` : `GMT${n}${s}${i ? `:${Ds(i, 2)}` : ""}`;
  }
  function Te(t, e, n) {
    let r, s;
    return function(...i) {
      if (!r) s = t.apply(this, i);
      else if (!Dr(r, i)) {
        let a = t.apply(this, i);
        (!e || !e(a, s)) && (s = a);
      }
      return r = i, s;
    };
  }
  function ka(t, e, n) {
    let r, s;
    return (i) => (r ? ln(r, i) || (s = t.call(this, i)) : s = t.call(this, i), r = i, s);
  }
  const pl = {
    week: 3,
    separator: 9,
    omitZeroMinute: 9,
    meridiem: 9,
    omitCommas: 9
  }, Ha = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  }, da = /\s*([ap])\.?m\.?/i, A_ = /,/g, R_ = /\s+/g, O_ = /\u200e/g, I_ = /UTC|GMT/;
  class P_ {
    constructor(e) {
      let n = {}, r = {}, s = 9;
      for (let i in e) i in pl ? (r[i] = e[i], pl[i] < 9 && (s = Math.min(pl[i], s))) : (n[i] = e[i], i in Ha && (s = Math.min(Ha[i], s)));
      this.standardDateProps = n, this.extendedSettings = r, this.smallestUnitNum = s, this.buildFormattingFunc = Te(ef);
    }
    format(e, n) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
    }
    formatRange(e, n, r, s) {
      let { standardDateProps: i, extendedSettings: a } = this, l = j_(e.marker, n.marker, r.calendarSystem);
      if (!l) return this.format(e, r);
      let c = l;
      c > 1 && (i.year === "numeric" || i.year === "2-digit") && (i.month === "numeric" || i.month === "2-digit") && (i.day === "numeric" || i.day === "2-digit") && (c = 1);
      let d = this.format(e, r), f = this.format(n, r);
      if (d === f) return d;
      let m = V_(i, c), g = ef(m, a, r), y = g(e), v = g(n), S = W_(d, y, f, v), b = a.separator || s || r.defaultSeparator || "";
      return S ? S.before + y + b + v + S.after : d + b + f;
    }
    getSmallestUnit() {
      switch (this.smallestUnitNum) {
        case 7:
        case 6:
        case 5:
          return "year";
        case 4:
          return "month";
        case 3:
          return "week";
        case 2:
          return "day";
        default:
          return "time";
      }
    }
  }
  function ef(t, e, n) {
    let r = Object.keys(t).length;
    return r === 1 && t.timeZoneName === "short" ? (s) => yc(s.timeZoneOffset) : r === 0 && e.week ? (s) => H_(n.computeWeekNumber(s.marker), n.weekText, n.weekTextLong, n.locale, e.week) : N_(t, e, n);
  }
  function N_(t, e, n) {
    t = Object.assign({}, t), e = Object.assign({}, e), L_(t, e), t.timeZone = "UTC";
    let r = new Intl.DateTimeFormat(n.locale.codes, t), s;
    if (e.omitZeroMinute) {
      let i = Object.assign({}, t);
      delete i.minute, s = new Intl.DateTimeFormat(n.locale.codes, i);
    }
    return (i) => {
      let { marker: a } = i, l;
      s && !a.getUTCMinutes() ? l = s : l = r;
      let c = l.format(a);
      return Y_(c, i, t, e, n);
    };
  }
  function L_(t, e) {
    t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
  }
  function Y_(t, e, n, r, s) {
    return t = t.replace(O_, ""), n.timeZoneName === "short" && (t = F_(t, s.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : yc(e.timeZoneOffset))), r.omitCommas && (t = t.replace(A_, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === false ? t = t.replace(da, "").trim() : r.meridiem === "narrow" ? t = t.replace(da, (i, a) => a.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(da, (i, a) => `${a.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(da, (i) => i.toLocaleLowerCase())), t = t.replace(R_, " "), t = t.trim(), t;
  }
  function F_(t, e) {
    let n = false;
    return t = t.replace(I_, () => (n = true, e)), n || (t += ` ${e}`), t;
  }
  function H_(t, e, n, r, s) {
    let i = [];
    return s === "long" ? i.push(n) : (s === "short" || s === "narrow") && i.push(e), (s === "long" || s === "short") && i.push(" "), i.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && i.reverse(), i.join("");
  }
  function j_(t, e, n) {
    return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : mr(t) !== mr(e) ? 1 : 0;
  }
  function V_(t, e) {
    let n = {};
    for (let r in t) (!(r in Ha) || Ha[r] <= e) && (n[r] = t[r]);
    return n;
  }
  function W_(t, e, n, r) {
    let s = 0;
    for (; s < t.length; ) {
      let i = t.indexOf(e, s);
      if (i === -1) break;
      let a = t.substr(0, i);
      s = i + e.length;
      let l = t.substr(s), c = 0;
      for (; c < n.length; ) {
        let d = n.indexOf(r, c);
        if (d === -1) break;
        let f = n.substr(0, d);
        c = d + r.length;
        let m = n.substr(c);
        if (a === f && l === m) return {
          before: a,
          after: l
        };
      }
    }
    return null;
  }
  function tf(t, e) {
    let n = e.markerToArray(t.marker);
    return {
      marker: t.marker,
      timeZoneOffset: t.timeZoneOffset,
      array: n,
      year: n[0],
      month: n[1],
      day: n[2],
      hour: n[3],
      minute: n[4],
      second: n[5],
      millisecond: n[6]
    };
  }
  function ja(t, e, n, r) {
    let s = tf(t, n.calendarSystem), i = e ? tf(e, n.calendarSystem) : null;
    return {
      date: s,
      start: s,
      end: i,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator
    };
  }
  class U_ {
    constructor(e) {
      this.cmdStr = e;
    }
    format(e, n, r) {
      return n.cmdFormatter(this.cmdStr, ja(e, null, n, r));
    }
    formatRange(e, n, r, s) {
      return r.cmdFormatter(this.cmdStr, ja(e, n, r, s));
    }
  }
  class B_ {
    constructor(e) {
      this.func = e;
    }
    format(e, n, r) {
      return this.func(ja(e, null, n, r));
    }
    formatRange(e, n, r, s) {
      return this.func(ja(e, n, r, s));
    }
  }
  function nt(t) {
    return typeof t == "object" && t ? new P_(t) : typeof t == "string" ? new U_(t) : typeof t == "function" ? new B_(t) : null;
  }
  const nf = {
    navLinkDayClick: V,
    navLinkWeekClick: V,
    duration: Pe,
    bootstrapFontAwesome: V,
    buttonIcons: V,
    customButtons: V,
    defaultAllDayEventDuration: Pe,
    defaultTimedEventDuration: Pe,
    nextDayThreshold: Pe,
    scrollTime: Pe,
    scrollTimeReset: Boolean,
    slotMinTime: Pe,
    slotMaxTime: Pe,
    dayPopoverFormat: nt,
    slotDuration: Pe,
    snapDuration: Pe,
    headerToolbar: V,
    footerToolbar: V,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: nt,
    dayHeaderClassNames: V,
    dayHeaderContent: V,
    dayHeaderDidMount: V,
    dayHeaderWillUnmount: V,
    dayCellClassNames: V,
    dayCellContent: V,
    dayCellDidMount: V,
    dayCellWillUnmount: V,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: V,
    weekNumbers: Boolean,
    weekNumberClassNames: V,
    weekNumberContent: V,
    weekNumberDidMount: V,
    weekNumberWillUnmount: V,
    editable: Boolean,
    viewClassNames: V,
    viewDidMount: V,
    viewWillUnmount: V,
    nowIndicator: Boolean,
    nowIndicatorSnap: V,
    nowIndicatorClassNames: V,
    nowIndicatorContent: V,
    nowIndicatorDidMount: V,
    nowIndicatorWillUnmount: V,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: V,
    locale: V,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: V,
    eventOrder: r_,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: V,
    contentHeight: V,
    direction: String,
    weekNumberFormat: nt,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: V,
    initialDate: V,
    now: V,
    eventDataTransform: V,
    stickyHeaderDates: V,
    stickyFooterScrollbar: V,
    viewHeight: V,
    defaultAllDay: Boolean,
    eventSourceFailure: V,
    eventSourceSuccess: V,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: V,
    eventConstraint: V,
    eventAllow: V,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: V,
    eventContent: V,
    eventDidMount: V,
    eventWillUnmount: V,
    selectConstraint: V,
    selectOverlap: V,
    selectAllow: V,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: V,
    slotLaneClassNames: V,
    slotLaneContent: V,
    slotLaneDidMount: V,
    slotLaneWillUnmount: V,
    slotLabelClassNames: V,
    slotLabelContent: V,
    slotLabelDidMount: V,
    slotLabelWillUnmount: V,
    dayMaxEvents: V,
    dayMaxEventRows: V,
    dayMinWidth: Number,
    slotLabelInterval: Pe,
    allDayText: String,
    allDayClassNames: V,
    allDayContent: V,
    allDayDidMount: V,
    allDayWillUnmount: V,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: nt,
    rerenderDelay: Number,
    moreLinkText: V,
    moreLinkHint: V,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: V,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: Pe,
    hiddenDays: V,
    fixedWeekCount: Boolean,
    validRange: V,
    visibleRange: V,
    titleFormat: V,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: V,
    navLinkHint: V,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: V,
    moreLinkClassNames: V,
    moreLinkContent: V,
    moreLinkDidMount: V,
    moreLinkWillUnmount: V,
    monthStartFormat: nt,
    handleCustomRendering: V,
    customRenderingMetaMap: V,
    customRenderingReplaces: Boolean
  }, Ur = {
    eventDisplay: "auto",
    defaultRangeSeparator: " - ",
    titleRangeSeparator: " \u2013 ",
    defaultTimedEventDuration: "01:00:00",
    defaultAllDayEventDuration: {
      day: 1
    },
    forceEventDuration: false,
    nextDayThreshold: "00:00:00",
    dayHeaders: true,
    initialView: "",
    aspectRatio: 1.35,
    headerToolbar: {
      start: "title",
      center: "",
      end: "today prev,next"
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: "local",
    editable: false,
    nowIndicator: false,
    scrollTime: "06:00:00",
    scrollTimeReset: true,
    slotMinTime: "00:00:00",
    slotMaxTime: "24:00:00",
    showNonCurrentDates: true,
    lazyFetching: true,
    startParam: "start",
    endParam: "end",
    timeZoneParam: "timeZone",
    timeZone: "local",
    locales: [],
    locale: "",
    themeSystem: "standard",
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    unselectAuto: true,
    dropAccept: "*",
    eventOrder: "start,-duration,allDay,title",
    dayPopoverFormat: {
      month: "long",
      day: "numeric",
      year: "numeric"
    },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1e3,
    eventDragMinDistance: 5,
    expandRows: false,
    navLinks: false,
    selectable: false,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
    monthStartFormat: {
      month: "long",
      day: "numeric"
    },
    nowIndicatorSnap: "auto"
  }, rf = {
    datesSet: V,
    eventsSet: V,
    eventAdd: V,
    eventChange: V,
    eventRemove: V,
    windowResize: V,
    eventClick: V,
    eventMouseEnter: V,
    eventMouseLeave: V,
    select: V,
    unselect: V,
    loading: V,
    _unmount: V,
    _beforeprint: V,
    _afterprint: V,
    _noEventDrop: V,
    _noEventResize: V,
    _resize: V,
    _scrollRequest: V
  }, sf = {
    buttonText: V,
    buttonHints: V,
    views: V,
    plugins: V,
    initialEvents: V,
    events: V,
    eventSources: V
  }, Hr = {
    headerToolbar: jr,
    footerToolbar: jr,
    buttonText: jr,
    buttonHints: jr,
    buttonIcons: jr,
    dateIncrement: jr,
    plugins: fa,
    events: fa,
    eventSources: fa,
    resources: fa
  };
  function jr(t, e) {
    return typeof t == "object" && typeof e == "object" && t && e ? ln(t, e) : t === e;
  }
  function fa(t, e) {
    return Array.isArray(t) && Array.isArray(e) ? Dr(t, e) : t === e;
  }
  const z_ = {
    type: String,
    component: V,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: V,
    usesMinMaxTime: Boolean,
    classNames: V,
    content: V,
    didMount: V,
    willUnmount: V
  };
  function gl(t) {
    return vc(t, Hr);
  }
  function po(t, e) {
    let n = {}, r = {};
    for (let s in e) s in t && (n[s] = e[s](t[s]));
    for (let s in t) s in e || (r[s] = t[s]);
    return {
      refined: n,
      extra: r
    };
  }
  function V(t) {
    return t;
  }
  const { hasOwnProperty: Va } = Object.prototype;
  function vc(t, e) {
    let n = {};
    if (e) {
      for (let r in e) if (e[r] === jr) {
        let s = [];
        for (let i = t.length - 1; i >= 0; i -= 1) {
          let a = t[i][r];
          if (typeof a == "object" && a) s.unshift(a);
          else if (a !== void 0) {
            n[r] = a;
            break;
          }
        }
        s.length && (n[r] = vc(s));
      }
    }
    for (let r = t.length - 1; r >= 0; r -= 1) {
      let s = t[r];
      for (let i in s) i in n || (n[i] = s[i]);
    }
    return n;
  }
  function Gr(t, e) {
    let n = {};
    for (let r in t) e(t[r], r) && (n[r] = t[r]);
    return n;
  }
  function er(t, e) {
    let n = {};
    for (let r in t) n[r] = e(t[r], r);
    return n;
  }
  function rm(t) {
    let e = {};
    for (let n of t) e[n] = true;
    return e;
  }
  function bc(t) {
    let e = [];
    for (let n in t) e.push(t[n]);
    return e;
  }
  function ln(t, e) {
    if (t === e) return true;
    for (let n in t) if (Va.call(t, n) && !(n in e)) return false;
    for (let n in e) if (Va.call(e, n) && t[n] !== e[n]) return false;
    return true;
  }
  const $_ = /^on[A-Z]/;
  function G_(t, e) {
    const n = Z_(t, e);
    for (let r of n) if (!$_.test(r)) return false;
    return true;
  }
  function Z_(t, e) {
    let n = [];
    for (let r in t) Va.call(t, r) && (r in e || n.push(r));
    for (let r in e) Va.call(e, r) && t[r] !== e[r] && n.push(r);
    return n;
  }
  function yl(t, e, n = {}) {
    if (t === e) return true;
    for (let r in e) if (!(r in t && q_(t[r], e[r], n[r]))) return false;
    for (let r in t) if (!(r in e)) return false;
    return true;
  }
  function q_(t, e, n) {
    return t === e || n === true ? true : n ? n(t, e) : false;
  }
  function Q_(t, e = 0, n, r = 1) {
    let s = [];
    n == null && (n = Object.keys(t).length);
    for (let i = e; i < n; i += r) {
      let a = t[i];
      a !== void 0 && s.push(a);
    }
    return s;
  }
  let sm = {};
  function X_(t, e) {
    sm[t] = e;
  }
  function J_(t) {
    return new sm[t]();
  }
  class K_ {
    getMarkerYear(e) {
      return e.getUTCFullYear();
    }
    getMarkerMonth(e) {
      return e.getUTCMonth();
    }
    getMarkerDay(e) {
      return e.getUTCDate();
    }
    arrayToMarker(e) {
      return Vt(e);
    }
    markerToArray(e) {
      return hr(e);
    }
  }
  X_("gregory", K_);
  const eD = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function go(t) {
    let e = eD.exec(t);
    if (e) {
      let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
      if (tm(n)) {
        let r = null;
        return e[13] && (r = (e[15] === "-" ? -1 : 1) * (Number(e[16] || 0) * 60 + Number(e[18] || 0))), {
          marker: n,
          isTimeUnspecified: !e[6],
          timeZoneOffset: r
        };
      }
    }
    return null;
  }
  class tD {
    constructor(e) {
      let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
      e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = J_(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }
    createMarker(e) {
      let n = this.createMarkerMeta(e);
      return n === null ? null : n.marker;
    }
    createNowMarker() {
      return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Vt(Jd(/* @__PURE__ */ new Date()));
    }
    createMarkerMeta(e) {
      if (typeof e == "string") return this.parse(e);
      let n = null;
      return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Vt(e)), n === null || !tm(n) ? null : {
        marker: n,
        isTimeUnspecified: false,
        forcedTzo: null
      };
    }
    parse(e) {
      let n = go(e);
      if (n === null) return null;
      let { marker: r } = n, s = null;
      return n.timeZoneOffset !== null && (this.canComputeOffset ? r = this.timestampToMarker(r.valueOf() - n.timeZoneOffset * 60 * 1e3) : s = n.timeZoneOffset), {
        marker: r,
        isTimeUnspecified: n.isTimeUnspecified,
        forcedTzo: s
      };
    }
    getYear(e) {
      return this.calendarSystem.getMarkerYear(e);
    }
    getMonth(e) {
      return this.calendarSystem.getMarkerMonth(e);
    }
    getDay(e) {
      return this.calendarSystem.getMarkerDay(e);
    }
    add(e, n) {
      let r = this.calendarSystem.markerToArray(e);
      return r[0] += n.years, r[1] += n.months, r[2] += n.days, r[6] += n.milliseconds, this.calendarSystem.arrayToMarker(r);
    }
    subtract(e, n) {
      let r = this.calendarSystem.markerToArray(e);
      return r[0] -= n.years, r[1] -= n.months, r[2] -= n.days, r[6] -= n.milliseconds, this.calendarSystem.arrayToMarker(r);
    }
    addYears(e, n) {
      let r = this.calendarSystem.markerToArray(e);
      return r[0] += n, this.calendarSystem.arrayToMarker(r);
    }
    addMonths(e, n) {
      let r = this.calendarSystem.markerToArray(e);
      return r[1] += n, this.calendarSystem.arrayToMarker(r);
    }
    diffWholeYears(e, n) {
      let { calendarSystem: r } = this;
      return mr(e) === mr(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
    }
    diffWholeMonths(e, n) {
      let { calendarSystem: r } = this;
      return mr(e) === mr(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
    }
    greatestWholeUnit(e, n) {
      let r = this.diffWholeYears(e, n);
      return r !== null ? {
        unit: "year",
        value: r
      } : (r = this.diffWholeMonths(e, n), r !== null ? {
        unit: "month",
        value: r
      } : (r = __(e, n), r !== null ? {
        unit: "week",
        value: r
      } : (r = Fa(e, n), r !== null ? {
        unit: "day",
        value: r
      } : (r = v_(e, n), Da(r) ? {
        unit: "hour",
        value: r
      } : (r = b_(e, n), Da(r) ? {
        unit: "minute",
        value: r
      } : (r = w_(e, n), Da(r) ? {
        unit: "second",
        value: r
      } : {
        unit: "millisecond",
        value: n.valueOf() - e.valueOf()
      }))))));
    }
    countDurationsBetween(e, n, r) {
      let s;
      return r.years && (s = this.diffWholeYears(e, n), s !== null) ? s / m_(r) : r.months && (s = this.diffWholeMonths(e, n), s !== null) ? s / p_(r) : r.days && (s = Fa(e, n), s !== null) ? s / ks(r) : (n.valueOf() - e.valueOf()) / sn(r);
    }
    startOf(e, n) {
      return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Xe(e) : n === "hour" ? D_(e) : n === "minute" ? k_(e) : n === "second" ? T_(e) : null;
    }
    startOfYear(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e)
      ]);
    }
    startOfMonth(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e)
      ]);
    }
    startOfWeek(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
        e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7
      ]);
    }
    computeWeekNumber(e) {
      return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : x_(e, this.weekDow, this.weekDoy);
    }
    format(e, n, r = {}) {
      return n.format({
        marker: e,
        timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
      }, this);
    }
    formatRange(e, n, r, s = {}) {
      return s.isEndExclusive && (n = kr(n, -1)), r.formatRange({
        marker: e,
        timeZoneOffset: s.forcedStartTzo != null ? s.forcedStartTzo : this.offsetForMarker(e)
      }, {
        marker: n,
        timeZoneOffset: s.forcedEndTzo != null ? s.forcedEndTzo : this.offsetForMarker(n)
      }, this, s.defaultSeparator);
    }
    formatIso(e, n = {}) {
      let r = null;
      return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), nm(e, r, n.omitTime);
    }
    timestampToMarker(e) {
      return this.timeZone === "local" ? Vt(Jd(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Vt(this.namedTimeZoneImpl.timestampToArray(e));
    }
    offsetForMarker(e) {
      return this.timeZone === "local" ? -Kd(hr(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(hr(e)) : null;
    }
    toDate(e, n) {
      return this.timeZone === "local" ? Kd(hr(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(hr(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
    }
  }
  class Ni {
    constructor(e) {
      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }
    setIconOverride(e) {
      let n, r;
      if (typeof e == "object" && e) {
        n = Object.assign({}, this.iconClasses);
        for (r in e) n[r] = this.applyIconOverridePrefix(e[r]);
        this.iconClasses = n;
      } else e === false && (this.iconClasses = {});
    }
    applyIconOverridePrefix(e) {
      let n = this.iconOverridePrefix;
      return n && e.indexOf(n) !== 0 && (e = n + e), e;
    }
    getClass(e) {
      return this.classes[e] || "";
    }
    getIconClass(e, n) {
      let r;
      return n && this.rtlIconClasses ? r = this.rtlIconClasses[e] || this.iconClasses[e] : r = this.iconClasses[e], r ? `${this.baseIconClass} ${r}` : "";
    }
    getCustomButtonIconClass(e) {
      let n;
      return this.iconOverrideCustomButtonOption && (n = e[this.iconOverrideCustomButtonOption], n) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(n)}` : "";
    }
  }
  Ni.prototype.classes = {};
  Ni.prototype.iconClasses = {};
  Ni.prototype.baseIconClass = "";
  Ni.prototype.iconOverridePrefix = "";
  function Wa(t) {
    t();
    let e = xe.debounceRendering, n = [];
    function r(s) {
      n.push(s);
    }
    for (xe.debounceRendering = r, wi(M(nD, {}), document.createElement("div")); n.length; ) n.shift()();
    xe.debounceRendering = e;
  }
  class nD extends Ut {
    render() {
      return M("div", {});
    }
    componentDidMount() {
      this.setState({});
    }
  }
  function im(t) {
    let e = ES(t), n = e.Provider;
    return e.Provider = function() {
      let r = !this.getChildContext, s = n.apply(this, arguments);
      if (r) {
        let i = [];
        this.shouldComponentUpdate = (a) => {
          this.props.value !== a.value && i.forEach((l) => {
            l.context = a.value, l.forceUpdate();
          });
        }, this.sub = (a) => {
          i.push(a);
          let l = a.componentWillUnmount;
          a.componentWillUnmount = () => {
            i.splice(i.indexOf(a), 1), l && l.call(a);
          };
        };
      }
      return s;
    }, e;
  }
  class rD {
    constructor(e, n, r, s) {
      this.execFunc = e, this.emitter = n, this.scrollTime = r, this.scrollTimeReset = s, this.handleScrollRequest = (i) => {
        this.queuedRequest = Object.assign({}, this.queuedRequest || {}, i), this.drain();
      }, n.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll();
    }
    detach() {
      this.emitter.off("_scrollRequest", this.handleScrollRequest);
    }
    update(e) {
      e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
    }
    fireInitialScroll() {
      this.handleScrollRequest({
        time: this.scrollTime
      });
    }
    drain() {
      this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
    }
  }
  const nr = im({});
  function sD(t, e, n, r, s, i, a, l, c, d, f, m, g, y) {
    return {
      dateEnv: s,
      nowManager: i,
      options: n,
      pluginHooks: l,
      emitter: f,
      dispatch: c,
      getCurrentData: d,
      calendarApi: m,
      viewSpec: t,
      viewApi: e,
      dateProfileGenerator: r,
      theme: a,
      isRtl: n.direction === "rtl",
      addResizeHandler(v) {
        f.on("_resize", v);
      },
      removeResizeHandler(v) {
        f.off("_resize", v);
      },
      createScrollResponder(v) {
        return new rD(v, f, Pe(n.scrollTime), n.scrollTimeReset);
      },
      registerInteractiveComponent: g,
      unregisterInteractiveComponent: y
    };
  }
  class Kr extends Ut {
    shouldComponentUpdate(e, n) {
      return !yl(this.props, e, this.propEquality) || !yl(this.state, n, this.stateEquality);
    }
    safeSetState(e) {
      yl(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
    }
  }
  Kr.addPropsEquality = iD;
  Kr.addStateEquality = aD;
  Kr.contextType = nr;
  Kr.prototype.propEquality = {};
  Kr.prototype.stateEquality = {};
  class ze extends Kr {
  }
  ze.contextType = nr;
  function iD(t) {
    let e = Object.create(this.prototype.propEquality);
    Object.assign(e, t), this.prototype.propEquality = e;
  }
  function aD(t) {
    let e = Object.create(this.prototype.stateEquality);
    Object.assign(e, t), this.prototype.stateEquality = e;
  }
  function kn(t, e) {
    typeof t == "function" ? t(e) : t && (t.current = e);
  }
  class wc extends ze {
    constructor() {
      super(...arguments), this.id = Jr(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
        const { options: n } = this.context, { generatorName: r } = this.props;
        (!n.customRenderingReplaces || !Vl(r, n)) && this.updateElRef(e);
      }, this.updateElRef = (e) => {
        this.props.elRef && kn(this.props.elRef, e);
      };
    }
    render() {
      const { props: e, context: n } = this, { options: r } = n, { customGenerator: s, defaultGenerator: i, renderProps: a } = e, l = am(e, [], this.handleEl);
      let c = false, d, f = [], m;
      if (s != null) {
        const g = typeof s == "function" ? s(a, M) : s;
        if (g === true) c = true;
        else {
          const y = g && typeof g == "object";
          y && "html" in g ? l.dangerouslySetInnerHTML = {
            __html: g.html
          } : y && "domNodes" in g ? f = Array.prototype.slice.call(g.domNodes) : (y ? Ch(g) : typeof g != "function") ? d = g : m = g;
        }
      } else c = !Vl(e.generatorName, r);
      return c && i && (d = i(a)), this.queuedDomNodes = f, this.currentGeneratorMeta = m, M(e.elTag, l, d);
    }
    componentDidMount() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(true);
    }
    componentDidUpdate() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(true);
    }
    componentWillUnmount() {
      this.triggerCustomRendering(false);
    }
    triggerCustomRendering(e) {
      var n;
      const { props: r, context: s } = this, { handleCustomRendering: i, customRenderingMetaMap: a } = s.options;
      if (i) {
        const l = (n = this.currentGeneratorMeta) !== null && n !== void 0 ? n : a == null ? void 0 : a[r.generatorName];
        l && i(Object.assign(Object.assign({
          id: this.id,
          isActive: e,
          containerEl: this.base,
          reportNewContainerEl: this.updateElRef,
          generatorMeta: l
        }, r), {
          elClasses: (r.elClasses || []).filter(oD)
        }));
      }
    }
    applyQueueudDomNodes() {
      const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
      if (!Dr(e, n)) {
        n.forEach(pc);
        for (let s of e) r.appendChild(s);
        this.currentDomNodes = e;
      }
    }
  }
  wc.addPropsEquality({
    elClasses: Dr,
    elStyle: ln,
    elAttrs: G_,
    renderProps: ln
  });
  function Vl(t, e) {
    var n;
    return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
  }
  function am(t, e, n) {
    const r = Object.assign(Object.assign({}, t.elAttrs), {
      ref: n
    });
    return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")), t.elStyle && (r.style = t.elStyle), r;
  }
  function oD(t) {
    return !!t;
  }
  const om = im(0);
  class Pt extends Ut {
    constructor() {
      super(...arguments), this.InnerContent = lD.bind(void 0, this), this.handleEl = (e) => {
        this.el = e, this.props.elRef && (kn(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
      };
    }
    render() {
      const { props: e } = this, n = cD(e.classNameGenerator, e.renderProps);
      if (e.children) {
        const r = am(e, n, this.handleEl), s = e.children(this.InnerContent, e.renderProps, r);
        return e.elTag ? M(e.elTag, r, s) : s;
      } else return M(wc, Object.assign(Object.assign({}, e), {
        elRef: this.handleEl,
        elTag: e.elTag || "div",
        elClasses: (e.elClasses || []).concat(n),
        renderId: this.context
      }));
    }
    componentDidMount() {
      var e, n;
      this.el ? (n = (e = this.props).didMount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
        el: this.el
      })) : this.didMountMisfire = true;
    }
    componentWillUnmount() {
      var e, n;
      (n = (e = this.props).willUnmount) === null || n === void 0 || n.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
        el: this.el
      }));
    }
  }
  Pt.contextType = om;
  function lD(t, e) {
    const n = t.props;
    return M(wc, Object.assign({
      renderProps: n.renderProps,
      generatorName: n.generatorName,
      customGenerator: n.customGenerator,
      defaultGenerator: n.defaultGenerator,
      renderId: t.context
    }, e));
  }
  function cD(t, e) {
    const n = typeof t == "function" ? t(e) : t || [];
    return typeof n == "string" ? [
      n
    ] : n;
  }
  class Si extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, s = {
        view: n.viewApi
      };
      return M(Pt, {
        elRef: e.elRef,
        elTag: e.elTag || "div",
        elAttrs: e.elAttrs,
        elClasses: [
          ...lm(e.viewSpec),
          ...e.elClasses || []
        ],
        elStyle: e.elStyle,
        renderProps: s,
        classNameGenerator: r.viewClassNames,
        generatorName: void 0,
        didMount: r.viewDidMount,
        willUnmount: r.viewWillUnmount
      }, () => e.children);
    }
  }
  function lm(t) {
    return [
      `fc-${t.type}-view`,
      "fc-view"
    ];
  }
  function uD(t, e) {
    let n = null, r = null;
    return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : {
      start: n,
      end: r
    };
  }
  function af(t, e) {
    let n = [], { start: r } = e, s, i;
    for (t.sort(dD), s = 0; s < t.length; s += 1) i = t[s], i.start > r && n.push({
      start: r,
      end: i.start
    }), i.end > r && (r = i.end);
    return r < e.end && n.push({
      start: r,
      end: e.end
    }), n;
  }
  function dD(t, e) {
    return t.start.valueOf() - e.start.valueOf();
  }
  function Tr(t, e) {
    let { start: n, end: r } = t, s = null;
    return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (s = {
      start: n,
      end: r
    }), s;
  }
  function fD(t, e) {
    return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
  }
  function Sc(t, e) {
    return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
  }
  function yo(t, e) {
    return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
  }
  function Zn(t, e) {
    return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
  }
  function hD(t, e) {
    return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
  }
  function cm(t) {
    let e = Math.floor(Er(t.start, t.end)) || 1, n = Xe(t.start), r = ut(n, e);
    return {
      start: n,
      end: r
    };
  }
  function _c(t, e = Pe(0)) {
    let n = null, r = null;
    if (t.end) {
      r = Xe(t.end);
      let s = t.end.valueOf() - r.valueOf();
      s && s >= sn(e) && (r = ut(r, 1));
    }
    return t.start && (n = Xe(t.start), r && r <= n && (r = ut(n, 1))), {
      start: n,
      end: r
    };
  }
  function mD(t) {
    let e = _c(t);
    return Er(e.start, e.end) > 1;
  }
  function bs(t, e, n, r) {
    return r === "year" ? Pe(n.diffWholeYears(t, e), "year") : r === "month" ? Pe(n.diffWholeMonths(t, e), "month") : S_(t, e);
  }
  class um {
    constructor(e) {
      this.props = e, this.initHiddenDays();
    }
    buildPrev(e, n, r) {
      let { dateEnv: s } = this.props, i = s.subtract(s.startOf(n, e.currentRangeUnit), e.dateIncrement);
      return this.build(i, -1, r);
    }
    buildNext(e, n, r) {
      let { dateEnv: s } = this.props, i = s.add(s.startOf(n, e.currentRangeUnit), e.dateIncrement);
      return this.build(i, 1, r);
    }
    build(e, n, r = true) {
      let { props: s } = this, i, a, l, c, d, f;
      return i = this.buildValidRange(), i = this.trimHiddenDays(i), r && (e = hD(e, i)), a = this.buildCurrentRangeInfo(e, n), l = /^(year|month|week|day)$/.test(a.unit), c = this.buildRenderRange(this.trimHiddenDays(a.range), a.unit, l), c = this.trimHiddenDays(c), d = c, s.showNonCurrentDates || (d = Tr(d, a.range)), d = this.adjustActiveRange(d), d = Tr(d, i), f = Sc(a.range, i), Zn(c, e) || (e = c.start), {
        currentDate: e,
        validRange: i,
        currentRange: a.range,
        currentRangeUnit: a.unit,
        isRangeAllDay: l,
        activeRange: d,
        renderRange: c,
        slotMinTime: s.slotMinTime,
        slotMaxTime: s.slotMaxTime,
        isValid: f,
        dateIncrement: this.buildDateIncrement(a.duration)
      };
    }
    buildValidRange() {
      let e = this.props.validRangeInput, n = typeof e == "function" ? e.call(this.props.calendarApi, this.props.dateEnv.toDate(this.props.nowManager.getDateMarker())) : e;
      return this.refineRange(n) || {
        start: null,
        end: null
      };
    }
    buildCurrentRangeInfo(e, n) {
      let { props: r } = this, s = null, i = null, a = null, l;
      return r.duration ? (s = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, n, s, i)) : (l = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, n, l)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (s = this.getFallbackDuration(), i = jl(s).unit, a = this.buildRangeFromDuration(e, n, s, i)), {
        duration: s,
        unit: i,
        range: a
      };
    }
    getFallbackDuration() {
      return Pe({
        day: 1
      });
    }
    adjustActiveRange(e) {
      let { dateEnv: n, usesMinMaxTime: r, slotMinTime: s, slotMaxTime: i } = this.props, { start: a, end: l } = e;
      return r && (ks(s) < 0 && (a = Xe(a), a = n.add(a, s)), ks(i) > 1 && (l = Xe(l), l = ut(l, -1), l = n.add(l, i))), {
        start: a,
        end: l
      };
    }
    buildRangeFromDuration(e, n, r, s) {
      let { dateEnv: i, dateAlignment: a } = this.props, l, c, d;
      if (!a) {
        let { dateIncrement: m } = this.props;
        m && sn(m) < sn(r) ? a = jl(m).unit : a = s;
      }
      ks(r) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, n), l = Xe(l));
      function f() {
        l = i.startOf(e, a), c = i.add(l, r), d = {
          start: l,
          end: c
        };
      }
      return f(), this.trimHiddenDays(d) || (e = this.skipHiddenDays(e, n), f()), d;
    }
    buildRangeFromDayCount(e, n, r) {
      let { dateEnv: s, dateAlignment: i } = this.props, a = 0, l = e, c;
      i && (l = s.startOf(l, i)), l = Xe(l), l = this.skipHiddenDays(l, n), c = l;
      do
        c = ut(c, 1), this.isHiddenDay(c) || (a += 1);
      while (a < r);
      return {
        start: l,
        end: c
      };
    }
    buildCustomVisibleRange(e) {
      let { props: n } = this, r = n.visibleRangeInput, s = typeof r == "function" ? r.call(n.calendarApi, n.dateEnv.toDate(e)) : r, i = this.refineRange(s);
      return i && (i.start == null || i.end == null) ? null : i;
    }
    buildRenderRange(e, n, r) {
      return e;
    }
    buildDateIncrement(e) {
      let { dateIncrement: n } = this.props, r;
      return n || ((r = this.props.dateAlignment) ? Pe(1, r) : e || Pe({
        days: 1
      }));
    }
    refineRange(e) {
      if (e) {
        let n = uD(e, this.props.dateEnv);
        return n && (n = _c(n)), n;
      }
      return null;
    }
    initHiddenDays() {
      let e = this.props.hiddenDays || [], n = [], r = 0, s;
      for (this.props.weekends === false && e.push(0, 6), s = 0; s < 7; s += 1) (n[s] = e.indexOf(s) !== -1) || (r += 1);
      if (!r) throw new Error("invalid hiddenDays");
      this.isHiddenDayHash = n;
    }
    trimHiddenDays(e) {
      let { start: n, end: r } = e;
      return n && (n = this.skipHiddenDays(n)), r && (r = this.skipHiddenDays(r, -1, true)), n == null || r == null || n < r ? {
        start: n,
        end: r
      } : null;
    }
    isHiddenDay(e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }
    skipHiddenDays(e, n = 1, r = false) {
      for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; ) e = ut(e, n);
      return e;
    }
  }
  function vo(t, e, n, r) {
    return {
      instanceId: Jr(),
      defId: t,
      range: e,
      forcedStartTzo: n ?? null,
      forcedEndTzo: r ?? null
    };
  }
  function pD(t, e, n, r) {
    for (let s = 0; s < r.length; s += 1) {
      let i = r[s].parse(t, n);
      if (i) {
        let { allDay: a } = t;
        return a == null && (a = e, a == null && (a = i.allDayGuess, a == null && (a = false))), {
          allDay: a,
          duration: i.duration,
          typeData: i.typeData,
          typeId: s
        };
      }
    }
    return null;
  }
  function Zr(t, e, n) {
    let { dateEnv: r, pluginHooks: s, options: i } = n, { defs: a, instances: l } = t;
    l = Gr(l, (c) => !a[c.defId].recurringDef);
    for (let c in a) {
      let d = a[c];
      if (d.recurringDef) {
        let { duration: f } = d.recurringDef;
        f || (f = d.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
        let m = gD(d, f, e, r, s.recurringTypes);
        for (let g of m) {
          let y = vo(c, {
            start: g,
            end: r.add(g, f)
          });
          l[y.instanceId] = y;
        }
      }
    }
    return {
      defs: a,
      instances: l
    };
  }
  function gD(t, e, n, r, s) {
    let a = s[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
      start: r.subtract(n.start, e),
      end: n.end
    }, r);
    return t.allDay && (a = a.map(Xe)), a;
  }
  const Ta = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
  }, dm = {
    start: V,
    end: V,
    date: V,
    allDay: Boolean
  }, yD = Object.assign(Object.assign(Object.assign({}, Ta), dm), {
    extendedProps: V
  });
  function fm(t, e, n, r, s = kc(n), i, a) {
    let { refined: l, extra: c } = Dc(t, n, s), d = bD(e, n), f = pD(l, d, n.dateEnv, n.pluginHooks.recurringTypes);
    if (f) {
      let g = Ua(l, c, e ? e.sourceId : "", f.allDay, !!f.duration, n, i);
      return g.recurringDef = {
        typeId: f.typeId,
        typeData: f.typeData,
        duration: f.duration
      }, {
        def: g,
        instance: null
      };
    }
    let m = vD(l, d, n, r);
    if (m) {
      let g = Ua(l, c, e ? e.sourceId : "", m.allDay, m.hasEnd, n, i), y = vo(g.defId, m.range, m.forcedStartTzo, m.forcedEndTzo);
      return a && g.publicId && a[g.publicId] && (y.instanceId = a[g.publicId]), {
        def: g,
        instance: y
      };
    }
    return null;
  }
  function Dc(t, e, n = kc(e)) {
    return po(t, n);
  }
  function kc(t) {
    return Object.assign(Object.assign(Object.assign({}, Ba), yD), t.pluginHooks.eventRefiners);
  }
  function Ua(t, e, n, r, s, i, a) {
    let l = {
      title: t.title || "",
      groupId: t.groupId || "",
      publicId: t.id || "",
      url: t.url || "",
      recurringDef: null,
      defId: (a && t.id ? a[t.id] : "") || Jr(),
      sourceId: n,
      allDay: r,
      hasEnd: s,
      interactive: t.interactive,
      ui: za(t, i),
      extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
    };
    for (let c of i.pluginHooks.eventDefMemberAdders) Object.assign(l, c(t));
    return Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), l;
  }
  function vD(t, e, n, r) {
    let { allDay: s } = t, i, a = null, l = false, c, d = null, f = t.start != null ? t.start : t.date;
    if (i = n.dateEnv.createMarkerMeta(f), i) a = i.marker;
    else if (!r) return null;
    return t.end != null && (c = n.dateEnv.createMarkerMeta(t.end)), s == null && (e != null ? s = e : s = (!i || i.isTimeUnspecified) && (!c || c.isTimeUnspecified)), s && a && (a = Xe(a)), c && (d = c.marker, s && (d = Xe(d)), a && d <= a && (d = null)), d ? l = true : r || (l = n.options.forceEventDuration || false, d = n.dateEnv.add(a, s ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)), {
      allDay: s,
      hasEnd: l,
      range: {
        start: a,
        end: d
      },
      forcedStartTzo: i ? i.forcedTzo : null,
      forcedEndTzo: c ? c.forcedTzo : null
    };
  }
  function bD(t, e) {
    let n = null;
    return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
  }
  function _i(t, e, n, r, s, i) {
    let a = Ot(), l = kc(n);
    for (let c of t) {
      let d = fm(c, e, n, r, l, s, i);
      d && Di(d, a);
    }
    return a;
  }
  function Di(t, e = Ot()) {
    return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
  }
  function Tc(t, e) {
    let n = t.instances[e];
    if (n) {
      let r = t.defs[n.defId], s = bo(t, (i) => wD(r, i));
      return s.defs[r.defId] = r, s.instances[n.instanceId] = n, s;
    }
    return Ot();
  }
  function wD(t, e) {
    return !!(t.groupId && t.groupId === e.groupId);
  }
  function Ot() {
    return {
      defs: {},
      instances: {}
    };
  }
  function xc(t, e) {
    return {
      defs: Object.assign(Object.assign({}, t.defs), e.defs),
      instances: Object.assign(Object.assign({}, t.instances), e.instances)
    };
  }
  function bo(t, e) {
    let n = Gr(t.defs, e), r = Gr(t.instances, (s) => n[s.defId]);
    return {
      defs: n,
      instances: r
    };
  }
  function SD(t, e) {
    let { defs: n, instances: r } = t, s = {}, i = {};
    for (let a in n) e.defs[a] || (s[a] = n[a]);
    for (let a in r) !e.instances[a] && s[r[a].defId] && (i[a] = r[a]);
    return {
      defs: s,
      instances: i
    };
  }
  function _D(t, e) {
    return Array.isArray(t) ? _i(t, null, e, true) : typeof t == "object" && t ? _i([
      t
    ], null, e, true) : t != null ? String(t) : null;
  }
  function of(t) {
    return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
  }
  const Ba = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: V,
    overlap: V,
    allow: V,
    className: of,
    classNames: of,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  }, DD = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: "",
    borderColor: "",
    textColor: "",
    classNames: []
  };
  function za(t, e) {
    let n = _D(t.constraint, e);
    return {
      display: t.display || null,
      startEditable: t.startEditable != null ? t.startEditable : t.editable,
      durationEditable: t.durationEditable != null ? t.durationEditable : t.editable,
      constraints: n != null ? [
        n
      ] : [],
      overlap: t.overlap != null ? t.overlap : null,
      allows: t.allow != null ? [
        t.allow
      ] : [],
      backgroundColor: t.backgroundColor || t.color || "",
      borderColor: t.borderColor || t.color || "",
      textColor: t.textColor || "",
      classNames: (t.className || []).concat(t.classNames || [])
    };
  }
  function hm(t) {
    return t.reduce(kD, DD);
  }
  function kD(t, e) {
    return {
      display: e.display != null ? e.display : t.display,
      startEditable: e.startEditable != null ? e.startEditable : t.startEditable,
      durationEditable: e.durationEditable != null ? e.durationEditable : t.durationEditable,
      constraints: t.constraints.concat(e.constraints),
      overlap: typeof e.overlap == "boolean" ? e.overlap : t.overlap,
      allows: t.allows.concat(e.allows),
      backgroundColor: e.backgroundColor || t.backgroundColor,
      borderColor: e.borderColor || t.borderColor,
      textColor: e.textColor || t.textColor,
      classNames: t.classNames.concat(e.classNames)
    };
  }
  const TD = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: V,
    eventDataTransform: V,
    success: V,
    failure: V
  };
  function mm(t, e, n = pm(e)) {
    let r;
    if (typeof t == "string" ? r = {
      url: t
    } : typeof t == "function" || Array.isArray(t) ? r = {
      events: t
    } : typeof t == "object" && t && (r = t), r) {
      let { refined: s, extra: i } = po(r, n), a = xD(s, e);
      if (a) return {
        _raw: t,
        isFetching: false,
        latestFetchId: "",
        fetchRange: null,
        defaultAllDay: s.defaultAllDay,
        eventDataTransform: s.eventDataTransform,
        success: s.success,
        failure: s.failure,
        publicId: s.id || "",
        sourceId: Jr(),
        sourceDefId: a.sourceDefId,
        meta: a.meta,
        ui: za(s, e),
        extendedProps: i
      };
    }
    return null;
  }
  function pm(t) {
    return Object.assign(Object.assign(Object.assign({}, Ba), TD), t.pluginHooks.eventSourceRefiners);
  }
  function xD(t, e) {
    let n = e.pluginHooks.eventSourceDefs;
    for (let r = n.length - 1; r >= 0; r -= 1) {
      let i = n[r].parseMeta(t);
      if (i) return {
        sourceDefId: r,
        meta: i
      };
    }
    return null;
  }
  function MD(t, e, n, r, s) {
    switch (e.type) {
      case "RECEIVE_EVENTS":
        return ED(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, s);
      case "RESET_RAW_EVENTS":
        return CD(t, n[e.sourceId], e.rawEvents, r.activeRange, s);
      case "ADD_EVENTS":
        return AD(t, e.eventStore, r ? r.activeRange : null, s);
      case "RESET_EVENTS":
        return e.eventStore;
      case "MERGE_EVENTS":
        return xc(t, e.eventStore);
      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return r ? Zr(t, r.activeRange, s) : t;
      case "REMOVE_EVENTS":
        return SD(t, e.eventStore);
      case "REMOVE_EVENT_SOURCE":
        return ym(t, e.sourceId);
      case "REMOVE_ALL_EVENT_SOURCES":
        return bo(t, (i) => !i.sourceId);
      case "REMOVE_ALL_EVENTS":
        return Ot();
      default:
        return t;
    }
  }
  function ED(t, e, n, r, s, i) {
    if (e && n === e.latestFetchId) {
      let a = _i(gm(s, e, i), e, i);
      return r && (a = Zr(a, r, i)), xc(ym(t, e.sourceId), a);
    }
    return t;
  }
  function CD(t, e, n, r, s) {
    const { defIdMap: i, instanceIdMap: a } = OD(t);
    let l = _i(gm(n, e, s), e, s, false, i, a);
    return Zr(l, r, s);
  }
  function gm(t, e, n) {
    let r = n.options.eventDataTransform, s = e ? e.eventDataTransform : null;
    return s && (t = lf(t, s)), r && (t = lf(t, r)), t;
  }
  function lf(t, e) {
    let n;
    if (!e) n = t;
    else {
      n = [];
      for (let r of t) {
        let s = e(r);
        s ? n.push(s) : s == null && n.push(r);
      }
    }
    return n;
  }
  function AD(t, e, n, r) {
    return n && (e = Zr(e, n, r)), xc(t, e);
  }
  function cf(t, e, n) {
    let { defs: r } = t, s = er(t.instances, (i) => r[i.defId].allDay ? i : Object.assign(Object.assign({}, i), {
      range: {
        start: n.createMarker(e.toDate(i.range.start, i.forcedStartTzo)),
        end: n.createMarker(e.toDate(i.range.end, i.forcedEndTzo))
      },
      forcedStartTzo: n.canComputeOffset ? null : i.forcedStartTzo,
      forcedEndTzo: n.canComputeOffset ? null : i.forcedEndTzo
    }));
    return {
      defs: r,
      instances: s
    };
  }
  function ym(t, e) {
    return bo(t, (n) => n.sourceId !== e);
  }
  function RD(t, e) {
    return {
      defs: t.defs,
      instances: Gr(t.instances, (n) => !e[n.instanceId])
    };
  }
  function OD(t) {
    const { defs: e, instances: n } = t, r = {}, s = {};
    for (let i in e) {
      const a = e[i], { publicId: l } = a;
      l && (r[l] = i);
    }
    for (let i in n) {
      const a = n[i], l = e[a.defId], { publicId: c } = l;
      c && (s[c] = i);
    }
    return {
      defIdMap: r,
      instanceIdMap: s
    };
  }
  class wo {
    constructor() {
      this.handlers = {}, this.thisContext = null;
    }
    setThisContext(e) {
      this.thisContext = e;
    }
    setOptions(e) {
      this.options = e;
    }
    on(e, n) {
      ID(this.handlers, e, n);
    }
    off(e, n) {
      PD(this.handlers, e, n);
    }
    trigger(e, ...n) {
      let r = this.handlers[e] || [], s = this.options && this.options[e], i = [].concat(s || [], r);
      for (let a of i) a.apply(this.thisContext, n);
    }
    hasHandlers(e) {
      return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
    }
  }
  function ID(t, e, n) {
    (t[e] || (t[e] = [])).push(n);
  }
  function PD(t, e, n) {
    n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
  }
  const ND = {
    startTime: "09:00",
    endTime: "17:00",
    daysOfWeek: [
      1,
      2,
      3,
      4,
      5
    ],
    display: "inverse-background",
    classNames: "fc-non-business",
    groupId: "_businessHours"
  };
  function LD(t, e) {
    return _i(YD(t), null, e);
  }
  function YD(t) {
    let e;
    return t === true ? e = [
      {}
    ] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [
      t
    ] : e = [], e = e.map((n) => Object.assign(Object.assign({}, ND), n)), e;
  }
  function vm(t, e, n) {
    n.emitter.trigger("select", Object.assign(Object.assign({}, Mc(t, n)), {
      jsEvent: e ? e.origEvent : null,
      view: n.viewApi || n.calendarApi.view
    }));
  }
  function FD(t, e) {
    e.emitter.trigger("unselect", {
      jsEvent: t ? t.origEvent : null,
      view: e.viewApi || e.calendarApi.view
    });
  }
  function Mc(t, e) {
    let n = {};
    for (let r of e.pluginHooks.dateSpanTransforms) Object.assign(n, r(t, e));
    return Object.assign(n, JD(t, e.dateEnv)), n;
  }
  function Wl(t, e, n) {
    let { dateEnv: r, options: s } = n, i = e;
    return t ? (i = Xe(i), i = r.add(i, s.defaultAllDayEventDuration)) : i = r.add(i, s.defaultTimedEventDuration), i;
  }
  function Ec(t, e, n, r) {
    let s = $a(t.defs, e), i = Ot();
    for (let a in t.defs) {
      let l = t.defs[a];
      i.defs[a] = HD(l, s[a], n, r);
    }
    for (let a in t.instances) {
      let l = t.instances[a], c = i.defs[l.defId];
      i.instances[a] = jD(l, c, s[l.defId], n, r);
    }
    return i;
  }
  function HD(t, e, n, r) {
    let s = n.standardProps || {};
    s.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (s.hasEnd = true);
    let i = Object.assign(Object.assign(Object.assign({}, t), s), {
      ui: Object.assign(Object.assign({}, t.ui), s.ui)
    });
    n.extendedProps && (i.extendedProps = Object.assign(Object.assign({}, i.extendedProps), n.extendedProps));
    for (let a of r.pluginHooks.eventDefMutationAppliers) a(i, n, r);
    return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = true), i;
  }
  function jD(t, e, n, r, s) {
    let { dateEnv: i } = s, a = r.standardProps && r.standardProps.allDay === true, l = r.standardProps && r.standardProps.hasEnd === false, c = Object.assign({}, t);
    return a && (c.range = cm(c.range)), r.datesDelta && n.startEditable && (c.range = {
      start: i.add(c.range.start, r.datesDelta),
      end: i.add(c.range.end, r.datesDelta)
    }), r.startDelta && n.durationEditable && (c.range = {
      start: i.add(c.range.start, r.startDelta),
      end: c.range.end
    }), r.endDelta && n.durationEditable && (c.range = {
      start: c.range.start,
      end: i.add(c.range.end, r.endDelta)
    }), l && (c.range = {
      start: c.range.start,
      end: Wl(e.allDay, c.range.start, s)
    }), e.allDay && (c.range = {
      start: Xe(c.range.start),
      end: Xe(c.range.end)
    }), c.range.end < c.range.start && (c.range.end = Wl(e.allDay, c.range.start, s)), c;
  }
  class gs {
    constructor(e, n) {
      this.context = e, this.internalEventSource = n;
    }
    remove() {
      this.context.dispatch({
        type: "REMOVE_EVENT_SOURCE",
        sourceId: this.internalEventSource.sourceId
      });
    }
    refetch() {
      this.context.dispatch({
        type: "FETCH_EVENT_SOURCES",
        sourceIds: [
          this.internalEventSource.sourceId
        ],
        isRefetch: true
      });
    }
    get id() {
      return this.internalEventSource.publicId;
    }
    get url() {
      return this.internalEventSource.meta.url;
    }
    get format() {
      return this.internalEventSource.meta.format;
    }
  }
  class rt {
    constructor(e, n, r) {
      this._context = e, this._def = n, this._instance = r || null;
    }
    setProp(e, n) {
      if (e in dm) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
      else if (e === "id") n = Ta[e](n), this.mutate({
        standardProps: {
          publicId: n
        }
      });
      else if (e in Ta) n = Ta[e](n), this.mutate({
        standardProps: {
          [e]: n
        }
      });
      else if (e in Ba) {
        let r = Ba[e](n);
        e === "color" ? r = {
          backgroundColor: n,
          borderColor: n
        } : e === "editable" ? r = {
          startEditable: n,
          durationEditable: n
        } : r = {
          [e]: n
        }, this.mutate({
          standardProps: {
            ui: r
          }
        });
      } else console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
    }
    setExtendedProp(e, n) {
      this.mutate({
        extendedProps: {
          [e]: n
        }
      });
    }
    setStart(e, n = {}) {
      let { dateEnv: r } = this._context, s = r.createMarker(e);
      if (s && this._instance) {
        let i = this._instance.range, a = bs(i.start, s, r, n.granularity);
        n.maintainDuration ? this.mutate({
          datesDelta: a
        }) : this.mutate({
          startDelta: a
        });
      }
    }
    setEnd(e, n = {}) {
      let { dateEnv: r } = this._context, s;
      if (!(e != null && (s = r.createMarker(e), !s)) && this._instance) if (s) {
        let i = bs(this._instance.range.end, s, r, n.granularity);
        this.mutate({
          endDelta: i
        });
      } else this.mutate({
        standardProps: {
          hasEnd: false
        }
      });
    }
    setDates(e, n, r = {}) {
      let { dateEnv: s } = this._context, i = {
        allDay: r.allDay
      }, a = s.createMarker(e), l;
      if (a && !(n != null && (l = s.createMarker(n), !l)) && this._instance) {
        let c = this._instance.range;
        r.allDay === true && (c = cm(c));
        let d = bs(c.start, a, s, r.granularity);
        if (l) {
          let f = bs(c.end, l, s, r.granularity);
          d_(d, f) ? this.mutate({
            datesDelta: d,
            standardProps: i
          }) : this.mutate({
            startDelta: d,
            endDelta: f,
            standardProps: i
          });
        } else i.hasEnd = false, this.mutate({
          datesDelta: d,
          standardProps: i
        });
      }
    }
    moveStart(e) {
      let n = Pe(e);
      n && this.mutate({
        startDelta: n
      });
    }
    moveEnd(e) {
      let n = Pe(e);
      n && this.mutate({
        endDelta: n
      });
    }
    moveDates(e) {
      let n = Pe(e);
      n && this.mutate({
        datesDelta: n
      });
    }
    setAllDay(e, n = {}) {
      let r = {
        allDay: e
      }, { maintainDuration: s } = n;
      s == null && (s = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (r.hasEnd = s), this.mutate({
        standardProps: r
      });
    }
    formatRange(e) {
      let { dateEnv: n } = this._context, r = this._instance, s = nt(e);
      return this._def.hasEnd ? n.formatRange(r.range.start, r.range.end, s, {
        forcedStartTzo: r.forcedStartTzo,
        forcedEndTzo: r.forcedEndTzo
      }) : n.format(r.range.start, s, {
        forcedTzo: r.forcedStartTzo
      });
    }
    mutate(e) {
      let n = this._instance;
      if (n) {
        let r = this._def, s = this._context, { eventStore: i } = s.getCurrentData(), a = Tc(i, n.instanceId);
        a = Ec(a, {
          "": {
            display: "",
            startEditable: true,
            durationEditable: true,
            constraints: [],
            overlap: null,
            allows: [],
            backgroundColor: "",
            borderColor: "",
            textColor: "",
            classNames: []
          }
        }, e, s);
        let c = new rt(s, r, n);
        this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], s.dispatch({
          type: "MERGE_EVENTS",
          eventStore: a
        }), s.emitter.trigger("eventChange", {
          oldEvent: c,
          event: this,
          relatedEvents: Br(a, s, n),
          revert() {
            s.dispatch({
              type: "RESET_EVENTS",
              eventStore: i
            });
          }
        });
      }
    }
    remove() {
      let e = this._context, n = bm(this);
      e.dispatch({
        type: "REMOVE_EVENTS",
        eventStore: n
      }), e.emitter.trigger("eventRemove", {
        event: this,
        relatedEvents: [],
        revert() {
          e.dispatch({
            type: "MERGE_EVENTS",
            eventStore: n
          });
        }
      });
    }
    get source() {
      let { sourceId: e } = this._def;
      return e ? new gs(this._context, this._context.getCurrentData().eventSources[e]) : null;
    }
    get start() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    }
    get end() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    }
    get startStr() {
      let e = this._instance;
      return e ? this._context.dateEnv.formatIso(e.range.start, {
        omitTime: this._def.allDay,
        forcedTzo: e.forcedStartTzo
      }) : "";
    }
    get endStr() {
      let e = this._instance;
      return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
        omitTime: this._def.allDay,
        forcedTzo: e.forcedEndTzo
      }) : "";
    }
    get id() {
      return this._def.publicId;
    }
    get groupId() {
      return this._def.groupId;
    }
    get allDay() {
      return this._def.allDay;
    }
    get title() {
      return this._def.title;
    }
    get url() {
      return this._def.url;
    }
    get display() {
      return this._def.ui.display || "auto";
    }
    get startEditable() {
      return this._def.ui.startEditable;
    }
    get durationEditable() {
      return this._def.ui.durationEditable;
    }
    get constraint() {
      return this._def.ui.constraints[0] || null;
    }
    get overlap() {
      return this._def.ui.overlap;
    }
    get allow() {
      return this._def.ui.allows[0] || null;
    }
    get backgroundColor() {
      return this._def.ui.backgroundColor;
    }
    get borderColor() {
      return this._def.ui.borderColor;
    }
    get textColor() {
      return this._def.ui.textColor;
    }
    get classNames() {
      return this._def.ui.classNames;
    }
    get extendedProps() {
      return this._def.extendedProps;
    }
    toPlainObject(e = {}) {
      let n = this._def, { ui: r } = n, { startStr: s, endStr: i } = this, a = {
        allDay: n.allDay
      };
      return n.title && (a.title = n.title), s && (a.start = s), i && (a.end = i), n.publicId && (a.id = n.publicId), n.groupId && (a.groupId = n.groupId), n.url && (a.url = n.url), r.display && r.display !== "auto" && (a.display = r.display), e.collapseColor && r.backgroundColor && r.backgroundColor === r.borderColor ? a.color = r.backgroundColor : (r.backgroundColor && (a.backgroundColor = r.backgroundColor), r.borderColor && (a.borderColor = r.borderColor)), r.textColor && (a.textColor = r.textColor), r.classNames.length && (a.classNames = r.classNames), Object.keys(n.extendedProps).length && (e.collapseExtendedProps ? Object.assign(a, n.extendedProps) : a.extendedProps = n.extendedProps), a;
    }
    toJSON() {
      return this.toPlainObject();
    }
  }
  function bm(t) {
    let e = t._def, n = t._instance;
    return {
      defs: {
        [e.defId]: e
      },
      instances: n ? {
        [n.instanceId]: n
      } : {}
    };
  }
  function Br(t, e, n) {
    let { defs: r, instances: s } = t, i = [], a = n ? n.instanceId : "";
    for (let l in s) {
      let c = s[l], d = r[c.defId];
      c.instanceId !== a && i.push(new rt(e, d, c));
    }
    return i;
  }
  function Ul(t, e, n, r) {
    let s = {}, i = {}, a = {}, l = [], c = [], d = $a(t.defs, e);
    for (let f in t.defs) {
      let m = t.defs[f];
      d[m.defId].display === "inverse-background" && (m.groupId ? (s[m.groupId] = [], a[m.groupId] || (a[m.groupId] = m)) : i[f] = []);
    }
    for (let f in t.instances) {
      let m = t.instances[f], g = t.defs[m.defId], y = d[g.defId], v = m.range, S = !g.allDay && r ? _c(v, r) : v, b = Tr(S, n);
      b && (y.display === "inverse-background" ? g.groupId ? s[g.groupId].push(b) : i[m.defId].push(b) : y.display !== "none" && (y.display === "background" ? l : c).push({
        def: g,
        ui: y,
        instance: m,
        range: b,
        isStart: S.start && S.start.valueOf() === b.start.valueOf(),
        isEnd: S.end && S.end.valueOf() === b.end.valueOf()
      }));
    }
    for (let f in s) {
      let m = s[f], g = af(m, n);
      for (let y of g) {
        let v = a[f], S = d[v.defId];
        l.push({
          def: v,
          ui: S,
          instance: null,
          range: y,
          isStart: false,
          isEnd: false
        });
      }
    }
    for (let f in i) {
      let m = i[f], g = af(m, n);
      for (let y of g) l.push({
        def: t.defs[f],
        ui: d[f],
        instance: null,
        range: y,
        isStart: false,
        isEnd: false
      });
    }
    return {
      bg: l,
      fg: c
    };
  }
  function VD(t) {
    return t.ui.display === "background" || t.ui.display === "inverse-background";
  }
  function uf(t, e) {
    t.fcSeg = e;
  }
  function Is(t) {
    return t.fcSeg || t.parentNode.fcSeg || null;
  }
  function $a(t, e) {
    return er(t, (n) => wm(n, e));
  }
  function wm(t, e) {
    let n = [];
    return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), hm(n);
  }
  function Cc(t, e) {
    let n = t.map(WD);
    return n.sort((r, s) => s_(r, s, e)), n.map((r) => r._seg);
  }
  function WD(t) {
    let { eventRange: e } = t, n = e.def, r = e.instance ? e.instance.range : e.range, s = r.start ? r.start.valueOf() : 0, i = r.end ? r.end.valueOf() : 0;
    return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
      id: n.publicId,
      start: s,
      end: i,
      duration: i - s,
      allDay: Number(n.allDay),
      _seg: t
    });
  }
  function UD(t, e) {
    let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: s, ui: i } = t.eventRange, a = i.startEditable;
    for (let l of r) a = l(a, s, i, e);
    return a;
  }
  function BD(t, e) {
    return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
  }
  function zD(t, e) {
    return t.isEnd && t.eventRange.ui.durationEditable;
  }
  function hi(t, e, n, r, s, i, a) {
    let { dateEnv: l, options: c } = n, { displayEventTime: d, displayEventEnd: f } = c, m = t.eventRange.def, g = t.eventRange.instance;
    d == null && (d = r !== false), f == null && (f = s !== false);
    let y = g.range.start, v = g.range.end, S = i || t.start || t.eventRange.range.start, b = a || t.end || t.eventRange.range.end, _ = Xe(y).valueOf() === Xe(S).valueOf(), E = Xe(kr(v, -1)).valueOf() === Xe(kr(b, -1)).valueOf();
    return d && !m.allDay && (_ || E) ? (S = _ ? y : S, b = E ? v : b, f && m.hasEnd ? l.formatRange(S, b, e, {
      forcedStartTzo: i ? null : g.forcedStartTzo,
      forcedEndTzo: a ? null : g.forcedEndTzo
    }) : l.format(S, e, {
      forcedTzo: i ? null : g.forcedStartTzo
    })) : "";
  }
  function qn(t, e, n) {
    let r = t.eventRange.range;
    return {
      isPast: r.end <= (n || e.start),
      isFuture: r.start >= (n || e.end),
      isToday: e && Zn(e, r.start)
    };
  }
  function $D(t) {
    let e = [
      "fc-event"
    ];
    return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
  }
  function Sm(t) {
    return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
  }
  function Ac(t, e) {
    let { def: n, instance: r } = t.eventRange, { url: s } = n;
    if (s) return {
      href: s
    };
    let { emitter: i, options: a } = e, { eventInteractive: l } = a;
    return l == null && (l = n.interactive, l == null && (l = !!i.hasHandlers("eventClick"))), l ? em((c) => {
      i.trigger("eventClick", {
        el: c.target,
        event: new rt(e, n, r),
        jsEvent: c,
        view: e.viewApi
      });
    }) : {};
  }
  const GD = {
    start: V,
    end: V,
    allDay: Boolean
  };
  function ZD(t, e, n) {
    let r = qD(t, e), { range: s } = r;
    if (!s.start) return null;
    if (!s.end) {
      if (n == null) return null;
      s.end = e.add(s.start, n);
    }
    return r;
  }
  function qD(t, e) {
    let { refined: n, extra: r } = po(t, GD), s = n.start ? e.createMarkerMeta(n.start) : null, i = n.end ? e.createMarkerMeta(n.end) : null, { allDay: a } = n;
    return a == null && (a = s && s.isTimeUnspecified && (!i || i.isTimeUnspecified)), Object.assign({
      range: {
        start: s ? s.marker : null,
        end: i ? i.marker : null
      },
      allDay: a
    }, r);
  }
  function QD(t, e) {
    return fD(t.range, e.range) && t.allDay === e.allDay && XD(t, e);
  }
  function XD(t, e) {
    for (let n in e) if (n !== "range" && n !== "allDay" && t[n] !== e[n]) return false;
    for (let n in t) if (!(n in e)) return false;
    return true;
  }
  function JD(t, e) {
    return Object.assign(Object.assign({}, Dm(t.range, e, t.allDay)), {
      allDay: t.allDay
    });
  }
  function _m(t, e, n) {
    return Object.assign(Object.assign({}, Dm(t, e, n)), {
      timeZone: e.timeZone
    });
  }
  function Dm(t, e, n) {
    return {
      start: e.toDate(t.start),
      end: e.toDate(t.end),
      startStr: e.formatIso(t.start, {
        omitTime: n
      }),
      endStr: e.formatIso(t.end, {
        omitTime: n
      })
    };
  }
  function KD(t, e, n) {
    let r = Dc({
      editable: false
    }, n), s = Ua(r.refined, r.extra, "", t.allDay, true, n);
    return {
      def: s,
      ui: wm(s, e),
      instance: vo(s.defId, t.range),
      range: t.range,
      isStart: true,
      isEnd: true
    };
  }
  function e0(t, e, n) {
    let r = false, s = function(l) {
      r || (r = true, e(l));
    }, i = function(l) {
      r || (r = true, n(l));
    }, a = t(s, i);
    a && typeof a.then == "function" && a.then(s, i);
  }
  class df extends Error {
    constructor(e, n) {
      super(e), this.response = n;
    }
  }
  function t0(t, e, n) {
    t = t.toUpperCase();
    const r = {
      method: t
    };
    return t === "GET" ? e += (e.indexOf("?") === -1 ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }), fetch(e, r).then((s) => {
      if (s.ok) return s.json().then((i) => [
        i,
        s
      ], () => {
        throw new df("Failure parsing JSON", s);
      });
      throw new df("Request failed", s);
    });
  }
  let vl;
  function km() {
    return vl == null && (vl = n0()), vl;
  }
  function n0() {
    if (typeof document > "u") return true;
    let t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
    let n = t.querySelector("div").offsetHeight > 0;
    return document.body.removeChild(t), n;
  }
  class r0 extends ze {
    constructor() {
      super(...arguments), this.state = {
        forPrint: false
      }, this.handleBeforePrint = () => {
        Wa(() => {
          this.setState({
            forPrint: true
          });
        });
      }, this.handleAfterPrint = () => {
        Wa(() => {
          this.setState({
            forPrint: false
          });
        });
      };
    }
    render() {
      let { props: e } = this, { options: n } = e, { forPrint: r } = this.state, s = r || n.height === "auto" || n.contentHeight === "auto", i = !s && n.height != null ? n.height : "", a = [
        "fc",
        r ? "fc-media-print" : "fc-media-screen",
        `fc-direction-${n.direction}`,
        e.theme.getClass("root")
      ];
      return km() || a.push("fc-liquid-hack"), e.children(a, i, s, r);
    }
    componentDidMount() {
      let { emitter: e } = this.props;
      e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint);
    }
    componentWillUnmount() {
      let { emitter: e } = this.props;
      e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint);
    }
  }
  class Fs {
    constructor(e) {
      this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
    }
    destroy() {
    }
  }
  function s0(t, e) {
    return {
      component: t,
      el: e.el,
      useEventCenter: e.useEventCenter != null ? e.useEventCenter : true,
      isHitComboAllowed: e.isHitComboAllowed || null
    };
  }
  function Rc(t) {
    return {
      [t.component.uid]: t
    };
  }
  const Ga = {};
  class es extends Ut {
    constructor(e, n) {
      super(e, n), this.handleRefresh = () => {
        let r = this.computeTiming();
        r.state.nowDate.valueOf() !== this.state.nowDate.valueOf() && this.setState(r.state), this.clearTimeout(), this.setTimeout(r.waitMs);
      }, this.handleVisibilityChange = () => {
        document.hidden || this.handleRefresh();
      }, this.state = this.computeTiming().state;
    }
    render() {
      let { props: e, state: n } = this;
      return e.children(n.nowDate, n.todayRange);
    }
    componentDidMount() {
      this.setTimeout(), this.context.nowManager.addResetListener(this.handleRefresh), document.addEventListener("visibilitychange", this.handleVisibilityChange);
    }
    componentDidUpdate(e) {
      e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }
    componentWillUnmount() {
      this.clearTimeout(), this.context.nowManager.removeResetListener(this.handleRefresh), document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    }
    computeTiming() {
      let { props: e, context: n } = this, r = n.nowManager.getDateMarker(), { nowIndicatorSnap: s } = n.options;
      s === "auto" && (s = /year|month|week|day/.test(e.unit) || (e.unitValue || 1) === 1);
      let i, a;
      return s ? (i = n.dateEnv.startOf(r, e.unit), a = n.dateEnv.add(i, Pe(1, e.unit)).valueOf() - r.valueOf()) : (i = r, a = 1e3 * 60), a = Math.min(1e3 * 60 * 60 * 24, a), {
        state: {
          nowDate: i,
          todayRange: i0(i)
        },
        waitMs: a
      };
    }
    setTimeout(e = this.computeTiming().waitMs) {
      this.timeoutId = setTimeout(() => {
        const n = this.computeTiming();
        this.setState(n.state, () => {
          this.setTimeout(n.waitMs);
        });
      }, e);
    }
    clearTimeout() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }
  }
  es.contextType = nr;
  function i0(t) {
    let e = Xe(t), n = ut(e, 1);
    return {
      start: e,
      end: n
    };
  }
  class a0 {
    getCurrentData() {
      return this.currentDataManager.getCurrentData();
    }
    dispatch(e) {
      this.currentDataManager.dispatch(e);
    }
    get view() {
      return this.getCurrentData().viewApi;
    }
    batchRendering(e) {
      e();
    }
    updateSize() {
      this.trigger("_resize", true);
    }
    setOption(e, n) {
      this.dispatch({
        type: "SET_OPTION",
        optionName: e,
        rawOptionValue: n
      });
    }
    getOption(e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }
    getAvailableLocaleCodes() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }
    on(e, n) {
      let { currentDataManager: r } = this;
      r.currentCalendarOptionsRefiners[e] ? r.emitter.on(e, n) : console.warn(`Unknown listener name '${e}'`);
    }
    off(e, n) {
      this.currentDataManager.emitter.off(e, n);
    }
    trigger(e, ...n) {
      this.currentDataManager.emitter.trigger(e, ...n);
    }
    changeView(e, n) {
      this.batchRendering(() => {
        if (this.unselect(), n) if (n.start && n.end) this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        }), this.dispatch({
          type: "SET_OPTION",
          optionName: "visibleRange",
          rawOptionValue: n
        });
        else {
          let { dateEnv: r } = this.getCurrentData();
          this.dispatch({
            type: "CHANGE_VIEW_TYPE",
            viewType: e,
            dateMarker: r.createMarker(n)
          });
        }
        else this.dispatch({
          type: "CHANGE_VIEW_TYPE",
          viewType: e
        });
      });
    }
    zoomTo(e, n) {
      let r = this.getCurrentData(), s;
      n = n || "day", s = r.viewSpecs[n] || this.getUnitViewSpec(n), this.unselect(), s ? this.dispatch({
        type: "CHANGE_VIEW_TYPE",
        viewType: s.type,
        dateMarker: e
      }) : this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e
      });
    }
    getUnitViewSpec(e) {
      let { viewSpecs: n, toolbarConfig: r } = this.getCurrentData(), s = [].concat(r.header ? r.header.viewsWithButtons : [], r.footer ? r.footer.viewsWithButtons : []), i, a;
      for (let l in n) s.push(l);
      for (i = 0; i < s.length; i += 1) if (a = n[s[i]], a && a.singleUnit === e) return a;
      return null;
    }
    prev() {
      this.unselect(), this.dispatch({
        type: "PREV"
      });
    }
    next() {
      this.unselect(), this.dispatch({
        type: "NEXT"
      });
    }
    prevYear() {
      let e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, -1)
      });
    }
    nextYear() {
      let e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.dateEnv.addYears(e.currentDate, 1)
      });
    }
    today() {
      let e = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: e.nowManager.getDateMarker()
      });
    }
    gotoDate(e) {
      let n = this.getCurrentData();
      this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: n.dateEnv.createMarker(e)
      });
    }
    incrementDate(e) {
      let n = this.getCurrentData(), r = Pe(e);
      r && (this.unselect(), this.dispatch({
        type: "CHANGE_DATE",
        dateMarker: n.dateEnv.add(n.currentDate, r)
      }));
    }
    getDate() {
      let e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }
    formatDate(e, n) {
      let { dateEnv: r } = this.getCurrentData();
      return r.format(r.createMarker(e), nt(n));
    }
    formatRange(e, n, r) {
      let { dateEnv: s } = this.getCurrentData();
      return s.formatRange(s.createMarker(e), s.createMarker(n), nt(r), r);
    }
    formatIso(e, n) {
      let { dateEnv: r } = this.getCurrentData();
      return r.formatIso(r.createMarker(e), {
        omitTime: n
      });
    }
    select(e, n) {
      let r;
      n == null ? e.start != null ? r = e : r = {
        start: e,
        end: null
      } : r = {
        start: e,
        end: n
      };
      let s = this.getCurrentData(), i = ZD(r, s.dateEnv, Pe({
        days: 1
      }));
      i && (this.dispatch({
        type: "SELECT_DATES",
        selection: i
      }), vm(i, null, s));
    }
    unselect(e) {
      let n = this.getCurrentData();
      n.dateSelection && (this.dispatch({
        type: "UNSELECT_DATES"
      }), FD(e, n));
    }
    addEvent(e, n) {
      if (e instanceof rt) {
        let a = e._def, l = e._instance;
        return this.getCurrentData().eventStore.defs[a.defId] || (this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Di({
            def: a,
            instance: l
          })
        }), this.triggerEventAdd(e)), e;
      }
      let r = this.getCurrentData(), s;
      if (n instanceof gs) s = n.internalEventSource;
      else if (typeof n == "boolean") n && ([s] = bc(r.eventSources));
      else if (n != null) {
        let a = this.getEventSourceById(n);
        if (!a) return console.warn(`Could not find an event source with ID "${n}"`), null;
        s = a.internalEventSource;
      }
      let i = fm(e, s, r, false);
      if (i) {
        let a = new rt(r, i.def, i.def.recurringDef ? null : i.instance);
        return this.dispatch({
          type: "ADD_EVENTS",
          eventStore: Di(i)
        }), this.triggerEventAdd(a), a;
      }
      return null;
    }
    triggerEventAdd(e) {
      let { emitter: n } = this.getCurrentData();
      n.trigger("eventAdd", {
        event: e,
        relatedEvents: [],
        revert: () => {
          this.dispatch({
            type: "REMOVE_EVENTS",
            eventStore: bm(e)
          });
        }
      });
    }
    getEventById(e) {
      let n = this.getCurrentData(), { defs: r, instances: s } = n.eventStore;
      e = String(e);
      for (let i in r) {
        let a = r[i];
        if (a.publicId === e) {
          if (a.recurringDef) return new rt(n, a, null);
          for (let l in s) {
            let c = s[l];
            if (c.defId === a.defId) return new rt(n, a, c);
          }
        }
      }
      return null;
    }
    getEvents() {
      let e = this.getCurrentData();
      return Br(e.eventStore, e);
    }
    removeAllEvents() {
      this.dispatch({
        type: "REMOVE_ALL_EVENTS"
      });
    }
    getEventSources() {
      let e = this.getCurrentData(), n = e.eventSources, r = [];
      for (let s in n) r.push(new gs(e, n[s]));
      return r;
    }
    getEventSourceById(e) {
      let n = this.getCurrentData(), r = n.eventSources;
      e = String(e);
      for (let s in r) if (r[s].publicId === e) return new gs(n, r[s]);
      return null;
    }
    addEventSource(e) {
      let n = this.getCurrentData();
      if (e instanceof gs) return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [
          e.internalEventSource
        ]
      }), e;
      let r = mm(e, n);
      return r ? (this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [
          r
        ]
      }), new gs(n, r)) : null;
    }
    removeAllEventSources() {
      this.dispatch({
        type: "REMOVE_ALL_EVENT_SOURCES"
      });
    }
    refetchEvents() {
      this.dispatch({
        type: "FETCH_EVENT_SOURCES",
        isRefetch: true
      });
    }
    scrollToTime(e) {
      let n = Pe(e);
      n && this.trigger("_scrollRequest", {
        time: n
      });
    }
  }
  function o0(t, e) {
    return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
  }
  function Tm(t, e) {
    let n = {
      left: Math.max(t.left, e.left),
      right: Math.min(t.right, e.right),
      top: Math.max(t.top, e.top),
      bottom: Math.min(t.bottom, e.bottom)
    };
    return n.left < n.right && n.top < n.bottom ? n : false;
  }
  function l0(t, e) {
    return {
      left: Math.min(Math.max(t.left, e.left), e.right),
      top: Math.min(Math.max(t.top, e.top), e.bottom)
    };
  }
  function c0(t) {
    return {
      left: (t.left + t.right) / 2,
      top: (t.top + t.bottom) / 2
    };
  }
  function u0(t, e) {
    return {
      left: t.left - e.left,
      top: t.top - e.top
    };
  }
  const bl = Ot();
  class d0 {
    constructor() {
      this.getKeysForEventDefs = Te(this._getKeysForEventDefs), this.splitDateSelection = Te(this._splitDateSpan), this.splitEventStore = Te(this._splitEventStore), this.splitIndividualUi = Te(this._splitIndividualUi), this.splitEventDrag = Te(this._splitInteraction), this.splitEventResize = Te(this._splitInteraction), this.eventUiBuilders = {};
    }
    splitProps(e) {
      let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), s = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, r), a = this.splitEventStore(e.eventStore, r), l = this.splitEventDrag(e.eventDrag), c = this.splitEventResize(e.eventResize), d = {};
      this.eventUiBuilders = er(n, (f, m) => this.eventUiBuilders[m] || Te(f0));
      for (let f in n) {
        let m = n[f], g = a[f] || bl, y = this.eventUiBuilders[f];
        d[f] = {
          businessHours: m.businessHours || e.businessHours,
          dateSelection: s[f] || null,
          eventStore: g,
          eventUiBases: y(e.eventUiBases[""], m.ui, i[f]),
          eventSelection: g.instances[e.eventSelection] ? e.eventSelection : "",
          eventDrag: l[f] || null,
          eventResize: c[f] || null
        };
      }
      return d;
    }
    _splitDateSpan(e) {
      let n = {};
      if (e) {
        let r = this.getKeysForDateSpan(e);
        for (let s of r) n[s] = e;
      }
      return n;
    }
    _getKeysForEventDefs(e) {
      return er(e.defs, (n) => this.getKeysForEventDef(n));
    }
    _splitEventStore(e, n) {
      let { defs: r, instances: s } = e, i = {};
      for (let a in r) for (let l of n[a]) i[l] || (i[l] = Ot()), i[l].defs[a] = r[a];
      for (let a in s) {
        let l = s[a];
        for (let c of n[l.defId]) i[c] && (i[c].instances[a] = l);
      }
      return i;
    }
    _splitIndividualUi(e, n) {
      let r = {};
      for (let s in e) if (s) for (let i of n[s]) r[i] || (r[i] = {}), r[i][s] = e[s];
      return r;
    }
    _splitInteraction(e) {
      let n = {};
      if (e) {
        let r = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)), s = this._getKeysForEventDefs(e.mutatedEvents), i = this._splitEventStore(e.mutatedEvents, s), a = (l) => {
          n[l] || (n[l] = {
            affectedEvents: r[l] || bl,
            mutatedEvents: i[l] || bl,
            isEvent: e.isEvent
          });
        };
        for (let l in r) a(l);
        for (let l in i) a(l);
      }
      return n;
    }
  }
  function f0(t, e, n) {
    let r = [];
    t && r.push(t), e && r.push(e);
    let s = {
      "": hm(r)
    };
    return n && Object.assign(s, n), s;
  }
  function Oc(t, e, n, r) {
    return {
      dow: t.getUTCDay(),
      isDisabled: !!(r && (!r.activeRange || !Zn(r.activeRange, t))),
      isOther: !!(r && !Zn(r.currentRange, t)),
      isToday: !!(e && Zn(e, t)),
      isPast: !!(n ? t < n : e && t < e.start),
      isFuture: !!(n ? t > n : e && t >= e.end)
    };
  }
  function So(t, e) {
    let n = [
      "fc-day",
      `fc-day-${g_[t.dow]}`
    ];
    return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
  }
  const h0 = nt({
    year: "numeric",
    month: "long",
    day: "numeric"
  }), m0 = nt({
    week: "long"
  });
  function Ps(t, e, n = "day", r = true) {
    const { dateEnv: s, options: i, calendarApi: a } = t;
    let l = s.format(e, n === "week" ? m0 : h0);
    if (i.navLinks) {
      let c = s.toDate(e);
      const d = (f) => {
        let m = n === "day" ? i.navLinkDayClick : n === "week" ? i.navLinkWeekClick : null;
        typeof m == "function" ? m.call(a, s.toDate(e), f) : (typeof m == "string" && (n = m), a.zoomTo(e, n));
      };
      return Object.assign({
        title: fi(i.navLinkHint, [
          l,
          c
        ], l),
        "data-navlink": ""
      }, r ? Kh(d) : {
        onClick: d
      });
    }
    return {
      "aria-label": l
    };
  }
  let wl = null;
  function p0() {
    return wl === null && (wl = g0()), wl;
  }
  function g0() {
    let t = document.createElement("div");
    di(t, {
      position: "absolute",
      top: -1e3,
      left: 0,
      border: 0,
      padding: 0,
      overflow: "scroll",
      direction: "rtl"
    }), t.innerHTML = "<div></div>", document.body.appendChild(t);
    let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
    return pc(t), n;
  }
  let Sl;
  function y0() {
    return Sl || (Sl = v0()), Sl;
  }
  function v0() {
    let t = document.createElement("div");
    t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
    let e = xm(t);
    return document.body.removeChild(t), e;
  }
  function xm(t) {
    return {
      x: t.offsetHeight - t.clientHeight,
      y: t.offsetWidth - t.clientWidth
    };
  }
  function b0(t, e = false) {
    let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, s = parseInt(n.borderRightWidth, 10) || 0, i = parseInt(n.borderTopWidth, 10) || 0, a = parseInt(n.borderBottomWidth, 10) || 0, l = xm(t), c = l.y - r - s, d = l.x - i - a, f = {
      borderLeft: r,
      borderRight: s,
      borderTop: i,
      borderBottom: a,
      scrollbarBottom: d,
      scrollbarLeft: 0,
      scrollbarRight: 0
    };
    return p0() && n.direction === "rtl" ? f.scrollbarLeft = c : f.scrollbarRight = c, e && (f.paddingLeft = parseInt(n.paddingLeft, 10) || 0, f.paddingRight = parseInt(n.paddingRight, 10) || 0, f.paddingTop = parseInt(n.paddingTop, 10) || 0, f.paddingBottom = parseInt(n.paddingBottom, 10) || 0), f;
  }
  function w0(t, e = false, n) {
    let r = Ic(t), s = b0(t, e), i = {
      left: r.left + s.borderLeft + s.scrollbarLeft,
      right: r.right - s.borderRight - s.scrollbarRight,
      top: r.top + s.borderTop,
      bottom: r.bottom - s.borderBottom - s.scrollbarBottom
    };
    return e && (i.left += s.paddingLeft, i.right -= s.paddingRight, i.top += s.paddingTop, i.bottom -= s.paddingBottom), i;
  }
  function Ic(t) {
    let e = t.getBoundingClientRect();
    return {
      left: e.left + window.scrollX,
      top: e.top + window.scrollY,
      right: e.right + window.scrollX,
      bottom: e.bottom + window.scrollY
    };
  }
  function S0(t) {
    let e = Mm(t), n = t.getBoundingClientRect();
    for (let r of e) {
      let s = Tm(n, r.getBoundingClientRect());
      if (s) n = s;
      else return null;
    }
    return n;
  }
  function Mm(t) {
    let e = [];
    for (; t instanceof HTMLElement; ) {
      let n = window.getComputedStyle(t);
      if (n.position === "fixed") break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
    }
    return e;
  }
  class Ns {
    constructor(e, n, r, s) {
      this.els = n;
      let i = this.originClientRect = e.getBoundingClientRect();
      r && this.buildElHorizontals(i.left), s && this.buildElVerticals(i.top);
    }
    buildElHorizontals(e) {
      let n = [], r = [];
      for (let s of this.els) {
        let i = s.getBoundingClientRect();
        n.push(i.left - e), r.push(i.right - e);
      }
      this.lefts = n, this.rights = r;
    }
    buildElVerticals(e) {
      let n = [], r = [];
      for (let s of this.els) {
        let i = s.getBoundingClientRect();
        n.push(i.top - e), r.push(i.bottom - e);
      }
      this.tops = n, this.bottoms = r;
    }
    leftToIndex(e) {
      let { lefts: n, rights: r } = this, s = n.length, i;
      for (i = 0; i < s; i += 1) if (e >= n[i] && e < r[i]) return i;
    }
    topToIndex(e) {
      let { tops: n, bottoms: r } = this, s = n.length, i;
      for (i = 0; i < s; i += 1) if (e >= n[i] && e < r[i]) return i;
    }
    getWidth(e) {
      return this.rights[e] - this.lefts[e];
    }
    getHeight(e) {
      return this.bottoms[e] - this.tops[e];
    }
    similarTo(e) {
      return ha(this.tops || [], e.tops || []) && ha(this.bottoms || [], e.bottoms || []) && ha(this.lefts || [], e.lefts || []) && ha(this.rights || [], e.rights || []);
    }
  }
  function ha(t, e) {
    const n = t.length;
    if (n !== e.length) return false;
    for (let r = 0; r < n; r++) if (Math.round(t[r]) !== Math.round(e[r])) return false;
    return true;
  }
  class Pc {
    getMaxScrollTop() {
      return this.getScrollHeight() - this.getClientHeight();
    }
    getMaxScrollLeft() {
      return this.getScrollWidth() - this.getClientWidth();
    }
    canScrollVertically() {
      return this.getMaxScrollTop() > 0;
    }
    canScrollHorizontally() {
      return this.getMaxScrollLeft() > 0;
    }
    canScrollUp() {
      return this.getScrollTop() > 0;
    }
    canScrollDown() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }
    canScrollLeft() {
      return this.getScrollLeft() > 0;
    }
    canScrollRight() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }
  }
  class _0 extends Pc {
    constructor(e) {
      super(), this.el = e;
    }
    getScrollTop() {
      return this.el.scrollTop;
    }
    getScrollLeft() {
      return this.el.scrollLeft;
    }
    setScrollTop(e) {
      this.el.scrollTop = e;
    }
    setScrollLeft(e) {
      this.el.scrollLeft = e;
    }
    getScrollWidth() {
      return this.el.scrollWidth;
    }
    getScrollHeight() {
      return this.el.scrollHeight;
    }
    getClientHeight() {
      return this.el.clientHeight;
    }
    getClientWidth() {
      return this.el.clientWidth;
    }
  }
  class D0 extends Pc {
    getScrollTop() {
      return window.scrollY;
    }
    getScrollLeft() {
      return window.scrollX;
    }
    setScrollTop(e) {
      window.scroll(window.scrollX, e);
    }
    setScrollLeft(e) {
      window.scroll(e, window.scrollY);
    }
    getScrollWidth() {
      return document.documentElement.scrollWidth;
    }
    getScrollHeight() {
      return document.documentElement.scrollHeight;
    }
    getClientHeight() {
      return document.documentElement.clientHeight;
    }
    getClientWidth() {
      return document.documentElement.clientWidth;
    }
  }
  class dn extends ze {
    constructor() {
      super(...arguments), this.uid = Jr();
    }
    prepareHits() {
    }
    queryHit(e, n, r, s) {
      return null;
    }
    isValidSegDownEl(e) {
      return !this.props.eventDrag && !this.props.eventResize && !At(e, ".fc-event-mirror");
    }
    isValidDateDownEl(e) {
      return !At(e, ".fc-event:not(.fc-bg-event)") && !At(e, ".fc-more-link") && !At(e, "a[data-navlink]") && !At(e, ".fc-popover");
    }
  }
  class Em {
    constructor(e = (n) => n.thickness || 1) {
      this.getEntryThickness = e, this.strictOrder = false, this.allowReslicing = false, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {};
    }
    addSegs(e) {
      let n = [];
      for (let r of e) this.insertEntry(r, n);
      return n;
    }
    insertEntry(e, n) {
      let r = this.findInsertion(e);
      this.isInsertionValid(r, e) ? this.insertEntryAt(e, r) : this.handleInvalidInsertion(r, e, n);
    }
    isInsertionValid(e, n) {
      return (this.maxCoord === -1 || e.levelCoord + this.getEntryThickness(n) <= this.maxCoord) && (this.maxStackCnt === -1 || e.stackCnt < this.maxStackCnt);
    }
    handleInvalidInsertion(e, n, r) {
      if (this.allowReslicing && e.touchingEntry) {
        const s = Object.assign(Object.assign({}, n), {
          span: Nc(n.span, e.touchingEntry.span)
        });
        r.push(s), this.splitEntry(n, e.touchingEntry, r);
      } else r.push(n);
    }
    splitEntry(e, n, r) {
      let s = e.span, i = n.span;
      s.start < i.start && this.insertEntry({
        index: e.index,
        thickness: e.thickness,
        span: {
          start: s.start,
          end: i.start
        }
      }, r), s.end > i.end && this.insertEntry({
        index: e.index,
        thickness: e.thickness,
        span: {
          start: i.end,
          end: s.end
        }
      }, r);
    }
    insertEntryAt(e, n) {
      let { entriesByLevel: r, levelCoords: s } = this;
      n.lateral === -1 ? (_l(s, n.level, n.levelCoord), _l(r, n.level, [
        e
      ])) : _l(r[n.level], n.lateral, e), this.stackCnts[zr(e)] = n.stackCnt;
    }
    findInsertion(e) {
      let { levelCoords: n, entriesByLevel: r, strictOrder: s, stackCnts: i } = this, a = n.length, l = 0, c = -1, d = -1, f = null, m = 0;
      for (let v = 0; v < a; v += 1) {
        const S = n[v];
        if (!s && S >= l + this.getEntryThickness(e)) break;
        let b = r[v], _, E = zl(b, e.span.start, Bl), R = E[0] + E[1];
        for (; (_ = b[R]) && _.span.start < e.span.end; ) {
          let T = S + this.getEntryThickness(_);
          T > l && (l = T, f = _, c = v, d = R), T === l && (m = Math.max(m, i[zr(_)] + 1)), R += 1;
        }
      }
      let g = 0;
      if (f) for (g = c + 1; g < a && n[g] < l; ) g += 1;
      let y = -1;
      return g < a && n[g] === l && (y = zl(r[g], e.span.end, Bl)[0]), {
        touchingLevel: c,
        touchingLateral: d,
        touchingEntry: f,
        stackCnt: m,
        levelCoord: l,
        level: g,
        lateral: y
      };
    }
    toRects() {
      let { entriesByLevel: e, levelCoords: n } = this, r = e.length, s = [];
      for (let i = 0; i < r; i += 1) {
        let a = e[i], l = n[i];
        for (let c of a) s.push(Object.assign(Object.assign({}, c), {
          thickness: this.getEntryThickness(c),
          levelCoord: l
        }));
      }
      return s;
    }
  }
  function Bl(t) {
    return t.span.end;
  }
  function zr(t) {
    return t.index + ":" + t.span.start;
  }
  function k0(t) {
    let e = [];
    for (let n of t) {
      let r = [], s = {
        span: n.span,
        entries: [
          n
        ]
      };
      for (let i of e) Nc(i.span, s.span) ? s = {
        entries: i.entries.concat(s.entries),
        span: T0(i.span, s.span)
      } : r.push(i);
      r.push(s), e = r;
    }
    return e;
  }
  function T0(t, e) {
    return {
      start: Math.min(t.start, e.start),
      end: Math.max(t.end, e.end)
    };
  }
  function Nc(t, e) {
    let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
    return n < r ? {
      start: n,
      end: r
    } : null;
  }
  function _l(t, e, n) {
    t.splice(e, 0, n);
  }
  function zl(t, e, n) {
    let r = 0, s = t.length;
    if (!s || e < n(t[r])) return [
      0,
      0
    ];
    if (e > n(t[s - 1])) return [
      s,
      0
    ];
    for (; r < s; ) {
      let i = Math.floor(r + (s - r) / 2), a = n(t[i]);
      if (e < a) s = i;
      else if (e > a) r = i + 1;
      else return [
        i,
        1
      ];
    }
    return [
      r,
      0
    ];
  }
  class x0 {
    constructor(e, n) {
      this.emitter = new wo();
    }
    destroy() {
    }
    setMirrorIsVisible(e) {
    }
    setMirrorNeedsRevert(e) {
    }
    setAutoScrollEnabled(e) {
    }
  }
  const _o = {}, M0 = {
    startTime: Pe,
    duration: Pe,
    create: Boolean,
    sourceId: String
  };
  function $l(t) {
    let { refined: e, extra: n } = po(t, M0);
    return {
      startTime: e.startTime || null,
      duration: e.duration || null,
      create: e.create != null ? e.create : true,
      sourceId: e.sourceId,
      leftoverProps: n
    };
  }
  function E0(t, e) {
    return !t || e > 10 ? nt({
      weekday: "short"
    }) : e > 1 ? nt({
      weekday: "short",
      month: "numeric",
      day: "numeric",
      omitCommas: true
    }) : nt({
      weekday: "long"
    });
  }
  const Cm = "fc-col-header-cell";
  function Am(t) {
    return t.text;
  }
  class C0 extends ze {
    render() {
      let { dateEnv: e, options: n, theme: r, viewApi: s } = this.context, { props: i } = this, { date: a, dateProfile: l } = i, c = Oc(a, i.todayRange, null, l), d = [
        Cm
      ].concat(So(c, r)), f = e.format(a, i.dayHeaderFormat), m = !c.isDisabled && i.colCnt > 1 ? Ps(this.context, a) : {}, g = e.toDate(a);
      e.namedTimeZoneImpl && (g = kr(g, 36e5));
      let y = Object.assign(Object.assign(Object.assign({
        date: g,
        view: s
      }, i.extraRenderProps), {
        text: f
      }), c);
      return M(Pt, {
        elTag: "th",
        elClasses: d,
        elAttrs: Object.assign({
          role: "columnheader",
          colSpan: i.colSpan,
          "data-date": c.isDisabled ? void 0 : Pi(a)
        }, i.extraDataAttrs),
        renderProps: y,
        generatorName: "dayHeaderContent",
        customGenerator: n.dayHeaderContent,
        defaultGenerator: Am,
        classNameGenerator: n.dayHeaderClassNames,
        didMount: n.dayHeaderDidMount,
        willUnmount: n.dayHeaderWillUnmount
      }, (v) => M("div", {
        className: "fc-scrollgrid-sync-inner"
      }, !c.isDisabled && M(v, {
        elTag: "a",
        elAttrs: m,
        elClasses: [
          "fc-col-header-cell-cushion",
          i.isSticky && "fc-sticky"
        ]
      })));
    }
  }
  const A0 = nt({
    weekday: "long"
  });
  class R0 extends ze {
    render() {
      let { props: e } = this, { dateEnv: n, theme: r, viewApi: s, options: i } = this.context, a = ut(/* @__PURE__ */ new Date(2592e5), e.dow), l = {
        dow: e.dow,
        isDisabled: false,
        isFuture: false,
        isPast: false,
        isToday: false,
        isOther: false
      }, c = n.format(a, e.dayHeaderFormat), d = Object.assign(Object.assign(Object.assign(Object.assign({
        date: a
      }, l), {
        view: s
      }), e.extraRenderProps), {
        text: c
      });
      return M(Pt, {
        elTag: "th",
        elClasses: [
          Cm,
          ...So(l, r),
          ...e.extraClassNames || []
        ],
        elAttrs: Object.assign({
          role: "columnheader",
          colSpan: e.colSpan
        }, e.extraDataAttrs),
        renderProps: d,
        generatorName: "dayHeaderContent",
        customGenerator: i.dayHeaderContent,
        defaultGenerator: Am,
        classNameGenerator: i.dayHeaderClassNames,
        didMount: i.dayHeaderDidMount,
        willUnmount: i.dayHeaderWillUnmount
      }, (f) => M("div", {
        className: "fc-scrollgrid-sync-inner"
      }, M(f, {
        elTag: "a",
        elClasses: [
          "fc-col-header-cell-cushion",
          e.isSticky && "fc-sticky"
        ],
        elAttrs: {
          "aria-label": n.format(a, A0)
        }
      })));
    }
  }
  class Rm extends ze {
    constructor() {
      super(...arguments), this.createDayHeaderFormatter = Te(O0);
    }
    render() {
      let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: s, renderIntro: i } = this.props, a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, s, n.length);
      return M(es, {
        unit: "day"
      }, (l, c) => M("tr", {
        role: "row"
      }, i && i("day"), n.map((d) => s ? M(C0, {
        key: d.toISOString(),
        date: d,
        dateProfile: r,
        todayRange: c,
        colCnt: n.length,
        dayHeaderFormat: a
      }) : M(R0, {
        key: d.getUTCDay(),
        dow: d.getUTCDay(),
        dayHeaderFormat: a
      }))));
    }
  }
  function O0(t, e, n) {
    return t || E0(e, n);
  }
  class Om {
    constructor(e, n) {
      let r = e.start, { end: s } = e, i = [], a = [], l = -1;
      for (; r < s; ) n.isHiddenDay(r) ? i.push(l + 0.5) : (l += 1, i.push(l), a.push(r)), r = ut(r, 1);
      this.dates = a, this.indices = i, this.cnt = a.length;
    }
    sliceRange(e) {
      let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(ut(e.end, -1)), s = Math.max(0, n), i = Math.min(this.cnt - 1, r);
      return s = Math.ceil(s), i = Math.floor(i), s <= i ? {
        firstIndex: s,
        lastIndex: i,
        isStart: n === s,
        isEnd: r === i
      } : null;
    }
    getDateDayIndex(e) {
      let { indices: n } = this, r = Math.floor(Er(this.dates[0], e));
      return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
    }
  }
  class Im {
    constructor(e, n) {
      let { dates: r } = e, s, i, a;
      if (n) {
        for (i = r[0].getUTCDay(), s = 1; s < r.length && r[s].getUTCDay() !== i; s += 1) ;
        a = Math.ceil(r.length / s);
      } else a = 1, s = r.length;
      this.rowCnt = a, this.colCnt = s, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates();
    }
    buildCells() {
      let e = [];
      for (let n = 0; n < this.rowCnt; n += 1) {
        let r = [];
        for (let s = 0; s < this.colCnt; s += 1) r.push(this.buildCell(n, s));
        e.push(r);
      }
      return e;
    }
    buildCell(e, n) {
      let r = this.daySeries.dates[e * this.colCnt + n];
      return {
        key: r.toISOString(),
        date: r
      };
    }
    buildHeaderDates() {
      let e = [];
      for (let n = 0; n < this.colCnt; n += 1) e.push(this.cells[0][n].date);
      return e;
    }
    sliceRange(e) {
      let { colCnt: n } = this, r = this.daySeries.sliceRange(e), s = [];
      if (r) {
        let { firstIndex: i, lastIndex: a } = r, l = i;
        for (; l <= a; ) {
          let c = Math.floor(l / n), d = Math.min((c + 1) * n, a + 1);
          s.push({
            row: c,
            firstCol: l % n,
            lastCol: (d - 1) % n,
            isStart: r.isStart && l === i,
            isEnd: r.isEnd && d - 1 === a
          }), l = d;
        }
      }
      return s;
    }
  }
  class Pm {
    constructor() {
      this.sliceBusinessHours = Te(this._sliceBusinessHours), this.sliceDateSelection = Te(this._sliceDateSpan), this.sliceEventStore = Te(this._sliceEventStore), this.sliceEventDrag = Te(this._sliceInteraction), this.sliceEventResize = Te(this._sliceInteraction), this.forceDayIfListItem = false;
    }
    sliceProps(e, n, r, s, ...i) {
      let { eventUiBases: a } = e, l = this.sliceEventStore(e.eventStore, a, n, r, ...i);
      return {
        dateSelectionSegs: this.sliceDateSelection(e.dateSelection, n, r, a, s, ...i),
        businessHourSegs: this.sliceBusinessHours(e.businessHours, n, r, s, ...i),
        fgEventSegs: l.fg,
        bgEventSegs: l.bg,
        eventDrag: this.sliceEventDrag(e.eventDrag, a, n, r, ...i),
        eventResize: this.sliceEventResize(e.eventResize, a, n, r, ...i),
        eventSelection: e.eventSelection
      };
    }
    sliceNowDate(e, n, r, s, ...i) {
      return this._sliceDateSpan({
        range: {
          start: e,
          end: kr(e, 1)
        },
        allDay: false
      }, n, r, {}, s, ...i);
    }
    _sliceBusinessHours(e, n, r, s, ...i) {
      return e ? this._sliceEventStore(Zr(e, ma(n, !!r), s), {}, n, r, ...i).bg : [];
    }
    _sliceEventStore(e, n, r, s, ...i) {
      if (e) {
        let a = Ul(e, n, ma(r, !!s), s);
        return {
          bg: this.sliceEventRanges(a.bg, i),
          fg: this.sliceEventRanges(a.fg, i)
        };
      }
      return {
        bg: [],
        fg: []
      };
    }
    _sliceInteraction(e, n, r, s, ...i) {
      if (!e) return null;
      let a = Ul(e.mutatedEvents, n, ma(r, !!s), s);
      return {
        segs: this.sliceEventRanges(a.fg, i),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent
      };
    }
    _sliceDateSpan(e, n, r, s, i, ...a) {
      if (!e) return [];
      let l = ma(n, !!r), c = Tr(e.range, l);
      if (c) {
        e = Object.assign(Object.assign({}, e), {
          range: c
        });
        let d = KD(e, s, i), f = this.sliceRange(e.range, ...a);
        for (let m of f) m.eventRange = d;
        return f;
      }
      return [];
    }
    sliceEventRanges(e, n) {
      let r = [];
      for (let s of e) r.push(...this.sliceEventRange(s, n));
      return r;
    }
    sliceEventRange(e, n) {
      let r = e.range;
      this.forceDayIfListItem && e.ui.display === "list-item" && (r = {
        start: r.start,
        end: ut(r.start, 1)
      });
      let s = this.sliceRange(r, ...n);
      for (let i of s) i.eventRange = e, i.isStart = e.isStart && i.isStart, i.isEnd = e.isEnd && i.isEnd;
      return s;
    }
  }
  function ma(t, e) {
    let n = t.activeRange;
    return e ? n : {
      start: kr(n.start, t.slotMinTime.milliseconds),
      end: kr(n.end, t.slotMaxTime.milliseconds - 864e5)
    };
  }
  function Lc(t, e, n) {
    let { instances: r } = t.mutatedEvents;
    for (let s in r) if (!yo(e.validRange, r[s].range)) return false;
    return Nm({
      eventDrag: t
    }, n);
  }
  function I0(t, e, n) {
    return yo(e.validRange, t.range) ? Nm({
      dateSelection: t
    }, n) : false;
  }
  function Nm(t, e) {
    let n = e.getCurrentData(), r = Object.assign({
      businessHours: n.businessHours,
      dateSelection: "",
      eventStore: n.eventStore,
      eventUiBases: n.eventUiBases,
      eventSelection: "",
      eventDrag: null,
      eventResize: null
    }, t);
    return (e.pluginHooks.isPropsValid || P0)(r, e);
  }
  function P0(t, e, n = {}, r) {
    return !(t.eventDrag && !N0(t, e, n, r) || t.dateSelection && !L0(t, e, n, r));
  }
  function N0(t, e, n, r) {
    let s = e.getCurrentData(), i = t.eventDrag, a = i.mutatedEvents, l = a.defs, c = a.instances, d = $a(l, i.isEvent ? t.eventUiBases : {
      "": s.selectionConfig
    });
    r && (d = er(d, r));
    let f = RD(t.eventStore, i.affectedEvents.instances), m = f.defs, g = f.instances, y = $a(m, t.eventUiBases);
    for (let v in c) {
      let S = c[v], b = S.range, _ = d[S.defId], E = l[S.defId];
      if (!Lm(_.constraints, b, f, t.businessHours, e)) return false;
      let { eventOverlap: R } = e.options, T = typeof R == "function" ? R : null;
      for (let N in g) {
        let I = g[N];
        if (Sc(b, I.range) && (y[I.defId].overlap === false && i.isEvent || _.overlap === false || T && !T(new rt(e, m[I.defId], I), new rt(e, E, S)))) return false;
      }
      let x = s.eventStore;
      for (let N of _.allows) {
        let I = Object.assign(Object.assign({}, n), {
          range: S.range,
          allDay: E.allDay
        }), O = x.defs[E.defId], J = x.instances[v], U;
        if (O ? U = new rt(e, O, J) : U = new rt(e, E), !N(Mc(I, e), U)) return false;
      }
    }
    return true;
  }
  function L0(t, e, n, r) {
    let s = t.eventStore, i = s.defs, a = s.instances, l = t.dateSelection, c = l.range, { selectionConfig: d } = e.getCurrentData();
    if (r && (d = r(d)), !Lm(d.constraints, c, s, t.businessHours, e)) return false;
    let { selectOverlap: f } = e.options, m = typeof f == "function" ? f : null;
    for (let g in a) {
      let y = a[g];
      if (Sc(c, y.range) && (d.overlap === false || m && !m(new rt(e, i[y.defId], y), null))) return false;
    }
    for (let g of d.allows) {
      let y = Object.assign(Object.assign({}, n), l);
      if (!g(Mc(y, e), null)) return false;
    }
    return true;
  }
  function Lm(t, e, n, r, s) {
    for (let i of t) if (!F0(Y0(i, e, n, r, s), e)) return false;
    return true;
  }
  function Y0(t, e, n, r, s) {
    return t === "businessHours" ? Dl(Zr(r, e, s)) : typeof t == "string" ? Dl(bo(n, (i) => i.groupId === t)) : typeof t == "object" && t ? Dl(Zr(t, e, s)) : [];
  }
  function Dl(t) {
    let { instances: e } = t, n = [];
    for (let r in e) n.push(e[r].range);
    return n;
  }
  function F0(t, e) {
    for (let n of t) if (yo(n, e)) return true;
    return false;
  }
  const pa = /^(visible|hidden)$/;
  class Ym extends ze {
    constructor() {
      super(...arguments), this.handleEl = (e) => {
        this.el = e, kn(this.props.elRef, e);
      };
    }
    render() {
      let { props: e } = this, { liquid: n, liquidIsAbsolute: r } = e, s = n && r, i = [
        "fc-scroller"
      ];
      return n && (r ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), M("div", {
        ref: this.handleEl,
        className: i.join(" "),
        style: {
          overflowX: e.overflowX,
          overflowY: e.overflowY,
          left: s && -(e.overcomeLeft || 0) || "",
          right: s && -(e.overcomeRight || 0) || "",
          bottom: s && -(e.overcomeBottom || 0) || "",
          marginLeft: !s && -(e.overcomeLeft || 0) || "",
          marginRight: !s && -(e.overcomeRight || 0) || "",
          marginBottom: !s && -(e.overcomeBottom || 0) || "",
          maxHeight: e.maxHeight || ""
        }
      }, e.children);
    }
    needsXScrolling() {
      if (pa.test(this.props.overflowX)) return false;
      let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
      for (let s = 0; s < r.length; s += 1) if (r[s].getBoundingClientRect().width > n) return true;
      return false;
    }
    needsYScrolling() {
      if (pa.test(this.props.overflowY)) return false;
      let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
      for (let s = 0; s < r.length; s += 1) if (r[s].getBoundingClientRect().height > n) return true;
      return false;
    }
    getXScrollbarWidth() {
      return pa.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
    }
    getYScrollbarWidth() {
      return pa.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
    }
  }
  class zn {
    constructor(e) {
      this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (n, r) => {
        let { depths: s, currentMap: i } = this, a = false, l = false;
        n !== null ? (a = r in i, i[r] = n, s[r] = (s[r] || 0) + 1, l = true) : (s[r] -= 1, s[r] || (delete i[r], delete this.callbackMap[r], a = true)), this.masterCallback && (a && this.masterCallback(null, String(r)), l && this.masterCallback(n, String(r)));
      };
    }
    createRef(e) {
      let n = this.callbackMap[e];
      return n || (n = this.callbackMap[e] = (r) => {
        this.handleValue(r, String(e));
      }), n;
    }
    collect(e, n, r) {
      return Q_(this.currentMap, e, n, r);
    }
    getAll() {
      return bc(this.currentMap);
    }
  }
  function H0(t) {
    let e = ZS(t, ".fc-scrollgrid-shrink"), n = 0;
    for (let r of e) n = Math.max(n, l_(r));
    return Math.ceil(n);
  }
  function Fm(t, e) {
    return t.liquid && e.liquid;
  }
  function j0(t, e) {
    return e.maxHeight != null || Fm(t, e);
  }
  function V0(t, e, n, r) {
    let { expandRows: s } = n;
    return typeof e.content == "function" ? e.content(n) : M("table", {
      role: "presentation",
      className: [
        e.tableClassName,
        t.syncRowHeights ? "fc-scrollgrid-sync-table" : ""
      ].join(" "),
      style: {
        minWidth: n.tableMinWidth,
        width: n.clientWidth,
        height: s ? n.clientHeight : ""
      }
    }, n.tableColGroupNode, M(r ? "thead" : "tbody", {
      role: "presentation"
    }, typeof e.rowContent == "function" ? e.rowContent(n) : e.rowContent));
  }
  function W0(t, e) {
    return Dr(t, e, ln);
  }
  function U0(t, e) {
    let n = [];
    for (let r of t) {
      let s = r.span || 1;
      for (let i = 0; i < s; i += 1) n.push(M("col", {
        style: {
          width: r.width === "shrink" ? B0(e) : r.width || "",
          minWidth: r.minWidth || ""
        }
      }));
    }
    return M("colgroup", {}, ...n);
  }
  function B0(t) {
    return t ?? 4;
  }
  function z0(t) {
    for (let e of t) if (e.width === "shrink") return true;
    return false;
  }
  function $0(t, e) {
    let n = [
      "fc-scrollgrid",
      e.theme.getClass("table")
    ];
    return t && n.push("fc-scrollgrid-liquid"), n;
  }
  function G0(t, e) {
    let n = [
      "fc-scrollgrid-section",
      `fc-scrollgrid-section-${t.type}`,
      t.className
    ];
    return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
  }
  function Gl(t) {
    return M("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: {
        width: t.clientWidth,
        minWidth: t.tableMinWidth
      }
    });
  }
  function Za(t) {
    let { stickyHeaderDates: e } = t;
    return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
  }
  function Hm(t) {
    let { stickyFooterScrollbar: e } = t;
    return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
  }
  class Yc extends ze {
    constructor() {
      super(...arguments), this.processCols = Te((e) => e, W0), this.renderMicroColGroup = Te(U0), this.scrollerRefs = new zn(), this.scrollerElRefs = new zn(this._handleScrollerEl.bind(this)), this.state = {
        shrinkWidth: null,
        forceYScrollbars: false,
        scrollerClientWidths: {},
        scrollerClientHeights: {}
      }, this.handleSizing = () => {
        this.safeSetState(Object.assign({
          shrinkWidth: this.computeShrinkWidth()
        }, this.computeScrollerDims()));
      };
    }
    render() {
      let { props: e, state: n, context: r } = this, s = e.sections || [], i = this.processCols(e.cols), a = this.renderMicroColGroup(i, n.shrinkWidth), l = $0(e.liquid, r);
      e.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
      let c = s.length, d = 0, f, m = [], g = [], y = [];
      for (; d < c && (f = s[d]).type === "header"; ) m.push(this.renderSection(f, a, true)), d += 1;
      for (; d < c && (f = s[d]).type === "body"; ) g.push(this.renderSection(f, a, false)), d += 1;
      for (; d < c && (f = s[d]).type === "footer"; ) y.push(this.renderSection(f, a, true)), d += 1;
      let v = !km();
      const S = {
        role: "rowgroup"
      };
      return M("table", {
        role: "grid",
        className: l.join(" "),
        style: {
          height: e.height
        }
      }, !!(!v && m.length) && M("thead", S, ...m), !!(!v && g.length) && M("tbody", S, ...g), !!(!v && y.length) && M("tfoot", S, ...y), v && M("tbody", S, ...m, ...g, ...y));
    }
    renderSection(e, n, r) {
      return "outerContent" in e ? M(Ze, {
        key: e.key
      }, e.outerContent) : M("tr", {
        key: e.key,
        role: "presentation",
        className: G0(e, this.props.liquid).join(" ")
      }, this.renderChunkTd(e, n, e.chunk, r));
    }
    renderChunkTd(e, n, r, s) {
      if ("outerContent" in r) return r.outerContent;
      let { props: i } = this, { forceYScrollbars: a, scrollerClientWidths: l, scrollerClientHeights: c } = this.state, d = j0(i, e), f = Fm(i, e), m = i.liquid ? a ? "scroll" : d ? "auto" : "hidden" : "visible", g = e.key, y = V0(e, r, {
        tableColGroupNode: n,
        tableMinWidth: "",
        clientWidth: !i.collapsibleWidth && l[g] !== void 0 ? l[g] : null,
        clientHeight: c[g] !== void 0 ? c[g] : null,
        expandRows: e.expandRows,
        syncRowHeights: false,
        rowSyncHeights: [],
        reportRowHeightChange: () => {
        }
      }, s);
      return M(s ? "th" : "td", {
        ref: r.elRef,
        role: "presentation"
      }, M("div", {
        className: `fc-scroller-harness${f ? " fc-scroller-harness-liquid" : ""}`
      }, M(Ym, {
        ref: this.scrollerRefs.createRef(g),
        elRef: this.scrollerElRefs.createRef(g),
        overflowY: m,
        overflowX: i.liquid ? "hidden" : "visible",
        maxHeight: e.maxHeight,
        liquid: f,
        liquidIsAbsolute: true
      }, y)));
    }
    _handleScrollerEl(e, n) {
      let r = Z0(this.props.sections, n);
      r && kn(r.chunk.scrollerElRef, e);
    }
    componentDidMount() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate() {
      this.handleSizing();
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
    computeShrinkWidth() {
      return z0(this.props.cols) ? H0(this.scrollerElRefs.getAll()) : 0;
    }
    computeScrollerDims() {
      let e = y0(), { scrollerRefs: n, scrollerElRefs: r } = this, s = false, i = {}, a = {};
      for (let l in n.currentMap) {
        let c = n.currentMap[l];
        if (c && c.needsYScrolling()) {
          s = true;
          break;
        }
      }
      for (let l of this.props.sections) {
        let c = l.key, d = r.currentMap[c];
        if (d) {
          let f = d.parentNode;
          i[c] = Math.floor(f.getBoundingClientRect().width - (s ? e.y : 0)), a[c] = Math.floor(f.getBoundingClientRect().height);
        }
      }
      return {
        forceYScrollbars: s,
        scrollerClientWidths: i,
        scrollerClientHeights: a
      };
    }
  }
  Yc.addStateEquality({
    scrollerClientWidths: ln,
    scrollerClientHeights: ln
  });
  function Z0(t, e) {
    for (let n of t) if (n.key === e) return n;
    return null;
  }
  class Do extends ze {
    constructor() {
      super(...arguments), this.buildPublicEvent = Te((e, n, r) => new rt(e, n, r)), this.handleEl = (e) => {
        this.el = e, kn(this.props.elRef, e), e && uf(e, this.props.seg);
      };
    }
    render() {
      const { props: e, context: n } = this, { options: r } = n, { seg: s } = e, { eventRange: i } = s, { ui: a } = i, l = {
        event: this.buildPublicEvent(n, i.def, i.instance),
        view: n.viewApi,
        timeText: e.timeText,
        textColor: a.textColor,
        backgroundColor: a.backgroundColor,
        borderColor: a.borderColor,
        isDraggable: !e.disableDragging && UD(s, n),
        isStartResizable: !e.disableResizing && BD(s, n),
        isEndResizable: !e.disableResizing && zD(s),
        isMirror: !!(e.isDragging || e.isResizing || e.isDateSelecting),
        isStart: !!s.isStart,
        isEnd: !!s.isEnd,
        isPast: !!e.isPast,
        isFuture: !!e.isFuture,
        isToday: !!e.isToday,
        isSelected: !!e.isSelected,
        isDragging: !!e.isDragging,
        isResizing: !!e.isResizing
      };
      return M(Pt, {
        elRef: this.handleEl,
        elTag: e.elTag,
        elAttrs: e.elAttrs,
        elClasses: [
          ...$D(l),
          ...s.eventRange.ui.classNames,
          ...e.elClasses || []
        ],
        elStyle: e.elStyle,
        renderProps: l,
        generatorName: "eventContent",
        customGenerator: r.eventContent,
        defaultGenerator: e.defaultGenerator,
        classNameGenerator: r.eventClassNames,
        didMount: r.eventDidMount,
        willUnmount: r.eventWillUnmount
      }, e.children);
    }
    componentDidUpdate(e) {
      this.el && this.props.seg !== e.seg && uf(this.el, this.props.seg);
    }
  }
  class Fc extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { seg: s } = e, { ui: i } = s.eventRange, a = r.eventTimeFormat || e.defaultTimeFormat, l = hi(s, a, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
      return M(Do, Object.assign({}, e, {
        elTag: "a",
        elStyle: {
          borderColor: i.borderColor,
          backgroundColor: i.backgroundColor
        },
        elAttrs: Ac(s, n),
        defaultGenerator: q0,
        timeText: l
      }), (c, d) => M(Ze, null, M(c, {
        elTag: "div",
        elClasses: [
          "fc-event-main"
        ],
        elStyle: {
          color: d.textColor
        }
      }), !!d.isStartResizable && M("div", {
        className: "fc-event-resizer fc-event-resizer-start"
      }), !!d.isEndResizable && M("div", {
        className: "fc-event-resizer fc-event-resizer-end"
      })));
    }
  }
  Fc.addPropsEquality({
    seg: ln
  });
  function q0(t) {
    return M("div", {
      className: "fc-event-main-frame"
    }, t.timeText && M("div", {
      className: "fc-event-time"
    }, t.timeText), M("div", {
      className: "fc-event-title-container"
    }, M("div", {
      className: "fc-event-title fc-sticky"
    }, t.event.title || M(Ze, null, "\xA0"))));
  }
  const Hc = (t) => M(nr.Consumer, null, (e) => {
    let { options: n } = e, r = {
      isAxis: t.isAxis,
      date: e.dateEnv.toDate(t.date),
      view: e.viewApi
    };
    return M(Pt, {
      elRef: t.elRef,
      elTag: t.elTag || "div",
      elAttrs: t.elAttrs,
      elClasses: t.elClasses,
      elStyle: t.elStyle,
      renderProps: r,
      generatorName: "nowIndicatorContent",
      customGenerator: n.nowIndicatorContent,
      classNameGenerator: n.nowIndicatorClassNames,
      didMount: n.nowIndicatorDidMount,
      willUnmount: n.nowIndicatorWillUnmount
    }, t.children);
  }), Q0 = nt({
    day: "numeric"
  });
  class jc extends ze {
    constructor() {
      super(...arguments), this.refineRenderProps = ka(X0);
    }
    render() {
      let { props: e, context: n } = this, { options: r } = n, s = this.refineRenderProps({
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        isMonthStart: e.isMonthStart || false,
        showDayNumber: e.showDayNumber,
        extraRenderProps: e.extraRenderProps,
        viewApi: n.viewApi,
        dateEnv: n.dateEnv,
        monthStartFormat: r.monthStartFormat
      });
      return M(Pt, {
        elRef: e.elRef,
        elTag: e.elTag,
        elAttrs: Object.assign(Object.assign({}, e.elAttrs), s.isDisabled ? {} : {
          "data-date": Pi(e.date)
        }),
        elClasses: [
          ...So(s, n.theme),
          ...e.elClasses || []
        ],
        elStyle: e.elStyle,
        renderProps: s,
        generatorName: "dayCellContent",
        customGenerator: r.dayCellContent,
        defaultGenerator: e.defaultGenerator,
        classNameGenerator: s.isDisabled ? void 0 : r.dayCellClassNames,
        didMount: r.dayCellDidMount,
        willUnmount: r.dayCellWillUnmount
      }, e.children);
    }
  }
  function Vc(t) {
    return !!(t.dayCellContent || Vl("dayCellContent", t));
  }
  function X0(t) {
    let { date: e, dateEnv: n, dateProfile: r, isMonthStart: s } = t, i = Oc(e, t.todayRange, null, r), a = t.showDayNumber ? n.format(e, s ? t.monthStartFormat : Q0) : "";
    return Object.assign(Object.assign(Object.assign({
      date: n.toDate(e),
      view: t.viewApi
    }, i), {
      isMonthStart: s,
      dayNumberText: a
    }), t.extraRenderProps);
  }
  class jm extends ze {
    render() {
      let { props: e } = this, { seg: n } = e;
      return M(Do, {
        elTag: "div",
        elClasses: [
          "fc-bg-event"
        ],
        elStyle: {
          backgroundColor: n.eventRange.ui.backgroundColor
        },
        defaultGenerator: J0,
        seg: n,
        timeText: "",
        isDragging: false,
        isResizing: false,
        isDateSelecting: false,
        isSelected: false,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday,
        disableDragging: true,
        disableResizing: true
      });
    }
  }
  function J0(t) {
    let { title: e } = t.event;
    return e && M("div", {
      className: "fc-event-title"
    }, t.event.title);
  }
  function Vm(t) {
    return M("div", {
      className: `fc-${t}`
    });
  }
  const Wm = (t) => M(nr.Consumer, null, (e) => {
    let { dateEnv: n, options: r } = e, { date: s } = t, i = r.weekNumberFormat || t.defaultFormat, a = n.computeWeekNumber(s), l = n.format(s, i), c = {
      num: a,
      text: l,
      date: s
    };
    return M(Pt, {
      elRef: t.elRef,
      elTag: t.elTag,
      elAttrs: t.elAttrs,
      elClasses: t.elClasses,
      elStyle: t.elStyle,
      renderProps: c,
      generatorName: "weekNumberContent",
      customGenerator: r.weekNumberContent,
      defaultGenerator: K0,
      classNameGenerator: r.weekNumberClassNames,
      didMount: r.weekNumberDidMount,
      willUnmount: r.weekNumberWillUnmount
    }, t.children);
  });
  function K0(t) {
    return t.text;
  }
  const kl = 10;
  class ek extends ze {
    constructor() {
      super(...arguments), this.state = {
        titleId: wr()
      }, this.handleRootEl = (e) => {
        this.rootEl = e, this.props.elRef && kn(this.props.elRef, e);
      }, this.handleDocumentMouseDown = (e) => {
        const n = Xh(e);
        this.rootEl.contains(n) || this.handleCloseClick();
      }, this.handleDocumentKeyDown = (e) => {
        e.key === "Escape" && this.handleCloseClick();
      }, this.handleCloseClick = () => {
        let { onClose: e } = this.props;
        e && e();
      };
    }
    render() {
      let { theme: e, options: n } = this.context, { props: r, state: s } = this, i = [
        "fc-popover",
        e.getClass("popover")
      ].concat(r.extraClassNames || []);
      return NS(M("div", Object.assign({}, r.extraAttrs, {
        id: r.id,
        className: i.join(" "),
        "aria-labelledby": s.titleId,
        ref: this.handleRootEl
      }), M("div", {
        className: "fc-popover-header " + e.getClass("popoverHeader")
      }, M("span", {
        className: "fc-popover-title",
        id: s.titleId
      }, r.title), M("span", {
        className: "fc-popover-close " + e.getIconClass("close"),
        title: n.closeHint,
        onClick: this.handleCloseClick
      })), M("div", {
        className: "fc-popover-body " + e.getClass("popoverContent")
      }, r.children)), r.parentEl);
    }
    componentDidMount() {
      document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize();
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown);
    }
    updateSize() {
      let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: s } = this, i = S0(n);
      if (i) {
        let a = s.getBoundingClientRect(), l = r ? At(n, ".fc-scrollgrid").getBoundingClientRect().top : i.top, c = e ? i.right - a.width : i.left;
        l = Math.max(l, kl), c = Math.min(c, document.documentElement.clientWidth - kl - a.width), c = Math.max(c, kl);
        let d = s.offsetParent.getBoundingClientRect();
        di(s, {
          top: l - d.top,
          left: c - d.left
        });
      }
    }
  }
  class tk extends dn {
    constructor() {
      super(...arguments), this.handleRootEl = (e) => {
        this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
          el: e,
          useEventCenter: false
        }) : this.context.unregisterInteractiveComponent(this);
      };
    }
    render() {
      let { options: e, dateEnv: n } = this.context, { props: r } = this, { startDate: s, todayRange: i, dateProfile: a } = r, l = n.format(s, e.dayPopoverFormat);
      return M(jc, {
        elRef: this.handleRootEl,
        date: s,
        dateProfile: a,
        todayRange: i
      }, (c, d, f) => M(ek, {
        elRef: f.ref,
        id: r.id,
        title: l,
        extraClassNames: [
          "fc-more-popover"
        ].concat(f.className || []),
        extraAttrs: f,
        parentEl: r.parentEl,
        alignmentEl: r.alignmentEl,
        alignGridTop: r.alignGridTop,
        onClose: r.onClose
      }, Vc(e) && M(c, {
        elTag: "div",
        elClasses: [
          "fc-more-popover-misc"
        ]
      }), r.children));
    }
    queryHit(e, n, r, s) {
      let { rootEl: i, props: a } = this;
      return e >= 0 && e < r && n >= 0 && n < s ? {
        dateProfile: a.dateProfile,
        dateSpan: Object.assign({
          allDay: !a.forceTimed,
          range: {
            start: a.startDate,
            end: a.endDate
          }
        }, a.extraDateSpan),
        dayEl: i,
        rect: {
          left: 0,
          top: 0,
          right: r,
          bottom: s
        },
        layer: 1
      } : null;
    }
  }
  class Um extends ze {
    constructor() {
      super(...arguments), this.state = {
        isPopoverOpen: false,
        popoverId: wr()
      }, this.handleLinkEl = (e) => {
        this.linkEl = e, this.props.elRef && kn(this.props.elRef, e);
      }, this.handleClick = (e) => {
        let { props: n, context: r } = this, { moreLinkClick: s } = r.options, i = ff(n).start;
        function a(l) {
          let { def: c, instance: d, range: f } = l.eventRange;
          return {
            event: new rt(r, c, d),
            start: r.dateEnv.toDate(f.start),
            end: r.dateEnv.toDate(f.end),
            isStart: l.isStart,
            isEnd: l.isEnd
          };
        }
        typeof s == "function" && (s = s({
          date: i,
          allDay: !!n.allDayDate,
          allSegs: n.allSegs.map(a),
          hiddenSegs: n.hiddenSegs.map(a),
          jsEvent: e,
          view: r.viewApi
        })), !s || s === "popover" ? this.setState({
          isPopoverOpen: true
        }) : typeof s == "string" && r.calendarApi.zoomTo(i, s);
      }, this.handlePopoverClose = () => {
        this.setState({
          isPopoverOpen: false
        });
      };
    }
    render() {
      let { props: e, state: n } = this;
      return M(nr.Consumer, null, (r) => {
        let { viewApi: s, options: i, calendarApi: a } = r, { moreLinkText: l } = i, { moreCnt: c } = e, d = ff(e), f = typeof l == "function" ? l.call(a, c) : `+${c} ${l}`, m = fi(i.moreLinkHint, [
          c
        ], f), g = {
          num: c,
          shortText: `+${c}`,
          text: f,
          view: s
        };
        return M(Ze, null, !!e.moreCnt && M(Pt, {
          elTag: e.elTag || "a",
          elRef: this.handleLinkEl,
          elClasses: [
            ...e.elClasses || [],
            "fc-more-link"
          ],
          elStyle: e.elStyle,
          elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Kh(this.handleClick)), {
            title: m,
            "aria-expanded": n.isPopoverOpen,
            "aria-controls": n.isPopoverOpen ? n.popoverId : ""
          }),
          renderProps: g,
          generatorName: "moreLinkContent",
          customGenerator: i.moreLinkContent,
          defaultGenerator: e.defaultGenerator || nk,
          classNameGenerator: i.moreLinkClassNames,
          didMount: i.moreLinkDidMount,
          willUnmount: i.moreLinkWillUnmount
        }, e.children), n.isPopoverOpen && M(tk, {
          id: n.popoverId,
          startDate: d.start,
          endDate: d.end,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          extraDateSpan: e.extraDateSpan,
          parentEl: this.parentEl,
          alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
          alignGridTop: e.alignGridTop,
          forceTimed: e.forceTimed,
          onClose: this.handlePopoverClose
        }, e.popoverContent()));
      });
    }
    componentDidMount() {
      this.updateParentEl();
    }
    componentDidUpdate() {
      this.updateParentEl();
    }
    updateParentEl() {
      this.linkEl && (this.parentEl = At(this.linkEl, ".fc-view-harness"));
    }
  }
  function nk(t) {
    return t.text;
  }
  function ff(t) {
    if (t.allDayDate) return {
      start: t.allDayDate,
      end: ut(t.allDayDate, 1)
    };
    let { hiddenSegs: e } = t;
    return {
      start: Bm(e),
      end: sk(e)
    };
  }
  function Bm(t) {
    return t.reduce(rk).eventRange.range.start;
  }
  function rk(t, e) {
    return t.eventRange.range.start < e.eventRange.range.start ? t : e;
  }
  function sk(t) {
    return t.reduce(ik).eventRange.range.end;
  }
  function ik(t, e) {
    return t.eventRange.range.end > e.eventRange.range.end ? t : e;
  }
  class ak {
    constructor() {
      this.handlers = [];
    }
    set(e) {
      this.currentValue = e;
      for (let n of this.handlers) n(e);
    }
    subscribe(e) {
      this.handlers.push(e), this.currentValue !== void 0 && e(this.currentValue);
    }
  }
  class ok extends ak {
    constructor() {
      super(...arguments), this.map = /* @__PURE__ */ new Map();
    }
    handle(e) {
      const { map: n } = this;
      let r = false;
      e.isActive ? (n.set(e.id, e), r = true) : n.has(e.id) && (n.delete(e.id), r = true), r && this.set(n);
    }
  }
  const lk = [], zm = {
    code: "en",
    week: {
      dow: 0,
      doy: 4
    },
    direction: "ltr",
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day",
      list: "list"
    },
    weekText: "W",
    weekTextLong: "Week",
    closeHint: "Close",
    timeHint: "Time",
    eventHint: "Event",
    allDayText: "all-day",
    moreLinkText: "more",
    noEventsText: "No events to display"
  }, $m = Object.assign(Object.assign({}, zm), {
    buttonHints: {
      prev: "Previous $0",
      next: "Next $0",
      today(t, e) {
        return e === "day" ? "Today" : `This ${t}`;
      }
    },
    viewHint: "$0 view",
    navLinkHint: "Go to $0",
    moreLinkHint(t) {
      return `Show ${t} more event${t === 1 ? "" : "s"}`;
    }
  });
  function ck(t) {
    let e = t.length > 0 ? t[0].code : "en", n = lk.concat(t), r = {
      en: $m
    };
    for (let s of n) r[s.code] = s;
    return {
      map: r,
      defaultCode: e
    };
  }
  function Gm(t, e) {
    return typeof t == "object" && !Array.isArray(t) ? Zm(t.code, [
      t.code
    ], t) : uk(t, e);
  }
  function uk(t, e) {
    let n = [].concat(t || []), r = dk(n, e) || $m;
    return Zm(t, n, r);
  }
  function dk(t, e) {
    for (let n = 0; n < t.length; n += 1) {
      let r = t[n].toLocaleLowerCase().split("-");
      for (let s = r.length; s > 0; s -= 1) {
        let i = r.slice(0, s).join("-");
        if (e[i]) return e[i];
      }
    }
    return null;
  }
  function Zm(t, e, n) {
    let r = vc([
      zm,
      n
    ], [
      "buttonText"
    ]);
    delete r.code;
    let { week: s } = r;
    return delete r.week, {
      codeArg: t,
      codes: e,
      week: s,
      simpleNumberFormat: new Intl.NumberFormat(t),
      options: r
    };
  }
  function fn(t) {
    return {
      id: Jr(),
      name: t.name,
      premiumReleaseDate: t.premiumReleaseDate ? new Date(t.premiumReleaseDate) : void 0,
      deps: t.deps || [],
      reducers: t.reducers || [],
      isLoadingFuncs: t.isLoadingFuncs || [],
      contextInit: [].concat(t.contextInit || []),
      eventRefiners: t.eventRefiners || {},
      eventDefMemberAdders: t.eventDefMemberAdders || [],
      eventSourceRefiners: t.eventSourceRefiners || {},
      isDraggableTransformers: t.isDraggableTransformers || [],
      eventDragMutationMassagers: t.eventDragMutationMassagers || [],
      eventDefMutationAppliers: t.eventDefMutationAppliers || [],
      dateSelectionTransformers: t.dateSelectionTransformers || [],
      datePointTransforms: t.datePointTransforms || [],
      dateSpanTransforms: t.dateSpanTransforms || [],
      views: t.views || {},
      viewPropsTransformers: t.viewPropsTransformers || [],
      isPropsValid: t.isPropsValid || null,
      externalDefTransforms: t.externalDefTransforms || [],
      viewContainerAppends: t.viewContainerAppends || [],
      eventDropTransformers: t.eventDropTransformers || [],
      componentInteractions: t.componentInteractions || [],
      calendarInteractions: t.calendarInteractions || [],
      themeClasses: t.themeClasses || {},
      eventSourceDefs: t.eventSourceDefs || [],
      cmdFormatter: t.cmdFormatter,
      recurringTypes: t.recurringTypes || [],
      namedTimeZonedImpl: t.namedTimeZonedImpl,
      initialView: t.initialView || "",
      elementDraggingImpl: t.elementDraggingImpl,
      optionChangeHandlers: t.optionChangeHandlers || {},
      scrollGridImpl: t.scrollGridImpl || null,
      listenerRefiners: t.listenerRefiners || {},
      optionRefiners: t.optionRefiners || {},
      propSetHandlers: t.propSetHandlers || {}
    };
  }
  function fk(t, e) {
    let n = {}, r = {
      premiumReleaseDate: void 0,
      reducers: [],
      isLoadingFuncs: [],
      contextInit: [],
      eventRefiners: {},
      eventDefMemberAdders: [],
      eventSourceRefiners: {},
      isDraggableTransformers: [],
      eventDragMutationMassagers: [],
      eventDefMutationAppliers: [],
      dateSelectionTransformers: [],
      datePointTransforms: [],
      dateSpanTransforms: [],
      views: {},
      viewPropsTransformers: [],
      isPropsValid: null,
      externalDefTransforms: [],
      viewContainerAppends: [],
      eventDropTransformers: [],
      componentInteractions: [],
      calendarInteractions: [],
      themeClasses: {},
      eventSourceDefs: [],
      cmdFormatter: null,
      recurringTypes: [],
      namedTimeZonedImpl: null,
      initialView: "",
      elementDraggingImpl: null,
      optionChangeHandlers: {},
      scrollGridImpl: null,
      listenerRefiners: {},
      optionRefiners: {},
      propSetHandlers: {}
    };
    function s(i) {
      for (let a of i) {
        const l = a.name, c = n[l];
        c === void 0 ? (n[l] = a.id, s(a.deps), r = mk(r, a)) : c !== a.id && console.warn(`Duplicate plugin '${l}'`);
      }
    }
    return t && s(t), s(e), r;
  }
  function hk() {
    let t = [], e = [], n;
    return (r, s) => ((!n || !Dr(r, t) || !Dr(s, e)) && (n = fk(r, s)), t = r, e = s, n);
  }
  function mk(t, e) {
    return {
      premiumReleaseDate: pk(t.premiumReleaseDate, e.premiumReleaseDate),
      reducers: t.reducers.concat(e.reducers),
      isLoadingFuncs: t.isLoadingFuncs.concat(e.isLoadingFuncs),
      contextInit: t.contextInit.concat(e.contextInit),
      eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), e.eventRefiners),
      eventDefMemberAdders: t.eventDefMemberAdders.concat(e.eventDefMemberAdders),
      eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), e.eventSourceRefiners),
      isDraggableTransformers: t.isDraggableTransformers.concat(e.isDraggableTransformers),
      eventDragMutationMassagers: t.eventDragMutationMassagers.concat(e.eventDragMutationMassagers),
      eventDefMutationAppliers: t.eventDefMutationAppliers.concat(e.eventDefMutationAppliers),
      dateSelectionTransformers: t.dateSelectionTransformers.concat(e.dateSelectionTransformers),
      datePointTransforms: t.datePointTransforms.concat(e.datePointTransforms),
      dateSpanTransforms: t.dateSpanTransforms.concat(e.dateSpanTransforms),
      views: Object.assign(Object.assign({}, t.views), e.views),
      viewPropsTransformers: t.viewPropsTransformers.concat(e.viewPropsTransformers),
      isPropsValid: e.isPropsValid || t.isPropsValid,
      externalDefTransforms: t.externalDefTransforms.concat(e.externalDefTransforms),
      viewContainerAppends: t.viewContainerAppends.concat(e.viewContainerAppends),
      eventDropTransformers: t.eventDropTransformers.concat(e.eventDropTransformers),
      calendarInteractions: t.calendarInteractions.concat(e.calendarInteractions),
      componentInteractions: t.componentInteractions.concat(e.componentInteractions),
      themeClasses: Object.assign(Object.assign({}, t.themeClasses), e.themeClasses),
      eventSourceDefs: t.eventSourceDefs.concat(e.eventSourceDefs),
      cmdFormatter: e.cmdFormatter || t.cmdFormatter,
      recurringTypes: t.recurringTypes.concat(e.recurringTypes),
      namedTimeZonedImpl: e.namedTimeZonedImpl || t.namedTimeZonedImpl,
      initialView: t.initialView || e.initialView,
      elementDraggingImpl: t.elementDraggingImpl || e.elementDraggingImpl,
      optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), e.optionChangeHandlers),
      scrollGridImpl: e.scrollGridImpl || t.scrollGridImpl,
      listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), e.listenerRefiners),
      optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), e.optionRefiners),
      propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), e.propSetHandlers)
    };
  }
  function pk(t, e) {
    return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
  }
  class Cr extends Ni {
  }
  Cr.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
  };
  Cr.prototype.baseIconClass = "fc-icon";
  Cr.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
  };
  Cr.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
  };
  Cr.prototype.iconOverrideOption = "buttonIcons";
  Cr.prototype.iconOverrideCustomButtonOption = "icon";
  Cr.prototype.iconOverridePrefix = "fc-icon-";
  function gk(t, e) {
    let n = {}, r;
    for (r in t) Zl(r, n, t, e);
    for (r in e) Zl(r, n, t, e);
    return n;
  }
  function Zl(t, e, n, r) {
    if (e[t]) return e[t];
    let s = yk(t, e, n, r);
    return s && (e[t] = s), s;
  }
  function yk(t, e, n, r) {
    let s = n[t], i = r[t], a = (f) => s && s[f] !== null ? s[f] : i && i[f] !== null ? i[f] : null, l = a("component"), c = a("superType"), d = null;
    if (c) {
      if (c === t) throw new Error("Can't have a custom view type that references itself");
      d = Zl(c, e, n, r);
    }
    return !l && d && (l = d.component), l ? {
      type: t,
      component: l,
      defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), s ? s.rawOptions : {}),
      overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), i ? i.rawOptions : {})
    } : null;
  }
  function hf(t) {
    return er(t, vk);
  }
  function vk(t) {
    let e = typeof t == "function" ? {
      component: t
    } : t, { component: n } = e;
    return e.content ? n = mf(e) : n && !(n.prototype instanceof ze) && (n = mf(Object.assign(Object.assign({}, e), {
      content: n
    }))), {
      superType: e.type,
      component: n,
      rawOptions: e
    };
  }
  function mf(t) {
    return (e) => M(nr.Consumer, null, (n) => M(Pt, {
      elTag: "div",
      elClasses: lm(n.viewSpec),
      renderProps: Object.assign(Object.assign({}, e), {
        nextDayThreshold: n.options.nextDayThreshold
      }),
      generatorName: void 0,
      customGenerator: t.content,
      classNameGenerator: t.classNames,
      didMount: t.didMount,
      willUnmount: t.willUnmount
    }));
  }
  function bk(t, e, n, r) {
    let s = hf(t), i = hf(e.views), a = gk(s, i);
    return er(a, (l) => wk(l, i, e, n, r));
  }
  function wk(t, e, n, r, s) {
    let i = t.overrides.duration || t.defaults.duration || r.duration || n.duration, a = null, l = "", c = "", d = {};
    if (i && (a = Sk(i), a)) {
      let g = jl(a);
      l = g.unit, g.value === 1 && (c = l, d = e[l] ? e[l].rawOptions : {});
    }
    let f = (g) => {
      let y = g.buttonText || {}, v = t.defaults.buttonTextKey;
      return v != null && y[v] != null ? y[v] : y[t.type] != null ? y[t.type] : y[c] != null ? y[c] : null;
    }, m = (g) => {
      let y = g.buttonHints || {}, v = t.defaults.buttonTextKey;
      return v != null && y[v] != null ? y[v] : y[t.type] != null ? y[t.type] : y[c] != null ? y[c] : null;
    };
    return {
      type: t.type,
      component: t.component,
      duration: a,
      durationUnit: l,
      singleUnit: c,
      optionDefaults: t.defaults,
      optionOverrides: Object.assign(Object.assign({}, d), t.overrides),
      buttonTextOverride: f(r) || f(n) || t.overrides.buttonText,
      buttonTextDefault: f(s) || t.defaults.buttonText || f(Ur) || t.type,
      buttonTitleOverride: m(r) || m(n) || t.overrides.buttonHint,
      buttonTitleDefault: m(s) || t.defaults.buttonHint || m(Ur)
    };
  }
  let pf = {};
  function Sk(t) {
    let e = JSON.stringify(t), n = pf[e];
    return n === void 0 && (n = Pe(t), pf[e] = n), n;
  }
  function _k(t, e) {
    return e.type === "CHANGE_VIEW_TYPE" && (t = e.viewType), t;
  }
  function Dk(t, e) {
    return e.type === "CHANGE_DATE" ? e.dateMarker : t;
  }
  function kk(t, e, n) {
    let r = t.initialDate;
    return r != null ? e.createMarker(r) : n.getDateMarker();
  }
  function Tk(t, e) {
    return e.type === "SET_OPTION" ? Object.assign(Object.assign({}, t), {
      [e.optionName]: e.rawOptionValue
    }) : t;
  }
  function xk(t, e, n, r) {
    let s;
    switch (e.type) {
      case "CHANGE_VIEW_TYPE":
        return r.build(e.dateMarker || n);
      case "CHANGE_DATE":
        return r.build(e.dateMarker);
      case "PREV":
        if (s = r.buildPrev(t, n), s.isValid) return s;
        break;
      case "NEXT":
        if (s = r.buildNext(t, n), s.isValid) return s;
        break;
    }
    return t;
  }
  function Mk(t, e, n) {
    let r = e ? e.activeRange : null;
    return Qm({}, Pk(t, n), r, n);
  }
  function Ek(t, e, n, r) {
    let s = n ? n.activeRange : null;
    switch (e.type) {
      case "ADD_EVENT_SOURCES":
        return Qm(t, e.sources, s, r);
      case "REMOVE_EVENT_SOURCE":
        return Ak(t, e.sourceId);
      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return n ? Xm(t, s, r) : t;
      case "FETCH_EVENT_SOURCES":
        return Wc(t, e.sourceIds ? rm(e.sourceIds) : Jm(t, r), s, e.isRefetch || false, r);
      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
        return Ik(t, e.sourceId, e.fetchId, e.fetchRange);
      case "REMOVE_ALL_EVENT_SOURCES":
        return {};
      default:
        return t;
    }
  }
  function Ck(t, e, n) {
    let r = e ? e.activeRange : null;
    return Wc(t, Jm(t, n), r, true, n);
  }
  function qm(t) {
    for (let e in t) if (t[e].isFetching) return true;
    return false;
  }
  function Qm(t, e, n, r) {
    let s = {};
    for (let i of e) s[i.sourceId] = i;
    return n && (s = Xm(s, n, r)), Object.assign(Object.assign({}, t), s);
  }
  function Ak(t, e) {
    return Gr(t, (n) => n.sourceId !== e);
  }
  function Xm(t, e, n) {
    return Wc(t, Gr(t, (r) => Rk(r, e, n)), e, false, n);
  }
  function Rk(t, e, n) {
    return Km(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
  }
  function Wc(t, e, n, r, s) {
    let i = {};
    for (let a in t) {
      let l = t[a];
      e[a] ? i[a] = Ok(l, n, r, s) : i[a] = l;
    }
    return i;
  }
  function Ok(t, e, n, r) {
    let { options: s, calendarApi: i } = r, a = r.pluginHooks.eventSourceDefs[t.sourceDefId], l = Jr();
    return a.fetch({
      eventSource: t,
      range: e,
      isRefetch: n,
      context: r
    }, (c) => {
      let { rawEvents: d } = c;
      s.eventSourceSuccess && (d = s.eventSourceSuccess.call(i, d, c.response) || d), t.success && (d = t.success.call(i, d, c.response) || d), r.dispatch({
        type: "RECEIVE_EVENTS",
        sourceId: t.sourceId,
        fetchId: l,
        fetchRange: e,
        rawEvents: d
      });
    }, (c) => {
      let d = false;
      s.eventSourceFailure && (s.eventSourceFailure.call(i, c), d = true), t.failure && (t.failure(c), d = true), d || console.warn(c.message, c), r.dispatch({
        type: "RECEIVE_EVENT_ERROR",
        sourceId: t.sourceId,
        fetchId: l,
        fetchRange: e,
        error: c
      });
    }), Object.assign(Object.assign({}, t), {
      isFetching: true,
      latestFetchId: l
    });
  }
  function Ik(t, e, n, r) {
    let s = t[e];
    return s && n === s.latestFetchId ? Object.assign(Object.assign({}, t), {
      [e]: Object.assign(Object.assign({}, s), {
        isFetching: false,
        fetchRange: r
      })
    }) : t;
  }
  function Jm(t, e) {
    return Gr(t, (n) => Km(n, e));
  }
  function Pk(t, e) {
    let n = pm(e), r = [].concat(t.eventSources || []), s = [];
    t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
    for (let i of r) {
      let a = mm(i, e, n);
      a && s.push(a);
    }
    return s;
  }
  function Km(t, e) {
    return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
  }
  function Nk(t, e) {
    switch (e.type) {
      case "UNSELECT_DATES":
        return null;
      case "SELECT_DATES":
        return e.selection;
      default:
        return t;
    }
  }
  function Lk(t, e) {
    switch (e.type) {
      case "UNSELECT_EVENT":
        return "";
      case "SELECT_EVENT":
        return e.eventInstanceId;
      default:
        return t;
    }
  }
  function Yk(t, e) {
    let n;
    switch (e.type) {
      case "UNSET_EVENT_DRAG":
        return null;
      case "SET_EVENT_DRAG":
        return n = e.state, {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };
      default:
        return t;
    }
  }
  function Fk(t, e) {
    let n;
    switch (e.type) {
      case "UNSET_EVENT_RESIZE":
        return null;
      case "SET_EVENT_RESIZE":
        return n = e.state, {
          affectedEvents: n.affectedEvents,
          mutatedEvents: n.mutatedEvents,
          isEvent: n.isEvent
        };
      default:
        return t;
    }
  }
  function Hk(t, e, n, r, s) {
    let i = t.headerToolbar ? gf(t.headerToolbar, t, e, n, r, s) : null, a = t.footerToolbar ? gf(t.footerToolbar, t, e, n, r, s) : null;
    return {
      header: i,
      footer: a
    };
  }
  function gf(t, e, n, r, s, i) {
    let a = {}, l = [], c = false;
    for (let d in t) {
      let f = t[d], m = jk(f, e, n, r, s, i);
      a[d] = m.widgets, l.push(...m.viewsWithButtons), c = c || m.hasTitle;
    }
    return {
      sectionWidgets: a,
      viewsWithButtons: l,
      hasTitle: c
    };
  }
  function jk(t, e, n, r, s, i) {
    let a = e.direction === "rtl", l = e.customButtons || {}, c = n.buttonText || {}, d = e.buttonText || {}, f = n.buttonHints || {}, m = e.buttonHints || {}, g = t ? t.split(" ") : [], y = [], v = false;
    return {
      widgets: g.map((b) => b.split(",").map((_) => {
        if (_ === "title") return v = true, {
          buttonName: _
        };
        let E, R, T, x, N, I;
        if (E = l[_]) T = (O) => {
          E.click && E.click.call(O.target, O, O.target);
        }, (x = r.getCustomButtonIconClass(E)) || (x = r.getIconClass(_, a)) || (N = E.text), I = E.hint || E.text;
        else if (R = s[_]) {
          y.push(_), T = () => {
            i.changeView(_);
          }, (N = R.buttonTextOverride) || (x = r.getIconClass(_, a)) || (N = R.buttonTextDefault);
          let O = R.buttonTextOverride || R.buttonTextDefault;
          I = fi(R.buttonTitleOverride || R.buttonTitleDefault || e.viewHint, [
            O,
            _
          ], O);
        } else if (i[_]) if (T = () => {
          i[_]();
        }, (N = c[_]) || (x = r.getIconClass(_, a)) || (N = d[_]), _ === "prevYear" || _ === "nextYear") {
          let O = _ === "prevYear" ? "prev" : "next";
          I = fi(f[O] || m[O], [
            d.year || "year",
            "year"
          ], d[_]);
        } else I = (O) => fi(f[_] || m[_], [
          d[O] || O,
          O
        ], d[_]);
        return {
          buttonName: _,
          buttonClick: T,
          buttonIcon: x,
          buttonText: N,
          buttonHint: I
        };
      })),
      viewsWithButtons: y,
      hasTitle: v
    };
  }
  class Vk {
    constructor(e, n, r) {
      this.type = e, this.getCurrentData = n, this.dateEnv = r;
    }
    get calendar() {
      return this.getCurrentData().calendarApi;
    }
    get title() {
      return this.getCurrentData().viewTitle;
    }
    get activeStart() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    }
    get activeEnd() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    }
    get currentStart() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    }
    get currentEnd() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    }
    getOption(e) {
      return this.getCurrentData().options[e];
    }
  }
  let Wk = {
    ignoreRange: true,
    parseMeta(t) {
      return Array.isArray(t.events) ? t.events : null;
    },
    fetch(t, e) {
      e({
        rawEvents: t.eventSource.meta
      });
    }
  };
  const Uk = fn({
    name: "array-event-source",
    eventSourceDefs: [
      Wk
    ]
  });
  let Bk = {
    parseMeta(t) {
      return typeof t.events == "function" ? t.events : null;
    },
    fetch(t, e, n) {
      const { dateEnv: r } = t.context, s = t.eventSource.meta;
      e0(s.bind(null, _m(t.range, r)), (i) => e({
        rawEvents: i
      }), n);
    }
  };
  const zk = fn({
    name: "func-event-source",
    eventSourceDefs: [
      Bk
    ]
  }), $k = {
    method: String,
    extraParams: V,
    startParam: String,
    endParam: String,
    timeZoneParam: String
  };
  let Gk = {
    parseMeta(t) {
      return t.url && (t.format === "json" || !t.format) ? {
        url: t.url,
        format: "json",
        method: (t.method || "GET").toUpperCase(),
        extraParams: t.extraParams,
        startParam: t.startParam,
        endParam: t.endParam,
        timeZoneParam: t.timeZoneParam
      } : null;
    },
    fetch(t, e, n) {
      const { meta: r } = t.eventSource, s = qk(r, t.range, t.context);
      t0(r.method, r.url, s).then(([i, a]) => {
        e({
          rawEvents: i,
          response: a
        });
      }, n);
    }
  };
  const Zk = fn({
    name: "json-event-source",
    eventSourceRefiners: $k,
    eventSourceDefs: [
      Gk
    ]
  });
  function qk(t, e, n) {
    let { dateEnv: r, options: s } = n, i, a, l, c, d = {};
    return i = t.startParam, i == null && (i = s.startParam), a = t.endParam, a == null && (a = s.endParam), l = t.timeZoneParam, l == null && (l = s.timeZoneParam), typeof t.extraParams == "function" ? c = t.extraParams() : c = t.extraParams || {}, Object.assign(d, c), d[i] = r.formatIso(e.start), d[a] = r.formatIso(e.end), r.timeZone !== "local" && (d[l] = r.timeZone), d;
  }
  const Qk = {
    daysOfWeek: V,
    startTime: Pe,
    endTime: Pe,
    duration: Pe,
    startRecur: V,
    endRecur: V
  };
  let Xk = {
    parse(t, e) {
      if (t.daysOfWeek || t.startTime || t.endTime || t.startRecur || t.endRecur) {
        let n = {
          daysOfWeek: t.daysOfWeek || null,
          startTime: t.startTime || null,
          endTime: t.endTime || null,
          startRecur: t.startRecur ? e.createMarker(t.startRecur) : null,
          endRecur: t.endRecur ? e.createMarker(t.endRecur) : null,
          dateEnv: e
        }, r;
        return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = f_(t.endTime, t.startTime)), {
          allDayGuess: !t.startTime && !t.endTime,
          duration: r,
          typeData: n
        };
      }
      return null;
    },
    expand(t, e, n) {
      let r = Tr(e, {
        start: t.startRecur,
        end: t.endRecur
      });
      return r ? Kk(t.daysOfWeek, t.startTime, t.dateEnv, n, r) : [];
    }
  };
  const Jk = fn({
    name: "simple-recurring-event",
    recurringTypes: [
      Xk
    ],
    eventRefiners: Qk
  });
  function Kk(t, e, n, r, s) {
    let i = t ? rm(t) : null, a = Xe(s.start), l = s.end, c = [];
    for (e && (e.milliseconds < 0 ? l = ut(l, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (a = ut(a, -1))); a < l; ) {
      let d;
      (!i || i[a.getUTCDay()]) && (e ? d = r.add(a, e) : d = a, c.push(r.createMarker(n.toDate(d)))), a = ut(a, 1);
    }
    return c;
  }
  const eT = fn({
    name: "change-handler",
    optionChangeHandlers: {
      events(t, e) {
        yf([
          t
        ], e);
      },
      eventSources: yf
    }
  });
  function yf(t, e) {
    let n = bc(e.getCurrentData().eventSources);
    if (n.length === 1 && t.length === 1 && Array.isArray(n[0]._raw) && Array.isArray(t[0])) {
      e.dispatch({
        type: "RESET_RAW_EVENTS",
        sourceId: n[0].sourceId,
        rawEvents: t[0]
      });
      return;
    }
    let r = [];
    for (let s of t) {
      let i = false;
      for (let a = 0; a < n.length; a += 1) if (n[a]._raw === s) {
        n.splice(a, 1), i = true;
        break;
      }
      i || r.push(s);
    }
    for (let s of n) e.dispatch({
      type: "REMOVE_EVENT_SOURCE",
      sourceId: s.sourceId
    });
    for (let s of r) e.calendarApi.addEventSource(s);
  }
  function tT(t, e) {
    e.emitter.trigger("datesSet", Object.assign(Object.assign({}, _m(t.activeRange, e.dateEnv)), {
      view: e.viewApi
    }));
  }
  function nT(t, e) {
    let { emitter: n } = e;
    n.hasHandlers("eventsSet") && n.trigger("eventsSet", Br(t, e));
  }
  const rT = [
    Uk,
    zk,
    Zk,
    Jk,
    eT,
    fn({
      name: "misc",
      isLoadingFuncs: [
        (t) => qm(t.eventSources)
      ],
      propSetHandlers: {
        dateProfile: tT,
        eventStore: nT
      }
    })
  ];
  class sT {
    constructor(e, n) {
      this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new mc(this.drain.bind(this));
    }
    request(e, n) {
      this.queue.push(e), this.delayedRunner.request(n);
    }
    pause(e) {
      this.delayedRunner.pause(e);
    }
    resume(e, n) {
      this.delayedRunner.resume(e, n);
    }
    drain() {
      let { queue: e } = this;
      for (; e.length; ) {
        let n = [], r;
        for (; r = e.shift(); ) this.runTask(r), n.push(r);
        this.drained(n);
      }
    }
    runTask(e) {
      this.runTaskOption && this.runTaskOption(e);
    }
    drained(e) {
      this.drainedOption && this.drainedOption(e);
    }
  }
  function iT(t, e, n) {
    let r;
    return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, nt(e.titleFormat || aT(t)), {
      isEndExclusive: t.isRangeAllDay,
      defaultSeparator: e.titleRangeSeparator
    });
  }
  function aT(t) {
    let { currentRangeUnit: e } = t;
    if (e === "year") return {
      year: "numeric"
    };
    if (e === "month") return {
      year: "numeric",
      month: "long"
    };
    let n = Fa(t.currentRange.start, t.currentRange.end);
    return n !== null && n > 1 ? {
      year: "numeric",
      month: "short",
      day: "numeric"
    } : {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
  }
  class vf {
    constructor() {
      this.resetListeners = /* @__PURE__ */ new Set();
    }
    handleInput(e, n) {
      const r = this.dateEnv;
      if (e !== r && (typeof n == "function" ? this.nowFn = n : r || (this.nowAnchorDate = e.toDate(n ? e.createMarker(n) : e.createNowMarker()), this.nowAnchorQueried = Date.now()), this.dateEnv = e, r)) for (const s of this.resetListeners.values()) s();
    }
    getDateMarker() {
      return this.nowAnchorDate ? this.dateEnv.timestampToMarker(this.nowAnchorDate.valueOf() + (Date.now() - this.nowAnchorQueried)) : this.dateEnv.createMarker(this.nowFn());
    }
    addResetListener(e) {
      this.resetListeners.add(e);
    }
    removeResetListener(e) {
      this.resetListeners.delete(e);
    }
  }
  class oT {
    constructor(e) {
      this.computeCurrentViewData = Te(this._computeCurrentViewData), this.organizeRawLocales = Te(ck), this.buildLocale = Te(Gm), this.buildPluginHooks = hk(), this.buildDateEnv = Te(lT), this.buildTheme = Te(cT), this.parseToolbars = Te(Hk), this.buildViewSpecs = Te(bk), this.buildDateProfileGenerator = ka(uT), this.buildViewApi = Te(dT), this.buildViewUiProps = ka(mT), this.buildEventUiBySource = Te(fT, ln), this.buildEventUiBases = Te(hT), this.parseContextBusinessHours = ka(pT), this.buildTitle = Te(iT), this.nowManager = new vf(), this.emitter = new wo(), this.actionRunner = new sT(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (g) => {
        this.actionRunner.request(g);
      }, this.props = e, this.actionRunner.pause(), this.nowManager = new vf();
      let n = {}, r = this.computeOptionsData(e.optionOverrides, n, e.calendarApi), s = r.calendarOptions.initialView || r.pluginHooks.initialView, i = this.computeCurrentViewData(s, r, e.optionOverrides, n);
      e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);
      let a = {
        nowManager: this.nowManager,
        dateEnv: r.dateEnv,
        options: r.calendarOptions,
        pluginHooks: r.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, l = kk(r.calendarOptions, r.dateEnv, this.nowManager), c = i.dateProfileGenerator.build(l);
      Zn(c.activeRange, l) || (l = c.currentRange.start);
      for (let g of r.pluginHooks.contextInit) g(a);
      let d = Mk(r.calendarOptions, c, a), f = {
        dynamicOptionOverrides: n,
        currentViewType: s,
        currentDate: l,
        dateProfile: c,
        businessHours: this.parseContextBusinessHours(a),
        eventSources: d,
        eventUiBases: {},
        eventStore: Ot(),
        renderableEventStore: Ot(),
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(a).selectionConfig
      }, m = Object.assign(Object.assign({}, a), f);
      for (let g of r.pluginHooks.reducers) Object.assign(f, g(null, null, m));
      Tl(f, a) && this.emitter.trigger("loading", true), this.state = f, this.updateData(), this.actionRunner.resume();
    }
    resetOptions(e, n) {
      let { props: r } = this;
      n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
        type: "NOTHING"
      });
    }
    _handleAction(e) {
      let { props: n, state: r, emitter: s } = this, i = Tk(r.dynamicOptionOverrides, e), a = this.computeOptionsData(n.optionOverrides, i, n.calendarApi), l = _k(r.currentViewType, e), c = this.computeCurrentViewData(l, a, n.optionOverrides, i);
      n.calendarApi.currentDataManager = this, s.setThisContext(n.calendarApi), s.setOptions(c.options);
      let d = {
        nowManager: this.nowManager,
        dateEnv: a.dateEnv,
        options: a.calendarOptions,
        pluginHooks: a.pluginHooks,
        calendarApi: n.calendarApi,
        dispatch: this.dispatch,
        emitter: s,
        getCurrentData: this.getCurrentData
      }, { currentDate: f, dateProfile: m } = r;
      this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (m = c.dateProfileGenerator.build(f)), f = Dk(f, e), m = xk(m, e, f, c.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !Zn(m.currentRange, f)) && (f = m.currentRange.start);
      let g = Ek(r.eventSources, e, m, d), y = MD(r.eventStore, e, g, m, d), S = qm(g) && !c.options.progressiveEventRendering && r.renderableEventStore || y, { eventUiSingleBase: b, selectionConfig: _ } = this.buildViewUiProps(d), E = this.buildEventUiBySource(g), R = this.buildEventUiBases(S.defs, b, E), T = {
        dynamicOptionOverrides: i,
        currentViewType: l,
        currentDate: f,
        dateProfile: m,
        eventSources: g,
        eventStore: y,
        renderableEventStore: S,
        selectionConfig: _,
        eventUiBases: R,
        businessHours: this.parseContextBusinessHours(d),
        dateSelection: Nk(r.dateSelection, e),
        eventSelection: Lk(r.eventSelection, e),
        eventDrag: Yk(r.eventDrag, e),
        eventResize: Fk(r.eventResize, e)
      }, x = Object.assign(Object.assign({}, d), T);
      for (let O of a.pluginHooks.reducers) Object.assign(T, O(r, e, x));
      let N = Tl(r, d), I = Tl(T, d);
      !N && I ? s.trigger("loading", true) : N && !I && s.trigger("loading", false), this.state = T, n.onAction && n.onAction(e);
    }
    updateData() {
      let { props: e, state: n } = this, r = this.data, s = this.computeOptionsData(e.optionOverrides, n.dynamicOptionOverrides, e.calendarApi), i = this.computeCurrentViewData(n.currentViewType, s, e.optionOverrides, n.dynamicOptionOverrides), a = this.data = Object.assign(Object.assign(Object.assign({
        nowManager: this.nowManager,
        viewTitle: this.buildTitle(n.dateProfile, i.options, s.dateEnv),
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData
      }, s), i), n), l = s.pluginHooks.optionChangeHandlers, c = r && r.calendarOptions, d = s.calendarOptions;
      if (c && c !== d) {
        c.timeZone !== d.timeZone && (n.eventSources = a.eventSources = Ck(a.eventSources, n.dateProfile, a), n.eventStore = a.eventStore = cf(a.eventStore, r.dateEnv, a.dateEnv), n.renderableEventStore = a.renderableEventStore = cf(a.renderableEventStore, r.dateEnv, a.dateEnv));
        for (let f in l) (this.optionsForHandling.indexOf(f) !== -1 || c[f] !== d[f]) && l[f](d[f], a);
      }
      this.optionsForHandling = [], e.onData && e.onData(a);
    }
    computeOptionsData(e, n, r) {
      if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides) return this.stableCalendarOptionsData;
      let { refinedOptions: s, pluginHooks: i, localeDefaults: a, availableLocaleData: l, extra: c } = this.processRawCalendarOptions(e, n);
      bf(c);
      let d = this.buildDateEnv(s.timeZone, s.locale, s.weekNumberCalculation, s.firstDay, s.weekText, i, l, s.defaultRangeSeparator), f = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, a), m = this.buildTheme(s, i), g = this.parseToolbars(s, this.stableOptionOverrides, m, f, r);
      return this.stableCalendarOptionsData = {
        calendarOptions: s,
        pluginHooks: i,
        dateEnv: d,
        viewSpecs: f,
        theme: m,
        toolbarConfig: g,
        localeDefaults: a,
        availableRawLocales: l.map
      };
    }
    processRawCalendarOptions(e, n) {
      let { locales: r, locale: s } = gl([
        Ur,
        e,
        n
      ]), i = this.organizeRawLocales(r), a = i.map, l = this.buildLocale(s || i.defaultCode, a).options, c = this.buildPluginHooks(e.plugins || [], rT), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, nf), rf), sf), c.listenerRefiners), c.optionRefiners), f = {}, m = gl([
        Ur,
        l,
        e,
        n
      ]), g = {}, y = this.currentCalendarOptionsInput, v = this.currentCalendarOptionsRefined, S = false;
      for (let b in m) this.optionsForRefining.indexOf(b) === -1 && (m[b] === y[b] || Hr[b] && b in y && Hr[b](y[b], m[b])) ? g[b] = v[b] : d[b] ? (g[b] = d[b](m[b]), S = true) : f[b] = y[b];
      return S && (this.currentCalendarOptionsInput = m, this.currentCalendarOptionsRefined = g, this.stableOptionOverrides = e, this.stableDynamicOptionOverrides = n), this.optionsForHandling.push(...this.optionsForRefining), this.optionsForRefining = [], {
        rawOptions: this.currentCalendarOptionsInput,
        refinedOptions: this.currentCalendarOptionsRefined,
        pluginHooks: c,
        availableLocaleData: i,
        localeDefaults: l,
        extra: f
      };
    }
    _computeCurrentViewData(e, n, r, s) {
      let i = n.viewSpecs[e];
      if (!i) throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
      let { refinedOptions: a, extra: l } = this.processRawViewOptions(i, n.pluginHooks, n.localeDefaults, r, s);
      bf(l), this.nowManager.handleInput(n.dateEnv, a.now);
      let c = this.buildDateProfileGenerator({
        dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
        nowManager: this.nowManager,
        duration: i.duration,
        durationUnit: i.durationUnit,
        usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
        dateEnv: n.dateEnv,
        calendarApi: this.props.calendarApi,
        slotMinTime: a.slotMinTime,
        slotMaxTime: a.slotMaxTime,
        showNonCurrentDates: a.showNonCurrentDates,
        dayCount: a.dayCount,
        dateAlignment: a.dateAlignment,
        dateIncrement: a.dateIncrement,
        hiddenDays: a.hiddenDays,
        weekends: a.weekends,
        validRangeInput: a.validRange,
        visibleRangeInput: a.visibleRange,
        fixedWeekCount: a.fixedWeekCount
      }), d = this.buildViewApi(e, this.getCurrentData, n.dateEnv);
      return {
        viewSpec: i,
        options: a,
        dateProfileGenerator: c,
        viewApi: d
      };
    }
    processRawViewOptions(e, n, r, s, i) {
      let a = gl([
        Ur,
        e.optionDefaults,
        r,
        s,
        e.optionOverrides,
        i
      ]), l = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, nf), rf), sf), z_), n.listenerRefiners), n.optionRefiners), c = {}, d = this.currentViewOptionsInput, f = this.currentViewOptionsRefined, m = false, g = {};
      for (let y in a) a[y] === d[y] || Hr[y] && Hr[y](a[y], d[y]) ? c[y] = f[y] : (a[y] === this.currentCalendarOptionsInput[y] || Hr[y] && Hr[y](a[y], this.currentCalendarOptionsInput[y]) ? y in this.currentCalendarOptionsRefined && (c[y] = this.currentCalendarOptionsRefined[y]) : l[y] ? c[y] = l[y](a[y]) : g[y] = a[y], m = true);
      return m && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = c), {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: g
      };
    }
  }
  function lT(t, e, n, r, s, i, a, l) {
    let c = Gm(e || a.defaultCode, a.map);
    return new tD({
      calendarSystem: "gregory",
      timeZone: t,
      namedTimeZoneImpl: i.namedTimeZonedImpl,
      locale: c,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: s,
      cmdFormatter: i.cmdFormatter,
      defaultSeparator: l
    });
  }
  function cT(t, e) {
    let n = e.themeClasses[t.themeSystem] || Cr;
    return new n(t);
  }
  function uT(t) {
    let e = t.dateProfileGeneratorClass || um;
    return new e(t);
  }
  function dT(t, e, n) {
    return new Vk(t, e, n);
  }
  function fT(t) {
    return er(t, (e) => e.ui);
  }
  function hT(t, e, n) {
    let r = {
      "": e
    };
    for (let s in t) {
      let i = t[s];
      i.sourceId && n[i.sourceId] && (r[s] = n[i.sourceId]);
    }
    return r;
  }
  function mT(t) {
    let { options: e } = t;
    return {
      eventUiSingleBase: za({
        display: e.eventDisplay,
        editable: e.editable,
        startEditable: e.eventStartEditable,
        durationEditable: e.eventDurationEditable,
        constraint: e.eventConstraint,
        overlap: typeof e.eventOverlap == "boolean" ? e.eventOverlap : void 0,
        allow: e.eventAllow,
        backgroundColor: e.eventBackgroundColor,
        borderColor: e.eventBorderColor,
        textColor: e.eventTextColor,
        color: e.eventColor
      }, t),
      selectionConfig: za({
        constraint: e.selectConstraint,
        overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
        allow: e.selectAllow
      }, t)
    };
  }
  function Tl(t, e) {
    for (let n of e.pluginHooks.isLoadingFuncs) if (n(t)) return true;
    return false;
  }
  function pT(t) {
    return LD(t.options.businessHours, t);
  }
  function bf(t, e) {
    for (let n in t) console.warn(`Unknown option '${n}'`);
  }
  class gT extends ze {
    render() {
      let e = this.props.widgetGroups.map((n) => this.renderWidgetGroup(n));
      return M("div", {
        className: "fc-toolbar-chunk"
      }, ...e);
    }
    renderWidgetGroup(e) {
      let { props: n } = this, { theme: r } = this.context, s = [], i = true;
      for (let a of e) {
        let { buttonName: l, buttonClick: c, buttonText: d, buttonIcon: f, buttonHint: m } = a;
        if (l === "title") i = false, s.push(M("h2", {
          className: "fc-toolbar-title",
          id: n.titleId
        }, n.title));
        else {
          let g = l === n.activeButton, y = !n.isTodayEnabled && l === "today" || !n.isPrevEnabled && l === "prev" || !n.isNextEnabled && l === "next", v = [
            `fc-${l}-button`,
            r.getClass("button")
          ];
          g && v.push(r.getClass("buttonActive")), s.push(M("button", {
            type: "button",
            title: typeof m == "function" ? m(n.navUnit) : m,
            disabled: y,
            "aria-pressed": g,
            className: v.join(" "),
            onClick: c
          }, d || (f ? M("span", {
            className: f,
            role: "img"
          }) : "")));
        }
      }
      if (s.length > 1) {
        let a = i && r.getClass("buttonGroup") || "";
        return M("div", {
          className: a
        }, ...s);
      }
      return s[0];
    }
  }
  class wf extends ze {
    render() {
      let { model: e, extraClassName: n } = this.props, r = false, s, i, a = e.sectionWidgets, l = a.center;
      return a.left ? (r = true, s = a.left) : s = a.start, a.right ? (r = true, i = a.right) : i = a.end, M("div", {
        className: [
          n || "",
          "fc-toolbar",
          r ? "fc-toolbar-ltr" : ""
        ].join(" ")
      }, this.renderSection("start", s || []), this.renderSection("center", l || []), this.renderSection("end", i || []));
    }
    renderSection(e, n) {
      let { props: r } = this;
      return M(gT, {
        key: e,
        widgetGroups: n,
        title: r.title,
        navUnit: r.navUnit,
        activeButton: r.activeButton,
        isTodayEnabled: r.isTodayEnabled,
        isPrevEnabled: r.isPrevEnabled,
        isNextEnabled: r.isNextEnabled,
        titleId: r.titleId
      });
    }
  }
  class yT extends ze {
    constructor() {
      super(...arguments), this.state = {
        availableWidth: null
      }, this.handleEl = (e) => {
        this.el = e, kn(this.props.elRef, e), this.updateAvailableWidth();
      }, this.handleResize = () => {
        this.updateAvailableWidth();
      };
    }
    render() {
      let { props: e, state: n } = this, { aspectRatio: r } = e, s = [
        "fc-view-harness",
        r || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"
      ], i = "", a = "";
      return r ? n.availableWidth !== null ? i = n.availableWidth / r : a = `${1 / r * 100}%` : i = e.height || "", M("div", {
        "aria-labelledby": e.labeledById,
        ref: this.handleEl,
        className: s.join(" "),
        style: {
          height: i,
          paddingBottom: a
        }
      }, e.children);
    }
    componentDidMount() {
      this.context.addResizeHandler(this.handleResize);
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    updateAvailableWidth() {
      this.el && this.props.aspectRatio && this.setState({
        availableWidth: this.el.offsetWidth
      });
    }
  }
  class vT extends Fs {
    constructor(e) {
      super(e), this.handleSegClick = (n, r) => {
        let { component: s } = this, { context: i } = s, a = Is(r);
        if (a && s.isValidSegDownEl(n.target)) {
          let l = At(n.target, ".fc-event-forced-url"), c = l ? l.querySelector("a[href]").href : "";
          i.emitter.trigger("eventClick", {
            el: r,
            event: new rt(s.context, a.eventRange.def, a.eventRange.instance),
            jsEvent: n,
            view: i.viewApi
          }), c && !n.defaultPrevented && (window.location.href = c);
        }
      }, this.destroy = Jh(e.el, "click", ".fc-event", this.handleSegClick);
    }
  }
  class bT extends Fs {
    constructor(e) {
      super(e), this.handleEventElRemove = (n) => {
        n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
      }, this.handleSegEnter = (n, r) => {
        Is(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
      }, this.handleSegLeave = (n, r) => {
        this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
      }, this.removeHoverListeners = XS(e.el, ".fc-event", this.handleSegEnter, this.handleSegLeave);
    }
    destroy() {
      this.removeHoverListeners();
    }
    triggerEvent(e, n, r) {
      let { component: s } = this, { context: i } = s, a = Is(r);
      (!n || s.isValidSegDownEl(n.target)) && i.emitter.trigger(e, {
        el: r,
        event: new rt(i, a.eventRange.def, a.eventRange.instance),
        jsEvent: n,
        view: i.viewApi
      });
    }
  }
  class wT extends Kr {
    constructor() {
      super(...arguments), this.buildViewContext = Te(sD), this.buildViewPropTransformers = Te(_T), this.buildToolbarProps = Te(ST), this.headerRef = Ft(), this.footerRef = Ft(), this.interactionsStore = {}, this.state = {
        viewLabelId: wr()
      }, this.registerInteractiveComponent = (e, n) => {
        let r = s0(e, n), a = [
          vT,
          bT
        ].concat(this.props.pluginHooks.componentInteractions).map((l) => new l(r));
        this.interactionsStore[e.uid] = a, Ga[e.uid] = r;
      }, this.unregisterInteractiveComponent = (e) => {
        let n = this.interactionsStore[e.uid];
        if (n) {
          for (let r of n) r.destroy();
          delete this.interactionsStore[e.uid];
        }
        delete Ga[e.uid];
      }, this.resizeRunner = new mc(() => {
        this.props.emitter.trigger("_resize", true), this.props.emitter.trigger("windowResize", {
          view: this.props.viewApi
        });
      }), this.handleWindowResize = (e) => {
        let { options: n } = this.props;
        n.handleWindowResize && e.target === window && this.resizeRunner.request(n.windowResizeDelay);
      };
    }
    render() {
      let { props: e } = this, { toolbarConfig: n, options: r } = e, s = false, i = "", a;
      e.isHeightAuto || e.forPrint ? i = "" : r.height != null ? s = true : r.contentHeight != null ? i = r.contentHeight : a = Math.max(r.aspectRatio, 0.5);
      let l = this.buildViewContext(e.viewSpec, e.viewApi, e.options, e.dateProfileGenerator, e.dateEnv, e.nowManager, e.theme, e.pluginHooks, e.dispatch, e.getCurrentData, e.emitter, e.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent), c = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
      return M(nr.Provider, {
        value: l
      }, M(es, {
        unit: "day"
      }, (d) => {
        let f = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, d, e.viewTitle);
        return M(Ze, null, n.header && M(wf, Object.assign({
          ref: this.headerRef,
          extraClassName: "fc-header-toolbar",
          model: n.header,
          titleId: c
        }, f)), M(yT, {
          liquid: s,
          height: i,
          aspectRatio: a,
          labeledById: c
        }, this.renderView(e), this.buildAppendContent()), n.footer && M(wf, Object.assign({
          ref: this.footerRef,
          extraClassName: "fc-footer-toolbar",
          model: n.footer,
          titleId: ""
        }, f)));
      }));
    }
    componentDidMount() {
      let { props: e } = this;
      this.calendarInteractions = e.pluginHooks.calendarInteractions.map((r) => new r(e)), window.addEventListener("resize", this.handleWindowResize);
      let { propSetHandlers: n } = e.pluginHooks;
      for (let r in n) n[r](e[r], e);
    }
    componentDidUpdate(e) {
      let { props: n } = this, { propSetHandlers: r } = n.pluginHooks;
      for (let s in r) n[s] !== e[s] && r[s](n[s], n);
    }
    componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
      for (let e of this.calendarInteractions) e.destroy();
      this.props.emitter.trigger("_unmount");
    }
    buildAppendContent() {
      let { props: e } = this, n = e.pluginHooks.viewContainerAppends.map((r) => r(e));
      return M(Ze, {}, ...n);
    }
    renderView(e) {
      let { pluginHooks: n } = e, { viewSpec: r } = e, s = {
        dateProfile: e.dateProfile,
        businessHours: e.businessHours,
        eventStore: e.renderableEventStore,
        eventUiBases: e.eventUiBases,
        dateSelection: e.dateSelection,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        isHeightAuto: e.isHeightAuto,
        forPrint: e.forPrint
      }, i = this.buildViewPropTransformers(n.viewPropsTransformers);
      for (let l of i) Object.assign(s, l.transform(s, e));
      let a = r.component;
      return M(a, Object.assign({}, s));
    }
  }
  function ST(t, e, n, r, s, i) {
    let a = n.build(s, void 0, false), l = n.buildPrev(e, r, false), c = n.buildNext(e, r, false);
    return {
      title: i,
      activeButton: t.type,
      navUnit: t.singleUnit,
      isTodayEnabled: a.isValid && !Zn(e.currentRange, s),
      isPrevEnabled: l.isValid,
      isNextEnabled: c.isValid
    };
  }
  function _T(t) {
    return t.map((e) => new e());
  }
  let DT = class extends a0 {
    constructor(e, n = {}) {
      super(), this.isRendering = false, this.isRendered = false, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = (r) => {
        switch (r.type) {
          case "SET_EVENT_DRAG":
          case "SET_EVENT_RESIZE":
            this.renderRunner.tryDrain();
        }
      }, this.handleData = (r) => {
        this.currentData = r, this.renderRunner.request(r.calendarOptions.rerenderDelay);
      }, this.handleRenderRequest = () => {
        if (this.isRendering) {
          this.isRendered = true;
          let { currentData: r } = this;
          Wa(() => {
            wi(M(r0, {
              options: r.calendarOptions,
              theme: r.theme,
              emitter: r.emitter
            }, (s, i, a, l) => (this.setClassNames(s), this.setHeight(i), M(om.Provider, {
              value: this.customContentRenderId
            }, M(wT, Object.assign({
              isHeightAuto: a,
              forPrint: l
            }, r))))), this.el);
          });
        } else this.isRendered && (this.isRendered = false, wi(null, this.el), this.setClassNames([]), this.setHeight(""));
      }, US(e), this.el = e, this.renderRunner = new mc(this.handleRenderRequest), new oT({
        optionOverrides: n,
        calendarApi: this,
        onAction: this.handleAction,
        onData: this.handleData
      });
    }
    render() {
      let e = this.isRendering;
      e ? this.customContentRenderId += 1 : this.isRendering = true, this.renderRunner.request(), e && this.updateSize();
    }
    destroy() {
      this.isRendering && (this.isRendering = false, this.renderRunner.request());
    }
    updateSize() {
      Wa(() => {
        super.updateSize();
      });
    }
    batchRendering(e) {
      this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering");
    }
    pauseRendering() {
      this.renderRunner.pause("pauseRendering");
    }
    resumeRendering() {
      this.renderRunner.resume("pauseRendering", true);
    }
    resetOptions(e, n) {
      this.currentDataManager.resetOptions(e, n);
    }
    setClassNames(e) {
      if (!Dr(e, this.currentClassNames)) {
        let { classList: n } = this.el;
        for (let r of this.currentClassNames) n.remove(r);
        for (let r of e) n.add(r);
        this.currentClassNames = e;
      }
    }
    setHeight(e) {
      Qh(this.el, "height", e);
    }
  };
  const kT = parseInt(String(vi.version).split(".")[0]), TT = kT < 18;
  let ep = class extends Hw {
    constructor() {
      super(...arguments), this.elRef = jw(), this.isUpdating = false, this.isUnmounting = false, this.state = {
        customRenderingMap: /* @__PURE__ */ new Map()
      }, this.requestResize = () => {
        this.isUnmounting || (this.cancelResize(), this.resizeId = requestAnimationFrame(() => {
          this.doResize();
        }));
      };
    }
    render() {
      const e = [];
      for (const n of this.state.customRenderingMap.values()) e.push(vi.createElement(xT, {
        key: n.id,
        customRendering: n
      }));
      return vi.createElement("div", {
        ref: this.elRef
      }, e);
    }
    componentDidMount() {
      this.isUnmounting = false;
      const e = new ok();
      this.handleCustomRendering = e.handle.bind(e), this.calendar = new DT(this.elRef.current, Object.assign(Object.assign({}, this.props), {
        handleCustomRendering: this.handleCustomRendering
      })), this.calendar.render(), this.calendar.on("_beforeprint", () => {
        _d(() => {
        });
      });
      let n;
      e.subscribe((r) => {
        const s = Date.now(), i = !n;
        (TT || i || this.isUpdating || this.isUnmounting || s - n < 100 ? tp : _d)(() => {
          this.setState({
            customRenderingMap: r
          }, () => {
            n = s, i ? this.doResize() : this.requestResize();
          });
        });
      });
    }
    componentDidUpdate() {
      this.isUpdating = true, this.calendar.resetOptions(Object.assign(Object.assign({}, this.props), {
        handleCustomRendering: this.handleCustomRendering
      })), this.isUpdating = false;
    }
    componentWillUnmount() {
      this.isUnmounting = true, this.cancelResize(), this.calendar.destroy();
    }
    doResize() {
      this.calendar.updateSize();
    }
    cancelResize() {
      this.resizeId !== void 0 && (cancelAnimationFrame(this.resizeId), this.resizeId = void 0);
    }
    getApi() {
      return this.calendar;
    }
  };
  ep.act = tp;
  class xT extends Vw {
    render() {
      const { customRendering: e } = this.props, { generatorMeta: n } = e, r = typeof n == "function" ? n(e.renderProps) : n;
      return Gw(r, e.containerEl);
    }
  }
  function tp(t) {
    t();
  }
  class MT extends dn {
    constructor() {
      super(...arguments), this.headerElRef = Ft();
    }
    renderSimpleLayout(e, n) {
      let { props: r, context: s } = this, i = [], a = Za(s.options);
      return e && i.push({
        type: "header",
        key: "header",
        isSticky: a,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      }), i.push({
        type: "body",
        key: "body",
        liquid: true,
        chunk: {
          content: n
        }
      }), M(Si, {
        elClasses: [
          "fc-daygrid"
        ],
        viewSpec: s.viewSpec
      }, M(Yc, {
        liquid: !r.isHeightAuto && !r.forPrint,
        collapsibleWidth: r.forPrint,
        cols: [],
        sections: i
      }));
    }
    renderHScrollLayout(e, n, r, s) {
      let i = this.context.pluginHooks.scrollGridImpl;
      if (!i) throw new Error("No ScrollGrid implementation");
      let { props: a, context: l } = this, c = !a.forPrint && Za(l.options), d = !a.forPrint && Hm(l.options), f = [];
      return e && f.push({
        type: "header",
        key: "header",
        isSticky: c,
        chunks: [
          {
            key: "main",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }
        ]
      }), f.push({
        type: "body",
        key: "body",
        liquid: true,
        chunks: [
          {
            key: "main",
            content: n
          }
        ]
      }), d && f.push({
        type: "footer",
        key: "footer",
        isSticky: true,
        chunks: [
          {
            key: "main",
            content: Gl
          }
        ]
      }), M(Si, {
        elClasses: [
          "fc-daygrid"
        ],
        viewSpec: l.viewSpec
      }, M(i, {
        liquid: !a.isHeightAuto && !a.forPrint,
        forPrint: a.forPrint,
        collapsibleWidth: a.forPrint,
        colGroups: [
          {
            cols: [
              {
                span: r,
                minWidth: s
              }
            ]
          }
        ],
        sections: f
      }));
    }
  }
  function xa(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1) n[r] = [];
    for (let r of t) n[r.row].push(r);
    return n;
  }
  function ga(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1) n[r] = [];
    for (let r of t) n[r.firstCol].push(r);
    return n;
  }
  function Sf(t, e) {
    let n = [];
    if (t) {
      for (let r = 0; r < e; r += 1) n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
      for (let r of t.segs) n[r.row].segs.push(r);
    } else for (let r = 0; r < e; r += 1) n[r] = null;
    return n;
  }
  const np = nt({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: true,
    meridiem: "narrow"
  });
  function rp(t) {
    let { display: e } = t.eventRange.ui;
    return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd;
  }
  class sp extends ze {
    render() {
      let { props: e } = this;
      return M(Fc, Object.assign({}, e, {
        elClasses: [
          "fc-daygrid-event",
          "fc-daygrid-block-event",
          "fc-h-event"
        ],
        defaultTimeFormat: np,
        defaultDisplayEventEnd: e.defaultDisplayEventEnd,
        disableResizing: !e.seg.eventRange.def.allDay
      }));
    }
  }
  class ip extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { seg: s } = e, i = r.eventTimeFormat || np, a = hi(s, i, n, true, e.defaultDisplayEventEnd);
      return M(Do, Object.assign({}, e, {
        elTag: "a",
        elClasses: [
          "fc-daygrid-event",
          "fc-daygrid-dot-event"
        ],
        elAttrs: Ac(e.seg, n),
        defaultGenerator: ET,
        timeText: a,
        isResizing: false,
        isDateSelecting: false
      }));
    }
  }
  function ET(t) {
    return M(Ze, null, M("div", {
      className: "fc-daygrid-event-dot",
      style: {
        borderColor: t.borderColor || t.backgroundColor
      }
    }), t.timeText && M("div", {
      className: "fc-event-time"
    }, t.timeText), M("div", {
      className: "fc-event-title"
    }, t.event.title || M(Ze, null, "\xA0")));
  }
  class CT extends ze {
    constructor() {
      super(...arguments), this.compileSegs = Te(AT);
    }
    render() {
      let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
      return M(Um, {
        elClasses: [
          "fc-daygrid-more-link"
        ],
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        allDayDate: e.allDayDate,
        moreCnt: e.moreCnt,
        allSegs: n,
        hiddenSegs: r,
        alignmentElRef: e.alignmentElRef,
        alignGridTop: e.alignGridTop,
        extraDateSpan: e.extraDateSpan,
        popoverContent: () => {
          let s = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
          return M(Ze, null, n.map((i) => {
            let a = i.eventRange.instance.instanceId;
            return M("div", {
              className: "fc-daygrid-event-harness",
              key: a,
              style: {
                visibility: s[a] ? "hidden" : ""
              }
            }, rp(i) ? M(ip, Object.assign({
              seg: i,
              isDragging: false,
              isSelected: a === e.eventSelection,
              defaultDisplayEventEnd: false
            }, qn(i, e.todayRange))) : M(sp, Object.assign({
              seg: i,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: a === e.eventSelection,
              defaultDisplayEventEnd: false
            }, qn(i, e.todayRange))));
          }));
        }
      });
    }
  }
  function AT(t) {
    let e = [], n = [];
    for (let r of t) e.push(r.seg), r.isVisible || n.push(r.seg);
    return {
      allSegs: e,
      invisibleSegs: n
    };
  }
  const RT = nt({
    week: "narrow"
  });
  class OT extends dn {
    constructor() {
      super(...arguments), this.rootElRef = Ft(), this.state = {
        dayNumberId: wr()
      }, this.handleRootEl = (e) => {
        kn(this.rootElRef, e), kn(this.props.elRef, e);
      };
    }
    render() {
      let { context: e, props: n, state: r, rootElRef: s } = this, { options: i, dateEnv: a } = e, { date: l, dateProfile: c } = n;
      const d = n.showDayNumber && PT(l, c.currentRange, a);
      return M(jc, {
        elTag: "td",
        elRef: this.handleRootEl,
        elClasses: [
          "fc-daygrid-day",
          ...n.extraClassNames || []
        ],
        elAttrs: Object.assign(Object.assign(Object.assign({}, n.extraDataAttrs), n.showDayNumber ? {
          "aria-labelledby": r.dayNumberId
        } : {}), {
          role: "gridcell"
        }),
        defaultGenerator: IT,
        date: l,
        dateProfile: c,
        todayRange: n.todayRange,
        showDayNumber: n.showDayNumber,
        isMonthStart: d,
        extraRenderProps: n.extraRenderProps
      }, (f, m) => M("div", {
        ref: n.innerElRef,
        className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
        style: {
          minHeight: n.minHeight
        }
      }, n.showWeekNumber && M(Wm, {
        elTag: "a",
        elClasses: [
          "fc-daygrid-week-number"
        ],
        elAttrs: Ps(e, l, "week"),
        date: l,
        defaultFormat: RT
      }), !m.isDisabled && (n.showDayNumber || Vc(i) || n.forceDayTop) ? M("div", {
        className: "fc-daygrid-day-top"
      }, M(f, {
        elTag: "a",
        elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ],
        elAttrs: Object.assign(Object.assign({}, Ps(e, l)), {
          id: r.dayNumberId
        })
      })) : n.showDayNumber ? M("div", {
        className: "fc-daygrid-day-top",
        style: {
          visibility: "hidden"
        }
      }, M("a", {
        className: "fc-daygrid-day-number"
      }, "\xA0")) : void 0, M("div", {
        className: "fc-daygrid-day-events",
        ref: n.fgContentElRef
      }, n.fgContent, M("div", {
        className: "fc-daygrid-day-bottom",
        style: {
          marginTop: n.moreMarginTop
        }
      }, M(CT, {
        allDayDate: l,
        singlePlacements: n.singlePlacements,
        moreCnt: n.moreCnt,
        alignmentElRef: s,
        alignGridTop: !n.showDayNumber,
        extraDateSpan: n.extraDateSpan,
        dateProfile: n.dateProfile,
        eventSelection: n.eventSelection,
        eventDrag: n.eventDrag,
        eventResize: n.eventResize,
        todayRange: n.todayRange
      }))), M("div", {
        className: "fc-daygrid-day-bg"
      }, n.bgContent)));
    }
  }
  function IT(t) {
    return t.dayNumberText || M(Ze, null, "\xA0");
  }
  function PT(t, e, n) {
    const { start: r, end: s } = e, i = kr(s, -1), a = n.getYear(r), l = n.getMonth(r), c = n.getYear(i), d = n.getMonth(i);
    return !(a === c && l === d) && (t.valueOf() === r.valueOf() || n.getDay(t) === 1 && t.valueOf() < s.valueOf());
  }
  function ap(t) {
    return t.eventRange.instance.instanceId + ":" + t.firstCol;
  }
  function op(t) {
    return ap(t) + ":" + t.lastCol;
  }
  function NT(t, e, n, r, s, i, a) {
    let l = new FT((_) => {
      let E = t[_.index].eventRange.instance.instanceId + ":" + _.span.start + ":" + (_.span.end - 1);
      return s[E] || 1;
    });
    l.allowReslicing = true, l.strictOrder = r, e === true || n === true ? (l.maxCoord = i, l.hiddenConsumes = true) : typeof e == "number" ? l.maxStackCnt = e : typeof n == "number" && (l.maxStackCnt = n, l.hiddenConsumes = true);
    let c = [], d = [];
    for (let _ = 0; _ < t.length; _ += 1) {
      let E = t[_], R = op(E);
      s[R] != null ? c.push({
        index: _,
        span: {
          start: E.firstCol,
          end: E.lastCol + 1
        }
      }) : d.push(E);
    }
    let f = l.addSegs(c), m = l.toRects(), { singleColPlacements: g, multiColPlacements: y, leftoverMargins: v } = LT(m, t, a), S = [], b = [];
    for (let _ of d) {
      y[_.firstCol].push({
        seg: _,
        isVisible: false,
        isAbsolute: true,
        absoluteTop: 0,
        marginTop: 0
      });
      for (let E = _.firstCol; E <= _.lastCol; E += 1) g[E].push({
        seg: Ts(_, E, E + 1, a),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
    for (let _ = 0; _ < a.length; _ += 1) S.push(0);
    for (let _ of f) {
      let E = t[_.index], R = _.span;
      y[R.start].push({
        seg: Ts(E, R.start, R.end, a),
        isVisible: false,
        isAbsolute: true,
        absoluteTop: 0,
        marginTop: 0
      });
      for (let T = R.start; T < R.end; T += 1) S[T] += 1, g[T].push({
        seg: Ts(E, T, T + 1, a),
        isVisible: false,
        isAbsolute: false,
        absoluteTop: 0,
        marginTop: 0
      });
    }
    for (let _ = 0; _ < a.length; _ += 1) b.push(v[_]);
    return {
      singleColPlacements: g,
      multiColPlacements: y,
      moreCnts: S,
      moreMarginTops: b
    };
  }
  function LT(t, e, n) {
    let r = YT(t, n.length), s = [], i = [], a = [];
    for (let l = 0; l < n.length; l += 1) {
      let c = r[l], d = [], f = 0, m = 0;
      for (let y of c) {
        let v = e[y.index];
        d.push({
          seg: Ts(v, l, l + 1, n),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: y.levelCoord,
          marginTop: y.levelCoord - f
        }), f = y.levelCoord + y.thickness;
      }
      let g = [];
      f = 0, m = 0;
      for (let y of c) {
        let v = e[y.index], S = y.span.end - y.span.start > 1, b = y.span.start === l;
        m += y.levelCoord - f, f = y.levelCoord + y.thickness, S ? (m += y.thickness, b && g.push({
          seg: Ts(v, y.span.start, y.span.end, n),
          isVisible: true,
          isAbsolute: true,
          absoluteTop: y.levelCoord,
          marginTop: 0
        })) : b && (g.push({
          seg: Ts(v, y.span.start, y.span.end, n),
          isVisible: true,
          isAbsolute: false,
          absoluteTop: y.levelCoord,
          marginTop: m
        }), m = 0);
      }
      s.push(d), i.push(g), a.push(m);
    }
    return {
      singleColPlacements: s,
      multiColPlacements: i,
      leftoverMargins: a
    };
  }
  function YT(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1) n.push([]);
    for (let r of t) for (let s = r.span.start; s < r.span.end; s += 1) n[s].push(r);
    return n;
  }
  function Ts(t, e, n, r) {
    if (t.firstCol === e && t.lastCol === n - 1) return t;
    let s = t.eventRange, i = s.range, a = Tr(i, {
      start: r[e].date,
      end: ut(r[n - 1].date, 1)
    });
    return Object.assign(Object.assign({}, t), {
      firstCol: e,
      lastCol: n - 1,
      eventRange: {
        def: s.def,
        ui: Object.assign(Object.assign({}, s.ui), {
          durationEditable: false
        }),
        instance: s.instance,
        range: a
      },
      isStart: t.isStart && a.start.valueOf() === i.start.valueOf(),
      isEnd: t.isEnd && a.end.valueOf() === i.end.valueOf()
    });
  }
  class FT extends Em {
    constructor() {
      super(...arguments), this.hiddenConsumes = false, this.forceHidden = {};
    }
    addSegs(e) {
      const n = super.addSegs(e), { entriesByLevel: r } = this, s = (i) => !this.forceHidden[zr(i)];
      for (let i = 0; i < r.length; i += 1) r[i] = r[i].filter(s);
      return n;
    }
    handleInvalidInsertion(e, n, r) {
      const { entriesByLevel: s, forceHidden: i } = this, { touchingEntry: a, touchingLevel: l, touchingLateral: c } = e;
      if (this.hiddenConsumes && a) {
        const d = zr(a);
        if (!i[d]) if (this.allowReslicing) {
          const f = Object.assign(Object.assign({}, a), {
            span: Nc(a.span, n.span)
          }), m = zr(f);
          i[m] = true, s[l][c] = f, r.push(f), this.splitEntry(a, n, r);
        } else i[d] = true, r.push(a);
      }
      super.handleInvalidInsertion(e, n, r);
    }
  }
  class lp extends dn {
    constructor() {
      super(...arguments), this.cellElRefs = new zn(), this.frameElRefs = new zn(), this.fgElRefs = new zn(), this.segHarnessRefs = new zn(), this.rootElRef = Ft(), this.state = {
        framePositions: null,
        maxContentHeight: null,
        segHeights: {}
      }, this.handleResize = (e) => {
        e && this.updateSizing(true);
      };
    }
    render() {
      let { props: e, state: n, context: r } = this, { options: s } = r, i = e.cells.length, a = ga(e.businessHourSegs, i), l = ga(e.bgEventSegs, i), c = ga(this.getHighlightSegs(), i), d = ga(this.getMirrorSegs(), i), { singleColPlacements: f, multiColPlacements: m, moreCnts: g, moreMarginTops: y } = NT(Cc(e.fgEventSegs, s.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, s.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), v = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
      return M("tr", {
        ref: this.rootElRef,
        role: "row"
      }, e.renderIntro && e.renderIntro(), e.cells.map((S, b) => {
        let _ = this.renderFgSegs(b, e.forPrint ? f[b] : m[b], e.todayRange, v), E = this.renderFgSegs(b, HT(d[b], m), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, false);
        return M(OT, {
          key: S.key,
          elRef: this.cellElRefs.createRef(S.key),
          innerElRef: this.frameElRefs.createRef(S.key),
          dateProfile: e.dateProfile,
          date: S.date,
          showDayNumber: e.showDayNumbers,
          showWeekNumber: e.showWeekNumbers && b === 0,
          forceDayTop: e.showWeekNumbers,
          todayRange: e.todayRange,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          extraRenderProps: S.extraRenderProps,
          extraDataAttrs: S.extraDataAttrs,
          extraClassNames: S.extraClassNames,
          extraDateSpan: S.extraDateSpan,
          moreCnt: g[b],
          moreMarginTop: y[b],
          singlePlacements: f[b],
          fgContentElRef: this.fgElRefs.createRef(S.key),
          fgContent: M(Ze, null, M(Ze, null, _), M(Ze, null, E)),
          bgContent: M(Ze, null, this.renderFillSegs(c[b], "highlight"), this.renderFillSegs(a[b], "non-business"), this.renderFillSegs(l[b], "bg-event")),
          minHeight: e.cellMinHeight
        });
      }));
    }
    componentDidMount() {
      this.updateSizing(true), this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(e, n) {
      let r = this.props;
      this.updateSizing(!ln(e, r));
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    getHighlightSegs() {
      let { props: e } = this;
      return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs;
    }
    getMirrorSegs() {
      let { props: e } = this;
      return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
    }
    renderFgSegs(e, n, r, s, i, a, l) {
      let { context: c } = this, { eventSelection: d } = this.props, { framePositions: f } = this.state, m = this.props.cells.length === 1, g = i || a || l, y = [];
      if (f) for (let v of n) {
        let { seg: S } = v, { instanceId: b } = S.eventRange.instance, _ = v.isVisible && !s[b], E = v.isAbsolute, R = "", T = "";
        E && (c.isRtl ? (T = 0, R = f.lefts[S.lastCol] - f.lefts[S.firstCol]) : (R = 0, T = f.rights[S.firstCol] - f.rights[S.lastCol])), y.push(M("div", {
          className: "fc-daygrid-event-harness" + (E ? " fc-daygrid-event-harness-abs" : ""),
          key: ap(S),
          ref: g ? null : this.segHarnessRefs.createRef(op(S)),
          style: {
            visibility: _ ? "" : "hidden",
            marginTop: E ? "" : v.marginTop,
            top: E ? v.absoluteTop : "",
            left: R,
            right: T
          }
        }, rp(S) ? M(ip, Object.assign({
          seg: S,
          isDragging: i,
          isSelected: b === d,
          defaultDisplayEventEnd: m
        }, qn(S, r))) : M(sp, Object.assign({
          seg: S,
          isDragging: i,
          isResizing: a,
          isDateSelecting: l,
          isSelected: b === d,
          defaultDisplayEventEnd: m
        }, qn(S, r)))));
      }
      return y;
    }
    renderFillSegs(e, n) {
      let { isRtl: r } = this.context, { todayRange: s } = this.props, { framePositions: i } = this.state, a = [];
      if (i) for (let l of e) {
        let c = r ? {
          right: 0,
          left: i.lefts[l.lastCol] - i.lefts[l.firstCol]
        } : {
          left: 0,
          right: i.rights[l.firstCol] - i.rights[l.lastCol]
        };
        a.push(M("div", {
          key: Sm(l.eventRange),
          className: "fc-daygrid-bg-harness",
          style: c
        }, n === "bg-event" ? M(jm, Object.assign({
          seg: l
        }, qn(l, s))) : Vm(n)));
      }
      return M(Ze, {}, ...a);
    }
    updateSizing(e) {
      let { props: n, state: r, frameElRefs: s } = this;
      if (!n.forPrint && n.clientWidth !== null) {
        if (e) {
          let c = n.cells.map((d) => s.currentMap[d.key]);
          if (c.length) {
            let d = this.rootElRef.current, f = new Ns(d, c, true, false);
            (!r.framePositions || !r.framePositions.similarTo(f)) && this.setState({
              framePositions: new Ns(d, c, true, false)
            });
          }
        }
        const i = this.state.segHeights, a = this.querySegHeights(), l = n.dayMaxEvents === true || n.dayMaxEventRows === true;
        this.safeSetState({
          segHeights: Object.assign(Object.assign({}, i), a),
          maxContentHeight: l ? this.computeMaxContentHeight() : null
        });
      }
    }
    querySegHeights() {
      let e = this.segHarnessRefs.currentMap, n = {};
      for (let r in e) {
        let s = Math.round(e[r].getBoundingClientRect().height);
        n[r] = Math.max(n[r] || 0, s);
      }
      return n;
    }
    computeMaxContentHeight() {
      let e = this.props.cells[0].key, n = this.cellElRefs.currentMap[e], r = this.fgElRefs.currentMap[e];
      return n.getBoundingClientRect().bottom - r.getBoundingClientRect().top;
    }
    getCellEls() {
      let e = this.cellElRefs.currentMap;
      return this.props.cells.map((n) => e[n.key]);
    }
  }
  lp.addStateEquality({
    segHeights: ln
  });
  function HT(t, e) {
    if (!t.length) return [];
    let n = jT(e);
    return t.map((r) => ({
      seg: r,
      isVisible: true,
      isAbsolute: true,
      absoluteTop: n[r.eventRange.instance.instanceId],
      marginTop: 0
    }));
  }
  function jT(t) {
    let e = {};
    for (let n of t) for (let r of n) e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
    return e;
  }
  class VT extends dn {
    constructor() {
      super(...arguments), this.splitBusinessHourSegs = Te(xa), this.splitBgEventSegs = Te(WT), this.splitFgEventSegs = Te(xa), this.splitDateSelectionSegs = Te(xa), this.splitEventDrag = Te(Sf), this.splitEventResize = Te(Sf), this.rowRefs = new zn();
    }
    render() {
      let { props: e, context: n } = this, r = e.cells.length, s = this.splitBusinessHourSegs(e.businessHourSegs, r), i = this.splitBgEventSegs(e.bgEventSegs, r), a = this.splitFgEventSegs(e.fgEventSegs, r), l = this.splitDateSelectionSegs(e.dateSelectionSegs, r), c = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r), f = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
      return M(es, {
        unit: "day"
      }, (m, g) => M(Ze, null, e.cells.map((y, v) => M(lp, {
        ref: this.rowRefs.createRef(v),
        key: y.length ? y[0].date.toISOString() : v,
        showDayNumbers: r > 1,
        showWeekNumbers: e.showWeekNumbers,
        todayRange: g,
        dateProfile: e.dateProfile,
        cells: y,
        renderIntro: e.renderRowIntro,
        businessHourSegs: s[v],
        eventSelection: e.eventSelection,
        bgEventSegs: i[v],
        fgEventSegs: a[v],
        dateSelectionSegs: l[v],
        eventDrag: c[v],
        eventResize: d[v],
        dayMaxEvents: e.dayMaxEvents,
        dayMaxEventRows: e.dayMaxEventRows,
        clientWidth: e.clientWidth,
        clientHeight: e.clientHeight,
        cellMinHeight: f,
        forPrint: e.forPrint
      }))));
    }
    componentDidMount() {
      this.registerInteractiveComponent();
    }
    componentDidUpdate() {
      this.registerInteractiveComponent();
    }
    registerInteractiveComponent() {
      if (!this.rootEl) {
        const e = this.rowRefs.currentMap[0].getCellEls()[0], n = e ? e.closest(".fc-daygrid-body") : null;
        n && (this.rootEl = n, this.context.registerInteractiveComponent(this, {
          el: n,
          isHitComboAllowed: this.props.isHitComboAllowed
        }));
      }
    }
    componentWillUnmount() {
      this.rootEl && (this.context.unregisterInteractiveComponent(this), this.rootEl = null);
    }
    prepareHits() {
      this.rowPositions = new Ns(this.rootEl, this.rowRefs.collect().map((e) => e.getCellEls()[0]), false, true), this.colPositions = new Ns(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), true, false);
    }
    queryHit(e, n) {
      let { colPositions: r, rowPositions: s } = this, i = r.leftToIndex(e), a = s.topToIndex(n);
      if (a != null && i != null) {
        let l = this.props.cells[a][i];
        return {
          dateProfile: this.props.dateProfile,
          dateSpan: Object.assign({
            range: this.getCellRange(a, i),
            allDay: true
          }, l.extraDateSpan),
          dayEl: this.getCellEl(a, i),
          rect: {
            left: r.lefts[i],
            right: r.rights[i],
            top: s.tops[a],
            bottom: s.bottoms[a]
          },
          layer: 0
        };
      }
      return null;
    }
    getCellEl(e, n) {
      return this.rowRefs.currentMap[e].getCellEls()[n];
    }
    getCellRange(e, n) {
      let r = this.props.cells[e][n].date, s = ut(r, 1);
      return {
        start: r,
        end: s
      };
    }
  }
  function WT(t, e) {
    return xa(t.filter(UT), e);
  }
  function UT(t) {
    return t.eventRange.def.allDay;
  }
  class BT extends dn {
    constructor() {
      super(...arguments), this.elRef = Ft(), this.needsScrollReset = false;
    }
    render() {
      let { props: e } = this, { dayMaxEventRows: n, dayMaxEvents: r, expandRows: s } = e, i = r === true || n === true;
      i && !s && (i = false, n = null, r = null);
      let a = [
        "fc-daygrid-body",
        i ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced",
        s ? "" : "fc-daygrid-body-natural"
      ];
      return M("div", {
        ref: this.elRef,
        className: a.join(" "),
        style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth
        }
      }, M("table", {
        role: "presentation",
        className: "fc-scrollgrid-sync-table",
        style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth,
          height: s ? e.clientHeight : ""
        }
      }, e.colGroupNode, M("tbody", {
        role: "presentation"
      }, M(VT, {
        dateProfile: e.dateProfile,
        cells: e.cells,
        renderRowIntro: e.renderRowIntro,
        showWeekNumbers: e.showWeekNumbers,
        clientWidth: e.clientWidth,
        clientHeight: e.clientHeight,
        businessHourSegs: e.businessHourSegs,
        bgEventSegs: e.bgEventSegs,
        fgEventSegs: e.fgEventSegs,
        dateSelectionSegs: e.dateSelectionSegs,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        dayMaxEvents: r,
        dayMaxEventRows: n,
        forPrint: e.forPrint,
        isHitComboAllowed: e.isHitComboAllowed
      }))));
    }
    componentDidMount() {
      this.requestScrollReset();
    }
    componentDidUpdate(e) {
      e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
    }
    requestScrollReset() {
      this.needsScrollReset = true, this.flushScrollReset();
    }
    flushScrollReset() {
      if (this.needsScrollReset && this.props.clientWidth) {
        const e = zT(this.elRef.current, this.props.dateProfile);
        if (e) {
          const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), s = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
          r.scrollTop = s ? s + 1 : 0;
        }
        this.needsScrollReset = false;
      }
    }
  }
  function zT(t, e) {
    let n;
    return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${E_(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${Pi(e.currentDate)}"]`)), n;
  }
  class $T extends Pm {
    constructor() {
      super(...arguments), this.forceDayIfListItem = true;
    }
    sliceRange(e, n) {
      return n.sliceRange(e);
    }
  }
  class cp extends dn {
    constructor() {
      super(...arguments), this.slicer = new $T(), this.tableRef = Ft();
    }
    render() {
      let { props: e, context: n } = this;
      return M(BT, Object.assign({
        ref: this.tableRef
      }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, n, e.dayTableModel), {
        dateProfile: e.dateProfile,
        cells: e.dayTableModel.cells,
        colGroupNode: e.colGroupNode,
        tableMinWidth: e.tableMinWidth,
        renderRowIntro: e.renderRowIntro,
        dayMaxEvents: e.dayMaxEvents,
        dayMaxEventRows: e.dayMaxEventRows,
        showWeekNumbers: e.showWeekNumbers,
        expandRows: e.expandRows,
        headerAlignElRef: e.headerAlignElRef,
        clientWidth: e.clientWidth,
        clientHeight: e.clientHeight,
        forPrint: e.forPrint
      }));
    }
  }
  class GT extends MT {
    constructor() {
      super(...arguments), this.buildDayTableModel = Te(ZT), this.headerRef = Ft(), this.tableRef = Ft();
    }
    render() {
      let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, s = this.buildDayTableModel(r.dateProfile, n), i = e.dayHeaders && M(Rm, {
        ref: this.headerRef,
        dateProfile: r.dateProfile,
        dates: s.headerDates,
        datesRepDistinctDays: s.rowCnt === 1
      }), a = (l) => M(cp, {
        ref: this.tableRef,
        dateProfile: r.dateProfile,
        dayTableModel: s,
        businessHours: r.businessHours,
        dateSelection: r.dateSelection,
        eventStore: r.eventStore,
        eventUiBases: r.eventUiBases,
        eventSelection: r.eventSelection,
        eventDrag: r.eventDrag,
        eventResize: r.eventResize,
        nextDayThreshold: e.nextDayThreshold,
        colGroupNode: l.tableColGroupNode,
        tableMinWidth: l.tableMinWidth,
        dayMaxEvents: e.dayMaxEvents,
        dayMaxEventRows: e.dayMaxEventRows,
        showWeekNumbers: e.weekNumbers,
        expandRows: !r.isHeightAuto,
        headerAlignElRef: this.headerElRef,
        clientWidth: l.clientWidth,
        clientHeight: l.clientHeight,
        forPrint: r.forPrint
      });
      return e.dayMinWidth ? this.renderHScrollLayout(i, a, s.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, a);
    }
  }
  function ZT(t, e) {
    let n = new Om(t.renderRange, e);
    return new Im(n, /year|month|week/.test(t.currentRangeUnit));
  }
  class qT extends um {
    buildRenderRange(e, n, r) {
      let s = super.buildRenderRange(e, n, r), { props: i } = this;
      return QT({
        currentRange: s,
        snapToWeek: /^(year|month)$/.test(n),
        fixedWeekCount: i.fixedWeekCount,
        dateEnv: i.dateEnv
      });
    }
  }
  function QT(t) {
    let { dateEnv: e, currentRange: n } = t, { start: r, end: s } = n, i;
    if (t.snapToWeek && (r = e.startOfWeek(r), i = e.startOfWeek(s), i.valueOf() !== s.valueOf() && (s = Xd(i, 1))), t.fixedWeekCount) {
      let a = e.startOfWeek(e.startOfMonth(ut(n.end, -1))), l = Math.ceil(y_(a, s));
      s = Xd(s, 6 - l);
    }
    return {
      start: r,
      end: s
    };
  }
  var XT = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
  uo(XT);
  var JT = fn({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
      dayGrid: {
        component: GT,
        dateProfileGeneratorClass: qT
      },
      dayGridDay: {
        type: "dayGrid",
        duration: {
          days: 1
        }
      },
      dayGridWeek: {
        type: "dayGrid",
        duration: {
          weeks: 1
        }
      },
      dayGridMonth: {
        type: "dayGrid",
        duration: {
          months: 1
        },
        fixedWeekCount: true
      },
      dayGridYear: {
        type: "dayGrid",
        duration: {
          years: 1
        }
      }
    }
  });
  class KT extends d0 {
    getKeyInfo() {
      return {
        allDay: {},
        timed: {}
      };
    }
    getKeysForDateSpan(e) {
      return e.allDay ? [
        "allDay"
      ] : [
        "timed"
      ];
    }
    getKeysForEventDef(e) {
      return e.allDay ? VD(e) ? [
        "timed",
        "allDay"
      ] : [
        "allDay"
      ] : [
        "timed"
      ];
    }
  }
  const ex = nt({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: true,
    meridiem: "short"
  });
  function up(t) {
    let e = [
      "fc-timegrid-slot",
      "fc-timegrid-slot-label",
      t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
    ];
    return M(nr.Consumer, null, (n) => {
      if (!t.isLabeled) return M("td", {
        className: e.join(" "),
        "data-time": t.isoTimeStr
      });
      let { dateEnv: r, options: s, viewApi: i } = n, a = s.slotLabelFormat == null ? ex : Array.isArray(s.slotLabelFormat) ? nt(s.slotLabelFormat[0]) : nt(s.slotLabelFormat), l = {
        level: 0,
        time: t.time,
        date: r.toDate(t.date),
        view: i,
        text: r.format(t.date, a)
      };
      return M(Pt, {
        elTag: "td",
        elClasses: e,
        elAttrs: {
          "data-time": t.isoTimeStr
        },
        renderProps: l,
        generatorName: "slotLabelContent",
        customGenerator: s.slotLabelContent,
        defaultGenerator: tx,
        classNameGenerator: s.slotLabelClassNames,
        didMount: s.slotLabelDidMount,
        willUnmount: s.slotLabelWillUnmount
      }, (c) => M("div", {
        className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
      }, M(c, {
        elTag: "div",
        elClasses: [
          "fc-timegrid-slot-label-cushion",
          "fc-scrollgrid-shrink-cushion"
        ]
      })));
    });
  }
  function tx(t) {
    return t.text;
  }
  class nx extends ze {
    render() {
      return this.props.slatMetas.map((e) => M("tr", {
        key: e.key
      }, M(up, Object.assign({}, e))));
    }
  }
  const rx = nt({
    week: "short"
  }), sx = 5;
  class ix extends dn {
    constructor() {
      super(...arguments), this.allDaySplitter = new KT(), this.headerElRef = Ft(), this.rootElRef = Ft(), this.scrollerElRef = Ft(), this.state = {
        slatCoords: null
      }, this.handleScrollTopRequest = (e) => {
        let n = this.scrollerElRef.current;
        n && (n.scrollTop = e);
      }, this.renderHeadAxis = (e, n = "") => {
        let { options: r } = this.context, { dateProfile: s } = this.props, i = s.renderRange, l = Er(i.start, i.end) === 1 ? Ps(this.context, i.start, "week") : {};
        return r.weekNumbers && e === "day" ? M(Wm, {
          elTag: "th",
          elClasses: [
            "fc-timegrid-axis",
            "fc-scrollgrid-shrink"
          ],
          elAttrs: {
            "aria-hidden": true
          },
          date: i.start,
          defaultFormat: rx
        }, (c) => M("div", {
          className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            "fc-timegrid-axis-frame-liquid"
          ].join(" "),
          style: {
            height: n
          }
        }, M(c, {
          elTag: "a",
          elClasses: [
            "fc-timegrid-axis-cushion",
            "fc-scrollgrid-shrink-cushion",
            "fc-scrollgrid-sync-inner"
          ],
          elAttrs: l
        }))) : M("th", {
          "aria-hidden": true,
          className: "fc-timegrid-axis"
        }, M("div", {
          className: "fc-timegrid-axis-frame",
          style: {
            height: n
          }
        }));
      }, this.renderTableRowAxis = (e) => {
        let { options: n, viewApi: r } = this.context, s = {
          text: n.allDayText,
          view: r
        };
        return M(Pt, {
          elTag: "td",
          elClasses: [
            "fc-timegrid-axis",
            "fc-scrollgrid-shrink"
          ],
          elAttrs: {
            "aria-hidden": true
          },
          renderProps: s,
          generatorName: "allDayContent",
          customGenerator: n.allDayContent,
          defaultGenerator: ax,
          classNameGenerator: n.allDayClassNames,
          didMount: n.allDayDidMount,
          willUnmount: n.allDayWillUnmount
        }, (i) => M("div", {
          className: [
            "fc-timegrid-axis-frame",
            "fc-scrollgrid-shrink-frame",
            e == null ? " fc-timegrid-axis-frame-liquid" : ""
          ].join(" "),
          style: {
            height: e
          }
        }, M(i, {
          elTag: "span",
          elClasses: [
            "fc-timegrid-axis-cushion",
            "fc-scrollgrid-shrink-cushion",
            "fc-scrollgrid-sync-inner"
          ]
        })));
      }, this.handleSlatCoords = (e) => {
        this.setState({
          slatCoords: e
        });
      };
    }
    renderSimpleLayout(e, n, r) {
      let { context: s, props: i } = this, a = [], l = Za(s.options);
      return e && a.push({
        type: "header",
        key: "header",
        isSticky: l,
        chunk: {
          elRef: this.headerElRef,
          tableClassName: "fc-col-header",
          rowContent: e
        }
      }), n && (a.push({
        type: "body",
        key: "all-day",
        chunk: {
          content: n
        }
      }), a.push({
        type: "body",
        key: "all-day-divider",
        outerContent: M("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, M("td", {
          className: "fc-timegrid-divider " + s.theme.getClass("tableCellShaded")
        }))
      })), a.push({
        type: "body",
        key: "body",
        liquid: true,
        expandRows: !!s.options.expandRows,
        chunk: {
          scrollerElRef: this.scrollerElRef,
          content: r
        }
      }), M(Si, {
        elRef: this.rootElRef,
        elClasses: [
          "fc-timegrid"
        ],
        viewSpec: s.viewSpec
      }, M(Yc, {
        liquid: !i.isHeightAuto && !i.forPrint,
        collapsibleWidth: i.forPrint,
        cols: [
          {
            width: "shrink"
          }
        ],
        sections: a
      }));
    }
    renderHScrollLayout(e, n, r, s, i, a, l) {
      let c = this.context.pluginHooks.scrollGridImpl;
      if (!c) throw new Error("No ScrollGrid implementation");
      let { context: d, props: f } = this, m = !f.forPrint && Za(d.options), g = !f.forPrint && Hm(d.options), y = [];
      e && y.push({
        type: "header",
        key: "header",
        isSticky: m,
        syncRowHeights: true,
        chunks: [
          {
            key: "axis",
            rowContent: (S) => M("tr", {
              role: "presentation"
            }, this.renderHeadAxis("day", S.rowSyncHeights[0]))
          },
          {
            key: "cols",
            elRef: this.headerElRef,
            tableClassName: "fc-col-header",
            rowContent: e
          }
        ]
      }), n && (y.push({
        type: "body",
        key: "all-day",
        syncRowHeights: true,
        chunks: [
          {
            key: "axis",
            rowContent: (S) => M("tr", {
              role: "presentation"
            }, this.renderTableRowAxis(S.rowSyncHeights[0]))
          },
          {
            key: "cols",
            content: n
          }
        ]
      }), y.push({
        key: "all-day-divider",
        type: "body",
        outerContent: M("tr", {
          role: "presentation",
          className: "fc-scrollgrid-section"
        }, M("td", {
          colSpan: 2,
          className: "fc-timegrid-divider " + d.theme.getClass("tableCellShaded")
        }))
      }));
      let v = d.options.nowIndicator;
      return y.push({
        type: "body",
        key: "body",
        liquid: true,
        expandRows: !!d.options.expandRows,
        chunks: [
          {
            key: "axis",
            content: (S) => M("div", {
              className: "fc-timegrid-axis-chunk"
            }, M("table", {
              "aria-hidden": true,
              style: {
                height: S.expandRows ? S.clientHeight : ""
              }
            }, S.tableColGroupNode, M("tbody", null, M(nx, {
              slatMetas: a
            }))), M("div", {
              className: "fc-timegrid-now-indicator-container"
            }, M(es, {
              unit: v ? "minute" : "day"
            }, (b) => {
              let _ = v && l && l.safeComputeTop(b);
              return typeof _ == "number" ? M(Hc, {
                elClasses: [
                  "fc-timegrid-now-indicator-arrow"
                ],
                elStyle: {
                  top: _
                },
                isAxis: true,
                date: b
              }) : null;
            })))
          },
          {
            key: "cols",
            scrollerElRef: this.scrollerElRef,
            content: r
          }
        ]
      }), g && y.push({
        key: "footer",
        type: "footer",
        isSticky: true,
        chunks: [
          {
            key: "axis",
            content: Gl
          },
          {
            key: "cols",
            content: Gl
          }
        ]
      }), M(Si, {
        elRef: this.rootElRef,
        elClasses: [
          "fc-timegrid"
        ],
        viewSpec: d.viewSpec
      }, M(c, {
        liquid: !f.isHeightAuto && !f.forPrint,
        forPrint: f.forPrint,
        collapsibleWidth: false,
        colGroups: [
          {
            width: "shrink",
            cols: [
              {
                width: "shrink"
              }
            ]
          },
          {
            cols: [
              {
                span: s,
                minWidth: i
              }
            ]
          }
        ],
        sections: y
      }));
    }
    getAllDayMaxEventProps() {
      let { dayMaxEvents: e, dayMaxEventRows: n } = this.context.options;
      return (e === true || n === true) && (e = void 0, n = sx), {
        dayMaxEvents: e,
        dayMaxEventRows: n
      };
    }
  }
  function ax(t) {
    return t.text;
  }
  class ox {
    constructor(e, n, r) {
      this.positions = e, this.dateProfile = n, this.slotDuration = r;
    }
    safeComputeTop(e) {
      let { dateProfile: n } = this;
      if (Zn(n.currentRange, e)) {
        let r = Xe(e), s = e.valueOf() - r.valueOf();
        if (s >= sn(n.slotMinTime) && s < sn(n.slotMaxTime)) return this.computeTimeTop(Pe(s));
      }
      return null;
    }
    computeDateTop(e, n) {
      return n || (n = Xe(e)), this.computeTimeTop(Pe(e.valueOf() - n.valueOf()));
    }
    computeTimeTop(e) {
      let { positions: n, dateProfile: r } = this, s = n.els.length, i = (e.milliseconds - sn(r.slotMinTime)) / sn(this.slotDuration), a, l;
      return i = Math.max(0, i), i = Math.min(s, i), a = Math.floor(i), a = Math.min(a, s - 1), l = i - a, n.tops[a] + n.getHeight(a) * l;
    }
  }
  class lx extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { slatElRefs: s } = e;
      return M("tbody", null, e.slatMetas.map((i, a) => {
        let l = {
          time: i.time,
          date: n.dateEnv.toDate(i.date),
          view: n.viewApi
        };
        return M("tr", {
          key: i.key,
          ref: s.createRef(i.key)
        }, e.axis && M(up, Object.assign({}, i)), M(Pt, {
          elTag: "td",
          elClasses: [
            "fc-timegrid-slot",
            "fc-timegrid-slot-lane",
            !i.isLabeled && "fc-timegrid-slot-minor"
          ],
          elAttrs: {
            "data-time": i.isoTimeStr
          },
          renderProps: l,
          generatorName: "slotLaneContent",
          customGenerator: r.slotLaneContent,
          classNameGenerator: r.slotLaneClassNames,
          didMount: r.slotLaneDidMount,
          willUnmount: r.slotLaneWillUnmount
        }));
      }));
    }
  }
  class cx extends ze {
    constructor() {
      super(...arguments), this.rootElRef = Ft(), this.slatElRefs = new zn();
    }
    render() {
      let { props: e, context: n } = this;
      return M("div", {
        ref: this.rootElRef,
        className: "fc-timegrid-slots"
      }, M("table", {
        "aria-hidden": true,
        className: n.theme.getClass("table"),
        style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth,
          height: e.minHeight
        }
      }, e.tableColGroupNode, M(lx, {
        slatElRefs: this.slatElRefs,
        axis: e.axis,
        slatMetas: e.slatMetas
      })));
    }
    componentDidMount() {
      this.updateSizing();
    }
    componentDidUpdate() {
      this.updateSizing();
    }
    componentWillUnmount() {
      this.props.onCoords && this.props.onCoords(null);
    }
    updateSizing() {
      let { context: e, props: n } = this;
      n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new ox(new Ns(this.rootElRef.current, ux(this.slatElRefs.currentMap, n.slatMetas), false, true), this.props.dateProfile, e.options.slotDuration));
    }
  }
  function ux(t, e) {
    return e.map((n) => t[n.key]);
  }
  function ei(t, e) {
    let n = [], r;
    for (r = 0; r < e; r += 1) n.push([]);
    if (t) for (r = 0; r < t.length; r += 1) n[t[r].col].push(t[r]);
    return n;
  }
  function _f(t, e) {
    let n = [];
    if (t) {
      for (let r = 0; r < e; r += 1) n[r] = {
        affectedInstances: t.affectedInstances,
        isEvent: t.isEvent,
        segs: []
      };
      for (let r of t.segs) n[r.col].segs.push(r);
    } else for (let r = 0; r < e; r += 1) n[r] = null;
    return n;
  }
  class dx extends ze {
    render() {
      let { props: e } = this;
      return M(Um, {
        elClasses: [
          "fc-timegrid-more-link"
        ],
        elStyle: {
          top: e.top,
          bottom: e.bottom
        },
        allDayDate: null,
        moreCnt: e.hiddenSegs.length,
        allSegs: e.hiddenSegs,
        hiddenSegs: e.hiddenSegs,
        extraDateSpan: e.extraDateSpan,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        popoverContent: () => fp(e.hiddenSegs, e),
        defaultGenerator: fx,
        forceTimed: true
      }, (n) => M(n, {
        elTag: "div",
        elClasses: [
          "fc-timegrid-more-link-inner",
          "fc-sticky"
        ]
      }));
    }
  }
  function fx(t) {
    return t.shortText;
  }
  function hx(t, e, n) {
    let r = new Em();
    e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
    let s = r.addSegs(t), i = k0(s), a = mx(r);
    return a = vx(a, 1), {
      segRects: bx(a),
      hiddenGroups: i
    };
  }
  function mx(t) {
    const { entriesByLevel: e } = t, n = Uc((r, s) => r + ":" + s, (r, s) => {
      let i = yx(t, r, s), a = Df(i, n), l = e[r][s];
      return [
        Object.assign(Object.assign({}, l), {
          nextLevelNodes: a[0]
        }),
        l.thickness + a[1]
      ];
    });
    return Df(e.length ? {
      level: 0,
      lateralStart: 0,
      lateralEnd: e[0].length
    } : null, n)[0];
  }
  function Df(t, e) {
    if (!t) return [
      [],
      0
    ];
    let { level: n, lateralStart: r, lateralEnd: s } = t, i = r, a = [];
    for (; i < s; ) a.push(e(n, i)), i += 1;
    return a.sort(px), [
      a.map(gx),
      a[0][1]
    ];
  }
  function px(t, e) {
    return e[1] - t[1];
  }
  function gx(t) {
    return t[0];
  }
  function yx(t, e, n) {
    let { levelCoords: r, entriesByLevel: s } = t, i = s[e][n], a = r[e] + i.thickness, l = r.length, c = e;
    for (; c < l && r[c] < a; c += 1) ;
    for (; c < l; c += 1) {
      let d = s[c], f, m = zl(d, i.span.start, Bl), g = m[0] + m[1], y = g;
      for (; (f = d[y]) && f.span.start < i.span.end; ) y += 1;
      if (g < y) return {
        level: c,
        lateralStart: g,
        lateralEnd: y
      };
    }
    return null;
  }
  function vx(t, e) {
    const n = Uc((r, s, i) => zr(r), (r, s, i) => {
      let { nextLevelNodes: a, thickness: l } = r, c = l + i, d = l / c, f, m = [];
      if (!a.length) f = e;
      else for (let y of a) if (f === void 0) {
        let v = n(y, s, c);
        f = v[0], m.push(v[1]);
      } else {
        let v = n(y, f, 0);
        m.push(v[1]);
      }
      let g = (f - s) * d;
      return [
        f - g,
        Object.assign(Object.assign({}, r), {
          thickness: g,
          nextLevelNodes: m
        })
      ];
    });
    return t.map((r) => n(r, 0, 0)[1]);
  }
  function bx(t) {
    let e = [];
    const n = Uc((s, i, a) => zr(s), (s, i, a) => {
      let l = Object.assign(Object.assign({}, s), {
        levelCoord: i,
        stackDepth: a,
        stackForward: 0
      });
      return e.push(l), l.stackForward = r(s.nextLevelNodes, i + s.thickness, a + 1) + 1;
    });
    function r(s, i, a) {
      let l = 0;
      for (let c of s) l = Math.max(n(c, i, a), l);
      return l;
    }
    return r(t, 0, 0), e;
  }
  function Uc(t, e) {
    const n = {};
    return (...r) => {
      let s = t(...r);
      return s in n ? n[s] : n[s] = e(...r);
    };
  }
  function kf(t, e, n = null, r = 0) {
    let s = [];
    if (n) for (let i = 0; i < t.length; i += 1) {
      let a = t[i], l = n.computeDateTop(a.start, e), c = Math.max(l + (r || 0), n.computeDateTop(a.end, e));
      s.push({
        start: Math.round(l),
        end: Math.round(c)
      });
    }
    return s;
  }
  function wx(t, e, n, r) {
    let s = [], i = [];
    for (let d = 0; d < t.length; d += 1) {
      let f = e[d];
      f ? s.push({
        index: d,
        thickness: 1,
        span: f
      }) : i.push(t[d]);
    }
    let { segRects: a, hiddenGroups: l } = hx(s, n, r), c = [];
    for (let d of a) c.push({
      seg: t[d.index],
      rect: d
    });
    for (let d of i) c.push({
      seg: d,
      rect: null
    });
    return {
      segPlacements: c,
      hiddenGroups: l
    };
  }
  const Sx = nt({
    hour: "numeric",
    minute: "2-digit",
    meridiem: false
  });
  class dp extends ze {
    render() {
      return M(Fc, Object.assign({}, this.props, {
        elClasses: [
          "fc-timegrid-event",
          "fc-v-event",
          this.props.isShort && "fc-timegrid-event-short"
        ],
        defaultTimeFormat: Sx
      }));
    }
  }
  class _x extends ze {
    constructor() {
      super(...arguments), this.sortEventSegs = Te(Cc);
    }
    render() {
      let { props: e, context: n } = this, { options: r } = n, s = r.selectMirror, i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || s && e.dateSelectionSegs || [], a = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, l = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
      return M(jc, {
        elTag: "td",
        elRef: e.elRef,
        elClasses: [
          "fc-timegrid-col",
          ...e.extraClassNames || []
        ],
        elAttrs: Object.assign({
          role: "gridcell"
        }, e.extraDataAttrs),
        date: e.date,
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        extraRenderProps: e.extraRenderProps
      }, (c) => M("div", {
        className: "fc-timegrid-col-frame"
      }, M("div", {
        className: "fc-timegrid-col-bg"
      }, this.renderFillSegs(e.businessHourSegs, "non-business"), this.renderFillSegs(e.bgEventSegs, "bg-event"), this.renderFillSegs(e.dateSelectionSegs, "highlight")), M("div", {
        className: "fc-timegrid-col-events"
      }, this.renderFgSegs(l, a, false, false, false)), M("div", {
        className: "fc-timegrid-col-events"
      }, this.renderFgSegs(i, {}, !!e.eventDrag, !!e.eventResize, !!s, "mirror")), M("div", {
        className: "fc-timegrid-now-indicator-container"
      }, this.renderNowIndicator(e.nowIndicatorSegs)), Vc(r) && M(c, {
        elTag: "div",
        elClasses: [
          "fc-timegrid-col-misc"
        ]
      })));
    }
    renderFgSegs(e, n, r, s, i, a) {
      let { props: l } = this;
      return l.forPrint ? fp(e, l) : this.renderPositionedFgSegs(e, n, r, s, i, a);
    }
    renderPositionedFgSegs(e, n, r, s, i, a) {
      let { eventMaxStack: l, eventShortHeight: c, eventOrderStrict: d, eventMinHeight: f } = this.context.options, { date: m, slatCoords: g, eventSelection: y, todayRange: v, nowDate: S } = this.props, b = r || s || i, _ = kf(e, m, g, f), { segPlacements: E, hiddenGroups: R } = wx(e, _, d, l);
      return M(Ze, null, this.renderHiddenGroups(R, e), E.map((T) => {
        let { seg: x, rect: N } = T, I = x.eventRange.instance.instanceId, O = b || !!(!n[I] && N), J = xl(N && N.span), U = !b && N ? this.computeSegHStyle(N) : {
          left: 0,
          right: 0
        }, L = !!N && N.stackForward > 0, ee = !!N && N.span.end - N.span.start < c;
        return M("div", {
          className: "fc-timegrid-event-harness" + (L ? " fc-timegrid-event-harness-inset" : ""),
          key: a || I,
          style: Object.assign(Object.assign({
            visibility: O ? "" : "hidden"
          }, J), U)
        }, M(dp, Object.assign({
          seg: x,
          isDragging: r,
          isResizing: s,
          isDateSelecting: i,
          isSelected: I === y,
          isShort: ee
        }, qn(x, v, S))));
      }));
    }
    renderHiddenGroups(e, n) {
      let { extraDateSpan: r, dateProfile: s, todayRange: i, nowDate: a, eventSelection: l, eventDrag: c, eventResize: d } = this.props;
      return M(Ze, null, e.map((f) => {
        let m = xl(f.span), g = Dx(f.entries, n);
        return M(dx, {
          key: nm(Bm(g)),
          hiddenSegs: g,
          top: m.top,
          bottom: m.bottom,
          extraDateSpan: r,
          dateProfile: s,
          todayRange: i,
          nowDate: a,
          eventSelection: l,
          eventDrag: c,
          eventResize: d
        });
      }));
    }
    renderFillSegs(e, n) {
      let { props: r, context: s } = this, a = kf(e, r.date, r.slatCoords, s.options.eventMinHeight).map((l, c) => {
        let d = e[c];
        return M("div", {
          key: Sm(d.eventRange),
          className: "fc-timegrid-bg-harness",
          style: xl(l)
        }, n === "bg-event" ? M(jm, Object.assign({
          seg: d
        }, qn(d, r.todayRange, r.nowDate))) : Vm(n));
      });
      return M(Ze, null, a);
    }
    renderNowIndicator(e) {
      let { slatCoords: n, date: r } = this.props;
      return n ? e.map((s, i) => M(Hc, {
        key: i,
        elClasses: [
          "fc-timegrid-now-indicator-line"
        ],
        elStyle: {
          top: n.computeDateTop(s.start, r)
        },
        isAxis: false,
        date: r
      })) : null;
    }
    computeSegHStyle(e) {
      let { isRtl: n, options: r } = this.context, s = r.slotEventOverlap, i = e.levelCoord, a = e.levelCoord + e.thickness, l, c;
      s && (a = Math.min(1, i + (a - i) * 2)), n ? (l = 1 - a, c = i) : (l = i, c = 1 - a);
      let d = {
        zIndex: e.stackDepth + 1,
        left: l * 100 + "%",
        right: c * 100 + "%"
      };
      return s && !e.stackForward && (d[n ? "marginLeft" : "marginRight"] = 20), d;
    }
  }
  function fp(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: s, eventResize: i }) {
    let a = (s ? s.affectedInstances : null) || (i ? i.affectedInstances : null) || {};
    return M(Ze, null, t.map((l) => {
      let c = l.eventRange.instance.instanceId;
      return M("div", {
        key: c,
        style: {
          visibility: a[c] ? "hidden" : ""
        }
      }, M(dp, Object.assign({
        seg: l,
        isDragging: false,
        isResizing: false,
        isDateSelecting: false,
        isSelected: c === r,
        isShort: false
      }, qn(l, e, n))));
    }));
  }
  function xl(t) {
    return t ? {
      top: t.start,
      bottom: -t.end
    } : {
      top: "",
      bottom: ""
    };
  }
  function Dx(t, e) {
    return t.map((n) => e[n.index]);
  }
  class kx extends ze {
    constructor() {
      super(...arguments), this.splitFgEventSegs = Te(ei), this.splitBgEventSegs = Te(ei), this.splitBusinessHourSegs = Te(ei), this.splitNowIndicatorSegs = Te(ei), this.splitDateSelectionSegs = Te(ei), this.splitEventDrag = Te(_f), this.splitEventResize = Te(_f), this.rootElRef = Ft(), this.cellElRefs = new zn();
    }
    render() {
      let { props: e, context: n } = this, r = n.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), s = e.cells.length, i = this.splitFgEventSegs(e.fgEventSegs, s), a = this.splitBgEventSegs(e.bgEventSegs, s), l = this.splitBusinessHourSegs(e.businessHourSegs, s), c = this.splitNowIndicatorSegs(e.nowIndicatorSegs, s), d = this.splitDateSelectionSegs(e.dateSelectionSegs, s), f = this.splitEventDrag(e.eventDrag, s), m = this.splitEventResize(e.eventResize, s);
      return M("div", {
        className: "fc-timegrid-cols",
        ref: this.rootElRef
      }, M("table", {
        role: "presentation",
        style: {
          minWidth: e.tableMinWidth,
          width: e.clientWidth
        }
      }, e.tableColGroupNode, M("tbody", {
        role: "presentation"
      }, M("tr", {
        role: "row"
      }, e.axis && M("td", {
        "aria-hidden": true,
        className: "fc-timegrid-col fc-timegrid-axis"
      }, M("div", {
        className: "fc-timegrid-col-frame"
      }, M("div", {
        className: "fc-timegrid-now-indicator-container"
      }, typeof r == "number" && M(Hc, {
        elClasses: [
          "fc-timegrid-now-indicator-arrow"
        ],
        elStyle: {
          top: r
        },
        isAxis: true,
        date: e.nowDate
      })))), e.cells.map((g, y) => M(_x, {
        key: g.key,
        elRef: this.cellElRefs.createRef(g.key),
        dateProfile: e.dateProfile,
        date: g.date,
        nowDate: e.nowDate,
        todayRange: e.todayRange,
        extraRenderProps: g.extraRenderProps,
        extraDataAttrs: g.extraDataAttrs,
        extraClassNames: g.extraClassNames,
        extraDateSpan: g.extraDateSpan,
        fgEventSegs: i[y],
        bgEventSegs: a[y],
        businessHourSegs: l[y],
        nowIndicatorSegs: c[y],
        dateSelectionSegs: d[y],
        eventDrag: f[y],
        eventResize: m[y],
        slatCoords: e.slatCoords,
        eventSelection: e.eventSelection,
        forPrint: e.forPrint
      }))))));
    }
    componentDidMount() {
      this.updateCoords();
    }
    componentDidUpdate() {
      this.updateCoords();
    }
    updateCoords() {
      let { props: e } = this;
      e.onColCoords && e.clientWidth !== null && e.onColCoords(new Ns(this.rootElRef.current, Tx(this.cellElRefs.currentMap, e.cells), true, false));
    }
  }
  function Tx(t, e) {
    return e.map((n) => t[n.key]);
  }
  class xx extends dn {
    constructor() {
      super(...arguments), this.processSlotOptions = Te(Mx), this.state = {
        slatCoords: null
      }, this.handleRootEl = (e) => {
        e ? this.context.registerInteractiveComponent(this, {
          el: e,
          isHitComboAllowed: this.props.isHitComboAllowed
        }) : this.context.unregisterInteractiveComponent(this);
      }, this.handleScrollRequest = (e) => {
        let { onScrollTopRequest: n } = this.props, { slatCoords: r } = this.state;
        if (n && r) {
          if (e.time) {
            let s = r.computeTimeTop(e.time);
            s = Math.ceil(s), s && (s += 1), n(s);
          }
          return true;
        }
        return false;
      }, this.handleColCoords = (e) => {
        this.colCoords = e;
      }, this.handleSlatCoords = (e) => {
        this.setState({
          slatCoords: e
        }), this.props.onSlatCoords && this.props.onSlatCoords(e);
      };
    }
    render() {
      let { props: e, state: n } = this;
      return M("div", {
        className: "fc-timegrid-body",
        ref: this.handleRootEl,
        style: {
          width: e.clientWidth,
          minWidth: e.tableMinWidth
        }
      }, M(cx, {
        axis: e.axis,
        dateProfile: e.dateProfile,
        slatMetas: e.slatMetas,
        clientWidth: e.clientWidth,
        minHeight: e.expandRows ? e.clientHeight : "",
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.axis ? e.tableColGroupNode : null,
        onCoords: this.handleSlatCoords
      }), M(kx, {
        cells: e.cells,
        axis: e.axis,
        dateProfile: e.dateProfile,
        businessHourSegs: e.businessHourSegs,
        bgEventSegs: e.bgEventSegs,
        fgEventSegs: e.fgEventSegs,
        dateSelectionSegs: e.dateSelectionSegs,
        eventSelection: e.eventSelection,
        eventDrag: e.eventDrag,
        eventResize: e.eventResize,
        todayRange: e.todayRange,
        nowDate: e.nowDate,
        nowIndicatorSegs: e.nowIndicatorSegs,
        clientWidth: e.clientWidth,
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.tableColGroupNode,
        slatCoords: n.slatCoords,
        onColCoords: this.handleColCoords,
        forPrint: e.forPrint
      }));
    }
    componentDidMount() {
      this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
    componentDidUpdate(e) {
      this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
      this.scrollResponder.detach();
    }
    queryHit(e, n) {
      let { dateEnv: r, options: s } = this.context, { colCoords: i } = this, { dateProfile: a } = this.props, { slatCoords: l } = this.state, { snapDuration: c, snapsPerSlot: d } = this.processSlotOptions(this.props.slotDuration, s.snapDuration), f = i.leftToIndex(e), m = l.positions.topToIndex(n);
      if (f != null && m != null) {
        let g = this.props.cells[f], y = l.positions.tops[m], v = l.positions.getHeight(m), S = (n - y) / v, b = Math.floor(S * d), _ = m * d + b, E = this.props.cells[f].date, R = Hl(a.slotMinTime, h_(c, _)), T = r.add(E, R), x = r.add(T, c);
        return {
          dateProfile: a,
          dateSpan: Object.assign({
            range: {
              start: T,
              end: x
            },
            allDay: false
          }, g.extraDateSpan),
          dayEl: i.els[f],
          rect: {
            left: i.lefts[f],
            right: i.rights[f],
            top: y,
            bottom: y + v
          },
          layer: 0
        };
      }
      return null;
    }
  }
  function Mx(t, e) {
    let n = e || t, r = gc(t, n);
    return r === null && (n = t, r = 1), {
      snapDuration: n,
      snapsPerSlot: r
    };
  }
  class Ex extends Pm {
    sliceRange(e, n) {
      let r = [];
      for (let s = 0; s < n.length; s += 1) {
        let i = Tr(e, n[s]);
        i && r.push({
          start: i.start,
          end: i.end,
          isStart: i.start.valueOf() === e.start.valueOf(),
          isEnd: i.end.valueOf() === e.end.valueOf(),
          col: s
        });
      }
      return r;
    }
  }
  class Cx extends dn {
    constructor() {
      super(...arguments), this.buildDayRanges = Te(Ax), this.slicer = new Ex(), this.timeColsRef = Ft();
    }
    render() {
      let { props: e, context: n } = this, { dateProfile: r, dayTableModel: s } = e, { nowIndicator: i, nextDayThreshold: a } = n.options, l = this.buildDayRanges(s, r, n.dateEnv);
      return M(es, {
        unit: i ? "minute" : "day"
      }, (c, d) => M(xx, Object.assign({
        ref: this.timeColsRef
      }, this.slicer.sliceProps(e, r, null, n, l), {
        forPrint: e.forPrint,
        axis: e.axis,
        dateProfile: r,
        slatMetas: e.slatMetas,
        slotDuration: e.slotDuration,
        cells: s.cells[0],
        tableColGroupNode: e.tableColGroupNode,
        tableMinWidth: e.tableMinWidth,
        clientWidth: e.clientWidth,
        clientHeight: e.clientHeight,
        expandRows: e.expandRows,
        nowDate: c,
        nowIndicatorSegs: i && this.slicer.sliceNowDate(c, r, a, n, l),
        todayRange: d,
        onScrollTopRequest: e.onScrollTopRequest,
        onSlatCoords: e.onSlatCoords
      })));
    }
  }
  function Ax(t, e, n) {
    let r = [];
    for (let s of t.headerDates) r.push({
      start: n.add(s, e.slotMinTime),
      end: n.add(s, e.slotMaxTime)
    });
    return r;
  }
  const Tf = [
    {
      hours: 1
    },
    {
      minutes: 30
    },
    {
      minutes: 15
    },
    {
      seconds: 30
    },
    {
      seconds: 15
    }
  ];
  function Rx(t, e, n, r, s) {
    let i = /* @__PURE__ */ new Date(0), a = t, l = Pe(0), c = n || Ox(r), d = [];
    for (; sn(a) < sn(e); ) {
      let f = s.add(i, a), m = gc(l, c) !== null;
      d.push({
        date: f,
        time: a,
        key: f.toISOString(),
        isoTimeStr: C_(f),
        isLabeled: m
      }), a = Hl(a, r), l = Hl(l, r);
    }
    return d;
  }
  function Ox(t) {
    let e, n, r;
    for (e = Tf.length - 1; e >= 0; e -= 1) if (n = Pe(Tf[e]), r = gc(n, t), r !== null && r > 1) return n;
    return t;
  }
  class Ix extends ix {
    constructor() {
      super(...arguments), this.buildTimeColsModel = Te(Px), this.buildSlatMetas = Te(Rx);
    }
    render() {
      let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: s } = this, { dateProfile: i } = s, a = this.buildTimeColsModel(i, r), l = this.allDaySplitter.splitProps(s), c = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: d } = e, f = !d, m = d, g = e.dayHeaders && M(Rm, {
        dates: a.headerDates,
        dateProfile: i,
        datesRepDistinctDays: true,
        renderIntro: f ? this.renderHeadAxis : null
      }), y = e.allDaySlot !== false && ((S) => M(cp, Object.assign({}, l.allDay, {
        dateProfile: i,
        dayTableModel: a,
        nextDayThreshold: e.nextDayThreshold,
        tableMinWidth: S.tableMinWidth,
        colGroupNode: S.tableColGroupNode,
        renderRowIntro: f ? this.renderTableRowAxis : null,
        showWeekNumbers: false,
        expandRows: false,
        headerAlignElRef: this.headerElRef,
        clientWidth: S.clientWidth,
        clientHeight: S.clientHeight,
        forPrint: s.forPrint
      }, this.getAllDayMaxEventProps()))), v = (S) => M(Cx, Object.assign({}, l.timed, {
        dayTableModel: a,
        dateProfile: i,
        axis: f,
        slotDuration: e.slotDuration,
        slatMetas: c,
        forPrint: s.forPrint,
        tableColGroupNode: S.tableColGroupNode,
        tableMinWidth: S.tableMinWidth,
        clientWidth: S.clientWidth,
        clientHeight: S.clientHeight,
        onSlatCoords: this.handleSlatCoords,
        expandRows: S.expandRows,
        onScrollTopRequest: this.handleScrollTopRequest
      }));
      return m ? this.renderHScrollLayout(g, y, v, a.colCnt, d, c, this.state.slatCoords) : this.renderSimpleLayout(g, y, v);
    }
  }
  function Px(t, e) {
    let n = new Om(t.renderRange, e);
    return new Im(n, false);
  }
  var Nx = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
  uo(Nx);
  const Lx = {
    allDaySlot: Boolean
  };
  var Yx = fn({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: Lx,
    views: {
      timeGrid: {
        component: Ix,
        usesMinMaxTime: true,
        allDaySlot: true,
        slotDuration: "00:30:00",
        slotEventOverlap: true
      },
      timeGridDay: {
        type: "timeGrid",
        duration: {
          days: 1
        }
      },
      timeGridWeek: {
        type: "timeGrid",
        duration: {
          weeks: 1
        }
      }
    }
  });
  _o.touchMouseIgnoreWait = 500;
  let ql = 0, qa = 0, Ql = false;
  class hp {
    constructor(e) {
      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = false, this.shouldWatchScroll = true, this.isDragging = false, this.isTouchDragging = false, this.wasTouchScroll = false, this.handleMouseDown = (n) => {
        if (!this.shouldIgnoreMouse() && Fx(n) && this.tryStart(n)) {
          let r = this.createEventFromMouse(n, true);
          this.emitter.trigger("pointerdown", r), this.initScrollWatch(r), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp);
        }
      }, this.handleMouseMove = (n) => {
        let r = this.createEventFromMouse(n);
        this.recordCoords(r), this.emitter.trigger("pointermove", r);
      }, this.handleMouseUp = (n) => {
        document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(n)), this.cleanup();
      }, this.handleTouchStart = (n) => {
        if (this.tryStart(n)) {
          this.isTouchDragging = true;
          let r = this.createEventFromTouch(n, true);
          this.emitter.trigger("pointerdown", r), this.initScrollWatch(r);
          let s = n.target;
          this.shouldIgnoreMove || s.addEventListener("touchmove", this.handleTouchMove), s.addEventListener("touchend", this.handleTouchEnd), s.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, true);
        }
      }, this.handleTouchMove = (n) => {
        let r = this.createEventFromTouch(n);
        this.recordCoords(r), this.emitter.trigger("pointermove", r);
      }, this.handleTouchEnd = (n) => {
        if (this.isDragging) {
          let r = n.target;
          r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, true), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = false, Hx();
        }
      }, this.handleTouchScroll = () => {
        this.wasTouchScroll = true;
      }, this.handleScroll = (n) => {
        if (!this.shouldIgnoreMove) {
          let r = window.scrollX - this.prevScrollX + this.prevPageX, s = window.scrollY - this.prevScrollY + this.prevPageY;
          this.emitter.trigger("pointermove", {
            origEvent: n,
            isTouch: this.isTouchDragging,
            subjectEl: this.subjectEl,
            pageX: r,
            pageY: s,
            deltaX: r - this.origPageX,
            deltaY: s - this.origPageY
          });
        }
      }, this.containerEl = e, this.emitter = new wo(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
        passive: true
      }), jx();
    }
    destroy() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
        passive: true
      }), Vx();
    }
    tryStart(e) {
      let n = this.querySubjectEl(e), r = e.target;
      return n && (!this.handleSelector || At(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = true, this.wasTouchScroll = false, true) : false;
    }
    cleanup() {
      Ql = false, this.isDragging = false, this.subjectEl = null, this.destroyScrollWatch();
    }
    querySubjectEl(e) {
      return this.selector ? At(e.target, this.selector) : this.containerEl;
    }
    shouldIgnoreMouse() {
      return ql || this.isTouchDragging;
    }
    cancelTouchScroll() {
      this.isDragging && (Ql = true);
    }
    initScrollWatch(e) {
      this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, true));
    }
    recordCoords(e) {
      this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.scrollX, this.prevScrollY = window.scrollY);
    }
    destroyScrollWatch() {
      this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, true);
    }
    createEventFromMouse(e, n) {
      let r = 0, s = 0;
      return n ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (r = e.pageX - this.origPageX, s = e.pageY - this.origPageY), {
        origEvent: e,
        isTouch: false,
        subjectEl: this.subjectEl,
        pageX: e.pageX,
        pageY: e.pageY,
        deltaX: r,
        deltaY: s
      };
    }
    createEventFromTouch(e, n) {
      let r = e.touches, s, i, a = 0, l = 0;
      return r && r.length ? (s = r[0].pageX, i = r[0].pageY) : (s = e.pageX, i = e.pageY), n ? (this.origPageX = s, this.origPageY = i) : (a = s - this.origPageX, l = i - this.origPageY), {
        origEvent: e,
        isTouch: true,
        subjectEl: this.subjectEl,
        pageX: s,
        pageY: i,
        deltaX: a,
        deltaY: l
      };
    }
  }
  function Fx(t) {
    return t.button === 0 && !t.ctrlKey;
  }
  function Hx() {
    ql += 1, setTimeout(() => {
      ql -= 1;
    }, _o.touchMouseIgnoreWait);
  }
  function jx() {
    qa += 1, qa === 1 && window.addEventListener("touchmove", mp, {
      passive: false
    });
  }
  function Vx() {
    qa -= 1, qa || window.removeEventListener("touchmove", mp, {
      passive: false
    });
  }
  function mp(t) {
    Ql && t.preventDefault();
  }
  class Wx {
    constructor() {
      this.isVisible = false, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0;
    }
    start(e, n, r) {
      this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = n - window.scrollX, this.origScreenY = r - window.scrollY, this.deltaX = 0, this.deltaY = 0, this.updateElPosition();
    }
    handleMove(e, n) {
      this.deltaX = e - window.scrollX - this.origScreenX, this.deltaY = n - window.scrollY - this.origScreenY, this.updateElPosition();
    }
    setIsVisible(e) {
      e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e);
    }
    stop(e, n) {
      let r = () => {
        this.cleanup(), n();
      };
      e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(r, this.revertDuration) : setTimeout(r, 0);
    }
    doRevertAnimation(e, n) {
      let r = this.mirrorEl, s = this.sourceEl.getBoundingClientRect();
      r.style.transition = "top " + n + "ms,left " + n + "ms", di(r, {
        left: s.left,
        top: s.top
      }), JS(r, () => {
        r.style.transition = "", e();
      });
    }
    cleanup() {
      this.mirrorEl && (pc(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
    }
    updateElPosition() {
      this.sourceEl && this.isVisible && di(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
    getMirrorEl() {
      let e = this.sourceElRect, n = this.mirrorEl;
      return n || (n = this.mirrorEl = this.sourceEl.cloneNode(true), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.pointerEvents = "none", n.classList.add("fc-event-dragging"), di(n, {
        position: "fixed",
        zIndex: this.zIndex,
        visibility: "",
        boxSizing: "border-box",
        width: e.right - e.left,
        height: e.bottom - e.top,
        right: "auto",
        bottom: "auto",
        margin: 0
      }), this.parentNode.appendChild(n)), n;
    }
  }
  class pp extends Pc {
    constructor(e, n) {
      super(), this.handleScroll = () => {
        this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange();
      }, this.scrollController = e, this.doesListening = n, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll);
    }
    destroy() {
      this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll);
    }
    getScrollTop() {
      return this.scrollTop;
    }
    getScrollLeft() {
      return this.scrollLeft;
    }
    setScrollTop(e) {
      this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange());
    }
    setScrollLeft(e) {
      this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange());
    }
    getClientWidth() {
      return this.clientWidth;
    }
    getClientHeight() {
      return this.clientHeight;
    }
    getScrollWidth() {
      return this.scrollWidth;
    }
    getScrollHeight() {
      return this.scrollHeight;
    }
    handleScrollChange() {
    }
  }
  class gp extends pp {
    constructor(e, n) {
      super(new _0(e), n);
    }
    getEventTarget() {
      return this.scrollController.el;
    }
    computeClientRect() {
      return w0(this.scrollController.el);
    }
  }
  class Ux extends pp {
    constructor(e) {
      super(new D0(), e);
    }
    getEventTarget() {
      return window;
    }
    computeClientRect() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight
      };
    }
    handleScrollChange() {
      this.clientRect = this.computeClientRect();
    }
  }
  const xf = typeof performance == "function" ? performance.now : Date.now;
  class Bx {
    constructor() {
      this.isEnabled = true, this.scrollQuery = [
        window,
        ".fc-scroller"
      ], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = false, this.scrollCaches = null, this.everMovedUp = false, this.everMovedDown = false, this.everMovedLeft = false, this.everMovedRight = false, this.animate = () => {
        if (this.isAnimating) {
          let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
          if (e) {
            let n = xf();
            this.handleSide(e, (n - this.msSinceRequest) / 1e3), this.requestAnimation(n);
          } else this.isAnimating = false;
        }
      };
    }
    start(e, n, r) {
      this.isEnabled && (this.scrollCaches = this.buildCaches(r), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = false, this.everMovedDown = false, this.everMovedLeft = false, this.everMovedRight = false, this.handleMove(e, n));
    }
    handleMove(e, n) {
      if (this.isEnabled) {
        let r = e - window.scrollX, s = n - window.scrollY, i = this.pointerScreenY === null ? 0 : s - this.pointerScreenY, a = this.pointerScreenX === null ? 0 : r - this.pointerScreenX;
        i < 0 ? this.everMovedUp = true : i > 0 && (this.everMovedDown = true), a < 0 ? this.everMovedLeft = true : a > 0 && (this.everMovedRight = true), this.pointerScreenX = r, this.pointerScreenY = s, this.isAnimating || (this.isAnimating = true, this.requestAnimation(xf()));
      }
    }
    stop() {
      if (this.isEnabled) {
        this.isAnimating = false;
        for (let e of this.scrollCaches) e.destroy();
        this.scrollCaches = null;
      }
    }
    requestAnimation(e) {
      this.msSinceRequest = e, requestAnimationFrame(this.animate);
    }
    handleSide(e, n) {
      let { scrollCache: r } = e, { edgeThreshold: s } = this, i = s - e.distance, a = i * i / (s * s) * this.maxVelocity * n, l = 1;
      switch (e.name) {
        case "left":
          l = -1;
        case "right":
          r.setScrollLeft(r.getScrollLeft() + a * l);
          break;
        case "top":
          l = -1;
        case "bottom":
          r.setScrollTop(r.getScrollTop() + a * l);
          break;
      }
    }
    computeBestEdge(e, n) {
      let { edgeThreshold: r } = this, s = null, i = this.scrollCaches || [];
      for (let a of i) {
        let l = a.clientRect, c = e - l.left, d = l.right - e, f = n - l.top, m = l.bottom - n;
        c >= 0 && d >= 0 && f >= 0 && m >= 0 && (f <= r && this.everMovedUp && a.canScrollUp() && (!s || s.distance > f) && (s = {
          scrollCache: a,
          name: "top",
          distance: f
        }), m <= r && this.everMovedDown && a.canScrollDown() && (!s || s.distance > m) && (s = {
          scrollCache: a,
          name: "bottom",
          distance: m
        }), c <= r && this.everMovedLeft && a.canScrollLeft() && (!s || s.distance > c) && (s = {
          scrollCache: a,
          name: "left",
          distance: c
        }), d <= r && this.everMovedRight && a.canScrollRight() && (!s || s.distance > d) && (s = {
          scrollCache: a,
          name: "right",
          distance: d
        }));
      }
      return s;
    }
    buildCaches(e) {
      return this.queryScrollEls(e).map((n) => n === window ? new Ux(false) : new gp(n, false));
    }
    queryScrollEls(e) {
      let n = [];
      for (let r of this.scrollQuery) typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
      return n;
    }
  }
  class Hs extends x0 {
    constructor(e, n) {
      super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = true, this.mirrorNeedsRevert = false, this.isInteracting = false, this.isDragging = false, this.isDelayEnded = false, this.isDistanceSurpassed = false, this.delayTimeoutId = null, this.onPointerDown = (s) => {
        this.isDragging || (this.isInteracting = true, this.isDelayEnded = false, this.isDistanceSurpassed = false, KS(document.body), t_(document.body), s.isTouch || s.origEvent.preventDefault(), this.emitter.trigger("pointerdown", s), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(false), this.mirror.start(s.subjectEl, s.pageX, s.pageY), this.startDelay(s), this.minDistance || this.handleDistanceSurpassed(s)));
      }, this.onPointerMove = (s) => {
        if (this.isInteracting) {
          if (this.emitter.trigger("pointermove", s), !this.isDistanceSurpassed) {
            let i = this.minDistance, a, { deltaX: l, deltaY: c } = s;
            a = l * l + c * c, a >= i * i && this.handleDistanceSurpassed(s);
          }
          this.isDragging && (s.origEvent.type !== "scroll" && (this.mirror.handleMove(s.pageX, s.pageY), this.autoScroller.handleMove(s.pageX, s.pageY)), this.emitter.trigger("dragmove", s));
        }
      }, this.onPointerUp = (s) => {
        this.isInteracting && (this.isInteracting = false, e_(document.body), n_(document.body), this.emitter.trigger("pointerup", s), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(s)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
      };
      let r = this.pointer = new hp(e);
      r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new Wx(), this.autoScroller = new Bx();
    }
    destroy() {
      this.pointer.destroy(), this.onPointerUp({});
    }
    startDelay(e) {
      typeof this.delay == "number" ? this.delayTimeoutId = setTimeout(() => {
        this.delayTimeoutId = null, this.handleDelayEnd(e);
      }, this.delay) : this.handleDelayEnd(e);
    }
    handleDelayEnd(e) {
      this.isDelayEnded = true, this.tryStartDrag(e);
    }
    handleDistanceSurpassed(e) {
      this.isDistanceSurpassed = true, this.tryStartDrag(e);
    }
    tryStartDrag(e) {
      this.isDelayEnded && this.isDistanceSurpassed && (!this.pointer.wasTouchScroll || this.touchScrollAllowed) && (this.isDragging = true, this.mirrorNeedsRevert = false, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), this.touchScrollAllowed === false && this.pointer.cancelTouchScroll());
    }
    tryStopDrag(e) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
    }
    stopDrag(e) {
      this.isDragging = false, this.emitter.trigger("dragend", e);
    }
    setIgnoreMove(e) {
      this.pointer.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      this.mirror.setIsVisible(e);
    }
    setMirrorNeedsRevert(e) {
      this.mirrorNeedsRevert = e;
    }
    setAutoScrollEnabled(e) {
      this.autoScroller.isEnabled = e;
    }
  }
  class zx {
    constructor(e) {
      this.el = e, this.origRect = Ic(e), this.scrollCaches = Mm(e).map((n) => new gp(n, true));
    }
    destroy() {
      for (let e of this.scrollCaches) e.destroy();
    }
    computeLeft() {
      let e = this.origRect.left;
      for (let n of this.scrollCaches) e += n.origScrollLeft - n.getScrollLeft();
      return e;
    }
    computeTop() {
      let e = this.origRect.top;
      for (let n of this.scrollCaches) e += n.origScrollTop - n.getScrollTop();
      return e;
    }
    isWithinClipping(e, n) {
      let r = {
        left: e,
        top: n
      };
      for (let s of this.scrollCaches) if (!$x(s.getEventTarget()) && !o0(r, s.clientRect)) return false;
      return true;
    }
  }
  function $x(t) {
    let e = t.tagName;
    return e === "HTML" || e === "BODY";
  }
  class Li {
    constructor(e, n) {
      this.useSubjectCenter = false, this.requireInitial = true, this.disablePointCheck = false, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = (r) => {
        let { dragging: s } = this;
        this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(r), this.initialHit || !this.requireInitial ? (s.setIgnoreMove(false), this.emitter.trigger("pointerdown", r)) : s.setIgnoreMove(true);
      }, this.handleDragStart = (r) => {
        this.emitter.trigger("dragstart", r), this.handleMove(r, true);
      }, this.handleDragMove = (r) => {
        this.emitter.trigger("dragmove", r), this.handleMove(r);
      }, this.handlePointerUp = (r) => {
        this.releaseHits(), this.emitter.trigger("pointerup", r);
      }, this.handleDragEnd = (r) => {
        this.movingHit && this.emitter.trigger("hitupdate", null, true, r), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", r);
      }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new wo();
    }
    processFirstCoord(e) {
      let n = {
        left: e.pageX,
        top: e.pageY
      }, r = n, s = e.subjectEl, i;
      s instanceof HTMLElement && (i = Ic(s), r = l0(r, i));
      let a = this.initialHit = this.queryHitForOffset(r.left, r.top);
      if (a) {
        if (this.useSubjectCenter && i) {
          let l = Tm(i, a.rect);
          l && (r = c0(l));
        }
        this.coordAdjust = u0(r, n);
      } else this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
    handleMove(e, n) {
      let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
      (n || !ko(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, false, e));
    }
    prepareHits() {
      this.offsetTrackers = er(this.droppableStore, (e) => (e.component.prepareHits(), new zx(e.el)));
    }
    releaseHits() {
      let { offsetTrackers: e } = this;
      for (let n in e) e[n].destroy();
      this.offsetTrackers = {};
    }
    queryHitForOffset(e, n) {
      let { droppableStore: r, offsetTrackers: s } = this, i = null;
      for (let a in r) {
        let l = r[a].component, c = s[a];
        if (c && c.isWithinClipping(e, n)) {
          let d = c.computeLeft(), f = c.computeTop(), m = e - d, g = n - f, { origRect: y } = c, v = y.right - y.left, S = y.bottom - y.top;
          if (m >= 0 && m < v && g >= 0 && g < S) {
            let b = l.queryHit(m, g, v, S);
            b && yo(b.dateProfile.activeRange, b.dateSpan.range) && (this.disablePointCheck || c.el.contains(c.el.getRootNode().elementFromPoint(m + d - window.scrollX, g + f - window.scrollY))) && (!i || b.layer > i.layer) && (b.componentId = a, b.context = l.context, b.rect.left += d, b.rect.right += d, b.rect.top += f, b.rect.bottom += f, i = b);
          }
        }
      }
      return i;
    }
  }
  function ko(t, e) {
    return !t && !e ? true : !!t != !!e ? false : QD(t.dateSpan, e.dateSpan);
  }
  function Bc(t, e) {
    let n = {};
    for (let r of e.pluginHooks.datePointTransforms) Object.assign(n, r(t, e));
    return Object.assign(n, Gx(t, e.dateEnv)), n;
  }
  function Gx(t, e) {
    return {
      date: e.toDate(t.range.start),
      dateStr: e.formatIso(t.range.start, {
        omitTime: t.allDay
      }),
      allDay: t.allDay
    };
  }
  class Zx extends Fs {
    constructor(e) {
      super(e), this.handlePointerDown = (r) => {
        let { dragging: s } = this, i = r.origEvent.target;
        s.setIgnoreMove(!this.component.isValidDateDownEl(i));
      }, this.handleDragEnd = (r) => {
        let { component: s } = this, { pointer: i } = this.dragging;
        if (!i.wasTouchScroll) {
          let { initialHit: a, finalHit: l } = this.hitDragging;
          if (a && l && ko(a, l)) {
            let { context: c } = s, d = Object.assign(Object.assign({}, Bc(a.dateSpan, c)), {
              dayEl: a.dayEl,
              jsEvent: r.origEvent,
              view: c.viewApi || c.calendarApi.view
            });
            c.emitter.trigger("dateClick", d);
          }
        }
      }, this.dragging = new Hs(e.el), this.dragging.autoScroller.isEnabled = false;
      let n = this.hitDragging = new Li(this.dragging, Rc(e));
      n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
  }
  class qx extends Fs {
    constructor(e) {
      super(e), this.dragSelection = null, this.handlePointerDown = (a) => {
        let { component: l, dragging: c } = this, { options: d } = l.context, f = d.selectable && l.isValidDateDownEl(a.origEvent.target);
        c.setIgnoreMove(!f), c.delay = a.isTouch ? Qx(l) : null;
      }, this.handleDragStart = (a) => {
        this.component.context.calendarApi.unselect(a);
      }, this.handleHitUpdate = (a, l) => {
        let { context: c } = this.component, d = null, f = false;
        if (a) {
          let m = this.hitDragging.initialHit;
          a.componentId === m.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(m, a) || (d = Xx(m, a, c.pluginHooks.dateSelectionTransformers)), (!d || !I0(d, a.dateProfile, c)) && (f = true, d = null);
        }
        d ? c.dispatch({
          type: "SELECT_DATES",
          selection: d
        }) : l || c.dispatch({
          type: "UNSELECT_DATES"
        }), f ? ho() : mo(), l || (this.dragSelection = d);
      }, this.handlePointerUp = (a) => {
        this.dragSelection && (vm(this.dragSelection, a, this.component.context), this.dragSelection = null);
      };
      let { component: n } = e, { options: r } = n.context, s = this.dragging = new Hs(e.el);
      s.touchScrollAllowed = false, s.minDistance = r.selectMinDistance || 0, s.autoScroller.isEnabled = r.dragScroll;
      let i = this.hitDragging = new Li(this.dragging, Rc(e));
      i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp);
    }
    destroy() {
      this.dragging.destroy();
    }
  }
  function Qx(t) {
    let { options: e } = t.context, n = e.selectLongPressDelay;
    return n == null && (n = e.longPressDelay), n;
  }
  function Xx(t, e, n) {
    let r = t.dateSpan, s = e.dateSpan, i = [
      r.range.start,
      r.range.end,
      s.range.start,
      s.range.end
    ];
    i.sort(o_);
    let a = {};
    for (let l of n) {
      let c = l(t, e);
      if (c === false) return null;
      c && Object.assign(a, c);
    }
    return a.range = {
      start: i[0],
      end: i[3]
    }, a.allDay = r.allDay, a;
  }
  class Yi extends Fs {
    constructor(e) {
      super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = false, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (a) => {
        let l = a.origEvent.target, { component: c, dragging: d } = this, { mirror: f } = d, { options: m } = c.context, g = c.context;
        this.subjectEl = a.subjectEl;
        let y = this.subjectSeg = Is(a.subjectEl), S = (this.eventRange = y.eventRange).instance.instanceId;
        this.relevantEvents = Tc(g.getCurrentData().eventStore, S), d.minDistance = a.isTouch ? 0 : m.eventDragMinDistance, d.delay = a.isTouch && S !== c.props.eventSelection ? Kx(c) : null, m.fixedMirrorParent ? f.parentNode = m.fixedMirrorParent : f.parentNode = At(l, ".fc"), f.revertDuration = m.dragRevertDuration;
        let b = c.isValidSegDownEl(l) && !At(l, ".fc-event-resizer");
        d.setIgnoreMove(!b), this.isDragging = b && a.subjectEl.classList.contains("fc-event-draggable");
      }, this.handleDragStart = (a) => {
        let l = this.component.context, c = this.eventRange, d = c.instance.instanceId;
        a.isTouch ? d !== this.component.props.eventSelection && l.dispatch({
          type: "SELECT_EVENT",
          eventInstanceId: d
        }) : l.dispatch({
          type: "UNSELECT_EVENT"
        }), this.isDragging && (l.calendarApi.unselect(a), l.emitter.trigger("eventDragStart", {
          el: this.subjectEl,
          event: new rt(l, c.def, c.instance),
          jsEvent: a.origEvent,
          view: l.viewApi
        }));
      }, this.handleHitUpdate = (a, l) => {
        if (!this.isDragging) return;
        let c = this.relevantEvents, d = this.hitDragging.initialHit, f = this.component.context, m = null, g = null, y = null, v = false, S = {
          affectedEvents: c,
          mutatedEvents: Ot(),
          isEvent: true
        };
        if (a) {
          m = a.context;
          let b = m.options;
          f === m || b.editable && b.droppable ? (g = Jx(d, a, this.eventRange.instance.range.start, m.getCurrentData().pluginHooks.eventDragMutationMassagers), g && (y = Ec(c, m.getCurrentData().eventUiBases, g, m), S.mutatedEvents = y, Lc(S, a.dateProfile, m) || (v = true, g = null, y = null, S.mutatedEvents = Ot()))) : m = null;
        }
        this.displayDrag(m, S), v ? ho() : mo(), l || (f === m && ko(d, a) && (g = null), this.dragging.setMirrorNeedsRevert(!g), this.dragging.setMirrorIsVisible(!a || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = m, this.validMutation = g, this.mutatedRelevantEvents = y);
      }, this.handlePointerUp = () => {
        this.isDragging || this.cleanup();
      }, this.handleDragEnd = (a) => {
        if (this.isDragging) {
          let l = this.component.context, c = l.viewApi, { receivingContext: d, validMutation: f } = this, m = this.eventRange.def, g = this.eventRange.instance, y = new rt(l, m, g), v = this.relevantEvents, S = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
          if (this.clearDrag(), l.emitter.trigger("eventDragStop", {
            el: this.subjectEl,
            event: y,
            jsEvent: a.origEvent,
            view: c
          }), f) {
            if (d === l) {
              let _ = new rt(l, S.defs[m.defId], g ? S.instances[g.instanceId] : null);
              l.dispatch({
                type: "MERGE_EVENTS",
                eventStore: S
              });
              let E = {
                oldEvent: y,
                event: _,
                relatedEvents: Br(S, l, g),
                revert() {
                  l.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: v
                  });
                }
              }, R = {};
              for (let T of l.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(R, T(f, l));
              l.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, E), R), {
                el: a.subjectEl,
                delta: f.datesDelta,
                jsEvent: a.origEvent,
                view: c
              })), l.emitter.trigger("eventChange", E);
            } else if (d) {
              let _ = {
                event: y,
                relatedEvents: Br(v, l, g),
                revert() {
                  l.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: v
                  });
                }
              };
              l.emitter.trigger("eventLeave", Object.assign(Object.assign({}, _), {
                draggedEl: a.subjectEl,
                view: c
              })), l.dispatch({
                type: "REMOVE_EVENTS",
                eventStore: v
              }), l.emitter.trigger("eventRemove", _);
              let E = S.defs[m.defId], R = S.instances[g.instanceId], T = new rt(d, E, R);
              d.dispatch({
                type: "MERGE_EVENTS",
                eventStore: S
              });
              let x = {
                event: T,
                relatedEvents: Br(S, d, R),
                revert() {
                  d.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: S
                  });
                }
              };
              d.emitter.trigger("eventAdd", x), a.isTouch && d.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: g.instanceId
              }), d.emitter.trigger("drop", Object.assign(Object.assign({}, Bc(b.dateSpan, d)), {
                draggedEl: a.subjectEl,
                jsEvent: a.origEvent,
                view: b.context.viewApi
              })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, x), {
                draggedEl: a.subjectEl,
                view: b.context.viewApi
              }));
            }
          } else l.emitter.trigger("_noEventDrop");
        }
        this.cleanup();
      };
      let { component: n } = this, { options: r } = n.context, s = this.dragging = new Hs(e.el);
      s.pointer.selector = Yi.SELECTOR, s.touchScrollAllowed = false, s.autoScroller.isEnabled = r.dragScroll;
      let i = this.hitDragging = new Li(this.dragging, Ga);
      i.useSubjectCenter = e.useEventCenter, i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp), i.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    displayDrag(e, n) {
      let r = this.component.context, s = this.receivingContext;
      s && s !== e && (s === r ? s.dispatch({
        type: "SET_EVENT_DRAG",
        state: {
          affectedEvents: n.affectedEvents,
          mutatedEvents: Ot(),
          isEvent: true
        }
      }) : s.dispatch({
        type: "UNSET_EVENT_DRAG"
      })), e && e.dispatch({
        type: "SET_EVENT_DRAG",
        state: n
      });
    }
    clearDrag() {
      let e = this.component.context, { receivingContext: n } = this;
      n && n.dispatch({
        type: "UNSET_EVENT_DRAG"
      }), e !== n && e.dispatch({
        type: "UNSET_EVENT_DRAG"
      });
    }
    cleanup() {
      this.subjectSeg = null, this.isDragging = false, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null;
    }
  }
  Yi.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  function Jx(t, e, n, r) {
    let s = t.dateSpan, i = e.dateSpan, a = s.range.start, l = i.range.start, c = {};
    s.allDay !== i.allDay && (c.allDay = i.allDay, c.hasEnd = e.context.options.allDayMaintainDuration, i.allDay ? a = Xe(n) : a = n);
    let d = bs(a, l, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
    d.milliseconds && (c.allDay = false);
    let f = {
      datesDelta: d,
      standardProps: c
    };
    for (let m of r) m(f, t, e);
    return f;
  }
  function Kx(t) {
    let { options: e } = t.context, n = e.eventLongPressDelay;
    return n == null && (n = e.longPressDelay), n;
  }
  class eM extends Fs {
    constructor(e) {
      super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (i) => {
        let { component: a } = this, l = this.querySegEl(i), c = Is(l), d = this.eventRange = c.eventRange;
        this.dragging.minDistance = a.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(i.origEvent.target) || i.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
      }, this.handleDragStart = (i) => {
        let { context: a } = this.component, l = this.eventRange;
        this.relevantEvents = Tc(a.getCurrentData().eventStore, this.eventRange.instance.instanceId);
        let c = this.querySegEl(i);
        this.draggingSegEl = c, this.draggingSeg = Is(c), a.calendarApi.unselect(), a.emitter.trigger("eventResizeStart", {
          el: c,
          event: new rt(a, l.def, l.instance),
          jsEvent: i.origEvent,
          view: a.viewApi
        });
      }, this.handleHitUpdate = (i, a, l) => {
        let { context: c } = this.component, d = this.relevantEvents, f = this.hitDragging.initialHit, m = this.eventRange.instance, g = null, y = null, v = false, S = {
          affectedEvents: d,
          mutatedEvents: Ot(),
          isEvent: true
        };
        i && (i.componentId === f.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(f, i) || (g = tM(f, i, l.subjectEl.classList.contains("fc-event-resizer-start"), m.range))), g && (y = Ec(d, c.getCurrentData().eventUiBases, g, c), S.mutatedEvents = y, Lc(S, i.dateProfile, c) || (v = true, g = null, y = null, S.mutatedEvents = null)), y ? c.dispatch({
          type: "SET_EVENT_RESIZE",
          state: S
        }) : c.dispatch({
          type: "UNSET_EVENT_RESIZE"
        }), v ? ho() : mo(), a || (g && ko(f, i) && (g = null), this.validMutation = g, this.mutatedRelevantEvents = y);
      }, this.handleDragEnd = (i) => {
        let { context: a } = this.component, l = this.eventRange.def, c = this.eventRange.instance, d = new rt(a, l, c), f = this.relevantEvents, m = this.mutatedRelevantEvents;
        if (a.emitter.trigger("eventResizeStop", {
          el: this.draggingSegEl,
          event: d,
          jsEvent: i.origEvent,
          view: a.viewApi
        }), this.validMutation) {
          let g = new rt(a, m.defs[l.defId], c ? m.instances[c.instanceId] : null);
          a.dispatch({
            type: "MERGE_EVENTS",
            eventStore: m
          });
          let y = {
            oldEvent: d,
            event: g,
            relatedEvents: Br(m, a, c),
            revert() {
              a.dispatch({
                type: "MERGE_EVENTS",
                eventStore: f
              });
            }
          };
          a.emitter.trigger("eventResize", Object.assign(Object.assign({}, y), {
            el: this.draggingSegEl,
            startDelta: this.validMutation.startDelta || Pe(0),
            endDelta: this.validMutation.endDelta || Pe(0),
            jsEvent: i.origEvent,
            view: a.viewApi
          })), a.emitter.trigger("eventChange", y);
        } else a.emitter.trigger("_noEventResize");
        this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null;
      };
      let { component: n } = e, r = this.dragging = new Hs(e.el);
      r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = false, r.autoScroller.isEnabled = n.context.options.dragScroll;
      let s = this.hitDragging = new Li(this.dragging, Rc(e));
      s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    querySegEl(e) {
      return At(e.subjectEl, ".fc-event");
    }
  }
  function tM(t, e, n, r) {
    let s = t.context.dateEnv, i = t.dateSpan.range.start, a = e.dateSpan.range.start, l = bs(i, a, s, t.largeUnit);
    if (n) {
      if (s.add(r.start, l) < r.end) return {
        startDelta: l
      };
    } else if (s.add(r.end, l) > r.start) return {
      endDelta: l
    };
    return null;
  }
  class nM {
    constructor(e) {
      this.context = e, this.isRecentPointerDateSelect = false, this.matchesCancel = false, this.matchesEvent = false, this.onSelect = (r) => {
        r.jsEvent && (this.isRecentPointerDateSelect = true);
      }, this.onDocumentPointerDown = (r) => {
        let s = this.context.options.unselectCancel, i = Xh(r.origEvent);
        this.matchesCancel = !!At(i, s), this.matchesEvent = !!At(i, Yi.SELECTOR);
      }, this.onDocumentPointerUp = (r) => {
        let { context: s } = this, { documentPointer: i } = this, a = s.getCurrentData();
        if (!i.wasTouchScroll) {
          if (a.dateSelection && !this.isRecentPointerDateSelect) {
            let l = s.options.unselectAuto;
            l && (!l || !this.matchesCancel) && s.calendarApi.unselect(r);
          }
          a.eventSelection && !this.matchesEvent && s.dispatch({
            type: "UNSELECT_EVENT"
          });
        }
        this.isRecentPointerDateSelect = false;
      };
      let n = this.documentPointer = new hp(document);
      n.shouldIgnoreMove = true, n.shouldWatchScroll = false, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
    }
    destroy() {
      this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
    }
  }
  const rM = {
    fixedMirrorParent: V
  }, sM = {
    dateClick: V,
    eventDragStart: V,
    eventDragStop: V,
    eventDrop: V,
    eventResizeStart: V,
    eventResizeStop: V,
    eventResize: V,
    drop: V,
    eventReceive: V,
    eventLeave: V
  };
  class iM {
    constructor(e, n) {
      this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = (s) => {
        this.dragMeta = this.buildDragMeta(s.subjectEl);
      }, this.handleHitUpdate = (s, i, a) => {
        let { dragging: l } = this.hitDragging, c = null, d = null, f = false, m = {
          affectedEvents: Ot(),
          mutatedEvents: Ot(),
          isEvent: this.dragMeta.create
        };
        s && (c = s.context, this.canDropElOnCalendar(a.subjectEl, c) && (d = aM(s.dateSpan, this.dragMeta, c), m.mutatedEvents = Di(d), f = !Lc(m, s.dateProfile, c), f && (m.mutatedEvents = Ot(), d = null))), this.displayDrag(c, m), l.setMirrorIsVisible(i || !d || !document.querySelector(".fc-event-mirror")), f ? ho() : mo(), i || (l.setMirrorNeedsRevert(!d), this.receivingContext = c, this.droppableEvent = d);
      }, this.handleDragEnd = (s) => {
        let { receivingContext: i, droppableEvent: a } = this;
        if (this.clearDrag(), i && a) {
          let l = this.hitDragging.finalHit, c = l.context.viewApi, d = this.dragMeta;
          if (i.emitter.trigger("drop", Object.assign(Object.assign({}, Bc(l.dateSpan, i)), {
            draggedEl: s.subjectEl,
            jsEvent: s.origEvent,
            view: c
          })), d.create) {
            let f = Di(a);
            i.dispatch({
              type: "MERGE_EVENTS",
              eventStore: f
            }), s.isTouch && i.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: a.instance.instanceId
            }), i.emitter.trigger("eventReceive", {
              event: new rt(i, a.def, a.instance),
              relatedEvents: [],
              revert() {
                i.dispatch({
                  type: "REMOVE_EVENTS",
                  eventStore: f
                });
              },
              draggedEl: s.subjectEl,
              view: c
            });
          }
        }
        this.receivingContext = null, this.droppableEvent = null;
      };
      let r = this.hitDragging = new Li(e, Ga);
      r.requireInitial = false, r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = n;
    }
    buildDragMeta(e) {
      return typeof this.suppliedDragMeta == "object" ? $l(this.suppliedDragMeta) : typeof this.suppliedDragMeta == "function" ? $l(this.suppliedDragMeta(e)) : oM(e);
    }
    displayDrag(e, n) {
      let r = this.receivingContext;
      r && r !== e && r.dispatch({
        type: "UNSET_EVENT_DRAG"
      }), e && e.dispatch({
        type: "SET_EVENT_DRAG",
        state: n
      });
    }
    clearDrag() {
      this.receivingContext && this.receivingContext.dispatch({
        type: "UNSET_EVENT_DRAG"
      });
    }
    canDropElOnCalendar(e, n) {
      let r = n.options.dropAccept;
      return typeof r == "function" ? r.call(n.calendarApi, e) : typeof r == "string" && r ? !!qh(e, r) : true;
    }
  }
  function aM(t, e, n) {
    let r = Object.assign({}, e.leftoverProps);
    for (let f of n.pluginHooks.externalDefTransforms) Object.assign(r, f(t, e));
    let { refined: s, extra: i } = Dc(r, n), a = Ua(s, i, e.sourceId, t.allDay, n.options.forceEventDuration || !!e.duration, n), l = t.range.start;
    t.allDay && e.startTime && (l = n.dateEnv.add(l, e.startTime));
    let c = e.duration ? n.dateEnv.add(l, e.duration) : Wl(t.allDay, l, n), d = vo(a.defId, {
      start: l,
      end: c
    });
    return {
      def: a,
      instance: d
    };
  }
  function oM(t) {
    let e = lM(t, "event"), n = e ? JSON.parse(e) : {
      create: false
    };
    return $l(n);
  }
  _o.dataAttrPrefix = "";
  function lM(t, e) {
    let n = _o.dataAttrPrefix, r = (n ? n + "-" : "") + e;
    return t.getAttribute("data-" + r) || "";
  }
  class cM {
    constructor(e, n = {}) {
      this.handlePointerDown = (s) => {
        let { dragging: i } = this, { minDistance: a, longPressDelay: l } = this.settings;
        i.minDistance = a ?? (s.isTouch ? 0 : Ur.eventDragMinDistance), i.delay = s.isTouch ? l ?? Ur.longPressDelay : 0;
      }, this.handleDragStart = (s) => {
        s.isTouch && this.dragging.delay && s.subjectEl.classList.contains("fc-event") && this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
      }, this.settings = n;
      let r = this.dragging = new Hs(e);
      r.touchScrollAllowed = false, n.itemSelector != null && (r.pointer.selector = n.itemSelector), n.appendTo != null && (r.mirror.parentNode = n.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new iM(r, n.eventData);
    }
    destroy() {
      this.dragging.destroy();
    }
  }
  var uM = fn({
    name: "@fullcalendar/interaction",
    componentInteractions: [
      Zx,
      qx,
      Yi,
      eM
    ],
    calendarInteractions: [
      nM
    ],
    elementDraggingImpl: Hs,
    optionRefiners: rM,
    listenerRefiners: sM
  }), Xl = [
    "MO",
    "TU",
    "WE",
    "TH",
    "FR",
    "SA",
    "SU"
  ], Lt = (function() {
    function t(e, n) {
      if (n === 0) throw new Error("Can't create weekday with n == 0");
      this.weekday = e, this.n = n;
    }
    return t.fromStr = function(e) {
      return new t(Xl.indexOf(e));
    }, t.prototype.nth = function(e) {
      return this.n === e ? this : new t(this.weekday, e);
    }, t.prototype.equals = function(e) {
      return this.weekday === e.weekday && this.n === e.n;
    }, t.prototype.toString = function() {
      var e = Xl[this.weekday];
      return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
    }, t.prototype.getJsWeekday = function() {
      return this.weekday === 6 ? 0 : this.weekday + 1;
    }, t;
  })(), pt = function(t) {
    return t != null;
  }, bn = function(t) {
    return typeof t == "number";
  }, Mf = function(t) {
    return typeof t == "string" && Xl.includes(t);
  }, Wt = Array.isArray, xn = function(t, e) {
    e === void 0 && (e = t), arguments.length === 1 && (e = t, t = 0);
    for (var n = [], r = t; r < e; r++) n.push(r);
    return n;
  }, We = function(t, e) {
    var n = 0, r = [];
    if (Wt(t)) for (; n < e; n++) r[n] = [].concat(t);
    else for (; n < e; n++) r[n] = t;
    return r;
  }, dM = function(t) {
    return Wt(t) ? t : [
      t
    ];
  };
  function fs(t, e, n) {
    n === void 0 && (n = " ");
    var r = String(t);
    return e = e >> 0, r.length > e ? String(r) : (e = e - r.length, e > n.length && (n += We(n, e / n.length)), n.slice(0, e) + String(r));
  }
  var fM = function(t, e, n) {
    var r = t.split(e);
    return n ? r.slice(0, n).concat([
      r.slice(n).join(e)
    ]) : r;
  }, $t = function(t, e) {
    var n = t % e;
    return n * e < 0 ? n + e : n;
  }, Ml = function(t, e) {
    return {
      div: Math.floor(t / e),
      mod: $t(t, e)
    };
  }, _n = function(t) {
    return !pt(t) || t.length === 0;
  }, Dt = function(t) {
    return !_n(t);
  }, Qe = function(t, e) {
    return Dt(t) && t.indexOf(e) !== -1;
  }, qr = function(t, e, n, r, s, i) {
    return r === void 0 && (r = 0), s === void 0 && (s = 0), i === void 0 && (i = 0), new Date(Date.UTC(t, e - 1, n, r, s, i));
  }, hM = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ], yp = 1e3 * 60 * 60 * 24, vp = 9999, bp = qr(1970, 1, 1), mM = [
    6,
    0,
    1,
    2,
    3,
    4,
    5
  ], mi = function(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
  }, wp = function(t) {
    return t instanceof Date;
  }, ci = function(t) {
    return wp(t) && !isNaN(t.getTime());
  }, pM = function(t, e) {
    var n = t.getTime(), r = e.getTime(), s = n - r;
    return Math.round(s / yp);
  }, Jl = function(t) {
    return pM(t, bp);
  }, Sp = function(t) {
    return new Date(bp.getTime() + t * yp);
  }, gM = function(t) {
    var e = t.getUTCMonth();
    return e === 1 && mi(t.getUTCFullYear()) ? 29 : hM[e];
  }, Ls = function(t) {
    return mM[t.getUTCDay()];
  }, Ef = function(t, e) {
    var n = qr(t, e + 1, 1);
    return [
      Ls(n),
      gM(n)
    ];
  }, _p = function(t, e) {
    return e = e || t, new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  }, Kl = function(t) {
    var e = new Date(t.getTime());
    return e;
  }, Cf = function(t) {
    for (var e = [], n = 0; n < t.length; n++) e.push(Kl(t[n]));
    return e;
  }, ki = function(t) {
    t.sort(function(e, n) {
      return e.getTime() - n.getTime();
    });
  }, zc = function(t, e) {
    e === void 0 && (e = true);
    var n = new Date(t);
    return [
      fs(n.getUTCFullYear().toString(), 4, "0"),
      fs(n.getUTCMonth() + 1, 2, "0"),
      fs(n.getUTCDate(), 2, "0"),
      "T",
      fs(n.getUTCHours(), 2, "0"),
      fs(n.getUTCMinutes(), 2, "0"),
      fs(n.getUTCSeconds(), 2, "0"),
      e ? "Z" : ""
    ].join("");
  }, $c = function(t) {
    var e = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/, n = e.exec(t);
    if (!n) throw new Error("Invalid UNTIL value: ".concat(t));
    return new Date(Date.UTC(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10), parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, parseInt(n[7], 10) || 0));
  }, Af = function(t, e) {
    var n = t.toLocaleString("sv-SE", {
      timeZone: e
    });
    return n.replace(" ", "T") + "Z";
  }, yM = function(t, e) {
    var n = Intl.DateTimeFormat().resolvedOptions().timeZone, r = new Date(Af(t, n)), s = new Date(Af(t, e ?? "UTC")), i = s.getTime() - r.getTime();
    return new Date(t.getTime() - i);
  }, ws = (function() {
    function t(e, n) {
      this.minDate = null, this.maxDate = null, this._result = [], this.total = 0, this.method = e, this.args = n, e === "between" ? (this.maxDate = n.inc ? n.before : new Date(n.before.getTime() - 1), this.minDate = n.inc ? n.after : new Date(n.after.getTime() + 1)) : e === "before" ? this.maxDate = n.inc ? n.dt : new Date(n.dt.getTime() - 1) : e === "after" && (this.minDate = n.inc ? n.dt : new Date(n.dt.getTime() + 1));
    }
    return t.prototype.accept = function(e) {
      ++this.total;
      var n = this.minDate && e < this.minDate, r = this.maxDate && e > this.maxDate;
      if (this.method === "between") {
        if (n) return true;
        if (r) return false;
      } else if (this.method === "before") {
        if (r) return false;
      } else if (this.method === "after") return n ? true : (this.add(e), false);
      return this.add(e);
    }, t.prototype.add = function(e) {
      return this._result.push(e), true;
    }, t.prototype.getValue = function() {
      var e = this._result;
      switch (this.method) {
        case "all":
        case "between":
          return e;
        default:
          return e.length ? e[e.length - 1] : null;
      }
    }, t.prototype.clone = function() {
      return new t(this.method, this.args);
    }, t;
  })(), Rf = (function(t) {
    fc(e, t);
    function e(n, r, s) {
      var i = t.call(this, n, r) || this;
      return i.iterator = s, i;
    }
    return e.prototype.add = function(n) {
      return this.iterator(n, this._result.length) ? (this._result.push(n), true) : false;
    }, e;
  })(ws), Qa = {
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    tokens: {
      SKIP: /^[ \r\n\t]+|^\.$/,
      number: /^[1-9][0-9]*/,
      numberAsText: /^(one|two|three)/i,
      every: /^every/i,
      "day(s)": /^days?/i,
      "weekday(s)": /^weekdays?/i,
      "week(s)": /^weeks?/i,
      "hour(s)": /^hours?/i,
      "minute(s)": /^minutes?/i,
      "month(s)": /^months?/i,
      "year(s)": /^years?/i,
      on: /^(on|in)/i,
      at: /^(at)/i,
      the: /^the/i,
      first: /^first/i,
      second: /^second/i,
      third: /^third/i,
      nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
      last: /^last/i,
      for: /^for/i,
      "time(s)": /^times?/i,
      until: /^(un)?til/i,
      monday: /^mo(n(day)?)?/i,
      tuesday: /^tu(e(s(day)?)?)?/i,
      wednesday: /^we(d(n(esday)?)?)?/i,
      thursday: /^th(u(r(sday)?)?)?/i,
      friday: /^fr(i(day)?)?/i,
      saturday: /^sa(t(urday)?)?/i,
      sunday: /^su(n(day)?)?/i,
      january: /^jan(uary)?/i,
      february: /^feb(ruary)?/i,
      march: /^mar(ch)?/i,
      april: /^apr(il)?/i,
      may: /^may/i,
      june: /^june?/i,
      july: /^july?/i,
      august: /^aug(ust)?/i,
      september: /^sep(t(ember)?)?/i,
      october: /^oct(ober)?/i,
      november: /^nov(ember)?/i,
      december: /^dec(ember)?/i,
      comma: /^(,\s*|(and|or)\s*)+/i
    }
  }, Of = function(t, e) {
    return t.indexOf(e) !== -1;
  }, vM = function(t) {
    return t.toString();
  }, bM = function(t, e, n) {
    return "".concat(e, " ").concat(n, ", ").concat(t);
  }, rr = (function() {
    function t(e, n, r, s) {
      if (n === void 0 && (n = vM), r === void 0 && (r = Qa), s === void 0 && (s = bM), this.text = [], this.language = r || Qa, this.gettext = n, this.dateFormatter = s, this.rrule = e, this.options = e.options, this.origOptions = e.origOptions, this.origOptions.bymonthday) {
        var i = [].concat(this.options.bymonthday), a = [].concat(this.options.bynmonthday);
        i.sort(function(f, m) {
          return f - m;
        }), a.sort(function(f, m) {
          return m - f;
        }), this.bymonthday = i.concat(a), this.bymonthday.length || (this.bymonthday = null);
      }
      if (pt(this.origOptions.byweekday)) {
        var l = Wt(this.origOptions.byweekday) ? this.origOptions.byweekday : [
          this.origOptions.byweekday
        ], c = String(l);
        this.byweekday = {
          allWeeks: l.filter(function(f) {
            return !f.n;
          }),
          someWeeks: l.filter(function(f) {
            return !!f.n;
          }),
          isWeekdays: c.indexOf("MO") !== -1 && c.indexOf("TU") !== -1 && c.indexOf("WE") !== -1 && c.indexOf("TH") !== -1 && c.indexOf("FR") !== -1 && c.indexOf("SA") === -1 && c.indexOf("SU") === -1,
          isEveryDay: c.indexOf("MO") !== -1 && c.indexOf("TU") !== -1 && c.indexOf("WE") !== -1 && c.indexOf("TH") !== -1 && c.indexOf("FR") !== -1 && c.indexOf("SA") !== -1 && c.indexOf("SU") !== -1
        };
        var d = function(f, m) {
          return f.weekday - m.weekday;
        };
        this.byweekday.allWeeks.sort(d), this.byweekday.someWeeks.sort(d), this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null), this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
      } else this.byweekday = null;
    }
    return t.isFullyConvertible = function(e) {
      var n = true;
      if (!(e.options.freq in t.IMPLEMENTED) || e.origOptions.until && e.origOptions.count) return false;
      for (var r in e.origOptions) {
        if (Of([
          "dtstart",
          "tzid",
          "wkst",
          "freq"
        ], r)) return true;
        if (!Of(t.IMPLEMENTED[e.options.freq], r)) return false;
      }
      return n;
    }, t.prototype.isFullyConvertible = function() {
      return t.isFullyConvertible(this.rrule);
    }, t.prototype.toString = function() {
      var e = this.gettext;
      if (!(this.options.freq in t.IMPLEMENTED)) return e("RRule error: Unable to fully convert this rrule to text");
      if (this.text = [
        e("every")
      ], this[ke.FREQUENCIES[this.options.freq]](), this.options.until) {
        this.add(e("until"));
        var n = this.options.until;
        this.add(this.dateFormatter(n.getUTCFullYear(), this.language.monthNames[n.getUTCMonth()], n.getUTCDate()));
      } else this.options.count && this.add(e("for")).add(this.options.count.toString()).add(this.plural(this.options.count) ? e("times") : e("time"));
      return this.isFullyConvertible() || this.add(e("(~ approximate)")), this.text.join("");
    }, t.prototype.HOURLY = function() {
      var e = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("hours") : e("hour"));
    }, t.prototype.MINUTELY = function() {
      var e = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("minutes") : e("minute"));
    }, t.prototype.DAILY = function() {
      var e = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()), this.byweekday && this.byweekday.isWeekdays ? this.add(this.plural(this.options.interval) ? e("weekdays") : e("weekday")) : this.add(this.plural(this.options.interval) ? e("days") : e("day")), this.origOptions.bymonth && (this.add(e("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday ? this._byweekday() : this.origOptions.byhour && this._byhour();
    }, t.prototype.WEEKLY = function() {
      var e = this.gettext;
      this.options.interval !== 1 && this.add(this.options.interval.toString()).add(this.plural(this.options.interval) ? e("weeks") : e("week")), this.byweekday && this.byweekday.isWeekdays ? this.options.interval === 1 ? this.add(this.plural(this.options.interval) ? e("weekdays") : e("weekday")) : this.add(e("on")).add(e("weekdays")) : this.byweekday && this.byweekday.isEveryDay ? this.add(this.plural(this.options.interval) ? e("days") : e("day")) : (this.options.interval === 1 && this.add(e("week")), this.origOptions.bymonth && (this.add(e("in")), this._bymonth()), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.origOptions.byhour && this._byhour());
    }, t.prototype.MONTHLY = function() {
      var e = this.gettext;
      this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()).add(e("months")), this.plural(this.options.interval) && this.add(e("in"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("months") : e("month"))), this.bymonthday ? this._bymonthday() : this.byweekday && this.byweekday.isWeekdays ? this.add(e("on")).add(e("weekdays")) : this.byweekday && this._byweekday();
    }, t.prototype.YEARLY = function() {
      var e = this.gettext;
      this.origOptions.bymonth ? (this.options.interval !== 1 && (this.add(this.options.interval.toString()), this.add(e("years"))), this._bymonth()) : (this.options.interval !== 1 && this.add(this.options.interval.toString()), this.add(this.plural(this.options.interval) ? e("years") : e("year"))), this.bymonthday ? this._bymonthday() : this.byweekday && this._byweekday(), this.options.byyearday && this.add(e("on the")).add(this.list(this.options.byyearday, this.nth, e("and"))).add(e("day")), this.options.byweekno && this.add(e("in")).add(this.plural(this.options.byweekno.length) ? e("weeks") : e("week")).add(this.list(this.options.byweekno, void 0, e("and")));
    }, t.prototype._bymonthday = function() {
      var e = this.gettext;
      this.byweekday && this.byweekday.allWeeks ? this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext, e("or"))).add(e("the")).add(this.list(this.bymonthday, this.nth, e("or"))) : this.add(e("on the")).add(this.list(this.bymonthday, this.nth, e("and")));
    }, t.prototype._byweekday = function() {
      var e = this.gettext;
      this.byweekday.allWeeks && !this.byweekday.isWeekdays && this.add(e("on")).add(this.list(this.byweekday.allWeeks, this.weekdaytext)), this.byweekday.someWeeks && (this.byweekday.allWeeks && this.add(e("and")), this.add(e("on the")).add(this.list(this.byweekday.someWeeks, this.weekdaytext, e("and"))));
    }, t.prototype._byhour = function() {
      var e = this.gettext;
      this.add(e("at")).add(this.list(this.origOptions.byhour, void 0, e("and")));
    }, t.prototype._bymonth = function() {
      this.add(this.list(this.options.bymonth, this.monthtext, this.gettext("and")));
    }, t.prototype.nth = function(e) {
      e = parseInt(e.toString(), 10);
      var n, r = this.gettext;
      if (e === -1) return r("last");
      var s = Math.abs(e);
      switch (s) {
        case 1:
        case 21:
        case 31:
          n = s + r("st");
          break;
        case 2:
        case 22:
          n = s + r("nd");
          break;
        case 3:
        case 23:
          n = s + r("rd");
          break;
        default:
          n = s + r("th");
      }
      return e < 0 ? n + " " + r("last") : n;
    }, t.prototype.monthtext = function(e) {
      return this.language.monthNames[e - 1];
    }, t.prototype.weekdaytext = function(e) {
      var n = bn(e) ? (e + 1) % 7 : e.getJsWeekday();
      return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[n];
    }, t.prototype.plural = function(e) {
      return e % 100 !== 1;
    }, t.prototype.add = function(e) {
      return this.text.push(" "), this.text.push(e), this;
    }, t.prototype.list = function(e, n, r, s) {
      var i = this;
      s === void 0 && (s = ","), Wt(e) || (e = [
        e
      ]);
      var a = function(c, d, f) {
        for (var m = "", g = 0; g < c.length; g++) g !== 0 && (g === c.length - 1 ? m += " " + f + " " : m += d + " "), m += c[g];
        return m;
      };
      n = n || function(c) {
        return c.toString();
      };
      var l = function(c) {
        return n && n.call(i, c);
      };
      return r ? a(e.map(l), s, r) : e.map(l).join(s + " ");
    }, t;
  })(), wM = (function() {
    function t(e) {
      this.done = true, this.rules = e;
    }
    return t.prototype.start = function(e) {
      return this.text = e, this.done = false, this.nextSymbol();
    }, t.prototype.isDone = function() {
      return this.done && this.symbol === null;
    }, t.prototype.nextSymbol = function() {
      var e, n;
      this.symbol = null, this.value = null;
      do {
        if (this.done) return false;
        var r = void 0;
        e = null;
        for (var s in this.rules) {
          r = this.rules[s];
          var i = r.exec(this.text);
          i && (e === null || i[0].length > e[0].length) && (e = i, n = s);
        }
        if (e != null && (this.text = this.text.substr(e[0].length), this.text === "" && (this.done = true)), e == null) {
          this.done = true, this.symbol = null, this.value = null;
          return;
        }
      } while (n === "SKIP");
      return this.symbol = n, this.value = e, true;
    }, t.prototype.accept = function(e) {
      if (this.symbol === e) {
        if (this.value) {
          var n = this.value;
          return this.nextSymbol(), n;
        }
        return this.nextSymbol(), true;
      }
      return false;
    }, t.prototype.acceptNumber = function() {
      return this.accept("number");
    }, t.prototype.expect = function(e) {
      if (this.accept(e)) return true;
      throw new Error("expected " + e + " but found " + this.symbol);
    }, t;
  })();
  function Dp(t, e) {
    e === void 0 && (e = Qa);
    var n = {}, r = new wM(e.tokens);
    if (!r.start(t)) return null;
    return s(), n;
    function s() {
      r.expect("every");
      var g = r.acceptNumber();
      if (g && (n.interval = parseInt(g[0], 10)), r.isDone()) throw new Error("Unexpected end");
      switch (r.symbol) {
        case "day(s)":
          n.freq = ke.DAILY, r.nextSymbol() && (a(), m());
          break;
        case "weekday(s)":
          n.freq = ke.WEEKLY, n.byweekday = [
            ke.MO,
            ke.TU,
            ke.WE,
            ke.TH,
            ke.FR
          ], r.nextSymbol(), a(), m();
          break;
        case "week(s)":
          n.freq = ke.WEEKLY, r.nextSymbol() && (i(), a(), m());
          break;
        case "hour(s)":
          n.freq = ke.HOURLY, r.nextSymbol() && (i(), m());
          break;
        case "minute(s)":
          n.freq = ke.MINUTELY, r.nextSymbol() && (i(), m());
          break;
        case "month(s)":
          n.freq = ke.MONTHLY, r.nextSymbol() && (i(), m());
          break;
        case "year(s)":
          n.freq = ke.YEARLY, r.nextSymbol() && (i(), m());
          break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
        case "sunday":
          n.freq = ke.WEEKLY;
          var y = r.symbol.substr(0, 2).toUpperCase();
          if (n.byweekday = [
            ke[y]
          ], !r.nextSymbol()) return;
          for (; r.accept("comma"); ) {
            if (r.isDone()) throw new Error("Unexpected end");
            var v = c();
            if (!v) throw new Error("Unexpected symbol " + r.symbol + ", expected weekday");
            n.byweekday.push(ke[v]), r.nextSymbol();
          }
          a(), f(), m();
          break;
        case "january":
        case "february":
        case "march":
        case "april":
        case "may":
        case "june":
        case "july":
        case "august":
        case "september":
        case "october":
        case "november":
        case "december":
          if (n.freq = ke.YEARLY, n.bymonth = [
            l()
          ], !r.nextSymbol()) return;
          for (; r.accept("comma"); ) {
            if (r.isDone()) throw new Error("Unexpected end");
            var S = l();
            if (!S) throw new Error("Unexpected symbol " + r.symbol + ", expected month");
            n.bymonth.push(S), r.nextSymbol();
          }
          i(), m();
          break;
        default:
          throw new Error("Unknown symbol");
      }
    }
    function i() {
      var g = r.accept("on"), y = r.accept("the");
      if (g || y) do {
        var v = d(), S = c(), b = l();
        if (v) S ? (r.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(ke[S].nth(v))) : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(v), r.accept("day(s)"));
        else if (S) r.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(ke[S]);
        else if (r.symbol === "weekday(s)") r.nextSymbol(), n.byweekday || (n.byweekday = [
          ke.MO,
          ke.TU,
          ke.WE,
          ke.TH,
          ke.FR
        ]);
        else if (r.symbol === "week(s)") {
          r.nextSymbol();
          var _ = r.acceptNumber();
          if (!_) throw new Error("Unexpected symbol " + r.symbol + ", expected week number");
          for (n.byweekno = [
            parseInt(_[0], 10)
          ]; r.accept("comma"); ) {
            if (_ = r.acceptNumber(), !_) throw new Error("Unexpected symbol " + r.symbol + "; expected monthday");
            n.byweekno.push(parseInt(_[0], 10));
          }
        } else if (b) r.nextSymbol(), n.bymonth || (n.bymonth = []), n.bymonth.push(b);
        else return;
      } while (r.accept("comma") || r.accept("the") || r.accept("on"));
    }
    function a() {
      var g = r.accept("at");
      if (g) do {
        var y = r.acceptNumber();
        if (!y) throw new Error("Unexpected symbol " + r.symbol + ", expected hour");
        for (n.byhour = [
          parseInt(y[0], 10)
        ]; r.accept("comma"); ) {
          if (y = r.acceptNumber(), !y) throw new Error("Unexpected symbol " + r.symbol + "; expected hour");
          n.byhour.push(parseInt(y[0], 10));
        }
      } while (r.accept("comma") || r.accept("at"));
    }
    function l() {
      switch (r.symbol) {
        case "january":
          return 1;
        case "february":
          return 2;
        case "march":
          return 3;
        case "april":
          return 4;
        case "may":
          return 5;
        case "june":
          return 6;
        case "july":
          return 7;
        case "august":
          return 8;
        case "september":
          return 9;
        case "october":
          return 10;
        case "november":
          return 11;
        case "december":
          return 12;
        default:
          return false;
      }
    }
    function c() {
      switch (r.symbol) {
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
        case "sunday":
          return r.symbol.substr(0, 2).toUpperCase();
        default:
          return false;
      }
    }
    function d() {
      switch (r.symbol) {
        case "last":
          return r.nextSymbol(), -1;
        case "first":
          return r.nextSymbol(), 1;
        case "second":
          return r.nextSymbol(), r.accept("last") ? -2 : 2;
        case "third":
          return r.nextSymbol(), r.accept("last") ? -3 : 3;
        case "nth":
          var g = parseInt(r.value[1], 10);
          if (g < -366 || g > 366) throw new Error("Nth out of range: " + g);
          return r.nextSymbol(), r.accept("last") ? -g : g;
        default:
          return false;
      }
    }
    function f() {
      r.accept("on"), r.accept("the");
      var g = d();
      if (g) for (n.bymonthday = [
        g
      ], r.nextSymbol(); r.accept("comma"); ) {
        if (g = d(), !g) throw new Error("Unexpected symbol " + r.symbol + "; expected monthday");
        n.bymonthday.push(g), r.nextSymbol();
      }
    }
    function m() {
      if (r.symbol === "until") {
        var g = Date.parse(r.text);
        if (!g) throw new Error("Cannot parse until date:" + r.text);
        n.until = new Date(g);
      } else r.accept("for") && (n.count = parseInt(r.value[0], 10), r.expect("number"));
    }
  }
  var Ue;
  (function(t) {
    t[t.YEARLY = 0] = "YEARLY", t[t.MONTHLY = 1] = "MONTHLY", t[t.WEEKLY = 2] = "WEEKLY", t[t.DAILY = 3] = "DAILY", t[t.HOURLY = 4] = "HOURLY", t[t.MINUTELY = 5] = "MINUTELY", t[t.SECONDLY = 6] = "SECONDLY";
  })(Ue || (Ue = {}));
  function Gc(t) {
    return t < Ue.HOURLY;
  }
  var SM = function(t, e) {
    return e === void 0 && (e = Qa), new ke(Dp(t, e) || void 0);
  }, js = [
    "count",
    "until",
    "interval",
    "byweekday",
    "bymonthday",
    "bymonth"
  ];
  rr.IMPLEMENTED = [];
  rr.IMPLEMENTED[Ue.HOURLY] = js;
  rr.IMPLEMENTED[Ue.MINUTELY] = js;
  rr.IMPLEMENTED[Ue.DAILY] = [
    "byhour"
  ].concat(js);
  rr.IMPLEMENTED[Ue.WEEKLY] = js;
  rr.IMPLEMENTED[Ue.MONTHLY] = js;
  rr.IMPLEMENTED[Ue.YEARLY] = [
    "byweekno",
    "byyearday"
  ].concat(js);
  var _M = function(t, e, n, r) {
    return new rr(t, e, n, r).toString();
  }, DM = rr.isFullyConvertible, Xa = (function() {
    function t(e, n, r, s) {
      this.hour = e, this.minute = n, this.second = r, this.millisecond = s || 0;
    }
    return t.prototype.getHours = function() {
      return this.hour;
    }, t.prototype.getMinutes = function() {
      return this.minute;
    }, t.prototype.getSeconds = function() {
      return this.second;
    }, t.prototype.getMilliseconds = function() {
      return this.millisecond;
    }, t.prototype.getTime = function() {
      return (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 + this.millisecond;
    }, t;
  })(), kM = (function(t) {
    fc(e, t);
    function e(n, r, s, i, a, l, c) {
      var d = t.call(this, i, a, l, c) || this;
      return d.year = n, d.month = r, d.day = s, d;
    }
    return e.fromDate = function(n) {
      return new this(n.getUTCFullYear(), n.getUTCMonth() + 1, n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.valueOf() % 1e3);
    }, e.prototype.getWeekday = function() {
      return Ls(new Date(this.getTime()));
    }, e.prototype.getTime = function() {
      return new Date(Date.UTC(this.year, this.month - 1, this.day, this.hour, this.minute, this.second, this.millisecond)).getTime();
    }, e.prototype.getDay = function() {
      return this.day;
    }, e.prototype.getMonth = function() {
      return this.month;
    }, e.prototype.getYear = function() {
      return this.year;
    }, e.prototype.addYears = function(n) {
      this.year += n;
    }, e.prototype.addMonths = function(n) {
      if (this.month += n, this.month > 12) {
        var r = Math.floor(this.month / 12), s = $t(this.month, 12);
        this.month = s, this.year += r, this.month === 0 && (this.month = 12, --this.year);
      }
    }, e.prototype.addWeekly = function(n, r) {
      r > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - r)) + n * 7 : this.day += -(this.getWeekday() - r) + n * 7, this.fixDay();
    }, e.prototype.addDaily = function(n) {
      this.day += n, this.fixDay();
    }, e.prototype.addHours = function(n, r, s) {
      for (r && (this.hour += Math.floor((23 - this.hour) / n) * n); ; ) {
        this.hour += n;
        var i = Ml(this.hour, 24), a = i.div, l = i.mod;
        if (a && (this.hour = l, this.addDaily(a)), _n(s) || Qe(s, this.hour)) break;
      }
    }, e.prototype.addMinutes = function(n, r, s, i) {
      for (r && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / n) * n); ; ) {
        this.minute += n;
        var a = Ml(this.minute, 60), l = a.div, c = a.mod;
        if (l && (this.minute = c, this.addHours(l, false, s)), (_n(s) || Qe(s, this.hour)) && (_n(i) || Qe(i, this.minute))) break;
      }
    }, e.prototype.addSeconds = function(n, r, s, i, a) {
      for (r && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / n) * n); ; ) {
        this.second += n;
        var l = Ml(this.second, 60), c = l.div, d = l.mod;
        if (c && (this.second = d, this.addMinutes(c, false, s, i)), (_n(s) || Qe(s, this.hour)) && (_n(i) || Qe(i, this.minute)) && (_n(a) || Qe(a, this.second))) break;
      }
    }, e.prototype.fixDay = function() {
      if (!(this.day <= 28)) {
        var n = Ef(this.year, this.month - 1)[1];
        if (!(this.day <= n)) for (; this.day > n; ) {
          if (this.day -= n, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > vp)) return;
          n = Ef(this.year, this.month - 1)[1];
        }
      }
    }, e.prototype.add = function(n, r) {
      var s = n.freq, i = n.interval, a = n.wkst, l = n.byhour, c = n.byminute, d = n.bysecond;
      switch (s) {
        case Ue.YEARLY:
          return this.addYears(i);
        case Ue.MONTHLY:
          return this.addMonths(i);
        case Ue.WEEKLY:
          return this.addWeekly(i, a);
        case Ue.DAILY:
          return this.addDaily(i);
        case Ue.HOURLY:
          return this.addHours(i, r, l);
        case Ue.MINUTELY:
          return this.addMinutes(i, r, l, c);
        case Ue.SECONDLY:
          return this.addSeconds(i, r, l, c, d);
      }
    }, e;
  })(Xa);
  function kp(t) {
    for (var e = [], n = Object.keys(t), r = 0, s = n; r < s.length; r++) {
      var i = s[r];
      Qe(eE, i) || e.push(i), wp(t[i]) && !ci(t[i]) && e.push(i);
    }
    if (e.length) throw new Error("Invalid options: " + e.join(", "));
    return on({}, t);
  }
  function TM(t) {
    var e = on(on({}, Zc), kp(t));
    if (pt(e.byeaster) && (e.freq = ke.YEARLY), !(pt(e.freq) && ke.FREQUENCIES[e.freq])) throw new Error("Invalid frequency: ".concat(e.freq, " ").concat(t.freq));
    if (e.dtstart || (e.dtstart = new Date((/* @__PURE__ */ new Date()).setMilliseconds(0))), pt(e.wkst) ? bn(e.wkst) || (e.wkst = e.wkst.weekday) : e.wkst = ke.MO.weekday, pt(e.bysetpos)) {
      bn(e.bysetpos) && (e.bysetpos = [
        e.bysetpos
      ]);
      for (var n = 0; n < e.bysetpos.length; n++) {
        var r = e.bysetpos[n];
        if (r === 0 || !(r >= -366 && r <= 366)) throw new Error("bysetpos must be between 1 and 366, or between -366 and -1");
      }
    }
    if (!(e.byweekno || Dt(e.byweekno) || Dt(e.byyearday) || e.bymonthday || Dt(e.bymonthday) || pt(e.byweekday) || pt(e.byeaster))) switch (e.freq) {
      case ke.YEARLY:
        e.bymonth || (e.bymonth = e.dtstart.getUTCMonth() + 1), e.bymonthday = e.dtstart.getUTCDate();
        break;
      case ke.MONTHLY:
        e.bymonthday = e.dtstart.getUTCDate();
        break;
      case ke.WEEKLY:
        e.byweekday = [
          Ls(e.dtstart)
        ];
        break;
    }
    if (pt(e.bymonth) && !Wt(e.bymonth) && (e.bymonth = [
      e.bymonth
    ]), pt(e.byyearday) && !Wt(e.byyearday) && bn(e.byyearday) && (e.byyearday = [
      e.byyearday
    ]), !pt(e.bymonthday)) e.bymonthday = [], e.bynmonthday = [];
    else if (Wt(e.bymonthday)) {
      for (var s = [], i = [], n = 0; n < e.bymonthday.length; n++) {
        var r = e.bymonthday[n];
        r > 0 ? s.push(r) : r < 0 && i.push(r);
      }
      e.bymonthday = s, e.bynmonthday = i;
    } else e.bymonthday < 0 ? (e.bynmonthday = [
      e.bymonthday
    ], e.bymonthday = []) : (e.bynmonthday = [], e.bymonthday = [
      e.bymonthday
    ]);
    if (pt(e.byweekno) && !Wt(e.byweekno) && (e.byweekno = [
      e.byweekno
    ]), !pt(e.byweekday)) e.bynweekday = null;
    else if (bn(e.byweekday)) e.byweekday = [
      e.byweekday
    ], e.bynweekday = null;
    else if (Mf(e.byweekday)) e.byweekday = [
      Lt.fromStr(e.byweekday).weekday
    ], e.bynweekday = null;
    else if (e.byweekday instanceof Lt) !e.byweekday.n || e.freq > ke.MONTHLY ? (e.byweekday = [
      e.byweekday.weekday
    ], e.bynweekday = null) : (e.bynweekday = [
      [
        e.byweekday.weekday,
        e.byweekday.n
      ]
    ], e.byweekday = null);
    else {
      for (var a = [], l = [], n = 0; n < e.byweekday.length; n++) {
        var c = e.byweekday[n];
        if (bn(c)) {
          a.push(c);
          continue;
        } else if (Mf(c)) {
          a.push(Lt.fromStr(c).weekday);
          continue;
        }
        !c.n || e.freq > ke.MONTHLY ? a.push(c.weekday) : l.push([
          c.weekday,
          c.n
        ]);
      }
      e.byweekday = Dt(a) ? a : null, e.bynweekday = Dt(l) ? l : null;
    }
    return pt(e.byhour) ? bn(e.byhour) && (e.byhour = [
      e.byhour
    ]) : e.byhour = e.freq < ke.HOURLY ? [
      e.dtstart.getUTCHours()
    ] : null, pt(e.byminute) ? bn(e.byminute) && (e.byminute = [
      e.byminute
    ]) : e.byminute = e.freq < ke.MINUTELY ? [
      e.dtstart.getUTCMinutes()
    ] : null, pt(e.bysecond) ? bn(e.bysecond) && (e.bysecond = [
      e.bysecond
    ]) : e.bysecond = e.freq < ke.SECONDLY ? [
      e.dtstart.getUTCSeconds()
    ] : null, {
      parsedOptions: e
    };
  }
  function xM(t) {
    var e = t.dtstart.getTime() % 1e3;
    if (!Gc(t.freq)) return [];
    var n = [];
    return t.byhour.forEach(function(r) {
      t.byminute.forEach(function(s) {
        t.bysecond.forEach(function(i) {
          n.push(new Xa(r, s, i, e));
        });
      });
    }), n;
  }
  function ec(t) {
    var e = t.split(`
`).map(MM).filter(function(n) {
      return n !== null;
    });
    return on(on({}, e[0]), e[1]);
  }
  function Ja(t) {
    var e = {}, n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(t);
    if (!n) return e;
    var r = n[1], s = n[2];
    return r && (e.tzid = r), e.dtstart = $c(s), e;
  }
  function MM(t) {
    if (t = t.replace(/^\s+|\s+$/, ""), !t.length) return null;
    var e = /^([A-Z]+?)[:;]/.exec(t.toUpperCase());
    if (!e) return If(t);
    var n = e[1];
    switch (n.toUpperCase()) {
      case "RRULE":
      case "EXRULE":
        return If(t);
      case "DTSTART":
        return Ja(t);
      default:
        throw new Error("Unsupported RFC prop ".concat(n, " in ").concat(t));
    }
  }
  function If(t) {
    var e = t.replace(/^RRULE:/i, ""), n = Ja(e), r = t.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
    return r.forEach(function(s) {
      var i = s.split("="), a = i[0], l = i[1];
      switch (a.toUpperCase()) {
        case "FREQ":
          n.freq = Ue[l.toUpperCase()];
          break;
        case "WKST":
          n.wkst = nn[l.toUpperCase()];
          break;
        case "COUNT":
        case "INTERVAL":
        case "BYSETPOS":
        case "BYMONTH":
        case "BYMONTHDAY":
        case "BYYEARDAY":
        case "BYWEEKNO":
        case "BYHOUR":
        case "BYMINUTE":
        case "BYSECOND":
          var c = EM(l), d = a.toLowerCase();
          n[d] = c;
          break;
        case "BYWEEKDAY":
        case "BYDAY":
          n.byweekday = CM(l);
          break;
        case "DTSTART":
        case "TZID":
          var f = Ja(t);
          n.tzid = f.tzid, n.dtstart = f.dtstart;
          break;
        case "UNTIL":
          n.until = $c(l);
          break;
        case "BYEASTER":
          n.byeaster = Number(l);
          break;
        default:
          throw new Error("Unknown RRULE property '" + a + "'");
      }
    }), n;
  }
  function EM(t) {
    if (t.indexOf(",") !== -1) {
      var e = t.split(",");
      return e.map(Pf);
    }
    return Pf(t);
  }
  function Pf(t) {
    return /^[+-]?\d+$/.test(t) ? Number(t) : t;
  }
  function CM(t) {
    var e = t.split(",");
    return e.map(function(n) {
      if (n.length === 2) return nn[n];
      var r = n.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
      if (!r || r.length < 3) throw new SyntaxError("Invalid weekday string: ".concat(n));
      var s = Number(r[1]), i = r[2], a = nn[i].weekday;
      return new Lt(a, s);
    });
  }
  var Ka = (function() {
    function t(e, n) {
      if (isNaN(e.getTime())) throw new RangeError("Invalid date passed to DateWithZone");
      this.date = e, this.tzid = n;
    }
    return Object.defineProperty(t.prototype, "isUTC", {
      get: function() {
        return !this.tzid || this.tzid.toUpperCase() === "UTC";
      },
      enumerable: false,
      configurable: true
    }), t.prototype.toString = function() {
      var e = zc(this.date.getTime(), this.isUTC);
      return this.isUTC ? ":".concat(e) : ";TZID=".concat(this.tzid, ":").concat(e);
    }, t.prototype.getTime = function() {
      return this.date.getTime();
    }, t.prototype.rezonedDate = function() {
      return this.isUTC ? this.date : yM(this.date, this.tzid);
    }, t;
  })();
  function tc(t) {
    for (var e = [], n = "", r = Object.keys(t), s = Object.keys(Zc), i = 0; i < r.length; i++) if (r[i] !== "tzid" && Qe(s, r[i])) {
      var a = r[i].toUpperCase(), l = t[r[i]], c = "";
      if (!(!pt(l) || Wt(l) && !l.length)) {
        switch (a) {
          case "FREQ":
            c = ke.FREQUENCIES[t.freq];
            break;
          case "WKST":
            bn(l) ? c = new Lt(l).toString() : c = l.toString();
            break;
          case "BYWEEKDAY":
            a = "BYDAY", c = dM(l).map(function(y) {
              return y instanceof Lt ? y : Wt(y) ? new Lt(y[0], y[1]) : new Lt(y);
            }).toString();
            break;
          case "DTSTART":
            n = AM(l, t.tzid);
            break;
          case "UNTIL":
            c = zc(l, !t.tzid);
            break;
          default:
            if (Wt(l)) {
              for (var d = [], f = 0; f < l.length; f++) d[f] = String(l[f]);
              c = d.toString();
            } else c = String(l);
        }
        c && e.push([
          a,
          c
        ]);
      }
    }
    var m = e.map(function(y) {
      var v = y[0], S = y[1];
      return "".concat(v, "=").concat(S.toString());
    }).join(";"), g = "";
    return m !== "" && (g = "RRULE:".concat(m)), [
      n,
      g
    ].filter(function(y) {
      return !!y;
    }).join(`
`);
  }
  function AM(t, e) {
    return t ? "DTSTART" + new Ka(new Date(t), e).toString() : "";
  }
  function RM(t, e) {
    return Array.isArray(t) ? !Array.isArray(e) || t.length !== e.length ? false : t.every(function(n, r) {
      return n.getTime() === e[r].getTime();
    }) : t instanceof Date ? e instanceof Date && t.getTime() === e.getTime() : t === e;
  }
  var OM = (function() {
    function t() {
      this.all = false, this.before = [], this.after = [], this.between = [];
    }
    return t.prototype._cacheAdd = function(e, n, r) {
      n && (n = n instanceof Date ? Kl(n) : Cf(n)), e === "all" ? this.all = n : (r._value = n, this[e].push(r));
    }, t.prototype._cacheGet = function(e, n) {
      var r = false, s = n ? Object.keys(n) : [], i = function(f) {
        for (var m = 0; m < s.length; m++) {
          var g = s[m];
          if (!RM(n[g], f[g])) return true;
        }
        return false;
      }, a = this[e];
      if (e === "all") r = this.all;
      else if (Wt(a)) for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!(s.length && i(c))) {
          r = c._value;
          break;
        }
      }
      if (!r && this.all) {
        for (var d = new ws(e, n), l = 0; l < this.all.length && d.accept(this.all[l]); l++) ;
        r = d.getValue(), this._cacheAdd(e, r, n);
      }
      return Wt(r) ? Cf(r) : r instanceof Date ? Kl(r) : r;
    }, t;
  })(), IM = ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue([], We(1, 31), true), We(2, 28), true), We(3, 31), true), We(4, 30), true), We(5, 31), true), We(6, 30), true), We(7, 31), true), We(8, 31), true), We(9, 30), true), We(10, 31), true), We(11, 30), true), We(12, 31), true), We(1, 7), true), PM = ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue([], We(1, 31), true), We(2, 29), true), We(3, 31), true), We(4, 30), true), We(5, 31), true), We(6, 30), true), We(7, 31), true), We(8, 31), true), We(9, 30), true), We(10, 31), true), We(11, 30), true), We(12, 31), true), We(1, 7), true), NM = xn(1, 29), LM = xn(1, 30), pr = xn(1, 31), Et = xn(1, 32), YM = ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue([], Et, true), LM, true), Et, true), pr, true), Et, true), pr, true), Et, true), Et, true), pr, true), Et, true), pr, true), Et, true), Et.slice(0, 7), true), FM = ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue([], Et, true), NM, true), Et, true), pr, true), Et, true), pr, true), Et, true), Et, true), pr, true), Et, true), pr, true), Et, true), Et.slice(0, 7), true), HM = xn(-28, 0), jM = xn(-29, 0), gr = xn(-30, 0), Ct = xn(-31, 0), VM = ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue([], Ct, true), jM, true), Ct, true), gr, true), Ct, true), gr, true), Ct, true), Ct, true), gr, true), Ct, true), gr, true), Ct, true), Ct.slice(0, 7), true), WM = ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue(ue([], Ct, true), HM, true), Ct, true), gr, true), Ct, true), gr, true), Ct, true), Ct, true), gr, true), Ct, true), gr, true), Ct, true), Ct.slice(0, 7), true), UM = [
    0,
    31,
    60,
    91,
    121,
    152,
    182,
    213,
    244,
    274,
    305,
    335,
    366
  ], BM = [
    0,
    31,
    59,
    90,
    120,
    151,
    181,
    212,
    243,
    273,
    304,
    334,
    365
  ], Nf = (function() {
    for (var t = [], e = 0; e < 55; e++) t = t.concat(xn(7));
    return t;
  })();
  function zM(t, e) {
    var n = qr(t, 1, 1), r = mi(t) ? 366 : 365, s = mi(t + 1) ? 366 : 365, i = Jl(n), a = Ls(n), l = on(on({
      yearlen: r,
      nextyearlen: s,
      yearordinal: i,
      yearweekday: a
    }, $M(t)), {
      wnomask: null
    });
    if (_n(e.byweekno)) return l;
    l.wnomask = We(0, r + 7);
    var c, d, f = c = $t(7 - a + e.wkst, 7);
    f >= 4 ? (f = 0, d = l.yearlen + $t(a - e.wkst, 7)) : d = r - f;
    for (var m = Math.floor(d / 7), g = $t(d, 7), y = Math.floor(m + g / 4), v = 0; v < e.byweekno.length; v++) {
      var S = e.byweekno[v];
      if (S < 0 && (S += y + 1), S > 0 && S <= y) {
        var b = void 0;
        S > 1 ? (b = f + (S - 1) * 7, f !== c && (b -= 7 - c)) : b = f;
        for (var _ = 0; _ < 7 && (l.wnomask[b] = 1, b++, l.wdaymask[b] !== e.wkst); _++) ;
      }
    }
    if (Qe(e.byweekno, 1)) {
      var b = f + y * 7;
      if (f !== c && (b -= 7 - c), b < r) for (var v = 0; v < 7 && (l.wnomask[b] = 1, b += 1, l.wdaymask[b] !== e.wkst); v++) ;
    }
    if (f) {
      var E = void 0;
      if (Qe(e.byweekno, -1)) E = -1;
      else {
        var R = Ls(qr(t - 1, 1, 1)), T = $t(7 - R.valueOf() + e.wkst, 7), x = mi(t - 1) ? 366 : 365, N = void 0;
        T >= 4 ? (T = 0, N = x + $t(R - e.wkst, 7)) : N = r - f, E = Math.floor(52 + $t(N, 7) / 4);
      }
      if (Qe(e.byweekno, E)) for (var b = 0; b < f; b++) l.wnomask[b] = 1;
    }
    return l;
  }
  function $M(t) {
    var e = mi(t) ? 366 : 365, n = qr(t, 1, 1), r = Ls(n);
    return e === 365 ? {
      mmask: IM,
      mdaymask: FM,
      nmdaymask: WM,
      wdaymask: Nf.slice(r),
      mrange: BM
    } : {
      mmask: PM,
      mdaymask: YM,
      nmdaymask: VM,
      wdaymask: Nf.slice(r),
      mrange: UM
    };
  }
  function GM(t, e, n, r, s, i) {
    var a = {
      lastyear: t,
      lastmonth: e,
      nwdaymask: []
    }, l = [];
    if (i.freq === ke.YEARLY) if (_n(i.bymonth)) l = [
      [
        0,
        n
      ]
    ];
    else for (var c = 0; c < i.bymonth.length; c++) e = i.bymonth[c], l.push(r.slice(e - 1, e + 1));
    else i.freq === ke.MONTHLY && (l = [
      r.slice(e - 1, e + 1)
    ]);
    if (_n(l)) return a;
    a.nwdaymask = We(0, n);
    for (var c = 0; c < l.length; c++) for (var d = l[c], f = d[0], m = d[1] - 1, g = 0; g < i.bynweekday.length; g++) {
      var y = void 0, v = i.bynweekday[g], S = v[0], b = v[1];
      b < 0 ? (y = m + (b + 1) * 7, y -= $t(s[y] - S, 7)) : (y = f + (b - 1) * 7, y += $t(7 - s[y] + S, 7)), f <= y && y <= m && (a.nwdaymask[y] = 1);
    }
    return a;
  }
  function ZM(t, e) {
    e === void 0 && (e = 0);
    var n = t % 19, r = Math.floor(t / 100), s = t % 100, i = Math.floor(r / 4), a = r % 4, l = Math.floor((r + 8) / 25), c = Math.floor((r - l + 1) / 3), d = Math.floor(19 * n + r - i - c + 15) % 30, f = Math.floor(s / 4), m = s % 4, g = Math.floor(32 + 2 * a + 2 * f - d - m) % 7, y = Math.floor((n + 11 * d + 22 * g) / 451), v = Math.floor((d + g - 7 * y + 114) / 31), S = (d + g - 7 * y + 114) % 31 + 1, b = Date.UTC(t, v - 1, S + e), _ = Date.UTC(t, 0, 1);
    return [
      Math.ceil((b - _) / (1e3 * 60 * 60 * 24))
    ];
  }
  var qM = (function() {
    function t(e) {
      this.options = e;
    }
    return t.prototype.rebuild = function(e, n) {
      var r = this.options;
      if (e !== this.lastyear && (this.yearinfo = zM(e, r)), Dt(r.bynweekday) && (n !== this.lastmonth || e !== this.lastyear)) {
        var s = this.yearinfo, i = s.yearlen, a = s.mrange, l = s.wdaymask;
        this.monthinfo = GM(e, n, i, a, l, r);
      }
      pt(r.byeaster) && (this.eastermask = ZM(e, r.byeaster));
    }, Object.defineProperty(t.prototype, "lastyear", {
      get: function() {
        return this.monthinfo ? this.monthinfo.lastyear : null;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "lastmonth", {
      get: function() {
        return this.monthinfo ? this.monthinfo.lastmonth : null;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "yearlen", {
      get: function() {
        return this.yearinfo.yearlen;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "yearordinal", {
      get: function() {
        return this.yearinfo.yearordinal;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "mrange", {
      get: function() {
        return this.yearinfo.mrange;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "wdaymask", {
      get: function() {
        return this.yearinfo.wdaymask;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "mmask", {
      get: function() {
        return this.yearinfo.mmask;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "wnomask", {
      get: function() {
        return this.yearinfo.wnomask;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "nwdaymask", {
      get: function() {
        return this.monthinfo ? this.monthinfo.nwdaymask : [];
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "nextyearlen", {
      get: function() {
        return this.yearinfo.nextyearlen;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "mdaymask", {
      get: function() {
        return this.yearinfo.mdaymask;
      },
      enumerable: false,
      configurable: true
    }), Object.defineProperty(t.prototype, "nmdaymask", {
      get: function() {
        return this.yearinfo.nmdaymask;
      },
      enumerable: false,
      configurable: true
    }), t.prototype.ydayset = function() {
      return [
        xn(this.yearlen),
        0,
        this.yearlen
      ];
    }, t.prototype.mdayset = function(e, n) {
      for (var r = this.mrange[n - 1], s = this.mrange[n], i = We(null, this.yearlen), a = r; a < s; a++) i[a] = a;
      return [
        i,
        r,
        s
      ];
    }, t.prototype.wdayset = function(e, n, r) {
      for (var s = We(null, this.yearlen + 7), i = Jl(qr(e, n, r)) - this.yearordinal, a = i, l = 0; l < 7 && (s[i] = i, ++i, this.wdaymask[i] !== this.options.wkst); l++) ;
      return [
        s,
        a,
        i
      ];
    }, t.prototype.ddayset = function(e, n, r) {
      var s = We(null, this.yearlen), i = Jl(qr(e, n, r)) - this.yearordinal;
      return s[i] = i, [
        s,
        i,
        i + 1
      ];
    }, t.prototype.htimeset = function(e, n, r, s) {
      var i = this, a = [];
      return this.options.byminute.forEach(function(l) {
        a = a.concat(i.mtimeset(e, l, r, s));
      }), ki(a), a;
    }, t.prototype.mtimeset = function(e, n, r, s) {
      var i = this.options.bysecond.map(function(a) {
        return new Xa(e, n, a, s);
      });
      return ki(i), i;
    }, t.prototype.stimeset = function(e, n, r, s) {
      return [
        new Xa(e, n, r, s)
      ];
    }, t.prototype.getdayset = function(e) {
      switch (e) {
        case Ue.YEARLY:
          return this.ydayset.bind(this);
        case Ue.MONTHLY:
          return this.mdayset.bind(this);
        case Ue.WEEKLY:
          return this.wdayset.bind(this);
        case Ue.DAILY:
          return this.ddayset.bind(this);
        default:
          return this.ddayset.bind(this);
      }
    }, t.prototype.gettimeset = function(e) {
      switch (e) {
        case Ue.HOURLY:
          return this.htimeset.bind(this);
        case Ue.MINUTELY:
          return this.mtimeset.bind(this);
        case Ue.SECONDLY:
          return this.stimeset.bind(this);
      }
    }, t;
  })();
  function QM(t, e, n, r, s, i) {
    for (var a = [], l = 0; l < t.length; l++) {
      var c = void 0, d = void 0, f = t[l];
      f < 0 ? (c = Math.floor(f / e.length), d = $t(f, e.length)) : (c = Math.floor((f - 1) / e.length), d = $t(f - 1, e.length));
      for (var m = [], g = n; g < r; g++) {
        var y = i[g];
        pt(y) && m.push(y);
      }
      var v = void 0;
      c < 0 ? v = m.slice(c)[0] : v = m[c];
      var S = e[d], b = Sp(s.yearordinal + v), _ = _p(b, S);
      Qe(a, _) || a.push(_);
    }
    return ki(a), a;
  }
  function Tp(t, e) {
    var n = e.dtstart, r = e.freq, s = e.interval, i = e.until, a = e.bysetpos, l = e.count;
    if (l === 0 || s === 0) return jn(t);
    var c = kM.fromDate(n), d = new qM(e);
    d.rebuild(c.year, c.month);
    for (var f = KM(d, c, e); ; ) {
      var m = d.getdayset(r)(c.year, c.month, c.day), g = m[0], y = m[1], v = m[2], S = JM(g, y, v, d, e);
      if (Dt(a)) for (var b = QM(a, f, y, v, d, g), _ = 0; _ < b.length; _++) {
        var E = b[_];
        if (i && E > i) return jn(t);
        if (E >= n) {
          var R = Lf(E, e);
          if (!t.accept(R) || l && (--l, !l)) return jn(t);
        }
      }
      else for (var _ = y; _ < v; _++) {
        var T = g[_];
        if (pt(T)) for (var x = Sp(d.yearordinal + T), N = 0; N < f.length; N++) {
          var I = f[N], E = _p(x, I);
          if (i && E > i) return jn(t);
          if (E >= n) {
            var R = Lf(E, e);
            if (!t.accept(R) || l && (--l, !l)) return jn(t);
          }
        }
      }
      if (e.interval === 0 || (c.add(e, S), c.year > vp)) return jn(t);
      Gc(r) || (f = d.gettimeset(r)(c.hour, c.minute, c.second, 0)), d.rebuild(c.year, c.month);
    }
  }
  function XM(t, e, n) {
    var r = n.bymonth, s = n.byweekno, i = n.byweekday, a = n.byeaster, l = n.bymonthday, c = n.bynmonthday, d = n.byyearday;
    return Dt(r) && !Qe(r, t.mmask[e]) || Dt(s) && !t.wnomask[e] || Dt(i) && !Qe(i, t.wdaymask[e]) || Dt(t.nwdaymask) && !t.nwdaymask[e] || a !== null && !Qe(t.eastermask, e) || (Dt(l) || Dt(c)) && !Qe(l, t.mdaymask[e]) && !Qe(c, t.nmdaymask[e]) || Dt(d) && (e < t.yearlen && !Qe(d, e + 1) && !Qe(d, -t.yearlen + e) || e >= t.yearlen && !Qe(d, e + 1 - t.yearlen) && !Qe(d, -t.nextyearlen + e - t.yearlen));
  }
  function Lf(t, e) {
    return new Ka(t, e.tzid).rezonedDate();
  }
  function jn(t) {
    return t.getValue();
  }
  function JM(t, e, n, r, s) {
    for (var i = false, a = e; a < n; a++) {
      var l = t[a];
      i = XM(r, l, s), i && (t[l] = null);
    }
    return i;
  }
  function KM(t, e, n) {
    var r = n.freq, s = n.byhour, i = n.byminute, a = n.bysecond;
    return Gc(r) ? xM(n) : r >= ke.HOURLY && Dt(s) && !Qe(s, e.hour) || r >= ke.MINUTELY && Dt(i) && !Qe(i, e.minute) || r >= ke.SECONDLY && Dt(a) && !Qe(a, e.second) ? [] : t.gettimeset(r)(e.hour, e.minute, e.second, e.millisecond);
  }
  var nn = {
    MO: new Lt(0),
    TU: new Lt(1),
    WE: new Lt(2),
    TH: new Lt(3),
    FR: new Lt(4),
    SA: new Lt(5),
    SU: new Lt(6)
  }, Zc = {
    freq: Ue.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: nn.MO,
    count: null,
    until: null,
    tzid: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null
  }, eE = Object.keys(Zc), ke = (function() {
    function t(e, n) {
      e === void 0 && (e = {}), n === void 0 && (n = false), this._cache = n ? null : new OM(), this.origOptions = kp(e);
      var r = TM(e).parsedOptions;
      this.options = r;
    }
    return t.parseText = function(e, n) {
      return Dp(e, n);
    }, t.fromText = function(e, n) {
      return SM(e, n);
    }, t.fromString = function(e) {
      return new t(t.parseString(e) || void 0);
    }, t.prototype._iter = function(e) {
      return Tp(e, this.options);
    }, t.prototype._cacheGet = function(e, n) {
      return this._cache ? this._cache._cacheGet(e, n) : false;
    }, t.prototype._cacheAdd = function(e, n, r) {
      if (this._cache) return this._cache._cacheAdd(e, n, r);
    }, t.prototype.all = function(e) {
      if (e) return this._iter(new Rf("all", {}, e));
      var n = this._cacheGet("all");
      return n === false && (n = this._iter(new ws("all", {})), this._cacheAdd("all", n)), n;
    }, t.prototype.between = function(e, n, r, s) {
      if (r === void 0 && (r = false), !ci(e) || !ci(n)) throw new Error("Invalid date passed in to RRule.between");
      var i = {
        before: n,
        after: e,
        inc: r
      };
      if (s) return this._iter(new Rf("between", i, s));
      var a = this._cacheGet("between", i);
      return a === false && (a = this._iter(new ws("between", i)), this._cacheAdd("between", a, i)), a;
    }, t.prototype.before = function(e, n) {
      if (n === void 0 && (n = false), !ci(e)) throw new Error("Invalid date passed in to RRule.before");
      var r = {
        dt: e,
        inc: n
      }, s = this._cacheGet("before", r);
      return s === false && (s = this._iter(new ws("before", r)), this._cacheAdd("before", s, r)), s;
    }, t.prototype.after = function(e, n) {
      if (n === void 0 && (n = false), !ci(e)) throw new Error("Invalid date passed in to RRule.after");
      var r = {
        dt: e,
        inc: n
      }, s = this._cacheGet("after", r);
      return s === false && (s = this._iter(new ws("after", r)), this._cacheAdd("after", s, r)), s;
    }, t.prototype.count = function() {
      return this.all().length;
    }, t.prototype.toString = function() {
      return tc(this.origOptions);
    }, t.prototype.toText = function(e, n, r) {
      return _M(this, e, n, r);
    }, t.prototype.isFullyConvertibleToText = function() {
      return DM(this);
    }, t.prototype.clone = function() {
      return new t(this.origOptions);
    }, t.FREQUENCIES = [
      "YEARLY",
      "MONTHLY",
      "WEEKLY",
      "DAILY",
      "HOURLY",
      "MINUTELY",
      "SECONDLY"
    ], t.YEARLY = Ue.YEARLY, t.MONTHLY = Ue.MONTHLY, t.WEEKLY = Ue.WEEKLY, t.DAILY = Ue.DAILY, t.HOURLY = Ue.HOURLY, t.MINUTELY = Ue.MINUTELY, t.SECONDLY = Ue.SECONDLY, t.MO = nn.MO, t.TU = nn.TU, t.WE = nn.WE, t.TH = nn.TH, t.FR = nn.FR, t.SA = nn.SA, t.SU = nn.SU, t.parseString = ec, t.optionsToString = tc, t;
  })();
  function tE(t, e, n, r, s, i) {
    var a = {}, l = t.accept;
    function c(g, y) {
      n.forEach(function(v) {
        v.between(g, y, true).forEach(function(S) {
          a[Number(S)] = true;
        });
      });
    }
    s.forEach(function(g) {
      var y = new Ka(g, i).rezonedDate();
      a[Number(y)] = true;
    }), t.accept = function(g) {
      var y = Number(g);
      return isNaN(y) ? l.call(this, g) : !a[y] && (c(new Date(y - 1), new Date(y + 1)), !a[y]) ? (a[y] = true, l.call(this, g)) : true;
    }, t.method === "between" && (c(t.args.after, t.args.before), t.accept = function(g) {
      var y = Number(g);
      return a[y] ? true : (a[y] = true, l.call(this, g));
    });
    for (var d = 0; d < r.length; d++) {
      var f = new Ka(r[d], i).rezonedDate();
      if (!t.accept(new Date(f.getTime()))) break;
    }
    e.forEach(function(g) {
      Tp(t, g.options);
    });
    var m = t._result;
    switch (ki(m), t.method) {
      case "all":
      case "between":
        return m;
      case "before":
        return m.length && m[m.length - 1] || null;
      default:
        return m.length && m[0] || null;
    }
  }
  var Yf = {
    dtstart: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null
  };
  function nE(t, e) {
    var n = [], r = [], s = [], i = [], a = Ja(t), l = a.dtstart, c = a.tzid, d = oE(t, e.unfold);
    return d.forEach(function(f) {
      var m;
      if (f) {
        var g = aE(f), y = g.name, v = g.parms, S = g.value;
        switch (y.toUpperCase()) {
          case "RRULE":
            if (v.length) throw new Error("unsupported RRULE parm: ".concat(v.join(",")));
            n.push(ec(f));
            break;
          case "RDATE":
            var b = (m = /RDATE(?:;TZID=([^:=]+))?/i.exec(f)) !== null && m !== void 0 ? m : [], _ = b[1];
            _ && !c && (c = _), r = r.concat(Ff(S, v));
            break;
          case "EXRULE":
            if (v.length) throw new Error("unsupported EXRULE parm: ".concat(v.join(",")));
            s.push(ec(S));
            break;
          case "EXDATE":
            i = i.concat(Ff(S, v));
            break;
          case "DTSTART":
            break;
          default:
            throw new Error("unsupported property: " + y);
        }
      }
    }), {
      dtstart: l,
      tzid: c,
      rrulevals: n,
      rdatevals: r,
      exrulevals: s,
      exdatevals: i
    };
  }
  function rE(t, e) {
    var n = nE(t, e), r = n.rrulevals, s = n.rdatevals, i = n.exrulevals, a = n.exdatevals, l = n.dtstart, c = n.tzid, d = e.cache === false;
    if (e.compatible && (e.forceset = true, e.unfold = true), e.forceset || r.length > 1 || s.length || i.length || a.length) {
      var f = new xp(d);
      return f.dtstart(l), f.tzid(c || void 0), r.forEach(function(g) {
        f.rrule(new ke(El(g, l, c), d));
      }), s.forEach(function(g) {
        f.rdate(g);
      }), i.forEach(function(g) {
        f.exrule(new ke(El(g, l, c), d));
      }), a.forEach(function(g) {
        f.exdate(g);
      }), e.compatible && e.dtstart && f.rdate(l), f;
    }
    var m = r[0] || {};
    return new ke(El(m, m.dtstart || e.dtstart || l, m.tzid || e.tzid || c), d);
  }
  function nc(t, e) {
    return e === void 0 && (e = {}), rE(t, sE(e));
  }
  function El(t, e, n) {
    return on(on({}, t), {
      dtstart: e,
      tzid: n
    });
  }
  function sE(t) {
    var e = [], n = Object.keys(t), r = Object.keys(Yf);
    if (n.forEach(function(s) {
      Qe(r, s) || e.push(s);
    }), e.length) throw new Error("Invalid options: " + e.join(", "));
    return on(on({}, Yf), t);
  }
  function iE(t) {
    if (t.indexOf(":") === -1) return {
      name: "RRULE",
      value: t
    };
    var e = fM(t, ":", 1), n = e[0], r = e[1];
    return {
      name: n,
      value: r
    };
  }
  function aE(t) {
    var e = iE(t), n = e.name, r = e.value, s = n.split(";");
    if (!s) throw new Error("empty property name");
    return {
      name: s[0].toUpperCase(),
      parms: s.slice(1),
      value: r
    };
  }
  function oE(t, e) {
    if (e === void 0 && (e = false), t = t && t.trim(), !t) throw new Error("Invalid empty string");
    if (!e) return t.split(/\s/);
    for (var n = t.split(`
`), r = 0; r < n.length; ) {
      var s = n[r] = n[r].replace(/\s+$/g, "");
      s ? r > 0 && s[0] === " " ? (n[r - 1] += s.slice(1), n.splice(r, 1)) : r += 1 : n.splice(r, 1);
    }
    return n;
  }
  function lE(t) {
    t.forEach(function(e) {
      if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw new Error("unsupported RDATE/EXDATE parm: " + e);
    });
  }
  function Ff(t, e) {
    return lE(e), t.split(",").map(function(n) {
      return $c(n);
    });
  }
  function Hf(t) {
    var e = this;
    return function(n) {
      if (n !== void 0 && (e["_".concat(t)] = n), e["_".concat(t)] !== void 0) return e["_".concat(t)];
      for (var r = 0; r < e._rrule.length; r++) {
        var s = e._rrule[r].origOptions[t];
        if (s) return s;
      }
    };
  }
  var xp = (function(t) {
    fc(e, t);
    function e(n) {
      n === void 0 && (n = false);
      var r = t.call(this, {}, n) || this;
      return r.dtstart = Hf.apply(r, [
        "dtstart"
      ]), r.tzid = Hf.apply(r, [
        "tzid"
      ]), r._rrule = [], r._rdate = [], r._exrule = [], r._exdate = [], r;
    }
    return e.prototype._iter = function(n) {
      return tE(n, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    }, e.prototype.rrule = function(n) {
      jf(n, this._rrule);
    }, e.prototype.exrule = function(n) {
      jf(n, this._exrule);
    }, e.prototype.rdate = function(n) {
      Vf(n, this._rdate);
    }, e.prototype.exdate = function(n) {
      Vf(n, this._exdate);
    }, e.prototype.rrules = function() {
      return this._rrule.map(function(n) {
        return nc(n.toString());
      });
    }, e.prototype.exrules = function() {
      return this._exrule.map(function(n) {
        return nc(n.toString());
      });
    }, e.prototype.rdates = function() {
      return this._rdate.map(function(n) {
        return new Date(n.getTime());
      });
    }, e.prototype.exdates = function() {
      return this._exdate.map(function(n) {
        return new Date(n.getTime());
      });
    }, e.prototype.valueOf = function() {
      var n = [];
      return !this._rrule.length && this._dtstart && (n = n.concat(tc({
        dtstart: this._dtstart
      }))), this._rrule.forEach(function(r) {
        n = n.concat(r.toString().split(`
`));
      }), this._exrule.forEach(function(r) {
        n = n.concat(r.toString().split(`
`).map(function(s) {
          return s.replace(/^RRULE:/, "EXRULE:");
        }).filter(function(s) {
          return !/^DTSTART/.test(s);
        }));
      }), this._rdate.length && n.push(Wf("RDATE", this._rdate, this.tzid())), this._exdate.length && n.push(Wf("EXDATE", this._exdate, this.tzid())), n;
    }, e.prototype.toString = function() {
      return this.valueOf().join(`
`);
    }, e.prototype.clone = function() {
      var n = new e(!!this._cache);
      return this._rrule.forEach(function(r) {
        return n.rrule(r.clone());
      }), this._exrule.forEach(function(r) {
        return n.exrule(r.clone());
      }), this._rdate.forEach(function(r) {
        return n.rdate(new Date(r.getTime()));
      }), this._exdate.forEach(function(r) {
        return n.exdate(new Date(r.getTime()));
      }), n;
    }, e;
  })(ke);
  function jf(t, e) {
    if (!(t instanceof ke)) throw new TypeError(String(t) + " is not RRule instance");
    Qe(e.map(String), String(t)) || e.push(t);
  }
  function Vf(t, e) {
    if (!(t instanceof Date)) throw new TypeError(String(t) + " is not Date instance");
    Qe(e.map(Number), Number(t)) || (e.push(t), ki(e));
  }
  function Wf(t, e, n) {
    var r = !n || n.toUpperCase() === "UTC", s = r ? "".concat(t, ":") : "".concat(t, ";TZID=").concat(n, ":"), i = e.map(function(a) {
      return zc(a.valueOf(), r);
    }).join(",");
    return "".concat(s).concat(i);
  }
  const cE = {
    parse(t, e) {
      if (t.rrule != null) {
        let n = uE(t, e);
        if (n) return {
          typeData: {
            rruleSet: n.rruleSet,
            dateEnv: n.isTimeZoneSpecified ? void 0 : e
          },
          allDayGuess: !n.isTimeSpecified,
          duration: t.duration
        };
      }
      return null;
    },
    expand(t, e, n) {
      return t.rruleSet.between(ut(e.start, -1), ut(e.end, 1)).map((r) => n.createMarker(t.dateEnv ? t.dateEnv.toDate(r) : r));
    }
  };
  function uE(t, e) {
    let n, r = false, s = false;
    if (typeof t.rrule == "string") {
      let l = dE(t.rrule);
      n = l.rruleSet, r = l.isTimeSpecified, s = l.isTimeZoneSpecified;
    }
    if (typeof t.rrule == "object" && t.rrule) {
      let l = Uf(t.rrule, e);
      n = new xp(), n.rrule(l.rrule), r = l.isTimeSpecified, s = l.isTimeZoneSpecified;
    }
    let i = [].concat(t.exdate || []), a = [].concat(t.exrule || []);
    for (let l of i) {
      let c = go(l);
      r = r || !c.isTimeUnspecified, s = s || c.timeZoneOffset !== null, n.exdate(new Date(c.marker.valueOf() - (c.timeZoneOffset || 0) * 60 * 1e3));
    }
    for (let l of a) {
      let c = Uf(l, e);
      r = r || c.isTimeSpecified, s = s || c.isTimeZoneSpecified, n.exrule(c.rrule);
    }
    return {
      rruleSet: n,
      isTimeSpecified: r,
      isTimeZoneSpecified: s
    };
  }
  function Uf(t, e) {
    let n = false, r = false;
    function s(a) {
      if (typeof a == "string") {
        let l = go(a);
        return l ? (n = n || !l.isTimeUnspecified, r = r || l.timeZoneOffset !== null, new Date(l.marker.valueOf() - (l.timeZoneOffset || 0) * 60 * 1e3)) : null;
      }
      return a;
    }
    let i = Object.assign(Object.assign({}, t), {
      dtstart: s(t.dtstart),
      until: s(t.until),
      freq: eo(t.freq),
      wkst: t.wkst == null ? (e.weekDow - 1 + 7) % 7 : eo(t.wkst),
      byweekday: hE(t.byweekday)
    });
    return {
      rrule: new ke(i),
      isTimeSpecified: n,
      isTimeZoneSpecified: r
    };
  }
  function dE(t) {
    let e = nc(t, {
      forceset: true
    }), n = fE(t);
    return Object.assign({
      rruleSet: e
    }, n);
  }
  function fE(t) {
    let e = false, n = false;
    function r(s, i, a) {
      let l = go(a);
      e = e || !l.isTimeUnspecified, n = n || l.timeZoneOffset !== null;
    }
    return t.replace(/\b(DTSTART:)([^\n]*)/, r), t.replace(/\b(EXDATE:)([^\n]*)/, r), t.replace(/\b(UNTIL=)([^;\n]*)/, r), {
      isTimeSpecified: e,
      isTimeZoneSpecified: n
    };
  }
  function hE(t) {
    return Array.isArray(t) ? t.map(eo) : eo(t);
  }
  function eo(t) {
    return typeof t == "string" ? ke[t.toUpperCase()] : t;
  }
  const mE = {
    rrule: V,
    exrule: V,
    exdate: V,
    duration: Pe
  };
  var pE = fn({
    name: "@fullcalendar/rrule",
    recurringTypes: [
      cE
    ],
    eventRefiners: mE
  });
  class gE extends ze {
    constructor() {
      super(...arguments), this.state = {
        textId: wr()
      };
    }
    render() {
      let { theme: e, dateEnv: n, options: r, viewApi: s } = this.context, { cellId: i, dayDate: a, todayRange: l } = this.props, { textId: c } = this.state, d = Oc(a, l), f = r.listDayFormat ? n.format(a, r.listDayFormat) : "", m = r.listDaySideFormat ? n.format(a, r.listDaySideFormat) : "", g = Object.assign({
        date: n.toDate(a),
        view: s,
        textId: c,
        text: f,
        sideText: m,
        navLinkAttrs: Ps(this.context, a),
        sideNavLinkAttrs: Ps(this.context, a, "day", false)
      }, d);
      return M(Pt, {
        elTag: "tr",
        elClasses: [
          "fc-list-day",
          ...So(d, e)
        ],
        elAttrs: {
          "data-date": Pi(a)
        },
        renderProps: g,
        generatorName: "dayHeaderContent",
        customGenerator: r.dayHeaderContent,
        defaultGenerator: yE,
        classNameGenerator: r.dayHeaderClassNames,
        didMount: r.dayHeaderDidMount,
        willUnmount: r.dayHeaderWillUnmount
      }, (y) => M("th", {
        scope: "colgroup",
        colSpan: 3,
        id: i,
        "aria-labelledby": c
      }, M(y, {
        elTag: "div",
        elClasses: [
          "fc-list-day-cushion",
          e.getClass("tableCellShaded")
        ]
      })));
    }
  }
  function yE(t) {
    return M(Ze, null, t.text && M("a", Object.assign({
      id: t.textId,
      className: "fc-list-day-text"
    }, t.navLinkAttrs), t.text), t.sideText && M("a", Object.assign({
      "aria-hidden": true,
      className: "fc-list-day-side-text"
    }, t.sideNavLinkAttrs), t.sideText));
  }
  const vE = nt({
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
  });
  class bE extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { seg: s, timeHeaderId: i, eventHeaderId: a, dateHeaderId: l } = e, c = r.eventTimeFormat || vE;
      return M(Do, Object.assign({}, e, {
        elTag: "tr",
        elClasses: [
          "fc-list-event",
          s.eventRange.def.url && "fc-event-forced-url"
        ],
        defaultGenerator: () => wE(s, n),
        seg: s,
        timeText: "",
        disableDragging: true,
        disableResizing: true
      }), (d, f) => M(Ze, null, SE(s, c, n, i, l), M("td", {
        "aria-hidden": true,
        className: "fc-list-event-graphic"
      }, M("span", {
        className: "fc-list-event-dot",
        style: {
          borderColor: f.borderColor || f.backgroundColor
        }
      })), M(d, {
        elTag: "td",
        elClasses: [
          "fc-list-event-title"
        ],
        elAttrs: {
          headers: `${a} ${l}`
        }
      })));
    }
  }
  function wE(t, e) {
    let n = Ac(t, e);
    return M("a", Object.assign({}, n), t.eventRange.def.title);
  }
  function SE(t, e, n, r, s) {
    let { options: i } = n;
    if (i.displayEventTime !== false) {
      let a = t.eventRange.def, l = t.eventRange.instance, c = false, d;
      if (a.allDay ? c = true : mD(t.eventRange.range) ? t.isStart ? d = hi(t, e, n, null, null, l.range.start, t.end) : t.isEnd ? d = hi(t, e, n, null, null, t.start, l.range.end) : c = true : d = hi(t, e, n), c) {
        let f = {
          text: n.options.allDayText,
          view: n.viewApi
        };
        return M(Pt, {
          elTag: "td",
          elClasses: [
            "fc-list-event-time"
          ],
          elAttrs: {
            headers: `${r} ${s}`
          },
          renderProps: f,
          generatorName: "allDayContent",
          customGenerator: i.allDayContent,
          defaultGenerator: _E,
          classNameGenerator: i.allDayClassNames,
          didMount: i.allDayDidMount,
          willUnmount: i.allDayWillUnmount
        });
      }
      return M("td", {
        className: "fc-list-event-time"
      }, d);
    }
    return null;
  }
  function _E(t) {
    return t.text;
  }
  class DE extends dn {
    constructor() {
      super(...arguments), this.computeDateVars = Te(TE), this.eventStoreToSegs = Te(this._eventStoreToSegs), this.state = {
        timeHeaderId: wr(),
        eventHeaderId: wr(),
        dateHeaderIdRoot: wr()
      }, this.setRootEl = (e) => {
        e ? this.context.registerInteractiveComponent(this, {
          el: e
        }) : this.context.unregisterInteractiveComponent(this);
      };
    }
    render() {
      let { props: e, context: n } = this, { dayDates: r, dayRanges: s } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, s);
      return M(Si, {
        elRef: this.setRootEl,
        elClasses: [
          "fc-list",
          n.theme.getClass("table"),
          n.options.stickyHeaderDates !== false ? "fc-list-sticky" : ""
        ],
        viewSpec: n.viewSpec
      }, M(Ym, {
        liquid: !e.isHeightAuto,
        overflowX: e.isHeightAuto ? "visible" : "hidden",
        overflowY: e.isHeightAuto ? "visible" : "auto"
      }, i.length > 0 ? this.renderSegList(i, r) : this.renderEmptyMessage()));
    }
    renderEmptyMessage() {
      let { options: e, viewApi: n } = this.context, r = {
        text: e.noEventsText,
        view: n
      };
      return M(Pt, {
        elTag: "div",
        elClasses: [
          "fc-list-empty"
        ],
        renderProps: r,
        generatorName: "noEventsContent",
        customGenerator: e.noEventsContent,
        defaultGenerator: kE,
        classNameGenerator: e.noEventsClassNames,
        didMount: e.noEventsDidMount,
        willUnmount: e.noEventsWillUnmount
      }, (s) => M(s, {
        elTag: "div",
        elClasses: [
          "fc-list-empty-cushion"
        ]
      }));
    }
    renderSegList(e, n) {
      let { theme: r, options: s } = this.context, { timeHeaderId: i, eventHeaderId: a, dateHeaderIdRoot: l } = this.state, c = xE(e);
      return M(es, {
        unit: "day"
      }, (d, f) => {
        let m = [];
        for (let g = 0; g < c.length; g += 1) {
          let y = c[g];
          if (y) {
            let v = Pi(n[g]), S = l + "-" + v;
            m.push(M(gE, {
              key: v,
              cellId: S,
              dayDate: n[g],
              todayRange: f
            })), y = Cc(y, s.eventOrder);
            for (let b of y) m.push(M(bE, Object.assign({
              key: v + ":" + b.eventRange.instance.instanceId,
              seg: b,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: false,
              timeHeaderId: i,
              eventHeaderId: a,
              dateHeaderId: S
            }, qn(b, f, d))));
          }
        }
        return M("table", {
          className: "fc-list-table " + r.getClass("table")
        }, M("thead", null, M("tr", null, M("th", {
          scope: "col",
          id: i
        }, s.timeHint), M("th", {
          scope: "col",
          "aria-hidden": true
        }), M("th", {
          scope: "col",
          id: a
        }, s.eventHint))), M("tbody", null, m));
      });
    }
    _eventStoreToSegs(e, n, r) {
      return this.eventRangesToSegs(Ul(e, n, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, r);
    }
    eventRangesToSegs(e, n) {
      let r = [];
      for (let s of e) r.push(...this.eventRangeToSegs(s, n));
      return r;
    }
    eventRangeToSegs(e, n) {
      let { dateEnv: r } = this.context, { nextDayThreshold: s } = this.context.options, i = e.range, a = e.def.allDay, l, c, d, f = [];
      for (l = 0; l < n.length; l += 1) if (c = Tr(i, n[l]), c && (d = {
        component: this,
        eventRange: e,
        start: c.start,
        end: c.end,
        isStart: e.isStart && c.start.valueOf() === i.start.valueOf(),
        isEnd: e.isEnd && c.end.valueOf() === i.end.valueOf(),
        dayIndex: l
      }, f.push(d), !d.isEnd && !a && l + 1 < n.length && i.end < r.add(n[l + 1].start, s))) {
        d.end = i.end, d.isEnd = true;
        break;
      }
      return f;
    }
  }
  function kE(t) {
    return t.text;
  }
  function TE(t) {
    let e = Xe(t.renderRange.start), n = t.renderRange.end, r = [], s = [];
    for (; e < n; ) r.push(e), s.push({
      start: e,
      end: ut(e, 1)
    }), e = ut(e, 1);
    return {
      dayDates: r,
      dayRanges: s
    };
  }
  function xE(t) {
    let e = [], n, r;
    for (n = 0; n < t.length; n += 1) r = t[n], (e[r.dayIndex] || (e[r.dayIndex] = [])).push(r);
    return e;
  }
  var ME = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
  uo(ME);
  const EE = {
    listDayFormat: Bf,
    listDaySideFormat: Bf,
    noEventsClassNames: V,
    noEventsContent: V,
    noEventsDidMount: V,
    noEventsWillUnmount: V
  };
  function Bf(t) {
    return t === false ? null : nt(t);
  }
  var CE = fn({
    name: "@fullcalendar/list",
    optionRefiners: EE,
    views: {
      list: {
        component: DE,
        buttonTextKey: "list",
        listDayFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listDay: {
        type: "list",
        duration: {
          days: 1
        },
        listDayFormat: {
          weekday: "long"
        }
      },
      listWeek: {
        type: "list",
        duration: {
          weeks: 1
        },
        listDayFormat: {
          weekday: "long"
        },
        listDaySideFormat: {
          month: "long",
          day: "numeric",
          year: "numeric"
        }
      },
      listMonth: {
        type: "list",
        duration: {
          month: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      },
      listYear: {
        type: "list",
        duration: {
          year: 1
        },
        listDaySideFormat: {
          weekday: "long"
        }
      }
    }
  });
  function Cl(t) {
    return t === "Tag" || t === "Monat" ? "r" : t === "Jahr" ? "s" : "";
  }
  var AE = {
    code: "de",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Zur\xFCck",
      next: "Vor",
      today: "Heute",
      year: "Jahr",
      month: "Monat",
      week: "Woche",
      day: "Tag",
      list: "Termin\xFCbersicht"
    },
    weekText: "KW",
    weekTextLong: "Woche",
    allDayText: "Ganzt\xE4gig",
    moreLinkText(t) {
      return "+ weitere " + t;
    },
    noEventsText: "Keine Ereignisse anzuzeigen",
    buttonHints: {
      prev(t) {
        return `Vorherige${Cl(t)} ${t}`;
      },
      next(t) {
        return `N\xE4chste${Cl(t)} ${t}`;
      },
      today(t) {
        return t === "Tag" ? "Heute" : `Diese${Cl(t)} ${t}`;
      }
    },
    viewHint(t) {
      return t + (t === "Woche" ? "n" : t === "Monat" ? "s" : "es") + "ansicht";
    },
    navLinkHint: "Gehe zu $0",
    moreLinkHint(t) {
      return "Zeige " + (t === 1 ? "ein weiteres Ereignis" : t + " weitere Ereignisse");
    },
    closeHint: "Schlie\xDFen",
    timeHint: "Uhrzeit",
    eventHint: "Ereignis"
  }, RE = {
    code: "ru",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "\u041F\u0440\u0435\u0434",
      next: "\u0421\u043B\u0435\u0434",
      today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F",
      year: "\u0413\u043E\u0434",
      month: "\u041C\u0435\u0441\u044F\u0446",
      week: "\u041D\u0435\u0434\u0435\u043B\u044F",
      day: "\u0414\u0435\u043D\u044C",
      list: "\u041F\u043E\u0432\u0435\u0441\u0442\u043A\u0430 \u0434\u043D\u044F"
    },
    weekText: "\u041D\u0435\u0434",
    allDayText: "\u0412\u0435\u0441\u044C \u0434\u0435\u043D\u044C",
    moreLinkText(t) {
      return "+ \u0435\u0449\u0451 " + t;
    },
    noEventsText: "\u041D\u0435\u0442 \u0441\u043E\u0431\u044B\u0442\u0438\u0439 \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
  }, OE = {
    code: "pt",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Anterior",
      next: "Seguinte",
      today: "Hoje",
      year: "Ano",
      month: "M\xEAs",
      week: "Semana",
      day: "Dia",
      list: "Agenda"
    },
    weekText: "Sem",
    allDayText: "Todo o dia",
    moreLinkText: "mais",
    noEventsText: "N\xE3o h\xE1 eventos para mostrar"
  }, IE = {
    code: "nl",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Vorige",
      next: "Volgende",
      today: "Vandaag",
      year: "Jaar",
      month: "Maand",
      week: "Week",
      day: "Dag",
      list: "Lijst"
    },
    allDayText: "Hele dag",
    moreLinkText: "extra",
    noEventsText: "Geen evenementen om te laten zien"
  }, PE = {
    code: "fr",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Pr\xE9c\xE9dent",
      next: "Suivant",
      today: "Aujourd'hui",
      year: "Ann\xE9e",
      month: "Mois",
      week: "Semaine",
      day: "Jour",
      list: "Planning"
    },
    weekText: "Sem.",
    weekTextLong: "Semaine",
    allDayText: "Toute la journ\xE9e",
    moreLinkText: "en plus",
    noEventsText: "Aucun \xE9v\xE8nement \xE0 afficher"
  }, NE = {
    code: "it",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Prec",
      next: "Succ",
      today: "Oggi",
      year: "Anno",
      month: "Mese",
      week: "Settimana",
      day: "Giorno",
      list: "Agenda"
    },
    weekText: "Sm",
    allDayText: "Tutto il giorno",
    moreLinkText(t) {
      return "+altri " + t;
    },
    noEventsText: "Non ci sono eventi da visualizzare"
  }, LE = {
    code: "es",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Ant",
      next: "Sig",
      today: "Hoy",
      year: "A\xF1o",
      month: "Mes",
      week: "Semana",
      day: "D\xEDa",
      list: "Agenda"
    },
    buttonHints: {
      prev: "$0 antes",
      next: "$0 siguiente",
      today(t) {
        return t === "D\xEDa" ? "Hoy" : (t === "Semana" ? "Esta" : "Este") + " " + t.toLocaleLowerCase();
      }
    },
    viewHint(t) {
      return "Vista " + (t === "Semana" ? "de la" : "del") + " " + t.toLocaleLowerCase();
    },
    weekText: "Sm",
    weekTextLong: "Semana",
    allDayText: "Todo el d\xEDa",
    moreLinkText: "m\xE1s",
    moreLinkHint(t) {
      return `Mostrar ${t} eventos m\xE1s`;
    },
    noEventsText: "No hay eventos para mostrar",
    navLinkHint: "Ir al $0",
    closeHint: "Cerrar",
    timeHint: "La hora",
    eventHint: "Evento"
  }, YE = {
    code: "pl",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "Poprzedni",
      next: "Nast\u0119pny",
      today: "Dzi\u015B",
      year: "Rok",
      month: "Miesi\u0105c",
      week: "Tydzie\u0144",
      day: "Dzie\u0144",
      list: "Plan dnia"
    },
    weekText: "Tydz",
    allDayText: "Ca\u0142y dzie\u0144",
    moreLinkText: "wi\u0119cej",
    noEventsText: "Brak wydarze\u0144 do wy\u015Bwietlenia"
  }, FE = {
    code: "uk",
    week: {
      dow: 1,
      doy: 7
    },
    buttonText: {
      prev: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439",
      next: "\u0434\u0430\u043B\u0456",
      today: "\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
      year: "\u0440\u0456\u043A",
      month: "\u041C\u0456\u0441\u044F\u0446\u044C",
      week: "\u0422\u0438\u0436\u0434\u0435\u043D\u044C",
      day: "\u0414\u0435\u043D\u044C",
      list: "\u041F\u043E\u0440\u044F\u0434\u043E\u043A \u0434\u0435\u043D\u043D\u0438\u0439"
    },
    weekText: "\u0422\u0438\u0436",
    allDayText: "\u0423\u0432\u0435\u0441\u044C \u0434\u0435\u043D\u044C",
    moreLinkText(t) {
      return "+\u0449\u0435 " + t + "...";
    },
    noEventsText: "\u041D\u0435\u043C\u0430\u0454 \u043F\u043E\u0434\u0456\u0439 \u0434\u043B\u044F \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"
  }, HE = {
    code: "zh-cn",
    week: {
      dow: 1,
      doy: 4
    },
    buttonText: {
      prev: "\u4E0A\u6708",
      next: "\u4E0B\u6708",
      today: "\u4ECA\u5929",
      year: "\u5E74",
      month: "\u6708",
      week: "\u5468",
      day: "\u65E5",
      list: "\u65E5\u7A0B"
    },
    weekText: "\u5468",
    allDayText: "\u5168\u5929",
    moreLinkText(t) {
      return "\u53E6\u5916 " + t + " \u4E2A";
    },
    noEventsText: "\u6CA1\u6709\u4E8B\u4EF6\u663E\u793A"
  }, Mp = {
    exports: {}
  };
  (function(t, e) {
    (function() {
      var n = Math.PI, r = Math.sin, s = Math.cos, i = Math.tan, a = Math.asin, l = Math.atan2, c = Math.acos, d = n / 180, f = 1e3 * 60 * 60 * 24, m = 2440588, g = 2451545;
      function y(j) {
        return j.valueOf() / f - 0.5 + m;
      }
      function v(j) {
        return new Date((j + 0.5 - m) * f);
      }
      function S(j) {
        return y(j) - g;
      }
      var b = d * 23.4397;
      function _(j, z) {
        return l(r(j) * s(b) - i(z) * r(b), s(j));
      }
      function E(j, z) {
        return a(r(z) * s(b) + s(z) * r(b) * r(j));
      }
      function R(j, z, K) {
        return l(r(j), s(j) * r(z) - i(K) * s(z));
      }
      function T(j, z, K) {
        return a(r(z) * r(K) + s(z) * s(K) * s(j));
      }
      function x(j, z) {
        return d * (280.16 + 360.9856235 * j) - z;
      }
      function N(j) {
        return j < 0 && (j = 0), 2967e-7 / Math.tan(j + 312536e-8 / (j + 0.08901179));
      }
      function I(j) {
        return d * (357.5291 + 0.98560028 * j);
      }
      function O(j) {
        var z = d * (1.9148 * r(j) + 0.02 * r(2 * j) + 3e-4 * r(3 * j)), K = d * 102.9372;
        return j + z + K + n;
      }
      function J(j) {
        var z = I(j), K = O(z);
        return {
          dec: E(K, 0),
          ra: _(K, 0)
        };
      }
      var U = {};
      U.getPosition = function(j, z, K) {
        var X = d * -K, se = d * z, H = S(j), re = J(H), ne = x(H, X) - re.ra;
        return {
          azimuth: R(ne, se, re.dec),
          altitude: T(ne, se, re.dec)
        };
      };
      var L = U.times = [
        [
          -0.833,
          "sunrise",
          "sunset"
        ],
        [
          -0.3,
          "sunriseEnd",
          "sunsetStart"
        ],
        [
          -6,
          "dawn",
          "dusk"
        ],
        [
          -12,
          "nauticalDawn",
          "nauticalDusk"
        ],
        [
          -18,
          "nightEnd",
          "night"
        ],
        [
          6,
          "goldenHourEnd",
          "goldenHour"
        ]
      ];
      U.addTime = function(j, z, K) {
        L.push([
          j,
          z,
          K
        ]);
      };
      var ee = 9e-4;
      function Z(j, z) {
        return Math.round(j - ee - z / (2 * n));
      }
      function k(j, z, K) {
        return ee + (j + z) / (2 * n) + K;
      }
      function C(j, z, K) {
        return g + j + 53e-4 * r(z) - 69e-4 * r(2 * K);
      }
      function P(j, z, K) {
        return c((r(j) - r(z) * r(K)) / (s(z) * s(K)));
      }
      function W(j, z, K, X, se, H, re) {
        var ne = P(j, K, X), q = k(ne, z, se);
        return C(q, H, re);
      }
      U.getTimes = function(j, z, K) {
        var X = d * -K, se = d * z, H = S(j), re = Z(H, X), ne = k(0, X, re), q = I(ne), Q = O(q), ce = E(Q, 0), fe = C(ne, q, Q), be, G, le, he, ve, oe = {
          solarNoon: v(fe),
          nadir: v(fe + 0.5)
        };
        for (be = 0, G = L.length; be < G; be += 1) le = L[be], he = W(le[0] * d, X, se, ce, re, q, Q), ve = fe - (he - fe), oe[le[1]] = v(ve), oe[le[2]] = v(he);
        return oe;
      };
      function Y(j) {
        var z = d * (218.316 + 13.176396 * j), K = d * (134.963 + 13.064993 * j), X = d * (93.272 + 13.22935 * j), se = z + d * 6.289 * r(K), H = d * 5.128 * r(X), re = 385001 - 20905 * s(K);
        return {
          ra: _(se, H),
          dec: E(se, H),
          dist: re
        };
      }
      U.getMoonPosition = function(j, z, K) {
        var X = d * -K, se = d * z, H = S(j), re = Y(H), ne = x(H, X) - re.ra, q = T(ne, se, re.dec), Q = l(r(ne), i(se) * s(re.dec) - r(re.dec) * s(ne));
        return q = q + N(q), {
          azimuth: R(ne, se, re.dec),
          altitude: q,
          distance: re.dist,
          parallacticAngle: Q
        };
      }, U.getMoonIllumination = function(j) {
        var z = S(j || /* @__PURE__ */ new Date()), K = J(z), X = Y(z), se = 149598e3, H = c(r(K.dec) * r(X.dec) + s(K.dec) * s(X.dec) * s(K.ra - X.ra)), re = l(se * r(H), X.dist - se * s(H)), ne = l(s(K.dec) * r(K.ra - X.ra), r(K.dec) * s(X.dec) - s(K.dec) * r(X.dec) * s(K.ra - X.ra));
        return {
          fraction: (1 + s(re)) / 2,
          phase: 0.5 + 0.5 * re * (ne < 0 ? -1 : 1) / Math.PI,
          angle: ne
        };
      };
      function te(j, z) {
        return new Date(j.valueOf() + z * f / 24);
      }
      U.getMoonTimes = function(j, z, K, X) {
        var se = new Date(j);
        X ? se.setUTCHours(0, 0, 0, 0) : se.setHours(0, 0, 0, 0);
        for (var H = 0.133 * d, re = U.getMoonPosition(se, z, K).altitude - H, ne, q, Q, ce, fe, be, G, le, he, ve, oe, Me, we, pe = 1; pe <= 24 && (ne = U.getMoonPosition(te(se, pe), z, K).altitude - H, q = U.getMoonPosition(te(se, pe + 1), z, K).altitude - H, fe = (re + q) / 2 - ne, be = (q - re) / 2, G = -be / (2 * fe), le = (fe * G + be) * G + ne, he = be * be - 4 * fe * ne, ve = 0, he >= 0 && (we = Math.sqrt(he) / (Math.abs(fe) * 2), oe = G - we, Me = G + we, Math.abs(oe) <= 1 && ve++, Math.abs(Me) <= 1 && ve++, oe < -1 && (oe = Me)), ve === 1 ? re < 0 ? Q = pe + oe : ce = pe + oe : ve === 2 && (Q = pe + (le < 0 ? Me : oe), ce = pe + (le < 0 ? oe : Me)), !(Q && ce)); pe += 2) re = q;
        var Se = {};
        return Q && (Se.rise = te(se, Q)), ce && (Se.set = te(se, ce)), !Q && !ce && (Se[le > 0 ? "alwaysUp" : "alwaysDown"] = true), Se;
      }, t.exports = U;
    })();
  })(Mp);
  var jE = Mp.exports;
  const Ma = Xr(jE);
  function Kt(t) {
    if (t === "*" || t === "?" || t === "") return t;
    const e = t.split(","), n = [];
    for (let r = 0; r < e.length; r++) {
      const s = e[r].match(/(\d+)-(\d+)/);
      if (s) for (let i = parseInt(s[1], 10); i <= parseInt(s[2], 10); i++) n.push(i);
      else n.push(parseInt(e[r], 10));
    }
    return n;
  }
  function Ht(t, e) {
    const n = {};
    {
      const r = t.replace(/\s\s/g, " ").replace(/\s\s/g, " ").split(" ");
      r.length === 6 ? (n.seconds = Kt(r[0]), n.minutes = Kt(r[1]), n.hours = Kt(r[2]), n.dates = Kt(r[3]), n.months = Kt(r[4]), n.dows = Kt(r[5])) : (n.seconds = [
        0
      ], n.minutes = Kt(r[0]), n.hours = Kt(r[1]), n.dates = Kt(r[2]), n.months = Kt(r[3]), n.dows = Kt(r[4]));
    }
    return n;
  }
  function hs(t) {
    if (t === "*" || t === "?") return t;
    if (typeof t == "string" && (t = parseInt(t, 10)), typeof t != "object" && (t = [
      t
    ]), t.sort((s, i) => s - i), t.length < 3) return t.join(",");
    const e = [];
    let n = t[0], r = t[0];
    for (let s = 1; s < t.length; s++) t[s] === r + 1 ? r++ : (n !== r ? n + 1 === r ? e.push(`${n},${r}`) : e.push(`${n}-${r}`) : e.push(n), n = t[s], r = t[s]);
    return n !== r ? n + 1 === r ? e.push(`${n},${r}`) : e.push(`${n}-${r}`) : e.push(n), e.join(",");
  }
  function tn(t) {
    const e = [];
    return t.seconds && e.push(hs(t.seconds)), e.push(hs(t.minutes)), e.push(hs(t.hours)), e.push(hs(t.dates)), e.push(hs(t.months)), e.push(hs(t.dows)), e.join(" ");
  }
  function pi(t, e, n) {
    if (t instanceof Date) return e === "date" ? new Date(t) : null;
    if (e === "cron") {
      const r = Ht(t), s = /* @__PURE__ */ new Date();
      return s.setHours(r.hours[0]), s.setMinutes(r.minutes[0]), s.setSeconds(r.seconds[0]), Array.isArray(r.dows) && s.setDate(s.getDate() + r.dows[0] - s.getDay()), s;
    }
    return e === "date" ? new Date(t) : null;
  }
  function rn(t, e, n) {
    if (e === "cron") return t = new Date(t.getTime()), {
      minutes: [
        t.getMinutes()
      ],
      hours: [
        t.getHours()
      ]
    };
    if (e === "date") {
      t = new Date(t.getTime() - (/* @__PURE__ */ new Date()).getTimezoneOffset() * 6e4);
      const r = t.toISOString();
      return r.substring(0, r.length - 5);
    }
    return null;
  }
  var Ep;
  function de() {
    return Ep.apply(null, arguments);
  }
  function VE(t) {
    Ep = t;
  }
  function cn(t) {
    return t instanceof Array || Object.prototype.toString.call(t) === "[object Array]";
  }
  function $r(t) {
    return t != null && Object.prototype.toString.call(t) === "[object Object]";
  }
  function Be(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function qc(t) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(t).length === 0;
    var e;
    for (e in t) if (Be(t, e)) return false;
    return true;
  }
  function jt(t) {
    return t === void 0;
  }
  function tr(t) {
    return typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]";
  }
  function Fi(t) {
    return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
  }
  function Cp(t, e) {
    var n = [], r, s = t.length;
    for (r = 0; r < s; ++r) n.push(e(t[r], r));
    return n;
  }
  function yr(t, e) {
    for (var n in e) Be(e, n) && (t[n] = e[n]);
    return Be(e, "toString") && (t.toString = e.toString), Be(e, "valueOf") && (t.valueOf = e.valueOf), t;
  }
  function Mn(t, e, n, r) {
    return Jp(t, e, n, r, true).utc();
  }
  function WE() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: false,
      weekdayMismatch: false
    };
  }
  function Ae(t) {
    return t._pf == null && (t._pf = WE()), t._pf;
  }
  var rc;
  Array.prototype.some ? rc = Array.prototype.some : rc = function(t) {
    var e = Object(this), n = e.length >>> 0, r;
    for (r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return true;
    return false;
  };
  function Qc(t) {
    var e = null, n = false, r = t._d && !isNaN(t._d.getTime());
    if (r && (e = Ae(t), n = rc.call(e.parsedDateParts, function(s) {
      return s != null;
    }), r = e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (r = r && e.charsLeftOver === 0 && e.unusedTokens.length === 0 && e.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(t)) t._isValid = r;
    else return r;
    return t._isValid;
  }
  function To(t) {
    var e = Mn(NaN);
    return t != null ? yr(Ae(e), t) : Ae(e).userInvalidated = true, e;
  }
  var zf = de.momentProperties = [], Al = false;
  function Xc(t, e) {
    var n, r, s, i = zf.length;
    if (jt(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), jt(e._i) || (t._i = e._i), jt(e._f) || (t._f = e._f), jt(e._l) || (t._l = e._l), jt(e._strict) || (t._strict = e._strict), jt(e._tzm) || (t._tzm = e._tzm), jt(e._isUTC) || (t._isUTC = e._isUTC), jt(e._offset) || (t._offset = e._offset), jt(e._pf) || (t._pf = Ae(e)), jt(e._locale) || (t._locale = e._locale), i > 0) for (n = 0; n < i; n++) r = zf[n], s = e[r], jt(s) || (t[r] = s);
    return t;
  }
  function Hi(t) {
    Xc(this, t), this._d = new Date(t._d != null ? t._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Al === false && (Al = true, de.updateOffset(this), Al = false);
  }
  function un(t) {
    return t instanceof Hi || t != null && t._isAMomentObject != null;
  }
  function Ap(t) {
    de.suppressDeprecationWarnings === false && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + t);
  }
  function qt(t, e) {
    var n = true;
    return yr(function() {
      if (de.deprecationHandler != null && de.deprecationHandler(null, t), n) {
        var r = [], s, i, a, l = arguments.length;
        for (i = 0; i < l; i++) {
          if (s = "", typeof arguments[i] == "object") {
            s += `
[` + i + "] ";
            for (a in arguments[0]) Be(arguments[0], a) && (s += a + ": " + arguments[0][a] + ", ");
            s = s.slice(0, -2);
          } else s = arguments[i];
          r.push(s);
        }
        Ap(t + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack), n = false;
      }
      return e.apply(this, arguments);
    }, e);
  }
  var $f = {};
  function Rp(t, e) {
    de.deprecationHandler != null && de.deprecationHandler(t, e), $f[t] || (Ap(e), $f[t] = true);
  }
  de.suppressDeprecationWarnings = false;
  de.deprecationHandler = null;
  function En(t) {
    return typeof Function < "u" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]";
  }
  function UE(t) {
    var e, n;
    for (n in t) Be(t, n) && (e = t[n], En(e) ? this[n] = e : this["_" + n] = e);
    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }
  function sc(t, e) {
    var n = yr({}, t), r;
    for (r in e) Be(e, r) && ($r(t[r]) && $r(e[r]) ? (n[r] = {}, yr(n[r], t[r]), yr(n[r], e[r])) : e[r] != null ? n[r] = e[r] : delete n[r]);
    for (r in t) Be(t, r) && !Be(e, r) && $r(t[r]) && (n[r] = yr({}, n[r]));
    return n;
  }
  function Jc(t) {
    t != null && this.set(t);
  }
  var ic;
  Object.keys ? ic = Object.keys : ic = function(t) {
    var e, n = [];
    for (e in t) Be(t, e) && n.push(e);
    return n;
  };
  var BE = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function zE(t, e, n) {
    var r = this._calendar[t] || this._calendar.sameElse;
    return En(r) ? r.call(e, n) : r;
  }
  function Tn(t, e, n) {
    var r = "" + Math.abs(t), s = e - r.length, i = t >= 0;
    return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
  }
  var Kc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ya = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rl = {}, xs = {};
  function De(t, e, n, r) {
    var s = r;
    typeof r == "string" && (s = function() {
      return this[r]();
    }), t && (xs[t] = s), e && (xs[e[0]] = function() {
      return Tn(s.apply(this, arguments), e[1], e[2]);
    }), n && (xs[n] = function() {
      return this.localeData().ordinal(s.apply(this, arguments), t);
    });
  }
  function $E(t) {
    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
  }
  function GE(t) {
    var e = t.match(Kc), n, r;
    for (n = 0, r = e.length; n < r; n++) xs[e[n]] ? e[n] = xs[e[n]] : e[n] = $E(e[n]);
    return function(s) {
      var i = "", a;
      for (a = 0; a < r; a++) i += En(e[a]) ? e[a].call(s, t) : e[a];
      return i;
    };
  }
  function Ea(t, e) {
    return t.isValid() ? (e = Op(e, t.localeData()), Rl[e] = Rl[e] || GE(e), Rl[e](t)) : t.localeData().invalidDate();
  }
  function Op(t, e) {
    var n = 5;
    function r(s) {
      return e.longDateFormat(s) || s;
    }
    for (ya.lastIndex = 0; n >= 0 && ya.test(t); ) t = t.replace(ya, r), ya.lastIndex = 0, n -= 1;
    return t;
  }
  var ZE = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function qE(t) {
    var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
    return e || !n ? e : (this._longDateFormat[t] = n.match(Kc).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[t]);
  }
  var QE = "Invalid date";
  function XE() {
    return this._invalidDate;
  }
  var JE = "%d", KE = /\d{1,2}/;
  function eC(t) {
    return this._ordinal.replace("%d", t);
  }
  var tC = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function nC(t, e, n, r) {
    var s = this._relativeTime[n];
    return En(s) ? s(t, e, n, r) : s.replace(/%d/i, t);
  }
  function rC(t, e) {
    var n = this._relativeTime[t > 0 ? "future" : "past"];
    return En(n) ? n(e) : n.replace(/%s/i, e);
  }
  var Gf = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year"
  };
  function Qt(t) {
    return typeof t == "string" ? Gf[t] || Gf[t.toLowerCase()] : void 0;
  }
  function eu(t) {
    var e = {}, n, r;
    for (r in t) Be(t, r) && (n = Qt(r), n && (e[n] = t[r]));
    return e;
  }
  var sC = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1
  };
  function iC(t) {
    var e = [], n;
    for (n in t) Be(t, n) && e.push({
      unit: n,
      priority: sC[n]
    });
    return e.sort(function(r, s) {
      return r.priority - s.priority;
    }), e;
  }
  var Ip = /\d/, Bt = /\d\d/, Pp = /\d{3}/, tu = /\d{4}/, xo = /[+-]?\d{6}/, it = /\d\d?/, Np = /\d\d\d\d?/, Lp = /\d\d\d\d\d\d?/, Mo = /\d{1,3}/, nu = /\d{1,4}/, Eo = /[+-]?\d{1,6}/, Vs = /\d+/, Co = /[+-]?\d+/, aC = /Z|[+-]\d\d:?\d\d/gi, Ao = /Z|[+-]\d\d(?::?\d\d)?/gi, oC = /[+-]?\d+(\.\d{1,3})?/, ji = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Ws = /^[1-9]\d?/, ru = /^([1-9]\d|\d)/, to;
  to = {};
  function ye(t, e, n) {
    to[t] = En(e) ? e : function(r, s) {
      return r && n ? n : e;
    };
  }
  function lC(t, e) {
    return Be(to, t) ? to[t](e._strict, e._locale) : new RegExp(cC(t));
  }
  function cC(t) {
    return Qn(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, n, r, s, i) {
      return n || r || s || i;
    }));
  }
  function Qn(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function Gt(t) {
    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
  }
  function Ye(t) {
    var e = +t, n = 0;
    return e !== 0 && isFinite(e) && (n = Gt(e)), n;
  }
  var ac = {};
  function qe(t, e) {
    var n, r = e, s;
    for (typeof t == "string" && (t = [
      t
    ]), tr(e) && (r = function(i, a) {
      a[e] = Ye(i);
    }), s = t.length, n = 0; n < s; n++) ac[t[n]] = r;
  }
  function Vi(t, e) {
    qe(t, function(n, r, s, i) {
      s._w = s._w || {}, e(n, s._w, s, i);
    });
  }
  function uC(t, e, n) {
    e != null && Be(ac, t) && ac[t](e, n._a, n, t);
  }
  function Ro(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
  }
  var It = 0, $n = 1, Dn = 2, bt = 3, an = 4, Gn = 5, Wr = 6, dC = 7, fC = 8;
  De("Y", 0, 0, function() {
    var t = this.year();
    return t <= 9999 ? Tn(t, 4) : "+" + t;
  });
  De(0, [
    "YY",
    2
  ], 0, function() {
    return this.year() % 100;
  });
  De(0, [
    "YYYY",
    4
  ], 0, "year");
  De(0, [
    "YYYYY",
    5
  ], 0, "year");
  De(0, [
    "YYYYYY",
    6,
    true
  ], 0, "year");
  ye("Y", Co);
  ye("YY", it, Bt);
  ye("YYYY", nu, tu);
  ye("YYYYY", Eo, xo);
  ye("YYYYYY", Eo, xo);
  qe([
    "YYYYY",
    "YYYYYY"
  ], It);
  qe("YYYY", function(t, e) {
    e[It] = t.length === 2 ? de.parseTwoDigitYear(t) : Ye(t);
  });
  qe("YY", function(t, e) {
    e[It] = de.parseTwoDigitYear(t);
  });
  qe("Y", function(t, e) {
    e[It] = parseInt(t, 10);
  });
  function gi(t) {
    return Ro(t) ? 366 : 365;
  }
  de.parseTwoDigitYear = function(t) {
    return Ye(t) + (Ye(t) > 68 ? 1900 : 2e3);
  };
  var Yp = Us("FullYear", true);
  function hC() {
    return Ro(this.year());
  }
  function Us(t, e) {
    return function(n) {
      return n != null ? (Fp(this, t, n), de.updateOffset(this, e), this) : Ti(this, t);
    };
  }
  function Ti(t, e) {
    if (!t.isValid()) return NaN;
    var n = t._d, r = t._isUTC;
    switch (e) {
      case "Milliseconds":
        return r ? n.getUTCMilliseconds() : n.getMilliseconds();
      case "Seconds":
        return r ? n.getUTCSeconds() : n.getSeconds();
      case "Minutes":
        return r ? n.getUTCMinutes() : n.getMinutes();
      case "Hours":
        return r ? n.getUTCHours() : n.getHours();
      case "Date":
        return r ? n.getUTCDate() : n.getDate();
      case "Day":
        return r ? n.getUTCDay() : n.getDay();
      case "Month":
        return r ? n.getUTCMonth() : n.getMonth();
      case "FullYear":
        return r ? n.getUTCFullYear() : n.getFullYear();
      default:
        return NaN;
    }
  }
  function Fp(t, e, n) {
    var r, s, i, a, l;
    if (!(!t.isValid() || isNaN(n))) {
      switch (r = t._d, s = t._isUTC, e) {
        case "Milliseconds":
          return void (s ? r.setUTCMilliseconds(n) : r.setMilliseconds(n));
        case "Seconds":
          return void (s ? r.setUTCSeconds(n) : r.setSeconds(n));
        case "Minutes":
          return void (s ? r.setUTCMinutes(n) : r.setMinutes(n));
        case "Hours":
          return void (s ? r.setUTCHours(n) : r.setHours(n));
        case "Date":
          return void (s ? r.setUTCDate(n) : r.setDate(n));
        case "FullYear":
          break;
        default:
          return;
      }
      i = n, a = t.month(), l = t.date(), l = l === 29 && a === 1 && !Ro(i) ? 28 : l, s ? r.setUTCFullYear(i, a, l) : r.setFullYear(i, a, l);
    }
  }
  function mC(t) {
    return t = Qt(t), En(this[t]) ? this[t]() : this;
  }
  function pC(t, e) {
    if (typeof t == "object") {
      t = eu(t);
      var n = iC(t), r, s = n.length;
      for (r = 0; r < s; r++) this[n[r].unit](t[n[r].unit]);
    } else if (t = Qt(t), En(this[t])) return this[t](e);
    return this;
  }
  function gC(t, e) {
    return (t % e + e) % e;
  }
  var ht;
  Array.prototype.indexOf ? ht = Array.prototype.indexOf : ht = function(t) {
    var e;
    for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
    return -1;
  };
  function su(t, e) {
    if (isNaN(t) || isNaN(e)) return NaN;
    var n = gC(e, 12);
    return t += (e - n) / 12, n === 1 ? Ro(t) ? 29 : 28 : 31 - n % 7 % 2;
  }
  De("M", [
    "MM",
    2
  ], "Mo", function() {
    return this.month() + 1;
  });
  De("MMM", 0, 0, function(t) {
    return this.localeData().monthsShort(this, t);
  });
  De("MMMM", 0, 0, function(t) {
    return this.localeData().months(this, t);
  });
  ye("M", it, Ws);
  ye("MM", it, Bt);
  ye("MMM", function(t, e) {
    return e.monthsShortRegex(t);
  });
  ye("MMMM", function(t, e) {
    return e.monthsRegex(t);
  });
  qe([
    "M",
    "MM"
  ], function(t, e) {
    e[$n] = Ye(t) - 1;
  });
  qe([
    "MMM",
    "MMMM"
  ], function(t, e, n, r) {
    var s = n._locale.monthsParse(t, r, n._strict);
    s != null ? e[$n] = s : Ae(n).invalidMonth = t;
  });
  var yC = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Hp = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jp = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, vC = ji, bC = ji;
  function wC(t, e) {
    return t ? cn(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || jp).test(e) ? "format" : "standalone"][t.month()] : cn(this._months) ? this._months : this._months.standalone;
  }
  function SC(t, e) {
    return t ? cn(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[jp.test(e) ? "format" : "standalone"][t.month()] : cn(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function _C(t, e, n) {
    var r, s, i, a = t.toLocaleLowerCase();
    if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = Mn([
      2e3,
      r
    ]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
    return n ? e === "MMM" ? (s = ht.call(this._shortMonthsParse, a), s !== -1 ? s : null) : (s = ht.call(this._longMonthsParse, a), s !== -1 ? s : null) : e === "MMM" ? (s = ht.call(this._shortMonthsParse, a), s !== -1 ? s : (s = ht.call(this._longMonthsParse, a), s !== -1 ? s : null)) : (s = ht.call(this._longMonthsParse, a), s !== -1 ? s : (s = ht.call(this._shortMonthsParse, a), s !== -1 ? s : null));
  }
  function DC(t, e, n) {
    var r, s, i;
    if (this._monthsParseExact) return _C.call(this, t, e, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (s = Mn([
        2e3,
        r
      ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && e === "MMMM" && this._longMonthsParse[r].test(t)) return r;
      if (n && e === "MMM" && this._shortMonthsParse[r].test(t)) return r;
      if (!n && this._monthsParse[r].test(t)) return r;
    }
  }
  function Vp(t, e) {
    if (!t.isValid()) return t;
    if (typeof e == "string") {
      if (/^\d+$/.test(e)) e = Ye(e);
      else if (e = t.localeData().monthsParse(e), !tr(e)) return t;
    }
    var n = e, r = t.date();
    return r = r < 29 ? r : Math.min(r, su(t.year(), n)), t._isUTC ? t._d.setUTCMonth(n, r) : t._d.setMonth(n, r), t;
  }
  function Wp(t) {
    return t != null ? (Vp(this, t), de.updateOffset(this, true), this) : Ti(this, "Month");
  }
  function kC() {
    return su(this.year(), this.month());
  }
  function TC(t) {
    return this._monthsParseExact ? (Be(this, "_monthsRegex") || Up.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Be(this, "_monthsShortRegex") || (this._monthsShortRegex = vC), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function xC(t) {
    return this._monthsParseExact ? (Be(this, "_monthsRegex") || Up.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (Be(this, "_monthsRegex") || (this._monthsRegex = bC), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
  }
  function Up() {
    function t(c, d) {
      return d.length - c.length;
    }
    var e = [], n = [], r = [], s, i, a, l;
    for (s = 0; s < 12; s++) i = Mn([
      2e3,
      s
    ]), a = Qn(this.monthsShort(i, "")), l = Qn(this.months(i, "")), e.push(a), n.push(l), r.push(l), r.push(a);
    e.sort(t), n.sort(t), r.sort(t), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
  }
  function MC(t, e, n, r, s, i, a) {
    var l;
    return t < 100 && t >= 0 ? (l = new Date(t + 400, e, n, r, s, i, a), isFinite(l.getFullYear()) && l.setFullYear(t)) : l = new Date(t, e, n, r, s, i, a), l;
  }
  function xi(t) {
    var e, n;
    return t < 100 && t >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e;
  }
  function no(t, e, n) {
    var r = 7 + e - n, s = (7 + xi(t, 0, r).getUTCDay() - e) % 7;
    return -s + r - 1;
  }
  function Bp(t, e, n, r, s) {
    var i = (7 + n - r) % 7, a = no(t, r, s), l = 1 + 7 * (e - 1) + i + a, c, d;
    return l <= 0 ? (c = t - 1, d = gi(c) + l) : l > gi(t) ? (c = t + 1, d = l - gi(t)) : (c = t, d = l), {
      year: c,
      dayOfYear: d
    };
  }
  function Mi(t, e, n) {
    var r = no(t.year(), e, n), s = Math.floor((t.dayOfYear() - r - 1) / 7) + 1, i, a;
    return s < 1 ? (a = t.year() - 1, i = s + Xn(a, e, n)) : s > Xn(t.year(), e, n) ? (i = s - Xn(t.year(), e, n), a = t.year() + 1) : (a = t.year(), i = s), {
      week: i,
      year: a
    };
  }
  function Xn(t, e, n) {
    var r = no(t, e, n), s = no(t + 1, e, n);
    return (gi(t) - r + s) / 7;
  }
  De("w", [
    "ww",
    2
  ], "wo", "week");
  De("W", [
    "WW",
    2
  ], "Wo", "isoWeek");
  ye("w", it, Ws);
  ye("ww", it, Bt);
  ye("W", it, Ws);
  ye("WW", it, Bt);
  Vi([
    "w",
    "ww",
    "W",
    "WW"
  ], function(t, e, n, r) {
    e[r.substr(0, 1)] = Ye(t);
  });
  function EC(t) {
    return Mi(t, this._week.dow, this._week.doy).week;
  }
  var CC = {
    dow: 0,
    doy: 6
  };
  function AC() {
    return this._week.dow;
  }
  function RC() {
    return this._week.doy;
  }
  function OC(t) {
    var e = this.localeData().week(this);
    return t == null ? e : this.add((t - e) * 7, "d");
  }
  function IC(t) {
    var e = Mi(this, 1, 4).week;
    return t == null ? e : this.add((t - e) * 7, "d");
  }
  De("d", 0, "do", "day");
  De("dd", 0, 0, function(t) {
    return this.localeData().weekdaysMin(this, t);
  });
  De("ddd", 0, 0, function(t) {
    return this.localeData().weekdaysShort(this, t);
  });
  De("dddd", 0, 0, function(t) {
    return this.localeData().weekdays(this, t);
  });
  De("e", 0, 0, "weekday");
  De("E", 0, 0, "isoWeekday");
  ye("d", it);
  ye("e", it);
  ye("E", it);
  ye("dd", function(t, e) {
    return e.weekdaysMinRegex(t);
  });
  ye("ddd", function(t, e) {
    return e.weekdaysShortRegex(t);
  });
  ye("dddd", function(t, e) {
    return e.weekdaysRegex(t);
  });
  Vi([
    "dd",
    "ddd",
    "dddd"
  ], function(t, e, n, r) {
    var s = n._locale.weekdaysParse(t, r, n._strict);
    s != null ? e.d = s : Ae(n).invalidWeekday = t;
  });
  Vi([
    "d",
    "e",
    "E"
  ], function(t, e, n, r) {
    e[r] = Ye(t);
  });
  function PC(t, e) {
    return typeof t != "string" ? t : isNaN(t) ? (t = e.weekdaysParse(t), typeof t == "number" ? t : null) : parseInt(t, 10);
  }
  function NC(t, e) {
    return typeof t == "string" ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
  }
  function iu(t, e) {
    return t.slice(e, 7).concat(t.slice(0, e));
  }
  var LC = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), zp = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), YC = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), FC = ji, HC = ji, jC = ji;
  function VC(t, e) {
    var n = cn(this._weekdays) ? this._weekdays : this._weekdays[t && t !== true && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
    return t === true ? iu(n, this._week.dow) : t ? n[t.day()] : n;
  }
  function WC(t) {
    return t === true ? iu(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
  }
  function UC(t) {
    return t === true ? iu(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
  }
  function BC(t, e, n) {
    var r, s, i, a = t.toLocaleLowerCase();
    if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = Mn([
      2e3,
      1
    ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
    return n ? e === "dddd" ? (s = ht.call(this._weekdaysParse, a), s !== -1 ? s : null) : e === "ddd" ? (s = ht.call(this._shortWeekdaysParse, a), s !== -1 ? s : null) : (s = ht.call(this._minWeekdaysParse, a), s !== -1 ? s : null) : e === "dddd" ? (s = ht.call(this._weekdaysParse, a), s !== -1 || (s = ht.call(this._shortWeekdaysParse, a), s !== -1) ? s : (s = ht.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : e === "ddd" ? (s = ht.call(this._shortWeekdaysParse, a), s !== -1 || (s = ht.call(this._weekdaysParse, a), s !== -1) ? s : (s = ht.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : (s = ht.call(this._minWeekdaysParse, a), s !== -1 || (s = ht.call(this._weekdaysParse, a), s !== -1) ? s : (s = ht.call(this._shortWeekdaysParse, a), s !== -1 ? s : null));
  }
  function zC(t, e, n) {
    var r, s, i;
    if (this._weekdaysParseExact) return BC.call(this, t, e, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (s = Mn([
        2e3,
        1
      ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && e === "dddd" && this._fullWeekdaysParse[r].test(t)) return r;
      if (n && e === "ddd" && this._shortWeekdaysParse[r].test(t)) return r;
      if (n && e === "dd" && this._minWeekdaysParse[r].test(t)) return r;
      if (!n && this._weekdaysParse[r].test(t)) return r;
    }
  }
  function $C(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    var e = Ti(this, "Day");
    return t != null ? (t = PC(t, this.localeData()), this.add(t - e, "d")) : e;
  }
  function GC(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return t == null ? e : this.add(t - e, "d");
  }
  function ZC(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    if (t != null) {
      var e = NC(t, this.localeData());
      return this.day(this.day() % 7 ? e : e - 7);
    } else return this.day() || 7;
  }
  function qC(t) {
    return this._weekdaysParseExact ? (Be(this, "_weekdaysRegex") || au.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Be(this, "_weekdaysRegex") || (this._weekdaysRegex = FC), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function QC(t) {
    return this._weekdaysParseExact ? (Be(this, "_weekdaysRegex") || au.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Be(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = HC), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function XC(t) {
    return this._weekdaysParseExact ? (Be(this, "_weekdaysRegex") || au.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Be(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = jC), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function au() {
    function t(f, m) {
      return m.length - f.length;
    }
    var e = [], n = [], r = [], s = [], i, a, l, c, d;
    for (i = 0; i < 7; i++) a = Mn([
      2e3,
      1
    ]).day(i), l = Qn(this.weekdaysMin(a, "")), c = Qn(this.weekdaysShort(a, "")), d = Qn(this.weekdays(a, "")), e.push(l), n.push(c), r.push(d), s.push(l), s.push(c), s.push(d);
    e.sort(t), n.sort(t), r.sort(t), s.sort(t), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
  }
  function ou() {
    return this.hours() % 12 || 12;
  }
  function JC() {
    return this.hours() || 24;
  }
  De("H", [
    "HH",
    2
  ], 0, "hour");
  De("h", [
    "hh",
    2
  ], 0, ou);
  De("k", [
    "kk",
    2
  ], 0, JC);
  De("hmm", 0, 0, function() {
    return "" + ou.apply(this) + Tn(this.minutes(), 2);
  });
  De("hmmss", 0, 0, function() {
    return "" + ou.apply(this) + Tn(this.minutes(), 2) + Tn(this.seconds(), 2);
  });
  De("Hmm", 0, 0, function() {
    return "" + this.hours() + Tn(this.minutes(), 2);
  });
  De("Hmmss", 0, 0, function() {
    return "" + this.hours() + Tn(this.minutes(), 2) + Tn(this.seconds(), 2);
  });
  function $p(t, e) {
    De(t, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), e);
    });
  }
  $p("a", true);
  $p("A", false);
  function Gp(t, e) {
    return e._meridiemParse;
  }
  ye("a", Gp);
  ye("A", Gp);
  ye("H", it, ru);
  ye("h", it, Ws);
  ye("k", it, Ws);
  ye("HH", it, Bt);
  ye("hh", it, Bt);
  ye("kk", it, Bt);
  ye("hmm", Np);
  ye("hmmss", Lp);
  ye("Hmm", Np);
  ye("Hmmss", Lp);
  qe([
    "H",
    "HH"
  ], bt);
  qe([
    "k",
    "kk"
  ], function(t, e, n) {
    var r = Ye(t);
    e[bt] = r === 24 ? 0 : r;
  });
  qe([
    "a",
    "A"
  ], function(t, e, n) {
    n._isPm = n._locale.isPM(t), n._meridiem = t;
  });
  qe([
    "h",
    "hh"
  ], function(t, e, n) {
    e[bt] = Ye(t), Ae(n).bigHour = true;
  });
  qe("hmm", function(t, e, n) {
    var r = t.length - 2;
    e[bt] = Ye(t.substr(0, r)), e[an] = Ye(t.substr(r)), Ae(n).bigHour = true;
  });
  qe("hmmss", function(t, e, n) {
    var r = t.length - 4, s = t.length - 2;
    e[bt] = Ye(t.substr(0, r)), e[an] = Ye(t.substr(r, 2)), e[Gn] = Ye(t.substr(s)), Ae(n).bigHour = true;
  });
  qe("Hmm", function(t, e, n) {
    var r = t.length - 2;
    e[bt] = Ye(t.substr(0, r)), e[an] = Ye(t.substr(r));
  });
  qe("Hmmss", function(t, e, n) {
    var r = t.length - 4, s = t.length - 2;
    e[bt] = Ye(t.substr(0, r)), e[an] = Ye(t.substr(r, 2)), e[Gn] = Ye(t.substr(s));
  });
  function KC(t) {
    return (t + "").toLowerCase().charAt(0) === "p";
  }
  var eA = /[ap]\.?m?\.?/i, tA = Us("Hours", true);
  function nA(t, e, n) {
    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }
  var Zp = {
    calendar: BE,
    longDateFormat: ZE,
    invalidDate: QE,
    ordinal: JE,
    dayOfMonthOrdinalParse: KE,
    relativeTime: tC,
    months: yC,
    monthsShort: Hp,
    week: CC,
    weekdays: LC,
    weekdaysMin: YC,
    weekdaysShort: zp,
    meridiemParse: eA
  }, ot = {}, ti = {}, Ei;
  function rA(t, e) {
    var n, r = Math.min(t.length, e.length);
    for (n = 0; n < r; n += 1) if (t[n] !== e[n]) return n;
    return r;
  }
  function Zf(t) {
    return t && t.toLowerCase().replace("_", "-");
  }
  function sA(t) {
    for (var e = 0, n, r, s, i; e < t.length; ) {
      for (i = Zf(t[e]).split("-"), n = i.length, r = Zf(t[e + 1]), r = r ? r.split("-") : null; n > 0; ) {
        if (s = Oo(i.slice(0, n).join("-")), s) return s;
        if (r && r.length >= n && rA(i, r) >= n - 1) break;
        n--;
      }
      e++;
    }
    return Ei;
  }
  function iA(t) {
    return !!(t && t.match("^[^/\\\\]*$"));
  }
  function Oo(t) {
    var e = null, n;
    if (ot[t] === void 0 && typeof module < "u" && module && module.exports && iA(t)) try {
      e = Ei._abbr, n = require, n("./locale/" + t), Sr(e);
    } catch {
      ot[t] = null;
    }
    return ot[t];
  }
  function Sr(t, e) {
    var n;
    return t && (jt(e) ? n = sr(t) : n = lu(t, e), n ? Ei = n : typeof console < "u" && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), Ei._abbr;
  }
  function lu(t, e) {
    if (e !== null) {
      var n, r = Zp;
      if (e.abbr = t, ot[t] != null) Rp("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = ot[t]._config;
      else if (e.parentLocale != null) if (ot[e.parentLocale] != null) r = ot[e.parentLocale]._config;
      else if (n = Oo(e.parentLocale), n != null) r = n._config;
      else return ti[e.parentLocale] || (ti[e.parentLocale] = []), ti[e.parentLocale].push({
        name: t,
        config: e
      }), null;
      return ot[t] = new Jc(sc(r, e)), ti[t] && ti[t].forEach(function(s) {
        lu(s.name, s.config);
      }), Sr(t), ot[t];
    } else return delete ot[t], null;
  }
  function aA(t, e) {
    if (e != null) {
      var n, r, s = Zp;
      ot[t] != null && ot[t].parentLocale != null ? ot[t].set(sc(ot[t]._config, e)) : (r = Oo(t), r != null && (s = r._config), e = sc(s, e), r == null && (e.abbr = t), n = new Jc(e), n.parentLocale = ot[t], ot[t] = n), Sr(t);
    } else ot[t] != null && (ot[t].parentLocale != null ? (ot[t] = ot[t].parentLocale, t === Sr() && Sr(t)) : ot[t] != null && delete ot[t]);
    return ot[t];
  }
  function sr(t) {
    var e;
    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Ei;
    if (!cn(t)) {
      if (e = Oo(t), e) return e;
      t = [
        t
      ];
    }
    return sA(t);
  }
  function oA() {
    return ic(ot);
  }
  function cu(t) {
    var e, n = t._a;
    return n && Ae(t).overflow === -2 && (e = n[$n] < 0 || n[$n] > 11 ? $n : n[Dn] < 1 || n[Dn] > su(n[It], n[$n]) ? Dn : n[bt] < 0 || n[bt] > 24 || n[bt] === 24 && (n[an] !== 0 || n[Gn] !== 0 || n[Wr] !== 0) ? bt : n[an] < 0 || n[an] > 59 ? an : n[Gn] < 0 || n[Gn] > 59 ? Gn : n[Wr] < 0 || n[Wr] > 999 ? Wr : -1, Ae(t)._overflowDayOfYear && (e < It || e > Dn) && (e = Dn), Ae(t)._overflowWeeks && e === -1 && (e = dC), Ae(t)._overflowWeekday && e === -1 && (e = fC), Ae(t).overflow = e), t;
  }
  var lA = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, cA = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, uA = /Z|[+-]\d\d(?::?\d\d)?/, va = [
    [
      "YYYYYY-MM-DD",
      /[+-]\d{6}-\d\d-\d\d/
    ],
    [
      "YYYY-MM-DD",
      /\d{4}-\d\d-\d\d/
    ],
    [
      "GGGG-[W]WW-E",
      /\d{4}-W\d\d-\d/
    ],
    [
      "GGGG-[W]WW",
      /\d{4}-W\d\d/,
      false
    ],
    [
      "YYYY-DDD",
      /\d{4}-\d{3}/
    ],
    [
      "YYYY-MM",
      /\d{4}-\d\d/,
      false
    ],
    [
      "YYYYYYMMDD",
      /[+-]\d{10}/
    ],
    [
      "YYYYMMDD",
      /\d{8}/
    ],
    [
      "GGGG[W]WWE",
      /\d{4}W\d{3}/
    ],
    [
      "GGGG[W]WW",
      /\d{4}W\d{2}/,
      false
    ],
    [
      "YYYYDDD",
      /\d{7}/
    ],
    [
      "YYYYMM",
      /\d{6}/,
      false
    ],
    [
      "YYYY",
      /\d{4}/,
      false
    ]
  ], Ol = [
    [
      "HH:mm:ss.SSSS",
      /\d\d:\d\d:\d\d\.\d+/
    ],
    [
      "HH:mm:ss,SSSS",
      /\d\d:\d\d:\d\d,\d+/
    ],
    [
      "HH:mm:ss",
      /\d\d:\d\d:\d\d/
    ],
    [
      "HH:mm",
      /\d\d:\d\d/
    ],
    [
      "HHmmss.SSSS",
      /\d\d\d\d\d\d\.\d+/
    ],
    [
      "HHmmss,SSSS",
      /\d\d\d\d\d\d,\d+/
    ],
    [
      "HHmmss",
      /\d\d\d\d\d\d/
    ],
    [
      "HHmm",
      /\d\d\d\d/
    ],
    [
      "HH",
      /\d\d/
    ]
  ], dA = /^\/?Date\((-?\d+)/i, fA = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, hA = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };
  function qp(t) {
    var e, n, r = t._i, s = lA.exec(r) || cA.exec(r), i, a, l, c, d = va.length, f = Ol.length;
    if (s) {
      for (Ae(t).iso = true, e = 0, n = d; e < n; e++) if (va[e][1].exec(s[1])) {
        a = va[e][0], i = va[e][2] !== false;
        break;
      }
      if (a == null) {
        t._isValid = false;
        return;
      }
      if (s[3]) {
        for (e = 0, n = f; e < n; e++) if (Ol[e][1].exec(s[3])) {
          l = (s[2] || " ") + Ol[e][0];
          break;
        }
        if (l == null) {
          t._isValid = false;
          return;
        }
      }
      if (!i && l != null) {
        t._isValid = false;
        return;
      }
      if (s[4]) if (uA.exec(s[4])) c = "Z";
      else {
        t._isValid = false;
        return;
      }
      t._f = a + (l || "") + (c || ""), du(t);
    } else t._isValid = false;
  }
  function mA(t, e, n, r, s, i) {
    var a = [
      pA(t),
      Hp.indexOf(e),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10)
    ];
    return i && a.push(parseInt(i, 10)), a;
  }
  function pA(t) {
    var e = parseInt(t, 10);
    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
  }
  function gA(t) {
    return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function yA(t, e, n) {
    if (t) {
      var r = zp.indexOf(t), s = new Date(e[0], e[1], e[2]).getDay();
      if (r !== s) return Ae(n).weekdayMismatch = true, n._isValid = false, false;
    }
    return true;
  }
  function vA(t, e, n) {
    if (t) return hA[t];
    if (e) return 0;
    var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
    return i * 60 + s;
  }
  function Qp(t) {
    var e = fA.exec(gA(t._i)), n;
    if (e) {
      if (n = mA(e[4], e[3], e[2], e[5], e[6], e[7]), !yA(e[1], n, t)) return;
      t._a = n, t._tzm = vA(e[8], e[9], e[10]), t._d = xi.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), Ae(t).rfc2822 = true;
    } else t._isValid = false;
  }
  function bA(t) {
    var e = dA.exec(t._i);
    if (e !== null) {
      t._d = /* @__PURE__ */ new Date(+e[1]);
      return;
    }
    if (qp(t), t._isValid === false) delete t._isValid;
    else return;
    if (Qp(t), t._isValid === false) delete t._isValid;
    else return;
    t._strict ? t._isValid = false : de.createFromInputFallback(t);
  }
  de.createFromInputFallback = qt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
    t._d = /* @__PURE__ */ new Date(t._i + (t._useUTC ? " UTC" : ""));
  });
  function ys(t, e, n) {
    return t ?? e ?? n;
  }
  function wA(t) {
    var e = new Date(de.now());
    return t._useUTC ? [
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate()
    ] : [
      e.getFullYear(),
      e.getMonth(),
      e.getDate()
    ];
  }
  function uu(t) {
    var e, n, r = [], s, i, a;
    if (!t._d) {
      for (s = wA(t), t._w && t._a[Dn] == null && t._a[$n] == null && SA(t), t._dayOfYear != null && (a = ys(t._a[It], s[It]), (t._dayOfYear > gi(a) || t._dayOfYear === 0) && (Ae(t)._overflowDayOfYear = true), n = xi(a, 0, t._dayOfYear), t._a[$n] = n.getUTCMonth(), t._a[Dn] = n.getUTCDate()), e = 0; e < 3 && t._a[e] == null; ++e) t._a[e] = r[e] = s[e];
      for (; e < 7; e++) t._a[e] = r[e] = t._a[e] == null ? e === 2 ? 1 : 0 : t._a[e];
      t._a[bt] === 24 && t._a[an] === 0 && t._a[Gn] === 0 && t._a[Wr] === 0 && (t._nextDay = true, t._a[bt] = 0), t._d = (t._useUTC ? xi : MC).apply(null, r), i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), t._tzm != null && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[bt] = 24), t._w && typeof t._w.d < "u" && t._w.d !== i && (Ae(t).weekdayMismatch = true);
    }
  }
  function SA(t) {
    var e, n, r, s, i, a, l, c, d;
    e = t._w, e.GG != null || e.W != null || e.E != null ? (i = 1, a = 4, n = ys(e.GG, t._a[It], Mi(st(), 1, 4).year), r = ys(e.W, 1), s = ys(e.E, 1), (s < 1 || s > 7) && (c = true)) : (i = t._locale._week.dow, a = t._locale._week.doy, d = Mi(st(), i, a), n = ys(e.gg, t._a[It], d.year), r = ys(e.w, d.week), e.d != null ? (s = e.d, (s < 0 || s > 6) && (c = true)) : e.e != null ? (s = e.e + i, (e.e < 0 || e.e > 6) && (c = true)) : s = i), r < 1 || r > Xn(n, i, a) ? Ae(t)._overflowWeeks = true : c != null ? Ae(t)._overflowWeekday = true : (l = Bp(n, r, s, i, a), t._a[It] = l.year, t._dayOfYear = l.dayOfYear);
  }
  de.ISO_8601 = function() {
  };
  de.RFC_2822 = function() {
  };
  function du(t) {
    if (t._f === de.ISO_8601) {
      qp(t);
      return;
    }
    if (t._f === de.RFC_2822) {
      Qp(t);
      return;
    }
    t._a = [], Ae(t).empty = true;
    var e = "" + t._i, n, r, s, i, a, l = e.length, c = 0, d, f;
    for (s = Op(t._f, t._locale).match(Kc) || [], f = s.length, n = 0; n < f; n++) i = s[n], r = (e.match(lC(i, t)) || [])[0], r && (a = e.substr(0, e.indexOf(r)), a.length > 0 && Ae(t).unusedInput.push(a), e = e.slice(e.indexOf(r) + r.length), c += r.length), xs[i] ? (r ? Ae(t).empty = false : Ae(t).unusedTokens.push(i), uC(i, r, t)) : t._strict && !r && Ae(t).unusedTokens.push(i);
    Ae(t).charsLeftOver = l - c, e.length > 0 && Ae(t).unusedInput.push(e), t._a[bt] <= 12 && Ae(t).bigHour === true && t._a[bt] > 0 && (Ae(t).bigHour = void 0), Ae(t).parsedDateParts = t._a.slice(0), Ae(t).meridiem = t._meridiem, t._a[bt] = _A(t._locale, t._a[bt], t._meridiem), d = Ae(t).era, d !== null && (t._a[It] = t._locale.erasConvertYear(d, t._a[It])), uu(t), cu(t);
  }
  function _A(t, e, n) {
    var r;
    return n == null ? e : t.meridiemHour != null ? t.meridiemHour(e, n) : (t.isPM != null && (r = t.isPM(n), r && e < 12 && (e += 12), !r && e === 12 && (e = 0)), e);
  }
  function DA(t) {
    var e, n, r, s, i, a, l = false, c = t._f.length;
    if (c === 0) {
      Ae(t).invalidFormat = true, t._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (s = 0; s < c; s++) i = 0, a = false, e = Xc({}, t), t._useUTC != null && (e._useUTC = t._useUTC), e._f = t._f[s], du(e), Qc(e) && (a = true), i += Ae(e).charsLeftOver, i += Ae(e).unusedTokens.length * 10, Ae(e).score = i, l ? i < r && (r = i, n = e) : (r == null || i < r || a) && (r = i, n = e, a && (l = true));
    yr(t, n || e);
  }
  function kA(t) {
    if (!t._d) {
      var e = eu(t._i), n = e.day === void 0 ? e.date : e.day;
      t._a = Cp([
        e.year,
        e.month,
        n,
        e.hour,
        e.minute,
        e.second,
        e.millisecond
      ], function(r) {
        return r && parseInt(r, 10);
      }), uu(t);
    }
  }
  function TA(t) {
    var e = new Hi(cu(Xp(t)));
    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e;
  }
  function Xp(t) {
    var e = t._i, n = t._f;
    return t._locale = t._locale || sr(t._l), e === null || n === void 0 && e === "" ? To({
      nullInput: true
    }) : (typeof e == "string" && (t._i = e = t._locale.preparse(e)), un(e) ? new Hi(cu(e)) : (Fi(e) ? t._d = e : cn(n) ? DA(t) : n ? du(t) : xA(t), Qc(t) || (t._d = null), t));
  }
  function xA(t) {
    var e = t._i;
    jt(e) ? t._d = new Date(de.now()) : Fi(e) ? t._d = new Date(e.valueOf()) : typeof e == "string" ? bA(t) : cn(e) ? (t._a = Cp(e.slice(0), function(n) {
      return parseInt(n, 10);
    }), uu(t)) : $r(e) ? kA(t) : tr(e) ? t._d = new Date(e) : de.createFromInputFallback(t);
  }
  function Jp(t, e, n, r, s) {
    var i = {};
    return (e === true || e === false) && (r = e, e = void 0), (n === true || n === false) && (r = n, n = void 0), ($r(t) && qc(t) || cn(t) && t.length === 0) && (t = void 0), i._isAMomentObject = true, i._useUTC = i._isUTC = s, i._l = n, i._i = t, i._f = e, i._strict = r, TA(i);
  }
  function st(t, e, n, r) {
    return Jp(t, e, n, r, false);
  }
  var MA = qt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var t = st.apply(null, arguments);
    return this.isValid() && t.isValid() ? t < this ? this : t : To();
  }), EA = qt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var t = st.apply(null, arguments);
    return this.isValid() && t.isValid() ? t > this ? this : t : To();
  });
  function Kp(t, e) {
    var n, r;
    if (e.length === 1 && cn(e[0]) && (e = e[0]), !e.length) return st();
    for (n = e[0], r = 1; r < e.length; ++r) (!e[r].isValid() || e[r][t](n)) && (n = e[r]);
    return n;
  }
  function CA() {
    var t = [].slice.call(arguments, 0);
    return Kp("isBefore", t);
  }
  function AA() {
    var t = [].slice.call(arguments, 0);
    return Kp("isAfter", t);
  }
  var RA = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }, ni = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function OA(t) {
    var e, n = false, r, s = ni.length;
    for (e in t) if (Be(t, e) && !(ht.call(ni, e) !== -1 && (t[e] == null || !isNaN(t[e])))) return false;
    for (r = 0; r < s; ++r) if (t[ni[r]]) {
      if (n) return false;
      parseFloat(t[ni[r]]) !== Ye(t[ni[r]]) && (n = true);
    }
    return true;
  }
  function IA() {
    return this._isValid;
  }
  function PA() {
    return hn(NaN);
  }
  function Io(t) {
    var e = eu(t), n = e.year || 0, r = e.quarter || 0, s = e.month || 0, i = e.week || e.isoWeek || 0, a = e.day || 0, l = e.hour || 0, c = e.minute || 0, d = e.second || 0, f = e.millisecond || 0;
    this._isValid = OA(e), this._milliseconds = +f + d * 1e3 + c * 6e4 + l * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = sr(), this._bubble();
  }
  function Ca(t) {
    return t instanceof Io;
  }
  function oc(t) {
    return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t);
  }
  function NA(t, e, n) {
    var r = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), i = 0, a;
    for (a = 0; a < r; a++) Ye(t[a]) !== Ye(e[a]) && i++;
    return i + s;
  }
  function eg(t, e) {
    De(t, 0, 0, function() {
      var n = this.utcOffset(), r = "+";
      return n < 0 && (n = -n, r = "-"), r + Tn(~~(n / 60), 2) + e + Tn(~~n % 60, 2);
    });
  }
  eg("Z", ":");
  eg("ZZ", "");
  ye("Z", Ao);
  ye("ZZ", Ao);
  qe([
    "Z",
    "ZZ"
  ], function(t, e, n) {
    n._useUTC = true, n._tzm = fu(Ao, t);
  });
  var LA = /([\+\-]|\d\d)/gi;
  function fu(t, e) {
    var n = (e || "").match(t), r, s, i;
    return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(LA) || [
      "-",
      0,
      0
    ], i = +(s[1] * 60) + Ye(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
  }
  function hu(t, e) {
    var n, r;
    return e._isUTC ? (n = e.clone(), r = (un(t) || Fi(t) ? t.valueOf() : st(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), de.updateOffset(n, false), n) : st(t).local();
  }
  function lc(t) {
    return -Math.round(t._d.getTimezoneOffset());
  }
  de.updateOffset = function() {
  };
  function YA(t, e, n) {
    var r = this._offset || 0, s;
    if (!this.isValid()) return t != null ? this : NaN;
    if (t != null) {
      if (typeof t == "string") {
        if (t = fu(Ao, t), t === null) return this;
      } else Math.abs(t) < 16 && !n && (t = t * 60);
      return !this._isUTC && e && (s = lc(this)), this._offset = t, this._isUTC = true, s != null && this.add(s, "m"), r !== t && (!e || this._changeInProgress ? rg(this, hn(t - r, "m"), 1, false) : this._changeInProgress || (this._changeInProgress = true, de.updateOffset(this, true), this._changeInProgress = null)), this;
    } else return this._isUTC ? r : lc(this);
  }
  function FA(t, e) {
    return t != null ? (typeof t != "string" && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
  }
  function HA(t) {
    return this.utcOffset(0, t);
  }
  function jA(t) {
    return this._isUTC && (this.utcOffset(0, t), this._isUTC = false, t && this.subtract(lc(this), "m")), this;
  }
  function VA() {
    if (this._tzm != null) this.utcOffset(this._tzm, false, true);
    else if (typeof this._i == "string") {
      var t = fu(aC, this._i);
      t != null ? this.utcOffset(t) : this.utcOffset(0, true);
    }
    return this;
  }
  function WA(t) {
    return this.isValid() ? (t = t ? st(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : false;
  }
  function UA() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function BA() {
    if (!jt(this._isDSTShifted)) return this._isDSTShifted;
    var t = {}, e;
    return Xc(t, this), t = Xp(t), t._a ? (e = t._isUTC ? Mn(t._a) : st(t._a), this._isDSTShifted = this.isValid() && NA(t._a, e.toArray()) > 0) : this._isDSTShifted = false, this._isDSTShifted;
  }
  function zA() {
    return this.isValid() ? !this._isUTC : false;
  }
  function $A() {
    return this.isValid() ? this._isUTC : false;
  }
  function tg() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var GA = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, ZA = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function hn(t, e) {
    var n = t, r = null, s, i, a;
    return Ca(t) ? n = {
      ms: t._milliseconds,
      d: t._days,
      M: t._months
    } : tr(t) || !isNaN(+t) ? (n = {}, e ? n[e] = +t : n.milliseconds = +t) : (r = GA.exec(t)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: 0,
      d: Ye(r[Dn]) * s,
      h: Ye(r[bt]) * s,
      m: Ye(r[an]) * s,
      s: Ye(r[Gn]) * s,
      ms: Ye(oc(r[Wr] * 1e3)) * s
    }) : (r = ZA.exec(t)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: Lr(r[2], s),
      M: Lr(r[3], s),
      w: Lr(r[4], s),
      d: Lr(r[5], s),
      h: Lr(r[6], s),
      m: Lr(r[7], s),
      s: Lr(r[8], s)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (a = qA(st(n.from), st(n.to)), n = {}, n.ms = a.milliseconds, n.M = a.months), i = new Io(n), Ca(t) && Be(t, "_locale") && (i._locale = t._locale), Ca(t) && Be(t, "_isValid") && (i._isValid = t._isValid), i;
  }
  hn.fn = Io.prototype;
  hn.invalid = PA;
  function Lr(t, e) {
    var n = t && parseFloat(t.replace(",", "."));
    return (isNaN(n) ? 0 : n) * e;
  }
  function qf(t, e) {
    var n = {};
    return n.months = e.month() - t.month() + (e.year() - t.year()) * 12, t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
  }
  function qA(t, e) {
    var n;
    return t.isValid() && e.isValid() ? (e = hu(e, t), t.isBefore(e) ? n = qf(t, e) : (n = qf(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
      milliseconds: 0,
      months: 0
    };
  }
  function ng(t, e) {
    return function(n, r) {
      var s, i;
      return r !== null && !isNaN(+r) && (Rp(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), s = hn(n, r), rg(this, s, t), this;
    };
  }
  function rg(t, e, n, r) {
    var s = e._milliseconds, i = oc(e._days), a = oc(e._months);
    t.isValid() && (r = r ?? true, a && Vp(t, Ti(t, "Month") + a * n), i && Fp(t, "Date", Ti(t, "Date") + i * n), s && t._d.setTime(t._d.valueOf() + s * n), r && de.updateOffset(t, i || a));
  }
  var QA = ng(1, "add"), XA = ng(-1, "subtract");
  function sg(t) {
    return typeof t == "string" || t instanceof String;
  }
  function JA(t) {
    return un(t) || Fi(t) || sg(t) || tr(t) || e1(t) || KA(t) || t === null || t === void 0;
  }
  function KA(t) {
    var e = $r(t) && !qc(t), n = false, r = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], s, i, a = r.length;
    for (s = 0; s < a; s += 1) i = r[s], n = n || Be(t, i);
    return e && n;
  }
  function e1(t) {
    var e = cn(t), n = false;
    return e && (n = t.filter(function(r) {
      return !tr(r) && sg(t);
    }).length === 0), e && n;
  }
  function t1(t) {
    var e = $r(t) && !qc(t), n = false, r = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], s, i;
    for (s = 0; s < r.length; s += 1) i = r[s], n = n || Be(t, i);
    return e && n;
  }
  function n1(t, e) {
    var n = t.diff(e, "days", true);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }
  function r1(t, e) {
    arguments.length === 1 && (arguments[0] ? JA(arguments[0]) ? (t = arguments[0], e = void 0) : t1(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
    var n = t || st(), r = hu(n, this).startOf("day"), s = de.calendarFormat(this, r) || "sameElse", i = e && (En(e[s]) ? e[s].call(this, n) : e[s]);
    return this.format(i || this.localeData().calendar(s, this, st(n)));
  }
  function s1() {
    return new Hi(this);
  }
  function i1(t, e) {
    var n = un(t) ? t : st(t);
    return this.isValid() && n.isValid() ? (e = Qt(e) || "millisecond", e === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : false;
  }
  function a1(t, e) {
    var n = un(t) ? t : st(t);
    return this.isValid() && n.isValid() ? (e = Qt(e) || "millisecond", e === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : false;
  }
  function o1(t, e, n, r) {
    var s = un(t) ? t : st(t), i = un(e) ? e : st(e);
    return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : false;
  }
  function l1(t, e) {
    var n = un(t) ? t : st(t), r;
    return this.isValid() && n.isValid() ? (e = Qt(e) || "millisecond", e === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(e).valueOf() <= r && r <= this.clone().endOf(e).valueOf())) : false;
  }
  function c1(t, e) {
    return this.isSame(t, e) || this.isAfter(t, e);
  }
  function u1(t, e) {
    return this.isSame(t, e) || this.isBefore(t, e);
  }
  function d1(t, e, n) {
    var r, s, i;
    if (!this.isValid()) return NaN;
    if (r = hu(t, this), !r.isValid()) return NaN;
    switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, e = Qt(e), e) {
      case "year":
        i = Aa(this, r) / 12;
        break;
      case "month":
        i = Aa(this, r);
        break;
      case "quarter":
        i = Aa(this, r) / 3;
        break;
      case "second":
        i = (this - r) / 1e3;
        break;
      case "minute":
        i = (this - r) / 6e4;
        break;
      case "hour":
        i = (this - r) / 36e5;
        break;
      case "day":
        i = (this - r - s) / 864e5;
        break;
      case "week":
        i = (this - r - s) / 6048e5;
        break;
      default:
        i = this - r;
    }
    return n ? i : Gt(i);
  }
  function Aa(t, e) {
    if (t.date() < e.date()) return -Aa(e, t);
    var n = (e.year() - t.year()) * 12 + (e.month() - t.month()), r = t.clone().add(n, "months"), s, i;
    return e - r < 0 ? (s = t.clone().add(n - 1, "months"), i = (e - r) / (r - s)) : (s = t.clone().add(n + 1, "months"), i = (e - r) / (s - r)), -(n + i) || 0;
  }
  de.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  de.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function f1() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function h1(t) {
    if (!this.isValid()) return null;
    var e = t !== true, n = e ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? Ea(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : En(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Ea(n, "Z")) : Ea(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  function m1() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var t = "moment", e = "", n, r, s, i;
    return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", e = "Z"), n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = e + '[")]', this.format(n + r + s + i);
  }
  function p1(t) {
    t || (t = this.isUtc() ? de.defaultFormatUtc : de.defaultFormat);
    var e = Ea(this, t);
    return this.localeData().postformat(e);
  }
  function g1(t, e) {
    return this.isValid() && (un(t) && t.isValid() || st(t).isValid()) ? hn({
      to: this,
      from: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
  }
  function y1(t) {
    return this.from(st(), t);
  }
  function v1(t, e) {
    return this.isValid() && (un(t) && t.isValid() || st(t).isValid()) ? hn({
      from: this,
      to: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
  }
  function b1(t) {
    return this.to(st(), t);
  }
  function ig(t) {
    var e;
    return t === void 0 ? this._locale._abbr : (e = sr(t), e != null && (this._locale = e), this);
  }
  var ag = qt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
    return t === void 0 ? this.localeData() : this.locale(t);
  });
  function og() {
    return this._locale;
  }
  var ro = 1e3, Ms = 60 * ro, so = 60 * Ms, lg = (365 * 400 + 97) * 24 * so;
  function Es(t, e) {
    return (t % e + e) % e;
  }
  function cg(t, e, n) {
    return t < 100 && t >= 0 ? new Date(t + 400, e, n) - lg : new Date(t, e, n).valueOf();
  }
  function ug(t, e, n) {
    return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - lg : Date.UTC(t, e, n);
  }
  function w1(t) {
    var e, n;
    if (t = Qt(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
    switch (n = this._isUTC ? ug : cg, t) {
      case "year":
        e = n(this.year(), 0, 1);
        break;
      case "quarter":
        e = n(this.year(), this.month() - this.month() % 3, 1);
        break;
      case "month":
        e = n(this.year(), this.month(), 1);
        break;
      case "week":
        e = n(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        e = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        e = this._d.valueOf(), e -= Es(e + (this._isUTC ? 0 : this.utcOffset() * Ms), so);
        break;
      case "minute":
        e = this._d.valueOf(), e -= Es(e, Ms);
        break;
      case "second":
        e = this._d.valueOf(), e -= Es(e, ro);
        break;
    }
    return this._d.setTime(e), de.updateOffset(this, true), this;
  }
  function S1(t) {
    var e, n;
    if (t = Qt(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
    switch (n = this._isUTC ? ug : cg, t) {
      case "year":
        e = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        e = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;
      case "month":
        e = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        e = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        e = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;
      case "day":
      case "date":
        e = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        e = this._d.valueOf(), e += so - Es(e + (this._isUTC ? 0 : this.utcOffset() * Ms), so) - 1;
        break;
      case "minute":
        e = this._d.valueOf(), e += Ms - Es(e, Ms) - 1;
        break;
      case "second":
        e = this._d.valueOf(), e += ro - Es(e, ro) - 1;
        break;
    }
    return this._d.setTime(e), de.updateOffset(this, true), this;
  }
  function _1() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function D1() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function k1() {
    return new Date(this.valueOf());
  }
  function T1() {
    var t = this;
    return [
      t.year(),
      t.month(),
      t.date(),
      t.hour(),
      t.minute(),
      t.second(),
      t.millisecond()
    ];
  }
  function x1() {
    var t = this;
    return {
      years: t.year(),
      months: t.month(),
      date: t.date(),
      hours: t.hours(),
      minutes: t.minutes(),
      seconds: t.seconds(),
      milliseconds: t.milliseconds()
    };
  }
  function M1() {
    return this.isValid() ? this.toISOString() : null;
  }
  function E1() {
    return Qc(this);
  }
  function C1() {
    return yr({}, Ae(this));
  }
  function A1() {
    return Ae(this).overflow;
  }
  function R1() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  De("N", 0, 0, "eraAbbr");
  De("NN", 0, 0, "eraAbbr");
  De("NNN", 0, 0, "eraAbbr");
  De("NNNN", 0, 0, "eraName");
  De("NNNNN", 0, 0, "eraNarrow");
  De("y", [
    "y",
    1
  ], "yo", "eraYear");
  De("y", [
    "yy",
    2
  ], 0, "eraYear");
  De("y", [
    "yyy",
    3
  ], 0, "eraYear");
  De("y", [
    "yyyy",
    4
  ], 0, "eraYear");
  ye("N", mu);
  ye("NN", mu);
  ye("NNN", mu);
  ye("NNNN", W1);
  ye("NNNNN", U1);
  qe([
    "N",
    "NN",
    "NNN",
    "NNNN",
    "NNNNN"
  ], function(t, e, n, r) {
    var s = n._locale.erasParse(t, r, n._strict);
    s ? Ae(n).era = s : Ae(n).invalidEra = t;
  });
  ye("y", Vs);
  ye("yy", Vs);
  ye("yyy", Vs);
  ye("yyyy", Vs);
  ye("yo", B1);
  qe([
    "y",
    "yy",
    "yyy",
    "yyyy"
  ], It);
  qe([
    "yo"
  ], function(t, e, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex && (s = t.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? e[It] = n._locale.eraYearOrdinalParse(t, s) : e[It] = parseInt(t, 10);
  });
  function O1(t, e) {
    var n, r, s, i = this._eras || sr("en")._eras;
    for (n = 0, r = i.length; n < r; ++n) switch (typeof i[n].since === "string" && (s = de(i[n].since).startOf("day"), i[n].since = s.valueOf()), typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        s = de(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
        break;
    }
    return i;
  }
  function I1(t, e, n) {
    var r, s, i = this.eras(), a, l, c;
    for (t = t.toUpperCase(), r = 0, s = i.length; r < s; ++r) if (a = i[r].name.toUpperCase(), l = i[r].abbr.toUpperCase(), c = i[r].narrow.toUpperCase(), n) switch (e) {
      case "N":
      case "NN":
      case "NNN":
        if (l === t) return i[r];
        break;
      case "NNNN":
        if (a === t) return i[r];
        break;
      case "NNNNN":
        if (c === t) return i[r];
        break;
    }
    else if ([
      a,
      l,
      c
    ].indexOf(t) >= 0) return i[r];
  }
  function P1(t, e) {
    var n = t.since <= t.until ? 1 : -1;
    return e === void 0 ? de(t.since).year() : de(t.since).year() + (e - t.offset) * n;
  }
  function N1() {
    var t, e, n, r = this.localeData().eras();
    for (t = 0, e = r.length; t < e; ++t) if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return r[t].name;
    return "";
  }
  function L1() {
    var t, e, n, r = this.localeData().eras();
    for (t = 0, e = r.length; t < e; ++t) if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return r[t].narrow;
    return "";
  }
  function Y1() {
    var t, e, n, r = this.localeData().eras();
    for (t = 0, e = r.length; t < e; ++t) if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return r[t].abbr;
    return "";
  }
  function F1() {
    var t, e, n, r, s = this.localeData().eras();
    for (t = 0, e = s.length; t < e; ++t) if (n = s[t].since <= s[t].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[t].since <= r && r <= s[t].until || s[t].until <= r && r <= s[t].since) return (this.year() - de(s[t].since).year()) * n + s[t].offset;
    return this.year();
  }
  function H1(t) {
    return Be(this, "_erasNameRegex") || pu.call(this), t ? this._erasNameRegex : this._erasRegex;
  }
  function j1(t) {
    return Be(this, "_erasAbbrRegex") || pu.call(this), t ? this._erasAbbrRegex : this._erasRegex;
  }
  function V1(t) {
    return Be(this, "_erasNarrowRegex") || pu.call(this), t ? this._erasNarrowRegex : this._erasRegex;
  }
  function mu(t, e) {
    return e.erasAbbrRegex(t);
  }
  function W1(t, e) {
    return e.erasNameRegex(t);
  }
  function U1(t, e) {
    return e.erasNarrowRegex(t);
  }
  function B1(t, e) {
    return e._eraYearOrdinalRegex || Vs;
  }
  function pu() {
    var t = [], e = [], n = [], r = [], s, i, a, l, c, d = this.eras();
    for (s = 0, i = d.length; s < i; ++s) a = Qn(d[s].name), l = Qn(d[s].abbr), c = Qn(d[s].narrow), e.push(a), t.push(l), n.push(c), r.push(a), r.push(l), r.push(c);
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i");
  }
  De(0, [
    "gg",
    2
  ], 0, function() {
    return this.weekYear() % 100;
  });
  De(0, [
    "GG",
    2
  ], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function Po(t, e) {
    De(0, [
      t,
      t.length
    ], 0, e);
  }
  Po("gggg", "weekYear");
  Po("ggggg", "weekYear");
  Po("GGGG", "isoWeekYear");
  Po("GGGGG", "isoWeekYear");
  ye("G", Co);
  ye("g", Co);
  ye("GG", it, Bt);
  ye("gg", it, Bt);
  ye("GGGG", nu, tu);
  ye("gggg", nu, tu);
  ye("GGGGG", Eo, xo);
  ye("ggggg", Eo, xo);
  Vi([
    "gggg",
    "ggggg",
    "GGGG",
    "GGGGG"
  ], function(t, e, n, r) {
    e[r.substr(0, 2)] = Ye(t);
  });
  Vi([
    "gg",
    "GG"
  ], function(t, e, n, r) {
    e[r] = de.parseTwoDigitYear(t);
  });
  function z1(t) {
    return dg.call(this, t, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function $1(t) {
    return dg.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function G1() {
    return Xn(this.year(), 1, 4);
  }
  function Z1() {
    return Xn(this.isoWeekYear(), 1, 4);
  }
  function q1() {
    var t = this.localeData()._week;
    return Xn(this.year(), t.dow, t.doy);
  }
  function Q1() {
    var t = this.localeData()._week;
    return Xn(this.weekYear(), t.dow, t.doy);
  }
  function dg(t, e, n, r, s) {
    var i;
    return t == null ? Mi(this, r, s).year : (i = Xn(t, r, s), e > i && (e = i), X1.call(this, t, e, n, r, s));
  }
  function X1(t, e, n, r, s) {
    var i = Bp(t, e, n, r, s), a = xi(i.year, 0, i.dayOfYear);
    return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
  }
  De("Q", 0, "Qo", "quarter");
  ye("Q", Ip);
  qe("Q", function(t, e) {
    e[$n] = (Ye(t) - 1) * 3;
  });
  function J1(t) {
    return t == null ? Math.ceil((this.month() + 1) / 3) : this.month((t - 1) * 3 + this.month() % 3);
  }
  De("D", [
    "DD",
    2
  ], "Do", "date");
  ye("D", it, Ws);
  ye("DD", it, Bt);
  ye("Do", function(t, e) {
    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
  });
  qe([
    "D",
    "DD"
  ], Dn);
  qe("Do", function(t, e) {
    e[Dn] = Ye(t.match(it)[0]);
  });
  var fg = Us("Date", true);
  De("DDD", [
    "DDDD",
    3
  ], "DDDo", "dayOfYear");
  ye("DDD", Mo);
  ye("DDDD", Pp);
  qe([
    "DDD",
    "DDDD"
  ], function(t, e, n) {
    n._dayOfYear = Ye(t);
  });
  function K1(t) {
    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return t == null ? e : this.add(t - e, "d");
  }
  De("m", [
    "mm",
    2
  ], 0, "minute");
  ye("m", it, ru);
  ye("mm", it, Bt);
  qe([
    "m",
    "mm"
  ], an);
  var eR = Us("Minutes", false);
  De("s", [
    "ss",
    2
  ], 0, "second");
  ye("s", it, ru);
  ye("ss", it, Bt);
  qe([
    "s",
    "ss"
  ], Gn);
  var tR = Us("Seconds", false);
  De("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  De(0, [
    "SS",
    2
  ], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  De(0, [
    "SSS",
    3
  ], 0, "millisecond");
  De(0, [
    "SSSS",
    4
  ], 0, function() {
    return this.millisecond() * 10;
  });
  De(0, [
    "SSSSS",
    5
  ], 0, function() {
    return this.millisecond() * 100;
  });
  De(0, [
    "SSSSSS",
    6
  ], 0, function() {
    return this.millisecond() * 1e3;
  });
  De(0, [
    "SSSSSSS",
    7
  ], 0, function() {
    return this.millisecond() * 1e4;
  });
  De(0, [
    "SSSSSSSS",
    8
  ], 0, function() {
    return this.millisecond() * 1e5;
  });
  De(0, [
    "SSSSSSSSS",
    9
  ], 0, function() {
    return this.millisecond() * 1e6;
  });
  ye("S", Mo, Ip);
  ye("SS", Mo, Bt);
  ye("SSS", Mo, Pp);
  var vr, hg;
  for (vr = "SSSS"; vr.length <= 9; vr += "S") ye(vr, Vs);
  function nR(t, e) {
    e[Wr] = Ye(("0." + t) * 1e3);
  }
  for (vr = "S"; vr.length <= 9; vr += "S") qe(vr, nR);
  hg = Us("Milliseconds", false);
  De("z", 0, 0, "zoneAbbr");
  De("zz", 0, 0, "zoneName");
  function rR() {
    return this._isUTC ? "UTC" : "";
  }
  function sR() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var ae = Hi.prototype;
  ae.add = QA;
  ae.calendar = r1;
  ae.clone = s1;
  ae.diff = d1;
  ae.endOf = S1;
  ae.format = p1;
  ae.from = g1;
  ae.fromNow = y1;
  ae.to = v1;
  ae.toNow = b1;
  ae.get = mC;
  ae.invalidAt = A1;
  ae.isAfter = i1;
  ae.isBefore = a1;
  ae.isBetween = o1;
  ae.isSame = l1;
  ae.isSameOrAfter = c1;
  ae.isSameOrBefore = u1;
  ae.isValid = E1;
  ae.lang = ag;
  ae.locale = ig;
  ae.localeData = og;
  ae.max = EA;
  ae.min = MA;
  ae.parsingFlags = C1;
  ae.set = pC;
  ae.startOf = w1;
  ae.subtract = XA;
  ae.toArray = T1;
  ae.toObject = x1;
  ae.toDate = k1;
  ae.toISOString = h1;
  ae.inspect = m1;
  typeof Symbol < "u" && Symbol.for != null && (ae[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  ae.toJSON = M1;
  ae.toString = f1;
  ae.unix = D1;
  ae.valueOf = _1;
  ae.creationData = R1;
  ae.eraName = N1;
  ae.eraNarrow = L1;
  ae.eraAbbr = Y1;
  ae.eraYear = F1;
  ae.year = Yp;
  ae.isLeapYear = hC;
  ae.weekYear = z1;
  ae.isoWeekYear = $1;
  ae.quarter = ae.quarters = J1;
  ae.month = Wp;
  ae.daysInMonth = kC;
  ae.week = ae.weeks = OC;
  ae.isoWeek = ae.isoWeeks = IC;
  ae.weeksInYear = q1;
  ae.weeksInWeekYear = Q1;
  ae.isoWeeksInYear = G1;
  ae.isoWeeksInISOWeekYear = Z1;
  ae.date = fg;
  ae.day = ae.days = $C;
  ae.weekday = GC;
  ae.isoWeekday = ZC;
  ae.dayOfYear = K1;
  ae.hour = ae.hours = tA;
  ae.minute = ae.minutes = eR;
  ae.second = ae.seconds = tR;
  ae.millisecond = ae.milliseconds = hg;
  ae.utcOffset = YA;
  ae.utc = HA;
  ae.local = jA;
  ae.parseZone = VA;
  ae.hasAlignedHourOffset = WA;
  ae.isDST = UA;
  ae.isLocal = zA;
  ae.isUtcOffset = $A;
  ae.isUtc = tg;
  ae.isUTC = tg;
  ae.zoneAbbr = rR;
  ae.zoneName = sR;
  ae.dates = qt("dates accessor is deprecated. Use date instead.", fg);
  ae.months = qt("months accessor is deprecated. Use month instead", Wp);
  ae.years = qt("years accessor is deprecated. Use year instead", Yp);
  ae.zone = qt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", FA);
  ae.isDSTShifted = qt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", BA);
  function iR(t) {
    return st(t * 1e3);
  }
  function aR() {
    return st.apply(null, arguments).parseZone();
  }
  function mg(t) {
    return t;
  }
  var $e = Jc.prototype;
  $e.calendar = zE;
  $e.longDateFormat = qE;
  $e.invalidDate = XE;
  $e.ordinal = eC;
  $e.preparse = mg;
  $e.postformat = mg;
  $e.relativeTime = nC;
  $e.pastFuture = rC;
  $e.set = UE;
  $e.eras = O1;
  $e.erasParse = I1;
  $e.erasConvertYear = P1;
  $e.erasAbbrRegex = j1;
  $e.erasNameRegex = H1;
  $e.erasNarrowRegex = V1;
  $e.months = wC;
  $e.monthsShort = SC;
  $e.monthsParse = DC;
  $e.monthsRegex = xC;
  $e.monthsShortRegex = TC;
  $e.week = EC;
  $e.firstDayOfYear = RC;
  $e.firstDayOfWeek = AC;
  $e.weekdays = VC;
  $e.weekdaysMin = UC;
  $e.weekdaysShort = WC;
  $e.weekdaysParse = zC;
  $e.weekdaysRegex = qC;
  $e.weekdaysShortRegex = QC;
  $e.weekdaysMinRegex = XC;
  $e.isPM = KC;
  $e.meridiem = nA;
  function io(t, e, n, r) {
    var s = sr(), i = Mn().set(r, e);
    return s[n](i, t);
  }
  function pg(t, e, n) {
    if (tr(t) && (e = t, t = void 0), t = t || "", e != null) return io(t, e, n, "month");
    var r, s = [];
    for (r = 0; r < 12; r++) s[r] = io(t, r, n, "month");
    return s;
  }
  function gu(t, e, n, r) {
    typeof t == "boolean" ? (tr(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = false, tr(e) && (n = e, e = void 0), e = e || "");
    var s = sr(), i = t ? s._week.dow : 0, a, l = [];
    if (n != null) return io(e, (n + i) % 7, r, "day");
    for (a = 0; a < 7; a++) l[a] = io(e, (a + i) % 7, r, "day");
    return l;
  }
  function oR(t, e) {
    return pg(t, e, "months");
  }
  function lR(t, e) {
    return pg(t, e, "monthsShort");
  }
  function cR(t, e, n) {
    return gu(t, e, n, "weekdays");
  }
  function uR(t, e, n) {
    return gu(t, e, n, "weekdaysShort");
  }
  function dR(t, e, n) {
    return gu(t, e, n, "weekdaysMin");
  }
  Sr("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(t) {
      var e = t % 10, n = Ye(t % 100 / 10) === 1 ? "th" : e === 1 ? "st" : e === 2 ? "nd" : e === 3 ? "rd" : "th";
      return t + n;
    }
  });
  de.lang = qt("moment.lang is deprecated. Use moment.locale instead.", Sr);
  de.langData = qt("moment.langData is deprecated. Use moment.localeData instead.", sr);
  var Vn = Math.abs;
  function fR() {
    var t = this._data;
    return this._milliseconds = Vn(this._milliseconds), this._days = Vn(this._days), this._months = Vn(this._months), t.milliseconds = Vn(t.milliseconds), t.seconds = Vn(t.seconds), t.minutes = Vn(t.minutes), t.hours = Vn(t.hours), t.months = Vn(t.months), t.years = Vn(t.years), this;
  }
  function gg(t, e, n, r) {
    var s = hn(e, n);
    return t._milliseconds += r * s._milliseconds, t._days += r * s._days, t._months += r * s._months, t._bubble();
  }
  function hR(t, e) {
    return gg(this, t, e, 1);
  }
  function mR(t, e) {
    return gg(this, t, e, -1);
  }
  function Qf(t) {
    return t < 0 ? Math.floor(t) : Math.ceil(t);
  }
  function pR() {
    var t = this._milliseconds, e = this._days, n = this._months, r = this._data, s, i, a, l, c;
    return t >= 0 && e >= 0 && n >= 0 || t <= 0 && e <= 0 && n <= 0 || (t += Qf(cc(n) + e) * 864e5, e = 0, n = 0), r.milliseconds = t % 1e3, s = Gt(t / 1e3), r.seconds = s % 60, i = Gt(s / 60), r.minutes = i % 60, a = Gt(i / 60), r.hours = a % 24, e += Gt(a / 24), c = Gt(yg(e)), n += c, e -= Qf(cc(c)), l = Gt(n / 12), n %= 12, r.days = e, r.months = n, r.years = l, this;
  }
  function yg(t) {
    return t * 4800 / 146097;
  }
  function cc(t) {
    return t * 146097 / 4800;
  }
  function gR(t) {
    if (!this.isValid()) return NaN;
    var e, n, r = this._milliseconds;
    if (t = Qt(t), t === "month" || t === "quarter" || t === "year") switch (e = this._days + r / 864e5, n = this._months + yg(e), t) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
    else switch (e = this._days + Math.round(cc(this._months)), t) {
      case "week":
        return e / 7 + r / 6048e5;
      case "day":
        return e + r / 864e5;
      case "hour":
        return e * 24 + r / 36e5;
      case "minute":
        return e * 1440 + r / 6e4;
      case "second":
        return e * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(e * 864e5) + r;
      default:
        throw new Error("Unknown unit " + t);
    }
  }
  function ir(t) {
    return function() {
      return this.as(t);
    };
  }
  var vg = ir("ms"), yR = ir("s"), vR = ir("m"), bR = ir("h"), wR = ir("d"), SR = ir("w"), _R = ir("M"), DR = ir("Q"), kR = ir("y"), TR = vg;
  function xR() {
    return hn(this);
  }
  function MR(t) {
    return t = Qt(t), this.isValid() ? this[t + "s"]() : NaN;
  }
  function ts(t) {
    return function() {
      return this.isValid() ? this._data[t] : NaN;
    };
  }
  var ER = ts("milliseconds"), CR = ts("seconds"), AR = ts("minutes"), RR = ts("hours"), OR = ts("days"), IR = ts("months"), PR = ts("years");
  function NR() {
    return Gt(this.days() / 7);
  }
  var Bn = Math.round, Ss = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function LR(t, e, n, r, s) {
    return s.relativeTime(e || 1, !!n, t, r);
  }
  function YR(t, e, n, r) {
    var s = hn(t).abs(), i = Bn(s.as("s")), a = Bn(s.as("m")), l = Bn(s.as("h")), c = Bn(s.as("d")), d = Bn(s.as("M")), f = Bn(s.as("w")), m = Bn(s.as("y")), g = i <= n.ss && [
      "s",
      i
    ] || i < n.s && [
      "ss",
      i
    ] || a <= 1 && [
      "m"
    ] || a < n.m && [
      "mm",
      a
    ] || l <= 1 && [
      "h"
    ] || l < n.h && [
      "hh",
      l
    ] || c <= 1 && [
      "d"
    ] || c < n.d && [
      "dd",
      c
    ];
    return n.w != null && (g = g || f <= 1 && [
      "w"
    ] || f < n.w && [
      "ww",
      f
    ]), g = g || d <= 1 && [
      "M"
    ] || d < n.M && [
      "MM",
      d
    ] || m <= 1 && [
      "y"
    ] || [
      "yy",
      m
    ], g[2] = e, g[3] = +t > 0, g[4] = r, LR.apply(null, g);
  }
  function FR(t) {
    return t === void 0 ? Bn : typeof t == "function" ? (Bn = t, true) : false;
  }
  function HR(t, e) {
    return Ss[t] === void 0 ? false : e === void 0 ? Ss[t] : (Ss[t] = e, t === "s" && (Ss.ss = e - 1), true);
  }
  function jR(t, e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n = false, r = Ss, s, i;
    return typeof t == "object" && (e = t, t = false), typeof t == "boolean" && (n = t), typeof e == "object" && (r = Object.assign({}, Ss, e), e.s != null && e.ss == null && (r.ss = e.s - 1)), s = this.localeData(), i = YR(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
  }
  var Il = Math.abs;
  function ms(t) {
    return (t > 0) - (t < 0) || +t;
  }
  function No() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t = Il(this._milliseconds) / 1e3, e = Il(this._days), n = Il(this._months), r, s, i, a, l = this.asSeconds(), c, d, f, m;
    return l ? (r = Gt(t / 60), s = Gt(r / 60), t %= 60, r %= 60, i = Gt(n / 12), n %= 12, a = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", c = l < 0 ? "-" : "", d = ms(this._months) !== ms(l) ? "-" : "", f = ms(this._days) !== ms(l) ? "-" : "", m = ms(this._milliseconds) !== ms(l) ? "-" : "", c + "P" + (i ? d + i + "Y" : "") + (n ? d + n + "M" : "") + (e ? f + e + "D" : "") + (s || r || t ? "T" : "") + (s ? m + s + "H" : "") + (r ? m + r + "M" : "") + (t ? m + a + "S" : "")) : "P0D";
  }
  var je = Io.prototype;
  je.isValid = IA;
  je.abs = fR;
  je.add = hR;
  je.subtract = mR;
  je.as = gR;
  je.asMilliseconds = vg;
  je.asSeconds = yR;
  je.asMinutes = vR;
  je.asHours = bR;
  je.asDays = wR;
  je.asWeeks = SR;
  je.asMonths = _R;
  je.asQuarters = DR;
  je.asYears = kR;
  je.valueOf = TR;
  je._bubble = pR;
  je.clone = xR;
  je.get = MR;
  je.milliseconds = ER;
  je.seconds = CR;
  je.minutes = AR;
  je.hours = RR;
  je.days = OR;
  je.weeks = NR;
  je.months = IR;
  je.years = PR;
  je.humanize = jR;
  je.toISOString = No;
  je.toString = No;
  je.toJSON = No;
  je.locale = ig;
  je.localeData = og;
  je.toIsoString = qt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", No);
  je.lang = ag;
  De("X", 0, 0, "unix");
  De("x", 0, 0, "valueOf");
  ye("x", Co);
  ye("X", oC);
  qe("X", function(t, e, n) {
    n._d = new Date(parseFloat(t) * 1e3);
  });
  qe("x", function(t, e, n) {
    n._d = new Date(Ye(t));
  });
  de.version = "2.30.1";
  VE(st);
  de.fn = ae;
  de.min = CA;
  de.max = AA;
  de.now = RA;
  de.utc = Mn;
  de.unix = iR;
  de.months = oR;
  de.isDate = Fi;
  de.locale = Sr;
  de.invalid = To;
  de.duration = hn;
  de.isMoment = un;
  de.weekdays = cR;
  de.parseZone = aR;
  de.localeData = sr;
  de.isDuration = Ca;
  de.monthsShort = lR;
  de.weekdaysMin = dR;
  de.defineLocale = lu;
  de.updateLocale = aA;
  de.locales = oA;
  de.weekdaysShort = uR;
  de.normalizeUnits = Qt;
  de.relativeTimeRounding = FR;
  de.relativeTimeThreshold = HR;
  de.calendarFormat = n1;
  de.prototype = ae;
  de.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  };
  function mn(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var VR = {
    exports: {}
  }, Ra = {
    exports: {}
  }, WR = Ra.exports, Xf;
  function Cn() {
    return Xf || (Xf = 1, (function(t, e) {
      (function(n, r) {
        t.exports = r();
      })(WR, (function() {
        var n;
        function r() {
          return n.apply(null, arguments);
        }
        function s(o) {
          n = o;
        }
        function i(o) {
          return o instanceof Array || Object.prototype.toString.call(o) === "[object Array]";
        }
        function a(o) {
          return o != null && Object.prototype.toString.call(o) === "[object Object]";
        }
        function l(o, u) {
          return Object.prototype.hasOwnProperty.call(o, u);
        }
        function c(o) {
          if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(o).length === 0;
          var u;
          for (u in o) if (l(o, u)) return false;
          return true;
        }
        function d(o) {
          return o === void 0;
        }
        function f(o) {
          return typeof o == "number" || Object.prototype.toString.call(o) === "[object Number]";
        }
        function m(o) {
          return o instanceof Date || Object.prototype.toString.call(o) === "[object Date]";
        }
        function g(o, u) {
          var h = [], p, w = o.length;
          for (p = 0; p < w; ++p) h.push(u(o[p], p));
          return h;
        }
        function y(o, u) {
          for (var h in u) l(u, h) && (o[h] = u[h]);
          return l(u, "toString") && (o.toString = u.toString), l(u, "valueOf") && (o.valueOf = u.valueOf), o;
        }
        function v(o, u, h, p) {
          return Ku(o, u, h, p, true).utc();
        }
        function S() {
          return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false
          };
        }
        function b(o) {
          return o._pf == null && (o._pf = S()), o._pf;
        }
        var _;
        Array.prototype.some ? _ = Array.prototype.some : _ = function(o) {
          var u = Object(this), h = u.length >>> 0, p;
          for (p = 0; p < h; p++) if (p in u && o.call(this, u[p], p, u)) return true;
          return false;
        };
        function E(o) {
          var u = null, h = false, p = o._d && !isNaN(o._d.getTime());
          if (p && (u = b(o), h = _.call(u.parsedDateParts, function(w) {
            return w != null;
          }), p = u.overflow < 0 && !u.empty && !u.invalidEra && !u.invalidMonth && !u.invalidWeekday && !u.weekdayMismatch && !u.nullInput && !u.invalidFormat && !u.userInvalidated && (!u.meridiem || u.meridiem && h), o._strict && (p = p && u.charsLeftOver === 0 && u.unusedTokens.length === 0 && u.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(o)) o._isValid = p;
          else return p;
          return o._isValid;
        }
        function R(o) {
          var u = v(NaN);
          return o != null ? y(b(u), o) : b(u).userInvalidated = true, u;
        }
        var T = r.momentProperties = [], x = false;
        function N(o, u) {
          var h, p, w, A = T.length;
          if (d(u._isAMomentObject) || (o._isAMomentObject = u._isAMomentObject), d(u._i) || (o._i = u._i), d(u._f) || (o._f = u._f), d(u._l) || (o._l = u._l), d(u._strict) || (o._strict = u._strict), d(u._tzm) || (o._tzm = u._tzm), d(u._isUTC) || (o._isUTC = u._isUTC), d(u._offset) || (o._offset = u._offset), d(u._pf) || (o._pf = b(u)), d(u._locale) || (o._locale = u._locale), A > 0) for (h = 0; h < A; h++) p = T[h], w = u[p], d(w) || (o[p] = w);
          return o;
        }
        function I(o) {
          N(this, o), this._d = new Date(o._d != null ? o._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), x === false && (x = true, r.updateOffset(this), x = false);
        }
        function O(o) {
          return o instanceof I || o != null && o._isAMomentObject != null;
        }
        function J(o) {
          r.suppressDeprecationWarnings === false && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + o);
        }
        function U(o, u) {
          var h = true;
          return y(function() {
            if (r.deprecationHandler != null && r.deprecationHandler(null, o), h) {
              var p = [], w, A, B, me = arguments.length;
              for (A = 0; A < me; A++) {
                if (w = "", typeof arguments[A] == "object") {
                  w += `
[` + A + "] ";
                  for (B in arguments[0]) l(arguments[0], B) && (w += B + ": " + arguments[0][B] + ", ");
                  w = w.slice(0, -2);
                } else w = arguments[A];
                p.push(w);
              }
              J(o + `
Arguments: ` + Array.prototype.slice.call(p).join("") + `
` + new Error().stack), h = false;
            }
            return u.apply(this, arguments);
          }, u);
        }
        var L = {};
        function ee(o, u) {
          r.deprecationHandler != null && r.deprecationHandler(o, u), L[o] || (J(u), L[o] = true);
        }
        r.suppressDeprecationWarnings = false, r.deprecationHandler = null;
        function Z(o) {
          return typeof Function < "u" && o instanceof Function || Object.prototype.toString.call(o) === "[object Function]";
        }
        function k(o) {
          var u, h;
          for (h in o) l(o, h) && (u = o[h], Z(u) ? this[h] = u : this["_" + h] = u);
          this._config = o, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
        }
        function C(o, u) {
          var h = y({}, o), p;
          for (p in u) l(u, p) && (a(o[p]) && a(u[p]) ? (h[p] = {}, y(h[p], o[p]), y(h[p], u[p])) : u[p] != null ? h[p] = u[p] : delete h[p]);
          for (p in o) l(o, p) && !l(u, p) && a(o[p]) && (h[p] = y({}, h[p]));
          return h;
        }
        function P(o) {
          o != null && this.set(o);
        }
        var W;
        Object.keys ? W = Object.keys : W = function(o) {
          var u, h = [];
          for (u in o) l(o, u) && h.push(u);
          return h;
        };
        var Y = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function te(o, u, h) {
          var p = this._calendar[o] || this._calendar.sameElse;
          return Z(p) ? p.call(u, h) : p;
        }
        function j(o, u, h) {
          var p = "" + Math.abs(o), w = u - p.length, A = o >= 0;
          return (A ? h ? "+" : "" : "-") + Math.pow(10, Math.max(0, w)).toString().substr(1) + p;
        }
        var z = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, K = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, X = {}, se = {};
        function H(o, u, h, p) {
          var w = p;
          typeof p == "string" && (w = function() {
            return this[p]();
          }), o && (se[o] = w), u && (se[u[0]] = function() {
            return j(w.apply(this, arguments), u[1], u[2]);
          }), h && (se[h] = function() {
            return this.localeData().ordinal(w.apply(this, arguments), o);
          });
        }
        function re(o) {
          return o.match(/\[[\s\S]/) ? o.replace(/^\[|\]$/g, "") : o.replace(/\\/g, "");
        }
        function ne(o) {
          var u = o.match(z), h, p;
          for (h = 0, p = u.length; h < p; h++) se[u[h]] ? u[h] = se[u[h]] : u[h] = re(u[h]);
          return function(w) {
            var A = "", B;
            for (B = 0; B < p; B++) A += Z(u[B]) ? u[B].call(w, o) : u[B];
            return A;
          };
        }
        function q(o, u) {
          return o.isValid() ? (u = Q(u, o.localeData()), X[u] = X[u] || ne(u), X[u](o)) : o.localeData().invalidDate();
        }
        function Q(o, u) {
          var h = 5;
          function p(w) {
            return u.longDateFormat(w) || w;
          }
          for (K.lastIndex = 0; h >= 0 && K.test(o); ) o = o.replace(K, p), K.lastIndex = 0, h -= 1;
          return o;
        }
        var ce = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function fe(o) {
          var u = this._longDateFormat[o], h = this._longDateFormat[o.toUpperCase()];
          return u || !h ? u : (this._longDateFormat[o] = h.match(z).map(function(p) {
            return p === "MMMM" || p === "MM" || p === "DD" || p === "dddd" ? p.slice(1) : p;
          }).join(""), this._longDateFormat[o]);
        }
        var be = "Invalid date";
        function G() {
          return this._invalidDate;
        }
        var le = "%d", he = /\d{1,2}/;
        function ve(o) {
          return this._ordinal.replace("%d", o);
        }
        var oe = {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          ss: "%d seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          w: "a week",
          ww: "%d weeks",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        };
        function Me(o, u, h, p) {
          var w = this._relativeTime[h];
          return Z(w) ? w(o, u, h, p) : w.replace(/%d/i, o);
        }
        function we(o, u) {
          var h = this._relativeTime[o > 0 ? "future" : "past"];
          return Z(h) ? h(u) : h.replace(/%s/i, u);
        }
        var pe = {
          D: "date",
          dates: "date",
          date: "date",
          d: "day",
          days: "day",
          day: "day",
          e: "weekday",
          weekdays: "weekday",
          weekday: "weekday",
          E: "isoWeekday",
          isoweekdays: "isoWeekday",
          isoweekday: "isoWeekday",
          DDD: "dayOfYear",
          dayofyears: "dayOfYear",
          dayofyear: "dayOfYear",
          h: "hour",
          hours: "hour",
          hour: "hour",
          ms: "millisecond",
          milliseconds: "millisecond",
          millisecond: "millisecond",
          m: "minute",
          minutes: "minute",
          minute: "minute",
          M: "month",
          months: "month",
          month: "month",
          Q: "quarter",
          quarters: "quarter",
          quarter: "quarter",
          s: "second",
          seconds: "second",
          second: "second",
          gg: "weekYear",
          weekyears: "weekYear",
          weekyear: "weekYear",
          GG: "isoWeekYear",
          isoweekyears: "isoWeekYear",
          isoweekyear: "isoWeekYear",
          w: "week",
          weeks: "week",
          week: "week",
          W: "isoWeek",
          isoweeks: "isoWeek",
          isoweek: "isoWeek",
          y: "year",
          years: "year",
          year: "year"
        };
        function Se(o) {
          return typeof o == "string" ? pe[o] || pe[o.toLowerCase()] : void 0;
        }
        function kt(o) {
          var u = {}, h, p;
          for (p in o) l(o, p) && (h = Se(p), h && (u[h] = o[p]));
          return u;
        }
        var gn = {
          date: 9,
          day: 11,
          weekday: 11,
          isoWeekday: 11,
          dayOfYear: 4,
          hour: 13,
          millisecond: 16,
          minute: 14,
          month: 8,
          quarter: 7,
          second: 15,
          weekYear: 1,
          isoWeekYear: 1,
          week: 5,
          isoWeek: 5,
          year: 1
        };
        function Rr(o) {
          var u = [], h;
          for (h in o) l(o, h) && u.push({
            unit: h,
            priority: gn[h]
          });
          return u.sort(function(p, w) {
            return p.priority - w.priority;
          }), u;
        }
        var dt = /\d/, Ke = /\d\d/, Or = /\d{3}/, Bs = /\d{4}/, Bi = /[+-]?\d{6}/, et = /\d\d?/, Nu = /\d\d\d\d?/, Lu = /\d\d\d\d\d\d?/, zi = /\d{1,3}/, jo = /\d{1,4}/, $i = /[+-]?\d{1,6}/, ns = /\d+/, Gi = /[+-]?\d+/, sy = /Z|[+-]\d\d:?\d\d/gi, Zi = /Z|[+-]\d\d(?::?\d\d)?/gi, iy = /[+-]?\d+(\.\d{1,3})?/, zs = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, rs = /^[1-9]\d?/, Vo = /^([1-9]\d|\d)/, qi;
        qi = {};
        function ge(o, u, h) {
          qi[o] = Z(u) ? u : function(p, w) {
            return p && h ? h : u;
          };
        }
        function ay(o, u) {
          return l(qi, o) ? qi[o](u._strict, u._locale) : new RegExp(oy(o));
        }
        function oy(o) {
          return An(o.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(u, h, p, w, A) {
            return h || p || w || A;
          }));
        }
        function An(o) {
          return o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function zt(o) {
          return o < 0 ? Math.ceil(o) || 0 : Math.floor(o);
        }
        function Le(o) {
          var u = +o, h = 0;
          return u !== 0 && isFinite(u) && (h = zt(u)), h;
        }
        var Wo = {};
        function Ge(o, u) {
          var h, p = u, w;
          for (typeof o == "string" && (o = [
            o
          ]), f(u) && (p = function(A, B) {
            B[u] = Le(A);
          }), w = o.length, h = 0; h < w; h++) Wo[o[h]] = p;
        }
        function $s(o, u) {
          Ge(o, function(h, p, w, A) {
            w._w = w._w || {}, u(h, w._w, w, A);
          });
        }
        function ly(o, u, h) {
          u != null && l(Wo, o) && Wo[o](u, h._a, h, o);
        }
        function Qi(o) {
          return o % 4 === 0 && o % 100 !== 0 || o % 400 === 0;
        }
        var Mt = 0, Rn = 1, yn = 2, yt = 3, Xt = 4, On = 5, Ir = 6, cy = 7, uy = 8;
        H("Y", 0, 0, function() {
          var o = this.year();
          return o <= 9999 ? j(o, 4) : "+" + o;
        }), H(0, [
          "YY",
          2
        ], 0, function() {
          return this.year() % 100;
        }), H(0, [
          "YYYY",
          4
        ], 0, "year"), H(0, [
          "YYYYY",
          5
        ], 0, "year"), H(0, [
          "YYYYYY",
          6,
          true
        ], 0, "year"), ge("Y", Gi), ge("YY", et, Ke), ge("YYYY", jo, Bs), ge("YYYYY", $i, Bi), ge("YYYYYY", $i, Bi), Ge([
          "YYYYY",
          "YYYYYY"
        ], Mt), Ge("YYYY", function(o, u) {
          u[Mt] = o.length === 2 ? r.parseTwoDigitYear(o) : Le(o);
        }), Ge("YY", function(o, u) {
          u[Mt] = r.parseTwoDigitYear(o);
        }), Ge("Y", function(o, u) {
          u[Mt] = parseInt(o, 10);
        });
        function Gs(o) {
          return Qi(o) ? 366 : 365;
        }
        r.parseTwoDigitYear = function(o) {
          return Le(o) + (Le(o) > 68 ? 1900 : 2e3);
        };
        var Yu = ss("FullYear", true);
        function dy() {
          return Qi(this.year());
        }
        function ss(o, u) {
          return function(h) {
            return h != null ? (Fu(this, o, h), r.updateOffset(this, u), this) : Zs(this, o);
          };
        }
        function Zs(o, u) {
          if (!o.isValid()) return NaN;
          var h = o._d, p = o._isUTC;
          switch (u) {
            case "Milliseconds":
              return p ? h.getUTCMilliseconds() : h.getMilliseconds();
            case "Seconds":
              return p ? h.getUTCSeconds() : h.getSeconds();
            case "Minutes":
              return p ? h.getUTCMinutes() : h.getMinutes();
            case "Hours":
              return p ? h.getUTCHours() : h.getHours();
            case "Date":
              return p ? h.getUTCDate() : h.getDate();
            case "Day":
              return p ? h.getUTCDay() : h.getDay();
            case "Month":
              return p ? h.getUTCMonth() : h.getMonth();
            case "FullYear":
              return p ? h.getUTCFullYear() : h.getFullYear();
            default:
              return NaN;
          }
        }
        function Fu(o, u, h) {
          var p, w, A, B, me;
          if (!(!o.isValid() || isNaN(h))) {
            switch (p = o._d, w = o._isUTC, u) {
              case "Milliseconds":
                return void (w ? p.setUTCMilliseconds(h) : p.setMilliseconds(h));
              case "Seconds":
                return void (w ? p.setUTCSeconds(h) : p.setSeconds(h));
              case "Minutes":
                return void (w ? p.setUTCMinutes(h) : p.setMinutes(h));
              case "Hours":
                return void (w ? p.setUTCHours(h) : p.setHours(h));
              case "Date":
                return void (w ? p.setUTCDate(h) : p.setDate(h));
              case "FullYear":
                break;
              default:
                return;
            }
            A = h, B = o.month(), me = o.date(), me = me === 29 && B === 1 && !Qi(A) ? 28 : me, w ? p.setUTCFullYear(A, B, me) : p.setFullYear(A, B, me);
          }
        }
        function fy(o) {
          return o = Se(o), Z(this[o]) ? this[o]() : this;
        }
        function hy(o, u) {
          if (typeof o == "object") {
            o = kt(o);
            var h = Rr(o), p, w = h.length;
            for (p = 0; p < w; p++) this[h[p].unit](o[h[p].unit]);
          } else if (o = Se(o), Z(this[o])) return this[o](u);
          return this;
        }
        function my(o, u) {
          return (o % u + u) % u;
        }
        var ft;
        Array.prototype.indexOf ? ft = Array.prototype.indexOf : ft = function(o) {
          var u;
          for (u = 0; u < this.length; ++u) if (this[u] === o) return u;
          return -1;
        };
        function Uo(o, u) {
          if (isNaN(o) || isNaN(u)) return NaN;
          var h = my(u, 12);
          return o += (u - h) / 12, h === 1 ? Qi(o) ? 29 : 28 : 31 - h % 7 % 2;
        }
        H("M", [
          "MM",
          2
        ], "Mo", function() {
          return this.month() + 1;
        }), H("MMM", 0, 0, function(o) {
          return this.localeData().monthsShort(this, o);
        }), H("MMMM", 0, 0, function(o) {
          return this.localeData().months(this, o);
        }), ge("M", et, rs), ge("MM", et, Ke), ge("MMM", function(o, u) {
          return u.monthsShortRegex(o);
        }), ge("MMMM", function(o, u) {
          return u.monthsRegex(o);
        }), Ge([
          "M",
          "MM"
        ], function(o, u) {
          u[Rn] = Le(o) - 1;
        }), Ge([
          "MMM",
          "MMMM"
        ], function(o, u, h, p) {
          var w = h._locale.monthsParse(o, p, h._strict);
          w != null ? u[Rn] = w : b(h).invalidMonth = o;
        });
        var py = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Hu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), ju = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, gy = zs, yy = zs;
        function vy(o, u) {
          return o ? i(this._months) ? this._months[o.month()] : this._months[(this._months.isFormat || ju).test(u) ? "format" : "standalone"][o.month()] : i(this._months) ? this._months : this._months.standalone;
        }
        function by(o, u) {
          return o ? i(this._monthsShort) ? this._monthsShort[o.month()] : this._monthsShort[ju.test(u) ? "format" : "standalone"][o.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
        }
        function wy(o, u, h) {
          var p, w, A, B = o.toLocaleLowerCase();
          if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], p = 0; p < 12; ++p) A = v([
            2e3,
            p
          ]), this._shortMonthsParse[p] = this.monthsShort(A, "").toLocaleLowerCase(), this._longMonthsParse[p] = this.months(A, "").toLocaleLowerCase();
          return h ? u === "MMM" ? (w = ft.call(this._shortMonthsParse, B), w !== -1 ? w : null) : (w = ft.call(this._longMonthsParse, B), w !== -1 ? w : null) : u === "MMM" ? (w = ft.call(this._shortMonthsParse, B), w !== -1 ? w : (w = ft.call(this._longMonthsParse, B), w !== -1 ? w : null)) : (w = ft.call(this._longMonthsParse, B), w !== -1 ? w : (w = ft.call(this._shortMonthsParse, B), w !== -1 ? w : null));
        }
        function Sy(o, u, h) {
          var p, w, A;
          if (this._monthsParseExact) return wy.call(this, o, u, h);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), p = 0; p < 12; p++) {
            if (w = v([
              2e3,
              p
            ]), h && !this._longMonthsParse[p] && (this._longMonthsParse[p] = new RegExp("^" + this.months(w, "").replace(".", "") + "$", "i"), this._shortMonthsParse[p] = new RegExp("^" + this.monthsShort(w, "").replace(".", "") + "$", "i")), !h && !this._monthsParse[p] && (A = "^" + this.months(w, "") + "|^" + this.monthsShort(w, ""), this._monthsParse[p] = new RegExp(A.replace(".", ""), "i")), h && u === "MMMM" && this._longMonthsParse[p].test(o)) return p;
            if (h && u === "MMM" && this._shortMonthsParse[p].test(o)) return p;
            if (!h && this._monthsParse[p].test(o)) return p;
          }
        }
        function Vu(o, u) {
          if (!o.isValid()) return o;
          if (typeof u == "string") {
            if (/^\d+$/.test(u)) u = Le(u);
            else if (u = o.localeData().monthsParse(u), !f(u)) return o;
          }
          var h = u, p = o.date();
          return p = p < 29 ? p : Math.min(p, Uo(o.year(), h)), o._isUTC ? o._d.setUTCMonth(h, p) : o._d.setMonth(h, p), o;
        }
        function Wu(o) {
          return o != null ? (Vu(this, o), r.updateOffset(this, true), this) : Zs(this, "Month");
        }
        function _y() {
          return Uo(this.year(), this.month());
        }
        function Dy(o) {
          return this._monthsParseExact ? (l(this, "_monthsRegex") || Uu.call(this), o ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = gy), this._monthsShortStrictRegex && o ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }
        function ky(o) {
          return this._monthsParseExact ? (l(this, "_monthsRegex") || Uu.call(this), o ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = yy), this._monthsStrictRegex && o ? this._monthsStrictRegex : this._monthsRegex);
        }
        function Uu() {
          function o(Ce, Fe) {
            return Fe.length - Ce.length;
          }
          var u = [], h = [], p = [], w, A, B, me;
          for (w = 0; w < 12; w++) A = v([
            2e3,
            w
          ]), B = An(this.monthsShort(A, "")), me = An(this.months(A, "")), u.push(B), h.push(me), p.push(me), p.push(B);
          u.sort(o), h.sort(o), p.sort(o), this._monthsRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        }
        function Ty(o, u, h, p, w, A, B) {
          var me;
          return o < 100 && o >= 0 ? (me = new Date(o + 400, u, h, p, w, A, B), isFinite(me.getFullYear()) && me.setFullYear(o)) : me = new Date(o, u, h, p, w, A, B), me;
        }
        function qs(o) {
          var u, h;
          return o < 100 && o >= 0 ? (h = Array.prototype.slice.call(arguments), h[0] = o + 400, u = new Date(Date.UTC.apply(null, h)), isFinite(u.getUTCFullYear()) && u.setUTCFullYear(o)) : u = new Date(Date.UTC.apply(null, arguments)), u;
        }
        function Xi(o, u, h) {
          var p = 7 + u - h, w = (7 + qs(o, 0, p).getUTCDay() - u) % 7;
          return -w + p - 1;
        }
        function Bu(o, u, h, p, w) {
          var A = (7 + h - p) % 7, B = Xi(o, p, w), me = 1 + 7 * (u - 1) + A + B, Ce, Fe;
          return me <= 0 ? (Ce = o - 1, Fe = Gs(Ce) + me) : me > Gs(o) ? (Ce = o + 1, Fe = me - Gs(o)) : (Ce = o, Fe = me), {
            year: Ce,
            dayOfYear: Fe
          };
        }
        function Qs(o, u, h) {
          var p = Xi(o.year(), u, h), w = Math.floor((o.dayOfYear() - p - 1) / 7) + 1, A, B;
          return w < 1 ? (B = o.year() - 1, A = w + In(B, u, h)) : w > In(o.year(), u, h) ? (A = w - In(o.year(), u, h), B = o.year() + 1) : (B = o.year(), A = w), {
            week: A,
            year: B
          };
        }
        function In(o, u, h) {
          var p = Xi(o, u, h), w = Xi(o + 1, u, h);
          return (Gs(o) - p + w) / 7;
        }
        H("w", [
          "ww",
          2
        ], "wo", "week"), H("W", [
          "WW",
          2
        ], "Wo", "isoWeek"), ge("w", et, rs), ge("ww", et, Ke), ge("W", et, rs), ge("WW", et, Ke), $s([
          "w",
          "ww",
          "W",
          "WW"
        ], function(o, u, h, p) {
          u[p.substr(0, 1)] = Le(o);
        });
        function xy(o) {
          return Qs(o, this._week.dow, this._week.doy).week;
        }
        var My = {
          dow: 0,
          doy: 6
        };
        function Ey() {
          return this._week.dow;
        }
        function Cy() {
          return this._week.doy;
        }
        function Ay(o) {
          var u = this.localeData().week(this);
          return o == null ? u : this.add((o - u) * 7, "d");
        }
        function Ry(o) {
          var u = Qs(this, 1, 4).week;
          return o == null ? u : this.add((o - u) * 7, "d");
        }
        H("d", 0, "do", "day"), H("dd", 0, 0, function(o) {
          return this.localeData().weekdaysMin(this, o);
        }), H("ddd", 0, 0, function(o) {
          return this.localeData().weekdaysShort(this, o);
        }), H("dddd", 0, 0, function(o) {
          return this.localeData().weekdays(this, o);
        }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), ge("d", et), ge("e", et), ge("E", et), ge("dd", function(o, u) {
          return u.weekdaysMinRegex(o);
        }), ge("ddd", function(o, u) {
          return u.weekdaysShortRegex(o);
        }), ge("dddd", function(o, u) {
          return u.weekdaysRegex(o);
        }), $s([
          "dd",
          "ddd",
          "dddd"
        ], function(o, u, h, p) {
          var w = h._locale.weekdaysParse(o, p, h._strict);
          w != null ? u.d = w : b(h).invalidWeekday = o;
        }), $s([
          "d",
          "e",
          "E"
        ], function(o, u, h, p) {
          u[p] = Le(o);
        });
        function Oy(o, u) {
          return typeof o != "string" ? o : isNaN(o) ? (o = u.weekdaysParse(o), typeof o == "number" ? o : null) : parseInt(o, 10);
        }
        function Iy(o, u) {
          return typeof o == "string" ? u.weekdaysParse(o) % 7 || 7 : isNaN(o) ? null : o;
        }
        function Bo(o, u) {
          return o.slice(u, 7).concat(o.slice(0, u));
        }
        var Py = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), zu = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Ny = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Ly = zs, Yy = zs, Fy = zs;
        function Hy(o, u) {
          var h = i(this._weekdays) ? this._weekdays : this._weekdays[o && o !== true && this._weekdays.isFormat.test(u) ? "format" : "standalone"];
          return o === true ? Bo(h, this._week.dow) : o ? h[o.day()] : h;
        }
        function jy(o) {
          return o === true ? Bo(this._weekdaysShort, this._week.dow) : o ? this._weekdaysShort[o.day()] : this._weekdaysShort;
        }
        function Vy(o) {
          return o === true ? Bo(this._weekdaysMin, this._week.dow) : o ? this._weekdaysMin[o.day()] : this._weekdaysMin;
        }
        function Wy(o, u, h) {
          var p, w, A, B = o.toLocaleLowerCase();
          if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], p = 0; p < 7; ++p) A = v([
            2e3,
            1
          ]).day(p), this._minWeekdaysParse[p] = this.weekdaysMin(A, "").toLocaleLowerCase(), this._shortWeekdaysParse[p] = this.weekdaysShort(A, "").toLocaleLowerCase(), this._weekdaysParse[p] = this.weekdays(A, "").toLocaleLowerCase();
          return h ? u === "dddd" ? (w = ft.call(this._weekdaysParse, B), w !== -1 ? w : null) : u === "ddd" ? (w = ft.call(this._shortWeekdaysParse, B), w !== -1 ? w : null) : (w = ft.call(this._minWeekdaysParse, B), w !== -1 ? w : null) : u === "dddd" ? (w = ft.call(this._weekdaysParse, B), w !== -1 || (w = ft.call(this._shortWeekdaysParse, B), w !== -1) ? w : (w = ft.call(this._minWeekdaysParse, B), w !== -1 ? w : null)) : u === "ddd" ? (w = ft.call(this._shortWeekdaysParse, B), w !== -1 || (w = ft.call(this._weekdaysParse, B), w !== -1) ? w : (w = ft.call(this._minWeekdaysParse, B), w !== -1 ? w : null)) : (w = ft.call(this._minWeekdaysParse, B), w !== -1 || (w = ft.call(this._weekdaysParse, B), w !== -1) ? w : (w = ft.call(this._shortWeekdaysParse, B), w !== -1 ? w : null));
        }
        function Uy(o, u, h) {
          var p, w, A;
          if (this._weekdaysParseExact) return Wy.call(this, o, u, h);
          for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), p = 0; p < 7; p++) {
            if (w = v([
              2e3,
              1
            ]).day(p), h && !this._fullWeekdaysParse[p] && (this._fullWeekdaysParse[p] = new RegExp("^" + this.weekdays(w, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[p] = new RegExp("^" + this.weekdaysShort(w, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[p] = new RegExp("^" + this.weekdaysMin(w, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[p] || (A = "^" + this.weekdays(w, "") + "|^" + this.weekdaysShort(w, "") + "|^" + this.weekdaysMin(w, ""), this._weekdaysParse[p] = new RegExp(A.replace(".", ""), "i")), h && u === "dddd" && this._fullWeekdaysParse[p].test(o)) return p;
            if (h && u === "ddd" && this._shortWeekdaysParse[p].test(o)) return p;
            if (h && u === "dd" && this._minWeekdaysParse[p].test(o)) return p;
            if (!h && this._weekdaysParse[p].test(o)) return p;
          }
        }
        function By(o) {
          if (!this.isValid()) return o != null ? this : NaN;
          var u = Zs(this, "Day");
          return o != null ? (o = Oy(o, this.localeData()), this.add(o - u, "d")) : u;
        }
        function zy(o) {
          if (!this.isValid()) return o != null ? this : NaN;
          var u = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return o == null ? u : this.add(o - u, "d");
        }
        function $y(o) {
          if (!this.isValid()) return o != null ? this : NaN;
          if (o != null) {
            var u = Iy(o, this.localeData());
            return this.day(this.day() % 7 ? u : u - 7);
          } else return this.day() || 7;
        }
        function Gy(o) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || zo.call(this), o ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Ly), this._weekdaysStrictRegex && o ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }
        function Zy(o) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || zo.call(this), o ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Yy), this._weekdaysShortStrictRegex && o ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }
        function qy(o) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || zo.call(this), o ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Fy), this._weekdaysMinStrictRegex && o ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }
        function zo() {
          function o(Nt, Fn) {
            return Fn.length - Nt.length;
          }
          var u = [], h = [], p = [], w = [], A, B, me, Ce, Fe;
          for (A = 0; A < 7; A++) B = v([
            2e3,
            1
          ]).day(A), me = An(this.weekdaysMin(B, "")), Ce = An(this.weekdaysShort(B, "")), Fe = An(this.weekdays(B, "")), u.push(me), h.push(Ce), p.push(Fe), w.push(me), w.push(Ce), w.push(Fe);
          u.sort(o), h.sort(o), p.sort(o), w.sort(o), this._weekdaysRegex = new RegExp("^(" + w.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        }
        function $o() {
          return this.hours() % 12 || 12;
        }
        function Qy() {
          return this.hours() || 24;
        }
        H("H", [
          "HH",
          2
        ], 0, "hour"), H("h", [
          "hh",
          2
        ], 0, $o), H("k", [
          "kk",
          2
        ], 0, Qy), H("hmm", 0, 0, function() {
          return "" + $o.apply(this) + j(this.minutes(), 2);
        }), H("hmmss", 0, 0, function() {
          return "" + $o.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2);
        }), H("Hmm", 0, 0, function() {
          return "" + this.hours() + j(this.minutes(), 2);
        }), H("Hmmss", 0, 0, function() {
          return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2);
        });
        function $u(o, u) {
          H(o, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), u);
          });
        }
        $u("a", true), $u("A", false);
        function Gu(o, u) {
          return u._meridiemParse;
        }
        ge("a", Gu), ge("A", Gu), ge("H", et, Vo), ge("h", et, rs), ge("k", et, rs), ge("HH", et, Ke), ge("hh", et, Ke), ge("kk", et, Ke), ge("hmm", Nu), ge("hmmss", Lu), ge("Hmm", Nu), ge("Hmmss", Lu), Ge([
          "H",
          "HH"
        ], yt), Ge([
          "k",
          "kk"
        ], function(o, u, h) {
          var p = Le(o);
          u[yt] = p === 24 ? 0 : p;
        }), Ge([
          "a",
          "A"
        ], function(o, u, h) {
          h._isPm = h._locale.isPM(o), h._meridiem = o;
        }), Ge([
          "h",
          "hh"
        ], function(o, u, h) {
          u[yt] = Le(o), b(h).bigHour = true;
        }), Ge("hmm", function(o, u, h) {
          var p = o.length - 2;
          u[yt] = Le(o.substr(0, p)), u[Xt] = Le(o.substr(p)), b(h).bigHour = true;
        }), Ge("hmmss", function(o, u, h) {
          var p = o.length - 4, w = o.length - 2;
          u[yt] = Le(o.substr(0, p)), u[Xt] = Le(o.substr(p, 2)), u[On] = Le(o.substr(w)), b(h).bigHour = true;
        }), Ge("Hmm", function(o, u, h) {
          var p = o.length - 2;
          u[yt] = Le(o.substr(0, p)), u[Xt] = Le(o.substr(p));
        }), Ge("Hmmss", function(o, u, h) {
          var p = o.length - 4, w = o.length - 2;
          u[yt] = Le(o.substr(0, p)), u[Xt] = Le(o.substr(p, 2)), u[On] = Le(o.substr(w));
        });
        function Xy(o) {
          return (o + "").toLowerCase().charAt(0) === "p";
        }
        var Jy = /[ap]\.?m?\.?/i, Ky = ss("Hours", true);
        function ev(o, u, h) {
          return o > 11 ? h ? "pm" : "PM" : h ? "am" : "AM";
        }
        var Zu = {
          calendar: Y,
          longDateFormat: ce,
          invalidDate: be,
          ordinal: le,
          dayOfMonthOrdinalParse: he,
          relativeTime: oe,
          months: py,
          monthsShort: Hu,
          week: My,
          weekdays: Py,
          weekdaysMin: Ny,
          weekdaysShort: zu,
          meridiemParse: Jy
        }, at = {}, Xs = {}, Js;
        function tv(o, u) {
          var h, p = Math.min(o.length, u.length);
          for (h = 0; h < p; h += 1) if (o[h] !== u[h]) return h;
          return p;
        }
        function qu(o) {
          return o && o.toLowerCase().replace("_", "-");
        }
        function nv(o) {
          for (var u = 0, h, p, w, A; u < o.length; ) {
            for (A = qu(o[u]).split("-"), h = A.length, p = qu(o[u + 1]), p = p ? p.split("-") : null; h > 0; ) {
              if (w = Ji(A.slice(0, h).join("-")), w) return w;
              if (p && p.length >= h && tv(A, p) >= h - 1) break;
              h--;
            }
            u++;
          }
          return Js;
        }
        function rv(o) {
          return !!(o && o.match("^[^/\\\\]*$"));
        }
        function Ji(o) {
          var u = null, h;
          if (at[o] === void 0 && t && t.exports && rv(o)) try {
            u = Js._abbr, h = mn, h("./locale/" + o), ar(u);
          } catch {
            at[o] = null;
          }
          return at[o];
        }
        function ar(o, u) {
          var h;
          return o && (d(u) ? h = Pn(o) : h = Go(o, u), h ? Js = h : typeof console < "u" && console.warn && console.warn("Locale " + o + " not found. Did you forget to load it?")), Js._abbr;
        }
        function Go(o, u) {
          if (u !== null) {
            var h, p = Zu;
            if (u.abbr = o, at[o] != null) ee("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), p = at[o]._config;
            else if (u.parentLocale != null) if (at[u.parentLocale] != null) p = at[u.parentLocale]._config;
            else if (h = Ji(u.parentLocale), h != null) p = h._config;
            else return Xs[u.parentLocale] || (Xs[u.parentLocale] = []), Xs[u.parentLocale].push({
              name: o,
              config: u
            }), null;
            return at[o] = new P(C(p, u)), Xs[o] && Xs[o].forEach(function(w) {
              Go(w.name, w.config);
            }), ar(o), at[o];
          } else return delete at[o], null;
        }
        function sv(o, u) {
          if (u != null) {
            var h, p, w = Zu;
            at[o] != null && at[o].parentLocale != null ? at[o].set(C(at[o]._config, u)) : (p = Ji(o), p != null && (w = p._config), u = C(w, u), p == null && (u.abbr = o), h = new P(u), h.parentLocale = at[o], at[o] = h), ar(o);
          } else at[o] != null && (at[o].parentLocale != null ? (at[o] = at[o].parentLocale, o === ar() && ar(o)) : at[o] != null && delete at[o]);
          return at[o];
        }
        function Pn(o) {
          var u;
          if (o && o._locale && o._locale._abbr && (o = o._locale._abbr), !o) return Js;
          if (!i(o)) {
            if (u = Ji(o), u) return u;
            o = [
              o
            ];
          }
          return nv(o);
        }
        function iv() {
          return W(at);
        }
        function Zo(o) {
          var u, h = o._a;
          return h && b(o).overflow === -2 && (u = h[Rn] < 0 || h[Rn] > 11 ? Rn : h[yn] < 1 || h[yn] > Uo(h[Mt], h[Rn]) ? yn : h[yt] < 0 || h[yt] > 24 || h[yt] === 24 && (h[Xt] !== 0 || h[On] !== 0 || h[Ir] !== 0) ? yt : h[Xt] < 0 || h[Xt] > 59 ? Xt : h[On] < 0 || h[On] > 59 ? On : h[Ir] < 0 || h[Ir] > 999 ? Ir : -1, b(o)._overflowDayOfYear && (u < Mt || u > yn) && (u = yn), b(o)._overflowWeeks && u === -1 && (u = cy), b(o)._overflowWeekday && u === -1 && (u = uy), b(o).overflow = u), o;
        }
        var av = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ov = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, lv = /Z|[+-]\d\d(?::?\d\d)?/, Ki = [
          [
            "YYYYYY-MM-DD",
            /[+-]\d{6}-\d\d-\d\d/
          ],
          [
            "YYYY-MM-DD",
            /\d{4}-\d\d-\d\d/
          ],
          [
            "GGGG-[W]WW-E",
            /\d{4}-W\d\d-\d/
          ],
          [
            "GGGG-[W]WW",
            /\d{4}-W\d\d/,
            false
          ],
          [
            "YYYY-DDD",
            /\d{4}-\d{3}/
          ],
          [
            "YYYY-MM",
            /\d{4}-\d\d/,
            false
          ],
          [
            "YYYYYYMMDD",
            /[+-]\d{10}/
          ],
          [
            "YYYYMMDD",
            /\d{8}/
          ],
          [
            "GGGG[W]WWE",
            /\d{4}W\d{3}/
          ],
          [
            "GGGG[W]WW",
            /\d{4}W\d{2}/,
            false
          ],
          [
            "YYYYDDD",
            /\d{7}/
          ],
          [
            "YYYYMM",
            /\d{6}/,
            false
          ],
          [
            "YYYY",
            /\d{4}/,
            false
          ]
        ], qo = [
          [
            "HH:mm:ss.SSSS",
            /\d\d:\d\d:\d\d\.\d+/
          ],
          [
            "HH:mm:ss,SSSS",
            /\d\d:\d\d:\d\d,\d+/
          ],
          [
            "HH:mm:ss",
            /\d\d:\d\d:\d\d/
          ],
          [
            "HH:mm",
            /\d\d:\d\d/
          ],
          [
            "HHmmss.SSSS",
            /\d\d\d\d\d\d\.\d+/
          ],
          [
            "HHmmss,SSSS",
            /\d\d\d\d\d\d,\d+/
          ],
          [
            "HHmmss",
            /\d\d\d\d\d\d/
          ],
          [
            "HHmm",
            /\d\d\d\d/
          ],
          [
            "HH",
            /\d\d/
          ]
        ], cv = /^\/?Date\((-?\d+)/i, uv = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, dv = {
          UT: 0,
          GMT: 0,
          EDT: -240,
          EST: -300,
          CDT: -300,
          CST: -360,
          MDT: -360,
          MST: -420,
          PDT: -420,
          PST: -480
        };
        function Qu(o) {
          var u, h, p = o._i, w = av.exec(p) || ov.exec(p), A, B, me, Ce, Fe = Ki.length, Nt = qo.length;
          if (w) {
            for (b(o).iso = true, u = 0, h = Fe; u < h; u++) if (Ki[u][1].exec(w[1])) {
              B = Ki[u][0], A = Ki[u][2] !== false;
              break;
            }
            if (B == null) {
              o._isValid = false;
              return;
            }
            if (w[3]) {
              for (u = 0, h = Nt; u < h; u++) if (qo[u][1].exec(w[3])) {
                me = (w[2] || " ") + qo[u][0];
                break;
              }
              if (me == null) {
                o._isValid = false;
                return;
              }
            }
            if (!A && me != null) {
              o._isValid = false;
              return;
            }
            if (w[4]) if (lv.exec(w[4])) Ce = "Z";
            else {
              o._isValid = false;
              return;
            }
            o._f = B + (me || "") + (Ce || ""), Xo(o);
          } else o._isValid = false;
        }
        function fv(o, u, h, p, w, A) {
          var B = [
            hv(o),
            Hu.indexOf(u),
            parseInt(h, 10),
            parseInt(p, 10),
            parseInt(w, 10)
          ];
          return A && B.push(parseInt(A, 10)), B;
        }
        function hv(o) {
          var u = parseInt(o, 10);
          return u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u;
        }
        function mv(o) {
          return o.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function pv(o, u, h) {
          if (o) {
            var p = zu.indexOf(o), w = new Date(u[0], u[1], u[2]).getDay();
            if (p !== w) return b(h).weekdayMismatch = true, h._isValid = false, false;
          }
          return true;
        }
        function gv(o, u, h) {
          if (o) return dv[o];
          if (u) return 0;
          var p = parseInt(h, 10), w = p % 100, A = (p - w) / 100;
          return A * 60 + w;
        }
        function Xu(o) {
          var u = uv.exec(mv(o._i)), h;
          if (u) {
            if (h = fv(u[4], u[3], u[2], u[5], u[6], u[7]), !pv(u[1], h, o)) return;
            o._a = h, o._tzm = gv(u[8], u[9], u[10]), o._d = qs.apply(null, o._a), o._d.setUTCMinutes(o._d.getUTCMinutes() - o._tzm), b(o).rfc2822 = true;
          } else o._isValid = false;
        }
        function yv(o) {
          var u = cv.exec(o._i);
          if (u !== null) {
            o._d = /* @__PURE__ */ new Date(+u[1]);
            return;
          }
          if (Qu(o), o._isValid === false) delete o._isValid;
          else return;
          if (Xu(o), o._isValid === false) delete o._isValid;
          else return;
          o._strict ? o._isValid = false : r.createFromInputFallback(o);
        }
        r.createFromInputFallback = U("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(o) {
          o._d = /* @__PURE__ */ new Date(o._i + (o._useUTC ? " UTC" : ""));
        });
        function is(o, u, h) {
          return o ?? u ?? h;
        }
        function vv(o) {
          var u = new Date(r.now());
          return o._useUTC ? [
            u.getUTCFullYear(),
            u.getUTCMonth(),
            u.getUTCDate()
          ] : [
            u.getFullYear(),
            u.getMonth(),
            u.getDate()
          ];
        }
        function Qo(o) {
          var u, h, p = [], w, A, B;
          if (!o._d) {
            for (w = vv(o), o._w && o._a[yn] == null && o._a[Rn] == null && bv(o), o._dayOfYear != null && (B = is(o._a[Mt], w[Mt]), (o._dayOfYear > Gs(B) || o._dayOfYear === 0) && (b(o)._overflowDayOfYear = true), h = qs(B, 0, o._dayOfYear), o._a[Rn] = h.getUTCMonth(), o._a[yn] = h.getUTCDate()), u = 0; u < 3 && o._a[u] == null; ++u) o._a[u] = p[u] = w[u];
            for (; u < 7; u++) o._a[u] = p[u] = o._a[u] == null ? u === 2 ? 1 : 0 : o._a[u];
            o._a[yt] === 24 && o._a[Xt] === 0 && o._a[On] === 0 && o._a[Ir] === 0 && (o._nextDay = true, o._a[yt] = 0), o._d = (o._useUTC ? qs : Ty).apply(null, p), A = o._useUTC ? o._d.getUTCDay() : o._d.getDay(), o._tzm != null && o._d.setUTCMinutes(o._d.getUTCMinutes() - o._tzm), o._nextDay && (o._a[yt] = 24), o._w && typeof o._w.d < "u" && o._w.d !== A && (b(o).weekdayMismatch = true);
          }
        }
        function bv(o) {
          var u, h, p, w, A, B, me, Ce, Fe;
          u = o._w, u.GG != null || u.W != null || u.E != null ? (A = 1, B = 4, h = is(u.GG, o._a[Mt], Qs(tt(), 1, 4).year), p = is(u.W, 1), w = is(u.E, 1), (w < 1 || w > 7) && (Ce = true)) : (A = o._locale._week.dow, B = o._locale._week.doy, Fe = Qs(tt(), A, B), h = is(u.gg, o._a[Mt], Fe.year), p = is(u.w, Fe.week), u.d != null ? (w = u.d, (w < 0 || w > 6) && (Ce = true)) : u.e != null ? (w = u.e + A, (u.e < 0 || u.e > 6) && (Ce = true)) : w = A), p < 1 || p > In(h, A, B) ? b(o)._overflowWeeks = true : Ce != null ? b(o)._overflowWeekday = true : (me = Bu(h, p, w, A, B), o._a[Mt] = me.year, o._dayOfYear = me.dayOfYear);
        }
        r.ISO_8601 = function() {
        }, r.RFC_2822 = function() {
        };
        function Xo(o) {
          if (o._f === r.ISO_8601) {
            Qu(o);
            return;
          }
          if (o._f === r.RFC_2822) {
            Xu(o);
            return;
          }
          o._a = [], b(o).empty = true;
          var u = "" + o._i, h, p, w, A, B, me = u.length, Ce = 0, Fe, Nt;
          for (w = Q(o._f, o._locale).match(z) || [], Nt = w.length, h = 0; h < Nt; h++) A = w[h], p = (u.match(ay(A, o)) || [])[0], p && (B = u.substr(0, u.indexOf(p)), B.length > 0 && b(o).unusedInput.push(B), u = u.slice(u.indexOf(p) + p.length), Ce += p.length), se[A] ? (p ? b(o).empty = false : b(o).unusedTokens.push(A), ly(A, p, o)) : o._strict && !p && b(o).unusedTokens.push(A);
          b(o).charsLeftOver = me - Ce, u.length > 0 && b(o).unusedInput.push(u), o._a[yt] <= 12 && b(o).bigHour === true && o._a[yt] > 0 && (b(o).bigHour = void 0), b(o).parsedDateParts = o._a.slice(0), b(o).meridiem = o._meridiem, o._a[yt] = wv(o._locale, o._a[yt], o._meridiem), Fe = b(o).era, Fe !== null && (o._a[Mt] = o._locale.erasConvertYear(Fe, o._a[Mt])), Qo(o), Zo(o);
        }
        function wv(o, u, h) {
          var p;
          return h == null ? u : o.meridiemHour != null ? o.meridiemHour(u, h) : (o.isPM != null && (p = o.isPM(h), p && u < 12 && (u += 12), !p && u === 12 && (u = 0)), u);
        }
        function Sv(o) {
          var u, h, p, w, A, B, me = false, Ce = o._f.length;
          if (Ce === 0) {
            b(o).invalidFormat = true, o._d = /* @__PURE__ */ new Date(NaN);
            return;
          }
          for (w = 0; w < Ce; w++) A = 0, B = false, u = N({}, o), o._useUTC != null && (u._useUTC = o._useUTC), u._f = o._f[w], Xo(u), E(u) && (B = true), A += b(u).charsLeftOver, A += b(u).unusedTokens.length * 10, b(u).score = A, me ? A < p && (p = A, h = u) : (p == null || A < p || B) && (p = A, h = u, B && (me = true));
          y(o, h || u);
        }
        function _v(o) {
          if (!o._d) {
            var u = kt(o._i), h = u.day === void 0 ? u.date : u.day;
            o._a = g([
              u.year,
              u.month,
              h,
              u.hour,
              u.minute,
              u.second,
              u.millisecond
            ], function(p) {
              return p && parseInt(p, 10);
            }), Qo(o);
          }
        }
        function Dv(o) {
          var u = new I(Zo(Ju(o)));
          return u._nextDay && (u.add(1, "d"), u._nextDay = void 0), u;
        }
        function Ju(o) {
          var u = o._i, h = o._f;
          return o._locale = o._locale || Pn(o._l), u === null || h === void 0 && u === "" ? R({
            nullInput: true
          }) : (typeof u == "string" && (o._i = u = o._locale.preparse(u)), O(u) ? new I(Zo(u)) : (m(u) ? o._d = u : i(h) ? Sv(o) : h ? Xo(o) : kv(o), E(o) || (o._d = null), o));
        }
        function kv(o) {
          var u = o._i;
          d(u) ? o._d = new Date(r.now()) : m(u) ? o._d = new Date(u.valueOf()) : typeof u == "string" ? yv(o) : i(u) ? (o._a = g(u.slice(0), function(h) {
            return parseInt(h, 10);
          }), Qo(o)) : a(u) ? _v(o) : f(u) ? o._d = new Date(u) : r.createFromInputFallback(o);
        }
        function Ku(o, u, h, p, w) {
          var A = {};
          return (u === true || u === false) && (p = u, u = void 0), (h === true || h === false) && (p = h, h = void 0), (a(o) && c(o) || i(o) && o.length === 0) && (o = void 0), A._isAMomentObject = true, A._useUTC = A._isUTC = w, A._l = h, A._i = o, A._f = u, A._strict = p, Dv(A);
        }
        function tt(o, u, h, p) {
          return Ku(o, u, h, p, false);
        }
        var Tv = U("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var o = tt.apply(null, arguments);
          return this.isValid() && o.isValid() ? o < this ? this : o : R();
        }), xv = U("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var o = tt.apply(null, arguments);
          return this.isValid() && o.isValid() ? o > this ? this : o : R();
        });
        function ed(o, u) {
          var h, p;
          if (u.length === 1 && i(u[0]) && (u = u[0]), !u.length) return tt();
          for (h = u[0], p = 1; p < u.length; ++p) (!u[p].isValid() || u[p][o](h)) && (h = u[p]);
          return h;
        }
        function Mv() {
          var o = [].slice.call(arguments, 0);
          return ed("isBefore", o);
        }
        function Ev() {
          var o = [].slice.call(arguments, 0);
          return ed("isAfter", o);
        }
        var Cv = function() {
          return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
        }, Ks = [
          "year",
          "quarter",
          "month",
          "week",
          "day",
          "hour",
          "minute",
          "second",
          "millisecond"
        ];
        function Av(o) {
          var u, h = false, p, w = Ks.length;
          for (u in o) if (l(o, u) && !(ft.call(Ks, u) !== -1 && (o[u] == null || !isNaN(o[u])))) return false;
          for (p = 0; p < w; ++p) if (o[Ks[p]]) {
            if (h) return false;
            parseFloat(o[Ks[p]]) !== Le(o[Ks[p]]) && (h = true);
          }
          return true;
        }
        function Rv() {
          return this._isValid;
        }
        function Ov() {
          return Jt(NaN);
        }
        function ea(o) {
          var u = kt(o), h = u.year || 0, p = u.quarter || 0, w = u.month || 0, A = u.week || u.isoWeek || 0, B = u.day || 0, me = u.hour || 0, Ce = u.minute || 0, Fe = u.second || 0, Nt = u.millisecond || 0;
          this._isValid = Av(u), this._milliseconds = +Nt + Fe * 1e3 + Ce * 6e4 + me * 1e3 * 60 * 60, this._days = +B + A * 7, this._months = +w + p * 3 + h * 12, this._data = {}, this._locale = Pn(), this._bubble();
        }
        function ta(o) {
          return o instanceof ea;
        }
        function Jo(o) {
          return o < 0 ? Math.round(-1 * o) * -1 : Math.round(o);
        }
        function Iv(o, u, h) {
          var p = Math.min(o.length, u.length), w = Math.abs(o.length - u.length), A = 0, B;
          for (B = 0; B < p; B++) Le(o[B]) !== Le(u[B]) && A++;
          return A + w;
        }
        function td(o, u) {
          H(o, 0, 0, function() {
            var h = this.utcOffset(), p = "+";
            return h < 0 && (h = -h, p = "-"), p + j(~~(h / 60), 2) + u + j(~~h % 60, 2);
          });
        }
        td("Z", ":"), td("ZZ", ""), ge("Z", Zi), ge("ZZ", Zi), Ge([
          "Z",
          "ZZ"
        ], function(o, u, h) {
          h._useUTC = true, h._tzm = Ko(Zi, o);
        });
        var Pv = /([\+\-]|\d\d)/gi;
        function Ko(o, u) {
          var h = (u || "").match(o), p, w, A;
          return h === null ? null : (p = h[h.length - 1] || [], w = (p + "").match(Pv) || [
            "-",
            0,
            0
          ], A = +(w[1] * 60) + Le(w[2]), A === 0 ? 0 : w[0] === "+" ? A : -A);
        }
        function el(o, u) {
          var h, p;
          return u._isUTC ? (h = u.clone(), p = (O(o) || m(o) ? o.valueOf() : tt(o).valueOf()) - h.valueOf(), h._d.setTime(h._d.valueOf() + p), r.updateOffset(h, false), h) : tt(o).local();
        }
        function tl(o) {
          return -Math.round(o._d.getTimezoneOffset());
        }
        r.updateOffset = function() {
        };
        function Nv(o, u, h) {
          var p = this._offset || 0, w;
          if (!this.isValid()) return o != null ? this : NaN;
          if (o != null) {
            if (typeof o == "string") {
              if (o = Ko(Zi, o), o === null) return this;
            } else Math.abs(o) < 16 && !h && (o = o * 60);
            return !this._isUTC && u && (w = tl(this)), this._offset = o, this._isUTC = true, w != null && this.add(w, "m"), p !== o && (!u || this._changeInProgress ? id(this, Jt(o - p, "m"), 1, false) : this._changeInProgress || (this._changeInProgress = true, r.updateOffset(this, true), this._changeInProgress = null)), this;
          } else return this._isUTC ? p : tl(this);
        }
        function Lv(o, u) {
          return o != null ? (typeof o != "string" && (o = -o), this.utcOffset(o, u), this) : -this.utcOffset();
        }
        function Yv(o) {
          return this.utcOffset(0, o);
        }
        function Fv(o) {
          return this._isUTC && (this.utcOffset(0, o), this._isUTC = false, o && this.subtract(tl(this), "m")), this;
        }
        function Hv() {
          if (this._tzm != null) this.utcOffset(this._tzm, false, true);
          else if (typeof this._i == "string") {
            var o = Ko(sy, this._i);
            o != null ? this.utcOffset(o) : this.utcOffset(0, true);
          }
          return this;
        }
        function jv(o) {
          return this.isValid() ? (o = o ? tt(o).utcOffset() : 0, (this.utcOffset() - o) % 60 === 0) : false;
        }
        function Vv() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function Wv() {
          if (!d(this._isDSTShifted)) return this._isDSTShifted;
          var o = {}, u;
          return N(o, this), o = Ju(o), o._a ? (u = o._isUTC ? v(o._a) : tt(o._a), this._isDSTShifted = this.isValid() && Iv(o._a, u.toArray()) > 0) : this._isDSTShifted = false, this._isDSTShifted;
        }
        function Uv() {
          return this.isValid() ? !this._isUTC : false;
        }
        function Bv() {
          return this.isValid() ? this._isUTC : false;
        }
        function nd() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var zv = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, $v = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Jt(o, u) {
          var h = o, p = null, w, A, B;
          return ta(o) ? h = {
            ms: o._milliseconds,
            d: o._days,
            M: o._months
          } : f(o) || !isNaN(+o) ? (h = {}, u ? h[u] = +o : h.milliseconds = +o) : (p = zv.exec(o)) ? (w = p[1] === "-" ? -1 : 1, h = {
            y: 0,
            d: Le(p[yn]) * w,
            h: Le(p[yt]) * w,
            m: Le(p[Xt]) * w,
            s: Le(p[On]) * w,
            ms: Le(Jo(p[Ir] * 1e3)) * w
          }) : (p = $v.exec(o)) ? (w = p[1] === "-" ? -1 : 1, h = {
            y: Pr(p[2], w),
            M: Pr(p[3], w),
            w: Pr(p[4], w),
            d: Pr(p[5], w),
            h: Pr(p[6], w),
            m: Pr(p[7], w),
            s: Pr(p[8], w)
          }) : h == null ? h = {} : typeof h == "object" && ("from" in h || "to" in h) && (B = Gv(tt(h.from), tt(h.to)), h = {}, h.ms = B.milliseconds, h.M = B.months), A = new ea(h), ta(o) && l(o, "_locale") && (A._locale = o._locale), ta(o) && l(o, "_isValid") && (A._isValid = o._isValid), A;
        }
        Jt.fn = ea.prototype, Jt.invalid = Ov;
        function Pr(o, u) {
          var h = o && parseFloat(o.replace(",", "."));
          return (isNaN(h) ? 0 : h) * u;
        }
        function rd(o, u) {
          var h = {};
          return h.months = u.month() - o.month() + (u.year() - o.year()) * 12, o.clone().add(h.months, "M").isAfter(u) && --h.months, h.milliseconds = +u - +o.clone().add(h.months, "M"), h;
        }
        function Gv(o, u) {
          var h;
          return o.isValid() && u.isValid() ? (u = el(u, o), o.isBefore(u) ? h = rd(o, u) : (h = rd(u, o), h.milliseconds = -h.milliseconds, h.months = -h.months), h) : {
            milliseconds: 0,
            months: 0
          };
        }
        function sd(o, u) {
          return function(h, p) {
            var w, A;
            return p !== null && !isNaN(+p) && (ee(u, "moment()." + u + "(period, number) is deprecated. Please use moment()." + u + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), A = h, h = p, p = A), w = Jt(h, p), id(this, w, o), this;
          };
        }
        function id(o, u, h, p) {
          var w = u._milliseconds, A = Jo(u._days), B = Jo(u._months);
          o.isValid() && (p = p ?? true, B && Vu(o, Zs(o, "Month") + B * h), A && Fu(o, "Date", Zs(o, "Date") + A * h), w && o._d.setTime(o._d.valueOf() + w * h), p && r.updateOffset(o, A || B));
        }
        var Zv = sd(1, "add"), qv = sd(-1, "subtract");
        function ad(o) {
          return typeof o == "string" || o instanceof String;
        }
        function Qv(o) {
          return O(o) || m(o) || ad(o) || f(o) || Jv(o) || Xv(o) || o === null || o === void 0;
        }
        function Xv(o) {
          var u = a(o) && !c(o), h = false, p = [
            "years",
            "year",
            "y",
            "months",
            "month",
            "M",
            "days",
            "day",
            "d",
            "dates",
            "date",
            "D",
            "hours",
            "hour",
            "h",
            "minutes",
            "minute",
            "m",
            "seconds",
            "second",
            "s",
            "milliseconds",
            "millisecond",
            "ms"
          ], w, A, B = p.length;
          for (w = 0; w < B; w += 1) A = p[w], h = h || l(o, A);
          return u && h;
        }
        function Jv(o) {
          var u = i(o), h = false;
          return u && (h = o.filter(function(p) {
            return !f(p) && ad(o);
          }).length === 0), u && h;
        }
        function Kv(o) {
          var u = a(o) && !c(o), h = false, p = [
            "sameDay",
            "nextDay",
            "lastDay",
            "nextWeek",
            "lastWeek",
            "sameElse"
          ], w, A;
          for (w = 0; w < p.length; w += 1) A = p[w], h = h || l(o, A);
          return u && h;
        }
        function eb(o, u) {
          var h = o.diff(u, "days", true);
          return h < -6 ? "sameElse" : h < -1 ? "lastWeek" : h < 0 ? "lastDay" : h < 1 ? "sameDay" : h < 2 ? "nextDay" : h < 7 ? "nextWeek" : "sameElse";
        }
        function tb(o, u) {
          arguments.length === 1 && (arguments[0] ? Qv(arguments[0]) ? (o = arguments[0], u = void 0) : Kv(arguments[0]) && (u = arguments[0], o = void 0) : (o = void 0, u = void 0));
          var h = o || tt(), p = el(h, this).startOf("day"), w = r.calendarFormat(this, p) || "sameElse", A = u && (Z(u[w]) ? u[w].call(this, h) : u[w]);
          return this.format(A || this.localeData().calendar(w, this, tt(h)));
        }
        function nb() {
          return new I(this);
        }
        function rb(o, u) {
          var h = O(o) ? o : tt(o);
          return this.isValid() && h.isValid() ? (u = Se(u) || "millisecond", u === "millisecond" ? this.valueOf() > h.valueOf() : h.valueOf() < this.clone().startOf(u).valueOf()) : false;
        }
        function sb(o, u) {
          var h = O(o) ? o : tt(o);
          return this.isValid() && h.isValid() ? (u = Se(u) || "millisecond", u === "millisecond" ? this.valueOf() < h.valueOf() : this.clone().endOf(u).valueOf() < h.valueOf()) : false;
        }
        function ib(o, u, h, p) {
          var w = O(o) ? o : tt(o), A = O(u) ? u : tt(u);
          return this.isValid() && w.isValid() && A.isValid() ? (p = p || "()", (p[0] === "(" ? this.isAfter(w, h) : !this.isBefore(w, h)) && (p[1] === ")" ? this.isBefore(A, h) : !this.isAfter(A, h))) : false;
        }
        function ab(o, u) {
          var h = O(o) ? o : tt(o), p;
          return this.isValid() && h.isValid() ? (u = Se(u) || "millisecond", u === "millisecond" ? this.valueOf() === h.valueOf() : (p = h.valueOf(), this.clone().startOf(u).valueOf() <= p && p <= this.clone().endOf(u).valueOf())) : false;
        }
        function ob(o, u) {
          return this.isSame(o, u) || this.isAfter(o, u);
        }
        function lb(o, u) {
          return this.isSame(o, u) || this.isBefore(o, u);
        }
        function cb(o, u, h) {
          var p, w, A;
          if (!this.isValid()) return NaN;
          if (p = el(o, this), !p.isValid()) return NaN;
          switch (w = (p.utcOffset() - this.utcOffset()) * 6e4, u = Se(u), u) {
            case "year":
              A = na(this, p) / 12;
              break;
            case "month":
              A = na(this, p);
              break;
            case "quarter":
              A = na(this, p) / 3;
              break;
            case "second":
              A = (this - p) / 1e3;
              break;
            case "minute":
              A = (this - p) / 6e4;
              break;
            case "hour":
              A = (this - p) / 36e5;
              break;
            case "day":
              A = (this - p - w) / 864e5;
              break;
            case "week":
              A = (this - p - w) / 6048e5;
              break;
            default:
              A = this - p;
          }
          return h ? A : zt(A);
        }
        function na(o, u) {
          if (o.date() < u.date()) return -na(u, o);
          var h = (u.year() - o.year()) * 12 + (u.month() - o.month()), p = o.clone().add(h, "months"), w, A;
          return u - p < 0 ? (w = o.clone().add(h - 1, "months"), A = (u - p) / (p - w)) : (w = o.clone().add(h + 1, "months"), A = (u - p) / (w - p)), -(h + A) || 0;
        }
        r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function ub() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function db(o) {
          if (!this.isValid()) return null;
          var u = o !== true, h = u ? this.clone().utc() : this;
          return h.year() < 0 || h.year() > 9999 ? q(h, u ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Z(Date.prototype.toISOString) ? u ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", q(h, "Z")) : q(h, u ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        function fb() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var o = "moment", u = "", h, p, w, A;
          return this.isLocal() || (o = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", u = "Z"), h = "[" + o + '("]', p = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", w = "-MM-DD[T]HH:mm:ss.SSS", A = u + '[")]', this.format(h + p + w + A);
        }
        function hb(o) {
          o || (o = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
          var u = q(this, o);
          return this.localeData().postformat(u);
        }
        function mb(o, u) {
          return this.isValid() && (O(o) && o.isValid() || tt(o).isValid()) ? Jt({
            to: this,
            from: o
          }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
        }
        function pb(o) {
          return this.from(tt(), o);
        }
        function gb(o, u) {
          return this.isValid() && (O(o) && o.isValid() || tt(o).isValid()) ? Jt({
            from: this,
            to: o
          }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
        }
        function yb(o) {
          return this.to(tt(), o);
        }
        function od(o) {
          var u;
          return o === void 0 ? this._locale._abbr : (u = Pn(o), u != null && (this._locale = u), this);
        }
        var ld = U("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(o) {
          return o === void 0 ? this.localeData() : this.locale(o);
        });
        function cd() {
          return this._locale;
        }
        var ra = 1e3, as = 60 * ra, sa = 60 * as, ud = (365 * 400 + 97) * 24 * sa;
        function os(o, u) {
          return (o % u + u) % u;
        }
        function dd(o, u, h) {
          return o < 100 && o >= 0 ? new Date(o + 400, u, h) - ud : new Date(o, u, h).valueOf();
        }
        function fd(o, u, h) {
          return o < 100 && o >= 0 ? Date.UTC(o + 400, u, h) - ud : Date.UTC(o, u, h);
        }
        function vb(o) {
          var u, h;
          if (o = Se(o), o === void 0 || o === "millisecond" || !this.isValid()) return this;
          switch (h = this._isUTC ? fd : dd, o) {
            case "year":
              u = h(this.year(), 0, 1);
              break;
            case "quarter":
              u = h(this.year(), this.month() - this.month() % 3, 1);
              break;
            case "month":
              u = h(this.year(), this.month(), 1);
              break;
            case "week":
              u = h(this.year(), this.month(), this.date() - this.weekday());
              break;
            case "isoWeek":
              u = h(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
              break;
            case "day":
            case "date":
              u = h(this.year(), this.month(), this.date());
              break;
            case "hour":
              u = this._d.valueOf(), u -= os(u + (this._isUTC ? 0 : this.utcOffset() * as), sa);
              break;
            case "minute":
              u = this._d.valueOf(), u -= os(u, as);
              break;
            case "second":
              u = this._d.valueOf(), u -= os(u, ra);
              break;
          }
          return this._d.setTime(u), r.updateOffset(this, true), this;
        }
        function bb(o) {
          var u, h;
          if (o = Se(o), o === void 0 || o === "millisecond" || !this.isValid()) return this;
          switch (h = this._isUTC ? fd : dd, o) {
            case "year":
              u = h(this.year() + 1, 0, 1) - 1;
              break;
            case "quarter":
              u = h(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
              break;
            case "month":
              u = h(this.year(), this.month() + 1, 1) - 1;
              break;
            case "week":
              u = h(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
              break;
            case "isoWeek":
              u = h(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
              break;
            case "day":
            case "date":
              u = h(this.year(), this.month(), this.date() + 1) - 1;
              break;
            case "hour":
              u = this._d.valueOf(), u += sa - os(u + (this._isUTC ? 0 : this.utcOffset() * as), sa) - 1;
              break;
            case "minute":
              u = this._d.valueOf(), u += as - os(u, as) - 1;
              break;
            case "second":
              u = this._d.valueOf(), u += ra - os(u, ra) - 1;
              break;
          }
          return this._d.setTime(u), r.updateOffset(this, true), this;
        }
        function wb() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function Sb() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function _b() {
          return new Date(this.valueOf());
        }
        function Db() {
          var o = this;
          return [
            o.year(),
            o.month(),
            o.date(),
            o.hour(),
            o.minute(),
            o.second(),
            o.millisecond()
          ];
        }
        function kb() {
          var o = this;
          return {
            years: o.year(),
            months: o.month(),
            date: o.date(),
            hours: o.hours(),
            minutes: o.minutes(),
            seconds: o.seconds(),
            milliseconds: o.milliseconds()
          };
        }
        function Tb() {
          return this.isValid() ? this.toISOString() : null;
        }
        function xb() {
          return E(this);
        }
        function Mb() {
          return y({}, b(this));
        }
        function Eb() {
          return b(this).overflow;
        }
        function Cb() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        H("N", 0, 0, "eraAbbr"), H("NN", 0, 0, "eraAbbr"), H("NNN", 0, 0, "eraAbbr"), H("NNNN", 0, 0, "eraName"), H("NNNNN", 0, 0, "eraNarrow"), H("y", [
          "y",
          1
        ], "yo", "eraYear"), H("y", [
          "yy",
          2
        ], 0, "eraYear"), H("y", [
          "yyy",
          3
        ], 0, "eraYear"), H("y", [
          "yyyy",
          4
        ], 0, "eraYear"), ge("N", nl), ge("NN", nl), ge("NNN", nl), ge("NNNN", jb), ge("NNNNN", Vb), Ge([
          "N",
          "NN",
          "NNN",
          "NNNN",
          "NNNNN"
        ], function(o, u, h, p) {
          var w = h._locale.erasParse(o, p, h._strict);
          w ? b(h).era = w : b(h).invalidEra = o;
        }), ge("y", ns), ge("yy", ns), ge("yyy", ns), ge("yyyy", ns), ge("yo", Wb), Ge([
          "y",
          "yy",
          "yyy",
          "yyyy"
        ], Mt), Ge([
          "yo"
        ], function(o, u, h, p) {
          var w;
          h._locale._eraYearOrdinalRegex && (w = o.match(h._locale._eraYearOrdinalRegex)), h._locale.eraYearOrdinalParse ? u[Mt] = h._locale.eraYearOrdinalParse(o, w) : u[Mt] = parseInt(o, 10);
        });
        function Ab(o, u) {
          var h, p, w, A = this._eras || Pn("en")._eras;
          for (h = 0, p = A.length; h < p; ++h) switch (typeof A[h].since === "string" && (w = r(A[h].since).startOf("day"), A[h].since = w.valueOf()), typeof A[h].until) {
            case "undefined":
              A[h].until = 1 / 0;
              break;
            case "string":
              w = r(A[h].until).startOf("day").valueOf(), A[h].until = w.valueOf();
              break;
          }
          return A;
        }
        function Rb(o, u, h) {
          var p, w, A = this.eras(), B, me, Ce;
          for (o = o.toUpperCase(), p = 0, w = A.length; p < w; ++p) if (B = A[p].name.toUpperCase(), me = A[p].abbr.toUpperCase(), Ce = A[p].narrow.toUpperCase(), h) switch (u) {
            case "N":
            case "NN":
            case "NNN":
              if (me === o) return A[p];
              break;
            case "NNNN":
              if (B === o) return A[p];
              break;
            case "NNNNN":
              if (Ce === o) return A[p];
              break;
          }
          else if ([
            B,
            me,
            Ce
          ].indexOf(o) >= 0) return A[p];
        }
        function Ob(o, u) {
          var h = o.since <= o.until ? 1 : -1;
          return u === void 0 ? r(o.since).year() : r(o.since).year() + (u - o.offset) * h;
        }
        function Ib() {
          var o, u, h, p = this.localeData().eras();
          for (o = 0, u = p.length; o < u; ++o) if (h = this.clone().startOf("day").valueOf(), p[o].since <= h && h <= p[o].until || p[o].until <= h && h <= p[o].since) return p[o].name;
          return "";
        }
        function Pb() {
          var o, u, h, p = this.localeData().eras();
          for (o = 0, u = p.length; o < u; ++o) if (h = this.clone().startOf("day").valueOf(), p[o].since <= h && h <= p[o].until || p[o].until <= h && h <= p[o].since) return p[o].narrow;
          return "";
        }
        function Nb() {
          var o, u, h, p = this.localeData().eras();
          for (o = 0, u = p.length; o < u; ++o) if (h = this.clone().startOf("day").valueOf(), p[o].since <= h && h <= p[o].until || p[o].until <= h && h <= p[o].since) return p[o].abbr;
          return "";
        }
        function Lb() {
          var o, u, h, p, w = this.localeData().eras();
          for (o = 0, u = w.length; o < u; ++o) if (h = w[o].since <= w[o].until ? 1 : -1, p = this.clone().startOf("day").valueOf(), w[o].since <= p && p <= w[o].until || w[o].until <= p && p <= w[o].since) return (this.year() - r(w[o].since).year()) * h + w[o].offset;
          return this.year();
        }
        function Yb(o) {
          return l(this, "_erasNameRegex") || rl.call(this), o ? this._erasNameRegex : this._erasRegex;
        }
        function Fb(o) {
          return l(this, "_erasAbbrRegex") || rl.call(this), o ? this._erasAbbrRegex : this._erasRegex;
        }
        function Hb(o) {
          return l(this, "_erasNarrowRegex") || rl.call(this), o ? this._erasNarrowRegex : this._erasRegex;
        }
        function nl(o, u) {
          return u.erasAbbrRegex(o);
        }
        function jb(o, u) {
          return u.erasNameRegex(o);
        }
        function Vb(o, u) {
          return u.erasNarrowRegex(o);
        }
        function Wb(o, u) {
          return u._eraYearOrdinalRegex || ns;
        }
        function rl() {
          var o = [], u = [], h = [], p = [], w, A, B, me, Ce, Fe = this.eras();
          for (w = 0, A = Fe.length; w < A; ++w) B = An(Fe[w].name), me = An(Fe[w].abbr), Ce = An(Fe[w].narrow), u.push(B), o.push(me), h.push(Ce), p.push(B), p.push(me), p.push(Ce);
          this._erasRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + h.join("|") + ")", "i");
        }
        H(0, [
          "gg",
          2
        ], 0, function() {
          return this.weekYear() % 100;
        }), H(0, [
          "GG",
          2
        ], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function ia(o, u) {
          H(0, [
            o,
            o.length
          ], 0, u);
        }
        ia("gggg", "weekYear"), ia("ggggg", "weekYear"), ia("GGGG", "isoWeekYear"), ia("GGGGG", "isoWeekYear"), ge("G", Gi), ge("g", Gi), ge("GG", et, Ke), ge("gg", et, Ke), ge("GGGG", jo, Bs), ge("gggg", jo, Bs), ge("GGGGG", $i, Bi), ge("ggggg", $i, Bi), $s([
          "gggg",
          "ggggg",
          "GGGG",
          "GGGGG"
        ], function(o, u, h, p) {
          u[p.substr(0, 2)] = Le(o);
        }), $s([
          "gg",
          "GG"
        ], function(o, u, h, p) {
          u[p] = r.parseTwoDigitYear(o);
        });
        function Ub(o) {
          return hd.call(this, o, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
        }
        function Bb(o) {
          return hd.call(this, o, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function zb() {
          return In(this.year(), 1, 4);
        }
        function $b() {
          return In(this.isoWeekYear(), 1, 4);
        }
        function Gb() {
          var o = this.localeData()._week;
          return In(this.year(), o.dow, o.doy);
        }
        function Zb() {
          var o = this.localeData()._week;
          return In(this.weekYear(), o.dow, o.doy);
        }
        function hd(o, u, h, p, w) {
          var A;
          return o == null ? Qs(this, p, w).year : (A = In(o, p, w), u > A && (u = A), qb.call(this, o, u, h, p, w));
        }
        function qb(o, u, h, p, w) {
          var A = Bu(o, u, h, p, w), B = qs(A.year, 0, A.dayOfYear);
          return this.year(B.getUTCFullYear()), this.month(B.getUTCMonth()), this.date(B.getUTCDate()), this;
        }
        H("Q", 0, "Qo", "quarter"), ge("Q", dt), Ge("Q", function(o, u) {
          u[Rn] = (Le(o) - 1) * 3;
        });
        function Qb(o) {
          return o == null ? Math.ceil((this.month() + 1) / 3) : this.month((o - 1) * 3 + this.month() % 3);
        }
        H("D", [
          "DD",
          2
        ], "Do", "date"), ge("D", et, rs), ge("DD", et, Ke), ge("Do", function(o, u) {
          return o ? u._dayOfMonthOrdinalParse || u._ordinalParse : u._dayOfMonthOrdinalParseLenient;
        }), Ge([
          "D",
          "DD"
        ], yn), Ge("Do", function(o, u) {
          u[yn] = Le(o.match(et)[0]);
        });
        var md = ss("Date", true);
        H("DDD", [
          "DDDD",
          3
        ], "DDDo", "dayOfYear"), ge("DDD", zi), ge("DDDD", Or), Ge([
          "DDD",
          "DDDD"
        ], function(o, u, h) {
          h._dayOfYear = Le(o);
        });
        function Xb(o) {
          var u = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return o == null ? u : this.add(o - u, "d");
        }
        H("m", [
          "mm",
          2
        ], 0, "minute"), ge("m", et, Vo), ge("mm", et, Ke), Ge([
          "m",
          "mm"
        ], Xt);
        var Jb = ss("Minutes", false);
        H("s", [
          "ss",
          2
        ], 0, "second"), ge("s", et, Vo), ge("ss", et, Ke), Ge([
          "s",
          "ss"
        ], On);
        var Kb = ss("Seconds", false);
        H("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        }), H(0, [
          "SS",
          2
        ], 0, function() {
          return ~~(this.millisecond() / 10);
        }), H(0, [
          "SSS",
          3
        ], 0, "millisecond"), H(0, [
          "SSSS",
          4
        ], 0, function() {
          return this.millisecond() * 10;
        }), H(0, [
          "SSSSS",
          5
        ], 0, function() {
          return this.millisecond() * 100;
        }), H(0, [
          "SSSSSS",
          6
        ], 0, function() {
          return this.millisecond() * 1e3;
        }), H(0, [
          "SSSSSSS",
          7
        ], 0, function() {
          return this.millisecond() * 1e4;
        }), H(0, [
          "SSSSSSSS",
          8
        ], 0, function() {
          return this.millisecond() * 1e5;
        }), H(0, [
          "SSSSSSSSS",
          9
        ], 0, function() {
          return this.millisecond() * 1e6;
        }), ge("S", zi, dt), ge("SS", zi, Ke), ge("SSS", zi, Or);
        var or, pd;
        for (or = "SSSS"; or.length <= 9; or += "S") ge(or, ns);
        function ew(o, u) {
          u[Ir] = Le(("0." + o) * 1e3);
        }
        for (or = "S"; or.length <= 9; or += "S") Ge(or, ew);
        pd = ss("Milliseconds", false), H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
        function tw() {
          return this._isUTC ? "UTC" : "";
        }
        function nw() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var ie = I.prototype;
        ie.add = Zv, ie.calendar = tb, ie.clone = nb, ie.diff = cb, ie.endOf = bb, ie.format = hb, ie.from = mb, ie.fromNow = pb, ie.to = gb, ie.toNow = yb, ie.get = fy, ie.invalidAt = Eb, ie.isAfter = rb, ie.isBefore = sb, ie.isBetween = ib, ie.isSame = ab, ie.isSameOrAfter = ob, ie.isSameOrBefore = lb, ie.isValid = xb, ie.lang = ld, ie.locale = od, ie.localeData = cd, ie.max = xv, ie.min = Tv, ie.parsingFlags = Mb, ie.set = hy, ie.startOf = vb, ie.subtract = qv, ie.toArray = Db, ie.toObject = kb, ie.toDate = _b, ie.toISOString = db, ie.inspect = fb, typeof Symbol < "u" && Symbol.for != null && (ie[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        }), ie.toJSON = Tb, ie.toString = ub, ie.unix = Sb, ie.valueOf = wb, ie.creationData = Cb, ie.eraName = Ib, ie.eraNarrow = Pb, ie.eraAbbr = Nb, ie.eraYear = Lb, ie.year = Yu, ie.isLeapYear = dy, ie.weekYear = Ub, ie.isoWeekYear = Bb, ie.quarter = ie.quarters = Qb, ie.month = Wu, ie.daysInMonth = _y, ie.week = ie.weeks = Ay, ie.isoWeek = ie.isoWeeks = Ry, ie.weeksInYear = Gb, ie.weeksInWeekYear = Zb, ie.isoWeeksInYear = zb, ie.isoWeeksInISOWeekYear = $b, ie.date = md, ie.day = ie.days = By, ie.weekday = zy, ie.isoWeekday = $y, ie.dayOfYear = Xb, ie.hour = ie.hours = Ky, ie.minute = ie.minutes = Jb, ie.second = ie.seconds = Kb, ie.millisecond = ie.milliseconds = pd, ie.utcOffset = Nv, ie.utc = Yv, ie.local = Fv, ie.parseZone = Hv, ie.hasAlignedHourOffset = jv, ie.isDST = Vv, ie.isLocal = Uv, ie.isUtcOffset = Bv, ie.isUtc = nd, ie.isUTC = nd, ie.zoneAbbr = tw, ie.zoneName = nw, ie.dates = U("dates accessor is deprecated. Use date instead.", md), ie.months = U("months accessor is deprecated. Use month instead", Wu), ie.years = U("years accessor is deprecated. Use year instead", Yu), ie.zone = U("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Lv), ie.isDSTShifted = U("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Wv);
        function rw(o) {
          return tt(o * 1e3);
        }
        function sw() {
          return tt.apply(null, arguments).parseZone();
        }
        function gd(o) {
          return o;
        }
        var Ve = P.prototype;
        Ve.calendar = te, Ve.longDateFormat = fe, Ve.invalidDate = G, Ve.ordinal = ve, Ve.preparse = gd, Ve.postformat = gd, Ve.relativeTime = Me, Ve.pastFuture = we, Ve.set = k, Ve.eras = Ab, Ve.erasParse = Rb, Ve.erasConvertYear = Ob, Ve.erasAbbrRegex = Fb, Ve.erasNameRegex = Yb, Ve.erasNarrowRegex = Hb, Ve.months = vy, Ve.monthsShort = by, Ve.monthsParse = Sy, Ve.monthsRegex = ky, Ve.monthsShortRegex = Dy, Ve.week = xy, Ve.firstDayOfYear = Cy, Ve.firstDayOfWeek = Ey, Ve.weekdays = Hy, Ve.weekdaysMin = Vy, Ve.weekdaysShort = jy, Ve.weekdaysParse = Uy, Ve.weekdaysRegex = Gy, Ve.weekdaysShortRegex = Zy, Ve.weekdaysMinRegex = qy, Ve.isPM = Xy, Ve.meridiem = ev;
        function aa(o, u, h, p) {
          var w = Pn(), A = v().set(p, u);
          return w[h](A, o);
        }
        function yd(o, u, h) {
          if (f(o) && (u = o, o = void 0), o = o || "", u != null) return aa(o, u, h, "month");
          var p, w = [];
          for (p = 0; p < 12; p++) w[p] = aa(o, p, h, "month");
          return w;
        }
        function sl(o, u, h, p) {
          typeof o == "boolean" ? (f(u) && (h = u, u = void 0), u = u || "") : (u = o, h = u, o = false, f(u) && (h = u, u = void 0), u = u || "");
          var w = Pn(), A = o ? w._week.dow : 0, B, me = [];
          if (h != null) return aa(u, (h + A) % 7, p, "day");
          for (B = 0; B < 7; B++) me[B] = aa(u, (B + A) % 7, p, "day");
          return me;
        }
        function iw(o, u) {
          return yd(o, u, "months");
        }
        function aw(o, u) {
          return yd(o, u, "monthsShort");
        }
        function ow(o, u, h) {
          return sl(o, u, h, "weekdays");
        }
        function lw(o, u, h) {
          return sl(o, u, h, "weekdaysShort");
        }
        function cw(o, u, h) {
          return sl(o, u, h, "weekdaysMin");
        }
        ar("en", {
          eras: [
            {
              since: "0001-01-01",
              until: 1 / 0,
              offset: 1,
              name: "Anno Domini",
              narrow: "AD",
              abbr: "AD"
            },
            {
              since: "0000-12-31",
              until: -1 / 0,
              offset: 1,
              name: "Before Christ",
              narrow: "BC",
              abbr: "BC"
            }
          ],
          dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
          ordinal: function(o) {
            var u = o % 10, h = Le(o % 100 / 10) === 1 ? "th" : u === 1 ? "st" : u === 2 ? "nd" : u === 3 ? "rd" : "th";
            return o + h;
          }
        }), r.lang = U("moment.lang is deprecated. Use moment.locale instead.", ar), r.langData = U("moment.langData is deprecated. Use moment.localeData instead.", Pn);
        var Nn = Math.abs;
        function uw() {
          var o = this._data;
          return this._milliseconds = Nn(this._milliseconds), this._days = Nn(this._days), this._months = Nn(this._months), o.milliseconds = Nn(o.milliseconds), o.seconds = Nn(o.seconds), o.minutes = Nn(o.minutes), o.hours = Nn(o.hours), o.months = Nn(o.months), o.years = Nn(o.years), this;
        }
        function vd(o, u, h, p) {
          var w = Jt(u, h);
          return o._milliseconds += p * w._milliseconds, o._days += p * w._days, o._months += p * w._months, o._bubble();
        }
        function dw(o, u) {
          return vd(this, o, u, 1);
        }
        function fw(o, u) {
          return vd(this, o, u, -1);
        }
        function bd(o) {
          return o < 0 ? Math.floor(o) : Math.ceil(o);
        }
        function hw() {
          var o = this._milliseconds, u = this._days, h = this._months, p = this._data, w, A, B, me, Ce;
          return o >= 0 && u >= 0 && h >= 0 || o <= 0 && u <= 0 && h <= 0 || (o += bd(il(h) + u) * 864e5, u = 0, h = 0), p.milliseconds = o % 1e3, w = zt(o / 1e3), p.seconds = w % 60, A = zt(w / 60), p.minutes = A % 60, B = zt(A / 60), p.hours = B % 24, u += zt(B / 24), Ce = zt(wd(u)), h += Ce, u -= bd(il(Ce)), me = zt(h / 12), h %= 12, p.days = u, p.months = h, p.years = me, this;
        }
        function wd(o) {
          return o * 4800 / 146097;
        }
        function il(o) {
          return o * 146097 / 4800;
        }
        function mw(o) {
          if (!this.isValid()) return NaN;
          var u, h, p = this._milliseconds;
          if (o = Se(o), o === "month" || o === "quarter" || o === "year") switch (u = this._days + p / 864e5, h = this._months + wd(u), o) {
            case "month":
              return h;
            case "quarter":
              return h / 3;
            case "year":
              return h / 12;
          }
          else switch (u = this._days + Math.round(il(this._months)), o) {
            case "week":
              return u / 7 + p / 6048e5;
            case "day":
              return u + p / 864e5;
            case "hour":
              return u * 24 + p / 36e5;
            case "minute":
              return u * 1440 + p / 6e4;
            case "second":
              return u * 86400 + p / 1e3;
            case "millisecond":
              return Math.floor(u * 864e5) + p;
            default:
              throw new Error("Unknown unit " + o);
          }
        }
        function Ln(o) {
          return function() {
            return this.as(o);
          };
        }
        var Sd = Ln("ms"), pw = Ln("s"), gw = Ln("m"), yw = Ln("h"), vw = Ln("d"), bw = Ln("w"), ww = Ln("M"), Sw = Ln("Q"), _w = Ln("y"), Dw = Sd;
        function kw() {
          return Jt(this);
        }
        function Tw(o) {
          return o = Se(o), this.isValid() ? this[o + "s"]() : NaN;
        }
        function Nr(o) {
          return function() {
            return this.isValid() ? this._data[o] : NaN;
          };
        }
        var xw = Nr("milliseconds"), Mw = Nr("seconds"), Ew = Nr("minutes"), Cw = Nr("hours"), Aw = Nr("days"), Rw = Nr("months"), Ow = Nr("years");
        function Iw() {
          return zt(this.days() / 7);
        }
        var Yn = Math.round, ls = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11
        };
        function Pw(o, u, h, p, w) {
          return w.relativeTime(u || 1, !!h, o, p);
        }
        function Nw(o, u, h, p) {
          var w = Jt(o).abs(), A = Yn(w.as("s")), B = Yn(w.as("m")), me = Yn(w.as("h")), Ce = Yn(w.as("d")), Fe = Yn(w.as("M")), Nt = Yn(w.as("w")), Fn = Yn(w.as("y")), lr = A <= h.ss && [
            "s",
            A
          ] || A < h.s && [
            "ss",
            A
          ] || B <= 1 && [
            "m"
          ] || B < h.m && [
            "mm",
            B
          ] || me <= 1 && [
            "h"
          ] || me < h.h && [
            "hh",
            me
          ] || Ce <= 1 && [
            "d"
          ] || Ce < h.d && [
            "dd",
            Ce
          ];
          return h.w != null && (lr = lr || Nt <= 1 && [
            "w"
          ] || Nt < h.w && [
            "ww",
            Nt
          ]), lr = lr || Fe <= 1 && [
            "M"
          ] || Fe < h.M && [
            "MM",
            Fe
          ] || Fn <= 1 && [
            "y"
          ] || [
            "yy",
            Fn
          ], lr[2] = u, lr[3] = +o > 0, lr[4] = p, Pw.apply(null, lr);
        }
        function Lw(o) {
          return o === void 0 ? Yn : typeof o == "function" ? (Yn = o, true) : false;
        }
        function Yw(o, u) {
          return ls[o] === void 0 ? false : u === void 0 ? ls[o] : (ls[o] = u, o === "s" && (ls.ss = u - 1), true);
        }
        function Fw(o, u) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var h = false, p = ls, w, A;
          return typeof o == "object" && (u = o, o = false), typeof o == "boolean" && (h = o), typeof u == "object" && (p = Object.assign({}, ls, u), u.s != null && u.ss == null && (p.ss = u.s - 1)), w = this.localeData(), A = Nw(this, !h, p, w), h && (A = w.pastFuture(+this, A)), w.postformat(A);
        }
        var al = Math.abs;
        function cs(o) {
          return (o > 0) - (o < 0) || +o;
        }
        function oa() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var o = al(this._milliseconds) / 1e3, u = al(this._days), h = al(this._months), p, w, A, B, me = this.asSeconds(), Ce, Fe, Nt, Fn;
          return me ? (p = zt(o / 60), w = zt(p / 60), o %= 60, p %= 60, A = zt(h / 12), h %= 12, B = o ? o.toFixed(3).replace(/\.?0+$/, "") : "", Ce = me < 0 ? "-" : "", Fe = cs(this._months) !== cs(me) ? "-" : "", Nt = cs(this._days) !== cs(me) ? "-" : "", Fn = cs(this._milliseconds) !== cs(me) ? "-" : "", Ce + "P" + (A ? Fe + A + "Y" : "") + (h ? Fe + h + "M" : "") + (u ? Nt + u + "D" : "") + (w || p || o ? "T" : "") + (w ? Fn + w + "H" : "") + (p ? Fn + p + "M" : "") + (o ? Fn + B + "S" : "")) : "P0D";
        }
        var He = ea.prototype;
        He.isValid = Rv, He.abs = uw, He.add = dw, He.subtract = fw, He.as = mw, He.asMilliseconds = Sd, He.asSeconds = pw, He.asMinutes = gw, He.asHours = yw, He.asDays = vw, He.asWeeks = bw, He.asMonths = ww, He.asQuarters = Sw, He.asYears = _w, He.valueOf = Dw, He._bubble = hw, He.clone = kw, He.get = Tw, He.milliseconds = xw, He.seconds = Mw, He.minutes = Ew, He.hours = Cw, He.days = Aw, He.weeks = Iw, He.months = Rw, He.years = Ow, He.humanize = Fw, He.toISOString = oa, He.toString = oa, He.toJSON = oa, He.locale = od, He.localeData = cd, He.toIsoString = U("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", oa), He.lang = ld, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), ge("x", Gi), ge("X", iy), Ge("X", function(o, u, h) {
          h._d = new Date(parseFloat(o) * 1e3);
        }), Ge("x", function(o, u, h) {
          h._d = new Date(Le(o));
        });
        return r.version = "2.30.1", s(tt), r.fn = ie, r.min = Mv, r.max = Ev, r.now = Cv, r.utc = v, r.unix = rw, r.months = iw, r.isDate = m, r.locale = ar, r.invalid = R, r.duration = Jt, r.isMoment = O, r.weekdays = ow, r.parseZone = sw, r.localeData = Pn, r.isDuration = ta, r.monthsShort = aw, r.weekdaysMin = cw, r.defineLocale = Go, r.updateLocale = sv, r.locales = iv, r.weekdaysShort = lw, r.normalizeUnits = Se, r.relativeTimeRounding = Lw, r.relativeTimeThreshold = Yw, r.calendarFormat = eb, r.prototype = ie, r.HTML5_FMT = {
          DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
          DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
          DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
          DATE: "YYYY-MM-DD",
          TIME: "HH:mm",
          TIME_SECONDS: "HH:mm:ss",
          TIME_MS: "HH:mm:ss.SSS",
          WEEK: "GGGG-[W]WW",
          MONTH: "YYYY-MM"
        }, r;
      }));
    })(Ra)), Ra.exports;
  }
  var UR = VR.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(UR, (function(n) {
      function r(i, a, l, c) {
        var d = {
          m: [
            "eine Minute",
            "einer Minute"
          ],
          h: [
            "eine Stunde",
            "einer Stunde"
          ],
          d: [
            "ein Tag",
            "einem Tag"
          ],
          dd: [
            i + " Tage",
            i + " Tagen"
          ],
          w: [
            "eine Woche",
            "einer Woche"
          ],
          M: [
            "ein Monat",
            "einem Monat"
          ],
          MM: [
            i + " Monate",
            i + " Monaten"
          ],
          y: [
            "ein Jahr",
            "einem Jahr"
          ],
          yy: [
            i + " Jahre",
            i + " Jahren"
          ]
        };
        return a ? d[l][0] : d[l][1];
      }
      var s = n.defineLocale("de", {
        months: "Januar_Februar_M\xE4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Feb._M\xE4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),
        monthsParseExact: true,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D. MMMM YYYY",
          LLL: "D. MMMM YYYY HH:mm",
          LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[heute um] LT [Uhr]",
          sameElse: "L",
          nextDay: "[morgen um] LT [Uhr]",
          nextWeek: "dddd [um] LT [Uhr]",
          lastDay: "[gestern um] LT [Uhr]",
          lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
          future: "in %s",
          past: "vor %s",
          s: "ein paar Sekunden",
          ss: "%d Sekunden",
          m: r,
          mm: "%d Minuten",
          h: r,
          hh: "%d Stunden",
          d: r,
          dd: r,
          w: r,
          ww: "%d Wochen",
          M: r,
          MM: r,
          y: r,
          yy: r
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      return s;
    }));
  })();
  var BR = {
    exports: {}
  }, zR = BR.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(zR, (function(n) {
      function r(l, c) {
        var d = l.split("_");
        return c % 10 === 1 && c % 100 !== 11 ? d[0] : c % 10 >= 2 && c % 10 <= 4 && (c % 100 < 10 || c % 100 >= 20) ? d[1] : d[2];
      }
      function s(l, c, d) {
        var f = {
          ss: c ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u044B_\u0441\u0435\u043A\u0443\u043D\u0434",
          mm: c ? "\u043C\u0438\u043D\u0443\u0442\u0430_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442" : "\u043C\u0438\u043D\u0443\u0442\u0443_\u043C\u0438\u043D\u0443\u0442\u044B_\u043C\u0438\u043D\u0443\u0442",
          hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043E\u0432",
          dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u044F_\u0434\u043D\u0435\u0439",
          ww: "\u043D\u0435\u0434\u0435\u043B\u044F_\u043D\u0435\u0434\u0435\u043B\u0438_\u043D\u0435\u0434\u0435\u043B\u044C",
          MM: "\u043C\u0435\u0441\u044F\u0446_\u043C\u0435\u0441\u044F\u0446\u0430_\u043C\u0435\u0441\u044F\u0446\u0435\u0432",
          yy: "\u0433\u043E\u0434_\u0433\u043E\u0434\u0430_\u043B\u0435\u0442"
        };
        return d === "m" ? c ? "\u043C\u0438\u043D\u0443\u0442\u0430" : "\u043C\u0438\u043D\u0443\u0442\u0443" : l + " " + r(f[d], +l);
      }
      var i = [
        /^янв/i,
        /^фев/i,
        /^мар/i,
        /^апр/i,
        /^ма[йя]/i,
        /^июн/i,
        /^июл/i,
        /^авг/i,
        /^сен/i,
        /^окт/i,
        /^ноя/i,
        /^дек/i
      ], a = n.defineLocale("ru", {
        months: {
          format: "\u044F\u043D\u0432\u0430\u0440\u044F_\u0444\u0435\u0432\u0440\u0430\u043B\u044F_\u043C\u0430\u0440\u0442\u0430_\u0430\u043F\u0440\u0435\u043B\u044F_\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F_\u043E\u043A\u0442\u044F\u0431\u0440\u044F_\u043D\u043E\u044F\u0431\u0440\u044F_\u0434\u0435\u043A\u0430\u0431\u0440\u044F".split("_"),
          standalone: "\u044F\u043D\u0432\u0430\u0440\u044C_\u0444\u0435\u0432\u0440\u0430\u043B\u044C_\u043C\u0430\u0440\u0442_\u0430\u043F\u0440\u0435\u043B\u044C_\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C_\u043E\u043A\u0442\u044F\u0431\u0440\u044C_\u043D\u043E\u044F\u0431\u0440\u044C_\u0434\u0435\u043A\u0430\u0431\u0440\u044C".split("_")
        },
        monthsShort: {
          format: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440._\u0430\u043F\u0440._\u043C\u0430\u044F_\u0438\u044E\u043D\u044F_\u0438\u044E\u043B\u044F_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_"),
          standalone: "\u044F\u043D\u0432._\u0444\u0435\u0432\u0440._\u043C\u0430\u0440\u0442_\u0430\u043F\u0440._\u043C\u0430\u0439_\u0438\u044E\u043D\u044C_\u0438\u044E\u043B\u044C_\u0430\u0432\u0433._\u0441\u0435\u043D\u0442._\u043E\u043A\u0442._\u043D\u043E\u044F\u0431._\u0434\u0435\u043A.".split("_")
        },
        weekdays: {
          standalone: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043E\u0442\u0430".split("_"),
          format: "\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435_\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A_\u0432\u0442\u043E\u0440\u043D\u0438\u043A_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043F\u044F\u0442\u043D\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043E\u0442\u0443".split("_"),
          isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/
        },
        weekdaysShort: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u0432\u0441_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        monthsParse: i,
        longMonthsParse: i,
        shortMonthsParse: i,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY \u0433.",
          LLL: "D MMMM YYYY \u0433., H:mm",
          LLLL: "dddd, D MMMM YYYY \u0433., H:mm"
        },
        calendar: {
          sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F, \u0432] LT",
          nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430, \u0432] LT",
          lastDay: "[\u0412\u0447\u0435\u0440\u0430, \u0432] LT",
          nextWeek: function(l) {
            if (l.week() !== this.week()) switch (this.day()) {
              case 0:
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435] dddd, [\u0432] LT";
              case 1:
              case 2:
              case 4:
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439] dddd, [\u0432] LT";
              case 3:
              case 5:
              case 6:
                return "[\u0412 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E] dddd, [\u0432] LT";
            }
            else return this.day() === 2 ? "[\u0412\u043E] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
          },
          lastWeek: function(l) {
            if (l.week() !== this.week()) switch (this.day()) {
              case 0:
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435] dddd, [\u0432] LT";
              case 1:
              case 2:
              case 4:
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u044B\u0439] dddd, [\u0432] LT";
              case 3:
              case 5:
              case 6:
                return "[\u0412 \u043F\u0440\u043E\u0448\u043B\u0443\u044E] dddd, [\u0432] LT";
            }
            else return this.day() === 2 ? "[\u0412\u043E] dddd, [\u0432] LT" : "[\u0412] dddd, [\u0432] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "\u0447\u0435\u0440\u0435\u0437 %s",
          past: "%s \u043D\u0430\u0437\u0430\u0434",
          s: "\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434",
          ss: s,
          m: s,
          mm: s,
          h: "\u0447\u0430\u0441",
          hh: s,
          d: "\u0434\u0435\u043D\u044C",
          dd: s,
          w: "\u043D\u0435\u0434\u0435\u043B\u044F",
          ww: s,
          M: "\u043C\u0435\u0441\u044F\u0446",
          MM: s,
          y: "\u0433\u043E\u0434",
          yy: s
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(l) {
          return /^(дня|вечера)$/.test(l);
        },
        meridiem: function(l, c, d) {
          return l < 4 ? "\u043D\u043E\u0447\u0438" : l < 12 ? "\u0443\u0442\u0440\u0430" : l < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u0435\u0440\u0430";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(l, c) {
          switch (c) {
            case "M":
            case "d":
            case "DDD":
              return l + "-\u0439";
            case "D":
              return l + "-\u0433\u043E";
            case "w":
            case "W":
              return l + "-\u044F";
            default:
              return l;
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      return a;
    }));
  })();
  var $R = {
    exports: {}
  }, GR = $R.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(GR, (function(n) {
      var r = n.defineLocale("zh-cn", {
        months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"),
        monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
        weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"),
        weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"),
        weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY\u5E74M\u6708D\u65E5",
          LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206",
          LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206",
          l: "YYYY/M/D",
          ll: "YYYY\u5E74M\u6708D\u65E5",
          lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm",
          llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(s, i) {
          return s === 12 && (s = 0), i === "\u51CC\u6668" || i === "\u65E9\u4E0A" || i === "\u4E0A\u5348" ? s : i === "\u4E0B\u5348" || i === "\u665A\u4E0A" ? s + 12 : s >= 11 ? s : s + 12;
        },
        meridiem: function(s, i, a) {
          var l = s * 100 + i;
          return l < 600 ? "\u51CC\u6668" : l < 900 ? "\u65E9\u4E0A" : l < 1130 ? "\u4E0A\u5348" : l < 1230 ? "\u4E2D\u5348" : l < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
        },
        calendar: {
          sameDay: "[\u4ECA\u5929]LT",
          nextDay: "[\u660E\u5929]LT",
          nextWeek: function(s) {
            return s.week() !== this.week() ? "[\u4E0B]dddLT" : "[\u672C]dddLT";
          },
          lastDay: "[\u6628\u5929]LT",
          lastWeek: function(s) {
            return this.week() !== s.week() ? "[\u4E0A]dddLT" : "[\u672C]dddLT";
          },
          sameElse: "L"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(s, i) {
          switch (i) {
            case "d":
            case "D":
            case "DDD":
              return s + "\u65E5";
            case "M":
              return s + "\u6708";
            case "w":
            case "W":
              return s + "\u5468";
            default:
              return s;
          }
        },
        relativeTime: {
          future: "%s\u540E",
          past: "%s\u524D",
          s: "\u51E0\u79D2",
          ss: "%d \u79D2",
          m: "1 \u5206\u949F",
          mm: "%d \u5206\u949F",
          h: "1 \u5C0F\u65F6",
          hh: "%d \u5C0F\u65F6",
          d: "1 \u5929",
          dd: "%d \u5929",
          w: "1 \u5468",
          ww: "%d \u5468",
          M: "1 \u4E2A\u6708",
          MM: "%d \u4E2A\u6708",
          y: "1 \u5E74",
          yy: "%d \u5E74"
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      return r;
    }));
  })();
  var ZR = {
    exports: {}
  }, qR = ZR.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(qR, (function(n) {
      var r = n.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "domenica_luned\xEC_marted\xEC_mercoled\xEC_gioved\xEC_venerd\xEC_sabato".split("_"),
        weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
        weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: function() {
            return "[Oggi a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          nextDay: function() {
            return "[Domani a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          nextWeek: function() {
            return "dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          lastDay: function() {
            return "[Ieri a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          lastWeek: function() {
            return this.day() === 0 ? "[La scorsa] dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT" : "[Lo scorso] dddd [a" + (this.hours() > 1 ? "lle " : this.hours() === 0 ? " " : "ll'") + "]LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "tra %s",
          past: "%s fa",
          s: "alcuni secondi",
          ss: "%d secondi",
          m: "un minuto",
          mm: "%d minuti",
          h: "un'ora",
          hh: "%d ore",
          d: "un giorno",
          dd: "%d giorni",
          w: "una settimana",
          ww: "%d settimane",
          M: "un mese",
          MM: "%d mesi",
          y: "un anno",
          yy: "%d anni"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%d\xBA",
        week: {
          dow: 1,
          doy: 4
        }
      });
      return r;
    }));
  })();
  var QR = {
    exports: {}
  }, XR = QR.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(XR, (function(n) {
      var r = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, s = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i, i = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, a = [
        /^janv/i,
        /^févr/i,
        /^mars/i,
        /^avr/i,
        /^mai/i,
        /^juin/i,
        /^juil/i,
        /^août/i,
        /^sept/i,
        /^oct/i,
        /^nov/i,
        /^déc/i
      ], l = n.defineLocale("fr", {
        months: "janvier_f\xE9vrier_mars_avril_mai_juin_juillet_ao\xFBt_septembre_octobre_novembre_d\xE9cembre".split("_"),
        monthsShort: "janv._f\xE9vr._mars_avr._mai_juin_juil._ao\xFBt_sept._oct._nov._d\xE9c.".split("_"),
        monthsRegex: i,
        monthsShortRegex: i,
        monthsStrictRegex: r,
        monthsShortStrictRegex: s,
        monthsParse: a,
        longMonthsParse: a,
        shortMonthsParse: a,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd\u2019hui \xE0] LT",
          nextDay: "[Demain \xE0] LT",
          nextWeek: "dddd [\xE0] LT",
          lastDay: "[Hier \xE0] LT",
          lastWeek: "dddd [dernier \xE0] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          w: "une semaine",
          ww: "%d semaines",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(c, d) {
          switch (d) {
            case "D":
              return c + (c === 1 ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return c + (c === 1 ? "er" : "e");
            case "w":
            case "W":
              return c + (c === 1 ? "re" : "e");
          }
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      return l;
    }));
  })();
  var JR = {
    exports: {}
  }, KR = JR.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(KR, (function(n) {
      var r = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), s = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), i = [
        /^ene/i,
        /^feb/i,
        /^mar/i,
        /^abr/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^ago/i,
        /^sep/i,
        /^oct/i,
        /^nov/i,
        /^dic/i
      ], a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, l = n.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(c, d) {
          return c ? /-MMM-/.test(d) ? s[c.month()] : r[c.month()] : r;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
        monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
        monthsParse: i,
        longMonthsParse: i,
        shortMonthsParse: i,
        weekdays: "domingo_lunes_martes_mi\xE9rcoles_jueves_viernes_s\xE1bado".split("_"),
        weekdaysShort: "dom._lun._mar._mi\xE9._jue._vie._s\xE1b.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_s\xE1".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "H:mm",
          LTS: "H:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY H:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
          sameDay: function() {
            return "[hoy a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextDay: function() {
            return "[ma\xF1ana a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          nextWeek: function() {
            return "dddd [a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastDay: function() {
            return "[ayer a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          lastWeek: function() {
            return "[el] dddd [pasado a la" + (this.hours() !== 1 ? "s" : "") + "] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "en %s",
          past: "hace %s",
          s: "unos segundos",
          ss: "%d segundos",
          m: "un minuto",
          mm: "%d minutos",
          h: "una hora",
          hh: "%d horas",
          d: "un d\xEDa",
          dd: "%d d\xEDas",
          w: "una semana",
          ww: "%d semanas",
          M: "un mes",
          MM: "%d meses",
          y: "un a\xF1o",
          yy: "%d a\xF1os"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%d\xBA",
        week: {
          dow: 1,
          doy: 4
        },
        invalidDate: "Fecha inv\xE1lida"
      });
      return l;
    }));
  })();
  var eO = {
    exports: {}
  }, tO = eO.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(tO, (function(n) {
      var r = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), s = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), i = [
        /^jan/i,
        /^feb/i,
        /^(maart|mrt\.?)$/i,
        /^apr/i,
        /^mei$/i,
        /^jun[i.]?$/i,
        /^jul[i.]?$/i,
        /^aug/i,
        /^sep/i,
        /^okt/i,
        /^nov/i,
        /^dec/i
      ], a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, l = n.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(c, d) {
          return c ? /-MMM-/.test(d) ? s[c.month()] : r[c.month()] : r;
        },
        monthsRegex: a,
        monthsShortRegex: a,
        monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: i,
        longMonthsParse: i,
        shortMonthsParse: i,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD-MM-YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[vandaag om] LT",
          nextDay: "[morgen om] LT",
          nextWeek: "dddd [om] LT",
          lastDay: "[gisteren om] LT",
          lastWeek: "[afgelopen] dddd [om] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "over %s",
          past: "%s geleden",
          s: "een paar seconden",
          ss: "%d seconden",
          m: "\xE9\xE9n minuut",
          mm: "%d minuten",
          h: "\xE9\xE9n uur",
          hh: "%d uur",
          d: "\xE9\xE9n dag",
          dd: "%d dagen",
          w: "\xE9\xE9n week",
          ww: "%d weken",
          M: "\xE9\xE9n maand",
          MM: "%d maanden",
          y: "\xE9\xE9n jaar",
          yy: "%d jaar"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(c) {
          return c + (c === 1 || c === 8 || c >= 20 ? "ste" : "de");
        },
        week: {
          dow: 1,
          doy: 4
        }
      });
      return l;
    }));
  })();
  var nO = {
    exports: {}
  }, rO = nO.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(rO, (function(n) {
      var r = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017Adziernik_listopad_grudzie\u0144".split("_"), s = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015Bnia_pa\u017Adziernika_listopada_grudnia".split("_"), i = [
        /^sty/i,
        /^lut/i,
        /^mar/i,
        /^kwi/i,
        /^maj/i,
        /^cze/i,
        /^lip/i,
        /^sie/i,
        /^wrz/i,
        /^paź/i,
        /^lis/i,
        /^gru/i
      ];
      function a(d) {
        return d % 10 < 5 && d % 10 > 1 && ~~(d / 10) % 10 !== 1;
      }
      function l(d, f, m) {
        var g = d + " ";
        switch (m) {
          case "ss":
            return g + (a(d) ? "sekundy" : "sekund");
          case "m":
            return f ? "minuta" : "minut\u0119";
          case "mm":
            return g + (a(d) ? "minuty" : "minut");
          case "h":
            return f ? "godzina" : "godzin\u0119";
          case "hh":
            return g + (a(d) ? "godziny" : "godzin");
          case "ww":
            return g + (a(d) ? "tygodnie" : "tygodni");
          case "MM":
            return g + (a(d) ? "miesi\u0105ce" : "miesi\u0119cy");
          case "yy":
            return g + (a(d) ? "lata" : "lat");
        }
      }
      var c = n.defineLocale("pl", {
        months: function(d, f) {
          return d ? /D MMMM/.test(f) ? s[d.month()] : r[d.month()] : r;
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017A_lis_gru".split("_"),
        monthsParse: i,
        longMonthsParse: i,
        shortMonthsParse: i,
        weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015Broda_czwartek_pi\u0105tek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_\u015Br_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_\u015Ar_Cz_Pt_So".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Dzi\u015B o] LT",
          nextDay: "[Jutro o] LT",
          nextWeek: function() {
            switch (this.day()) {
              case 0:
                return "[W niedziel\u0119 o] LT";
              case 2:
                return "[We wtorek o] LT";
              case 3:
                return "[W \u015Brod\u0119 o] LT";
              case 6:
                return "[W sobot\u0119 o] LT";
              default:
                return "[W] dddd [o] LT";
            }
          },
          lastDay: "[Wczoraj o] LT",
          lastWeek: function() {
            switch (this.day()) {
              case 0:
                return "[W zesz\u0142\u0105 niedziel\u0119 o] LT";
              case 3:
                return "[W zesz\u0142\u0105 \u015Brod\u0119 o] LT";
              case 6:
                return "[W zesz\u0142\u0105 sobot\u0119 o] LT";
              default:
                return "[W zesz\u0142y] dddd [o] LT";
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "za %s",
          past: "%s temu",
          s: "kilka sekund",
          ss: l,
          m: l,
          mm: l,
          h: l,
          hh: l,
          d: "1 dzie\u0144",
          dd: "%d dni",
          w: "tydzie\u0144",
          ww: l,
          M: "miesi\u0105c",
          MM: l,
          y: "rok",
          yy: l
        },
        dayOfMonthOrdinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
          dow: 1,
          doy: 4
        }
      });
      return c;
    }));
  })();
  var sO = {
    exports: {}
  }, iO = sO.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(iO, (function(n) {
      var r = n.defineLocale("pt", {
        months: "janeiro_fevereiro_mar\xE7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
        monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Ter\xE7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xE1bado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_S\xE1b".split("_"),
        weekdaysMin: "Do_2\xAA_3\xAA_4\xAA_5\xAA_6\xAA_S\xE1".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D [de] MMMM [de] YYYY",
          LLL: "D [de] MMMM [de] YYYY HH:mm",
          LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Hoje \xE0s] LT",
          nextDay: "[Amanh\xE3 \xE0s] LT",
          nextWeek: "dddd [\xE0s] LT",
          lastDay: "[Ontem \xE0s] LT",
          lastWeek: function() {
            return this.day() === 0 || this.day() === 6 ? "[\xDAltimo] dddd [\xE0s] LT" : "[\xDAltima] dddd [\xE0s] LT";
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "em %s",
          past: "h\xE1 %s",
          s: "segundos",
          ss: "%d segundos",
          m: "um minuto",
          mm: "%d minutos",
          h: "uma hora",
          hh: "%d horas",
          d: "um dia",
          dd: "%d dias",
          w: "uma semana",
          ww: "%d semanas",
          M: "um m\xEAs",
          MM: "%d meses",
          y: "um ano",
          yy: "%d anos"
        },
        dayOfMonthOrdinalParse: /\d{1,2}º/,
        ordinal: "%d\xBA",
        week: {
          dow: 1,
          doy: 4
        }
      });
      return r;
    }));
  })();
  var aO = {
    exports: {}
  }, oO = aO.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof mn == "function" ? Cn() : n.moment);
    })(oO, (function(n) {
      function r(c, d) {
        var f = c.split("_");
        return d % 10 === 1 && d % 100 !== 11 ? f[0] : d % 10 >= 2 && d % 10 <= 4 && (d % 100 < 10 || d % 100 >= 20) ? f[1] : f[2];
      }
      function s(c, d, f) {
        var m = {
          ss: d ? "\u0441\u0435\u043A\u0443\u043D\u0434\u0430_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434" : "\u0441\u0435\u043A\u0443\u043D\u0434\u0443_\u0441\u0435\u043A\u0443\u043D\u0434\u0438_\u0441\u0435\u043A\u0443\u043D\u0434",
          mm: d ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443_\u0445\u0432\u0438\u043B\u0438\u043D\u0438_\u0445\u0432\u0438\u043B\u0438\u043D",
          hh: d ? "\u0433\u043E\u0434\u0438\u043D\u0430_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D" : "\u0433\u043E\u0434\u0438\u043D\u0443_\u0433\u043E\u0434\u0438\u043D\u0438_\u0433\u043E\u0434\u0438\u043D",
          dd: "\u0434\u0435\u043D\u044C_\u0434\u043D\u0456_\u0434\u043D\u0456\u0432",
          MM: "\u043C\u0456\u0441\u044F\u0446\u044C_\u043C\u0456\u0441\u044F\u0446\u0456_\u043C\u0456\u0441\u044F\u0446\u0456\u0432",
          yy: "\u0440\u0456\u043A_\u0440\u043E\u043A\u0438_\u0440\u043E\u043A\u0456\u0432"
        };
        return f === "m" ? d ? "\u0445\u0432\u0438\u043B\u0438\u043D\u0430" : "\u0445\u0432\u0438\u043B\u0438\u043D\u0443" : f === "h" ? d ? "\u0433\u043E\u0434\u0438\u043D\u0430" : "\u0433\u043E\u0434\u0438\u043D\u0443" : c + " " + r(m[f], +c);
      }
      function i(c, d) {
        var f = {
          nominative: "\u043D\u0435\u0434\u0456\u043B\u044F_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044F_\u0441\u0443\u0431\u043E\u0442\u0430".split("_"),
          accusative: "\u043D\u0435\u0434\u0456\u043B\u044E_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A_\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E_\u0441\u0443\u0431\u043E\u0442\u0443".split("_"),
          genitive: "\u043D\u0435\u0434\u0456\u043B\u0456_\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043A\u0430_\u0432\u0456\u0432\u0442\u043E\u0440\u043A\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u0456_\u0441\u0443\u0431\u043E\u0442\u0438".split("_")
        }, m;
        return c === true ? f.nominative.slice(1, 7).concat(f.nominative.slice(0, 1)) : c ? (m = /(\[[ВвУу]\]) ?dddd/.test(d) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(d) ? "genitive" : "nominative", f[m][c.day()]) : f.nominative;
      }
      function a(c) {
        return function() {
          return c + "\u043E" + (this.hours() === 11 ? "\u0431" : "") + "] LT";
        };
      }
      var l = n.defineLocale("uk", {
        months: {
          format: "\u0441\u0456\u0447\u043D\u044F_\u043B\u044E\u0442\u043E\u0433\u043E_\u0431\u0435\u0440\u0435\u0437\u043D\u044F_\u043A\u0432\u0456\u0442\u043D\u044F_\u0442\u0440\u0430\u0432\u043D\u044F_\u0447\u0435\u0440\u0432\u043D\u044F_\u043B\u0438\u043F\u043D\u044F_\u0441\u0435\u0440\u043F\u043D\u044F_\u0432\u0435\u0440\u0435\u0441\u043D\u044F_\u0436\u043E\u0432\u0442\u043D\u044F_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043D\u044F".split("_"),
          standalone: "\u0441\u0456\u0447\u0435\u043D\u044C_\u043B\u044E\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C_\u043A\u0432\u0456\u0442\u0435\u043D\u044C_\u0442\u0440\u0430\u0432\u0435\u043D\u044C_\u0447\u0435\u0440\u0432\u0435\u043D\u044C_\u043B\u0438\u043F\u0435\u043D\u044C_\u0441\u0435\u0440\u043F\u0435\u043D\u044C_\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C_\u0436\u043E\u0432\u0442\u0435\u043D\u044C_\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043D\u044C".split("_")
        },
        monthsShort: "\u0441\u0456\u0447_\u043B\u044E\u0442_\u0431\u0435\u0440_\u043A\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043B\u0438\u043F_\u0441\u0435\u0440\u043F_\u0432\u0435\u0440_\u0436\u043E\u0432\u0442_\u043B\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
        weekdays: i,
        weekdaysShort: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        weekdaysMin: "\u043D\u0434_\u043F\u043D_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043F\u0442_\u0441\u0431".split("_"),
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD.MM.YYYY",
          LL: "D MMMM YYYY \u0440.",
          LLL: "D MMMM YYYY \u0440., HH:mm",
          LLLL: "dddd, D MMMM YYYY \u0440., HH:mm"
        },
        calendar: {
          sameDay: a("[\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456 "),
          nextDay: a("[\u0417\u0430\u0432\u0442\u0440\u0430 "),
          lastDay: a("[\u0412\u0447\u043E\u0440\u0430 "),
          nextWeek: a("[\u0423] dddd ["),
          lastWeek: function() {
            switch (this.day()) {
              case 0:
              case 3:
              case 5:
              case 6:
                return a("[\u041C\u0438\u043D\u0443\u043B\u043E\u0457] dddd [").call(this);
              case 1:
              case 2:
              case 4:
                return a("[\u041C\u0438\u043D\u0443\u043B\u043E\u0433\u043E] dddd [").call(this);
            }
          },
          sameElse: "L"
        },
        relativeTime: {
          future: "\u0437\u0430 %s",
          past: "%s \u0442\u043E\u043C\u0443",
          s: "\u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0435\u043A\u0443\u043D\u0434",
          ss: s,
          m: s,
          mm: s,
          h: "\u0433\u043E\u0434\u0438\u043D\u0443",
          hh: s,
          d: "\u0434\u0435\u043D\u044C",
          dd: s,
          M: "\u043C\u0456\u0441\u044F\u0446\u044C",
          MM: s,
          y: "\u0440\u0456\u043A",
          yy: s
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(c) {
          return /^(дня|вечора)$/.test(c);
        },
        meridiem: function(c, d, f) {
          return c < 4 ? "\u043D\u043E\u0447\u0456" : c < 12 ? "\u0440\u0430\u043D\u043A\u0443" : c < 17 ? "\u0434\u043D\u044F" : "\u0432\u0435\u0447\u043E\u0440\u0430";
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(c, d) {
          switch (d) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
              return c + "-\u0439";
            case "D":
              return c + "-\u0433\u043E";
            default:
              return c;
          }
        },
        week: {
          dow: 1,
          doy: 7
        }
      });
      return l;
    }));
  })();
  var yu = {
    exports: {}
  }, lO = yu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(lO, (function() {
      var n = 1e3, r = 6e4, s = 36e5, i = "millisecond", a = "second", l = "minute", c = "hour", d = "day", f = "week", m = "month", g = "quarter", y = "year", v = "date", S = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, E = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(k) {
          var C = [
            "th",
            "st",
            "nd",
            "rd"
          ], P = k % 100;
          return "[" + k + (C[(P - 20) % 10] || C[P] || C[0]) + "]";
        }
      }, R = function(k, C, P) {
        var W = String(k);
        return !W || W.length >= C ? k : "" + Array(C + 1 - W.length).join(P) + k;
      }, T = {
        s: R,
        z: function(k) {
          var C = -k.utcOffset(), P = Math.abs(C), W = Math.floor(P / 60), Y = P % 60;
          return (C <= 0 ? "+" : "-") + R(W, 2, "0") + ":" + R(Y, 2, "0");
        },
        m: function k(C, P) {
          if (C.date() < P.date()) return -k(P, C);
          var W = 12 * (P.year() - C.year()) + (P.month() - C.month()), Y = C.clone().add(W, m), te = P - Y < 0, j = C.clone().add(W + (te ? -1 : 1), m);
          return +(-(W + (P - Y) / (te ? Y - j : j - Y)) || 0);
        },
        a: function(k) {
          return k < 0 ? Math.ceil(k) || 0 : Math.floor(k);
        },
        p: function(k) {
          return {
            M: m,
            y,
            w: f,
            d,
            D: v,
            h: c,
            m: l,
            s: a,
            ms: i,
            Q: g
          }[k] || String(k || "").toLowerCase().replace(/s$/, "");
        },
        u: function(k) {
          return k === void 0;
        }
      }, x = "en", N = {};
      N[x] = E;
      var I = "$isDayjsObject", O = function(k) {
        return k instanceof ee || !(!k || !k[I]);
      }, J = function k(C, P, W) {
        var Y;
        if (!C) return x;
        if (typeof C == "string") {
          var te = C.toLowerCase();
          N[te] && (Y = te), P && (N[te] = P, Y = te);
          var j = C.split("-");
          if (!Y && j.length > 1) return k(j[0]);
        } else {
          var z = C.name;
          N[z] = C, Y = z;
        }
        return !W && Y && (x = Y), Y || !W && x;
      }, U = function(k, C) {
        if (O(k)) return k.clone();
        var P = typeof C == "object" ? C : {};
        return P.date = k, P.args = arguments, new ee(P);
      }, L = T;
      L.l = J, L.i = O, L.w = function(k, C) {
        return U(k, {
          locale: C.$L,
          utc: C.$u,
          x: C.$x,
          $offset: C.$offset
        });
      };
      var ee = (function() {
        function k(P) {
          this.$L = J(P.locale, null, true), this.parse(P), this.$x = this.$x || P.x || {}, this[I] = true;
        }
        var C = k.prototype;
        return C.parse = function(P) {
          this.$d = (function(W) {
            var Y = W.date, te = W.utc;
            if (Y === null) return /* @__PURE__ */ new Date(NaN);
            if (L.u(Y)) return /* @__PURE__ */ new Date();
            if (Y instanceof Date) return new Date(Y);
            if (typeof Y == "string" && !/Z$/i.test(Y)) {
              var j = Y.match(b);
              if (j) {
                var z = j[2] - 1 || 0, K = (j[7] || "0").substring(0, 3);
                return te ? new Date(Date.UTC(j[1], z, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, K)) : new Date(j[1], z, j[3] || 1, j[4] || 0, j[5] || 0, j[6] || 0, K);
              }
            }
            return new Date(Y);
          })(P), this.init();
        }, C.init = function() {
          var P = this.$d;
          this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
        }, C.$utils = function() {
          return L;
        }, C.isValid = function() {
          return this.$d.toString() !== S;
        }, C.isSame = function(P, W) {
          var Y = U(P);
          return this.startOf(W) <= Y && Y <= this.endOf(W);
        }, C.isAfter = function(P, W) {
          return U(P) < this.startOf(W);
        }, C.isBefore = function(P, W) {
          return this.endOf(W) < U(P);
        }, C.$g = function(P, W, Y) {
          return L.u(P) ? this[W] : this.set(Y, P);
        }, C.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, C.valueOf = function() {
          return this.$d.getTime();
        }, C.startOf = function(P, W) {
          var Y = this, te = !!L.u(W) || W, j = L.p(P), z = function(Q, ce) {
            var fe = L.w(Y.$u ? Date.UTC(Y.$y, ce, Q) : new Date(Y.$y, ce, Q), Y);
            return te ? fe : fe.endOf(d);
          }, K = function(Q, ce) {
            return L.w(Y.toDate()[Q].apply(Y.toDate("s"), (te ? [
              0,
              0,
              0,
              0
            ] : [
              23,
              59,
              59,
              999
            ]).slice(ce)), Y);
          }, X = this.$W, se = this.$M, H = this.$D, re = "set" + (this.$u ? "UTC" : "");
          switch (j) {
            case y:
              return te ? z(1, 0) : z(31, 11);
            case m:
              return te ? z(1, se) : z(0, se + 1);
            case f:
              var ne = this.$locale().weekStart || 0, q = (X < ne ? X + 7 : X) - ne;
              return z(te ? H - q : H + (6 - q), se);
            case d:
            case v:
              return K(re + "Hours", 0);
            case c:
              return K(re + "Minutes", 1);
            case l:
              return K(re + "Seconds", 2);
            case a:
              return K(re + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, C.endOf = function(P) {
          return this.startOf(P, false);
        }, C.$set = function(P, W) {
          var Y, te = L.p(P), j = "set" + (this.$u ? "UTC" : ""), z = (Y = {}, Y[d] = j + "Date", Y[v] = j + "Date", Y[m] = j + "Month", Y[y] = j + "FullYear", Y[c] = j + "Hours", Y[l] = j + "Minutes", Y[a] = j + "Seconds", Y[i] = j + "Milliseconds", Y)[te], K = te === d ? this.$D + (W - this.$W) : W;
          if (te === m || te === y) {
            var X = this.clone().set(v, 1);
            X.$d[z](K), X.init(), this.$d = X.set(v, Math.min(this.$D, X.daysInMonth())).$d;
          } else z && this.$d[z](K);
          return this.init(), this;
        }, C.set = function(P, W) {
          return this.clone().$set(P, W);
        }, C.get = function(P) {
          return this[L.p(P)]();
        }, C.add = function(P, W) {
          var Y, te = this;
          P = Number(P);
          var j = L.p(W), z = function(se) {
            var H = U(te);
            return L.w(H.date(H.date() + Math.round(se * P)), te);
          };
          if (j === m) return this.set(m, this.$M + P);
          if (j === y) return this.set(y, this.$y + P);
          if (j === d) return z(1);
          if (j === f) return z(7);
          var K = (Y = {}, Y[l] = r, Y[c] = s, Y[a] = n, Y)[j] || 1, X = this.$d.getTime() + P * K;
          return L.w(X, this);
        }, C.subtract = function(P, W) {
          return this.add(-1 * P, W);
        }, C.format = function(P) {
          var W = this, Y = this.$locale();
          if (!this.isValid()) return Y.invalidDate || S;
          var te = P || "YYYY-MM-DDTHH:mm:ssZ", j = L.z(this), z = this.$H, K = this.$m, X = this.$M, se = Y.weekdays, H = Y.months, re = Y.meridiem, ne = function(ce, fe, be, G) {
            return ce && (ce[fe] || ce(W, te)) || be[fe].slice(0, G);
          }, q = function(ce) {
            return L.s(z % 12 || 12, ce, "0");
          }, Q = re || function(ce, fe, be) {
            var G = ce < 12 ? "AM" : "PM";
            return be ? G.toLowerCase() : G;
          };
          return te.replace(_, (function(ce, fe) {
            return fe || (function(be) {
              switch (be) {
                case "YY":
                  return String(W.$y).slice(-2);
                case "YYYY":
                  return L.s(W.$y, 4, "0");
                case "M":
                  return X + 1;
                case "MM":
                  return L.s(X + 1, 2, "0");
                case "MMM":
                  return ne(Y.monthsShort, X, H, 3);
                case "MMMM":
                  return ne(H, X);
                case "D":
                  return W.$D;
                case "DD":
                  return L.s(W.$D, 2, "0");
                case "d":
                  return String(W.$W);
                case "dd":
                  return ne(Y.weekdaysMin, W.$W, se, 2);
                case "ddd":
                  return ne(Y.weekdaysShort, W.$W, se, 3);
                case "dddd":
                  return se[W.$W];
                case "H":
                  return String(z);
                case "HH":
                  return L.s(z, 2, "0");
                case "h":
                  return q(1);
                case "hh":
                  return q(2);
                case "a":
                  return Q(z, K, true);
                case "A":
                  return Q(z, K, false);
                case "m":
                  return String(K);
                case "mm":
                  return L.s(K, 2, "0");
                case "s":
                  return String(W.$s);
                case "ss":
                  return L.s(W.$s, 2, "0");
                case "SSS":
                  return L.s(W.$ms, 3, "0");
                case "Z":
                  return j;
              }
              return null;
            })(ce) || j.replace(":", "");
          }));
        }, C.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, C.diff = function(P, W, Y) {
          var te, j = this, z = L.p(W), K = U(P), X = (K.utcOffset() - this.utcOffset()) * r, se = this - K, H = function() {
            return L.m(j, K);
          };
          switch (z) {
            case y:
              te = H() / 12;
              break;
            case m:
              te = H();
              break;
            case g:
              te = H() / 3;
              break;
            case f:
              te = (se - X) / 6048e5;
              break;
            case d:
              te = (se - X) / 864e5;
              break;
            case c:
              te = se / s;
              break;
            case l:
              te = se / r;
              break;
            case a:
              te = se / n;
              break;
            default:
              te = se;
          }
          return Y ? te : L.a(te);
        }, C.daysInMonth = function() {
          return this.endOf(m).$D;
        }, C.$locale = function() {
          return N[this.$L];
        }, C.locale = function(P, W) {
          if (!P) return this.$L;
          var Y = this.clone(), te = J(P, W, true);
          return te && (Y.$L = te), Y;
        }, C.clone = function() {
          return L.w(this.$d, this);
        }, C.toDate = function() {
          return new Date(this.valueOf());
        }, C.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, C.toISOString = function() {
          return this.$d.toISOString();
        }, C.toString = function() {
          return this.$d.toUTCString();
        }, k;
      })(), Z = ee.prototype;
      return U.prototype = Z, [
        [
          "$ms",
          i
        ],
        [
          "$s",
          a
        ],
        [
          "$m",
          l
        ],
        [
          "$H",
          c
        ],
        [
          "$W",
          d
        ],
        [
          "$M",
          m
        ],
        [
          "$y",
          y
        ],
        [
          "$D",
          v
        ]
      ].forEach((function(k) {
        Z[k[1]] = function(C) {
          return this.$g(C, k[0], k[1]);
        };
      })), U.extend = function(k, C) {
        return k.$i || (k(C, ee, U), k.$i = true), U;
      }, U.locale = J, U.isDayjs = O, U.unix = function(k) {
        return U(1e3 * k);
      }, U.en = N[x], U.Ls = N, U.p = {}, U;
    }));
  })(yu);
  var cO = yu.exports;
  const vt = Xr(cO), bg = $.oneOfType([
    $.func,
    $.object
  ]), uO = [
    "localeText"
  ], uc = wh(null), wg = function(e) {
    const { localeText: n } = e, r = Ne(e, uO), { utils: s, localeText: i } = bh(uc) ?? {
      utils: void 0,
      localeText: void 0
    }, a = ct({
      props: r,
      name: "MuiLocalizationProvider"
    }), { children: l, dateAdapter: c, dateFormats: d, dateLibInstance: f, adapterLocale: m, localeText: g } = a, y = Re(() => F({}, g, i, n), [
      g,
      i,
      n
    ]), v = Re(() => {
      if (!c) return s || null;
      const _ = new c({
        locale: m,
        formats: d,
        instance: f
      });
      if (!_.isMUIAdapter) throw new Error([
        "MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`",
        "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`",
        "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"
      ].join(`
`));
      return _;
    }, [
      c,
      m,
      d,
      f,
      s
    ]), S = Re(() => v ? {
      minDate: v.date("1900-01-01T00:00:00.000"),
      maxDate: v.date("2099-12-31T00:00:00.000")
    } : null, [
      v
    ]), b = Re(() => ({
      utils: v,
      defaultDates: S,
      localeText: y
    }), [
      S,
      v,
      y
    ]);
    return D.jsx(uc.Provider, {
      value: b,
      children: l
    });
  }, dO = (t) => ({
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: F({}, t)
        }
      }
    }
  }), Sg = (t) => {
    const { utils: e, formatKey: n, contextTranslation: r, propsTranslation: s } = t;
    return (i) => {
      const a = i !== null && e.isValid(i) ? e.format(i, n) : null;
      return (s ?? r)(i, e, a);
    };
  }, _g = {
    previousMonth: "Previous month",
    nextMonth: "Next month",
    openPreviousView: "Open previous view",
    openNextView: "Open next view",
    calendarViewSwitchingButtonAriaLabel: (t) => t === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
    start: "Start",
    end: "End",
    startDate: "Start date",
    startTime: "Start time",
    endDate: "End date",
    endTime: "End time",
    cancelButtonLabel: "Cancel",
    clearButtonLabel: "Clear",
    okButtonLabel: "OK",
    todayButtonLabel: "Today",
    datePickerToolbarTitle: "Select date",
    dateTimePickerToolbarTitle: "Select date & time",
    timePickerToolbarTitle: "Select time",
    dateRangePickerToolbarTitle: "Select date range",
    clockLabelText: (t, e, n, r) => `Select ${t}. ${!r && (e === null || !n.isValid(e)) ? "No time selected" : `Selected time is ${r ?? n.format(e, "fullTime")}`}`,
    hoursClockNumberText: (t) => `${t} hours`,
    minutesClockNumberText: (t) => `${t} minutes`,
    secondsClockNumberText: (t) => `${t} seconds`,
    selectViewText: (t) => `Select ${t}`,
    calendarWeekNumberHeaderLabel: "Week number",
    calendarWeekNumberHeaderText: "#",
    calendarWeekNumberAriaLabelText: (t) => `Week ${t}`,
    calendarWeekNumberText: (t) => `${t}`,
    openDatePickerDialogue: (t, e, n) => n || t !== null && e.isValid(t) ? `Choose date, selected date is ${n ?? e.format(t, "fullDate")}` : "Choose date",
    openTimePickerDialogue: (t, e, n) => n || t !== null && e.isValid(t) ? `Choose time, selected time is ${n ?? e.format(t, "fullTime")}` : "Choose time",
    fieldClearLabel: "Clear",
    timeTableLabel: "pick time",
    dateTableLabel: "pick date",
    fieldYearPlaceholder: (t) => "Y".repeat(t.digitAmount),
    fieldMonthPlaceholder: (t) => t.contentType === "letter" ? "MMMM" : "MM",
    fieldDayPlaceholder: () => "DD",
    fieldWeekDayPlaceholder: (t) => t.contentType === "letter" ? "EEEE" : "EE",
    fieldHoursPlaceholder: () => "hh",
    fieldMinutesPlaceholder: () => "mm",
    fieldSecondsPlaceholder: () => "ss",
    fieldMeridiemPlaceholder: () => "aa",
    year: "Year",
    month: "Month",
    day: "Day",
    weekDay: "Week day",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    meridiem: "Meridiem",
    empty: "Empty"
  }, fO = _g;
  dO(_g);
  const Wi = () => {
    const t = bh(uc);
    if (t === null) throw new Error([
      "MUI X: Can not find the date and time pickers localization context.",
      "It looks like you forgot to wrap your component in LocalizationProvider.",
      "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"
    ].join(`
`));
    if (t.utils === null) throw new Error([
      "MUI X: Can not find the date and time pickers adapter from its localization context.",
      "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."
    ].join(`
`));
    const e = Re(() => F({}, fO, t.localeText), [
      t.localeText
    ]);
    return Re(() => F({}, t, {
      localeText: e
    }), [
      t,
      e
    ]);
  }, xt = () => Wi().utils, vu = (t) => {
    const e = xt(), n = Oe(void 0);
    return n.current === void 0 && (n.current = e.date(void 0, t)), n.current;
  }, pn = () => Wi().localeText;
  Mr(D.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  const hO = Mr(D.jsx("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), "ArrowLeft"), mO = Mr(D.jsx("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "ArrowRight");
  Mr(D.jsx("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
  }), "Calendar");
  const pO = Mr(D.jsxs(Kn, {
    children: [
      D.jsx("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }),
      D.jsx("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      })
    ]
  }), "Clock");
  Mr(D.jsx("path", {
    d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
  }), "DateRange");
  Mr(D.jsxs(Kn, {
    children: [
      D.jsx("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }),
      D.jsx("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      })
    ]
  }), "Time");
  const gO = Mr(D.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear");
  function yO(t) {
    return wt("MuiPickersArrowSwitcher", t);
  }
  St("MuiPickersArrowSwitcher", [
    "root",
    "spacer",
    "button",
    "previousIconButton",
    "nextIconButton",
    "leftArrowIcon",
    "rightArrowIcon"
  ]);
  const vO = [
    "children",
    "className",
    "slots",
    "slotProps",
    "isNextDisabled",
    "isNextHidden",
    "onGoToNext",
    "nextLabel",
    "isPreviousDisabled",
    "isPreviousHidden",
    "onGoToPrevious",
    "previousLabel",
    "labelId"
  ], bO = [
    "ownerState"
  ], wO = [
    "ownerState"
  ], SO = _e("div", {
    name: "MuiPickersArrowSwitcher",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "flex"
  }), _O = _e("div", {
    name: "MuiPickersArrowSwitcher",
    slot: "Spacer",
    overridesResolver: (t, e) => e.spacer
  })(({ theme: t }) => ({
    width: t.spacing(3)
  })), Jf = _e(Oi, {
    name: "MuiPickersArrowSwitcher",
    slot: "Button",
    overridesResolver: (t, e) => e.button
  })({
    variants: [
      {
        props: {
          hidden: true
        },
        style: {
          visibility: "hidden"
        }
      }
    ]
  }), DO = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      spacer: [
        "spacer"
      ],
      button: [
        "button"
      ],
      previousIconButton: [
        "previousIconButton"
      ],
      nextIconButton: [
        "nextIconButton"
      ],
      leftArrowIcon: [
        "leftArrowIcon"
      ],
      rightArrowIcon: [
        "rightArrowIcon"
      ]
    }, yO, e);
  }, kO = gt(function(e, n) {
    const r = xr(), s = ct({
      props: e,
      name: "MuiPickersArrowSwitcher"
    }), { children: i, className: a, slots: l, slotProps: c, isNextDisabled: d, isNextHidden: f, onGoToNext: m, nextLabel: g, isPreviousDisabled: y, isPreviousHidden: v, onGoToPrevious: S, previousLabel: b, labelId: _ } = s, E = Ne(s, vO), R = s, T = DO(R), x = {
      isDisabled: d,
      isHidden: f,
      goTo: m,
      label: g
    }, N = {
      isDisabled: y,
      isHidden: v,
      goTo: S,
      label: b
    }, I = (l == null ? void 0 : l.previousIconButton) ?? Jf, O = lt({
      elementType: I,
      externalSlotProps: c == null ? void 0 : c.previousIconButton,
      additionalProps: {
        size: "medium",
        title: N.label,
        "aria-label": N.label,
        disabled: N.isDisabled,
        edge: "end",
        onClick: N.goTo
      },
      ownerState: F({}, R, {
        hidden: N.isHidden
      }),
      className: Rt(T.button, T.previousIconButton)
    }), J = (l == null ? void 0 : l.nextIconButton) ?? Jf, U = lt({
      elementType: J,
      externalSlotProps: c == null ? void 0 : c.nextIconButton,
      additionalProps: {
        size: "medium",
        title: x.label,
        "aria-label": x.label,
        disabled: x.isDisabled,
        edge: "start",
        onClick: x.goTo
      },
      ownerState: F({}, R, {
        hidden: x.isHidden
      }),
      className: Rt(T.button, T.nextIconButton)
    }), L = (l == null ? void 0 : l.leftArrowIcon) ?? hO, ee = lt({
      elementType: L,
      externalSlotProps: c == null ? void 0 : c.leftArrowIcon,
      additionalProps: {
        fontSize: "inherit"
      },
      ownerState: R,
      className: T.leftArrowIcon
    }), Z = Ne(ee, bO), k = (l == null ? void 0 : l.rightArrowIcon) ?? mO, C = lt({
      elementType: k,
      externalSlotProps: c == null ? void 0 : c.rightArrowIcon,
      additionalProps: {
        fontSize: "inherit"
      },
      ownerState: R,
      className: T.rightArrowIcon
    }), P = Ne(C, wO);
    return D.jsxs(SO, F({
      ref: n,
      className: Rt(T.root, a),
      ownerState: R
    }, E, {
      children: [
        D.jsx(I, F({}, O, {
          children: r ? D.jsx(k, F({}, P)) : D.jsx(L, F({}, Z))
        })),
        i ? D.jsx(oo, {
          variant: "subtitle1",
          component: "span",
          id: _,
          children: i
        }) : D.jsx(_O, {
          className: T.spacer,
          ownerState: R
        }),
        D.jsx(J, F({}, U, {
          children: r ? D.jsx(L, F({}, Z)) : D.jsx(k, F({}, P))
        }))
      ]
    }));
  }), ri = (t, e) => t.length !== e.length ? false : e.every((n) => t.includes(n)), TO = ({ openTo: t, defaultOpenTo: e, views: n, defaultViews: r }) => {
    const s = n ?? r;
    let i;
    if (t != null) i = t;
    else if (s.includes(e)) i = e;
    else if (s.length > 0) i = s[0];
    else throw new Error("MUI X: The `views` prop must contain at least one view.");
    return {
      views: s,
      openTo: i
    };
  }, Dg = [
    "hours",
    "minutes",
    "seconds"
  ], Ci = (t) => Dg.includes(t), xO = (t) => Dg.includes(t) || t === "meridiem", MO = (t, e) => t ? e.getHours(t) >= 12 ? "pm" : "am" : null, Ai = (t, e, n) => n && (t >= 12 ? "pm" : "am") !== e ? e === "am" ? t - 12 : t + 12 : t, EO = (t, e, n, r) => {
    const s = Ai(r.getHours(t), e, n);
    return r.setHours(t, s);
  }, Kf = (t, e) => e.getHours(t) * 3600 + e.getMinutes(t) * 60 + e.getSeconds(t), Ui = (t, e) => (n, r) => t ? e.isAfter(n, r) : Kf(n, e) > Kf(r, e), kg = (t, { format: e, views: n, ampm: r }) => {
    if (e != null) return e;
    const s = t.formats;
    return ri(n, [
      "hours"
    ]) ? r ? `${s.hours12h} ${s.meridiem}` : s.hours24h : ri(n, [
      "minutes"
    ]) ? s.minutes : ri(n, [
      "seconds"
    ]) ? s.seconds : ri(n, [
      "minutes",
      "seconds"
    ]) ? `${s.minutes}:${s.seconds}` : ri(n, [
      "hours",
      "minutes",
      "seconds"
    ]) ? r ? `${s.hours12h}:${s.minutes}:${s.seconds} ${s.meridiem}` : `${s.hours24h}:${s.minutes}:${s.seconds}` : r ? `${s.hours12h}:${s.minutes} ${s.meridiem}` : `${s.hours24h}:${s.minutes}`;
  };
  function Lo({ onChange: t, onViewChange: e, openTo: n, view: r, views: s, autoFocus: i, focusedView: a, onFocusedViewChange: l }) {
    const c = Oe(n), d = Oe(s), f = Oe(s.includes(n) ? n : s[0]), [m, g] = Oa({
      name: "useViews",
      state: "view",
      controlled: r,
      default: f.current
    }), y = Oe(i ? m : null), [v, S] = Oa({
      name: "useViews",
      state: "focusedView",
      controlled: a,
      default: y.current
    });
    Je(() => {
      (c.current && c.current !== n || d.current && d.current.some((I) => !s.includes(I))) && (g(s.includes(n) ? n : s[0]), d.current = s, c.current = n);
    }, [
      n,
      g,
      m,
      s
    ]);
    const b = s.indexOf(m), _ = s[b - 1] ?? null, E = s[b + 1] ?? null, R = Ee((I, O) => {
      S(O ? I : (J) => I === J ? null : J), l == null ? void 0 : l(I, O);
    }), T = Ee((I) => {
      R(I, true), I !== m && (g(I), e && e(I));
    }), x = Ee(() => {
      E && T(E);
    }), N = Ee((I, O, J) => {
      const U = O === "finish", L = J ? s.indexOf(J) < s.length - 1 : !!E;
      if (t(I, U && L ? "partial" : O, J), J && J !== m) {
        const Z = s[s.indexOf(J) + 1];
        Z && T(Z);
      } else U && x();
    });
    return {
      view: m,
      setView: T,
      focusedView: v,
      setFocusedView: R,
      nextView: E,
      previousView: _,
      defaultView: s.includes(n) ? n : s[0],
      goToNextView: x,
      setValueAndGoToNextView: N
    };
  }
  function bu(t, e, n, r) {
    const s = xt(), i = MO(t, s), a = _r((l) => {
      const c = t == null ? null : EO(t, l, !!e, s);
      n(c, r ?? "partial");
    }, [
      e,
      t,
      n,
      r,
      s
    ]);
    return {
      meridiemMode: i,
      handleMeridiemChange: a
    };
  }
  const Tg = 320, xg = 336, Mg = 232, CO = 48, wu = _e("div")({
    overflow: "hidden",
    width: Tg,
    maxHeight: xg,
    display: "flex",
    flexDirection: "column",
    margin: "0 auto"
  });
  function AO(t) {
    return wt("MuiTimeClock", t);
  }
  St("MuiTimeClock", [
    "root",
    "arrowSwitcher"
  ]);
  const Ys = 220, Jn = 36, Ri = {
    x: Ys / 2,
    y: Ys / 2
  }, Eg = {
    x: Ri.x,
    y: 0
  }, RO = Eg.x - Ri.x, OO = Eg.y - Ri.y, IO = (t) => t * (180 / Math.PI), Cg = (t, e, n) => {
    const r = e - Ri.x, s = n - Ri.y, i = Math.atan2(RO, OO) - Math.atan2(r, s);
    let a = IO(i);
    a = Math.round(a / t) * t, a %= 360;
    const l = Math.floor(a / t) || 0, c = r ** 2 + s ** 2, d = Math.sqrt(c);
    return {
      value: l,
      distance: d
    };
  }, PO = (t, e, n = 1) => {
    const r = n * 6;
    let { value: s } = Cg(r, t, e);
    return s = s * n % 60, s;
  }, NO = (t, e, n) => {
    const { value: r, distance: s } = Cg(30, t, e);
    let i = r || 12;
    return n ? i %= 12 : s < Ys / 2 - Jn && (i += 12, i %= 24), i;
  };
  function LO(t) {
    return wt("MuiClockPointer", t);
  }
  St("MuiClockPointer", [
    "root",
    "thumb"
  ]);
  const YO = [
    "className",
    "hasSelected",
    "isInner",
    "type",
    "viewValue"
  ], FO = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      thumb: [
        "thumb"
      ]
    }, LO, e);
  }, HO = _e("div", {
    name: "MuiClockPointer",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    width: 2,
    backgroundColor: (t.vars || t).palette.primary.main,
    position: "absolute",
    left: "calc(50% - 1px)",
    bottom: "50%",
    transformOrigin: "center bottom 0px",
    variants: [
      {
        props: {
          shouldAnimate: true
        },
        style: {
          transition: t.transitions.create([
            "transform",
            "height"
          ])
        }
      }
    ]
  })), jO = _e("div", {
    name: "MuiClockPointer",
    slot: "Thumb",
    overridesResolver: (t, e) => e.thumb
  })(({ theme: t }) => ({
    width: 4,
    height: 4,
    backgroundColor: (t.vars || t).palette.primary.contrastText,
    borderRadius: "50%",
    position: "absolute",
    top: -21,
    left: `calc(50% - ${Jn / 2}px)`,
    border: `${(Jn - 4) / 2}px solid ${(t.vars || t).palette.primary.main}`,
    boxSizing: "content-box",
    variants: [
      {
        props: {
          hasSelected: true
        },
        style: {
          backgroundColor: (t.vars || t).palette.primary.main
        }
      }
    ]
  }));
  function VO(t) {
    const e = ct({
      props: t,
      name: "MuiClockPointer"
    }), { className: n, isInner: r, type: s, viewValue: i } = e, a = Ne(e, YO), l = Oe(s);
    Je(() => {
      l.current = s;
    }, [
      s
    ]);
    const c = F({}, e, {
      shouldAnimate: l.current !== s
    }), d = FO(c), f = () => {
      let g = 360 / (s === "hours" ? 12 : 60) * i;
      return s === "hours" && i > 12 && (g -= 360), {
        height: Math.round((r ? 0.26 : 0.4) * Ys),
        transform: `rotateZ(${g}deg)`
      };
    };
    return D.jsx(HO, F({
      style: f(),
      className: Rt(d.root, n),
      ownerState: c
    }, a, {
      children: D.jsx(jO, {
        ownerState: c,
        className: d.thumb
      })
    }));
  }
  function WO(t) {
    return wt("MuiClock", t);
  }
  St("MuiClock", [
    "root",
    "clock",
    "wrapper",
    "squareMask",
    "pin",
    "amButton",
    "pmButton",
    "meridiemText",
    "selected"
  ]);
  const eh = (t, e, n) => {
    let r = e;
    return r = t.setHours(r, t.getHours(n)), r = t.setMinutes(r, t.getMinutes(n)), r = t.setSeconds(r, t.getSeconds(n)), r = t.setMilliseconds(r, t.getMilliseconds(n)), r;
  }, UO = (t, e) => e == null || !t.isValid(e) ? null : e, BO = (t, e, n) => !t.isValid(e) && e != null && !t.isValid(n) && n != null ? true : t.isEqual(e, n), Ag = (t, e) => {
    const r = [
      t.startOfYear(e)
    ];
    for (; r.length < 12; ) {
      const s = r[r.length - 1];
      r.push(t.addMonths(s, 1));
    }
    return r;
  }, Su = (t, e, n) => n === "date" ? t.startOfDay(t.date(void 0, e)) : t.date(void 0, e), br = (t, e) => {
    const n = t.setHours(t.date(), e === "am" ? 2 : 14);
    return t.format(n, "meridiem");
  }, zO = (t) => {
    const { classes: e, meridiemMode: n } = t;
    return mt({
      root: [
        "root"
      ],
      clock: [
        "clock"
      ],
      wrapper: [
        "wrapper"
      ],
      squareMask: [
        "squareMask"
      ],
      pin: [
        "pin"
      ],
      amButton: [
        "amButton",
        n === "am" && "selected"
      ],
      pmButton: [
        "pmButton",
        n === "pm" && "selected"
      ],
      meridiemText: [
        "meridiemText"
      ]
    }, WO, e);
  }, $O = _e("div", {
    name: "MuiClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: t.spacing(2)
  })), GO = _e("div", {
    name: "MuiClock",
    slot: "Clock",
    overridesResolver: (t, e) => e.clock
  })({
    backgroundColor: "rgba(0,0,0,.07)",
    borderRadius: "50%",
    height: 220,
    width: 220,
    flexShrink: 0,
    position: "relative",
    pointerEvents: "none"
  }), ZO = _e("div", {
    name: "MuiClock",
    slot: "Wrapper",
    overridesResolver: (t, e) => e.wrapper
  })({
    "&:focus": {
      outline: "none"
    }
  }), qO = _e("div", {
    name: "MuiClock",
    slot: "SquareMask",
    overridesResolver: (t, e) => e.squareMask
  })({
    width: "100%",
    height: "100%",
    position: "absolute",
    pointerEvents: "auto",
    outline: 0,
    touchAction: "none",
    userSelect: "none",
    variants: [
      {
        props: {
          disabled: false
        },
        style: {
          "@media (pointer: fine)": {
            cursor: "pointer",
            borderRadius: "50%"
          },
          "&:active": {
            cursor: "move"
          }
        }
      }
    ]
  }), QO = _e("div", {
    name: "MuiClock",
    slot: "Pin",
    overridesResolver: (t, e) => e.pin
  })(({ theme: t }) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    backgroundColor: (t.vars || t).palette.primary.main,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  })), Rg = (t, e) => ({
    zIndex: 1,
    bottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    width: Jn,
    variants: [
      {
        props: {
          meridiemMode: e
        },
        style: {
          backgroundColor: (t.vars || t).palette.primary.main,
          color: (t.vars || t).palette.primary.contrastText,
          "&:hover": {
            backgroundColor: (t.vars || t).palette.primary.light
          }
        }
      }
    ]
  }), XO = _e(Oi, {
    name: "MuiClock",
    slot: "AmButton",
    overridesResolver: (t, e) => e.amButton
  })(({ theme: t }) => F({}, Rg(t, "am"), {
    position: "absolute",
    left: 8
  })), JO = _e(Oi, {
    name: "MuiClock",
    slot: "PmButton",
    overridesResolver: (t, e) => e.pmButton
  })(({ theme: t }) => F({}, Rg(t, "pm"), {
    position: "absolute",
    right: 8
  })), th = _e(oo, {
    name: "MuiClock",
    slot: "meridiemText",
    overridesResolver: (t, e) => e.meridiemText
  })({
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  });
  function KO(t) {
    const e = ct({
      props: t,
      name: "MuiClock"
    }), { ampm: n, ampmInClock: r, autoFocus: s, children: i, value: a, handleMeridiemChange: l, isTimeDisabled: c, meridiemMode: d, minutesStep: f = 1, onChange: m, selectedId: g, type: y, viewValue: v, viewRange: [S, b], disabled: _ = false, readOnly: E, className: R } = e, T = e, x = xt(), N = pn(), I = Oe(false), O = zO(T), J = c(v, y), U = !n && y === "hours" && (v < 1 || v > 12), L = (X, se) => {
      _ || E || c(X, y) || m(X, se);
    }, ee = (X, se) => {
      let { offsetX: H, offsetY: re } = X;
      if (H === void 0) {
        const q = X.target.getBoundingClientRect();
        H = X.changedTouches[0].clientX - q.left, re = X.changedTouches[0].clientY - q.top;
      }
      const ne = y === "seconds" || y === "minutes" ? PO(H, re, f) : NO(H, re, !!n);
      L(ne, se);
    }, Z = (X) => {
      I.current = true, ee(X, "shallow");
    }, k = (X) => {
      I.current && (ee(X, "finish"), I.current = false), X.preventDefault();
    }, C = (X) => {
      X.buttons > 0 && ee(X.nativeEvent, "shallow");
    }, P = (X) => {
      I.current && (I.current = false), ee(X.nativeEvent, "finish");
    }, W = Re(() => y === "hours" ? true : v % 5 === 0, [
      y,
      v
    ]), Y = y === "minutes" ? f : 1, te = Oe(null);
    Rs(() => {
      s && te.current.focus();
    }, [
      s
    ]);
    const j = (X) => Math.max(S, Math.min(b, X)), z = (X) => (X + (b + 1)) % (b + 1), K = (X) => {
      if (!I.current) switch (X.key) {
        case "Home":
          L(S, "partial"), X.preventDefault();
          break;
        case "End":
          L(b, "partial"), X.preventDefault();
          break;
        case "ArrowUp":
          L(z(v + Y), "partial"), X.preventDefault();
          break;
        case "ArrowDown":
          L(z(v - Y), "partial"), X.preventDefault();
          break;
        case "PageUp":
          L(j(v + 5), "partial"), X.preventDefault();
          break;
        case "PageDown":
          L(j(v - 5), "partial"), X.preventDefault();
          break;
        case "Enter":
        case " ":
          L(v, "finish"), X.preventDefault();
          break;
      }
    };
    return D.jsxs($O, {
      className: Rt(O.root, R),
      children: [
        D.jsxs(GO, {
          className: O.clock,
          children: [
            D.jsx(qO, {
              onTouchMove: Z,
              onTouchStart: Z,
              onTouchEnd: k,
              onMouseUp: P,
              onMouseMove: C,
              ownerState: {
                disabled: _
              },
              className: O.squareMask
            }),
            !J && D.jsxs(Kn, {
              children: [
                D.jsx(QO, {
                  className: O.pin
                }),
                a != null && D.jsx(VO, {
                  type: y,
                  viewValue: v,
                  isInner: U,
                  hasSelected: W
                })
              ]
            }),
            D.jsx(ZO, {
              "aria-activedescendant": g,
              "aria-label": N.clockLabelText(y, a, x, a == null ? null : x.format(a, "fullTime")),
              ref: te,
              role: "listbox",
              onKeyDown: K,
              tabIndex: 0,
              className: O.wrapper,
              children: i
            })
          ]
        }),
        n && r && D.jsxs(Kn, {
          children: [
            D.jsx(XO, {
              onClick: E ? void 0 : () => l("am"),
              disabled: _ || d === null,
              ownerState: T,
              className: O.amButton,
              title: br(x, "am"),
              children: D.jsx(th, {
                variant: "caption",
                className: O.meridiemText,
                children: br(x, "am")
              })
            }),
            D.jsx(JO, {
              disabled: _ || d === null,
              onClick: E ? void 0 : () => l("pm"),
              ownerState: T,
              className: O.pmButton,
              title: br(x, "pm"),
              children: D.jsx(th, {
                variant: "caption",
                className: O.meridiemText,
                children: br(x, "pm")
              })
            })
          ]
        })
      ]
    });
  }
  function eI(t) {
    return wt("MuiClockNumber", t);
  }
  const ba = St("MuiClockNumber", [
    "root",
    "selected",
    "disabled"
  ]), tI = [
    "className",
    "disabled",
    "index",
    "inner",
    "label",
    "selected"
  ], nI = (t) => {
    const { classes: e, selected: n, disabled: r } = t;
    return mt({
      root: [
        "root",
        n && "selected",
        r && "disabled"
      ]
    }, eI, e);
  }, rI = _e("span", {
    name: "MuiClockNumber",
    slot: "Root",
    overridesResolver: (t, e) => [
      e.root,
      {
        [`&.${ba.disabled}`]: e.disabled
      },
      {
        [`&.${ba.selected}`]: e.selected
      }
    ]
  })(({ theme: t }) => ({
    height: Jn,
    width: Jn,
    position: "absolute",
    left: `calc((100% - ${Jn}px) / 2)`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color: (t.vars || t).palette.text.primary,
    fontFamily: t.typography.fontFamily,
    "&:focused": {
      backgroundColor: (t.vars || t).palette.background.paper
    },
    [`&.${ba.selected}`]: {
      color: (t.vars || t).palette.primary.contrastText
    },
    [`&.${ba.disabled}`]: {
      pointerEvents: "none",
      color: (t.vars || t).palette.text.disabled
    },
    variants: [
      {
        props: {
          inner: true
        },
        style: F({}, t.typography.body2, {
          color: (t.vars || t).palette.text.secondary
        })
      }
    ]
  }));
  function Og(t) {
    const e = ct({
      props: t,
      name: "MuiClockNumber"
    }), { className: n, disabled: r, index: s, inner: i, label: a, selected: l } = e, c = Ne(e, tI), d = e, f = nI(d), m = s % 12 / 12 * Math.PI * 2 - Math.PI / 2, g = (Ys - Jn - 2) / 2 * (i ? 0.65 : 1), y = Math.round(Math.cos(m) * g), v = Math.round(Math.sin(m) * g);
    return D.jsx(rI, F({
      className: Rt(f.root, n),
      "aria-disabled": r ? true : void 0,
      "aria-selected": l ? true : void 0,
      role: "option",
      style: {
        transform: `translate(${y}px, ${v + (Ys - Jn) / 2}px`
      },
      ownerState: d
    }, c, {
      children: a
    }));
  }
  const sI = ({ ampm: t, value: e, getClockNumberText: n, isDisabled: r, selectedId: s, utils: i }) => {
    const a = e ? i.getHours(e) : null, l = [], c = t ? 1 : 0, d = t ? 12 : 23, f = (m) => a === null ? false : t ? m === 12 ? a === 12 || a === 0 : a === m || a - 12 === m : a === m;
    for (let m = c; m <= d; m += 1) {
      let g = m.toString();
      m === 0 && (g = "00");
      const y = !t && (m === 0 || m > 12);
      g = i.formatNumber(g);
      const v = f(m);
      l.push(D.jsx(Og, {
        id: v ? s : void 0,
        index: m,
        inner: y,
        selected: v,
        disabled: r(m),
        label: g,
        "aria-label": n(g)
      }, m));
    }
    return l;
  }, nh = ({ utils: t, value: e, isDisabled: n, getClockNumberText: r, selectedId: s }) => {
    const i = t.formatNumber;
    return [
      [
        5,
        i("05")
      ],
      [
        10,
        i("10")
      ],
      [
        15,
        i("15")
      ],
      [
        20,
        i("20")
      ],
      [
        25,
        i("25")
      ],
      [
        30,
        i("30")
      ],
      [
        35,
        i("35")
      ],
      [
        40,
        i("40")
      ],
      [
        45,
        i("45")
      ],
      [
        50,
        i("50")
      ],
      [
        55,
        i("55")
      ],
      [
        0,
        i("00")
      ]
    ].map(([a, l], c) => {
      const d = a === e;
      return D.jsx(Og, {
        label: l,
        id: d ? s : void 0,
        index: c + 1,
        inner: false,
        disabled: n(a),
        selected: d,
        "aria-label": r(l)
      }, a);
    });
  }, _u = ({ timezone: t, value: e, defaultValue: n, referenceDate: r, onChange: s, valueManager: i }) => {
    const a = xt(), l = Oe(n), c = e ?? l.current ?? i.emptyValue, d = Re(() => i.getTimezone(a, c), [
      a,
      i,
      c
    ]), f = Ee((v) => d == null ? v : i.setTimezone(a, d, v));
    let m;
    t ? m = t : d ? m = d : r ? m = a.getTimezone(r) : m = "default";
    const g = Re(() => i.setTimezone(a, m, c), [
      i,
      a,
      m,
      c
    ]), y = Ee((v, ...S) => {
      const b = f(v);
      s == null ? void 0 : s(b, ...S);
    });
    return {
      value: g,
      handleValueChange: y,
      timezone: m
    };
  }, Du = ({ name: t, timezone: e, value: n, defaultValue: r, referenceDate: s, onChange: i, valueManager: a }) => {
    const [l, c] = Oa({
      name: t,
      state: "value",
      controlled: n,
      default: r ?? a.emptyValue
    }), d = Ee((f, ...m) => {
      c(f), i == null ? void 0 : i(f, ...m);
    });
    return _u({
      timezone: e,
      value: l,
      defaultValue: void 0,
      referenceDate: s,
      onChange: d,
      valueManager: a
    });
  }, dr = {
    year: 1,
    month: 2,
    day: 3,
    hours: 4,
    minutes: 5,
    seconds: 6,
    milliseconds: 7
  }, iI = (t) => Math.max(...t.map((e) => dr[e.type] ?? 1)), si = (t, e, n) => {
    if (e === dr.year) return t.startOfYear(n);
    if (e === dr.month) return t.startOfMonth(n);
    if (e === dr.day) return t.startOfDay(n);
    let r = n;
    return e < dr.minutes && (r = t.setMinutes(r, 0)), e < dr.seconds && (r = t.setSeconds(r, 0)), e < dr.milliseconds && (r = t.setMilliseconds(r, 0)), r;
  }, aI = ({ props: t, utils: e, granularity: n, timezone: r, getTodayDate: s }) => {
    let i = s ? s() : si(e, n, Su(e, r));
    t.minDate != null && e.isAfterDay(t.minDate, i) && (i = si(e, n, t.minDate)), t.maxDate != null && e.isBeforeDay(t.maxDate, i) && (i = si(e, n, t.maxDate));
    const a = Ui(t.disableIgnoringDatePartForTimeValidation ?? false, e);
    return t.minTime != null && a(t.minTime, i) && (i = si(e, n, t.disableIgnoringDatePartForTimeValidation ? t.minTime : eh(e, i, t.minTime))), t.maxTime != null && a(i, t.maxTime) && (i = si(e, n, t.disableIgnoringDatePartForTimeValidation ? t.maxTime : eh(e, i, t.maxTime))), i;
  }, Ig = (t, e) => {
    const n = t.formatTokenMap[e];
    if (n == null) throw new Error([
      `MUI X: The token "${e}" is not supported by the Date and Time Pickers.`,
      "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."
    ].join(`
`));
    return typeof n == "string" ? {
      type: n,
      contentType: n === "meridiem" ? "letter" : "digit",
      maxLength: void 0
    } : {
      type: n.sectionType,
      contentType: n.contentType,
      maxLength: n.maxLength
    };
  }, oI = (t) => {
    switch (t) {
      case "ArrowUp":
        return 1;
      case "ArrowDown":
        return -1;
      case "PageUp":
        return 5;
      case "PageDown":
        return -5;
      default:
        return 0;
    }
  }, Yo = (t, e) => {
    const n = [], r = t.date(void 0, "default"), s = t.startOfWeek(r), i = t.endOfWeek(r);
    let a = s;
    for (; t.isBefore(a, i); ) n.push(a), a = t.addDays(a, 1);
    return n.map((l) => t.formatByString(l, e));
  }, Pg = (t, e, n, r) => {
    switch (n) {
      case "month":
        return Ag(t, t.date(void 0, e)).map((s) => t.formatByString(s, r));
      case "weekDay":
        return Yo(t, r);
      case "meridiem": {
        const s = t.date(void 0, e);
        return [
          t.startOfDay(s),
          t.endOfDay(s)
        ].map((i) => t.formatByString(i, r));
      }
      default:
        return [];
    }
  }, rh = "s", lI = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ], cI = (t) => {
    const e = t.date(void 0);
    return t.formatByString(t.setSeconds(e, 0), rh) === "0" ? lI : Array.from({
      length: 10
    }).map((r, s) => t.formatByString(t.setSeconds(e, s), rh));
  }, Qr = (t, e) => {
    if (e[0] === "0") return t;
    const n = [];
    let r = "";
    for (let s = 0; s < t.length; s += 1) {
      r += t[s];
      const i = e.indexOf(r);
      i > -1 && (n.push(i.toString()), r = "");
    }
    return n.join("");
  }, ku = (t, e) => e[0] === "0" ? t : t.split("").map((n) => e[Number(n)]).join(""), sh = (t, e) => {
    const n = Qr(t, e);
    return n !== " " && !Number.isNaN(Number(n));
  }, Ng = (t, e) => {
    let n = t;
    for (n = Number(n).toString(); n.length < e; ) n = `0${n}`;
    return n;
  }, Lg = (t, e, n, r, s) => {
    if (s.type === "day" && s.contentType === "digit-with-letter") {
      const a = t.setDate(n.longestMonth, e);
      return t.formatByString(a, s.format);
    }
    let i = e.toString();
    return s.hasLeadingZerosInInput && (i = Ng(i, s.maxLength)), ku(i, r);
  }, uI = (t, e, n, r, s, i, a, l) => {
    const c = oI(r), d = r === "Home", f = r === "End", m = n.value === "" || d || f, g = () => {
      const v = s[n.type]({
        currentDate: a,
        format: n.format,
        contentType: n.contentType
      }), S = (E) => Lg(t, E, v, i, n), b = n.type === "minutes" && (l == null ? void 0 : l.minutesStep) ? l.minutesStep : 1;
      let _;
      if (m) {
        if (n.type === "year" && !f && !d) return t.formatByString(t.date(void 0, e), n.format);
        c > 0 || d ? _ = v.minimum : _ = v.maximum;
      } else _ = parseInt(Qr(n.value, i), 10) + c * b;
      return _ % b !== 0 && ((c < 0 || d) && (_ += b - (b + _) % b), (c > 0 || f) && (_ -= _ % b)), _ > v.maximum ? S(v.minimum + (_ - v.maximum - 1) % (v.maximum - v.minimum + 1)) : _ < v.minimum ? S(v.maximum - (v.minimum - _ - 1) % (v.maximum - v.minimum + 1)) : S(_);
    }, y = () => {
      const v = Pg(t, e, n.type, n.format);
      if (v.length === 0) return n.value;
      if (m) return c > 0 || d ? v[0] : v[v.length - 1];
      const _ = ((v.indexOf(n.value) + c) % v.length + v.length) % v.length;
      return v[_];
    };
    return n.contentType === "digit" || n.contentType === "digit-with-letter" ? g() : y();
  }, Tu = (t, e, n) => {
    let r = t.value || t.placeholder;
    const s = e === "non-input" ? t.hasLeadingZerosInFormat : t.hasLeadingZerosInInput;
    return e === "non-input" && t.hasLeadingZerosInInput && !t.hasLeadingZerosInFormat && (r = Number(Qr(r, n)).toString()), [
      "input-rtl",
      "input-ltr"
    ].includes(e) && t.contentType === "digit" && !s && r.length === 1 && (r = `${r}\u200E`), e === "input-rtl" && (r = `\u2068${r}\u2069`), r;
  }, ih = (t, e, n, r) => t.formatByString(t.parse(e, n), r), dI = (t, e) => t.formatByString(t.date(void 0, "system"), e).length === 4, Yg = (t, e, n, r) => {
    if (e !== "digit") return false;
    const s = t.date(void 0, "default");
    switch (n) {
      case "year":
        return t.lib === "dayjs" && r === "YY" ? true : t.formatByString(t.setYear(s, 1), r).startsWith("0");
      case "month":
        return t.formatByString(t.startOfYear(s), r).length > 1;
      case "day":
        return t.formatByString(t.startOfMonth(s), r).length > 1;
      case "weekDay":
        return t.formatByString(t.startOfWeek(s), r).length > 1;
      case "hours":
        return t.formatByString(t.setHours(s, 1), r).length > 1;
      case "minutes":
        return t.formatByString(t.setMinutes(s, 1), r).length > 1;
      case "seconds":
        return t.formatByString(t.setSeconds(s, 1), r).length > 1;
      default:
        throw new Error("Invalid section type");
    }
  }, fI = (t, e, n) => {
    const r = e.some((c) => c.type === "day"), s = [], i = [];
    for (let c = 0; c < e.length; c += 1) {
      const d = e[c];
      r && d.type === "weekDay" || (s.push(d.format), i.push(Tu(d, "non-input", n)));
    }
    const a = s.join(" "), l = i.join(" ");
    return t.parse(l, a);
  }, hI = (t) => t.map((e) => `${e.startSeparator}${e.value || e.placeholder}${e.endSeparator}`).join(""), mI = (t, e, n) => {
    const s = t.map((i) => {
      const a = Tu(i, n ? "input-rtl" : "input-ltr", e);
      return `${i.startSeparator}${a}${i.endSeparator}`;
    }).join("");
    return n ? `\u2066${s}\u2069` : s;
  }, pI = (t, e, n) => {
    const r = t.date(void 0, n), s = t.endOfYear(r), i = t.endOfDay(r), { maxDaysInMonth: a, longestMonth: l } = Ag(t, r).reduce((c, d) => {
      const f = t.getDaysInMonth(d);
      return f > c.maxDaysInMonth ? {
        maxDaysInMonth: f,
        longestMonth: d
      } : c;
    }, {
      maxDaysInMonth: 0,
      longestMonth: null
    });
    return {
      year: ({ format: c }) => ({
        minimum: 0,
        maximum: dI(t, c) ? 9999 : 99
      }),
      month: () => ({
        minimum: 1,
        maximum: t.getMonth(s) + 1
      }),
      day: ({ currentDate: c }) => ({
        minimum: 1,
        maximum: c != null && t.isValid(c) ? t.getDaysInMonth(c) : a,
        longestMonth: l
      }),
      weekDay: ({ format: c, contentType: d }) => {
        if (d === "digit") {
          const f = Yo(t, c).map(Number);
          return {
            minimum: Math.min(...f),
            maximum: Math.max(...f)
          };
        }
        return {
          minimum: 1,
          maximum: 7
        };
      },
      hours: ({ format: c }) => {
        const d = t.getHours(i);
        return Qr(t.formatByString(t.endOfDay(r), c), e) !== d.toString() ? {
          minimum: 1,
          maximum: Number(Qr(t.formatByString(t.startOfDay(r), c), e))
        } : {
          minimum: 0,
          maximum: d
        };
      },
      minutes: () => ({
        minimum: 0,
        maximum: t.getMinutes(i)
      }),
      seconds: () => ({
        minimum: 0,
        maximum: t.getSeconds(i)
      }),
      meridiem: () => ({
        minimum: 0,
        maximum: 1
      }),
      empty: () => ({
        minimum: 0,
        maximum: 0
      })
    };
  }, gI = (t, e, n, r) => {
    switch (e.type) {
      case "year":
        return t.setYear(r, t.getYear(n));
      case "month":
        return t.setMonth(r, t.getMonth(n));
      case "weekDay": {
        const s = Yo(t, e.format), i = t.formatByString(n, e.format), a = s.indexOf(i), c = s.indexOf(e.value) - a;
        return t.addDays(n, c);
      }
      case "day":
        return t.setDate(r, t.getDate(n));
      case "meridiem": {
        const s = t.getHours(n) < 12, i = t.getHours(r);
        return s && i >= 12 ? t.addHours(r, -12) : !s && i < 12 ? t.addHours(r, 12) : r;
      }
      case "hours":
        return t.setHours(r, t.getHours(n));
      case "minutes":
        return t.setMinutes(r, t.getMinutes(n));
      case "seconds":
        return t.setSeconds(r, t.getSeconds(n));
      default:
        return r;
    }
  }, ah = {
    year: 1,
    month: 2,
    day: 3,
    weekDay: 4,
    hours: 5,
    minutes: 6,
    seconds: 7,
    meridiem: 8,
    empty: 9
  }, oh = (t, e, n, r, s) => [
    ...n
  ].sort((i, a) => ah[i.type] - ah[a.type]).reduce((i, a) => !s || a.modified ? gI(t, a, e, i) : i, r), yI = () => navigator.userAgent.toLowerCase().includes("android"), vI = (t, e) => {
    const n = {};
    if (!e) return t.forEach((c, d) => {
      const f = d === 0 ? null : d - 1, m = d === t.length - 1 ? null : d + 1;
      n[d] = {
        leftIndex: f,
        rightIndex: m
      };
    }), {
      neighbors: n,
      startIndex: 0,
      endIndex: t.length - 1
    };
    const r = {}, s = {};
    let i = 0, a = 0, l = t.length - 1;
    for (; l >= 0; ) {
      a = t.findIndex((c, d) => {
        var _a2;
        return d >= i && ((_a2 = c.endSeparator) == null ? void 0 : _a2.includes(" ")) && c.endSeparator !== " / ";
      }), a === -1 && (a = t.length - 1);
      for (let c = a; c >= i; c -= 1) s[c] = l, r[l] = c, l -= 1;
      i = a + 1;
    }
    return t.forEach((c, d) => {
      const f = s[d], m = f === 0 ? null : r[f - 1], g = f === t.length - 1 ? null : r[f + 1];
      n[d] = {
        leftIndex: m,
        rightIndex: g
      };
    }), {
      neighbors: n,
      startIndex: r[0],
      endIndex: r[t.length - 1]
    };
  }, dc = (t, e) => {
    if (t == null) return null;
    if (t === "all") return "all";
    if (typeof t == "string") {
      const n = e.findIndex((r) => r.type === t);
      return n === -1 ? null : n;
    }
    return t;
  }, bI = (t, e) => {
    if (t.value) switch (t.type) {
      case "month": {
        if (t.contentType === "digit") return e.format(e.setMonth(e.date(), Number(t.value) - 1), "month");
        const n = e.parse(t.value, t.format);
        return n ? e.format(n, "month") : void 0;
      }
      case "day":
        return t.contentType === "digit" ? e.format(e.setDate(e.startOfYear(e.date()), Number(t.value)), "dayOfMonthFull") : t.value;
      case "weekDay":
        return;
      default:
        return;
    }
  }, wI = (t, e) => {
    if (t.value) switch (t.type) {
      case "weekDay":
        return t.contentType === "letter" ? void 0 : Number(t.value);
      case "meridiem": {
        const n = e.parse(`01:00 ${t.value}`, `${e.formats.hours12h}:${e.formats.minutes} ${t.format}`);
        return n ? e.getHours(n) >= 12 ? 1 : 0 : void 0;
      }
      case "day":
        return t.contentType === "digit-with-letter" ? parseInt(t.value, 10) : Number(t.value);
      case "month": {
        if (t.contentType === "digit") return Number(t.value);
        const n = e.parse(t.value, t.format);
        return n ? e.getMonth(n) + 1 : void 0;
      }
      default:
        return t.contentType !== "letter" ? Number(t.value) : void 0;
    }
  }, SI = [
    "value",
    "referenceDate"
  ], Ar = {
    emptyValue: null,
    getTodayValue: Su,
    getInitialReferenceValue: (t) => {
      let { value: e, referenceDate: n } = t, r = Ne(t, SI);
      return e != null && r.utils.isValid(e) ? e : n ?? aI(r);
    },
    cleanValue: UO,
    areValuesEqual: BO,
    isSameError: (t, e) => t === e,
    hasError: (t) => t != null,
    defaultErrorState: null,
    getTimezone: (t, e) => e == null || !t.isValid(e) ? null : t.getTimezone(e),
    setTimezone: (t, e, n) => n == null ? null : t.setTimezone(n, e)
  }, _I = {
    updateReferenceValue: (t, e, n) => e == null || !t.isValid(e) ? n : e,
    getSectionsFromValue: (t, e, n, r) => !t.isValid(e) && !!n ? n : r(e),
    getV7HiddenInputValueFromSections: hI,
    getV6InputValueFromSections: mI,
    getActiveDateManager: (t, e) => ({
      date: e.value,
      referenceDate: e.referenceValue,
      getSections: (n) => n,
      getNewValuesFromNewActiveDate: (n) => ({
        value: n,
        referenceValue: n == null || !t.isValid(n) ? e.referenceValue : n
      })
    }),
    parseValueStr: (t, e, n) => n(t.trim(), e)
  }, xu = ({ value: t, referenceDate: e, utils: n, props: r, timezone: s }) => {
    const i = Re(() => Ar.getInitialReferenceValue({
      value: t,
      utils: n,
      props: r,
      referenceDate: e,
      granularity: dr.day,
      timezone: s,
      getTodayDate: () => Su(n, s, "date")
    }), []);
    return t ?? i;
  }, DI = [
    "ampm",
    "ampmInClock",
    "autoFocus",
    "slots",
    "slotProps",
    "value",
    "defaultValue",
    "referenceDate",
    "disableIgnoringDatePartForTimeValidation",
    "maxTime",
    "minTime",
    "disableFuture",
    "disablePast",
    "minutesStep",
    "shouldDisableTime",
    "showViewSwitcher",
    "onChange",
    "view",
    "views",
    "openTo",
    "onViewChange",
    "focusedView",
    "onFocusedViewChange",
    "className",
    "disabled",
    "readOnly",
    "timezone"
  ], kI = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      arrowSwitcher: [
        "arrowSwitcher"
      ]
    }, AO, e);
  }, TI = _e(wu, {
    name: "MuiTimeClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "flex",
    flexDirection: "column",
    position: "relative"
  }), xI = _e(kO, {
    name: "MuiTimeClock",
    slot: "ArrowSwitcher",
    overridesResolver: (t, e) => e.arrowSwitcher
  })({
    position: "absolute",
    right: 12,
    top: 15
  }), MI = [
    "hours",
    "minutes"
  ], EI = gt(function(e, n) {
    const r = xt(), s = ct({
      props: e,
      name: "MuiTimeClock"
    }), { ampm: i = r.is12HourCycleInCurrentLocale(), ampmInClock: a = false, autoFocus: l, slots: c, slotProps: d, value: f, defaultValue: m, referenceDate: g, disableIgnoringDatePartForTimeValidation: y = false, maxTime: v, minTime: S, disableFuture: b, disablePast: _, minutesStep: E = 1, shouldDisableTime: R, showViewSwitcher: T, onChange: x, view: N, views: I = MI, openTo: O, onViewChange: J, focusedView: U, onFocusedViewChange: L, className: ee, disabled: Z, readOnly: k, timezone: C } = s, P = Ne(s, DI), { value: W, handleValueChange: Y, timezone: te } = Du({
      name: "TimeClock",
      timezone: C,
      value: f,
      defaultValue: m,
      referenceDate: g,
      onChange: x,
      valueManager: Ar
    }), j = xu({
      value: W,
      referenceDate: g,
      utils: r,
      props: s,
      timezone: te
    }), z = pn(), K = vu(te), { view: X, setView: se, previousView: H, nextView: re, setValueAndGoToNextView: ne } = Lo({
      view: N,
      views: I,
      openTo: O,
      onViewChange: J,
      onChange: Y,
      focusedView: U,
      onFocusedViewChange: L
    }), { meridiemMode: q, handleMeridiemChange: Q } = bu(j, i, ne), ce = _r((he, ve) => {
      const oe = Ui(y, r), Me = ve === "hours" || ve === "minutes" && I.includes("seconds"), we = ({ start: Se, end: kt }) => !(S && oe(S, kt) || v && oe(Se, v) || b && oe(Se, K) || _ && oe(K, Me ? kt : Se)), pe = (Se, kt = 1) => {
        if (Se % kt !== 0) return false;
        if (R) switch (ve) {
          case "hours":
            return !R(r.setHours(j, Se), "hours");
          case "minutes":
            return !R(r.setMinutes(j, Se), "minutes");
          case "seconds":
            return !R(r.setSeconds(j, Se), "seconds");
          default:
            return false;
        }
        return true;
      };
      switch (ve) {
        case "hours": {
          const Se = Ai(he, q, i), kt = r.setHours(j, Se);
          if (r.getHours(kt) !== Se) return true;
          const gn = r.setSeconds(r.setMinutes(kt, 0), 0), Rr = r.setSeconds(r.setMinutes(kt, 59), 59);
          return !we({
            start: gn,
            end: Rr
          }) || !pe(Se);
        }
        case "minutes": {
          const Se = r.setMinutes(j, he), kt = r.setSeconds(Se, 0), gn = r.setSeconds(Se, 59);
          return !we({
            start: kt,
            end: gn
          }) || !pe(he, E);
        }
        case "seconds": {
          const Se = r.setSeconds(j, he);
          return !we({
            start: Se,
            end: Se
          }) || !pe(he);
        }
        default:
          throw new Error("not supported");
      }
    }, [
      i,
      j,
      y,
      v,
      q,
      S,
      E,
      R,
      r,
      b,
      _,
      K,
      I
    ]), fe = Ii(), be = Re(() => {
      switch (X) {
        case "hours": {
          const he = (Me, we) => {
            const pe = Ai(Me, q, i);
            ne(r.setHours(j, pe), we, "hours");
          }, ve = r.getHours(j);
          let oe;
          return i ? ve > 12 ? oe = [
            12,
            23
          ] : oe = [
            0,
            11
          ] : oe = [
            0,
            23
          ], {
            onChange: he,
            viewValue: ve,
            children: sI({
              value: W,
              utils: r,
              ampm: i,
              getClockNumberText: z.hoursClockNumberText,
              isDisabled: (Me) => Z || ce(Me, "hours"),
              selectedId: fe
            }),
            viewRange: oe
          };
        }
        case "minutes": {
          const he = r.getMinutes(j);
          return {
            viewValue: he,
            onChange: (oe, Me) => {
              ne(r.setMinutes(j, oe), Me, "minutes");
            },
            children: nh({
              utils: r,
              value: he,
              getClockNumberText: z.minutesClockNumberText,
              isDisabled: (oe) => Z || ce(oe, "minutes"),
              selectedId: fe
            }),
            viewRange: [
              0,
              59
            ]
          };
        }
        case "seconds": {
          const he = r.getSeconds(j);
          return {
            viewValue: he,
            onChange: (oe, Me) => {
              ne(r.setSeconds(j, oe), Me, "seconds");
            },
            children: nh({
              utils: r,
              value: he,
              getClockNumberText: z.secondsClockNumberText,
              isDisabled: (oe) => Z || ce(oe, "seconds"),
              selectedId: fe
            }),
            viewRange: [
              0,
              59
            ]
          };
        }
        default:
          throw new Error("You must provide the type for ClockView");
      }
    }, [
      X,
      r,
      W,
      i,
      z.hoursClockNumberText,
      z.minutesClockNumberText,
      z.secondsClockNumberText,
      q,
      ne,
      j,
      ce,
      fe,
      Z
    ]), G = s, le = kI(G);
    return D.jsxs(TI, F({
      ref: n,
      className: Rt(le.root, ee),
      ownerState: G
    }, P, {
      children: [
        D.jsx(KO, F({
          autoFocus: l ?? !!U,
          ampmInClock: a && I.includes("hours"),
          value: W,
          type: X,
          ampm: i,
          minutesStep: E,
          isTimeDisabled: ce,
          meridiemMode: q,
          handleMeridiemChange: Q,
          selectedId: fe,
          disabled: Z,
          readOnly: k
        }, be)),
        T && D.jsx(xI, {
          className: le.arrowSwitcher,
          slots: c,
          slotProps: d,
          onGoToPrevious: () => se(H),
          isPreviousDisabled: !H,
          previousLabel: z.openPreviousView,
          onGoToNext: () => se(re),
          isNextDisabled: !re,
          nextLabel: z.openNextView,
          ownerState: G
        })
      ]
    }));
  });
  function CI(t) {
    return wt("MuiDigitalClock", t);
  }
  St("MuiDigitalClock", [
    "root",
    "list",
    "item"
  ]);
  function vs(t, e) {
    return Array.isArray(e) ? e.every((n) => t.indexOf(n) !== -1) : t.indexOf(e) !== -1;
  }
  const AI = (t, e) => (n) => {
    (n.key === "Enter" || n.key === " ") && (t(n), n.preventDefault(), n.stopPropagation());
  }, Yt = (t = document) => {
    const e = t.activeElement;
    return e ? e.shadowRoot ? Yt(e.shadowRoot) : e : null;
  }, ao = (t) => Array.from(t.children).indexOf(Yt(document)), RI = "@media (pointer: fine)", OI = [
    "ampm",
    "timeStep",
    "autoFocus",
    "slots",
    "slotProps",
    "value",
    "defaultValue",
    "referenceDate",
    "disableIgnoringDatePartForTimeValidation",
    "maxTime",
    "minTime",
    "disableFuture",
    "disablePast",
    "minutesStep",
    "shouldDisableTime",
    "onChange",
    "view",
    "openTo",
    "onViewChange",
    "focusedView",
    "onFocusedViewChange",
    "className",
    "disabled",
    "readOnly",
    "views",
    "skipDisabled",
    "timezone"
  ], II = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      list: [
        "list"
      ],
      item: [
        "item"
      ]
    }, CI, e);
  }, PI = _e(wu, {
    name: "MuiDigitalClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    overflowY: "auto",
    width: "100%",
    "@media (prefers-reduced-motion: no-preference)": {
      scrollBehavior: "auto"
    },
    maxHeight: Mg,
    variants: [
      {
        props: {
          alreadyRendered: true
        },
        style: {
          "@media (prefers-reduced-motion: no-preference)": {
            scrollBehavior: "smooth"
          }
        }
      }
    ]
  }), NI = _e(Dh, {
    name: "MuiDigitalClock",
    slot: "List",
    overridesResolver: (t, e) => e.list
  })({
    padding: 0
  }), LI = _e(_h, {
    name: "MuiDigitalClock",
    slot: "Item",
    overridesResolver: (t, e) => e.item
  })(({ theme: t }) => ({
    padding: "8px 16px",
    margin: "2px 4px",
    "&:first-of-type": {
      marginTop: 4
    },
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})` : Ia(t.palette.primary.main, t.palette.action.hoverOpacity)
    },
    "&.Mui-selected": {
      backgroundColor: (t.vars || t).palette.primary.main,
      color: (t.vars || t).palette.primary.contrastText,
      "&:focus-visible, &:hover": {
        backgroundColor: (t.vars || t).palette.primary.dark
      }
    },
    "&.Mui-focusVisible": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.focusOpacity})` : Ia(t.palette.primary.main, t.palette.action.focusOpacity)
    }
  })), YI = gt(function(e, n) {
    const r = xt(), s = Oe(null), i = Zt(n, s), a = Oe(null), l = ct({
      props: e,
      name: "MuiDigitalClock"
    }), { ampm: c = r.is12HourCycleInCurrentLocale(), timeStep: d = 30, autoFocus: f, slots: m, slotProps: g, value: y, defaultValue: v, referenceDate: S, disableIgnoringDatePartForTimeValidation: b = false, maxTime: _, minTime: E, disableFuture: R, disablePast: T, minutesStep: x = 1, shouldDisableTime: N, onChange: I, view: O, openTo: J, onViewChange: U, focusedView: L, onFocusedViewChange: ee, className: Z, disabled: k, readOnly: C, views: P = [
      "hours"
    ], skipDisabled: W = false, timezone: Y } = l, te = Ne(l, OI), { value: j, handleValueChange: z, timezone: K } = Du({
      name: "DigitalClock",
      timezone: Y,
      value: y,
      defaultValue: v,
      referenceDate: S,
      onChange: I,
      valueManager: Ar
    }), X = pn(), se = vu(K), H = Re(() => F({}, l, {
      alreadyRendered: !!s.current
    }), [
      l
    ]), re = II(H), ne = (m == null ? void 0 : m.digitalClockItem) ?? LI, q = lt({
      elementType: ne,
      externalSlotProps: g == null ? void 0 : g.digitalClockItem,
      ownerState: {},
      className: re.item
    }), Q = xu({
      value: j,
      referenceDate: S,
      utils: r,
      props: l,
      timezone: K
    }), ce = Ee((oe) => z(oe, "finish", "hours")), { setValueAndGoToNextView: fe } = Lo({
      view: O,
      views: P,
      openTo: J,
      onViewChange: U,
      onChange: ce,
      focusedView: L,
      onFocusedViewChange: ee
    }), be = Ee((oe) => {
      fe(oe, "finish");
    });
    Je(() => {
      if (s.current === null) return;
      const oe = s.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
      if (!oe) return;
      const Me = oe.offsetTop;
      (f || L) && oe.focus(), s.current.scrollTop = Me - 4;
    });
    const G = _r((oe) => {
      const Me = Ui(b, r), we = () => !(E && Me(E, oe) || _ && Me(oe, _) || R && Me(oe, se) || T && Me(se, oe)), pe = () => r.getMinutes(oe) % x !== 0 ? false : N ? !N(oe, "hours") : true;
      return !we() || !pe();
    }, [
      b,
      r,
      E,
      _,
      R,
      se,
      T,
      x,
      N
    ]), le = Re(() => {
      const oe = [];
      let we = r.startOfDay(Q);
      for (; r.isSameDay(Q, we); ) oe.push(we), we = r.addMinutes(we, d);
      return oe;
    }, [
      Q,
      d,
      r
    ]), he = le.findIndex((oe) => r.isEqual(oe, Q)), ve = (oe) => {
      switch (oe.key) {
        case "PageUp": {
          const Me = ao(a.current) - 5, we = a.current.children, pe = Math.max(0, Me), Se = we[pe];
          Se && Se.focus(), oe.preventDefault();
          break;
        }
        case "PageDown": {
          const Me = ao(a.current) + 5, we = a.current.children, pe = Math.min(we.length - 1, Me), Se = we[pe];
          Se && Se.focus(), oe.preventDefault();
          break;
        }
      }
    };
    return D.jsx(PI, F({
      ref: i,
      className: Rt(re.root, Z),
      ownerState: H
    }, te, {
      children: D.jsx(NI, {
        ref: a,
        role: "listbox",
        "aria-label": X.timePickerToolbarTitle,
        className: re.list,
        onKeyDown: ve,
        children: le.map((oe, Me) => {
          if (W && G(oe)) return null;
          const we = r.isEqual(oe, j), pe = r.format(oe, c ? "fullTime12h" : "fullTime24h"), Se = he === Me || he === -1 && Me === 0 ? 0 : -1;
          return D.jsx(ne, F({
            onClick: () => !C && be(oe),
            selected: we,
            disabled: k || G(oe),
            disableRipple: C,
            role: "option",
            "aria-disabled": C,
            "aria-selected": we,
            tabIndex: Se
          }, q, {
            children: pe
          }), `${oe.valueOf()}-${pe}`);
        })
      })
    }));
  });
  function FI(t) {
    return wt("MuiMultiSectionDigitalClock", t);
  }
  St("MuiMultiSectionDigitalClock", [
    "root"
  ]);
  function HI(t) {
    return wt("MuiMultiSectionDigitalClockSection", t);
  }
  St("MuiMultiSectionDigitalClockSection", [
    "root",
    "item"
  ]);
  const jI = [
    "autoFocus",
    "onChange",
    "className",
    "disabled",
    "readOnly",
    "items",
    "active",
    "slots",
    "slotProps",
    "skipDisabled"
  ], VI = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      item: [
        "item"
      ]
    }, HI, e);
  }, WI = _e(Dh, {
    name: "MuiMultiSectionDigitalClockSection",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    maxHeight: Mg,
    width: 56,
    padding: 0,
    overflow: "hidden",
    "@media (prefers-reduced-motion: no-preference)": {
      scrollBehavior: "auto"
    },
    "@media (pointer: fine)": {
      "&:hover": {
        overflowY: "auto"
      }
    },
    "@media (pointer: none), (pointer: coarse)": {
      overflowY: "auto"
    },
    "&:not(:first-of-type)": {
      borderLeft: `1px solid ${(t.vars || t).palette.divider}`
    },
    "&::after": {
      display: "block",
      content: '""',
      height: "calc(100% - 40px - 6px)"
    },
    variants: [
      {
        props: {
          alreadyRendered: true
        },
        style: {
          "@media (prefers-reduced-motion: no-preference)": {
            scrollBehavior: "smooth"
          }
        }
      }
    ]
  })), UI = _e(_h, {
    name: "MuiMultiSectionDigitalClockSection",
    slot: "Item",
    overridesResolver: (t, e) => e.item
  })(({ theme: t }) => ({
    padding: 8,
    margin: "2px 4px",
    width: CO,
    justifyContent: "center",
    "&:first-of-type": {
      marginTop: 4
    },
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})` : Ia(t.palette.primary.main, t.palette.action.hoverOpacity)
    },
    "&.Mui-selected": {
      backgroundColor: (t.vars || t).palette.primary.main,
      color: (t.vars || t).palette.primary.contrastText,
      "&:focus-visible, &:hover": {
        backgroundColor: (t.vars || t).palette.primary.dark
      }
    },
    "&.Mui-focusVisible": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.focusOpacity})` : Ia(t.palette.primary.main, t.palette.action.focusOpacity)
    }
  })), BI = gt(function(e, n) {
    const r = Oe(null), s = Zt(n, r), i = Oe(null), a = ct({
      props: e,
      name: "MuiMultiSectionDigitalClockSection"
    }), { autoFocus: l, onChange: c, className: d, disabled: f, readOnly: m, items: g, active: y, slots: v, slotProps: S, skipDisabled: b } = a, _ = Ne(a, jI), E = Re(() => F({}, a, {
      alreadyRendered: !!r.current
    }), [
      a
    ]), R = VI(E), T = (v == null ? void 0 : v.digitalClockSectionItem) ?? UI;
    Je(() => {
      if (r.current === null) return;
      const I = r.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
      if (y && l && I && I.focus(), !I || i.current === I) return;
      i.current = I;
      const O = I.offsetTop;
      r.current.scrollTop = O - 4;
    });
    const x = g.findIndex((I) => I.isFocused(I.value)), N = (I) => {
      switch (I.key) {
        case "PageUp": {
          const O = ao(r.current) - 5, J = r.current.children, U = Math.max(0, O), L = J[U];
          L && L.focus(), I.preventDefault();
          break;
        }
        case "PageDown": {
          const O = ao(r.current) + 5, J = r.current.children, U = Math.min(J.length - 1, O), L = J[U];
          L && L.focus(), I.preventDefault();
          break;
        }
      }
    };
    return D.jsx(WI, F({
      ref: s,
      className: Rt(R.root, d),
      ownerState: E,
      autoFocusItem: l && y,
      role: "listbox",
      onKeyDown: N
    }, _, {
      children: g.map((I, O) => {
        var _a2;
        const J = (_a2 = I.isDisabled) == null ? void 0 : _a2.call(I, I.value), U = f || J;
        if (b && U) return null;
        const L = I.isSelected(I.value), ee = x === O || x === -1 && O === 0 ? 0 : -1;
        return D.jsx(T, F({
          onClick: () => !m && c(I.value),
          selected: L,
          disabled: U,
          disableRipple: m,
          role: "option",
          "aria-disabled": m || U || void 0,
          "aria-label": I.ariaLabel,
          "aria-selected": L,
          tabIndex: ee,
          className: R.item
        }, S == null ? void 0 : S.digitalClockSectionItem, {
          children: I.label
        }), I.label);
      })
    }));
  }), zI = ({ now: t, value: e, utils: n, ampm: r, isDisabled: s, resolveAriaLabel: i, timeStep: a, valueOrReferenceDate: l }) => {
    const c = e ? n.getHours(e) : null, d = [], f = (y, v) => {
      const S = v ?? c;
      return S === null ? false : r ? y === 12 ? S === 12 || S === 0 : S === y || S - 12 === y : S === y;
    }, m = (y) => f(y, n.getHours(l)), g = r ? 11 : 23;
    for (let y = 0; y <= g; y += a) {
      let v = n.format(n.setHours(t, y), r ? "hours12h" : "hours24h");
      const S = i(parseInt(v, 10).toString());
      v = n.formatNumber(v), d.push({
        value: y,
        label: v,
        isSelected: f,
        isDisabled: s,
        isFocused: m,
        ariaLabel: S
      });
    }
    return d;
  }, lh = ({ value: t, utils: e, isDisabled: n, timeStep: r, resolveLabel: s, resolveAriaLabel: i, hasValue: a = true }) => {
    const l = (d) => t === null ? false : a && t === d, c = (d) => t === d;
    return [
      ...Array.from({
        length: Math.ceil(60 / r)
      }, (d, f) => {
        const m = r * f;
        return {
          value: m,
          label: e.formatNumber(s(m)),
          isDisabled: n,
          isSelected: l,
          isFocused: c,
          ariaLabel: i(m.toString())
        };
      })
    ];
  }, $I = [
    "ampm",
    "timeSteps",
    "autoFocus",
    "slots",
    "slotProps",
    "value",
    "defaultValue",
    "referenceDate",
    "disableIgnoringDatePartForTimeValidation",
    "maxTime",
    "minTime",
    "disableFuture",
    "disablePast",
    "minutesStep",
    "shouldDisableTime",
    "onChange",
    "view",
    "views",
    "openTo",
    "onViewChange",
    "focusedView",
    "onFocusedViewChange",
    "className",
    "disabled",
    "readOnly",
    "skipDisabled",
    "timezone"
  ], GI = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ]
    }, FI, e);
  }, ZI = _e(wu, {
    name: "MuiMultiSectionDigitalClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottom: `1px solid ${(t.vars || t).palette.divider}`
  })), qI = gt(function(e, n) {
    const r = xt(), s = xr(), i = ct({
      props: e,
      name: "MuiMultiSectionDigitalClock"
    }), { ampm: a = r.is12HourCycleInCurrentLocale(), timeSteps: l, autoFocus: c, slots: d, slotProps: f, value: m, defaultValue: g, referenceDate: y, disableIgnoringDatePartForTimeValidation: v = false, maxTime: S, minTime: b, disableFuture: _, disablePast: E, minutesStep: R = 1, shouldDisableTime: T, onChange: x, view: N, views: I = [
      "hours",
      "minutes"
    ], openTo: O, onViewChange: J, focusedView: U, onFocusedViewChange: L, className: ee, disabled: Z, readOnly: k, skipDisabled: C = false, timezone: P } = i, W = Ne(i, $I), { value: Y, handleValueChange: te, timezone: j } = Du({
      name: "MultiSectionDigitalClock",
      timezone: P,
      value: m,
      defaultValue: g,
      referenceDate: y,
      onChange: x,
      valueManager: Ar
    }), z = pn(), K = vu(j), X = Re(() => F({
      hours: 1,
      minutes: 5,
      seconds: 5
    }, l), [
      l
    ]), se = xu({
      value: Y,
      referenceDate: y,
      utils: r,
      props: i,
      timezone: j
    }), H = Ee((we, pe, Se) => te(we, pe, Se)), re = Re(() => !a || !I.includes("hours") || I.includes("meridiem") ? I : [
      ...I,
      "meridiem"
    ], [
      a,
      I
    ]), { view: ne, setValueAndGoToNextView: q, focusedView: Q } = Lo({
      view: N,
      views: re,
      openTo: O,
      onViewChange: J,
      onChange: H,
      focusedView: U,
      onFocusedViewChange: L
    }), ce = Ee((we) => {
      q(we, "finish", "meridiem");
    }), { meridiemMode: fe, handleMeridiemChange: be } = bu(se, a, ce, "finish"), G = _r((we, pe) => {
      const Se = Ui(v, r), kt = pe === "hours" || pe === "minutes" && re.includes("seconds"), gn = ({ start: dt, end: Ke }) => !(b && Se(b, Ke) || S && Se(dt, S) || _ && Se(dt, K) || E && Se(K, kt ? Ke : dt)), Rr = (dt, Ke = 1) => {
        if (dt % Ke !== 0) return false;
        if (T) switch (pe) {
          case "hours":
            return !T(r.setHours(se, dt), "hours");
          case "minutes":
            return !T(r.setMinutes(se, dt), "minutes");
          case "seconds":
            return !T(r.setSeconds(se, dt), "seconds");
          default:
            return false;
        }
        return true;
      };
      switch (pe) {
        case "hours": {
          const dt = Ai(we, fe, a), Ke = r.setHours(se, dt);
          if (r.getHours(Ke) !== dt) return true;
          const Or = r.setSeconds(r.setMinutes(Ke, 0), 0), Bs = r.setSeconds(r.setMinutes(Ke, 59), 59);
          return !gn({
            start: Or,
            end: Bs
          }) || !Rr(dt);
        }
        case "minutes": {
          const dt = r.setMinutes(se, we), Ke = r.setSeconds(dt, 0), Or = r.setSeconds(dt, 59);
          return !gn({
            start: Ke,
            end: Or
          }) || !Rr(we, R);
        }
        case "seconds": {
          const dt = r.setSeconds(se, we);
          return !gn({
            start: dt,
            end: dt
          }) || !Rr(we);
        }
        default:
          throw new Error("not supported");
      }
    }, [
      a,
      se,
      v,
      S,
      fe,
      b,
      R,
      T,
      r,
      _,
      E,
      K,
      re
    ]), le = _r((we) => {
      switch (we) {
        case "hours":
          return {
            onChange: (pe) => {
              const Se = Ai(pe, fe, a);
              q(r.setHours(se, Se), "finish", "hours");
            },
            items: zI({
              now: K,
              value: Y,
              ampm: a,
              utils: r,
              isDisabled: (pe) => G(pe, "hours"),
              timeStep: X.hours,
              resolveAriaLabel: z.hoursClockNumberText,
              valueOrReferenceDate: se
            })
          };
        case "minutes":
          return {
            onChange: (pe) => {
              q(r.setMinutes(se, pe), "finish", "minutes");
            },
            items: lh({
              value: r.getMinutes(se),
              utils: r,
              isDisabled: (pe) => G(pe, "minutes"),
              resolveLabel: (pe) => r.format(r.setMinutes(K, pe), "minutes"),
              timeStep: X.minutes,
              hasValue: !!Y,
              resolveAriaLabel: z.minutesClockNumberText
            })
          };
        case "seconds":
          return {
            onChange: (pe) => {
              q(r.setSeconds(se, pe), "finish", "seconds");
            },
            items: lh({
              value: r.getSeconds(se),
              utils: r,
              isDisabled: (pe) => G(pe, "seconds"),
              resolveLabel: (pe) => r.format(r.setSeconds(K, pe), "seconds"),
              timeStep: X.seconds,
              hasValue: !!Y,
              resolveAriaLabel: z.secondsClockNumberText
            })
          };
        case "meridiem": {
          const pe = br(r, "am"), Se = br(r, "pm");
          return {
            onChange: be,
            items: [
              {
                value: "am",
                label: pe,
                isSelected: () => !!Y && fe === "am",
                isFocused: () => !!se && fe === "am",
                ariaLabel: pe
              },
              {
                value: "pm",
                label: Se,
                isSelected: () => !!Y && fe === "pm",
                isFocused: () => !!se && fe === "pm",
                ariaLabel: Se
              }
            ]
          };
        }
        default:
          throw new Error(`Unknown view: ${we} found.`);
      }
    }, [
      K,
      Y,
      a,
      r,
      X.hours,
      X.minutes,
      X.seconds,
      z.hoursClockNumberText,
      z.minutesClockNumberText,
      z.secondsClockNumberText,
      fe,
      q,
      se,
      G,
      be
    ]), he = Re(() => {
      if (!s) return re;
      const we = re.filter((pe) => pe !== "meridiem");
      return we.reverse(), re.includes("meridiem") && we.push("meridiem"), we;
    }, [
      s,
      re
    ]), ve = Re(() => re.reduce((we, pe) => F({}, we, {
      [pe]: le(pe)
    }), {}), [
      re,
      le
    ]), oe = i, Me = GI(oe);
    return D.jsx(ZI, F({
      ref: n,
      className: Rt(Me.root, ee),
      ownerState: oe,
      role: "group"
    }, W, {
      children: he.map((we) => D.jsx(BI, {
        items: ve[we].items,
        onChange: ve[we].onChange,
        active: ne === we,
        autoFocus: c || Q === we,
        disabled: Z,
        readOnly: k,
        slots: d,
        slotProps: f,
        skipDisabled: C,
        "aria-label": z.selectViewText(we)
      }, we))
    }));
  }), Fo = ({ adapter: t, value: e, timezone: n, props: r }) => {
    if (e === null) return null;
    const { minTime: s, maxTime: i, minutesStep: a, shouldDisableTime: l, disableIgnoringDatePartForTimeValidation: c = false, disablePast: d, disableFuture: f } = r, m = t.utils.date(void 0, n), g = Ui(c, t.utils);
    switch (true) {
      case !t.utils.isValid(e):
        return "invalidDate";
      case !!(s && g(s, e)):
        return "minTime";
      case !!(i && g(e, i)):
        return "maxTime";
      case !!(f && t.utils.isAfter(e, m)):
        return "disableFuture";
      case !!(d && t.utils.isBefore(e, m)):
        return "disablePast";
      case !!(l && l(e, "hours")):
        return "shouldDisableTime-hours";
      case !!(l && l(e, "minutes")):
        return "shouldDisableTime-minutes";
      case !!(l && l(e, "seconds")):
        return "shouldDisableTime-seconds";
      case !!(a && t.utils.getMinutes(e) % a !== 0):
        return "minutesStep";
      default:
        return null;
    }
  };
  Fo.valueManager = Ar;
  const QI = [
    "disablePast",
    "disableFuture",
    "minDate",
    "maxDate",
    "shouldDisableDate",
    "shouldDisableMonth",
    "shouldDisableYear"
  ], Fg = [
    "disablePast",
    "disableFuture",
    "minTime",
    "maxTime",
    "shouldDisableTime",
    "minutesStep",
    "ampm",
    "disableIgnoringDatePartForTimeValidation"
  ], XI = [
    "minDateTime",
    "maxDateTime"
  ], JI = [
    ...QI,
    ...Fg,
    ...XI
  ], Hg = (t) => JI.reduce((e, n) => (t.hasOwnProperty(n) && (e[n] = t[n]), e), {});
  function jg(t) {
    const { props: e, validator: n, value: r, timezone: s, onError: i } = t, a = Wi(), l = Oe(n.valueManager.defaultErrorState), c = n({
      adapter: a,
      value: r,
      timezone: s,
      props: e
    }), d = n.valueManager.hasError(c);
    Je(() => {
      i && !n.valueManager.isSameError(c, l.current) && i(c, r), l.current = c;
    }, [
      n,
      i,
      c,
      r
    ]);
    const f = Ee((m) => n({
      adapter: a,
      value: m,
      timezone: s,
      props: e
    }));
    return {
      validationError: c,
      hasValidationError: d,
      getValidationErrorForNewValue: f
    };
  }
  const KI = ({ utils: t, format: e }) => {
    let n = 10, r = e, s = t.expandFormat(e);
    for (; s !== r; ) if (r = s, s = t.expandFormat(r), n -= 1, n < 0) throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the picker component.");
    return s;
  }, eP = ({ utils: t, expandedFormat: e }) => {
    const n = [], { start: r, end: s } = t.escapedCharacters, i = new RegExp(`(\\${r}[^\\${s}]*\\${s})+`, "g");
    let a = null;
    for (; a = i.exec(e); ) n.push({
      start: a.index,
      end: i.lastIndex - 1
    });
    return n;
  }, tP = (t, e, n, r) => {
    switch (n.type) {
      case "year":
        return e.fieldYearPlaceholder({
          digitAmount: t.formatByString(t.date(void 0, "default"), r).length,
          format: r
        });
      case "month":
        return e.fieldMonthPlaceholder({
          contentType: n.contentType,
          format: r
        });
      case "day":
        return e.fieldDayPlaceholder({
          format: r
        });
      case "weekDay":
        return e.fieldWeekDayPlaceholder({
          contentType: n.contentType,
          format: r
        });
      case "hours":
        return e.fieldHoursPlaceholder({
          format: r
        });
      case "minutes":
        return e.fieldMinutesPlaceholder({
          format: r
        });
      case "seconds":
        return e.fieldSecondsPlaceholder({
          format: r
        });
      case "meridiem":
        return e.fieldMeridiemPlaceholder({
          format: r
        });
      default:
        return r;
    }
  }, nP = ({ utils: t, date: e, shouldRespectLeadingZeros: n, localeText: r, localizedDigits: s, now: i, token: a, startSeparator: l }) => {
    if (a === "") throw new Error("MUI X: Should not call `commitToken` with an empty token");
    const c = Ig(t, a), d = Yg(t, c.contentType, c.type, a), f = n ? d : c.contentType === "digit", m = e != null && t.isValid(e);
    let g = m ? t.formatByString(e, a) : "", y = null;
    if (f) if (d) y = g === "" ? t.formatByString(i, a).length : g.length;
    else {
      if (c.maxLength == null) throw new Error(`MUI X: The token ${a} should have a 'maxDigitNumber' property on it's adapter`);
      y = c.maxLength, m && (g = ku(Ng(Qr(g, s), y), s));
    }
    return F({}, c, {
      format: a,
      maxLength: y,
      value: g,
      placeholder: tP(t, r, c, a),
      hasLeadingZerosInFormat: d,
      hasLeadingZerosInInput: f,
      startSeparator: l,
      endSeparator: "",
      modified: false
    });
  }, rP = (t) => {
    var _a2;
    const { utils: e, expandedFormat: n, escapedParts: r } = t, s = e.date(void 0), i = [];
    let a = "";
    const l = Object.keys(e.formatTokenMap).sort((y, v) => v.length - y.length), c = /^([a-zA-Z]+)/, d = new RegExp(`^(${l.join("|")})*$`), f = new RegExp(`^(${l.join("|")})`), m = (y) => r.find((v) => v.start <= y && v.end >= y);
    let g = 0;
    for (; g < n.length; ) {
      const y = m(g), v = y != null, S = (_a2 = c.exec(n.slice(g))) == null ? void 0 : _a2[1];
      if (!v && S != null && d.test(S)) {
        let b = S;
        for (; b.length > 0; ) {
          const _ = f.exec(b)[1];
          b = b.slice(_.length), i.push(nP(F({}, t, {
            now: s,
            token: _,
            startSeparator: a
          }))), a = "";
        }
        g += S.length;
      } else {
        const b = n[g];
        v && (y == null ? void 0 : y.start) === g || (y == null ? void 0 : y.end) === g || (i.length === 0 ? a += b : i[i.length - 1].endSeparator += b), g += 1;
      }
    }
    return i.length === 0 && a.length > 0 && i.push({
      type: "empty",
      contentType: "letter",
      maxLength: null,
      format: "",
      value: "",
      placeholder: "",
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator: a,
      endSeparator: "",
      modified: false
    }), i;
  }, sP = ({ isRtl: t, formatDensity: e, sections: n }) => n.map((r) => {
    const s = (i) => {
      let a = i;
      return t && a !== null && a.includes(" ") && (a = `\u2069${a}\u2066`), e === "spacious" && [
        "/",
        ".",
        "-"
      ].includes(a) && (a = ` ${a} `), a;
    };
    return r.startSeparator = s(r.startSeparator), r.endSeparator = s(r.endSeparator), r;
  }), ch = (t) => {
    let e = KI(t);
    t.isRtl && t.enableAccessibleFieldDOMStructure && (e = e.split(" ").reverse().join(" "));
    const n = eP(F({}, t, {
      expandedFormat: e
    })), r = rP(F({}, t, {
      expandedFormat: e,
      escapedParts: n
    }));
    return sP(F({}, t, {
      sections: r
    }));
  }, iP = (t) => {
    const e = xt(), n = pn(), r = Wi(), s = xr(), { valueManager: i, fieldValueManager: a, valueType: l, validator: c, internalProps: d, internalProps: { value: f, defaultValue: m, referenceDate: g, onChange: y, format: v, formatDensity: S = "dense", selectedSections: b, onSelectedSectionsChange: _, shouldRespectLeadingZeros: E = false, timezone: R, enableAccessibleFieldDOMStructure: T = false } } = t, { timezone: x, value: N, handleValueChange: I } = _u({
      timezone: R,
      value: f,
      defaultValue: m,
      referenceDate: g,
      onChange: y,
      valueManager: i
    }), O = Re(() => cI(e), [
      e
    ]), J = Re(() => pI(e, O, x), [
      e,
      O,
      x
    ]), U = _r((H, re = null) => a.getSectionsFromValue(e, H, re, (ne) => ch({
      utils: e,
      localeText: n,
      localizedDigits: O,
      format: v,
      date: ne,
      formatDensity: S,
      shouldRespectLeadingZeros: E,
      enableAccessibleFieldDOMStructure: T,
      isRtl: s
    })), [
      a,
      v,
      n,
      O,
      s,
      E,
      e,
      S,
      T
    ]), [L, ee] = _t(() => {
      const H = U(N), re = {
        sections: H,
        value: N,
        referenceValue: i.emptyValue,
        tempValueStrAndroid: null
      }, ne = iI(H), q = i.getInitialReferenceValue({
        referenceDate: g,
        value: N,
        utils: e,
        props: d,
        granularity: ne,
        timezone: x
      });
      return F({}, re, {
        referenceValue: q
      });
    }), [Z, k] = Oa({
      controlled: b,
      default: null,
      name: "useField",
      state: "selectedSections"
    }), C = (H) => {
      k(H), _ == null ? void 0 : _(H);
    }, P = Re(() => dc(Z, L.sections), [
      Z,
      L.sections
    ]), W = P === "all" ? 0 : P, Y = ({ value: H, referenceValue: re, sections: ne }) => {
      if (ee((Q) => F({}, Q, {
        sections: ne,
        value: H,
        referenceValue: re,
        tempValueStrAndroid: null
      })), i.areValuesEqual(e, L.value, H)) return;
      const q = {
        validationError: c({
          adapter: r,
          value: H,
          timezone: x,
          props: d
        })
      };
      I(H, q);
    }, te = (H, re) => {
      const ne = [
        ...L.sections
      ];
      return ne[H] = F({}, ne[H], {
        value: re,
        modified: true
      }), ne;
    }, j = () => {
      Y({
        value: i.emptyValue,
        referenceValue: L.referenceValue,
        sections: U(i.emptyValue)
      });
    }, z = () => {
      if (W == null) return;
      const H = L.sections[W], re = a.getActiveDateManager(e, L, H), q = re.getSections(L.sections).filter((be) => be.value !== "").length === (H.value === "" ? 0 : 1), Q = te(W, ""), ce = q ? null : e.getInvalidDate(), fe = re.getNewValuesFromNewActiveDate(ce);
      Y(F({}, fe, {
        sections: Q
      }));
    }, K = (H) => {
      const re = (Q, ce) => {
        const fe = e.parse(Q, v);
        if (fe == null || !e.isValid(fe)) return null;
        const be = ch({
          utils: e,
          localeText: n,
          localizedDigits: O,
          format: v,
          date: fe,
          formatDensity: S,
          shouldRespectLeadingZeros: E,
          enableAccessibleFieldDOMStructure: T,
          isRtl: s
        });
        return oh(e, fe, be, ce, false);
      }, ne = a.parseValueStr(H, L.referenceValue, re), q = a.updateReferenceValue(e, ne, L.referenceValue);
      Y({
        value: ne,
        referenceValue: q,
        sections: U(ne, L.sections)
      });
    }, X = ({ activeSection: H, newSectionValue: re, shouldGoToNextSection: ne }) => {
      ne && W < L.sections.length - 1 && C(W + 1);
      const q = a.getActiveDateManager(e, L, H), Q = te(W, re), ce = q.getSections(Q), fe = fI(e, ce, O);
      let be, G;
      if (fe != null && e.isValid(fe)) {
        const le = oh(e, fe, ce, q.referenceDate, true);
        be = q.getNewValuesFromNewActiveDate(le), G = true;
      } else be = q.getNewValuesFromNewActiveDate(fe), G = (fe != null && !e.isValid(fe)) != (q.date != null && !e.isValid(q.date));
      return G ? Y(F({}, be, {
        sections: Q
      })) : ee((le) => F({}, le, be, {
        sections: Q,
        tempValueStrAndroid: null
      }));
    }, se = (H) => ee((re) => F({}, re, {
      tempValueStrAndroid: H
    }));
    return Je(() => {
      const H = U(L.value);
      ee((re) => F({}, re, {
        sections: H
      }));
    }, [
      v,
      e.locale,
      s
    ]), Je(() => {
      let H;
      i.areValuesEqual(e, L.value, N) ? H = i.getTimezone(e, L.value) !== i.getTimezone(e, N) : H = true, H && ee((re) => F({}, re, {
        value: N,
        referenceValue: a.updateReferenceValue(e, N, re.referenceValue),
        sections: U(N)
      }));
    }, [
      N
    ]), {
      state: L,
      activeSectionIndex: W,
      parsedSelectedSections: P,
      setSelectedSections: C,
      clearValue: j,
      clearActiveSection: z,
      updateSectionValue: X,
      updateValueFromValueStr: K,
      setTempAndroidValueStr: se,
      getSectionsFromValue: U,
      sectionsValueBoundaries: J,
      localizedDigits: O,
      timezone: x
    };
  }, aP = 5e3, ps = (t) => t.saveQuery != null, oP = ({ sections: t, updateSectionValue: e, sectionsValueBoundaries: n, localizedDigits: r, setTempAndroidValueStr: s, timezone: i }) => {
    const a = xt(), [l, c] = _t(null), d = Ee(() => c(null));
    Je(() => {
      var _a2;
      l != null && ((_a2 = t[l.sectionIndex]) == null ? void 0 : _a2.type) !== l.sectionType && d();
    }, [
      t,
      l,
      d
    ]), Je(() => {
      if (l != null) {
        const v = setTimeout(() => d(), aP);
        return () => {
          clearTimeout(v);
        };
      }
      return () => {
      };
    }, [
      l,
      d
    ]);
    const f = ({ keyPressed: v, sectionIndex: S }, b, _) => {
      const E = v.toLowerCase(), R = t[S];
      if (l != null && (!_ || _(l.value)) && l.sectionIndex === S) {
        const x = `${l.value}${E}`, N = b(x, R);
        if (!ps(N)) return c({
          sectionIndex: S,
          value: x,
          sectionType: R.type
        }), N;
      }
      const T = b(E, R);
      return ps(T) && !T.saveQuery ? (d(), null) : (c({
        sectionIndex: S,
        value: E,
        sectionType: R.type
      }), ps(T) ? null : T);
    }, m = (v) => {
      const S = (E, R, T) => {
        const x = R.filter((N) => N.toLowerCase().startsWith(T));
        return x.length === 0 ? {
          saveQuery: false
        } : {
          sectionValue: x[0],
          shouldGoToNextSection: x.length === 1
        };
      }, b = (E, R, T, x) => {
        const N = (I) => Pg(a, i, R.type, I);
        if (R.contentType === "letter") return S(R.format, N(R.format), E);
        if (T && x != null && Ig(a, T).contentType === "letter") {
          const I = N(T), O = S(T, I, E);
          return ps(O) ? {
            saveQuery: false
          } : F({}, O, {
            sectionValue: x(O.sectionValue, I)
          });
        }
        return {
          saveQuery: false
        };
      };
      return f(v, (E, R) => {
        switch (R.type) {
          case "month": {
            const T = (x) => ih(a, x, a.formats.month, R.format);
            return b(E, R, a.formats.month, T);
          }
          case "weekDay": {
            const T = (x, N) => N.indexOf(x).toString();
            return b(E, R, a.formats.weekday, T);
          }
          case "meridiem":
            return b(E, R);
          default:
            return {
              saveQuery: false
            };
        }
      });
    }, g = (v) => {
      const S = (_, E) => {
        const R = Qr(_, r), T = Number(R), x = n[E.type]({
          currentDate: null,
          format: E.format,
          contentType: E.contentType
        });
        if (T > x.maximum) return {
          saveQuery: false
        };
        if (T < x.minimum) return {
          saveQuery: true
        };
        const N = T * 10 > x.maximum || R.length === x.maximum.toString().length;
        return {
          sectionValue: Lg(a, T, x, r, E),
          shouldGoToNextSection: N
        };
      };
      return f(v, (_, E) => {
        if (E.contentType === "digit" || E.contentType === "digit-with-letter") return S(_, E);
        if (E.type === "month") {
          Yg(a, "digit", "month", "MM");
          const R = S(_, {
            type: E.type,
            format: "MM",
            hasLeadingZerosInInput: true,
            contentType: "digit",
            maxLength: 2
          });
          if (ps(R)) return R;
          const T = ih(a, R.sectionValue, "MM", E.format);
          return F({}, R, {
            sectionValue: T
          });
        }
        if (E.type === "weekDay") {
          const R = S(_, E);
          if (ps(R)) return R;
          const T = Yo(a, E.format)[Number(R.sectionValue) - 1];
          return F({}, R, {
            sectionValue: T
          });
        }
        return {
          saveQuery: false
        };
      }, (_) => sh(_, r));
    };
    return {
      applyCharacterEditing: Ee((v) => {
        const S = t[v.sectionIndex], _ = sh(v.keyPressed, r) ? g(F({}, v, {
          keyPressed: ku(v.keyPressed, r)
        })) : m(v);
        if (_ == null) {
          s(null);
          return;
        }
        e({
          activeSection: S,
          newSectionValue: _.sectionValue,
          shouldGoToNextSection: _.shouldGoToNextSection
        });
      }),
      resetCharacterQuery: d
    };
  }, lP = (t) => {
    const { internalProps: { disabled: e, readOnly: n = false }, forwardedProps: { sectionListRef: r, onBlur: s, onClick: i, onFocus: a, onInput: l, onPaste: c, focused: d, autoFocus: f = false }, fieldValueManager: m, applyCharacterEditing: g, resetCharacterQuery: y, setSelectedSections: v, parsedSelectedSections: S, state: b, clearActiveSection: _, clearValue: E, updateSectionValue: R, updateValueFromValueStr: T, sectionOrder: x, areAllSectionsEmpty: N, sectionsValueBoundaries: I } = t, O = Oe(null), J = Zt(r, O), U = pn(), L = xt(), ee = Ii(), [Z, k] = _t(false), C = Re(() => ({
      syncSelectionToDOM: () => {
        if (!O.current) return;
        const G = document.getSelection();
        if (!G) return;
        if (S == null) {
          G.rangeCount > 0 && O.current.getRoot().contains(G.getRangeAt(0).startContainer) && G.removeAllRanges(), Z && O.current.getRoot().blur();
          return;
        }
        if (!O.current.getRoot().contains(Yt(document))) return;
        const le = new window.Range();
        let he;
        S === "all" ? he = O.current.getRoot() : b.sections[S].type === "empty" ? he = O.current.getSectionContainer(S) : he = O.current.getSectionContent(S), le.selectNodeContents(he), he.focus(), G.removeAllRanges(), G.addRange(le);
      },
      getActiveSectionIndexFromDOM: () => {
        const G = Yt(document);
        return !G || !O.current || !O.current.getRoot().contains(G) ? null : O.current.getSectionIndexFromDOMElement(G);
      },
      focusField: (G = 0) => {
        if (!O.current || C.getActiveSectionIndexFromDOM() != null) return;
        const le = dc(G, b.sections);
        k(true), O.current.getSectionContent(le).focus();
      },
      setSelectedSections: (G) => {
        if (!O.current) return;
        const le = dc(G, b.sections);
        k((le === "all" ? 0 : le) !== null), v(G);
      },
      isFieldFocused: () => {
        const G = Yt(document);
        return !!O.current && O.current.getRoot().contains(G);
      }
    }), [
      S,
      v,
      b.sections,
      Z
    ]), P = Ee((G) => {
      if (!O.current) return;
      const le = b.sections[G];
      O.current.getSectionContent(G).innerHTML = le.value || le.placeholder, C.syncSelectionToDOM();
    }), W = Ee((G, ...le) => {
      G.isDefaultPrevented() || !O.current || (k(true), i == null ? void 0 : i(G, ...le), S === "all" ? setTimeout(() => {
        const he = document.getSelection().getRangeAt(0).startOffset;
        if (he === 0) {
          v(x.startIndex);
          return;
        }
        let ve = 0, oe = 0;
        for (; oe < he && ve < b.sections.length; ) {
          const Me = b.sections[ve];
          ve += 1, oe += `${Me.startSeparator}${Me.value || Me.placeholder}${Me.endSeparator}`.length;
        }
        v(ve - 1);
      }) : Z ? O.current.getRoot().contains(G.target) || v(x.startIndex) : (k(true), v(x.startIndex)));
    }), Y = Ee((G) => {
      if (l == null ? void 0 : l(G), !O.current || S !== "all") return;
      const he = G.target.textContent ?? "";
      O.current.getRoot().innerHTML = b.sections.map((ve) => `${ve.startSeparator}${ve.value || ve.placeholder}${ve.endSeparator}`).join(""), C.syncSelectionToDOM(), he.length === 0 || he.charCodeAt(0) === 10 ? (y(), E(), v("all")) : he.length > 1 ? T(he) : (S === "all" && v(0), g({
        keyPressed: he,
        sectionIndex: 0
      }));
    }), te = Ee((G) => {
      if (c == null ? void 0 : c(G), n || S !== "all") {
        G.preventDefault();
        return;
      }
      const le = G.clipboardData.getData("text");
      G.preventDefault(), y(), T(le);
    }), j = Ee((...G) => {
      if (a == null ? void 0 : a(...G), Z || !O.current) return;
      k(true), O.current.getSectionIndexFromDOMElement(Yt(document)) != null || v(x.startIndex);
    }), z = Ee((...G) => {
      s == null ? void 0 : s(...G), setTimeout(() => {
        if (!O.current) return;
        const le = Yt(document);
        !O.current.getRoot().contains(le) && (k(false), v(null));
      });
    }), K = Ee((G) => (le) => {
      le.isDefaultPrevented() || v(G);
    }), X = Ee((G) => {
      G.preventDefault();
    }), se = Ee((G) => () => {
      v(G);
    }), H = Ee((G) => {
      if (G.preventDefault(), n || e || typeof S != "number") return;
      const le = b.sections[S], he = G.clipboardData.getData("text"), ve = /^[a-zA-Z]+$/.test(he), oe = /^[0-9]+$/.test(he), Me = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(he);
      le.contentType === "letter" && ve || le.contentType === "digit" && oe || le.contentType === "digit-with-letter" && Me ? (y(), R({
        activeSection: le,
        newSectionValue: he,
        shouldGoToNextSection: true
      })) : !ve && !oe && (y(), T(he));
    }), re = Ee((G) => {
      G.preventDefault(), G.dataTransfer.dropEffect = "none";
    }), ne = Ee((G) => {
      if (!O.current) return;
      const le = G.target, he = le.textContent ?? "", ve = O.current.getSectionIndexFromDOMElement(le), oe = b.sections[ve];
      if (n || !O.current) {
        P(ve);
        return;
      }
      if (he.length === 0) {
        if (oe.value === "") {
          P(ve);
          return;
        }
        const Me = G.nativeEvent.inputType;
        if (Me === "insertParagraph" || Me === "insertLineBreak") {
          P(ve);
          return;
        }
        y(), _();
        return;
      }
      g({
        keyPressed: he,
        sectionIndex: ve
      }), P(ve);
    });
    Rs(() => {
      if (!(!Z || !O.current)) {
        if (S === "all") O.current.getRoot().focus();
        else if (typeof S == "number") {
          const G = O.current.getSectionContent(S);
          G && G.focus();
        }
      }
    }, [
      S,
      Z
    ]);
    const q = Re(() => b.sections.reduce((G, le) => (G[le.type] = I[le.type]({
      currentDate: null,
      contentType: le.contentType,
      format: le.format
    }), G), {}), [
      I,
      b.sections
    ]), Q = S === "all", ce = Re(() => b.sections.map((G, le) => {
      const he = !Q && !e && !n;
      return {
        container: {
          "data-sectionindex": le,
          onClick: K(le)
        },
        content: {
          tabIndex: Q || le > 0 ? -1 : 0,
          contentEditable: !Q && !e && !n,
          role: "spinbutton",
          id: `${ee}-${G.type}`,
          "aria-labelledby": `${ee}-${G.type}`,
          "aria-readonly": n,
          "aria-valuenow": wI(G, L),
          "aria-valuemin": q[G.type].minimum,
          "aria-valuemax": q[G.type].maximum,
          "aria-valuetext": G.value ? bI(G, L) : U.empty,
          "aria-label": U[G.type],
          "aria-disabled": e,
          spellCheck: he ? false : void 0,
          autoCapitalize: he ? "off" : void 0,
          autoCorrect: he ? "off" : void 0,
          [parseInt(Ww, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: he ? "next" : void 0,
          children: G.value || G.placeholder,
          onInput: ne,
          onPaste: H,
          onFocus: se(le),
          onDragOver: re,
          onMouseUp: X,
          inputMode: G.contentType === "letter" ? "text" : "numeric"
        },
        before: {
          children: G.startSeparator
        },
        after: {
          children: G.endSeparator
        }
      };
    }), [
      b.sections,
      se,
      H,
      re,
      ne,
      K,
      X,
      e,
      n,
      Q,
      U,
      L,
      q,
      ee
    ]), fe = Ee((G) => {
      T(G.target.value);
    }), be = Re(() => N ? "" : m.getV7HiddenInputValueFromSections(b.sections), [
      N,
      b.sections,
      m
    ]);
    return Je(() => {
      if (O.current == null) throw new Error([
        "MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`",
        "You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.",
        "",
        "If you want to keep using an `<input />` HTML element for the editing, please remove the `enableAccessibleFieldDOMStructure` prop from your picker or field component:",
        "",
        "<DatePicker slots={{ textField: MyCustomTextField }} />",
        "",
        "Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element"
      ].join(`
`));
      f && O.current && O.current.getSectionContent(x.startIndex).focus();
    }, []), {
      interactions: C,
      returnedValue: {
        autoFocus: f,
        readOnly: n,
        focused: d ?? Z,
        sectionListRef: J,
        onBlur: z,
        onClick: W,
        onFocus: j,
        onInput: Y,
        onPaste: te,
        enableAccessibleFieldDOMStructure: true,
        elements: ce,
        tabIndex: S === 0 ? -1 : 0,
        contentEditable: Q,
        value: be,
        onChange: fe,
        areAllSectionsEmpty: N
      }
    };
  }, _s = (t) => t.replace(/[\u2066\u2067\u2068\u2069]/g, ""), cP = (t, e, n) => {
    let r = 0, s = n ? 1 : 0;
    const i = [];
    for (let a = 0; a < t.length; a += 1) {
      const l = t[a], c = Tu(l, n ? "input-rtl" : "input-ltr", e), d = `${l.startSeparator}${c}${l.endSeparator}`, f = _s(d).length, m = d.length, g = _s(c), y = s + (g === "" ? 0 : c.indexOf(g[0])) + l.startSeparator.length, v = y + g.length;
      i.push(F({}, l, {
        start: r,
        end: r + f,
        startInInput: y,
        endInInput: v
      })), r += f, s += m;
    }
    return i;
  }, uP = (t) => {
    const e = xr(), n = Oe(void 0), r = Oe(void 0), { forwardedProps: { onFocus: s, onClick: i, onPaste: a, onBlur: l, inputRef: c, placeholder: d }, internalProps: { readOnly: f = false, disabled: m = false }, parsedSelectedSections: g, activeSectionIndex: y, state: v, fieldValueManager: S, valueManager: b, applyCharacterEditing: _, resetCharacterQuery: E, updateSectionValue: R, updateValueFromValueStr: T, clearActiveSection: x, clearValue: N, setTempAndroidValueStr: I, setSelectedSections: O, getSectionsFromValue: J, areAllSectionsEmpty: U, localizedDigits: L } = t, ee = Oe(null), Z = Zt(c, ee), k = Re(() => cP(v.sections, L, e), [
      v.sections,
      L,
      e
    ]), C = Re(() => ({
      syncSelectionToDOM: () => {
        if (!ee.current) return;
        if (g == null) {
          ee.current.scrollLeft && (ee.current.scrollLeft = 0);
          return;
        }
        if (ee.current !== Yt(document)) return;
        const ne = ee.current.scrollTop;
        if (g === "all") ee.current.select();
        else {
          const q = k[g], Q = q.type === "empty" ? q.startInInput - q.startSeparator.length : q.startInInput, ce = q.type === "empty" ? q.endInInput + q.endSeparator.length : q.endInInput;
          (Q !== ee.current.selectionStart || ce !== ee.current.selectionEnd) && ee.current === Yt(document) && ee.current.setSelectionRange(Q, ce), clearTimeout(r.current), r.current = setTimeout(() => {
            ee.current && ee.current === Yt(document) && ee.current.selectionStart === ee.current.selectionEnd && (ee.current.selectionStart !== Q || ee.current.selectionEnd !== ce) && C.syncSelectionToDOM();
          });
        }
        ee.current.scrollTop = ne;
      },
      getActiveSectionIndexFromDOM: () => {
        const ne = ee.current.selectionStart ?? 0, q = ee.current.selectionEnd ?? 0;
        if (ne === 0 && q === 0) return null;
        const Q = ne <= k[0].startInInput ? 1 : k.findIndex((ce) => ce.startInInput - ce.startSeparator.length > ne);
        return Q === -1 ? k.length - 1 : Q - 1;
      },
      focusField: (ne = 0) => {
        var _a2;
        Yt(document) !== ee.current && ((_a2 = ee.current) == null ? void 0 : _a2.focus(), O(ne));
      },
      setSelectedSections: (ne) => O(ne),
      isFieldFocused: () => ee.current === Yt(document)
    }), [
      ee,
      g,
      k,
      O
    ]), P = () => {
      const ne = ee.current.selectionStart ?? 0;
      let q;
      ne <= k[0].startInInput || ne >= k[k.length - 1].endInInput ? q = 1 : q = k.findIndex((ce) => ce.startInInput - ce.startSeparator.length > ne);
      const Q = q === -1 ? k.length - 1 : q - 1;
      O(Q);
    }, W = Ee((...ne) => {
      s == null ? void 0 : s(...ne);
      const q = ee.current;
      clearTimeout(n.current), n.current = setTimeout(() => {
        !q || q !== ee.current || y == null && (q.value.length && Number(q.selectionEnd) - Number(q.selectionStart) === q.value.length ? O("all") : P());
      });
    }), Y = Ee((ne, ...q) => {
      ne.isDefaultPrevented() || (i == null ? void 0 : i(ne, ...q), P());
    }), te = Ee((ne) => {
      if (a == null ? void 0 : a(ne), ne.preventDefault(), f || m) return;
      const q = ne.clipboardData.getData("text");
      if (typeof g == "number") {
        const Q = v.sections[g], ce = /^[a-zA-Z]+$/.test(q), fe = /^[0-9]+$/.test(q), be = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(q);
        if (Q.contentType === "letter" && ce || Q.contentType === "digit" && fe || Q.contentType === "digit-with-letter" && be) {
          E(), R({
            activeSection: Q,
            newSectionValue: q,
            shouldGoToNextSection: true
          });
          return;
        }
        if (ce || fe) return;
      }
      E(), T(q);
    }), j = Ee((...ne) => {
      l == null ? void 0 : l(...ne), O(null);
    }), z = Ee((ne) => {
      if (f) return;
      const q = ne.target.value;
      if (q === "") {
        E(), N();
        return;
      }
      const Q = ne.nativeEvent.data, ce = Q && Q.length > 1, fe = ce ? Q : q, be = _s(fe);
      if (g === "all" && O(y), y == null || ce) {
        T(ce ? Q : be);
        return;
      }
      let G;
      if (g === "all" && be.length === 1) G = be;
      else {
        const le = _s(S.getV6InputValueFromSections(k, L, e));
        let he = -1, ve = -1;
        for (let pe = 0; pe < le.length; pe += 1) he === -1 && le[pe] !== be[pe] && (he = pe), ve === -1 && le[le.length - pe - 1] !== be[be.length - pe - 1] && (ve = pe);
        const oe = k[y];
        if (he < oe.start || le.length - ve - 1 > oe.end) return;
        const we = be.length - le.length + oe.end - _s(oe.endSeparator || "").length;
        G = be.slice(oe.start + _s(oe.startSeparator || "").length, we);
      }
      if (G.length === 0) {
        yI() && I(fe), E(), x();
        return;
      }
      _({
        keyPressed: G,
        sectionIndex: y
      });
    }), K = Re(() => d !== void 0 ? d : S.getV6InputValueFromSections(J(b.emptyValue), L, e), [
      d,
      S,
      J,
      b.emptyValue,
      L,
      e
    ]), X = Re(() => v.tempValueStrAndroid ?? S.getV6InputValueFromSections(v.sections, L, e), [
      v.sections,
      S,
      v.tempValueStrAndroid,
      L,
      e
    ]);
    Je(() => (ee.current && ee.current === Yt(document) && O("all"), () => {
      clearTimeout(n.current), clearTimeout(r.current);
    }), []);
    const se = Re(() => y == null || v.sections[y].contentType === "letter" ? "text" : "numeric", [
      y,
      v.sections
    ]), re = !(ee.current && ee.current === Yt(document)) && U;
    return {
      interactions: C,
      returnedValue: {
        readOnly: f,
        onBlur: j,
        onClick: Y,
        onFocus: W,
        onPaste: te,
        inputRef: Z,
        enableAccessibleFieldDOMStructure: false,
        placeholder: K,
        inputMode: se,
        autoComplete: "off",
        value: re ? "" : X,
        onChange: z
      }
    };
  }, dP = (t) => {
    const e = xt(), { internalProps: n, internalProps: { unstableFieldRef: r, minutesStep: s, enableAccessibleFieldDOMStructure: i = false, disabled: a = false, readOnly: l = false }, forwardedProps: { onKeyDown: c, error: d, clearable: f, onClear: m }, fieldValueManager: g, valueManager: y, validator: v } = t, S = xr(), b = iP(t), { state: _, activeSectionIndex: E, parsedSelectedSections: R, setSelectedSections: T, clearValue: x, clearActiveSection: N, updateSectionValue: I, setTempAndroidValueStr: O, sectionsValueBoundaries: J, localizedDigits: U, timezone: L } = b, ee = oP({
      sections: _.sections,
      updateSectionValue: I,
      sectionsValueBoundaries: J,
      localizedDigits: U,
      setTempAndroidValueStr: O,
      timezone: L
    }), { resetCharacterQuery: Z } = ee, k = y.areValuesEqual(e, _.value, y.emptyValue), C = i ? lP : uP, P = Re(() => vI(_.sections, S && !i), [
      _.sections,
      S,
      i
    ]), { returnedValue: W, interactions: Y } = C(F({}, t, b, ee, {
      areAllSectionsEmpty: k,
      sectionOrder: P
    })), te = Ee((H) => {
      if (c == null ? void 0 : c(H), !a) switch (true) {
        case ((H.ctrlKey || H.metaKey) && String.fromCharCode(H.keyCode) === "A" && !H.shiftKey && !H.altKey): {
          H.preventDefault(), T("all");
          break;
        }
        case H.key === "ArrowRight": {
          if (H.preventDefault(), R == null) T(P.startIndex);
          else if (R === "all") T(P.endIndex);
          else {
            const re = P.neighbors[R].rightIndex;
            re !== null && T(re);
          }
          break;
        }
        case H.key === "ArrowLeft": {
          if (H.preventDefault(), R == null) T(P.endIndex);
          else if (R === "all") T(P.startIndex);
          else {
            const re = P.neighbors[R].leftIndex;
            re !== null && T(re);
          }
          break;
        }
        case H.key === "Delete": {
          if (H.preventDefault(), l) break;
          R == null || R === "all" ? x() : N(), Z();
          break;
        }
        case [
          "ArrowUp",
          "ArrowDown",
          "Home",
          "End",
          "PageUp",
          "PageDown"
        ].includes(H.key): {
          if (H.preventDefault(), l || E == null) break;
          R === "all" && T(E);
          const re = _.sections[E], ne = g.getActiveDateManager(e, _, re), q = uI(e, L, re, H.key, J, U, ne.date, {
            minutesStep: s
          });
          I({
            activeSection: re,
            newSectionValue: q,
            shouldGoToNextSection: false
          });
          break;
        }
      }
    });
    Rs(() => {
      Y.syncSelectionToDOM();
    });
    const { hasValidationError: j } = jg({
      props: n,
      validator: v,
      timezone: L,
      value: _.value,
      onError: n.onError
    }), z = Re(() => d !== void 0 ? d : j, [
      j,
      d
    ]);
    Je(() => {
      !z && E == null && Z();
    }, [
      _.referenceValue,
      E,
      z
    ]), Je(() => {
      _.tempValueStrAndroid != null && E != null && (Z(), N());
    }, [
      _.sections
    ]), Sh(r, () => ({
      getSections: () => _.sections,
      getActiveSectionIndex: Y.getActiveSectionIndexFromDOM,
      setSelectedSections: Y.setSelectedSections,
      focusField: Y.focusField,
      isFieldFocused: Y.isFieldFocused
    }));
    const K = Ee((H, ...re) => {
      H.preventDefault(), m == null ? void 0 : m(H, ...re), x(), Y.isFieldFocused() ? T(P.startIndex) : Y.focusField(0);
    }), X = {
      onKeyDown: te,
      onClear: K,
      error: z,
      clearable: !!(f && !k && !l && !a)
    }, se = {
      disabled: a,
      readOnly: l
    };
    return F({}, t.forwardedProps, X, se, W);
  }, fP = [
    "clearable",
    "onClear",
    "InputProps",
    "sx",
    "slots",
    "slotProps"
  ], hP = [
    "ownerState"
  ], mP = (t) => {
    const e = pn(), { clearable: n, onClear: r, InputProps: s, sx: i, slots: a, slotProps: l } = t, c = Ne(t, fP), d = (a == null ? void 0 : a.clearButton) ?? Oi, f = lt({
      elementType: d,
      externalSlotProps: l == null ? void 0 : l.clearButton,
      ownerState: {},
      className: "clearButton",
      additionalProps: {
        title: e.fieldClearLabel
      }
    }), m = Ne(f, hP), g = (a == null ? void 0 : a.clearIcon) ?? gO, y = lt({
      elementType: g,
      externalSlotProps: l == null ? void 0 : l.clearIcon,
      ownerState: {}
    });
    return F({}, c, {
      InputProps: F({}, s, {
        endAdornment: D.jsxs(Kn, {
          children: [
            n && D.jsx(kh, {
              position: "end",
              sx: {
                marginRight: (s == null ? void 0 : s.endAdornment) ? -1 : -1.5
              },
              children: D.jsx(d, F({}, m, {
                onClick: r,
                children: D.jsx(g, F({
                  fontSize: "small"
                }, y))
              }))
            }),
            s == null ? void 0 : s.endAdornment
          ]
        })
      }),
      sx: [
        {
          "& .clearButton": {
            opacity: 1
          },
          "@media (pointer: fine)": {
            "& .clearButton": {
              opacity: 0
            },
            "&:hover, &:focus-within": {
              ".clearButton": {
                opacity: 1
              }
            }
          }
        },
        ...Array.isArray(i) ? i : [
          i
        ]
      ]
    });
  }, pP = [
    "value",
    "defaultValue",
    "referenceDate",
    "format",
    "formatDensity",
    "onChange",
    "timezone",
    "onError",
    "shouldRespectLeadingZeros",
    "selectedSections",
    "onSelectedSectionsChange",
    "unstableFieldRef",
    "enableAccessibleFieldDOMStructure",
    "disabled",
    "readOnly",
    "dateSeparator"
  ], gP = (t, e) => Re(() => {
    const n = F({}, t), r = {}, s = (i) => {
      n.hasOwnProperty(i) && (r[i] = n[i], delete n[i]);
    };
    return pP.forEach(s), Fg.forEach(s), {
      forwardedProps: n,
      internalProps: r
    };
  }, [
    t,
    e
  ]), yP = wh(null);
  function Vg(t) {
    const { contextValue: e, localeText: n, children: r } = t;
    return D.jsx(yP.Provider, {
      value: e,
      children: D.jsx(wg, {
        localeText: n,
        children: r
      })
    });
  }
  const vP = (t) => {
    const e = xt(), r = t.ampm ?? e.is12HourCycleInCurrentLocale() ? e.formats.fullTime12h : e.formats.fullTime24h;
    return F({}, t, {
      disablePast: t.disablePast ?? false,
      disableFuture: t.disableFuture ?? false,
      format: t.format ?? r
    });
  };
  function bP(t) {
    return wt("MuiPickersTextField", t);
  }
  St("MuiPickersTextField", [
    "root",
    "focused",
    "disabled",
    "error",
    "required"
  ]);
  function wP(t) {
    return wt("MuiPickersInputBase", t);
  }
  const Cs = St("MuiPickersInputBase", [
    "root",
    "focused",
    "disabled",
    "error",
    "notchedOutline",
    "sectionContent",
    "sectionBefore",
    "sectionAfter",
    "adornedStart",
    "adornedEnd",
    "input"
  ]);
  function SP(t) {
    return wt("MuiPickersSectionList", t);
  }
  const ii = St("MuiPickersSectionList", [
    "root",
    "section",
    "sectionContent"
  ]), _P = [
    "slots",
    "slotProps",
    "elements",
    "sectionListRef"
  ], Wg = _e("div", {
    name: "MuiPickersSectionList",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    direction: "ltr /*! @noflip */",
    outline: "none"
  }), Ug = _e("span", {
    name: "MuiPickersSectionList",
    slot: "Section",
    overridesResolver: (t, e) => e.section
  })({}), Bg = _e("span", {
    name: "MuiPickersSectionList",
    slot: "SectionSeparator",
    overridesResolver: (t, e) => e.sectionSeparator
  })({
    whiteSpace: "pre"
  }), zg = _e("span", {
    name: "MuiPickersSectionList",
    slot: "SectionContent",
    overridesResolver: (t, e) => e.sectionContent
  })({
    outline: "none"
  }), DP = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      section: [
        "section"
      ],
      sectionContent: [
        "sectionContent"
      ]
    }, SP, e);
  };
  function kP(t) {
    const { slots: e, slotProps: n, element: r, classes: s } = t, i = (e == null ? void 0 : e.section) ?? Ug, a = lt({
      elementType: i,
      externalSlotProps: n == null ? void 0 : n.section,
      externalForwardedProps: r.container,
      className: s.section,
      ownerState: {}
    }), l = (e == null ? void 0 : e.sectionContent) ?? zg, c = lt({
      elementType: l,
      externalSlotProps: n == null ? void 0 : n.sectionContent,
      externalForwardedProps: r.content,
      additionalProps: {
        suppressContentEditableWarning: true
      },
      className: s.sectionContent,
      ownerState: {}
    }), d = (e == null ? void 0 : e.sectionSeparator) ?? Bg, f = lt({
      elementType: d,
      externalSlotProps: n == null ? void 0 : n.sectionSeparator,
      externalForwardedProps: r.before,
      ownerState: {
        position: "before"
      }
    }), m = lt({
      elementType: d,
      externalSlotProps: n == null ? void 0 : n.sectionSeparator,
      externalForwardedProps: r.after,
      ownerState: {
        position: "after"
      }
    });
    return D.jsxs(i, F({}, a, {
      children: [
        D.jsx(d, F({}, f)),
        D.jsx(l, F({}, c)),
        D.jsx(d, F({}, m))
      ]
    }));
  }
  const TP = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersSectionList"
    }), { slots: s, slotProps: i, elements: a, sectionListRef: l } = r, c = Ne(r, _P), d = DP(r), f = Oe(null), m = Zt(n, f), g = (S) => {
      if (!f.current) throw new Error(`MUI X: Cannot call sectionListRef.${S} before the mount of the component.`);
      return f.current;
    };
    Sh(l, () => ({
      getRoot() {
        return g("getRoot");
      },
      getSectionContainer(S) {
        return g("getSectionContainer").querySelector(`.${ii.section}[data-sectionindex="${S}"]`);
      },
      getSectionContent(S) {
        return g("getSectionContent").querySelector(`.${ii.section}[data-sectionindex="${S}"] .${ii.sectionContent}`);
      },
      getSectionIndexFromDOMElement(S) {
        const b = g("getSectionIndexFromDOMElement");
        if (S == null || !b.contains(S)) return null;
        let _ = null;
        return S.classList.contains(ii.section) ? _ = S : S.classList.contains(ii.sectionContent) && (_ = S.parentElement), _ == null ? null : Number(_.dataset.sectionindex);
      }
    }));
    const y = (s == null ? void 0 : s.root) ?? Wg, v = lt({
      elementType: y,
      externalSlotProps: i == null ? void 0 : i.root,
      externalForwardedProps: c,
      additionalProps: {
        ref: m,
        suppressContentEditableWarning: true
      },
      className: d.root,
      ownerState: {}
    });
    return D.jsx(y, F({}, v, {
      children: v.contentEditable ? a.map(({ content: S, before: b, after: _ }) => `${b.children}${S.children}${_.children}`).join("") : D.jsx(Kn, {
        children: a.map((S, b) => D.jsx(kP, {
          slots: s,
          slotProps: i,
          element: S,
          classes: d
        }, b))
      })
    }));
  }), xP = [
    "elements",
    "areAllSectionsEmpty",
    "defaultValue",
    "label",
    "value",
    "onChange",
    "id",
    "autoFocus",
    "endAdornment",
    "startAdornment",
    "renderSuffix",
    "slots",
    "slotProps",
    "contentEditable",
    "tabIndex",
    "onInput",
    "onPaste",
    "onKeyDown",
    "fullWidth",
    "name",
    "readOnly",
    "inputProps",
    "inputRef",
    "sectionListRef"
  ], MP = (t) => Math.round(t * 1e5) / 1e5, Ho = _e("div", {
    name: "MuiPickersInputBase",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => F({}, t.typography.body1, {
    color: (t.vars || t).palette.text.primary,
    cursor: "text",
    padding: 0,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    boxSizing: "border-box",
    letterSpacing: `${MP(0.15 / 16)}em`,
    variants: [
      {
        props: {
          fullWidth: true
        },
        style: {
          width: "100%"
        }
      }
    ]
  })), Mu = _e(Wg, {
    name: "MuiPickersInputBase",
    slot: "SectionsContainer",
    overridesResolver: (t, e) => e.sectionsContainer
  })(({ theme: t }) => ({
    padding: "4px 0 5px",
    fontFamily: t.typography.fontFamily,
    fontSize: "inherit",
    lineHeight: "1.4375em",
    flexGrow: 1,
    outline: "none",
    display: "flex",
    flexWrap: "nowrap",
    overflow: "hidden",
    letterSpacing: "inherit",
    width: "182px",
    variants: [
      {
        props: {
          isRtl: true
        },
        style: {
          textAlign: "right /*! @noflip */"
        }
      },
      {
        props: {
          size: "small"
        },
        style: {
          paddingTop: 1
        }
      },
      {
        props: {
          adornedStart: false,
          focused: false,
          filled: false
        },
        style: {
          color: "currentColor",
          opacity: 0
        }
      },
      {
        props: ({ adornedStart: e, focused: n, filled: r, label: s }) => !e && !n && !r && s == null,
        style: t.vars ? {
          opacity: t.vars.opacity.inputPlaceholder
        } : {
          opacity: t.palette.mode === "light" ? 0.42 : 0.5
        }
      }
    ]
  })), EP = _e(Ug, {
    name: "MuiPickersInputBase",
    slot: "Section",
    overridesResolver: (t, e) => e.section
  })(({ theme: t }) => ({
    fontFamily: t.typography.fontFamily,
    fontSize: "inherit",
    letterSpacing: "inherit",
    lineHeight: "1.4375em",
    display: "inline-block",
    whiteSpace: "nowrap"
  })), CP = _e(zg, {
    name: "MuiPickersInputBase",
    slot: "SectionContent",
    overridesResolver: (t, e) => e.content
  })(({ theme: t }) => ({
    fontFamily: t.typography.fontFamily,
    lineHeight: "1.4375em",
    letterSpacing: "inherit",
    width: "fit-content",
    outline: "none"
  })), AP = _e(Bg, {
    name: "MuiPickersInputBase",
    slot: "Separator",
    overridesResolver: (t, e) => e.separator
  })(() => ({
    whiteSpace: "pre",
    letterSpacing: "inherit"
  })), RP = _e("input", {
    name: "MuiPickersInputBase",
    slot: "Input",
    overridesResolver: (t, e) => e.hiddenInput
  })(F({}, nS)), OP = (t) => {
    const { focused: e, disabled: n, error: r, classes: s, fullWidth: i, readOnly: a, color: l, size: c, endAdornment: d, startAdornment: f } = t, m = {
      root: [
        "root",
        e && !n && "focused",
        n && "disabled",
        a && "readOnly",
        r && "error",
        i && "fullWidth",
        `color${vS(l)}`,
        c === "small" && "inputSizeSmall",
        !!f && "adornedStart",
        !!d && "adornedEnd"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ],
      sectionsContainer: [
        "sectionsContainer"
      ],
      sectionContent: [
        "sectionContent"
      ],
      sectionBefore: [
        "sectionBefore"
      ],
      sectionAfter: [
        "sectionAfter"
      ]
    };
    return mt(m, wP, s);
  }, Eu = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersInputBase"
    }), { elements: s, areAllSectionsEmpty: i, value: a, onChange: l, id: c, endAdornment: d, startAdornment: f, renderSuffix: m, slots: g, slotProps: y, contentEditable: v, tabIndex: S, onInput: b, onPaste: _, onKeyDown: E, name: R, readOnly: T, inputProps: x, inputRef: N, sectionListRef: I } = r, O = Ne(r, xP), J = Oe(null), U = Zt(n, J), L = Zt(x == null ? void 0 : x.ref, N), ee = xr(), Z = lo();
    if (!Z) throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
    const k = (j) => {
      var _a2;
      if (Z.disabled) {
        j.stopPropagation();
        return;
      }
      (_a2 = Z.onFocus) == null ? void 0 : _a2.call(Z, j);
    };
    Je(() => {
      Z && Z.setAdornedStart(!!f);
    }, [
      Z,
      f
    ]), Je(() => {
      Z && (i ? Z.onEmpty() : Z.onFilled());
    }, [
      Z,
      i
    ]);
    const C = F({}, r, Z, {
      isRtl: ee
    }), P = OP(C), W = (g == null ? void 0 : g.root) || Ho, Y = lt({
      elementType: W,
      externalSlotProps: y == null ? void 0 : y.root,
      externalForwardedProps: O,
      additionalProps: {
        "aria-invalid": Z.error,
        ref: U
      },
      className: P.root,
      ownerState: C
    }), te = (g == null ? void 0 : g.input) || Mu;
    return D.jsxs(W, F({}, Y, {
      children: [
        f,
        D.jsx(TP, {
          sectionListRef: I,
          elements: s,
          contentEditable: v,
          tabIndex: S,
          className: P.sectionsContainer,
          onFocus: k,
          onBlur: Z.onBlur,
          onInput: b,
          onPaste: _,
          onKeyDown: E,
          slots: {
            root: te,
            section: EP,
            sectionContent: CP,
            sectionSeparator: AP
          },
          slotProps: {
            root: {
              ownerState: C
            },
            sectionContent: {
              className: Cs.sectionContent
            },
            sectionSeparator: ({ position: j }) => ({
              className: j === "before" ? Cs.sectionBefore : Cs.sectionAfter
            })
          }
        }),
        d,
        m ? m(F({}, Z)) : null,
        D.jsx(RP, F({
          name: R,
          className: P.input,
          value: a,
          onChange: l,
          id: c,
          "aria-hidden": "true",
          tabIndex: -1,
          readOnly: T,
          required: Z.required,
          disabled: Z.disabled
        }, x, {
          ref: L
        }))
      ]
    }));
  });
  function IP(t) {
    return wt("MuiPickersOutlinedInput", t);
  }
  const en = F({}, Cs, St("MuiPickersOutlinedInput", [
    "root",
    "notchedOutline",
    "input"
  ])), PP = [
    "children",
    "className",
    "label",
    "notched",
    "shrink"
  ], NP = _e("fieldset", {
    name: "MuiPickersOutlinedInput",
    slot: "NotchedOutline",
    overridesResolver: (t, e) => e.notchedOutline
  })(({ theme: t }) => {
    const e = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      textAlign: "left",
      position: "absolute",
      bottom: 0,
      right: 0,
      top: -5,
      left: 0,
      margin: 0,
      padding: "0 8px",
      pointerEvents: "none",
      borderRadius: "inherit",
      borderStyle: "solid",
      borderWidth: 1,
      overflow: "hidden",
      minWidth: "0%",
      borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : e
    };
  }), uh = _e("span")(({ theme: t }) => ({
    fontFamily: t.typography.fontFamily,
    fontSize: "inherit"
  })), LP = _e("legend")(({ theme: t }) => ({
    float: "unset",
    width: "auto",
    overflow: "hidden",
    variants: [
      {
        props: {
          withLabel: false
        },
        style: {
          padding: 0,
          lineHeight: "11px",
          transition: t.transitions.create("width", {
            duration: 150,
            easing: t.transitions.easing.easeOut
          })
        }
      },
      {
        props: {
          withLabel: true
        },
        style: {
          display: "block",
          padding: 0,
          height: 11,
          fontSize: "0.75em",
          visibility: "hidden",
          maxWidth: 0.01,
          transition: t.transitions.create("max-width", {
            duration: 50,
            easing: t.transitions.easing.easeOut
          }),
          whiteSpace: "nowrap",
          "& > span": {
            paddingLeft: 5,
            paddingRight: 5,
            display: "inline-block",
            opacity: 0,
            visibility: "visible"
          }
        }
      },
      {
        props: {
          withLabel: true,
          notched: true
        },
        style: {
          maxWidth: "100%",
          transition: t.transitions.create("max-width", {
            duration: 100,
            easing: t.transitions.easing.easeOut,
            delay: 50
          })
        }
      }
    ]
  }));
  function YP(t) {
    const { className: e, label: n } = t, r = Ne(t, PP), s = n != null && n !== "", i = F({}, t, {
      withLabel: s
    });
    return D.jsx(NP, F({
      "aria-hidden": true,
      className: e
    }, r, {
      ownerState: i,
      children: D.jsx(LP, {
        ownerState: i,
        children: s ? D.jsx(uh, {
          children: n
        }) : D.jsx(uh, {
          className: "notranslate",
          children: "\u200B"
        })
      })
    }));
  }
  const FP = [
    "label",
    "autoFocus",
    "ownerState",
    "notched"
  ], HP = _e(Ho, {
    name: "MuiPickersOutlinedInput",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => {
    const e = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      padding: "0 14px",
      borderRadius: (t.vars || t).shape.borderRadius,
      [`&:hover .${en.notchedOutline}`]: {
        borderColor: (t.vars || t).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${en.notchedOutline}`]: {
          borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${en.focused} .${en.notchedOutline}`]: {
        borderStyle: "solid",
        borderWidth: 2
      },
      [`&.${en.disabled}`]: {
        [`& .${en.notchedOutline}`]: {
          borderColor: (t.vars || t).palette.action.disabled
        },
        "*": {
          color: (t.vars || t).palette.action.disabled
        }
      },
      [`&.${en.error} .${en.notchedOutline}`]: {
        borderColor: (t.vars || t).palette.error.main
      },
      variants: Object.keys((t.vars ?? t).palette).filter((n) => {
        var _a2;
        return ((_a2 = (t.vars ?? t).palette[n]) == null ? void 0 : _a2.main) ?? false;
      }).map((n) => ({
        props: {
          color: n
        },
        style: {
          [`&.${en.focused}:not(.${en.error}) .${en.notchedOutline}`]: {
            borderColor: (t.vars || t).palette[n].main
          }
        }
      }))
    };
  }), jP = _e(Mu, {
    name: "MuiPickersOutlinedInput",
    slot: "SectionsContainer",
    overridesResolver: (t, e) => e.sectionsContainer
  })({
    padding: "16.5px 0",
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          padding: "8.5px 0"
        }
      }
    ]
  }), VP = (t) => {
    const { classes: e } = t, r = mt({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, IP, e);
    return F({}, e, r);
  }, $g = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersOutlinedInput"
    }), { label: s, ownerState: i, notched: a } = r, l = Ne(r, FP), c = lo(), d = F({}, r, i, c, {
      color: (c == null ? void 0 : c.color) || "primary"
    }), f = VP(d);
    return D.jsx(Eu, F({
      slots: {
        root: HP,
        input: jP
      },
      renderSuffix: (m) => D.jsx(YP, {
        shrink: !!(a || m.adornedStart || m.focused || m.filled),
        notched: !!(a || m.adornedStart || m.focused || m.filled),
        className: f.notchedOutline,
        label: s != null && s !== "" && (c == null ? void 0 : c.required) ? D.jsxs(Kn, {
          children: [
            s,
            "\u2009",
            "*"
          ]
        }) : s,
        ownerState: d
      })
    }, l, {
      label: s,
      classes: f,
      ref: n
    }));
  });
  $g.muiName = "Input";
  function WP(t) {
    return wt("MuiPickersFilledInput", t);
  }
  const Yr = F({}, Cs, St("MuiPickersFilledInput", [
    "root",
    "underline",
    "input"
  ])), UP = [
    "label",
    "autoFocus",
    "disableUnderline",
    "ownerState"
  ], BP = _e(Ho, {
    name: "MuiPickersFilledInput",
    slot: "Root",
    overridesResolver: (t, e) => e.root,
    shouldForwardProp: (t) => yS(t) && t !== "disableUnderline"
  })(({ theme: t }) => {
    const e = t.palette.mode === "light", n = e ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", r = e ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", s = e ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", i = e ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
    return {
      backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : r,
      borderTopLeftRadius: (t.vars || t).shape.borderRadius,
      borderTopRightRadius: (t.vars || t).shape.borderRadius,
      transition: t.transitions.create("background-color", {
        duration: t.transitions.duration.shorter,
        easing: t.transitions.easing.easeOut
      }),
      "&:hover": {
        backgroundColor: t.vars ? t.vars.palette.FilledInput.hoverBg : s,
        "@media (hover: none)": {
          backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : r
        }
      },
      [`&.${Yr.focused}`]: {
        backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : r
      },
      [`&.${Yr.disabled}`]: {
        backgroundColor: t.vars ? t.vars.palette.FilledInput.disabledBg : i
      },
      variants: [
        ...Object.keys((t.vars ?? t).palette).filter((a) => (t.vars ?? t).palette[a].main).map((a) => {
          var _a2;
          return {
            props: {
              color: a,
              disableUnderline: false
            },
            style: {
              "&::after": {
                borderBottom: `2px solid ${(_a2 = (t.vars || t).palette[a]) == null ? void 0 : _a2.main}`
              }
            }
          };
        }),
        {
          props: {
            disableUnderline: false
          },
          style: {
            "&::after": {
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: t.transitions.create("transform", {
                duration: t.transitions.duration.shorter,
                easing: t.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${Yr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Yr.error}`]: {
              "&:before, &:after": {
                borderBottomColor: (t.vars || t).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})` : n}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: t.transitions.create("border-bottom-color", {
                duration: t.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${Yr.disabled}, .${Yr.error}):before`]: {
              borderBottom: `1px solid ${(t.vars || t).palette.text.primary}`
            },
            [`&.${Yr.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        },
        {
          props: ({ startAdornment: a }) => !!a,
          style: {
            paddingLeft: 12
          }
        },
        {
          props: ({ endAdornment: a }) => !!a,
          style: {
            paddingRight: 12
          }
        }
      ]
    };
  }), zP = _e(Mu, {
    name: "MuiPickersFilledInput",
    slot: "sectionsContainer",
    overridesResolver: (t, e) => e.sectionsContainer
  })({
    paddingTop: 25,
    paddingRight: 12,
    paddingBottom: 8,
    paddingLeft: 12,
    variants: [
      {
        props: {
          size: "small"
        },
        style: {
          paddingTop: 21,
          paddingBottom: 4
        }
      },
      {
        props: ({ startAdornment: t }) => !!t,
        style: {
          paddingLeft: 0
        }
      },
      {
        props: ({ endAdornment: t }) => !!t,
        style: {
          paddingRight: 0
        }
      },
      {
        props: {
          hiddenLabel: true
        },
        style: {
          paddingTop: 16,
          paddingBottom: 17
        }
      },
      {
        props: {
          hiddenLabel: true,
          size: "small"
        },
        style: {
          paddingTop: 8,
          paddingBottom: 9
        }
      }
    ]
  }), $P = (t) => {
    const { classes: e, disableUnderline: n } = t, s = mt({
      root: [
        "root",
        !n && "underline"
      ],
      input: [
        "input"
      ]
    }, WP, e);
    return F({}, e, s);
  }, Gg = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersFilledInput"
    }), { label: s, disableUnderline: i = false, ownerState: a } = r, l = Ne(r, UP), c = lo(), d = F({}, r, a, c, {
      color: (c == null ? void 0 : c.color) || "primary"
    }), f = $P(d);
    return D.jsx(Eu, F({
      slots: {
        root: BP,
        input: zP
      },
      slotProps: {
        root: {
          disableUnderline: i
        }
      }
    }, l, {
      label: s,
      classes: f,
      ref: n
    }));
  });
  Gg.muiName = "Input";
  function GP(t) {
    return wt("MuiPickersFilledInput", t);
  }
  const ai = F({}, Cs, St("MuiPickersInput", [
    "root",
    "input"
  ])), ZP = [
    "label",
    "autoFocus",
    "disableUnderline",
    "ownerState"
  ], qP = _e(Ho, {
    name: "MuiPickersInput",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => {
    let n = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
    return t.vars && (n = `rgba(${t.vars.palette.common.onBackgroundChannel} / ${t.vars.opacity.inputUnderline})`), {
      "label + &": {
        marginTop: 16
      },
      variants: [
        ...Object.keys((t.vars ?? t).palette).filter((r) => (t.vars ?? t).palette[r].main).map((r) => ({
          props: {
            color: r
          },
          style: {
            "&::after": {
              borderBottom: `2px solid ${(t.vars || t).palette[r].main}`
            }
          }
        })),
        {
          props: {
            disableUnderline: false
          },
          style: {
            "&::after": {
              background: "red",
              left: 0,
              bottom: 0,
              content: '""',
              position: "absolute",
              right: 0,
              transform: "scaleX(0)",
              transition: t.transitions.create("transform", {
                duration: t.transitions.duration.shorter,
                easing: t.transitions.easing.easeOut
              }),
              pointerEvents: "none"
            },
            [`&.${ai.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${ai.error}`]: {
              "&:before, &:after": {
                borderBottomColor: (t.vars || t).palette.error.main
              }
            },
            "&::before": {
              borderBottom: `1px solid ${n}`,
              left: 0,
              bottom: 0,
              content: '"\\00a0"',
              position: "absolute",
              right: 0,
              transition: t.transitions.create("border-bottom-color", {
                duration: t.transitions.duration.shorter
              }),
              pointerEvents: "none"
            },
            [`&:hover:not(.${ai.disabled}, .${ai.error}):before`]: {
              borderBottom: `2px solid ${(t.vars || t).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${n}`
              }
            },
            [`&.${ai.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        }
      ]
    };
  }), QP = (t) => {
    const { classes: e, disableUnderline: n } = t, s = mt({
      root: [
        "root",
        !n && "underline"
      ],
      input: [
        "input"
      ]
    }, GP, e);
    return F({}, e, s);
  }, Zg = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersInput"
    }), { label: s, disableUnderline: i = false, ownerState: a } = r, l = Ne(r, ZP), c = lo(), d = F({}, r, a, c, {
      disableUnderline: i,
      color: (c == null ? void 0 : c.color) || "primary"
    }), f = QP(d);
    return D.jsx(Eu, F({
      slots: {
        root: qP
      }
    }, l, {
      label: s,
      classes: f,
      ref: n
    }));
  });
  Zg.muiName = "Input";
  const XP = [
    "onFocus",
    "onBlur",
    "className",
    "color",
    "disabled",
    "error",
    "variant",
    "required",
    "InputProps",
    "inputProps",
    "inputRef",
    "sectionListRef",
    "elements",
    "areAllSectionsEmpty",
    "onClick",
    "onKeyDown",
    "onKeyUp",
    "onPaste",
    "onInput",
    "endAdornment",
    "startAdornment",
    "tabIndex",
    "contentEditable",
    "focused",
    "value",
    "onChange",
    "fullWidth",
    "id",
    "name",
    "helperText",
    "FormHelperTextProps",
    "label",
    "InputLabelProps"
  ], JP = {
    standard: Zg,
    filled: Gg,
    outlined: $g
  }, KP = _e(iS, {
    name: "MuiPickersTextField",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    maxWidth: "100%"
  }), eN = (t) => {
    const { focused: e, disabled: n, classes: r, required: s } = t;
    return mt({
      root: [
        "root",
        e && !n && "focused",
        n && "disabled",
        s && "required"
      ]
    }, bP, r);
  }, tN = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersTextField"
    }), { onFocus: s, onBlur: i, className: a, color: l = "primary", disabled: c = false, error: d = false, variant: f = "outlined", required: m = false, InputProps: g, inputProps: y, inputRef: v, sectionListRef: S, elements: b, areAllSectionsEmpty: _, onClick: E, onKeyDown: R, onKeyUp: T, onPaste: x, onInput: N, endAdornment: I, startAdornment: O, tabIndex: J, contentEditable: U, focused: L, value: ee, onChange: Z, fullWidth: k, id: C, name: P, helperText: W, FormHelperTextProps: Y, label: te, InputLabelProps: j } = r, z = Ne(r, XP), K = Oe(null), X = Zt(n, K), se = Ii(C), H = W && se ? `${se}-helper-text` : void 0, re = te && se ? `${se}-label` : void 0, ne = F({}, r, {
      color: l,
      disabled: c,
      error: d,
      focused: L,
      required: m,
      variant: f
    }), q = eN(ne), Q = JP[f];
    return D.jsxs(KP, F({
      className: Rt(q.root, a),
      ref: X,
      focused: L,
      onFocus: s,
      onBlur: i,
      disabled: c,
      variant: f,
      error: d,
      color: l,
      fullWidth: k,
      required: m,
      ownerState: ne
    }, z, {
      children: [
        D.jsx(rS, F({
          htmlFor: se,
          id: re
        }, j, {
          children: te
        })),
        D.jsx(Q, F({
          elements: b,
          areAllSectionsEmpty: _,
          onClick: E,
          onKeyDown: R,
          onKeyUp: T,
          onInput: N,
          onPaste: x,
          endAdornment: I,
          startAdornment: O,
          tabIndex: J,
          contentEditable: U,
          value: ee,
          onChange: Z,
          id: se,
          fullWidth: k,
          inputProps: y,
          inputRef: v,
          sectionListRef: S,
          label: te,
          name: P,
          role: "group",
          "aria-labelledby": re,
          "aria-describedby": H,
          "aria-live": H ? "polite" : void 0
        }, g)),
        W && D.jsx(sS, F({
          id: H
        }, Y, {
          children: W
        }))
      ]
    }));
  }), nN = [
    "enableAccessibleFieldDOMStructure"
  ], rN = [
    "InputProps",
    "readOnly"
  ], sN = [
    "onPaste",
    "onKeyDown",
    "inputMode",
    "readOnly",
    "InputProps",
    "inputProps",
    "inputRef"
  ], iN = (t) => {
    let { enableAccessibleFieldDOMStructure: e } = t, n = Ne(t, nN);
    if (e) {
      const { InputProps: m, readOnly: g } = n, y = Ne(n, rN);
      return F({}, y, {
        InputProps: F({}, m ?? {}, {
          readOnly: g
        })
      });
    }
    const { onPaste: r, onKeyDown: s, inputMode: i, readOnly: a, InputProps: l, inputProps: c, inputRef: d } = n, f = Ne(n, sN);
    return F({}, f, {
      InputProps: F({}, l ?? {}, {
        readOnly: a
      }),
      inputProps: F({}, c ?? {}, {
        inputMode: i,
        onPaste: r,
        onKeyDown: s,
        ref: d
      })
    });
  }, aN = (t) => {
    const e = vP(t), { forwardedProps: n, internalProps: r } = gP(e, "time");
    return dP({
      forwardedProps: n,
      internalProps: r,
      valueManager: Ar,
      fieldValueManager: _I,
      validator: Fo,
      valueType: "time"
    });
  }, oN = [
    "slots",
    "slotProps",
    "InputProps",
    "inputProps"
  ], qg = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiTimeField"
    }), { slots: s, slotProps: i, InputProps: a, inputProps: l } = r, c = Ne(r, oN), d = r, f = (s == null ? void 0 : s.textField) ?? (e.enableAccessibleFieldDOMStructure ? tN : aS), m = lt({
      elementType: f,
      externalSlotProps: i == null ? void 0 : i.textField,
      externalForwardedProps: c,
      ownerState: d,
      additionalProps: {
        ref: n
      }
    });
    m.inputProps = F({}, l, m.inputProps), m.InputProps = F({}, a, m.InputProps);
    const g = aN(m), y = iN(g), v = mP(F({}, y, {
      slots: s,
      slotProps: i
    }));
    return D.jsx(f, F({}, v));
  }), lN = "@media (prefers-reduced-motion: reduce)", As = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), dh = As && As[1] ? parseInt(As[1], 10) : null, fh = As && As[2] ? parseInt(As[2], 10) : null, cN = dh && dh < 10 || fh && fh < 13 || false, uN = () => Th(lN, {
    defaultMatches: false
  }) || cN;
  function Qg(t) {
    return wt("MuiPickersToolbar", t);
  }
  St("MuiPickersToolbar", [
    "root",
    "content"
  ]);
  const dN = [
    "children",
    "className",
    "toolbarTitle",
    "hidden",
    "titleId",
    "isLandscape",
    "classes",
    "landscapeDirection"
  ], fN = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      content: [
        "content"
      ]
    }, Qg, e);
  }, hN = _e("div", {
    name: "MuiPickersToolbar",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: t.spacing(2, 3),
    variants: [
      {
        props: {
          isLandscape: true
        },
        style: {
          height: "auto",
          maxWidth: 160,
          padding: 16,
          justifyContent: "flex-start",
          flexWrap: "wrap"
        }
      }
    ]
  })), mN = _e("div", {
    name: "MuiPickersToolbar",
    slot: "Content",
    overridesResolver: (t, e) => e.content
  })({
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    variants: [
      {
        props: {
          isLandscape: true
        },
        style: {
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column"
        }
      },
      {
        props: {
          isLandscape: true,
          landscapeDirection: "row"
        },
        style: {
          flexDirection: "row"
        }
      }
    ]
  }), pN = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersToolbar"
    }), { children: s, className: i, toolbarTitle: a, hidden: l, titleId: c } = r, d = Ne(r, dN), f = r, m = fN(f);
    return l ? null : D.jsxs(hN, F({
      ref: n,
      className: Rt(m.root, i),
      ownerState: f
    }, d, {
      children: [
        D.jsx(oo, {
          color: "text.secondary",
          variant: "overline",
          id: c,
          children: a
        }),
        D.jsx(mN, {
          className: m.content,
          ownerState: f,
          children: s
        })
      ]
    }));
  });
  function gN(t) {
    return wt("MuiPickersPopper", t);
  }
  St("MuiPickersPopper", [
    "root",
    "paper"
  ]);
  const yN = [
    "PaperComponent",
    "popperPlacement",
    "ownerState",
    "children",
    "paperSlotProps",
    "paperClasses",
    "onPaperClick",
    "onPaperTouchStart"
  ], vN = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, gN, e);
  }, bN = _e(uS, {
    name: "MuiPickersPopper",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    zIndex: t.zIndex.modal
  })), wN = _e(cS, {
    name: "MuiPickersPopper",
    slot: "Paper",
    overridesResolver: (t, e) => e.paper
  })({
    outline: 0,
    transformOrigin: "top center",
    variants: [
      {
        props: ({ placement: t }) => [
          "top",
          "top-start",
          "top-end"
        ].includes(t),
        style: {
          transformOrigin: "bottom center"
        }
      }
    ]
  });
  function SN(t, e) {
    return e.documentElement.clientWidth < t.clientX || e.documentElement.clientHeight < t.clientY;
  }
  function _N(t, e) {
    const n = Oe(false), r = Oe(false), s = Oe(null), i = Oe(false);
    Je(() => {
      if (!t) return;
      function c() {
        i.current = true;
      }
      return document.addEventListener("mousedown", c, true), document.addEventListener("touchstart", c, true), () => {
        document.removeEventListener("mousedown", c, true), document.removeEventListener("touchstart", c, true), i.current = false;
      };
    }, [
      t
    ]);
    const a = Ee((c) => {
      if (!i.current) return;
      const d = r.current;
      r.current = false;
      const f = ll(s.current);
      if (!s.current || "clientX" in c && SN(c, f)) return;
      if (n.current) {
        n.current = false;
        return;
      }
      let m;
      c.composedPath ? m = c.composedPath().indexOf(s.current) > -1 : m = !f.documentElement.contains(c.target) || s.current.contains(c.target), !m && !d && e(c);
    }), l = () => {
      r.current = true;
    };
    return Je(() => {
      if (t) {
        const c = ll(s.current), d = () => {
          n.current = true;
        };
        return c.addEventListener("touchstart", a), c.addEventListener("touchmove", d), () => {
          c.removeEventListener("touchstart", a), c.removeEventListener("touchmove", d);
        };
      }
    }, [
      t,
      a
    ]), Je(() => {
      if (t) {
        const c = ll(s.current);
        return c.addEventListener("click", a), () => {
          c.removeEventListener("click", a), r.current = false;
        };
      }
    }, [
      t,
      a
    ]), [
      s,
      l,
      l
    ];
  }
  const DN = gt((t, e) => {
    const { PaperComponent: n, popperPlacement: r, ownerState: s, children: i, paperSlotProps: a, paperClasses: l, onPaperClick: c, onPaperTouchStart: d } = t, f = Ne(t, yN), m = F({}, s, {
      placement: r
    }), g = lt({
      elementType: n,
      externalSlotProps: a,
      additionalProps: {
        tabIndex: -1,
        elevation: 8,
        ref: e
      },
      className: l,
      ownerState: m
    });
    return D.jsx(n, F({}, f, g, {
      onClick: (y) => {
        var _a2;
        c(y), (_a2 = g.onClick) == null ? void 0 : _a2.call(g, y);
      },
      onTouchStart: (y) => {
        var _a2;
        d(y), (_a2 = g.onTouchStart) == null ? void 0 : _a2.call(g, y);
      },
      ownerState: m,
      children: i
    }));
  });
  function kN(t) {
    const e = ct({
      props: t,
      name: "MuiPickersPopper"
    }), { anchorEl: n, children: r, containerRef: s = null, shouldRestoreFocus: i, onBlur: a, onDismiss: l, open: c, role: d, placement: f, slots: m, slotProps: g, reduceAnimations: y } = e;
    Je(() => {
      function C(P) {
        c && P.key === "Escape" && l();
      }
      return document.addEventListener("keydown", C), () => {
        document.removeEventListener("keydown", C);
      };
    }, [
      l,
      c
    ]);
    const v = Oe(null);
    Je(() => {
      d === "tooltip" || i && !i() || (c ? v.current = Yt(document) : v.current && v.current instanceof HTMLElement && setTimeout(() => {
        v.current instanceof HTMLElement && v.current.focus();
      }));
    }, [
      c,
      d,
      i
    ]);
    const [S, b, _] = _N(c, a ?? l), E = Oe(null), R = Zt(E, s), T = Zt(R, S), x = e, N = vN(x), I = uN(), O = y ?? I, J = (C) => {
      C.key === "Escape" && (C.stopPropagation(), l());
    }, U = (m == null ? void 0 : m.desktopTransition) ?? O ? xh : oS, L = (m == null ? void 0 : m.desktopTrapFocus) ?? lS, ee = (m == null ? void 0 : m.desktopPaper) ?? wN, Z = (m == null ? void 0 : m.popper) ?? bN, k = lt({
      elementType: Z,
      externalSlotProps: g == null ? void 0 : g.popper,
      additionalProps: {
        transition: true,
        role: d,
        open: c,
        anchorEl: n,
        placement: f,
        onKeyDown: J
      },
      className: N.root,
      ownerState: e
    });
    return D.jsx(Z, F({}, k, {
      children: ({ TransitionProps: C, placement: P }) => D.jsx(L, F({
        open: c,
        disableAutoFocus: true,
        disableRestoreFocus: true,
        disableEnforceFocus: d === "tooltip",
        isEnabled: () => true
      }, g == null ? void 0 : g.desktopTrapFocus, {
        children: D.jsx(U, F({}, C, g == null ? void 0 : g.desktopTransition, {
          children: D.jsx(DN, {
            PaperComponent: ee,
            ownerState: x,
            popperPlacement: P,
            ref: T,
            onPaperClick: b,
            onPaperTouchStart: _,
            paperClasses: N.paper,
            paperSlotProps: g == null ? void 0 : g.desktopPaper,
            children: r
          })
        }))
      }))
    }));
  }
  const TN = ({ open: t, onOpen: e, onClose: n }) => {
    const r = Oe(typeof t == "boolean").current, [s, i] = _t(false);
    Je(() => {
      if (r) {
        if (typeof t != "boolean") throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
        i(t);
      }
    }, [
      r,
      t
    ]);
    const a = _r((l) => {
      r || i(l), l && e && e(), !l && n && n();
    }, [
      r,
      e,
      n
    ]);
    return {
      isOpen: s,
      setIsOpen: a
    };
  }, xN = (t) => {
    const { action: e, hasChanged: n, dateState: r, isControlled: s } = t, i = !s && !r.hasBeenModifiedSinceMount;
    return e.name === "setValueFromField" ? true : e.name === "setValueFromAction" ? i && [
      "accept",
      "today",
      "clear"
    ].includes(e.pickerAction) ? true : n(r.lastPublishedValue) : e.name === "setValueFromView" && e.selectionState !== "shallow" || e.name === "setValueFromShortcut" ? i ? true : n(r.lastPublishedValue) : false;
  }, MN = (t) => {
    const { action: e, hasChanged: n, dateState: r, isControlled: s, closeOnSelect: i } = t, a = !s && !r.hasBeenModifiedSinceMount;
    return e.name === "setValueFromAction" ? a && [
      "accept",
      "today",
      "clear"
    ].includes(e.pickerAction) ? true : n(r.lastCommittedValue) : e.name === "setValueFromView" && e.selectionState === "finish" && i ? a ? true : n(r.lastCommittedValue) : e.name === "setValueFromShortcut" ? e.changeImportance === "accept" && n(r.lastCommittedValue) : false;
  }, EN = (t) => {
    const { action: e, closeOnSelect: n } = t;
    return e.name === "setValueFromAction" ? true : e.name === "setValueFromView" ? e.selectionState === "finish" && n : e.name === "setValueFromShortcut" ? e.changeImportance === "accept" : false;
  }, CN = ({ props: t, valueManager: e, valueType: n, wrapperVariant: r, validator: s }) => {
    const { onAccept: i, onChange: a, value: l, defaultValue: c, closeOnSelect: d = r === "desktop", timezone: f, referenceDate: m } = t, { current: g } = Oe(c), { current: y } = Oe(l !== void 0), [v, S] = _t(f), b = xt(), _ = Wi(), { isOpen: E, setIsOpen: R } = TN(t), { timezone: T, value: x, handleValueChange: N } = _u({
      timezone: f,
      value: l,
      defaultValue: g,
      referenceDate: m,
      onChange: a,
      valueManager: e
    }), [I, O] = _t(() => {
      let Q;
      return x !== void 0 ? Q = x : g !== void 0 ? Q = g : Q = e.emptyValue, {
        draft: Q,
        lastPublishedValue: Q,
        lastCommittedValue: Q,
        lastControlledValue: l,
        hasBeenModifiedSinceMount: false
      };
    }), J = e.getTimezone(b, I.draft);
    v !== f && (S(f), f && J && f !== J && O((Q) => F({}, Q, {
      draft: e.setTimezone(b, f, Q.draft)
    })));
    const { getValidationErrorForNewValue: U } = jg({
      props: t,
      validator: s,
      timezone: T,
      value: I.draft,
      onError: t.onError
    }), L = Ee((Q) => {
      const ce = {
        action: Q,
        dateState: I,
        hasChanged: (ve) => !e.areValuesEqual(b, Q.value, ve),
        isControlled: y,
        closeOnSelect: d
      }, fe = xN(ce), be = MN(ce), G = EN(ce);
      O((ve) => F({}, ve, {
        draft: Q.value,
        lastPublishedValue: fe ? Q.value : ve.lastPublishedValue,
        lastCommittedValue: be ? Q.value : ve.lastCommittedValue,
        hasBeenModifiedSinceMount: true
      }));
      let le = null;
      const he = () => (le || (le = {
        validationError: Q.name === "setValueFromField" ? Q.context.validationError : U(Q.value)
      }, Q.name === "setValueFromShortcut" && (le.shortcut = Q.shortcut)), le);
      fe && N(Q.value, he()), be && i && i(Q.value, he()), G && R(false);
    });
    if (I.lastControlledValue !== l) {
      const Q = e.areValuesEqual(b, I.draft, x);
      O((ce) => F({}, ce, {
        lastControlledValue: l
      }, Q ? {} : {
        lastCommittedValue: x,
        lastPublishedValue: x,
        draft: x,
        hasBeenModifiedSinceMount: true
      }));
    }
    const ee = Ee(() => {
      L({
        value: e.emptyValue,
        name: "setValueFromAction",
        pickerAction: "clear"
      });
    }), Z = Ee(() => {
      L({
        value: I.lastPublishedValue,
        name: "setValueFromAction",
        pickerAction: "accept"
      });
    }), k = Ee(() => {
      L({
        value: I.lastPublishedValue,
        name: "setValueFromAction",
        pickerAction: "dismiss"
      });
    }), C = Ee(() => {
      L({
        value: I.lastCommittedValue,
        name: "setValueFromAction",
        pickerAction: "cancel"
      });
    }), P = Ee(() => {
      L({
        value: e.getTodayValue(b, T, n),
        name: "setValueFromAction",
        pickerAction: "today"
      });
    }), W = Ee((Q) => {
      Q.preventDefault(), R(true);
    }), Y = Ee((Q) => {
      Q == null ? void 0 : Q.preventDefault(), R(false);
    }), te = Ee((Q, ce = "partial") => L({
      name: "setValueFromView",
      value: Q,
      selectionState: ce
    })), j = Ee((Q, ce, fe) => L({
      name: "setValueFromShortcut",
      value: Q,
      changeImportance: ce,
      shortcut: fe
    })), z = Ee((Q, ce) => L({
      name: "setValueFromField",
      value: Q,
      context: ce
    })), K = {
      onClear: ee,
      onAccept: Z,
      onDismiss: k,
      onCancel: C,
      onSetToday: P,
      onOpen: W,
      onClose: Y
    }, X = {
      value: I.draft,
      onChange: z
    }, se = Re(() => e.cleanValue(b, I.draft), [
      b,
      e,
      I.draft
    ]), H = {
      value: se,
      onChange: te,
      onClose: Y,
      open: E
    }, ne = F({}, K, {
      value: se,
      onChange: te,
      onSelectShortcut: j,
      isValid: (Q) => {
        const ce = s({
          adapter: _,
          value: Q,
          timezone: T,
          props: t
        });
        return !e.hasError(ce);
      }
    }), q = Re(() => ({
      onOpen: W,
      onClose: Y,
      open: E
    }), [
      E,
      Y,
      W
    ]);
    return {
      open: E,
      fieldProps: X,
      viewProps: H,
      layoutProps: ne,
      actions: K,
      contextValue: q
    };
  }, AN = [
    "className",
    "sx"
  ], RN = ({ props: t, propsFromPickerValue: e, additionalViewProps: n, autoFocusView: r, rendererInterceptor: s, fieldRef: i }) => {
    const { onChange: a, open: l, onClose: c } = e, { view: d, views: f, openTo: m, onViewChange: g, viewRenderers: y, timezone: v } = t, S = Ne(t, AN), { view: b, setView: _, defaultView: E, focusedView: R, setFocusedView: T, setValueAndGoToNextView: x } = Lo({
      view: d,
      views: f,
      openTo: m,
      onChange: a,
      onViewChange: g,
      autoFocus: r
    }), { hasUIView: N, viewModeLookup: I } = Re(() => f.reduce((k, C) => {
      let P;
      return y[C] != null ? P = "UI" : P = "field", k.viewModeLookup[C] = P, P === "UI" && (k.hasUIView = true), k;
    }, {
      hasUIView: false,
      viewModeLookup: {}
    }), [
      y,
      f
    ]), O = Re(() => f.reduce((k, C) => y[C] != null && Ci(C) ? k + 1 : k, 0), [
      y,
      f
    ]), J = I[b], U = Ee(() => J === "UI"), [L, ee] = _t(J === "UI" ? b : null);
    return L !== b && I[b] === "UI" && ee(b), Rs(() => {
      J === "field" && l && (c(), setTimeout(() => {
        var _a2, _b;
        (_a2 = i == null ? void 0 : i.current) == null ? void 0 : _a2.setSelectedSections(b), (_b = i == null ? void 0 : i.current) == null ? void 0 : _b.focusField(b);
      }));
    }, [
      b
    ]), Rs(() => {
      if (!l) return;
      let k = b;
      J === "field" && L != null && (k = L), k !== E && I[k] === "UI" && I[E] === "UI" && (k = E), k !== b && _(k), T(k, true);
    }, [
      l
    ]), {
      hasUIView: N,
      shouldRestoreFocus: U,
      layoutProps: {
        views: f,
        view: L,
        onViewChange: _
      },
      renderCurrentView: () => {
        if (L == null) return null;
        const k = y[L];
        if (k == null) return null;
        const C = F({}, S, n, e, {
          views: f,
          timezone: v,
          onChange: x,
          view: L,
          onViewChange: _,
          focusedView: R,
          onFocusedViewChange: T,
          showViewSwitcher: O > 1,
          timeViewsCount: O
        });
        return s ? s(y, L, C) : k(C);
      }
    };
  };
  function hh() {
    return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  const ON = (t, e) => {
    const [n, r] = _t(hh);
    return Rs(() => {
      const i = () => {
        r(hh());
      };
      return window.addEventListener("orientationchange", i), () => {
        window.removeEventListener("orientationchange", i);
      };
    }, []), vs(t, [
      "hours",
      "minutes",
      "seconds"
    ]) ? false : (e || n) === "landscape";
  }, IN = ({ props: t, propsFromPickerValue: e, propsFromPickerViews: n, wrapperVariant: r }) => {
    const { orientation: s } = t, i = ON(n.views, s), a = xr();
    return {
      layoutProps: F({}, n, e, {
        isLandscape: i,
        isRtl: a,
        wrapperVariant: r,
        disabled: t.disabled,
        readOnly: t.readOnly
      })
    };
  };
  function PN(t) {
    const { props: e, pickerValueResponse: n } = t;
    return Re(() => ({
      value: n.viewProps.value,
      open: n.open,
      disabled: e.disabled ?? false,
      readOnly: e.readOnly ?? false
    }), [
      n.viewProps.value,
      n.open,
      e.disabled,
      e.readOnly
    ]);
  }
  const Xg = ({ props: t, valueManager: e, valueType: n, wrapperVariant: r, additionalViewProps: s, validator: i, autoFocusView: a, rendererInterceptor: l, fieldRef: c }) => {
    const d = CN({
      props: t,
      valueManager: e,
      valueType: n,
      wrapperVariant: r,
      validator: i
    }), f = RN({
      props: t,
      additionalViewProps: s,
      autoFocusView: a,
      fieldRef: c,
      propsFromPickerValue: d.viewProps,
      rendererInterceptor: l
    }), m = IN({
      props: t,
      wrapperVariant: r,
      propsFromPickerValue: d.layoutProps,
      propsFromPickerViews: f.layoutProps
    }), g = PN({
      props: t,
      pickerValueResponse: d
    });
    return {
      open: d.open,
      actions: d.actions,
      fieldProps: d.fieldProps,
      renderCurrentView: f.renderCurrentView,
      hasUIView: f.hasUIView,
      shouldRestoreFocus: f.shouldRestoreFocus,
      layoutProps: m.layoutProps,
      contextValue: d.contextValue,
      ownerState: g
    };
  };
  function Jg(t) {
    return wt("MuiPickersLayout", t);
  }
  const Fr = St("MuiPickersLayout", [
    "root",
    "landscape",
    "contentWrapper",
    "toolbar",
    "actionBar",
    "tabs",
    "shortcuts"
  ]), NN = [
    "onAccept",
    "onClear",
    "onCancel",
    "onSetToday",
    "actions"
  ];
  function LN(t) {
    const { onAccept: e, onClear: n, onCancel: r, onSetToday: s, actions: i } = t, a = Ne(t, NN), l = pn();
    if (i == null || i.length === 0) return null;
    const c = i == null ? void 0 : i.map((d) => {
      switch (d) {
        case "clear":
          return D.jsx(li, {
            onClick: n,
            children: l.clearButtonLabel
          }, d);
        case "cancel":
          return D.jsx(li, {
            onClick: r,
            children: l.cancelButtonLabel
          }, d);
        case "accept":
          return D.jsx(li, {
            onClick: e,
            children: l.okButtonLabel
          }, d);
        case "today":
          return D.jsx(li, {
            onClick: s,
            children: l.todayButtonLabel
          }, d);
        default:
          return null;
      }
    });
    return D.jsx(dS, F({}, a, {
      children: c
    }));
  }
  const YN = [
    "items",
    "changeImportance",
    "isLandscape",
    "onChange",
    "isValid"
  ], FN = [
    "getValue"
  ];
  function HN(t) {
    const { items: e, changeImportance: n = "accept", onChange: r, isValid: s } = t, i = Ne(t, YN);
    if (e == null || e.length === 0) return null;
    const a = e.map((l) => {
      let { getValue: c } = l, d = Ne(l, FN);
      const f = c({
        isValid: s
      });
      return F({}, d, {
        label: d.label,
        onClick: () => {
          r(f, n, d);
        },
        disabled: !s(f)
      });
    });
    return D.jsx(fS, F({
      dense: true,
      sx: [
        {
          maxHeight: xg,
          maxWidth: 200,
          overflow: "auto"
        },
        ...Array.isArray(i.sx) ? i.sx : [
          i.sx
        ]
      ]
    }, i, {
      children: a.map((l) => D.jsx(hS, {
        children: D.jsx(mS, F({}, l))
      }, l.id ?? l.label))
    }));
  }
  function jN(t) {
    return t.view !== null;
  }
  const VN = (t) => {
    const { classes: e, isLandscape: n } = t;
    return mt({
      root: [
        "root",
        n && "landscape"
      ],
      contentWrapper: [
        "contentWrapper"
      ],
      toolbar: [
        "toolbar"
      ],
      actionBar: [
        "actionBar"
      ],
      tabs: [
        "tabs"
      ],
      landscape: [
        "landscape"
      ],
      shortcuts: [
        "shortcuts"
      ]
    }, Jg, e);
  }, WN = (t) => {
    const { wrapperVariant: e, onAccept: n, onClear: r, onCancel: s, onSetToday: i, view: a, views: l, onViewChange: c, value: d, onChange: f, onSelectShortcut: m, isValid: g, isLandscape: y, disabled: v, readOnly: S, children: b, slots: _, slotProps: E } = t, R = VN(t), T = (_ == null ? void 0 : _.actionBar) ?? LN, x = lt({
      elementType: T,
      externalSlotProps: E == null ? void 0 : E.actionBar,
      additionalProps: {
        onAccept: n,
        onClear: r,
        onCancel: s,
        onSetToday: i,
        actions: e === "desktop" ? [] : [
          "cancel",
          "accept"
        ]
      },
      className: R.actionBar,
      ownerState: F({}, t, {
        wrapperVariant: e
      })
    }), N = D.jsx(T, F({}, x)), I = _ == null ? void 0 : _.toolbar, O = lt({
      elementType: I,
      externalSlotProps: E == null ? void 0 : E.toolbar,
      additionalProps: {
        isLandscape: y,
        onChange: f,
        value: d,
        view: a,
        onViewChange: c,
        views: l,
        disabled: v,
        readOnly: S
      },
      className: R.toolbar,
      ownerState: F({}, t, {
        wrapperVariant: e
      })
    }), J = jN(O) && I ? D.jsx(I, F({}, O)) : null, U = b, L = _ == null ? void 0 : _.tabs, ee = a && L ? D.jsx(L, F({
      view: a,
      onViewChange: c,
      className: R.tabs
    }, E == null ? void 0 : E.tabs)) : null, Z = (_ == null ? void 0 : _.shortcuts) ?? HN, k = lt({
      elementType: Z,
      externalSlotProps: E == null ? void 0 : E.shortcuts,
      additionalProps: {
        isValid: g,
        isLandscape: y,
        onChange: m
      },
      className: R.shortcuts,
      ownerState: {
        isValid: g,
        isLandscape: y,
        onChange: m,
        wrapperVariant: e
      }
    }), C = a && Z ? D.jsx(Z, F({}, k)) : null;
    return {
      toolbar: J,
      content: U,
      tabs: ee,
      actionBar: N,
      shortcuts: C
    };
  }, UN = (t) => {
    const { isLandscape: e, classes: n } = t;
    return mt({
      root: [
        "root",
        e && "landscape"
      ],
      contentWrapper: [
        "contentWrapper"
      ]
    }, Jg, n);
  }, BN = _e("div", {
    name: "MuiPickersLayout",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "grid",
    gridAutoColumns: "max-content auto max-content",
    gridAutoRows: "max-content auto max-content",
    [`& .${Fr.actionBar}`]: {
      gridColumn: "1 / 4",
      gridRow: 3
    },
    variants: [
      {
        props: {
          isLandscape: true
        },
        style: {
          [`& .${Fr.toolbar}`]: {
            gridColumn: 1,
            gridRow: "2 / 3"
          },
          [`.${Fr.shortcuts}`]: {
            gridColumn: "2 / 4",
            gridRow: 1
          }
        }
      },
      {
        props: {
          isLandscape: true,
          isRtl: true
        },
        style: {
          [`& .${Fr.toolbar}`]: {
            gridColumn: 3
          }
        }
      },
      {
        props: {
          isLandscape: false
        },
        style: {
          [`& .${Fr.toolbar}`]: {
            gridColumn: "2 / 4",
            gridRow: 1
          },
          [`& .${Fr.shortcuts}`]: {
            gridColumn: 1,
            gridRow: "2 / 3"
          }
        }
      },
      {
        props: {
          isLandscape: false,
          isRtl: true
        },
        style: {
          [`& .${Fr.shortcuts}`]: {
            gridColumn: 3
          }
        }
      }
    ]
  }), zN = _e("div", {
    name: "MuiPickersLayout",
    slot: "ContentWrapper",
    overridesResolver: (t, e) => e.contentWrapper
  })({
    gridColumn: 2,
    gridRow: 2,
    display: "flex",
    flexDirection: "column"
  }), Kg = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersLayout"
    }), { toolbar: s, content: i, tabs: a, actionBar: l, shortcuts: c } = WN(r), { sx: d, className: f, isLandscape: m, wrapperVariant: g } = r, y = UN(r);
    return D.jsxs(BN, {
      ref: n,
      sx: d,
      className: Rt(y.root, f),
      ownerState: r,
      children: [
        m ? c : s,
        m ? s : c,
        D.jsx(zN, {
          className: y.contentWrapper,
          children: g === "desktop" ? D.jsxs(Kn, {
            children: [
              i,
              a
            ]
          }) : D.jsxs(Kn, {
            children: [
              a,
              i
            ]
          })
        }),
        l
      ]
    });
  }), $N = [
    "props",
    "getOpenDialogAriaText"
  ], GN = [
    "ownerState"
  ], ZN = [
    "ownerState"
  ], qN = (t) => {
    var _a2;
    let { props: e, getOpenDialogAriaText: n } = t, r = Ne(t, $N);
    const { slots: s, slotProps: i, className: a, sx: l, format: c, formatDensity: d, enableAccessibleFieldDOMStructure: f, selectedSections: m, onSelectedSectionsChange: g, timezone: y, name: v, label: S, inputRef: b, readOnly: _, disabled: E, autoFocus: R, localeText: T, reduceAnimations: x } = e, N = Oe(null), I = Oe(null), O = Ii(), J = ((_a2 = i == null ? void 0 : i.toolbar) == null ? void 0 : _a2.hidden) ?? false, { open: U, actions: L, hasUIView: ee, layoutProps: Z, renderCurrentView: k, shouldRestoreFocus: C, fieldProps: P, contextValue: W, ownerState: Y } = Xg(F({}, r, {
      props: e,
      fieldRef: I,
      autoFocusView: true,
      additionalViewProps: {},
      wrapperVariant: "desktop"
    })), te = s.inputAdornment ?? kh, j = lt({
      elementType: te,
      externalSlotProps: i == null ? void 0 : i.inputAdornment,
      additionalProps: {
        position: "end"
      },
      ownerState: e
    }), z = Ne(j, GN), K = s.openPickerButton ?? Oi, X = lt({
      elementType: K,
      externalSlotProps: i == null ? void 0 : i.openPickerButton,
      additionalProps: {
        disabled: E || _,
        onClick: U ? L.onClose : L.onOpen,
        "aria-label": n(P.value),
        edge: z.position
      },
      ownerState: e
    }), se = Ne(X, ZN), H = s.openPickerIcon, re = lt({
      elementType: H,
      externalSlotProps: i == null ? void 0 : i.openPickerIcon,
      ownerState: Y
    }), ne = s.field, q = lt({
      elementType: ne,
      externalSlotProps: i == null ? void 0 : i.field,
      additionalProps: F({}, P, J && {
        id: O
      }, {
        readOnly: _,
        disabled: E,
        className: a,
        sx: l,
        format: c,
        formatDensity: d,
        enableAccessibleFieldDOMStructure: f,
        selectedSections: m,
        onSelectedSectionsChange: g,
        timezone: y,
        label: S,
        name: v,
        autoFocus: R && !e.open,
        focused: U ? true : void 0
      }, b ? {
        inputRef: b
      } : {}),
      ownerState: e
    });
    ee && (q.InputProps = F({}, q.InputProps, {
      ref: N
    }, !e.disableOpenPicker && {
      [`${z.position}Adornment`]: D.jsx(te, F({}, z, {
        children: D.jsx(K, F({}, se, {
          children: D.jsx(H, F({}, re))
        }))
      }))
    }));
    const Q = F({
      textField: s.textField,
      clearIcon: s.clearIcon,
      clearButton: s.clearButton
    }, q.slots), ce = s.layout ?? Kg;
    let fe = O;
    J && (S ? fe = `${O}-label` : fe = void 0);
    const be = F({}, i, {
      toolbar: F({}, i == null ? void 0 : i.toolbar, {
        titleId: O
      }),
      popper: F({
        "aria-labelledby": fe
      }, i == null ? void 0 : i.popper)
    }), G = Zt(I, q.unstableFieldRef);
    return {
      renderPicker: () => D.jsxs(Vg, {
        contextValue: W,
        localeText: T,
        children: [
          D.jsx(ne, F({}, q, {
            slots: Q,
            slotProps: be,
            unstableFieldRef: G
          })),
          D.jsx(kN, F({
            role: "dialog",
            placement: "bottom-start",
            anchorEl: N.current
          }, L, {
            open: U,
            slots: s,
            slotProps: be,
            shouldRestoreFocus: C,
            reduceAnimations: x,
            children: D.jsx(ce, F({}, Z, be == null ? void 0 : be.layout, {
              slots: s,
              slotProps: be,
              children: k()
            }))
          }))
        ]
      })
    };
  }, QN = _e(pS)({
    [`& .${kd.container}`]: {
      outline: 0
    },
    [`& .${kd.paper}`]: {
      outline: 0,
      minWidth: Tg
    }
  }), XN = _e(gS)({
    "&:first-of-type": {
      padding: 0
    }
  });
  function JN(t) {
    const { children: e, onDismiss: n, open: r, slots: s, slotProps: i } = t, a = (s == null ? void 0 : s.dialog) ?? QN, l = (s == null ? void 0 : s.mobileTransition) ?? xh;
    return D.jsx(a, F({
      open: r,
      onClose: n
    }, i == null ? void 0 : i.dialog, {
      TransitionComponent: l,
      TransitionProps: i == null ? void 0 : i.mobileTransition,
      PaperComponent: s == null ? void 0 : s.mobilePaper,
      PaperProps: i == null ? void 0 : i.mobilePaper,
      children: D.jsx(XN, {
        children: e
      })
    }));
  }
  const KN = [
    "props",
    "getOpenDialogAriaText"
  ], eL = (t) => {
    var _a2;
    let { props: e, getOpenDialogAriaText: n } = t, r = Ne(t, KN);
    const { slots: s, slotProps: i, className: a, sx: l, format: c, formatDensity: d, enableAccessibleFieldDOMStructure: f, selectedSections: m, onSelectedSectionsChange: g, timezone: y, name: v, label: S, inputRef: b, readOnly: _, disabled: E, localeText: R } = e, T = Oe(null), x = Ii(), N = ((_a2 = i == null ? void 0 : i.toolbar) == null ? void 0 : _a2.hidden) ?? false, { open: I, actions: O, layoutProps: J, renderCurrentView: U, fieldProps: L, contextValue: ee } = Xg(F({}, r, {
      props: e,
      fieldRef: T,
      autoFocusView: true,
      additionalViewProps: {},
      wrapperVariant: "mobile"
    })), Z = s.field, k = lt({
      elementType: Z,
      externalSlotProps: i == null ? void 0 : i.field,
      additionalProps: F({}, L, N && {
        id: x
      }, !(E || _) && {
        onClick: O.onOpen,
        onKeyDown: AI(O.onOpen)
      }, {
        readOnly: _ ?? true,
        disabled: E,
        className: a,
        sx: l,
        format: c,
        formatDensity: d,
        enableAccessibleFieldDOMStructure: f,
        selectedSections: m,
        onSelectedSectionsChange: g,
        timezone: y,
        label: S,
        name: v
      }, b ? {
        inputRef: b
      } : {}),
      ownerState: e
    });
    k.inputProps = F({}, k.inputProps, {
      "aria-label": n(L.value)
    });
    const C = F({
      textField: s.textField
    }, k.slots), P = s.layout ?? Kg;
    let W = x;
    N && (S ? W = `${x}-label` : W = void 0);
    const Y = F({}, i, {
      toolbar: F({}, i == null ? void 0 : i.toolbar, {
        titleId: x
      }),
      mobilePaper: F({
        "aria-labelledby": W
      }, i == null ? void 0 : i.mobilePaper)
    }), te = Zt(T, k.unstableFieldRef);
    return {
      renderPicker: () => D.jsxs(Vg, {
        contextValue: ee,
        localeText: R,
        children: [
          D.jsx(Z, F({}, k, {
            slots: C,
            slotProps: Y,
            unstableFieldRef: te
          })),
          D.jsx(JN, F({}, O, {
            open: I,
            slots: s,
            slotProps: Y,
            children: D.jsx(P, F({}, J, Y == null ? void 0 : Y.layout, {
              slots: s,
              slotProps: Y,
              children: U()
            }))
          }))
        ]
      })
    };
  };
  function tL(t) {
    return wt("MuiPickersToolbarText", t);
  }
  const mh = St("MuiPickersToolbarText", [
    "root",
    "selected"
  ]), nL = [
    "className",
    "selected",
    "value"
  ], rL = (t) => {
    const { classes: e, selected: n } = t;
    return mt({
      root: [
        "root",
        n && "selected"
      ]
    }, tL, e);
  }, sL = _e(oo, {
    name: "MuiPickersToolbarText",
    slot: "Root",
    overridesResolver: (t, e) => [
      e.root,
      {
        [`&.${mh.selected}`]: e.selected
      }
    ]
  })(({ theme: t }) => ({
    transition: t.transitions.create("color"),
    color: (t.vars || t).palette.text.secondary,
    [`&.${mh.selected}`]: {
      color: (t.vars || t).palette.text.primary
    }
  })), ey = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersToolbarText"
    }), { className: s, value: i } = r, a = Ne(r, nL), l = rL(r);
    return D.jsx(sL, F({
      ref: n,
      className: Rt(l.root, s),
      component: "span"
    }, a, {
      children: i
    }));
  }), iL = [
    "align",
    "className",
    "selected",
    "typographyClassName",
    "value",
    "variant",
    "width"
  ], aL = (t) => {
    const { classes: e } = t;
    return mt({
      root: [
        "root"
      ]
    }, Qg, e);
  }, oL = _e(li, {
    name: "MuiPickersToolbarButton",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    padding: 0,
    minWidth: 16,
    textTransform: "none"
  }), oi = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiPickersToolbarButton"
    }), { align: s, className: i, selected: a, typographyClassName: l, value: c, variant: d, width: f } = r, m = Ne(r, iL), g = aL(r);
    return D.jsx(oL, F({
      variant: "text",
      ref: n,
      className: Rt(g.root, i)
    }, f ? {
      sx: {
        width: f
      }
    } : {}, m, {
      children: D.jsx(ey, {
        align: s,
        className: l,
        variant: d,
        value: c,
        selected: a
      })
    }));
  });
  function lL(t) {
    return wt("MuiTimePickerToolbar", t);
  }
  const yi = St("MuiTimePickerToolbar", [
    "root",
    "separator",
    "hourMinuteLabel",
    "hourMinuteLabelLandscape",
    "hourMinuteLabelReverse",
    "ampmSelection",
    "ampmLandscape",
    "ampmLabel"
  ]), cL = [
    "ampm",
    "ampmInClock",
    "value",
    "isLandscape",
    "onChange",
    "view",
    "onViewChange",
    "views",
    "disabled",
    "readOnly",
    "className"
  ], uL = (t) => {
    const { isLandscape: e, classes: n, isRtl: r } = t;
    return mt({
      root: [
        "root"
      ],
      separator: [
        "separator"
      ],
      hourMinuteLabel: [
        "hourMinuteLabel",
        e && "hourMinuteLabelLandscape",
        r && "hourMinuteLabelReverse"
      ],
      ampmSelection: [
        "ampmSelection",
        e && "ampmLandscape"
      ],
      ampmLabel: [
        "ampmLabel"
      ]
    }, lL, n);
  }, dL = _e(pN, {
    name: "MuiTimePickerToolbar",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({}), fL = _e(ey, {
    name: "MuiTimePickerToolbar",
    slot: "Separator",
    overridesResolver: (t, e) => e.separator
  })({
    outline: 0,
    margin: "0 4px 0 2px",
    cursor: "default"
  }), hL = _e("div", {
    name: "MuiTimePickerToolbar",
    slot: "HourMinuteLabel",
    overridesResolver: (t, e) => [
      {
        [`&.${yi.hourMinuteLabelLandscape}`]: e.hourMinuteLabelLandscape,
        [`&.${yi.hourMinuteLabelReverse}`]: e.hourMinuteLabelReverse
      },
      e.hourMinuteLabel
    ]
  })({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    variants: [
      {
        props: {
          isRtl: true
        },
        style: {
          flexDirection: "row-reverse"
        }
      },
      {
        props: {
          isLandscape: true
        },
        style: {
          marginTop: "auto"
        }
      }
    ]
  }), mL = _e("div", {
    name: "MuiTimePickerToolbar",
    slot: "AmPmSelection",
    overridesResolver: (t, e) => [
      {
        [`.${yi.ampmLabel}`]: e.ampmLabel
      },
      {
        [`&.${yi.ampmLandscape}`]: e.ampmLandscape
      },
      e.ampmSelection
    ]
  })({
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: 12,
    [`& .${yi.ampmLabel}`]: {
      fontSize: 17
    },
    variants: [
      {
        props: {
          isLandscape: true
        },
        style: {
          margin: "4px 0 auto",
          flexDirection: "row",
          justifyContent: "space-around",
          flexBasis: "100%"
        }
      }
    ]
  });
  function pL(t) {
    const e = ct({
      props: t,
      name: "MuiTimePickerToolbar"
    }), { ampm: n, ampmInClock: r, value: s, isLandscape: i, onChange: a, view: l, onViewChange: c, views: d, disabled: f, readOnly: m, className: g } = e, y = Ne(e, cL), v = xt(), S = pn(), b = xr(), _ = !!(n && !r && d.includes("hours")), { meridiemMode: E, handleMeridiemChange: R } = bu(s, n, a), T = (O) => n ? v.format(O, "hours12h") : v.format(O, "hours24h"), x = F({}, e, {
      isRtl: b
    }), N = uL(x), I = D.jsx(fL, {
      tabIndex: -1,
      value: ":",
      variant: "h3",
      selected: false,
      className: N.separator
    });
    return D.jsxs(dL, F({
      landscapeDirection: "row",
      toolbarTitle: S.timePickerToolbarTitle,
      isLandscape: i,
      ownerState: x,
      className: Rt(N.root, g)
    }, y, {
      children: [
        D.jsxs(hL, {
          className: N.hourMinuteLabel,
          ownerState: x,
          children: [
            vs(d, "hours") && D.jsx(oi, {
              tabIndex: -1,
              variant: "h3",
              onClick: () => c("hours"),
              selected: l === "hours",
              value: s ? T(s) : "--"
            }),
            vs(d, [
              "hours",
              "minutes"
            ]) && I,
            vs(d, "minutes") && D.jsx(oi, {
              tabIndex: -1,
              variant: "h3",
              onClick: () => c("minutes"),
              selected: l === "minutes",
              value: s ? v.format(s, "minutes") : "--"
            }),
            vs(d, [
              "minutes",
              "seconds"
            ]) && I,
            vs(d, "seconds") && D.jsx(oi, {
              variant: "h3",
              onClick: () => c("seconds"),
              selected: l === "seconds",
              value: s ? v.format(s, "seconds") : "--"
            })
          ]
        }),
        _ && D.jsxs(mL, {
          className: N.ampmSelection,
          ownerState: x,
          children: [
            D.jsx(oi, {
              disableRipple: true,
              variant: "subtitle2",
              selected: E === "am",
              typographyClassName: N.ampmLabel,
              value: br(v, "am"),
              onClick: m ? void 0 : () => R("am"),
              disabled: f
            }),
            D.jsx(oi, {
              disableRipple: true,
              variant: "subtitle2",
              selected: E === "pm",
              typographyClassName: N.ampmLabel,
              value: br(v, "pm"),
              onClick: m ? void 0 : () => R("pm"),
              disabled: f
            })
          ]
        })
      ]
    }));
  }
  function ty(t, e) {
    var _a2;
    const n = xt(), r = ct({
      props: t,
      name: e
    }), s = r.ampm ?? n.is12HourCycleInCurrentLocale(), i = Re(() => {
      var _a3;
      return ((_a3 = r.localeText) == null ? void 0 : _a3.toolbarTitle) == null ? r.localeText : F({}, r.localeText, {
        timePickerToolbarTitle: r.localeText.toolbarTitle
      });
    }, [
      r.localeText
    ]);
    return F({}, r, {
      ampm: s,
      localeText: i
    }, TO({
      views: r.views,
      openTo: r.openTo,
      defaultViews: [
        "hours",
        "minutes"
      ],
      defaultOpenTo: "hours"
    }), {
      disableFuture: r.disableFuture ?? false,
      disablePast: r.disablePast ?? false,
      slots: F({
        toolbar: pL
      }, r.slots),
      slotProps: F({}, r.slotProps, {
        toolbar: F({
          ampm: s,
          ampmInClock: r.ampmInClock
        }, (_a2 = r.slotProps) == null ? void 0 : _a2.toolbar)
      })
    });
  }
  const Pl = ({ view: t, onViewChange: e, focusedView: n, onFocusedViewChange: r, views: s, value: i, defaultValue: a, referenceDate: l, onChange: c, className: d, classes: f, disableFuture: m, disablePast: g, minTime: y, maxTime: v, shouldDisableTime: S, minutesStep: b, ampm: _, ampmInClock: E, slots: R, slotProps: T, readOnly: x, disabled: N, sx: I, autoFocus: O, showViewSwitcher: J, disableIgnoringDatePartForTimeValidation: U, timezone: L }) => D.jsx(EI, {
    view: t,
    onViewChange: e,
    focusedView: n && Ci(n) ? n : null,
    onFocusedViewChange: r,
    views: s.filter(Ci),
    value: i,
    defaultValue: a,
    referenceDate: l,
    onChange: c,
    className: d,
    classes: f,
    disableFuture: m,
    disablePast: g,
    minTime: y,
    maxTime: v,
    shouldDisableTime: S,
    minutesStep: b,
    ampm: _,
    ampmInClock: E,
    slots: R,
    slotProps: T,
    readOnly: x,
    disabled: N,
    sx: I,
    autoFocus: O,
    showViewSwitcher: J,
    disableIgnoringDatePartForTimeValidation: U,
    timezone: L
  }), gL = ({ view: t, onViewChange: e, focusedView: n, onFocusedViewChange: r, views: s, value: i, defaultValue: a, referenceDate: l, onChange: c, className: d, classes: f, disableFuture: m, disablePast: g, minTime: y, maxTime: v, shouldDisableTime: S, minutesStep: b, ampm: _, slots: E, slotProps: R, readOnly: T, disabled: x, sx: N, autoFocus: I, disableIgnoringDatePartForTimeValidation: O, timeSteps: J, skipDisabled: U, timezone: L }) => D.jsx(YI, {
    view: t,
    onViewChange: e,
    focusedView: n,
    onFocusedViewChange: r,
    views: s.filter(Ci),
    value: i,
    defaultValue: a,
    referenceDate: l,
    onChange: c,
    className: d,
    classes: f,
    disableFuture: m,
    disablePast: g,
    minTime: y,
    maxTime: v,
    shouldDisableTime: S,
    minutesStep: b,
    ampm: _,
    slots: E,
    slotProps: R,
    readOnly: T,
    disabled: x,
    sx: N,
    autoFocus: I,
    disableIgnoringDatePartForTimeValidation: O,
    timeStep: J == null ? void 0 : J.minutes,
    skipDisabled: U,
    timezone: L
  }), ph = ({ view: t, onViewChange: e, focusedView: n, onFocusedViewChange: r, views: s, value: i, defaultValue: a, referenceDate: l, onChange: c, className: d, classes: f, disableFuture: m, disablePast: g, minTime: y, maxTime: v, shouldDisableTime: S, minutesStep: b, ampm: _, slots: E, slotProps: R, readOnly: T, disabled: x, sx: N, autoFocus: I, disableIgnoringDatePartForTimeValidation: O, timeSteps: J, skipDisabled: U, timezone: L }) => D.jsx(qI, {
    view: t,
    onViewChange: e,
    focusedView: n,
    onFocusedViewChange: r,
    views: s.filter(Ci),
    value: i,
    defaultValue: a,
    referenceDate: l,
    onChange: c,
    className: d,
    classes: f,
    disableFuture: m,
    disablePast: g,
    minTime: y,
    maxTime: v,
    shouldDisableTime: S,
    minutesStep: b,
    ampm: _,
    slots: E,
    slotProps: R,
    readOnly: T,
    disabled: x,
    sx: N,
    autoFocus: I,
    disableIgnoringDatePartForTimeValidation: O,
    timeSteps: J,
    skipDisabled: U,
    timezone: L
  }), yL = (t, e, n) => n ? e.filter((r) => !xO(r) || r === "hours") : t ? [
    ...e,
    "meridiem"
  ] : e, vL = (t, e) => 1440 / ((t.hours ?? 1) * (t.minutes ?? 5)) <= e;
  function bL({ thresholdToRenderTimeInASingleColumn: t, ampm: e, timeSteps: n, views: r }) {
    const s = t ?? 24, i = F({
      hours: 1,
      minutes: 5,
      seconds: 5
    }, n), a = vL(i, s);
    return {
      thresholdToRenderTimeInASingleColumn: s,
      timeSteps: i,
      shouldRenderTimeInASingleColumn: a,
      views: yL(e, r, a)
    };
  }
  const ny = gt(function(e, n) {
    var _a2, _b, _c2, _d2;
    const r = pn(), s = xt(), i = ty(e, "MuiDesktopTimePicker"), { shouldRenderTimeInASingleColumn: a, views: l, timeSteps: c } = bL(i), d = a ? gL : ph, f = F({
      hours: d,
      minutes: d,
      seconds: d,
      meridiem: d
    }, i.viewRenderers), m = i.ampmInClock ?? true, g = a ? [] : [
      "accept"
    ], v = ((_a2 = f.hours) == null ? void 0 : _a2.name) === ph.name ? l : l.filter((_) => _ !== "meridiem"), S = F({}, i, {
      ampmInClock: m,
      timeSteps: c,
      viewRenderers: f,
      format: kg(s, i),
      views: a ? [
        "hours"
      ] : v,
      slots: F({
        field: qg,
        openPickerIcon: pO
      }, i.slots),
      slotProps: F({}, i.slotProps, {
        field: (_) => {
          var _a3;
          return F({}, Mh((_a3 = i.slotProps) == null ? void 0 : _a3.field, _), Hg(i), {
            ref: n
          });
        },
        toolbar: F({
          hidden: true,
          ampmInClock: m
        }, (_b = i.slotProps) == null ? void 0 : _b.toolbar),
        actionBar: F({
          actions: g
        }, (_c2 = i.slotProps) == null ? void 0 : _c2.actionBar)
      })
    }), { renderPicker: b } = qN({
      props: S,
      valueManager: Ar,
      valueType: "time",
      getOpenDialogAriaText: Sg({
        utils: s,
        formatKey: "fullTime",
        contextTranslation: r.openTimePickerDialogue,
        propsTranslation: (_d2 = S.localeText) == null ? void 0 : _d2.openTimePickerDialogue
      }),
      validator: Fo
    });
    return b();
  });
  ny.propTypes = {
    ampm: $.bool,
    ampmInClock: $.bool,
    autoFocus: $.bool,
    className: $.string,
    closeOnSelect: $.bool,
    defaultValue: $.object,
    disabled: $.bool,
    disableFuture: $.bool,
    disableIgnoringDatePartForTimeValidation: $.bool,
    disableOpenPicker: $.bool,
    disablePast: $.bool,
    enableAccessibleFieldDOMStructure: $.any,
    format: $.string,
    formatDensity: $.oneOf([
      "dense",
      "spacious"
    ]),
    inputRef: bg,
    label: $.node,
    localeText: $.object,
    maxTime: $.object,
    minTime: $.object,
    minutesStep: $.number,
    name: $.string,
    onAccept: $.func,
    onChange: $.func,
    onClose: $.func,
    onError: $.func,
    onOpen: $.func,
    onSelectedSectionsChange: $.func,
    onViewChange: $.func,
    open: $.bool,
    openTo: $.oneOf([
      "hours",
      "meridiem",
      "minutes",
      "seconds"
    ]),
    orientation: $.oneOf([
      "landscape",
      "portrait"
    ]),
    readOnly: $.bool,
    reduceAnimations: $.bool,
    referenceDate: $.object,
    selectedSections: $.oneOfType([
      $.oneOf([
        "all",
        "day",
        "empty",
        "hours",
        "meridiem",
        "minutes",
        "month",
        "seconds",
        "weekDay",
        "year"
      ]),
      $.number
    ]),
    shouldDisableTime: $.func,
    skipDisabled: $.bool,
    slotProps: $.object,
    slots: $.object,
    sx: $.oneOfType([
      $.arrayOf($.oneOfType([
        $.func,
        $.object,
        $.bool
      ])),
      $.func,
      $.object
    ]),
    thresholdToRenderTimeInASingleColumn: $.number,
    timeSteps: $.shape({
      hours: $.number,
      minutes: $.number,
      seconds: $.number
    }),
    timezone: $.string,
    value: $.object,
    view: $.oneOf([
      "hours",
      "meridiem",
      "minutes",
      "seconds"
    ]),
    viewRenderers: $.shape({
      hours: $.func,
      meridiem: $.func,
      minutes: $.func,
      seconds: $.func
    }),
    views: $.arrayOf($.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]).isRequired)
  };
  const ry = gt(function(e, n) {
    var _a2, _b;
    const r = pn(), s = xt(), i = ty(e, "MuiMobileTimePicker"), a = F({
      hours: Pl,
      minutes: Pl,
      seconds: Pl
    }, i.viewRenderers), l = i.ampmInClock ?? false, c = F({}, i, {
      ampmInClock: l,
      viewRenderers: a,
      format: kg(s, i),
      slots: F({
        field: qg
      }, i.slots),
      slotProps: F({}, i.slotProps, {
        field: (f) => {
          var _a3;
          return F({}, Mh((_a3 = i.slotProps) == null ? void 0 : _a3.field, f), Hg(i), {
            ref: n
          });
        },
        toolbar: F({
          hidden: false,
          ampmInClock: l
        }, (_a2 = i.slotProps) == null ? void 0 : _a2.toolbar)
      })
    }), { renderPicker: d } = eL({
      props: c,
      valueManager: Ar,
      valueType: "time",
      getOpenDialogAriaText: Sg({
        utils: s,
        formatKey: "fullTime",
        contextTranslation: r.openTimePickerDialogue,
        propsTranslation: (_b = c.localeText) == null ? void 0 : _b.openTimePickerDialogue
      }),
      validator: Fo
    });
    return d();
  });
  ry.propTypes = {
    ampm: $.bool,
    ampmInClock: $.bool,
    autoFocus: $.bool,
    className: $.string,
    closeOnSelect: $.bool,
    defaultValue: $.object,
    disabled: $.bool,
    disableFuture: $.bool,
    disableIgnoringDatePartForTimeValidation: $.bool,
    disableOpenPicker: $.bool,
    disablePast: $.bool,
    enableAccessibleFieldDOMStructure: $.any,
    format: $.string,
    formatDensity: $.oneOf([
      "dense",
      "spacious"
    ]),
    inputRef: bg,
    label: $.node,
    localeText: $.object,
    maxTime: $.object,
    minTime: $.object,
    minutesStep: $.number,
    name: $.string,
    onAccept: $.func,
    onChange: $.func,
    onClose: $.func,
    onError: $.func,
    onOpen: $.func,
    onSelectedSectionsChange: $.func,
    onViewChange: $.func,
    open: $.bool,
    openTo: $.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]),
    orientation: $.oneOf([
      "landscape",
      "portrait"
    ]),
    readOnly: $.bool,
    reduceAnimations: $.bool,
    referenceDate: $.object,
    selectedSections: $.oneOfType([
      $.oneOf([
        "all",
        "day",
        "empty",
        "hours",
        "meridiem",
        "minutes",
        "month",
        "seconds",
        "weekDay",
        "year"
      ]),
      $.number
    ]),
    shouldDisableTime: $.func,
    slotProps: $.object,
    slots: $.object,
    sx: $.oneOfType([
      $.arrayOf($.oneOfType([
        $.func,
        $.object,
        $.bool
      ])),
      $.func,
      $.object
    ]),
    timezone: $.string,
    value: $.object,
    view: $.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]),
    viewRenderers: $.shape({
      hours: $.func,
      minutes: $.func,
      seconds: $.func
    }),
    views: $.arrayOf($.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]).isRequired)
  };
  const wL = [
    "desktopModeMediaQuery"
  ], SL = gt(function(e, n) {
    const r = ct({
      props: e,
      name: "MuiTimePicker"
    }), { desktopModeMediaQuery: s = RI } = r, i = Ne(r, wL);
    return Th(s, {
      defaultMatches: true
    }) ? D.jsx(ny, F({
      ref: n
    }, i)) : D.jsx(ry, F({
      ref: n
    }, i));
  });
  var Cu = {
    exports: {}
  }, _L = Cu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(_L, (function() {
      var n = "week", r = "year";
      return function(s, i, a) {
        var l = i.prototype;
        l.week = function(c) {
          if (c === void 0 && (c = null), c !== null) return this.add(7 * (c - this.week()), "day");
          var d = this.$locale().yearStart || 1;
          if (this.month() === 11 && this.date() > 25) {
            var f = a(this).startOf(r).add(1, r).date(d), m = a(this).endOf(n);
            if (f.isBefore(m)) return 1;
          }
          var g = a(this).startOf(r).date(d).startOf(n).subtract(1, "millisecond"), y = this.diff(g, n, true);
          return y < 0 ? a(this).startOf("week").week() : Math.ceil(y);
        }, l.weeks = function(c) {
          return c === void 0 && (c = null), this.week(c);
        };
      };
    }));
  })(Cu);
  var DL = Cu.exports;
  const kL = Xr(DL);
  var Au = {
    exports: {}
  }, TL = Au.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(TL, (function() {
      var n = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d/, i = /\d\d/, a = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, c = {}, d = function(b) {
        return (b = +b) + (b > 68 ? 1900 : 2e3);
      }, f = function(b) {
        return function(_) {
          this[b] = +_;
        };
      }, m = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function(b) {
          (this.zone || (this.zone = {})).offset = (function(_) {
            if (!_ || _ === "Z") return 0;
            var E = _.match(/([+-]|\d\d)/g), R = 60 * E[1] + (+E[2] || 0);
            return R === 0 ? 0 : E[0] === "+" ? -R : R;
          })(b);
        }
      ], g = function(b) {
        var _ = c[b];
        return _ && (_.indexOf ? _ : _.s.concat(_.f));
      }, y = function(b, _) {
        var E, R = c.meridiem;
        if (R) {
          for (var T = 1; T <= 24; T += 1) if (b.indexOf(R(T, 0, _)) > -1) {
            E = T > 12;
            break;
          }
        } else E = b === (_ ? "pm" : "PM");
        return E;
      }, v = {
        A: [
          l,
          function(b) {
            this.afternoon = y(b, false);
          }
        ],
        a: [
          l,
          function(b) {
            this.afternoon = y(b, true);
          }
        ],
        Q: [
          s,
          function(b) {
            this.month = 3 * (b - 1) + 1;
          }
        ],
        S: [
          s,
          function(b) {
            this.milliseconds = 100 * +b;
          }
        ],
        SS: [
          i,
          function(b) {
            this.milliseconds = 10 * +b;
          }
        ],
        SSS: [
          /\d{3}/,
          function(b) {
            this.milliseconds = +b;
          }
        ],
        s: [
          a,
          f("seconds")
        ],
        ss: [
          a,
          f("seconds")
        ],
        m: [
          a,
          f("minutes")
        ],
        mm: [
          a,
          f("minutes")
        ],
        H: [
          a,
          f("hours")
        ],
        h: [
          a,
          f("hours")
        ],
        HH: [
          a,
          f("hours")
        ],
        hh: [
          a,
          f("hours")
        ],
        D: [
          a,
          f("day")
        ],
        DD: [
          i,
          f("day")
        ],
        Do: [
          l,
          function(b) {
            var _ = c.ordinal, E = b.match(/\d+/);
            if (this.day = E[0], _) for (var R = 1; R <= 31; R += 1) _(R).replace(/\[|\]/g, "") === b && (this.day = R);
          }
        ],
        w: [
          a,
          f("week")
        ],
        ww: [
          i,
          f("week")
        ],
        M: [
          a,
          f("month")
        ],
        MM: [
          i,
          f("month")
        ],
        MMM: [
          l,
          function(b) {
            var _ = g("months"), E = (g("monthsShort") || _.map((function(R) {
              return R.slice(0, 3);
            }))).indexOf(b) + 1;
            if (E < 1) throw new Error();
            this.month = E % 12 || E;
          }
        ],
        MMMM: [
          l,
          function(b) {
            var _ = g("months").indexOf(b) + 1;
            if (_ < 1) throw new Error();
            this.month = _ % 12 || _;
          }
        ],
        Y: [
          /[+-]?\d+/,
          f("year")
        ],
        YY: [
          i,
          function(b) {
            this.year = d(b);
          }
        ],
        YYYY: [
          /\d{4}/,
          f("year")
        ],
        Z: m,
        ZZ: m
      };
      function S(b) {
        var _, E;
        _ = b, E = c && c.formats;
        for (var R = (b = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(U, L, ee) {
          var Z = ee && ee.toUpperCase();
          return L || E[ee] || n[ee] || E[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(k, C, P) {
            return C || P.slice(1);
          }));
        }))).match(r), T = R.length, x = 0; x < T; x += 1) {
          var N = R[x], I = v[N], O = I && I[0], J = I && I[1];
          R[x] = J ? {
            regex: O,
            parser: J
          } : N.replace(/^\[|\]$/g, "");
        }
        return function(U) {
          for (var L = {}, ee = 0, Z = 0; ee < T; ee += 1) {
            var k = R[ee];
            if (typeof k == "string") Z += k.length;
            else {
              var C = k.regex, P = k.parser, W = U.slice(Z), Y = C.exec(W)[0];
              P.call(L, Y), U = U.replace(Y, "");
            }
          }
          return (function(te) {
            var j = te.afternoon;
            if (j !== void 0) {
              var z = te.hours;
              j ? z < 12 && (te.hours += 12) : z === 12 && (te.hours = 0), delete te.afternoon;
            }
          })(L), L;
        };
      }
      return function(b, _, E) {
        E.p.customParseFormat = true, b && b.parseTwoDigitYear && (d = b.parseTwoDigitYear);
        var R = _.prototype, T = R.parse;
        R.parse = function(x) {
          var N = x.date, I = x.utc, O = x.args;
          this.$u = I;
          var J = O[1];
          if (typeof J == "string") {
            var U = O[2] === true, L = O[3] === true, ee = U || L, Z = O[2];
            L && (Z = O[2]), c = this.$locale(), !U && Z && (c = E.Ls[Z]), this.$d = (function(W, Y, te, j) {
              try {
                if ([
                  "x",
                  "X"
                ].indexOf(Y) > -1) return new Date((Y === "X" ? 1e3 : 1) * W);
                var z = S(Y)(W), K = z.year, X = z.month, se = z.day, H = z.hours, re = z.minutes, ne = z.seconds, q = z.milliseconds, Q = z.zone, ce = z.week, fe = /* @__PURE__ */ new Date(), be = se || (K || X ? 1 : fe.getDate()), G = K || fe.getFullYear(), le = 0;
                K && !X || (le = X > 0 ? X - 1 : fe.getMonth());
                var he, ve = H || 0, oe = re || 0, Me = ne || 0, we = q || 0;
                return Q ? new Date(Date.UTC(G, le, be, ve, oe, Me, we + 60 * Q.offset * 1e3)) : te ? new Date(Date.UTC(G, le, be, ve, oe, Me, we)) : (he = new Date(G, le, be, ve, oe, Me, we), ce && (he = j(he).week(ce).toDate()), he);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(N, J, I, E), this.init(), Z && Z !== true && (this.$L = this.locale(Z).$L), ee && N != this.format(J) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
          } else if (J instanceof Array) for (var k = J.length, C = 1; C <= k; C += 1) {
            O[1] = J[C - 1];
            var P = E.apply(this, O);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            C === k && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else T.call(this, x);
        };
      };
    }));
  })(Au);
  var xL = Au.exports;
  const ML = Xr(xL);
  var Ru = {
    exports: {}
  }, EL = Ru.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(EL, (function() {
      var n = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      return function(r, s, i) {
        var a = s.prototype, l = a.format;
        i.en.formats = n, a.format = function(c) {
          c === void 0 && (c = "YYYY-MM-DDTHH:mm:ssZ");
          var d = this.$locale().formats, f = (function(m, g) {
            return m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(y, v, S) {
              var b = S && S.toUpperCase();
              return v || g[S] || n[S] || g[b].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(_, E, R) {
                return E || R.slice(1);
              }));
            }));
          })(c, d === void 0 ? {} : d);
          return l.call(this, f);
        };
      };
    }));
  })(Ru);
  var CL = Ru.exports;
  const AL = Xr(CL);
  var Ou = {
    exports: {}
  }, RL = Ou.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(RL, (function() {
      return function(n, r, s) {
        r.prototype.isBetween = function(i, a, l, c) {
          var d = s(i), f = s(a), m = (c = c || "()")[0] === "(", g = c[1] === ")";
          return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (g ? this.isBefore(f, l) : !this.isAfter(f, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (g ? this.isAfter(f, l) : !this.isBefore(f, l));
        };
      };
    }));
  })(Ou);
  var OL = Ou.exports;
  const IL = Xr(OL);
  var Iu = {
    exports: {}
  }, PL = Iu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(PL, (function() {
      return function(n, r) {
        var s = r.prototype, i = s.format;
        s.format = function(a) {
          var l = this, c = this.$locale();
          if (!this.isValid()) return i.bind(this)(a);
          var d = this.$utils(), f = (a || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, (function(m) {
            switch (m) {
              case "Q":
                return Math.ceil((l.$M + 1) / 3);
              case "Do":
                return c.ordinal(l.$D);
              case "gggg":
                return l.weekYear();
              case "GGGG":
                return l.isoWeekYear();
              case "wo":
                return c.ordinal(l.week(), "W");
              case "w":
              case "ww":
                return d.s(l.week(), m === "w" ? 1 : 2, "0");
              case "W":
              case "WW":
                return d.s(l.isoWeek(), m === "W" ? 1 : 2, "0");
              case "k":
              case "kk":
                return d.s(String(l.$H === 0 ? 24 : l.$H), m === "k" ? 1 : 2, "0");
              case "X":
                return Math.floor(l.$d.getTime() / 1e3);
              case "x":
                return l.$d.getTime();
              case "z":
                return "[" + l.offsetName() + "]";
              case "zzz":
                return "[" + l.offsetName("long") + "]";
              default:
                return m;
            }
          }));
          return i.bind(this)(f);
        };
      };
    }));
  })(Iu);
  var NL = Iu.exports;
  const LL = Xr(NL);
  vt.extend(AL);
  vt.extend(kL);
  vt.extend(IL);
  vt.extend(LL);
  const YL = {
    YY: "year",
    YYYY: {
      sectionType: "year",
      contentType: "digit",
      maxLength: 4
    },
    M: {
      sectionType: "month",
      contentType: "digit",
      maxLength: 2
    },
    MM: "month",
    MMM: {
      sectionType: "month",
      contentType: "letter"
    },
    MMMM: {
      sectionType: "month",
      contentType: "letter"
    },
    D: {
      sectionType: "day",
      contentType: "digit",
      maxLength: 2
    },
    DD: "day",
    Do: {
      sectionType: "day",
      contentType: "digit-with-letter"
    },
    d: {
      sectionType: "weekDay",
      contentType: "digit",
      maxLength: 2
    },
    dd: {
      sectionType: "weekDay",
      contentType: "letter"
    },
    ddd: {
      sectionType: "weekDay",
      contentType: "letter"
    },
    dddd: {
      sectionType: "weekDay",
      contentType: "letter"
    },
    A: "meridiem",
    a: "meridiem",
    H: {
      sectionType: "hours",
      contentType: "digit",
      maxLength: 2
    },
    HH: "hours",
    h: {
      sectionType: "hours",
      contentType: "digit",
      maxLength: 2
    },
    hh: "hours",
    m: {
      sectionType: "minutes",
      contentType: "digit",
      maxLength: 2
    },
    mm: "minutes",
    s: {
      sectionType: "seconds",
      contentType: "digit",
      maxLength: 2
    },
    ss: "seconds"
  }, FL = {
    year: "YYYY",
    month: "MMMM",
    monthShort: "MMM",
    dayOfMonth: "D",
    dayOfMonthFull: "Do",
    weekday: "dddd",
    weekdayShort: "dd",
    hours24h: "HH",
    hours12h: "hh",
    meridiem: "A",
    minutes: "mm",
    seconds: "ss",
    fullDate: "ll",
    keyboardDate: "L",
    shortDate: "MMM D",
    normalDate: "D MMMM",
    normalDateWithWeekday: "ddd, MMM D",
    fullTime: "LT",
    fullTime12h: "hh:mm A",
    fullTime24h: "HH:mm",
    keyboardDateTime: "L LT",
    keyboardDateTime12h: "L hh:mm A",
    keyboardDateTime24h: "L HH:mm"
  }, Nl = [
    "Missing UTC plugin",
    "To be able to use UTC or timezones, you have to enable the `utc` plugin",
    "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"
  ].join(`
`), gh = [
    "Missing timezone plugin",
    "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin",
    "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"
  ].join(`
`), HL = (t, e) => e ? (...n) => t(...n).locale(e) : t;
  class jL {
    constructor({ locale: e, formats: n } = {}) {
      this.isMUIAdapter = true, this.isTimezoneCompatible = true, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
        start: "[",
        end: "]"
      }, this.formatTokenMap = YL, this.setLocaleToValue = (r) => {
        const s = this.getCurrentLocaleCode();
        return s === r.locale() ? r : r.locale(s);
      }, this.hasUTCPlugin = () => typeof vt.utc < "u", this.hasTimezonePlugin = () => typeof vt.tz < "u", this.isSame = (r, s, i) => {
        const a = this.setTimezone(s, this.getTimezone(r));
        return r.format(i) === a.format(i);
      }, this.cleanTimezone = (r) => {
        switch (r) {
          case "default":
            return;
          case "system":
            return vt.tz.guess();
          default:
            return r;
        }
      }, this.createSystemDate = (r) => {
        if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
          const s = vt.tz.guess();
          return s !== "UTC" ? vt.tz(r, s) : vt(r);
        }
        return vt(r);
      }, this.createUTCDate = (r) => {
        if (!this.hasUTCPlugin()) throw new Error(Nl);
        return vt.utc(r);
      }, this.createTZDate = (r, s) => {
        if (!this.hasUTCPlugin()) throw new Error(Nl);
        if (!this.hasTimezonePlugin()) throw new Error(gh);
        const i = r !== void 0 && !r.endsWith("Z");
        return vt(r).tz(this.cleanTimezone(s), i);
      }, this.getLocaleFormats = () => {
        const r = vt.Ls, s = this.locale || "en";
        let i = r[s];
        return i === void 0 && (i = r.en), i.formats;
      }, this.adjustOffset = (r) => {
        if (!this.hasTimezonePlugin()) return r;
        const s = this.getTimezone(r);
        if (s !== "UTC") {
          const i = r.tz(this.cleanTimezone(s), true);
          if (i.$offset === (r.$offset ?? 0)) return r;
          r.$offset = i.$offset;
        }
        return r;
      }, this.date = (r, s = "default") => {
        if (r === null) return null;
        let i;
        return s === "UTC" ? i = this.createUTCDate(r) : s === "system" || s === "default" && !this.hasTimezonePlugin() ? i = this.createSystemDate(r) : i = this.createTZDate(r, s), this.locale === void 0 ? i : i.locale(this.locale);
      }, this.getInvalidDate = () => vt(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (r) => {
        var _a2;
        if (this.hasTimezonePlugin()) {
          const s = (_a2 = r.$x) == null ? void 0 : _a2.$timezone;
          if (s) return s;
        }
        return this.hasUTCPlugin() && r.isUTC() ? "UTC" : "system";
      }, this.setTimezone = (r, s) => {
        if (this.getTimezone(r) === s) return r;
        if (s === "UTC") {
          if (!this.hasUTCPlugin()) throw new Error(Nl);
          return r.utc();
        }
        if (s === "system") return r.local();
        if (!this.hasTimezonePlugin()) {
          if (s === "default") return r;
          throw new Error(gh);
        }
        return vt.tz(r, this.cleanTimezone(s));
      }, this.toJsDate = (r) => r.toDate(), this.parse = (r, s) => r === "" ? null : this.dayjs(r, s, this.locale, true), this.getCurrentLocaleCode = () => this.locale || "en", this.is12HourCycleInCurrentLocale = () => /A|a/.test(this.getLocaleFormats().LT || ""), this.expandFormat = (r) => {
        const s = this.getLocaleFormats(), i = (a) => a.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (l, c, d) => c || d.slice(1));
        return r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (a, l, c) => {
          const d = c && c.toUpperCase();
          return l || s[c] || i(s[d]);
        });
      }, this.isValid = (r) => r == null ? false : r.isValid(), this.format = (r, s) => this.formatByString(r, this.formats[s]), this.formatByString = (r, s) => this.dayjs(r).format(s), this.formatNumber = (r) => r, this.isEqual = (r, s) => r === null && s === null ? true : r === null || s === null ? false : r.toDate().getTime() === s.toDate().getTime(), this.isSameYear = (r, s) => this.isSame(r, s, "YYYY"), this.isSameMonth = (r, s) => this.isSame(r, s, "YYYY-MM"), this.isSameDay = (r, s) => this.isSame(r, s, "YYYY-MM-DD"), this.isSameHour = (r, s) => r.isSame(s, "hour"), this.isAfter = (r, s) => r > s, this.isAfterYear = (r, s) => this.hasUTCPlugin() ? !this.isSameYear(r, s) && r.utc() > s.utc() : r.isAfter(s, "year"), this.isAfterDay = (r, s) => this.hasUTCPlugin() ? !this.isSameDay(r, s) && r.utc() > s.utc() : r.isAfter(s, "day"), this.isBefore = (r, s) => r < s, this.isBeforeYear = (r, s) => this.hasUTCPlugin() ? !this.isSameYear(r, s) && r.utc() < s.utc() : r.isBefore(s, "year"), this.isBeforeDay = (r, s) => this.hasUTCPlugin() ? !this.isSameDay(r, s) && r.utc() < s.utc() : r.isBefore(s, "day"), this.isWithinRange = (r, [s, i]) => r >= s && r <= i, this.startOfYear = (r) => this.adjustOffset(r.startOf("year")), this.startOfMonth = (r) => this.adjustOffset(r.startOf("month")), this.startOfWeek = (r) => this.adjustOffset(this.setLocaleToValue(r).startOf("week")), this.startOfDay = (r) => this.adjustOffset(r.startOf("day")), this.endOfYear = (r) => this.adjustOffset(r.endOf("year")), this.endOfMonth = (r) => this.adjustOffset(r.endOf("month")), this.endOfWeek = (r) => this.adjustOffset(this.setLocaleToValue(r).endOf("week")), this.endOfDay = (r) => this.adjustOffset(r.endOf("day")), this.addYears = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "year") : r.add(s, "year")), this.addMonths = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "month") : r.add(s, "month")), this.addWeeks = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "week") : r.add(s, "week")), this.addDays = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "day") : r.add(s, "day")), this.addHours = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "hour") : r.add(s, "hour")), this.addMinutes = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "minute") : r.add(s, "minute")), this.addSeconds = (r, s) => this.adjustOffset(s < 0 ? r.subtract(Math.abs(s), "second") : r.add(s, "second")), this.getYear = (r) => r.year(), this.getMonth = (r) => r.month(), this.getDate = (r) => r.date(), this.getHours = (r) => r.hour(), this.getMinutes = (r) => r.minute(), this.getSeconds = (r) => r.second(), this.getMilliseconds = (r) => r.millisecond(), this.setYear = (r, s) => this.adjustOffset(r.set("year", s)), this.setMonth = (r, s) => this.adjustOffset(r.set("month", s)), this.setDate = (r, s) => this.adjustOffset(r.set("date", s)), this.setHours = (r, s) => this.adjustOffset(r.set("hour", s)), this.setMinutes = (r, s) => this.adjustOffset(r.set("minute", s)), this.setSeconds = (r, s) => this.adjustOffset(r.set("second", s)), this.setMilliseconds = (r, s) => this.adjustOffset(r.set("millisecond", s)), this.getDaysInMonth = (r) => r.daysInMonth(), this.getWeekArray = (r) => {
        const s = this.startOfWeek(this.startOfMonth(r)), i = this.endOfWeek(this.endOfMonth(r));
        let a = 0, l = s;
        const c = [];
        for (; l < i; ) {
          const d = Math.floor(a / 7);
          c[d] = c[d] || [], c[d].push(l), l = this.addDays(l, 1), a += 1;
        }
        return c;
      }, this.getWeekNumber = (r) => r.week(), this.getYearRange = ([r, s]) => {
        const i = this.startOfYear(r), a = this.endOfYear(s), l = [];
        let c = i;
        for (; this.isBefore(c, a); ) l.push(c), c = this.addYears(c, 1);
        return l;
      }, this.dayjs = HL(vt, e), this.locale = e, this.formats = F({}, FL, n), vt.extend(ML);
    }
    getDayOfWeek(e) {
      return e.day() + 1;
    }
  }
  const VL = {
    single: "single_description",
    double: "double_description",
    toggle: "toggle_description"
  }, Ie = {
    field: {
      padding: "2px 0px"
    },
    tableCell: {
      textAlign: "center"
    },
    typeDescription: {
      fontSize: 12,
      whiteSpace: "normal",
      fontStyle: "italic"
    },
    selectId: {
      display: "flex",
      alignItems: "center",
      gap: 8
    },
    timeType: {
      width: 150
    },
    narrowText: {
      width: 140,
      marginLeft: 8
    },
    width60: {
      width: 80,
      marginLeft: 16
    },
    narrowText2: {
      minWidth: 150,
      marginRight: 8
    },
    narrowColor: {
      width: 200
    },
    dayTable: {
      marginLeft: 20,
      display: "inline-block"
    },
    randomTime: {
      marginLeft: 16,
      width: 133
    },
    timeSelector: (t) => ({
      marginLeft: "16px",
      marginTop: "7.5px",
      width: 120,
      borderBottomColor: t.palette.mode === "dark" ? "#FFFFFFB2" : "#000000B2"
    }),
    days: (t) => ({
      backgroundColor: t.palette.mode === "dark" ? "#656565" : "#dadada"
    })
  }, WL = [
    "sunrise",
    "sunriseEnd",
    "goldenHourEnd",
    "solarNoon",
    "goldenHour",
    "sunsetStart",
    "sunset",
    "dusk",
    "nauticalDusk",
    "night",
    "nadir",
    "nightEnd",
    "nauticalDawn",
    "dawn"
  ];
  function UL(t, e) {
    return t && typeof t == "object" ? t[e] || t.en : t;
  }
  async function BL(t, e) {
    let n;
    typeof t == "string" ? n = await e.getObject(t) : n = t;
    let r = null;
    if (n && n.common && n.common.icon) r = wa.getObjectIcon(n);
    else if ((n == null ? void 0 : n.type) === "state") {
      let s = n._id.split(".");
      s.pop();
      let i = s.join(".");
      n = await e.getObject(i), n && n.common && n.common.icon ? r = wa.getObjectIcon(n) : (!n || n.type === "channel" || n.type === "device") && (s = i.split("."), s.pop(), i = s.join("."), n = await e.getObject(i), n && n.common && n.common.icon && (r = wa.getObjectIcon(n)));
    }
    return r;
  }
  const zL = (t) => {
    var _a2, _b, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u2, _v;
    const e = ((_b = (_a2 = t.event) == null ? void 0 : _a2.native) == null ? void 0 : _b.intervals) && t.event.native.intervals[0] && t.event.native.intervals[0].timeOffset ? t.event.native.intervals[0].timeOffset / 6e4 : 0, n = ((_d2 = (_c2 = t.event) == null ? void 0 : _c2.native) == null ? void 0 : _d2.intervals) && t.event.native.intervals[0] && t.event.native.intervals[0].value !== void 0 ? t.event.native.intervals[0].value : "", [r, s] = _t(false), [i, a] = _t(t.event), [l, c] = _t(null), [d, f] = _t(false), [m, g] = _t(e), [y, v] = _t(n), [S, b] = _t({});
    de.locale(t.language);
    const _ = _r((k) => {
      const C = JSON.parse(JSON.stringify(i));
      k(C), a(C);
    }, [
      i
    ]);
    Je(() => {
      var _a3, _b2, _c3;
      const k = /* @__PURE__ */ new Date();
      k.setHours(0), k.setMinutes(0), k.setSeconds(0), k.setMilliseconds(0);
      const C = Ma.getTimes(k, t.systemConfig.latitude, t.systemConfig.longitude);
      if (b(C), (_a3 = i.native) == null ? void 0 : _a3.oid) {
        if (!l || l._id !== ((_b2 = i.native) == null ? void 0 : _b2.oid)) try {
          t.socket.getObject((_c3 = i.native) == null ? void 0 : _c3.oid).then((P) => {
            var _a4;
            if (!P) {
              c(null);
              return;
            }
            const W = P;
            JSON.stringify((_a4 = i.native) == null ? void 0 : _a4.states) !== JSON.stringify(W.common.states) && _((Y) => Y.native.states = W.common.states), (l || t.event.native.oid !== i.native.oid) && BL(W, t.socket).then((Y) => _((te) => te.common.icon = Y || void 0)), c(W);
          });
        } catch (P) {
          console.error(`Cannot get object ${i.native.oid}: ${P}`), c(null);
        }
      } else c(null);
    }, [
      (_e2 = i.native) == null ? void 0 : _e2.oid,
      t.socket,
      _,
      (_f2 = i.native) == null ? void 0 : _f2.states,
      l,
      (_g2 = t.event) == null ? void 0 : _g2.native.oid,
      t.systemConfig.latitude,
      t.systemConfig.longitude
    ]);
    const E = ((_h2 = i.native) == null ? void 0 : _h2.cron) ? Ht(i.native.cron) : null;
    let R = "once", T = 29;
    if (Array.isArray(E == null ? void 0 : E.months)) {
      R = "monthly";
      const k = [
        4,
        6,
        9,
        11
      ], C = [
        1,
        3,
        5,
        7,
        8,
        10,
        12
      ];
      ((_i2 = E.months) == null ? void 0 : _i2.find((P) => C.includes(P))) ? T = 31 : ((_j = E.months) == null ? void 0 : _j.find((P) => k.includes(P))) && (T = 30);
    } else Array.isArray(E == null ? void 0 : E.dows) && (R = "daily");
    let x;
    i && (R === "once" ? x = pi((_k2 = i.native) == null ? void 0 : _k2.start, "date", t.serverTimeZone) : (R === "monthly" || R === "daily") && (x = pi((_l2 = i.native) == null ? void 0 : _l2.cron, "cron", t.serverTimeZone)));
    const N = JSON.stringify(t.event) !== JSON.stringify(i) || m !== e || y !== n, I = (k, C) => l ? l.common.type === "boolean" ? (typeof i.native[k] != "boolean" && setTimeout(() => _((P) => P.native[k] = !!P.native[k]), 100), D.jsx(ol, {
      style: Ie.narrowText2,
      control: D.jsx(Hn, {
        checked: !!i.native[k],
        disabled: t.readOnly,
        onChange: (P) => _((W) => W.native[k] = P.target.checked)
      }),
      label: D.jsxs("div", {
        children: [
          D.jsx("div", {
            children: t.t(C)
          }),
          D.jsx("div", {
            style: {
              fontSize: 10,
              fontStyle: "italic"
            },
            children: t.t("Checked means ON, unchecked means OFF")
          })
        ]
      })
    })) : l.common.states ? D.jsxs(cr, {
      style: Ie.narrowText2,
      variant: "standard",
      children: [
        D.jsx(ur, {
          children: t.t(C)
        }),
        D.jsx(Wn, {
          value: i.native[k] || "",
          disabled: t.readOnly,
          onChange: (P) => _((W) => W.native[k] = P.target.value),
          children: Object.keys(l.common.states).map((P) => D.jsx(Un, {
            value: P,
            children: l.common.states[P]
          }, P))
        })
      ]
    }) : D.jsx(us, {
      style: Ie.narrowText2,
      label: t.t(C),
      value: i.native[k] || "",
      disabled: t.readOnly,
      onChange: (P) => _((W) => W.native[k] = P.target.value),
      variant: "standard"
    }) : null, O = () => l ? l.common.type === "boolean" ? (typeof y != "boolean" && setTimeout(() => v(!!y), 100), D.jsx(ol, {
      style: Ie.narrowText2,
      control: D.jsx(Hn, {
        checked: !!y,
        disabled: t.readOnly,
        onChange: (k) => v(k.target.checked)
      }),
      label: D.jsxs("div", {
        children: [
          D.jsx("div", {
            children: t.t("End value")
          }),
          D.jsx("div", {
            style: {
              fontSize: 10,
              fontStyle: "italic"
            },
            children: t.t("Checked means ON, unchecked means OFF")
          })
        ]
      })
    })) : l.common.states ? D.jsxs(cr, {
      style: Ie.narrowText2,
      variant: "standard",
      children: [
        D.jsx(ur, {
          children: t.t("End value")
        }),
        D.jsx(Wn, {
          value: y || "",
          disabled: t.readOnly,
          onChange: (k) => v(k.target.value),
          children: Object.keys(l.common.states).map((k) => D.jsx(Un, {
            value: k,
            children: l.common.states[k]
          }, k))
        })
      ]
    }) : D.jsx(us, {
      label: t.t("End value"),
      value: y || "",
      disabled: t.readOnly,
      onChange: (k) => v(k.target.value),
      variant: "standard",
      style: Ie.narrowText2
    }) : null, J = ((_m2 = t.systemConfig) == null ? void 0 : _m2.firstDayOfWeek) === "monday" ? [
      1,
      2,
      3,
      4,
      5,
      6,
      0
    ] : [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ], U = ((_n2 = i.native) == null ? void 0 : _n2.astro) && S ? S[i.native.astro] : "", L = U ? U.toLocaleTimeString().replace(/:\d\d$/, "") : "";
    let ee = "";
    ((_o2 = i.native) == null ? void 0 : _o2.astro) && ((_p2 = i.native) == null ? void 0 : _p2.offset) && U && (ee = new Date(U.getTime() + i.native.offset * 6e4).toLocaleTimeString().replace(/:\d\d$/, ""));
    let Z = i == null ? void 0 : i.common.icon;
    return Z && !Z.startsWith("data:image") && !Z.startsWith("http") && !Z.startsWith("/") && (Z = `../../${Z}`), t.event ? D.jsxs(Zw, {
      open: true,
      onClose: t.onClose,
      fullWidth: true,
      children: [
        D.jsx(qw, {
          children: t.t("Configure event")
        }),
        D.jsxs(Qw, {
          children: [
            r && !t.readOnly ? D.jsx(Uw, {
              imagePrefix: "../..",
              theme: t.theme,
              selected: i.native.oid,
              onOk: (k) => {
                let C;
                !k || typeof k == "string" ? C = k || "" : C = k[0], _((P) => P.native.oid = C), s(false);
              },
              onClose: () => s(false),
              socket: t.socket
            }) : null,
            D.jsx("div", {
              style: Ie.field,
              children: D.jsx(ol, {
                control: D.jsx(Hn, {
                  checked: !!(i == null ? void 0 : i.common.enabled),
                  disabled: t.readOnly,
                  onChange: (k) => _((C) => C.common.enabled = k.target.checked)
                }),
                label: t.t("Active")
              })
            }),
            D.jsxs("div", {
              style: Ie.field,
              children: [
                D.jsxs(cr, {
                  style: {
                    ...Ie.timeType,
                    width: 180
                  },
                  variant: "standard",
                  children: [
                    D.jsx(ur, {
                      children: t.t("Time type")
                    }),
                    D.jsx(Wn, {
                      value: i.native.astro ? "astro" : "time",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (k) => _((C) => {
                        k.target.value === "astro" ? C.native.astro = "sunrise" : delete C.native.astro;
                      }),
                      renderValue: (k) => t.t(k),
                      children: [
                        "time",
                        "astro"
                      ].map((k) => D.jsx(Un, {
                        value: k,
                        children: D.jsx("div", {
                          children: t.t(k)
                        })
                      }, k))
                    })
                  ]
                }),
                i.native.astro ? D.jsxs(cr, {
                  style: {
                    ...Ie.narrowText,
                    width: 250
                  },
                  variant: "standard",
                  children: [
                    D.jsx(ur, {
                      children: t.t("Astronomic event")
                    }),
                    D.jsx(Wn, {
                      value: i.native.astro || "",
                      disabled: !!t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (k) => _((C) => C.native.astro = k.target.value),
                      renderValue: (k) => t.t(k),
                      children: WL.map((k) => D.jsx(Un, {
                        value: k,
                        children: D.jsxs("div", {
                          style: {
                            display: "flex",
                            width: "100%"
                          },
                          children: [
                            D.jsx("span", {
                              children: t.t(k)
                            }),
                            D.jsx("span", {
                              style: {
                                flexGrow: 1
                              }
                            }),
                            D.jsxs("span", {
                              children: [
                                " ",
                                "- [",
                                S && S[k] ? S[k].toLocaleTimeString().replace(/:\d\d$/, "") : "??:??",
                                "]"
                              ]
                            })
                          ]
                        })
                      }, k))
                    })
                  ]
                }) : D.jsx(wg, {
                  dateAdapter: jL,
                  children: D.jsx(SL, {
                    sx: (k) => ({
                      borderBottom: `1px solid ${k.palette.text.primary}`,
                      "& fieldset": {
                        display: "none"
                      },
                      "& input": {
                        padding: `${k.spacing(1.5)} 0 4px 0`
                      },
                      "& .MuiInputAdornment-root": {
                        marginLeft: 0,
                        marginTop: 1
                      },
                      "& label": {
                        transform: "translate(0px, -9px) scale(0.75)"
                      },
                      "&.MuiFormControl-root": Ie.timeSelector
                    }),
                    label: t.t("Time"),
                    value: x ? vt(x) : null,
                    disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                    onChange: (k) => {
                      if (k) try {
                        _((C) => {
                          if (R === "once") C.native.start = rn(k.toDate(), "date", t.serverTimeZone);
                          else if (R === "monthly" || R === "daily") {
                            const P = Ht(C.native.cron), W = rn(k.toDate(), "cron", t.serverTimeZone);
                            P.hours = W.hours, P.minutes = W.minutes, C.native.cron = tn(P);
                          }
                        });
                      } catch {
                      }
                    },
                    ampm: false
                  })
                }),
                i.native.astro ? D.jsxs(cr, {
                  variant: "standard",
                  style: {
                    ...Ie.width60,
                    width: 95
                  },
                  children: [
                    D.jsx(ur, {
                      children: t.t("Offset")
                    }),
                    D.jsx(Wn, {
                      value: i.native.offset || 0,
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (k) => _((C) => C.native.offset = k.target.value),
                      children: [
                        {
                          label: "none",
                          value: 0
                        },
                        {
                          label: "5 min",
                          value: 5
                        },
                        {
                          label: "10 min",
                          value: 10
                        },
                        {
                          label: "15 min",
                          value: 15
                        },
                        {
                          label: "20 min",
                          value: 20
                        },
                        {
                          label: "30 min",
                          value: 30
                        },
                        {
                          label: "45 min",
                          value: 45
                        },
                        {
                          label: "1 hour",
                          value: 60
                        },
                        {
                          label: "1.5 hours",
                          value: 90
                        },
                        {
                          label: "2 hours",
                          value: 120
                        },
                        {
                          label: "2.5 hours",
                          value: 150
                        },
                        {
                          label: "3 hours",
                          value: 180
                        },
                        {
                          label: "4 hours",
                          value: 240
                        },
                        {
                          label: "5 min",
                          value: -5
                        },
                        {
                          label: "10 min",
                          value: -10
                        },
                        {
                          label: "15 min",
                          value: -15
                        },
                        {
                          label: "20 min",
                          value: -20
                        },
                        {
                          label: "30 min",
                          value: -30
                        },
                        {
                          label: "45 min",
                          value: -45
                        },
                        {
                          label: "1 hour",
                          value: -60
                        },
                        {
                          label: "1.5 hours",
                          value: -90
                        },
                        {
                          label: "2 hours",
                          value: -120
                        },
                        {
                          label: "2.5 hours",
                          value: -150
                        },
                        {
                          label: "3 hours",
                          value: -180
                        },
                        {
                          label: "4 hours",
                          value: -240
                        }
                      ].map((k) => D.jsx(Un, {
                        value: k.value,
                        children: k.value < 0 ? `- ${t.t(k.label)}` : t.t(k.label)
                      }, k.value))
                    })
                  ]
                }) : null,
                t.isSimulation && D.jsx(us, {
                  style: Ie.randomTime,
                  label: t.t("Time random offset"),
                  value: i.native.timeRandomOffset || 0,
                  disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                  onChange: (k) => _((C) => C.native.timeRandomOffset = parseInt(k.target.value)),
                  variant: "standard",
                  slotProps: {
                    input: {
                      endAdornment: D.jsx(Dd, {
                        position: "end",
                        children: t.t("ms")
                      })
                    }
                  }
                })
              ]
            }),
            i.native.astro ? D.jsxs("div", {
              style: Ie.field,
              children: [
                t.t("Today %s is at %s.", t.t(i.native.astro), L),
                "\xA0",
                i.native.offset ? t.t("With offset at %s.", ee) : null
              ]
            }) : null,
            D.jsxs("div", {
              style: Ie.field,
              children: [
                !t.isSimulation && D.jsxs(cr, {
                  variant: "standard",
                  style: Ie.narrowText2,
                  children: [
                    D.jsx(ur, {
                      children: t.t("Event type")
                    }),
                    D.jsx(Wn, {
                      value: i.native.type || "",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (k) => _((C) => {
                        C.native.type && C.common.name === t.t(C.native.type) && (C.common.name = t.t(k.target.value)), C.native.type = k.target.value;
                      }),
                      renderValue: (k) => t.t(k),
                      children: [
                        "single",
                        "double",
                        "toggle"
                      ].map((k) => D.jsx(Un, {
                        value: k,
                        children: D.jsxs("div", {
                          children: [
                            D.jsx("div", {
                              children: t.t(k)
                            }),
                            D.jsx("div", {
                              style: Ie.typeDescription,
                              children: t.t(VL[k])
                            })
                          ]
                        })
                      }, k))
                    })
                  ]
                }),
                i.native.type !== "single" && D.jsx(us, {
                  label: t.t("Duration"),
                  value: m,
                  disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                  onChange: (k) => g(k.target.value),
                  variant: "standard",
                  style: Ie.narrowText,
                  slotProps: {
                    input: {
                      endAdornment: D.jsx(Dd, {
                        position: "end",
                        children: t.t("minutes")
                      })
                    }
                  }
                })
              ]
            }),
            D.jsx("div", {
              style: Ie.field,
              children: D.jsxs("div", {
                style: Ie.selectId,
                children: [
                  D.jsx(Bw, {
                    src: Z || "",
                    style: {
                      width: 32,
                      height: 32
                    }
                  }),
                  D.jsx(us, {
                    label: t.t("Object ID"),
                    value: i.native.oid || "",
                    disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                    onChange: (k) => _((C) => C.native.oid = k.target.value),
                    variant: "standard",
                    helperText: UL((l == null ? void 0 : l.common.name) || "", t.language),
                    fullWidth: true
                  }),
                  D.jsx(la, {
                    disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                    onClick: () => s(true),
                    children: "..."
                  })
                ]
              })
            }),
            D.jsxs("div", {
              style: Ie.field,
              children: [
                I("startValue", i.native.type === "toggle" ? "First value" : i.native.type === "single" ? "Desired value" : "Start value"),
                i.native.type === "double" && O()
              ]
            }),
            D.jsxs("div", {
              style: Ie.field,
              children: [
                !t.isSimulation && D.jsxs(cr, {
                  variant: "standard",
                  children: [
                    D.jsx(ur, {
                      children: t.t("Period")
                    }),
                    D.jsx(Wn, {
                      value: R || "once",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (k) => {
                        k.target.value !== i.native.cron && _((C) => {
                          if (k.target.value === "once") delete C.native.cron, C.native.start = rn(x, "date", t.serverTimeZone);
                          else if (k.target.value === "daily") {
                            delete C.native.start;
                            const P = Ht("0 0 ? * 0-6"), W = rn(x, "cron", t.serverTimeZone);
                            P.hours = W.hours, P.minutes = W.minutes, C.native.cron = tn(P);
                          } else if (k.target.value === "monthly") {
                            const P = C.native.start;
                            let W;
                            P ? (W = Ht(`0 0 ${new Date(P).getDate()} ${new Date(P).getMonth() + 1} *`), delete C.native.start) : W = Ht("0 0 1-31 1-12 *");
                            const Y = rn(x, "cron", t.serverTimeZone);
                            W.hours = Y.hours, W.minutes = Y.minutes, C.native.cron = tn(W);
                          }
                        });
                      },
                      children: [
                        "once",
                        "daily",
                        "monthly"
                      ].map((k) => D.jsx(Un, {
                        value: k,
                        children: t.t(k)
                      }, k))
                    })
                  ]
                }),
                R === "daily" && (!t.isSimulation || ((_q = t.simulation) == null ? void 0 : _q.native.interval) === "week") && D.jsxs("table", {
                  style: {
                    ...Ie.dayTable,
                    marginLeft: t.isSimulation ? 0 : void 0
                  },
                  children: [
                    D.jsx("thead", {
                      children: D.jsx("tr", {
                        children: J.map((k) => D.jsx("td", {
                          style: Ie.tableCell,
                          children: de().day(k).format("ddd")
                        }, k))
                      })
                    }),
                    D.jsx("tbody", {
                      children: D.jsx("tr", {
                        children: J.map((k) => {
                          var _a3;
                          return D.jsx("td", {
                            children: D.jsx(Hn, {
                              "aria-label": "day",
                              checked: ((_a3 = E == null ? void 0 : E.dows) == null ? void 0 : _a3.includes(k)) || false,
                              disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                              onChange: (C) => _((P) => {
                                const W = Ht(P.native.cron);
                                C.target.checked ? W.dows.push(k) : W.dows = W.dows.filter((Y) => Y !== k), P.native.cron = tn(W);
                              }),
                              size: "small"
                            })
                          }, k);
                        })
                      })
                    })
                  ]
                })
              ]
            }),
            R === "monthly" && D.jsxs("div", {
              style: Ie.field,
              children: [
                D.jsxs("table", {
                  children: [
                    D.jsx("thead", {
                      children: D.jsx("tr", {
                        children: new Array(12).fill(null).map((k, C) => D.jsx("td", {
                          style: Ie.tableCell,
                          children: de().month(C).format("MMM")
                        }, C))
                      })
                    }),
                    D.jsx("tbody", {
                      children: D.jsx("tr", {
                        children: new Array(12).fill(null).map((k, C) => {
                          var _a3;
                          return D.jsx("td", {
                            children: D.jsx(Hn, {
                              "aria-label": "month",
                              checked: ((_a3 = E == null ? void 0 : E.months) == null ? void 0 : _a3.includes(C + 1)) || false,
                              disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                              onChange: (P) => _((W) => {
                                const Y = Ht(W.native.cron);
                                P.target.checked ? Y.months.push(C + 1) : (Y.months = Y.months.filter((te) => te !== C + 1), Y.months.length || (Y.months = [
                                  1
                                ])), W.native.cron = tn(Y);
                              }),
                              size: "small"
                            })
                          }, C);
                        })
                      })
                    })
                  ]
                }),
                D.jsxs("table", {
                  children: [
                    D.jsx("thead", {
                      children: D.jsx(ds, {
                        component: "tr",
                        sx: Ie.days,
                        children: new Array(12).fill(null).map((k, C) => D.jsx("td", {
                          style: Ie.tableCell,
                          children: C + 1
                        }, C))
                      })
                    }),
                    D.jsxs("tbody", {
                      children: [
                        D.jsx(ds, {
                          component: "tr",
                          sx: Ie.days,
                          children: new Array(12).fill(null).map((k, C) => {
                            var _a3;
                            return D.jsx("td", {
                              children: D.jsx(Hn, {
                                "aria-label": "day",
                                checked: ((_a3 = E == null ? void 0 : E.dates) == null ? void 0 : _a3.includes(C + 1)) || false,
                                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                onChange: (P) => _((W) => {
                                  const Y = Ht(W.native.cron);
                                  P.target.checked ? (Y.dates.push(C + 1), Y.dates = Y.dates.filter((te) => te)) : (Y.dates = Y.dates.filter((te) => te !== C + 1), Y.dates.length || (Y.dates = [
                                    1
                                  ])), W.native.cron = tn(Y);
                                }),
                                size: "small"
                              })
                            }, C);
                          })
                        }),
                        D.jsx(ds, {
                          component: "tr",
                          sx: Ie.days,
                          children: new Array(12).fill(null).map((k, C) => D.jsx("td", {
                            style: Ie.tableCell,
                            children: C + 13
                          }, C))
                        }),
                        D.jsx(ds, {
                          component: "tr",
                          sx: Ie.days,
                          children: new Array(12).fill(null).map((k, C) => {
                            var _a3;
                            return D.jsx("td", {
                              children: D.jsx(Hn, {
                                "aria-label": "day",
                                checked: ((_a3 = E == null ? void 0 : E.dates) == null ? void 0 : _a3.includes(C + 13)) || false,
                                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                onChange: (P) => {
                                  _((W) => {
                                    const Y = Ht(W.native.cron);
                                    P.target.checked ? (Y.dates.push(C + 13), Y.dates = Y.dates.filter((te) => te)) : (Y.dates = Y.dates.filter((te) => te !== C + 13), Y.dates.length || (Y.dates = [
                                      1
                                    ])), W.native.cron = tn(Y);
                                  });
                                },
                                size: "small"
                              })
                            }, C);
                          })
                        }),
                        D.jsxs(ds, {
                          component: "tr",
                          sx: Ie.days,
                          children: [
                            new Array(11).fill(null).map((k, C) => D.jsx("td", {
                              style: Ie.tableCell,
                              children: T < C + 25 ? null : C + 25
                            }, C)),
                            D.jsx("td", {
                              style: Ie.tableCell,
                              children: t.t("All")
                            })
                          ]
                        }),
                        D.jsxs(ds, {
                          component: "tr",
                          sx: Ie.days,
                          children: [
                            new Array(11).fill(null).map((k, C) => {
                              var _a3;
                              return D.jsx("td", {
                                children: T < C + 25 ? null : D.jsx(Hn, {
                                  "aria-label": "day",
                                  checked: ((_a3 = E == null ? void 0 : E.dates) == null ? void 0 : _a3.includes(C + 25)) || false,
                                  disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                  onChange: (P) => _((W) => {
                                    const Y = Ht(W.native.cron);
                                    P.target.checked ? (Y.dates.push(C + 25), Y.dates = Y.dates.filter((te) => te)) : (Y.dates = Y.dates.filter((te) => te !== C + 25), Y.dates.length || (Y.dates = [
                                      1
                                    ])), W.native.cron = tn(Y);
                                  }),
                                  size: "small"
                                })
                              }, C);
                            }),
                            D.jsx("td", {
                              children: D.jsx(Hn, {
                                "aria-label": "all",
                                checked: ((_r2 = E == null ? void 0 : E.dates) == null ? void 0 : _r2.length) === T,
                                indeterminate: ((_s2 = E == null ? void 0 : E.dates) == null ? void 0 : _s2.length) !== T && !((_t2 = E == null ? void 0 : E.dates) == null ? void 0 : _t2.includes(0)),
                                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                onChange: () => _((k) => {
                                  var _a3;
                                  const C = Ht(k.native.cron);
                                  if (((_a3 = C == null ? void 0 : C.dates) == null ? void 0 : _a3.length) !== T) {
                                    C.dates = [];
                                    for (let P = 0; P < T; P++) C.dates.push(P + 1);
                                  } else C.dates = [
                                    1
                                  ];
                                  k.native.cron = tn(C);
                                }),
                                size: "small"
                              })
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            D.jsx("div", {
              style: Ie.field,
              children: D.jsx(us, {
                label: t.t("Description"),
                value: (i == null ? void 0 : i.common.name) || "",
                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                onChange: (k) => _((C) => C.common.name = k.target.value),
                variant: "standard",
                fullWidth: true
              })
            }),
            D.jsx("div", {
              style: Ie.narrowColor,
              children: D.jsx(zw, {
                value: i.common.color || i.native.color || "",
                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                onChange: (k) => _((C) => C.common.color = k),
                name: t.t("Color")
              })
            })
          ]
        }),
        D.jsxs(Xw, {
          children: [
            t.readOnly ? null : D.jsx(la, {
              variant: "contained",
              color: "secondary",
              startIcon: D.jsx(Kw, {}),
              onClick: () => f(true),
              children: t.t("Delete")
            }),
            !t.readOnly && !t.widget ? D.jsx("div", {
              style: {
                flex: 1
              }
            }) : null,
            t.readOnly ? null : D.jsx(la, {
              variant: "contained",
              color: "primary",
              disabled: !N || R === "monthly" && (!((_u2 = E == null ? void 0 : E.dates) == null ? void 0 : _u2.length) || E.dates.includes(0) || !((_v = E == null ? void 0 : E.months) == null ? void 0 : _v.length)),
              startIcon: D.jsx(eS, {}),
              onClick: async () => {
                i.native.type === "single" ? i.native.intervals && delete i.native.intervals : i.native.type === "double" ? (i.native.intervals = i.native.intervals || [], i.native.intervals[0] = i.native.intervals[0] || {}, i.native.intervals[0].timeOffset = (parseFloat(m) || 1) * 6e4, i.native.intervals[0].value = y) : i.native.type === "toggle" && (i.native.intervals = i.native.intervals || [], i.native.intervals[0] = i.native.intervals[0] || {}, i.native.intervals[0].timeOffset = (parseFloat(m) || 1) * 6e4), await t.setEvent(i._id, i), t.updateEvents(), t.onClose();
              },
              children: t.t("Save")
            }),
            D.jsx(la, {
              variant: "contained",
              color: "grey",
              startIcon: D.jsx(tS, {}),
              onClick: t.onClose,
              children: t.readOnly || !N ? t.t("ra_Close") : t.t("ra_Cancel")
            })
          ]
        }),
        d && D.jsx($w, {
          fullWidth: false,
          title: t.t("Delete event"),
          text: t.t("Event will be deleted. Confirm?"),
          suppressQuestionMinutes: 5,
          dialogName: "deleteConfirmDialog",
          ok: t.t("Delete"),
          onClose: (k) => {
            if (k) {
              try {
                t.deleteEvent(i._id), t.updateEvents();
              } catch (C) {
                window.alert(`Cannot delete event: ${C}`);
              }
              t.onClose();
            }
            f(false);
          }
        })
      ]
    }) : null;
  }, $L = [
    {
      type: "single",
      name: "Single event"
    },
    {
      type: "double",
      name: "Double event"
    },
    {
      type: "toggle",
      name: "Toggle event"
    }
  ], GL = [
    1,
    2,
    3,
    5,
    10,
    15,
    20,
    30,
    60
  ], ZL = ({ type: t, t: e, color: n }) => {
    const r = Oe(null);
    return Je(() => {
      const s = new cM(r.current, {
        eventData: () => ({
          id: t.type,
          title: e(t.name),
          create: true,
          extendedProps: {
            type: t.type
          }
        })
      });
      return () => {
        s.destroy();
      };
    }, []), D.jsx("div", {
      style: {
        backgroundColor: n || "rgb(58, 135, 178)",
        color: "white",
        cursor: "pointer",
        fontSize: "14px",
        padding: "3px 4px 6px 8px",
        borderRadius: 4,
        marginBottom: 20
      },
      ref: r,
      children: e(t.name)
    });
  }, vn = {
    container: {
      display: "flex",
      width: "100%",
      flex: 1
    },
    leftBlock: {
      width: 200
    },
    calendarBlock: {
      flex: 1,
      display: "flex"
    },
    calendar: {
      marginRight: 20,
      width: "100%"
    },
    leftPaper: {
      margin: 20
    },
    leftContent: {
      display: "flex",
      flexDirection: "column",
      padding: "20px 10px"
    },
    hr: {
      width: "100%"
    },
    leftMargin: {
      marginLeft: 4
    }
  };
  function yh(t) {
    if (t) return t.startsWith("#") ? t.length === 4 ? `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}50` : `${t.substring(0, 7)}50` : t.startsWith("rgb(") ? t.replace("rgb(", "rgba(").replace(")", ", 0.3)") : t.startsWith("rgba(") ? t.replace(/,\s?[.\d]+\)$/, ", 0.3)") : t;
  }
  function qL(t) {
    const e = t.getBoundingClientRect(), n = t.getElementsByClassName("fc-timegrid-slot");
    for (let r = 0; r < n.length; r++) if (n[r].getBoundingClientRect().top > e.top + 100) return n[r].dataset.time || null;
    return null;
  }
  function QL(t) {
    return t.date.second ? `${t.date.hour}:${t.date.minute.toString().padStart(2, "0")}:${t.date.second.toString().padStart(2, "0")}` : `${t.date.hour}:${t.date.minute.toString().padStart(2, "0")}`;
  }
  function XL(t) {
    var _a2, _b, _c2;
    const [e, n] = _t(null), [r, s] = _t(t.dayStep || parseInt(window.localStorage.getItem("calendarStep"), 10) || 30), i = t.storageName || "calendar", a = Oe(null), l = Oe(null), c = Oe(null), d = Oe(null), f = Oe(null), [m, g] = _t({
      start: null,
      end: null
    });
    let y = (!t.widget && window.localStorage.getItem(`${i}Start`), /* @__PURE__ */ new Date()), v = t.viewMode || window.localStorage.getItem(`${i}View`) || "dayGridMonth";
    t.isSimulation && (y = /* @__PURE__ */ new Date(), v = ((_a2 = t.simulation) == null ? void 0 : _a2.native.interval) === "day" ? "timeGridDay" : "timeGridWeek");
    let S = $L;
    t.isSimulation && (S = S.filter((T) => T.type === "single"));
    const b = Re(() => {
      const T = [];
      return t.events.forEach((x) => {
        var _a3, _b2, _c3, _d2, _e2, _f2, _g2;
        if (!x) return;
        const N = ((_a3 = x.native) == null ? void 0 : _a3.intervals) && x.native.intervals[0] && x.native.intervals[0].timeOffset ? x.native.intervals[0].timeOffset : 30;
        x.common.color = x.common.color || "#3a87b2";
        const I = x.common.enabled ? x.common.color : yh(x.common.color);
        let O = wa.invertColor(x.common.color, true);
        x.common.enabled || (O = yh(O));
        let J = x.common.name;
        if (x.native.oid) {
          let U = x.native.startValue;
          typeof U == "boolean" ? U = U ? wn.t("ON") : wn.t("OFF") : x.native.states && x.native.states[U] && (U = x.native.states[U]);
          let L = (_c3 = (_b2 = x.native.intervals) == null ? void 0 : _b2[0]) == null ? void 0 : _c3.value;
          typeof L == "boolean" ? L = L ? wn.t("ON") : wn.t("OFF") : x.native.states && x.native.states[L] && (L = x.native.states[L]), J = `${x.common.name} \u2192 ${U}`, x.native.type === "double" && (J += ` \u2192 ${(((_e2 = (_d2 = x.native.intervals) == null ? void 0 : _d2[0]) == null ? void 0 : _e2.timeOffset) || 0) / 1e3 / 60} ${wn.t("min")}. \u2192 ${L}`), x.native.type === "toggle" && (J += ` \u2192 ${(((_g2 = (_f2 = x.native.intervals) == null ? void 0 : _f2[0]) == null ? void 0 : _g2.timeOffset) || 0) / 1e3 / 60} ${wn.t("min")}. \u2192 ${wn.t("initial")}`);
        }
        if (x.native.cron) {
          const U = pi(x.native.cron, "cron", t.serverTimeZone), L = Ht(x.native.cron);
          U.setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 1), Array.isArray(L.months) ? new ke({
            dtstart: U,
            until: m.end || /* @__PURE__ */ new Date(),
            freq: ke.MONTHLY,
            bymonth: L.months,
            bymonthday: Array.isArray(L.dates) ? L.dates : void 0
          }).between(m.start || /* @__PURE__ */ new Date(), m.end || /* @__PURE__ */ new Date()).forEach((Z) => {
            const k = x.native.astro ? Ma.getTimes(Z, t.systemConfig.latitude, t.systemConfig.longitude)[x.native.astro] : Z;
            x.native.astro && x.native.offset && k.setMinutes(k.getMinutes() + x.native.offset), T.push({
              extendedProps: {
                eventId: x._id,
                icon: x.common.icon,
                type: x.native.type,
                seconds: k.getSeconds()
              },
              title: J,
              backgroundColor: I,
              textColor: O,
              start: k,
              allDay: false,
              display: "block"
            });
          }) : Array.isArray(L.dows) ? new ke({
            dtstart: U,
            until: m.end || /* @__PURE__ */ new Date(),
            freq: ke.WEEKLY,
            byweekday: L.dows.map((Z) => Z === 0 ? 6 : Z - 1)
          }).between(m.start || /* @__PURE__ */ new Date(), m.end || /* @__PURE__ */ new Date()).forEach((Z) => {
            const k = x.native.astro ? Ma.getTimes(Z, t.systemConfig.latitude, t.systemConfig.longitude)[x.native.astro] : Z;
            x.native.astro && x.native.offset && k.setMinutes(k.getMinutes() + x.native.offset), T.push({
              extendedProps: {
                eventId: x._id,
                icon: x.common.icon,
                type: x.native.type,
                seconds: k.getSeconds()
              },
              title: J,
              backgroundColor: I,
              textColor: O,
              start: k,
              allDay: false,
              display: "block"
            });
          }) : T.push({
            extendedProps: {
              eventId: x._id,
              icon: x.common.icon,
              type: x.native.type,
              seconds: 0
            },
            title: J,
            backgroundColor: I,
            textColor: O
          });
        } else {
          const U = x.native.astro ? Ma.getTimes(/* @__PURE__ */ new Date(), t.systemConfig.latitude, t.systemConfig.longitude)[x.native.astro] : x.native.start;
          x.native.astro && x.native.offset && U.setMinutes(U.getMinutes() + x.native.offset), T.push({
            extendedProps: {
              eventId: x._id,
              icon: x.common.icon,
              type: x.native.type,
              seconds: 0
            },
            title: J,
            display: "block",
            backgroundColor: I,
            textColor: O,
            start: pi(U, "date", t.serverTimeZone) || void 0,
            end: pi(new Date(new Date(U).getTime() + N), "date", t.serverTimeZone) || void 0
          });
        }
      }), T;
    }, [
      t.events,
      t.serverTimeZone,
      t.systemConfig.latitude,
      t.systemConfig.longitude,
      m.end,
      m.start
    ]);
    if (Je(() => {
      if (t.widget) {
        const T = () => {
          var _a3;
          const x = (_a3 = a.current) == null ? void 0 : _a3.getApi();
          x && (console.log("Scroll to now"), x.scrollToTime((/* @__PURE__ */ new Date()).getTime())), c.current ? d.current = null : d.current = setTimeout(() => T, 3e5);
        };
        setTimeout(T, 1e3);
      }
      return () => {
        d.current && clearTimeout(d.current), d.current = null, c.current && clearTimeout(c.current), c.current = null;
      };
    }, []), Je(() => {
      f.current = null, setTimeout(() => {
        var _a3;
        const T = /* @__PURE__ */ new Date();
        (_a3 = a.current) == null ? void 0 : _a3.getApi().scrollToTime(`${T.getHours().toString().padStart(2, "0")}:${(r > T.getMinutes() ? 0 : T.getMinutes() - r).toString().padStart(2, "0")}:00`);
      }, 300);
    }, [
      t.calendarPrefix,
      t.simulationId,
      r
    ]), Je(() => {
      var _a3, _b2, _c3;
      t.isSimulation && ((_c3 = (_a3 = a.current) == null ? void 0 : _a3.getApi()) == null ? void 0 : _c3.changeView(((_b2 = t.simulation) == null ? void 0 : _b2.native.interval) === "day" ? "timeGridDay" : "timeGridWeek", /* @__PURE__ */ new Date()));
    }, [
      t.isSimulation,
      (_b = t.simulation) == null ? void 0 : _b.native.interval
    ]), t.isSimulation && !t.simulation) return null;
    const _ = f.current ? void 0 : /* @__PURE__ */ new Date(), E = _ ? `${_.getHours().toString().padStart(2, "0")}:${(r > _.getMinutes() ? 0 : _.getMinutes() - r).toString().padStart(2, "0")}:00` : void 0;
    console.log(`SCROLL TIME: ${E}`);
    const R = (_c2 = a.current) == null ? void 0 : _c2.getApi().view.type;
    return D.jsxs(D.Fragment, {
      children: [
        D.jsx("style", {
          children: t.theme.palette.mode === "dark" ? `
:root {
    --fc-neutral-bg-color: hsla(0,0%,12%);
    --fc-list-event-hover-bg-color: hsla(0,0%,12%);
}
.fc-col-header-cell {
    background-color: #1e1e1e;
}
` : `
.fc-col-header-cell {
    background-color: #EEEEEE;
}
`
        }),
        e ? D.jsx(zL, {
          systemConfig: t.systemConfig,
          widget: t.widget,
          event: t.events.find((T) => (T == null ? void 0 : T._id) === e),
          onClose: () => {
            n(null);
            const T = f.current ? new Date(f.current) : /* @__PURE__ */ new Date(), x = `${T.getHours().toString().padStart(2, "0")}:${(r > T.getMinutes() ? 0 : T.getMinutes() - r).toString().padStart(2, "0")}:00`;
            setTimeout(() => {
              var _a3;
              return (_a3 = a.current) == null ? void 0 : _a3.getApi().scrollToTime(x);
            }, 200);
          },
          socket: t.socket,
          updateEvents: t.updateEvents,
          setEvent: t.setEvent,
          deleteEvent: (T) => {
            n(null), t.deleteEvent(T);
          },
          serverTimeZone: t.serverTimeZone,
          readOnly: t.readOnly,
          t: t.t,
          theme: t.theme,
          language: t.language,
          isSimulation: t.isSimulation,
          simulationId: t.simulationId,
          simulation: t.simulation
        }) : null,
        D.jsxs("div", {
          style: vn.container,
          children: [
            !t.hideLeftBlock && !t.readOnly && D.jsxs("div", {
              style: vn.leftBlock,
              children: [
                D.jsx(Jw, {
                  elevation: 4,
                  style: vn.leftPaper,
                  children: D.jsxs("div", {
                    style: vn.leftContent,
                    children: [
                      D.jsx("h4", {
                        children: t.t("Events")
                      }),
                      S.map((T) => {
                        var _a3, _b2;
                        return D.jsx(ZL, {
                          t: t.t,
                          type: T,
                          color: t.isSimulation ? (_b2 = (_a3 = t.simulation) == null ? void 0 : _a3.common) == null ? void 0 : _b2.color : void 0
                        }, T.type);
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("div", {
                        children: t.t("Drag and drop the events above to create a new one.")
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("hr", {
                        style: vn.hr
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("div", {
                        children: t.t("Use ALT by dragging it to copy the events.")
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("hr", {
                        style: vn.hr
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("div", {
                        children: t.t("Use double click on calendar to add new events.")
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("hr", {
                        style: vn.hr
                      }),
                      t.hideLeftBlockHint || R === "dayGridMonth" || R === "listMonth" ? null : D.jsxs(cr, {
                        fullWidth: true,
                        variant: "standard",
                        children: [
                          D.jsx(ur, {
                            children: t.t("Zoom")
                          }),
                          D.jsx(Wn, {
                            value: r,
                            onChange: (T) => {
                              var _a3, _b2;
                              const x = (_b2 = (_a3 = a.current) == null ? void 0 : _a3.elRef) == null ? void 0 : _b2.current;
                              if (x) {
                                const N = qL(x);
                                N && setTimeout(() => {
                                  var _a4;
                                  return (_a4 = a.current) == null ? void 0 : _a4.getApi().scrollToTime(N);
                                }, 300);
                              }
                              window.localStorage.setItem("calendarStep", T.target.value.toString()), s(T.target.value);
                            },
                            children: GL.map((T) => D.jsxs(Un, {
                              value: T,
                              children: [
                                T,
                                D.jsx("span", {
                                  style: vn.leftMargin,
                                  children: t.t("min")
                                })
                              ]
                            }, T))
                          })
                        ]
                      })
                    ]
                  })
                }),
                t.button
              ]
            }),
            D.jsx("div", {
              style: vn.calendarBlock,
              children: D.jsx("div", {
                style: vn.calendar,
                children: D.jsx(ep, {
                  ref: a,
                  plugins: [
                    CE,
                    JT,
                    Yx,
                    uM,
                    pE
                  ],
                  weekends: !t.hideWeekends,
                  headerToolbar: t.hideTopBlock ? false : {
                    left: t.hideTopBlockButtons || t.isSimulation ? "" : "prev,next today",
                    center: t.isSimulation ? "" : "title",
                    right: t.hideTopBlockButtons || t.isSimulation ? "" : "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                  },
                  eventTimeFormat: t.isSimulation ? QL : void 0,
                  scrollTime: t.isSimulation && t.simulationState === "record" ? E : void 0,
                  slotDuration: `00:${r.toString().padStart(2, "0")}:00`,
                  eventMinHeight: 20,
                  initialView: v,
                  initialDate: y,
                  editable: !t.readOnly,
                  selectable: true,
                  selectMirror: true,
                  nowIndicator: true,
                  dayMaxEvents: true,
                  eventResizableFromStart: !t.isSimulation,
                  eventDurationEditable: !t.isSimulation,
                  defaultTimedEventDuration: `00:${r.toString().padStart(2, "0")}`,
                  events: b,
                  height: "calc(100% - 20px)",
                  locales: [
                    AE,
                    RE,
                    OE,
                    IE,
                    PE,
                    NE,
                    LE,
                    YE,
                    FE,
                    HE
                  ],
                  locale: t.language,
                  datesSet: (T) => {
                    var _a3, _b2;
                    (T.start.toString() !== ((_a3 = m.start) == null ? void 0 : _a3.toString()) || T.end.toString() !== ((_b2 = m.end) == null ? void 0 : _b2.toString())) && (f.current = null, g({
                      start: T.start,
                      end: T.end
                    })), t.widget ? (d.current && clearTimeout(d.current), d.current = null, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
                      c.current = null;
                      const x = () => {
                        var _a4, _b3;
                        (_b3 = (_a4 = a.current) == null ? void 0 : _a4.getApi()) == null ? void 0 : _b3.scrollToTime((/* @__PURE__ */ new Date()).getTime()), c.current ? d.current = null : d.current = setTimeout(() => x, 1e3 * 60 * 5);
                      };
                      x();
                    }, 6e4)) : window.localStorage.setItem(`${i}View`, T.view.type);
                  },
                  eventClick: (T) => {
                    f.current = new Date(T.event.start).getTime(), n(T.event.extendedProps.eventId);
                  },
                  eventResize: (T) => {
                    var _a3;
                    f.current = new Date(T.event.start).getTime();
                    const x = t.events.find((N) => N._id === T.event.extendedProps.eventId);
                    if ((_a3 = x == null ? void 0 : x.native.intervals) == null ? void 0 : _a3[0].timeOffset) {
                      const N = JSON.parse(JSON.stringify(x));
                      N.native.intervals[0].timeOffset += T.endDelta.milliseconds, t.setEvent(N._id, N), t.updateEvents();
                    } else T.revert();
                  },
                  eventDrop: async (T) => {
                    var _a3;
                    f.current = new Date(T.event.start).getTime();
                    const x = t.events.find((N) => N._id === T.event.extendedProps.eventId);
                    if ((_a3 = x == null ? void 0 : x.native) == null ? void 0 : _a3.cron) {
                      const N = JSON.parse(JSON.stringify(x));
                      T.jsEvent.altKey && (N._id = `${t.calendarPrefix || t.simulationId}.event-${ca()}`);
                      const I = Ht(N.native.cron), O = rn(T.event.start, "cron", t.serverTimeZone), J = new Date(T.event.start).getDate(), U = new Date(T.event.start).getMonth() + 1, L = new Date(T.event.start).getDay();
                      Array.isArray(I.months) ? (T.delta.days && (I.dates = [
                        J
                      ]), I.months.includes(U) || (I.months = [
                        U
                      ]), I.dows = "*") : Array.isArray(I.dows) && (I.months = "*", I.dates = "*", T.delta.days && (I.dows = [
                        L
                      ])), I.hours = O.hours, I.minutes = O.minutes, N.native.cron = tn(I), await t.setEvent(N._id, N), t.updateEvents();
                    } else {
                      const N = JSON.parse(JSON.stringify(x));
                      T.jsEvent.altKey && (N._id = `${t.calendarPrefix || t.simulationId}.event-${ca()}`), N.native.start = rn(T.event.start, "date", t.serverTimeZone), await t.setEvent(N._id, N), t.updateEvents();
                    }
                  },
                  eventReceive: async (T) => {
                    const x = {
                      _id: `${t.calendarPrefix || t.simulationId}.event-${ca()}`,
                      common: {
                        name: T.event.title,
                        enabled: true,
                        color: "#3A87AD"
                      },
                      native: {
                        id: Date.now(),
                        start: rn(T.event.start, "date", t.serverTimeZone),
                        type: T.event.extendedProps.type,
                        oid: "",
                        startValue: ""
                      },
                      type: "schedule"
                    }, N = new Date(x.native.start);
                    if (!N.getMinutes() && !N.getHours() && (N.setHours(12), x.native.start = rn(N, "date", t.serverTimeZone)), T.event.extendedProps.type !== "single" && (x.native.intervals = [
                      {
                        timeOffset: 1800 * 1e3
                      }
                    ]), t.isSimulation) {
                      x.common.color = t.simulation.common.color || x.common.color, delete x.native.start;
                      const I = rn(T.event.start, "cron", t.serverTimeZone);
                      I.dows = t.simulation.native.interval === "day" ? [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ] : [
                        T.event.start.getDay()
                      ], I.dates = "?", I.months = "*", x.native.cron = tn(I), x.native.record = {
                        states: [],
                        enums: [],
                        start: null,
                        end: null
                      };
                    }
                    f.current = new Date(T.event.start).getTime(), await t.setEvent(x._id, x), t.updateEvents(), setTimeout(() => n(x._id), 100);
                  },
                  eventDidMount: (T) => {
                    let x = T.event.extendedProps.icon;
                    if (x) {
                      const N = window.document.createElement("img");
                      !x.startsWith("data:image") && !x.startsWith("http") && !x.startsWith("/") && (x = `../../${x}`), N.setAttribute("src", x), N.className = "icon", N.style.width = "20px", N.style.height = "20px";
                      const I = T.el.getElementsByClassName("fc-event-title-container");
                      if (I.length) {
                        I[0].prepend(N);
                        const O = I[0].getElementsByClassName("fc-event-title");
                        O.length && (O[0].style.marginLeft = "23px");
                      }
                    }
                  },
                  select: async (T) => {
                    if (T.view.calendar.unselect(), t.readOnly) return;
                    const N = T.end.getTime() - T.start.getTime();
                    if ((!l.current || Date.now() - l.current > 500) && N === 1800 * 1e3) {
                      l.current = Date.now();
                      return;
                    }
                    const I = {
                      _id: `${t.calendarPrefix || t.simulationId}.event-${ca()}`,
                      common: {
                        name: t.t("Single event"),
                        enabled: true,
                        color: "#3A87AD"
                      },
                      native: {
                        id: Date.now(),
                        start: rn(T.start, "date", t.serverTimeZone),
                        intervals: T.end && !t.isSimulation ? [
                          {
                            value: "",
                            timeOffset: T.end.getTime() - T.start.getTime()
                          }
                        ] : void 0,
                        type: T.end && !t.isSimulation ? "double" : "single",
                        oid: "",
                        startValue: ""
                      },
                      type: "schedule"
                    };
                    t.isSimulation && (I.common.color = t.simulation.common.color || I.common.color), f.current = new Date(I.native.start).getTime(), await t.setEvent(I._id, I), await t.updateEvents(), setTimeout(() => n(I._id), 100);
                  }
                })
              })
            })
          ]
        })
      ]
    });
  }
  class Pu extends vi.Component {
    constructor(e) {
      super(e), this.state = {
        list: [
          {
            value: "_",
            label: e.t("default")
          }
        ]
      };
    }
    static getText(e) {
      return typeof e == "object" ? e[wn.getLanguage()] || e.en : e;
    }
    componentDidMount() {
      this.props.instance && this.props.socket.getObjectViewSystem("folder", `fullcalendar.${this.props.instance}.Calendars.`, `fullcalendar.${this.props.instance}.Calendars.\u9999`).then((e) => {
        const n = Object.keys(e).map((r) => {
          var _a2;
          return {
            value: r,
            label: Pu.getText(((_a2 = e[r].common) == null ? void 0 : _a2.name) ?? r)
          };
        });
        n.unshift({
          value: "_",
          label: this.props.t("default")
        }), this.setState({
          list: n
        });
      });
    }
    render() {
      return D.jsx(Wn, {
        variant: "standard",
        fullWidth: true,
        value: this.props.value || "_",
        onChange: (e) => this.props.onChange(e.target.value === "_" ? "" : e.target.value),
        children: this.state.list.map((e) => D.jsx(Un, {
          value: e.value,
          children: e.label
        }, e.value))
      });
    }
  }
  const vh = {
    content: {
      display: "flex",
      width: "100%",
      height: "100%",
      overflow: "auto"
    }
  };
  ui = class extends window.visRxWidget {
    widgetRef = vi.createRef();
    subscribed = null;
    constructor(e) {
      super(e), this.state = {
        ...this.state,
        events: [],
        serverTimeZone: 0
      };
    }
    static getWidgetInfo() {
      return {
        id: "tplFullCalendar",
        visSet: "fullcalendar",
        visWidgetLabel: "fullcalendar",
        visSetLabel: "set_label",
        visSetColor: "#112233",
        visName: "Full calendar",
        visAttrs: [
          {
            name: "common",
            fields: [
              {
                label: "instance",
                name: "instance",
                type: "instance",
                adapter: "fullcalendar",
                isShort: true
              },
              {
                label: "calendar",
                name: "calendar",
                type: "custom",
                component: (e, n, r, s) => D.jsx(Pu, {
                  instance: n.instance,
                  value: n.calendar,
                  onChange: (i) => r({
                    calendar: i
                  }),
                  socket: s.context.socket,
                  t: ui.t
                }, n.instance),
                default: ""
              },
              {
                label: "read_only",
                name: "readOnly",
                type: "checkbox",
                default: false
              },
              {
                label: "hide_left_block",
                name: "hideLeftBlock",
                type: "checkbox",
                hidden: (e) => !!e.readOnly,
                default: false
              },
              {
                label: "hide_left_block_hint",
                name: "hideLeftBlockHint",
                type: "checkbox",
                hidden: (e) => !!e.readOnly || !!e.hideLeftBlock,
                default: false
              },
              {
                label: "hide_top_block",
                name: "hideTopBlock",
                type: "checkbox",
                default: false
              },
              {
                label: "hide_top_block_buttons",
                name: "hideTopBlockButtons",
                type: "checkbox",
                hidden: (e) => !!e.hide_top_block,
                default: false
              },
              {
                label: "hide_weekends",
                name: "hideWeekends",
                type: "checkbox",
                default: false
              },
              {
                label: "view_mode",
                name: "viewMode",
                type: "select",
                options: [
                  {
                    label: "full_calendar_dayGridMonth",
                    value: "dayGridMonth"
                  },
                  {
                    label: "full_calendar_timeGridWeek",
                    value: "timeGridWeek"
                  },
                  {
                    label: "full_calendar_timeGridDay",
                    value: "timeGridDay"
                  },
                  {
                    label: "full_calendar_listMonth",
                    value: "listMonth"
                  }
                ],
                default: "dayGridMonth"
              },
              {
                label: "name",
                name: "name",
                tooltip: "used_only_with_relative",
                default: "",
                hidden: ((e, n, r) => !!r && r.position !== "relative")
              },
              {
                label: "day_step",
                tooltip: "day_step_minutes",
                name: "dayStep",
                default: 30,
                type: "select",
                noTranslation: true,
                hidden: (e) => e.viewMode !== "timeGridDay" && e.viewMode !== "timeGridWeek",
                options: [
                  {
                    label: "1",
                    value: 1
                  },
                  {
                    label: "2",
                    value: 2
                  },
                  {
                    label: "3",
                    value: 3
                  },
                  {
                    label: "5",
                    value: 5
                  },
                  {
                    label: "10",
                    value: 10
                  },
                  {
                    label: "15",
                    value: 15
                  },
                  {
                    label: "20",
                    value: 20
                  },
                  {
                    label: "30",
                    value: 30
                  },
                  {
                    label: "60",
                    value: 60
                  }
                ]
              }
            ]
          }
        ],
        visDefaultStyle: {
          width: "100%",
          height: 355,
          position: "relative",
          absoluteWidth: 500
        },
        visPrev: "widgets/fullcalendar/img/prev_fullcalendar.png"
      };
    }
    static t(e, ...n) {
      return wn.t(`full_calendar_${e}`, ...n);
    }
    getWidgetInfo() {
      return ui.getWidgetInfo();
    }
    componentDidMount() {
      super.componentDidMount(), this.updateEvents();
    }
    onEventsChanged = (e, n) => {
      if (!this.state.rxData.calendar && e.split(".").length > 3) return;
      const r = JSON.parse(JSON.stringify(this.state.events)), s = r.findIndex((i) => i._id === e);
      s !== -1 ? n ? r[s] = n : r.splice(s, 1) : n && r.push(n), this.setState({
        events: r
      });
    };
    componentWillUnmount() {
      this.subscribed && (this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged), this.subscribed = null), super.componentWillUnmount();
    }
    onRxDataChanged() {
      this.updateEvents();
    }
    updateEvents = async () => {
      var _a2;
      let e;
      if (this.state.rxData.calendar ? e = `${this.state.rxData.calendar}.*` : this.state.rxData.instance || this.state.rxData.instance === 0 ? e = `fullcalendar.${this.state.rxData.instance}.*` : e = "", this.subscribed !== e && (this.subscribed && await this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged), this.subscribed = e, this.subscribed && await this.props.context.socket.subscribeObject(this.subscribed, this.onEventsChanged)), !this.subscribed) {
        this.setState({
          events: []
        });
        return;
      }
      const n = await this.props.context.socket.getObjectViewCustom("schedule", "schedule", this.state.rxData.calendar ? `${this.state.rxData.calendar}.` : `fullcalendar.${this.state.rxData.instance}.`, this.state.rxData.calendar ? `${this.state.rxData.calendar}.\u9999` : `fullcalendar.${this.state.rxData.instance}.\u9999`);
      let r = 0;
      try {
        r = ((_a2 = await this.props.context.socket.getState(`fullcalendar.${this.state.rxData.instance}.info.timeZone`)) == null ? void 0 : _a2.val) || 0;
      } catch {
      }
      let s = Object.values(n);
      this.state.rxData.calendar || (s = s.filter((i) => i._id.split(".").length <= 3)), this.setState({
        events: s,
        serverTimeZone: r
      });
    };
    changeEvents = (e) => {
      this.setState({
        events: e
      });
    };
    setEvent = async (e, n) => {
      await this.props.context.socket.setObject(e, n);
    };
    deleteEvent = async (e) => {
      await this.props.context.socket.delObject(e);
    };
    renderWidgetBody(e) {
      var _a2, _b;
      super.renderWidgetBody(e), ((_a2 = this.widgetRef.current) == null ? void 0 : _a2.offsetWidth) || this.forceUpdate();
      let n;
      return !this.state.rxData.instance && this.state.rxData.instance !== 0 ? n = D.jsx("div", {
        style: vh.content,
        ref: this.widgetRef,
        children: ui.t("Please select instance")
      }) : n = D.jsx("div", {
        style: vh.content,
        ref: this.widgetRef,
        children: D.jsx(XL, {
          widget: true,
          systemConfig: this.props.context.systemConfig.common,
          events: this.state.events || [],
          socket: this.props.context.socket,
          calendarPrefix: `fullcalendar.${this.state.rxData.instance}`,
          changeEvents: this.changeEvents,
          updateEvents: this.updateEvents,
          setEvent: this.setEvent,
          deleteEvent: this.deleteEvent,
          serverTimeZone: this.state.serverTimeZone || 0,
          readOnly: this.state.rxData.readOnly || false,
          hideLeftBlock: this.state.rxData.hideLeftBlock || false,
          hideTopBlock: this.state.rxData.hideTopBlock || false,
          hideLeftBlockHint: this.state.rxData.hideLeftBlockHint || false,
          hideTopBlockButtons: this.state.rxData.hideTopBlockButtons || false,
          viewMode: this.state.rxData.viewMode,
          storageName: `fc_${this.props.id}`,
          hideWeekends: this.state.rxData.hideWeekends || false,
          t: ui.t,
          language: wn.getLanguage(),
          dayStep: this.state.rxData.dayStep || 30,
          theme: this.props.context.theme
        }, `${this.state.rxData.viewMode}_${this.state.rxData.dayStep || 30}`)
      }), ((_b = this.state.rxStyle) == null ? void 0 : _b.position) === "relative" ? this.wrapContent(n, null, {
        height: "calc(100% - 24px)",
        width: "calc(100% - 24px)"
      }) : n;
    }
  };
});
export {
  __tla,
  ui as default
};
