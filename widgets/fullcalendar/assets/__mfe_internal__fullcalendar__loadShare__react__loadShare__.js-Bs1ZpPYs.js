let J, E, h, c, p, M, B, I, W, R, v, k, w, Y, $, U, x, H, O, P, q, d, L;
let __tla = (async () => {
  function m(e, n) {
    for (var r = 0; r < n.length; r++) {
      const _ = n[r];
      if (typeof _ != "string" && !Array.isArray(_)) {
        for (const t in _) if (t !== "default" && !(t in e)) {
          const a = Object.getOwnPropertyDescriptor(_, t);
          a && Object.defineProperty(e, t, a.get ? a : {
            enumerable: true,
            get: () => _[t]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const f = "__mf_init____mf__virtual/__mfe_internal__fullcalendar__mf_v__runtimeInit__mf_v__.js__";
  let o = globalThis[f];
  if (!o) {
    let e, n;
    const r = new Promise((_, t) => {
      e = _, n = t;
    });
    o = globalThis[f] = {
      initPromise: r,
      initResolve: e,
      initReject: n
    }, typeof window > "u" && e({
      loadRemote: function() {
        return Promise.resolve(void 0);
      },
      loadShare: function() {
        return Promise.resolve(void 0);
      }
    });
  }
  let i, u, s, l, S, g, b, y, C, T, D, V, j, N, F, A, z, G, K;
  i = o.initPromise;
  u = i.then((e) => e.loadShare("react", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  }));
  s = await u.then((e) => typeof e == "function" ? e() : e);
  l = s;
  c = s.__esModule ? s.default : s.default ?? s;
  ({ Children: d, Component: E, Fragment: R, Profiler: S, PureComponent: p, StrictMode: g, Suspense: b, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: y, act: C, cloneElement: P, createContext: I, createElement: O, createFactory: T, createRef: h, forwardRef: v, isValidElement: x, lazy: D, memo: L, startTransition: V, unstable_act: j, useCallback: w, useContext: M, useDebugValue: N, useDeferredValue: F, useEffect: k, useId: A, useImperativeHandle: U, useInsertionEffect: z, useLayoutEffect: q, useMemo: B, useReducer: H, useRef: W, useState: Y, useSyncExternalStore: G, useTransition: K, version: $ } = s);
  J = m({
    __proto__: null,
    Children: d,
    Component: E,
    Fragment: R,
    Profiler: S,
    PureComponent: p,
    StrictMode: g,
    Suspense: b,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: y,
    act: C,
    cloneElement: P,
    createContext: I,
    createElement: O,
    createFactory: T,
    createRef: h,
    default: c,
    forwardRef: v,
    isValidElement: x,
    lazy: D,
    memo: L,
    startTransition: V,
    unstable_act: j,
    useCallback: w,
    useContext: M,
    useDebugValue: N,
    useDeferredValue: F,
    useEffect: k,
    useId: A,
    useImperativeHandle: U,
    useInsertionEffect: z,
    useLayoutEffect: q,
    useMemo: B,
    useReducer: H,
    useRef: W,
    useState: Y,
    useSyncExternalStore: G,
    useTransition: K,
    version: $
  }, [
    l
  ]);
})();
export {
  J as R,
  E as _,
  __tla,
  h as a,
  c as b,
  p as c,
  M as d,
  B as e,
  I as f,
  W as g,
  R as h,
  v as i,
  k as j,
  w as k,
  Y as l,
  $ as m,
  U as n,
  x as o,
  H as p,
  O as q,
  P as r,
  q as s,
  d as t,
  L as u
};
