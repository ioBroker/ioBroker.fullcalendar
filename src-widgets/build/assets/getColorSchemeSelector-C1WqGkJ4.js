import { g as Ke } from "./_commonjsHelpers-Cpj98o6Y.js";
import { f as Me } from "./fullcalendar__mf_v__runtimeInit__mf_v__-CdxiMOBu.js";
import { f as Ee, __tla as __tla_0 } from "./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js";
let wt, ve, ar, sr, nr, rr, A, tr, er, L, Rt, $t, gr, st, at, dt, Jt, lt, ut, mt, ee, it, ft, ot, ct, E, jt, Vt, je, Gt, re, nt, W, Qe, $, te, ce, tt, N, ir, or, x, Mt, ie, Pt, _t, St, bt, Ct, gt, yt, Tt, xt, Et, vt, zt, p, me, Ot, ge, Bt, At, pt, ht, h, pe, I, z, cr, ne, ke, Ft, Re, O, Dt, ae, J, Lt, De, fr, B, Ie, ur, Oe, pr, mr, hr, dr, Be, lr, yr, Ae, br, Yt, V, b;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const { initPromise: We } = Me, Le = We.then((e) => e.loadShare("prop-types", {
    customShareInfo: {
      shareConfig: {
        singleton: true,
        strictVersion: false,
        requiredVersion: "*"
      }
    }
  })), ze = await Le.then((e) => e());
  var Ne = ze;
  Jt = Ke(Ne);
  ae = function(e, ...t) {
    const r = new URL(`https://mui.com/production-error/?code=${e}`);
    return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
  };
  var Te = {
    exports: {}
  }, f = {};
  var fe = /* @__PURE__ */ Symbol.for("react.transitional.element"), de = /* @__PURE__ */ Symbol.for("react.portal"), G = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), D = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), U = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), X = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), Ge = /* @__PURE__ */ Symbol.for("react.view_transition"), Ye = /* @__PURE__ */ Symbol.for("react.client.reference");
  function T(e) {
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
            case Ge:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case H:
                case U:
                case q:
                case X:
                  return e;
                case D:
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
  f.ContextConsumer = D;
  f.ContextProvider = H;
  f.Element = fe;
  f.ForwardRef = U;
  f.Fragment = G;
  f.Lazy = q;
  f.Memo = X;
  f.Portal = de;
  f.Profiler = F;
  f.StrictMode = Y;
  f.Suspense = Q;
  f.SuspenseList = k;
  f.isContextConsumer = function(e) {
    return T(e) === D;
  };
  f.isContextProvider = function(e) {
    return T(e) === H;
  };
  f.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === fe;
  };
  f.isForwardRef = function(e) {
    return T(e) === U;
  };
  f.isFragment = function(e) {
    return T(e) === G;
  };
  f.isLazy = function(e) {
    return T(e) === q;
  };
  f.isMemo = function(e) {
    return T(e) === X;
  };
  f.isPortal = function(e) {
    return T(e) === de;
  };
  f.isProfiler = function(e) {
    return T(e) === F;
  };
  f.isStrictMode = function(e) {
    return T(e) === Y;
  };
  f.isSuspense = function(e) {
    return T(e) === Q;
  };
  f.isSuspenseList = function(e) {
    return T(e) === k;
  };
  f.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === G || e === F || e === Y || e === Q || e === k || typeof e == "object" && e !== null && (e.$$typeof === q || e.$$typeof === X || e.$$typeof === H || e.$$typeof === D || e.$$typeof === U || e.$$typeof === Ye || e.getModuleId !== void 0);
  };
  f.typeOf = T;
  Te.exports = f;
  var _e = Te.exports;
  B = function(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  };
  function we(e) {
    if (Ee.isValidElement(e) || _e.isValidElementType(e) || !B(e)) return e;
    const t = {};
    return Object.keys(e).forEach((r) => {
      t[r] = we(e[r]);
    }), t;
  }
  O = function(e, t, r = {
    clone: true
  }) {
    const n = r.clone ? {
      ...e
    } : e;
    return B(e) && B(t) && Object.keys(t).forEach((s) => {
      Ee.isValidElement(t[s]) || _e.isValidElementType(t[s]) ? n[s] = t[s] : B(t[s]) && Object.prototype.hasOwnProperty.call(e, s) && B(e[s]) ? n[s] = O(e[s], t[s], r) : r.clone ? n[s] = B(t[s]) ? we(t[s]) : t[s] : n[s] = t[s];
    }), n;
  };
  const Fe = (e) => {
    const t = Object.keys(e).map((r) => ({
      key: r,
      val: e[r]
    })) || [];
    return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
      ...r,
      [n.key]: n.val
    }), {});
  };
  De = function(e) {
    const { values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }, unit: r = "px", step: n = 5, ...s } = e, o = Fe(t), i = Object.keys(o);
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
  function Se(e, t) {
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
  function He(e, t) {
    return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
  }
  function Ue(e, t) {
    const r = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!r) return null;
    const [, n, s] = r, o = Number.isNaN(+n) ? n || 0 : +n;
    return e.containerQueries(s).up(o);
  }
  Qe = function(e) {
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
  ke = {
    borderRadius: 4
  };
  function j(e, t) {
    return t ? O(e, t, {
      clone: false
    }) : e;
  }
  const Z = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }, ue = {
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
  A = function(e, t, r) {
    const n = e.theme || {};
    if (Array.isArray(t)) {
      const o = n.breakpoints || ue;
      return t.reduce((i, a, u) => (i[o.up(o.keys[u])] = r(t[u]), i), {});
    }
    if (typeof t == "object") {
      const o = n.breakpoints || ue;
      return Object.keys(t).reduce((i, a) => {
        if (He(o.keys, a)) {
          const u = Ue(n.containerQueries ? n : Xe, a);
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
      const n = r.theme || {}, s = e(r), o = n.breakpoints || ue, i = o.keys.reduce((a, u) => (r[u] && (a = a || {}, a[o.up(u)] = e({
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
  function $e(e = {}) {
    var _a;
    return ((_a = e.keys) == null ? void 0 : _a.reduce((r, n) => {
      const s = e.up(n);
      return r[s] = {}, r;
    }, {})) || {};
  }
  function le(e, t) {
    return e.reduce((r, n) => {
      const s = r[n];
      return (!s || Object.keys(s).length === 0) && delete r[n], r;
    }, t);
  }
  er = function(e, ...t) {
    const r = $e(e), n = [
      r,
      ...t
    ].reduce((s, o) => O(s, o), {});
    return le(Object.keys(r), n);
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
  Re = function(e) {
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
      return A(i, a, (d) => {
        let l = N(c, s, d);
        return d === l && typeof d == "string" && (l = N(c, s, `${t}${d === "default" ? "" : Re(d)}`, d)), r === false ? l : {
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
  let Je, Ve, Ce, et, Pe;
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
  Ce = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  };
  et = Ze((e) => {
    if (e.length > 2) if (Ce[e]) e = Ce[e];
    else return [
      e
    ];
    const [t, r] = e.split(""), n = Je[t], s = Ve[r] || "";
    return Array.isArray(s) ? s.map((o) => n + o) : [
      n + s
    ];
  });
  me = [
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
  pe = [
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
  Pe = [
    ...me,
    ...pe
  ];
  W = function(e, t, r, n) {
    const s = J(e, t, true) ?? r;
    return typeof s == "number" || typeof s == "string" ? (o) => typeof o == "string" ? o : typeof s == "string" ? `calc(${o} * ${s})` : s * o : Array.isArray(s) ? (o) => {
      if (typeof o == "string") return o;
      const i = Math.abs(o), a = s[i];
      return o >= 0 ? a : typeof a == "number" ? -a : `-${a}`;
    } : typeof s == "function" ? s : () => {
    };
  };
  Ae = function(e) {
    return W(e, "spacing", 8);
  };
  L = function(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  };
  tt = function(e, t) {
    return (r) => e.reduce((n, s) => (n[s] = L(t, r), n), {});
  };
  function rt(e, t, r, n) {
    if (!t.includes(r)) return null;
    const s = et(r), o = tt(s, n), i = e[r];
    return A(e, i, o);
  }
  function he(e, t) {
    const r = Ae(e.theme);
    return Object.keys(e).map((n) => rt(e, t, n, r)).reduce(j, {});
  }
  p = function(e) {
    return he(e, me);
  };
  p.propTypes = {};
  p.filterProps = me;
  h = function(e) {
    return he(e, pe);
  };
  h.propTypes = {};
  h.filterProps = pe;
  ve = function(e) {
    return he(e, Pe);
  };
  ve.propTypes = {};
  ve.filterProps = Pe;
  nt = function(e = 8, t = Ae({
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
  E = function(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  };
  function _(e, t) {
    return b({
      prop: e,
      themeKey: "borders",
      transform: t
    });
  }
  st = _("border", E);
  ot = _("borderTop", E);
  it = _("borderRight", E);
  at = _("borderBottom", E);
  ut = _("borderLeft", E);
  lt = _("borderColor");
  ct = _("borderTopColor");
  ft = _("borderRightColor");
  dt = _("borderBottomColor");
  mt = _("borderLeftColor");
  pt = _("outline", E);
  ht = _("outlineColor");
  ee = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = W(e.theme, "shape.borderRadius", 4), r = (n) => ({
        borderRadius: L(t, n)
      });
      return A(e, e.borderRadius, r);
    }
    return null;
  };
  ee.propTypes = {};
  ee.filterProps = [
    "borderRadius"
  ];
  rr = V(st, ot, it, at, ut, lt, ct, ft, dt, mt, ee, pt, ht);
  te = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = W(e.theme, "spacing", 8), r = (n) => ({
        gap: L(t, n)
      });
      return A(e, e.gap, r);
    }
    return null;
  };
  te.propTypes = {};
  te.filterProps = [
    "gap"
  ];
  re = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = W(e.theme, "spacing", 8), r = (n) => ({
        columnGap: L(t, n)
      });
      return A(e, e.columnGap, r);
    }
    return null;
  };
  re.propTypes = {};
  re.filterProps = [
    "columnGap"
  ];
  ne = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = W(e.theme, "spacing", 8), r = (n) => ({
        rowGap: L(t, n)
      });
      return A(e, e.rowGap, r);
    }
    return null;
  };
  ne.propTypes = {};
  ne.filterProps = [
    "rowGap"
  ];
  gt = b({
    prop: "gridColumn"
  });
  yt = b({
    prop: "gridRow"
  });
  bt = b({
    prop: "gridAutoFlow"
  });
  St = b({
    prop: "gridAutoColumns"
  });
  Ct = b({
    prop: "gridAutoRows"
  });
  xt = b({
    prop: "gridTemplateColumns"
  });
  Et = b({
    prop: "gridTemplateRows"
  });
  Tt = b({
    prop: "gridTemplateAreas"
  });
  _t = b({
    prop: "gridArea"
  });
  nr = V(te, re, ne, gt, yt, bt, St, Ct, xt, Et, Tt, _t);
  I = function(e, t) {
    return t === "grey" ? t : e;
  };
  wt = b({
    prop: "color",
    themeKey: "palette",
    transform: I
  });
  $t = b({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: I
  });
  Rt = b({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: I
  });
  sr = V(wt, $t, Rt);
  x = function(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  };
  Pt = b({
    prop: "width",
    transform: x
  });
  ge = (e) => {
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
      return A(e, e.maxWidth, t);
    }
    return null;
  };
  ge.filterProps = [
    "maxWidth"
  ];
  At = b({
    prop: "minWidth",
    transform: x
  });
  vt = b({
    prop: "height",
    transform: x
  });
  Ot = b({
    prop: "maxHeight",
    transform: x
  });
  Bt = b({
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
  jt = b({
    prop: "boxSizing"
  });
  ar = V(Pt, ge, At, vt, Ot, Bt, jt);
  Oe = {
    border: {
      themeKey: "borders",
      transform: E
    },
    borderTop: {
      themeKey: "borders",
      transform: E
    },
    borderRight: {
      themeKey: "borders",
      transform: E
    },
    borderBottom: {
      themeKey: "borders",
      transform: E
    },
    borderLeft: {
      themeKey: "borders",
      transform: E
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
      transform: E
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
      transform: I
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: I
    },
    backgroundColor: {
      themeKey: "palette",
      transform: I
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
      style: ge
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
  function Kt(e, t) {
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
      return d ? d(i) : A(i, n, (m) => {
        let R = N(l, g, m);
        return m === R && typeof m == "string" && (R = N(l, g, `${r}${m === "default" ? "" : Re(m)}`, m)), u === false ? R : {
          [u]: R
        };
      });
    }
    function t(r) {
      const { sx: n, theme: s = {}, nested: o } = r || {};
      if (!n) return null;
      const i = s.unstable_sxConfig ?? Oe;
      function a(u) {
        let c = u;
        if (typeof u == "function") c = u(s);
        else if (typeof u != "object") return u;
        if (!c) return null;
        const g = $e(s.breakpoints), d = Object.keys(g);
        let l = g;
        return Object.keys(c).forEach((y) => {
          const m = Kt(c[y], s);
          if (m != null) if (typeof m == "object") if (i[y]) l = j(l, e(y, m, s, i));
          else {
            const R = A({
              theme: s
            }, m, (se) => ({
              [y]: se
            }));
            It(R, m) ? l[y] = t({
              sx: m,
              theme: s,
              nested: true
            }) : l = j(l, R);
          }
          else l = j(l, e(y, m, s, i));
        }), !o && s.modularCssLayers ? {
          "@layer sx": Se(s, le(d, l))
        } : Se(s, le(d, l));
      }
      return Array.isArray(n) ? n.map(a) : a(n);
    }
    return t;
  };
  Be = Mt();
  Be.filterProps = [
    "sx"
  ];
  function Wt(e, t) {
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
    const { breakpoints: r = {}, palette: n = {}, spacing: s, shape: o = {}, ...i } = e, a = De(r), u = nt(s);
    let c = O({
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: {
        mode: "light",
        ...n
      },
      spacing: u,
      shape: {
        ...ke,
        ...o
      }
    }, i);
    return c = Qe(c), c.applyStyles = Wt, c = t.reduce((g, d) => O(g, d), c), c.unstable_sxConfig = {
      ...Oe,
      ...i == null ? void 0 : i.unstable_sxConfig
    }, c.unstable_sx = function(d) {
      return Be({
        sx: d,
        theme: this
      });
    }, c;
  };
  Lt = function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, r));
  };
  function ye(e, t = 0, r = 1) {
    return Lt(e, t, r);
  }
  zt = function(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let r = e.match(t);
    return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, s) => s < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
  };
  function Nt(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }
  $ = function(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return $(zt(e));
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
  Gt = (e) => {
    const t = $(e);
    return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
  };
  lr = (e, t) => {
    try {
      return Gt(e);
    } catch {
      return e;
    }
  };
  z = function(e) {
    const { type: t, colorSpace: r } = e;
    let { values: n } = e;
    return t.includes("rgb") ? n = n.map((s, o) => o < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
  };
  cr = function(e) {
    if (e.startsWith("#")) return e;
    const { values: t } = $(e);
    return `#${t.map((r, n) => Nt(n === 3 ? Math.round(255 * r) : r)).join("")}`;
  };
  Yt = function(e) {
    e = $(e);
    const { values: t } = e, r = t[0], n = t[1] / 100, s = t[2] / 100, o = n * Math.min(s, 1 - s), i = (c, g = (c + r / 30) % 12) => s - o * Math.max(Math.min(g - 3, 9 - g, 1), -1);
    let a = "rgb";
    const u = [
      Math.round(i(0) * 255),
      Math.round(i(8) * 255),
      Math.round(i(4) * 255)
    ];
    return e.type === "hsla" && (a += "a", u.push(t[3])), z({
      type: a,
      values: u
    });
  };
  ce = function(e) {
    e = $(e);
    let t = e.type === "hsl" || e.type === "hsla" ? $(Yt(e)).values : e.values;
    return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
  };
  fr = function(e, t) {
    const r = ce(e), n = ce(t);
    return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
  };
  Ft = function(e, t) {
    return e = $(e), t = ye(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, z(e);
  };
  dr = function(e, t, r) {
    try {
      return Ft(e, t);
    } catch {
      return e;
    }
  };
  je = function(e, t) {
    if (e = $(e), t = ye(t), e.type.includes("hsl")) e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
    return z(e);
  };
  mr = function(e, t, r) {
    try {
      return je(e, t);
    } catch {
      return e;
    }
  };
  Ie = function(e, t) {
    if (e = $(e), t = ye(t), e.type.includes("hsl")) e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb")) for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
    else if (e.type.includes("color")) for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
    return z(e);
  };
  pr = function(e, t, r) {
    try {
      return Ie(e, t);
    } catch {
      return e;
    }
  };
  Dt = function(e, t = 0.15) {
    return ce(e) > 0.5 ? je(e, t) : Ie(e, t);
  };
  hr = function(e, t, r) {
    try {
      return Dt(e, t);
    } catch {
      return e;
    }
  };
  gr = function(e, t, r, n = 1) {
    const s = (u, c) => Math.round((u ** (1 / n) * (1 - r) + c ** (1 / n) * r) ** n), o = $(e), i = $(t), a = [
      s(o.values[0], i.values[0]),
      s(o.values[1], i.values[1]),
      s(o.values[2], i.values[2])
    ];
    return z({
      type: "rgb",
      values: a
    });
  };
  const xe = (e, t, r, n = []) => {
    let s = e;
    t.forEach((o, i) => {
      i === t.length - 1 ? Array.isArray(s) ? s[Number(o)] = r : s && typeof s == "object" && (s[o] = r) : s && typeof s == "object" && (s[o] || (s[o] = n.includes(o) ? [] : {}), s = s[o]);
    });
  }, Ht = (e, t, r) => {
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
  }, Ut = (e, t) => typeof t == "number" ? [
    "lineHeight",
    "fontWeight",
    "opacity",
    "zIndex"
  ].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
  ie = function(e, t) {
    const { prefix: r, shouldSkipGeneratingVar: n } = t || {}, s = {}, o = {}, i = {};
    return Ht(e, (a, u, c) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(a, u))) {
        const g = `--${r ? `${r}-` : ""}${a.join("-")}`, d = Ut(a, u);
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
  yr = function(e, t = {}) {
    const { getSelector: r = se, disableCssColorScheme: n, colorSchemeSelector: s } = t, { colorSchemes: o = {}, components: i, defaultColorScheme: a = "light", ...u } = e, { vars: c, css: g, varsWithDefaults: d } = ie(u, t);
    let l = d;
    const y = {}, { [a]: m, ...R } = o;
    if (Object.entries(R || {}).forEach(([S, w]) => {
      const { vars: C, css: K, varsWithDefaults: oe } = ie(w, t);
      l = O(l, oe), y[S] = {
        css: K,
        vars: C
      };
    }), m) {
      const { css: S, vars: w, varsWithDefaults: C } = ie(m, t);
      l = O(l, C), y[a] = {
        css: S,
        vars: w
      };
    }
    function se(S, w) {
      var _a, _b;
      let C = s;
      if (s === "class" && (C = ".%s"), s === "data" && (C = "[data-%s]"), (s == null ? void 0 : s.startsWith("data-")) && !s.includes("%s") && (C = `[${s}="%s"]`), S) {
        if (C === "media") return e.defaultColorScheme === S ? ":root" : {
          [`@media (prefers-color-scheme: ${((_b = (_a = o[S]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode) || S})`]: {
            ":root": w
          }
        };
        if (C) return e.defaultColorScheme === S ? `:root, ${C.replace("%s", String(S))}` : C.replace("%s", String(S));
      }
      return ":root";
    }
    return {
      vars: l,
      generateThemeVars: () => {
        let S = {
          ...c
        };
        return Object.entries(y).forEach(([, { vars: w }]) => {
          S = O(S, w);
        }), S;
      },
      generateStyleSheets: () => {
        var _a, _b;
        const S = [], w = e.defaultColorScheme || "light";
        function C(P, v) {
          Object.keys(v).length && S.push(typeof P == "string" ? {
            [P]: {
              ...v
            }
          } : P);
        }
        C(r(void 0, {
          ...g
        }), g);
        const { [w]: K, ...oe } = y;
        if (K) {
          const { css: P } = K, v = (_b = (_a = o[w]) == null ? void 0 : _a.palette) == null ? void 0 : _b.mode, M = !n && v ? {
            colorScheme: v,
            ...P
          } : {
            ...P
          };
          C(r(w, {
            ...M
          }), M);
        }
        return Object.entries(oe).forEach(([P, { css: v }]) => {
          var _a2, _b2;
          const M = (_b2 = (_a2 = o[P]) == null ? void 0 : _a2.palette) == null ? void 0 : _b2.mode, be = !n && M ? {
            colorScheme: M,
            ...v
          } : {
            ...v
          };
          C(r(P, {
            ...be
          }), be);
        }), S;
      }
    };
  };
  br = function(e) {
    return function(r) {
      return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
    };
  };
});
export {
  wt as $,
  ve as A,
  ar as B,
  sr as C,
  nr as D,
  rr as E,
  A as F,
  tr as G,
  er as H,
  L as I,
  Rt as J,
  $t as K,
  gr as L,
  st as M,
  at as N,
  dt as O,
  Jt as P,
  lt as Q,
  ut as R,
  mt as S,
  ee as T,
  it as U,
  ft as V,
  ot as W,
  ct as X,
  E as Y,
  jt as Z,
  Vt as _,
  __tla,
  je as a,
  Gt as a0,
  re as a1,
  nt as a2,
  W as a3,
  Qe as a4,
  $ as a5,
  te as a6,
  ce as a7,
  tt as a8,
  N as a9,
  ir as aA,
  or as aB,
  x as aC,
  Mt as aD,
  ie as aE,
  Pt as aF,
  _t as aa,
  St as ab,
  bt as ac,
  Ct as ad,
  gt as ae,
  yt as af,
  Tt as ag,
  xt as ah,
  Et as ai,
  vt as aj,
  zt as ak,
  p as al,
  me as am,
  Ot as an,
  ge as ao,
  Bt as ap,
  At as aq,
  pt as ar,
  ht as as,
  h as at,
  pe as au,
  I as av,
  z as aw,
  cr as ax,
  ne as ay,
  ke as az,
  Ft as b,
  Re as c,
  O as d,
  Dt as e,
  ae as f,
  J as g,
  Lt as h,
  De as i,
  fr as j,
  B as k,
  Ie as l,
  ur as m,
  Oe as n,
  pr as o,
  mr as p,
  hr as q,
  dr as r,
  Be as s,
  lr as t,
  yr as u,
  Ae as v,
  br as w,
  Yt as x,
  V as y,
  b as z
};
