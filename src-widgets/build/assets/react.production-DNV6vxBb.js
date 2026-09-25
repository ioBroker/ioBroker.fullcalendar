import {t as e} from "./rolldown-runtime-Dd_uD5pT.js";
var t = e((e2) => {
  var t2 = Symbol.for(`react.transitional.element`), n = Symbol.for(`react.portal`), r = Symbol.for(`react.fragment`), i = Symbol.for(`react.strict_mode`), a = Symbol.for(`react.profiler`), o = Symbol.for(`react.consumer`), s = Symbol.for(`react.context`), c = Symbol.for(`react.forward_ref`), l = Symbol.for(`react.suspense`), u = Symbol.for(`react.memo`), d = Symbol.for(`react.lazy`), f = Symbol.for(`react.activity`), p = Symbol.for(`react.view_transition`), m = Symbol.iterator;
  function h(e3) {
    return typeof e3 != `object` || !e3 ? null : (e3 = m && e3[m] || e3[`@@iterator`], typeof e3 == `function` ? e3 : null);
  }
  var g = {isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  }}, _ = Object.assign, v = {};
  function y(e3, t3, n2) {
    this.props = e3, this.context = t3, this.refs = v, this.updater = n2 || g;
  }
  y.prototype.isReactComponent = {}, y.prototype.setState = function(e3, t3) {
    if (typeof e3 != `object` && typeof e3 != `function` && e3 != null)
      throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    this.updater.enqueueSetState(this, e3, t3, `setState`);
  }, y.prototype.forceUpdate = function(e3) {
    this.updater.enqueueForceUpdate(this, e3, `forceUpdate`);
  };
  function b() {
  }
  b.prototype = y.prototype;
  function x(e3, t3, n2) {
    this.props = e3, this.context = t3, this.refs = v, this.updater = n2 || g;
  }
  var S = x.prototype = new b();
  S.constructor = x, _(S, y.prototype), S.isPureReactComponent = true;
  var C = Array.isArray;
  function w() {
  }
  var T = {H: null, A: null, T: null, S: null}, E = Object.prototype.hasOwnProperty;
  function D(e3, n2, r2) {
    var i2 = r2.ref;
    return {$$typeof: t2, type: e3, key: n2, ref: i2 === void 0 ? null : i2, props: r2};
  }
  function O(e3, t3) {
    return D(e3.type, t3, e3.props);
  }
  function k(e3) {
    return typeof e3 == `object` && !!e3 && e3.$$typeof === t2;
  }
  function A(e3) {
    var t3 = {"=": `=0`, ":": `=2`};
    return `$` + e3.replace(/[=:]/g, function(e4) {
      return t3[e4];
    });
  }
  var j = /\/+/g;
  function M(e3, t3) {
    return typeof e3 == `object` && e3 && e3.key != null ? A(`` + e3.key) : t3.toString(36);
  }
  function N(e3) {
    switch (e3.status) {
      case `fulfilled`:
        return e3.value;
      case `rejected`:
        throw e3.reason;
      default:
        switch (typeof e3.status == `string` ? e3.then(w, w) : (e3.status = `pending`, e3.then(function(t3) {
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
  function P(e3, r2, i2, a2, o2) {
    var s2 = typeof e3;
    (s2 === `undefined` || s2 === `boolean`) && (e3 = null);
    var c2 = false;
    if (e3 === null)
      c2 = true;
    else
      switch (s2) {
        case `bigint`:
        case `string`:
        case `number`:
          c2 = true;
          break;
        case `object`:
          switch (e3.$$typeof) {
            case t2:
            case n:
              c2 = true;
              break;
            case d:
              return c2 = e3._init, P(c2(e3._payload), r2, i2, a2, o2);
          }
      }
    if (c2)
      return o2 = o2(e3), c2 = a2 === `` ? `.` + M(e3, 0) : a2, C(o2) ? (i2 = ``, c2 != null && (i2 = c2.replace(j, `$&/`) + `/`), P(o2, r2, i2, ``, function(e4) {
        return e4;
      })) : o2 != null && (k(o2) && (o2 = O(o2, i2 + (o2.key == null || e3 && e3.key === o2.key ? `` : (`` + o2.key).replace(j, `$&/`) + `/`) + c2)), r2.push(o2)), 1;
    c2 = 0;
    var l2 = a2 === `` ? `.` : a2 + `:`;
    if (C(e3))
      for (var u2 = 0; u2 < e3.length; u2++)
        a2 = e3[u2], s2 = l2 + M(a2, u2), c2 += P(a2, r2, i2, s2, o2);
    else if (u2 = h(e3), typeof u2 == `function`)
      for (e3 = u2.call(e3), u2 = 0; !(a2 = e3.next()).done; )
        a2 = a2.value, s2 = l2 + M(a2, u2++), c2 += P(a2, r2, i2, s2, o2);
    else if (s2 === `object`) {
      if (typeof e3.then == `function`)
        return P(N(e3), r2, i2, a2, o2);
      throw r2 = String(e3), Error(`Objects are not valid as a React child (found: ` + (r2 === `[object Object]` ? `object with keys {` + Object.keys(e3).join(`, `) + `}` : r2) + `). If you meant to render a collection of children, use an array instead.`);
    }
    return c2;
  }
  function F(e3, t3, n2) {
    if (e3 == null)
      return e3;
    var r2 = [], i2 = 0;
    return P(e3, r2, ``, ``, function(e4) {
      return t3.call(n2, e4, i2++);
    }), r2;
  }
  function I(e3) {
    if (e3._status === -1) {
      var t3 = e3._result, n2 = t3();
      n2.then(function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 1, e3._result = t4, n2.status === void 0 && (n2.status = `fulfilled`, n2.value = t4));
      }, function(t4) {
        (e3._status === 0 || e3._status === -1) && (e3._status = 2, e3._result = t4, n2.status === void 0 && (n2.status = `rejected`, n2.reason = t4));
      }), e3._status === -1 && (e3._status = 0, e3._result = n2);
    }
    if (e3._status === 1)
      return e3._result.default;
    throw e3._result;
  }
  var L = typeof reportError == `function` ? reportError : function(e3) {
    if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
      var t3 = new window.ErrorEvent(`error`, {bubbles: true, cancelable: true, message: typeof e3 == `object` && e3 && typeof e3.message == `string` ? String(e3.message) : String(e3), error: e3});
      if (!window.dispatchEvent(t3))
        return;
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e3);
      return;
    }
    console.error(e3);
  };
  function R(e3) {
    var t3 = T.T, n2 = {};
    n2.types = t3 === null ? null : t3.types, T.T = n2;
    try {
      var r2 = e3(), i2 = T.S;
      i2 !== null && i2(n2, r2), typeof r2 == `object` && r2 && typeof r2.then == `function` && r2.then(w, L);
    } catch (e4) {
      L(e4);
    } finally {
      t3 !== null && n2.types !== null && (t3.types = n2.types), T.T = t3;
    }
  }
  function z(e3) {
    var t3 = T.T;
    if (t3 !== null) {
      var n2 = t3.types;
      n2 === null ? t3.types = [e3] : n2.indexOf(e3) === -1 && n2.push(e3);
    } else
      R(z.bind(null, e3));
  }
  var B = {map: F, forEach: function(e3, t3, n2) {
    F(e3, function() {
      t3.apply(this, arguments);
    }, n2);
  }, count: function(e3) {
    var t3 = 0;
    return F(e3, function() {
      t3++;
    }), t3;
  }, toArray: function(e3) {
    return F(e3, function(e4) {
      return e4;
    }) || [];
  }, only: function(e3) {
    if (!k(e3))
      throw Error(`React.Children.only expected to receive a single React element child.`);
    return e3;
  }};
  e2.Activity = f, e2.Children = B, e2.Component = y, e2.Fragment = r, e2.Profiler = a, e2.PureComponent = x, e2.StrictMode = i, e2.Suspense = l, e2.ViewTransition = p, e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, e2.__COMPILER_RUNTIME = {__proto__: null, c: function(e3) {
    return T.H.useMemoCache(e3);
  }}, e2.addTransitionType = z, e2.cache = function(e3) {
    return function() {
      return e3.apply(null, arguments);
    };
  }, e2.cacheSignal = function() {
    return null;
  }, e2.cloneElement = function(e3, t3, n2) {
    if (e3 == null)
      throw Error(`The argument must be a React element, but you passed ` + e3 + `.`);
    var r2 = _({}, e3.props), i2 = e3.key;
    if (t3 != null)
      for (a2 in t3.key !== void 0 && (i2 = `` + t3.key), t3)
        !E.call(t3, a2) || a2 === `key` || a2 === `__self` || a2 === `__source` || a2 === `ref` && t3.ref === void 0 || (r2[a2] = t3[a2]);
    var a2 = arguments.length - 2;
    if (a2 === 1)
      r2.children = n2;
    else if (1 < a2) {
      for (var o2 = Array(a2), s2 = 0; s2 < a2; s2++)
        o2[s2] = arguments[s2 + 2];
      r2.children = o2;
    }
    return D(e3.type, i2, r2);
  }, e2.createContext = function(e3) {
    return e3 = {$$typeof: s, _currentValue: e3, _currentValue2: e3, _threadCount: 0, Provider: null, Consumer: null}, e3.Provider = e3, e3.Consumer = {$$typeof: o, _context: e3}, e3;
  }, e2.createElement = function(e3, t3, n2) {
    var r2, i2 = {}, a2 = null;
    if (t3 != null)
      for (r2 in t3.key !== void 0 && (a2 = `` + t3.key), t3)
        E.call(t3, r2) && r2 !== `key` && r2 !== `__self` && r2 !== `__source` && (i2[r2] = t3[r2]);
    var o2 = arguments.length - 2;
    if (o2 === 1)
      i2.children = n2;
    else if (1 < o2) {
      for (var s2 = Array(o2), c2 = 0; c2 < o2; c2++)
        s2[c2] = arguments[c2 + 2];
      i2.children = s2;
    }
    if (e3 && e3.defaultProps)
      for (r2 in o2 = e3.defaultProps, o2)
        i2[r2] === void 0 && (i2[r2] = o2[r2]);
    return D(e3, a2, i2);
  }, e2.createRef = function() {
    return {current: null};
  }, e2.forwardRef = function(e3) {
    return {$$typeof: c, render: e3};
  }, e2.isValidElement = k, e2.lazy = function(e3) {
    return {$$typeof: d, _payload: {_status: -1, _result: e3}, _init: I};
  }, e2.memo = function(e3, t3) {
    return {$$typeof: u, type: e3, compare: t3 === void 0 ? null : t3};
  }, e2.startTransition = R, e2.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, e2.use = function(e3) {
    return T.H.use(e3);
  }, e2.useActionState = function(e3, t3, n2) {
    return T.H.useActionState(e3, t3, n2);
  }, e2.useCallback = function(e3, t3) {
    return T.H.useCallback(e3, t3);
  }, e2.useContext = function(e3) {
    return T.H.useContext(e3);
  }, e2.useDebugValue = function() {
  }, e2.useDeferredValue = function(e3, t3) {
    return T.H.useDeferredValue(e3, t3);
  }, e2.useEffect = function(e3, t3) {
    return T.H.useEffect(e3, t3);
  }, e2.useEffectEvent = function(e3) {
    return T.H.useEffectEvent(e3);
  }, e2.useId = function() {
    return T.H.useId();
  }, e2.useImperativeHandle = function(e3, t3, n2) {
    return T.H.useImperativeHandle(e3, t3, n2);
  }, e2.useInsertionEffect = function(e3, t3) {
    return T.H.useInsertionEffect(e3, t3);
  }, e2.useLayoutEffect = function(e3, t3) {
    return T.H.useLayoutEffect(e3, t3);
  }, e2.useMemo = function(e3, t3) {
    return T.H.useMemo(e3, t3);
  }, e2.useOptimistic = function(e3, t3) {
    return T.H.useOptimistic(e3, t3);
  }, e2.useReducer = function(e3, t3, n2) {
    return T.H.useReducer(e3, t3, n2);
  }, e2.useRef = function(e3) {
    return T.H.useRef(e3);
  }, e2.useState = function(e3) {
    return T.H.useState(e3);
  }, e2.useSyncExternalStore = function(e3, t3, n2) {
    return T.H.useSyncExternalStore(e3, t3, n2);
  }, e2.useTransition = function() {
    return T.H.useTransition();
  }, e2.version = `19.3.0`;
});
export {
  t
};
