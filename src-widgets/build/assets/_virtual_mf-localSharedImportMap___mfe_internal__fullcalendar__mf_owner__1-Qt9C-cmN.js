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
import {n as e, t} from "./vite-preload-helper-r6RKwCfh.js";
import {__tla as __tla_0} from "./dist-DMnNzsbI.js";
let a, i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  e();
  let n, r;
  n = (e2) => {
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
  r = {
    react: async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react__prebuild__-DdbhCVVH.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react/jsx-dev-runtime": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react_mf_1_jsx_mf_2_dev_mf_2_runtime__prebuild__-A5A_f5qa.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react/jsx-runtime": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react_mf_1_jsx_mf_2_runtime__prebuild__-HABeMIRl.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react-dom": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react_mf_2_dom__prebuild__-M64sJ1Ki.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "react-dom/client": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__react_mf_2_dom_mf_1_client__prebuild__-N8_dCmmF.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/private-theming": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild___mf_0_mui_mf_1_private_mf_2_theming__prebuild__-DKHjmsBJ.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/system": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild___mf_0_mui_mf_1_system__prebuild__-BoSGrvgw.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/material": async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild___mf_0_mui_mf_1_material__prebuild__-DeFuJmzi.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    moment: async () => await t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__62832661403724__prebuild__moment__prebuild__-CosI-UqM.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url)
  };
  i = {
    react: {
      name: `react`,
      version: `19.2.8`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      async get() {
        i.react.loaded = true;
        let {react: e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      version: `19.2.8`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      async get() {
        i[`react/jsx-dev-runtime`].loaded = true;
        let {"react/jsx-dev-runtime": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      version: `19.2.8`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      async get() {
        i[`react/jsx-runtime`].loaded = true;
        let {"react/jsx-runtime": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      version: `19.2.8`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      async get() {
        i[`react-dom`].loaded = true;
        let {"react-dom": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      version: `19.2.8`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      async get() {
        i[`react-dom/client`].loaded = true;
        let {"react-dom/client": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      async get() {
        i[`@mui/private-theming`].loaded = true;
        let {"@mui/private-theming": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      async get() {
        i[`@mui/system`].loaded = true;
        let {"@mui/system": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      async get() {
        i[`@mui/material`].loaded = true;
        let {"@mui/material": e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
      version: `2.30.1`,
      scope: [
        `default`
      ],
      loaded: false,
      materialize: true,
      eager: false,
      from: `fullcalendar`,
      canLiveRebind: true,
      async get() {
        i.moment.loaded = true;
        let {moment: e2} = r, t2 = n(__spreadValues({}, await e2()));
        return t2.__esModule !== true && Object.defineProperty(t2, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return t2;
        };
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
});
export {
  __tla,
  a as usedRemotes,
  i as usedShared
};
