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
import {n as e, t} from "./vite-preload-helper-r6RKwCfh.js";
import {r as n, t as r, __tla as __tla_0} from "./dist-DMnNzsbI.js";
let O, k;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a, _b;
  __spreadValues({}, n.global);
  var i = n.share;
  n.utils, e(), typeof __VUE_HMR_RUNTIME__ > `u` && (globalThis.__VUE_HMR_RUNTIME__ = {
    createRecord() {
    },
    rerender() {
    },
    reload() {
    }
  });
  var a = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__62832661403724__mf_v__runtimeInit__mf_v__.js__`, o = globalThis[a];
  if (!o) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    o = globalThis[a] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var s = o.initResolve, c = `__mf_module_cache__`;
  globalThis[c] || (globalThis[c] = {
    share: {},
    remote: {}
  }), (_a = globalThis[c]).share || (_a.share = {}), (_b = globalThis[c]).remote || (_b.remote = {});
  var l = globalThis[c];
  for (let e2 of Object.keys(l.share))
    if (e2.startsWith(`default:`)) {
      let t2 = e2.slice(8);
      l.share[t2] === void 0 && (l.share[t2] = l.share[e2]);
    } else if (!e2.includes(`:`)) {
      let t2 = `default:` + e2;
      l.share[t2] === void 0 && (l.share[t2] = l.share[e2]);
    }
  var u = {}, d = Array.isArray(`default`) ? `default` : [
    `default`
  ], f = `default`, p = `fullcalendar`, m = [
    [
      `react`,
      `moment`
    ],
    [
      `react/jsx-dev-runtime`,
      `react/jsx-runtime`,
      `react-dom`,
      `@mui/private-theming`
    ],
    [
      `react-dom/client`,
      `@mui/system`
    ],
    [
      `@mui/material`
    ]
  ], h, g, _;
  async function v(e2) {
    for (let t2 = 0; ; t2++)
      try {
        return await e2();
      } catch (e3) {
        throw e3;
      }
  }
  var y = Symbol(`mf.originalSharedProvider`), b = {
    emit: (e2) => e2
  }, x = (e2, t2) => {
    if (t2 !== `version-first`)
      return e2;
    let n2 = {};
    for (let [t3, r2] of Object.entries(e2))
      n2[t3] = Object.assign({}, r2, {
        [y]: r2
      });
    return n2;
  }, S = (e2, t2) => {
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
  }, C = (e2, t2, n2, r2) => {
    if (!e2 || !n2)
      return;
    let a2 = Object.fromEntries(Object.entries(e2).filter(([, e3]) => e3?.shareConfig?.import !== false));
    if (Object.keys(a2).length === 0)
      return;
    let o2 = Array.isArray(n2.scope) ? n2.scope : [
      n2.scope || `default`
    ], s2 = x(a2, r2), c2 = {};
    for (let e3 of o2)
      c2[e3 || `default`] = {
        [t2]: s2
      };
    let l2 = i.getRegisteredShare(c2, t2, __spreadProps(__spreadValues({}, n2), {
      scope: o2,
      strategy: r2
    }), b)?.shared;
    return l2?.[y] || l2;
  }, w = (e2, t2, n2, r2) => {
    let i2 = (e3) => T(e3, n2), a2 = Object.fromEntries(Object.entries(e2 || {}).filter(([, e3]) => !i2(e3) && e3?.shareConfig?.import !== false));
    n2?.version && n2.shareConfig?.import !== false && (a2[n2.version] || (a2[n2.version] = n2));
    let o2 = C(a2, t2, n2, r2);
    return i2(o2) ? void 0 : o2;
  }, T = (e2, t2) => e2 === t2 || !!(t2?.from && e2?.from === t2.from), E = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    if (c2 !== `version-first` || !s2)
      return;
    let l2 = t2?.options?.shared?.[i2], u2 = Array.isArray(l2) ? l2.find((e3) => e3?.version === a2) : void 0, d2 = (s2?.from === t2?.options?.name ? s2 : void 0) || (T(u2, s2) ? u2 : t2 ? void 0 : s2);
    if (d2)
      return e2.some((e3) => e3 !== t2 && e3?.options?.name === o2?.from && e3?.shareScopeMap?.[r2] === n2) ? d2 : void 0;
  }, ee = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    let l2 = a2.registered ? E(e2, t2, n2, r2, i2, a2.version, a2.provider, s2, c2) : void 0, u2 = l2 || o2;
    if (u2 && (!a2.registered || T(u2, s2)))
      return {
        provider: u2,
        scopeRootProvider: l2
      };
  };
  async function te() {
    return h || (h = v(() => t(() => import("./_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-Qt9C-cmN.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [], import.meta.url)).catch((e2) => {
      throw h = void 0, e2;
    })), h;
  }
  async function D() {
    return g || (g = v(() => t(() => import("./virtualExposes-Dkn_12R-.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [], import.meta.url)).then((e2) => e2.default ?? e2).catch((e2) => {
      throw g = void 0, e2;
    })), g;
  }
  O = async function(e2 = {}, t2 = []) {
    let n2 = (e3, t3, n3, r2) => {
      let i3 = (Array.isArray(r2) ? r2[0] : r2) || `default`, a3 = t3 || !n3 ? e3 : e3 + `@` + n3, o3 = {
        canonical: i3 + `:` + a3
      };
      return i3 === "default" && (o3.aliases = [
        a3
      ]), o3;
    }, i2 = (e3, t3) => {
      let n3 = e3[t3.canonical];
      if (n3 !== void 0)
        return n3;
      let r2 = t3.aliases || [];
      for (let n4 of r2) {
        if (!Object.prototype.hasOwnProperty.call(e3, n4))
          continue;
        let r3 = e3[n4];
        if (r3 !== void 0)
          return e3[t3.canonical] = r3, r3;
      }
    }, a2 = Symbol.for(`module-federation.shared-cache-listeners`), o2 = Symbol.for(`module-federation.shared-cache-owners`), c2 = (e3) => {
      let t3 = e3[o2];
      return t3 === void 0 && (t3 = Object.create(null), Object.defineProperty(e3, o2, {
        value: t3,
        enumerable: false,
        configurable: false,
        writable: false
      })), t3;
    }, h2 = (e3, t3) => e3[o2]?.[t3.canonical], g2 = (e3, t3, n3, r2) => {
      e3[t3.canonical] = n3;
      let i3 = t3.aliases || [];
      for (let t4 of i3)
        Object.defineProperty(e3, t4, {
          value: n3,
          enumerable: true,
          configurable: true,
          writable: true
        });
      let s2 = e3[o2];
      r2 === void 0 ? s2 && delete s2[t3.canonical] : c2(e3)[t3.canonical] = r2;
      let l2 = e3[a2]?.[t3.canonical];
      if (l2)
        for (let e4 of l2)
          e4(n3);
      return n3;
    }, y2 = Symbol.for(`module-federation.tree-shaking-shared-cache`), b2 = (e3) => {
      let t3 = e3[y2];
      return t3 === void 0 && (t3 = Object.create(null), Object.defineProperty(e3, y2, {
        value: t3,
        enumerable: false,
        configurable: false,
        writable: false
      })), t3;
    }, x2 = (e3, t3, n3, r2) => {
      var _a2;
      if (!Array.isArray(n3))
        return r2;
      let i3 = [
        ...new Set(n3)
      ].sort(), a3 = b2(e3), o3 = a3[_a2 = t3.canonical] || (a3[_a2] = []), s2 = o3.find((e4) => e4.providedExports.length === i3.length && e4.providedExports.every((e5, t4) => e5 === i3[t4]));
      return s2 ? s2.value = r2 : o3.push({
        providedExports: i3,
        value: r2
      }), r2;
    }, E2 = Symbol.for(`module-federation.tree-shaking-shared-selection-cache`), D2 = (e3) => {
      let t3 = e3[E2];
      return t3 === void 0 && (t3 = Object.create(null), Object.defineProperty(e3, E2, {
        value: t3,
        enumerable: false,
        configurable: false,
        writable: false
      })), t3;
    }, O2 = (e3, t3, n3) => {
      let r2 = i2(e3, t3);
      return r2 === void 0 ? e3[E2]?.[t3.canonical]?.[n3] : r2;
    }, k2 = (e3, t3, n3, r2) => {
      var _a2;
      let i3 = D2(e3), a3 = i3[_a2 = t3.canonical] || (i3[_a2] = Object.create(null));
      return a3[n3] = r2, r2;
    }, A = globalThis.__FEDERATION__?.__INSTANCES__ || [], j = t2.find((e3) => e3?.from)?.from, M = A.find((t3) => t3?.options?.name === j && t3?.shareScopeMap?.default === e2) || A.find((t3) => t3?.options?.name !== p && t3?.shareScopeMap?.default === e2), N = Object.create(null), P = (e3) => {
      let t3 = Object.create(null);
      for (let [n3, r2] of Object.entries(e3 || {}))
        t3[n3] = Object.assign(Object.create(null), r2);
      return t3;
    }, ne = (e3, t3) => {
      for (let [n3, r2] of Object.entries(G.shareScopeMap?.[e3] || {}))
        for (let [e4, i3] of Object.entries(r2 || {})) {
          if (!i3 || i3.get === L[n3]?.get)
            continue;
          let r3 = t3[n3] || (t3[n3] = {});
          r3[e4] === void 0 && (r3[e4] = i3);
        }
    }, re = (e3, t3) => {
      ne(e3, t3);
      let n3 = !M && Object.values(t3 || {}).some((e4) => Object.values(e4 || {}).some(R)), r2 = n3 ? P(t3) : t3;
      return N[e3] = {
        host: t3,
        runtime: r2,
        isWebpackScope: n3
      }, r2;
    }, F = () => {
      let e3 = Object.values(N).filter(({isWebpackScope: e4}) => e4);
      if (e3.length !== 0)
        for (let {host: t3, runtime: n3} of e3)
          for (let [e4, r2] of Object.entries(t3 || {})) {
            let t4 = n3[e4] || (n3[e4] = Object.create(null));
            for (let [e5, n4] of Object.entries(r2 || {}))
              t4[e5] = n4;
          }
    }, I = Object.create(null);
    for (let [t3, n3] of Object.entries(e2)) {
      let e3 = I[t3] = Object.create(null);
      for (let [t4, r2] of Object.entries(n3))
        e3[t4] = Object.assign({}, r2);
    }
    let {usedShared: L, usedRemotes: ie} = await te();
    function R(e3) {
      if (typeof e3?.get != `function`)
        return false;
      let t3 = Function.prototype.toString.call(e3.get);
      return t3.includes(`__webpack_require__`) || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(t3);
    }
    let ae = Object.values(I).some((e3) => Object.values(e3 || {}).some(R)), oe = (e3) => {
      let t3 = e3.split(`/`);
      return e3.startsWith(`@`) ? t3.slice(0, 2).join(`/`) : t3[0];
    }, z = (t3, n3, r2) => {
      if (typeof w != `function`)
        return;
      let i3 = oe(t3), a3 = i3 === t3 ? [
        [
          t3,
          n3
        ]
      ] : [
        [
          t3,
          n3
        ],
        [
          i3,
          L[i3]
        ]
      ];
      for (let [n4, i4] of a3) {
        if (!i4)
          continue;
        let a4 = w(r2 ? n4 === t3 ? r2 : I[n4] : e2[n4], n4, i4, `version-first`);
        if (a4 && R(a4) && !a4.lib && !a4.loaded)
          return a4;
      }
    };
    var B = u[f];
    if (B || (B = u[f] = {
      from: p
    }), t2.indexOf(B) >= 0)
      return;
    t2.push(B);
    let V = (e3) => {
      let t3 = e3;
      for (let e4 = 0; e4 < 5; e4++) {
        let e5 = t3?.default;
        if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0)
          break;
        let n3 = Object.keys(t3).filter((e6) => e6 !== "default").map((e6) => t3[e6]);
        if (n3.length > 0 && n3.some((e6) => e6 !== void 0))
          break;
        t3 = e5;
      }
      return t3;
    }, se = [], ce = globalThis.window === void 0 ? await Promise.all([]) : [], H = `__mf_vite_runtime_share_load_id__`, le = 0, U = new Map(), W = new Map(), G = r({
      name: p,
      remotes: ie,
      shared: L,
      plugins: [
        ue(),
        de(),
        ...se,
        ...ce
      ],
      shareStrategy: `version-first`
    });
    G.initShareScopeMap(`default`, re(`default`, e2));
    function ue() {
      return {
        name: `vite-share-pin-lifecycle-plugin`,
        resolveShare(e3) {
          let t3 = e3.shareInfo?.[H], n3 = t3 === void 0 ? void 0 : W.get(t3);
          if (!n3)
            return e3;
          let r2 = e3.resolver;
          return e3.resolver = (...e4) => (n3.pinned.reapply(), r2(...e4)), n3.pinned.reveal(), e3;
        }
      };
    }
    function de() {
      return {
        name: `vite-real-name-snapshot-plugin`,
        afterLoadSnapshot(e3) {
          let t3 = e3 && e3.remoteSnapshot, n3 = t3 && t3.globalName, r2 = t3 && t3.version;
          if (!n3 || !r2 || !t3.remoteEntry)
            return e3;
          let i3 = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo, a3 = n3 + `:` + r2;
          return i3 && !i3[a3] && (i3[a3] = t3), e3;
        }
      };
    }
    let fe = G.sharedHandler.hooks.lifecycle.resolveShare, K = new WeakMap();
    fe.on((e3) => {
      let t3 = e3.shareInfo?.[H], n3 = e3.resolver;
      return typeof n3 == `function` && (e3.resolver = (...e4) => {
        let r2 = n3(...e4), i3 = r2?.shared;
        return i3 && (typeof i3 == `object` || typeof i3 == `function`) && !K.has(i3) && K.set(i3, {
          from: i3.from
        }), t3 !== void 0 && i3 && U.set(t3, i3), r2;
      }), e3;
    });
    let pe = (e3, t3, n3, r2) => {
      if (!e3 || e3[t3] !== n3)
        return;
      let i3 = Object.assign({}, r2, {
        version: r2.version ?? t3,
        scope: r2.scope ?? n3?.scope ?? [
          `default`
        ],
        strategy: `loaded-first`
      }), a3 = r2.from;
      e3[t3] = i3;
      let o3 = () => n3 === void 0 ? e3[t3] === void 0 : e3[t3] === n3;
      return {
        provider: i3,
        reveal() {
          return e3[t3] === i3 && (n3 === void 0 ? delete e3[t3] : e3[t3] = n3, true);
        },
        reapply() {
          return o3() ? (e3[t3] = i3, true) : false;
        },
        release(s2, c3 = true) {
          return r2.from = a3, e3[t3] === i3 ? c3 ? s2 ? (i3.from = a3, s2 && i3.lib && (i3.loaded = true), r2.strategy === void 0 ? delete i3.strategy : i3.strategy = r2.strategy, true) : (n3 === void 0 ? delete e3[t3] : e3[t3] = n3, false) : (n3 === void 0 ? delete e3[t3] : e3[t3] = n3, true) : !c3 && o3();
        }
      };
    }, me = (e3) => Object.entries(e3 || {}).map(([e4, t3]) => ({
      provider: t3,
      version: e4,
      from: t3.from,
      registered: true
    })), he = (e3, t3) => {
      if (t3 === void 0)
        return;
      let n3;
      for (let r2 of e3) {
        let e4 = r2.provider, i3 = e4.treeShaking || e4;
        if (r2.loadedFactory === t3 || e4.lib === t3 || i3.lib === t3) {
          if (n3)
            return;
          n3 = r2;
        }
      }
      return n3;
    }, ge = async (e3, t3, n3) => {
      let r2 = ++le;
      W.set(r2, {
        pinned: n3
      });
      try {
        let n4 = await G.loadShare(e3, {
          customShareInfo: {
            shareConfig: t3,
            [H]: r2
          }
        });
        return {
          factory: n4 === false ? void 0 : n4,
          selectedProvider: U.get(r2)
        };
      } finally {
        U.delete(r2), W.delete(r2);
      }
    }, q = async (e3, t3, n3, r2, i3, a3, o3 = true) => {
      let s2 = a3.from, c3 = pe(n3, r2, i3, a3);
      if (!c3)
        return;
      let l2;
      try {
        l2 = await ge(e3, t3, c3);
      } catch (e4) {
        throw c3.release(false), e4;
      }
      let u2 = l2?.factory;
      if (u2 === void 0) {
        c3.release(false);
        return;
      }
      let d2 = me(n3), f2 = c3.provider.treeShaking || c3.provider, p2 = c3.provider.lib === u2 || f2.lib === u2;
      if (!o3 && p2) {
        let e4 = d2.findIndex((e5) => e5.provider === c3.provider);
        e4 !== -1 && d2.splice(e4, 1);
      }
      !o3 && !d2.some((e4) => e4.provider === a3) && d2.push({
        provider: a3,
        version: r2,
        from: s2,
        registered: false,
        loadedFactory: p2 ? u2 : void 0
      });
      let m2 = !o3 && l2.selectedProvider === c3.provider && p2 ? a3 : l2.selectedProvider;
      if (m2 && !d2.some((e4) => e4.provider === m2)) {
        let e4 = K.get(m2), t4 = typeof m2.version == `string` && m2.version ? m2.version : r2;
        d2.push({
          provider: m2,
          version: t4,
          from: e4 ? e4.from : m2.from,
          registered: n3?.[t4] === m2,
          loadedFactory: u2
        });
      }
      let h3 = d2.find((e4) => e4.provider === m2) ?? he(d2, u2);
      if (!c3.release(true, h3?.provider === c3.provider) || !h3)
        return;
      let g3 = K.get(h3.provider);
      h3.from = h3.provider === a3 ? s2 : g3 ? g3.from : h3.provider.from, g3 && (h3.provider.from = g3.from);
      let _2 = typeof u2 == `function` ? u2() : u2, v2 = await Promise.resolve(_2);
      if (!(h3.registered && n3?.[h3.version] !== h3.provider))
        return {
          provider: h3.provider,
          selection: h3,
          resolved: v2
        };
    }, J = new Set(), Y = new Map(), _e = async (t3, r2, a3) => {
      let o3 = !!r2.shareConfig?.singleton;
      if (!o3 && r2.canLiveRebind !== false)
        try {
          let s2 = w(a3, t3, r2, `version-first`), c3 = S(a3, s2);
          if (!c3 || r2.shareConfig?.import === false && T(s2, r2) || s2?.shareConfig?.import === false)
            return;
          let {version: u2} = c3;
          if (!o3 && u2 !== r2.version || !s2.lib && !s2.loading && !(s2.loaded && typeof s2.get == `function`))
            return;
          let d2 = n2(t3, o3, r2.version, r2.scope);
          if (i2(l.share, d2) !== void 0)
            return;
          let f2 = e2[t3], p2 = f2?.[u2];
          if (c3.registered && !T(p2, s2))
            return;
          let m2, h3 = s2.lib;
          if (!h3 && R(s2) || (!h3 && s2.loading && (h3 = await s2.loading), !h3 && s2.loaded && typeof s2.get == `function` && (h3 = await s2.get()), !h3))
            return;
          let _2 = typeof h3 == `function` ? h3() : h3, v2 = await Promise.resolve(_2), y3 = c3.registered ? p2 : s2;
          m2 = {
            provider: y3,
            selection: {
              provider: y3,
              version: u2,
              from: s2.from,
              registered: c3.registered
            },
            resolved: v2
          };
          let b3 = m2?.provider, x3 = m2?.selection;
          if (!x3)
            return;
          let C2 = m2?.resolved;
          if (C2 === void 0 || i2(l.share, d2) !== void 0 || x3.registered && f2?.[x3.version] !== b3)
            return;
          g2(l.share, d2, V(C2), x3.from), J.add(b3);
        } catch (e3) {
          console.error(`[Module Federation] Failed to bridge materialized shared module "` + t3 + `"`, e3);
        }
    }, ve = async (t3, r2, a3, o3, s2) => {
      try {
        let c3 = n2(t3, r2.shareConfig?.singleton, r2.version, r2.scope), u2 = i2(l.share, c3), d2 = h2(l.share, c3), f2 = w(a3, t3, r2, `version-first`), m2 = f2 || C(a3, t3, r2, `version-first`) || r2, _2 = S(a3, m2);
        if (!_2)
          return;
        let v2 = T(m2, r2), {version: y3} = _2;
        if (!r2.shareConfig?.singleton && y3 !== r2.version)
          return;
        let b3 = o3?.[y3], x3 = ee(A, M, e2, `default`, t3, _2, f2, b3, `version-first`);
        if (!x3 && !v2)
          return;
        let {provider: E3, scopeRootProvider: te2} = x3 || {
          provider: m2,
          scopeRootProvider: void 0
        };
        if (r2.canLiveRebind === false || r2.shareConfig?.import === false && T(E3, r2) || E3?.shareConfig?.import === false || u2 !== void 0 && d2 !== p)
          return;
        let D3 = e2[t3], O3 = D3?.[y3];
        if (_2.registered && !te2 && !T(O3, E3))
          return;
        let k3 = await q(t3, r2.shareConfig, D3, y3, O3, E3, _2.registered && !v2), j2 = k3?.provider, N2 = k3?.selection;
        if (!N2 || T(j2, r2) || s2 && (s2.version !== N2.version || !T({
          from: N2.from
        }, s2.provider)) || J.has(j2))
          return;
        let P2 = k3?.resolved;
        if (P2 === void 0)
          return;
        let ne2 = i2(l.share, c3), re2 = h2(l.share, c3);
        if (ne2 !== void 0 && re2 !== p || N2.registered && D3?.[N2.version] !== j2)
          return;
        s2 || Y.set(t3, {
          version: N2.version,
          provider: {
            from: N2.from
          }
        }), J.add(j2);
        let F2 = V(P2);
        g2(l.share, c3, F2, N2.from);
      } catch (e3) {
        console.error(`[Module Federation] Failed to bridge external shared module "` + t3 + `"`, e3);
      }
    };
    for (let e3 of m)
      await Promise.all(e3.map(async (e4) => {
        let t3 = L[e4];
        t3 && t3.materialize !== false && !t3.treeShaking && await _e(e4, t3, I[e4]);
      }));
    for (let [e3, t3] of Object.entries(L)) {
      if (t3.treeShaking)
        continue;
      let r2 = n2(e3, t3.shareConfig?.singleton, t3.version, t3.scope);
      if (i2(l.share, r2) !== void 0)
        continue;
      let a3 = n2(e3, true, t3.version, t3.scope), o3 = i2(l.share, a3);
      o3 !== void 0 && g2(l.share, r2, o3, h2(l.share, a3));
    }
    let ye = [
      `react`,
      `moment`,
      `react/jsx-dev-runtime`,
      `react/jsx-runtime`,
      `react-dom`,
      `@mui/private-theming`,
      `react-dom/client`,
      `@mui/system`,
      `@mui/material`
    ], be = [
      [
        `react`,
        `moment`
      ],
      [
        `react/jsx-dev-runtime`,
        `react/jsx-runtime`,
        `react-dom`,
        `@mui/private-theming`
      ],
      [
        `react-dom/client`,
        `@mui/system`
      ],
      [
        `@mui/material`
      ]
    ], X = new Map(ye.map((e3, t3) => [
      e3,
      t3
    ])), xe = {
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
        0,
        4
      ],
      7: [
        5,
        0
      ],
      8: [
        7,
        0,
        4
      ]
    }, Z = ye.filter((e3) => L[e3] && (L[e3].materialize !== false || L[e3].shareConfig?.import === false));
    l.providerInit || (l.providerInit = new Map());
    let Se = (e3, t3) => {
      let n3 = l.providerInit.get(e3);
      if (n3)
        return n3;
      let r2 = Promise.resolve().then(t3);
      return l.providerInit.set(e3, r2), r2.catch(() => l.providerInit.delete(e3)), r2;
    };
    var Ce = async (e3) => {
      let t3 = new Set(e3);
      for (let e4 of be)
        await Promise.all(e4.filter((e5) => t3.has(e5)).map(async (e5) => {
          let t4 = L[e5], r2 = n2(e5, t4.shareConfig?.singleton, t4.version, t4.scope);
          if (t4.shareConfig?.import === false || t4.treeShaking || i2(l.share, r2) !== void 0)
            return;
          let a3 = n2(e5, true, t4.version, t4.scope), o3 = i2(l.share, a3);
          if (o3 !== void 0) {
            g2(l.share, r2, o3, h2(l.share, a3));
            return;
          }
          let s2 = typeof z == `function` ? z(e5, t4) : void 0;
          if (s2 && !s2.lib && !s2.loaded)
            return;
          let c3 = r2.canonical, u2 = await Se(c3, async () => {
            let e6 = await t4.get(), n3 = typeof e6 == `function` ? e6() : e6;
            return Promise.resolve(n3);
          }), d2 = ((e6) => {
            let t5 = e6;
            for (let e7 = 0; e7 < 5; e7++) {
              let e8 = t5?.default;
              if (!e8 || typeof e8 != `object` || Object.keys(e8).length === 0)
                break;
              let n3 = Object.keys(t5).filter((e9) => e9 !== "default").map((e9) => t5[e9]);
              if (n3.length > 0 && n3.some((e9) => e9 !== void 0))
                break;
              t5 = e8;
            }
            return t5;
          })(u2), f2 = d2 === u2 ? __spreadValues({}, u2) : d2;
          f2.__esModule !== true && Object.defineProperty(f2, "__esModule", {
            value: true,
            enumerable: false
          }), g2(l.share, r2, f2, p);
        }));
    };
    let we = (e3) => {
      let t3 = L[e3];
      if (!t3.treeShaking && t3.shareConfig?.import !== false)
        return false;
      let r2 = n2(e3, t3.shareConfig?.singleton, t3.version, t3.scope);
      return t3.treeShaking ? O2(l.share, r2, p) === void 0 && i2(l.share, r2) === void 0 : i2(l.share, r2) === void 0;
    }, Te = (e3) => {
      let t3 = L[e3], r2 = n2(e3, t3.shareConfig?.singleton, t3.version, t3.scope);
      return (t3.treeShaking ? O2(l.share, r2, p) ?? i2(l.share, r2) : i2(l.share, r2)) === void 0 ? t3.treeShaking || t3.shareConfig?.import === false ? true : typeof w == `function` && !!w(I[e3], e3, t3, `version-first`) : false;
    }, Ee = (e3) => {
      let t3 = true;
      for (; t3; ) {
        t3 = false;
        for (let n3 of Z) {
          let r2 = X.get(n3);
          e3.has(r2) || (xe[r2] || []).some((t4) => e3.has(t4)) && (e3.add(r2), t3 = true);
        }
      }
      return e3;
    }, De = Ee(new Set(Z.filter(Te).map((e3) => X.get(e3)))), Oe = Z.filter((e3) => !De.has(X.get(e3)));
    var ke = Z.filter((e3) => De.has(X.get(e3)));
    await Ce(Oe);
    try {
      await v(async () => {
        await Promise.all(await G.initializeSharing(`default`, {
          strategy: `version-first`,
          from: `build`,
          initScope: t2
        }));
      });
    } catch (e3) {
      console.error(`[Module Federation]`, e3);
    }
    F();
    let Ae = async () => {
      for (let t3 of m)
        await Promise.all(t3.map(async (t4) => {
          let n3 = L[t4];
          n3 && n3.materialize !== false && !n3.treeShaking && await ve(t4, n3, e2[t4], I[t4], void 0);
        }));
    };
    await Ae(), ae && (_ = Ae);
    try {
      let e3 = globalThis.__FEDERATION__?.__SHARE__, t3 = Object.create(null);
      if (e3)
        for (let [, n3] of Object.entries(e3))
          for (let e4 of d) {
            let r2 = n3?.[e4];
            if (r2)
              for (let [e5, n4] of Object.entries(r2)) {
                let r3 = L?.[e5], i3 = I[e5], a3 = Y.get(e5);
                if (!r3 || !i3 || !a3 || r3.treeShaking)
                  continue;
                let o3 = t3[e5] || (t3[e5] = Object.create(null));
                for (let [e6, t4] of Object.entries(n4)) {
                  if (!t4.lib || a3.version !== e6 || !T(t4, a3.provider))
                    continue;
                  let n5 = i3[e6];
                  (t4 === n5 || n5?.from && t4.from === n5.from) && (t4 === r3 || r3.from && t4.from === r3.from || o3[e6] === void 0 && (o3[e6] = t4));
                }
              }
          }
      for (let e4 of m)
        await Promise.all(e4.map(async (e5) => {
          let n3 = t3[e5];
          n3 && await ve(e5, L[e5], n3, I[e5], Y.get(e5));
        }));
    } catch (e3) {
      console.error(`[Module Federation] Failed to bridge external shared modules`, e3);
    }
    let je = async () => {
    }, Me = async (t3, r2) => {
      let a3 = n2(t3, r2.shareConfig?.singleton, r2.version, r2.scope), o3 = r2.treeShaking ? O2(l.share, a3, p) : i2(l.share, a3);
      if (r2.shareConfig?.import !== false || o3 !== void 0 || z(t3, r2, I[t3]))
        return;
      let s2 = (e3) => {
        let t4 = e3;
        for (let e4 = 0; e4 < 5; e4++) {
          let e5 = t4?.default;
          if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0)
            break;
          let n3 = Object.keys(t4).filter((e6) => e6 !== "default").map((e6) => t4[e6]);
          if (n3.length > 0 && n3.some((e6) => e6 !== void 0))
            break;
          t4 = e5;
        }
        return t4;
      }, c3 = e2?.[t3], u2 = C(c3, t3, r2, `version-first`) || r2, d2 = S(c3, u2);
      if (!d2)
        return;
      let f2 = (e3) => e3 === r2 || e3?.shareConfig?.import === false;
      if (f2(u2))
        return;
      let {version: m2} = d2, h3 = c3?.[m2], _2 = await q(t3, r2.shareConfig, c3, m2, h3, u2, d2.registered), v2 = _2?.selection, y3 = _2?.provider, b3 = _2?.resolved;
      if (!v2 || f2(y3) || b3 === void 0 || (r2.treeShaking ? O2(l.share, a3, p) : i2(l.share, a3)) !== void 0 || v2.registered && c3?.[v2.version] !== y3)
        return;
      let w2 = s2(b3);
      if (r2.treeShaking) {
        let e3 = r2.treeShaking.providedExports ?? r2.treeShaking.usedExports ?? [];
        x2(l.share, a3, e3, w2), k2(l.share, a3, p, w2);
      } else
        g2(l.share, a3, w2, v2.from);
    }, Q = [], $ = new Set();
    for (let e3 of ke) {
      let t3 = L[e3], n3 = X.get(e3);
      if (we(e3))
        try {
          t3.treeShaking ? await je(e3, t3) : t3.shareConfig?.import === false && await Me(e3, t3);
        } catch (t4) {
          console.error(`[Module Federation] Failed to resolve runtime-only shared module "${e3}"`, t4);
        }
      we(e3) && $.add(n3);
    }
    return Ee($), Q.push(...ke.filter((e3) => !$.has(X.get(e3)))), await Ce(Q), s(G), G;
  };
  k = async function(e2) {
    let t2 = await D();
    if (!(e2 in t2))
      throw Error(`[Module Federation] Module ${e2} does not exist in container.`);
    return _ && await _(), l.pendingShareLoads && await Promise.all(l.pendingShareLoads), t2[e2]().then((e3) => () => e3);
  };
});
export {
  __tla,
  O as n,
  k as t
};
