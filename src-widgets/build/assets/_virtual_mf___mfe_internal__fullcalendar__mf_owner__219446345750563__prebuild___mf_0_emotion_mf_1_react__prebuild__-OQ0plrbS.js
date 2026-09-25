import {i as e, n as t, t as n} from "./rolldown-runtime-Dd_uD5pT.js";
import {d as r, f as i, i as a, o, r as s, y as c} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js";
import {t as l} from "./emotion-cache.browser.esm--RCZvsJA.js";
import {a as u, i as d, n as f, o as p, r as m, s as h, t as g} from "./emotion-use-insertion-effect-with-fallbacks.browser.esm-DYgqXpxG.js";
var _ = function(e3) {
  var t2 = new WeakMap();
  return function(n2) {
    if (t2.has(n2))
      return t2.get(n2);
    var r2 = e3(n2);
    return t2.set(n2, r2), r2;
  };
}, v = n((e3) => {
  var t2 = typeof Symbol == `function` && Symbol.for, n2 = t2 ? Symbol.for(`react.element`) : 60103, r2 = t2 ? Symbol.for(`react.portal`) : 60106, i2 = t2 ? Symbol.for(`react.fragment`) : 60107, a2 = t2 ? Symbol.for(`react.strict_mode`) : 60108, o2 = t2 ? Symbol.for(`react.profiler`) : 60114, s2 = t2 ? Symbol.for(`react.provider`) : 60109, c2 = t2 ? Symbol.for(`react.context`) : 60110, l2 = t2 ? Symbol.for(`react.async_mode`) : 60111, u2 = t2 ? Symbol.for(`react.concurrent_mode`) : 60111, d2 = t2 ? Symbol.for(`react.forward_ref`) : 60112, f2 = t2 ? Symbol.for(`react.suspense`) : 60113, p2 = t2 ? Symbol.for(`react.suspense_list`) : 60120, m2 = t2 ? Symbol.for(`react.memo`) : 60115, h2 = t2 ? Symbol.for(`react.lazy`) : 60116, g2 = t2 ? Symbol.for(`react.block`) : 60121, _2 = t2 ? Symbol.for(`react.fundamental`) : 60117, v2 = t2 ? Symbol.for(`react.responder`) : 60118, y2 = t2 ? Symbol.for(`react.scope`) : 60119;
  function b2(e4) {
    if (typeof e4 == `object` && e4) {
      var t3 = e4.$$typeof;
      switch (t3) {
        case n2:
          switch (e4 = e4.type, e4) {
            case l2:
            case u2:
            case i2:
            case o2:
            case a2:
            case f2:
              return e4;
            default:
              switch (e4 && (e4 = e4.$$typeof), e4) {
                case c2:
                case d2:
                case h2:
                case m2:
                case s2:
                  return e4;
                default:
                  return t3;
              }
          }
        case r2:
          return t3;
      }
    }
  }
  function x2(e4) {
    return b2(e4) === u2;
  }
  e3.AsyncMode = l2, e3.ConcurrentMode = u2, e3.ContextConsumer = c2, e3.ContextProvider = s2, e3.Element = n2, e3.ForwardRef = d2, e3.Fragment = i2, e3.Lazy = h2, e3.Memo = m2, e3.Portal = r2, e3.Profiler = o2, e3.StrictMode = a2, e3.Suspense = f2, e3.isAsyncMode = function(e4) {
    return x2(e4) || b2(e4) === l2;
  }, e3.isConcurrentMode = x2, e3.isContextConsumer = function(e4) {
    return b2(e4) === c2;
  }, e3.isContextProvider = function(e4) {
    return b2(e4) === s2;
  }, e3.isElement = function(e4) {
    return typeof e4 == `object` && !!e4 && e4.$$typeof === n2;
  }, e3.isForwardRef = function(e4) {
    return b2(e4) === d2;
  }, e3.isFragment = function(e4) {
    return b2(e4) === i2;
  }, e3.isLazy = function(e4) {
    return b2(e4) === h2;
  }, e3.isMemo = function(e4) {
    return b2(e4) === m2;
  }, e3.isPortal = function(e4) {
    return b2(e4) === r2;
  }, e3.isProfiler = function(e4) {
    return b2(e4) === o2;
  }, e3.isStrictMode = function(e4) {
    return b2(e4) === a2;
  }, e3.isSuspense = function(e4) {
    return b2(e4) === f2;
  }, e3.isValidElementType = function(e4) {
    return typeof e4 == `string` || typeof e4 == `function` || e4 === i2 || e4 === u2 || e4 === o2 || e4 === a2 || e4 === f2 || e4 === p2 || typeof e4 == `object` && !!e4 && (e4.$$typeof === h2 || e4.$$typeof === m2 || e4.$$typeof === s2 || e4.$$typeof === c2 || e4.$$typeof === d2 || e4.$$typeof === _2 || e4.$$typeof === v2 || e4.$$typeof === y2 || e4.$$typeof === g2);
  }, e3.typeOf = b2;
}), y = n((e3, t2) => {
  t2.exports = v();
}), b = e(n((e3, t2) => {
  var n2 = y(), r2 = {childContextTypes: true, contextType: true, contextTypes: true, defaultProps: true, displayName: true, getDefaultProps: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, mixins: true, propTypes: true, type: true}, i2 = {name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true}, a2 = {$$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true}, o2 = {$$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true}, s2 = {};
  s2[n2.ForwardRef] = a2, s2[n2.Memo] = o2;
  function c2(e4) {
    return n2.isMemo(e4) ? o2 : s2[e4.$$typeof] || r2;
  }
  var l2 = Object.defineProperty, u2 = Object.getOwnPropertyNames, d2 = Object.getOwnPropertySymbols, f2 = Object.getOwnPropertyDescriptor, p2 = Object.getPrototypeOf, m2 = Object.prototype;
  function h2(e4, t3, n3) {
    if (typeof t3 != `string`) {
      if (m2) {
        var r3 = p2(t3);
        r3 && r3 !== m2 && h2(e4, r3, n3);
      }
      var a3 = u2(t3);
      d2 && (a3 = a3.concat(d2(t3)));
      for (var o3 = c2(e4), s3 = c2(t3), g2 = 0; g2 < a3.length; ++g2) {
        var _2 = a3[g2];
        if (!i2[_2] && !(n3 && n3[_2]) && !(s3 && s3[_2]) && !(o3 && o3[_2])) {
          var v2 = f2(t3, _2);
          try {
            l2(e4, _2, v2);
          } catch {
          }
        }
      }
    }
    return e4;
  }
  t2.exports = h2;
})()), x = function(e3, t2) {
  return (0, b.default)(e3, t2);
}, S = s(typeof HTMLElement < `u` ? l({key: `css`}) : null), C = S.Provider, w = function() {
  return r(S);
}, T = function(e3) {
  return o(function(t2, n2) {
    return e3(t2, r(S), n2);
  });
}, E = s({}), D = function() {
  return r(E);
}, O = function(e3, t2) {
  return typeof t2 == `function` ? t2(e3) : h({}, e3, t2);
}, k = _(function(e3) {
  return _(function(t2) {
    return O(e3, t2);
  });
}), A = function(e3) {
  var t2 = r(E);
  return e3.theme !== t2 && (t2 = k(t2)(e3.theme)), a(E.Provider, {value: t2}, e3.children);
};
function j(e3) {
  var t2 = e3.displayName || e3.name || `Component`, n2 = o(function(t3, n3) {
    var i2 = r(E);
    return a(e3, h({theme: i2, ref: n3}, t3));
  });
  return n2.displayName = `WithTheme(` + t2 + `)`, x(n2, e3);
}
var M = {}.hasOwnProperty, N = `__EMOTION_TYPE_PLEASE_DO_NOT_USE__`, P = function(e3, t2) {
  var n2 = {};
  for (var r2 in t2)
    M.call(t2, r2) && (n2[r2] = t2[r2]);
  return n2[N] = e3, n2;
}, F = function(e3) {
  var t2 = e3.cache, n2 = e3.serialized, r2 = e3.isStringTag;
  return p(t2, n2, r2), g(function() {
    return u(t2, n2, r2);
  }), null;
}, I = T(function(e3, t2, n2) {
  var o2 = e3.css;
  typeof o2 == `string` && t2.registered[o2] !== void 0 && (o2 = t2.registered[o2]);
  var s2 = e3[N], c2 = [o2], l2 = ``;
  typeof e3.className == `string` ? l2 = d(t2.registered, c2, e3.className) : e3.className != null && (l2 = e3.className + ` `);
  var u2 = m(c2, void 0, r(E));
  l2 += t2.key + `-` + u2.name;
  var f2 = {};
  for (var p2 in e3)
    M.call(e3, p2) && p2 !== `css` && p2 !== N && (f2[p2] = e3[p2]);
  return f2.className = l2, n2 && (f2.ref = n2), a(i, null, a(F, {cache: t2, serialized: u2, isStringTag: typeof s2 == `string`}), a(s2, f2));
}), L = t({CacheProvider: () => C, ClassNames: () => G, Global: () => z, ThemeContext: () => E, ThemeProvider: () => A, __unsafe_useEmotionCache: () => w, createElement: () => R, css: () => B, jsx: () => R, keyframes: () => V, useTheme: () => D, withEmotionCache: () => T, withTheme: () => j}), R = function(e3, t2) {
  var n2 = arguments;
  if (t2 == null || !M.call(t2, `css`))
    return a.apply(void 0, n2);
  var r2 = n2.length, i2 = Array(r2);
  i2[0] = I, i2[1] = P(e3, t2);
  for (var o2 = 2; o2 < r2; o2++)
    i2[o2] = n2[o2];
  return a.apply(null, i2);
};
(function(e3) {
  var t2;
  t2 || (t2 = e3.JSX || (e3.JSX = {}));
})(R || (R = {}));
var z = T(function(e3, t2) {
  var n2 = e3.styles, i2 = m([n2], void 0, r(E)), a2 = c();
  return f(function() {
    var e4 = t2.key + `-global`, n3 = new t2.sheet.constructor({key: e4, nonce: t2.sheet.nonce, container: t2.sheet.container, speedy: t2.sheet.isSpeedy}), r2 = false, o2 = document.querySelector(`style[data-emotion="` + e4 + ` ` + i2.name + `"]`);
    return t2.sheet.tags.length && (n3.before = t2.sheet.tags[0]), o2 !== null && (r2 = true, o2.setAttribute(`data-emotion`, e4), n3.hydrate([o2])), a2.current = [n3, r2], function() {
      n3.flush();
    };
  }, [t2]), f(function() {
    var e4 = a2.current, n3 = e4[0];
    if (e4[1]) {
      e4[1] = false;
      return;
    }
    i2.next !== void 0 && u(t2, i2.next, true), n3.tags.length && (n3.before = n3.tags[n3.tags.length - 1].nextElementSibling, n3.flush()), t2.insert(``, i2, n3, false);
  }, [t2, i2.name]), null;
});
function B() {
  return m([...arguments]);
}
function V() {
  var e3 = B.apply(void 0, arguments), t2 = `animation-` + e3.name;
  return {name: t2, styles: `@keyframes ` + t2 + `{` + e3.styles + `}`, anim: 1, toString: function() {
    return `_EMO_` + this.name + `_` + this.styles + `_EMO_`;
  }};
}
var H = function e2(t2) {
  for (var n2 = t2.length, r2 = 0, i2 = ``; r2 < n2; r2++) {
    var a2 = t2[r2];
    if (a2 != null) {
      var o2 = void 0;
      switch (typeof a2) {
        case `boolean`:
          break;
        case `object`:
          if (Array.isArray(a2))
            o2 = e2(a2);
          else
            for (var s2 in o2 = ``, a2)
              a2[s2] && s2 && (o2 && (o2 += ` `), o2 += s2);
          break;
        default:
          o2 = a2;
      }
      o2 && (i2 && (i2 += ` `), i2 += o2);
    }
  }
  return i2;
};
function U(e3, t2, n2) {
  var r2 = [], i2 = d(e3, r2, n2);
  return r2.length < 2 ? n2 : i2 + t2(r2);
}
var W = function(e3) {
  var t2 = e3.cache, n2 = e3.serializedArr;
  return g(function() {
    for (var e4 = 0; e4 < n2.length; e4++)
      u(t2, n2[e4], false);
  }), null;
}, G = T(function(e3, t2) {
  var n2 = [], o2 = function() {
    var e4 = m([...arguments], t2.registered);
    return n2.push(e4), p(t2, e4, false), t2.key + `-` + e4.name;
  }, s2 = {css: o2, cx: function() {
    var e4 = [...arguments];
    return U(t2.registered, o2, H(e4));
  }, theme: r(E)}, c2 = e3.children(s2);
  return a(i, null, a(W, {cache: t2, serializedArr: n2}), c2);
}), K = L, q = K.CacheProvider, J = K.ThemeContext, Y = K.ThemeProvider, X = K.__unsafe_useEmotionCache, Z = K.useTheme, Q = K.withEmotionCache, $ = K.withTheme, ee = K.ClassNames, te = K.Global, ne = K.createElement, re = K.css, ie = K.jsx, ae = K.keyframes, oe = Reflect.get(L, `default`) ?? L;
export {
  q as CacheProvider,
  ee as ClassNames,
  te as Global,
  J as ThemeContext,
  Y as ThemeProvider,
  X as __unsafe_useEmotionCache,
  ne as createElement,
  re as css,
  oe as default,
  ie as jsx,
  ae as keyframes,
  Z as useTheme,
  Q as withEmotionCache,
  $ as withTheme
};
