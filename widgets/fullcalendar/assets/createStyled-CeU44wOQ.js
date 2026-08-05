import { R as Ce, s as ot, f as ve, i as ct, d as ie, q, h as je, __tla as __tla_0 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js-Bs1ZpPYs.js";
import { __tla as __tla_1 } from "./__mfe_internal__fullcalendar__loadShare__prop_mf_2_types__loadShare__.js-DBhwUaK5.js";
import { r as ft, __tla as __tla_2 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js_commonjs-proxy-DwS1g_C1.js";
import { m as lt, s as Ae, k as ut, __tla as __tla_3 } from "./getColorSchemeSelector-bFPhxf4L.js";
let hr, Mr, Fr, xt, nt, de, Lr, Ir, Tr, jr, Rr, $r, mr, at, Ze, vt, Er, Bt, W, lr, ue, gr, vr, ge, ke, Nr, rt;
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
  })()
]).then(async () => {
  var De = {
    exports: {}
  }, se = {};
  var dt = ft, ht = /* @__PURE__ */ Symbol.for("react.element"), pt = /* @__PURE__ */ Symbol.for("react.fragment"), mt = Object.prototype.hasOwnProperty, yt = dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, gt = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function We(e, t, r) {
    var n, a = {}, i = null, s = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (n in t) mt.call(t, n) && !gt.hasOwnProperty(n) && (a[n] = t[n]);
    if (e && e.defaultProps) for (n in t = e.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
    return {
      $$typeof: ht,
      type: e,
      key: i,
      ref: s,
      props: a,
      _owner: yt.current
    };
  }
  se.Fragment = pt;
  se.jsx = We;
  se.jsxs = We;
  De.exports = se;
  vt = De.exports;
  de = function() {
    return de = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, de.apply(null, arguments);
  };
  function Ve(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) e[t] && (r = Ve(e[t])) && (n && (n += " "), n += r);
    } else for (r in e) e[r] && (n && (n += " "), n += r);
    return n;
  }
  Tr = function() {
    for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Ve(e)) && (n && (n += " "), n += t);
    return n;
  };
  function bt(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function wt(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  let P, ae, m, qe, be, we, St, Ue, kt, Pt, oe, _t;
  xt = (function() {
    function e(r) {
      var n = this;
      this._insertTag = function(a) {
        var i;
        n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
      }, this.isSpeedy = r.speedy === void 0 ? true : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
    }
    var t = e.prototype;
    return t.hydrate = function(n) {
      n.forEach(this._insertTag);
    }, t.insert = function(n) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(wt(this));
      var a = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var i = bt(a);
        try {
          i.insertRule(n, i.cssRules.length);
        } catch {
        }
      } else a.appendChild(document.createTextNode(n));
      this.ctr++;
    }, t.flush = function() {
      this.tags.forEach(function(n) {
        var a;
        return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
      }), this.tags = [], this.ctr = 0;
    }, e;
  })();
  P = "-ms-";
  ae = "-moz-";
  m = "-webkit-";
  qe = "comm";
  be = "rule";
  we = "decl";
  St = "@import";
  Ue = "@keyframes";
  kt = "@layer";
  Pt = Math.abs;
  oe = String.fromCharCode;
  _t = Object.assign;
  function Ct(e, t) {
    return k(e, 0) ^ 45 ? (((t << 2 ^ k(e, 0)) << 2 ^ k(e, 1)) << 2 ^ k(e, 2)) << 2 ^ k(e, 3) : 0;
  }
  function He(e) {
    return e.trim();
  }
  function At(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function y(e, t, r) {
    return e.replace(t, r);
  }
  function he(e, t) {
    return e.indexOf(t);
  }
  function k(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function B(e, t, r) {
    return e.slice(t, r);
  }
  function L(e) {
    return e.length;
  }
  function xe(e) {
    return e.length;
  }
  function Q(e, t) {
    return t.push(e), e;
  }
  function Ot(e, t) {
    return e.map(t).join("");
  }
  var ce = 1, H = 1, ze = 0, C = 0, x = 0, z = "";
  function fe(e, t, r, n, a, i, s) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: a,
      children: i,
      line: ce,
      column: H,
      length: s,
      return: ""
    };
  }
  function G(e, t) {
    return _t(fe("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function Tt() {
    return x;
  }
  function Rt() {
    return x = C > 0 ? k(z, --C) : 0, H--, x === 10 && (H = 1, ce--), x;
  }
  function T() {
    return x = C < ze ? k(z, C++) : 0, H++, x === 10 && (H = 1, ce++), x;
  }
  function N() {
    return k(z, C);
  }
  function ee() {
    return C;
  }
  function X(e, t) {
    return B(z, e, t);
  }
  function Y(e) {
    switch (e) {
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
  function Ge(e) {
    return ce = H = 1, ze = L(z = e), C = 0, [];
  }
  function Be(e) {
    return z = "", e;
  }
  function te(e) {
    return He(X(C - 1, pe(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Et(e) {
    for (; (x = N()) && x < 33; ) T();
    return Y(e) > 2 || Y(x) > 3 ? "" : " ";
  }
  function $t(e, t) {
    for (; --t && T() && !(x < 48 || x > 102 || x > 57 && x < 65 || x > 70 && x < 97); ) ;
    return X(e, ee() + (t < 6 && N() == 32 && T() == 32));
  }
  function pe(e) {
    for (; T(); ) switch (x) {
      case e:
        return C;
      case 34:
      case 39:
        e !== 34 && e !== 39 && pe(x);
        break;
      case 40:
        e === 41 && pe(e);
        break;
      case 92:
        T();
        break;
    }
    return C;
  }
  function Ft(e, t) {
    for (; T() && e + x !== 57; ) if (e + x === 84 && N() === 47) break;
    return "/*" + X(t, C - 1) + "*" + oe(e === 47 ? e : T());
  }
  function It(e) {
    for (; !Y(N()); ) T();
    return X(e, C);
  }
  function Lt(e) {
    return Be(re("", null, null, null, [
      ""
    ], e = Ge(e), 0, [
      0
    ], e));
  }
  function re(e, t, r, n, a, i, s, o, c) {
    for (var f = 0, u = 0, h = s, _ = 0, A = 0, w = 0, d = 1, p = 1, g = 1, b = 0, S = "", R = a, O = i, v = n, l = S; p; ) switch (w = b, b = T()) {
      case 40:
        if (w != 108 && k(l, h - 1) == 58) {
          he(l += y(te(b), "&", "&\f"), "&\f") != -1 && (g = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        l += te(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        l += Et(w);
        break;
      case 92:
        l += $t(ee() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            Q(Mt(Ft(T(), ee()), t, r), c);
            break;
          default:
            l += "/";
        }
        break;
      case 123 * d:
        o[f++] = L(l) * g;
      case 125 * d:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            p = 0;
          case 59 + u:
            g == -1 && (l = y(l, /\f/g, "")), A > 0 && L(l) - h && Q(A > 32 ? Te(l + ";", n, r, h - 1) : Te(y(l, " ", "") + ";", n, r, h - 2), c);
            break;
          case 59:
            l += ";";
          default:
            if (Q(v = Oe(l, t, r, f, u, a, o, S, R = [], O = [], h), i), b === 123) if (u === 0) re(l, t, v, v, R, i, h, o, O);
            else switch (_ === 99 && k(l, 3) === 110 ? 100 : _) {
              case 100:
              case 108:
              case 109:
              case 115:
                re(e, v, v, n && Q(Oe(e, v, v, 0, 0, a, o, S, a, R = [], h), O), a, O, h, o, n ? R : O);
                break;
              default:
                re(l, v, v, v, [
                  ""
                ], O, 0, o, O);
            }
        }
        f = u = A = 0, d = g = 1, S = l = "", h = s;
        break;
      case 58:
        h = 1 + L(l), A = w;
      default:
        if (d < 1) {
          if (b == 123) --d;
          else if (b == 125 && d++ == 0 && Rt() == 125) continue;
        }
        switch (l += oe(b), b * d) {
          case 38:
            g = u > 0 ? 1 : (l += "\f", -1);
            break;
          case 44:
            o[f++] = (L(l) - 1) * g, g = 1;
            break;
          case 64:
            N() === 45 && (l += te(T())), _ = N(), u = h = L(S = l += It(ee())), b++;
            break;
          case 45:
            w === 45 && L(l) == 2 && (d = 0);
        }
    }
    return i;
  }
  function Oe(e, t, r, n, a, i, s, o, c, f, u) {
    for (var h = a - 1, _ = a === 0 ? i : [
      ""
    ], A = xe(_), w = 0, d = 0, p = 0; w < n; ++w) for (var g = 0, b = B(e, h + 1, h = Pt(d = s[w])), S = e; g < A; ++g) (S = He(d > 0 ? _[g] + " " + b : y(b, /&\f/g, _[g]))) && (c[p++] = S);
    return fe(e, t, r, a === 0 ? be : o, c, f, u);
  }
  function Mt(e, t, r) {
    return fe(e, t, r, qe, oe(Tt()), B(e, 2, -2), 0);
  }
  function Te(e, t, r, n) {
    return fe(e, t, r, we, B(e, 0, n), B(e, n + 1, -1), n);
  }
  function U(e, t) {
    for (var r = "", n = xe(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
    return r;
  }
  function Nt(e, t, r, n) {
    switch (e.type) {
      case kt:
        if (e.children.length) break;
      case St:
      case we:
        return e.return = e.return || e.value;
      case qe:
        return "";
      case Ue:
        return e.return = e.value + "{" + U(e.children, n) + "}";
      case be:
        e.value = e.props.join(",");
    }
    return L(r = U(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function jt(e) {
    var t = xe(e);
    return function(r, n, a, i) {
      for (var s = "", o = 0; o < t; o++) s += e[o](r, n, a, i) || "";
      return s;
    };
  }
  function Dt(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  function Ye(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var Wt = function(t, r, n) {
    for (var a = 0, i = 0; a = i, i = N(), a === 38 && i === 12 && (r[n] = 1), !Y(i); ) T();
    return X(t, C);
  }, Vt = function(t, r) {
    var n = -1, a = 44;
    do
      switch (Y(a)) {
        case 0:
          a === 38 && N() === 12 && (r[n] = 1), t[n] += Wt(C - 1, r, n);
          break;
        case 2:
          t[n] += te(a);
          break;
        case 4:
          if (a === 44) {
            t[++n] = N() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += oe(a);
      }
    while (a = T());
    return t;
  }, qt = function(t, r) {
    return Be(Vt(Ge(t), r));
  }, Re = /* @__PURE__ */ new WeakMap(), Ut = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Re.get(n)) && !a) {
        Re.set(t, true);
        for (var i = [], s = qt(r, i), o = n.props, c = 0, f = 0; c < s.length; c++) for (var u = 0; u < o.length; u++, f++) t.props[f] = i[c] ? s[c].replace(/&\f/g, o[u]) : o[u] + " " + s[c];
      }
    }
  }, Ht = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function Ke(e, t) {
    switch (Ct(e, t)) {
      case 5103:
        return m + "print-" + e + e;
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
        return m + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return m + e + ae + e + P + e + e;
      case 6828:
      case 4268:
        return m + e + P + e + e;
      case 6165:
        return m + e + P + "flex-" + e + e;
      case 5187:
        return m + e + y(e, /(\w+).+(:[^]+)/, m + "box-$1$2" + P + "flex-$1$2") + e;
      case 5443:
        return m + e + P + "flex-item-" + y(e, /flex-|-self/, "") + e;
      case 4675:
        return m + e + P + "flex-line-pack" + y(e, /align-content|flex-|-self/, "") + e;
      case 5548:
        return m + e + P + y(e, "shrink", "negative") + e;
      case 5292:
        return m + e + P + y(e, "basis", "preferred-size") + e;
      case 6060:
        return m + "box-" + y(e, "-grow", "") + m + e + P + y(e, "grow", "positive") + e;
      case 4554:
        return m + y(e, /([^-])(transform)/g, "$1" + m + "$2") + e;
      case 6187:
        return y(y(y(e, /(zoom-|grab)/, m + "$1"), /(image-set)/, m + "$1"), e, "") + e;
      case 5495:
      case 3959:
        return y(e, /(image-set\([^]*)/, m + "$1$`$1");
      case 4968:
        return y(y(e, /(.+:)(flex-)?(.*)/, m + "box-pack:$3" + P + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + m + e + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return y(e, /(.+)-inline(.+)/, m + "$1$2") + e;
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
        if (L(e) - 1 - t > 6) switch (k(e, t + 1)) {
          case 109:
            if (k(e, t + 4) !== 45) break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + ae + (k(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~he(e, "stretch") ? Ke(y(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (k(e, t + 1) !== 115) break;
      case 6444:
        switch (k(e, L(e) - 3 - (~he(e, "!important") && 10))) {
          case 107:
            return y(e, ":", ":" + m) + e;
          case 101:
            return y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + m + (k(e, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + P + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (k(e, t + 11)) {
          case 114:
            return m + e + P + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return m + e + P + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return m + e + P + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return m + e + P + e + e;
    }
    return e;
  }
  let zt, Gt, Yt;
  zt = function(t, r, n, a) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case we:
        t.return = Ke(t.value, t.length);
        break;
      case Ue:
        return U([
          G(t, {
            value: y(t.value, "@", "@" + m)
          })
        ], a);
      case be:
        if (t.length) return Ot(t.props, function(i) {
          switch (At(i, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return U([
                G(t, {
                  props: [
                    y(i, /:(read-\w+)/, ":" + ae + "$1")
                  ]
                })
              ], a);
            case "::placeholder":
              return U([
                G(t, {
                  props: [
                    y(i, /:(plac\w+)/, ":" + m + "input-$1")
                  ]
                }),
                G(t, {
                  props: [
                    y(i, /:(plac\w+)/, ":" + ae + "$1")
                  ]
                }),
                G(t, {
                  props: [
                    y(i, /:(plac\w+)/, P + "input-$1")
                  ]
                })
              ], a);
          }
          return "";
        });
    }
  };
  Gt = [
    zt
  ];
  Bt = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(d) {
        var p = d.getAttribute("data-emotion");
        p.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Gt, i = {}, s, o = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(d) {
      for (var p = d.getAttribute("data-emotion").split(" "), g = 1; g < p.length; g++) i[p[g]] = true;
      o.push(d);
    });
    var c, f = [
      Ut,
      Ht
    ];
    {
      var u, h = [
        Nt,
        Dt(function(d) {
          u.insert(d);
        })
      ], _ = jt(f.concat(a, h)), A = function(p) {
        return U(Lt(p), _);
      };
      c = function(p, g, b, S) {
        u = b, A(p ? p + "{" + g.styles + "}" : g.styles), S && (w.inserted[g.name] = true);
      };
    }
    var w = {
      key: r,
      sheet: new xt({
        key: r,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: c
    };
    return w.sheet.hydrate(o), w;
  };
  Yt = true;
  function Xe(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }), n;
  }
  let Se;
  Se = function(t, r, n) {
    var a = t.key + "-" + r.name;
    (n === false || Yt === false) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  };
  Ze = function(t, r, n) {
    Se(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do
        t.insert(r === i ? "." + a : "", i, t.sheet, true), i = i.next;
      while (i !== void 0);
    }
  };
  function Kt(e) {
    for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4) r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= r >>> 24, t = (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (a) {
      case 3:
        t ^= (e.charCodeAt(n + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(n + 1) & 255) << 8;
      case 1:
        t ^= e.charCodeAt(n) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
  }
  var Xt = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  }, Zt = /[A-Z]|^ms/g, Jt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Je = function(t) {
    return t.charCodeAt(1) === 45;
  }, Ee = function(t) {
    return t != null && typeof t != "boolean";
  }, le = Ye(function(e) {
    return Je(e) ? e : e.replace(Zt, "-$&").toLowerCase();
  }), $e = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(Jt, function(n, a, i) {
          return M = {
            name: a,
            styles: i,
            next: M
          }, a;
        });
    }
    return Xt[t] !== 1 && !Je(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
  };
  function K(e, t, r) {
    if (r == null) return "";
    var n = r;
    if (n.__emotion_styles !== void 0) return n;
    switch (typeof r) {
      case "boolean":
        return "";
      case "object": {
        var a = r;
        if (a.anim === 1) return M = {
          name: a.name,
          styles: a.styles,
          next: M
        }, a.name;
        var i = r;
        if (i.styles !== void 0) {
          var s = i.next;
          if (s !== void 0) for (; s !== void 0; ) M = {
            name: s.name,
            styles: s.styles,
            next: M
          }, s = s.next;
          var o = i.styles + ";";
          return o;
        }
        return Qt(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var c = M, f = r(e);
          return M = c, K(e, t, f);
        }
        break;
      }
    }
    var u = r;
    if (t == null) return u;
    var h = t[u];
    return h !== void 0 ? h : u;
  }
  function Qt(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += K(e, t, r[a]) + ";";
    else for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var o = s;
        t != null && t[o] !== void 0 ? n += i + "{" + t[o] + "}" : Ee(o) && (n += le(i) + ":" + $e(i, o) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var c = 0; c < s.length; c++) Ee(s[c]) && (n += le(i) + ":" + $e(i, s[c]) + ";");
      else {
        var f = K(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += le(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
    return n;
  }
  var Fe = /label:\s*([^\s;{]+)\s*(;|$)/g, M;
  ke = function(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, a = "";
    M = void 0;
    var i = e[0];
    if (i == null || i.raw === void 0) n = false, a += K(r, t, i);
    else {
      var s = i;
      a += s[0];
    }
    for (var o = 1; o < e.length; o++) if (a += K(r, t, e[o]), n) {
      var c = i;
      a += c[o];
    }
    Fe.lastIndex = 0;
    for (var f = "", u; (u = Fe.exec(a)) !== null; ) f += "-" + u[1];
    var h = Kt(a) + f;
    return {
      name: h,
      styles: a,
      next: M
    };
  };
  let er, Qe, et, tt, me, tr, rr, nr, ar, ir, sr, Ie, Le, or, cr, fr, ye;
  er = function(t) {
    return t();
  };
  Qe = Ce.useInsertionEffect ? Ce.useInsertionEffect : false;
  et = Qe || er;
  Rr = Qe || ot;
  tt = ve(typeof HTMLElement < "u" ? Bt({
    key: "css"
  }) : null);
  Er = tt.Provider;
  rt = function(t) {
    return ct(function(r, n) {
      var a = ie(tt);
      return t(r, a, n);
    });
  };
  nt = ve({});
  at = {}.hasOwnProperty;
  me = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  $r = function(t, r) {
    var n = {};
    for (var a in r) at.call(r, a) && (n[a] = r[a]);
    return n[me] = t, n;
  };
  tr = function(t) {
    var r = t.cache, n = t.serialized, a = t.isStringTag;
    return Se(r, n, a), et(function() {
      return Ze(r, n, a);
    }), null;
  };
  rr = rt(function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[me], i = [
      n
    ], s = "";
    typeof e.className == "string" ? s = Xe(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
    var o = ke(i, void 0, ie(nt));
    s += t.key + "-" + o.name;
    var c = {};
    for (var f in e) at.call(e, f) && f !== "css" && f !== me && (c[f] = e[f]);
    return c.className = s, r && (c.ref = r), q(je, null, q(tr, {
      cache: t,
      serialized: o,
      isStringTag: typeof a == "string"
    }), q(a, c));
  });
  Fr = rr;
  nr = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  ar = Ye(function(e) {
    return nr.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  });
  ir = ar;
  sr = function(t) {
    return t !== "theme";
  };
  Ie = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? ir : sr;
  };
  Le = function(t, r, n) {
    var a;
    if (r) {
      var i = r.shouldForwardProp;
      a = t.__emotion_forwardProp && i ? function(s) {
        return t.__emotion_forwardProp(s) && i(s);
      } : i;
    }
    return typeof a != "function" && n && (a = t.__emotion_forwardProp), a;
  };
  or = function(t) {
    var r = t.cache, n = t.serialized, a = t.isStringTag;
    return Se(r, n, a), et(function() {
      return Ze(r, n, a);
    }), null;
  };
  cr = function e(t, r) {
    var n = t.__emotion_real === t, a = n && t.__emotion_base || t, i, s;
    r !== void 0 && (i = r.label, s = r.target);
    var o = Le(t, r, n), c = o || Ie(a), f = !c("as");
    return function() {
      var u = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (i !== void 0 && h.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0) h.push.apply(h, u);
      else {
        var _ = u[0];
        h.push(_[0]);
        for (var A = u.length, w = 1; w < A; w++) h.push(u[w], _[w]);
      }
      var d = rt(function(p, g, b) {
        var S = f && p.as || a, R = "", O = [], v = p;
        if (p.theme == null) {
          v = {};
          for (var l in p) v[l] = p[l];
          v.theme = ie(nt);
        }
        typeof p.className == "string" ? R = Xe(g.registered, O, p.className) : p.className != null && (R = p.className + " ");
        var F = ke(h.concat(O), g.registered, v);
        R += g.key + "-" + F.name, s !== void 0 && (R += " " + s);
        var E = f && o === void 0 ? Ie(S) : c, V = {};
        for (var j in p) f && j === "as" || E(j) && (V[j] = p[j]);
        return V.className = R, b && (V.ref = b), q(je, null, q(or, {
          cache: g,
          serialized: F,
          isStringTag: typeof S == "string"
        }), q(S, V));
      });
      return d.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", d.defaultProps = t.defaultProps, d.__emotion_real = d, d.__emotion_base = a, d.__emotion_styles = h, d.__emotion_forwardProp = o, Object.defineProperty(d, "toString", {
        value: function() {
          return "." + s;
        }
      }), d.withComponent = function(p, g) {
        var b = e(p, de({}, r, g, {
          shouldForwardProp: Le(d, g, true)
        }));
        return b.apply(void 0, h);
      }, d;
    };
  };
  fr = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan"
  ];
  ye = cr.bind(null);
  fr.forEach(function(e) {
    ye[e] = ye(e);
  });
  lr = function(e, t) {
    return ye(e, t);
  };
  function ur(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  }
  const Me = [];
  W = function(e) {
    return Me[0] = e, ke(Me);
  };
  ge = function(e, t) {
    const r = {
      ...t
    };
    for (const n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      const a = n;
      if (a === "components" || a === "slots") r[a] = {
        ...e[a],
        ...r[a]
      };
      else if (a === "componentsProps" || a === "slotProps") {
        const i = e[a], s = t[a];
        if (!s) r[a] = i || {};
        else if (!i) r[a] = s;
        else {
          r[a] = {
            ...s
          };
          for (const o in i) if (Object.prototype.hasOwnProperty.call(i, o)) {
            const c = o;
            r[a][c] = ge(i[c], s[c]);
          }
        }
      } else r[a] === void 0 && (r[a] = e[a]);
    }
    return r;
  };
  Ir = function(e, t, r = void 0) {
    const n = {};
    for (const a in e) {
      const i = e[a];
      let s = "", o = true;
      for (let c = 0; c < i.length; c += 1) {
        const f = i[c];
        f && (s += (o === true ? "" : " ") + t(f), o = false, r && r[f] && (s += " " + r[f]));
      }
      n[a] = s;
    }
    return n;
  };
  let Ne, dr, pr;
  Ne = (e) => e;
  dr = () => {
    let e = Ne;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ne;
      }
    };
  };
  hr = dr();
  pr = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };
  mr = function(e, t, r = "Mui") {
    const n = pr[t];
    return n ? `${r}-${n}` : `${hr.generate(e)}-${t}`;
  };
  Lr = function(e, t, r = "Mui") {
    const n = {};
    return t.forEach((a) => {
      n[a] = mr(e, a, r);
    }), n;
  };
  const it = ve(void 0);
  Mr = function({ value: e, children: t }) {
    return vt.jsx(it.Provider, {
      value: e,
      children: t
    });
  };
  function yr(e) {
    const { theme: t, name: r, props: n } = e;
    if (!t || !t.components || !t.components[r]) return n;
    const a = t.components[r];
    return a.defaultProps ? ge(a.defaultProps, n) : !a.styleOverrides && !a.variants ? ge(a, n) : n;
  }
  Nr = function({ props: e, name: t }) {
    const r = ie(it);
    return yr({
      props: e,
      name: t,
      theme: {
        components: r
      }
    });
  };
  gr = function(e) {
    const { variants: t, ...r } = e, n = {
      variants: t,
      style: W(r),
      isProcessed: true
    };
    return n.style === r || t && t.forEach((a) => {
      typeof a.style != "function" && (a.style = W(a.style));
    }), n;
  };
  vr = lt();
  ue = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  function D(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
  }
  function br(e) {
    return e ? (t, r) => r[e] : null;
  }
  function wr(e, t, r) {
    e.theme = Sr(e.theme) ? r : e.theme[t] || e.theme;
  }
  function ne(e, t, r) {
    const n = typeof t == "function" ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((a) => ne(e, a, r));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
      let a;
      if (n.isProcessed) a = r ? D(n.style, r) : n.style;
      else {
        const { variants: i, ...s } = n;
        a = r ? D(W(s), r) : s;
      }
      return st(e, n.variants, [
        a
      ], r);
    }
    return (n == null ? void 0 : n.isProcessed) ? r ? D(W(n.style), r) : n.style : r ? D(W(n), r) : n;
  }
  function st(e, t, r = [], n = void 0) {
    var _a;
    let a;
    e: for (let i = 0; i < t.length; i += 1) {
      const s = t[i];
      if (typeof s.props == "function") {
        if (a ?? (a = {
          ...e,
          ...e.ownerState,
          ownerState: e.ownerState
        }), !s.props(a)) continue;
      } else for (const o in s.props) if (e[o] !== s.props[o] && ((_a = e.ownerState) == null ? void 0 : _a[o]) !== s.props[o]) continue e;
      typeof s.style == "function" ? (a ?? (a = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), r.push(n ? D(W(s.style(a)), n) : s.style(a))) : r.push(n ? D(W(s.style), n) : s.style);
    }
    return r;
  }
  jr = function(e = {}) {
    const { themeId: t, defaultTheme: r = vr, rootShouldForwardProp: n = ue, slotShouldForwardProp: a = ue } = e;
    function i(o) {
      wr(o, t, r);
    }
    return (o, c = {}) => {
      ur(o, (v) => v.filter((l) => l !== Ae));
      const { name: f, slot: u, skipVariantsResolver: h, skipSx: _, overridesResolver: A = br(Pr(u)), ...w } = c, d = f && f.startsWith("Mui") || u ? "components" : "custom", p = h !== void 0 ? h : u && u !== "Root" && u !== "root" || false, g = _ || false;
      let b = ue;
      u === "Root" || u === "root" ? b = n : u ? b = a : kr(o) && (b = void 0);
      const S = lr(o, {
        shouldForwardProp: b,
        label: xr(),
        ...w
      }), R = (v) => {
        if (v.__emotion_real === v) return v;
        if (typeof v == "function") return function(F) {
          return ne(F, v, F.theme.modularCssLayers ? d : void 0);
        };
        if (ut(v)) {
          const l = gr(v);
          return function(E) {
            return l.variants ? ne(E, l, E.theme.modularCssLayers ? d : void 0) : E.theme.modularCssLayers ? D(l.style, d) : l.style;
          };
        }
        return v;
      }, O = (...v) => {
        const l = [], F = v.map(R), E = [];
        if (l.push(i), f && A && E.push(function($) {
          var _a, _b;
          const I = (_b = (_a = $.theme.components) == null ? void 0 : _a[f]) == null ? void 0 : _b.styleOverrides;
          if (!I) return null;
          const Pe = {};
          for (const _e in I) Pe[_e] = ne($, I[_e], $.theme.modularCssLayers ? "theme" : void 0);
          return A($, Pe);
        }), f && !p && E.push(function($) {
          var _a, _b, _c;
          const I = (_c = (_b = (_a = $.theme) == null ? void 0 : _a.components) == null ? void 0 : _b[f]) == null ? void 0 : _c.variants;
          return I ? st($, I, [], $.theme.modularCssLayers ? "theme" : void 0) : null;
        }), g || E.push(Ae), Array.isArray(F[0])) {
          const Z = F.shift(), $ = new Array(l.length).fill(""), J = new Array(E.length).fill("");
          let I;
          I = [
            ...$,
            ...Z,
            ...J
          ], I.raw = [
            ...$,
            ...Z.raw,
            ...J
          ], l.unshift(I);
        }
        const V = [
          ...l,
          ...F,
          ...E
        ], j = S(...V);
        return o.muiName && (j.muiName = o.muiName), j;
      };
      return S.withConfig && (O.withConfig = S.withConfig), O;
    };
  };
  function xr(e, t) {
    return void 0;
  }
  function Sr(e) {
    for (const t in e) return false;
    return true;
  }
  function kr(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function Pr(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
});
export {
  hr as C,
  Mr as D,
  Fr as E,
  xt as S,
  nt as T,
  de as _,
  __tla,
  Lr as a,
  Ir as b,
  Tr as c,
  jr as d,
  Rr as e,
  $r as f,
  mr as g,
  at as h,
  Ze as i,
  vt as j,
  Er as k,
  Bt as l,
  W as m,
  lr as n,
  ue as o,
  gr as p,
  vr as q,
  ge as r,
  ke as s,
  Nr as u,
  rt as w
};
