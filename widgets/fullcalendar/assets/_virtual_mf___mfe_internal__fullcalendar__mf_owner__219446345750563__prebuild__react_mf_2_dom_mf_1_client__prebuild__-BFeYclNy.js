import {i as e, t} from "./rolldown-runtime-Dd_uD5pT.js";
import {n, t as r} from "./react-dom-BP5i0qKm.js";
var i = t((e2) => {
  function t2(e3, t3) {
    var n3 = e3.length;
    e3.push(t3);
    a:
      for (; 0 < n3; ) {
        var r3 = n3 - 1 >>> 1, a3 = e3[r3];
        if (0 < i2(a3, t3))
          e3[r3] = t3, e3[n3] = a3, n3 = r3;
        else
          break a;
      }
  }
  function n2(e3) {
    return e3.length === 0 ? null : e3[0];
  }
  function r2(e3) {
    if (e3.length === 0)
      return null;
    var t3 = e3[0], n3 = e3.pop();
    if (n3 !== t3) {
      e3[0] = n3;
      a:
        for (var r3 = 0, a3 = e3.length, o3 = a3 >>> 1; r3 < o3; ) {
          var s3 = 2 * (r3 + 1) - 1, c3 = e3[s3], l3 = s3 + 1, u3 = e3[l3];
          if (0 > i2(c3, n3))
            l3 < a3 && 0 > i2(u3, c3) ? (e3[r3] = u3, e3[l3] = n3, r3 = l3) : (e3[r3] = c3, e3[s3] = n3, r3 = s3);
          else if (l3 < a3 && 0 > i2(u3, n3))
            e3[r3] = u3, e3[l3] = n3, r3 = l3;
          else
            break a;
        }
    }
    return t3;
  }
  function i2(e3, t3) {
    var n3 = e3.sortIndex - t3.sortIndex;
    return n3 === 0 ? e3.id - t3.id : n3;
  }
  if (e2.unstable_now = void 0, typeof performance == `object` && typeof performance.now == `function`) {
    var a2 = performance;
    e2.unstable_now = function() {
      return a2.now();
    };
  } else {
    var o2 = Date, s2 = o2.now();
    e2.unstable_now = function() {
      return o2.now() - s2;
    };
  }
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p = false, m = false, h = false, g = false, _ = typeof setTimeout == `function` ? setTimeout : null, v = typeof clearTimeout == `function` ? clearTimeout : null, y = typeof setImmediate < `u` ? setImmediate : null;
  function b(e3) {
    for (var i3 = n2(l2); i3 !== null; ) {
      if (i3.callback === null)
        r2(l2);
      else if (i3.startTime <= e3)
        r2(l2), i3.sortIndex = i3.expirationTime, t2(c2, i3);
      else
        break;
      i3 = n2(l2);
    }
  }
  function ee(e3) {
    if (h = false, b(e3), !m) {
      if (n2(c2) !== null)
        m = true, te || (te = true, oe());
      else {
        var t3 = n2(l2);
        t3 !== null && le(ee, t3.startTime - e3);
      }
    }
  }
  var te = false, ne = -1, re = 5, ie = -1;
  function ae() {
    return g ? true : !(e2.unstable_now() - ie < re);
  }
  function x() {
    if (g = false, te) {
      var t3 = e2.unstable_now();
      ie = t3;
      var i3 = true;
      try {
        a: {
          m = false, h && (h = false, v(ne), ne = -1), p = true;
          var a3 = f2;
          try {
            b: {
              for (b(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && ae()); ) {
                var o3 = d2.callback;
                if (typeof o3 == `function`) {
                  d2.callback = null, f2 = d2.priorityLevel;
                  var s3 = o3(d2.expirationTime <= t3);
                  if (t3 = e2.unstable_now(), typeof s3 == `function`) {
                    d2.callback = s3, b(t3), i3 = true;
                    break b;
                  }
                  d2 === n2(c2) && r2(c2), b(t3);
                } else
                  r2(c2);
                d2 = n2(c2);
              }
              if (d2 !== null)
                i3 = true;
              else {
                var u3 = n2(l2);
                u3 !== null && le(ee, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? oe() : te = false;
      }
    }
  }
  var oe;
  if (typeof y == `function`)
    oe = function() {
      y(x);
    };
  else if (typeof MessageChannel < `u`) {
    var se = new MessageChannel(), ce = se.port2;
    se.port1.onmessage = x, oe = function() {
      ce.postMessage(null);
    };
  } else
    oe = function() {
      _(x, 0);
    };
  function le(t3, n3) {
    ne = _(function() {
      t3(e2.unstable_now());
    }, n3);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
    e3.callback = null;
  }, e2.unstable_forceFrameRate = function(e3) {
    0 > e3 || 125 < e3 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : re = 0 < e3 ? Math.floor(1e3 / e3) : 5;
  }, e2.unstable_getCurrentPriorityLevel = function() {
    return f2;
  }, e2.unstable_next = function(e3) {
    switch (f2) {
      case 1:
      case 2:
      case 3:
        var t3 = 3;
        break;
      default:
        t3 = f2;
    }
    var n3 = f2;
    f2 = t3;
    try {
      return e3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_requestPaint = function() {
    g = true;
  }, e2.unstable_runWithPriority = function(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e3 = 3;
    }
    var n3 = f2;
    f2 = e3;
    try {
      return t3();
    } finally {
      f2 = n3;
    }
  }, e2.unstable_scheduleCallback = function(r3, i3, a3) {
    var o3 = e2.unstable_now();
    switch (typeof a3 == `object` && a3 ? (a3 = a3.delay, a3 = typeof a3 == `number` && 0 < a3 ? o3 + a3 : o3) : a3 = o3, r3) {
      case 1:
        var s3 = -1;
        break;
      case 2:
        s3 = 250;
        break;
      case 5:
        s3 = 1073741823;
        break;
      case 4:
        s3 = 1e4;
        break;
      default:
        s3 = 5e3;
    }
    return s3 = a3 + s3, r3 = {id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1}, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h ? (v(ne), ne = -1) : h = true, le(ee, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m || p || (m = true, te || (te = true, oe()))), r3;
  }, e2.unstable_shouldYield = ae, e2.unstable_wrapCallback = function(e3) {
    var t3 = f2;
    return function() {
      var n3 = f2;
      f2 = t3;
      try {
        return e3.apply(this, arguments);
      } finally {
        f2 = n3;
      }
    };
  };
}), a = t((e2, t2) => {
  t2.exports = i();
}), o = t((e2) => {
  var t2 = a(), i2 = n(), o2 = r();
  function s2(e3) {
    var t3 = `https://react.dev/errors/` + e3;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n2 = 2; n2 < arguments.length; n2++)
        t3 += `&args[]=` + encodeURIComponent(arguments[n2]);
    }
    return `Minified React error #` + e3 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function c2(e3) {
    return !(!e3 || e3.nodeType !== 1 && e3.nodeType !== 9 && e3.nodeType !== 11);
  }
  function l2(e3) {
    for (var t3 = e3, n2 = t3; n2 && !n2.alternate; )
      t3 = n2, t3.flags & 4098 && (e3 = t3.return), n2 = t3.return;
    for (; t3.return; )
      t3 = t3.return;
    return t3.tag === 3 ? e3 : null;
  }
  function u2(e3) {
    if (e3.tag === 13) {
      var t3 = e3.memoizedState;
      if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null)
        return t3.dehydrated;
    }
    return null;
  }
  function d2(e3) {
    if (e3.tag === 31) {
      var t3 = e3.memoizedState;
      if (t3 === null && (e3 = e3.alternate, e3 !== null && (t3 = e3.memoizedState)), t3 !== null)
        return t3.dehydrated;
    }
    return null;
  }
  function f2(e3) {
    if (l2(e3) !== e3)
      throw Error(s2(188));
  }
  function p(e3) {
    var t3 = e3.alternate;
    if (!t3) {
      if (t3 = l2(e3), t3 === null)
        throw Error(s2(188));
      return t3 === e3 ? e3 : null;
    }
    for (var n2 = e3, r2 = t3; ; ) {
      var i3 = n2.return;
      if (i3 === null)
        break;
      var a2 = i3.alternate;
      if (a2 === null) {
        if (r2 = i3.return, r2 !== null) {
          n2 = r2;
          continue;
        }
        break;
      }
      if (i3.child === a2.child) {
        for (a2 = i3.child; a2; ) {
          if (a2 === n2)
            return f2(i3), e3;
          if (a2 === r2)
            return f2(i3), t3;
          a2 = a2.sibling;
        }
        throw Error(s2(188));
      }
      if (n2.return !== r2.return)
        n2 = i3, r2 = a2;
      else {
        for (var o3 = false, c3 = i3.child; c3; ) {
          if (c3 === n2) {
            o3 = true, n2 = i3, r2 = a2;
            break;
          }
          if (c3 === r2) {
            o3 = true, r2 = i3, n2 = a2;
            break;
          }
          c3 = c3.sibling;
        }
        if (!o3) {
          for (c3 = a2.child; c3; ) {
            if (c3 === n2) {
              o3 = true, n2 = a2, r2 = i3;
              break;
            }
            if (c3 === r2) {
              o3 = true, r2 = a2, n2 = i3;
              break;
            }
            c3 = c3.sibling;
          }
          if (!o3)
            throw Error(s2(189));
        }
      }
      if (n2.alternate !== r2)
        throw Error(s2(190));
    }
    if (n2.tag !== 3)
      throw Error(s2(188));
    return n2.stateNode.current === n2 ? e3 : t3;
  }
  function m(e3) {
    var t3 = e3.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6)
      return e3;
    for (e3 = e3.child; e3 !== null; ) {
      if (t3 = m(e3), t3 !== null)
        return t3;
      e3 = e3.sibling;
    }
    return null;
  }
  function h(e3, t3, n2, r2, i3, a2) {
    for (; e3 !== null; ) {
      if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && n2(e3, r2, i3, a2) || (e3.tag !== 22 || e3.memoizedState === null) && (t3 || e3.tag !== 5 && e3.tag !== 27) && h(e3.child, t3, n2, r2, i3, a2))
        return true;
      e3 = e3.sibling;
    }
    return false;
  }
  function g(e3) {
    for (e3 = e3.return; e3 !== null; ) {
      if (e3.tag === 3 || e3.tag === 5 || e3.tag === 27)
        return e3;
      e3 = e3.return;
    }
    return null;
  }
  function _(e3) {
    var t3 = false;
    for (e3 = e3.return; e3 !== null && (e3.tag === 4 && (t3 = true), e3.tag !== 3 && e3.tag !== 5 && e3.tag !== 27); )
      e3 = e3.return;
    return t3;
  }
  function v(e3) {
    var t3 = [null, null], n2 = g(e3);
    return n2 === null || y(t3, e3, n2.child, {foundSelf: false}), t3;
  }
  function y(e3, t3, n2, r2) {
    for (; n2 !== null; ) {
      if (n2 === t3)
        r2.foundSelf = true;
      else if (n2.tag === 5 || n2.tag === 27 || n2.tag === 6) {
        if (r2.foundSelf)
          return e3[1] = n2, true;
        e3[0] = n2;
      } else if ((n2.tag !== 22 || n2.memoizedState === null) && y(e3, t3, n2.child, r2))
        return true;
      n2 = n2.sibling;
    }
    return false;
  }
  function b(e3) {
    switch (e3.tag) {
      case 5:
      case 27:
      case 6:
        return e3.stateNode;
      case 3:
        return e3.stateNode.containerInfo;
      default:
        throw Error(s2(559));
    }
  }
  var ee = null, te = null;
  function ne(e3, t3, n2) {
    return e3 === n2 || e3 === t3 && (ee = e3, true);
  }
  function re(e3, t3, n2) {
    return e3 === n2 ? (te = e3, false) : e3 === t3 && (te !== null && (ee = e3), true);
  }
  function ie(e3) {
    if (e3 === null)
      return null;
    do
      e3 = e3 === null ? null : e3.return;
    while (e3 && e3.tag !== 5 && e3.tag !== 27 && e3.tag !== 3);
    return e3 || null;
  }
  function ae(e3, t3, n2) {
    for (var r2 = 0, i3 = e3; i3; i3 = n2(i3))
      r2++;
    i3 = 0;
    for (var a2 = t3; a2; a2 = n2(a2))
      i3++;
    for (; 0 < r2 - i3; )
      e3 = n2(e3), r2--;
    for (; 0 < i3 - r2; )
      t3 = n2(t3), i3--;
    for (; r2--; ) {
      if (e3 === t3 || t3 !== null && e3 === t3.alternate)
        return e3;
      e3 = n2(e3), t3 = n2(t3);
    }
    return null;
  }
  var x = Object.assign, oe = Symbol.for(`react.element`), se = Symbol.for(`react.transitional.element`), ce = Symbol.for(`react.portal`), le = Symbol.for(`react.fragment`), ue = Symbol.for(`react.strict_mode`), de = Symbol.for(`react.profiler`), fe = Symbol.for(`react.consumer`), pe = Symbol.for(`react.context`), me = Symbol.for(`react.forward_ref`), he = Symbol.for(`react.suspense`), ge = Symbol.for(`react.suspense_list`), _e = Symbol.for(`react.memo`), ve = Symbol.for(`react.lazy`), ye = Symbol.for(`react.activity`), be = Symbol.for(`react.legacy_hidden`), xe = Symbol.for(`react.memo_cache_sentinel`), Se = Symbol.for(`react.view_transition`), Ce = Symbol.for(`react.recoverable`), we = Symbol.iterator;
  function Te(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = we && e3[we] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var Ee = Symbol.for(`react.client.reference`);
  function De(e3) {
    if (e3 == null)
      return null;
    if (typeof e3 == `function`)
      return e3.$$typeof === Ee ? null : e3.displayName || e3.name || null;
    if (typeof e3 == `string`)
      return e3;
    switch (e3) {
      case le:
        return `Fragment`;
      case de:
        return `Profiler`;
      case ue:
        return `StrictMode`;
      case he:
        return `Suspense`;
      case ge:
        return `SuspenseList`;
      case ye:
        return `Activity`;
      case Se:
        return `ViewTransition`;
    }
    if (typeof e3 == `object`)
      switch (e3.$$typeof) {
        case ce:
          return `Portal`;
        case pe:
          return e3.displayName || `Context`;
        case fe:
          return (e3._context.displayName || `Context`) + `.Consumer`;
        case me:
          var t3 = e3.render;
          return e3 = e3.displayName, e3 || (e3 = (e3 = t3.displayName || t3.name || ``, e3 === `` ? `ForwardRef` : `ForwardRef(` + e3 + `)`)), e3;
        case _e:
          return t3 = e3.displayName || null, t3 === null ? De(e3.type) || `Memo` : t3;
        case ve:
          t3 = e3._payload, e3 = e3._init;
          try {
            return De(e3(t3));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, S = i2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = o2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ke = {pending: false, data: null, method: null, action: null}, Ae = [], je = -1;
  function Me(e3) {
    return {current: e3};
  }
  function Ne(e3) {
    0 > je || (e3.current = Ae[je], Ae[je] = null, je--);
  }
  function w(e3, t3) {
    je++, Ae[je] = e3.current, e3.current = t3;
  }
  var Pe = Me(null), Fe = Me(null), Ie = Me(null), Le = Me(null);
  function Re(e3, t3) {
    switch (w(Ie, t3), w(Fe, e3), w(Pe, null), t3.nodeType) {
      case 9:
      case 11:
        e3 = (e3 = t3.documentElement) && (e3 = e3.namespaceURI) ? up(e3) : 0;
        break;
      default:
        if (e3 = t3.tagName, t3 = t3.namespaceURI)
          t3 = up(t3), e3 = dp(t3, e3);
        else
          switch (e3) {
            case `svg`:
              e3 = 1;
              break;
            case `math`:
              e3 = 2;
              break;
            default:
              e3 = 0;
          }
    }
    Ne(Pe), w(Pe, e3);
  }
  function ze() {
    Ne(Pe), Ne(Fe), Ne(Ie);
  }
  function Be(e3) {
    var t3 = e3.memoizedState;
    t3 !== null && (sh._currentValue = t3.memoizedState, w(Le, e3)), t3 = Pe.current;
    var n2 = dp(t3, e3.type);
    t3 !== n2 && (w(Fe, e3), w(Pe, n2));
  }
  function Ve(e3) {
    Fe.current === e3 && (Ne(Pe), Ne(Fe)), Le.current === e3 && (Ne(Le), sh._currentValue = ke);
  }
  var He, Ue;
  function We(e3) {
    if (He === void 0)
      try {
        throw Error();
      } catch (e4) {
        var t3 = e4.stack.trim().match(/\n( *(at )?)/);
        He = t3 && t3[1] || ``, Ue = -1 < e4.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e4.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
      }
    return `
` + He + e3 + Ue;
  }
  var Ge = false;
  function Ke(e3, t3) {
    if (!e3 || Ge)
      return ``;
    Ge = true;
    var n2 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r2 = {DetermineComponentFrameRoot: function() {
        try {
          if (t3) {
            var n3 = function() {
              throw Error();
            };
            if (Object.defineProperty(n3.prototype, "props", {set: function() {
              throw Error();
            }}), typeof Reflect == `object` && Reflect.construct) {
              try {
                Reflect.construct(n3, []);
              } catch (e4) {
                var r3 = e4;
              }
              Reflect.construct(e3, [], n3);
            } else {
              try {
                n3.call();
              } catch (e4) {
                r3 = e4;
              }
              n3 = false;
              try {
                var i4 = Object.getOwnPropertyDescriptor(e3.prototype, `props`);
                Object.defineProperty(e3.prototype, "props", {configurable: true, set: function() {
                  throw Error();
                }}), n3 = true, new e3();
              } finally {
                n3 && (i4 === void 0 ? delete e3.prototype.props : Object.defineProperty(e3.prototype, "props", i4));
              }
            }
          } else {
            try {
              throw Error();
            } catch (e4) {
              r3 = e4;
            }
            (n3 = e3()) && typeof n3.catch == `function` && n3.catch(function() {
            });
          }
        } catch (e4) {
          if (e4 && r3 && typeof e4.stack == `string`)
            return [e4.stack, r3.stack];
        }
        return [null, null];
      }};
      r2.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i3 = Object.getOwnPropertyDescriptor(r2.DetermineComponentFrameRoot, `name`);
      i3 && i3.configurable && Object.defineProperty(r2.DetermineComponentFrameRoot, "name", {value: `DetermineComponentFrameRoot`});
      var a2 = r2.DetermineComponentFrameRoot(), o3 = a2[0], s3 = a2[1];
      if (o3 && s3) {
        var c3 = o3.split(`
`), l3 = s3.split(`
`);
        for (i3 = r2 = 0; r2 < c3.length && !c3[r2].includes(`DetermineComponentFrameRoot`); )
          r2++;
        for (; i3 < l3.length && !l3[i3].includes(`DetermineComponentFrameRoot`); )
          i3++;
        if (r2 === c3.length || i3 === l3.length)
          for (r2 = c3.length - 1, i3 = l3.length - 1; 1 <= r2 && 0 <= i3 && c3[r2] !== l3[i3]; )
            i3--;
        for (; 1 <= r2 && 0 <= i3; r2--, i3--)
          if (c3[r2] !== l3[i3]) {
            if (r2 !== 1 || i3 !== 1)
              do
                if (r2--, i3--, 0 > i3 || c3[r2] !== l3[i3]) {
                  var u3 = `
` + c3[r2].replace(` at new `, ` at `);
                  return e3.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e3.displayName)), u3;
                }
              while (1 <= r2 && 0 <= i3);
            break;
          }
      }
    } finally {
      Ge = false, Error.prepareStackTrace = n2;
    }
    return (n2 = e3 ? e3.displayName || e3.name : ``) ? We(n2) : ``;
  }
  function qe(e3, t3) {
    switch (e3.tag) {
      case 26:
      case 27:
      case 5:
        return We(e3.type);
      case 16:
        return We(`Lazy`);
      case 13:
        return e3.child !== t3 && t3 !== null ? We(`Suspense Fallback`) : We(`Suspense`);
      case 19:
        return We(`SuspenseList`);
      case 0:
      case 15:
        return Ke(e3.type, false);
      case 11:
        return Ke(e3.type.render, false);
      case 1:
        return Ke(e3.type, true);
      case 31:
        return We(`Activity`);
      case 30:
        return We(`ViewTransition`);
      default:
        return ``;
    }
  }
  function Je(e3) {
    try {
      var t3 = ``, n2 = null;
      do
        t3 += qe(e3, n2), n2 = e3, e3 = e3.return;
      while (e3);
      return t3;
    } catch (e4) {
      return `
Error generating stack: ` + e4.message + `
` + e4.stack;
    }
  }
  var Ye = Object.prototype.hasOwnProperty, Xe = t2.unstable_scheduleCallback, Ze = t2.unstable_cancelCallback, Qe = t2.unstable_shouldYield, $e = t2.unstable_requestPaint, et = t2.unstable_now, tt = t2.unstable_getCurrentPriorityLevel, nt = t2.unstable_ImmediatePriority, rt = t2.unstable_UserBlockingPriority, it = t2.unstable_NormalPriority, at = t2.unstable_LowPriority, ot = t2.unstable_IdlePriority, st = t2.log, ct = t2.unstable_setDisableYieldValue, lt = null, ut = null;
  function dt(e3) {
    if (typeof st == `function` && ct(e3), ut && typeof ut.setStrictMode == `function`)
      try {
        ut.setStrictMode(lt, e3);
      } catch {
      }
  }
  var ft = Math.clz32 ? Math.clz32 : ht, pt = Math.log, mt = Math.LN2;
  function ht(e3) {
    return e3 >>>= 0, e3 === 0 ? 32 : 31 - (pt(e3) / mt | 0) | 0;
  }
  var gt = 256, _t = 262144, vt = 4194304;
  function yt(e3) {
    var t3 = e3 & 42;
    if (t3 !== 0)
      return t3;
    switch (e3 & -e3) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e3 & -e3;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e3 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e3 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e3;
    }
  }
  function bt(e3, t3, n2) {
    var r2 = e3.pendingLanes;
    if (r2 === 0)
      return 0;
    var i3 = 0, a2 = e3.suspendedLanes, o3 = e3.pingedLanes;
    e3 = e3.warmLanes;
    var s3 = r2 & 134217727;
    return s3 === 0 ? (s3 = r2 & ~a2, s3 === 0 ? o3 === 0 ? n2 || (n2 = r2 & ~e3, n2 !== 0 && (i3 = yt(n2))) : i3 = yt(o3) : i3 = yt(s3)) : (r2 = s3 & ~a2, r2 === 0 ? (o3 &= s3, o3 === 0 ? n2 || (n2 = s3 & ~e3, n2 !== 0 && (i3 = yt(n2))) : i3 = yt(o3)) : i3 = yt(r2)), i3 === 0 ? 0 : t3 !== 0 && t3 !== i3 && (t3 & a2) === 0 && (a2 = i3 & -i3, n2 = t3 & -t3, a2 >= n2 || a2 === 32 && n2 & 4194048) ? t3 : i3;
  }
  function xt(e3, t3) {
    return (e3.pendingLanes & ~(e3.suspendedLanes & ~e3.pingedLanes) & t3) === 0;
  }
  function St(e3, t3) {
    t3 & 8 && (t3 |= t3 & 32);
    var n2 = e3.entangledLanes;
    if (n2 !== 0)
      for (e3 = e3.entanglements, n2 &= t3; 0 < n2; ) {
        var r2 = 31 - ft(n2), i3 = 1 << r2;
        t3 |= e3[r2], n2 &= ~i3;
      }
    return t3;
  }
  function Ct(e3, t3) {
    switch (e3) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t3 + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t3 + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function wt() {
    var e3 = vt;
    return vt <<= 1, !(vt & 62914560) && (vt = 4194304), e3;
  }
  function Tt(e3) {
    for (var t3 = [], n2 = 0; 31 > n2; n2++)
      t3.push(e3);
    return t3;
  }
  function Et(e3, t3) {
    e3.pendingLanes |= t3, t3 !== 268435456 && (e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0);
  }
  function Dt(e3, t3, n2, r2, i3, a2) {
    var o3 = e3.pendingLanes;
    e3.pendingLanes = n2, e3.suspendedLanes = 0, e3.pingedLanes = 0, e3.warmLanes = 0, e3.expiredLanes &= n2, e3.entangledLanes &= n2, e3.errorRecoveryDisabledLanes &= n2, e3.shellSuspendCounter = 0;
    var s3 = e3.entanglements, c3 = e3.expirationTimes, l3 = e3.hiddenUpdates;
    for (n2 = o3 & ~n2; 0 < n2; ) {
      var u3 = 31 - ft(n2), d3 = 1 << u3;
      s3[u3] = 0, c3[u3] = -1;
      var f3 = l3[u3];
      if (f3 !== null)
        for (l3[u3] = null, u3 = 0; u3 < f3.length; u3++) {
          var p2 = f3[u3];
          p2 !== null && (p2.lane &= -536870913);
        }
      n2 &= ~d3;
    }
    r2 !== 0 && Ot(e3, r2, 0), a2 !== 0 && i3 === 0 && e3.tag !== 0 && (e3.suspendedLanes |= a2 & ~(o3 & ~t3));
  }
  function Ot(e3, t3, n2) {
    e3.pendingLanes |= t3, e3.suspendedLanes &= ~t3;
    var r2 = 31 - ft(t3);
    e3.entangledLanes |= t3, e3.entanglements[r2] = e3.entanglements[r2] | 1073741824 | n2 & 261930;
  }
  function kt(e3, t3) {
    var n2 = e3.entangledLanes |= t3;
    for (e3 = e3.entanglements; n2; ) {
      var r2 = 31 - ft(n2), i3 = 1 << r2;
      i3 & t3 | e3[r2] & t3 && (e3[r2] |= t3), n2 &= ~i3;
    }
  }
  function At(e3, t3) {
    var n2 = t3 & -t3;
    return n2 = n2 & 42 ? 1 : jt(n2), (n2 & (e3.suspendedLanes | t3)) === 0 ? n2 : 0;
  }
  function jt(e3) {
    switch (e3) {
      case 2:
        e3 = 1;
        break;
      case 8:
        e3 = 4;
        break;
      case 32:
        e3 = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e3 = 128;
        break;
      case 268435456:
        e3 = 134217728;
        break;
      default:
        e3 = 0;
    }
    return e3;
  }
  function Mt(e3) {
    return e3 &= -e3, 2 < e3 ? 8 < e3 ? e3 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function Nt() {
    var e3 = C.p;
    return e3 === 0 ? (e3 = window.event, e3 === void 0 ? 32 : Ch(e3.type)) : e3;
  }
  function Pt(e3, t3) {
    var n2 = C.p;
    try {
      return C.p = e3, t3();
    } finally {
      C.p = n2;
    }
  }
  var Ft = Math.random().toString(36).slice(2), It = `__reactFiber$` + Ft, Lt = `__reactProps$` + Ft, Rt = `__reactContainer$` + Ft, zt = `__reactEvents$` + Ft, Bt = `__reactListeners$` + Ft, Vt = `__reactHandles$` + Ft, Ht = `__reactResources$` + Ft, Ut = `__reactMarker$` + Ft, Wt = `__reactLoad$` + Ft;
  function Gt(e3) {
    delete e3[It], delete e3[Lt], delete e3[Bt], delete e3[Vt];
  }
  function Kt(e3) {
    var t3;
    if (t3 = e3[It])
      return t3;
    for (var n2 = e3.parentNode; n2; ) {
      if (t3 = n2[Rt] || n2[It]) {
        if (n2 = t3.alternate, t3.child !== null || n2 !== null && n2.child !== null)
          for (e3 = fm(e3); e3 !== null; ) {
            if (n2 = e3[It])
              return n2;
            e3 = fm(e3);
          }
        return t3;
      }
      e3 = n2, n2 = e3.parentNode;
    }
    return null;
  }
  function qt(e3) {
    if (e3 = e3[It] || e3[Rt]) {
      var t3 = e3.tag;
      if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3)
        return e3;
    }
    return null;
  }
  function Jt(e3) {
    var t3 = e3.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6)
      return e3.stateNode;
    throw Error(s2(33));
  }
  function Yt(e3) {
    var t3 = e3[Ht];
    return t3 || (t3 = e3[Ht] = {hoistableStyles: new Map(), hoistableScripts: new Map()}), t3;
  }
  function T(e3) {
    e3[Ut] = true;
  }
  function Xt(e3) {
    e3[Wt] = void 0;
  }
  var Zt = new Set(), Qt = {};
  function $t(e3, t3) {
    en(e3, t3), en(e3 + `Capture`, t3);
  }
  function en(e3, t3) {
    for (Qt[e3] = t3, e3 = 0; e3 < t3.length; e3++)
      Zt.add(t3[e3]);
  }
  var tn = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), nn = {}, rn = {};
  function an(e3) {
    return Ye.call(rn, e3) ? true : Ye.call(nn, e3) ? false : tn.test(e3) ? rn[e3] = true : (nn[e3] = true, false);
  }
  var E = false;
  function on() {
    var e3 = E;
    return E = false, e3;
  }
  function sn(e3, t3, n2) {
    if (an(t3)) {
      if (n2 === null)
        e3.removeAttribute(t3);
      else {
        switch (typeof n2) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e3.removeAttribute(t3);
            return;
          case `boolean`:
            var r2 = t3.toLowerCase().slice(0, 5);
            if (r2 !== `data-` && r2 !== `aria-`) {
              e3.removeAttribute(t3);
              return;
            }
        }
        e3.setAttribute(t3, n2);
      }
    }
  }
  function cn(e3, t3, n2) {
    if (n2 === null)
      e3.removeAttribute(t3);
    else {
      switch (typeof n2) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(t3);
          return;
      }
      e3.setAttribute(t3, n2);
    }
  }
  function ln(e3, t3, n2, r2) {
    if (r2 === null)
      e3.removeAttribute(n2);
    else {
      switch (typeof r2) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e3.removeAttribute(n2);
          return;
      }
      e3.setAttributeNS(t3, n2, r2);
    }
  }
  function un(e3) {
    switch (typeof e3) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e3;
      case `object`:
        return e3;
      default:
        return ``;
    }
  }
  function dn(e3) {
    var t3 = e3.type;
    return (e3 = e3.nodeName) && e3.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
  }
  function fn(e3, t3, n2) {
    var r2 = Object.getOwnPropertyDescriptor(e3.constructor.prototype, t3);
    if (!e3.hasOwnProperty(t3) && r2 !== void 0 && typeof r2.get == `function` && typeof r2.set == `function`) {
      var i3 = r2.get, a2 = r2.set;
      return Object.defineProperty(e3, t3, {configurable: true, get: function() {
        return i3.call(this);
      }, set: function(e4) {
        n2 = `` + e4, a2.call(this, e4);
      }}), Object.defineProperty(e3, t3, {enumerable: r2.enumerable}), {getValue: function() {
        return n2;
      }, setValue: function(e4) {
        n2 = `` + e4;
      }, stopTracking: function() {
        e3._valueTracker = null, delete e3[t3];
      }};
    }
  }
  function pn(e3) {
    if (!e3._valueTracker) {
      var t3 = dn(e3) ? `checked` : `value`;
      e3._valueTracker = fn(e3, t3, `` + e3[t3]);
    }
  }
  function mn(e3) {
    if (!e3)
      return false;
    var t3 = e3._valueTracker;
    if (!t3)
      return true;
    var n2 = t3.getValue(), r2 = ``;
    return e3 && (r2 = dn(e3) ? e3.checked ? `true` : `false` : e3.value), e3 = r2, e3 !== n2 && (t3.setValue(e3), true);
  }
  var hn = /[\n"\\]/g;
  function gn(e3) {
    return e3.replace(hn, function(e4) {
      return `\\` + e4.charCodeAt(0).toString(16) + ` `;
    });
  }
  function _n(e3, t3, n2, r2, i3, a2, o3, s3) {
    e3.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e3.type = o3 : e3.removeAttribute(`type`), t3 == null ? o3 !== `submit` && o3 !== `reset` || e3.removeAttribute(`value`) : o3 === `number` ? (t3 === 0 && e3.value === `` || e3.value != t3) && (e3.value = `` + un(t3)) : e3.value !== `` + un(t3) && (e3.value = `` + un(t3)), t3 == null ? n2 == null ? r2 != null && e3.removeAttribute(`value`) : yn(e3, un(n2)) : o3 === `number` && e3.value == t3 ? yn(e3, un(e3.value)) : yn(e3, un(t3)), i3 == null && a2 != null && (e3.defaultChecked = !!a2), i3 != null && (e3.checked = i3 && typeof i3 != `function` && typeof i3 != `symbol`), s3 != null && typeof s3 != `function` && typeof s3 != `symbol` && typeof s3 != `boolean` ? e3.name = `` + un(s3) : e3.removeAttribute(`name`);
  }
  function vn(e3, t3, n2, r2, i3, a2, o3, s3) {
    if (a2 != null && typeof a2 != `function` && typeof a2 != `symbol` && typeof a2 != `boolean` && (e3.type = a2), t3 != null || n2 != null) {
      if (!(a2 !== `submit` && a2 !== `reset` || t3 != null)) {
        pn(e3);
        return;
      }
      n2 = n2 == null ? `` : `` + un(n2), t3 = t3 == null ? n2 : `` + un(t3), s3 || t3 === e3.value || (e3.value = t3), e3.defaultValue = t3;
    }
    r2 ?? (r2 = i3), r2 = typeof r2 != `function` && typeof r2 != `symbol` && !!r2, e3.checked = s3 ? e3.checked : !!r2, e3.defaultChecked = !!r2, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e3.name = o3), pn(e3);
  }
  function yn(e3, t3) {
    e3.defaultValue !== `` + t3 && (e3.defaultValue = `` + t3);
  }
  function bn(e3, t3, n2, r2) {
    if (e3 = e3.options, t3) {
      t3 = {};
      for (var i3 = 0; i3 < n2.length; i3++)
        t3[`$` + n2[i3]] = true;
      for (n2 = 0; n2 < e3.length; n2++)
        i3 = t3.hasOwnProperty(`$` + e3[n2].value), e3[n2].selected !== i3 && (e3[n2].selected = i3), i3 && r2 && (e3[n2].defaultSelected = true);
    } else {
      for (n2 = `` + un(n2), t3 = null, i3 = 0; i3 < e3.length; i3++) {
        if (e3[i3].value === n2) {
          e3[i3].selected = true, r2 && (e3[i3].defaultSelected = true);
          return;
        }
        t3 !== null || e3[i3].disabled || (t3 = e3[i3]);
      }
      t3 !== null && (t3.selected = true);
    }
  }
  function xn(e3, t3, n2) {
    if (t3 != null && (t3 = `` + un(t3), t3 !== e3.value && (e3.value = t3), n2 == null)) {
      e3.defaultValue !== t3 && (e3.defaultValue = t3);
      return;
    }
    e3.defaultValue = n2 == null ? `` : `` + un(n2);
  }
  function Sn(e3, t3, n2, r2) {
    if (t3 == null) {
      if (r2 != null) {
        if (n2 != null)
          throw Error(s2(92));
        if (Oe(r2)) {
          if (1 < r2.length)
            throw Error(s2(93));
          r2 = r2[0];
        }
        n2 = r2;
      }
      n2 ?? (n2 = ``), t3 = n2;
    }
    n2 = un(t3), e3.defaultValue = n2, r2 = e3.textContent, r2 === n2 && r2 !== `` && r2 !== null && (e3.value = r2), pn(e3);
  }
  function Cn(e3, t3) {
    if (t3) {
      var n2 = e3.firstChild;
      if (n2 && n2 === e3.lastChild && n2.nodeType === 3) {
        n2.nodeValue = t3;
        return;
      }
    }
    e3.textContent = t3;
  }
  var wn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function Tn(e3, t3, n2) {
    var r2 = t3.indexOf(`--`) === 0;
    n2 == null || typeof n2 == `boolean` || n2 === `` ? r2 ? e3.setProperty(t3, ``) : t3 === `float` ? e3.cssFloat = `` : e3[t3] = `` : r2 ? e3.setProperty(t3, n2) : typeof n2 != `number` || n2 === 0 || wn.has(t3) ? t3 === `float` ? e3.cssFloat = n2 : e3[t3] = (`` + n2).trim() : e3[t3] = n2 + `px`;
  }
  function En(e3, t3, n2) {
    if (t3 != null && typeof t3 != `object`)
      throw Error(s2(62));
    if (e3 = e3.style, n2 != null) {
      for (var r2 in n2)
        !n2.hasOwnProperty(r2) || t3 != null && t3.hasOwnProperty(r2) || (r2.indexOf(`--`) === 0 ? e3.setProperty(r2, ``) : r2 === `float` ? e3.cssFloat = `` : e3[r2] = ``, E = true);
      for (var i3 in t3)
        r2 = t3[i3], t3.hasOwnProperty(i3) && n2[i3] !== r2 && (Tn(e3, i3, r2), E = true);
    } else
      for (var a2 in t3)
        t3.hasOwnProperty(a2) && Tn(e3, a2, t3[a2]);
  }
  function Dn(e3) {
    if (e3.indexOf(`-`) === -1)
      return false;
    switch (e3) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var On = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), kn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function An(e3) {
    return kn.test(`` + e3) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e3;
  }
  function jn() {
  }
  var Mn = null;
  function Nn(e3) {
    return e3 = e3.target || e3.srcElement || window, e3.correspondingUseElement && (e3 = e3.correspondingUseElement), e3.nodeType === 3 ? e3.parentNode : e3;
  }
  var Pn = null, Fn = null;
  function In(e3) {
    var t3 = qt(e3);
    if (t3 && (e3 = t3.stateNode)) {
      var n2 = e3[Lt] || null;
      a:
        switch (e3 = t3.stateNode, t3.type) {
          case `input`:
            if (_n(e3, n2.value, n2.defaultValue, n2.defaultValue, n2.checked, n2.defaultChecked, n2.type, n2.name), t3 = n2.name, n2.type === `radio` && t3 != null) {
              for (n2 = e3; n2.parentNode; )
                n2 = n2.parentNode;
              for (n2 = n2.querySelectorAll(`input[name="` + gn(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n2.length; t3++) {
                var r2 = n2[t3];
                if (r2 !== e3 && r2.form === e3.form) {
                  var i3 = r2[Lt] || null;
                  if (!i3)
                    throw Error(s2(90));
                  _n(r2, i3.value, i3.defaultValue, i3.defaultValue, i3.checked, i3.defaultChecked, i3.type, i3.name);
                }
              }
              for (t3 = 0; t3 < n2.length; t3++)
                r2 = n2[t3], r2.form === e3.form && mn(r2);
            }
            break a;
          case `textarea`:
            xn(e3, n2.value, n2.defaultValue);
            break a;
          case `select`:
            t3 = n2.value, t3 != null && bn(e3, !!n2.multiple, t3, false);
        }
    }
  }
  var Ln = false;
  function Rn(e3, t3, n2) {
    if (Ln)
      return e3(t3, n2);
    Ln = true;
    try {
      return e3(t3);
    } finally {
      if (Ln = false, (Pn !== null || Fn !== null) && (zd(), Pn && (t3 = Pn, e3 = Fn, Fn = Pn = null, In(t3), e3)))
        for (t3 = 0; t3 < e3.length; t3++)
          In(e3[t3]);
    }
  }
  function zn(e3, t3) {
    var n2 = e3.stateNode;
    if (n2 === null)
      return null;
    var r2 = n2[Lt] || null;
    if (r2 === null)
      return null;
    n2 = r2[t3];
    a:
      switch (t3) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r2 = !r2.disabled) || (e3 = e3.type, r2 = e3 !== `button` && e3 !== `input` && e3 !== `select` && e3 !== `textarea`), e3 = !r2;
          break a;
        default:
          e3 = false;
      }
    if (e3)
      return null;
    if (n2 && typeof n2 != `function`)
      throw Error(s2(231, t3, typeof n2));
    return n2;
  }
  var Bn = typeof window < `u` && window.document !== void 0 && window.document.createElement !== void 0, Vn = false;
  if (Bn)
    try {
      var Hn = {};
      Object.defineProperty(Hn, "passive", {get: function() {
        Vn = true;
      }}), window.addEventListener(`test`, Hn, Hn), window.removeEventListener(`test`, Hn, Hn);
    } catch {
      Vn = false;
    }
  var Un = null, Wn = null, Gn = null;
  function Kn() {
    if (Gn)
      return Gn;
    var e3, t3 = Wn, n2 = t3.length, r2, i3 = `value` in Un ? Un.value : Un.textContent, a2 = i3.length;
    for (e3 = 0; e3 < n2 && t3[e3] === i3[e3]; e3++)
      ;
    var o3 = n2 - e3;
    for (r2 = 1; r2 <= o3 && t3[n2 - r2] === i3[a2 - r2]; r2++)
      ;
    return Gn = i3.slice(e3, 1 < r2 ? 1 - r2 : void 0);
  }
  function qn(e3) {
    var t3 = e3.keyCode;
    return `charCode` in e3 ? (e3 = e3.charCode, e3 === 0 && t3 === 13 && (e3 = 13)) : e3 = t3, e3 === 10 && (e3 = 13), 32 <= e3 || e3 === 13 ? e3 : 0;
  }
  function Jn() {
    return true;
  }
  function Yn() {
    return false;
  }
  function Xn(e3) {
    function t3(t4, n2, r2, i3, a2) {
      for (var o3 in this._reactName = t4, this._targetInst = r2, this.type = n2, this.nativeEvent = i3, this.target = a2, this.currentTarget = null, e3)
        e3.hasOwnProperty(o3) && (t4 = e3[o3], this[o3] = t4 ? t4(i3) : i3[o3]);
      return this.isDefaultPrevented = (i3.defaultPrevented == null ? i3.returnValue === false : i3.defaultPrevented) ? Jn : Yn, this.isPropagationStopped = Yn, this;
    }
    return x(t3.prototype, {preventDefault: function() {
      this.defaultPrevented = true;
      var e4 = this.nativeEvent;
      e4 && (e4.preventDefault ? e4.preventDefault() : typeof e4.returnValue != `unknown` && (e4.returnValue = false), this.isDefaultPrevented = Jn);
    }, stopPropagation: function() {
      var e4 = this.nativeEvent;
      e4 && (e4.stopPropagation ? e4.stopPropagation() : typeof e4.cancelBubble != `unknown` && (e4.cancelBubble = true), this.isPropagationStopped = Jn);
    }, persist: function() {
    }, isPersistent: Jn}), t3;
  }
  var Zn = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e3) {
    return e3.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0}, Qn = Xn(Zn), $n = x({}, Zn, {view: 0, detail: 0}), er = Xn($n), tr, nr, rr, ir = x({}, $n, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: hr, button: 0, buttons: 0, relatedTarget: function(e3) {
    return e3.relatedTarget === void 0 ? e3.fromElement === e3.srcElement ? e3.toElement : e3.fromElement : e3.relatedTarget;
  }, movementX: function(e3) {
    return `movementX` in e3 ? e3.movementX : (e3 !== rr && (rr && e3.type === `mousemove` ? (tr = e3.screenX - rr.screenX, nr = e3.screenY - rr.screenY) : nr = tr = 0, rr = e3), tr);
  }, movementY: function(e3) {
    return `movementY` in e3 ? e3.movementY : nr;
  }}), ar = Xn(ir), or = Xn(x({}, ir, {dataTransfer: 0})), sr = Xn(x({}, $n, {relatedTarget: 0})), cr = Xn(x({}, Zn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), lr = Xn(x({}, Zn, {clipboardData: function(e3) {
    return `clipboardData` in e3 ? e3.clipboardData : window.clipboardData;
  }})), ur = Xn(x({}, Zn, {data: 0})), dr = {Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified`}, fr = {8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta`}, pr = {Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey`};
  function mr(e3) {
    var t3 = this.nativeEvent;
    return t3.getModifierState ? t3.getModifierState(e3) : (e3 = pr[e3]) ? !!t3[e3] : false;
  }
  function hr() {
    return mr;
  }
  var gr = Xn(x({}, $n, {key: function(e3) {
    if (e3.key) {
      var t3 = dr[e3.key] || e3.key;
      if (t3 !== `Unidentified`)
        return t3;
    }
    return e3.type === `keypress` ? (e3 = qn(e3), e3 === 13 ? `Enter` : String.fromCharCode(e3)) : e3.type === `keydown` || e3.type === `keyup` ? fr[e3.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: hr, charCode: function(e3) {
    return e3.type === `keypress` ? qn(e3) : 0;
  }, keyCode: function(e3) {
    return e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  }, which: function(e3) {
    return e3.type === `keypress` ? qn(e3) : e3.type === `keydown` || e3.type === `keyup` ? e3.keyCode : 0;
  }})), _r = Xn(x({}, ir, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0})), vr = Xn(x({}, Zn, {submitter: 0})), yr = Xn(x({}, $n, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: hr})), br = Xn(x({}, Zn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), xr = Xn(x({}, ir, {deltaX: function(e3) {
    return `deltaX` in e3 ? e3.deltaX : `wheelDeltaX` in e3 ? -e3.wheelDeltaX : 0;
  }, deltaY: function(e3) {
    return `deltaY` in e3 ? e3.deltaY : `wheelDeltaY` in e3 ? -e3.wheelDeltaY : `wheelDelta` in e3 ? -e3.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0})), Sr = Xn(x({}, Zn, {newState: 0, oldState: 0, source: 0})), Cr = [9, 13, 27, 32], wr = Bn && `CompositionEvent` in window, Tr = null;
  Bn && `documentMode` in document && (Tr = document.documentMode);
  var Er = Bn && `TextEvent` in window && !Tr, Dr = Bn && (!wr || Tr && 8 < Tr && 11 >= Tr), Or = ` `, kr = false;
  function Ar(e3, t3) {
    switch (e3) {
      case `keyup`:
        return Cr.indexOf(t3.keyCode) !== -1;
      case `keydown`:
        return t3.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function jr(e3) {
    return e3 = e3.detail, typeof e3 == `object` && `data` in e3 ? e3.data : null;
  }
  var Mr = false;
  function Nr(e3, t3) {
    switch (e3) {
      case `compositionend`:
        return jr(t3);
      case `keypress`:
        return t3.which === 32 ? (kr = true, Or) : null;
      case `textInput`:
        return e3 = t3.data, e3 === Or && kr ? null : e3;
      default:
        return null;
    }
  }
  function Pr(e3, t3) {
    if (Mr)
      return e3 === `compositionend` || !wr && Ar(e3, t3) ? (e3 = Kn(), Gn = Wn = Un = null, Mr = false, e3) : null;
    switch (e3) {
      case `paste`:
        return null;
      case `keypress`:
        if (!(t3.ctrlKey || t3.altKey || t3.metaKey) || t3.ctrlKey && t3.altKey) {
          if (t3.char && 1 < t3.char.length)
            return t3.char;
          if (t3.which)
            return String.fromCharCode(t3.which);
        }
        return null;
      case `compositionend`:
        return Dr && t3.locale !== `ko` ? null : t3.data;
      default:
        return null;
    }
  }
  var Fr = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
  function Ir(e3) {
    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t3 === `input` ? !!Fr[e3.type] : t3 === `textarea`;
  }
  function Lr(e3, t3, n2, r2) {
    Pn ? Fn ? Fn.push(r2) : Fn = [r2] : Pn = r2, t3 = Jf(t3, `onChange`), 0 < t3.length && (n2 = new Qn(`onChange`, `change`, null, n2, r2), e3.push({event: n2, listeners: t3}));
  }
  var Rr = null, zr = null;
  function Br(e3) {
    Vf(e3, 0);
  }
  function Vr(e3) {
    if (mn(Jt(e3)))
      return e3;
  }
  function Hr(e3, t3) {
    if (e3 === `change`)
      return t3;
  }
  var Ur = false;
  if (Bn) {
    var Wr;
    if (Bn) {
      var Gr = `oninput` in document;
      if (!Gr) {
        var Kr = document.createElement(`div`);
        Kr.setAttribute(`oninput`, `return;`), Gr = typeof Kr.oninput == `function`;
      }
      Wr = Gr;
    } else
      Wr = false;
    Ur = Wr && (!document.documentMode || 9 < document.documentMode);
  }
  function qr() {
    Rr && (Rr.detachEvent(`onpropertychange`, Jr), zr = Rr = null);
  }
  function Jr(e3) {
    if (e3.propertyName === `value` && Vr(zr)) {
      var t3 = [];
      Lr(t3, zr, e3, Nn(e3)), Rn(Br, t3);
    }
  }
  function Yr(e3, t3, n2) {
    e3 === `focusin` ? (qr(), Rr = t3, zr = n2, Rr.attachEvent(`onpropertychange`, Jr)) : e3 === `focusout` && qr();
  }
  function Xr(e3) {
    if (e3 === `selectionchange` || e3 === `keyup` || e3 === `keydown`)
      return Vr(zr);
  }
  function Zr(e3, t3) {
    if (e3 === `click`)
      return Vr(t3);
  }
  function Qr(e3, t3) {
    if (e3 === `input` || e3 === `change`)
      return Vr(t3);
  }
  function $r(e3, t3) {
    return e3 === t3 && (e3 !== 0 || 1 / e3 == 1 / t3) || e3 !== e3 && t3 !== t3;
  }
  var ei = typeof Object.is == `function` ? Object.is : $r;
  function ti(e3, t3) {
    if (ei(e3, t3))
      return true;
    if (typeof e3 != `object` || !e3 || typeof t3 != `object` || !t3)
      return false;
    var n2 = Object.keys(e3), r2 = Object.keys(t3);
    if (n2.length !== r2.length)
      return false;
    for (r2 = 0; r2 < n2.length; r2++) {
      var i3 = n2[r2];
      if (!Ye.call(t3, i3) || !ei(e3[i3], t3[i3]))
        return false;
    }
    return true;
  }
  function ni(e3) {
    if (e3 || (e3 = typeof document < `u` ? document : void 0), e3 === void 0)
      return null;
    try {
      return e3.activeElement || e3.body;
    } catch {
      return e3.body;
    }
  }
  function ri(e3) {
    for (; e3 && e3.firstChild; )
      e3 = e3.firstChild;
    return e3;
  }
  function ii(e3, t3) {
    var n2 = ri(e3);
    e3 = 0;
    for (var r2; n2; ) {
      if (n2.nodeType === 3) {
        if (r2 = e3 + n2.textContent.length, e3 <= t3 && r2 >= t3)
          return {node: n2, offset: t3 - e3};
        e3 = r2;
      }
      a: {
        for (; n2; ) {
          if (n2.nextSibling) {
            n2 = n2.nextSibling;
            break a;
          }
          n2 = n2.parentNode;
        }
        n2 = void 0;
      }
      n2 = ri(n2);
    }
  }
  function ai(e3, t3) {
    return e3 && t3 ? e3 === t3 ? true : e3 && e3.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? ai(e3, t3.parentNode) : `contains` in e3 ? e3.contains(t3) : e3.compareDocumentPosition ? !!(e3.compareDocumentPosition(t3) & 16) : false : false;
  }
  function oi(e3) {
    e3 = e3 != null && e3.ownerDocument != null && e3.ownerDocument.defaultView != null ? e3.ownerDocument.defaultView : window;
    for (var t3 = ni(e3.document); t3 instanceof e3.HTMLIFrameElement; ) {
      try {
        var n2 = typeof t3.contentWindow.location.href == `string`;
      } catch {
        n2 = false;
      }
      if (n2)
        e3 = t3.contentWindow;
      else
        break;
      t3 = ni(e3.document);
    }
    return t3;
  }
  function si(e3) {
    var t3 = e3 && e3.nodeName && e3.nodeName.toLowerCase();
    return t3 && (t3 === `input` && (e3.type === `text` || e3.type === `search` || e3.type === `tel` || e3.type === `url` || e3.type === `password`) || t3 === `textarea` || e3.contentEditable === `true`);
  }
  var ci = Bn && `documentMode` in document && 11 >= document.documentMode, li = null, ui = null, di = null, fi = false;
  function pi(e3, t3, n2) {
    var r2 = n2.window === n2 ? n2.document : n2.nodeType === 9 ? n2 : n2.ownerDocument;
    fi || li == null || li !== ni(r2) || (r2 = li, `selectionStart` in r2 && si(r2) ? r2 = {start: r2.selectionStart, end: r2.selectionEnd} : (r2 = (r2.ownerDocument && r2.ownerDocument.defaultView || window).getSelection(), r2 = {anchorNode: r2.anchorNode, anchorOffset: r2.anchorOffset, focusNode: r2.focusNode, focusOffset: r2.focusOffset}), di && ti(di, r2) || (di = r2, r2 = Jf(ui, `onSelect`), 0 < r2.length && (t3 = new Qn(`onSelect`, `select`, null, t3, n2), e3.push({event: t3, listeners: r2}), t3.target = li)));
  }
  function mi(e3, t3) {
    var n2 = {};
    return n2[e3.toLowerCase()] = t3.toLowerCase(), n2[`Webkit` + e3] = `webkit` + t3, n2[`Moz` + e3] = `moz` + t3, n2;
  }
  var hi = {animationend: mi(`Animation`, `AnimationEnd`), animationiteration: mi(`Animation`, `AnimationIteration`), animationstart: mi(`Animation`, `AnimationStart`), transitionrun: mi(`Transition`, `TransitionRun`), transitionstart: mi(`Transition`, `TransitionStart`), transitioncancel: mi(`Transition`, `TransitionCancel`), transitionend: mi(`Transition`, `TransitionEnd`)}, gi = {}, _i = {};
  Bn && (_i = document.createElement(`div`).style, `AnimationEvent` in window || (delete hi.animationend.animation, delete hi.animationiteration.animation, delete hi.animationstart.animation), `TransitionEvent` in window || delete hi.transitionend.transition);
  function vi(e3) {
    if (gi[e3])
      return gi[e3];
    if (!hi[e3])
      return e3;
    var t3 = hi[e3], n2;
    for (n2 in t3)
      if (t3.hasOwnProperty(n2) && n2 in _i)
        return gi[e3] = t3[n2];
    return e3;
  }
  var yi = vi(`animationend`), bi = vi(`animationiteration`), xi = vi(`animationstart`), Si = vi(`transitionrun`), Ci = vi(`transitionstart`), wi = vi(`transitioncancel`), Ti = vi(`transitionend`), Ei = new Map(), Di = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Di.push(`scrollEnd`);
  function Oi(e3, t3) {
    Ei.set(e3, t3), $t(t3, [e3]);
  }
  var ki = 0;
  function Ai(e3, t3) {
    if (e3.name != null && e3.name !== `auto`)
      return e3.name;
    if (t3.autoName !== null)
      return t3.autoName;
    e3 = bd.identifierPrefix;
    var n2 = ki++;
    return e3 = `_` + e3 + `t_` + n2.toString(32) + `_`, t3.autoName = e3;
  }
  function ji(e3) {
    if (e3 == null || typeof e3 == `string`)
      return e3;
    var t3 = null, n2 = Od;
    if (n2 !== null)
      for (var r2 = 0; r2 < n2.length; r2++) {
        var i3 = e3[n2[r2]];
        if (i3 != null) {
          if (i3 === `none`)
            return `none`;
          t3 = t3 == null ? i3 : t3 + (` ` + i3);
        }
      }
    return t3 ?? e3.default;
  }
  function Mi(e3, t3) {
    return e3 = ji(e3), t3 = ji(t3), t3 == null ? e3 === `auto` ? null : e3 : t3 === `auto` ? null : t3;
  }
  var Ni = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, {bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3});
      if (!window.dispatchEvent(t3))
        return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  }, Pi = [], Fi = 0, Ii = 0;
  function Li() {
    for (var e3 = Fi, t3 = Ii = Fi = 0; t3 < e3; ) {
      var n2 = Pi[t3];
      Pi[t3++] = null;
      var r2 = Pi[t3];
      Pi[t3++] = null;
      var i3 = Pi[t3];
      Pi[t3++] = null;
      var a2 = Pi[t3];
      if (Pi[t3++] = null, r2 !== null && i3 !== null) {
        var o3 = r2.pending;
        o3 === null ? i3.next = i3 : (i3.next = o3.next, o3.next = i3), r2.pending = i3;
      }
      a2 !== 0 && Vi(n2, i3, a2);
    }
  }
  function Ri(e3, t3, n2, r2) {
    Pi[Fi++] = e3, Pi[Fi++] = t3, Pi[Fi++] = n2, Pi[Fi++] = r2, Ii |= r2, e3.lanes |= r2, e3 = e3.alternate, e3 !== null && (e3.lanes |= r2);
  }
  function zi(e3, t3, n2, r2) {
    return Ri(e3, t3, n2, r2), Hi(e3);
  }
  function Bi(e3, t3) {
    return Ri(e3, null, null, t3), Hi(e3);
  }
  function Vi(e3, t3, n2) {
    e3.lanes |= n2;
    var r2 = e3.alternate;
    r2 !== null && (r2.lanes |= n2);
    for (var i3 = false, a2 = e3.return; a2 !== null; )
      a2.childLanes |= n2, r2 = a2.alternate, r2 !== null && (r2.childLanes |= n2), a2.tag === 22 && (e3 = a2.stateNode, e3 === null || e3._visibility & 1 || (i3 = true)), e3 = a2, a2 = a2.return;
    return e3.tag === 3 ? (a2 = e3.stateNode, i3 && t3 !== null && (i3 = 31 - ft(n2), e3 = a2.hiddenUpdates, r2 = e3[i3], r2 === null ? e3[i3] = [t3] : r2.push(t3), t3.lane = n2 | 536870912), a2) : null;
  }
  function Hi(e3) {
    if (50 < kd)
      throw kd = 0, Ad = null, Error(s2(185));
    for (var t3 = e3.return; t3 !== null; )
      e3 = t3, t3 = e3.return;
    return e3.tag === 3 ? e3.stateNode : null;
  }
  var Ui = {};
  function Wi(e3, t3, n2, r2) {
    this.tag = e3, this.key = n2, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Gi(e3, t3, n2, r2) {
    return new Wi(e3, t3, n2, r2);
  }
  function Ki(e3) {
    return e3 = e3.prototype, !(!e3 || !e3.isReactComponent);
  }
  function qi(e3, t3) {
    var n2 = e3.alternate;
    return n2 === null ? (n2 = Gi(e3.tag, t3, e3.key, e3.mode), n2.elementType = e3.elementType, n2.type = e3.type, n2.stateNode = e3.stateNode, n2.alternate = e3, e3.alternate = n2) : (n2.pendingProps = t3, n2.type = e3.type, n2.flags = 0, n2.subtreeFlags = 0, n2.deletions = null), n2.flags = e3.flags & 1206910976, n2.childLanes = e3.childLanes, n2.lanes = e3.lanes, n2.child = e3.child, n2.memoizedProps = e3.memoizedProps, n2.memoizedState = e3.memoizedState, n2.updateQueue = e3.updateQueue, t3 = e3.dependencies, n2.dependencies = t3 === null ? null : {lanes: t3.lanes, firstContext: t3.firstContext}, n2.sibling = e3.sibling, n2.index = e3.index, n2.ref = e3.ref, n2.refCleanup = e3.refCleanup, n2;
  }
  function Ji(e3, t3) {
    e3.flags &= 1206910978;
    var n2 = e3.alternate;
    return n2 === null ? (e3.childLanes = 0, e3.lanes = t3, e3.child = null, e3.subtreeFlags = 0, e3.memoizedProps = null, e3.memoizedState = null, e3.updateQueue = null, e3.dependencies = null, e3.stateNode = null) : (e3.childLanes = n2.childLanes, e3.lanes = n2.lanes, e3.child = n2.child, e3.subtreeFlags = 0, e3.deletions = null, e3.memoizedProps = n2.memoizedProps, e3.memoizedState = n2.memoizedState, e3.updateQueue = n2.updateQueue, e3.type = n2.type, t3 = n2.dependencies, e3.dependencies = t3 === null ? null : {lanes: t3.lanes, firstContext: t3.firstContext}), e3;
  }
  function Yi(e3, t3, n2, r2, i3, a2) {
    var o3 = 0;
    if (r2 = e3, typeof r2 == `function`)
      Ki(r2) && (o3 = 1);
    else if (typeof r2 == `string`)
      o3 = qm(e3, n2, Pe.current) ? 26 : e3 === `html` || e3 === `head` || e3 === `body` ? 27 : 5;
    else
      a:
        switch (r2) {
          case ye:
            return e3 = Gi(31, n2, t3, i3), e3.elementType = ye, e3.lanes = a2, e3;
          case le:
            return Xi(n2.children, i3, a2, t3);
          case ue:
            o3 = 8, i3 |= 24;
            break;
          case de:
            return e3 = Gi(12, n2, t3, i3 | 2), e3.elementType = de, e3.lanes = a2, e3;
          case he:
            return e3 = Gi(13, n2, t3, i3), e3.elementType = he, e3.lanes = a2, e3;
          case ge:
            return e3 = Gi(19, n2, t3, i3), e3.elementType = ge, e3.lanes = a2, e3;
          case be:
          case Se:
            return e3 = i3 | 32, e3 = Gi(30, n2, t3, e3), e3.elementType = Se, e3.lanes = a2, e3.stateNode = {autoName: null, paired: null, clones: null, ref: null}, e3;
          default:
            if (typeof r2 == `object` && r2)
              switch (r2.$$typeof) {
                case pe:
                  o3 = 10;
                  break a;
                case fe:
                  o3 = 9;
                  break a;
                case me:
                  o3 = 11;
                  break a;
                case _e:
                  o3 = 14;
                  break a;
                case ve:
                  o3 = 16, r2 = null;
                  break a;
              }
            o3 = 29, n2 = Error(s2(130, e3 === null ? `null` : typeof e3, ``)), r2 = null;
        }
    return t3 = Gi(o3, n2, t3, i3), t3.elementType = e3, t3.type = r2, t3.lanes = a2, t3;
  }
  function Xi(e3, t3, n2, r2) {
    return e3 = Gi(7, e3, r2, t3), e3.lanes = n2, e3;
  }
  function Zi(e3, t3, n2) {
    return e3 = Gi(6, e3, null, t3), e3.lanes = n2, e3;
  }
  function Qi(e3) {
    var t3 = Gi(18, null, null, 0);
    return t3.stateNode = e3, t3;
  }
  function $i(e3, t3, n2) {
    return t3 = Gi(4, e3.children === null ? [] : e3.children, e3.key, t3), t3.lanes = n2, t3.stateNode = {containerInfo: e3.containerInfo, pendingChildren: null, implementation: e3.implementation}, t3;
  }
  var ea = new WeakMap();
  function ta(e3, t3) {
    if (typeof e3 == `object` && e3) {
      var n2 = ea.get(e3);
      return n2 === void 0 ? (t3 = {value: e3, source: t3, stack: Je(t3)}, ea.set(e3, t3), t3) : n2;
    }
    return {value: e3, source: t3, stack: Je(t3)};
  }
  var na = [], ra = 0, ia = null, aa = 0, oa = [], sa = 0, ca = null, la = 1, ua = ``;
  function da(e3, t3) {
    na[ra++] = aa, na[ra++] = ia, ia = e3, aa = t3;
  }
  function fa(e3, t3, n2) {
    oa[sa++] = la, oa[sa++] = ua, oa[sa++] = ca, ca = e3;
    var r2 = la;
    e3 = ua;
    var i3 = 32 - ft(r2) - 1;
    r2 &= ~(1 << i3), n2 += 1;
    var a2 = 32 - ft(t3) + i3;
    if (30 < a2) {
      var o3 = i3 - i3 % 5;
      a2 = (r2 & (1 << o3) - 1).toString(32), r2 >>= o3, i3 -= o3, la = 1 << 32 - ft(t3) + i3 | n2 << i3 | r2, ua = a2 + e3;
    } else
      la = 1 << a2 | n2 << i3 | r2, ua = e3;
  }
  function pa(e3) {
    e3.return !== null && (da(e3, 1), fa(e3, 1, 0));
  }
  function ma(e3) {
    for (; e3 === ia; )
      ia = na[--ra], na[ra] = null, aa = na[--ra], na[ra] = null;
    for (; e3 === ca; )
      ca = oa[--sa], oa[sa] = null, ua = oa[--sa], oa[sa] = null, la = oa[--sa], oa[sa] = null;
  }
  function ha(e3, t3) {
    oa[sa++] = la, oa[sa++] = ua, oa[sa++] = ca, la = t3.id, ua = t3.overflow, ca = e3;
  }
  var D = null, O = null, k = false, ga = null, _a = false, va = Error(s2(519));
  function ya(e3) {
    throw Ta(ta(Error(s2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e3)), va;
  }
  function ba(e3) {
    var t3 = e3.stateNode, n2 = e3.type, r2 = e3.memoizedProps;
    switch (t3[It] = e3, t3[Lt] = r2, n2) {
      case `dialog`:
        Q(`cancel`, t3), Q(`close`, t3);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q(`load`, t3);
        break;
      case `video`:
      case `audio`:
        for (n2 = 0; n2 < zf.length; n2++)
          Q(zf[n2], t3);
        break;
      case `source`:
        Q(`error`, t3);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q(`error`, t3), Q(`load`, t3);
        break;
      case `details`:
        Q(`toggle`, t3);
        break;
      case `input`:
        Q(`invalid`, t3), vn(t3, r2.value, r2.defaultValue, r2.checked, r2.defaultChecked, r2.type, r2.name, true);
        break;
      case `select`:
        Q(`invalid`, t3);
        break;
      case `textarea`:
        Q(`invalid`, t3), Sn(t3, r2.value, r2.defaultValue, r2.children);
    }
    n2 = r2.children, typeof n2 != `string` && typeof n2 != `number` && typeof n2 != `bigint` || t3.textContent === `` + n2 || r2.suppressHydrationWarning === true || ep(t3.textContent, n2) ? (r2.popover != null && (Q(`beforetoggle`, t3), Q(`toggle`, t3)), r2.onScroll != null && Q(`scroll`, t3), r2.onScrollEnd != null && Q(`scrollend`, t3), r2.onClick != null && (t3.onclick = jn), t3 = true) : t3 = false, t3 || ya(e3, true);
  }
  function xa(e3) {
    for (D = e3.return; D; )
      switch (D.tag) {
        case 5:
        case 31:
        case 13:
          _a = false;
          return;
        case 27:
        case 3:
          _a = true;
          return;
        default:
          D = D.return;
      }
  }
  function Sa(e3) {
    if (e3 !== D)
      return false;
    if (!k)
      return xa(e3), k = true, false;
    var t3 = e3.tag, n2;
    if ((n2 = t3 !== 3 && t3 !== 27) && ((n2 = t3 === 5) && (n2 = e3.type, n2 = n2 === `form` || n2 === `button` || pp(e3.type, e3.memoizedProps)), n2 = !n2), n2 && O && ya(e3), xa(e3), t3 === 13) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3)
        throw Error(s2(317));
      O = dm(e3);
    } else if (t3 === 31) {
      if (e3 = e3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3)
        throw Error(s2(317));
      O = dm(e3);
    } else
      t3 === 27 ? (t3 = O, Sp(e3.type) ? (e3 = um, um = null, O = e3) : O = t3) : O = D ? lm(e3.stateNode.nextSibling) : null;
    return true;
  }
  function Ca() {
    O = D = null, k = false;
  }
  function wa() {
    var e3 = ga;
    return e3 !== null && (pd === null ? pd = e3 : pd.push.apply(pd, e3), ga = null), e3;
  }
  function Ta(e3) {
    ga === null ? ga = [e3] : ga.push(e3);
  }
  var Ea = Me(null), Da = null, Oa = null;
  function ka(e3, t3, n2) {
    w(Ea, t3._currentValue), t3._currentValue = n2;
  }
  function Aa(e3) {
    e3._currentValue = Ea.current, Ne(Ea);
  }
  function ja(e3, t3, n2) {
    for (; e3 !== null; ) {
      var r2 = e3.alternate;
      if ((e3.childLanes & t3) === t3 ? r2 !== null && (r2.childLanes & t3) !== t3 && (r2.childLanes |= t3) : (e3.childLanes |= t3, r2 !== null && (r2.childLanes |= t3)), e3 === n2)
        break;
      e3 = e3.return;
    }
  }
  function Ma(e3, t3, n2, r2) {
    var i3 = e3.child;
    for (i3 !== null && (i3.return = e3); i3 !== null; ) {
      var a2 = i3.dependencies;
      if (a2 !== null) {
        var o3 = i3.child;
        a2 = a2.firstContext;
        a:
          for (; a2 !== null; ) {
            var c3 = a2;
            a2 = i3;
            for (var l3 = 0; l3 < t3.length; l3++)
              if (c3.context === t3[l3]) {
                a2.lanes |= n2, c3 = a2.alternate, c3 !== null && (c3.lanes |= n2), ja(a2.return, n2, e3), r2 || (o3 = null);
                break a;
              }
            a2 = c3.next;
          }
      } else if (i3.tag === 18) {
        if (o3 = i3.return, o3 === null)
          throw Error(s2(341));
        o3.lanes |= n2, a2 = o3.alternate, a2 !== null && (a2.lanes |= n2), ja(o3, n2, e3), o3 = null;
      } else
        i3.tag === 13 && i3.memoizedState !== null && i3.memoizedState.dehydrated === null ? (i3.lanes |= n2, o3 = i3.alternate, o3 !== null && (o3.lanes |= n2), ja(i3.return, n2, e3), o3 = i3.child, o3 = o3 === null ? null : o3.sibling) : o3 = i3.child;
      if (o3 !== null)
        o3.return = i3;
      else
        for (o3 = i3; o3 !== null; ) {
          if (o3 === e3) {
            o3 = null;
            break;
          }
          if (i3 = o3.sibling, i3 !== null) {
            i3.return = o3.return, o3 = i3;
            break;
          }
          o3 = o3.return;
        }
      i3 = o3;
    }
  }
  function Na(e3, t3, n2, r2) {
    e3 = null;
    for (var i3 = t3, a2 = false; i3 !== null; ) {
      if (!a2) {
        if (i3.flags & 524288)
          a2 = true;
        else if (i3.flags & 262144)
          break;
      }
      if (i3.tag === 10) {
        var o3 = i3.alternate;
        if (o3 === null)
          throw Error(s2(387));
        if (o3 = o3.memoizedProps, o3 !== null) {
          var c3 = i3.type;
          ei(i3.pendingProps.value, o3.value) || (e3 === null ? e3 = [c3] : e3.push(c3));
        }
      } else if (i3 === Le.current) {
        if (o3 = i3.alternate, o3 === null)
          throw Error(s2(387));
        o3.memoizedState.memoizedState !== i3.memoizedState.memoizedState && (e3 === null ? e3 = [sh] : e3.push(sh));
      }
      i3 = i3.return;
    }
    return e3 !== null && Ma(t3, e3, n2, r2), t3.flags |= 262144, e3 !== null;
  }
  function Pa(e3) {
    for (e3 = e3.firstContext; e3 !== null; ) {
      if (!ei(e3.context._currentValue, e3.memoizedValue))
        return true;
      e3 = e3.next;
    }
    return false;
  }
  function Fa(e3) {
    Da = e3, Oa = null, e3 = e3.dependencies, e3 !== null && (e3.firstContext = null);
  }
  function Ia(e3) {
    return Ra(Da, e3);
  }
  function La(e3, t3) {
    return Da === null && Fa(e3), Ra(e3, t3);
  }
  function Ra(e3, t3) {
    var n2 = t3._currentValue;
    if (t3 = {context: t3, memoizedValue: n2, next: null}, Oa === null) {
      if (e3 === null)
        throw Error(s2(308));
      Oa = t3, e3.dependencies = {lanes: 0, firstContext: t3}, e3.flags |= 524288;
    } else
      Oa = Oa.next = t3;
    return n2;
  }
  var za = typeof AbortController < `u` ? AbortController : function() {
    var e3 = [], t3 = this.signal = {aborted: false, addEventListener: function(t4, n2) {
      e3.push(n2);
    }};
    this.abort = function() {
      t3.aborted = true, e3.forEach(function(e4) {
        return e4();
      });
    };
  }, Ba = t2.unstable_scheduleCallback, Va = t2.unstable_NormalPriority, A = {$$typeof: pe, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0};
  function Ha() {
    return {controller: new za(), data: new Map(), refCount: 0};
  }
  function Ua(e3) {
    e3.refCount--, e3.refCount === 0 && Ba(Va, function() {
      e3.controller.abort();
    });
  }
  function Wa(e3, t3) {
    if (e3.pendingLanes & 4194048) {
      var n2 = e3.transitionTypes;
      for (n2 === null && (n2 = e3.transitionTypes = []), e3 = 0; e3 < t3.length; e3++) {
        var r2 = t3[e3];
        n2.indexOf(r2) === -1 && n2.push(r2);
      }
    }
  }
  var Ga = null;
  function Ka(e3) {
    var t3 = e3.transitionTypes;
    return e3.transitionTypes = null, t3;
  }
  var qa = null, Ja = 0, Ya = 0, Xa = null;
  function Za(e3, t3) {
    if (qa === null) {
      var n2 = qa = [];
      Ja = 0, Ya = Pf(), Xa = {status: `pending`, value: void 0, then: function(e4) {
        n2.push(e4);
      }};
    }
    return Ja++, t3.then(Qa, Qa), t3;
  }
  function Qa() {
    if (--Ja === 0 && (Ga = null, qa !== null)) {
      Xa !== null && (Xa.status = `fulfilled`);
      var e3 = qa;
      qa = null, Ya = 0, Xa = null;
      for (var t3 = 0; t3 < e3.length; t3++)
        (0, e3[t3])();
    }
  }
  function $a(e3, t3) {
    var n2 = [], r2 = {status: `pending`, value: null, reason: null, then: function(e4) {
      n2.push(e4);
    }};
    return e3.then(function() {
      r2.status = `fulfilled`, r2.value = t3;
      for (var e4 = 0; e4 < n2.length; e4++)
        (0, n2[e4])(t3);
    }, function(e4) {
      for (r2.status = `rejected`, r2.reason = e4, e4 = 0; e4 < n2.length; e4++)
        (0, n2[e4])(void 0);
    }), r2;
  }
  var eo = S.S;
  S.S = function(e3, t3) {
    if (gd = et(), typeof t3 == `object` && t3 && typeof t3.then == `function` && Za(e3, t3), Ga !== null)
      for (var n2 = bf; n2 !== null; )
        Wa(n2, Ga), n2 = n2.next;
    if (n2 = e3.types, n2 !== null) {
      for (var r2 = bf; r2 !== null; )
        Wa(r2, n2), r2 = r2.next;
      if (Ya !== 0) {
        r2 = Ga, r2 === null && (r2 = Ga = []);
        for (var i3 = 0; i3 < n2.length; i3++) {
          var a2 = n2[i3];
          r2.indexOf(a2) === -1 && r2.push(a2);
        }
      }
    }
    eo !== null && eo(e3, t3);
  };
  var to = Me(null);
  function no() {
    var e3 = to.current;
    return e3 === null ? G.pooledCache : e3;
  }
  function ro(e3, t3) {
    t3 === null ? w(to, to.current) : w(to, t3.pool);
  }
  function io() {
    var e3 = no();
    return e3 === null ? null : {parent: A._currentValue, pool: e3};
  }
  var ao = Error(s2(460)), oo = Error(s2(474)), so = Error(s2(542)), co = {then: function() {
  }};
  function lo(e3) {
    return e3 = e3.status, e3 === `fulfilled` || e3 === `rejected`;
  }
  function uo(e3, t3, n2) {
    switch (n2 = e3[n2], n2 === void 0 ? e3.push(t3) : n2 !== t3 && (t3.then(jn, jn), t3 = n2), t3.status) {
      case `fulfilled`:
        return t3.value;
      case `rejected`:
        throw e3 = t3.reason, ho(e3), e3 === void 0 && !(`reason` in t3) ? Error(s2(600)) : e3;
      default:
        if (typeof t3.status == `string`)
          t3.then(jn, jn);
        else {
          if (e3 = G, e3 !== null && 100 < e3.shellSuspendCounter)
            throw Error(s2(482));
          e3 = t3, e3.status = `pending`, e3.then(function(e4) {
            if (t3.status === `pending`) {
              var n3 = t3;
              n3.status = `fulfilled`, n3.value = e4;
            }
          }, function(e4) {
            if (t3.status === `pending`) {
              var n3 = t3;
              n3.status = `rejected`, n3.reason = e4;
            }
          });
        }
        switch (t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e3 = t3.reason, ho(e3), e3;
        }
        throw po = t3, ao;
    }
  }
  function fo(e3) {
    try {
      var t3 = e3._init;
      return t3(e3._payload);
    } catch (e4) {
      throw typeof e4 == `object` && e4 && typeof e4.then == `function` ? (po = e4, ao) : e4;
    }
  }
  var po = null;
  function mo() {
    if (po === null)
      throw Error(s2(459));
    var e3 = po;
    return po = null, e3;
  }
  function ho(e3) {
    if (e3 === ao || e3 === so)
      throw Error(s2(483));
  }
  var go = null, _o = 0;
  function vo(e3) {
    var t3 = _o;
    return _o += 1, go === null && (go = []), uo(go, e3, t3);
  }
  function yo(e3, t3) {
    t3 = t3.props.ref, e3.ref = t3 === void 0 ? null : t3;
  }
  function bo(e3, t3) {
    throw t3.$$typeof === oe ? Error(s2(525)) : (e3 = Object.prototype.toString.call(t3), Error(s2(31, e3 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e3)));
  }
  function xo(e3) {
    function t3(t4, n3) {
      if (e3) {
        var r3 = t4.deletions;
        r3 === null ? (t4.deletions = [n3], t4.flags |= 16) : r3.push(n3);
      }
    }
    function n2(n3, r3) {
      if (!e3)
        return null;
      for (; r3 !== null; )
        t3(n3, r3), r3 = r3.sibling;
      return null;
    }
    function r2(e4) {
      for (var t4 = new Map(); e4 !== null; )
        e4.key === null ? t4.set(e4.index, e4) : t4.set(e4.key, e4), e4 = e4.sibling;
      return t4;
    }
    function i3(e4, t4) {
      return e4 = qi(e4, t4), e4.index = 0, e4.sibling = null, e4;
    }
    function a2(t4, n3, r3) {
      return t4.index = r3, e3 ? (r3 = t4.alternate, r3 === null ? (t4.flags |= 134217730, n3) : (r3 = r3.index, r3 < n3 ? (t4.flags |= 2, n3) : r3)) : (t4.flags |= 1048576, n3);
    }
    function o3(t4) {
      return e3 && t4.alternate === null && (t4.flags |= 134217730), t4;
    }
    function c3(e4, t4, n3, r3) {
      return t4 === null || t4.tag !== 6 ? (t4 = Zi(n3, e4.mode, r3), t4.return = e4, t4) : (t4 = i3(t4, n3), t4.return = e4, t4);
    }
    function l3(e4, t4, n3, r3) {
      var a3 = n3.type;
      return a3 === le ? (e4 = d3(e4, t4, n3.props.children, r3, n3.key), yo(e4, n3), e4) : t4 !== null && (t4.elementType === a3 || typeof a3 == `object` && a3 && a3.$$typeof === ve && fo(a3) === t4.type) ? (t4 = i3(t4, n3.props), yo(t4, n3), t4.return = e4, t4) : (t4 = Yi(n3.type, n3.key, n3.props, null, e4.mode, r3), yo(t4, n3), t4.return = e4, t4);
    }
    function u3(e4, t4, n3, r3) {
      return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n3.containerInfo || t4.stateNode.implementation !== n3.implementation ? (t4 = $i(n3, e4.mode, r3), t4.return = e4, t4) : (t4 = i3(t4, n3.children || []), t4.return = e4, t4);
    }
    function d3(e4, t4, n3, r3, a3) {
      return t4 === null || t4.tag !== 7 ? (t4 = Xi(n3, e4.mode, r3, a3), t4.return = e4, t4) : (t4 = i3(t4, n3), t4.return = e4, t4);
    }
    function f3(e4, t4, n3) {
      if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`)
        return t4 = Zi(`` + t4, e4.mode, n3), t4.return = e4, t4;
      if (typeof t4 == `object` && t4) {
        switch (t4.$$typeof) {
          case se:
            return n3 = Yi(t4.type, t4.key, t4.props, null, e4.mode, n3), yo(n3, t4), n3.return = e4, n3;
          case ce:
            return t4 = $i(t4, e4.mode, n3), t4.return = e4, t4;
          case ve:
            return t4 = fo(t4), f3(e4, t4, n3);
        }
        if (Oe(t4) || Te(t4))
          return t4 = Xi(t4, e4.mode, n3, null), t4.return = e4, t4;
        if (typeof t4.then == `function`)
          return f3(e4, vo(t4), n3);
        if (t4.$$typeof === pe)
          return f3(e4, La(e4, t4), n3);
        bo(e4, t4);
      }
      return null;
    }
    function p2(e4, t4, n3, r3) {
      var i4 = t4 === null ? null : t4.key;
      if (typeof n3 == `string` && n3 !== `` || typeof n3 == `number` || typeof n3 == `bigint`)
        return i4 === null ? c3(e4, t4, `` + n3, r3) : null;
      if (typeof n3 == `object` && n3) {
        switch (n3.$$typeof) {
          case se:
            return n3.key === i4 ? l3(e4, t4, n3, r3) : null;
          case ce:
            return n3.key === i4 ? u3(e4, t4, n3, r3) : null;
          case ve:
            return n3 = fo(n3), p2(e4, t4, n3, r3);
        }
        if (Oe(n3) || Te(n3))
          return i4 === null ? d3(e4, t4, n3, r3, null) : null;
        if (typeof n3.then == `function`)
          return p2(e4, t4, vo(n3), r3);
        if (n3.$$typeof === pe)
          return p2(e4, t4, La(e4, n3), r3);
        bo(e4, n3);
      }
      return null;
    }
    function m2(e4, t4, n3, r3, i4) {
      if (typeof r3 == `string` && r3 !== `` || typeof r3 == `number` || typeof r3 == `bigint`)
        return e4 = e4.get(n3) || null, c3(t4, e4, `` + r3, i4);
      if (typeof r3 == `object` && r3) {
        switch (r3.$$typeof) {
          case se:
            return e4 = e4.get(r3.key === null ? n3 : r3.key) || null, l3(t4, e4, r3, i4);
          case ce:
            return e4 = e4.get(r3.key === null ? n3 : r3.key) || null, u3(t4, e4, r3, i4);
          case ve:
            return r3 = fo(r3), m2(e4, t4, n3, r3, i4);
        }
        if (Oe(r3) || Te(r3))
          return e4 = e4.get(n3) || null, d3(t4, e4, r3, i4, null);
        if (typeof r3.then == `function`)
          return m2(e4, t4, n3, vo(r3), i4);
        if (r3.$$typeof === pe)
          return m2(e4, t4, n3, La(t4, r3), i4);
        bo(t4, r3);
      }
      return null;
    }
    function h2(i4, o4, s3, c4) {
      for (var l4 = null, u4 = null, d4 = o4, h3 = o4 = 0, g3 = null; d4 !== null && h3 < s3.length; h3++) {
        d4.index > h3 ? (g3 = d4, d4 = null) : g3 = d4.sibling;
        var _3 = p2(i4, d4, s3[h3], c4);
        if (_3 === null) {
          d4 === null && (d4 = g3);
          break;
        }
        e3 && d4 && _3.alternate === null && t3(i4, d4), o4 = a2(_3, o4, h3), u4 === null ? l4 = _3 : u4.sibling = _3, u4 = _3, d4 = g3;
      }
      if (h3 === s3.length)
        return n2(i4, d4), k && da(i4, h3), l4;
      if (d4 === null) {
        for (; h3 < s3.length; h3++)
          d4 = f3(i4, s3[h3], c4), d4 !== null && (o4 = a2(d4, o4, h3), u4 === null ? l4 = d4 : u4.sibling = d4, u4 = d4);
        return k && da(i4, h3), l4;
      }
      for (d4 = r2(d4); h3 < s3.length; h3++)
        g3 = m2(d4, i4, h3, s3[h3], c4), g3 !== null && (e3 && (_3 = g3.alternate, _3 !== null && d4.delete(_3.key === null ? h3 : _3.key)), o4 = a2(g3, o4, h3), u4 === null ? l4 = g3 : u4.sibling = g3, u4 = g3);
      return e3 && d4.forEach(function(e4) {
        return t3(i4, e4);
      }), k && da(i4, h3), l4;
    }
    function g2(i4, o4, c4, l4) {
      if (c4 == null)
        throw Error(s2(151));
      for (var u4 = null, d4 = null, h3 = o4, g3 = o4 = 0, _3 = null, v2 = c4.next(); h3 !== null && !v2.done; g3++, v2 = c4.next()) {
        h3.index > g3 ? (_3 = h3, h3 = null) : _3 = h3.sibling;
        var y2 = p2(i4, h3, v2.value, l4);
        if (y2 === null) {
          h3 === null && (h3 = _3);
          break;
        }
        e3 && h3 && y2.alternate === null && t3(i4, h3), o4 = a2(y2, o4, g3), d4 === null ? u4 = y2 : d4.sibling = y2, d4 = y2, h3 = _3;
      }
      if (v2.done)
        return n2(i4, h3), k && da(i4, g3), u4;
      if (h3 === null) {
        for (; !v2.done; g3++, v2 = c4.next())
          v2 = f3(i4, v2.value, l4), v2 !== null && (o4 = a2(v2, o4, g3), d4 === null ? u4 = v2 : d4.sibling = v2, d4 = v2);
        return k && da(i4, g3), u4;
      }
      for (h3 = r2(h3); !v2.done; g3++, v2 = c4.next())
        v2 = m2(h3, i4, g3, v2.value, l4), v2 !== null && (e3 && (_3 = v2.alternate, _3 !== null && h3.delete(_3.key === null ? g3 : _3.key)), o4 = a2(v2, o4, g3), d4 === null ? u4 = v2 : d4.sibling = v2, d4 = v2);
      return e3 && h3.forEach(function(e4) {
        return t3(i4, e4);
      }), k && da(i4, g3), u4;
    }
    function _2(e4, r3, a3, c4) {
      if (typeof a3 == `object` && a3 && a3.type === le && a3.key === null && a3.props.ref === void 0 && (a3 = a3.props.children), typeof a3 == `object` && a3) {
        switch (a3.$$typeof) {
          case se:
            a: {
              for (var l4 = a3.key; r3 !== null; ) {
                if (r3.key === l4) {
                  if (l4 = a3.type, l4 === le) {
                    if (r3.tag === 7) {
                      n2(e4, r3.sibling), c4 = i3(r3, a3.props.children), yo(c4, a3), c4.return = e4, e4 = c4;
                      break a;
                    }
                  } else if (r3.elementType === l4 || typeof l4 == `object` && l4 && l4.$$typeof === ve && fo(l4) === r3.type) {
                    n2(e4, r3.sibling), c4 = i3(r3, a3.props), yo(c4, a3), c4.return = e4, e4 = c4;
                    break a;
                  }
                  n2(e4, r3);
                  break;
                }
                t3(e4, r3), r3 = r3.sibling;
              }
              a3.type === le ? (c4 = Xi(a3.props.children, e4.mode, c4, a3.key), yo(c4, a3), c4.return = e4, e4 = c4) : (c4 = Yi(a3.type, a3.key, a3.props, null, e4.mode, c4), yo(c4, a3), c4.return = e4, e4 = c4);
            }
            return o3(e4);
          case ce:
            a: {
              for (l4 = a3.key; r3 !== null; ) {
                if (r3.key === l4) {
                  if (r3.tag === 4 && r3.stateNode.containerInfo === a3.containerInfo && r3.stateNode.implementation === a3.implementation) {
                    n2(e4, r3.sibling), c4 = i3(r3, a3.children || []), c4.return = e4, e4 = c4;
                    break a;
                  }
                  n2(e4, r3);
                  break;
                }
                t3(e4, r3), r3 = r3.sibling;
              }
              c4 = $i(a3, e4.mode, c4), c4.return = e4, e4 = c4;
            }
            return o3(e4);
          case ve:
            return a3 = fo(a3), _2(e4, r3, a3, c4);
        }
        if (Oe(a3))
          return h2(e4, r3, a3, c4);
        if (Te(a3)) {
          if (l4 = Te(a3), typeof l4 != `function`)
            throw Error(s2(150));
          return a3 = l4.call(a3), g2(e4, r3, a3, c4);
        }
        if (typeof a3.then == `function`)
          return _2(e4, r3, vo(a3), c4);
        if (a3.$$typeof === pe)
          return _2(e4, r3, La(e4, a3), c4);
        bo(e4, a3);
      }
      return typeof a3 == `string` && a3 !== `` || typeof a3 == `number` || typeof a3 == `bigint` ? (a3 = `` + a3, r3 !== null && r3.tag === 6 ? (n2(e4, r3.sibling), c4 = i3(r3, a3), c4.return = e4, e4 = c4) : (n2(e4, r3), c4 = Zi(a3, e4.mode, c4), c4.return = e4, e4 = c4), o3(e4)) : n2(e4, r3);
    }
    return function(e4, t4, n3, r3) {
      try {
        _o = 0;
        var i4 = _2(e4, t4, n3, r3);
        return go = null, i4;
      } catch (t5) {
        if (t5 === ao || t5 === so)
          throw t5;
        var a3 = Gi(29, t5, null, e4.mode);
        return a3.lanes = r3, a3.return = e4, a3;
      }
    };
  }
  var So = xo(true), Co = xo(false), wo = false;
  function To(e3) {
    e3.updateQueue = {baseState: e3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, lanes: 0, hiddenCallbacks: null}, callbacks: null};
  }
  function Eo(e3, t3) {
    e3 = e3.updateQueue, t3.updateQueue === e3 && (t3.updateQueue = {baseState: e3.baseState, firstBaseUpdate: e3.firstBaseUpdate, lastBaseUpdate: e3.lastBaseUpdate, shared: e3.shared, callbacks: null});
  }
  function Do(e3) {
    return {lane: e3, tag: 0, payload: null, callback: null, next: null};
  }
  function Oo(e3, t3, n2) {
    var r2 = e3.updateQueue;
    if (r2 === null)
      return null;
    if (r2 = r2.shared, W & 2) {
      var i3 = r2.pending;
      return i3 === null ? t3.next = t3 : (t3.next = i3.next, i3.next = t3), r2.pending = t3, t3 = Hi(e3), Vi(e3, null, n2), t3;
    }
    return Ri(e3, r2, t3, n2), Hi(e3);
  }
  function ko(e3, t3, n2) {
    if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n2 & 4194048)) {
      var r2 = t3.lanes;
      r2 &= e3.pendingLanes, n2 |= r2, t3.lanes = n2, kt(e3, n2);
    }
  }
  function Ao(e3, t3) {
    var n2 = e3.updateQueue, r2 = e3.alternate;
    if (r2 !== null && (r2 = r2.updateQueue, n2 === r2)) {
      var i3 = null, a2 = null;
      if (n2 = n2.firstBaseUpdate, n2 !== null) {
        do {
          var o3 = {lane: n2.lane, tag: n2.tag, payload: n2.payload, callback: null, next: null};
          a2 === null ? i3 = a2 = o3 : a2 = a2.next = o3, n2 = n2.next;
        } while (n2 !== null);
        a2 === null ? i3 = a2 = t3 : a2 = a2.next = t3;
      } else
        i3 = a2 = t3;
      n2 = {baseState: r2.baseState, firstBaseUpdate: i3, lastBaseUpdate: a2, shared: r2.shared, callbacks: r2.callbacks}, e3.updateQueue = n2;
      return;
    }
    e3 = n2.lastBaseUpdate, e3 === null ? n2.firstBaseUpdate = t3 : e3.next = t3, n2.lastBaseUpdate = t3;
  }
  var jo = false;
  function Mo() {
    if (jo) {
      var e3 = Xa;
      if (e3 !== null)
        throw e3;
    }
  }
  function No(e3, t3, n2, r2) {
    jo = false;
    var i3 = e3.updateQueue;
    wo = false;
    var a2 = i3.firstBaseUpdate, o3 = i3.lastBaseUpdate, s3 = i3.shared.pending;
    if (s3 !== null) {
      i3.shared.pending = null;
      var c3 = s3, l3 = c3.next;
      c3.next = null, o3 === null ? a2 = l3 : o3.next = l3, o3 = c3;
      var u3 = e3.alternate;
      u3 !== null && (u3 = u3.updateQueue, s3 = u3.lastBaseUpdate, s3 !== o3 && (s3 === null ? u3.firstBaseUpdate = l3 : s3.next = l3, u3.lastBaseUpdate = c3));
    }
    if (a2 !== null) {
      var d3 = i3.baseState;
      o3 = 0, u3 = l3 = c3 = null, s3 = a2;
      do {
        var f3 = s3.lane & -536870913, p2 = f3 !== s3.lane;
        if (p2 ? (q & f3) === f3 : (r2 & f3) === f3) {
          f3 !== 0 && f3 === Ya && (jo = true), u3 !== null && (u3 = u3.next = {lane: 0, tag: s3.tag, payload: s3.payload, callback: null, next: null});
          a: {
            var m2 = e3, h2 = s3;
            f3 = t3;
            var g2 = n2;
            switch (h2.tag) {
              case 1:
                if (m2 = h2.payload, typeof m2 == `function`) {
                  d3 = m2.call(g2, d3, f3);
                  break a;
                }
                d3 = m2;
                break a;
              case 3:
                m2.flags = m2.flags & -65537 | 128;
              case 0:
                if (m2 = h2.payload, f3 = typeof m2 == `function` ? m2.call(g2, d3, f3) : m2, f3 == null)
                  break a;
                d3 = x({}, d3, f3);
                break a;
              case 2:
                wo = true;
            }
          }
          f3 = s3.callback, f3 !== null && (e3.flags |= 64, p2 && (e3.flags |= 8192), p2 = i3.callbacks, p2 === null ? i3.callbacks = [f3] : p2.push(f3));
        } else
          p2 = {lane: f3, tag: s3.tag, payload: s3.payload, callback: s3.callback, next: null}, u3 === null ? (l3 = u3 = p2, c3 = d3) : u3 = u3.next = p2, o3 |= f3;
        if (s3 = s3.next, s3 === null) {
          if (s3 = i3.shared.pending, s3 === null)
            break;
          p2 = s3, s3 = p2.next, p2.next = null, i3.lastBaseUpdate = p2, i3.shared.pending = null;
        }
      } while (1);
      u3 === null && (c3 = d3), i3.baseState = c3, i3.firstBaseUpdate = l3, i3.lastBaseUpdate = u3, a2 === null && (i3.shared.lanes = 0), sd |= o3, e3.lanes = o3, e3.memoizedState = d3;
    }
  }
  function Po(e3, t3) {
    if (typeof e3 != `function`)
      throw Error(s2(191, e3));
    e3.call(t3);
  }
  function Fo(e3, t3) {
    var n2 = e3.callbacks;
    if (n2 !== null)
      for (e3.callbacks = null, e3 = 0; e3 < n2.length; e3++)
        Po(n2[e3], t3);
  }
  var Io = Me(null), Lo = Me(0);
  function Ro(e3, t3) {
    e3 = od, w(Lo, e3), w(Io, t3), od = e3 | t3.baseLanes;
  }
  function zo() {
    w(Lo, od), w(Io, Io.current);
  }
  function Bo() {
    od = Lo.current, Ne(Io), Ne(Lo);
  }
  var j = Me(null), Vo = null;
  function Ho(e3) {
    var t3 = e3.alternate;
    w(qo, qo.current & 1), w(j, e3), Vo === null && (t3 === null || Io.current !== null || t3.memoizedState !== null) && (Vo = e3);
  }
  function Uo(e3) {
    w(qo, qo.current), w(j, e3), Vo === null && (Vo = e3);
  }
  function Wo(e3) {
    e3.tag === 22 ? (w(qo, qo.current), w(j, e3), Vo === null && (Vo = e3)) : Go();
  }
  function Go() {
    w(qo, qo.current), w(j, j.current);
  }
  function Ko(e3) {
    Ne(j), Vo === e3 && (Vo = null), Ne(qo);
  }
  var qo = Me(0);
  function Jo(e3, t3) {
    w(j, j.current), w(qo, t3);
  }
  function Yo(e3) {
    Ne(qo), Ne(j), Vo === e3 && (Vo = null);
  }
  function Xo(e3) {
    for (var t3 = e3; t3 !== null; ) {
      if (t3.tag === 13) {
        var n2 = t3.memoizedState;
        if (n2 !== null && (n2 = n2.dehydrated, n2 === null || om(n2) || sm(n2)))
          return t3;
      } else if (t3.tag === 19 && t3.memoizedProps.revealOrder !== `independent`) {
        if (t3.flags & 128)
          return t3;
      } else if (t3.child !== null) {
        t3.child.return = t3, t3 = t3.child;
        continue;
      }
      if (t3 === e3)
        break;
      for (; t3.sibling === null; ) {
        if (t3.return === null || t3.return === e3)
          return null;
        t3 = t3.return;
      }
      t3.sibling.return = t3.return, t3 = t3.sibling;
    }
    return null;
  }
  var Zo = 0, M = null, N = null, P = null, Qo = false, $o = false, es = false, ts = 0, ns = 0, rs = null, is = 0;
  function F() {
    throw Error(s2(321));
  }
  function as(e3, t3) {
    if (t3 === null)
      return false;
    for (var n2 = 0; n2 < t3.length && n2 < e3.length; n2++)
      if (!ei(e3[n2], t3[n2]))
        return false;
    return true;
  }
  function os(e3, t3, n2, r2, i3, a2) {
    return Zo = a2, M = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, S.H = e3 === null || e3.memoizedState === null ? Sc : Cc, es = false, a2 = n2(r2, i3), es = false, $o && (a2 = cs(t3, n2, r2, i3)), ss(e3), a2;
  }
  function ss(e3) {
    S.H = xc;
    var t3 = N !== null && N.next !== null;
    if (Zo = 0, P = N = M = null, Qo = false, ns = 0, rs = null, t3)
      throw Error(s2(300));
    e3 === null || L || (e3 = e3.dependencies, e3 !== null && Pa(e3) && (L = true));
  }
  function cs(e3, t3, n2, r2) {
    M = e3;
    var i3 = 0;
    do {
      if ($o && (rs = null), ns = 0, $o = false, 25 <= i3)
        throw Error(s2(301));
      if (i3 += 1, P = N = null, e3.updateQueue != null) {
        var a2 = e3.updateQueue;
        a2.lastEffect = null, a2.events = null, a2.stores = null, a2.memoCache != null && (a2.memoCache.index = 0);
      }
      S.H = wc, a2 = t3(n2, r2);
    } while ($o);
    return a2;
  }
  function ls() {
    var e3 = S.H, t3 = e3.useState()[0];
    return t3 = typeof t3.then == `function` ? hs(t3) : t3, e3 = e3.useState()[0], (N === null ? null : N.memoizedState) !== e3 && (M.flags |= 1024), t3;
  }
  function us() {
    var e3 = ts !== 0;
    return ts = 0, e3;
  }
  function ds(e3, t3, n2) {
    t3.updateQueue = e3.updateQueue, t3.flags &= -2053, e3.lanes &= ~n2;
  }
  function fs(e3) {
    if (Qo) {
      for (e3 = e3.memoizedState; e3 !== null; ) {
        var t3 = e3.queue;
        t3 !== null && (t3.pending = null), e3 = e3.next;
      }
      Qo = false;
    }
    Zo = 0, P = N = M = null, $o = false, ns = ts = 0, rs = null;
  }
  function ps() {
    var e3 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return P === null ? M.memoizedState = P = e3 : P = P.next = e3, P;
  }
  function I() {
    if (N === null) {
      var e3 = M.alternate;
      e3 = e3 === null ? null : e3.memoizedState;
    } else
      e3 = N.next;
    var t3 = P === null ? M.memoizedState : P.next;
    if (t3 !== null)
      P = t3, N = e3;
    else {
      if (e3 === null)
        throw M.alternate === null ? Error(s2(467)) : Error(s2(310));
      N = e3, e3 = {memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null}, P === null ? M.memoizedState = P = e3 : P = P.next = e3;
    }
    return P;
  }
  function ms() {
    return {lastEffect: null, events: null, stores: null, memoCache: null};
  }
  function hs(e3) {
    var t3 = ns;
    return ns += 1, rs === null && (rs = []), e3 = uo(rs, e3, t3), t3 = M, (P === null ? t3.memoizedState : P.next) === null && (t3 = t3.alternate, S.H = t3 === null || t3.memoizedState === null ? Sc : Cc), e3;
  }
  function gs(e3) {
    if (typeof e3 == `object` && e3) {
      if (typeof e3.then == `function`)
        return hs(e3);
      if (e3.$$typeof === Ce)
        return;
      if (e3.$$typeof === pe)
        return Ia(e3);
    }
    throw Error(s2(438, String(e3)));
  }
  function _s(e3) {
    var t3 = null, n2 = M.updateQueue;
    if (n2 !== null && (t3 = n2.memoCache), t3 == null) {
      var r2 = M.alternate;
      r2 !== null && (r2 = r2.updateQueue, r2 !== null && (r2 = r2.memoCache, r2 != null && (t3 = {data: r2.data.map(function(e4) {
        return e4.slice();
      }), index: 0})));
    }
    if (t3 ?? (t3 = {data: [], index: 0}), n2 === null && (n2 = ms(), M.updateQueue = n2), n2.memoCache = t3, n2 = t3.data[t3.index], n2 === void 0)
      for (n2 = t3.data[t3.index] = Array(e3), r2 = 0; r2 < e3; r2++)
        n2[r2] = xe;
    return t3.index++, n2;
  }
  function vs(e3, t3) {
    return typeof t3 == `function` ? t3(e3) : t3;
  }
  function ys(e3) {
    return bs(I(), N, e3);
  }
  function bs(e3, t3, n2) {
    var r2 = e3.queue;
    if (r2 === null)
      throw Error(s2(311));
    r2.lastRenderedReducer = n2;
    var i3 = e3.baseQueue, a2 = r2.pending;
    if (a2 !== null) {
      if (i3 !== null) {
        var o3 = i3.next;
        i3.next = a2.next, a2.next = o3;
      }
      t3.baseQueue = i3 = a2, r2.pending = null;
    }
    if (a2 = e3.baseState, i3 === null)
      e3.memoizedState = a2;
    else {
      t3 = i3.next;
      var c3 = o3 = null, l3 = null, u3 = t3, d3 = false;
      do {
        var f3 = u3.lane & -536870913;
        if (f3 === u3.lane ? (Zo & f3) === f3 : (q & f3) === f3) {
          var p2 = u3.revertLane;
          if (p2 === 0)
            l3 !== null && (l3 = l3.next = {lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null}), f3 === Ya && (d3 = true);
          else if ((Zo & p2) === p2) {
            u3 = u3.next, p2 === Ya && (d3 = true);
            continue;
          } else
            f3 = {lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null}, l3 === null ? (c3 = l3 = f3, o3 = a2) : l3 = l3.next = f3, M.lanes |= p2, sd |= p2;
          f3 = u3.action, es && n2(a2, f3), a2 = u3.hasEagerState ? u3.eagerState : n2(a2, f3);
        } else
          p2 = {lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null}, l3 === null ? (c3 = l3 = p2, o3 = a2) : l3 = l3.next = p2, M.lanes |= f3, sd |= f3;
        u3 = u3.next;
      } while (u3 !== null && u3 !== t3);
      if (l3 === null ? o3 = a2 : l3.next = c3, !ei(a2, e3.memoizedState) && (L = true, d3 && (n2 = Xa, n2 !== null)))
        throw n2;
      e3.memoizedState = a2, e3.baseState = o3, e3.baseQueue = l3, r2.lastRenderedState = a2;
    }
    return i3 === null && (r2.lanes = 0), [e3.memoizedState, r2.dispatch];
  }
  function xs(e3) {
    var t3 = I(), n2 = t3.queue;
    if (n2 === null)
      throw Error(s2(311));
    n2.lastRenderedReducer = e3;
    var r2 = n2.dispatch, i3 = n2.pending, a2 = t3.memoizedState;
    if (i3 !== null) {
      n2.pending = null;
      var o3 = i3 = i3.next;
      do
        a2 = e3(a2, o3.action), o3 = o3.next;
      while (o3 !== i3);
      ei(a2, t3.memoizedState) || (L = true), t3.memoizedState = a2, t3.baseQueue === null && (t3.baseState = a2), n2.lastRenderedState = a2;
    }
    return [a2, r2];
  }
  function Ss(e3, t3, n2) {
    var r2 = M, i3 = I(), a2 = k;
    if (a2) {
      if (n2 === void 0)
        throw Error(s2(407));
      n2 = n2();
    } else
      n2 = t3();
    var o3 = !ei((N || i3).memoizedState, n2);
    if (o3 && (i3.memoizedState = n2, L = true), i3 = i3.queue, qs(Ts.bind(null, r2, i3, e3), [e3]), e3 = i3.getSnapshot !== t3 || o3 || P !== null && !!(P.memoizedState.tag & 1), Hs(e3 ? 9 : 8, {destroy: void 0}, ws.bind(null, r2, i3, n2, t3), null), e3) {
      if (r2.flags |= 2048, G === null)
        throw Error(s2(349));
      a2 || Zo & 127 || Cs(r2, t3, n2);
    }
    return n2;
  }
  function Cs(e3, t3, n2) {
    e3.flags |= 16384, e3 = {getSnapshot: t3, value: n2}, t3 = M.updateQueue, t3 === null ? (t3 = ms(), M.updateQueue = t3, t3.stores = [e3]) : (n2 = t3.stores, n2 === null ? t3.stores = [e3] : n2.push(e3));
  }
  function ws(e3, t3, n2, r2) {
    t3.value = n2, t3.getSnapshot = r2, Es(t3) && Ds(e3);
  }
  function Ts(e3, t3, n2) {
    return n2(function() {
      Es(t3) && Ds(e3);
    });
  }
  function Es(e3) {
    var t3 = e3.getSnapshot;
    e3 = e3.value;
    try {
      var n2 = t3();
      return !ei(e3, n2);
    } catch {
      return true;
    }
  }
  function Ds(e3) {
    var t3 = Bi(e3, 2);
    t3 !== null && Pd(t3, e3, 2);
  }
  function Os(e3) {
    var t3 = ps();
    if (typeof e3 == `function`) {
      var n2 = e3;
      if (e3 = n2(), es) {
        dt(true);
        try {
          n2();
        } finally {
          dt(false);
        }
      }
    }
    return t3.memoizedState = t3.baseState = e3, t3.queue = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vs, lastRenderedState: e3}, t3;
  }
  function ks(e3, t3, n2, r2) {
    return e3.baseState = n2, bs(e3, N, typeof r2 == `function` ? r2 : vs);
  }
  function As(e3, t3, n2, r2, i3) {
    if (vc(e3))
      throw Error(s2(485));
    if (e3 = t3.action, e3 !== null) {
      var a2 = {payload: i3, action: e3, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e4) {
        a2.listeners.push(e4);
      }};
      S.T === null ? a2.isTransition = false : n2(true), r2(a2), n2 = t3.pending, n2 === null ? (a2.next = t3.pending = a2, js(t3, a2)) : (a2.next = n2.next, t3.pending = n2.next = a2);
    }
  }
  function js(e3, t3) {
    var n2 = t3.action, r2 = t3.payload, i3 = e3.state;
    if (t3.isTransition) {
      var a2 = S.T, o3 = {};
      o3.types = a2 === null ? null : a2.types, S.T = o3;
      try {
        var s3 = n2(i3, r2), c3 = S.S;
        c3 !== null && c3(o3, s3), Ms(e3, t3, s3);
      } catch (n3) {
        Ps(e3, t3, n3);
      } finally {
        a2 !== null && o3.types !== null && (a2.types = o3.types), S.T = a2;
      }
    } else
      try {
        a2 = n2(i3, r2), Ms(e3, t3, a2);
      } catch (n3) {
        Ps(e3, t3, n3);
      }
  }
  function Ms(e3, t3, n2) {
    typeof n2 == `object` && n2 && typeof n2.then == `function` ? n2.then(function(n3) {
      Ns(e3, t3, n3);
    }, function(n3) {
      return Ps(e3, t3, n3);
    }) : Ns(e3, t3, n2);
  }
  function Ns(e3, t3, n2) {
    t3.status = `fulfilled`, t3.value = n2, Fs(t3), e3.state = n2, t3 = e3.pending, t3 !== null && (n2 = t3.next, n2 === t3 ? e3.pending = null : (n2 = n2.next, t3.next = n2, js(e3, n2)));
  }
  function Ps(e3, t3, n2) {
    var r2 = e3.pending;
    if (e3.pending = null, r2 !== null) {
      r2 = r2.next;
      do
        t3.status = `rejected`, t3.reason = n2, Fs(t3), t3 = t3.next;
      while (t3 !== r2);
    }
    e3.action = null;
  }
  function Fs(e3) {
    e3 = e3.listeners;
    for (var t3 = 0; t3 < e3.length; t3++)
      (0, e3[t3])();
  }
  function Is(e3, t3) {
    return t3;
  }
  function Ls(e3, t3) {
    if (k) {
      var n2 = G.formState;
      if (n2 !== null) {
        a: {
          var r2 = M;
          if (k) {
            if (O) {
              b: {
                for (var i3 = O, a2 = _a; i3.nodeType !== 8; ) {
                  if (!a2) {
                    i3 = null;
                    break b;
                  }
                  if (i3 = lm(i3.nextSibling), i3 === null) {
                    i3 = null;
                    break b;
                  }
                }
                a2 = i3.data, i3 = a2 === `F!` || a2 === `F` ? i3 : null;
              }
              if (i3) {
                O = lm(i3.nextSibling), r2 = i3.data === `F!`;
                break a;
              }
            }
            ya(r2);
          }
          r2 = false;
        }
        r2 && (t3 = n2[0]);
      }
    }
    return n2 = ps(), n2.memoizedState = n2.baseState = t3, r2 = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Is, lastRenderedState: t3}, n2.queue = r2, n2 = hc.bind(null, M, r2), r2.dispatch = n2, r2 = Os(false), a2 = _c.bind(null, M, false, r2.queue), r2 = ps(), i3 = {state: t3, dispatch: null, action: e3, pending: null}, r2.queue = i3, n2 = As.bind(null, M, i3, a2, n2), i3.dispatch = n2, r2.memoizedState = e3, [t3, n2, false];
  }
  function Rs(e3) {
    return zs(I(), N, e3);
  }
  function zs(e3, t3, n2) {
    if (t3 = bs(e3, t3, Is)[0], e3 = ys(vs)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`)
      try {
        var r2 = hs(t3);
      } catch (e4) {
        throw e4 === ao ? so : e4;
      }
    else
      r2 = t3;
    t3 = I();
    var i3 = t3.queue, a2 = i3.dispatch;
    return n2 !== t3.memoizedState && (M.flags |= 2048, Hs(9, {destroy: void 0}, Bs.bind(null, i3, n2), null)), [r2, a2, e3];
  }
  function Bs(e3, t3) {
    e3.action = t3;
  }
  function Vs(e3) {
    var t3 = I(), n2 = N;
    if (n2 !== null)
      return zs(t3, n2, e3);
    I(), t3 = t3.memoizedState, n2 = I();
    var r2 = n2.queue.dispatch;
    return n2.memoizedState = e3, [t3, r2, false];
  }
  function Hs(e3, t3, n2, r2) {
    return e3 = {tag: e3, create: n2, deps: r2, inst: t3, next: null}, t3 = M.updateQueue, t3 === null && (t3 = ms(), M.updateQueue = t3), n2 = t3.lastEffect, n2 === null ? t3.lastEffect = e3.next = e3 : (r2 = n2.next, n2.next = e3, e3.next = r2, t3.lastEffect = e3), e3;
  }
  function Us() {
    return I().memoizedState;
  }
  function Ws(e3, t3, n2, r2) {
    var i3 = ps();
    M.flags |= e3, i3.memoizedState = Hs(1 | t3, {destroy: void 0}, n2, r2 === void 0 ? null : r2);
  }
  function Gs(e3, t3, n2, r2) {
    var i3 = I();
    r2 = r2 === void 0 ? null : r2;
    var a2 = i3.memoizedState.inst;
    N !== null && r2 !== null && as(r2, N.memoizedState.deps) ? i3.memoizedState = Hs(t3, a2, n2, r2) : (M.flags |= e3, i3.memoizedState = Hs(1 | t3, a2, n2, r2));
  }
  function Ks(e3, t3) {
    Ws(8390656, 8, e3, t3);
  }
  function qs(e3, t3) {
    Gs(2048, 8, e3, t3);
  }
  function Js(e3) {
    M.flags |= 4;
    var t3 = M.updateQueue;
    if (t3 === null)
      t3 = ms(), M.updateQueue = t3, t3.events = [e3];
    else {
      var n2 = t3.events;
      n2 === null ? t3.events = [e3] : n2.push(e3);
    }
  }
  function Ys(e3) {
    var t3 = I().memoizedState;
    return Js({ref: t3, nextImpl: e3}), function() {
      if (W & 2)
        throw Error(s2(440));
      return t3.impl.apply(void 0, arguments);
    };
  }
  function Xs(e3, t3) {
    return Gs(4, 2, e3, t3);
  }
  function Zs(e3, t3) {
    return Gs(4, 4, e3, t3);
  }
  function Qs(e3, t3) {
    if (typeof t3 == `function`) {
      e3 = e3();
      var n2 = t3(e3);
      return function() {
        typeof n2 == `function` ? n2() : t3(null);
      };
    }
    if (t3 != null)
      return e3 = e3(), t3.current = e3, function() {
        t3.current = null;
      };
  }
  function $s(e3, t3, n2) {
    n2 = n2 == null ? null : n2.concat([e3]), Gs(4, 4, Qs.bind(null, t3, e3), n2);
  }
  function ec() {
  }
  function tc(e3, t3) {
    var n2 = I();
    t3 = t3 === void 0 ? null : t3;
    var r2 = n2.memoizedState;
    return t3 !== null && as(t3, r2[1]) ? r2[0] : (n2.memoizedState = [e3, t3], e3);
  }
  function nc(e3, t3) {
    var n2 = I();
    t3 = t3 === void 0 ? null : t3;
    var r2 = n2.memoizedState;
    if (t3 !== null && as(t3, r2[1]))
      return r2[0];
    if (r2 = e3(), es) {
      dt(true);
      try {
        e3();
      } finally {
        dt(false);
      }
    }
    return n2.memoizedState = [r2, t3], r2;
  }
  function rc(e3, t3, n2) {
    return n2 === void 0 || Zo & 1073741824 && !(q & 261930) ? e3.memoizedState = t3 : (e3.memoizedState = n2, e3 = Md(), M.lanes |= e3, sd |= e3, n2);
  }
  function ic(e3, t3, n2, r2) {
    return ei(n2, t3) ? n2 : Io.current === null ? !(Zo & 106) || Zo & 1073741824 && !(q & 261930) ? (L = true, e3.memoizedState = n2) : (e3 = Md(), M.lanes |= e3, sd |= e3, t3) : (e3 = rc(e3, n2, r2), ei(e3, t3) || (L = true), e3);
  }
  function ac(e3, t3, n2, r2, i3) {
    var a2 = C.p;
    C.p = a2 !== 0 && 8 > a2 ? a2 : 8;
    var o3 = S.T, s3 = {};
    s3.types = o3 === null ? null : o3.types, S.T = s3, _c(e3, false, t3, n2);
    try {
      var c3 = i3(), l3 = S.S;
      l3 !== null && l3(s3, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? gc(e3, t3, $a(c3, r2), jd(e3)) : gc(e3, t3, r2, jd(e3));
    } catch (n3) {
      gc(e3, t3, {then: function() {
      }, status: `rejected`, reason: n3}, jd());
    } finally {
      C.p = a2, o3 !== null && s3.types !== null && (o3.types = s3.types), S.T = o3;
    }
  }
  function oc() {
  }
  function sc(e3, t3, n2, r2) {
    if (e3.tag !== 5)
      throw Error(s2(476));
    var i3 = cc(e3).queue;
    ac(e3, i3, t3, ke, n2 === null ? oc : function() {
      return lc(e3), n2(r2);
    });
  }
  function cc(e3) {
    var t3 = e3.memoizedState;
    if (t3 !== null)
      return t3;
    t3 = {memoizedState: ke, baseState: ke, baseQueue: null, queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vs, lastRenderedState: ke}, next: null};
    var n2 = {};
    return t3.next = {memoizedState: n2, baseState: n2, baseQueue: null, queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vs, lastRenderedState: n2}, next: null}, e3.memoizedState = t3, e3 = e3.alternate, e3 !== null && (e3.memoizedState = t3), t3;
  }
  function lc(e3) {
    var t3 = cc(e3);
    t3.next === null && (t3 = e3.alternate.memoizedState), gc(e3, t3.next.queue, {}, jd());
  }
  function uc() {
    return Ia(sh);
  }
  function dc() {
    return I().memoizedState;
  }
  function fc() {
    return I().memoizedState;
  }
  function pc(e3) {
    for (var t3 = e3.return; t3 !== null; ) {
      switch (t3.tag) {
        case 24:
        case 3:
          var n2 = jd();
          e3 = Do(n2);
          var r2 = Oo(t3, e3, n2);
          r2 !== null && (Pd(r2, t3, n2), ko(r2, t3, n2)), t3 = {cache: Ha()}, e3.payload = t3;
          return;
      }
      t3 = t3.return;
    }
  }
  function mc(e3, t3, n2) {
    var r2 = jd();
    n2 = {lane: r2, revertLane: 0, gesture: null, action: n2, hasEagerState: false, eagerState: null, next: null}, vc(e3) ? yc(t3, n2) : (n2 = zi(e3, t3, n2, r2), n2 !== null && (Pd(n2, e3, r2), bc(n2, t3, r2)));
  }
  function hc(e3, t3, n2) {
    gc(e3, t3, n2, jd());
  }
  function gc(e3, t3, n2, r2) {
    var i3 = {lane: r2, revertLane: 0, gesture: null, action: n2, hasEagerState: false, eagerState: null, next: null};
    if (vc(e3))
      yc(t3, i3);
    else {
      var a2 = e3.alternate;
      if (e3.lanes === 0 && (a2 === null || a2.lanes === 0) && (a2 = t3.lastRenderedReducer, a2 !== null))
        try {
          var o3 = t3.lastRenderedState, s3 = a2(o3, n2);
          if (i3.hasEagerState = true, i3.eagerState = s3, ei(s3, o3))
            return Ri(e3, t3, i3, 0), G === null && Li(), false;
        } catch {
        }
      if (n2 = zi(e3, t3, i3, r2), n2 !== null)
        return Pd(n2, e3, r2), bc(n2, t3, r2), true;
    }
    return false;
  }
  function _c(e3, t3, n2, r2) {
    if (r2 = {lane: 2, revertLane: Pf(), gesture: null, action: r2, hasEagerState: false, eagerState: null, next: null}, vc(e3)) {
      if (t3)
        throw Error(s2(479));
    } else
      t3 = zi(e3, n2, r2, 2), t3 !== null && Pd(t3, e3, 2);
  }
  function vc(e3) {
    var t3 = e3.alternate;
    return e3 === M || t3 !== null && t3 === M;
  }
  function yc(e3, t3) {
    $o = Qo = true;
    var n2 = e3.pending;
    n2 === null ? t3.next = t3 : (t3.next = n2.next, n2.next = t3), e3.pending = t3;
  }
  function bc(e3, t3, n2) {
    if (n2 & 4194048) {
      var r2 = t3.lanes;
      r2 &= e3.pendingLanes, n2 |= r2, t3.lanes = n2, kt(e3, n2);
    }
  }
  var xc = {readContext: Ia, use: gs, useCallback: F, useContext: F, useEffect: F, useImperativeHandle: F, useLayoutEffect: F, useInsertionEffect: F, useMemo: F, useReducer: F, useRef: F, useState: F, useDebugValue: F, useDeferredValue: F, useTransition: F, useSyncExternalStore: F, useId: F, useHostTransitionStatus: F, useFormState: F, useActionState: F, useOptimistic: F, useMemoCache: F, useCacheRefresh: F, useEffectEvent: F}, Sc = {readContext: Ia, use: gs, useCallback: function(e3, t3) {
    return ps().memoizedState = [e3, t3 === void 0 ? null : t3], e3;
  }, useContext: Ia, useEffect: Ks, useImperativeHandle: function(e3, t3, n2) {
    n2 = n2 == null ? null : n2.concat([e3]), Ws(4194308, 4, Qs.bind(null, t3, e3), n2);
  }, useLayoutEffect: function(e3, t3) {
    return Ws(4194308, 4, e3, t3);
  }, useInsertionEffect: function(e3, t3) {
    Ws(4, 2, e3, t3);
  }, useMemo: function(e3, t3) {
    var n2 = ps();
    t3 = t3 === void 0 ? null : t3;
    var r2 = e3();
    if (es) {
      dt(true);
      try {
        e3();
      } finally {
        dt(false);
      }
    }
    return n2.memoizedState = [r2, t3], r2;
  }, useReducer: function(e3, t3, n2) {
    var r2 = ps();
    if (n2 !== void 0) {
      var i3 = n2(t3);
      if (es) {
        dt(true);
        try {
          n2(t3);
        } finally {
          dt(false);
        }
      }
    } else
      i3 = t3;
    return r2.memoizedState = r2.baseState = i3, e3 = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e3, lastRenderedState: i3}, r2.queue = e3, e3 = e3.dispatch = mc.bind(null, M, e3), [r2.memoizedState, e3];
  }, useRef: function(e3) {
    var t3 = ps();
    return e3 = {current: e3}, t3.memoizedState = e3;
  }, useState: function(e3) {
    e3 = Os(e3);
    var t3 = e3.queue, n2 = hc.bind(null, M, t3);
    return t3.dispatch = n2, [e3.memoizedState, n2];
  }, useDebugValue: ec, useDeferredValue: function(e3, t3) {
    return rc(ps(), e3, t3);
  }, useTransition: function() {
    var e3 = Os(false);
    return e3 = ac.bind(null, M, e3.queue, true, false), ps().memoizedState = e3, [false, e3];
  }, useSyncExternalStore: function(e3, t3, n2) {
    var r2 = M, i3 = ps();
    if (k) {
      if (n2 === void 0)
        throw Error(s2(407));
      n2 = n2();
    } else {
      if (n2 = t3(), G === null)
        throw Error(s2(349));
      q & 127 || Cs(r2, t3, n2);
    }
    i3.memoizedState = n2;
    var a2 = {value: n2, getSnapshot: t3};
    return i3.queue = a2, Ks(Ts.bind(null, r2, a2, e3), [e3]), r2.flags |= 2048, Hs(9, {destroy: void 0}, ws.bind(null, r2, a2, n2, t3), null), n2;
  }, useId: function() {
    var e3 = ps(), t3 = G.identifierPrefix;
    if (k) {
      var n2 = ua, r2 = la;
      n2 = (r2 & ~(1 << 32 - ft(r2) - 1)).toString(32) + n2, t3 = `_` + t3 + `R_` + n2, n2 = ts++, 0 < n2 && (t3 += `H` + n2.toString(32)), t3 += `_`;
    } else
      n2 = is++, t3 = `_` + t3 + `r_` + n2.toString(32) + `_`;
    return e3.memoizedState = t3;
  }, useHostTransitionStatus: uc, useFormState: Ls, useActionState: Ls, useOptimistic: function(e3) {
    var t3 = ps();
    t3.memoizedState = t3.baseState = e3;
    var n2 = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
    return t3.queue = n2, t3 = _c.bind(null, M, true, n2), n2.dispatch = t3, [e3, t3];
  }, useMemoCache: _s, useCacheRefresh: function() {
    return ps().memoizedState = pc.bind(null, M);
  }, useEffectEvent: function(e3) {
    var t3 = ps(), n2 = {impl: e3};
    return t3.memoizedState = n2, function() {
      if (W & 2)
        throw Error(s2(440));
      return n2.impl.apply(void 0, arguments);
    };
  }}, Cc = {readContext: Ia, use: gs, useCallback: tc, useContext: Ia, useEffect: qs, useImperativeHandle: $s, useInsertionEffect: Xs, useLayoutEffect: Zs, useMemo: nc, useReducer: ys, useRef: Us, useState: function() {
    return ys(vs);
  }, useDebugValue: ec, useDeferredValue: function(e3, t3) {
    return ic(I(), N.memoizedState, e3, t3);
  }, useTransition: function() {
    var e3 = ys(vs)[0], t3 = I().memoizedState;
    return [typeof e3 == `boolean` ? e3 : hs(e3), t3];
  }, useSyncExternalStore: Ss, useId: dc, useHostTransitionStatus: uc, useFormState: Rs, useActionState: Rs, useOptimistic: function(e3, t3) {
    return ks(I(), N, e3, t3);
  }, useMemoCache: _s, useCacheRefresh: fc, useEffectEvent: Ys}, wc = {readContext: Ia, use: gs, useCallback: tc, useContext: Ia, useEffect: qs, useImperativeHandle: $s, useInsertionEffect: Xs, useLayoutEffect: Zs, useMemo: nc, useReducer: xs, useRef: Us, useState: function() {
    return xs(vs);
  }, useDebugValue: ec, useDeferredValue: function(e3, t3) {
    var n2 = I();
    return N === null ? rc(n2, e3, t3) : ic(n2, N.memoizedState, e3, t3);
  }, useTransition: function() {
    var e3 = xs(vs)[0], t3 = I().memoizedState;
    return [typeof e3 == `boolean` ? e3 : hs(e3), t3];
  }, useSyncExternalStore: Ss, useId: dc, useHostTransitionStatus: uc, useFormState: Vs, useActionState: Vs, useOptimistic: function(e3, t3) {
    var n2 = I();
    return N === null ? (n2.baseState = e3, [e3, n2.queue.dispatch]) : ks(n2, N, e3, t3);
  }, useMemoCache: _s, useCacheRefresh: fc, useEffectEvent: Ys};
  function Tc(e3, t3, n2, r2) {
    t3 = e3.memoizedState, n2 = n2(r2, t3), n2 = n2 == null ? t3 : x({}, t3, n2), e3.memoizedState = n2, e3.lanes === 0 && (e3.updateQueue.baseState = n2);
  }
  var Ec = {enqueueSetState: function(e3, t3, n2) {
    e3 = e3._reactInternals;
    var r2 = jd(), i3 = Do(r2);
    i3.payload = t3, n2 != null && (i3.callback = n2), t3 = Oo(e3, i3, r2), t3 !== null && (Pd(t3, e3, r2), ko(t3, e3, r2));
  }, enqueueReplaceState: function(e3, t3, n2) {
    e3 = e3._reactInternals;
    var r2 = jd(), i3 = Do(r2);
    i3.tag = 1, i3.payload = t3, n2 != null && (i3.callback = n2), t3 = Oo(e3, i3, r2), t3 !== null && (Pd(t3, e3, r2), ko(t3, e3, r2));
  }, enqueueForceUpdate: function(e3, t3) {
    e3 = e3._reactInternals;
    var n2 = jd(), r2 = Do(n2);
    r2.tag = 2, t3 != null && (r2.callback = t3), t3 = Oo(e3, r2, n2), t3 !== null && (Pd(t3, e3, n2), ko(t3, e3, n2));
  }};
  function Dc(e3, t3, n2, r2, i3, a2, o3) {
    return e3 = e3.stateNode, typeof e3.shouldComponentUpdate == `function` ? e3.shouldComponentUpdate(r2, a2, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !ti(n2, r2) || !ti(i3, a2) : true;
  }
  function Oc(e3, t3, n2, r2) {
    e3 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n2, r2), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n2, r2), t3.state !== e3 && Ec.enqueueReplaceState(t3, t3.state, null);
  }
  function kc(e3, t3) {
    var n2 = t3;
    if (`ref` in t3)
      for (var r2 in n2 = {}, t3)
        r2 !== `ref` && (n2[r2] = t3[r2]);
    if (e3 = e3.defaultProps)
      for (var i3 in n2 === t3 && (n2 = x({}, n2)), e3)
        n2[i3] === void 0 && (n2[i3] = e3[i3]);
    return n2;
  }
  function Ac(e3) {
    Ni(e3);
  }
  function jc(e3) {
    console.error(e3);
  }
  function Mc(e3) {
    Ni(e3);
  }
  function Nc(e3, t3) {
    try {
      var n2 = e3.onUncaughtError;
      n2(t3.value, {componentStack: t3.stack});
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  function Pc(e3, t3, n2) {
    try {
      var r2 = e3.onCaughtError;
      r2(n2.value, {componentStack: n2.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null});
    } catch (e4) {
      setTimeout(function() {
        throw e4;
      });
    }
  }
  function Fc(e3, t3, n2) {
    return n2 = Do(n2), n2.tag = 3, n2.payload = {element: null}, n2.callback = function() {
      Nc(e3, t3);
    }, n2;
  }
  function Ic(e3) {
    return e3 = Do(e3), e3.tag = 3, e3;
  }
  function Lc(e3, t3, n2, r2) {
    var i3 = n2.type.getDerivedStateFromError;
    if (typeof i3 == `function`) {
      var a2 = r2.value;
      e3.payload = function() {
        return i3(a2);
      }, e3.callback = function() {
        Pc(t3, n2, r2);
      };
    }
    var o3 = n2.stateNode;
    o3 !== null && typeof o3.componentDidCatch == `function` && (e3.callback = function() {
      Pc(t3, n2, r2), typeof i3 != `function` && (yd === null ? yd = new Set([this]) : yd.add(this));
      var e4 = r2.stack;
      this.componentDidCatch(r2.value, {componentStack: e4 === null ? `` : e4});
    });
  }
  function Rc(e3, t3, n2, r2, i3) {
    if (n2.flags |= 32768, typeof r2 == `object` && r2 && typeof r2.then == `function`) {
      if (t3 = n2.alternate, t3 !== null && Na(t3, n2, i3, true), n2 = j.current, n2 !== null) {
        switch (n2.tag) {
          case 31:
          case 13:
          case 19:
            return Vo === null ? Kd() : n2.alternate === null && Y === 0 && (Y = 3), n2.flags &= -257, n2.flags |= 65536, n2.lanes = i3, r2 === co ? n2.flags |= 16384 : (t3 = n2.updateQueue, t3 === null ? n2.updateQueue = new Set([r2]) : t3.add(r2), mf(e3, r2, i3)), false;
          case 22:
            return n2.flags |= 65536, r2 === co ? n2.flags |= 16384 : (t3 = n2.updateQueue, t3 === null ? (t3 = {transitions: null, markerInstances: null, retryQueue: new Set([r2])}, n2.updateQueue = t3) : (n2 = t3.retryQueue, n2 === null ? t3.retryQueue = new Set([r2]) : n2.add(r2)), mf(e3, r2, i3)), false;
        }
        throw Error(s2(435, n2.tag));
      }
      return mf(e3, r2, i3), Kd(), false;
    }
    if (k)
      return t3 = j.current, t3 === null ? (r2 !== va && (t3 = Error(s2(423), {cause: r2}), Ta(ta(t3, n2))), e3 = e3.current.alternate, e3.flags |= 65536, i3 &= -i3, e3.lanes |= i3, r2 = ta(r2, n2), i3 = Fc(e3.stateNode, r2, i3), Ao(e3, i3), Y !== 4 && (Y = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = i3, r2 !== va && (e3 = Error(s2(422), {cause: r2}), Ta(ta(e3, n2)))), false;
    var a2 = Error(s2(520), {cause: r2});
    if (a2 = ta(a2, n2), fd === null ? fd = [a2] : fd.push(a2), Y !== 4 && (Y = 2), t3 === null)
      return true;
    r2 = ta(r2, n2), n2 = t3;
    do {
      switch (n2.tag) {
        case 3:
          return n2.flags |= 65536, e3 = i3 & -i3, n2.lanes |= e3, e3 = Fc(n2.stateNode, r2, e3), Ao(n2, e3), false;
        case 1:
          if (t3 = n2.type, a2 = n2.stateNode, !(n2.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || a2 !== null && typeof a2.componentDidCatch == `function` && (yd === null || !yd.has(a2))))
            return n2.flags |= 65536, i3 &= -i3, n2.lanes |= i3, i3 = Ic(i3), Lc(i3, e3, n2, r2), Ao(n2, i3), false;
          break;
        case 22:
          if (n2.memoizedState !== null)
            return n2.flags |= 65536, false;
      }
      n2 = n2.return;
    } while (n2 !== null);
    return false;
  }
  var zc = Error(s2(461)), L = false;
  function R(e3, t3, n2, r2) {
    t3.child = e3 === null ? Co(t3, null, n2, r2) : So(t3, e3.child, n2, r2);
  }
  function Bc(e3, t3, n2, r2, i3) {
    n2 = n2.render;
    var a2 = t3.ref;
    if (`ref` in r2) {
      var o3 = {};
      for (var s3 in r2)
        s3 !== `ref` && (o3[s3] = r2[s3]);
    } else
      o3 = r2;
    return Fa(t3), r2 = os(e3, t3, n2, o3, a2, i3), s3 = us(), e3 !== null && !L ? (ds(e3, t3, i3), ml(e3, t3, i3)) : (k && s3 && pa(t3), t3.flags |= 1, R(e3, t3, r2, i3), t3.child);
  }
  function Vc(e3, t3, n2, r2, i3) {
    if (e3 === null) {
      var a2 = n2.type;
      return typeof a2 == `function` && !Ki(a2) && a2.defaultProps === void 0 && n2.compare === null ? (t3.tag = 15, t3.type = a2, Hc(e3, t3, a2, r2, i3)) : (e3 = Yi(n2.type, null, r2, t3, t3.mode, i3), e3.ref = t3.ref, e3.return = t3, t3.child = e3);
    }
    if (a2 = e3.child, !hl(e3, i3)) {
      var o3 = a2.memoizedProps;
      if (n2 = n2.compare, n2 = n2 === null ? ti : n2, n2(o3, r2) && e3.ref === t3.ref)
        return ml(e3, t3, i3);
    }
    return t3.flags |= 1, e3 = qi(a2, r2), e3.ref = t3.ref, e3.return = t3, t3.child = e3;
  }
  function Hc(e3, t3, n2, r2, i3) {
    if (e3 !== null) {
      var a2 = e3.memoizedProps;
      if (ti(a2, r2) && e3.ref === t3.ref) {
        if (L = false, t3.pendingProps = r2 = a2, hl(e3, i3))
          e3.flags & 131072 && (L = true);
        else
          return t3.lanes = e3.lanes, ml(e3, t3, i3);
      }
    }
    return Xc(e3, t3, n2, r2, i3);
  }
  function Uc(e3, t3, n2, r2) {
    var i3 = r2.children, a2 = e3 === null ? null : e3.memoizedState;
    if (e3 === null && t3.stateNode === null && (t3.stateNode = {_visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null}), r2.mode === `hidden`) {
      if (t3.flags & 128) {
        if (a2 = a2 === null ? n2 : a2.baseLanes | n2, e3 !== null) {
          for (r2 = t3.child = e3.child, i3 = 0; r2 !== null; )
            i3 = i3 | r2.lanes | r2.childLanes, r2 = r2.sibling;
          r2 = i3 & ~a2;
        } else
          r2 = 0, t3.child = null;
        return Gc(e3, t3, a2, n2, r2);
      }
      if (n2 & 536870912)
        t3.memoizedState = {baseLanes: 0, cachePool: null}, e3 !== null && ro(t3, a2 === null ? null : a2.cachePool), a2 === null ? zo() : Ro(t3, a2), Wo(t3);
      else
        return r2 = t3.lanes = 536870912, Gc(e3, t3, a2 === null ? n2 : a2.baseLanes | n2, n2, r2);
    } else
      a2 === null ? (e3 !== null && ro(t3, null), zo(), Go()) : (ro(t3, a2.cachePool), Ro(t3, a2), Go(), t3.memoizedState = null);
    return R(e3, t3, i3, n2), t3.child;
  }
  function Wc(e3, t3) {
    return e3 !== null && e3.tag === 22 || t3.stateNode !== null || (t3.stateNode = {_visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null}), t3.sibling;
  }
  function Gc(e3, t3, n2, r2, i3) {
    var a2 = no();
    return a2 = a2 === null ? null : {parent: A._currentValue, pool: a2}, t3.memoizedState = {baseLanes: n2, cachePool: a2}, e3 !== null && ro(t3, null), zo(), Wo(t3), e3 !== null && Na(e3, t3, r2, true), t3.childLanes = i3, null;
  }
  function Kc(e3, t3) {
    return t3 = al({mode: t3.mode, children: t3.children}, e3.mode), t3.ref = e3.ref, e3.child = t3, t3.return = e3, t3;
  }
  function qc(e3, t3, n2) {
    return So(t3, e3.child, null, n2), e3 = Kc(t3, t3.pendingProps), e3.flags |= 2, Ko(t3), t3.memoizedState = null, e3;
  }
  function Jc(e3, t3, n2) {
    var r2 = t3.pendingProps, i3 = !!(t3.flags & 128);
    if (t3.flags &= -129, e3 === null) {
      if (k) {
        if (r2.mode === `hidden`)
          return e3 = Kc(t3, r2), t3.lanes = 536870912, e3.memoizedState = {baseLanes: 0, cachePool: null}, Wc(null, e3);
        if (Uo(t3), (e3 = O) ? (e3 = am(e3, _a), e3 = e3 !== null && e3.data === `&` ? e3 : null, e3 !== null && (t3.memoizedState = {dehydrated: e3, treeContext: ca === null ? null : {id: la, overflow: ua}, retryLane: 536870912, hydrationErrors: null}, n2 = Qi(e3), n2.return = t3, t3.child = n2, D = t3, O = null)) : e3 = null, e3 === null)
          throw ya(t3);
        return t3.lanes = 536870912, null;
      }
      return Kc(t3, r2);
    }
    var a2 = e3.memoizedState;
    if (a2 !== null) {
      var o3 = a2.dehydrated;
      if (Uo(t3), i3) {
        if (t3.flags & 256)
          t3.flags &= -257, t3 = qc(e3, t3, n2);
        else if (t3.memoizedState !== null)
          t3.child = e3.child, t3.flags |= 128, t3 = null;
        else
          throw Error(s2(558));
      } else if (L || Na(e3, t3, n2, false), i3 = (n2 & e3.childLanes) !== 0, L || i3) {
        if (Io.current === null) {
          if (r2 = G, r2 !== null && (o3 = At(r2, n2), o3 !== 0 && o3 !== a2.retryLane))
            throw a2.retryLane = o3, Bi(e3, o3), Pd(r2, e3, o3), zc;
          Kd();
        }
        t3 = qc(e3, t3, n2);
      } else
        e3 = a2.treeContext, O = lm(o3.nextSibling), D = t3, k = true, ga = null, _a = false, e3 !== null && ha(t3, e3), t3 = Kc(t3, r2), t3.flags |= 134221824;
      return t3;
    }
    return e3 = qi(e3.child, {mode: r2.mode, children: r2.children}), e3.ref = t3.ref, t3.child = e3, e3.return = t3, e3;
  }
  function Yc(e3, t3) {
    var n2 = t3.ref;
    if (n2 === null)
      e3 !== null && e3.ref !== null && (t3.flags |= 4194816);
    else {
      if (typeof n2 != `function` && typeof n2 != `object`)
        throw Error(s2(284));
      (e3 === null || e3.ref !== n2) && (t3.flags |= 4194816);
    }
  }
  function Xc(e3, t3, n2, r2, i3) {
    return Fa(t3), n2 = os(e3, t3, n2, r2, void 0, i3), r2 = us(), e3 !== null && !L ? (ds(e3, t3, i3), ml(e3, t3, i3)) : (k && r2 && pa(t3), t3.flags |= 1, R(e3, t3, n2, i3), t3.child);
  }
  function Zc(e3, t3, n2, r2, i3, a2) {
    return Fa(t3), t3.updateQueue = null, n2 = cs(t3, r2, n2, i3), ss(e3), r2 = us(), e3 !== null && !L ? (ds(e3, t3, a2), ml(e3, t3, a2)) : (k && r2 && pa(t3), t3.flags |= 1, R(e3, t3, n2, a2), t3.child);
  }
  function Qc(e3, t3, n2, r2, i3) {
    if (Fa(t3), t3.stateNode === null) {
      var a2 = Ui, o3 = n2.contextType;
      typeof o3 == `object` && o3 && (a2 = Ia(o3)), a2 = new n2(r2, a2), t3.memoizedState = a2.state !== null && a2.state !== void 0 ? a2.state : null, a2.updater = Ec, t3.stateNode = a2, a2._reactInternals = t3, a2 = t3.stateNode, a2.props = r2, a2.state = t3.memoizedState, a2.refs = {}, To(t3), o3 = n2.contextType, a2.context = typeof o3 == `object` && o3 ? Ia(o3) : Ui, a2.state = t3.memoizedState, o3 = n2.getDerivedStateFromProps, typeof o3 == `function` && (Tc(t3, n2, o3, r2), a2.state = t3.memoizedState), typeof n2.getDerivedStateFromProps == `function` || typeof a2.getSnapshotBeforeUpdate == `function` || typeof a2.UNSAFE_componentWillMount != `function` && typeof a2.componentWillMount != `function` || (o3 = a2.state, typeof a2.componentWillMount == `function` && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == `function` && a2.UNSAFE_componentWillMount(), o3 !== a2.state && Ec.enqueueReplaceState(a2, a2.state, null), No(t3, r2, a2, i3), Mo(), a2.state = t3.memoizedState), typeof a2.componentDidMount == `function` && (t3.flags |= 4194308), r2 = true;
    } else if (e3 === null) {
      a2 = t3.stateNode;
      var s3 = t3.memoizedProps, c3 = kc(n2, s3);
      a2.props = c3;
      var l3 = a2.context, u3 = n2.contextType;
      o3 = Ui, typeof u3 == `object` && u3 && (o3 = Ia(u3));
      var d3 = n2.getDerivedStateFromProps;
      u3 = typeof d3 == `function` || typeof a2.getSnapshotBeforeUpdate == `function`, s3 = t3.pendingProps !== s3, u3 || typeof a2.UNSAFE_componentWillReceiveProps != `function` && typeof a2.componentWillReceiveProps != `function` || (s3 || l3 !== o3) && Oc(t3, a2, r2, o3), wo = false;
      var f3 = t3.memoizedState;
      a2.state = f3, No(t3, r2, a2, i3), Mo(), l3 = t3.memoizedState, s3 || f3 !== l3 || wo ? (typeof d3 == `function` && (Tc(t3, n2, d3, r2), l3 = t3.memoizedState), (c3 = wo || Dc(t3, n2, c3, r2, f3, l3, o3)) ? (u3 || typeof a2.UNSAFE_componentWillMount != `function` && typeof a2.componentWillMount != `function` || (typeof a2.componentWillMount == `function` && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == `function` && a2.UNSAFE_componentWillMount()), typeof a2.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a2.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r2, t3.memoizedState = l3), a2.props = r2, a2.state = l3, a2.context = o3, r2 = c3) : (typeof a2.componentDidMount == `function` && (t3.flags |= 4194308), r2 = false);
    } else {
      a2 = t3.stateNode, Eo(e3, t3), o3 = t3.memoizedProps, u3 = kc(n2, o3), a2.props = u3, d3 = t3.pendingProps, f3 = a2.context, l3 = n2.contextType, c3 = Ui, typeof l3 == `object` && l3 && (c3 = Ia(l3)), s3 = n2.getDerivedStateFromProps, (l3 = typeof s3 == `function` || typeof a2.getSnapshotBeforeUpdate == `function`) || typeof a2.UNSAFE_componentWillReceiveProps != `function` && typeof a2.componentWillReceiveProps != `function` || (o3 !== d3 || f3 !== c3) && Oc(t3, a2, r2, c3), wo = false, f3 = t3.memoizedState, a2.state = f3, No(t3, r2, a2, i3), Mo();
      var p2 = t3.memoizedState;
      o3 !== d3 || f3 !== p2 || wo || e3 !== null && e3.dependencies !== null && Pa(e3.dependencies) ? (typeof s3 == `function` && (Tc(t3, n2, s3, r2), p2 = t3.memoizedState), (u3 = wo || Dc(t3, n2, u3, r2, f3, p2, c3) || e3 !== null && e3.dependencies !== null && Pa(e3.dependencies)) ? (l3 || typeof a2.UNSAFE_componentWillUpdate != `function` && typeof a2.componentWillUpdate != `function` || (typeof a2.componentWillUpdate == `function` && a2.componentWillUpdate(r2, p2, c3), typeof a2.UNSAFE_componentWillUpdate == `function` && a2.UNSAFE_componentWillUpdate(r2, p2, c3)), typeof a2.componentDidUpdate == `function` && (t3.flags |= 4), typeof a2.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a2.componentDidUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a2.getSnapshotBeforeUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r2, t3.memoizedState = p2), a2.props = r2, a2.state = p2, a2.context = c3, r2 = u3) : (typeof a2.componentDidUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 4), typeof a2.getSnapshotBeforeUpdate != `function` || o3 === e3.memoizedProps && f3 === e3.memoizedState || (t3.flags |= 1024), r2 = false);
    }
    return a2 = r2, Yc(e3, t3), r2 = !!(t3.flags & 128), a2 || r2 ? (a2 = t3.stateNode, n2 = r2 && typeof n2.getDerivedStateFromError != `function` ? null : a2.render(), t3.flags |= 1, e3 !== null && r2 ? (t3.child = So(t3, e3.child, null, i3), t3.child = So(t3, null, n2, i3)) : R(e3, t3, n2, i3), t3.memoizedState = a2.state, e3 = t3.child) : e3 = ml(e3, t3, i3), e3;
  }
  function $c(e3, t3, n2, r2) {
    return Ca(), t3.flags |= 256, R(e3, t3, n2, r2), t3.child;
  }
  var el = {dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null};
  function tl(e3) {
    return {baseLanes: e3, cachePool: io()};
  }
  function nl(e3, t3, n2) {
    return e3 = e3 === null ? 0 : e3.childLanes & ~n2, t3 && (e3 |= ud), e3;
  }
  function rl(e3, t3, n2) {
    var r2 = t3.pendingProps, i3 = false, a2 = !!(t3.flags & 128), o3;
    if ((o3 = a2) || (o3 = e3 !== null && e3.memoizedState === null ? false : !!(qo.current & 2)), o3 && (i3 = true, t3.flags &= -129), o3 = !!(t3.flags & 32), t3.flags &= -33, e3 === null) {
      if (k) {
        if (i3 ? Ho(t3) : Go(), (e3 = O) ? (e3 = am(e3, _a), e3 = e3 !== null && e3.data !== `&` ? e3 : null, e3 !== null && (t3.memoizedState = {dehydrated: e3, treeContext: ca === null ? null : {id: la, overflow: ua}, retryLane: 536870912, hydrationErrors: null}, n2 = Qi(e3), n2.return = t3, t3.child = n2, D = t3, O = null)) : e3 = null, e3 === null)
          throw ya(t3);
        return t3.lanes = sm(e3) ? 32 : 536870912, null;
      }
      return a2 = r2.children, r2 = r2.fallback, i3 ? (Go(), i3 = t3.mode, a2 = al({mode: `hidden`, children: a2}, i3), r2 = Xi(r2, i3, n2, null), a2.return = t3, r2.return = t3, a2.sibling = r2, t3.child = a2, r2 = t3.child, r2.memoizedState = tl(n2), r2.childLanes = nl(e3, o3, n2), t3.memoizedState = el, Wc(null, r2)) : (Ho(t3), il(t3, a2));
    }
    var s3 = e3.memoizedState;
    if (s3 !== null) {
      var c3 = s3.dehydrated;
      if (c3 !== null)
        return sl(e3, t3, a2, o3, r2, c3, s3, n2);
    }
    return i3 ? (Go(), i3 = r2.fallback, a2 = t3.mode, s3 = e3.child, c3 = s3.sibling, r2 = qi(s3, {mode: `hidden`, children: r2.children}), r2.subtreeFlags = s3.subtreeFlags & 1206910976, c3 === null ? (i3 = Xi(i3, a2, n2, null), i3.flags |= 2) : i3 = qi(c3, i3), i3.return = t3, r2.return = t3, r2.sibling = i3, t3.child = r2, Wc(null, r2), r2 = t3.child, i3 = e3.child.memoizedState, i3 === null ? i3 = tl(n2) : (a2 = i3.cachePool, a2 === null ? a2 = io() : (s3 = A._currentValue, a2 = a2.parent === s3 ? a2 : {parent: s3, pool: s3}), i3 = {baseLanes: i3.baseLanes | n2, cachePool: a2}), r2.memoizedState = i3, r2.childLanes = nl(e3, o3, n2), t3.memoizedState = el, Wc(e3.child, r2)) : (Ho(t3), n2 = e3.child, e3 = n2.sibling, n2 = qi(n2, {mode: `visible`, children: r2.children}), n2.return = t3, n2.sibling = null, e3 !== null && (o3 = t3.deletions, o3 === null ? (t3.deletions = [e3], t3.flags |= 16) : o3.push(e3)), t3.child = n2, t3.memoizedState = null, n2);
  }
  function il(e3, t3) {
    return t3 = al({mode: `visible`, children: t3}, e3.mode), t3.return = e3, e3.child = t3;
  }
  function al(e3, t3) {
    return e3 = Gi(22, e3, null, t3), e3.lanes = 0, e3;
  }
  function ol(e3, t3, n2) {
    return So(t3, e3.child, null, n2), e3 = il(t3, t3.pendingProps.children), e3.flags |= 2, t3.memoizedState = null, e3;
  }
  function sl(e3, t3, n2, r2, i3, a2, o3, c3) {
    if (n2)
      return t3.flags & 256 ? (Ho(t3), t3.flags &= -257, ol(e3, t3, c3)) : t3.memoizedState === null ? (Go(), a2 = i3.fallback, o3 = t3.mode, i3 = al({mode: `visible`, children: i3.children}, o3), a2 = Xi(a2, o3, c3, null), a2.flags |= 2, i3.return = t3, a2.return = t3, i3.sibling = a2, t3.child = i3, So(t3, e3.child, null, c3), i3 = t3.child, i3.memoizedState = tl(c3), i3.childLanes = nl(e3, r2, c3), t3.memoizedState = el, Wc(null, i3)) : (Go(), t3.child = e3.child, t3.flags |= 128, null);
    if (Ho(t3), sm(a2)) {
      if (r2 = a2.nextSibling && a2.nextSibling.dataset, r2)
        var l3 = r2.dgst;
      return r2 = l3, r2 !== `` && (i3 = Error(s2(419)), i3.stack = ``, i3.digest = r2, Ta({value: i3, source: null, stack: null})), ol(e3, t3, c3);
    }
    if (L || Na(e3, t3, c3, false), r2 = (c3 & e3.childLanes) !== 0, L || r2) {
      if (Io.current !== null)
        return ol(e3, t3, c3);
      if (r2 = G, r2 !== null && (i3 = At(r2, c3), i3 !== 0 && i3 !== o3.retryLane))
        throw o3.retryLane = i3, Bi(e3, i3), Pd(r2, e3, i3), zc;
      return om(a2) || Kd(), ol(e3, t3, c3);
    }
    return om(a2) ? (t3.flags |= 192, t3.child = e3.child, null) : (e3 = o3.treeContext, O = lm(a2.nextSibling), D = t3, k = true, ga = null, _a = false, e3 !== null && ha(t3, e3), t3 = il(t3, i3.children), t3.flags |= 134221824, t3);
  }
  function cl(e3, t3, n2) {
    e3.lanes |= t3;
    var r2 = e3.alternate;
    r2 !== null && (r2.lanes |= t3), ja(e3.return, t3, n2);
  }
  function ll(e3) {
    for (var t3 = null; e3 !== null; ) {
      var n2 = e3.alternate;
      n2 !== null && Xo(n2) === null && (t3 = e3), e3 = e3.sibling;
    }
    return t3;
  }
  function ul(e3, t3, n2, r2, i3, a2) {
    var o3 = e3.memoizedState;
    o3 === null ? e3.memoizedState = {isBackwards: t3, rendering: null, renderingStartTime: 0, last: r2, tail: n2, tailMode: i3, treeForkCount: a2} : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r2, o3.tail = n2, o3.tailMode = i3, o3.treeForkCount = a2);
  }
  function dl(e3) {
    var t3 = e3.child;
    for (e3.child = null; t3 !== null; ) {
      var n2 = t3.sibling;
      t3.sibling = e3.child, e3.child = t3, t3 = n2;
    }
  }
  function fl(e3, t3, n2) {
    var r2 = t3.pendingProps, i3 = r2.revealOrder, a2 = r2.tail;
    r2 = r2.children;
    var o3 = qo.current;
    if (t3.flags & 128)
      return Jo(t3, o3), null;
    var s3 = !!(o3 & 2);
    if (s3 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, Jo(t3, o3), i3 === `backwards` && e3 !== null ? (dl(e3), R(e3, t3, r2, n2), dl(e3)) : R(e3, t3, r2, n2), r2 = k ? aa : 0, !s3 && e3 !== null && e3.flags & 128)
      a:
        for (e3 = t3.child; e3 !== null; ) {
          if (e3.tag === 13)
            e3.memoizedState !== null && cl(e3, n2, t3);
          else if (e3.tag === 19)
            cl(e3, n2, t3);
          else if (e3.child !== null) {
            e3.child.return = e3, e3 = e3.child;
            continue;
          }
          if (e3 === t3)
            break a;
          for (; e3.sibling === null; ) {
            if (e3.return === null || e3.return === t3)
              break a;
            e3 = e3.return;
          }
          e3.sibling.return = e3.return, e3 = e3.sibling;
        }
    switch (i3) {
      case `backwards`:
        n2 = ll(t3.child), n2 === null ? (i3 = t3.child, t3.child = null) : (i3 = n2.sibling, n2.sibling = null, dl(t3)), ul(t3, true, i3, null, a2, r2);
        break;
      case `unstable_legacy-backwards`:
        for (n2 = null, i3 = t3.child, t3.child = null; i3 !== null; ) {
          if (e3 = i3.alternate, e3 !== null && Xo(e3) === null) {
            t3.child = i3;
            break;
          }
          e3 = i3.sibling, i3.sibling = n2, n2 = i3, i3 = e3;
        }
        ul(t3, true, n2, null, a2, r2);
        break;
      case `together`:
        ul(t3, false, null, null, void 0, r2);
        break;
      case `independent`:
        t3.memoizedState = null;
        break;
      default:
        n2 = ll(t3.child), n2 === null ? (i3 = t3.child, t3.child = null) : (i3 = n2.sibling, n2.sibling = null), ul(t3, false, i3, n2, a2, r2);
    }
    return t3.child;
  }
  function pl(e3, t3, n2) {
    var r2 = t3.pendingProps;
    return ka(t3, t3.type, r2.value), R(e3, t3, r2.children, n2), t3.child;
  }
  function ml(e3, t3, n2) {
    if (e3 !== null && (t3.dependencies = e3.dependencies), sd |= t3.lanes, (n2 & t3.childLanes) === 0) {
      if (e3 !== null) {
        if (Na(e3, t3, n2, false), (n2 & t3.childLanes) === 0)
          return null;
      } else
        return null;
    }
    if (e3 !== null && t3.child !== e3.child)
      throw Error(s2(153));
    if (t3.child !== null) {
      for (e3 = t3.child, n2 = qi(e3, e3.pendingProps), t3.child = n2, n2.return = t3; e3.sibling !== null; )
        e3 = e3.sibling, n2 = n2.sibling = qi(e3, e3.pendingProps), n2.return = t3;
      n2.sibling = null;
    }
    return t3.child;
  }
  function hl(e3, t3) {
    return (e3.lanes & t3) !== 0 || (e3 = e3.dependencies, !!(e3 !== null && Pa(e3)));
  }
  function gl(e3, t3, n2) {
    switch (t3.tag) {
      case 3:
        Re(t3, t3.stateNode.containerInfo), ka(t3, A, e3.memoizedState.cache), Ca();
        break;
      case 27:
      case 5:
        Be(t3);
        break;
      case 4:
        Re(t3, t3.stateNode.containerInfo);
        break;
      case 10:
        ka(t3, t3.type, t3.memoizedProps.value);
        break;
      case 31:
        if (t3.memoizedState !== null)
          return t3.flags |= 128, Uo(t3), null;
        break;
      case 13:
        var r2 = t3.memoizedState;
        if (r2 !== null) {
          if (r2.dehydrated !== null)
            return Ho(t3), t3.flags |= 128, null;
          r2 = Na(e3, t3, n2, false);
          var i3 = t3.child.childLanes;
          return r2 || (n2 & i3) !== 0 ? rl(e3, t3, n2) : (Ho(t3), e3 = ml(e3, t3, n2), e3 === null ? null : e3.sibling);
        }
        Ho(t3);
        break;
      case 19:
        if (t3.flags & 128)
          return fl(e3, t3, n2);
        if (i3 = !!(e3.flags & 128), r2 = (n2 & t3.childLanes) !== 0, r2 || (r2 = (Na(e3, t3, n2, false), (n2 & t3.childLanes) !== 0)), i3) {
          if (r2)
            return fl(e3, t3, n2);
          t3.flags |= 128;
        }
        if (i3 = t3.memoizedState, i3 !== null && (i3.rendering = null, i3.tail = null, i3.lastEffect = null), Jo(t3, qo.current), r2)
          break;
        return null;
      case 22:
        return t3.lanes = 0, Uc(e3, t3, n2, t3.pendingProps);
      case 24:
        ka(t3, A, e3.memoizedState.cache);
    }
    return ml(e3, t3, n2);
  }
  function _l(e3, t3, n2) {
    if (e3 !== null) {
      if (e3.memoizedProps !== t3.pendingProps)
        L = true;
      else {
        if (!hl(e3, n2) && !(t3.flags & 128))
          return L = false, gl(e3, t3, n2);
        L = !!(e3.flags & 131072);
      }
    } else
      L = false, k && t3.flags & 1048576 && fa(t3, aa, t3.index);
    switch (t3.lanes = 0, t3.tag) {
      case 16:
        a: {
          var r2 = t3.pendingProps;
          if (e3 = fo(t3.elementType), t3.type = e3, typeof e3 == `function`)
            Ki(e3) ? (r2 = kc(e3, r2), t3.tag = 1, t3 = Qc(null, t3, e3, r2, n2)) : (t3.tag = 0, t3 = Xc(null, t3, e3, r2, n2));
          else {
            if (e3 != null) {
              var i3 = e3.$$typeof;
              if (i3 === me) {
                t3.tag = 11, t3 = Bc(null, t3, e3, r2, n2);
                break a;
              }
              if (i3 === _e) {
                t3.tag = 14, t3 = Vc(null, t3, e3, r2, n2);
                break a;
              }
              if (i3 === pe) {
                t3.tag = 10, t3.type = e3, t3 = pl(null, t3, n2);
                break a;
              }
            }
            throw t3 = De(e3) || e3, Error(s2(306, t3, ``));
          }
        }
        return t3;
      case 0:
        return Xc(e3, t3, t3.type, t3.pendingProps, n2);
      case 1:
        return r2 = t3.type, i3 = kc(r2, t3.pendingProps), Qc(e3, t3, r2, i3, n2);
      case 3:
        a: {
          if (Re(t3, t3.stateNode.containerInfo), e3 === null)
            throw Error(s2(387));
          r2 = t3.pendingProps;
          var a2 = t3.memoizedState;
          i3 = a2.element, Eo(e3, t3), No(t3, r2, null, n2);
          var o3 = t3.memoizedState;
          if (r2 = o3.cache, ka(t3, A, r2), r2 !== a2.cache && Ma(t3, [A], n2, true), Mo(), r2 = o3.element, a2.isDehydrated) {
            if (a2 = {element: r2, isDehydrated: false, cache: o3.cache}, t3.updateQueue.baseState = a2, t3.memoizedState = a2, t3.flags & 256) {
              t3 = $c(e3, t3, r2, n2);
              break a;
            }
            if (r2 !== i3) {
              i3 = ta(Error(s2(424)), t3), Ta(i3), t3 = $c(e3, t3, r2, n2);
              break a;
            }
            switch (e3 = t3.stateNode.containerInfo, e3.nodeType) {
              case 9:
                e3 = e3.body;
                break;
              default:
                e3 = e3.nodeName === `HTML` ? e3.ownerDocument.body : e3;
            }
            for (O = lm(e3.firstChild), D = t3, k = true, ga = null, _a = true, n2 = Co(t3, null, r2, n2), t3.child = n2; n2; )
              n2.flags = n2.flags & -3 | 134221824, n2 = n2.sibling;
          } else {
            if (Ca(), r2 === i3) {
              t3 = ml(e3, t3, n2);
              break a;
            }
            R(e3, t3, r2, n2);
          }
          t3 = t3.child;
        }
        return t3;
      case 26:
        return Yc(e3, t3), e3 === null ? (n2 = Nm(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n2 : k || (t3.stateNode = fp(t3.type, t3.pendingProps, Ie.current, t3)) : t3.memoizedState = Nm(t3.type, e3.memoizedProps, t3.pendingProps, e3.memoizedState), null;
      case 27:
        return Be(t3), e3 === null && k && (r2 = t3.stateNode = hm(t3.type, t3.pendingProps, Ie.current), D = t3, _a = true, i3 = O, Sp(t3.type) ? (um = i3, O = lm(r2.firstChild)) : O = i3), R(e3, t3, t3.pendingProps.children, n2), Yc(e3, t3), e3 === null && (t3.flags |= 4194304), t3.child;
      case 5:
        return e3 === null && k && ((i3 = r2 = O) && (r2 = rm(r2, t3.type, t3.pendingProps, _a), r2 === null ? i3 = false : (t3.stateNode = r2, D = t3, O = lm(r2.firstChild), _a = false, i3 = true)), i3 || ya(t3)), Be(t3), i3 = t3.type, a2 = t3.pendingProps, o3 = e3 === null ? null : e3.memoizedProps, r2 = a2.children, pp(i3, a2) ? r2 = null : o3 !== null && pp(i3, o3) && (t3.flags |= 32), t3.memoizedState !== null && (i3 = os(e3, t3, ls, null, null, n2), sh._currentValue = i3), Yc(e3, t3), R(e3, t3, r2, n2), t3.child;
      case 6:
        return e3 === null && k && ((e3 = n2 = O) && (n2 = im(n2, t3.pendingProps, _a), n2 === null ? e3 = false : (t3.stateNode = n2, D = t3, O = null, e3 = true)), e3 || ya(t3)), null;
      case 13:
        return rl(e3, t3, n2);
      case 4:
        return Re(t3, t3.stateNode.containerInfo), r2 = t3.pendingProps, e3 === null ? t3.child = So(t3, null, r2, n2) : R(e3, t3, r2, n2), t3.child;
      case 11:
        return Bc(e3, t3, t3.type, t3.pendingProps, n2);
      case 7:
        return r2 = t3.pendingProps, Yc(e3, t3), R(e3, t3, r2, n2), t3.child;
      case 8:
        return R(e3, t3, t3.pendingProps.children, n2), t3.child;
      case 12:
        return R(e3, t3, t3.pendingProps.children, n2), t3.child;
      case 10:
        return pl(e3, t3, n2);
      case 9:
        return i3 = t3.type._context, r2 = t3.pendingProps.children, Fa(t3), i3 = Ia(i3), r2 = r2(i3), t3.flags |= 1, R(e3, t3, r2, n2), t3.child;
      case 14:
        return Vc(e3, t3, t3.type, t3.pendingProps, n2);
      case 15:
        return Hc(e3, t3, t3.type, t3.pendingProps, n2);
      case 19:
        return fl(e3, t3, n2);
      case 31:
        return Jc(e3, t3, n2);
      case 22:
        return Uc(e3, t3, n2, t3.pendingProps);
      case 24:
        return Fa(t3), r2 = Ia(A), e3 === null ? (i3 = no(), i3 === null && (i3 = G, a2 = Ha(), i3.pooledCache = a2, a2.refCount++, a2 !== null && (i3.pooledCacheLanes |= n2), i3 = a2), t3.memoizedState = {parent: r2, cache: i3}, To(t3), ka(t3, A, i3)) : ((e3.lanes & n2) !== 0 && (Eo(e3, t3), No(t3, null, null, n2), Mo()), i3 = e3.memoizedState, a2 = t3.memoizedState, i3.parent === r2 ? (r2 = a2.cache, ka(t3, A, r2), r2 !== i3.cache && Ma(t3, [A], n2, true)) : (i3 = {parent: r2, cache: r2}, t3.memoizedState = i3, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = i3), ka(t3, A, r2))), R(e3, t3, t3.pendingProps.children, n2), t3.child;
      case 30:
        return t3.stateNode === null && (t3.stateNode = {autoName: null, paired: null, clones: null, ref: null}), r2 = t3.pendingProps, r2.name != null && r2.name !== `auto` ? t3.flags |= e3 === null ? 18882560 : 18874368 : k && pa(t3), e3 !== null && e3.memoizedProps.name !== r2.name ? t3.flags |= 4194816 : Yc(e3, t3), R(e3, t3, r2.children, n2), t3.child;
      case 29:
        throw t3.pendingProps;
    }
    throw Error(s2(156, t3.tag));
  }
  function vl(e3) {
    e3.flags |= 4;
  }
  function yl(e3, t3, n2, r2, i3) {
    var a2;
    if ((a2 = !!(e3.mode & 32)) && (a2 = n2 === null ? Jm(t3, r2) : Jm(t3, r2) && (r2.src !== n2.src || r2.srcSet !== n2.srcSet)), a2) {
      if (e3.flags |= 16777216, (i3 & 335544128) === i3) {
        if (e3.stateNode.complete)
          e3.flags |= 8192;
        else if (Ud())
          e3.flags |= 8192;
        else
          throw po = co, oo;
      }
    } else
      e3.flags &= -16777217;
  }
  function bl(e3, t3) {
    if (t3.type !== `stylesheet` || t3.state.loading & 4)
      e3.flags &= -16777217;
    else if (e3.flags |= 16777216, !Ym(t3)) {
      if (Ud())
        e3.flags |= 8192;
      else
        throw po = co, oo;
    }
  }
  function xl(e3, t3) {
    t3 !== null && (e3.flags |= 4), e3.flags & 16384 && (t3 = e3.tag === 22 ? 536870912 : wt(), e3.lanes |= t3, dd |= t3);
  }
  function Sl(e3, t3) {
    if (!k)
      switch (e3.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n2 = e3.tail, r2 = null; n2 !== null; )
            n2.alternate !== null && (r2 = n2), n2 = n2.sibling;
          r2 === null ? t3 || e3.tail === null ? e3.tail = null : e3.tail.sibling = null : r2.sibling = null;
          break;
        default:
          for (t3 = e3.tail, n2 = null; t3 !== null; )
            t3.alternate !== null && (n2 = t3), t3 = t3.sibling;
          n2 === null ? e3.tail = null : n2.sibling = null;
      }
  }
  function z(e3) {
    var t3 = e3.alternate !== null && e3.alternate.child === e3.child, n2 = 0, r2 = 0;
    if (t3)
      for (var i3 = e3.child; i3 !== null; )
        n2 |= i3.lanes | i3.childLanes, r2 |= i3.subtreeFlags & 1206910976, r2 |= i3.flags & 1206910976, i3.return = e3, i3 = i3.sibling;
    else
      for (i3 = e3.child; i3 !== null; )
        n2 |= i3.lanes | i3.childLanes, r2 |= i3.subtreeFlags, r2 |= i3.flags, i3.return = e3, i3 = i3.sibling;
    return e3.subtreeFlags |= r2, e3.childLanes = n2, t3;
  }
  function Cl(e3, t3, n2) {
    var r2 = t3.pendingProps;
    switch (ma(t3), t3.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return z(t3), null;
      case 1:
        return z(t3), null;
      case 3:
        return n2 = t3.stateNode, r2 = null, e3 !== null && (r2 = e3.memoizedState.cache), t3.memoizedState.cache !== r2 && (t3.flags |= 2048), Aa(A), ze(), n2.pendingContext && (n2.context = n2.pendingContext, n2.pendingContext = null), (e3 === null || e3.child === null) && (Sa(t3) ? vl(t3) : e3 === null || e3.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, wa())), z(t3), null;
      case 26:
        var i3 = t3.type, a2 = t3.memoizedState;
        return e3 === null ? (vl(t3), a2 === null ? (z(t3), yl(t3, i3, null, r2, n2)) : (z(t3), bl(t3, a2))) : a2 ? a2 === e3.memoizedState ? (z(t3), t3.flags &= -16777217) : (vl(t3), z(t3), bl(t3, a2)) : (e3 = e3.memoizedProps, e3 !== r2 && vl(t3), z(t3), yl(t3, i3, e3, r2, n2)), null;
      case 27:
        if (Ve(t3), n2 = Ie.current, i3 = t3.type, e3 !== null && t3.stateNode != null)
          e3.memoizedProps !== r2 && vl(t3);
        else {
          if (!r2) {
            if (t3.stateNode === null)
              throw Error(s2(166));
            return z(t3), t3.subtreeFlags &= -33554433, null;
          }
          e3 = Pe.current, Sa(t3) ? ba(t3, e3) : (e3 = hm(i3, r2, n2), t3.stateNode = e3, vl(t3));
        }
        return z(t3), t3.subtreeFlags &= -33554433, null;
      case 5:
        if (Ve(t3), i3 = t3.type, e3 !== null && t3.stateNode != null)
          e3.memoizedProps !== r2 && vl(t3);
        else {
          if (!r2) {
            if (t3.stateNode === null)
              throw Error(s2(166));
            return z(t3), t3.subtreeFlags &= -33554433, null;
          }
          if (a2 = Pe.current, Sa(t3))
            ba(t3, a2);
          else {
            var o3 = lp(Ie.current);
            switch (a2) {
              case 1:
                a2 = o3.createElementNS(`http://www.w3.org/2000/svg`, i3);
                break;
              case 2:
                a2 = o3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i3);
                break;
              default:
                switch (i3) {
                  case `svg`:
                    a2 = o3.createElementNS(`http://www.w3.org/2000/svg`, i3);
                    break;
                  case `math`:
                    a2 = o3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i3);
                    break;
                  case `script`:
                    a2 = o3.createElement(`div`), a2.innerHTML = `<script></script>`, a2 = a2.removeChild(a2.firstChild);
                    break;
                  case `select`:
                    a2 = typeof r2.is == `string` ? o3.createElement(`select`, {is: r2.is}) : o3.createElement(`select`), r2.multiple ? a2.multiple = true : r2.size && (a2.size = r2.size);
                    break;
                  default:
                    a2 = typeof r2.is == `string` ? o3.createElement(i3, {is: r2.is}) : o3.createElement(i3);
                }
            }
            a2[It] = t3, a2[Lt] = r2;
            a:
              for (o3 = t3.child; o3 !== null; ) {
                if (o3.tag === 5 || o3.tag === 6)
                  a2.appendChild(o3.stateNode);
                else if (o3.tag !== 4 && o3.tag !== 27 && o3.child !== null) {
                  o3.child.return = o3, o3 = o3.child;
                  continue;
                }
                if (o3 === t3)
                  break a;
                for (; o3.sibling === null; ) {
                  if (o3.return === null || o3.return === t3)
                    break a;
                  o3 = o3.return;
                }
                o3.sibling.return = o3.return, o3 = o3.sibling;
              }
            t3.stateNode = a2;
            a:
              switch (np(a2, i3, r2), i3) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r2 = !!r2.autoFocus;
                  break a;
                case `img`:
                  r2 = true;
                  break a;
                default:
                  r2 = false;
              }
            r2 && vl(t3);
          }
        }
        return z(t3), t3.subtreeFlags &= -33554433, yl(t3, t3.type, e3 === null ? null : e3.memoizedProps, t3.pendingProps, n2), null;
      case 6:
        if (e3 && t3.stateNode != null)
          e3.memoizedProps !== r2 && vl(t3);
        else {
          if (typeof r2 != `string` && t3.stateNode === null)
            throw Error(s2(166));
          if (e3 = Ie.current, Sa(t3)) {
            if (e3 = t3.stateNode, n2 = t3.memoizedProps, r2 = null, i3 = D, i3 !== null)
              switch (i3.tag) {
                case 27:
                case 5:
                  r2 = i3.memoizedProps;
              }
            e3[It] = t3, e3 = !!(e3.nodeValue === n2 || r2 !== null && r2.suppressHydrationWarning === true || ep(e3.nodeValue, n2)), e3 || ya(t3, true);
          } else
            e3 = lp(e3).createTextNode(r2), e3[It] = t3, t3.stateNode = e3;
        }
        return z(t3), null;
      case 31:
        if (n2 = t3.memoizedState, e3 === null || e3.memoizedState !== null) {
          if (r2 = Sa(t3), n2 !== null) {
            if (e3 === null) {
              if (!r2)
                throw Error(s2(318));
              if (e3 = t3.memoizedState, e3 = e3 === null ? null : e3.dehydrated, !e3)
                throw Error(s2(557));
              e3[It] = t3;
            } else
              Ca(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            z(t3), e3 = false;
          } else
            n2 = wa(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = n2), e3 = true;
          if (!e3)
            return t3.flags & 256 ? (Ko(t3), t3) : (Ko(t3), null);
          if (t3.flags & 128)
            throw Error(s2(558));
        }
        return z(t3), null;
      case 13:
        if (r2 = t3.memoizedState, e3 === null || e3.memoizedState !== null && e3.memoizedState.dehydrated !== null) {
          if (i3 = Sa(t3), r2 !== null && r2.dehydrated !== null) {
            if (e3 === null) {
              if (!i3)
                throw Error(s2(318));
              if (i3 = t3.memoizedState, i3 = i3 === null ? null : i3.dehydrated, !i3)
                throw Error(s2(317));
              i3[It] = t3;
            } else
              Ca(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            z(t3), i3 = false;
          } else
            i3 = wa(), e3 !== null && e3.memoizedState !== null && (e3.memoizedState.hydrationErrors = i3), i3 = true;
          if (!i3)
            return t3.flags & 256 ? (Ko(t3), t3) : (Ko(t3), null);
        }
        return Ko(t3), t3.flags & 128 ? (t3.lanes = n2, t3) : (n2 = r2 !== null, e3 = e3 !== null && e3.memoizedState !== null, n2 && (r2 = t3.child, i3 = null, r2.alternate !== null && r2.alternate.memoizedState !== null && r2.alternate.memoizedState.cachePool !== null && (i3 = r2.alternate.memoizedState.cachePool.pool), a2 = null, r2.memoizedState !== null && r2.memoizedState.cachePool !== null && (a2 = r2.memoizedState.cachePool.pool), a2 !== i3 && (r2.flags |= 2048)), n2 !== e3 && n2 && (t3.child.flags |= 8192), xl(t3, t3.updateQueue), z(t3), null);
      case 4:
        return ze(), e3 === null && Wf(t3.stateNode.containerInfo), t3.flags |= 67108864, z(t3), null;
      case 10:
        return Aa(t3.type), z(t3), null;
      case 19:
        if (Yo(t3), r2 = t3.memoizedState, r2 === null)
          return z(t3), null;
        if (i3 = !!(t3.flags & 128), a2 = r2.rendering, a2 === null) {
          if (i3)
            Sl(r2, false);
          else {
            if (Y !== 0 || e3 !== null && e3.flags & 128)
              for (e3 = t3.child; e3 !== null; ) {
                if (a2 = Xo(e3), a2 !== null) {
                  for (t3.flags |= 128, Sl(r2, false), e3 = a2.updateQueue, t3.updateQueue = e3, xl(t3, e3), t3.subtreeFlags = 0, e3 = n2, n2 = t3.child; n2 !== null; )
                    Ji(n2, e3), n2 = n2.sibling;
                  return Jo(t3, qo.current & 1 | 2), k && da(t3, r2.treeForkCount), t3.child;
                }
                e3 = e3.sibling;
              }
            r2.tail !== null && et() > _d && (t3.flags |= 128, i3 = true, Sl(r2, false), t3.lanes = 4194304);
          }
        } else {
          if (!i3) {
            if (e3 = Xo(a2), e3 !== null) {
              if (t3.flags |= 128, i3 = true, e3 = e3.updateQueue, t3.updateQueue = e3, xl(t3, e3), Sl(r2, true), r2.tail === null && r2.tailMode !== `collapsed` && r2.tailMode !== `visible` && !a2.alternate && !k)
                return z(t3), null;
            } else
              2 * et() - r2.renderingStartTime > _d && n2 !== 536870912 && (t3.flags |= 128, i3 = true, Sl(r2, false), t3.lanes = 4194304);
          }
          r2.isBackwards ? (a2.sibling = t3.child, t3.child = a2) : (e3 = r2.last, e3 === null ? t3.child = a2 : e3.sibling = a2, r2.last = a2);
        }
        if (r2.tail !== null) {
          e3 = r2.tail;
          a: {
            for (n2 = e3; n2 !== null; ) {
              if (n2.alternate !== null) {
                n2 = false;
                break a;
              }
              n2 = n2.sibling;
            }
            n2 = true;
          }
          return r2.rendering = e3, r2.tail = e3.sibling, r2.renderingStartTime = et(), e3.sibling = null, a2 = qo.current, a2 = i3 ? a2 & 1 | 2 : a2 & 1, r2.tailMode === `visible` || r2.tailMode === `collapsed` || !n2 || k ? Jo(t3, a2) : (n2 = a2, w(j, t3), w(qo, n2), Vo === null && (Vo = t3)), k && da(t3, r2.treeForkCount), e3;
        }
        return z(t3), null;
      case 22:
      case 23:
        return Ko(t3), Bo(), r2 = t3.memoizedState !== null, e3 === null ? r2 && (t3.flags |= 8192) : e3.memoizedState !== null !== r2 && (t3.flags |= 8192), r2 ? n2 & 536870912 && !(t3.flags & 128) && (z(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : z(t3), n2 = t3.updateQueue, n2 !== null && xl(t3, n2.retryQueue), n2 = null, e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n2 = e3.memoizedState.cachePool.pool), r2 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r2 = t3.memoizedState.cachePool.pool), r2 !== n2 && (t3.flags |= 2048), e3 !== null && Ne(to), null;
      case 24:
        return n2 = null, e3 !== null && (n2 = e3.memoizedState.cache), t3.memoizedState.cache !== n2 && (t3.flags |= 2048), Aa(A), z(t3), null;
      case 25:
        return null;
      case 30:
        return t3.flags |= 33554432, z(t3), null;
    }
    throw Error(s2(156, t3.tag));
  }
  function wl(e3, t3) {
    switch (ma(t3), t3.tag) {
      case 1:
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 3:
        return Aa(A), ze(), e3 = t3.flags, e3 & 65536 && !(e3 & 128) ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 26:
      case 27:
      case 5:
        return Ve(t3), null;
      case 31:
        if (t3.memoizedState !== null) {
          if (Ko(t3), t3.alternate === null)
            throw Error(s2(340));
          Ca();
        }
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 13:
        if (Ko(t3), e3 = t3.memoizedState, e3 !== null && e3.dehydrated !== null) {
          if (t3.alternate === null)
            throw Error(s2(340));
          Ca();
        }
        return e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 19:
        return Yo(t3), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, e3 = t3.memoizedState, e3 !== null && (e3.rendering = null, e3.tail = null), t3.flags |= 4, t3) : null;
      case 4:
        return ze(), null;
      case 10:
        return Aa(t3.type), null;
      case 22:
      case 23:
        return Ko(t3), Bo(), e3 !== null && Ne(to), e3 = t3.flags, e3 & 65536 ? (t3.flags = e3 & -65537 | 128, t3) : null;
      case 24:
        return Aa(A), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Tl(e3, t3) {
    switch (ma(t3), t3.tag) {
      case 3:
        Aa(A), ze();
        break;
      case 26:
      case 27:
      case 5:
        Ve(t3);
        break;
      case 4:
        ze();
        break;
      case 31:
        t3.memoizedState !== null && Ko(t3);
        break;
      case 13:
        Ko(t3);
        break;
      case 19:
        Yo(t3);
        break;
      case 10:
        Aa(t3.type);
        break;
      case 22:
      case 23:
        Ko(t3), Bo(), e3 !== null && Ne(to);
        break;
      case 24:
        Aa(A);
    }
  }
  function El(e3, t3) {
    try {
      var n2 = t3.updateQueue, r2 = n2 === null ? null : n2.lastEffect;
      if (r2 !== null) {
        var i3 = r2.next;
        n2 = i3;
        do {
          if ((n2.tag & e3) === e3) {
            r2 = void 0;
            var a2 = n2.create, o3 = n2.inst;
            r2 = a2(), o3.destroy = r2;
          }
          n2 = n2.next;
        } while (n2 !== i3);
      }
    } catch (e4) {
      Z(t3, t3.return, e4);
    }
  }
  function Dl(e3, t3, n2) {
    try {
      var r2 = t3.updateQueue, i3 = r2 === null ? null : r2.lastEffect;
      if (i3 !== null) {
        var a2 = i3.next;
        r2 = a2;
        do {
          if ((r2.tag & e3) === e3) {
            var o3 = r2.inst, s3 = o3.destroy;
            if (s3 !== void 0) {
              o3.destroy = void 0, i3 = t3;
              var c3 = n2, l3 = s3;
              try {
                l3();
              } catch (e4) {
                Z(i3, c3, e4);
              }
            }
          }
          r2 = r2.next;
        } while (r2 !== a2);
      }
    } catch (e4) {
      Z(t3, t3.return, e4);
    }
  }
  function Ol(e3) {
    var t3 = e3.updateQueue;
    if (t3 !== null) {
      var n2 = e3.stateNode;
      try {
        Fo(t3, n2);
      } catch (t4) {
        Z(e3, e3.return, t4);
      }
    }
  }
  function kl(e3, t3, n2) {
    n2.props = kc(e3.type, e3.memoizedProps), n2.state = e3.memoizedState;
    try {
      n2.componentWillUnmount();
    } catch (n3) {
      Z(e3, t3, n3);
    }
  }
  function Al(e3, t3) {
    try {
      var n2 = e3.ref;
      if (n2 !== null) {
        switch (e3.tag) {
          case 26:
          case 27:
          case 5:
            var r2 = e3.stateNode;
            break;
          case 30:
            var i3 = e3.stateNode, a2 = Ai(e3.memoizedProps, i3);
            (i3.ref === null || i3.ref.name !== a2) && (i3.ref = Pp(a2)), r2 = i3.ref;
            break;
          case 7:
            if (e3.stateNode === null) {
              var o3 = new Fp(e3);
              h(e3.child, false, Qp, o3, void 0, void 0), e3.stateNode = o3;
            }
            r2 = e3.stateNode;
            break;
          default:
            r2 = e3.stateNode;
        }
        typeof n2 == `function` ? e3.refCleanup = n2(r2) : n2.current = r2;
      }
    } catch (n3) {
      Z(e3, t3, n3);
    }
  }
  function jl(e3, t3) {
    var n2 = e3.ref, r2 = e3.refCleanup;
    if (n2 !== null) {
      if (typeof r2 == `function`)
        try {
          r2();
        } catch (n3) {
          Z(e3, t3, n3);
        } finally {
          e3.refCleanup = null, e3 = e3.alternate, e3 != null && (e3.refCleanup = null);
        }
      else if (typeof n2 == `function`)
        try {
          n2(null);
        } catch (n3) {
          Z(e3, t3, n3);
        }
      else
        n2.current = null;
    }
  }
  function Ml(e3, t3) {
    if ((e3.tag === 5 || e3.tag === 27 || e3.tag === 6) && e3.alternate === null && t3 !== null)
      for (var n2 = 0; n2 < t3.length; n2++)
        em(e3.stateNode, t3[n2]);
  }
  function Nl(e3) {
    for (var t3 = e3.return; t3 !== null && (Il(t3) && em(e3.stateNode, t3.stateNode), !Fl(t3)); )
      t3 = t3.return;
  }
  function Pl(e3) {
    for (var t3 = e3.return; t3 !== null && (Il(t3) && tm(e3.stateNode, t3.stateNode), !Fl(t3)); )
      t3 = t3.return;
  }
  function Fl(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 27;
  }
  function Il(e3) {
    return e3 && e3.tag === 7 && e3.stateNode !== null;
  }
  function Ll(e3) {
    var t3 = e3.type, n2 = e3.memoizedProps, r2 = e3.stateNode;
    try {
      a:
        switch (t3) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n2.autoFocus && r2.focus();
            break a;
          case `img`:
            n2.src ? r2.src = n2.src : n2.srcSet && (r2.srcset = n2.srcSet);
        }
    } catch (t4) {
      Z(e3, e3.return, t4);
    }
  }
  function Rl(e3, t3, n2) {
    try {
      var r2 = e3.stateNode;
      ip(r2, e3.type, n2, t3), r2[Lt] = t3;
    } catch (t4) {
      Z(e3, e3.return, t4);
    }
  }
  function zl(e3) {
    return e3.tag === 5 || e3.tag === 3 || e3.tag === 26 || e3.tag === 27 && Sp(e3.type) || e3.tag === 4;
  }
  function Bl(e3) {
    a:
      for (; ; ) {
        for (; e3.sibling === null; ) {
          if (e3.return === null || zl(e3.return))
            return null;
          e3 = e3.return;
        }
        for (e3.sibling.return = e3.return, e3 = e3.sibling; e3.tag !== 5 && e3.tag !== 6 && e3.tag !== 18; ) {
          if (e3.tag === 27 && Sp(e3.type) || e3.flags & 2 || e3.child === null || e3.tag === 4)
            continue a;
          e3.child.return = e3, e3 = e3.child;
        }
        if (!(e3.flags & 2))
          return e3.stateNode;
      }
  }
  function Vl(e3, t3, n2, r2) {
    var i3 = e3.tag;
    if (i3 === 5 || i3 === 6)
      i3 = e3.stateNode, t3 ? (n2.nodeType === 9 ? n2.body : n2.nodeName === `HTML` ? n2.ownerDocument.body : n2).insertBefore(i3, t3) : (t3 = n2.nodeType === 9 ? n2.body : n2.nodeName === `HTML` ? n2.ownerDocument.body : n2, t3.appendChild(i3), n2 = n2._reactRootContainer, n2 != null || t3.onclick !== null || (t3.onclick = jn)), Ml(e3, r2), E = true;
    else if (i3 !== 4 && (i3 === 27 && (Ml(e3, r2), r2 = null, Sp(e3.type) && (n2 = e3.stateNode, t3 = null)), e3 = e3.child, e3 !== null))
      for (Vl(e3, t3, n2, r2), e3 = e3.sibling; e3 !== null; )
        Vl(e3, t3, n2, r2), e3 = e3.sibling;
  }
  function Hl(e3, t3, n2, r2) {
    var i3 = e3.tag;
    if (i3 === 5 || i3 === 6)
      i3 = e3.stateNode, t3 ? n2.insertBefore(i3, t3) : n2.appendChild(i3), Ml(e3, r2), E = true;
    else if (i3 !== 4 && (i3 === 27 && (Ml(e3, r2), r2 = null, Sp(e3.type) && (n2 = e3.stateNode)), e3 = e3.child, e3 !== null))
      for (Hl(e3, t3, n2, r2), e3 = e3.sibling; e3 !== null; )
        Hl(e3, t3, n2, r2), e3 = e3.sibling;
  }
  function Ul(e3) {
    var t3 = e3.stateNode, n2 = e3.memoizedProps;
    try {
      for (var r2 = e3.type, i3 = t3.attributes; i3.length; )
        t3.removeAttributeNode(i3[0]);
      np(t3, r2, n2), t3[It] = e3, t3[Lt] = n2;
    } catch (t4) {
      Z(e3, e3.return, t4);
    }
  }
  var Wl = false, Gl = null;
  function Kl(e3) {
    (e3.tag === 30 || e3.subtreeFlags & 33554432) && (Wl = true);
  }
  var ql = null;
  function Jl() {
    var e3 = ql;
    return ql = null, e3;
  }
  var Yl = 0;
  function Xl(e3, t3, n2, r2, i3) {
    return Yl = 0, Zl(e3.child, t3, n2, r2, i3);
  }
  function Zl(e3, t3, n2, r2, i3) {
    for (var a2 = false; e3 !== null; ) {
      if (e3.tag === 5) {
        var o3 = e3.stateNode;
        if (r2 !== null) {
          var s3 = Op(o3);
          r2.push(s3), s3.view && (a2 = true);
        } else
          a2 || Op(o3).view && (a2 = true);
        Wl = true, Tp(o3, Yl === 0 ? t3 : t3 + `_` + Yl, n2), Yl++;
      } else
        (e3.tag !== 22 || e3.memoizedState === null) && (e3.tag === 30 && i3 || Zl(e3.child, t3, n2, r2, i3) && (a2 = true));
      e3 = e3.sibling;
    }
    return a2;
  }
  function Ql(e3, t3) {
    for (; e3 !== null; )
      e3.tag === 5 ? Ep(e3.stateNode, e3.memoizedProps) : (e3.tag !== 22 || e3.memoizedState === null) && (e3.tag === 30 && t3 || Ql(e3.child, t3)), e3 = e3.sibling;
  }
  function $l(e3) {
    if (e3.subtreeFlags & 18874368)
      for (e3 = e3.child; e3 !== null; ) {
        if ((e3.tag !== 22 || e3.memoizedState === null) && ($l(e3), e3.tag === 30 && e3.flags & 18874368 && e3.stateNode.paired)) {
          var t3 = e3.memoizedProps;
          if (t3.name == null || t3.name === `auto`)
            throw Error(s2(544));
          var n2 = t3.name;
          t3 = Mi(t3.default, t3.share), t3 !== `none` && (Xl(e3, n2, t3, null, false) || Ql(e3.child, false));
        }
        e3 = e3.sibling;
      }
  }
  function eu(e3, t3) {
    if (e3.tag === 30) {
      var n2 = e3.stateNode, r2 = e3.memoizedProps, i3 = Ai(r2, n2), a2 = Mi(r2.default, n2.paired ? r2.share : r2.enter);
      a2 === `none` ? $l(e3) : Xl(e3, i3, a2, null, false) ? ($l(e3), n2.paired || t3 || Nd(e3, r2.onEnter)) : Ql(e3.child, false);
    } else if (e3.subtreeFlags & 33554432)
      for (e3 = e3.child; e3 !== null; )
        eu(e3, t3), e3 = e3.sibling;
    else
      $l(e3);
  }
  function tu(e3) {
    if (Gl !== null && Gl.size !== 0) {
      var t3 = Gl;
      if (e3.subtreeFlags & 18874368)
        for (e3 = e3.child; e3 !== null; ) {
          if (e3.tag !== 22 || e3.memoizedState === null) {
            if (e3.tag === 30 && e3.flags & 18874368) {
              var n2 = e3.memoizedProps, r2 = n2.name;
              if (r2 != null && r2 !== `auto`) {
                var i3 = t3.get(r2);
                if (i3 !== void 0) {
                  var a2 = Mi(n2.default, n2.share);
                  if (a2 !== `none` && (Xl(e3, r2, a2, null, false) ? (a2 = e3.stateNode, i3.paired = a2, a2.paired = i3, Nd(e3, n2.onShare)) : Ql(e3.child, false)), t3.delete(r2), t3.size === 0)
                    break;
                }
              }
            }
            tu(e3);
          }
          e3 = e3.sibling;
        }
    }
  }
  function nu(e3) {
    if (e3.tag === 30) {
      var t3 = e3.memoizedProps, n2 = Ai(t3, e3.stateNode), r2 = Gl === null ? void 0 : Gl.get(n2), i3 = Mi(t3.default, r2 === void 0 ? t3.exit : t3.share);
      i3 !== `none` && (Xl(e3, n2, i3, null, false) ? r2 === void 0 ? Nd(e3, t3.onExit) : (i3 = e3.stateNode, r2.paired = i3, i3.paired = r2, Gl.delete(n2), Nd(e3, t3.onShare)) : Ql(e3.child, false)), Gl !== null && tu(e3);
    } else if (e3.subtreeFlags & 33554432)
      for (e3 = e3.child; e3 !== null; )
        nu(e3), e3 = e3.sibling;
    else
      Gl !== null && tu(e3);
  }
  function ru(e3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        var t3 = e3.memoizedProps, n2 = Ai(t3, e3.stateNode);
        t3 = Mi(t3.default, t3.update), e3.flags &= -5, t3 !== `none` && Xl(e3, n2, t3, e3.memoizedState = [], false);
      } else
        e3.subtreeFlags & 33554432 && ru(e3);
      e3 = e3.sibling;
    }
  }
  function iu(e3) {
    if (e3.subtreeFlags & 18874368)
      for (e3 = e3.child; e3 !== null; ) {
        if (e3.tag !== 22 || e3.memoizedState === null) {
          if (e3.tag === 30 && e3.flags & 18874368) {
            var t3 = e3.stateNode;
            t3.paired !== null && (t3.paired = null, Ql(e3.child, false));
          }
          iu(e3);
        }
        e3 = e3.sibling;
      }
  }
  function au(e3) {
    if (e3.tag === 30)
      e3.stateNode.paired = null, Ql(e3.child, false), iu(e3);
    else if (e3.subtreeFlags & 33554432)
      for (e3 = e3.child; e3 !== null; )
        au(e3), e3 = e3.sibling;
    else
      iu(e3);
  }
  function ou(e3) {
    for (e3 = e3.child; e3 !== null; )
      e3.tag === 30 ? Ql(e3.child, false) : e3.subtreeFlags & 33554432 && ou(e3), e3 = e3.sibling;
  }
  function su(e3, t3, n2, r2, i3, a2, o3) {
    for (var s3 = false; t3 !== null; ) {
      if (t3.tag === 5) {
        var c3 = t3.stateNode;
        if (a2 !== null && Yl < a2.length) {
          var l3 = a2[Yl], u3 = Op(c3);
          (l3.view || u3.view) && (s3 = true);
          var d3;
          if (d3 = !(e3.flags & 4)) {
            if (u3.clip)
              d3 = true;
            else {
              d3 = l3.rect;
              var f3 = u3.rect;
              d3 = d3.y !== f3.y || d3.x !== f3.x || d3.height !== f3.height || d3.width !== f3.width;
            }
          }
          d3 && (e3.flags |= 4), u3.abs ? u3 = !l3.abs : (l3 = l3.rect, u3 = u3.rect, u3 = l3.height !== u3.height || l3.width !== u3.width), u3 && (e3.flags |= 32);
        } else
          e3.flags |= 32;
        e3.flags & 4 && Tp(c3, Yl === 0 ? n2 : n2 + `_` + Yl, i3), s3 && e3.flags & 4 || (ql === null && (ql = []), ql.push(c3, Yl === 0 ? r2 : r2 + `_` + Yl, t3.memoizedProps)), Yl++;
      } else
        (t3.tag !== 22 || t3.memoizedState === null) && (t3.tag === 30 && o3 ? e3.flags |= t3.flags & 32 : su(e3, t3.child, n2, r2, i3, a2, o3) && (s3 = true));
      t3 = t3.sibling;
    }
    return s3;
  }
  function cu(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) {
      if (e3.tag === 30) {
        var n2 = e3.memoizedProps, r2 = e3.stateNode, i3 = Ai(n2, r2), a2 = Mi(n2.default, n2.update);
        if (t3) {
          r2 = r2.clones;
          var o3 = r2 === null ? null : r2.map(kp);
        } else
          o3 = e3.memoizedState, e3.memoizedState = null;
        r2 = e3;
        var s3 = e3.child;
        Yl = 0, i3 = su(r2, s3, i3, i3, a2, o3, false), e3.flags & 4 && i3 && (t3 || Nd(e3, n2.onUpdate));
      } else
        e3.subtreeFlags & 33554432 && cu(e3, t3);
      e3 = e3.sibling;
    }
  }
  var B = false, V = false, lu = false, uu = false, du = typeof WeakSet == `function` ? WeakSet : Set, H = null, fu = false, pu = false, mu = false, hu = false;
  function gu(e3, t3, n2) {
    if (e3 = e3.containerInfo, sp = gh, e3 = oi(e3), si(e3)) {
      if (`selectionStart` in e3)
        var r2 = {start: e3.selectionStart, end: e3.selectionEnd};
      else
        a: {
          r2 = (r2 = e3.ownerDocument) && r2.defaultView || window;
          var i3 = r2.getSelection && r2.getSelection();
          if (i3 && i3.rangeCount !== 0) {
            r2 = i3.anchorNode;
            var a2 = i3.anchorOffset, o3 = i3.focusNode;
            i3 = i3.focusOffset;
            try {
              r2.nodeType, o3.nodeType;
            } catch {
              r2 = null;
              break a;
            }
            var s3 = 0, c3 = -1, l3 = -1, u3 = 0, d3 = 0, f3 = e3, p2 = null;
            b:
              for (; ; ) {
                for (var m2; f3 !== r2 || a2 !== 0 && f3.nodeType !== 3 || (c3 = s3 + a2), f3 !== o3 || i3 !== 0 && f3.nodeType !== 3 || (l3 = s3 + i3), f3.nodeType === 3 && (s3 += f3.nodeValue.length), (m2 = f3.firstChild) !== null; )
                  p2 = f3, f3 = m2;
                for (; ; ) {
                  if (f3 === e3)
                    break b;
                  if (p2 === r2 && ++u3 === a2 && (c3 = s3), p2 === o3 && ++d3 === i3 && (l3 = s3), (m2 = f3.nextSibling) !== null)
                    break;
                  f3 = p2, p2 = f3.parentNode;
                }
                f3 = m2;
              }
            r2 = c3 === -1 || l3 === -1 ? null : {start: c3, end: l3};
          } else
            r2 = null;
        }
      r2 || (r2 = {start: 0, end: 0});
    } else
      r2 = null;
    for (cp = {focusedElem: e3, selectionRange: r2}, gh = false, n2 = (n2 & 335544064) === n2, H = t3, t3 = n2 ? 9270 : 1024; H !== null; ) {
      if (e3 = H, n2 && (r2 = e3.deletions, r2 !== null))
        for (a2 = 0; a2 < r2.length; a2++)
          n2 && nu(r2[a2]);
      if (e3.alternate === null && e3.flags & 2)
        n2 && Kl(e3), _u(n2);
      else {
        if (e3.tag === 22) {
          if (r2 = e3.alternate, e3.memoizedState !== null) {
            r2 !== null && r2.memoizedState === null && n2 && nu(r2), _u(n2);
            continue;
          }
          if (r2 !== null && r2.memoizedState !== null) {
            n2 && Kl(e3), _u(n2);
            continue;
          }
        }
        r2 = e3.child, (e3.subtreeFlags & t3) !== 0 && r2 !== null ? (r2.return = e3, H = r2) : (n2 && ru(e3), _u(n2));
      }
    }
    Gl = null;
  }
  function _u(e3) {
    for (; H !== null; ) {
      var t3 = H, n2 = e3, r2 = t3.alternate, i3 = t3.flags;
      switch (t3.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (i3 & 1024 && r2 !== null) {
            n2 = void 0, i3 = r2.memoizedProps, r2 = r2.memoizedState;
            var a2 = t3.stateNode;
            try {
              var o3 = kc(t3.type, i3);
              n2 = a2.getSnapshotBeforeUpdate(o3, r2), a2.__reactInternalSnapshotBeforeUpdate = n2;
            } catch (e4) {
              Z(t3, t3.return, e4);
            }
          }
          break;
        case 3:
          if (i3 & 1024) {
            if (r2 = t3.stateNode.containerInfo, n2 = r2.nodeType, n2 === 9)
              nm(r2);
            else if (n2 === 1)
              switch (r2.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r2);
                  break;
                default:
                  r2.textContent = ``;
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n2 && r2 !== null && (n2 = Ai(r2.memoizedProps, r2.stateNode), i3 = t3.memoizedProps, i3 = Mi(i3.default, i3.update), i3 !== `none` && Xl(r2, n2, i3, r2.memoizedState = [], true));
          break;
        default:
          if (i3 & 1024)
            throw Error(s2(163));
      }
      if (r2 = t3.sibling, r2 !== null) {
        r2.return = t3.return, H = r2;
        break;
      }
      H = t3.return;
    }
  }
  function vu(e3, t3, n2) {
    var r2 = n2.flags;
    switch (n2.tag) {
      case 0:
      case 11:
      case 15:
        Lu(e3, n2), r2 & 4 && El(5, n2);
        break;
      case 1:
        if (Lu(e3, n2), r2 & 4) {
          if (e3 = n2.stateNode, t3 === null)
            try {
              e3.componentDidMount();
            } catch (e4) {
              Z(n2, n2.return, e4);
            }
          else {
            var i3 = kc(n2.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e3.componentDidUpdate(i3, t3, e3.__reactInternalSnapshotBeforeUpdate);
            } catch (e4) {
              Z(n2, n2.return, e4);
            }
          }
        }
        r2 & 64 && Ol(n2), r2 & 512 && Al(n2, n2.return);
        break;
      case 3:
        if (Lu(e3, n2), r2 & 64 && (e3 = n2.updateQueue, e3 !== null)) {
          if (t3 = null, n2.child !== null)
            switch (n2.child.tag) {
              case 27:
              case 5:
                t3 = n2.child.stateNode;
                break;
              case 1:
                t3 = n2.child.stateNode;
            }
          try {
            Fo(e3, t3);
          } catch (e4) {
            Z(n2, n2.return, e4);
          }
        }
        break;
      case 27:
        t3 === null && r2 & 4 && Ul(n2);
      case 26:
      case 5:
        Lu(e3, n2), t3 === null && r2 & 4 && Ll(n2), r2 & 512 && Al(n2, n2.return);
        break;
      case 12:
        Lu(e3, n2);
        break;
      case 31:
        Lu(e3, n2), r2 & 4 && Eu(e3, n2);
        break;
      case 13:
        Lu(e3, n2), r2 & 4 && Du(e3, n2), r2 & 64 && (e3 = n2.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null && (n2 = _f.bind(null, n2), cm(e3, n2))));
        break;
      case 22:
        if (r2 = n2.memoizedState !== null || B, !r2) {
          var a2 = t3 !== null && t3.memoizedState !== null || V;
          t3 = B, i3 = V, B = r2, (V = a2) && !i3 ? (r2 = 2, n2.subtreeFlags & 8772 && (r2 |= 1), zu(e3, n2, r2)) : Lu(e3, n2), B = t3, V = i3;
        }
        break;
      case 30:
        Lu(e3, n2), r2 & 512 && Al(n2, n2.return);
        break;
      case 7:
        r2 & 512 && Al(n2, n2.return);
      default:
        Lu(e3, n2);
    }
  }
  function yu(e3, t3) {
    for (e3 = e3.child; e3 !== null; )
      bu(e3, t3), e3 = e3.sibling;
  }
  function bu(e3, t3) {
    switch (e3.tag) {
      case 5:
      case 26:
        try {
          var n2 = e3.stateNode;
          if (t3) {
            var r2 = n2.style;
            typeof r2.setProperty == `function` ? r2.setProperty(`display`, `none`, `important`) : r2.display = `none`;
          } else {
            var i3 = e3.stateNode, a2 = e3.memoizedProps.style, o3 = a2 != null && a2.hasOwnProperty(`display`) ? a2.display : null;
            i3.style.display = o3 == null || typeof o3 == `boolean` ? `` : (`` + o3).trim();
          }
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        xu(e3, t3);
        break;
      case 6:
        try {
          e3.stateNode.nodeValue = t3 ? `` : e3.memoizedProps, E = true;
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        break;
      case 18:
        try {
          var s3 = e3.stateNode;
          t3 ? wp(s3, true) : wp(e3.stateNode, false);
        } catch (t4) {
          Z(e3, e3.return, t4);
        }
        break;
      case 22:
      case 23:
        e3.memoizedState === null && yu(e3, t3);
        break;
      default:
        yu(e3, t3);
    }
  }
  function xu(e3, t3) {
    if (e3.subtreeFlags & 67108864)
      for (e3 = e3.child; e3 !== null; ) {
        a: {
          var n2 = e3, r2 = t3;
          switch (n2.tag) {
            case 4:
              bu(n2, r2);
              break a;
            case 22:
              n2.memoizedState === null && xu(n2, r2);
              break a;
            default:
              xu(n2, r2);
          }
        }
        e3 = e3.sibling;
      }
  }
  function Su(e3) {
    var t3 = e3.alternate;
    t3 !== null && (e3.alternate = null, Su(t3)), e3.child = null, e3.deletions = null, e3.sibling = null, e3.tag === 5 && (t3 = e3.stateNode, t3 !== null && Gt(t3)), e3.stateNode = null, e3.return = null, e3.dependencies = null, e3.memoizedProps = null, e3.memoizedState = null, e3.pendingProps = null, e3.stateNode = null, e3.updateQueue = null;
  }
  var U = null, Cu = false;
  function wu(e3, t3, n2) {
    for (n2 = n2.child; n2 !== null; )
      Tu(e3, t3, n2), n2 = n2.sibling;
  }
  function Tu(e3, t3, n2) {
    if (ut && typeof ut.onCommitFiberUnmount == `function`)
      try {
        ut.onCommitFiberUnmount(lt, n2);
      } catch {
      }
    switch (n2.tag) {
      case 26:
        V || jl(n2, t3), wu(e3, t3, n2), n2.memoizedState ? n2.memoizedState.count-- : n2.stateNode && !V && (n2 = n2.stateNode, n2.parentNode.removeChild(n2));
        break;
      case 27:
        V || jl(n2, t3), Pl(n2);
        var r2 = U, i3 = Cu;
        Sp(n2.type) && (U = n2.stateNode, Cu = false), wu(e3, t3, n2), gm(n2.stateNode, n2.type, n2.memoizedProps), U = r2, Cu = i3;
        break;
      case 5:
        V || jl(n2, t3), Pl(n2);
      case 6:
        if (n2.tag === 6 && Pl(n2), r2 = U, i3 = Cu, U = null, wu(e3, t3, n2), U = r2, Cu = i3, U !== null) {
          if (Cu)
            try {
              (U.nodeType === 9 ? U.body : U.nodeName === `HTML` ? U.ownerDocument.body : U).removeChild(n2.stateNode), E = true;
            } catch (e4) {
              Z(n2, t3, e4);
            }
          else
            try {
              U.removeChild(n2.stateNode), E = true;
            } catch (e4) {
              Z(n2, t3, e4);
            }
        }
        break;
      case 18:
        U !== null && (Cu ? (e3 = U, Cp(e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, n2.stateNode), Hh(e3)) : Cp(U, n2.stateNode));
        break;
      case 4:
        r2 = U, i3 = Cu, U = n2.stateNode.containerInfo, Cu = true, wu(e3, t3, n2), U = r2, Cu = i3;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dl(2, n2, t3), V || Dl(4, n2, t3), wu(e3, t3, n2);
        break;
      case 1:
        V || (jl(n2, t3), r2 = n2.stateNode, typeof r2.componentWillUnmount == `function` && kl(n2, t3, r2)), wu(e3, t3, n2);
        break;
      case 21:
        wu(e3, t3, n2);
        break;
      case 22:
        V = (r2 = V) || n2.memoizedState !== null, wu(e3, t3, n2), V = r2;
        break;
      case 30:
        jl(n2, t3), wu(e3, t3, n2);
        break;
      case 7:
        V || jl(n2, t3), wu(e3, t3, n2);
        break;
      default:
        wu(e3, t3, n2);
    }
  }
  function Eu(e3, t3) {
    if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null))) {
      e3 = e3.dehydrated;
      try {
        Hh(e3);
      } catch (e4) {
        Z(t3, t3.return, e4);
      }
    }
  }
  function Du(e3, t3) {
    if (t3.memoizedState === null && (e3 = t3.alternate, e3 !== null && (e3 = e3.memoizedState, e3 !== null && (e3 = e3.dehydrated, e3 !== null))))
      try {
        Hh(e3);
      } catch (e4) {
        Z(t3, t3.return, e4);
      }
  }
  function Ou(e3) {
    switch (e3.tag) {
      case 31:
      case 13:
      case 19:
        var t3 = e3.stateNode;
        return t3 === null && (t3 = e3.stateNode = new du()), t3;
      case 22:
        return e3 = e3.stateNode, t3 = e3._retryCache, t3 === null && (t3 = e3._retryCache = new du()), t3;
      default:
        throw Error(s2(435, e3.tag));
    }
  }
  function ku(e3, t3) {
    var n2 = Ou(e3);
    t3.forEach(function(t4) {
      if (!n2.has(t4)) {
        n2.add(t4);
        var r2 = vf.bind(null, e3, t4);
        t4.then(r2, r2);
      }
    });
  }
  function Au(e3, t3, n2) {
    var r2 = t3.deletions;
    if (r2 !== null)
      for (var i3 = 0; i3 < r2.length; i3++) {
        var a2 = r2[i3], o3 = e3, c3 = t3, l3 = c3;
        a:
          for (; l3 !== null; ) {
            switch (l3.tag) {
              case 27:
                if (Sp(l3.type)) {
                  U = l3.stateNode, Cu = false;
                  break a;
                }
                break;
              case 5:
                U = l3.stateNode, Cu = false;
                break a;
              case 3:
              case 4:
                U = l3.stateNode.containerInfo, Cu = true;
                break a;
            }
            l3 = l3.return;
          }
        if (U === null)
          throw Error(s2(160));
        Tu(o3, c3, a2), U = null, Cu = false, o3 = a2.alternate, o3 !== null && (o3.return = null), a2.return = null;
      }
    if (t3.subtreeFlags & 13886)
      for (t3 = t3.child; t3 !== null; )
        Mu(t3, e3, n2), t3 = t3.sibling;
  }
  var ju = null;
  function Mu(e3, t3, n2) {
    var r2 = e3.alternate, i3 = e3.flags;
    switch (e3.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (i3 & 4 && (r2 = e3.updateQueue, r2 = r2 === null ? null : r2.events, r2 !== null))
          for (var a2 = 0; a2 < r2.length; a2++) {
            var o3 = r2[a2];
            o3.ref.impl = o3.nextImpl;
          }
        Au(t3, e3, n2), Nu(e3), i3 & 4 && (Dl(3, e3, e3.return), El(3, e3), Dl(5, e3, e3.return));
        break;
      case 1:
        Au(t3, e3, n2), Nu(e3), i3 & 512 && (V || r2 === null || jl(r2, r2.return)), i3 & 64 && B && (e3 = e3.updateQueue, e3 !== null && (t3 = e3.callbacks, t3 !== null && (n2 = e3.shared.hiddenCallbacks, e3.shared.hiddenCallbacks = n2 === null ? t3 : n2.concat(t3))));
        break;
      case 26:
        if (a2 = ju, Au(t3, e3, n2), Nu(e3), i3 & 512 && (V || r2 === null || jl(r2, r2.return)), i3 & 4) {
          if (i3 = r2 === null ? null : r2.memoizedState, n2 = e3.memoizedState, r2 === null) {
            if (n2 === null) {
              if (e3.stateNode === null) {
                if (B)
                  e3.stateNode = fp(e3.type, e3.memoizedProps, t3.containerInfo, e3);
                else {
                  a: {
                    t3 = e3.type, n2 = e3.memoizedProps, i3 = a2.ownerDocument || a2;
                    b:
                      switch (t3) {
                        case `title`:
                          r2 = i3.getElementsByTagName(`title`)[0], (!r2 || r2[Ut] || r2[It] || r2.namespaceURI === `http://www.w3.org/2000/svg` || r2.hasAttribute(`itemprop`)) && (r2 = i3.createElement(t3), i3.head.insertBefore(r2, i3.querySelector(`head > title`))), np(r2, t3, n2), r2[It] = e3, T(r2), t3 = r2;
                          break a;
                        case `link`:
                          if (a2 = Gm(`link`, `href`, i3).get(t3 + (n2.href || ``))) {
                            for (o3 = 0; o3 < a2.length; o3++)
                              if (r2 = a2[o3], r2.getAttribute(`href`) === (n2.href == null || n2.href === `` ? null : n2.href) && r2.getAttribute(`rel`) === (n2.rel == null ? null : n2.rel) && r2.getAttribute(`title`) === (n2.title == null ? null : n2.title) && r2.getAttribute(`crossorigin`) === (n2.crossOrigin == null ? null : n2.crossOrigin)) {
                                a2.splice(o3, 1);
                                break b;
                              }
                          }
                          r2 = i3.createElement(t3), np(r2, t3, n2), i3.head.appendChild(r2);
                          break;
                        case `meta`:
                          if (a2 = Gm(`meta`, `content`, i3).get(t3 + (n2.content || ``))) {
                            for (o3 = 0; o3 < a2.length; o3++)
                              if (r2 = a2[o3], r2.getAttribute(`content`) === (n2.content == null ? null : `` + n2.content) && r2.getAttribute(`name`) === (n2.name == null ? null : n2.name) && r2.getAttribute(`property`) === (n2.property == null ? null : n2.property) && r2.getAttribute(`http-equiv`) === (n2.httpEquiv == null ? null : n2.httpEquiv) && r2.getAttribute(`charset`) === (n2.charSet == null ? null : n2.charSet)) {
                                a2.splice(o3, 1);
                                break b;
                              }
                          }
                          r2 = i3.createElement(t3), np(r2, t3, n2), i3.head.appendChild(r2);
                          break;
                        default:
                          throw Error(s2(468, t3));
                      }
                    r2[It] = e3, T(r2), t3 = r2;
                  }
                  e3.stateNode = t3;
                }
              } else
                B || Km(a2, e3.type, e3.stateNode);
            } else
              e3.stateNode = Bm(a2, n2, e3.memoizedProps);
          } else
            i3 === n2 ? n2 === null && e3.stateNode !== null && Rl(e3, e3.memoizedProps, r2.memoizedProps) : (i3 === null ? (t3 = r2.stateNode, t3 === null || V || t3.parentNode.removeChild(t3)) : i3.count--, n2 === null ? B || Km(a2, e3.type, e3.stateNode) : Bm(a2, n2, e3.memoizedProps));
        }
        break;
      case 27:
        Au(t3, e3, n2), Nu(e3), i3 & 512 && (V || r2 === null || jl(r2, r2.return)), r2 !== null && i3 & 4 && Rl(e3, e3.memoizedProps, r2.memoizedProps);
        break;
      case 5:
        if (a2 = lu, lu = false, Au(t3, e3, n2), lu = a2, Nu(e3), i3 & 512 && (V || r2 === null || jl(r2, r2.return)), e3.flags & 32) {
          t3 = e3.stateNode;
          try {
            Cn(t3, ``), E = true;
          } catch (t4) {
            Z(e3, e3.return, t4);
          }
        }
        i3 & 4 && e3.stateNode != null && (t3 = e3.memoizedProps, Rl(e3, t3, r2 === null ? t3 : r2.memoizedProps)), i3 & 1024 && (uu = true);
        break;
      case 6:
        if (Au(t3, e3, n2), Nu(e3), i3 & 4) {
          if (e3.stateNode === null)
            throw Error(s2(162));
          t3 = e3.memoizedProps, n2 = e3.stateNode;
          try {
            n2.nodeValue = t3, E = true;
          } catch (t4) {
            Z(e3, e3.return, t4);
          }
        }
        break;
      case 3:
        if (E = false, Wm = null, a2 = ju, ju = bm(t3.containerInfo), Au(t3, e3, n2), ju = a2, Nu(e3), i3 & 4 && r2 !== null && r2.memoizedState.isDehydrated)
          try {
            Hh(t3.containerInfo);
          } catch (t4) {
            Z(e3, e3.return, t4);
          }
        uu && (uu = false, Pu(e3)), E = false;
        break;
      case 4:
        i3 = lu, lu = B, r2 = on(), a2 = ju, ju = bm(e3.stateNode.containerInfo), Au(t3, e3, n2), Nu(e3), ju = a2, E && pu && (mu = true), E = r2, lu = i3;
        break;
      case 12:
        Au(t3, e3, n2), Nu(e3);
        break;
      case 31:
        Au(t3, e3, n2), Nu(e3), i3 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, ku(e3, t3)));
        break;
      case 13:
        Au(t3, e3, n2), Nu(e3), e3.child.flags & 8192 && e3.memoizedState !== null != (r2 !== null && r2.memoizedState !== null) && (hd = et()), i3 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, ku(e3, t3)));
        break;
      case 22:
        a2 = e3.memoizedState !== null, o3 = r2 !== null && r2.memoizedState !== null;
        var c3 = B, l3 = V, u3 = lu;
        B = c3 || a2, lu = u3 || a2, V = l3 || o3, Au(t3, e3, n2), V = l3, lu = u3, B = c3, Nu(e3), i3 & 8192 && (t3 = e3.stateNode, t3._visibility = a2 ? t3._visibility & -2 : t3._visibility | 1, !a2 || r2 === null || o3 || B || V || (t3 = o3 || V, n2 = B, r2 = V, B = a2 || B, V = t3, Ru(e3, 2), B = n2, V = r2), !a2 && lu || yu(e3, a2)), i3 & 4 && (t3 = e3.updateQueue, t3 !== null && (n2 = t3.retryQueue, n2 !== null && (t3.retryQueue = null, ku(e3, n2))));
        break;
      case 19:
        Au(t3, e3, n2), Nu(e3), i3 & 4 && (t3 = e3.updateQueue, t3 !== null && (e3.updateQueue = null, ku(e3, t3)));
        break;
      case 30:
        i3 & 512 && (V || r2 === null || jl(r2, r2.return)), i3 = on(), a2 = pu, o3 = (n2 & 335544064) === n2, c3 = e3.memoizedProps, pu = o3 && Mi(c3.default, c3.update) !== `none`, Au(t3, e3, n2), Nu(e3), o3 && r2 !== null && E && (e3.flags |= 4), pu = a2, E = i3;
        break;
      case 21:
        break;
      case 7:
        i3 & 512 && (V || r2 === null || jl(r2, r2.return)), r2 && r2.stateNode !== null && (r2.stateNode._fragmentFiber = e3);
      default:
        Au(t3, e3, n2), Nu(e3);
    }
  }
  function Nu(e3) {
    var t3 = e3.flags;
    if (t3 & 2) {
      try {
        for (var n2, r2 = e3.return; r2 !== null; ) {
          if (zl(r2)) {
            n2 = r2;
            break;
          }
          r2 = r2.return;
        }
        r2 = null;
        for (var i3 = e3.return; i3 !== null; ) {
          if (Il(i3)) {
            var a2 = i3.stateNode;
            r2 === null ? r2 = [a2] : r2.push(a2);
          }
          if (Fl(i3))
            break;
          i3 = i3.return;
        }
        var o3 = r2;
        if (n2 == null)
          throw Error(s2(160));
        switch (n2.tag) {
          case 27:
            var c3 = n2.stateNode;
            Hl(e3, Bl(e3), c3, o3);
            break;
          case 5:
            var l3 = n2.stateNode;
            n2.flags & 32 && (Cn(l3, ``), n2.flags &= -33), Hl(e3, Bl(e3), l3, o3);
            break;
          case 3:
          case 4:
            var u3 = n2.stateNode.containerInfo;
            Vl(e3, Bl(e3), u3, o3);
            break;
          default:
            throw Error(s2(161));
        }
      } catch (t4) {
        Z(e3, e3.return, t4);
      }
      e3.flags &= -3;
    }
    t3 & 4096 && (e3.flags &= -4097);
  }
  function Pu(e3) {
    if (e3.subtreeFlags & 1024)
      for (e3 = e3.child; e3 !== null; ) {
        var t3 = e3;
        Pu(t3), t3.tag === 5 && t3.flags & 1024 && (t3 = t3.stateNode, gh = true, t3.reset(), gh = false), e3 = e3.sibling;
      }
  }
  function Fu(e3, t3) {
    if (t3.subtreeFlags & 9270)
      for (t3 = t3.child; t3 !== null; )
        Iu(t3, e3), t3 = t3.sibling;
    else
      cu(t3, false);
  }
  function Iu(e3, t3) {
    var n2 = e3.alternate;
    if (n2 === null)
      eu(e3, false);
    else
      switch (e3.tag) {
        case 3:
          if (hu = fu = false, Jl(), Fu(t3, e3), !fu && !mu) {
            if (e3 = ql, e3 !== null)
              for (var r2 = 0; r2 < e3.length; r2 += 3) {
                n2 = e3[r2];
                var i3 = e3[r2 + 1];
                Ep(n2, e3[r2 + 2]), n2 = n2.ownerDocument.documentElement, n2 !== null && n2.animate({opacity: [0, 0], pointerEvents: [`none`, `none`]}, {duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(` + i3 + `)`});
              }
            e3 = t3.containerInfo, e3 = e3.nodeType === 9 ? e3.documentElement : e3.ownerDocument.documentElement, e3 !== null && e3.style.viewTransitionName === `` && (e3.style.viewTransitionName = `none`, e3.animate({opacity: [0, 0], pointerEvents: [`none`, `none`]}, {duration: 0, fill: `forwards`, pseudoElement: `::view-transition-group(root)`}), e3.animate({width: [0, 0], height: [0, 0]}, {duration: 0, fill: `forwards`, pseudoElement: `::view-transition`})), hu = true;
          }
          ql = null;
          break;
        case 5:
          Fu(t3, e3);
          break;
        case 4:
          r2 = fu, fu = false, Fu(t3, e3), fu && (mu = true), fu = r2;
          break;
        case 22:
          e3.memoizedState === null && (n2.memoizedState === null ? Fu(t3, e3) : eu(e3, false));
          break;
        case 30:
          r2 = fu, i3 = Jl(), fu = false, Fu(t3, e3), fu && (e3.flags |= 4);
          var a2 = e3.memoizedProps, o3 = e3.stateNode;
          t3 = Ai(a2, o3), o3 = Ai(n2.memoizedProps, o3);
          var s3 = Mi(a2.default, a2.update);
          s3 === `none` ? t3 = false : (a2 = n2.memoizedState, n2.memoizedState = null, n2 = e3.child, Yl = 0, t3 = su(e3, n2, t3, o3, s3, a2, true), Yl !== (a2 === null ? 0 : a2.length) && (e3.flags |= 32)), e3.flags & 4 && t3 ? (Nd(e3, e3.memoizedProps.onUpdate), ql = i3) : i3 !== null && (i3.push.apply(i3, ql), ql = i3), fu = e3.flags & 32 ? true : r2;
          break;
        default:
          Fu(t3, e3);
      }
  }
  function Lu(e3, t3) {
    if (t3.subtreeFlags & 8772)
      for (t3 = t3.child; t3 !== null; )
        vu(e3, t3.alternate, t3), t3 = t3.sibling;
  }
  function Ru(e3, t3) {
    for (e3 = e3.child; e3 !== null; ) {
      var n2 = e3, r2 = t3;
      switch (n2.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dl(4, n2, n2.return), Ru(n2, r2);
          break;
        case 1:
          jl(n2, n2.return);
          var i3 = n2.stateNode;
          typeof i3.componentWillUnmount == `function` && kl(n2, n2.return, i3), Ru(n2, r2);
          break;
        case 27:
          r2 & 2 && gm(n2.stateNode, n2.type, n2.memoizedProps);
        case 5:
          jl(n2, n2.return), n2.tag !== 5 && n2.tag !== 27 || Pl(n2), Ru(n2, r2);
          break;
        case 6:
          Pl(n2);
          break;
        case 26:
          jl(n2, n2.return), i3 = n2.stateNode, n2.memoizedState !== null || i3 === null || V || i3.parentNode.removeChild(i3), Ru(n2, r2);
          break;
        case 22:
          n2.memoizedState === null && Ru(n2, r2);
          break;
        case 30:
          jl(n2, n2.return), Ru(n2, r2);
          break;
        case 7:
          jl(n2, n2.return);
        default:
          Ru(n2, r2);
      }
      e3 = e3.sibling;
    }
  }
  function zu(e3, t3, n2) {
    for (n2 = t3.subtreeFlags & 8772 ? n2 : n2 & -2, t3 = t3.child; t3 !== null; ) {
      var r2 = t3.alternate, i3 = e3, a2 = t3, o3 = a2.flags, s3 = !!(n2 & 1);
      switch (a2.tag) {
        case 0:
        case 11:
        case 15:
          zu(i3, a2, n2), El(4, a2);
          break;
        case 1:
          if (zu(i3, a2, n2), r2 = a2, i3 = r2.stateNode, typeof i3.componentDidMount == `function`)
            try {
              i3.componentDidMount();
            } catch (e4) {
              Z(r2, r2.return, e4);
            }
          if (r2 = a2, i3 = r2.updateQueue, i3 !== null) {
            var c3 = r2.stateNode;
            try {
              var l3 = i3.shared.hiddenCallbacks;
              if (l3 !== null)
                for (i3.shared.hiddenCallbacks = null, i3 = 0; i3 < l3.length; i3++)
                  Po(l3[i3], c3);
            } catch (e4) {
              Z(r2, r2.return, e4);
            }
          }
          s3 && o3 & 64 && Ol(a2), Al(a2, a2.return);
          break;
        case 27:
          n2 & 2 && Ul(a2);
        case 5:
          a2.tag !== 5 && a2.tag !== 27 || Nl(a2), zu(i3, a2, n2), s3 && r2 === null && o3 & 4 && Ll(a2), Al(a2, a2.return);
          break;
        case 6:
          Nl(a2);
          break;
        case 26:
          c3 = a2.stateNode, a2.memoizedState !== null || c3 === null || B || Km(bm(c3.ownerDocument), a2.type, c3), zu(i3, a2, n2), s3 && r2 === null && o3 & 4 && Ll(a2), Al(a2, a2.return);
          break;
        case 12:
          zu(i3, a2, n2);
          break;
        case 31:
          zu(i3, a2, n2), s3 && o3 & 4 && Eu(i3, a2);
          break;
        case 13:
          zu(i3, a2, n2), s3 && o3 & 4 && Du(i3, a2);
          break;
        case 22:
          a2.memoizedState === null && zu(i3, a2, n2), Al(a2, a2.return);
          break;
        case 30:
          zu(i3, a2, n2), Al(a2, a2.return);
          break;
        case 7:
          Al(a2, a2.return);
        default:
          zu(i3, a2, n2);
      }
      t3 = t3.sibling;
    }
  }
  function Bu(e3, t3) {
    var n2 = null;
    e3 !== null && e3.memoizedState !== null && e3.memoizedState.cachePool !== null && (n2 = e3.memoizedState.cachePool.pool), e3 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e3 = t3.memoizedState.cachePool.pool), e3 !== n2 && (e3 != null && e3.refCount++, n2 != null && Ua(n2));
  }
  function Vu(e3, t3) {
    e3 = null, t3.alternate !== null && (e3 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e3 && (t3.refCount++, e3 != null && Ua(e3));
  }
  function Hu(e3, t3, n2, r2) {
    var i3 = (n2 & 335544064) === n2;
    if (t3.subtreeFlags & (i3 ? 10262 : 10256))
      for (t3 = t3.child; t3 !== null; )
        Uu(e3, t3, n2, r2), t3 = t3.sibling;
    else
      i3 && ou(t3);
  }
  function Uu(e3, t3, n2, r2) {
    var i3 = (n2 & 335544064) === n2;
    i3 && t3.alternate === null && t3.return !== null && t3.return.alternate !== null && au(t3);
    var a2 = t3.flags;
    switch (t3.tag) {
      case 0:
      case 11:
      case 15:
        Hu(e3, t3, n2, r2), a2 & 2048 && El(9, t3);
        break;
      case 1:
        Hu(e3, t3, n2, r2);
        break;
      case 3:
        Hu(e3, t3, n2, r2), i3 && hu && (e3 = e3.containerInfo, e3 = e3.nodeType === 9 ? e3.body : e3.nodeName === `HTML` ? e3.ownerDocument.body : e3, e3.style.viewTransitionName === `root` && (e3.style.viewTransitionName = ``), e3 = e3.ownerDocument.documentElement, e3 !== null && e3.style.viewTransitionName === `none` && (e3.style.viewTransitionName = ``)), a2 & 2048 && (a2 = null, t3.alternate !== null && (a2 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== a2 && (t3.refCount++, a2 != null && Ua(a2)));
        break;
      case 12:
        if (a2 & 2048) {
          Hu(e3, t3, n2, r2), a2 = t3.stateNode;
          try {
            var o3 = t3.memoizedProps, s3 = o3.id, c3 = o3.onPostCommit;
            typeof c3 == `function` && c3(s3, t3.alternate === null ? `mount` : `update`, a2.passiveEffectDuration, -0);
          } catch (e4) {
            Z(t3, t3.return, e4);
          }
        } else
          Hu(e3, t3, n2, r2);
        break;
      case 31:
        Hu(e3, t3, n2, r2);
        break;
      case 13:
        Hu(e3, t3, n2, r2);
        break;
      case 23:
        break;
      case 22:
        o3 = t3.stateNode, s3 = t3.alternate, t3.memoizedState === null ? (i3 && s3 !== null && s3.memoizedState !== null && au(t3), o3._visibility & 2 ? Hu(e3, t3, n2, r2) : (o3._visibility |= 2, Wu(e3, t3, n2, r2, !!(t3.subtreeFlags & 10256) || false))) : (i3 && s3 !== null && s3.memoizedState === null && au(s3), o3._visibility & 2 ? Hu(e3, t3, n2, r2) : Gu(e3, t3)), a2 & 2048 && Bu(s3, t3);
        break;
      case 24:
        Hu(e3, t3, n2, r2), a2 & 2048 && Vu(t3.alternate, t3);
        break;
      case 30:
        i3 && (a2 = t3.alternate, a2 !== null && (Ql(a2.child, true), Ql(t3.child, true))), Hu(e3, t3, n2, r2);
        break;
      default:
        Hu(e3, t3, n2, r2);
    }
  }
  function Wu(e3, t3, n2, r2, i3) {
    for (i3 && (i3 = !!(t3.subtreeFlags & 10256) || false), t3 = t3.child; t3 !== null; ) {
      var a2 = e3, o3 = t3, s3 = n2, c3 = r2, l3 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          Wu(a2, o3, s3, c3, i3), El(8, o3);
          break;
        case 23:
          break;
        case 22:
          var u3 = o3.stateNode;
          o3.memoizedState === null ? (u3._visibility |= 2, Wu(a2, o3, s3, c3, i3)) : u3._visibility & 2 ? Wu(a2, o3, s3, c3, i3) : Gu(a2, o3), i3 && l3 & 2048 && Bu(o3.alternate, o3);
          break;
        case 24:
          Wu(a2, o3, s3, c3, i3), i3 && l3 & 2048 && Vu(o3.alternate, o3);
          break;
        default:
          Wu(a2, o3, s3, c3, i3);
      }
      t3 = t3.sibling;
    }
  }
  function Gu(e3, t3) {
    if (t3.subtreeFlags & 10256)
      for (t3 = t3.child; t3 !== null; ) {
        var n2 = e3, r2 = t3, i3 = r2.flags;
        switch (r2.tag) {
          case 22:
            Gu(n2, r2), i3 & 2048 && Bu(r2.alternate, r2);
            break;
          case 24:
            Gu(n2, r2), i3 & 2048 && Vu(r2.alternate, r2);
            break;
          default:
            Gu(n2, r2);
        }
        t3 = t3.sibling;
      }
  }
  var Ku = 8192;
  function qu(e3, t3, n2) {
    if (e3.subtreeFlags & Ku)
      for (e3 = e3.child; e3 !== null; )
        Ju(e3, t3, n2), e3 = e3.sibling;
  }
  function Ju(e3, t3, n2) {
    switch (e3.tag) {
      case 26:
        qu(e3, t3, n2), e3.flags & Ku && (e3.memoizedState === null ? (e3 = e3.stateNode, (t3 & 335544128) === t3 && Zm(n2, e3)) : Qm(n2, ju, e3.memoizedState, e3.memoizedProps));
        break;
      case 5:
        qu(e3, t3, n2), e3.flags & Ku && (e3 = e3.stateNode, (t3 & 335544128) === t3 && Zm(n2, e3));
        break;
      case 3:
      case 4:
        var r2 = ju;
        ju = bm(e3.stateNode.containerInfo), qu(e3, t3, n2), ju = r2;
        break;
      case 22:
        e3.memoizedState === null && (r2 = e3.alternate, r2 !== null && r2.memoizedState !== null ? (r2 = Ku, Ku = 16777216, qu(e3, t3, n2), Ku = r2) : qu(e3, t3, n2));
        break;
      case 30:
        if ((e3.flags & Ku) !== 0 && (r2 = e3.memoizedProps.name, r2 != null && r2 !== `auto`)) {
          var i3 = e3.stateNode;
          i3.paired = null, Gl === null && (Gl = new Map()), Gl.set(r2, i3);
        }
        qu(e3, t3, n2);
        break;
      default:
        qu(e3, t3, n2);
    }
  }
  function Yu(e3) {
    var t3 = e3.alternate;
    if (t3 !== null && (e3 = t3.child, e3 !== null)) {
      t3.child = null;
      do
        t3 = e3.sibling, e3.sibling = null, e3 = t3;
      while (e3 !== null);
    }
  }
  function Xu(e3) {
    var t3 = e3.deletions;
    if (e3.flags & 16) {
      if (t3 !== null)
        for (var n2 = 0; n2 < t3.length; n2++) {
          var r2 = t3[n2];
          H = r2, $u(r2, e3);
        }
      Yu(e3);
    }
    if (e3.subtreeFlags & 10256)
      for (e3 = e3.child; e3 !== null; )
        Zu(e3), e3 = e3.sibling;
  }
  function Zu(e3) {
    switch (e3.tag) {
      case 0:
      case 11:
      case 15:
        Xu(e3), e3.flags & 2048 && Dl(9, e3, e3.return);
        break;
      case 3:
        Xu(e3);
        break;
      case 12:
        Xu(e3);
        break;
      case 22:
        var t3 = e3.stateNode;
        e3.memoizedState !== null && t3._visibility & 2 && (e3.return === null || e3.return.tag !== 13) ? (t3._visibility &= -3, Qu(e3)) : Xu(e3);
        break;
      default:
        Xu(e3);
    }
  }
  function Qu(e3) {
    var t3 = e3.deletions;
    if (e3.flags & 16) {
      if (t3 !== null)
        for (var n2 = 0; n2 < t3.length; n2++) {
          var r2 = t3[n2];
          H = r2, $u(r2, e3);
        }
      Yu(e3);
    }
    for (e3 = e3.child; e3 !== null; ) {
      switch (t3 = e3, t3.tag) {
        case 0:
        case 11:
        case 15:
          Dl(8, t3, t3.return), Qu(t3);
          break;
        case 22:
          n2 = t3.stateNode, n2._visibility & 2 && (n2._visibility &= -3, Qu(t3));
          break;
        default:
          Qu(t3);
      }
      e3 = e3.sibling;
    }
  }
  function $u(e3, t3) {
    for (; H !== null; ) {
      var n2 = H;
      switch (n2.tag) {
        case 0:
        case 11:
        case 15:
          Dl(8, n2, t3);
          break;
        case 23:
        case 22:
          if (n2.memoizedState !== null && n2.memoizedState.cachePool !== null) {
            var r2 = n2.memoizedState.cachePool.pool;
            r2 != null && r2.refCount++;
          }
          break;
        case 24:
          Ua(n2.memoizedState.cache);
      }
      if (r2 = n2.child, r2 !== null)
        r2.return = n2, H = r2;
      else
        a:
          for (n2 = e3; H !== null; ) {
            r2 = H;
            var i3 = r2.sibling, a2 = r2.return;
            if (Su(r2), r2 === n2) {
              H = null;
              break a;
            }
            if (i3 !== null) {
              i3.return = a2, H = i3;
              break a;
            }
            H = a2;
          }
    }
  }
  var ed = {getCacheForType: function(e3) {
    var t3 = Ia(A), n2 = t3.data.get(e3);
    return n2 === void 0 && (n2 = e3(), t3.data.set(e3, n2)), n2;
  }, cacheSignal: function() {
    return Ia(A).controller.signal;
  }}, td = typeof WeakMap == `function` ? WeakMap : Map, W = 0, G = null, K = null, q = 0, J = 0, nd = null, rd = false, id = false, ad = false, od = 0, Y = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = 0, fd = null, pd = null, md = false, hd = 0, gd = 0, _d = 1 / 0, vd = null, yd = null, X = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
  function jd() {
    return W & 2 && q !== 0 ? q & -q : S.T === null ? Nt() : Pf();
  }
  function Md() {
    if (ud === 0) {
      if (!(q & 536870912) || k) {
        var e3 = _t;
        _t <<= 1, !(_t & 3932160) && (_t = 262144), ud = e3;
      } else
        ud = 536870912;
    }
    return e3 = j.current, e3 !== null && (e3.flags |= 32), ud;
  }
  function Nd(e3, t3) {
    if (t3 != null) {
      var n2 = e3.stateNode, r2 = n2.ref;
      r2 === null && (r2 = n2.ref = Pp(Ai(e3.memoizedProps, n2))), Dd === null && (Dd = []), Dd.push(t3.bind(null, r2));
    }
  }
  function Pd(e3, t3, n2) {
    (e3 === G && (J === 2 || J === 9) || e3.cancelPendingCommit !== null) && (Vd(e3, 0), Rd(e3, q, ud, false)), Et(e3, n2), (!(W & 2) || e3 !== G) && (e3 === G && (!(W & 2) && (cd |= n2), Y === 4 && Rd(e3, q, ud, false)), Ef(e3));
  }
  function Fd(e3, t3, n2) {
    if (W & 6)
      throw Error(s2(327));
    var r2 = !n2 && !(t3 & 127) && (t3 & e3.expiredLanes) === 0 || xt(e3, t3), i3 = r2 ? Yd(e3, t3) : qd(e3, t3, true), a2 = r2;
    do {
      if (i3 === 0) {
        id && !r2 && Rd(e3, t3, 0, false);
        break;
      }
      if (n2 = e3.current.alternate, a2 && !Ld(n2)) {
        i3 = qd(e3, t3, false), a2 = false;
        continue;
      }
      if (i3 === 2) {
        if (a2 = t3, e3.errorRecoveryDisabledLanes & a2)
          var o3 = 0;
        else
          o3 = e3.pendingLanes & -536870913, o3 = o3 === 0 ? o3 & 536870912 ? 536870912 : 0 : o3;
        if (o3 !== 0) {
          t3 = o3;
          a: {
            var c3 = e3;
            i3 = fd;
            var l3 = c3.current.memoizedState.isDehydrated;
            if (l3 && (Vd(c3, o3).flags |= 256), o3 = qd(c3, o3, false), o3 !== 2 && o3 !== 6) {
              if (ad && !l3) {
                c3.errorRecoveryDisabledLanes |= a2, cd |= a2, i3 = 4;
                break a;
              }
              a2 = pd, pd = i3, a2 !== null && (pd === null ? pd = a2 : pd.push.apply(pd, a2));
            }
            i3 = o3;
          }
          if (a2 = false, i3 !== 2)
            continue;
        }
      }
      if (i3 === 1) {
        Vd(e3, 0), Rd(e3, t3, 0, true);
        break;
      }
      a: {
        switch (r2 = e3, a2 = i3, a2) {
          case 0:
          case 1:
            throw Error(s2(345));
          case 4:
            if ((t3 & 4194048) !== t3 && (t3 & 62914560) !== t3)
              break;
          case 6:
            Rd(r2, t3, ud, !rd);
            break a;
          case 2:
            pd = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(s2(329));
        }
        if ((t3 & 62914560) === t3 && (i3 = hd + 300 - et(), 10 < i3)) {
          if (Rd(r2, t3, ud, !rd), bt(r2, 0, true) !== 0)
            break a;
          Sd = t3, r2.timeoutHandle = gp(Id.bind(null, r2, n2, pd, vd, md, t3, ud, cd, dd, rd, a2, `Throttled`, -0, 0), i3);
          break a;
        }
        Id(r2, n2, pd, vd, md, t3, ud, cd, dd, rd, a2, null, -0, 0);
      }
      break;
    } while (1);
    Ef(e3);
  }
  function Id(e3, t3, n2, r2, i3, a2, o3, s3, c3, l3, u3, d3, f3, p2) {
    e3.timeoutHandle = -1;
    var m2 = t3.subtreeFlags, h2 = (a2 & 335544064) === a2;
    if (d3 = null, (h2 || m2 & 8192 || (m2 & 16785408) == 16785408) && (d3 = {stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: jn}, Gl = null, Ju(t3, a2, d3), h2 && (m2 = d3, h2 = e3.containerInfo, h2 = (h2.nodeType === 9 ? h2 : h2.ownerDocument).__reactViewTransition, h2 != null && (m2.count++, m2.waitingForViewTransition = true, m2 = nh.bind(m2), h2.finished.then(m2, m2))), m2 = (a2 & 62914560) === a2 ? hd - et() : (a2 & 4194048) === a2 ? gd - et() : 0, m2 = eh(d3, m2), m2 !== null)) {
      Sd = a2, e3.cancelPendingCommit = m2(nf.bind(null, e3, t3, a2, n2, r2, i3, o3, s3, c3, l3, u3, d3, null, f3, p2)), Rd(e3, a2, o3, !l3);
      return;
    }
    nf(e3, t3, a2, n2, r2, i3, o3, s3, c3, l3, u3, d3);
  }
  function Ld(e3) {
    for (var t3 = e3; ; ) {
      var n2 = t3.tag;
      if ((n2 === 0 || n2 === 11 || n2 === 15) && t3.flags & 16384 && (n2 = t3.updateQueue, n2 !== null && (n2 = n2.stores, n2 !== null)))
        for (var r2 = 0; r2 < n2.length; r2++) {
          var i3 = n2[r2], a2 = i3.getSnapshot;
          i3 = i3.value;
          try {
            if (!ei(a2(), i3))
              return false;
          } catch {
            return false;
          }
        }
      if (n2 = t3.child, t3.subtreeFlags & 16384 && n2 !== null)
        n2.return = t3, t3 = n2;
      else {
        if (t3 === e3)
          break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e3)
            return true;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
    }
    return true;
  }
  function Rd(e3, t3, n2, r2) {
    t3 = St(e3, t3), t3 &= ~ld, t3 &= ~cd, e3.suspendedLanes |= t3, e3.pingedLanes &= ~t3, r2 && (e3.warmLanes |= t3), r2 = e3.expirationTimes;
    for (var i3 = t3; 0 < i3; ) {
      var a2 = 31 - ft(i3), o3 = 1 << a2;
      r2[a2] = -1, i3 &= ~o3;
    }
    n2 !== 0 && Ot(e3, n2, t3);
  }
  function zd() {
    return W & 6 ? true : (Df(0, false), false);
  }
  function Bd() {
    if (K !== null) {
      if (J === 0)
        var e3 = K.return;
      else
        e3 = K, Oa = Da = null, fs(e3), go = null, _o = 0, e3 = K;
      for (; e3 !== null; )
        Tl(e3.alternate, e3), e3 = e3.return;
      K = null;
    }
  }
  function Vd(e3, t3) {
    var n2 = e3.timeoutHandle;
    return n2 !== -1 && (e3.timeoutHandle = -1, _p(n2)), n2 = e3.cancelPendingCommit, n2 !== null && (e3.cancelPendingCommit = null, n2()), Sd = 0, Bd(), G = e3, K = n2 = qi(e3.current, null), q = t3, J = 0, nd = null, rd = false, id = xt(e3, t3), ad = false, dd = ud = ld = cd = sd = Y = 0, pd = fd = null, md = false, od = St(e3, t3), Li(), n2;
  }
  function Hd(e3, t3) {
    M = null, S.H = xc, t3 === ao || t3 === so ? (t3 = mo(), J = 3) : t3 === oo ? (t3 = mo(), J = 4) : J = t3 === zc ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, nd = t3, K === null && (Y = 1, Nc(e3, ta(t3, e3.current)));
  }
  function Ud() {
    var e3 = j.current;
    return e3 === null ? true : (q & 4194048) === q ? Vo === null : (q & 62914560) === q || q & 536870912 ? e3 === Vo : false;
  }
  function Wd() {
    var e3 = S.H;
    return S.H = xc, e3 === null ? xc : e3;
  }
  function Gd() {
    var e3 = S.A;
    return S.A = ed, e3;
  }
  function Kd() {
    Y = 4, rd || (q & 4194048) !== q && j.current !== null || (id = true), !(sd & 134217727) && !(cd & 134217727) || G === null || Rd(G, q, ud, false);
  }
  function qd(e3, t3, n2) {
    var r2 = W;
    W |= 2;
    var i3 = Wd(), a2 = Gd();
    (G !== e3 || q !== t3) && (vd = null, Vd(e3, t3)), t3 = false;
    var o3 = Y;
    a:
      do
        try {
          if (J !== 0 && K !== null) {
            var s3 = K, c3 = nd;
            switch (J) {
              case 8:
                Bd(), o3 = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                j.current === null && (t3 = true);
                var l3 = J;
                if (J = 0, nd = null, $d(e3, s3, c3, l3), n2 && id) {
                  o3 = 0;
                  break a;
                }
                break;
              default:
                l3 = J, J = 0, nd = null, $d(e3, s3, c3, l3);
            }
          }
          Jd(), o3 = Y;
          break;
        } catch (t4) {
          Hd(e3, t4);
        }
      while (1);
    return t3 && e3.shellSuspendCounter++, Oa = Da = null, W = r2, S.H = i3, S.A = a2, K === null && (G = null, q = 0, Li()), o3;
  }
  function Jd() {
    for (; K !== null; )
      Zd(K);
  }
  function Yd(e3, t3) {
    var n2 = W;
    W |= 2;
    var r2 = Wd(), i3 = Gd();
    G !== e3 || q !== t3 ? (vd = null, _d = et() + 500, Vd(e3, t3)) : id = xt(e3, t3);
    a:
      do
        try {
          if (J !== 0 && K !== null) {
            t3 = K;
            var a2 = nd;
            b:
              switch (J) {
                case 1:
                  J = 0, nd = null, $d(e3, t3, a2, 1);
                  break;
                case 2:
                case 9:
                  if (lo(a2)) {
                    J = 0, nd = null, Qd(t3);
                    break;
                  }
                  t3 = function() {
                    J !== 2 && J !== 9 || G !== e3 || (J = 7), Ef(e3);
                  }, a2.then(t3, t3);
                  break a;
                case 3:
                  J = 7;
                  break a;
                case 4:
                  J = 5;
                  break a;
                case 7:
                  lo(a2) ? (J = 0, nd = null, Qd(t3)) : (J = 0, nd = null, $d(e3, t3, a2, 7));
                  break;
                case 5:
                  var o3 = null;
                  switch (K.tag) {
                    case 26:
                      o3 = K.memoizedState;
                    case 5:
                    case 27:
                      var c3 = K;
                      if (o3 ? Ym(o3) : c3.stateNode.complete) {
                        J = 0, nd = null;
                        var l3 = c3.sibling;
                        if (l3 !== null)
                          K = l3;
                        else {
                          var u3 = c3.return;
                          u3 === null ? K = null : (K = u3, ef(u3));
                        }
                        break b;
                      }
                  }
                  J = 0, nd = null, $d(e3, t3, a2, 5);
                  break;
                case 6:
                  J = 0, nd = null, $d(e3, t3, a2, 6);
                  break;
                case 8:
                  Bd(), Y = 6;
                  break a;
                default:
                  throw Error(s2(462));
              }
          }
          Xd();
          break;
        } catch (t4) {
          Hd(e3, t4);
        }
      while (1);
    return Oa = Da = null, S.H = r2, S.A = i3, W = n2, K === null ? (G = null, q = 0, Li(), Y) : 0;
  }
  function Xd() {
    for (; K !== null && !Qe(); )
      Zd(K);
  }
  function Zd(e3) {
    var t3 = _l(e3.alternate, e3, od);
    e3.memoizedProps = e3.pendingProps, t3 === null ? ef(e3) : K = t3;
  }
  function Qd(e3) {
    var t3 = e3, n2 = t3.alternate;
    switch (t3.tag) {
      case 15:
      case 0:
        t3 = Zc(n2, t3, t3.pendingProps, t3.type, void 0, q);
        break;
      case 11:
        t3 = Zc(n2, t3, t3.pendingProps, t3.type.render, t3.ref, q);
        break;
      case 5:
        fs(t3);
        var r2 = t3;
        r2 === D && (k ? (xa(r2), r2.tag === 5 && r2.stateNode != null && (O = r2.stateNode)) : (xa(r2), k = true));
      default:
        Tl(n2, t3), t3 = K = Ji(t3, od), t3 = _l(n2, t3, od);
    }
    e3.memoizedProps = e3.pendingProps, t3 === null ? ef(e3) : K = t3;
  }
  function $d(e3, t3, n2, r2) {
    Oa = Da = null, fs(t3), go = null, _o = 0;
    var i3 = t3.return;
    try {
      if (Rc(e3, i3, t3, n2, q)) {
        Y = 1, Nc(e3, ta(n2, e3.current)), K = null;
        return;
      }
    } catch (t4) {
      if (i3 !== null)
        throw K = i3, t4;
      Y = 1, Nc(e3, ta(n2, e3.current)), K = null;
      return;
    }
    t3.flags & 32768 ? (k || r2 === 1 ? e3 = true : id || q & 536870912 ? e3 = false : (rd = e3 = true, (r2 === 2 || r2 === 9 || r2 === 3 || r2 === 6) && (r2 = j.current, r2 !== null && r2.tag === 13 && (r2.flags |= 16384))), tf(t3, e3)) : ef(t3);
  }
  function ef(e3) {
    var t3 = e3;
    do {
      if (t3.flags & 32768) {
        tf(t3, rd);
        return;
      }
      e3 = t3.return;
      var n2 = Cl(t3.alternate, t3, od);
      if (n2 !== null) {
        K = n2;
        return;
      }
      if (t3 = t3.sibling, t3 !== null) {
        K = t3;
        return;
      }
      K = t3 = e3;
    } while (t3 !== null);
    Y === 0 && (Y = 5);
  }
  function tf(e3, t3) {
    do {
      var n2 = wl(e3.alternate, e3);
      if (n2 !== null) {
        n2.flags &= 32767, K = n2;
        return;
      }
      if (n2 = e3.return, n2 !== null && (n2.flags |= 32768, n2.subtreeFlags = 0, n2.deletions = null), !t3 && (e3 = e3.sibling, e3 !== null)) {
        K = e3;
        return;
      }
      K = e3 = n2;
    } while (e3 !== null);
    Y = 6, K = null;
  }
  function nf(e3, t3, n2, r2, i3, a2, o3, c3, l3, u3, d3, f3) {
    e3.cancelPendingCommit = null;
    do
      df();
    while (X !== 0);
    if (W & 6)
      throw Error(s2(327));
    if (t3 !== null) {
      if (t3 === e3.current)
        throw Error(s2(177));
      e3 === G && (K = G = null, q = 0), xd = t3, bd = e3, Sd = n2, wd = i3, Td = r2, rf(e3, t3, n2, o3, c3, l3, f3);
    }
  }
  function rf(e3, t3, n2, r2, i3, a2, o3) {
    var s3 = t3.lanes | t3.childLanes;
    if (Cd = s3, s3 |= Ii, Dt(e3, n2, s3, r2, i3, a2), Dd = null, (n2 & 335544064) === n2 ? (Od = Ka(e3), r2 = 10262) : (Od = null, r2 = 10256), (t3.subtreeFlags & r2) !== 0 || (t3.flags & r2) !== 0 ? (e3.callbackNode = null, e3.callbackPriority = 0, yf(it, function() {
      return ff(), null;
    })) : (e3.callbackNode = null, e3.callbackPriority = 0), Wl = false, r2 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r2) {
      r2 = S.T, S.T = null, i3 = C.p, C.p = 2, a2 = W, W |= 4;
      try {
        gu(e3, t3, n2);
      } finally {
        W = a2, C.p = i3, S.T = r2;
      }
    }
    X = 1, Wl ? Ed = Mp(o3, e3.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
  }
  function af(e3) {
    if (X !== 0) {
      var t3 = bd.onRecoverableError;
      t3(e3, {componentStack: null});
    }
  }
  function of() {
    X === 3 && (X = 0, Iu(xd, bd), X = 4);
  }
  function sf() {
    if (X === 1) {
      X = 0;
      var e3 = bd, t3 = xd, n2 = Sd, r2 = !!(t3.flags & 13878);
      if (t3.subtreeFlags & 13878 || r2) {
        r2 = S.T, S.T = null;
        var i3 = C.p;
        C.p = 2;
        var a2 = W;
        W |= 4;
        try {
          pu = mu = false, Mu(t3, e3, n2), n2 = cp;
          var o3 = oi(e3.containerInfo), s3 = n2.focusedElem, c3 = n2.selectionRange;
          if (o3 !== s3 && s3 && s3.ownerDocument && ai(s3.ownerDocument.documentElement, s3)) {
            if (c3 !== null && si(s3)) {
              var l3 = c3.start, u3 = c3.end;
              if (u3 === void 0 && (u3 = l3), `selectionStart` in s3)
                s3.selectionStart = l3, s3.selectionEnd = Math.min(u3, s3.value.length);
              else {
                var d3 = s3.ownerDocument || document, f3 = d3 && d3.defaultView || window;
                if (f3.getSelection) {
                  var p2 = f3.getSelection(), m2 = s3.textContent.length, h2 = Math.min(c3.start, m2), g2 = c3.end === void 0 ? h2 : Math.min(c3.end, m2);
                  !p2.extend && h2 > g2 && (o3 = g2, g2 = h2, h2 = o3);
                  var _2 = ii(s3, h2), v2 = ii(s3, g2);
                  if (_2 && v2 && (p2.rangeCount !== 1 || p2.anchorNode !== _2.node || p2.anchorOffset !== _2.offset || p2.focusNode !== v2.node || p2.focusOffset !== v2.offset)) {
                    var y2 = d3.createRange();
                    y2.setStart(_2.node, _2.offset), p2.removeAllRanges(), h2 > g2 ? (p2.addRange(y2), p2.extend(v2.node, v2.offset)) : (y2.setEnd(v2.node, v2.offset), p2.addRange(y2));
                  }
                }
              }
            }
            for (d3 = [], p2 = s3; p2 = p2.parentNode; )
              p2.nodeType === 1 && d3.push({element: p2, left: p2.scrollLeft, top: p2.scrollTop});
            for (typeof s3.focus == `function` && s3.focus(), s3 = 0; s3 < d3.length; s3++) {
              var b2 = d3[s3];
              b2.element.scrollLeft = b2.left, b2.element.scrollTop = b2.top;
            }
          }
          gh = !!sp, cp = sp = null;
        } finally {
          W = a2, C.p = i3, S.T = r2;
        }
      }
      e3.current = t3, X = 2;
    }
  }
  function cf() {
    if (X === 2) {
      X = 0;
      var e3 = bd, t3 = xd, n2 = !!(t3.flags & 8772);
      if (t3.subtreeFlags & 8772 || n2) {
        n2 = S.T, S.T = null;
        var r2 = C.p;
        C.p = 2;
        var i3 = W;
        W |= 4;
        try {
          vu(e3, t3.alternate, t3);
        } finally {
          W = i3, C.p = r2, S.T = n2;
        }
      }
      X = 3;
    }
  }
  function lf() {
    if (X === 4 || X === 3) {
      X = 0;
      var e3 = Ed;
      Ed = null, $e();
      var t3 = bd, n2 = xd, r2 = Sd, i3 = Td, a2 = (r2 & 335544064) === r2 ? 10262 : 10256;
      if ((n2.subtreeFlags & a2) !== 0 || (n2.flags & a2) !== 0 ? X = 5 : (X = 0, xd = bd = null, uf(t3, t3.pendingLanes)), a2 = t3.pendingLanes, a2 === 0 && (yd = null), Mt(r2), n2 = n2.stateNode, ut && typeof ut.onCommitFiberRoot == `function`)
        try {
          ut.onCommitFiberRoot(lt, n2, void 0, (n2.current.flags & 128) == 128);
        } catch {
        }
      if (i3 !== null) {
        n2 = S.T, a2 = C.p, C.p = 2, S.T = null;
        try {
          for (var o3 = t3.onRecoverableError, s3 = 0; s3 < i3.length; s3++) {
            var c3 = i3[s3];
            o3(c3.value, {componentStack: c3.stack});
          }
        } finally {
          S.T = n2, C.p = a2;
        }
      }
      if (i3 = Dd, o3 = Od, Od = null, i3 !== null && (Dd = null, o3 === null && (o3 = []), e3 !== null))
        for (c3 = 0; c3 < i3.length; c3++)
          n2 = (0, i3[c3])(o3), n2 !== void 0 && e3.finished.finally(n2);
      Sd & 3 && df(), Ef(t3), a2 = t3.pendingLanes, r2 & 261930 && a2 & 42 ? t3 === Ad ? kd++ : (kd = 0, Ad = t3) : (kd = 0, Ad = null), Df(0, false);
    }
  }
  function uf(e3, t3) {
    (e3.pooledCacheLanes &= t3) === 0 && (t3 = e3.pooledCache, t3 != null && (e3.pooledCache = null, Ua(t3)));
  }
  function df() {
    return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
  }
  function ff() {
    if (X !== 5)
      return false;
    var e3 = bd, t3 = Cd;
    Cd = 0;
    var n2 = Mt(Sd), r2 = S.T, i3 = C.p;
    try {
      C.p = 32 > n2 ? 32 : n2, S.T = null, n2 = wd, wd = null;
      var a2 = bd, o3 = Sd;
      if (X = 0, xd = bd = null, Sd = 0, W & 6)
        throw Error(s2(331));
      var c3 = W;
      if (W |= 4, Zu(a2.current), Uu(a2, a2.current, o3, n2), W = c3, Df(0, false), ut && typeof ut.onPostCommitFiberRoot == `function`)
        try {
          ut.onPostCommitFiberRoot(lt, a2);
        } catch {
        }
      return true;
    } finally {
      C.p = i3, S.T = r2, uf(e3, t3);
    }
  }
  function pf(e3, t3, n2) {
    t3 = ta(n2, t3), t3 = Fc(e3.stateNode, t3, 2), e3 = Oo(e3, t3, 2), e3 !== null && (Et(e3, 2), Ef(e3));
  }
  function Z(e3, t3, n2) {
    if (e3.tag === 3)
      pf(e3, e3, n2);
    else
      for (; t3 !== null; ) {
        if (t3.tag === 3) {
          pf(t3, e3, n2);
          break;
        }
        if (t3.tag === 1) {
          var r2 = t3.stateNode;
          if (typeof t3.type.getDerivedStateFromError == `function` || typeof r2.componentDidCatch == `function` && (yd === null || !yd.has(r2))) {
            e3 = ta(n2, e3), n2 = Ic(2), r2 = Oo(t3, n2, 2), r2 !== null && (Lc(n2, r2, t3, e3), Et(r2, 2), Ef(r2));
            break;
          }
        }
        t3 = t3.return;
      }
  }
  function mf(e3, t3, n2) {
    var r2 = e3.pingCache;
    if (r2 === null) {
      r2 = e3.pingCache = new td();
      var i3 = new Set();
      r2.set(t3, i3);
    } else
      i3 = r2.get(t3), i3 === void 0 && (i3 = new Set(), r2.set(t3, i3));
    i3.has(n2) || (ad = true, i3.add(n2), e3 = hf.bind(null, e3, t3, n2), t3.then(e3, e3));
  }
  function hf(e3, t3, n2) {
    var r2 = e3.pingCache;
    r2 !== null && r2.delete(t3), e3.pingedLanes |= e3.suspendedLanes & n2, e3.warmLanes &= ~n2, G === e3 && (q & n2) === n2 && (Y === 4 || Y === 3 && (q & 62914560) === q && 300 > et() - hd ? W & 2 ? ld |= n2 : Vd(e3, 0) : ld |= n2, dd === q && (dd = 0)), Ef(e3);
  }
  function gf(e3, t3) {
    t3 === 0 && (t3 = wt()), e3 = Bi(e3, t3), e3 !== null && (Et(e3, t3), Ef(e3));
  }
  function _f(e3) {
    var t3 = e3.memoizedState, n2 = 0;
    t3 !== null && (n2 = t3.retryLane), gf(e3, n2);
  }
  function vf(e3, t3) {
    var n2 = 0;
    switch (e3.tag) {
      case 31:
      case 13:
        var r2 = e3.stateNode, i3 = e3.memoizedState;
        i3 !== null && (n2 = i3.retryLane);
        break;
      case 19:
        r2 = e3.stateNode;
        break;
      case 22:
        r2 = e3.stateNode._retryCache;
        break;
      default:
        throw Error(s2(314));
    }
    r2 !== null && r2.delete(t3), gf(e3, n2);
  }
  function yf(e3, t3) {
    return Xe(e3, t3);
  }
  var bf = null, xf = null, Sf = false, Cf = false, wf = false, Tf = 0;
  function Ef(e3) {
    e3 !== xf && e3.next === null && (xf === null ? bf = xf = e3 : xf = xf.next = e3), Cf = true, Sf || (Sf = true, Nf());
  }
  function Df(e3, t3) {
    if (!wf && Cf) {
      wf = true;
      do
        for (var n2 = false, r2 = bf; r2 !== null; ) {
          if (!t3) {
            if (e3 !== 0) {
              var i3 = r2.pendingLanes;
              if (i3 === 0)
                var a2 = 0;
              else {
                var o3 = r2.suspendedLanes, s3 = r2.pingedLanes;
                a2 = (1 << 31 - ft(42 | e3) + 1) - 1, a2 &= i3 & ~(o3 & ~s3), a2 = a2 & 201326741 ? a2 & 201326741 | 1 : a2 ? a2 | 2 : 0;
              }
              a2 !== 0 && (n2 = true, Mf(r2, a2));
            } else
              a2 = q, a2 = bt(r2, r2 === G ? a2 : 0, r2.cancelPendingCommit !== null || r2.timeoutHandle !== -1), !(a2 & 3) || xt(r2, a2) || (n2 = true, Mf(r2, a2));
          }
          r2 = r2.next;
        }
      while (n2);
      wf = false;
    }
  }
  function Of() {
    kf();
  }
  function kf() {
    Cf = Sf = false;
    var e3 = 0;
    Tf !== 0 && hp() && (e3 = Tf);
    for (var t3 = et(), n2 = null, r2 = bf; r2 !== null; ) {
      var i3 = r2.next, a2 = Af(r2, t3);
      a2 === 0 ? (r2.next = null, n2 === null ? bf = i3 : n2.next = i3, i3 === null && (xf = n2)) : (n2 = r2, (e3 !== 0 || a2 & 3) && (Cf = true)), r2 = i3;
    }
    X !== 0 && X !== 5 || Df(e3, false), Tf !== 0 && (Tf = 0);
  }
  function Af(e3, t3) {
    for (var n2 = e3.suspendedLanes, r2 = e3.pingedLanes, i3 = e3.expirationTimes, a2 = e3.pendingLanes & -62914561; 0 < a2; ) {
      var o3 = 31 - ft(a2), s3 = 1 << o3, c3 = i3[o3];
      c3 === -1 ? ((s3 & n2) === 0 || (s3 & r2) !== 0) && (i3[o3] = Ct(s3, t3)) : c3 <= t3 && (e3.expiredLanes |= s3), a2 &= ~s3;
    }
    if (t3 = G, n2 = q, n2 = bt(e3, e3 === t3 ? n2 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r2 = e3.callbackNode, n2 === 0 || e3 === t3 && (J === 2 || J === 9) || e3.cancelPendingCommit !== null)
      return r2 !== null && r2 !== null && Ze(r2), e3.callbackNode = null, e3.callbackPriority = 0;
    if (!(n2 & 3) || xt(e3, n2)) {
      if (t3 = n2 & -n2, t3 === e3.callbackPriority)
        return t3;
      switch (r2 !== null && Ze(r2), Mt(n2)) {
        case 2:
        case 8:
          n2 = rt;
          break;
        case 32:
          n2 = it;
          break;
        case 268435456:
          n2 = ot;
          break;
        default:
          n2 = it;
      }
      return r2 = jf.bind(null, e3), n2 = Xe(n2, r2), e3.callbackPriority = t3, e3.callbackNode = n2, t3;
    }
    return r2 !== null && r2 !== null && Ze(r2), e3.callbackPriority = 2, e3.callbackNode = null, 2;
  }
  function jf(e3, t3) {
    if (X !== 0 && X !== 5)
      return e3.callbackNode = null, e3.callbackPriority = 0, null;
    var n2 = e3.callbackNode;
    if (df() && e3.callbackNode !== n2)
      return null;
    var r2 = q;
    return r2 = bt(e3, e3 === G ? r2 : 0, e3.cancelPendingCommit !== null || e3.timeoutHandle !== -1), r2 === 0 ? null : (Fd(e3, r2, t3), Af(e3, et()), e3.callbackNode != null && e3.callbackNode === n2 ? jf.bind(null, e3) : null);
  }
  function Mf(e3, t3) {
    if (df())
      return null;
    Fd(e3, t3, true);
  }
  function Nf() {
    bp(function() {
      W & 6 ? Xe(nt, Of) : kf();
    });
  }
  function Pf() {
    if (Tf === 0) {
      var e3 = Ya;
      e3 === 0 && (e3 = gt, gt <<= 1, !(gt & 261888) && (gt = 256)), Tf = e3;
    }
    return Tf;
  }
  function Ff(e3) {
    return e3 == null || typeof e3 == `symbol` || typeof e3 == `boolean` ? null : typeof e3 == `function` ? e3 : An(e3);
  }
  function If(e3, t3, n2, r2, i3) {
    if (t3 === `submit` && n2 && n2.stateNode === i3) {
      var a2 = Ff((i3[Lt] || null).action), o3 = r2.submitter;
      o3 && (t3 = (t3 = o3[Lt] || null) ? Ff(t3.formAction) : o3.getAttribute(`formAction`), t3 !== null && (a2 = t3, o3 = null));
      var s3 = new Qn(`action`, `action`, null, r2, i3);
      e3.push({event: s3, listeners: [{instance: null, listener: function() {
        if (r2.defaultPrevented) {
          if (Tf !== 0) {
            var e4 = new FormData(i3, o3);
            sc(n2, {pending: true, data: e4, method: i3.method, action: a2}, null, e4);
          }
        } else
          typeof a2 == `function` && (s3.preventDefault(), e4 = new FormData(i3, o3), sc(n2, {pending: true, data: e4, method: i3.method, action: a2}, a2, e4));
      }, currentTarget: i3}]});
    }
  }
  for (var Lf = 0; Lf < Di.length; Lf++) {
    var Rf = Di[Lf];
    Oi(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
  }
  Oi(yi, `onAnimationEnd`), Oi(bi, `onAnimationIteration`), Oi(xi, `onAnimationStart`), Oi(`dblclick`, `onDoubleClick`), Oi(`focusin`, `onFocus`), Oi(`focusout`, `onBlur`), Oi(Si, `onTransitionRun`), Oi(Ci, `onTransitionStart`), Oi(wi, `onTransitionCancel`), Oi(Ti, `onTransitionEnd`), en(`onMouseEnter`, [`mouseout`, `mouseover`]), en(`onMouseLeave`, [`mouseout`, `mouseover`]), en(`onPointerEnter`, [`pointerout`, `pointerover`]), en(`onPointerLeave`, [`pointerout`, `pointerover`]), $t(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), $t(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), $t(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), $t(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), $t(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), $t(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
  function Vf(e3, t3) {
    t3 = !!(t3 & 4);
    for (var n2 = 0; n2 < e3.length; n2++) {
      var r2 = e3[n2], i3 = r2.event;
      r2 = r2.listeners;
      a: {
        var a2 = void 0;
        if (t3)
          for (var o3 = r2.length - 1; 0 <= o3; o3--) {
            var s3 = r2[o3], c3 = s3.instance, l3 = s3.currentTarget;
            if (s3 = s3.listener, c3 !== a2 && i3.isPropagationStopped())
              break a;
            a2 = s3, i3.currentTarget = l3;
            try {
              a2(i3);
            } catch (e4) {
              Ni(e4);
            }
            i3.currentTarget = null, a2 = c3;
          }
        else
          for (o3 = 0; o3 < r2.length; o3++) {
            if (s3 = r2[o3], c3 = s3.instance, l3 = s3.currentTarget, s3 = s3.listener, c3 !== a2 && i3.isPropagationStopped())
              break a;
            a2 = s3, i3.currentTarget = l3;
            try {
              a2(i3);
            } catch (e4) {
              Ni(e4);
            }
            i3.currentTarget = null, a2 = c3;
          }
      }
    }
  }
  function Q(e3, t3) {
    var n2 = t3[zt];
    n2 === void 0 && (n2 = t3[zt] = new Set());
    var r2 = e3 + `__bubble`;
    n2.has(r2) || (Gf(t3, e3, 2, false), n2.add(r2));
  }
  function Hf(e3, t3, n2) {
    var r2 = 0;
    t3 && (r2 |= 4), Gf(n2, e3, r2, t3);
  }
  var Uf = `_reactListening` + Math.random().toString(36).slice(2);
  function Wf(e3) {
    if (!e3[Uf]) {
      e3[Uf] = true, Zt.forEach(function(t4) {
        t4 !== `selectionchange` && (Bf.has(t4) || Hf(t4, false, e3), Hf(t4, true, e3));
      });
      var t3 = e3.nodeType === 9 ? e3 : e3.ownerDocument;
      t3 === null || t3[Uf] || (t3[Uf] = true, Hf(`selectionchange`, false, t3));
    }
  }
  function Gf(e3, t3, n2, r2) {
    switch (Ch(t3)) {
      case 2:
        var i3 = _h;
        break;
      case 8:
        i3 = vh;
        break;
      default:
        i3 = yh;
    }
    n2 = i3.bind(null, t3, n2, e3), i3 = void 0, !Vn || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i3 = true), r2 ? i3 === void 0 ? e3.addEventListener(t3, n2, true) : e3.addEventListener(t3, n2, {capture: true, passive: i3}) : i3 === void 0 ? e3.addEventListener(t3, n2, false) : e3.addEventListener(t3, n2, {passive: i3});
  }
  function Kf(e3, t3, n2, r2, i3) {
    var a2 = r2;
    if (!(t3 & 1) && !(t3 & 2) && r2 !== null)
      a:
        for (; ; ) {
          if (r2 === null)
            return;
          var o3 = r2.tag;
          if (o3 === 3 || o3 === 4) {
            var s3 = r2.stateNode.containerInfo;
            if (s3 === i3)
              break;
            if (o3 === 4)
              for (o3 = r2.return; o3 !== null; ) {
                var c3 = o3.tag;
                if ((c3 === 3 || c3 === 4) && o3.stateNode.containerInfo === i3)
                  return;
                o3 = o3.return;
              }
            for (; s3 !== null; ) {
              if (o3 = Kt(s3), o3 === null)
                return;
              if (c3 = o3.tag, c3 === 5 || c3 === 6 || c3 === 26 || c3 === 27) {
                r2 = a2 = o3;
                continue a;
              }
              s3 = s3.parentNode;
            }
          }
          r2 = r2.return;
        }
    Rn(function() {
      var r3 = a2, i4 = Nn(n2), o4 = [];
      a: {
        var s4 = Ei.get(e3);
        if (s4 !== void 0) {
          var c4 = Qn, u3 = e3;
          switch (e3) {
            case `keypress`:
              if (qn(n2) === 0)
                break a;
            case `keydown`:
            case `keyup`:
              c4 = gr;
              break;
            case `focusin`:
              u3 = `focus`, c4 = sr;
              break;
            case `focusout`:
              u3 = `blur`, c4 = sr;
              break;
            case `beforeblur`:
            case `afterblur`:
              c4 = sr;
              break;
            case `click`:
              if (n2.button === 2)
                break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              c4 = ar;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              c4 = or;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              c4 = yr;
              break;
            case yi:
            case bi:
            case xi:
              c4 = cr;
              break;
            case Ti:
              c4 = br;
              break;
            case `scroll`:
            case `scrollend`:
              c4 = er;
              break;
            case `wheel`:
              c4 = xr;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              c4 = lr;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              c4 = _r;
              break;
            case `submit`:
              c4 = vr;
              break;
            case `toggle`:
            case `beforetoggle`:
              c4 = Sr;
          }
          var d3 = !!(t3 & 4), f3 = !d3 && (e3 === `scroll` || e3 === `scrollend`), p2 = d3 ? s4 === null ? null : s4 + `Capture` : s4;
          d3 = [];
          for (var m2 = r3, h2; m2 !== null; ) {
            var g2 = m2;
            if (h2 = g2.stateNode, g2 = g2.tag, g2 !== 5 && g2 !== 26 && g2 !== 27 || h2 === null || p2 === null || (g2 = zn(m2, p2), g2 != null && d3.push(qf(m2, g2, h2))), f3)
              break;
            m2 = m2.return;
          }
          0 < d3.length && (s4 = new c4(s4, u3, null, n2, i4), o4.push({event: s4, listeners: d3}));
        }
      }
      if (!(t3 & 7)) {
        a: {
          if (c4 = e3 === `mouseover` || e3 === `pointerover`, s4 = e3 === `mouseout` || e3 === `pointerout`, c4 && n2 !== Mn && (u3 = n2.relatedTarget || n2.fromElement) && (Kt(u3) || u3[Rt]))
            break a;
          (s4 || c4) && (u3 = i4.window === i4 ? i4 : (c4 = i4.ownerDocument) ? c4.defaultView || c4.parentWindow : window, s4 ? (c4 = n2.relatedTarget || n2.toElement, s4 = r3, c4 = c4 ? Kt(c4) : null, c4 !== null && (f3 = l2(c4), d3 = c4.tag, c4 !== f3 || d3 !== 5 && d3 !== 27 && d3 !== 6) && (c4 = null)) : (s4 = null, c4 = r3), s4 !== c4 && (d3 = ar, g2 = `onMouseLeave`, p2 = `onMouseEnter`, m2 = `mouse`, (e3 === `pointerout` || e3 === `pointerover`) && (d3 = _r, g2 = `onPointerLeave`, p2 = `onPointerEnter`, m2 = `pointer`), f3 = s4 == null ? u3 : Jt(s4), h2 = c4 == null ? u3 : Jt(c4), u3 = new d3(g2, m2 + `leave`, s4, n2, i4), u3.target = f3, u3.relatedTarget = h2, g2 = null, Kt(i4) === r3 && (d3 = new d3(p2, m2 + `enter`, c4, n2, i4), d3.target = h2, d3.relatedTarget = f3, g2 = d3), f3 = g2, d3 = s4 && c4 ? ae(s4, c4, Yf) : null, s4 !== null && Xf(o4, u3, s4, d3, false), c4 !== null && f3 !== null && Xf(o4, f3, c4, d3, true)));
        }
        a: {
          if (s4 = r3 ? Jt(r3) : window, c4 = s4.nodeName && s4.nodeName.toLowerCase(), c4 === `select` || c4 === `input` && s4.type === `file`)
            var _2 = Hr;
          else if (Ir(s4)) {
            if (Ur)
              _2 = Qr;
            else {
              _2 = Xr;
              var v2 = Yr;
            }
          } else
            c4 = s4.nodeName, !c4 || c4.toLowerCase() !== `input` || s4.type !== `checkbox` && s4.type !== `radio` ? r3 && Dn(r3.elementType) && (_2 = Hr) : _2 = Zr;
          if (_2 && (_2 = _2(e3, r3))) {
            Lr(o4, _2, n2, i4);
            break a;
          }
          v2 && v2(e3, s4, r3);
        }
        switch (v2 = r3 ? Jt(r3) : window, e3) {
          case `focusin`:
            (Ir(v2) || v2.contentEditable === `true`) && (li = v2, ui = r3, di = null);
            break;
          case `focusout`:
            di = ui = li = null;
            break;
          case `mousedown`:
            fi = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            fi = false, pi(o4, n2, i4);
            break;
          case `selectionchange`:
            if (ci)
              break;
          case `keydown`:
          case `keyup`:
            pi(o4, n2, i4);
        }
        var y2;
        if (wr)
          b: {
            switch (e3) {
              case `compositionstart`:
                var b2 = `onCompositionStart`;
                break b;
              case `compositionend`:
                b2 = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                b2 = `onCompositionUpdate`;
                break b;
            }
            b2 = void 0;
          }
        else
          Mr ? Ar(e3, n2) && (b2 = `onCompositionEnd`) : e3 === `keydown` && n2.keyCode === 229 && (b2 = `onCompositionStart`);
        b2 && (Dr && n2.locale !== `ko` && (Mr || b2 !== `onCompositionStart` ? b2 === `onCompositionEnd` && Mr && (y2 = Kn()) : (Un = i4, Wn = `value` in Un ? Un.value : Un.textContent, Mr = true)), v2 = Jf(r3, b2), 0 < v2.length && (b2 = new ur(b2, e3, null, n2, i4), o4.push({event: b2, listeners: v2}), y2 ? b2.data = y2 : (y2 = jr(n2), y2 !== null && (b2.data = y2)))), (y2 = Er ? Nr(e3, n2) : Pr(e3, n2)) && (b2 = Jf(r3, `onBeforeInput`), 0 < b2.length && (v2 = new ur(`onBeforeInput`, `beforeinput`, null, n2, i4), o4.push({event: v2, listeners: b2}), v2.data = y2)), If(o4, e3, r3, n2, i4);
      }
      Vf(o4, t3);
    });
  }
  function qf(e3, t3, n2) {
    return {instance: e3, listener: t3, currentTarget: n2};
  }
  function Jf(e3, t3) {
    for (var n2 = t3 + `Capture`, r2 = []; e3 !== null; ) {
      var i3 = e3, a2 = i3.stateNode;
      if (i3 = i3.tag, i3 !== 5 && i3 !== 26 && i3 !== 27 || a2 === null || (i3 = zn(e3, n2), i3 != null && r2.unshift(qf(e3, i3, a2)), i3 = zn(e3, t3), i3 != null && r2.push(qf(e3, i3, a2))), e3.tag === 3)
        return r2;
      e3 = e3.return;
    }
    return [];
  }
  function Yf(e3) {
    if (e3 === null)
      return null;
    do
      e3 = e3.return;
    while (e3 && e3.tag !== 5 && e3.tag !== 27);
    return e3 || null;
  }
  function Xf(e3, t3, n2, r2, i3) {
    for (var a2 = t3._reactName, o3 = []; n2 !== null && n2 !== r2; ) {
      var s3 = n2, c3 = s3.alternate, l3 = s3.stateNode;
      if (s3 = s3.tag, c3 !== null && c3 === r2)
        break;
      s3 !== 5 && s3 !== 26 && s3 !== 27 || l3 === null || (c3 = l3, i3 ? (l3 = zn(n2, a2), l3 != null && o3.unshift(qf(n2, l3, c3))) : i3 || (l3 = zn(n2, a2), l3 != null && o3.push(qf(n2, l3, c3)))), n2 = n2.return;
    }
    o3.length !== 0 && e3.push({event: t3, listeners: o3});
  }
  var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
  function $f(e3) {
    return (typeof e3 == `string` ? e3 : `` + e3).replace(Zf, `
`).replace(Qf, ``);
  }
  function ep(e3, t3) {
    return t3 = $f(t3), $f(e3) === t3;
  }
  function $(e3, t3, n2, r2, i3, a2) {
    switch (n2) {
      case `children`:
        if (typeof r2 == `string`)
          t3 === `body` || t3 === `textarea` && r2 === `` || Cn(e3, r2);
        else if (typeof r2 == `number` || typeof r2 == `bigint`)
          t3 !== `body` && Cn(e3, `` + r2);
        else
          return;
        break;
      case `className`:
        cn(e3, `class`, r2);
        break;
      case `tabIndex`:
        cn(e3, `tabindex`, r2);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        cn(e3, n2, r2);
        break;
      case `style`:
        En(e3, r2, a2);
        return;
      case `data`:
        if (t3 !== `object`) {
          cn(e3, `data`, r2);
          break;
        }
      case `src`:
      case `href`:
        if (r2 === `` && (t3 !== `a` || n2 !== `href`)) {
          e3.removeAttribute(n2);
          break;
        }
        if (r2 == null || typeof r2 == `function` || typeof r2 == `symbol` || typeof r2 == `boolean`) {
          e3.removeAttribute(n2);
          break;
        }
        r2 = An(r2), e3.setAttribute(n2, r2);
        break;
      case `action`:
      case `formAction`:
        if (typeof r2 == `function`) {
          e3.setAttribute(n2, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof a2 == `function` && (n2 === `formAction` ? (t3 !== `input` && $(e3, t3, `name`, i3.name, i3, null), $(e3, t3, `formEncType`, i3.formEncType, i3, null), $(e3, t3, `formMethod`, i3.formMethod, i3, null), $(e3, t3, `formTarget`, i3.formTarget, i3, null)) : ($(e3, t3, `encType`, i3.encType, i3, null), $(e3, t3, `method`, i3.method, i3, null), $(e3, t3, `target`, i3.target, i3, null))), r2 == null || typeof r2 == `symbol` || typeof r2 == `boolean`) {
          e3.removeAttribute(n2);
          break;
        }
        r2 = An(r2), e3.setAttribute(n2, r2);
        break;
      case `onClick`:
        r2 != null && (e3.onclick = jn);
        return;
      case `onScroll`:
        r2 != null && Q(`scroll`, e3);
        return;
      case `onScrollEnd`:
        r2 != null && Q(`scrollend`, e3);
        return;
      case `dangerouslySetInnerHTML`:
        if (r2 != null) {
          if (typeof r2 != `object` || !(`__html` in r2))
            throw Error(s2(61));
          if (n2 = r2.__html, n2 != null) {
            if (i3.children != null)
              throw Error(s2(60));
            a2?.__html !== n2 && (e3.innerHTML = n2);
          }
        }
        break;
      case `multiple`:
        e3.multiple = r2 && typeof r2 != `function` && typeof r2 != `symbol`;
        break;
      case `muted`:
        e3.muted = r2 && typeof r2 != `function` && typeof r2 != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r2 == null || typeof r2 == `function` || typeof r2 == `boolean` || typeof r2 == `symbol`) {
          e3.removeAttribute(`xlink:href`);
          break;
        }
        n2 = An(r2), e3.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n2);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r2 != null && typeof r2 != `function` && typeof r2 != `symbol` ? e3.setAttribute(n2, r2) : e3.removeAttribute(n2);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `credentialless`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        r2 && typeof r2 != `function` && typeof r2 != `symbol` ? e3.setAttribute(n2, ``) : e3.removeAttribute(n2);
        break;
      case `capture`:
      case `download`:
        r2 === true ? e3.setAttribute(n2, ``) : r2 !== false && r2 != null && typeof r2 != `function` && typeof r2 != `symbol` ? e3.setAttribute(n2, r2) : e3.removeAttribute(n2);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r2 != null && typeof r2 != `function` && typeof r2 != `symbol` && !isNaN(r2) && 1 <= r2 ? e3.setAttribute(n2, r2) : e3.removeAttribute(n2);
        break;
      case `rowSpan`:
      case `start`:
        r2 == null || typeof r2 == `function` || typeof r2 == `symbol` || isNaN(r2) ? e3.removeAttribute(n2) : e3.setAttribute(n2, r2);
        break;
      case `popover`:
        Q(`beforetoggle`, e3), Q(`toggle`, e3), sn(e3, `popover`, r2);
        break;
      case `xlinkActuate`:
        ln(e3, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r2);
        break;
      case `xlinkArcrole`:
        ln(e3, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r2);
        break;
      case `xlinkRole`:
        ln(e3, `http://www.w3.org/1999/xlink`, `xlink:role`, r2);
        break;
      case `xlinkShow`:
        ln(e3, `http://www.w3.org/1999/xlink`, `xlink:show`, r2);
        break;
      case `xlinkTitle`:
        ln(e3, `http://www.w3.org/1999/xlink`, `xlink:title`, r2);
        break;
      case `xlinkType`:
        ln(e3, `http://www.w3.org/1999/xlink`, `xlink:type`, r2);
        break;
      case `xmlBase`:
        ln(e3, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r2);
        break;
      case `xmlLang`:
        ln(e3, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r2);
        break;
      case `xmlSpace`:
        ln(e3, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r2);
        break;
      case `is`:
        sn(e3, `is`, r2);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(2 < n2.length) || n2[0] !== `o` && n2[0] !== `O` || n2[1] !== `n` && n2[1] !== `N`)
          n2 = On.get(n2) || n2, sn(e3, n2, r2);
        else
          return;
    }
    E = true;
  }
  function tp(e3, t3, n2, r2, i3, a2) {
    switch (n2) {
      case `style`:
        En(e3, r2, a2);
        return;
      case `dangerouslySetInnerHTML`:
        if (r2 != null) {
          if (typeof r2 != `object` || !(`__html` in r2))
            throw Error(s2(61));
          if (n2 = r2.__html, n2 != null) {
            if (i3.children != null)
              throw Error(s2(60));
            a2?.__html !== n2 && (e3.innerHTML = n2);
          }
        }
        break;
      case `children`:
        if (typeof r2 == `string`)
          Cn(e3, r2);
        else if (typeof r2 == `number` || typeof r2 == `bigint`)
          Cn(e3, `` + r2);
        else
          return;
        break;
      case `onScroll`:
        r2 != null && Q(`scroll`, e3);
        return;
      case `onScrollEnd`:
        r2 != null && Q(`scrollend`, e3);
        return;
      case `onClick`:
        r2 != null && (e3.onclick = jn);
        return;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        return;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!Qt.hasOwnProperty(n2))
          a: {
            if (n2[0] === `o` && n2[1] === `n` && (i3 = n2.endsWith(`Capture`), a2 = n2.slice(2, i3 ? n2.length - 7 : void 0), t3 = e3[Lt] || null, t3 = t3 == null ? null : t3[n2], typeof t3 == `function` && e3.removeEventListener(a2, t3, i3), typeof r2 == `function`)) {
              typeof t3 != `function` && t3 !== null && (n2 in e3 ? e3[n2] = null : e3.hasAttribute(n2) && e3.removeAttribute(n2)), e3.addEventListener(a2, r2, i3);
              break a;
            }
            E = true, n2 in e3 ? e3[n2] = r2 : r2 === true ? e3.setAttribute(n2, ``) : sn(e3, n2, r2);
          }
        return;
    }
    E = true;
  }
  function np(e3, t3, n2) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        Q(`error`, e3), Q(`load`, e3);
        var r2 = false, i3 = false, a2;
        for (a2 in n2)
          if (n2.hasOwnProperty(a2)) {
            var o3 = n2[a2];
            if (o3 != null)
              switch (a2) {
                case `src`:
                  r2 = true;
                  break;
                case `srcSet`:
                  i3 = true;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(s2(137, t3));
                default:
                  $(e3, t3, a2, o3, n2, null);
              }
          }
        i3 && $(e3, t3, `srcSet`, n2.srcSet, n2, null), r2 && $(e3, t3, `src`, n2.src, n2, null);
        return;
      case `input`:
        Q(`invalid`, e3);
        var c3 = a2 = o3 = i3 = null, l3 = null, u3 = null;
        for (r2 in n2)
          if (n2.hasOwnProperty(r2)) {
            var d3 = n2[r2];
            if (d3 != null)
              switch (r2) {
                case `name`:
                  i3 = d3;
                  break;
                case `type`:
                  o3 = d3;
                  break;
                case `checked`:
                  l3 = d3;
                  break;
                case `defaultChecked`:
                  u3 = d3;
                  break;
                case `value`:
                  a2 = d3;
                  break;
                case `defaultValue`:
                  c3 = d3;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (d3 != null)
                    throw Error(s2(137, t3));
                  break;
                default:
                  $(e3, t3, r2, d3, n2, null);
              }
          }
        vn(e3, a2, c3, l3, u3, o3, i3, false);
        return;
      case `select`:
        for (i3 in Q(`invalid`, e3), r2 = o3 = a2 = null, n2)
          if (n2.hasOwnProperty(i3) && (c3 = n2[i3], c3 != null))
            switch (i3) {
              case `value`:
                a2 = c3;
                break;
              case `defaultValue`:
                o3 = c3;
                break;
              case `multiple`:
                r2 = c3;
              default:
                $(e3, t3, i3, c3, n2, null);
            }
        t3 = a2, n2 = o3, e3.multiple = !!r2, t3 == null ? n2 != null && bn(e3, !!r2, n2, true) : bn(e3, !!r2, t3, false);
        return;
      case `textarea`:
        for (o3 in Q(`invalid`, e3), a2 = i3 = r2 = null, n2)
          if (n2.hasOwnProperty(o3) && (c3 = n2[o3], c3 != null))
            switch (o3) {
              case `value`:
                r2 = c3;
                break;
              case `defaultValue`:
                i3 = c3;
                break;
              case `children`:
                a2 = c3;
                break;
              case `dangerouslySetInnerHTML`:
                if (c3 != null)
                  throw Error(s2(91));
                break;
              default:
                $(e3, t3, o3, c3, n2, null);
            }
        Sn(e3, r2, i3, a2);
        return;
      case `option`:
        for (l3 in n2)
          if (n2.hasOwnProperty(l3) && (r2 = n2[l3], r2 != null))
            switch (l3) {
              case `selected`:
                e3.selected = r2 && typeof r2 != `function` && typeof r2 != `symbol`;
                break;
              default:
                $(e3, t3, l3, r2, n2, null);
            }
        return;
      case `dialog`:
        Q(`beforetoggle`, e3), Q(`toggle`, e3), Q(`cancel`, e3), Q(`close`, e3);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e3);
        break;
      case `video`:
      case `audio`:
        for (r2 = 0; r2 < zf.length; r2++)
          Q(zf[r2], e3);
        break;
      case `image`:
        Q(`error`, e3), Q(`load`, e3);
        break;
      case `details`:
        Q(`toggle`, e3);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e3), Q(`load`, e3);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u3 in n2)
          if (n2.hasOwnProperty(u3) && (r2 = n2[u3], r2 != null))
            switch (u3) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(s2(137, t3));
              default:
                $(e3, t3, u3, r2, n2, null);
            }
        return;
      default:
        if (Dn(t3)) {
          for (d3 in n2)
            n2.hasOwnProperty(d3) && (r2 = n2[d3], r2 !== void 0 && tp(e3, t3, d3, r2, n2, void 0));
          return;
        }
    }
    for (c3 in n2)
      n2.hasOwnProperty(c3) && (r2 = n2[c3], r2 != null && $(e3, t3, c3, r2, n2, null));
  }
  var rp = {};
  function ip(e3, t3, n2, r2) {
    switch (t3) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var i3 = null, a2 = null, o3 = null, c3 = null, l3 = null, u3 = null, d3 = null;
        for (m2 in n2) {
          var f3 = n2[m2];
          if (n2.hasOwnProperty(m2) && f3 != null)
            switch (m2) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l3 = f3;
              default:
                r2.hasOwnProperty(m2) || $(e3, t3, m2, null, r2, f3);
            }
        }
        for (var p2 in r2) {
          var m2 = r2[p2];
          if (f3 = n2[p2], r2.hasOwnProperty(p2) && (m2 != null || f3 != null))
            switch (p2) {
              case `type`:
                m2 !== f3 && (E = true), a2 = m2;
                break;
              case `name`:
                m2 !== f3 && (E = true), i3 = m2;
                break;
              case `checked`:
                m2 !== f3 && (E = true), u3 = m2;
                break;
              case `defaultChecked`:
                m2 !== f3 && (E = true), d3 = m2;
                break;
              case `value`:
                m2 !== f3 && (E = true), o3 = m2;
                break;
              case `defaultValue`:
                m2 !== f3 && (E = true), c3 = m2;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m2 != null)
                  throw Error(s2(137, t3));
                break;
              default:
                m2 !== f3 && $(e3, t3, p2, m2, r2, f3);
            }
        }
        _n(e3, o3, c3, l3, u3, d3, a2, i3);
        return;
      case `select`:
        for (a2 in m2 = o3 = c3 = p2 = null, n2)
          if (l3 = n2[a2], n2.hasOwnProperty(a2) && l3 != null)
            switch (a2) {
              case `value`:
                break;
              case `multiple`:
                m2 = l3;
              default:
                r2.hasOwnProperty(a2) || $(e3, t3, a2, null, r2, l3);
            }
        for (i3 in r2)
          if (a2 = r2[i3], l3 = n2[i3], r2.hasOwnProperty(i3) && (a2 != null || l3 != null))
            switch (i3) {
              case `value`:
                a2 !== l3 && (E = true), p2 = a2;
                break;
              case `defaultValue`:
                a2 !== l3 && (E = true), c3 = a2;
                break;
              case `multiple`:
                a2 !== l3 && (E = true), o3 = a2;
              default:
                a2 !== l3 && $(e3, t3, i3, a2, r2, l3);
            }
        t3 = c3, n2 = o3, r2 = m2, p2 == null ? !!r2 != !!n2 && (t3 == null ? bn(e3, !!n2, n2 ? [] : ``, false) : bn(e3, !!n2, t3, true)) : bn(e3, !!n2, p2, false);
        return;
      case `textarea`:
        for (c3 in m2 = p2 = null, n2)
          if (i3 = n2[c3], n2.hasOwnProperty(c3) && i3 != null && !r2.hasOwnProperty(c3))
            switch (c3) {
              case `value`:
                break;
              case `children`:
                break;
              default:
                $(e3, t3, c3, null, r2, i3);
            }
        for (o3 in r2)
          if (i3 = r2[o3], a2 = n2[o3], r2.hasOwnProperty(o3) && (i3 != null || a2 != null))
            switch (o3) {
              case `value`:
                i3 !== a2 && (E = true), p2 = i3;
                break;
              case `defaultValue`:
                i3 !== a2 && (E = true), m2 = i3;
                break;
              case `children`:
                break;
              case `dangerouslySetInnerHTML`:
                if (i3 != null)
                  throw Error(s2(91));
                break;
              default:
                i3 !== a2 && $(e3, t3, o3, i3, r2, a2);
            }
        xn(e3, p2, m2);
        return;
      case `option`:
        for (var h2 in n2)
          if (p2 = n2[h2], n2.hasOwnProperty(h2) && p2 != null && !r2.hasOwnProperty(h2))
            switch (h2) {
              case `selected`:
                e3.selected = false;
                break;
              default:
                $(e3, t3, h2, null, r2, p2);
            }
        for (l3 in r2)
          if (p2 = r2[l3], m2 = n2[l3], r2.hasOwnProperty(l3) && p2 !== m2 && (p2 != null || m2 != null))
            switch (l3) {
              case `selected`:
                p2 !== m2 && (E = true), e3.selected = p2 && typeof p2 != `function` && typeof p2 != `symbol`;
                break;
              default:
                $(e3, t3, l3, p2, r2, m2);
            }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g2 in n2)
          p2 = n2[g2], n2.hasOwnProperty(g2) && p2 != null && !r2.hasOwnProperty(g2) && $(e3, t3, g2, null, r2, p2);
        for (u3 in r2)
          if (p2 = r2[u3], m2 = n2[u3], r2.hasOwnProperty(u3) && p2 !== m2 && (p2 != null || m2 != null))
            switch (u3) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (p2 != null)
                  throw Error(s2(137, t3));
                break;
              default:
                $(e3, t3, u3, p2, r2, m2);
            }
        return;
      default:
        if (Dn(t3)) {
          for (var _2 in n2)
            p2 = n2[_2], n2.hasOwnProperty(_2) && p2 !== void 0 && !r2.hasOwnProperty(_2) && tp(e3, t3, _2, void 0, r2, p2);
          for (d3 in r2)
            p2 = r2[d3], m2 = n2[d3], !r2.hasOwnProperty(d3) || p2 === m2 || p2 === void 0 && m2 === void 0 || tp(e3, t3, d3, p2, r2, m2);
          return;
        }
    }
    for (var v2 in n2)
      p2 = n2[v2], n2.hasOwnProperty(v2) && p2 != null && !r2.hasOwnProperty(v2) && $(e3, t3, v2, null, r2, p2);
    for (f3 in r2)
      p2 = r2[f3], m2 = n2[f3], !r2.hasOwnProperty(f3) || p2 === m2 || p2 == null && m2 == null || $(e3, t3, f3, p2, r2, m2);
  }
  function ap(e3) {
    switch (e3) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function op() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e3 = 0, t3 = 0, n2 = performance.getEntriesByType(`resource`), r2 = 0; r2 < n2.length; r2++) {
        var i3 = n2[r2], a2 = i3.transferSize, o3 = i3.initiatorType, s3 = i3.duration;
        if (a2 && s3 && ap(o3)) {
          for (o3 = 0, s3 = i3.responseEnd, r2 += 1; r2 < n2.length; r2++) {
            var c3 = n2[r2], l3 = c3.startTime;
            if (l3 > s3)
              break;
            var u3 = c3.transferSize, d3 = c3.initiatorType;
            u3 && ap(d3) && (c3 = c3.responseEnd, o3 += u3 * (c3 < s3 ? 1 : (s3 - l3) / (c3 - l3)));
          }
          if (--r2, t3 += 8 * (a2 + o3) / (i3.duration / 1e3), e3++, 10 < e3)
            break;
        }
      }
      if (0 < e3)
        return t3 / e3 / 1e6;
    }
    return navigator.connection && (e3 = navigator.connection.downlink, typeof e3 == `number`) ? e3 : 5;
  }
  var sp = null, cp = null;
  function lp(e3) {
    return e3.nodeType === 9 ? e3 : e3.ownerDocument;
  }
  function up(e3) {
    switch (e3) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp(e3, t3) {
    if (e3 === 0)
      switch (t3) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
    return e3 === 1 && t3 === `foreignObject` ? 0 : e3;
  }
  function fp(e3, t3, n2, r2) {
    return n2 = lp(n2).createElement(e3), n2[It] = r2, n2[Lt] = t3, np(n2, e3, t3), T(n2), n2;
  }
  function pp(e3, t3) {
    return e3 === `textarea` || e3 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
  }
  var mp = null;
  function hp() {
    var e3 = window.event;
    return e3 && e3.type === `popstate` ? e3 !== mp && (mp = e3, true) : (mp = null, false);
  }
  var gp = typeof setTimeout == `function` ? setTimeout : void 0, _p = typeof clearTimeout == `function` ? clearTimeout : void 0, vp = typeof Promise == `function` ? Promise : void 0, yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp, bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === void 0 ? gp : function(e3) {
    return vp.resolve(null).then(e3).catch(xp);
  };
  function xp(e3) {
    setTimeout(function() {
      throw e3;
    });
  }
  function Sp(e3) {
    return e3 === `head`;
  }
  function Cp(e3, t3) {
    var n2 = t3, r2 = 0;
    do {
      var i3 = n2.nextSibling;
      if (e3.removeChild(n2), i3 && i3.nodeType === 8) {
        if (n2 = i3.data, n2 === `/$` || n2 === `/&`) {
          if (r2 === 0) {
            e3.removeChild(i3), Hh(t3);
            return;
          }
          r2--;
        } else if (n2 === `$` || n2 === `$?` || n2 === `$~` || n2 === `$!` || n2 === `&`)
          r2++;
        else if (n2 === `html`)
          _m(e3.ownerDocument.documentElement);
        else if (n2 === `head`) {
          n2 = e3.ownerDocument.head, _m(n2);
          for (var a2 = n2.firstChild; a2; ) {
            var o3 = a2.nextSibling, s3 = a2.nodeName;
            a2[Ut] || s3 === `SCRIPT` || s3 === `STYLE` || s3 === `LINK` && a2.rel.toLowerCase() === `stylesheet` || n2.removeChild(a2), a2 = o3;
          }
        } else
          n2 === `body` && _m(e3.ownerDocument.body);
      }
      n2 = i3;
    } while (n2);
    Hh(t3);
  }
  function wp(e3, t3) {
    var n2 = e3;
    e3 = 0;
    do {
      var r2 = n2.nextSibling;
      if (n2.nodeType === 1 ? t3 ? (n2._stashedDisplay = n2.style.display, n2.style.display = `none`) : (n2.style.display = n2._stashedDisplay || ``, n2.getAttribute(`style`) === `` && n2.removeAttribute(`style`)) : n2.nodeType === 3 && (t3 ? (n2._stashedText = n2.nodeValue, n2.nodeValue = ``) : n2.nodeValue = n2._stashedText || ``), r2 && r2.nodeType === 8) {
        if (n2 = r2.data, n2 === `/$`) {
          if (e3 === 0)
            break;
          e3--;
        } else
          n2 !== `$` && n2 !== `$?` && n2 !== `$~` && n2 !== `$!` || e3++;
      }
      n2 = r2;
    } while (n2);
  }
  function Tp(e3, t3, n2) {
    if (t3 = CSS.escape(t3) === t3 ? t3 : `r-` + btoa(t3).replace(/=/g, ``), e3.style.viewTransitionName = t3, n2 != null && (e3.style.viewTransitionClass = n2), n2 = getComputedStyle(e3), n2.display === `inline`) {
      if (t3 = e3.getClientRects(), t3.length === 1)
        var r2 = 1;
      else
        for (var i3 = r2 = 0; i3 < t3.length; i3++) {
          var a2 = t3[i3];
          0 < a2.width && 0 < a2.height && r2++;
        }
      r2 === 1 && (e3 = e3.style, e3.display = t3.length === 1 ? `inline-block` : `block`, e3.marginTop = `-` + n2.paddingTop, e3.marginBottom = `-` + n2.paddingBottom);
    }
  }
  function Ep(e3, t3) {
    e3 = e3.style, t3 = t3.style;
    var n2 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionName`) ? t3.viewTransitionName : t3.hasOwnProperty(`view-transition-name`) ? t3[`view-transition-name`] : null;
    e3.viewTransitionName = n2 == null || typeof n2 == `boolean` ? `` : (`` + n2).trim(), n2 = t3 == null ? null : t3.hasOwnProperty(`viewTransitionClass`) ? t3.viewTransitionClass : t3.hasOwnProperty(`view-transition-class`) ? t3[`view-transition-class`] : null, e3.viewTransitionClass = n2 == null || typeof n2 == `boolean` ? `` : (`` + n2).trim(), e3.display === `inline-block` && (t3 == null ? e3.display = e3.margin = `` : (n2 = t3.display, e3.display = n2 == null || typeof n2 == `boolean` ? `` : n2, n2 = t3.margin, n2 == null ? (n2 = t3.hasOwnProperty(`marginTop`) ? t3.marginTop : t3[`margin-top`], e3.marginTop = n2 == null || typeof n2 == `boolean` ? `` : n2, t3 = t3.hasOwnProperty(`marginBottom`) ? t3.marginBottom : t3[`margin-bottom`], e3.marginBottom = t3 == null || typeof t3 == `boolean` ? `` : t3) : e3.margin = n2));
  }
  function Dp(e3, t3, n2) {
    return n2 = n2.ownerDocument.defaultView, {rect: e3, abs: t3.position === `absolute` || t3.position === `fixed`, clip: t3.clipPath !== `none` || t3.overflow !== `visible` || t3.filter !== `none` || t3.mask !== `none` || t3.mask !== `none` || t3.borderRadius !== `0px`, view: 0 <= e3.bottom && 0 <= e3.right && e3.top <= n2.innerHeight && e3.left <= n2.innerWidth};
  }
  function Op(e3) {
    return Dp(e3.getBoundingClientRect(), getComputedStyle(e3), e3);
  }
  function kp(e3) {
    var t3 = e3.getBoundingClientRect();
    t3 = new DOMRect(t3.x + 2e4, t3.y + 2e4, t3.width, t3.height);
    var n2 = getComputedStyle(e3);
    return Dp(t3, n2, e3);
  }
  function Ap(e3) {
    return e3.documentElement.clientHeight;
  }
  function jp(e3) {
    this.addEventListener(`load`, e3), this.addEventListener(`error`, e3);
  }
  function Mp(e3, t3, n2, r2, i3, a2, o3, s3, c3) {
    var l3 = t3.nodeType === 9 ? t3 : t3.ownerDocument;
    try {
      var u3 = l3.startViewTransition({update: function() {
        var t4 = l3.defaultView, n3 = t4.navigation && t4.navigation.transition, o4 = l3.fonts.status;
        r2();
        var s4 = [];
        if (o4 === `loaded` && (Ap(l3), l3.fonts.status === `loading` && s4.push(l3.fonts.ready)), o4 = s4.length, e3 !== null)
          for (var c4 = e3.suspenseyImages, u4 = 0, d4 = 0; d4 < c4.length; d4++) {
            var f3 = c4[d4];
            if (!f3.complete) {
              var p2 = f3.getBoundingClientRect();
              if (0 < p2.bottom && 0 < p2.right && p2.top < t4.innerHeight && p2.left < t4.innerWidth) {
                if (u4 += Xm(f3), u4 > $m) {
                  s4.length = o4;
                  break;
                }
                f3 = new Promise(jp.bind(f3)), s4.push(f3);
              }
            }
          }
        if (0 < s4.length)
          return t4 = Promise.race([Promise.all(s4), new Promise(function(e4) {
            return setTimeout(e4, 500);
          })]).then(i3, i3), (n3 ? Promise.allSettled([n3.finished, t4]) : t4).then(a2, a2);
        if (i3(), n3)
          return n3.finished.then(a2, a2);
        a2();
      }, types: n2});
      l3.__reactViewTransition = u3;
      var d3 = [];
      return u3.ready.then(function() {
        for (var e4 = l3.documentElement.getAnimations({subtree: true}), t4 = 0; t4 < e4.length; t4++) {
          var n3 = e4[t4], r3 = n3.effect, i4 = r3.pseudoElement;
          if (i4 != null && i4.startsWith(`::view-transition`)) {
            d3.push(n3), n3 = r3.getKeyframes();
            for (var a3 = i4 = void 0, s4 = true, c4 = 0; c4 < n3.length; c4++) {
              var u4 = n3[c4], f3 = u4.width;
              if (i4 === void 0)
                i4 = f3;
              else if (i4 !== f3) {
                s4 = false;
                break;
              }
              if (f3 = u4.height, a3 === void 0)
                a3 = f3;
              else if (a3 !== f3) {
                s4 = false;
                break;
              }
              delete u4.width, delete u4.height, u4.transform === `none` && delete u4.transform;
            }
            s4 && i4 !== void 0 && a3 !== void 0 && (r3.setKeyframes(n3), s4 = getComputedStyle(r3.target, r3.pseudoElement), s4.width !== i4 || s4.height !== a3) && (s4 = n3[0], s4.width = i4, s4.height = a3, s4 = n3[n3.length - 1], s4.width = i4, s4.height = a3, r3.setKeyframes(n3));
          }
        }
        o3();
      }, function(e4) {
        l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null);
        try {
          if (typeof e4 == `object` && e4)
            switch (e4.name) {
              case `InvalidStateError`:
                (e4.message === `View transition was skipped because document visibility state is hidden.` || e4.message === `Skipping view transition because document visibility state has become hidden.` || e4.message === `Skipping view transition because viewport size changed.` || e4.message === `Transition was aborted because of invalid state`) && (e4 = null);
            }
          e4 !== null && c3(e4);
        } finally {
          r2(), i3(), o3();
        }
      }), u3.finished.finally(function() {
        for (var e4 = 0; e4 < d3.length; e4++)
          d3[e4].cancel();
        l3.__reactViewTransition === u3 && (l3.__reactViewTransition = null), s3();
      }), u3;
    } catch {
      return r2(), i3(), o3(), null;
    }
  }
  function Np(e3, t3) {
    this._scope = document.documentElement, this._selector = `::view-transition-` + e3 + `(` + t3 + `)`;
  }
  Np.prototype.animate = function(e3, t3) {
    return t3 = typeof t3 == `number` ? {duration: t3} : x({}, t3), t3.pseudoElement = this._selector, this._scope.animate(e3, t3);
  }, Np.prototype.getAnimations = function() {
    for (var e3 = this._scope, t3 = this._selector, n2 = e3.getAnimations({subtree: true}), r2 = [], i3 = 0; i3 < n2.length; i3++) {
      var a2 = n2[i3].effect;
      a2 !== null && a2.target === e3 && a2.pseudoElement === t3 && r2.push(n2[i3]);
    }
    return r2;
  }, Np.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Pp(e3) {
    return {name: e3, group: new Np(`group`, e3), imagePair: new Np(`image-pair`, e3), old: new Np(`old`, e3), new: new Np(`new`, e3)};
  }
  function Fp(e3) {
    this._fragmentFiber = e3, this._observers = this._eventListeners = null;
  }
  Fp.prototype.addEventListener = function(e3, t3, n2) {
    var r2 = null, i3 = null;
    if (!(n2 != null && typeof n2 != `boolean` && (r2 = n2.signal || null, r2 !== null && r2.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var a2 = this._eventListeners;
      if (Bp(a2, e3, t3, n2) === -1) {
        var o3 = this, s3 = t3;
        n2 != null && typeof n2 != `boolean` && n2.once === true && (s3 = function(r3) {
          o3.removeEventListener(e3, t3, n2), typeof t3 == `function` ? t3.call(this, r3) : t3.handleEvent(r3);
        }), r2 !== null && (i3 = o3.removeEventListener.bind(o3, e3, t3, n2), r2.addEventListener(`abort`, i3, {once: true}), i3 = r2.removeEventListener.bind(r2, `abort`, i3)), r2 = Rp(n2), a2.push({type: e3, listener: t3, optionsOrUseCapture: n2, attachedListener: s3, cleanup: i3}), h(this._fragmentFiber.child, false, Ip, e3, s3, r2);
      }
      this._eventListeners = a2;
    }
  };
  function Ip(e3, t3, n2, r2) {
    return b(e3).addEventListener(t3, n2, r2), false;
  }
  Fp.prototype.removeEventListener = function(e3, t3, n2) {
    var r2 = this._eventListeners;
    if (r2 !== null && (t3 = Bp(r2, e3, t3, n2), t3 !== -1)) {
      var i3 = r2[t3];
      n2 = i3.attachedListener;
      var a2 = i3.cleanup;
      i3 = Rp(i3.optionsOrUseCapture), h(this._fragmentFiber.child, false, Lp, e3, n2, i3), r2.splice(t3, 1), a2 !== null && a2();
    }
  };
  function Lp(e3, t3, n2, r2) {
    return b(e3).removeEventListener(t3, n2, r2), false;
  }
  function Rp(e3) {
    return e3 != null && typeof e3 != `boolean` && (e3.once === true || e3.signal instanceof AbortSignal) ? {capture: e3.capture, passive: e3.passive} : e3;
  }
  function zp(e3) {
    return e3 == null ? `c=0` : typeof e3 == `boolean` ? `c=` + (e3 ? `1` : `0`) : `c=` + (e3.capture ? `1` : `0`);
  }
  function Bp(e3, t3, n2, r2) {
    if (e3.length === 0)
      return -1;
    r2 = zp(r2);
    for (var i3 = 0; i3 < e3.length; i3++) {
      var a2 = e3[i3];
      if (a2.type === t3 && a2.listener === n2 && zp(a2.optionsOrUseCapture) === r2)
        return i3;
    }
    return -1;
  }
  Fp.prototype.dispatchEvent = function(e3) {
    var t3 = g(this._fragmentFiber);
    if (t3 === null)
      return true;
    t3 = b(t3);
    var n2 = this._eventListeners;
    if (n2 !== null && 0 < n2.length || !e3.bubbles) {
      var r2 = t3.nodeType === 9 ? t3.createComment(``) : document.createTextNode(``);
      if (n2)
        for (var i3 = 0; i3 < n2.length; i3++) {
          var a2 = n2[i3];
          r2.addEventListener(a2.type, a2.attachedListener, Rp(a2.optionsOrUseCapture));
        }
      if (t3.appendChild(r2), e3 = r2.dispatchEvent(e3), n2)
        for (i3 = 0; i3 < n2.length; i3++)
          a2 = n2[i3], r2.removeEventListener(a2.type, a2.attachedListener, Rp(a2.optionsOrUseCapture));
      return t3.removeChild(r2), e3;
    }
    return t3.dispatchEvent(e3);
  }, Fp.prototype.focus = function(e3) {
    h(this._fragmentFiber.child, true, Vp, e3, void 0, void 0);
  };
  function Vp(e3, t3) {
    return e3.tag !== 6 && (e3 = b(e3), pm(e3, t3));
  }
  Fp.prototype.focusLast = function(e3) {
    var t3 = [];
    h(this._fragmentFiber.child, true, Hp, t3, void 0, void 0);
    for (var n2 = t3.length - 1; 0 <= n2 && !Vp(t3[n2], e3); n2--)
      ;
  };
  function Hp(e3, t3) {
    return t3.push(e3), false;
  }
  Fp.prototype.blur = function() {
    var e3 = g(this._fragmentFiber);
    e3 !== null && (e3 = b(e3), e3 = lp(e3).activeElement, e3 !== null && h(this._fragmentFiber.child, false, Up, e3, void 0, void 0));
  };
  function Up(e3, t3) {
    return e3.tag !== 6 && (e3 = b(e3), e3 === t3 || e3.contains(t3) ? (t3.blur(), true) : false);
  }
  Fp.prototype.observeUsing = function(e3) {
    this._observers === null && (this._observers = new Set()), this._observers.add(e3), h(this._fragmentFiber.child, false, Wp, e3, void 0, void 0);
  };
  function Wp(e3, t3) {
    return e3.tag !== 6 && (e3 = b(e3), t3.observe(e3), false);
  }
  Fp.prototype.unobserveUsing = function(e3) {
    var t3 = this._observers;
    if (t3 !== null && t3.has(e3)) {
      t3.delete(e3), h(this._fragmentFiber.child, false, Gp, e3, void 0, void 0);
      for (var n2 = t3 = 0; n2 < Kp.length; n2++) {
        var r2 = Kp[n2];
        r2.fragmentInstance === this && r2.observer === e3 ? e3.unobserve(r2.instance) : Kp[t3++] = r2;
      }
      Kp.length = t3;
    }
  };
  function Gp(e3, t3) {
    return e3.tag !== 6 && (e3 = b(e3), t3.unobserve(e3), false);
  }
  var Kp = [], qp = false;
  function Jp(e3, t3, n2) {
    Kp.push({fragmentInstance: e3, observer: t3, instance: n2}), qp || (qp = true, mm(function() {
      qp = false;
      var e4 = Kp;
      Kp = [];
      for (var t4 = 0; t4 < e4.length; t4++) {
        var n3 = e4[t4];
        n3.observer.unobserve(n3.instance);
      }
    }));
  }
  Fp.prototype.getClientRects = function() {
    var e3 = [];
    return h(this._fragmentFiber.child, false, Yp, e3, void 0, void 0), e3;
  };
  function Yp(e3, t3) {
    if (e3.tag === 6) {
      e3 = e3.stateNode;
      var n2 = e3.ownerDocument.createRange();
      n2.selectNodeContents(e3), t3.push.apply(t3, n2.getClientRects());
    } else
      e3 = b(e3), t3.push.apply(t3, e3.getClientRects());
    return false;
  }
  Fp.prototype.getRootNode = function(e3) {
    var t3 = g(this._fragmentFiber);
    return t3 === null ? this : b(t3).getRootNode(e3);
  }, Fp.prototype.compareDocumentPosition = function(e3) {
    var t3 = g(this._fragmentFiber);
    if (t3 === null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n2 = [];
    h(this._fragmentFiber.child, false, Hp, n2, void 0, void 0);
    var r2 = b(t3);
    if (n2.length === 0) {
      if (n2 = r2, _(this._fragmentFiber)) {
        a: {
          for (t3 = this._fragmentFiber.return; t3 !== null; ) {
            if (t3.tag === 4) {
              t3 = t3.stateNode.containerInfo;
              break a;
            }
            if (t3.tag === 3 || t3.tag === 5 || t3.tag === 27)
              break;
            t3 = t3.return;
          }
          t3 = null;
        }
        t3 != null && (n2 = t3);
      }
      t3 = this._fragmentFiber;
      var i3 = r2 = n2.compareDocumentPosition(e3);
      return n2 === e3 ? i3 = Node.DOCUMENT_POSITION_CONTAINS : r2 & Node.DOCUMENT_POSITION_CONTAINED_BY && (n2 = v(t3)[1], n2 === null ? i3 = Node.DOCUMENT_POSITION_PRECEDING : (e3 = b(n2).compareDocumentPosition(e3), i3 = e3 === 0 || e3 & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i3 |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t3 = b(n2[0]), i3 = b(n2[n2.length - 1]);
    var a2 = _(this._fragmentFiber) ? t3.parentElement : r2;
    if (a2 == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    r2 = a2.compareDocumentPosition(t3) & Node.DOCUMENT_POSITION_CONTAINED_BY, a2 = a2.compareDocumentPosition(i3) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o3 = t3.compareDocumentPosition(e3), s3 = i3.compareDocumentPosition(e3), c3 = o3 & Node.DOCUMENT_POSITION_CONTAINED_BY || s3 & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return s3 = r2 && a2 && o3 & Node.DOCUMENT_POSITION_FOLLOWING && s3 & Node.DOCUMENT_POSITION_PRECEDING, t3 = r2 && t3 === e3 || a2 && i3 === e3 || c3 || s3 ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r2 && t3 === e3 || !a2 && i3 === e3 ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o3, t3 & Node.DOCUMENT_POSITION_DISCONNECTED || t3 & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t3, this._fragmentFiber, n2[0], n2[n2.length - 1], e3) ? t3 : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Xp(e3, t3, n2, r2, i3) {
    var a2 = Kt(i3);
    if (e3 & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n2 = !!a2)
        a: {
          for (; a2 !== null; ) {
            if (a2.tag === 7 && (a2 === t3 || a2.alternate === t3)) {
              n2 = true;
              break a;
            }
            a2 = a2.return;
          }
          n2 = false;
        }
      return n2;
    }
    if (e3 & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a2 === null)
        return a2 = i3.ownerDocument, i3 === a2 || i3 === a2.documentElement || i3 === a2.body;
      a: {
        for (a2 = t3, t3 = g(t3); a2 !== null; ) {
          if (!(a2.tag !== 5 && a2.tag !== 3 && a2.tag !== 27 || a2 !== t3 && a2.alternate !== t3)) {
            a2 = true;
            break a;
          }
          a2 = a2.return;
        }
        a2 = false;
      }
      return a2;
    }
    return e3 & Node.DOCUMENT_POSITION_PRECEDING ? ((t3 = !!a2) && !(t3 = a2 === n2) && (t3 = ae(n2, a2, ie), t3 === null ? t3 = false : (h(t3, true, ne, a2, n2), a2 = ee, ee = null, t3 = a2 !== null)), t3) : e3 & Node.DOCUMENT_POSITION_FOLLOWING ? ((t3 = !!a2) && !(t3 = a2 === r2) && (t3 = ae(r2, a2, ie), t3 === null ? t3 = false : (h(t3, true, re, a2, r2), a2 = ee, te = ee = null, t3 = a2 !== null)), t3) : false;
  }
  function Zp(e3, t3) {
    var n2 = e3.ownerDocument.createRange();
    n2.selectNodeContents(e3), e3 = n2.getBoundingClientRect(), window.scrollTo(window.scrollX + e3.left, t3 ? window.scrollY + e3.top : window.scrollY + e3.bottom - window.innerHeight);
  }
  Fp.prototype.scrollIntoView = function(e3) {
    if (typeof e3 == `object`)
      throw Error(s2(566));
    var t3 = [];
    h(this._fragmentFiber.child, false, Hp, t3, void 0, void 0);
    var n2 = e3 !== false;
    if (t3.length === 0) {
      var r2 = v(this._fragmentFiber);
      if (r2 = n2 ? r2[1] || r2[0] || g(this._fragmentFiber) : r2[0] || r2[1], r2 === null)
        return;
      if (r2.tag === 6) {
        e3 = b(r2), Zp(e3, n2);
        return;
      }
      if (r2 = b(r2), r2.nodeType !== 9) {
        if (r2.nodeType === 11) {
          n2 = `host` in r2 ? r2.host : null, n2 !== null && n2.scrollIntoView(e3);
          return;
        }
        r2.scrollIntoView(e3);
      }
    }
    for (r2 = n2 ? t3.length - 1 : 0; r2 !== (n2 ? -1 : t3.length); ) {
      var i3 = t3[r2];
      i3.tag === 6 ? (i3 = b(i3), Zp(i3, n2)) : b(i3).scrollIntoView(e3), r2 += n2 ? -1 : 1;
    }
  };
  function Qp(e3, t3) {
    return e3 = b(e3), $p(e3, t3), false;
  }
  function $p(e3, t3) {
    e3.reactFragments ?? (e3.reactFragments = new Set()), e3.reactFragments.add(t3);
  }
  function em(e3, t3) {
    var n2 = t3._eventListeners;
    if (n2 !== null)
      for (var r2 = 0; r2 < n2.length; r2++) {
        var i3 = n2[r2];
        e3.addEventListener(i3.type, i3.attachedListener, Rp(i3.optionsOrUseCapture));
      }
    e3.nodeType !== 3 && (n2 = t3._observers, n2 !== null && n2.forEach(function(n3) {
      for (var r3 = 0, i4 = 0; i4 < Kp.length; i4++) {
        var a2 = Kp[i4];
        (a2.fragmentInstance !== t3 || a2.observer !== n3 || a2.instance !== e3) && (Kp[r3++] = a2);
      }
      Kp.length = r3, n3.observe(e3);
    }), $p(e3, t3));
  }
  function tm(e3, t3) {
    var n2 = t3._eventListeners;
    if (n2 !== null)
      for (var r2 = 0; r2 < n2.length; r2++) {
        var i3 = n2[r2];
        e3.removeEventListener(i3.type, i3.attachedListener, Rp(i3.optionsOrUseCapture));
      }
    e3.nodeType !== 3 && (n2 = t3._observers, n2 !== null && n2.forEach(function(n3) {
      typeof n3.rootMargin == `string` ? Jp(t3, n3, e3) : n3.unobserve(e3);
    }), e3.reactFragments != null && e3.reactFragments.delete(t3));
  }
  function nm(e3) {
    var t3 = e3.firstChild;
    for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
      var n2 = t3;
      switch (t3 = t3.nextSibling, n2.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n2), Gt(n2);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n2.rel.toLowerCase() === `stylesheet`)
            continue;
      }
      e3.removeChild(n2);
    }
  }
  function rm(e3, t3, n2, r2) {
    for (; e3.nodeType === 1; ) {
      var i3 = n2;
      if (e3.nodeName.toLowerCase() !== t3.toLowerCase()) {
        if (!r2 && (e3.nodeName !== `INPUT` || e3.type !== `hidden`))
          break;
      } else if (!r2) {
        if (t3 === `input` && e3.type === `hidden`) {
          var a2 = i3.name == null ? null : `` + i3.name;
          if (i3.type === `hidden` && e3.getAttribute(`name`) === a2)
            return e3;
        } else
          return e3;
      } else if (!e3[Ut])
        switch (t3) {
          case `meta`:
            if (!e3.hasAttribute(`itemprop`))
              break;
            return e3;
          case `link`:
            if (a2 = e3.getAttribute(`rel`), a2 === `stylesheet` && e3.hasAttribute(`data-precedence`) || a2 !== i3.rel || e3.getAttribute(`href`) !== (i3.href == null || i3.href === `` ? null : i3.href) || e3.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin) || e3.getAttribute(`title`) !== (i3.title == null ? null : i3.title))
              break;
            return e3;
          case `style`:
            if (e3.hasAttribute(`data-precedence`))
              break;
            return e3;
          case `script`:
            if (a2 = e3.getAttribute(`src`), (a2 !== (i3.src == null ? null : i3.src) || e3.getAttribute(`type`) !== (i3.type == null ? null : i3.type) || e3.getAttribute(`crossorigin`) !== (i3.crossOrigin == null ? null : i3.crossOrigin)) && a2 && e3.hasAttribute(`async`) && !e3.hasAttribute(`itemprop`))
              break;
            return e3;
          default:
            return e3;
        }
      if (e3 = lm(e3.nextSibling), e3 === null)
        break;
    }
    return null;
  }
  function im(e3, t3, n2) {
    if (t3 === ``)
      return null;
    for (; e3.nodeType !== 3; )
      if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !n2 || (e3 = lm(e3.nextSibling), e3 === null))
        return null;
    return e3;
  }
  function am(e3, t3) {
    for (; e3.nodeType !== 8; )
      if ((e3.nodeType !== 1 || e3.nodeName !== `INPUT` || e3.type !== `hidden`) && !t3 || (e3 = lm(e3.nextSibling), e3 === null))
        return null;
    return e3;
  }
  function om(e3) {
    return e3.data === `$?` || e3.data === `$~`;
  }
  function sm(e3) {
    return e3.data === `$!` || e3.data === `$?` && e3.ownerDocument.readyState !== `loading`;
  }
  function cm(e3, t3) {
    var n2 = e3.ownerDocument;
    if (e3.data === `$~`)
      e3._reactRetry = t3;
    else if (e3.data !== `$?` || n2.readyState !== `loading`)
      t3();
    else {
      var r2 = function() {
        t3(), n2.removeEventListener(`DOMContentLoaded`, r2);
      };
      n2.addEventListener(`DOMContentLoaded`, r2), e3._reactRetry = r2;
    }
  }
  function lm(e3) {
    for (; e3 != null; e3 = e3.nextSibling) {
      var t3 = e3.nodeType;
      if (t3 === 1 || t3 === 3)
        break;
      if (t3 === 8) {
        if (t3 = e3.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`)
          break;
        if (t3 === `/$` || t3 === `/&`)
          return null;
      }
    }
    return e3;
  }
  var um = null;
  function dm(e3) {
    e3 = e3.nextSibling;
    for (var t3 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n2 = e3.data;
        if (n2 === `/$` || n2 === `/&`) {
          if (t3 === 0)
            return lm(e3.nextSibling);
          t3--;
        } else
          n2 !== `$` && n2 !== `$!` && n2 !== `$?` && n2 !== `$~` && n2 !== `&` || t3++;
      }
      e3 = e3.nextSibling;
    }
    return null;
  }
  function fm(e3) {
    e3 = e3.previousSibling;
    for (var t3 = 0; e3; ) {
      if (e3.nodeType === 8) {
        var n2 = e3.data;
        if (n2 === `$` || n2 === `$!` || n2 === `$?` || n2 === `$~` || n2 === `&`) {
          if (t3 === 0)
            return e3;
          t3--;
        } else
          n2 !== `/$` && n2 !== `/&` || t3++;
      }
      e3 = e3.previousSibling;
    }
    return null;
  }
  function pm(e3, t3) {
    function n2() {
      r2 = true;
    }
    if (e3.ownerDocument.activeElement === e3)
      return true;
    var r2 = false;
    try {
      e3.ownerDocument.addEventListener(`focus`, n2, true), (e3.focus || HTMLElement.prototype.focus).call(e3, t3);
    } finally {
      e3.ownerDocument.removeEventListener(`focus`, n2, true);
    }
    return r2;
  }
  function mm(e3) {
    yp(function() {
      yp(function(t3) {
        return e3(t3);
      });
    });
  }
  function hm(e3, t3, n2) {
    switch (t3 = lp(n2), e3) {
      case `html`:
        if (e3 = t3.documentElement, !e3)
          throw Error(s2(452));
        return e3;
      case `head`:
        if (e3 = t3.head, !e3)
          throw Error(s2(453));
        return e3;
      case `body`:
        if (e3 = t3.body, !e3)
          throw Error(s2(454));
        return e3;
      default:
        throw Error(s2(451));
    }
  }
  function gm(e3, t3, n2) {
    for (var r2 in n2) {
      var i3 = n2[r2];
      n2.hasOwnProperty(r2) && i3 != null && $(e3, t3, r2, null, rp, i3);
    }
    n2.dangerouslySetInnerHTML != null && (e3.textContent = ``), e3.onclick === jn && (e3.onclick = null), Gt(e3);
  }
  function _m(e3) {
    for (var t3 = e3.attributes; t3.length; )
      e3.removeAttributeNode(t3[0]);
    Gt(e3);
  }
  var vm = new Map(), ym = new Set();
  function bm(e3) {
    if (typeof e3.getRootNode == `function`) {
      var t3 = e3.getRootNode();
      if (t3.nodeType === 9 || t3.nodeType === 11)
        return t3;
    }
    return e3.nodeType === 9 ? e3 : e3.ownerDocument;
  }
  var xm = C.d;
  C.d = {f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm};
  function Sm() {
    var e3 = xm.f(), t3 = zd();
    return e3 || t3;
  }
  function Cm(e3) {
    var t3 = qt(e3);
    t3 !== null && t3.tag === 5 && t3.type === `form` ? lc(t3) : xm.r(e3);
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(e3, t3, n2) {
    var r2 = wm;
    if (r2 && typeof t3 == `string` && t3) {
      var i3 = gn(t3);
      i3 = `link[rel="` + e3 + `"][href="` + i3 + `"]`, typeof n2 == `string` && (i3 += `[crossorigin="` + n2 + `"]`), ym.has(i3) || (ym.add(i3), e3 = {rel: e3, crossOrigin: n2, href: t3}, r2.querySelector(i3) === null && (t3 = r2.createElement(`link`), np(t3, `link`, e3), T(t3), r2.head.appendChild(t3)));
    }
  }
  function Em(e3) {
    xm.D(e3), Tm(`dns-prefetch`, e3, null);
  }
  function Dm(e3, t3) {
    xm.C(e3, t3), Tm(`preconnect`, e3, t3);
  }
  function Om(e3, t3, n2) {
    xm.L(e3, t3, n2);
    var r2 = wm;
    if (r2 && e3 && t3) {
      var i3 = `link[rel="preload"][as="` + gn(t3) + `"]`;
      t3 === `image` && n2 && n2.imageSrcSet ? (i3 += `[imagesrcset="` + gn(n2.imageSrcSet) + `"]`, typeof n2.imageSizes == `string` && (i3 += `[imagesizes="` + gn(n2.imageSizes) + `"]`)) : i3 += `[href="` + gn(e3) + `"]`;
      var a2 = i3;
      switch (t3) {
        case `style`:
          a2 = Pm(e3);
          break;
        case `script`:
          a2 = Rm(e3);
      }
      if (!(vm.has(a2) || (e3 = x({rel: `preload`, href: t3 === `image` && n2 && n2.imageSrcSet ? void 0 : e3, as: t3}, n2), vm.set(a2, e3), r2.querySelector(i3) !== null || t3 === `style` && r2.querySelector(Fm(a2)) || t3 === `script` && r2.querySelector(zm(a2))))) {
        var o3 = r2.createElement(`link`);
        np(o3, `link`, e3), t3 === `style` && (o3[Wt] = true, o3.onload = o3.onerror = function() {
          Xt(o3);
        }), T(o3), r2.head.appendChild(o3);
      }
    }
  }
  function km(e3, t3) {
    xm.m(e3, t3);
    var n2 = wm;
    if (n2 && e3) {
      var r2 = t3 && typeof t3.as == `string` ? t3.as : `script`, i3 = `link[rel="modulepreload"][as="` + gn(r2) + `"][href="` + gn(e3) + `"]`, a2 = i3;
      switch (r2) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a2 = Rm(e3);
      }
      if (!vm.has(a2) && (e3 = x({rel: `modulepreload`, href: e3}, t3), vm.set(a2, e3), n2.querySelector(i3) === null)) {
        switch (r2) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n2.querySelector(zm(a2)))
              return;
        }
        r2 = n2.createElement(`link`), np(r2, `link`, e3), T(r2), n2.head.appendChild(r2);
      }
    }
  }
  function Am(e3, t3, n2) {
    xm.S(e3, t3, n2);
    var r2 = wm;
    if (r2 && e3) {
      var i3 = Yt(r2).hoistableStyles, a2 = Pm(e3);
      t3 || (t3 = `default`);
      var o3 = i3.get(a2);
      if (!o3) {
        var s3 = {loading: 0, preload: null};
        if (o3 = r2.querySelector(Fm(a2)))
          s3.loading = 5;
        else {
          e3 = x({rel: `stylesheet`, href: e3, "data-precedence": t3}, n2), (n2 = vm.get(a2)) && Hm(e3, n2);
          var c3 = o3 = r2.createElement(`link`);
          T(c3), np(c3, `link`, e3), c3._p = new Promise(function(e4, t4) {
            c3.onload = e4, c3.onerror = t4;
          }), c3.addEventListener(`load`, function() {
            s3.loading |= 1;
          }), c3.addEventListener(`error`, function() {
            s3.loading |= 2;
          }), s3.loading |= 4, Vm(o3, t3, r2);
        }
        o3 = {type: `stylesheet`, instance: o3, count: 1, state: s3}, i3.set(a2, o3);
      }
    }
  }
  function jm(e3, t3) {
    xm.X(e3, t3);
    var n2 = wm;
    if (n2 && e3) {
      var r2 = Yt(n2).hoistableScripts, i3 = Rm(e3), a2 = r2.get(i3);
      a2 || (a2 = n2.querySelector(zm(i3)), a2 || (e3 = x({src: e3, async: true}, t3), (t3 = vm.get(i3)) && Um(e3, t3), a2 = n2.createElement(`script`), T(a2), np(a2, `link`, e3), n2.head.appendChild(a2)), a2 = {type: `script`, instance: a2, count: 1, state: null}, r2.set(i3, a2));
    }
  }
  function Mm(e3, t3) {
    xm.M(e3, t3);
    var n2 = wm;
    if (n2 && e3) {
      var r2 = Yt(n2).hoistableScripts, i3 = Rm(e3), a2 = r2.get(i3);
      a2 || (a2 = n2.querySelector(zm(i3)), a2 || (e3 = x({src: e3, async: true, type: `module`}, t3), (t3 = vm.get(i3)) && Um(e3, t3), a2 = n2.createElement(`script`), T(a2), np(a2, `link`, e3), n2.head.appendChild(a2)), a2 = {type: `script`, instance: a2, count: 1, state: null}, r2.set(i3, a2));
    }
  }
  function Nm(e3, t3, n2, r2) {
    var i3 = (i3 = Ie.current) ? bm(i3) : null;
    if (!i3)
      throw Error(s2(446));
    switch (e3) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n2.precedence == `string` && typeof n2.href == `string` ? (n2 = Pm(n2.href), t3 = Yt(i3).hoistableStyles, r2 = t3.get(n2), r2 || (r2 = {type: `style`, instance: null, count: 0, state: null}, t3.set(n2, r2)), r2) : {type: `void`, instance: null, count: 0, state: null};
      case `link`:
        if (n2.rel === `stylesheet` && typeof n2.href == `string` && typeof n2.precedence == `string`) {
          e3 = Pm(n2.href);
          var a2 = Yt(i3).hoistableStyles, o3 = a2.get(e3);
          if (o3 || (i3 = i3.ownerDocument || i3, o3 = {type: `stylesheet`, instance: null, count: 0, state: {loading: 0, preload: null}}, a2.set(e3, o3), (a2 = i3.querySelector(Fm(e3))) ? a2._p || (o3.instance = a2, o3.state.loading = 5) : (a2 = vm.get(e3), a2 || (a2 = {rel: `preload`, as: `style`, href: n2.href, crossOrigin: n2.crossOrigin, integrity: n2.integrity, media: n2.media, hrefLang: n2.hrefLang, referrerPolicy: n2.referrerPolicy}, vm.set(e3, a2)), Lm(i3, e3, a2, o3.state))), t3 && r2 === null)
            throw Error(s2(528, ``));
          return o3;
        }
        if (t3 && r2 !== null)
          throw Error(s2(529, ``));
        return null;
      case `script`:
        return t3 = n2.async, n2 = n2.src, typeof n2 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (n2 = Rm(n2), t3 = Yt(i3).hoistableScripts, r2 = t3.get(n2), r2 || (r2 = {type: `script`, instance: null, count: 0, state: null}, t3.set(n2, r2)), r2) : {type: `void`, instance: null, count: 0, state: null};
      default:
        throw Error(s2(444, e3));
    }
  }
  function Pm(e3) {
    return `href="` + gn(e3) + `"`;
  }
  function Fm(e3) {
    return `link[rel="stylesheet"][` + e3 + `]`;
  }
  function Im(e3) {
    return x({}, e3, {"data-precedence": e3.precedence, precedence: null});
  }
  function Lm(e3, t3, n2, r2) {
    if (t3 = e3.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`)) {
      if (t3[Wt] !== true) {
        r2.loading = 1;
        return;
      }
    } else
      t3 = e3.createElement(`link`), t3[Wt] = true, t3.onload = t3.onerror = Xt.bind(null, t3), np(t3, `link`, n2), T(t3), e3.head.appendChild(t3);
    r2.preload = t3, t3.addEventListener(`load`, function() {
      return r2.loading |= 1;
    }), t3.addEventListener(`error`, function() {
      return r2.loading |= 2;
    });
  }
  function Rm(e3) {
    return `[src="` + gn(e3) + `"]`;
  }
  function zm(e3) {
    return `script[async]` + e3;
  }
  function Bm(e3, t3, n2) {
    if (t3.count++, t3.instance === null)
      switch (t3.type) {
        case `style`:
          var r2 = e3.querySelector(`style[data-href~="` + gn(n2.href) + `"]`);
          if (r2)
            return t3.instance = r2, T(r2), r2;
          var i3 = x({}, n2, {"data-href": n2.href, "data-precedence": n2.precedence, href: null, precedence: null});
          return r2 = (e3.ownerDocument || e3).createElement(`style`), T(r2), np(r2, `style`, i3), Vm(r2, n2.precedence, e3), t3.instance = r2;
        case `stylesheet`:
          i3 = Pm(n2.href);
          var a2 = e3.querySelector(Fm(i3));
          if (a2)
            return t3.state.loading |= 4, t3.instance = a2, T(a2), a2;
          r2 = Im(n2), (i3 = vm.get(i3)) && Hm(r2, i3), a2 = (e3.ownerDocument || e3).createElement(`link`), T(a2);
          var o3 = a2;
          return o3._p = new Promise(function(e4, t4) {
            o3.onload = e4, o3.onerror = t4;
          }), np(a2, `link`, r2), t3.state.loading |= 4, Vm(a2, n2.precedence, e3), t3.instance = a2;
        case `script`:
          return a2 = Rm(n2.src), (i3 = e3.querySelector(zm(a2))) ? (t3.instance = i3, T(i3), i3) : (r2 = n2, (i3 = vm.get(a2)) && (r2 = x({}, n2), Um(r2, i3)), e3 = e3.ownerDocument || e3, i3 = e3.createElement(`script`), T(i3), np(i3, `link`, r2), e3.head.appendChild(i3), t3.instance = i3);
        case `void`:
          return null;
        default:
          throw Error(s2(443, t3.type));
      }
    else
      t3.type === `stylesheet` && !(t3.state.loading & 4) && (r2 = t3.instance, t3.state.loading |= 4, Vm(r2, n2.precedence, e3));
    return t3.instance;
  }
  function Vm(e3, t3, n2) {
    for (var r2 = n2.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i3 = r2.length ? r2[r2.length - 1] : null, a2 = i3, o3 = 0; o3 < r2.length; o3++) {
      var s3 = r2[o3];
      if (s3.dataset.precedence === t3)
        a2 = s3;
      else if (a2 !== i3)
        break;
    }
    a2 ? a2.parentNode.insertBefore(e3, a2.nextSibling) : (t3 = n2.nodeType === 9 ? n2.head : n2, t3.insertBefore(e3, t3.firstChild));
  }
  function Hm(e3, t3) {
    e3.crossOrigin ?? (e3.crossOrigin = t3.crossOrigin), e3.referrerPolicy ?? (e3.referrerPolicy = t3.referrerPolicy), e3.title ?? (e3.title = t3.title);
  }
  function Um(e3, t3) {
    e3.crossOrigin ?? (e3.crossOrigin = t3.crossOrigin), e3.referrerPolicy ?? (e3.referrerPolicy = t3.referrerPolicy), e3.integrity ?? (e3.integrity = t3.integrity);
  }
  var Wm = null;
  function Gm(e3, t3, n2) {
    if (Wm === null) {
      var r2 = new Map(), i3 = Wm = new Map();
      i3.set(n2, r2);
    } else
      i3 = Wm, r2 = i3.get(n2), r2 || (r2 = new Map(), i3.set(n2, r2));
    if (r2.has(e3))
      return r2;
    for (r2.set(e3, null), n2 = n2.getElementsByTagName(e3), i3 = 0; i3 < n2.length; i3++) {
      var a2 = n2[i3];
      if (!(a2[Ut] || a2[It] || e3 === `link` && a2.getAttribute(`rel`) === `stylesheet`) && a2.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o3 = a2.getAttribute(t3) || ``;
        o3 = e3 + o3;
        var s3 = r2.get(o3);
        s3 ? s3.push(a2) : r2.set(o3, [a2]);
      }
    }
    return r2;
  }
  function Km(e3, t3, n2) {
    e3 = e3.ownerDocument || e3, e3.head.insertBefore(n2, t3 === `title` ? e3.querySelector(`head > title`) : null);
  }
  function qm(e3, t3, n2) {
    if (n2 === 1 || t3.itemProp != null)
      return false;
    switch (e3) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t3.precedence != `string` || typeof t3.href != `string` || t3.href === ``)
          break;
        return true;
      case `link`:
        if (typeof t3.rel != `string` || typeof t3.href != `string` || t3.href === `` || t3.onLoad || t3.onError)
          break;
        switch (t3.rel) {
          case `stylesheet`:
            return e3 = t3.disabled, typeof t3.precedence == `string` && e3 == null;
          default:
            return true;
        }
      case `script`:
        if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`)
          return true;
    }
    return false;
  }
  function Jm(e3, t3) {
    return e3 === `img` && t3.src != null && t3.src !== `` && t3.onLoad == null && t3.loading !== `lazy`;
  }
  function Ym(e3) {
    return !(e3.type === `stylesheet` && !(e3.state.loading & 3));
  }
  function Xm(e3) {
    return (e3.width || 100) * (e3.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e3, t3) {
    typeof t3.decode == `function` && (e3.imgCount++, t3.complete || (e3.imgBytes += Xm(t3), e3.suspenseyImages.push(t3)), e3 = rh.bind(e3), t3.decode().then(e3, e3));
  }
  function Qm(e3, t3, n2, r2) {
    if (n2.type === `stylesheet` && (typeof r2.media != `string` || matchMedia(r2.media).matches !== false) && !(n2.state.loading & 4)) {
      if (n2.instance === null) {
        var i3 = Pm(r2.href), a2 = t3.querySelector(Fm(i3));
        if (a2) {
          t3 = a2._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e3.count++, e3 = nh.bind(e3), t3.then(e3, e3)), n2.state.loading |= 4, n2.instance = a2, T(a2);
          return;
        }
        a2 = t3.ownerDocument || t3, r2 = Im(r2), (i3 = vm.get(i3)) && Hm(r2, i3), a2 = a2.createElement(`link`), T(a2);
        var o3 = a2;
        o3._p = new Promise(function(e4, t4) {
          o3.onload = e4, o3.onerror = t4;
        }), np(a2, `link`, r2), n2.instance = a2;
      }
      e3.stylesheets === null && (e3.stylesheets = new Map()), e3.stylesheets.set(n2, t3), (t3 = n2.state.preload) && !(n2.state.loading & 3) && (e3.count++, n2 = nh.bind(e3), t3.addEventListener(`load`, n2), t3.addEventListener(`error`, n2));
    }
  }
  var $m = 0;
  function eh(e3, t3) {
    return e3.stylesheets && e3.count === 0 && ah(e3, e3.stylesheets), 0 < e3.count || 0 < e3.imgCount ? function(n2) {
      var r2 = setTimeout(function() {
        if (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend) {
          var t4 = e3.unsuspend;
          e3.unsuspend = null, t4();
        }
      }, 6e4 + t3);
      0 < e3.imgBytes && $m === 0 && ($m = 62500 * op());
      var i3 = setTimeout(function() {
        if (e3.waitingForImages = false, e3.count === 0 && (e3.stylesheets && ah(e3, e3.stylesheets), e3.unsuspend)) {
          var t4 = e3.unsuspend;
          e3.unsuspend = null, t4();
        }
      }, (e3.imgBytes > $m ? 50 : 800) + t3);
      return e3.unsuspend = n2, function() {
        e3.unsuspend = null, clearTimeout(r2), clearTimeout(i3);
      };
    } : null;
  }
  function th(e3) {
    if (e3.count === 0 && (e3.imgCount === 0 || !e3.waitingForImages)) {
      if (e3.stylesheets)
        ah(e3, e3.stylesheets);
      else if (e3.unsuspend) {
        var t3 = e3.unsuspend;
        e3.unsuspend = null, t3();
      }
    }
  }
  function nh() {
    this.count--, th(this);
  }
  function rh() {
    this.imgCount--, th(this);
  }
  var ih = null;
  function ah(e3, t3) {
    e3.stylesheets = null, e3.unsuspend !== null && (e3.count++, ih = new Map(), t3.forEach(oh, e3), ih = null, nh.call(e3));
  }
  function oh(e3, t3) {
    if (!(t3.state.loading & 4)) {
      var n2 = ih.get(e3);
      if (n2)
        var r2 = n2.get(null);
      else {
        n2 = new Map(), ih.set(e3, n2);
        for (var i3 = e3.querySelectorAll(`link[data-precedence],style[data-precedence]`), a2 = 0; a2 < i3.length; a2++) {
          var o3 = i3[a2];
          (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n2.set(o3.dataset.precedence, o3), r2 = o3);
        }
        r2 && n2.set(null, r2);
      }
      i3 = t3.instance, o3 = i3.getAttribute(`data-precedence`), a2 = n2.get(o3) || r2, a2 === r2 && n2.set(null, i3), n2.set(o3, i3), this.count++, r2 = nh.bind(this), i3.addEventListener(`load`, r2), i3.addEventListener(`error`, r2), a2 ? a2.parentNode.insertBefore(i3, a2.nextSibling) : (e3 = e3.nodeType === 9 ? e3.head : e3, e3.insertBefore(i3, e3.firstChild)), t3.state.loading |= 4;
    }
  }
  var sh = {$$typeof: pe, Provider: null, Consumer: null, _currentValue: ke, _currentValue2: ke, _threadCount: 0};
  function ch(e3, t3, n2, r2, i3, a2, o3, s3, c3) {
    this.tag = 1, this.containerInfo = e3, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Tt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tt(0), this.hiddenUpdates = Tt(null), this.identifierPrefix = r2, this.onUncaughtError = i3, this.onCaughtError = a2, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.transitionTypes = null, this.incompleteTransitions = new Map();
  }
  function lh(e3, t3, n2, r2, i3, a2, o3, s3, c3, l3, u3, d3) {
    return e3 = new ch(e3, t3, n2, o3, c3, l3, u3, d3, s3), t3 = 1, a2 === true && (t3 |= 24), a2 = Gi(3, null, null, t3), e3.current = a2, a2.stateNode = e3, t3 = Ha(), t3.refCount++, e3.pooledCache = t3, t3.refCount++, a2.memoizedState = {element: r2, isDehydrated: n2, cache: t3}, To(a2), e3;
  }
  function uh(e3) {
    return e3 ? (e3 = Ui, e3) : Ui;
  }
  function dh(e3, t3, n2, r2, i3, a2) {
    i3 = uh(i3), r2.context === null ? r2.context = i3 : r2.pendingContext = i3, r2 = Do(t3), r2.payload = {element: n2}, a2 = a2 === void 0 ? null : a2, a2 !== null && (r2.callback = a2), n2 = Oo(e3, r2, t3), n2 !== null && (Pd(n2, e3, t3), ko(n2, e3, t3));
  }
  function fh(e3, t3) {
    if (e3 = e3.memoizedState, e3 !== null && e3.dehydrated !== null) {
      var n2 = e3.retryLane;
      e3.retryLane = n2 !== 0 && n2 < t3 ? n2 : t3;
    }
  }
  function ph(e3, t3) {
    fh(e3, t3), (e3 = e3.alternate) && fh(e3, t3);
  }
  function mh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      var t3 = Bi(e3, 67108864);
      t3 !== null && Pd(t3, e3, 67108864), ph(e3, 67108864);
    }
  }
  function hh(e3) {
    if (e3.tag === 13 || e3.tag === 31) {
      var t3 = jd();
      t3 = jt(t3);
      var n2 = Bi(e3, t3);
      n2 !== null && Pd(n2, e3, t3), ph(e3, t3);
    }
  }
  var gh = true;
  function _h(e3, t3, n2, r2) {
    var i3 = S.T;
    S.T = null;
    var a2 = C.p;
    try {
      C.p = 2, yh(e3, t3, n2, r2);
    } finally {
      C.p = a2, S.T = i3;
    }
  }
  function vh(e3, t3, n2, r2) {
    var i3 = S.T;
    S.T = null;
    var a2 = C.p;
    try {
      C.p = 8, yh(e3, t3, n2, r2);
    } finally {
      C.p = a2, S.T = i3;
    }
  }
  function yh(e3, t3, n2, r2) {
    if (gh) {
      var i3 = bh(r2);
      if (i3 === null)
        Kf(e3, t3, r2, xh, n2), Mh(e3, r2);
      else if (Ph(i3, e3, t3, n2, r2))
        r2.stopPropagation();
      else if (Mh(e3, r2), t3 & 4 && -1 < jh.indexOf(e3)) {
        for (; i3 !== null; ) {
          var a2 = qt(i3);
          if (a2 !== null)
            switch (a2.tag) {
              case 3:
                if (a2 = a2.stateNode, a2.current.memoizedState.isDehydrated) {
                  var o3 = yt(a2.pendingLanes);
                  if (o3 !== 0) {
                    var s3 = a2;
                    for (s3.pendingLanes |= 2, s3.entangledLanes |= 2; o3; ) {
                      var c3 = 1 << 31 - ft(o3);
                      s3.entanglements[1] |= c3, o3 &= ~c3;
                    }
                    Ef(a2), !(W & 6) && (_d = et() + 500, Df(0, false));
                  }
                }
                break;
              case 31:
              case 13:
                s3 = Bi(a2, 2), s3 !== null && Pd(s3, a2, 2), zd(), ph(a2, 2);
            }
          if (a2 = bh(r2), a2 === null && Kf(e3, t3, r2, xh, n2), a2 === i3)
            break;
          i3 = a2;
        }
        i3 !== null && r2.stopPropagation();
      } else
        Kf(e3, t3, r2, null, n2);
    }
  }
  function bh(e3) {
    return e3 = Nn(e3), Sh(e3);
  }
  var xh = null;
  function Sh(e3) {
    if (xh = null, e3 = Kt(e3), e3 !== null) {
      var t3 = l2(e3);
      if (t3 === null)
        e3 = null;
      else {
        var n2 = t3.tag;
        if (n2 === 13) {
          if (e3 = u2(t3), e3 !== null)
            return e3;
          e3 = null;
        } else if (n2 === 31) {
          if (e3 = d2(t3), e3 !== null)
            return e3;
          e3 = null;
        } else if (n2 === 3) {
          if (t3.stateNode.current.memoizedState.isDehydrated)
            return t3.tag === 3 ? t3.stateNode.containerInfo : null;
          e3 = null;
        } else
          t3 !== e3 && (e3 = null);
      }
    }
    return xh = e3, null;
  }
  function Ch(e3) {
    switch (e3) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `fullscreenerror`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `resize`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (tt()) {
          case nt:
            return 2;
          case rt:
            return 8;
          case it:
          case at:
            return 32;
          case ot:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = false, Th = null, Eh = null, Dh = null, Oh = new Map(), kh = new Map(), Ah = [], jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e3, t3) {
    switch (e3) {
      case `focusin`:
      case `focusout`:
        Th = null;
        break;
      case `dragenter`:
      case `dragleave`:
        Eh = null;
        break;
      case `mouseover`:
      case `mouseout`:
        Dh = null;
        break;
      case `pointerover`:
      case `pointerout`:
        Oh.delete(t3.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        kh.delete(t3.pointerId);
    }
  }
  function Nh(e3, t3, n2, r2, i3, a2) {
    return e3 === null || e3.nativeEvent !== a2 ? (e3 = {blockedOn: t3, domEventName: n2, eventSystemFlags: r2, nativeEvent: a2, targetContainers: [i3]}, t3 !== null && (t3 = qt(t3), t3 !== null && mh(t3)), e3) : (e3.eventSystemFlags |= r2, t3 = e3.targetContainers, i3 !== null && t3.indexOf(i3) === -1 && t3.push(i3), e3);
  }
  function Ph(e3, t3, n2, r2, i3) {
    switch (t3) {
      case `focusin`:
        return Th = Nh(Th, e3, t3, n2, r2, i3), true;
      case `dragenter`:
        return Eh = Nh(Eh, e3, t3, n2, r2, i3), true;
      case `mouseover`:
        return Dh = Nh(Dh, e3, t3, n2, r2, i3), true;
      case `pointerover`:
        var a2 = i3.pointerId;
        return Oh.set(a2, Nh(Oh.get(a2) || null, e3, t3, n2, r2, i3)), true;
      case `gotpointercapture`:
        return a2 = i3.pointerId, kh.set(a2, Nh(kh.get(a2) || null, e3, t3, n2, r2, i3)), true;
    }
    return false;
  }
  function Fh(e3) {
    var t3 = Kt(e3.target);
    if (t3 !== null) {
      var n2 = l2(t3);
      if (n2 !== null) {
        if (t3 = n2.tag, t3 === 13) {
          if (t3 = u2(n2), t3 !== null) {
            e3.blockedOn = t3, Pt(e3.priority, function() {
              hh(n2);
            });
            return;
          }
        } else if (t3 === 31) {
          if (t3 = d2(n2), t3 !== null) {
            e3.blockedOn = t3, Pt(e3.priority, function() {
              hh(n2);
            });
            return;
          }
        } else if (t3 === 3 && n2.stateNode.current.memoizedState.isDehydrated) {
          e3.blockedOn = n2.tag === 3 ? n2.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e3.blockedOn = null;
  }
  function Ih(e3) {
    if (e3.blockedOn !== null)
      return false;
    for (var t3 = e3.targetContainers; 0 < t3.length; ) {
      var n2 = bh(e3.nativeEvent);
      if (n2 === null) {
        n2 = e3.nativeEvent;
        var r2 = new n2.constructor(n2.type, n2);
        Mn = r2, n2.target.dispatchEvent(r2), Mn = null;
      } else
        return t3 = qt(n2), t3 !== null && mh(t3), e3.blockedOn = n2, false;
      t3.shift();
    }
    return true;
  }
  function Lh(e3, t3, n2) {
    Ih(e3) && n2.delete(t3);
  }
  function Rh() {
    wh = false, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
  }
  function zh(e3, n2) {
    e3.blockedOn === n2 && (e3.blockedOn = null, wh || (wh = true, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, Rh)));
  }
  var Bh = null;
  function Vh(e3) {
    Bh !== e3 && (Bh = e3, t2.unstable_scheduleCallback(t2.unstable_NormalPriority, function() {
      Bh === e3 && (Bh = null);
      for (var t3 = 0; t3 < e3.length; t3 += 3) {
        var n2 = e3[t3], r2 = e3[t3 + 1], i3 = e3[t3 + 2];
        if (typeof r2 != `function`) {
          if (Sh(r2 || n2) === null)
            continue;
          break;
        }
        var a2 = qt(n2);
        a2 !== null && (e3.splice(t3, 3), t3 -= 3, sc(a2, {pending: true, data: i3, method: n2.method, action: r2}, r2, i3));
      }
    }));
  }
  function Hh(e3) {
    function t3(t4) {
      return zh(t4, e3);
    }
    Th !== null && zh(Th, e3), Eh !== null && zh(Eh, e3), Dh !== null && zh(Dh, e3), Oh.forEach(t3), kh.forEach(t3);
    for (var n2 = 0; n2 < Ah.length; n2++) {
      var r2 = Ah[n2];
      r2.blockedOn === e3 && (r2.blockedOn = null);
    }
    for (; 0 < Ah.length && (n2 = Ah[0], n2.blockedOn === null); )
      Fh(n2), n2.blockedOn === null && Ah.shift();
    if (n2 = (e3.ownerDocument || e3).$$reactFormReplay, n2 != null)
      for (r2 = 0; r2 < n2.length; r2 += 3) {
        var i3 = n2[r2], a2 = n2[r2 + 1], o3 = i3[Lt] || null;
        if (typeof a2 == `function`)
          o3 || Vh(n2);
        else if (o3) {
          var s3 = null;
          if (a2 && a2.hasAttribute(`formAction`)) {
            if (i3 = a2, o3 = a2[Lt] || null)
              s3 = o3.formAction;
            else if (Sh(i3) !== null)
              continue;
          } else
            s3 = o3.action;
          typeof s3 == `function` ? n2[r2 + 1] = s3 : (n2.splice(r2, 3), r2 -= 3), Vh(n2);
        }
      }
  }
  function Uh() {
    function e3(e4) {
      e4.canIntercept && e4.info === `react-transition` && e4.intercept({handler: function() {
        return new Promise(function(e5) {
          return i3 = e5;
        });
      }, focusReset: `manual`, scroll: `manual`});
    }
    function t3() {
      i3 !== null && (i3(), i3 = null), r2 || setTimeout(n2, 20);
    }
    function n2() {
      if (!r2 && !navigation.transition) {
        var e4 = navigation.currentEntry;
        e4 && e4.url != null && navigation.navigate(e4.url, {state: e4.getState(), info: `react-transition`, history: `replace`});
      }
    }
    if (typeof navigation == `object`) {
      var r2 = false, i3 = null;
      return navigation.addEventListener(`navigate`, e3), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n2, 100), function() {
        r2 = true, navigation.removeEventListener(`navigate`, e3), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i3 !== null && (i3(), i3 = null);
      };
    }
  }
  function Wh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.render = Wh.prototype.render = function(e3) {
    var t3 = this._internalRoot;
    if (t3 === null)
      throw Error(s2(409));
    var n2 = t3.current;
    dh(n2, jd(), e3, t3, null, null);
  }, Gh.prototype.unmount = Wh.prototype.unmount = function() {
    var e3 = this._internalRoot;
    if (e3 !== null) {
      this._internalRoot = null;
      var t3 = e3.containerInfo;
      dh(e3.current, 2, null, e3, null, null), zd(), t3[Rt] = null;
    }
  };
  function Gh(e3) {
    this._internalRoot = e3;
  }
  Gh.prototype.unstable_scheduleHydration = function(e3) {
    if (e3) {
      var t3 = Nt();
      e3 = {blockedOn: null, target: e3, priority: t3};
      for (var n2 = 0; n2 < Ah.length && t3 !== 0 && t3 < Ah[n2].priority; n2++)
        ;
      Ah.splice(n2, 0, e3), n2 === 0 && Fh(e3);
    }
  };
  var Kh = i2.version;
  if (Kh !== `19.3.0`)
    throw Error(s2(527, Kh, `19.3.0`));
  C.findDOMNode = function(e3) {
    var t3 = e3._reactInternals;
    if (t3 === void 0)
      throw typeof e3.render == `function` ? Error(s2(188)) : (e3 = Object.keys(e3).join(`,`), Error(s2(268, e3)));
    return e3 = p(t3), e3 = e3 === null ? null : m(e3), e3 = e3 === null ? null : e3.stateNode, e3;
  };
  var qh = {bundleType: 0, version: `19.3.0`, rendererPackageName: `react-dom`, currentDispatcherRef: S, reconcilerVersion: `19.3.0`};
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jh.isDisabled && Jh.supportsFiber)
      try {
        lt = Jh.inject(qh), ut = Jh;
      } catch {
      }
  }
  e2.createRoot = function(e3, t3) {
    if (!c2(e3))
      throw Error(s2(299));
    var n2 = false, r2 = ``, i3 = Ac, a2 = jc, o3 = Mc;
    return t3 != null && (t3.unstable_strictMode === true && (n2 = true), t3.identifierPrefix !== void 0 && (r2 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (i3 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (a2 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (o3 = t3.onRecoverableError)), t3 = lh(e3, 1, false, null, null, n2, r2, null, i3, a2, o3, Uh), e3[Rt] = t3.current, Wf(e3), new Wh(t3);
  }, e2.hydrateRoot = function(e3, t3, n2) {
    if (!c2(e3))
      throw Error(s2(299));
    var r2 = false, i3 = ``, a2 = Ac, o3 = jc, l3 = Mc, u3 = null;
    return n2 != null && (n2.unstable_strictMode === true && (r2 = true), n2.identifierPrefix !== void 0 && (i3 = n2.identifierPrefix), n2.onUncaughtError !== void 0 && (a2 = n2.onUncaughtError), n2.onCaughtError !== void 0 && (o3 = n2.onCaughtError), n2.onRecoverableError !== void 0 && (l3 = n2.onRecoverableError), n2.formState !== void 0 && (u3 = n2.formState)), t3 = lh(e3, 1, true, t3, n2 ?? null, r2, i3, u3, a2, o3, l3, Uh), t3.context = uh(null), n2 = t3.current, r2 = jd(), r2 = jt(r2), i3 = Do(r2), i3.callback = null, Oo(n2, i3, r2), n2 = r2, t3.current.lanes = n2, Et(t3, n2), Ef(t3), e3[Rt] = t3.current, Wf(e3), new Gh(t3);
  }, e2.version = `19.3.0`;
}), s = e(t((e2, t2) => {
  function n2() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`)
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e3) {
        console.error(e3);
      }
  }
  n2(), t2.exports = o();
})()), c = s, l = c.createRoot, u = c.hydrateRoot, d = c.version, f = Reflect.get(s, `default`) ?? s;
export {
  l as createRoot,
  f as default,
  u as hydrateRoot,
  d as version
};
