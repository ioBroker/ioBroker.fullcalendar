const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./utils-BRGuweMc.js"])))=>i.map(i=>d[i]);
import {t as e} from "./vite-preload-helper-CRzLMJPS.js";
let o;
let __tla = (async () => {
  var _a, _b;
  var t = `__mf_module_cache__`;
  globalThis[t] || (globalThis[t] = {
    share: {},
    remote: {}
  }), (_a = globalThis[t]).share || (_a.share = {}), (_b = globalThis[t]).remote || (_b.remote = {});
  var n = globalThis[t];
  for (let e2 of Object.keys(n.share))
    if (e2.startsWith(`default:`)) {
      let t2 = e2.slice(8);
      n.share[t2] === void 0 && (n.share[t2] = n.share[e2]);
    } else if (!e2.includes(`:`)) {
      let t2 = `default:` + e2;
      n.share[t2] === void 0 && (n.share[t2] = n.share[e2]);
    }
  var r = (e2, t2, n2, r2) => {
    let i2 = (Array.isArray(r2) ? r2[0] : r2) || `default`, a2 = t2 || !n2 ? e2 : e2 + `@` + n2, o2 = {
      canonical: i2 + `:` + a2
    };
    return i2 === "default" && (o2.aliases = [
      a2
    ]), o2;
  }, i = (e2, t2) => {
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
  }, a = [
    [
      `react`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.N), [], import.meta.url)
    ],
    [
      `react/jsx-dev-runtime`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.l), [], import.meta.url)
    ],
    [
      `react/jsx-runtime`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.c), [], import.meta.url)
    ],
    [
      `react-dom`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.i), [], import.meta.url)
    ],
    [
      `react-dom/client`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.t), [], import.meta.url)
    ],
    [
      `@emotion/react`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.Zt), [], import.meta.url)
    ],
    [
      `@mui/private-theming`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.dt), [], import.meta.url)
    ],
    [
      `@mui/system`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.ct), [], import.meta.url)
    ],
    [
      `@mui/material`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.Wt), [], import.meta.url)
    ],
    [
      `moment`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__78845261933133__loadShare__shared-CD90XqsH.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.F), [], import.meta.url)
    ]
  ];
  o = async function() {
    if (a.length === 0)
      return;
    let t2 = `react-dom/client`, {usedShared: o2} = await e(async () => {
      let {usedShared: e2} = await import("./_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-CccPXD-k.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        usedShared: e2
      };
    }, __vite__mapDeps([0]), import.meta.url);
    await Promise.all(a.map(async ([e2, a2]) => {
      let s = o2[e2], c = s ?? (e2 === t2 ? o2[`react-dom`] : void 0);
      if (!c || c.treeShaking || c.shareConfig?.import === false || s && s.materialize === false && e2 !== t2)
        return;
      let l = r(e2, c.shareConfig?.singleton, c.version, c.scope);
      i(n.share, l) === void 0 && await a2().catch((t3) => console.warn(`[module-federation] shared preload failed:`, e2, t3));
    }));
  };
})();
export {
  __tla,
  o as preloadPendingShares
};
