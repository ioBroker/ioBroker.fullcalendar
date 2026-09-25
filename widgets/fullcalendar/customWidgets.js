const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/FullCalendar-DRKqq0fW.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import {t as e} from "./assets/vite-preload-helper-uBIymjUX.js";
import {t} from "./assets/dist-BK97MX24.js";
import {t as n} from "./assets/helpers-Bizl8Raj.js";
let P, N;
let __tla = (async () => {
  var _a, _b;
  var r = {}, i = new Set(), a = new Map();
  function o(e2, t2) {
    let n2 = a.get(e2);
    return n2 || (n2 = Promise.resolve().then(t2).catch((t3) => {
      throw a.delete(e2), t3;
    }), a.set(e2, n2)), n2;
  }
  async function s(e2) {
    if (typeof document > `u`)
      return;
    let t2 = r[e2] || [];
    await Promise.all(t2.map((e3) => {
      let t3 = new URL(e3, import.meta.url).href;
      return i.has(t3) || (i.add(t3), document.querySelector(`link[rel="stylesheet"][href="${t3}"]`)) ? Promise.resolve() : new Promise((e4, n2) => {
        let r2 = document.createElement(`link`);
        r2.rel = `stylesheet`, r2.href = t3, r2.onload = () => e4(), r2.onerror = () => n2(Error(`[Module Federation] Failed to load CSS asset: ${t3}`)), document.head.appendChild(r2);
      });
    }));
  }
  var c = {
    "./FullCalendar": async () => {
      await s(`./FullCalendar`), await Promise.all([]);
      let t2 = await o(`./FullCalendar`, () => e(() => import("./assets/FullCalendar-BTnwbslg.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), __vite__mapDeps([0]), import.meta.url)), n2 = t2 && t2.__mf_remote_dependency_pending;
      n2 && typeof n2.then == `function` && await n2;
      let r2 = {};
      return Object.assign(r2, t2), Object.defineProperty(r2, "__esModule", {
        value: true,
        enumerable: false
      }), r2;
    },
    "./translations": async () => {
      await s(`./translations`), await Promise.all([]);
      let t2 = await o(`./translations`, () => e(() => import("./assets/translations-e8MhG2Cb.js").then(async (m2) => {
        await m2.__tla;
        return m2;
      }), [], import.meta.url)), n2 = t2 && t2.__mf_remote_dependency_pending;
      n2 && typeof n2.then == `function` && await n2;
      let r2 = {};
      return Object.assign(r2, t2), Object.defineProperty(r2, "__esModule", {
        value: true,
        enumerable: false
      }), r2;
    }
  };
  typeof __VUE_HMR_RUNTIME__ > `u` && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  var l = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__219446345750563__mf_v__runtimeInit__mf_v__.js__`, u = globalThis[l];
  if (!u) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    u = globalThis[l] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var d = u.initResolve, f = `__mf_module_cache__`;
  globalThis[f] || (globalThis[f] = {
    share: {},
    remote: {}
  }), (_a = globalThis[f]).share || (_a.share = {}), (_b = globalThis[f]).remote || (_b.remote = {});
  var p = globalThis[f];
  for (let e2 of Object.keys(p.share))
    if (e2.startsWith(`default:`)) {
      let t2 = e2.slice(8);
      p.share[t2] === void 0 && (p.share[t2] = p.share[e2]);
    } else if (!e2.includes(`:`)) {
      let t2 = `default:` + e2;
      p.share[t2] === void 0 && (p.share[t2] = p.share[e2]);
    }
  var m = {}, h = Array.isArray(`default`) ? `default` : [
    `default`
  ], g = `default`, _ = `fullcalendar`, v = [
    [
      `react`,
      `moment`
    ],
    [
      `react/jsx-dev-runtime`,
      `react/jsx-runtime`,
      `react-dom`,
      `@emotion/react`,
      `@mui/private-theming`
    ],
    [
      `react-dom/client`,
      `@mui/system`
    ],
    [
      `@mui/material`
    ]
  ], y, b;
  async function x(e2) {
    for (let t2 = 0; ; t2++)
      try {
        return await e2();
      } catch (e3) {
        throw e3;
      }
  }
  var S = Symbol(`mf.originalSharedProvider`), C = {
    emit: (e2) => e2
  }, w = (e2) => Array.isArray(e2.scope) ? e2.scope : [
    e2.scope || `default`
  ], T = (e2, t2) => {
    if (t2 !== `version-first`)
      return e2;
    let n2 = {};
    for (let [t3, r2] of Object.entries(e2))
      n2[t3] = Object.assign({}, r2, {
        [S]: r2
      });
    return n2;
  }, E = (e2, t2) => {
    if (!t2)
      return;
    let n2 = Object.entries(e2 || {}), r2 = n2.find(([, e3]) => e3 === t2);
    if (r2)
      return {
        version: r2[0],
        provider: t2,
        registered: true
      };
    if (typeof t2.version == `string` && t2.version)
      return {
        version: t2.version,
        provider: t2,
        registered: false
      };
    let i2 = n2.filter(([, e3]) => e3 === t2 || !!(t2.from && e3?.from === t2.from));
    if (i2.length === 1)
      return {
        version: i2[0][0],
        provider: t2,
        registered: false
      };
  }, D = (e2, t2, r2, i2) => {
    if (!e2 || !r2)
      return;
    let a2 = Object.fromEntries(Object.entries(e2).filter(([, e3]) => e3?.shareConfig?.import !== false));
    if (Object.keys(a2).length === 0)
      return;
    let o2 = w(r2), s2 = T(a2, i2), c2 = {};
    for (let e3 of o2)
      c2[e3 || `default`] = {
        [t2]: s2
      };
    let l2 = n.getRegisteredShare(c2, t2, __spreadProps(__spreadValues({}, r2), {
      scope: o2,
      strategy: i2
    }), C)?.shared;
    return l2?.[S] || l2;
  }, O = (e2, t2, n2, r2) => {
    let i2 = (e3) => k(e3, n2), a2 = Object.fromEntries(Object.entries(e2 || {}).filter(([, e3]) => !i2(e3) && e3?.shareConfig?.import !== false));
    n2?.version && n2.shareConfig?.import !== false && (a2[n2.version] || (a2[n2.version] = n2));
    let o2 = D(a2, t2, n2, r2);
    return i2(o2) ? void 0 : o2;
  }, k = (e2, t2) => e2 === t2 || !!(t2?.from && e2?.from === t2.from), A = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    if (c2 !== `version-first` || !s2)
      return;
    let l2 = t2?.options?.shared?.[i2], u2 = Array.isArray(l2) ? l2.find((e3) => e3?.version === a2) : void 0, d2 = (s2?.from === t2?.options?.name ? s2 : void 0) || (k(u2, s2) ? u2 : t2 ? void 0 : s2);
    if (d2)
      return e2.some((e3) => e3 !== t2 && e3?.options?.name === o2?.from && e3?.shareScopeMap?.[r2] === n2) ? d2 : void 0;
  }, ee = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    let l2 = a2.registered ? A(e2, t2, n2, r2, i2, a2.version, a2.provider, s2, c2) : void 0, u2 = l2 || o2;
    if (u2 && (!a2.registered || k(u2, s2)))
      return {
        provider: u2,
        scopeRootProvider: l2
      };
  };
  async function j() {
    return y || (y = x(() => e(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-CoTGQqmW.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [], import.meta.url)).catch((e2) => {
      throw y = void 0, e2;
    })), y;
  }
  async function M() {
    return c;
  }
  N = async function(e2 = {}, n2 = [], r2 = {}) {
    let i2 = (e3, t2, n3, r3) => {
      let i3 = (Array.isArray(r3) ? r3[0] : r3) || `default`, a3 = t2 || !n3 ? e3 : e3 + `@` + n3, o3 = {
        canonical: i3 + `:` + a3
      };
      return i3 === "default" && (o3.aliases = [
        a3
      ]), o3;
    }, a2 = (e3, t2) => {
      let n3 = e3[t2.canonical];
      if (n3 !== void 0)
        return n3;
      let r3 = t2.aliases || [];
      for (let n4 of r3) {
        if (!Object.prototype.hasOwnProperty.call(e3, n4))
          continue;
        let r4 = e3[n4];
        if (r4 !== void 0)
          return e3[t2.canonical] = r4, r4;
      }
    }, o2 = Symbol.for(`module-federation.shared-cache-listeners`), s2 = Symbol.for(`module-federation.shared-cache-owners`), c2 = (e3) => {
      let t2 = e3[s2];
      return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e3, s2, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, l2 = (e3, t2) => e3[s2]?.[t2.canonical], u2 = (e3, t2, n3, r3) => {
      e3[t2.canonical] = n3;
      let i3 = t2.aliases || [];
      for (let t3 of i3)
        Object.defineProperty(e3, t3, {
          value: n3,
          enumerable: true,
          configurable: true,
          writable: true
        });
      let a3 = e3[s2];
      r3 === void 0 ? a3 && delete a3[t2.canonical] : c2(e3)[t2.canonical] = r3;
      let l3 = e3[o2]?.[t2.canonical];
      if (l3)
        for (let e4 of l3)
          e4(n3);
      return n3;
    }, f2 = Symbol.for(`module-federation.tree-shaking-shared-cache`), y2 = (e3) => {
      let t2 = e3[f2];
      return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e3, f2, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, S2 = (e3, t2, n3, r3) => {
      var _a2;
      if (!Array.isArray(n3))
        return r3;
      let i3 = [
        ...new Set(n3)
      ].sort(), a3 = y2(e3), o3 = a3[_a2 = t2.canonical] || (a3[_a2] = []), s3 = o3.find((e4) => e4.providedExports.length === i3.length && e4.providedExports.every((e5, t3) => e5 === i3[t3]));
      return s3 ? s3.value = r3 : o3.push({
        providedExports: i3,
        value: r3
      }), r3;
    }, C2 = Symbol.for(`module-federation.tree-shaking-shared-selection-cache`), w2 = (e3) => {
      let t2 = e3[C2];
      return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e3, C2, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, T2 = (e3, t2, n3) => {
      let r3 = a2(e3, t2);
      return r3 === void 0 ? e3[C2]?.[t2.canonical]?.[n3] : r3;
    }, A2 = (e3, t2, n3, r3) => {
      var _a2;
      let i3 = w2(e3), a3 = i3[_a2 = t2.canonical] || (i3[_a2] = Object.create(null));
      return a3[n3] = r3, r3;
    }, M2 = globalThis.__FEDERATION__?.__INSTANCES__ || [], N2 = n2.find((e3) => e3?.from)?.from, P2 = M2.find((t2) => t2?.options?.name === N2 && t2?.shareScopeMap?.default === e2) || M2.find((t2) => t2?.options?.name !== _ && t2?.shareScopeMap?.default === e2), F = Object.create(null), I = (e3) => {
      let t2 = Object.create(null);
      for (let [n3, r3] of Object.entries(e3 || {}))
        t2[n3] = Object.assign(Object.create(null), r3);
      return t2;
    }, te = (e3, t2) => {
      for (let [n3, r3] of Object.entries(G.shareScopeMap?.[e3] || {}))
        for (let [e4, i3] of Object.entries(r3 || {})) {
          if (!i3 || i3.get === R[n3]?.get)
            continue;
          let r4 = t2[n3] || (t2[n3] = {});
          r4[e4] === void 0 && (r4[e4] = i3);
        }
    }, ne = (e3, t2) => {
      te(e3, t2);
      let n3 = !P2 && Object.values(t2 || {}).some((e4) => Object.values(e4 || {}).some(z)), r3 = n3 ? I(t2) : t2;
      return F[e3] = {
        host: t2,
        runtime: r3,
        isWebpackScope: n3
      }, r3;
    }, re = () => {
      let e3 = Object.values(F).filter(({isWebpackScope: e4}) => e4);
      if (e3.length !== 0)
        for (let {host: t2, runtime: n3} of e3)
          for (let [e4, r3] of Object.entries(t2 || {})) {
            let t3 = n3[e4] || (n3[e4] = Object.create(null));
            for (let [e5, n4] of Object.entries(r3 || {}))
              t3[e5] = n4;
          }
    }, L = Object.create(null);
    for (let [t2, n3] of Object.entries(e2)) {
      let e3 = L[t2] = Object.create(null);
      for (let [t3, r3] of Object.entries(n3))
        e3[t3] = Object.assign({}, r3);
    }
    let {usedShared: R, usedRemotes: ie} = await j();
    function z(e3) {
      if (typeof e3?.get != `function`)
        return false;
      let t2 = Function.prototype.toString.call(e3.get);
      return t2.includes(`__webpack_require__`) || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(t2);
    }
    let ae = Object.values(L).some((e3) => Object.values(e3 || {}).some(z)), oe = (e3) => {
      let t2 = e3.split(`/`);
      return e3.startsWith(`@`) ? t2.slice(0, 2).join(`/`) : t2[0];
    }, B = (t2, n3, r3, i3) => {
      if (typeof O != `function`)
        return;
      let a3 = oe(t2), o3 = !i3 || a3 === t2 ? [
        [
          t2,
          n3
        ]
      ] : [
        [
          t2,
          n3
        ],
        [
          a3,
          R[a3]
        ]
      ];
      for (let [n4, i4] of o3) {
        if (!i4)
          continue;
        let a4 = O(r3 ? n4 === t2 ? r3 : L[n4] : L[n4] ?? e2[n4], n4, i4, `version-first`);
        if (a4)
          return a4;
      }
    }, se = (e3, t2, n3) => {
      let r3 = B(e3, t2, n3, true);
      return r3 && z(r3) && !r3.lib && !r3.loaded ? r3 : void 0;
    };
    var V = m[g];
    if (V || (V = m[g] = {
      from: _
    }), n2.indexOf(V) >= 0)
      return;
    n2.push(V);
    let ce = (e3) => {
      let t2 = e3;
      for (let e4 = 0; e4 < 5; e4++) {
        let e5 = t2?.default;
        if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0)
          break;
        let n3 = Object.keys(t2).filter((e6) => e6 !== "default").map((e6) => t2[e6]);
        if (n3.length > 0 && n3.some((e6) => e6 !== void 0))
          break;
        t2 = e5;
      }
      return t2;
    }, le = [], ue = globalThis.window === void 0 ? await Promise.all([]) : [], H = `__mf_vite_runtime_share_load_id__`, de = 0, U = new Map(), W = new Map(), G = t({
      name: _,
      remotes: ie,
      shared: R,
      plugins: [
        fe(),
        pe(),
        ...le,
        ...ue
      ],
      shareStrategy: `version-first`
    });
    G.initShareScopeMap(`default`, ne(`default`, e2));
    function fe() {
      return {
        name: `vite-share-pin-lifecycle-plugin`,
        resolveShare(e3) {
          let t2 = e3.shareInfo?.[H], n3 = t2 === void 0 ? void 0 : W.get(t2);
          if (!n3)
            return e3;
          let r3 = e3.resolver;
          return e3.resolver = (...e4) => (n3.pinned.reapply(), r3(...e4)), n3.pinned.reveal(), e3;
        }
      };
    }
    function pe() {
      return {
        name: `vite-real-name-snapshot-plugin`,
        afterLoadSnapshot(e3) {
          let t2 = e3 && e3.remoteSnapshot, n3 = t2 && t2.globalName, r3 = t2 && t2.version;
          if (!n3 || !r3 || !t2.remoteEntry)
            return e3;
          let i3 = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo, a3 = n3 + `:` + r3;
          return i3 && !i3[a3] && (i3[a3] = t2), e3;
        }
      };
    }
    let me = G.sharedHandler.hooks.lifecycle.resolveShare, K = new WeakMap();
    me.on((e3) => {
      let t2 = e3.shareInfo?.[H], n3 = e3.resolver;
      return typeof n3 == `function` && (e3.resolver = (...e4) => {
        let r3 = n3(...e4), i3 = r3?.shared;
        return i3 && (typeof i3 == `object` || typeof i3 == `function`) && !K.has(i3) && K.set(i3, {
          from: i3.from
        }), t2 !== void 0 && i3 && U.set(t2, i3), r3;
      }), e3;
    });
    let he = (e3, t2, n3, r3) => {
      if (!e3 || e3[t2] !== n3)
        return;
      let i3 = Object.assign({}, r3, {
        version: r3.version ?? t2,
        scope: r3.scope ?? n3?.scope ?? [
          `default`
        ],
        strategy: `loaded-first`
      }), a3 = r3.from;
      e3[t2] = i3;
      let o3 = () => n3 === void 0 ? e3[t2] === void 0 : e3[t2] === n3;
      return {
        provider: i3,
        reveal() {
          return e3[t2] === i3 && (n3 === void 0 ? delete e3[t2] : e3[t2] = n3, true);
        },
        reapply() {
          return o3() ? (e3[t2] = i3, true) : false;
        },
        release(s3, c3 = true) {
          return r3.from = a3, e3[t2] === i3 ? c3 ? s3 ? (i3.from = a3, s3 && i3.lib && (i3.loaded = true), r3.strategy === void 0 ? delete i3.strategy : i3.strategy = r3.strategy, true) : (n3 === void 0 ? delete e3[t2] : e3[t2] = n3, false) : (n3 === void 0 ? delete e3[t2] : e3[t2] = n3, true) : !c3 && o3();
        }
      };
    }, ge = (e3) => Object.entries(e3 || {}).map(([e4, t2]) => ({
      provider: t2,
      version: e4,
      from: t2.from,
      registered: true
    })), _e = (e3, t2) => {
      if (t2 === void 0)
        return;
      let n3;
      for (let r3 of e3) {
        let e4 = r3.provider, i3 = e4.treeShaking || e4;
        if (r3.loadedFactory === t2 || e4.lib === t2 || i3.lib === t2) {
          if (n3)
            return;
          n3 = r3;
        }
      }
      return n3;
    }, ve = async (e3, t2, n3) => {
      let r3 = ++de;
      W.set(r3, {
        pinned: n3
      });
      try {
        let n4 = await G.loadShare(e3, {
          customShareInfo: {
            shareConfig: t2,
            [H]: r3
          }
        });
        return {
          factory: n4 === false ? void 0 : n4,
          selectedProvider: U.get(r3)
        };
      } finally {
        U.delete(r3), W.delete(r3);
      }
    }, ye = async (e3, t2, n3, r3, i3, a3, o3 = true) => {
      let s3 = a3.from, c3 = he(n3, r3, i3, a3);
      if (!c3)
        return;
      let l3;
      try {
        l3 = await ve(e3, t2, c3);
      } catch (e4) {
        throw c3.release(false), e4;
      }
      let u3 = l3?.factory;
      if (u3 === void 0) {
        c3.release(false);
        return;
      }
      let d2 = ge(n3), f3 = c3.provider.treeShaking || c3.provider, p2 = c3.provider.lib === u3 || f3.lib === u3;
      if (!o3 && p2) {
        let e4 = d2.findIndex((e5) => e5.provider === c3.provider);
        e4 !== -1 && d2.splice(e4, 1);
      }
      !o3 && !d2.some((e4) => e4.provider === a3) && d2.push({
        provider: a3,
        version: r3,
        from: s3,
        registered: false,
        loadedFactory: p2 ? u3 : void 0
      });
      let m2 = !o3 && l3.selectedProvider === c3.provider && p2 ? a3 : l3.selectedProvider;
      if (m2 && !d2.some((e4) => e4.provider === m2)) {
        let e4 = K.get(m2), t3 = typeof m2.version == `string` && m2.version ? m2.version : r3;
        d2.push({
          provider: m2,
          version: t3,
          from: e4 ? e4.from : m2.from,
          registered: n3?.[t3] === m2,
          loadedFactory: u3
        });
      }
      let h2 = d2.find((e4) => e4.provider === m2) ?? _e(d2, u3);
      if (!c3.release(true, h2?.provider === c3.provider) || !h2)
        return;
      let g2 = K.get(h2.provider);
      h2.from = h2.provider === a3 ? s3 : g2 ? g2.from : h2.provider.from, g2 && (h2.provider.from = g2.from);
      let _2 = typeof u3 == `function` ? u3() : u3, v2 = await Promise.resolve(_2);
      if (!(h2.registered && n3?.[h2.version] !== h2.provider))
        return {
          provider: h2.provider,
          selection: h2,
          resolved: v2
        };
    }, q = new Set(), J = new Map(), be = async (t2, n3, r3) => {
      let o3 = !!n3.shareConfig?.singleton;
      if (!o3 && n3.canLiveRebind !== false)
        try {
          let s3 = O(r3, t2, n3, `version-first`), c3 = E(r3, s3);
          if (!c3 || n3.shareConfig?.import === false && k(s3, n3) || s3?.shareConfig?.import === false)
            return;
          let {version: l3} = c3;
          if (!o3 && l3 !== n3.version || !s3.lib && !s3.loading && !(s3.loaded && typeof s3.get == `function`))
            return;
          let d2 = i2(t2, o3, n3.version, n3.scope);
          if (a2(p.share, d2) !== void 0)
            return;
          let f3 = e2[t2], m2 = f3?.[l3];
          if (c3.registered && !k(m2, s3))
            return;
          let h2, g2 = s3.lib;
          if (!g2 && z(s3) || (!g2 && s3.loading && (g2 = await s3.loading), !g2 && s3.loaded && typeof s3.get == `function` && (g2 = await s3.get()), !g2))
            return;
          let _2 = typeof g2 == `function` ? g2() : g2, v2 = await Promise.resolve(_2), y3 = c3.registered ? m2 : s3;
          h2 = {
            provider: y3,
            selection: {
              provider: y3,
              version: l3,
              from: s3.from,
              registered: c3.registered
            },
            resolved: v2
          };
          let b2 = h2?.provider, x2 = h2?.selection;
          if (!x2)
            return;
          let S3 = h2?.resolved;
          if (S3 === void 0 || a2(p.share, d2) !== void 0 || x2.registered && f3?.[x2.version] !== b2)
            return;
          u2(p.share, d2, ce(S3), x2.from), q.add(b2);
        } catch (e3) {
          console.error(`[Module Federation] Failed to bridge materialized shared module "` + t2 + `"`, e3);
        }
    }, xe = async (t2, n3, r3, o3, s3) => {
      try {
        let c3 = i2(t2, n3.shareConfig?.singleton, n3.version, n3.scope), d2 = a2(p.share, c3), f3 = l2(p.share, c3), m2 = O(r3, t2, n3, `version-first`), h2 = m2 || D(r3, t2, n3, `version-first`) || n3, g2 = E(r3, h2);
        if (!g2)
          return;
        let v2 = k(h2, n3), {version: y3} = g2;
        if (!n3.shareConfig?.singleton && y3 !== n3.version)
          return;
        let b2 = o3?.[y3], x2 = ee(M2, P2, e2, `default`, t2, g2, m2, b2, `version-first`);
        if (!x2 && !v2)
          return;
        let {provider: S3, scopeRootProvider: C3} = x2 || {
          provider: h2,
          scopeRootProvider: void 0
        };
        if (n3.canLiveRebind === false || n3.shareConfig?.import === false && k(S3, n3) || S3?.shareConfig?.import === false || d2 !== void 0 && f3 !== _)
          return;
        let w3 = e2[t2], T3 = w3?.[y3];
        if (g2.registered && !C3 && !k(T3, S3))
          return;
        let A3 = await ye(t2, n3.shareConfig, w3, y3, T3, S3, g2.registered && !v2), j2 = A3?.provider, N3 = A3?.selection;
        if (!N3 || k(j2, n3) || s3 && (s3.version !== N3.version || !k({
          from: N3.from
        }, s3.provider)) || q.has(j2))
          return;
        let F2 = A3?.resolved;
        if (F2 === void 0)
          return;
        let I2 = a2(p.share, c3), te2 = l2(p.share, c3);
        if (I2 !== void 0 && te2 !== _ || N3.registered && w3?.[N3.version] !== j2)
          return;
        s3 || J.set(t2, {
          version: N3.version,
          provider: {
            from: N3.from
          }
        }), q.add(j2);
        let ne2 = ce(F2);
        u2(p.share, c3, ne2, N3.from);
      } catch (e3) {
        console.error(`[Module Federation] Failed to bridge external shared module "` + t2 + `"`, e3);
      }
    };
    for (let e3 of v)
      await Promise.all(e3.map(async (e4) => {
        let t2 = R[e4];
        t2 && t2.materialize !== false && !t2.treeShaking && await be(e4, t2, L[e4]);
      }));
    for (let [e3, t2] of Object.entries(R)) {
      if (t2.treeShaking)
        continue;
      let n3 = i2(e3, t2.shareConfig?.singleton, t2.version, t2.scope);
      if (a2(p.share, n3) !== void 0)
        continue;
      let r3 = i2(e3, true, t2.version, t2.scope), o3 = a2(p.share, r3);
      o3 !== void 0 && u2(p.share, n3, o3, l2(p.share, r3));
    }
    let Se = [
      `react`,
      `moment`,
      `react/jsx-dev-runtime`,
      `react/jsx-runtime`,
      `react-dom`,
      `@emotion/react`,
      `@mui/private-theming`,
      `react-dom/client`,
      `@mui/system`,
      `@mui/material`
    ], Ce = [
      [
        `react`,
        `moment`
      ],
      [
        `react/jsx-dev-runtime`,
        `react/jsx-runtime`,
        `react-dom`,
        `@emotion/react`,
        `@mui/private-theming`
      ],
      [
        `react-dom/client`,
        `@mui/system`
      ],
      [
        `@mui/material`
      ]
    ], Y = new Map(Se.map((e3, t2) => [
      e3,
      t2
    ])), we = {
      2: [
        0
      ],
      3: [
        0
      ],
      4: [
        0
      ],
      5: [
        0
      ],
      6: [
        0
      ],
      7: [
        0,
        4
      ],
      8: [
        6,
        5,
        0
      ],
      9: [
        8,
        5,
        0,
        4
      ]
    }, X = Se.filter((e3) => R[e3] && (R[e3].materialize !== false || R[e3].shareConfig?.import === false));
    p.providerInit || (p.providerInit = new Map());
    let Te = (e3, t2) => {
      let n3 = p.providerInit.get(e3);
      if (n3)
        return n3;
      let r3 = Promise.resolve().then(t2);
      return p.providerInit.set(e3, r3), r3.catch(() => p.providerInit.delete(e3)), r3;
    };
    var Ee = async (e3) => {
      let t2 = new Set(e3);
      for (let e4 of Ce)
        await Promise.all(e4.filter((e5) => t2.has(e5)).map(async (e5) => {
          let t3 = R[e5], n3 = i2(e5, t3.shareConfig?.singleton, t3.version, t3.scope);
          if (t3.shareConfig?.import === false || t3.treeShaking || a2(p.share, n3) !== void 0)
            return;
          let r3 = i2(e5, true, t3.version, t3.scope), o3 = a2(p.share, r3);
          if (o3 !== void 0) {
            u2(p.share, n3, o3, l2(p.share, r3));
            return;
          }
          let s3 = typeof B == `function` ? B(e5, t3) : void 0;
          if (s3) {
            let e6 = s3.lib;
            if (!e6 && s3.loading && (e6 = await s3.loading), !e6 && s3.loaded && typeof s3.get == `function` && (e6 = await s3.get()), e6) {
              let t4 = typeof e6 == `function` ? e6() : e6, r4 = await Promise.resolve(t4);
              u2(p.share, n3, ((e7) => {
                let t5 = e7;
                for (let e8 = 0; e8 < 5; e8++) {
                  let e9 = t5?.default;
                  if (!e9 || typeof e9 != `object` || Object.keys(e9).length === 0)
                    break;
                  let n4 = Object.keys(t5).filter((e10) => e10 !== "default").map((e10) => t5[e10]);
                  if (n4.length > 0 && n4.some((e10) => e10 !== void 0))
                    break;
                  t5 = e9;
                }
                return t5;
              })(r4), s3.from);
            }
            return;
          }
          let c3 = n3.canonical, d2 = await Te(c3, async () => {
            let e6 = await t3.get(), n4 = typeof e6 == `function` ? e6() : e6;
            return Promise.resolve(n4);
          }), f3 = ((e6) => {
            let t4 = e6;
            for (let e7 = 0; e7 < 5; e7++) {
              let e8 = t4?.default;
              if (!e8 || typeof e8 != `object` || Object.keys(e8).length === 0)
                break;
              let n4 = Object.keys(t4).filter((e9) => e9 !== "default").map((e9) => t4[e9]);
              if (n4.length > 0 && n4.some((e9) => e9 !== void 0))
                break;
              t4 = e8;
            }
            return t4;
          })(d2), m2 = f3 === d2 ? __spreadValues({}, d2) : f3;
          m2.__esModule !== true && Object.defineProperty(m2, "__esModule", {
            value: true,
            enumerable: false
          }), u2(p.share, n3, m2, _);
        }));
    };
    let De = (e3) => {
      let t2 = R[e3];
      if (!t2.treeShaking && t2.shareConfig?.import !== false)
        return false;
      let n3 = i2(e3, t2.shareConfig?.singleton, t2.version, t2.scope);
      return t2.treeShaking ? T2(p.share, n3, _) === void 0 && a2(p.share, n3) === void 0 : a2(p.share, n3) === void 0;
    }, Oe = (e3) => {
      let t2 = R[e3], n3 = i2(e3, t2.shareConfig?.singleton, t2.version, t2.scope);
      return (t2.treeShaking ? T2(p.share, n3, _) ?? a2(p.share, n3) : a2(p.share, n3)) === void 0 ? t2.treeShaking || t2.shareConfig?.import === false ? true : typeof O == `function` && !!O(L[e3], e3, t2, `version-first`) : false;
    }, ke = (e3) => {
      let t2 = true;
      for (; t2; ) {
        t2 = false;
        for (let n3 of X) {
          let r3 = Y.get(n3);
          e3.has(r3) || (we[r3] || []).some((t3) => e3.has(t3)) && (e3.add(r3), t2 = true);
        }
      }
      return e3;
    }, Z = ke(new Set(X.filter(Oe).map((e3) => Y.get(e3)))), Ae = X.filter((e3) => !Z.has(Y.get(e3)));
    var je = X.filter((e3) => Z.has(Y.get(e3)));
    await Ee(Ae);
    try {
      await x(async () => {
        await Promise.all(await G.initializeSharing(`default`, {
          strategy: `version-first`,
          from: `build`,
          initScope: n2
        }));
      });
    } catch (e3) {
      console.error(`[Module Federation]`, e3);
    }
    re();
    let Me = async () => {
      for (let t2 of v)
        await Promise.all(t2.map(async (t3) => {
          let n3 = R[t3];
          n3 && n3.materialize !== false && !n3.treeShaking && await xe(t3, n3, e2[t3], L[t3], void 0);
        }));
    };
    await Me(), ae && (b = Me);
    try {
      let e3 = globalThis.__FEDERATION__?.__SHARE__, t2 = Object.create(null);
      if (e3)
        for (let [, n3] of Object.entries(e3))
          for (let e4 of h) {
            let r3 = n3?.[e4];
            if (r3)
              for (let [e5, n4] of Object.entries(r3)) {
                let r4 = R?.[e5], i3 = L[e5], a3 = J.get(e5);
                if (!r4 || !i3 || !a3 || r4.treeShaking)
                  continue;
                let o3 = t2[e5] || (t2[e5] = Object.create(null));
                for (let [e6, t3] of Object.entries(n4)) {
                  if (!t3.lib || a3.version !== e6 || !k(t3, a3.provider))
                    continue;
                  let n5 = i3[e6];
                  (t3 === n5 || n5?.from && t3.from === n5.from) && (t3 === r4 || r4.from && t3.from === r4.from || o3[e6] === void 0 && (o3[e6] = t3));
                }
              }
          }
      for (let e4 of v)
        await Promise.all(e4.map(async (e5) => {
          let n3 = t2[e5];
          n3 && await xe(e5, R[e5], n3, L[e5], J.get(e5));
        }));
    } catch (e3) {
      console.error(`[Module Federation] Failed to bridge external shared modules`, e3);
    }
    let Ne = async () => {
    }, Pe = async (t2, n3) => {
      let r3 = i2(t2, n3.shareConfig?.singleton, n3.version, n3.scope), o3 = n3.treeShaking ? T2(p.share, r3, _) : a2(p.share, r3);
      if (n3.shareConfig?.import !== false || o3 !== void 0 || se(t2, n3, L[t2]))
        return;
      let s3 = (e3) => {
        let t3 = e3;
        for (let e4 = 0; e4 < 5; e4++) {
          let e5 = t3?.default;
          if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0)
            break;
          let n4 = Object.keys(t3).filter((e6) => e6 !== "default").map((e6) => t3[e6]);
          if (n4.length > 0 && n4.some((e6) => e6 !== void 0))
            break;
          t3 = e5;
        }
        return t3;
      }, c3 = e2?.[t2], l3 = D(c3, t2, n3, `version-first`) || n3, d2 = E(c3, l3);
      if (!d2)
        return;
      let f3 = (e3) => e3 === n3 || e3?.shareConfig?.import === false;
      if (f3(l3))
        return;
      let {version: m2} = d2, h2 = c3?.[m2], g2 = await ye(t2, n3.shareConfig, c3, m2, h2, l3, d2.registered), v2 = g2?.selection, y3 = g2?.provider, b2 = g2?.resolved;
      if (!v2 || f3(y3) || b2 === void 0 || (n3.treeShaking ? T2(p.share, r3, _) : a2(p.share, r3)) !== void 0 || v2.registered && c3?.[v2.version] !== y3)
        return;
      let x2 = s3(b2);
      if (n3.treeShaking) {
        let e3 = n3.treeShaking.providedExports ?? n3.treeShaking.usedExports ?? [];
        S2(p.share, r3, e3, x2), A2(p.share, r3, _, x2);
      } else
        u2(p.share, r3, x2, v2.from);
    }, Q = [], $ = new Set();
    for (let e3 of je) {
      let t2 = R[e3], n3 = Y.get(e3);
      if (De(e3))
        try {
          t2.treeShaking ? await Ne(e3, t2) : t2.shareConfig?.import === false && await Pe(e3, t2);
        } catch (t3) {
          console.error(`[Module Federation] Failed to resolve runtime-only shared module "${e3}"`, t3);
        }
      De(e3) && $.add(n3);
    }
    return ke($), Q.push(...je.filter((e3) => !$.has(Y.get(e3)))), await Ee(Q), d(G), G;
  };
  P = async function(e2) {
    let t2 = await M();
    if (!(e2 in t2))
      throw Error(`[Module Federation] Module ${e2} does not exist in container.`);
    return b && await b(), p.pendingShareLoads && await Promise.all(p.pendingShareLoads), t2[e2]().then((e3) => () => e3);
  };
  if (typeof document !== "undefined" && document.head) {
    try {
      for (const __mfWarmupPath of [
        "assets/_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-CoTGQqmW.js",
        "assets/vite-preload-helper-uBIymjUX.js",
        "assets/dist-BK97MX24.js",
        "assets/utils-jR9fY54i.js"
      ]) {
        const __mfWarmupLink = document.createElement("link");
        __mfWarmupLink.rel = "modulepreload";
        __mfWarmupLink.crossOrigin = "";
        __mfWarmupLink.href = new URL(__mfWarmupPath, import.meta.url).href;
        document.head.appendChild(__mfWarmupLink);
      }
    } catch (__mfWarmupError) {
    }
  }
})();
export {
  __tla,
  P as get,
  N as init
};
