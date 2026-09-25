import {n as e} from "./rolldown-runtime-Dd_uD5pT.js";
import {t} from "./vite-preload-helper-uBIymjUX.js";
let n, d;
let __tla = (async () => {
  var _a, _b;
  let r, i;
  n = e({
    HTML5_FMT: () => Z,
    ISO_8601: () => v,
    RFC_2822: () => y,
    __moduleExports: () => se,
    _getDefaultDateParts: () => _,
    calendarFormat: () => X,
    createFromInputFallback: () => g,
    default: () => d,
    defaultFormat: () => x,
    defaultFormatUtc: () => S,
    defineLocale: () => U,
    deprecationHandler: () => m,
    duration: () => F,
    fn: () => E,
    invalid: () => P,
    isDate: () => M,
    isDuration: () => B,
    isMoment: () => I,
    lang: () => C,
    langData: () => w,
    locale: () => N,
    localeData: () => z,
    locales: () => G,
    max: () => O,
    min: () => D,
    momentProperties: () => f,
    months: () => oe,
    monthsShort: () => V,
    normalizeUnits: () => q,
    now: () => k,
    parseTwoDigitYear: () => h,
    parseZone: () => R,
    relativeTimeRounding: () => J,
    relativeTimeThreshold: () => Y,
    suppressDeprecationWarnings: () => p,
    unix: () => j,
    updateLocale: () => W,
    updateOffset: () => b,
    utc: () => A,
    version: () => T,
    weekdays: () => L,
    weekdaysMin: () => H,
    weekdaysShort: () => K
  });
  r = `__mf_init__virtual:mf:__mfe_internal__fullcalendar__mf_owner__219446345750563__mf_v__runtimeInit__mf_v__.js__`;
  i = globalThis[r];
  if (!i) {
    let e2, t2, n2 = new Promise((n3, r2) => {
      e2 = n3, t2 = r2;
    });
    i = globalThis[r] = {
      initPromise: n2,
      initResolve: e2,
      initReject: t2
    };
  }
  var a = i.initPromise, o = `__mf_module_cache__`;
  globalThis[o] || (globalThis[o] = {
    share: {},
    remote: {}
  }), (_a = globalThis[o]).share || (_a.share = {}), (_b = globalThis[o]).remote || (_b.remote = {});
  var s = globalThis[o], ee = (e2) => {
    let t2 = s.pendingShareLoads || (s.pendingShareLoads = []);
    t2.push(e2);
    let n2 = () => {
      let n3 = t2.indexOf(e2);
      n3 !== -1 && t2.splice(n3, 1);
    };
    return e2.then(n2, n2), e2;
  };
  for (let e2 of Object.keys(s.share))
    if (e2.startsWith(`default:`)) {
      let t2 = e2.slice(8);
      s.share[t2] === void 0 && (s.share[t2] = s.share[e2]);
    } else if (!e2.includes(`:`)) {
      let t2 = `default:` + e2;
      s.share[t2] === void 0 && (s.share[t2] = s.share[e2]);
    }
  let c, l, te, ne, u, re, ie, ae, f, p, m, h, g, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j, oe, M, N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q;
  c = (e2, t2) => {
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
  };
  l = Symbol.for(`module-federation.shared-cache-listeners`);
  te = (e2) => {
    let t2 = e2[l];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, l, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  ne = (e2, t2, n2) => {
    var _a2;
    let r2 = te(e2);
    (r2[_a2 = t2.canonical] || (r2[_a2] = new Set())).add(n2);
  };
  u = Symbol.for(`module-federation.shared-cache-owners`);
  re = (e2) => {
    let t2 = e2[u];
    return t2 === void 0 && (t2 = Object.create(null), Object.defineProperty(e2, u, {
      value: t2,
      enumerable: false,
      configurable: false,
      writable: false
    })), t2;
  };
  ie = (e2, t2, n2, r2) => {
    e2[t2.canonical] = n2;
    let i2 = t2.aliases || [];
    for (let t3 of i2)
      Object.defineProperty(e2, t3, {
        value: n2,
        enumerable: true,
        configurable: true,
        writable: true
      });
    let a2 = e2[u];
    r2 === void 0 ? a2 && delete a2[t2.canonical] : re(e2)[t2.canonical] = r2;
    let o2 = e2[l]?.[t2.canonical];
    if (o2)
      for (let e3 of o2)
        e3(n2);
    return n2;
  };
  ae = (e2) => {
    let t2 = (() => {
      let t3 = e2;
      for (let e3 = 0; e3 < 5; e3++) {
        let e4 = t3?.default;
        if (!e4 || typeof e4 != `object`)
          break;
        let n2 = Object.keys(t3).filter((e5) => e5 !== "default").map((e5) => t3[e5]);
        if (n2.length > 0 && n2.some((e5) => e5 !== void 0))
          break;
        t3 = e4;
      }
      return t3;
    })();
    return t2 && Object.getPrototypeOf(t2) === null ? Object.assign({}, t2) : t2;
  };
  Q = (e2) => {
    f = e2.momentProperties, p = e2.suppressDeprecationWarnings, m = e2.deprecationHandler, h = e2.parseTwoDigitYear, g = e2.createFromInputFallback, _ = e2._getDefaultDateParts, v = e2.ISO_8601, y = e2.RFC_2822, b = e2.updateOffset, x = e2.defaultFormat, S = e2.defaultFormatUtc, C = e2.lang, w = e2.langData, T = e2.version, E = e2.fn, D = e2.min, O = e2.max, k = e2.now, A = e2.utc, j = e2.unix, oe = e2.months, M = e2.isDate, N = e2.locale, P = e2.invalid, F = e2.duration, I = e2.isMoment, L = e2.weekdays, R = e2.parseZone, z = e2.localeData, B = e2.isDuration, V = e2.monthsShort, H = e2.weekdaysMin, U = e2.defineLocale, W = e2.updateLocale, G = e2.locales, K = e2.weekdaysShort, q = e2.normalizeUnits, J = e2.relativeTimeRounding, Y = e2.relativeTimeThreshold, X = e2.calendarFormat, Z = e2.HTML5_FMT, d = e2.default ?? e2;
  };
  ne(s.share, {
    canonical: `default:moment`,
    aliases: [
      `moment`
    ]
  }, Q);
  var $ = c(s.share, {
    canonical: `default:moment`,
    aliases: [
      `moment`
    ]
  });
  $ === void 0 ? ee(a.then(() => {
    if ($ = c(s.share, {
      canonical: `default:moment`,
      aliases: [
        `moment`
      ]
    }), $ !== void 0) {
      Q($);
      return;
    }
    return t(() => import("./_virtual_mf___mfe_internal__fullcalendar__mf_owner__219446345750563__prebuild__moment__prebuild__-Cp9x5vPa.js").then(async (m2) => {
      await m2.__tla;
      return m2;
    }).then((e2) => {
      $ = ae(e2), ie(s.share, {
        canonical: `default:moment`,
        aliases: [
          `moment`
        ]
      }, $, `fullcalendar`);
    }), [], import.meta.url);
  })) : Q($);
  var se = $;
})();
export {
  __tla,
  n,
  d as t
};
