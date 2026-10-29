const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./assets/FullCalendar-DRKqq0fW.css"])))=>i.map(i=>d[i]);
import { t as e } from "./assets/vite-preload-helper-CRzLMJPS.js";
import { t } from "./assets/dist-BI-Ygd_Z.js";
import { t as n } from "./assets/helpers-CsBAxMau.js";
let I, F;
let __tla = (async () => {
  var _a, _b;
  var r = {}, i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
  function o(e2, t2) {
    let n2 = a.get(e2);
    return n2 || (n2 = Promise.resolve().then(t2).catch((t3) => {
      throw a.delete(e2), t3;
    }), a.set(e2, n2)), n2;
  }
  async function s(e2) {
    if (typeof document > `u`) return;
    let t2 = r[e2] || [];
    await Promise.all(t2.map((e3) => {
      let t3 = new URL(e3, import.meta.url).href;
      return i.has(t3) || (i.add(t3), document.querySelector(`link[rel="stylesheet"][href="${t3}"]`)) ? Promise.resolve() : new Promise((e4, n2) => {
        let r2 = document.createElement(`link`);
        r2.rel = `stylesheet`, r2.href = t3, r2.onload = () => e4(), r2.onerror = () => {
          i.delete(t3), n2(Error(`[Module Federation] Failed to load CSS asset: ${t3}`));
        }, document.head.appendChild(r2);
      });
    }));
  }
  var c = {
    "./FullCalendar": async () => {
      await s(`./FullCalendar`), await Promise.all([]);
      let t2 = await o(`./FullCalendar`, () => e(() => import("./assets/FullCalendar-unCnA4AJ.js").then(async (m2) => {
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
  var l = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__78845261933133__mf_v__runtimeInit__mf_v__.js__`, u = globalThis[l];
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
  var d = u.initResolve, { initReject: f } = u, p = (e2) => {
    throw f(e2), e2;
  }, m = `__mf_module_cache__`;
  globalThis[m] || (globalThis[m] = {
    share: {},
    remote: {}
  }), (_a = globalThis[m]).share || (_a.share = {}), (_b = globalThis[m]).remote || (_b.remote = {});
  var h = globalThis[m];
  for (let e2 of Object.keys(h.share)) if (e2.startsWith(`default:`)) {
    let t2 = e2.slice(8);
    h.share[t2] === void 0 && (h.share[t2] = h.share[e2]);
  } else if (!e2.includes(`:`)) {
    let t2 = `default:` + e2;
    h.share[t2] === void 0 && (h.share[t2] = h.share[e2]);
  }
  var g = {}, _ = Array.isArray(`default`) ? `default` : [
    `default`
  ], v = `default`, y = `fullcalendar`, b = [
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
  ], x, S;
  async function C(e2) {
    for (let t2 = 0; ; t2++) try {
      return await e2();
    } catch (e3) {
      throw e3;
    }
  }
  var w = /* @__PURE__ */ Symbol(`mf.originalSharedProvider`), T = {
    emit: (e2) => e2
  }, E = (e2) => Array.isArray(e2.scope) ? e2.scope : [
    e2.scope || `default`
  ], D = (e2, t2) => {
    if (t2 !== `version-first`) return e2;
    let n2 = {};
    for (let [t3, r2] of Object.entries(e2)) n2[t3] = Object.assign({}, r2, {
      [w]: r2
    });
    return n2;
  }, O = (e2, t2) => {
    if (!t2) return;
    let n2 = Object.entries(e2 || {}), r2 = n2.find(([, e3]) => e3 === t2);
    if (r2) return {
      version: r2[0],
      provider: t2,
      registered: true
    };
    if (typeof t2.version == `string` && t2.version) return {
      version: t2.version,
      provider: t2,
      registered: false
    };
    let i2 = n2.filter(([, e3]) => e3 === t2 || !!(t2.from && (e3 == null ? void 0 : e3.from) === t2.from));
    if (i2.length === 1) return {
      version: i2[0][0],
      provider: t2,
      registered: false
    };
  }, k = (e2, t2, r2, i2) => {
    var _a2;
    if (!e2 || !r2) return;
    let a2 = Object.fromEntries(Object.entries(e2).filter(([, e3]) => {
      var _a3;
      return ((_a3 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a3.import) !== false;
    }));
    if (Object.keys(a2).length === 0) return;
    let o2 = E(r2), s2 = D(a2, i2), c2 = {};
    for (let e3 of o2) c2[e3 || `default`] = {
      [t2]: s2
    };
    let l2 = (_a2 = n.getRegisteredShare(c2, t2, {
      ...r2,
      scope: o2,
      strategy: i2
    }, T)) == null ? void 0 : _a2.shared;
    return (l2 == null ? void 0 : l2[w]) || l2;
  }, A = (e2, t2, n2, r2) => {
    var _a2;
    let i2 = (e3) => j(e3, n2), a2 = Object.fromEntries(Object.entries(e2 || {}).filter(([, e3]) => {
      var _a3;
      return !i2(e3) && ((_a3 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a3.import) !== false;
    }));
    (n2 == null ? void 0 : n2.version) && ((_a2 = n2.shareConfig) == null ? void 0 : _a2.import) !== false && (a2[n2.version] || (a2[n2.version] = n2));
    let o2 = k(a2, t2, n2, r2);
    return i2(o2) ? void 0 : o2;
  }, j = (e2, t2) => e2 === t2 || !!((t2 == null ? void 0 : t2.from) && (e2 == null ? void 0 : e2.from) === t2.from), M = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    var _a2, _b2, _c;
    if (c2 !== `version-first` || !s2) return;
    let l2 = (_b2 = (_a2 = t2 == null ? void 0 : t2.options) == null ? void 0 : _a2.shared) == null ? void 0 : _b2[i2], u2 = Array.isArray(l2) ? l2.find((e3) => (e3 == null ? void 0 : e3.version) === a2) : void 0, d2 = ((s2 == null ? void 0 : s2.from) === ((_c = t2 == null ? void 0 : t2.options) == null ? void 0 : _c.name) ? s2 : void 0) || (j(u2, s2) ? u2 : t2 ? void 0 : s2);
    if (d2) return e2.some((e3) => {
      var _a3, _b3;
      return e3 !== t2 && ((_a3 = e3 == null ? void 0 : e3.options) == null ? void 0 : _a3.name) === (o2 == null ? void 0 : o2.from) && ((_b3 = e3 == null ? void 0 : e3.shareScopeMap) == null ? void 0 : _b3[r2]) === n2;
    }) ? d2 : void 0;
  }, ee = (e2, t2, n2, r2, i2, a2, o2, s2, c2) => {
    let l2 = a2.registered ? M(e2, t2, n2, r2, i2, a2.version, a2.provider, s2, c2) : void 0, u2 = l2 || o2;
    if (u2 && (!a2.registered || j(u2, s2))) return {
      provider: u2,
      scopeRootProvider: l2
    };
  };
  async function N() {
    return x || (x = C(() => e(() => import("./assets/_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-CgcLNkis.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }), [], import.meta.url)).catch((e2) => {
      throw x = void 0, e2;
    })), x;
  }
  async function P() {
    return c;
  }
  F = async function(e2 = {}, n2 = [], r2 = {}) {
    var _a2, _b2, _c, _d, _e2, _f, _g, _h, _i, _j;
    let i2 = (e3, t2, n3, r3) => {
      let i3 = (Array.isArray(r3) ? r3[0] : r3) || `default`, a3 = t2 || !n3 ? e3 : e3 + `@` + n3, o3 = {
        canonical: i3 + `:` + a3
      };
      return i3 === "default" && (o3.aliases = [
        a3
      ]), o3;
    }, a2 = (e3, t2) => {
      let n3 = e3[t2.canonical];
      if (n3 !== void 0) return n3;
      let r3 = t2.aliases || [];
      for (let n4 of r3) {
        if (!Object.prototype.hasOwnProperty.call(e3, n4)) continue;
        let r4 = e3[n4];
        if (r4 !== void 0) return e3[t2.canonical] = r4, r4;
      }
    }, o2 = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-listeners`), s2 = /* @__PURE__ */ Symbol.for(`module-federation.shared-cache-owners`), c2 = (e3) => {
      let t2 = e3[s2];
      return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e3, s2, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, l2 = (e3, t2) => {
      var _a3;
      return (_a3 = e3[s2]) == null ? void 0 : _a3[t2.canonical];
    }, f2 = (e3) => {
      let t2 = [
        e3,
        e3 == null ? void 0 : e3.default
      ];
      for (let e4 of t2) if (e4 && typeof e4 == `object`) {
        for (let t3 of [
          `__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE`,
          `__TEST_INTERNALS`,
          `__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED`
        ]) {
          let n3 = e4[t3];
          if (n3 && typeof n3 == `object`) return {
            internals: n3
          };
        }
        if (typeof e4.useState == `function`) return {
          hook: e4.useState
        };
      }
    }, m2 = (e3, t2) => {
      if (e3 === t2) return true;
      let n3 = f2(e3), r3 = f2(t2);
      if (!n3 || !r3) return false;
      let i3 = n3.internals, a3 = r3.internals;
      return i3 !== void 0 || a3 !== void 0 ? i3 !== void 0 && i3 === a3 : typeof n3.hook == `function` && n3.hook === r3.hook;
    }, x2 = (e3, t2, n3, r3) => {
      var _a3;
      let i3 = a2(e3, t2);
      if (i3 !== void 0 && m2(i3, n3)) return n3;
      e3[t2.canonical] = n3;
      let l3 = t2.aliases || [];
      for (let t3 of l3) Object.defineProperty(e3, t3, {
        value: n3,
        enumerable: true,
        configurable: true,
        writable: true
      });
      let u2 = e3[s2];
      r3 === void 0 ? u2 && delete u2[t2.canonical] : c2(e3)[t2.canonical] = r3;
      let d2 = (_a3 = e3[o2]) == null ? void 0 : _a3[t2.canonical];
      if (d2) for (let e4 of d2) e4(n3);
      return n3;
    }, w2 = /* @__PURE__ */ Symbol.for(`module-federation.tree-shaking-shared-cache`), T2 = (e3) => {
      let t2 = e3[w2];
      return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e3, w2, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, E2 = (e3, t2, n3, r3) => {
      var _a3;
      if (!Array.isArray(n3)) return r3;
      let i3 = [
        ...new Set(n3)
      ].sort(), a3 = T2(e3), o3 = a3[_a3 = t2.canonical] || (a3[_a3] = []), s3 = o3.find((e4) => e4.providedExports.length === i3.length && e4.providedExports.every((e5, t3) => e5 === i3[t3]));
      return s3 ? s3.value = r3 : o3.push({
        providedExports: i3,
        value: r3
      }), r3;
    }, D2 = /* @__PURE__ */ Symbol.for(`module-federation.tree-shaking-shared-selection-cache`), M2 = (e3) => {
      let t2 = e3[D2];
      return t2 === void 0 && (t2 = /* @__PURE__ */ Object.create(null), Object.defineProperty(e3, D2, {
        value: t2,
        enumerable: false,
        configurable: false,
        writable: false
      })), t2;
    }, P2 = (e3, t2, n3) => {
      var _a3, _b3;
      let r3 = a2(e3, t2);
      return r3 === void 0 ? (_b3 = (_a3 = e3[D2]) == null ? void 0 : _a3[t2.canonical]) == null ? void 0 : _b3[n3] : r3;
    }, F2 = (e3, t2, n3, r3) => {
      var _a3;
      let i3 = M2(e3), a3 = i3[_a3 = t2.canonical] || (i3[_a3] = /* @__PURE__ */ Object.create(null));
      return a3[n3] = r3, r3;
    }, I2 = ((_a2 = globalThis.__FEDERATION__) == null ? void 0 : _a2.__INSTANCES__) || [], te = (_b2 = n2.find((e3) => e3 == null ? void 0 : e3.from)) == null ? void 0 : _b2.from, ne = I2.find((t2) => {
      var _a3, _b3;
      return ((_a3 = t2 == null ? void 0 : t2.options) == null ? void 0 : _a3.name) === te && ((_b3 = t2 == null ? void 0 : t2.shareScopeMap) == null ? void 0 : _b3.default) === e2;
    }) || I2.find((t2) => {
      var _a3, _b3;
      return ((_a3 = t2 == null ? void 0 : t2.options) == null ? void 0 : _a3.name) !== y && ((_b3 = t2 == null ? void 0 : t2.shareScopeMap) == null ? void 0 : _b3.default) === e2;
    }), re = /* @__PURE__ */ Object.create(null), ie = (e3) => {
      let t2 = /* @__PURE__ */ Object.create(null);
      for (let [n3, r3] of Object.entries(e3 || {})) t2[n3] = Object.assign(/* @__PURE__ */ Object.create(null), r3);
      return t2;
    }, ae = (e3, t2) => {
      var _a3, _b3;
      for (let [n3, r3] of Object.entries(((_a3 = G.shareScopeMap) == null ? void 0 : _a3[e3]) || {})) for (let [e4, i3] of Object.entries(r3 || {})) {
        if (!i3 || i3.get === ((_b3 = R[n3]) == null ? void 0 : _b3.get)) continue;
        let r4 = t2[n3] || (t2[n3] = {});
        r4[e4] === void 0 && (r4[e4] = i3);
      }
    }, oe = (e3, t2) => {
      ae(e3, t2);
      let n3 = !ne && Object.values(t2 || {}).some((e4) => Object.values(e4 || {}).some(z)), r3 = n3 ? ie(t2) : t2;
      return re[e3] = {
        host: t2,
        runtime: r3,
        isWebpackScope: n3
      }, r3;
    }, se = () => {
      let e3 = Object.values(re).filter(({ isWebpackScope: e4 }) => e4);
      if (e3.length !== 0) for (let { host: t2, runtime: n3 } of e3) for (let [e4, r3] of Object.entries(t2 || {})) {
        let t3 = n3[e4] || (n3[e4] = /* @__PURE__ */ Object.create(null));
        for (let [e5, n4] of Object.entries(r3 || {})) t3[e5] = n4;
      }
    }, L = /* @__PURE__ */ Object.create(null);
    for (let [t2, n3] of Object.entries(e2)) {
      let e3 = L[t2] = /* @__PURE__ */ Object.create(null);
      for (let [t3, r3] of Object.entries(n3)) e3[t3] = Object.assign({}, r3);
    }
    let { usedShared: R, usedRemotes: ce } = await N();
    function z(e3) {
      if (typeof (e3 == null ? void 0 : e3.get) != `function`) return false;
      let t2 = Function.prototype.toString.call(e3.get);
      return t2.includes(`__webpack_require__`) || /\.\s*e\s*\([^)]*\)\s*\.then\s*\(/.test(t2);
    }
    let le = Object.values(L).some((e3) => Object.values(e3 || {}).some(z)), ue = (e3) => {
      let t2 = e3.split(`/`);
      return e3.startsWith(`@`) ? t2.slice(0, 2).join(`/`) : t2[0];
    }, B = (t2, n3, r3, i3) => {
      if (typeof A != `function`) return;
      let a3 = ue(t2), o3 = !i3 || a3 === t2 ? [
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
        if (!i4) continue;
        let a4 = A(r3 ? n4 === t2 ? r3 : L[n4] : L[n4] ?? e2[n4], n4, i4, `version-first`);
        if (a4) return a4;
      }
    }, de = (e3, t2, n3) => {
      let r3 = B(e3, t2, n3, true);
      return r3 && z(r3) && !r3.lib && !r3.loaded ? r3 : void 0;
    };
    var V = g[v];
    if (V || (V = g[v] = {
      from: y
    }), n2.indexOf(V) >= 0) return;
    n2.push(V);
    let fe = (e3) => {
      let t2 = e3;
      for (let e4 = 0; e4 < 5; e4++) {
        let e5 = t2 == null ? void 0 : t2.default;
        if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0) break;
        let n3 = Object.getPrototypeOf(e5);
        if (n3 !== null && n3 !== Object.prototype) break;
        let r3 = Object.keys(t2).filter((e6) => e6 !== "default").map((e6) => t2[e6]);
        if (r3.length > 0 && r3.some((e6) => e6 !== void 0)) break;
        t2 = e5;
      }
      return t2;
    }, pe = [], me = globalThis.window === void 0 ? await Promise.all([]) : [], H = `__mf_vite_runtime_share_load_id__`, he = 0, U = /* @__PURE__ */ new Map(), W = /* @__PURE__ */ new Map(), G = t({
      name: y,
      remotes: ce,
      shared: R,
      plugins: [
        ge(),
        _e(),
        ...pe,
        ...me
      ],
      shareStrategy: `version-first`
    });
    G.initShareScopeMap(`default`, oe(`default`, e2));
    function ge() {
      return {
        name: `vite-share-pin-lifecycle-plugin`,
        resolveShare(e3) {
          var _a3;
          let t2 = (_a3 = e3.shareInfo) == null ? void 0 : _a3[H], n3 = t2 === void 0 ? void 0 : W.get(t2);
          if (!n3) return e3;
          let r3 = e3.resolver;
          return e3.resolver = (...e4) => (n3.pinned.reapply(), r3(...e4)), n3.pinned.reveal(), e3;
        }
      };
    }
    function _e() {
      return {
        name: `vite-real-name-snapshot-plugin`,
        afterLoadSnapshot(e3) {
          let t2 = e3 && e3.remoteSnapshot, n3 = t2 && t2.globalName, r3 = t2 && t2.version;
          if (!n3 || !r3 || !t2.remoteEntry) return e3;
          let i3 = globalThis.__FEDERATION__ && globalThis.__FEDERATION__.moduleInfo, a3 = n3 + `:` + r3;
          return i3 && !i3[a3] && (i3[a3] = t2), e3;
        }
      };
    }
    let ve = G.sharedHandler.hooks.lifecycle.resolveShare;
    G.__mfKeepAdoptedProviders || (G.__mfKeepAdoptedProviders = true, (_g = (_f = (_e2 = (_d = (_c = G.sharedHandler) == null ? void 0 : _c.hooks) == null ? void 0 : _d.lifecycle) == null ? void 0 : _e2.afterRegisterShare) == null ? void 0 : _f.on) == null ? void 0 : _g.call(_f, (e3) => {
      var _a3, _b3, _c2, _d2, _e3;
      let { shared: t2, previousShared: n3, registeredShared: r3 } = e3 || {}, i3 = (_b3 = (_a3 = G.shareScopeMap) == null ? void 0 : _a3[e3.scope]) == null ? void 0 : _b3[e3.pkgName];
      t2 && i3 && (((_c2 = t2.shareConfig) == null ? void 0 : _c2.import) === false ? r3 === t2 && n3 && ((_d2 = n3.shareConfig) == null ? void 0 : _d2.import) !== false && i3[t2.version] === t2 && (i3[t2.version] = n3) : r3 !== t2 && ((_e3 = r3 == null ? void 0 : r3.shareConfig) == null ? void 0 : _e3.import) === false && !r3.loaded && i3[t2.version] === r3 && (i3[t2.version] = t2));
    }));
    let K = /* @__PURE__ */ new WeakMap();
    ve.on((e3) => {
      var _a3;
      let t2 = (_a3 = e3.shareInfo) == null ? void 0 : _a3[H], n3 = e3.resolver;
      return typeof n3 == `function` && (e3.resolver = (...r3) => {
        var _a4, _b3, _c2, _d2, _e3;
        let i3 = n3(...r3);
        if (((_b3 = (_a4 = i3 == null ? void 0 : i3.shared) == null ? void 0 : _a4.shareConfig) == null ? void 0 : _b3.import) === false && typeof k == `function` && R[e3.pkgName]) {
          let t3 = k((_d2 = (_c2 = e3.shareScopeMap) == null ? void 0 : _c2[e3.scope]) == null ? void 0 : _d2[e3.pkgName], e3.pkgName, R[e3.pkgName], `version-first`);
          t3 && ((_e3 = t3.shareConfig) == null ? void 0 : _e3.import) !== false && (i3 = {
            shared: t3,
            useTreesShaking: i3.useTreesShaking
          });
        }
        let a3 = i3 == null ? void 0 : i3.shared;
        return a3 && (typeof a3 == `object` || typeof a3 == `function`) && !K.has(a3) && K.set(a3, {
          from: a3.from
        }), t2 !== void 0 && a3 && U.set(t2, a3), i3;
      }), e3;
    });
    let ye = (e3, t2, n3, r3) => {
      if (!e3 || e3[t2] !== n3) return;
      let i3 = Object.assign({}, r3, {
        version: r3.version ?? t2,
        scope: r3.scope ?? (n3 == null ? void 0 : n3.scope) ?? [
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
    }, be = (e3) => Object.entries(e3 || {}).map(([e4, t2]) => ({
      provider: t2,
      version: e4,
      from: t2.from,
      registered: true
    })), xe = (e3, t2) => {
      if (t2 === void 0) return;
      let n3;
      for (let r3 of e3) {
        let e4 = r3.provider, i3 = e4.treeShaking || e4;
        if (r3.loadedFactory === t2 || e4.lib === t2 || i3.lib === t2) {
          if (n3) return;
          n3 = r3;
        }
      }
      return n3;
    }, Se = async (e3, t2, n3) => {
      let r3 = ++he;
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
    }, Ce = async (e3, t2, n3, r3, i3, a3, o3 = true) => {
      let s3 = a3.from, c3 = ye(n3, r3, i3, a3);
      if (!c3) return;
      let l3;
      try {
        l3 = await Se(e3, t2, c3);
      } catch (e4) {
        throw c3.release(false), e4;
      }
      let u2 = l3 == null ? void 0 : l3.factory;
      if (u2 === void 0) {
        c3.release(false);
        return;
      }
      let d2 = be(n3), f3 = c3.provider.treeShaking || c3.provider, p2 = c3.provider.lib === u2 || f3.lib === u2;
      if (!o3 && p2) {
        let e4 = d2.findIndex((e5) => e5.provider === c3.provider);
        e4 !== -1 && d2.splice(e4, 1);
      }
      !o3 && !d2.some((e4) => e4.provider === a3) && d2.push({
        provider: a3,
        version: r3,
        from: s3,
        registered: false,
        loadedFactory: p2 ? u2 : void 0
      });
      let m3 = !o3 && l3.selectedProvider === c3.provider && p2 ? a3 : l3.selectedProvider;
      if (m3 && !d2.some((e4) => e4.provider === m3)) {
        let e4 = K.get(m3), t3 = typeof m3.version == `string` && m3.version ? m3.version : r3;
        d2.push({
          provider: m3,
          version: t3,
          from: e4 ? e4.from : m3.from,
          registered: (n3 == null ? void 0 : n3[t3]) === m3,
          loadedFactory: u2
        });
      }
      let h2 = d2.find((e4) => e4.provider === m3) ?? xe(d2, u2);
      if (!c3.release(true, (h2 == null ? void 0 : h2.provider) === c3.provider) || !h2) return;
      let g2 = K.get(h2.provider);
      h2.from = h2.provider === a3 ? s3 : g2 ? g2.from : h2.provider.from, g2 && (h2.provider.from = g2.from);
      let _2 = typeof u2 == `function` ? u2() : u2, v2 = await Promise.resolve(_2);
      if (!(h2.registered && (n3 == null ? void 0 : n3[h2.version]) !== h2.provider)) return {
        provider: h2.provider,
        selection: h2,
        resolved: v2
      };
    }, q = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Map(), we = async (t2, n3, r3) => {
      var _a3, _b3, _c2;
      let o3 = !!((_a3 = n3.shareConfig) == null ? void 0 : _a3.singleton);
      if (!o3 && n3.canLiveRebind !== false) try {
        let s3 = A(r3, t2, n3, `version-first`), c3 = O(r3, s3);
        if (!c3 || ((_b3 = n3.shareConfig) == null ? void 0 : _b3.import) === false && j(s3, n3) || ((_c2 = s3 == null ? void 0 : s3.shareConfig) == null ? void 0 : _c2.import) === false) return;
        let { version: l3 } = c3;
        if (!o3 && l3 !== n3.version || !s3.lib && !s3.loading && !(s3.loaded && typeof s3.get == `function`)) return;
        let u2 = i2(t2, o3, n3.version, n3.scope);
        if (a2(h.share, u2) !== void 0) return;
        let d2 = e2[t2], f3 = d2 == null ? void 0 : d2[l3];
        if (c3.registered && !j(f3, s3)) return;
        let p2, m3 = s3.lib;
        if (!m3 && z(s3) || (!m3 && s3.loading && (m3 = await s3.loading), !m3 && s3.loaded && typeof s3.get == `function` && (m3 = await s3.get()), !m3)) return;
        let g2 = typeof m3 == `function` ? m3() : m3, _2 = await Promise.resolve(g2), v2 = c3.registered ? f3 : s3;
        p2 = {
          provider: v2,
          selection: {
            provider: v2,
            version: l3,
            from: s3.from,
            registered: c3.registered
          },
          resolved: _2
        };
        let y2 = p2 == null ? void 0 : p2.provider, b2 = p2 == null ? void 0 : p2.selection;
        if (!b2) return;
        let S2 = p2 == null ? void 0 : p2.resolved;
        if (S2 === void 0 || a2(h.share, u2) !== void 0 || b2.registered && (d2 == null ? void 0 : d2[b2.version]) !== y2) return;
        x2(h.share, u2, fe(S2), b2.from), q.add(y2);
      } catch (e3) {
        console.error(`[Module Federation] Failed to bridge materialized shared module "` + t2 + `"`, e3);
      }
    }, Y = async (t2, n3, r3, o3, s3) => {
      var _a3, _b3, _c2, _d2;
      try {
        let c3 = i2(t2, (_a3 = n3.shareConfig) == null ? void 0 : _a3.singleton, n3.version, n3.scope), u2 = a2(h.share, c3), d2 = l2(h.share, c3), f3 = A(r3, t2, n3, `version-first`), p2 = f3 || k(r3, t2, n3, `version-first`) || n3, m3 = O(r3, p2);
        if (!m3) return;
        let g2 = j(p2, n3), { version: _2 } = m3;
        if (!((_b3 = n3.shareConfig) == null ? void 0 : _b3.singleton) && _2 !== n3.version) return;
        let v2 = o3 == null ? void 0 : o3[_2], b2 = ee(I2, ne, e2, `default`, t2, m3, f3, v2, `version-first`);
        if (!b2 && !g2) return;
        let { provider: S2, scopeRootProvider: C2 } = b2 || {
          provider: p2,
          scopeRootProvider: void 0
        };
        if (n3.canLiveRebind === false || ((_c2 = n3.shareConfig) == null ? void 0 : _c2.import) === false && j(S2, n3) || ((_d2 = S2 == null ? void 0 : S2.shareConfig) == null ? void 0 : _d2.import) === false || u2 !== void 0 && d2 !== y) return;
        let w3 = e2[t2], T3 = w3 == null ? void 0 : w3[_2];
        if (m3.registered && !C2 && !j(T3, S2)) return;
        let E3 = await Ce(t2, n3.shareConfig, w3, _2, T3, S2, m3.registered && !g2), D3 = E3 == null ? void 0 : E3.provider, M3 = E3 == null ? void 0 : E3.selection;
        if (!M3 || j(D3, n3) || s3 && (s3.version !== M3.version || !j({
          from: M3.from
        }, s3.provider)) || q.has(D3)) return;
        let N2 = E3 == null ? void 0 : E3.resolved;
        if (N2 === void 0) return;
        let P3 = a2(h.share, c3), F3 = l2(h.share, c3);
        if (P3 !== void 0 && F3 !== y || M3.registered && (w3 == null ? void 0 : w3[M3.version]) !== D3) return;
        s3 || J.set(t2, {
          version: M3.version,
          provider: {
            from: M3.from
          }
        }), q.add(D3);
        let te2 = fe(N2);
        x2(h.share, c3, te2, M3.from);
      } catch (e3) {
        console.error(`[Module Federation] Failed to bridge external shared module "` + t2 + `"`, e3);
      }
    };
    for (let e3 of b) await Promise.all(e3.map(async (e4) => {
      let t2 = R[e4];
      t2 && t2.materialize !== false && !t2.treeShaking && await we(e4, t2, L[e4]);
    }));
    for (let [e3, t2] of Object.entries(R)) {
      if (t2.treeShaking) continue;
      let n3 = i2(e3, (_h = t2.shareConfig) == null ? void 0 : _h.singleton, t2.version, t2.scope);
      if (a2(h.share, n3) !== void 0) continue;
      let r3 = i2(e3, true, t2.version, t2.scope), o3 = a2(h.share, r3);
      o3 !== void 0 && x2(h.share, n3, o3, l2(h.share, r3));
    }
    let Te = [
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
    ], Ee = [
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
    ], X = new Map(Te.map((e3, t2) => [
      e3,
      t2
    ])), De = {
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
    }, Z = Te.filter((e3) => {
      var _a3;
      return R[e3] && (R[e3].materialize !== false || ((_a3 = R[e3].shareConfig) == null ? void 0 : _a3.import) === false && !R[e3].lazy);
    });
    h.providerInit || (h.providerInit = /* @__PURE__ */ new Map());
    let Oe = (e3, t2) => {
      let n3 = h.providerInit.get(e3);
      if (n3) return n3;
      let r3 = Promise.resolve().then(t2);
      return h.providerInit.set(e3, r3), r3.catch(() => h.providerInit.delete(e3)), r3;
    };
    var ke = async (e3) => {
      let t2 = new Set(e3);
      for (let e4 of Ee) await Promise.all(e4.filter((e5) => t2.has(e5)).map(async (e5) => {
        var _a3, _b3, _c2, _d2, _e3, _f2;
        let t3 = R[e5], n3 = i2(e5, (_a3 = t3.shareConfig) == null ? void 0 : _a3.singleton, t3.version, t3.scope);
        if (((_b3 = t3.shareConfig) == null ? void 0 : _b3.import) === false || t3.treeShaking || a2(h.share, n3) !== void 0) return;
        let r3 = i2(e5, true, t3.version, t3.scope), o3 = a2(h.share, r3);
        if (o3 !== void 0) {
          x2(h.share, n3, o3, l2(h.share, r3));
          return;
        }
        let s3 = typeof B == `function` ? B(e5, t3) : void 0;
        if (s3) {
          let r4 = s3.lib;
          if (!r4 && s3.loading && (r4 = await s3.loading), !r4 && s3.loaded && typeof s3.get == `function` && (r4 = await s3.get()), r4) {
            let e6 = typeof r4 == `function` ? r4() : r4, t4 = await Promise.resolve(e6);
            x2(h.share, n3, ((e7) => {
              let t5 = e7;
              for (let e8 = 0; e8 < 5; e8++) {
                let e9 = t5 == null ? void 0 : t5.default;
                if (!e9 || typeof e9 != `object` || Object.keys(e9).length === 0) break;
                let n4 = Object.getPrototypeOf(e9);
                if (n4 !== null && n4 !== Object.prototype) break;
                let r5 = Object.keys(t5).filter((e10) => e10 !== "default").map((e10) => t5[e10]);
                if (r5.length > 0 && r5.some((e10) => e10 !== void 0)) break;
                t5 = e9;
              }
              return t5;
            })(t4), s3.from);
            return;
          }
          if (!((_c2 = t3.shareConfig) == null ? void 0 : _c2.singleton) && typeof s3.version == `string`) {
            let r5 = a2(h.share, i2(e5, false, s3.version, t3.scope));
            if (r5 !== void 0) {
              x2(h.share, n3, r5, s3.from);
              return;
            }
          }
          if (typeof z == `function` && z(s3) && (((_d2 = t3.shareConfig) == null ? void 0 : _d2.singleton) || ((_e3 = O(L[e5], s3)) == null ? void 0 : _e3.version) === t3.version)) return;
        }
        let c3 = n3.canonical, u2 = await Oe(c3, async () => {
          let e6 = await t3.get(), n4 = typeof e6 == `function` ? e6() : e6;
          return Promise.resolve(n4);
        });
        for (let n4 of ((_f2 = G.options.shared) == null ? void 0 : _f2[e5]) || []) n4.get === t3.get && (n4.eager = true);
        let d2 = ((e6) => {
          let t4 = e6;
          for (let e7 = 0; e7 < 5; e7++) {
            let e8 = t4 == null ? void 0 : t4.default;
            if (!e8 || typeof e8 != `object` || Object.keys(e8).length === 0) break;
            let n4 = Object.getPrototypeOf(e8);
            if (n4 !== null && n4 !== Object.prototype) break;
            let r4 = Object.keys(t4).filter((e9) => e9 !== "default").map((e9) => t4[e9]);
            if (r4.length > 0 && r4.some((e9) => e9 !== void 0)) break;
            t4 = e8;
          }
          return t4;
        })(u2), f3 = d2 === u2 ? {
          ...u2
        } : d2;
        f3.__esModule !== true && Object.defineProperty(f3, "__esModule", {
          value: true,
          enumerable: false
        }), x2(h.share, n3, f3, y);
      }));
    };
    let Q = (e3) => {
      var _a3, _b3;
      let t2 = R[e3];
      if (!t2.treeShaking && ((_a3 = t2.shareConfig) == null ? void 0 : _a3.import) !== false) return false;
      let n3 = i2(e3, (_b3 = t2.shareConfig) == null ? void 0 : _b3.singleton, t2.version, t2.scope);
      return t2.treeShaking ? P2(h.share, n3, y) === void 0 && a2(h.share, n3) === void 0 : a2(h.share, n3) === void 0;
    }, Ae = (e3) => {
      var _a3, _b3;
      let t2 = R[e3], n3 = i2(e3, (_a3 = t2.shareConfig) == null ? void 0 : _a3.singleton, t2.version, t2.scope);
      return (t2.treeShaking ? P2(h.share, n3, y) ?? a2(h.share, n3) : a2(h.share, n3)) === void 0 ? t2.treeShaking || ((_b3 = t2.shareConfig) == null ? void 0 : _b3.import) === false ? true : typeof A == `function` && !!A(L[e3], e3, t2, `version-first`) : false;
    }, je = (e3) => {
      let t2 = true;
      for (; t2; ) {
        t2 = false;
        for (let n3 of Z) {
          let r3 = X.get(n3);
          e3.has(r3) || (De[r3] || []).some((t3) => e3.has(t3)) && (e3.add(r3), t2 = true);
        }
      }
      return e3;
    }, Me = je(new Set(Z.filter(Ae).map((e3) => X.get(e3)))), Ne = Z.filter((e3) => !Me.has(X.get(e3)));
    var Pe = Z.filter((e3) => Me.has(X.get(e3)));
    await ke(Ne).catch(p);
    try {
      await C(async () => {
        await Promise.all(await G.initializeSharing(`default`, {
          strategy: `version-first`,
          from: `build`,
          initScope: n2
        }));
      });
    } catch (e3) {
      console.error(`[Module Federation]`, e3);
    }
    se();
    let Fe = async () => {
      for (let t2 of b) await Promise.all(t2.map(async (t3) => {
        let n3 = R[t3];
        n3 && n3.materialize !== false && !n3.treeShaking && await Y(t3, n3, e2[t3], L[t3], void 0);
      }));
    };
    le ? S = Fe : await Fe();
    try {
      let e3 = (_i = globalThis.__FEDERATION__) == null ? void 0 : _i.__SHARE__, t2 = /* @__PURE__ */ Object.create(null);
      if (e3) for (let [, n3] of Object.entries(e3)) for (let e4 of _) {
        let r3 = n3 == null ? void 0 : n3[e4];
        if (r3) for (let [e5, n4] of Object.entries(r3)) {
          let r4 = R == null ? void 0 : R[e5], i3 = L[e5], a3 = J.get(e5);
          if (!r4 || !i3 || !a3 || r4.treeShaking) continue;
          let o3 = t2[e5] || (t2[e5] = /* @__PURE__ */ Object.create(null));
          for (let [e6, t3] of Object.entries(n4)) {
            if (!t3.lib || a3.version !== e6 || !j(t3, a3.provider)) continue;
            let n5 = i3[e6];
            (t3 === n5 || (n5 == null ? void 0 : n5.from) && t3.from === n5.from) && (t3 === r4 || r4.from && t3.from === r4.from || o3[e6] === void 0 && (o3[e6] = t3));
          }
        }
      }
      for (let e4 of b) await Promise.all(e4.map(async (e5) => {
        let n3 = t2[e5];
        n3 && await Y(e5, R[e5], n3, L[e5], J.get(e5));
      }));
    } catch (e3) {
      console.error(`[Module Federation] Failed to bridge external shared modules`, e3);
    }
    let Ie = async () => {
    }, Le = async (t2, n3) => {
      var _a3, _b3;
      let r3 = i2(t2, (_a3 = n3.shareConfig) == null ? void 0 : _a3.singleton, n3.version, n3.scope), o3 = n3.treeShaking ? P2(h.share, r3, y) : a2(h.share, r3);
      if (((_b3 = n3.shareConfig) == null ? void 0 : _b3.import) !== false || o3 !== void 0 || de(t2, n3, L[t2])) return;
      let s3 = (e3) => {
        let t3 = e3;
        for (let e4 = 0; e4 < 5; e4++) {
          let e5 = t3 == null ? void 0 : t3.default;
          if (!e5 || typeof e5 != `object` || Object.keys(e5).length === 0) break;
          let n4 = Object.getPrototypeOf(e5);
          if (n4 !== null && n4 !== Object.prototype) break;
          let r4 = Object.keys(t3).filter((e6) => e6 !== "default").map((e6) => t3[e6]);
          if (r4.length > 0 && r4.some((e6) => e6 !== void 0)) break;
          t3 = e5;
        }
        return t3;
      }, c3 = e2 == null ? void 0 : e2[t2], l3 = k(c3, t2, n3, `version-first`) || n3, u2 = O(c3, l3);
      if (!u2) return;
      let d2 = (e3) => {
        var _a4;
        return e3 === n3 || ((_a4 = e3 == null ? void 0 : e3.shareConfig) == null ? void 0 : _a4.import) === false;
      };
      if (d2(l3)) return;
      let { version: f3 } = u2, p2 = c3 == null ? void 0 : c3[f3], m3 = await Ce(t2, n3.shareConfig, c3, f3, p2, l3, u2.registered), g2 = m3 == null ? void 0 : m3.selection, _2 = m3 == null ? void 0 : m3.provider, v2 = m3 == null ? void 0 : m3.resolved;
      if (!g2 || d2(_2) || v2 === void 0 || (n3.treeShaking ? P2(h.share, r3, y) : a2(h.share, r3)) !== void 0 || g2.registered && (c3 == null ? void 0 : c3[g2.version]) !== _2) return;
      let b2 = s3(v2);
      if (n3.treeShaking) {
        let e3 = n3.treeShaking.providedExports ?? n3.treeShaking.usedExports ?? [];
        E2(h.share, r3, e3, b2), F2(h.share, r3, y, b2);
      } else x2(h.share, r3, b2, g2.from);
    }, Re = [], ze = /* @__PURE__ */ new Set();
    for (let e3 of Pe) {
      let t2 = R[e3], n3 = X.get(e3);
      if (Q(e3)) try {
        t2.treeShaking ? await Ie(e3, t2) : ((_j = t2.shareConfig) == null ? void 0 : _j.import) === false && await Le(e3, t2);
      } catch (t3) {
        console.error(`[Module Federation] Failed to resolve runtime-only shared module "${e3}"`, t3);
      }
      Q(e3) && ze.add(n3);
    }
    je(ze), Re.push(...Pe.filter((e3) => !ze.has(X.get(e3)))), await ke(Re).catch(p);
    let $ = /* @__PURE__ */ new Map();
    return u.loadLazyShares = async (t2) => {
      let n3 = new Set(t2);
      for (let t3 of b) await Promise.all(t3.filter((e3) => n3.has(e3)).map((t4) => {
        let n4 = R[t4];
        if (!n4 || !n4.lazy || !Q(t4)) return;
        let r3 = $.get(t4);
        return r3 || (r3 = Y(t4, n4, e2[t4], L[t4], void 0).then(() => Q(t4) ? Le(t4, n4) : void 0), r3.catch(() => $.delete(t4)), $.set(t4, r3)), r3;
      }));
    }, d(G), G;
  };
  I = async function(e2) {
    let t2 = await P();
    if (!(e2 in t2)) throw Error(`[Module Federation] Module ${e2} does not exist in container.`);
    return S && await S(), h.pendingShareLoads && await Promise.all(h.pendingShareLoads), t2[e2]().then((e3) => () => e3);
  };
  if (typeof document !== "undefined" && document.head) {
    try {
      for (const __mfWarmupPath of [
        "assets/_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-CgcLNkis.js",
        "assets/vite-preload-helper-CRzLMJPS.js",
        "assets/dist-BI-Ygd_Z.js",
        "assets/utils-BRGuweMc.js"
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
  I as get,
  F as init
};
