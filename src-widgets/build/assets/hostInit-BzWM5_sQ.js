import {n as e, t} from "./vite-preload-helper-r6RKwCfh.js";
let i, a;
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
  a = async function() {
    return i || (i = (async () => {
      let e2 = (e3, t2, n3, r2) => {
        let i3 = (Array.isArray(r2) ? r2[0] : r2) || `default`, a3 = t2 || !n3 ? e3 : e3 + `@` + n3, o2 = {
          canonical: i3 + `:` + a3
        };
        return i3 === "default" && (o2.aliases = [
          a3
        ]), o2;
      }, n2 = (e3, t2) => {
        let n3 = e3[t2.canonical];
        if (n3 !== void 0)
          return n3;
        let r2 = t2.aliases || [];
        for (let n4 of r2) {
          if (!Object.prototype.hasOwnProperty.call(e3, n4))
            continue;
          let r3 = e3[n4];
          if (r3 !== void 0)
            return e3[t2.canonical] = r3, r3;
        }
      }, i2 = Symbol.for(`module-federation.shared-cache-listeners`), a2 = Symbol.for(`module-federation.shared-cache-owners`), o = (e3) => {
        let t2 = e3[a2];
        return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e3, a2, {
          value: t2,
          enumerable: false,
          configurable: false,
          writable: false
        })), t2;
      }, s = (e3, t2) => e3[a2]?.[t2.canonical], c = (e3, t2, n3, r2) => {
        e3[t2.canonical] = n3;
        let s2 = t2.aliases || [];
        for (let t3 of s2)
          Object.defineProperty(e3, t3, {
            value: n3,
            enumerable: true,
            configurable: true,
            writable: true
          });
        let c2 = e3[a2];
        r2 === void 0 ? c2 && delete c2[t2.canonical] : o(e3)[t2.canonical] = r2;
        let l2 = e3[i2]?.[t2.canonical];
        if (l2)
          for (let e4 of l2)
            e4(n3);
        return n3;
      }, l = await (await t(() => import("../customWidgets.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url)).init(), {usedShared: u} = await t(async () => {
        let {usedShared: e3} = await import("./_virtual_mf-localSharedImportMap___mfe_internal__fullcalendar__mf_owner__1-Qt9C-cmN.js").then(async (m) => {
          await m.__tla;
          return m;
        });
        return {
          usedShared: e3
        };
      }, [], import.meta.url), d = (e3) => {
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
      };
      for (let t2 of [
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
      ])
        await Promise.all(t2.map(async (t3) => {
          let i3 = u[t3];
          if (!i3 || i3.materialize === false || i3.treeShaking)
            return;
          let a3 = e2(t3, i3.shareConfig?.singleton, i3.version, i3.scope);
          (n2(r.share, a3) === void 0 || s(r.share, a3) !== `fullcalendar`) && (i3.shareConfig?.import !== false || (Array.isArray(i3.scope) ? i3.scope : [
            i3.scope || `default`
          ]).some((e3) => Object.values(l.shareScopeMap?.[e3]?.[t3] || {}).some((e4) => e4?.shareConfig?.import !== false))) && await l.loadShare(t3, {
            customShareInfo: {
              shareConfig: i3.shareConfig
            }
          }).then(async (e3) => {
            let t4 = typeof e3 == `function` ? e3() : e3, n3 = d(await Promise.resolve(t4));
            c(r.share, a3, n3, `fullcalendar`);
          });
        }));
      return l;
    })()), i;
  };
  i = a();
})();
export {
  __tla,
  i as hostInitPromise,
  a as initHost
};
