import {n as e, o as t, t as n} from "./rolldown-runtime-C0FnF6B9.js";
var r = n((e2) => {
  var t2 = Symbol.for(`react.transitional.element`), n2 = Symbol.for(`react.portal`), r2 = Symbol.for(`react.fragment`), i2 = Symbol.for(`react.strict_mode`), a2 = Symbol.for(`react.profiler`), o2 = Symbol.for(`react.consumer`), s2 = Symbol.for(`react.context`), c2 = Symbol.for(`react.forward_ref`), l2 = Symbol.for(`react.suspense`), u2 = Symbol.for(`react.memo`), d2 = Symbol.for(`react.lazy`), f2 = Symbol.for(`react.activity`), p2 = Symbol.iterator;
  function m2(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = p2 && e3[p2] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var h2 = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, g2 = Object.assign, _2 = {};
  function v2(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = _2, this.updater = n3 || h2;
  }
  v2.prototype.isReactComponent = {}, v2.prototype.setState = function(e3, t3) {
    if (typeof e3 != `object` && typeof e3 != `function` && e3 != null)
      throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e3, t3, `setState`);
  }, v2.prototype.forceUpdate = function(e3) {
    this.updater.enqueueForceUpdate(this, e3, `forceUpdate`);
  };
  function y2() {
  }
  y2.prototype = v2.prototype;
  function b2(e3, t3, n3) {
    this.props = e3, this.context = t3, this.refs = _2, this.updater = n3 || h2;
  }
  var x2 = b2.prototype = new y2();
  x2.constructor = b2, g2(x2, v2.prototype), x2.isPureReactComponent = true;
  var S2 = Array.isArray;
  function C2() {
  }
  var w2 = {H: null, A: null, T: null, S: null}, T2 = Object.prototype.hasOwnProperty;
  function E2(e3, n3, r3) {
    var i3 = r3.ref;
    return {$$typeof: t2, type: e3, key: n3, ref: i3 === void 0 ? null : i3, props: r3};
  }
  function D2(e3, t3) {
    return E2(e3.type, t3, e3.props);
  }
  function O2(e3) {
    return typeof e3 == `object` && !!e3 && e3.$$typeof === t2;
  }
  function k2(e3) {
    var t3 = {"=": `=0`, ":": `=2`};
    return `$` + e3.replace(/[=:]/g, function(e4) {
      return t3[e4];
    });
  }
  var A2 = /\/+/g;
  function j2(e3, t3) {
    return typeof e3 == `object` && e3 && e3.key != null ? k2(`` + e3.key) : t3.toString(36);
  }
  function M2(e3) {
    switch (e3.status) {
      case `fulfilled`:
        return e3.value;
      case `rejected`:
        throw e3.reason;
      default:
        switch (typeof e3.status == `string` ? e3.then(C2, C2) : (e3.status = `pending`, e3.then(function(t3) {
          e3.status === `pending` && (e3.status = `fulfilled`, e3.value = t3);
        }, function(t3) {
          e3.status === `pending` && (e3.status = `rejected`, e3.reason = t3);
        })), e3.status) {
          case `fulfilled`:
            return e3.value;
          case `rejected`:
            throw e3.reason;
        }
    }
    throw e3;
  }
  function N2(e3, r3, i3, a3, o3) {
    var s3 = typeof e3;
    (s3 === `undefined` || s3 === `boolean`) && (e3 = null);
    var c3 = false;
    if (e3 === null)
      c3 = true;
    else
      switch (s3) {
        case `bigint`:
        case `string`:
        case `number`:
          c3 = true;
          break;
        case `object`:
          switch (e3.$$typeof) {
            case t2:
            case n2:
              c3 = true;
              break;
            case d2:
              return c3 = e3._init, N2(c3(e3._payload), r3, i3, a3, o3);
          }
      }
    if (c3)
      return o3 = o3(e3), c3 = a3 === `` ? `.` + j2(e3, 0) : a3, S2(o3) ? (i3 = ``, c3 != null && (i3 = c3.replace(A2, `$&/`) + `/`), N2(o3, r3, i3, ``, function(e4) {
        return e4;
      })) : o3 != null && (O2(o3) && (o3 = D2(o3, i3 + (o3.key == null || e3 && e3.key === o3.key ? `` : (`` + o3.key).replace(A2, `$&/`) + `/`) + c3)), r3.push(o3)), 1;
    c3 = 0;
    var l3 = a3 === `` ? `.` : a3 + `:`;
    if (S2(e3))
      for (var u3 = 0; u3 < e3.length; u3++)
        a3 = e3[u3], s3 = l3 + j2(a3, u3), c3 += N2(a3, r3, i3, s3, o3);
    else if (u3 = m2(e3), typeof u3 == `function`)
      for (e3 = u3.call(e3), u3 = 0; !(a3 = e3.next()).done; )
        a3 = a3.value, s3 = l3 + j2(a3, u3++), c3 += N2(a3, r3, i3, s3, o3);
    else if (s3 === `object`) {
      if (typeof e3.then == `function`)
        return N2(M2(e3), r3, i3, a3, o3);
      throw r3 = String(e3), Error(`Objects are not valid as a React child (found: ` + (r3 === `[object Object]` ? `object with keys {` + Object.keys(e3).join(`, `) + `}` : r3) + `). If you meant to render a collection of children, use an array instead.`);
    }
    return c3;
  }
  function P2(e3, t3, n3) {
    if (e3 == null)
      return e3;
    var r3 = [], i3 = 0;
    return N2(e3, r3, ``, ``, function(e4) {
      return t3.call(n3, e4, i3++);
    }), r3;
  }
  function F2(e3) {
    if (e3._status === -1) {
      var t3 = e3._result;
      t3 = t3(), t3.then(function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = t4);
      }, function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = t4);
      }), e3._status === -1 && (e3._status = 0, e3._result = t3);
    }
    if (e3._status === 1)
      return e3._result.default;
    throw e3._result;
  }
  var I2 = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, {bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3});
      if (!window.dispatchEvent(t3))
        return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  }, L2 = {map: P2, forEach: function(e3, t3, n3) {
    P2(e3, function() {
      t3.apply(this, arguments);
    }, n3);
  }, count: function(e3) {
    var t3 = 0;
    return P2(e3, function() {
      t3++;
    }), t3;
  }, toArray: function(e3) {
    return P2(e3, function(e4) {
      return e4;
    }) || [];
  }, only: function(e3) {
    if (!O2(e3))
      throw Error(`React.Children.only expected to receive a single React element child.`);
    return e3;
  }};
  e2.Activity = f2, e2.Children = L2, e2.Component = v2, e2.Fragment = r2, e2.Profiler = a2, e2.PureComponent = b2, e2.StrictMode = i2, e2.Suspense = l2, e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w2, e2.__COMPILER_RUNTIME = {__proto__: null, c: function(e3) {
    return w2.H.useMemoCache(e3);
  }}, e2.cache = function(e3) {
    return function() {
      return e3.apply(null, arguments);
    };
  }, e2.cacheSignal = function() {
    return null;
  }, e2.cloneElement = function(e3, t3, n3) {
    if (e3 == null)
      throw Error(`The argument must be a React element, but you passed ` + e3 + `.`);
    var r3 = g2({}, e3.props), i3 = e3.key;
    if (t3 != null)
      for (a3 in t3.key !== void 0 && (i3 = `` + t3.key), t3)
        !T2.call(t3, a3) || a3 === `key` || a3 === `__self` || a3 === `__source` || a3 === `ref` && t3.ref === void 0 || (r3[a3] = t3[a3]);
    var a3 = arguments.length - 2;
    if (a3 === 1)
      r3.children = n3;
    else if (1 < a3) {
      for (var o3 = Array(a3), s3 = 0; s3 < a3; s3++)
        o3[s3] = arguments[s3 + 2];
      r3.children = o3;
    }
    return E2(e3.type, i3, r3);
  }, e2.createContext = function(e3) {
    return e3 = {$$typeof: s2, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null}, e3.Provider = e3, e3.Consumer = {$$typeof: o2, _context: e3}, e3;
  }, e2.createElement = function(e3, t3, n3) {
    var r3, i3 = {}, a3 = null;
    if (t3 != null)
      for (r3 in t3.key !== void 0 && (a3 = `` + t3.key), t3)
        T2.call(t3, r3) && r3 !== `key` && r3 !== `__self` && r3 !== `__source` && (i3[r3] = t3[r3]);
    var o3 = arguments.length - 2;
    if (o3 === 1)
      i3.children = n3;
    else if (1 < o3) {
      for (var s3 = Array(o3), c3 = 0; c3 < o3; c3++)
        s3[c3] = arguments[c3 + 2];
      i3.children = s3;
    }
    if (e3 && e3.defaultProps)
      for (r3 in o3 = e3.defaultProps, o3)
        i3[r3] === void 0 && (i3[r3] = o3[r3]);
    return E2(e3, a3, i3);
  }, e2.createRef = function() {
    return {current: null};
  }, e2.forwardRef = function(e3) {
    return {$$typeof: c2, render: e3};
  }, e2.isValidElement = O2, e2.lazy = function(e3) {
    return {$$typeof: d2, _payload: {_status: -1, _result: e3}, _init: F2};
  }, e2.memo = function(e3, t3) {
    return {$$typeof: u2, type: e3, compare: t3 === void 0 ? null : t3};
  }, e2.startTransition = function(e3) {
    var t3 = w2.T, n3 = {};
    w2.T = n3;
    try {
      var r3 = e3(), i3 = w2.S;
      i3 !== null && i3(n3, r3), typeof r3 == `object` && r3 && typeof r3.then == `function` && r3.then(C2, I2);
    } catch (e4) {
      I2(e4);
    } finally {
      t3 !== null && n3.types !== null && (t3.types = n3.types), w2.T = t3;
    }
  }, e2.unstable_useCacheRefresh = function() {
    return w2.H.useCacheRefresh();
  }, e2.use = function(e3) {
    return w2.H.use(e3);
  }, e2.useActionState = function(e3, t3, n3) {
    return w2.H.useActionState(e3, t3, n3);
  }, e2.useCallback = function(e3, t3) {
    return w2.H.useCallback(e3, t3);
  }, e2.useContext = function(e3) {
    return w2.H.useContext(e3);
  }, e2.useDebugValue = function() {
  }, e2.useDeferredValue = function(e3, t3) {
    return w2.H.useDeferredValue(e3, t3);
  }, e2.useEffect = function(e3, t3) {
    return w2.H.useEffect(e3, t3);
  }, e2.useEffectEvent = function(e3) {
    return w2.H.useEffectEvent(e3);
  }, e2.useId = function() {
    return w2.H.useId();
  }, e2.useImperativeHandle = function(e3, t3, n3) {
    return w2.H.useImperativeHandle(e3, t3, n3);
  }, e2.useInsertionEffect = function(e3, t3) {
    return w2.H.useInsertionEffect(e3, t3);
  }, e2.useLayoutEffect = function(e3, t3) {
    return w2.H.useLayoutEffect(e3, t3);
  }, e2.useMemo = function(e3, t3) {
    return w2.H.useMemo(e3, t3);
  }, e2.useOptimistic = function(e3, t3) {
    return w2.H.useOptimistic(e3, t3);
  }, e2.useReducer = function(e3, t3, n3) {
    return w2.H.useReducer(e3, t3, n3);
  }, e2.useRef = function(e3) {
    return w2.H.useRef(e3);
  }, e2.useState = function(e3) {
    return w2.H.useState(e3);
  }, e2.useSyncExternalStore = function(e3, t3, n3) {
    return w2.H.useSyncExternalStore(e3, t3, n3);
  }, e2.useTransition = function() {
    return w2.H.useTransition();
  }, e2.version = `19.2.8`;
}), i = n((e2, t2) => {
  t2.exports = r();
}), a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y;
e(() => {
  a = t(i()), o = a, s = o.Activity, c = o.Children, l = o.Component, u = o.Fragment, d = o.Profiler, f = o.PureComponent, p = o.StrictMode, m = o.Suspense, h = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, g = o.__COMPILER_RUNTIME, _ = o.cache, v = o.cacheSignal, y = o.cloneElement, b = o.createContext, x = o.createElement, S = o.createRef, C = o.forwardRef, w = o.isValidElement, T = o.lazy, E = o.memo, D = o.startTransition, O = o.unstable_useCacheRefresh, k = o.use, A = o.useActionState, j = o.useCallback, M = o.useContext, N = o.useDebugValue, P = o.useDeferredValue, F = o.useEffect, I = o.useEffectEvent, L = o.useId, R = o.useImperativeHandle, z = o.useInsertionEffect, B = o.useLayoutEffect, V = o.useMemo, H = o.useOptimistic, U = o.useReducer, W = o.useRef, G = o.useState, K = o.useSyncExternalStore, q = o.useTransition, J = o.version, Y = Reflect.get(a, `default`) ?? a;
})();
export {
  s as Activity,
  c as Children,
  l as Component,
  u as Fragment,
  d as Profiler,
  f as PureComponent,
  p as StrictMode,
  m as Suspense,
  h as __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  g as __COMPILER_RUNTIME,
  _ as cache,
  v as cacheSignal,
  y as cloneElement,
  b as createContext,
  x as createElement,
  S as createRef,
  Y as default,
  C as forwardRef,
  w as isValidElement,
  T as lazy,
  E as memo,
  D as startTransition,
  O as unstable_useCacheRefresh,
  k as use,
  A as useActionState,
  j as useCallback,
  M as useContext,
  N as useDebugValue,
  P as useDeferredValue,
  F as useEffect,
  I as useEffectEvent,
  L as useId,
  R as useImperativeHandle,
  z as useInsertionEffect,
  B as useLayoutEffect,
  V as useMemo,
  H as useOptimistic,
  U as useReducer,
  W as useRef,
  G as useState,
  K as useSyncExternalStore,
  q as useTransition,
  J as version
};
