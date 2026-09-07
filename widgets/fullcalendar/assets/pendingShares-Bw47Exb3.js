import {n as e, t} from "./vite-preload-helper-r6RKwCfh.js";
let s;
let __tla = (async () => {
  var _a, _b;
  e();
  var n = `__mf_module_cache__`;
  globalThis[n] || (globalThis[n] = {
    share: {},
    remote: {}
  }), (_a = globalThis[n]).share || (_a.share = {}), (_b = globalThis[n]).remote || (_b.remote = {});
  var r = globalThis[n];
  for (let e2 of Object.keys(r.share))
    if (e2.startsWith(`default:`)) {
      let t2 = e2.slice(8);
      r.share[t2] === void 0 && (r.share[t2] = r.share[e2]);
    } else if (!e2.includes(`:`)) {
      let t2 = `default:` + e2;
      r.share[t2] === void 0 && (r.share[t2] = r.share[e2]);
    }
  var i = (e2, t2, n2, r2) => {
    let i2 = (Array.isArray(r2) ? r2[0] : r2) || `default`, a2 = t2 || !n2 ? e2 : e2 + `@` + n2, o2 = {
      canonical: i2 + `:` + a2
    };
    return i2 === "default" && (o2.aliases = [
      a2
    ]), o2;
  }, a = (e2, t2) => {
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
  }, o = [
    [
      `react`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react__loadShare__.js-lnQNf7YY.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => (e2.T(), e2.w)), [], import.meta.url)
    ],
    [
      `react/jsx-dev-runtime`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_1_jsx_mf_2_dev_mf_2_runtime__loadShare__.js-hGaXnRci.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.t), [], import.meta.url)
    ],
    [
      `react/jsx-runtime`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_1_jsx_mf_2_runtime__loadShare__.js-CE8M302w.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.i), [], import.meta.url)
    ],
    [
      `react-dom`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_2_dom__loadShare__.js-CLA8in1C.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.r), [], import.meta.url)
    ],
    [
      `react-dom/client`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__react_mf_2_dom_mf_1_client__loadShare__.js-DysZ1LGm.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.t), [], import.meta.url)
    ],
    [
      `@mui/private-theming`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare___mf_0_mui_mf_1_private_mf_2_theming__loadShare__.js-B3ZIQtK_.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.r), [], import.meta.url)
    ],
    [
      `@mui/system`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare___mf_0_mui_mf_1_system__loadShare__.js-C-9KfFsI.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.D), [], import.meta.url)
    ],
    [
      `@mui/material`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare___mf_0_mui_mf_1_material__loadShare__.js-CVO6tjm_.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.H), [], import.meta.url)
    ],
    [
      `moment`,
      () => t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__loadShare__moment__loadShare__.js-CU7hxNLx.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((e2) => e2.n), [], import.meta.url)
    ]
  ];
  s = async function() {
    if (o.length === 0)
      return;
    let {usedShared: e2} = await t(async () => {
      let {usedShared: e3} = await import("./_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-Qt9C-cmN.js").then(async (m) => {
        await m.__tla;
        return m;
      });
      return {
        usedShared: e3
      };
    }, [], import.meta.url);
    await Promise.all(o.map(async ([t2, n2]) => {
      let o2 = e2[t2];
      if (!o2 || o2.materialize === false || o2.treeShaking || o2.shareConfig?.import === false)
        return;
      let s2 = i(t2, o2.shareConfig?.singleton, o2.version, o2.scope);
      a(r.share, s2) === void 0 && await n2().catch((e3) => console.warn(`[module-federation] shared preload failed:`, t2, e3));
    }));
  };
})();
export {
  __tla,
  s as preloadPendingShares
};
