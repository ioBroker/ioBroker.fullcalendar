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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import {n as e, t} from "./vite-preload-helper-r6RKwCfh.js";
let dr, lr, mr;
let __tla = (async () => {
  var n = `FEDERATION_DEBUG`, r = {
    AT: `@`,
    HYPHEN: `-`,
    SLASH: `/`
  }, i = {
    [r.AT]: `scope_`,
    [r.HYPHEN]: `_`,
    [r.SLASH]: `__`
  };
  i[r.AT], r.AT, i[r.HYPHEN], r.HYPHEN, i[r.SLASH], r.SLASH;
  var a = function(e2) {
    return e2[e2.UNKNOWN = 1] = `UNKNOWN`, e2[e2.CALCULATED = 2] = `CALCULATED`, e2[e2.NO_USE = 0] = `NO_USE`, e2;
  }({});
  function o() {
    return true;
  }
  function s() {
    return typeof navigator < `u` && navigator?.product === `ReactNative`;
  }
  function c() {
    try {
      if (o() && window.localStorage)
        return !!localStorage.getItem(n);
    } catch {
      return false;
    }
    return false;
  }
  function l() {
    return typeof process < `u` && {}.FEDERATION_DEBUG ? !!{}.FEDERATION_DEBUG : typeof FEDERATION_DEBUG < `u` && FEDERATION_DEBUG ? true : c();
  }
  var u = `[ Federation Runtime ]`, d = function(...e2) {
    return e2.length ? e2.reduce((e3, t2) => t2 ? e3 ? `${e3}:${t2}` : t2 : e3, ``) : ``;
  };
  function f(e2, t2) {
    if (`getPublicPath` in e2) {
      let n2;
      return n2 = e2.getPublicPath.startsWith(`function`) ? Function(`return ` + e2.getPublicPath)()() : Function(e2.getPublicPath)(), `${n2}${t2}`;
    }
    return `publicPath` in e2 ? !o() && !s() && `ssrPublicPath` in e2 && typeof e2.ssrPublicPath == `string` ? `${e2.ssrPublicPath}${t2}` : `${e2.publicPath}${t2}` : (console.warn(`Cannot get resource URL. If in debug mode, please ignore.`, e2, t2), ``);
  }
  var p = (e2) => {
    console.warn(`${u}: ${e2}`);
  };
  function m(e2) {
    try {
      return JSON.stringify(e2, null, 2);
    } catch {
      return ``;
    }
  }
  var ee = (e2, t2) => {
    if (!e2)
      return t2;
    let n2 = ((e3) => {
      if (e3 === `.`)
        return ``;
      if (e3.startsWith(`./`))
        return e3.replace(`./`, ``);
      if (e3.startsWith(`/`)) {
        let t3 = e3.slice(1);
        return t3.endsWith(`/`) ? t3.slice(0, -1) : t3;
      }
      return e3;
    })(e2);
    return n2 ? n2.endsWith(`/`) ? `${n2}${t2}` : `${n2}/${t2}` : t2;
  };
  function h(e2) {
    return e2.replace(/#.*$/, ``).replace(/\?.*$/, ``).replace(/\/[^\/]+$/, `/`);
  }
  function g(e2, t2 = {}) {
    let {remotes: n2 = {}, overrides: r2 = {}, version: i2} = t2, a2, o2 = () => `publicPath` in e2.metaData ? (e2.metaData.publicPath === `auto` || e2.metaData.publicPath === ``) && i2 ? h(i2) : e2.metaData.publicPath : e2.metaData.getPublicPath, s2 = Object.keys(r2), c2 = {};
    Object.keys(n2).length || (c2 = e2.remotes?.reduce((e3, t3) => {
      let n3, i3 = t3.federationContainerName;
      return n3 = s2.includes(i3) ? r2[i3] : `version` in t3 ? t3.version : t3.entry, e3[i3] = {
        matchedVersion: n3
      }, e3;
    }, {}) || {}), Object.keys(n2).forEach((e3) => c2[e3] = {
      matchedVersion: s2.includes(e3) ? r2[e3] : n2[e3]
    });
    let {remoteEntry: {path: l2, name: u2, type: d2}, types: f2 = {
      path: ``,
      name: ``,
      zip: ``,
      api: ``
    }, buildInfo: {buildVersion: p2}, globalName: m2, ssrRemoteEntry: g2} = e2.metaData, {exposes: te2} = e2, _2 = {
      version: i2 || ``,
      buildVersion: p2,
      globalName: m2,
      remoteEntry: ee(l2, u2),
      remoteEntryType: d2,
      remoteTypes: ee(f2.path, f2.name),
      remoteTypesZip: f2.zip || ``,
      remoteTypesAPI: f2.api || ``,
      remotesInfo: c2,
      shared: e2?.shared.map((e3) => ({
        assets: e3.assets,
        sharedName: e3.name,
        version: e3.version,
        usedExports: e3.referenceExports || []
      })),
      modules: te2?.map((e3) => ({
        moduleName: e3.name,
        modulePath: e3.path,
        assets: e3.assets
      }))
    };
    if (`publicPath` in e2.metaData ? (a2 = __spreadProps(__spreadValues({}, _2), {
      publicPath: o2()
    }), typeof e2.metaData.ssrPublicPath == `string` && (a2.ssrPublicPath = e2.metaData.ssrPublicPath)) : a2 = __spreadProps(__spreadValues({}, _2), {
      getPublicPath: o2()
    }), g2) {
      let e3 = ee(g2.path, g2.name);
      a2.ssrRemoteEntry = e3, a2.ssrRemoteEntryType = g2.type || `commonjs-module`;
    }
    return a2;
  }
  function te(e2) {
    return !!(`remoteEntry` in e2 && e2.remoteEntry.includes(`.json`));
  }
  var _ = `[ Module Federation ]`, v = console, ne = [
    `logger.ts`,
    `logger.js`,
    `captureStackTrace`,
    `Logger.emit`,
    `Logger.log`,
    `Logger.info`,
    `Logger.warn`,
    `Logger.error`,
    `Logger.debug`
  ];
  function re() {
    try {
      let e2 = Error().stack;
      if (!e2)
        return;
      let [, ...t2] = e2.split(`
`), n2 = t2.filter((e3) => !ne.some((t3) => e3.includes(t3)));
      return n2.length ? `Stack trace:
${n2.slice(0, 5).join(`
`)}` : void 0;
    } catch {
      return;
    }
  }
  var ie = class {
    constructor(e2, t2 = v) {
      this.prefix = e2, this.delegate = t2 ?? v;
    }
    setPrefix(e2) {
      this.prefix = e2;
    }
    setDelegate(e2) {
      this.delegate = e2 ?? v;
    }
    emit(e2, t2) {
      let n2 = this.delegate, r2 = l() ? re() : void 0, i2 = r2 ? [
        ...t2,
        r2
      ] : t2, a2 = (() => {
        switch (e2) {
          case `log`:
            return [
              `log`,
              `info`
            ];
          case `info`:
            return [
              `info`,
              `log`
            ];
          case `warn`:
            return [
              `warn`,
              `info`,
              `log`
            ];
          case `error`:
            return [
              `error`,
              `warn`,
              `log`
            ];
          default:
            return [
              `debug`,
              `log`
            ];
        }
      })();
      for (let e3 of a2) {
        let t3 = n2[e3];
        if (typeof t3 == `function`) {
          t3.call(n2, this.prefix, ...i2);
          return;
        }
      }
      for (let e3 of a2) {
        let t3 = v[e3];
        if (typeof t3 == `function`) {
          t3.call(v, this.prefix, ...i2);
          return;
        }
      }
    }
    log(...e2) {
      this.emit(`log`, e2);
    }
    warn(...e2) {
      this.emit(`warn`, e2);
    }
    error(...e2) {
      this.emit(`error`, e2);
    }
    success(...e2) {
      this.emit(`info`, e2);
    }
    info(...e2) {
      this.emit(`info`, e2);
    }
    ready(...e2) {
      this.emit(`info`, e2);
    }
    debug(...e2) {
      l() && this.emit(`debug`, e2);
    }
  };
  function ae(e2) {
    return new ie(e2);
  }
  function oe(e2) {
    let t2 = new ie(e2);
    return Object.defineProperty(t2, "__mf_infrastructure_logger__", {
      value: true,
      enumerable: false,
      configurable: false
    }), t2;
  }
  ae(_), oe(_);
  async function se(e2, t2) {
    try {
      return await e2();
    } catch (e3) {
      !t2 && p(e3);
      return;
    }
  }
  function ce(e2, t2) {
    let n2 = /^(https?:)?\/\//i;
    return e2.replace(n2, ``).replace(/\/$/, ``) === t2.replace(n2, ``).replace(/\/$/, ``);
  }
  function le(e2) {
    let t2 = null, n2 = true, r2 = 2e4, i2, a2 = document.getElementsByTagName(`script`);
    for (let r3 = 0; r3 < a2.length; r3++) {
      let i3 = a2[r3], o3 = i3.getAttribute(`src`);
      if (o3 && ce(o3, e2.url)) {
        t2 = i3, n2 = false;
        break;
      }
    }
    if (!t2) {
      let n3 = e2.attrs;
      t2 = document.createElement(`script`), t2.type = n3?.type === `module` ? `module` : `text/javascript`;
      let i3;
      e2.createScriptHook && (i3 = e2.createScriptHook(e2.url, e2.attrs), i3 instanceof HTMLScriptElement ? t2 = i3 : typeof i3 == `object` && (`script` in i3 && i3.script && (t2 = i3.script), `timeout` in i3 && i3.timeout && (r2 = i3.timeout))), t2.src || (t2.src = e2.url), n3 && !i3 && Object.keys(n3).forEach((e3) => {
        t2 && (e3 === `async` || e3 === `defer` ? t2[e3] = n3[e3] : t2.getAttribute(e3) || t2.setAttribute(e3, n3[e3]));
      });
    }
    let o2 = null, s2 = typeof window < `u` ? (t3) => {
      if (t3.filename && ce(t3.filename, e2.url)) {
        let n3 = Error(`ScriptExecutionError: Script "${e2.url}" loaded but threw a runtime error during execution: ${t3.message} (${t3.filename}:${t3.lineno}:${t3.colno})`);
        n3.name = `ScriptExecutionError`, o2 = n3;
      }
    } : null;
    s2 && window.addEventListener(`error`, s2);
    let c2 = async (n3, r3) => {
      clearTimeout(i2), s2 && window.removeEventListener(`error`, s2);
      let a3 = () => {
        if (r3?.type === `error`) {
          let t3 = Error(r3?.isTimeout ? `ScriptNetworkError: Script "${e2.url}" timed out.` : `ScriptNetworkError: Failed to load script "${e2.url}" - the script URL is unreachable or the server returned an error (network failure, 404, CORS, etc.)`);
          t3.name = `ScriptNetworkError`, e2?.onErrorCallback && e2?.onErrorCallback(t3);
        } else
          o2 ? e2?.onErrorCallback && e2?.onErrorCallback(o2) : e2?.cb && e2?.cb();
      };
      if (t2 && (t2.onerror = null, t2.onload = null, se(() => {
        let {needDeleteScript: n4 = true} = e2;
        n4 && t2?.parentNode && t2.parentNode.removeChild(t2);
      }), n3 && typeof n3 == `function`)) {
        let e3 = n3(r3);
        if (e3 instanceof Promise) {
          let t3 = await e3;
          return a3(), t3;
        }
        return a3(), e3;
      }
      a3();
    };
    return t2.onerror = c2.bind(null, t2.onerror), t2.onload = c2.bind(null, t2.onload), i2 = setTimeout(() => {
      c2(null, {
        type: `error`,
        isTimeout: true
      });
    }, r2), {
      script: t2,
      needAttach: n2
    };
  }
  function ue(e2) {
    let t2 = null, n2 = true, r2 = 2e4, i2, a2 = document.getElementsByTagName(`link`);
    for (let r3 = 0; r3 < a2.length; r3++) {
      let i3 = a2[r3], o3 = i3.getAttribute(`href`), s2 = i3.getAttribute(`rel`);
      if (o3 && ce(o3, e2.url) && s2 === e2.attrs.rel) {
        t2 = i3, n2 = false;
        break;
      }
    }
    if (!t2) {
      t2 = document.createElement(`link`), t2.setAttribute(`href`, e2.url);
      let n3, i3 = true, a3 = e2.attrs;
      e2.createLinkHook && (n3 = e2.createLinkHook(e2.url, a3), n3 instanceof HTMLLinkElement ? (t2 = n3, i3 = false) : typeof n3 == `object` && (`link` in n3 && n3.link && (t2 = n3.link, i3 = false), `timeout` in n3 && n3.timeout && (r2 = n3.timeout))), a3 && i3 && Object.keys(a3).forEach((e3) => {
        t2 && !t2.getAttribute(e3) && t2.setAttribute(e3, a3[e3]);
      });
    }
    if (!n2)
      return Promise.resolve().then(() => {
        e2?.cb && e2?.cb();
      }), {
        link: t2,
        needAttach: n2
      };
    let o2 = (n3, r3) => {
      i2 && clearTimeout(i2);
      let a3 = () => {
        if (r3?.type === `error`) {
          let t3 = Error(r3?.isTimeout ? `LinkNetworkError: Link "${e2.url}" timed out.` : `LinkNetworkError: Failed to load link "${e2.url}" - the URL is unreachable or the server returned an error.`);
          t3.name = `LinkNetworkError`, e2?.onErrorCallback && e2?.onErrorCallback(t3);
        } else
          e2?.cb && e2?.cb();
      };
      if (t2 && (t2.onerror = null, t2.onload = null, se(() => {
        let {needDeleteLink: n4 = true} = e2;
        n4 && t2?.parentNode && t2.parentNode.removeChild(t2);
      }), n3)) {
        let e3 = n3(r3);
        return a3(), e3;
      }
      a3();
    };
    return t2.onerror = o2.bind(null, t2.onerror), t2.onload = o2.bind(null, t2.onload), i2 = setTimeout(() => {
      o2(null, {
        type: `error`,
        isTimeout: true
      });
    }, r2), {
      link: t2,
      needAttach: n2
    };
  }
  function de(e2, t2) {
    let {attrs: n2 = {}, createScriptHook: r2} = t2;
    return new Promise((t3, i2) => {
      let {script: a2, needAttach: o2} = le({
        url: e2,
        cb: t3,
        onErrorCallback: i2,
        attrs: __spreadValues({
          fetchpriority: `high`
        }, n2),
        createScriptHook: r2,
        needDeleteScript: true
      });
      o2 && document.head.appendChild(a2);
    });
  }
  var fe = (e2) => `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${e2.split(`-`)[0].toLowerCase()}#${e2.toLowerCase()}`, pe = (e2, t2, n2, r2) => {
    let i2 = [
      `${[
        t2[e2]
      ]} #${e2}`
    ];
    return n2 && i2.push(`args: ${JSON.stringify(n2)}`), i2.push(fe(e2)), r2 && i2.push(`Original Error Message:
 ${r2}`), i2.join(`
`);
  };
  function me(e2, t2, n2, r2, i2, a2) {
    return r2(pe(e2, t2, n2, i2));
  }
  var y = `[ Federation Runtime ]`, he = ae(y);
  function b(e2, t2, n2, r2, i2) {
    e2 || (n2 === void 0 ? x(t2) : x(t2, n2, r2, void 0, i2));
  }
  function x(e2, t2, n2, r2, i2) {
    if (t2 !== void 0)
      return me(e2, t2, n2 ?? {}, (e3) => {
        throw Error(`${y}: ${e3}`);
      }, r2, i2);
    let a2 = e2;
    throw a2 instanceof Error ? (a2.message.startsWith(y) || (a2.message = `${y}: ${a2.message}`), a2) : Error(`${y}: ${a2}`);
  }
  function S(e2) {
    e2 instanceof Error && (e2.message.startsWith(y) || (e2.message = `${y}: ${e2.message}`)), he.warn(e2);
  }
  function ge(e2, t2) {
    return e2.findIndex((e3) => e3 === t2) === -1 && e2.push(t2), e2;
  }
  function C(e2) {
    return `version` in e2 && e2.version ? `${e2.name}:${e2.version}` : `entry` in e2 && e2.entry ? `${e2.name}:${e2.entry}` : `${e2.name}`;
  }
  function _e(e2) {
    return e2.entry !== void 0;
  }
  function ve(e2) {
    return !e2.entry.includes(`.json`);
  }
  function ye(e2) {
    return e2 && typeof e2 == `object`;
  }
  var be = Object.prototype.toString;
  function xe(e2) {
    return be.call(e2) === `[object Object]`;
  }
  function Se(e2) {
    return Array.isArray(e2) ? e2 : [
      e2
    ];
  }
  function Ce(e2) {
    return `remoteEntry` in e2 ? {
      url: e2.remoteEntry,
      type: e2.remoteEntryType,
      globalName: e2.globalName
    } : {
      url: ``,
      type: `global`,
      globalName: ``
    };
  }
  var we = (e2, t2) => {
    let n2;
    return n2 = e2.endsWith(`/`) ? e2.slice(0, -1) : e2, t2.startsWith(`.`) && (t2 = t2.slice(1)), n2 += t2, n2;
  }, Te = 2e3, w = typeof globalThis == `object` ? globalThis : window, T = (() => {
    try {
      return document.defaultView;
    } catch {
      return w;
    }
  })(), E = T;
  function Ee(e2, t2, n2) {
    Object.defineProperty(e2, t2, {
      value: n2,
      configurable: false,
      writable: true
    });
  }
  function De(e2, t2) {
    return Object.hasOwnProperty.call(e2, t2);
  }
  De(w, `__GLOBAL_LOADING_REMOTE_ENTRY__`) || Ee(w, `__GLOBAL_LOADING_REMOTE_ENTRY__`, {});
  var D = w.__GLOBAL_LOADING_REMOTE_ENTRY__;
  function Oe(e2) {
    var _a, _b, _c, _d, _e2, _f, _g;
    De(e2, `__VMOK__`) && !De(e2, `__FEDERATION__`) && Ee(e2, `__FEDERATION__`, e2.__VMOK__), De(e2, `__FEDERATION__`) || (Ee(e2, `__FEDERATION__`, {
      __GLOBAL_PLUGIN__: [],
      __INSTANCES__: [],
      moduleInfo: {},
      __SHARE__: {},
      __MANIFEST_LOADING__: {},
      __PRELOADED_MAP__: new Map(),
      __PRELOADED_ASSETS__: new Set()
    }), Ee(e2, `__VMOK__`, e2.__FEDERATION__)), (_a = e2.__FEDERATION__).__GLOBAL_PLUGIN__ ?? (_a.__GLOBAL_PLUGIN__ = []), (_b = e2.__FEDERATION__).__INSTANCES__ ?? (_b.__INSTANCES__ = []), (_c = e2.__FEDERATION__).moduleInfo ?? (_c.moduleInfo = {}), (_d = e2.__FEDERATION__).__SHARE__ ?? (_d.__SHARE__ = {}), (_e2 = e2.__FEDERATION__).__MANIFEST_LOADING__ ?? (_e2.__MANIFEST_LOADING__ = {}), (_f = e2.__FEDERATION__).__PRELOADED_MAP__ ?? (_f.__PRELOADED_MAP__ = new Map()), (_g = e2.__FEDERATION__).__PRELOADED_ASSETS__ ?? (_g.__PRELOADED_ASSETS__ = new Set());
  }
  Oe(w), Oe(T);
  function ke() {
    w.__FEDERATION__.__GLOBAL_PLUGIN__ = [], w.__FEDERATION__.__INSTANCES__ = [], w.__FEDERATION__.moduleInfo = {}, w.__FEDERATION__.__SHARE__ = {}, w.__FEDERATION__.__MANIFEST_LOADING__ = {}, w.__FEDERATION__.__PRELOADED_ASSETS__.clear(), Object.keys(D).forEach((e2) => {
      delete D[e2];
    });
  }
  function Ae(e2) {
    w.__FEDERATION__.__INSTANCES__.push(e2);
  }
  function je() {
    return w.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
  }
  function Me(e2, t2 = l()) {
    t2 && (w.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = e2, w.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = `2.9.0`);
  }
  function O(e2, t2) {
    if (typeof t2 == `string`) {
      if (e2[t2])
        return {
          value: e2[t2],
          key: t2
        };
      {
        let n2 = Object.keys(e2);
        for (let r2 of n2) {
          let [n3, i2] = r2.split(`:`), a2 = `${n3}:${t2}`, o2 = e2[a2];
          if (o2)
            return {
              value: o2,
              key: a2
            };
        }
        return {
          value: void 0,
          key: t2
        };
      }
    }
    x(`getInfoWithoutType: "key" must be a string, got ${typeof t2} (${JSON.stringify(t2)}).`);
  }
  var Ne = () => T.__FEDERATION__.moduleInfo, Pe = (e2, t2) => {
    let n2 = O(t2, C(e2)).value;
    if (n2 && !n2.version && `version` in e2 && e2.version && (n2.version = e2.version), n2)
      return n2;
    if (`version` in e2 && e2.version) {
      let _a = e2, {version: t3} = _a, n3 = __objRest(_a, ["version"]), r2 = C(n3), i2 = O(T.__FEDERATION__.moduleInfo, r2).value;
      if (i2?.version === t3)
        return i2;
    }
  }, k = (e2) => Pe(e2, T.__FEDERATION__.moduleInfo), Fe = (e2, t2) => {
    let n2 = C(e2);
    return T.__FEDERATION__.moduleInfo[n2] = t2, T.__FEDERATION__.moduleInfo;
  }, Ie = (e2) => (T.__FEDERATION__.moduleInfo = __spreadValues(__spreadValues({}, T.__FEDERATION__.moduleInfo), e2), () => {
    let t2 = Object.keys(e2);
    for (let e3 of t2)
      delete T.__FEDERATION__.moduleInfo[e3];
  }), Le = (e2, t2) => {
    let n2 = t2 || `__FEDERATION_${e2}:custom__`;
    return {
      remoteEntryKey: n2,
      entryExports: w[n2]
    };
  }, Re = (e2) => {
    let {__GLOBAL_PLUGIN__: t2} = T.__FEDERATION__;
    e2.forEach((e3) => {
      t2.findIndex((t3) => t3.name === e3.name) === -1 ? t2.push(e3) : S(`The plugin ${e3.name} has been registered.`);
    });
  }, ze = () => T.__FEDERATION__.__GLOBAL_PLUGIN__, Be = (e2) => w.__FEDERATION__.__PRELOADED_MAP__.get(e2), Ve = (e2) => w.__FEDERATION__.__PRELOADED_MAP__.set(e2, true), He = (e2) => w.__FEDERATION__.__PRELOADED_ASSETS__.has(e2), Ue = (e2) => {
    let t2 = w.__FEDERATION__.__PRELOADED_ASSETS__;
    if (t2.add(e2), t2.size > Te) {
      let e3 = t2.values().next().value;
      e3 !== void 0 && t2.delete(e3);
    }
  }, We = `[0-9A-Za-z-]+`, Ge = `(?:\\+(${We}(?:\\.${We})*))`, A = `0|[1-9]\\d*`, j = `[0-9]+`, Ke = `\\d*[a-zA-Z-][a-zA-Z0-9-]*`, qe = `(?:${j}|${Ke})`, Je = `(?:-?(${qe}(?:\\.${qe})*))`, Ye = `(?:${A}|${Ke})`, Xe = `(?:-(${Ye}(?:\\.${Ye})*))`, Ze = `${A}|x|X|\\*`, M = `[v=\\s]*(${Ze})(?:\\.(${Ze})(?:\\.(${Ze})(?:${Xe})?${Ge}?)?)?`, Qe = `^\\s*(${M})\\s+-\\s+(${M})\\s*$`, $e = `[v=\\s]*${`(${j})\\.(${j})\\.(${j})`}${Je}?${Ge}?`, et = `((?:<|>)?=?)`, tt = `(\\s*)${et}\\s*(${$e}|${M})`, nt = `(?:~>?)`, rt = `(\\s*)${nt}\\s+`, it = `(?:\\^)`, at = `(\\s*)${it}\\s+`, ot = `(<|>)?=?\\s*\\*`, st = `^${it}${M}$`, ct = `v?${`(${A})\\.(${A})\\.(${A})`}${Xe}?${Ge}?`, lt = `^${nt}${M}$`, ut = `^${et}\\s*${M}$`, dt = `^${et}\\s*(${ct})$|^$`, ft = `^\\s*>=\\s*0.0.0\\s*$`;
  function N(e2) {
    return new RegExp(e2);
  }
  function P(e2) {
    return !e2 || e2.toLowerCase() === `x` || e2 === `*`;
  }
  function pt(...e2) {
    return (t2) => e2.reduce((e3, t3) => t3(e3), t2);
  }
  function mt(e2) {
    return e2.match(N(dt));
  }
  function ht(e2, t2, n2, r2) {
    let i2 = `${e2}.${t2}.${n2}`;
    return r2 ? `${i2}-${r2}` : i2;
  }
  function gt(e2) {
    return e2.replace(N(Qe), (e3, t2, n2, r2, i2, a2, o2, s2, c2, l2, u2, d2) => (t2 = P(n2) ? `` : P(r2) ? `>=${n2}.0.0` : P(i2) ? `>=${n2}.${r2}.0` : `>=${t2}`, s2 = P(c2) ? `` : P(l2) ? `<${Number(c2) + 1}.0.0-0` : P(u2) ? `<${c2}.${Number(l2) + 1}.0-0` : d2 ? `<=${c2}.${l2}.${u2}-${d2}` : `<=${s2}`, `${t2} ${s2}`.trim()));
  }
  function _t(e2) {
    return e2.replace(N(tt), `$1$2$3`);
  }
  function vt(e2) {
    return e2.replace(N(rt), `$1~`);
  }
  function yt(e2) {
    return e2.replace(N(at), `$1^`);
  }
  function bt(e2) {
    return e2.trim().split(/\s+/).map((e3) => e3.replace(N(st), (e4, t2, n2, r2, i2) => P(t2) ? `` : P(n2) ? `>=${t2}.0.0 <${Number(t2) + 1}.0.0-0` : P(r2) ? t2 === `0` ? `>=${t2}.${n2}.0 <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.0 <${Number(t2) + 1}.0.0-0` : i2 ? t2 === `0` ? n2 === `0` ? `>=${t2}.${n2}.${r2}-${i2} <${t2}.${n2}.${Number(r2) + 1}-0` : `>=${t2}.${n2}.${r2}-${i2} <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.${r2}-${i2} <${Number(t2) + 1}.0.0-0` : t2 === `0` ? n2 === `0` ? `>=${t2}.${n2}.${r2} <${t2}.${n2}.${Number(r2) + 1}-0` : `>=${t2}.${n2}.${r2} <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.${r2} <${Number(t2) + 1}.0.0-0`)).join(` `);
  }
  function xt(e2) {
    return e2.trim().split(/\s+/).map((e3) => e3.replace(N(lt), (e4, t2, n2, r2, i2) => P(t2) ? `` : P(n2) ? `>=${t2}.0.0 <${Number(t2) + 1}.0.0-0` : P(r2) ? `>=${t2}.${n2}.0 <${t2}.${Number(n2) + 1}.0-0` : i2 ? `>=${t2}.${n2}.${r2}-${i2} <${t2}.${Number(n2) + 1}.0-0` : `>=${t2}.${n2}.${r2} <${t2}.${Number(n2) + 1}.0-0`)).join(` `);
  }
  function St(e2) {
    return e2.split(/\s+/).map((e3) => e3.trim().replace(N(ut), (e4, t2, n2, r2, i2, a2) => {
      let o2 = P(n2), s2 = o2 || P(r2), c2 = s2 || P(i2);
      return t2 === `=` && c2 && (t2 = ``), a2 = ``, o2 ? t2 === `>` || t2 === `<` ? `<0.0.0-0` : `*` : t2 && c2 ? (s2 && (r2 = 0), i2 = 0, t2 === `>` ? (t2 = `>=`, s2 ? (n2 = Number(n2) + 1, r2 = 0, i2 = 0) : (r2 = Number(r2) + 1, i2 = 0)) : t2 === `<=` && (t2 = `<`, s2 ? n2 = Number(n2) + 1 : r2 = Number(r2) + 1), t2 === `<` && (a2 = `-0`), `${t2 + n2}.${r2}.${i2}${a2}`) : s2 ? `>=${n2}.0.0${a2} <${Number(n2) + 1}.0.0-0` : c2 ? `>=${n2}.${r2}.0${a2} <${n2}.${Number(r2) + 1}.0-0` : e4;
    })).join(` `);
  }
  function Ct(e2) {
    return e2.trim().replace(N(ot), ``);
  }
  function wt(e2) {
    return e2.trim().replace(N(ft), ``);
  }
  function Tt(e2, t2) {
    return e2 = Number(e2) || e2, t2 = Number(t2) || t2, e2 > t2 ? 1 : e2 === t2 ? 0 : -1;
  }
  function Et(e2, t2) {
    let {preRelease: n2} = e2, {preRelease: r2} = t2;
    if (n2 === void 0 && r2)
      return 1;
    if (n2 && r2 === void 0)
      return -1;
    if (n2 === void 0 && r2 === void 0)
      return 0;
    for (let e3 = 0, t3 = n2.length; e3 <= t3; e3++) {
      let t4 = n2[e3], i2 = r2[e3];
      if (t4 !== i2)
        return t4 === void 0 && i2 === void 0 ? 0 : t4 ? i2 ? Tt(t4, i2) : -1 : 1;
    }
    return 0;
  }
  function Dt(e2, t2) {
    return Tt(e2.major, t2.major) || Tt(e2.minor, t2.minor) || Tt(e2.patch, t2.patch) || Et(e2, t2);
  }
  function Ot(e2, t2) {
    return e2.version === t2.version;
  }
  function kt(e2, t2) {
    switch (e2.operator) {
      case ``:
      case `=`:
        return Ot(e2, t2);
      case `>`:
        return Dt(e2, t2) < 0;
      case `>=`:
        return Ot(e2, t2) || Dt(e2, t2) < 0;
      case `<`:
        return Dt(e2, t2) > 0;
      case `<=`:
        return Ot(e2, t2) || Dt(e2, t2) > 0;
      case void 0:
        return true;
      default:
        return false;
    }
  }
  function At(e2) {
    return pt(bt, xt, St, Ct)(e2);
  }
  function jt(e2) {
    return pt(gt, _t, vt, yt)(e2.trim()).split(/\s+/).join(` `);
  }
  function F(e2, t2) {
    if (!e2)
      return false;
    let n2 = mt(e2);
    if (!n2)
      return false;
    let [, r2, , i2, a2, o2, s2] = n2, c2 = {
      operator: r2,
      version: ht(i2, a2, o2, s2),
      major: i2,
      minor: a2,
      patch: o2,
      preRelease: s2?.split(`.`)
    }, l2 = t2.split(`||`);
    for (let e3 of l2) {
      let t3 = e3.trim();
      if (!t3 || t3 === `*` || t3 === `x`)
        return true;
      try {
        let e4 = jt(t3);
        if (!e4.trim())
          return true;
        let n3 = e4.split(` `).map((e5) => At(e5)).join(` `);
        if (!n3.trim())
          return true;
        let r3 = n3.split(/\s+/).map((e5) => wt(e5)).filter(Boolean);
        if (r3.length === 0)
          continue;
        let i3 = true;
        for (let e5 of r3) {
          let t4 = mt(e5);
          if (!t4) {
            i3 = false;
            break;
          }
          let [, n4, , r4, a3, o3, s3] = t4;
          if (!kt({
            operator: n4,
            version: ht(r4, a3, o3, s3),
            major: r4,
            minor: a3,
            patch: o3,
            preRelease: s3?.split(`.`)
          }, c2)) {
            i3 = false;
            break;
          }
        }
        if (i3)
          return true;
      } catch (e4) {
        console.error(`[semver] Error processing range part "${t3}":`, e4);
        continue;
      }
    }
    return false;
  }
  var Mt = `default`, Nt = `global`;
  function Pt(e2, t2, n2, r2) {
    let i2;
    return i2 = `get` in e2 ? e2.get : `lib` in e2 ? () => Promise.resolve(e2.lib) : () => Promise.resolve(() => {
      x(`Cannot get shared "${n2}" from "${t2}": neither "get" nor "lib" is provided in the share config.`);
    }), e2.shareConfig?.eager && e2.treeShaking?.mode && x(`Invalid shared config for "${n2}" from "${t2}": cannot use both "eager: true" and "treeShaking.mode" simultaneously. Choose one strategy.`), __spreadProps(__spreadValues({
      deps: [],
      useIn: [],
      from: t2,
      loading: null
    }, e2), {
      shareConfig: __spreadValues({
        requiredVersion: `^${e2.version}`,
        singleton: false,
        eager: false,
        strictVersion: false
      }, e2.shareConfig),
      get: i2,
      loaded: e2?.loaded || `lib` in e2 ? true : void 0,
      version: e2.version ?? `0`,
      scope: Array.isArray(e2.scope) ? e2.scope : [
        e2.scope ?? `default`
      ],
      strategy: (e2.strategy ?? r2) || `version-first`,
      treeShaking: e2.treeShaking ? __spreadProps(__spreadValues({}, e2.treeShaking), {
        mode: e2.treeShaking.mode ?? `server-calc`,
        status: e2.treeShaking.status ?? a.UNKNOWN,
        useIn: []
      }) : void 0
    });
  }
  function Ft(e2, t2) {
    let n2 = t2.shared || {}, r2 = t2.name, i2 = Object.keys(n2).reduce((e3, i3) => {
      let a3 = Se(n2[i3]);
      return e3[i3] = e3[i3] || [], a3.forEach((n3) => {
        e3[i3].push(Pt(n3, r2, i3, t2.shareStrategy));
      }), e3;
    }, {}), a2 = __spreadValues({}, e2.shared);
    return Object.keys(i2).forEach((e3) => {
      a2[e3] ? i2[e3].forEach((t3) => {
        a2[e3].find((e4) => e4.version === t3.version) || a2[e3].push(t3);
      }) : a2[e3] = i2[e3];
    }), {
      allShareInfos: a2,
      newShareInfos: i2
    };
  }
  function I(e2, t2) {
    if (!e2)
      return false;
    let {status: n2, mode: r2} = e2;
    return n2 === a.NO_USE ? false : n2 === a.CALCULATED ? true : r2 === `runtime-infer` ? !t2 || Rt(e2, t2) : false;
  }
  function L(e2, t2) {
    let n2 = (e3) => {
      if (!Number.isNaN(Number(e3))) {
        let t3 = e3.split(`.`), n3 = e3;
        for (let e4 = 0; e4 < 3 - t3.length; e4++)
          n3 += `.0`;
        return n3;
      }
      return e3;
    };
    return !!F(n2(e2), `<=${n2(t2)}`);
  }
  var R = (e2, t2) => {
    let n2 = t2 || function(e3, t3) {
      return L(e3, t3);
    };
    return Object.keys(e2).reduce((e3, t3) => !e3 || n2(e3, t3) || e3 === `0` ? t3 : e3, 0);
  }, It = (e2) => !!e2.loaded || typeof e2.lib == `function`, Lt = (e2) => !!e2.loading, Rt = (e2, t2) => {
    if (!e2 || !t2)
      return false;
    let {usedExports: n2} = e2;
    return n2 ? !!t2.every((e3) => n2.includes(e3)) : false;
  };
  function zt(e2, t2, n2, r2) {
    let i2 = e2[t2][n2], a2 = ``, o2 = I(r2), s2 = function(e3, t3) {
      return o2 ? i2[e3].treeShaking ? i2[t3].treeShaking ? !It(i2[e3].treeShaking) && L(e3, t3) : false : true : !It(i2[e3]) && L(e3, t3);
    };
    if (o2) {
      if (a2 = R(e2[t2][n2], s2), a2)
        return {
          version: a2,
          useTreesShaking: o2
        };
      o2 = false;
    }
    return {
      version: R(e2[t2][n2], s2),
      useTreesShaking: o2
    };
  }
  var z = (e2) => It(e2) || Lt(e2);
  function Bt(e2, t2, n2, r2) {
    let i2 = e2[t2][n2], a2 = ``, o2 = I(r2), s2 = function(e3, t3) {
      if (o2) {
        if (!i2[e3].treeShaking)
          return true;
        if (!i2[t3].treeShaking)
          return false;
        if (z(i2[t3].treeShaking))
          return !z(i2[e3].treeShaking) || !!L(e3, t3);
        if (z(i2[e3].treeShaking))
          return false;
      }
      return z(i2[t3]) ? !z(i2[e3]) || !!L(e3, t3) : !z(i2[e3]) && L(e3, t3);
    };
    if (o2) {
      if (a2 = R(e2[t2][n2], s2), a2)
        return {
          version: a2,
          useTreesShaking: o2
        };
      o2 = false;
    }
    return {
      version: R(e2[t2][n2], s2),
      useTreesShaking: o2
    };
  }
  function Vt(e2) {
    return e2 === `loaded-first` ? Bt : zt;
  }
  function B(e2, t2, n2, r2, i2) {
    if (!e2)
      return;
    let {shareConfig: a2, scope: o2 = Mt, strategy: s2, treeShaking: c2} = n2, l2 = Array.isArray(o2) ? o2 : [
      o2
    ];
    for (let o3 of l2)
      if (a2 && e2[o3] && e2[o3][t2]) {
        let {requiredVersion: l3} = a2, {version: u2, useTreesShaking: d2} = Vt(s2)(e2, o3, t2, c2), f2 = {
          shareScopeMap: e2,
          scope: o3,
          pkgName: t2,
          version: u2,
          GlobalFederation: E.__FEDERATION__,
          shareInfo: n2,
          resolver: () => {
            let r3 = e2[o3][t2][u2];
            if (a2.singleton) {
              if (typeof l3 == `string` && !F(u2, l3)) {
                let e3 = `Version ${u2} from ${u2 && r3.from} of shared singleton module ${t2} does not satisfy the requirement of ${n2.from} which needs ${l3})`;
                a2.strictVersion ? x(e3) : S(e3);
              }
              return {
                shared: r3,
                useTreesShaking: d2
              };
            }
            {
              if (l3 === false || l3 === `*` || F(u2, l3))
                return {
                  shared: r3,
                  useTreesShaking: d2
                };
              let n3 = I(c2);
              if (n3) {
                for (let [r4, i3] of Object.entries(e2[o3][t2]))
                  if (I(i3.treeShaking, c2?.usedExports) && F(r4, l3))
                    return {
                      shared: i3,
                      useTreesShaking: n3
                    };
              }
              for (let [n4, r4] of Object.entries(e2[o3][t2]))
                if (F(n4, l3))
                  return {
                    shared: r4,
                    useTreesShaking: false
                  };
            }
          },
          loadContext: i2
        };
        return (r2.emit(f2) || f2).resolver();
      }
  }
  function Ht() {
    return E.__FEDERATION__.__SHARE__;
  }
  function Ut(e2) {
    let {pkgName: t2, extraOptions: n2, shareInfos: r2} = e2, i2 = n2?.resolver ?? ((e3) => {
      if (!e3)
        return;
      let t3 = {};
      return e3.forEach((e4) => {
        t3[e4.version] = e4;
      }), t3[R(t3, function(e4, n3) {
        return !It(t3[e4]) && L(e4, n3);
      })];
    }), a2 = (e3) => typeof e3 == `object` && !!e3 && !Array.isArray(e3), o2 = (...e3) => {
      let t3 = {};
      for (let n3 of e3)
        if (n3)
          for (let [e4, r3] of Object.entries(n3)) {
            let n4 = t3[e4];
            a2(n4) && a2(r3) ? t3[e4] = o2(n4, r3) : r3 !== void 0 && (t3[e4] = r3);
          }
      return t3;
    };
    return o2(i2(r2[t2]), n2?.customShareInfo);
  }
  var V = (e2, t2) => {
    e2.useIn || (e2.useIn = []), ge(e2.useIn, t2);
  };
  function Wt(e2, t2) {
    return t2 && e2.treeShaking ? e2.treeShaking : e2;
  }
  function Gt(e2, t2) {
    return !t2 || t2 === `.` ? e2 : `${e2}/${t2.replace(/^\.\//, ``)}`;
  }
  function Kt(e2, t2) {
    for (let n2 of e2) {
      let e3 = t2.startsWith(n2.name), r2 = t2.replace(n2.name, ``);
      if (e3) {
        if (r2.startsWith(`/`)) {
          let e4 = n2.name;
          return r2 = `.${r2}`, {
            pkgNameOrAlias: e4,
            expose: r2,
            remote: n2
          };
        }
        if (r2 === ``)
          return {
            pkgNameOrAlias: n2.name,
            expose: `.`,
            remote: n2
          };
      }
      let i2 = n2.alias && t2.startsWith(n2.alias), a2 = n2.alias && t2.replace(n2.alias, ``);
      if (n2.alias && i2) {
        if (a2 && a2.startsWith(`/`)) {
          let e4 = n2.alias;
          return a2 = `.${a2}`, {
            pkgNameOrAlias: e4,
            expose: a2,
            remote: n2
          };
        }
        if (a2 === ``)
          return {
            pkgNameOrAlias: n2.alias,
            expose: `.`,
            remote: n2
          };
      }
    }
  }
  function qt(e2, t2) {
    for (let n2 of e2)
      if (t2 === n2.name || n2.alias && t2 === n2.alias)
        return n2;
  }
  var Jt = `RUNTIME-001`, Yt = `RUNTIME-002`, Xt = `RUNTIME-003`, Zt = `RUNTIME-004`, Qt = `RUNTIME-005`, $t = `RUNTIME-006`, en = `RUNTIME-007`, tn = `RUNTIME-008`, nn = `RUNTIME-009`, rn = `RUNTIME-010`, an = `RUNTIME-011`, on = `RUNTIME-012`, sn = `RUNTIME-013`, cn = `RUNTIME-014`, ln = `RUNTIME-015`, un = `TYPE-001`, dn = `BUILD-001`, fn = `BUILD-002`, H = {
    [Jt]: `Failed to get remoteEntry exports.`,
    [Yt]: `The remote entry interface does not contain "init"`,
    [Xt]: `Failed to get manifest.`,
    [Zt]: `Failed to locate remote.`,
    [Qt]: `Invalid loadShareSync function call from bundler runtime`,
    [$t]: `Invalid loadShareSync function call from runtime`,
    [en]: `Failed to get remote snapshot.`,
    [tn]: `Failed to load script resources.`,
    [nn]: `Please call createInstance first.`,
    [rn]: `The name option cannot be changed after initialization. If you want to create a new instance with a different name, please use "createInstance" api.`,
    [an]: `The remoteEntry URL is missing from the remote snapshot.`,
    [on]: `The getter for the shared module is not a function. This may be caused by setting "shared.import: false" without the host providing the corresponding lib.`,
    [sn]: `The manifest is not a valid Module Federation manifest.`,
    [cn]: `The remote does not expose the requested module.`,
    [ln]: `Remote container initialization failed.`
  }, pn = {
    [un]: `Failed to generate type declaration. Execute the below cmd to reproduce and fix the error.`
  }, mn = {
    [dn]: `Failed to find expose module.`,
    [fn]: `PublicPath is required in prod mode.`
  };
  __spreadValues(__spreadValues(__spreadValues({}, H), pn), mn), e();
  var hn = `.then(callbacks[0]).catch(callbacks[1])`, gn = new WeakMap(), _n = [
    `Failed to fetch dynamically imported module`,
    `Importing a module script failed`,
    `error loading dynamically imported module`
  ];
  function vn(e2) {
    return e2 instanceof TypeError && _n.some((t2) => e2.message.includes(t2));
  }
  function yn(e2) {
    return e2 === `esm` || e2 === `module`;
  }
  async function bn({entry: e2, remoteEntryExports: n2, name: r2, getEntryUrl: i2}) {
    return new Promise((a2, o2) => {
      let s2 = (e3) => {
        if (vn(e3)) {
          let t2 = e3 instanceof Error ? e3.message : String(e3);
          try {
            x(tn, H, {
              remoteName: r2,
              resourceUrl: c2
            }, t2);
          } catch (e4) {
            o2(e4);
            return;
          }
        }
        o2(e3);
      }, c2 = i2 ? i2(e2) : e2;
      try {
        n2 ? a2(n2) : typeof FEDERATION_ALLOW_NEW_FUNCTION < `u` ? Function(`callbacks`, `import("${c2}")${hn}`)([
          a2,
          s2
        ]) : t(() => import(c2).then(async (m2) => {
          await m2.__tla;
          return m2;
        }).then(a2), [], import.meta.url).catch(s2);
      } catch (e3) {
        x(`Failed to load ESM entry from "${c2}". ${e3 instanceof Error ? e3.message : String(e3)}`);
      }
    });
  }
  async function xn({entry: e2, remoteEntryExports: t2}) {
    return new Promise((n2, r2) => {
      try {
        t2 ? n2(t2) : typeof __system_context__ > `u` ? System.import(e2).then(n2).catch(r2) : Function(`callbacks`, `System.import("${e2}")${hn}`)([
          n2,
          r2
        ]);
      } catch (t3) {
        x(`Failed to load SystemJS entry from "${e2}". ${t3 instanceof Error ? t3.message : String(t3)}`);
      }
    });
  }
  function Sn(e2, t2, n2) {
    let {remoteEntryKey: r2, entryExports: i2} = Le(e2, t2);
    return i2 || x(Jt, H, {
      remoteName: e2,
      remoteEntryUrl: n2,
      remoteEntryKey: r2
    }), i2;
  }
  async function Cn({name: e2, globalName: t2, entry: n2, remoteInfo: r2, loaderHook: i2, getEntryUrl: a2, resourceContext: o2}) {
    let {entryExports: s2} = Le(e2, t2);
    if (s2)
      return s2;
    let c2 = a2 ? a2(n2) : n2;
    return de(c2, {
      attrs: {},
      createScriptHook: (e3, t3) => {
        let n3 = i2.lifecycle.createScript.emit({
          url: e3,
          attrs: t3,
          remoteInfo: r2,
          resourceContext: o2 ? __spreadProps(__spreadValues({}, o2), {
            url: e3
          }) : void 0
        });
        if (n3 && (n3 instanceof HTMLScriptElement || `script` in n3 || `timeout` in n3))
          return n3;
      }
    }).then(() => Sn(e2, t2, n2), (t3) => {
      let n3 = t3 instanceof Error ? t3.message : String(t3);
      x(tn, H, {
        remoteName: e2,
        resourceUrl: c2
      }, n3);
    });
  }
  async function wn({remoteInfo: e2, remoteEntryExports: t2, loaderHook: n2, getEntryUrl: r2, resourceContext: i2}) {
    let {entry: a2, entryGlobalName: o2, name: s2, type: c2} = e2;
    return yn(c2) ? bn({
      entry: a2,
      remoteEntryExports: t2,
      name: s2,
      getEntryUrl: r2
    }) : c2 === `system` ? xn({
      entry: a2,
      remoteEntryExports: t2
    }) : Cn({
      entry: a2,
      globalName: o2,
      name: s2,
      remoteInfo: e2,
      loaderHook: n2,
      getEntryUrl: r2,
      resourceContext: i2
    });
  }
  function Tn(e2) {
    let {entry: t2, name: n2} = e2;
    return d(n2, t2);
  }
  async function En(e2) {
    let {origin: t2, remoteEntryExports: n2, remoteInfo: r2, getEntryUrl: i2, resourceContext: a2, _inErrorHandling: o2 = false} = e2, s2 = Tn(r2);
    if (n2)
      return await t2.loaderHook.lifecycle.afterLoadEntry.emit({
        origin: t2,
        remoteInfo: r2,
        remoteEntryExports: n2,
        resourceContext: a2,
        cached: true
      }), n2;
    if (!D[s2]) {
      let e3 = t2.remoteHandler.hooks.lifecycle.loadEntry, c3 = t2.loaderHook;
      D[s2] = e3.emit({
        origin: t2,
        loaderHook: c3,
        remoteInfo: r2,
        remoteEntryExports: n2,
        resourceContext: a2
      }).then((e4) => e4 || wn({
        remoteInfo: r2,
        remoteEntryExports: n2,
        loaderHook: c3,
        getEntryUrl: i2,
        resourceContext: a2
      })).then(async (e4) => (await t2.loaderHook.lifecycle.afterLoadEntry.emit({
        origin: t2,
        remoteInfo: r2,
        remoteEntryExports: e4,
        resourceContext: a2
      }), e4)).catch(async (e4) => {
        let i3 = e4 instanceof Error && e4.message.includes(`ScriptExecutionError`);
        if (e4 instanceof Error && e4.message.includes(`RUNTIME-008`) && !i3 && !o2) {
          let i4 = await t2.loaderHook.lifecycle.loadEntryError.emit({
            getRemoteEntry: (e5) => En(__spreadProps(__spreadValues({}, e5), {
              _inErrorHandling: true
            })),
            origin: t2,
            remoteInfo: r2,
            remoteEntryExports: n2,
            globalLoading: D,
            uniqueKey: s2
          });
          if (i4)
            return await t2.loaderHook.lifecycle.afterLoadEntry.emit({
              origin: t2,
              remoteInfo: r2,
              remoteEntryExports: i4,
              resourceContext: a2,
              error: e4,
              recovered: true
            }), i4;
        }
        throw await t2.loaderHook.lifecycle.afterLoadEntry.emit({
          origin: t2,
          remoteInfo: r2,
          resourceContext: a2,
          error: e4
        }), e4;
      }), gn.set(D[s2], t2);
    }
    let c2 = D[s2];
    if (gn.get(c2) !== t2)
      try {
        let e3 = await c2;
        return await t2.loaderHook.lifecycle.afterLoadEntry.emit({
          origin: t2,
          remoteInfo: r2,
          remoteEntryExports: e3,
          resourceContext: a2
        }), e3;
      } catch (e3) {
        throw await t2.loaderHook.lifecycle.afterLoadEntry.emit({
          origin: t2,
          remoteInfo: r2,
          resourceContext: a2,
          error: e3
        }), e3;
      }
    return c2;
  }
  function U(e2) {
    return __spreadProps(__spreadValues({}, e2), {
      entry: `entry` in e2 ? e2.entry : ``,
      type: e2.type || `global`,
      entryGlobalName: e2.entryGlobalName || e2.name,
      shareScope: e2.shareScope || `default`
    });
  }
  function Dn() {
    return typeof FEDERATION_BUILD_IDENTIFIER < `u` ? FEDERATION_BUILD_IDENTIFIER : ``;
  }
  function On(e2) {
    let t2 = new Map();
    return [
      ...e2 || [],
      ...ze()
    ].forEach((e3) => {
      e3 && (b(xe(e3), `Plugin configuration is invalid.`), b(e3.name, `A name must be provided by the plugin.`), t2.has(e3.name) || t2.set(e3.name, e3));
    }), Array.from(t2.values());
  }
  function kn(e2, t2) {
    return t2 === void 0 ? e2 : __spreadProps(__spreadValues({}, t2), {
      name: e2.name,
      version: e2.version
    });
  }
  function An(e2, t2) {
    let n2 = new Map();
    t2.options.plugins.forEach((e3) => {
      e3 && n2.set(e3.name, e3);
    });
    let r2 = [
      t2.hooks,
      t2.remoteHandler.hooks,
      t2.sharedHandler.hooks,
      t2.snapshotHandler.hooks,
      t2.loaderHook,
      t2.bridgeHook
    ];
    return On(e2).forEach((e3) => {
      if (n2.set(e3.name, e3), t2.hooks.registerPlugins[e3.name])
        return;
      let i2 = kn(e3, e3.apply?.(t2));
      r2.forEach((e4) => {
        e4.applyPlugin(i2);
      });
    }), Array.from(n2.values());
  }
  function jn(e2) {
    return {
      name: e2.name,
      alias: e2.alias,
      entry: `entry` in e2 ? e2.entry : void 0,
      version: `version` in e2 ? e2.version : void 0,
      type: e2.type,
      entryGlobalName: e2.entryGlobalName,
      shareScope: e2.shareScope
    };
  }
  function W(e2) {
    let t2 = {};
    for (let [n2, r2] of Object.entries(e2.shared)) {
      let e3 = r2[0];
      e3 && (t2[n2] = {
        version: e3.version,
        singleton: e3.shareConfig?.singleton,
        requiredVersion: e3.shareConfig?.requiredVersion !== false && e3.shareConfig?.requiredVersion,
        eager: e3.eager,
        strictVersion: e3.shareConfig?.strictVersion
      });
    }
    return {
      project: {
        name: e2.name,
        mfRole: e2.remotes?.length > 0 ? `host` : `unknown`
      },
      mfConfig: {
        name: e2.name,
        remotes: e2.remotes?.map(jn) ?? [],
        shared: t2
      }
    };
  }
  function Mn(e2) {
    return __spreadValues({
      resourceCategory: `sync`,
      share: true,
      depsRemote: true,
      recordPreloadedAssets: true
    }, e2);
  }
  function Nn(e2, t2) {
    return t2.map((t3) => {
      let n2 = qt(e2, t3.nameOrAlias);
      return b(n2, `Unable to preload ${t3.nameOrAlias} as it is not included in ${!n2 && m({
        remoteInfo: n2,
        remotes: e2
      })}`), {
        remote: n2,
        preloadConfig: Mn(t3)
      };
    });
  }
  function Pn(e2) {
    return e2 ? e2.map((e3) => e3 === `.` ? e3 : e3.startsWith(`./`) ? e3.replace(`./`, ``) : e3) : [];
  }
  function Fn(e2) {
    return e2 instanceof Error ? e2.message.includes(`timed out`) || e2.name.includes(`Timeout`) : false;
  }
  function G(e2, t2, n2, r2) {
    return {
      url: t2,
      status: n2,
      resourceType: e2.resourceType,
      initiator: e2.initiator,
      id: e2.id,
      error: r2
    };
  }
  function In(e2, t2, n2, r2) {
    return n2 ? He(t2) ? Promise.resolve(G(e2, t2, `cached`)) : (Ue(t2), r2()) : r2();
  }
  async function Ln(e2, t2, n2, r2) {
    let i2 = e2.moduleCache.get(n2.name), a2 = n2.entry;
    if (i2?.remoteEntryExports)
      return G(r2, a2, `cached`);
    try {
      if (!await En({
        origin: e2,
        remoteInfo: n2,
        remoteEntryExports: i2?.remoteEntryExports,
        resourceContext: __spreadProps(__spreadValues({}, r2), {
          url: a2
        })
      }))
        throw Error(`Failed to load remoteEntry "${a2}".`);
      return G(r2, a2, `success`);
    } catch (e3) {
      return G(r2, a2, Fn(e3) ? `timeout` : `error`, e3);
    }
  }
  function K({host: e2, remoteInfo: t2, url: n2, attrs: r2, context: i2, needDeleteLink: a2}) {
    return new Promise((o2) => {
      let {link: s2, needAttach: c2} = ue({
        url: n2,
        cb: () => {
          o2(G(i2, n2, c2 ? `success` : `cached`));
        },
        onErrorCallback: (e3) => {
          o2(G(i2, n2, Fn(e3) ? `timeout` : `error`, e3));
        },
        attrs: r2,
        createLinkHook: (n3, r3) => {
          let a3 = e2.loaderHook.lifecycle.createLink.emit({
            url: n3,
            attrs: r3,
            remoteInfo: t2,
            resourceContext: __spreadProps(__spreadValues({}, i2), {
              url: n3
            })
          });
          return a3 instanceof HTMLLinkElement, a3;
        },
        needDeleteLink: a2
      });
      c2 && document.head.appendChild(s2);
    });
  }
  function Rn({host: e2, remoteInfo: t2, url: n2, attrs: r2, context: i2}) {
    return new Promise((a2) => {
      let {script: o2, needAttach: s2} = le({
        url: n2,
        cb: () => {
          a2(G(i2, n2, s2 ? `success` : `cached`));
        },
        onErrorCallback: (e3) => {
          a2(G(i2, n2, Fn(e3) ? `timeout` : `error`, e3));
        },
        attrs: r2,
        createScriptHook: (n3, r3) => {
          let a3 = e2.loaderHook.lifecycle.createScript.emit({
            url: n3,
            attrs: r3,
            remoteInfo: t2,
            resourceContext: __spreadProps(__spreadValues({}, i2), {
              url: n3
            })
          });
          return a3 instanceof HTMLScriptElement, a3;
        },
        needDeleteScript: true
      });
      s2 && document.head.appendChild(o2);
    });
  }
  function q(e2, t2) {
    return __spreadProps(__spreadValues({}, e2), {
      resourceType: t2
    });
  }
  function zn(e2, t2, n2, r2 = true, i2 = {
    initiator: `preloadRemote`,
    id: e2.name
  }, a2 = true) {
    let {cssAssets: o2, jsAssetsWithoutEntry: s2, entryAssets: c2} = n2, l2 = [];
    if (t2.options.inBrowser) {
      if (c2.forEach((n4) => {
        let {moduleInfo: r3} = n4;
        l2.push(Ln(t2, e2, r3, q(i2, `remoteEntry`)));
      }), r2) {
        let n4 = {
          rel: `preload`,
          as: `style`
        };
        o2.forEach((r3) => {
          let o3 = q(i2, `css`);
          l2.push(In(o3, r3, a2, () => K({
            host: t2,
            remoteInfo: e2,
            url: r3,
            attrs: n4,
            context: o3
          })));
        });
      } else {
        let n4 = {
          rel: `stylesheet`,
          type: `text/css`
        };
        o2.forEach((r3) => {
          let o3 = q(i2, `css`);
          l2.push(In(o3, r3, a2, () => K({
            host: t2,
            remoteInfo: e2,
            url: r3,
            attrs: n4,
            needDeleteLink: false,
            context: o3
          })));
        });
      }
      let n3 = Rn, u2 = {
        fetchpriority: `high`,
        type: `text/javascript`
      };
      r2 ? (n3 = K, u2 = {
        rel: `preload`,
        as: `script`
      }) : yn(e2.type) && (n3 = K, u2 = {
        rel: `modulepreload`,
        fetchpriority: `high`
      }), s2.forEach((r3) => {
        let o3 = q(i2, `js`);
        l2.push(In(o3, r3, a2, () => n3({
          host: t2,
          remoteInfo: e2,
          url: r3,
          attrs: u2,
          context: o3
        })));
      });
    }
    return Promise.all(l2);
  }
  var Bn = {
    global: {
      Global: E,
      nativeGlobal: T,
      resetFederationGlobalInfo: ke,
      setGlobalFederationInstance: Ae,
      getGlobalFederationConstructor: je,
      setGlobalFederationConstructor: Me,
      getInfoWithoutType: O,
      getGlobalSnapshot: Ne,
      getTargetSnapshotInfoByModuleInfo: Pe,
      getGlobalSnapshotInfoByModuleInfo: k,
      setGlobalSnapshotInfoByModuleInfo: Fe,
      addGlobalSnapshot: Ie,
      getRemoteEntryExports: Le,
      registerGlobalPlugins: Re,
      getGlobalHostPlugins: ze,
      getPreloaded: Be,
      setPreloaded: Ve
    },
    share: {
      getRegisteredShare: B,
      getGlobalShareScope: Ht
    },
    utils: {
      matchRemoteWithNameAndExpose: Kt,
      preloadAssets: zn,
      getRemoteInfo: U
    }
  };
  function Vn(e2) {
    if (!e2 || !(`modules` in e2) || !Array.isArray(e2.modules))
      return;
    let t2 = e2.modules.map((e3) => e3.moduleName).filter(Boolean);
    return t2.length ? t2.join(`,`) : void 0;
  }
  function Hn(e2, t2, n2) {
    let r2 = t2, i2 = Array.isArray(e2.shareScope) ? e2.shareScope : [
      e2.shareScope
    ];
    i2.length || i2.push(`default`), i2.forEach((e3) => {
      r2[e3] || (r2[e3] = {});
    });
    let a2 = {
      version: e2.version || ``,
      shareScopeKeys: Array.isArray(e2.shareScope) ? i2 : e2.shareScope || `default`
    };
    return Object.defineProperty(a2, "shareScopeMap", {
      value: r2,
      enumerable: false
    }), {
      remoteEntryInitOptions: a2,
      shareScope: r2[i2[0]],
      initScope: n2 ?? []
    };
  }
  var Un = class {
    constructor({remoteInfo: e2, host: t2}) {
      this.inited = false, this.initing = false, this.lib = void 0, this.remoteInfo = e2, this.host = t2;
    }
    async getEntry(e2, t2) {
      let n2 = t2 || {
        initiator: `loadRemote`,
        id: Gt(this.remoteInfo.name, e2),
        resourceType: `remoteEntry`,
        url: this.remoteInfo.entry,
        expose: e2
      }, r2 = await En({
        origin: this.host,
        remoteInfo: this.remoteInfo,
        remoteEntryExports: this.remoteEntryExports,
        resourceContext: n2
      });
      return b(r2, `remoteEntryExports is undefined 
 ${m(this.remoteInfo)}`), this.remoteEntryExports = r2, this.remoteEntryExports;
    }
    async init(e2, t2, n2, r2, i2) {
      let a2 = await this.getEntry(r2, i2);
      if (this.inited)
        return await this.host.loaderHook.lifecycle.afterInitRemote.emit({
          id: e2,
          remoteInfo: this.remoteInfo,
          remoteSnapshot: t2,
          remoteEntryExports: a2,
          cached: true,
          origin: this.host
        }), a2;
      if (this.initPromise) {
        try {
          await this.initPromise, await this.host.loaderHook.lifecycle.afterInitRemote.emit({
            id: e2,
            remoteInfo: this.remoteInfo,
            remoteSnapshot: t2,
            remoteEntryExports: a2,
            cached: true,
            origin: this.host
          });
        } catch (n3) {
          throw await this.host.loaderHook.lifecycle.afterInitRemote.emit({
            id: e2,
            remoteInfo: this.remoteInfo,
            remoteSnapshot: t2,
            remoteEntryExports: a2,
            error: n3,
            cached: true,
            origin: this.host
          }), n3;
        }
        return a2;
      }
      this.initing = true, this.initPromise = (async () => {
        await this.host.loaderHook.lifecycle.beforeInitRemote.emit({
          id: e2,
          remoteInfo: this.remoteInfo,
          remoteSnapshot: t2,
          origin: this.host
        });
        let {remoteEntryInitOptions: r3, shareScope: i3, initScope: o2} = Hn(this.remoteInfo, this.host.shareScopeMap, n2), s2 = await this.host.hooks.lifecycle.beforeInitContainer.emit({
          shareScope: i3,
          remoteEntryInitOptions: r3,
          initScope: o2,
          remoteInfo: this.remoteInfo,
          origin: this.host
        });
        a2?.init === void 0 && x(Yt, H, {
          hostName: this.host.name,
          remoteName: this.remoteInfo.name,
          remoteEntryUrl: this.remoteInfo.entry,
          remoteEntryKey: this.remoteInfo.entryGlobalName
        }, void 0, W(this.host.options));
        try {
          await a2.init(s2.shareScope, s2.initScope, s2.remoteEntryInitOptions);
        } catch (e3) {
          x(ln, H, {
            hostName: this.host.name,
            remoteName: this.remoteInfo.name,
            remoteEntryUrl: this.remoteInfo.entry,
            remoteEntryKey: this.remoteInfo.entryGlobalName,
            shareScope: this.remoteInfo.shareScope
          }, `${e3}`, W(this.host.options));
        }
        await this.host.hooks.lifecycle.initContainer.emit(__spreadProps(__spreadValues({}, s2), {
          id: e2,
          remoteSnapshot: t2,
          remoteEntryExports: a2
        })), this.inited = true;
      })();
      try {
        await this.initPromise, await this.host.loaderHook.lifecycle.afterInitRemote.emit({
          id: e2,
          remoteInfo: this.remoteInfo,
          remoteSnapshot: t2,
          remoteEntryExports: a2,
          origin: this.host
        });
      } catch (n3) {
        throw await this.host.loaderHook.lifecycle.afterInitRemote.emit({
          id: e2,
          remoteInfo: this.remoteInfo,
          remoteSnapshot: t2,
          remoteEntryExports: a2,
          error: n3,
          origin: this.host
        }), n3;
      } finally {
        this.initing = false, this.initPromise = void 0;
      }
      return a2;
    }
    async get(e2, t2, n2, r2) {
      let {loadFactory: i2 = true} = n2 || {
        loadFactory: true
      }, a2 = await this.init(e2, r2, void 0, t2);
      this.lib = a2, await this.host.loaderHook.lifecycle.beforeGetExpose.emit({
        id: e2,
        expose: t2,
        moduleInfo: this.remoteInfo,
        remoteEntryExports: a2,
        origin: this.host
      });
      let o2;
      try {
        let n3 = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
          remoteEntryExports: a2,
          expose: t2,
          moduleInfo: this.remoteInfo
        });
        o2 = typeof n3 == `function` ? n3 : void 0, o2 || (o2 = await a2.get(t2)), o2 || x(cn, H, {
          hostName: this.host.name,
          remoteName: this.remoteInfo.name,
          remoteEntryUrl: this.remoteInfo.entry,
          expose: t2,
          requestId: e2,
          availableExposes: Vn(r2)
        }, void 0, W(this.host.options)), await this.host.loaderHook.lifecycle.afterGetExpose.emit({
          id: e2,
          expose: t2,
          moduleInfo: this.remoteInfo,
          remoteEntryExports: a2,
          moduleFactory: o2,
          origin: this.host
        });
      } catch (n3) {
        throw await this.host.loaderHook.lifecycle.afterGetExpose.emit({
          id: e2,
          expose: t2,
          moduleInfo: this.remoteInfo,
          remoteEntryExports: a2,
          error: n3,
          origin: this.host
        }), n3;
      }
      let s2 = we(this.remoteInfo.name, t2), c2 = this.wraperFactory(o2, s2);
      if (!i2)
        return c2;
      await this.host.loaderHook.lifecycle.beforeExecuteFactory.emit({
        id: e2,
        expose: t2,
        moduleInfo: this.remoteInfo,
        loadFactory: i2,
        origin: this.host
      });
      try {
        let n3 = await c2();
        return await this.host.loaderHook.lifecycle.afterExecuteFactory.emit({
          id: e2,
          expose: t2,
          moduleInfo: this.remoteInfo,
          loadFactory: i2,
          exposeModule: n3,
          origin: this.host
        }), n3;
      } catch (n3) {
        throw await this.host.loaderHook.lifecycle.afterExecuteFactory.emit({
          id: e2,
          expose: t2,
          moduleInfo: this.remoteInfo,
          loadFactory: i2,
          error: n3,
          origin: this.host
        }), n3;
      }
    }
    wraperFactory(e2, t2) {
      function n2(e3, t3) {
        e3 && typeof e3 == `object` && Object.isExtensible(e3) && !Object.getOwnPropertyDescriptor(e3, Symbol.for(`mf_module_id`)) && Object.defineProperty(e3, Symbol.for(`mf_module_id`), {
          value: t3,
          enumerable: false
        });
      }
      return () => {
        let r2 = e2();
        return r2 instanceof Promise ? r2.then((e3) => (n2(e3, t2), e3)) : (n2(r2, t2), r2);
      };
    }
  }, J = class {
    constructor(e2) {
      this.registerPlugins = {}, this.lifecycle = e2, this.lifecycleKeys = Object.keys(e2);
    }
    applyPlugin(e2) {
      b(xe(e2), `Plugin configuration is invalid.`);
      let t2 = e2.name;
      b(t2, `A name must be provided by the plugin.`), this.registerPlugins[t2] || (this.registerPlugins[t2] = e2, this.lifecycleKeys.forEach((t3) => {
        let n2 = e2[t3];
        n2 && this.lifecycle[t3].on(n2);
      }));
    }
    removePlugin(e2) {
      b(e2, `A name is required.`);
      let t2 = this.registerPlugins[e2];
      b(t2, `The plugin "${e2}" is not registered.`), this.lifecycleKeys.forEach((e3) => {
        let n2 = t2[e3];
        n2 && this.lifecycle[e3].remove(n2);
      }), delete this.registerPlugins[e2];
    }
  }, Y = class {
    constructor(e2) {
      this.type = ``, this.listeners = new Set(), e2 && (this.type = e2);
    }
    on(e2) {
      typeof e2 == `function` && this.listeners.add(e2);
    }
    once(e2) {
      let t2 = this;
      this.on(function n2(...r2) {
        return t2.remove(n2), e2.apply(null, r2);
      });
    }
    emit(...e2) {
      let t2;
      return this.listeners.size > 0 && this.listeners.forEach((n2) => {
        let r2 = n2(...e2);
        r2 !== void 0 && (t2 = r2);
      }), t2;
    }
    remove(e2) {
      this.listeners.delete(e2);
    }
    removeAll() {
      this.listeners.clear();
    }
  }, X = class extends Y {
    emit(...e2) {
      let t2, n2 = Array.from(this.listeners);
      if (n2.length > 0) {
        let r2 = 0, i2 = (t3) => t3 === false ? false : r2 < n2.length ? Promise.resolve(n2[r2++].apply(null, e2)).then((n3) => n3 === void 0 || e2.length === 1 && n3 === e2[0] ? i2(t3) : i2(n3)) : t3;
        t2 = i2();
      }
      return Promise.resolve(t2);
    }
  };
  function Wn(e2, t2) {
    if (!ye(t2))
      return false;
    if (e2 !== t2) {
      for (let n2 in e2)
        if (!(n2 in t2))
          return false;
    }
    return true;
  }
  var Z = class extends Y {
    constructor(e2) {
      super(), this.onerror = x, this.type = e2;
    }
    emit(e2) {
      ye(e2) || x(`The data for the "${this.type}" hook should be an object.`);
      for (let t2 of this.listeners)
        try {
          let n2 = t2(e2);
          if (n2 === void 0)
            continue;
          if (Wn(e2, n2))
            e2 = n2;
          else {
            this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
            break;
          }
        } catch (e3) {
          S(e3), this.onerror(e3);
        }
      return e2;
    }
  }, Q = class extends Y {
    constructor(e2) {
      super(), this.onerror = x, this.type = e2;
    }
    emit(e2) {
      ye(e2) || x(`The response data for the "${this.type}" hook must be an object.`);
      let t2 = Array.from(this.listeners);
      if (t2.length > 0) {
        let n2 = 0, r2 = (t3) => (S(t3), this.onerror(t3), e2), i2 = (a2) => {
          if (a2 !== void 0 && Wn(e2, a2))
            e2 = a2;
          else if (a2 !== void 0)
            return this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`), e2;
          if (n2 < t2.length)
            try {
              return Promise.resolve(t2[n2++](e2)).then(i2, r2);
            } catch (e3) {
              return r2(e3);
            }
          return e2;
        };
        return Promise.resolve(i2(e2));
      }
      return Promise.resolve(e2);
    }
  }, $ = `Remote loading is disabled by experiments.optimization.disableRemote.`, Gn = class {
    constructor() {
      this.hooks = new J({});
    }
    formatAndRegisterRemote() {
      return [];
    }
    loadRemote() {
      throw Error($);
    }
    preloadRemote() {
      throw Error($);
    }
    registerRemotes() {
      throw Error($);
    }
    getRemoteModuleAndOptions() {
      throw Error($);
    }
    initRawContainer() {
      throw Error($);
    }
  };
  function Kn(e2, t2) {
    let n2 = Ce(t2);
    n2.url || x(an, H, {
      remoteName: e2.name
    });
    let r2 = f(t2, n2.url);
    e2.type = n2.type, e2.entryGlobalName = n2.globalName, e2.entry = r2, e2.version = t2.version, e2.buildVersion = t2.buildVersion;
  }
  function qn() {
    return {
      name: `snapshot-plugin`,
      async afterResolve(e2) {
        let {remote: t2, pkgNameOrAlias: n2, expose: r2, origin: i2, remoteInfo: a2, id: o2} = e2;
        if (!_e(t2) || !ve(t2)) {
          let {remoteSnapshot: s2, globalSnapshot: c2} = await i2.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: t2,
            id: Gt(t2.name, r2)
          });
          Kn(a2, s2);
          let l2 = [
            {
              nameOrAlias: n2,
              exposes: [
                r2
              ],
              resourceCategory: `sync`,
              share: false,
              depsRemote: false,
              recordPreloadedAssets: true
            }
          ];
          await i2.remoteHandler.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: l2,
            options: i2.options,
            origin: i2
          });
          let [u2] = l2;
          if (u2) {
            let e3 = {
              remote: t2,
              preloadConfig: u2
            }, n3 = await i2.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
              origin: i2,
              preloadOptions: e3,
              remoteInfo: a2,
              remote: t2,
              remoteSnapshot: s2,
              globalSnapshot: c2
            });
            n3 && zn(a2, i2, n3, false, {
              initiator: `loadRemote`,
              id: o2
            }, u2.recordPreloadedAssets).catch(() => void 0);
          }
          return __spreadProps(__spreadValues({}, e2), {
            remoteSnapshot: s2
          });
        }
        return e2;
      }
    };
  }
  function Jn(e2) {
    let t2 = e2.split(`:`);
    return t2.length === 1 ? {
      name: t2[0],
      version: void 0
    } : t2.length === 2 ? {
      name: t2[0],
      version: t2[1]
    } : {
      name: t2[1],
      version: t2[2]
    };
  }
  function Yn(e2, t2, n2, r2, i2 = {}, a2) {
    let {value: o2} = O(e2, C(t2)), s2 = a2 || o2;
    if (s2 && !te(s2) && (n2(s2, t2, r2), s2.remotesInfo)) {
      let t3 = Object.keys(s2.remotesInfo);
      for (let r3 of t3) {
        if (i2[r3])
          continue;
        i2[r3] = true;
        let t4 = Jn(r3), a3 = s2.remotesInfo[r3];
        Yn(e2, {
          name: t4.name,
          version: a3.matchedVersion
        }, n2, false, i2, void 0);
      }
    }
  }
  var Xn = (e2, t2) => document.querySelector(`${e2}[${e2 === `link` ? `href` : `src`}="${t2}"]`);
  function Zn(e2, t2, n2, r2, i2) {
    let a2 = [], o2 = [], s2 = [], c2 = new Set(), l2 = new Set(), {options: u2} = e2, {preloadConfig: d2} = t2, {depsRemote: p2} = d2;
    if (Yn(r2, n2, (t3, n3, r3) => {
      let i3;
      if (r3)
        i3 = d2;
      else if (Array.isArray(p2)) {
        let e3 = p2.find((e4) => e4.nameOrAlias === n3.name || e4.nameOrAlias === n3.alias);
        if (!e3)
          return;
        i3 = Mn(e3);
      } else if (p2 === true)
        i3 = d2;
      else
        return;
      let c3 = f(t3, Ce(t3).url);
      c3 && s2.push({
        name: n3.name,
        moduleInfo: {
          name: n3.name,
          entry: c3,
          type: `remoteEntryType` in t3 ? t3.remoteEntryType : `global`,
          entryGlobalName: `globalName` in t3 ? t3.globalName : n3.name,
          shareScope: ``,
          version: `version` in t3 ? t3.version : void 0
        },
        url: c3
      });
      let l3 = `modules` in t3 ? t3.modules : [], u3 = Pn(i3.exposes);
      u3.length && `modules` in t3 && (l3 = t3?.modules?.reduce((e3, t4) => (u3?.indexOf(t4.moduleName) !== -1 && e3.push(t4), e3), []));
      function m3(e3) {
        let n4 = e3.map((e4) => f(t3, e4));
        return i3.filter ? n4.filter(i3.filter) : n4;
      }
      if (l3) {
        let r4 = l3.length;
        for (let s3 = 0; s3 < r4; s3++) {
          let r5 = l3[s3], c4 = `${n3.name}/${r5.moduleName}`;
          e2.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
            id: r5.moduleName === `.` ? n3.name : c4,
            name: n3.name,
            remoteSnapshot: t3,
            preloadConfig: i3,
            remote: n3,
            origin: e2
          }), !Be(c4) && (i3.resourceCategory === `all` ? (a2.push(...m3(r5.assets.css.async)), a2.push(...m3(r5.assets.css.sync)), o2.push(...m3(r5.assets.js.async)), o2.push(...m3(r5.assets.js.sync))) : i3.resourceCategory === `sync` && (a2.push(...m3(r5.assets.css.sync)), o2.push(...m3(r5.assets.js.sync))), Ve(c4));
        }
      }
    }, true, {}, i2), i2.shared && i2.shared.length > 0) {
      let t3 = (t4, n3) => {
        let {shared: r3} = B(e2.shareScopeMap, n3.sharedName, t4, e2.sharedHandler.hooks.lifecycle.resolveShare) || {};
        r3 && typeof r3.lib == `function` && (n3.assets.js.sync.forEach((e3) => {
          c2.add(e3);
        }), n3.assets.css.sync.forEach((e3) => {
          l2.add(e3);
        }));
      };
      i2.shared.forEach((e3) => {
        let n3 = u2.shared?.[e3.sharedName];
        if (!n3)
          return;
        let r3 = e3.version ? n3.find((t4) => t4.version === e3.version) : n3;
        r3 && Se(r3).forEach((n4) => {
          t3(n4, e3);
        });
      });
    }
    let m2 = o2.filter((e3) => !c2.has(e3) && !Xn(`script`, e3));
    return {
      cssAssets: a2.filter((e3) => !l2.has(e3) && !Xn(`link`, e3)),
      jsAssetsWithoutEntry: m2,
      entryAssets: s2.filter((e3) => !Xn(`script`, e3.url))
    };
  }
  var Qn = function() {
    return {
      name: `generate-preload-assets-plugin`,
      async generatePreloadAssets(e2) {
        let {origin: t2, preloadOptions: n2, remoteInfo: r2, remote: i2, globalSnapshot: a2, remoteSnapshot: o2} = e2;
        return _e(i2) && ve(i2) ? {
          cssAssets: [],
          jsAssetsWithoutEntry: [],
          entryAssets: [
            {
              name: i2.name,
              url: i2.entry,
              moduleInfo: {
                name: r2.name,
                entry: i2.entry,
                type: r2.type || `global`,
                entryGlobalName: ``,
                shareScope: ``
              }
            }
          ]
        } : (Kn(r2, o2), Zn(t2, n2, r2, a2, o2));
      }
    };
  };
  function $n(e2, t2) {
    let n2 = k({
      name: t2.name,
      version: t2.options.version
    }), r2 = n2 && `remotesInfo` in n2 && n2.remotesInfo && O(n2.remotesInfo, e2.name).value;
    return r2 && r2.matchedVersion ? {
      hostGlobalSnapshot: n2,
      globalSnapshot: Ne(),
      remoteSnapshot: k({
        name: e2.name,
        version: r2.matchedVersion
      })
    } : {
      hostGlobalSnapshot: void 0,
      globalSnapshot: Ne(),
      remoteSnapshot: k({
        name: e2.name,
        version: `version` in e2 ? e2.version : void 0
      })
    };
  }
  let er, tr, nr, rr, ir, ar, or, sr, cr;
  er = class {
    constructor(e2) {
      this.loadingHostSnapshot = null, this.manifestCache = new Map(), this.hooks = new J({
        beforeLoadRemoteSnapshot: new X(`beforeLoadRemoteSnapshot`),
        loadSnapshot: new Q(`loadGlobalSnapshot`),
        loadRemoteSnapshot: new Q(`loadRemoteSnapshot`),
        afterLoadSnapshot: new Q(`afterLoadSnapshot`),
        beforeLoadManifest: new X(`beforeLoadManifest`),
        afterLoadManifest: new X(`afterLoadManifest`)
      }), this.manifestLoading = E.__FEDERATION__.__MANIFEST_LOADING__, this.HostInstance = e2, this.loaderHook = e2.loaderHook;
    }
    async loadRemoteSnapshotInfo({moduleInfo: e2, id: t2, initiator: n2 = `loadRemote`}) {
      let {options: r2} = this.HostInstance;
      await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
        options: r2,
        moduleInfo: e2,
        origin: this.HostInstance
      });
      let i2 = k({
        name: this.HostInstance.options.name,
        version: this.HostInstance.options.version
      });
      i2 || (i2 = {
        version: this.HostInstance.options.version || ``,
        remoteEntry: ``,
        remotesInfo: {}
      }, Ie({
        [this.HostInstance.options.name]: i2
      })), i2 && `remotesInfo` in i2 && !O(i2.remotesInfo, e2.name).value && (`version` in e2 || `entry` in e2) && (i2.remotesInfo = __spreadProps(__spreadValues({}, i2?.remotesInfo), {
        [e2.name]: {
          matchedVersion: `version` in e2 ? e2.version : e2.entry
        }
      }));
      let {hostGlobalSnapshot: a2, remoteSnapshot: o2, globalSnapshot: s2} = this.getGlobalRemoteInfo(e2), {remoteSnapshot: c2, globalSnapshot: l2} = await this.hooks.lifecycle.loadSnapshot.emit({
        options: r2,
        moduleInfo: e2,
        hostGlobalSnapshot: a2,
        remoteSnapshot: o2,
        globalSnapshot: s2
      }), u2, d2;
      if (c2) {
        if (te(c2)) {
          let r3 = c2.remoteEntry, i3 = await this.loadManifestSnapshot(r3, e2, {}, {
            initiator: n2,
            id: t2 || e2.name
          }), a3 = Fe(__spreadProps(__spreadValues({}, e2), {
            entry: r3
          }), i3);
          u2 = i3, d2 = a3;
        } else {
          let {remoteSnapshot: t3} = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
            options: this.HostInstance.options,
            moduleInfo: e2,
            remoteSnapshot: c2,
            from: `global`
          });
          u2 = t3, d2 = l2;
        }
      } else if (_e(e2)) {
        let r3 = await this.loadManifestSnapshot(e2.entry, e2, {}, {
          initiator: n2,
          id: t2 || e2.name
        }), i3 = Fe(e2, r3);
        u2 = r3, d2 = i3;
      } else
        x(en, H, {
          remoteName: e2.name,
          remoteVersion: e2.version,
          hostName: this.HostInstance.options.name,
          globalSnapshot: JSON.stringify(l2)
        }, void 0, W(this.HostInstance.options));
      return await this.hooks.lifecycle.afterLoadSnapshot.emit({
        id: t2,
        host: this.HostInstance,
        options: r2,
        moduleInfo: e2,
        remoteSnapshot: u2
      }), {
        remoteSnapshot: u2,
        globalSnapshot: d2
      };
    }
    getGlobalRemoteInfo(e2) {
      return $n(e2, this.HostInstance);
    }
    async getManifestJson(e2, t2, n2, r2) {
      return (async () => {
        let n3 = U(t2), i2 = this.manifestCache.get(e2);
        if (i2)
          return await this.hooks.lifecycle.afterLoadManifest.emit({
            manifestUrl: e2,
            moduleInfo: t2,
            resourceOptions: r2,
            manifestJson: i2,
            cached: true,
            origin: this.HostInstance
          }), i2;
        await this.hooks.lifecycle.beforeLoadManifest.emit({
          manifestUrl: e2,
          moduleInfo: t2,
          resourceOptions: r2,
          origin: this.HostInstance
        });
        let a2, o2, s2 = false;
        try {
          let t3 = await this.loaderHook.lifecycle.fetch.emit(e2, {}, n3, r2 ? __spreadProps(__spreadValues({}, r2), {
            url: e2,
            resourceType: `manifest`
          }) : void 0);
          (!t3 || !(t3 instanceof Response)) && (t3 = await fetch(e2, {})), a2 = t3, i2 = await t3.json();
        } catch (c3) {
          o2 = c3, i2 = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e2,
            error: c3,
            from: `runtime`,
            lifecycle: `afterResolve`,
            remote: n3,
            origin: this.HostInstance
          }), i2 || (delete this.manifestLoading[e2], await this.hooks.lifecycle.afterLoadManifest.emit({
            manifestUrl: e2,
            moduleInfo: t2,
            resourceOptions: r2,
            response: a2,
            error: c3,
            origin: this.HostInstance
          }), x(Xt, H, {
            manifestUrl: e2,
            moduleName: t2.name,
            hostName: this.HostInstance.options.name
          }, `${c3}`, W(this.HostInstance.options))), s2 = true;
        }
        let c2 = [
          !i2.metaData && `metaData`,
          !i2.exposes && `exposes`,
          !i2.shared && `shared`
        ].filter(Boolean), l2 = c2.length > 0 ? Error(`"${e2}" is not a valid federation manifest for remote "${t2.name}". Missing required fields: ${c2.join(`, `)}.`) : void 0;
        return l2 && await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
          id: e2,
          error: l2,
          from: `runtime`,
          lifecycle: `afterResolve`,
          remote: n3,
          origin: this.HostInstance
        }), await this.hooks.lifecycle.afterLoadManifest.emit({
          manifestUrl: e2,
          moduleInfo: t2,
          resourceOptions: r2,
          manifestJson: i2,
          response: a2,
          error: l2 || o2,
          recovered: l2 ? void 0 : s2 || void 0,
          origin: this.HostInstance
        }), l2 && x(sn, H, {
          manifestUrl: e2,
          moduleName: t2.name,
          hostName: this.HostInstance.options.name,
          missingFields: c2.join(`,`)
        }, void 0, W(this.HostInstance.options)), this.manifestCache.set(e2, i2), i2;
      })();
    }
    async loadManifestSnapshot(e2, t2, n2, r2) {
      let i2 = async () => {
        let i3 = await this.getManifestJson(e2, t2, n2, r2), a2 = g(i3, {
          version: e2
        }), {remoteSnapshot: o2} = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
          options: this.HostInstance.options,
          moduleInfo: t2,
          manifestJson: i3,
          remoteSnapshot: a2,
          manifestUrl: e2,
          from: `manifest`
        });
        return o2;
      };
      return this.manifestLoading[e2] || (this.manifestLoading[e2] = i2().then((e3) => e3)), this.manifestLoading[e2];
    }
  };
  tr = class {
    constructor() {
      this.hooks = new J({});
    }
  };
  nr = class {
    constructor(e2) {
      this.hooks = new J({
        beforeRegisterShare: new Z(`beforeRegisterShare`),
        afterRegisterShare: new Y(`afterRegisterShare`),
        afterResolve: new Q(`afterResolve`),
        beforeLoadShare: new Q(`beforeLoadShare`),
        loadShare: new X(),
        afterLoadShare: new Y(`afterLoadShare`),
        errorLoadShare: new Y(`errorLoadShare`),
        resolveShare: new Z(`resolveShare`),
        initContainerShareScopeMap: new Z(`initContainerShareScopeMap`)
      }), this.host = e2, this.shareScopeMap = {}, this.initTokens = {}, this._setGlobalShareScopeMap(e2.options);
    }
    emitAfterRegisterShare(e2, t2) {
      this.hooks.lifecycle.afterRegisterShare.emit(__spreadProps(__spreadValues({
        pkgName: e2
      }, t2), {
        shareScopeMap: this.shareScopeMap,
        origin: this.host
      }));
    }
    emitAfterLoadShare({lifecycle: e2, pkgName: t2, shareInfo: n2, selectedShared: r2, loadContext: i2}) {
      try {
        this.hooks.lifecycle.afterLoadShare.emit({
          pkgName: t2,
          shareInfo: n2,
          selectedShared: r2,
          shared: this.host.options.shared,
          shareScopeMap: this.shareScopeMap,
          lifecycle: e2,
          loadContext: i2,
          origin: this.host
        });
      } catch (e3) {
        S(e3);
      }
    }
    emitErrorLoadShare({lifecycle: e2, pkgName: t2, shareInfo: n2, error: r2, recovered: i2, loadContext: a2}) {
      try {
        this.hooks.lifecycle.errorLoadShare.emit({
          pkgName: t2,
          shareInfo: n2,
          shared: this.host.options.shared,
          shareScopeMap: this.shareScopeMap,
          lifecycle: e2,
          origin: this.host,
          error: r2,
          recovered: i2,
          loadContext: a2
        });
      } catch (e3) {
        S(e3);
      }
    }
    registerShared(e2, t2) {
      let {newShareInfos: n2, allShareInfos: r2} = Ft(e2, t2);
      return Object.keys(n2).forEach((e3) => {
        n2[e3].forEach((n3) => {
          n3.scope.forEach((r3) => {
            this.hooks.lifecycle.beforeRegisterShare.emit({
              origin: this.host,
              pkgName: e3,
              shared: n3
            });
            let i2 = this.shareScopeMap[r3]?.[e3], a2 = i2?.[n3.version];
            i2 || this.setShared({
              pkgName: e3,
              lib: n3.lib,
              get: n3.get,
              loaded: n3.loaded || !!n3.lib,
              shared: n3,
              from: t2.name
            }), this.emitAfterRegisterShare(e3, {
              scope: r3,
              shared: n3,
              previousShared: a2,
              registeredShared: this.shareScopeMap[r3]?.[e3]?.[n3.version],
              trigger: `runtime`
            });
          });
        });
      }), {
        newShareInfos: n2,
        allShareInfos: r2
      };
    }
    async loadShare(e2, t2) {
      let {host: n2} = this, r2 = t2?.context, i2 = Ut({
        pkgName: e2,
        extraOptions: t2,
        shareInfos: n2.options.shared
      }), a2 = i2;
      try {
        i2?.scope && await Promise.all(i2.scope.map(async (e3) => {
          await Promise.all(this.initializeSharing(e3, {
            strategy: i2.strategy,
            context: r2
          }));
        }));
        let o2 = await this.hooks.lifecycle.beforeLoadShare.emit({
          pkgName: e2,
          shareInfo: i2,
          shared: n2.options.shared,
          origin: n2,
          loadContext: r2
        });
        a2 = o2.shareInfo, r2 = o2.loadContext || r2, b(a2, `Cannot find shared "${e2}" in host "${n2.options.name}". Ensure the shared config for "${e2}" is declared in the federation plugin options and the host has been initialized before loading shares.`);
        let s2 = a2, {shared: c2, useTreesShaking: l2} = B(this.shareScopeMap, e2, a2, this.hooks.lifecycle.resolveShare, r2) || {};
        if (c2) {
          let t3 = Wt(c2, l2);
          if (t3.lib)
            return V(t3, n2.options.name), this.emitAfterLoadShare({
              lifecycle: `loadShare`,
              pkgName: e2,
              shareInfo: s2,
              selectedShared: c2,
              loadContext: r2
            }), t3.lib;
          if (t3.loading && !t3.loaded) {
            let i3 = await t3.loading;
            return t3.loaded = true, t3.lib || (t3.lib = i3), V(t3, n2.options.name), this.emitAfterLoadShare({
              lifecycle: `loadShare`,
              pkgName: e2,
              shareInfo: s2,
              selectedShared: c2,
              loadContext: r2
            }), i3;
          }
          {
            let i3 = (async () => {
              let e3 = await t3.get();
              return V(t3, n2.options.name), t3.loaded = true, t3.lib = e3, e3;
            })();
            this.setShared({
              pkgName: e2,
              loaded: false,
              shared: c2,
              from: n2.options.name,
              lib: null,
              loading: i3,
              treeShaking: l2 ? t3 : void 0
            });
            let a3 = await i3;
            return this.emitAfterLoadShare({
              lifecycle: `loadShare`,
              pkgName: e2,
              shareInfo: s2,
              selectedShared: c2,
              loadContext: r2
            }), a3;
          }
        }
        {
          if (t2?.customShareInfo)
            return this.emitErrorLoadShare({
              lifecycle: `loadShare`,
              pkgName: e2,
              shareInfo: s2,
              recovered: true,
              loadContext: r2
            }), false;
          let i3 = I(s2.treeShaking), a3 = Wt(s2, i3), o3 = (async () => {
            let t3 = await a3.get();
            a3.lib = t3, a3.loaded = true, V(a3, n2.options.name);
            let {shared: i4, useTreesShaking: o4} = B(this.shareScopeMap, e2, s2, this.hooks.lifecycle.resolveShare, r2) || {};
            if (i4) {
              let e3 = Wt(i4, o4);
              e3.lib = t3, e3.loaded = true, i4.from = s2.from;
            }
            return t3;
          })();
          this.setShared({
            pkgName: e2,
            loaded: false,
            shared: s2,
            from: n2.options.name,
            lib: null,
            loading: o3,
            treeShaking: i3 ? a3 : void 0
          });
          let c3 = await o3;
          return this.emitAfterLoadShare({
            lifecycle: `loadShare`,
            pkgName: e2,
            shareInfo: s2,
            selectedShared: s2,
            loadContext: r2
          }), c3;
        }
      } catch (t3) {
        throw this.emitErrorLoadShare({
          lifecycle: `loadShare`,
          pkgName: e2,
          shareInfo: a2,
          error: t3,
          loadContext: r2
        }), t3;
      }
    }
    initializeSharing(e2 = Mt, t2) {
      let {host: n2} = this, r2 = t2?.from, i2 = t2?.strategy, a2 = t2?.context?.trigger || r2 || `runtime`, o2 = t2?.initScope, s2 = [];
      if (r2 !== `build`) {
        let {initTokens: t3} = this;
        o2 || (o2 = []);
        let n3 = t3[e2];
        if (n3 || (n3 = t3[e2] = {
          from: this.host.name
        }), o2.indexOf(n3) >= 0)
          return s2;
        o2.push(n3);
      }
      let c2 = this.shareScopeMap, l2 = n2.options.name;
      c2[e2] || (c2[e2] = {});
      let u2 = c2[e2], d2 = (t3, n3) => {
        let {version: r3, eager: i3} = n3;
        u2[t3] = u2[t3] || {};
        let o3 = u2[t3], s3 = o3[r3], c3 = s3 && Wt(s3), d3 = !!(c3 && (`eager` in c3 && c3.eager || `shareConfig` in c3 && c3.shareConfig?.eager));
        (!c3 || c3.strategy !== `loaded-first` && !c3.loaded && (!i3 == !d3 ? l2 > o3[r3].from : i3)) && (o3[r3] = n3), this.emitAfterRegisterShare(t3, {
          scope: e2,
          shared: n3,
          previousShared: s3,
          registeredShared: o3[r3],
          trigger: a2
        });
      }, f2 = async (e3) => {
        let {module: t3} = await n2.remoteHandler.getRemoteModuleAndOptions({
          id: e3
        }), r3, i3 = {
          initiator: `loadShare`,
          id: e3,
          resourceType: `remoteEntry`,
          url: t3.remoteInfo.entry
        };
        try {
          r3 = await t3.getEntry(void 0, i3);
        } catch (i4) {
          if (r3 = await n2.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
            id: e3,
            error: i4,
            from: `runtime`,
            lifecycle: `beforeLoadShare`,
            remote: t3.remoteInfo,
            origin: n2
          }), !r3)
            return;
        } finally {
          r3?.init && !t3.initing && (t3.remoteEntryExports = r3, await t3.init(void 0, void 0, o2, void 0, i3));
        }
      };
      return Object.keys(n2.options.shared).forEach((t3) => {
        n2.options.shared[t3].forEach((n3) => {
          n3.scope.includes(e2) && d2(t3, n3);
        });
      }), (n2.options.shareStrategy === `version-first` || i2 === `version-first`) && n2.options.remotes.forEach((t3) => {
        t3.shareScope === e2 && s2.push(f2(t3.name));
      }), s2;
    }
    loadShareSync(e2, t2) {
      let {host: n2} = this, r2 = t2?.context, i2 = Ut({
        pkgName: e2,
        extraOptions: t2,
        shareInfos: n2.options.shared
      });
      try {
        i2?.scope && i2.scope.forEach((e3) => {
          this.initializeSharing(e3, {
            strategy: i2.strategy,
            from: t2?.from,
            context: r2
          });
        });
        let {shared: a2} = B(this.shareScopeMap, e2, i2, this.hooks.lifecycle.resolveShare, r2) || {};
        if (a2) {
          if (typeof a2.lib == `function`)
            return V(a2, n2.options.name), a2.loaded || (a2.loaded = true, a2.from === n2.options.name && (i2.loaded = true)), this.emitAfterLoadShare({
              lifecycle: `loadShareSync`,
              pkgName: e2,
              shareInfo: i2,
              selectedShared: a2,
              loadContext: r2
            }), a2.lib;
          if (typeof a2.get == `function`) {
            let t3 = a2.get();
            if (!(t3 instanceof Promise))
              return V(a2, n2.options.name), this.setShared({
                pkgName: e2,
                loaded: true,
                from: n2.options.name,
                lib: t3,
                shared: a2
              }), this.emitAfterLoadShare({
                lifecycle: `loadShareSync`,
                pkgName: e2,
                shareInfo: i2,
                selectedShared: a2,
                loadContext: r2
              }), t3;
          }
        }
        if (i2.lib)
          return i2.loaded || (i2.loaded = true), this.emitAfterLoadShare({
            lifecycle: `loadShareSync`,
            pkgName: e2,
            shareInfo: i2,
            selectedShared: i2,
            loadContext: r2
          }), i2.lib;
        if (i2.get) {
          let a3 = i2.get();
          return a3 instanceof Promise && x(t2?.from === `build` ? Qt : $t, H, {
            hostName: n2.options.name,
            sharedPkgName: e2
          }, void 0, W(n2.options)), i2.lib = a3, this.setShared({
            pkgName: e2,
            loaded: true,
            from: n2.options.name,
            lib: i2.lib,
            shared: i2
          }), this.emitAfterLoadShare({
            lifecycle: `loadShareSync`,
            pkgName: e2,
            shareInfo: i2,
            selectedShared: i2,
            loadContext: r2
          }), i2.lib;
        }
        x($t, H, {
          hostName: n2.options.name,
          sharedPkgName: e2
        }, void 0, W(n2.options));
      } catch (t3) {
        throw this.emitErrorLoadShare({
          lifecycle: `loadShareSync`,
          pkgName: e2,
          shareInfo: i2,
          error: t3,
          loadContext: r2
        }), t3;
      }
    }
    initShareScopeMap(e2, t2, n2 = {}) {
      let {host: r2} = this;
      this.shareScopeMap[e2] = t2, this.hooks.lifecycle.initContainerShareScopeMap.emit({
        shareScope: t2,
        options: r2.options,
        origin: r2,
        scopeName: e2,
        hostShareScopeMap: n2.hostShareScopeMap
      });
    }
    setShared({pkgName: e2, shared: t2, from: n2, lib: r2, loading: i2, loaded: a2, get: o2, treeShaking: s2}) {
      let _a = t2, {version: c2, scope: l2 = `default`} = _a, u2 = __objRest(_a, ["version", "scope"]), d2 = Array.isArray(l2) ? l2 : [
        l2
      ], f2 = (e3) => {
        let t3 = (e4, t4, n4) => {
          n4 && !e4[t4] && (e4[t4] = n4);
        }, n3 = s2 ? e3.treeShaking : e3;
        t3(n3, `loaded`, a2), t3(n3, `loading`, i2), t3(n3, `get`, o2), t3(n3, `lib`, r2);
      };
      d2.forEach((t3) => {
        this.shareScopeMap[t3] || (this.shareScopeMap[t3] = {}), this.shareScopeMap[t3][e2] || (this.shareScopeMap[t3][e2] = {}), this.shareScopeMap[t3][e2][c2] || (this.shareScopeMap[t3][e2][c2] = __spreadProps(__spreadValues({
          version: c2,
          scope: [
            t3
          ]
        }, u2), {
          lib: r2
        }));
        let i3 = this.shareScopeMap[t3][e2][c2];
        f2(i3), n2 && i3.from !== n2 && (i3.from = n2);
      });
    }
    _setGlobalShareScopeMap(e2) {
      let t2 = Ht(), n2 = e2.id || e2.name;
      n2 && !t2[n2] && (t2[n2] = this.shareScopeMap);
    }
  };
  rr = class {
    constructor() {
      this.shareScopeMap = {}, this.hooks = new J({
        afterResolve: new Q(`afterResolve`)
      });
    }
    registerShared() {
      return {
        newShareInfos: {},
        allShareInfos: {}
      };
    }
    loadShare() {
      throw Error(`Shared dependency loading is disabled by experiments.optimization.disableShared.`);
    }
    loadShareSync() {
      throw Error(`Shared dependency loading is disabled by experiments.optimization.disableShared.`);
    }
    initializeSharing() {
      return [];
    }
    initShareScopeMap(e2, t2) {
      this.shareScopeMap[e2] = t2;
    }
  };
  ir = class {
    constructor(e2) {
      this.hooks = new J({
        beforeRegisterRemote: new Z(`beforeRegisterRemote`),
        registerRemote: new Z(`registerRemote`),
        beforeRequest: new Q(`beforeRequest`),
        afterMatchRemote: new X(`afterMatchRemote`),
        onLoad: new X(`onLoad`),
        afterLoadRemote: new X(`afterLoadRemote`),
        handlePreloadModule: new Y(`handlePreloadModule`),
        errorLoadRemote: new X(`errorLoadRemote`),
        beforePreloadRemote: new X(`beforePreloadRemote`),
        generatePreloadAssets: new X(`generatePreloadAssets`),
        afterPreloadRemote: new X(`afterPreloadRemote`),
        loadEntry: new X()
      }), this.host = e2, this.idToRemoteMap = {};
    }
    formatAndRegisterRemote(e2, t2) {
      return (t2.remotes || []).reduce((e3, t3) => (this.registerRemote(t3, e3, {
        force: false
      }), e3), e2.remotes);
    }
    setIdToRemoteMap(e2, t2) {
      let {remote: n2, expose: r2} = t2, {name: i2, alias: a2} = n2;
      if (this.idToRemoteMap[e2] = {
        name: n2.name,
        expose: r2
      }, a2 && e2.startsWith(i2)) {
        let t3 = e2.replace(i2, a2);
        this.idToRemoteMap[t3] = {
          name: n2.name,
          expose: r2
        };
        return;
      }
      if (a2 && e2.startsWith(a2)) {
        let t3 = e2.replace(a2, i2);
        this.idToRemoteMap[t3] = {
          name: n2.name,
          expose: r2
        };
      }
    }
    async loadRemote(e2, t2) {
      let {host: n2} = this, r2 = Kt(n2.options.remotes, e2), i2 = e2, a2 = r2?.expose, o2 = r2 ? U(r2.remote) : void 0, s2;
      try {
        let {loadFactory: r3 = true} = t2 || {
          loadFactory: true
        }, {module: c2, moduleOptions: l2, remoteMatchInfo: u2} = await this.getRemoteModuleAndOptions({
          id: e2
        }), {pkgNameOrAlias: d2, remote: f2, expose: p2, id: m2, remoteSnapshot: ee2} = u2;
        i2 = m2, a2 = p2, o2 = U(f2);
        let h2 = await c2.get(m2, p2, t2, ee2), g2 = await this.hooks.lifecycle.onLoad.emit({
          id: m2,
          pkgNameOrAlias: d2,
          expose: p2,
          exposeModule: r3 ? h2 : void 0,
          exposeModuleFactory: r3 ? void 0 : h2,
          remote: f2,
          options: l2,
          moduleInstance: c2,
          origin: n2
        });
        return this.setIdToRemoteMap(e2, u2), s2 = {
          id: i2,
          expose: a2,
          remote: o2,
          options: t2,
          origin: n2
        }, typeof g2 == `function` ? g2 : h2;
      } catch (r3) {
        let {from: c2 = `runtime`} = t2 || {
          from: `runtime`
        }, l2;
        try {
          l2 = await this.hooks.lifecycle.errorLoadRemote.emit({
            id: e2,
            error: r3,
            from: c2,
            lifecycle: `onLoad`,
            expose: a2,
            remote: o2,
            origin: n2
          });
        } catch (e3) {
          throw s2 = {
            id: i2,
            expose: a2,
            remote: o2,
            options: t2,
            error: e3,
            origin: n2
          }, e3;
        }
        if (!l2)
          throw s2 = {
            id: i2,
            expose: a2,
            remote: o2,
            options: t2,
            error: r3,
            origin: n2
          }, r3;
        return s2 = {
          id: i2,
          expose: a2,
          remote: o2,
          options: t2,
          error: r3,
          origin: n2,
          recovered: true
        }, l2;
      } finally {
        s2 && await this.hooks.lifecycle.afterLoadRemote.emit(s2);
      }
    }
    async preloadRemote(e2) {
      let {host: t2} = this, n2 = [];
      await this.hooks.lifecycle.beforePreloadRemote.emit({
        preloadOps: e2,
        options: t2.options,
        origin: t2
      });
      let r2 = Nn(t2.options.remotes, e2), i2 = (e3) => {
        let {preloadConfig: t3, remote: n3} = e3, r3 = t3.exposes || [];
        return r3.length ? r3.map((r4) => ({
          ops: __spreadProps(__spreadValues({}, e3), {
            preloadConfig: __spreadProps(__spreadValues({}, t3), {
              exposes: [
                r4
              ]
            })
          }),
          id: Gt(n3.name, r4)
        })) : [
          {
            ops: e3,
            id: `${n3.name}/*`
          }
        ];
      }, a2;
      await Promise.all(r2.flatMap(i2).map(async (e3) => {
        let {ops: r3, id: i3} = e3, {remote: a3, preloadConfig: o3} = r3, s2 = U(a3);
        try {
          let {globalSnapshot: e4, remoteSnapshot: c2} = await t2.snapshotHandler.loadRemoteSnapshotInfo({
            moduleInfo: a3,
            id: i3,
            initiator: `preloadRemote`
          }), l2 = await this.hooks.lifecycle.generatePreloadAssets.emit({
            origin: t2,
            preloadOptions: r3,
            remote: a3,
            remoteInfo: s2,
            globalSnapshot: e4,
            remoteSnapshot: c2
          });
          if (!l2)
            return;
          let u2 = await zn(s2, t2, l2, true, {
            initiator: `preloadRemote`,
            id: i3
          }, o3.recordPreloadedAssets);
          n2.push({
            remote: a3,
            remoteInfo: s2,
            preloadConfig: o3,
            id: i3,
            results: u2
          });
        } catch (e4) {
          n2.push({
            remote: a3,
            remoteInfo: s2,
            preloadConfig: o3,
            id: i3,
            results: [
              {
                url: s2.entry,
                status: `error`,
                resourceType: /\.json(?:$|[?#])/i.test(s2.entry) ? `manifest` : `remoteEntry`,
                initiator: `preloadRemote`,
                id: i3,
                error: e4
              }
            ]
          });
        }
      }));
      let o2 = n2.flatMap((e3) => e3.results.filter((e4) => e4.status === `error` || e4.status === `timeout`));
      if (o2.length > 0 && (a2 = Error(`preloadRemote failed to load ${o2.length} resource(s).`), Object.assign(a2, {
        results: n2,
        failedResults: o2
      })), await this.hooks.lifecycle.afterPreloadRemote.emit({
        preloadOps: e2,
        options: t2.options,
        origin: t2,
        results: n2,
        error: a2
      }), a2)
        throw a2;
    }
    registerRemotes(e2, t2) {
      let {host: n2} = this;
      e2.forEach((e3) => {
        this.registerRemote(e3, n2.options.remotes, {
          force: t2?.force
        });
      });
    }
    initRawContainer(e2, t2, n2) {
      let {host: r2} = this, i2 = new Un({
        host: r2,
        remoteInfo: U({
          name: e2,
          entry: t2
        })
      });
      return i2.remoteEntryExports = n2, r2.moduleCache.set(e2, i2), i2;
    }
    async getRemoteModuleAndOptions(e2) {
      let {host: t2} = this, {id: n2} = e2, r2;
      try {
        r2 = await this.hooks.lifecycle.beforeRequest.emit({
          id: n2,
          options: t2.options,
          origin: t2
        });
      } catch (e3) {
        if (r2 = await this.hooks.lifecycle.errorLoadRemote.emit({
          id: n2,
          options: t2.options,
          origin: t2,
          from: `runtime`,
          error: e3,
          lifecycle: `beforeRequest`
        }), !r2)
          throw e3;
      }
      let {id: i2} = r2, a2 = Kt(t2.options.remotes, i2);
      if (!a2)
        try {
          x(Zt, H, {
            hostName: t2.options.name,
            requestId: i2
          }, void 0, W(t2.options));
        } catch (e3) {
          throw await this.hooks.lifecycle.afterMatchRemote.emit({
            id: i2,
            options: t2.options,
            error: e3,
            origin: t2
          }), e3;
        }
      let {remote: o2} = a2, s2 = U(o2);
      await this.hooks.lifecycle.afterMatchRemote.emit(__spreadProps(__spreadValues({
        id: i2
      }, a2), {
        options: t2.options,
        remoteInfo: s2,
        origin: t2
      }));
      let c2 = await t2.sharedHandler.hooks.lifecycle.afterResolve.emit(__spreadProps(__spreadValues({
        id: i2
      }, a2), {
        options: t2.options,
        origin: t2,
        remoteInfo: s2
      })), {remote: l2, expose: u2} = c2;
      b(l2 && u2, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${i2}.`);
      let d2 = t2.moduleCache.get(l2.name), f2 = {
        host: t2,
        remoteInfo: s2
      };
      return d2 || (d2 = new Un(f2), t2.moduleCache.set(l2.name, d2)), {
        module: d2,
        moduleOptions: f2,
        remoteMatchInfo: c2
      };
    }
    registerRemote(e2, t2, n2) {
      let {host: r2} = this, i2 = () => {
        if (e2.alias) {
          let n3 = t2.find((t3) => e2.alias && (t3.name.startsWith(e2.alias) || t3.alias?.startsWith(e2.alias)));
          b(!n3, `The alias ${e2.alias} of remote ${e2.name} is not allowed to be the prefix of ${n3 && n3.name} name or alias`);
        }
        `entry` in e2 && typeof window < `u` && !e2.entry.startsWith(`http`) && (e2.entry = new URL(e2.entry, window.location.origin).href), e2.shareScope || (e2.shareScope = Mt), e2.type || (e2.type = Nt);
      };
      this.hooks.lifecycle.beforeRegisterRemote.emit({
        remote: e2,
        origin: r2
      });
      let a2 = t2.find((t3) => t3.name === e2.name);
      if (!a2)
        i2(), t2.push(e2), this.hooks.lifecycle.registerRemote.emit({
          remote: e2,
          origin: r2
        });
      else {
        let o2 = [
          `The remote "${e2.name}" is already registered.`,
          `Please note that overriding it may cause unexpected errors.`
        ];
        n2?.force && (this.removeRemote(a2), i2(), t2.push(e2), this.hooks.lifecycle.registerRemote.emit({
          remote: e2,
          origin: r2
        }), p(o2.join(` `)));
      }
    }
    removeRemote(e2) {
      try {
        let {host: t2} = this, {name: n2} = e2, r2 = t2.options.remotes.findIndex((e3) => e3.name === n2);
        r2 !== -1 && t2.options.remotes.splice(r2, 1);
        let i2 = O(w.__FEDERATION__.moduleInfo, C(e2)).key;
        delete w.__FEDERATION__.moduleInfo[i2], `entry` in e2 && (t2.snapshotHandler.manifestCache.delete(e2.entry), delete E.__FEDERATION__.__MANIFEST_LOADING__[e2.entry]);
        let {hostGlobalSnapshot: a2} = $n(e2, t2);
        if (a2) {
          let t3 = a2 && `remotesInfo` in a2 && a2.remotesInfo && O(a2.remotesInfo, e2.name).key;
          t3 && delete a2.remotesInfo[t3];
        }
        let o2 = t2.moduleCache.get(e2.name);
        if (o2) {
          let n3 = o2.remoteInfo, r3 = n3.entryGlobalName;
          w[r3] && (Object.getOwnPropertyDescriptor(w, r3)?.configurable ? delete w[r3] : w[r3] = void 0);
          let i3 = Tn(o2.remoteInfo);
          D[i3] && delete D[i3];
          let a3 = n3.buildVersion ? d(n3.name, n3.buildVersion) : n3.name, s2 = w.__FEDERATION__.__INSTANCES__.findIndex((e3) => n3.buildVersion ? e3.options.id === a3 : e3.name === a3);
          if (s2 !== -1) {
            let e3 = w.__FEDERATION__.__INSTANCES__[s2];
            a3 = e3.options.id || a3;
            let t3 = Ht(), r4 = true, i4 = [];
            Object.keys(t3).forEach((e4) => {
              let a4 = t3[e4];
              a4 && Object.keys(a4).forEach((t4) => {
                let o3 = a4[t4];
                o3 && Object.keys(o3).forEach((a5) => {
                  let s3 = o3[a5];
                  s3 && Object.keys(s3).forEach((o4) => {
                    let c2 = s3[o4];
                    c2 && typeof c2 == `object` && c2.from === n3.name && (c2.loaded || c2.loading ? (c2.useIn = c2.useIn.filter((e5) => e5 !== n3.name), c2.useIn.length ? r4 = false : i4.push([
                      e4,
                      t4,
                      a5,
                      o4
                    ])) : i4.push([
                      e4,
                      t4,
                      a5,
                      o4
                    ]));
                  });
                });
              });
            }), r4 && (e3.shareScopeMap = {}, delete t3[a3]), i4.forEach(([e4, n4, r5, i5]) => {
              delete t3[e4]?.[n4]?.[r5]?.[i5];
            }), w.__FEDERATION__.__INSTANCES__.splice(s2, 1);
          }
          t2.moduleCache.delete(e2.name);
        }
      } catch (e3) {
        he.error(`removeRemote failed: ${e3 instanceof Error ? e3.message : String(e3)}`);
      }
    }
  };
  ar = typeof FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN != `boolean` || !FEDERATION_OPTIMIZE_NO_SNAPSHOT_PLUGIN;
  or = typeof FEDERATION_OPTIMIZE_NO_REMOTE != `boolean` || !FEDERATION_OPTIMIZE_NO_REMOTE;
  sr = typeof FEDERATION_OPTIMIZE_NO_SHARED != `boolean` || !FEDERATION_OPTIMIZE_NO_SHARED;
  cr = class {
    constructor(e2) {
      this.hooks = new J({
        beforeInit: new Z(`beforeInit`),
        init: new Y(),
        beforeInitContainer: new Q(`beforeInitContainer`),
        initContainer: new Q(`initContainer`)
      }), this.version = `2.9.0`, this.moduleCache = new Map(), this.loaderHook = new J({
        getModuleInfo: new Y(),
        createScript: new Y(),
        createLink: new Y(),
        fetch: new X(),
        loadEntryError: new X(),
        afterLoadEntry: new X(`afterLoadEntry`),
        beforeInitRemote: new X(`beforeInitRemote`),
        afterInitRemote: new X(`afterInitRemote`),
        beforeGetExpose: new X(`beforeGetExpose`),
        afterGetExpose: new X(`afterGetExpose`),
        beforeExecuteFactory: new X(`beforeExecuteFactory`),
        afterExecuteFactory: new X(`afterExecuteFactory`),
        getModuleFactory: new X()
      }), this.bridgeHook = new J({
        beforeBridgeRender: new Y(),
        afterBridgeRender: new Y(),
        beforeBridgeDestroy: new Y(),
        afterBridgeDestroy: new Y(),
        afterBridgeRouteSync: new Y()
      });
      let t2 = or && ar ? [
        qn(),
        Qn()
      ] : [], n2 = {
        id: Dn(),
        name: e2.name,
        plugins: t2,
        remotes: [],
        shared: {},
        inBrowser: true
      };
      this.name = e2.name, this.options = n2, this.snapshotHandler = or ? new er(this) : new tr(), this.sharedHandler = sr ? new nr(this) : new rr(), this.remoteHandler = or ? new ir(this) : new Gn(), this.shareScopeMap = this.sharedHandler.shareScopeMap, this.registerPlugins([
        ...n2.plugins,
        ...e2.plugins || []
      ]), this.options = this.formatOptions(n2, e2);
    }
    initOptions(e2) {
      e2.name && e2.name !== this.options.name && x(pe(rn, H)), this.registerPlugins(e2.plugins);
      let t2 = this.formatOptions(this.options, e2);
      return this.options = t2, t2;
    }
    async loadShare(e2, t2) {
      return this.sharedHandler.loadShare(e2, t2);
    }
    loadShareSync(e2, t2) {
      return this.sharedHandler.loadShareSync(e2, t2);
    }
    initializeSharing(e2 = Mt, t2) {
      return this.sharedHandler.initializeSharing(e2, t2);
    }
    initRawContainer(e2, t2, n2) {
      return this.remoteHandler.initRawContainer(e2, t2, n2);
    }
    async loadRemote(e2, t2) {
      return this.remoteHandler.loadRemote(e2, t2);
    }
    async preloadRemote(e2) {
      return this.remoteHandler.preloadRemote(e2);
    }
    initShareScopeMap(e2, t2, n2 = {}) {
      this.sharedHandler.initShareScopeMap(e2, t2, n2);
    }
    formatOptions(e2, t2) {
      let n2 = sr ? Ft(e2, t2).allShareInfos : {}, {userOptions: r2, options: i2} = this.hooks.lifecycle.beforeInit.emit({
        origin: this,
        userOptions: t2,
        options: e2,
        shareInfo: n2
      }), a2 = this.remoteHandler.formatAndRegisterRemote(i2, r2), {allShareInfos: o2} = this.sharedHandler.registerShared(i2, r2), s2 = [
        ...i2.plugins
      ];
      r2.plugins && r2.plugins.forEach((e3) => {
        s2.includes(e3) || s2.push(e3);
      });
      let c2 = __spreadProps(__spreadValues(__spreadValues({}, e2), t2), {
        plugins: s2,
        remotes: a2,
        shared: o2,
        id: r2.id || e2.id
      });
      return this.hooks.lifecycle.init.emit({
        origin: this,
        options: c2
      }), c2;
    }
    registerPlugins(e2) {
      this.options.plugins = An(e2, this);
    }
    registerRemotes(e2, t2) {
      return this.remoteHandler.registerRemotes(e2, t2);
    }
    registerShared(e2) {
      this.sharedHandler.registerShared(this.options, __spreadProps(__spreadValues({}, this.options), {
        shared: e2
      }));
    }
  };
  lr = Bn;
  function ur() {
    return typeof FEDERATION_BUILD_IDENTIFIER < `u` ? FEDERATION_BUILD_IDENTIFIER : ``;
  }
  dr = function(e2, t2) {
    let n2 = ur();
    return w.__FEDERATION__.__INSTANCES__.find((r2) => !!(n2 && r2.options.id === n2 || r2.options.name === e2 && !r2.options.version && !t2 || r2.options.name === e2 && t2 && r2.options.version === t2));
  };
  function fr(e2) {
    let t2 = new (je() || cr)(__spreadValues({
      id: `${e2.name}@${e2.version || Date.now()}`
    }, e2));
    return Ae(t2), t2;
  }
  var pr = null;
  mr = function(e2) {
    let t2 = dr(e2.name, e2.version), n2 = __spreadProps(__spreadValues({}, e2), {
      id: e2.id || ``
    });
    return t2 ? (t2.initOptions(n2), pr || (pr = t2), t2) : (pr = fr(n2), pr);
  };
  Me(cr);
})();
export {
  __tla,
  dr as n,
  lr as r,
  mr as t
};
