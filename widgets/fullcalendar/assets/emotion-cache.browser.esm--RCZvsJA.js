function e(e2) {
  if (e2.sheet)
    return e2.sheet;
  for (var t2 = 0; t2 < document.styleSheets.length; t2++)
    if (document.styleSheets[t2].ownerNode === e2)
      return document.styleSheets[t2];
}
function t(e2) {
  var t2 = document.createElement(`style`);
  return t2.setAttribute(`data-emotion`, e2.key), e2.nonce !== void 0 && t2.setAttribute(`nonce`, e2.nonce), t2.appendChild(document.createTextNode(``)), t2.setAttribute(`data-s`, ``), t2;
}
var n = function() {
  function n2(e2) {
    var t2 = this;
    this._insertTag = function(e3) {
      var n3 = t2.tags.length === 0 ? t2.insertionPoint ? t2.insertionPoint.nextSibling : t2.prepend ? t2.container.firstChild : t2.before : t2.tags[t2.tags.length - 1].nextSibling;
      t2.container.insertBefore(e3, n3), t2.tags.push(e3);
    }, this.isSpeedy = e2.speedy === void 0 || e2.speedy, this.tags = [], this.ctr = 0, this.nonce = e2.nonce, this.key = e2.key, this.container = e2.container, this.prepend = e2.prepend, this.insertionPoint = e2.insertionPoint, this.before = null;
  }
  var r2 = n2.prototype;
  return r2.hydrate = function(e2) {
    e2.forEach(this._insertTag);
  }, r2.insert = function(n3) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(t(this));
    var r3 = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i2 = e(r3);
      try {
        i2.insertRule(n3, i2.cssRules.length);
      } catch {
      }
    } else
      r3.appendChild(document.createTextNode(n3));
    this.ctr++;
  }, r2.flush = function() {
    this.tags.forEach(function(e2) {
      return e2.parentNode?.removeChild(e2);
    }), this.tags = [], this.ctr = 0;
  }, n2;
}(), r = `-ms-`, i = `-moz-`, a = `-webkit-`, o = `comm`, s = `rule`, c = `decl`, l = `@import`, u = `@keyframes`, d = `@layer`, f = Math.abs, p = String.fromCharCode, m = Object.assign;
function h(e2, t2) {
  return b(e2, 0) ^ 45 ? (((t2 << 2 ^ b(e2, 0)) << 2 ^ b(e2, 1)) << 2 ^ b(e2, 2)) << 2 ^ b(e2, 3) : 0;
}
function g(e2) {
  return e2.trim();
}
function _(e2, t2) {
  return (e2 = t2.exec(e2)) ? e2[0] : e2;
}
function v(e2, t2, n2) {
  return e2.replace(t2, n2);
}
function y(e2, t2) {
  return e2.indexOf(t2);
}
function b(e2, t2) {
  return e2.charCodeAt(t2) | 0;
}
function x(e2, t2, n2) {
  return e2.slice(t2, n2);
}
function S(e2) {
  return e2.length;
}
function C(e2) {
  return e2.length;
}
function w(e2, t2) {
  return t2.push(e2), e2;
}
function T(e2, t2) {
  return e2.map(t2).join(``);
}
var E = 1, D = 1, O = 0, k = 0, A = 0, j = ``;
function M(e2, t2, n2, r2, i2, a2, o2) {
  return {value: e2, root: t2, parent: n2, type: r2, props: i2, children: a2, line: E, column: D, length: o2, return: ``};
}
function N(e2, t2) {
  return m(M(``, null, null, ``, null, null, 0), e2, {length: -e2.length}, t2);
}
function ee() {
  return A;
}
function P() {
  return A = k > 0 ? b(j, --k) : 0, D--, A === 10 && (D = 1, E--), A;
}
function F() {
  return A = k < O ? b(j, k++) : 0, D++, A === 10 && (D = 1, E++), A;
}
function I() {
  return b(j, k);
}
function L() {
  return k;
}
function R(e2, t2) {
  return x(j, e2, t2);
}
function z(e2) {
  switch (e2) {
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
function B(e2) {
  return E = D = 1, O = S(j = e2), k = 0, [];
}
function V(e2) {
  return j = ``, e2;
}
function H(e2) {
  return g(R(k - 1, W(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
function U(e2) {
  for (; (A = I()) && A < 33; )
    F();
  return z(e2) > 2 || z(A) > 3 ? `` : ` `;
}
function te(e2, t2) {
  for (; --t2 && F() && !(A < 48 || A > 102 || A > 57 && A < 65 || A > 70 && A < 97); )
    ;
  return R(e2, L() + (t2 < 6 && I() == 32 && F() == 32));
}
function W(e2) {
  for (; F(); )
    switch (A) {
      case e2:
        return k;
      case 34:
      case 39:
        e2 !== 34 && e2 !== 39 && W(A);
        break;
      case 40:
        e2 === 41 && W(e2);
        break;
      case 92:
        F();
    }
  return k;
}
function G(e2, t2) {
  for (; F() && e2 + A !== 57 && (e2 + A !== 84 || I() !== 47); )
    ;
  return `/*` + R(t2, k - 1) + `*` + p(e2 === 47 ? e2 : F());
}
function ne(e2) {
  for (; !z(I()); )
    F();
  return R(e2, k);
}
function re(e2) {
  return V(K(``, null, null, null, [``], e2 = B(e2), 0, [0], e2));
}
function K(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  for (var l2 = 0, u2 = 0, d2 = o2, f2 = 0, m2 = 0, h2 = 0, g2 = 1, _2 = 1, x2 = 1, C2 = 0, T2 = ``, E2 = i2, D2 = a2, O2 = r2, k2 = T2; _2; )
    switch (h2 = C2, C2 = F()) {
      case 40:
        if (h2 != 108 && b(k2, d2 - 1) == 58) {
          y(k2 += v(H(C2), `&`, `&\f`), `&\f`) != -1 && (x2 = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k2 += H(C2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k2 += U(h2);
        break;
      case 92:
        k2 += te(L() - 1, 7);
        continue;
      case 47:
        switch (I()) {
          case 42:
          case 47:
            w(J(G(F(), L()), t2, n2), c2);
            break;
          default:
            k2 += `/`;
        }
        break;
      case 123 * g2:
        s2[l2++] = S(k2) * x2;
      case 125 * g2:
      case 59:
      case 0:
        switch (C2) {
          case 0:
          case 125:
            _2 = 0;
          case 59 + u2:
            x2 == -1 && (k2 = v(k2, /\f/g, ``)), m2 > 0 && S(k2) - d2 && w(m2 > 32 ? Y(k2 + `;`, r2, n2, d2 - 1) : Y(v(k2, ` `, ``) + `;`, r2, n2, d2 - 2), c2);
            break;
          case 59:
            k2 += `;`;
          default:
            if (w(O2 = q(k2, t2, n2, l2, u2, i2, s2, T2, E2 = [], D2 = [], d2), a2), C2 === 123) {
              if (u2 === 0)
                K(k2, t2, O2, O2, E2, a2, d2, s2, D2);
              else
                switch (f2 === 99 && b(k2, 3) === 110 ? 100 : f2) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    K(e2, O2, O2, r2 && w(q(e2, O2, O2, 0, 0, i2, s2, T2, i2, E2 = [], d2), D2), i2, D2, d2, s2, r2 ? E2 : D2);
                    break;
                  default:
                    K(k2, O2, O2, O2, [``], D2, 0, s2, D2);
                }
            }
        }
        l2 = u2 = m2 = 0, g2 = x2 = 1, T2 = k2 = ``, d2 = o2;
        break;
      case 58:
        d2 = 1 + S(k2), m2 = h2;
      default:
        if (g2 < 1) {
          if (C2 == 123)
            --g2;
          else if (C2 == 125 && g2++ == 0 && P() == 125)
            continue;
        }
        switch (k2 += p(C2), C2 * g2) {
          case 38:
            x2 = u2 > 0 ? 1 : (k2 += `\f`, -1);
            break;
          case 44:
            s2[l2++] = (S(k2) - 1) * x2, x2 = 1;
            break;
          case 64:
            I() === 45 && (k2 += H(F())), f2 = I(), u2 = d2 = S(T2 = k2 += ne(L())), C2++;
            break;
          case 45:
            h2 === 45 && S(k2) == 2 && (g2 = 0);
        }
    }
  return a2;
}
function q(e2, t2, n2, r2, i2, a2, o2, c2, l2, u2, d2) {
  for (var p2 = i2 - 1, m2 = i2 === 0 ? a2 : [``], h2 = C(m2), _2 = 0, y2 = 0, b2 = 0; _2 < r2; ++_2)
    for (var S2 = 0, w2 = x(e2, p2 + 1, p2 = f(y2 = o2[_2])), T2 = e2; S2 < h2; ++S2)
      (T2 = g(y2 > 0 ? m2[S2] + ` ` + w2 : v(w2, /&\f/g, m2[S2]))) && (l2[b2++] = T2);
  return M(e2, t2, n2, i2 === 0 ? s : c2, l2, u2, d2);
}
function J(e2, t2, n2) {
  return M(e2, t2, n2, o, p(ee()), x(e2, 2, -2), 0);
}
function Y(e2, t2, n2, r2) {
  return M(e2, t2, n2, c, x(e2, 0, r2), x(e2, r2 + 1, -1), r2);
}
function X(e2, t2) {
  for (var n2 = ``, r2 = C(e2), i2 = 0; i2 < r2; i2++)
    n2 += t2(e2[i2], i2, e2, t2) || ``;
  return n2;
}
function ie(e2, t2, n2, r2) {
  switch (e2.type) {
    case d:
      if (e2.children.length)
        break;
    case l:
    case c:
      return e2.return = e2.return || e2.value;
    case o:
      return ``;
    case u:
      return e2.return = e2.value + `{` + X(e2.children, r2) + `}`;
    case s:
      e2.value = e2.props.join(`,`);
  }
  return S(n2 = X(e2.children, r2)) ? e2.return = e2.value + `{` + n2 + `}` : ``;
}
function ae(e2) {
  var t2 = C(e2);
  return function(n2, r2, i2, a2) {
    for (var o2 = ``, s2 = 0; s2 < t2; s2++)
      o2 += e2[s2](n2, r2, i2, a2) || ``;
    return o2;
  };
}
function oe(e2) {
  return function(t2) {
    t2.root || (t2 = t2.return) && e2(t2);
  };
}
var se = function(e2, t2, n2) {
  for (var r2 = 0, i2 = 0; r2 = i2, i2 = I(), r2 === 38 && i2 === 12 && (t2[n2] = 1), !z(i2); )
    F();
  return R(e2, k);
}, ce = function(e2, t2) {
  var n2 = -1, r2 = 44;
  do
    switch (z(r2)) {
      case 0:
        r2 === 38 && I() === 12 && (t2[n2] = 1), e2[n2] += se(k - 1, t2, n2);
        break;
      case 2:
        e2[n2] += H(r2);
        break;
      case 4:
        if (r2 === 44) {
          e2[++n2] = I() === 58 ? `&\f` : ``, t2[n2] = e2[n2].length;
          break;
        }
      default:
        e2[n2] += p(r2);
    }
  while (r2 = F());
  return e2;
}, le = function(e2, t2) {
  return V(ce(B(e2), t2));
}, Z = new WeakMap(), Q = function(e2) {
  if (!(e2.type !== `rule` || !e2.parent || e2.length < 1)) {
    for (var t2 = e2.value, n2 = e2.parent, r2 = e2.column === n2.column && e2.line === n2.line; n2.type !== `rule`; )
      if (n2 = n2.parent, !n2)
        return;
    if ((e2.props.length !== 1 || t2.charCodeAt(0) === 58 || Z.get(n2)) && !r2) {
      Z.set(e2, true);
      for (var i2 = [], a2 = le(t2, i2), o2 = n2.props, s2 = 0, c2 = 0; s2 < a2.length; s2++)
        for (var l2 = 0; l2 < o2.length; l2++, c2++)
          e2.props[c2] = i2[s2] ? a2[s2].replace(/&\f/g, o2[l2]) : o2[l2] + ` ` + a2[s2];
    }
  }
}, ue = function(e2) {
  if (e2.type === `decl`) {
    var t2 = e2.value;
    t2.charCodeAt(0) === 108 && t2.charCodeAt(2) === 98 && (e2.return = ``, e2.value = ``);
  }
};
function $(e2, t2) {
  switch (h(e2, t2)) {
    case 5103:
      return a + `print-` + e2 + e2;
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
      return a + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + e2 + i + e2 + r + e2 + e2;
    case 6828:
    case 4268:
      return a + e2 + r + e2 + e2;
    case 6165:
      return a + e2 + r + `flex-` + e2 + e2;
    case 5187:
      return a + e2 + v(e2, /(\w+).+(:[^]+)/, a + `box-$1$2` + r + `flex-$1$2`) + e2;
    case 5443:
      return a + e2 + r + `flex-item-` + v(e2, /flex-|-self/, ``) + e2;
    case 4675:
      return a + e2 + r + `flex-line-pack` + v(e2, /align-content|flex-|-self/, ``) + e2;
    case 5548:
      return a + e2 + r + v(e2, `shrink`, `negative`) + e2;
    case 5292:
      return a + e2 + r + v(e2, `basis`, `preferred-size`) + e2;
    case 6060:
      return a + `box-` + v(e2, `-grow`, ``) + a + e2 + r + v(e2, `grow`, `positive`) + e2;
    case 4554:
      return a + v(e2, /([^-])(transform)/g, `$1` + a + `$2`) + e2;
    case 6187:
      return v(v(v(e2, /(zoom-|grab)/, a + `$1`), /(image-set)/, a + `$1`), e2, ``) + e2;
    case 5495:
    case 3959:
      return v(e2, /(image-set\([^]*)/, a + "$1$`$1");
    case 4968:
      return v(v(e2, /(.+:)(flex-)?(.*)/, a + `box-pack:$3` + r + `flex-pack:$3`), /s.+-b[^;]+/, `justify`) + a + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return v(e2, /(.+)-inline(.+)/, a + `$1$2`) + e2;
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
      if (S(e2) - 1 - t2 > 6)
        switch (b(e2, t2 + 1)) {
          case 109:
            if (b(e2, t2 + 4) !== 45)
              break;
          case 102:
            return v(e2, /(.+:)(.+)-([^]+)/, `$1` + a + `$2-$3$1` + i + (b(e2, t2 + 3) == 108 ? `$3` : `$2-$3`)) + e2;
          case 115:
            return ~y(e2, `stretch`) ? $(v(e2, `stretch`, `fill-available`), t2) + e2 : e2;
        }
      break;
    case 4949:
      if (b(e2, t2 + 1) !== 115)
        break;
    case 6444:
      switch (b(e2, S(e2) - 3 - (~y(e2, `!important`) && 10))) {
        case 107:
          return v(e2, `:`, `:` + a) + e2;
        case 101:
          return v(e2, /(.+:)([^;!]+)(;|!.+)?/, `$1` + a + (b(e2, 14) === 45 ? `inline-` : ``) + `box$3$1` + a + `$2$3$1` + r + `$2box$3`) + e2;
      }
      break;
    case 5936:
      switch (b(e2, t2 + 11)) {
        case 114:
          return a + e2 + r + v(e2, /[svh]\w+-[tblr]{2}/, `tb`) + e2;
        case 108:
          return a + e2 + r + v(e2, /[svh]\w+-[tblr]{2}/, `tb-rl`) + e2;
        case 45:
          return a + e2 + r + v(e2, /[svh]\w+-[tblr]{2}/, `lr`) + e2;
      }
      return a + e2 + r + e2 + e2;
  }
  return e2;
}
var de = [function(e2, t2, n2, o2) {
  if (e2.length > -1 && !e2.return)
    switch (e2.type) {
      case c:
        e2.return = $(e2.value, e2.length);
        break;
      case u:
        return X([N(e2, {value: v(e2.value, `@`, `@` + a)})], o2);
      case s:
        if (e2.length)
          return T(e2.props, function(t3) {
            switch (_(t3, /(::plac\w+|:read-\w+)/)) {
              case `:read-only`:
              case `:read-write`:
                return X([N(e2, {props: [v(t3, /:(read-\w+)/, `:` + i + `$1`)]})], o2);
              case `::placeholder`:
                return X([N(e2, {props: [v(t3, /:(plac\w+)/, `:` + a + `input-$1`)]}), N(e2, {props: [v(t3, /:(plac\w+)/, `:` + i + `$1`)]}), N(e2, {props: [v(t3, /:(plac\w+)/, r + `input-$1`)]})], o2);
            }
            return ``;
          });
    }
}], fe = function(e2) {
  var t2 = e2.key;
  if (t2 === `css`) {
    var r2 = document.querySelectorAll(`style[data-emotion]:not([data-s])`);
    Array.prototype.forEach.call(r2, function(e3) {
      e3.getAttribute(`data-emotion`).indexOf(` `) !== -1 && (document.head.appendChild(e3), e3.setAttribute(`data-s`, ``));
    });
  }
  var i2 = e2.stylisPlugins || de, a2 = {}, o2, s2 = [];
  o2 = e2.container || document.head, Array.prototype.forEach.call(document.querySelectorAll(`style[data-emotion^="` + t2 + ` "]`), function(e3) {
    for (var t3 = e3.getAttribute(`data-emotion`).split(` `), n2 = 1; n2 < t3.length; n2++)
      a2[t3[n2]] = true;
    s2.push(e3);
  });
  var c2, l2 = [Q, ue], u2, d2 = [ie, oe(function(e3) {
    u2.insert(e3);
  })], f2 = ae(l2.concat(i2, d2)), p2 = function(e3) {
    return X(re(e3), f2);
  };
  c2 = function(e3, t3, n2, r3) {
    u2 = n2, p2(e3 ? e3 + `{` + t3.styles + `}` : t3.styles), r3 && (m2.inserted[t3.name] = true);
  };
  var m2 = {key: t2, sheet: new n({key: t2, container: o2, nonce: e2.nonce, speedy: e2.speedy, prepend: e2.prepend, insertionPoint: e2.insertionPoint}), nonce: e2.nonce, inserted: a2, registered: {}, insert: c2};
  return m2.sheet.hydrate(s2), m2;
};
export {
  n,
  fe as t
};
