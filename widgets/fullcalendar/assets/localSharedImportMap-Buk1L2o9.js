import { _ as a } from "./preload-helper-PPVm8Dsz.js";
let s, n;
let __tla = (async () => {
  let o;
  o = {
    "@iobroker/adapter-react-v5": async () => await a(() => import("./index-DaNezsYm.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/icons-material": async () => await a(() => import("./index-CvEFSrGM.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/material": async () => await a(() => import("./index-CZkgzFqv.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "@mui/system": async () => await a(() => import("./index-LE7GJxTQ.js").then(async (m) => {
      await m.__tla;
      return m;
    }), [], import.meta.url),
    "prop-types": async () => await a(() => import("./index-tYxjlyi1.js").then((t) => t.i), [], import.meta.url),
    react: async () => await a(() => import("./index-Bp8YALYU.js").then((t) => t.i), [], import.meta.url),
    "react-dom": async () => await a(() => import("./index-DdzsqzWB.js").then(async (m) => {
      await m.__tla;
      return m;
    }).then((t) => t.i), [], import.meta.url)
  };
  n = {
    "@iobroker/adapter-react-v5": {
      name: "@iobroker/adapter-react-v5",
      version: "8.2.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n["@iobroker/adapter-react-v5"].loaded = true;
        const { "@iobroker/adapter-react-v5": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/icons-material": {
      name: "@mui/icons-material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n["@mui/icons-material"].loaded = true;
        const { "@mui/icons-material": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/material": {
      name: "@mui/material",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n["@mui/material"].loaded = true;
        const { "@mui/material": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "@mui/system": {
      name: "@mui/system",
      version: "6.5.0",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n["@mui/system"].loaded = true;
        const { "@mui/system": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "prop-types": {
      name: "prop-types",
      version: "15.8.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n["prop-types"].loaded = true;
        const { "prop-types": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    react: {
      name: "react",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n.react.loaded = true;
        const { react: e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    },
    "react-dom": {
      name: "react-dom",
      version: "18.3.1",
      scope: [
        "default"
      ],
      loaded: false,
      from: "__mfe_internal__fullcalendar",
      async get() {
        n["react-dom"].loaded = true;
        const { "react-dom": e } = o, r = {
          ...await e()
        };
        return Object.defineProperty(r, "__esModule", {
          value: true,
          enumerable: false
        }), function() {
          return r;
        };
      },
      shareConfig: {
        singleton: true,
        requiredVersion: "*"
      }
    }
  };
  s = [];
})();
export {
  __tla,
  s as usedRemotes,
  n as usedShared
};
