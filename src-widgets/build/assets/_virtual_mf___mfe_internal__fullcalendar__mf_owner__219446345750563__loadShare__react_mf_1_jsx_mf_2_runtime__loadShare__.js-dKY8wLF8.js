import {n as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {t} from "./vite-preload-helper-uBIymjUX.js";
let n, y, b, v;
let __tla = (async () => {
  var _a, _b;
  let r, i;
  n = e({
    Fragment: () => v,
    __moduleExports: () => C,
    default: () => _,
    jsx: () => y,
    jsxs: () => b
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
  var s = globalThis[o], c = (e2) => {
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
  let l, u, d, f, p, m, h, g, _, x;
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
  };
  u = Symbol.for(`module-federation.shared-cache-listeners`);
  d = (e2) => {
    let t2 = e2[u];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, u, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  f = (e2, t2, n2) => {
    var _a2;
    let r2 = d(e2);
    (r2[_a2 = t2.canonical] || (r2[_a2] = new Set())).add(n2);
  };
  p = Symbol.for(`module-federation.shared-cache-owners`);
  m = (e2) => {
    let t2 = e2[p];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, p, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  h = (e2, t2, n2, r2) => {
    e2[t2.canonical] = n2;
    let i2 = t2.aliases || [];
    for (let t3 of i2)
      Object.defineProperty(e2, t3, {
        value: n2,
        enumerable: true,
        configurable: true,
        writable: true
      });
    let a2 = e2[p];
    r2 === void 0 ? a2 && delete a2[t2.canonical] : m(e2)[t2.canonical] = r2;
    let o2 = e2[u]?.[t2.canonical];
    if (o2)
      for (let e3 of o2)
        e3(n2);
    return n2;
  };
  g = (e2) => {
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
  x = (e2) => {
    v = e2.Fragment, y = e2.jsx, b = e2.jsxs, _ = e2.default ?? e2;
  };
  f(s.share, {
    canonical: `default:react/jsx-runtime`,
    aliases: [
      `react/jsx-runtime`
    ]
  }, x);
  var S = l(s.share, {
    canonical: `default:react/jsx-runtime`,
    aliases: [
      `react/jsx-runtime`
    ]
  });
  S === void 0 ? c(a.then(() => {
    if (S = l(s.share, {
      canonical: `default:react/jsx-runtime`,
      aliases: [
        `react/jsx-runtime`
      ]
    }), S !== void 0) {
      x(S);
      return;
    }
    return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-B_v57Qfr.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      S = g(e2), h(s.share, {
        canonical: `default:react/jsx-runtime`,
        aliases: [
          `react/jsx-runtime`
        ]
      }, S, `fullcalendar`);
    }), [], import.meta.url);
  })) : x(S);
  var C = S;
})();
export {
  __tla,
  n as i,
  y as n,
  b as r,
  v as t
};
