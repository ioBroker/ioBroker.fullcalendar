const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-dom-BCqaMhZK.js"])))=>i.map(i=>d[i]);
import {r as e} from "./rolldown-runtime-C0FnF6B9.js";
import {n as t, t as n} from "./vite-preload-helper-r6RKwCfh.js";
let x, r, b;
let __tla = (async () => {
  var _a, _b;
  r = e({
    __DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE: () => y,
    __moduleExports: () => F,
    createPortal: () => b,
    default: () => v,
    flushSync: () => x,
    preconnect: () => S,
    prefetchDNS: () => C,
    preinit: () => w,
    preinitModule: () => T,
    preload: () => E,
    preloadModule: () => D,
    requestFormReset: () => O,
    unstable_batchedUpdates: () => k,
    useFormState: () => A,
    useFormStatus: () => j,
    version: () => M
  });
  t();
  var i = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__62832661403724__mf_v__runtimeInit__mf_v__.js__`, a = globalThis[i];
  if (!a) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    a = globalThis[i] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var o = a.initPromise, s = `__mf_module_cache__`;
  globalThis[s] || (globalThis[s] = {
    share: {},
    remote: {}
  }), (_a = globalThis[s]).share || (_a.share = {}), (_b = globalThis[s]).remote || (_b.remote = {});
  var c = globalThis[s], l = (e2) => {
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
  let u, d, f, p, m, h, g, _, v, y, S, C, w, T, E, D, O, k, A, j, M, N;
  u = (e2, t2) => {
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
  d = Symbol.for(`module-federation.shared-cache-listeners`);
  f = (e2) => {
    let t2 = e2[d];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, d, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  p = (e2, t2, n2) => {
    var _a2;
    let r2 = f(e2);
    (r2[_a2 = t2.canonical] || (r2[_a2] = new Set())).add(n2);
  };
  m = Symbol.for(`module-federation.shared-cache-owners`);
  h = (e2) => {
    let t2 = e2[m];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, m, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  g = (e2, t2, n2, r2) => {
    e2[t2.canonical] = n2;
    let i2 = t2.aliases || [];
    for (let t3 of i2)
      Object.defineProperty(e2, t3, {
        value: n2,
        enumerable: true,
        configurable: true,
        writable: true
      });
    let a2 = e2[m];
    r2 === void 0 ? a2 && delete a2[t2.canonical] : h(e2)[t2.canonical] = r2;
    let o2 = e2[d]?.[t2.canonical];
    if (o2)
      for (let e3 of o2)
        e3(n2);
    return n2;
  };
  _ = (e2) => {
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
  N = (e2) => {
    y = e2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = e2.createPortal, x = e2.flushSync, S = e2.preconnect, C = e2.prefetchDNS, w = e2.preinit, T = e2.preinitModule, E = e2.preload, D = e2.preloadModule, O = e2.requestFormReset, k = e2.unstable_batchedUpdates, A = e2.useFormState, j = e2.useFormStatus, M = e2.version, v = e2.default ?? e2;
  };
  p(c.share, {
    canonical: `default:react-dom`,
    aliases: [
      `react-dom`
    ]
  }, N);
  var P = u(c.share, {
    canonical: `default:react-dom`,
    aliases: [
      `react-dom`
    ]
  });
  P === void 0 ? l(o.then(() => {
    if (P = u(c.share, {
      canonical: `default:react-dom`,
      aliases: [
        `react-dom`
      ]
    }), P !== void 0) {
      N(P);
      return;
    }
    return n(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react_mf_2_dom__prebuild__-M64sJ1Ki.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      P = _(e2), g(c.share, {
        canonical: `default:react-dom`,
        aliases: [
          `react-dom`
        ]
      }, P, `fullcalendar`);
    }), __vite__mapDeps([0]), import.meta.url);
  })) : N(P);
  var F = P;
})();
export {
  __tla,
  x as n,
  r,
  b as t
};
