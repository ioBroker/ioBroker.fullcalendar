import { _ as F, j as D, g as vt, a as bt, c as ht, b as Ct, __tla as __tla_0 } from "./DefaultPropsProvider-XYnvdTOt.js";
import { f as Y, R as ai, __tla as __tla_1 } from "./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js";
import { P as V, c as Dw, __tla as __tla_2 } from "./getColorSchemeSelector-C1WqGkJ4.js";
import { f as kw } from "./fullcalendar__mf_v__runtimeInit__mf_v__-CdxiMOBu.js";
import { f as Dl, _ as Ne, u as lt, a as Ae, b as ba, c as $t, I as Si, d as ot, e as sh, g as Ga, v as xw, h as Tw, F as Mw, i as Ew, T as Cw, j as qa, B as Xs, k as ih, l as ah, G as Aw, m as Rw, o as qo, P as Ow, n as Iw, D as Pw, L as Nw, p as Lw, C as Yw, M as oh, q as lh, r as ch, s as Fw, t as cd, w as Hw, __tla as __tla_3 } from "./TextField-CpmA-DnZ.js";
import { _ as ec, a as sn, b as de, f as pe, c as Zo, __tla as __tla_4 } from "./tslib.es6-Di4_HT9Y.js";
import { g as Vr } from "./_commonjsHelpers-Cpj98o6Y.js";
import { u as gr, a as _i, b as ws, __tla as __tla_5 } from "./index-DvUGxIFq.js";
import { c as yr, s as ke, __tla as __tla_6 } from "./createSvgIcon-DGfav3wW.js";
import { f as oi, __tla as __tla_7 } from "./defaultTheme-CaQBKbzT.js";
import { __tla as __tla_8 } from "./useTheme-6qHn8Vyq.js";
let ds;
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
  })()
]).then(async () => {
  const uh = V.oneOfType([
    V.func,
    V.object
  ]), { initPromise: jw } = kw, Vw = jw.then((t) => t.loadShare("@iobroker/adapter-react-v5", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), Ww = await Vw.then((t) => t());
  var wt = Ww;
  const Dt = [];
  for (let t = 0; t < 256; ++t) Dt.push((t + 256).toString(16).slice(1));
  function Uw(t, e = 0) {
    return (Dt[t[e + 0]] + Dt[t[e + 1]] + Dt[t[e + 2]] + Dt[t[e + 3]] + "-" + Dt[t[e + 4]] + Dt[t[e + 5]] + "-" + Dt[t[e + 6]] + Dt[t[e + 7]] + "-" + Dt[t[e + 8]] + Dt[t[e + 9]] + "-" + Dt[t[e + 10]] + Dt[t[e + 11]] + Dt[t[e + 12]] + Dt[t[e + 13]] + Dt[t[e + 14]] + Dt[t[e + 15]]).toLowerCase();
  }
  let Qo;
  const Bw = new Uint8Array(16);
  function zw() {
    if (!Qo) {
      if (typeof crypto > "u" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      Qo = crypto.getRandomValues.bind(crypto);
    }
    return Qo(Bw);
  }
  const $w = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ud = {
    randomUUID: $w
  };
  function Xi(t, e, n) {
    var _a2;
    if (ud.randomUUID && !t) return ud.randomUUID();
    t = t || {};
    const r = t.random ?? ((_a2 = t.rng) == null ? void 0 : _a2.call(t)) ?? zw();
    if (r.length < 16) throw new Error("Random bytes length must be >= 16");
    return r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, Uw(r);
  }
  var Za, Ee, dh, fh, Ss, Rr, dd, hh, mh, wa = {}, ph = [], Gw = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function rr(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function gh(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function M(t, e, n) {
    var r, s, i, a = {};
    for (i in e) i == "key" ? r = e[i] : i == "ref" ? s = e[i] : a[i] = e[i];
    if (arguments.length > 2 && (a.children = arguments.length > 3 ? Za.call(arguments, 2) : n), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) a[i] === void 0 && (a[i] = t.defaultProps[i]);
    return la(t, a, r, s, null);
  }
  function la(t, e, n, r, s) {
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
      __v: s ?? ++dh
    };
    return s == null && Ee.vnode != null && Ee.vnode(i), i;
  }
  function Lt() {
    return {
      current: null
    };
  }
  function qe(t) {
    return t.children;
  }
  function qw(t, e, n, r, s) {
    var i;
    for (i in n) i === "children" || i === "key" || i in e || Sa(t, i, null, n[i], r);
    for (i in e) s && typeof e[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || n[i] === e[i] || Sa(t, i, e[i], n[i], r);
  }
  function fd(t, e, n) {
    e[0] === "-" ? t.setProperty(e, n ?? "") : t[e] = n == null ? "" : typeof n != "number" || Gw.test(e) ? n : n + "px";
  }
  function Sa(t, e, n, r, s) {
    var i;
    e: if (e === "style") if (typeof n == "string") t.style.cssText = n;
    else {
      if (typeof r == "string" && (t.style.cssText = r = ""), r) for (e in r) n && e in n || fd(t.style, e, "");
      if (n) for (e in n) r && n[e] === r[e] || fd(t.style, e, n[e]);
    }
    else if (e[0] === "o" && e[1] === "n") i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = n, n ? r || t.addEventListener(e, i ? md : hd, i) : t.removeEventListener(e, i ? md : hd, i);
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
  function hd(t) {
    Ss = true;
    try {
      return this.l[t.type + false](Ee.event ? Ee.event(t) : t);
    } finally {
      Ss = false;
    }
  }
  function md(t) {
    Ss = true;
    try {
      return this.l[t.type + true](Ee.event ? Ee.event(t) : t);
    } finally {
      Ss = false;
    }
  }
  function Vt(t, e) {
    this.props = t, this.context = e;
  }
  function li(t, e) {
    if (e == null) return t.__ ? li(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var n; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) return n.__e;
    return typeof t.type == "function" ? li(t) : null;
  }
  function yh(t) {
    var e, n;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++) if ((n = t.__k[e]) != null && n.__e != null) {
        t.__e = t.__c.base = n.__e;
        break;
      }
      return yh(t);
    }
  }
  function Zw(t) {
    Ss ? setTimeout(t) : hh(t);
  }
  function kl(t) {
    (!t.__d && (t.__d = true) && Rr.push(t) && !_a.__r++ || dd !== Ee.debounceRendering) && ((dd = Ee.debounceRendering) || Zw)(_a);
  }
  function _a() {
    var t, e, n, r, s, i, a, l;
    for (Rr.sort(function(c, d) {
      return c.__v.__b - d.__v.__b;
    }); t = Rr.shift(); ) t.__d && (e = Rr.length, r = void 0, s = void 0, a = (i = (n = t).__v).__e, (l = n.__P) && (r = [], (s = rr({}, i)).__v = i.__v + 1, tc(l, i, s, n.__n, l.ownerSVGElement !== void 0, i.__h != null ? [
      a
    ] : null, r, a ?? li(i), i.__h), _h(r, i), i.__e != a && yh(i)), Rr.length > e && Rr.sort(function(c, d) {
      return c.__v.__b - d.__v.__b;
    }));
    _a.__r = 0;
  }
  function vh(t, e, n, r, s, i, a, l, c, d) {
    var f, m, g, y, v, S, b, _ = r && r.__k || ph, E = _.length;
    for (n.__k = [], f = 0; f < e.length; f++) if ((y = n.__k[f] = (y = e[f]) == null || typeof y == "boolean" ? null : typeof y == "string" || typeof y == "number" || typeof y == "bigint" ? la(null, y, null, null, y) : Array.isArray(y) ? la(qe, {
      children: y
    }, null, null, null) : y.__b > 0 ? la(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v) : y) != null) {
      if (y.__ = n, y.__b = n.__b + 1, (g = _[f]) === null || g && y.key == g.key && y.type === g.type) _[f] = void 0;
      else for (m = 0; m < E; m++) {
        if ((g = _[m]) && y.key == g.key && y.type === g.type) {
          _[m] = void 0;
          break;
        }
        g = null;
      }
      tc(t, y, g = g || wa, s, i, a, l, c, d), v = y.__e, (m = y.ref) && g.ref != m && (b || (b = []), g.ref && b.push(g.ref, null, y), b.push(m, y.__c || v, y)), v != null ? (S == null && (S = v), typeof y.type == "function" && y.__k === g.__k ? y.__d = c = bh(y, c, t) : c = wh(t, y, g, _, v, c), typeof n.type == "function" && (n.__d = c)) : c && g.__e == c && c.parentNode != t && (c = li(g));
    }
    for (n.__e = S, f = E; f--; ) _[f] != null && (typeof n.type == "function" && _[f].__e != null && _[f].__e == n.__d && (n.__d = Sh(r).nextSibling), kh(_[f], _[f]));
    if (b) for (f = 0; f < b.length; f++) Dh(b[f], b[++f], b[++f]);
  }
  function bh(t, e, n) {
    for (var r, s = t.__k, i = 0; s && i < s.length; i++) (r = s[i]) && (r.__ = t, e = typeof r.type == "function" ? bh(r, e, n) : wh(n, r, r, s, r.__e, e));
    return e;
  }
  function Da(t, e) {
    return e = e || [], t == null || typeof t == "boolean" || (Array.isArray(t) ? t.some(function(n) {
      Da(n, e);
    }) : e.push(t)), e;
  }
  function wh(t, e, n, r, s, i) {
    var a, l, c;
    if (e.__d !== void 0) a = e.__d, e.__d = void 0;
    else if (n == null || s != i || s.parentNode == null) e: if (i == null || i.parentNode !== t) t.appendChild(s), a = null;
    else {
      for (l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 1) if (l == s) break e;
      t.insertBefore(s, i), a = i;
    }
    return a !== void 0 ? a : s.nextSibling;
  }
  function Sh(t) {
    var e, n, r;
    if (t.type == null || typeof t.type == "string") return t.__e;
    if (t.__k) {
      for (e = t.__k.length - 1; e >= 0; e--) if ((n = t.__k[e]) && (r = Sh(n))) return r;
    }
    return null;
  }
  function tc(t, e, n, r, s, i, a, l, c) {
    var d, f, m, g, y, v, S, b, _, E, R, k, T, N, I, O = e.type;
    if (e.constructor !== void 0) return null;
    n.__h != null && (c = n.__h, l = e.__e = n.__e, e.__h = null, i = [
      l
    ]), (d = Ee.__b) && d(e);
    try {
      e: if (typeof O == "function") {
        if (b = e.props, _ = (d = O.contextType) && r[d.__c], E = d ? _ ? _.props.value : d.__ : r, n.__c ? S = (f = e.__c = n.__c).__ = f.__E : ("prototype" in O && O.prototype.render ? e.__c = f = new O(b, E) : (e.__c = f = new Vt(b, E), f.constructor = O, f.render = Xw), _ && _.sub(f), f.props = b, f.state || (f.state = {}), f.context = E, f.__n = r, m = f.__d = true, f.__h = [], f._sb = []), f.__s == null && (f.__s = f.state), O.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = rr({}, f.__s)), rr(f.__s, O.getDerivedStateFromProps(b, f.__s))), g = f.props, y = f.state, f.__v = e, m) O.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), f.componentDidMount != null && f.__h.push(f.componentDidMount);
        else {
          if (O.getDerivedStateFromProps == null && b !== g && f.componentWillReceiveProps != null && f.componentWillReceiveProps(b, E), !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(b, f.__s, E) === false || e.__v === n.__v) {
            for (e.__v !== n.__v && (f.props = b, f.state = f.__s, f.__d = false), e.__e = n.__e, e.__k = n.__k, e.__k.forEach(function(K) {
              K && (K.__ = e);
            }), R = 0; R < f._sb.length; R++) f.__h.push(f._sb[R]);
            f._sb = [], f.__h.length && a.push(f);
            break e;
          }
          f.componentWillUpdate != null && f.componentWillUpdate(b, f.__s, E), f.componentDidUpdate != null && f.__h.push(function() {
            f.componentDidUpdate(g, y, v);
          });
        }
        if (f.context = E, f.props = b, f.__P = t, k = Ee.__r, T = 0, "prototype" in O && O.prototype.render) {
          for (f.state = f.__s, f.__d = false, k && k(e), d = f.render(f.props, f.state, f.context), N = 0; N < f._sb.length; N++) f.__h.push(f._sb[N]);
          f._sb = [];
        } else do
          f.__d = false, k && k(e), d = f.render(f.props, f.state, f.context), f.state = f.__s;
        while (f.__d && ++T < 25);
        f.state = f.__s, f.getChildContext != null && (r = rr(rr({}, r), f.getChildContext())), m || f.getSnapshotBeforeUpdate == null || (v = f.getSnapshotBeforeUpdate(g, y)), I = d != null && d.type === qe && d.key == null ? d.props.children : d, vh(t, Array.isArray(I) ? I : [
          I
        ], e, n, r, s, i, a, l, c), f.base = e.__e, e.__h = null, f.__h.length && a.push(f), S && (f.__E = f.__ = null), f.__e = false;
      } else i == null && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = Qw(n.__e, e, n, r, s, i, a, c);
      (d = Ee.diffed) && d(e);
    } catch (K) {
      e.__v = null, (c || i != null) && (e.__e = l, e.__h = !!c, i[i.indexOf(l)] = null), Ee.__e(K, e, n);
    }
  }
  function _h(t, e) {
    Ee.__c && Ee.__c(e, t), t.some(function(n) {
      try {
        t = n.__h, n.__h = [], t.some(function(r) {
          r.call(n);
        });
      } catch (r) {
        Ee.__e(r, n.__v);
      }
    });
  }
  function Qw(t, e, n, r, s, i, a, l) {
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
      if (i = i && Za.call(t.childNodes), d = (m = n.props || wa).dangerouslySetInnerHTML, f = g.dangerouslySetInnerHTML, !l) {
        if (i != null) for (m = {}, v = 0; v < t.attributes.length; v++) m[t.attributes[v].name] = t.attributes[v].value;
        (f || d) && (f && (d && f.__html == d.__html || f.__html === t.innerHTML) || (t.innerHTML = f && f.__html || ""));
      }
      if (qw(t, g, m, s, l), f) e.__k = [];
      else if (v = e.props.children, vh(t, Array.isArray(v) ? v : [
        v
      ], e, n, r, s && y !== "foreignObject", i, a, i ? i[0] : n.__k && li(n, 0), l), i != null) for (v = i.length; v--; ) i[v] != null && gh(i[v]);
      l || ("value" in g && (v = g.value) !== void 0 && (v !== t.value || y === "progress" && !v || y === "option" && v !== m.value) && Sa(t, "value", v, m.value, false), "checked" in g && (v = g.checked) !== void 0 && v !== t.checked && Sa(t, "checked", v, m.checked, false));
    }
    return t;
  }
  function Dh(t, e, n) {
    try {
      typeof t == "function" ? t(e) : t.current = e;
    } catch (r) {
      Ee.__e(r, n);
    }
  }
  function kh(t, e, n) {
    var r, s;
    if (Ee.unmount && Ee.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || Dh(r, null, e)), (r = t.__c) != null) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (i) {
        Ee.__e(i, e);
      }
      r.base = r.__P = null, t.__c = void 0;
    }
    if (r = t.__k) for (s = 0; s < r.length; s++) r[s] && kh(r[s], e, n || typeof t.type != "function");
    n || t.__e == null || gh(t.__e), t.__ = t.__e = t.__d = void 0;
  }
  function Xw(t, e, n) {
    return this.constructor(t, n);
  }
  function ci(t, e, n) {
    var r, s, i;
    Ee.__ && Ee.__(t, e), s = (r = false) ? null : e.__k, i = [], tc(e, t = e.__k = M(qe, null, [
      t
    ]), s || wa, wa, e.ownerSVGElement !== void 0, s ? null : e.firstChild ? Za.call(e.childNodes) : null, i, s ? s.__e : e.firstChild, r), _h(i, t);
  }
  function Jw(t, e) {
    var n = {
      __c: e = "__cC" + mh++,
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
            l.__e = true, kl(l);
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
  Za = ph.slice, Ee = {
    __e: function(t, e, n, r) {
      for (var s, i, a; e = e.__; ) if ((s = e.__c) && !s.__) try {
        if ((i = s.constructor) && i.getDerivedStateFromError != null && (s.setState(i.getDerivedStateFromError(t)), a = s.__d), s.componentDidCatch != null && (s.componentDidCatch(t, r || {}), a = s.__d), a) return s.__E = s;
      } catch (l) {
        t = l;
      }
      throw t;
    }
  }, dh = 0, fh = function(t) {
    return t != null && t.constructor === void 0;
  }, Ss = false, Vt.prototype.setState = function(t, e) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = rr({}, this.state), typeof t == "function" && (t = t(rr({}, n), this.props)), t && rr(n, t), t != null && this.__v && (e && this._sb.push(e), kl(this));
  }, Vt.prototype.forceUpdate = function(t) {
    this.__v && (this.__e = true, t && this.__h.push(t), kl(this));
  }, Vt.prototype.render = qe, Rr = [], hh = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, _a.__r = 0, mh = 0;
  var vn, Xo, pd, xh = [], Jo = [], gd = Ee.__b, yd = Ee.__r, vd = Ee.diffed, bd = Ee.__c, wd = Ee.unmount;
  function Kw() {
    for (var t; t = xh.shift(); ) if (t.__P && t.__H) try {
      t.__H.__h.forEach(ca), t.__H.__h.forEach(xl), t.__H.__h = [];
    } catch (e) {
      t.__H.__h = [], Ee.__e(e, t.__v);
    }
  }
  Ee.__b = function(t) {
    vn = null, gd && gd(t);
  }, Ee.__r = function(t) {
    yd && yd(t);
    var e = (vn = t.__c).__H;
    e && (Xo === vn ? (e.__h = [], vn.__h = [], e.__.forEach(function(n) {
      n.__N && (n.__ = n.__N), n.__V = Jo, n.__N = n.i = void 0;
    })) : (e.__h.forEach(ca), e.__h.forEach(xl), e.__h = [])), Xo = vn;
  }, Ee.diffed = function(t) {
    vd && vd(t);
    var e = t.__c;
    e && e.__H && (e.__H.__h.length && (xh.push(e) !== 1 && pd === Ee.requestAnimationFrame || ((pd = Ee.requestAnimationFrame) || eS)(Kw)), e.__H.__.forEach(function(n) {
      n.i && (n.__H = n.i), n.__V !== Jo && (n.__ = n.__V), n.i = void 0, n.__V = Jo;
    })), Xo = vn = null;
  }, Ee.__c = function(t, e) {
    e.some(function(n) {
      try {
        n.__h.forEach(ca), n.__h = n.__h.filter(function(r) {
          return !r.__ || xl(r);
        });
      } catch (r) {
        e.some(function(s) {
          s.__h && (s.__h = []);
        }), e = [], Ee.__e(r, n.__v);
      }
    }), bd && bd(t, e);
  }, Ee.unmount = function(t) {
    wd && wd(t);
    var e, n = t.__c;
    n && n.__H && (n.__H.__.forEach(function(r) {
      try {
        ca(r);
      } catch (s) {
        e = s;
      }
    }), n.__H = void 0, e && Ee.__e(e, n.__v));
  };
  var Sd = typeof requestAnimationFrame == "function";
  function eS(t) {
    var e, n = function() {
      clearTimeout(r), Sd && cancelAnimationFrame(e), setTimeout(t);
    }, r = setTimeout(n, 100);
    Sd && (e = requestAnimationFrame(n));
  }
  function ca(t) {
    var e = vn, n = t.__c;
    typeof n == "function" && (t.__c = void 0, n()), vn = e;
  }
  function xl(t) {
    var e = vn;
    t.__c = t.__(), vn = e;
  }
  function tS(t, e) {
    for (var n in e) t[n] = e[n];
    return t;
  }
  function _d(t, e) {
    for (var n in t) if (n !== "__source" && !(n in e)) return true;
    for (var r in e) if (r !== "__source" && t[r] !== e[r]) return true;
    return false;
  }
  function Dd(t) {
    this.props = t;
  }
  (Dd.prototype = new Vt()).isPureReactComponent = true, Dd.prototype.shouldComponentUpdate = function(t, e) {
    return _d(this.props, t) || _d(this.state, e);
  };
  var kd = Ee.__b;
  Ee.__b = function(t) {
    t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), kd && kd(t);
  };
  var nS = Ee.__e;
  Ee.__e = function(t, e, n, r) {
    if (t.then) {
      for (var s, i = e; i = i.__; ) if ((s = i.__c) && s.__c) return e.__e == null && (e.__e = n.__e, e.__k = n.__k), s.__c(t, e);
    }
    nS(t, e, n, r);
  };
  var xd = Ee.unmount;
  function Th(t, e, n) {
    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(r) {
      typeof r.__c == "function" && r.__c();
    }), t.__c.__H = null), (t = tS({}, t)).__c != null && (t.__c.__P === n && (t.__c.__P = e), t.__c = null), t.__k = t.__k && t.__k.map(function(r) {
      return Th(r, e, n);
    })), t;
  }
  function Mh(t, e, n) {
    return t && (t.__v = null, t.__k = t.__k && t.__k.map(function(r) {
      return Mh(r, e, n);
    }), t.__c && t.__c.__P === e && (t.__e && n.insertBefore(t.__e, t.__d), t.__c.__e = true, t.__c.__P = n)), t;
  }
  function Ko() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function Eh(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function Ji() {
    this.u = null, this.o = null;
  }
  Ee.unmount = function(t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && t.__h === true && (t.type = null), xd && xd(t);
  }, (Ko.prototype = new Vt()).__c = function(t, e) {
    var n = e.__c, r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var s = Eh(r.__v), i = false, a = function() {
      i || (i = true, n.__R = null, s ? s(l) : l());
    };
    n.__R = a;
    var l = function() {
      if (!--r.__u) {
        if (r.state.__a) {
          var d = r.state.__a;
          r.__v.__k[0] = Mh(d, d.__c.__P, d.__c.__O);
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
  }, Ko.prototype.componentWillUnmount = function() {
    this.t = [];
  }, Ko.prototype.render = function(t, e) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"), r = this.__v.__k[0].__c;
        this.__v.__k[0] = Th(this.__b, n, r.__O = r.__P);
      }
      this.__b = null;
    }
    var s = e.__a && M(qe, null, t.fallback);
    return s && (s.__h = null), [
      M(qe, null, e.__a ? null : t.children),
      s
    ];
  };
  var Td = function(t, e, n) {
    if (++n[1] === n[0] && t.o.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size)) for (n = t.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      t.u = n = n[2];
    }
  };
  function rS(t) {
    return this.getChildContext = function() {
      return t.context;
    }, t.children;
  }
  function sS(t) {
    var e = this, n = t.i;
    e.componentWillUnmount = function() {
      ci(null, e.l), e.l = null, e.i = null;
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
    }), ci(M(rS, {
      context: e.context
    }, t.__v), e.l)) : e.l && e.componentWillUnmount();
  }
  function iS(t, e) {
    var n = M(sS, {
      __v: t,
      i: e
    });
    return n.containerInfo = e, n;
  }
  (Ji.prototype = new Vt()).__a = function(t) {
    var e = this, n = Eh(e.__v), r = e.o.get(t);
    return r[0]++, function(s) {
      var i = function() {
        e.props.revealOrder ? (r.push(s), Td(e, t, r)) : s();
      };
      n ? n(i) : i();
    };
  }, Ji.prototype.render = function(t) {
    this.u = null, this.o = /* @__PURE__ */ new Map();
    var e = Da(t.children);
    t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
    for (var n = e.length; n--; ) this.o.set(e[n], this.u = [
      1,
      0,
      this.u
    ]);
    return t.children;
  }, Ji.prototype.componentDidUpdate = Ji.prototype.componentDidMount = function() {
    var t = this;
    this.o.forEach(function(e, n) {
      Td(t, n, e);
    });
  };
  var aS = typeof Symbol < "u" && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103, oS = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, lS = typeof document < "u", cS = function(t) {
    return (typeof Symbol < "u" && typeof /* @__PURE__ */ Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(t);
  };
  Vt.prototype.isReactComponent = {}, [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate"
  ].forEach(function(t) {
    Object.defineProperty(Vt.prototype, t, {
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
  var Md = Ee.event;
  function uS() {
  }
  function dS() {
    return this.cancelBubble;
  }
  function fS() {
    return this.defaultPrevented;
  }
  Ee.event = function(t) {
    return Md && (t = Md(t)), t.persist = uS, t.isPropagationStopped = dS, t.isDefaultPrevented = fS, t.nativeEvent = t;
  };
  var Ed = {
    configurable: true,
    get: function() {
      return this.class;
    }
  }, Cd = Ee.vnode;
  Ee.vnode = function(t) {
    var e = t.type, n = t.props, r = n;
    if (typeof e == "string") {
      var s = e.indexOf("-") === -1;
      for (var i in r = {}, n) {
        var a = n[i];
        lS && i === "children" && e === "noscript" || i === "value" && "defaultValue" in n && a == null || (i === "defaultValue" && "value" in n && n.value == null ? i = "value" : i === "download" && a === true ? a = "" : /ondoubleclick/i.test(i) ? i = "ondblclick" : /^onchange(textarea|input)/i.test(i + e) && !cS(n.type) ? i = "oninput" : /^onfocus$/i.test(i) ? i = "onfocusin" : /^onblur$/i.test(i) ? i = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i) ? i = i.toLowerCase() : s && oS.test(i) ? i = i.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : a === null && (a = void 0), /^oninput$/i.test(i) && (i = i.toLowerCase(), r[i] && (i = "oninputCapture")), r[i] = a);
      }
      e == "select" && r.multiple && Array.isArray(r.value) && (r.value = Da(n.children).forEach(function(l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1;
      })), e == "select" && r.defaultValue != null && (r.value = Da(n.children).forEach(function(l) {
        l.props.selected = r.multiple ? r.defaultValue.indexOf(l.props.value) != -1 : r.defaultValue == l.props.value;
      })), t.props = r, n.class != n.className && (Ed.enumerable = "className" in n, n.className != null && (r.class = n.className), Object.defineProperty(r, "className", Ed));
    }
    t.$$typeof = aS, Cd && Cd(t);
  };
  var Ad = Ee.__r;
  Ee.__r = function(t) {
    Ad && Ad(t), t.__c;
  };
  const Ch = [], Tl = /* @__PURE__ */ new Map();
  function Qa(t) {
    Ch.push(t), Tl.forEach((e) => {
      Rh(e, t);
    });
  }
  function hS(t) {
    t.isConnected && t.getRootNode && Ah(t.getRootNode());
  }
  function Ah(t) {
    let e = Tl.get(t);
    if (!e || !e.isConnected) {
      if (e = t.querySelector("style[data-fullcalendar]"), !e) {
        e = document.createElement("style"), e.setAttribute("data-fullcalendar", "");
        const n = pS();
        n && (e.nonce = n);
        const r = t === document ? document.head : t, s = t === document ? r.querySelector("script,link[rel=stylesheet],link[as=style],style") : r.firstChild;
        r.insertBefore(e, s);
      }
      Tl.set(t, e), mS(e);
    }
  }
  function mS(t) {
    for (const e of Ch) Rh(t, e);
  }
  function Rh(t, e) {
    const { sheet: n } = t, r = n.cssRules.length;
    e.split("}").forEach((s, i) => {
      s = s.trim(), s && n.insertRule(s + "}", r + i);
    });
  }
  let el;
  function pS() {
    return el === void 0 && (el = gS()), el;
  }
  function gS() {
    const t = document.querySelector('meta[name="csp-nonce"]');
    if (t && t.hasAttribute("content")) return t.getAttribute("content");
    const e = document.querySelector("script[nonce]");
    return e && e.nonce || "";
  }
  typeof document < "u" && Ah(document);
  var yS = ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}';
  Qa(yS);
  class nc {
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
  function rc(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function Et(t, e) {
    if (t.closest) return t.closest(e);
    if (!document.documentElement.contains(t)) return null;
    do {
      if (Oh(t, e)) return t;
      t = t.parentElement || t.parentNode;
    } while (t !== null && t.nodeType === 1);
    return null;
  }
  function Oh(t, e) {
    return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e);
  }
  function vS(t, e) {
    let n = t instanceof HTMLElement ? [
      t
    ] : t, r = [];
    for (let s = 0; s < n.length; s += 1) {
      let i = n[s].querySelectorAll(e);
      for (let a = 0; a < i.length; a += 1) r.push(i[a]);
    }
    return r;
  }
  const bS = /(top|left|right|bottom|width|height)$/i;
  function Ks(t, e) {
    for (let n in e) Ih(t, n, e[n]);
  }
  function Ih(t, e, n) {
    n == null ? t.style[e] = "" : typeof n == "number" && bS.test(e) ? t.style[e] = `${n}px` : t.style[e] = n;
  }
  function Ph(t) {
    var e, n;
    return (n = (e = t.composedPath) === null || e === void 0 ? void 0 : e.call(t)[0]) !== null && n !== void 0 ? n : t.target;
  }
  let Rd = 0;
  function dr() {
    return Rd += 1, "fc-dom-" + Rd;
  }
  function Xa(t) {
    t.preventDefault();
  }
  function wS(t, e) {
    return (n) => {
      let r = Et(n.target, t);
      r && e.call(r, n, r);
    };
  }
  function Nh(t, e, n, r) {
    let s = wS(n, r);
    return t.addEventListener(e, s), () => {
      t.removeEventListener(e, s);
    };
  }
  function SS(t, e, n, r) {
    let s;
    return Nh(t, "mouseover", e, (i, a) => {
      if (a !== s) {
        s = a, n(i, a);
        let l = (c) => {
          s = null, r(c, a), a.removeEventListener("mouseleave", l);
        };
        a.addEventListener("mouseleave", l);
      }
    });
  }
  const Od = [
    "webkitTransitionEnd",
    "otransitionend",
    "oTransitionEnd",
    "msTransitionEnd",
    "transitionend"
  ];
  function _S(t, e) {
    let n = (r) => {
      e(r), Od.forEach((s) => {
        t.removeEventListener(s, n);
      });
    };
    Od.forEach((r) => {
      t.addEventListener(r, n);
    });
  }
  function Lh(t) {
    return Object.assign({
      onClick: t
    }, Yh(t));
  }
  function Yh(t) {
    return {
      tabIndex: 0,
      onKeyDown(e) {
        (e.key === "Enter" || e.key === " ") && (t(e), e.preventDefault());
      }
    };
  }
  let Id = 0;
  function Wr() {
    return Id += 1, String(Id);
  }
  function Ja() {
    document.body.classList.add("fc-not-allowed");
  }
  function Ka() {
    document.body.classList.remove("fc-not-allowed");
  }
  function DS(t) {
    t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.addEventListener("selectstart", Xa);
  }
  function kS(t) {
    t.style.userSelect = "", t.style.webkitUserSelect = "", t.removeEventListener("selectstart", Xa);
  }
  function xS(t) {
    t.addEventListener("contextmenu", Xa);
  }
  function TS(t) {
    t.removeEventListener("contextmenu", Xa);
  }
  function MS(t) {
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
  function ES(t, e, n) {
    let r, s;
    for (r = 0; r < n.length; r += 1) if (s = CS(t, e, n[r]), s) return s;
    return 0;
  }
  function CS(t, e, n) {
    return n.func ? n.func(t, e) : AS(t[n.field], e[n.field]) * (n.order || 1);
  }
  function AS(t, e) {
    return !t && !e ? 0 : e == null ? -1 : t == null ? 1 : typeof t == "string" || typeof e == "string" ? String(t).localeCompare(String(e)) : t - e;
  }
  function fs(t, e) {
    let n = String(t);
    return "000".substr(0, e - n.length) + n;
  }
  function ei(t, e, n) {
    return typeof t == "function" ? t(...e) : typeof t == "string" ? e.reduce((r, s, i) => r.replace("$" + i, s || ""), t) : n;
  }
  function RS(t, e) {
    return t - e;
  }
  function ua(t) {
    return t % 1 === 0;
  }
  function OS(t) {
    let e = t.querySelector(".fc-scrollgrid-shrink-frame"), n = t.querySelector(".fc-scrollgrid-shrink-cushion");
    if (!e) throw new Error("needs fc-scrollgrid-shrink-frame className");
    if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
    return t.getBoundingClientRect().width - e.getBoundingClientRect().width + n.getBoundingClientRect().width;
  }
  const Pd = [
    "years",
    "months",
    "days",
    "milliseconds"
  ], IS = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function Pe(t, e) {
    return typeof t == "string" ? PS(t) : typeof t == "object" && t ? Nd(t) : typeof t == "number" ? Nd({
      [e || "milliseconds"]: t
    }) : null;
  }
  function PS(t) {
    let e = IS.exec(t);
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
  function Nd(t) {
    let e = {
      years: t.years || t.year || 0,
      months: t.months || t.month || 0,
      days: t.days || t.day || 0,
      milliseconds: (t.hours || t.hour || 0) * 60 * 60 * 1e3 + (t.minutes || t.minute || 0) * 60 * 1e3 + (t.seconds || t.second || 0) * 1e3 + (t.milliseconds || t.millisecond || t.ms || 0)
    }, n = t.weeks || t.week;
    return n && (e.days += n * 7, e.specifiedWeeks = true), e;
  }
  function NS(t, e) {
    return t.years === e.years && t.months === e.months && t.days === e.days && t.milliseconds === e.milliseconds;
  }
  function Ml(t, e) {
    return {
      years: t.years + e.years,
      months: t.months + e.months,
      days: t.days + e.days,
      milliseconds: t.milliseconds + e.milliseconds
    };
  }
  function LS(t, e) {
    return {
      years: t.years - e.years,
      months: t.months - e.months,
      days: t.days - e.days,
      milliseconds: t.milliseconds - e.milliseconds
    };
  }
  function YS(t, e) {
    return {
      years: t.years * e,
      months: t.months * e,
      days: t.days * e,
      milliseconds: t.milliseconds * e
    };
  }
  function FS(t) {
    return hs(t) / 365;
  }
  function HS(t) {
    return hs(t) / 30;
  }
  function hs(t) {
    return nn(t) / 864e5;
  }
  function nn(t) {
    return t.years * (365 * 864e5) + t.months * (30 * 864e5) + t.days * 864e5 + t.milliseconds;
  }
  function sc(t, e) {
    let n = null;
    for (let r = 0; r < Pd.length; r += 1) {
      let s = Pd[r];
      if (e[s]) {
        let i = t[s] / e[s];
        if (!ua(i) || n !== null && n !== i) return null;
        n = i;
      } else if (t[s]) return null;
    }
    return n;
  }
  function El(t) {
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
  function hr(t, e, n) {
    if (t === e) return true;
    let r = t.length, s;
    if (r !== e.length) return false;
    for (s = 0; s < r; s += 1) if (!(n ? n(t[s], e[s]) : t[s] === e[s])) return false;
    return true;
  }
  const jS = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
  ];
  function Ld(t, e) {
    let n = sr(t);
    return n[2] += e * 7, Ht(n);
  }
  function ct(t, e) {
    let n = sr(t);
    return n[2] += e, Ht(n);
  }
  function mr(t, e) {
    let n = sr(t);
    return n[6] += e, Ht(n);
  }
  function VS(t, e) {
    return vr(t, e) / 7;
  }
  function vr(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60 * 24);
  }
  function WS(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60 * 60);
  }
  function US(t, e) {
    return (e.valueOf() - t.valueOf()) / (1e3 * 60);
  }
  function BS(t, e) {
    return (e.valueOf() - t.valueOf()) / 1e3;
  }
  function zS(t, e) {
    let n = Xe(t), r = Xe(e);
    return {
      years: 0,
      months: 0,
      days: Math.round(vr(n, r)),
      milliseconds: e.valueOf() - r.valueOf() - (t.valueOf() - n.valueOf())
    };
  }
  function $S(t, e) {
    let n = ka(t, e);
    return n !== null && n % 7 === 0 ? n / 7 : null;
  }
  function ka(t, e) {
    return ir(t) === ir(e) ? Math.round(vr(t, e)) : null;
  }
  function Xe(t) {
    return Ht([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ]);
  }
  function GS(t) {
    return Ht([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours()
    ]);
  }
  function qS(t) {
    return Ht([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours(),
      t.getUTCMinutes()
    ]);
  }
  function ZS(t) {
    return Ht([
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate(),
      t.getUTCHours(),
      t.getUTCMinutes(),
      t.getUTCSeconds()
    ]);
  }
  function QS(t, e, n) {
    let r = t.getUTCFullYear(), s = tl(t, r, e, n);
    if (s < 1) return tl(t, r - 1, e, n);
    let i = tl(t, r + 1, e, n);
    return i >= 1 ? Math.min(s, i) : s;
  }
  function tl(t, e, n, r) {
    let s = Ht([
      e,
      0,
      1 + XS(e, n, r)
    ]), i = Xe(t), a = Math.round(vr(s, i));
    return Math.floor(a / 7) + 1;
  }
  function XS(t, e, n) {
    let r = 7 + e - n;
    return -((7 + Ht([
      t,
      0,
      r
    ]).getUTCDay() - e) % 7) + r - 1;
  }
  function Yd(t) {
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
  function Fd(t) {
    return new Date(t[0], t[1] || 0, t[2] == null ? 1 : t[2], t[3] || 0, t[4] || 0, t[5] || 0);
  }
  function sr(t) {
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
  function Ht(t) {
    return t.length === 1 && (t = t.concat([
      0
    ])), new Date(Date.UTC(...t));
  }
  function Fh(t) {
    return !isNaN(t.valueOf());
  }
  function ir(t) {
    return t.getUTCHours() * 1e3 * 60 * 60 + t.getUTCMinutes() * 1e3 * 60 + t.getUTCSeconds() * 1e3 + t.getUTCMilliseconds();
  }
  function Hh(t, e, n = false) {
    let r = t.toISOString();
    return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (e == null ? r = r.replace("Z", "") : e !== 0 && (r = r.replace("Z", ic(e, true)))), r;
  }
  function Di(t) {
    return t.toISOString().replace(/T.*$/, "");
  }
  function JS(t) {
    return t.toISOString().match(/^\d{4}-\d{2}/)[0];
  }
  function KS(t) {
    return fs(t.getUTCHours(), 2) + ":" + fs(t.getUTCMinutes(), 2) + ":" + fs(t.getUTCSeconds(), 2);
  }
  function ic(t, e = false) {
    let n = t < 0 ? "-" : "+", r = Math.abs(t), s = Math.floor(r / 60), i = Math.round(r % 60);
    return e ? `${n + fs(s, 2)}:${fs(i, 2)}` : `GMT${n}${s}${i ? `:${fs(i, 2)}` : ""}`;
  }
  function Me(t, e, n) {
    let r, s;
    return function(...i) {
      if (!r) s = t.apply(this, i);
      else if (!hr(r, i)) {
        let a = t.apply(this, i);
        (!e || !e(a, s)) && (s = a);
      }
      return r = i, s;
    };
  }
  function da(t, e, n) {
    let r, s;
    return (i) => (r ? an(r, i) || (s = t.call(this, i)) : s = t.call(this, i), r = i, s);
  }
  const nl = {
    week: 3,
    separator: 9,
    omitZeroMinute: 9,
    meridiem: 9,
    omitCommas: 9
  }, xa = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1
  }, Ki = /\s*([ap])\.?m\.?/i, e_ = /,/g, t_ = /\s+/g, n_ = /\u200e/g, r_ = /UTC|GMT/;
  class s_ {
    constructor(e) {
      let n = {}, r = {}, s = 9;
      for (let i in e) i in nl ? (r[i] = e[i], nl[i] < 9 && (s = Math.min(nl[i], s))) : (n[i] = e[i], i in xa && (s = Math.min(xa[i], s)));
      this.standardDateProps = n, this.extendedSettings = r, this.smallestUnitNum = s, this.buildFormattingFunc = Me(Hd);
    }
    format(e, n) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, n)(e);
    }
    formatRange(e, n, r, s) {
      let { standardDateProps: i, extendedSettings: a } = this, l = u_(e.marker, n.marker, r.calendarSystem);
      if (!l) return this.format(e, r);
      let c = l;
      c > 1 && (i.year === "numeric" || i.year === "2-digit") && (i.month === "numeric" || i.month === "2-digit") && (i.day === "numeric" || i.day === "2-digit") && (c = 1);
      let d = this.format(e, r), f = this.format(n, r);
      if (d === f) return d;
      let m = d_(i, c), g = Hd(m, a, r), y = g(e), v = g(n), S = f_(d, y, f, v), b = a.separator || s || r.defaultSeparator || "";
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
  function Hd(t, e, n) {
    let r = Object.keys(t).length;
    return r === 1 && t.timeZoneName === "short" ? (s) => ic(s.timeZoneOffset) : r === 0 && e.week ? (s) => c_(n.computeWeekNumber(s.marker), n.weekText, n.weekTextLong, n.locale, e.week) : i_(t, e, n);
  }
  function i_(t, e, n) {
    t = Object.assign({}, t), e = Object.assign({}, e), a_(t, e), t.timeZone = "UTC";
    let r = new Intl.DateTimeFormat(n.locale.codes, t), s;
    if (e.omitZeroMinute) {
      let i = Object.assign({}, t);
      delete i.minute, s = new Intl.DateTimeFormat(n.locale.codes, i);
    }
    return (i) => {
      let { marker: a } = i, l;
      s && !a.getUTCMinutes() ? l = s : l = r;
      let c = l.format(a);
      return o_(c, i, t, e, n);
    };
  }
  function a_(t, e) {
    t.timeZoneName && (t.hour || (t.hour = "2-digit"), t.minute || (t.minute = "2-digit")), t.timeZoneName === "long" && (t.timeZoneName = "short"), e.omitZeroMinute && (t.second || t.millisecond) && delete e.omitZeroMinute;
  }
  function o_(t, e, n, r, s) {
    return t = t.replace(n_, ""), n.timeZoneName === "short" && (t = l_(t, s.timeZone === "UTC" || e.timeZoneOffset == null ? "UTC" : ic(e.timeZoneOffset))), r.omitCommas && (t = t.replace(e_, "").trim()), r.omitZeroMinute && (t = t.replace(":00", "")), r.meridiem === false ? t = t.replace(Ki, "").trim() : r.meridiem === "narrow" ? t = t.replace(Ki, (i, a) => a.toLocaleLowerCase()) : r.meridiem === "short" ? t = t.replace(Ki, (i, a) => `${a.toLocaleLowerCase()}m`) : r.meridiem === "lowercase" && (t = t.replace(Ki, (i) => i.toLocaleLowerCase())), t = t.replace(t_, " "), t = t.trim(), t;
  }
  function l_(t, e) {
    let n = false;
    return t = t.replace(r_, () => (n = true, e)), n || (t += ` ${e}`), t;
  }
  function c_(t, e, n, r, s) {
    let i = [];
    return s === "long" ? i.push(n) : (s === "short" || s === "narrow") && i.push(e), (s === "long" || s === "short") && i.push(" "), i.push(r.simpleNumberFormat.format(t)), r.options.direction === "rtl" && i.reverse(), i.join("");
  }
  function u_(t, e, n) {
    return n.getMarkerYear(t) !== n.getMarkerYear(e) ? 5 : n.getMarkerMonth(t) !== n.getMarkerMonth(e) ? 4 : n.getMarkerDay(t) !== n.getMarkerDay(e) ? 2 : ir(t) !== ir(e) ? 1 : 0;
  }
  function d_(t, e) {
    let n = {};
    for (let r in t) (!(r in xa) || xa[r] <= e) && (n[r] = t[r]);
    return n;
  }
  function f_(t, e, n, r) {
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
  function jd(t, e) {
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
  function Ta(t, e, n, r) {
    let s = jd(t, n.calendarSystem), i = e ? jd(e, n.calendarSystem) : null;
    return {
      date: s,
      start: s,
      end: i,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator
    };
  }
  class h_ {
    constructor(e) {
      this.cmdStr = e;
    }
    format(e, n, r) {
      return n.cmdFormatter(this.cmdStr, Ta(e, null, n, r));
    }
    formatRange(e, n, r, s) {
      return r.cmdFormatter(this.cmdStr, Ta(e, n, r, s));
    }
  }
  class m_ {
    constructor(e) {
      this.func = e;
    }
    format(e, n, r) {
      return this.func(Ta(e, null, n, r));
    }
    formatRange(e, n, r, s) {
      return this.func(Ta(e, n, r, s));
    }
  }
  function tt(t) {
    return typeof t == "object" && t ? new s_(t) : typeof t == "string" ? new h_(t) : typeof t == "function" ? new m_(t) : null;
  }
  const Vd = {
    navLinkDayClick: U,
    navLinkWeekClick: U,
    duration: Pe,
    bootstrapFontAwesome: U,
    buttonIcons: U,
    customButtons: U,
    defaultAllDayEventDuration: Pe,
    defaultTimedEventDuration: Pe,
    nextDayThreshold: Pe,
    scrollTime: Pe,
    scrollTimeReset: Boolean,
    slotMinTime: Pe,
    slotMaxTime: Pe,
    dayPopoverFormat: tt,
    slotDuration: Pe,
    snapDuration: Pe,
    headerToolbar: U,
    footerToolbar: U,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: tt,
    dayHeaderClassNames: U,
    dayHeaderContent: U,
    dayHeaderDidMount: U,
    dayHeaderWillUnmount: U,
    dayCellClassNames: U,
    dayCellContent: U,
    dayCellDidMount: U,
    dayCellWillUnmount: U,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: U,
    weekNumbers: Boolean,
    weekNumberClassNames: U,
    weekNumberContent: U,
    weekNumberDidMount: U,
    weekNumberWillUnmount: U,
    editable: Boolean,
    viewClassNames: U,
    viewDidMount: U,
    viewWillUnmount: U,
    nowIndicator: Boolean,
    nowIndicatorSnap: U,
    nowIndicatorClassNames: U,
    nowIndicatorContent: U,
    nowIndicatorDidMount: U,
    nowIndicatorWillUnmount: U,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: U,
    locale: U,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: U,
    eventOrder: MS,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: U,
    contentHeight: U,
    direction: String,
    weekNumberFormat: tt,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    weekTextLong: String,
    progressiveEventRendering: Boolean,
    businessHours: U,
    initialDate: U,
    now: U,
    eventDataTransform: U,
    stickyHeaderDates: U,
    stickyFooterScrollbar: U,
    viewHeight: U,
    defaultAllDay: Boolean,
    eventSourceFailure: U,
    eventSourceSuccess: U,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: U,
    eventConstraint: U,
    eventAllow: U,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: U,
    eventContent: U,
    eventDidMount: U,
    eventWillUnmount: U,
    selectConstraint: U,
    selectOverlap: U,
    selectAllow: U,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: U,
    slotLaneClassNames: U,
    slotLaneContent: U,
    slotLaneDidMount: U,
    slotLaneWillUnmount: U,
    slotLabelClassNames: U,
    slotLabelContent: U,
    slotLabelDidMount: U,
    slotLabelWillUnmount: U,
    dayMaxEvents: U,
    dayMaxEventRows: U,
    dayMinWidth: Number,
    slotLabelInterval: Pe,
    allDayText: String,
    allDayClassNames: U,
    allDayContent: U,
    allDayDidMount: U,
    allDayWillUnmount: U,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: tt,
    rerenderDelay: Number,
    moreLinkText: U,
    moreLinkHint: U,
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
    plugins: U,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: Pe,
    hiddenDays: U,
    fixedWeekCount: Boolean,
    validRange: U,
    visibleRange: U,
    titleFormat: U,
    eventInteractive: Boolean,
    noEventsText: String,
    viewHint: U,
    navLinkHint: U,
    closeHint: String,
    timeHint: String,
    eventHint: String,
    moreLinkClick: U,
    moreLinkClassNames: U,
    moreLinkContent: U,
    moreLinkDidMount: U,
    moreLinkWillUnmount: U,
    monthStartFormat: tt,
    handleCustomRendering: U,
    customRenderingMetaMap: U,
    customRenderingReplaces: Boolean
  }, Ir = {
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
  }, Wd = {
    datesSet: U,
    eventsSet: U,
    eventAdd: U,
    eventChange: U,
    eventRemove: U,
    windowResize: U,
    eventClick: U,
    eventMouseEnter: U,
    eventMouseLeave: U,
    select: U,
    unselect: U,
    loading: U,
    _unmount: U,
    _beforeprint: U,
    _afterprint: U,
    _noEventDrop: U,
    _noEventResize: U,
    _resize: U,
    _scrollRequest: U
  }, Ud = {
    buttonText: U,
    buttonHints: U,
    views: U,
    plugins: U,
    initialEvents: U,
    events: U,
    eventSources: U
  }, Cr = {
    headerToolbar: Ar,
    footerToolbar: Ar,
    buttonText: Ar,
    buttonHints: Ar,
    buttonIcons: Ar,
    dateIncrement: Ar,
    plugins: ea,
    events: ea,
    eventSources: ea,
    resources: ea
  };
  function Ar(t, e) {
    return typeof t == "object" && typeof e == "object" && t && e ? an(t, e) : t === e;
  }
  function ea(t, e) {
    return Array.isArray(t) && Array.isArray(e) ? hr(t, e) : t === e;
  }
  const p_ = {
    type: String,
    component: U,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: U,
    usesMinMaxTime: Boolean,
    classNames: U,
    content: U,
    didMount: U,
    willUnmount: U
  };
  function rl(t) {
    return ac(t, Cr);
  }
  function eo(t, e) {
    let n = {}, r = {};
    for (let s in e) s in t && (n[s] = e[s](t[s]));
    for (let s in t) s in e || (r[s] = t[s]);
    return {
      refined: n,
      extra: r
    };
  }
  function U(t) {
    return t;
  }
  const { hasOwnProperty: Ma } = Object.prototype;
  function ac(t, e) {
    let n = {};
    if (e) {
      for (let r in e) if (e[r] === Ar) {
        let s = [];
        for (let i = t.length - 1; i >= 0; i -= 1) {
          let a = t[i][r];
          if (typeof a == "object" && a) s.unshift(a);
          else if (a !== void 0) {
            n[r] = a;
            break;
          }
        }
        s.length && (n[r] = ac(s));
      }
    }
    for (let r = t.length - 1; r >= 0; r -= 1) {
      let s = t[r];
      for (let i in s) i in n || (n[i] = s[i]);
    }
    return n;
  }
  function Yr(t, e) {
    let n = {};
    for (let r in t) e(t[r], r) && (n[r] = t[r]);
    return n;
  }
  function Gn(t, e) {
    let n = {};
    for (let r in t) n[r] = e(t[r], r);
    return n;
  }
  function jh(t) {
    let e = {};
    for (let n of t) e[n] = true;
    return e;
  }
  function oc(t) {
    let e = [];
    for (let n in t) e.push(t[n]);
    return e;
  }
  function an(t, e) {
    if (t === e) return true;
    for (let n in t) if (Ma.call(t, n) && !(n in e)) return false;
    for (let n in e) if (Ma.call(e, n) && t[n] !== e[n]) return false;
    return true;
  }
  const g_ = /^on[A-Z]/;
  function y_(t, e) {
    const n = v_(t, e);
    for (let r of n) if (!g_.test(r)) return false;
    return true;
  }
  function v_(t, e) {
    let n = [];
    for (let r in t) Ma.call(t, r) && (r in e || n.push(r));
    for (let r in e) Ma.call(e, r) && t[r] !== e[r] && n.push(r);
    return n;
  }
  function sl(t, e, n = {}) {
    if (t === e) return true;
    for (let r in e) if (!(r in t && b_(t[r], e[r], n[r]))) return false;
    for (let r in t) if (!(r in e)) return false;
    return true;
  }
  function b_(t, e, n) {
    return t === e || n === true ? true : n ? n(t, e) : false;
  }
  function w_(t, e = 0, n, r = 1) {
    let s = [];
    n == null && (n = Object.keys(t).length);
    for (let i = e; i < n; i += r) {
      let a = t[i];
      a !== void 0 && s.push(a);
    }
    return s;
  }
  let Vh = {};
  function S_(t, e) {
    Vh[t] = e;
  }
  function __(t) {
    return new Vh[t]();
  }
  class D_ {
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
      return Ht(e);
    }
    markerToArray(e) {
      return sr(e);
    }
  }
  S_("gregory", D_);
  const k_ = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function to(t) {
    let e = k_.exec(t);
    if (e) {
      let n = new Date(Date.UTC(Number(e[1]), e[3] ? Number(e[3]) - 1 : 0, Number(e[5] || 1), Number(e[7] || 0), Number(e[8] || 0), Number(e[10] || 0), e[12] ? +`0.${e[12]}` * 1e3 : 0));
      if (Fh(n)) {
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
  class x_ {
    constructor(e) {
      let n = this.timeZone = e.timeZone, r = n !== "local" && n !== "UTC";
      e.namedTimeZoneImpl && r && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(n)), this.canComputeOffset = !!(!r || this.namedTimeZoneImpl), this.calendarSystem = __(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, e.weekNumberCalculation === "ISO" && (this.weekDow = 1, this.weekDoy = 4), typeof e.firstDay == "number" && (this.weekDow = e.firstDay), typeof e.weekNumberCalculation == "function" && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = e.weekText != null ? e.weekText : e.locale.options.weekText, this.weekTextLong = (e.weekTextLong != null ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator;
    }
    createMarker(e) {
      let n = this.createMarkerMeta(e);
      return n === null ? null : n.marker;
    }
    createNowMarker() {
      return this.canComputeOffset ? this.timestampToMarker((/* @__PURE__ */ new Date()).valueOf()) : Ht(Yd(/* @__PURE__ */ new Date()));
    }
    createMarkerMeta(e) {
      if (typeof e == "string") return this.parse(e);
      let n = null;
      return typeof e == "number" ? n = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (n = this.timestampToMarker(e))) : Array.isArray(e) && (n = Ht(e)), n === null || !Fh(n) ? null : {
        marker: n,
        isTimeUnspecified: false,
        forcedTzo: null
      };
    }
    parse(e) {
      let n = to(e);
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
      return ir(e) === ir(n) && r.getMarkerDay(e) === r.getMarkerDay(n) && r.getMarkerMonth(e) === r.getMarkerMonth(n) ? r.getMarkerYear(n) - r.getMarkerYear(e) : null;
    }
    diffWholeMonths(e, n) {
      let { calendarSystem: r } = this;
      return ir(e) === ir(n) && r.getMarkerDay(e) === r.getMarkerDay(n) ? r.getMarkerMonth(n) - r.getMarkerMonth(e) + (r.getMarkerYear(n) - r.getMarkerYear(e)) * 12 : null;
    }
    greatestWholeUnit(e, n) {
      let r = this.diffWholeYears(e, n);
      return r !== null ? {
        unit: "year",
        value: r
      } : (r = this.diffWholeMonths(e, n), r !== null ? {
        unit: "month",
        value: r
      } : (r = $S(e, n), r !== null ? {
        unit: "week",
        value: r
      } : (r = ka(e, n), r !== null ? {
        unit: "day",
        value: r
      } : (r = WS(e, n), ua(r) ? {
        unit: "hour",
        value: r
      } : (r = US(e, n), ua(r) ? {
        unit: "minute",
        value: r
      } : (r = BS(e, n), ua(r) ? {
        unit: "second",
        value: r
      } : {
        unit: "millisecond",
        value: n.valueOf() - e.valueOf()
      }))))));
    }
    countDurationsBetween(e, n, r) {
      let s;
      return r.years && (s = this.diffWholeYears(e, n), s !== null) ? s / FS(r) : r.months && (s = this.diffWholeMonths(e, n), s !== null) ? s / HS(r) : r.days && (s = ka(e, n), s !== null) ? s / hs(r) : (n.valueOf() - e.valueOf()) / nn(r);
    }
    startOf(e, n) {
      return n === "year" ? this.startOfYear(e) : n === "month" ? this.startOfMonth(e) : n === "week" ? this.startOfWeek(e) : n === "day" ? Xe(e) : n === "hour" ? GS(e) : n === "minute" ? qS(e) : n === "second" ? ZS(e) : null;
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
      return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : QS(e, this.weekDow, this.weekDoy);
    }
    format(e, n, r = {}) {
      return n.format({
        marker: e,
        timeZoneOffset: r.forcedTzo != null ? r.forcedTzo : this.offsetForMarker(e)
      }, this);
    }
    formatRange(e, n, r, s = {}) {
      return s.isEndExclusive && (n = mr(n, -1)), r.formatRange({
        marker: e,
        timeZoneOffset: s.forcedStartTzo != null ? s.forcedStartTzo : this.offsetForMarker(e)
      }, {
        marker: n,
        timeZoneOffset: s.forcedEndTzo != null ? s.forcedEndTzo : this.offsetForMarker(n)
      }, this, s.defaultSeparator);
    }
    formatIso(e, n = {}) {
      let r = null;
      return n.omitTimeZoneOffset || (n.forcedTzo != null ? r = n.forcedTzo : r = this.offsetForMarker(e)), Hh(e, r, n.omitTime);
    }
    timestampToMarker(e) {
      return this.timeZone === "local" ? Ht(Yd(new Date(e))) : this.timeZone === "UTC" || !this.namedTimeZoneImpl ? new Date(e) : Ht(this.namedTimeZoneImpl.timestampToArray(e));
    }
    offsetForMarker(e) {
      return this.timeZone === "local" ? -Fd(sr(e)).getTimezoneOffset() : this.timeZone === "UTC" ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(sr(e)) : null;
    }
    toDate(e, n) {
      return this.timeZone === "local" ? Fd(sr(e)) : this.timeZone === "UTC" ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - this.namedTimeZoneImpl.offsetForArray(sr(e)) * 1e3 * 60) : new Date(e.valueOf() - (n || 0));
    }
  }
  class ki {
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
  ki.prototype.classes = {};
  ki.prototype.iconClasses = {};
  ki.prototype.baseIconClass = "";
  ki.prototype.iconOverridePrefix = "";
  function Ea(t) {
    t();
    let e = Ee.debounceRendering, n = [];
    function r(s) {
      n.push(s);
    }
    for (Ee.debounceRendering = r, ci(M(T_, {}), document.createElement("div")); n.length; ) n.shift()();
    Ee.debounceRendering = e;
  }
  class T_ extends Vt {
    render() {
      return M("div", {});
    }
    componentDidMount() {
      this.setState({});
    }
  }
  function Wh(t) {
    let e = Jw(t), n = e.Provider;
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
  class M_ {
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
  const Zn = Wh({});
  function E_(t, e, n, r, s, i, a, l, c, d, f, m, g, y) {
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
        return new M_(v, f, Pe(n.scrollTime), n.scrollTimeReset);
      },
      registerInteractiveComponent: g,
      unregisterInteractiveComponent: y
    };
  }
  class Ur extends Vt {
    shouldComponentUpdate(e, n) {
      return !sl(this.props, e, this.propEquality) || !sl(this.state, n, this.stateEquality);
    }
    safeSetState(e) {
      sl(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
    }
  }
  Ur.addPropsEquality = C_;
  Ur.addStateEquality = A_;
  Ur.contextType = Zn;
  Ur.prototype.propEquality = {};
  Ur.prototype.stateEquality = {};
  class ze extends Ur {
  }
  ze.contextType = Zn;
  function C_(t) {
    let e = Object.create(this.prototype.propEquality);
    Object.assign(e, t), this.prototype.propEquality = e;
  }
  function A_(t) {
    let e = Object.create(this.prototype.stateEquality);
    Object.assign(e, t), this.prototype.stateEquality = e;
  }
  function Sn(t, e) {
    typeof t == "function" ? t(e) : t && (t.current = e);
  }
  class lc extends ze {
    constructor() {
      super(...arguments), this.id = Wr(), this.queuedDomNodes = [], this.currentDomNodes = [], this.handleEl = (e) => {
        const { options: n } = this.context, { generatorName: r } = this.props;
        (!n.customRenderingReplaces || !Cl(r, n)) && this.updateElRef(e);
      }, this.updateElRef = (e) => {
        this.props.elRef && Sn(this.props.elRef, e);
      };
    }
    render() {
      const { props: e, context: n } = this, { options: r } = n, { customGenerator: s, defaultGenerator: i, renderProps: a } = e, l = Uh(e, [], this.handleEl);
      let c = false, d, f = [], m;
      if (s != null) {
        const g = typeof s == "function" ? s(a, M) : s;
        if (g === true) c = true;
        else {
          const y = g && typeof g == "object";
          y && "html" in g ? l.dangerouslySetInnerHTML = {
            __html: g.html
          } : y && "domNodes" in g ? f = Array.prototype.slice.call(g.domNodes) : (y ? fh(g) : typeof g != "function") ? d = g : m = g;
        }
      } else c = !Cl(e.generatorName, r);
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
          elClasses: (r.elClasses || []).filter(R_)
        }));
      }
    }
    applyQueueudDomNodes() {
      const { queuedDomNodes: e, currentDomNodes: n } = this, r = this.base;
      if (!hr(e, n)) {
        n.forEach(rc);
        for (let s of e) r.appendChild(s);
        this.currentDomNodes = e;
      }
    }
  }
  lc.addPropsEquality({
    elClasses: hr,
    elStyle: an,
    elAttrs: y_,
    renderProps: an
  });
  function Cl(t, e) {
    var n;
    return !!(e.handleCustomRendering && t && (!((n = e.customRenderingMetaMap) === null || n === void 0) && n[t]));
  }
  function Uh(t, e, n) {
    const r = Object.assign(Object.assign({}, t.elAttrs), {
      ref: n
    });
    return (t.elClasses || e) && (r.className = (t.elClasses || []).concat(e || []).concat(r.className || []).filter(Boolean).join(" ")), t.elStyle && (r.style = t.elStyle), r;
  }
  function R_(t) {
    return !!t;
  }
  const Bh = Wh(0);
  class Ot extends Vt {
    constructor() {
      super(...arguments), this.InnerContent = O_.bind(void 0, this), this.handleEl = (e) => {
        this.el = e, this.props.elRef && (Sn(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
      };
    }
    render() {
      const { props: e } = this, n = I_(e.classNameGenerator, e.renderProps);
      if (e.children) {
        const r = Uh(e, n, this.handleEl), s = e.children(this.InnerContent, e.renderProps, r);
        return e.elTag ? M(e.elTag, r, s) : s;
      } else return M(lc, Object.assign(Object.assign({}, e), {
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
  Ot.contextType = Bh;
  function O_(t, e) {
    const n = t.props;
    return M(lc, Object.assign({
      renderProps: n.renderProps,
      generatorName: n.generatorName,
      customGenerator: n.customGenerator,
      defaultGenerator: n.defaultGenerator,
      renderId: t.context
    }, e));
  }
  function I_(t, e) {
    const n = typeof t == "function" ? t(e) : t || [];
    return typeof n == "string" ? [
      n
    ] : n;
  }
  class ui extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, s = {
        view: n.viewApi
      };
      return M(Ot, {
        elRef: e.elRef,
        elTag: e.elTag || "div",
        elAttrs: e.elAttrs,
        elClasses: [
          ...zh(e.viewSpec),
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
  function zh(t) {
    return [
      `fc-${t.type}-view`,
      "fc-view"
    ];
  }
  function P_(t, e) {
    let n = null, r = null;
    return t.start && (n = e.createMarker(t.start)), t.end && (r = e.createMarker(t.end)), !n && !r || n && r && r < n ? null : {
      start: n,
      end: r
    };
  }
  function Bd(t, e) {
    let n = [], { start: r } = e, s, i;
    for (t.sort(N_), s = 0; s < t.length; s += 1) i = t[s], i.start > r && n.push({
      start: r,
      end: i.start
    }), i.end > r && (r = i.end);
    return r < e.end && n.push({
      start: r,
      end: e.end
    }), n;
  }
  function N_(t, e) {
    return t.start.valueOf() - e.start.valueOf();
  }
  function pr(t, e) {
    let { start: n, end: r } = t, s = null;
    return e.start !== null && (n === null ? n = e.start : n = new Date(Math.max(n.valueOf(), e.start.valueOf()))), e.end != null && (r === null ? r = e.end : r = new Date(Math.min(r.valueOf(), e.end.valueOf()))), (n === null || r === null || n < r) && (s = {
      start: n,
      end: r
    }), s;
  }
  function L_(t, e) {
    return (t.start === null ? null : t.start.valueOf()) === (e.start === null ? null : e.start.valueOf()) && (t.end === null ? null : t.end.valueOf()) === (e.end === null ? null : e.end.valueOf());
  }
  function cc(t, e) {
    return (t.end === null || e.start === null || t.end > e.start) && (t.start === null || e.end === null || t.start < e.end);
  }
  function no(t, e) {
    return (t.start === null || e.start !== null && e.start >= t.start) && (t.end === null || e.end !== null && e.end <= t.end);
  }
  function Wn(t, e) {
    return (t.start === null || e >= t.start) && (t.end === null || e < t.end);
  }
  function Y_(t, e) {
    return e.start != null && t < e.start ? e.start : e.end != null && t >= e.end ? new Date(e.end.valueOf() - 1) : t;
  }
  function $h(t) {
    let e = Math.floor(vr(t.start, t.end)) || 1, n = Xe(t.start), r = ct(n, e);
    return {
      start: n,
      end: r
    };
  }
  function uc(t, e = Pe(0)) {
    let n = null, r = null;
    if (t.end) {
      r = Xe(t.end);
      let s = t.end.valueOf() - r.valueOf();
      s && s >= nn(e) && (r = ct(r, 1));
    }
    return t.start && (n = Xe(t.start), r && r <= n && (r = ct(n, 1))), {
      start: n,
      end: r
    };
  }
  function F_(t) {
    let e = uc(t);
    return vr(e.start, e.end) > 1;
  }
  function os(t, e, n, r) {
    return r === "year" ? Pe(n.diffWholeYears(t, e), "year") : r === "month" ? Pe(n.diffWholeMonths(t, e), "month") : zS(t, e);
  }
  class Gh {
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
      return i = this.buildValidRange(), i = this.trimHiddenDays(i), r && (e = Y_(e, i)), a = this.buildCurrentRangeInfo(e, n), l = /^(year|month|week|day)$/.test(a.unit), c = this.buildRenderRange(this.trimHiddenDays(a.range), a.unit, l), c = this.trimHiddenDays(c), d = c, s.showNonCurrentDates || (d = pr(d, a.range)), d = this.adjustActiveRange(d), d = pr(d, i), f = cc(a.range, i), Wn(c, e) || (e = c.start), {
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
      return r.duration ? (s = r.duration, i = r.durationUnit, a = this.buildRangeFromDuration(e, n, s, i)) : (l = this.props.dayCount) ? (i = "day", a = this.buildRangeFromDayCount(e, n, l)) : (a = this.buildCustomVisibleRange(e)) ? i = r.dateEnv.greatestWholeUnit(a.start, a.end).unit : (s = this.getFallbackDuration(), i = El(s).unit, a = this.buildRangeFromDuration(e, n, s, i)), {
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
      return r && (hs(s) < 0 && (a = Xe(a), a = n.add(a, s)), hs(i) > 1 && (l = Xe(l), l = ct(l, -1), l = n.add(l, i))), {
        start: a,
        end: l
      };
    }
    buildRangeFromDuration(e, n, r, s) {
      let { dateEnv: i, dateAlignment: a } = this.props, l, c, d;
      if (!a) {
        let { dateIncrement: m } = this.props;
        m && nn(m) < nn(r) ? a = El(m).unit : a = s;
      }
      hs(r) <= 1 && this.isHiddenDay(l) && (l = this.skipHiddenDays(l, n), l = Xe(l));
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
        c = ct(c, 1), this.isHiddenDay(c) || (a += 1);
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
        let n = P_(e, this.props.dateEnv);
        return n && (n = uc(n)), n;
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
      for (; this.isHiddenDayHash[(e.getUTCDay() + (r ? n : 0) + 7) % 7]; ) e = ct(e, n);
      return e;
    }
  }
  function ro(t, e, n, r) {
    return {
      instanceId: Wr(),
      defId: t,
      range: e,
      forcedStartTzo: n ?? null,
      forcedEndTzo: r ?? null
    };
  }
  function H_(t, e, n, r) {
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
  function Fr(t, e, n) {
    let { dateEnv: r, pluginHooks: s, options: i } = n, { defs: a, instances: l } = t;
    l = Yr(l, (c) => !a[c.defId].recurringDef);
    for (let c in a) {
      let d = a[c];
      if (d.recurringDef) {
        let { duration: f } = d.recurringDef;
        f || (f = d.allDay ? i.defaultAllDayEventDuration : i.defaultTimedEventDuration);
        let m = j_(d, f, e, r, s.recurringTypes);
        for (let g of m) {
          let y = ro(c, {
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
  function j_(t, e, n, r, s) {
    let a = s[t.recurringDef.typeId].expand(t.recurringDef.typeData, {
      start: r.subtract(n.start, e),
      end: n.end
    }, r);
    return t.allDay && (a = a.map(Xe)), a;
  }
  const fa = {
    id: String,
    groupId: String,
    title: String,
    url: String,
    interactive: Boolean
  }, qh = {
    start: U,
    end: U,
    date: U,
    allDay: Boolean
  }, V_ = Object.assign(Object.assign(Object.assign({}, fa), qh), {
    extendedProps: U
  });
  function Zh(t, e, n, r, s = fc(n), i, a) {
    let { refined: l, extra: c } = dc(t, n, s), d = U_(e, n), f = H_(l, d, n.dateEnv, n.pluginHooks.recurringTypes);
    if (f) {
      let g = Ca(l, c, e ? e.sourceId : "", f.allDay, !!f.duration, n, i);
      return g.recurringDef = {
        typeId: f.typeId,
        typeData: f.typeData,
        duration: f.duration
      }, {
        def: g,
        instance: null
      };
    }
    let m = W_(l, d, n, r);
    if (m) {
      let g = Ca(l, c, e ? e.sourceId : "", m.allDay, m.hasEnd, n, i), y = ro(g.defId, m.range, m.forcedStartTzo, m.forcedEndTzo);
      return a && g.publicId && a[g.publicId] && (y.instanceId = a[g.publicId]), {
        def: g,
        instance: y
      };
    }
    return null;
  }
  function dc(t, e, n = fc(e)) {
    return eo(t, n);
  }
  function fc(t) {
    return Object.assign(Object.assign(Object.assign({}, Aa), V_), t.pluginHooks.eventRefiners);
  }
  function Ca(t, e, n, r, s, i, a) {
    let l = {
      title: t.title || "",
      groupId: t.groupId || "",
      publicId: t.id || "",
      url: t.url || "",
      recurringDef: null,
      defId: (a && t.id ? a[t.id] : "") || Wr(),
      sourceId: n,
      allDay: r,
      hasEnd: s,
      interactive: t.interactive,
      ui: Ra(t, i),
      extendedProps: Object.assign(Object.assign({}, t.extendedProps || {}), e)
    };
    for (let c of i.pluginHooks.eventDefMemberAdders) Object.assign(l, c(t));
    return Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), l;
  }
  function W_(t, e, n, r) {
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
  function U_(t, e) {
    let n = null;
    return t && (n = t.defaultAllDay), n == null && (n = e.options.defaultAllDay), n;
  }
  function di(t, e, n, r, s, i) {
    let a = At(), l = fc(n);
    for (let c of t) {
      let d = Zh(c, e, n, r, l, s, i);
      d && fi(d, a);
    }
    return a;
  }
  function fi(t, e = At()) {
    return e.defs[t.def.defId] = t.def, t.instance && (e.instances[t.instance.instanceId] = t.instance), e;
  }
  function hc(t, e) {
    let n = t.instances[e];
    if (n) {
      let r = t.defs[n.defId], s = so(t, (i) => B_(r, i));
      return s.defs[r.defId] = r, s.instances[n.instanceId] = n, s;
    }
    return At();
  }
  function B_(t, e) {
    return !!(t.groupId && t.groupId === e.groupId);
  }
  function At() {
    return {
      defs: {},
      instances: {}
    };
  }
  function mc(t, e) {
    return {
      defs: Object.assign(Object.assign({}, t.defs), e.defs),
      instances: Object.assign(Object.assign({}, t.instances), e.instances)
    };
  }
  function so(t, e) {
    let n = Yr(t.defs, e), r = Yr(t.instances, (s) => n[s.defId]);
    return {
      defs: n,
      instances: r
    };
  }
  function z_(t, e) {
    let { defs: n, instances: r } = t, s = {}, i = {};
    for (let a in n) e.defs[a] || (s[a] = n[a]);
    for (let a in r) !e.instances[a] && s[r[a].defId] && (i[a] = r[a]);
    return {
      defs: s,
      instances: i
    };
  }
  function $_(t, e) {
    return Array.isArray(t) ? di(t, null, e, true) : typeof t == "object" && t ? di([
      t
    ], null, e, true) : t != null ? String(t) : null;
  }
  function zd(t) {
    return Array.isArray(t) ? t : typeof t == "string" ? t.split(/\s+/) : [];
  }
  const Aa = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: U,
    overlap: U,
    allow: U,
    className: zd,
    classNames: zd,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String
  }, G_ = {
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
  function Ra(t, e) {
    let n = $_(t.constraint, e);
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
  function Qh(t) {
    return t.reduce(q_, G_);
  }
  function q_(t, e) {
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
  const Z_ = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: U,
    eventDataTransform: U,
    success: U,
    failure: U
  };
  function Xh(t, e, n = Jh(e)) {
    let r;
    if (typeof t == "string" ? r = {
      url: t
    } : typeof t == "function" || Array.isArray(t) ? r = {
      events: t
    } : typeof t == "object" && t && (r = t), r) {
      let { refined: s, extra: i } = eo(r, n), a = Q_(s, e);
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
        sourceId: Wr(),
        sourceDefId: a.sourceDefId,
        meta: a.meta,
        ui: Ra(s, e),
        extendedProps: i
      };
    }
    return null;
  }
  function Jh(t) {
    return Object.assign(Object.assign(Object.assign({}, Aa), Z_), t.pluginHooks.eventSourceRefiners);
  }
  function Q_(t, e) {
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
  function X_(t, e, n, r, s) {
    switch (e.type) {
      case "RECEIVE_EVENTS":
        return J_(t, n[e.sourceId], e.fetchId, e.fetchRange, e.rawEvents, s);
      case "RESET_RAW_EVENTS":
        return K_(t, n[e.sourceId], e.rawEvents, r.activeRange, s);
      case "ADD_EVENTS":
        return eD(t, e.eventStore, r ? r.activeRange : null, s);
      case "RESET_EVENTS":
        return e.eventStore;
      case "MERGE_EVENTS":
        return mc(t, e.eventStore);
      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return r ? Fr(t, r.activeRange, s) : t;
      case "REMOVE_EVENTS":
        return z_(t, e.eventStore);
      case "REMOVE_EVENT_SOURCE":
        return em(t, e.sourceId);
      case "REMOVE_ALL_EVENT_SOURCES":
        return so(t, (i) => !i.sourceId);
      case "REMOVE_ALL_EVENTS":
        return At();
      default:
        return t;
    }
  }
  function J_(t, e, n, r, s, i) {
    if (e && n === e.latestFetchId) {
      let a = di(Kh(s, e, i), e, i);
      return r && (a = Fr(a, r, i)), mc(em(t, e.sourceId), a);
    }
    return t;
  }
  function K_(t, e, n, r, s) {
    const { defIdMap: i, instanceIdMap: a } = nD(t);
    let l = di(Kh(n, e, s), e, s, false, i, a);
    return Fr(l, r, s);
  }
  function Kh(t, e, n) {
    let r = n.options.eventDataTransform, s = e ? e.eventDataTransform : null;
    return s && (t = $d(t, s)), r && (t = $d(t, r)), t;
  }
  function $d(t, e) {
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
  function eD(t, e, n, r) {
    return n && (e = Fr(e, n, r)), mc(t, e);
  }
  function Gd(t, e, n) {
    let { defs: r } = t, s = Gn(t.instances, (i) => r[i.defId].allDay ? i : Object.assign(Object.assign({}, i), {
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
  function em(t, e) {
    return so(t, (n) => n.sourceId !== e);
  }
  function tD(t, e) {
    return {
      defs: t.defs,
      instances: Yr(t.instances, (n) => !e[n.instanceId])
    };
  }
  function nD(t) {
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
  class io {
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
      rD(this.handlers, e, n);
    }
    off(e, n) {
      sD(this.handlers, e, n);
    }
    trigger(e, ...n) {
      let r = this.handlers[e] || [], s = this.options && this.options[e], i = [].concat(s || [], r);
      for (let a of i) a.apply(this.thisContext, n);
    }
    hasHandlers(e) {
      return !!(this.handlers[e] && this.handlers[e].length || this.options && this.options[e]);
    }
  }
  function rD(t, e, n) {
    (t[e] || (t[e] = [])).push(n);
  }
  function sD(t, e, n) {
    n ? t[e] && (t[e] = t[e].filter((r) => r !== n)) : delete t[e];
  }
  const iD = {
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
  function aD(t, e) {
    return di(oD(t), null, e);
  }
  function oD(t) {
    let e;
    return t === true ? e = [
      {}
    ] : Array.isArray(t) ? e = t.filter((n) => n.daysOfWeek) : typeof t == "object" && t ? e = [
      t
    ] : e = [], e = e.map((n) => Object.assign(Object.assign({}, iD), n)), e;
  }
  function tm(t, e, n) {
    n.emitter.trigger("select", Object.assign(Object.assign({}, pc(t, n)), {
      jsEvent: e ? e.origEvent : null,
      view: n.viewApi || n.calendarApi.view
    }));
  }
  function lD(t, e) {
    e.emitter.trigger("unselect", {
      jsEvent: t ? t.origEvent : null,
      view: e.viewApi || e.calendarApi.view
    });
  }
  function pc(t, e) {
    let n = {};
    for (let r of e.pluginHooks.dateSpanTransforms) Object.assign(n, r(t, e));
    return Object.assign(n, _D(t, e.dateEnv)), n;
  }
  function Al(t, e, n) {
    let { dateEnv: r, options: s } = n, i = e;
    return t ? (i = Xe(i), i = r.add(i, s.defaultAllDayEventDuration)) : i = r.add(i, s.defaultTimedEventDuration), i;
  }
  function gc(t, e, n, r) {
    let s = Oa(t.defs, e), i = At();
    for (let a in t.defs) {
      let l = t.defs[a];
      i.defs[a] = cD(l, s[a], n, r);
    }
    for (let a in t.instances) {
      let l = t.instances[a], c = i.defs[l.defId];
      i.instances[a] = uD(l, c, s[l.defId], n, r);
    }
    return i;
  }
  function cD(t, e, n, r) {
    let s = n.standardProps || {};
    s.hasEnd == null && e.durationEditable && (n.startDelta || n.endDelta) && (s.hasEnd = true);
    let i = Object.assign(Object.assign(Object.assign({}, t), s), {
      ui: Object.assign(Object.assign({}, t.ui), s.ui)
    });
    n.extendedProps && (i.extendedProps = Object.assign(Object.assign({}, i.extendedProps), n.extendedProps));
    for (let a of r.pluginHooks.eventDefMutationAppliers) a(i, n, r);
    return !i.hasEnd && r.options.forceEventDuration && (i.hasEnd = true), i;
  }
  function uD(t, e, n, r, s) {
    let { dateEnv: i } = s, a = r.standardProps && r.standardProps.allDay === true, l = r.standardProps && r.standardProps.hasEnd === false, c = Object.assign({}, t);
    return a && (c.range = $h(c.range)), r.datesDelta && n.startEditable && (c.range = {
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
      end: Al(e.allDay, c.range.start, s)
    }), e.allDay && (c.range = {
      start: Xe(c.range.start),
      end: Xe(c.range.end)
    }), c.range.end < c.range.start && (c.range.end = Al(e.allDay, c.range.start, s)), c;
  }
  class ss {
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
  class nt {
    constructor(e, n, r) {
      this._context = e, this._def = n, this._instance = r || null;
    }
    setProp(e, n) {
      if (e in qh) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
      else if (e === "id") n = fa[e](n), this.mutate({
        standardProps: {
          publicId: n
        }
      });
      else if (e in fa) n = fa[e](n), this.mutate({
        standardProps: {
          [e]: n
        }
      });
      else if (e in Aa) {
        let r = Aa[e](n);
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
        let i = this._instance.range, a = os(i.start, s, r, n.granularity);
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
        let i = os(this._instance.range.end, s, r, n.granularity);
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
        r.allDay === true && (c = $h(c));
        let d = os(c.start, a, s, r.granularity);
        if (l) {
          let f = os(c.end, l, s, r.granularity);
          NS(d, f) ? this.mutate({
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
      let { dateEnv: n } = this._context, r = this._instance, s = tt(e);
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
        let r = this._def, s = this._context, { eventStore: i } = s.getCurrentData(), a = hc(i, n.instanceId);
        a = gc(a, {
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
        let c = new nt(s, r, n);
        this._def = a.defs[r.defId], this._instance = a.instances[n.instanceId], s.dispatch({
          type: "MERGE_EVENTS",
          eventStore: a
        }), s.emitter.trigger("eventChange", {
          oldEvent: c,
          event: this,
          relatedEvents: Pr(a, s, n),
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
      let e = this._context, n = nm(this);
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
      return e ? new ss(this._context, this._context.getCurrentData().eventSources[e]) : null;
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
  function nm(t) {
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
  function Pr(t, e, n) {
    let { defs: r, instances: s } = t, i = [], a = n ? n.instanceId : "";
    for (let l in s) {
      let c = s[l], d = r[c.defId];
      c.instanceId !== a && i.push(new nt(e, d, c));
    }
    return i;
  }
  function Rl(t, e, n, r) {
    let s = {}, i = {}, a = {}, l = [], c = [], d = Oa(t.defs, e);
    for (let f in t.defs) {
      let m = t.defs[f];
      d[m.defId].display === "inverse-background" && (m.groupId ? (s[m.groupId] = [], a[m.groupId] || (a[m.groupId] = m)) : i[f] = []);
    }
    for (let f in t.instances) {
      let m = t.instances[f], g = t.defs[m.defId], y = d[g.defId], v = m.range, S = !g.allDay && r ? uc(v, r) : v, b = pr(S, n);
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
      let m = s[f], g = Bd(m, n);
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
      let m = i[f], g = Bd(m, n);
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
  function dD(t) {
    return t.ui.display === "background" || t.ui.display === "inverse-background";
  }
  function qd(t, e) {
    t.fcSeg = e;
  }
  function _s(t) {
    return t.fcSeg || t.parentNode.fcSeg || null;
  }
  function Oa(t, e) {
    return Gn(t, (n) => rm(n, e));
  }
  function rm(t, e) {
    let n = [];
    return e[""] && n.push(e[""]), e[t.defId] && n.push(e[t.defId]), n.push(t.ui), Qh(n);
  }
  function yc(t, e) {
    let n = t.map(fD);
    return n.sort((r, s) => ES(r, s, e)), n.map((r) => r._seg);
  }
  function fD(t) {
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
  function hD(t, e) {
    let { pluginHooks: n } = e, r = n.isDraggableTransformers, { def: s, ui: i } = t.eventRange, a = i.startEditable;
    for (let l of r) a = l(a, s, i, e);
    return a;
  }
  function mD(t, e) {
    return t.isStart && t.eventRange.ui.durationEditable && e.options.eventResizableFromStart;
  }
  function pD(t, e) {
    return t.isEnd && t.eventRange.ui.durationEditable;
  }
  function ti(t, e, n, r, s, i, a) {
    let { dateEnv: l, options: c } = n, { displayEventTime: d, displayEventEnd: f } = c, m = t.eventRange.def, g = t.eventRange.instance;
    d == null && (d = r !== false), f == null && (f = s !== false);
    let y = g.range.start, v = g.range.end, S = i || t.start || t.eventRange.range.start, b = a || t.end || t.eventRange.range.end, _ = Xe(y).valueOf() === Xe(S).valueOf(), E = Xe(mr(v, -1)).valueOf() === Xe(mr(b, -1)).valueOf();
    return d && !m.allDay && (_ || E) ? (S = _ ? y : S, b = E ? v : b, f && m.hasEnd ? l.formatRange(S, b, e, {
      forcedStartTzo: i ? null : g.forcedStartTzo,
      forcedEndTzo: a ? null : g.forcedEndTzo
    }) : l.format(S, e, {
      forcedTzo: i ? null : g.forcedStartTzo
    })) : "";
  }
  function Un(t, e, n) {
    let r = t.eventRange.range;
    return {
      isPast: r.end <= (n || e.start),
      isFuture: r.start >= (n || e.end),
      isToday: e && Wn(e, r.start)
    };
  }
  function gD(t) {
    let e = [
      "fc-event"
    ];
    return t.isMirror && e.push("fc-event-mirror"), t.isDraggable && e.push("fc-event-draggable"), (t.isStartResizable || t.isEndResizable) && e.push("fc-event-resizable"), t.isDragging && e.push("fc-event-dragging"), t.isResizing && e.push("fc-event-resizing"), t.isSelected && e.push("fc-event-selected"), t.isStart && e.push("fc-event-start"), t.isEnd && e.push("fc-event-end"), t.isPast && e.push("fc-event-past"), t.isToday && e.push("fc-event-today"), t.isFuture && e.push("fc-event-future"), e;
  }
  function sm(t) {
    return t.instance ? t.instance.instanceId : `${t.def.defId}:${t.range.start.toISOString()}`;
  }
  function vc(t, e) {
    let { def: n, instance: r } = t.eventRange, { url: s } = n;
    if (s) return {
      href: s
    };
    let { emitter: i, options: a } = e, { eventInteractive: l } = a;
    return l == null && (l = n.interactive, l == null && (l = !!i.hasHandlers("eventClick"))), l ? Yh((c) => {
      i.trigger("eventClick", {
        el: c.target,
        event: new nt(e, n, r),
        jsEvent: c,
        view: e.viewApi
      });
    }) : {};
  }
  const yD = {
    start: U,
    end: U,
    allDay: Boolean
  };
  function vD(t, e, n) {
    let r = bD(t, e), { range: s } = r;
    if (!s.start) return null;
    if (!s.end) {
      if (n == null) return null;
      s.end = e.add(s.start, n);
    }
    return r;
  }
  function bD(t, e) {
    let { refined: n, extra: r } = eo(t, yD), s = n.start ? e.createMarkerMeta(n.start) : null, i = n.end ? e.createMarkerMeta(n.end) : null, { allDay: a } = n;
    return a == null && (a = s && s.isTimeUnspecified && (!i || i.isTimeUnspecified)), Object.assign({
      range: {
        start: s ? s.marker : null,
        end: i ? i.marker : null
      },
      allDay: a
    }, r);
  }
  function wD(t, e) {
    return L_(t.range, e.range) && t.allDay === e.allDay && SD(t, e);
  }
  function SD(t, e) {
    for (let n in e) if (n !== "range" && n !== "allDay" && t[n] !== e[n]) return false;
    for (let n in t) if (!(n in e)) return false;
    return true;
  }
  function _D(t, e) {
    return Object.assign(Object.assign({}, am(t.range, e, t.allDay)), {
      allDay: t.allDay
    });
  }
  function im(t, e, n) {
    return Object.assign(Object.assign({}, am(t, e, n)), {
      timeZone: e.timeZone
    });
  }
  function am(t, e, n) {
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
  function DD(t, e, n) {
    let r = dc({
      editable: false
    }, n), s = Ca(r.refined, r.extra, "", t.allDay, true, n);
    return {
      def: s,
      ui: rm(s, e),
      instance: ro(s.defId, t.range),
      range: t.range,
      isStart: true,
      isEnd: true
    };
  }
  function kD(t, e, n) {
    let r = false, s = function(l) {
      r || (r = true, e(l));
    }, i = function(l) {
      r || (r = true, n(l));
    }, a = t(s, i);
    a && typeof a.then == "function" && a.then(s, i);
  }
  class Zd extends Error {
    constructor(e, n) {
      super(e), this.response = n;
    }
  }
  function xD(t, e, n) {
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
        throw new Zd("Failure parsing JSON", s);
      });
      throw new Zd("Request failed", s);
    });
  }
  let il;
  function om() {
    return il == null && (il = TD()), il;
  }
  function TD() {
    if (typeof document > "u") return true;
    let t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.innerHTML = "<table><tr><td><div></div></td></tr></table>", t.querySelector("table").style.height = "100px", t.querySelector("div").style.height = "100%", document.body.appendChild(t);
    let n = t.querySelector("div").offsetHeight > 0;
    return document.body.removeChild(t), n;
  }
  class MD extends ze {
    constructor() {
      super(...arguments), this.state = {
        forPrint: false
      }, this.handleBeforePrint = () => {
        Ea(() => {
          this.setState({
            forPrint: true
          });
        });
      }, this.handleAfterPrint = () => {
        Ea(() => {
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
      return om() || a.push("fc-liquid-hack"), e.children(a, i, s, r);
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
  class Ms {
    constructor(e) {
      this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null;
    }
    destroy() {
    }
  }
  function ED(t, e) {
    return {
      component: t,
      el: e.el,
      useEventCenter: e.useEventCenter != null ? e.useEventCenter : true,
      isHitComboAllowed: e.isHitComboAllowed || null
    };
  }
  function bc(t) {
    return {
      [t.component.uid]: t
    };
  }
  const Ia = {};
  class Br extends Vt {
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
          todayRange: CD(i)
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
  Br.contextType = Zn;
  function CD(t) {
    let e = Xe(t), n = ct(e, 1);
    return {
      start: e,
      end: n
    };
  }
  class AD {
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
      return r.format(r.createMarker(e), tt(n));
    }
    formatRange(e, n, r) {
      let { dateEnv: s } = this.getCurrentData();
      return s.formatRange(s.createMarker(e), s.createMarker(n), tt(r), r);
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
      let s = this.getCurrentData(), i = vD(r, s.dateEnv, Pe({
        days: 1
      }));
      i && (this.dispatch({
        type: "SELECT_DATES",
        selection: i
      }), tm(i, null, s));
    }
    unselect(e) {
      let n = this.getCurrentData();
      n.dateSelection && (this.dispatch({
        type: "UNSELECT_DATES"
      }), lD(e, n));
    }
    addEvent(e, n) {
      if (e instanceof nt) {
        let a = e._def, l = e._instance;
        return this.getCurrentData().eventStore.defs[a.defId] || (this.dispatch({
          type: "ADD_EVENTS",
          eventStore: fi({
            def: a,
            instance: l
          })
        }), this.triggerEventAdd(e)), e;
      }
      let r = this.getCurrentData(), s;
      if (n instanceof ss) s = n.internalEventSource;
      else if (typeof n == "boolean") n && ([s] = oc(r.eventSources));
      else if (n != null) {
        let a = this.getEventSourceById(n);
        if (!a) return console.warn(`Could not find an event source with ID "${n}"`), null;
        s = a.internalEventSource;
      }
      let i = Zh(e, s, r, false);
      if (i) {
        let a = new nt(r, i.def, i.def.recurringDef ? null : i.instance);
        return this.dispatch({
          type: "ADD_EVENTS",
          eventStore: fi(i)
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
            eventStore: nm(e)
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
          if (a.recurringDef) return new nt(n, a, null);
          for (let l in s) {
            let c = s[l];
            if (c.defId === a.defId) return new nt(n, a, c);
          }
        }
      }
      return null;
    }
    getEvents() {
      let e = this.getCurrentData();
      return Pr(e.eventStore, e);
    }
    removeAllEvents() {
      this.dispatch({
        type: "REMOVE_ALL_EVENTS"
      });
    }
    getEventSources() {
      let e = this.getCurrentData(), n = e.eventSources, r = [];
      for (let s in n) r.push(new ss(e, n[s]));
      return r;
    }
    getEventSourceById(e) {
      let n = this.getCurrentData(), r = n.eventSources;
      e = String(e);
      for (let s in r) if (r[s].publicId === e) return new ss(n, r[s]);
      return null;
    }
    addEventSource(e) {
      let n = this.getCurrentData();
      if (e instanceof ss) return n.eventSources[e.internalEventSource.sourceId] || this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [
          e.internalEventSource
        ]
      }), e;
      let r = Xh(e, n);
      return r ? (this.dispatch({
        type: "ADD_EVENT_SOURCES",
        sources: [
          r
        ]
      }), new ss(n, r)) : null;
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
  function RD(t, e) {
    return t.left >= e.left && t.left < e.right && t.top >= e.top && t.top < e.bottom;
  }
  function lm(t, e) {
    let n = {
      left: Math.max(t.left, e.left),
      right: Math.min(t.right, e.right),
      top: Math.max(t.top, e.top),
      bottom: Math.min(t.bottom, e.bottom)
    };
    return n.left < n.right && n.top < n.bottom ? n : false;
  }
  function OD(t, e) {
    return {
      left: Math.min(Math.max(t.left, e.left), e.right),
      top: Math.min(Math.max(t.top, e.top), e.bottom)
    };
  }
  function ID(t) {
    return {
      left: (t.left + t.right) / 2,
      top: (t.top + t.bottom) / 2
    };
  }
  function PD(t, e) {
    return {
      left: t.left - e.left,
      top: t.top - e.top
    };
  }
  const al = At();
  class ND {
    constructor() {
      this.getKeysForEventDefs = Me(this._getKeysForEventDefs), this.splitDateSelection = Me(this._splitDateSpan), this.splitEventStore = Me(this._splitEventStore), this.splitIndividualUi = Me(this._splitIndividualUi), this.splitEventDrag = Me(this._splitInteraction), this.splitEventResize = Me(this._splitInteraction), this.eventUiBuilders = {};
    }
    splitProps(e) {
      let n = this.getKeyInfo(e), r = this.getKeysForEventDefs(e.eventStore), s = this.splitDateSelection(e.dateSelection), i = this.splitIndividualUi(e.eventUiBases, r), a = this.splitEventStore(e.eventStore, r), l = this.splitEventDrag(e.eventDrag), c = this.splitEventResize(e.eventResize), d = {};
      this.eventUiBuilders = Gn(n, (f, m) => this.eventUiBuilders[m] || Me(LD));
      for (let f in n) {
        let m = n[f], g = a[f] || al, y = this.eventUiBuilders[f];
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
      return Gn(e.defs, (n) => this.getKeysForEventDef(n));
    }
    _splitEventStore(e, n) {
      let { defs: r, instances: s } = e, i = {};
      for (let a in r) for (let l of n[a]) i[l] || (i[l] = At()), i[l].defs[a] = r[a];
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
            affectedEvents: r[l] || al,
            mutatedEvents: i[l] || al,
            isEvent: e.isEvent
          });
        };
        for (let l in r) a(l);
        for (let l in i) a(l);
      }
      return n;
    }
  }
  function LD(t, e, n) {
    let r = [];
    t && r.push(t), e && r.push(e);
    let s = {
      "": Qh(r)
    };
    return n && Object.assign(s, n), s;
  }
  function wc(t, e, n, r) {
    return {
      dow: t.getUTCDay(),
      isDisabled: !!(r && (!r.activeRange || !Wn(r.activeRange, t))),
      isOther: !!(r && !Wn(r.currentRange, t)),
      isToday: !!(e && Wn(e, t)),
      isPast: !!(n ? t < n : e && t < e.start),
      isFuture: !!(n ? t > n : e && t >= e.end)
    };
  }
  function ao(t, e) {
    let n = [
      "fc-day",
      `fc-day-${jS[t.dow]}`
    ];
    return t.isDisabled ? n.push("fc-day-disabled") : (t.isToday && (n.push("fc-day-today"), n.push(e.getClass("today"))), t.isPast && n.push("fc-day-past"), t.isFuture && n.push("fc-day-future"), t.isOther && n.push("fc-day-other")), n;
  }
  const YD = tt({
    year: "numeric",
    month: "long",
    day: "numeric"
  }), FD = tt({
    week: "long"
  });
  function Ds(t, e, n = "day", r = true) {
    const { dateEnv: s, options: i, calendarApi: a } = t;
    let l = s.format(e, n === "week" ? FD : YD);
    if (i.navLinks) {
      let c = s.toDate(e);
      const d = (f) => {
        let m = n === "day" ? i.navLinkDayClick : n === "week" ? i.navLinkWeekClick : null;
        typeof m == "function" ? m.call(a, s.toDate(e), f) : (typeof m == "string" && (n = m), a.zoomTo(e, n));
      };
      return Object.assign({
        title: ei(i.navLinkHint, [
          l,
          c
        ], l),
        "data-navlink": ""
      }, r ? Lh(d) : {
        onClick: d
      });
    }
    return {
      "aria-label": l
    };
  }
  let ol = null;
  function HD() {
    return ol === null && (ol = jD()), ol;
  }
  function jD() {
    let t = document.createElement("div");
    Ks(t, {
      position: "absolute",
      top: -1e3,
      left: 0,
      border: 0,
      padding: 0,
      overflow: "scroll",
      direction: "rtl"
    }), t.innerHTML = "<div></div>", document.body.appendChild(t);
    let n = t.firstChild.getBoundingClientRect().left > t.getBoundingClientRect().left;
    return rc(t), n;
  }
  let ll;
  function VD() {
    return ll || (ll = WD()), ll;
  }
  function WD() {
    let t = document.createElement("div");
    t.style.overflow = "scroll", t.style.position = "absolute", t.style.top = "-9999px", t.style.left = "-9999px", document.body.appendChild(t);
    let e = cm(t);
    return document.body.removeChild(t), e;
  }
  function cm(t) {
    return {
      x: t.offsetHeight - t.clientHeight,
      y: t.offsetWidth - t.clientWidth
    };
  }
  function UD(t, e = false) {
    let n = window.getComputedStyle(t), r = parseInt(n.borderLeftWidth, 10) || 0, s = parseInt(n.borderRightWidth, 10) || 0, i = parseInt(n.borderTopWidth, 10) || 0, a = parseInt(n.borderBottomWidth, 10) || 0, l = cm(t), c = l.y - r - s, d = l.x - i - a, f = {
      borderLeft: r,
      borderRight: s,
      borderTop: i,
      borderBottom: a,
      scrollbarBottom: d,
      scrollbarLeft: 0,
      scrollbarRight: 0
    };
    return HD() && n.direction === "rtl" ? f.scrollbarLeft = c : f.scrollbarRight = c, e && (f.paddingLeft = parseInt(n.paddingLeft, 10) || 0, f.paddingRight = parseInt(n.paddingRight, 10) || 0, f.paddingTop = parseInt(n.paddingTop, 10) || 0, f.paddingBottom = parseInt(n.paddingBottom, 10) || 0), f;
  }
  function BD(t, e = false, n) {
    let r = Sc(t), s = UD(t, e), i = {
      left: r.left + s.borderLeft + s.scrollbarLeft,
      right: r.right - s.borderRight - s.scrollbarRight,
      top: r.top + s.borderTop,
      bottom: r.bottom - s.borderBottom - s.scrollbarBottom
    };
    return e && (i.left += s.paddingLeft, i.right -= s.paddingRight, i.top += s.paddingTop, i.bottom -= s.paddingBottom), i;
  }
  function Sc(t) {
    let e = t.getBoundingClientRect();
    return {
      left: e.left + window.scrollX,
      top: e.top + window.scrollY,
      right: e.right + window.scrollX,
      bottom: e.bottom + window.scrollY
    };
  }
  function zD(t) {
    let e = um(t), n = t.getBoundingClientRect();
    for (let r of e) {
      let s = lm(n, r.getBoundingClientRect());
      if (s) n = s;
      else return null;
    }
    return n;
  }
  function um(t) {
    let e = [];
    for (; t instanceof HTMLElement; ) {
      let n = window.getComputedStyle(t);
      if (n.position === "fixed") break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && e.push(t), t = t.parentNode;
    }
    return e;
  }
  class ks {
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
      return ta(this.tops || [], e.tops || []) && ta(this.bottoms || [], e.bottoms || []) && ta(this.lefts || [], e.lefts || []) && ta(this.rights || [], e.rights || []);
    }
  }
  function ta(t, e) {
    const n = t.length;
    if (n !== e.length) return false;
    for (let r = 0; r < n; r++) if (Math.round(t[r]) !== Math.round(e[r])) return false;
    return true;
  }
  class _c {
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
  class $D extends _c {
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
  class GD extends _c {
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
  class cn extends ze {
    constructor() {
      super(...arguments), this.uid = Wr();
    }
    prepareHits() {
    }
    queryHit(e, n, r, s) {
      return null;
    }
    isValidSegDownEl(e) {
      return !this.props.eventDrag && !this.props.eventResize && !Et(e, ".fc-event-mirror");
    }
    isValidDateDownEl(e) {
      return !Et(e, ".fc-event:not(.fc-bg-event)") && !Et(e, ".fc-more-link") && !Et(e, "a[data-navlink]") && !Et(e, ".fc-popover");
    }
  }
  class dm {
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
          span: Dc(n.span, e.touchingEntry.span)
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
      n.lateral === -1 ? (cl(s, n.level, n.levelCoord), cl(r, n.level, [
        e
      ])) : cl(r[n.level], n.lateral, e), this.stackCnts[Nr(e)] = n.stackCnt;
    }
    findInsertion(e) {
      let { levelCoords: n, entriesByLevel: r, strictOrder: s, stackCnts: i } = this, a = n.length, l = 0, c = -1, d = -1, f = null, m = 0;
      for (let v = 0; v < a; v += 1) {
        const S = n[v];
        if (!s && S >= l + this.getEntryThickness(e)) break;
        let b = r[v], _, E = Il(b, e.span.start, Ol), R = E[0] + E[1];
        for (; (_ = b[R]) && _.span.start < e.span.end; ) {
          let k = S + this.getEntryThickness(_);
          k > l && (l = k, f = _, c = v, d = R), k === l && (m = Math.max(m, i[Nr(_)] + 1)), R += 1;
        }
      }
      let g = 0;
      if (f) for (g = c + 1; g < a && n[g] < l; ) g += 1;
      let y = -1;
      return g < a && n[g] === l && (y = Il(r[g], e.span.end, Ol)[0]), {
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
  function Ol(t) {
    return t.span.end;
  }
  function Nr(t) {
    return t.index + ":" + t.span.start;
  }
  function qD(t) {
    let e = [];
    for (let n of t) {
      let r = [], s = {
        span: n.span,
        entries: [
          n
        ]
      };
      for (let i of e) Dc(i.span, s.span) ? s = {
        entries: i.entries.concat(s.entries),
        span: ZD(i.span, s.span)
      } : r.push(i);
      r.push(s), e = r;
    }
    return e;
  }
  function ZD(t, e) {
    return {
      start: Math.min(t.start, e.start),
      end: Math.max(t.end, e.end)
    };
  }
  function Dc(t, e) {
    let n = Math.max(t.start, e.start), r = Math.min(t.end, e.end);
    return n < r ? {
      start: n,
      end: r
    } : null;
  }
  function cl(t, e, n) {
    t.splice(e, 0, n);
  }
  function Il(t, e, n) {
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
  class QD {
    constructor(e, n) {
      this.emitter = new io();
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
  const oo = {}, XD = {
    startTime: Pe,
    duration: Pe,
    create: Boolean,
    sourceId: String
  };
  function Pl(t) {
    let { refined: e, extra: n } = eo(t, XD);
    return {
      startTime: e.startTime || null,
      duration: e.duration || null,
      create: e.create != null ? e.create : true,
      sourceId: e.sourceId,
      leftoverProps: n
    };
  }
  function JD(t, e) {
    return !t || e > 10 ? tt({
      weekday: "short"
    }) : e > 1 ? tt({
      weekday: "short",
      month: "numeric",
      day: "numeric",
      omitCommas: true
    }) : tt({
      weekday: "long"
    });
  }
  const fm = "fc-col-header-cell";
  function hm(t) {
    return t.text;
  }
  class KD extends ze {
    render() {
      let { dateEnv: e, options: n, theme: r, viewApi: s } = this.context, { props: i } = this, { date: a, dateProfile: l } = i, c = wc(a, i.todayRange, null, l), d = [
        fm
      ].concat(ao(c, r)), f = e.format(a, i.dayHeaderFormat), m = !c.isDisabled && i.colCnt > 1 ? Ds(this.context, a) : {}, g = e.toDate(a);
      e.namedTimeZoneImpl && (g = mr(g, 36e5));
      let y = Object.assign(Object.assign(Object.assign({
        date: g,
        view: s
      }, i.extraRenderProps), {
        text: f
      }), c);
      return M(Ot, {
        elTag: "th",
        elClasses: d,
        elAttrs: Object.assign({
          role: "columnheader",
          colSpan: i.colSpan,
          "data-date": c.isDisabled ? void 0 : Di(a)
        }, i.extraDataAttrs),
        renderProps: y,
        generatorName: "dayHeaderContent",
        customGenerator: n.dayHeaderContent,
        defaultGenerator: hm,
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
  const e0 = tt({
    weekday: "long"
  });
  class t0 extends ze {
    render() {
      let { props: e } = this, { dateEnv: n, theme: r, viewApi: s, options: i } = this.context, a = ct(/* @__PURE__ */ new Date(2592e5), e.dow), l = {
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
      return M(Ot, {
        elTag: "th",
        elClasses: [
          fm,
          ...ao(l, r),
          ...e.extraClassNames || []
        ],
        elAttrs: Object.assign({
          role: "columnheader",
          colSpan: e.colSpan
        }, e.extraDataAttrs),
        renderProps: d,
        generatorName: "dayHeaderContent",
        customGenerator: i.dayHeaderContent,
        defaultGenerator: hm,
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
          "aria-label": n.format(a, e0)
        }
      })));
    }
  }
  class mm extends ze {
    constructor() {
      super(...arguments), this.createDayHeaderFormatter = Me(n0);
    }
    render() {
      let { context: e } = this, { dates: n, dateProfile: r, datesRepDistinctDays: s, renderIntro: i } = this.props, a = this.createDayHeaderFormatter(e.options.dayHeaderFormat, s, n.length);
      return M(Br, {
        unit: "day"
      }, (l, c) => M("tr", {
        role: "row"
      }, i && i("day"), n.map((d) => s ? M(KD, {
        key: d.toISOString(),
        date: d,
        dateProfile: r,
        todayRange: c,
        colCnt: n.length,
        dayHeaderFormat: a
      }) : M(t0, {
        key: d.getUTCDay(),
        dow: d.getUTCDay(),
        dayHeaderFormat: a
      }))));
    }
  }
  function n0(t, e, n) {
    return t || JD(e, n);
  }
  class pm {
    constructor(e, n) {
      let r = e.start, { end: s } = e, i = [], a = [], l = -1;
      for (; r < s; ) n.isHiddenDay(r) ? i.push(l + 0.5) : (l += 1, i.push(l), a.push(r)), r = ct(r, 1);
      this.dates = a, this.indices = i, this.cnt = a.length;
    }
    sliceRange(e) {
      let n = this.getDateDayIndex(e.start), r = this.getDateDayIndex(ct(e.end, -1)), s = Math.max(0, n), i = Math.min(this.cnt - 1, r);
      return s = Math.ceil(s), i = Math.floor(i), s <= i ? {
        firstIndex: s,
        lastIndex: i,
        isStart: n === s,
        isEnd: r === i
      } : null;
    }
    getDateDayIndex(e) {
      let { indices: n } = this, r = Math.floor(vr(this.dates[0], e));
      return r < 0 ? n[0] - 1 : r >= n.length ? n[n.length - 1] + 1 : n[r];
    }
  }
  class gm {
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
  class ym {
    constructor() {
      this.sliceBusinessHours = Me(this._sliceBusinessHours), this.sliceDateSelection = Me(this._sliceDateSpan), this.sliceEventStore = Me(this._sliceEventStore), this.sliceEventDrag = Me(this._sliceInteraction), this.sliceEventResize = Me(this._sliceInteraction), this.forceDayIfListItem = false;
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
          end: mr(e, 1)
        },
        allDay: false
      }, n, r, {}, s, ...i);
    }
    _sliceBusinessHours(e, n, r, s, ...i) {
      return e ? this._sliceEventStore(Fr(e, na(n, !!r), s), {}, n, r, ...i).bg : [];
    }
    _sliceEventStore(e, n, r, s, ...i) {
      if (e) {
        let a = Rl(e, n, na(r, !!s), s);
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
      let a = Rl(e.mutatedEvents, n, na(r, !!s), s);
      return {
        segs: this.sliceEventRanges(a.fg, i),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent
      };
    }
    _sliceDateSpan(e, n, r, s, i, ...a) {
      if (!e) return [];
      let l = na(n, !!r), c = pr(e.range, l);
      if (c) {
        e = Object.assign(Object.assign({}, e), {
          range: c
        });
        let d = DD(e, s, i), f = this.sliceRange(e.range, ...a);
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
        end: ct(r.start, 1)
      });
      let s = this.sliceRange(r, ...n);
      for (let i of s) i.eventRange = e, i.isStart = e.isStart && i.isStart, i.isEnd = e.isEnd && i.isEnd;
      return s;
    }
  }
  function na(t, e) {
    let n = t.activeRange;
    return e ? n : {
      start: mr(n.start, t.slotMinTime.milliseconds),
      end: mr(n.end, t.slotMaxTime.milliseconds - 864e5)
    };
  }
  function kc(t, e, n) {
    let { instances: r } = t.mutatedEvents;
    for (let s in r) if (!no(e.validRange, r[s].range)) return false;
    return vm({
      eventDrag: t
    }, n);
  }
  function r0(t, e, n) {
    return no(e.validRange, t.range) ? vm({
      dateSelection: t
    }, n) : false;
  }
  function vm(t, e) {
    let n = e.getCurrentData(), r = Object.assign({
      businessHours: n.businessHours,
      dateSelection: "",
      eventStore: n.eventStore,
      eventUiBases: n.eventUiBases,
      eventSelection: "",
      eventDrag: null,
      eventResize: null
    }, t);
    return (e.pluginHooks.isPropsValid || s0)(r, e);
  }
  function s0(t, e, n = {}, r) {
    return !(t.eventDrag && !i0(t, e, n, r) || t.dateSelection && !a0(t, e, n, r));
  }
  function i0(t, e, n, r) {
    let s = e.getCurrentData(), i = t.eventDrag, a = i.mutatedEvents, l = a.defs, c = a.instances, d = Oa(l, i.isEvent ? t.eventUiBases : {
      "": s.selectionConfig
    });
    r && (d = Gn(d, r));
    let f = tD(t.eventStore, i.affectedEvents.instances), m = f.defs, g = f.instances, y = Oa(m, t.eventUiBases);
    for (let v in c) {
      let S = c[v], b = S.range, _ = d[S.defId], E = l[S.defId];
      if (!bm(_.constraints, b, f, t.businessHours, e)) return false;
      let { eventOverlap: R } = e.options, k = typeof R == "function" ? R : null;
      for (let N in g) {
        let I = g[N];
        if (cc(b, I.range) && (y[I.defId].overlap === false && i.isEvent || _.overlap === false || k && !k(new nt(e, m[I.defId], I), new nt(e, E, S)))) return false;
      }
      let T = s.eventStore;
      for (let N of _.allows) {
        let I = Object.assign(Object.assign({}, n), {
          range: S.range,
          allDay: E.allDay
        }), O = T.defs[E.defId], K = T.instances[v], z;
        if (O ? z = new nt(e, O, K) : z = new nt(e, E), !N(pc(I, e), z)) return false;
      }
    }
    return true;
  }
  function a0(t, e, n, r) {
    let s = t.eventStore, i = s.defs, a = s.instances, l = t.dateSelection, c = l.range, { selectionConfig: d } = e.getCurrentData();
    if (r && (d = r(d)), !bm(d.constraints, c, s, t.businessHours, e)) return false;
    let { selectOverlap: f } = e.options, m = typeof f == "function" ? f : null;
    for (let g in a) {
      let y = a[g];
      if (cc(c, y.range) && (d.overlap === false || m && !m(new nt(e, i[y.defId], y), null))) return false;
    }
    for (let g of d.allows) {
      let y = Object.assign(Object.assign({}, n), l);
      if (!g(pc(y, e), null)) return false;
    }
    return true;
  }
  function bm(t, e, n, r, s) {
    for (let i of t) if (!l0(o0(i, e, n, r, s), e)) return false;
    return true;
  }
  function o0(t, e, n, r, s) {
    return t === "businessHours" ? ul(Fr(r, e, s)) : typeof t == "string" ? ul(so(n, (i) => i.groupId === t)) : typeof t == "object" && t ? ul(Fr(t, e, s)) : [];
  }
  function ul(t) {
    let { instances: e } = t, n = [];
    for (let r in e) n.push(e[r].range);
    return n;
  }
  function l0(t, e) {
    for (let n of t) if (no(n, e)) return true;
    return false;
  }
  const ra = /^(visible|hidden)$/;
  class wm extends ze {
    constructor() {
      super(...arguments), this.handleEl = (e) => {
        this.el = e, Sn(this.props.elRef, e);
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
      if (ra.test(this.props.overflowX)) return false;
      let { el: e } = this, n = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), { children: r } = e;
      for (let s = 0; s < r.length; s += 1) if (r[s].getBoundingClientRect().width > n) return true;
      return false;
    }
    needsYScrolling() {
      if (ra.test(this.props.overflowY)) return false;
      let { el: e } = this, n = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), { children: r } = e;
      for (let s = 0; s < r.length; s += 1) if (r[s].getBoundingClientRect().height > n) return true;
      return false;
    }
    getXScrollbarWidth() {
      return ra.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
    }
    getYScrollbarWidth() {
      return ra.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
    }
  }
  class Hn {
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
      return w_(this.currentMap, e, n, r);
    }
    getAll() {
      return oc(this.currentMap);
    }
  }
  function c0(t) {
    let e = vS(t, ".fc-scrollgrid-shrink"), n = 0;
    for (let r of e) n = Math.max(n, OS(r));
    return Math.ceil(n);
  }
  function Sm(t, e) {
    return t.liquid && e.liquid;
  }
  function u0(t, e) {
    return e.maxHeight != null || Sm(t, e);
  }
  function d0(t, e, n, r) {
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
  function f0(t, e) {
    return hr(t, e, an);
  }
  function h0(t, e) {
    let n = [];
    for (let r of t) {
      let s = r.span || 1;
      for (let i = 0; i < s; i += 1) n.push(M("col", {
        style: {
          width: r.width === "shrink" ? m0(e) : r.width || "",
          minWidth: r.minWidth || ""
        }
      }));
    }
    return M("colgroup", {}, ...n);
  }
  function m0(t) {
    return t ?? 4;
  }
  function p0(t) {
    for (let e of t) if (e.width === "shrink") return true;
    return false;
  }
  function g0(t, e) {
    let n = [
      "fc-scrollgrid",
      e.theme.getClass("table")
    ];
    return t && n.push("fc-scrollgrid-liquid"), n;
  }
  function y0(t, e) {
    let n = [
      "fc-scrollgrid-section",
      `fc-scrollgrid-section-${t.type}`,
      t.className
    ];
    return e && t.liquid && t.maxHeight == null && n.push("fc-scrollgrid-section-liquid"), t.isSticky && n.push("fc-scrollgrid-section-sticky"), n;
  }
  function Nl(t) {
    return M("div", {
      className: "fc-scrollgrid-sticky-shim",
      style: {
        width: t.clientWidth,
        minWidth: t.tableMinWidth
      }
    });
  }
  function Pa(t) {
    let { stickyHeaderDates: e } = t;
    return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
  }
  function _m(t) {
    let { stickyFooterScrollbar: e } = t;
    return (e == null || e === "auto") && (e = t.height === "auto" || t.viewHeight === "auto"), e;
  }
  class xc extends ze {
    constructor() {
      super(...arguments), this.processCols = Me((e) => e, f0), this.renderMicroColGroup = Me(h0), this.scrollerRefs = new Hn(), this.scrollerElRefs = new Hn(this._handleScrollerEl.bind(this)), this.state = {
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
      let { props: e, state: n, context: r } = this, s = e.sections || [], i = this.processCols(e.cols), a = this.renderMicroColGroup(i, n.shrinkWidth), l = g0(e.liquid, r);
      e.collapsibleWidth && l.push("fc-scrollgrid-collapsible");
      let c = s.length, d = 0, f, m = [], g = [], y = [];
      for (; d < c && (f = s[d]).type === "header"; ) m.push(this.renderSection(f, a, true)), d += 1;
      for (; d < c && (f = s[d]).type === "body"; ) g.push(this.renderSection(f, a, false)), d += 1;
      for (; d < c && (f = s[d]).type === "footer"; ) y.push(this.renderSection(f, a, true)), d += 1;
      let v = !om();
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
      return "outerContent" in e ? M(qe, {
        key: e.key
      }, e.outerContent) : M("tr", {
        key: e.key,
        role: "presentation",
        className: y0(e, this.props.liquid).join(" ")
      }, this.renderChunkTd(e, n, e.chunk, r));
    }
    renderChunkTd(e, n, r, s) {
      if ("outerContent" in r) return r.outerContent;
      let { props: i } = this, { forceYScrollbars: a, scrollerClientWidths: l, scrollerClientHeights: c } = this.state, d = u0(i, e), f = Sm(i, e), m = i.liquid ? a ? "scroll" : d ? "auto" : "hidden" : "visible", g = e.key, y = d0(e, r, {
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
      }, M(wm, {
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
      let r = v0(this.props.sections, n);
      r && Sn(r.chunk.scrollerElRef, e);
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
      return p0(this.props.cols) ? c0(this.scrollerElRefs.getAll()) : 0;
    }
    computeScrollerDims() {
      let e = VD(), { scrollerRefs: n, scrollerElRefs: r } = this, s = false, i = {}, a = {};
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
  xc.addStateEquality({
    scrollerClientWidths: an,
    scrollerClientHeights: an
  });
  function v0(t, e) {
    for (let n of t) if (n.key === e) return n;
    return null;
  }
  class lo extends ze {
    constructor() {
      super(...arguments), this.buildPublicEvent = Me((e, n, r) => new nt(e, n, r)), this.handleEl = (e) => {
        this.el = e, Sn(this.props.elRef, e), e && qd(e, this.props.seg);
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
        isDraggable: !e.disableDragging && hD(s, n),
        isStartResizable: !e.disableResizing && mD(s, n),
        isEndResizable: !e.disableResizing && pD(s),
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
      return M(Ot, {
        elRef: this.handleEl,
        elTag: e.elTag,
        elAttrs: e.elAttrs,
        elClasses: [
          ...gD(l),
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
      this.el && this.props.seg !== e.seg && qd(this.el, this.props.seg);
    }
  }
  class Tc extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { seg: s } = e, { ui: i } = s.eventRange, a = r.eventTimeFormat || e.defaultTimeFormat, l = ti(s, a, n, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
      return M(lo, Object.assign({}, e, {
        elTag: "a",
        elStyle: {
          borderColor: i.borderColor,
          backgroundColor: i.backgroundColor
        },
        elAttrs: vc(s, n),
        defaultGenerator: b0,
        timeText: l
      }), (c, d) => M(qe, null, M(c, {
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
  Tc.addPropsEquality({
    seg: an
  });
  function b0(t) {
    return M("div", {
      className: "fc-event-main-frame"
    }, t.timeText && M("div", {
      className: "fc-event-time"
    }, t.timeText), M("div", {
      className: "fc-event-title-container"
    }, M("div", {
      className: "fc-event-title fc-sticky"
    }, t.event.title || M(qe, null, "\xA0"))));
  }
  const Mc = (t) => M(Zn.Consumer, null, (e) => {
    let { options: n } = e, r = {
      isAxis: t.isAxis,
      date: e.dateEnv.toDate(t.date),
      view: e.viewApi
    };
    return M(Ot, {
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
  }), w0 = tt({
    day: "numeric"
  });
  class Ec extends ze {
    constructor() {
      super(...arguments), this.refineRenderProps = da(S0);
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
      return M(Ot, {
        elRef: e.elRef,
        elTag: e.elTag,
        elAttrs: Object.assign(Object.assign({}, e.elAttrs), s.isDisabled ? {} : {
          "data-date": Di(e.date)
        }),
        elClasses: [
          ...ao(s, n.theme),
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
  function Cc(t) {
    return !!(t.dayCellContent || Cl("dayCellContent", t));
  }
  function S0(t) {
    let { date: e, dateEnv: n, dateProfile: r, isMonthStart: s } = t, i = wc(e, t.todayRange, null, r), a = t.showDayNumber ? n.format(e, s ? t.monthStartFormat : w0) : "";
    return Object.assign(Object.assign(Object.assign({
      date: n.toDate(e),
      view: t.viewApi
    }, i), {
      isMonthStart: s,
      dayNumberText: a
    }), t.extraRenderProps);
  }
  class Dm extends ze {
    render() {
      let { props: e } = this, { seg: n } = e;
      return M(lo, {
        elTag: "div",
        elClasses: [
          "fc-bg-event"
        ],
        elStyle: {
          backgroundColor: n.eventRange.ui.backgroundColor
        },
        defaultGenerator: _0,
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
  function _0(t) {
    let { title: e } = t.event;
    return e && M("div", {
      className: "fc-event-title"
    }, t.event.title);
  }
  function km(t) {
    return M("div", {
      className: `fc-${t}`
    });
  }
  const xm = (t) => M(Zn.Consumer, null, (e) => {
    let { dateEnv: n, options: r } = e, { date: s } = t, i = r.weekNumberFormat || t.defaultFormat, a = n.computeWeekNumber(s), l = n.format(s, i), c = {
      num: a,
      text: l,
      date: s
    };
    return M(Ot, {
      elRef: t.elRef,
      elTag: t.elTag,
      elAttrs: t.elAttrs,
      elClasses: t.elClasses,
      elStyle: t.elStyle,
      renderProps: c,
      generatorName: "weekNumberContent",
      customGenerator: r.weekNumberContent,
      defaultGenerator: D0,
      classNameGenerator: r.weekNumberClassNames,
      didMount: r.weekNumberDidMount,
      willUnmount: r.weekNumberWillUnmount
    }, t.children);
  });
  function D0(t) {
    return t.text;
  }
  const dl = 10;
  class k0 extends ze {
    constructor() {
      super(...arguments), this.state = {
        titleId: dr()
      }, this.handleRootEl = (e) => {
        this.rootEl = e, this.props.elRef && Sn(this.props.elRef, e);
      }, this.handleDocumentMouseDown = (e) => {
        const n = Ph(e);
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
      return iS(M("div", Object.assign({}, r.extraAttrs, {
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
      let { isRtl: e } = this.context, { alignmentEl: n, alignGridTop: r } = this.props, { rootEl: s } = this, i = zD(n);
      if (i) {
        let a = s.getBoundingClientRect(), l = r ? Et(n, ".fc-scrollgrid").getBoundingClientRect().top : i.top, c = e ? i.right - a.width : i.left;
        l = Math.max(l, dl), c = Math.min(c, document.documentElement.clientWidth - dl - a.width), c = Math.max(c, dl);
        let d = s.offsetParent.getBoundingClientRect();
        Ks(s, {
          top: l - d.top,
          left: c - d.left
        });
      }
    }
  }
  class x0 extends cn {
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
      return M(Ec, {
        elRef: this.handleRootEl,
        date: s,
        dateProfile: a,
        todayRange: i
      }, (c, d, f) => M(k0, {
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
      }, Cc(e) && M(c, {
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
  class Tm extends ze {
    constructor() {
      super(...arguments), this.state = {
        isPopoverOpen: false,
        popoverId: dr()
      }, this.handleLinkEl = (e) => {
        this.linkEl = e, this.props.elRef && Sn(this.props.elRef, e);
      }, this.handleClick = (e) => {
        let { props: n, context: r } = this, { moreLinkClick: s } = r.options, i = Qd(n).start;
        function a(l) {
          let { def: c, instance: d, range: f } = l.eventRange;
          return {
            event: new nt(r, c, d),
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
      return M(Zn.Consumer, null, (r) => {
        let { viewApi: s, options: i, calendarApi: a } = r, { moreLinkText: l } = i, { moreCnt: c } = e, d = Qd(e), f = typeof l == "function" ? l.call(a, c) : `+${c} ${l}`, m = ei(i.moreLinkHint, [
          c
        ], f), g = {
          num: c,
          shortText: `+${c}`,
          text: f,
          view: s
        };
        return M(qe, null, !!e.moreCnt && M(Ot, {
          elTag: e.elTag || "a",
          elRef: this.handleLinkEl,
          elClasses: [
            ...e.elClasses || [],
            "fc-more-link"
          ],
          elStyle: e.elStyle,
          elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Lh(this.handleClick)), {
            title: m,
            "aria-expanded": n.isPopoverOpen,
            "aria-controls": n.isPopoverOpen ? n.popoverId : ""
          }),
          renderProps: g,
          generatorName: "moreLinkContent",
          customGenerator: i.moreLinkContent,
          defaultGenerator: e.defaultGenerator || T0,
          classNameGenerator: i.moreLinkClassNames,
          didMount: i.moreLinkDidMount,
          willUnmount: i.moreLinkWillUnmount
        }, e.children), n.isPopoverOpen && M(x0, {
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
      this.linkEl && (this.parentEl = Et(this.linkEl, ".fc-view-harness"));
    }
  }
  function T0(t) {
    return t.text;
  }
  function Qd(t) {
    if (t.allDayDate) return {
      start: t.allDayDate,
      end: ct(t.allDayDate, 1)
    };
    let { hiddenSegs: e } = t;
    return {
      start: Mm(e),
      end: E0(e)
    };
  }
  function Mm(t) {
    return t.reduce(M0).eventRange.range.start;
  }
  function M0(t, e) {
    return t.eventRange.range.start < e.eventRange.range.start ? t : e;
  }
  function E0(t) {
    return t.reduce(C0).eventRange.range.end;
  }
  function C0(t, e) {
    return t.eventRange.range.end > e.eventRange.range.end ? t : e;
  }
  class A0 {
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
  class R0 extends A0 {
    constructor() {
      super(...arguments), this.map = /* @__PURE__ */ new Map();
    }
    handle(e) {
      const { map: n } = this;
      let r = false;
      e.isActive ? (n.set(e.id, e), r = true) : n.has(e.id) && (n.delete(e.id), r = true), r && this.set(n);
    }
  }
  const O0 = [], Em = {
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
  }, Cm = Object.assign(Object.assign({}, Em), {
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
  function I0(t) {
    let e = t.length > 0 ? t[0].code : "en", n = O0.concat(t), r = {
      en: Cm
    };
    for (let s of n) r[s.code] = s;
    return {
      map: r,
      defaultCode: e
    };
  }
  function Am(t, e) {
    return typeof t == "object" && !Array.isArray(t) ? Rm(t.code, [
      t.code
    ], t) : P0(t, e);
  }
  function P0(t, e) {
    let n = [].concat(t || []), r = N0(n, e) || Cm;
    return Rm(t, n, r);
  }
  function N0(t, e) {
    for (let n = 0; n < t.length; n += 1) {
      let r = t[n].toLocaleLowerCase().split("-");
      for (let s = r.length; s > 0; s -= 1) {
        let i = r.slice(0, s).join("-");
        if (e[i]) return e[i];
      }
    }
    return null;
  }
  function Rm(t, e, n) {
    let r = ac([
      Em,
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
  function un(t) {
    return {
      id: Wr(),
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
  function L0(t, e) {
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
        c === void 0 ? (n[l] = a.id, s(a.deps), r = F0(r, a)) : c !== a.id && console.warn(`Duplicate plugin '${l}'`);
      }
    }
    return t && s(t), s(e), r;
  }
  function Y0() {
    let t = [], e = [], n;
    return (r, s) => ((!n || !hr(r, t) || !hr(s, e)) && (n = L0(r, s)), t = r, e = s, n);
  }
  function F0(t, e) {
    return {
      premiumReleaseDate: H0(t.premiumReleaseDate, e.premiumReleaseDate),
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
  function H0(t, e) {
    return t === void 0 ? e : e === void 0 ? t : new Date(Math.max(t.valueOf(), e.valueOf()));
  }
  class br extends ki {
  }
  br.prototype.classes = {
    root: "fc-theme-standard",
    tableCellShaded: "fc-cell-shaded",
    buttonGroup: "fc-button-group",
    button: "fc-button fc-button-primary",
    buttonActive: "fc-button-active"
  };
  br.prototype.baseIconClass = "fc-icon";
  br.prototype.iconClasses = {
    close: "fc-icon-x",
    prev: "fc-icon-chevron-left",
    next: "fc-icon-chevron-right",
    prevYear: "fc-icon-chevrons-left",
    nextYear: "fc-icon-chevrons-right"
  };
  br.prototype.rtlIconClasses = {
    prev: "fc-icon-chevron-right",
    next: "fc-icon-chevron-left",
    prevYear: "fc-icon-chevrons-right",
    nextYear: "fc-icon-chevrons-left"
  };
  br.prototype.iconOverrideOption = "buttonIcons";
  br.prototype.iconOverrideCustomButtonOption = "icon";
  br.prototype.iconOverridePrefix = "fc-icon-";
  function j0(t, e) {
    let n = {}, r;
    for (r in t) Ll(r, n, t, e);
    for (r in e) Ll(r, n, t, e);
    return n;
  }
  function Ll(t, e, n, r) {
    if (e[t]) return e[t];
    let s = V0(t, e, n, r);
    return s && (e[t] = s), s;
  }
  function V0(t, e, n, r) {
    let s = n[t], i = r[t], a = (f) => s && s[f] !== null ? s[f] : i && i[f] !== null ? i[f] : null, l = a("component"), c = a("superType"), d = null;
    if (c) {
      if (c === t) throw new Error("Can't have a custom view type that references itself");
      d = Ll(c, e, n, r);
    }
    return !l && d && (l = d.component), l ? {
      type: t,
      component: l,
      defaults: Object.assign(Object.assign({}, d ? d.defaults : {}), s ? s.rawOptions : {}),
      overrides: Object.assign(Object.assign({}, d ? d.overrides : {}), i ? i.rawOptions : {})
    } : null;
  }
  function Xd(t) {
    return Gn(t, W0);
  }
  function W0(t) {
    let e = typeof t == "function" ? {
      component: t
    } : t, { component: n } = e;
    return e.content ? n = Jd(e) : n && !(n.prototype instanceof ze) && (n = Jd(Object.assign(Object.assign({}, e), {
      content: n
    }))), {
      superType: e.type,
      component: n,
      rawOptions: e
    };
  }
  function Jd(t) {
    return (e) => M(Zn.Consumer, null, (n) => M(Ot, {
      elTag: "div",
      elClasses: zh(n.viewSpec),
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
  function U0(t, e, n, r) {
    let s = Xd(t), i = Xd(e.views), a = j0(s, i);
    return Gn(a, (l) => B0(l, i, e, n, r));
  }
  function B0(t, e, n, r, s) {
    let i = t.overrides.duration || t.defaults.duration || r.duration || n.duration, a = null, l = "", c = "", d = {};
    if (i && (a = z0(i), a)) {
      let g = El(a);
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
      buttonTextDefault: f(s) || t.defaults.buttonText || f(Ir) || t.type,
      buttonTitleOverride: m(r) || m(n) || t.overrides.buttonHint,
      buttonTitleDefault: m(s) || t.defaults.buttonHint || m(Ir)
    };
  }
  let Kd = {};
  function z0(t) {
    let e = JSON.stringify(t), n = Kd[e];
    return n === void 0 && (n = Pe(t), Kd[e] = n), n;
  }
  function $0(t, e) {
    return e.type === "CHANGE_VIEW_TYPE" && (t = e.viewType), t;
  }
  function G0(t, e) {
    return e.type === "CHANGE_DATE" ? e.dateMarker : t;
  }
  function q0(t, e, n) {
    let r = t.initialDate;
    return r != null ? e.createMarker(r) : n.getDateMarker();
  }
  function Z0(t, e) {
    return e.type === "SET_OPTION" ? Object.assign(Object.assign({}, t), {
      [e.optionName]: e.rawOptionValue
    }) : t;
  }
  function Q0(t, e, n, r) {
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
  function X0(t, e, n) {
    let r = e ? e.activeRange : null;
    return Im({}, sk(t, n), r, n);
  }
  function J0(t, e, n, r) {
    let s = n ? n.activeRange : null;
    switch (e.type) {
      case "ADD_EVENT_SOURCES":
        return Im(t, e.sources, s, r);
      case "REMOVE_EVENT_SOURCE":
        return ek(t, e.sourceId);
      case "PREV":
      case "NEXT":
      case "CHANGE_DATE":
      case "CHANGE_VIEW_TYPE":
        return n ? Pm(t, s, r) : t;
      case "FETCH_EVENT_SOURCES":
        return Ac(t, e.sourceIds ? jh(e.sourceIds) : Nm(t, r), s, e.isRefetch || false, r);
      case "RECEIVE_EVENTS":
      case "RECEIVE_EVENT_ERROR":
        return rk(t, e.sourceId, e.fetchId, e.fetchRange);
      case "REMOVE_ALL_EVENT_SOURCES":
        return {};
      default:
        return t;
    }
  }
  function K0(t, e, n) {
    let r = e ? e.activeRange : null;
    return Ac(t, Nm(t, n), r, true, n);
  }
  function Om(t) {
    for (let e in t) if (t[e].isFetching) return true;
    return false;
  }
  function Im(t, e, n, r) {
    let s = {};
    for (let i of e) s[i.sourceId] = i;
    return n && (s = Pm(s, n, r)), Object.assign(Object.assign({}, t), s);
  }
  function ek(t, e) {
    return Yr(t, (n) => n.sourceId !== e);
  }
  function Pm(t, e, n) {
    return Ac(t, Yr(t, (r) => tk(r, e, n)), e, false, n);
  }
  function tk(t, e, n) {
    return Lm(t, n) ? !n.options.lazyFetching || !t.fetchRange || t.isFetching || e.start < t.fetchRange.start || e.end > t.fetchRange.end : !t.latestFetchId;
  }
  function Ac(t, e, n, r, s) {
    let i = {};
    for (let a in t) {
      let l = t[a];
      e[a] ? i[a] = nk(l, n, r, s) : i[a] = l;
    }
    return i;
  }
  function nk(t, e, n, r) {
    let { options: s, calendarApi: i } = r, a = r.pluginHooks.eventSourceDefs[t.sourceDefId], l = Wr();
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
  function rk(t, e, n, r) {
    let s = t[e];
    return s && n === s.latestFetchId ? Object.assign(Object.assign({}, t), {
      [e]: Object.assign(Object.assign({}, s), {
        isFetching: false,
        fetchRange: r
      })
    }) : t;
  }
  function Nm(t, e) {
    return Yr(t, (n) => Lm(n, e));
  }
  function sk(t, e) {
    let n = Jh(e), r = [].concat(t.eventSources || []), s = [];
    t.initialEvents && r.unshift(t.initialEvents), t.events && r.unshift(t.events);
    for (let i of r) {
      let a = Xh(i, e, n);
      a && s.push(a);
    }
    return s;
  }
  function Lm(t, e) {
    return !e.pluginHooks.eventSourceDefs[t.sourceDefId].ignoreRange;
  }
  function ik(t, e) {
    switch (e.type) {
      case "UNSELECT_DATES":
        return null;
      case "SELECT_DATES":
        return e.selection;
      default:
        return t;
    }
  }
  function ak(t, e) {
    switch (e.type) {
      case "UNSELECT_EVENT":
        return "";
      case "SELECT_EVENT":
        return e.eventInstanceId;
      default:
        return t;
    }
  }
  function ok(t, e) {
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
  function lk(t, e) {
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
  function ck(t, e, n, r, s) {
    let i = t.headerToolbar ? ef(t.headerToolbar, t, e, n, r, s) : null, a = t.footerToolbar ? ef(t.footerToolbar, t, e, n, r, s) : null;
    return {
      header: i,
      footer: a
    };
  }
  function ef(t, e, n, r, s, i) {
    let a = {}, l = [], c = false;
    for (let d in t) {
      let f = t[d], m = uk(f, e, n, r, s, i);
      a[d] = m.widgets, l.push(...m.viewsWithButtons), c = c || m.hasTitle;
    }
    return {
      sectionWidgets: a,
      viewsWithButtons: l,
      hasTitle: c
    };
  }
  function uk(t, e, n, r, s, i) {
    let a = e.direction === "rtl", l = e.customButtons || {}, c = n.buttonText || {}, d = e.buttonText || {}, f = n.buttonHints || {}, m = e.buttonHints || {}, g = t ? t.split(" ") : [], y = [], v = false;
    return {
      widgets: g.map((b) => b.split(",").map((_) => {
        if (_ === "title") return v = true, {
          buttonName: _
        };
        let E, R, k, T, N, I;
        if (E = l[_]) k = (O) => {
          E.click && E.click.call(O.target, O, O.target);
        }, (T = r.getCustomButtonIconClass(E)) || (T = r.getIconClass(_, a)) || (N = E.text), I = E.hint || E.text;
        else if (R = s[_]) {
          y.push(_), k = () => {
            i.changeView(_);
          }, (N = R.buttonTextOverride) || (T = r.getIconClass(_, a)) || (N = R.buttonTextDefault);
          let O = R.buttonTextOverride || R.buttonTextDefault;
          I = ei(R.buttonTitleOverride || R.buttonTitleDefault || e.viewHint, [
            O,
            _
          ], O);
        } else if (i[_]) if (k = () => {
          i[_]();
        }, (N = c[_]) || (T = r.getIconClass(_, a)) || (N = d[_]), _ === "prevYear" || _ === "nextYear") {
          let O = _ === "prevYear" ? "prev" : "next";
          I = ei(f[O] || m[O], [
            d.year || "year",
            "year"
          ], d[_]);
        } else I = (O) => ei(f[_] || m[_], [
          d[O] || O,
          O
        ], d[_]);
        return {
          buttonName: _,
          buttonClick: k,
          buttonIcon: T,
          buttonText: N,
          buttonHint: I
        };
      })),
      viewsWithButtons: y,
      hasTitle: v
    };
  }
  class dk {
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
  let fk = {
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
  const hk = un({
    name: "array-event-source",
    eventSourceDefs: [
      fk
    ]
  });
  let mk = {
    parseMeta(t) {
      return typeof t.events == "function" ? t.events : null;
    },
    fetch(t, e, n) {
      const { dateEnv: r } = t.context, s = t.eventSource.meta;
      kD(s.bind(null, im(t.range, r)), (i) => e({
        rawEvents: i
      }), n);
    }
  };
  const pk = un({
    name: "func-event-source",
    eventSourceDefs: [
      mk
    ]
  }), gk = {
    method: String,
    extraParams: U,
    startParam: String,
    endParam: String,
    timeZoneParam: String
  };
  let yk = {
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
      const { meta: r } = t.eventSource, s = bk(r, t.range, t.context);
      xD(r.method, r.url, s).then(([i, a]) => {
        e({
          rawEvents: i,
          response: a
        });
      }, n);
    }
  };
  const vk = un({
    name: "json-event-source",
    eventSourceRefiners: gk,
    eventSourceDefs: [
      yk
    ]
  });
  function bk(t, e, n) {
    let { dateEnv: r, options: s } = n, i, a, l, c, d = {};
    return i = t.startParam, i == null && (i = s.startParam), a = t.endParam, a == null && (a = s.endParam), l = t.timeZoneParam, l == null && (l = s.timeZoneParam), typeof t.extraParams == "function" ? c = t.extraParams() : c = t.extraParams || {}, Object.assign(d, c), d[i] = r.formatIso(e.start), d[a] = r.formatIso(e.end), r.timeZone !== "local" && (d[l] = r.timeZone), d;
  }
  const wk = {
    daysOfWeek: U,
    startTime: Pe,
    endTime: Pe,
    duration: Pe,
    startRecur: U,
    endRecur: U
  };
  let Sk = {
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
        return t.duration && (r = t.duration), !r && t.startTime && t.endTime && (r = LS(t.endTime, t.startTime)), {
          allDayGuess: !t.startTime && !t.endTime,
          duration: r,
          typeData: n
        };
      }
      return null;
    },
    expand(t, e, n) {
      let r = pr(e, {
        start: t.startRecur,
        end: t.endRecur
      });
      return r ? Dk(t.daysOfWeek, t.startTime, t.dateEnv, n, r) : [];
    }
  };
  const _k = un({
    name: "simple-recurring-event",
    recurringTypes: [
      Sk
    ],
    eventRefiners: wk
  });
  function Dk(t, e, n, r, s) {
    let i = t ? jh(t) : null, a = Xe(s.start), l = s.end, c = [];
    for (e && (e.milliseconds < 0 ? l = ct(l, 1) : e.milliseconds >= 1e3 * 60 * 60 * 24 && (a = ct(a, -1))); a < l; ) {
      let d;
      (!i || i[a.getUTCDay()]) && (e ? d = r.add(a, e) : d = a, c.push(r.createMarker(n.toDate(d)))), a = ct(a, 1);
    }
    return c;
  }
  const kk = un({
    name: "change-handler",
    optionChangeHandlers: {
      events(t, e) {
        tf([
          t
        ], e);
      },
      eventSources: tf
    }
  });
  function tf(t, e) {
    let n = oc(e.getCurrentData().eventSources);
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
  function xk(t, e) {
    e.emitter.trigger("datesSet", Object.assign(Object.assign({}, im(t.activeRange, e.dateEnv)), {
      view: e.viewApi
    }));
  }
  function Tk(t, e) {
    let { emitter: n } = e;
    n.hasHandlers("eventsSet") && n.trigger("eventsSet", Pr(t, e));
  }
  const Mk = [
    hk,
    pk,
    vk,
    _k,
    kk,
    un({
      name: "misc",
      isLoadingFuncs: [
        (t) => Om(t.eventSources)
      ],
      propSetHandlers: {
        dateProfile: xk,
        eventStore: Tk
      }
    })
  ];
  class Ek {
    constructor(e, n) {
      this.runTaskOption = e, this.drainedOption = n, this.queue = [], this.delayedRunner = new nc(this.drain.bind(this));
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
  function Ck(t, e, n) {
    let r;
    return /^(year|month)$/.test(t.currentRangeUnit) ? r = t.currentRange : r = t.activeRange, n.formatRange(r.start, r.end, tt(e.titleFormat || Ak(t)), {
      isEndExclusive: t.isRangeAllDay,
      defaultSeparator: e.titleRangeSeparator
    });
  }
  function Ak(t) {
    let { currentRangeUnit: e } = t;
    if (e === "year") return {
      year: "numeric"
    };
    if (e === "month") return {
      year: "numeric",
      month: "long"
    };
    let n = ka(t.currentRange.start, t.currentRange.end);
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
  class nf {
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
  class Rk {
    constructor(e) {
      this.computeCurrentViewData = Me(this._computeCurrentViewData), this.organizeRawLocales = Me(I0), this.buildLocale = Me(Am), this.buildPluginHooks = Y0(), this.buildDateEnv = Me(Ok), this.buildTheme = Me(Ik), this.parseToolbars = Me(ck), this.buildViewSpecs = Me(U0), this.buildDateProfileGenerator = da(Pk), this.buildViewApi = Me(Nk), this.buildViewUiProps = da(Fk), this.buildEventUiBySource = Me(Lk, an), this.buildEventUiBases = Me(Yk), this.parseContextBusinessHours = da(Hk), this.buildTitle = Me(Ck), this.nowManager = new nf(), this.emitter = new io(), this.actionRunner = new Ek(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.optionsForRefining = [], this.optionsForHandling = [], this.getCurrentData = () => this.data, this.dispatch = (g) => {
        this.actionRunner.request(g);
      }, this.props = e, this.actionRunner.pause(), this.nowManager = new nf();
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
      }, l = q0(r.calendarOptions, r.dateEnv, this.nowManager), c = i.dateProfileGenerator.build(l);
      Wn(c.activeRange, l) || (l = c.currentRange.start);
      for (let g of r.pluginHooks.contextInit) g(a);
      let d = X0(r.calendarOptions, c, a), f = {
        dynamicOptionOverrides: n,
        currentViewType: s,
        currentDate: l,
        dateProfile: c,
        businessHours: this.parseContextBusinessHours(a),
        eventSources: d,
        eventUiBases: {},
        eventStore: At(),
        renderableEventStore: At(),
        dateSelection: null,
        eventSelection: "",
        eventDrag: null,
        eventResize: null,
        selectionConfig: this.buildViewUiProps(a).selectionConfig
      }, m = Object.assign(Object.assign({}, a), f);
      for (let g of r.pluginHooks.reducers) Object.assign(f, g(null, null, m));
      fl(f, a) && this.emitter.trigger("loading", true), this.state = f, this.updateData(), this.actionRunner.resume();
    }
    resetOptions(e, n) {
      let { props: r } = this;
      n === void 0 ? r.optionOverrides = e : (r.optionOverrides = Object.assign(Object.assign({}, r.optionOverrides || {}), e), this.optionsForRefining.push(...n)), (n === void 0 || n.length) && this.actionRunner.request({
        type: "NOTHING"
      });
    }
    _handleAction(e) {
      let { props: n, state: r, emitter: s } = this, i = Z0(r.dynamicOptionOverrides, e), a = this.computeOptionsData(n.optionOverrides, i, n.calendarApi), l = $0(r.currentViewType, e), c = this.computeCurrentViewData(l, a, n.optionOverrides, i);
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
      this.data && this.data.dateProfileGenerator !== c.dateProfileGenerator && (m = c.dateProfileGenerator.build(f)), f = G0(f, e), m = Q0(m, e, f, c.dateProfileGenerator), (e.type === "PREV" || e.type === "NEXT" || !Wn(m.currentRange, f)) && (f = m.currentRange.start);
      let g = J0(r.eventSources, e, m, d), y = X_(r.eventStore, e, g, m, d), S = Om(g) && !c.options.progressiveEventRendering && r.renderableEventStore || y, { eventUiSingleBase: b, selectionConfig: _ } = this.buildViewUiProps(d), E = this.buildEventUiBySource(g), R = this.buildEventUiBases(S.defs, b, E), k = {
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
        dateSelection: ik(r.dateSelection, e),
        eventSelection: ak(r.eventSelection, e),
        eventDrag: ok(r.eventDrag, e),
        eventResize: lk(r.eventResize, e)
      }, T = Object.assign(Object.assign({}, d), k);
      for (let O of a.pluginHooks.reducers) Object.assign(k, O(r, e, T));
      let N = fl(r, d), I = fl(k, d);
      !N && I ? s.trigger("loading", true) : N && !I && s.trigger("loading", false), this.state = k, n.onAction && n.onAction(e);
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
        c.timeZone !== d.timeZone && (n.eventSources = a.eventSources = K0(a.eventSources, n.dateProfile, a), n.eventStore = a.eventStore = Gd(a.eventStore, r.dateEnv, a.dateEnv), n.renderableEventStore = a.renderableEventStore = Gd(a.renderableEventStore, r.dateEnv, a.dateEnv));
        for (let f in l) (this.optionsForHandling.indexOf(f) !== -1 || c[f] !== d[f]) && l[f](d[f], a);
      }
      this.optionsForHandling = [], e.onData && e.onData(a);
    }
    computeOptionsData(e, n, r) {
      if (!this.optionsForRefining.length && e === this.stableOptionOverrides && n === this.stableDynamicOptionOverrides) return this.stableCalendarOptionsData;
      let { refinedOptions: s, pluginHooks: i, localeDefaults: a, availableLocaleData: l, extra: c } = this.processRawCalendarOptions(e, n);
      rf(c);
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
      let { locales: r, locale: s } = rl([
        Ir,
        e,
        n
      ]), i = this.organizeRawLocales(r), a = i.map, l = this.buildLocale(s || i.defaultCode, a).options, c = this.buildPluginHooks(e.plugins || [], Mk), d = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Vd), Wd), Ud), c.listenerRefiners), c.optionRefiners), f = {}, m = rl([
        Ir,
        l,
        e,
        n
      ]), g = {}, y = this.currentCalendarOptionsInput, v = this.currentCalendarOptionsRefined, S = false;
      for (let b in m) this.optionsForRefining.indexOf(b) === -1 && (m[b] === y[b] || Cr[b] && b in y && Cr[b](y[b], m[b])) ? g[b] = v[b] : d[b] ? (g[b] = d[b](m[b]), S = true) : f[b] = y[b];
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
      rf(l), this.nowManager.handleInput(n.dateEnv, a.now);
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
      let a = rl([
        Ir,
        e.optionDefaults,
        r,
        s,
        e.optionOverrides,
        i
      ]), l = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Vd), Wd), Ud), p_), n.listenerRefiners), n.optionRefiners), c = {}, d = this.currentViewOptionsInput, f = this.currentViewOptionsRefined, m = false, g = {};
      for (let y in a) a[y] === d[y] || Cr[y] && Cr[y](a[y], d[y]) ? c[y] = f[y] : (a[y] === this.currentCalendarOptionsInput[y] || Cr[y] && Cr[y](a[y], this.currentCalendarOptionsInput[y]) ? y in this.currentCalendarOptionsRefined && (c[y] = this.currentCalendarOptionsRefined[y]) : l[y] ? c[y] = l[y](a[y]) : g[y] = a[y], m = true);
      return m && (this.currentViewOptionsInput = a, this.currentViewOptionsRefined = c), {
        rawOptions: this.currentViewOptionsInput,
        refinedOptions: this.currentViewOptionsRefined,
        extra: g
      };
    }
  }
  function Ok(t, e, n, r, s, i, a, l) {
    let c = Am(e || a.defaultCode, a.map);
    return new x_({
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
  function Ik(t, e) {
    let n = e.themeClasses[t.themeSystem] || br;
    return new n(t);
  }
  function Pk(t) {
    let e = t.dateProfileGeneratorClass || Gh;
    return new e(t);
  }
  function Nk(t, e, n) {
    return new dk(t, e, n);
  }
  function Lk(t) {
    return Gn(t, (e) => e.ui);
  }
  function Yk(t, e, n) {
    let r = {
      "": e
    };
    for (let s in t) {
      let i = t[s];
      i.sourceId && n[i.sourceId] && (r[s] = n[i.sourceId]);
    }
    return r;
  }
  function Fk(t) {
    let { options: e } = t;
    return {
      eventUiSingleBase: Ra({
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
      selectionConfig: Ra({
        constraint: e.selectConstraint,
        overlap: typeof e.selectOverlap == "boolean" ? e.selectOverlap : void 0,
        allow: e.selectAllow
      }, t)
    };
  }
  function fl(t, e) {
    for (let n of e.pluginHooks.isLoadingFuncs) if (n(t)) return true;
    return false;
  }
  function Hk(t) {
    return aD(t.options.businessHours, t);
  }
  function rf(t, e) {
    for (let n in t) console.warn(`Unknown option '${n}'`);
  }
  class jk extends ze {
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
  class sf extends ze {
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
      return M(jk, {
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
  class Vk extends ze {
    constructor() {
      super(...arguments), this.state = {
        availableWidth: null
      }, this.handleEl = (e) => {
        this.el = e, Sn(this.props.elRef, e), this.updateAvailableWidth();
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
  class Wk extends Ms {
    constructor(e) {
      super(e), this.handleSegClick = (n, r) => {
        let { component: s } = this, { context: i } = s, a = _s(r);
        if (a && s.isValidSegDownEl(n.target)) {
          let l = Et(n.target, ".fc-event-forced-url"), c = l ? l.querySelector("a[href]").href : "";
          i.emitter.trigger("eventClick", {
            el: r,
            event: new nt(s.context, a.eventRange.def, a.eventRange.instance),
            jsEvent: n,
            view: i.viewApi
          }), c && !n.defaultPrevented && (window.location.href = c);
        }
      }, this.destroy = Nh(e.el, "click", ".fc-event", this.handleSegClick);
    }
  }
  class Uk extends Ms {
    constructor(e) {
      super(e), this.handleEventElRemove = (n) => {
        n === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
      }, this.handleSegEnter = (n, r) => {
        _s(r) && (this.currentSegEl = r, this.triggerEvent("eventMouseEnter", n, r));
      }, this.handleSegLeave = (n, r) => {
        this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", n, r));
      }, this.removeHoverListeners = SS(e.el, ".fc-event", this.handleSegEnter, this.handleSegLeave);
    }
    destroy() {
      this.removeHoverListeners();
    }
    triggerEvent(e, n, r) {
      let { component: s } = this, { context: i } = s, a = _s(r);
      (!n || s.isValidSegDownEl(n.target)) && i.emitter.trigger(e, {
        el: r,
        event: new nt(i, a.eventRange.def, a.eventRange.instance),
        jsEvent: n,
        view: i.viewApi
      });
    }
  }
  class Bk extends Ur {
    constructor() {
      super(...arguments), this.buildViewContext = Me(E_), this.buildViewPropTransformers = Me($k), this.buildToolbarProps = Me(zk), this.headerRef = Lt(), this.footerRef = Lt(), this.interactionsStore = {}, this.state = {
        viewLabelId: dr()
      }, this.registerInteractiveComponent = (e, n) => {
        let r = ED(e, n), a = [
          Wk,
          Uk
        ].concat(this.props.pluginHooks.componentInteractions).map((l) => new l(r));
        this.interactionsStore[e.uid] = a, Ia[e.uid] = r;
      }, this.unregisterInteractiveComponent = (e) => {
        let n = this.interactionsStore[e.uid];
        if (n) {
          for (let r of n) r.destroy();
          delete this.interactionsStore[e.uid];
        }
        delete Ia[e.uid];
      }, this.resizeRunner = new nc(() => {
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
      return M(Zn.Provider, {
        value: l
      }, M(Br, {
        unit: "day"
      }, (d) => {
        let f = this.buildToolbarProps(e.viewSpec, e.dateProfile, e.dateProfileGenerator, e.currentDate, d, e.viewTitle);
        return M(qe, null, n.header && M(sf, Object.assign({
          ref: this.headerRef,
          extraClassName: "fc-header-toolbar",
          model: n.header,
          titleId: c
        }, f)), M(Vk, {
          liquid: s,
          height: i,
          aspectRatio: a,
          labeledById: c
        }, this.renderView(e), this.buildAppendContent()), n.footer && M(sf, Object.assign({
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
      return M(qe, {}, ...n);
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
  function zk(t, e, n, r, s, i) {
    let a = n.build(s, void 0, false), l = n.buildPrev(e, r, false), c = n.buildNext(e, r, false);
    return {
      title: i,
      activeButton: t.type,
      navUnit: t.singleUnit,
      isTodayEnabled: a.isValid && !Wn(e.currentRange, s),
      isPrevEnabled: l.isValid,
      isNextEnabled: c.isValid
    };
  }
  function $k(t) {
    return t.map((e) => new e());
  }
  let Gk = class extends AD {
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
          Ea(() => {
            ci(M(MD, {
              options: r.calendarOptions,
              theme: r.theme,
              emitter: r.emitter
            }, (s, i, a, l) => (this.setClassNames(s), this.setHeight(i), M(Bh.Provider, {
              value: this.customContentRenderId
            }, M(Bk, Object.assign({
              isHeightAuto: a,
              forPrint: l
            }, r))))), this.el);
          });
        } else this.isRendered && (this.isRendered = false, ci(null, this.el), this.setClassNames([]), this.setHeight(""));
      }, hS(e), this.el = e, this.renderRunner = new nc(this.handleRenderRequest), new Rk({
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
      Ea(() => {
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
      if (!hr(e, this.currentClassNames)) {
        let { classList: n } = this.el;
        for (let r of this.currentClassNames) n.remove(r);
        for (let r of e) n.add(r);
        this.currentClassNames = e;
      }
    }
    setHeight(e) {
      Ih(this.el, "height", e);
    }
  };
  const qk = parseInt(String(ai.version).split(".")[0]), Zk = qk < 18;
  let Ym = class extends Y.Component {
    constructor() {
      super(...arguments), this.elRef = Y.createRef(), this.isUpdating = false, this.isUnmounting = false, this.state = {
        customRenderingMap: /* @__PURE__ */ new Map()
      }, this.requestResize = () => {
        this.isUnmounting || (this.cancelResize(), this.resizeId = requestAnimationFrame(() => {
          this.doResize();
        }));
      };
    }
    render() {
      const e = [];
      for (const n of this.state.customRenderingMap.values()) e.push(ai.createElement(Qk, {
        key: n.id,
        customRendering: n
      }));
      return ai.createElement("div", {
        ref: this.elRef
      }, e);
    }
    componentDidMount() {
      this.isUnmounting = false;
      const e = new R0();
      this.handleCustomRendering = e.handle.bind(e), this.calendar = new Gk(this.elRef.current, Object.assign(Object.assign({}, this.props), {
        handleCustomRendering: this.handleCustomRendering
      })), this.calendar.render(), this.calendar.on("_beforeprint", () => {
        Dl.flushSync(() => {
        });
      });
      let n;
      e.subscribe((r) => {
        const s = Date.now(), i = !n;
        (Zk || i || this.isUpdating || this.isUnmounting || s - n < 100 ? Fm : Dl.flushSync)(() => {
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
  Ym.act = Fm;
  class Qk extends Y.PureComponent {
    render() {
      const { customRendering: e } = this.props, { generatorMeta: n } = e, r = typeof n == "function" ? n(e.renderProps) : n;
      return Dl.createPortal(r, e.containerEl);
    }
  }
  function Fm(t) {
    t();
  }
  class Xk extends cn {
    constructor() {
      super(...arguments), this.headerElRef = Lt();
    }
    renderSimpleLayout(e, n) {
      let { props: r, context: s } = this, i = [], a = Pa(s.options);
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
      }), M(ui, {
        elClasses: [
          "fc-daygrid"
        ],
        viewSpec: s.viewSpec
      }, M(xc, {
        liquid: !r.isHeightAuto && !r.forPrint,
        collapsibleWidth: r.forPrint,
        cols: [],
        sections: i
      }));
    }
    renderHScrollLayout(e, n, r, s) {
      let i = this.context.pluginHooks.scrollGridImpl;
      if (!i) throw new Error("No ScrollGrid implementation");
      let { props: a, context: l } = this, c = !a.forPrint && Pa(l.options), d = !a.forPrint && _m(l.options), f = [];
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
            content: Nl
          }
        ]
      }), M(ui, {
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
  function ha(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1) n[r] = [];
    for (let r of t) n[r.row].push(r);
    return n;
  }
  function sa(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1) n[r] = [];
    for (let r of t) n[r.firstCol].push(r);
    return n;
  }
  function af(t, e) {
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
  const Hm = tt({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: true,
    meridiem: "narrow"
  });
  function jm(t) {
    let { display: e } = t.eventRange.ui;
    return e === "list-item" || e === "auto" && !t.eventRange.def.allDay && t.firstCol === t.lastCol && t.isStart && t.isEnd;
  }
  class Vm extends ze {
    render() {
      let { props: e } = this;
      return M(Tc, Object.assign({}, e, {
        elClasses: [
          "fc-daygrid-event",
          "fc-daygrid-block-event",
          "fc-h-event"
        ],
        defaultTimeFormat: Hm,
        defaultDisplayEventEnd: e.defaultDisplayEventEnd,
        disableResizing: !e.seg.eventRange.def.allDay
      }));
    }
  }
  class Wm extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { seg: s } = e, i = r.eventTimeFormat || Hm, a = ti(s, i, n, true, e.defaultDisplayEventEnd);
      return M(lo, Object.assign({}, e, {
        elTag: "a",
        elClasses: [
          "fc-daygrid-event",
          "fc-daygrid-dot-event"
        ],
        elAttrs: vc(e.seg, n),
        defaultGenerator: Jk,
        timeText: a,
        isResizing: false,
        isDateSelecting: false
      }));
    }
  }
  function Jk(t) {
    return M(qe, null, M("div", {
      className: "fc-daygrid-event-dot",
      style: {
        borderColor: t.borderColor || t.backgroundColor
      }
    }), t.timeText && M("div", {
      className: "fc-event-time"
    }, t.timeText), M("div", {
      className: "fc-event-title"
    }, t.event.title || M(qe, null, "\xA0")));
  }
  class Kk extends ze {
    constructor() {
      super(...arguments), this.compileSegs = Me(ex);
    }
    render() {
      let { props: e } = this, { allSegs: n, invisibleSegs: r } = this.compileSegs(e.singlePlacements);
      return M(Tm, {
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
          return M(qe, null, n.map((i) => {
            let a = i.eventRange.instance.instanceId;
            return M("div", {
              className: "fc-daygrid-event-harness",
              key: a,
              style: {
                visibility: s[a] ? "hidden" : ""
              }
            }, jm(i) ? M(Wm, Object.assign({
              seg: i,
              isDragging: false,
              isSelected: a === e.eventSelection,
              defaultDisplayEventEnd: false
            }, Un(i, e.todayRange))) : M(Vm, Object.assign({
              seg: i,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: a === e.eventSelection,
              defaultDisplayEventEnd: false
            }, Un(i, e.todayRange))));
          }));
        }
      });
    }
  }
  function ex(t) {
    let e = [], n = [];
    for (let r of t) e.push(r.seg), r.isVisible || n.push(r.seg);
    return {
      allSegs: e,
      invisibleSegs: n
    };
  }
  const tx = tt({
    week: "narrow"
  });
  class nx extends cn {
    constructor() {
      super(...arguments), this.rootElRef = Lt(), this.state = {
        dayNumberId: dr()
      }, this.handleRootEl = (e) => {
        Sn(this.rootElRef, e), Sn(this.props.elRef, e);
      };
    }
    render() {
      let { context: e, props: n, state: r, rootElRef: s } = this, { options: i, dateEnv: a } = e, { date: l, dateProfile: c } = n;
      const d = n.showDayNumber && sx(l, c.currentRange, a);
      return M(Ec, {
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
        defaultGenerator: rx,
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
      }, n.showWeekNumber && M(xm, {
        elTag: "a",
        elClasses: [
          "fc-daygrid-week-number"
        ],
        elAttrs: Ds(e, l, "week"),
        date: l,
        defaultFormat: tx
      }), !m.isDisabled && (n.showDayNumber || Cc(i) || n.forceDayTop) ? M("div", {
        className: "fc-daygrid-day-top"
      }, M(f, {
        elTag: "a",
        elClasses: [
          "fc-daygrid-day-number",
          d && "fc-daygrid-month-start"
        ],
        elAttrs: Object.assign(Object.assign({}, Ds(e, l)), {
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
      }, M(Kk, {
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
  function rx(t) {
    return t.dayNumberText || M(qe, null, "\xA0");
  }
  function sx(t, e, n) {
    const { start: r, end: s } = e, i = mr(s, -1), a = n.getYear(r), l = n.getMonth(r), c = n.getYear(i), d = n.getMonth(i);
    return !(a === c && l === d) && (t.valueOf() === r.valueOf() || n.getDay(t) === 1 && t.valueOf() < s.valueOf());
  }
  function Um(t) {
    return t.eventRange.instance.instanceId + ":" + t.firstCol;
  }
  function Bm(t) {
    return Um(t) + ":" + t.lastCol;
  }
  function ix(t, e, n, r, s, i, a) {
    let l = new lx((_) => {
      let E = t[_.index].eventRange.instance.instanceId + ":" + _.span.start + ":" + (_.span.end - 1);
      return s[E] || 1;
    });
    l.allowReslicing = true, l.strictOrder = r, e === true || n === true ? (l.maxCoord = i, l.hiddenConsumes = true) : typeof e == "number" ? l.maxStackCnt = e : typeof n == "number" && (l.maxStackCnt = n, l.hiddenConsumes = true);
    let c = [], d = [];
    for (let _ = 0; _ < t.length; _ += 1) {
      let E = t[_], R = Bm(E);
      s[R] != null ? c.push({
        index: _,
        span: {
          start: E.firstCol,
          end: E.lastCol + 1
        }
      }) : d.push(E);
    }
    let f = l.addSegs(c), m = l.toRects(), { singleColPlacements: g, multiColPlacements: y, leftoverMargins: v } = ax(m, t, a), S = [], b = [];
    for (let _ of d) {
      y[_.firstCol].push({
        seg: _,
        isVisible: false,
        isAbsolute: true,
        absoluteTop: 0,
        marginTop: 0
      });
      for (let E = _.firstCol; E <= _.lastCol; E += 1) g[E].push({
        seg: ms(_, E, E + 1, a),
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
        seg: ms(E, R.start, R.end, a),
        isVisible: false,
        isAbsolute: true,
        absoluteTop: 0,
        marginTop: 0
      });
      for (let k = R.start; k < R.end; k += 1) S[k] += 1, g[k].push({
        seg: ms(E, k, k + 1, a),
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
  function ax(t, e, n) {
    let r = ox(t, n.length), s = [], i = [], a = [];
    for (let l = 0; l < n.length; l += 1) {
      let c = r[l], d = [], f = 0, m = 0;
      for (let y of c) {
        let v = e[y.index];
        d.push({
          seg: ms(v, l, l + 1, n),
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
          seg: ms(v, y.span.start, y.span.end, n),
          isVisible: true,
          isAbsolute: true,
          absoluteTop: y.levelCoord,
          marginTop: 0
        })) : b && (g.push({
          seg: ms(v, y.span.start, y.span.end, n),
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
  function ox(t, e) {
    let n = [];
    for (let r = 0; r < e; r += 1) n.push([]);
    for (let r of t) for (let s = r.span.start; s < r.span.end; s += 1) n[s].push(r);
    return n;
  }
  function ms(t, e, n, r) {
    if (t.firstCol === e && t.lastCol === n - 1) return t;
    let s = t.eventRange, i = s.range, a = pr(i, {
      start: r[e].date,
      end: ct(r[n - 1].date, 1)
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
  class lx extends dm {
    constructor() {
      super(...arguments), this.hiddenConsumes = false, this.forceHidden = {};
    }
    addSegs(e) {
      const n = super.addSegs(e), { entriesByLevel: r } = this, s = (i) => !this.forceHidden[Nr(i)];
      for (let i = 0; i < r.length; i += 1) r[i] = r[i].filter(s);
      return n;
    }
    handleInvalidInsertion(e, n, r) {
      const { entriesByLevel: s, forceHidden: i } = this, { touchingEntry: a, touchingLevel: l, touchingLateral: c } = e;
      if (this.hiddenConsumes && a) {
        const d = Nr(a);
        if (!i[d]) if (this.allowReslicing) {
          const f = Object.assign(Object.assign({}, a), {
            span: Dc(a.span, n.span)
          }), m = Nr(f);
          i[m] = true, s[l][c] = f, r.push(f), this.splitEntry(a, n, r);
        } else i[d] = true, r.push(a);
      }
      super.handleInvalidInsertion(e, n, r);
    }
  }
  class zm extends cn {
    constructor() {
      super(...arguments), this.cellElRefs = new Hn(), this.frameElRefs = new Hn(), this.fgElRefs = new Hn(), this.segHarnessRefs = new Hn(), this.rootElRef = Lt(), this.state = {
        framePositions: null,
        maxContentHeight: null,
        segHeights: {}
      }, this.handleResize = (e) => {
        e && this.updateSizing(true);
      };
    }
    render() {
      let { props: e, state: n, context: r } = this, { options: s } = r, i = e.cells.length, a = sa(e.businessHourSegs, i), l = sa(e.bgEventSegs, i), c = sa(this.getHighlightSegs(), i), d = sa(this.getMirrorSegs(), i), { singleColPlacements: f, multiColPlacements: m, moreCnts: g, moreMarginTops: y } = ix(yc(e.fgEventSegs, s.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, s.eventOrderStrict, n.segHeights, n.maxContentHeight, e.cells), v = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
      return M("tr", {
        ref: this.rootElRef,
        role: "row"
      }, e.renderIntro && e.renderIntro(), e.cells.map((S, b) => {
        let _ = this.renderFgSegs(b, e.forPrint ? f[b] : m[b], e.todayRange, v), E = this.renderFgSegs(b, cx(d[b], m), e.todayRange, {}, !!e.eventDrag, !!e.eventResize, false);
        return M(nx, {
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
          fgContent: M(qe, null, M(qe, null, _), M(qe, null, E)),
          bgContent: M(qe, null, this.renderFillSegs(c[b], "highlight"), this.renderFillSegs(a[b], "non-business"), this.renderFillSegs(l[b], "bg-event")),
          minHeight: e.cellMinHeight
        });
      }));
    }
    componentDidMount() {
      this.updateSizing(true), this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(e, n) {
      let r = this.props;
      this.updateSizing(!an(e, r));
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
        let { seg: S } = v, { instanceId: b } = S.eventRange.instance, _ = v.isVisible && !s[b], E = v.isAbsolute, R = "", k = "";
        E && (c.isRtl ? (k = 0, R = f.lefts[S.lastCol] - f.lefts[S.firstCol]) : (R = 0, k = f.rights[S.firstCol] - f.rights[S.lastCol])), y.push(M("div", {
          className: "fc-daygrid-event-harness" + (E ? " fc-daygrid-event-harness-abs" : ""),
          key: Um(S),
          ref: g ? null : this.segHarnessRefs.createRef(Bm(S)),
          style: {
            visibility: _ ? "" : "hidden",
            marginTop: E ? "" : v.marginTop,
            top: E ? v.absoluteTop : "",
            left: R,
            right: k
          }
        }, jm(S) ? M(Wm, Object.assign({
          seg: S,
          isDragging: i,
          isSelected: b === d,
          defaultDisplayEventEnd: m
        }, Un(S, r))) : M(Vm, Object.assign({
          seg: S,
          isDragging: i,
          isResizing: a,
          isDateSelecting: l,
          isSelected: b === d,
          defaultDisplayEventEnd: m
        }, Un(S, r)))));
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
          key: sm(l.eventRange),
          className: "fc-daygrid-bg-harness",
          style: c
        }, n === "bg-event" ? M(Dm, Object.assign({
          seg: l
        }, Un(l, s))) : km(n)));
      }
      return M(qe, {}, ...a);
    }
    updateSizing(e) {
      let { props: n, state: r, frameElRefs: s } = this;
      if (!n.forPrint && n.clientWidth !== null) {
        if (e) {
          let c = n.cells.map((d) => s.currentMap[d.key]);
          if (c.length) {
            let d = this.rootElRef.current, f = new ks(d, c, true, false);
            (!r.framePositions || !r.framePositions.similarTo(f)) && this.setState({
              framePositions: new ks(d, c, true, false)
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
  zm.addStateEquality({
    segHeights: an
  });
  function cx(t, e) {
    if (!t.length) return [];
    let n = ux(e);
    return t.map((r) => ({
      seg: r,
      isVisible: true,
      isAbsolute: true,
      absoluteTop: n[r.eventRange.instance.instanceId],
      marginTop: 0
    }));
  }
  function ux(t) {
    let e = {};
    for (let n of t) for (let r of n) e[r.seg.eventRange.instance.instanceId] = r.absoluteTop;
    return e;
  }
  class dx extends cn {
    constructor() {
      super(...arguments), this.splitBusinessHourSegs = Me(ha), this.splitBgEventSegs = Me(fx), this.splitFgEventSegs = Me(ha), this.splitDateSelectionSegs = Me(ha), this.splitEventDrag = Me(af), this.splitEventResize = Me(af), this.rowRefs = new Hn();
    }
    render() {
      let { props: e, context: n } = this, r = e.cells.length, s = this.splitBusinessHourSegs(e.businessHourSegs, r), i = this.splitBgEventSegs(e.bgEventSegs, r), a = this.splitFgEventSegs(e.fgEventSegs, r), l = this.splitDateSelectionSegs(e.dateSelectionSegs, r), c = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r), f = r >= 7 && e.clientWidth ? e.clientWidth / n.options.aspectRatio / 6 : null;
      return M(Br, {
        unit: "day"
      }, (m, g) => M(qe, null, e.cells.map((y, v) => M(zm, {
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
      this.rowPositions = new ks(this.rootEl, this.rowRefs.collect().map((e) => e.getCellEls()[0]), false, true), this.colPositions = new ks(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), true, false);
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
      let r = this.props.cells[e][n].date, s = ct(r, 1);
      return {
        start: r,
        end: s
      };
    }
  }
  function fx(t, e) {
    return ha(t.filter(hx), e);
  }
  function hx(t) {
    return t.eventRange.def.allDay;
  }
  class mx extends cn {
    constructor() {
      super(...arguments), this.elRef = Lt(), this.needsScrollReset = false;
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
      }, M(dx, {
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
        const e = px(this.elRef.current, this.props.dateProfile);
        if (e) {
          const n = e.closest(".fc-daygrid-body"), r = n.closest(".fc-scroller"), s = e.getBoundingClientRect().top - n.getBoundingClientRect().top;
          r.scrollTop = s ? s + 1 : 0;
        }
        this.needsScrollReset = false;
      }
    }
  }
  function px(t, e) {
    let n;
    return e.currentRangeUnit.match(/year|month/) && (n = t.querySelector(`[data-date="${JS(e.currentDate)}-01"]`)), n || (n = t.querySelector(`[data-date="${Di(e.currentDate)}"]`)), n;
  }
  class gx extends ym {
    constructor() {
      super(...arguments), this.forceDayIfListItem = true;
    }
    sliceRange(e, n) {
      return n.sliceRange(e);
    }
  }
  class $m extends cn {
    constructor() {
      super(...arguments), this.slicer = new gx(), this.tableRef = Lt();
    }
    render() {
      let { props: e, context: n } = this;
      return M(mx, Object.assign({
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
  class yx extends Xk {
    constructor() {
      super(...arguments), this.buildDayTableModel = Me(vx), this.headerRef = Lt(), this.tableRef = Lt();
    }
    render() {
      let { options: e, dateProfileGenerator: n } = this.context, { props: r } = this, s = this.buildDayTableModel(r.dateProfile, n), i = e.dayHeaders && M(mm, {
        ref: this.headerRef,
        dateProfile: r.dateProfile,
        dates: s.headerDates,
        datesRepDistinctDays: s.rowCnt === 1
      }), a = (l) => M($m, {
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
  function vx(t, e) {
    let n = new pm(t.renderRange, e);
    return new gm(n, /year|month|week/.test(t.currentRangeUnit));
  }
  class bx extends Gh {
    buildRenderRange(e, n, r) {
      let s = super.buildRenderRange(e, n, r), { props: i } = this;
      return wx({
        currentRange: s,
        snapToWeek: /^(year|month)$/.test(n),
        fixedWeekCount: i.fixedWeekCount,
        dateEnv: i.dateEnv
      });
    }
  }
  function wx(t) {
    let { dateEnv: e, currentRange: n } = t, { start: r, end: s } = n, i;
    if (t.snapToWeek && (r = e.startOfWeek(r), i = e.startOfWeek(s), i.valueOf() !== s.valueOf() && (s = Ld(i, 1))), t.fixedWeekCount) {
      let a = e.startOfWeek(e.startOfMonth(ct(n.end, -1))), l = Math.ceil(VS(a, s));
      s = Ld(s, 6 - l);
    }
    return {
      start: r,
      end: s
    };
  }
  var Sx = ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}';
  Qa(Sx);
  var _x = un({
    name: "@fullcalendar/daygrid",
    initialView: "dayGridMonth",
    views: {
      dayGrid: {
        component: yx,
        dateProfileGeneratorClass: bx
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
  class Dx extends ND {
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
      return e.allDay ? dD(e) ? [
        "timed",
        "allDay"
      ] : [
        "allDay"
      ] : [
        "timed"
      ];
    }
  }
  const kx = tt({
    hour: "numeric",
    minute: "2-digit",
    omitZeroMinute: true,
    meridiem: "short"
  });
  function Gm(t) {
    let e = [
      "fc-timegrid-slot",
      "fc-timegrid-slot-label",
      t.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"
    ];
    return M(Zn.Consumer, null, (n) => {
      if (!t.isLabeled) return M("td", {
        className: e.join(" "),
        "data-time": t.isoTimeStr
      });
      let { dateEnv: r, options: s, viewApi: i } = n, a = s.slotLabelFormat == null ? kx : Array.isArray(s.slotLabelFormat) ? tt(s.slotLabelFormat[0]) : tt(s.slotLabelFormat), l = {
        level: 0,
        time: t.time,
        date: r.toDate(t.date),
        view: i,
        text: r.format(t.date, a)
      };
      return M(Ot, {
        elTag: "td",
        elClasses: e,
        elAttrs: {
          "data-time": t.isoTimeStr
        },
        renderProps: l,
        generatorName: "slotLabelContent",
        customGenerator: s.slotLabelContent,
        defaultGenerator: xx,
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
  function xx(t) {
    return t.text;
  }
  class Tx extends ze {
    render() {
      return this.props.slatMetas.map((e) => M("tr", {
        key: e.key
      }, M(Gm, Object.assign({}, e))));
    }
  }
  const Mx = tt({
    week: "short"
  }), Ex = 5;
  class Cx extends cn {
    constructor() {
      super(...arguments), this.allDaySplitter = new Dx(), this.headerElRef = Lt(), this.rootElRef = Lt(), this.scrollerElRef = Lt(), this.state = {
        slatCoords: null
      }, this.handleScrollTopRequest = (e) => {
        let n = this.scrollerElRef.current;
        n && (n.scrollTop = e);
      }, this.renderHeadAxis = (e, n = "") => {
        let { options: r } = this.context, { dateProfile: s } = this.props, i = s.renderRange, l = vr(i.start, i.end) === 1 ? Ds(this.context, i.start, "week") : {};
        return r.weekNumbers && e === "day" ? M(xm, {
          elTag: "th",
          elClasses: [
            "fc-timegrid-axis",
            "fc-scrollgrid-shrink"
          ],
          elAttrs: {
            "aria-hidden": true
          },
          date: i.start,
          defaultFormat: Mx
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
        return M(Ot, {
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
          defaultGenerator: Ax,
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
      let { context: s, props: i } = this, a = [], l = Pa(s.options);
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
      }), M(ui, {
        elRef: this.rootElRef,
        elClasses: [
          "fc-timegrid"
        ],
        viewSpec: s.viewSpec
      }, M(xc, {
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
      let { context: d, props: f } = this, m = !f.forPrint && Pa(d.options), g = !f.forPrint && _m(d.options), y = [];
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
            }, S.tableColGroupNode, M("tbody", null, M(Tx, {
              slatMetas: a
            }))), M("div", {
              className: "fc-timegrid-now-indicator-container"
            }, M(Br, {
              unit: v ? "minute" : "day"
            }, (b) => {
              let _ = v && l && l.safeComputeTop(b);
              return typeof _ == "number" ? M(Mc, {
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
            content: Nl
          },
          {
            key: "cols",
            content: Nl
          }
        ]
      }), M(ui, {
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
      return (e === true || n === true) && (e = void 0, n = Ex), {
        dayMaxEvents: e,
        dayMaxEventRows: n
      };
    }
  }
  function Ax(t) {
    return t.text;
  }
  class Rx {
    constructor(e, n, r) {
      this.positions = e, this.dateProfile = n, this.slotDuration = r;
    }
    safeComputeTop(e) {
      let { dateProfile: n } = this;
      if (Wn(n.currentRange, e)) {
        let r = Xe(e), s = e.valueOf() - r.valueOf();
        if (s >= nn(n.slotMinTime) && s < nn(n.slotMaxTime)) return this.computeTimeTop(Pe(s));
      }
      return null;
    }
    computeDateTop(e, n) {
      return n || (n = Xe(e)), this.computeTimeTop(Pe(e.valueOf() - n.valueOf()));
    }
    computeTimeTop(e) {
      let { positions: n, dateProfile: r } = this, s = n.els.length, i = (e.milliseconds - nn(r.slotMinTime)) / nn(this.slotDuration), a, l;
      return i = Math.max(0, i), i = Math.min(s, i), a = Math.floor(i), a = Math.min(a, s - 1), l = i - a, n.tops[a] + n.getHeight(a) * l;
    }
  }
  class Ox extends ze {
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
        }, e.axis && M(Gm, Object.assign({}, i)), M(Ot, {
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
  class Ix extends ze {
    constructor() {
      super(...arguments), this.rootElRef = Lt(), this.slatElRefs = new Hn();
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
      }, e.tableColGroupNode, M(Ox, {
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
      n.onCoords && n.clientWidth !== null && this.rootElRef.current.offsetHeight && n.onCoords(new Rx(new ks(this.rootElRef.current, Px(this.slatElRefs.currentMap, n.slatMetas), false, true), this.props.dateProfile, e.options.slotDuration));
    }
  }
  function Px(t, e) {
    return e.map((n) => t[n.key]);
  }
  function Us(t, e) {
    let n = [], r;
    for (r = 0; r < e; r += 1) n.push([]);
    if (t) for (r = 0; r < t.length; r += 1) n[t[r].col].push(t[r]);
    return n;
  }
  function of(t, e) {
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
  class Nx extends ze {
    render() {
      let { props: e } = this;
      return M(Tm, {
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
        popoverContent: () => Zm(e.hiddenSegs, e),
        defaultGenerator: Lx,
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
  function Lx(t) {
    return t.shortText;
  }
  function Yx(t, e, n) {
    let r = new dm();
    e != null && (r.strictOrder = e), n != null && (r.maxStackCnt = n);
    let s = r.addSegs(t), i = qD(s), a = Fx(r);
    return a = Wx(a, 1), {
      segRects: Ux(a),
      hiddenGroups: i
    };
  }
  function Fx(t) {
    const { entriesByLevel: e } = t, n = Rc((r, s) => r + ":" + s, (r, s) => {
      let i = Vx(t, r, s), a = lf(i, n), l = e[r][s];
      return [
        Object.assign(Object.assign({}, l), {
          nextLevelNodes: a[0]
        }),
        l.thickness + a[1]
      ];
    });
    return lf(e.length ? {
      level: 0,
      lateralStart: 0,
      lateralEnd: e[0].length
    } : null, n)[0];
  }
  function lf(t, e) {
    if (!t) return [
      [],
      0
    ];
    let { level: n, lateralStart: r, lateralEnd: s } = t, i = r, a = [];
    for (; i < s; ) a.push(e(n, i)), i += 1;
    return a.sort(Hx), [
      a.map(jx),
      a[0][1]
    ];
  }
  function Hx(t, e) {
    return e[1] - t[1];
  }
  function jx(t) {
    return t[0];
  }
  function Vx(t, e, n) {
    let { levelCoords: r, entriesByLevel: s } = t, i = s[e][n], a = r[e] + i.thickness, l = r.length, c = e;
    for (; c < l && r[c] < a; c += 1) ;
    for (; c < l; c += 1) {
      let d = s[c], f, m = Il(d, i.span.start, Ol), g = m[0] + m[1], y = g;
      for (; (f = d[y]) && f.span.start < i.span.end; ) y += 1;
      if (g < y) return {
        level: c,
        lateralStart: g,
        lateralEnd: y
      };
    }
    return null;
  }
  function Wx(t, e) {
    const n = Rc((r, s, i) => Nr(r), (r, s, i) => {
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
  function Ux(t) {
    let e = [];
    const n = Rc((s, i, a) => Nr(s), (s, i, a) => {
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
  function Rc(t, e) {
    const n = {};
    return (...r) => {
      let s = t(...r);
      return s in n ? n[s] : n[s] = e(...r);
    };
  }
  function cf(t, e, n = null, r = 0) {
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
  function Bx(t, e, n, r) {
    let s = [], i = [];
    for (let d = 0; d < t.length; d += 1) {
      let f = e[d];
      f ? s.push({
        index: d,
        thickness: 1,
        span: f
      }) : i.push(t[d]);
    }
    let { segRects: a, hiddenGroups: l } = Yx(s, n, r), c = [];
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
  const zx = tt({
    hour: "numeric",
    minute: "2-digit",
    meridiem: false
  });
  class qm extends ze {
    render() {
      return M(Tc, Object.assign({}, this.props, {
        elClasses: [
          "fc-timegrid-event",
          "fc-v-event",
          this.props.isShort && "fc-timegrid-event-short"
        ],
        defaultTimeFormat: zx
      }));
    }
  }
  class $x extends ze {
    constructor() {
      super(...arguments), this.sortEventSegs = Me(yc);
    }
    render() {
      let { props: e, context: n } = this, { options: r } = n, s = r.selectMirror, i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || s && e.dateSelectionSegs || [], a = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, l = this.sortEventSegs(e.fgEventSegs, r.eventOrder);
      return M(Ec, {
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
      }, this.renderNowIndicator(e.nowIndicatorSegs)), Cc(r) && M(c, {
        elTag: "div",
        elClasses: [
          "fc-timegrid-col-misc"
        ]
      })));
    }
    renderFgSegs(e, n, r, s, i, a) {
      let { props: l } = this;
      return l.forPrint ? Zm(e, l) : this.renderPositionedFgSegs(e, n, r, s, i, a);
    }
    renderPositionedFgSegs(e, n, r, s, i, a) {
      let { eventMaxStack: l, eventShortHeight: c, eventOrderStrict: d, eventMinHeight: f } = this.context.options, { date: m, slatCoords: g, eventSelection: y, todayRange: v, nowDate: S } = this.props, b = r || s || i, _ = cf(e, m, g, f), { segPlacements: E, hiddenGroups: R } = Bx(e, _, d, l);
      return M(qe, null, this.renderHiddenGroups(R, e), E.map((k) => {
        let { seg: T, rect: N } = k, I = T.eventRange.instance.instanceId, O = b || !!(!n[I] && N), K = hl(N && N.span), z = !b && N ? this.computeSegHStyle(N) : {
          left: 0,
          right: 0
        }, L = !!N && N.stackForward > 0, te = !!N && N.span.end - N.span.start < c;
        return M("div", {
          className: "fc-timegrid-event-harness" + (L ? " fc-timegrid-event-harness-inset" : ""),
          key: a || I,
          style: Object.assign(Object.assign({
            visibility: O ? "" : "hidden"
          }, K), z)
        }, M(qm, Object.assign({
          seg: T,
          isDragging: r,
          isResizing: s,
          isDateSelecting: i,
          isSelected: I === y,
          isShort: te
        }, Un(T, v, S))));
      }));
    }
    renderHiddenGroups(e, n) {
      let { extraDateSpan: r, dateProfile: s, todayRange: i, nowDate: a, eventSelection: l, eventDrag: c, eventResize: d } = this.props;
      return M(qe, null, e.map((f) => {
        let m = hl(f.span), g = Gx(f.entries, n);
        return M(Nx, {
          key: Hh(Mm(g)),
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
      let { props: r, context: s } = this, a = cf(e, r.date, r.slatCoords, s.options.eventMinHeight).map((l, c) => {
        let d = e[c];
        return M("div", {
          key: sm(d.eventRange),
          className: "fc-timegrid-bg-harness",
          style: hl(l)
        }, n === "bg-event" ? M(Dm, Object.assign({
          seg: d
        }, Un(d, r.todayRange, r.nowDate))) : km(n));
      });
      return M(qe, null, a);
    }
    renderNowIndicator(e) {
      let { slatCoords: n, date: r } = this.props;
      return n ? e.map((s, i) => M(Mc, {
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
  function Zm(t, { todayRange: e, nowDate: n, eventSelection: r, eventDrag: s, eventResize: i }) {
    let a = (s ? s.affectedInstances : null) || (i ? i.affectedInstances : null) || {};
    return M(qe, null, t.map((l) => {
      let c = l.eventRange.instance.instanceId;
      return M("div", {
        key: c,
        style: {
          visibility: a[c] ? "hidden" : ""
        }
      }, M(qm, Object.assign({
        seg: l,
        isDragging: false,
        isResizing: false,
        isDateSelecting: false,
        isSelected: c === r,
        isShort: false
      }, Un(l, e, n))));
    }));
  }
  function hl(t) {
    return t ? {
      top: t.start,
      bottom: -t.end
    } : {
      top: "",
      bottom: ""
    };
  }
  function Gx(t, e) {
    return t.map((n) => e[n.index]);
  }
  class qx extends ze {
    constructor() {
      super(...arguments), this.splitFgEventSegs = Me(Us), this.splitBgEventSegs = Me(Us), this.splitBusinessHourSegs = Me(Us), this.splitNowIndicatorSegs = Me(Us), this.splitDateSelectionSegs = Me(Us), this.splitEventDrag = Me(of), this.splitEventResize = Me(of), this.rootElRef = Lt(), this.cellElRefs = new Hn();
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
      }, typeof r == "number" && M(Mc, {
        elClasses: [
          "fc-timegrid-now-indicator-arrow"
        ],
        elStyle: {
          top: r
        },
        isAxis: true,
        date: e.nowDate
      })))), e.cells.map((g, y) => M($x, {
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
      e.onColCoords && e.clientWidth !== null && e.onColCoords(new ks(this.rootElRef.current, Zx(this.cellElRefs.currentMap, e.cells), true, false));
    }
  }
  function Zx(t, e) {
    return e.map((n) => t[n.key]);
  }
  class Qx extends cn {
    constructor() {
      super(...arguments), this.processSlotOptions = Me(Xx), this.state = {
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
      }, M(Ix, {
        axis: e.axis,
        dateProfile: e.dateProfile,
        slatMetas: e.slatMetas,
        clientWidth: e.clientWidth,
        minHeight: e.expandRows ? e.clientHeight : "",
        tableMinWidth: e.tableMinWidth,
        tableColGroupNode: e.axis ? e.tableColGroupNode : null,
        onCoords: this.handleSlatCoords
      }), M(qx, {
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
        let g = this.props.cells[f], y = l.positions.tops[m], v = l.positions.getHeight(m), S = (n - y) / v, b = Math.floor(S * d), _ = m * d + b, E = this.props.cells[f].date, R = Ml(a.slotMinTime, YS(c, _)), k = r.add(E, R), T = r.add(k, c);
        return {
          dateProfile: a,
          dateSpan: Object.assign({
            range: {
              start: k,
              end: T
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
  function Xx(t, e) {
    let n = e || t, r = sc(t, n);
    return r === null && (n = t, r = 1), {
      snapDuration: n,
      snapsPerSlot: r
    };
  }
  class Jx extends ym {
    sliceRange(e, n) {
      let r = [];
      for (let s = 0; s < n.length; s += 1) {
        let i = pr(e, n[s]);
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
  class Kx extends cn {
    constructor() {
      super(...arguments), this.buildDayRanges = Me(eT), this.slicer = new Jx(), this.timeColsRef = Lt();
    }
    render() {
      let { props: e, context: n } = this, { dateProfile: r, dayTableModel: s } = e, { nowIndicator: i, nextDayThreshold: a } = n.options, l = this.buildDayRanges(s, r, n.dateEnv);
      return M(Br, {
        unit: i ? "minute" : "day"
      }, (c, d) => M(Qx, Object.assign({
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
  function eT(t, e, n) {
    let r = [];
    for (let s of t.headerDates) r.push({
      start: n.add(s, e.slotMinTime),
      end: n.add(s, e.slotMaxTime)
    });
    return r;
  }
  const uf = [
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
  function tT(t, e, n, r, s) {
    let i = /* @__PURE__ */ new Date(0), a = t, l = Pe(0), c = n || nT(r), d = [];
    for (; nn(a) < nn(e); ) {
      let f = s.add(i, a), m = sc(l, c) !== null;
      d.push({
        date: f,
        time: a,
        key: f.toISOString(),
        isoTimeStr: KS(f),
        isLabeled: m
      }), a = Ml(a, r), l = Ml(l, r);
    }
    return d;
  }
  function nT(t) {
    let e, n, r;
    for (e = uf.length - 1; e >= 0; e -= 1) if (n = Pe(uf[e]), r = sc(n, t), r !== null && r > 1) return n;
    return t;
  }
  class rT extends Cx {
    constructor() {
      super(...arguments), this.buildTimeColsModel = Me(sT), this.buildSlatMetas = Me(tT);
    }
    render() {
      let { options: e, dateEnv: n, dateProfileGenerator: r } = this.context, { props: s } = this, { dateProfile: i } = s, a = this.buildTimeColsModel(i, r), l = this.allDaySplitter.splitProps(s), c = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, n), { dayMinWidth: d } = e, f = !d, m = d, g = e.dayHeaders && M(mm, {
        dates: a.headerDates,
        dateProfile: i,
        datesRepDistinctDays: true,
        renderIntro: f ? this.renderHeadAxis : null
      }), y = e.allDaySlot !== false && ((S) => M($m, Object.assign({}, l.allDay, {
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
      }, this.getAllDayMaxEventProps()))), v = (S) => M(Kx, Object.assign({}, l.timed, {
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
  function sT(t, e) {
    let n = new pm(t.renderRange, e);
    return new gm(n, false);
  }
  var iT = '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}';
  Qa(iT);
  const aT = {
    allDaySlot: Boolean
  };
  var oT = un({
    name: "@fullcalendar/timegrid",
    initialView: "timeGridWeek",
    optionRefiners: aT,
    views: {
      timeGrid: {
        component: rT,
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
  oo.touchMouseIgnoreWait = 500;
  let Yl = 0, Na = 0, Fl = false;
  class Qm {
    constructor(e) {
      this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = false, this.shouldWatchScroll = true, this.isDragging = false, this.isTouchDragging = false, this.wasTouchScroll = false, this.handleMouseDown = (n) => {
        if (!this.shouldIgnoreMouse() && lT(n) && this.tryStart(n)) {
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
          r.removeEventListener("touchmove", this.handleTouchMove), r.removeEventListener("touchend", this.handleTouchEnd), r.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, true), this.emitter.trigger("pointerup", this.createEventFromTouch(n)), this.cleanup(), this.isTouchDragging = false, cT();
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
      }, this.containerEl = e, this.emitter = new io(), e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
        passive: true
      }), uT();
    }
    destroy() {
      this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
        passive: true
      }), dT();
    }
    tryStart(e) {
      let n = this.querySubjectEl(e), r = e.target;
      return n && (!this.handleSelector || Et(r, this.handleSelector)) ? (this.subjectEl = n, this.isDragging = true, this.wasTouchScroll = false, true) : false;
    }
    cleanup() {
      Fl = false, this.isDragging = false, this.subjectEl = null, this.destroyScrollWatch();
    }
    querySubjectEl(e) {
      return this.selector ? Et(e.target, this.selector) : this.containerEl;
    }
    shouldIgnoreMouse() {
      return Yl || this.isTouchDragging;
    }
    cancelTouchScroll() {
      this.isDragging && (Fl = true);
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
  function lT(t) {
    return t.button === 0 && !t.ctrlKey;
  }
  function cT() {
    Yl += 1, setTimeout(() => {
      Yl -= 1;
    }, oo.touchMouseIgnoreWait);
  }
  function uT() {
    Na += 1, Na === 1 && window.addEventListener("touchmove", Xm, {
      passive: false
    });
  }
  function dT() {
    Na -= 1, Na || window.removeEventListener("touchmove", Xm, {
      passive: false
    });
  }
  function Xm(t) {
    Fl && t.preventDefault();
  }
  class fT {
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
      r.style.transition = "top " + n + "ms,left " + n + "ms", Ks(r, {
        left: s.left,
        top: s.top
      }), _S(r, () => {
        r.style.transition = "", e();
      });
    }
    cleanup() {
      this.mirrorEl && (rc(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null;
    }
    updateElPosition() {
      this.sourceEl && this.isVisible && Ks(this.getMirrorEl(), {
        left: this.sourceElRect.left + this.deltaX,
        top: this.sourceElRect.top + this.deltaY
      });
    }
    getMirrorEl() {
      let e = this.sourceElRect, n = this.mirrorEl;
      return n || (n = this.mirrorEl = this.sourceEl.cloneNode(true), n.style.userSelect = "none", n.style.webkitUserSelect = "none", n.style.pointerEvents = "none", n.classList.add("fc-event-dragging"), Ks(n, {
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
  class Jm extends _c {
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
  class Km extends Jm {
    constructor(e, n) {
      super(new $D(e), n);
    }
    getEventTarget() {
      return this.scrollController.el;
    }
    computeClientRect() {
      return BD(this.scrollController.el);
    }
  }
  class hT extends Jm {
    constructor(e) {
      super(new GD(), e);
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
  const df = typeof performance == "function" ? performance.now : Date.now;
  class mT {
    constructor() {
      this.isEnabled = true, this.scrollQuery = [
        window,
        ".fc-scroller"
      ], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = false, this.scrollCaches = null, this.everMovedUp = false, this.everMovedDown = false, this.everMovedLeft = false, this.everMovedRight = false, this.animate = () => {
        if (this.isAnimating) {
          let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
          if (e) {
            let n = df();
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
        i < 0 ? this.everMovedUp = true : i > 0 && (this.everMovedDown = true), a < 0 ? this.everMovedLeft = true : a > 0 && (this.everMovedRight = true), this.pointerScreenX = r, this.pointerScreenY = s, this.isAnimating || (this.isAnimating = true, this.requestAnimation(df()));
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
      return this.queryScrollEls(e).map((n) => n === window ? new hT(false) : new Km(n, false));
    }
    queryScrollEls(e) {
      let n = [];
      for (let r of this.scrollQuery) typeof r == "object" ? n.push(r) : n.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(r)));
      return n;
    }
  }
  class Es extends QD {
    constructor(e, n) {
      super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = true, this.mirrorNeedsRevert = false, this.isInteracting = false, this.isDragging = false, this.isDelayEnded = false, this.isDistanceSurpassed = false, this.delayTimeoutId = null, this.onPointerDown = (s) => {
        this.isDragging || (this.isInteracting = true, this.isDelayEnded = false, this.isDistanceSurpassed = false, DS(document.body), xS(document.body), s.isTouch || s.origEvent.preventDefault(), this.emitter.trigger("pointerdown", s), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(false), this.mirror.start(s.subjectEl, s.pageX, s.pageY), this.startDelay(s), this.minDistance || this.handleDistanceSurpassed(s)));
      }, this.onPointerMove = (s) => {
        if (this.isInteracting) {
          if (this.emitter.trigger("pointermove", s), !this.isDistanceSurpassed) {
            let i = this.minDistance, a, { deltaX: l, deltaY: c } = s;
            a = l * l + c * c, a >= i * i && this.handleDistanceSurpassed(s);
          }
          this.isDragging && (s.origEvent.type !== "scroll" && (this.mirror.handleMove(s.pageX, s.pageY), this.autoScroller.handleMove(s.pageX, s.pageY)), this.emitter.trigger("dragmove", s));
        }
      }, this.onPointerUp = (s) => {
        this.isInteracting && (this.isInteracting = false, kS(document.body), TS(document.body), this.emitter.trigger("pointerup", s), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(s)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null));
      };
      let r = this.pointer = new Qm(e);
      r.emitter.on("pointerdown", this.onPointerDown), r.emitter.on("pointermove", this.onPointerMove), r.emitter.on("pointerup", this.onPointerUp), n && (r.selector = n), this.mirror = new fT(), this.autoScroller = new mT();
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
  class pT {
    constructor(e) {
      this.el = e, this.origRect = Sc(e), this.scrollCaches = um(e).map((n) => new Km(n, true));
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
      for (let s of this.scrollCaches) if (!gT(s.getEventTarget()) && !RD(r, s.clientRect)) return false;
      return true;
    }
  }
  function gT(t) {
    let e = t.tagName;
    return e === "HTML" || e === "BODY";
  }
  class xi {
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
      }, this.droppableStore = n, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new io();
    }
    processFirstCoord(e) {
      let n = {
        left: e.pageX,
        top: e.pageY
      }, r = n, s = e.subjectEl, i;
      s instanceof HTMLElement && (i = Sc(s), r = OD(r, i));
      let a = this.initialHit = this.queryHitForOffset(r.left, r.top);
      if (a) {
        if (this.useSubjectCenter && i) {
          let l = lm(i, a.rect);
          l && (r = ID(l));
        }
        this.coordAdjust = PD(r, n);
      } else this.coordAdjust = {
        left: 0,
        top: 0
      };
    }
    handleMove(e, n) {
      let r = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
      (n || !co(this.movingHit, r)) && (this.movingHit = r, this.emitter.trigger("hitupdate", r, false, e));
    }
    prepareHits() {
      this.offsetTrackers = Gn(this.droppableStore, (e) => (e.component.prepareHits(), new pT(e.el)));
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
            b && no(b.dateProfile.activeRange, b.dateSpan.range) && (this.disablePointCheck || c.el.contains(c.el.getRootNode().elementFromPoint(m + d - window.scrollX, g + f - window.scrollY))) && (!i || b.layer > i.layer) && (b.componentId = a, b.context = l.context, b.rect.left += d, b.rect.right += d, b.rect.top += f, b.rect.bottom += f, i = b);
          }
        }
      }
      return i;
    }
  }
  function co(t, e) {
    return !t && !e ? true : !!t != !!e ? false : wD(t.dateSpan, e.dateSpan);
  }
  function Oc(t, e) {
    let n = {};
    for (let r of e.pluginHooks.datePointTransforms) Object.assign(n, r(t, e));
    return Object.assign(n, yT(t, e.dateEnv)), n;
  }
  function yT(t, e) {
    return {
      date: e.toDate(t.range.start),
      dateStr: e.formatIso(t.range.start, {
        omitTime: t.allDay
      }),
      allDay: t.allDay
    };
  }
  class vT extends Ms {
    constructor(e) {
      super(e), this.handlePointerDown = (r) => {
        let { dragging: s } = this, i = r.origEvent.target;
        s.setIgnoreMove(!this.component.isValidDateDownEl(i));
      }, this.handleDragEnd = (r) => {
        let { component: s } = this, { pointer: i } = this.dragging;
        if (!i.wasTouchScroll) {
          let { initialHit: a, finalHit: l } = this.hitDragging;
          if (a && l && co(a, l)) {
            let { context: c } = s, d = Object.assign(Object.assign({}, Oc(a.dateSpan, c)), {
              dayEl: a.dayEl,
              jsEvent: r.origEvent,
              view: c.viewApi || c.calendarApi.view
            });
            c.emitter.trigger("dateClick", d);
          }
        }
      }, this.dragging = new Es(e.el), this.dragging.autoScroller.isEnabled = false;
      let n = this.hitDragging = new xi(this.dragging, bc(e));
      n.emitter.on("pointerdown", this.handlePointerDown), n.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
  }
  class bT extends Ms {
    constructor(e) {
      super(e), this.dragSelection = null, this.handlePointerDown = (a) => {
        let { component: l, dragging: c } = this, { options: d } = l.context, f = d.selectable && l.isValidDateDownEl(a.origEvent.target);
        c.setIgnoreMove(!f), c.delay = a.isTouch ? wT(l) : null;
      }, this.handleDragStart = (a) => {
        this.component.context.calendarApi.unselect(a);
      }, this.handleHitUpdate = (a, l) => {
        let { context: c } = this.component, d = null, f = false;
        if (a) {
          let m = this.hitDragging.initialHit;
          a.componentId === m.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(m, a) || (d = ST(m, a, c.pluginHooks.dateSelectionTransformers)), (!d || !r0(d, a.dateProfile, c)) && (f = true, d = null);
        }
        d ? c.dispatch({
          type: "SELECT_DATES",
          selection: d
        }) : l || c.dispatch({
          type: "UNSELECT_DATES"
        }), f ? Ja() : Ka(), l || (this.dragSelection = d);
      }, this.handlePointerUp = (a) => {
        this.dragSelection && (tm(this.dragSelection, a, this.component.context), this.dragSelection = null);
      };
      let { component: n } = e, { options: r } = n.context, s = this.dragging = new Es(e.el);
      s.touchScrollAllowed = false, s.minDistance = r.selectMinDistance || 0, s.autoScroller.isEnabled = r.dragScroll;
      let i = this.hitDragging = new xi(this.dragging, bc(e));
      i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp);
    }
    destroy() {
      this.dragging.destroy();
    }
  }
  function wT(t) {
    let { options: e } = t.context, n = e.selectLongPressDelay;
    return n == null && (n = e.longPressDelay), n;
  }
  function ST(t, e, n) {
    let r = t.dateSpan, s = e.dateSpan, i = [
      r.range.start,
      r.range.end,
      s.range.start,
      s.range.end
    ];
    i.sort(RS);
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
  class Ti extends Ms {
    constructor(e) {
      super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = false, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (a) => {
        let l = a.origEvent.target, { component: c, dragging: d } = this, { mirror: f } = d, { options: m } = c.context, g = c.context;
        this.subjectEl = a.subjectEl;
        let y = this.subjectSeg = _s(a.subjectEl), S = (this.eventRange = y.eventRange).instance.instanceId;
        this.relevantEvents = hc(g.getCurrentData().eventStore, S), d.minDistance = a.isTouch ? 0 : m.eventDragMinDistance, d.delay = a.isTouch && S !== c.props.eventSelection ? DT(c) : null, m.fixedMirrorParent ? f.parentNode = m.fixedMirrorParent : f.parentNode = Et(l, ".fc"), f.revertDuration = m.dragRevertDuration;
        let b = c.isValidSegDownEl(l) && !Et(l, ".fc-event-resizer");
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
          event: new nt(l, c.def, c.instance),
          jsEvent: a.origEvent,
          view: l.viewApi
        }));
      }, this.handleHitUpdate = (a, l) => {
        if (!this.isDragging) return;
        let c = this.relevantEvents, d = this.hitDragging.initialHit, f = this.component.context, m = null, g = null, y = null, v = false, S = {
          affectedEvents: c,
          mutatedEvents: At(),
          isEvent: true
        };
        if (a) {
          m = a.context;
          let b = m.options;
          f === m || b.editable && b.droppable ? (g = _T(d, a, this.eventRange.instance.range.start, m.getCurrentData().pluginHooks.eventDragMutationMassagers), g && (y = gc(c, m.getCurrentData().eventUiBases, g, m), S.mutatedEvents = y, kc(S, a.dateProfile, m) || (v = true, g = null, y = null, S.mutatedEvents = At()))) : m = null;
        }
        this.displayDrag(m, S), v ? Ja() : Ka(), l || (f === m && co(d, a) && (g = null), this.dragging.setMirrorNeedsRevert(!g), this.dragging.setMirrorIsVisible(!a || !this.subjectEl.getRootNode().querySelector(".fc-event-mirror")), this.receivingContext = m, this.validMutation = g, this.mutatedRelevantEvents = y);
      }, this.handlePointerUp = () => {
        this.isDragging || this.cleanup();
      }, this.handleDragEnd = (a) => {
        if (this.isDragging) {
          let l = this.component.context, c = l.viewApi, { receivingContext: d, validMutation: f } = this, m = this.eventRange.def, g = this.eventRange.instance, y = new nt(l, m, g), v = this.relevantEvents, S = this.mutatedRelevantEvents, { finalHit: b } = this.hitDragging;
          if (this.clearDrag(), l.emitter.trigger("eventDragStop", {
            el: this.subjectEl,
            event: y,
            jsEvent: a.origEvent,
            view: c
          }), f) {
            if (d === l) {
              let _ = new nt(l, S.defs[m.defId], g ? S.instances[g.instanceId] : null);
              l.dispatch({
                type: "MERGE_EVENTS",
                eventStore: S
              });
              let E = {
                oldEvent: y,
                event: _,
                relatedEvents: Pr(S, l, g),
                revert() {
                  l.dispatch({
                    type: "MERGE_EVENTS",
                    eventStore: v
                  });
                }
              }, R = {};
              for (let k of l.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(R, k(f, l));
              l.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, E), R), {
                el: a.subjectEl,
                delta: f.datesDelta,
                jsEvent: a.origEvent,
                view: c
              })), l.emitter.trigger("eventChange", E);
            } else if (d) {
              let _ = {
                event: y,
                relatedEvents: Pr(v, l, g),
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
              let E = S.defs[m.defId], R = S.instances[g.instanceId], k = new nt(d, E, R);
              d.dispatch({
                type: "MERGE_EVENTS",
                eventStore: S
              });
              let T = {
                event: k,
                relatedEvents: Pr(S, d, R),
                revert() {
                  d.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: S
                  });
                }
              };
              d.emitter.trigger("eventAdd", T), a.isTouch && d.dispatch({
                type: "SELECT_EVENT",
                eventInstanceId: g.instanceId
              }), d.emitter.trigger("drop", Object.assign(Object.assign({}, Oc(b.dateSpan, d)), {
                draggedEl: a.subjectEl,
                jsEvent: a.origEvent,
                view: b.context.viewApi
              })), d.emitter.trigger("eventReceive", Object.assign(Object.assign({}, T), {
                draggedEl: a.subjectEl,
                view: b.context.viewApi
              }));
            }
          } else l.emitter.trigger("_noEventDrop");
        }
        this.cleanup();
      };
      let { component: n } = this, { options: r } = n.context, s = this.dragging = new Es(e.el);
      s.pointer.selector = Ti.SELECTOR, s.touchScrollAllowed = false, s.autoScroller.isEnabled = r.dragScroll;
      let i = this.hitDragging = new xi(this.dragging, Ia);
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
          mutatedEvents: At(),
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
  Ti.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
  function _T(t, e, n, r) {
    let s = t.dateSpan, i = e.dateSpan, a = s.range.start, l = i.range.start, c = {};
    s.allDay !== i.allDay && (c.allDay = i.allDay, c.hasEnd = e.context.options.allDayMaintainDuration, i.allDay ? a = Xe(n) : a = n);
    let d = os(a, l, t.context.dateEnv, t.componentId === e.componentId ? t.largeUnit : null);
    d.milliseconds && (c.allDay = false);
    let f = {
      datesDelta: d,
      standardProps: c
    };
    for (let m of r) m(f, t, e);
    return f;
  }
  function DT(t) {
    let { options: e } = t.context, n = e.eventLongPressDelay;
    return n == null && (n = e.longPressDelay), n;
  }
  class kT extends Ms {
    constructor(e) {
      super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = (i) => {
        let { component: a } = this, l = this.querySegEl(i), c = _s(l), d = this.eventRange = c.eventRange;
        this.dragging.minDistance = a.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(i.origEvent.target) || i.isTouch && this.component.props.eventSelection !== d.instance.instanceId);
      }, this.handleDragStart = (i) => {
        let { context: a } = this.component, l = this.eventRange;
        this.relevantEvents = hc(a.getCurrentData().eventStore, this.eventRange.instance.instanceId);
        let c = this.querySegEl(i);
        this.draggingSegEl = c, this.draggingSeg = _s(c), a.calendarApi.unselect(), a.emitter.trigger("eventResizeStart", {
          el: c,
          event: new nt(a, l.def, l.instance),
          jsEvent: i.origEvent,
          view: a.viewApi
        });
      }, this.handleHitUpdate = (i, a, l) => {
        let { context: c } = this.component, d = this.relevantEvents, f = this.hitDragging.initialHit, m = this.eventRange.instance, g = null, y = null, v = false, S = {
          affectedEvents: d,
          mutatedEvents: At(),
          isEvent: true
        };
        i && (i.componentId === f.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(f, i) || (g = xT(f, i, l.subjectEl.classList.contains("fc-event-resizer-start"), m.range))), g && (y = gc(d, c.getCurrentData().eventUiBases, g, c), S.mutatedEvents = y, kc(S, i.dateProfile, c) || (v = true, g = null, y = null, S.mutatedEvents = null)), y ? c.dispatch({
          type: "SET_EVENT_RESIZE",
          state: S
        }) : c.dispatch({
          type: "UNSET_EVENT_RESIZE"
        }), v ? Ja() : Ka(), a || (g && co(f, i) && (g = null), this.validMutation = g, this.mutatedRelevantEvents = y);
      }, this.handleDragEnd = (i) => {
        let { context: a } = this.component, l = this.eventRange.def, c = this.eventRange.instance, d = new nt(a, l, c), f = this.relevantEvents, m = this.mutatedRelevantEvents;
        if (a.emitter.trigger("eventResizeStop", {
          el: this.draggingSegEl,
          event: d,
          jsEvent: i.origEvent,
          view: a.viewApi
        }), this.validMutation) {
          let g = new nt(a, m.defs[l.defId], c ? m.instances[c.instanceId] : null);
          a.dispatch({
            type: "MERGE_EVENTS",
            eventStore: m
          });
          let y = {
            oldEvent: d,
            event: g,
            relatedEvents: Pr(m, a, c),
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
      let { component: n } = e, r = this.dragging = new Es(e.el);
      r.pointer.selector = ".fc-event-resizer", r.touchScrollAllowed = false, r.autoScroller.isEnabled = n.context.options.dragScroll;
      let s = this.hitDragging = new xi(this.dragging, bc(e));
      s.emitter.on("pointerdown", this.handlePointerDown), s.emitter.on("dragstart", this.handleDragStart), s.emitter.on("hitupdate", this.handleHitUpdate), s.emitter.on("dragend", this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    querySegEl(e) {
      return Et(e.subjectEl, ".fc-event");
    }
  }
  function xT(t, e, n, r) {
    let s = t.context.dateEnv, i = t.dateSpan.range.start, a = e.dateSpan.range.start, l = os(i, a, s, t.largeUnit);
    if (n) {
      if (s.add(r.start, l) < r.end) return {
        startDelta: l
      };
    } else if (s.add(r.end, l) > r.start) return {
      endDelta: l
    };
    return null;
  }
  class TT {
    constructor(e) {
      this.context = e, this.isRecentPointerDateSelect = false, this.matchesCancel = false, this.matchesEvent = false, this.onSelect = (r) => {
        r.jsEvent && (this.isRecentPointerDateSelect = true);
      }, this.onDocumentPointerDown = (r) => {
        let s = this.context.options.unselectCancel, i = Ph(r.origEvent);
        this.matchesCancel = !!Et(i, s), this.matchesEvent = !!Et(i, Ti.SELECTOR);
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
      let n = this.documentPointer = new Qm(document);
      n.shouldIgnoreMove = true, n.shouldWatchScroll = false, n.emitter.on("pointerdown", this.onDocumentPointerDown), n.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect);
    }
    destroy() {
      this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy();
    }
  }
  const MT = {
    fixedMirrorParent: U
  }, ET = {
    dateClick: U,
    eventDragStart: U,
    eventDragStop: U,
    eventDrop: U,
    eventResizeStart: U,
    eventResizeStop: U,
    eventResize: U,
    drop: U,
    eventReceive: U,
    eventLeave: U
  };
  class CT {
    constructor(e, n) {
      this.receivingContext = null, this.droppableEvent = null, this.suppliedDragMeta = null, this.dragMeta = null, this.handleDragStart = (s) => {
        this.dragMeta = this.buildDragMeta(s.subjectEl);
      }, this.handleHitUpdate = (s, i, a) => {
        let { dragging: l } = this.hitDragging, c = null, d = null, f = false, m = {
          affectedEvents: At(),
          mutatedEvents: At(),
          isEvent: this.dragMeta.create
        };
        s && (c = s.context, this.canDropElOnCalendar(a.subjectEl, c) && (d = AT(s.dateSpan, this.dragMeta, c), m.mutatedEvents = fi(d), f = !kc(m, s.dateProfile, c), f && (m.mutatedEvents = At(), d = null))), this.displayDrag(c, m), l.setMirrorIsVisible(i || !d || !document.querySelector(".fc-event-mirror")), f ? Ja() : Ka(), i || (l.setMirrorNeedsRevert(!d), this.receivingContext = c, this.droppableEvent = d);
      }, this.handleDragEnd = (s) => {
        let { receivingContext: i, droppableEvent: a } = this;
        if (this.clearDrag(), i && a) {
          let l = this.hitDragging.finalHit, c = l.context.viewApi, d = this.dragMeta;
          if (i.emitter.trigger("drop", Object.assign(Object.assign({}, Oc(l.dateSpan, i)), {
            draggedEl: s.subjectEl,
            jsEvent: s.origEvent,
            view: c
          })), d.create) {
            let f = fi(a);
            i.dispatch({
              type: "MERGE_EVENTS",
              eventStore: f
            }), s.isTouch && i.dispatch({
              type: "SELECT_EVENT",
              eventInstanceId: a.instance.instanceId
            }), i.emitter.trigger("eventReceive", {
              event: new nt(i, a.def, a.instance),
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
      let r = this.hitDragging = new xi(e, Ia);
      r.requireInitial = false, r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("dragend", this.handleDragEnd), this.suppliedDragMeta = n;
    }
    buildDragMeta(e) {
      return typeof this.suppliedDragMeta == "object" ? Pl(this.suppliedDragMeta) : typeof this.suppliedDragMeta == "function" ? Pl(this.suppliedDragMeta(e)) : RT(e);
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
      return typeof r == "function" ? r.call(n.calendarApi, e) : typeof r == "string" && r ? !!Oh(e, r) : true;
    }
  }
  function AT(t, e, n) {
    let r = Object.assign({}, e.leftoverProps);
    for (let f of n.pluginHooks.externalDefTransforms) Object.assign(r, f(t, e));
    let { refined: s, extra: i } = dc(r, n), a = Ca(s, i, e.sourceId, t.allDay, n.options.forceEventDuration || !!e.duration, n), l = t.range.start;
    t.allDay && e.startTime && (l = n.dateEnv.add(l, e.startTime));
    let c = e.duration ? n.dateEnv.add(l, e.duration) : Al(t.allDay, l, n), d = ro(a.defId, {
      start: l,
      end: c
    });
    return {
      def: a,
      instance: d
    };
  }
  function RT(t) {
    let e = OT(t, "event"), n = e ? JSON.parse(e) : {
      create: false
    };
    return Pl(n);
  }
  oo.dataAttrPrefix = "";
  function OT(t, e) {
    let n = oo.dataAttrPrefix, r = (n ? n + "-" : "") + e;
    return t.getAttribute("data-" + r) || "";
  }
  class IT {
    constructor(e, n = {}) {
      this.handlePointerDown = (s) => {
        let { dragging: i } = this, { minDistance: a, longPressDelay: l } = this.settings;
        i.minDistance = a ?? (s.isTouch ? 0 : Ir.eventDragMinDistance), i.delay = s.isTouch ? l ?? Ir.longPressDelay : 0;
      }, this.handleDragStart = (s) => {
        s.isTouch && this.dragging.delay && s.subjectEl.classList.contains("fc-event") && this.dragging.mirror.getMirrorEl().classList.add("fc-event-selected");
      }, this.settings = n;
      let r = this.dragging = new Es(e);
      r.touchScrollAllowed = false, n.itemSelector != null && (r.pointer.selector = n.itemSelector), n.appendTo != null && (r.mirror.parentNode = n.appendTo), r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), new CT(r, n.eventData);
    }
    destroy() {
      this.dragging.destroy();
    }
  }
  var PT = un({
    name: "@fullcalendar/interaction",
    componentInteractions: [
      vT,
      bT,
      Ti,
      kT
    ],
    calendarInteractions: [
      TT
    ],
    elementDraggingImpl: Es,
    optionRefiners: MT,
    listenerRefiners: ET
  }), Hl = [
    "MO",
    "TU",
    "WE",
    "TH",
    "FR",
    "SA",
    "SU"
  ], Pt = (function() {
    function t(e, n) {
      if (n === 0) throw new Error("Can't create weekday with n == 0");
      this.weekday = e, this.n = n;
    }
    return t.fromStr = function(e) {
      return new t(Hl.indexOf(e));
    }, t.prototype.nth = function(e) {
      return this.n === e ? this : new t(this.weekday, e);
    }, t.prototype.equals = function(e) {
      return this.weekday === e.weekday && this.n === e.n;
    }, t.prototype.toString = function() {
      var e = Hl[this.weekday];
      return this.n && (e = (this.n > 0 ? "+" : "") + String(this.n) + e), e;
    }, t.prototype.getJsWeekday = function() {
      return this.weekday === 6 ? 0 : this.weekday + 1;
    }, t;
  })(), mt = function(t) {
    return t != null;
  }, yn = function(t) {
    return typeof t == "number";
  }, ff = function(t) {
    return typeof t == "string" && Hl.includes(t);
  }, jt = Array.isArray, Dn = function(t, e) {
    e === void 0 && (e = t), arguments.length === 1 && (e = t, t = 0);
    for (var n = [], r = t; r < e; r++) n.push(r);
    return n;
  }, We = function(t, e) {
    var n = 0, r = [];
    if (jt(t)) for (; n < e; n++) r[n] = [].concat(t);
    else for (; n < e; n++) r[n] = t;
    return r;
  }, NT = function(t) {
    return jt(t) ? t : [
      t
    ];
  };
  function es(t, e, n) {
    n === void 0 && (n = " ");
    var r = String(t);
    return e = e >> 0, r.length > e ? String(r) : (e = e - r.length, e > n.length && (n += We(n, e / n.length)), n.slice(0, e) + String(r));
  }
  var LT = function(t, e, n) {
    var r = t.split(e);
    return n ? r.slice(0, n).concat([
      r.slice(n).join(e)
    ]) : r;
  }, Bt = function(t, e) {
    var n = t % e;
    return n * e < 0 ? n + e : n;
  }, ml = function(t, e) {
    return {
      div: Math.floor(t / e),
      mod: Bt(t, e)
    };
  }, bn = function(t) {
    return !mt(t) || t.length === 0;
  }, St = function(t) {
    return !bn(t);
  }, Qe = function(t, e) {
    return St(t) && t.indexOf(e) !== -1;
  }, Hr = function(t, e, n, r, s, i) {
    return r === void 0 && (r = 0), s === void 0 && (s = 0), i === void 0 && (i = 0), new Date(Date.UTC(t, e - 1, n, r, s, i));
  }, YT = [
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
  ], ep = 1e3 * 60 * 60 * 24, tp = 9999, np = Hr(1970, 1, 1), FT = [
    6,
    0,
    1,
    2,
    3,
    4,
    5
  ], ni = function(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
  }, rp = function(t) {
    return t instanceof Date;
  }, Js = function(t) {
    return rp(t) && !isNaN(t.getTime());
  }, HT = function(t, e) {
    var n = t.getTime(), r = e.getTime(), s = n - r;
    return Math.round(s / ep);
  }, jl = function(t) {
    return HT(t, np);
  }, sp = function(t) {
    return new Date(np.getTime() + t * ep);
  }, jT = function(t) {
    var e = t.getUTCMonth();
    return e === 1 && ni(t.getUTCFullYear()) ? 29 : YT[e];
  }, xs = function(t) {
    return FT[t.getUTCDay()];
  }, hf = function(t, e) {
    var n = Hr(t, e + 1, 1);
    return [
      xs(n),
      jT(n)
    ];
  }, ip = function(t, e) {
    return e = e || t, new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  }, Vl = function(t) {
    var e = new Date(t.getTime());
    return e;
  }, mf = function(t) {
    for (var e = [], n = 0; n < t.length; n++) e.push(Vl(t[n]));
    return e;
  }, hi = function(t) {
    t.sort(function(e, n) {
      return e.getTime() - n.getTime();
    });
  }, Ic = function(t, e) {
    e === void 0 && (e = true);
    var n = new Date(t);
    return [
      es(n.getUTCFullYear().toString(), 4, "0"),
      es(n.getUTCMonth() + 1, 2, "0"),
      es(n.getUTCDate(), 2, "0"),
      "T",
      es(n.getUTCHours(), 2, "0"),
      es(n.getUTCMinutes(), 2, "0"),
      es(n.getUTCSeconds(), 2, "0"),
      e ? "Z" : ""
    ].join("");
  }, Pc = function(t) {
    var e = /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/, n = e.exec(t);
    if (!n) throw new Error("Invalid UNTIL value: ".concat(t));
    return new Date(Date.UTC(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10), parseInt(n[5], 10) || 0, parseInt(n[6], 10) || 0, parseInt(n[7], 10) || 0));
  }, pf = function(t, e) {
    var n = t.toLocaleString("sv-SE", {
      timeZone: e
    });
    return n.replace(" ", "T") + "Z";
  }, VT = function(t, e) {
    var n = Intl.DateTimeFormat().resolvedOptions().timeZone, r = new Date(pf(t, n)), s = new Date(pf(t, e ?? "UTC")), i = s.getTime() - r.getTime();
    return new Date(t.getTime() - i);
  }, ls = (function() {
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
  })(), gf = (function(t) {
    ec(e, t);
    function e(n, r, s) {
      var i = t.call(this, n, r) || this;
      return i.iterator = s, i;
    }
    return e.prototype.add = function(n) {
      return this.iterator(n, this._result.length) ? (this._result.push(n), true) : false;
    }, e;
  })(ls), La = {
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
  }, yf = function(t, e) {
    return t.indexOf(e) !== -1;
  }, WT = function(t) {
    return t.toString();
  }, UT = function(t, e, n) {
    return "".concat(e, " ").concat(n, ", ").concat(t);
  }, Qn = (function() {
    function t(e, n, r, s) {
      if (n === void 0 && (n = WT), r === void 0 && (r = La), s === void 0 && (s = UT), this.text = [], this.language = r || La, this.gettext = n, this.dateFormatter = s, this.rrule = e, this.options = e.options, this.origOptions = e.origOptions, this.origOptions.bymonthday) {
        var i = [].concat(this.options.bymonthday), a = [].concat(this.options.bynmonthday);
        i.sort(function(f, m) {
          return f - m;
        }), a.sort(function(f, m) {
          return m - f;
        }), this.bymonthday = i.concat(a), this.bymonthday.length || (this.bymonthday = null);
      }
      if (mt(this.origOptions.byweekday)) {
        var l = jt(this.origOptions.byweekday) ? this.origOptions.byweekday : [
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
        if (yf([
          "dtstart",
          "tzid",
          "wkst",
          "freq"
        ], r)) return true;
        if (!yf(t.IMPLEMENTED[e.options.freq], r)) return false;
      }
      return n;
    }, t.prototype.isFullyConvertible = function() {
      return t.isFullyConvertible(this.rrule);
    }, t.prototype.toString = function() {
      var e = this.gettext;
      if (!(this.options.freq in t.IMPLEMENTED)) return e("RRule error: Unable to fully convert this rrule to text");
      if (this.text = [
        e("every")
      ], this[Te.FREQUENCIES[this.options.freq]](), this.options.until) {
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
      var n = yn(e) ? (e + 1) % 7 : e.getJsWeekday();
      return (e.n ? this.nth(e.n) + " " : "") + this.language.dayNames[n];
    }, t.prototype.plural = function(e) {
      return e % 100 !== 1;
    }, t.prototype.add = function(e) {
      return this.text.push(" "), this.text.push(e), this;
    }, t.prototype.list = function(e, n, r, s) {
      var i = this;
      s === void 0 && (s = ","), jt(e) || (e = [
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
  })(), BT = (function() {
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
  function ap(t, e) {
    e === void 0 && (e = La);
    var n = {}, r = new BT(e.tokens);
    if (!r.start(t)) return null;
    return s(), n;
    function s() {
      r.expect("every");
      var g = r.acceptNumber();
      if (g && (n.interval = parseInt(g[0], 10)), r.isDone()) throw new Error("Unexpected end");
      switch (r.symbol) {
        case "day(s)":
          n.freq = Te.DAILY, r.nextSymbol() && (a(), m());
          break;
        case "weekday(s)":
          n.freq = Te.WEEKLY, n.byweekday = [
            Te.MO,
            Te.TU,
            Te.WE,
            Te.TH,
            Te.FR
          ], r.nextSymbol(), a(), m();
          break;
        case "week(s)":
          n.freq = Te.WEEKLY, r.nextSymbol() && (i(), a(), m());
          break;
        case "hour(s)":
          n.freq = Te.HOURLY, r.nextSymbol() && (i(), m());
          break;
        case "minute(s)":
          n.freq = Te.MINUTELY, r.nextSymbol() && (i(), m());
          break;
        case "month(s)":
          n.freq = Te.MONTHLY, r.nextSymbol() && (i(), m());
          break;
        case "year(s)":
          n.freq = Te.YEARLY, r.nextSymbol() && (i(), m());
          break;
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
        case "friday":
        case "saturday":
        case "sunday":
          n.freq = Te.WEEKLY;
          var y = r.symbol.substr(0, 2).toUpperCase();
          if (n.byweekday = [
            Te[y]
          ], !r.nextSymbol()) return;
          for (; r.accept("comma"); ) {
            if (r.isDone()) throw new Error("Unexpected end");
            var v = c();
            if (!v) throw new Error("Unexpected symbol " + r.symbol + ", expected weekday");
            n.byweekday.push(Te[v]), r.nextSymbol();
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
          if (n.freq = Te.YEARLY, n.bymonth = [
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
        if (v) S ? (r.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(Te[S].nth(v))) : (n.bymonthday || (n.bymonthday = []), n.bymonthday.push(v), r.accept("day(s)"));
        else if (S) r.nextSymbol(), n.byweekday || (n.byweekday = []), n.byweekday.push(Te[S]);
        else if (r.symbol === "weekday(s)") r.nextSymbol(), n.byweekday || (n.byweekday = [
          Te.MO,
          Te.TU,
          Te.WE,
          Te.TH,
          Te.FR
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
  function Nc(t) {
    return t < Ue.HOURLY;
  }
  var zT = function(t, e) {
    return e === void 0 && (e = La), new Te(ap(t, e) || void 0);
  }, Cs = [
    "count",
    "until",
    "interval",
    "byweekday",
    "bymonthday",
    "bymonth"
  ];
  Qn.IMPLEMENTED = [];
  Qn.IMPLEMENTED[Ue.HOURLY] = Cs;
  Qn.IMPLEMENTED[Ue.MINUTELY] = Cs;
  Qn.IMPLEMENTED[Ue.DAILY] = [
    "byhour"
  ].concat(Cs);
  Qn.IMPLEMENTED[Ue.WEEKLY] = Cs;
  Qn.IMPLEMENTED[Ue.MONTHLY] = Cs;
  Qn.IMPLEMENTED[Ue.YEARLY] = [
    "byweekno",
    "byyearday"
  ].concat(Cs);
  var $T = function(t, e, n, r) {
    return new Qn(t, e, n, r).toString();
  }, GT = Qn.isFullyConvertible, Ya = (function() {
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
  })(), qT = (function(t) {
    ec(e, t);
    function e(n, r, s, i, a, l, c) {
      var d = t.call(this, i, a, l, c) || this;
      return d.year = n, d.month = r, d.day = s, d;
    }
    return e.fromDate = function(n) {
      return new this(n.getUTCFullYear(), n.getUTCMonth() + 1, n.getUTCDate(), n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.valueOf() % 1e3);
    }, e.prototype.getWeekday = function() {
      return xs(new Date(this.getTime()));
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
        var r = Math.floor(this.month / 12), s = Bt(this.month, 12);
        this.month = s, this.year += r, this.month === 0 && (this.month = 12, --this.year);
      }
    }, e.prototype.addWeekly = function(n, r) {
      r > this.getWeekday() ? this.day += -(this.getWeekday() + 1 + (6 - r)) + n * 7 : this.day += -(this.getWeekday() - r) + n * 7, this.fixDay();
    }, e.prototype.addDaily = function(n) {
      this.day += n, this.fixDay();
    }, e.prototype.addHours = function(n, r, s) {
      for (r && (this.hour += Math.floor((23 - this.hour) / n) * n); ; ) {
        this.hour += n;
        var i = ml(this.hour, 24), a = i.div, l = i.mod;
        if (a && (this.hour = l, this.addDaily(a)), bn(s) || Qe(s, this.hour)) break;
      }
    }, e.prototype.addMinutes = function(n, r, s, i) {
      for (r && (this.minute += Math.floor((1439 - (this.hour * 60 + this.minute)) / n) * n); ; ) {
        this.minute += n;
        var a = ml(this.minute, 60), l = a.div, c = a.mod;
        if (l && (this.minute = c, this.addHours(l, false, s)), (bn(s) || Qe(s, this.hour)) && (bn(i) || Qe(i, this.minute))) break;
      }
    }, e.prototype.addSeconds = function(n, r, s, i, a) {
      for (r && (this.second += Math.floor((86399 - (this.hour * 3600 + this.minute * 60 + this.second)) / n) * n); ; ) {
        this.second += n;
        var l = ml(this.second, 60), c = l.div, d = l.mod;
        if (c && (this.second = d, this.addMinutes(c, false, s, i)), (bn(s) || Qe(s, this.hour)) && (bn(i) || Qe(i, this.minute)) && (bn(a) || Qe(a, this.second))) break;
      }
    }, e.prototype.fixDay = function() {
      if (!(this.day <= 28)) {
        var n = hf(this.year, this.month - 1)[1];
        if (!(this.day <= n)) for (; this.day > n; ) {
          if (this.day -= n, ++this.month, this.month === 13 && (this.month = 1, ++this.year, this.year > tp)) return;
          n = hf(this.year, this.month - 1)[1];
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
  })(Ya);
  function op(t) {
    for (var e = [], n = Object.keys(t), r = 0, s = n; r < s.length; r++) {
      var i = s[r];
      Qe(kM, i) || e.push(i), rp(t[i]) && !Js(t[i]) && e.push(i);
    }
    if (e.length) throw new Error("Invalid options: " + e.join(", "));
    return sn({}, t);
  }
  function ZT(t) {
    var e = sn(sn({}, Lc), op(t));
    if (mt(e.byeaster) && (e.freq = Te.YEARLY), !(mt(e.freq) && Te.FREQUENCIES[e.freq])) throw new Error("Invalid frequency: ".concat(e.freq, " ").concat(t.freq));
    if (e.dtstart || (e.dtstart = new Date((/* @__PURE__ */ new Date()).setMilliseconds(0))), mt(e.wkst) ? yn(e.wkst) || (e.wkst = e.wkst.weekday) : e.wkst = Te.MO.weekday, mt(e.bysetpos)) {
      yn(e.bysetpos) && (e.bysetpos = [
        e.bysetpos
      ]);
      for (var n = 0; n < e.bysetpos.length; n++) {
        var r = e.bysetpos[n];
        if (r === 0 || !(r >= -366 && r <= 366)) throw new Error("bysetpos must be between 1 and 366, or between -366 and -1");
      }
    }
    if (!(e.byweekno || St(e.byweekno) || St(e.byyearday) || e.bymonthday || St(e.bymonthday) || mt(e.byweekday) || mt(e.byeaster))) switch (e.freq) {
      case Te.YEARLY:
        e.bymonth || (e.bymonth = e.dtstart.getUTCMonth() + 1), e.bymonthday = e.dtstart.getUTCDate();
        break;
      case Te.MONTHLY:
        e.bymonthday = e.dtstart.getUTCDate();
        break;
      case Te.WEEKLY:
        e.byweekday = [
          xs(e.dtstart)
        ];
        break;
    }
    if (mt(e.bymonth) && !jt(e.bymonth) && (e.bymonth = [
      e.bymonth
    ]), mt(e.byyearday) && !jt(e.byyearday) && yn(e.byyearday) && (e.byyearday = [
      e.byyearday
    ]), !mt(e.bymonthday)) e.bymonthday = [], e.bynmonthday = [];
    else if (jt(e.bymonthday)) {
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
    if (mt(e.byweekno) && !jt(e.byweekno) && (e.byweekno = [
      e.byweekno
    ]), !mt(e.byweekday)) e.bynweekday = null;
    else if (yn(e.byweekday)) e.byweekday = [
      e.byweekday
    ], e.bynweekday = null;
    else if (ff(e.byweekday)) e.byweekday = [
      Pt.fromStr(e.byweekday).weekday
    ], e.bynweekday = null;
    else if (e.byweekday instanceof Pt) !e.byweekday.n || e.freq > Te.MONTHLY ? (e.byweekday = [
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
        if (yn(c)) {
          a.push(c);
          continue;
        } else if (ff(c)) {
          a.push(Pt.fromStr(c).weekday);
          continue;
        }
        !c.n || e.freq > Te.MONTHLY ? a.push(c.weekday) : l.push([
          c.weekday,
          c.n
        ]);
      }
      e.byweekday = St(a) ? a : null, e.bynweekday = St(l) ? l : null;
    }
    return mt(e.byhour) ? yn(e.byhour) && (e.byhour = [
      e.byhour
    ]) : e.byhour = e.freq < Te.HOURLY ? [
      e.dtstart.getUTCHours()
    ] : null, mt(e.byminute) ? yn(e.byminute) && (e.byminute = [
      e.byminute
    ]) : e.byminute = e.freq < Te.MINUTELY ? [
      e.dtstart.getUTCMinutes()
    ] : null, mt(e.bysecond) ? yn(e.bysecond) && (e.bysecond = [
      e.bysecond
    ]) : e.bysecond = e.freq < Te.SECONDLY ? [
      e.dtstart.getUTCSeconds()
    ] : null, {
      parsedOptions: e
    };
  }
  function QT(t) {
    var e = t.dtstart.getTime() % 1e3;
    if (!Nc(t.freq)) return [];
    var n = [];
    return t.byhour.forEach(function(r) {
      t.byminute.forEach(function(s) {
        t.bysecond.forEach(function(i) {
          n.push(new Ya(r, s, i, e));
        });
      });
    }), n;
  }
  function Wl(t) {
    var e = t.split(`
`).map(XT).filter(function(n) {
      return n !== null;
    });
    return sn(sn({}, e[0]), e[1]);
  }
  function Fa(t) {
    var e = {}, n = /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(t);
    if (!n) return e;
    var r = n[1], s = n[2];
    return r && (e.tzid = r), e.dtstart = Pc(s), e;
  }
  function XT(t) {
    if (t = t.replace(/^\s+|\s+$/, ""), !t.length) return null;
    var e = /^([A-Z]+?)[:;]/.exec(t.toUpperCase());
    if (!e) return vf(t);
    var n = e[1];
    switch (n.toUpperCase()) {
      case "RRULE":
      case "EXRULE":
        return vf(t);
      case "DTSTART":
        return Fa(t);
      default:
        throw new Error("Unsupported RFC prop ".concat(n, " in ").concat(t));
    }
  }
  function vf(t) {
    var e = t.replace(/^RRULE:/i, ""), n = Fa(e), r = t.replace(/^(?:RRULE|EXRULE):/i, "").split(";");
    return r.forEach(function(s) {
      var i = s.split("="), a = i[0], l = i[1];
      switch (a.toUpperCase()) {
        case "FREQ":
          n.freq = Ue[l.toUpperCase()];
          break;
        case "WKST":
          n.wkst = en[l.toUpperCase()];
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
          var c = JT(l), d = a.toLowerCase();
          n[d] = c;
          break;
        case "BYWEEKDAY":
        case "BYDAY":
          n.byweekday = KT(l);
          break;
        case "DTSTART":
        case "TZID":
          var f = Fa(t);
          n.tzid = f.tzid, n.dtstart = f.dtstart;
          break;
        case "UNTIL":
          n.until = Pc(l);
          break;
        case "BYEASTER":
          n.byeaster = Number(l);
          break;
        default:
          throw new Error("Unknown RRULE property '" + a + "'");
      }
    }), n;
  }
  function JT(t) {
    if (t.indexOf(",") !== -1) {
      var e = t.split(",");
      return e.map(bf);
    }
    return bf(t);
  }
  function bf(t) {
    return /^[+-]?\d+$/.test(t) ? Number(t) : t;
  }
  function KT(t) {
    var e = t.split(",");
    return e.map(function(n) {
      if (n.length === 2) return en[n];
      var r = n.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
      if (!r || r.length < 3) throw new SyntaxError("Invalid weekday string: ".concat(n));
      var s = Number(r[1]), i = r[2], a = en[i].weekday;
      return new Pt(a, s);
    });
  }
  var Ha = (function() {
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
      var e = Ic(this.date.getTime(), this.isUTC);
      return this.isUTC ? ":".concat(e) : ";TZID=".concat(this.tzid, ":").concat(e);
    }, t.prototype.getTime = function() {
      return this.date.getTime();
    }, t.prototype.rezonedDate = function() {
      return this.isUTC ? this.date : VT(this.date, this.tzid);
    }, t;
  })();
  function Ul(t) {
    for (var e = [], n = "", r = Object.keys(t), s = Object.keys(Lc), i = 0; i < r.length; i++) if (r[i] !== "tzid" && Qe(s, r[i])) {
      var a = r[i].toUpperCase(), l = t[r[i]], c = "";
      if (!(!mt(l) || jt(l) && !l.length)) {
        switch (a) {
          case "FREQ":
            c = Te.FREQUENCIES[t.freq];
            break;
          case "WKST":
            yn(l) ? c = new Pt(l).toString() : c = l.toString();
            break;
          case "BYWEEKDAY":
            a = "BYDAY", c = NT(l).map(function(y) {
              return y instanceof Pt ? y : jt(y) ? new Pt(y[0], y[1]) : new Pt(y);
            }).toString();
            break;
          case "DTSTART":
            n = eM(l, t.tzid);
            break;
          case "UNTIL":
            c = Ic(l, !t.tzid);
            break;
          default:
            if (jt(l)) {
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
  function eM(t, e) {
    return t ? "DTSTART" + new Ha(new Date(t), e).toString() : "";
  }
  function tM(t, e) {
    return Array.isArray(t) ? !Array.isArray(e) || t.length !== e.length ? false : t.every(function(n, r) {
      return n.getTime() === e[r].getTime();
    }) : t instanceof Date ? e instanceof Date && t.getTime() === e.getTime() : t === e;
  }
  var nM = (function() {
    function t() {
      this.all = false, this.before = [], this.after = [], this.between = [];
    }
    return t.prototype._cacheAdd = function(e, n, r) {
      n && (n = n instanceof Date ? Vl(n) : mf(n)), e === "all" ? this.all = n : (r._value = n, this[e].push(r));
    }, t.prototype._cacheGet = function(e, n) {
      var r = false, s = n ? Object.keys(n) : [], i = function(f) {
        for (var m = 0; m < s.length; m++) {
          var g = s[m];
          if (!tM(n[g], f[g])) return true;
        }
        return false;
      }, a = this[e];
      if (e === "all") r = this.all;
      else if (jt(a)) for (var l = 0; l < a.length; l++) {
        var c = a[l];
        if (!(s.length && i(c))) {
          r = c._value;
          break;
        }
      }
      if (!r && this.all) {
        for (var d = new ls(e, n), l = 0; l < this.all.length && d.accept(this.all[l]); l++) ;
        r = d.getValue(), this._cacheAdd(e, r, n);
      }
      return jt(r) ? mf(r) : r instanceof Date ? Vl(r) : r;
    }, t;
  })(), rM = de(de(de(de(de(de(de(de(de(de(de(de(de([], We(1, 31), true), We(2, 28), true), We(3, 31), true), We(4, 30), true), We(5, 31), true), We(6, 30), true), We(7, 31), true), We(8, 31), true), We(9, 30), true), We(10, 31), true), We(11, 30), true), We(12, 31), true), We(1, 7), true), sM = de(de(de(de(de(de(de(de(de(de(de(de(de([], We(1, 31), true), We(2, 29), true), We(3, 31), true), We(4, 30), true), We(5, 31), true), We(6, 30), true), We(7, 31), true), We(8, 31), true), We(9, 30), true), We(10, 31), true), We(11, 30), true), We(12, 31), true), We(1, 7), true), iM = Dn(1, 29), aM = Dn(1, 30), ar = Dn(1, 31), Tt = Dn(1, 32), oM = de(de(de(de(de(de(de(de(de(de(de(de(de([], Tt, true), aM, true), Tt, true), ar, true), Tt, true), ar, true), Tt, true), Tt, true), ar, true), Tt, true), ar, true), Tt, true), Tt.slice(0, 7), true), lM = de(de(de(de(de(de(de(de(de(de(de(de(de([], Tt, true), iM, true), Tt, true), ar, true), Tt, true), ar, true), Tt, true), Tt, true), ar, true), Tt, true), ar, true), Tt, true), Tt.slice(0, 7), true), cM = Dn(-28, 0), uM = Dn(-29, 0), or = Dn(-30, 0), Mt = Dn(-31, 0), dM = de(de(de(de(de(de(de(de(de(de(de(de(de([], Mt, true), uM, true), Mt, true), or, true), Mt, true), or, true), Mt, true), Mt, true), or, true), Mt, true), or, true), Mt, true), Mt.slice(0, 7), true), fM = de(de(de(de(de(de(de(de(de(de(de(de(de([], Mt, true), cM, true), Mt, true), or, true), Mt, true), or, true), Mt, true), Mt, true), or, true), Mt, true), or, true), Mt, true), Mt.slice(0, 7), true), hM = [
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
  ], mM = [
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
  ], wf = (function() {
    for (var t = [], e = 0; e < 55; e++) t = t.concat(Dn(7));
    return t;
  })();
  function pM(t, e) {
    var n = Hr(t, 1, 1), r = ni(t) ? 366 : 365, s = ni(t + 1) ? 366 : 365, i = jl(n), a = xs(n), l = sn(sn({
      yearlen: r,
      nextyearlen: s,
      yearordinal: i,
      yearweekday: a
    }, gM(t)), {
      wnomask: null
    });
    if (bn(e.byweekno)) return l;
    l.wnomask = We(0, r + 7);
    var c, d, f = c = Bt(7 - a + e.wkst, 7);
    f >= 4 ? (f = 0, d = l.yearlen + Bt(a - e.wkst, 7)) : d = r - f;
    for (var m = Math.floor(d / 7), g = Bt(d, 7), y = Math.floor(m + g / 4), v = 0; v < e.byweekno.length; v++) {
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
        var R = xs(Hr(t - 1, 1, 1)), k = Bt(7 - R.valueOf() + e.wkst, 7), T = ni(t - 1) ? 366 : 365, N = void 0;
        k >= 4 ? (k = 0, N = T + Bt(R - e.wkst, 7)) : N = r - f, E = Math.floor(52 + Bt(N, 7) / 4);
      }
      if (Qe(e.byweekno, E)) for (var b = 0; b < f; b++) l.wnomask[b] = 1;
    }
    return l;
  }
  function gM(t) {
    var e = ni(t) ? 366 : 365, n = Hr(t, 1, 1), r = xs(n);
    return e === 365 ? {
      mmask: rM,
      mdaymask: lM,
      nmdaymask: fM,
      wdaymask: wf.slice(r),
      mrange: mM
    } : {
      mmask: sM,
      mdaymask: oM,
      nmdaymask: dM,
      wdaymask: wf.slice(r),
      mrange: hM
    };
  }
  function yM(t, e, n, r, s, i) {
    var a = {
      lastyear: t,
      lastmonth: e,
      nwdaymask: []
    }, l = [];
    if (i.freq === Te.YEARLY) if (bn(i.bymonth)) l = [
      [
        0,
        n
      ]
    ];
    else for (var c = 0; c < i.bymonth.length; c++) e = i.bymonth[c], l.push(r.slice(e - 1, e + 1));
    else i.freq === Te.MONTHLY && (l = [
      r.slice(e - 1, e + 1)
    ]);
    if (bn(l)) return a;
    a.nwdaymask = We(0, n);
    for (var c = 0; c < l.length; c++) for (var d = l[c], f = d[0], m = d[1] - 1, g = 0; g < i.bynweekday.length; g++) {
      var y = void 0, v = i.bynweekday[g], S = v[0], b = v[1];
      b < 0 ? (y = m + (b + 1) * 7, y -= Bt(s[y] - S, 7)) : (y = f + (b - 1) * 7, y += Bt(7 - s[y] + S, 7)), f <= y && y <= m && (a.nwdaymask[y] = 1);
    }
    return a;
  }
  function vM(t, e) {
    e === void 0 && (e = 0);
    var n = t % 19, r = Math.floor(t / 100), s = t % 100, i = Math.floor(r / 4), a = r % 4, l = Math.floor((r + 8) / 25), c = Math.floor((r - l + 1) / 3), d = Math.floor(19 * n + r - i - c + 15) % 30, f = Math.floor(s / 4), m = s % 4, g = Math.floor(32 + 2 * a + 2 * f - d - m) % 7, y = Math.floor((n + 11 * d + 22 * g) / 451), v = Math.floor((d + g - 7 * y + 114) / 31), S = (d + g - 7 * y + 114) % 31 + 1, b = Date.UTC(t, v - 1, S + e), _ = Date.UTC(t, 0, 1);
    return [
      Math.ceil((b - _) / (1e3 * 60 * 60 * 24))
    ];
  }
  var bM = (function() {
    function t(e) {
      this.options = e;
    }
    return t.prototype.rebuild = function(e, n) {
      var r = this.options;
      if (e !== this.lastyear && (this.yearinfo = pM(e, r)), St(r.bynweekday) && (n !== this.lastmonth || e !== this.lastyear)) {
        var s = this.yearinfo, i = s.yearlen, a = s.mrange, l = s.wdaymask;
        this.monthinfo = yM(e, n, i, a, l, r);
      }
      mt(r.byeaster) && (this.eastermask = vM(e, r.byeaster));
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
        Dn(this.yearlen),
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
      for (var s = We(null, this.yearlen + 7), i = jl(Hr(e, n, r)) - this.yearordinal, a = i, l = 0; l < 7 && (s[i] = i, ++i, this.wdaymask[i] !== this.options.wkst); l++) ;
      return [
        s,
        a,
        i
      ];
    }, t.prototype.ddayset = function(e, n, r) {
      var s = We(null, this.yearlen), i = jl(Hr(e, n, r)) - this.yearordinal;
      return s[i] = i, [
        s,
        i,
        i + 1
      ];
    }, t.prototype.htimeset = function(e, n, r, s) {
      var i = this, a = [];
      return this.options.byminute.forEach(function(l) {
        a = a.concat(i.mtimeset(e, l, r, s));
      }), hi(a), a;
    }, t.prototype.mtimeset = function(e, n, r, s) {
      var i = this.options.bysecond.map(function(a) {
        return new Ya(e, n, a, s);
      });
      return hi(i), i;
    }, t.prototype.stimeset = function(e, n, r, s) {
      return [
        new Ya(e, n, r, s)
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
  function wM(t, e, n, r, s, i) {
    for (var a = [], l = 0; l < t.length; l++) {
      var c = void 0, d = void 0, f = t[l];
      f < 0 ? (c = Math.floor(f / e.length), d = Bt(f, e.length)) : (c = Math.floor((f - 1) / e.length), d = Bt(f - 1, e.length));
      for (var m = [], g = n; g < r; g++) {
        var y = i[g];
        mt(y) && m.push(y);
      }
      var v = void 0;
      c < 0 ? v = m.slice(c)[0] : v = m[c];
      var S = e[d], b = sp(s.yearordinal + v), _ = ip(b, S);
      Qe(a, _) || a.push(_);
    }
    return hi(a), a;
  }
  function lp(t, e) {
    var n = e.dtstart, r = e.freq, s = e.interval, i = e.until, a = e.bysetpos, l = e.count;
    if (l === 0 || s === 0) return Ln(t);
    var c = qT.fromDate(n), d = new bM(e);
    d.rebuild(c.year, c.month);
    for (var f = DM(d, c, e); ; ) {
      var m = d.getdayset(r)(c.year, c.month, c.day), g = m[0], y = m[1], v = m[2], S = _M(g, y, v, d, e);
      if (St(a)) for (var b = wM(a, f, y, v, d, g), _ = 0; _ < b.length; _++) {
        var E = b[_];
        if (i && E > i) return Ln(t);
        if (E >= n) {
          var R = Sf(E, e);
          if (!t.accept(R) || l && (--l, !l)) return Ln(t);
        }
      }
      else for (var _ = y; _ < v; _++) {
        var k = g[_];
        if (mt(k)) for (var T = sp(d.yearordinal + k), N = 0; N < f.length; N++) {
          var I = f[N], E = ip(T, I);
          if (i && E > i) return Ln(t);
          if (E >= n) {
            var R = Sf(E, e);
            if (!t.accept(R) || l && (--l, !l)) return Ln(t);
          }
        }
      }
      if (e.interval === 0 || (c.add(e, S), c.year > tp)) return Ln(t);
      Nc(r) || (f = d.gettimeset(r)(c.hour, c.minute, c.second, 0)), d.rebuild(c.year, c.month);
    }
  }
  function SM(t, e, n) {
    var r = n.bymonth, s = n.byweekno, i = n.byweekday, a = n.byeaster, l = n.bymonthday, c = n.bynmonthday, d = n.byyearday;
    return St(r) && !Qe(r, t.mmask[e]) || St(s) && !t.wnomask[e] || St(i) && !Qe(i, t.wdaymask[e]) || St(t.nwdaymask) && !t.nwdaymask[e] || a !== null && !Qe(t.eastermask, e) || (St(l) || St(c)) && !Qe(l, t.mdaymask[e]) && !Qe(c, t.nmdaymask[e]) || St(d) && (e < t.yearlen && !Qe(d, e + 1) && !Qe(d, -t.yearlen + e) || e >= t.yearlen && !Qe(d, e + 1 - t.yearlen) && !Qe(d, -t.nextyearlen + e - t.yearlen));
  }
  function Sf(t, e) {
    return new Ha(t, e.tzid).rezonedDate();
  }
  function Ln(t) {
    return t.getValue();
  }
  function _M(t, e, n, r, s) {
    for (var i = false, a = e; a < n; a++) {
      var l = t[a];
      i = SM(r, l, s), i && (t[l] = null);
    }
    return i;
  }
  function DM(t, e, n) {
    var r = n.freq, s = n.byhour, i = n.byminute, a = n.bysecond;
    return Nc(r) ? QT(n) : r >= Te.HOURLY && St(s) && !Qe(s, e.hour) || r >= Te.MINUTELY && St(i) && !Qe(i, e.minute) || r >= Te.SECONDLY && St(a) && !Qe(a, e.second) ? [] : t.gettimeset(r)(e.hour, e.minute, e.second, e.millisecond);
  }
  var en = {
    MO: new Pt(0),
    TU: new Pt(1),
    WE: new Pt(2),
    TH: new Pt(3),
    FR: new Pt(4),
    SA: new Pt(5),
    SU: new Pt(6)
  }, Lc = {
    freq: Ue.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: en.MO,
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
  }, kM = Object.keys(Lc), Te = (function() {
    function t(e, n) {
      e === void 0 && (e = {}), n === void 0 && (n = false), this._cache = n ? null : new nM(), this.origOptions = op(e);
      var r = ZT(e).parsedOptions;
      this.options = r;
    }
    return t.parseText = function(e, n) {
      return ap(e, n);
    }, t.fromText = function(e, n) {
      return zT(e, n);
    }, t.fromString = function(e) {
      return new t(t.parseString(e) || void 0);
    }, t.prototype._iter = function(e) {
      return lp(e, this.options);
    }, t.prototype._cacheGet = function(e, n) {
      return this._cache ? this._cache._cacheGet(e, n) : false;
    }, t.prototype._cacheAdd = function(e, n, r) {
      if (this._cache) return this._cache._cacheAdd(e, n, r);
    }, t.prototype.all = function(e) {
      if (e) return this._iter(new gf("all", {}, e));
      var n = this._cacheGet("all");
      return n === false && (n = this._iter(new ls("all", {})), this._cacheAdd("all", n)), n;
    }, t.prototype.between = function(e, n, r, s) {
      if (r === void 0 && (r = false), !Js(e) || !Js(n)) throw new Error("Invalid date passed in to RRule.between");
      var i = {
        before: n,
        after: e,
        inc: r
      };
      if (s) return this._iter(new gf("between", i, s));
      var a = this._cacheGet("between", i);
      return a === false && (a = this._iter(new ls("between", i)), this._cacheAdd("between", a, i)), a;
    }, t.prototype.before = function(e, n) {
      if (n === void 0 && (n = false), !Js(e)) throw new Error("Invalid date passed in to RRule.before");
      var r = {
        dt: e,
        inc: n
      }, s = this._cacheGet("before", r);
      return s === false && (s = this._iter(new ls("before", r)), this._cacheAdd("before", s, r)), s;
    }, t.prototype.after = function(e, n) {
      if (n === void 0 && (n = false), !Js(e)) throw new Error("Invalid date passed in to RRule.after");
      var r = {
        dt: e,
        inc: n
      }, s = this._cacheGet("after", r);
      return s === false && (s = this._iter(new ls("after", r)), this._cacheAdd("after", s, r)), s;
    }, t.prototype.count = function() {
      return this.all().length;
    }, t.prototype.toString = function() {
      return Ul(this.origOptions);
    }, t.prototype.toText = function(e, n, r) {
      return $T(this, e, n, r);
    }, t.prototype.isFullyConvertibleToText = function() {
      return GT(this);
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
    ], t.YEARLY = Ue.YEARLY, t.MONTHLY = Ue.MONTHLY, t.WEEKLY = Ue.WEEKLY, t.DAILY = Ue.DAILY, t.HOURLY = Ue.HOURLY, t.MINUTELY = Ue.MINUTELY, t.SECONDLY = Ue.SECONDLY, t.MO = en.MO, t.TU = en.TU, t.WE = en.WE, t.TH = en.TH, t.FR = en.FR, t.SA = en.SA, t.SU = en.SU, t.parseString = Wl, t.optionsToString = Ul, t;
  })();
  function xM(t, e, n, r, s, i) {
    var a = {}, l = t.accept;
    function c(g, y) {
      n.forEach(function(v) {
        v.between(g, y, true).forEach(function(S) {
          a[Number(S)] = true;
        });
      });
    }
    s.forEach(function(g) {
      var y = new Ha(g, i).rezonedDate();
      a[Number(y)] = true;
    }), t.accept = function(g) {
      var y = Number(g);
      return isNaN(y) ? l.call(this, g) : !a[y] && (c(new Date(y - 1), new Date(y + 1)), !a[y]) ? (a[y] = true, l.call(this, g)) : true;
    }, t.method === "between" && (c(t.args.after, t.args.before), t.accept = function(g) {
      var y = Number(g);
      return a[y] ? true : (a[y] = true, l.call(this, g));
    });
    for (var d = 0; d < r.length; d++) {
      var f = new Ha(r[d], i).rezonedDate();
      if (!t.accept(new Date(f.getTime()))) break;
    }
    e.forEach(function(g) {
      lp(t, g.options);
    });
    var m = t._result;
    switch (hi(m), t.method) {
      case "all":
      case "between":
        return m;
      case "before":
        return m.length && m[m.length - 1] || null;
      default:
        return m.length && m[0] || null;
    }
  }
  var _f = {
    dtstart: null,
    cache: false,
    unfold: false,
    forceset: false,
    compatible: false,
    tzid: null
  };
  function TM(t, e) {
    var n = [], r = [], s = [], i = [], a = Fa(t), l = a.dtstart, c = a.tzid, d = RM(t, e.unfold);
    return d.forEach(function(f) {
      var m;
      if (f) {
        var g = AM(f), y = g.name, v = g.parms, S = g.value;
        switch (y.toUpperCase()) {
          case "RRULE":
            if (v.length) throw new Error("unsupported RRULE parm: ".concat(v.join(",")));
            n.push(Wl(f));
            break;
          case "RDATE":
            var b = (m = /RDATE(?:;TZID=([^:=]+))?/i.exec(f)) !== null && m !== void 0 ? m : [], _ = b[1];
            _ && !c && (c = _), r = r.concat(Df(S, v));
            break;
          case "EXRULE":
            if (v.length) throw new Error("unsupported EXRULE parm: ".concat(v.join(",")));
            s.push(Wl(S));
            break;
          case "EXDATE":
            i = i.concat(Df(S, v));
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
  function MM(t, e) {
    var n = TM(t, e), r = n.rrulevals, s = n.rdatevals, i = n.exrulevals, a = n.exdatevals, l = n.dtstart, c = n.tzid, d = e.cache === false;
    if (e.compatible && (e.forceset = true, e.unfold = true), e.forceset || r.length > 1 || s.length || i.length || a.length) {
      var f = new cp(d);
      return f.dtstart(l), f.tzid(c || void 0), r.forEach(function(g) {
        f.rrule(new Te(pl(g, l, c), d));
      }), s.forEach(function(g) {
        f.rdate(g);
      }), i.forEach(function(g) {
        f.exrule(new Te(pl(g, l, c), d));
      }), a.forEach(function(g) {
        f.exdate(g);
      }), e.compatible && e.dtstart && f.rdate(l), f;
    }
    var m = r[0] || {};
    return new Te(pl(m, m.dtstart || e.dtstart || l, m.tzid || e.tzid || c), d);
  }
  function Bl(t, e) {
    return e === void 0 && (e = {}), MM(t, EM(e));
  }
  function pl(t, e, n) {
    return sn(sn({}, t), {
      dtstart: e,
      tzid: n
    });
  }
  function EM(t) {
    var e = [], n = Object.keys(t), r = Object.keys(_f);
    if (n.forEach(function(s) {
      Qe(r, s) || e.push(s);
    }), e.length) throw new Error("Invalid options: " + e.join(", "));
    return sn(sn({}, _f), t);
  }
  function CM(t) {
    if (t.indexOf(":") === -1) return {
      name: "RRULE",
      value: t
    };
    var e = LT(t, ":", 1), n = e[0], r = e[1];
    return {
      name: n,
      value: r
    };
  }
  function AM(t) {
    var e = CM(t), n = e.name, r = e.value, s = n.split(";");
    if (!s) throw new Error("empty property name");
    return {
      name: s[0].toUpperCase(),
      parms: s.slice(1),
      value: r
    };
  }
  function RM(t, e) {
    if (e === void 0 && (e = false), t = t && t.trim(), !t) throw new Error("Invalid empty string");
    if (!e) return t.split(/\s/);
    for (var n = t.split(`
`), r = 0; r < n.length; ) {
      var s = n[r] = n[r].replace(/\s+$/g, "");
      s ? r > 0 && s[0] === " " ? (n[r - 1] += s.slice(1), n.splice(r, 1)) : r += 1 : n.splice(r, 1);
    }
    return n;
  }
  function OM(t) {
    t.forEach(function(e) {
      if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(e)) throw new Error("unsupported RDATE/EXDATE parm: " + e);
    });
  }
  function Df(t, e) {
    return OM(e), t.split(",").map(function(n) {
      return Pc(n);
    });
  }
  function kf(t) {
    var e = this;
    return function(n) {
      if (n !== void 0 && (e["_".concat(t)] = n), e["_".concat(t)] !== void 0) return e["_".concat(t)];
      for (var r = 0; r < e._rrule.length; r++) {
        var s = e._rrule[r].origOptions[t];
        if (s) return s;
      }
    };
  }
  var cp = (function(t) {
    ec(e, t);
    function e(n) {
      n === void 0 && (n = false);
      var r = t.call(this, {}, n) || this;
      return r.dtstart = kf.apply(r, [
        "dtstart"
      ]), r.tzid = kf.apply(r, [
        "tzid"
      ]), r._rrule = [], r._rdate = [], r._exrule = [], r._exdate = [], r;
    }
    return e.prototype._iter = function(n) {
      return xM(n, this._rrule, this._exrule, this._rdate, this._exdate, this.tzid());
    }, e.prototype.rrule = function(n) {
      xf(n, this._rrule);
    }, e.prototype.exrule = function(n) {
      xf(n, this._exrule);
    }, e.prototype.rdate = function(n) {
      Tf(n, this._rdate);
    }, e.prototype.exdate = function(n) {
      Tf(n, this._exdate);
    }, e.prototype.rrules = function() {
      return this._rrule.map(function(n) {
        return Bl(n.toString());
      });
    }, e.prototype.exrules = function() {
      return this._exrule.map(function(n) {
        return Bl(n.toString());
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
      return !this._rrule.length && this._dtstart && (n = n.concat(Ul({
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
      }), this._rdate.length && n.push(Mf("RDATE", this._rdate, this.tzid())), this._exdate.length && n.push(Mf("EXDATE", this._exdate, this.tzid())), n;
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
  })(Te);
  function xf(t, e) {
    if (!(t instanceof Te)) throw new TypeError(String(t) + " is not RRule instance");
    Qe(e.map(String), String(t)) || e.push(t);
  }
  function Tf(t, e) {
    if (!(t instanceof Date)) throw new TypeError(String(t) + " is not Date instance");
    Qe(e.map(Number), Number(t)) || (e.push(t), hi(e));
  }
  function Mf(t, e, n) {
    var r = !n || n.toUpperCase() === "UTC", s = r ? "".concat(t, ":") : "".concat(t, ";TZID=").concat(n, ":"), i = e.map(function(a) {
      return Ic(a.valueOf(), r);
    }).join(",");
    return "".concat(s).concat(i);
  }
  const IM = {
    parse(t, e) {
      if (t.rrule != null) {
        let n = PM(t, e);
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
      return t.rruleSet.between(ct(e.start, -1), ct(e.end, 1)).map((r) => n.createMarker(t.dateEnv ? t.dateEnv.toDate(r) : r));
    }
  };
  function PM(t, e) {
    let n, r = false, s = false;
    if (typeof t.rrule == "string") {
      let l = NM(t.rrule);
      n = l.rruleSet, r = l.isTimeSpecified, s = l.isTimeZoneSpecified;
    }
    if (typeof t.rrule == "object" && t.rrule) {
      let l = Ef(t.rrule, e);
      n = new cp(), n.rrule(l.rrule), r = l.isTimeSpecified, s = l.isTimeZoneSpecified;
    }
    let i = [].concat(t.exdate || []), a = [].concat(t.exrule || []);
    for (let l of i) {
      let c = to(l);
      r = r || !c.isTimeUnspecified, s = s || c.timeZoneOffset !== null, n.exdate(new Date(c.marker.valueOf() - (c.timeZoneOffset || 0) * 60 * 1e3));
    }
    for (let l of a) {
      let c = Ef(l, e);
      r = r || c.isTimeSpecified, s = s || c.isTimeZoneSpecified, n.exrule(c.rrule);
    }
    return {
      rruleSet: n,
      isTimeSpecified: r,
      isTimeZoneSpecified: s
    };
  }
  function Ef(t, e) {
    let n = false, r = false;
    function s(a) {
      if (typeof a == "string") {
        let l = to(a);
        return l ? (n = n || !l.isTimeUnspecified, r = r || l.timeZoneOffset !== null, new Date(l.marker.valueOf() - (l.timeZoneOffset || 0) * 60 * 1e3)) : null;
      }
      return a;
    }
    let i = Object.assign(Object.assign({}, t), {
      dtstart: s(t.dtstart),
      until: s(t.until),
      freq: ja(t.freq),
      wkst: t.wkst == null ? (e.weekDow - 1 + 7) % 7 : ja(t.wkst),
      byweekday: YM(t.byweekday)
    });
    return {
      rrule: new Te(i),
      isTimeSpecified: n,
      isTimeZoneSpecified: r
    };
  }
  function NM(t) {
    let e = Bl(t, {
      forceset: true
    }), n = LM(t);
    return Object.assign({
      rruleSet: e
    }, n);
  }
  function LM(t) {
    let e = false, n = false;
    function r(s, i, a) {
      let l = to(a);
      e = e || !l.isTimeUnspecified, n = n || l.timeZoneOffset !== null;
    }
    return t.replace(/\b(DTSTART:)([^\n]*)/, r), t.replace(/\b(EXDATE:)([^\n]*)/, r), t.replace(/\b(UNTIL=)([^;\n]*)/, r), {
      isTimeSpecified: e,
      isTimeZoneSpecified: n
    };
  }
  function YM(t) {
    return Array.isArray(t) ? t.map(ja) : ja(t);
  }
  function ja(t) {
    return typeof t == "string" ? Te[t.toUpperCase()] : t;
  }
  const FM = {
    rrule: U,
    exrule: U,
    exdate: U,
    duration: Pe
  };
  var HM = un({
    name: "@fullcalendar/rrule",
    recurringTypes: [
      IM
    ],
    eventRefiners: FM
  });
  class jM extends ze {
    constructor() {
      super(...arguments), this.state = {
        textId: dr()
      };
    }
    render() {
      let { theme: e, dateEnv: n, options: r, viewApi: s } = this.context, { cellId: i, dayDate: a, todayRange: l } = this.props, { textId: c } = this.state, d = wc(a, l), f = r.listDayFormat ? n.format(a, r.listDayFormat) : "", m = r.listDaySideFormat ? n.format(a, r.listDaySideFormat) : "", g = Object.assign({
        date: n.toDate(a),
        view: s,
        textId: c,
        text: f,
        sideText: m,
        navLinkAttrs: Ds(this.context, a),
        sideNavLinkAttrs: Ds(this.context, a, "day", false)
      }, d);
      return M(Ot, {
        elTag: "tr",
        elClasses: [
          "fc-list-day",
          ...ao(d, e)
        ],
        elAttrs: {
          "data-date": Di(a)
        },
        renderProps: g,
        generatorName: "dayHeaderContent",
        customGenerator: r.dayHeaderContent,
        defaultGenerator: VM,
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
  function VM(t) {
    return M(qe, null, t.text && M("a", Object.assign({
      id: t.textId,
      className: "fc-list-day-text"
    }, t.navLinkAttrs), t.text), t.sideText && M("a", Object.assign({
      "aria-hidden": true,
      className: "fc-list-day-side-text"
    }, t.sideNavLinkAttrs), t.sideText));
  }
  const WM = tt({
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
  });
  class UM extends ze {
    render() {
      let { props: e, context: n } = this, { options: r } = n, { seg: s, timeHeaderId: i, eventHeaderId: a, dateHeaderId: l } = e, c = r.eventTimeFormat || WM;
      return M(lo, Object.assign({}, e, {
        elTag: "tr",
        elClasses: [
          "fc-list-event",
          s.eventRange.def.url && "fc-event-forced-url"
        ],
        defaultGenerator: () => BM(s, n),
        seg: s,
        timeText: "",
        disableDragging: true,
        disableResizing: true
      }), (d, f) => M(qe, null, zM(s, c, n, i, l), M("td", {
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
  function BM(t, e) {
    let n = vc(t, e);
    return M("a", Object.assign({}, n), t.eventRange.def.title);
  }
  function zM(t, e, n, r, s) {
    let { options: i } = n;
    if (i.displayEventTime !== false) {
      let a = t.eventRange.def, l = t.eventRange.instance, c = false, d;
      if (a.allDay ? c = true : F_(t.eventRange.range) ? t.isStart ? d = ti(t, e, n, null, null, l.range.start, t.end) : t.isEnd ? d = ti(t, e, n, null, null, t.start, l.range.end) : c = true : d = ti(t, e, n), c) {
        let f = {
          text: n.options.allDayText,
          view: n.viewApi
        };
        return M(Ot, {
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
          defaultGenerator: $M,
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
  function $M(t) {
    return t.text;
  }
  class GM extends cn {
    constructor() {
      super(...arguments), this.computeDateVars = Me(ZM), this.eventStoreToSegs = Me(this._eventStoreToSegs), this.state = {
        timeHeaderId: dr(),
        eventHeaderId: dr(),
        dateHeaderIdRoot: dr()
      }, this.setRootEl = (e) => {
        e ? this.context.registerInteractiveComponent(this, {
          el: e
        }) : this.context.unregisterInteractiveComponent(this);
      };
    }
    render() {
      let { props: e, context: n } = this, { dayDates: r, dayRanges: s } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, s);
      return M(ui, {
        elRef: this.setRootEl,
        elClasses: [
          "fc-list",
          n.theme.getClass("table"),
          n.options.stickyHeaderDates !== false ? "fc-list-sticky" : ""
        ],
        viewSpec: n.viewSpec
      }, M(wm, {
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
      return M(Ot, {
        elTag: "div",
        elClasses: [
          "fc-list-empty"
        ],
        renderProps: r,
        generatorName: "noEventsContent",
        customGenerator: e.noEventsContent,
        defaultGenerator: qM,
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
      let { theme: r, options: s } = this.context, { timeHeaderId: i, eventHeaderId: a, dateHeaderIdRoot: l } = this.state, c = QM(e);
      return M(Br, {
        unit: "day"
      }, (d, f) => {
        let m = [];
        for (let g = 0; g < c.length; g += 1) {
          let y = c[g];
          if (y) {
            let v = Di(n[g]), S = l + "-" + v;
            m.push(M(jM, {
              key: v,
              cellId: S,
              dayDate: n[g],
              todayRange: f
            })), y = yc(y, s.eventOrder);
            for (let b of y) m.push(M(UM, Object.assign({
              key: v + ":" + b.eventRange.instance.instanceId,
              seg: b,
              isDragging: false,
              isResizing: false,
              isDateSelecting: false,
              isSelected: false,
              timeHeaderId: i,
              eventHeaderId: a,
              dateHeaderId: S
            }, Un(b, f, d))));
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
      return this.eventRangesToSegs(Rl(e, n, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, r);
    }
    eventRangesToSegs(e, n) {
      let r = [];
      for (let s of e) r.push(...this.eventRangeToSegs(s, n));
      return r;
    }
    eventRangeToSegs(e, n) {
      let { dateEnv: r } = this.context, { nextDayThreshold: s } = this.context.options, i = e.range, a = e.def.allDay, l, c, d, f = [];
      for (l = 0; l < n.length; l += 1) if (c = pr(i, n[l]), c && (d = {
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
  function qM(t) {
    return t.text;
  }
  function ZM(t) {
    let e = Xe(t.renderRange.start), n = t.renderRange.end, r = [], s = [];
    for (; e < n; ) r.push(e), s.push({
      start: e,
      end: ct(e, 1)
    }), e = ct(e, 1);
    return {
      dayDates: r,
      dayRanges: s
    };
  }
  function QM(t) {
    let e = [], n, r;
    for (n = 0; n < t.length; n += 1) r = t[n], (e[r.dayIndex] || (e[r.dayIndex] = [])).push(r);
    return e;
  }
  var XM = ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}';
  Qa(XM);
  const JM = {
    listDayFormat: Cf,
    listDaySideFormat: Cf,
    noEventsClassNames: U,
    noEventsContent: U,
    noEventsDidMount: U,
    noEventsWillUnmount: U
  };
  function Cf(t) {
    return t === false ? null : tt(t);
  }
  var KM = un({
    name: "@fullcalendar/list",
    optionRefiners: JM,
    views: {
      list: {
        component: GM,
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
  function gl(t) {
    return t === "Tag" || t === "Monat" ? "r" : t === "Jahr" ? "s" : "";
  }
  var eE = {
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
        return `Vorherige${gl(t)} ${t}`;
      },
      next(t) {
        return `N\xE4chste${gl(t)} ${t}`;
      },
      today(t) {
        return t === "Tag" ? "Heute" : `Diese${gl(t)} ${t}`;
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
  }, tE = {
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
  }, nE = {
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
  }, rE = {
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
  }, sE = {
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
  }, iE = {
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
  }, aE = {
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
  }, oE = {
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
  }, lE = {
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
  }, cE = {
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
  }, up = {
    exports: {}
  };
  (function(t, e) {
    (function() {
      var n = Math.PI, r = Math.sin, s = Math.cos, i = Math.tan, a = Math.asin, l = Math.atan2, c = Math.acos, d = n / 180, f = 1e3 * 60 * 60 * 24, m = 2440588, g = 2451545;
      function y(W) {
        return W.valueOf() / f - 0.5 + m;
      }
      function v(W) {
        return new Date((W + 0.5 - m) * f);
      }
      function S(W) {
        return y(W) - g;
      }
      var b = d * 23.4397;
      function _(W, G) {
        return l(r(W) * s(b) - i(G) * r(b), s(W));
      }
      function E(W, G) {
        return a(r(G) * s(b) + s(G) * r(b) * r(W));
      }
      function R(W, G, ee) {
        return l(r(W), s(W) * r(G) - i(ee) * s(G));
      }
      function k(W, G, ee) {
        return a(r(G) * r(ee) + s(G) * s(ee) * s(W));
      }
      function T(W, G) {
        return d * (280.16 + 360.9856235 * W) - G;
      }
      function N(W) {
        return W < 0 && (W = 0), 2967e-7 / Math.tan(W + 312536e-8 / (W + 0.08901179));
      }
      function I(W) {
        return d * (357.5291 + 0.98560028 * W);
      }
      function O(W) {
        var G = d * (1.9148 * r(W) + 0.02 * r(2 * W) + 3e-4 * r(3 * W)), ee = d * 102.9372;
        return W + G + ee + n;
      }
      function K(W) {
        var G = I(W), ee = O(G);
        return {
          dec: E(ee, 0),
          ra: _(ee, 0)
        };
      }
      var z = {};
      z.getPosition = function(W, G, ee) {
        var J = d * -ee, ie = d * G, j = S(W), se = K(j), re = T(j, J) - se.ra;
        return {
          azimuth: R(re, ie, se.dec),
          altitude: k(re, ie, se.dec)
        };
      };
      var L = z.times = [
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
      z.addTime = function(W, G, ee) {
        L.push([
          W,
          G,
          ee
        ]);
      };
      var te = 9e-4;
      function Z(W, G) {
        return Math.round(W - te - G / (2 * n));
      }
      function x(W, G, ee) {
        return te + (W + G) / (2 * n) + ee;
      }
      function C(W, G, ee) {
        return g + W + 53e-4 * r(G) - 69e-4 * r(2 * ee);
      }
      function P(W, G, ee) {
        return c((r(W) - r(G) * r(ee)) / (s(G) * s(ee)));
      }
      function B(W, G, ee, J, ie, j, se) {
        var re = P(W, ee, J), Q = x(re, G, ie);
        return C(Q, j, se);
      }
      z.getTimes = function(W, G, ee) {
        var J = d * -ee, ie = d * G, j = S(W), se = Z(j, J), re = x(0, J, se), Q = I(re), X = O(Q), ue = E(X, 0), he = C(re, Q, X), Se, q, ce, me, we, le = {
          solarNoon: v(he),
          nadir: v(he + 0.5)
        };
        for (Se = 0, q = L.length; Se < q; Se += 1) ce = L[Se], me = B(ce[0] * d, J, ie, ue, se, Q, X), we = he - (me - he), le[ce[1]] = v(we), le[ce[2]] = v(me);
        return le;
      };
      function H(W) {
        var G = d * (218.316 + 13.176396 * W), ee = d * (134.963 + 13.064993 * W), J = d * (93.272 + 13.22935 * W), ie = G + d * 6.289 * r(ee), j = d * 5.128 * r(J), se = 385001 - 20905 * s(ee);
        return {
          ra: _(ie, j),
          dec: E(ie, j),
          dist: se
        };
      }
      z.getMoonPosition = function(W, G, ee) {
        var J = d * -ee, ie = d * G, j = S(W), se = H(j), re = T(j, J) - se.ra, Q = k(re, ie, se.dec), X = l(r(re), i(ie) * s(se.dec) - r(se.dec) * s(re));
        return Q = Q + N(Q), {
          azimuth: R(re, ie, se.dec),
          altitude: Q,
          distance: se.dist,
          parallacticAngle: X
        };
      }, z.getMoonIllumination = function(W) {
        var G = S(W || /* @__PURE__ */ new Date()), ee = K(G), J = H(G), ie = 149598e3, j = c(r(ee.dec) * r(J.dec) + s(ee.dec) * s(J.dec) * s(ee.ra - J.ra)), se = l(ie * r(j), J.dist - ie * s(j)), re = l(s(ee.dec) * r(ee.ra - J.ra), r(ee.dec) * s(J.dec) - s(ee.dec) * r(J.dec) * s(ee.ra - J.ra));
        return {
          fraction: (1 + s(se)) / 2,
          phase: 0.5 + 0.5 * se * (re < 0 ? -1 : 1) / Math.PI,
          angle: re
        };
      };
      function ne(W, G) {
        return new Date(W.valueOf() + G * f / 24);
      }
      z.getMoonTimes = function(W, G, ee, J) {
        var ie = new Date(W);
        J ? ie.setUTCHours(0, 0, 0, 0) : ie.setHours(0, 0, 0, 0);
        for (var j = 0.133 * d, se = z.getMoonPosition(ie, G, ee).altitude - j, re, Q, X, ue, he, Se, q, ce, me, we, le, Ce, _e, ye = 1; ye <= 24 && (re = z.getMoonPosition(ne(ie, ye), G, ee).altitude - j, Q = z.getMoonPosition(ne(ie, ye + 1), G, ee).altitude - j, he = (se + Q) / 2 - re, Se = (Q - se) / 2, q = -Se / (2 * he), ce = (he * q + Se) * q + re, me = Se * Se - 4 * he * re, we = 0, me >= 0 && (_e = Math.sqrt(me) / (Math.abs(he) * 2), le = q - _e, Ce = q + _e, Math.abs(le) <= 1 && we++, Math.abs(Ce) <= 1 && we++, le < -1 && (le = Ce)), we === 1 ? se < 0 ? X = ye + le : ue = ye + le : we === 2 && (X = ye + (ce < 0 ? Ce : le), ue = ye + (ce < 0 ? le : Ce)), !(X && ue)); ye += 2) se = Q;
        var De = {};
        return X && (De.rise = ne(ie, X)), ue && (De.set = ne(ie, ue)), !X && !ue && (De[ce > 0 ? "alwaysUp" : "alwaysDown"] = true), De;
      }, t.exports = z;
    })();
  })(up);
  var uE = up.exports;
  const ma = Vr(uE);
  function Xt(t) {
    if (t === "*" || t === "?" || t === "") return t;
    const e = t.split(","), n = [];
    for (let r = 0; r < e.length; r++) {
      const s = e[r].match(/(\d+)-(\d+)/);
      if (s) for (let i = parseInt(s[1], 10); i <= parseInt(s[2], 10); i++) n.push(i);
      else n.push(parseInt(e[r], 10));
    }
    return n;
  }
  function Yt(t, e) {
    const n = {};
    {
      const r = t.replace(/\s\s/g, " ").replace(/\s\s/g, " ").split(" ");
      r.length === 6 ? (n.seconds = Xt(r[0]), n.minutes = Xt(r[1]), n.hours = Xt(r[2]), n.dates = Xt(r[3]), n.months = Xt(r[4]), n.dows = Xt(r[5])) : (n.seconds = [
        0
      ], n.minutes = Xt(r[0]), n.hours = Xt(r[1]), n.dates = Xt(r[2]), n.months = Xt(r[3]), n.dows = Xt(r[4]));
    }
    return n;
  }
  function ts(t) {
    if (t === "*" || t === "?") return t;
    if (typeof t == "string" && (t = parseInt(t, 10)), typeof t != "object" && (t = [
      t
    ]), t.sort((s, i) => s - i), t.length < 3) return t.join(",");
    const e = [];
    let n = t[0], r = t[0];
    for (let s = 1; s < t.length; s++) t[s] === r + 1 ? r++ : (n !== r ? n + 1 === r ? e.push(`${n},${r}`) : e.push(`${n}-${r}`) : e.push(n), n = t[s], r = t[s]);
    return n !== r ? n + 1 === r ? e.push(`${n},${r}`) : e.push(`${n}-${r}`) : e.push(n), e.join(",");
  }
  function Kt(t) {
    const e = [];
    return t.seconds && e.push(ts(t.seconds)), e.push(ts(t.minutes)), e.push(ts(t.hours)), e.push(ts(t.dates)), e.push(ts(t.months)), e.push(ts(t.dows)), e.join(" ");
  }
  function ri(t, e) {
    if (e === "cron") {
      const n = Yt(t), r = /* @__PURE__ */ new Date();
      return r.setHours(n.hours[0]), r.setMinutes(n.minutes[0]), r.setSeconds(n.seconds[0]), Array.isArray(n.dows) && r.setDate(r.getDate() + n.dows[0] - r.getDay()), r;
    }
    return e === "date" ? new Date(t) : null;
  }
  function tn(t, e) {
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
      const n = t.toISOString();
      return n.substring(0, n.length - 5);
    }
    return null;
  }
  var dp;
  function fe() {
    return dp.apply(null, arguments);
  }
  function dE(t) {
    dp = t;
  }
  function on(t) {
    return t instanceof Array || Object.prototype.toString.call(t) === "[object Array]";
  }
  function Lr(t) {
    return t != null && Object.prototype.toString.call(t) === "[object Object]";
  }
  function Be(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  function Yc(t) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(t).length === 0;
    var e;
    for (e in t) if (Be(t, e)) return false;
    return true;
  }
  function Ft(t) {
    return t === void 0;
  }
  function qn(t) {
    return typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]";
  }
  function Mi(t) {
    return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
  }
  function fp(t, e) {
    var n = [], r, s = t.length;
    for (r = 0; r < s; ++r) n.push(e(t[r], r));
    return n;
  }
  function lr(t, e) {
    for (var n in e) Be(e, n) && (t[n] = e[n]);
    return Be(e, "toString") && (t.toString = e.toString), Be(e, "valueOf") && (t.valueOf = e.valueOf), t;
  }
  function kn(t, e, n, r) {
    return Np(t, e, n, r, true).utc();
  }
  function fE() {
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
  function Oe(t) {
    return t._pf == null && (t._pf = fE()), t._pf;
  }
  var zl;
  Array.prototype.some ? zl = Array.prototype.some : zl = function(t) {
    var e = Object(this), n = e.length >>> 0, r;
    for (r = 0; r < n; r++) if (r in e && t.call(this, e[r], r, e)) return true;
    return false;
  };
  function Fc(t) {
    var e = null, n = false, r = t._d && !isNaN(t._d.getTime());
    if (r && (e = Oe(t), n = zl.call(e.parsedDateParts, function(s) {
      return s != null;
    }), r = e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (r = r && e.charsLeftOver === 0 && e.unusedTokens.length === 0 && e.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(t)) t._isValid = r;
    else return r;
    return t._isValid;
  }
  function uo(t) {
    var e = kn(NaN);
    return t != null ? lr(Oe(e), t) : Oe(e).userInvalidated = true, e;
  }
  var Af = fe.momentProperties = [], yl = false;
  function Hc(t, e) {
    var n, r, s, i = Af.length;
    if (Ft(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), Ft(e._i) || (t._i = e._i), Ft(e._f) || (t._f = e._f), Ft(e._l) || (t._l = e._l), Ft(e._strict) || (t._strict = e._strict), Ft(e._tzm) || (t._tzm = e._tzm), Ft(e._isUTC) || (t._isUTC = e._isUTC), Ft(e._offset) || (t._offset = e._offset), Ft(e._pf) || (t._pf = Oe(e)), Ft(e._locale) || (t._locale = e._locale), i > 0) for (n = 0; n < i; n++) r = Af[n], s = e[r], Ft(s) || (t[r] = s);
    return t;
  }
  function Ei(t) {
    Hc(this, t), this._d = new Date(t._d != null ? t._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), yl === false && (yl = true, fe.updateOffset(this), yl = false);
  }
  function ln(t) {
    return t instanceof Ei || t != null && t._isAMomentObject != null;
  }
  function hp(t) {
    fe.suppressDeprecationWarnings === false && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + t);
  }
  function Gt(t, e) {
    var n = true;
    return lr(function() {
      if (fe.deprecationHandler != null && fe.deprecationHandler(null, t), n) {
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
        hp(t + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack), n = false;
      }
      return e.apply(this, arguments);
    }, e);
  }
  var Rf = {};
  function mp(t, e) {
    fe.deprecationHandler != null && fe.deprecationHandler(t, e), Rf[t] || (hp(e), Rf[t] = true);
  }
  fe.suppressDeprecationWarnings = false;
  fe.deprecationHandler = null;
  function xn(t) {
    return typeof Function < "u" && t instanceof Function || Object.prototype.toString.call(t) === "[object Function]";
  }
  function hE(t) {
    var e, n;
    for (n in t) Be(t, n) && (e = t[n], xn(e) ? this[n] = e : this["_" + n] = e);
    this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }
  function $l(t, e) {
    var n = lr({}, t), r;
    for (r in e) Be(e, r) && (Lr(t[r]) && Lr(e[r]) ? (n[r] = {}, lr(n[r], t[r]), lr(n[r], e[r])) : e[r] != null ? n[r] = e[r] : delete n[r]);
    for (r in t) Be(t, r) && !Be(e, r) && Lr(t[r]) && (n[r] = lr({}, n[r]));
    return n;
  }
  function jc(t) {
    t != null && this.set(t);
  }
  var Gl;
  Object.keys ? Gl = Object.keys : Gl = function(t) {
    var e, n = [];
    for (e in t) Be(t, e) && n.push(e);
    return n;
  };
  var mE = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function pE(t, e, n) {
    var r = this._calendar[t] || this._calendar.sameElse;
    return xn(r) ? r.call(e, n) : r;
  }
  function _n(t, e, n) {
    var r = "" + Math.abs(t), s = e - r.length, i = t >= 0;
    return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
  }
  var Vc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ia = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, vl = {}, ps = {};
  function xe(t, e, n, r) {
    var s = r;
    typeof r == "string" && (s = function() {
      return this[r]();
    }), t && (ps[t] = s), e && (ps[e[0]] = function() {
      return _n(s.apply(this, arguments), e[1], e[2]);
    }), n && (ps[n] = function() {
      return this.localeData().ordinal(s.apply(this, arguments), t);
    });
  }
  function gE(t) {
    return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
  }
  function yE(t) {
    var e = t.match(Vc), n, r;
    for (n = 0, r = e.length; n < r; n++) ps[e[n]] ? e[n] = ps[e[n]] : e[n] = gE(e[n]);
    return function(s) {
      var i = "", a;
      for (a = 0; a < r; a++) i += xn(e[a]) ? e[a].call(s, t) : e[a];
      return i;
    };
  }
  function pa(t, e) {
    return t.isValid() ? (e = pp(e, t.localeData()), vl[e] = vl[e] || yE(e), vl[e](t)) : t.localeData().invalidDate();
  }
  function pp(t, e) {
    var n = 5;
    function r(s) {
      return e.longDateFormat(s) || s;
    }
    for (ia.lastIndex = 0; n >= 0 && ia.test(t); ) t = t.replace(ia, r), ia.lastIndex = 0, n -= 1;
    return t;
  }
  var vE = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function bE(t) {
    var e = this._longDateFormat[t], n = this._longDateFormat[t.toUpperCase()];
    return e || !n ? e : (this._longDateFormat[t] = n.match(Vc).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[t]);
  }
  var wE = "Invalid date";
  function SE() {
    return this._invalidDate;
  }
  var _E = "%d", DE = /\d{1,2}/;
  function kE(t) {
    return this._ordinal.replace("%d", t);
  }
  var xE = {
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
  function TE(t, e, n, r) {
    var s = this._relativeTime[n];
    return xn(s) ? s(t, e, n, r) : s.replace(/%d/i, t);
  }
  function ME(t, e) {
    var n = this._relativeTime[t > 0 ? "future" : "past"];
    return xn(n) ? n(e) : n.replace(/%s/i, e);
  }
  var Of = {
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
  function qt(t) {
    return typeof t == "string" ? Of[t] || Of[t.toLowerCase()] : void 0;
  }
  function Wc(t) {
    var e = {}, n, r;
    for (r in t) Be(t, r) && (n = qt(r), n && (e[n] = t[r]));
    return e;
  }
  var EE = {
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
  function CE(t) {
    var e = [], n;
    for (n in t) Be(t, n) && e.push({
      unit: n,
      priority: EE[n]
    });
    return e.sort(function(r, s) {
      return r.priority - s.priority;
    }), e;
  }
  var gp = /\d/, Wt = /\d\d/, yp = /\d{3}/, Uc = /\d{4}/, fo = /[+-]?\d{6}/, st = /\d\d?/, vp = /\d\d\d\d?/, bp = /\d\d\d\d\d\d?/, ho = /\d{1,3}/, Bc = /\d{1,4}/, mo = /[+-]?\d{1,6}/, As = /\d+/, po = /[+-]?\d+/, AE = /Z|[+-]\d\d:?\d\d/gi, go = /Z|[+-]\d\d(?::?\d\d)?/gi, RE = /[+-]?\d+(\.\d{1,3})?/, Ci = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Rs = /^[1-9]\d?/, zc = /^([1-9]\d|\d)/, Va;
  Va = {};
  function be(t, e, n) {
    Va[t] = xn(e) ? e : function(r, s) {
      return r && n ? n : e;
    };
  }
  function OE(t, e) {
    return Be(Va, t) ? Va[t](e._strict, e._locale) : new RegExp(IE(t));
  }
  function IE(t) {
    return Bn(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, n, r, s, i) {
      return n || r || s || i;
    }));
  }
  function Bn(t) {
    return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function zt(t) {
    return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
  }
  function Ye(t) {
    var e = +t, n = 0;
    return e !== 0 && isFinite(e) && (n = zt(e)), n;
  }
  var ql = {};
  function Ze(t, e) {
    var n, r = e, s;
    for (typeof t == "string" && (t = [
      t
    ]), qn(e) && (r = function(i, a) {
      a[e] = Ye(i);
    }), s = t.length, n = 0; n < s; n++) ql[t[n]] = r;
  }
  function Ai(t, e) {
    Ze(t, function(n, r, s, i) {
      s._w = s._w || {}, e(n, s._w, s, i);
    });
  }
  function PE(t, e, n) {
    e != null && Be(ql, t) && ql[t](e, n._a, n, t);
  }
  function yo(t) {
    return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0;
  }
  var Rt = 0, jn = 1, wn = 2, yt = 3, rn = 4, Vn = 5, Or = 6, NE = 7, LE = 8;
  xe("Y", 0, 0, function() {
    var t = this.year();
    return t <= 9999 ? _n(t, 4) : "+" + t;
  });
  xe(0, [
    "YY",
    2
  ], 0, function() {
    return this.year() % 100;
  });
  xe(0, [
    "YYYY",
    4
  ], 0, "year");
  xe(0, [
    "YYYYY",
    5
  ], 0, "year");
  xe(0, [
    "YYYYYY",
    6,
    true
  ], 0, "year");
  be("Y", po);
  be("YY", st, Wt);
  be("YYYY", Bc, Uc);
  be("YYYYY", mo, fo);
  be("YYYYYY", mo, fo);
  Ze([
    "YYYYY",
    "YYYYYY"
  ], Rt);
  Ze("YYYY", function(t, e) {
    e[Rt] = t.length === 2 ? fe.parseTwoDigitYear(t) : Ye(t);
  });
  Ze("YY", function(t, e) {
    e[Rt] = fe.parseTwoDigitYear(t);
  });
  Ze("Y", function(t, e) {
    e[Rt] = parseInt(t, 10);
  });
  function si(t) {
    return yo(t) ? 366 : 365;
  }
  fe.parseTwoDigitYear = function(t) {
    return Ye(t) + (Ye(t) > 68 ? 1900 : 2e3);
  };
  var wp = Os("FullYear", true);
  function YE() {
    return yo(this.year());
  }
  function Os(t, e) {
    return function(n) {
      return n != null ? (Sp(this, t, n), fe.updateOffset(this, e), this) : mi(this, t);
    };
  }
  function mi(t, e) {
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
  function Sp(t, e, n) {
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
      i = n, a = t.month(), l = t.date(), l = l === 29 && a === 1 && !yo(i) ? 28 : l, s ? r.setUTCFullYear(i, a, l) : r.setFullYear(i, a, l);
    }
  }
  function FE(t) {
    return t = qt(t), xn(this[t]) ? this[t]() : this;
  }
  function HE(t, e) {
    if (typeof t == "object") {
      t = Wc(t);
      var n = CE(t), r, s = n.length;
      for (r = 0; r < s; r++) this[n[r].unit](t[n[r].unit]);
    } else if (t = qt(t), xn(this[t])) return this[t](e);
    return this;
  }
  function jE(t, e) {
    return (t % e + e) % e;
  }
  var ft;
  Array.prototype.indexOf ? ft = Array.prototype.indexOf : ft = function(t) {
    var e;
    for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
    return -1;
  };
  function $c(t, e) {
    if (isNaN(t) || isNaN(e)) return NaN;
    var n = jE(e, 12);
    return t += (e - n) / 12, n === 1 ? yo(t) ? 29 : 28 : 31 - n % 7 % 2;
  }
  xe("M", [
    "MM",
    2
  ], "Mo", function() {
    return this.month() + 1;
  });
  xe("MMM", 0, 0, function(t) {
    return this.localeData().monthsShort(this, t);
  });
  xe("MMMM", 0, 0, function(t) {
    return this.localeData().months(this, t);
  });
  be("M", st, Rs);
  be("MM", st, Wt);
  be("MMM", function(t, e) {
    return e.monthsShortRegex(t);
  });
  be("MMMM", function(t, e) {
    return e.monthsRegex(t);
  });
  Ze([
    "M",
    "MM"
  ], function(t, e) {
    e[jn] = Ye(t) - 1;
  });
  Ze([
    "MMM",
    "MMMM"
  ], function(t, e, n, r) {
    var s = n._locale.monthsParse(t, r, n._strict);
    s != null ? e[jn] = s : Oe(n).invalidMonth = t;
  });
  var VE = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), _p = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Dp = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, WE = Ci, UE = Ci;
  function BE(t, e) {
    return t ? on(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Dp).test(e) ? "format" : "standalone"][t.month()] : on(this._months) ? this._months : this._months.standalone;
  }
  function zE(t, e) {
    return t ? on(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Dp.test(e) ? "format" : "standalone"][t.month()] : on(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function $E(t, e, n) {
    var r, s, i, a = t.toLocaleLowerCase();
    if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) i = kn([
      2e3,
      r
    ]), this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
    return n ? e === "MMM" ? (s = ft.call(this._shortMonthsParse, a), s !== -1 ? s : null) : (s = ft.call(this._longMonthsParse, a), s !== -1 ? s : null) : e === "MMM" ? (s = ft.call(this._shortMonthsParse, a), s !== -1 ? s : (s = ft.call(this._longMonthsParse, a), s !== -1 ? s : null)) : (s = ft.call(this._longMonthsParse, a), s !== -1 ? s : (s = ft.call(this._shortMonthsParse, a), s !== -1 ? s : null));
  }
  function GE(t, e, n) {
    var r, s, i;
    if (this._monthsParseExact) return $E.call(this, t, e, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (s = kn([
        2e3,
        r
      ]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && e === "MMMM" && this._longMonthsParse[r].test(t)) return r;
      if (n && e === "MMM" && this._shortMonthsParse[r].test(t)) return r;
      if (!n && this._monthsParse[r].test(t)) return r;
    }
  }
  function kp(t, e) {
    if (!t.isValid()) return t;
    if (typeof e == "string") {
      if (/^\d+$/.test(e)) e = Ye(e);
      else if (e = t.localeData().monthsParse(e), !qn(e)) return t;
    }
    var n = e, r = t.date();
    return r = r < 29 ? r : Math.min(r, $c(t.year(), n)), t._isUTC ? t._d.setUTCMonth(n, r) : t._d.setMonth(n, r), t;
  }
  function xp(t) {
    return t != null ? (kp(this, t), fe.updateOffset(this, true), this) : mi(this, "Month");
  }
  function qE() {
    return $c(this.year(), this.month());
  }
  function ZE(t) {
    return this._monthsParseExact ? (Be(this, "_monthsRegex") || Tp.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (Be(this, "_monthsShortRegex") || (this._monthsShortRegex = WE), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function QE(t) {
    return this._monthsParseExact ? (Be(this, "_monthsRegex") || Tp.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (Be(this, "_monthsRegex") || (this._monthsRegex = UE), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex);
  }
  function Tp() {
    function t(c, d) {
      return d.length - c.length;
    }
    var e = [], n = [], r = [], s, i, a, l;
    for (s = 0; s < 12; s++) i = kn([
      2e3,
      s
    ]), a = Bn(this.monthsShort(i, "")), l = Bn(this.months(i, "")), e.push(a), n.push(l), r.push(l), r.push(a);
    e.sort(t), n.sort(t), r.sort(t), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
  }
  function XE(t, e, n, r, s, i, a) {
    var l;
    return t < 100 && t >= 0 ? (l = new Date(t + 400, e, n, r, s, i, a), isFinite(l.getFullYear()) && l.setFullYear(t)) : l = new Date(t, e, n, r, s, i, a), l;
  }
  function pi(t) {
    var e, n;
    return t < 100 && t >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = t + 400, e = new Date(Date.UTC.apply(null, n)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e;
  }
  function Wa(t, e, n) {
    var r = 7 + e - n, s = (7 + pi(t, 0, r).getUTCDay() - e) % 7;
    return -s + r - 1;
  }
  function Mp(t, e, n, r, s) {
    var i = (7 + n - r) % 7, a = Wa(t, r, s), l = 1 + 7 * (e - 1) + i + a, c, d;
    return l <= 0 ? (c = t - 1, d = si(c) + l) : l > si(t) ? (c = t + 1, d = l - si(t)) : (c = t, d = l), {
      year: c,
      dayOfYear: d
    };
  }
  function gi(t, e, n) {
    var r = Wa(t.year(), e, n), s = Math.floor((t.dayOfYear() - r - 1) / 7) + 1, i, a;
    return s < 1 ? (a = t.year() - 1, i = s + zn(a, e, n)) : s > zn(t.year(), e, n) ? (i = s - zn(t.year(), e, n), a = t.year() + 1) : (a = t.year(), i = s), {
      week: i,
      year: a
    };
  }
  function zn(t, e, n) {
    var r = Wa(t, e, n), s = Wa(t + 1, e, n);
    return (si(t) - r + s) / 7;
  }
  xe("w", [
    "ww",
    2
  ], "wo", "week");
  xe("W", [
    "WW",
    2
  ], "Wo", "isoWeek");
  be("w", st, Rs);
  be("ww", st, Wt);
  be("W", st, Rs);
  be("WW", st, Wt);
  Ai([
    "w",
    "ww",
    "W",
    "WW"
  ], function(t, e, n, r) {
    e[r.substr(0, 1)] = Ye(t);
  });
  function JE(t) {
    return gi(t, this._week.dow, this._week.doy).week;
  }
  var KE = {
    dow: 0,
    doy: 6
  };
  function eC() {
    return this._week.dow;
  }
  function tC() {
    return this._week.doy;
  }
  function nC(t) {
    var e = this.localeData().week(this);
    return t == null ? e : this.add((t - e) * 7, "d");
  }
  function rC(t) {
    var e = gi(this, 1, 4).week;
    return t == null ? e : this.add((t - e) * 7, "d");
  }
  xe("d", 0, "do", "day");
  xe("dd", 0, 0, function(t) {
    return this.localeData().weekdaysMin(this, t);
  });
  xe("ddd", 0, 0, function(t) {
    return this.localeData().weekdaysShort(this, t);
  });
  xe("dddd", 0, 0, function(t) {
    return this.localeData().weekdays(this, t);
  });
  xe("e", 0, 0, "weekday");
  xe("E", 0, 0, "isoWeekday");
  be("d", st);
  be("e", st);
  be("E", st);
  be("dd", function(t, e) {
    return e.weekdaysMinRegex(t);
  });
  be("ddd", function(t, e) {
    return e.weekdaysShortRegex(t);
  });
  be("dddd", function(t, e) {
    return e.weekdaysRegex(t);
  });
  Ai([
    "dd",
    "ddd",
    "dddd"
  ], function(t, e, n, r) {
    var s = n._locale.weekdaysParse(t, r, n._strict);
    s != null ? e.d = s : Oe(n).invalidWeekday = t;
  });
  Ai([
    "d",
    "e",
    "E"
  ], function(t, e, n, r) {
    e[r] = Ye(t);
  });
  function sC(t, e) {
    return typeof t != "string" ? t : isNaN(t) ? (t = e.weekdaysParse(t), typeof t == "number" ? t : null) : parseInt(t, 10);
  }
  function iC(t, e) {
    return typeof t == "string" ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t;
  }
  function Gc(t, e) {
    return t.slice(e, 7).concat(t.slice(0, e));
  }
  var aC = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ep = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), oC = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), lC = Ci, cC = Ci, uC = Ci;
  function dC(t, e) {
    var n = on(this._weekdays) ? this._weekdays : this._weekdays[t && t !== true && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
    return t === true ? Gc(n, this._week.dow) : t ? n[t.day()] : n;
  }
  function fC(t) {
    return t === true ? Gc(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
  }
  function hC(t) {
    return t === true ? Gc(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
  }
  function mC(t, e, n) {
    var r, s, i, a = t.toLocaleLowerCase();
    if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) i = kn([
      2e3,
      1
    ]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
    return n ? e === "dddd" ? (s = ft.call(this._weekdaysParse, a), s !== -1 ? s : null) : e === "ddd" ? (s = ft.call(this._shortWeekdaysParse, a), s !== -1 ? s : null) : (s = ft.call(this._minWeekdaysParse, a), s !== -1 ? s : null) : e === "dddd" ? (s = ft.call(this._weekdaysParse, a), s !== -1 || (s = ft.call(this._shortWeekdaysParse, a), s !== -1) ? s : (s = ft.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : e === "ddd" ? (s = ft.call(this._shortWeekdaysParse, a), s !== -1 || (s = ft.call(this._weekdaysParse, a), s !== -1) ? s : (s = ft.call(this._minWeekdaysParse, a), s !== -1 ? s : null)) : (s = ft.call(this._minWeekdaysParse, a), s !== -1 || (s = ft.call(this._weekdaysParse, a), s !== -1) ? s : (s = ft.call(this._shortWeekdaysParse, a), s !== -1 ? s : null));
  }
  function pC(t, e, n) {
    var r, s, i;
    if (this._weekdaysParseExact) return mC.call(this, t, e, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (s = kn([
        2e3,
        1
      ]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(s, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && e === "dddd" && this._fullWeekdaysParse[r].test(t)) return r;
      if (n && e === "ddd" && this._shortWeekdaysParse[r].test(t)) return r;
      if (n && e === "dd" && this._minWeekdaysParse[r].test(t)) return r;
      if (!n && this._weekdaysParse[r].test(t)) return r;
    }
  }
  function gC(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    var e = mi(this, "Day");
    return t != null ? (t = sC(t, this.localeData()), this.add(t - e, "d")) : e;
  }
  function yC(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return t == null ? e : this.add(t - e, "d");
  }
  function vC(t) {
    if (!this.isValid()) return t != null ? this : NaN;
    if (t != null) {
      var e = iC(t, this.localeData());
      return this.day(this.day() % 7 ? e : e - 7);
    } else return this.day() || 7;
  }
  function bC(t) {
    return this._weekdaysParseExact ? (Be(this, "_weekdaysRegex") || qc.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (Be(this, "_weekdaysRegex") || (this._weekdaysRegex = lC), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function wC(t) {
    return this._weekdaysParseExact ? (Be(this, "_weekdaysRegex") || qc.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (Be(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = cC), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function SC(t) {
    return this._weekdaysParseExact ? (Be(this, "_weekdaysRegex") || qc.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (Be(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = uC), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function qc() {
    function t(f, m) {
      return m.length - f.length;
    }
    var e = [], n = [], r = [], s = [], i, a, l, c, d;
    for (i = 0; i < 7; i++) a = kn([
      2e3,
      1
    ]).day(i), l = Bn(this.weekdaysMin(a, "")), c = Bn(this.weekdaysShort(a, "")), d = Bn(this.weekdays(a, "")), e.push(l), n.push(c), r.push(d), s.push(l), s.push(c), s.push(d);
    e.sort(t), n.sort(t), r.sort(t), s.sort(t), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i");
  }
  function Zc() {
    return this.hours() % 12 || 12;
  }
  function _C() {
    return this.hours() || 24;
  }
  xe("H", [
    "HH",
    2
  ], 0, "hour");
  xe("h", [
    "hh",
    2
  ], 0, Zc);
  xe("k", [
    "kk",
    2
  ], 0, _C);
  xe("hmm", 0, 0, function() {
    return "" + Zc.apply(this) + _n(this.minutes(), 2);
  });
  xe("hmmss", 0, 0, function() {
    return "" + Zc.apply(this) + _n(this.minutes(), 2) + _n(this.seconds(), 2);
  });
  xe("Hmm", 0, 0, function() {
    return "" + this.hours() + _n(this.minutes(), 2);
  });
  xe("Hmmss", 0, 0, function() {
    return "" + this.hours() + _n(this.minutes(), 2) + _n(this.seconds(), 2);
  });
  function Cp(t, e) {
    xe(t, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), e);
    });
  }
  Cp("a", true);
  Cp("A", false);
  function Ap(t, e) {
    return e._meridiemParse;
  }
  be("a", Ap);
  be("A", Ap);
  be("H", st, zc);
  be("h", st, Rs);
  be("k", st, Rs);
  be("HH", st, Wt);
  be("hh", st, Wt);
  be("kk", st, Wt);
  be("hmm", vp);
  be("hmmss", bp);
  be("Hmm", vp);
  be("Hmmss", bp);
  Ze([
    "H",
    "HH"
  ], yt);
  Ze([
    "k",
    "kk"
  ], function(t, e, n) {
    var r = Ye(t);
    e[yt] = r === 24 ? 0 : r;
  });
  Ze([
    "a",
    "A"
  ], function(t, e, n) {
    n._isPm = n._locale.isPM(t), n._meridiem = t;
  });
  Ze([
    "h",
    "hh"
  ], function(t, e, n) {
    e[yt] = Ye(t), Oe(n).bigHour = true;
  });
  Ze("hmm", function(t, e, n) {
    var r = t.length - 2;
    e[yt] = Ye(t.substr(0, r)), e[rn] = Ye(t.substr(r)), Oe(n).bigHour = true;
  });
  Ze("hmmss", function(t, e, n) {
    var r = t.length - 4, s = t.length - 2;
    e[yt] = Ye(t.substr(0, r)), e[rn] = Ye(t.substr(r, 2)), e[Vn] = Ye(t.substr(s)), Oe(n).bigHour = true;
  });
  Ze("Hmm", function(t, e, n) {
    var r = t.length - 2;
    e[yt] = Ye(t.substr(0, r)), e[rn] = Ye(t.substr(r));
  });
  Ze("Hmmss", function(t, e, n) {
    var r = t.length - 4, s = t.length - 2;
    e[yt] = Ye(t.substr(0, r)), e[rn] = Ye(t.substr(r, 2)), e[Vn] = Ye(t.substr(s));
  });
  function DC(t) {
    return (t + "").toLowerCase().charAt(0) === "p";
  }
  var kC = /[ap]\.?m?\.?/i, xC = Os("Hours", true);
  function TC(t, e, n) {
    return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }
  var Rp = {
    calendar: mE,
    longDateFormat: vE,
    invalidDate: wE,
    ordinal: _E,
    dayOfMonthOrdinalParse: DE,
    relativeTime: xE,
    months: VE,
    monthsShort: _p,
    week: KE,
    weekdays: aC,
    weekdaysMin: oC,
    weekdaysShort: Ep,
    meridiemParse: kC
  }, at = {}, Bs = {}, yi;
  function MC(t, e) {
    var n, r = Math.min(t.length, e.length);
    for (n = 0; n < r; n += 1) if (t[n] !== e[n]) return n;
    return r;
  }
  function If(t) {
    return t && t.toLowerCase().replace("_", "-");
  }
  function EC(t) {
    for (var e = 0, n, r, s, i; e < t.length; ) {
      for (i = If(t[e]).split("-"), n = i.length, r = If(t[e + 1]), r = r ? r.split("-") : null; n > 0; ) {
        if (s = vo(i.slice(0, n).join("-")), s) return s;
        if (r && r.length >= n && MC(i, r) >= n - 1) break;
        n--;
      }
      e++;
    }
    return yi;
  }
  function CC(t) {
    return !!(t && t.match("^[^/\\\\]*$"));
  }
  function vo(t) {
    var e = null, n;
    if (at[t] === void 0 && typeof module < "u" && module && module.exports && CC(t)) try {
      e = yi._abbr, n = require, n("./locale/" + t), fr(e);
    } catch {
      at[t] = null;
    }
    return at[t];
  }
  function fr(t, e) {
    var n;
    return t && (Ft(e) ? n = Xn(t) : n = Qc(t, e), n ? yi = n : typeof console < "u" && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), yi._abbr;
  }
  function Qc(t, e) {
    if (e !== null) {
      var n, r = Rp;
      if (e.abbr = t, at[t] != null) mp("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = at[t]._config;
      else if (e.parentLocale != null) if (at[e.parentLocale] != null) r = at[e.parentLocale]._config;
      else if (n = vo(e.parentLocale), n != null) r = n._config;
      else return Bs[e.parentLocale] || (Bs[e.parentLocale] = []), Bs[e.parentLocale].push({
        name: t,
        config: e
      }), null;
      return at[t] = new jc($l(r, e)), Bs[t] && Bs[t].forEach(function(s) {
        Qc(s.name, s.config);
      }), fr(t), at[t];
    } else return delete at[t], null;
  }
  function AC(t, e) {
    if (e != null) {
      var n, r, s = Rp;
      at[t] != null && at[t].parentLocale != null ? at[t].set($l(at[t]._config, e)) : (r = vo(t), r != null && (s = r._config), e = $l(s, e), r == null && (e.abbr = t), n = new jc(e), n.parentLocale = at[t], at[t] = n), fr(t);
    } else at[t] != null && (at[t].parentLocale != null ? (at[t] = at[t].parentLocale, t === fr() && fr(t)) : at[t] != null && delete at[t]);
    return at[t];
  }
  function Xn(t) {
    var e;
    if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return yi;
    if (!on(t)) {
      if (e = vo(t), e) return e;
      t = [
        t
      ];
    }
    return EC(t);
  }
  function RC() {
    return Gl(at);
  }
  function Xc(t) {
    var e, n = t._a;
    return n && Oe(t).overflow === -2 && (e = n[jn] < 0 || n[jn] > 11 ? jn : n[wn] < 1 || n[wn] > $c(n[Rt], n[jn]) ? wn : n[yt] < 0 || n[yt] > 24 || n[yt] === 24 && (n[rn] !== 0 || n[Vn] !== 0 || n[Or] !== 0) ? yt : n[rn] < 0 || n[rn] > 59 ? rn : n[Vn] < 0 || n[Vn] > 59 ? Vn : n[Or] < 0 || n[Or] > 999 ? Or : -1, Oe(t)._overflowDayOfYear && (e < Rt || e > wn) && (e = wn), Oe(t)._overflowWeeks && e === -1 && (e = NE), Oe(t)._overflowWeekday && e === -1 && (e = LE), Oe(t).overflow = e), t;
  }
  var OC = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, IC = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, PC = /Z|[+-]\d\d(?::?\d\d)?/, aa = [
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
  ], bl = [
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
  ], NC = /^\/?Date\((-?\d+)/i, LC = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, YC = {
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
  function Op(t) {
    var e, n, r = t._i, s = OC.exec(r) || IC.exec(r), i, a, l, c, d = aa.length, f = bl.length;
    if (s) {
      for (Oe(t).iso = true, e = 0, n = d; e < n; e++) if (aa[e][1].exec(s[1])) {
        a = aa[e][0], i = aa[e][2] !== false;
        break;
      }
      if (a == null) {
        t._isValid = false;
        return;
      }
      if (s[3]) {
        for (e = 0, n = f; e < n; e++) if (bl[e][1].exec(s[3])) {
          l = (s[2] || " ") + bl[e][0];
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
      if (s[4]) if (PC.exec(s[4])) c = "Z";
      else {
        t._isValid = false;
        return;
      }
      t._f = a + (l || "") + (c || ""), Kc(t);
    } else t._isValid = false;
  }
  function FC(t, e, n, r, s, i) {
    var a = [
      HC(t),
      _p.indexOf(e),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10)
    ];
    return i && a.push(parseInt(i, 10)), a;
  }
  function HC(t) {
    var e = parseInt(t, 10);
    return e <= 49 ? 2e3 + e : e <= 999 ? 1900 + e : e;
  }
  function jC(t) {
    return t.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function VC(t, e, n) {
    if (t) {
      var r = Ep.indexOf(t), s = new Date(e[0], e[1], e[2]).getDay();
      if (r !== s) return Oe(n).weekdayMismatch = true, n._isValid = false, false;
    }
    return true;
  }
  function WC(t, e, n) {
    if (t) return YC[t];
    if (e) return 0;
    var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
    return i * 60 + s;
  }
  function Ip(t) {
    var e = LC.exec(jC(t._i)), n;
    if (e) {
      if (n = FC(e[4], e[3], e[2], e[5], e[6], e[7]), !VC(e[1], n, t)) return;
      t._a = n, t._tzm = WC(e[8], e[9], e[10]), t._d = pi.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), Oe(t).rfc2822 = true;
    } else t._isValid = false;
  }
  function UC(t) {
    var e = NC.exec(t._i);
    if (e !== null) {
      t._d = /* @__PURE__ */ new Date(+e[1]);
      return;
    }
    if (Op(t), t._isValid === false) delete t._isValid;
    else return;
    if (Ip(t), t._isValid === false) delete t._isValid;
    else return;
    t._strict ? t._isValid = false : fe.createFromInputFallback(t);
  }
  fe.createFromInputFallback = Gt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
    t._d = /* @__PURE__ */ new Date(t._i + (t._useUTC ? " UTC" : ""));
  });
  function is(t, e, n) {
    return t ?? e ?? n;
  }
  function BC(t) {
    var e = new Date(fe.now());
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
  function Jc(t) {
    var e, n, r = [], s, i, a;
    if (!t._d) {
      for (s = BC(t), t._w && t._a[wn] == null && t._a[jn] == null && zC(t), t._dayOfYear != null && (a = is(t._a[Rt], s[Rt]), (t._dayOfYear > si(a) || t._dayOfYear === 0) && (Oe(t)._overflowDayOfYear = true), n = pi(a, 0, t._dayOfYear), t._a[jn] = n.getUTCMonth(), t._a[wn] = n.getUTCDate()), e = 0; e < 3 && t._a[e] == null; ++e) t._a[e] = r[e] = s[e];
      for (; e < 7; e++) t._a[e] = r[e] = t._a[e] == null ? e === 2 ? 1 : 0 : t._a[e];
      t._a[yt] === 24 && t._a[rn] === 0 && t._a[Vn] === 0 && t._a[Or] === 0 && (t._nextDay = true, t._a[yt] = 0), t._d = (t._useUTC ? pi : XE).apply(null, r), i = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), t._tzm != null && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[yt] = 24), t._w && typeof t._w.d < "u" && t._w.d !== i && (Oe(t).weekdayMismatch = true);
    }
  }
  function zC(t) {
    var e, n, r, s, i, a, l, c, d;
    e = t._w, e.GG != null || e.W != null || e.E != null ? (i = 1, a = 4, n = is(e.GG, t._a[Rt], gi(rt(), 1, 4).year), r = is(e.W, 1), s = is(e.E, 1), (s < 1 || s > 7) && (c = true)) : (i = t._locale._week.dow, a = t._locale._week.doy, d = gi(rt(), i, a), n = is(e.gg, t._a[Rt], d.year), r = is(e.w, d.week), e.d != null ? (s = e.d, (s < 0 || s > 6) && (c = true)) : e.e != null ? (s = e.e + i, (e.e < 0 || e.e > 6) && (c = true)) : s = i), r < 1 || r > zn(n, i, a) ? Oe(t)._overflowWeeks = true : c != null ? Oe(t)._overflowWeekday = true : (l = Mp(n, r, s, i, a), t._a[Rt] = l.year, t._dayOfYear = l.dayOfYear);
  }
  fe.ISO_8601 = function() {
  };
  fe.RFC_2822 = function() {
  };
  function Kc(t) {
    if (t._f === fe.ISO_8601) {
      Op(t);
      return;
    }
    if (t._f === fe.RFC_2822) {
      Ip(t);
      return;
    }
    t._a = [], Oe(t).empty = true;
    var e = "" + t._i, n, r, s, i, a, l = e.length, c = 0, d, f;
    for (s = pp(t._f, t._locale).match(Vc) || [], f = s.length, n = 0; n < f; n++) i = s[n], r = (e.match(OE(i, t)) || [])[0], r && (a = e.substr(0, e.indexOf(r)), a.length > 0 && Oe(t).unusedInput.push(a), e = e.slice(e.indexOf(r) + r.length), c += r.length), ps[i] ? (r ? Oe(t).empty = false : Oe(t).unusedTokens.push(i), PE(i, r, t)) : t._strict && !r && Oe(t).unusedTokens.push(i);
    Oe(t).charsLeftOver = l - c, e.length > 0 && Oe(t).unusedInput.push(e), t._a[yt] <= 12 && Oe(t).bigHour === true && t._a[yt] > 0 && (Oe(t).bigHour = void 0), Oe(t).parsedDateParts = t._a.slice(0), Oe(t).meridiem = t._meridiem, t._a[yt] = $C(t._locale, t._a[yt], t._meridiem), d = Oe(t).era, d !== null && (t._a[Rt] = t._locale.erasConvertYear(d, t._a[Rt])), Jc(t), Xc(t);
  }
  function $C(t, e, n) {
    var r;
    return n == null ? e : t.meridiemHour != null ? t.meridiemHour(e, n) : (t.isPM != null && (r = t.isPM(n), r && e < 12 && (e += 12), !r && e === 12 && (e = 0)), e);
  }
  function GC(t) {
    var e, n, r, s, i, a, l = false, c = t._f.length;
    if (c === 0) {
      Oe(t).invalidFormat = true, t._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (s = 0; s < c; s++) i = 0, a = false, e = Hc({}, t), t._useUTC != null && (e._useUTC = t._useUTC), e._f = t._f[s], Kc(e), Fc(e) && (a = true), i += Oe(e).charsLeftOver, i += Oe(e).unusedTokens.length * 10, Oe(e).score = i, l ? i < r && (r = i, n = e) : (r == null || i < r || a) && (r = i, n = e, a && (l = true));
    lr(t, n || e);
  }
  function qC(t) {
    if (!t._d) {
      var e = Wc(t._i), n = e.day === void 0 ? e.date : e.day;
      t._a = fp([
        e.year,
        e.month,
        n,
        e.hour,
        e.minute,
        e.second,
        e.millisecond
      ], function(r) {
        return r && parseInt(r, 10);
      }), Jc(t);
    }
  }
  function ZC(t) {
    var e = new Ei(Xc(Pp(t)));
    return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e;
  }
  function Pp(t) {
    var e = t._i, n = t._f;
    return t._locale = t._locale || Xn(t._l), e === null || n === void 0 && e === "" ? uo({
      nullInput: true
    }) : (typeof e == "string" && (t._i = e = t._locale.preparse(e)), ln(e) ? new Ei(Xc(e)) : (Mi(e) ? t._d = e : on(n) ? GC(t) : n ? Kc(t) : QC(t), Fc(t) || (t._d = null), t));
  }
  function QC(t) {
    var e = t._i;
    Ft(e) ? t._d = new Date(fe.now()) : Mi(e) ? t._d = new Date(e.valueOf()) : typeof e == "string" ? UC(t) : on(e) ? (t._a = fp(e.slice(0), function(n) {
      return parseInt(n, 10);
    }), Jc(t)) : Lr(e) ? qC(t) : qn(e) ? t._d = new Date(e) : fe.createFromInputFallback(t);
  }
  function Np(t, e, n, r, s) {
    var i = {};
    return (e === true || e === false) && (r = e, e = void 0), (n === true || n === false) && (r = n, n = void 0), (Lr(t) && Yc(t) || on(t) && t.length === 0) && (t = void 0), i._isAMomentObject = true, i._useUTC = i._isUTC = s, i._l = n, i._i = t, i._f = e, i._strict = r, ZC(i);
  }
  function rt(t, e, n, r) {
    return Np(t, e, n, r, false);
  }
  var XC = Gt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var t = rt.apply(null, arguments);
    return this.isValid() && t.isValid() ? t < this ? this : t : uo();
  }), JC = Gt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
    var t = rt.apply(null, arguments);
    return this.isValid() && t.isValid() ? t > this ? this : t : uo();
  });
  function Lp(t, e) {
    var n, r;
    if (e.length === 1 && on(e[0]) && (e = e[0]), !e.length) return rt();
    for (n = e[0], r = 1; r < e.length; ++r) (!e[r].isValid() || e[r][t](n)) && (n = e[r]);
    return n;
  }
  function KC() {
    var t = [].slice.call(arguments, 0);
    return Lp("isBefore", t);
  }
  function eA() {
    var t = [].slice.call(arguments, 0);
    return Lp("isAfter", t);
  }
  var tA = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }, zs = [
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
  function nA(t) {
    var e, n = false, r, s = zs.length;
    for (e in t) if (Be(t, e) && !(ft.call(zs, e) !== -1 && (t[e] == null || !isNaN(t[e])))) return false;
    for (r = 0; r < s; ++r) if (t[zs[r]]) {
      if (n) return false;
      parseFloat(t[zs[r]]) !== Ye(t[zs[r]]) && (n = true);
    }
    return true;
  }
  function rA() {
    return this._isValid;
  }
  function sA() {
    return dn(NaN);
  }
  function bo(t) {
    var e = Wc(t), n = e.year || 0, r = e.quarter || 0, s = e.month || 0, i = e.week || e.isoWeek || 0, a = e.day || 0, l = e.hour || 0, c = e.minute || 0, d = e.second || 0, f = e.millisecond || 0;
    this._isValid = nA(e), this._milliseconds = +f + d * 1e3 + c * 6e4 + l * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = Xn(), this._bubble();
  }
  function ga(t) {
    return t instanceof bo;
  }
  function Zl(t) {
    return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t);
  }
  function iA(t, e, n) {
    var r = Math.min(t.length, e.length), s = Math.abs(t.length - e.length), i = 0, a;
    for (a = 0; a < r; a++) Ye(t[a]) !== Ye(e[a]) && i++;
    return i + s;
  }
  function Yp(t, e) {
    xe(t, 0, 0, function() {
      var n = this.utcOffset(), r = "+";
      return n < 0 && (n = -n, r = "-"), r + _n(~~(n / 60), 2) + e + _n(~~n % 60, 2);
    });
  }
  Yp("Z", ":");
  Yp("ZZ", "");
  be("Z", go);
  be("ZZ", go);
  Ze([
    "Z",
    "ZZ"
  ], function(t, e, n) {
    n._useUTC = true, n._tzm = eu(go, t);
  });
  var aA = /([\+\-]|\d\d)/gi;
  function eu(t, e) {
    var n = (e || "").match(t), r, s, i;
    return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(aA) || [
      "-",
      0,
      0
    ], i = +(s[1] * 60) + Ye(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
  }
  function tu(t, e) {
    var n, r;
    return e._isUTC ? (n = e.clone(), r = (ln(t) || Mi(t) ? t.valueOf() : rt(t).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), fe.updateOffset(n, false), n) : rt(t).local();
  }
  function Ql(t) {
    return -Math.round(t._d.getTimezoneOffset());
  }
  fe.updateOffset = function() {
  };
  function oA(t, e, n) {
    var r = this._offset || 0, s;
    if (!this.isValid()) return t != null ? this : NaN;
    if (t != null) {
      if (typeof t == "string") {
        if (t = eu(go, t), t === null) return this;
      } else Math.abs(t) < 16 && !n && (t = t * 60);
      return !this._isUTC && e && (s = Ql(this)), this._offset = t, this._isUTC = true, s != null && this.add(s, "m"), r !== t && (!e || this._changeInProgress ? jp(this, dn(t - r, "m"), 1, false) : this._changeInProgress || (this._changeInProgress = true, fe.updateOffset(this, true), this._changeInProgress = null)), this;
    } else return this._isUTC ? r : Ql(this);
  }
  function lA(t, e) {
    return t != null ? (typeof t != "string" && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset();
  }
  function cA(t) {
    return this.utcOffset(0, t);
  }
  function uA(t) {
    return this._isUTC && (this.utcOffset(0, t), this._isUTC = false, t && this.subtract(Ql(this), "m")), this;
  }
  function dA() {
    if (this._tzm != null) this.utcOffset(this._tzm, false, true);
    else if (typeof this._i == "string") {
      var t = eu(AE, this._i);
      t != null ? this.utcOffset(t) : this.utcOffset(0, true);
    }
    return this;
  }
  function fA(t) {
    return this.isValid() ? (t = t ? rt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : false;
  }
  function hA() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function mA() {
    if (!Ft(this._isDSTShifted)) return this._isDSTShifted;
    var t = {}, e;
    return Hc(t, this), t = Pp(t), t._a ? (e = t._isUTC ? kn(t._a) : rt(t._a), this._isDSTShifted = this.isValid() && iA(t._a, e.toArray()) > 0) : this._isDSTShifted = false, this._isDSTShifted;
  }
  function pA() {
    return this.isValid() ? !this._isUTC : false;
  }
  function gA() {
    return this.isValid() ? this._isUTC : false;
  }
  function Fp() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var yA = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, vA = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function dn(t, e) {
    var n = t, r = null, s, i, a;
    return ga(t) ? n = {
      ms: t._milliseconds,
      d: t._days,
      M: t._months
    } : qn(t) || !isNaN(+t) ? (n = {}, e ? n[e] = +t : n.milliseconds = +t) : (r = yA.exec(t)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: 0,
      d: Ye(r[wn]) * s,
      h: Ye(r[yt]) * s,
      m: Ye(r[rn]) * s,
      s: Ye(r[Vn]) * s,
      ms: Ye(Zl(r[Or] * 1e3)) * s
    }) : (r = vA.exec(t)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: Tr(r[2], s),
      M: Tr(r[3], s),
      w: Tr(r[4], s),
      d: Tr(r[5], s),
      h: Tr(r[6], s),
      m: Tr(r[7], s),
      s: Tr(r[8], s)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (a = bA(rt(n.from), rt(n.to)), n = {}, n.ms = a.milliseconds, n.M = a.months), i = new bo(n), ga(t) && Be(t, "_locale") && (i._locale = t._locale), ga(t) && Be(t, "_isValid") && (i._isValid = t._isValid), i;
  }
  dn.fn = bo.prototype;
  dn.invalid = sA;
  function Tr(t, e) {
    var n = t && parseFloat(t.replace(",", "."));
    return (isNaN(n) ? 0 : n) * e;
  }
  function Pf(t, e) {
    var n = {};
    return n.months = e.month() - t.month() + (e.year() - t.year()) * 12, t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n;
  }
  function bA(t, e) {
    var n;
    return t.isValid() && e.isValid() ? (e = tu(e, t), t.isBefore(e) ? n = Pf(t, e) : (n = Pf(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
      milliseconds: 0,
      months: 0
    };
  }
  function Hp(t, e) {
    return function(n, r) {
      var s, i;
      return r !== null && !isNaN(+r) && (mp(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = n, n = r, r = i), s = dn(n, r), jp(this, s, t), this;
    };
  }
  function jp(t, e, n, r) {
    var s = e._milliseconds, i = Zl(e._days), a = Zl(e._months);
    t.isValid() && (r = r ?? true, a && kp(t, mi(t, "Month") + a * n), i && Sp(t, "Date", mi(t, "Date") + i * n), s && t._d.setTime(t._d.valueOf() + s * n), r && fe.updateOffset(t, i || a));
  }
  var wA = Hp(1, "add"), SA = Hp(-1, "subtract");
  function Vp(t) {
    return typeof t == "string" || t instanceof String;
  }
  function _A(t) {
    return ln(t) || Mi(t) || Vp(t) || qn(t) || kA(t) || DA(t) || t === null || t === void 0;
  }
  function DA(t) {
    var e = Lr(t) && !Yc(t), n = false, r = [
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
  function kA(t) {
    var e = on(t), n = false;
    return e && (n = t.filter(function(r) {
      return !qn(r) && Vp(t);
    }).length === 0), e && n;
  }
  function xA(t) {
    var e = Lr(t) && !Yc(t), n = false, r = [
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
  function TA(t, e) {
    var n = t.diff(e, "days", true);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }
  function MA(t, e) {
    arguments.length === 1 && (arguments[0] ? _A(arguments[0]) ? (t = arguments[0], e = void 0) : xA(arguments[0]) && (e = arguments[0], t = void 0) : (t = void 0, e = void 0));
    var n = t || rt(), r = tu(n, this).startOf("day"), s = fe.calendarFormat(this, r) || "sameElse", i = e && (xn(e[s]) ? e[s].call(this, n) : e[s]);
    return this.format(i || this.localeData().calendar(s, this, rt(n)));
  }
  function EA() {
    return new Ei(this);
  }
  function CA(t, e) {
    var n = ln(t) ? t : rt(t);
    return this.isValid() && n.isValid() ? (e = qt(e) || "millisecond", e === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : false;
  }
  function AA(t, e) {
    var n = ln(t) ? t : rt(t);
    return this.isValid() && n.isValid() ? (e = qt(e) || "millisecond", e === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : false;
  }
  function RA(t, e, n, r) {
    var s = ln(t) ? t : rt(t), i = ln(e) ? e : rt(e);
    return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : false;
  }
  function OA(t, e) {
    var n = ln(t) ? t : rt(t), r;
    return this.isValid() && n.isValid() ? (e = qt(e) || "millisecond", e === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(e).valueOf() <= r && r <= this.clone().endOf(e).valueOf())) : false;
  }
  function IA(t, e) {
    return this.isSame(t, e) || this.isAfter(t, e);
  }
  function PA(t, e) {
    return this.isSame(t, e) || this.isBefore(t, e);
  }
  function NA(t, e, n) {
    var r, s, i;
    if (!this.isValid()) return NaN;
    if (r = tu(t, this), !r.isValid()) return NaN;
    switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, e = qt(e), e) {
      case "year":
        i = ya(this, r) / 12;
        break;
      case "month":
        i = ya(this, r);
        break;
      case "quarter":
        i = ya(this, r) / 3;
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
    return n ? i : zt(i);
  }
  function ya(t, e) {
    if (t.date() < e.date()) return -ya(e, t);
    var n = (e.year() - t.year()) * 12 + (e.month() - t.month()), r = t.clone().add(n, "months"), s, i;
    return e - r < 0 ? (s = t.clone().add(n - 1, "months"), i = (e - r) / (r - s)) : (s = t.clone().add(n + 1, "months"), i = (e - r) / (s - r)), -(n + i) || 0;
  }
  fe.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  fe.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function LA() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function YA(t) {
    if (!this.isValid()) return null;
    var e = t !== true, n = e ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? pa(n, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : xn(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", pa(n, "Z")) : pa(n, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }
  function FA() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var t = "moment", e = "", n, r, s, i;
    return this.isLocal() || (t = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", e = "Z"), n = "[" + t + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = e + '[")]', this.format(n + r + s + i);
  }
  function HA(t) {
    t || (t = this.isUtc() ? fe.defaultFormatUtc : fe.defaultFormat);
    var e = pa(this, t);
    return this.localeData().postformat(e);
  }
  function jA(t, e) {
    return this.isValid() && (ln(t) && t.isValid() || rt(t).isValid()) ? dn({
      to: this,
      from: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
  }
  function VA(t) {
    return this.from(rt(), t);
  }
  function WA(t, e) {
    return this.isValid() && (ln(t) && t.isValid() || rt(t).isValid()) ? dn({
      from: this,
      to: t
    }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate();
  }
  function UA(t) {
    return this.to(rt(), t);
  }
  function Wp(t) {
    var e;
    return t === void 0 ? this._locale._abbr : (e = Xn(t), e != null && (this._locale = e), this);
  }
  var Up = Gt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
    return t === void 0 ? this.localeData() : this.locale(t);
  });
  function Bp() {
    return this._locale;
  }
  var Ua = 1e3, gs = 60 * Ua, Ba = 60 * gs, zp = (365 * 400 + 97) * 24 * Ba;
  function ys(t, e) {
    return (t % e + e) % e;
  }
  function $p(t, e, n) {
    return t < 100 && t >= 0 ? new Date(t + 400, e, n) - zp : new Date(t, e, n).valueOf();
  }
  function Gp(t, e, n) {
    return t < 100 && t >= 0 ? Date.UTC(t + 400, e, n) - zp : Date.UTC(t, e, n);
  }
  function BA(t) {
    var e, n;
    if (t = qt(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
    switch (n = this._isUTC ? Gp : $p, t) {
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
        e = this._d.valueOf(), e -= ys(e + (this._isUTC ? 0 : this.utcOffset() * gs), Ba);
        break;
      case "minute":
        e = this._d.valueOf(), e -= ys(e, gs);
        break;
      case "second":
        e = this._d.valueOf(), e -= ys(e, Ua);
        break;
    }
    return this._d.setTime(e), fe.updateOffset(this, true), this;
  }
  function zA(t) {
    var e, n;
    if (t = qt(t), t === void 0 || t === "millisecond" || !this.isValid()) return this;
    switch (n = this._isUTC ? Gp : $p, t) {
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
        e = this._d.valueOf(), e += Ba - ys(e + (this._isUTC ? 0 : this.utcOffset() * gs), Ba) - 1;
        break;
      case "minute":
        e = this._d.valueOf(), e += gs - ys(e, gs) - 1;
        break;
      case "second":
        e = this._d.valueOf(), e += Ua - ys(e, Ua) - 1;
        break;
    }
    return this._d.setTime(e), fe.updateOffset(this, true), this;
  }
  function $A() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function GA() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function qA() {
    return new Date(this.valueOf());
  }
  function ZA() {
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
  function QA() {
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
  function XA() {
    return this.isValid() ? this.toISOString() : null;
  }
  function JA() {
    return Fc(this);
  }
  function KA() {
    return lr({}, Oe(this));
  }
  function eR() {
    return Oe(this).overflow;
  }
  function tR() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  xe("N", 0, 0, "eraAbbr");
  xe("NN", 0, 0, "eraAbbr");
  xe("NNN", 0, 0, "eraAbbr");
  xe("NNNN", 0, 0, "eraName");
  xe("NNNNN", 0, 0, "eraNarrow");
  xe("y", [
    "y",
    1
  ], "yo", "eraYear");
  xe("y", [
    "yy",
    2
  ], 0, "eraYear");
  xe("y", [
    "yyy",
    3
  ], 0, "eraYear");
  xe("y", [
    "yyyy",
    4
  ], 0, "eraYear");
  be("N", nu);
  be("NN", nu);
  be("NNN", nu);
  be("NNNN", fR);
  be("NNNNN", hR);
  Ze([
    "N",
    "NN",
    "NNN",
    "NNNN",
    "NNNNN"
  ], function(t, e, n, r) {
    var s = n._locale.erasParse(t, r, n._strict);
    s ? Oe(n).era = s : Oe(n).invalidEra = t;
  });
  be("y", As);
  be("yy", As);
  be("yyy", As);
  be("yyyy", As);
  be("yo", mR);
  Ze([
    "y",
    "yy",
    "yyy",
    "yyyy"
  ], Rt);
  Ze([
    "yo"
  ], function(t, e, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex && (s = t.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? e[Rt] = n._locale.eraYearOrdinalParse(t, s) : e[Rt] = parseInt(t, 10);
  });
  function nR(t, e) {
    var n, r, s, i = this._eras || Xn("en")._eras;
    for (n = 0, r = i.length; n < r; ++n) switch (typeof i[n].since === "string" && (s = fe(i[n].since).startOf("day"), i[n].since = s.valueOf()), typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        s = fe(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
        break;
    }
    return i;
  }
  function rR(t, e, n) {
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
  function sR(t, e) {
    var n = t.since <= t.until ? 1 : -1;
    return e === void 0 ? fe(t.since).year() : fe(t.since).year() + (e - t.offset) * n;
  }
  function iR() {
    var t, e, n, r = this.localeData().eras();
    for (t = 0, e = r.length; t < e; ++t) if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return r[t].name;
    return "";
  }
  function aR() {
    var t, e, n, r = this.localeData().eras();
    for (t = 0, e = r.length; t < e; ++t) if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return r[t].narrow;
    return "";
  }
  function oR() {
    var t, e, n, r = this.localeData().eras();
    for (t = 0, e = r.length; t < e; ++t) if (n = this.clone().startOf("day").valueOf(), r[t].since <= n && n <= r[t].until || r[t].until <= n && n <= r[t].since) return r[t].abbr;
    return "";
  }
  function lR() {
    var t, e, n, r, s = this.localeData().eras();
    for (t = 0, e = s.length; t < e; ++t) if (n = s[t].since <= s[t].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[t].since <= r && r <= s[t].until || s[t].until <= r && r <= s[t].since) return (this.year() - fe(s[t].since).year()) * n + s[t].offset;
    return this.year();
  }
  function cR(t) {
    return Be(this, "_erasNameRegex") || ru.call(this), t ? this._erasNameRegex : this._erasRegex;
  }
  function uR(t) {
    return Be(this, "_erasAbbrRegex") || ru.call(this), t ? this._erasAbbrRegex : this._erasRegex;
  }
  function dR(t) {
    return Be(this, "_erasNarrowRegex") || ru.call(this), t ? this._erasNarrowRegex : this._erasRegex;
  }
  function nu(t, e) {
    return e.erasAbbrRegex(t);
  }
  function fR(t, e) {
    return e.erasNameRegex(t);
  }
  function hR(t, e) {
    return e.erasNarrowRegex(t);
  }
  function mR(t, e) {
    return e._eraYearOrdinalRegex || As;
  }
  function ru() {
    var t = [], e = [], n = [], r = [], s, i, a, l, c, d = this.eras();
    for (s = 0, i = d.length; s < i; ++s) a = Bn(d[s].name), l = Bn(d[s].abbr), c = Bn(d[s].narrow), e.push(a), t.push(l), n.push(c), r.push(a), r.push(l), r.push(c);
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i");
  }
  xe(0, [
    "gg",
    2
  ], 0, function() {
    return this.weekYear() % 100;
  });
  xe(0, [
    "GG",
    2
  ], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function wo(t, e) {
    xe(0, [
      t,
      t.length
    ], 0, e);
  }
  wo("gggg", "weekYear");
  wo("ggggg", "weekYear");
  wo("GGGG", "isoWeekYear");
  wo("GGGGG", "isoWeekYear");
  be("G", po);
  be("g", po);
  be("GG", st, Wt);
  be("gg", st, Wt);
  be("GGGG", Bc, Uc);
  be("gggg", Bc, Uc);
  be("GGGGG", mo, fo);
  be("ggggg", mo, fo);
  Ai([
    "gggg",
    "ggggg",
    "GGGG",
    "GGGGG"
  ], function(t, e, n, r) {
    e[r.substr(0, 2)] = Ye(t);
  });
  Ai([
    "gg",
    "GG"
  ], function(t, e, n, r) {
    e[r] = fe.parseTwoDigitYear(t);
  });
  function pR(t) {
    return qp.call(this, t, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function gR(t) {
    return qp.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function yR() {
    return zn(this.year(), 1, 4);
  }
  function vR() {
    return zn(this.isoWeekYear(), 1, 4);
  }
  function bR() {
    var t = this.localeData()._week;
    return zn(this.year(), t.dow, t.doy);
  }
  function wR() {
    var t = this.localeData()._week;
    return zn(this.weekYear(), t.dow, t.doy);
  }
  function qp(t, e, n, r, s) {
    var i;
    return t == null ? gi(this, r, s).year : (i = zn(t, r, s), e > i && (e = i), SR.call(this, t, e, n, r, s));
  }
  function SR(t, e, n, r, s) {
    var i = Mp(t, e, n, r, s), a = pi(i.year, 0, i.dayOfYear);
    return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
  }
  xe("Q", 0, "Qo", "quarter");
  be("Q", gp);
  Ze("Q", function(t, e) {
    e[jn] = (Ye(t) - 1) * 3;
  });
  function _R(t) {
    return t == null ? Math.ceil((this.month() + 1) / 3) : this.month((t - 1) * 3 + this.month() % 3);
  }
  xe("D", [
    "DD",
    2
  ], "Do", "date");
  be("D", st, Rs);
  be("DD", st, Wt);
  be("Do", function(t, e) {
    return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient;
  });
  Ze([
    "D",
    "DD"
  ], wn);
  Ze("Do", function(t, e) {
    e[wn] = Ye(t.match(st)[0]);
  });
  var Zp = Os("Date", true);
  xe("DDD", [
    "DDDD",
    3
  ], "DDDo", "dayOfYear");
  be("DDD", ho);
  be("DDDD", yp);
  Ze([
    "DDD",
    "DDDD"
  ], function(t, e, n) {
    n._dayOfYear = Ye(t);
  });
  function DR(t) {
    var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return t == null ? e : this.add(t - e, "d");
  }
  xe("m", [
    "mm",
    2
  ], 0, "minute");
  be("m", st, zc);
  be("mm", st, Wt);
  Ze([
    "m",
    "mm"
  ], rn);
  var kR = Os("Minutes", false);
  xe("s", [
    "ss",
    2
  ], 0, "second");
  be("s", st, zc);
  be("ss", st, Wt);
  Ze([
    "s",
    "ss"
  ], Vn);
  var xR = Os("Seconds", false);
  xe("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  xe(0, [
    "SS",
    2
  ], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  xe(0, [
    "SSS",
    3
  ], 0, "millisecond");
  xe(0, [
    "SSSS",
    4
  ], 0, function() {
    return this.millisecond() * 10;
  });
  xe(0, [
    "SSSSS",
    5
  ], 0, function() {
    return this.millisecond() * 100;
  });
  xe(0, [
    "SSSSSS",
    6
  ], 0, function() {
    return this.millisecond() * 1e3;
  });
  xe(0, [
    "SSSSSSS",
    7
  ], 0, function() {
    return this.millisecond() * 1e4;
  });
  xe(0, [
    "SSSSSSSS",
    8
  ], 0, function() {
    return this.millisecond() * 1e5;
  });
  xe(0, [
    "SSSSSSSSS",
    9
  ], 0, function() {
    return this.millisecond() * 1e6;
  });
  be("S", ho, gp);
  be("SS", ho, Wt);
  be("SSS", ho, yp);
  var cr, Qp;
  for (cr = "SSSS"; cr.length <= 9; cr += "S") be(cr, As);
  function TR(t, e) {
    e[Or] = Ye(("0." + t) * 1e3);
  }
  for (cr = "S"; cr.length <= 9; cr += "S") Ze(cr, TR);
  Qp = Os("Milliseconds", false);
  xe("z", 0, 0, "zoneAbbr");
  xe("zz", 0, 0, "zoneName");
  function MR() {
    return this._isUTC ? "UTC" : "";
  }
  function ER() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var oe = Ei.prototype;
  oe.add = wA;
  oe.calendar = MA;
  oe.clone = EA;
  oe.diff = NA;
  oe.endOf = zA;
  oe.format = HA;
  oe.from = jA;
  oe.fromNow = VA;
  oe.to = WA;
  oe.toNow = UA;
  oe.get = FE;
  oe.invalidAt = eR;
  oe.isAfter = CA;
  oe.isBefore = AA;
  oe.isBetween = RA;
  oe.isSame = OA;
  oe.isSameOrAfter = IA;
  oe.isSameOrBefore = PA;
  oe.isValid = JA;
  oe.lang = Up;
  oe.locale = Wp;
  oe.localeData = Bp;
  oe.max = JC;
  oe.min = XC;
  oe.parsingFlags = KA;
  oe.set = HE;
  oe.startOf = BA;
  oe.subtract = SA;
  oe.toArray = ZA;
  oe.toObject = QA;
  oe.toDate = qA;
  oe.toISOString = YA;
  oe.inspect = FA;
  typeof Symbol < "u" && Symbol.for != null && (oe[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  oe.toJSON = XA;
  oe.toString = LA;
  oe.unix = GA;
  oe.valueOf = $A;
  oe.creationData = tR;
  oe.eraName = iR;
  oe.eraNarrow = aR;
  oe.eraAbbr = oR;
  oe.eraYear = lR;
  oe.year = wp;
  oe.isLeapYear = YE;
  oe.weekYear = pR;
  oe.isoWeekYear = gR;
  oe.quarter = oe.quarters = _R;
  oe.month = xp;
  oe.daysInMonth = qE;
  oe.week = oe.weeks = nC;
  oe.isoWeek = oe.isoWeeks = rC;
  oe.weeksInYear = bR;
  oe.weeksInWeekYear = wR;
  oe.isoWeeksInYear = yR;
  oe.isoWeeksInISOWeekYear = vR;
  oe.date = Zp;
  oe.day = oe.days = gC;
  oe.weekday = yC;
  oe.isoWeekday = vC;
  oe.dayOfYear = DR;
  oe.hour = oe.hours = xC;
  oe.minute = oe.minutes = kR;
  oe.second = oe.seconds = xR;
  oe.millisecond = oe.milliseconds = Qp;
  oe.utcOffset = oA;
  oe.utc = cA;
  oe.local = uA;
  oe.parseZone = dA;
  oe.hasAlignedHourOffset = fA;
  oe.isDST = hA;
  oe.isLocal = pA;
  oe.isUtcOffset = gA;
  oe.isUtc = Fp;
  oe.isUTC = Fp;
  oe.zoneAbbr = MR;
  oe.zoneName = ER;
  oe.dates = Gt("dates accessor is deprecated. Use date instead.", Zp);
  oe.months = Gt("months accessor is deprecated. Use month instead", xp);
  oe.years = Gt("years accessor is deprecated. Use year instead", wp);
  oe.zone = Gt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", lA);
  oe.isDSTShifted = Gt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", mA);
  function CR(t) {
    return rt(t * 1e3);
  }
  function AR() {
    return rt.apply(null, arguments).parseZone();
  }
  function Xp(t) {
    return t;
  }
  var $e = jc.prototype;
  $e.calendar = pE;
  $e.longDateFormat = bE;
  $e.invalidDate = SE;
  $e.ordinal = kE;
  $e.preparse = Xp;
  $e.postformat = Xp;
  $e.relativeTime = TE;
  $e.pastFuture = ME;
  $e.set = hE;
  $e.eras = nR;
  $e.erasParse = rR;
  $e.erasConvertYear = sR;
  $e.erasAbbrRegex = uR;
  $e.erasNameRegex = cR;
  $e.erasNarrowRegex = dR;
  $e.months = BE;
  $e.monthsShort = zE;
  $e.monthsParse = GE;
  $e.monthsRegex = QE;
  $e.monthsShortRegex = ZE;
  $e.week = JE;
  $e.firstDayOfYear = tC;
  $e.firstDayOfWeek = eC;
  $e.weekdays = dC;
  $e.weekdaysMin = hC;
  $e.weekdaysShort = fC;
  $e.weekdaysParse = pC;
  $e.weekdaysRegex = bC;
  $e.weekdaysShortRegex = wC;
  $e.weekdaysMinRegex = SC;
  $e.isPM = DC;
  $e.meridiem = TC;
  function za(t, e, n, r) {
    var s = Xn(), i = kn().set(r, e);
    return s[n](i, t);
  }
  function Jp(t, e, n) {
    if (qn(t) && (e = t, t = void 0), t = t || "", e != null) return za(t, e, n, "month");
    var r, s = [];
    for (r = 0; r < 12; r++) s[r] = za(t, r, n, "month");
    return s;
  }
  function su(t, e, n, r) {
    typeof t == "boolean" ? (qn(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = false, qn(e) && (n = e, e = void 0), e = e || "");
    var s = Xn(), i = t ? s._week.dow : 0, a, l = [];
    if (n != null) return za(e, (n + i) % 7, r, "day");
    for (a = 0; a < 7; a++) l[a] = za(e, (a + i) % 7, r, "day");
    return l;
  }
  function RR(t, e) {
    return Jp(t, e, "months");
  }
  function OR(t, e) {
    return Jp(t, e, "monthsShort");
  }
  function IR(t, e, n) {
    return su(t, e, n, "weekdays");
  }
  function PR(t, e, n) {
    return su(t, e, n, "weekdaysShort");
  }
  function NR(t, e, n) {
    return su(t, e, n, "weekdaysMin");
  }
  fr("en", {
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
  fe.lang = Gt("moment.lang is deprecated. Use moment.locale instead.", fr);
  fe.langData = Gt("moment.langData is deprecated. Use moment.localeData instead.", Xn);
  var Yn = Math.abs;
  function LR() {
    var t = this._data;
    return this._milliseconds = Yn(this._milliseconds), this._days = Yn(this._days), this._months = Yn(this._months), t.milliseconds = Yn(t.milliseconds), t.seconds = Yn(t.seconds), t.minutes = Yn(t.minutes), t.hours = Yn(t.hours), t.months = Yn(t.months), t.years = Yn(t.years), this;
  }
  function Kp(t, e, n, r) {
    var s = dn(e, n);
    return t._milliseconds += r * s._milliseconds, t._days += r * s._days, t._months += r * s._months, t._bubble();
  }
  function YR(t, e) {
    return Kp(this, t, e, 1);
  }
  function FR(t, e) {
    return Kp(this, t, e, -1);
  }
  function Nf(t) {
    return t < 0 ? Math.floor(t) : Math.ceil(t);
  }
  function HR() {
    var t = this._milliseconds, e = this._days, n = this._months, r = this._data, s, i, a, l, c;
    return t >= 0 && e >= 0 && n >= 0 || t <= 0 && e <= 0 && n <= 0 || (t += Nf(Xl(n) + e) * 864e5, e = 0, n = 0), r.milliseconds = t % 1e3, s = zt(t / 1e3), r.seconds = s % 60, i = zt(s / 60), r.minutes = i % 60, a = zt(i / 60), r.hours = a % 24, e += zt(a / 24), c = zt(eg(e)), n += c, e -= Nf(Xl(c)), l = zt(n / 12), n %= 12, r.days = e, r.months = n, r.years = l, this;
  }
  function eg(t) {
    return t * 4800 / 146097;
  }
  function Xl(t) {
    return t * 146097 / 4800;
  }
  function jR(t) {
    if (!this.isValid()) return NaN;
    var e, n, r = this._milliseconds;
    if (t = qt(t), t === "month" || t === "quarter" || t === "year") switch (e = this._days + r / 864e5, n = this._months + eg(e), t) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
    else switch (e = this._days + Math.round(Xl(this._months)), t) {
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
  function Jn(t) {
    return function() {
      return this.as(t);
    };
  }
  var tg = Jn("ms"), VR = Jn("s"), WR = Jn("m"), UR = Jn("h"), BR = Jn("d"), zR = Jn("w"), $R = Jn("M"), GR = Jn("Q"), qR = Jn("y"), ZR = tg;
  function QR() {
    return dn(this);
  }
  function XR(t) {
    return t = qt(t), this.isValid() ? this[t + "s"]() : NaN;
  }
  function zr(t) {
    return function() {
      return this.isValid() ? this._data[t] : NaN;
    };
  }
  var JR = zr("milliseconds"), KR = zr("seconds"), e1 = zr("minutes"), t1 = zr("hours"), n1 = zr("days"), r1 = zr("months"), s1 = zr("years");
  function i1() {
    return zt(this.days() / 7);
  }
  var Fn = Math.round, cs = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    w: null,
    M: 11
  };
  function a1(t, e, n, r, s) {
    return s.relativeTime(e || 1, !!n, t, r);
  }
  function o1(t, e, n, r) {
    var s = dn(t).abs(), i = Fn(s.as("s")), a = Fn(s.as("m")), l = Fn(s.as("h")), c = Fn(s.as("d")), d = Fn(s.as("M")), f = Fn(s.as("w")), m = Fn(s.as("y")), g = i <= n.ss && [
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
    ], g[2] = e, g[3] = +t > 0, g[4] = r, a1.apply(null, g);
  }
  function l1(t) {
    return t === void 0 ? Fn : typeof t == "function" ? (Fn = t, true) : false;
  }
  function c1(t, e) {
    return cs[t] === void 0 ? false : e === void 0 ? cs[t] : (cs[t] = e, t === "s" && (cs.ss = e - 1), true);
  }
  function u1(t, e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var n = false, r = cs, s, i;
    return typeof t == "object" && (e = t, t = false), typeof t == "boolean" && (n = t), typeof e == "object" && (r = Object.assign({}, cs, e), e.s != null && e.ss == null && (r.ss = e.s - 1)), s = this.localeData(), i = o1(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
  }
  var wl = Math.abs;
  function ns(t) {
    return (t > 0) - (t < 0) || +t;
  }
  function So() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t = wl(this._milliseconds) / 1e3, e = wl(this._days), n = wl(this._months), r, s, i, a, l = this.asSeconds(), c, d, f, m;
    return l ? (r = zt(t / 60), s = zt(r / 60), t %= 60, r %= 60, i = zt(n / 12), n %= 12, a = t ? t.toFixed(3).replace(/\.?0+$/, "") : "", c = l < 0 ? "-" : "", d = ns(this._months) !== ns(l) ? "-" : "", f = ns(this._days) !== ns(l) ? "-" : "", m = ns(this._milliseconds) !== ns(l) ? "-" : "", c + "P" + (i ? d + i + "Y" : "") + (n ? d + n + "M" : "") + (e ? f + e + "D" : "") + (s || r || t ? "T" : "") + (s ? m + s + "H" : "") + (r ? m + r + "M" : "") + (t ? m + a + "S" : "")) : "P0D";
  }
  var je = bo.prototype;
  je.isValid = rA;
  je.abs = LR;
  je.add = YR;
  je.subtract = FR;
  je.as = jR;
  je.asMilliseconds = tg;
  je.asSeconds = VR;
  je.asMinutes = WR;
  je.asHours = UR;
  je.asDays = BR;
  je.asWeeks = zR;
  je.asMonths = $R;
  je.asQuarters = GR;
  je.asYears = qR;
  je.valueOf = ZR;
  je._bubble = HR;
  je.clone = QR;
  je.get = XR;
  je.milliseconds = JR;
  je.seconds = KR;
  je.minutes = e1;
  je.hours = t1;
  je.days = n1;
  je.weeks = i1;
  je.months = r1;
  je.years = s1;
  je.humanize = u1;
  je.toISOString = So;
  je.toString = So;
  je.toJSON = So;
  je.locale = Wp;
  je.localeData = Bp;
  je.toIsoString = Gt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", So);
  je.lang = Up;
  xe("X", 0, 0, "unix");
  xe("x", 0, 0, "valueOf");
  be("x", po);
  be("X", RE);
  Ze("X", function(t, e, n) {
    n._d = new Date(parseFloat(t) * 1e3);
  });
  Ze("x", function(t, e, n) {
    n._d = new Date(Ye(t));
  });
  fe.version = "2.30.1";
  dE(rt);
  fe.fn = oe;
  fe.min = KC;
  fe.max = eA;
  fe.now = tA;
  fe.utc = kn;
  fe.unix = CR;
  fe.months = RR;
  fe.isDate = Mi;
  fe.locale = fr;
  fe.invalid = uo;
  fe.duration = dn;
  fe.isMoment = ln;
  fe.weekdays = IR;
  fe.parseZone = AR;
  fe.localeData = Xn;
  fe.isDuration = ga;
  fe.monthsShort = OR;
  fe.weekdaysMin = NR;
  fe.defineLocale = Qc;
  fe.updateLocale = AC;
  fe.locales = RC;
  fe.weekdaysShort = PR;
  fe.normalizeUnits = qt;
  fe.relativeTimeRounding = l1;
  fe.relativeTimeThreshold = c1;
  fe.calendarFormat = TA;
  fe.prototype = oe;
  fe.HTML5_FMT = {
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
  function fn(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
  }
  var d1 = {
    exports: {}
  }, va = {
    exports: {}
  }, f1 = va.exports, Lf;
  function Tn() {
    return Lf || (Lf = 1, (function(t, e) {
      (function(n, r) {
        t.exports = r();
      })(f1, (function() {
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
          return ju(o, u, h, p, true).utc();
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
        var k = r.momentProperties = [], T = false;
        function N(o, u) {
          var h, p, w, A = k.length;
          if (d(u._isAMomentObject) || (o._isAMomentObject = u._isAMomentObject), d(u._i) || (o._i = u._i), d(u._f) || (o._f = u._f), d(u._l) || (o._l = u._l), d(u._strict) || (o._strict = u._strict), d(u._tzm) || (o._tzm = u._tzm), d(u._isUTC) || (o._isUTC = u._isUTC), d(u._offset) || (o._offset = u._offset), d(u._pf) || (o._pf = b(u)), d(u._locale) || (o._locale = u._locale), A > 0) for (h = 0; h < A; h++) p = k[h], w = u[p], d(w) || (o[p] = w);
          return o;
        }
        function I(o) {
          N(this, o), this._d = new Date(o._d != null ? o._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), T === false && (T = true, r.updateOffset(this), T = false);
        }
        function O(o) {
          return o instanceof I || o != null && o._isAMomentObject != null;
        }
        function K(o) {
          r.suppressDeprecationWarnings === false && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + o);
        }
        function z(o, u) {
          var h = true;
          return y(function() {
            if (r.deprecationHandler != null && r.deprecationHandler(null, o), h) {
              var p = [], w, A, $, ge = arguments.length;
              for (A = 0; A < ge; A++) {
                if (w = "", typeof arguments[A] == "object") {
                  w += `
[` + A + "] ";
                  for ($ in arguments[0]) l(arguments[0], $) && (w += $ + ": " + arguments[0][$] + ", ");
                  w = w.slice(0, -2);
                } else w = arguments[A];
                p.push(w);
              }
              K(o + `
Arguments: ` + Array.prototype.slice.call(p).join("") + `
` + new Error().stack), h = false;
            }
            return u.apply(this, arguments);
          }, u);
        }
        var L = {};
        function te(o, u) {
          r.deprecationHandler != null && r.deprecationHandler(o, u), L[o] || (K(u), L[o] = true);
        }
        r.suppressDeprecationWarnings = false, r.deprecationHandler = null;
        function Z(o) {
          return typeof Function < "u" && o instanceof Function || Object.prototype.toString.call(o) === "[object Function]";
        }
        function x(o) {
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
        var B;
        Object.keys ? B = Object.keys : B = function(o) {
          var u, h = [];
          for (u in o) l(o, u) && h.push(u);
          return h;
        };
        var H = {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        };
        function ne(o, u, h) {
          var p = this._calendar[o] || this._calendar.sameElse;
          return Z(p) ? p.call(u, h) : p;
        }
        function W(o, u, h) {
          var p = "" + Math.abs(o), w = u - p.length, A = o >= 0;
          return (A ? h ? "+" : "" : "-") + Math.pow(10, Math.max(0, w)).toString().substr(1) + p;
        }
        var G = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, ee = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, J = {}, ie = {};
        function j(o, u, h, p) {
          var w = p;
          typeof p == "string" && (w = function() {
            return this[p]();
          }), o && (ie[o] = w), u && (ie[u[0]] = function() {
            return W(w.apply(this, arguments), u[1], u[2]);
          }), h && (ie[h] = function() {
            return this.localeData().ordinal(w.apply(this, arguments), o);
          });
        }
        function se(o) {
          return o.match(/\[[\s\S]/) ? o.replace(/^\[|\]$/g, "") : o.replace(/\\/g, "");
        }
        function re(o) {
          var u = o.match(G), h, p;
          for (h = 0, p = u.length; h < p; h++) ie[u[h]] ? u[h] = ie[u[h]] : u[h] = se(u[h]);
          return function(w) {
            var A = "", $;
            for ($ = 0; $ < p; $++) A += Z(u[$]) ? u[$].call(w, o) : u[$];
            return A;
          };
        }
        function Q(o, u) {
          return o.isValid() ? (u = X(u, o.localeData()), J[u] = J[u] || re(u), J[u](o)) : o.localeData().invalidDate();
        }
        function X(o, u) {
          var h = 5;
          function p(w) {
            return u.longDateFormat(w) || w;
          }
          for (ee.lastIndex = 0; h >= 0 && ee.test(o); ) o = o.replace(ee, p), ee.lastIndex = 0, h -= 1;
          return o;
        }
        var ue = {
          LTS: "h:mm:ss A",
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D, YYYY",
          LLL: "MMMM D, YYYY h:mm A",
          LLLL: "dddd, MMMM D, YYYY h:mm A"
        };
        function he(o) {
          var u = this._longDateFormat[o], h = this._longDateFormat[o.toUpperCase()];
          return u || !h ? u : (this._longDateFormat[o] = h.match(G).map(function(p) {
            return p === "MMMM" || p === "MM" || p === "DD" || p === "dddd" ? p.slice(1) : p;
          }).join(""), this._longDateFormat[o]);
        }
        var Se = "Invalid date";
        function q() {
          return this._invalidDate;
        }
        var ce = "%d", me = /\d{1,2}/;
        function we(o) {
          return this._ordinal.replace("%d", o);
        }
        var le = {
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
        function Ce(o, u, h, p) {
          var w = this._relativeTime[h];
          return Z(w) ? w(o, u, h, p) : w.replace(/%d/i, o);
        }
        function _e(o, u) {
          var h = this._relativeTime[o > 0 ? "future" : "past"];
          return Z(h) ? h(u) : h.replace(/%s/i, u);
        }
        var ye = {
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
        function De(o) {
          return typeof o == "string" ? ye[o] || ye[o.toLowerCase()] : void 0;
        }
        function _t(o) {
          var u = {}, h, p;
          for (p in o) l(o, p) && (h = De(p), h && (u[h] = o[p]));
          return u;
        }
        var mn = {
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
        function Sr(o) {
          var u = [], h;
          for (h in o) l(o, h) && u.push({
            unit: h,
            priority: mn[h]
          });
          return u.sort(function(p, w) {
            return p.priority - w.priority;
          }), u;
        }
        var ut = /\d/, Je = /\d\d/, _r = /\d{3}/, Is = /\d{4}/, Ii = /[+-]?\d{6}/, Ke = /\d\d?/, _u = /\d\d\d\d?/, Du = /\d\d\d\d\d\d?/, Pi = /\d{1,3}/, Mo = /\d{1,4}/, Ni = /[+-]?\d{1,6}/, $r = /\d+/, Li = /[+-]?\d+/, Wg = /Z|[+-]\d\d:?\d\d/gi, Yi = /Z|[+-]\d\d(?::?\d\d)?/gi, Ug = /[+-]?\d+(\.\d{1,3})?/, Ps = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Gr = /^[1-9]\d?/, Eo = /^([1-9]\d|\d)/, Fi;
        Fi = {};
        function ve(o, u, h) {
          Fi[o] = Z(u) ? u : function(p, w) {
            return p && h ? h : u;
          };
        }
        function Bg(o, u) {
          return l(Fi, o) ? Fi[o](u._strict, u._locale) : new RegExp(zg(o));
        }
        function zg(o) {
          return Mn(o.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(u, h, p, w, A) {
            return h || p || w || A;
          }));
        }
        function Mn(o) {
          return o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function Ut(o) {
          return o < 0 ? Math.ceil(o) || 0 : Math.floor(o);
        }
        function Le(o) {
          var u = +o, h = 0;
          return u !== 0 && isFinite(u) && (h = Ut(u)), h;
        }
        var Co = {};
        function Ge(o, u) {
          var h, p = u, w;
          for (typeof o == "string" && (o = [
            o
          ]), f(u) && (p = function(A, $) {
            $[u] = Le(A);
          }), w = o.length, h = 0; h < w; h++) Co[o[h]] = p;
        }
        function Ns(o, u) {
          Ge(o, function(h, p, w, A) {
            w._w = w._w || {}, u(h, w._w, w, A);
          });
        }
        function $g(o, u, h) {
          u != null && l(Co, o) && Co[o](u, h._a, h, o);
        }
        function Hi(o) {
          return o % 4 === 0 && o % 100 !== 0 || o % 400 === 0;
        }
        var xt = 0, En = 1, pn = 2, pt = 3, Zt = 4, Cn = 5, Dr = 6, Gg = 7, qg = 8;
        j("Y", 0, 0, function() {
          var o = this.year();
          return o <= 9999 ? W(o, 4) : "+" + o;
        }), j(0, [
          "YY",
          2
        ], 0, function() {
          return this.year() % 100;
        }), j(0, [
          "YYYY",
          4
        ], 0, "year"), j(0, [
          "YYYYY",
          5
        ], 0, "year"), j(0, [
          "YYYYYY",
          6,
          true
        ], 0, "year"), ve("Y", Li), ve("YY", Ke, Je), ve("YYYY", Mo, Is), ve("YYYYY", Ni, Ii), ve("YYYYYY", Ni, Ii), Ge([
          "YYYYY",
          "YYYYYY"
        ], xt), Ge("YYYY", function(o, u) {
          u[xt] = o.length === 2 ? r.parseTwoDigitYear(o) : Le(o);
        }), Ge("YY", function(o, u) {
          u[xt] = r.parseTwoDigitYear(o);
        }), Ge("Y", function(o, u) {
          u[xt] = parseInt(o, 10);
        });
        function Ls(o) {
          return Hi(o) ? 366 : 365;
        }
        r.parseTwoDigitYear = function(o) {
          return Le(o) + (Le(o) > 68 ? 1900 : 2e3);
        };
        var ku = qr("FullYear", true);
        function Zg() {
          return Hi(this.year());
        }
        function qr(o, u) {
          return function(h) {
            return h != null ? (xu(this, o, h), r.updateOffset(this, u), this) : Ys(this, o);
          };
        }
        function Ys(o, u) {
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
        function xu(o, u, h) {
          var p, w, A, $, ge;
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
            A = h, $ = o.month(), ge = o.date(), ge = ge === 29 && $ === 1 && !Hi(A) ? 28 : ge, w ? p.setUTCFullYear(A, $, ge) : p.setFullYear(A, $, ge);
          }
        }
        function Qg(o) {
          return o = De(o), Z(this[o]) ? this[o]() : this;
        }
        function Xg(o, u) {
          if (typeof o == "object") {
            o = _t(o);
            var h = Sr(o), p, w = h.length;
            for (p = 0; p < w; p++) this[h[p].unit](o[h[p].unit]);
          } else if (o = De(o), Z(this[o])) return this[o](u);
          return this;
        }
        function Jg(o, u) {
          return (o % u + u) % u;
        }
        var dt;
        Array.prototype.indexOf ? dt = Array.prototype.indexOf : dt = function(o) {
          var u;
          for (u = 0; u < this.length; ++u) if (this[u] === o) return u;
          return -1;
        };
        function Ao(o, u) {
          if (isNaN(o) || isNaN(u)) return NaN;
          var h = Jg(u, 12);
          return o += (u - h) / 12, h === 1 ? Hi(o) ? 29 : 28 : 31 - h % 7 % 2;
        }
        j("M", [
          "MM",
          2
        ], "Mo", function() {
          return this.month() + 1;
        }), j("MMM", 0, 0, function(o) {
          return this.localeData().monthsShort(this, o);
        }), j("MMMM", 0, 0, function(o) {
          return this.localeData().months(this, o);
        }), ve("M", Ke, Gr), ve("MM", Ke, Je), ve("MMM", function(o, u) {
          return u.monthsShortRegex(o);
        }), ve("MMMM", function(o, u) {
          return u.monthsRegex(o);
        }), Ge([
          "M",
          "MM"
        ], function(o, u) {
          u[En] = Le(o) - 1;
        }), Ge([
          "MMM",
          "MMMM"
        ], function(o, u, h, p) {
          var w = h._locale.monthsParse(o, p, h._strict);
          w != null ? u[En] = w : b(h).invalidMonth = o;
        });
        var Kg = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), Tu = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Mu = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, ey = Ps, ty = Ps;
        function ny(o, u) {
          return o ? i(this._months) ? this._months[o.month()] : this._months[(this._months.isFormat || Mu).test(u) ? "format" : "standalone"][o.month()] : i(this._months) ? this._months : this._months.standalone;
        }
        function ry(o, u) {
          return o ? i(this._monthsShort) ? this._monthsShort[o.month()] : this._monthsShort[Mu.test(u) ? "format" : "standalone"][o.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
        }
        function sy(o, u, h) {
          var p, w, A, $ = o.toLocaleLowerCase();
          if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], p = 0; p < 12; ++p) A = v([
            2e3,
            p
          ]), this._shortMonthsParse[p] = this.monthsShort(A, "").toLocaleLowerCase(), this._longMonthsParse[p] = this.months(A, "").toLocaleLowerCase();
          return h ? u === "MMM" ? (w = dt.call(this._shortMonthsParse, $), w !== -1 ? w : null) : (w = dt.call(this._longMonthsParse, $), w !== -1 ? w : null) : u === "MMM" ? (w = dt.call(this._shortMonthsParse, $), w !== -1 ? w : (w = dt.call(this._longMonthsParse, $), w !== -1 ? w : null)) : (w = dt.call(this._longMonthsParse, $), w !== -1 ? w : (w = dt.call(this._shortMonthsParse, $), w !== -1 ? w : null));
        }
        function iy(o, u, h) {
          var p, w, A;
          if (this._monthsParseExact) return sy.call(this, o, u, h);
          for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), p = 0; p < 12; p++) {
            if (w = v([
              2e3,
              p
            ]), h && !this._longMonthsParse[p] && (this._longMonthsParse[p] = new RegExp("^" + this.months(w, "").replace(".", "") + "$", "i"), this._shortMonthsParse[p] = new RegExp("^" + this.monthsShort(w, "").replace(".", "") + "$", "i")), !h && !this._monthsParse[p] && (A = "^" + this.months(w, "") + "|^" + this.monthsShort(w, ""), this._monthsParse[p] = new RegExp(A.replace(".", ""), "i")), h && u === "MMMM" && this._longMonthsParse[p].test(o)) return p;
            if (h && u === "MMM" && this._shortMonthsParse[p].test(o)) return p;
            if (!h && this._monthsParse[p].test(o)) return p;
          }
        }
        function Eu(o, u) {
          if (!o.isValid()) return o;
          if (typeof u == "string") {
            if (/^\d+$/.test(u)) u = Le(u);
            else if (u = o.localeData().monthsParse(u), !f(u)) return o;
          }
          var h = u, p = o.date();
          return p = p < 29 ? p : Math.min(p, Ao(o.year(), h)), o._isUTC ? o._d.setUTCMonth(h, p) : o._d.setMonth(h, p), o;
        }
        function Cu(o) {
          return o != null ? (Eu(this, o), r.updateOffset(this, true), this) : Ys(this, "Month");
        }
        function ay() {
          return Ao(this.year(), this.month());
        }
        function oy(o) {
          return this._monthsParseExact ? (l(this, "_monthsRegex") || Au.call(this), o ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ey), this._monthsShortStrictRegex && o ? this._monthsShortStrictRegex : this._monthsShortRegex);
        }
        function ly(o) {
          return this._monthsParseExact ? (l(this, "_monthsRegex") || Au.call(this), o ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = ty), this._monthsStrictRegex && o ? this._monthsStrictRegex : this._monthsRegex);
        }
        function Au() {
          function o(Re, Fe) {
            return Fe.length - Re.length;
          }
          var u = [], h = [], p = [], w, A, $, ge;
          for (w = 0; w < 12; w++) A = v([
            2e3,
            w
          ]), $ = Mn(this.monthsShort(A, "")), ge = Mn(this.months(A, "")), u.push($), h.push(ge), p.push(ge), p.push($);
          u.sort(o), h.sort(o), p.sort(o), this._monthsRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        }
        function cy(o, u, h, p, w, A, $) {
          var ge;
          return o < 100 && o >= 0 ? (ge = new Date(o + 400, u, h, p, w, A, $), isFinite(ge.getFullYear()) && ge.setFullYear(o)) : ge = new Date(o, u, h, p, w, A, $), ge;
        }
        function Fs(o) {
          var u, h;
          return o < 100 && o >= 0 ? (h = Array.prototype.slice.call(arguments), h[0] = o + 400, u = new Date(Date.UTC.apply(null, h)), isFinite(u.getUTCFullYear()) && u.setUTCFullYear(o)) : u = new Date(Date.UTC.apply(null, arguments)), u;
        }
        function ji(o, u, h) {
          var p = 7 + u - h, w = (7 + Fs(o, 0, p).getUTCDay() - u) % 7;
          return -w + p - 1;
        }
        function Ru(o, u, h, p, w) {
          var A = (7 + h - p) % 7, $ = ji(o, p, w), ge = 1 + 7 * (u - 1) + A + $, Re, Fe;
          return ge <= 0 ? (Re = o - 1, Fe = Ls(Re) + ge) : ge > Ls(o) ? (Re = o + 1, Fe = ge - Ls(o)) : (Re = o, Fe = ge), {
            year: Re,
            dayOfYear: Fe
          };
        }
        function Hs(o, u, h) {
          var p = ji(o.year(), u, h), w = Math.floor((o.dayOfYear() - p - 1) / 7) + 1, A, $;
          return w < 1 ? ($ = o.year() - 1, A = w + An($, u, h)) : w > An(o.year(), u, h) ? (A = w - An(o.year(), u, h), $ = o.year() + 1) : ($ = o.year(), A = w), {
            week: A,
            year: $
          };
        }
        function An(o, u, h) {
          var p = ji(o, u, h), w = ji(o + 1, u, h);
          return (Ls(o) - p + w) / 7;
        }
        j("w", [
          "ww",
          2
        ], "wo", "week"), j("W", [
          "WW",
          2
        ], "Wo", "isoWeek"), ve("w", Ke, Gr), ve("ww", Ke, Je), ve("W", Ke, Gr), ve("WW", Ke, Je), Ns([
          "w",
          "ww",
          "W",
          "WW"
        ], function(o, u, h, p) {
          u[p.substr(0, 1)] = Le(o);
        });
        function uy(o) {
          return Hs(o, this._week.dow, this._week.doy).week;
        }
        var dy = {
          dow: 0,
          doy: 6
        };
        function fy() {
          return this._week.dow;
        }
        function hy() {
          return this._week.doy;
        }
        function my(o) {
          var u = this.localeData().week(this);
          return o == null ? u : this.add((o - u) * 7, "d");
        }
        function py(o) {
          var u = Hs(this, 1, 4).week;
          return o == null ? u : this.add((o - u) * 7, "d");
        }
        j("d", 0, "do", "day"), j("dd", 0, 0, function(o) {
          return this.localeData().weekdaysMin(this, o);
        }), j("ddd", 0, 0, function(o) {
          return this.localeData().weekdaysShort(this, o);
        }), j("dddd", 0, 0, function(o) {
          return this.localeData().weekdays(this, o);
        }), j("e", 0, 0, "weekday"), j("E", 0, 0, "isoWeekday"), ve("d", Ke), ve("e", Ke), ve("E", Ke), ve("dd", function(o, u) {
          return u.weekdaysMinRegex(o);
        }), ve("ddd", function(o, u) {
          return u.weekdaysShortRegex(o);
        }), ve("dddd", function(o, u) {
          return u.weekdaysRegex(o);
        }), Ns([
          "dd",
          "ddd",
          "dddd"
        ], function(o, u, h, p) {
          var w = h._locale.weekdaysParse(o, p, h._strict);
          w != null ? u.d = w : b(h).invalidWeekday = o;
        }), Ns([
          "d",
          "e",
          "E"
        ], function(o, u, h, p) {
          u[p] = Le(o);
        });
        function gy(o, u) {
          return typeof o != "string" ? o : isNaN(o) ? (o = u.weekdaysParse(o), typeof o == "number" ? o : null) : parseInt(o, 10);
        }
        function yy(o, u) {
          return typeof o == "string" ? u.weekdaysParse(o) % 7 || 7 : isNaN(o) ? null : o;
        }
        function Ro(o, u) {
          return o.slice(u, 7).concat(o.slice(0, u));
        }
        var vy = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Ou = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), by = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), wy = Ps, Sy = Ps, _y = Ps;
        function Dy(o, u) {
          var h = i(this._weekdays) ? this._weekdays : this._weekdays[o && o !== true && this._weekdays.isFormat.test(u) ? "format" : "standalone"];
          return o === true ? Ro(h, this._week.dow) : o ? h[o.day()] : h;
        }
        function ky(o) {
          return o === true ? Ro(this._weekdaysShort, this._week.dow) : o ? this._weekdaysShort[o.day()] : this._weekdaysShort;
        }
        function xy(o) {
          return o === true ? Ro(this._weekdaysMin, this._week.dow) : o ? this._weekdaysMin[o.day()] : this._weekdaysMin;
        }
        function Ty(o, u, h) {
          var p, w, A, $ = o.toLocaleLowerCase();
          if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], p = 0; p < 7; ++p) A = v([
            2e3,
            1
          ]).day(p), this._minWeekdaysParse[p] = this.weekdaysMin(A, "").toLocaleLowerCase(), this._shortWeekdaysParse[p] = this.weekdaysShort(A, "").toLocaleLowerCase(), this._weekdaysParse[p] = this.weekdays(A, "").toLocaleLowerCase();
          return h ? u === "dddd" ? (w = dt.call(this._weekdaysParse, $), w !== -1 ? w : null) : u === "ddd" ? (w = dt.call(this._shortWeekdaysParse, $), w !== -1 ? w : null) : (w = dt.call(this._minWeekdaysParse, $), w !== -1 ? w : null) : u === "dddd" ? (w = dt.call(this._weekdaysParse, $), w !== -1 || (w = dt.call(this._shortWeekdaysParse, $), w !== -1) ? w : (w = dt.call(this._minWeekdaysParse, $), w !== -1 ? w : null)) : u === "ddd" ? (w = dt.call(this._shortWeekdaysParse, $), w !== -1 || (w = dt.call(this._weekdaysParse, $), w !== -1) ? w : (w = dt.call(this._minWeekdaysParse, $), w !== -1 ? w : null)) : (w = dt.call(this._minWeekdaysParse, $), w !== -1 || (w = dt.call(this._weekdaysParse, $), w !== -1) ? w : (w = dt.call(this._shortWeekdaysParse, $), w !== -1 ? w : null));
        }
        function My(o, u, h) {
          var p, w, A;
          if (this._weekdaysParseExact) return Ty.call(this, o, u, h);
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
        function Ey(o) {
          if (!this.isValid()) return o != null ? this : NaN;
          var u = Ys(this, "Day");
          return o != null ? (o = gy(o, this.localeData()), this.add(o - u, "d")) : u;
        }
        function Cy(o) {
          if (!this.isValid()) return o != null ? this : NaN;
          var u = (this.day() + 7 - this.localeData()._week.dow) % 7;
          return o == null ? u : this.add(o - u, "d");
        }
        function Ay(o) {
          if (!this.isValid()) return o != null ? this : NaN;
          if (o != null) {
            var u = yy(o, this.localeData());
            return this.day(this.day() % 7 ? u : u - 7);
          } else return this.day() || 7;
        }
        function Ry(o) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Oo.call(this), o ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = wy), this._weekdaysStrictRegex && o ? this._weekdaysStrictRegex : this._weekdaysRegex);
        }
        function Oy(o) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Oo.call(this), o ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sy), this._weekdaysShortStrictRegex && o ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
        }
        function Iy(o) {
          return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Oo.call(this), o ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = _y), this._weekdaysMinStrictRegex && o ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
        }
        function Oo() {
          function o(It, Nn) {
            return Nn.length - It.length;
          }
          var u = [], h = [], p = [], w = [], A, $, ge, Re, Fe;
          for (A = 0; A < 7; A++) $ = v([
            2e3,
            1
          ]).day(A), ge = Mn(this.weekdaysMin($, "")), Re = Mn(this.weekdaysShort($, "")), Fe = Mn(this.weekdays($, "")), u.push(ge), h.push(Re), p.push(Fe), w.push(ge), w.push(Re), w.push(Fe);
          u.sort(o), h.sort(o), p.sort(o), w.sort(o), this._weekdaysRegex = new RegExp("^(" + w.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + u.join("|") + ")", "i");
        }
        function Io() {
          return this.hours() % 12 || 12;
        }
        function Py() {
          return this.hours() || 24;
        }
        j("H", [
          "HH",
          2
        ], 0, "hour"), j("h", [
          "hh",
          2
        ], 0, Io), j("k", [
          "kk",
          2
        ], 0, Py), j("hmm", 0, 0, function() {
          return "" + Io.apply(this) + W(this.minutes(), 2);
        }), j("hmmss", 0, 0, function() {
          return "" + Io.apply(this) + W(this.minutes(), 2) + W(this.seconds(), 2);
        }), j("Hmm", 0, 0, function() {
          return "" + this.hours() + W(this.minutes(), 2);
        }), j("Hmmss", 0, 0, function() {
          return "" + this.hours() + W(this.minutes(), 2) + W(this.seconds(), 2);
        });
        function Iu(o, u) {
          j(o, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), u);
          });
        }
        Iu("a", true), Iu("A", false);
        function Pu(o, u) {
          return u._meridiemParse;
        }
        ve("a", Pu), ve("A", Pu), ve("H", Ke, Eo), ve("h", Ke, Gr), ve("k", Ke, Gr), ve("HH", Ke, Je), ve("hh", Ke, Je), ve("kk", Ke, Je), ve("hmm", _u), ve("hmmss", Du), ve("Hmm", _u), ve("Hmmss", Du), Ge([
          "H",
          "HH"
        ], pt), Ge([
          "k",
          "kk"
        ], function(o, u, h) {
          var p = Le(o);
          u[pt] = p === 24 ? 0 : p;
        }), Ge([
          "a",
          "A"
        ], function(o, u, h) {
          h._isPm = h._locale.isPM(o), h._meridiem = o;
        }), Ge([
          "h",
          "hh"
        ], function(o, u, h) {
          u[pt] = Le(o), b(h).bigHour = true;
        }), Ge("hmm", function(o, u, h) {
          var p = o.length - 2;
          u[pt] = Le(o.substr(0, p)), u[Zt] = Le(o.substr(p)), b(h).bigHour = true;
        }), Ge("hmmss", function(o, u, h) {
          var p = o.length - 4, w = o.length - 2;
          u[pt] = Le(o.substr(0, p)), u[Zt] = Le(o.substr(p, 2)), u[Cn] = Le(o.substr(w)), b(h).bigHour = true;
        }), Ge("Hmm", function(o, u, h) {
          var p = o.length - 2;
          u[pt] = Le(o.substr(0, p)), u[Zt] = Le(o.substr(p));
        }), Ge("Hmmss", function(o, u, h) {
          var p = o.length - 4, w = o.length - 2;
          u[pt] = Le(o.substr(0, p)), u[Zt] = Le(o.substr(p, 2)), u[Cn] = Le(o.substr(w));
        });
        function Ny(o) {
          return (o + "").toLowerCase().charAt(0) === "p";
        }
        var Ly = /[ap]\.?m?\.?/i, Yy = qr("Hours", true);
        function Fy(o, u, h) {
          return o > 11 ? h ? "pm" : "PM" : h ? "am" : "AM";
        }
        var Nu = {
          calendar: H,
          longDateFormat: ue,
          invalidDate: Se,
          ordinal: ce,
          dayOfMonthOrdinalParse: me,
          relativeTime: le,
          months: Kg,
          monthsShort: Tu,
          week: dy,
          weekdays: vy,
          weekdaysMin: by,
          weekdaysShort: Ou,
          meridiemParse: Ly
        }, it = {}, js = {}, Vs;
        function Hy(o, u) {
          var h, p = Math.min(o.length, u.length);
          for (h = 0; h < p; h += 1) if (o[h] !== u[h]) return h;
          return p;
        }
        function Lu(o) {
          return o && o.toLowerCase().replace("_", "-");
        }
        function jy(o) {
          for (var u = 0, h, p, w, A; u < o.length; ) {
            for (A = Lu(o[u]).split("-"), h = A.length, p = Lu(o[u + 1]), p = p ? p.split("-") : null; h > 0; ) {
              if (w = Vi(A.slice(0, h).join("-")), w) return w;
              if (p && p.length >= h && Hy(A, p) >= h - 1) break;
              h--;
            }
            u++;
          }
          return Vs;
        }
        function Vy(o) {
          return !!(o && o.match("^[^/\\\\]*$"));
        }
        function Vi(o) {
          var u = null, h;
          if (it[o] === void 0 && t && t.exports && Vy(o)) try {
            u = Vs._abbr, h = fn, h("./locale/" + o), Kn(u);
          } catch {
            it[o] = null;
          }
          return it[o];
        }
        function Kn(o, u) {
          var h;
          return o && (d(u) ? h = Rn(o) : h = Po(o, u), h ? Vs = h : typeof console < "u" && console.warn && console.warn("Locale " + o + " not found. Did you forget to load it?")), Vs._abbr;
        }
        function Po(o, u) {
          if (u !== null) {
            var h, p = Nu;
            if (u.abbr = o, it[o] != null) te("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), p = it[o]._config;
            else if (u.parentLocale != null) if (it[u.parentLocale] != null) p = it[u.parentLocale]._config;
            else if (h = Vi(u.parentLocale), h != null) p = h._config;
            else return js[u.parentLocale] || (js[u.parentLocale] = []), js[u.parentLocale].push({
              name: o,
              config: u
            }), null;
            return it[o] = new P(C(p, u)), js[o] && js[o].forEach(function(w) {
              Po(w.name, w.config);
            }), Kn(o), it[o];
          } else return delete it[o], null;
        }
        function Wy(o, u) {
          if (u != null) {
            var h, p, w = Nu;
            it[o] != null && it[o].parentLocale != null ? it[o].set(C(it[o]._config, u)) : (p = Vi(o), p != null && (w = p._config), u = C(w, u), p == null && (u.abbr = o), h = new P(u), h.parentLocale = it[o], it[o] = h), Kn(o);
          } else it[o] != null && (it[o].parentLocale != null ? (it[o] = it[o].parentLocale, o === Kn() && Kn(o)) : it[o] != null && delete it[o]);
          return it[o];
        }
        function Rn(o) {
          var u;
          if (o && o._locale && o._locale._abbr && (o = o._locale._abbr), !o) return Vs;
          if (!i(o)) {
            if (u = Vi(o), u) return u;
            o = [
              o
            ];
          }
          return jy(o);
        }
        function Uy() {
          return B(it);
        }
        function No(o) {
          var u, h = o._a;
          return h && b(o).overflow === -2 && (u = h[En] < 0 || h[En] > 11 ? En : h[pn] < 1 || h[pn] > Ao(h[xt], h[En]) ? pn : h[pt] < 0 || h[pt] > 24 || h[pt] === 24 && (h[Zt] !== 0 || h[Cn] !== 0 || h[Dr] !== 0) ? pt : h[Zt] < 0 || h[Zt] > 59 ? Zt : h[Cn] < 0 || h[Cn] > 59 ? Cn : h[Dr] < 0 || h[Dr] > 999 ? Dr : -1, b(o)._overflowDayOfYear && (u < xt || u > pn) && (u = pn), b(o)._overflowWeeks && u === -1 && (u = Gg), b(o)._overflowWeekday && u === -1 && (u = qg), b(o).overflow = u), o;
        }
        var By = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, zy = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, $y = /Z|[+-]\d\d(?::?\d\d)?/, Wi = [
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
        ], Lo = [
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
        ], Gy = /^\/?Date\((-?\d+)/i, qy = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Zy = {
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
        function Yu(o) {
          var u, h, p = o._i, w = By.exec(p) || zy.exec(p), A, $, ge, Re, Fe = Wi.length, It = Lo.length;
          if (w) {
            for (b(o).iso = true, u = 0, h = Fe; u < h; u++) if (Wi[u][1].exec(w[1])) {
              $ = Wi[u][0], A = Wi[u][2] !== false;
              break;
            }
            if ($ == null) {
              o._isValid = false;
              return;
            }
            if (w[3]) {
              for (u = 0, h = It; u < h; u++) if (Lo[u][1].exec(w[3])) {
                ge = (w[2] || " ") + Lo[u][0];
                break;
              }
              if (ge == null) {
                o._isValid = false;
                return;
              }
            }
            if (!A && ge != null) {
              o._isValid = false;
              return;
            }
            if (w[4]) if ($y.exec(w[4])) Re = "Z";
            else {
              o._isValid = false;
              return;
            }
            o._f = $ + (ge || "") + (Re || ""), Fo(o);
          } else o._isValid = false;
        }
        function Qy(o, u, h, p, w, A) {
          var $ = [
            Xy(o),
            Tu.indexOf(u),
            parseInt(h, 10),
            parseInt(p, 10),
            parseInt(w, 10)
          ];
          return A && $.push(parseInt(A, 10)), $;
        }
        function Xy(o) {
          var u = parseInt(o, 10);
          return u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u;
        }
        function Jy(o) {
          return o.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        }
        function Ky(o, u, h) {
          if (o) {
            var p = Ou.indexOf(o), w = new Date(u[0], u[1], u[2]).getDay();
            if (p !== w) return b(h).weekdayMismatch = true, h._isValid = false, false;
          }
          return true;
        }
        function ev(o, u, h) {
          if (o) return Zy[o];
          if (u) return 0;
          var p = parseInt(h, 10), w = p % 100, A = (p - w) / 100;
          return A * 60 + w;
        }
        function Fu(o) {
          var u = qy.exec(Jy(o._i)), h;
          if (u) {
            if (h = Qy(u[4], u[3], u[2], u[5], u[6], u[7]), !Ky(u[1], h, o)) return;
            o._a = h, o._tzm = ev(u[8], u[9], u[10]), o._d = Fs.apply(null, o._a), o._d.setUTCMinutes(o._d.getUTCMinutes() - o._tzm), b(o).rfc2822 = true;
          } else o._isValid = false;
        }
        function tv(o) {
          var u = Gy.exec(o._i);
          if (u !== null) {
            o._d = /* @__PURE__ */ new Date(+u[1]);
            return;
          }
          if (Yu(o), o._isValid === false) delete o._isValid;
          else return;
          if (Fu(o), o._isValid === false) delete o._isValid;
          else return;
          o._strict ? o._isValid = false : r.createFromInputFallback(o);
        }
        r.createFromInputFallback = z("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(o) {
          o._d = /* @__PURE__ */ new Date(o._i + (o._useUTC ? " UTC" : ""));
        });
        function Zr(o, u, h) {
          return o ?? u ?? h;
        }
        function nv(o) {
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
        function Yo(o) {
          var u, h, p = [], w, A, $;
          if (!o._d) {
            for (w = nv(o), o._w && o._a[pn] == null && o._a[En] == null && rv(o), o._dayOfYear != null && ($ = Zr(o._a[xt], w[xt]), (o._dayOfYear > Ls($) || o._dayOfYear === 0) && (b(o)._overflowDayOfYear = true), h = Fs($, 0, o._dayOfYear), o._a[En] = h.getUTCMonth(), o._a[pn] = h.getUTCDate()), u = 0; u < 3 && o._a[u] == null; ++u) o._a[u] = p[u] = w[u];
            for (; u < 7; u++) o._a[u] = p[u] = o._a[u] == null ? u === 2 ? 1 : 0 : o._a[u];
            o._a[pt] === 24 && o._a[Zt] === 0 && o._a[Cn] === 0 && o._a[Dr] === 0 && (o._nextDay = true, o._a[pt] = 0), o._d = (o._useUTC ? Fs : cy).apply(null, p), A = o._useUTC ? o._d.getUTCDay() : o._d.getDay(), o._tzm != null && o._d.setUTCMinutes(o._d.getUTCMinutes() - o._tzm), o._nextDay && (o._a[pt] = 24), o._w && typeof o._w.d < "u" && o._w.d !== A && (b(o).weekdayMismatch = true);
          }
        }
        function rv(o) {
          var u, h, p, w, A, $, ge, Re, Fe;
          u = o._w, u.GG != null || u.W != null || u.E != null ? (A = 1, $ = 4, h = Zr(u.GG, o._a[xt], Hs(et(), 1, 4).year), p = Zr(u.W, 1), w = Zr(u.E, 1), (w < 1 || w > 7) && (Re = true)) : (A = o._locale._week.dow, $ = o._locale._week.doy, Fe = Hs(et(), A, $), h = Zr(u.gg, o._a[xt], Fe.year), p = Zr(u.w, Fe.week), u.d != null ? (w = u.d, (w < 0 || w > 6) && (Re = true)) : u.e != null ? (w = u.e + A, (u.e < 0 || u.e > 6) && (Re = true)) : w = A), p < 1 || p > An(h, A, $) ? b(o)._overflowWeeks = true : Re != null ? b(o)._overflowWeekday = true : (ge = Ru(h, p, w, A, $), o._a[xt] = ge.year, o._dayOfYear = ge.dayOfYear);
        }
        r.ISO_8601 = function() {
        }, r.RFC_2822 = function() {
        };
        function Fo(o) {
          if (o._f === r.ISO_8601) {
            Yu(o);
            return;
          }
          if (o._f === r.RFC_2822) {
            Fu(o);
            return;
          }
          o._a = [], b(o).empty = true;
          var u = "" + o._i, h, p, w, A, $, ge = u.length, Re = 0, Fe, It;
          for (w = X(o._f, o._locale).match(G) || [], It = w.length, h = 0; h < It; h++) A = w[h], p = (u.match(Bg(A, o)) || [])[0], p && ($ = u.substr(0, u.indexOf(p)), $.length > 0 && b(o).unusedInput.push($), u = u.slice(u.indexOf(p) + p.length), Re += p.length), ie[A] ? (p ? b(o).empty = false : b(o).unusedTokens.push(A), $g(A, p, o)) : o._strict && !p && b(o).unusedTokens.push(A);
          b(o).charsLeftOver = ge - Re, u.length > 0 && b(o).unusedInput.push(u), o._a[pt] <= 12 && b(o).bigHour === true && o._a[pt] > 0 && (b(o).bigHour = void 0), b(o).parsedDateParts = o._a.slice(0), b(o).meridiem = o._meridiem, o._a[pt] = sv(o._locale, o._a[pt], o._meridiem), Fe = b(o).era, Fe !== null && (o._a[xt] = o._locale.erasConvertYear(Fe, o._a[xt])), Yo(o), No(o);
        }
        function sv(o, u, h) {
          var p;
          return h == null ? u : o.meridiemHour != null ? o.meridiemHour(u, h) : (o.isPM != null && (p = o.isPM(h), p && u < 12 && (u += 12), !p && u === 12 && (u = 0)), u);
        }
        function iv(o) {
          var u, h, p, w, A, $, ge = false, Re = o._f.length;
          if (Re === 0) {
            b(o).invalidFormat = true, o._d = /* @__PURE__ */ new Date(NaN);
            return;
          }
          for (w = 0; w < Re; w++) A = 0, $ = false, u = N({}, o), o._useUTC != null && (u._useUTC = o._useUTC), u._f = o._f[w], Fo(u), E(u) && ($ = true), A += b(u).charsLeftOver, A += b(u).unusedTokens.length * 10, b(u).score = A, ge ? A < p && (p = A, h = u) : (p == null || A < p || $) && (p = A, h = u, $ && (ge = true));
          y(o, h || u);
        }
        function av(o) {
          if (!o._d) {
            var u = _t(o._i), h = u.day === void 0 ? u.date : u.day;
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
            }), Yo(o);
          }
        }
        function ov(o) {
          var u = new I(No(Hu(o)));
          return u._nextDay && (u.add(1, "d"), u._nextDay = void 0), u;
        }
        function Hu(o) {
          var u = o._i, h = o._f;
          return o._locale = o._locale || Rn(o._l), u === null || h === void 0 && u === "" ? R({
            nullInput: true
          }) : (typeof u == "string" && (o._i = u = o._locale.preparse(u)), O(u) ? new I(No(u)) : (m(u) ? o._d = u : i(h) ? iv(o) : h ? Fo(o) : lv(o), E(o) || (o._d = null), o));
        }
        function lv(o) {
          var u = o._i;
          d(u) ? o._d = new Date(r.now()) : m(u) ? o._d = new Date(u.valueOf()) : typeof u == "string" ? tv(o) : i(u) ? (o._a = g(u.slice(0), function(h) {
            return parseInt(h, 10);
          }), Yo(o)) : a(u) ? av(o) : f(u) ? o._d = new Date(u) : r.createFromInputFallback(o);
        }
        function ju(o, u, h, p, w) {
          var A = {};
          return (u === true || u === false) && (p = u, u = void 0), (h === true || h === false) && (p = h, h = void 0), (a(o) && c(o) || i(o) && o.length === 0) && (o = void 0), A._isAMomentObject = true, A._useUTC = A._isUTC = w, A._l = h, A._i = o, A._f = u, A._strict = p, ov(A);
        }
        function et(o, u, h, p) {
          return ju(o, u, h, p, false);
        }
        var cv = z("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var o = et.apply(null, arguments);
          return this.isValid() && o.isValid() ? o < this ? this : o : R();
        }), uv = z("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
          var o = et.apply(null, arguments);
          return this.isValid() && o.isValid() ? o > this ? this : o : R();
        });
        function Vu(o, u) {
          var h, p;
          if (u.length === 1 && i(u[0]) && (u = u[0]), !u.length) return et();
          for (h = u[0], p = 1; p < u.length; ++p) (!u[p].isValid() || u[p][o](h)) && (h = u[p]);
          return h;
        }
        function dv() {
          var o = [].slice.call(arguments, 0);
          return Vu("isBefore", o);
        }
        function fv() {
          var o = [].slice.call(arguments, 0);
          return Vu("isAfter", o);
        }
        var hv = function() {
          return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
        }, Ws = [
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
        function mv(o) {
          var u, h = false, p, w = Ws.length;
          for (u in o) if (l(o, u) && !(dt.call(Ws, u) !== -1 && (o[u] == null || !isNaN(o[u])))) return false;
          for (p = 0; p < w; ++p) if (o[Ws[p]]) {
            if (h) return false;
            parseFloat(o[Ws[p]]) !== Le(o[Ws[p]]) && (h = true);
          }
          return true;
        }
        function pv() {
          return this._isValid;
        }
        function gv() {
          return Qt(NaN);
        }
        function Ui(o) {
          var u = _t(o), h = u.year || 0, p = u.quarter || 0, w = u.month || 0, A = u.week || u.isoWeek || 0, $ = u.day || 0, ge = u.hour || 0, Re = u.minute || 0, Fe = u.second || 0, It = u.millisecond || 0;
          this._isValid = mv(u), this._milliseconds = +It + Fe * 1e3 + Re * 6e4 + ge * 1e3 * 60 * 60, this._days = +$ + A * 7, this._months = +w + p * 3 + h * 12, this._data = {}, this._locale = Rn(), this._bubble();
        }
        function Bi(o) {
          return o instanceof Ui;
        }
        function Ho(o) {
          return o < 0 ? Math.round(-1 * o) * -1 : Math.round(o);
        }
        function yv(o, u, h) {
          var p = Math.min(o.length, u.length), w = Math.abs(o.length - u.length), A = 0, $;
          for ($ = 0; $ < p; $++) Le(o[$]) !== Le(u[$]) && A++;
          return A + w;
        }
        function Wu(o, u) {
          j(o, 0, 0, function() {
            var h = this.utcOffset(), p = "+";
            return h < 0 && (h = -h, p = "-"), p + W(~~(h / 60), 2) + u + W(~~h % 60, 2);
          });
        }
        Wu("Z", ":"), Wu("ZZ", ""), ve("Z", Yi), ve("ZZ", Yi), Ge([
          "Z",
          "ZZ"
        ], function(o, u, h) {
          h._useUTC = true, h._tzm = jo(Yi, o);
        });
        var vv = /([\+\-]|\d\d)/gi;
        function jo(o, u) {
          var h = (u || "").match(o), p, w, A;
          return h === null ? null : (p = h[h.length - 1] || [], w = (p + "").match(vv) || [
            "-",
            0,
            0
          ], A = +(w[1] * 60) + Le(w[2]), A === 0 ? 0 : w[0] === "+" ? A : -A);
        }
        function Vo(o, u) {
          var h, p;
          return u._isUTC ? (h = u.clone(), p = (O(o) || m(o) ? o.valueOf() : et(o).valueOf()) - h.valueOf(), h._d.setTime(h._d.valueOf() + p), r.updateOffset(h, false), h) : et(o).local();
        }
        function Wo(o) {
          return -Math.round(o._d.getTimezoneOffset());
        }
        r.updateOffset = function() {
        };
        function bv(o, u, h) {
          var p = this._offset || 0, w;
          if (!this.isValid()) return o != null ? this : NaN;
          if (o != null) {
            if (typeof o == "string") {
              if (o = jo(Yi, o), o === null) return this;
            } else Math.abs(o) < 16 && !h && (o = o * 60);
            return !this._isUTC && u && (w = Wo(this)), this._offset = o, this._isUTC = true, w != null && this.add(w, "m"), p !== o && (!u || this._changeInProgress ? $u(this, Qt(o - p, "m"), 1, false) : this._changeInProgress || (this._changeInProgress = true, r.updateOffset(this, true), this._changeInProgress = null)), this;
          } else return this._isUTC ? p : Wo(this);
        }
        function wv(o, u) {
          return o != null ? (typeof o != "string" && (o = -o), this.utcOffset(o, u), this) : -this.utcOffset();
        }
        function Sv(o) {
          return this.utcOffset(0, o);
        }
        function _v(o) {
          return this._isUTC && (this.utcOffset(0, o), this._isUTC = false, o && this.subtract(Wo(this), "m")), this;
        }
        function Dv() {
          if (this._tzm != null) this.utcOffset(this._tzm, false, true);
          else if (typeof this._i == "string") {
            var o = jo(Wg, this._i);
            o != null ? this.utcOffset(o) : this.utcOffset(0, true);
          }
          return this;
        }
        function kv(o) {
          return this.isValid() ? (o = o ? et(o).utcOffset() : 0, (this.utcOffset() - o) % 60 === 0) : false;
        }
        function xv() {
          return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
        }
        function Tv() {
          if (!d(this._isDSTShifted)) return this._isDSTShifted;
          var o = {}, u;
          return N(o, this), o = Hu(o), o._a ? (u = o._isUTC ? v(o._a) : et(o._a), this._isDSTShifted = this.isValid() && yv(o._a, u.toArray()) > 0) : this._isDSTShifted = false, this._isDSTShifted;
        }
        function Mv() {
          return this.isValid() ? !this._isUTC : false;
        }
        function Ev() {
          return this.isValid() ? this._isUTC : false;
        }
        function Uu() {
          return this.isValid() ? this._isUTC && this._offset === 0 : false;
        }
        var Cv = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Av = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
        function Qt(o, u) {
          var h = o, p = null, w, A, $;
          return Bi(o) ? h = {
            ms: o._milliseconds,
            d: o._days,
            M: o._months
          } : f(o) || !isNaN(+o) ? (h = {}, u ? h[u] = +o : h.milliseconds = +o) : (p = Cv.exec(o)) ? (w = p[1] === "-" ? -1 : 1, h = {
            y: 0,
            d: Le(p[pn]) * w,
            h: Le(p[pt]) * w,
            m: Le(p[Zt]) * w,
            s: Le(p[Cn]) * w,
            ms: Le(Ho(p[Dr] * 1e3)) * w
          }) : (p = Av.exec(o)) ? (w = p[1] === "-" ? -1 : 1, h = {
            y: kr(p[2], w),
            M: kr(p[3], w),
            w: kr(p[4], w),
            d: kr(p[5], w),
            h: kr(p[6], w),
            m: kr(p[7], w),
            s: kr(p[8], w)
          }) : h == null ? h = {} : typeof h == "object" && ("from" in h || "to" in h) && ($ = Rv(et(h.from), et(h.to)), h = {}, h.ms = $.milliseconds, h.M = $.months), A = new Ui(h), Bi(o) && l(o, "_locale") && (A._locale = o._locale), Bi(o) && l(o, "_isValid") && (A._isValid = o._isValid), A;
        }
        Qt.fn = Ui.prototype, Qt.invalid = gv;
        function kr(o, u) {
          var h = o && parseFloat(o.replace(",", "."));
          return (isNaN(h) ? 0 : h) * u;
        }
        function Bu(o, u) {
          var h = {};
          return h.months = u.month() - o.month() + (u.year() - o.year()) * 12, o.clone().add(h.months, "M").isAfter(u) && --h.months, h.milliseconds = +u - +o.clone().add(h.months, "M"), h;
        }
        function Rv(o, u) {
          var h;
          return o.isValid() && u.isValid() ? (u = Vo(u, o), o.isBefore(u) ? h = Bu(o, u) : (h = Bu(u, o), h.milliseconds = -h.milliseconds, h.months = -h.months), h) : {
            milliseconds: 0,
            months: 0
          };
        }
        function zu(o, u) {
          return function(h, p) {
            var w, A;
            return p !== null && !isNaN(+p) && (te(u, "moment()." + u + "(period, number) is deprecated. Please use moment()." + u + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), A = h, h = p, p = A), w = Qt(h, p), $u(this, w, o), this;
          };
        }
        function $u(o, u, h, p) {
          var w = u._milliseconds, A = Ho(u._days), $ = Ho(u._months);
          o.isValid() && (p = p ?? true, $ && Eu(o, Ys(o, "Month") + $ * h), A && xu(o, "Date", Ys(o, "Date") + A * h), w && o._d.setTime(o._d.valueOf() + w * h), p && r.updateOffset(o, A || $));
        }
        var Ov = zu(1, "add"), Iv = zu(-1, "subtract");
        function Gu(o) {
          return typeof o == "string" || o instanceof String;
        }
        function Pv(o) {
          return O(o) || m(o) || Gu(o) || f(o) || Lv(o) || Nv(o) || o === null || o === void 0;
        }
        function Nv(o) {
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
          ], w, A, $ = p.length;
          for (w = 0; w < $; w += 1) A = p[w], h = h || l(o, A);
          return u && h;
        }
        function Lv(o) {
          var u = i(o), h = false;
          return u && (h = o.filter(function(p) {
            return !f(p) && Gu(o);
          }).length === 0), u && h;
        }
        function Yv(o) {
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
        function Fv(o, u) {
          var h = o.diff(u, "days", true);
          return h < -6 ? "sameElse" : h < -1 ? "lastWeek" : h < 0 ? "lastDay" : h < 1 ? "sameDay" : h < 2 ? "nextDay" : h < 7 ? "nextWeek" : "sameElse";
        }
        function Hv(o, u) {
          arguments.length === 1 && (arguments[0] ? Pv(arguments[0]) ? (o = arguments[0], u = void 0) : Yv(arguments[0]) && (u = arguments[0], o = void 0) : (o = void 0, u = void 0));
          var h = o || et(), p = Vo(h, this).startOf("day"), w = r.calendarFormat(this, p) || "sameElse", A = u && (Z(u[w]) ? u[w].call(this, h) : u[w]);
          return this.format(A || this.localeData().calendar(w, this, et(h)));
        }
        function jv() {
          return new I(this);
        }
        function Vv(o, u) {
          var h = O(o) ? o : et(o);
          return this.isValid() && h.isValid() ? (u = De(u) || "millisecond", u === "millisecond" ? this.valueOf() > h.valueOf() : h.valueOf() < this.clone().startOf(u).valueOf()) : false;
        }
        function Wv(o, u) {
          var h = O(o) ? o : et(o);
          return this.isValid() && h.isValid() ? (u = De(u) || "millisecond", u === "millisecond" ? this.valueOf() < h.valueOf() : this.clone().endOf(u).valueOf() < h.valueOf()) : false;
        }
        function Uv(o, u, h, p) {
          var w = O(o) ? o : et(o), A = O(u) ? u : et(u);
          return this.isValid() && w.isValid() && A.isValid() ? (p = p || "()", (p[0] === "(" ? this.isAfter(w, h) : !this.isBefore(w, h)) && (p[1] === ")" ? this.isBefore(A, h) : !this.isAfter(A, h))) : false;
        }
        function Bv(o, u) {
          var h = O(o) ? o : et(o), p;
          return this.isValid() && h.isValid() ? (u = De(u) || "millisecond", u === "millisecond" ? this.valueOf() === h.valueOf() : (p = h.valueOf(), this.clone().startOf(u).valueOf() <= p && p <= this.clone().endOf(u).valueOf())) : false;
        }
        function zv(o, u) {
          return this.isSame(o, u) || this.isAfter(o, u);
        }
        function $v(o, u) {
          return this.isSame(o, u) || this.isBefore(o, u);
        }
        function Gv(o, u, h) {
          var p, w, A;
          if (!this.isValid()) return NaN;
          if (p = Vo(o, this), !p.isValid()) return NaN;
          switch (w = (p.utcOffset() - this.utcOffset()) * 6e4, u = De(u), u) {
            case "year":
              A = zi(this, p) / 12;
              break;
            case "month":
              A = zi(this, p);
              break;
            case "quarter":
              A = zi(this, p) / 3;
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
          return h ? A : Ut(A);
        }
        function zi(o, u) {
          if (o.date() < u.date()) return -zi(u, o);
          var h = (u.year() - o.year()) * 12 + (u.month() - o.month()), p = o.clone().add(h, "months"), w, A;
          return u - p < 0 ? (w = o.clone().add(h - 1, "months"), A = (u - p) / (p - w)) : (w = o.clone().add(h + 1, "months"), A = (u - p) / (w - p)), -(h + A) || 0;
        }
        r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        function qv() {
          return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        }
        function Zv(o) {
          if (!this.isValid()) return null;
          var u = o !== true, h = u ? this.clone().utc() : this;
          return h.year() < 0 || h.year() > 9999 ? Q(h, u ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : Z(Date.prototype.toISOString) ? u ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Q(h, "Z")) : Q(h, u ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
        }
        function Qv() {
          if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
          var o = "moment", u = "", h, p, w, A;
          return this.isLocal() || (o = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", u = "Z"), h = "[" + o + '("]', p = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", w = "-MM-DD[T]HH:mm:ss.SSS", A = u + '[")]', this.format(h + p + w + A);
        }
        function Xv(o) {
          o || (o = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
          var u = Q(this, o);
          return this.localeData().postformat(u);
        }
        function Jv(o, u) {
          return this.isValid() && (O(o) && o.isValid() || et(o).isValid()) ? Qt({
            to: this,
            from: o
          }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
        }
        function Kv(o) {
          return this.from(et(), o);
        }
        function eb(o, u) {
          return this.isValid() && (O(o) && o.isValid() || et(o).isValid()) ? Qt({
            from: this,
            to: o
          }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
        }
        function tb(o) {
          return this.to(et(), o);
        }
        function qu(o) {
          var u;
          return o === void 0 ? this._locale._abbr : (u = Rn(o), u != null && (this._locale = u), this);
        }
        var Zu = z("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(o) {
          return o === void 0 ? this.localeData() : this.locale(o);
        });
        function Qu() {
          return this._locale;
        }
        var $i = 1e3, Qr = 60 * $i, Gi = 60 * Qr, Xu = (365 * 400 + 97) * 24 * Gi;
        function Xr(o, u) {
          return (o % u + u) % u;
        }
        function Ju(o, u, h) {
          return o < 100 && o >= 0 ? new Date(o + 400, u, h) - Xu : new Date(o, u, h).valueOf();
        }
        function Ku(o, u, h) {
          return o < 100 && o >= 0 ? Date.UTC(o + 400, u, h) - Xu : Date.UTC(o, u, h);
        }
        function nb(o) {
          var u, h;
          if (o = De(o), o === void 0 || o === "millisecond" || !this.isValid()) return this;
          switch (h = this._isUTC ? Ku : Ju, o) {
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
              u = this._d.valueOf(), u -= Xr(u + (this._isUTC ? 0 : this.utcOffset() * Qr), Gi);
              break;
            case "minute":
              u = this._d.valueOf(), u -= Xr(u, Qr);
              break;
            case "second":
              u = this._d.valueOf(), u -= Xr(u, $i);
              break;
          }
          return this._d.setTime(u), r.updateOffset(this, true), this;
        }
        function rb(o) {
          var u, h;
          if (o = De(o), o === void 0 || o === "millisecond" || !this.isValid()) return this;
          switch (h = this._isUTC ? Ku : Ju, o) {
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
              u = this._d.valueOf(), u += Gi - Xr(u + (this._isUTC ? 0 : this.utcOffset() * Qr), Gi) - 1;
              break;
            case "minute":
              u = this._d.valueOf(), u += Qr - Xr(u, Qr) - 1;
              break;
            case "second":
              u = this._d.valueOf(), u += $i - Xr(u, $i) - 1;
              break;
          }
          return this._d.setTime(u), r.updateOffset(this, true), this;
        }
        function sb() {
          return this._d.valueOf() - (this._offset || 0) * 6e4;
        }
        function ib() {
          return Math.floor(this.valueOf() / 1e3);
        }
        function ab() {
          return new Date(this.valueOf());
        }
        function ob() {
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
        function lb() {
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
        function cb() {
          return this.isValid() ? this.toISOString() : null;
        }
        function ub() {
          return E(this);
        }
        function db() {
          return y({}, b(this));
        }
        function fb() {
          return b(this).overflow;
        }
        function hb() {
          return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
          };
        }
        j("N", 0, 0, "eraAbbr"), j("NN", 0, 0, "eraAbbr"), j("NNN", 0, 0, "eraAbbr"), j("NNNN", 0, 0, "eraName"), j("NNNNN", 0, 0, "eraNarrow"), j("y", [
          "y",
          1
        ], "yo", "eraYear"), j("y", [
          "yy",
          2
        ], 0, "eraYear"), j("y", [
          "yyy",
          3
        ], 0, "eraYear"), j("y", [
          "yyyy",
          4
        ], 0, "eraYear"), ve("N", Uo), ve("NN", Uo), ve("NNN", Uo), ve("NNNN", kb), ve("NNNNN", xb), Ge([
          "N",
          "NN",
          "NNN",
          "NNNN",
          "NNNNN"
        ], function(o, u, h, p) {
          var w = h._locale.erasParse(o, p, h._strict);
          w ? b(h).era = w : b(h).invalidEra = o;
        }), ve("y", $r), ve("yy", $r), ve("yyy", $r), ve("yyyy", $r), ve("yo", Tb), Ge([
          "y",
          "yy",
          "yyy",
          "yyyy"
        ], xt), Ge([
          "yo"
        ], function(o, u, h, p) {
          var w;
          h._locale._eraYearOrdinalRegex && (w = o.match(h._locale._eraYearOrdinalRegex)), h._locale.eraYearOrdinalParse ? u[xt] = h._locale.eraYearOrdinalParse(o, w) : u[xt] = parseInt(o, 10);
        });
        function mb(o, u) {
          var h, p, w, A = this._eras || Rn("en")._eras;
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
        function pb(o, u, h) {
          var p, w, A = this.eras(), $, ge, Re;
          for (o = o.toUpperCase(), p = 0, w = A.length; p < w; ++p) if ($ = A[p].name.toUpperCase(), ge = A[p].abbr.toUpperCase(), Re = A[p].narrow.toUpperCase(), h) switch (u) {
            case "N":
            case "NN":
            case "NNN":
              if (ge === o) return A[p];
              break;
            case "NNNN":
              if ($ === o) return A[p];
              break;
            case "NNNNN":
              if (Re === o) return A[p];
              break;
          }
          else if ([
            $,
            ge,
            Re
          ].indexOf(o) >= 0) return A[p];
        }
        function gb(o, u) {
          var h = o.since <= o.until ? 1 : -1;
          return u === void 0 ? r(o.since).year() : r(o.since).year() + (u - o.offset) * h;
        }
        function yb() {
          var o, u, h, p = this.localeData().eras();
          for (o = 0, u = p.length; o < u; ++o) if (h = this.clone().startOf("day").valueOf(), p[o].since <= h && h <= p[o].until || p[o].until <= h && h <= p[o].since) return p[o].name;
          return "";
        }
        function vb() {
          var o, u, h, p = this.localeData().eras();
          for (o = 0, u = p.length; o < u; ++o) if (h = this.clone().startOf("day").valueOf(), p[o].since <= h && h <= p[o].until || p[o].until <= h && h <= p[o].since) return p[o].narrow;
          return "";
        }
        function bb() {
          var o, u, h, p = this.localeData().eras();
          for (o = 0, u = p.length; o < u; ++o) if (h = this.clone().startOf("day").valueOf(), p[o].since <= h && h <= p[o].until || p[o].until <= h && h <= p[o].since) return p[o].abbr;
          return "";
        }
        function wb() {
          var o, u, h, p, w = this.localeData().eras();
          for (o = 0, u = w.length; o < u; ++o) if (h = w[o].since <= w[o].until ? 1 : -1, p = this.clone().startOf("day").valueOf(), w[o].since <= p && p <= w[o].until || w[o].until <= p && p <= w[o].since) return (this.year() - r(w[o].since).year()) * h + w[o].offset;
          return this.year();
        }
        function Sb(o) {
          return l(this, "_erasNameRegex") || Bo.call(this), o ? this._erasNameRegex : this._erasRegex;
        }
        function _b(o) {
          return l(this, "_erasAbbrRegex") || Bo.call(this), o ? this._erasAbbrRegex : this._erasRegex;
        }
        function Db(o) {
          return l(this, "_erasNarrowRegex") || Bo.call(this), o ? this._erasNarrowRegex : this._erasRegex;
        }
        function Uo(o, u) {
          return u.erasAbbrRegex(o);
        }
        function kb(o, u) {
          return u.erasNameRegex(o);
        }
        function xb(o, u) {
          return u.erasNarrowRegex(o);
        }
        function Tb(o, u) {
          return u._eraYearOrdinalRegex || $r;
        }
        function Bo() {
          var o = [], u = [], h = [], p = [], w, A, $, ge, Re, Fe = this.eras();
          for (w = 0, A = Fe.length; w < A; ++w) $ = Mn(Fe[w].name), ge = Mn(Fe[w].abbr), Re = Mn(Fe[w].narrow), u.push($), o.push(ge), h.push(Re), p.push($), p.push(ge), p.push(Re);
          this._erasRegex = new RegExp("^(" + p.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + h.join("|") + ")", "i");
        }
        j(0, [
          "gg",
          2
        ], 0, function() {
          return this.weekYear() % 100;
        }), j(0, [
          "GG",
          2
        ], 0, function() {
          return this.isoWeekYear() % 100;
        });
        function qi(o, u) {
          j(0, [
            o,
            o.length
          ], 0, u);
        }
        qi("gggg", "weekYear"), qi("ggggg", "weekYear"), qi("GGGG", "isoWeekYear"), qi("GGGGG", "isoWeekYear"), ve("G", Li), ve("g", Li), ve("GG", Ke, Je), ve("gg", Ke, Je), ve("GGGG", Mo, Is), ve("gggg", Mo, Is), ve("GGGGG", Ni, Ii), ve("ggggg", Ni, Ii), Ns([
          "gggg",
          "ggggg",
          "GGGG",
          "GGGGG"
        ], function(o, u, h, p) {
          u[p.substr(0, 2)] = Le(o);
        }), Ns([
          "gg",
          "GG"
        ], function(o, u, h, p) {
          u[p] = r.parseTwoDigitYear(o);
        });
        function Mb(o) {
          return ed.call(this, o, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy);
        }
        function Eb(o) {
          return ed.call(this, o, this.isoWeek(), this.isoWeekday(), 1, 4);
        }
        function Cb() {
          return An(this.year(), 1, 4);
        }
        function Ab() {
          return An(this.isoWeekYear(), 1, 4);
        }
        function Rb() {
          var o = this.localeData()._week;
          return An(this.year(), o.dow, o.doy);
        }
        function Ob() {
          var o = this.localeData()._week;
          return An(this.weekYear(), o.dow, o.doy);
        }
        function ed(o, u, h, p, w) {
          var A;
          return o == null ? Hs(this, p, w).year : (A = An(o, p, w), u > A && (u = A), Ib.call(this, o, u, h, p, w));
        }
        function Ib(o, u, h, p, w) {
          var A = Ru(o, u, h, p, w), $ = Fs(A.year, 0, A.dayOfYear);
          return this.year($.getUTCFullYear()), this.month($.getUTCMonth()), this.date($.getUTCDate()), this;
        }
        j("Q", 0, "Qo", "quarter"), ve("Q", ut), Ge("Q", function(o, u) {
          u[En] = (Le(o) - 1) * 3;
        });
        function Pb(o) {
          return o == null ? Math.ceil((this.month() + 1) / 3) : this.month((o - 1) * 3 + this.month() % 3);
        }
        j("D", [
          "DD",
          2
        ], "Do", "date"), ve("D", Ke, Gr), ve("DD", Ke, Je), ve("Do", function(o, u) {
          return o ? u._dayOfMonthOrdinalParse || u._ordinalParse : u._dayOfMonthOrdinalParseLenient;
        }), Ge([
          "D",
          "DD"
        ], pn), Ge("Do", function(o, u) {
          u[pn] = Le(o.match(Ke)[0]);
        });
        var td = qr("Date", true);
        j("DDD", [
          "DDDD",
          3
        ], "DDDo", "dayOfYear"), ve("DDD", Pi), ve("DDDD", _r), Ge([
          "DDD",
          "DDDD"
        ], function(o, u, h) {
          h._dayOfYear = Le(o);
        });
        function Nb(o) {
          var u = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
          return o == null ? u : this.add(o - u, "d");
        }
        j("m", [
          "mm",
          2
        ], 0, "minute"), ve("m", Ke, Eo), ve("mm", Ke, Je), Ge([
          "m",
          "mm"
        ], Zt);
        var Lb = qr("Minutes", false);
        j("s", [
          "ss",
          2
        ], 0, "second"), ve("s", Ke, Eo), ve("ss", Ke, Je), Ge([
          "s",
          "ss"
        ], Cn);
        var Yb = qr("Seconds", false);
        j("S", 0, 0, function() {
          return ~~(this.millisecond() / 100);
        }), j(0, [
          "SS",
          2
        ], 0, function() {
          return ~~(this.millisecond() / 10);
        }), j(0, [
          "SSS",
          3
        ], 0, "millisecond"), j(0, [
          "SSSS",
          4
        ], 0, function() {
          return this.millisecond() * 10;
        }), j(0, [
          "SSSSS",
          5
        ], 0, function() {
          return this.millisecond() * 100;
        }), j(0, [
          "SSSSSS",
          6
        ], 0, function() {
          return this.millisecond() * 1e3;
        }), j(0, [
          "SSSSSSS",
          7
        ], 0, function() {
          return this.millisecond() * 1e4;
        }), j(0, [
          "SSSSSSSS",
          8
        ], 0, function() {
          return this.millisecond() * 1e5;
        }), j(0, [
          "SSSSSSSSS",
          9
        ], 0, function() {
          return this.millisecond() * 1e6;
        }), ve("S", Pi, ut), ve("SS", Pi, Je), ve("SSS", Pi, _r);
        var er, nd;
        for (er = "SSSS"; er.length <= 9; er += "S") ve(er, $r);
        function Fb(o, u) {
          u[Dr] = Le(("0." + o) * 1e3);
        }
        for (er = "S"; er.length <= 9; er += "S") Ge(er, Fb);
        nd = qr("Milliseconds", false), j("z", 0, 0, "zoneAbbr"), j("zz", 0, 0, "zoneName");
        function Hb() {
          return this._isUTC ? "UTC" : "";
        }
        function jb() {
          return this._isUTC ? "Coordinated Universal Time" : "";
        }
        var ae = I.prototype;
        ae.add = Ov, ae.calendar = Hv, ae.clone = jv, ae.diff = Gv, ae.endOf = rb, ae.format = Xv, ae.from = Jv, ae.fromNow = Kv, ae.to = eb, ae.toNow = tb, ae.get = Qg, ae.invalidAt = fb, ae.isAfter = Vv, ae.isBefore = Wv, ae.isBetween = Uv, ae.isSame = Bv, ae.isSameOrAfter = zv, ae.isSameOrBefore = $v, ae.isValid = ub, ae.lang = Zu, ae.locale = qu, ae.localeData = Qu, ae.max = uv, ae.min = cv, ae.parsingFlags = db, ae.set = Xg, ae.startOf = nb, ae.subtract = Iv, ae.toArray = ob, ae.toObject = lb, ae.toDate = ab, ae.toISOString = Zv, ae.inspect = Qv, typeof Symbol < "u" && Symbol.for != null && (ae[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = function() {
          return "Moment<" + this.format() + ">";
        }), ae.toJSON = cb, ae.toString = qv, ae.unix = ib, ae.valueOf = sb, ae.creationData = hb, ae.eraName = yb, ae.eraNarrow = vb, ae.eraAbbr = bb, ae.eraYear = wb, ae.year = ku, ae.isLeapYear = Zg, ae.weekYear = Mb, ae.isoWeekYear = Eb, ae.quarter = ae.quarters = Pb, ae.month = Cu, ae.daysInMonth = ay, ae.week = ae.weeks = my, ae.isoWeek = ae.isoWeeks = py, ae.weeksInYear = Rb, ae.weeksInWeekYear = Ob, ae.isoWeeksInYear = Cb, ae.isoWeeksInISOWeekYear = Ab, ae.date = td, ae.day = ae.days = Ey, ae.weekday = Cy, ae.isoWeekday = Ay, ae.dayOfYear = Nb, ae.hour = ae.hours = Yy, ae.minute = ae.minutes = Lb, ae.second = ae.seconds = Yb, ae.millisecond = ae.milliseconds = nd, ae.utcOffset = bv, ae.utc = Sv, ae.local = _v, ae.parseZone = Dv, ae.hasAlignedHourOffset = kv, ae.isDST = xv, ae.isLocal = Mv, ae.isUtcOffset = Ev, ae.isUtc = Uu, ae.isUTC = Uu, ae.zoneAbbr = Hb, ae.zoneName = jb, ae.dates = z("dates accessor is deprecated. Use date instead.", td), ae.months = z("months accessor is deprecated. Use month instead", Cu), ae.years = z("years accessor is deprecated. Use year instead", ku), ae.zone = z("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", wv), ae.isDSTShifted = z("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Tv);
        function Vb(o) {
          return et(o * 1e3);
        }
        function Wb() {
          return et.apply(null, arguments).parseZone();
        }
        function rd(o) {
          return o;
        }
        var Ve = P.prototype;
        Ve.calendar = ne, Ve.longDateFormat = he, Ve.invalidDate = q, Ve.ordinal = we, Ve.preparse = rd, Ve.postformat = rd, Ve.relativeTime = Ce, Ve.pastFuture = _e, Ve.set = x, Ve.eras = mb, Ve.erasParse = pb, Ve.erasConvertYear = gb, Ve.erasAbbrRegex = _b, Ve.erasNameRegex = Sb, Ve.erasNarrowRegex = Db, Ve.months = ny, Ve.monthsShort = ry, Ve.monthsParse = iy, Ve.monthsRegex = ly, Ve.monthsShortRegex = oy, Ve.week = uy, Ve.firstDayOfYear = hy, Ve.firstDayOfWeek = fy, Ve.weekdays = Dy, Ve.weekdaysMin = xy, Ve.weekdaysShort = ky, Ve.weekdaysParse = My, Ve.weekdaysRegex = Ry, Ve.weekdaysShortRegex = Oy, Ve.weekdaysMinRegex = Iy, Ve.isPM = Ny, Ve.meridiem = Fy;
        function Zi(o, u, h, p) {
          var w = Rn(), A = v().set(p, u);
          return w[h](A, o);
        }
        function sd(o, u, h) {
          if (f(o) && (u = o, o = void 0), o = o || "", u != null) return Zi(o, u, h, "month");
          var p, w = [];
          for (p = 0; p < 12; p++) w[p] = Zi(o, p, h, "month");
          return w;
        }
        function zo(o, u, h, p) {
          typeof o == "boolean" ? (f(u) && (h = u, u = void 0), u = u || "") : (u = o, h = u, o = false, f(u) && (h = u, u = void 0), u = u || "");
          var w = Rn(), A = o ? w._week.dow : 0, $, ge = [];
          if (h != null) return Zi(u, (h + A) % 7, p, "day");
          for ($ = 0; $ < 7; $++) ge[$] = Zi(u, ($ + A) % 7, p, "day");
          return ge;
        }
        function Ub(o, u) {
          return sd(o, u, "months");
        }
        function Bb(o, u) {
          return sd(o, u, "monthsShort");
        }
        function zb(o, u, h) {
          return zo(o, u, h, "weekdays");
        }
        function $b(o, u, h) {
          return zo(o, u, h, "weekdaysShort");
        }
        function Gb(o, u, h) {
          return zo(o, u, h, "weekdaysMin");
        }
        Kn("en", {
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
        }), r.lang = z("moment.lang is deprecated. Use moment.locale instead.", Kn), r.langData = z("moment.langData is deprecated. Use moment.localeData instead.", Rn);
        var On = Math.abs;
        function qb() {
          var o = this._data;
          return this._milliseconds = On(this._milliseconds), this._days = On(this._days), this._months = On(this._months), o.milliseconds = On(o.milliseconds), o.seconds = On(o.seconds), o.minutes = On(o.minutes), o.hours = On(o.hours), o.months = On(o.months), o.years = On(o.years), this;
        }
        function id(o, u, h, p) {
          var w = Qt(u, h);
          return o._milliseconds += p * w._milliseconds, o._days += p * w._days, o._months += p * w._months, o._bubble();
        }
        function Zb(o, u) {
          return id(this, o, u, 1);
        }
        function Qb(o, u) {
          return id(this, o, u, -1);
        }
        function ad(o) {
          return o < 0 ? Math.floor(o) : Math.ceil(o);
        }
        function Xb() {
          var o = this._milliseconds, u = this._days, h = this._months, p = this._data, w, A, $, ge, Re;
          return o >= 0 && u >= 0 && h >= 0 || o <= 0 && u <= 0 && h <= 0 || (o += ad($o(h) + u) * 864e5, u = 0, h = 0), p.milliseconds = o % 1e3, w = Ut(o / 1e3), p.seconds = w % 60, A = Ut(w / 60), p.minutes = A % 60, $ = Ut(A / 60), p.hours = $ % 24, u += Ut($ / 24), Re = Ut(od(u)), h += Re, u -= ad($o(Re)), ge = Ut(h / 12), h %= 12, p.days = u, p.months = h, p.years = ge, this;
        }
        function od(o) {
          return o * 4800 / 146097;
        }
        function $o(o) {
          return o * 146097 / 4800;
        }
        function Jb(o) {
          if (!this.isValid()) return NaN;
          var u, h, p = this._milliseconds;
          if (o = De(o), o === "month" || o === "quarter" || o === "year") switch (u = this._days + p / 864e5, h = this._months + od(u), o) {
            case "month":
              return h;
            case "quarter":
              return h / 3;
            case "year":
              return h / 12;
          }
          else switch (u = this._days + Math.round($o(this._months)), o) {
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
        function In(o) {
          return function() {
            return this.as(o);
          };
        }
        var ld = In("ms"), Kb = In("s"), ew = In("m"), tw = In("h"), nw = In("d"), rw = In("w"), sw = In("M"), iw = In("Q"), aw = In("y"), ow = ld;
        function lw() {
          return Qt(this);
        }
        function cw(o) {
          return o = De(o), this.isValid() ? this[o + "s"]() : NaN;
        }
        function xr(o) {
          return function() {
            return this.isValid() ? this._data[o] : NaN;
          };
        }
        var uw = xr("milliseconds"), dw = xr("seconds"), fw = xr("minutes"), hw = xr("hours"), mw = xr("days"), pw = xr("months"), gw = xr("years");
        function yw() {
          return Ut(this.days() / 7);
        }
        var Pn = Math.round, Jr = {
          ss: 44,
          s: 45,
          m: 45,
          h: 22,
          d: 26,
          w: null,
          M: 11
        };
        function vw(o, u, h, p, w) {
          return w.relativeTime(u || 1, !!h, o, p);
        }
        function bw(o, u, h, p) {
          var w = Qt(o).abs(), A = Pn(w.as("s")), $ = Pn(w.as("m")), ge = Pn(w.as("h")), Re = Pn(w.as("d")), Fe = Pn(w.as("M")), It = Pn(w.as("w")), Nn = Pn(w.as("y")), tr = A <= h.ss && [
            "s",
            A
          ] || A < h.s && [
            "ss",
            A
          ] || $ <= 1 && [
            "m"
          ] || $ < h.m && [
            "mm",
            $
          ] || ge <= 1 && [
            "h"
          ] || ge < h.h && [
            "hh",
            ge
          ] || Re <= 1 && [
            "d"
          ] || Re < h.d && [
            "dd",
            Re
          ];
          return h.w != null && (tr = tr || It <= 1 && [
            "w"
          ] || It < h.w && [
            "ww",
            It
          ]), tr = tr || Fe <= 1 && [
            "M"
          ] || Fe < h.M && [
            "MM",
            Fe
          ] || Nn <= 1 && [
            "y"
          ] || [
            "yy",
            Nn
          ], tr[2] = u, tr[3] = +o > 0, tr[4] = p, vw.apply(null, tr);
        }
        function ww(o) {
          return o === void 0 ? Pn : typeof o == "function" ? (Pn = o, true) : false;
        }
        function Sw(o, u) {
          return Jr[o] === void 0 ? false : u === void 0 ? Jr[o] : (Jr[o] = u, o === "s" && (Jr.ss = u - 1), true);
        }
        function _w(o, u) {
          if (!this.isValid()) return this.localeData().invalidDate();
          var h = false, p = Jr, w, A;
          return typeof o == "object" && (u = o, o = false), typeof o == "boolean" && (h = o), typeof u == "object" && (p = Object.assign({}, Jr, u), u.s != null && u.ss == null && (p.ss = u.s - 1)), w = this.localeData(), A = bw(this, !h, p, w), h && (A = w.pastFuture(+this, A)), w.postformat(A);
        }
        var Go = Math.abs;
        function Kr(o) {
          return (o > 0) - (o < 0) || +o;
        }
        function Qi() {
          if (!this.isValid()) return this.localeData().invalidDate();
          var o = Go(this._milliseconds) / 1e3, u = Go(this._days), h = Go(this._months), p, w, A, $, ge = this.asSeconds(), Re, Fe, It, Nn;
          return ge ? (p = Ut(o / 60), w = Ut(p / 60), o %= 60, p %= 60, A = Ut(h / 12), h %= 12, $ = o ? o.toFixed(3).replace(/\.?0+$/, "") : "", Re = ge < 0 ? "-" : "", Fe = Kr(this._months) !== Kr(ge) ? "-" : "", It = Kr(this._days) !== Kr(ge) ? "-" : "", Nn = Kr(this._milliseconds) !== Kr(ge) ? "-" : "", Re + "P" + (A ? Fe + A + "Y" : "") + (h ? Fe + h + "M" : "") + (u ? It + u + "D" : "") + (w || p || o ? "T" : "") + (w ? Nn + w + "H" : "") + (p ? Nn + p + "M" : "") + (o ? Nn + $ + "S" : "")) : "P0D";
        }
        var He = Ui.prototype;
        He.isValid = pv, He.abs = qb, He.add = Zb, He.subtract = Qb, He.as = Jb, He.asMilliseconds = ld, He.asSeconds = Kb, He.asMinutes = ew, He.asHours = tw, He.asDays = nw, He.asWeeks = rw, He.asMonths = sw, He.asQuarters = iw, He.asYears = aw, He.valueOf = ow, He._bubble = Xb, He.clone = lw, He.get = cw, He.milliseconds = uw, He.seconds = dw, He.minutes = fw, He.hours = hw, He.days = mw, He.weeks = yw, He.months = pw, He.years = gw, He.humanize = _w, He.toISOString = Qi, He.toString = Qi, He.toJSON = Qi, He.locale = qu, He.localeData = Qu, He.toIsoString = z("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Qi), He.lang = Zu, j("X", 0, 0, "unix"), j("x", 0, 0, "valueOf"), ve("x", Li), ve("X", Ug), Ge("X", function(o, u, h) {
          h._d = new Date(parseFloat(o) * 1e3);
        }), Ge("x", function(o, u, h) {
          h._d = new Date(Le(o));
        });
        return r.version = "2.30.1", s(et), r.fn = ae, r.min = dv, r.max = fv, r.now = hv, r.utc = v, r.unix = Vb, r.months = Ub, r.isDate = m, r.locale = Kn, r.invalid = R, r.duration = Qt, r.isMoment = O, r.weekdays = zb, r.parseZone = Wb, r.localeData = Rn, r.isDuration = Bi, r.monthsShort = Bb, r.weekdaysMin = Gb, r.defineLocale = Po, r.updateLocale = Wy, r.locales = Uy, r.weekdaysShort = $b, r.normalizeUnits = De, r.relativeTimeRounding = ww, r.relativeTimeThreshold = Sw, r.calendarFormat = Fv, r.prototype = ae, r.HTML5_FMT = {
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
    })(va)), va.exports;
  }
  var h1 = d1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(h1, (function(n) {
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
  var m1 = {
    exports: {}
  }, p1 = m1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(p1, (function(n) {
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
  var g1 = {
    exports: {}
  }, y1 = g1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(y1, (function(n) {
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
  var v1 = {
    exports: {}
  }, b1 = v1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(b1, (function(n) {
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
  var w1 = {
    exports: {}
  }, S1 = w1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(S1, (function(n) {
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
  var _1 = {
    exports: {}
  }, D1 = _1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(D1, (function(n) {
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
  var k1 = {
    exports: {}
  }, x1 = k1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(x1, (function(n) {
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
  var T1 = {
    exports: {}
  }, M1 = T1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(M1, (function(n) {
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
  var E1 = {
    exports: {}
  }, C1 = E1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(C1, (function(n) {
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
  var A1 = {
    exports: {}
  }, R1 = A1.exports;
  (function(t, e) {
    (function(n, r) {
      r(typeof fn == "function" ? Tn() : n.moment);
    })(R1, (function(n) {
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
  var iu = {
    exports: {}
  }, O1 = iu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(O1, (function() {
      var n = 1e3, r = 6e4, s = 36e5, i = "millisecond", a = "second", l = "minute", c = "hour", d = "day", f = "week", m = "month", g = "quarter", y = "year", v = "date", S = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, E = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(x) {
          var C = [
            "th",
            "st",
            "nd",
            "rd"
          ], P = x % 100;
          return "[" + x + (C[(P - 20) % 10] || C[P] || C[0]) + "]";
        }
      }, R = function(x, C, P) {
        var B = String(x);
        return !B || B.length >= C ? x : "" + Array(C + 1 - B.length).join(P) + x;
      }, k = {
        s: R,
        z: function(x) {
          var C = -x.utcOffset(), P = Math.abs(C), B = Math.floor(P / 60), H = P % 60;
          return (C <= 0 ? "+" : "-") + R(B, 2, "0") + ":" + R(H, 2, "0");
        },
        m: function x(C, P) {
          if (C.date() < P.date()) return -x(P, C);
          var B = 12 * (P.year() - C.year()) + (P.month() - C.month()), H = C.clone().add(B, m), ne = P - H < 0, W = C.clone().add(B + (ne ? -1 : 1), m);
          return +(-(B + (P - H) / (ne ? H - W : W - H)) || 0);
        },
        a: function(x) {
          return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
        },
        p: function(x) {
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
          }[x] || String(x || "").toLowerCase().replace(/s$/, "");
        },
        u: function(x) {
          return x === void 0;
        }
      }, T = "en", N = {};
      N[T] = E;
      var I = "$isDayjsObject", O = function(x) {
        return x instanceof te || !(!x || !x[I]);
      }, K = function x(C, P, B) {
        var H;
        if (!C) return T;
        if (typeof C == "string") {
          var ne = C.toLowerCase();
          N[ne] && (H = ne), P && (N[ne] = P, H = ne);
          var W = C.split("-");
          if (!H && W.length > 1) return x(W[0]);
        } else {
          var G = C.name;
          N[G] = C, H = G;
        }
        return !B && H && (T = H), H || !B && T;
      }, z = function(x, C) {
        if (O(x)) return x.clone();
        var P = typeof C == "object" ? C : {};
        return P.date = x, P.args = arguments, new te(P);
      }, L = k;
      L.l = K, L.i = O, L.w = function(x, C) {
        return z(x, {
          locale: C.$L,
          utc: C.$u,
          x: C.$x,
          $offset: C.$offset
        });
      };
      var te = (function() {
        function x(P) {
          this.$L = K(P.locale, null, true), this.parse(P), this.$x = this.$x || P.x || {}, this[I] = true;
        }
        var C = x.prototype;
        return C.parse = function(P) {
          this.$d = (function(B) {
            var H = B.date, ne = B.utc;
            if (H === null) return /* @__PURE__ */ new Date(NaN);
            if (L.u(H)) return /* @__PURE__ */ new Date();
            if (H instanceof Date) return new Date(H);
            if (typeof H == "string" && !/Z$/i.test(H)) {
              var W = H.match(b);
              if (W) {
                var G = W[2] - 1 || 0, ee = (W[7] || "0").substring(0, 3);
                return ne ? new Date(Date.UTC(W[1], G, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, ee)) : new Date(W[1], G, W[3] || 1, W[4] || 0, W[5] || 0, W[6] || 0, ee);
              }
            }
            return new Date(H);
          })(P), this.init();
        }, C.init = function() {
          var P = this.$d;
          this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
        }, C.$utils = function() {
          return L;
        }, C.isValid = function() {
          return this.$d.toString() !== S;
        }, C.isSame = function(P, B) {
          var H = z(P);
          return this.startOf(B) <= H && H <= this.endOf(B);
        }, C.isAfter = function(P, B) {
          return z(P) < this.startOf(B);
        }, C.isBefore = function(P, B) {
          return this.endOf(B) < z(P);
        }, C.$g = function(P, B, H) {
          return L.u(P) ? this[B] : this.set(H, P);
        }, C.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, C.valueOf = function() {
          return this.$d.getTime();
        }, C.startOf = function(P, B) {
          var H = this, ne = !!L.u(B) || B, W = L.p(P), G = function(X, ue) {
            var he = L.w(H.$u ? Date.UTC(H.$y, ue, X) : new Date(H.$y, ue, X), H);
            return ne ? he : he.endOf(d);
          }, ee = function(X, ue) {
            return L.w(H.toDate()[X].apply(H.toDate("s"), (ne ? [
              0,
              0,
              0,
              0
            ] : [
              23,
              59,
              59,
              999
            ]).slice(ue)), H);
          }, J = this.$W, ie = this.$M, j = this.$D, se = "set" + (this.$u ? "UTC" : "");
          switch (W) {
            case y:
              return ne ? G(1, 0) : G(31, 11);
            case m:
              return ne ? G(1, ie) : G(0, ie + 1);
            case f:
              var re = this.$locale().weekStart || 0, Q = (J < re ? J + 7 : J) - re;
              return G(ne ? j - Q : j + (6 - Q), ie);
            case d:
            case v:
              return ee(se + "Hours", 0);
            case c:
              return ee(se + "Minutes", 1);
            case l:
              return ee(se + "Seconds", 2);
            case a:
              return ee(se + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, C.endOf = function(P) {
          return this.startOf(P, false);
        }, C.$set = function(P, B) {
          var H, ne = L.p(P), W = "set" + (this.$u ? "UTC" : ""), G = (H = {}, H[d] = W + "Date", H[v] = W + "Date", H[m] = W + "Month", H[y] = W + "FullYear", H[c] = W + "Hours", H[l] = W + "Minutes", H[a] = W + "Seconds", H[i] = W + "Milliseconds", H)[ne], ee = ne === d ? this.$D + (B - this.$W) : B;
          if (ne === m || ne === y) {
            var J = this.clone().set(v, 1);
            J.$d[G](ee), J.init(), this.$d = J.set(v, Math.min(this.$D, J.daysInMonth())).$d;
          } else G && this.$d[G](ee);
          return this.init(), this;
        }, C.set = function(P, B) {
          return this.clone().$set(P, B);
        }, C.get = function(P) {
          return this[L.p(P)]();
        }, C.add = function(P, B) {
          var H, ne = this;
          P = Number(P);
          var W = L.p(B), G = function(ie) {
            var j = z(ne);
            return L.w(j.date(j.date() + Math.round(ie * P)), ne);
          };
          if (W === m) return this.set(m, this.$M + P);
          if (W === y) return this.set(y, this.$y + P);
          if (W === d) return G(1);
          if (W === f) return G(7);
          var ee = (H = {}, H[l] = r, H[c] = s, H[a] = n, H)[W] || 1, J = this.$d.getTime() + P * ee;
          return L.w(J, this);
        }, C.subtract = function(P, B) {
          return this.add(-1 * P, B);
        }, C.format = function(P) {
          var B = this, H = this.$locale();
          if (!this.isValid()) return H.invalidDate || S;
          var ne = P || "YYYY-MM-DDTHH:mm:ssZ", W = L.z(this), G = this.$H, ee = this.$m, J = this.$M, ie = H.weekdays, j = H.months, se = H.meridiem, re = function(ue, he, Se, q) {
            return ue && (ue[he] || ue(B, ne)) || Se[he].slice(0, q);
          }, Q = function(ue) {
            return L.s(G % 12 || 12, ue, "0");
          }, X = se || function(ue, he, Se) {
            var q = ue < 12 ? "AM" : "PM";
            return Se ? q.toLowerCase() : q;
          };
          return ne.replace(_, (function(ue, he) {
            return he || (function(Se) {
              switch (Se) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return L.s(B.$y, 4, "0");
                case "M":
                  return J + 1;
                case "MM":
                  return L.s(J + 1, 2, "0");
                case "MMM":
                  return re(H.monthsShort, J, j, 3);
                case "MMMM":
                  return re(j, J);
                case "D":
                  return B.$D;
                case "DD":
                  return L.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return re(H.weekdaysMin, B.$W, ie, 2);
                case "ddd":
                  return re(H.weekdaysShort, B.$W, ie, 3);
                case "dddd":
                  return ie[B.$W];
                case "H":
                  return String(G);
                case "HH":
                  return L.s(G, 2, "0");
                case "h":
                  return Q(1);
                case "hh":
                  return Q(2);
                case "a":
                  return X(G, ee, true);
                case "A":
                  return X(G, ee, false);
                case "m":
                  return String(ee);
                case "mm":
                  return L.s(ee, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return L.s(B.$s, 2, "0");
                case "SSS":
                  return L.s(B.$ms, 3, "0");
                case "Z":
                  return W;
              }
              return null;
            })(ue) || W.replace(":", "");
          }));
        }, C.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, C.diff = function(P, B, H) {
          var ne, W = this, G = L.p(B), ee = z(P), J = (ee.utcOffset() - this.utcOffset()) * r, ie = this - ee, j = function() {
            return L.m(W, ee);
          };
          switch (G) {
            case y:
              ne = j() / 12;
              break;
            case m:
              ne = j();
              break;
            case g:
              ne = j() / 3;
              break;
            case f:
              ne = (ie - J) / 6048e5;
              break;
            case d:
              ne = (ie - J) / 864e5;
              break;
            case c:
              ne = ie / s;
              break;
            case l:
              ne = ie / r;
              break;
            case a:
              ne = ie / n;
              break;
            default:
              ne = ie;
          }
          return H ? ne : L.a(ne);
        }, C.daysInMonth = function() {
          return this.endOf(m).$D;
        }, C.$locale = function() {
          return N[this.$L];
        }, C.locale = function(P, B) {
          if (!P) return this.$L;
          var H = this.clone(), ne = K(P, B, true);
          return ne && (H.$L = ne), H;
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
        }, x;
      })(), Z = te.prototype;
      return z.prototype = Z, [
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
      ].forEach((function(x) {
        Z[x[1]] = function(C) {
          return this.$g(C, x[0], x[1]);
        };
      })), z.extend = function(x, C) {
        return x.$i || (x(C, te, z), x.$i = true), z;
      }, z.locale = K, z.isDayjs = O, z.unix = function(x) {
        return z(1e3 * x);
      }, z.en = N[T], z.Ls = N, z.p = {}, z;
    }));
  })(iu);
  var I1 = iu.exports;
  const gt = Vr(I1), $s = (t, e) => t.length !== e.length ? false : e.every((n) => t.includes(n)), P1 = ({ openTo: t, defaultOpenTo: e, views: n, defaultViews: r }) => {
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
  }, Yf = (t, e, n) => {
    let r = e;
    return r = t.setHours(r, t.getHours(n)), r = t.setMinutes(r, t.getMinutes(n)), r = t.setSeconds(r, t.getSeconds(n)), r = t.setMilliseconds(r, t.getMilliseconds(n)), r;
  }, N1 = (t, e) => e == null || !t.isValid(e) ? null : e, L1 = (t, e, n) => !t.isValid(e) && e != null && !t.isValid(n) && n != null ? true : t.isEqual(e, n), ng = (t, e) => {
    const r = [
      t.startOfYear(e)
    ];
    for (; r.length < 12; ) {
      const s = r[r.length - 1];
      r.push(t.addMonths(s, 1));
    }
    return r;
  }, au = (t, e, n) => n === "date" ? t.startOfDay(t.date(void 0, e)) : t.date(void 0, e), ur = (t, e) => {
    const n = t.setHours(t.date(), e === "am" ? 2 : 14);
    return t.format(n, "meridiem");
  }, rg = [
    "hours",
    "minutes",
    "seconds"
  ], vi = (t) => rg.includes(t), Y1 = (t) => rg.includes(t) || t === "meridiem", F1 = (t, e) => t ? e.getHours(t) >= 12 ? "pm" : "am" : null, bi = (t, e, n) => n && (t >= 12 ? "pm" : "am") !== e ? e === "am" ? t - 12 : t + 12 : t, H1 = (t, e, n, r) => {
    const s = bi(r.getHours(t), e, n);
    return r.setHours(t, s);
  }, Ff = (t, e) => e.getHours(t) * 3600 + e.getMinutes(t) * 60 + e.getSeconds(t), Ri = (t, e) => (n, r) => t ? e.isAfter(n, r) : Ff(n, e) > Ff(r, e), sg = (t, { format: e, views: n, ampm: r }) => {
    if (e != null) return e;
    const s = t.formats;
    return $s(n, [
      "hours"
    ]) ? r ? `${s.hours12h} ${s.meridiem}` : s.hours24h : $s(n, [
      "minutes"
    ]) ? s.minutes : $s(n, [
      "seconds"
    ]) ? s.seconds : $s(n, [
      "minutes",
      "seconds"
    ]) ? `${s.minutes}:${s.seconds}` : $s(n, [
      "hours",
      "minutes",
      "seconds"
    ]) ? r ? `${s.hours12h}:${s.minutes}:${s.seconds} ${s.meridiem}` : `${s.hours24h}:${s.minutes}:${s.seconds}` : r ? `${s.hours12h}:${s.minutes} ${s.meridiem}` : `${s.hours24h}:${s.minutes}`;
  }, nr = {
    year: 1,
    month: 2,
    day: 3,
    hours: 4,
    minutes: 5,
    seconds: 6,
    milliseconds: 7
  }, j1 = (t) => Math.max(...t.map((e) => nr[e.type] ?? 1)), Gs = (t, e, n) => {
    if (e === nr.year) return t.startOfYear(n);
    if (e === nr.month) return t.startOfMonth(n);
    if (e === nr.day) return t.startOfDay(n);
    let r = n;
    return e < nr.minutes && (r = t.setMinutes(r, 0)), e < nr.seconds && (r = t.setSeconds(r, 0)), e < nr.milliseconds && (r = t.setMilliseconds(r, 0)), r;
  }, V1 = ({ props: t, utils: e, granularity: n, timezone: r, getTodayDate: s }) => {
    let i = s ? s() : Gs(e, n, au(e, r));
    t.minDate != null && e.isAfterDay(t.minDate, i) && (i = Gs(e, n, t.minDate)), t.maxDate != null && e.isBeforeDay(t.maxDate, i) && (i = Gs(e, n, t.maxDate));
    const a = Ri(t.disableIgnoringDatePartForTimeValidation ?? false, e);
    return t.minTime != null && a(t.minTime, i) && (i = Gs(e, n, t.disableIgnoringDatePartForTimeValidation ? t.minTime : Yf(e, i, t.minTime))), t.maxTime != null && a(i, t.maxTime) && (i = Gs(e, n, t.disableIgnoringDatePartForTimeValidation ? t.maxTime : Yf(e, i, t.maxTime))), i;
  }, ig = (t, e) => {
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
  }, W1 = (t) => {
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
  }, _o = (t, e) => {
    const n = [], r = t.date(void 0, "default"), s = t.startOfWeek(r), i = t.endOfWeek(r);
    let a = s;
    for (; t.isBefore(a, i); ) n.push(a), a = t.addDays(a, 1);
    return n.map((l) => t.formatByString(l, e));
  }, ag = (t, e, n, r) => {
    switch (n) {
      case "month":
        return ng(t, t.date(void 0, e)).map((s) => t.formatByString(s, r));
      case "weekDay":
        return _o(t, r);
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
  }, Hf = "s", U1 = [
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
  ], B1 = (t) => {
    const e = t.date(void 0);
    return t.formatByString(t.setSeconds(e, 0), Hf) === "0" ? U1 : Array.from({
      length: 10
    }).map((r, s) => t.formatByString(t.setSeconds(e, s), Hf));
  }, jr = (t, e) => {
    if (e[0] === "0") return t;
    const n = [];
    let r = "";
    for (let s = 0; s < t.length; s += 1) {
      r += t[s];
      const i = e.indexOf(r);
      i > -1 && (n.push(i.toString()), r = "");
    }
    return n.join("");
  }, ou = (t, e) => e[0] === "0" ? t : t.split("").map((n) => e[Number(n)]).join(""), jf = (t, e) => {
    const n = jr(t, e);
    return n !== " " && !Number.isNaN(Number(n));
  }, og = (t, e) => {
    let n = t;
    for (n = Number(n).toString(); n.length < e; ) n = `0${n}`;
    return n;
  }, lg = (t, e, n, r, s) => {
    if (s.type === "day" && s.contentType === "digit-with-letter") {
      const a = t.setDate(n.longestMonth, e);
      return t.formatByString(a, s.format);
    }
    let i = e.toString();
    return s.hasLeadingZerosInInput && (i = og(i, s.maxLength)), ou(i, r);
  }, z1 = (t, e, n, r, s, i, a, l) => {
    const c = W1(r), d = r === "Home", f = r === "End", m = n.value === "" || d || f, g = () => {
      const v = s[n.type]({
        currentDate: a,
        format: n.format,
        contentType: n.contentType
      }), S = (E) => lg(t, E, v, i, n), b = n.type === "minutes" && (l == null ? void 0 : l.minutesStep) ? l.minutesStep : 1;
      let _;
      if (m) {
        if (n.type === "year" && !f && !d) return t.formatByString(t.date(void 0, e), n.format);
        c > 0 || d ? _ = v.minimum : _ = v.maximum;
      } else _ = parseInt(jr(n.value, i), 10) + c * b;
      return _ % b !== 0 && ((c < 0 || d) && (_ += b - (b + _) % b), (c > 0 || f) && (_ -= _ % b)), _ > v.maximum ? S(v.minimum + (_ - v.maximum - 1) % (v.maximum - v.minimum + 1)) : _ < v.minimum ? S(v.maximum - (v.minimum - _ - 1) % (v.maximum - v.minimum + 1)) : S(_);
    }, y = () => {
      const v = ag(t, e, n.type, n.format);
      if (v.length === 0) return n.value;
      if (m) return c > 0 || d ? v[0] : v[v.length - 1];
      const _ = ((v.indexOf(n.value) + c) % v.length + v.length) % v.length;
      return v[_];
    };
    return n.contentType === "digit" || n.contentType === "digit-with-letter" ? g() : y();
  }, lu = (t, e, n) => {
    let r = t.value || t.placeholder;
    const s = e === "non-input" ? t.hasLeadingZerosInFormat : t.hasLeadingZerosInInput;
    return e === "non-input" && t.hasLeadingZerosInInput && !t.hasLeadingZerosInFormat && (r = Number(jr(r, n)).toString()), [
      "input-rtl",
      "input-ltr"
    ].includes(e) && t.contentType === "digit" && !s && r.length === 1 && (r = `${r}\u200E`), e === "input-rtl" && (r = `\u2068${r}\u2069`), r;
  }, Vf = (t, e, n, r) => t.formatByString(t.parse(e, n), r), $1 = (t, e) => t.formatByString(t.date(void 0, "system"), e).length === 4, cg = (t, e, n, r) => {
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
  }, G1 = (t, e, n) => {
    const r = e.some((c) => c.type === "day"), s = [], i = [];
    for (let c = 0; c < e.length; c += 1) {
      const d = e[c];
      r && d.type === "weekDay" || (s.push(d.format), i.push(lu(d, "non-input", n)));
    }
    const a = s.join(" "), l = i.join(" ");
    return t.parse(l, a);
  }, q1 = (t) => t.map((e) => `${e.startSeparator}${e.value || e.placeholder}${e.endSeparator}`).join(""), Z1 = (t, e, n) => {
    const s = t.map((i) => {
      const a = lu(i, n ? "input-rtl" : "input-ltr", e);
      return `${i.startSeparator}${a}${i.endSeparator}`;
    }).join("");
    return n ? `\u2066${s}\u2069` : s;
  }, Q1 = (t, e, n) => {
    const r = t.date(void 0, n), s = t.endOfYear(r), i = t.endOfDay(r), { maxDaysInMonth: a, longestMonth: l } = ng(t, r).reduce((c, d) => {
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
        maximum: $1(t, c) ? 9999 : 99
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
          const f = _o(t, c).map(Number);
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
        return jr(t.formatByString(t.endOfDay(r), c), e) !== d.toString() ? {
          minimum: 1,
          maximum: Number(jr(t.formatByString(t.startOfDay(r), c), e))
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
  }, X1 = (t, e, n, r) => {
    switch (e.type) {
      case "year":
        return t.setYear(r, t.getYear(n));
      case "month":
        return t.setMonth(r, t.getMonth(n));
      case "weekDay": {
        const s = _o(t, e.format), i = t.formatByString(n, e.format), a = s.indexOf(i), c = s.indexOf(e.value) - a;
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
  }, Wf = {
    year: 1,
    month: 2,
    day: 3,
    weekDay: 4,
    hours: 5,
    minutes: 6,
    seconds: 7,
    meridiem: 8,
    empty: 9
  }, Uf = (t, e, n, r, s) => [
    ...n
  ].sort((i, a) => Wf[i.type] - Wf[a.type]).reduce((i, a) => !s || a.modified ? X1(t, a, e, i) : i, r), J1 = () => navigator.userAgent.toLowerCase().includes("android"), K1 = (t, e) => {
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
  }, Jl = (t, e) => {
    if (t == null) return null;
    if (t === "all") return "all";
    if (typeof t == "string") {
      const n = e.findIndex((r) => r.type === t);
      return n === -1 ? null : n;
    }
    return t;
  }, eO = (t, e) => {
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
  }, tO = (t, e) => {
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
  }, nO = [
    "value",
    "referenceDate"
  ], wr = {
    emptyValue: null,
    getTodayValue: au,
    getInitialReferenceValue: (t) => {
      let { value: e, referenceDate: n } = t, r = Ne(t, nO);
      return e != null && r.utils.isValid(e) ? e : n ?? V1(r);
    },
    cleanValue: N1,
    areValuesEqual: L1,
    isSameError: (t, e) => t === e,
    hasError: (t) => t != null,
    defaultErrorState: null,
    getTimezone: (t, e) => e == null || !t.isValid(e) ? null : t.getTimezone(e),
    setTimezone: (t, e, n) => n == null ? null : t.setTimezone(n, e)
  }, rO = {
    updateReferenceValue: (t, e, n) => e == null || !t.isValid(e) ? n : e,
    getSectionsFromValue: (t, e, n, r) => !t.isValid(e) && !!n ? n : r(e),
    getV7HiddenInputValueFromSections: q1,
    getV6InputValueFromSections: Z1,
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
  }, Do = ({ adapter: t, value: e, timezone: n, props: r }) => {
    if (e === null) return null;
    const { minTime: s, maxTime: i, minutesStep: a, shouldDisableTime: l, disableIgnoringDatePartForTimeValidation: c = false, disablePast: d, disableFuture: f } = r, m = t.utils.date(void 0, n), g = Ri(c, t.utils);
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
  Do.valueManager = wr;
  const sO = [
    "disablePast",
    "disableFuture",
    "minDate",
    "maxDate",
    "shouldDisableDate",
    "shouldDisableMonth",
    "shouldDisableYear"
  ], ug = [
    "disablePast",
    "disableFuture",
    "minTime",
    "maxTime",
    "shouldDisableTime",
    "minutesStep",
    "ampm",
    "disableIgnoringDatePartForTimeValidation"
  ], iO = [
    "minDateTime",
    "maxDateTime"
  ], aO = [
    ...sO,
    ...ug,
    ...iO
  ], dg = (t) => aO.reduce((e, n) => (t.hasOwnProperty(n) && (e[n] = t[n]), e), {}), oO = [
    "localeText"
  ], Kl = Y.createContext(null), fg = function(e) {
    const { localeText: n } = e, r = Ne(e, oO), { utils: s, localeText: i } = Y.useContext(Kl) ?? {
      utils: void 0,
      localeText: void 0
    }, a = lt({
      props: r,
      name: "MuiLocalizationProvider"
    }), { children: l, dateAdapter: c, dateFormats: d, dateLibInstance: f, adapterLocale: m, localeText: g } = a, y = Y.useMemo(() => F({}, g, i, n), [
      g,
      i,
      n
    ]), v = Y.useMemo(() => {
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
    ]), S = Y.useMemo(() => v ? {
      minDate: v.date("1900-01-01T00:00:00.000"),
      maxDate: v.date("2099-12-31T00:00:00.000")
    } : null, [
      v
    ]), b = Y.useMemo(() => ({
      utils: v,
      defaultDates: S,
      localeText: y
    }), [
      S,
      v,
      y
    ]);
    return D.jsx(Kl.Provider, {
      value: b,
      children: l
    });
  }, lO = (t) => ({
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: F({}, t)
        }
      }
    }
  }), hg = (t) => {
    const { utils: e, formatKey: n, contextTranslation: r, propsTranslation: s } = t;
    return (i) => {
      const a = i !== null && e.isValid(i) ? e.format(i, n) : null;
      return (s ?? r)(i, e, a);
    };
  }, mg = {
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
  }, cO = mg;
  lO(mg);
  const Oi = () => {
    const t = Y.useContext(Kl);
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
    const e = Y.useMemo(() => F({}, cO, t.localeText), [
      t.localeText
    ]);
    return Y.useMemo(() => F({}, t, {
      localeText: e
    }), [
      t,
      e
    ]);
  }, kt = () => Oi().utils, cu = (t) => {
    const e = kt(), n = Y.useRef(void 0);
    return n.current === void 0 && (n.current = e.date(void 0, t)), n.current;
  };
  function pg(t) {
    const { props: e, validator: n, value: r, timezone: s, onError: i } = t, a = Oi(), l = Y.useRef(n.valueManager.defaultErrorState), c = n({
      adapter: a,
      value: r,
      timezone: s,
      props: e
    }), d = n.valueManager.hasError(c);
    Y.useEffect(() => {
      i && !n.valueManager.isSameError(c, l.current) && i(c, r), l.current = c;
    }, [
      n,
      i,
      c,
      r
    ]);
    const f = Ae((m) => n({
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
  const hn = () => Oi().localeText, uO = ({ utils: t, format: e }) => {
    let n = 10, r = e, s = t.expandFormat(e);
    for (; s !== r; ) if (r = s, s = t.expandFormat(r), n -= 1, n < 0) throw new Error("MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the picker component.");
    return s;
  }, dO = ({ utils: t, expandedFormat: e }) => {
    const n = [], { start: r, end: s } = t.escapedCharacters, i = new RegExp(`(\\${r}[^\\${s}]*\\${s})+`, "g");
    let a = null;
    for (; a = i.exec(e); ) n.push({
      start: a.index,
      end: i.lastIndex - 1
    });
    return n;
  }, fO = (t, e, n, r) => {
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
  }, hO = ({ utils: t, date: e, shouldRespectLeadingZeros: n, localeText: r, localizedDigits: s, now: i, token: a, startSeparator: l }) => {
    if (a === "") throw new Error("MUI X: Should not call `commitToken` with an empty token");
    const c = ig(t, a), d = cg(t, c.contentType, c.type, a), f = n ? d : c.contentType === "digit", m = e != null && t.isValid(e);
    let g = m ? t.formatByString(e, a) : "", y = null;
    if (f) if (d) y = g === "" ? t.formatByString(i, a).length : g.length;
    else {
      if (c.maxLength == null) throw new Error(`MUI X: The token ${a} should have a 'maxDigitNumber' property on it's adapter`);
      y = c.maxLength, m && (g = ou(og(jr(g, s), y), s));
    }
    return F({}, c, {
      format: a,
      maxLength: y,
      value: g,
      placeholder: fO(t, r, c, a),
      hasLeadingZerosInFormat: d,
      hasLeadingZerosInInput: f,
      startSeparator: l,
      endSeparator: "",
      modified: false
    });
  }, mO = (t) => {
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
          b = b.slice(_.length), i.push(hO(F({}, t, {
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
  }, pO = ({ isRtl: t, formatDensity: e, sections: n }) => n.map((r) => {
    const s = (i) => {
      let a = i;
      return t && a !== null && a.includes(" ") && (a = `\u2069${a}\u2066`), e === "spacious" && [
        "/",
        ".",
        "-"
      ].includes(a) && (a = ` ${a} `), a;
    };
    return r.startSeparator = s(r.startSeparator), r.endSeparator = s(r.endSeparator), r;
  }), Bf = (t) => {
    let e = uO(t);
    t.isRtl && t.enableAccessibleFieldDOMStructure && (e = e.split(" ").reverse().join(" "));
    const n = dO(F({}, t, {
      expandedFormat: e
    })), r = mO(F({}, t, {
      expandedFormat: e,
      escapedParts: n
    }));
    return pO(F({}, t, {
      sections: r
    }));
  }, uu = ({ timezone: t, value: e, defaultValue: n, referenceDate: r, onChange: s, valueManager: i }) => {
    const a = kt(), l = Y.useRef(n), c = e ?? l.current ?? i.emptyValue, d = Y.useMemo(() => i.getTimezone(a, c), [
      a,
      i,
      c
    ]), f = Ae((v) => d == null ? v : i.setTimezone(a, d, v));
    let m;
    t ? m = t : d ? m = d : r ? m = a.getTimezone(r) : m = "default";
    const g = Y.useMemo(() => i.setTimezone(a, m, c), [
      i,
      a,
      m,
      c
    ]), y = Ae((v, ...S) => {
      const b = f(v);
      s == null ? void 0 : s(b, ...S);
    });
    return {
      value: g,
      handleValueChange: y,
      timezone: m
    };
  }, du = ({ name: t, timezone: e, value: n, defaultValue: r, referenceDate: s, onChange: i, valueManager: a }) => {
    const [l, c] = ba({
      name: t,
      state: "value",
      controlled: n,
      default: r ?? a.emptyValue
    }), d = Ae((f, ...m) => {
      c(f), i == null ? void 0 : i(f, ...m);
    });
    return uu({
      timezone: e,
      value: l,
      defaultValue: void 0,
      referenceDate: s,
      onChange: d,
      valueManager: a
    });
  }, gO = (t) => {
    const e = kt(), n = hn(), r = Oi(), s = gr(), { valueManager: i, fieldValueManager: a, valueType: l, validator: c, internalProps: d, internalProps: { value: f, defaultValue: m, referenceDate: g, onChange: y, format: v, formatDensity: S = "dense", selectedSections: b, onSelectedSectionsChange: _, shouldRespectLeadingZeros: E = false, timezone: R, enableAccessibleFieldDOMStructure: k = false } } = t, { timezone: T, value: N, handleValueChange: I } = uu({
      timezone: R,
      value: f,
      defaultValue: m,
      referenceDate: g,
      onChange: y,
      valueManager: i
    }), O = Y.useMemo(() => B1(e), [
      e
    ]), K = Y.useMemo(() => Q1(e, O, T), [
      e,
      O,
      T
    ]), z = Y.useCallback((j, se = null) => a.getSectionsFromValue(e, j, se, (re) => Bf({
      utils: e,
      localeText: n,
      localizedDigits: O,
      format: v,
      date: re,
      formatDensity: S,
      shouldRespectLeadingZeros: E,
      enableAccessibleFieldDOMStructure: k,
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
      k
    ]), [L, te] = Y.useState(() => {
      const j = z(N), se = {
        sections: j,
        value: N,
        referenceValue: i.emptyValue,
        tempValueStrAndroid: null
      }, re = j1(j), Q = i.getInitialReferenceValue({
        referenceDate: g,
        value: N,
        utils: e,
        props: d,
        granularity: re,
        timezone: T
      });
      return F({}, se, {
        referenceValue: Q
      });
    }), [Z, x] = ba({
      controlled: b,
      default: null,
      name: "useField",
      state: "selectedSections"
    }), C = (j) => {
      x(j), _ == null ? void 0 : _(j);
    }, P = Y.useMemo(() => Jl(Z, L.sections), [
      Z,
      L.sections
    ]), B = P === "all" ? 0 : P, H = ({ value: j, referenceValue: se, sections: re }) => {
      if (te((X) => F({}, X, {
        sections: re,
        value: j,
        referenceValue: se,
        tempValueStrAndroid: null
      })), i.areValuesEqual(e, L.value, j)) return;
      const Q = {
        validationError: c({
          adapter: r,
          value: j,
          timezone: T,
          props: d
        })
      };
      I(j, Q);
    }, ne = (j, se) => {
      const re = [
        ...L.sections
      ];
      return re[j] = F({}, re[j], {
        value: se,
        modified: true
      }), re;
    }, W = () => {
      H({
        value: i.emptyValue,
        referenceValue: L.referenceValue,
        sections: z(i.emptyValue)
      });
    }, G = () => {
      if (B == null) return;
      const j = L.sections[B], se = a.getActiveDateManager(e, L, j), Q = se.getSections(L.sections).filter((Se) => Se.value !== "").length === (j.value === "" ? 0 : 1), X = ne(B, ""), ue = Q ? null : e.getInvalidDate(), he = se.getNewValuesFromNewActiveDate(ue);
      H(F({}, he, {
        sections: X
      }));
    }, ee = (j) => {
      const se = (X, ue) => {
        const he = e.parse(X, v);
        if (he == null || !e.isValid(he)) return null;
        const Se = Bf({
          utils: e,
          localeText: n,
          localizedDigits: O,
          format: v,
          date: he,
          formatDensity: S,
          shouldRespectLeadingZeros: E,
          enableAccessibleFieldDOMStructure: k,
          isRtl: s
        });
        return Uf(e, he, Se, ue, false);
      }, re = a.parseValueStr(j, L.referenceValue, se), Q = a.updateReferenceValue(e, re, L.referenceValue);
      H({
        value: re,
        referenceValue: Q,
        sections: z(re, L.sections)
      });
    }, J = ({ activeSection: j, newSectionValue: se, shouldGoToNextSection: re }) => {
      re && B < L.sections.length - 1 && C(B + 1);
      const Q = a.getActiveDateManager(e, L, j), X = ne(B, se), ue = Q.getSections(X), he = G1(e, ue, O);
      let Se, q;
      if (he != null && e.isValid(he)) {
        const ce = Uf(e, he, ue, Q.referenceDate, true);
        Se = Q.getNewValuesFromNewActiveDate(ce), q = true;
      } else Se = Q.getNewValuesFromNewActiveDate(he), q = (he != null && !e.isValid(he)) != (Q.date != null && !e.isValid(Q.date));
      return q ? H(F({}, Se, {
        sections: X
      })) : te((ce) => F({}, ce, Se, {
        sections: X,
        tempValueStrAndroid: null
      }));
    }, ie = (j) => te((se) => F({}, se, {
      tempValueStrAndroid: j
    }));
    return Y.useEffect(() => {
      const j = z(L.value);
      te((se) => F({}, se, {
        sections: j
      }));
    }, [
      v,
      e.locale,
      s
    ]), Y.useEffect(() => {
      let j;
      i.areValuesEqual(e, L.value, N) ? j = i.getTimezone(e, L.value) !== i.getTimezone(e, N) : j = true, j && te((se) => F({}, se, {
        value: N,
        referenceValue: a.updateReferenceValue(e, N, se.referenceValue),
        sections: z(N)
      }));
    }, [
      N
    ]), {
      state: L,
      activeSectionIndex: B,
      parsedSelectedSections: P,
      setSelectedSections: C,
      clearValue: W,
      clearActiveSection: G,
      updateSectionValue: J,
      updateValueFromValueStr: ee,
      setTempAndroidValueStr: ie,
      getSectionsFromValue: z,
      sectionsValueBoundaries: K,
      localizedDigits: O,
      timezone: T
    };
  }, yO = 5e3, rs = (t) => t.saveQuery != null, vO = ({ sections: t, updateSectionValue: e, sectionsValueBoundaries: n, localizedDigits: r, setTempAndroidValueStr: s, timezone: i }) => {
    const a = kt(), [l, c] = Y.useState(null), d = Ae(() => c(null));
    Y.useEffect(() => {
      var _a2;
      l != null && ((_a2 = t[l.sectionIndex]) == null ? void 0 : _a2.type) !== l.sectionType && d();
    }, [
      t,
      l,
      d
    ]), Y.useEffect(() => {
      if (l != null) {
        const v = setTimeout(() => d(), yO);
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
        const T = `${l.value}${E}`, N = b(T, R);
        if (!rs(N)) return c({
          sectionIndex: S,
          value: T,
          sectionType: R.type
        }), N;
      }
      const k = b(E, R);
      return rs(k) && !k.saveQuery ? (d(), null) : (c({
        sectionIndex: S,
        value: E,
        sectionType: R.type
      }), rs(k) ? null : k);
    }, m = (v) => {
      const S = (E, R, k) => {
        const T = R.filter((N) => N.toLowerCase().startsWith(k));
        return T.length === 0 ? {
          saveQuery: false
        } : {
          sectionValue: T[0],
          shouldGoToNextSection: T.length === 1
        };
      }, b = (E, R, k, T) => {
        const N = (I) => ag(a, i, R.type, I);
        if (R.contentType === "letter") return S(R.format, N(R.format), E);
        if (k && T != null && ig(a, k).contentType === "letter") {
          const I = N(k), O = S(k, I, E);
          return rs(O) ? {
            saveQuery: false
          } : F({}, O, {
            sectionValue: T(O.sectionValue, I)
          });
        }
        return {
          saveQuery: false
        };
      };
      return f(v, (E, R) => {
        switch (R.type) {
          case "month": {
            const k = (T) => Vf(a, T, a.formats.month, R.format);
            return b(E, R, a.formats.month, k);
          }
          case "weekDay": {
            const k = (T, N) => N.indexOf(T).toString();
            return b(E, R, a.formats.weekday, k);
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
        const R = jr(_, r), k = Number(R), T = n[E.type]({
          currentDate: null,
          format: E.format,
          contentType: E.contentType
        });
        if (k > T.maximum) return {
          saveQuery: false
        };
        if (k < T.minimum) return {
          saveQuery: true
        };
        const N = k * 10 > T.maximum || R.length === T.maximum.toString().length;
        return {
          sectionValue: lg(a, k, T, r, E),
          shouldGoToNextSection: N
        };
      };
      return f(v, (_, E) => {
        if (E.contentType === "digit" || E.contentType === "digit-with-letter") return S(_, E);
        if (E.type === "month") {
          cg(a, "digit", "month", "MM");
          const R = S(_, {
            type: E.type,
            format: "MM",
            hasLeadingZerosInInput: true,
            contentType: "digit",
            maxLength: 2
          });
          if (rs(R)) return R;
          const k = Vf(a, R.sectionValue, "MM", E.format);
          return F({}, R, {
            sectionValue: k
          });
        }
        if (E.type === "weekDay") {
          const R = S(_, E);
          if (rs(R)) return R;
          const k = _o(a, E.format)[Number(R.sectionValue) - 1];
          return F({}, R, {
            sectionValue: k
          });
        }
        return {
          saveQuery: false
        };
      }, (_) => jf(_, r));
    };
    return {
      applyCharacterEditing: Ae((v) => {
        const S = t[v.sectionIndex], _ = jf(v.keyPressed, r) ? g(F({}, v, {
          keyPressed: ou(v.keyPressed, r)
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
  };
  function as(t, e) {
    return Array.isArray(e) ? e.every((n) => t.indexOf(n) !== -1) : t.indexOf(e) !== -1;
  }
  const bO = (t, e) => (n) => {
    (n.key === "Enter" || n.key === " ") && (t(n), n.preventDefault(), n.stopPropagation());
  }, Nt = (t = document) => {
    const e = t.activeElement;
    return e ? e.shadowRoot ? Nt(e.shadowRoot) : e : null;
  }, $a = (t) => Array.from(t.children).indexOf(Nt(document)), wO = "@media (pointer: fine)", SO = (t) => {
    const { internalProps: { disabled: e, readOnly: n = false }, forwardedProps: { sectionListRef: r, onBlur: s, onClick: i, onFocus: a, onInput: l, onPaste: c, focused: d, autoFocus: f = false }, fieldValueManager: m, applyCharacterEditing: g, resetCharacterQuery: y, setSelectedSections: v, parsedSelectedSections: S, state: b, clearActiveSection: _, clearValue: E, updateSectionValue: R, updateValueFromValueStr: k, sectionOrder: T, areAllSectionsEmpty: N, sectionsValueBoundaries: I } = t, O = Y.useRef(null), K = $t(r, O), z = hn(), L = kt(), te = _i(), [Z, x] = Y.useState(false), C = Y.useMemo(() => ({
      syncSelectionToDOM: () => {
        if (!O.current) return;
        const q = document.getSelection();
        if (!q) return;
        if (S == null) {
          q.rangeCount > 0 && O.current.getRoot().contains(q.getRangeAt(0).startContainer) && q.removeAllRanges(), Z && O.current.getRoot().blur();
          return;
        }
        if (!O.current.getRoot().contains(Nt(document))) return;
        const ce = new window.Range();
        let me;
        S === "all" ? me = O.current.getRoot() : b.sections[S].type === "empty" ? me = O.current.getSectionContainer(S) : me = O.current.getSectionContent(S), ce.selectNodeContents(me), me.focus(), q.removeAllRanges(), q.addRange(ce);
      },
      getActiveSectionIndexFromDOM: () => {
        const q = Nt(document);
        return !q || !O.current || !O.current.getRoot().contains(q) ? null : O.current.getSectionIndexFromDOMElement(q);
      },
      focusField: (q = 0) => {
        if (!O.current || C.getActiveSectionIndexFromDOM() != null) return;
        const ce = Jl(q, b.sections);
        x(true), O.current.getSectionContent(ce).focus();
      },
      setSelectedSections: (q) => {
        if (!O.current) return;
        const ce = Jl(q, b.sections);
        x((ce === "all" ? 0 : ce) !== null), v(q);
      },
      isFieldFocused: () => {
        const q = Nt(document);
        return !!O.current && O.current.getRoot().contains(q);
      }
    }), [
      S,
      v,
      b.sections,
      Z
    ]), P = Ae((q) => {
      if (!O.current) return;
      const ce = b.sections[q];
      O.current.getSectionContent(q).innerHTML = ce.value || ce.placeholder, C.syncSelectionToDOM();
    }), B = Ae((q, ...ce) => {
      q.isDefaultPrevented() || !O.current || (x(true), i == null ? void 0 : i(q, ...ce), S === "all" ? setTimeout(() => {
        const me = document.getSelection().getRangeAt(0).startOffset;
        if (me === 0) {
          v(T.startIndex);
          return;
        }
        let we = 0, le = 0;
        for (; le < me && we < b.sections.length; ) {
          const Ce = b.sections[we];
          we += 1, le += `${Ce.startSeparator}${Ce.value || Ce.placeholder}${Ce.endSeparator}`.length;
        }
        v(we - 1);
      }) : Z ? O.current.getRoot().contains(q.target) || v(T.startIndex) : (x(true), v(T.startIndex)));
    }), H = Ae((q) => {
      if (l == null ? void 0 : l(q), !O.current || S !== "all") return;
      const me = q.target.textContent ?? "";
      O.current.getRoot().innerHTML = b.sections.map((we) => `${we.startSeparator}${we.value || we.placeholder}${we.endSeparator}`).join(""), C.syncSelectionToDOM(), me.length === 0 || me.charCodeAt(0) === 10 ? (y(), E(), v("all")) : me.length > 1 ? k(me) : (S === "all" && v(0), g({
        keyPressed: me,
        sectionIndex: 0
      }));
    }), ne = Ae((q) => {
      if (c == null ? void 0 : c(q), n || S !== "all") {
        q.preventDefault();
        return;
      }
      const ce = q.clipboardData.getData("text");
      q.preventDefault(), y(), k(ce);
    }), W = Ae((...q) => {
      if (a == null ? void 0 : a(...q), Z || !O.current) return;
      x(true), O.current.getSectionIndexFromDOMElement(Nt(document)) != null || v(T.startIndex);
    }), G = Ae((...q) => {
      s == null ? void 0 : s(...q), setTimeout(() => {
        if (!O.current) return;
        const ce = Nt(document);
        !O.current.getRoot().contains(ce) && (x(false), v(null));
      });
    }), ee = Ae((q) => (ce) => {
      ce.isDefaultPrevented() || v(q);
    }), J = Ae((q) => {
      q.preventDefault();
    }), ie = Ae((q) => () => {
      v(q);
    }), j = Ae((q) => {
      if (q.preventDefault(), n || e || typeof S != "number") return;
      const ce = b.sections[S], me = q.clipboardData.getData("text"), we = /^[a-zA-Z]+$/.test(me), le = /^[0-9]+$/.test(me), Ce = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(me);
      ce.contentType === "letter" && we || ce.contentType === "digit" && le || ce.contentType === "digit-with-letter" && Ce ? (y(), R({
        activeSection: ce,
        newSectionValue: me,
        shouldGoToNextSection: true
      })) : !we && !le && (y(), k(me));
    }), se = Ae((q) => {
      q.preventDefault(), q.dataTransfer.dropEffect = "none";
    }), re = Ae((q) => {
      if (!O.current) return;
      const ce = q.target, me = ce.textContent ?? "", we = O.current.getSectionIndexFromDOMElement(ce), le = b.sections[we];
      if (n || !O.current) {
        P(we);
        return;
      }
      if (me.length === 0) {
        if (le.value === "") {
          P(we);
          return;
        }
        const Ce = q.nativeEvent.inputType;
        if (Ce === "insertParagraph" || Ce === "insertLineBreak") {
          P(we);
          return;
        }
        y(), _();
        return;
      }
      g({
        keyPressed: me,
        sectionIndex: we
      }), P(we);
    });
    ws(() => {
      if (!(!Z || !O.current)) {
        if (S === "all") O.current.getRoot().focus();
        else if (typeof S == "number") {
          const q = O.current.getSectionContent(S);
          q && q.focus();
        }
      }
    }, [
      S,
      Z
    ]);
    const Q = Y.useMemo(() => b.sections.reduce((q, ce) => (q[ce.type] = I[ce.type]({
      currentDate: null,
      contentType: ce.contentType,
      format: ce.format
    }), q), {}), [
      I,
      b.sections
    ]), X = S === "all", ue = Y.useMemo(() => b.sections.map((q, ce) => {
      const me = !X && !e && !n;
      return {
        container: {
          "data-sectionindex": ce,
          onClick: ee(ce)
        },
        content: {
          tabIndex: X || ce > 0 ? -1 : 0,
          contentEditable: !X && !e && !n,
          role: "spinbutton",
          id: `${te}-${q.type}`,
          "aria-labelledby": `${te}-${q.type}`,
          "aria-readonly": n,
          "aria-valuenow": tO(q, L),
          "aria-valuemin": Q[q.type].minimum,
          "aria-valuemax": Q[q.type].maximum,
          "aria-valuetext": q.value ? eO(q, L) : z.empty,
          "aria-label": z[q.type],
          "aria-disabled": e,
          spellCheck: me ? false : void 0,
          autoCapitalize: me ? "off" : void 0,
          autoCorrect: me ? "off" : void 0,
          [parseInt(Y.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: me ? "next" : void 0,
          children: q.value || q.placeholder,
          onInput: re,
          onPaste: j,
          onFocus: ie(ce),
          onDragOver: se,
          onMouseUp: J,
          inputMode: q.contentType === "letter" ? "text" : "numeric"
        },
        before: {
          children: q.startSeparator
        },
        after: {
          children: q.endSeparator
        }
      };
    }), [
      b.sections,
      ie,
      j,
      se,
      re,
      ee,
      J,
      e,
      n,
      X,
      z,
      L,
      Q,
      te
    ]), he = Ae((q) => {
      k(q.target.value);
    }), Se = Y.useMemo(() => N ? "" : m.getV7HiddenInputValueFromSections(b.sections), [
      N,
      b.sections,
      m
    ]);
    return Y.useEffect(() => {
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
      f && O.current && O.current.getSectionContent(T.startIndex).focus();
    }, []), {
      interactions: C,
      returnedValue: {
        autoFocus: f,
        readOnly: n,
        focused: d ?? Z,
        sectionListRef: K,
        onBlur: G,
        onClick: B,
        onFocus: W,
        onInput: H,
        onPaste: ne,
        enableAccessibleFieldDOMStructure: true,
        elements: ue,
        tabIndex: S === 0 ? -1 : 0,
        contentEditable: X,
        value: Se,
        onChange: he,
        areAllSectionsEmpty: N
      }
    };
  }, us = (t) => t.replace(/[\u2066\u2067\u2068\u2069]/g, ""), _O = (t, e, n) => {
    let r = 0, s = n ? 1 : 0;
    const i = [];
    for (let a = 0; a < t.length; a += 1) {
      const l = t[a], c = lu(l, n ? "input-rtl" : "input-ltr", e), d = `${l.startSeparator}${c}${l.endSeparator}`, f = us(d).length, m = d.length, g = us(c), y = s + (g === "" ? 0 : c.indexOf(g[0])) + l.startSeparator.length, v = y + g.length;
      i.push(F({}, l, {
        start: r,
        end: r + f,
        startInInput: y,
        endInInput: v
      })), r += f, s += m;
    }
    return i;
  }, DO = (t) => {
    const e = gr(), n = Y.useRef(void 0), r = Y.useRef(void 0), { forwardedProps: { onFocus: s, onClick: i, onPaste: a, onBlur: l, inputRef: c, placeholder: d }, internalProps: { readOnly: f = false, disabled: m = false }, parsedSelectedSections: g, activeSectionIndex: y, state: v, fieldValueManager: S, valueManager: b, applyCharacterEditing: _, resetCharacterQuery: E, updateSectionValue: R, updateValueFromValueStr: k, clearActiveSection: T, clearValue: N, setTempAndroidValueStr: I, setSelectedSections: O, getSectionsFromValue: K, areAllSectionsEmpty: z, localizedDigits: L } = t, te = Y.useRef(null), Z = $t(c, te), x = Y.useMemo(() => _O(v.sections, L, e), [
      v.sections,
      L,
      e
    ]), C = Y.useMemo(() => ({
      syncSelectionToDOM: () => {
        if (!te.current) return;
        if (g == null) {
          te.current.scrollLeft && (te.current.scrollLeft = 0);
          return;
        }
        if (te.current !== Nt(document)) return;
        const re = te.current.scrollTop;
        if (g === "all") te.current.select();
        else {
          const Q = x[g], X = Q.type === "empty" ? Q.startInInput - Q.startSeparator.length : Q.startInInput, ue = Q.type === "empty" ? Q.endInInput + Q.endSeparator.length : Q.endInInput;
          (X !== te.current.selectionStart || ue !== te.current.selectionEnd) && te.current === Nt(document) && te.current.setSelectionRange(X, ue), clearTimeout(r.current), r.current = setTimeout(() => {
            te.current && te.current === Nt(document) && te.current.selectionStart === te.current.selectionEnd && (te.current.selectionStart !== X || te.current.selectionEnd !== ue) && C.syncSelectionToDOM();
          });
        }
        te.current.scrollTop = re;
      },
      getActiveSectionIndexFromDOM: () => {
        const re = te.current.selectionStart ?? 0, Q = te.current.selectionEnd ?? 0;
        if (re === 0 && Q === 0) return null;
        const X = re <= x[0].startInInput ? 1 : x.findIndex((ue) => ue.startInInput - ue.startSeparator.length > re);
        return X === -1 ? x.length - 1 : X - 1;
      },
      focusField: (re = 0) => {
        var _a2;
        Nt(document) !== te.current && ((_a2 = te.current) == null ? void 0 : _a2.focus(), O(re));
      },
      setSelectedSections: (re) => O(re),
      isFieldFocused: () => te.current === Nt(document)
    }), [
      te,
      g,
      x,
      O
    ]), P = () => {
      const re = te.current.selectionStart ?? 0;
      let Q;
      re <= x[0].startInInput || re >= x[x.length - 1].endInInput ? Q = 1 : Q = x.findIndex((ue) => ue.startInInput - ue.startSeparator.length > re);
      const X = Q === -1 ? x.length - 1 : Q - 1;
      O(X);
    }, B = Ae((...re) => {
      s == null ? void 0 : s(...re);
      const Q = te.current;
      clearTimeout(n.current), n.current = setTimeout(() => {
        !Q || Q !== te.current || y == null && (Q.value.length && Number(Q.selectionEnd) - Number(Q.selectionStart) === Q.value.length ? O("all") : P());
      });
    }), H = Ae((re, ...Q) => {
      re.isDefaultPrevented() || (i == null ? void 0 : i(re, ...Q), P());
    }), ne = Ae((re) => {
      if (a == null ? void 0 : a(re), re.preventDefault(), f || m) return;
      const Q = re.clipboardData.getData("text");
      if (typeof g == "number") {
        const X = v.sections[g], ue = /^[a-zA-Z]+$/.test(Q), he = /^[0-9]+$/.test(Q), Se = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(Q);
        if (X.contentType === "letter" && ue || X.contentType === "digit" && he || X.contentType === "digit-with-letter" && Se) {
          E(), R({
            activeSection: X,
            newSectionValue: Q,
            shouldGoToNextSection: true
          });
          return;
        }
        if (ue || he) return;
      }
      E(), k(Q);
    }), W = Ae((...re) => {
      l == null ? void 0 : l(...re), O(null);
    }), G = Ae((re) => {
      if (f) return;
      const Q = re.target.value;
      if (Q === "") {
        E(), N();
        return;
      }
      const X = re.nativeEvent.data, ue = X && X.length > 1, he = ue ? X : Q, Se = us(he);
      if (g === "all" && O(y), y == null || ue) {
        k(ue ? X : Se);
        return;
      }
      let q;
      if (g === "all" && Se.length === 1) q = Se;
      else {
        const ce = us(S.getV6InputValueFromSections(x, L, e));
        let me = -1, we = -1;
        for (let ye = 0; ye < ce.length; ye += 1) me === -1 && ce[ye] !== Se[ye] && (me = ye), we === -1 && ce[ce.length - ye - 1] !== Se[Se.length - ye - 1] && (we = ye);
        const le = x[y];
        if (me < le.start || ce.length - we - 1 > le.end) return;
        const _e = Se.length - ce.length + le.end - us(le.endSeparator || "").length;
        q = Se.slice(le.start + us(le.startSeparator || "").length, _e);
      }
      if (q.length === 0) {
        J1() && I(he), E(), T();
        return;
      }
      _({
        keyPressed: q,
        sectionIndex: y
      });
    }), ee = Y.useMemo(() => d !== void 0 ? d : S.getV6InputValueFromSections(K(b.emptyValue), L, e), [
      d,
      S,
      K,
      b.emptyValue,
      L,
      e
    ]), J = Y.useMemo(() => v.tempValueStrAndroid ?? S.getV6InputValueFromSections(v.sections, L, e), [
      v.sections,
      S,
      v.tempValueStrAndroid,
      L,
      e
    ]);
    Y.useEffect(() => (te.current && te.current === Nt(document) && O("all"), () => {
      clearTimeout(n.current), clearTimeout(r.current);
    }), []);
    const ie = Y.useMemo(() => y == null || v.sections[y].contentType === "letter" ? "text" : "numeric", [
      y,
      v.sections
    ]), se = !(te.current && te.current === Nt(document)) && z;
    return {
      interactions: C,
      returnedValue: {
        readOnly: f,
        onBlur: W,
        onClick: H,
        onFocus: B,
        onPaste: ne,
        inputRef: Z,
        enableAccessibleFieldDOMStructure: false,
        placeholder: ee,
        inputMode: ie,
        autoComplete: "off",
        value: se ? "" : J,
        onChange: G
      }
    };
  }, kO = (t) => {
    const e = kt(), { internalProps: n, internalProps: { unstableFieldRef: r, minutesStep: s, enableAccessibleFieldDOMStructure: i = false, disabled: a = false, readOnly: l = false }, forwardedProps: { onKeyDown: c, error: d, clearable: f, onClear: m }, fieldValueManager: g, valueManager: y, validator: v } = t, S = gr(), b = gO(t), { state: _, activeSectionIndex: E, parsedSelectedSections: R, setSelectedSections: k, clearValue: T, clearActiveSection: N, updateSectionValue: I, setTempAndroidValueStr: O, sectionsValueBoundaries: K, localizedDigits: z, timezone: L } = b, te = vO({
      sections: _.sections,
      updateSectionValue: I,
      sectionsValueBoundaries: K,
      localizedDigits: z,
      setTempAndroidValueStr: O,
      timezone: L
    }), { resetCharacterQuery: Z } = te, x = y.areValuesEqual(e, _.value, y.emptyValue), C = i ? SO : DO, P = Y.useMemo(() => K1(_.sections, S && !i), [
      _.sections,
      S,
      i
    ]), { returnedValue: B, interactions: H } = C(F({}, t, b, te, {
      areAllSectionsEmpty: x,
      sectionOrder: P
    })), ne = Ae((j) => {
      if (c == null ? void 0 : c(j), !a) switch (true) {
        case ((j.ctrlKey || j.metaKey) && String.fromCharCode(j.keyCode) === "A" && !j.shiftKey && !j.altKey): {
          j.preventDefault(), k("all");
          break;
        }
        case j.key === "ArrowRight": {
          if (j.preventDefault(), R == null) k(P.startIndex);
          else if (R === "all") k(P.endIndex);
          else {
            const se = P.neighbors[R].rightIndex;
            se !== null && k(se);
          }
          break;
        }
        case j.key === "ArrowLeft": {
          if (j.preventDefault(), R == null) k(P.endIndex);
          else if (R === "all") k(P.startIndex);
          else {
            const se = P.neighbors[R].leftIndex;
            se !== null && k(se);
          }
          break;
        }
        case j.key === "Delete": {
          if (j.preventDefault(), l) break;
          R == null || R === "all" ? T() : N(), Z();
          break;
        }
        case [
          "ArrowUp",
          "ArrowDown",
          "Home",
          "End",
          "PageUp",
          "PageDown"
        ].includes(j.key): {
          if (j.preventDefault(), l || E == null) break;
          R === "all" && k(E);
          const se = _.sections[E], re = g.getActiveDateManager(e, _, se), Q = z1(e, L, se, j.key, K, z, re.date, {
            minutesStep: s
          });
          I({
            activeSection: se,
            newSectionValue: Q,
            shouldGoToNextSection: false
          });
          break;
        }
      }
    });
    ws(() => {
      H.syncSelectionToDOM();
    });
    const { hasValidationError: W } = pg({
      props: n,
      validator: v,
      timezone: L,
      value: _.value,
      onError: n.onError
    }), G = Y.useMemo(() => d !== void 0 ? d : W, [
      W,
      d
    ]);
    Y.useEffect(() => {
      !G && E == null && Z();
    }, [
      _.referenceValue,
      E,
      G
    ]), Y.useEffect(() => {
      _.tempValueStrAndroid != null && E != null && (Z(), N());
    }, [
      _.sections
    ]), Y.useImperativeHandle(r, () => ({
      getSections: () => _.sections,
      getActiveSectionIndex: H.getActiveSectionIndexFromDOM,
      setSelectedSections: H.setSelectedSections,
      focusField: H.focusField,
      isFieldFocused: H.isFieldFocused
    }));
    const ee = Ae((j, ...se) => {
      j.preventDefault(), m == null ? void 0 : m(j, ...se), T(), H.isFieldFocused() ? k(P.startIndex) : H.focusField(0);
    }), J = {
      onKeyDown: ne,
      onClear: ee,
      error: G,
      clearable: !!(f && !x && !l && !a)
    }, ie = {
      disabled: a,
      readOnly: l
    };
    return F({}, t.forwardedProps, J, ie, B);
  };
  yr(D.jsx("path", {
    d: "M7 10l5 5 5-5z"
  }), "ArrowDropDown");
  const xO = yr(D.jsx("path", {
    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
  }), "ArrowLeft"), TO = yr(D.jsx("path", {
    d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
  }), "ArrowRight");
  yr(D.jsx("path", {
    d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
  }), "Calendar");
  const MO = yr(D.jsxs(Y.Fragment, {
    children: [
      D.jsx("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }),
      D.jsx("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      })
    ]
  }), "Clock");
  yr(D.jsx("path", {
    d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
  }), "DateRange");
  yr(D.jsxs(Y.Fragment, {
    children: [
      D.jsx("path", {
        d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
      }),
      D.jsx("path", {
        d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
      })
    ]
  }), "Time");
  const EO = yr(D.jsx("path", {
    d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }), "Clear"), CO = [
    "clearable",
    "onClear",
    "InputProps",
    "sx",
    "slots",
    "slotProps"
  ], AO = [
    "ownerState"
  ], RO = (t) => {
    const e = hn(), { clearable: n, onClear: r, InputProps: s, sx: i, slots: a, slotProps: l } = t, c = Ne(t, CO), d = (a == null ? void 0 : a.clearButton) ?? Si, f = ot({
      elementType: d,
      externalSlotProps: l == null ? void 0 : l.clearButton,
      ownerState: {},
      className: "clearButton",
      additionalProps: {
        title: e.fieldClearLabel
      }
    }), m = Ne(f, AO), g = (a == null ? void 0 : a.clearIcon) ?? EO, y = ot({
      elementType: g,
      externalSlotProps: l == null ? void 0 : l.clearIcon,
      ownerState: {}
    });
    return F({}, c, {
      InputProps: F({}, s, {
        endAdornment: D.jsxs(Y.Fragment, {
          children: [
            n && D.jsx(sh, {
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
  }, OO = [
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
  ], IO = (t, e) => Y.useMemo(() => {
    const n = F({}, t), r = {}, s = (i) => {
      n.hasOwnProperty(i) && (r[i] = n[i], delete n[i]);
    };
    return OO.forEach(s), ug.forEach(s), {
      forwardedProps: n,
      internalProps: r
    };
  }, [
    t,
    e
  ]), PO = Y.createContext(null);
  function gg(t) {
    const { contextValue: e, localeText: n, children: r } = t;
    return D.jsx(PO.Provider, {
      value: e,
      children: D.jsx(fg, {
        localeText: n,
        children: r
      })
    });
  }
  const NO = (t) => {
    const e = kt(), r = t.ampm ?? e.is12HourCycleInCurrentLocale() ? e.formats.fullTime12h : e.formats.fullTime24h;
    return F({}, t, {
      disablePast: t.disablePast ?? false,
      disableFuture: t.disableFuture ?? false,
      format: t.format ?? r
    });
  }, LO = (t) => {
    const e = NO(t), { forwardedProps: n, internalProps: r } = IO(e, "time");
    return kO({
      forwardedProps: n,
      internalProps: r,
      valueManager: wr,
      fieldValueManager: rO,
      validator: Do,
      valueType: "time"
    });
  };
  function YO(t) {
    return vt("MuiPickersTextField", t);
  }
  bt("MuiPickersTextField", [
    "root",
    "focused",
    "disabled",
    "error",
    "required"
  ]);
  function FO(t) {
    return vt("MuiPickersInputBase", t);
  }
  const vs = bt("MuiPickersInputBase", [
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
  function HO(t) {
    return vt("MuiPickersSectionList", t);
  }
  const qs = bt("MuiPickersSectionList", [
    "root",
    "section",
    "sectionContent"
  ]), jO = [
    "slots",
    "slotProps",
    "elements",
    "sectionListRef"
  ], yg = ke("div", {
    name: "MuiPickersSectionList",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    direction: "ltr /*! @noflip */",
    outline: "none"
  }), vg = ke("span", {
    name: "MuiPickersSectionList",
    slot: "Section",
    overridesResolver: (t, e) => e.section
  })({}), bg = ke("span", {
    name: "MuiPickersSectionList",
    slot: "SectionSeparator",
    overridesResolver: (t, e) => e.sectionSeparator
  })({
    whiteSpace: "pre"
  }), wg = ke("span", {
    name: "MuiPickersSectionList",
    slot: "SectionContent",
    overridesResolver: (t, e) => e.sectionContent
  })({
    outline: "none"
  }), VO = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      section: [
        "section"
      ],
      sectionContent: [
        "sectionContent"
      ]
    }, HO, e);
  };
  function WO(t) {
    const { slots: e, slotProps: n, element: r, classes: s } = t, i = (e == null ? void 0 : e.section) ?? vg, a = ot({
      elementType: i,
      externalSlotProps: n == null ? void 0 : n.section,
      externalForwardedProps: r.container,
      className: s.section,
      ownerState: {}
    }), l = (e == null ? void 0 : e.sectionContent) ?? wg, c = ot({
      elementType: l,
      externalSlotProps: n == null ? void 0 : n.sectionContent,
      externalForwardedProps: r.content,
      additionalProps: {
        suppressContentEditableWarning: true
      },
      className: s.sectionContent,
      ownerState: {}
    }), d = (e == null ? void 0 : e.sectionSeparator) ?? bg, f = ot({
      elementType: d,
      externalSlotProps: n == null ? void 0 : n.sectionSeparator,
      externalForwardedProps: r.before,
      ownerState: {
        position: "before"
      }
    }), m = ot({
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
  const UO = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersSectionList"
    }), { slots: s, slotProps: i, elements: a, sectionListRef: l } = r, c = Ne(r, jO), d = VO(r), f = Y.useRef(null), m = $t(n, f), g = (S) => {
      if (!f.current) throw new Error(`MUI X: Cannot call sectionListRef.${S} before the mount of the component.`);
      return f.current;
    };
    Y.useImperativeHandle(l, () => ({
      getRoot() {
        return g("getRoot");
      },
      getSectionContainer(S) {
        return g("getSectionContainer").querySelector(`.${qs.section}[data-sectionindex="${S}"]`);
      },
      getSectionContent(S) {
        return g("getSectionContent").querySelector(`.${qs.section}[data-sectionindex="${S}"] .${qs.sectionContent}`);
      },
      getSectionIndexFromDOMElement(S) {
        const b = g("getSectionIndexFromDOMElement");
        if (S == null || !b.contains(S)) return null;
        let _ = null;
        return S.classList.contains(qs.section) ? _ = S : S.classList.contains(qs.sectionContent) && (_ = S.parentElement), _ == null ? null : Number(_.dataset.sectionindex);
      }
    }));
    const y = (s == null ? void 0 : s.root) ?? yg, v = ot({
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
      children: v.contentEditable ? a.map(({ content: S, before: b, after: _ }) => `${b.children}${S.children}${_.children}`).join("") : D.jsx(Y.Fragment, {
        children: a.map((S, b) => D.jsx(WO, {
          slots: s,
          slotProps: i,
          element: S,
          classes: d
        }, b))
      })
    }));
  }), BO = [
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
  ], zO = (t) => Math.round(t * 1e5) / 1e5, ko = ke("div", {
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
    letterSpacing: `${zO(0.15 / 16)}em`,
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
  })), fu = ke(yg, {
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
  })), $O = ke(vg, {
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
  })), GO = ke(wg, {
    name: "MuiPickersInputBase",
    slot: "SectionContent",
    overridesResolver: (t, e) => e.content
  })(({ theme: t }) => ({
    fontFamily: t.typography.fontFamily,
    lineHeight: "1.4375em",
    letterSpacing: "inherit",
    width: "fit-content",
    outline: "none"
  })), qO = ke(bg, {
    name: "MuiPickersInputBase",
    slot: "Separator",
    overridesResolver: (t, e) => e.separator
  })(() => ({
    whiteSpace: "pre",
    letterSpacing: "inherit"
  })), ZO = ke("input", {
    name: "MuiPickersInputBase",
    slot: "Input",
    overridesResolver: (t, e) => e.hiddenInput
  })(F({}, xw)), QO = (t) => {
    const { focused: e, disabled: n, error: r, classes: s, fullWidth: i, readOnly: a, color: l, size: c, endAdornment: d, startAdornment: f } = t, m = {
      root: [
        "root",
        e && !n && "focused",
        n && "disabled",
        a && "readOnly",
        r && "error",
        i && "fullWidth",
        `color${Dw(l)}`,
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
    return ht(m, FO, s);
  }, hu = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersInputBase"
    }), { elements: s, areAllSectionsEmpty: i, value: a, onChange: l, id: c, endAdornment: d, startAdornment: f, renderSuffix: m, slots: g, slotProps: y, contentEditable: v, tabIndex: S, onInput: b, onPaste: _, onKeyDown: E, name: R, readOnly: k, inputProps: T, inputRef: N, sectionListRef: I } = r, O = Ne(r, BO), K = Y.useRef(null), z = $t(n, K), L = $t(T == null ? void 0 : T.ref, N), te = gr(), Z = Ga();
    if (!Z) throw new Error("MUI X: PickersInputBase should always be used inside a PickersTextField component");
    const x = (W) => {
      var _a2;
      if (Z.disabled) {
        W.stopPropagation();
        return;
      }
      (_a2 = Z.onFocus) == null ? void 0 : _a2.call(Z, W);
    };
    Y.useEffect(() => {
      Z && Z.setAdornedStart(!!f);
    }, [
      Z,
      f
    ]), Y.useEffect(() => {
      Z && (i ? Z.onEmpty() : Z.onFilled());
    }, [
      Z,
      i
    ]);
    const C = F({}, r, Z, {
      isRtl: te
    }), P = QO(C), B = (g == null ? void 0 : g.root) || ko, H = ot({
      elementType: B,
      externalSlotProps: y == null ? void 0 : y.root,
      externalForwardedProps: O,
      additionalProps: {
        "aria-invalid": Z.error,
        ref: z
      },
      className: P.root,
      ownerState: C
    }), ne = (g == null ? void 0 : g.input) || fu;
    return D.jsxs(B, F({}, H, {
      children: [
        f,
        D.jsx(UO, {
          sectionListRef: I,
          elements: s,
          contentEditable: v,
          tabIndex: S,
          className: P.sectionsContainer,
          onFocus: x,
          onBlur: Z.onBlur,
          onInput: b,
          onPaste: _,
          onKeyDown: E,
          slots: {
            root: ne,
            section: $O,
            sectionContent: GO,
            sectionSeparator: qO
          },
          slotProps: {
            root: {
              ownerState: C
            },
            sectionContent: {
              className: vs.sectionContent
            },
            sectionSeparator: ({ position: W }) => ({
              className: W === "before" ? vs.sectionBefore : vs.sectionAfter
            })
          }
        }),
        d,
        m ? m(F({}, Z)) : null,
        D.jsx(ZO, F({
          name: R,
          className: P.input,
          value: a,
          onChange: l,
          id: c,
          "aria-hidden": "true",
          tabIndex: -1,
          readOnly: k,
          required: Z.required,
          disabled: Z.disabled
        }, T, {
          ref: L
        }))
      ]
    }));
  });
  function XO(t) {
    return vt("MuiPickersOutlinedInput", t);
  }
  const Jt = F({}, vs, bt("MuiPickersOutlinedInput", [
    "root",
    "notchedOutline",
    "input"
  ])), JO = [
    "children",
    "className",
    "label",
    "notched",
    "shrink"
  ], KO = ke("fieldset", {
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
  }), zf = ke("span")(({ theme: t }) => ({
    fontFamily: t.typography.fontFamily,
    fontSize: "inherit"
  })), eI = ke("legend")(({ theme: t }) => ({
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
  function tI(t) {
    const { className: e, label: n } = t, r = Ne(t, JO), s = n != null && n !== "", i = F({}, t, {
      withLabel: s
    });
    return D.jsx(KO, F({
      "aria-hidden": true,
      className: e
    }, r, {
      ownerState: i,
      children: D.jsx(eI, {
        ownerState: i,
        children: s ? D.jsx(zf, {
          children: n
        }) : D.jsx(zf, {
          className: "notranslate",
          children: "\u200B"
        })
      })
    }));
  }
  const nI = [
    "label",
    "autoFocus",
    "ownerState",
    "notched"
  ], rI = ke(ko, {
    name: "MuiPickersOutlinedInput",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => {
    const e = t.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
    return {
      padding: "0 14px",
      borderRadius: (t.vars || t).shape.borderRadius,
      [`&:hover .${Jt.notchedOutline}`]: {
        borderColor: (t.vars || t).palette.text.primary
      },
      "@media (hover: none)": {
        [`&:hover .${Jt.notchedOutline}`]: {
          borderColor: t.vars ? `rgba(${t.vars.palette.common.onBackgroundChannel} / 0.23)` : e
        }
      },
      [`&.${Jt.focused} .${Jt.notchedOutline}`]: {
        borderStyle: "solid",
        borderWidth: 2
      },
      [`&.${Jt.disabled}`]: {
        [`& .${Jt.notchedOutline}`]: {
          borderColor: (t.vars || t).palette.action.disabled
        },
        "*": {
          color: (t.vars || t).palette.action.disabled
        }
      },
      [`&.${Jt.error} .${Jt.notchedOutline}`]: {
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
          [`&.${Jt.focused}:not(.${Jt.error}) .${Jt.notchedOutline}`]: {
            borderColor: (t.vars || t).palette[n].main
          }
        }
      }))
    };
  }), sI = ke(fu, {
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
  }), iI = (t) => {
    const { classes: e } = t, r = ht({
      root: [
        "root"
      ],
      notchedOutline: [
        "notchedOutline"
      ],
      input: [
        "input"
      ]
    }, XO, e);
    return F({}, e, r);
  }, Sg = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersOutlinedInput"
    }), { label: s, ownerState: i, notched: a } = r, l = Ne(r, nI), c = Ga(), d = F({}, r, i, c, {
      color: (c == null ? void 0 : c.color) || "primary"
    }), f = iI(d);
    return D.jsx(hu, F({
      slots: {
        root: rI,
        input: sI
      },
      renderSuffix: (m) => D.jsx(tI, {
        shrink: !!(a || m.adornedStart || m.focused || m.filled),
        notched: !!(a || m.adornedStart || m.focused || m.filled),
        className: f.notchedOutline,
        label: s != null && s !== "" && (c == null ? void 0 : c.required) ? D.jsxs(Y.Fragment, {
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
  Sg.muiName = "Input";
  function aI(t) {
    return vt("MuiPickersFilledInput", t);
  }
  const Mr = F({}, vs, bt("MuiPickersFilledInput", [
    "root",
    "underline",
    "input"
  ])), oI = [
    "label",
    "autoFocus",
    "disableUnderline",
    "ownerState"
  ], lI = ke(ko, {
    name: "MuiPickersFilledInput",
    slot: "Root",
    overridesResolver: (t, e) => e.root,
    shouldForwardProp: (t) => oi.shouldForwardProp(t) && t !== "disableUnderline"
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
      [`&.${Mr.focused}`]: {
        backgroundColor: t.vars ? t.vars.palette.FilledInput.bg : r
      },
      [`&.${Mr.disabled}`]: {
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
            [`&.${Mr.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Mr.error}`]: {
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
            [`&:hover:not(.${Mr.disabled}, .${Mr.error}):before`]: {
              borderBottom: `1px solid ${(t.vars || t).palette.text.primary}`
            },
            [`&.${Mr.disabled}:before`]: {
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
  }), cI = ke(fu, {
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
  }), uI = (t) => {
    const { classes: e, disableUnderline: n } = t, s = ht({
      root: [
        "root",
        !n && "underline"
      ],
      input: [
        "input"
      ]
    }, aI, e);
    return F({}, e, s);
  }, _g = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersFilledInput"
    }), { label: s, disableUnderline: i = false, ownerState: a } = r, l = Ne(r, oI), c = Ga(), d = F({}, r, a, c, {
      color: (c == null ? void 0 : c.color) || "primary"
    }), f = uI(d);
    return D.jsx(hu, F({
      slots: {
        root: lI,
        input: cI
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
  _g.muiName = "Input";
  function dI(t) {
    return vt("MuiPickersFilledInput", t);
  }
  const Zs = F({}, vs, bt("MuiPickersInput", [
    "root",
    "input"
  ])), fI = [
    "label",
    "autoFocus",
    "disableUnderline",
    "ownerState"
  ], hI = ke(ko, {
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
            [`&.${Zs.focused}:after`]: {
              transform: "scaleX(1) translateX(0)"
            },
            [`&.${Zs.error}`]: {
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
            [`&:hover:not(.${Zs.disabled}, .${Zs.error}):before`]: {
              borderBottom: `2px solid ${(t.vars || t).palette.text.primary}`,
              "@media (hover: none)": {
                borderBottom: `1px solid ${n}`
              }
            },
            [`&.${Zs.disabled}:before`]: {
              borderBottomStyle: "dotted"
            }
          }
        }
      ]
    };
  }), mI = (t) => {
    const { classes: e, disableUnderline: n } = t, s = ht({
      root: [
        "root",
        !n && "underline"
      ],
      input: [
        "input"
      ]
    }, dI, e);
    return F({}, e, s);
  }, Dg = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersInput"
    }), { label: s, disableUnderline: i = false, ownerState: a } = r, l = Ne(r, fI), c = Ga(), d = F({}, r, a, c, {
      disableUnderline: i,
      color: (c == null ? void 0 : c.color) || "primary"
    }), f = mI(d);
    return D.jsx(hu, F({
      slots: {
        root: hI
      }
    }, l, {
      label: s,
      classes: f,
      ref: n
    }));
  });
  Dg.muiName = "Input";
  const pI = [
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
  ], gI = {
    standard: Dg,
    filled: _g,
    outlined: Sg
  }, yI = ke(Ew, {
    name: "MuiPickersTextField",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    maxWidth: "100%"
  }), vI = (t) => {
    const { focused: e, disabled: n, classes: r, required: s } = t;
    return ht({
      root: [
        "root",
        e && !n && "focused",
        n && "disabled",
        s && "required"
      ]
    }, YO, r);
  }, bI = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersTextField"
    }), { onFocus: s, onBlur: i, className: a, color: l = "primary", disabled: c = false, error: d = false, variant: f = "outlined", required: m = false, InputProps: g, inputProps: y, inputRef: v, sectionListRef: S, elements: b, areAllSectionsEmpty: _, onClick: E, onKeyDown: R, onKeyUp: k, onPaste: T, onInput: N, endAdornment: I, startAdornment: O, tabIndex: K, contentEditable: z, focused: L, value: te, onChange: Z, fullWidth: x, id: C, name: P, helperText: B, FormHelperTextProps: H, label: ne, InputLabelProps: W } = r, G = Ne(r, pI), ee = Y.useRef(null), J = $t(n, ee), ie = _i(C), j = B && ie ? `${ie}-helper-text` : void 0, se = ne && ie ? `${ie}-label` : void 0, re = F({}, r, {
      color: l,
      disabled: c,
      error: d,
      focused: L,
      required: m,
      variant: f
    }), Q = vI(re), X = gI[f];
    return D.jsxs(yI, F({
      className: Ct(Q.root, a),
      ref: J,
      focused: L,
      onFocus: s,
      onBlur: i,
      disabled: c,
      variant: f,
      error: d,
      color: l,
      fullWidth: x,
      required: m,
      ownerState: re
    }, G, {
      children: [
        D.jsx(Tw, F({
          htmlFor: ie,
          id: se
        }, W, {
          children: ne
        })),
        D.jsx(X, F({
          elements: b,
          areAllSectionsEmpty: _,
          onClick: E,
          onKeyDown: R,
          onKeyUp: k,
          onInput: N,
          onPaste: T,
          endAdornment: I,
          startAdornment: O,
          tabIndex: K,
          contentEditable: z,
          value: te,
          onChange: Z,
          id: ie,
          fullWidth: x,
          inputProps: y,
          inputRef: v,
          sectionListRef: S,
          label: ne,
          name: P,
          role: "group",
          "aria-labelledby": se,
          "aria-describedby": j,
          "aria-live": j ? "polite" : void 0
        }, g)),
        B && D.jsx(Mw, F({
          id: j
        }, H, {
          children: B
        }))
      ]
    }));
  }), wI = [
    "enableAccessibleFieldDOMStructure"
  ], SI = [
    "InputProps",
    "readOnly"
  ], _I = [
    "onPaste",
    "onKeyDown",
    "inputMode",
    "readOnly",
    "InputProps",
    "inputProps",
    "inputRef"
  ], DI = (t) => {
    let { enableAccessibleFieldDOMStructure: e } = t, n = Ne(t, wI);
    if (e) {
      const { InputProps: m, readOnly: g } = n, y = Ne(n, SI);
      return F({}, y, {
        InputProps: F({}, m ?? {}, {
          readOnly: g
        })
      });
    }
    const { onPaste: r, onKeyDown: s, inputMode: i, readOnly: a, InputProps: l, inputProps: c, inputRef: d } = n, f = Ne(n, _I);
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
  }, kI = [
    "slots",
    "slotProps",
    "InputProps",
    "inputProps"
  ], kg = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiTimeField"
    }), { slots: s, slotProps: i, InputProps: a, inputProps: l } = r, c = Ne(r, kI), d = r, f = (s == null ? void 0 : s.textField) ?? (e.enableAccessibleFieldDOMStructure ? bI : Cw), m = ot({
      elementType: f,
      externalSlotProps: i == null ? void 0 : i.textField,
      externalForwardedProps: c,
      ownerState: d,
      additionalProps: {
        ref: n
      }
    });
    m.inputProps = F({}, l, m.inputProps), m.InputProps = F({}, a, m.InputProps);
    const g = LO(m), y = DI(g), v = RO(F({}, y, {
      slots: s,
      slotProps: i
    }));
    return D.jsx(f, F({}, v));
  });
  function xI(t) {
    return vt("MuiPickersToolbarText", t);
  }
  const $f = bt("MuiPickersToolbarText", [
    "root",
    "selected"
  ]), TI = [
    "className",
    "selected",
    "value"
  ], MI = (t) => {
    const { classes: e, selected: n } = t;
    return ht({
      root: [
        "root",
        n && "selected"
      ]
    }, xI, e);
  }, EI = ke(qa, {
    name: "MuiPickersToolbarText",
    slot: "Root",
    overridesResolver: (t, e) => [
      e.root,
      {
        [`&.${$f.selected}`]: e.selected
      }
    ]
  })(({ theme: t }) => ({
    transition: t.transitions.create("color"),
    color: (t.vars || t).palette.text.secondary,
    [`&.${$f.selected}`]: {
      color: (t.vars || t).palette.text.primary
    }
  })), xg = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersToolbarText"
    }), { className: s, value: i } = r, a = Ne(r, TI), l = MI(r);
    return D.jsx(EI, F({
      ref: n,
      className: Ct(l.root, s),
      component: "span"
    }, a, {
      children: i
    }));
  });
  function Tg(t) {
    return vt("MuiPickersToolbar", t);
  }
  bt("MuiPickersToolbar", [
    "root",
    "content"
  ]);
  const CI = [
    "align",
    "className",
    "selected",
    "typographyClassName",
    "value",
    "variant",
    "width"
  ], AI = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ]
    }, Tg, e);
  }, RI = ke(Xs, {
    name: "MuiPickersToolbarButton",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    padding: 0,
    minWidth: 16,
    textTransform: "none"
  }), Qs = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersToolbarButton"
    }), { align: s, className: i, selected: a, typographyClassName: l, value: c, variant: d, width: f } = r, m = Ne(r, CI), g = AI(r);
    return D.jsx(RI, F({
      variant: "text",
      ref: n,
      className: Ct(g.root, i)
    }, f ? {
      sx: {
        width: f
      }
    } : {}, m, {
      children: D.jsx(xg, {
        align: s,
        className: l,
        variant: d,
        value: c,
        selected: a
      })
    }));
  }), OI = [
    "children",
    "className",
    "toolbarTitle",
    "hidden",
    "titleId",
    "isLandscape",
    "classes",
    "landscapeDirection"
  ], II = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      content: [
        "content"
      ]
    }, Tg, e);
  }, PI = ke("div", {
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
  })), NI = ke("div", {
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
  }), LI = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersToolbar"
    }), { children: s, className: i, toolbarTitle: a, hidden: l, titleId: c } = r, d = Ne(r, OI), f = r, m = II(f);
    return l ? null : D.jsxs(PI, F({
      ref: n,
      className: Ct(m.root, i),
      ownerState: f
    }, d, {
      children: [
        D.jsx(qa, {
          color: "text.secondary",
          variant: "overline",
          id: c,
          children: a
        }),
        D.jsx(NI, {
          className: m.content,
          ownerState: f,
          children: s
        })
      ]
    }));
  });
  function mu(t, e, n, r) {
    const s = kt(), i = F1(t, s), a = Y.useCallback((l) => {
      const c = t == null ? null : H1(t, l, !!e, s);
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
  function YI(t) {
    return vt("MuiTimePickerToolbar", t);
  }
  const ii = bt("MuiTimePickerToolbar", [
    "root",
    "separator",
    "hourMinuteLabel",
    "hourMinuteLabelLandscape",
    "hourMinuteLabelReverse",
    "ampmSelection",
    "ampmLandscape",
    "ampmLabel"
  ]), FI = [
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
  ], HI = (t) => {
    const { isLandscape: e, classes: n, isRtl: r } = t;
    return ht({
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
    }, YI, n);
  }, jI = ke(LI, {
    name: "MuiTimePickerToolbar",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({}), VI = ke(xg, {
    name: "MuiTimePickerToolbar",
    slot: "Separator",
    overridesResolver: (t, e) => e.separator
  })({
    outline: 0,
    margin: "0 4px 0 2px",
    cursor: "default"
  }), WI = ke("div", {
    name: "MuiTimePickerToolbar",
    slot: "HourMinuteLabel",
    overridesResolver: (t, e) => [
      {
        [`&.${ii.hourMinuteLabelLandscape}`]: e.hourMinuteLabelLandscape,
        [`&.${ii.hourMinuteLabelReverse}`]: e.hourMinuteLabelReverse
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
  }), UI = ke("div", {
    name: "MuiTimePickerToolbar",
    slot: "AmPmSelection",
    overridesResolver: (t, e) => [
      {
        [`.${ii.ampmLabel}`]: e.ampmLabel
      },
      {
        [`&.${ii.ampmLandscape}`]: e.ampmLandscape
      },
      e.ampmSelection
    ]
  })({
    display: "flex",
    flexDirection: "column",
    marginRight: "auto",
    marginLeft: 12,
    [`& .${ii.ampmLabel}`]: {
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
  function BI(t) {
    const e = lt({
      props: t,
      name: "MuiTimePickerToolbar"
    }), { ampm: n, ampmInClock: r, value: s, isLandscape: i, onChange: a, view: l, onViewChange: c, views: d, disabled: f, readOnly: m, className: g } = e, y = Ne(e, FI), v = kt(), S = hn(), b = gr(), _ = !!(n && !r && d.includes("hours")), { meridiemMode: E, handleMeridiemChange: R } = mu(s, n, a), k = (O) => n ? v.format(O, "hours12h") : v.format(O, "hours24h"), T = F({}, e, {
      isRtl: b
    }), N = HI(T), I = D.jsx(VI, {
      tabIndex: -1,
      value: ":",
      variant: "h3",
      selected: false,
      className: N.separator
    });
    return D.jsxs(jI, F({
      landscapeDirection: "row",
      toolbarTitle: S.timePickerToolbarTitle,
      isLandscape: i,
      ownerState: T,
      className: Ct(N.root, g)
    }, y, {
      children: [
        D.jsxs(WI, {
          className: N.hourMinuteLabel,
          ownerState: T,
          children: [
            as(d, "hours") && D.jsx(Qs, {
              tabIndex: -1,
              variant: "h3",
              onClick: () => c("hours"),
              selected: l === "hours",
              value: s ? k(s) : "--"
            }),
            as(d, [
              "hours",
              "minutes"
            ]) && I,
            as(d, "minutes") && D.jsx(Qs, {
              tabIndex: -1,
              variant: "h3",
              onClick: () => c("minutes"),
              selected: l === "minutes",
              value: s ? v.format(s, "minutes") : "--"
            }),
            as(d, [
              "minutes",
              "seconds"
            ]) && I,
            as(d, "seconds") && D.jsx(Qs, {
              variant: "h3",
              onClick: () => c("seconds"),
              selected: l === "seconds",
              value: s ? v.format(s, "seconds") : "--"
            })
          ]
        }),
        _ && D.jsxs(UI, {
          className: N.ampmSelection,
          ownerState: T,
          children: [
            D.jsx(Qs, {
              disableRipple: true,
              variant: "subtitle2",
              selected: E === "am",
              typographyClassName: N.ampmLabel,
              value: ur(v, "am"),
              onClick: m ? void 0 : () => R("am"),
              disabled: f
            }),
            D.jsx(Qs, {
              disableRipple: true,
              variant: "subtitle2",
              selected: E === "pm",
              typographyClassName: N.ampmLabel,
              value: ur(v, "pm"),
              onClick: m ? void 0 : () => R("pm"),
              disabled: f
            })
          ]
        })
      ]
    }));
  }
  function Mg(t, e) {
    var _a2;
    const n = kt(), r = lt({
      props: t,
      name: e
    }), s = r.ampm ?? n.is12HourCycleInCurrentLocale(), i = Y.useMemo(() => {
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
    }, P1({
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
        toolbar: BI
      }, r.slots),
      slotProps: F({}, r.slotProps, {
        toolbar: F({
          ampm: s,
          ampmInClock: r.ampmInClock
        }, (_a2 = r.slotProps) == null ? void 0 : _a2.toolbar)
      })
    });
  }
  function zI(t) {
    return vt("MuiPickersPopper", t);
  }
  bt("MuiPickersPopper", [
    "root",
    "paper"
  ]);
  const $I = "@media (prefers-reduced-motion: reduce)", bs = typeof navigator < "u" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), Gf = bs && bs[1] ? parseInt(bs[1], 10) : null, qf = bs && bs[2] ? parseInt(bs[2], 10) : null, GI = Gf && Gf < 10 || qf && qf < 13 || false, qI = () => ih($I, {
    defaultMatches: false
  }) || GI, ZI = [
    "PaperComponent",
    "popperPlacement",
    "ownerState",
    "children",
    "paperSlotProps",
    "paperClasses",
    "onPaperClick",
    "onPaperTouchStart"
  ], QI = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      paper: [
        "paper"
      ]
    }, zI, e);
  }, XI = ke(Iw, {
    name: "MuiPickersPopper",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    zIndex: t.zIndex.modal
  })), JI = ke(Ow, {
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
  function KI(t, e) {
    return e.documentElement.clientWidth < t.clientX || e.documentElement.clientHeight < t.clientY;
  }
  function eP(t, e) {
    const n = Y.useRef(false), r = Y.useRef(false), s = Y.useRef(null), i = Y.useRef(false);
    Y.useEffect(() => {
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
    const a = Ae((c) => {
      if (!i.current) return;
      const d = r.current;
      r.current = false;
      const f = qo(s.current);
      if (!s.current || "clientX" in c && KI(c, f)) return;
      if (n.current) {
        n.current = false;
        return;
      }
      let m;
      c.composedPath ? m = c.composedPath().indexOf(s.current) > -1 : m = !f.documentElement.contains(c.target) || s.current.contains(c.target), !m && !d && e(c);
    }), l = () => {
      r.current = true;
    };
    return Y.useEffect(() => {
      if (t) {
        const c = qo(s.current), d = () => {
          n.current = true;
        };
        return c.addEventListener("touchstart", a), c.addEventListener("touchmove", d), () => {
          c.removeEventListener("touchstart", a), c.removeEventListener("touchmove", d);
        };
      }
    }, [
      t,
      a
    ]), Y.useEffect(() => {
      if (t) {
        const c = qo(s.current);
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
  const tP = Y.forwardRef((t, e) => {
    const { PaperComponent: n, popperPlacement: r, ownerState: s, children: i, paperSlotProps: a, paperClasses: l, onPaperClick: c, onPaperTouchStart: d } = t, f = Ne(t, ZI), m = F({}, s, {
      placement: r
    }), g = ot({
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
  function nP(t) {
    const e = lt({
      props: t,
      name: "MuiPickersPopper"
    }), { anchorEl: n, children: r, containerRef: s = null, shouldRestoreFocus: i, onBlur: a, onDismiss: l, open: c, role: d, placement: f, slots: m, slotProps: g, reduceAnimations: y } = e;
    Y.useEffect(() => {
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
    const v = Y.useRef(null);
    Y.useEffect(() => {
      d === "tooltip" || i && !i() || (c ? v.current = Nt(document) : v.current && v.current instanceof HTMLElement && setTimeout(() => {
        v.current instanceof HTMLElement && v.current.focus();
      }));
    }, [
      c,
      d,
      i
    ]);
    const [S, b, _] = eP(c, a ?? l), E = Y.useRef(null), R = $t(E, s), k = $t(R, S), T = e, N = QI(T), I = qI(), O = y ?? I, K = (C) => {
      C.key === "Escape" && (C.stopPropagation(), l());
    }, z = (m == null ? void 0 : m.desktopTransition) ?? O ? ah : Aw, L = (m == null ? void 0 : m.desktopTrapFocus) ?? Rw, te = (m == null ? void 0 : m.desktopPaper) ?? JI, Z = (m == null ? void 0 : m.popper) ?? XI, x = ot({
      elementType: Z,
      externalSlotProps: g == null ? void 0 : g.popper,
      additionalProps: {
        transition: true,
        role: d,
        open: c,
        anchorEl: n,
        placement: f,
        onKeyDown: K
      },
      className: N.root,
      ownerState: e
    });
    return D.jsx(Z, F({}, x, {
      children: ({ TransitionProps: C, placement: P }) => D.jsx(L, F({
        open: c,
        disableAutoFocus: true,
        disableRestoreFocus: true,
        disableEnforceFocus: d === "tooltip",
        isEnabled: () => true
      }, g == null ? void 0 : g.desktopTrapFocus, {
        children: D.jsx(z, F({}, C, g == null ? void 0 : g.desktopTransition, {
          children: D.jsx(tP, {
            PaperComponent: te,
            ownerState: T,
            popperPlacement: P,
            ref: k,
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
  const rP = ({ open: t, onOpen: e, onClose: n }) => {
    const r = Y.useRef(typeof t == "boolean").current, [s, i] = Y.useState(false);
    Y.useEffect(() => {
      if (r) {
        if (typeof t != "boolean") throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
        i(t);
      }
    }, [
      r,
      t
    ]);
    const a = Y.useCallback((l) => {
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
  }, sP = (t) => {
    const { action: e, hasChanged: n, dateState: r, isControlled: s } = t, i = !s && !r.hasBeenModifiedSinceMount;
    return e.name === "setValueFromField" ? true : e.name === "setValueFromAction" ? i && [
      "accept",
      "today",
      "clear"
    ].includes(e.pickerAction) ? true : n(r.lastPublishedValue) : e.name === "setValueFromView" && e.selectionState !== "shallow" || e.name === "setValueFromShortcut" ? i ? true : n(r.lastPublishedValue) : false;
  }, iP = (t) => {
    const { action: e, hasChanged: n, dateState: r, isControlled: s, closeOnSelect: i } = t, a = !s && !r.hasBeenModifiedSinceMount;
    return e.name === "setValueFromAction" ? a && [
      "accept",
      "today",
      "clear"
    ].includes(e.pickerAction) ? true : n(r.lastCommittedValue) : e.name === "setValueFromView" && e.selectionState === "finish" && i ? a ? true : n(r.lastCommittedValue) : e.name === "setValueFromShortcut" ? e.changeImportance === "accept" && n(r.lastCommittedValue) : false;
  }, aP = (t) => {
    const { action: e, closeOnSelect: n } = t;
    return e.name === "setValueFromAction" ? true : e.name === "setValueFromView" ? e.selectionState === "finish" && n : e.name === "setValueFromShortcut" ? e.changeImportance === "accept" : false;
  }, oP = ({ props: t, valueManager: e, valueType: n, wrapperVariant: r, validator: s }) => {
    const { onAccept: i, onChange: a, value: l, defaultValue: c, closeOnSelect: d = r === "desktop", timezone: f, referenceDate: m } = t, { current: g } = Y.useRef(c), { current: y } = Y.useRef(l !== void 0), [v, S] = Y.useState(f), b = kt(), _ = Oi(), { isOpen: E, setIsOpen: R } = rP(t), { timezone: k, value: T, handleValueChange: N } = uu({
      timezone: f,
      value: l,
      defaultValue: g,
      referenceDate: m,
      onChange: a,
      valueManager: e
    }), [I, O] = Y.useState(() => {
      let X;
      return T !== void 0 ? X = T : g !== void 0 ? X = g : X = e.emptyValue, {
        draft: X,
        lastPublishedValue: X,
        lastCommittedValue: X,
        lastControlledValue: l,
        hasBeenModifiedSinceMount: false
      };
    }), K = e.getTimezone(b, I.draft);
    v !== f && (S(f), f && K && f !== K && O((X) => F({}, X, {
      draft: e.setTimezone(b, f, X.draft)
    })));
    const { getValidationErrorForNewValue: z } = pg({
      props: t,
      validator: s,
      timezone: k,
      value: I.draft,
      onError: t.onError
    }), L = Ae((X) => {
      const ue = {
        action: X,
        dateState: I,
        hasChanged: (we) => !e.areValuesEqual(b, X.value, we),
        isControlled: y,
        closeOnSelect: d
      }, he = sP(ue), Se = iP(ue), q = aP(ue);
      O((we) => F({}, we, {
        draft: X.value,
        lastPublishedValue: he ? X.value : we.lastPublishedValue,
        lastCommittedValue: Se ? X.value : we.lastCommittedValue,
        hasBeenModifiedSinceMount: true
      }));
      let ce = null;
      const me = () => (ce || (ce = {
        validationError: X.name === "setValueFromField" ? X.context.validationError : z(X.value)
      }, X.name === "setValueFromShortcut" && (ce.shortcut = X.shortcut)), ce);
      he && N(X.value, me()), Se && i && i(X.value, me()), q && R(false);
    });
    if (I.lastControlledValue !== l) {
      const X = e.areValuesEqual(b, I.draft, T);
      O((ue) => F({}, ue, {
        lastControlledValue: l
      }, X ? {} : {
        lastCommittedValue: T,
        lastPublishedValue: T,
        draft: T,
        hasBeenModifiedSinceMount: true
      }));
    }
    const te = Ae(() => {
      L({
        value: e.emptyValue,
        name: "setValueFromAction",
        pickerAction: "clear"
      });
    }), Z = Ae(() => {
      L({
        value: I.lastPublishedValue,
        name: "setValueFromAction",
        pickerAction: "accept"
      });
    }), x = Ae(() => {
      L({
        value: I.lastPublishedValue,
        name: "setValueFromAction",
        pickerAction: "dismiss"
      });
    }), C = Ae(() => {
      L({
        value: I.lastCommittedValue,
        name: "setValueFromAction",
        pickerAction: "cancel"
      });
    }), P = Ae(() => {
      L({
        value: e.getTodayValue(b, k, n),
        name: "setValueFromAction",
        pickerAction: "today"
      });
    }), B = Ae((X) => {
      X.preventDefault(), R(true);
    }), H = Ae((X) => {
      X == null ? void 0 : X.preventDefault(), R(false);
    }), ne = Ae((X, ue = "partial") => L({
      name: "setValueFromView",
      value: X,
      selectionState: ue
    })), W = Ae((X, ue, he) => L({
      name: "setValueFromShortcut",
      value: X,
      changeImportance: ue,
      shortcut: he
    })), G = Ae((X, ue) => L({
      name: "setValueFromField",
      value: X,
      context: ue
    })), ee = {
      onClear: te,
      onAccept: Z,
      onDismiss: x,
      onCancel: C,
      onSetToday: P,
      onOpen: B,
      onClose: H
    }, J = {
      value: I.draft,
      onChange: G
    }, ie = Y.useMemo(() => e.cleanValue(b, I.draft), [
      b,
      e,
      I.draft
    ]), j = {
      value: ie,
      onChange: ne,
      onClose: H,
      open: E
    }, re = F({}, ee, {
      value: ie,
      onChange: ne,
      onSelectShortcut: W,
      isValid: (X) => {
        const ue = s({
          adapter: _,
          value: X,
          timezone: k,
          props: t
        });
        return !e.hasError(ue);
      }
    }), Q = Y.useMemo(() => ({
      onOpen: B,
      onClose: H,
      open: E
    }), [
      E,
      H,
      B
    ]);
    return {
      open: E,
      fieldProps: J,
      viewProps: j,
      layoutProps: re,
      actions: ee,
      contextValue: Q
    };
  };
  function xo({ onChange: t, onViewChange: e, openTo: n, view: r, views: s, autoFocus: i, focusedView: a, onFocusedViewChange: l }) {
    const c = Y.useRef(n), d = Y.useRef(s), f = Y.useRef(s.includes(n) ? n : s[0]), [m, g] = ba({
      name: "useViews",
      state: "view",
      controlled: r,
      default: f.current
    }), y = Y.useRef(i ? m : null), [v, S] = ba({
      name: "useViews",
      state: "focusedView",
      controlled: a,
      default: y.current
    });
    Y.useEffect(() => {
      (c.current && c.current !== n || d.current && d.current.some((I) => !s.includes(I))) && (g(s.includes(n) ? n : s[0]), d.current = s, c.current = n);
    }, [
      n,
      g,
      m,
      s
    ]);
    const b = s.indexOf(m), _ = s[b - 1] ?? null, E = s[b + 1] ?? null, R = Ae((I, O) => {
      S(O ? I : (K) => I === K ? null : K), l == null ? void 0 : l(I, O);
    }), k = Ae((I) => {
      R(I, true), I !== m && (g(I), e && e(I));
    }), T = Ae(() => {
      E && k(E);
    }), N = Ae((I, O, K) => {
      const z = O === "finish", L = K ? s.indexOf(K) < s.length - 1 : !!E;
      if (t(I, z && L ? "partial" : O, K), K && K !== m) {
        const Z = s[s.indexOf(K) + 1];
        Z && k(Z);
      } else z && T();
    });
    return {
      view: m,
      setView: k,
      focusedView: v,
      setFocusedView: R,
      nextView: E,
      previousView: _,
      defaultView: s.includes(n) ? n : s[0],
      goToNextView: T,
      setValueAndGoToNextView: N
    };
  }
  const lP = [
    "className",
    "sx"
  ], cP = ({ props: t, propsFromPickerValue: e, additionalViewProps: n, autoFocusView: r, rendererInterceptor: s, fieldRef: i }) => {
    const { onChange: a, open: l, onClose: c } = e, { view: d, views: f, openTo: m, onViewChange: g, viewRenderers: y, timezone: v } = t, S = Ne(t, lP), { view: b, setView: _, defaultView: E, focusedView: R, setFocusedView: k, setValueAndGoToNextView: T } = xo({
      view: d,
      views: f,
      openTo: m,
      onChange: a,
      onViewChange: g,
      autoFocus: r
    }), { hasUIView: N, viewModeLookup: I } = Y.useMemo(() => f.reduce((x, C) => {
      let P;
      return y[C] != null ? P = "UI" : P = "field", x.viewModeLookup[C] = P, P === "UI" && (x.hasUIView = true), x;
    }, {
      hasUIView: false,
      viewModeLookup: {}
    }), [
      y,
      f
    ]), O = Y.useMemo(() => f.reduce((x, C) => y[C] != null && vi(C) ? x + 1 : x, 0), [
      y,
      f
    ]), K = I[b], z = Ae(() => K === "UI"), [L, te] = Y.useState(K === "UI" ? b : null);
    return L !== b && I[b] === "UI" && te(b), ws(() => {
      K === "field" && l && (c(), setTimeout(() => {
        var _a2, _b;
        (_a2 = i == null ? void 0 : i.current) == null ? void 0 : _a2.setSelectedSections(b), (_b = i == null ? void 0 : i.current) == null ? void 0 : _b.focusField(b);
      }));
    }, [
      b
    ]), ws(() => {
      if (!l) return;
      let x = b;
      K === "field" && L != null && (x = L), x !== E && I[x] === "UI" && I[E] === "UI" && (x = E), x !== b && _(x), k(x, true);
    }, [
      l
    ]), {
      hasUIView: N,
      shouldRestoreFocus: z,
      layoutProps: {
        views: f,
        view: L,
        onViewChange: _
      },
      renderCurrentView: () => {
        if (L == null) return null;
        const x = y[L];
        if (x == null) return null;
        const C = F({}, S, n, e, {
          views: f,
          timezone: v,
          onChange: T,
          view: L,
          onViewChange: _,
          focusedView: R,
          onFocusedViewChange: k,
          showViewSwitcher: O > 1,
          timeViewsCount: O
        });
        return s ? s(y, L, C) : x(C);
      }
    };
  };
  function Zf() {
    return typeof window > "u" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
  }
  const uP = (t, e) => {
    const [n, r] = Y.useState(Zf);
    return ws(() => {
      const i = () => {
        r(Zf());
      };
      return window.addEventListener("orientationchange", i), () => {
        window.removeEventListener("orientationchange", i);
      };
    }, []), as(t, [
      "hours",
      "minutes",
      "seconds"
    ]) ? false : (e || n) === "landscape";
  }, dP = ({ props: t, propsFromPickerValue: e, propsFromPickerViews: n, wrapperVariant: r }) => {
    const { orientation: s } = t, i = uP(n.views, s), a = gr();
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
  function fP(t) {
    const { props: e, pickerValueResponse: n } = t;
    return Y.useMemo(() => ({
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
  const Eg = ({ props: t, valueManager: e, valueType: n, wrapperVariant: r, additionalViewProps: s, validator: i, autoFocusView: a, rendererInterceptor: l, fieldRef: c }) => {
    const d = oP({
      props: t,
      valueManager: e,
      valueType: n,
      wrapperVariant: r,
      validator: i
    }), f = cP({
      props: t,
      additionalViewProps: s,
      autoFocusView: a,
      fieldRef: c,
      propsFromPickerValue: d.viewProps,
      rendererInterceptor: l
    }), m = dP({
      props: t,
      wrapperVariant: r,
      propsFromPickerValue: d.layoutProps,
      propsFromPickerViews: f.layoutProps
    }), g = fP({
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
  function Cg(t) {
    return vt("MuiPickersLayout", t);
  }
  const Er = bt("MuiPickersLayout", [
    "root",
    "landscape",
    "contentWrapper",
    "toolbar",
    "actionBar",
    "tabs",
    "shortcuts"
  ]), hP = [
    "onAccept",
    "onClear",
    "onCancel",
    "onSetToday",
    "actions"
  ];
  function mP(t) {
    const { onAccept: e, onClear: n, onCancel: r, onSetToday: s, actions: i } = t, a = Ne(t, hP), l = hn();
    if (i == null || i.length === 0) return null;
    const c = i == null ? void 0 : i.map((d) => {
      switch (d) {
        case "clear":
          return D.jsx(Xs, {
            onClick: n,
            children: l.clearButtonLabel
          }, d);
        case "cancel":
          return D.jsx(Xs, {
            onClick: r,
            children: l.cancelButtonLabel
          }, d);
        case "accept":
          return D.jsx(Xs, {
            onClick: e,
            children: l.okButtonLabel
          }, d);
        case "today":
          return D.jsx(Xs, {
            onClick: s,
            children: l.todayButtonLabel
          }, d);
        default:
          return null;
      }
    });
    return D.jsx(Pw, F({}, a, {
      children: c
    }));
  }
  const Ag = 320, Rg = 336, Og = 232, pP = 48, gP = [
    "items",
    "changeImportance",
    "isLandscape",
    "onChange",
    "isValid"
  ], yP = [
    "getValue"
  ];
  function vP(t) {
    const { items: e, changeImportance: n = "accept", onChange: r, isValid: s } = t, i = Ne(t, gP);
    if (e == null || e.length === 0) return null;
    const a = e.map((l) => {
      let { getValue: c } = l, d = Ne(l, yP);
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
    return D.jsx(Nw, F({
      dense: true,
      sx: [
        {
          maxHeight: Rg,
          maxWidth: 200,
          overflow: "auto"
        },
        ...Array.isArray(i.sx) ? i.sx : [
          i.sx
        ]
      ]
    }, i, {
      children: a.map((l) => D.jsx(Lw, {
        children: D.jsx(Yw, F({}, l))
      }, l.id ?? l.label))
    }));
  }
  function bP(t) {
    return t.view !== null;
  }
  const wP = (t) => {
    const { classes: e, isLandscape: n } = t;
    return ht({
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
    }, Cg, e);
  }, SP = (t) => {
    const { wrapperVariant: e, onAccept: n, onClear: r, onCancel: s, onSetToday: i, view: a, views: l, onViewChange: c, value: d, onChange: f, onSelectShortcut: m, isValid: g, isLandscape: y, disabled: v, readOnly: S, children: b, slots: _, slotProps: E } = t, R = wP(t), k = (_ == null ? void 0 : _.actionBar) ?? mP, T = ot({
      elementType: k,
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
    }), N = D.jsx(k, F({}, T)), I = _ == null ? void 0 : _.toolbar, O = ot({
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
    }), K = bP(O) && I ? D.jsx(I, F({}, O)) : null, z = b, L = _ == null ? void 0 : _.tabs, te = a && L ? D.jsx(L, F({
      view: a,
      onViewChange: c,
      className: R.tabs
    }, E == null ? void 0 : E.tabs)) : null, Z = (_ == null ? void 0 : _.shortcuts) ?? vP, x = ot({
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
    }), C = a && Z ? D.jsx(Z, F({}, x)) : null;
    return {
      toolbar: K,
      content: z,
      tabs: te,
      actionBar: N,
      shortcuts: C
    };
  }, _P = (t) => {
    const { isLandscape: e, classes: n } = t;
    return ht({
      root: [
        "root",
        e && "landscape"
      ],
      contentWrapper: [
        "contentWrapper"
      ]
    }, Cg, n);
  }, DP = ke("div", {
    name: "MuiPickersLayout",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "grid",
    gridAutoColumns: "max-content auto max-content",
    gridAutoRows: "max-content auto max-content",
    [`& .${Er.actionBar}`]: {
      gridColumn: "1 / 4",
      gridRow: 3
    },
    variants: [
      {
        props: {
          isLandscape: true
        },
        style: {
          [`& .${Er.toolbar}`]: {
            gridColumn: 1,
            gridRow: "2 / 3"
          },
          [`.${Er.shortcuts}`]: {
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
          [`& .${Er.toolbar}`]: {
            gridColumn: 3
          }
        }
      },
      {
        props: {
          isLandscape: false
        },
        style: {
          [`& .${Er.toolbar}`]: {
            gridColumn: "2 / 4",
            gridRow: 1
          },
          [`& .${Er.shortcuts}`]: {
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
          [`& .${Er.shortcuts}`]: {
            gridColumn: 3
          }
        }
      }
    ]
  }), kP = ke("div", {
    name: "MuiPickersLayout",
    slot: "ContentWrapper",
    overridesResolver: (t, e) => e.contentWrapper
  })({
    gridColumn: 2,
    gridRow: 2,
    display: "flex",
    flexDirection: "column"
  }), Ig = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiPickersLayout"
    }), { toolbar: s, content: i, tabs: a, actionBar: l, shortcuts: c } = SP(r), { sx: d, className: f, isLandscape: m, wrapperVariant: g } = r, y = _P(r);
    return D.jsxs(DP, {
      ref: n,
      sx: d,
      className: Ct(y.root, f),
      ownerState: r,
      children: [
        m ? c : s,
        m ? s : c,
        D.jsx(kP, {
          className: y.contentWrapper,
          children: g === "desktop" ? D.jsxs(Y.Fragment, {
            children: [
              i,
              a
            ]
          }) : D.jsxs(Y.Fragment, {
            children: [
              a,
              i
            ]
          })
        }),
        l
      ]
    });
  }), xP = [
    "props",
    "getOpenDialogAriaText"
  ], TP = [
    "ownerState"
  ], MP = [
    "ownerState"
  ], EP = (t) => {
    var _a2;
    let { props: e, getOpenDialogAriaText: n } = t, r = Ne(t, xP);
    const { slots: s, slotProps: i, className: a, sx: l, format: c, formatDensity: d, enableAccessibleFieldDOMStructure: f, selectedSections: m, onSelectedSectionsChange: g, timezone: y, name: v, label: S, inputRef: b, readOnly: _, disabled: E, autoFocus: R, localeText: k, reduceAnimations: T } = e, N = Y.useRef(null), I = Y.useRef(null), O = _i(), K = ((_a2 = i == null ? void 0 : i.toolbar) == null ? void 0 : _a2.hidden) ?? false, { open: z, actions: L, hasUIView: te, layoutProps: Z, renderCurrentView: x, shouldRestoreFocus: C, fieldProps: P, contextValue: B, ownerState: H } = Eg(F({}, r, {
      props: e,
      fieldRef: I,
      autoFocusView: true,
      additionalViewProps: {},
      wrapperVariant: "desktop"
    })), ne = s.inputAdornment ?? sh, W = ot({
      elementType: ne,
      externalSlotProps: i == null ? void 0 : i.inputAdornment,
      additionalProps: {
        position: "end"
      },
      ownerState: e
    }), G = Ne(W, TP), ee = s.openPickerButton ?? Si, J = ot({
      elementType: ee,
      externalSlotProps: i == null ? void 0 : i.openPickerButton,
      additionalProps: {
        disabled: E || _,
        onClick: z ? L.onClose : L.onOpen,
        "aria-label": n(P.value),
        edge: G.position
      },
      ownerState: e
    }), ie = Ne(J, MP), j = s.openPickerIcon, se = ot({
      elementType: j,
      externalSlotProps: i == null ? void 0 : i.openPickerIcon,
      ownerState: H
    }), re = s.field, Q = ot({
      elementType: re,
      externalSlotProps: i == null ? void 0 : i.field,
      additionalProps: F({}, P, K && {
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
        focused: z ? true : void 0
      }, b ? {
        inputRef: b
      } : {}),
      ownerState: e
    });
    te && (Q.InputProps = F({}, Q.InputProps, {
      ref: N
    }, !e.disableOpenPicker && {
      [`${G.position}Adornment`]: D.jsx(ne, F({}, G, {
        children: D.jsx(ee, F({}, ie, {
          children: D.jsx(j, F({}, se))
        }))
      }))
    }));
    const X = F({
      textField: s.textField,
      clearIcon: s.clearIcon,
      clearButton: s.clearButton
    }, Q.slots), ue = s.layout ?? Ig;
    let he = O;
    K && (S ? he = `${O}-label` : he = void 0);
    const Se = F({}, i, {
      toolbar: F({}, i == null ? void 0 : i.toolbar, {
        titleId: O
      }),
      popper: F({
        "aria-labelledby": he
      }, i == null ? void 0 : i.popper)
    }), q = $t(I, Q.unstableFieldRef);
    return {
      renderPicker: () => D.jsxs(gg, {
        contextValue: B,
        localeText: k,
        children: [
          D.jsx(re, F({}, Q, {
            slots: X,
            slotProps: Se,
            unstableFieldRef: q
          })),
          D.jsx(nP, F({
            role: "dialog",
            placement: "bottom-start",
            anchorEl: N.current
          }, L, {
            open: z,
            slots: s,
            slotProps: Se,
            shouldRestoreFocus: C,
            reduceAnimations: T,
            children: D.jsx(ue, F({}, Z, Se == null ? void 0 : Se.layout, {
              slots: s,
              slotProps: Se,
              children: x()
            }))
          }))
        ]
      })
    };
  };
  function CP(t) {
    return vt("MuiPickersArrowSwitcher", t);
  }
  bt("MuiPickersArrowSwitcher", [
    "root",
    "spacer",
    "button",
    "previousIconButton",
    "nextIconButton",
    "leftArrowIcon",
    "rightArrowIcon"
  ]);
  const AP = [
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
  ], RP = [
    "ownerState"
  ], OP = [
    "ownerState"
  ], IP = ke("div", {
    name: "MuiPickersArrowSwitcher",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "flex"
  }), PP = ke("div", {
    name: "MuiPickersArrowSwitcher",
    slot: "Spacer",
    overridesResolver: (t, e) => e.spacer
  })(({ theme: t }) => ({
    width: t.spacing(3)
  })), Qf = ke(Si, {
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
  }), NP = (t) => {
    const { classes: e } = t;
    return ht({
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
    }, CP, e);
  }, LP = Y.forwardRef(function(e, n) {
    const r = gr(), s = lt({
      props: e,
      name: "MuiPickersArrowSwitcher"
    }), { children: i, className: a, slots: l, slotProps: c, isNextDisabled: d, isNextHidden: f, onGoToNext: m, nextLabel: g, isPreviousDisabled: y, isPreviousHidden: v, onGoToPrevious: S, previousLabel: b, labelId: _ } = s, E = Ne(s, AP), R = s, k = NP(R), T = {
      isDisabled: d,
      isHidden: f,
      goTo: m,
      label: g
    }, N = {
      isDisabled: y,
      isHidden: v,
      goTo: S,
      label: b
    }, I = (l == null ? void 0 : l.previousIconButton) ?? Qf, O = ot({
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
      className: Ct(k.button, k.previousIconButton)
    }), K = (l == null ? void 0 : l.nextIconButton) ?? Qf, z = ot({
      elementType: K,
      externalSlotProps: c == null ? void 0 : c.nextIconButton,
      additionalProps: {
        size: "medium",
        title: T.label,
        "aria-label": T.label,
        disabled: T.isDisabled,
        edge: "start",
        onClick: T.goTo
      },
      ownerState: F({}, R, {
        hidden: T.isHidden
      }),
      className: Ct(k.button, k.nextIconButton)
    }), L = (l == null ? void 0 : l.leftArrowIcon) ?? xO, te = ot({
      elementType: L,
      externalSlotProps: c == null ? void 0 : c.leftArrowIcon,
      additionalProps: {
        fontSize: "inherit"
      },
      ownerState: R,
      className: k.leftArrowIcon
    }), Z = Ne(te, RP), x = (l == null ? void 0 : l.rightArrowIcon) ?? TO, C = ot({
      elementType: x,
      externalSlotProps: c == null ? void 0 : c.rightArrowIcon,
      additionalProps: {
        fontSize: "inherit"
      },
      ownerState: R,
      className: k.rightArrowIcon
    }), P = Ne(C, OP);
    return D.jsxs(IP, F({
      ref: n,
      className: Ct(k.root, a),
      ownerState: R
    }, E, {
      children: [
        D.jsx(I, F({}, O, {
          children: r ? D.jsx(x, F({}, P)) : D.jsx(L, F({}, Z))
        })),
        i ? D.jsx(qa, {
          variant: "subtitle1",
          component: "span",
          id: _,
          children: i
        }) : D.jsx(PP, {
          className: k.spacer,
          ownerState: R
        }),
        D.jsx(K, F({}, z, {
          children: r ? D.jsx(L, F({}, Z)) : D.jsx(x, F({}, P))
        }))
      ]
    }));
  }), pu = ke("div")({
    overflow: "hidden",
    width: Ag,
    maxHeight: Rg,
    display: "flex",
    flexDirection: "column",
    margin: "0 auto"
  });
  function YP(t) {
    return vt("MuiTimeClock", t);
  }
  bt("MuiTimeClock", [
    "root",
    "arrowSwitcher"
  ]);
  const Ts = 220, $n = 36, wi = {
    x: Ts / 2,
    y: Ts / 2
  }, Pg = {
    x: wi.x,
    y: 0
  }, FP = Pg.x - wi.x, HP = Pg.y - wi.y, jP = (t) => t * (180 / Math.PI), Ng = (t, e, n) => {
    const r = e - wi.x, s = n - wi.y, i = Math.atan2(FP, HP) - Math.atan2(r, s);
    let a = jP(i);
    a = Math.round(a / t) * t, a %= 360;
    const l = Math.floor(a / t) || 0, c = r ** 2 + s ** 2, d = Math.sqrt(c);
    return {
      value: l,
      distance: d
    };
  }, VP = (t, e, n = 1) => {
    const r = n * 6;
    let { value: s } = Ng(r, t, e);
    return s = s * n % 60, s;
  }, WP = (t, e, n) => {
    const { value: r, distance: s } = Ng(30, t, e);
    let i = r || 12;
    return n ? i %= 12 : s < Ts / 2 - $n && (i += 12, i %= 24), i;
  };
  function UP(t) {
    return vt("MuiClockPointer", t);
  }
  bt("MuiClockPointer", [
    "root",
    "thumb"
  ]);
  const BP = [
    "className",
    "hasSelected",
    "isInner",
    "type",
    "viewValue"
  ], zP = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      thumb: [
        "thumb"
      ]
    }, UP, e);
  }, $P = ke("div", {
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
  })), GP = ke("div", {
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
    left: `calc(50% - ${$n / 2}px)`,
    border: `${($n - 4) / 2}px solid ${(t.vars || t).palette.primary.main}`,
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
  function qP(t) {
    const e = lt({
      props: t,
      name: "MuiClockPointer"
    }), { className: n, isInner: r, type: s, viewValue: i } = e, a = Ne(e, BP), l = Y.useRef(s);
    Y.useEffect(() => {
      l.current = s;
    }, [
      s
    ]);
    const c = F({}, e, {
      shouldAnimate: l.current !== s
    }), d = zP(c), f = () => {
      let g = 360 / (s === "hours" ? 12 : 60) * i;
      return s === "hours" && i > 12 && (g -= 360), {
        height: Math.round((r ? 0.26 : 0.4) * Ts),
        transform: `rotateZ(${g}deg)`
      };
    };
    return D.jsx($P, F({
      style: f(),
      className: Ct(d.root, n),
      ownerState: c
    }, a, {
      children: D.jsx(GP, {
        ownerState: c,
        className: d.thumb
      })
    }));
  }
  function ZP(t) {
    return vt("MuiClock", t);
  }
  bt("MuiClock", [
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
  const QP = (t) => {
    const { classes: e, meridiemMode: n } = t;
    return ht({
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
    }, ZP, e);
  }, XP = ke("div", {
    name: "MuiClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: t.spacing(2)
  })), JP = ke("div", {
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
  }), KP = ke("div", {
    name: "MuiClock",
    slot: "Wrapper",
    overridesResolver: (t, e) => e.wrapper
  })({
    "&:focus": {
      outline: "none"
    }
  }), eN = ke("div", {
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
  }), tN = ke("div", {
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
  })), Lg = (t, e) => ({
    zIndex: 1,
    bottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    width: $n,
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
  }), nN = ke(Si, {
    name: "MuiClock",
    slot: "AmButton",
    overridesResolver: (t, e) => e.amButton
  })(({ theme: t }) => F({}, Lg(t, "am"), {
    position: "absolute",
    left: 8
  })), rN = ke(Si, {
    name: "MuiClock",
    slot: "PmButton",
    overridesResolver: (t, e) => e.pmButton
  })(({ theme: t }) => F({}, Lg(t, "pm"), {
    position: "absolute",
    right: 8
  })), Xf = ke(qa, {
    name: "MuiClock",
    slot: "meridiemText",
    overridesResolver: (t, e) => e.meridiemText
  })({
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  });
  function sN(t) {
    const e = lt({
      props: t,
      name: "MuiClock"
    }), { ampm: n, ampmInClock: r, autoFocus: s, children: i, value: a, handleMeridiemChange: l, isTimeDisabled: c, meridiemMode: d, minutesStep: f = 1, onChange: m, selectedId: g, type: y, viewValue: v, viewRange: [S, b], disabled: _ = false, readOnly: E, className: R } = e, k = e, T = kt(), N = hn(), I = Y.useRef(false), O = QP(k), K = c(v, y), z = !n && y === "hours" && (v < 1 || v > 12), L = (J, ie) => {
      _ || E || c(J, y) || m(J, ie);
    }, te = (J, ie) => {
      let { offsetX: j, offsetY: se } = J;
      if (j === void 0) {
        const Q = J.target.getBoundingClientRect();
        j = J.changedTouches[0].clientX - Q.left, se = J.changedTouches[0].clientY - Q.top;
      }
      const re = y === "seconds" || y === "minutes" ? VP(j, se, f) : WP(j, se, !!n);
      L(re, ie);
    }, Z = (J) => {
      I.current = true, te(J, "shallow");
    }, x = (J) => {
      I.current && (te(J, "finish"), I.current = false), J.preventDefault();
    }, C = (J) => {
      J.buttons > 0 && te(J.nativeEvent, "shallow");
    }, P = (J) => {
      I.current && (I.current = false), te(J.nativeEvent, "finish");
    }, B = Y.useMemo(() => y === "hours" ? true : v % 5 === 0, [
      y,
      v
    ]), H = y === "minutes" ? f : 1, ne = Y.useRef(null);
    ws(() => {
      s && ne.current.focus();
    }, [
      s
    ]);
    const W = (J) => Math.max(S, Math.min(b, J)), G = (J) => (J + (b + 1)) % (b + 1), ee = (J) => {
      if (!I.current) switch (J.key) {
        case "Home":
          L(S, "partial"), J.preventDefault();
          break;
        case "End":
          L(b, "partial"), J.preventDefault();
          break;
        case "ArrowUp":
          L(G(v + H), "partial"), J.preventDefault();
          break;
        case "ArrowDown":
          L(G(v - H), "partial"), J.preventDefault();
          break;
        case "PageUp":
          L(W(v + 5), "partial"), J.preventDefault();
          break;
        case "PageDown":
          L(W(v - 5), "partial"), J.preventDefault();
          break;
        case "Enter":
        case " ":
          L(v, "finish"), J.preventDefault();
          break;
      }
    };
    return D.jsxs(XP, {
      className: Ct(O.root, R),
      children: [
        D.jsxs(JP, {
          className: O.clock,
          children: [
            D.jsx(eN, {
              onTouchMove: Z,
              onTouchStart: Z,
              onTouchEnd: x,
              onMouseUp: P,
              onMouseMove: C,
              ownerState: {
                disabled: _
              },
              className: O.squareMask
            }),
            !K && D.jsxs(Y.Fragment, {
              children: [
                D.jsx(tN, {
                  className: O.pin
                }),
                a != null && D.jsx(qP, {
                  type: y,
                  viewValue: v,
                  isInner: z,
                  hasSelected: B
                })
              ]
            }),
            D.jsx(KP, {
              "aria-activedescendant": g,
              "aria-label": N.clockLabelText(y, a, T, a == null ? null : T.format(a, "fullTime")),
              ref: ne,
              role: "listbox",
              onKeyDown: ee,
              tabIndex: 0,
              className: O.wrapper,
              children: i
            })
          ]
        }),
        n && r && D.jsxs(Y.Fragment, {
          children: [
            D.jsx(nN, {
              onClick: E ? void 0 : () => l("am"),
              disabled: _ || d === null,
              ownerState: k,
              className: O.amButton,
              title: ur(T, "am"),
              children: D.jsx(Xf, {
                variant: "caption",
                className: O.meridiemText,
                children: ur(T, "am")
              })
            }),
            D.jsx(rN, {
              disabled: _ || d === null,
              onClick: E ? void 0 : () => l("pm"),
              ownerState: k,
              className: O.pmButton,
              title: ur(T, "pm"),
              children: D.jsx(Xf, {
                variant: "caption",
                className: O.meridiemText,
                children: ur(T, "pm")
              })
            })
          ]
        })
      ]
    });
  }
  function iN(t) {
    return vt("MuiClockNumber", t);
  }
  const oa = bt("MuiClockNumber", [
    "root",
    "selected",
    "disabled"
  ]), aN = [
    "className",
    "disabled",
    "index",
    "inner",
    "label",
    "selected"
  ], oN = (t) => {
    const { classes: e, selected: n, disabled: r } = t;
    return ht({
      root: [
        "root",
        n && "selected",
        r && "disabled"
      ]
    }, iN, e);
  }, lN = ke("span", {
    name: "MuiClockNumber",
    slot: "Root",
    overridesResolver: (t, e) => [
      e.root,
      {
        [`&.${oa.disabled}`]: e.disabled
      },
      {
        [`&.${oa.selected}`]: e.selected
      }
    ]
  })(({ theme: t }) => ({
    height: $n,
    width: $n,
    position: "absolute",
    left: `calc((100% - ${$n}px) / 2)`,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    color: (t.vars || t).palette.text.primary,
    fontFamily: t.typography.fontFamily,
    "&:focused": {
      backgroundColor: (t.vars || t).palette.background.paper
    },
    [`&.${oa.selected}`]: {
      color: (t.vars || t).palette.primary.contrastText
    },
    [`&.${oa.disabled}`]: {
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
  function Yg(t) {
    const e = lt({
      props: t,
      name: "MuiClockNumber"
    }), { className: n, disabled: r, index: s, inner: i, label: a, selected: l } = e, c = Ne(e, aN), d = e, f = oN(d), m = s % 12 / 12 * Math.PI * 2 - Math.PI / 2, g = (Ts - $n - 2) / 2 * (i ? 0.65 : 1), y = Math.round(Math.cos(m) * g), v = Math.round(Math.sin(m) * g);
    return D.jsx(lN, F({
      className: Ct(f.root, n),
      "aria-disabled": r ? true : void 0,
      "aria-selected": l ? true : void 0,
      role: "option",
      style: {
        transform: `translate(${y}px, ${v + (Ts - $n) / 2}px`
      },
      ownerState: d
    }, c, {
      children: a
    }));
  }
  const cN = ({ ampm: t, value: e, getClockNumberText: n, isDisabled: r, selectedId: s, utils: i }) => {
    const a = e ? i.getHours(e) : null, l = [], c = t ? 1 : 0, d = t ? 12 : 23, f = (m) => a === null ? false : t ? m === 12 ? a === 12 || a === 0 : a === m || a - 12 === m : a === m;
    for (let m = c; m <= d; m += 1) {
      let g = m.toString();
      m === 0 && (g = "00");
      const y = !t && (m === 0 || m > 12);
      g = i.formatNumber(g);
      const v = f(m);
      l.push(D.jsx(Yg, {
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
  }, Jf = ({ utils: t, value: e, isDisabled: n, getClockNumberText: r, selectedId: s }) => {
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
      return D.jsx(Yg, {
        label: l,
        id: d ? s : void 0,
        index: c + 1,
        inner: false,
        disabled: n(a),
        selected: d,
        "aria-label": r(l)
      }, a);
    });
  }, gu = ({ value: t, referenceDate: e, utils: n, props: r, timezone: s }) => {
    const i = Y.useMemo(() => wr.getInitialReferenceValue({
      value: t,
      utils: n,
      props: r,
      referenceDate: e,
      granularity: nr.day,
      timezone: s,
      getTodayDate: () => au(n, s, "date")
    }), []);
    return t ?? i;
  }, uN = [
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
  ], dN = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      arrowSwitcher: [
        "arrowSwitcher"
      ]
    }, YP, e);
  }, fN = ke(pu, {
    name: "MuiTimeClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    display: "flex",
    flexDirection: "column",
    position: "relative"
  }), hN = ke(LP, {
    name: "MuiTimeClock",
    slot: "ArrowSwitcher",
    overridesResolver: (t, e) => e.arrowSwitcher
  })({
    position: "absolute",
    right: 12,
    top: 15
  }), mN = [
    "hours",
    "minutes"
  ], pN = Y.forwardRef(function(e, n) {
    const r = kt(), s = lt({
      props: e,
      name: "MuiTimeClock"
    }), { ampm: i = r.is12HourCycleInCurrentLocale(), ampmInClock: a = false, autoFocus: l, slots: c, slotProps: d, value: f, defaultValue: m, referenceDate: g, disableIgnoringDatePartForTimeValidation: y = false, maxTime: v, minTime: S, disableFuture: b, disablePast: _, minutesStep: E = 1, shouldDisableTime: R, showViewSwitcher: k, onChange: T, view: N, views: I = mN, openTo: O, onViewChange: K, focusedView: z, onFocusedViewChange: L, className: te, disabled: Z, readOnly: x, timezone: C } = s, P = Ne(s, uN), { value: B, handleValueChange: H, timezone: ne } = du({
      name: "TimeClock",
      timezone: C,
      value: f,
      defaultValue: m,
      referenceDate: g,
      onChange: T,
      valueManager: wr
    }), W = gu({
      value: B,
      referenceDate: g,
      utils: r,
      props: s,
      timezone: ne
    }), G = hn(), ee = cu(ne), { view: J, setView: ie, previousView: j, nextView: se, setValueAndGoToNextView: re } = xo({
      view: N,
      views: I,
      openTo: O,
      onViewChange: K,
      onChange: H,
      focusedView: z,
      onFocusedViewChange: L
    }), { meridiemMode: Q, handleMeridiemChange: X } = mu(W, i, re), ue = Y.useCallback((me, we) => {
      const le = Ri(y, r), Ce = we === "hours" || we === "minutes" && I.includes("seconds"), _e = ({ start: De, end: _t }) => !(S && le(S, _t) || v && le(De, v) || b && le(De, ee) || _ && le(ee, Ce ? _t : De)), ye = (De, _t = 1) => {
        if (De % _t !== 0) return false;
        if (R) switch (we) {
          case "hours":
            return !R(r.setHours(W, De), "hours");
          case "minutes":
            return !R(r.setMinutes(W, De), "minutes");
          case "seconds":
            return !R(r.setSeconds(W, De), "seconds");
          default:
            return false;
        }
        return true;
      };
      switch (we) {
        case "hours": {
          const De = bi(me, Q, i), _t = r.setHours(W, De);
          if (r.getHours(_t) !== De) return true;
          const mn = r.setSeconds(r.setMinutes(_t, 0), 0), Sr = r.setSeconds(r.setMinutes(_t, 59), 59);
          return !_e({
            start: mn,
            end: Sr
          }) || !ye(De);
        }
        case "minutes": {
          const De = r.setMinutes(W, me), _t = r.setSeconds(De, 0), mn = r.setSeconds(De, 59);
          return !_e({
            start: _t,
            end: mn
          }) || !ye(me, E);
        }
        case "seconds": {
          const De = r.setSeconds(W, me);
          return !_e({
            start: De,
            end: De
          }) || !ye(me);
        }
        default:
          throw new Error("not supported");
      }
    }, [
      i,
      W,
      y,
      v,
      Q,
      S,
      E,
      R,
      r,
      b,
      _,
      ee,
      I
    ]), he = _i(), Se = Y.useMemo(() => {
      switch (J) {
        case "hours": {
          const me = (Ce, _e) => {
            const ye = bi(Ce, Q, i);
            re(r.setHours(W, ye), _e, "hours");
          }, we = r.getHours(W);
          let le;
          return i ? we > 12 ? le = [
            12,
            23
          ] : le = [
            0,
            11
          ] : le = [
            0,
            23
          ], {
            onChange: me,
            viewValue: we,
            children: cN({
              value: B,
              utils: r,
              ampm: i,
              getClockNumberText: G.hoursClockNumberText,
              isDisabled: (Ce) => Z || ue(Ce, "hours"),
              selectedId: he
            }),
            viewRange: le
          };
        }
        case "minutes": {
          const me = r.getMinutes(W);
          return {
            viewValue: me,
            onChange: (le, Ce) => {
              re(r.setMinutes(W, le), Ce, "minutes");
            },
            children: Jf({
              utils: r,
              value: me,
              getClockNumberText: G.minutesClockNumberText,
              isDisabled: (le) => Z || ue(le, "minutes"),
              selectedId: he
            }),
            viewRange: [
              0,
              59
            ]
          };
        }
        case "seconds": {
          const me = r.getSeconds(W);
          return {
            viewValue: me,
            onChange: (le, Ce) => {
              re(r.setSeconds(W, le), Ce, "seconds");
            },
            children: Jf({
              utils: r,
              value: me,
              getClockNumberText: G.secondsClockNumberText,
              isDisabled: (le) => Z || ue(le, "seconds"),
              selectedId: he
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
      J,
      r,
      B,
      i,
      G.hoursClockNumberText,
      G.minutesClockNumberText,
      G.secondsClockNumberText,
      Q,
      re,
      W,
      ue,
      he,
      Z
    ]), q = s, ce = dN(q);
    return D.jsxs(fN, F({
      ref: n,
      className: Ct(ce.root, te),
      ownerState: q
    }, P, {
      children: [
        D.jsx(sN, F({
          autoFocus: l ?? !!z,
          ampmInClock: a && I.includes("hours"),
          value: B,
          type: J,
          ampm: i,
          minutesStep: E,
          isTimeDisabled: ue,
          meridiemMode: Q,
          handleMeridiemChange: X,
          selectedId: he,
          disabled: Z,
          readOnly: x
        }, Se)),
        k && D.jsx(hN, {
          className: ce.arrowSwitcher,
          slots: c,
          slotProps: d,
          onGoToPrevious: () => ie(j),
          isPreviousDisabled: !j,
          previousLabel: G.openPreviousView,
          onGoToNext: () => ie(se),
          isNextDisabled: !se,
          nextLabel: G.openNextView,
          ownerState: q
        })
      ]
    }));
  });
  function gN(t) {
    return vt("MuiDigitalClock", t);
  }
  bt("MuiDigitalClock", [
    "root",
    "list",
    "item"
  ]);
  const yN = [
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
  ], vN = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      list: [
        "list"
      ],
      item: [
        "item"
      ]
    }, gN, e);
  }, bN = ke(pu, {
    name: "MuiDigitalClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })({
    overflowY: "auto",
    width: "100%",
    "@media (prefers-reduced-motion: no-preference)": {
      scrollBehavior: "auto"
    },
    maxHeight: Og,
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
  }), wN = ke(lh, {
    name: "MuiDigitalClock",
    slot: "List",
    overridesResolver: (t, e) => e.list
  })({
    padding: 0
  }), SN = ke(oh, {
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
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})` : oi.alpha(t.palette.primary.main, t.palette.action.hoverOpacity)
    },
    "&.Mui-selected": {
      backgroundColor: (t.vars || t).palette.primary.main,
      color: (t.vars || t).palette.primary.contrastText,
      "&:focus-visible, &:hover": {
        backgroundColor: (t.vars || t).palette.primary.dark
      }
    },
    "&.Mui-focusVisible": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.focusOpacity})` : oi.alpha(t.palette.primary.main, t.palette.action.focusOpacity)
    }
  })), _N = Y.forwardRef(function(e, n) {
    const r = kt(), s = Y.useRef(null), i = $t(n, s), a = Y.useRef(null), l = lt({
      props: e,
      name: "MuiDigitalClock"
    }), { ampm: c = r.is12HourCycleInCurrentLocale(), timeStep: d = 30, autoFocus: f, slots: m, slotProps: g, value: y, defaultValue: v, referenceDate: S, disableIgnoringDatePartForTimeValidation: b = false, maxTime: _, minTime: E, disableFuture: R, disablePast: k, minutesStep: T = 1, shouldDisableTime: N, onChange: I, view: O, openTo: K, onViewChange: z, focusedView: L, onFocusedViewChange: te, className: Z, disabled: x, readOnly: C, views: P = [
      "hours"
    ], skipDisabled: B = false, timezone: H } = l, ne = Ne(l, yN), { value: W, handleValueChange: G, timezone: ee } = du({
      name: "DigitalClock",
      timezone: H,
      value: y,
      defaultValue: v,
      referenceDate: S,
      onChange: I,
      valueManager: wr
    }), J = hn(), ie = cu(ee), j = Y.useMemo(() => F({}, l, {
      alreadyRendered: !!s.current
    }), [
      l
    ]), se = vN(j), re = (m == null ? void 0 : m.digitalClockItem) ?? SN, Q = ot({
      elementType: re,
      externalSlotProps: g == null ? void 0 : g.digitalClockItem,
      ownerState: {},
      className: se.item
    }), X = gu({
      value: W,
      referenceDate: S,
      utils: r,
      props: l,
      timezone: ee
    }), ue = Ae((le) => G(le, "finish", "hours")), { setValueAndGoToNextView: he } = xo({
      view: O,
      views: P,
      openTo: K,
      onViewChange: z,
      onChange: ue,
      focusedView: L,
      onFocusedViewChange: te
    }), Se = Ae((le) => {
      he(le, "finish");
    });
    Y.useEffect(() => {
      if (s.current === null) return;
      const le = s.current.querySelector('[role="listbox"] [role="option"][tabindex="0"], [role="listbox"] [role="option"][aria-selected="true"]');
      if (!le) return;
      const Ce = le.offsetTop;
      (f || L) && le.focus(), s.current.scrollTop = Ce - 4;
    });
    const q = Y.useCallback((le) => {
      const Ce = Ri(b, r), _e = () => !(E && Ce(E, le) || _ && Ce(le, _) || R && Ce(le, ie) || k && Ce(ie, le)), ye = () => r.getMinutes(le) % T !== 0 ? false : N ? !N(le, "hours") : true;
      return !_e() || !ye();
    }, [
      b,
      r,
      E,
      _,
      R,
      ie,
      k,
      T,
      N
    ]), ce = Y.useMemo(() => {
      const le = [];
      let _e = r.startOfDay(X);
      for (; r.isSameDay(X, _e); ) le.push(_e), _e = r.addMinutes(_e, d);
      return le;
    }, [
      X,
      d,
      r
    ]), me = ce.findIndex((le) => r.isEqual(le, X)), we = (le) => {
      switch (le.key) {
        case "PageUp": {
          const Ce = $a(a.current) - 5, _e = a.current.children, ye = Math.max(0, Ce), De = _e[ye];
          De && De.focus(), le.preventDefault();
          break;
        }
        case "PageDown": {
          const Ce = $a(a.current) + 5, _e = a.current.children, ye = Math.min(_e.length - 1, Ce), De = _e[ye];
          De && De.focus(), le.preventDefault();
          break;
        }
      }
    };
    return D.jsx(bN, F({
      ref: i,
      className: Ct(se.root, Z),
      ownerState: j
    }, ne, {
      children: D.jsx(wN, {
        ref: a,
        role: "listbox",
        "aria-label": J.timePickerToolbarTitle,
        className: se.list,
        onKeyDown: we,
        children: ce.map((le, Ce) => {
          if (B && q(le)) return null;
          const _e = r.isEqual(le, W), ye = r.format(le, c ? "fullTime12h" : "fullTime24h"), De = me === Ce || me === -1 && Ce === 0 ? 0 : -1;
          return D.jsx(re, F({
            onClick: () => !C && Se(le),
            selected: _e,
            disabled: x || q(le),
            disableRipple: C,
            role: "option",
            "aria-disabled": C,
            "aria-selected": _e,
            tabIndex: De
          }, Q, {
            children: ye
          }), `${le.valueOf()}-${ye}`);
        })
      })
    }));
  });
  function DN(t) {
    return vt("MuiMultiSectionDigitalClock", t);
  }
  bt("MuiMultiSectionDigitalClock", [
    "root"
  ]);
  function kN(t) {
    return vt("MuiMultiSectionDigitalClockSection", t);
  }
  bt("MuiMultiSectionDigitalClockSection", [
    "root",
    "item"
  ]);
  const xN = [
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
  ], TN = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ],
      item: [
        "item"
      ]
    }, kN, e);
  }, MN = ke(lh, {
    name: "MuiMultiSectionDigitalClockSection",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    maxHeight: Og,
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
  })), EN = ke(oh, {
    name: "MuiMultiSectionDigitalClockSection",
    slot: "Item",
    overridesResolver: (t, e) => e.item
  })(({ theme: t }) => ({
    padding: 8,
    margin: "2px 4px",
    width: pP,
    justifyContent: "center",
    "&:first-of-type": {
      marginTop: 4
    },
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})` : oi.alpha(t.palette.primary.main, t.palette.action.hoverOpacity)
    },
    "&.Mui-selected": {
      backgroundColor: (t.vars || t).palette.primary.main,
      color: (t.vars || t).palette.primary.contrastText,
      "&:focus-visible, &:hover": {
        backgroundColor: (t.vars || t).palette.primary.dark
      }
    },
    "&.Mui-focusVisible": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.focusOpacity})` : oi.alpha(t.palette.primary.main, t.palette.action.focusOpacity)
    }
  })), CN = Y.forwardRef(function(e, n) {
    const r = Y.useRef(null), s = $t(n, r), i = Y.useRef(null), a = lt({
      props: e,
      name: "MuiMultiSectionDigitalClockSection"
    }), { autoFocus: l, onChange: c, className: d, disabled: f, readOnly: m, items: g, active: y, slots: v, slotProps: S, skipDisabled: b } = a, _ = Ne(a, xN), E = Y.useMemo(() => F({}, a, {
      alreadyRendered: !!r.current
    }), [
      a
    ]), R = TN(E), k = (v == null ? void 0 : v.digitalClockSectionItem) ?? EN;
    Y.useEffect(() => {
      if (r.current === null) return;
      const I = r.current.querySelector('[role="option"][tabindex="0"], [role="option"][aria-selected="true"]');
      if (y && l && I && I.focus(), !I || i.current === I) return;
      i.current = I;
      const O = I.offsetTop;
      r.current.scrollTop = O - 4;
    });
    const T = g.findIndex((I) => I.isFocused(I.value)), N = (I) => {
      switch (I.key) {
        case "PageUp": {
          const O = $a(r.current) - 5, K = r.current.children, z = Math.max(0, O), L = K[z];
          L && L.focus(), I.preventDefault();
          break;
        }
        case "PageDown": {
          const O = $a(r.current) + 5, K = r.current.children, z = Math.min(K.length - 1, O), L = K[z];
          L && L.focus(), I.preventDefault();
          break;
        }
      }
    };
    return D.jsx(MN, F({
      ref: s,
      className: Ct(R.root, d),
      ownerState: E,
      autoFocusItem: l && y,
      role: "listbox",
      onKeyDown: N
    }, _, {
      children: g.map((I, O) => {
        var _a2;
        const K = (_a2 = I.isDisabled) == null ? void 0 : _a2.call(I, I.value), z = f || K;
        if (b && z) return null;
        const L = I.isSelected(I.value), te = T === O || T === -1 && O === 0 ? 0 : -1;
        return D.jsx(k, F({
          onClick: () => !m && c(I.value),
          selected: L,
          disabled: z,
          disableRipple: m,
          role: "option",
          "aria-disabled": m || z || void 0,
          "aria-label": I.ariaLabel,
          "aria-selected": L,
          tabIndex: te,
          className: R.item
        }, S == null ? void 0 : S.digitalClockSectionItem, {
          children: I.label
        }), I.label);
      })
    }));
  }), AN = ({ now: t, value: e, utils: n, ampm: r, isDisabled: s, resolveAriaLabel: i, timeStep: a, valueOrReferenceDate: l }) => {
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
  }, Kf = ({ value: t, utils: e, isDisabled: n, timeStep: r, resolveLabel: s, resolveAriaLabel: i, hasValue: a = true }) => {
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
  }, RN = [
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
  ], ON = (t) => {
    const { classes: e } = t;
    return ht({
      root: [
        "root"
      ]
    }, DN, e);
  }, IN = ke(pu, {
    name: "MuiMultiSectionDigitalClock",
    slot: "Root",
    overridesResolver: (t, e) => e.root
  })(({ theme: t }) => ({
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottom: `1px solid ${(t.vars || t).palette.divider}`
  })), PN = Y.forwardRef(function(e, n) {
    const r = kt(), s = gr(), i = lt({
      props: e,
      name: "MuiMultiSectionDigitalClock"
    }), { ampm: a = r.is12HourCycleInCurrentLocale(), timeSteps: l, autoFocus: c, slots: d, slotProps: f, value: m, defaultValue: g, referenceDate: y, disableIgnoringDatePartForTimeValidation: v = false, maxTime: S, minTime: b, disableFuture: _, disablePast: E, minutesStep: R = 1, shouldDisableTime: k, onChange: T, view: N, views: I = [
      "hours",
      "minutes"
    ], openTo: O, onViewChange: K, focusedView: z, onFocusedViewChange: L, className: te, disabled: Z, readOnly: x, skipDisabled: C = false, timezone: P } = i, B = Ne(i, RN), { value: H, handleValueChange: ne, timezone: W } = du({
      name: "MultiSectionDigitalClock",
      timezone: P,
      value: m,
      defaultValue: g,
      referenceDate: y,
      onChange: T,
      valueManager: wr
    }), G = hn(), ee = cu(W), J = Y.useMemo(() => F({
      hours: 1,
      minutes: 5,
      seconds: 5
    }, l), [
      l
    ]), ie = gu({
      value: H,
      referenceDate: y,
      utils: r,
      props: i,
      timezone: W
    }), j = Ae((_e, ye, De) => ne(_e, ye, De)), se = Y.useMemo(() => !a || !I.includes("hours") || I.includes("meridiem") ? I : [
      ...I,
      "meridiem"
    ], [
      a,
      I
    ]), { view: re, setValueAndGoToNextView: Q, focusedView: X } = xo({
      view: N,
      views: se,
      openTo: O,
      onViewChange: K,
      onChange: j,
      focusedView: z,
      onFocusedViewChange: L
    }), ue = Ae((_e) => {
      Q(_e, "finish", "meridiem");
    }), { meridiemMode: he, handleMeridiemChange: Se } = mu(ie, a, ue, "finish"), q = Y.useCallback((_e, ye) => {
      const De = Ri(v, r), _t = ye === "hours" || ye === "minutes" && se.includes("seconds"), mn = ({ start: ut, end: Je }) => !(b && De(b, Je) || S && De(ut, S) || _ && De(ut, ee) || E && De(ee, _t ? Je : ut)), Sr = (ut, Je = 1) => {
        if (ut % Je !== 0) return false;
        if (k) switch (ye) {
          case "hours":
            return !k(r.setHours(ie, ut), "hours");
          case "minutes":
            return !k(r.setMinutes(ie, ut), "minutes");
          case "seconds":
            return !k(r.setSeconds(ie, ut), "seconds");
          default:
            return false;
        }
        return true;
      };
      switch (ye) {
        case "hours": {
          const ut = bi(_e, he, a), Je = r.setHours(ie, ut);
          if (r.getHours(Je) !== ut) return true;
          const _r = r.setSeconds(r.setMinutes(Je, 0), 0), Is = r.setSeconds(r.setMinutes(Je, 59), 59);
          return !mn({
            start: _r,
            end: Is
          }) || !Sr(ut);
        }
        case "minutes": {
          const ut = r.setMinutes(ie, _e), Je = r.setSeconds(ut, 0), _r = r.setSeconds(ut, 59);
          return !mn({
            start: Je,
            end: _r
          }) || !Sr(_e, R);
        }
        case "seconds": {
          const ut = r.setSeconds(ie, _e);
          return !mn({
            start: ut,
            end: ut
          }) || !Sr(_e);
        }
        default:
          throw new Error("not supported");
      }
    }, [
      a,
      ie,
      v,
      S,
      he,
      b,
      R,
      k,
      r,
      _,
      E,
      ee,
      se
    ]), ce = Y.useCallback((_e) => {
      switch (_e) {
        case "hours":
          return {
            onChange: (ye) => {
              const De = bi(ye, he, a);
              Q(r.setHours(ie, De), "finish", "hours");
            },
            items: AN({
              now: ee,
              value: H,
              ampm: a,
              utils: r,
              isDisabled: (ye) => q(ye, "hours"),
              timeStep: J.hours,
              resolveAriaLabel: G.hoursClockNumberText,
              valueOrReferenceDate: ie
            })
          };
        case "minutes":
          return {
            onChange: (ye) => {
              Q(r.setMinutes(ie, ye), "finish", "minutes");
            },
            items: Kf({
              value: r.getMinutes(ie),
              utils: r,
              isDisabled: (ye) => q(ye, "minutes"),
              resolveLabel: (ye) => r.format(r.setMinutes(ee, ye), "minutes"),
              timeStep: J.minutes,
              hasValue: !!H,
              resolveAriaLabel: G.minutesClockNumberText
            })
          };
        case "seconds":
          return {
            onChange: (ye) => {
              Q(r.setSeconds(ie, ye), "finish", "seconds");
            },
            items: Kf({
              value: r.getSeconds(ie),
              utils: r,
              isDisabled: (ye) => q(ye, "seconds"),
              resolveLabel: (ye) => r.format(r.setSeconds(ee, ye), "seconds"),
              timeStep: J.seconds,
              hasValue: !!H,
              resolveAriaLabel: G.secondsClockNumberText
            })
          };
        case "meridiem": {
          const ye = ur(r, "am"), De = ur(r, "pm");
          return {
            onChange: Se,
            items: [
              {
                value: "am",
                label: ye,
                isSelected: () => !!H && he === "am",
                isFocused: () => !!ie && he === "am",
                ariaLabel: ye
              },
              {
                value: "pm",
                label: De,
                isSelected: () => !!H && he === "pm",
                isFocused: () => !!ie && he === "pm",
                ariaLabel: De
              }
            ]
          };
        }
        default:
          throw new Error(`Unknown view: ${_e} found.`);
      }
    }, [
      ee,
      H,
      a,
      r,
      J.hours,
      J.minutes,
      J.seconds,
      G.hoursClockNumberText,
      G.minutesClockNumberText,
      G.secondsClockNumberText,
      he,
      Q,
      ie,
      q,
      Se
    ]), me = Y.useMemo(() => {
      if (!s) return se;
      const _e = se.filter((ye) => ye !== "meridiem");
      return _e.reverse(), se.includes("meridiem") && _e.push("meridiem"), _e;
    }, [
      s,
      se
    ]), we = Y.useMemo(() => se.reduce((_e, ye) => F({}, _e, {
      [ye]: ce(ye)
    }), {}), [
      se,
      ce
    ]), le = i, Ce = ON(le);
    return D.jsx(IN, F({
      ref: n,
      className: Ct(Ce.root, te),
      ownerState: le,
      role: "group"
    }, B, {
      children: me.map((_e) => D.jsx(CN, {
        items: we[_e].items,
        onChange: we[_e].onChange,
        active: re === _e,
        autoFocus: c || X === _e,
        disabled: Z,
        readOnly: x,
        slots: d,
        slotProps: f,
        skipDisabled: C,
        "aria-label": G.selectViewText(_e)
      }, _e))
    }));
  }), Sl = ({ view: t, onViewChange: e, focusedView: n, onFocusedViewChange: r, views: s, value: i, defaultValue: a, referenceDate: l, onChange: c, className: d, classes: f, disableFuture: m, disablePast: g, minTime: y, maxTime: v, shouldDisableTime: S, minutesStep: b, ampm: _, ampmInClock: E, slots: R, slotProps: k, readOnly: T, disabled: N, sx: I, autoFocus: O, showViewSwitcher: K, disableIgnoringDatePartForTimeValidation: z, timezone: L }) => D.jsx(pN, {
    view: t,
    onViewChange: e,
    focusedView: n && vi(n) ? n : null,
    onFocusedViewChange: r,
    views: s.filter(vi),
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
    slotProps: k,
    readOnly: T,
    disabled: N,
    sx: I,
    autoFocus: O,
    showViewSwitcher: K,
    disableIgnoringDatePartForTimeValidation: z,
    timezone: L
  }), NN = ({ view: t, onViewChange: e, focusedView: n, onFocusedViewChange: r, views: s, value: i, defaultValue: a, referenceDate: l, onChange: c, className: d, classes: f, disableFuture: m, disablePast: g, minTime: y, maxTime: v, shouldDisableTime: S, minutesStep: b, ampm: _, slots: E, slotProps: R, readOnly: k, disabled: T, sx: N, autoFocus: I, disableIgnoringDatePartForTimeValidation: O, timeSteps: K, skipDisabled: z, timezone: L }) => D.jsx(_N, {
    view: t,
    onViewChange: e,
    focusedView: n,
    onFocusedViewChange: r,
    views: s.filter(vi),
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
    readOnly: k,
    disabled: T,
    sx: N,
    autoFocus: I,
    disableIgnoringDatePartForTimeValidation: O,
    timeStep: K == null ? void 0 : K.minutes,
    skipDisabled: z,
    timezone: L
  }), eh = ({ view: t, onViewChange: e, focusedView: n, onFocusedViewChange: r, views: s, value: i, defaultValue: a, referenceDate: l, onChange: c, className: d, classes: f, disableFuture: m, disablePast: g, minTime: y, maxTime: v, shouldDisableTime: S, minutesStep: b, ampm: _, slots: E, slotProps: R, readOnly: k, disabled: T, sx: N, autoFocus: I, disableIgnoringDatePartForTimeValidation: O, timeSteps: K, skipDisabled: z, timezone: L }) => D.jsx(PN, {
    view: t,
    onViewChange: e,
    focusedView: n,
    onFocusedViewChange: r,
    views: s.filter(vi),
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
    readOnly: k,
    disabled: T,
    sx: N,
    autoFocus: I,
    disableIgnoringDatePartForTimeValidation: O,
    timeSteps: K,
    skipDisabled: z,
    timezone: L
  }), LN = (t, e, n) => n ? e.filter((r) => !Y1(r) || r === "hours") : t ? [
    ...e,
    "meridiem"
  ] : e, YN = (t, e) => 1440 / ((t.hours ?? 1) * (t.minutes ?? 5)) <= e;
  function FN({ thresholdToRenderTimeInASingleColumn: t, ampm: e, timeSteps: n, views: r }) {
    const s = t ?? 24, i = F({
      hours: 1,
      minutes: 5,
      seconds: 5
    }, n), a = YN(i, s);
    return {
      thresholdToRenderTimeInASingleColumn: s,
      timeSteps: i,
      shouldRenderTimeInASingleColumn: a,
      views: LN(e, r, a)
    };
  }
  const Fg = Y.forwardRef(function(e, n) {
    var _a2, _b, _c2, _d2;
    const r = hn(), s = kt(), i = Mg(e, "MuiDesktopTimePicker"), { shouldRenderTimeInASingleColumn: a, views: l, timeSteps: c } = FN(i), d = a ? NN : eh, f = F({
      hours: d,
      minutes: d,
      seconds: d,
      meridiem: d
    }, i.viewRenderers), m = i.ampmInClock ?? true, g = a ? [] : [
      "accept"
    ], v = ((_a2 = f.hours) == null ? void 0 : _a2.name) === eh.name ? l : l.filter((_) => _ !== "meridiem"), S = F({}, i, {
      ampmInClock: m,
      timeSteps: c,
      viewRenderers: f,
      format: sg(s, i),
      views: a ? [
        "hours"
      ] : v,
      slots: F({
        field: kg,
        openPickerIcon: MO
      }, i.slots),
      slotProps: F({}, i.slotProps, {
        field: (_) => {
          var _a3;
          return F({}, ch((_a3 = i.slotProps) == null ? void 0 : _a3.field, _), dg(i), {
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
    }), { renderPicker: b } = EP({
      props: S,
      valueManager: wr,
      valueType: "time",
      getOpenDialogAriaText: hg({
        utils: s,
        formatKey: "fullTime",
        contextTranslation: r.openTimePickerDialogue,
        propsTranslation: (_d2 = S.localeText) == null ? void 0 : _d2.openTimePickerDialogue
      }),
      validator: Do
    });
    return b();
  });
  Fg.propTypes = {
    ampm: V.bool,
    ampmInClock: V.bool,
    autoFocus: V.bool,
    className: V.string,
    closeOnSelect: V.bool,
    defaultValue: V.object,
    disabled: V.bool,
    disableFuture: V.bool,
    disableIgnoringDatePartForTimeValidation: V.bool,
    disableOpenPicker: V.bool,
    disablePast: V.bool,
    enableAccessibleFieldDOMStructure: V.any,
    format: V.string,
    formatDensity: V.oneOf([
      "dense",
      "spacious"
    ]),
    inputRef: uh,
    label: V.node,
    localeText: V.object,
    maxTime: V.object,
    minTime: V.object,
    minutesStep: V.number,
    name: V.string,
    onAccept: V.func,
    onChange: V.func,
    onClose: V.func,
    onError: V.func,
    onOpen: V.func,
    onSelectedSectionsChange: V.func,
    onViewChange: V.func,
    open: V.bool,
    openTo: V.oneOf([
      "hours",
      "meridiem",
      "minutes",
      "seconds"
    ]),
    orientation: V.oneOf([
      "landscape",
      "portrait"
    ]),
    readOnly: V.bool,
    reduceAnimations: V.bool,
    referenceDate: V.object,
    selectedSections: V.oneOfType([
      V.oneOf([
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
      V.number
    ]),
    shouldDisableTime: V.func,
    skipDisabled: V.bool,
    slotProps: V.object,
    slots: V.object,
    sx: V.oneOfType([
      V.arrayOf(V.oneOfType([
        V.func,
        V.object,
        V.bool
      ])),
      V.func,
      V.object
    ]),
    thresholdToRenderTimeInASingleColumn: V.number,
    timeSteps: V.shape({
      hours: V.number,
      minutes: V.number,
      seconds: V.number
    }),
    timezone: V.string,
    value: V.object,
    view: V.oneOf([
      "hours",
      "meridiem",
      "minutes",
      "seconds"
    ]),
    viewRenderers: V.shape({
      hours: V.func,
      meridiem: V.func,
      minutes: V.func,
      seconds: V.func
    }),
    views: V.arrayOf(V.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]).isRequired)
  };
  const HN = ke(Fw)({
    [`& .${cd.container}`]: {
      outline: 0
    },
    [`& .${cd.paper}`]: {
      outline: 0,
      minWidth: Ag
    }
  }), jN = ke(Hw)({
    "&:first-of-type": {
      padding: 0
    }
  });
  function VN(t) {
    const { children: e, onDismiss: n, open: r, slots: s, slotProps: i } = t, a = (s == null ? void 0 : s.dialog) ?? HN, l = (s == null ? void 0 : s.mobileTransition) ?? ah;
    return D.jsx(a, F({
      open: r,
      onClose: n
    }, i == null ? void 0 : i.dialog, {
      TransitionComponent: l,
      TransitionProps: i == null ? void 0 : i.mobileTransition,
      PaperComponent: s == null ? void 0 : s.mobilePaper,
      PaperProps: i == null ? void 0 : i.mobilePaper,
      children: D.jsx(jN, {
        children: e
      })
    }));
  }
  const WN = [
    "props",
    "getOpenDialogAriaText"
  ], UN = (t) => {
    var _a2;
    let { props: e, getOpenDialogAriaText: n } = t, r = Ne(t, WN);
    const { slots: s, slotProps: i, className: a, sx: l, format: c, formatDensity: d, enableAccessibleFieldDOMStructure: f, selectedSections: m, onSelectedSectionsChange: g, timezone: y, name: v, label: S, inputRef: b, readOnly: _, disabled: E, localeText: R } = e, k = Y.useRef(null), T = _i(), N = ((_a2 = i == null ? void 0 : i.toolbar) == null ? void 0 : _a2.hidden) ?? false, { open: I, actions: O, layoutProps: K, renderCurrentView: z, fieldProps: L, contextValue: te } = Eg(F({}, r, {
      props: e,
      fieldRef: k,
      autoFocusView: true,
      additionalViewProps: {},
      wrapperVariant: "mobile"
    })), Z = s.field, x = ot({
      elementType: Z,
      externalSlotProps: i == null ? void 0 : i.field,
      additionalProps: F({}, L, N && {
        id: T
      }, !(E || _) && {
        onClick: O.onOpen,
        onKeyDown: bO(O.onOpen)
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
    x.inputProps = F({}, x.inputProps, {
      "aria-label": n(L.value)
    });
    const C = F({
      textField: s.textField
    }, x.slots), P = s.layout ?? Ig;
    let B = T;
    N && (S ? B = `${T}-label` : B = void 0);
    const H = F({}, i, {
      toolbar: F({}, i == null ? void 0 : i.toolbar, {
        titleId: T
      }),
      mobilePaper: F({
        "aria-labelledby": B
      }, i == null ? void 0 : i.mobilePaper)
    }), ne = $t(k, x.unstableFieldRef);
    return {
      renderPicker: () => D.jsxs(gg, {
        contextValue: te,
        localeText: R,
        children: [
          D.jsx(Z, F({}, x, {
            slots: C,
            slotProps: H,
            unstableFieldRef: ne
          })),
          D.jsx(VN, F({}, O, {
            open: I,
            slots: s,
            slotProps: H,
            children: D.jsx(P, F({}, K, H == null ? void 0 : H.layout, {
              slots: s,
              slotProps: H,
              children: z()
            }))
          }))
        ]
      })
    };
  }, Hg = Y.forwardRef(function(e, n) {
    var _a2, _b;
    const r = hn(), s = kt(), i = Mg(e, "MuiMobileTimePicker"), a = F({
      hours: Sl,
      minutes: Sl,
      seconds: Sl
    }, i.viewRenderers), l = i.ampmInClock ?? false, c = F({}, i, {
      ampmInClock: l,
      viewRenderers: a,
      format: sg(s, i),
      slots: F({
        field: kg
      }, i.slots),
      slotProps: F({}, i.slotProps, {
        field: (f) => {
          var _a3;
          return F({}, ch((_a3 = i.slotProps) == null ? void 0 : _a3.field, f), dg(i), {
            ref: n
          });
        },
        toolbar: F({
          hidden: false,
          ampmInClock: l
        }, (_a2 = i.slotProps) == null ? void 0 : _a2.toolbar)
      })
    }), { renderPicker: d } = UN({
      props: c,
      valueManager: wr,
      valueType: "time",
      getOpenDialogAriaText: hg({
        utils: s,
        formatKey: "fullTime",
        contextTranslation: r.openTimePickerDialogue,
        propsTranslation: (_b = c.localeText) == null ? void 0 : _b.openTimePickerDialogue
      }),
      validator: Do
    });
    return d();
  });
  Hg.propTypes = {
    ampm: V.bool,
    ampmInClock: V.bool,
    autoFocus: V.bool,
    className: V.string,
    closeOnSelect: V.bool,
    defaultValue: V.object,
    disabled: V.bool,
    disableFuture: V.bool,
    disableIgnoringDatePartForTimeValidation: V.bool,
    disableOpenPicker: V.bool,
    disablePast: V.bool,
    enableAccessibleFieldDOMStructure: V.any,
    format: V.string,
    formatDensity: V.oneOf([
      "dense",
      "spacious"
    ]),
    inputRef: uh,
    label: V.node,
    localeText: V.object,
    maxTime: V.object,
    minTime: V.object,
    minutesStep: V.number,
    name: V.string,
    onAccept: V.func,
    onChange: V.func,
    onClose: V.func,
    onError: V.func,
    onOpen: V.func,
    onSelectedSectionsChange: V.func,
    onViewChange: V.func,
    open: V.bool,
    openTo: V.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]),
    orientation: V.oneOf([
      "landscape",
      "portrait"
    ]),
    readOnly: V.bool,
    reduceAnimations: V.bool,
    referenceDate: V.object,
    selectedSections: V.oneOfType([
      V.oneOf([
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
      V.number
    ]),
    shouldDisableTime: V.func,
    slotProps: V.object,
    slots: V.object,
    sx: V.oneOfType([
      V.arrayOf(V.oneOfType([
        V.func,
        V.object,
        V.bool
      ])),
      V.func,
      V.object
    ]),
    timezone: V.string,
    value: V.object,
    view: V.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]),
    viewRenderers: V.shape({
      hours: V.func,
      minutes: V.func,
      seconds: V.func
    }),
    views: V.arrayOf(V.oneOf([
      "hours",
      "minutes",
      "seconds"
    ]).isRequired)
  };
  const BN = [
    "desktopModeMediaQuery"
  ], zN = Y.forwardRef(function(e, n) {
    const r = lt({
      props: e,
      name: "MuiTimePicker"
    }), { desktopModeMediaQuery: s = wO } = r, i = Ne(r, BN);
    return ih(s, {
      defaultMatches: true
    }) ? D.jsx(Fg, F({
      ref: n
    }, i)) : D.jsx(Hg, F({
      ref: n
    }, i));
  });
  var yu = {
    exports: {}
  }, $N = yu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })($N, (function() {
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
  })(yu);
  var GN = yu.exports;
  const qN = Vr(GN);
  var vu = {
    exports: {}
  }, ZN = vu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(ZN, (function() {
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
          for (var k = 1; k <= 24; k += 1) if (b.indexOf(R(k, 0, _)) > -1) {
            E = k > 12;
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
        for (var R = (b = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(z, L, te) {
          var Z = te && te.toUpperCase();
          return L || E[te] || n[te] || E[Z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(x, C, P) {
            return C || P.slice(1);
          }));
        }))).match(r), k = R.length, T = 0; T < k; T += 1) {
          var N = R[T], I = v[N], O = I && I[0], K = I && I[1];
          R[T] = K ? {
            regex: O,
            parser: K
          } : N.replace(/^\[|\]$/g, "");
        }
        return function(z) {
          for (var L = {}, te = 0, Z = 0; te < k; te += 1) {
            var x = R[te];
            if (typeof x == "string") Z += x.length;
            else {
              var C = x.regex, P = x.parser, B = z.slice(Z), H = C.exec(B)[0];
              P.call(L, H), z = z.replace(H, "");
            }
          }
          return (function(ne) {
            var W = ne.afternoon;
            if (W !== void 0) {
              var G = ne.hours;
              W ? G < 12 && (ne.hours += 12) : G === 12 && (ne.hours = 0), delete ne.afternoon;
            }
          })(L), L;
        };
      }
      return function(b, _, E) {
        E.p.customParseFormat = true, b && b.parseTwoDigitYear && (d = b.parseTwoDigitYear);
        var R = _.prototype, k = R.parse;
        R.parse = function(T) {
          var N = T.date, I = T.utc, O = T.args;
          this.$u = I;
          var K = O[1];
          if (typeof K == "string") {
            var z = O[2] === true, L = O[3] === true, te = z || L, Z = O[2];
            L && (Z = O[2]), c = this.$locale(), !z && Z && (c = E.Ls[Z]), this.$d = (function(B, H, ne, W) {
              try {
                if ([
                  "x",
                  "X"
                ].indexOf(H) > -1) return new Date((H === "X" ? 1e3 : 1) * B);
                var G = S(H)(B), ee = G.year, J = G.month, ie = G.day, j = G.hours, se = G.minutes, re = G.seconds, Q = G.milliseconds, X = G.zone, ue = G.week, he = /* @__PURE__ */ new Date(), Se = ie || (ee || J ? 1 : he.getDate()), q = ee || he.getFullYear(), ce = 0;
                ee && !J || (ce = J > 0 ? J - 1 : he.getMonth());
                var me, we = j || 0, le = se || 0, Ce = re || 0, _e = Q || 0;
                return X ? new Date(Date.UTC(q, ce, Se, we, le, Ce, _e + 60 * X.offset * 1e3)) : ne ? new Date(Date.UTC(q, ce, Se, we, le, Ce, _e)) : (me = new Date(q, ce, Se, we, le, Ce, _e), ue && (me = W(me).week(ue).toDate()), me);
              } catch {
                return /* @__PURE__ */ new Date("");
              }
            })(N, K, I, E), this.init(), Z && Z !== true && (this.$L = this.locale(Z).$L), te && N != this.format(K) && (this.$d = /* @__PURE__ */ new Date("")), c = {};
          } else if (K instanceof Array) for (var x = K.length, C = 1; C <= x; C += 1) {
            O[1] = K[C - 1];
            var P = E.apply(this, O);
            if (P.isValid()) {
              this.$d = P.$d, this.$L = P.$L, this.init();
              break;
            }
            C === x && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else k.call(this, T);
        };
      };
    }));
  })(vu);
  var QN = vu.exports;
  const XN = Vr(QN);
  var bu = {
    exports: {}
  }, JN = bu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(JN, (function() {
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
  })(bu);
  var KN = bu.exports;
  const eL = Vr(KN);
  var wu = {
    exports: {}
  }, tL = wu.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(tL, (function() {
      return function(n, r, s) {
        r.prototype.isBetween = function(i, a, l, c) {
          var d = s(i), f = s(a), m = (c = c || "()")[0] === "(", g = c[1] === ")";
          return (m ? this.isAfter(d, l) : !this.isBefore(d, l)) && (g ? this.isBefore(f, l) : !this.isAfter(f, l)) || (m ? this.isBefore(d, l) : !this.isAfter(d, l)) && (g ? this.isAfter(f, l) : !this.isBefore(f, l));
        };
      };
    }));
  })(wu);
  var nL = wu.exports;
  const rL = Vr(nL);
  var Su = {
    exports: {}
  }, sL = Su.exports;
  (function(t, e) {
    (function(n, r) {
      t.exports = r();
    })(sL, (function() {
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
  })(Su);
  var iL = Su.exports;
  const aL = Vr(iL);
  gt.extend(eL);
  gt.extend(qN);
  gt.extend(rL);
  gt.extend(aL);
  const oL = {
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
  }, lL = {
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
  }, _l = [
    "Missing UTC plugin",
    "To be able to use UTC or timezones, you have to enable the `utc` plugin",
    "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc"
  ].join(`
`), th = [
    "Missing timezone plugin",
    "To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin",
    "Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone"
  ].join(`
`), cL = (t, e) => e ? (...n) => t(...n).locale(e) : t;
  class uL {
    constructor({ locale: e, formats: n } = {}) {
      this.isMUIAdapter = true, this.isTimezoneCompatible = true, this.lib = "dayjs", this.dayjs = void 0, this.locale = void 0, this.formats = void 0, this.escapedCharacters = {
        start: "[",
        end: "]"
      }, this.formatTokenMap = oL, this.setLocaleToValue = (r) => {
        const s = this.getCurrentLocaleCode();
        return s === r.locale() ? r : r.locale(s);
      }, this.hasUTCPlugin = () => typeof gt.utc < "u", this.hasTimezonePlugin = () => typeof gt.tz < "u", this.isSame = (r, s, i) => {
        const a = this.setTimezone(s, this.getTimezone(r));
        return r.format(i) === a.format(i);
      }, this.cleanTimezone = (r) => {
        switch (r) {
          case "default":
            return;
          case "system":
            return gt.tz.guess();
          default:
            return r;
        }
      }, this.createSystemDate = (r) => {
        if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
          const s = gt.tz.guess();
          return s !== "UTC" ? gt.tz(r, s) : gt(r);
        }
        return gt(r);
      }, this.createUTCDate = (r) => {
        if (!this.hasUTCPlugin()) throw new Error(_l);
        return gt.utc(r);
      }, this.createTZDate = (r, s) => {
        if (!this.hasUTCPlugin()) throw new Error(_l);
        if (!this.hasTimezonePlugin()) throw new Error(th);
        const i = r !== void 0 && !r.endsWith("Z");
        return gt(r).tz(this.cleanTimezone(s), i);
      }, this.getLocaleFormats = () => {
        const r = gt.Ls, s = this.locale || "en";
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
      }, this.getInvalidDate = () => gt(/* @__PURE__ */ new Date("Invalid date")), this.getTimezone = (r) => {
        var _a2;
        if (this.hasTimezonePlugin()) {
          const s = (_a2 = r.$x) == null ? void 0 : _a2.$timezone;
          if (s) return s;
        }
        return this.hasUTCPlugin() && r.isUTC() ? "UTC" : "system";
      }, this.setTimezone = (r, s) => {
        if (this.getTimezone(r) === s) return r;
        if (s === "UTC") {
          if (!this.hasUTCPlugin()) throw new Error(_l);
          return r.utc();
        }
        if (s === "system") return r.local();
        if (!this.hasTimezonePlugin()) {
          if (s === "default") return r;
          throw new Error(th);
        }
        return gt.tz(r, this.cleanTimezone(s));
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
      }, this.dayjs = cL(gt, e), this.locale = e, this.formats = F({}, lL, n), gt.extend(XN);
    }
    getDayOfWeek(e) {
      return e.day() + 1;
    }
  }
  const dL = {
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
  }, fL = [
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
  function hL(t, e) {
    return t && typeof t == "object" ? t[e] || t.en : t;
  }
  async function mL(t, e) {
    let n;
    typeof t == "string" ? n = await e.getObject(t) : n = t;
    let r = null;
    if (n && n.common && n.common.icon) r = wt.Utils.getObjectIcon(n);
    else if (n.type === "state") {
      let s = n._id.split(".");
      s.pop();
      let i = s.join(".");
      n = await e.getObject(i), n && n.common && n.common.icon ? r = wt.Utils.getObjectIcon(n) : (!n || n.type === "channel" || n.type === "device") && (s = n._id.split("."), s.pop(), i = s.join("."), n = await e.getObject(i), n && n.common && n.common.icon && (r = wt.Utils.getObjectIcon(n)));
    }
    return r;
  }
  const jg = (t) => {
    var _a2, _b, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k2, _l2, _m2, _n2, _o2, _p2, _q, _r, _s2, _t;
    const e = ((_b = (_a2 = t.event) == null ? void 0 : _a2.native) == null ? void 0 : _b.intervals) && t.event.native.intervals[0] && t.event.native.intervals[0].timeOffset ? t.event.native.intervals[0].timeOffset / 6e4 : 0, n = ((_d2 = (_c2 = t.event) == null ? void 0 : _c2.native) == null ? void 0 : _d2.intervals) && t.event.native.intervals[0] && t.event.native.intervals[0].value !== void 0 ? t.event.native.intervals[0].value : "", [r, s] = Y.useState(false), [i, a] = Y.useState(t.event), [l, c] = Y.useState(null), [d, f] = Y.useState(false), [m, g] = Y.useState(e), [y, v] = Y.useState(n), [S, b] = Y.useState({});
    fe.locale(t.language);
    const _ = Y.useCallback((x) => {
      const C = JSON.parse(JSON.stringify(i));
      x(C), a(C);
    }, [
      i
    ]);
    Y.useEffect(() => {
      var _a3, _b2, _c3;
      const x = /* @__PURE__ */ new Date();
      x.setHours(0), x.setMinutes(0), x.setSeconds(0), x.setMilliseconds(0);
      const C = ma.getTimes(x, t.systemConfig.latitude, t.systemConfig.longitude);
      if (b(C), (_a3 = i.native) == null ? void 0 : _a3.oid) {
        if (!l || l._id !== ((_b2 = i.native) == null ? void 0 : _b2.oid)) try {
          t.socket.getObject((_c3 = i.native) == null ? void 0 : _c3.oid).then((P) => {
            var _a4;
            JSON.stringify((_a4 = i.native) == null ? void 0 : _a4.states) !== JSON.stringify(P.common.states) && _((B) => B.native.states = P.common.states), (l || t.event.native.oid !== i.native.oid) && mL(P, t.socket).then((B) => _((H) => H.common.icon = B)), c(P);
          });
        } catch (P) {
          console.error(`Cannot get object ${i.native.oid}: ${P}`), c(null);
        }
      } else c(null);
    }, [
      (_e = i.native) == null ? void 0 : _e.oid,
      t.socket,
      _,
      (_f2 = i.native) == null ? void 0 : _f2.states,
      l,
      (_g2 = t.event) == null ? void 0 : _g2.native.oid,
      t.systemConfig.latitude,
      t.systemConfig.longitude
    ]);
    const E = ((_h2 = i.native) == null ? void 0 : _h2.cron) ? Yt(i.native.cron) : null;
    let R = "once", k = 29;
    if (Array.isArray(E == null ? void 0 : E.months)) {
      R = "monthly";
      const x = [
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
      ((_i2 = E.months) == null ? void 0 : _i2.find((P) => C.includes(P))) ? k = 31 : ((_j = E.months) == null ? void 0 : _j.find((P) => x.includes(P))) && (k = 30);
    } else Array.isArray(E == null ? void 0 : E.dows) && (R = "daily");
    let T;
    i && (R === "once" ? T = ri((_k2 = i.native) == null ? void 0 : _k2.start, "date", t.serverTimeZone) : (R === "monthly" || R === "daily") && (T = ri((_l2 = i.native) == null ? void 0 : _l2.cron, "cron", t.serverTimeZone)));
    const N = JSON.stringify(t.event) !== JSON.stringify(i) || m !== e || y !== n, I = (x, C) => l ? l.common.type === "boolean" ? (typeof i.native[x] != "boolean" && setTimeout(() => _((P) => P.native[x] = !!P.native[x]), 100), D.jsx(pe.FormControlLabel, {
      style: Ie.narrowText2,
      control: D.jsx(pe.Checkbox, {
        checked: !!i.native[x],
        disabled: t.readOnly,
        onChange: (P) => _((B) => B.native[x] = P.target.checked)
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
    })) : l.common.states ? D.jsxs(pe.FormControl, {
      style: Ie.narrowText2,
      variant: "standard",
      children: [
        D.jsx(pe.InputLabel, {
          children: t.t(C)
        }),
        D.jsx(pe.Select, {
          value: i.native[x] || "",
          disabled: t.readOnly,
          onChange: (P) => _((B) => B.native[x] = P.target.value),
          children: Object.keys(l.common.states).map((P) => D.jsx(pe.MenuItem, {
            value: P,
            children: l.common.states[P]
          }, P))
        })
      ]
    }) : D.jsx(pe.TextField, {
      style: Ie.narrowText2,
      label: t.t(C),
      value: i.native[x] || "",
      disabled: t.readOnly,
      onChange: (P) => _((B) => B.native[x] = P.target.value),
      variant: "standard"
    }) : null, O = () => l ? l.common.type === "boolean" ? (typeof y != "boolean" && setTimeout(() => v(!!y), 100), D.jsx(pe.FormControlLabel, {
      style: Ie.narrowText2,
      control: D.jsx(pe.Checkbox, {
        checked: !!y,
        disabled: t.readOnly,
        onChange: (x) => v(x.target.checked)
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
    })) : l.common.states ? D.jsxs(pe.FormControl, {
      style: Ie.narrowText2,
      variant: "standard",
      children: [
        D.jsx(pe.InputLabel, {
          children: t.t("End value")
        }),
        D.jsx(pe.Select, {
          value: y || "",
          disabled: t.readOnly,
          onChange: (x) => v(x.target.value),
          children: Object.keys(l.common.states).map((x) => D.jsx(pe.MenuItem, {
            value: x,
            children: l.common.states[x]
          }, x))
        })
      ]
    }) : D.jsx(pe.TextField, {
      label: t.t("End value"),
      value: y || "",
      disabled: t.readOnly,
      onChange: (x) => v(x.target.value),
      variant: "standard",
      style: Ie.narrowText2
    }) : null, K = ((_m2 = t.systemConfig) == null ? void 0 : _m2.firstDayOfWeek) === "monday" ? [
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
    ], z = ((_n2 = i.native) == null ? void 0 : _n2.astro) && S ? S[i.native.astro] : "", L = z ? z.toLocaleTimeString().replace(/:\d\d$/, "") : "";
    let te = "";
    ((_o2 = i.native) == null ? void 0 : _o2.astro) && ((_p2 = i.native) == null ? void 0 : _p2.offset) && z && (te = new Date(z.getTime() + i.native.offset * 6e4).toLocaleTimeString().replace(/:\d\d$/, ""));
    let Z = i == null ? void 0 : i.common.icon;
    return Z && !Z.startsWith("data:image") && !Z.startsWith("http") && !Z.startsWith("/") && (Z = `../../${Z}`), t.event ? D.jsxs(pe.Dialog, {
      open: true,
      onClose: t.onClose,
      fullWidth: true,
      children: [
        D.jsx(pe.DialogTitle, {
          children: t.t("Configure event")
        }),
        D.jsxs(pe.DialogContent, {
          children: [
            r && D.jsx(wt.SelectID, {
              imagePrefix: "../..",
              theme: t.theme,
              selected: i.native.oid,
              disabled: t.readOnly,
              onOk: (x) => {
                _((C) => C.native.oid = x), s(false);
              },
              onClose: () => s(false),
              socket: t.socket
            }),
            D.jsx("div", {
              style: Ie.field,
              children: D.jsx(pe.FormControlLabel, {
                control: D.jsx(pe.Checkbox, {
                  checked: !!(i == null ? void 0 : i.common.enabled),
                  disabled: t.readOnly,
                  onChange: (x) => _((C) => C.common.enabled = x.target.checked)
                }),
                label: t.t("Active")
              })
            }),
            D.jsxs("div", {
              style: Ie.field,
              children: [
                D.jsxs(pe.FormControl, {
                  style: {
                    ...Ie.timeType,
                    width: 180
                  },
                  variant: "standard",
                  children: [
                    D.jsx(pe.InputLabel, {
                      children: t.t("Time type")
                    }),
                    D.jsx(pe.Select, {
                      value: i.native.astro ? "astro" : "time",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (x) => _((C) => {
                        x.target.value === "astro" ? C.native.astro = "sunrise" : delete C.native.astro;
                      }),
                      renderValue: (x) => t.t(x),
                      children: [
                        "time",
                        "astro"
                      ].map((x) => D.jsx(pe.MenuItem, {
                        value: x,
                        children: D.jsx("div", {
                          children: t.t(x)
                        })
                      }, x))
                    })
                  ]
                }),
                i.native.astro ? D.jsxs(pe.FormControl, {
                  style: {
                    ...Ie.narrowText,
                    width: 250
                  },
                  variant: "standard",
                  children: [
                    D.jsx(pe.InputLabel, {
                      children: t.t("Astronomic event")
                    }),
                    D.jsx(pe.Select, {
                      value: i.native.astro || "",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (x) => _((C) => C.native.astro = x.target.value),
                      renderValue: (x) => t.t(x),
                      children: fL.map((x) => D.jsx(pe.MenuItem, {
                        value: x,
                        children: D.jsxs("div", {
                          style: {
                            display: "flex",
                            width: "100%"
                          },
                          children: [
                            D.jsx("span", {
                              children: t.t(x)
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
                                S && S[x] ? S[x].toLocaleTimeString().replace(/:\d\d$/, "") : "??:??",
                                "]"
                              ]
                            })
                          ]
                        })
                      }, x))
                    })
                  ]
                }) : D.jsx(fg, {
                  dateAdapter: uL,
                  children: D.jsx(zN, {
                    sx: (x) => ({
                      borderBottom: `1px solid ${x.palette.text.primary}`,
                      "& fieldset": {
                        display: "none"
                      },
                      "& input": {
                        padding: `${x.spacing(1.5)} 0 4px 0`
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
                    variant: "standard",
                    value: T ? gt(T) : null,
                    disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                    onChange: (x) => {
                      if (x) try {
                        _((C) => {
                          if (R === "once") C.native.start = tn(x.toDate(), "date", t.serverTimeZone);
                          else if (R === "monthly" || R === "daily") {
                            const P = Yt(C.native.cron), B = tn(x.toDate(), "cron", t.serverTimeZone);
                            P.hours = B.hours, P.minutes = B.minutes, C.native.cron = Kt(P);
                          }
                        });
                      } catch {
                      }
                    },
                    renderInput: (x) => D.jsx(pe.TextField, {
                      ...x,
                      variant: "standard",
                      style: {
                        ...Ie.narrowText
                      },
                      helperText: T.getSeconds() ? T.toLocaleTimeString() : ""
                    }),
                    ampm: false
                  })
                }),
                i.native.astro ? D.jsxs(pe.FormControl, {
                  variant: "standard",
                  style: {
                    ...Ie.width60,
                    width: 95
                  },
                  children: [
                    D.jsx(pe.InputLabel, {
                      children: t.t("Offset")
                    }),
                    D.jsx(pe.Select, {
                      value: i.native.offset || 0,
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (x) => _((C) => C.native.offset = x.target.value),
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
                      ].map((x) => D.jsx(pe.MenuItem, {
                        value: x.value,
                        children: x.value < 0 ? `- ${t.t(x.label)}` : t.t(x.label)
                      }, x.value))
                    })
                  ]
                }) : null,
                t.isSimulation && D.jsx(pe.TextField, {
                  style: Ie.randomTime,
                  label: t.t("Time random offset"),
                  value: i.native.timeRandomOffset || 0,
                  disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                  onChange: (x) => _((C) => C.native.timeRandomOffset = parseInt(x.target.value)),
                  variant: "standard",
                  slotProps: {
                    input: {
                      endAdornment: D.jsx(pe.InputAdornment, {
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
                i.native.offset ? t.t("With offset at %s.", te) : null
              ]
            }) : null,
            D.jsxs("div", {
              style: Ie.field,
              children: [
                !t.isSimulation && D.jsxs(pe.FormControl, {
                  variant: "standard",
                  style: Ie.narrowText2,
                  children: [
                    D.jsx(pe.InputLabel, {
                      children: t.t("Event type")
                    }),
                    D.jsx(pe.Select, {
                      value: i.native.type || "",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (x) => _((C) => {
                        C.common.name === t.t(C.native.type) && (C.common.name = t.t(x.target.value)), C.native.type = x.target.value;
                      }),
                      renderValue: (x) => t.t(x),
                      children: [
                        "single",
                        "double",
                        "toggle"
                      ].map((x) => D.jsx(pe.MenuItem, {
                        value: x,
                        children: D.jsxs("div", {
                          children: [
                            D.jsx("div", {
                              children: t.t(x)
                            }),
                            D.jsx("div", {
                              style: Ie.typeDescription,
                              children: t.t(dL[x])
                            })
                          ]
                        })
                      }, x))
                    })
                  ]
                }),
                i.native.type !== "single" && D.jsx(pe.TextField, {
                  label: t.t("Duration"),
                  value: m,
                  disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                  onChange: (x) => g(x.target.value),
                  variant: "standard",
                  style: Ie.narrowText,
                  slotProps: {
                    input: {
                      endAdornment: D.jsx(pe.InputAdornment, {
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
                  D.jsx(wt.Icon, {
                    src: Z || "",
                    style: {
                      width: 32,
                      height: 32
                    }
                  }),
                  D.jsx(pe.TextField, {
                    label: t.t("Object ID"),
                    value: i.native.oid || "",
                    disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                    onChange: (x) => _((C) => C.native.oid = x.target.value),
                    variant: "standard",
                    helperText: hL((l == null ? void 0 : l.common.name) || "", t.language),
                    fullWidth: true
                  }),
                  D.jsx(pe.Button, {
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
                !t.isSimulation && D.jsxs(pe.FormControl, {
                  variant: "standard",
                  children: [
                    D.jsx(pe.InputLabel, {
                      children: t.t("Period")
                    }),
                    D.jsx(pe.Select, {
                      value: R || "once",
                      disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                      onChange: (x) => {
                        x.target.value !== i.native.cron && _((C) => {
                          if (x.target.value === "once") delete C.native.cron, C.native.start = tn(T, "date", t.serverTimeZone);
                          else if (x.target.value === "daily") {
                            delete C.native.start;
                            const P = Yt("0 0 ? * 0-6"), B = tn(T, "cron", t.serverTimeZone);
                            P.hours = B.hours, P.minutes = B.minutes, C.native.cron = Kt(P);
                          } else if (x.target.value === "monthly") {
                            const P = C.native.start;
                            let B;
                            P ? (B = Yt(`0 0 ${new Date(P).getDate()} ${new Date(P).getMonth() + 1} *`), delete C.native.start) : B = Yt("0 0 1-31 1-12 *");
                            const H = tn(T, "cron", t.serverTimeZone);
                            B.hours = H.hours, B.minutes = H.minutes, C.native.cron = Kt(B);
                          }
                        });
                      },
                      children: [
                        "once",
                        "daily",
                        "monthly"
                      ].map((x) => D.jsx(pe.MenuItem, {
                        value: x,
                        children: t.t(x)
                      }, x))
                    })
                  ]
                }),
                R === "daily" && (!t.isSimulation || t.simulation.native.interval === "week") && D.jsxs("table", {
                  style: {
                    ...Ie.dayTable,
                    marginLeft: t.isSimulation ? 0 : void 0
                  },
                  children: [
                    D.jsx("thead", {
                      children: D.jsx("tr", {
                        children: K.map((x) => D.jsx("td", {
                          style: Ie.tableCell,
                          children: fe().day(x).format("ddd")
                        }, x))
                      })
                    }),
                    D.jsx("tbody", {
                      children: D.jsx("tr", {
                        children: K.map((x) => {
                          var _a3;
                          return D.jsx("td", {
                            children: D.jsx(pe.Checkbox, {
                              "aria-label": "day",
                              checked: ((_a3 = E == null ? void 0 : E.dows) == null ? void 0 : _a3.includes(x)) || false,
                              disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                              onChange: (C) => _((P) => {
                                const B = Yt(P.native.cron);
                                C.target.checked ? B.dows.push(x) : B.dows = B.dows.filter((H) => H !== x), P.native.cron = Kt(B);
                              }),
                              size: "small"
                            })
                          }, x);
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
                        children: new Array(12).fill(null).map((x, C) => D.jsx("td", {
                          style: Ie.tableCell,
                          children: fe().month(C).format("MMM")
                        }, C))
                      })
                    }),
                    D.jsx("tbody", {
                      children: D.jsx("tr", {
                        children: new Array(12).fill(null).map((x, C) => {
                          var _a3;
                          return D.jsx("td", {
                            children: D.jsx(pe.Checkbox, {
                              "aria-label": "month",
                              checked: ((_a3 = E == null ? void 0 : E.months) == null ? void 0 : _a3.includes(C + 1)) || false,
                              disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                              onChange: (P) => _((B) => {
                                const H = Yt(B.native.cron);
                                P.target.checked ? H.months.push(C + 1) : (H.months = H.months.filter((ne) => ne !== C + 1), H.months.length || (H.months = [
                                  1
                                ])), B.native.cron = Kt(H);
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
                      children: D.jsx(pe.Box, {
                        component: "tr",
                        sx: Ie.days,
                        children: new Array(12).fill(null).map((x, C) => D.jsx("td", {
                          style: Ie.tableCell,
                          children: C + 1
                        }, C))
                      })
                    }),
                    D.jsxs("tbody", {
                      children: [
                        D.jsx(pe.Box, {
                          component: "tr",
                          sx: Ie.days,
                          children: new Array(12).fill(null).map((x, C) => {
                            var _a3;
                            return D.jsx("td", {
                              children: D.jsx(pe.Checkbox, {
                                "aria-label": "day",
                                checked: ((_a3 = E == null ? void 0 : E.dates) == null ? void 0 : _a3.includes(C + 1)) || false,
                                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                onChange: (P) => _((B) => {
                                  const H = Yt(B.native.cron);
                                  P.target.checked ? (H.dates.push(C + 1), H.dates = H.dates.filter((ne) => ne)) : (H.dates = H.dates.filter((ne) => ne !== C + 1), H.dates.length || (H.dates = [
                                    1
                                  ])), B.native.cron = Kt(H);
                                }),
                                size: "small"
                              })
                            }, C);
                          })
                        }),
                        D.jsx(pe.Box, {
                          component: "tr",
                          sx: Ie.days,
                          children: new Array(12).fill(null).map((x, C) => D.jsx("td", {
                            style: Ie.tableCell,
                            children: C + 13
                          }, C))
                        }),
                        D.jsx(pe.Box, {
                          component: "tr",
                          sx: Ie.days,
                          children: new Array(12).fill(null).map((x, C) => {
                            var _a3;
                            return D.jsx("td", {
                              children: D.jsx(pe.Checkbox, {
                                "aria-label": "day",
                                checked: ((_a3 = E == null ? void 0 : E.dates) == null ? void 0 : _a3.includes(C + 13)) || false,
                                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                onChange: (P) => {
                                  _((B) => {
                                    const H = Yt(B.native.cron);
                                    P.target.checked ? (H.dates.push(C + 13), H.dates = H.dates.filter((ne) => ne)) : (H.dates = H.dates.filter((ne) => ne !== C + 13), H.dates.length || (H.dates = [
                                      1
                                    ])), B.native.cron = Kt(H);
                                  });
                                },
                                size: "small"
                              })
                            }, C);
                          })
                        }),
                        D.jsxs(pe.Box, {
                          component: "tr",
                          sx: Ie.days,
                          children: [
                            new Array(11).fill(null).map((x, C) => D.jsx("td", {
                              style: Ie.tableCell,
                              children: k < C + 25 ? null : C + 25
                            }, C)),
                            D.jsx("td", {
                              style: Ie.tableCell,
                              children: t.t("All")
                            })
                          ]
                        }),
                        D.jsxs(pe.Box, {
                          component: "tr",
                          sx: Ie.days,
                          children: [
                            new Array(11).fill(null).map((x, C) => {
                              var _a3;
                              return D.jsx("td", {
                                children: k < C + 25 ? null : D.jsx(pe.Checkbox, {
                                  "aria-label": "day",
                                  checked: ((_a3 = E == null ? void 0 : E.dates) == null ? void 0 : _a3.includes(C + 25)) || false,
                                  disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                  onChange: (P) => _((B) => {
                                    const H = Yt(B.native.cron);
                                    P.target.checked ? (H.dates.push(C + 25), H.dates = H.dates.filter((ne) => ne)) : (H.dates = H.dates.filter((ne) => ne !== C + 25), H.dates.length || (H.dates = [
                                      1
                                    ])), B.native.cron = Kt(H);
                                  }),
                                  size: "small"
                                })
                              }, C);
                            }),
                            D.jsx("td", {
                              children: D.jsx(pe.Checkbox, {
                                "aria-label": "all",
                                checked: ((_q = E == null ? void 0 : E.dates) == null ? void 0 : _q.length) === k,
                                indeterminate: ((_r = E == null ? void 0 : E.dates) == null ? void 0 : _r.length) !== k && !(E == null ? void 0 : E.dates.includes(0)),
                                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                                onChange: () => _((x) => {
                                  var _a3;
                                  const C = Yt(x.native.cron);
                                  if (((_a3 = C == null ? void 0 : C.dates) == null ? void 0 : _a3.length) !== k) {
                                    C.dates = [];
                                    for (let P = 0; P < k; P++) C.dates.push(P + 1);
                                  } else C.dates = [
                                    1
                                  ];
                                  x.native.cron = Kt(C);
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
              children: D.jsx(pe.TextField, {
                label: t.t("Description"),
                value: (i == null ? void 0 : i.common.name) || "",
                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                onChange: (x) => _((C) => C.common.name = x.target.value),
                variant: "standard",
                fullWidth: true
              })
            }),
            D.jsx("div", {
              style: Ie.narrowColor,
              children: D.jsx(wt.ColorPicker, {
                value: i.common.color || i.native.color || "",
                disabled: t.readOnly || !(i == null ? void 0 : i.common.enabled),
                onChange: (x) => _((C) => C.common.color = x),
                name: t.t("Color")
              })
            })
          ]
        }),
        D.jsxs(pe.DialogActions, {
          children: [
            t.readOnly ? null : D.jsx(pe.Button, {
              variant: "contained",
              color: "secondary",
              startIcon: D.jsx(Zo.Delete, {}),
              onClick: () => f(true),
              children: t.t("Delete")
            }),
            !t.readOnly && !t.widget ? D.jsx("div", {
              style: {
                flex: 1
              }
            }) : null,
            t.readOnly ? null : D.jsx(pe.Button, {
              variant: "contained",
              color: "primary",
              disabled: !N || R === "monthly" && (!((_s2 = E.dates) == null ? void 0 : _s2.length) || E.dates.includes(0) || !((_t = E.months) == null ? void 0 : _t.length)),
              startIcon: D.jsx(Zo.Save, {}),
              onClick: async () => {
                i.native.type === "single" ? i.native.intervals && delete i.native.intervals : i.native.type === "double" ? (i.native.intervals = i.native.intervals || [], i.native.intervals[0] = i.native.intervals[0] || {}, i.native.intervals[0].timeOffset = (parseFloat(m) || 1) * 6e4, i.native.intervals[0].value = y) : i.native.type === "toggle" && (i.native.intervals = i.native.intervals || [], i.native.intervals[0] = i.native.intervals[0] || {}, i.native.intervals[0].timeOffset = (parseFloat(m) || 1) * 6e4), await t.setEvent(i._id, i), t.updateEvents(), t.onClose();
              },
              children: t.t("Save")
            }),
            D.jsx(pe.Button, {
              variant: "contained",
              color: "grey",
              startIcon: D.jsx(Zo.Cancel, {}),
              onClick: t.onClose,
              children: t.readOnly || !N ? t.t("ra_Close") : t.t("ra_Cancel")
            })
          ]
        }),
        d && D.jsx(wt.Confirm, {
          fullWidth: false,
          title: t.t("Delete event"),
          text: t.t("Event will be deleted. Confirm?"),
          suppressQuestionMinutes: 5,
          dialogName: "deleteConfirmDialog",
          ok: t.t("Delete"),
          onClose: async (x) => {
            if (x) {
              try {
                await t.deleteEvent(i._id), t.updateEvents();
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
  };
  jg.propTypes = {
    systemConfig: V.object,
    socket: V.object.isRequired,
    onClose: V.func.isRequired,
    event: V.object,
    readOnly: V.bool,
    updateEvents: V.func.isRequired,
    serverTimeZone: V.number.isRequired,
    t: V.func.isRequired,
    theme: V.object,
    language: V.string.isRequired,
    widget: V.bool,
    setEvent: V.func.isRequired,
    deleteEvent: V.func.isRequired
  };
  const pL = [
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
  ], gL = [
    1,
    2,
    3,
    5,
    10,
    15,
    20,
    30,
    60
  ], yL = ({ type: t, t: e, color: n }) => {
    const r = Y.useRef(null);
    return Y.useEffect(() => {
      const s = new IT(r.current, {
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
  }, gn = {
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
  function nh(t) {
    if (t) return t.startsWith("#") ? t.length === 4 ? `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}50` : `${t.substring(0, 7)}50` : t.startsWith("rgb(") ? t.replace("rgb(", "rgba(").replace(")", ", 0.3)") : t.startsWith("rgba(") ? t.replace(/,\s?[.\d]+\)$/, ", 0.3)") : t;
  }
  function vL(t) {
    const e = t.getBoundingClientRect(), n = t.getElementsByClassName("fc-timegrid-slot");
    for (let r = 0; r < n.length; r++) if (n[r].getBoundingClientRect().top > e.top + 100) return n[r].dataset.time;
    return null;
  }
  function bL(t) {
    return t.date.second ? `${t.date.hour}:${t.date.minute.toString().padStart(2, "0")}:${t.date.second.toString().padStart(2, "0")}` : `${t.date.hour}:${t.date.minute.toString().padStart(2, "0")}`;
  }
  function Vg(t) {
    var _a2, _b, _c2;
    const [e, n] = Y.useState(null), [r, s] = Y.useState(t.dayStep || parseInt(window.localStorage.getItem("calendarStep"), 10) || 30), i = t.storageName || "calendar", a = Y.useRef(null), l = Y.useRef(null), c = Y.useRef(null), d = Y.useRef(null), f = Y.useRef(null), [m, g] = Y.useState({
      start: null,
      end: null
    });
    let y = (!t.widget && window.localStorage.getItem(`${i}Start`), /* @__PURE__ */ new Date()), v = t.viewMode || window.localStorage.getItem(`${i}View`) || "dayGridMonth";
    t.isSimulation && (y = /* @__PURE__ */ new Date(), v = ((_a2 = t.simulation) == null ? void 0 : _a2.native.interval) === "day" ? "timeGridDay" : "timeGridWeek");
    let S = pL;
    t.isSimulation && (S = S.filter((k) => k.type === "single"));
    const b = Y.useMemo(() => {
      const k = [];
      return t.events.forEach((T) => {
        var _a3, _b2, _c3, _d2, _e, _f2, _g2;
        if (!T) return;
        const N = ((_a3 = T.native) == null ? void 0 : _a3.intervals) && T.native.intervals[0] && T.native.intervals[0].timeOffset ? T.native.intervals[0].timeOffset : 30;
        T.common.color = T.common.color || "#3a87b2";
        const I = T.common.enabled ? T.common.color : nh(T.common.color);
        let O = wt.Utils.invertColor(T.common.color, true);
        T.common.enabled || (O = nh(O));
        let K = T.common.name;
        if (T.native.oid) {
          let z = T.native.startValue;
          typeof z == "boolean" ? z = z ? wt.I18n.t("ON") : wt.I18n.t("OFF") : T.native.states && T.native.states[z] && (z = T.native.states[z]);
          let L = (_c3 = (_b2 = T.native.intervals) == null ? void 0 : _b2[0]) == null ? void 0 : _c3.value;
          typeof L == "boolean" ? L = L ? wt.I18n.t("ON") : wt.I18n.t("OFF") : T.native.states && T.native.states[L] && (L = T.native.states[L]), K = `${T.common.name} \u2192 ${z}`, T.native.type === "double" && (K += ` \u2192 ${(((_e = (_d2 = T.native.intervals) == null ? void 0 : _d2[0]) == null ? void 0 : _e.timeOffset) || 0) / 1e3 / 60} ${wt.I18n.t("min")}. \u2192 ${L}`), T.native.type === "toggle" && (K += ` \u2192 ${(((_g2 = (_f2 = T.native.intervals) == null ? void 0 : _f2[0]) == null ? void 0 : _g2.timeOffset) || 0) / 1e3 / 60} ${wt.I18n.t("min")}. \u2192 ${wt.I18n.t("initial")}`);
        }
        if (T.native.cron) {
          const z = ri(T.native.cron, "cron", t.serverTimeZone), L = Yt(T.native.cron);
          z.setFullYear((/* @__PURE__ */ new Date()).getFullYear() - 1), Array.isArray(L.months) ? new Te({
            dtstart: z,
            until: m.end || /* @__PURE__ */ new Date(),
            freq: Te.MONTHLY,
            bymonth: L.months,
            bymonthday: L.dates
          }).between(m.start || /* @__PURE__ */ new Date(), m.end || /* @__PURE__ */ new Date()).forEach((Z) => {
            const x = T.native.astro ? ma.getTimes(Z, t.systemConfig.latitude, t.systemConfig.longitude)[T.native.astro] : Z;
            T.native.astro && T.native.offset && x.setMinutes(x.getMinutes() + T.native.offset), k.push({
              extendedProps: {
                eventId: T._id,
                icon: T.common.icon,
                type: T.native.type,
                seconds: x.getSeconds()
              },
              title: K,
              backgroundColor: I,
              textColor: O,
              start: x,
              allDay: false,
              display: "block"
            });
          }) : Array.isArray(L.dows) ? new Te({
            dtstart: z,
            until: m.end || /* @__PURE__ */ new Date(),
            freq: Te.WEEKLY,
            byweekday: L.dows.map((Z) => Z === 0 ? 6 : Z - 1)
          }).between(m.start || /* @__PURE__ */ new Date(), m.end || /* @__PURE__ */ new Date()).forEach((Z) => {
            const x = T.native.astro ? ma.getTimes(Z, t.systemConfig.latitude, t.systemConfig.longitude)[T.native.astro] : Z;
            T.native.astro && T.native.offset && x.setMinutes(x.getMinutes() + T.native.offset), k.push({
              extendedProps: {
                eventId: T._id,
                icon: T.common.icon,
                type: T.native.type,
                seconds: x.getSeconds()
              },
              title: K,
              backgroundColor: I,
              textColor: O,
              start: x,
              allDay: false,
              display: "block"
            });
          }) : k.push({
            extendedProps: {
              eventId: T._id,
              icon: T.common.icon,
              type: T.native.type,
              seconds: 0
            },
            title: K,
            backgroundColor: I,
            textColor: O,
            icon: T.common.icon
          });
        } else {
          const z = T.native.astro ? ma.getTimes(/* @__PURE__ */ new Date(), t.systemConfig.latitude, t.systemConfig.longitude)[T.native.astro] : T.native.start;
          T.native.astro && T.native.offset && z.setMinutes(z.getMinutes() + T.native.offset), k.push({
            extendedProps: {
              eventId: T._id,
              icon: T.common.icon,
              type: T.native.type,
              seconds: 0
            },
            title: K,
            display: "block",
            backgroundColor: I,
            textColor: O,
            start: ri(z, "date", t.serverTimeZone),
            end: ri(new Date(new Date(z).getTime() + N), "date", t.serverTimeZone)
          });
        }
      }), k;
    }, [
      t.events,
      t.serverTimeZone,
      t.systemConfig.latitude,
      t.systemConfig.longitude,
      m.end,
      m.start
    ]);
    if (Y.useEffect(() => {
      if (t.widget) {
        const k = () => {
          var _a3;
          const T = (_a3 = a.current) == null ? void 0 : _a3.getApi();
          T && (console.log("Scroll to now"), T.scrollToTime((/* @__PURE__ */ new Date()).getTime())), c.current ? d.current = null : d.current = setTimeout(() => k, 3e5);
        };
        setTimeout(k, 1e3);
      }
      return () => {
        d.current && clearTimeout(d.current), d.current = null, c.current && clearTimeout(c.current), c.current = null;
      };
    }, []), Y.useEffect(() => {
      f.current = null, setTimeout(() => {
        var _a3;
        const k = /* @__PURE__ */ new Date();
        (_a3 = a.current) == null ? void 0 : _a3.getApi().scrollToTime(`${k.getHours().toString().padStart(2, "0")}:${(r > k.getMinutes() ? 0 : k.getMinutes() - r).toString().padStart(2, "0")}:00`);
      }, 300);
    }, [
      t.calendarPrefix,
      t.simulationId,
      r
    ]), Y.useEffect(() => {
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
        e ? D.jsx(jg, {
          systemConfig: t.systemConfig,
          widget: t.widget,
          event: t.events.find((k) => (k == null ? void 0 : k._id) === e),
          onClose: () => {
            n(null);
            const k = f.current ? new Date(f.current) : /* @__PURE__ */ new Date(), T = `${k.getHours().toString().padStart(2, "0")}:${(r > k.getMinutes() ? 0 : k.getMinutes() - r).toString().padStart(2, "0")}:00`;
            setTimeout(() => {
              var _a3;
              return (_a3 = a.current) == null ? void 0 : _a3.getApi().scrollToTime(T);
            }, 200);
          },
          socket: t.socket,
          updateEvents: t.updateEvents,
          setEvent: t.setEvent,
          deleteEvent: (k) => {
            n(null), t.deleteEvent(k);
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
          style: gn.container,
          children: [
            !t.hideLeftBlock && !t.readOnly && D.jsxs("div", {
              style: gn.leftBlock,
              children: [
                D.jsx(pe.Paper, {
                  elevation: 4,
                  style: gn.leftPaper,
                  children: D.jsxs("div", {
                    style: gn.leftContent,
                    children: [
                      D.jsx("h4", {
                        children: t.t("Events")
                      }),
                      S.map((k, T) => {
                        var _a3, _b2;
                        return D.jsx(yL, {
                          t: t.t,
                          type: k,
                          name: t.t(k.name),
                          index: T,
                          color: t.isSimulation ? (_b2 = (_a3 = t.simulation) == null ? void 0 : _a3.common) == null ? void 0 : _b2.color : void 0
                        }, k.type);
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("div", {
                        children: t.t("Drag and drop the events above to create a new one.")
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("hr", {
                        style: gn.hr
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("div", {
                        children: t.t("Use ALT by dragging it to copy the events.")
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("hr", {
                        style: gn.hr
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("div", {
                        children: t.t("Use double click on calendar to add new events.")
                      }),
                      t.hideLeftBlockHint ? null : D.jsx("hr", {
                        style: gn.hr
                      }),
                      t.hideLeftBlockHint || R === "dayGridMonth" || R === "listMonth" ? null : D.jsxs(pe.FormControl, {
                        fullWidth: true,
                        variant: "standard",
                        children: [
                          D.jsx(pe.InputLabel, {
                            children: t.t("Zoom")
                          }),
                          D.jsx(pe.Select, {
                            value: r,
                            onChange: (k) => {
                              var _a3, _b2;
                              if ((_b2 = (_a3 = a.current) == null ? void 0 : _a3.elRef) == null ? void 0 : _b2.current) {
                                const T = vL(a.current.elRef.current);
                                T && setTimeout(() => {
                                  var _a4;
                                  return (_a4 = a.current) == null ? void 0 : _a4.getApi().scrollToTime(T);
                                }, 300);
                              }
                              window.localStorage.setItem("calendarStep", k.target.value.toString()), s(k.target.value);
                            },
                            children: gL.map((k) => D.jsxs(pe.MenuItem, {
                              value: k,
                              children: [
                                k,
                                D.jsx("span", {
                                  style: gn.leftMargin,
                                  children: t.t("min")
                                })
                              ]
                            }, k))
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
              style: gn.calendarBlock,
              children: D.jsx("div", {
                style: gn.calendar,
                children: D.jsx(Ym, {
                  ref: a,
                  plugins: [
                    KM,
                    _x,
                    oT,
                    PT,
                    HM
                  ],
                  weekends: !t.hideWeekends,
                  headerToolbar: t.hideTopBlock ? false : {
                    left: t.hideTopBlockButtons || t.isSimulation ? "" : "prev,next today",
                    center: t.isSimulation ? "" : "title",
                    right: t.hideTopBlockButtons || t.isSimulation ? "" : "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                  },
                  eventTimeFormat: t.isSimulation ? bL : void 0,
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
                    eE,
                    tE,
                    nE,
                    rE,
                    sE,
                    iE,
                    aE,
                    oE,
                    lE,
                    cE
                  ],
                  locale: t.language,
                  datesSet: (k) => {
                    var _a3, _b2;
                    (k.start.toString() !== ((_a3 = m.start) == null ? void 0 : _a3.toString()) || k.end.toString() !== ((_b2 = m.end) == null ? void 0 : _b2.toString())) && (f.current = null, g({
                      start: k.start,
                      end: k.end
                    })), t.widget ? (d.current && clearTimeout(d.current), d.current = null, c.current && clearTimeout(c.current), c.current = setTimeout(() => {
                      c.current = null;
                      const T = () => {
                        var _a4, _b3;
                        (_b3 = (_a4 = a.current) == null ? void 0 : _a4.getApi()) == null ? void 0 : _b3.scrollToTime((/* @__PURE__ */ new Date()).getTime()), c.current ? d.current = null : d.current = setTimeout(() => T, 1e3 * 60 * 5);
                      };
                      T();
                    }, 6e4)) : window.localStorage.setItem(`${i}View`, k.view.type);
                  },
                  eventClick: (k) => {
                    f.current = new Date(k.event.start).getTime(), n(k.event.extendedProps.eventId);
                  },
                  eventResize: (k) => {
                    var _a3;
                    f.current = new Date(k.event.start).getTime();
                    const T = t.events.find((N) => N._id === k.event.extendedProps.eventId);
                    if ((_a3 = T.native.intervals) == null ? void 0 : _a3[0].timeOffset) {
                      const N = JSON.parse(JSON.stringify(T));
                      N.native.intervals[0].timeOffset += k.endDelta.milliseconds, t.setEvent(N._id, N), t.updateEvents();
                    } else k.revert();
                  },
                  eventDrop: async (k) => {
                    var _a3;
                    f.current = new Date(k.event.start).getTime();
                    const T = t.events.find((N) => N._id === k.event.extendedProps.eventId);
                    if ((_a3 = T == null ? void 0 : T.native) == null ? void 0 : _a3.cron) {
                      const N = JSON.parse(JSON.stringify(T));
                      k.jsEvent.altKey && (N._id = `${t.calendarPrefix || t.simulationId}.event-${Xi()}`);
                      const I = Yt(N.native.cron), O = tn(k.event.start, "cron", t.serverTimeZone), K = new Date(k.event.start).getDate(), z = new Date(k.event.start).getMonth() + 1, L = new Date(k.event.start).getDay();
                      Array.isArray(I.months) ? (k.delta.days && (I.dates = [
                        K
                      ]), I.months.includes(z) || (I.months = [
                        z
                      ]), I.dows = "*") : Array.isArray(I.dows) && (I.months = "*", I.dates = "*", k.delta.days && (I.dows = [
                        L
                      ])), I.hours = O.hours, I.minutes = O.minutes, N.native.cron = Kt(I), await t.setEvent(N._id, N), t.updateEvents();
                    } else {
                      const N = JSON.parse(JSON.stringify(T));
                      k.jsEvent.altKey && (N._id = `${t.calendarPrefix || t.simulationId}.event-${Xi()}`), N.native.start = tn(k.event.start, "date", t.serverTimeZone), await t.setEvent(N._id, N), t.updateEvents();
                    }
                  },
                  eventReceive: async (k) => {
                    const T = {
                      _id: `${t.calendarPrefix || t.simulationId}.event-${Xi()}`,
                      common: {
                        name: k.event.title,
                        enabled: true,
                        color: "#3A87AD"
                      },
                      native: {
                        id: Date.now(),
                        start: tn(k.event.start, "date", t.serverTimeZone),
                        type: k.event.extendedProps.type,
                        oid: "",
                        startValue: ""
                      },
                      type: "schedule"
                    }, N = new Date(T.native.start);
                    if (!N.getMinutes() && !N.getHours() && (N.setHours(12), T.native.start = tn(N, "date", t.serverTimeZone)), k.event.extendedProps.type !== "single" && (T.native.intervals = [
                      {
                        timeOffset: 1800 * 1e3
                      }
                    ]), t.isSimulation) {
                      T.common.color = t.simulation.common.color || T.common.color, delete T.native.start;
                      const I = tn(k.event.start, "cron", t.serverTimeZone);
                      I.dows = t.simulation.native.interval === "day" ? [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ] : [
                        k.event.start.getDay()
                      ], I.dates = [
                        "?"
                      ], I.months = [
                        "*"
                      ], T.native.cron = Kt(I), T.native.record = {
                        states: [],
                        enums: [],
                        start: null,
                        end: null
                      };
                    }
                    f.current = new Date(k.event.start).getTime(), await t.setEvent(T._id, T), t.updateEvents(), setTimeout(() => n(T._id), 100);
                  },
                  eventDidMount: (k) => {
                    let T = k.event.extendedProps.icon;
                    if (T) {
                      const N = window.document.createElement("img");
                      !T.startsWith("data:image") && !T.startsWith("http") && !T.startsWith("/") && (T = `../../${T}`), N.setAttribute("src", T), N.className = "icon", N.style.width = "20px", N.style.height = "20px";
                      const I = k.el.getElementsByClassName("fc-event-title-container");
                      if (I.length) {
                        I[0].prepend(N);
                        const O = I[0].getElementsByClassName("fc-event-title");
                        O.length && (O[0].style.marginLeft = "23px");
                      }
                    }
                  },
                  select: async (k) => {
                    if (k.view.calendar.unselect(), t.readOnly) return;
                    const N = k.end.getTime() - k.start.getTime();
                    if ((!l.current || Date.now() - l.current > 500) && N === 1800 * 1e3) {
                      l.current = Date.now();
                      return;
                    }
                    const I = {
                      _id: `${t.calendarPrefix || t.simulationId}.event-${Xi()}`,
                      common: {
                        name: t.t("Single event"),
                        enabled: true,
                        color: "#3A87AD"
                      },
                      native: {
                        id: Date.now(),
                        start: tn(k.date || k.start, "date", t.serverTimeZone),
                        intervals: k.end && !t.isSimulation ? [
                          {
                            value: "",
                            timeOffset: k.end.getTime() - k.start.getTime()
                          }
                        ] : void 0,
                        type: k.end && !t.isSimulation ? "double" : "single",
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
  Vg.propTypes = {
    events: V.array,
    serverTimeZone: V.number,
    systemConfig: V.object,
    theme: V.object,
    socket: V.object,
    readOnly: V.bool,
    hideLeftBlock: V.bool,
    hideTopBlock: V.bool,
    hideLeftBlockHint: V.bool,
    hideTopBlockButtons: V.bool,
    hideWeekends: V.bool,
    viewMode: V.bool,
    updateEvents: V.func,
    t: V.func.isRequired,
    widget: V.bool,
    language: V.string.isRequired,
    storageName: V.string,
    calendarPrefix: V.string,
    isSimulation: V.bool,
    simulationId: V.string,
    setEvent: V.func,
    deleteEvent: V.func,
    button: V.any,
    dayStep: V.number
  };
  class To extends ai.Component {
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
      return typeof e == "object" ? e[wt.I18n.getLanguage()] || e.en : e;
    }
    componentDidMount() {
      this.props.instance && this.props.socket.getObjectViewSystem("folder", `fullcalendar.${this.props.instance}.Calendars.`, `fullcalendar.${this.props.instance}.Calendars.\u9999`).then((e) => {
        const n = Object.keys(e).map((r) => ({
          value: r,
          label: To.getText(e[r].common.name)
        }));
        n.unshift({
          value: "_",
          label: this.props.t("default")
        }), this.setState({
          list: n
        });
      });
    }
    render() {
      return D.jsx(pe.Select, {
        variant: "standard",
        fullWidth: true,
        value: this.props.value || "_",
        onChange: (e) => this.props.onChange(e.target.value === "_" ? "" : e.target.value),
        children: this.state.list.map((e) => D.jsx(pe.MenuItem, {
          value: e.value,
          children: e.label
        }, e.value))
      });
    }
  }
  To.propTypes = {
    value: V.string,
    socket: V.object,
    onChange: V.func,
    instance: V.number,
    t: V.func.isRequired
  };
  const rh = {
    content: {
      display: "flex",
      width: "100%",
      height: "100%",
      overflow: "auto"
    }
  }, wL = window.visRxWidget;
  ds = class extends wL {
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
                component: (e, n, r, s) => D.jsx(To, {
                  instance: n.instance,
                  value: n.calendar,
                  onChange: (i) => r({
                    calendar: i
                  }),
                  socket: s.context.socket,
                  t: ds.t
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
                hidden: (e) => e.readOnly,
                default: false
              },
              {
                label: "hide_left_block_hint",
                name: "hideLeftBlockHint",
                type: "checkbox",
                hidden: (e) => e.readOnly || e.hideLeftBlock,
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
                hidden: (e) => e.hide_top_block,
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
                hidden: (e, n, r) => r && r.position !== "relative"
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
      return wt.I18n.t(`full_calendar_${e}`, ...n);
    }
    getWidgetInfo() {
      return ds.getWidgetInfo();
    }
    constructor(e) {
      super(e), this.widgetRef = ai.createRef();
    }
    componentDidMount() {
      super.componentDidMount(), this.updateEvents();
    }
    onEventsChanged = (e, n) => {
      if (!this.state.rxData.calendar && e.split(".").length > 3) return;
      const r = JSON.parse(JSON.stringify(this.state.events)), s = r.findIndex((i) => i._id === e);
      s !== -1 ? n ? r[s] = n : r.splice(s, 1) : r.push(n), this.setState({
        events: r
      });
    };
    componentWillUnmount() {
      this.subscribed && this.props.context.socket.unsubscribeObject(this.subscribed, this.onEventsChanged), this.subscribed = null, super.componentWillUnmount();
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
        style: rh.content,
        ref: this.widgetRef,
        children: ds.t("Please select instance")
      }) : n = D.jsx("div", {
        style: rh.content,
        ref: this.widgetRef,
        children: D.jsx(Vg, {
          widget: true,
          systemConfig: this.props.systemConfig ? this.props.systemConfig.common : (_b = this.props.context.systemConfig) == null ? void 0 : _b.common,
          events: this.state.events || [],
          socket: this.props.context.socket,
          instance: this.state.rxData.instance,
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
          viewMode: this.state.rxData.viewMode || null,
          storageName: `fc_${this.props.id}`,
          hideWeekends: this.state.rxData.hideWeekends || false,
          t: ds.t,
          language: wt.I18n.getLanguage(),
          dayStep: this.state.rxData.dayStep || 30,
          theme: this.props.context.theme
        }, `${this.state.rxData.viewMode}_${this.state.rxData.dayStep || 30}`)
      }), this.state.rxStyle.position === "relative" ? this.wrapContent(n, null, {
        height: "calc(100% - 24px)",
        width: "calc(100% - 24px)"
      }) : n;
    }
  };
  ds.propTypes = {
    style: V.object,
    data: V.object,
    context: V.object
  };
});
export {
  __tla,
  ds as default
};
