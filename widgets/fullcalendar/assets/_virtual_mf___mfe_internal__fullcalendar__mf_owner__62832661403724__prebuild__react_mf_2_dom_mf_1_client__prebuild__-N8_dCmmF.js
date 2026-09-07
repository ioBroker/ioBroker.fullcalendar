import {a as e, o as t, t as n} from "./rolldown-runtime-C0FnF6B9.js";
import {T as r, w as i} from "./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js";
import {t as a} from "./react-dom-BCqaMhZK.js";
var o = n((e2) => {
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
  var c2 = [], l2 = [], u2 = 1, d2 = null, f2 = 3, p2 = false, m2 = false, h = false, g = false, _ = typeof setTimeout == `function` ? setTimeout : null, v = typeof clearTimeout == `function` ? clearTimeout : null, y = typeof setImmediate < `u` ? setImmediate : null;
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
  function x(e3) {
    if (h = false, b(e3), !m2) {
      if (n2(c2) !== null)
        m2 = true, ee || (ee = true, oe());
      else {
        var t3 = n2(l2);
        t3 !== null && le(x, t3.startTime - e3);
      }
    }
  }
  var ee = false, te = -1, ne = 5, re = -1;
  function ie() {
    return g ? true : !(e2.unstable_now() - re < ne);
  }
  function ae() {
    if (g = false, ee) {
      var t3 = e2.unstable_now();
      re = t3;
      var i3 = true;
      try {
        a: {
          m2 = false, h && (h = false, v(te), te = -1), p2 = true;
          var a3 = f2;
          try {
            b: {
              for (b(t3), d2 = n2(c2); d2 !== null && !(d2.expirationTime > t3 && ie()); ) {
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
                u3 !== null && le(x, u3.startTime - t3), i3 = false;
              }
            }
            break a;
          } finally {
            d2 = null, f2 = a3, p2 = false;
          }
          i3 = void 0;
        }
      } finally {
        i3 ? oe() : ee = false;
      }
    }
  }
  var oe;
  if (typeof y == `function`)
    oe = function() {
      y(ae);
    };
  else if (typeof MessageChannel < `u`) {
    var se = new MessageChannel(), ce = se.port2;
    se.port1.onmessage = ae, oe = function() {
      ce.postMessage(null);
    };
  } else
    oe = function() {
      _(ae, 0);
    };
  function le(t3, n3) {
    te = _(function() {
      t3(e2.unstable_now());
    }, n3);
  }
  e2.unstable_IdlePriority = 5, e2.unstable_ImmediatePriority = 1, e2.unstable_LowPriority = 4, e2.unstable_NormalPriority = 3, e2.unstable_Profiling = null, e2.unstable_UserBlockingPriority = 2, e2.unstable_cancelCallback = function(e3) {
    e3.callback = null;
  }, e2.unstable_forceFrameRate = function(e3) {
    0 > e3 || 125 < e3 ? console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`) : ne = 0 < e3 ? Math.floor(1e3 / e3) : 5;
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
    return s3 = a3 + s3, r3 = {id: u2++, callback: i3, priorityLevel: r3, startTime: a3, expirationTime: s3, sortIndex: -1}, a3 > o3 ? (r3.sortIndex = a3, t2(l2, r3), n2(c2) === null && r3 === n2(l2) && (h ? (v(te), te = -1) : h = true, le(x, a3 - o3))) : (r3.sortIndex = s3, t2(c2, r3), m2 || p2 || (m2 = true, ee || (ee = true, oe()))), r3;
  }, e2.unstable_shouldYield = ie, e2.unstable_wrapCallback = function(e3) {
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
}), s = n((e2, t2) => {
  t2.exports = o();
}), c = n((t2) => {
  var n2 = s(), o2 = (r(), e(i)), c2 = a();
  function l2(e2) {
    var t3 = `https://react.dev/errors/` + e2;
    if (1 < arguments.length) {
      t3 += `?args[]=` + encodeURIComponent(arguments[1]);
      for (var n3 = 2; n3 < arguments.length; n3++)
        t3 += `&args[]=` + encodeURIComponent(arguments[n3]);
    }
    return `Minified React error #` + e2 + `; visit ` + t3 + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function u2(e2) {
    return !(!e2 || e2.nodeType !== 1 && e2.nodeType !== 9 && e2.nodeType !== 11);
  }
  function d2(e2) {
    var t3 = e2, n3 = e2;
    if (e2.alternate)
      for (; t3.return; )
        t3 = t3.return;
    else {
      e2 = t3;
      do
        t3 = e2, t3.flags & 4098 && (n3 = t3.return), e2 = t3.return;
      while (e2);
    }
    return t3.tag === 3 ? n3 : null;
  }
  function f2(e2) {
    if (e2.tag === 13) {
      var t3 = e2.memoizedState;
      if (t3 === null && (e2 = e2.alternate, e2 !== null && (t3 = e2.memoizedState)), t3 !== null)
        return t3.dehydrated;
    }
    return null;
  }
  function p2(e2) {
    if (e2.tag === 31) {
      var t3 = e2.memoizedState;
      if (t3 === null && (e2 = e2.alternate, e2 !== null && (t3 = e2.memoizedState)), t3 !== null)
        return t3.dehydrated;
    }
    return null;
  }
  function m2(e2) {
    if (d2(e2) !== e2)
      throw Error(l2(188));
  }
  function h(e2) {
    var t3 = e2.alternate;
    if (!t3) {
      if (t3 = d2(e2), t3 === null)
        throw Error(l2(188));
      return t3 === e2 ? e2 : null;
    }
    for (var n3 = e2, r2 = t3; ; ) {
      var i2 = n3.return;
      if (i2 === null)
        break;
      var a2 = i2.alternate;
      if (a2 === null) {
        if (r2 = i2.return, r2 !== null) {
          n3 = r2;
          continue;
        }
        break;
      }
      if (i2.child === a2.child) {
        for (a2 = i2.child; a2; ) {
          if (a2 === n3)
            return m2(i2), e2;
          if (a2 === r2)
            return m2(i2), t3;
          a2 = a2.sibling;
        }
        throw Error(l2(188));
      }
      if (n3.return !== r2.return)
        n3 = i2, r2 = a2;
      else {
        for (var o3 = false, s2 = i2.child; s2; ) {
          if (s2 === n3) {
            o3 = true, n3 = i2, r2 = a2;
            break;
          }
          if (s2 === r2) {
            o3 = true, r2 = i2, n3 = a2;
            break;
          }
          s2 = s2.sibling;
        }
        if (!o3) {
          for (s2 = a2.child; s2; ) {
            if (s2 === n3) {
              o3 = true, n3 = a2, r2 = i2;
              break;
            }
            if (s2 === r2) {
              o3 = true, r2 = a2, n3 = i2;
              break;
            }
            s2 = s2.sibling;
          }
          if (!o3)
            throw Error(l2(189));
        }
      }
      if (n3.alternate !== r2)
        throw Error(l2(190));
    }
    if (n3.tag !== 3)
      throw Error(l2(188));
    return n3.stateNode.current === n3 ? e2 : t3;
  }
  function g(e2) {
    var t3 = e2.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6)
      return e2;
    for (e2 = e2.child; e2 !== null; ) {
      if (t3 = g(e2), t3 !== null)
        return t3;
      e2 = e2.sibling;
    }
    return null;
  }
  var _ = Object.assign, v = Symbol.for(`react.element`), y = Symbol.for(`react.transitional.element`), b = Symbol.for(`react.portal`), x = Symbol.for(`react.fragment`), ee = Symbol.for(`react.strict_mode`), te = Symbol.for(`react.profiler`), ne = Symbol.for(`react.consumer`), re = Symbol.for(`react.context`), ie = Symbol.for(`react.forward_ref`), ae = Symbol.for(`react.suspense`), oe = Symbol.for(`react.suspense_list`), se = Symbol.for(`react.memo`), ce = Symbol.for(`react.lazy`), le = Symbol.for(`react.activity`), ue = Symbol.for(`react.memo_cache_sentinel`), de = Symbol.iterator;
  function fe(e2) {
    return typeof e2 != `object` || !e2 ? null : (e2 = de && e2[de] || e2[`@@iterator`], typeof e2 == `function` ? e2 : null);
  }
  var pe = Symbol.for(`react.client.reference`);
  function me(e2) {
    if (e2 == null)
      return null;
    if (typeof e2 == `function`)
      return e2.$$typeof === pe ? null : e2.displayName || e2.name || null;
    if (typeof e2 == `string`)
      return e2;
    switch (e2) {
      case x:
        return `Fragment`;
      case te:
        return `Profiler`;
      case ee:
        return `StrictMode`;
      case ae:
        return `Suspense`;
      case oe:
        return `SuspenseList`;
      case le:
        return `Activity`;
    }
    if (typeof e2 == `object`)
      switch (e2.$$typeof) {
        case b:
          return `Portal`;
        case re:
          return e2.displayName || `Context`;
        case ne:
          return (e2._context.displayName || `Context`) + `.Consumer`;
        case ie:
          var t3 = e2.render;
          return e2 = e2.displayName, e2 || (e2 = (e2 = t3.displayName || t3.name || ``, e2 === `` ? `ForwardRef` : `ForwardRef(` + e2 + `)`)), e2;
        case se:
          return t3 = e2.displayName || null, t3 === null ? me(e2.type) || `Memo` : t3;
        case ce:
          t3 = e2._payload, e2 = e2._init;
          try {
            return me(e2(t3));
          } catch {
          }
      }
    return null;
  }
  var he = Array.isArray, S = o2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = c2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = {pending: false, data: null, method: null, action: null}, _e = [], ve = -1;
  function ye(e2) {
    return {current: e2};
  }
  function w(e2) {
    0 > ve || (e2.current = _e[ve], _e[ve] = null, ve--);
  }
  function T(e2, t3) {
    ve++, _e[ve] = e2.current, e2.current = t3;
  }
  var be = ye(null), xe = ye(null), Se = ye(null), Ce = ye(null);
  function we(e2, t3) {
    switch (T(Se, t3), T(xe, e2), T(be, null), t3.nodeType) {
      case 9:
      case 11:
        e2 = (e2 = t3.documentElement) && (e2 = e2.namespaceURI) ? Ud(e2) : 0;
        break;
      default:
        if (e2 = t3.tagName, t3 = t3.namespaceURI)
          t3 = Ud(t3), e2 = Wd(t3, e2);
        else
          switch (e2) {
            case `svg`:
              e2 = 1;
              break;
            case `math`:
              e2 = 2;
              break;
            default:
              e2 = 0;
          }
    }
    w(be), T(be, e2);
  }
  function Te() {
    w(be), w(xe), w(Se);
  }
  function Ee(e2) {
    e2.memoizedState !== null && T(Ce, e2);
    var t3 = be.current, n3 = Wd(t3, e2.type);
    t3 !== n3 && (T(xe, e2), T(be, n3));
  }
  function De(e2) {
    xe.current === e2 && (w(be), w(xe)), Ce.current === e2 && (w(Ce), ep._currentValue = ge);
  }
  var Oe, ke;
  function Ae(e2) {
    if (Oe === void 0)
      try {
        throw Error();
      } catch (e3) {
        var t3 = e3.stack.trim().match(/\n( *(at )?)/);
        Oe = t3 && t3[1] || ``, ke = -1 < e3.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e3.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
      }
    return `
` + Oe + e2 + ke;
  }
  var je = false;
  function Me(e2, t3) {
    if (!e2 || je)
      return ``;
    je = true;
    var n3 = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r2 = {DetermineComponentFrameRoot: function() {
        try {
          if (t3) {
            var n4 = function() {
              throw Error();
            };
            if (Object.defineProperty(n4.prototype, "props", {set: function() {
              throw Error();
            }}), typeof Reflect == `object` && Reflect.construct) {
              try {
                Reflect.construct(n4, []);
              } catch (e3) {
                var r3 = e3;
              }
              Reflect.construct(e2, [], n4);
            } else {
              try {
                n4.call();
              } catch (e3) {
                r3 = e3;
              }
              e2.call(n4.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (e3) {
              r3 = e3;
            }
            (n4 = e2()) && typeof n4.catch == `function` && n4.catch(function() {
            });
          }
        } catch (e3) {
          if (e3 && r3 && typeof e3.stack == `string`)
            return [e3.stack, r3.stack];
        }
        return [null, null];
      }};
      r2.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i2 = Object.getOwnPropertyDescriptor(r2.DetermineComponentFrameRoot, `name`);
      i2 && i2.configurable && Object.defineProperty(r2.DetermineComponentFrameRoot, "name", {value: `DetermineComponentFrameRoot`});
      var a2 = r2.DetermineComponentFrameRoot(), o3 = a2[0], s2 = a2[1];
      if (o3 && s2) {
        var c3 = o3.split(`
`), l3 = s2.split(`
`);
        for (i2 = r2 = 0; r2 < c3.length && !c3[r2].includes(`DetermineComponentFrameRoot`); )
          r2++;
        for (; i2 < l3.length && !l3[i2].includes(`DetermineComponentFrameRoot`); )
          i2++;
        if (r2 === c3.length || i2 === l3.length)
          for (r2 = c3.length - 1, i2 = l3.length - 1; 1 <= r2 && 0 <= i2 && c3[r2] !== l3[i2]; )
            i2--;
        for (; 1 <= r2 && 0 <= i2; r2--, i2--)
          if (c3[r2] !== l3[i2]) {
            if (r2 !== 1 || i2 !== 1)
              do
                if (r2--, i2--, 0 > i2 || c3[r2] !== l3[i2]) {
                  var u3 = `
` + c3[r2].replace(` at new `, ` at `);
                  return e2.displayName && u3.includes(`<anonymous>`) && (u3 = u3.replace(`<anonymous>`, e2.displayName)), u3;
                }
              while (1 <= r2 && 0 <= i2);
            break;
          }
      }
    } finally {
      je = false, Error.prepareStackTrace = n3;
    }
    return (n3 = e2 ? e2.displayName || e2.name : ``) ? Ae(n3) : ``;
  }
  function Ne(e2, t3) {
    switch (e2.tag) {
      case 26:
      case 27:
      case 5:
        return Ae(e2.type);
      case 16:
        return Ae(`Lazy`);
      case 13:
        return e2.child !== t3 && t3 !== null ? Ae(`Suspense Fallback`) : Ae(`Suspense`);
      case 19:
        return Ae(`SuspenseList`);
      case 0:
      case 15:
        return Me(e2.type, false);
      case 11:
        return Me(e2.type.render, false);
      case 1:
        return Me(e2.type, true);
      case 31:
        return Ae(`Activity`);
      default:
        return ``;
    }
  }
  function Pe(e2) {
    try {
      var t3 = ``, n3 = null;
      do
        t3 += Ne(e2, n3), n3 = e2, e2 = e2.return;
      while (e2);
      return t3;
    } catch (e3) {
      return `
Error generating stack: ` + e3.message + `
` + e3.stack;
    }
  }
  var Fe = Object.prototype.hasOwnProperty, Ie = n2.unstable_scheduleCallback, Le = n2.unstable_cancelCallback, Re = n2.unstable_shouldYield, ze = n2.unstable_requestPaint, Be = n2.unstable_now, Ve = n2.unstable_getCurrentPriorityLevel, He = n2.unstable_ImmediatePriority, Ue = n2.unstable_UserBlockingPriority, We = n2.unstable_NormalPriority, Ge = n2.unstable_LowPriority, Ke = n2.unstable_IdlePriority, qe = n2.log, Je = n2.unstable_setDisableYieldValue, Ye = null, Xe = null;
  function Ze(e2) {
    if (typeof qe == `function` && Je(e2), Xe && typeof Xe.setStrictMode == `function`)
      try {
        Xe.setStrictMode(Ye, e2);
      } catch {
      }
  }
  var Qe = Math.clz32 ? Math.clz32 : tt, $e = Math.log, et = Math.LN2;
  function tt(e2) {
    return e2 >>>= 0, e2 === 0 ? 32 : 31 - ($e(e2) / et | 0) | 0;
  }
  var nt = 256, rt = 262144, it = 4194304;
  function at(e2) {
    var t3 = e2 & 42;
    if (t3 !== 0)
      return t3;
    switch (e2 & -e2) {
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
        return e2 & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e2 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e2 & 62914560;
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
        return e2;
    }
  }
  function ot(e2, t3, n3) {
    var r2 = e2.pendingLanes;
    if (r2 === 0)
      return 0;
    var i2 = 0, a2 = e2.suspendedLanes, o3 = e2.pingedLanes;
    e2 = e2.warmLanes;
    var s2 = r2 & 134217727;
    return s2 === 0 ? (s2 = r2 & ~a2, s2 === 0 ? o3 === 0 ? n3 || (n3 = r2 & ~e2, n3 !== 0 && (i2 = at(n3))) : i2 = at(o3) : i2 = at(s2)) : (r2 = s2 & ~a2, r2 === 0 ? (o3 &= s2, o3 === 0 ? n3 || (n3 = s2 & ~e2, n3 !== 0 && (i2 = at(n3))) : i2 = at(o3)) : i2 = at(r2)), i2 === 0 ? 0 : t3 !== 0 && t3 !== i2 && (t3 & a2) === 0 && (a2 = i2 & -i2, n3 = t3 & -t3, a2 >= n3 || a2 === 32 && n3 & 4194048) ? t3 : i2;
  }
  function st(e2, t3) {
    return (e2.pendingLanes & ~(e2.suspendedLanes & ~e2.pingedLanes) & t3) === 0;
  }
  function ct(e2, t3) {
    switch (e2) {
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
  function lt() {
    var e2 = it;
    return it <<= 1, !(it & 62914560) && (it = 4194304), e2;
  }
  function ut(e2) {
    for (var t3 = [], n3 = 0; 31 > n3; n3++)
      t3.push(e2);
    return t3;
  }
  function dt(e2, t3) {
    e2.pendingLanes |= t3, t3 !== 268435456 && (e2.suspendedLanes = 0, e2.pingedLanes = 0, e2.warmLanes = 0);
  }
  function ft(e2, t3, n3, r2, i2, a2) {
    var o3 = e2.pendingLanes;
    e2.pendingLanes = n3, e2.suspendedLanes = 0, e2.pingedLanes = 0, e2.warmLanes = 0, e2.expiredLanes &= n3, e2.entangledLanes &= n3, e2.errorRecoveryDisabledLanes &= n3, e2.shellSuspendCounter = 0;
    var s2 = e2.entanglements, c3 = e2.expirationTimes, l3 = e2.hiddenUpdates;
    for (n3 = o3 & ~n3; 0 < n3; ) {
      var u3 = 31 - Qe(n3), d3 = 1 << u3;
      s2[u3] = 0, c3[u3] = -1;
      var f3 = l3[u3];
      if (f3 !== null)
        for (l3[u3] = null, u3 = 0; u3 < f3.length; u3++) {
          var p3 = f3[u3];
          p3 !== null && (p3.lane &= -536870913);
        }
      n3 &= ~d3;
    }
    r2 !== 0 && pt(e2, r2, 0), a2 !== 0 && i2 === 0 && e2.tag !== 0 && (e2.suspendedLanes |= a2 & ~(o3 & ~t3));
  }
  function pt(e2, t3, n3) {
    e2.pendingLanes |= t3, e2.suspendedLanes &= ~t3;
    var r2 = 31 - Qe(t3);
    e2.entangledLanes |= t3, e2.entanglements[r2] = e2.entanglements[r2] | 1073741824 | n3 & 261930;
  }
  function mt(e2, t3) {
    var n3 = e2.entangledLanes |= t3;
    for (e2 = e2.entanglements; n3; ) {
      var r2 = 31 - Qe(n3), i2 = 1 << r2;
      i2 & t3 | e2[r2] & t3 && (e2[r2] |= t3), n3 &= ~i2;
    }
  }
  function ht(e2, t3) {
    var n3 = t3 & -t3;
    return n3 = n3 & 42 ? 1 : gt(n3), (n3 & (e2.suspendedLanes | t3)) === 0 ? n3 : 0;
  }
  function gt(e2) {
    switch (e2) {
      case 2:
        e2 = 1;
        break;
      case 8:
        e2 = 4;
        break;
      case 32:
        e2 = 16;
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
        e2 = 128;
        break;
      case 268435456:
        e2 = 134217728;
        break;
      default:
        e2 = 0;
    }
    return e2;
  }
  function _t(e2) {
    return e2 &= -e2, 2 < e2 ? 8 < e2 ? e2 & 134217727 ? 32 : 268435456 : 8 : 2;
  }
  function vt() {
    var e2 = C.p;
    return e2 === 0 ? (e2 = window.event, e2 === void 0 ? 32 : gp(e2.type)) : e2;
  }
  function yt(e2, t3) {
    var n3 = C.p;
    try {
      return C.p = e2, t3();
    } finally {
      C.p = n3;
    }
  }
  var bt = Math.random().toString(36).slice(2), xt = `__reactFiber$` + bt, St = `__reactProps$` + bt, Ct = `__reactContainer$` + bt, wt = `__reactEvents$` + bt, Tt = `__reactListeners$` + bt, Et = `__reactHandles$` + bt, Dt = `__reactResources$` + bt, Ot = `__reactMarker$` + bt;
  function kt(e2) {
    delete e2[xt], delete e2[St], delete e2[wt], delete e2[Tt], delete e2[Et];
  }
  function At(e2) {
    var t3 = e2[xt];
    if (t3)
      return t3;
    for (var n3 = e2.parentNode; n3; ) {
      if (t3 = n3[Ct] || n3[xt]) {
        if (n3 = t3.alternate, t3.child !== null || n3 !== null && n3.child !== null)
          for (e2 = pf(e2); e2 !== null; ) {
            if (n3 = e2[xt])
              return n3;
            e2 = pf(e2);
          }
        return t3;
      }
      e2 = n3, n3 = e2.parentNode;
    }
    return null;
  }
  function jt(e2) {
    if (e2 = e2[xt] || e2[Ct]) {
      var t3 = e2.tag;
      if (t3 === 5 || t3 === 6 || t3 === 13 || t3 === 31 || t3 === 26 || t3 === 27 || t3 === 3)
        return e2;
    }
    return null;
  }
  function Mt(e2) {
    var t3 = e2.tag;
    if (t3 === 5 || t3 === 26 || t3 === 27 || t3 === 6)
      return e2.stateNode;
    throw Error(l2(33));
  }
  function Nt(e2) {
    var t3 = e2[Dt];
    return t3 || (t3 = e2[Dt] = {hoistableStyles: new Map(), hoistableScripts: new Map()}), t3;
  }
  function E(e2) {
    e2[Ot] = true;
  }
  var Pt = new Set(), Ft = {};
  function It(e2, t3) {
    Lt(e2, t3), Lt(e2 + `Capture`, t3);
  }
  function Lt(e2, t3) {
    for (Ft[e2] = t3, e2 = 0; e2 < t3.length; e2++)
      Pt.add(t3[e2]);
  }
  var Rt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`), zt = {}, Bt = {};
  function Vt(e2) {
    return Fe.call(Bt, e2) ? true : Fe.call(zt, e2) ? false : Rt.test(e2) ? Bt[e2] = true : (zt[e2] = true, false);
  }
  function Ht(e2, t3, n3) {
    if (Vt(t3)) {
      if (n3 === null)
        e2.removeAttribute(t3);
      else {
        switch (typeof n3) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e2.removeAttribute(t3);
            return;
          case `boolean`:
            var r2 = t3.toLowerCase().slice(0, 5);
            if (r2 !== `data-` && r2 !== `aria-`) {
              e2.removeAttribute(t3);
              return;
            }
        }
        e2.setAttribute(t3, `` + n3);
      }
    }
  }
  function Ut(e2, t3, n3) {
    if (n3 === null)
      e2.removeAttribute(t3);
    else {
      switch (typeof n3) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e2.removeAttribute(t3);
          return;
      }
      e2.setAttribute(t3, `` + n3);
    }
  }
  function Wt(e2, t3, n3, r2) {
    if (r2 === null)
      e2.removeAttribute(n3);
    else {
      switch (typeof r2) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e2.removeAttribute(n3);
          return;
      }
      e2.setAttributeNS(t3, n3, `` + r2);
    }
  }
  function Gt(e2) {
    switch (typeof e2) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e2;
      case `object`:
        return e2;
      default:
        return ``;
    }
  }
  function Kt(e2) {
    var t3 = e2.type;
    return (e2 = e2.nodeName) && e2.toLowerCase() === `input` && (t3 === `checkbox` || t3 === `radio`);
  }
  function qt(e2, t3, n3) {
    var r2 = Object.getOwnPropertyDescriptor(e2.constructor.prototype, t3);
    if (!e2.hasOwnProperty(t3) && r2 !== void 0 && typeof r2.get == `function` && typeof r2.set == `function`) {
      var i2 = r2.get, a2 = r2.set;
      return Object.defineProperty(e2, t3, {configurable: true, get: function() {
        return i2.call(this);
      }, set: function(e3) {
        n3 = `` + e3, a2.call(this, e3);
      }}), Object.defineProperty(e2, t3, {enumerable: r2.enumerable}), {getValue: function() {
        return n3;
      }, setValue: function(e3) {
        n3 = `` + e3;
      }, stopTracking: function() {
        e2._valueTracker = null, delete e2[t3];
      }};
    }
  }
  function Jt(e2) {
    if (!e2._valueTracker) {
      var t3 = Kt(e2) ? `checked` : `value`;
      e2._valueTracker = qt(e2, t3, `` + e2[t3]);
    }
  }
  function Yt(e2) {
    if (!e2)
      return false;
    var t3 = e2._valueTracker;
    if (!t3)
      return true;
    var n3 = t3.getValue(), r2 = ``;
    return e2 && (r2 = Kt(e2) ? e2.checked ? `true` : `false` : e2.value), e2 = r2, e2 !== n3 && (t3.setValue(e2), true);
  }
  function Xt(e2) {
    if (e2 || (e2 = typeof document < `u` ? document : void 0), e2 === void 0)
      return null;
    try {
      return e2.activeElement || e2.body;
    } catch {
      return e2.body;
    }
  }
  var Zt = /[\n"\\]/g;
  function Qt(e2) {
    return e2.replace(Zt, function(e3) {
      return `\\` + e3.charCodeAt(0).toString(16) + ` `;
    });
  }
  function $t(e2, t3, n3, r2, i2, a2, o3, s2) {
    e2.name = ``, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` ? e2.type = o3 : e2.removeAttribute(`type`), t3 == null ? o3 !== `submit` && o3 !== `reset` || e2.removeAttribute(`value`) : o3 === `number` ? (t3 === 0 && e2.value === `` || e2.value != t3) && (e2.value = `` + Gt(t3)) : e2.value !== `` + Gt(t3) && (e2.value = `` + Gt(t3)), t3 == null ? n3 == null ? r2 != null && e2.removeAttribute(`value`) : tn(e2, o3, Gt(n3)) : tn(e2, o3, Gt(t3)), i2 == null && a2 != null && (e2.defaultChecked = !!a2), i2 != null && (e2.checked = i2 && typeof i2 != `function` && typeof i2 != `symbol`), s2 != null && typeof s2 != `function` && typeof s2 != `symbol` && typeof s2 != `boolean` ? e2.name = `` + Gt(s2) : e2.removeAttribute(`name`);
  }
  function en(e2, t3, n3, r2, i2, a2, o3, s2) {
    if (a2 != null && typeof a2 != `function` && typeof a2 != `symbol` && typeof a2 != `boolean` && (e2.type = a2), t3 != null || n3 != null) {
      if (!(a2 !== `submit` && a2 !== `reset` || t3 != null)) {
        Jt(e2);
        return;
      }
      n3 = n3 == null ? `` : `` + Gt(n3), t3 = t3 == null ? n3 : `` + Gt(t3), s2 || t3 === e2.value || (e2.value = t3), e2.defaultValue = t3;
    }
    r2 ?? (r2 = i2), r2 = typeof r2 != `function` && typeof r2 != `symbol` && !!r2, e2.checked = s2 ? e2.checked : !!r2, e2.defaultChecked = !!r2, o3 != null && typeof o3 != `function` && typeof o3 != `symbol` && typeof o3 != `boolean` && (e2.name = o3), Jt(e2);
  }
  function tn(e2, t3, n3) {
    t3 === `number` && Xt(e2.ownerDocument) === e2 || e2.defaultValue === `` + n3 || (e2.defaultValue = `` + n3);
  }
  function nn(e2, t3, n3, r2) {
    if (e2 = e2.options, t3) {
      t3 = {};
      for (var i2 = 0; i2 < n3.length; i2++)
        t3[`$` + n3[i2]] = true;
      for (n3 = 0; n3 < e2.length; n3++)
        i2 = t3.hasOwnProperty(`$` + e2[n3].value), e2[n3].selected !== i2 && (e2[n3].selected = i2), i2 && r2 && (e2[n3].defaultSelected = true);
    } else {
      for (n3 = `` + Gt(n3), t3 = null, i2 = 0; i2 < e2.length; i2++) {
        if (e2[i2].value === n3) {
          e2[i2].selected = true, r2 && (e2[i2].defaultSelected = true);
          return;
        }
        t3 !== null || e2[i2].disabled || (t3 = e2[i2]);
      }
      t3 !== null && (t3.selected = true);
    }
  }
  function rn(e2, t3, n3) {
    if (t3 != null && (t3 = `` + Gt(t3), t3 !== e2.value && (e2.value = t3), n3 == null)) {
      e2.defaultValue !== t3 && (e2.defaultValue = t3);
      return;
    }
    e2.defaultValue = n3 == null ? `` : `` + Gt(n3);
  }
  function an(e2, t3, n3, r2) {
    if (t3 == null) {
      if (r2 != null) {
        if (n3 != null)
          throw Error(l2(92));
        if (he(r2)) {
          if (1 < r2.length)
            throw Error(l2(93));
          r2 = r2[0];
        }
        n3 = r2;
      }
      n3 ?? (n3 = ``), t3 = n3;
    }
    n3 = Gt(t3), e2.defaultValue = n3, r2 = e2.textContent, r2 === n3 && r2 !== `` && r2 !== null && (e2.value = r2), Jt(e2);
  }
  function on(e2, t3) {
    if (t3) {
      var n3 = e2.firstChild;
      if (n3 && n3 === e2.lastChild && n3.nodeType === 3) {
        n3.nodeValue = t3;
        return;
      }
    }
    e2.textContent = t3;
  }
  var sn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function cn(e2, t3, n3) {
    var r2 = t3.indexOf(`--`) === 0;
    n3 == null || typeof n3 == `boolean` || n3 === `` ? r2 ? e2.setProperty(t3, ``) : t3 === `float` ? e2.cssFloat = `` : e2[t3] = `` : r2 ? e2.setProperty(t3, n3) : typeof n3 != `number` || n3 === 0 || sn.has(t3) ? t3 === `float` ? e2.cssFloat = n3 : e2[t3] = (`` + n3).trim() : e2[t3] = n3 + `px`;
  }
  function ln(e2, t3, n3) {
    if (t3 != null && typeof t3 != `object`)
      throw Error(l2(62));
    if (e2 = e2.style, n3 != null) {
      for (var r2 in n3)
        !n3.hasOwnProperty(r2) || t3 != null && t3.hasOwnProperty(r2) || (r2.indexOf(`--`) === 0 ? e2.setProperty(r2, ``) : r2 === `float` ? e2.cssFloat = `` : e2[r2] = ``);
      for (var i2 in t3)
        r2 = t3[i2], t3.hasOwnProperty(i2) && n3[i2] !== r2 && cn(e2, i2, r2);
    } else
      for (var a2 in t3)
        t3.hasOwnProperty(a2) && cn(e2, a2, t3[a2]);
  }
  function un(e2) {
    if (e2.indexOf(`-`) === -1)
      return false;
    switch (e2) {
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
  var dn = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]), fn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pn(e2) {
    return fn.test(`` + e2) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e2;
  }
  function mn() {
  }
  var hn = null;
  function gn(e2) {
    return e2 = e2.target || e2.srcElement || window, e2.correspondingUseElement && (e2 = e2.correspondingUseElement), e2.nodeType === 3 ? e2.parentNode : e2;
  }
  var _n = null, vn = null;
  function yn(e2) {
    var t3 = jt(e2);
    if (t3 && (e2 = t3.stateNode)) {
      var n3 = e2[St] || null;
      a:
        switch (e2 = t3.stateNode, t3.type) {
          case `input`:
            if ($t(e2, n3.value, n3.defaultValue, n3.defaultValue, n3.checked, n3.defaultChecked, n3.type, n3.name), t3 = n3.name, n3.type === `radio` && t3 != null) {
              for (n3 = e2; n3.parentNode; )
                n3 = n3.parentNode;
              for (n3 = n3.querySelectorAll(`input[name="` + Qt(`` + t3) + `"][type="radio"]`), t3 = 0; t3 < n3.length; t3++) {
                var r2 = n3[t3];
                if (r2 !== e2 && r2.form === e2.form) {
                  var i2 = r2[St] || null;
                  if (!i2)
                    throw Error(l2(90));
                  $t(r2, i2.value, i2.defaultValue, i2.defaultValue, i2.checked, i2.defaultChecked, i2.type, i2.name);
                }
              }
              for (t3 = 0; t3 < n3.length; t3++)
                r2 = n3[t3], r2.form === e2.form && Yt(r2);
            }
            break a;
          case `textarea`:
            rn(e2, n3.value, n3.defaultValue);
            break a;
          case `select`:
            t3 = n3.value, t3 != null && nn(e2, !!n3.multiple, t3, false);
        }
    }
  }
  var bn = false;
  function xn(e2, t3, n3) {
    if (bn)
      return e2(t3, n3);
    bn = true;
    try {
      return e2(t3);
    } finally {
      if (bn = false, (_n !== null || vn !== null) && (Su(), _n && (t3 = _n, e2 = vn, vn = _n = null, yn(t3), e2)))
        for (t3 = 0; t3 < e2.length; t3++)
          yn(e2[t3]);
    }
  }
  function Sn(e2, t3) {
    var n3 = e2.stateNode;
    if (n3 === null)
      return null;
    var r2 = n3[St] || null;
    if (r2 === null)
      return null;
    n3 = r2[t3];
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
          (r2 = !r2.disabled) || (e2 = e2.type, r2 = e2 !== `button` && e2 !== `input` && e2 !== `select` && e2 !== `textarea`), e2 = !r2;
          break a;
        default:
          e2 = false;
      }
    if (e2)
      return null;
    if (n3 && typeof n3 != `function`)
      throw Error(l2(231, t3, typeof n3));
    return n3;
  }
  var Cn = !(typeof window > `u` || window.document === void 0 || window.document.createElement === void 0), wn = false;
  if (Cn)
    try {
      var Tn = {};
      Object.defineProperty(Tn, "passive", {get: function() {
        wn = true;
      }}), window.addEventListener(`test`, Tn, Tn), window.removeEventListener(`test`, Tn, Tn);
    } catch {
      wn = false;
    }
  var En = null, Dn = null, On = null;
  function kn() {
    if (On)
      return On;
    var e2, t3 = Dn, n3 = t3.length, r2, i2 = `value` in En ? En.value : En.textContent, a2 = i2.length;
    for (e2 = 0; e2 < n3 && t3[e2] === i2[e2]; e2++)
      ;
    var o3 = n3 - e2;
    for (r2 = 1; r2 <= o3 && t3[n3 - r2] === i2[a2 - r2]; r2++)
      ;
    return On = i2.slice(e2, 1 < r2 ? 1 - r2 : void 0);
  }
  function An(e2) {
    var t3 = e2.keyCode;
    return `charCode` in e2 ? (e2 = e2.charCode, e2 === 0 && t3 === 13 && (e2 = 13)) : e2 = t3, e2 === 10 && (e2 = 13), 32 <= e2 || e2 === 13 ? e2 : 0;
  }
  function jn() {
    return true;
  }
  function Mn() {
    return false;
  }
  function Nn(e2) {
    function t3(t4, n3, r2, i2, a2) {
      for (var o3 in this._reactName = t4, this._targetInst = r2, this.type = n3, this.nativeEvent = i2, this.target = a2, this.currentTarget = null, e2)
        e2.hasOwnProperty(o3) && (t4 = e2[o3], this[o3] = t4 ? t4(i2) : i2[o3]);
      return this.isDefaultPrevented = (i2.defaultPrevented == null ? i2.returnValue === false : i2.defaultPrevented) ? jn : Mn, this.isPropagationStopped = Mn, this;
    }
    return _(t3.prototype, {preventDefault: function() {
      this.defaultPrevented = true;
      var e3 = this.nativeEvent;
      e3 && (e3.preventDefault ? e3.preventDefault() : typeof e3.returnValue != `unknown` && (e3.returnValue = false), this.isDefaultPrevented = jn);
    }, stopPropagation: function() {
      var e3 = this.nativeEvent;
      e3 && (e3.stopPropagation ? e3.stopPropagation() : typeof e3.cancelBubble != `unknown` && (e3.cancelBubble = true), this.isPropagationStopped = jn);
    }, persist: function() {
    }, isPersistent: jn}), t3;
  }
  var Pn = {eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e2) {
    return e2.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0}, Fn = Nn(Pn), In = _({}, Pn, {view: 0, detail: 0}), Ln = Nn(In), Rn, zn, Bn, Vn = _({}, In, {screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Qn, button: 0, buttons: 0, relatedTarget: function(e2) {
    return e2.relatedTarget === void 0 ? e2.fromElement === e2.srcElement ? e2.toElement : e2.fromElement : e2.relatedTarget;
  }, movementX: function(e2) {
    return `movementX` in e2 ? e2.movementX : (e2 !== Bn && (Bn && e2.type === `mousemove` ? (Rn = e2.screenX - Bn.screenX, zn = e2.screenY - Bn.screenY) : zn = Rn = 0, Bn = e2), Rn);
  }, movementY: function(e2) {
    return `movementY` in e2 ? e2.movementY : zn;
  }}), Hn = Nn(Vn), Un = Nn(_({}, Vn, {dataTransfer: 0})), Wn = Nn(_({}, In, {relatedTarget: 0})), Gn = Nn(_({}, Pn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), Kn = Nn(_({}, Pn, {clipboardData: function(e2) {
    return `clipboardData` in e2 ? e2.clipboardData : window.clipboardData;
  }})), qn = Nn(_({}, Pn, {data: 0})), Jn = {Esc: `Escape`, Spacebar: ` `, Left: `ArrowLeft`, Up: `ArrowUp`, Right: `ArrowRight`, Down: `ArrowDown`, Del: `Delete`, Win: `OS`, Menu: `ContextMenu`, Apps: `ContextMenu`, Scroll: `ScrollLock`, MozPrintableKey: `Unidentified`}, Yn = {8: `Backspace`, 9: `Tab`, 12: `Clear`, 13: `Enter`, 16: `Shift`, 17: `Control`, 18: `Alt`, 19: `Pause`, 20: `CapsLock`, 27: `Escape`, 32: ` `, 33: `PageUp`, 34: `PageDown`, 35: `End`, 36: `Home`, 37: `ArrowLeft`, 38: `ArrowUp`, 39: `ArrowRight`, 40: `ArrowDown`, 45: `Insert`, 46: `Delete`, 112: `F1`, 113: `F2`, 114: `F3`, 115: `F4`, 116: `F5`, 117: `F6`, 118: `F7`, 119: `F8`, 120: `F9`, 121: `F10`, 122: `F11`, 123: `F12`, 144: `NumLock`, 145: `ScrollLock`, 224: `Meta`}, Xn = {Alt: `altKey`, Control: `ctrlKey`, Meta: `metaKey`, Shift: `shiftKey`};
  function Zn(e2) {
    var t3 = this.nativeEvent;
    return t3.getModifierState ? t3.getModifierState(e2) : (e2 = Xn[e2]) ? !!t3[e2] : false;
  }
  function Qn() {
    return Zn;
  }
  var $n = Nn(_({}, In, {key: function(e2) {
    if (e2.key) {
      var t3 = Jn[e2.key] || e2.key;
      if (t3 !== `Unidentified`)
        return t3;
    }
    return e2.type === `keypress` ? (e2 = An(e2), e2 === 13 ? `Enter` : String.fromCharCode(e2)) : e2.type === `keydown` || e2.type === `keyup` ? Yn[e2.keyCode] || `Unidentified` : ``;
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Qn, charCode: function(e2) {
    return e2.type === `keypress` ? An(e2) : 0;
  }, keyCode: function(e2) {
    return e2.type === `keydown` || e2.type === `keyup` ? e2.keyCode : 0;
  }, which: function(e2) {
    return e2.type === `keypress` ? An(e2) : e2.type === `keydown` || e2.type === `keyup` ? e2.keyCode : 0;
  }})), er = Nn(_({}, Vn, {pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0})), tr = Nn(_({}, In, {touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Qn})), nr = Nn(_({}, Pn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), rr = Nn(_({}, Vn, {deltaX: function(e2) {
    return `deltaX` in e2 ? e2.deltaX : `wheelDeltaX` in e2 ? -e2.wheelDeltaX : 0;
  }, deltaY: function(e2) {
    return `deltaY` in e2 ? e2.deltaY : `wheelDeltaY` in e2 ? -e2.wheelDeltaY : `wheelDelta` in e2 ? -e2.wheelDelta : 0;
  }, deltaZ: 0, deltaMode: 0})), ir = Nn(_({}, Pn, {newState: 0, oldState: 0})), ar = [9, 13, 27, 32], or = Cn && `CompositionEvent` in window, sr = null;
  Cn && `documentMode` in document && (sr = document.documentMode);
  var cr = Cn && `TextEvent` in window && !sr, lr = Cn && (!or || sr && 8 < sr && 11 >= sr), ur = ` `, dr = false;
  function fr(e2, t3) {
    switch (e2) {
      case `keyup`:
        return ar.indexOf(t3.keyCode) !== -1;
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
  function pr(e2) {
    return e2 = e2.detail, typeof e2 == `object` && `data` in e2 ? e2.data : null;
  }
  var mr = false;
  function hr(e2, t3) {
    switch (e2) {
      case `compositionend`:
        return pr(t3);
      case `keypress`:
        return t3.which === 32 ? (dr = true, ur) : null;
      case `textInput`:
        return e2 = t3.data, e2 === ur && dr ? null : e2;
      default:
        return null;
    }
  }
  function gr(e2, t3) {
    if (mr)
      return e2 === `compositionend` || !or && fr(e2, t3) ? (e2 = kn(), On = Dn = En = null, mr = false, e2) : null;
    switch (e2) {
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
        return lr && t3.locale !== `ko` ? null : t3.data;
      default:
        return null;
    }
  }
  var _r = {color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true};
  function vr(e2) {
    var t3 = e2 && e2.nodeName && e2.nodeName.toLowerCase();
    return t3 === `input` ? !!_r[e2.type] : t3 === `textarea`;
  }
  function yr(e2, t3, n3, r2) {
    _n ? vn ? vn.push(r2) : vn = [r2] : _n = r2, t3 = Od(t3, `onChange`), 0 < t3.length && (n3 = new Fn(`onChange`, `change`, null, n3, r2), e2.push({event: n3, listeners: t3}));
  }
  var br = null, xr = null;
  function Sr(e2) {
    xd(e2, 0);
  }
  function Cr(e2) {
    if (Yt(Mt(e2)))
      return e2;
  }
  function wr(e2, t3) {
    if (e2 === `change`)
      return t3;
  }
  var Tr = false;
  if (Cn) {
    var Er;
    if (Cn) {
      var Dr = `oninput` in document;
      if (!Dr) {
        var Or = document.createElement(`div`);
        Or.setAttribute(`oninput`, `return;`), Dr = typeof Or.oninput == `function`;
      }
      Er = Dr;
    } else
      Er = false;
    Tr = Er && (!document.documentMode || 9 < document.documentMode);
  }
  function kr() {
    br && (br.detachEvent(`onpropertychange`, Ar), xr = br = null);
  }
  function Ar(e2) {
    if (e2.propertyName === `value` && Cr(xr)) {
      var t3 = [];
      yr(t3, xr, e2, gn(e2)), xn(Sr, t3);
    }
  }
  function jr(e2, t3, n3) {
    e2 === `focusin` ? (kr(), br = t3, xr = n3, br.attachEvent(`onpropertychange`, Ar)) : e2 === `focusout` && kr();
  }
  function Mr(e2) {
    if (e2 === `selectionchange` || e2 === `keyup` || e2 === `keydown`)
      return Cr(xr);
  }
  function Nr(e2, t3) {
    if (e2 === `click`)
      return Cr(t3);
  }
  function Pr(e2, t3) {
    if (e2 === `input` || e2 === `change`)
      return Cr(t3);
  }
  function Fr(e2, t3) {
    return e2 === t3 && (e2 !== 0 || 1 / e2 == 1 / t3) || e2 !== e2 && t3 !== t3;
  }
  var Ir = typeof Object.is == `function` ? Object.is : Fr;
  function Lr(e2, t3) {
    if (Ir(e2, t3))
      return true;
    if (typeof e2 != `object` || !e2 || typeof t3 != `object` || !t3)
      return false;
    var n3 = Object.keys(e2), r2 = Object.keys(t3);
    if (n3.length !== r2.length)
      return false;
    for (r2 = 0; r2 < n3.length; r2++) {
      var i2 = n3[r2];
      if (!Fe.call(t3, i2) || !Ir(e2[i2], t3[i2]))
        return false;
    }
    return true;
  }
  function Rr(e2) {
    for (; e2 && e2.firstChild; )
      e2 = e2.firstChild;
    return e2;
  }
  function zr(e2, t3) {
    var n3 = Rr(e2);
    e2 = 0;
    for (var r2; n3; ) {
      if (n3.nodeType === 3) {
        if (r2 = e2 + n3.textContent.length, e2 <= t3 && r2 >= t3)
          return {node: n3, offset: t3 - e2};
        e2 = r2;
      }
      a: {
        for (; n3; ) {
          if (n3.nextSibling) {
            n3 = n3.nextSibling;
            break a;
          }
          n3 = n3.parentNode;
        }
        n3 = void 0;
      }
      n3 = Rr(n3);
    }
  }
  function Br(e2, t3) {
    return e2 && t3 ? e2 === t3 ? true : e2 && e2.nodeType === 3 ? false : t3 && t3.nodeType === 3 ? Br(e2, t3.parentNode) : `contains` in e2 ? e2.contains(t3) : e2.compareDocumentPosition ? !!(e2.compareDocumentPosition(t3) & 16) : false : false;
  }
  function Vr(e2) {
    e2 = e2 != null && e2.ownerDocument != null && e2.ownerDocument.defaultView != null ? e2.ownerDocument.defaultView : window;
    for (var t3 = Xt(e2.document); t3 instanceof e2.HTMLIFrameElement; ) {
      try {
        var n3 = typeof t3.contentWindow.location.href == `string`;
      } catch {
        n3 = false;
      }
      if (n3)
        e2 = t3.contentWindow;
      else
        break;
      t3 = Xt(e2.document);
    }
    return t3;
  }
  function Hr(e2) {
    var t3 = e2 && e2.nodeName && e2.nodeName.toLowerCase();
    return t3 && (t3 === `input` && (e2.type === `text` || e2.type === `search` || e2.type === `tel` || e2.type === `url` || e2.type === `password`) || t3 === `textarea` || e2.contentEditable === `true`);
  }
  var Ur = Cn && `documentMode` in document && 11 >= document.documentMode, Wr = null, Gr = null, Kr = null, qr = false;
  function Jr(e2, t3, n3) {
    var r2 = n3.window === n3 ? n3.document : n3.nodeType === 9 ? n3 : n3.ownerDocument;
    qr || Wr == null || Wr !== Xt(r2) || (r2 = Wr, `selectionStart` in r2 && Hr(r2) ? r2 = {start: r2.selectionStart, end: r2.selectionEnd} : (r2 = (r2.ownerDocument && r2.ownerDocument.defaultView || window).getSelection(), r2 = {anchorNode: r2.anchorNode, anchorOffset: r2.anchorOffset, focusNode: r2.focusNode, focusOffset: r2.focusOffset}), Kr && Lr(Kr, r2) || (Kr = r2, r2 = Od(Gr, `onSelect`), 0 < r2.length && (t3 = new Fn(`onSelect`, `select`, null, t3, n3), e2.push({event: t3, listeners: r2}), t3.target = Wr)));
  }
  function Yr(e2, t3) {
    var n3 = {};
    return n3[e2.toLowerCase()] = t3.toLowerCase(), n3[`Webkit` + e2] = `webkit` + t3, n3[`Moz` + e2] = `moz` + t3, n3;
  }
  var Xr = {animationend: Yr(`Animation`, `AnimationEnd`), animationiteration: Yr(`Animation`, `AnimationIteration`), animationstart: Yr(`Animation`, `AnimationStart`), transitionrun: Yr(`Transition`, `TransitionRun`), transitionstart: Yr(`Transition`, `TransitionStart`), transitioncancel: Yr(`Transition`, `TransitionCancel`), transitionend: Yr(`Transition`, `TransitionEnd`)}, Zr = {}, Qr = {};
  Cn && (Qr = document.createElement(`div`).style, `AnimationEvent` in window || (delete Xr.animationend.animation, delete Xr.animationiteration.animation, delete Xr.animationstart.animation), `TransitionEvent` in window || delete Xr.transitionend.transition);
  function $r(e2) {
    if (Zr[e2])
      return Zr[e2];
    if (!Xr[e2])
      return e2;
    var t3 = Xr[e2], n3;
    for (n3 in t3)
      if (t3.hasOwnProperty(n3) && n3 in Qr)
        return Zr[e2] = t3[n3];
    return e2;
  }
  var ei = $r(`animationend`), ti = $r(`animationiteration`), ni = $r(`animationstart`), ri = $r(`transitionrun`), ii = $r(`transitionstart`), ai = $r(`transitioncancel`), oi = $r(`transitionend`), si = new Map(), ci = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  ci.push(`scrollEnd`);
  function li(e2, t3) {
    si.set(e2, t3), It(t3, [e2]);
  }
  var ui = typeof reportError == `function` ? reportError : function(e2) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, {bubbles: true, cancelable: true, message: typeof e2 == `object` && e2 && typeof e2.message == `string` ? String(e2.message) : String(e2), error: e2});
      if (!window.dispatchEvent(t3))
        return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e2);
      return;
    }
    console.error(e2);
  }, di = [], fi = 0, pi = 0;
  function mi() {
    for (var e2 = fi, t3 = pi = fi = 0; t3 < e2; ) {
      var n3 = di[t3];
      di[t3++] = null;
      var r2 = di[t3];
      di[t3++] = null;
      var i2 = di[t3];
      di[t3++] = null;
      var a2 = di[t3];
      if (di[t3++] = null, r2 !== null && i2 !== null) {
        var o3 = r2.pending;
        o3 === null ? i2.next = i2 : (i2.next = o3.next, o3.next = i2), r2.pending = i2;
      }
      a2 !== 0 && vi(n3, i2, a2);
    }
  }
  function hi(e2, t3, n3, r2) {
    di[fi++] = e2, di[fi++] = t3, di[fi++] = n3, di[fi++] = r2, pi |= r2, e2.lanes |= r2, e2 = e2.alternate, e2 !== null && (e2.lanes |= r2);
  }
  function gi(e2, t3, n3, r2) {
    return hi(e2, t3, n3, r2), yi(e2);
  }
  function _i(e2, t3) {
    return hi(e2, null, null, t3), yi(e2);
  }
  function vi(e2, t3, n3) {
    e2.lanes |= n3;
    var r2 = e2.alternate;
    r2 !== null && (r2.lanes |= n3);
    for (var i2 = false, a2 = e2.return; a2 !== null; )
      a2.childLanes |= n3, r2 = a2.alternate, r2 !== null && (r2.childLanes |= n3), a2.tag === 22 && (e2 = a2.stateNode, e2 === null || e2._visibility & 1 || (i2 = true)), e2 = a2, a2 = a2.return;
    return e2.tag === 3 ? (a2 = e2.stateNode, i2 && t3 !== null && (i2 = 31 - Qe(n3), e2 = a2.hiddenUpdates, r2 = e2[i2], r2 === null ? e2[i2] = [t3] : r2.push(t3), t3.lane = n3 | 536870912), a2) : null;
  }
  function yi(e2) {
    if (50 < pu)
      throw pu = 0, mu = null, Error(l2(185));
    for (var t3 = e2.return; t3 !== null; )
      e2 = t3, t3 = e2.return;
    return e2.tag === 3 ? e2.stateNode : null;
  }
  var bi = {};
  function xi(e2, t3, n3, r2) {
    this.tag = e2, this.key = n3, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t3, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r2, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Si(e2, t3, n3, r2) {
    return new xi(e2, t3, n3, r2);
  }
  function Ci(e2) {
    return e2 = e2.prototype, !(!e2 || !e2.isReactComponent);
  }
  function wi(e2, t3) {
    var n3 = e2.alternate;
    return n3 === null ? (n3 = Si(e2.tag, t3, e2.key, e2.mode), n3.elementType = e2.elementType, n3.type = e2.type, n3.stateNode = e2.stateNode, n3.alternate = e2, e2.alternate = n3) : (n3.pendingProps = t3, n3.type = e2.type, n3.flags = 0, n3.subtreeFlags = 0, n3.deletions = null), n3.flags = e2.flags & 65011712, n3.childLanes = e2.childLanes, n3.lanes = e2.lanes, n3.child = e2.child, n3.memoizedProps = e2.memoizedProps, n3.memoizedState = e2.memoizedState, n3.updateQueue = e2.updateQueue, t3 = e2.dependencies, n3.dependencies = t3 === null ? null : {lanes: t3.lanes, firstContext: t3.firstContext}, n3.sibling = e2.sibling, n3.index = e2.index, n3.ref = e2.ref, n3.refCleanup = e2.refCleanup, n3;
  }
  function Ti(e2, t3) {
    e2.flags &= 65011714;
    var n3 = e2.alternate;
    return n3 === null ? (e2.childLanes = 0, e2.lanes = t3, e2.child = null, e2.subtreeFlags = 0, e2.memoizedProps = null, e2.memoizedState = null, e2.updateQueue = null, e2.dependencies = null, e2.stateNode = null) : (e2.childLanes = n3.childLanes, e2.lanes = n3.lanes, e2.child = n3.child, e2.subtreeFlags = 0, e2.deletions = null, e2.memoizedProps = n3.memoizedProps, e2.memoizedState = n3.memoizedState, e2.updateQueue = n3.updateQueue, e2.type = n3.type, t3 = n3.dependencies, e2.dependencies = t3 === null ? null : {lanes: t3.lanes, firstContext: t3.firstContext}), e2;
  }
  function Ei(e2, t3, n3, r2, i2, a2) {
    var o3 = 0;
    if (r2 = e2, typeof e2 == `function`)
      Ci(e2) && (o3 = 1);
    else if (typeof e2 == `string`)
      o3 = Gf(e2, n3, be.current) ? 26 : e2 === `html` || e2 === `head` || e2 === `body` ? 27 : 5;
    else
      a:
        switch (e2) {
          case le:
            return e2 = Si(31, n3, t3, i2), e2.elementType = le, e2.lanes = a2, e2;
          case x:
            return Di(n3.children, i2, a2, t3);
          case ee:
            o3 = 8, i2 |= 24;
            break;
          case te:
            return e2 = Si(12, n3, t3, i2 | 2), e2.elementType = te, e2.lanes = a2, e2;
          case ae:
            return e2 = Si(13, n3, t3, i2), e2.elementType = ae, e2.lanes = a2, e2;
          case oe:
            return e2 = Si(19, n3, t3, i2), e2.elementType = oe, e2.lanes = a2, e2;
          default:
            if (typeof e2 == `object` && e2)
              switch (e2.$$typeof) {
                case re:
                  o3 = 10;
                  break a;
                case ne:
                  o3 = 9;
                  break a;
                case ie:
                  o3 = 11;
                  break a;
                case se:
                  o3 = 14;
                  break a;
                case ce:
                  o3 = 16, r2 = null;
                  break a;
              }
            o3 = 29, n3 = Error(l2(130, e2 === null ? `null` : typeof e2, ``)), r2 = null;
        }
    return t3 = Si(o3, n3, t3, i2), t3.elementType = e2, t3.type = r2, t3.lanes = a2, t3;
  }
  function Di(e2, t3, n3, r2) {
    return e2 = Si(7, e2, r2, t3), e2.lanes = n3, e2;
  }
  function Oi(e2, t3, n3) {
    return e2 = Si(6, e2, null, t3), e2.lanes = n3, e2;
  }
  function ki(e2) {
    var t3 = Si(18, null, null, 0);
    return t3.stateNode = e2, t3;
  }
  function Ai(e2, t3, n3) {
    return t3 = Si(4, e2.children === null ? [] : e2.children, e2.key, t3), t3.lanes = n3, t3.stateNode = {containerInfo: e2.containerInfo, pendingChildren: null, implementation: e2.implementation}, t3;
  }
  var ji = new WeakMap();
  function Mi(e2, t3) {
    if (typeof e2 == `object` && e2) {
      var n3 = ji.get(e2);
      return n3 === void 0 ? (t3 = {value: e2, source: t3, stack: Pe(t3)}, ji.set(e2, t3), t3) : n3;
    }
    return {value: e2, source: t3, stack: Pe(t3)};
  }
  var Ni = [], Pi = 0, Fi = null, Ii = 0, Li = [], Ri = 0, zi = null, Bi = 1, Vi = ``;
  function Hi(e2, t3) {
    Ni[Pi++] = Ii, Ni[Pi++] = Fi, Fi = e2, Ii = t3;
  }
  function Ui(e2, t3, n3) {
    Li[Ri++] = Bi, Li[Ri++] = Vi, Li[Ri++] = zi, zi = e2;
    var r2 = Bi;
    e2 = Vi;
    var i2 = 32 - Qe(r2) - 1;
    r2 &= ~(1 << i2), n3 += 1;
    var a2 = 32 - Qe(t3) + i2;
    if (30 < a2) {
      var o3 = i2 - i2 % 5;
      a2 = (r2 & (1 << o3) - 1).toString(32), r2 >>= o3, i2 -= o3, Bi = 1 << 32 - Qe(t3) + i2 | n3 << i2 | r2, Vi = a2 + e2;
    } else
      Bi = 1 << a2 | n3 << i2 | r2, Vi = e2;
  }
  function Wi(e2) {
    e2.return !== null && (Hi(e2, 1), Ui(e2, 1, 0));
  }
  function Gi(e2) {
    for (; e2 === Fi; )
      Fi = Ni[--Pi], Ni[Pi] = null, Ii = Ni[--Pi], Ni[Pi] = null;
    for (; e2 === zi; )
      zi = Li[--Ri], Li[Ri] = null, Vi = Li[--Ri], Li[Ri] = null, Bi = Li[--Ri], Li[Ri] = null;
  }
  function Ki(e2, t3) {
    Li[Ri++] = Bi, Li[Ri++] = Vi, Li[Ri++] = zi, Bi = t3.id, Vi = t3.overflow, zi = e2;
  }
  var D = null, O = null, k = false, qi = null, Ji = false, Yi = Error(l2(519));
  function Xi(e2) {
    throw na(Mi(Error(l2(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? `text` : `HTML`, ``)), e2)), Yi;
  }
  function Zi(e2) {
    var t3 = e2.stateNode, n3 = e2.type, r2 = e2.memoizedProps;
    switch (t3[xt] = e2, t3[St] = r2, n3) {
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
        for (n3 = 0; n3 < yd.length; n3++)
          Q(yd[n3], t3);
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
        Q(`invalid`, t3), en(t3, r2.value, r2.defaultValue, r2.checked, r2.defaultChecked, r2.type, r2.name, true);
        break;
      case `select`:
        Q(`invalid`, t3);
        break;
      case `textarea`:
        Q(`invalid`, t3), an(t3, r2.value, r2.defaultValue, r2.children);
    }
    n3 = r2.children, typeof n3 != `string` && typeof n3 != `number` && typeof n3 != `bigint` || t3.textContent === `` + n3 || r2.suppressHydrationWarning === true || Pd(t3.textContent, n3) ? (r2.popover != null && (Q(`beforetoggle`, t3), Q(`toggle`, t3)), r2.onScroll != null && Q(`scroll`, t3), r2.onScrollEnd != null && Q(`scrollend`, t3), r2.onClick != null && (t3.onclick = mn), t3 = true) : t3 = false, t3 || Xi(e2, true);
  }
  function Qi(e2) {
    for (D = e2.return; D; )
      switch (D.tag) {
        case 5:
        case 31:
        case 13:
          Ji = false;
          return;
        case 27:
        case 3:
          Ji = true;
          return;
        default:
          D = D.return;
      }
  }
  function $i(e2) {
    if (e2 !== D)
      return false;
    if (!k)
      return Qi(e2), k = true, false;
    var t3 = e2.tag, n3;
    if ((n3 = t3 !== 3 && t3 !== 27) && ((n3 = t3 === 5) && (n3 = e2.type, n3 = n3 === `form` || n3 === `button` || Gd(e2.type, e2.memoizedProps)), n3 = !n3), n3 && O && Xi(e2), Qi(e2), t3 === 13) {
      if (e2 = e2.memoizedState, e2 = e2 === null ? null : e2.dehydrated, !e2)
        throw Error(l2(317));
      O = ff(e2);
    } else if (t3 === 31) {
      if (e2 = e2.memoizedState, e2 = e2 === null ? null : e2.dehydrated, !e2)
        throw Error(l2(317));
      O = ff(e2);
    } else
      t3 === 27 ? (t3 = O, $d(e2.type) ? (e2 = df, df = null, O = e2) : O = t3) : O = D ? uf(e2.stateNode.nextSibling) : null;
    return true;
  }
  function ea() {
    O = D = null, k = false;
  }
  function ta() {
    var e2 = qi;
    return e2 !== null && (eu === null ? eu = e2 : eu.push.apply(eu, e2), qi = null), e2;
  }
  function na(e2) {
    qi === null ? qi = [e2] : qi.push(e2);
  }
  var ra = ye(null), ia = null, aa = null;
  function oa(e2, t3, n3) {
    T(ra, t3._currentValue), t3._currentValue = n3;
  }
  function sa(e2) {
    e2._currentValue = ra.current, w(ra);
  }
  function ca(e2, t3, n3) {
    for (; e2 !== null; ) {
      var r2 = e2.alternate;
      if ((e2.childLanes & t3) === t3 ? r2 !== null && (r2.childLanes & t3) !== t3 && (r2.childLanes |= t3) : (e2.childLanes |= t3, r2 !== null && (r2.childLanes |= t3)), e2 === n3)
        break;
      e2 = e2.return;
    }
  }
  function la(e2, t3, n3, r2) {
    var i2 = e2.child;
    for (i2 !== null && (i2.return = e2); i2 !== null; ) {
      var a2 = i2.dependencies;
      if (a2 !== null) {
        var o3 = i2.child;
        a2 = a2.firstContext;
        a:
          for (; a2 !== null; ) {
            var s2 = a2;
            a2 = i2;
            for (var c3 = 0; c3 < t3.length; c3++)
              if (s2.context === t3[c3]) {
                a2.lanes |= n3, s2 = a2.alternate, s2 !== null && (s2.lanes |= n3), ca(a2.return, n3, e2), r2 || (o3 = null);
                break a;
              }
            a2 = s2.next;
          }
      } else if (i2.tag === 18) {
        if (o3 = i2.return, o3 === null)
          throw Error(l2(341));
        o3.lanes |= n3, a2 = o3.alternate, a2 !== null && (a2.lanes |= n3), ca(o3, n3, e2), o3 = null;
      } else
        o3 = i2.child;
      if (o3 !== null)
        o3.return = i2;
      else
        for (o3 = i2; o3 !== null; ) {
          if (o3 === e2) {
            o3 = null;
            break;
          }
          if (i2 = o3.sibling, i2 !== null) {
            i2.return = o3.return, o3 = i2;
            break;
          }
          o3 = o3.return;
        }
      i2 = o3;
    }
  }
  function ua(e2, t3, n3, r2) {
    e2 = null;
    for (var i2 = t3, a2 = false; i2 !== null; ) {
      if (!a2) {
        if (i2.flags & 524288)
          a2 = true;
        else if (i2.flags & 262144)
          break;
      }
      if (i2.tag === 10) {
        var o3 = i2.alternate;
        if (o3 === null)
          throw Error(l2(387));
        if (o3 = o3.memoizedProps, o3 !== null) {
          var s2 = i2.type;
          Ir(i2.pendingProps.value, o3.value) || (e2 === null ? e2 = [s2] : e2.push(s2));
        }
      } else if (i2 === Ce.current) {
        if (o3 = i2.alternate, o3 === null)
          throw Error(l2(387));
        o3.memoizedState.memoizedState !== i2.memoizedState.memoizedState && (e2 === null ? e2 = [ep] : e2.push(ep));
      }
      i2 = i2.return;
    }
    e2 !== null && la(t3, e2, n3, r2), t3.flags |= 262144;
  }
  function da(e2) {
    for (e2 = e2.firstContext; e2 !== null; ) {
      if (!Ir(e2.context._currentValue, e2.memoizedValue))
        return true;
      e2 = e2.next;
    }
    return false;
  }
  function fa(e2) {
    ia = e2, aa = null, e2 = e2.dependencies, e2 !== null && (e2.firstContext = null);
  }
  function A(e2) {
    return ma(ia, e2);
  }
  function pa(e2, t3) {
    return ia === null && fa(e2), ma(e2, t3);
  }
  function ma(e2, t3) {
    var n3 = t3._currentValue;
    if (t3 = {context: t3, memoizedValue: n3, next: null}, aa === null) {
      if (e2 === null)
        throw Error(l2(308));
      aa = t3, e2.dependencies = {lanes: 0, firstContext: t3}, e2.flags |= 524288;
    } else
      aa = aa.next = t3;
    return n3;
  }
  var ha = typeof AbortController < `u` ? AbortController : function() {
    var e2 = [], t3 = this.signal = {aborted: false, addEventListener: function(t4, n3) {
      e2.push(n3);
    }};
    this.abort = function() {
      t3.aborted = true, e2.forEach(function(e3) {
        return e3();
      });
    };
  }, ga = n2.unstable_scheduleCallback, _a = n2.unstable_NormalPriority, j = {$$typeof: re, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0};
  function va() {
    return {controller: new ha(), data: new Map(), refCount: 0};
  }
  function ya(e2) {
    e2.refCount--, e2.refCount === 0 && ga(_a, function() {
      e2.controller.abort();
    });
  }
  var ba = null, xa = 0, Sa = 0, Ca = null;
  function wa(e2, t3) {
    if (ba === null) {
      var n3 = ba = [];
      xa = 0, Sa = pd(), Ca = {status: `pending`, value: void 0, then: function(e3) {
        n3.push(e3);
      }};
    }
    return xa++, t3.then(Ta, Ta), t3;
  }
  function Ta() {
    if (--xa === 0 && ba !== null) {
      Ca !== null && (Ca.status = `fulfilled`);
      var e2 = ba;
      ba = null, Sa = 0, Ca = null;
      for (var t3 = 0; t3 < e2.length; t3++)
        (0, e2[t3])();
    }
  }
  function Ea(e2, t3) {
    var n3 = [], r2 = {status: `pending`, value: null, reason: null, then: function(e3) {
      n3.push(e3);
    }};
    return e2.then(function() {
      r2.status = `fulfilled`, r2.value = t3;
      for (var e3 = 0; e3 < n3.length; e3++)
        (0, n3[e3])(t3);
    }, function(e3) {
      for (r2.status = `rejected`, r2.reason = e3, e3 = 0; e3 < n3.length; e3++)
        (0, n3[e3])(void 0);
    }), r2;
  }
  var Da = S.S;
  S.S = function(e2, t3) {
    ru = Be(), typeof t3 == `object` && t3 && typeof t3.then == `function` && wa(e2, t3), Da !== null && Da(e2, t3);
  };
  var Oa = ye(null);
  function ka() {
    var e2 = Oa.current;
    return e2 === null ? G.pooledCache : e2;
  }
  function Aa(e2, t3) {
    t3 === null ? T(Oa, Oa.current) : T(Oa, t3.pool);
  }
  function ja() {
    var e2 = ka();
    return e2 === null ? null : {parent: j._currentValue, pool: e2};
  }
  var Ma = Error(l2(460)), Na = Error(l2(474)), Pa = Error(l2(542)), Fa = {then: function() {
  }};
  function Ia(e2) {
    return e2 = e2.status, e2 === `fulfilled` || e2 === `rejected`;
  }
  function La(e2, t3, n3) {
    switch (n3 = e2[n3], n3 === void 0 ? e2.push(t3) : n3 !== t3 && (t3.then(mn, mn), t3 = n3), t3.status) {
      case `fulfilled`:
        return t3.value;
      case `rejected`:
        throw e2 = t3.reason, Va(e2), e2;
      default:
        if (typeof t3.status == `string`)
          t3.then(mn, mn);
        else {
          if (e2 = G, e2 !== null && 100 < e2.shellSuspendCounter)
            throw Error(l2(482));
          e2 = t3, e2.status = `pending`, e2.then(function(e3) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `fulfilled`, n4.value = e3;
            }
          }, function(e3) {
            if (t3.status === `pending`) {
              var n4 = t3;
              n4.status = `rejected`, n4.reason = e3;
            }
          });
        }
        switch (t3.status) {
          case `fulfilled`:
            return t3.value;
          case `rejected`:
            throw e2 = t3.reason, Va(e2), e2;
        }
        throw za = t3, Ma;
    }
  }
  function Ra(e2) {
    try {
      var t3 = e2._init;
      return t3(e2._payload);
    } catch (e3) {
      throw typeof e3 == `object` && e3 && typeof e3.then == `function` ? (za = e3, Ma) : e3;
    }
  }
  var za = null;
  function Ba() {
    if (za === null)
      throw Error(l2(459));
    var e2 = za;
    return za = null, e2;
  }
  function Va(e2) {
    if (e2 === Ma || e2 === Pa)
      throw Error(l2(483));
  }
  var Ha = null, Ua = 0;
  function Wa(e2) {
    var t3 = Ua;
    return Ua += 1, Ha === null && (Ha = []), La(Ha, e2, t3);
  }
  function Ga(e2, t3) {
    t3 = t3.props.ref, e2.ref = t3 === void 0 ? null : t3;
  }
  function Ka(e2, t3) {
    throw t3.$$typeof === v ? Error(l2(525)) : (e2 = Object.prototype.toString.call(t3), Error(l2(31, e2 === `[object Object]` ? `object with keys {` + Object.keys(t3).join(`, `) + `}` : e2)));
  }
  function qa(e2) {
    function t3(t4, n4) {
      if (e2) {
        var r3 = t4.deletions;
        r3 === null ? (t4.deletions = [n4], t4.flags |= 16) : r3.push(n4);
      }
    }
    function n3(n4, r3) {
      if (!e2)
        return null;
      for (; r3 !== null; )
        t3(n4, r3), r3 = r3.sibling;
      return null;
    }
    function r2(e3) {
      for (var t4 = new Map(); e3 !== null; )
        e3.key === null ? t4.set(e3.index, e3) : t4.set(e3.key, e3), e3 = e3.sibling;
      return t4;
    }
    function i2(e3, t4) {
      return e3 = wi(e3, t4), e3.index = 0, e3.sibling = null, e3;
    }
    function a2(t4, n4, r3) {
      return t4.index = r3, e2 ? (r3 = t4.alternate, r3 === null ? (t4.flags |= 67108866, n4) : (r3 = r3.index, r3 < n4 ? (t4.flags |= 67108866, n4) : r3)) : (t4.flags |= 1048576, n4);
    }
    function o3(t4) {
      return e2 && t4.alternate === null && (t4.flags |= 67108866), t4;
    }
    function s2(e3, t4, n4, r3) {
      return t4 === null || t4.tag !== 6 ? (t4 = Oi(n4, e3.mode, r3), t4.return = e3, t4) : (t4 = i2(t4, n4), t4.return = e3, t4);
    }
    function c3(e3, t4, n4, r3) {
      var a3 = n4.type;
      return a3 === x ? d3(e3, t4, n4.props.children, r3, n4.key) : t4 !== null && (t4.elementType === a3 || typeof a3 == `object` && a3 && a3.$$typeof === ce && Ra(a3) === t4.type) ? (t4 = i2(t4, n4.props), Ga(t4, n4), t4.return = e3, t4) : (t4 = Ei(n4.type, n4.key, n4.props, null, e3.mode, r3), Ga(t4, n4), t4.return = e3, t4);
    }
    function u3(e3, t4, n4, r3) {
      return t4 === null || t4.tag !== 4 || t4.stateNode.containerInfo !== n4.containerInfo || t4.stateNode.implementation !== n4.implementation ? (t4 = Ai(n4, e3.mode, r3), t4.return = e3, t4) : (t4 = i2(t4, n4.children || []), t4.return = e3, t4);
    }
    function d3(e3, t4, n4, r3, a3) {
      return t4 === null || t4.tag !== 7 ? (t4 = Di(n4, e3.mode, r3, a3), t4.return = e3, t4) : (t4 = i2(t4, n4), t4.return = e3, t4);
    }
    function f3(e3, t4, n4) {
      if (typeof t4 == `string` && t4 !== `` || typeof t4 == `number` || typeof t4 == `bigint`)
        return t4 = Oi(`` + t4, e3.mode, n4), t4.return = e3, t4;
      if (typeof t4 == `object` && t4) {
        switch (t4.$$typeof) {
          case y:
            return n4 = Ei(t4.type, t4.key, t4.props, null, e3.mode, n4), Ga(n4, t4), n4.return = e3, n4;
          case b:
            return t4 = Ai(t4, e3.mode, n4), t4.return = e3, t4;
          case ce:
            return t4 = Ra(t4), f3(e3, t4, n4);
        }
        if (he(t4) || fe(t4))
          return t4 = Di(t4, e3.mode, n4, null), t4.return = e3, t4;
        if (typeof t4.then == `function`)
          return f3(e3, Wa(t4), n4);
        if (t4.$$typeof === re)
          return f3(e3, pa(e3, t4), n4);
        Ka(e3, t4);
      }
      return null;
    }
    function p3(e3, t4, n4, r3) {
      var i3 = t4 === null ? null : t4.key;
      if (typeof n4 == `string` && n4 !== `` || typeof n4 == `number` || typeof n4 == `bigint`)
        return i3 === null ? s2(e3, t4, `` + n4, r3) : null;
      if (typeof n4 == `object` && n4) {
        switch (n4.$$typeof) {
          case y:
            return n4.key === i3 ? c3(e3, t4, n4, r3) : null;
          case b:
            return n4.key === i3 ? u3(e3, t4, n4, r3) : null;
          case ce:
            return n4 = Ra(n4), p3(e3, t4, n4, r3);
        }
        if (he(n4) || fe(n4))
          return i3 === null ? d3(e3, t4, n4, r3, null) : null;
        if (typeof n4.then == `function`)
          return p3(e3, t4, Wa(n4), r3);
        if (n4.$$typeof === re)
          return p3(e3, t4, pa(e3, n4), r3);
        Ka(e3, n4);
      }
      return null;
    }
    function m3(e3, t4, n4, r3, i3) {
      if (typeof r3 == `string` && r3 !== `` || typeof r3 == `number` || typeof r3 == `bigint`)
        return e3 = e3.get(n4) || null, s2(t4, e3, `` + r3, i3);
      if (typeof r3 == `object` && r3) {
        switch (r3.$$typeof) {
          case y:
            return e3 = e3.get(r3.key === null ? n4 : r3.key) || null, c3(t4, e3, r3, i3);
          case b:
            return e3 = e3.get(r3.key === null ? n4 : r3.key) || null, u3(t4, e3, r3, i3);
          case ce:
            return r3 = Ra(r3), m3(e3, t4, n4, r3, i3);
        }
        if (he(r3) || fe(r3))
          return e3 = e3.get(n4) || null, d3(t4, e3, r3, i3, null);
        if (typeof r3.then == `function`)
          return m3(e3, t4, n4, Wa(r3), i3);
        if (r3.$$typeof === re)
          return m3(e3, t4, n4, pa(t4, r3), i3);
        Ka(t4, r3);
      }
      return null;
    }
    function h2(i3, o4, s3, c4) {
      for (var l3 = null, u4 = null, d4 = o4, h3 = o4 = 0, g3 = null; d4 !== null && h3 < s3.length; h3++) {
        d4.index > h3 ? (g3 = d4, d4 = null) : g3 = d4.sibling;
        var _3 = p3(i3, d4, s3[h3], c4);
        if (_3 === null) {
          d4 === null && (d4 = g3);
          break;
        }
        e2 && d4 && _3.alternate === null && t3(i3, d4), o4 = a2(_3, o4, h3), u4 === null ? l3 = _3 : u4.sibling = _3, u4 = _3, d4 = g3;
      }
      if (h3 === s3.length)
        return n3(i3, d4), k && Hi(i3, h3), l3;
      if (d4 === null) {
        for (; h3 < s3.length; h3++)
          d4 = f3(i3, s3[h3], c4), d4 !== null && (o4 = a2(d4, o4, h3), u4 === null ? l3 = d4 : u4.sibling = d4, u4 = d4);
        return k && Hi(i3, h3), l3;
      }
      for (d4 = r2(d4); h3 < s3.length; h3++)
        g3 = m3(d4, i3, h3, s3[h3], c4), g3 !== null && (e2 && g3.alternate !== null && d4.delete(g3.key === null ? h3 : g3.key), o4 = a2(g3, o4, h3), u4 === null ? l3 = g3 : u4.sibling = g3, u4 = g3);
      return e2 && d4.forEach(function(e3) {
        return t3(i3, e3);
      }), k && Hi(i3, h3), l3;
    }
    function g2(i3, o4, s3, c4) {
      if (s3 == null)
        throw Error(l2(151));
      for (var u4 = null, d4 = null, h3 = o4, g3 = o4 = 0, _3 = null, v2 = s3.next(); h3 !== null && !v2.done; g3++, v2 = s3.next()) {
        h3.index > g3 ? (_3 = h3, h3 = null) : _3 = h3.sibling;
        var y2 = p3(i3, h3, v2.value, c4);
        if (y2 === null) {
          h3 === null && (h3 = _3);
          break;
        }
        e2 && h3 && y2.alternate === null && t3(i3, h3), o4 = a2(y2, o4, g3), d4 === null ? u4 = y2 : d4.sibling = y2, d4 = y2, h3 = _3;
      }
      if (v2.done)
        return n3(i3, h3), k && Hi(i3, g3), u4;
      if (h3 === null) {
        for (; !v2.done; g3++, v2 = s3.next())
          v2 = f3(i3, v2.value, c4), v2 !== null && (o4 = a2(v2, o4, g3), d4 === null ? u4 = v2 : d4.sibling = v2, d4 = v2);
        return k && Hi(i3, g3), u4;
      }
      for (h3 = r2(h3); !v2.done; g3++, v2 = s3.next())
        v2 = m3(h3, i3, g3, v2.value, c4), v2 !== null && (e2 && v2.alternate !== null && h3.delete(v2.key === null ? g3 : v2.key), o4 = a2(v2, o4, g3), d4 === null ? u4 = v2 : d4.sibling = v2, d4 = v2);
      return e2 && h3.forEach(function(e3) {
        return t3(i3, e3);
      }), k && Hi(i3, g3), u4;
    }
    function _2(e3, r3, a3, s3) {
      if (typeof a3 == `object` && a3 && a3.type === x && a3.key === null && (a3 = a3.props.children), typeof a3 == `object` && a3) {
        switch (a3.$$typeof) {
          case y:
            a: {
              for (var c4 = a3.key; r3 !== null; ) {
                if (r3.key === c4) {
                  if (c4 = a3.type, c4 === x) {
                    if (r3.tag === 7) {
                      n3(e3, r3.sibling), s3 = i2(r3, a3.props.children), s3.return = e3, e3 = s3;
                      break a;
                    }
                  } else if (r3.elementType === c4 || typeof c4 == `object` && c4 && c4.$$typeof === ce && Ra(c4) === r3.type) {
                    n3(e3, r3.sibling), s3 = i2(r3, a3.props), Ga(s3, a3), s3.return = e3, e3 = s3;
                    break a;
                  }
                  n3(e3, r3);
                  break;
                }
                t3(e3, r3), r3 = r3.sibling;
              }
              a3.type === x ? (s3 = Di(a3.props.children, e3.mode, s3, a3.key), s3.return = e3, e3 = s3) : (s3 = Ei(a3.type, a3.key, a3.props, null, e3.mode, s3), Ga(s3, a3), s3.return = e3, e3 = s3);
            }
            return o3(e3);
          case b:
            a: {
              for (c4 = a3.key; r3 !== null; ) {
                if (r3.key === c4) {
                  if (r3.tag === 4 && r3.stateNode.containerInfo === a3.containerInfo && r3.stateNode.implementation === a3.implementation) {
                    n3(e3, r3.sibling), s3 = i2(r3, a3.children || []), s3.return = e3, e3 = s3;
                    break a;
                  }
                  n3(e3, r3);
                  break;
                }
                t3(e3, r3), r3 = r3.sibling;
              }
              s3 = Ai(a3, e3.mode, s3), s3.return = e3, e3 = s3;
            }
            return o3(e3);
          case ce:
            return a3 = Ra(a3), _2(e3, r3, a3, s3);
        }
        if (he(a3))
          return h2(e3, r3, a3, s3);
        if (fe(a3)) {
          if (c4 = fe(a3), typeof c4 != `function`)
            throw Error(l2(150));
          return a3 = c4.call(a3), g2(e3, r3, a3, s3);
        }
        if (typeof a3.then == `function`)
          return _2(e3, r3, Wa(a3), s3);
        if (a3.$$typeof === re)
          return _2(e3, r3, pa(e3, a3), s3);
        Ka(e3, a3);
      }
      return typeof a3 == `string` && a3 !== `` || typeof a3 == `number` || typeof a3 == `bigint` ? (a3 = `` + a3, r3 !== null && r3.tag === 6 ? (n3(e3, r3.sibling), s3 = i2(r3, a3), s3.return = e3, e3 = s3) : (n3(e3, r3), s3 = Oi(a3, e3.mode, s3), s3.return = e3, e3 = s3), o3(e3)) : n3(e3, r3);
    }
    return function(e3, t4, n4, r3) {
      try {
        Ua = 0;
        var i3 = _2(e3, t4, n4, r3);
        return Ha = null, i3;
      } catch (t5) {
        if (t5 === Ma || t5 === Pa)
          throw t5;
        var a3 = Si(29, t5, null, e3.mode);
        return a3.lanes = r3, a3.return = e3, a3;
      }
    };
  }
  var Ja = qa(true), Ya = qa(false), Xa = false;
  function Za(e2) {
    e2.updateQueue = {baseState: e2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: {pending: null, lanes: 0, hiddenCallbacks: null}, callbacks: null};
  }
  function Qa(e2, t3) {
    e2 = e2.updateQueue, t3.updateQueue === e2 && (t3.updateQueue = {baseState: e2.baseState, firstBaseUpdate: e2.firstBaseUpdate, lastBaseUpdate: e2.lastBaseUpdate, shared: e2.shared, callbacks: null});
  }
  function $a(e2) {
    return {lane: e2, tag: 0, payload: null, callback: null, next: null};
  }
  function eo(e2, t3, n3) {
    var r2 = e2.updateQueue;
    if (r2 === null)
      return null;
    if (r2 = r2.shared, W & 2) {
      var i2 = r2.pending;
      return i2 === null ? t3.next = t3 : (t3.next = i2.next, i2.next = t3), r2.pending = t3, t3 = yi(e2), vi(e2, null, n3), t3;
    }
    return hi(e2, r2, t3, n3), yi(e2);
  }
  function to(e2, t3, n3) {
    if (t3 = t3.updateQueue, t3 !== null && (t3 = t3.shared, n3 & 4194048)) {
      var r2 = t3.lanes;
      r2 &= e2.pendingLanes, n3 |= r2, t3.lanes = n3, mt(e2, n3);
    }
  }
  function no(e2, t3) {
    var n3 = e2.updateQueue, r2 = e2.alternate;
    if (r2 !== null && (r2 = r2.updateQueue, n3 === r2)) {
      var i2 = null, a2 = null;
      if (n3 = n3.firstBaseUpdate, n3 !== null) {
        do {
          var o3 = {lane: n3.lane, tag: n3.tag, payload: n3.payload, callback: null, next: null};
          a2 === null ? i2 = a2 = o3 : a2 = a2.next = o3, n3 = n3.next;
        } while (n3 !== null);
        a2 === null ? i2 = a2 = t3 : a2 = a2.next = t3;
      } else
        i2 = a2 = t3;
      n3 = {baseState: r2.baseState, firstBaseUpdate: i2, lastBaseUpdate: a2, shared: r2.shared, callbacks: r2.callbacks}, e2.updateQueue = n3;
      return;
    }
    e2 = n3.lastBaseUpdate, e2 === null ? n3.firstBaseUpdate = t3 : e2.next = t3, n3.lastBaseUpdate = t3;
  }
  var ro = false;
  function io() {
    if (ro) {
      var e2 = Ca;
      if (e2 !== null)
        throw e2;
    }
  }
  function ao(e2, t3, n3, r2) {
    ro = false;
    var i2 = e2.updateQueue;
    Xa = false;
    var a2 = i2.firstBaseUpdate, o3 = i2.lastBaseUpdate, s2 = i2.shared.pending;
    if (s2 !== null) {
      i2.shared.pending = null;
      var c3 = s2, l3 = c3.next;
      c3.next = null, o3 === null ? a2 = l3 : o3.next = l3, o3 = c3;
      var u3 = e2.alternate;
      u3 !== null && (u3 = u3.updateQueue, s2 = u3.lastBaseUpdate, s2 !== o3 && (s2 === null ? u3.firstBaseUpdate = l3 : s2.next = l3, u3.lastBaseUpdate = c3));
    }
    if (a2 !== null) {
      var d3 = i2.baseState;
      o3 = 0, u3 = l3 = c3 = null, s2 = a2;
      do {
        var f3 = s2.lane & -536870913, p3 = f3 !== s2.lane;
        if (p3 ? (q & f3) === f3 : (r2 & f3) === f3) {
          f3 !== 0 && f3 === Sa && (ro = true), u3 !== null && (u3 = u3.next = {lane: 0, tag: s2.tag, payload: s2.payload, callback: null, next: null});
          a: {
            var m3 = e2, h2 = s2;
            f3 = t3;
            var g2 = n3;
            switch (h2.tag) {
              case 1:
                if (m3 = h2.payload, typeof m3 == `function`) {
                  d3 = m3.call(g2, d3, f3);
                  break a;
                }
                d3 = m3;
                break a;
              case 3:
                m3.flags = m3.flags & -65537 | 128;
              case 0:
                if (m3 = h2.payload, f3 = typeof m3 == `function` ? m3.call(g2, d3, f3) : m3, f3 == null)
                  break a;
                d3 = _({}, d3, f3);
                break a;
              case 2:
                Xa = true;
            }
          }
          f3 = s2.callback, f3 !== null && (e2.flags |= 64, p3 && (e2.flags |= 8192), p3 = i2.callbacks, p3 === null ? i2.callbacks = [f3] : p3.push(f3));
        } else
          p3 = {lane: f3, tag: s2.tag, payload: s2.payload, callback: s2.callback, next: null}, u3 === null ? (l3 = u3 = p3, c3 = d3) : u3 = u3.next = p3, o3 |= f3;
        if (s2 = s2.next, s2 === null) {
          if (s2 = i2.shared.pending, s2 === null)
            break;
          p3 = s2, s2 = p3.next, p3.next = null, i2.lastBaseUpdate = p3, i2.shared.pending = null;
        }
      } while (1);
      u3 === null && (c3 = d3), i2.baseState = c3, i2.firstBaseUpdate = l3, i2.lastBaseUpdate = u3, a2 === null && (i2.shared.lanes = 0), Jl |= o3, e2.lanes = o3, e2.memoizedState = d3;
    }
  }
  function oo(e2, t3) {
    if (typeof e2 != `function`)
      throw Error(l2(191, e2));
    e2.call(t3);
  }
  function so(e2, t3) {
    var n3 = e2.callbacks;
    if (n3 !== null)
      for (e2.callbacks = null, e2 = 0; e2 < n3.length; e2++)
        oo(n3[e2], t3);
  }
  var co = ye(null), lo = ye(0);
  function uo(e2, t3) {
    e2 = ql, T(lo, e2), T(co, t3), ql = e2 | t3.baseLanes;
  }
  function fo() {
    T(lo, ql), T(co, co.current);
  }
  function po() {
    ql = lo.current, w(co), w(lo);
  }
  var mo = ye(null), ho = null;
  function go(e2) {
    var t3 = e2.alternate;
    T(M, M.current & 1), T(mo, e2), ho === null && (t3 === null || co.current !== null || t3.memoizedState !== null) && (ho = e2);
  }
  function _o(e2) {
    T(M, M.current), T(mo, e2), ho === null && (ho = e2);
  }
  function vo(e2) {
    e2.tag === 22 ? (T(M, M.current), T(mo, e2), ho === null && (ho = e2)) : yo(e2);
  }
  function yo() {
    T(M, M.current), T(mo, mo.current);
  }
  function bo(e2) {
    w(mo), ho === e2 && (ho = null), w(M);
  }
  var M = ye(0);
  function xo(e2) {
    for (var t3 = e2; t3 !== null; ) {
      if (t3.tag === 13) {
        var n3 = t3.memoizedState;
        if (n3 !== null && (n3 = n3.dehydrated, n3 === null || sf(n3) || cf(n3)))
          return t3;
      } else if (t3.tag === 19 && (t3.memoizedProps.revealOrder === `forwards` || t3.memoizedProps.revealOrder === `backwards` || t3.memoizedProps.revealOrder === `unstable_legacy-backwards` || t3.memoizedProps.revealOrder === `together`)) {
        if (t3.flags & 128)
          return t3;
      } else if (t3.child !== null) {
        t3.child.return = t3, t3 = t3.child;
        continue;
      }
      if (t3 === e2)
        break;
      for (; t3.sibling === null; ) {
        if (t3.return === null || t3.return === e2)
          return null;
        t3 = t3.return;
      }
      t3.sibling.return = t3.return, t3 = t3.sibling;
    }
    return null;
  }
  var So = 0, N = null, P = null, F = null, Co = false, wo = false, To = false, Eo = 0, Do = 0, Oo = null, ko = 0;
  function I() {
    throw Error(l2(321));
  }
  function Ao(e2, t3) {
    if (t3 === null)
      return false;
    for (var n3 = 0; n3 < t3.length && n3 < e2.length; n3++)
      if (!Ir(e2[n3], t3[n3]))
        return false;
    return true;
  }
  function jo(e2, t3, n3, r2, i2, a2) {
    return So = a2, N = t3, t3.memoizedState = null, t3.updateQueue = null, t3.lanes = 0, S.H = e2 === null || e2.memoizedState === null ? qs : Js, To = false, a2 = n3(r2, i2), To = false, wo && (a2 = No(t3, n3, r2, i2)), Mo(e2), a2;
  }
  function Mo(e2) {
    S.H = Ks;
    var t3 = P !== null && P.next !== null;
    if (So = 0, F = P = N = null, Co = false, Do = 0, Oo = null, t3)
      throw Error(l2(300));
    e2 === null || R || (e2 = e2.dependencies, e2 !== null && da(e2) && (R = true));
  }
  function No(e2, t3, n3, r2) {
    N = e2;
    var i2 = 0;
    do {
      if (wo && (Oo = null), Do = 0, wo = false, 25 <= i2)
        throw Error(l2(301));
      if (i2 += 1, F = P = null, e2.updateQueue != null) {
        var a2 = e2.updateQueue;
        a2.lastEffect = null, a2.events = null, a2.stores = null, a2.memoCache != null && (a2.memoCache.index = 0);
      }
      S.H = Ys, a2 = t3(n3, r2);
    } while (wo);
    return a2;
  }
  function Po() {
    var e2 = S.H, t3 = e2.useState()[0];
    return t3 = typeof t3.then == `function` ? Bo(t3) : t3, e2 = e2.useState()[0], (P === null ? null : P.memoizedState) !== e2 && (N.flags |= 1024), t3;
  }
  function Fo() {
    var e2 = Eo !== 0;
    return Eo = 0, e2;
  }
  function Io(e2, t3, n3) {
    t3.updateQueue = e2.updateQueue, t3.flags &= -2053, e2.lanes &= ~n3;
  }
  function Lo(e2) {
    if (Co) {
      for (e2 = e2.memoizedState; e2 !== null; ) {
        var t3 = e2.queue;
        t3 !== null && (t3.pending = null), e2 = e2.next;
      }
      Co = false;
    }
    So = 0, F = P = N = null, wo = false, Do = Eo = 0, Oo = null;
  }
  function Ro() {
    var e2 = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
    return F === null ? N.memoizedState = F = e2 : F = F.next = e2, F;
  }
  function L() {
    if (P === null) {
      var e2 = N.alternate;
      e2 = e2 === null ? null : e2.memoizedState;
    } else
      e2 = P.next;
    var t3 = F === null ? N.memoizedState : F.next;
    if (t3 !== null)
      F = t3, P = e2;
    else {
      if (e2 === null)
        throw N.alternate === null ? Error(l2(467)) : Error(l2(310));
      P = e2, e2 = {memoizedState: P.memoizedState, baseState: P.baseState, baseQueue: P.baseQueue, queue: P.queue, next: null}, F === null ? N.memoizedState = F = e2 : F = F.next = e2;
    }
    return F;
  }
  function zo() {
    return {lastEffect: null, events: null, stores: null, memoCache: null};
  }
  function Bo(e2) {
    var t3 = Do;
    return Do += 1, Oo === null && (Oo = []), e2 = La(Oo, e2, t3), t3 = N, (F === null ? t3.memoizedState : F.next) === null && (t3 = t3.alternate, S.H = t3 === null || t3.memoizedState === null ? qs : Js), e2;
  }
  function Vo(e2) {
    if (typeof e2 == `object` && e2) {
      if (typeof e2.then == `function`)
        return Bo(e2);
      if (e2.$$typeof === re)
        return A(e2);
    }
    throw Error(l2(438, String(e2)));
  }
  function Ho(e2) {
    var t3 = null, n3 = N.updateQueue;
    if (n3 !== null && (t3 = n3.memoCache), t3 == null) {
      var r2 = N.alternate;
      r2 !== null && (r2 = r2.updateQueue, r2 !== null && (r2 = r2.memoCache, r2 != null && (t3 = {data: r2.data.map(function(e3) {
        return e3.slice();
      }), index: 0})));
    }
    if (t3 ?? (t3 = {data: [], index: 0}), n3 === null && (n3 = zo(), N.updateQueue = n3), n3.memoCache = t3, n3 = t3.data[t3.index], n3 === void 0)
      for (n3 = t3.data[t3.index] = Array(e2), r2 = 0; r2 < e2; r2++)
        n3[r2] = ue;
    return t3.index++, n3;
  }
  function Uo(e2, t3) {
    return typeof t3 == `function` ? t3(e2) : t3;
  }
  function Wo(e2) {
    return Go(L(), P, e2);
  }
  function Go(e2, t3, n3) {
    var r2 = e2.queue;
    if (r2 === null)
      throw Error(l2(311));
    r2.lastRenderedReducer = n3;
    var i2 = e2.baseQueue, a2 = r2.pending;
    if (a2 !== null) {
      if (i2 !== null) {
        var o3 = i2.next;
        i2.next = a2.next, a2.next = o3;
      }
      t3.baseQueue = i2 = a2, r2.pending = null;
    }
    if (a2 = e2.baseState, i2 === null)
      e2.memoizedState = a2;
    else {
      t3 = i2.next;
      var s2 = o3 = null, c3 = null, u3 = t3, d3 = false;
      do {
        var f3 = u3.lane & -536870913;
        if (f3 === u3.lane ? (So & f3) === f3 : (q & f3) === f3) {
          var p3 = u3.revertLane;
          if (p3 === 0)
            c3 !== null && (c3 = c3.next = {lane: 0, revertLane: 0, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null}), f3 === Sa && (d3 = true);
          else if ((So & p3) === p3) {
            u3 = u3.next, p3 === Sa && (d3 = true);
            continue;
          } else
            f3 = {lane: 0, revertLane: u3.revertLane, gesture: null, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null}, c3 === null ? (s2 = c3 = f3, o3 = a2) : c3 = c3.next = f3, N.lanes |= p3, Jl |= p3;
          f3 = u3.action, To && n3(a2, f3), a2 = u3.hasEagerState ? u3.eagerState : n3(a2, f3);
        } else
          p3 = {lane: f3, revertLane: u3.revertLane, gesture: u3.gesture, action: u3.action, hasEagerState: u3.hasEagerState, eagerState: u3.eagerState, next: null}, c3 === null ? (s2 = c3 = p3, o3 = a2) : c3 = c3.next = p3, N.lanes |= f3, Jl |= f3;
        u3 = u3.next;
      } while (u3 !== null && u3 !== t3);
      if (c3 === null ? o3 = a2 : c3.next = s2, !Ir(a2, e2.memoizedState) && (R = true, d3 && (n3 = Ca, n3 !== null)))
        throw n3;
      e2.memoizedState = a2, e2.baseState = o3, e2.baseQueue = c3, r2.lastRenderedState = a2;
    }
    return i2 === null && (r2.lanes = 0), [e2.memoizedState, r2.dispatch];
  }
  function Ko(e2) {
    var t3 = L(), n3 = t3.queue;
    if (n3 === null)
      throw Error(l2(311));
    n3.lastRenderedReducer = e2;
    var r2 = n3.dispatch, i2 = n3.pending, a2 = t3.memoizedState;
    if (i2 !== null) {
      n3.pending = null;
      var o3 = i2 = i2.next;
      do
        a2 = e2(a2, o3.action), o3 = o3.next;
      while (o3 !== i2);
      Ir(a2, t3.memoizedState) || (R = true), t3.memoizedState = a2, t3.baseQueue === null && (t3.baseState = a2), n3.lastRenderedState = a2;
    }
    return [a2, r2];
  }
  function qo(e2, t3, n3) {
    var r2 = N, i2 = L(), a2 = k;
    if (a2) {
      if (n3 === void 0)
        throw Error(l2(407));
      n3 = n3();
    } else
      n3 = t3();
    var o3 = !Ir((P || i2).memoizedState, n3);
    if (o3 && (i2.memoizedState = n3, R = true), i2 = i2.queue, vs(Xo.bind(null, r2, i2, e2), [e2]), i2.getSnapshot !== t3 || o3 || F !== null && F.memoizedState.tag & 1) {
      if (r2.flags |= 2048, ps(9, {destroy: void 0}, Yo.bind(null, r2, i2, n3, t3), null), G === null)
        throw Error(l2(349));
      a2 || So & 127 || Jo(r2, t3, n3);
    }
    return n3;
  }
  function Jo(e2, t3, n3) {
    e2.flags |= 16384, e2 = {getSnapshot: t3, value: n3}, t3 = N.updateQueue, t3 === null ? (t3 = zo(), N.updateQueue = t3, t3.stores = [e2]) : (n3 = t3.stores, n3 === null ? t3.stores = [e2] : n3.push(e2));
  }
  function Yo(e2, t3, n3, r2) {
    t3.value = n3, t3.getSnapshot = r2, Zo(t3) && Qo(e2);
  }
  function Xo(e2, t3, n3) {
    return n3(function() {
      Zo(t3) && Qo(e2);
    });
  }
  function Zo(e2) {
    var t3 = e2.getSnapshot;
    e2 = e2.value;
    try {
      var n3 = t3();
      return !Ir(e2, n3);
    } catch {
      return true;
    }
  }
  function Qo(e2) {
    var t3 = _i(e2, 2);
    t3 !== null && _u(t3, e2, 2);
  }
  function $o(e2) {
    var t3 = Ro();
    if (typeof e2 == `function`) {
      var n3 = e2;
      if (e2 = n3(), To) {
        Ze(true);
        try {
          n3();
        } finally {
          Ze(false);
        }
      }
    }
    return t3.memoizedState = t3.baseState = e2, t3.queue = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Uo, lastRenderedState: e2}, t3;
  }
  function es(e2, t3, n3, r2) {
    return e2.baseState = n3, Go(e2, P, typeof r2 == `function` ? r2 : Uo);
  }
  function ts(e2, t3, n3, r2, i2) {
    if (Us(e2))
      throw Error(l2(485));
    if (e2 = t3.action, e2 !== null) {
      var a2 = {payload: i2, action: e2, next: null, isTransition: true, status: `pending`, value: null, reason: null, listeners: [], then: function(e3) {
        a2.listeners.push(e3);
      }};
      S.T === null ? a2.isTransition = false : n3(true), r2(a2), n3 = t3.pending, n3 === null ? (a2.next = t3.pending = a2, ns(t3, a2)) : (a2.next = n3.next, t3.pending = n3.next = a2);
    }
  }
  function ns(e2, t3) {
    var n3 = t3.action, r2 = t3.payload, i2 = e2.state;
    if (t3.isTransition) {
      var a2 = S.T, o3 = {};
      S.T = o3;
      try {
        var s2 = n3(i2, r2), c3 = S.S;
        c3 !== null && c3(o3, s2), rs(e2, t3, s2);
      } catch (n4) {
        as(e2, t3, n4);
      } finally {
        a2 !== null && o3.types !== null && (a2.types = o3.types), S.T = a2;
      }
    } else
      try {
        a2 = n3(i2, r2), rs(e2, t3, a2);
      } catch (n4) {
        as(e2, t3, n4);
      }
  }
  function rs(e2, t3, n3) {
    typeof n3 == `object` && n3 && typeof n3.then == `function` ? n3.then(function(n4) {
      is(e2, t3, n4);
    }, function(n4) {
      return as(e2, t3, n4);
    }) : is(e2, t3, n3);
  }
  function is(e2, t3, n3) {
    t3.status = `fulfilled`, t3.value = n3, os(t3), e2.state = n3, t3 = e2.pending, t3 !== null && (n3 = t3.next, n3 === t3 ? e2.pending = null : (n3 = n3.next, t3.next = n3, ns(e2, n3)));
  }
  function as(e2, t3, n3) {
    var r2 = e2.pending;
    if (e2.pending = null, r2 !== null) {
      r2 = r2.next;
      do
        t3.status = `rejected`, t3.reason = n3, os(t3), t3 = t3.next;
      while (t3 !== r2);
    }
    e2.action = null;
  }
  function os(e2) {
    e2 = e2.listeners;
    for (var t3 = 0; t3 < e2.length; t3++)
      (0, e2[t3])();
  }
  function ss(e2, t3) {
    return t3;
  }
  function cs(e2, t3) {
    if (k) {
      var n3 = G.formState;
      if (n3 !== null) {
        a: {
          var r2 = N;
          if (k) {
            if (O) {
              b: {
                for (var i2 = O, a2 = Ji; i2.nodeType !== 8; ) {
                  if (!a2) {
                    i2 = null;
                    break b;
                  }
                  if (i2 = uf(i2.nextSibling), i2 === null) {
                    i2 = null;
                    break b;
                  }
                }
                a2 = i2.data, i2 = a2 === `F!` || a2 === `F` ? i2 : null;
              }
              if (i2) {
                O = uf(i2.nextSibling), r2 = i2.data === `F!`;
                break a;
              }
            }
            Xi(r2);
          }
          r2 = false;
        }
        r2 && (t3 = n3[0]);
      }
    }
    return n3 = Ro(), n3.memoizedState = n3.baseState = t3, r2 = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: ss, lastRenderedState: t3}, n3.queue = r2, n3 = Bs.bind(null, N, r2), r2.dispatch = n3, r2 = $o(false), a2 = Hs.bind(null, N, false, r2.queue), r2 = Ro(), i2 = {state: t3, dispatch: null, action: e2, pending: null}, r2.queue = i2, n3 = ts.bind(null, N, i2, a2, n3), i2.dispatch = n3, r2.memoizedState = e2, [t3, n3, false];
  }
  function ls(e2) {
    return us(L(), P, e2);
  }
  function us(e2, t3, n3) {
    if (t3 = Go(e2, t3, ss)[0], e2 = Wo(Uo)[0], typeof t3 == `object` && t3 && typeof t3.then == `function`)
      try {
        var r2 = Bo(t3);
      } catch (e3) {
        throw e3 === Ma ? Pa : e3;
      }
    else
      r2 = t3;
    t3 = L();
    var i2 = t3.queue, a2 = i2.dispatch;
    return n3 !== t3.memoizedState && (N.flags |= 2048, ps(9, {destroy: void 0}, ds.bind(null, i2, n3), null)), [r2, a2, e2];
  }
  function ds(e2, t3) {
    e2.action = t3;
  }
  function fs(e2) {
    var t3 = L(), n3 = P;
    if (n3 !== null)
      return us(t3, n3, e2);
    L(), t3 = t3.memoizedState, n3 = L();
    var r2 = n3.queue.dispatch;
    return n3.memoizedState = e2, [t3, r2, false];
  }
  function ps(e2, t3, n3, r2) {
    return e2 = {tag: e2, create: n3, deps: r2, inst: t3, next: null}, t3 = N.updateQueue, t3 === null && (t3 = zo(), N.updateQueue = t3), n3 = t3.lastEffect, n3 === null ? t3.lastEffect = e2.next = e2 : (r2 = n3.next, n3.next = e2, e2.next = r2, t3.lastEffect = e2), e2;
  }
  function ms() {
    return L().memoizedState;
  }
  function hs(e2, t3, n3, r2) {
    var i2 = Ro();
    N.flags |= e2, i2.memoizedState = ps(1 | t3, {destroy: void 0}, n3, r2 === void 0 ? null : r2);
  }
  function gs(e2, t3, n3, r2) {
    var i2 = L();
    r2 = r2 === void 0 ? null : r2;
    var a2 = i2.memoizedState.inst;
    P !== null && r2 !== null && Ao(r2, P.memoizedState.deps) ? i2.memoizedState = ps(t3, a2, n3, r2) : (N.flags |= e2, i2.memoizedState = ps(1 | t3, a2, n3, r2));
  }
  function _s(e2, t3) {
    hs(8390656, 8, e2, t3);
  }
  function vs(e2, t3) {
    gs(2048, 8, e2, t3);
  }
  function ys(e2) {
    N.flags |= 4;
    var t3 = N.updateQueue;
    if (t3 === null)
      t3 = zo(), N.updateQueue = t3, t3.events = [e2];
    else {
      var n3 = t3.events;
      n3 === null ? t3.events = [e2] : n3.push(e2);
    }
  }
  function bs(e2) {
    var t3 = L().memoizedState;
    return ys({ref: t3, nextImpl: e2}), function() {
      if (W & 2)
        throw Error(l2(440));
      return t3.impl.apply(void 0, arguments);
    };
  }
  function xs(e2, t3) {
    return gs(4, 2, e2, t3);
  }
  function Ss(e2, t3) {
    return gs(4, 4, e2, t3);
  }
  function Cs(e2, t3) {
    if (typeof t3 == `function`) {
      e2 = e2();
      var n3 = t3(e2);
      return function() {
        typeof n3 == `function` ? n3() : t3(null);
      };
    }
    if (t3 != null)
      return e2 = e2(), t3.current = e2, function() {
        t3.current = null;
      };
  }
  function ws(e2, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e2]), gs(4, 4, Cs.bind(null, t3, e2), n3);
  }
  function Ts() {
  }
  function Es(e2, t3) {
    var n3 = L();
    t3 = t3 === void 0 ? null : t3;
    var r2 = n3.memoizedState;
    return t3 !== null && Ao(t3, r2[1]) ? r2[0] : (n3.memoizedState = [e2, t3], e2);
  }
  function Ds(e2, t3) {
    var n3 = L();
    t3 = t3 === void 0 ? null : t3;
    var r2 = n3.memoizedState;
    if (t3 !== null && Ao(t3, r2[1]))
      return r2[0];
    if (r2 = e2(), To) {
      Ze(true);
      try {
        e2();
      } finally {
        Ze(false);
      }
    }
    return n3.memoizedState = [r2, t3], r2;
  }
  function Os(e2, t3, n3) {
    return n3 === void 0 || So & 1073741824 && !(q & 261930) ? e2.memoizedState = t3 : (e2.memoizedState = n3, e2 = gu(), N.lanes |= e2, Jl |= e2, n3);
  }
  function ks(e2, t3, n3, r2) {
    return Ir(n3, t3) ? n3 : co.current === null ? !(So & 42) || So & 1073741824 && !(q & 261930) ? (R = true, e2.memoizedState = n3) : (e2 = gu(), N.lanes |= e2, Jl |= e2, t3) : (e2 = Os(e2, n3, r2), Ir(e2, t3) || (R = true), e2);
  }
  function As(e2, t3, n3, r2, i2) {
    var a2 = C.p;
    C.p = a2 !== 0 && 8 > a2 ? a2 : 8;
    var o3 = S.T, s2 = {};
    S.T = s2, Hs(e2, false, t3, n3);
    try {
      var c3 = i2(), l3 = S.S;
      l3 !== null && l3(s2, c3), typeof c3 == `object` && c3 && typeof c3.then == `function` ? Vs(e2, t3, Ea(c3, r2), hu(e2)) : Vs(e2, t3, r2, hu(e2));
    } catch (n4) {
      Vs(e2, t3, {then: function() {
      }, status: `rejected`, reason: n4}, hu());
    } finally {
      C.p = a2, o3 !== null && s2.types !== null && (o3.types = s2.types), S.T = o3;
    }
  }
  function js() {
  }
  function Ms(e2, t3, n3, r2) {
    if (e2.tag !== 5)
      throw Error(l2(476));
    var i2 = Ns(e2).queue;
    As(e2, i2, t3, ge, n3 === null ? js : function() {
      return Ps(e2), n3(r2);
    });
  }
  function Ns(e2) {
    var t3 = e2.memoizedState;
    if (t3 !== null)
      return t3;
    t3 = {memoizedState: ge, baseState: ge, baseQueue: null, queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Uo, lastRenderedState: ge}, next: null};
    var n3 = {};
    return t3.next = {memoizedState: n3, baseState: n3, baseQueue: null, queue: {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Uo, lastRenderedState: n3}, next: null}, e2.memoizedState = t3, e2 = e2.alternate, e2 !== null && (e2.memoizedState = t3), t3;
  }
  function Ps(e2) {
    var t3 = Ns(e2);
    t3.next === null && (t3 = e2.alternate.memoizedState), Vs(e2, t3.next.queue, {}, hu());
  }
  function Fs() {
    return A(ep);
  }
  function Is() {
    return L().memoizedState;
  }
  function Ls() {
    return L().memoizedState;
  }
  function Rs(e2) {
    for (var t3 = e2.return; t3 !== null; ) {
      switch (t3.tag) {
        case 24:
        case 3:
          var n3 = hu();
          e2 = $a(n3);
          var r2 = eo(t3, e2, n3);
          r2 !== null && (_u(r2, t3, n3), to(r2, t3, n3)), t3 = {cache: va()}, e2.payload = t3;
          return;
      }
      t3 = t3.return;
    }
  }
  function zs(e2, t3, n3) {
    var r2 = hu();
    n3 = {lane: r2, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null}, Us(e2) ? Ws(t3, n3) : (n3 = gi(e2, t3, n3, r2), n3 !== null && (_u(n3, e2, r2), Gs(n3, t3, r2)));
  }
  function Bs(e2, t3, n3) {
    Vs(e2, t3, n3, hu());
  }
  function Vs(e2, t3, n3, r2) {
    var i2 = {lane: r2, revertLane: 0, gesture: null, action: n3, hasEagerState: false, eagerState: null, next: null};
    if (Us(e2))
      Ws(t3, i2);
    else {
      var a2 = e2.alternate;
      if (e2.lanes === 0 && (a2 === null || a2.lanes === 0) && (a2 = t3.lastRenderedReducer, a2 !== null))
        try {
          var o3 = t3.lastRenderedState, s2 = a2(o3, n3);
          if (i2.hasEagerState = true, i2.eagerState = s2, Ir(s2, o3))
            return hi(e2, t3, i2, 0), G === null && mi(), false;
        } catch {
        }
      if (n3 = gi(e2, t3, i2, r2), n3 !== null)
        return _u(n3, e2, r2), Gs(n3, t3, r2), true;
    }
    return false;
  }
  function Hs(e2, t3, n3, r2) {
    if (r2 = {lane: 2, revertLane: pd(), gesture: null, action: r2, hasEagerState: false, eagerState: null, next: null}, Us(e2)) {
      if (t3)
        throw Error(l2(479));
    } else
      t3 = gi(e2, n3, r2, 2), t3 !== null && _u(t3, e2, 2);
  }
  function Us(e2) {
    var t3 = e2.alternate;
    return e2 === N || t3 !== null && t3 === N;
  }
  function Ws(e2, t3) {
    wo = Co = true;
    var n3 = e2.pending;
    n3 === null ? t3.next = t3 : (t3.next = n3.next, n3.next = t3), e2.pending = t3;
  }
  function Gs(e2, t3, n3) {
    if (n3 & 4194048) {
      var r2 = t3.lanes;
      r2 &= e2.pendingLanes, n3 |= r2, t3.lanes = n3, mt(e2, n3);
    }
  }
  var Ks = {readContext: A, use: Vo, useCallback: I, useContext: I, useEffect: I, useImperativeHandle: I, useLayoutEffect: I, useInsertionEffect: I, useMemo: I, useReducer: I, useRef: I, useState: I, useDebugValue: I, useDeferredValue: I, useTransition: I, useSyncExternalStore: I, useId: I, useHostTransitionStatus: I, useFormState: I, useActionState: I, useOptimistic: I, useMemoCache: I, useCacheRefresh: I};
  Ks.useEffectEvent = I;
  var qs = {readContext: A, use: Vo, useCallback: function(e2, t3) {
    return Ro().memoizedState = [e2, t3 === void 0 ? null : t3], e2;
  }, useContext: A, useEffect: _s, useImperativeHandle: function(e2, t3, n3) {
    n3 = n3 == null ? null : n3.concat([e2]), hs(4194308, 4, Cs.bind(null, t3, e2), n3);
  }, useLayoutEffect: function(e2, t3) {
    return hs(4194308, 4, e2, t3);
  }, useInsertionEffect: function(e2, t3) {
    hs(4, 2, e2, t3);
  }, useMemo: function(e2, t3) {
    var n3 = Ro();
    t3 = t3 === void 0 ? null : t3;
    var r2 = e2();
    if (To) {
      Ze(true);
      try {
        e2();
      } finally {
        Ze(false);
      }
    }
    return n3.memoizedState = [r2, t3], r2;
  }, useReducer: function(e2, t3, n3) {
    var r2 = Ro();
    if (n3 !== void 0) {
      var i2 = n3(t3);
      if (To) {
        Ze(true);
        try {
          n3(t3);
        } finally {
          Ze(false);
        }
      }
    } else
      i2 = t3;
    return r2.memoizedState = r2.baseState = i2, e2 = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e2, lastRenderedState: i2}, r2.queue = e2, e2 = e2.dispatch = zs.bind(null, N, e2), [r2.memoizedState, e2];
  }, useRef: function(e2) {
    var t3 = Ro();
    return e2 = {current: e2}, t3.memoizedState = e2;
  }, useState: function(e2) {
    e2 = $o(e2);
    var t3 = e2.queue, n3 = Bs.bind(null, N, t3);
    return t3.dispatch = n3, [e2.memoizedState, n3];
  }, useDebugValue: Ts, useDeferredValue: function(e2, t3) {
    return Os(Ro(), e2, t3);
  }, useTransition: function() {
    var e2 = $o(false);
    return e2 = As.bind(null, N, e2.queue, true, false), Ro().memoizedState = e2, [false, e2];
  }, useSyncExternalStore: function(e2, t3, n3) {
    var r2 = N, i2 = Ro();
    if (k) {
      if (n3 === void 0)
        throw Error(l2(407));
      n3 = n3();
    } else {
      if (n3 = t3(), G === null)
        throw Error(l2(349));
      q & 127 || Jo(r2, t3, n3);
    }
    i2.memoizedState = n3;
    var a2 = {value: n3, getSnapshot: t3};
    return i2.queue = a2, _s(Xo.bind(null, r2, a2, e2), [e2]), r2.flags |= 2048, ps(9, {destroy: void 0}, Yo.bind(null, r2, a2, n3, t3), null), n3;
  }, useId: function() {
    var e2 = Ro(), t3 = G.identifierPrefix;
    if (k) {
      var n3 = Vi, r2 = Bi;
      n3 = (r2 & ~(1 << 32 - Qe(r2) - 1)).toString(32) + n3, t3 = `_` + t3 + `R_` + n3, n3 = Eo++, 0 < n3 && (t3 += `H` + n3.toString(32)), t3 += `_`;
    } else
      n3 = ko++, t3 = `_` + t3 + `r_` + n3.toString(32) + `_`;
    return e2.memoizedState = t3;
  }, useHostTransitionStatus: Fs, useFormState: cs, useActionState: cs, useOptimistic: function(e2) {
    var t3 = Ro();
    t3.memoizedState = t3.baseState = e2;
    var n3 = {pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null};
    return t3.queue = n3, t3 = Hs.bind(null, N, true, n3), n3.dispatch = t3, [e2, t3];
  }, useMemoCache: Ho, useCacheRefresh: function() {
    return Ro().memoizedState = Rs.bind(null, N);
  }, useEffectEvent: function(e2) {
    var t3 = Ro(), n3 = {impl: e2};
    return t3.memoizedState = n3, function() {
      if (W & 2)
        throw Error(l2(440));
      return n3.impl.apply(void 0, arguments);
    };
  }}, Js = {readContext: A, use: Vo, useCallback: Es, useContext: A, useEffect: vs, useImperativeHandle: ws, useInsertionEffect: xs, useLayoutEffect: Ss, useMemo: Ds, useReducer: Wo, useRef: ms, useState: function() {
    return Wo(Uo);
  }, useDebugValue: Ts, useDeferredValue: function(e2, t3) {
    return ks(L(), P.memoizedState, e2, t3);
  }, useTransition: function() {
    var e2 = Wo(Uo)[0], t3 = L().memoizedState;
    return [typeof e2 == `boolean` ? e2 : Bo(e2), t3];
  }, useSyncExternalStore: qo, useId: Is, useHostTransitionStatus: Fs, useFormState: ls, useActionState: ls, useOptimistic: function(e2, t3) {
    return es(L(), P, e2, t3);
  }, useMemoCache: Ho, useCacheRefresh: Ls};
  Js.useEffectEvent = bs;
  var Ys = {readContext: A, use: Vo, useCallback: Es, useContext: A, useEffect: vs, useImperativeHandle: ws, useInsertionEffect: xs, useLayoutEffect: Ss, useMemo: Ds, useReducer: Ko, useRef: ms, useState: function() {
    return Ko(Uo);
  }, useDebugValue: Ts, useDeferredValue: function(e2, t3) {
    var n3 = L();
    return P === null ? Os(n3, e2, t3) : ks(n3, P.memoizedState, e2, t3);
  }, useTransition: function() {
    var e2 = Ko(Uo)[0], t3 = L().memoizedState;
    return [typeof e2 == `boolean` ? e2 : Bo(e2), t3];
  }, useSyncExternalStore: qo, useId: Is, useHostTransitionStatus: Fs, useFormState: fs, useActionState: fs, useOptimistic: function(e2, t3) {
    var n3 = L();
    return P === null ? (n3.baseState = e2, [e2, n3.queue.dispatch]) : es(n3, P, e2, t3);
  }, useMemoCache: Ho, useCacheRefresh: Ls};
  Ys.useEffectEvent = bs;
  function Xs(e2, t3, n3, r2) {
    t3 = e2.memoizedState, n3 = n3(r2, t3), n3 = n3 == null ? t3 : _({}, t3, n3), e2.memoizedState = n3, e2.lanes === 0 && (e2.updateQueue.baseState = n3);
  }
  var Zs = {enqueueSetState: function(e2, t3, n3) {
    e2 = e2._reactInternals;
    var r2 = hu(), i2 = $a(r2);
    i2.payload = t3, n3 != null && (i2.callback = n3), t3 = eo(e2, i2, r2), t3 !== null && (_u(t3, e2, r2), to(t3, e2, r2));
  }, enqueueReplaceState: function(e2, t3, n3) {
    e2 = e2._reactInternals;
    var r2 = hu(), i2 = $a(r2);
    i2.tag = 1, i2.payload = t3, n3 != null && (i2.callback = n3), t3 = eo(e2, i2, r2), t3 !== null && (_u(t3, e2, r2), to(t3, e2, r2));
  }, enqueueForceUpdate: function(e2, t3) {
    e2 = e2._reactInternals;
    var n3 = hu(), r2 = $a(n3);
    r2.tag = 2, t3 != null && (r2.callback = t3), t3 = eo(e2, r2, n3), t3 !== null && (_u(t3, e2, n3), to(t3, e2, n3));
  }};
  function Qs(e2, t3, n3, r2, i2, a2, o3) {
    return e2 = e2.stateNode, typeof e2.shouldComponentUpdate == `function` ? e2.shouldComponentUpdate(r2, a2, o3) : t3.prototype && t3.prototype.isPureReactComponent ? !Lr(n3, r2) || !Lr(i2, a2) : true;
  }
  function $s(e2, t3, n3, r2) {
    e2 = t3.state, typeof t3.componentWillReceiveProps == `function` && t3.componentWillReceiveProps(n3, r2), typeof t3.UNSAFE_componentWillReceiveProps == `function` && t3.UNSAFE_componentWillReceiveProps(n3, r2), t3.state !== e2 && Zs.enqueueReplaceState(t3, t3.state, null);
  }
  function ec(e2, t3) {
    var n3 = t3;
    if (`ref` in t3)
      for (var r2 in n3 = {}, t3)
        r2 !== `ref` && (n3[r2] = t3[r2]);
    if (e2 = e2.defaultProps)
      for (var i2 in n3 === t3 && (n3 = _({}, n3)), e2)
        n3[i2] === void 0 && (n3[i2] = e2[i2]);
    return n3;
  }
  function tc(e2) {
    ui(e2);
  }
  function nc(e2) {
    console.error(e2);
  }
  function rc(e2) {
    ui(e2);
  }
  function ic(e2, t3) {
    try {
      var n3 = e2.onUncaughtError;
      n3(t3.value, {componentStack: t3.stack});
    } catch (e3) {
      setTimeout(function() {
        throw e3;
      });
    }
  }
  function ac(e2, t3, n3) {
    try {
      var r2 = e2.onCaughtError;
      r2(n3.value, {componentStack: n3.stack, errorBoundary: t3.tag === 1 ? t3.stateNode : null});
    } catch (e3) {
      setTimeout(function() {
        throw e3;
      });
    }
  }
  function oc(e2, t3, n3) {
    return n3 = $a(n3), n3.tag = 3, n3.payload = {element: null}, n3.callback = function() {
      ic(e2, t3);
    }, n3;
  }
  function sc(e2) {
    return e2 = $a(e2), e2.tag = 3, e2;
  }
  function cc(e2, t3, n3, r2) {
    var i2 = n3.type.getDerivedStateFromError;
    if (typeof i2 == `function`) {
      var a2 = r2.value;
      e2.payload = function() {
        return i2(a2);
      }, e2.callback = function() {
        ac(t3, n3, r2);
      };
    }
    var o3 = n3.stateNode;
    o3 !== null && typeof o3.componentDidCatch == `function` && (e2.callback = function() {
      ac(t3, n3, r2), typeof i2 != `function` && (ou === null ? ou = new Set([this]) : ou.add(this));
      var e3 = r2.stack;
      this.componentDidCatch(r2.value, {componentStack: e3 === null ? `` : e3});
    });
  }
  function lc(e2, t3, n3, r2, i2) {
    if (n3.flags |= 32768, typeof r2 == `object` && r2 && typeof r2.then == `function`) {
      if (t3 = n3.alternate, t3 !== null && ua(t3, n3, i2, true), n3 = mo.current, n3 !== null) {
        switch (n3.tag) {
          case 31:
          case 13:
            return ho === null ? ku() : n3.alternate === null && Y === 0 && (Y = 3), n3.flags &= -257, n3.flags |= 65536, n3.lanes = i2, r2 === Fa ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? n3.updateQueue = new Set([r2]) : t3.add(r2), qu(e2, r2, i2)), false;
          case 22:
            return n3.flags |= 65536, r2 === Fa ? n3.flags |= 16384 : (t3 = n3.updateQueue, t3 === null ? (t3 = {transitions: null, markerInstances: null, retryQueue: new Set([r2])}, n3.updateQueue = t3) : (n3 = t3.retryQueue, n3 === null ? t3.retryQueue = new Set([r2]) : n3.add(r2)), qu(e2, r2, i2)), false;
        }
        throw Error(l2(435, n3.tag));
      }
      return qu(e2, r2, i2), ku(), false;
    }
    if (k)
      return t3 = mo.current, t3 === null ? (r2 !== Yi && (t3 = Error(l2(423), {cause: r2}), na(Mi(t3, n3))), e2 = e2.current.alternate, e2.flags |= 65536, i2 &= -i2, e2.lanes |= i2, r2 = Mi(r2, n3), i2 = oc(e2.stateNode, r2, i2), no(e2, i2), Y !== 4 && (Y = 2)) : (!(t3.flags & 65536) && (t3.flags |= 256), t3.flags |= 65536, t3.lanes = i2, r2 !== Yi && (e2 = Error(l2(422), {cause: r2}), na(Mi(e2, n3)))), false;
    var a2 = Error(l2(520), {cause: r2});
    if (a2 = Mi(a2, n3), $l === null ? $l = [a2] : $l.push(a2), Y !== 4 && (Y = 2), t3 === null)
      return true;
    r2 = Mi(r2, n3), n3 = t3;
    do {
      switch (n3.tag) {
        case 3:
          return n3.flags |= 65536, e2 = i2 & -i2, n3.lanes |= e2, e2 = oc(n3.stateNode, r2, e2), no(n3, e2), false;
        case 1:
          if (t3 = n3.type, a2 = n3.stateNode, !(n3.flags & 128) && (typeof t3.getDerivedStateFromError == `function` || a2 !== null && typeof a2.componentDidCatch == `function` && (ou === null || !ou.has(a2))))
            return n3.flags |= 65536, i2 &= -i2, n3.lanes |= i2, i2 = sc(i2), cc(i2, e2, n3, r2), no(n3, i2), false;
      }
      n3 = n3.return;
    } while (n3 !== null);
    return false;
  }
  var uc = Error(l2(461)), R = false;
  function z(e2, t3, n3, r2) {
    t3.child = e2 === null ? Ya(t3, null, n3, r2) : Ja(t3, e2.child, n3, r2);
  }
  function dc(e2, t3, n3, r2, i2) {
    n3 = n3.render;
    var a2 = t3.ref;
    if (`ref` in r2) {
      var o3 = {};
      for (var s2 in r2)
        s2 !== `ref` && (o3[s2] = r2[s2]);
    } else
      o3 = r2;
    return fa(t3), r2 = jo(e2, t3, n3, o3, a2, i2), s2 = Fo(), e2 !== null && !R ? (Io(e2, t3, i2), Fc(e2, t3, i2)) : (k && s2 && Wi(t3), t3.flags |= 1, z(e2, t3, r2, i2), t3.child);
  }
  function fc(e2, t3, n3, r2, i2) {
    if (e2 === null) {
      var a2 = n3.type;
      return typeof a2 == `function` && !Ci(a2) && a2.defaultProps === void 0 && n3.compare === null ? (t3.tag = 15, t3.type = a2, pc(e2, t3, a2, r2, i2)) : (e2 = Ei(n3.type, null, r2, t3, t3.mode, i2), e2.ref = t3.ref, e2.return = t3, t3.child = e2);
    }
    if (a2 = e2.child, !Ic(e2, i2)) {
      var o3 = a2.memoizedProps;
      if (n3 = n3.compare, n3 = n3 === null ? Lr : n3, n3(o3, r2) && e2.ref === t3.ref)
        return Fc(e2, t3, i2);
    }
    return t3.flags |= 1, e2 = wi(a2, r2), e2.ref = t3.ref, e2.return = t3, t3.child = e2;
  }
  function pc(e2, t3, n3, r2, i2) {
    if (e2 !== null) {
      var a2 = e2.memoizedProps;
      if (Lr(a2, r2) && e2.ref === t3.ref) {
        if (R = false, t3.pendingProps = r2 = a2, Ic(e2, i2))
          e2.flags & 131072 && (R = true);
        else
          return t3.lanes = e2.lanes, Fc(e2, t3, i2);
      }
    }
    return xc(e2, t3, n3, r2, i2);
  }
  function mc(e2, t3, n3, r2) {
    var i2 = r2.children, a2 = e2 === null ? null : e2.memoizedState;
    if (e2 === null && t3.stateNode === null && (t3.stateNode = {_visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null}), r2.mode === `hidden`) {
      if (t3.flags & 128) {
        if (a2 = a2 === null ? n3 : a2.baseLanes | n3, e2 !== null) {
          for (r2 = t3.child = e2.child, i2 = 0; r2 !== null; )
            i2 = i2 | r2.lanes | r2.childLanes, r2 = r2.sibling;
          r2 = i2 & ~a2;
        } else
          r2 = 0, t3.child = null;
        return gc(e2, t3, a2, n3, r2);
      }
      if (n3 & 536870912)
        t3.memoizedState = {baseLanes: 0, cachePool: null}, e2 !== null && Aa(t3, a2 === null ? null : a2.cachePool), a2 === null ? fo() : uo(t3, a2), vo(t3);
      else
        return r2 = t3.lanes = 536870912, gc(e2, t3, a2 === null ? n3 : a2.baseLanes | n3, n3, r2);
    } else
      a2 === null ? (e2 !== null && Aa(t3, null), fo(), yo(t3)) : (Aa(t3, a2.cachePool), uo(t3, a2), yo(t3), t3.memoizedState = null);
    return z(e2, t3, i2, n3), t3.child;
  }
  function hc(e2, t3) {
    return e2 !== null && e2.tag === 22 || t3.stateNode !== null || (t3.stateNode = {_visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null}), t3.sibling;
  }
  function gc(e2, t3, n3, r2, i2) {
    var a2 = ka();
    return a2 = a2 === null ? null : {parent: j._currentValue, pool: a2}, t3.memoizedState = {baseLanes: n3, cachePool: a2}, e2 !== null && Aa(t3, null), fo(), vo(t3), e2 !== null && ua(e2, t3, r2, true), t3.childLanes = i2, null;
  }
  function _c(e2, t3) {
    return t3 = Ac({mode: t3.mode, children: t3.children}, e2.mode), t3.ref = e2.ref, e2.child = t3, t3.return = e2, t3;
  }
  function vc(e2, t3, n3) {
    return Ja(t3, e2.child, null, n3), e2 = _c(t3, t3.pendingProps), e2.flags |= 2, bo(t3), t3.memoizedState = null, e2;
  }
  function yc(e2, t3, n3) {
    var r2 = t3.pendingProps, i2 = !!(t3.flags & 128);
    if (t3.flags &= -129, e2 === null) {
      if (k) {
        if (r2.mode === `hidden`)
          return e2 = _c(t3, r2), t3.lanes = 536870912, hc(null, e2);
        if (_o(t3), (e2 = O) ? (e2 = of(e2, Ji), e2 = e2 !== null && e2.data === `&` ? e2 : null, e2 !== null && (t3.memoizedState = {dehydrated: e2, treeContext: zi === null ? null : {id: Bi, overflow: Vi}, retryLane: 536870912, hydrationErrors: null}, n3 = ki(e2), n3.return = t3, t3.child = n3, D = t3, O = null)) : e2 = null, e2 === null)
          throw Xi(t3);
        return t3.lanes = 536870912, null;
      }
      return _c(t3, r2);
    }
    var a2 = e2.memoizedState;
    if (a2 !== null) {
      var o3 = a2.dehydrated;
      if (_o(t3), i2) {
        if (t3.flags & 256)
          t3.flags &= -257, t3 = vc(e2, t3, n3);
        else if (t3.memoizedState !== null)
          t3.child = e2.child, t3.flags |= 128, t3 = null;
        else
          throw Error(l2(558));
      } else if (R || ua(e2, t3, n3, false), i2 = (n3 & e2.childLanes) !== 0, R || i2) {
        if (r2 = G, r2 !== null && (o3 = ht(r2, n3), o3 !== 0 && o3 !== a2.retryLane))
          throw a2.retryLane = o3, _i(e2, o3), _u(r2, e2, o3), uc;
        ku(), t3 = vc(e2, t3, n3);
      } else
        e2 = a2.treeContext, O = uf(o3.nextSibling), D = t3, k = true, qi = null, Ji = false, e2 !== null && Ki(t3, e2), t3 = _c(t3, r2), t3.flags |= 4096;
      return t3;
    }
    return e2 = wi(e2.child, {mode: r2.mode, children: r2.children}), e2.ref = t3.ref, t3.child = e2, e2.return = t3, e2;
  }
  function bc(e2, t3) {
    var n3 = t3.ref;
    if (n3 === null)
      e2 !== null && e2.ref !== null && (t3.flags |= 4194816);
    else {
      if (typeof n3 != `function` && typeof n3 != `object`)
        throw Error(l2(284));
      (e2 === null || e2.ref !== n3) && (t3.flags |= 4194816);
    }
  }
  function xc(e2, t3, n3, r2, i2) {
    return fa(t3), n3 = jo(e2, t3, n3, r2, void 0, i2), r2 = Fo(), e2 !== null && !R ? (Io(e2, t3, i2), Fc(e2, t3, i2)) : (k && r2 && Wi(t3), t3.flags |= 1, z(e2, t3, n3, i2), t3.child);
  }
  function Sc(e2, t3, n3, r2, i2, a2) {
    return fa(t3), t3.updateQueue = null, n3 = No(t3, r2, n3, i2), Mo(e2), r2 = Fo(), e2 !== null && !R ? (Io(e2, t3, a2), Fc(e2, t3, a2)) : (k && r2 && Wi(t3), t3.flags |= 1, z(e2, t3, n3, a2), t3.child);
  }
  function Cc(e2, t3, n3, r2, i2) {
    if (fa(t3), t3.stateNode === null) {
      var a2 = bi, o3 = n3.contextType;
      typeof o3 == `object` && o3 && (a2 = A(o3)), a2 = new n3(r2, a2), t3.memoizedState = a2.state !== null && a2.state !== void 0 ? a2.state : null, a2.updater = Zs, t3.stateNode = a2, a2._reactInternals = t3, a2 = t3.stateNode, a2.props = r2, a2.state = t3.memoizedState, a2.refs = {}, Za(t3), o3 = n3.contextType, a2.context = typeof o3 == `object` && o3 ? A(o3) : bi, a2.state = t3.memoizedState, o3 = n3.getDerivedStateFromProps, typeof o3 == `function` && (Xs(t3, n3, o3, r2), a2.state = t3.memoizedState), typeof n3.getDerivedStateFromProps == `function` || typeof a2.getSnapshotBeforeUpdate == `function` || typeof a2.UNSAFE_componentWillMount != `function` && typeof a2.componentWillMount != `function` || (o3 = a2.state, typeof a2.componentWillMount == `function` && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == `function` && a2.UNSAFE_componentWillMount(), o3 !== a2.state && Zs.enqueueReplaceState(a2, a2.state, null), ao(t3, r2, a2, i2), io(), a2.state = t3.memoizedState), typeof a2.componentDidMount == `function` && (t3.flags |= 4194308), r2 = true;
    } else if (e2 === null) {
      a2 = t3.stateNode;
      var s2 = t3.memoizedProps, c3 = ec(n3, s2);
      a2.props = c3;
      var l3 = a2.context, u3 = n3.contextType;
      o3 = bi, typeof u3 == `object` && u3 && (o3 = A(u3));
      var d3 = n3.getDerivedStateFromProps;
      u3 = typeof d3 == `function` || typeof a2.getSnapshotBeforeUpdate == `function`, s2 = t3.pendingProps !== s2, u3 || typeof a2.UNSAFE_componentWillReceiveProps != `function` && typeof a2.componentWillReceiveProps != `function` || (s2 || l3 !== o3) && $s(t3, a2, r2, o3), Xa = false;
      var f3 = t3.memoizedState;
      a2.state = f3, ao(t3, r2, a2, i2), io(), l3 = t3.memoizedState, s2 || f3 !== l3 || Xa ? (typeof d3 == `function` && (Xs(t3, n3, d3, r2), l3 = t3.memoizedState), (c3 = Xa || Qs(t3, n3, c3, r2, f3, l3, o3)) ? (u3 || typeof a2.UNSAFE_componentWillMount != `function` && typeof a2.componentWillMount != `function` || (typeof a2.componentWillMount == `function` && a2.componentWillMount(), typeof a2.UNSAFE_componentWillMount == `function` && a2.UNSAFE_componentWillMount()), typeof a2.componentDidMount == `function` && (t3.flags |= 4194308)) : (typeof a2.componentDidMount == `function` && (t3.flags |= 4194308), t3.memoizedProps = r2, t3.memoizedState = l3), a2.props = r2, a2.state = l3, a2.context = o3, r2 = c3) : (typeof a2.componentDidMount == `function` && (t3.flags |= 4194308), r2 = false);
    } else {
      a2 = t3.stateNode, Qa(e2, t3), o3 = t3.memoizedProps, u3 = ec(n3, o3), a2.props = u3, d3 = t3.pendingProps, f3 = a2.context, l3 = n3.contextType, c3 = bi, typeof l3 == `object` && l3 && (c3 = A(l3)), s2 = n3.getDerivedStateFromProps, (l3 = typeof s2 == `function` || typeof a2.getSnapshotBeforeUpdate == `function`) || typeof a2.UNSAFE_componentWillReceiveProps != `function` && typeof a2.componentWillReceiveProps != `function` || (o3 !== d3 || f3 !== c3) && $s(t3, a2, r2, c3), Xa = false, f3 = t3.memoizedState, a2.state = f3, ao(t3, r2, a2, i2), io();
      var p3 = t3.memoizedState;
      o3 !== d3 || f3 !== p3 || Xa || e2 !== null && e2.dependencies !== null && da(e2.dependencies) ? (typeof s2 == `function` && (Xs(t3, n3, s2, r2), p3 = t3.memoizedState), (u3 = Xa || Qs(t3, n3, u3, r2, f3, p3, c3) || e2 !== null && e2.dependencies !== null && da(e2.dependencies)) ? (l3 || typeof a2.UNSAFE_componentWillUpdate != `function` && typeof a2.componentWillUpdate != `function` || (typeof a2.componentWillUpdate == `function` && a2.componentWillUpdate(r2, p3, c3), typeof a2.UNSAFE_componentWillUpdate == `function` && a2.UNSAFE_componentWillUpdate(r2, p3, c3)), typeof a2.componentDidUpdate == `function` && (t3.flags |= 4), typeof a2.getSnapshotBeforeUpdate == `function` && (t3.flags |= 1024)) : (typeof a2.componentDidUpdate != `function` || o3 === e2.memoizedProps && f3 === e2.memoizedState || (t3.flags |= 4), typeof a2.getSnapshotBeforeUpdate != `function` || o3 === e2.memoizedProps && f3 === e2.memoizedState || (t3.flags |= 1024), t3.memoizedProps = r2, t3.memoizedState = p3), a2.props = r2, a2.state = p3, a2.context = c3, r2 = u3) : (typeof a2.componentDidUpdate != `function` || o3 === e2.memoizedProps && f3 === e2.memoizedState || (t3.flags |= 4), typeof a2.getSnapshotBeforeUpdate != `function` || o3 === e2.memoizedProps && f3 === e2.memoizedState || (t3.flags |= 1024), r2 = false);
    }
    return a2 = r2, bc(e2, t3), r2 = !!(t3.flags & 128), a2 || r2 ? (a2 = t3.stateNode, n3 = r2 && typeof n3.getDerivedStateFromError != `function` ? null : a2.render(), t3.flags |= 1, e2 !== null && r2 ? (t3.child = Ja(t3, e2.child, null, i2), t3.child = Ja(t3, null, n3, i2)) : z(e2, t3, n3, i2), t3.memoizedState = a2.state, e2 = t3.child) : e2 = Fc(e2, t3, i2), e2;
  }
  function wc(e2, t3, n3, r2) {
    return ea(), t3.flags |= 256, z(e2, t3, n3, r2), t3.child;
  }
  var Tc = {dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null};
  function Ec(e2) {
    return {baseLanes: e2, cachePool: ja()};
  }
  function Dc(e2, t3, n3) {
    return e2 = e2 === null ? 0 : e2.childLanes & ~n3, t3 && (e2 |= Zl), e2;
  }
  function Oc(e2, t3, n3) {
    var r2 = t3.pendingProps, i2 = false, a2 = !!(t3.flags & 128), o3;
    if ((o3 = a2) || (o3 = e2 !== null && e2.memoizedState === null ? false : !!(M.current & 2)), o3 && (i2 = true, t3.flags &= -129), o3 = !!(t3.flags & 32), t3.flags &= -33, e2 === null) {
      if (k) {
        if (i2 ? go(t3) : yo(t3), (e2 = O) ? (e2 = of(e2, Ji), e2 = e2 !== null && e2.data !== `&` ? e2 : null, e2 !== null && (t3.memoizedState = {dehydrated: e2, treeContext: zi === null ? null : {id: Bi, overflow: Vi}, retryLane: 536870912, hydrationErrors: null}, n3 = ki(e2), n3.return = t3, t3.child = n3, D = t3, O = null)) : e2 = null, e2 === null)
          throw Xi(t3);
        return cf(e2) ? t3.lanes = 32 : t3.lanes = 536870912, null;
      }
      var s2 = r2.children;
      return r2 = r2.fallback, i2 ? (yo(t3), i2 = t3.mode, s2 = Ac({mode: `hidden`, children: s2}, i2), r2 = Di(r2, i2, n3, null), s2.return = t3, r2.return = t3, s2.sibling = r2, t3.child = s2, r2 = t3.child, r2.memoizedState = Ec(n3), r2.childLanes = Dc(e2, o3, n3), t3.memoizedState = Tc, hc(null, r2)) : (go(t3), kc(t3, s2));
    }
    var c3 = e2.memoizedState;
    if (c3 !== null && (s2 = c3.dehydrated, s2 !== null)) {
      if (a2)
        t3.flags & 256 ? (go(t3), t3.flags &= -257, t3 = jc(e2, t3, n3)) : t3.memoizedState === null ? (yo(t3), s2 = r2.fallback, i2 = t3.mode, r2 = Ac({mode: `visible`, children: r2.children}, i2), s2 = Di(s2, i2, n3, null), s2.flags |= 2, r2.return = t3, s2.return = t3, r2.sibling = s2, t3.child = r2, Ja(t3, e2.child, null, n3), r2 = t3.child, r2.memoizedState = Ec(n3), r2.childLanes = Dc(e2, o3, n3), t3.memoizedState = Tc, t3 = hc(null, r2)) : (yo(t3), t3.child = e2.child, t3.flags |= 128, t3 = null);
      else if (go(t3), cf(s2)) {
        if (o3 = s2.nextSibling && s2.nextSibling.dataset, o3)
          var u3 = o3.dgst;
        o3 = u3, r2 = Error(l2(419)), r2.stack = ``, r2.digest = o3, na({value: r2, source: null, stack: null}), t3 = jc(e2, t3, n3);
      } else if (R || ua(e2, t3, n3, false), o3 = (n3 & e2.childLanes) !== 0, R || o3) {
        if (o3 = G, o3 !== null && (r2 = ht(o3, n3), r2 !== 0 && r2 !== c3.retryLane))
          throw c3.retryLane = r2, _i(e2, r2), _u(o3, e2, r2), uc;
        sf(s2) || ku(), t3 = jc(e2, t3, n3);
      } else
        sf(s2) ? (t3.flags |= 192, t3.child = e2.child, t3 = null) : (e2 = c3.treeContext, O = uf(s2.nextSibling), D = t3, k = true, qi = null, Ji = false, e2 !== null && Ki(t3, e2), t3 = kc(t3, r2.children), t3.flags |= 4096);
      return t3;
    }
    return i2 ? (yo(t3), s2 = r2.fallback, i2 = t3.mode, c3 = e2.child, u3 = c3.sibling, r2 = wi(c3, {mode: `hidden`, children: r2.children}), r2.subtreeFlags = c3.subtreeFlags & 65011712, u3 === null ? (s2 = Di(s2, i2, n3, null), s2.flags |= 2) : s2 = wi(u3, s2), s2.return = t3, r2.return = t3, r2.sibling = s2, t3.child = r2, hc(null, r2), r2 = t3.child, s2 = e2.child.memoizedState, s2 === null ? s2 = Ec(n3) : (i2 = s2.cachePool, i2 === null ? i2 = ja() : (c3 = j._currentValue, i2 = i2.parent === c3 ? i2 : {parent: c3, pool: c3}), s2 = {baseLanes: s2.baseLanes | n3, cachePool: i2}), r2.memoizedState = s2, r2.childLanes = Dc(e2, o3, n3), t3.memoizedState = Tc, hc(e2.child, r2)) : (go(t3), n3 = e2.child, e2 = n3.sibling, n3 = wi(n3, {mode: `visible`, children: r2.children}), n3.return = t3, n3.sibling = null, e2 !== null && (o3 = t3.deletions, o3 === null ? (t3.deletions = [e2], t3.flags |= 16) : o3.push(e2)), t3.child = n3, t3.memoizedState = null, n3);
  }
  function kc(e2, t3) {
    return t3 = Ac({mode: `visible`, children: t3}, e2.mode), t3.return = e2, e2.child = t3;
  }
  function Ac(e2, t3) {
    return e2 = Si(22, e2, null, t3), e2.lanes = 0, e2;
  }
  function jc(e2, t3, n3) {
    return Ja(t3, e2.child, null, n3), e2 = kc(t3, t3.pendingProps.children), e2.flags |= 2, t3.memoizedState = null, e2;
  }
  function Mc(e2, t3, n3) {
    e2.lanes |= t3;
    var r2 = e2.alternate;
    r2 !== null && (r2.lanes |= t3), ca(e2.return, t3, n3);
  }
  function Nc(e2, t3, n3, r2, i2, a2) {
    var o3 = e2.memoizedState;
    o3 === null ? e2.memoizedState = {isBackwards: t3, rendering: null, renderingStartTime: 0, last: r2, tail: n3, tailMode: i2, treeForkCount: a2} : (o3.isBackwards = t3, o3.rendering = null, o3.renderingStartTime = 0, o3.last = r2, o3.tail = n3, o3.tailMode = i2, o3.treeForkCount = a2);
  }
  function Pc(e2, t3, n3) {
    var r2 = t3.pendingProps, i2 = r2.revealOrder, a2 = r2.tail;
    r2 = r2.children;
    var o3 = M.current, s2 = !!(o3 & 2);
    if (s2 ? (o3 = o3 & 1 | 2, t3.flags |= 128) : o3 &= 1, T(M, o3), z(e2, t3, r2, n3), r2 = k ? Ii : 0, !s2 && e2 !== null && e2.flags & 128)
      a:
        for (e2 = t3.child; e2 !== null; ) {
          if (e2.tag === 13)
            e2.memoizedState !== null && Mc(e2, n3, t3);
          else if (e2.tag === 19)
            Mc(e2, n3, t3);
          else if (e2.child !== null) {
            e2.child.return = e2, e2 = e2.child;
            continue;
          }
          if (e2 === t3)
            break a;
          for (; e2.sibling === null; ) {
            if (e2.return === null || e2.return === t3)
              break a;
            e2 = e2.return;
          }
          e2.sibling.return = e2.return, e2 = e2.sibling;
        }
    switch (i2) {
      case `forwards`:
        for (n3 = t3.child, i2 = null; n3 !== null; )
          e2 = n3.alternate, e2 !== null && xo(e2) === null && (i2 = n3), n3 = n3.sibling;
        n3 = i2, n3 === null ? (i2 = t3.child, t3.child = null) : (i2 = n3.sibling, n3.sibling = null), Nc(t3, false, i2, n3, a2, r2);
        break;
      case `backwards`:
      case `unstable_legacy-backwards`:
        for (n3 = null, i2 = t3.child, t3.child = null; i2 !== null; ) {
          if (e2 = i2.alternate, e2 !== null && xo(e2) === null) {
            t3.child = i2;
            break;
          }
          e2 = i2.sibling, i2.sibling = n3, n3 = i2, i2 = e2;
        }
        Nc(t3, true, n3, null, a2, r2);
        break;
      case `together`:
        Nc(t3, false, null, null, void 0, r2);
        break;
      default:
        t3.memoizedState = null;
    }
    return t3.child;
  }
  function Fc(e2, t3, n3) {
    if (e2 !== null && (t3.dependencies = e2.dependencies), Jl |= t3.lanes, (n3 & t3.childLanes) === 0) {
      if (e2 !== null) {
        if (ua(e2, t3, n3, false), (n3 & t3.childLanes) === 0)
          return null;
      } else
        return null;
    }
    if (e2 !== null && t3.child !== e2.child)
      throw Error(l2(153));
    if (t3.child !== null) {
      for (e2 = t3.child, n3 = wi(e2, e2.pendingProps), t3.child = n3, n3.return = t3; e2.sibling !== null; )
        e2 = e2.sibling, n3 = n3.sibling = wi(e2, e2.pendingProps), n3.return = t3;
      n3.sibling = null;
    }
    return t3.child;
  }
  function Ic(e2, t3) {
    return (e2.lanes & t3) !== 0 || (e2 = e2.dependencies, !!(e2 !== null && da(e2)));
  }
  function Lc(e2, t3, n3) {
    switch (t3.tag) {
      case 3:
        we(t3, t3.stateNode.containerInfo), oa(t3, j, e2.memoizedState.cache), ea();
        break;
      case 27:
      case 5:
        Ee(t3);
        break;
      case 4:
        we(t3, t3.stateNode.containerInfo);
        break;
      case 10:
        oa(t3, t3.type, t3.memoizedProps.value);
        break;
      case 31:
        if (t3.memoizedState !== null)
          return t3.flags |= 128, _o(t3), null;
        break;
      case 13:
        var r2 = t3.memoizedState;
        if (r2 !== null)
          return r2.dehydrated === null ? (n3 & t3.child.childLanes) === 0 ? (go(t3), e2 = Fc(e2, t3, n3), e2 === null ? null : e2.sibling) : Oc(e2, t3, n3) : (go(t3), t3.flags |= 128, null);
        go(t3);
        break;
      case 19:
        var i2 = !!(e2.flags & 128);
        if (r2 = (n3 & t3.childLanes) !== 0, r2 || (r2 = (ua(e2, t3, n3, false), (n3 & t3.childLanes) !== 0)), i2) {
          if (r2)
            return Pc(e2, t3, n3);
          t3.flags |= 128;
        }
        if (i2 = t3.memoizedState, i2 !== null && (i2.rendering = null, i2.tail = null, i2.lastEffect = null), T(M, M.current), r2)
          break;
        return null;
      case 22:
        return t3.lanes = 0, mc(e2, t3, n3, t3.pendingProps);
      case 24:
        oa(t3, j, e2.memoizedState.cache);
    }
    return Fc(e2, t3, n3);
  }
  function Rc(e2, t3, n3) {
    if (e2 !== null) {
      if (e2.memoizedProps !== t3.pendingProps)
        R = true;
      else {
        if (!Ic(e2, n3) && !(t3.flags & 128))
          return R = false, Lc(e2, t3, n3);
        R = !!(e2.flags & 131072);
      }
    } else
      R = false, k && t3.flags & 1048576 && Ui(t3, Ii, t3.index);
    switch (t3.lanes = 0, t3.tag) {
      case 16:
        a: {
          var r2 = t3.pendingProps;
          if (e2 = Ra(t3.elementType), t3.type = e2, typeof e2 == `function`)
            Ci(e2) ? (r2 = ec(e2, r2), t3.tag = 1, t3 = Cc(null, t3, e2, r2, n3)) : (t3.tag = 0, t3 = xc(null, t3, e2, r2, n3));
          else {
            if (e2 != null) {
              var i2 = e2.$$typeof;
              if (i2 === ie) {
                t3.tag = 11, t3 = dc(null, t3, e2, r2, n3);
                break a;
              }
              if (i2 === se) {
                t3.tag = 14, t3 = fc(null, t3, e2, r2, n3);
                break a;
              }
            }
            throw t3 = me(e2) || e2, Error(l2(306, t3, ``));
          }
        }
        return t3;
      case 0:
        return xc(e2, t3, t3.type, t3.pendingProps, n3);
      case 1:
        return r2 = t3.type, i2 = ec(r2, t3.pendingProps), Cc(e2, t3, r2, i2, n3);
      case 3:
        a: {
          if (we(t3, t3.stateNode.containerInfo), e2 === null)
            throw Error(l2(387));
          r2 = t3.pendingProps;
          var a2 = t3.memoizedState;
          i2 = a2.element, Qa(e2, t3), ao(t3, r2, null, n3);
          var o3 = t3.memoizedState;
          if (r2 = o3.cache, oa(t3, j, r2), r2 !== a2.cache && la(t3, [j], n3, true), io(), r2 = o3.element, a2.isDehydrated) {
            if (a2 = {element: r2, isDehydrated: false, cache: o3.cache}, t3.updateQueue.baseState = a2, t3.memoizedState = a2, t3.flags & 256) {
              t3 = wc(e2, t3, r2, n3);
              break a;
            }
            if (r2 !== i2) {
              i2 = Mi(Error(l2(424)), t3), na(i2), t3 = wc(e2, t3, r2, n3);
              break a;
            }
            switch (e2 = t3.stateNode.containerInfo, e2.nodeType) {
              case 9:
                e2 = e2.body;
                break;
              default:
                e2 = e2.nodeName === `HTML` ? e2.ownerDocument.body : e2;
            }
            for (O = uf(e2.firstChild), D = t3, k = true, qi = null, Ji = true, n3 = Ya(t3, null, r2, n3), t3.child = n3; n3; )
              n3.flags = n3.flags & -3 | 4096, n3 = n3.sibling;
          } else {
            if (ea(), r2 === i2) {
              t3 = Fc(e2, t3, n3);
              break a;
            }
            z(e2, t3, r2, n3);
          }
          t3 = t3.child;
        }
        return t3;
      case 26:
        return bc(e2, t3), e2 === null ? (n3 = jf(t3.type, null, t3.pendingProps, null)) ? t3.memoizedState = n3 : k || (n3 = t3.type, e2 = t3.pendingProps, r2 = Hd(Se.current).createElement(n3), r2[xt] = t3, r2[St] = e2, Id(r2, n3, e2), E(r2), t3.stateNode = r2) : t3.memoizedState = jf(t3.type, e2.memoizedProps, t3.pendingProps, e2.memoizedState), null;
      case 27:
        return Ee(t3), e2 === null && k && (r2 = t3.stateNode = mf(t3.type, t3.pendingProps, Se.current), D = t3, Ji = true, i2 = O, $d(t3.type) ? (df = i2, O = uf(r2.firstChild)) : O = i2), z(e2, t3, t3.pendingProps.children, n3), bc(e2, t3), e2 === null && (t3.flags |= 4194304), t3.child;
      case 5:
        return e2 === null && k && ((i2 = r2 = O) && (r2 = rf(r2, t3.type, t3.pendingProps, Ji), r2 === null ? i2 = false : (t3.stateNode = r2, D = t3, O = uf(r2.firstChild), Ji = false, i2 = true)), i2 || Xi(t3)), Ee(t3), i2 = t3.type, a2 = t3.pendingProps, o3 = e2 === null ? null : e2.memoizedProps, r2 = a2.children, Gd(i2, a2) ? r2 = null : o3 !== null && Gd(i2, o3) && (t3.flags |= 32), t3.memoizedState !== null && (i2 = jo(e2, t3, Po, null, null, n3), ep._currentValue = i2), bc(e2, t3), z(e2, t3, r2, n3), t3.child;
      case 6:
        return e2 === null && k && ((e2 = n3 = O) && (n3 = af(n3, t3.pendingProps, Ji), n3 === null ? e2 = false : (t3.stateNode = n3, D = t3, O = null, e2 = true)), e2 || Xi(t3)), null;
      case 13:
        return Oc(e2, t3, n3);
      case 4:
        return we(t3, t3.stateNode.containerInfo), r2 = t3.pendingProps, e2 === null ? t3.child = Ja(t3, null, r2, n3) : z(e2, t3, r2, n3), t3.child;
      case 11:
        return dc(e2, t3, t3.type, t3.pendingProps, n3);
      case 7:
        return z(e2, t3, t3.pendingProps, n3), t3.child;
      case 8:
        return z(e2, t3, t3.pendingProps.children, n3), t3.child;
      case 12:
        return z(e2, t3, t3.pendingProps.children, n3), t3.child;
      case 10:
        return r2 = t3.pendingProps, oa(t3, t3.type, r2.value), z(e2, t3, r2.children, n3), t3.child;
      case 9:
        return i2 = t3.type._context, r2 = t3.pendingProps.children, fa(t3), i2 = A(i2), r2 = r2(i2), t3.flags |= 1, z(e2, t3, r2, n3), t3.child;
      case 14:
        return fc(e2, t3, t3.type, t3.pendingProps, n3);
      case 15:
        return pc(e2, t3, t3.type, t3.pendingProps, n3);
      case 19:
        return Pc(e2, t3, n3);
      case 31:
        return yc(e2, t3, n3);
      case 22:
        return mc(e2, t3, n3, t3.pendingProps);
      case 24:
        return fa(t3), r2 = A(j), e2 === null ? (i2 = ka(), i2 === null && (i2 = G, a2 = va(), i2.pooledCache = a2, a2.refCount++, a2 !== null && (i2.pooledCacheLanes |= n3), i2 = a2), t3.memoizedState = {parent: r2, cache: i2}, Za(t3), oa(t3, j, i2)) : ((e2.lanes & n3) !== 0 && (Qa(e2, t3), ao(t3, null, null, n3), io()), i2 = e2.memoizedState, a2 = t3.memoizedState, i2.parent === r2 ? (r2 = a2.cache, oa(t3, j, r2), r2 !== i2.cache && la(t3, [j], n3, true)) : (i2 = {parent: r2, cache: r2}, t3.memoizedState = i2, t3.lanes === 0 && (t3.memoizedState = t3.updateQueue.baseState = i2), oa(t3, j, r2))), z(e2, t3, t3.pendingProps.children, n3), t3.child;
      case 29:
        throw t3.pendingProps;
    }
    throw Error(l2(156, t3.tag));
  }
  function zc(e2) {
    e2.flags |= 4;
  }
  function Bc(e2, t3, n3, r2, i2) {
    if ((t3 = !!(e2.mode & 32)) && (t3 = false), t3) {
      if (e2.flags |= 16777216, (i2 & 335544128) === i2) {
        if (e2.stateNode.complete)
          e2.flags |= 8192;
        else if (Eu())
          e2.flags |= 8192;
        else
          throw za = Fa, Na;
      }
    } else
      e2.flags &= -16777217;
  }
  function Vc(e2, t3) {
    if (t3.type !== `stylesheet` || t3.state.loading & 4)
      e2.flags &= -16777217;
    else if (e2.flags |= 16777216, !Kf(t3)) {
      if (Eu())
        e2.flags |= 8192;
      else
        throw za = Fa, Na;
    }
  }
  function Hc(e2, t3) {
    t3 !== null && (e2.flags |= 4), e2.flags & 16384 && (t3 = e2.tag === 22 ? 536870912 : lt(), e2.lanes |= t3, Ql |= t3);
  }
  function Uc(e2, t3) {
    if (!k)
      switch (e2.tailMode) {
        case `hidden`:
          t3 = e2.tail;
          for (var n3 = null; t3 !== null; )
            t3.alternate !== null && (n3 = t3), t3 = t3.sibling;
          n3 === null ? e2.tail = null : n3.sibling = null;
          break;
        case `collapsed`:
          n3 = e2.tail;
          for (var r2 = null; n3 !== null; )
            n3.alternate !== null && (r2 = n3), n3 = n3.sibling;
          r2 === null ? t3 || e2.tail === null ? e2.tail = null : e2.tail.sibling = null : r2.sibling = null;
      }
  }
  function B(e2) {
    var t3 = e2.alternate !== null && e2.alternate.child === e2.child, n3 = 0, r2 = 0;
    if (t3)
      for (var i2 = e2.child; i2 !== null; )
        n3 |= i2.lanes | i2.childLanes, r2 |= i2.subtreeFlags & 65011712, r2 |= i2.flags & 65011712, i2.return = e2, i2 = i2.sibling;
    else
      for (i2 = e2.child; i2 !== null; )
        n3 |= i2.lanes | i2.childLanes, r2 |= i2.subtreeFlags, r2 |= i2.flags, i2.return = e2, i2 = i2.sibling;
    return e2.subtreeFlags |= r2, e2.childLanes = n3, t3;
  }
  function Wc(e2, t3, n3) {
    var r2 = t3.pendingProps;
    switch (Gi(t3), t3.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return B(t3), null;
      case 1:
        return B(t3), null;
      case 3:
        return n3 = t3.stateNode, r2 = null, e2 !== null && (r2 = e2.memoizedState.cache), t3.memoizedState.cache !== r2 && (t3.flags |= 2048), sa(j), Te(), n3.pendingContext && (n3.context = n3.pendingContext, n3.pendingContext = null), (e2 === null || e2.child === null) && ($i(t3) ? zc(t3) : e2 === null || e2.memoizedState.isDehydrated && !(t3.flags & 256) || (t3.flags |= 1024, ta())), B(t3), null;
      case 26:
        var i2 = t3.type, a2 = t3.memoizedState;
        return e2 === null ? (zc(t3), a2 === null ? (B(t3), Bc(t3, i2, null, r2, n3)) : (B(t3), Vc(t3, a2))) : a2 ? a2 === e2.memoizedState ? (B(t3), t3.flags &= -16777217) : (zc(t3), B(t3), Vc(t3, a2)) : (e2 = e2.memoizedProps, e2 !== r2 && zc(t3), B(t3), Bc(t3, i2, e2, r2, n3)), null;
      case 27:
        if (De(t3), n3 = Se.current, i2 = t3.type, e2 !== null && t3.stateNode != null)
          e2.memoizedProps !== r2 && zc(t3);
        else {
          if (!r2) {
            if (t3.stateNode === null)
              throw Error(l2(166));
            return B(t3), null;
          }
          e2 = be.current, $i(t3) ? Zi(t3, e2) : (e2 = mf(i2, r2, n3), t3.stateNode = e2, zc(t3));
        }
        return B(t3), null;
      case 5:
        if (De(t3), i2 = t3.type, e2 !== null && t3.stateNode != null)
          e2.memoizedProps !== r2 && zc(t3);
        else {
          if (!r2) {
            if (t3.stateNode === null)
              throw Error(l2(166));
            return B(t3), null;
          }
          if (a2 = be.current, $i(t3))
            Zi(t3, a2);
          else {
            var o3 = Hd(Se.current);
            switch (a2) {
              case 1:
                a2 = o3.createElementNS(`http://www.w3.org/2000/svg`, i2);
                break;
              case 2:
                a2 = o3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i2);
                break;
              default:
                switch (i2) {
                  case `svg`:
                    a2 = o3.createElementNS(`http://www.w3.org/2000/svg`, i2);
                    break;
                  case `math`:
                    a2 = o3.createElementNS(`http://www.w3.org/1998/Math/MathML`, i2);
                    break;
                  case `script`:
                    a2 = o3.createElement(`div`), a2.innerHTML = `<script></script>`, a2 = a2.removeChild(a2.firstChild);
                    break;
                  case `select`:
                    a2 = typeof r2.is == `string` ? o3.createElement(`select`, {is: r2.is}) : o3.createElement(`select`), r2.multiple ? a2.multiple = true : r2.size && (a2.size = r2.size);
                    break;
                  default:
                    a2 = typeof r2.is == `string` ? o3.createElement(i2, {is: r2.is}) : o3.createElement(i2);
                }
            }
            a2[xt] = t3, a2[St] = r2;
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
              switch (Id(a2, i2, r2), i2) {
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
            r2 && zc(t3);
          }
        }
        return B(t3), Bc(t3, t3.type, e2 === null ? null : e2.memoizedProps, t3.pendingProps, n3), null;
      case 6:
        if (e2 && t3.stateNode != null)
          e2.memoizedProps !== r2 && zc(t3);
        else {
          if (typeof r2 != `string` && t3.stateNode === null)
            throw Error(l2(166));
          if (e2 = Se.current, $i(t3)) {
            if (e2 = t3.stateNode, n3 = t3.memoizedProps, r2 = null, i2 = D, i2 !== null)
              switch (i2.tag) {
                case 27:
                case 5:
                  r2 = i2.memoizedProps;
              }
            e2[xt] = t3, e2 = !!(e2.nodeValue === n3 || r2 !== null && r2.suppressHydrationWarning === true || Pd(e2.nodeValue, n3)), e2 || Xi(t3, true);
          } else
            e2 = Hd(e2).createTextNode(r2), e2[xt] = t3, t3.stateNode = e2;
        }
        return B(t3), null;
      case 31:
        if (n3 = t3.memoizedState, e2 === null || e2.memoizedState !== null) {
          if (r2 = $i(t3), n3 !== null) {
            if (e2 === null) {
              if (!r2)
                throw Error(l2(318));
              if (e2 = t3.memoizedState, e2 = e2 === null ? null : e2.dehydrated, !e2)
                throw Error(l2(557));
              e2[xt] = t3;
            } else
              ea(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            B(t3), e2 = false;
          } else
            n3 = ta(), e2 !== null && e2.memoizedState !== null && (e2.memoizedState.hydrationErrors = n3), e2 = true;
          if (!e2)
            return t3.flags & 256 ? (bo(t3), t3) : (bo(t3), null);
          if (t3.flags & 128)
            throw Error(l2(558));
        }
        return B(t3), null;
      case 13:
        if (r2 = t3.memoizedState, e2 === null || e2.memoizedState !== null && e2.memoizedState.dehydrated !== null) {
          if (i2 = $i(t3), r2 !== null && r2.dehydrated !== null) {
            if (e2 === null) {
              if (!i2)
                throw Error(l2(318));
              if (i2 = t3.memoizedState, i2 = i2 === null ? null : i2.dehydrated, !i2)
                throw Error(l2(317));
              i2[xt] = t3;
            } else
              ea(), !(t3.flags & 128) && (t3.memoizedState = null), t3.flags |= 4;
            B(t3), i2 = false;
          } else
            i2 = ta(), e2 !== null && e2.memoizedState !== null && (e2.memoizedState.hydrationErrors = i2), i2 = true;
          if (!i2)
            return t3.flags & 256 ? (bo(t3), t3) : (bo(t3), null);
        }
        return bo(t3), t3.flags & 128 ? (t3.lanes = n3, t3) : (n3 = r2 !== null, e2 = e2 !== null && e2.memoizedState !== null, n3 && (r2 = t3.child, i2 = null, r2.alternate !== null && r2.alternate.memoizedState !== null && r2.alternate.memoizedState.cachePool !== null && (i2 = r2.alternate.memoizedState.cachePool.pool), a2 = null, r2.memoizedState !== null && r2.memoizedState.cachePool !== null && (a2 = r2.memoizedState.cachePool.pool), a2 !== i2 && (r2.flags |= 2048)), n3 !== e2 && n3 && (t3.child.flags |= 8192), Hc(t3, t3.updateQueue), B(t3), null);
      case 4:
        return Te(), e2 === null && wd(t3.stateNode.containerInfo), B(t3), null;
      case 10:
        return sa(t3.type), B(t3), null;
      case 19:
        if (w(M), r2 = t3.memoizedState, r2 === null)
          return B(t3), null;
        if (i2 = !!(t3.flags & 128), a2 = r2.rendering, a2 === null) {
          if (i2)
            Uc(r2, false);
          else {
            if (Y !== 0 || e2 !== null && e2.flags & 128)
              for (e2 = t3.child; e2 !== null; ) {
                if (a2 = xo(e2), a2 !== null) {
                  for (t3.flags |= 128, Uc(r2, false), e2 = a2.updateQueue, t3.updateQueue = e2, Hc(t3, e2), t3.subtreeFlags = 0, e2 = n3, n3 = t3.child; n3 !== null; )
                    Ti(n3, e2), n3 = n3.sibling;
                  return T(M, M.current & 1 | 2), k && Hi(t3, r2.treeForkCount), t3.child;
                }
                e2 = e2.sibling;
              }
            r2.tail !== null && Be() > iu && (t3.flags |= 128, i2 = true, Uc(r2, false), t3.lanes = 4194304);
          }
        } else {
          if (!i2) {
            if (e2 = xo(a2), e2 !== null) {
              if (t3.flags |= 128, i2 = true, e2 = e2.updateQueue, t3.updateQueue = e2, Hc(t3, e2), Uc(r2, true), r2.tail === null && r2.tailMode === `hidden` && !a2.alternate && !k)
                return B(t3), null;
            } else
              2 * Be() - r2.renderingStartTime > iu && n3 !== 536870912 && (t3.flags |= 128, i2 = true, Uc(r2, false), t3.lanes = 4194304);
          }
          r2.isBackwards ? (a2.sibling = t3.child, t3.child = a2) : (e2 = r2.last, e2 === null ? t3.child = a2 : e2.sibling = a2, r2.last = a2);
        }
        return r2.tail === null ? (B(t3), null) : (e2 = r2.tail, r2.rendering = e2, r2.tail = e2.sibling, r2.renderingStartTime = Be(), e2.sibling = null, n3 = M.current, T(M, i2 ? n3 & 1 | 2 : n3 & 1), k && Hi(t3, r2.treeForkCount), e2);
      case 22:
      case 23:
        return bo(t3), po(), r2 = t3.memoizedState !== null, e2 === null ? r2 && (t3.flags |= 8192) : e2.memoizedState !== null !== r2 && (t3.flags |= 8192), r2 ? n3 & 536870912 && !(t3.flags & 128) && (B(t3), t3.subtreeFlags & 6 && (t3.flags |= 8192)) : B(t3), n3 = t3.updateQueue, n3 !== null && Hc(t3, n3.retryQueue), n3 = null, e2 !== null && e2.memoizedState !== null && e2.memoizedState.cachePool !== null && (n3 = e2.memoizedState.cachePool.pool), r2 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (r2 = t3.memoizedState.cachePool.pool), r2 !== n3 && (t3.flags |= 2048), e2 !== null && w(Oa), null;
      case 24:
        return n3 = null, e2 !== null && (n3 = e2.memoizedState.cache), t3.memoizedState.cache !== n3 && (t3.flags |= 2048), sa(j), B(t3), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(l2(156, t3.tag));
  }
  function Gc(e2, t3) {
    switch (Gi(t3), t3.tag) {
      case 1:
        return e2 = t3.flags, e2 & 65536 ? (t3.flags = e2 & -65537 | 128, t3) : null;
      case 3:
        return sa(j), Te(), e2 = t3.flags, e2 & 65536 && !(e2 & 128) ? (t3.flags = e2 & -65537 | 128, t3) : null;
      case 26:
      case 27:
      case 5:
        return De(t3), null;
      case 31:
        if (t3.memoizedState !== null) {
          if (bo(t3), t3.alternate === null)
            throw Error(l2(340));
          ea();
        }
        return e2 = t3.flags, e2 & 65536 ? (t3.flags = e2 & -65537 | 128, t3) : null;
      case 13:
        if (bo(t3), e2 = t3.memoizedState, e2 !== null && e2.dehydrated !== null) {
          if (t3.alternate === null)
            throw Error(l2(340));
          ea();
        }
        return e2 = t3.flags, e2 & 65536 ? (t3.flags = e2 & -65537 | 128, t3) : null;
      case 19:
        return w(M), null;
      case 4:
        return Te(), null;
      case 10:
        return sa(t3.type), null;
      case 22:
      case 23:
        return bo(t3), po(), e2 !== null && w(Oa), e2 = t3.flags, e2 & 65536 ? (t3.flags = e2 & -65537 | 128, t3) : null;
      case 24:
        return sa(j), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Kc(e2, t3) {
    switch (Gi(t3), t3.tag) {
      case 3:
        sa(j), Te();
        break;
      case 26:
      case 27:
      case 5:
        De(t3);
        break;
      case 4:
        Te();
        break;
      case 31:
        t3.memoizedState !== null && bo(t3);
        break;
      case 13:
        bo(t3);
        break;
      case 19:
        w(M);
        break;
      case 10:
        sa(t3.type);
        break;
      case 22:
      case 23:
        bo(t3), po(), e2 !== null && w(Oa);
        break;
      case 24:
        sa(j);
    }
  }
  function qc(e2, t3) {
    try {
      var n3 = t3.updateQueue, r2 = n3 === null ? null : n3.lastEffect;
      if (r2 !== null) {
        var i2 = r2.next;
        n3 = i2;
        do {
          if ((n3.tag & e2) === e2) {
            r2 = void 0;
            var a2 = n3.create, o3 = n3.inst;
            r2 = a2(), o3.destroy = r2;
          }
          n3 = n3.next;
        } while (n3 !== i2);
      }
    } catch (e3) {
      Z(t3, t3.return, e3);
    }
  }
  function Jc(e2, t3, n3) {
    try {
      var r2 = t3.updateQueue, i2 = r2 === null ? null : r2.lastEffect;
      if (i2 !== null) {
        var a2 = i2.next;
        r2 = a2;
        do {
          if ((r2.tag & e2) === e2) {
            var o3 = r2.inst, s2 = o3.destroy;
            if (s2 !== void 0) {
              o3.destroy = void 0, i2 = t3;
              var c3 = n3, l3 = s2;
              try {
                l3();
              } catch (e3) {
                Z(i2, c3, e3);
              }
            }
          }
          r2 = r2.next;
        } while (r2 !== a2);
      }
    } catch (e3) {
      Z(t3, t3.return, e3);
    }
  }
  function Yc(e2) {
    var t3 = e2.updateQueue;
    if (t3 !== null) {
      var n3 = e2.stateNode;
      try {
        so(t3, n3);
      } catch (t4) {
        Z(e2, e2.return, t4);
      }
    }
  }
  function Xc(e2, t3, n3) {
    n3.props = ec(e2.type, e2.memoizedProps), n3.state = e2.memoizedState;
    try {
      n3.componentWillUnmount();
    } catch (n4) {
      Z(e2, t3, n4);
    }
  }
  function Zc(e2, t3) {
    try {
      var n3 = e2.ref;
      if (n3 !== null) {
        switch (e2.tag) {
          case 26:
          case 27:
          case 5:
            var r2 = e2.stateNode;
            break;
          case 30:
            r2 = e2.stateNode;
            break;
          default:
            r2 = e2.stateNode;
        }
        typeof n3 == `function` ? e2.refCleanup = n3(r2) : n3.current = r2;
      }
    } catch (n4) {
      Z(e2, t3, n4);
    }
  }
  function Qc(e2, t3) {
    var n3 = e2.ref, r2 = e2.refCleanup;
    if (n3 !== null) {
      if (typeof r2 == `function`)
        try {
          r2();
        } catch (n4) {
          Z(e2, t3, n4);
        } finally {
          e2.refCleanup = null, e2 = e2.alternate, e2 != null && (e2.refCleanup = null);
        }
      else if (typeof n3 == `function`)
        try {
          n3(null);
        } catch (n4) {
          Z(e2, t3, n4);
        }
      else
        n3.current = null;
    }
  }
  function $c(e2) {
    var t3 = e2.type, n3 = e2.memoizedProps, r2 = e2.stateNode;
    try {
      a:
        switch (t3) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n3.autoFocus && r2.focus();
            break a;
          case `img`:
            n3.src ? r2.src = n3.src : n3.srcSet && (r2.srcset = n3.srcSet);
        }
    } catch (t4) {
      Z(e2, e2.return, t4);
    }
  }
  function el(e2, t3, n3) {
    try {
      var r2 = e2.stateNode;
      Ld(r2, e2.type, n3, t3), r2[St] = t3;
    } catch (t4) {
      Z(e2, e2.return, t4);
    }
  }
  function tl(e2) {
    return e2.tag === 5 || e2.tag === 3 || e2.tag === 26 || e2.tag === 27 && $d(e2.type) || e2.tag === 4;
  }
  function nl(e2) {
    a:
      for (; ; ) {
        for (; e2.sibling === null; ) {
          if (e2.return === null || tl(e2.return))
            return null;
          e2 = e2.return;
        }
        for (e2.sibling.return = e2.return, e2 = e2.sibling; e2.tag !== 5 && e2.tag !== 6 && e2.tag !== 18; ) {
          if (e2.tag === 27 && $d(e2.type) || e2.flags & 2 || e2.child === null || e2.tag === 4)
            continue a;
          e2.child.return = e2, e2 = e2.child;
        }
        if (!(e2.flags & 2))
          return e2.stateNode;
      }
  }
  function rl(e2, t3, n3) {
    var r2 = e2.tag;
    if (r2 === 5 || r2 === 6)
      e2 = e2.stateNode, t3 ? (n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3).insertBefore(e2, t3) : (t3 = n3.nodeType === 9 ? n3.body : n3.nodeName === `HTML` ? n3.ownerDocument.body : n3, t3.appendChild(e2), n3 = n3._reactRootContainer, n3 != null || t3.onclick !== null || (t3.onclick = mn));
    else if (r2 !== 4 && (r2 === 27 && $d(e2.type) && (n3 = e2.stateNode, t3 = null), e2 = e2.child, e2 !== null))
      for (rl(e2, t3, n3), e2 = e2.sibling; e2 !== null; )
        rl(e2, t3, n3), e2 = e2.sibling;
  }
  function il(e2, t3, n3) {
    var r2 = e2.tag;
    if (r2 === 5 || r2 === 6)
      e2 = e2.stateNode, t3 ? n3.insertBefore(e2, t3) : n3.appendChild(e2);
    else if (r2 !== 4 && (r2 === 27 && $d(e2.type) && (n3 = e2.stateNode), e2 = e2.child, e2 !== null))
      for (il(e2, t3, n3), e2 = e2.sibling; e2 !== null; )
        il(e2, t3, n3), e2 = e2.sibling;
  }
  function al(e2) {
    var t3 = e2.stateNode, n3 = e2.memoizedProps;
    try {
      for (var r2 = e2.type, i2 = t3.attributes; i2.length; )
        t3.removeAttributeNode(i2[0]);
      Id(t3, r2, n3), t3[xt] = e2, t3[St] = n3;
    } catch (t4) {
      Z(e2, e2.return, t4);
    }
  }
  var ol = false, V = false, sl = false, cl = typeof WeakSet == `function` ? WeakSet : Set, H = null;
  function ll(e2, t3) {
    if (e2 = e2.containerInfo, Bd = lp, e2 = Vr(e2), Hr(e2)) {
      if (`selectionStart` in e2)
        var n3 = {start: e2.selectionStart, end: e2.selectionEnd};
      else
        a: {
          n3 = (n3 = e2.ownerDocument) && n3.defaultView || window;
          var r2 = n3.getSelection && n3.getSelection();
          if (r2 && r2.rangeCount !== 0) {
            n3 = r2.anchorNode;
            var i2 = r2.anchorOffset, a2 = r2.focusNode;
            r2 = r2.focusOffset;
            try {
              n3.nodeType, a2.nodeType;
            } catch {
              n3 = null;
              break a;
            }
            var o3 = 0, s2 = -1, c3 = -1, u3 = 0, d3 = 0, f3 = e2, p3 = null;
            b:
              for (; ; ) {
                for (var m3; f3 !== n3 || i2 !== 0 && f3.nodeType !== 3 || (s2 = o3 + i2), f3 !== a2 || r2 !== 0 && f3.nodeType !== 3 || (c3 = o3 + r2), f3.nodeType === 3 && (o3 += f3.nodeValue.length), (m3 = f3.firstChild) !== null; )
                  p3 = f3, f3 = m3;
                for (; ; ) {
                  if (f3 === e2)
                    break b;
                  if (p3 === n3 && ++u3 === i2 && (s2 = o3), p3 === a2 && ++d3 === r2 && (c3 = o3), (m3 = f3.nextSibling) !== null)
                    break;
                  f3 = p3, p3 = f3.parentNode;
                }
                f3 = m3;
              }
            n3 = s2 === -1 || c3 === -1 ? null : {start: s2, end: c3};
          } else
            n3 = null;
        }
      n3 || (n3 = {start: 0, end: 0});
    } else
      n3 = null;
    for (Vd = {focusedElem: e2, selectionRange: n3}, lp = false, H = t3; H !== null; )
      if (t3 = H, e2 = t3.child, t3.subtreeFlags & 1028 && e2 !== null)
        e2.return = t3, H = e2;
      else
        for (; H !== null; ) {
          switch (t3 = H, a2 = t3.alternate, e2 = t3.flags, t3.tag) {
            case 0:
              if (e2 & 4 && (e2 = t3.updateQueue, e2 = e2 === null ? null : e2.events, e2 !== null))
                for (n3 = 0; n3 < e2.length; n3++)
                  i2 = e2[n3], i2.ref.impl = i2.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e2 & 1024 && a2 !== null) {
                e2 = void 0, n3 = t3, i2 = a2.memoizedProps, a2 = a2.memoizedState, r2 = n3.stateNode;
                try {
                  var h2 = ec(n3.type, i2);
                  e2 = r2.getSnapshotBeforeUpdate(h2, a2), r2.__reactInternalSnapshotBeforeUpdate = e2;
                } catch (e3) {
                  Z(n3, n3.return, e3);
                }
              }
              break;
            case 3:
              if (e2 & 1024) {
                if (e2 = t3.stateNode.containerInfo, n3 = e2.nodeType, n3 === 9)
                  nf(e2);
                else if (n3 === 1)
                  switch (e2.nodeName) {
                    case `HEAD`:
                    case `HTML`:
                    case `BODY`:
                      nf(e2);
                      break;
                    default:
                      e2.textContent = ``;
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
            default:
              if (e2 & 1024)
                throw Error(l2(163));
          }
          if (e2 = t3.sibling, e2 !== null) {
            e2.return = t3.return, H = e2;
            break;
          }
          H = t3.return;
        }
  }
  function ul(e2, t3, n3) {
    var r2 = n3.flags;
    switch (n3.tag) {
      case 0:
      case 11:
      case 15:
        wl(e2, n3), r2 & 4 && qc(5, n3);
        break;
      case 1:
        if (wl(e2, n3), r2 & 4) {
          if (e2 = n3.stateNode, t3 === null)
            try {
              e2.componentDidMount();
            } catch (e3) {
              Z(n3, n3.return, e3);
            }
          else {
            var i2 = ec(n3.type, t3.memoizedProps);
            t3 = t3.memoizedState;
            try {
              e2.componentDidUpdate(i2, t3, e2.__reactInternalSnapshotBeforeUpdate);
            } catch (e3) {
              Z(n3, n3.return, e3);
            }
          }
        }
        r2 & 64 && Yc(n3), r2 & 512 && Zc(n3, n3.return);
        break;
      case 3:
        if (wl(e2, n3), r2 & 64 && (e2 = n3.updateQueue, e2 !== null)) {
          if (t3 = null, n3.child !== null)
            switch (n3.child.tag) {
              case 27:
              case 5:
                t3 = n3.child.stateNode;
                break;
              case 1:
                t3 = n3.child.stateNode;
            }
          try {
            so(e2, t3);
          } catch (e3) {
            Z(n3, n3.return, e3);
          }
        }
        break;
      case 27:
        t3 === null && r2 & 4 && al(n3);
      case 26:
      case 5:
        wl(e2, n3), t3 === null && r2 & 4 && $c(n3), r2 & 512 && Zc(n3, n3.return);
        break;
      case 12:
        wl(e2, n3);
        break;
      case 31:
        wl(e2, n3), r2 & 4 && hl(e2, n3);
        break;
      case 13:
        wl(e2, n3), r2 & 4 && gl(e2, n3), r2 & 64 && (e2 = n3.memoizedState, e2 !== null && (e2 = e2.dehydrated, e2 !== null && (n3 = Xu.bind(null, n3), lf(e2, n3))));
        break;
      case 22:
        if (r2 = n3.memoizedState !== null || ol, !r2) {
          t3 = t3 !== null && t3.memoizedState !== null || V, i2 = ol;
          var a2 = V;
          ol = r2, (V = t3) && !a2 ? El(e2, n3, !!(n3.subtreeFlags & 8772)) : wl(e2, n3), ol = i2, V = a2;
        }
        break;
      case 30:
        break;
      default:
        wl(e2, n3);
    }
  }
  function dl(e2) {
    var t3 = e2.alternate;
    t3 !== null && (e2.alternate = null, dl(t3)), e2.child = null, e2.deletions = null, e2.sibling = null, e2.tag === 5 && (t3 = e2.stateNode, t3 !== null && kt(t3)), e2.stateNode = null, e2.return = null, e2.dependencies = null, e2.memoizedProps = null, e2.memoizedState = null, e2.pendingProps = null, e2.stateNode = null, e2.updateQueue = null;
  }
  var U = null, fl = false;
  function pl(e2, t3, n3) {
    for (n3 = n3.child; n3 !== null; )
      ml(e2, t3, n3), n3 = n3.sibling;
  }
  function ml(e2, t3, n3) {
    if (Xe && typeof Xe.onCommitFiberUnmount == `function`)
      try {
        Xe.onCommitFiberUnmount(Ye, n3);
      } catch {
      }
    switch (n3.tag) {
      case 26:
        V || Qc(n3, t3), pl(e2, t3, n3), n3.memoizedState ? n3.memoizedState.count-- : n3.stateNode && (n3 = n3.stateNode, n3.parentNode.removeChild(n3));
        break;
      case 27:
        V || Qc(n3, t3);
        var r2 = U, i2 = fl;
        $d(n3.type) && (U = n3.stateNode, fl = false), pl(e2, t3, n3), hf(n3.stateNode), U = r2, fl = i2;
        break;
      case 5:
        V || Qc(n3, t3);
      case 6:
        if (r2 = U, i2 = fl, U = null, pl(e2, t3, n3), U = r2, fl = i2, U !== null) {
          if (fl)
            try {
              (U.nodeType === 9 ? U.body : U.nodeName === `HTML` ? U.ownerDocument.body : U).removeChild(n3.stateNode);
            } catch (e3) {
              Z(n3, t3, e3);
            }
          else
            try {
              U.removeChild(n3.stateNode);
            } catch (e3) {
              Z(n3, t3, e3);
            }
        }
        break;
      case 18:
        U !== null && (fl ? (e2 = U, ef(e2.nodeType === 9 ? e2.body : e2.nodeName === `HTML` ? e2.ownerDocument.body : e2, n3.stateNode), Fp(e2)) : ef(U, n3.stateNode));
        break;
      case 4:
        r2 = U, i2 = fl, U = n3.stateNode.containerInfo, fl = true, pl(e2, t3, n3), U = r2, fl = i2;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Jc(2, n3, t3), V || Jc(4, n3, t3), pl(e2, t3, n3);
        break;
      case 1:
        V || (Qc(n3, t3), r2 = n3.stateNode, typeof r2.componentWillUnmount == `function` && Xc(n3, t3, r2)), pl(e2, t3, n3);
        break;
      case 21:
        pl(e2, t3, n3);
        break;
      case 22:
        V = (r2 = V) || n3.memoizedState !== null, pl(e2, t3, n3), V = r2;
        break;
      default:
        pl(e2, t3, n3);
    }
  }
  function hl(e2, t3) {
    if (t3.memoizedState === null && (e2 = t3.alternate, e2 !== null && (e2 = e2.memoizedState, e2 !== null))) {
      e2 = e2.dehydrated;
      try {
        Fp(e2);
      } catch (e3) {
        Z(t3, t3.return, e3);
      }
    }
  }
  function gl(e2, t3) {
    if (t3.memoizedState === null && (e2 = t3.alternate, e2 !== null && (e2 = e2.memoizedState, e2 !== null && (e2 = e2.dehydrated, e2 !== null))))
      try {
        Fp(e2);
      } catch (e3) {
        Z(t3, t3.return, e3);
      }
  }
  function _l(e2) {
    switch (e2.tag) {
      case 31:
      case 13:
      case 19:
        var t3 = e2.stateNode;
        return t3 === null && (t3 = e2.stateNode = new cl()), t3;
      case 22:
        return e2 = e2.stateNode, t3 = e2._retryCache, t3 === null && (t3 = e2._retryCache = new cl()), t3;
      default:
        throw Error(l2(435, e2.tag));
    }
  }
  function vl(e2, t3) {
    var n3 = _l(e2);
    t3.forEach(function(t4) {
      if (!n3.has(t4)) {
        n3.add(t4);
        var r2 = Zu.bind(null, e2, t4);
        t4.then(r2, r2);
      }
    });
  }
  function yl(e2, t3) {
    var n3 = t3.deletions;
    if (n3 !== null)
      for (var r2 = 0; r2 < n3.length; r2++) {
        var i2 = n3[r2], a2 = e2, o3 = t3, s2 = o3;
        a:
          for (; s2 !== null; ) {
            switch (s2.tag) {
              case 27:
                if ($d(s2.type)) {
                  U = s2.stateNode, fl = false;
                  break a;
                }
                break;
              case 5:
                U = s2.stateNode, fl = false;
                break a;
              case 3:
              case 4:
                U = s2.stateNode.containerInfo, fl = true;
                break a;
            }
            s2 = s2.return;
          }
        if (U === null)
          throw Error(l2(160));
        ml(a2, o3, i2), U = null, fl = false, a2 = i2.alternate, a2 !== null && (a2.return = null), i2.return = null;
      }
    if (t3.subtreeFlags & 13886)
      for (t3 = t3.child; t3 !== null; )
        xl(t3, e2), t3 = t3.sibling;
  }
  var bl = null;
  function xl(e2, t3) {
    var n3 = e2.alternate, r2 = e2.flags;
    switch (e2.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        yl(t3, e2), Sl(e2), r2 & 4 && (Jc(3, e2, e2.return), qc(3, e2), Jc(5, e2, e2.return));
        break;
      case 1:
        yl(t3, e2), Sl(e2), r2 & 512 && (V || n3 === null || Qc(n3, n3.return)), r2 & 64 && ol && (e2 = e2.updateQueue, e2 !== null && (r2 = e2.callbacks, r2 !== null && (n3 = e2.shared.hiddenCallbacks, e2.shared.hiddenCallbacks = n3 === null ? r2 : n3.concat(r2))));
        break;
      case 26:
        var i2 = bl;
        if (yl(t3, e2), Sl(e2), r2 & 512 && (V || n3 === null || Qc(n3, n3.return)), r2 & 4) {
          var a2 = n3 === null ? null : n3.memoizedState;
          if (r2 = e2.memoizedState, n3 === null) {
            if (r2 === null) {
              if (e2.stateNode === null) {
                a: {
                  r2 = e2.type, n3 = e2.memoizedProps, i2 = i2.ownerDocument || i2;
                  b:
                    switch (r2) {
                      case `title`:
                        a2 = i2.getElementsByTagName(`title`)[0], (!a2 || a2[Ot] || a2[xt] || a2.namespaceURI === `http://www.w3.org/2000/svg` || a2.hasAttribute(`itemprop`)) && (a2 = i2.createElement(r2), i2.head.insertBefore(a2, i2.querySelector(`head > title`))), Id(a2, r2, n3), a2[xt] = e2, E(a2), r2 = a2;
                        break a;
                      case `link`:
                        var o3 = Uf(`link`, `href`, i2).get(r2 + (n3.href || ``));
                        if (o3) {
                          for (var s2 = 0; s2 < o3.length; s2++)
                            if (a2 = o3[s2], a2.getAttribute(`href`) === (n3.href == null || n3.href === `` ? null : n3.href) && a2.getAttribute(`rel`) === (n3.rel == null ? null : n3.rel) && a2.getAttribute(`title`) === (n3.title == null ? null : n3.title) && a2.getAttribute(`crossorigin`) === (n3.crossOrigin == null ? null : n3.crossOrigin)) {
                              o3.splice(s2, 1);
                              break b;
                            }
                        }
                        a2 = i2.createElement(r2), Id(a2, r2, n3), i2.head.appendChild(a2);
                        break;
                      case `meta`:
                        if (o3 = Uf(`meta`, `content`, i2).get(r2 + (n3.content || ``))) {
                          for (s2 = 0; s2 < o3.length; s2++)
                            if (a2 = o3[s2], a2.getAttribute(`content`) === (n3.content == null ? null : `` + n3.content) && a2.getAttribute(`name`) === (n3.name == null ? null : n3.name) && a2.getAttribute(`property`) === (n3.property == null ? null : n3.property) && a2.getAttribute(`http-equiv`) === (n3.httpEquiv == null ? null : n3.httpEquiv) && a2.getAttribute(`charset`) === (n3.charSet == null ? null : n3.charSet)) {
                              o3.splice(s2, 1);
                              break b;
                            }
                        }
                        a2 = i2.createElement(r2), Id(a2, r2, n3), i2.head.appendChild(a2);
                        break;
                      default:
                        throw Error(l2(468, r2));
                    }
                  a2[xt] = e2, E(a2), r2 = a2;
                }
                e2.stateNode = r2;
              } else
                Wf(i2, e2.type, e2.stateNode);
            } else
              e2.stateNode = Rf(i2, r2, e2.memoizedProps);
          } else
            a2 === r2 ? r2 === null && e2.stateNode !== null && el(e2, e2.memoizedProps, n3.memoizedProps) : (a2 === null ? n3.stateNode !== null && (n3 = n3.stateNode, n3.parentNode.removeChild(n3)) : a2.count--, r2 === null ? Wf(i2, e2.type, e2.stateNode) : Rf(i2, r2, e2.memoizedProps));
        }
        break;
      case 27:
        yl(t3, e2), Sl(e2), r2 & 512 && (V || n3 === null || Qc(n3, n3.return)), n3 !== null && r2 & 4 && el(e2, e2.memoizedProps, n3.memoizedProps);
        break;
      case 5:
        if (yl(t3, e2), Sl(e2), r2 & 512 && (V || n3 === null || Qc(n3, n3.return)), e2.flags & 32) {
          i2 = e2.stateNode;
          try {
            on(i2, ``);
          } catch (t4) {
            Z(e2, e2.return, t4);
          }
        }
        r2 & 4 && e2.stateNode != null && (i2 = e2.memoizedProps, el(e2, i2, n3 === null ? i2 : n3.memoizedProps)), r2 & 1024 && (sl = true);
        break;
      case 6:
        if (yl(t3, e2), Sl(e2), r2 & 4) {
          if (e2.stateNode === null)
            throw Error(l2(162));
          r2 = e2.memoizedProps, n3 = e2.stateNode;
          try {
            n3.nodeValue = r2;
          } catch (t4) {
            Z(e2, e2.return, t4);
          }
        }
        break;
      case 3:
        if (Hf = null, i2 = bl, bl = vf(t3.containerInfo), yl(t3, e2), bl = i2, Sl(e2), r2 & 4 && n3 !== null && n3.memoizedState.isDehydrated)
          try {
            Fp(t3.containerInfo);
          } catch (t4) {
            Z(e2, e2.return, t4);
          }
        sl && (sl = false, Cl(e2));
        break;
      case 4:
        r2 = bl, bl = vf(e2.stateNode.containerInfo), yl(t3, e2), Sl(e2), bl = r2;
        break;
      case 12:
        yl(t3, e2), Sl(e2);
        break;
      case 31:
        yl(t3, e2), Sl(e2), r2 & 4 && (r2 = e2.updateQueue, r2 !== null && (e2.updateQueue = null, vl(e2, r2)));
        break;
      case 13:
        yl(t3, e2), Sl(e2), e2.child.flags & 8192 && e2.memoizedState !== null != (n3 !== null && n3.memoizedState !== null) && (nu = Be()), r2 & 4 && (r2 = e2.updateQueue, r2 !== null && (e2.updateQueue = null, vl(e2, r2)));
        break;
      case 22:
        i2 = e2.memoizedState !== null;
        var c3 = n3 !== null && n3.memoizedState !== null, u3 = ol, d3 = V;
        if (ol = u3 || i2, V = d3 || c3, yl(t3, e2), V = d3, ol = u3, Sl(e2), r2 & 8192)
          a:
            for (t3 = e2.stateNode, t3._visibility = i2 ? t3._visibility & -2 : t3._visibility | 1, i2 && (n3 === null || c3 || ol || V || Tl(e2)), n3 = null, t3 = e2; ; ) {
              if (t3.tag === 5 || t3.tag === 26) {
                if (n3 === null) {
                  c3 = n3 = t3;
                  try {
                    if (a2 = c3.stateNode, i2)
                      o3 = a2.style, typeof o3.setProperty == `function` ? o3.setProperty(`display`, `none`, `important`) : o3.display = `none`;
                    else {
                      s2 = c3.stateNode;
                      var f3 = c3.memoizedProps.style, p3 = f3 != null && f3.hasOwnProperty(`display`) ? f3.display : null;
                      s2.style.display = p3 == null || typeof p3 == `boolean` ? `` : (`` + p3).trim();
                    }
                  } catch (e3) {
                    Z(c3, c3.return, e3);
                  }
                }
              } else if (t3.tag === 6) {
                if (n3 === null) {
                  c3 = t3;
                  try {
                    c3.stateNode.nodeValue = i2 ? `` : c3.memoizedProps;
                  } catch (e3) {
                    Z(c3, c3.return, e3);
                  }
                }
              } else if (t3.tag === 18) {
                if (n3 === null) {
                  c3 = t3;
                  try {
                    var m3 = c3.stateNode;
                    i2 ? tf(m3, true) : tf(c3.stateNode, false);
                  } catch (e3) {
                    Z(c3, c3.return, e3);
                  }
                }
              } else if ((t3.tag !== 22 && t3.tag !== 23 || t3.memoizedState === null || t3 === e2) && t3.child !== null) {
                t3.child.return = t3, t3 = t3.child;
                continue;
              }
              if (t3 === e2)
                break a;
              for (; t3.sibling === null; ) {
                if (t3.return === null || t3.return === e2)
                  break a;
                n3 === t3 && (n3 = null), t3 = t3.return;
              }
              n3 === t3 && (n3 = null), t3.sibling.return = t3.return, t3 = t3.sibling;
            }
        r2 & 4 && (r2 = e2.updateQueue, r2 !== null && (n3 = r2.retryQueue, n3 !== null && (r2.retryQueue = null, vl(e2, n3))));
        break;
      case 19:
        yl(t3, e2), Sl(e2), r2 & 4 && (r2 = e2.updateQueue, r2 !== null && (e2.updateQueue = null, vl(e2, r2)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        yl(t3, e2), Sl(e2);
    }
  }
  function Sl(e2) {
    var t3 = e2.flags;
    if (t3 & 2) {
      try {
        for (var n3, r2 = e2.return; r2 !== null; ) {
          if (tl(r2)) {
            n3 = r2;
            break;
          }
          r2 = r2.return;
        }
        if (n3 == null)
          throw Error(l2(160));
        switch (n3.tag) {
          case 27:
            var i2 = n3.stateNode;
            il(e2, nl(e2), i2);
            break;
          case 5:
            var a2 = n3.stateNode;
            n3.flags & 32 && (on(a2, ``), n3.flags &= -33), il(e2, nl(e2), a2);
            break;
          case 3:
          case 4:
            var o3 = n3.stateNode.containerInfo;
            rl(e2, nl(e2), o3);
            break;
          default:
            throw Error(l2(161));
        }
      } catch (t4) {
        Z(e2, e2.return, t4);
      }
      e2.flags &= -3;
    }
    t3 & 4096 && (e2.flags &= -4097);
  }
  function Cl(e2) {
    if (e2.subtreeFlags & 1024)
      for (e2 = e2.child; e2 !== null; ) {
        var t3 = e2;
        Cl(t3), t3.tag === 5 && t3.flags & 1024 && t3.stateNode.reset(), e2 = e2.sibling;
      }
  }
  function wl(e2, t3) {
    if (t3.subtreeFlags & 8772)
      for (t3 = t3.child; t3 !== null; )
        ul(e2, t3.alternate, t3), t3 = t3.sibling;
  }
  function Tl(e2) {
    for (e2 = e2.child; e2 !== null; ) {
      var t3 = e2;
      switch (t3.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Jc(4, t3, t3.return), Tl(t3);
          break;
        case 1:
          Qc(t3, t3.return);
          var n3 = t3.stateNode;
          typeof n3.componentWillUnmount == `function` && Xc(t3, t3.return, n3), Tl(t3);
          break;
        case 27:
          hf(t3.stateNode);
        case 26:
        case 5:
          Qc(t3, t3.return), Tl(t3);
          break;
        case 22:
          t3.memoizedState === null && Tl(t3);
          break;
        case 30:
          Tl(t3);
          break;
        default:
          Tl(t3);
      }
      e2 = e2.sibling;
    }
  }
  function El(e2, t3, n3) {
    for (n3 && (n3 = !!(t3.subtreeFlags & 8772)), t3 = t3.child; t3 !== null; ) {
      var r2 = t3.alternate, i2 = e2, a2 = t3, o3 = a2.flags;
      switch (a2.tag) {
        case 0:
        case 11:
        case 15:
          El(i2, a2, n3), qc(4, a2);
          break;
        case 1:
          if (El(i2, a2, n3), r2 = a2, i2 = r2.stateNode, typeof i2.componentDidMount == `function`)
            try {
              i2.componentDidMount();
            } catch (e3) {
              Z(r2, r2.return, e3);
            }
          if (r2 = a2, i2 = r2.updateQueue, i2 !== null) {
            var s2 = r2.stateNode;
            try {
              var c3 = i2.shared.hiddenCallbacks;
              if (c3 !== null)
                for (i2.shared.hiddenCallbacks = null, i2 = 0; i2 < c3.length; i2++)
                  oo(c3[i2], s2);
            } catch (e3) {
              Z(r2, r2.return, e3);
            }
          }
          n3 && o3 & 64 && Yc(a2), Zc(a2, a2.return);
          break;
        case 27:
          al(a2);
        case 26:
        case 5:
          El(i2, a2, n3), n3 && r2 === null && o3 & 4 && $c(a2), Zc(a2, a2.return);
          break;
        case 12:
          El(i2, a2, n3);
          break;
        case 31:
          El(i2, a2, n3), n3 && o3 & 4 && hl(i2, a2);
          break;
        case 13:
          El(i2, a2, n3), n3 && o3 & 4 && gl(i2, a2);
          break;
        case 22:
          a2.memoizedState === null && El(i2, a2, n3), Zc(a2, a2.return);
          break;
        case 30:
          break;
        default:
          El(i2, a2, n3);
      }
      t3 = t3.sibling;
    }
  }
  function Dl(e2, t3) {
    var n3 = null;
    e2 !== null && e2.memoizedState !== null && e2.memoizedState.cachePool !== null && (n3 = e2.memoizedState.cachePool.pool), e2 = null, t3.memoizedState !== null && t3.memoizedState.cachePool !== null && (e2 = t3.memoizedState.cachePool.pool), e2 !== n3 && (e2 != null && e2.refCount++, n3 != null && ya(n3));
  }
  function Ol(e2, t3) {
    e2 = null, t3.alternate !== null && (e2 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e2 && (t3.refCount++, e2 != null && ya(e2));
  }
  function kl(e2, t3, n3, r2) {
    if (t3.subtreeFlags & 10256)
      for (t3 = t3.child; t3 !== null; )
        Al(e2, t3, n3, r2), t3 = t3.sibling;
  }
  function Al(e2, t3, n3, r2) {
    var i2 = t3.flags;
    switch (t3.tag) {
      case 0:
      case 11:
      case 15:
        kl(e2, t3, n3, r2), i2 & 2048 && qc(9, t3);
        break;
      case 1:
        kl(e2, t3, n3, r2);
        break;
      case 3:
        kl(e2, t3, n3, r2), i2 & 2048 && (e2 = null, t3.alternate !== null && (e2 = t3.alternate.memoizedState.cache), t3 = t3.memoizedState.cache, t3 !== e2 && (t3.refCount++, e2 != null && ya(e2)));
        break;
      case 12:
        if (i2 & 2048) {
          kl(e2, t3, n3, r2), e2 = t3.stateNode;
          try {
            var a2 = t3.memoizedProps, o3 = a2.id, s2 = a2.onPostCommit;
            typeof s2 == `function` && s2(o3, t3.alternate === null ? `mount` : `update`, e2.passiveEffectDuration, -0);
          } catch (e3) {
            Z(t3, t3.return, e3);
          }
        } else
          kl(e2, t3, n3, r2);
        break;
      case 31:
        kl(e2, t3, n3, r2);
        break;
      case 13:
        kl(e2, t3, n3, r2);
        break;
      case 23:
        break;
      case 22:
        a2 = t3.stateNode, o3 = t3.alternate, t3.memoizedState === null ? a2._visibility & 2 ? kl(e2, t3, n3, r2) : (a2._visibility |= 2, jl(e2, t3, n3, r2, !!(t3.subtreeFlags & 10256) || false)) : a2._visibility & 2 ? kl(e2, t3, n3, r2) : Ml(e2, t3), i2 & 2048 && Dl(o3, t3);
        break;
      case 24:
        kl(e2, t3, n3, r2), i2 & 2048 && Ol(t3.alternate, t3);
        break;
      default:
        kl(e2, t3, n3, r2);
    }
  }
  function jl(e2, t3, n3, r2, i2) {
    for (i2 && (i2 = !!(t3.subtreeFlags & 10256) || false), t3 = t3.child; t3 !== null; ) {
      var a2 = e2, o3 = t3, s2 = n3, c3 = r2, l3 = o3.flags;
      switch (o3.tag) {
        case 0:
        case 11:
        case 15:
          jl(a2, o3, s2, c3, i2), qc(8, o3);
          break;
        case 23:
          break;
        case 22:
          var u3 = o3.stateNode;
          o3.memoizedState === null ? (u3._visibility |= 2, jl(a2, o3, s2, c3, i2)) : u3._visibility & 2 ? jl(a2, o3, s2, c3, i2) : Ml(a2, o3), i2 && l3 & 2048 && Dl(o3.alternate, o3);
          break;
        case 24:
          jl(a2, o3, s2, c3, i2), i2 && l3 & 2048 && Ol(o3.alternate, o3);
          break;
        default:
          jl(a2, o3, s2, c3, i2);
      }
      t3 = t3.sibling;
    }
  }
  function Ml(e2, t3) {
    if (t3.subtreeFlags & 10256)
      for (t3 = t3.child; t3 !== null; ) {
        var n3 = e2, r2 = t3, i2 = r2.flags;
        switch (r2.tag) {
          case 22:
            Ml(n3, r2), i2 & 2048 && Dl(r2.alternate, r2);
            break;
          case 24:
            Ml(n3, r2), i2 & 2048 && Ol(r2.alternate, r2);
            break;
          default:
            Ml(n3, r2);
        }
        t3 = t3.sibling;
      }
  }
  var Nl = 8192;
  function Pl(e2, t3, n3) {
    if (e2.subtreeFlags & Nl)
      for (e2 = e2.child; e2 !== null; )
        Fl(e2, t3, n3), e2 = e2.sibling;
  }
  function Fl(e2, t3, n3) {
    switch (e2.tag) {
      case 26:
        Pl(e2, t3, n3), e2.flags & Nl && e2.memoizedState !== null && qf(n3, bl, e2.memoizedState, e2.memoizedProps);
        break;
      case 5:
        Pl(e2, t3, n3);
        break;
      case 3:
      case 4:
        var r2 = bl;
        bl = vf(e2.stateNode.containerInfo), Pl(e2, t3, n3), bl = r2;
        break;
      case 22:
        e2.memoizedState === null && (r2 = e2.alternate, r2 !== null && r2.memoizedState !== null ? (r2 = Nl, Nl = 16777216, Pl(e2, t3, n3), Nl = r2) : Pl(e2, t3, n3));
        break;
      default:
        Pl(e2, t3, n3);
    }
  }
  function Il(e2) {
    var t3 = e2.alternate;
    if (t3 !== null && (e2 = t3.child, e2 !== null)) {
      t3.child = null;
      do
        t3 = e2.sibling, e2.sibling = null, e2 = t3;
      while (e2 !== null);
    }
  }
  function Ll(e2) {
    var t3 = e2.deletions;
    if (e2.flags & 16) {
      if (t3 !== null)
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          H = r2, Bl(r2, e2);
        }
      Il(e2);
    }
    if (e2.subtreeFlags & 10256)
      for (e2 = e2.child; e2 !== null; )
        Rl(e2), e2 = e2.sibling;
  }
  function Rl(e2) {
    switch (e2.tag) {
      case 0:
      case 11:
      case 15:
        Ll(e2), e2.flags & 2048 && Jc(9, e2, e2.return);
        break;
      case 3:
        Ll(e2);
        break;
      case 12:
        Ll(e2);
        break;
      case 22:
        var t3 = e2.stateNode;
        e2.memoizedState !== null && t3._visibility & 2 && (e2.return === null || e2.return.tag !== 13) ? (t3._visibility &= -3, zl(e2)) : Ll(e2);
        break;
      default:
        Ll(e2);
    }
  }
  function zl(e2) {
    var t3 = e2.deletions;
    if (e2.flags & 16) {
      if (t3 !== null)
        for (var n3 = 0; n3 < t3.length; n3++) {
          var r2 = t3[n3];
          H = r2, Bl(r2, e2);
        }
      Il(e2);
    }
    for (e2 = e2.child; e2 !== null; ) {
      switch (t3 = e2, t3.tag) {
        case 0:
        case 11:
        case 15:
          Jc(8, t3, t3.return), zl(t3);
          break;
        case 22:
          n3 = t3.stateNode, n3._visibility & 2 && (n3._visibility &= -3, zl(t3));
          break;
        default:
          zl(t3);
      }
      e2 = e2.sibling;
    }
  }
  function Bl(e2, t3) {
    for (; H !== null; ) {
      var n3 = H;
      switch (n3.tag) {
        case 0:
        case 11:
        case 15:
          Jc(8, n3, t3);
          break;
        case 23:
        case 22:
          if (n3.memoizedState !== null && n3.memoizedState.cachePool !== null) {
            var r2 = n3.memoizedState.cachePool.pool;
            r2 != null && r2.refCount++;
          }
          break;
        case 24:
          ya(n3.memoizedState.cache);
      }
      if (r2 = n3.child, r2 !== null)
        r2.return = n3, H = r2;
      else
        a:
          for (n3 = e2; H !== null; ) {
            r2 = H;
            var i2 = r2.sibling, a2 = r2.return;
            if (dl(r2), r2 === n3) {
              H = null;
              break a;
            }
            if (i2 !== null) {
              i2.return = a2, H = i2;
              break a;
            }
            H = a2;
          }
    }
  }
  var Vl = {getCacheForType: function(e2) {
    var t3 = A(j), n3 = t3.data.get(e2);
    return n3 === void 0 && (n3 = e2(), t3.data.set(e2, n3)), n3;
  }, cacheSignal: function() {
    return A(j).controller.signal;
  }}, Hl = typeof WeakMap == `function` ? WeakMap : Map, W = 0, G = null, K = null, q = 0, J = 0, Ul = null, Wl = false, Gl = false, Kl = false, ql = 0, Y = 0, Jl = 0, Yl = 0, Xl = 0, Zl = 0, Ql = 0, $l = null, eu = null, tu = false, nu = 0, ru = 0, iu = 1 / 0, au = null, ou = null, X = 0, su = null, cu = null, lu = 0, uu = 0, du = null, fu = null, pu = 0, mu = null;
  function hu() {
    return W & 2 && q !== 0 ? q & -q : S.T === null ? vt() : pd();
  }
  function gu() {
    if (Zl === 0) {
      if (!(q & 536870912) || k) {
        var e2 = rt;
        rt <<= 1, !(rt & 3932160) && (rt = 262144), Zl = e2;
      } else
        Zl = 536870912;
    }
    return e2 = mo.current, e2 !== null && (e2.flags |= 32), Zl;
  }
  function _u(e2, t3, n3) {
    (e2 === G && (J === 2 || J === 9) || e2.cancelPendingCommit !== null) && (wu(e2, 0), xu(e2, q, Zl, false)), dt(e2, n3), (!(W & 2) || e2 !== G) && (e2 === G && (!(W & 2) && (Yl |= n3), Y === 4 && xu(e2, q, Zl, false)), ad(e2));
  }
  function vu(e2, t3, n3) {
    if (W & 6)
      throw Error(l2(327));
    var r2 = !n3 && !(t3 & 127) && (t3 & e2.expiredLanes) === 0 || st(e2, t3), i2 = r2 ? Mu(e2, t3) : Au(e2, t3, true), a2 = r2;
    do {
      if (i2 === 0) {
        Gl && !r2 && xu(e2, t3, 0, false);
        break;
      }
      if (n3 = e2.current.alternate, a2 && !bu(n3)) {
        i2 = Au(e2, t3, false), a2 = false;
        continue;
      }
      if (i2 === 2) {
        if (a2 = t3, e2.errorRecoveryDisabledLanes & a2)
          var o3 = 0;
        else
          o3 = e2.pendingLanes & -536870913, o3 = o3 === 0 ? o3 & 536870912 ? 536870912 : 0 : o3;
        if (o3 !== 0) {
          t3 = o3;
          a: {
            var s2 = e2;
            i2 = $l;
            var c3 = s2.current.memoizedState.isDehydrated;
            if (c3 && (wu(s2, o3).flags |= 256), o3 = Au(s2, o3, false), o3 !== 2) {
              if (Kl && !c3) {
                s2.errorRecoveryDisabledLanes |= a2, Yl |= a2, i2 = 4;
                break a;
              }
              a2 = eu, eu = i2, a2 !== null && (eu === null ? eu = a2 : eu.push.apply(eu, a2));
            }
            i2 = o3;
          }
          if (a2 = false, i2 !== 2)
            continue;
        }
      }
      if (i2 === 1) {
        wu(e2, 0), xu(e2, t3, 0, true);
        break;
      }
      a: {
        switch (r2 = e2, a2 = i2, a2) {
          case 0:
          case 1:
            throw Error(l2(345));
          case 4:
            if ((t3 & 4194048) !== t3)
              break;
          case 6:
            xu(r2, t3, Zl, !Wl);
            break a;
          case 2:
            eu = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(l2(329));
        }
        if ((t3 & 62914560) === t3 && (i2 = nu + 300 - Be(), 10 < i2)) {
          if (xu(r2, t3, Zl, !Wl), ot(r2, 0, true) !== 0)
            break a;
          lu = t3, r2.timeoutHandle = Jd(yu.bind(null, r2, n3, eu, au, tu, t3, Zl, Yl, Ql, Wl, a2, `Throttled`, -0, 0), i2);
          break a;
        }
        yu(r2, n3, eu, au, tu, t3, Zl, Yl, Ql, Wl, a2, null, -0, 0);
      }
      break;
    } while (1);
    ad(e2);
  }
  function yu(e2, t3, n3, r2, i2, a2, o3, s2, c3, l3, u3, d3, f3, p3) {
    if (e2.timeoutHandle = -1, d3 = t3.subtreeFlags, d3 & 8192 || (d3 & 16785408) == 16785408) {
      d3 = {stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: mn}, Fl(t3, a2, d3);
      var m3 = (a2 & 62914560) === a2 ? nu - Be() : (a2 & 4194048) === a2 ? ru - Be() : 0;
      if (m3 = Yf(d3, m3), m3 !== null) {
        lu = a2, e2.cancelPendingCommit = m3(zu.bind(null, e2, t3, a2, n3, r2, i2, o3, s2, c3, u3, d3, null, f3, p3)), xu(e2, a2, o3, !l3);
        return;
      }
    }
    zu(e2, t3, a2, n3, r2, i2, o3, s2, c3);
  }
  function bu(e2) {
    for (var t3 = e2; ; ) {
      var n3 = t3.tag;
      if ((n3 === 0 || n3 === 11 || n3 === 15) && t3.flags & 16384 && (n3 = t3.updateQueue, n3 !== null && (n3 = n3.stores, n3 !== null)))
        for (var r2 = 0; r2 < n3.length; r2++) {
          var i2 = n3[r2], a2 = i2.getSnapshot;
          i2 = i2.value;
          try {
            if (!Ir(a2(), i2))
              return false;
          } catch {
            return false;
          }
        }
      if (n3 = t3.child, t3.subtreeFlags & 16384 && n3 !== null)
        n3.return = t3, t3 = n3;
      else {
        if (t3 === e2)
          break;
        for (; t3.sibling === null; ) {
          if (t3.return === null || t3.return === e2)
            return true;
          t3 = t3.return;
        }
        t3.sibling.return = t3.return, t3 = t3.sibling;
      }
    }
    return true;
  }
  function xu(e2, t3, n3, r2) {
    t3 &= ~Xl, t3 &= ~Yl, e2.suspendedLanes |= t3, e2.pingedLanes &= ~t3, r2 && (e2.warmLanes |= t3), r2 = e2.expirationTimes;
    for (var i2 = t3; 0 < i2; ) {
      var a2 = 31 - Qe(i2), o3 = 1 << a2;
      r2[a2] = -1, i2 &= ~o3;
    }
    n3 !== 0 && pt(e2, n3, t3);
  }
  function Su() {
    return W & 6 ? true : (od(0, false), false);
  }
  function Cu() {
    if (K !== null) {
      if (J === 0)
        var e2 = K.return;
      else
        e2 = K, aa = ia = null, Lo(e2), Ha = null, Ua = 0, e2 = K;
      for (; e2 !== null; )
        Kc(e2.alternate, e2), e2 = e2.return;
      K = null;
    }
  }
  function wu(e2, t3) {
    var n3 = e2.timeoutHandle;
    n3 !== -1 && (e2.timeoutHandle = -1, Yd(n3)), n3 = e2.cancelPendingCommit, n3 !== null && (e2.cancelPendingCommit = null, n3()), lu = 0, Cu(), G = e2, K = n3 = wi(e2.current, null), q = t3, J = 0, Ul = null, Wl = false, Gl = st(e2, t3), Kl = false, Ql = Zl = Xl = Yl = Jl = Y = 0, eu = $l = null, tu = false, t3 & 8 && (t3 |= t3 & 32);
    var r2 = e2.entangledLanes;
    if (r2 !== 0)
      for (e2 = e2.entanglements, r2 &= t3; 0 < r2; ) {
        var i2 = 31 - Qe(r2), a2 = 1 << i2;
        t3 |= e2[i2], r2 &= ~a2;
      }
    return ql = t3, mi(), n3;
  }
  function Tu(e2, t3) {
    N = null, S.H = Ks, t3 === Ma || t3 === Pa ? (t3 = Ba(), J = 3) : t3 === Na ? (t3 = Ba(), J = 4) : J = t3 === uc ? 8 : typeof t3 == `object` && t3 && typeof t3.then == `function` ? 6 : 1, Ul = t3, K === null && (Y = 1, ic(e2, Mi(t3, e2.current)));
  }
  function Eu() {
    var e2 = mo.current;
    return e2 === null ? true : (q & 4194048) === q ? ho === null : (q & 62914560) === q || q & 536870912 ? e2 === ho : false;
  }
  function Du() {
    var e2 = S.H;
    return S.H = Ks, e2 === null ? Ks : e2;
  }
  function Ou() {
    var e2 = S.A;
    return S.A = Vl, e2;
  }
  function ku() {
    Y = 4, Wl || (q & 4194048) !== q && mo.current !== null || (Gl = true), !(Jl & 134217727) && !(Yl & 134217727) || G === null || xu(G, q, Zl, false);
  }
  function Au(e2, t3, n3) {
    var r2 = W;
    W |= 2;
    var i2 = Du(), a2 = Ou();
    (G !== e2 || q !== t3) && (au = null, wu(e2, t3)), t3 = false;
    var o3 = Y;
    a:
      do
        try {
          if (J !== 0 && K !== null) {
            var s2 = K, c3 = Ul;
            switch (J) {
              case 8:
                Cu(), o3 = 6;
                break a;
              case 3:
              case 2:
              case 9:
              case 6:
                mo.current === null && (t3 = true);
                var l3 = J;
                if (J = 0, Ul = null, Iu(e2, s2, c3, l3), n3 && Gl) {
                  o3 = 0;
                  break a;
                }
                break;
              default:
                l3 = J, J = 0, Ul = null, Iu(e2, s2, c3, l3);
            }
          }
          ju(), o3 = Y;
          break;
        } catch (t4) {
          Tu(e2, t4);
        }
      while (1);
    return t3 && e2.shellSuspendCounter++, aa = ia = null, W = r2, S.H = i2, S.A = a2, K === null && (G = null, q = 0, mi()), o3;
  }
  function ju() {
    for (; K !== null; )
      Pu(K);
  }
  function Mu(e2, t3) {
    var n3 = W;
    W |= 2;
    var r2 = Du(), i2 = Ou();
    G !== e2 || q !== t3 ? (au = null, iu = Be() + 500, wu(e2, t3)) : Gl = st(e2, t3);
    a:
      do
        try {
          if (J !== 0 && K !== null) {
            t3 = K;
            var a2 = Ul;
            b:
              switch (J) {
                case 1:
                  J = 0, Ul = null, Iu(e2, t3, a2, 1);
                  break;
                case 2:
                case 9:
                  if (Ia(a2)) {
                    J = 0, Ul = null, Fu(t3);
                    break;
                  }
                  t3 = function() {
                    J !== 2 && J !== 9 || G !== e2 || (J = 7), ad(e2);
                  }, a2.then(t3, t3);
                  break a;
                case 3:
                  J = 7;
                  break a;
                case 4:
                  J = 5;
                  break a;
                case 7:
                  Ia(a2) ? (J = 0, Ul = null, Fu(t3)) : (J = 0, Ul = null, Iu(e2, t3, a2, 7));
                  break;
                case 5:
                  var o3 = null;
                  switch (K.tag) {
                    case 26:
                      o3 = K.memoizedState;
                    case 5:
                    case 27:
                      var s2 = K;
                      if (o3 ? Kf(o3) : s2.stateNode.complete) {
                        J = 0, Ul = null;
                        var c3 = s2.sibling;
                        if (c3 !== null)
                          K = c3;
                        else {
                          var u3 = s2.return;
                          u3 === null ? K = null : (K = u3, Lu(u3));
                        }
                        break b;
                      }
                  }
                  J = 0, Ul = null, Iu(e2, t3, a2, 5);
                  break;
                case 6:
                  J = 0, Ul = null, Iu(e2, t3, a2, 6);
                  break;
                case 8:
                  Cu(), Y = 6;
                  break a;
                default:
                  throw Error(l2(462));
              }
          }
          Nu();
          break;
        } catch (t4) {
          Tu(e2, t4);
        }
      while (1);
    return aa = ia = null, S.H = r2, S.A = i2, W = n3, K === null ? (G = null, q = 0, mi(), Y) : 0;
  }
  function Nu() {
    for (; K !== null && !Re(); )
      Pu(K);
  }
  function Pu(e2) {
    var t3 = Rc(e2.alternate, e2, ql);
    e2.memoizedProps = e2.pendingProps, t3 === null ? Lu(e2) : K = t3;
  }
  function Fu(e2) {
    var t3 = e2, n3 = t3.alternate;
    switch (t3.tag) {
      case 15:
      case 0:
        t3 = Sc(n3, t3, t3.pendingProps, t3.type, void 0, q);
        break;
      case 11:
        t3 = Sc(n3, t3, t3.pendingProps, t3.type.render, t3.ref, q);
        break;
      case 5:
        Lo(t3);
      default:
        Kc(n3, t3), t3 = K = Ti(t3, ql), t3 = Rc(n3, t3, ql);
    }
    e2.memoizedProps = e2.pendingProps, t3 === null ? Lu(e2) : K = t3;
  }
  function Iu(e2, t3, n3, r2) {
    aa = ia = null, Lo(t3), Ha = null, Ua = 0;
    var i2 = t3.return;
    try {
      if (lc(e2, i2, t3, n3, q)) {
        Y = 1, ic(e2, Mi(n3, e2.current)), K = null;
        return;
      }
    } catch (t4) {
      if (i2 !== null)
        throw K = i2, t4;
      Y = 1, ic(e2, Mi(n3, e2.current)), K = null;
      return;
    }
    t3.flags & 32768 ? (k || r2 === 1 ? e2 = true : Gl || q & 536870912 ? e2 = false : (Wl = e2 = true, (r2 === 2 || r2 === 9 || r2 === 3 || r2 === 6) && (r2 = mo.current, r2 !== null && r2.tag === 13 && (r2.flags |= 16384))), Ru(t3, e2)) : Lu(t3);
  }
  function Lu(e2) {
    var t3 = e2;
    do {
      if (t3.flags & 32768) {
        Ru(t3, Wl);
        return;
      }
      e2 = t3.return;
      var n3 = Wc(t3.alternate, t3, ql);
      if (n3 !== null) {
        K = n3;
        return;
      }
      if (t3 = t3.sibling, t3 !== null) {
        K = t3;
        return;
      }
      K = t3 = e2;
    } while (t3 !== null);
    Y === 0 && (Y = 5);
  }
  function Ru(e2, t3) {
    do {
      var n3 = Gc(e2.alternate, e2);
      if (n3 !== null) {
        n3.flags &= 32767, K = n3;
        return;
      }
      if (n3 = e2.return, n3 !== null && (n3.flags |= 32768, n3.subtreeFlags = 0, n3.deletions = null), !t3 && (e2 = e2.sibling, e2 !== null)) {
        K = e2;
        return;
      }
      K = e2 = n3;
    } while (e2 !== null);
    Y = 6, K = null;
  }
  function zu(e2, t3, n3, r2, i2, a2, o3, s2, c3) {
    e2.cancelPendingCommit = null;
    do
      Wu();
    while (X !== 0);
    if (W & 6)
      throw Error(l2(327));
    if (t3 !== null) {
      if (t3 === e2.current)
        throw Error(l2(177));
      if (a2 = t3.lanes | t3.childLanes, a2 |= pi, ft(e2, n3, a2, o3, s2, c3), e2 === G && (K = G = null, q = 0), cu = t3, su = e2, lu = n3, uu = a2, du = i2, fu = r2, t3.subtreeFlags & 10256 || t3.flags & 10256 ? (e2.callbackNode = null, e2.callbackPriority = 0, Qu(We, function() {
        return Gu(), null;
      })) : (e2.callbackNode = null, e2.callbackPriority = 0), r2 = !!(t3.flags & 13878), t3.subtreeFlags & 13878 || r2) {
        r2 = S.T, S.T = null, i2 = C.p, C.p = 2, o3 = W, W |= 4;
        try {
          ll(e2, t3, n3);
        } finally {
          W = o3, C.p = i2, S.T = r2;
        }
      }
      X = 1, Bu(), Vu(), Hu();
    }
  }
  function Bu() {
    if (X === 1) {
      X = 0;
      var e2 = su, t3 = cu, n3 = !!(t3.flags & 13878);
      if (t3.subtreeFlags & 13878 || n3) {
        n3 = S.T, S.T = null;
        var r2 = C.p;
        C.p = 2;
        var i2 = W;
        W |= 4;
        try {
          xl(t3, e2);
          var a2 = Vd, o3 = Vr(e2.containerInfo), s2 = a2.focusedElem, c3 = a2.selectionRange;
          if (o3 !== s2 && s2 && s2.ownerDocument && Br(s2.ownerDocument.documentElement, s2)) {
            if (c3 !== null && Hr(s2)) {
              var l3 = c3.start, u3 = c3.end;
              if (u3 === void 0 && (u3 = l3), `selectionStart` in s2)
                s2.selectionStart = l3, s2.selectionEnd = Math.min(u3, s2.value.length);
              else {
                var d3 = s2.ownerDocument || document, f3 = d3 && d3.defaultView || window;
                if (f3.getSelection) {
                  var p3 = f3.getSelection(), m3 = s2.textContent.length, h2 = Math.min(c3.start, m3), g2 = c3.end === void 0 ? h2 : Math.min(c3.end, m3);
                  !p3.extend && h2 > g2 && (o3 = g2, g2 = h2, h2 = o3);
                  var _2 = zr(s2, h2), v2 = zr(s2, g2);
                  if (_2 && v2 && (p3.rangeCount !== 1 || p3.anchorNode !== _2.node || p3.anchorOffset !== _2.offset || p3.focusNode !== v2.node || p3.focusOffset !== v2.offset)) {
                    var y2 = d3.createRange();
                    y2.setStart(_2.node, _2.offset), p3.removeAllRanges(), h2 > g2 ? (p3.addRange(y2), p3.extend(v2.node, v2.offset)) : (y2.setEnd(v2.node, v2.offset), p3.addRange(y2));
                  }
                }
              }
            }
            for (d3 = [], p3 = s2; p3 = p3.parentNode; )
              p3.nodeType === 1 && d3.push({element: p3, left: p3.scrollLeft, top: p3.scrollTop});
            for (typeof s2.focus == `function` && s2.focus(), s2 = 0; s2 < d3.length; s2++) {
              var b2 = d3[s2];
              b2.element.scrollLeft = b2.left, b2.element.scrollTop = b2.top;
            }
          }
          lp = !!Bd, Vd = Bd = null;
        } finally {
          W = i2, C.p = r2, S.T = n3;
        }
      }
      e2.current = t3, X = 2;
    }
  }
  function Vu() {
    if (X === 2) {
      X = 0;
      var e2 = su, t3 = cu, n3 = !!(t3.flags & 8772);
      if (t3.subtreeFlags & 8772 || n3) {
        n3 = S.T, S.T = null;
        var r2 = C.p;
        C.p = 2;
        var i2 = W;
        W |= 4;
        try {
          ul(e2, t3.alternate, t3);
        } finally {
          W = i2, C.p = r2, S.T = n3;
        }
      }
      X = 3;
    }
  }
  function Hu() {
    if (X === 4 || X === 3) {
      X = 0, ze();
      var e2 = su, t3 = cu, n3 = lu, r2 = fu;
      t3.subtreeFlags & 10256 || t3.flags & 10256 ? X = 5 : (X = 0, cu = su = null, Uu(e2, e2.pendingLanes));
      var i2 = e2.pendingLanes;
      if (i2 === 0 && (ou = null), _t(n3), t3 = t3.stateNode, Xe && typeof Xe.onCommitFiberRoot == `function`)
        try {
          Xe.onCommitFiberRoot(Ye, t3, void 0, (t3.current.flags & 128) == 128);
        } catch {
        }
      if (r2 !== null) {
        t3 = S.T, i2 = C.p, C.p = 2, S.T = null;
        try {
          for (var a2 = e2.onRecoverableError, o3 = 0; o3 < r2.length; o3++) {
            var s2 = r2[o3];
            a2(s2.value, {componentStack: s2.stack});
          }
        } finally {
          S.T = t3, C.p = i2;
        }
      }
      lu & 3 && Wu(), ad(e2), i2 = e2.pendingLanes, n3 & 261930 && i2 & 42 ? e2 === mu ? pu++ : (pu = 0, mu = e2) : pu = 0, od(0, false);
    }
  }
  function Uu(e2, t3) {
    (e2.pooledCacheLanes &= t3) === 0 && (t3 = e2.pooledCache, t3 != null && (e2.pooledCache = null, ya(t3)));
  }
  function Wu() {
    return Bu(), Vu(), Hu(), Gu();
  }
  function Gu() {
    if (X !== 5)
      return false;
    var e2 = su, t3 = uu;
    uu = 0;
    var n3 = _t(lu), r2 = S.T, i2 = C.p;
    try {
      C.p = 32 > n3 ? 32 : n3, S.T = null, n3 = du, du = null;
      var a2 = su, o3 = lu;
      if (X = 0, cu = su = null, lu = 0, W & 6)
        throw Error(l2(331));
      var s2 = W;
      if (W |= 4, Rl(a2.current), Al(a2, a2.current, o3, n3), W = s2, od(0, false), Xe && typeof Xe.onPostCommitFiberRoot == `function`)
        try {
          Xe.onPostCommitFiberRoot(Ye, a2);
        } catch {
        }
      return true;
    } finally {
      C.p = i2, S.T = r2, Uu(e2, t3);
    }
  }
  function Ku(e2, t3, n3) {
    t3 = Mi(n3, t3), t3 = oc(e2.stateNode, t3, 2), e2 = eo(e2, t3, 2), e2 !== null && (dt(e2, 2), ad(e2));
  }
  function Z(e2, t3, n3) {
    if (e2.tag === 3)
      Ku(e2, e2, n3);
    else
      for (; t3 !== null; ) {
        if (t3.tag === 3) {
          Ku(t3, e2, n3);
          break;
        }
        if (t3.tag === 1) {
          var r2 = t3.stateNode;
          if (typeof t3.type.getDerivedStateFromError == `function` || typeof r2.componentDidCatch == `function` && (ou === null || !ou.has(r2))) {
            e2 = Mi(n3, e2), n3 = sc(2), r2 = eo(t3, n3, 2), r2 !== null && (cc(n3, r2, t3, e2), dt(r2, 2), ad(r2));
            break;
          }
        }
        t3 = t3.return;
      }
  }
  function qu(e2, t3, n3) {
    var r2 = e2.pingCache;
    if (r2 === null) {
      r2 = e2.pingCache = new Hl();
      var i2 = new Set();
      r2.set(t3, i2);
    } else
      i2 = r2.get(t3), i2 === void 0 && (i2 = new Set(), r2.set(t3, i2));
    i2.has(n3) || (Kl = true, i2.add(n3), e2 = Ju.bind(null, e2, t3, n3), t3.then(e2, e2));
  }
  function Ju(e2, t3, n3) {
    var r2 = e2.pingCache;
    r2 !== null && r2.delete(t3), e2.pingedLanes |= e2.suspendedLanes & n3, e2.warmLanes &= ~n3, G === e2 && (q & n3) === n3 && (Y === 4 || Y === 3 && (q & 62914560) === q && 300 > Be() - nu ? !(W & 2) && wu(e2, 0) : Xl |= n3, Ql === q && (Ql = 0)), ad(e2);
  }
  function Yu(e2, t3) {
    t3 === 0 && (t3 = lt()), e2 = _i(e2, t3), e2 !== null && (dt(e2, t3), ad(e2));
  }
  function Xu(e2) {
    var t3 = e2.memoizedState, n3 = 0;
    t3 !== null && (n3 = t3.retryLane), Yu(e2, n3);
  }
  function Zu(e2, t3) {
    var n3 = 0;
    switch (e2.tag) {
      case 31:
      case 13:
        var r2 = e2.stateNode, i2 = e2.memoizedState;
        i2 !== null && (n3 = i2.retryLane);
        break;
      case 19:
        r2 = e2.stateNode;
        break;
      case 22:
        r2 = e2.stateNode._retryCache;
        break;
      default:
        throw Error(l2(314));
    }
    r2 !== null && r2.delete(t3), Yu(e2, n3);
  }
  function Qu(e2, t3) {
    return Ie(e2, t3);
  }
  var $u = null, ed = null, td = false, nd = false, rd = false, id = 0;
  function ad(e2) {
    e2 !== ed && e2.next === null && (ed === null ? $u = ed = e2 : ed = ed.next = e2), nd = true, td || (td = true, fd());
  }
  function od(e2, t3) {
    if (!rd && nd) {
      rd = true;
      do
        for (var n3 = false, r2 = $u; r2 !== null; ) {
          if (!t3) {
            if (e2 !== 0) {
              var i2 = r2.pendingLanes;
              if (i2 === 0)
                var a2 = 0;
              else {
                var o3 = r2.suspendedLanes, s2 = r2.pingedLanes;
                a2 = (1 << 31 - Qe(42 | e2) + 1) - 1, a2 &= i2 & ~(o3 & ~s2), a2 = a2 & 201326741 ? a2 & 201326741 | 1 : a2 ? a2 | 2 : 0;
              }
              a2 !== 0 && (n3 = true, dd(r2, a2));
            } else
              a2 = q, a2 = ot(r2, r2 === G ? a2 : 0, r2.cancelPendingCommit !== null || r2.timeoutHandle !== -1), !(a2 & 3) || st(r2, a2) || (n3 = true, dd(r2, a2));
          }
          r2 = r2.next;
        }
      while (n3);
      rd = false;
    }
  }
  function sd() {
    cd();
  }
  function cd() {
    nd = td = false;
    var e2 = 0;
    id !== 0 && qd() && (e2 = id);
    for (var t3 = Be(), n3 = null, r2 = $u; r2 !== null; ) {
      var i2 = r2.next, a2 = ld(r2, t3);
      a2 === 0 ? (r2.next = null, n3 === null ? $u = i2 : n3.next = i2, i2 === null && (ed = n3)) : (n3 = r2, (e2 !== 0 || a2 & 3) && (nd = true)), r2 = i2;
    }
    X !== 0 && X !== 5 || od(e2, false), id !== 0 && (id = 0);
  }
  function ld(e2, t3) {
    for (var n3 = e2.suspendedLanes, r2 = e2.pingedLanes, i2 = e2.expirationTimes, a2 = e2.pendingLanes & -62914561; 0 < a2; ) {
      var o3 = 31 - Qe(a2), s2 = 1 << o3, c3 = i2[o3];
      c3 === -1 ? ((s2 & n3) === 0 || (s2 & r2) !== 0) && (i2[o3] = ct(s2, t3)) : c3 <= t3 && (e2.expiredLanes |= s2), a2 &= ~s2;
    }
    if (t3 = G, n3 = q, n3 = ot(e2, e2 === t3 ? n3 : 0, e2.cancelPendingCommit !== null || e2.timeoutHandle !== -1), r2 = e2.callbackNode, n3 === 0 || e2 === t3 && (J === 2 || J === 9) || e2.cancelPendingCommit !== null)
      return r2 !== null && r2 !== null && Le(r2), e2.callbackNode = null, e2.callbackPriority = 0;
    if (!(n3 & 3) || st(e2, n3)) {
      if (t3 = n3 & -n3, t3 === e2.callbackPriority)
        return t3;
      switch (r2 !== null && Le(r2), _t(n3)) {
        case 2:
        case 8:
          n3 = Ue;
          break;
        case 32:
          n3 = We;
          break;
        case 268435456:
          n3 = Ke;
          break;
        default:
          n3 = We;
      }
      return r2 = ud.bind(null, e2), n3 = Ie(n3, r2), e2.callbackPriority = t3, e2.callbackNode = n3, t3;
    }
    return r2 !== null && r2 !== null && Le(r2), e2.callbackPriority = 2, e2.callbackNode = null, 2;
  }
  function ud(e2, t3) {
    if (X !== 0 && X !== 5)
      return e2.callbackNode = null, e2.callbackPriority = 0, null;
    var n3 = e2.callbackNode;
    if (Wu() && e2.callbackNode !== n3)
      return null;
    var r2 = q;
    return r2 = ot(e2, e2 === G ? r2 : 0, e2.cancelPendingCommit !== null || e2.timeoutHandle !== -1), r2 === 0 ? null : (vu(e2, r2, t3), ld(e2, Be()), e2.callbackNode != null && e2.callbackNode === n3 ? ud.bind(null, e2) : null);
  }
  function dd(e2, t3) {
    if (Wu())
      return null;
    vu(e2, t3, true);
  }
  function fd() {
    Zd(function() {
      W & 6 ? Ie(He, sd) : cd();
    });
  }
  function pd() {
    if (id === 0) {
      var e2 = Sa;
      e2 === 0 && (e2 = nt, nt <<= 1, !(nt & 261888) && (nt = 256)), id = e2;
    }
    return id;
  }
  function md(e2) {
    return e2 == null || typeof e2 == `symbol` || typeof e2 == `boolean` ? null : typeof e2 == `function` ? e2 : pn(`` + e2);
  }
  function hd(e2, t3) {
    var n3 = t3.ownerDocument.createElement(`input`);
    return n3.name = t3.name, n3.value = t3.value, e2.id && n3.setAttribute(`form`, e2.id), t3.parentNode.insertBefore(n3, t3), e2 = new FormData(e2), n3.parentNode.removeChild(n3), e2;
  }
  function gd(e2, t3, n3, r2, i2) {
    if (t3 === `submit` && n3 && n3.stateNode === i2) {
      var a2 = md((i2[St] || null).action), o3 = r2.submitter;
      o3 && (t3 = (t3 = o3[St] || null) ? md(t3.formAction) : o3.getAttribute(`formAction`), t3 !== null && (a2 = t3, o3 = null));
      var s2 = new Fn(`action`, `action`, null, r2, i2);
      e2.push({event: s2, listeners: [{instance: null, listener: function() {
        if (r2.defaultPrevented) {
          if (id !== 0) {
            var e3 = o3 ? hd(i2, o3) : new FormData(i2);
            Ms(n3, {pending: true, data: e3, method: i2.method, action: a2}, null, e3);
          }
        } else
          typeof a2 == `function` && (s2.preventDefault(), e3 = o3 ? hd(i2, o3) : new FormData(i2), Ms(n3, {pending: true, data: e3, method: i2.method, action: a2}, a2, e3));
      }, currentTarget: i2}]});
    }
  }
  for (var _d = 0; _d < ci.length; _d++) {
    var vd = ci[_d];
    li(vd.toLowerCase(), `on` + (vd[0].toUpperCase() + vd.slice(1)));
  }
  li(ei, `onAnimationEnd`), li(ti, `onAnimationIteration`), li(ni, `onAnimationStart`), li(`dblclick`, `onDoubleClick`), li(`focusin`, `onFocus`), li(`focusout`, `onBlur`), li(ri, `onTransitionRun`), li(ii, `onTransitionStart`), li(ai, `onTransitionCancel`), li(oi, `onTransitionEnd`), Lt(`onMouseEnter`, [`mouseout`, `mouseover`]), Lt(`onMouseLeave`, [`mouseout`, `mouseover`]), Lt(`onPointerEnter`, [`pointerout`, `pointerover`]), Lt(`onPointerLeave`, [`pointerout`, `pointerover`]), It(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `)), It(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)), It(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]), It(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `)), It(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `)), It(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var yd = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `), bd = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(yd));
  function xd(e2, t3) {
    t3 = !!(t3 & 4);
    for (var n3 = 0; n3 < e2.length; n3++) {
      var r2 = e2[n3], i2 = r2.event;
      r2 = r2.listeners;
      a: {
        var a2 = void 0;
        if (t3)
          for (var o3 = r2.length - 1; 0 <= o3; o3--) {
            var s2 = r2[o3], c3 = s2.instance, l3 = s2.currentTarget;
            if (s2 = s2.listener, c3 !== a2 && i2.isPropagationStopped())
              break a;
            a2 = s2, i2.currentTarget = l3;
            try {
              a2(i2);
            } catch (e3) {
              ui(e3);
            }
            i2.currentTarget = null, a2 = c3;
          }
        else
          for (o3 = 0; o3 < r2.length; o3++) {
            if (s2 = r2[o3], c3 = s2.instance, l3 = s2.currentTarget, s2 = s2.listener, c3 !== a2 && i2.isPropagationStopped())
              break a;
            a2 = s2, i2.currentTarget = l3;
            try {
              a2(i2);
            } catch (e3) {
              ui(e3);
            }
            i2.currentTarget = null, a2 = c3;
          }
      }
    }
  }
  function Q(e2, t3) {
    var n3 = t3[wt];
    n3 === void 0 && (n3 = t3[wt] = new Set());
    var r2 = e2 + `__bubble`;
    n3.has(r2) || (Td(t3, e2, 2, false), n3.add(r2));
  }
  function Sd(e2, t3, n3) {
    var r2 = 0;
    t3 && (r2 |= 4), Td(n3, e2, r2, t3);
  }
  var Cd = `_reactListening` + Math.random().toString(36).slice(2);
  function wd(e2) {
    if (!e2[Cd]) {
      e2[Cd] = true, Pt.forEach(function(t4) {
        t4 !== `selectionchange` && (bd.has(t4) || Sd(t4, false, e2), Sd(t4, true, e2));
      });
      var t3 = e2.nodeType === 9 ? e2 : e2.ownerDocument;
      t3 === null || t3[Cd] || (t3[Cd] = true, Sd(`selectionchange`, false, t3));
    }
  }
  function Td(e2, t3, n3, r2) {
    switch (gp(t3)) {
      case 2:
        var i2 = up;
        break;
      case 8:
        i2 = dp;
        break;
      default:
        i2 = fp;
    }
    n3 = i2.bind(null, t3, n3, e2), i2 = void 0, !wn || t3 !== `touchstart` && t3 !== `touchmove` && t3 !== `wheel` || (i2 = true), r2 ? i2 === void 0 ? e2.addEventListener(t3, n3, true) : e2.addEventListener(t3, n3, {capture: true, passive: i2}) : i2 === void 0 ? e2.addEventListener(t3, n3, false) : e2.addEventListener(t3, n3, {passive: i2});
  }
  function Ed(e2, t3, n3, r2, i2) {
    var a2 = r2;
    if (!(t3 & 1) && !(t3 & 2) && r2 !== null)
      a:
        for (; ; ) {
          if (r2 === null)
            return;
          var o3 = r2.tag;
          if (o3 === 3 || o3 === 4) {
            var s2 = r2.stateNode.containerInfo;
            if (s2 === i2)
              break;
            if (o3 === 4)
              for (o3 = r2.return; o3 !== null; ) {
                var c3 = o3.tag;
                if ((c3 === 3 || c3 === 4) && o3.stateNode.containerInfo === i2)
                  return;
                o3 = o3.return;
              }
            for (; s2 !== null; ) {
              if (o3 = At(s2), o3 === null)
                return;
              if (c3 = o3.tag, c3 === 5 || c3 === 6 || c3 === 26 || c3 === 27) {
                r2 = a2 = o3;
                continue a;
              }
              s2 = s2.parentNode;
            }
          }
          r2 = r2.return;
        }
    xn(function() {
      var r3 = a2, i3 = gn(n3), o4 = [];
      a: {
        var s3 = si.get(e2);
        if (s3 !== void 0) {
          var c4 = Fn, l3 = e2;
          switch (e2) {
            case `keypress`:
              if (An(n3) === 0)
                break a;
            case `keydown`:
            case `keyup`:
              c4 = $n;
              break;
            case `focusin`:
              l3 = `focus`, c4 = Wn;
              break;
            case `focusout`:
              l3 = `blur`, c4 = Wn;
              break;
            case `beforeblur`:
            case `afterblur`:
              c4 = Wn;
              break;
            case `click`:
              if (n3.button === 2)
                break a;
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              c4 = Hn;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              c4 = Un;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              c4 = tr;
              break;
            case ei:
            case ti:
            case ni:
              c4 = Gn;
              break;
            case oi:
              c4 = nr;
              break;
            case `scroll`:
            case `scrollend`:
              c4 = Ln;
              break;
            case `wheel`:
              c4 = rr;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              c4 = Kn;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              c4 = er;
              break;
            case `toggle`:
            case `beforetoggle`:
              c4 = ir;
          }
          var u3 = !!(t3 & 4), f3 = !u3 && (e2 === `scroll` || e2 === `scrollend`), p3 = u3 ? s3 === null ? null : s3 + `Capture` : s3;
          u3 = [];
          for (var m3 = r3, h2; m3 !== null; ) {
            var g2 = m3;
            if (h2 = g2.stateNode, g2 = g2.tag, g2 !== 5 && g2 !== 26 && g2 !== 27 || h2 === null || p3 === null || (g2 = Sn(m3, p3), g2 != null && u3.push(Dd(m3, g2, h2))), f3)
              break;
            m3 = m3.return;
          }
          0 < u3.length && (s3 = new c4(s3, l3, null, n3, i3), o4.push({event: s3, listeners: u3}));
        }
      }
      if (!(t3 & 7)) {
        a: {
          if (s3 = e2 === `mouseover` || e2 === `pointerover`, c4 = e2 === `mouseout` || e2 === `pointerout`, s3 && n3 !== hn && (l3 = n3.relatedTarget || n3.fromElement) && (At(l3) || l3[Ct]))
            break a;
          if ((c4 || s3) && (s3 = i3.window === i3 ? i3 : (s3 = i3.ownerDocument) ? s3.defaultView || s3.parentWindow : window, c4 ? (l3 = n3.relatedTarget || n3.toElement, c4 = r3, l3 = l3 ? At(l3) : null, l3 !== null && (f3 = d2(l3), u3 = l3.tag, l3 !== f3 || u3 !== 5 && u3 !== 27 && u3 !== 6) && (l3 = null)) : (c4 = null, l3 = r3), c4 !== l3)) {
            if (u3 = Hn, g2 = `onMouseLeave`, p3 = `onMouseEnter`, m3 = `mouse`, (e2 === `pointerout` || e2 === `pointerover`) && (u3 = er, g2 = `onPointerLeave`, p3 = `onPointerEnter`, m3 = `pointer`), f3 = c4 == null ? s3 : Mt(c4), h2 = l3 == null ? s3 : Mt(l3), s3 = new u3(g2, m3 + `leave`, c4, n3, i3), s3.target = f3, s3.relatedTarget = h2, g2 = null, At(i3) === r3 && (u3 = new u3(p3, m3 + `enter`, l3, n3, i3), u3.target = h2, u3.relatedTarget = f3, g2 = u3), f3 = g2, c4 && l3)
              b: {
                for (u3 = kd, p3 = c4, m3 = l3, h2 = 0, g2 = p3; g2; g2 = u3(g2))
                  h2++;
                g2 = 0;
                for (var _2 = m3; _2; _2 = u3(_2))
                  g2++;
                for (; 0 < h2 - g2; )
                  p3 = u3(p3), h2--;
                for (; 0 < g2 - h2; )
                  m3 = u3(m3), g2--;
                for (; h2--; ) {
                  if (p3 === m3 || m3 !== null && p3 === m3.alternate) {
                    u3 = p3;
                    break b;
                  }
                  p3 = u3(p3), m3 = u3(m3);
                }
                u3 = null;
              }
            else
              u3 = null;
            c4 !== null && Ad(o4, s3, c4, u3, false), l3 !== null && f3 !== null && Ad(o4, f3, l3, u3, true);
          }
        }
        a: {
          if (s3 = r3 ? Mt(r3) : window, c4 = s3.nodeName && s3.nodeName.toLowerCase(), c4 === `select` || c4 === `input` && s3.type === `file`)
            var v2 = wr;
          else if (vr(s3)) {
            if (Tr)
              v2 = Pr;
            else {
              v2 = Mr;
              var y2 = jr;
            }
          } else
            c4 = s3.nodeName, !c4 || c4.toLowerCase() !== `input` || s3.type !== `checkbox` && s3.type !== `radio` ? r3 && un(r3.elementType) && (v2 = wr) : v2 = Nr;
          if (v2 && (v2 = v2(e2, r3))) {
            yr(o4, v2, n3, i3);
            break a;
          }
          y2 && y2(e2, s3, r3), e2 === `focusout` && r3 && s3.type === `number` && r3.memoizedProps.value != null && tn(s3, `number`, s3.value);
        }
        switch (y2 = r3 ? Mt(r3) : window, e2) {
          case `focusin`:
            (vr(y2) || y2.contentEditable === `true`) && (Wr = y2, Gr = r3, Kr = null);
            break;
          case `focusout`:
            Kr = Gr = Wr = null;
            break;
          case `mousedown`:
            qr = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            qr = false, Jr(o4, n3, i3);
            break;
          case `selectionchange`:
            if (Ur)
              break;
          case `keydown`:
          case `keyup`:
            Jr(o4, n3, i3);
        }
        var b2;
        if (or)
          b: {
            switch (e2) {
              case `compositionstart`:
                var x2 = `onCompositionStart`;
                break b;
              case `compositionend`:
                x2 = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                x2 = `onCompositionUpdate`;
                break b;
            }
            x2 = void 0;
          }
        else
          mr ? fr(e2, n3) && (x2 = `onCompositionEnd`) : e2 === `keydown` && n3.keyCode === 229 && (x2 = `onCompositionStart`);
        x2 && (lr && n3.locale !== `ko` && (mr || x2 !== `onCompositionStart` ? x2 === `onCompositionEnd` && mr && (b2 = kn()) : (En = i3, Dn = `value` in En ? En.value : En.textContent, mr = true)), y2 = Od(r3, x2), 0 < y2.length && (x2 = new qn(x2, e2, null, n3, i3), o4.push({event: x2, listeners: y2}), b2 ? x2.data = b2 : (b2 = pr(n3), b2 !== null && (x2.data = b2)))), (b2 = cr ? hr(e2, n3) : gr(e2, n3)) && (x2 = Od(r3, `onBeforeInput`), 0 < x2.length && (y2 = new qn(`onBeforeInput`, `beforeinput`, null, n3, i3), o4.push({event: y2, listeners: x2}), y2.data = b2)), gd(o4, e2, r3, n3, i3);
      }
      xd(o4, t3);
    });
  }
  function Dd(e2, t3, n3) {
    return {instance: e2, listener: t3, currentTarget: n3};
  }
  function Od(e2, t3) {
    for (var n3 = t3 + `Capture`, r2 = []; e2 !== null; ) {
      var i2 = e2, a2 = i2.stateNode;
      if (i2 = i2.tag, i2 !== 5 && i2 !== 26 && i2 !== 27 || a2 === null || (i2 = Sn(e2, n3), i2 != null && r2.unshift(Dd(e2, i2, a2)), i2 = Sn(e2, t3), i2 != null && r2.push(Dd(e2, i2, a2))), e2.tag === 3)
        return r2;
      e2 = e2.return;
    }
    return [];
  }
  function kd(e2) {
    if (e2 === null)
      return null;
    do
      e2 = e2.return;
    while (e2 && e2.tag !== 5 && e2.tag !== 27);
    return e2 || null;
  }
  function Ad(e2, t3, n3, r2, i2) {
    for (var a2 = t3._reactName, o3 = []; n3 !== null && n3 !== r2; ) {
      var s2 = n3, c3 = s2.alternate, l3 = s2.stateNode;
      if (s2 = s2.tag, c3 !== null && c3 === r2)
        break;
      s2 !== 5 && s2 !== 26 && s2 !== 27 || l3 === null || (c3 = l3, i2 ? (l3 = Sn(n3, a2), l3 != null && o3.unshift(Dd(n3, l3, c3))) : i2 || (l3 = Sn(n3, a2), l3 != null && o3.push(Dd(n3, l3, c3)))), n3 = n3.return;
    }
    o3.length !== 0 && e2.push({event: t3, listeners: o3});
  }
  var jd = /\r\n?/g, Md = /\u0000|\uFFFD/g;
  function Nd(e2) {
    return (typeof e2 == `string` ? e2 : `` + e2).replace(jd, `
`).replace(Md, ``);
  }
  function Pd(e2, t3) {
    return t3 = Nd(t3), Nd(e2) === t3;
  }
  function $(e2, t3, n3, r2, i2, a2) {
    switch (n3) {
      case `children`:
        typeof r2 == `string` ? t3 === `body` || t3 === `textarea` && r2 === `` || on(e2, r2) : (typeof r2 == `number` || typeof r2 == `bigint`) && t3 !== `body` && on(e2, `` + r2);
        break;
      case `className`:
        Ut(e2, `class`, r2);
        break;
      case `tabIndex`:
        Ut(e2, `tabindex`, r2);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        Ut(e2, n3, r2);
        break;
      case `style`:
        ln(e2, r2, a2);
        break;
      case `data`:
        if (t3 !== `object`) {
          Ut(e2, `data`, r2);
          break;
        }
      case `src`:
      case `href`:
        if (r2 === `` && (t3 !== `a` || n3 !== `href`)) {
          e2.removeAttribute(n3);
          break;
        }
        if (r2 == null || typeof r2 == `function` || typeof r2 == `symbol` || typeof r2 == `boolean`) {
          e2.removeAttribute(n3);
          break;
        }
        r2 = pn(`` + r2), e2.setAttribute(n3, r2);
        break;
      case `action`:
      case `formAction`:
        if (typeof r2 == `function`) {
          e2.setAttribute(n3, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof a2 == `function` && (n3 === `formAction` ? (t3 !== `input` && $(e2, t3, `name`, i2.name, i2, null), $(e2, t3, `formEncType`, i2.formEncType, i2, null), $(e2, t3, `formMethod`, i2.formMethod, i2, null), $(e2, t3, `formTarget`, i2.formTarget, i2, null)) : ($(e2, t3, `encType`, i2.encType, i2, null), $(e2, t3, `method`, i2.method, i2, null), $(e2, t3, `target`, i2.target, i2, null))), r2 == null || typeof r2 == `symbol` || typeof r2 == `boolean`) {
          e2.removeAttribute(n3);
          break;
        }
        r2 = pn(`` + r2), e2.setAttribute(n3, r2);
        break;
      case `onClick`:
        r2 != null && (e2.onclick = mn);
        break;
      case `onScroll`:
        r2 != null && Q(`scroll`, e2);
        break;
      case `onScrollEnd`:
        r2 != null && Q(`scrollend`, e2);
        break;
      case `dangerouslySetInnerHTML`:
        if (r2 != null) {
          if (typeof r2 != `object` || !(`__html` in r2))
            throw Error(l2(61));
          if (n3 = r2.__html, n3 != null) {
            if (i2.children != null)
              throw Error(l2(60));
            e2.innerHTML = n3;
          }
        }
        break;
      case `multiple`:
        e2.multiple = r2 && typeof r2 != `function` && typeof r2 != `symbol`;
        break;
      case `muted`:
        e2.muted = r2 && typeof r2 != `function` && typeof r2 != `symbol`;
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
          e2.removeAttribute(`xlink:href`);
          break;
        }
        n3 = pn(`` + r2), e2.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n3);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        r2 != null && typeof r2 != `function` && typeof r2 != `symbol` ? e2.setAttribute(n3, `` + r2) : e2.removeAttribute(n3);
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
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
        r2 && typeof r2 != `function` && typeof r2 != `symbol` ? e2.setAttribute(n3, ``) : e2.removeAttribute(n3);
        break;
      case `capture`:
      case `download`:
        r2 === true ? e2.setAttribute(n3, ``) : r2 !== false && r2 != null && typeof r2 != `function` && typeof r2 != `symbol` ? e2.setAttribute(n3, r2) : e2.removeAttribute(n3);
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        r2 != null && typeof r2 != `function` && typeof r2 != `symbol` && !isNaN(r2) && 1 <= r2 ? e2.setAttribute(n3, r2) : e2.removeAttribute(n3);
        break;
      case `rowSpan`:
      case `start`:
        r2 == null || typeof r2 == `function` || typeof r2 == `symbol` || isNaN(r2) ? e2.removeAttribute(n3) : e2.setAttribute(n3, r2);
        break;
      case `popover`:
        Q(`beforetoggle`, e2), Q(`toggle`, e2), Ht(e2, `popover`, r2);
        break;
      case `xlinkActuate`:
        Wt(e2, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r2);
        break;
      case `xlinkArcrole`:
        Wt(e2, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r2);
        break;
      case `xlinkRole`:
        Wt(e2, `http://www.w3.org/1999/xlink`, `xlink:role`, r2);
        break;
      case `xlinkShow`:
        Wt(e2, `http://www.w3.org/1999/xlink`, `xlink:show`, r2);
        break;
      case `xlinkTitle`:
        Wt(e2, `http://www.w3.org/1999/xlink`, `xlink:title`, r2);
        break;
      case `xlinkType`:
        Wt(e2, `http://www.w3.org/1999/xlink`, `xlink:type`, r2);
        break;
      case `xmlBase`:
        Wt(e2, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r2);
        break;
      case `xmlLang`:
        Wt(e2, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r2);
        break;
      case `xmlSpace`:
        Wt(e2, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r2);
        break;
      case `is`:
        Ht(e2, `is`, r2);
        break;
      case `innerText`:
      case `textContent`:
        break;
      default:
        (!(2 < n3.length) || n3[0] !== `o` && n3[0] !== `O` || n3[1] !== `n` && n3[1] !== `N`) && (n3 = dn.get(n3) || n3, Ht(e2, n3, r2));
    }
  }
  function Fd(e2, t3, n3, r2, i2, a2) {
    switch (n3) {
      case `style`:
        ln(e2, r2, a2);
        break;
      case `dangerouslySetInnerHTML`:
        if (r2 != null) {
          if (typeof r2 != `object` || !(`__html` in r2))
            throw Error(l2(61));
          if (n3 = r2.__html, n3 != null) {
            if (i2.children != null)
              throw Error(l2(60));
            e2.innerHTML = n3;
          }
        }
        break;
      case `children`:
        typeof r2 == `string` ? on(e2, r2) : (typeof r2 == `number` || typeof r2 == `bigint`) && on(e2, `` + r2);
        break;
      case `onScroll`:
        r2 != null && Q(`scroll`, e2);
        break;
      case `onScrollEnd`:
        r2 != null && Q(`scrollend`, e2);
        break;
      case `onClick`:
        r2 != null && (e2.onclick = mn);
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        break;
      case `innerText`:
      case `textContent`:
        break;
      default:
        if (!Ft.hasOwnProperty(n3))
          a: {
            if (n3[0] === `o` && n3[1] === `n` && (i2 = n3.endsWith(`Capture`), t3 = n3.slice(2, i2 ? n3.length - 7 : void 0), a2 = e2[St] || null, a2 = a2 == null ? null : a2[n3], typeof a2 == `function` && e2.removeEventListener(t3, a2, i2), typeof r2 == `function`)) {
              typeof a2 != `function` && a2 !== null && (n3 in e2 ? e2[n3] = null : e2.hasAttribute(n3) && e2.removeAttribute(n3)), e2.addEventListener(t3, r2, i2);
              break a;
            }
            n3 in e2 ? e2[n3] = r2 : r2 === true ? e2.setAttribute(n3, ``) : Ht(e2, n3, r2);
          }
    }
  }
  function Id(e2, t3, n3) {
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
        Q(`error`, e2), Q(`load`, e2);
        var r2 = false, i2 = false, a2;
        for (a2 in n3)
          if (n3.hasOwnProperty(a2)) {
            var o3 = n3[a2];
            if (o3 != null)
              switch (a2) {
                case `src`:
                  r2 = true;
                  break;
                case `srcSet`:
                  i2 = true;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(l2(137, t3));
                default:
                  $(e2, t3, a2, o3, n3, null);
              }
          }
        i2 && $(e2, t3, `srcSet`, n3.srcSet, n3, null), r2 && $(e2, t3, `src`, n3.src, n3, null);
        return;
      case `input`:
        Q(`invalid`, e2);
        var s2 = a2 = o3 = i2 = null, c3 = null, u3 = null;
        for (r2 in n3)
          if (n3.hasOwnProperty(r2)) {
            var d3 = n3[r2];
            if (d3 != null)
              switch (r2) {
                case `name`:
                  i2 = d3;
                  break;
                case `type`:
                  o3 = d3;
                  break;
                case `checked`:
                  c3 = d3;
                  break;
                case `defaultChecked`:
                  u3 = d3;
                  break;
                case `value`:
                  a2 = d3;
                  break;
                case `defaultValue`:
                  s2 = d3;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (d3 != null)
                    throw Error(l2(137, t3));
                  break;
                default:
                  $(e2, t3, r2, d3, n3, null);
              }
          }
        en(e2, a2, s2, c3, u3, o3, i2, false);
        return;
      case `select`:
        for (i2 in Q(`invalid`, e2), r2 = o3 = a2 = null, n3)
          if (n3.hasOwnProperty(i2) && (s2 = n3[i2], s2 != null))
            switch (i2) {
              case `value`:
                a2 = s2;
                break;
              case `defaultValue`:
                o3 = s2;
                break;
              case `multiple`:
                r2 = s2;
              default:
                $(e2, t3, i2, s2, n3, null);
            }
        t3 = a2, n3 = o3, e2.multiple = !!r2, t3 == null ? n3 != null && nn(e2, !!r2, n3, true) : nn(e2, !!r2, t3, false);
        return;
      case `textarea`:
        for (o3 in Q(`invalid`, e2), a2 = i2 = r2 = null, n3)
          if (n3.hasOwnProperty(o3) && (s2 = n3[o3], s2 != null))
            switch (o3) {
              case `value`:
                r2 = s2;
                break;
              case `defaultValue`:
                i2 = s2;
                break;
              case `children`:
                a2 = s2;
                break;
              case `dangerouslySetInnerHTML`:
                if (s2 != null)
                  throw Error(l2(91));
                break;
              default:
                $(e2, t3, o3, s2, n3, null);
            }
        an(e2, r2, i2, a2);
        return;
      case `option`:
        for (c3 in n3)
          if (n3.hasOwnProperty(c3) && (r2 = n3[c3], r2 != null))
            switch (c3) {
              case `selected`:
                e2.selected = r2 && typeof r2 != `function` && typeof r2 != `symbol`;
                break;
              default:
                $(e2, t3, c3, r2, n3, null);
            }
        return;
      case `dialog`:
        Q(`beforetoggle`, e2), Q(`toggle`, e2), Q(`cancel`, e2), Q(`close`, e2);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e2);
        break;
      case `video`:
      case `audio`:
        for (r2 = 0; r2 < yd.length; r2++)
          Q(yd[r2], e2);
        break;
      case `image`:
        Q(`error`, e2), Q(`load`, e2);
        break;
      case `details`:
        Q(`toggle`, e2);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e2), Q(`load`, e2);
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
        for (u3 in n3)
          if (n3.hasOwnProperty(u3) && (r2 = n3[u3], r2 != null))
            switch (u3) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(l2(137, t3));
              default:
                $(e2, t3, u3, r2, n3, null);
            }
        return;
      default:
        if (un(t3)) {
          for (d3 in n3)
            n3.hasOwnProperty(d3) && (r2 = n3[d3], r2 !== void 0 && Fd(e2, t3, d3, r2, n3, void 0));
          return;
        }
    }
    for (s2 in n3)
      n3.hasOwnProperty(s2) && (r2 = n3[s2], r2 != null && $(e2, t3, s2, r2, n3, null));
  }
  function Ld(e2, t3, n3, r2) {
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
        var i2 = null, a2 = null, o3 = null, s2 = null, c3 = null, u3 = null, d3 = null;
        for (m3 in n3) {
          var f3 = n3[m3];
          if (n3.hasOwnProperty(m3) && f3 != null)
            switch (m3) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                c3 = f3;
              default:
                r2.hasOwnProperty(m3) || $(e2, t3, m3, null, r2, f3);
            }
        }
        for (var p3 in r2) {
          var m3 = r2[p3];
          if (f3 = n3[p3], r2.hasOwnProperty(p3) && (m3 != null || f3 != null))
            switch (p3) {
              case `type`:
                a2 = m3;
                break;
              case `name`:
                i2 = m3;
                break;
              case `checked`:
                u3 = m3;
                break;
              case `defaultChecked`:
                d3 = m3;
                break;
              case `value`:
                o3 = m3;
                break;
              case `defaultValue`:
                s2 = m3;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m3 != null)
                  throw Error(l2(137, t3));
                break;
              default:
                m3 !== f3 && $(e2, t3, p3, m3, r2, f3);
            }
        }
        $t(e2, o3, s2, c3, u3, d3, a2, i2);
        return;
      case `select`:
        for (a2 in m3 = o3 = s2 = p3 = null, n3)
          if (c3 = n3[a2], n3.hasOwnProperty(a2) && c3 != null)
            switch (a2) {
              case `value`:
                break;
              case `multiple`:
                m3 = c3;
              default:
                r2.hasOwnProperty(a2) || $(e2, t3, a2, null, r2, c3);
            }
        for (i2 in r2)
          if (a2 = r2[i2], c3 = n3[i2], r2.hasOwnProperty(i2) && (a2 != null || c3 != null))
            switch (i2) {
              case `value`:
                p3 = a2;
                break;
              case `defaultValue`:
                s2 = a2;
                break;
              case `multiple`:
                o3 = a2;
              default:
                a2 !== c3 && $(e2, t3, i2, a2, r2, c3);
            }
        t3 = s2, n3 = o3, r2 = m3, p3 == null ? !!r2 != !!n3 && (t3 == null ? nn(e2, !!n3, n3 ? [] : ``, false) : nn(e2, !!n3, t3, true)) : nn(e2, !!n3, p3, false);
        return;
      case `textarea`:
        for (s2 in m3 = p3 = null, n3)
          if (i2 = n3[s2], n3.hasOwnProperty(s2) && i2 != null && !r2.hasOwnProperty(s2))
            switch (s2) {
              case `value`:
                break;
              case `children`:
                break;
              default:
                $(e2, t3, s2, null, r2, i2);
            }
        for (o3 in r2)
          if (i2 = r2[o3], a2 = n3[o3], r2.hasOwnProperty(o3) && (i2 != null || a2 != null))
            switch (o3) {
              case `value`:
                p3 = i2;
                break;
              case `defaultValue`:
                m3 = i2;
                break;
              case `children`:
                break;
              case `dangerouslySetInnerHTML`:
                if (i2 != null)
                  throw Error(l2(91));
                break;
              default:
                i2 !== a2 && $(e2, t3, o3, i2, r2, a2);
            }
        rn(e2, p3, m3);
        return;
      case `option`:
        for (var h2 in n3)
          if (p3 = n3[h2], n3.hasOwnProperty(h2) && p3 != null && !r2.hasOwnProperty(h2))
            switch (h2) {
              case `selected`:
                e2.selected = false;
                break;
              default:
                $(e2, t3, h2, null, r2, p3);
            }
        for (c3 in r2)
          if (p3 = r2[c3], m3 = n3[c3], r2.hasOwnProperty(c3) && p3 !== m3 && (p3 != null || m3 != null))
            switch (c3) {
              case `selected`:
                e2.selected = p3 && typeof p3 != `function` && typeof p3 != `symbol`;
                break;
              default:
                $(e2, t3, c3, p3, r2, m3);
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
        for (var g2 in n3)
          p3 = n3[g2], n3.hasOwnProperty(g2) && p3 != null && !r2.hasOwnProperty(g2) && $(e2, t3, g2, null, r2, p3);
        for (u3 in r2)
          if (p3 = r2[u3], m3 = n3[u3], r2.hasOwnProperty(u3) && p3 !== m3 && (p3 != null || m3 != null))
            switch (u3) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (p3 != null)
                  throw Error(l2(137, t3));
                break;
              default:
                $(e2, t3, u3, p3, r2, m3);
            }
        return;
      default:
        if (un(t3)) {
          for (var _2 in n3)
            p3 = n3[_2], n3.hasOwnProperty(_2) && p3 !== void 0 && !r2.hasOwnProperty(_2) && Fd(e2, t3, _2, void 0, r2, p3);
          for (d3 in r2)
            p3 = r2[d3], m3 = n3[d3], !r2.hasOwnProperty(d3) || p3 === m3 || p3 === void 0 && m3 === void 0 || Fd(e2, t3, d3, p3, r2, m3);
          return;
        }
    }
    for (var v2 in n3)
      p3 = n3[v2], n3.hasOwnProperty(v2) && p3 != null && !r2.hasOwnProperty(v2) && $(e2, t3, v2, null, r2, p3);
    for (f3 in r2)
      p3 = r2[f3], m3 = n3[f3], !r2.hasOwnProperty(f3) || p3 === m3 || p3 == null && m3 == null || $(e2, t3, f3, p3, r2, m3);
  }
  function Rd(e2) {
    switch (e2) {
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
  function zd() {
    if (typeof performance.getEntriesByType == `function`) {
      for (var e2 = 0, t3 = 0, n3 = performance.getEntriesByType(`resource`), r2 = 0; r2 < n3.length; r2++) {
        var i2 = n3[r2], a2 = i2.transferSize, o3 = i2.initiatorType, s2 = i2.duration;
        if (a2 && s2 && Rd(o3)) {
          for (o3 = 0, s2 = i2.responseEnd, r2 += 1; r2 < n3.length; r2++) {
            var c3 = n3[r2], l3 = c3.startTime;
            if (l3 > s2)
              break;
            var u3 = c3.transferSize, d3 = c3.initiatorType;
            u3 && Rd(d3) && (c3 = c3.responseEnd, o3 += u3 * (c3 < s2 ? 1 : (s2 - l3) / (c3 - l3)));
          }
          if (--r2, t3 += 8 * (a2 + o3) / (i2.duration / 1e3), e2++, 10 < e2)
            break;
        }
      }
      if (0 < e2)
        return t3 / e2 / 1e6;
    }
    return navigator.connection && (e2 = navigator.connection.downlink, typeof e2 == `number`) ? e2 : 5;
  }
  var Bd = null, Vd = null;
  function Hd(e2) {
    return e2.nodeType === 9 ? e2 : e2.ownerDocument;
  }
  function Ud(e2) {
    switch (e2) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function Wd(e2, t3) {
    if (e2 === 0)
      switch (t3) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
    return e2 === 1 && t3 === `foreignObject` ? 0 : e2;
  }
  function Gd(e2, t3) {
    return e2 === `textarea` || e2 === `noscript` || typeof t3.children == `string` || typeof t3.children == `number` || typeof t3.children == `bigint` || typeof t3.dangerouslySetInnerHTML == `object` && t3.dangerouslySetInnerHTML !== null && t3.dangerouslySetInnerHTML.__html != null;
  }
  var Kd = null;
  function qd() {
    var e2 = window.event;
    return e2 && e2.type === `popstate` ? e2 !== Kd && (Kd = e2, true) : (Kd = null, false);
  }
  var Jd = typeof setTimeout == `function` ? setTimeout : void 0, Yd = typeof clearTimeout == `function` ? clearTimeout : void 0, Xd = typeof Promise == `function` ? Promise : void 0, Zd = typeof queueMicrotask == `function` ? queueMicrotask : Xd === void 0 ? Jd : function(e2) {
    return Xd.resolve(null).then(e2).catch(Qd);
  };
  function Qd(e2) {
    setTimeout(function() {
      throw e2;
    });
  }
  function $d(e2) {
    return e2 === `head`;
  }
  function ef(e2, t3) {
    var n3 = t3, r2 = 0;
    do {
      var i2 = n3.nextSibling;
      if (e2.removeChild(n3), i2 && i2.nodeType === 8) {
        if (n3 = i2.data, n3 === `/$` || n3 === `/&`) {
          if (r2 === 0) {
            e2.removeChild(i2), Fp(t3);
            return;
          }
          r2--;
        } else if (n3 === `$` || n3 === `$?` || n3 === `$~` || n3 === `$!` || n3 === `&`)
          r2++;
        else if (n3 === `html`)
          hf(e2.ownerDocument.documentElement);
        else if (n3 === `head`) {
          n3 = e2.ownerDocument.head, hf(n3);
          for (var a2 = n3.firstChild; a2; ) {
            var o3 = a2.nextSibling, s2 = a2.nodeName;
            a2[Ot] || s2 === `SCRIPT` || s2 === `STYLE` || s2 === `LINK` && a2.rel.toLowerCase() === `stylesheet` || n3.removeChild(a2), a2 = o3;
          }
        } else
          n3 === `body` && hf(e2.ownerDocument.body);
      }
      n3 = i2;
    } while (n3);
    Fp(t3);
  }
  function tf(e2, t3) {
    var n3 = e2;
    e2 = 0;
    do {
      var r2 = n3.nextSibling;
      if (n3.nodeType === 1 ? t3 ? (n3._stashedDisplay = n3.style.display, n3.style.display = `none`) : (n3.style.display = n3._stashedDisplay || ``, n3.getAttribute(`style`) === `` && n3.removeAttribute(`style`)) : n3.nodeType === 3 && (t3 ? (n3._stashedText = n3.nodeValue, n3.nodeValue = ``) : n3.nodeValue = n3._stashedText || ``), r2 && r2.nodeType === 8) {
        if (n3 = r2.data, n3 === `/$`) {
          if (e2 === 0)
            break;
          e2--;
        } else
          n3 !== `$` && n3 !== `$?` && n3 !== `$~` && n3 !== `$!` || e2++;
      }
      n3 = r2;
    } while (n3);
  }
  function nf(e2) {
    var t3 = e2.firstChild;
    for (t3 && t3.nodeType === 10 && (t3 = t3.nextSibling); t3; ) {
      var n3 = t3;
      switch (t3 = t3.nextSibling, n3.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nf(n3), kt(n3);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n3.rel.toLowerCase() === `stylesheet`)
            continue;
      }
      e2.removeChild(n3);
    }
  }
  function rf(e2, t3, n3, r2) {
    for (; e2.nodeType === 1; ) {
      var i2 = n3;
      if (e2.nodeName.toLowerCase() !== t3.toLowerCase()) {
        if (!r2 && (e2.nodeName !== `INPUT` || e2.type !== `hidden`))
          break;
      } else if (!r2) {
        if (t3 === `input` && e2.type === `hidden`) {
          var a2 = i2.name == null ? null : `` + i2.name;
          if (i2.type === `hidden` && e2.getAttribute(`name`) === a2)
            return e2;
        } else
          return e2;
      } else if (!e2[Ot])
        switch (t3) {
          case `meta`:
            if (!e2.hasAttribute(`itemprop`))
              break;
            return e2;
          case `link`:
            if (a2 = e2.getAttribute(`rel`), a2 === `stylesheet` && e2.hasAttribute(`data-precedence`) || a2 !== i2.rel || e2.getAttribute(`href`) !== (i2.href == null || i2.href === `` ? null : i2.href) || e2.getAttribute(`crossorigin`) !== (i2.crossOrigin == null ? null : i2.crossOrigin) || e2.getAttribute(`title`) !== (i2.title == null ? null : i2.title))
              break;
            return e2;
          case `style`:
            if (e2.hasAttribute(`data-precedence`))
              break;
            return e2;
          case `script`:
            if (a2 = e2.getAttribute(`src`), (a2 !== (i2.src == null ? null : i2.src) || e2.getAttribute(`type`) !== (i2.type == null ? null : i2.type) || e2.getAttribute(`crossorigin`) !== (i2.crossOrigin == null ? null : i2.crossOrigin)) && a2 && e2.hasAttribute(`async`) && !e2.hasAttribute(`itemprop`))
              break;
            return e2;
          default:
            return e2;
        }
      if (e2 = uf(e2.nextSibling), e2 === null)
        break;
    }
    return null;
  }
  function af(e2, t3, n3) {
    if (t3 === ``)
      return null;
    for (; e2.nodeType !== 3; )
      if ((e2.nodeType !== 1 || e2.nodeName !== `INPUT` || e2.type !== `hidden`) && !n3 || (e2 = uf(e2.nextSibling), e2 === null))
        return null;
    return e2;
  }
  function of(e2, t3) {
    for (; e2.nodeType !== 8; )
      if ((e2.nodeType !== 1 || e2.nodeName !== `INPUT` || e2.type !== `hidden`) && !t3 || (e2 = uf(e2.nextSibling), e2 === null))
        return null;
    return e2;
  }
  function sf(e2) {
    return e2.data === `$?` || e2.data === `$~`;
  }
  function cf(e2) {
    return e2.data === `$!` || e2.data === `$?` && e2.ownerDocument.readyState !== `loading`;
  }
  function lf(e2, t3) {
    var n3 = e2.ownerDocument;
    if (e2.data === `$~`)
      e2._reactRetry = t3;
    else if (e2.data !== `$?` || n3.readyState !== `loading`)
      t3();
    else {
      var r2 = function() {
        t3(), n3.removeEventListener(`DOMContentLoaded`, r2);
      };
      n3.addEventListener(`DOMContentLoaded`, r2), e2._reactRetry = r2;
    }
  }
  function uf(e2) {
    for (; e2 != null; e2 = e2.nextSibling) {
      var t3 = e2.nodeType;
      if (t3 === 1 || t3 === 3)
        break;
      if (t3 === 8) {
        if (t3 = e2.data, t3 === `$` || t3 === `$!` || t3 === `$?` || t3 === `$~` || t3 === `&` || t3 === `F!` || t3 === `F`)
          break;
        if (t3 === `/$` || t3 === `/&`)
          return null;
      }
    }
    return e2;
  }
  var df = null;
  function ff(e2) {
    e2 = e2.nextSibling;
    for (var t3 = 0; e2; ) {
      if (e2.nodeType === 8) {
        var n3 = e2.data;
        if (n3 === `/$` || n3 === `/&`) {
          if (t3 === 0)
            return uf(e2.nextSibling);
          t3--;
        } else
          n3 !== `$` && n3 !== `$!` && n3 !== `$?` && n3 !== `$~` && n3 !== `&` || t3++;
      }
      e2 = e2.nextSibling;
    }
    return null;
  }
  function pf(e2) {
    e2 = e2.previousSibling;
    for (var t3 = 0; e2; ) {
      if (e2.nodeType === 8) {
        var n3 = e2.data;
        if (n3 === `$` || n3 === `$!` || n3 === `$?` || n3 === `$~` || n3 === `&`) {
          if (t3 === 0)
            return e2;
          t3--;
        } else
          n3 !== `/$` && n3 !== `/&` || t3++;
      }
      e2 = e2.previousSibling;
    }
    return null;
  }
  function mf(e2, t3, n3) {
    switch (t3 = Hd(n3), e2) {
      case `html`:
        if (e2 = t3.documentElement, !e2)
          throw Error(l2(452));
        return e2;
      case `head`:
        if (e2 = t3.head, !e2)
          throw Error(l2(453));
        return e2;
      case `body`:
        if (e2 = t3.body, !e2)
          throw Error(l2(454));
        return e2;
      default:
        throw Error(l2(451));
    }
  }
  function hf(e2) {
    for (var t3 = e2.attributes; t3.length; )
      e2.removeAttributeNode(t3[0]);
    kt(e2);
  }
  var gf = new Map(), _f = new Set();
  function vf(e2) {
    return typeof e2.getRootNode == `function` ? e2.getRootNode() : e2.nodeType === 9 ? e2 : e2.ownerDocument;
  }
  var yf = C.d;
  C.d = {f: bf, r: xf, D: wf, C: Tf, L: Ef, m: Df, X: kf, S: Of, M: Af};
  function bf() {
    var e2 = yf.f(), t3 = Su();
    return e2 || t3;
  }
  function xf(e2) {
    var t3 = jt(e2);
    t3 !== null && t3.tag === 5 && t3.type === `form` ? Ps(t3) : yf.r(e2);
  }
  var Sf = typeof document > `u` ? null : document;
  function Cf(e2, t3, n3) {
    var r2 = Sf;
    if (r2 && typeof t3 == `string` && t3) {
      var i2 = Qt(t3);
      i2 = `link[rel="` + e2 + `"][href="` + i2 + `"]`, typeof n3 == `string` && (i2 += `[crossorigin="` + n3 + `"]`), _f.has(i2) || (_f.add(i2), e2 = {rel: e2, crossOrigin: n3, href: t3}, r2.querySelector(i2) === null && (t3 = r2.createElement(`link`), Id(t3, `link`, e2), E(t3), r2.head.appendChild(t3)));
    }
  }
  function wf(e2) {
    yf.D(e2), Cf(`dns-prefetch`, e2, null);
  }
  function Tf(e2, t3) {
    yf.C(e2, t3), Cf(`preconnect`, e2, t3);
  }
  function Ef(e2, t3, n3) {
    yf.L(e2, t3, n3);
    var r2 = Sf;
    if (r2 && e2 && t3) {
      var i2 = `link[rel="preload"][as="` + Qt(t3) + `"]`;
      t3 === `image` && n3 && n3.imageSrcSet ? (i2 += `[imagesrcset="` + Qt(n3.imageSrcSet) + `"]`, typeof n3.imageSizes == `string` && (i2 += `[imagesizes="` + Qt(n3.imageSizes) + `"]`)) : i2 += `[href="` + Qt(e2) + `"]`;
      var a2 = i2;
      switch (t3) {
        case `style`:
          a2 = Mf(e2);
          break;
        case `script`:
          a2 = If(e2);
      }
      gf.has(a2) || (e2 = _({rel: `preload`, href: t3 === `image` && n3 && n3.imageSrcSet ? void 0 : e2, as: t3}, n3), gf.set(a2, e2), r2.querySelector(i2) !== null || t3 === `style` && r2.querySelector(Nf(a2)) || t3 === `script` && r2.querySelector(Lf(a2)) || (t3 = r2.createElement(`link`), Id(t3, `link`, e2), E(t3), r2.head.appendChild(t3)));
    }
  }
  function Df(e2, t3) {
    yf.m(e2, t3);
    var n3 = Sf;
    if (n3 && e2) {
      var r2 = t3 && typeof t3.as == `string` ? t3.as : `script`, i2 = `link[rel="modulepreload"][as="` + Qt(r2) + `"][href="` + Qt(e2) + `"]`, a2 = i2;
      switch (r2) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a2 = If(e2);
      }
      if (!gf.has(a2) && (e2 = _({rel: `modulepreload`, href: e2}, t3), gf.set(a2, e2), n3.querySelector(i2) === null)) {
        switch (r2) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n3.querySelector(Lf(a2)))
              return;
        }
        r2 = n3.createElement(`link`), Id(r2, `link`, e2), E(r2), n3.head.appendChild(r2);
      }
    }
  }
  function Of(e2, t3, n3) {
    yf.S(e2, t3, n3);
    var r2 = Sf;
    if (r2 && e2) {
      var i2 = Nt(r2).hoistableStyles, a2 = Mf(e2);
      t3 || (t3 = `default`);
      var o3 = i2.get(a2);
      if (!o3) {
        var s2 = {loading: 0, preload: null};
        if (o3 = r2.querySelector(Nf(a2)))
          s2.loading = 5;
        else {
          e2 = _({rel: `stylesheet`, href: e2, "data-precedence": t3}, n3), (n3 = gf.get(a2)) && Bf(e2, n3);
          var c3 = o3 = r2.createElement(`link`);
          E(c3), Id(c3, `link`, e2), c3._p = new Promise(function(e3, t4) {
            c3.onload = e3, c3.onerror = t4;
          }), c3.addEventListener(`load`, function() {
            s2.loading |= 1;
          }), c3.addEventListener(`error`, function() {
            s2.loading |= 2;
          }), s2.loading |= 4, zf(o3, t3, r2);
        }
        o3 = {type: `stylesheet`, instance: o3, count: 1, state: s2}, i2.set(a2, o3);
      }
    }
  }
  function kf(e2, t3) {
    yf.X(e2, t3);
    var n3 = Sf;
    if (n3 && e2) {
      var r2 = Nt(n3).hoistableScripts, i2 = If(e2), a2 = r2.get(i2);
      a2 || (a2 = n3.querySelector(Lf(i2)), a2 || (e2 = _({src: e2, async: true}, t3), (t3 = gf.get(i2)) && Vf(e2, t3), a2 = n3.createElement(`script`), E(a2), Id(a2, `link`, e2), n3.head.appendChild(a2)), a2 = {type: `script`, instance: a2, count: 1, state: null}, r2.set(i2, a2));
    }
  }
  function Af(e2, t3) {
    yf.M(e2, t3);
    var n3 = Sf;
    if (n3 && e2) {
      var r2 = Nt(n3).hoistableScripts, i2 = If(e2), a2 = r2.get(i2);
      a2 || (a2 = n3.querySelector(Lf(i2)), a2 || (e2 = _({src: e2, async: true, type: `module`}, t3), (t3 = gf.get(i2)) && Vf(e2, t3), a2 = n3.createElement(`script`), E(a2), Id(a2, `link`, e2), n3.head.appendChild(a2)), a2 = {type: `script`, instance: a2, count: 1, state: null}, r2.set(i2, a2));
    }
  }
  function jf(e2, t3, n3, r2) {
    var i2 = (i2 = Se.current) ? vf(i2) : null;
    if (!i2)
      throw Error(l2(446));
    switch (e2) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        return typeof n3.precedence == `string` && typeof n3.href == `string` ? (t3 = Mf(n3.href), n3 = Nt(i2).hoistableStyles, r2 = n3.get(t3), r2 || (r2 = {type: `style`, instance: null, count: 0, state: null}, n3.set(t3, r2)), r2) : {type: `void`, instance: null, count: 0, state: null};
      case `link`:
        if (n3.rel === `stylesheet` && typeof n3.href == `string` && typeof n3.precedence == `string`) {
          e2 = Mf(n3.href);
          var a2 = Nt(i2).hoistableStyles, o3 = a2.get(e2);
          if (o3 || (i2 = i2.ownerDocument || i2, o3 = {type: `stylesheet`, instance: null, count: 0, state: {loading: 0, preload: null}}, a2.set(e2, o3), (a2 = i2.querySelector(Nf(e2))) && !a2._p && (o3.instance = a2, o3.state.loading = 5), gf.has(e2) || (n3 = {rel: `preload`, as: `style`, href: n3.href, crossOrigin: n3.crossOrigin, integrity: n3.integrity, media: n3.media, hrefLang: n3.hrefLang, referrerPolicy: n3.referrerPolicy}, gf.set(e2, n3), a2 || Ff(i2, e2, n3, o3.state))), t3 && r2 === null)
            throw Error(l2(528, ``));
          return o3;
        }
        if (t3 && r2 !== null)
          throw Error(l2(529, ``));
        return null;
      case `script`:
        return t3 = n3.async, n3 = n3.src, typeof n3 == `string` && t3 && typeof t3 != `function` && typeof t3 != `symbol` ? (t3 = If(n3), n3 = Nt(i2).hoistableScripts, r2 = n3.get(t3), r2 || (r2 = {type: `script`, instance: null, count: 0, state: null}, n3.set(t3, r2)), r2) : {type: `void`, instance: null, count: 0, state: null};
      default:
        throw Error(l2(444, e2));
    }
  }
  function Mf(e2) {
    return `href="` + Qt(e2) + `"`;
  }
  function Nf(e2) {
    return `link[rel="stylesheet"][` + e2 + `]`;
  }
  function Pf(e2) {
    return _({}, e2, {"data-precedence": e2.precedence, precedence: null});
  }
  function Ff(e2, t3, n3, r2) {
    e2.querySelector(`link[rel="preload"][as="style"][` + t3 + `]`) ? r2.loading = 1 : (t3 = e2.createElement(`link`), r2.preload = t3, t3.addEventListener(`load`, function() {
      return r2.loading |= 1;
    }), t3.addEventListener(`error`, function() {
      return r2.loading |= 2;
    }), Id(t3, `link`, n3), E(t3), e2.head.appendChild(t3));
  }
  function If(e2) {
    return `[src="` + Qt(e2) + `"]`;
  }
  function Lf(e2) {
    return `script[async]` + e2;
  }
  function Rf(e2, t3, n3) {
    if (t3.count++, t3.instance === null)
      switch (t3.type) {
        case `style`:
          var r2 = e2.querySelector(`style[data-href~="` + Qt(n3.href) + `"]`);
          if (r2)
            return t3.instance = r2, E(r2), r2;
          var i2 = _({}, n3, {"data-href": n3.href, "data-precedence": n3.precedence, href: null, precedence: null});
          return r2 = (e2.ownerDocument || e2).createElement(`style`), E(r2), Id(r2, `style`, i2), zf(r2, n3.precedence, e2), t3.instance = r2;
        case `stylesheet`:
          i2 = Mf(n3.href);
          var a2 = e2.querySelector(Nf(i2));
          if (a2)
            return t3.state.loading |= 4, t3.instance = a2, E(a2), a2;
          r2 = Pf(n3), (i2 = gf.get(i2)) && Bf(r2, i2), a2 = (e2.ownerDocument || e2).createElement(`link`), E(a2);
          var o3 = a2;
          return o3._p = new Promise(function(e3, t4) {
            o3.onload = e3, o3.onerror = t4;
          }), Id(a2, `link`, r2), t3.state.loading |= 4, zf(a2, n3.precedence, e2), t3.instance = a2;
        case `script`:
          return a2 = If(n3.src), (i2 = e2.querySelector(Lf(a2))) ? (t3.instance = i2, E(i2), i2) : (r2 = n3, (i2 = gf.get(a2)) && (r2 = _({}, n3), Vf(r2, i2)), e2 = e2.ownerDocument || e2, i2 = e2.createElement(`script`), E(i2), Id(i2, `link`, r2), e2.head.appendChild(i2), t3.instance = i2);
        case `void`:
          return null;
        default:
          throw Error(l2(443, t3.type));
      }
    else
      t3.type === `stylesheet` && !(t3.state.loading & 4) && (r2 = t3.instance, t3.state.loading |= 4, zf(r2, n3.precedence, e2));
    return t3.instance;
  }
  function zf(e2, t3, n3) {
    for (var r2 = n3.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i2 = r2.length ? r2[r2.length - 1] : null, a2 = i2, o3 = 0; o3 < r2.length; o3++) {
      var s2 = r2[o3];
      if (s2.dataset.precedence === t3)
        a2 = s2;
      else if (a2 !== i2)
        break;
    }
    a2 ? a2.parentNode.insertBefore(e2, a2.nextSibling) : (t3 = n3.nodeType === 9 ? n3.head : n3, t3.insertBefore(e2, t3.firstChild));
  }
  function Bf(e2, t3) {
    e2.crossOrigin ?? (e2.crossOrigin = t3.crossOrigin), e2.referrerPolicy ?? (e2.referrerPolicy = t3.referrerPolicy), e2.title ?? (e2.title = t3.title);
  }
  function Vf(e2, t3) {
    e2.crossOrigin ?? (e2.crossOrigin = t3.crossOrigin), e2.referrerPolicy ?? (e2.referrerPolicy = t3.referrerPolicy), e2.integrity ?? (e2.integrity = t3.integrity);
  }
  var Hf = null;
  function Uf(e2, t3, n3) {
    if (Hf === null) {
      var r2 = new Map(), i2 = Hf = new Map();
      i2.set(n3, r2);
    } else
      i2 = Hf, r2 = i2.get(n3), r2 || (r2 = new Map(), i2.set(n3, r2));
    if (r2.has(e2))
      return r2;
    for (r2.set(e2, null), n3 = n3.getElementsByTagName(e2), i2 = 0; i2 < n3.length; i2++) {
      var a2 = n3[i2];
      if (!(a2[Ot] || a2[xt] || e2 === `link` && a2.getAttribute(`rel`) === `stylesheet`) && a2.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o3 = a2.getAttribute(t3) || ``;
        o3 = e2 + o3;
        var s2 = r2.get(o3);
        s2 ? s2.push(a2) : r2.set(o3, [a2]);
      }
    }
    return r2;
  }
  function Wf(e2, t3, n3) {
    e2 = e2.ownerDocument || e2, e2.head.insertBefore(n3, t3 === `title` ? e2.querySelector(`head > title`) : null);
  }
  function Gf(e2, t3, n3) {
    if (n3 === 1 || t3.itemProp != null)
      return false;
    switch (e2) {
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
            return e2 = t3.disabled, typeof t3.precedence == `string` && e2 == null;
          default:
            return true;
        }
      case `script`:
        if (t3.async && typeof t3.async != `function` && typeof t3.async != `symbol` && !t3.onLoad && !t3.onError && t3.src && typeof t3.src == `string`)
          return true;
    }
    return false;
  }
  function Kf(e2) {
    return !(e2.type === `stylesheet` && !(e2.state.loading & 3));
  }
  function qf(e2, t3, n3, r2) {
    if (n3.type === `stylesheet` && (typeof r2.media != `string` || matchMedia(r2.media).matches !== false) && !(n3.state.loading & 4)) {
      if (n3.instance === null) {
        var i2 = Mf(r2.href), a2 = t3.querySelector(Nf(i2));
        if (a2) {
          t3 = a2._p, typeof t3 == `object` && t3 && typeof t3.then == `function` && (e2.count++, e2 = Xf.bind(e2), t3.then(e2, e2)), n3.state.loading |= 4, n3.instance = a2, E(a2);
          return;
        }
        a2 = t3.ownerDocument || t3, r2 = Pf(r2), (i2 = gf.get(i2)) && Bf(r2, i2), a2 = a2.createElement(`link`), E(a2);
        var o3 = a2;
        o3._p = new Promise(function(e3, t4) {
          o3.onload = e3, o3.onerror = t4;
        }), Id(a2, `link`, r2), n3.instance = a2;
      }
      e2.stylesheets === null && (e2.stylesheets = new Map()), e2.stylesheets.set(n3, t3), (t3 = n3.state.preload) && !(n3.state.loading & 3) && (e2.count++, n3 = Xf.bind(e2), t3.addEventListener(`load`, n3), t3.addEventListener(`error`, n3));
    }
  }
  var Jf = 0;
  function Yf(e2, t3) {
    return e2.stylesheets && e2.count === 0 && Qf(e2, e2.stylesheets), 0 < e2.count || 0 < e2.imgCount ? function(n3) {
      var r2 = setTimeout(function() {
        if (e2.stylesheets && Qf(e2, e2.stylesheets), e2.unsuspend) {
          var t4 = e2.unsuspend;
          e2.unsuspend = null, t4();
        }
      }, 6e4 + t3);
      0 < e2.imgBytes && Jf === 0 && (Jf = 62500 * zd());
      var i2 = setTimeout(function() {
        if (e2.waitingForImages = false, e2.count === 0 && (e2.stylesheets && Qf(e2, e2.stylesheets), e2.unsuspend)) {
          var t4 = e2.unsuspend;
          e2.unsuspend = null, t4();
        }
      }, (e2.imgBytes > Jf ? 50 : 800) + t3);
      return e2.unsuspend = n3, function() {
        e2.unsuspend = null, clearTimeout(r2), clearTimeout(i2);
      };
    } : null;
  }
  function Xf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets)
        Qf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e2 = this.unsuspend;
        this.unsuspend = null, e2();
      }
    }
  }
  var Zf = null;
  function Qf(e2, t3) {
    e2.stylesheets = null, e2.unsuspend !== null && (e2.count++, Zf = new Map(), t3.forEach($f, e2), Zf = null, Xf.call(e2));
  }
  function $f(e2, t3) {
    if (!(t3.state.loading & 4)) {
      var n3 = Zf.get(e2);
      if (n3)
        var r2 = n3.get(null);
      else {
        n3 = new Map(), Zf.set(e2, n3);
        for (var i2 = e2.querySelectorAll(`link[data-precedence],style[data-precedence]`), a2 = 0; a2 < i2.length; a2++) {
          var o3 = i2[a2];
          (o3.nodeName === `LINK` || o3.getAttribute(`media`) !== `not all`) && (n3.set(o3.dataset.precedence, o3), r2 = o3);
        }
        r2 && n3.set(null, r2);
      }
      i2 = t3.instance, o3 = i2.getAttribute(`data-precedence`), a2 = n3.get(o3) || r2, a2 === r2 && n3.set(null, i2), n3.set(o3, i2), this.count++, r2 = Xf.bind(this), i2.addEventListener(`load`, r2), i2.addEventListener(`error`, r2), a2 ? a2.parentNode.insertBefore(i2, a2.nextSibling) : (e2 = e2.nodeType === 9 ? e2.head : e2, e2.insertBefore(i2, e2.firstChild)), t3.state.loading |= 4;
    }
  }
  var ep = {$$typeof: re, Provider: null, Consumer: null, _currentValue: ge, _currentValue2: ge, _threadCount: 0};
  function tp(e2, t3, n3, r2, i2, a2, o3, s2, c3) {
    this.tag = 1, this.containerInfo = e2, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ut(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ut(0), this.hiddenUpdates = ut(null), this.identifierPrefix = r2, this.onUncaughtError = i2, this.onCaughtError = a2, this.onRecoverableError = o3, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c3, this.incompleteTransitions = new Map();
  }
  function np(e2, t3, n3, r2, i2, a2, o3, s2, c3, l3, u3, d3) {
    return e2 = new tp(e2, t3, n3, o3, c3, l3, u3, d3, s2), t3 = 1, a2 === true && (t3 |= 24), a2 = Si(3, null, null, t3), e2.current = a2, a2.stateNode = e2, t3 = va(), t3.refCount++, e2.pooledCache = t3, t3.refCount++, a2.memoizedState = {element: r2, isDehydrated: n3, cache: t3}, Za(a2), e2;
  }
  function rp(e2) {
    return e2 ? (e2 = bi, e2) : bi;
  }
  function ip(e2, t3, n3, r2, i2, a2) {
    i2 = rp(i2), r2.context === null ? r2.context = i2 : r2.pendingContext = i2, r2 = $a(t3), r2.payload = {element: n3}, a2 = a2 === void 0 ? null : a2, a2 !== null && (r2.callback = a2), n3 = eo(e2, r2, t3), n3 !== null && (_u(n3, e2, t3), to(n3, e2, t3));
  }
  function ap(e2, t3) {
    if (e2 = e2.memoizedState, e2 !== null && e2.dehydrated !== null) {
      var n3 = e2.retryLane;
      e2.retryLane = n3 !== 0 && n3 < t3 ? n3 : t3;
    }
  }
  function op(e2, t3) {
    ap(e2, t3), (e2 = e2.alternate) && ap(e2, t3);
  }
  function sp(e2) {
    if (e2.tag === 13 || e2.tag === 31) {
      var t3 = _i(e2, 67108864);
      t3 !== null && _u(t3, e2, 67108864), op(e2, 67108864);
    }
  }
  function cp(e2) {
    if (e2.tag === 13 || e2.tag === 31) {
      var t3 = hu();
      t3 = gt(t3);
      var n3 = _i(e2, t3);
      n3 !== null && _u(n3, e2, t3), op(e2, t3);
    }
  }
  var lp = true;
  function up(e2, t3, n3, r2) {
    var i2 = S.T;
    S.T = null;
    var a2 = C.p;
    try {
      C.p = 2, fp(e2, t3, n3, r2);
    } finally {
      C.p = a2, S.T = i2;
    }
  }
  function dp(e2, t3, n3, r2) {
    var i2 = S.T;
    S.T = null;
    var a2 = C.p;
    try {
      C.p = 8, fp(e2, t3, n3, r2);
    } finally {
      C.p = a2, S.T = i2;
    }
  }
  function fp(e2, t3, n3, r2) {
    if (lp) {
      var i2 = pp(r2);
      if (i2 === null)
        Ed(e2, t3, r2, mp, n3), Tp(e2, r2);
      else if (Dp(i2, e2, t3, n3, r2))
        r2.stopPropagation();
      else if (Tp(e2, r2), t3 & 4 && -1 < wp.indexOf(e2)) {
        for (; i2 !== null; ) {
          var a2 = jt(i2);
          if (a2 !== null)
            switch (a2.tag) {
              case 3:
                if (a2 = a2.stateNode, a2.current.memoizedState.isDehydrated) {
                  var o3 = at(a2.pendingLanes);
                  if (o3 !== 0) {
                    var s2 = a2;
                    for (s2.pendingLanes |= 2, s2.entangledLanes |= 2; o3; ) {
                      var c3 = 1 << 31 - Qe(o3);
                      s2.entanglements[1] |= c3, o3 &= ~c3;
                    }
                    ad(a2), !(W & 6) && (iu = Be() + 500, od(0, false));
                  }
                }
                break;
              case 31:
              case 13:
                s2 = _i(a2, 2), s2 !== null && _u(s2, a2, 2), Su(), op(a2, 2);
            }
          if (a2 = pp(r2), a2 === null && Ed(e2, t3, r2, mp, n3), a2 === i2)
            break;
          i2 = a2;
        }
        i2 !== null && r2.stopPropagation();
      } else
        Ed(e2, t3, r2, null, n3);
    }
  }
  function pp(e2) {
    return e2 = gn(e2), hp(e2);
  }
  var mp = null;
  function hp(e2) {
    if (mp = null, e2 = At(e2), e2 !== null) {
      var t3 = d2(e2);
      if (t3 === null)
        e2 = null;
      else {
        var n3 = t3.tag;
        if (n3 === 13) {
          if (e2 = f2(t3), e2 !== null)
            return e2;
          e2 = null;
        } else if (n3 === 31) {
          if (e2 = p2(t3), e2 !== null)
            return e2;
          e2 = null;
        } else if (n3 === 3) {
          if (t3.stateNode.current.memoizedState.isDehydrated)
            return t3.tag === 3 ? t3.stateNode.containerInfo : null;
          e2 = null;
        } else
          t3 !== e2 && (e2 = null);
      }
    }
    return mp = e2, null;
  }
  function gp(e2) {
    switch (e2) {
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
      case `resize`:
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
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (Ve()) {
          case He:
            return 2;
          case Ue:
            return 8;
          case We:
          case Ge:
            return 32;
          case Ke:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _p = false, vp = null, yp = null, bp = null, xp = new Map(), Sp = new Map(), Cp = [], wp = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Tp(e2, t3) {
    switch (e2) {
      case `focusin`:
      case `focusout`:
        vp = null;
        break;
      case `dragenter`:
      case `dragleave`:
        yp = null;
        break;
      case `mouseover`:
      case `mouseout`:
        bp = null;
        break;
      case `pointerover`:
      case `pointerout`:
        xp.delete(t3.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        Sp.delete(t3.pointerId);
    }
  }
  function Ep(e2, t3, n3, r2, i2, a2) {
    return e2 === null || e2.nativeEvent !== a2 ? (e2 = {blockedOn: t3, domEventName: n3, eventSystemFlags: r2, nativeEvent: a2, targetContainers: [i2]}, t3 !== null && (t3 = jt(t3), t3 !== null && sp(t3)), e2) : (e2.eventSystemFlags |= r2, t3 = e2.targetContainers, i2 !== null && t3.indexOf(i2) === -1 && t3.push(i2), e2);
  }
  function Dp(e2, t3, n3, r2, i2) {
    switch (t3) {
      case `focusin`:
        return vp = Ep(vp, e2, t3, n3, r2, i2), true;
      case `dragenter`:
        return yp = Ep(yp, e2, t3, n3, r2, i2), true;
      case `mouseover`:
        return bp = Ep(bp, e2, t3, n3, r2, i2), true;
      case `pointerover`:
        var a2 = i2.pointerId;
        return xp.set(a2, Ep(xp.get(a2) || null, e2, t3, n3, r2, i2)), true;
      case `gotpointercapture`:
        return a2 = i2.pointerId, Sp.set(a2, Ep(Sp.get(a2) || null, e2, t3, n3, r2, i2)), true;
    }
    return false;
  }
  function Op(e2) {
    var t3 = At(e2.target);
    if (t3 !== null) {
      var n3 = d2(t3);
      if (n3 !== null) {
        if (t3 = n3.tag, t3 === 13) {
          if (t3 = f2(n3), t3 !== null) {
            e2.blockedOn = t3, yt(e2.priority, function() {
              cp(n3);
            });
            return;
          }
        } else if (t3 === 31) {
          if (t3 = p2(n3), t3 !== null) {
            e2.blockedOn = t3, yt(e2.priority, function() {
              cp(n3);
            });
            return;
          }
        } else if (t3 === 3 && n3.stateNode.current.memoizedState.isDehydrated) {
          e2.blockedOn = n3.tag === 3 ? n3.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e2.blockedOn = null;
  }
  function kp(e2) {
    if (e2.blockedOn !== null)
      return false;
    for (var t3 = e2.targetContainers; 0 < t3.length; ) {
      var n3 = pp(e2.nativeEvent);
      if (n3 === null) {
        n3 = e2.nativeEvent;
        var r2 = new n3.constructor(n3.type, n3);
        hn = r2, n3.target.dispatchEvent(r2), hn = null;
      } else
        return t3 = jt(n3), t3 !== null && sp(t3), e2.blockedOn = n3, false;
      t3.shift();
    }
    return true;
  }
  function Ap(e2, t3, n3) {
    kp(e2) && n3.delete(t3);
  }
  function jp() {
    _p = false, vp !== null && kp(vp) && (vp = null), yp !== null && kp(yp) && (yp = null), bp !== null && kp(bp) && (bp = null), xp.forEach(Ap), Sp.forEach(Ap);
  }
  function Mp(e2, t3) {
    e2.blockedOn === t3 && (e2.blockedOn = null, _p || (_p = true, n2.unstable_scheduleCallback(n2.unstable_NormalPriority, jp)));
  }
  var Np = null;
  function Pp(e2) {
    Np !== e2 && (Np = e2, n2.unstable_scheduleCallback(n2.unstable_NormalPriority, function() {
      Np === e2 && (Np = null);
      for (var t3 = 0; t3 < e2.length; t3 += 3) {
        var n3 = e2[t3], r2 = e2[t3 + 1], i2 = e2[t3 + 2];
        if (typeof r2 != `function`) {
          if (hp(r2 || n3) === null)
            continue;
          break;
        }
        var a2 = jt(n3);
        a2 !== null && (e2.splice(t3, 3), t3 -= 3, Ms(a2, {pending: true, data: i2, method: n3.method, action: r2}, r2, i2));
      }
    }));
  }
  function Fp(e2) {
    function t3(t4) {
      return Mp(t4, e2);
    }
    vp !== null && Mp(vp, e2), yp !== null && Mp(yp, e2), bp !== null && Mp(bp, e2), xp.forEach(t3), Sp.forEach(t3);
    for (var n3 = 0; n3 < Cp.length; n3++) {
      var r2 = Cp[n3];
      r2.blockedOn === e2 && (r2.blockedOn = null);
    }
    for (; 0 < Cp.length && (n3 = Cp[0], n3.blockedOn === null); )
      Op(n3), n3.blockedOn === null && Cp.shift();
    if (n3 = (e2.ownerDocument || e2).$$reactFormReplay, n3 != null)
      for (r2 = 0; r2 < n3.length; r2 += 3) {
        var i2 = n3[r2], a2 = n3[r2 + 1], o3 = i2[St] || null;
        if (typeof a2 == `function`)
          o3 || Pp(n3);
        else if (o3) {
          var s2 = null;
          if (a2 && a2.hasAttribute(`formAction`)) {
            if (i2 = a2, o3 = a2[St] || null)
              s2 = o3.formAction;
            else if (hp(i2) !== null)
              continue;
          } else
            s2 = o3.action;
          typeof s2 == `function` ? n3[r2 + 1] = s2 : (n3.splice(r2, 3), r2 -= 3), Pp(n3);
        }
      }
  }
  function Ip() {
    function e2(e3) {
      e3.canIntercept && e3.info === `react-transition` && e3.intercept({handler: function() {
        return new Promise(function(e4) {
          return i2 = e4;
        });
      }, focusReset: `manual`, scroll: `manual`});
    }
    function t3() {
      i2 !== null && (i2(), i2 = null), r2 || setTimeout(n3, 20);
    }
    function n3() {
      if (!r2 && !navigation.transition) {
        var e3 = navigation.currentEntry;
        e3 && e3.url != null && navigation.navigate(e3.url, {state: e3.getState(), info: `react-transition`, history: `replace`});
      }
    }
    if (typeof navigation == `object`) {
      var r2 = false, i2 = null;
      return navigation.addEventListener(`navigate`, e2), navigation.addEventListener(`navigatesuccess`, t3), navigation.addEventListener(`navigateerror`, t3), setTimeout(n3, 100), function() {
        r2 = true, navigation.removeEventListener(`navigate`, e2), navigation.removeEventListener(`navigatesuccess`, t3), navigation.removeEventListener(`navigateerror`, t3), i2 !== null && (i2(), i2 = null);
      };
    }
  }
  function Lp(e2) {
    this._internalRoot = e2;
  }
  Rp.prototype.render = Lp.prototype.render = function(e2) {
    var t3 = this._internalRoot;
    if (t3 === null)
      throw Error(l2(409));
    var n3 = t3.current;
    ip(n3, hu(), e2, t3, null, null);
  }, Rp.prototype.unmount = Lp.prototype.unmount = function() {
    var e2 = this._internalRoot;
    if (e2 !== null) {
      this._internalRoot = null;
      var t3 = e2.containerInfo;
      ip(e2.current, 2, null, e2, null, null), Su(), t3[Ct] = null;
    }
  };
  function Rp(e2) {
    this._internalRoot = e2;
  }
  Rp.prototype.unstable_scheduleHydration = function(e2) {
    if (e2) {
      var t3 = vt();
      e2 = {blockedOn: null, target: e2, priority: t3};
      for (var n3 = 0; n3 < Cp.length && t3 !== 0 && t3 < Cp[n3].priority; n3++)
        ;
      Cp.splice(n3, 0, e2), n3 === 0 && Op(e2);
    }
  };
  var zp = o2.version;
  if (zp !== `19.2.8`)
    throw Error(l2(527, zp, `19.2.8`));
  C.findDOMNode = function(e2) {
    var t3 = e2._reactInternals;
    if (t3 === void 0)
      throw typeof e2.render == `function` ? Error(l2(188)) : (e2 = Object.keys(e2).join(`,`), Error(l2(268, e2)));
    return e2 = h(t3), e2 = e2 === null ? null : g(e2), e2 = e2 === null ? null : e2.stateNode, e2;
  };
  var Bp = {bundleType: 0, version: `19.2.8`, rendererPackageName: `react-dom`, currentDispatcherRef: S, reconcilerVersion: `19.2.8`};
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Vp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vp.isDisabled && Vp.supportsFiber)
      try {
        Ye = Vp.inject(Bp), Xe = Vp;
      } catch {
      }
  }
  t2.createRoot = function(e2, t3) {
    if (!u2(e2))
      throw Error(l2(299));
    var n3 = false, r2 = ``, i2 = tc, a2 = nc, o3 = rc;
    return t3 != null && (t3.unstable_strictMode === true && (n3 = true), t3.identifierPrefix !== void 0 && (r2 = t3.identifierPrefix), t3.onUncaughtError !== void 0 && (i2 = t3.onUncaughtError), t3.onCaughtError !== void 0 && (a2 = t3.onCaughtError), t3.onRecoverableError !== void 0 && (o3 = t3.onRecoverableError)), t3 = np(e2, 1, false, null, null, n3, r2, null, i2, a2, o3, Ip), e2[Ct] = t3.current, wd(e2), new Lp(t3);
  }, t2.hydrateRoot = function(e2, t3, n3) {
    if (!u2(e2))
      throw Error(l2(299));
    var r2 = false, i2 = ``, a2 = tc, o3 = nc, s2 = rc, c3 = null;
    return n3 != null && (n3.unstable_strictMode === true && (r2 = true), n3.identifierPrefix !== void 0 && (i2 = n3.identifierPrefix), n3.onUncaughtError !== void 0 && (a2 = n3.onUncaughtError), n3.onCaughtError !== void 0 && (o3 = n3.onCaughtError), n3.onRecoverableError !== void 0 && (s2 = n3.onRecoverableError), n3.formState !== void 0 && (c3 = n3.formState)), t3 = np(e2, 1, true, t3, n3 ?? null, r2, i2, c3, a2, o3, s2, Ip), t3.context = rp(null), n3 = t3.current, r2 = hu(), r2 = gt(r2), i2 = $a(r2), i2.callback = null, eo(n3, i2, r2), n3 = r2, t3.current.lanes = n3, dt(t3, n3), ad(t3), e2[Ct] = t3.current, wd(e2), new Rp(t3);
  }, t2.version = `19.2.8`;
}), l = t(n((e2, t2) => {
  function n2() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > `u` || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != `function`))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n2);
      } catch (e3) {
        console.error(e3);
      }
  }
  n2(), t2.exports = c();
})()), u = l, d = u.createRoot, f = u.hydrateRoot, p = u.version, m = Reflect.get(l, `default`) ?? l;
export {
  d as createRoot,
  m as default,
  f as hydrateRoot,
  p as version
};
