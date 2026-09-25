const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react.production-DNV6vxBb.js"])))=>i.map(i=>d[i]);
import {n as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {t} from "./vite-preload-helper-uBIymjUX.js";
let d, g, K, D, X, p, L, m, G, W, E, j, U, w, O, B, T, k, f, I, J, n, Z, Y;
let __tla = (async () => {
  var _a, _b;
  let r, i;
  n = e({
    Activity: () => oe,
    Children: () => f,
    Component: () => p,
    Fragment: () => m,
    Profiler: () => h,
    PureComponent: () => g,
    StrictMode: () => _,
    Suspense: () => v,
    ViewTransition: () => y,
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => b,
    __COMPILER_RUNTIME: () => x,
    __moduleExports: () => ue,
    addTransitionType: () => S,
    cache: () => C,
    cacheSignal: () => se,
    cloneElement: () => w,
    createContext: () => T,
    createElement: () => E,
    createRef: () => D,
    default: () => d,
    forwardRef: () => O,
    isValidElement: () => k,
    lazy: () => A,
    memo: () => j,
    startTransition: () => M,
    unstable_useCacheRefresh: () => N,
    use: () => P,
    useActionState: () => F,
    useCallback: () => I,
    useContext: () => L,
    useDebugValue: () => R,
    useDeferredValue: () => z,
    useEffect: () => B,
    useEffectEvent: () => V,
    useId: () => H,
    useImperativeHandle: () => U,
    useInsertionEffect: () => W,
    useLayoutEffect: () => G,
    useMemo: () => K,
    useOptimistic: () => q,
    useReducer: () => J,
    useRef: () => Y,
    useState: () => X,
    useSyncExternalStore: () => ce,
    useTransition: () => le,
    version: () => Z
  });
  r = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__219446345750563__mf_v__runtimeInit__mf_v__.js__`;
  i = globalThis[r];
  if (!i) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    i = globalThis[r] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var a = i.initPromise, o = `__mf_module_cache__`;
  globalThis[o] || (globalThis[o] = {
    share: {},
    remote: {}
  }), (_a = globalThis[o]).share || (_a.share = {}), (_b = globalThis[o]).remote || (_b.remote = {});
  var s = globalThis[o], ee = (e2) => {
    let t2 = s.pendingShareLoads || (s.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(s.share))
    if (e2.startsWith(`default:`)) {
      let t2 = e2.slice(8);
      s.share[t2] === void 0 && (s.share[t2] = s.share[e2]);
    } else if (!e2.includes(`:`)) {
      let t2 = `default:` + e2;
      s.share[t2] === void 0 && (s.share[t2] = s.share[e2]);
    }
  let c, l, te, ne, u, re, ie, ae, oe, h, _, v, y, b, x, S, C, se, A, M, N, P, F, R, z, V, H, q, ce, le, Q;
  c = (e2, t2) => {
    let n2 = e2[t2.canonical];
    if (n2 !== void 0)
      return n2;
    let r2 = t2.aliases || [];
    for (let n3 of r2) {
      if (!Object.prototype.hasOwnProperty.call(e2, n3))
        continue;
      let r3 = e2[n3];
      if (r3 !== void 0)
        return e2[t2.canonical] = r3, r3;
    }
  };
  l = Symbol.for(`module-federation.shared-cache-listeners`);
  te = (e2) => {
    let t2 = e2[l];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, l, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  ne = (e2, t2, n2) => {
    var _a2;
    let r2 = te(e2);
    (r2[_a2 = t2.canonical] || (r2[_a2] = new Set())).add(n2);
  };
  u = Symbol.for(`module-federation.shared-cache-owners`);
  re = (e2) => {
    let t2 = e2[u];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, u, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  ie = (e2, t2, n2, r2) => {
    e2[t2.canonical] = n2;
    let i2 = t2.aliases || [];
    for (let t3 of i2)
      Object.defineProperty(e2, t3, {
        value: n2,
        enumerable: true,
        configurable: true,
        writable: true
      });
    let a2 = e2[u];
    r2 === void 0 ? a2 && delete a2[t2.canonical] : re(e2)[t2.canonical] = r2;
    let o2 = e2[l]?.[t2.canonical];
    if (o2)
      for (let e3 of o2)
        e3(n2);
    return n2;
  };
  ae = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3?.default;
        if (!e4 || typeof e4 != `object`)
          break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0))
          break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Q = (e2) => {
    oe = e2.Activity, f = e2.Children, p = e2.Component, m = e2.Fragment, h = e2.Profiler, g = e2.PureComponent, _ = e2.StrictMode, v = e2.Suspense, y = e2.ViewTransition, b = e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = e2.__COMPILER_RUNTIME, S = e2.addTransitionType, C = e2.cache, se = e2.cacheSignal, w = e2.cloneElement, T = e2.createContext, E = e2.createElement, D = e2.createRef, O = e2.forwardRef, k = e2.isValidElement, A = e2.lazy, j = e2.memo, M = e2.startTransition, N = e2.unstable_useCacheRefresh, P = e2.use, F = e2.useActionState, I = e2.useCallback, L = e2.useContext, R = e2.useDebugValue, z = e2.useDeferredValue, B = e2.useEffect, V = e2.useEffectEvent, H = e2.useId, U = e2.useImperativeHandle, W = e2.useInsertionEffect, G = e2.useLayoutEffect, K = e2.useMemo, q = e2.useOptimistic, J = e2.useReducer, Y = e2.useRef, X = e2.useState, ce = e2.useSyncExternalStore, le = e2.useTransition, Z = e2.version, d = e2.default ?? e2;
  };
  ne(s.share, {
    canonical: `default:react`,
    aliases: [
      `react`
    ]
  }, Q);
  var $ = c(s.share, {
    canonical: `default:react`,
    aliases: [
      `react`
    ]
  });
  $ === void 0 ? ee(a.then(() => {
    if ($ = c(s.share, {
      canonical: `default:react`,
      aliases: [
        `react`
      ]
    }), $ !== void 0) {
      Q($);
      return;
    }
    return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react__prebuild__-C-vNc16I.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      $ = ae(e2), ie(s.share, {
        canonical: `default:react`,
        aliases: [
          `react`
        ]
      }, $, `fullcalendar`);
    }), __vite__mapDeps([0]), import.meta.url);
  })) : Q($);
  var ue = $;
})();
export {
  d as C,
  g as S,
  K as _,
  __tla,
  D as a,
  X as b,
  p as c,
  L as d,
  m as f,
  G as g,
  W as h,
  E as i,
  j as l,
  U as m,
  w as n,
  O as o,
  B as p,
  T as r,
  k as s,
  f as t,
  I as u,
  J as v,
  n as w,
  Z as x,
  Y as y
};
