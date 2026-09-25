var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import {t as e} from "./vite-preload-helper-uBIymjUX.js";
import "./dist-BK97MX24.js";
let a, i;
let __tla = (async () => {
  let t, n, r;
  t = (e2) => {
    let t2 = e2;
    for (let e3 = 0; e3 < 5; e3++) {
      let e4 = t2?.default;
      if (!e4 || typeof e4 != `object` || Object.keys(e4).length === 0)
        break;
      let n2 = Object.keys(t2).filter((e5) => e5 !== "default").map((e5) => t2[e5]);
      if (n2.length > 0 && n2.some((e5) => e5 !== void 0))
        break;
      t2 = e4;
    }
    return t2;
  };
  n = (e2, t2, n2, r2) => {
    let i2 = globalThis.__mf_module_cache__?.share, a2 = t2.map((e3) => i2?.[e3]).find((e3) => e3 !== void 0), o = a2?.version ?? a2?.default?.version, s = String(o || ``).split(/[^0-9]+/).map(Number), c = String(n2 || ``).split(/[^0-9]+/).map(Number);
    for (let e3 = 0; e3 < Math.max(s.length, c.length); e3++) {
      if ((s[e3] || 0) < (c[e3] || 0))
        return;
      if ((s[e3] || 0) > (c[e3] || 0))
        break;
    }
    for (let t3 of e2) {
      let e3 = i2?.[t3];
      if (e3 !== void 0 && (!r2 || typeof e3?.[r2] == `function` || typeof e3?.default?.[r2] == `function`))
        return e3;
    }
  };
  r = {
    react: async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react__prebuild__-C-vNc16I.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react/jsx-dev-runtime": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-BEQ_MXdj.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react/jsx-runtime": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-B_v57Qfr.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react-dom": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react_mf_2_dom__prebuild__-aFzz7Ouu.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react-dom/client": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__react_mf_2_dom_mf_1_client__prebuild__-BFeYclNy.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@emotion/react": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild___mf_0_emotion_mf_1_react__prebuild__-OQ0plrbS.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/private-theming": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild___mf_0_mui_mf_1_private_mf_2_theming__prebuild__-B3F0s2nz.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/system": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild___mf_0_mui_mf_1_system__prebuild__-CNdox1VZ.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/material": async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild___mf_0_mui_mf_1_material__prebuild__-gHAZ786R.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    moment: async () => await e(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__moment__prebuild__-Cp9x5vPa.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)
  };
  i = {
    react: {
      name: `react`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i.react;
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {react: n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react/jsx-dev-runtime": {
      name: `react/jsx-dev-runtime`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react/jsx-dev-runtime`];
        if (e2.lib)
          return e2.lib;
        if (e2.loading)
          return e2.loading;
        let a2 = n([
          `default:react/jsx-dev-runtime`,
          `react/jsx-dev-runtime`
        ], [
          `default:react`,
          `react`
        ], `19.3.0`, void 0);
        return a2 === void 0 ? (e2.loading = (async () => {
          try {
            let {"react/jsx-dev-runtime": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })(), e2.loading) : (e2.lib = function() {
          return a2;
        }, e2.loaded = true, e2.lib);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react/jsx-runtime": {
      name: `react/jsx-runtime`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react/jsx-runtime`];
        if (e2.lib)
          return e2.lib;
        if (e2.loading)
          return e2.loading;
        let a2 = n([
          `default:react/jsx-runtime`,
          `react/jsx-runtime`
        ], [
          `default:react`,
          `react`
        ], `19.3.0`, void 0);
        return a2 === void 0 ? (e2.loading = (async () => {
          try {
            let {"react/jsx-runtime": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })(), e2.loading) : (e2.lib = function() {
          return a2;
        }, e2.loaded = true, e2.lib);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react-dom": {
      name: `react-dom`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react-dom`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {"react-dom": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "react-dom/client": {
      name: `react-dom/client`,
      version: `19.3.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`react-dom/client`];
        if (e2.lib)
          return e2.lib;
        if (e2.loading)
          return e2.loading;
        let a2 = n([
          `default:react-dom/client`,
          `react-dom/client`,
          `default:react-dom`,
          `react-dom`
        ], [
          `default:react`,
          `react`
        ], `19.3.0`, `createRoot`);
        return a2 === void 0 ? (e2.loading = (async () => {
          try {
            let {"react-dom/client": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })(), e2.loading) : (e2.lib = function() {
          return a2;
        }, e2.loaded = true, e2.lib);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@emotion/react": {
      name: `@emotion/react`,
      version: `11.14.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@emotion/react`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {"@emotion/react": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@mui/private-theming": {
      name: `@mui/private-theming`,
      version: `9.4.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@mui/private-theming`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {"@mui/private-theming": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@mui/system": {
      name: `@mui/system`,
      version: `9.4.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@mui/system`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {"@mui/system": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    "@mui/material": {
      name: `@mui/material`,
      version: `9.4.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i[`@mui/material`];
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {"@mui/material": n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    },
    moment: {
      name: `moment`,
      version: `2.31.0`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      get() {
        let e2 = i.moment;
        return e2.lib ? e2.lib : (e2.loading || (e2.loading = (async () => {
          try {
            let {moment: n2} = r, i2 = t(__spreadValues({}, await n2()));
            return i2.__esModule !== true && Object.defineProperty(i2, "__esModule", {
              value: true,
              enumerable: false
            }), e2.lib = function() {
              return i2;
            }, e2.loaded = true, e2.lib;
          } finally {
            e2.loading = void 0;
          }
        })()), e2.loading);
      },
      shareConfig: {
        singleton: true,
        requiredVersion: `*`,
        strictVersion: false,
        eager: false
      }
    }
  };
  a = [];
})();
export {
  __tla,
  a as usedRemotes,
  i as usedShared
};
