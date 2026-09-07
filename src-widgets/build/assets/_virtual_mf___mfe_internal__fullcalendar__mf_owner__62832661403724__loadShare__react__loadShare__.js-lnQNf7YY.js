import {n as e, r as t} from "./rolldown-runtime-C0FnF6B9.js";
import {n, t as r} from "./vite-preload-helper-r6RKwCfh.js";
let p, _, de, K, D, X, j, L, B, G, W, E, h, U, w, O, g, T, k, m, I, J, ee, Z, Y;
let __tla = (async () => {
  let i, a, o, s, c, te, l, u, ne, d, f, re, ie, ae, oe, se, v, y, b, x, S, C, A, M, N, P, F, R, z, V, H, q, ce, le, Q, $, ue;
  ee = t({
    Activity: () => oe,
    Children: () => m,
    Component: () => h,
    Fragment: () => g,
    Profiler: () => se,
    PureComponent: () => _,
    StrictMode: () => v,
    Suspense: () => y,
    __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => b,
    __COMPILER_RUNTIME: () => x,
    __moduleExports: () => ue,
    cache: () => S,
    cacheSignal: () => C,
    cloneElement: () => w,
    createContext: () => T,
    createElement: () => E,
    createRef: () => D,
    default: () => p,
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
  de = e(() => {
    var _a, _b;
    if (n(), i = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__62832661403724__mf_v__runtimeInit__mf_v__.js__`, a = globalThis[i], !a) {
      let e2, t2, n2 = new Promise((n3, r2) => {
        e2 = n3, t2 = r2;
      });
      a = globalThis[i] = {
        initPromise: n2,
        initResolve: e2,
        initReject: t2
      };
    }
    o = a.initPromise, s = `__mf_module_cache__`, globalThis[s] || (globalThis[s] = {
      share: {},
      remote: {}
    }), (_a = globalThis[s]).share || (_a.share = {}), (_b = globalThis[s]).remote || (_b.remote = {}), c = globalThis[s], te = (e2) => {
      let t2 = c.pendingShareLoads || (c.pendingShareLoads = []);
      t2.push(e2);
      let n2 = () => {
        let n3 = t2.indexOf(e2);
        n3 !== -1 && t2.splice(n3, 1);
      };
      return e2.then(n2, n2), e2;
    };
    for (let e2 of Object.keys(c.share))
      if (e2.startsWith(`default:`)) {
        let t2 = e2.slice(8);
        c.share[t2] === void 0 && (c.share[t2] = c.share[e2]);
      } else if (!e2.includes(`:`)) {
        let t2 = `default:` + e2;
        c.share[t2] === void 0 && (c.share[t2] = c.share[e2]);
      }
    l = (e2, t2) => {
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
    }, u = Symbol.for(`module-federation.shared-cache-listeners`), ne = (e2) => {
      let t2 = e2[u];
      return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, u, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, d = (e2, t2, n2) => {
      var _a2;
      let r2 = ne(e2);
      (r2[_a2 = t2.canonical] || (r2[_a2] = new Set())).add(n2);
    }, f = Symbol.for(`module-federation.shared-cache-owners`), re = (e2) => {
      let t2 = e2[f];
      return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, f, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, ie = (e2, t2, n2, r2) => {
      e2[t2.canonical] = n2;
      let ee2 = t2.aliases || [];
      for (let t3 of ee2)
        Object.defineProperty(e2, t3, {
          value: n2,
          enumerable: true,
          configurable: true,
          writable: true
        });
      let i2 = e2[f];
      r2 === void 0 ? i2 && delete i2[t2.canonical] : re(e2)[t2.canonical] = r2;
      let a2 = e2[u]?.[t2.canonical];
      if (a2)
        for (let e3 of a2)
          e3(n2);
      return n2;
    }, ae = (e2) => {
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
    }, Q = (e2) => {
      oe = e2.Activity, m = e2.Children, h = e2.Component, g = e2.Fragment, se = e2.Profiler, _ = e2.PureComponent, v = e2.StrictMode, y = e2.Suspense, b = e2.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = e2.__COMPILER_RUNTIME, S = e2.cache, C = e2.cacheSignal, w = e2.cloneElement, T = e2.createContext, E = e2.createElement, D = e2.createRef, O = e2.forwardRef, k = e2.isValidElement, A = e2.lazy, j = e2.memo, M = e2.startTransition, N = e2.unstable_useCacheRefresh, P = e2.use, F = e2.useActionState, I = e2.useCallback, L = e2.useContext, R = e2.useDebugValue, z = e2.useDeferredValue, B = e2.useEffect, V = e2.useEffectEvent, H = e2.useId, U = e2.useImperativeHandle, W = e2.useInsertionEffect, G = e2.useLayoutEffect, K = e2.useMemo, q = e2.useOptimistic, J = e2.useReducer, Y = e2.useRef, X = e2.useState, ce = e2.useSyncExternalStore, le = e2.useTransition, Z = e2.version, p = e2.default ?? e2;
    }, d(c.share, {
      canonical: `default:react`,
      aliases: [
        `react`
      ]
    }, Q), $ = l(c.share, {
      canonical: `default:react`,
      aliases: [
        `react`
      ]
    }), $ === void 0 ? te(o.then(() => {
      if ($ = l(c.share, {
        canonical: `default:react`,
        aliases: [
          `react`
        ]
      }), $ !== void 0) {
        Q($);
        return;
      }
      return r(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react__prebuild__-DdbhCVVH.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }).then((e2) => {
        $ = ae(e2), ie(c.share, {
          canonical: `default:react`,
          aliases: [
            `react`
          ]
        }, $, `fullcalendar`);
      }), [], import.meta.url);
    })) : Q($), ue = $;
  });
})();
export {
  p as C,
  _ as S,
  de as T,
  K as _,
  __tla,
  D as a,
  X as b,
  j as c,
  L as d,
  B as f,
  G as g,
  W as h,
  E as i,
  h as l,
  U as m,
  w as n,
  O as o,
  g as p,
  T as r,
  k as s,
  m as t,
  I as u,
  J as v,
  ee as w,
  Z as x,
  Y as y
};
