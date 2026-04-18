import { g as f } from "./_commonjsHelpers-Cpj98o6Y.js";
import { f as i } from "./fullcalendar__mf_v__runtimeInit__mf_v__-CdxiMOBu.js";
let d, p, s;
let __tla = (async () => {
  function c(e, n) {
    for (var o = 0; o < n.length; o++) {
      const t = n[o];
      if (typeof t != "string" && !Array.isArray(t)) {
        for (const r in t) if (r !== "default" && !(r in e)) {
          const a = Object.getOwnPropertyDescriptor(t, r);
          a && Object.defineProperty(e, r, a.get ? a : {
            enumerable: true,
            get: () => t[r]
          });
        }
      }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }));
  }
  const { initPromise: _ } = i, l = _.then((e) => e.loadShare("react", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), u = await l.then((e) => e());
  s = u;
  d = f(s);
  p = c({
    __proto__: null,
    default: d
  }, [
    s
  ]);
})();
export {
  d as R,
  __tla,
  p as a,
  s as f
};
