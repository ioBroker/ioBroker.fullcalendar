import { f as k, a as Ce, __tla as __tla_0 } from "./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js";
import { m as at, s as Pe, k as it, __tla as __tla_1 } from "./getColorSchemeSelector-C1WqGkJ4.js";
let or, Er, Cr, mt, Qe, ue, _r, Pr, Or, Ar, wr, kr, fr, et, Be, dt, Sr, Vt, V, ar, le, lr, ur, ye, we, Tr, Je;
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
  })()
]).then(async () => {
  var Me = {
    exports: {}
  }, ie = {};
  var st = k, ot = /* @__PURE__ */ Symbol.for("react.element"), ct = /* @__PURE__ */ Symbol.for("react.fragment"), ft = Object.prototype.hasOwnProperty, lt = st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ut = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };
  function Ne(e, t, r) {
    var n, a = {}, i = null, s = null;
    r !== void 0 && (i = "" + r), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (n in t) ft.call(t, n) && !ut.hasOwnProperty(n) && (a[n] = t[n]);
    if (e && e.defaultProps) for (n in t = e.defaultProps, t) a[n] === void 0 && (a[n] = t[n]);
    return {
      $$typeof: ot,
      type: e,
      key: i,
      ref: s,
      props: a,
      _owner: lt.current
    };
  }
  ie.Fragment = ct;
  ie.jsx = Ne;
  ie.jsxs = Ne;
  Me.exports = ie;
  dt = Me.exports;
  ue = function() {
    return ue = Object.assign ? Object.assign.bind() : function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, ue.apply(null, arguments);
  };
  function ht(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++) if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
  }
  function pt(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
  }
  let P, ae, m, je, ge, ve, yt, De, gt, vt, se, bt;
  mt = (function() {
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
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(pt(this));
      var a = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var i = ht(a);
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
  je = "comm";
  ge = "rule";
  ve = "decl";
  yt = "@import";
  De = "@keyframes";
  gt = "@layer";
  vt = Math.abs;
  se = String.fromCharCode;
  bt = Object.assign;
  function xt(e, t) {
    return C(e, 0) ^ 45 ? (((t << 2 ^ C(e, 0)) << 2 ^ C(e, 1)) << 2 ^ C(e, 2)) << 2 ^ C(e, 3) : 0;
  }
  function We(e) {
    return e.trim();
  }
  function wt(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function y(e, t, r) {
    return e.replace(t, r);
  }
  function de(e, t) {
    return e.indexOf(t);
  }
  function C(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function B(e, t, r) {
    return e.slice(t, r);
  }
  function M(e) {
    return e.length;
  }
  function be(e) {
    return e.length;
  }
  function Q(e, t) {
    return t.push(e), e;
  }
  function St(e, t) {
    return e.map(t).join("");
  }
  var oe = 1, q = 1, Ve = 0, A = 0, w = 0, z = "";
  function ce(e, t, r, n, a, i, s) {
    return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: a,
      children: i,
      line: oe,
      column: q,
      length: s,
      return: ""
    };
  }
  function G(e, t) {
    return bt(ce("", null, null, "", null, null, 0), e, {
      length: -e.length
    }, t);
  }
  function kt() {
    return w;
  }
  function Ct() {
    return w = A > 0 ? C(z, --A) : 0, q--, w === 10 && (q = 1, oe--), w;
  }
  function T() {
    return w = A < Ve ? C(z, A++) : 0, q++, w === 10 && (q = 1, oe++), w;
  }
  function j() {
    return C(z, A);
  }
  function ee() {
    return A;
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
  function Ue(e) {
    return oe = q = 1, Ve = M(z = e), A = 0, [];
  }
  function He(e) {
    return z = "", e;
  }
  function te(e) {
    return We(X(A - 1, he(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function Pt(e) {
    for (; (w = j()) && w < 33; ) T();
    return Y(e) > 2 || Y(w) > 3 ? "" : " ";
  }
  function _t(e, t) {
    for (; --t && T() && !(w < 48 || w > 102 || w > 57 && w < 65 || w > 70 && w < 97); ) ;
    return X(e, ee() + (t < 6 && j() == 32 && T() == 32));
  }
  function he(e) {
    for (; T(); ) switch (w) {
      case e:
        return A;
      case 34:
      case 39:
        e !== 34 && e !== 39 && he(w);
        break;
      case 40:
        e === 41 && he(e);
        break;
      case 92:
        T();
        break;
    }
    return A;
  }
  function At(e, t) {
    for (; T() && e + w !== 57; ) if (e + w === 84 && j() === 47) break;
    return "/*" + X(t, A - 1) + "*" + se(e === 47 ? e : T());
  }
  function Ot(e) {
    for (; !Y(j()); ) T();
    return X(e, A);
  }
  function Et(e) {
    return He(re("", null, null, null, [
      ""
    ], e = Ue(e), 0, [
      0
    ], e));
  }
  function re(e, t, r, n, a, i, s, o, c) {
    for (var f = 0, u = 0, h = s, _ = 0, O = 0, x = 0, d = 1, p = 1, g = 1, b = 0, S = "", R = a, E = i, v = n, l = S; p; ) switch (x = b, b = T()) {
      case 40:
        if (x != 108 && C(l, h - 1) == 58) {
          de(l += y(te(b), "&", "&\f"), "&\f") != -1 && (g = -1);
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
        l += Pt(x);
        break;
      case 92:
        l += _t(ee() - 1, 7);
        continue;
      case 47:
        switch (j()) {
          case 42:
          case 47:
            Q(Tt(At(T(), ee()), t, r), c);
            break;
          default:
            l += "/";
        }
        break;
      case 123 * d:
        o[f++] = M(l) * g;
      case 125 * d:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            p = 0;
          case 59 + u:
            g == -1 && (l = y(l, /\f/g, "")), O > 0 && M(l) - h && Q(O > 32 ? Ae(l + ";", n, r, h - 1) : Ae(y(l, " ", "") + ";", n, r, h - 2), c);
            break;
          case 59:
            l += ";";
          default:
            if (Q(v = _e(l, t, r, f, u, a, o, S, R = [], E = [], h), i), b === 123) if (u === 0) re(l, t, v, v, R, i, h, o, E);
            else switch (_ === 99 && C(l, 3) === 110 ? 100 : _) {
              case 100:
              case 108:
              case 109:
              case 115:
                re(e, v, v, n && Q(_e(e, v, v, 0, 0, a, o, S, a, R = [], h), E), a, E, h, o, n ? R : E);
                break;
              default:
                re(l, v, v, v, [
                  ""
                ], E, 0, o, E);
            }
        }
        f = u = O = 0, d = g = 1, S = l = "", h = s;
        break;
      case 58:
        h = 1 + M(l), O = x;
      default:
        if (d < 1) {
          if (b == 123) --d;
          else if (b == 125 && d++ == 0 && Ct() == 125) continue;
        }
        switch (l += se(b), b * d) {
          case 38:
            g = u > 0 ? 1 : (l += "\f", -1);
            break;
          case 44:
            o[f++] = (M(l) - 1) * g, g = 1;
            break;
          case 64:
            j() === 45 && (l += te(T())), _ = j(), u = h = M(S = l += Ot(ee())), b++;
            break;
          case 45:
            x === 45 && M(l) == 2 && (d = 0);
        }
    }
    return i;
  }
  function _e(e, t, r, n, a, i, s, o, c, f, u) {
    for (var h = a - 1, _ = a === 0 ? i : [
      ""
    ], O = be(_), x = 0, d = 0, p = 0; x < n; ++x) for (var g = 0, b = B(e, h + 1, h = vt(d = s[x])), S = e; g < O; ++g) (S = We(d > 0 ? _[g] + " " + b : y(b, /&\f/g, _[g]))) && (c[p++] = S);
    return ce(e, t, r, a === 0 ? ge : o, c, f, u);
  }
  function Tt(e, t, r) {
    return ce(e, t, r, je, se(kt()), B(e, 2, -2), 0);
  }
  function Ae(e, t, r, n) {
    return ce(e, t, r, ve, B(e, 0, n), B(e, n + 1, -1), n);
  }
  function H(e, t) {
    for (var r = "", n = be(e), a = 0; a < n; a++) r += t(e[a], a, e, t) || "";
    return r;
  }
  function Rt(e, t, r, n) {
    switch (e.type) {
      case gt:
        if (e.children.length) break;
      case yt:
      case ve:
        return e.return = e.return || e.value;
      case je:
        return "";
      case De:
        return e.return = e.value + "{" + H(e.children, n) + "}";
      case ge:
        e.value = e.props.join(",");
    }
    return M(r = H(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
  }
  function $t(e) {
    var t = be(e);
    return function(r, n, a, i) {
      for (var s = "", o = 0; o < t; o++) s += e[o](r, n, a, i) || "";
      return s;
    };
  }
  function Ft(e) {
    return function(t) {
      t.root || (t = t.return) && e(t);
    };
  }
  function qe(e) {
    var t = /* @__PURE__ */ Object.create(null);
    return function(r) {
      return t[r] === void 0 && (t[r] = e(r)), t[r];
    };
  }
  var Lt = function(t, r, n) {
    for (var a = 0, i = 0; a = i, i = j(), a === 38 && i === 12 && (r[n] = 1), !Y(i); ) T();
    return X(t, A);
  }, It = function(t, r) {
    var n = -1, a = 44;
    do
      switch (Y(a)) {
        case 0:
          a === 38 && j() === 12 && (r[n] = 1), t[n] += Lt(A - 1, r, n);
          break;
        case 2:
          t[n] += te(a);
          break;
        case 4:
          if (a === 44) {
            t[++n] = j() === 58 ? "&\f" : "", r[n] = t[n].length;
            break;
          }
        default:
          t[n] += se(a);
      }
    while (a = T());
    return t;
  }, Mt = function(t, r) {
    return He(It(Ue(t), r));
  }, Oe = /* @__PURE__ */ new WeakMap(), Nt = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var r = t.value, n = t.parent, a = t.column === n.column && t.line === n.line; n.type !== "rule"; ) if (n = n.parent, !n) return;
      if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Oe.get(n)) && !a) {
        Oe.set(t, true);
        for (var i = [], s = Mt(r, i), o = n.props, c = 0, f = 0; c < s.length; c++) for (var u = 0; u < o.length; u++, f++) t.props[f] = i[c] ? s[c].replace(/&\f/g, o[u]) : o[u] + " " + s[c];
      }
    }
  }, jt = function(t) {
    if (t.type === "decl") {
      var r = t.value;
      r.charCodeAt(0) === 108 && r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
    }
  };
  function ze(e, t) {
    switch (xt(e, t)) {
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
        if (M(e) - 1 - t > 6) switch (C(e, t + 1)) {
          case 109:
            if (C(e, t + 4) !== 45) break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + m + "$2-$3$1" + ae + (C(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~de(e, "stretch") ? ze(y(e, "stretch", "fill-available"), t) + e : e;
        }
        break;
      case 4949:
        if (C(e, t + 1) !== 115) break;
      case 6444:
        switch (C(e, M(e) - 3 - (~de(e, "!important") && 10))) {
          case 107:
            return y(e, ":", ":" + m) + e;
          case 101:
            return y(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + m + (C(e, 14) === 45 ? "inline-" : "") + "box$3$1" + m + "$2$3$1" + P + "$2box$3") + e;
        }
        break;
      case 5936:
        switch (C(e, t + 11)) {
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
  let Dt, Wt, Ut;
  Dt = function(t, r, n, a) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case ve:
        t.return = ze(t.value, t.length);
        break;
      case De:
        return H([
          G(t, {
            value: y(t.value, "@", "@" + m)
          })
        ], a);
      case ge:
        if (t.length) return St(t.props, function(i) {
          switch (wt(i, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return H([
                G(t, {
                  props: [
                    y(i, /:(read-\w+)/, ":" + ae + "$1")
                  ]
                })
              ], a);
            case "::placeholder":
              return H([
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
  Wt = [
    Dt
  ];
  Vt = function(t) {
    var r = t.key;
    if (r === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function(d) {
        var p = d.getAttribute("data-emotion");
        p.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Wt, i = {}, s, o = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + r + ' "]'), function(d) {
      for (var p = d.getAttribute("data-emotion").split(" "), g = 1; g < p.length; g++) i[p[g]] = true;
      o.push(d);
    });
    var c, f = [
      Nt,
      jt
    ];
    {
      var u, h = [
        Rt,
        Ft(function(d) {
          u.insert(d);
        })
      ], _ = $t(f.concat(a, h)), O = function(p) {
        return H(Et(p), _);
      };
      c = function(p, g, b, S) {
        u = b, O(p ? p + "{" + g.styles + "}" : g.styles), S && (x.inserted[g.name] = true);
      };
    }
    var x = {
      key: r,
      sheet: new mt({
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
    return x.sheet.hydrate(o), x;
  };
  Ut = true;
  function Ge(e, t, r) {
    var n = "";
    return r.split(" ").forEach(function(a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : a && (n += a + " ");
    }), n;
  }
  let xe;
  xe = function(t, r, n) {
    var a = t.key + "-" + r.name;
    (n === false || Ut === false) && t.registered[a] === void 0 && (t.registered[a] = r.styles);
  };
  Be = function(t, r, n) {
    xe(t, r, n);
    var a = t.key + "-" + r.name;
    if (t.inserted[r.name] === void 0) {
      var i = r;
      do
        t.insert(r === i ? "." + a : "", i, t.sheet, true), i = i.next;
      while (i !== void 0);
    }
  };
  function Ht(e) {
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
  var qt = {
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
  }, zt = /[A-Z]|^ms/g, Gt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ye = function(t) {
    return t.charCodeAt(1) === 45;
  }, Ee = function(t) {
    return t != null && typeof t != "boolean";
  }, fe = qe(function(e) {
    return Ye(e) ? e : e.replace(zt, "-$&").toLowerCase();
  }), Te = function(t, r) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof r == "string") return r.replace(Gt, function(n, a, i) {
          return N = {
            name: a,
            styles: i,
            next: N
          }, a;
        });
    }
    return qt[t] !== 1 && !Ye(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
        if (a.anim === 1) return N = {
          name: a.name,
          styles: a.styles,
          next: N
        }, a.name;
        var i = r;
        if (i.styles !== void 0) {
          var s = i.next;
          if (s !== void 0) for (; s !== void 0; ) N = {
            name: s.name,
            styles: s.styles,
            next: N
          }, s = s.next;
          var o = i.styles + ";";
          return o;
        }
        return Bt(e, t, r);
      }
      case "function": {
        if (e !== void 0) {
          var c = N, f = r(e);
          return N = c, K(e, t, f);
        }
        break;
      }
    }
    var u = r;
    if (t == null) return u;
    var h = t[u];
    return h !== void 0 ? h : u;
  }
  function Bt(e, t, r) {
    var n = "";
    if (Array.isArray(r)) for (var a = 0; a < r.length; a++) n += K(e, t, r[a]) + ";";
    else for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var o = s;
        t != null && t[o] !== void 0 ? n += i + "{" + t[o] + "}" : Ee(o) && (n += fe(i) + ":" + Te(i, o) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0)) for (var c = 0; c < s.length; c++) Ee(s[c]) && (n += fe(i) + ":" + Te(i, s[c]) + ";");
      else {
        var f = K(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += fe(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
    return n;
  }
  var Re = /label:\s*([^\s;{]+)\s*(;|$)/g, N;
  we = function(e, t, r) {
    if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0) return e[0];
    var n = true, a = "";
    N = void 0;
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
    Re.lastIndex = 0;
    for (var f = "", u; (u = Re.exec(a)) !== null; ) f += "-" + u[1];
    var h = Ht(a) + f;
    return {
      name: h,
      styles: a,
      next: N
    };
  };
  let Yt, Ke, Xe, Ze, pe, Kt, Xt, Zt, Jt, Qt, er, $e, Fe, tr, rr, nr, me;
  Yt = function(t) {
    return t();
  };
  Ke = Ce.useInsertionEffect ? Ce.useInsertionEffect : false;
  Xe = Ke || Yt;
  wr = Ke || k.useLayoutEffect;
  Ze = k.createContext(typeof HTMLElement < "u" ? Vt({
    key: "css"
  }) : null);
  Sr = Ze.Provider;
  Je = function(t) {
    return k.forwardRef(function(r, n) {
      var a = k.useContext(Ze);
      return t(r, a, n);
    });
  };
  Qe = k.createContext({});
  et = {}.hasOwnProperty;
  pe = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
  kr = function(t, r) {
    var n = {};
    for (var a in r) et.call(r, a) && (n[a] = r[a]);
    return n[pe] = t, n;
  };
  Kt = function(t) {
    var r = t.cache, n = t.serialized, a = t.isStringTag;
    return xe(r, n, a), Xe(function() {
      return Be(r, n, a);
    }), null;
  };
  Xt = Je(function(e, t, r) {
    var n = e.css;
    typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
    var a = e[pe], i = [
      n
    ], s = "";
    typeof e.className == "string" ? s = Ge(t.registered, i, e.className) : e.className != null && (s = e.className + " ");
    var o = we(i, void 0, k.useContext(Qe));
    s += t.key + "-" + o.name;
    var c = {};
    for (var f in e) et.call(e, f) && f !== "css" && f !== pe && (c[f] = e[f]);
    return c.className = s, r && (c.ref = r), k.createElement(k.Fragment, null, k.createElement(Kt, {
      cache: t,
      serialized: o,
      isStringTag: typeof a == "string"
    }), k.createElement(a, c));
  });
  Cr = Xt;
  Zt = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
  Jt = qe(function(e) {
    return Zt.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  });
  Qt = Jt;
  er = function(t) {
    return t !== "theme";
  };
  $e = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Qt : er;
  };
  Fe = function(t, r, n) {
    var a;
    if (r) {
      var i = r.shouldForwardProp;
      a = t.__emotion_forwardProp && i ? function(s) {
        return t.__emotion_forwardProp(s) && i(s);
      } : i;
    }
    return typeof a != "function" && n && (a = t.__emotion_forwardProp), a;
  };
  tr = function(t) {
    var r = t.cache, n = t.serialized, a = t.isStringTag;
    return xe(r, n, a), Xe(function() {
      return Be(r, n, a);
    }), null;
  };
  rr = function e(t, r) {
    var n = t.__emotion_real === t, a = n && t.__emotion_base || t, i, s;
    r !== void 0 && (i = r.label, s = r.target);
    var o = Fe(t, r, n), c = o || $e(a), f = !c("as");
    return function() {
      var u = arguments, h = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (i !== void 0 && h.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0) h.push.apply(h, u);
      else {
        var _ = u[0];
        h.push(_[0]);
        for (var O = u.length, x = 1; x < O; x++) h.push(u[x], _[x]);
      }
      var d = Je(function(p, g, b) {
        var S = f && p.as || a, R = "", E = [], v = p;
        if (p.theme == null) {
          v = {};
          for (var l in p) v[l] = p[l];
          v.theme = k.useContext(Qe);
        }
        typeof p.className == "string" ? R = Ge(g.registered, E, p.className) : p.className != null && (R = p.className + " ");
        var L = we(h.concat(E), g.registered, v);
        R += g.key + "-" + L.name, s !== void 0 && (R += " " + s);
        var $ = f && o === void 0 ? $e(S) : c, U = {};
        for (var D in p) f && D === "as" || $(D) && (U[D] = p[D]);
        return U.className = R, b && (U.ref = b), k.createElement(k.Fragment, null, k.createElement(tr, {
          cache: g,
          serialized: L,
          isStringTag: typeof S == "string"
        }), k.createElement(S, U));
      });
      return d.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", d.defaultProps = t.defaultProps, d.__emotion_real = d, d.__emotion_base = a, d.__emotion_styles = h, d.__emotion_forwardProp = o, Object.defineProperty(d, "toString", {
        value: function() {
          return "." + s;
        }
      }), d.withComponent = function(p, g) {
        var b = e(p, ue({}, r, g, {
          shouldForwardProp: Fe(d, g, true)
        }));
        return b.apply(void 0, h);
      }, d;
    };
  };
  nr = [
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
  me = rr.bind(null);
  nr.forEach(function(e) {
    me[e] = me(e);
  });
  ar = function(e, t) {
    return me(e, t);
  };
  function ir(e, t) {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
  }
  const Le = [];
  V = function(e) {
    return Le[0] = e, we(Le);
  };
  let Ie, sr;
  Ie = (e) => e;
  sr = () => {
    let e = Ie;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ie;
      }
    };
  };
  or = sr();
  function tt(e) {
    var t, r, n = "";
    if (typeof e == "string" || typeof e == "number") n += e;
    else if (typeof e == "object") if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++) e[t] && (r = tt(e[t])) && (n && (n += " "), n += r);
    } else for (r in e) e[r] && (n && (n += " "), n += r);
    return n;
  }
  Pr = function() {
    for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = tt(e)) && (n && (n += " "), n += t);
    return n;
  };
  const cr = {
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
  fr = function(e, t, r = "Mui") {
    const n = cr[t];
    return n ? `${r}-${n}` : `${or.generate(e)}-${t}`;
  };
  _r = function(e, t, r = "Mui") {
    const n = {};
    return t.forEach((a) => {
      n[a] = fr(e, a, r);
    }), n;
  };
  lr = function(e) {
    const { variants: t, ...r } = e, n = {
      variants: t,
      style: V(r),
      isProcessed: true
    };
    return n.style === r || t && t.forEach((a) => {
      typeof a.style != "function" && (a.style = V(a.style));
    }), n;
  };
  ur = at();
  le = function(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  };
  function W(e, t) {
    return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
  }
  function dr(e) {
    return e ? (t, r) => r[e] : null;
  }
  function hr(e, t, r) {
    e.theme = mr(e.theme) ? r : e.theme[t] || e.theme;
  }
  function ne(e, t, r) {
    const n = typeof t == "function" ? t(e) : t;
    if (Array.isArray(n)) return n.flatMap((a) => ne(e, a, r));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
      let a;
      if (n.isProcessed) a = r ? W(n.style, r) : n.style;
      else {
        const { variants: i, ...s } = n;
        a = r ? W(V(s), r) : s;
      }
      return rt(e, n.variants, [
        a
      ], r);
    }
    return (n == null ? void 0 : n.isProcessed) ? r ? W(V(n.style), r) : n.style : r ? W(V(n), r) : n;
  }
  function rt(e, t, r = [], n = void 0) {
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
      }), r.push(n ? W(V(s.style(a)), n) : s.style(a))) : r.push(n ? W(V(s.style), n) : s.style);
    }
    return r;
  }
  Ar = function(e = {}) {
    const { themeId: t, defaultTheme: r = ur, rootShouldForwardProp: n = le, slotShouldForwardProp: a = le } = e;
    function i(o) {
      hr(o, t, r);
    }
    return (o, c = {}) => {
      ir(o, (v) => v.filter((l) => l !== Pe));
      const { name: f, slot: u, skipVariantsResolver: h, skipSx: _, overridesResolver: O = dr(gr(u)), ...x } = c, d = f && f.startsWith("Mui") || u ? "components" : "custom", p = h !== void 0 ? h : u && u !== "Root" && u !== "root" || false, g = _ || false;
      let b = le;
      u === "Root" || u === "root" ? b = n : u ? b = a : yr(o) && (b = void 0);
      const S = ar(o, {
        shouldForwardProp: b,
        label: pr(),
        ...x
      }), R = (v) => {
        if (v.__emotion_real === v) return v;
        if (typeof v == "function") return function(L) {
          return ne(L, v, L.theme.modularCssLayers ? d : void 0);
        };
        if (it(v)) {
          const l = lr(v);
          return function($) {
            return l.variants ? ne($, l, $.theme.modularCssLayers ? d : void 0) : $.theme.modularCssLayers ? W(l.style, d) : l.style;
          };
        }
        return v;
      }, E = (...v) => {
        const l = [], L = v.map(R), $ = [];
        if (l.push(i), f && O && $.push(function(F) {
          var _a, _b;
          const I = (_b = (_a = F.theme.components) == null ? void 0 : _a[f]) == null ? void 0 : _b.styleOverrides;
          if (!I) return null;
          const Se = {};
          for (const ke in I) Se[ke] = ne(F, I[ke], F.theme.modularCssLayers ? "theme" : void 0);
          return O(F, Se);
        }), f && !p && $.push(function(F) {
          var _a, _b, _c;
          const I = (_c = (_b = (_a = F.theme) == null ? void 0 : _a.components) == null ? void 0 : _b[f]) == null ? void 0 : _c.variants;
          return I ? rt(F, I, [], F.theme.modularCssLayers ? "theme" : void 0) : null;
        }), g || $.push(Pe), Array.isArray(L[0])) {
          const Z = L.shift(), F = new Array(l.length).fill(""), J = new Array($.length).fill("");
          let I;
          I = [
            ...F,
            ...Z,
            ...J
          ], I.raw = [
            ...F,
            ...Z.raw,
            ...J
          ], l.unshift(I);
        }
        const U = [
          ...l,
          ...L,
          ...$
        ], D = S(...U);
        return o.muiName && (D.muiName = o.muiName), D;
      };
      return S.withConfig && (E.withConfig = S.withConfig), E;
    };
  };
  function pr(e, t) {
    return void 0;
  }
  function mr(e) {
    for (const t in e) return false;
    return true;
  }
  function yr(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function gr(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
  ye = function(e, t) {
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
            r[a][c] = ye(i[c], s[c]);
          }
        }
      } else r[a] === void 0 && (r[a] = e[a]);
    }
    return r;
  };
  Or = function(e, t, r = void 0) {
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
  const nt = k.createContext(void 0);
  Er = function({ value: e, children: t }) {
    return dt.jsx(nt.Provider, {
      value: e,
      children: t
    });
  };
  function vr(e) {
    const { theme: t, name: r, props: n } = e;
    if (!t || !t.components || !t.components[r]) return n;
    const a = t.components[r];
    return a.defaultProps ? ye(a.defaultProps, n) : !a.styleOverrides && !a.variants ? ye(a, n) : n;
  }
  Tr = function({ props: e, name: t }) {
    const r = k.useContext(nt);
    return vr({
      props: e,
      name: t,
      theme: {
        components: r
      }
    });
  };
});
export {
  or as C,
  Er as D,
  Cr as E,
  mt as S,
  Qe as T,
  ue as _,
  __tla,
  _r as a,
  Pr as b,
  Or as c,
  Ar as d,
  wr as e,
  kr as f,
  fr as g,
  et as h,
  Be as i,
  dt as j,
  Sr as k,
  Vt as l,
  V as m,
  ar as n,
  le as o,
  lr as p,
  ur as q,
  ye as r,
  we as s,
  Tr as u,
  Je as w
};
