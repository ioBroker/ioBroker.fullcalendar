import { __tla as __tla_0 } from "./__mfe_internal__fullcalendar__loadShare__prop_mf_2_types__loadShare__.js-DBhwUaK5.js";
import { o as Te, __tla as __tla_1 } from "./__mfe_internal__fullcalendar__loadShare__react__loadShare__.js-Bs1ZpPYs.js";
let Ye, Be, ar, sr, nr, rr, O, tr, er, z, Pt, At, Jt, ot, ut, mt, ct, lt, pt, ee, at, dt, it, ft, T, Kt, Vt, Rt, He, re, st, L, ke, R, te, ue, tt, N, wt, or, x, Mt, ie, Ot, St, Ct, xt, yt, bt, $t, Tt, Et, _t, Ne, p, pe, Bt, ye, jt, vt, ht, gt, h, he, K, M, Dt, ne, nt, ir, Re, Oe, _, Ue, ae, J, ze, We, Qt, B, Ae, ur, je, qt, Xt, Zt, kt, Ke, Ut, lr, _e, cr, Fe, V, b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  ae = function(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  };
  const Ie = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
      ...r,
      [n.key]: n.val
    }), {});
  };
  We = function(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: n = 5, ...s } = e, o = Ie(t), i = Object.keys(o);
    function a(l) {
      return `@media (min-width:${typeof t[l] == "number" ? t[l] : l}${r})`;
    }
    function u(l) {
      return `@media (max-width:${(typeof t[l] == "number" ? t[l] : l) - n / 100}${r})`;
    }
    function c(l, y) {
      const m = i.indexOf(y);
      return `@media (min-width:${typeof t[l] == "number" ? t[l] : l}${r}) and (max-width:${(m !== -1 && typeof t[i[m]] == "number" ? t[i[m]] : y) - n / 100}${r})`;
    }
    function g(l) {
      return i.indexOf(l) + 1 < i.length ? c(l, i[i.indexOf(l) + 1]) : a(l);
    }
    function d(l) {
      const y = i.indexOf(l);
      return y === 0 ? a(i[1]) : y === i.length - 1 ? u(i[y]) : c(l, i[i.indexOf(l) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: i,
      values: o,
      up: a,
      down: u,
      between: c,
      only: g,
      not: d,
      unit: r,
      ...s
    };
  };
  var Ee = {
    exports: {}
  }, f = {};
  var fe = /* @__PURE__ */ Symbol.for("react.transitional.element"), de = /* @__PURE__ */ Symbol.for("react.portal"), G = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), H = /* @__PURE__ */ Symbol.for("react.consumer"), U = /* @__PURE__ */ Symbol.for("react.context"), D = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), Me = /* @__PURE__ */ Symbol.for("react.view_transition"), Le = /* @__PURE__ */ Symbol.for("react.client.reference");
  function E(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case fe:
          switch (e = e.type, e) {
            case G:
            case F:
            case Y:
            case Q:
            case k:
            case Me:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case U:
                case D:
                case q:
                case X:
                  return e;
                case H:
                  return e;
                default:
                  return t;
              }
          }
        case de:
          return t;
      }
    }
  }
  f.ContextConsumer = H;
  f.ContextProvider = U;
  f.Element = fe;
  f.ForwardRef = D;
  f.Fragment = G;
  f.Lazy = q;
  f.Memo = X;
  f.Portal = de;
  f.Profiler = F;
  f.StrictMode = Y;
  f.Suspense = Q;
  f.SuspenseList = k;
  f.isContextConsumer = function(e) {
    return E(e) === H;
  };
  f.isContextProvider = function(e) {
    return E(e) === U;
  };
  f.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fe;
  };
  f.isForwardRef = function(e) {
    return E(e) === D;
  };
  f.isFragment = function(e) {
    return E(e) === G;
  };
  f.isLazy = function(e) {
    return E(e) === q;
  };
  f.isMemo = function(e) {
    return E(e) === X;
  };
  f.isPortal = function(e) {
    return E(e) === de;
  };
  f.isProfiler = function(e) {
    return E(e) === F;
  };
  f.isStrictMode = function(e) {
    return E(e) === Y;
  };
  f.isSuspense = function(e) {
    return E(e) === Q;
  };
  f.isSuspenseList = function(e) {
    return E(e) === k;
  };
  f.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === G || e === F || e === Y || e === Q || e === k || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === X || e.$$typeof === U || e.$$typeof === H || e.$$typeof === D || e.$$typeof === Le || e.getModuleId !== void 0);
  };
  f.typeOf = E;
  Ee.exports = f;
  var $e = Ee.exports;
  B = function(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  function we(e) {
    if (Te(e) || $e.isValidElementType(e) || !B(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = we(e[r]);
    }), t;
  }
  _ = function(e, t, r = {
    clone: true
  }) {
    const n = r.clone ? {
      ...e
    } : e;
    return B(e) && B(t) && Object.keys(t).forEach((s) => {
      Te(t[s]) || $e.isValidElementType(t[s]) ? n[s] = t[s] : B(t[s]) && Object.prototype.hasOwnProperty.call(e, s) && B(e[s]) ? n[s] = _(e[s], t[s], r) : r.clone ? n[s] = B(t[s]) ? we(t[s]) : t[s] : n[s] = t[s];
    }), n;
  };
  ze = function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  };
  function me(e, t = 0, r = 1) {
    return ze(e, t, r);
  }
  Ne = function(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, s) => s < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  };
  function Ge(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
  R = function(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return R(Ne(e));
    const t = e.indexOf("("), r = e.substring(0, t);
    if (![
      "rgb",
      "rgba",
      "hsl",
      "hsla",
      "color"
    ].includes(r)) throw new Error(ae(9, e));
    let n = e.substring(t + 1, e.length - 1), s;
    if (r === "color") {
      if (n = n.split(" "), s = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ![
        "srgb",
        "display-p3",
        "a98-rgb",
        "prophoto-rgb",
        "rec-2020"
      ].includes(s)) throw new Error(ae(10, s));
    } else n = n.split(",");
    return n = n.map((o) => parseFloat(o)), {
      type: r,
      values: n,
      colorSpace: s
    };
  };
  Ye = (e) => {
    const t = R(e);
    return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
  };
  Ut = (e, t) => {
    try {
      return Ye(e);
    } catch {
      return e;
    }
  };
  M = function(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return t.includes("rgb") ? n = n.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
  };
  Dt = function(e) {
    if (e.startsWith("#")) return e;
    const { values: t } = R(e);
    return `#${t.map((r, n) => Ge(n === 3 ? Math.round(255 * r) : r)).join("")}`;
  };
  Fe = function(e) {
    e = R(e);
    const { values: t } = e, r = t[0], n = t[1] / 100, s = t[2] / 100, o = n * Math.min(s, 1 - s), i = (c, g = (c + r / 30) % 12) => s - o * Math.max(Math.min(g - 3, 9 - g, 1), -1);
    let a = "rgb";
    const u = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return e.type === "hsla" && (a += "a", u.push(t[3])), M({
      type: a,
      values: u
    });
  };
  ue = function(e) {
    e = R(e);
    let t = e.type === "hsl" || e.type === "hsla" ? R(Fe(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  };
  Qt = function(e, t) {
    const r = ue(e), n = ue(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  };
  He = function(e, t) {
    return e = R(e), t = me(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, M(e);
  };
  kt = function(e, t, r) {
    try {
      return He(e, t);
    } catch {
      return e;
    }
  };
  Re = function(e, t) {
    if (e = R(e), t = me(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return M(e);
  };
  Xt = function(e, t, r) {
    try {
      return Re(e, t);
    } catch {
      return e;
    }
  };
  Ae = function(e, t) {
    if (e = R(e), t = me(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return M(e);
  };
  qt = function(e, t, r) {
    try {
      return Ae(e, t);
    } catch {
      return e;
    }
  };
  Ue = function(e, t = 0.15) {
    return ue(e) > 0.5 ? Re(e, t) : Ae(e, t);
  };
  Zt = function(e, t, r) {
    try {
      return Ue(e, t);
    } catch {
      return e;
    }
  };
  Jt = function(e, t, r, n = 1) {
    const s = (u, c) => Math.round((u ** (1 / n) * (1 - r) + c ** (1 / n) * r) ** n), o = R(e), i = R(t), a = [
      s(o.values[0], i.values[0]),
      s(o.values[1], i.values[1]),
      s(o.values[2], i.values[2])
    ];
    return M({
      type: "rgb",
      values: a
    });
  };
  function j(e, t) {
    return t ? _(e, t, {
      clone: false
    }) : e;
  }
  function Ce(e, t) {
    if (!e.containerQueries) return t;
    const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, s) => {
      var _a, _b;
      const o = /min-width:\s*([0-9.]+)/;
      return +(((_a = n.match(o)) == null ? void 0 : _a[1]) || 0) - +(((_b = s.match(o)) == null ? void 0 : _b[1]) || 0);
    });
    return r.length ? r.reduce((n, s) => {
      const o = t[s];
      return delete n[s], n[s] = o, n;
    }, {
      ...t
    }) : t;
  }
  function De(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function Qe(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, n, s] = r, o = Number.isNaN(+n) ? n || 0 : +n;
    return e.containerQueries(s).up(o);
  }
  ke = function(e) {
    const t = (o, i) => o.replace("@media", i ? `@container ${i}` : "@container");
    function r(o, i) {
      o.up = (...a) => t(e.breakpoints.up(...a), i), o.down = (...a) => t(e.breakpoints.down(...a), i), o.between = (...a) => t(e.breakpoints.between(...a), i), o.only = (...a) => t(e.breakpoints.only(...a), i), o.not = (...a) => {
        const u = t(e.breakpoints.not(...a), i);
        return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
      };
    }
    const n = {}, s = (o) => (r(n, o), n);
    return r(s), {
      ...e,
      containerQueries: s
    };
  };
  const Z = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, le = {
    keys: [
      "xs",
      "sm",
      "md",
      "lg",
      "xl"
    ],
    up: (e) => `@media (min-width:${Z[e]}px)`
  }, Xe = {
    containerQueries: (e) => ({
      up: (t) => {
        let r = typeof t == "number" ? t : Z[t] || t;
        return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
      }
    })
  };
  O = function(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const o = n.breakpoints || le;
      return t.reduce((i, a, u) => (i[o.up(o.keys[u])] = r(t[u]), i), {});
    }
    if (typeof t == "object") {
      const o = n.breakpoints || le;
      return Object.keys(t).reduce((i, a) => {
        if (De(o.keys, a)) {
          const u = Qe(n.containerQueries ? n : Xe, a);
          u && (i[u] = r(t[a], a));
        } else if (Object.keys(o.values || Z).includes(a)) {
          const u = o.up(a);
          i[u] = r(t[a], a);
        } else {
          const u = a;
          i[u] = t[u];
        }
        return i;
      }, {});
    }
    return r(t);
  };
  Vt = function(e) {
    const t = (r) => {
      const n = r.theme || {}, s = e(r), o = n.breakpoints || le, i = o.keys.reduce((a, u) => (r[u] && (a = a || {}, a[o.up(u)] = e({
        theme: n,
        ...r[u]
      })), a), null);
      return j(s, i);
    };
    return t.propTypes = {}, t.filterProps = [
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      ...e.filterProps
    ], t;
  };
  function Pe(e = {}) {
    var _a;
    return ((_a = e.keys) == null ? void 0 : _a.reduce((r, n) => {
      const s = e.up(n);
      return r[s] = {}, r;
    }, {})) || {};
  }
  function ce(e, t) {
    return e.reduce((r, n) => {
      const s = r[n];
      return (!s || Object.keys(s).length === 0) && delete r[n], r;
    }, t);
  }
  er = function(e, ...t) {
    const r = Pe(e), n = [
      r,
      ...t
    ].reduce((s, o) => _(s, o), {});
    return ce(Object.keys(r), n);
  };
  function qe(e, t) {
    if (typeof e != "object") return {};
    const r = {}, n = Object.keys(t);
    return Array.isArray(e) ? n.forEach((s, o) => {
      o < e.length && (r[s] = true);
    }) : n.forEach((s) => {
      e[s] != null && (r[s] = true);
    }), r;
  }
  tr = function({ values: e, breakpoints: t, base: r }) {
    const n = r || qe(e, t), s = Object.keys(n);
    if (s.length === 0) return e;
    let o;
    return s.reduce((i, a, u) => (Array.isArray(e) ? (i[a] = e[u] != null ? e[u] : e[o], o = u) : typeof e == "object" ? (i[a] = e[a] != null ? e[a] : e[o], o = a) : i[a] = e, i), {});
  };
  Oe = function(e) {
    if (typeof e != "string") throw new Error(ae(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  };
  J = function(e, t, r = true) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && r) {
      const n = `vars.${t}`.split(".").reduce((s, o) => s && s[o] ? s[o] : null, e);
      if (n != null) return n;
    }
    return t.split(".").reduce((n, s) => n && n[s] != null ? n[s] : null, e);
  };
  N = function(e, t, r, n = r) {
    let s;
    return typeof e == "function" ? s = e(r) : Array.isArray(e) ? s = e[r] || n : s = J(e, r) || n, t && (s = t(s, n, e)), s;
  };
  b = function(e) {
    const { prop: t, cssProperty: r = e.prop, themeKey: n, transform: s } = e, o = (i) => {
      if (i[t] == null) return null;
      const a = i[t], u = i.theme, c = J(u, n) || {};
      return O(i, a, (d) => {
        let l = N(c, s, d);
        return d === l && typeof d == "string" && (l = N(c, s, `${t}${d === "default" ? "" : Oe(d)}`, d)), r === false ? l : {
          [r]: l
        };
      });
    };
    return o.propTypes = {}, o.filterProps = [
      t
    ], o;
  };
  function Ze(e) {
    const t = {};
    return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
  }
  let Je, Ve, Se, et, ve;
  Je = {
    m: "margin",
    p: "padding"
  };
  Ve = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: [
      "Left",
      "Right"
    ],
    y: [
      "Top",
      "Bottom"
    ]
  };
  Se = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  et = Ze((e) => {
    if (e.length > 2) if (Se[e]) e = Se[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), n = Je[t], s = Ve[r] || "";
    return Array.isArray(s) ? s.map((o) => n + o) : [
      n + s
    ];
  });
  pe = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd"
  ];
  he = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd"
  ];
  ve = [
    ...pe,
    ...he
  ];
  L = function(e, t, r, n) {
    const s = J(e, t, true) ?? r;
    return typeof s == "number" || typeof s == "string" ? (o) => typeof o == "string" ? o : typeof s == "string" ? `calc(${o} * ${s})` : s * o : Array.isArray(s) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = s[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof s == "function" ? s : () => {
    };
  };
  _e = function(e) {
    return L(e, "spacing", 8);
  };
  z = function(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  };
  tt = function(e, t) {
    return (r) => e.reduce((n, s) => (n[s] = z(t, r), n), {});
  };
  function rt(e, t, r, n) {
    if (!t.includes(r)) return null;
    const s = et(r), o = tt(s, n), i = e[r];
    return O(e, i, o);
  }
  function ge(e, t) {
    const r = _e(e.theme);
    return Object.keys(e).map((n) => rt(e, t, n, r)).reduce(j, {});
  }
  p = function(e) {
    return ge(e, pe);
  };
  p.propTypes = {};
  p.filterProps = pe;
  h = function(e) {
    return ge(e, he);
  };
  h.propTypes = {};
  h.filterProps = he;
  Be = function(e) {
    return ge(e, ve);
  };
  Be.propTypes = {};
  Be.filterProps = ve;
  nt = {
    borderRadius: 4
  };
  st = function(e = 8, t = _e({
    spacing: e
  })) {
    if (e.mui) return e;
    const r = (...n) => (n.length === 0 ? [
      1
    ] : n).map((o) => {
      const i = t(o);
      return typeof i == "number" ? `${i}px` : i;
    }).join(" ");
    return r.mui = true, r;
  };
  V = function(...e) {
    const t = e.reduce((n, s) => (s.filterProps.forEach((o) => {
      n[o] = s;
    }), n), {}), r = (n) => Object.keys(n).reduce((s, o) => t[o] ? j(s, t[o](n)) : s, {});
    return r.propTypes = {}, r.filterProps = e.reduce((n, s) => n.concat(s.filterProps), []), r;
  };
  T = function(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  };
  function $(e, t) {
    return b({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  ot = $("border", T);
  it = $("borderTop", T);
  at = $("borderRight", T);
  ut = $("borderBottom", T);
  lt = $("borderLeft", T);
  ct = $("borderColor");
  ft = $("borderTopColor");
  dt = $("borderRightColor");
  mt = $("borderBottomColor");
  pt = $("borderLeftColor");
  ht = $("outline", T);
  gt = $("outlineColor");
  ee = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = L(e.theme, "shape.borderRadius", 4), r = (n) => ({
        borderRadius: z(t, n)
      });
      return O(e, e.borderRadius, r);
    }
    return null;
  };
  ee.propTypes = {};
  ee.filterProps = [
    "borderRadius"
  ];
  rr = V(ot, it, at, ut, lt, ct, ft, dt, mt, pt, ee, ht, gt);
  te = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = L(e.theme, "spacing", 8), r = (n) => ({
        gap: z(t, n)
      });
      return O(e, e.gap, r);
    }
    return null;
  };
  te.propTypes = {};
  te.filterProps = [
    "gap"
  ];
  re = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = L(e.theme, "spacing", 8), r = (n) => ({
        columnGap: z(t, n)
      });
      return O(e, e.columnGap, r);
    }
    return null;
  };
  re.propTypes = {};
  re.filterProps = [
    "columnGap"
  ];
  ne = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = L(e.theme, "spacing", 8), r = (n) => ({
        rowGap: z(t, n)
      });
      return O(e, e.rowGap, r);
    }
    return null;
  };
  ne.propTypes = {};
  ne.filterProps = [
    "rowGap"
  ];
  yt = b({
    prop: "gridColumn"
  });
  bt = b({
    prop: "gridRow"
  });
  Ct = b({
    prop: "gridAutoFlow"
  });
  St = b({
    prop: "gridAutoColumns"
  });
  xt = b({
    prop: "gridAutoRows"
  });
  Tt = b({
    prop: "gridTemplateColumns"
  });
  Et = b({
    prop: "gridTemplateRows"
  });
  $t = b({
    prop: "gridTemplateAreas"
  });
  wt = b({
    prop: "gridArea"
  });
  nr = V(te, re, ne, yt, bt, Ct, St, xt, Tt, Et, $t, wt);
  K = function(e, t) {
    return t === "grey" ? t : e;
  };
  Rt = b({
    prop: "color",
    themeKey: "palette",
    transform: K
  });
  At = b({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: K
  });
  Pt = b({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: K
  });
  sr = V(Rt, At, Pt);
  x = function(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  };
  Ot = b({
    prop: "width",
    transform: x
  });
  ye = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (r) => {
        var _a, _b, _c, _d, _e2;
        const n = ((_c = (_b = (_a = e.theme) == null ? void 0 : _a.breakpoints) == null ? void 0 : _b.values) == null ? void 0 : _c[r]) || Z[r];
        return n ? ((_e2 = (_d = e.theme) == null ? void 0 : _d.breakpoints) == null ? void 0 : _e2.unit) !== "px" ? {
          maxWidth: `${n}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: n
        } : {
          maxWidth: x(r)
        };
      };
      return O(e, e.maxWidth, t);
    }
    return null;
  };
  ye.filterProps = [
    "maxWidth"
  ];
  vt = b({
    prop: "minWidth",
    transform: x
  });
  _t = b({
    prop: "height",
    transform: x
  });
  Bt = b({
    prop: "maxHeight",
    transform: x
  });
  jt = b({
    prop: "minHeight",
    transform: x
  });
  or = b({
    prop: "size",
    cssProperty: "width",
    transform: x
  });
  ir = b({
    prop: "size",
    cssProperty: "height",
    transform: x
  });
  Kt = b({
    prop: "boxSizing"
  });
  ar = V(Ot, ye, vt, _t, Bt, jt, Kt);
  je = {
    border: {
      themeKey: "borders",
      transform: T
    },
    borderTop: {
      themeKey: "borders",
      transform: T
    },
    borderRight: {
      themeKey: "borders",
      transform: T
    },
    borderBottom: {
      themeKey: "borders",
      transform: T
    },
    borderLeft: {
      themeKey: "borders",
      transform: T
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    outline: {
      themeKey: "borders",
      transform: T
    },
    outlineColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: ee
    },
    color: {
      themeKey: "palette",
      transform: K
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: K
    },
    backgroundColor: {
      themeKey: "palette",
      transform: K
    },
    p: {
      style: h
    },
    pt: {
      style: h
    },
    pr: {
      style: h
    },
    pb: {
      style: h
    },
    pl: {
      style: h
    },
    px: {
      style: h
    },
    py: {
      style: h
    },
    padding: {
      style: h
    },
    paddingTop: {
      style: h
    },
    paddingRight: {
      style: h
    },
    paddingBottom: {
      style: h
    },
    paddingLeft: {
      style: h
    },
    paddingX: {
      style: h
    },
    paddingY: {
      style: h
    },
    paddingInline: {
      style: h
    },
    paddingInlineStart: {
      style: h
    },
    paddingInlineEnd: {
      style: h
    },
    paddingBlock: {
      style: h
    },
    paddingBlockStart: {
      style: h
    },
    paddingBlockEnd: {
      style: h
    },
    m: {
      style: p
    },
    mt: {
      style: p
    },
    mr: {
      style: p
    },
    mb: {
      style: p
    },
    ml: {
      style: p
    },
    mx: {
      style: p
    },
    my: {
      style: p
    },
    margin: {
      style: p
    },
    marginTop: {
      style: p
    },
    marginRight: {
      style: p
    },
    marginBottom: {
      style: p
    },
    marginLeft: {
      style: p
    },
    marginX: {
      style: p
    },
    marginY: {
      style: p
    },
    marginInline: {
      style: p
    },
    marginInlineStart: {
      style: p
    },
    marginInlineEnd: {
      style: p
    },
    marginBlock: {
      style: p
    },
    marginBlockStart: {
      style: p
    },
    marginBlockEnd: {
      style: p
    },
    displayPrint: {
      cssProperty: false,
      transform: (e) => ({
        "@media print": {
          display: e
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: te
    },
    rowGap: {
      style: ne
    },
    columnGap: {
      style: re
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: x
    },
    maxWidth: {
      style: ye
    },
    minWidth: {
      transform: x
    },
    height: {
      transform: x
    },
    maxHeight: {
      transform: x
    },
    minHeight: {
      transform: x
    },
    boxSizing: {},
    font: {
      themeKey: "font"
    },
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: "typography"
    }
  };
  function It(...e) {
    const t = e.reduce((n, s) => n.concat(Object.keys(s)), []), r = new Set(t);
    return e.every((n) => r.size === Object.keys(n).length);
  }
  function Wt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  Mt = function() {
    function e(r, n, s, o) {
      const i = {
        [r]: n,
        theme: s
      }, a = o[r];
      if (!a) return {
        [r]: n
      };
      const { cssProperty: u = r, themeKey: c, transform: g, style: d } = a;
      if (n == null) return null;
      if (c === "typography" && n === "inherit") return {
        [r]: n
      };
      const l = J(s, c) || {};
      return d ? d(i) : O(i, n, (m) => {
        let A = N(l, g, m);
        return m === A && typeof m == "string" && (A = N(l, g, `${r}${m === "default" ? "" : Oe(m)}`, m)), u === false ? A : {
          [u]: A
        };
      });
    }
    function t(r) {
      const { sx: n, theme: s = {}, nested: o } = r || {};
      if (!n) return null;
      const i = s.unstable_sxConfig ?? je;
      function a(u) {
        let c = u;
        if (typeof u == "function") c = u(s);
        else if (typeof u != "object") return u;
        if (!c) return null;
        const g = Pe(s.breakpoints), d = Object.keys(g);
        let l = g;
        return Object.keys(c).forEach((y) => {
          const m = Wt(c[y], s);
          if (m != null) if (typeof m == "object") if (i[y]) l = j(l, e(y, m, s, i));
          else {
            const A = O({
              theme: s
            }, m, (se) => ({
              [y]: se
            }));
            It(A, m) ? l[y] = t({
              sx: m,
              theme: s,
              nested: true
            }) : l = j(l, A);
          }
          else l = j(l, e(y, m, s, i));
        }), !o && s.modularCssLayers ? {
          "@layer sx": Ce(s, ce(d, l))
        } : Ce(s, ce(d, l));
      }
      return Array.isArray(n) ? n.map(a) : a(n);
    }
    return t;
  };
  Ke = Mt();
  Ke.filterProps = [
    "sx"
  ];
  function Lt(e, t) {
    var _a;
    const r = this;
    if (r.vars) {
      if (!((_a = r.colorSchemes) == null ? void 0 : _a[e]) || typeof r.getColorSchemeSelector != "function") return {};
      let n = r.getColorSchemeSelector(e);
      return n === "&" ? t : ((n.includes("data-") || n.includes(".")) && (n = `*:where(${n.replace(/\s*&$/, "")}) &`), {
        [n]: t
      });
    }
    return r.palette.mode === e ? t : {};
  }
  ur = function(e = {}, ...t) {
    const { breakpoints: r = {}, palette: n = {}, spacing: s, shape: o = {}, ...i } = e, a = We(r), u = st(s);
    let c = _({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...n
      },
      spacing: u,
      shape: {
        ...nt,
        ...o
      }
    }, i);
    return c = ke(c), c.applyStyles = Lt, c = t.reduce((g, d) => _(g, d), c), c.unstable_sxConfig = {
      ...je,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, c.unstable_sx = function(d) {
      return Ke({
        sx: d,
        theme: this
      });
    }, c;
  };
  const xe = (e, t, r, n = []) => {
    let s = e;
    t.forEach((o, i) => {
      i === t.length - 1 ? Array.isArray(s) ? s[Number(o)] = r : s && typeof s == "object" && (s[o] = r) : s && typeof s == "object" && (s[o] || (s[o] = n.includes(o) ? [] : {}), s = s[o]);
    });
  }, zt = (e, t, r) => {
    function n(s, o = [], i = []) {
      Object.entries(s).forEach(([a, u]) => {
        (!r || r && !r([
          ...o,
          a
        ])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [
          ...o,
          a
        ], Array.isArray(u) ? [
          ...i,
          a
        ] : i) : t([
          ...o,
          a
        ], u, i));
      });
    }
    n(e);
  }, Nt = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  ie = function(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, s = {}, o = {}, i = {};
    return zt(e, (a, u, c) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(a, u))) {
        const g = `--${r ? `${r}-` : ""}${a.join("-")}`, d = Nt(a, u);
        Object.assign(s, {
          [g]: d
        }), xe(o, a, `var(${g})`, c), xe(i, a, `var(${g}, ${d})`, c);
      }
    }, (a) => a[0] === "vars"), {
      css: s,
      vars: o,
      varsWithDefaults: i
    };
  };
  lr = function(e, t = {}) {
    const { getSelector: r = se, disableCssColorScheme: n, colorSchemeSelector: s } = t, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...u } = e, { vars: c, css: g, varsWithDefaults: d } = ie(u, t);
    let l = d;
    const y = {}, { [a]: m, ...A } = o;
    if (Object.entries(A || {}).forEach(([C, w]) => {
      const { vars: S, css: I, varsWithDefaults: oe } = ie(w, t);
      l = _(l, oe), y[C] = {
        css: I,
        vars: S
      };
    }), m) {
      const { css: C, vars: w, varsWithDefaults: S } = ie(m, t);
      l = _(l, S), y[a] = {
        css: C,
        vars: w
      };
    }
    function se(C, w) {
      var _a, _b;
      let S = s;
      if (s === "class" && (S = ".%s"), s === "data" && (S = "[data-%s]"), (s == null ? void 0 : s.startsWith("data-")) && !s.includes("%s") && (S = `[${s}="%s"]`), C) {
        if (S === "media") return e.defaultColorScheme === C ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a = o[C]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || C})`]: {
            ":root": w
          }
        };
        if (S) return e.defaultColorScheme === C ? `:root, ${S.replace("%s", String(C))}` : S.replace("%s", String(C));
      }
      return ":root";
    }
    return {
      vars: l,
      generateThemeVars: () => {
        let C = {
          ...c
        };
        return Object.entries(y).forEach(([, { vars: w }]) => {
          C = _(C, w);
        }), C;
      },
      generateStyleSheets: () => {
        var _a, _b;
        const C = [], w = e.defaultColorScheme || "light";
        function S(P, v) {
          Object.keys(v).length && C.push(typeof P == "string" ? {
            [P]: {
              ...v
            }
          } : P);
        }
        S(r(void 0, {
          ...g
        }), g);
        const { [w]: I, ...oe } = y;
        if (I) {
          const { css: P } = I, v = (_b = (_a = o[w]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode, W = !n && v ? {
            colorScheme: v,
            ...P
          } : {
            ...P
          };
          S(r(w, {
            ...W
          }), W);
        }
        return Object.entries(oe).forEach(([P, { css: v }]) => {
          var _a2, _b2;
          const W = (_b2 = (_a2 = o[P]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, be = !n && W ? {
            colorScheme: W,
            ...v
          } : {
            ...v
          };
          S(r(P, {
            ...be
          }), be);
        }), C;
      }
    };
  };
  cr = function(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  };
});
export {
  Ye as $,
  Be as A,
  ar as B,
  sr as C,
  nr as D,
  rr as E,
  O as F,
  tr as G,
  er as H,
  z as I,
  Pt as J,
  At as K,
  Jt as L,
  ot as M,
  ut as N,
  mt as O,
  ct as P,
  lt as Q,
  pt as R,
  ee as S,
  at as T,
  dt as U,
  it as V,
  ft as W,
  T as X,
  Kt as Y,
  Vt as Z,
  Rt as _,
  __tla,
  He as a,
  re as a0,
  st as a1,
  L as a2,
  ke as a3,
  R as a4,
  te as a5,
  ue as a6,
  tt as a7,
  N as a8,
  wt as a9,
  or as aA,
  x as aB,
  Mt as aC,
  ie as aD,
  Ot as aE,
  St as aa,
  Ct as ab,
  xt as ac,
  yt as ad,
  bt as ae,
  $t as af,
  Tt as ag,
  Et as ah,
  _t as ai,
  Ne as aj,
  p as ak,
  pe as al,
  Bt as am,
  ye as an,
  jt as ao,
  vt as ap,
  ht as aq,
  gt as ar,
  h as as,
  he as at,
  K as au,
  M as av,
  Dt as aw,
  ne as ax,
  nt as ay,
  ir as az,
  Re as b,
  Oe as c,
  _ as d,
  Ue as e,
  ae as f,
  J as g,
  ze as h,
  We as i,
  Qt as j,
  B as k,
  Ae as l,
  ur as m,
  je as n,
  qt as o,
  Xt as p,
  Zt as q,
  kt as r,
  Ke as s,
  Ut as t,
  lr as u,
  _e as v,
  cr as w,
  Fe as x,
  V as y,
  b as z
};
