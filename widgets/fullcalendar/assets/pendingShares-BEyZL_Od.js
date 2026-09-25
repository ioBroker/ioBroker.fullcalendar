const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./utils-jR9fY54i.js"])))=>i.map(i=>d[i]);
import {t as e} from "./vite-preload-helper-uBIymjUX.js";
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
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react__loadShare__.js-CvmZdlJR.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.w), [], import.meta.url)
    ],
    [
      `react/jsx-dev-runtime`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_1_jsx_mf_2_dev_mf_2_runtime__loadShare__.js-DADK1OLt.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.t), [], import.meta.url)
    ],
    [
      `react/jsx-runtime`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-dKY8wLF8.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.i), [], import.meta.url)
    ],
    [
      `react-dom`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_2_dom__loadShare__.js-CHgVxl22.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.r), [], import.meta.url)
    ],
    [
      `react-dom/client`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__react_mf_2_dom_mf_1_client__loadShare__.js-Cykx5mRi.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.t), [], import.meta.url)
    ],
    [
      `@emotion/react`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_emotion_mf_1_react__loadShare__.js-B0fvS0ao.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.s), [], import.meta.url)
    ],
    [
      `@mui/private-theming`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_mui_mf_1_private_mf_2_theming__loadShare__.js-BMorIdcT.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.r), [], import.meta.url)
    ],
    [
      `@mui/system`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_mui_mf_1_system__loadShare__.js-Cy8lOCKp.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.D), [], import.meta.url)
    ],
    [
      `@mui/material`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare___mf_0_mui_mf_1_material__loadShare__.js-BJzCIbXV.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.H), [], import.meta.url)
    ],
    [
      `moment`,
      () => e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__loadShare__moment__loadShare__.js-DWkaVxAr.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.n), [], import.meta.url)
    ]
  ];
  o = async function() {
    if (a.length === 0)
      return;
    let {usedShared: t2} = await e(async () => {
      let {usedShared: e2} = await import("./_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-CoTGQqmW.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        usedShared: e2
      };
    }, __vite__mapDeps([0]), import.meta.url);
    await Promise.all(a.map(async ([e2, a2]) => {
      let o2 = t2[e2];
      if (!o2 || o2.materialize === false || o2.treeShaking || o2.shareConfig?.import === false)
        return;
      let s = r(e2, o2.shareConfig?.singleton, o2.version, o2.scope);
      i(n.share, s) === void 0 && await a2().catch((t3) => console.warn(`[module-federation] shared preload failed:`, e2, t3));
    }));
  };
})();
export {
  __tla,
  o as preloadPendingShares
};
