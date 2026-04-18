import { f as b, __tla as __tla_0 } from "./fullcalendar__loadShare__react__loadShare__-tokQnSgq.js";
import { m as F, __tla as __tla_1 } from "./getColorSchemeSelector-C1WqGkJ4.js";
import { d as H, j as I, b as J, c as Q, g as V, __tla as __tla_2 } from "./DefaultPropsProvider-XYnvdTOt.js";
import { f as X, e as Y, i as Z, c as v, __tla as __tla_3 } from "./index-DvUGxIFq.js";
let fe, le, $e, ue, ee, S;
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
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  let te;
  ee = H();
  te = (e, t) => e.filter((n) => t.includes(n));
  S = (e, t, n) => {
    const o = e.keys[0];
    Array.isArray(t) ? t.forEach((s, r) => {
      n((u, d) => {
        r <= e.keys.length - 1 && (r === 0 ? Object.assign(u, d) : u[e.up(e.keys[r])] = d);
      }, s);
    }) : t && typeof t == "object" ? (Object.keys(t).length > e.keys.length ? e.keys : te(e.keys, Object.keys(t))).forEach((r) => {
      if (e.keys.includes(r)) {
        const u = t[r];
        u !== void 0 && n((d, h) => {
          o === r ? Object.assign(d, h) : d[e.up(r)] = h;
        }, u);
      }
    }) : (typeof t == "number" || typeof t == "string") && n((s, r) => {
      Object.assign(s, r);
    }, t);
  };
  function $(e) {
    return `--Grid-${e}Spacing`;
  }
  function G(e) {
    return `--Grid-parent-${e}Spacing`;
  }
  let E, y, ne, re, se, oe, ie, ce, ae;
  E = "--Grid-columns";
  y = "--Grid-parent-columns";
  ne = ({ theme: e, ownerState: t }) => {
    const n = {};
    return S(e.breakpoints, t.size, (o, s) => {
      let r = {};
      s === "grow" && (r = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      }), s === "auto" && (r = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      }), typeof s == "number" && (r = {
        flexGrow: 0,
        flexBasis: "auto",
        width: `calc(100% * ${s} / var(${y}) - (var(${y}) - ${s}) * (var(${G("column")}) / var(${y})))`
      }), o(n, r);
    }), n;
  };
  re = ({ theme: e, ownerState: t }) => {
    const n = {};
    return S(e.breakpoints, t.offset, (o, s) => {
      let r = {};
      s === "auto" && (r = {
        marginLeft: "auto"
      }), typeof s == "number" && (r = {
        marginLeft: s === 0 ? "0px" : `calc(100% * ${s} / var(${y}) + var(${G("column")}) * ${s} / var(${y}))`
      }), o(n, r);
    }), n;
  };
  se = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {
      [E]: 12
    };
    return S(e.breakpoints, t.columns, (o, s) => {
      const r = s ?? 12;
      o(n, {
        [E]: r,
        "> *": {
          [y]: r
        }
      });
    }), n;
  };
  oe = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return S(e.breakpoints, t.rowSpacing, (o, s) => {
      var _a;
      const r = typeof s == "string" ? s : (_a = e.spacing) == null ? void 0 : _a.call(e, s);
      o(n, {
        [$("row")]: r,
        "> *": {
          [G("row")]: r
        }
      });
    }), n;
  };
  ie = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return S(e.breakpoints, t.columnSpacing, (o, s) => {
      var _a;
      const r = typeof s == "string" ? s : (_a = e.spacing) == null ? void 0 : _a.call(e, s);
      o(n, {
        [$("column")]: r,
        "> *": {
          [G("column")]: r
        }
      });
    }), n;
  };
  ce = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const n = {};
    return S(e.breakpoints, t.direction, (o, s) => {
      o(n, {
        flexDirection: s
      });
    }), n;
  };
  ae = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: "border-box",
    ...e.container && {
      display: "flex",
      flexWrap: "wrap",
      ...e.wrap && e.wrap !== "wrap" && {
        flexWrap: e.wrap
      },
      gap: `var(${$("row")}) var(${$("column")})`
    }
  });
  fe = (e) => {
    const t = [];
    return Object.entries(e).forEach(([n, o]) => {
      o !== false && o !== void 0 && t.push(`grid-${n}-${String(o)}`);
    }), t;
  };
  le = (e, t = "xs") => {
    function n(o) {
      return o === void 0 ? false : typeof o == "string" && !Number.isNaN(Number(o)) || typeof o == "number" && o > 0;
    }
    if (n(e)) return [
      `spacing-${t}-${String(e)}`
    ];
    if (typeof e == "object" && !Array.isArray(e)) {
      const o = [];
      return Object.entries(e).forEach(([s, r]) => {
        n(r) && o.push(`spacing-${s}-${String(r)}`);
      }), o;
    }
    return [];
  };
  ue = (e) => e === void 0 ? [] : typeof e == "object" ? Object.entries(e).map(([t, n]) => `direction-${t}-${n}`) : [
    `direction-xs-${String(e)}`
  ];
  function me(e, t) {
    e.item !== void 0 && delete e.item, e.zeroMinWidth !== void 0 && delete e.zeroMinWidth, t.keys.forEach((n) => {
      e[n] !== void 0 && delete e[n];
    });
  }
  const de = F(), ge = ee("div", {
    name: "MuiGrid",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  });
  function pe(e) {
    return v({
      props: e,
      name: "MuiGrid",
      defaultTheme: de
    });
  }
  $e = function(e = {}) {
    const { createStyledComponent: t = ge, useThemeProps: n = pe, useTheme: o = X, componentName: s = "MuiGrid" } = e, r = (f, c) => {
      const { container: g, direction: a, spacing: l, wrap: i, size: x } = f, w = {
        root: [
          "root",
          g && "container",
          i !== "wrap" && `wrap-xs-${String(i)}`,
          ...ue(a),
          ...fe(x),
          ...g ? le(l, c.breakpoints.keys[0]) : []
        ]
      };
      return Q(w, (k) => V(s, k), {});
    };
    function u(f, c, g = () => true) {
      const a = {};
      return f === null || (Array.isArray(f) ? f.forEach((l, i) => {
        l !== null && g(l) && c.keys[i] && (a[c.keys[i]] = l);
      }) : typeof f == "object" ? Object.keys(f).forEach((l) => {
        const i = f[l];
        i != null && g(i) && (a[l] = i);
      }) : a[c.keys[0]] = f), a;
    }
    const d = t(se, ie, oe, ne, ce, ae, re), h = b.forwardRef(function(c, g) {
      const a = o(), l = n(c), i = Y(l);
      me(i, a.breakpoints);
      const { className: x, children: w, columns: k = 12, container: C = false, component: _ = "div", direction: z = "row", wrap: O = "wrap", size: P = {}, offset: T = {}, spacing: j = 0, rowSpacing: R = j, columnSpacing: W = j, unstable_level: p = 0, ...A } = i, B = u(P, a.breakpoints, (m) => m !== false), M = u(T, a.breakpoints), D = c.columns ?? (p ? void 0 : k), L = c.spacing ?? (p ? void 0 : j), K = c.rowSpacing ?? c.spacing ?? (p ? void 0 : R), U = c.columnSpacing ?? c.spacing ?? (p ? void 0 : W), N = {
        ...i,
        level: p,
        columns: D,
        container: C,
        direction: z,
        wrap: O,
        spacing: L,
        rowSpacing: K,
        columnSpacing: U,
        size: B,
        offset: M
      }, q = r(N, a);
      return I.jsx(d, {
        ref: g,
        as: _,
        ownerState: N,
        className: J(q.root, x),
        ...A,
        children: b.Children.map(w, (m) => {
          var _a;
          return b.isValidElement(m) && Z(m, [
            "Grid"
          ]) && C && m.props.container ? b.cloneElement(m, {
            unstable_level: ((_a = m.props) == null ? void 0 : _a.unstable_level) ?? p + 1
          }) : m;
        })
      });
    });
    return h.muiName = "Grid", h;
  };
});
export {
  __tla,
  fe as a,
  le as b,
  $e as c,
  ue as g,
  ee as s,
  S as t
};
